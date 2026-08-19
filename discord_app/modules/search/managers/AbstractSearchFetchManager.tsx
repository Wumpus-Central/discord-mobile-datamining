// discord_app/modules/search/managers/AbstractSearchFetchManager.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

let result = obj132.fileFinishedImporting("modules/search/managers/AbstractSearchFetchManager.tsx");
class AbstractSearchFetchManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj[0] = map;
    return obj;
  }
}
const prototype = AbstractSearchFetchManager.prototype;
prototype["cleanUp"] = function cleanUp(arg0) {
  this.cancel(arg0);
  this.delete(arg0);
};
prototype["cancel"] = function cancel(arg0) {
  const searchFetchers = this.searchFetchers;
  const value = searchFetchers.get(arg0);
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