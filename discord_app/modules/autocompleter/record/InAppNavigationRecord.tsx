// discord_app/modules/autocompleter/record/InAppNavigationRecord.tsx
import "toJS";
import { Routes } from "ME";
import { RewardFilterTypes } from "QuestsExperimentLocations";
import { UserSettingsPath } from "MAX_FAVORITES";

const require = arg1;
let obj = { SHOP: "SHOP", SHOP_ORBS_TAB: "SHOP_ORBS_TAB", NITRO_HOME: "NITRO_HOME", QUEST_HOME: "QUEST_HOME", QUEST_ORBS: "QUEST_ORBS", APPS_HOME: "APPS_HOME", SETTINGS: "SETTINGS", PLAYGROUND: "PLAYGROUND" };
let prototype;
prototype = function InAppNavigationRecord(collectionId) {
  const tmp3 = new prototype(tmp2, tmp);
  // ThrowIfThisInitialized (0x7c)
  if (null != collectionId.collectionId) {
    const _HermesInternal = HermesInternal;
    let type = "" + collectionId.type + "_" + collectionId.collectionId;
  } else {
    type = collectionId.type;
  }
  tmp3.id = type;
  ({ path: tmp3.path, type: tmp3.type, label: tmp3.label, collectionId: tmp3.collectionId, IconComponent: tmp3.IconComponent } = collectionId);
  return tmp3;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromType"] = function fromType(arg0) {
  if (obj.SHOP === arg0) {
    obj = { path: null, type: null };
    obj[0] = Routes.COLLECTIBLES_SHOP;
    obj[1] = tmp7.SHOP;
    if (typeof prototype !== "function") {
      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    const tmp96 = new prototype("Trying to call a non-function", tmp6, tmp5);
    // ThrowIfThisInitialized (0x7c)
    if (null != obj.collectionId) {
      const _HermesInternal9 = HermesInternal;
      let type7 = "" + obj.type + "_" + obj.collectionId;
    } else {
      type7 = obj.type;
    }
    tmp96.id = type7;
    ({ path: tmp96.path, type: tmp96.type, label: tmp96.label, collectionId: tmp96.collectionId, IconComponent: tmp96.IconComponent } = obj);
    return tmp96;
  } else if (tmp7.NITRO_HOME === arg0) {
    obj = { path: null, type: null };
    obj[0] = Routes.NITRO_HOME;
    obj[1] = tmp7.NITRO_HOME;
    if (typeof prototype !== "function") {
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    const tmp86 = new prototype("Trying to call a non-function", tmp6, tmp5, tmp4, tmp3);
    // ThrowIfThisInitialized (0x7c)
    if (null != obj.collectionId) {
      const _HermesInternal8 = HermesInternal;
      let type6 = "" + obj.type + "_" + obj.collectionId;
    } else {
      type6 = obj.type;
    }
    tmp86.id = type6;
    ({ path: tmp86.path, type: tmp86.type, label: tmp86.label, collectionId: tmp86.collectionId, IconComponent: tmp86.IconComponent } = obj);
    return tmp86;
  } else if (tmp7.QUEST_HOME === arg0) {
    const obj1 = { path: null, type: null };
    obj1[0] = Routes.QUEST_HOME;
    obj1[1] = tmp7.QUEST_HOME;
    if (typeof prototype !== "function") {
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    const tmp76 = new prototype("Trying to call a non-function", tmp6, tmp5, tmp4, tmp3);
    // ThrowIfThisInitialized (0x7c)
    if (null != obj1.collectionId) {
      const _HermesInternal7 = HermesInternal;
      let type5 = "" + obj1.type + "_" + obj1.collectionId;
    } else {
      type5 = obj1.type;
    }
    tmp76.id = type5;
    ({ path: tmp76.path, type: tmp76.type, label: tmp76.label, collectionId: tmp76.collectionId, IconComponent: tmp76.IconComponent } = obj1);
    return tmp76;
  } else if (tmp7.APPS_HOME === arg0) {
    let obj2 = { path: null, type: null };
    obj2[0] = Routes.GLOBAL_DISCOVERY_APPS;
    obj2[1] = tmp7.APPS_HOME;
    if (typeof prototype !== "function") {
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    const tmp66 = new prototype("Trying to call a non-function", tmp6, tmp5, tmp4, tmp3);
    // ThrowIfThisInitialized (0x7c)
    if (null != obj2.collectionId) {
      const _HermesInternal6 = HermesInternal;
      let type4 = "" + obj2.type + "_" + obj2.collectionId;
    } else {
      type4 = obj2.type;
    }
    tmp66.id = type4;
    ({ path: tmp66.path, type: tmp66.type, label: tmp66.label, collectionId: tmp66.collectionId, IconComponent: tmp66.IconComponent } = obj2);
    return tmp66;
  } else {
    let settingsPathToRouteResult = arg1;
    throwTypeErrorResult = arg2;
    if (tmp7.SETTINGS === arg0) {
      if (settingsPathToRouteResult == null) {
        obj2 = require(5137) /* settingsPathToRoute */;
        settingsPathToRouteResult = obj2.settingsPathToRoute(UserSettingsPath.ACCOUNT);
      }
      const obj3 = { path: null, label: null, type: null };
      obj3[0] = settingsPathToRouteResult;
      obj3[1] = arg2;
      obj3[2] = tmp7.SETTINGS;
      if (typeof prototype !== "function") {
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      const tmp57 = new prototype("Trying to call a non-function", tmp6, tmp5, tmp4, tmp3);
      // ThrowIfThisInitialized (0x7c)
      if (null != obj3.collectionId) {
        const _HermesInternal5 = HermesInternal;
        let type3 = "" + obj3.type + "_" + obj3.collectionId;
      } else {
        type3 = obj3.type;
      }
      tmp57.id = type3;
      ({ path: tmp57.path, type: tmp57.type, label: tmp57.label, collectionId: tmp57.collectionId, IconComponent: tmp57.IconComponent } = obj3);
      return tmp57;
    } else if (tmp7.PLAYGROUND === arg0) {
      let APP = settingsPathToRouteResult;
      if (settingsPathToRouteResult == null) {
        APP = Routes.APP;
      }
      const PLAYGROUND = tmp7.PLAYGROUND;
      if (typeof prototype !== "function") {
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      const tmp42 = new prototype("Trying to call a non-function", tmp6, tmp5, tmp4, tmp3);
      // ThrowIfThisInitialized (0x7c)
      let combined = PLAYGROUND;
      if (null != arg3) {
        const _HermesInternal4 = HermesInternal;
        combined = "" + PLAYGROUND + "_" + arg3;
      }
      tmp42.id = combined;
      tmp42.path = APP;
      tmp42.type = PLAYGROUND;
      tmp42.label = arg2;
      tmp42.collectionId = arg3;
      tmp42.IconComponent = arg4;
      return tmp42;
    } else if (tmp7.SHOP_ORBS_TAB === arg0) {
      const obj4 = { path: null, type: null };
      obj4[0] = Routes.COLLECTIBLES_SHOP;
      obj4[1] = tmp7.SHOP_ORBS_TAB;
      if (typeof prototype !== "function") {
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      const tmp30 = new prototype("Trying to call a non-function", tmp6, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
      // ThrowIfThisInitialized (0x7c)
      if (null != obj4.collectionId) {
        const _HermesInternal3 = HermesInternal;
        let type2 = "" + obj4.type + "_" + obj4.collectionId;
      } else {
        type2 = obj4.type;
      }
      tmp30.id = type2;
      ({ path: tmp30.path, type: tmp30.type, label: tmp30.label, collectionId: tmp30.collectionId, IconComponent: tmp30.IconComponent } = obj4);
      return tmp30;
    } else if (tmp7.QUEST_ORBS === arg0) {
      obj = { path: null, type: null };
      const QUEST_HOME = Routes.QUEST_HOME;
      const VIRTUAL_CURRENCY = RewardFilterTypes.VIRTUAL_CURRENCY;
      const _HermesInternal = HermesInternal;
      obj[0] = "" + QUEST_HOME + "?filter=" + VIRTUAL_CURRENCY;
      obj[1] = tmp7.QUEST_ORBS;
      if (typeof prototype !== "function") {
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      const tmp21 = new prototype("Trying to call a non-function", tmp6, tmp5, "", tmp3, QUEST_HOME, VIRTUAL_CURRENCY);
      // ThrowIfThisInitialized (0x7c)
      if (null != obj.collectionId) {
        const _HermesInternal2 = HermesInternal;
        let type = "" + obj.type + "_" + obj.collectionId;
      } else {
        type = obj.type;
      }
      tmp21.id = type;
      ({ path: tmp21.path, type: tmp21.type, label: tmp21.label, collectionId: tmp21.collectionId, IconComponent: tmp21.IconComponent } = obj);
      return tmp21;
    } else {
      const _Error = Error;
      const error = new Error("Unhandled InAppNavigationType");
      throw error;
    }
  }
};
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/autocompleter/record/InAppNavigationRecord.tsx");

export default prototype;
export const InAppNavigationRecord = prototype;
export const InAppNavigationType = obj;