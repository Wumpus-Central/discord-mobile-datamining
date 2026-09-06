// === Module 5443: InAppNavigationRecord ===

// Module 5443 (InAppNavigationRecord)
import UserSettingsURLUtils from "UserSettingsURLUtils" /* 5454 */;
import Record from "Record" /* 1386 */;

require = fn;
const Routes = fn(1074).Routes;
const RewardFilterTypes = fn(5444).RewardFilterTypes;
const UserSettingsPath = fn(1084).UserSettingsPath;
const InAppNavigationType = { SHOP: "SHOP", SHOP_ORBS_TAB: "SHOP_ORBS_TAB", NITRO_HOME: "NITRO_HOME", QUEST_HOME: "QUEST_HOME", QUEST_ORBS: "QUEST_ORBS", APPS_HOME: "APPS_HOME", SETTINGS: "SETTINGS", PLAYGROUND: "PLAYGROUND" };
const prototype = function InAppNavigationRecord(collectionId) {
  const tmp3 = new prototype(tmp2, tmp);
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
prototype["fromType"] = function fromType(arg0, arg1, label, collectionId, IconComponent) {
  if (obj.SHOP === arg0) {
    obj = { path: Routes.COLLECTIBLES_SHOP, type: tmp8.SHOP };
    if (typeof prototype === "function") {
      const tmp97 = new prototype(tmp7, tmp6, tmp5);
      if (null != obj.collectionId) {
        const _HermesInternal9 = HermesInternal;
        let type7 = "" + obj.type + "_" + obj.collectionId;
      } else {
        type7 = obj.type;
      }
      tmp97.id = type7;
      ({ path: tmp97.path, type: tmp97.type, label: tmp97.label, collectionId: tmp97.collectionId, IconComponent: tmp97.IconComponent } = obj);
      return tmp97;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (tmp8.NITRO_HOME === arg0) {
    obj = { path: Routes.NITRO_HOME, type: tmp8.NITRO_HOME };
    if (typeof prototype === "function") {
      const tmp87 = new prototype(tmp7, tmp6, tmp5, tmp4, tmp3);
      if (null != obj.collectionId) {
        const _HermesInternal8 = HermesInternal;
        let type6 = "" + obj.type + "_" + obj.collectionId;
      } else {
        type6 = obj.type;
      }
      tmp87.id = type6;
      ({ path: tmp87.path, type: tmp87.type, label: tmp87.label, collectionId: tmp87.collectionId, IconComponent: tmp87.IconComponent } = obj);
      return tmp87;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (tmp8.QUEST_HOME === arg0) {
    const obj1 = { path: Routes.QUEST_HOME, type: tmp8.QUEST_HOME };
    if (typeof prototype === "function") {
      const tmp77 = new prototype(tmp7, tmp6, tmp5, tmp4, tmp3);
      if (null != obj1.collectionId) {
        const _HermesInternal7 = HermesInternal;
        let type5 = "" + obj1.type + "_" + obj1.collectionId;
      } else {
        type5 = obj1.type;
      }
      tmp77.id = type5;
      ({ path: tmp77.path, type: tmp77.type, label: tmp77.label, collectionId: tmp77.collectionId, IconComponent: tmp77.IconComponent } = obj1);
      return tmp77;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (tmp8.APPS_HOME === arg0) {
    let obj2 = { path: Routes.GLOBAL_DISCOVERY_APPS, type: tmp8.APPS_HOME };
    if (typeof prototype === "function") {
      const tmp67 = new prototype(tmp7, tmp6, tmp5, tmp4, tmp3);
      if (null != obj2.collectionId) {
        const _HermesInternal6 = HermesInternal;
        let type4 = "" + obj2.type + "_" + obj2.collectionId;
      } else {
        type4 = obj2.type;
      }
      tmp67.id = type4;
      ({ path: tmp67.path, type: tmp67.type, label: tmp67.label, collectionId: tmp67.collectionId, IconComponent: tmp67.IconComponent } = obj2);
      return tmp67;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    let settingsPathToRouteResult = arg1;
    if (tmp8.SETTINGS === arg0) {
      if (settingsPathToRouteResult == null) {
        obj2 = UserSettingsURLUtils;
        settingsPathToRouteResult = obj2.settingsPathToRoute(UserSettingsPath.ACCOUNT);
      }
      const obj3 = { path: settingsPathToRouteResult, label, type: tmp8.SETTINGS };
      if (typeof tmp48 === "function") {
        const tmp58 = new prototype(tmp7, tmp6, tmp5, tmp4, tmp3);
        if (null != obj3.collectionId) {
          const _HermesInternal5 = HermesInternal;
          let type3 = "" + obj3.type + "_" + obj3.collectionId;
        } else {
          type3 = obj3.type;
        }
        tmp58.id = type3;
        ({ path: tmp58.path, type: tmp58.type, label: tmp58.label, collectionId: tmp58.collectionId, IconComponent: tmp58.IconComponent } = obj3);
        return tmp58;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      tmp48 = prototype;
    } else if (tmp8.PLAYGROUND === arg0) {
      let APP = settingsPathToRouteResult;
      if (settingsPathToRouteResult == null) {
        APP = Routes.APP;
      }
      const PLAYGROUND = tmp8.PLAYGROUND;
      if (typeof tmp35 === "function") {
        const tmp43 = new prototype(tmp7, tmp6, tmp5, tmp4, tmp3);
        let combined = PLAYGROUND;
        if (null != collectionId) {
          const _HermesInternal4 = HermesInternal;
          combined = "" + PLAYGROUND + "_" + collectionId;
        }
        tmp43.id = combined;
        tmp43.path = APP;
        tmp43.type = PLAYGROUND;
        tmp43.label = label;
        tmp43.collectionId = collectionId;
        tmp43.IconComponent = IconComponent;
        return tmp43;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      tmp35 = prototype;
    } else if (tmp8.SHOP_ORBS_TAB === arg0) {
      const obj4 = { path: Routes.COLLECTIBLES_SHOP, type: tmp8.SHOP_ORBS_TAB };
      if (typeof prototype === "function") {
        const tmp31 = new prototype(tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
        if (null != obj4.collectionId) {
          const _HermesInternal3 = HermesInternal;
          let type2 = "" + obj4.type + "_" + obj4.collectionId;
        } else {
          type2 = obj4.type;
        }
        tmp31.id = type2;
        ({ path: tmp31.path, type: tmp31.type, label: tmp31.label, collectionId: tmp31.collectionId, IconComponent: tmp31.IconComponent } = obj4);
        return tmp31;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else if (tmp8.QUEST_ORBS === arg0) {
      obj = { path: null, type: null };
      const QUEST_HOME = Routes.QUEST_HOME;
      const VIRTUAL_CURRENCY = RewardFilterTypes.VIRTUAL_CURRENCY;
      const _HermesInternal = HermesInternal;
      obj.path = "" + QUEST_HOME + "?filter=" + VIRTUAL_CURRENCY;
      obj.type = tmp8.QUEST_ORBS;
      if (typeof prototype === "function") {
        const tmp22 = new prototype(tmp7, tmp6, tmp5, "", tmp3, QUEST_HOME, VIRTUAL_CURRENCY);
        if (null != obj.collectionId) {
          const _HermesInternal2 = HermesInternal;
          let type = "" + obj.type + "_" + obj.collectionId;
        } else {
          type = obj.type;
        }
        tmp22.id = type;
        ({ path: tmp22.path, type: tmp22.type, label: tmp22.label, collectionId: tmp22.collectionId, IconComponent: tmp22.IconComponent } = obj);
        return tmp22;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _Error = Error;
      const error = new Error("Unhandled InAppNavigationType");
      throw error;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/autocompleter/record/InAppNavigationRecord.tsx");

export default prototype;
export const InAppNavigationRecord = prototype;
export { InAppNavigationType };