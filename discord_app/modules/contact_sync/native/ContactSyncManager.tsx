// discord_app/modules/contact_sync/native/ContactSyncManager.tsx
import Storage3 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import Constants from "../../../Constants.tsx";
import ContactSyncConstants from "ContactSyncConstants.tsx";
import ContactSyncUtils from "ContactSyncUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ContactSyncPersistedStore from "ContactSyncPersistedStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c5, c6, localAccount, set;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj = function _requestAndSyncContacts() {
  let state;
  obj = _asyncToGenerator(async () => {
    let value;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let timestamp;
        let names;
        let payload;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            timestamp = undefined;
            set = undefined;
            names = undefined;
            payload = undefined;
            const Storage2 = Storage3.Storage;
            value = Storage2.get(LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY, 0);
            let c0 = value;
            if (value == null) {
              c0 = 0;
            }
            const _Date = Date;
            timestamp = Date.now();
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
                return { value: "IconComponent", done: null };
              } else {
                set = ContactSyncUtils;
                c5 = 2;
                c6 = 1;
                const obj4 = { value: set.getContacts(phone, state.getState().storedContacts), done: false };
                return obj4;
              }
            } else {
              c4 = 0;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_130_6();
        } else {
          if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              set = value;
              names = set.names;
              payload = set.payload;
              set = closure_130_5;
              closure_130_5(names);
              if (null != payload) {
                set = closure_130_0(closure_130_1[7]);
                c5 = 3;
                c6 = 1;
                const obj6 = { value: set.uploadContacts(payload, true), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
          const Storage = closure_130_0(closure_130_1[6]).Storage;
          set = Storage.set;
          const result = set(closure_130_10, timestamp);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp29) {
        let closure_3 = tmp29;
        if (0 === c4) {
          c6 = 3;
          throw tmp29;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({
  setStoredContacts: hasOwnProperty,
  deleteStoredContacts: metroRequire,
  useContactSyncStore: metroImportDefault,
} = ContactSyncPersistedStore);
const ContactPermissions = ContactSyncConstants.ContactPermissions;
const PlatformTypes = Constants.PlatformTypes;
const LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY = "LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY";
class ContactSyncLifecycleManager extends AutomaticLifecycleManager {
  constructor() {
    let currentUser;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handleConnectionOpen();
      },
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      if (null != currentUser.getCurrentUser()) {
        localAccount = localAccount.getLocalAccount(constants.CONTACTS);
        obj = ContactSyncUtils;
        if (obj.isContactSyncEnabled(localAccount)) {
          const tmp4Result = ContactSyncUtils;
          const result = tmp4Result.checkContactPermissions();
          result.then((result) => {
            if (result === constants.AUTHORIZED) {
              obj = closure_1_0(closure_1_1[9]);
              obj.runAfterInteractions(() => {
                function requestAndSyncContacts() {
                  return closure_1_11(...arguments);
                }
                return requestAndSyncContacts();
              });
            }
          });
        }
      }
    };
    return applyArgumentsResult;
  }
}
const contactSyncLifecycleManager = new ContactSyncLifecycleManager();
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncManager.tsx");
const LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY_export = "LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY";

export default contactSyncLifecycleManager;
export { LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY_export as LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY };
export const removeLastUserContactsUpload = function removeLastUserContactsUpload() {
  const Storage = Storage3.Storage;
  Storage.remove(LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY);
};
