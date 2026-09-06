// discord_app/modules/contact_sync/native/ContactSyncActionCreators.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";

let closure_8 = async function _updateDiscoverability(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          const phone = closure_0.phone;
          closure_131_0 = phone;
          const email = closure_0.email;
          closure_131_1 = email;
          const FriendDiscoverySettings2 = React(1935).FriendDiscoverySettings;
          const setting = FriendDiscoverySettings2.getSetting();
          closure_131_2 = setting;
          localAccount = localAccount.getLocalAccount(constants2.CONTACTS);
          let name;
          if (localAccount != null) {
            name = localAccount.name;
          }
          closure_131_3 = name;
          let setFlagResult = setting;
          if (null != phone) {
            setFlagResult = React(1384).setFlag(setting, constants.FIND_BY_PHONE, phone);
            const obj5 = React(1384);
          }
          let setFlagResult1 = setFlagResult;
          if (null != email) {
            setFlagResult1 = React(1384).setFlag(setFlagResult, constants.FIND_BY_EMAIL, email);
            const obj6 = React(1384);
          }
          const FriendDiscoverySettings = React(1935).FriendDiscoverySettings;
          c5 = 1;
          c6 = 1;
          let obj1 = { value: FriendDiscoverySettings.updateSetting(setFlagResult1), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        let obj2 = { value, done: true };
        return obj2;
      } else {
        const obj3 = {
          has_name: typeof closure_131_3 === "string",
          discoverable_phone: null,
          discoverable_email: null,
          contact_sync_enabled: null,
        };
        let discoverable_phone = closure_131_0;
        if (closure_131_0 == null) {
          obj = closure_132_0(closure_132_2[4]);
          discoverable_phone = obj.hasFlag(closure_131_2, closure_132_6.FIND_BY_PHONE);
        }
        obj3.discoverable_phone = discoverable_phone;
        let discoverable_email = closure_131_1;
        if (closure_131_1 == null) {
          obj1 = closure_132_0(closure_132_2[4]);
          discoverable_email = obj1.hasFlag(closure_131_2, closure_132_6.FIND_BY_EMAIL);
        }
        obj3.discoverable_email = discoverable_email;
        obj2 = closure_132_0(closure_132_2[6]);
        obj3.contact_sync_enabled = obj2.isContactSyncEnabled(closure_132_4.getLocalAccount(closure_132_7.CONTACTS));
        closure_132_1(closure_132_2[5]).track(closure_132_5.USER_DISCOVERY_UPDATED, obj3);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp39) {
      c6 = tmp;
      throw tmp39;
    }
  }
};
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, FriendDiscoveryFlags: metroRequire, PlatformTypes: closure_7 } = Constants);
asyncGeneratorStep(async (name) => {
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = name;
            let obj2 = tmp3(tmp2[7]);
            const obj1 = { name };
            c3 = 1;
            c4 = 1;
            obj2 = { value: null, done: false };
            obj2.value = obj2.update(constants2.CONTACTS, "@me", obj1);
            return obj2;
          }
        } else {
          let num3 = 1;
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            if (null != closure_129_0) {
              num3 = closure_129_0.split(" ").length;
            }
            obj = { num_words: num3, num_chars: null };
            let num4 = 0;
            if (null != closure_129_0) {
              num4 = closure_129_0.length;
            }
            obj.num_chars = num4;
            tmp3(tmp2[5]).track(constants.NAME_SUBMITTED, obj);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } catch (tmp18) {
        c4 = tmp;
        throw tmp18;
      }
    }
  })();
});
let closure_0 = asyncGeneratorStep(async (arg0, value) => {
  if (constants === 2) {
    constants = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      constants = 2;
      if (0 === localAccount) {
        if (arg0 === 1) {
          constants = 3;
          throw value;
        } else if (arg0 === 2) {
          constants = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          let setting;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          localAccount = localAccount.getLocalAccount(constants3.CONTACTS);
          let id;
          if (localAccount != null) {
            id = localAccount.id;
          }
          const enabled = tmp68.enabled;
          closure_130_0 = enabled;
          const name = tmp68.name;
          closure_130_1 = name;
          if (null == id) {
            const obj15 = require("ConnectedAccountsActionCreators");
            const obj1 = { friend_sync: enabled };
            localAccount = 1;
            constants = 1;
            const obj2 = { value: obj15.connect(tmp71.CONTACTS, "@me", name, tmp69, obj1), done: false };
            return obj2;
          } else if (undefined !== name) {
            const obj3 = { friend_sync: enabled, name };
            localAccount = 3;
            constants = 1;
            let obj4 = {
              value: require("ConnectedAccountsActionCreators").update(tmp71.CONTACTS, id, obj3),
              done: false,
            };
            return obj4;
          } else {
            let obj9 = require("ConnectedAccountsActionCreators");
            localAccount = 2;
            constants = 1;
            let obj5 = { value: obj9.setFriendSync(tmp71.CONTACTS, id, enabled), done: false };
            return obj5;
          }
        }
      } else {
        let num7 = 1;
        if (1 === tmp6) {
          if (arg0 === num7) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            constants = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else if (undefined !== closure_130_1) {
            if (null != closure_130_1) {
              num7 = closure_130_1.split(" ").length;
            }
            const obj7 = { num_words: num7, num_chars: null };
            let num8 = 0;
            if (null != closure_130_1) {
              num8 = closure_130_1.length;
            }
            obj7.num_chars = num8;
            require("AnalyticsUtils").track(constants.NAME_SUBMITTED, obj7);
            const obj21 = require("AnalyticsUtils");
          }
        } else {
          if (2 === tmp6) {
            if (arg0 === num7) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === num7) {
            constants = 3;
            throw value;
          } else if (arg0 !== 2) {
            let length = num7;
            if (null != closure_130_1) {
              length = closure_130_1.split(" ").length;
            }
            obj = { num_words: length, num_chars: null };
            let num3 = 0;
            if (null != closure_130_1) {
              num3 = closure_130_1.length;
            }
            obj.num_chars = num3;
            require("AnalyticsUtils").track(constants.NAME_SUBMITTED, obj);
            const obj20 = require("AnalyticsUtils");
          }
          constants = 3;
          obj9 = { value, done: true };
          return obj9;
        }
        const FriendDiscoverySettings = closure_0(tmp3[3]).FriendDiscoverySettings;
        setting = FriendDiscoverySettings.getSetting();
        obj4 = closure_0(tmp3[4]);
        closure_130_3 = obj4.hasFlag(setting, constants2.FIND_BY_PHONE);
        obj5 = closure_0(tmp3[4]);
        closure_130_4 = obj5.hasFlag(setting, constants2.FIND_BY_EMAIL);
        obj6 = require("AnalyticsUtils");
        const obj10 = {
          is_enabled: closure_130_0,
          am_discoverable_phone: closure_130_3,
          am_discoverable_email: closure_130_4,
        };
        obj6.track(constants.CONTACT_SYNC_TOGGLED, obj10);
        constants = 3;
      }
    } catch (tmp48) {
      constants = tmp;
      throw tmp48;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncActionCreators.tsx");

export default {
  updateName: function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateDiscoverability() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateContactSyncEnabled: function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
};
