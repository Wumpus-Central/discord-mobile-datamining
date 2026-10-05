// === Module 12329: ContactSyncUtils ===

// Module 12329 (ContactSyncUtils)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import UserSettings from "UserSettings" /* 2028 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import LinkingDefault from "Linking" /* 4565 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5083 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import ContactSyncManager from "ContactSyncManager" /* 12330 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 12328 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12327 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c4, c5;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let obj = function _uploadContacts() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_3;
    let obj5;
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let friend_list_entries;
        let flag;
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const friend_suggestions = tmp4;
            friend_list_entries = tmp;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = false;
            }
            friend_list_entries = undefined;
            body = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const _JSON = JSON;
            friend_list_entries = JSON.parse(closure_0);
            const request = { url: closure_131_12.CONNECTION_SYNC_CONTACTS, body: obj5, trackedActionData: obj6, rejectWithError: false };
            obj5 = { friend_list_entries, background: flag, allowed_in_suggestions: closure_131_11.ANYONE_WITH_CONTACT_INFO, include_mutual_friends_count: false };
            obj6 = { event: closure_131_0(closure_131_2[8]).NetworkActionNames.USER_CONTACTS_SYNC };
            const put = closure_131_1(closure_131_2[7]).put;
            const tmp21 = closure_131_1(closure_131_2[7]);
            c4 = 2;
            c5 = 1;
            const obj7 = { value: put(request), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          body = value.body;
          obj = closure_131_1(closure_131_2[9]);
          obj.wait(() => {
            obj = closure_1(friend_list_entries[9]);
            const obj2 = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: friend_suggestions.friend_suggestions };
            return obj.dispatch(obj2);
          });
          c5 = 3;
          const obj9 = { value: body, done: true };
          return obj9;
        }
      } catch (tmp11) {
        c5 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
({ useContactSyncStore: metroRequire, clearDismissState: metroImportDefault, deleteStoredContacts: metroImportAll } = ContactSyncPersistedStore);
({ CONTACT_SYNC_MODAL_KEY: c9, ContactPermissions: c10, ContactSyncSuggestionsSetting: unpackModuleId } = ContactSyncConstants);
({ Endpoints: closure_12, PlatformTypes: map1, FriendDiscoveryFlags: closure_14, HelpdeskArticles: closure_15 } = Constants);
const error = new Error("No contact permissions");
const error1 = new Error("No phone number");
const error2 = new Error("Failed to fetch contact image");
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let localAccount;
  let tmp4;
  let tmp5;
  obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    const fn = function e() {
      return localAccount.getLocalAccount(constants.CONTACTS);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let localAccount;
  const items = [ConnectedAccountsStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => localAccount.getLocalAccount(constants.CONTACTS));
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    const fn = function e() {
      localAccount = localAccount.getLocalAccount(constants.CONTACTS);
      return null != localAccount && localAccount.friendSync && localAccount.type === constants.CONTACTS;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [ConnectedAccountsStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    localAccount = localAccount.getLocalAccount(constants.CONTACTS);
    return null != localAccount && localAccount.friendSync && localAccount.type === constants.CONTACTS;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  let tmp8;
  obj = react;
  const cResult = obj.c(8);
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  if (cResult[0] !== setting) {
    const tmpResult = FlagUtils;
    const hasFlagResult = tmpResult.hasFlag(setting, constants3.FIND_BY_PHONE);
    cResult[0] = setting;
    cResult[1] = hasFlagResult;
    tmp5 = hasFlagResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== setting) {
    const tmpResult2 = FlagUtils;
    const hasFlagResult1 = tmpResult2.hasFlag(setting, constants3.FIND_BY_EMAIL);
    cResult[2] = setting;
    cResult[3] = hasFlagResult1;
    tmp8 = hasFlagResult1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp8) {
    if (cResult[5] === tmp5) {
      let tmp12;
      if (cResult[6] === (tmp5 || tmp8)) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  const obj2 = { phone: tmp5, email: tmp8, any: tmp5 || tmp8 };
  cResult[4] = tmp8;
  cResult[5] = tmp5;
  cResult[6] = tmp5 || tmp8;
  cResult[7] = obj2;
  tmp12 = obj2;
}) : (() => {
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  obj = FlagUtils;
  let hasFlagResult = obj.hasFlag(setting, constants3.FIND_BY_PHONE);
  const obj2 = FlagUtils;
  const hasFlagResult1 = obj2.hasFlag(setting, constants3.FIND_BY_EMAIL);
  const obj3 = { phone: hasFlagResult, email: hasFlagResult1, any: hasFlagResult };
  if (!hasFlagResult) {
    hasFlagResult = hasFlagResult1;
  }
  return obj3;
});
function isContactSyncAvailable() {
  obj = utils_PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (!isIOSResult) {
    const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
    let flag;
    if (DCDContactSyncManager != null) {
      flag = DCDContactSyncManager.isContactSyncSupported;
    }
    if (flag == null) {
      flag = false;
    }
    isIOSResult = flag;
  }
  return isIOSResult;
}
function isContactSyncEnabled(contactSyncAccount) {
  return null != contactSyncAccount && contactSyncAccount.friendSync && contactSyncAccount.type === map1.CONTACTS;
}
function getOpenLearnMoreUrl() {
  obj = HelpdeskUtilsDefault;
  return obj.getArticleURL(constants4.CONTACT_SYNC);
}
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncUtils.tsx");

export const ContactSyncPermissionDenied = error;
export const ContactSyncFailedUserHasNoPhone = error1;
export const ContactImageFetchFailed = error2;
export { isContactSyncAvailable };
export const checkContactPermissions = function checkContactPermissions() {
  let result;
  obj = utils_PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (!isIOSResult) {
    const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
    let flag;
    if (DCDContactSyncManager != null) {
      flag = DCDContactSyncManager.isContactSyncSupported;
    }
    if (flag == null) {
      flag = false;
    }
    isIOSResult = flag;
  }
  if (isIOSResult) {
    const DCDContactSyncManager2 = NativeModules.DCDContactSyncManager;
    result = DCDContactSyncManager2.hasContactsPermissions();
  } else {
    result = Promise.resolve(constants.UNAUTHORIZED);
  }
  return result;
};
export const uploadContacts = function uploadContacts() {
  return obj(...arguments);
};
export const bulkAddFriends = function bulkAddFriends(user_ids, bulkAddToken) {
  let obj2;
  const request = { url: closure_12.USER_BULK_RELATIONSHIPS, body: obj2, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE }, rejectWithError: false };
  obj2 = { user_ids, token: bulkAddToken };
  obj = TrackedHTTPUtilsDefault;
  ({ event: discord_common_AnalyticsUtils.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE });
  const postResult = obj.post(request);
  return postResult.then((body) => body.body);
};
export const adminDeleteContactSync = function adminDeleteContactSync() {
  metroImportDefault();
  metroImportAll();
  obj = ContactSyncManager;
  const result = obj.removeLastUserContactsUpload();
  const ContactSyncEnabled = UserSettings.ContactSyncEnabled;
  ContactSyncEnabled.updateSetting(false);
  const tmp5 = TrackedHTTPUtilsDefault;
  const _delete = tmp5.delete;
  const obj2 = { url: closure_12.CONNECTION(map1.CONTACTS, "@me"), oldFormErrors: true, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_CONNECTIONS_UPDATE }, rejectWithError: false };
  ({ event: discord_common_AnalyticsUtils.NetworkActionNames.USER_CONNECTIONS_UPDATE });
  return _delete(obj2);
};
export const getImageForContactId = function getImageForContactId(arg0) {
  let closure_0 = arg0;
  const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  const promise = new Promise((arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    const imageForContactId = DCDContactSyncManager.getImageForContactId(closure_0, (arg0, str) => {
      if (null == arg0) {
        closure_0("".replace(/(\r\n|\n|\r)/gm, ""));
      } else {
        closure_1(closure_2_17);
      }
    });
  });
  return promise;
};
export const getContacts = function getContacts(phone) {
  let str;
  let closure_0 = phone;
  const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  const promise = new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    DCDContactSyncManager.syncContacts(closure_1, closure_0, (arg0, names, payload) => {
      let tmp10;
      if (null == arg0) {
        let parsed;
        try {
          const _JSON = JSON;
          parsed = JSON.parse(names);
        } catch (err) {
          parsed = {};
        }
        const _Object = Object;
        const values = Object.values(parsed);
        const found = values.find((phone) => phone.phone === closure_1_0);
        let unencryptedName;
        if (found != null) {
          unencryptedName = found.unencryptedName;
        }
        obj = { names, ownName: tmp10, payload };
        tmp10 = null;
        if (null != unencryptedName) {
          tmp10 = unencryptedName;
        }
        closure_0(obj);
      } else {
        closure_1(error);
      }
    });
  });
  return promise;
};
export const getStoredContacts = function getStoredContacts() {
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(tmp);
  } catch (tmp4) {
    obj = SentryUtilsDefault;
    obj.captureException(tmp4);
  }
  return {};
};
export const useContactSyncAccount = tmp8;
export const useContactSyncEnabled = tmp9;
export const useContactSyncUserIsDiscoverable = tmp10;
export { isContactSyncEnabled };
export { getOpenLearnMoreUrl };
export const handleOpenLearnMoreLink = function handleOpenLearnMoreLink() {
  const openURL = LinkingDefault.openURL;
  LinkingDefault;
  obj = HelpdeskUtilsDefault;
  openURL(obj.getArticleURL(constants4.CONTACT_SYNC));
};
export const transitionToAddFriendsLandingPage = function transitionToAddFriendsLandingPage() {
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(React4);
};