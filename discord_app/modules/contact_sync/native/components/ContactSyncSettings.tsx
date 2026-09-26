// === Module 14381: ContactSyncSettings ===

// Module 14381 (ContactSyncSettings)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12173 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12177 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12181 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

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
let closure_14 = async function _syncContacts(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = undefined;
          let names;
          let payload;
          hasOwnProperty();
          if (closure_2) {
            if (null != closure_0) {
              if (null != closure_1) {
                c6 = 1;
                c7 = 2;
                c8 = 1;
                const obj6 = { value: ContactSyncUtils.getContacts(closure_1), done: false };
                return obj6;
              }
            }
          }
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          if (closure_5 === closure_132_0(closure_132_2[6]).ContactSyncPermissionDenied) {
            const obj7 = { key: "CONTACT_SYNC_NEEDS_PERMISSIONS", content: null, icon: null };
            const intl = closure_132_0(closure_132_2[8]).intl;
            obj7.content = intl.string(closure_132_0(closure_132_2[8]).t["h+jFOs"]);
            obj7.icon = closure_132_1(closure_132_2[9]);
            closure_132_1(closure_132_2[7]).open(obj7);
            const obj9 = closure_132_1(closure_132_2[7]);
          }
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_131_0 = value;
            names = closure_131_0.names;
            payload = closure_131_0.payload;
            closure_132_6(names);
            c7 = 3;
            c8 = 1;
            const obj10 = { value: closure_132_0(closure_132_2[6]).uploadContacts(payload, true), done: false };
            return obj10;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c6 = 0;
        }
        c6 = 0;
        c8 = 3;
        const obj = { value, done: true };
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
let closure_16 = async function _updateFriendSync(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          if (null != closure_0) {
            c6 = 1;
            const obj5 = { enabled: tmp37 };
            c7 = 2;
            c8 = 1;
            const obj7 = { value: ContactSyncActionCreatorsDefault.updateContactSyncEnabled(obj5), done: false };
            return obj7;
          }
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          const obj8 = { key: "CONTACT_SYNC_FAILED_ALERT_TITLE", content: null, icon: null };
          const intl = closure_132_0(closure_132_2[8]).intl;
          obj8.content = intl.string(closure_132_0(closure_132_2[8]).t.GCwBtE);
          obj8.icon = closure_132_1(closure_132_2[9]);
          closure_132_1(closure_132_2[7]).open(obj8);
          const obj4 = closure_132_1(closure_132_2[7]);
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c7 = 3;
            c8 = 1;
            const obj10 = { value: closure_132_13(closure_131_0, closure_131_1, closure_131_2), done: false };
            return obj10;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c6 = 0;
        }
        c6 = 0;
        c8 = 3;
        const obj = { value, done: true };
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
const ContactSyncPersistedStore = fn(12176);
({ deleteStoredContacts: hasOwnProperty, setStoredContacts: metroRequire } = ContactSyncPersistedStore);
const Constants = fn(1074);
({ AnalyticEvents: closure_7, FriendDiscoveryFlags: closure_8, AnalyticsSections: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettings.tsx");

export default function ContactSyncSettings() {
  contactSyncAccount = contactSyncAccount(12177).useContactSyncAccount();
  let obj = contactSyncAccount(12177);
  const items = [UserStore];
  const stateFromStores = contactSyncAccount(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let phone;
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  let obj2 = contactSyncAccount(504);
  const tmpResult = contactSyncAccount(12177);
  const FriendDiscoverySettings = tmp(2021).FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  const isContactSyncEnabledResult = contactSyncAccount(12177).isContactSyncEnabled(contactSyncAccount);
  const hasFlagResult = contactSyncAccount(1385).hasFlag(setting, constants2.FIND_BY_PHONE);
  dependencyMap = hasFlagResult;
  const tmpResult3 = contactSyncAccount(1385);
  const tmpResult4 = contactSyncAccount(1385);
  let obj3 = { title: null, children: null };
  const intl = tmp(1115).intl;
  obj3.title = intl.string(contactSyncAccount(1115).t.bGSsnc);
  let tmp10Result = null;
  if (isStaffResult) {
    const obj4 = { children: null };
    const obj5 = { label: "STAFF ONLY - Find your friends deletion", value: true, onValueChange: tmp(12177).adminDeleteContactSync };
    const items1 = [closure_10(tmp(8053).FormSwitchRow, obj5), closure_10(tmp(8053).FormDivider, {})];
    obj4.children = items1;
    tmp10Result = closure_12(closure_11, obj4);
  }
  const items2 = [tmp10Result, , ];
  const obj6 = { label: null, value: null, onValueChange: null };
  const intl2 = tmp(1115).intl;
  obj6.label = intl2.string(contactSyncAccount(1115).t.uSvEy7);
  obj6.value = isContactSyncEnabledResult;
  obj6.onValueChange = function onValueChange(arg0) {
    if (null == contactSyncAccount) {
      const obj2 = { type: constants3.CONTACT_SYNC_MODAL, location: { page: "User Settings" } };
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
      ContactSyncModalActionCreators.openContactSyncModal({}, { page: "User Settings" });
    } else {
      updateFriendSync(tmp, tmp2, arg0);
    }
  };
  items2[1] = closure_10(contactSyncAccount(8053).FormSwitchRow, obj6);
  let tmp10Result2 = null;
  if (null != contactSyncAccount) {
    const obj7 = { children: null };
    const items3 = [closure_10(tmp(8053).FormDivider, {}), ];
    const obj8 = { label: null, trailing: null, onPress: null };
    const intl3 = tmp(1115).intl;
    obj8.label = intl3.string(tmp(1115).t.nAsWKy);
    const obj9 = { label: contactSyncAccount.name };
    obj8.trailing = closure_10(tmp(8053).FormRow.Arrow, obj9);
    obj8.onPress = function onPress() {
      phone(hasFlagResult[11]).track(constants.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
      const obj = phone(hasFlagResult[11]);
      phone(hasFlagResult[17]).pushLazy(contactSyncAccount(hasFlagResult[19])(hasFlagResult[18], hasFlagResult.paths), "Contact Sync Name Update Modal");
    };
    items3[1] = closure_10(tmp(8053).FormRow, obj8);
    obj7.children = items3;
    tmp10Result2 = closure_12(closure_11, obj7);
  }
  const obj10 = { children: null };
  items2[2] = tmp10Result2;
  obj3.children = items2;
  const items4 = [closure_12(contactSyncAccount(8053).FormSection, obj3), , , ];
  const obj11 = { children: null };
  const intl4 = tmp(1115).intl;
  const hasFlagResult1 = contactSyncAccount(1385).hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj11.children = intl4.format(contactSyncAccount(1115).t.BoR0dO, { onClick: contactSyncAccount(12177).handleOpenLearnMoreLink });
  items4[1] = closure_10(contactSyncAccount(8053).FormHint, obj11);
  const obj13 = { children: null };
  const intl5 = tmp(1115).intl;
  obj13.children = intl5.string(contactSyncAccount(1115).t.cW1nr9);
  items4[2] = closure_10(contactSyncAccount(8053).FormHint, obj13);
  const obj14 = { title: null, children: null };
  const intl6 = tmp(1115).intl;
  obj14.title = intl6.string(contactSyncAccount(1115).t["0t2wRW"]);
  const obj15 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl7 = tmp(1115).intl;
  obj15.label = intl7.string(contactSyncAccount(1115).t["eJnn0+"]);
  const intl8 = tmp(1115).intl;
  obj15.subLabel = intl8.string(contactSyncAccount(1115).t.X7pIKN);
  obj15.value = hasFlagResult;
  obj15.onValueChange = function onValueChange(phone) {
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability({ phone, email: hasFlagResult1 });
  };
  const items5 = [closure_10(contactSyncAccount(8053).FormSwitchRow, obj15), closure_10(contactSyncAccount(8053).FormDivider, {}), ];
  const obj16 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl9 = tmp(1115).intl;
  obj16.label = intl9.string(contactSyncAccount(1115).t.dI4d4S);
  const intl10 = tmp(1115).intl;
  obj16.subLabel = intl10.string(contactSyncAccount(1115).t.ilGsHE);
  obj16.value = hasFlagResult1;
  obj16.onValueChange = function onValueChange(email) {
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability({ phone: hasFlagResult, email });
  };
  items5[2] = closure_10(contactSyncAccount(8053).FormSwitchRow, obj16);
  obj14.children = items5;
  items4[3] = closure_12(contactSyncAccount(8053).FormSection, obj14);
  obj10.children = items4;
  return closure_12(closure_11, obj10);
};
export { syncContacts };
export { updateFriendSync };
export const handleSyncContacts = function handleSyncContacts(localAccount, phone, arg2) {
  if (null == localAccount) {
    const obj2 = { type: constants3.CONTACT_SYNC_MODAL, location: { page: "User Settings" } };
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
    ContactSyncModalActionCreators.openContactSyncModal({}, { page: "User Settings" });
  } else {
    updateFriendSync(localAccount, phone, arg2);
  }
};