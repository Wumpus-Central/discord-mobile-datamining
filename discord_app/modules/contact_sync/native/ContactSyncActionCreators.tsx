// === Module 12348: ContactSyncActionCreators ===

// Module 12348 (ContactSyncActionCreators)
import FlagUtils from "FlagUtils" /* 1390 */;
import UserSettings from "UserSettings" /* 2028 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5447 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c5, c6, constants;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj = function _updateDiscoverability() {
  let constants2;
  obj = _asyncToGenerator(async (arg0) => {
    let discoverable_email;
    let discoverable_phone;
    let obj3;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let phone;
        let email;
        let setting;
        let name;
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
            let closure_4 = tmp4;
            let closure_3 = tmp;
            phone = closure_0.phone;
            email = closure_0.email;
            const FriendDiscoverySettings2 = UserSettings.FriendDiscoverySettings;
            setting = FriendDiscoverySettings2.getSetting();
            localAccount = localAccount.getLocalAccount(constants2.CONTACTS);
            name = undefined;
            if (localAccount != null) {
              name = localAccount.name;
            }
            let setFlagResult = setting;
            if (null != phone) {
              const obj5 = FlagUtils;
              setFlagResult = obj5.setFlag(setting, constants.FIND_BY_PHONE, phone);
            }
            let setFlagResult1 = setFlagResult;
            if (null != email) {
              const obj6 = FlagUtils;
              setFlagResult1 = obj6.setFlag(setFlagResult, constants.FIND_BY_EMAIL, email);
            }
            const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
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
          const obj10 = { has_name: typeof name === "string", discoverable_phone, discoverable_email, contact_sync_enabled: obj3.isContactSyncEnabled(closure_132_4.getLocalAccount(closure_132_7.CONTACTS)) };
          discoverable_phone = phone;
          const track = closure_132_1(closure_132_2[5]).track;
          const USER_DISCOVERY_UPDATED = closure_132_5.USER_DISCOVERY_UPDATED;
          const tmp46 = closure_132_1(closure_132_2[5]);
          if (phone == null) {
            obj = closure_132_0(closure_132_2[4]);
            discoverable_phone = obj.hasFlag(setting, closure_132_6.FIND_BY_PHONE);
          }
          discoverable_email = email;
          if (email == null) {
            const obj2 = closure_132_0(closure_132_2[4]);
            discoverable_email = obj2.hasFlag(setting, closure_132_6.FIND_BY_EMAIL);
          }
          obj3 = closure_132_0(closure_132_2[6]);
          track(USER_DISCOVERY_UPDATED, obj10);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp38) {
        c6 = 3;
        throw tmp38;
      }
    }
  });
  return obj(...arguments);
};
({ AnalyticEvents: hasOwnProperty, FriendDiscoveryFlags: metroRequire, PlatformTypes: metroImportDefault } = Constants);
_asyncToGenerator(async (name) => {
  let closure_1;
  let constants2;
  let c3 = 0;
  let c4 = 0;
  return (async (arg0) => {
    let num4;
    let obj3;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
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
            return { value, done: true };
          } else {
            closure_2 = tmp;
            c3 = 1;
            c4 = 1;
            const obj5 = { name };
            const obj6 = { value: obj3.update(constants2.CONTACTS, "@me", obj5), done: false };
            obj3 = tmp2(closure_2[7]);
            return obj6;
          }
        } else {
          let num3 = 1;
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            const track = tmp2(closure_2[5]).track;
            const NAME_SUBMITTED = constants.NAME_SUBMITTED;
            tmp2(closure_2[5]);
            if (null != name) {
              num3 = name.split(" ").length;
            }
            obj = { num_words: num3, num_chars: num4 };
            num4 = 0;
            if (null != name) {
              num4 = name.length;
            }
            track(NAME_SUBMITTED, obj);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
  })();
});
let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
  let am_discoverable_email;
  let closure_2;
  let num3;
  let num8;
  let obj10;
  let obj12;
  closure_0 = arg0;
  let closure_1 = arg1;
  if (constants === 2) {
    constants = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      let enabled;
      let name;
      let setting;
      let am_discoverable_phone;
      constants = 2;
      if (0 === am_discoverable_email) {
        if (arg0 === 1) {
          constants = 3;
          throw value;
        } else if (arg0 === 2) {
          constants = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          enabled = undefined;
          name = undefined;
          setting = undefined;
          am_discoverable_phone = undefined;
          am_discoverable_email = undefined;
          const localAccount = am_discoverable_email.getLocalAccount(constants3.CONTACTS);
          let id;
          if (localAccount != null) {
            id = localAccount.id;
          }
          enabled = closure_0.enabled;
          name = closure_0.name;
          if (null == id) {
            const obj15 = closure_1(setting[7]);
            const obj4 = { friend_sync: enabled };
            am_discoverable_email = 1;
            constants = 1;
            const obj8 = { value: obj15.connect(constants3.CONTACTS, "@me", name, closure_1, obj4), done: false };
            return obj8;
          } else if (undefined !== name) {
            const obj9 = { friend_sync: enabled, name };
            am_discoverable_email = 3;
            constants = 1;
            const obj11 = { value: obj12.update(constants3.CONTACTS, id, obj9), done: false };
            obj12 = closure_1(setting[7]);
            return obj11;
          } else {
            am_discoverable_email = 2;
            constants = 1;
            const obj13 = { value: obj10.setFriendSync(constants3.CONTACTS, id, enabled), done: false };
            obj10 = closure_1(setting[7]);
            return obj13;
          }
        }
      } else {
        let num7 = 1;
        if (1 === am_discoverable_email) {
          if (arg0 === num7) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            constants = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else if (undefined !== name) {
            const track2 = closure_1(setting[5]).track;
            const NAME_SUBMITTED2 = constants.NAME_SUBMITTED;
            const tmp64 = closure_1(setting[5]);
            if (null != name) {
              num7 = name.split(" ").length;
            }
            const obj16 = { num_words: num7, num_chars: num8 };
            num8 = 0;
            if (null != name) {
              num8 = name.length;
            }
            track2(NAME_SUBMITTED2, obj16);
          }
        } else if (2 === am_discoverable_email) {
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
        } else if (arg0 === 2) {
          constants = 3;
          const obj18 = { value, done: true };
          return obj18;
        } else {
          let length = num7;
          const track = closure_1(setting[5]).track;
          const NAME_SUBMITTED = constants.NAME_SUBMITTED;
          const tmp55 = closure_1(setting[5]);
          if (null != name) {
            length = name.split(" ").length;
          }
          obj = { num_words: length, num_chars: num3 };
          num3 = 0;
          if (null != name) {
            num3 = name.length;
          }
          track(NAME_SUBMITTED, obj);
        }
        const FriendDiscoverySettings = closure_0(setting[3]).FriendDiscoverySettings;
        setting = FriendDiscoverySettings.getSetting();
        const obj5 = closure_0(setting[4]);
        am_discoverable_phone = obj5.hasFlag(setting, constants2.FIND_BY_PHONE);
        const obj6 = closure_0(setting[4]);
        am_discoverable_email = obj6.hasFlag(setting, constants2.FIND_BY_EMAIL);
        const obj19 = { is_enabled: enabled, am_discoverable_phone, am_discoverable_email };
        const obj7 = closure_1(setting[5]);
        obj7.track(constants.CONTACT_SYNC_TOGGLED, obj19);
        constants = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp47) {
      constants = 3;
      throw tmp47;
    }
  }
});
obj = {
  updateName: function() {
    return closure_0(...arguments);
  },
  updateDiscoverability() {
    return obj(...arguments);
  },
  updateContactSyncEnabled: function() {
    return closure_0(...arguments);
  }
};
const result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncActionCreators.tsx");

export default obj;