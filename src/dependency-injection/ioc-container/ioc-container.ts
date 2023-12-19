/*
 * Basic implementation of a DI Container
 */

export class IocContainer {
  private static _instance: IocContainer = new IocContainer();
  private _dependencies: { [key: string]: Object } = {};

  constructor() {
    if (IocContainer._instance) {
      throw new Error("Can not use new for initializing singletons");
    }
    IocContainer._instance = this;
  }

  public static get instance(): IocContainer {
    return IocContainer._instance;
  }

  register(name: string, dependencies: string[], implementation: any) {
    if (this._dependencies[name]) {
      throw new Error("Dependency already registered");
    }

    let dependenciesImplementations =
      this.getDependenciesImplementations(dependencies);

    this._dependencies[name] = new implementation(
      ...dependenciesImplementations
    );
  }

  resolve<T>(name: string): T {
    if (!this._dependencies[name]) {
      throw new Error(`Unresolved dependency ${name}`);
    }
    return this._dependencies[name] as T;
  }

  private getDependenciesImplementations(names: string[]): Object[] {
    return names.map((name) => this.resolve(name));
  }
}
