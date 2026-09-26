// discord_app/modules/contact_sync/native/ContactSyncActionCreators.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";

const require = globalThis.__r;

let closure_8 = async function _updateDiscoverability(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
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
          const obj7 = { value, done: true };
          return obj7;
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
          const FriendDiscoverySettings2 = React(2021).FriendDiscoverySettings;
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
            setFlagResult = React(1385).setFlag(setting, constants.FIND_BY_PHONE, phone);
            const obj5 = React(1385);
          }
          let setFlagResult1 = setFlagResult;
          if (null != email) {
            setFlagResult1 = React(1385).setFlag(setFlagResult, constants.FIND_BY_EMAIL, email);
            const obj6 = React(1385);
          }
          const FriendDiscoverySettings = React(2021).FriendDiscoverySettings;
          c5 = 1;
          c6 = 1;
          const obj8 = { value: FriendDiscoverySettings.updateSetting(setFlagResult1), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        const obj11 = {
          has_name: typeof closure_131_3 === "string",
          discoverable_phone: null,
          discoverable_email: null,
          contact_sync_enabled: null,
        };
        let discoverable_phone = closure_131_0;
        if (closure_131_0 == null) {
          discoverable_phone = closure_132_0(closure_132_2[4]).hasFlag(closure_131_2, closure_132_6.FIND_BY_PHONE);
          const obj = closure_132_0(closure_132_2[4]);
        }
        obj11.discoverable_phone = discoverable_phone;
        let discoverable_email = closure_131_1;
        if (closure_131_1 == null) {
          discoverable_email = closure_132_0(closure_132_2[4]).hasFlag(closure_131_2, closure_132_6.FIND_BY_EMAIL);
          const obj2 = closure_132_0(closure_132_2[4]);
        }
        obj11.discoverable_email = discoverable_email;
        const obj10 = closure_132_1(closure_132_2[5]);
        obj11.contact_sync_enabled = closure_132_0(closure_132_2[6]).isContactSyncEnabled(
          closure_132_4.getLocalAccount(closure_132_7.CONTACTS),
        );
        obj10.track(closure_132_5.USER_DISCOVERY_UPDATED, obj11);
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
  return (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_129_0 = name;
            const obj5 = { name };
            c3 = 1;
            c4 = 1;
            const obj6 = { value: tmp3(tmp2[7]).update(constants2.CONTACTS, "@me", obj5), done: false };
            return obj6;
          }
        } else {
          let num3 = 1;
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (null != closure_129_0) {
              num3 = closure_129_0.split(" ").length;
            }
            const obj = { num_words: num3, num_chars: null };
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
let closure_0 = asyncGeneratorStep(async (arg0, arg1) => {
  if (constants === 2) {
    constants = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
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
          const enabled = closure_0.enabled;
          closure_130_0 = enabled;
          const name = closure_0.name;
          closure_130_1 = name;
          if (null == id) {
            const obj15 = require("ConnectedAccountsActionCreators");
            const obj4 = { friend_sync: enabled };
            localAccount = 1;
            constants = 1;
            const obj8 = { value: obj15.connect(constants3.CONTACTS, "@me", name, importDefault, obj4), done: false };
            return obj8;
          } else if (undefined !== name) {
            const obj9 = { friend_sync: enabled, name };
            localAccount = 3;
            constants = 1;
            const obj11 = {
              value: require("ConnectedAccountsActionCreators").update(constants3.CONTACTS, id, obj9),
              done: false,
            };
            return obj11;
          } else {
            localAccount = 2;
            constants = 1;
            const obj13 = {
              value: require("ConnectedAccountsActionCreators").setFriendSync(constants3.CONTACTS, id, enabled),
              done: false,
            };
            return obj13;
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
            const obj14 = { value, done: true };
            return obj14;
          } else if (undefined !== closure_130_1) {
            if (null != closure_130_1) {
              num7 = closure_130_1.split(" ").length;
            }
            const obj16 = { num_words: num7, num_chars: null };
            let num8 = 0;
            if (null != closure_130_1) {
              num8 = closure_130_1.length;
            }
            obj16.num_chars = num8;
            require("AnalyticsUtils").track(constants.NAME_SUBMITTED, obj16);
            const obj21 = require("AnalyticsUtils");
          }
        } else {
          if (2 === tmp6) {
            if (arg0 === num7) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj17 = { value, done: true };
              return obj17;
            }
          } else if (arg0 === num7) {
            constants = 3;
            throw value;
          } else if (arg0 !== 2) {
            let length = num7;
            if (null != closure_130_1) {
              length = closure_130_1.split(" ").length;
            }
            const obj = { num_words: length, num_chars: null };
            let num3 = 0;
            if (null != closure_130_1) {
              num3 = closure_130_1.length;
            }
            obj.num_chars = num3;
            require("AnalyticsUtils").track(constants.NAME_SUBMITTED, obj);
            const obj20 = require("AnalyticsUtils");
          }
          constants = 3;
          const obj18 = { value, done: true };
          return obj18;
        }
        const FriendDiscoverySettings = closure_0(tmp3[3]).FriendDiscoverySettings;
        setting = FriendDiscoverySettings.getSetting();
        closure_130_3 = closure_0(tmp3[4]).hasFlag(setting, constants2.FIND_BY_PHONE);
        const obj5 = closure_0(tmp3[4]);
        closure_130_4 = closure_0(tmp3[4]).hasFlag(setting, constants2.FIND_BY_EMAIL);
        const obj6 = closure_0(tmp3[4]);
        const obj19 = {
          is_enabled: closure_130_0,
          am_discoverable_phone: closure_130_3,
          am_discoverable_email: closure_130_4,
        };
        require("AnalyticsUtils").track(constants.CONTACT_SYNC_TOGGLED, obj19);
        constants = 3;
        const obj7 = require("AnalyticsUtils");
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
