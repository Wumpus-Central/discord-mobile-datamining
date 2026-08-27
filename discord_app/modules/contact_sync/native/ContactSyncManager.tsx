// === Module 12133: _requestAndSyncContacts ===

// Module 12133 (_requestAndSyncContacts)
import Storage3 from "Storage" /* 595 */;
import initializeDefault from "initialize" /* 5438 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "set" /* 5177 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import setStoredContacts from "setStoredContacts" /* 12131 */;
import { ContactPermissions } from "ContactSyncLandingPage" /* 12130 */;
import { PlatformTypes } from "ME" /* 676 */;

require = arg1;
function _requestAndSyncContacts() {
  const self = this;
  const tmp = callback(function*() {
    if (v02 === 2) {
      v02 = 3;
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
        v02 = 2;
        if (0 !== v0) {
          if (1 === tmp8) {
            let currentUser = 0;
            v02();
            v02 = 3;
          } else {
            if (2 === tmp8) {
              if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                currentUser = 0;
                v02 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c1 = arg1;
                let names = c1.names;
                let payload = c1.payload;
                v0(names);
              }
            } else if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              currentUser = 0;
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            const Storage = timestamp(c1[6]).Storage;
            const result = Storage.set(closure_10, timestamp);
            currentUser = 0;
          }
          obj1 = timestamp(c1[7]);
          v0 = 3;
          v02 = 1;
          obj1 = { value: null, done: false };
          obj1[0] = obj1.uploadContacts(payload, true);
          return obj1;
        }
        if (arg0 === 1) {
          v02 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v02 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          names = tmp3;
          c1 = tmp5;
          timestamp = undefined;
          c1 = undefined;
          names = undefined;
          payload = undefined;
          const Storage2 = closure_1_0(closure_1_1[6]).Storage;
          const value = Storage2.get(closure_1_10, 0);
          timestamp = value;
          if (value == null) {
            timestamp = 0;
          }
          const _Date = Date;
          timestamp = Date.now();
          currentUser = 1;
          if (timestamp + 86400000 <= timestamp) {
            currentUser = currentUser.getCurrentUser();
            let phone;
            if (currentUser != null) {
              phone = currentUser.phone;
            }
            if (null == phone) {
              currentUser = 0;
              v02 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              v0 = 2;
              v02 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = closure_1_0(closure_1_1[7]).getContacts(phone, closure_1_7.getState().storedContacts);
              return obj3;
            }
          }
        }
      } catch (tmp33) {
        payload = tmp33;
        if (tmp4 === currentUser) {
          v02 = tmp2;
          throw tmp33;
        } else {
          v0 = tmp;
        }
      }
    }
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ setStoredContacts: c5, deleteStoredContacts: closure_6, useContactSyncStore: error } = setStoredContacts);
const LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY = "LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY";
initializeDefault;
let prototype = function ContactSyncLifecycleManager() {
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
        const result = tmp4(tmp5[7]).checkContactPermissions();
        result.then((arg0) => {
          if (arg0 === constants.AUTHORIZED) {
            callback(table[9]).runAfterInteractions(() => (function requestAndSyncContacts() {
              const self = this;
              const apply = closure_11.apply;
              if (typeof apply === "unknown") {
                applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })());
            const obj = callback(table[9]);
          }
        });
        const tmp4Result = tmp4(tmp5[7]);
      }
      obj = applyArgumentsResult(table[7]);
      tmp4 = applyArgumentsResult;
      tmp5 = table;
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/contact_sync/native/ContactSyncManager.tsx");

export default prototype;
export const LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY = "LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY";
export const removeLastUserContactsUpload = function removeLastUserContactsUpload() {
  const Storage = Storage3.Storage;
  Storage.remove(LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY);
};