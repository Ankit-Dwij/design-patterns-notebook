/* SINGLETON -
 *    We have a single instance of a class throughout the entire application .
 *    We do not use the 'new' keyword.
 *    We get the same instance everytime we use the class
 */

export class StatsTracker {
  buttonClicks: number = 0;
  facebookShares: number = 0;
  twitterShares: number = 0;

  private static _instance: StatsTracker = new StatsTracker();

  private constructor() {
    if (StatsTracker._instance) {
      throw new Error("Cannot initialize singleton class using new");
    }
    StatsTracker._instance = this;
  }

  public static get instance(): StatsTracker {
    return StatsTracker._instance;
  }
}
