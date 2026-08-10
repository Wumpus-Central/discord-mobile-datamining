// discord_app/modules/contact_sync/native/ContactSyncActionCreators.tsx
import importDefaultResult from "expandEventProperties";
import set from "set";
import ME from "ME";

let c5;
let closure_6;
let error;
let closure_0 = arg1;
function _updateDiscoverability() {
  const self = this;
  const tmp = importDefaultResult((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0) {
      if (constants2 === 2) {
        constants2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          constants2 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              constants2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let localAccount = tmp5;
              let name = tmp2;
              let phone;
              let callback2;
              let dependencyMap;
              name = undefined;
              phone = phone.phone;
              const email = phone.email;
              callback2 = email;
              const FriendDiscoverySettings2 = callback(outer1_2[3]).FriendDiscoverySettings;
              const setting = FriendDiscoverySettings2.getSetting();
              dependencyMap = setting;
              localAccount = outer1_4.getLocalAccount(outer1_7.CONTACTS);
              name = undefined;
              if (localAccount != null) {
                name = localAccount.name;
              }
              let setFlagResult = setting;
              if (null != phone) {
                setFlagResult = callback(outer1_2[4]).setFlag(setting, constants2.FIND_BY_PHONE, phone);
                const obj5 = callback(outer1_2[4]);
              }
              let setFlagResult1 = setFlagResult;
              if (null != email) {
                setFlagResult1 = callback(outer1_2[4]).setFlag(setFlagResult, constants2.FIND_BY_EMAIL, email);
                const obj6 = callback(outer1_2[4]);
              }
              const FriendDiscoverySettings = callback(outer1_2[3]).FriendDiscoverySettings;
              constants = 1;
              constants2 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = FriendDiscoverySettings.updateSetting(setFlagResult1);
              return obj1;
            }
          } else if (arg0 === 1) {
            constants2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants2 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            const obj3 = { has_name: null, discoverable_phone: null, discoverable_email: null, contact_sync_enabled: null };
            obj3[0] = typeof name === "string";
            callback2 = phone;
            if (phone == null) {
              obj = phone(1384);
              callback2 = obj.hasFlag(dependencyMap, constants2.FIND_BY_PHONE);
            }
            obj3[1] = callback2;
            dependencyMap = callback2;
            if (callback2 == null) {
              obj1 = phone(1384);
              dependencyMap = obj1.hasFlag(dependencyMap, constants2.FIND_BY_EMAIL);
            }
            obj3[2] = dependencyMap;
            obj2 = phone(12035);
            obj3[3] = obj2.isContactSyncEnabled(localAccount.getLocalAccount(constants3.CONTACTS));
            callback2(698).track(constants.USER_DISCOVERY_UPDATED, obj3);
            constants2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp39) {
          constants2 = tmp;
          throw tmp39;
        }
      }
    })();
  });
  const _updateDiscoverability = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c3 = importDefaultResult;
({ AnalyticEvents: c5, FriendDiscoveryFlags: closure_6, PlatformTypes: error } = ME);
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  return (function*(arg0) {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp2;
            let closure_1 = tmp3;
            let obj2 = outer1_1(outer1_2[7]);
            const obj1 = { name: null };
            obj1[0] = closure_0;
            c3 = 1;
            c4 = 1;
            obj2 = { value: null, done: false };
            obj2[0] = obj2.update(outer1_7.CONTACTS, "@me", obj1);
            return obj2;
          }
        } else {
          let num3 = 1;
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            if (null != closure_0) {
              num3 = closure_0.split(" ").length;
            }
            obj = { num_words: null, num_chars: null };
            obj[0] = num3;
            let num4 = 0;
            if (null != closure_0) {
              num4 = closure_0.length;
            }
            obj[1] = num4;
            outer1_1(outer1_2[5]).track(outer1_5.NAME_SUBMITTED, obj);
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
closure_0 = importDefaultResult((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let c4 = 0;
  let c5 = 0;
  return (function*(arg0, arg1) {
    if (constants === 2) {
      constants = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        constants = 2;
        if (0 === set) {
          if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_3 = tmp2;
            let setting = tmp3;
            let enabled;
            let name;
            setting = undefined;
            closure_3 = undefined;
            set = undefined;
            localAccount = localAccount.getLocalAccount(outer1_7.CONTACTS);
            let id;
            if (localAccount != null) {
              id = localAccount.id;
            }
            enabled = tmp69.enabled;
            name = tmp69.name;
            if (null == id) {
              const obj15 = callback2(outer1_2[7]);
              const obj1 = { friend_sync: null };
              obj1[0] = enabled;
              set = 1;
              constants = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj15.connect(tmp72.CONTACTS, "@me", name, tmp70, obj1);
              return obj2;
            } else if (undefined !== name) {
              const obj3 = { friend_sync: null, name: null };
              obj3[0] = enabled;
              obj3[1] = name;
              set = 3;
              constants = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = callback2(outer1_2[7]).update(tmp72.CONTACTS, id, obj3);
              return obj4;
            } else {
              let obj9 = callback2(outer1_2[7]);
              set = 2;
              constants = 1;
              let obj5 = { value: null, done: false };
              obj5[0] = obj9.setFriendSync(tmp72.CONTACTS, id, enabled);
              return obj5;
            }
          }
        } else {
          let num7 = 1;
          if (1 === tmp6) {
            if (arg0 === num7) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              let obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else if (undefined !== name) {
              if (null != name) {
                num7 = name.split(" ").length;
              }
              const obj7 = { num_words: null, num_chars: null };
              obj7[0] = num7;
              let num8 = 0;
              if (null != name) {
                num8 = name.length;
              }
              obj7[1] = num8;
              callback2(outer1_2[5]).track(constants.NAME_SUBMITTED, obj7);
              const obj21 = callback2(outer1_2[5]);
            }
          } else {
            if (2 === tmp6) {
              if (arg0 === num7) {
                constants = 3;
                throw arg1;
              } else if (arg0 === 2) {
                constants = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
              }
            } else if (arg0 === num7) {
              constants = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              let length = num7;
              if (null != name) {
                length = name.split(" ").length;
              }
              obj = { num_words: null, num_chars: null };
              obj[0] = length;
              let num3 = 0;
              if (null != name) {
                num3 = name.length;
              }
              obj[1] = num3;
              callback2(outer1_2[5]).track(constants.NAME_SUBMITTED, obj);
              const obj20 = callback2(outer1_2[5]);
            }
            constants = 3;
            obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          }
          const FriendDiscoverySettings = callback(outer1_2[3]).FriendDiscoverySettings;
          setting = FriendDiscoverySettings.getSetting();
          obj4 = callback(outer1_2[4]);
          closure_3 = obj4.hasFlag(setting, outer1_6.FIND_BY_PHONE);
          obj5 = callback(outer1_2[4]);
          set = obj5.hasFlag(setting, outer1_6.FIND_BY_EMAIL);
          obj6 = callback2(outer1_2[5]);
          const obj10 = { is_enabled: null, am_discoverable_phone: null, am_discoverable_email: null };
          obj10[0] = enabled;
          obj10[1] = closure_3;
          obj10[2] = set;
          obj6.track(constants.CONTACT_SYNC_TOGGLED, obj10);
          constants = 3;
        }
      } catch (tmp48) {
        constants = tmp;
        throw tmp48;
      }
    }
  })();
});
const result = require("ME").fileFinishedImporting("modules/contact_sync/native/ContactSyncActionCreators.tsx");

export default {
  updateName: function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateDiscoverability(arg0) {
    const self = this;
    const apply = _updateDiscoverability.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateContactSyncEnabled: function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};