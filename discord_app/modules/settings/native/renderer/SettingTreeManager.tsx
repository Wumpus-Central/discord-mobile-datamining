// discord_app/modules/settings/native/renderer/SettingTreeManager.tsx
import SettingRendererConstants from "SettingRendererConstants.tsx";
import SettingHookHarness from "SettingHookHarness.tsx";
import SettingsRendererConfig from "../../../user_settings/core/native/SettingsRendererConfig.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const NodeType = SettingRendererConstants.NodeType;
class SettingTreeManagerCache {
  constructor() {
    merged = Object.assign({ cache: null });
    merged[0] = {};
    return merged;
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
    if (typeof SettingTreeManagerCache === "function") {
      merged = Object.assign({ highestAncestorCache: null, breadcrumbCache: null });
      merged1 = Object.assign({ cache: null });
      merged1[0] = {};
      merged[0] = merged1;
      tmp4 = new.target;
      if (typeof tmp === "function") {
        merged2 = Object.assign({ cache: null });
        merged2[0] = {};
        merged[1] = merged2;
        return merged;
      } else {
        str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
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
prototype2["validate"] = function validate() {};
prototype2["getAncestors"] = function getAncestors(field) {
  const self = this;
  const items = [];
  let transformParentResult = this.transformParent(SettingsRendererConfig.SETTING_RENDERER_CONFIG[field].parent);
  if (null != transformParentResult) {
    do {
      let arr = items.push(transformParentResult);
      transformParentResult = self.transformParent(
        SettingsRendererConfig.SETTING_RENDERER_CONFIG[transformParentResult].parent,
      );
    } while (null != transformParentResult);
  }
  return items;
};
prototype2["isBlocked"] = function isBlocked(field, arg1) {
  const ancestors = this.getAncestors(field);
  ancestors.push(field);
  return ancestors.some((item) => set.has(item));
};
prototype2["getHighestLevelAncestor"] = function getHighestLevelAncestor(setting) {
  const self = this;
  const highestAncestorCache = this.highestAncestorCache;
  value = highestAncestorCache.get(setting);
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
  const tmp = SettingsRendererConfig.SETTING_RENDERER_CONFIG[setting];
  if (tmp.type === NodeType.ROUTE) {
    return tmp;
  } else {
    const self = this;
    const ancestors = this.getAncestors(setting);
    for (const item10013 of ancestors) {
      let tmp5 = SettingsRendererConfig.SETTING_RENDERER_CONFIG[item10013];
      if (tmp5.type === NodeType.ROUTE) {
        obj.return();
        return tmp5;
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[SettingTree] No route ancestor found for setting: " + setting);
    throw error;
  }
};
prototype2["getBreadcrumbs"] = function getBreadcrumbs(setting) {
  const self = this;
  const breadcrumbCache = this.breadcrumbCache;
  value = breadcrumbCache.get(setting);
  if (null != value) {
    return value;
  } else {
    const items = [];
    const ancestors = self.getAncestors(setting);
    for (const item10009 of ancestors) {
      let obj = SettingHookHarness;
      let cachedSettingTitle = obj.getCachedSettingTitle(item10009);
      if (null != cachedSettingTitle) {
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
let merged = Object.assign({ highestAncestorCache: null, breadcrumbCache: null });
let merged1 = Object.assign({ cache: null });
merged1[0] = {};
merged[0] = merged1;
let merged2 = Object.assign({ cache: null });
merged2[0] = {};
merged[1] = merged2;
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingTreeManager.tsx");

export default merged;
