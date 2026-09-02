// === Module 14673: syncContacts ===

// Module 14673 (syncContacts)
import noopAll from "noop" /* 19 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import handleNameInputScreenOrSuggestions from "handleNameInputScreenOrSuggestions" /* 12438 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import setStoredContacts from "setStoredContacts" /* 12441 */;
import ME from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function syncContacts(closure_1, closure_0, arg2) {
  const self = this;
  const apply = _syncContacts.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _syncContacts() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp5;
              let lib;
              let names;
              let payload;
              closure_1_5();
              if (payload) {
                if (null != tmp44) {
                  if (null != tmp45) {
                    let v0 = 1;
                    let obj4 = lib(table[6]);
                    c7 = 2;
                    c8 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj4.getContacts(tmp45);
                    return obj1;
                  }
                }
              }
              tmp44 = lib;
            }
          } else {
            if (1 === tmp8) {
              v0 = 0;
              if (closure_5 === lib(payload[6]).ContactSyncPermissionDenied) {
                const obj2 = { key: "CONTACT_SYNC_NEEDS_PERMISSIONS", content: null, icon: null };
                const intl = lib(payload[8]).intl;
                obj2[1] = intl.string(lib(payload[8]).t["h+jFOs"]);
                obj2[2] = names(payload[9]);
                names(payload[7]).open(obj2);
                const obj9 = names(payload[7]);
              }
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                c8 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                lib = arg1;
                names = lib.names;
                payload = lib.payload;
                v0(names);
                obj1 = lib(payload[6]);
                c7 = 3;
                c8 = 1;
                obj4 = { value: null, done: false };
                obj4[0] = obj1.uploadContacts(payload, true);
                return obj4;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              v0 = 0;
            }
            v0 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c8 = 3;
        } catch (tmp26) {
          closure_5 = tmp26;
          if (tmp4 === v0) {
            c8 = tmp2;
            throw tmp26;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function updateFriendSync(localAccount, phone, arg2) {
  const self = this;
  const apply = _updateFriendSync.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateFriendSync() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp5;
              if (null != callback) {
                c6 = 1;
                let obj5 = callback2(12446);
                obj1 = { enabled: null };
                obj1[0] = tmp38;
                c7 = 2;
                c8 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj5.updateContactSyncEnabled(obj1);
                return obj2;
              }
            }
          } else {
            if (1 === tmp8) {
              c6 = 0;
              let obj3 = callback2(4194);
              obj3 = { key: "CONTACT_SYNC_FAILED_ALERT_TITLE", content: null, icon: null };
              const intl = callback(1233).intl;
              obj3[1] = intl.string(callback(1233).t.GCwBtE);
              obj3[2] = callback2(7689);
              obj3.open(obj3);
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                c7 = 3;
                c8 = 1;
                obj5 = { value: null, done: false };
                obj5[0] = callback3(callback, callback2, dependencyMap);
                return obj5;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c8 = 3;
        } catch (tmp27) {
          closure_5 = tmp27;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp27;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
noopAll;
({ deleteStoredContacts: c5, setStoredContacts: closure_6 } = setStoredContacts);
({ AnalyticEvents: error, FriendDiscoveryFlags: closure_8, AnalyticsSections: c9 } = ME);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettings.tsx");

export default function ContactSyncSettings() {
  let obj = contactSyncAccount(12442);
  contactSyncAccount = obj.useContactSyncAccount();
  obj1 = contactSyncAccount(586);
  const items = [closure_4];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let phone;
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  let tmpResult = tmp(12442);
  const FriendDiscoverySettings = tmp(4166).FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  tmpResult = tmp(1398);
  const hasFlagResult = tmpResult.hasFlag(setting, constants2.FIND_BY_PHONE);
  dependencyMap = hasFlagResult;
  const isContactSyncEnabledResult = tmpResult.isContactSyncEnabled(contactSyncAccount);
  const hasFlagResult1 = contactSyncAccount(1398).hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj = { title: null, children: null };
  const intl = tmp(1233).intl;
  obj[0] = intl.string(contactSyncAccount(1233).t.bGSsnc);
  let tmp10Result = null;
  if (isStaffResult) {
    obj = { children: null };
    obj1 = { label: "STAFF ONLY - Find your friends deletion", value: true, onValueChange: null };
    obj1[2] = tmp(12442).adminDeleteContactSync;
    const items1 = [callback2(tmp(8372).FormSwitchRow, obj1), callback2(tmp(8372).FormDivider, {})];
    obj[0] = items1;
    tmp10Result = tmp10(tmp11, obj);
  }
  const items2 = [tmp10Result, , ];
  const obj2 = { label: null, value: null, onValueChange: null };
  const intl2 = tmp(1233).intl;
  obj2[0] = intl2.string(contactSyncAccount(1233).t.uSvEy7);
  obj2[1] = isContactSyncEnabledResult;
  obj2[2] = function onValueChange(arg0) {
    if (null == contactSyncAccount) {
      let obj = phone(hasFlagResult[11]);
      obj = { type: null, location: null };
      obj[0] = closure_1_9.CONTACT_SYNC_MODAL;
      obj[1] = { page: "User Settings" };
      obj.track(closure_1_7.OPEN_MODAL, obj);
      contactSyncAccount(hasFlagResult[12]).openContactSyncModal({}, { page: "User Settings" });
      const obj3 = contactSyncAccount(hasFlagResult[12]);
    } else {
      closure_1_15(tmp, tmp2, arg0);
    }
  };
  items2[1] = callback2(contactSyncAccount(8372).FormSwitchRow, obj2);
  tmp10Result = null;
  if (null != contactSyncAccount) {
    let obj3 = { children: null };
    const items3 = [tmp14(tmp(8372).FormDivider, {}), ];
    const obj4 = { label: null, trailing: null, onPress: null };
    const intl3 = tmp(1233).intl;
    obj4[0] = intl3.string(tmp(1233).t.nAsWKy);
    const obj5 = { label: null };
    obj5[0] = contactSyncAccount.name;
    obj4[1] = tmp14(tmp(8372).FormRow.Arrow, obj5);
    obj4[2] = function onPress() {
      phone(hasFlagResult[11]).track(constants.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
      const obj = phone(hasFlagResult[11]);
      phone(hasFlagResult[17]).pushLazy(contactSyncAccount(hasFlagResult[19])(hasFlagResult[18], hasFlagResult.paths), "Contact Sync Name Update Modal");
    };
    items3[1] = tmp14(tmp(8372).FormRow, obj4);
    obj3[0] = items3;
    tmp10Result = tmp10(tmp11, obj3);
  }
  const obj6 = { children: null };
  items2[2] = tmp10Result;
  obj[1] = items2;
  const items4 = [closure_12(contactSyncAccount(8372).FormSection, obj), , , ];
  const obj7 = { children: null };
  const intl4 = tmp(1233).intl;
  const tmpResult1 = contactSyncAccount(1398);
  obj7[0] = intl4.format(contactSyncAccount(1233).t.BoR0dO, { onClick: contactSyncAccount(12442).handleOpenLearnMoreLink });
  items4[1] = callback2(contactSyncAccount(8372).FormHint, obj7);
  const obj9 = { children: null };
  const intl5 = tmp(1233).intl;
  obj9[0] = intl5.string(contactSyncAccount(1233).t.cW1nr9);
  items4[2] = callback2(contactSyncAccount(8372).FormHint, obj9);
  const obj10 = { title: null, children: null };
  const intl6 = tmp(1233).intl;
  obj10[0] = intl6.string(contactSyncAccount(1233).t["0t2wRW"]);
  const obj11 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl7 = tmp(1233).intl;
  obj11[0] = intl7.string(contactSyncAccount(1233).t["eJnn0+"]);
  const intl8 = tmp(1233).intl;
  obj11[1] = intl8.string(contactSyncAccount(1233).t.X7pIKN);
  obj11[2] = hasFlagResult;
  obj11[3] = function onValueChange(phone) {
    let obj = phone(hasFlagResult[10]);
    obj = { phone, email: hasFlagResult1 };
    const result = obj.updateDiscoverability(obj);
  };
  const items5 = [callback2(contactSyncAccount(8372).FormSwitchRow, obj11), callback2(contactSyncAccount(8372).FormDivider, {}), ];
  const obj12 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl9 = tmp(1233).intl;
  obj12[0] = intl9.string(contactSyncAccount(1233).t.dI4d4S);
  const intl10 = tmp(1233).intl;
  obj12[1] = intl10.string(contactSyncAccount(1233).t.ilGsHE);
  obj12[2] = hasFlagResult1;
  obj12[3] = function onValueChange(email) {
    let obj = phone(hasFlagResult[10]);
    obj = { phone: closure_2, email };
    const result = obj.updateDiscoverability(obj);
  };
  items5[2] = callback2(contactSyncAccount(8372).FormSwitchRow, obj12);
  obj10[1] = items5;
  items4[3] = closure_12(contactSyncAccount(8372).FormSection, obj10);
  obj6[0] = items4;
  return closure_12(closure_11, obj6);
};
export { syncContacts };
export { updateFriendSync };
export const handleSyncContacts = function handleSyncContacts(localAccount, phone, arg2) {
  if (null == localAccount) {
    let obj = expandEventPropertiesDefault;
    obj = { type: null, location: null };
    obj[0] = constants3.CONTACT_SYNC_MODAL;
    obj[1] = { page: "User Settings" };
    obj.track(constants.OPEN_MODAL, obj);
    handleNameInputScreenOrSuggestions.openContactSyncModal({}, { page: "User Settings" });
    const obj3 = handleNameInputScreenOrSuggestions;
  } else {
    updateFriendSync(localAccount, phone, arg2);
  }
};