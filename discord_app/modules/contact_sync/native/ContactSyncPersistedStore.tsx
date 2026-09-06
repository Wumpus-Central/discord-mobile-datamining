// === Module 12679: ContactSyncPersistedStore ===

// Module 12679 (ContactSyncPersistedStore)
import Storage4 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const V2_DCD_CONTACTS_STORAGE_KEY = "V2_DCD_CONTACTS_STORAGE_KEY";
const ContactSyncUpsellCTADismissed = "ContactSyncUpsellCTADismissed";
const ContactSyncDMListCTADismissed = "ContactSyncDMListCTADismissed";
const contact_sync_dm_list_cta_first_seen_date = "contact_sync_dm_list_cta_first_seen_date";
let Storage = Storage4.Storage;
Storage.asyncGet("V2_DCD_CONTACTS_STORAGE_KEY", async (arg0) => {
  _require = arg0;
  const Storage = require("Storage").Storage;
  const result = Storage.set(V2_DCD_CONTACTS_STORAGE_KEY, arg0);
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.storedContacts = storedContacts;
      return obj;
    });
  });
  let obj = require("ReactBatchUpdates");
  DispatcherDefault.wait(() => {
    const obj = { type: "CONTACT_SYNC_STORED_CONTACTS", empty: "" === closure_0 };
    return obj.dispatch(obj);
  });
});
const useContactSyncStore = module_560.create(() => ({ loadedPolicyNotice: false, storedContacts: "", upsellCTADismissed: false, policyUpdateNoticeDismissed: false, dmListCTADismissed: false }));
let Storage2 = Storage4.Storage;
Storage2.asyncGet("ContactSyncDMListCTADismissed", async (arg0) => {
  _require = Boolean(arg0);
  const Storage = require("Storage").Storage;
  let timestamp = Storage.get(contact_sync_dm_list_cta_first_seen_date);
  if (timestamp == null) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (Date.now() - timestamp > 5184000000) {
    _require = true;
  }
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { dmListCTADismissed };
    return obj.setState(obj);
  });
  const tmpResult = require("ReactBatchUpdates");
});
const Storage3 = Storage4.Storage;
Storage3.asyncGet("ContactSyncUpsellCTADismissed", async (upsellCTADismissed) => {
  _require = upsellCTADismissed;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { upsellCTADismissed };
    return obj.setState(obj);
  });
});
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncPersistedStore.tsx");

export const setStoredContacts = function setStoredContacts(arg0) {
  _require = arg0;
  const Storage = require("Storage").Storage;
  const result = Storage.set(V2_DCD_CONTACTS_STORAGE_KEY, arg0);
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.storedContacts = storedContacts;
      return obj;
    });
  });
  const obj = require("ReactBatchUpdates");
  DispatcherDefault.wait(() => {
    const obj = { type: "CONTACT_SYNC_STORED_CONTACTS", empty: "" === closure_0 };
    return obj.dispatch(obj);
  });
};
export const deleteStoredContacts = function deleteStoredContacts() {
  const Storage = Storage4.Storage;
  let str = Storage.get(V2_DCD_CONTACTS_STORAGE_KEY);
  if (str == null) {
    str = "";
  }
  const Storage2 = Storage4.Storage;
  Storage2.remove(V2_DCD_CONTACTS_STORAGE_KEY);
  ReactBatchUpdates.batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.storedContacts = "";
      return obj;
    });
  });
  return str;
};
export { useContactSyncStore };
export const dismissUpsellCTA = function dismissUpsellCTA() {
  const Storage = Storage4.Storage;
  const result = Storage.set(ContactSyncUpsellCTADismissed, true);
  ReactBatchUpdates.batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.upsellCTADismissed = true;
      return obj;
    });
  });
};
export const dismissDMListCTA = function dismissDMListCTA() {
  const Storage = Storage4.Storage;
  const result = Storage.set(ContactSyncDMListCTADismissed, true);
  ReactBatchUpdates.batchUpdates(() => state.setState((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.dmListCTADismissed = true;
    return obj;
  }));
};
export const setDMListCTAFirstSeenDate = function setDMListCTAFirstSeenDate() {
  const Storage = Storage4.Storage;
  if (!Storage.get(contact_sync_dm_list_cta_first_seen_date)) {
    const Storage2 = Storage4.Storage;
    const _Date = Date;
    const result = Storage2.set(contact_sync_dm_list_cta_first_seen_date, Date.now());
  }
};
export const clearDismissState = function clearDismissState() {
  const Storage = Storage4.Storage;
  Storage.remove(ContactSyncUpsellCTADismissed);
  const Storage2 = Storage4.Storage;
  Storage2.remove(ContactSyncDMListCTADismissed);
  obj.setState((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.upsellCTADismissed = false;
    obj.dmListCTADismissed = false;
    return obj;
  });
};