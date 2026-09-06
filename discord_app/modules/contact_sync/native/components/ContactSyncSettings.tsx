// === Module 14844: ContactSyncSettings ===

// Module 14844 (ContactSyncSettings)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12676 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12680 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12684 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function syncContacts() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _syncContacts(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = undefined;
          let names;
          let payload;
          hasOwnProperty();
          if (closure_2) {
            if (null != tmp43) {
              if (null != tmp44) {
                c6 = 1;
                let obj4 = ContactSyncUtils;
                c7 = 2;
                c8 = 1;
                let obj1 = { value: obj4.getContacts(tmp44), done: false };
                return obj1;
              }
            }
          }
          tmp43 = closure_0;
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          if (closure_5 === closure_132_0(closure_132_2[6]).ContactSyncPermissionDenied) {
            const obj2 = { key: "CONTACT_SYNC_NEEDS_PERMISSIONS", content: null, icon: null };
            const intl = closure_132_0(closure_132_2[8]).intl;
            obj2.content = intl.string(closure_132_0(closure_132_2[8]).t["h+jFOs"]);
            obj2.icon = closure_132_1(closure_132_2[9]);
            closure_132_1(closure_132_2[7]).open(obj2);
            const obj9 = closure_132_1(closure_132_2[7]);
          }
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_131_0 = value;
            names = closure_131_0.names;
            payload = closure_131_0.payload;
            closure_132_6(names);
            obj1 = closure_132_0(closure_132_2[6]);
            c7 = 3;
            c8 = 1;
            obj4 = { value: obj1.uploadContacts(payload, true), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c6 = 0;
        }
        c6 = 0;
        c8 = 3;
        obj = { value, done: true };
        return obj;
      }
      c8 = 3;
    } catch (tmp26) {
      closure_5 = tmp26;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp26;
      } else {
        c7 = tmp;
      }
    }
  }
};
function updateFriendSync() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _updateFriendSync(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          if (null != closure_0) {
            c6 = 1;
            let obj5 = ContactSyncActionCreatorsDefault;
            const obj1 = { enabled: tmp37 };
            c7 = 2;
            c8 = 1;
            const obj2 = { value: obj5.updateContactSyncEnabled(obj1), done: false };
            return obj2;
          }
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          let obj3 = closure_132_1(closure_132_2[7]);
          obj3 = { key: "CONTACT_SYNC_FAILED_ALERT_TITLE", content: null, icon: null };
          const intl = closure_132_0(closure_132_2[8]).intl;
          obj3.content = intl.string(closure_132_0(closure_132_2[8]).t.GCwBtE);
          obj3.icon = closure_132_1(closure_132_2[9]);
          obj3.open(obj3);
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c7 = 3;
            c8 = 1;
            obj5 = { value: closure_132_13(closure_131_0, closure_131_1, closure_131_2), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c6 = 0;
        }
        c6 = 0;
        c8 = 3;
        obj = { value, done: true };
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
};
const ContactSyncPersistedStore = fn(12679);
({ deleteStoredContacts: hasOwnProperty, setStoredContacts: metroRequire } = ContactSyncPersistedStore);
const Constants = fn(1074);
({ AnalyticEvents: closure_7, FriendDiscoveryFlags: closure_8, AnalyticsSections: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettings.tsx");

export default function ContactSyncSettings() {
  let obj = contactSyncAccount(12680);
  contactSyncAccount = obj.useContactSyncAccount();
  let obj1 = contactSyncAccount(504);
  const items = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let phone;
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  tmp(12680);
  const FriendDiscoverySettings = tmp(1935).FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  const tmpResult = tmp(1384);
  const hasFlagResult = tmpResult.hasFlag(setting, constants2.FIND_BY_PHONE);
  dependencyMap = hasFlagResult;
  const isContactSyncEnabledResult = tmpResult.isContactSyncEnabled(contactSyncAccount);
  const hasFlagResult1 = contactSyncAccount(1384).hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj = { title: null, children: null };
  const intl = tmp(1114).intl;
  obj.title = intl.string(contactSyncAccount(1114).t.bGSsnc);
  let tmp10Result = null;
  if (isStaffResult) {
    obj = { children: null };
    obj1 = { label: "STAFF ONLY - Find your friends deletion", value: true, onValueChange: tmp(12680).adminDeleteContactSync };
    const items1 = [closure_10(tmp(8593).FormSwitchRow, obj1), closure_10(tmp(8593).FormDivider, {})];
    obj.children = items1;
    tmp10Result = tmp10(tmp11, obj);
  }
  const items2 = [tmp10Result, , ];
  const obj2 = { label: null, value: null, onValueChange: null };
  const intl2 = tmp(1114).intl;
  obj2.label = intl2.string(contactSyncAccount(1114).t.uSvEy7);
  obj2.value = isContactSyncEnabledResult;
  obj2.onValueChange = function onValueChange(arg0) {
    if (null == contactSyncAccount) {
      const obj = { type: constants3.CONTACT_SYNC_MODAL, location: { page: "User Settings" } };
      obj.track(constants.OPEN_MODAL, obj);
      ContactSyncModalActionCreators.openContactSyncModal({}, { page: "User Settings" });
    } else {
      updateFriendSync(tmp, tmp2, arg0);
    }
  };
  items2[1] = closure_10(contactSyncAccount(8593).FormSwitchRow, obj2);
  tmp10Result = null;
  if (null != contactSyncAccount) {
    let obj3 = { children: null };
    const items3 = [tmp14(tmp(8593).FormDivider, {}), ];
    const obj4 = { label: null, trailing: null, onPress: null };
    const intl3 = tmp(1114).intl;
    obj4.label = intl3.string(tmp(1114).t.nAsWKy);
    const obj5 = { label: contactSyncAccount.name };
    obj4.trailing = tmp14(tmp(8593).FormRow.Arrow, obj5);
    obj4.onPress = function onPress() {
      phone(hasFlagResult[11]).track(constants.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
      const obj = phone(hasFlagResult[11]);
      phone(hasFlagResult[17]).pushLazy(contactSyncAccount(hasFlagResult[19])(hasFlagResult[18], hasFlagResult.paths), "Contact Sync Name Update Modal");
    };
    items3[1] = tmp14(tmp(8593).FormRow, obj4);
    obj3.children = items3;
    tmp10Result = tmp10(tmp11, obj3);
  }
  const obj6 = { children: null };
  items2[2] = tmp10Result;
  obj.children = items2;
  const items4 = [closure_12(contactSyncAccount(8593).FormSection, obj), , , ];
  const obj7 = { children: null };
  const intl4 = tmp(1114).intl;
  const tmpResult1 = contactSyncAccount(1384);
  obj7.children = intl4.format(contactSyncAccount(1114).t.BoR0dO, { onClick: contactSyncAccount(12680).handleOpenLearnMoreLink });
  items4[1] = closure_10(contactSyncAccount(8593).FormHint, obj7);
  const obj9 = { children: null };
  const intl5 = tmp(1114).intl;
  obj9.children = intl5.string(contactSyncAccount(1114).t.cW1nr9);
  items4[2] = closure_10(contactSyncAccount(8593).FormHint, obj9);
  const obj10 = { title: null, children: null };
  const intl6 = tmp(1114).intl;
  obj10.title = intl6.string(contactSyncAccount(1114).t["0t2wRW"]);
  const obj11 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl7 = tmp(1114).intl;
  obj11.label = intl7.string(contactSyncAccount(1114).t["eJnn0+"]);
  const intl8 = tmp(1114).intl;
  obj11.subLabel = intl8.string(contactSyncAccount(1114).t.X7pIKN);
  obj11.value = hasFlagResult;
  obj11.onValueChange = function onValueChange(phone) {
    const obj = { phone, email: hasFlagResult1 };
    const result = obj.updateDiscoverability(obj);
  };
  const items5 = [closure_10(contactSyncAccount(8593).FormSwitchRow, obj11), closure_10(contactSyncAccount(8593).FormDivider, {}), ];
  const obj12 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl9 = tmp(1114).intl;
  obj12.label = intl9.string(contactSyncAccount(1114).t.dI4d4S);
  const intl10 = tmp(1114).intl;
  obj12.subLabel = intl10.string(contactSyncAccount(1114).t.ilGsHE);
  obj12.value = hasFlagResult1;
  obj12.onValueChange = function onValueChange(email) {
    const obj = { phone: hasFlagResult, email };
    const result = obj.updateDiscoverability(obj);
  };
  items5[2] = closure_10(contactSyncAccount(8593).FormSwitchRow, obj12);
  obj10.children = items5;
  items4[3] = closure_12(contactSyncAccount(8593).FormSection, obj10);
  obj6.children = items4;
  return closure_12(closure_11, obj6);
};
export { syncContacts };
export { updateFriendSync };
export const handleSyncContacts = function handleSyncContacts(localAccount, phone, arg2) {
  if (null == localAccount) {
    const obj = { type: constants3.CONTACT_SYNC_MODAL, location: { page: "User Settings" } };
    obj.track(constants.OPEN_MODAL, obj);
    ContactSyncModalActionCreators.openContactSyncModal({}, { page: "User Settings" });
  } else {
    updateFriendSync(localAccount, phone, arg2);
  }
};