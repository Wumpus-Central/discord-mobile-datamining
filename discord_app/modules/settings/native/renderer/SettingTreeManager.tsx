// === Module 15059: get ===

// Module 15059 (get)
import set from "set" /* 2 */;
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 10670 */;
import map from "map" /* 13997 */;
import frozen from "frozen" /* 13998 */;

const NodeType = GUILD_SELECT_ALL_SERVERS_OPTION_ID.NodeType;
class SettingTreeManagerCache {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = {};
    return obj;
  }
}
const prototype = SettingTreeManagerCache.prototype;
prototype["get"] = function get(arg0) {
  return this.cache[arg0];
};
prototype["set"] = function set(arg0, arg1) {
  this.cache[arg0] = arg1;
};
prototype["clear"] = function clear() {
  this.cache = {};
};
class SettingTreeManager {
  constructor() {
    tmp = SettingTreeManagerCache;
    if (typeof SettingTreeManagerCache !== "function") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    obj = Object.create(new.target.prototype);
    obj1 = Object.create(tmp.prototype);
    obj1[0] = {};
    obj[0] = obj1;
    if (typeof tmp !== "function") {
      str2 = "Trying to call a non-function";
      throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
    }
    obj2 = Object.create(tmp.prototype);
    obj2[0] = {};
    obj[1] = obj2;
    return obj;
  }
}
const prototype2 = SettingTreeManager.prototype;
prototype2["transformParent"] = function transformParent(parent) {
  let tmp = null;
  if (null != parent) {
    let tmp2 = parent;
    if (typeof parent !== "string") {
      tmp2 = parent();
    }
    tmp = tmp2;
  }
  return tmp;
};
prototype2["validate"] = function validate() {

};
prototype2["getAncestors"] = function getAncestors(field) {
  const self = this;
  const items = [];
  let transformParentResult = this.transformParent(frozen.SETTING_RENDERER_CONFIG[field].parent);
  if (null != transformParentResult) {
    do {
      let arr = items.push(transformParentResult);
      let tmp3 = require;
      let tmp4 = dependencyMap;
      transformParentResult = self.transformParent(frozen.SETTING_RENDERER_CONFIG[transformParentResult].parent);
    } while (null != transformParentResult);
  }
  return items;
};
prototype2["isBlocked"] = function isBlocked(field) {
  closure_0 = arg1;
  const ancestors = this.getAncestors(field);
  ancestors.push(field);
  return ancestors.some((arg0) => set.has(arg0));
};
prototype2["getHighestLevelAncestor"] = function getHighestLevelAncestor(setting) {
  const self = this;
  const highestAncestorCache = this.highestAncestorCache;
  const value = highestAncestorCache.get(setting);
  if (null != value) {
    return value;
  } else {
    const ancestors = self.getAncestors(setting);
    let tmp2 = ancestors[ancestors.length - 1];
    if (tmp2 == null) {
      tmp2 = setting;
    }
    const highestAncestorCache2 = self.highestAncestorCache;
    const result = highestAncestorCache2.set(setting, tmp2);
    return tmp2;
  }
};
prototype2["getNearestRouteAncestorDataOrSelf"] = function getNearestRouteAncestorDataOrSelf(setting) {
  const tmp = frozen.SETTING_RENDERER_CONFIG[setting];
  if (tmp.type === NodeType.ROUTE) {
    return tmp;
  } else {
    const self = this;
    const ancestors = this.getAncestors(setting);
    for (const item10013 of ancestors) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = frozen.SETTING_RENDERER_CONFIG[item10013];
      let tmp6 = tmp5;
      let tmp7 = NodeType;
      if (tmp5.type === NodeType.ROUTE) {
        let tmp8 = obj;
        obj.return();
        return tmp5;
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("[SettingTree] No route ancestor found for setting: " + setting);
    throw error;
  }
};
prototype2["getBreadcrumbs"] = function getBreadcrumbs(setting) {
  const self = this;
  const breadcrumbCache = this.breadcrumbCache;
  const value = breadcrumbCache.get(setting);
  if (null != value) {
    return value;
  } else {
    const items = [];
    const ancestors = self.getAncestors(setting);
    for (const item10009 of ancestors) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let obj = map;
      let cachedSettingTitle = obj.getCachedSettingTitle(item10009);
      if (null != cachedSettingTitle) {
        let tmp7 = cachedSettingTitle;
        let arr = items.push(tmp6);
      }
      continue;
    }
    const breadcrumbCache2 = self.breadcrumbCache;
    const result = breadcrumbCache2.set(setting, items.reverse());
    return items;
  }
};
prototype2["clearCaches"] = function clearCaches() {
  const breadcrumbCache = this.breadcrumbCache;
  breadcrumbCache.clear();
  const highestAncestorCache = this.highestAncestorCache;
  highestAncestorCache.clear();
};
let obj = Object.create(SettingTreeManager.prototype);
obj = Object.create(SettingTreeManagerCache.prototype);
obj[0] = {};
obj[0] = obj;
let obj1 = Object.create(SettingTreeManagerCache.prototype);
obj1[0] = {};
obj[1] = obj1;
let result = set.fileFinishedImporting("modules/settings/native/renderer/SettingTreeManager.tsx");

export default obj;