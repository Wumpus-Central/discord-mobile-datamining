// discord_app/modules/search/managers/AbstractSearchFetchManager.tsx
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/search/managers/AbstractSearchFetchManager.tsx");
class AbstractSearchFetchManager {
  constructor() {
    const merged = Object.assign({ searchFetchers: null });
    merged[0] = new Map();
    new Map();
    return merged;
  }
  cleanUp(arg0) {
    this.cancel(arg0);
    this.delete(arg0);
  }
  cancel(arg0) {
    const searchFetchers = this.searchFetchers;
    const value = searchFetchers.get(arg0);
    if (value != null) {
      value.cancel();
    }
  }
  delete(arg0) {
    const searchFetchers = this.searchFetchers;
    searchFetchers.delete(arg0);
  }
  get(arg0) {
    const searchFetchers = this.searchFetchers;
    return searchFetchers.get(arg0);
  }
  set(arg0, arg1) {
    const searchFetchers = this.searchFetchers;
    const result = searchFetchers.set(arg0, arg1);
  }
}
const prototype = AbstractSearchFetchManager.prototype;

export { AbstractSearchFetchManager };
