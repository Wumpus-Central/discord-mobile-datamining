// === Module 10264: cleanUp ===

// Module 10264 (cleanUp)
let result = require("set").fileFinishedImporting("modules/search/managers/AbstractSearchFetchManager.tsx");
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