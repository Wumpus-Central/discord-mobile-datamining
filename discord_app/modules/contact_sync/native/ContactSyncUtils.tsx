// === Module 12680: ContactSyncUtils ===

// Module 12680 (ContactSyncUtils)
import initialize from "initialize" /* 504 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import UserSettings from "UserSettings" /* 1935 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import LinkingDefault from "Linking" /* 4255 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import ContactSyncManager from "ContactSyncManager" /* 12681 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;

require = fn;
let closure_18 = async function _uploadContacts(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const friend_suggestions = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = false;
          }
          closure_130_1 = flag;
          closure_130_2 = undefined;
          let body;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const _JSON = JSON;
          closure_130_2 = JSON.parse(closure_130_0);
          const request = { url: closure_131_12.CONNECTION_SYNC_CONTACTS, body: null, trackedActionData: null, rejectWithError: false };
          const obj2 = { friend_list_entries: closure_130_2, background: closure_130_1, allowed_in_suggestions: closure_131_11.ANYONE_WITH_CONTACT_INFO, include_mutual_friends_count: false };
          request.body = obj2;
          const obj3 = { event: closure_131_0(closure_131_2[8]).NetworkActionNames.USER_CONTACTS_SYNC };
          request.trackedActionData = obj3;
          c4 = 2;
          c5 = 1;
          const obj4 = { value: closure_131_1(closure_131_2[7]).put(request), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        body = value.body;
        obj = closure_131_1(closure_131_2[9]);
        obj.wait(() => {
          closure_1(closure_2[9]);
          const obj = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: friend_suggestions.friend_suggestions };
          return obj.dispatch(obj);
        });
        c5 = 3;
        const obj6 = { value: body, done: true };
        return obj6;
      }
    } catch (tmp12) {
      c5 = tmp;
      throw tmp12;
    }
  }
};
const NativeModules = fn(17).NativeModules;
const ContactSyncPersistedStore = fn(12679);
({ useContactSyncStore: metroRequire, clearDismissState: closure_7, deleteStoredContacts: closure_8 } = ContactSyncPersistedStore);
const ContactSyncConstants = fn(12678);
({ CONTACT_SYNC_MODAL_KEY: closure_9, ContactPermissions: c10, ContactSyncSuggestionsSetting: closure_11 } = ContactSyncConstants);
const Constants = fn(1074);
({ Endpoints: closure_12, PlatformTypes: map1, FriendDiscoveryFlags: closure_14, HelpdeskArticles: closure_15 } = Constants);
const error = new Error("No contact permissions");
const error1 = new Error("No phone number");
const error2 = new Error("Failed to fetch contact image");
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncUtils.tsx");

export const ContactSyncPermissionDenied = error;
export const ContactSyncFailedUserHasNoPhone = error1;
export const ContactImageFetchFailed = error2;
export const isContactSyncAvailable = function isContactSyncAvailable() {
  let isIOSResult = utils_PlatformUtils.isIOS();
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
};
export const checkContactPermissions = function checkContactPermissions() {
  let isIOSResult = utils_PlatformUtils.isIOS();
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
    let result = DCDContactSyncManager2.hasContactsPermissions();
  } else {
    result = Promise.resolve(constants.UNAUTHORIZED);
  }
  return result;
};
export const uploadContacts = function uploadContacts() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const bulkAddFriends = function bulkAddFriends(user_ids, bulkAddToken) {
  const request = { url: closure_1_12.USER_BULK_RELATIONSHIPS, body: null, trackedActionData: null, rejectWithError: false };
  let obj = { user_ids, token: bulkAddToken };
  request.body = obj;
  obj = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE };
  request.trackedActionData = obj;
  return obj.post(request).then((body) => body.body);
};
export const adminDeleteContactSync = function adminDeleteContactSync() {
  React5();
  React6();
  let obj = ContactSyncManager;
  const result = obj.removeLastUserContactsUpload();
  const ContactSyncEnabled = UserSettings.ContactSyncEnabled;
  ContactSyncEnabled.updateSetting(false);
  obj = { url: closure_1_12.CONNECTION(constants2.CONTACTS, "@me"), oldFormErrors: true, trackedActionData: null, rejectWithError: false };
  obj = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_CONNECTIONS_UPDATE };
  obj.trackedActionData = obj;
  return TrackedHTTPUtilsDefault.delete(obj);
};
export const getImageForContactId = function getImageForContactId(arg0) {
  closure_0 = arg0;
  const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const imageForContactId = DCDContactSyncManager.getImageForContactId(closure_0, (arg0, str) => {
      if (null == arg0) {
        closure_0(str.replace(/(\r\n|\n|\r)/gm, ""));
      } else {
        closure_1(error2);
      }
    });
  });
};
export const getContacts = function getContacts(phone, storedContacts) {
  closure_0 = phone;
  if (storedContacts === undefined) {
    const str = "";
  }
  const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    DCDContactSyncManager.syncContacts(closure_1, closure_0, (arg0, names, payload) => {
      if (null == arg0) {
        try {
          const _JSON = JSON;
          let parsed = JSON.parse(names);
          const _Object = Object;
          const values = Object.values(parsed);
          const found = values.find((phone) => phone.phone === closure_1_0);
          let unencryptedName;
          if (found != null) {
            unencryptedName = found.unencryptedName;
          }
          const obj = { names, ownName: null, payload: null };
          let tmp10 = null;
          if (null != unencryptedName) {
            tmp10 = unencryptedName;
          }
          obj.ownName = tmp10;
          obj.payload = payload;
          closure_0(obj);
        } catch (err) {
          parsed = {};
        }
      } else {
        closure_1(error);
      }
    });
  });
};
export const getStoredContacts = function getStoredContacts() {
  try {
    const _JSON = JSON;
    return JSON.parse(tmp2);
  } catch (tmp4) {
    SentryUtilsDefault.captureException(tmp4);
  }
};
export const useContactSyncAccount = function useContactSyncAccount() {
  const items = [ConnectedAccountsStore];
  return initialize.useStateFromStores(items, () => localAccount.getLocalAccount(constants.CONTACTS));
};
export const useContactSyncEnabled = function useContactSyncEnabled() {
  const items = [ConnectedAccountsStore];
  return initialize.useStateFromStores(items, () => {
    localAccount = localAccount.getLocalAccount(constants.CONTACTS);
    return null != localAccount && localAccount.friendSync && localAccount.type === constants.CONTACTS;
  });
};
export const useContactSyncUserIsDiscoverable = function useContactSyncUserIsDiscoverable() {
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  let obj = FlagUtils;
  let hasFlagResult = obj.hasFlag(setting, constants3.FIND_BY_PHONE);
  const hasFlagResult1 = FlagUtils.hasFlag(setting, constants3.FIND_BY_EMAIL);
  obj = { phone: hasFlagResult, email: hasFlagResult1, any: null };
  if (!hasFlagResult) {
    hasFlagResult = hasFlagResult1;
  }
  obj.any = hasFlagResult;
  return obj;
};
export const isContactSyncEnabled = function isContactSyncEnabled(contactSyncAccount) {
  let tmp = null != contactSyncAccount && contactSyncAccount.friendSync;
  if (tmp) {
    tmp = contactSyncAccount.type === constants2.CONTACTS;
  }
  return tmp;
};
export const getOpenLearnMoreUrl = function getOpenLearnMoreUrl() {
  return HelpdeskUtilsDefault.getArticleURL(constants4.CONTACT_SYNC);
};
export const handleOpenLearnMoreLink = function handleOpenLearnMoreLink() {
  const obj = LinkingDefault;
  obj.openURL(HelpdeskUtilsDefault.getArticleURL(constants4.CONTACT_SYNC));
};
export const transitionToAddFriendsLandingPage = function transitionToAddFriendsLandingPage() {
  ModalActionCreatorsDefault.popWithKey(React7);
};