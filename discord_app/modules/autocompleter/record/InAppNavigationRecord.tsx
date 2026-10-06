// === Module 5629: InAppNavigationRecord ===

// Module 5629 (InAppNavigationRecord)
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import UserSettingsURLUtils from "UserSettingsURLUtils" /* 5640 */;
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
const UserSettingsPath = UserSettingsConstants.UserSettingsPath;
const InAppNavigationType = { SHOP: "SHOP", SHOP_ORBS_TAB: "SHOP_ORBS_TAB", NITRO_HOME: "NITRO_HOME", QUEST_HOME: "QUEST_HOME", QUEST_ORBS: "QUEST_ORBS", APPS_HOME: "APPS_HOME", SETTINGS: "SETTINGS", PLAYGROUND: "PLAYGROUND" };
class InAppNavigationRecord extends Record {
  constructor(collectionId) {
    let type;
    const tmp3 = new InAppNavigationRecord(tmp2, tmp);
    if (null != collectionId.collectionId) {
      const _HermesInternal = HermesInternal;
      type = "" + collectionId.type + "_" + collectionId.collectionId;
    } else {
      type = collectionId.type;
    }
    tmp3.id = type;
    ({ path: tmp3.path, type: tmp3.type, label: tmp3.label, collectionId: tmp3.collectionId, IconComponent: tmp3.IconComponent } = collectionId);
    return tmp3;
  }
  static fromType(arg0, arg1, label, collectionId, IconComponent) {
    let QUEST_HOME;
    let VIRTUAL_CURRENCY;
    let obj;
    if (obj.SHOP === arg0) {
      const obj2 = { path: Routes.COLLECTIBLES_SHOP, type: obj.SHOP };
      const self24 = this;
      if (typeof InAppNavigationRecord === "function") {
        let type7;
        const self25 = this;
        const self26 = this;
        const tmp71 = new InAppNavigationRecord(tmp7, tmp6, tmp5);
        if (null != obj2.collectionId) {
          const _HermesInternal9 = HermesInternal;
          type7 = "" + obj2.type + "_" + obj2.collectionId;
        } else {
          type7 = obj2.type;
        }
        tmp71.id = type7;
        ({ path: tmp71.path, type: tmp71.type, label: tmp71.label, collectionId: tmp71.collectionId, IconComponent: tmp71.IconComponent } = obj2);
        return tmp71;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else if (obj.NITRO_HOME === arg0) {
      const obj4 = { path: Routes.NITRO_HOME, type: obj.NITRO_HOME };
      const self21 = this;
      if (typeof InAppNavigationRecord === "function") {
        let type6;
        const self22 = this;
        const self23 = this;
        const tmp64 = new InAppNavigationRecord(tmp7, tmp6, tmp5, tmp4, tmp3);
        if (null != obj4.collectionId) {
          const _HermesInternal8 = HermesInternal;
          type6 = "" + obj4.type + "_" + obj4.collectionId;
        } else {
          type6 = obj4.type;
        }
        tmp64.id = type6;
        ({ path: tmp64.path, type: tmp64.type, label: tmp64.label, collectionId: tmp64.collectionId, IconComponent: tmp64.IconComponent } = obj4);
        return tmp64;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else if (obj.QUEST_HOME === arg0) {
      const obj5 = { path: Routes.QUEST_HOME, type: obj.QUEST_HOME };
      const self18 = this;
      if (typeof InAppNavigationRecord === "function") {
        let type5;
        const self19 = this;
        const self20 = this;
        const tmp57 = new InAppNavigationRecord(tmp7, tmp6, tmp5, tmp4, tmp3);
        if (null != obj5.collectionId) {
          const _HermesInternal7 = HermesInternal;
          type5 = "" + obj5.type + "_" + obj5.collectionId;
        } else {
          type5 = obj5.type;
        }
        tmp57.id = type5;
        ({ path: tmp57.path, type: tmp57.type, label: tmp57.label, collectionId: tmp57.collectionId, IconComponent: tmp57.IconComponent } = obj5);
        return tmp57;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else if (obj.APPS_HOME === arg0) {
      const obj6 = { path: Routes.GLOBAL_DISCOVERY_APPS, type: obj.APPS_HOME };
      const self15 = this;
      if (typeof InAppNavigationRecord === "function") {
        let type4;
        const self16 = this;
        const self17 = this;
        const tmp50 = new InAppNavigationRecord(tmp7, tmp6, tmp5, tmp4, tmp3);
        if (null != obj6.collectionId) {
          const _HermesInternal6 = HermesInternal;
          type4 = "" + obj6.type + "_" + obj6.collectionId;
        } else {
          type4 = obj6.type;
        }
        tmp50.id = type4;
        ({ path: tmp50.path, type: tmp50.type, label: tmp50.label, collectionId: tmp50.collectionId, IconComponent: tmp50.IconComponent } = obj6);
        return tmp50;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      let settingsPathToRouteResult = arg1;
      if (obj.SETTINGS === arg0) {
        if (settingsPathToRouteResult == null) {
          const obj3 = UserSettingsURLUtils;
          settingsPathToRouteResult = obj3.settingsPathToRoute(UserSettingsPath.ACCOUNT);
        }
        const obj7 = { path: settingsPathToRouteResult, label, type: obj.SETTINGS };
        const self12 = this;
        if (typeof InAppNavigationRecord === "function") {
          let type3;
          const self13 = this;
          const self14 = this;
          const tmp44 = new InAppNavigationRecord(tmp7, tmp6, tmp5, tmp4, tmp3);
          if (null != obj7.collectionId) {
            const _HermesInternal5 = HermesInternal;
            type3 = "" + obj7.type + "_" + obj7.collectionId;
          } else {
            type3 = obj7.type;
          }
          tmp44.id = type3;
          ({ path: tmp44.path, type: tmp44.type, label: tmp44.label, collectionId: tmp44.collectionId, IconComponent: tmp44.IconComponent } = obj7);
          return tmp44;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (obj.PLAYGROUND === arg0) {
        let APP = settingsPathToRouteResult;
        if (settingsPathToRouteResult == null) {
          APP = Routes.APP;
        }
        const PLAYGROUND = tmp8.PLAYGROUND;
        const self9 = this;
        if (typeof InAppNavigationRecord === "function") {
          const self10 = this;
          const self11 = this;
          const tmp32 = new InAppNavigationRecord(tmp7, tmp6, tmp5, tmp4, tmp3);
          let combined = PLAYGROUND;
          if (null != collectionId) {
            const _HermesInternal4 = HermesInternal;
            combined = "" + PLAYGROUND + "_" + collectionId;
          }
          tmp32.id = combined;
          tmp32.path = APP;
          tmp32.type = PLAYGROUND;
          tmp32.label = label;
          tmp32.collectionId = collectionId;
          tmp32.IconComponent = IconComponent;
          return tmp32;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (obj.SHOP_ORBS_TAB === arg0) {
        const obj8 = { path: Routes.COLLECTIBLES_SHOP, type: obj.SHOP_ORBS_TAB };
        const self6 = this;
        if (typeof InAppNavigationRecord === "function") {
          let type2;
          const self7 = this;
          const self8 = this;
          const tmp23 = new InAppNavigationRecord(tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
          if (null != obj8.collectionId) {
            const _HermesInternal3 = HermesInternal;
            type2 = "" + obj8.type + "_" + obj8.collectionId;
          } else {
            type2 = obj8.type;
          }
          tmp23.id = type2;
          ({ path: tmp23.path, type: tmp23.type, label: tmp23.label, collectionId: tmp23.collectionId, IconComponent: tmp23.IconComponent } = obj8);
          return tmp23;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (obj.QUEST_ORBS === arg0) {
        obj = { path: "" + QUEST_HOME + "?filter=" + VIRTUAL_CURRENCY, type: obj.QUEST_ORBS };
        QUEST_HOME = Routes.QUEST_HOME;
        VIRTUAL_CURRENCY = RewardFilterTypes.VIRTUAL_CURRENCY;
        const _HermesInternal = HermesInternal;
        const self3 = this;
        if (typeof InAppNavigationRecord === "function") {
          let type;
          const self4 = this;
          const self5 = this;
          const tmp17 = new InAppNavigationRecord(tmp7, tmp6, tmp5, "", tmp3, QUEST_HOME, VIRTUAL_CURRENCY);
          if (null != obj.collectionId) {
            const _HermesInternal2 = HermesInternal;
            type = "" + obj.type + "_" + obj.collectionId;
          } else {
            type = obj.type;
          }
          tmp17.id = type;
          ({ path: tmp17.path, type: tmp17.type, label: tmp17.label, collectionId: tmp17.collectionId, IconComponent: tmp17.IconComponent } = obj);
          return tmp17;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Unhandled InAppNavigationType");
        throw error;
      }
    }
  }
}
const result = size.fileFinishedImporting("modules/autocompleter/record/InAppNavigationRecord.tsx");

export default InAppNavigationRecord;
export { InAppNavigationRecord };
export { InAppNavigationType };