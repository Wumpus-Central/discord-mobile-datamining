// discord_app/modules/search/managers/AbstractSearchFetchManager.tsx
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/search/managers/AbstractSearchFetchManager.tsx");
class AbstractSearchFetchManager {
  constructor() {
    merged = Object.assign({ searchFetchers: null });
    map = new Map();
    merged[0] = map;
    return merged;
  }
}
const prototype = AbstractSearchFetchManager.prototype;
prototype["cleanUp"] = function cleanUp(arg0) {
  this.cancel(arg0);
  this.delete(arg0);
};
prototype["cancel"] = function cancel(arg0) {
  const searchFetchers = this.searchFetchers;
  value = searchFetchers.get(arg0);
  if (value != null) {
    value.cancel();
  }
};
prototype["delete"] = function delete(arg0) {
  const searchFetchers = this.searchFetchers;
  searchFetchers.delete(arg0);
};
prototype["get"] = function get(arg0) {
  const searchFetchers = this.searchFetchers;
  return searchFetchers.get(arg0);
};
prototype["set"] = function set(arg0, arg1) {
  const searchFetchers = this.searchFetchers;
  const result = searchFetchers.set(arg0, arg1);
};

export { AbstractSearchFetchManager };