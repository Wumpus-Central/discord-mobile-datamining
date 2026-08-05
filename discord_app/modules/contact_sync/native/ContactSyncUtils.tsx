// discord_app/modules/contact_sync/native/ContactSyncUtils.tsx
import closure_3 from "ME";
import { NativeModules } from "module_4490";
import set from "set";
import setStoredContacts from "setStoredContacts";
import ContactSyncLandingPage from "ContactSyncLandingPage";
import ME from "ME";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function _uploadContacts() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0, body) {
      let dependencyMap = tmp2;
      if (flag === undefined) {
        flag = false;
      }
      yield "ct";
      const _JSON = JSON;
      dependencyMap = JSON.parse(callback);
      const obj7 = flag(5094);
      const obj2 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
      obj2[0] = constants2.CONNECTION_SYNC_CONTACTS;
      const obj3 = { friend_list_entries: null, background: null, allowed_in_suggestions: null, include_mutual_friends_count: false };
      obj3[0] = dependencyMap;
      obj3[1] = flag;
      obj3[2] = constants.ANYONE_WITH_CONTACT_INFO;
      obj2[1] = obj3;
      const obj4 = { event: null };
      obj4[0] = callback(503).NetworkActionNames.USER_CONTACTS_SYNC;
      obj2[2] = obj4;
      yield obj7.put(obj2);
      body = body.body;
      let obj = flag(709);
      obj.wait(() => {
        let obj = flag(table[9]);
        obj = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: body.friend_suggestions };
        return obj.dispatch(obj);
      });
      return body;
    })();
    iter.next();
    return iter;
  });
  const _uploadContacts = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ useContactSyncStore: closure_6, clearDismissState: error, deleteStoredContacts: metroImportAll } = setStoredContacts);
({ CONTACT_SYNC_MODAL_KEY: c9, ContactPermissions: c10, ContactSyncSuggestionsSetting: unpackModuleId } = ContactSyncLandingPage);
({ Endpoints: closure_12, PlatformTypes: map1, FriendDiscoveryFlags: closure_14, HelpdeskArticles: closure_15 } = ME);
error = new Error("No contact permissions");
const error1 = new Error("No phone number");
const error2 = new Error("Failed to fetch contact image");
let result = require("set").fileFinishedImporting("modules/contact_sync/native/ContactSyncUtils.tsx");

export const ContactSyncPermissionDenied = error;
export const ContactSyncFailedUserHasNoPhone = error1;
export const ContactImageFetchFailed = error2;
export const isContactSyncAvailable = function isContactSyncAvailable() {
  let isIOSResult = require(501) /* PlatformTypes */.isIOS();
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
  let isIOSResult = require(501) /* PlatformTypes */.isIOS();
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
export const uploadContacts = function uploadContacts(c3, arg1) {
  const self = this;
  const apply = _uploadContacts.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const bulkAddFriends = function bulkAddFriends(user_ids, bulkAddToken) {
  let obj = importDefault(5094);
  obj = { url: closure_12.USER_BULK_RELATIONSHIPS, body: obj, trackedActionData: null, rejectWithError: false };
  obj = { user_ids, token: bulkAddToken };
  obj[2] = { event: require(503) /* encodeProperties */.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE };
  const obj1 = { event: require(503) /* encodeProperties */.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE };
  return obj.post(obj).then((body) => body.body);
};
export const adminDeleteContactSync = function adminDeleteContactSync() {
  callback2();
  callback3();
  let obj = require(11948) /* _requestAndSyncContacts */;
  const result = obj.removeLastUserContactsUpload();
  const ContactSyncEnabled = require(3958) /* explicitContentFromProto */.ContactSyncEnabled;
  ContactSyncEnabled.updateSetting(false);
  obj = { url: closure_12.CONNECTION(constants2.CONTACTS, "@me"), oldFormErrors: true, trackedActionData: null, rejectWithError: false };
  obj = { event: require(503) /* encodeProperties */.NetworkActionNames.USER_CONNECTIONS_UPDATE };
  obj[2] = obj;
  return importDefault(5094).delete(obj);
};
export const getImageForContactId = function getImageForContactId(closure_0, arg1) {
  let DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  return new Promise((closure_0) => {
    const DCDContactSyncManager = arg1;
    const imageForContactId = DCDContactSyncManager.getImageForContactId(closure_0, (arg0, str) => {
      if (null == arg0) {
        callback(str.replace(/(\r\n|\n|\r)/gm, ""));
      } else {
        callback2(outer1_17);
      }
    });
  });
};
export const getContacts = function getContacts(closure_0, storedContacts) {
  let str = storedContacts;
  if (storedContacts === undefined) {
    str = "";
  }
  let DCDContactSyncManager;
  DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  return new Promise((closure_0, closure_1) => {
    DCDContactSyncManager.syncContacts(closure_1, closure_0, (arg0, arg1, arg2) => {
      if (null == arg0) {
        try {
          const _JSON = JSON;
          let parsed = JSON.parse(arg1);
          const _Object = Object;
          const values = Object.values(parsed);
          const found = values.find((phone) => phone.phone === closure_0);
          let unencryptedName;
          if (found != null) {
            unencryptedName = found.unencryptedName;
          }
          const obj = { names: null, ownName: null, payload: null };
          obj[0] = arg1;
          let tmp10 = null;
          if (null != unencryptedName) {
            tmp10 = unencryptedName;
          }
          obj[1] = tmp10;
          obj[2] = arg2;
          closure_0(obj);
          const tmp9 = closure_0;
        } catch (err) {
          parsed = {};
        }
      } else {
        callback(outer2_16);
      }
    });
  });
};
export const getStoredContacts = function getStoredContacts() {
  try {
    const _JSON = JSON;
    return JSON.parse(tmp2);
  } catch (tmp4) {
    importDefault(1208).captureException(tmp4);
    const obj = importDefault(1208);
  }
};
export const useContactSyncAccount = function useContactSyncAccount() {
  const items = [set];
  return require(589) /* initialize */.useStateFromStores(items, () => localAccount.getLocalAccount(constants.CONTACTS));
};
export const useContactSyncEnabled = function useContactSyncEnabled() {
  const items = [set];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    localAccount = localAccount.getLocalAccount(constants.CONTACTS);
    return null != localAccount && localAccount.friendSync && localAccount.type === constants.CONTACTS;
  });
};
export const useContactSyncUserIsDiscoverable = function useContactSyncUserIsDiscoverable() {
  const FriendDiscoverySettings = require(3958) /* explicitContentFromProto */.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  let obj = require(1384) /* hasFlag */;
  let hasFlagResult = obj.hasFlag(setting, constants3.FIND_BY_PHONE);
  const hasFlagResult1 = require(1384) /* hasFlag */.hasFlag(setting, constants3.FIND_BY_EMAIL);
  obj = { phone: hasFlagResult, email: hasFlagResult1, any: null };
  if (!hasFlagResult) {
    hasFlagResult = hasFlagResult1;
  }
  obj[2] = hasFlagResult;
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
  return importDefault(1945).getArticleURL(constants4.CONTACT_SYNC);
};
export const handleOpenLearnMoreLink = function handleOpenLearnMoreLink() {
  const obj = importDefault(3982);
  obj.openURL(importDefault(1945).getArticleURL(constants4.CONTACT_SYNC));
};
export const transitionToAddFriendsLandingPage = function transitionToAddFriendsLandingPage() {
  importDefault(4490).popWithKey(closure_9);
};