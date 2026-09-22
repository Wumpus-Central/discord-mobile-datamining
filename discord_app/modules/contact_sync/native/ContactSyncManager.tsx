// === Module 12938: ContactSyncManager ===

// Module 12938 (ContactSyncManager)
import Storage3 from "Storage" /* 510 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12937 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5500 */;
import UserStore from "UserStore" /* 1372 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

require = fn;
let closure_11 = async function _requestAndSyncContacts() {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 !== c5) {
        if (1 === tmp8) {
          c4 = 0;
          closure_130_6();
          c6 = 3;
        } else {
          if (2 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_129_1 = value;
              let names = closure_129_1.names;
              let payload = closure_129_1.payload;
              closure_130_5(names);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
          const Storage = closure_130_0(closure_130_1[6]).Storage;
          const result = Storage.set(closure_130_10, closure_129_0);
          c4 = 0;
        }
        c5 = 3;
        c6 = 1;
        const obj6 = { value: closure_130_0(closure_130_1[7]).uploadContacts(payload, true), done: false };
        return obj6;
      }
      if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_2 = tmp3;
        closure_1 = tmp5;
        closure_129_0 = undefined;
        closure_129_1 = undefined;
        names = undefined;
        payload = undefined;
        const Storage2 = Storage3.Storage;
        value = Storage2.get(LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY, 0);
        c0 = value;
        if (value == null) {
          c0 = 0;
        }
        const _Date = Date;
        const timestamp = Date.now();
        closure_129_0 = timestamp;
        c4 = 1;
        if (c0 + 86400000 <= timestamp) {
          currentUser = currentUser.getCurrentUser();
          let phone;
          if (currentUser != null) {
            phone = currentUser.phone;
          }
          if (null == phone) {
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            c5 = 2;
            c6 = 1;
            const obj8 = { value: ContactSyncUtils.getContacts(phone, state.getState().storedContacts), done: false };
            return obj8;
          }
        }
      }
    } catch (tmp33) {
      closure_3 = tmp33;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp33;
      } else {
        c5 = tmp;
      }
    }
  }
};
const ContactSyncPersistedStore = fn(12936);
({ setStoredContacts: hasOwnProperty, deleteStoredContacts: metroRequire, useContactSyncStore: closure_7 } = ContactSyncPersistedStore);
const ContactPermissions = fn(12935).ContactPermissions;
const PlatformTypes = fn(1074).PlatformTypes;
const LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY = "LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY";
const prototype = function ContactSyncLifecycleManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    }
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    if (null != currentUser.getCurrentUser()) {
      localAccount = localAccount.getLocalAccount(constants.CONTACTS);
      if (obj.isContactSyncEnabled(localAccount)) {
        const result = applyArgumentsResult(dependencyMap[7]).checkContactPermissions();
        result.then((result) => {
          if (result === constants.AUTHORIZED) {
            closure_1_0(dependencyMap[9]).runAfterInteractions(() => (function requestAndSyncContacts() {
              const self = this;
              const apply = closure_1_11.apply;
              if (typeof apply === "unknown") {
                applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })());
            const obj = closure_1_0(dependencyMap[9]);
          }
        });
        const tmp4Result = applyArgumentsResult(dependencyMap[7]);
      }
      obj = applyArgumentsResult(dependencyMap[7]);
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncManager.tsx");

export default prototype1;
export const LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY = "LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY";
export const removeLastUserContactsUpload = function removeLastUserContactsUpload() {
  const Storage = Storage3.Storage;
  Storage.remove(LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY);
};