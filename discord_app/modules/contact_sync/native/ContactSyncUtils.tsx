// === Module 12442: _uploadContacts ===

// Module 12442 (_uploadContacts)
import encodeProperties from "encodeProperties" /* 500 */;
import initialize from "initialize" /* 586 */;
import _modDef1205 from "module_1205" /* 1205 */;
import PlatformTypes from "PlatformTypes" /* 1235 */;
import hasFlag from "hasFlag" /* 1398 */;
import combinedDefault from "combined" /* 1994 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import _modDef4190 from "module_4190" /* 4190 */;
import _modDef4713 from "module_4713" /* 4713 */;
import _modDef4723 from "module_4723" /* 4723 */;
import _requestAndSyncContacts from "_requestAndSyncContacts" /* 12443 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "set" /* 5233 */;
import setStoredContacts from "setStoredContacts" /* 12441 */;
import ContactSyncLandingPage from "ContactSyncLandingPage" /* 12440 */;
import ME from "ME" /* 673 */;

require = arg1;
function _uploadContacts() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0, body) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              body = tmp5;
              dependencyMap = tmp2;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              dependencyMap = undefined;
              body = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              const _JSON = JSON;
              dependencyMap = JSON.parse(callback);
              let obj7 = flag(4713);
              const obj2 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
              obj2[0] = constants2.CONNECTION_SYNC_CONTACTS;
              const obj3 = { friend_list_entries: null, background: null, allowed_in_suggestions: null, include_mutual_friends_count: false };
              obj3[0] = dependencyMap;
              obj3[1] = flag;
              obj3[2] = constants.ANYONE_WITH_CONTACT_INFO;
              obj2[1] = obj3;
              const obj4 = { event: null };
              obj4[0] = callback(500).NetworkActionNames.USER_CONTACTS_SYNC;
              obj2[2] = obj4;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = obj7.put(obj2);
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            body = body.body;
            obj = flag(706);
            obj.wait(() => {
              let obj = flag(table[9]);
              obj = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: body.friend_suggestions };
              return obj.dispatch(obj);
            });
            c5 = 3;
            obj7 = { value: null, done: true };
            obj7[0] = body;
            return obj7;
          }
        } catch (tmp12) {
          c5 = tmp;
          throw tmp12;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ useContactSyncStore: closure_6, clearDismissState: error, deleteStoredContacts: closure_8 } = setStoredContacts);
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
  let isIOSResult = PlatformTypes.isIOS();
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
  let isIOSResult = PlatformTypes.isIOS();
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
  let obj = _modDef4713;
  obj = { url: closure_12.USER_BULK_RELATIONSHIPS, body: obj, trackedActionData: null, rejectWithError: false };
  obj = { user_ids, token: bulkAddToken };
  obj[2] = { event: encodeProperties.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE };
  obj1 = { event: encodeProperties.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE };
  return obj.post(obj).then((body) => body.body);
};
export const adminDeleteContactSync = function adminDeleteContactSync() {
  callback2();
  callback3();
  let obj = _requestAndSyncContacts;
  const result = obj.removeLastUserContactsUpload();
  const ContactSyncEnabled = explicitContentFromProto.ContactSyncEnabled;
  ContactSyncEnabled.updateSetting(false);
  obj = { url: closure_12.CONNECTION(constants2.CONTACTS, "@me"), oldFormErrors: true, trackedActionData: null, rejectWithError: false };
  obj = { event: encodeProperties.NetworkActionNames.USER_CONNECTIONS_UPDATE };
  obj[2] = obj;
  return _modDef4713.delete(obj);
};
export const getImageForContactId = function getImageForContactId(closure_0, arg1) {
  let DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  return new Promise((closure_0) => {
    DCDContactSyncManager = arg1;
    const imageForContactId = DCDContactSyncManager.getImageForContactId(closure_0, (arg0, str) => {
      if (null == arg0) {
        callback(str.replace(/(\r\n|\n|\r)/gm, ""));
      } else {
        callback2(closure_1_17);
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
        callback(closure_2_16);
      }
    });
  });
};
export const getStoredContacts = function getStoredContacts() {
  try {
    const _JSON = JSON;
    return JSON.parse(tmp2);
  } catch (tmp4) {
    _modDef1205.captureException(tmp4);
    const obj = _modDef1205;
  }
};
export const useContactSyncAccount = function useContactSyncAccount() {
  const items = [closure_5];
  return initialize.useStateFromStores(items, () => localAccount.getLocalAccount(constants.CONTACTS));
};
export const useContactSyncEnabled = function useContactSyncEnabled() {
  const items = [closure_5];
  return initialize.useStateFromStores(items, () => {
    localAccount = localAccount.getLocalAccount(constants.CONTACTS);
    return null != localAccount && localAccount.friendSync && localAccount.type === constants.CONTACTS;
  });
};
export const useContactSyncUserIsDiscoverable = function useContactSyncUserIsDiscoverable() {
  const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  let obj = hasFlag;
  let hasFlagResult = obj.hasFlag(setting, constants3.FIND_BY_PHONE);
  const hasFlagResult1 = hasFlag.hasFlag(setting, constants3.FIND_BY_EMAIL);
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
  return combinedDefault.getArticleURL(constants4.CONTACT_SYNC);
};
export const handleOpenLearnMoreLink = function handleOpenLearnMoreLink() {
  const obj = _modDef4190;
  obj.openURL(combinedDefault.getArticleURL(constants4.CONTACT_SYNC));
};
export const transitionToAddFriendsLandingPage = function transitionToAddFriendsLandingPage() {
  _modDef4723.popWithKey(closure_9);
};