/* METHOD DECORATORS */
// ref : https://stackoverflow.com/a/63034220

function before(hook: Function) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    let original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      hook = hook.bind(this);
      hook();
      return original.apply(this, args);
    };
  };
}

export class Whatever {
  private _secret_key = "abcde";
  foo(): void {
    console.log("foo");
  }

  @before(() => {
    console.log("before hook called");
  })
  bar(): void {
    console.log("bar");
    console.log(this._secret_key);
  }
}

let c = new Whatever();
c.foo(); // foo
c.bar(); // Error
