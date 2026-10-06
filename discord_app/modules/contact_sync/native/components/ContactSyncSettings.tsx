// discord_app/modules/contact_sync/native/components/ContactSyncSettings.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ContactSyncModalActionCreators from "../ContactSyncModalActionCreators.tsx";
import ContactSyncUtils from "../ContactSyncUtils.tsx";
import ContactSyncActionCreatorsDefault from "../ContactSyncActionCreators.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ContactSyncPersistedStore from "../ContactSyncPersistedStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../../_runtime/metro/00002__.js";

let c7, c8, dependencyMap;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function syncContacts() {
  return obj(...arguments);
}
let obj = function _syncContacts() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let intl;
    let obj2;
    let obj5;
    let tmp9;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let names;
        let payload;
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
            let closure_4 = tmp;
            let closure_3 = tmp9;
            closure_0 = undefined;
            names = undefined;
            payload = undefined;
            tmp9 = hasOwnProperty();
            const tmp39 = closure_0;
            if (closure_2) {
              if (null != tmp39) {
                if (null != closure_1) {
                  c6 = 1;
                  c7 = 2;
                  c8 = 1;
                  const obj6 = { value: obj5.getContacts(closure_1), done: false };
                  obj5 = ContactSyncUtils;
                  return obj6;
                }
              }
            }
          }
        } else if (1 === c7) {
          c6 = 0;
          if (closure_5 === closure_132_0(closure_132_2[6]).ContactSyncPermissionDenied) {
            const obj7 = {
              key: "CONTACT_SYNC_NEEDS_PERMISSIONS",
              content: intl.string(closure_132_0(closure_132_2[8]).t["h+jFOs"]),
              icon: tmp9,
            };
            const open = closure_132_1(closure_132_2[7]).open;
            const tmp32 = closure_132_1(closure_132_2[7]);
            intl = closure_132_0(closure_132_2[8]).intl;
            tmp9 = closure_132_1(closure_132_2[9]);
            open(obj7);
          }
        } else if (2 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_0 = value;
            names = closure_0.names;
            payload = closure_0.payload;
            tmp9 = closure_132_6;
            closure_132_6(names);
            c7 = 3;
            c8 = 1;
            const obj9 = { value: obj2.uploadContacts(payload, true), done: false };
            obj2 = closure_132_0(closure_132_2[6]);
            return obj9;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c6 = 0;
        }
        c8 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp22) {
        closure_5 = tmp22;
        if (0 === c6) {
          c8 = 3;
          throw tmp22;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function updateFriendSync() {
  return obj(...arguments);
}
obj = function _updateFriendSync() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let intl;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let open;
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
            let closure_4 = tmp;
            if (null != closure_0) {
              c6 = 1;
              const obj4 = { enabled: tmp33 };
              const obj5 = ContactSyncActionCreatorsDefault;
              open = obj5.updateContactSyncEnabled(obj4);
              c7 = 2;
              c8 = 1;
              const obj6 = { value: open, done: false };
              return obj6;
            }
          }
        } else if (1 === c7) {
          c6 = 0;
          open = closure_132_1(closure_132_2[7]).open;
          const obj7 = {
            key: "CONTACT_SYNC_FAILED_ALERT_TITLE",
            content: intl.string(closure_132_0(closure_132_2[8]).t.GCwBtE),
            icon: closure_132_1(closure_132_2[9]),
          };
          const tmp15 = closure_132_1(closure_132_2[7]);
          intl = closure_132_0(closure_132_2[8]).intl;
          open(obj7);
        } else if (2 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            open = closure_132_13(closure_0, closure_1, closure_2);
            c7 = 3;
            c8 = 1;
            const obj9 = { value: open, done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c6 = 0;
        }
        c8 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp24) {
        let closure_5 = tmp24;
        if (0 === c6) {
          c8 = 3;
          throw tmp24;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ deleteStoredContacts: hasOwnProperty, setStoredContacts: metroRequire } = ContactSyncPersistedStore);
({ AnalyticEvents: metroImportDefault, FriendDiscoveryFlags: metroImportAll, AnalyticsSections: c9 } = Constants);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettings.tsx");

export default function ContactSyncSettings() {
  let BoR0dO;
  let contactSyncAccount;
  let currentUser;
  let format;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj9;
  const tmp = contactSyncAccount;
  const tmp2 = dependencyMap;
  obj = contactSyncAccount(12344);
  contactSyncAccount = obj.useContactSyncAccount();
  let obj2 = contactSyncAccount(504);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let phone;
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  const tmpResult = tmp(12344);
  const isContactSyncEnabledResult = tmpResult.isContactSyncEnabled(contactSyncAccount);
  const FriendDiscoverySettings = tmp(2028).FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  const tmpResult3 = tmp(1390);
  const hasFlagResult = tmpResult3.hasFlag(setting, constants2.FIND_BY_PHONE);
  dependencyMap = hasFlagResult;
  const tmpResult4 = tmp(1390);
  const hasFlagResult1 = tmpResult4.hasFlag(setting, constants2.FIND_BY_EMAIL);
  let obj3 = { title: intl.string(tmp(1126).t.bGSsnc), children: items2 };
  const FormSection = tmp(8924).FormSection;
  intl = tmp(1126).intl;
  let tmp10Result = null;
  if (isStaffResult) {
    const obj4 = { children: items1 };
    const obj5 = {
      label: "STAFF ONLY - Find your friends deletion",
      value: true,
      onValueChange: tmp(12344).adminDeleteContactSync,
    };
    const FormSwitchRow = tmp(8924).FormSwitchRow;
    items1 = [closure_10(FormSwitchRow, obj5), closure_10(tmp(8924).FormDivider, {})];
    tmp10Result = closure_12(closure_11, obj4);
  }
  items2 = [tmp10Result, ,];
  const obj6 = {
    label: intl2.string(tmp(1126).t.uSvEy7),
    value: isContactSyncEnabledResult,
    onValueChange(arg0) {
      if (null == contactSyncAccount) {
        const obj2 = { type: constants.CONTACT_SYNC_MODAL, location: { page: "User Settings" } };
        obj = AnalyticsUtilsDefault;
        obj.track(metroImportDefault.OPEN_MODAL, obj2);
        const obj3 = ContactSyncModalActionCreators;
        obj3.openContactSyncModal({}, { page: "User Settings" });
      } else {
        updateFriendSync(tmp, tmp2, arg0);
      }
    },
  };
  const FormSwitchRow2 = tmp(8924).FormSwitchRow;
  intl2 = tmp(1126).intl;
  items2[1] = closure_10(FormSwitchRow2, obj6);
  let tmp10Result2 = null;
  if (null != contactSyncAccount) {
    const obj7 = { children: items3 };
    items3 = [closure_10(tmp(8924).FormDivider, {})];
    const obj8 = {
      label: intl3.string(tmp(1126).t.nAsWKy),
      trailing: closure_10(tmp(8924).FormRow.Arrow, obj9),
      onPress() {
        obj = phone(dependencyMap[11]);
        obj.track(constants.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
        const obj2 = phone(dependencyMap[17]);
        obj2.pushLazy(
          contactSyncAccount(dependencyMap[19])(dependencyMap[18], dependencyMap.paths),
          "Contact Sync Name Update Modal",
        );
      },
    };
    const FormRow = tmp(8924).FormRow;
    intl3 = tmp(1126).intl;
    obj9 = { label: contactSyncAccount.name };
    items3[1] = closure_10(FormRow, obj8);
    tmp10Result2 = closure_12(closure_11, obj7);
  }
  const obj10 = { children: items4 };
  items2[2] = tmp10Result2;
  items4 = [closure_12(FormSection, obj3), , ,];
  const obj11 = { children: format(BoR0dO, obj12) };
  const FormHint = tmp(8924).FormHint;
  const intl4 = tmp(1126).intl;
  format = intl4.format;
  obj12 = { onClick: tmp(12344).handleOpenLearnMoreLink };
  BoR0dO = tmp(1126).t.BoR0dO;
  items4[1] = closure_10(FormHint, obj11);
  const obj13 = { children: intl5.string(tmp(1126).t.cW1nr9) };
  const FormHint2 = tmp(8924).FormHint;
  intl5 = tmp(1126).intl;
  items4[2] = closure_10(FormHint2, obj13);
  const obj14 = { title: intl6.string(tmp(1126).t["0t2wRW"]), children: items5 };
  const FormSection2 = tmp(8924).FormSection;
  intl6 = tmp(1126).intl;
  const obj15 = {
    label: intl7.string(tmp(1126).t["eJnn0+"]),
    subLabel: intl8.string(tmp(1126).t.X7pIKN),
    value: hasFlagResult,
    onValueChange(phone) {
      obj = ContactSyncActionCreatorsDefault;
      const obj2 = { phone, email: hasFlagResult1 };
      const result = obj.updateDiscoverability(obj2);
    },
  };
  const FormSwitchRow3 = tmp(8924).FormSwitchRow;
  intl7 = tmp(1126).intl;
  intl8 = tmp(1126).intl;
  items5 = [closure_10(FormSwitchRow3, obj15), closure_10(tmp(8924).FormDivider, {})];
  const obj16 = {
    label: intl9.string(tmp(1126).t.dI4d4S),
    subLabel: intl10.string(tmp(1126).t.ilGsHE),
    value: hasFlagResult1,
    onValueChange(email) {
      obj = ContactSyncActionCreatorsDefault;
      const obj2 = { phone: dependencyMap, email };
      const result = obj.updateDiscoverability(obj2);
    },
  };
  const FormSwitchRow4 = tmp(8924).FormSwitchRow;
  intl9 = tmp(1126).intl;
  intl10 = tmp(1126).intl;
  items5[2] = closure_10(FormSwitchRow4, obj16);
  items4[3] = closure_12(FormSection2, obj14);
  return closure_12(closure_11, obj10);
}
export { syncContacts };
export { updateFriendSync };
export const handleSyncContacts = function handleSyncContacts(localAccount, phone, arg2) {
  if (null == localAccount) {
    const obj2 = { type: constants3.CONTACT_SYNC_MODAL, location: { page: "User Settings" } };
    obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.OPEN_MODAL, obj2);
    const obj3 = ContactSyncModalActionCreators;
    obj3.openContactSyncModal({}, { page: "User Settings" });
  } else {
    updateFriendSync(localAccount, phone, arg2);
  }
};
