// === Module 12343: ContactSyncPersistedStore ===

// Module 12343 (ContactSyncPersistedStore)
import Storage4 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import react_native from "react-native" /* 1259 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f111558 = () => {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONTACT_SYNC_STORED_CONTACTS", empty: "" === closure_0 };
  return obj.dispatch(obj2);
};
const V2_DCD_CONTACTS_STORAGE_KEY = "V2_DCD_CONTACTS_STORAGE_KEY";
const ContactSyncUpsellCTADismissed = "ContactSyncUpsellCTADismissed";
const ContactSyncDMListCTADismissed = "ContactSyncDMListCTADismissed";
const contact_sync_dm_list_cta_first_seen_date = "contact_sync_dm_list_cta_first_seen_date";
let Storage = Storage4.Storage;
Storage.asyncGet("V2_DCD_CONTACTS_STORAGE_KEY", async (arg0) => {
  let closure_0;
  _require = arg0;
  const Storage = require("Storage").Storage;
  const result = Storage.set(V2_DCD_CONTACTS_STORAGE_KEY, arg0);
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let obj;
    let storedContacts;
    obj.setState((arg0) => {
      const obj = { storedContacts };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
  let obj2 = DispatcherDefault;
  obj2.wait(f111558);
});
const useContactSyncStore = module_570.create(() => ({ loadedPolicyNotice: false, storedContacts: "", upsellCTADismissed: false, policyUpdateNoticeDismissed: false, dmListCTADismissed: false }));
let Storage2 = Storage4.Storage;
Storage2.asyncGet("ContactSyncDMListCTADismissed", async (arg0) => {
  let dmListCTADismissed;
  _require = Boolean(arg0);
  const Storage = require("Storage").Storage;
  let timestamp = Storage.get(contact_sync_dm_list_cta_first_seen_date);
  const tmp = _require;
  if (timestamp == null) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (Date.now() - timestamp > 5184000000) {
    _require = true;
  }
  const tmpResult = tmp(1259);
  tmpResult.batchUpdates(() => {
    const obj = { dmListCTADismissed };
    return obj.setState(obj);
  });
});
const Storage3 = Storage4.Storage;
Storage3.asyncGet("ContactSyncUpsellCTADismissed", async (upsellCTADismissed) => {
  _require = upsellCTADismissed;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { upsellCTADismissed };
    return obj.setState(obj);
  });
});
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncPersistedStore.tsx");

export const setStoredContacts = function setStoredContacts(arg0) {
  let closure_0;
  _require = arg0;
  const Storage = require("Storage").Storage;
  const result = Storage.set(V2_DCD_CONTACTS_STORAGE_KEY, arg0);
  const obj = require("react-native");
  obj.batchUpdates(() => {
    let obj;
    let storedContacts;
    obj.setState((arg0) => {
      const obj = { storedContacts };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
  const obj2 = DispatcherDefault;
  obj2.wait(f111558);
};
export const deleteStoredContacts = function deleteStoredContacts() {
  let state;
  const Storage = Storage4.Storage;
  let str = Storage.get(V2_DCD_CONTACTS_STORAGE_KEY);
  if (str == null) {
    str = "";
  }
  const Storage2 = Storage4.Storage;
  Storage2.remove(V2_DCD_CONTACTS_STORAGE_KEY);
  const tmpResult = react_native;
  tmpResult.batchUpdates(() => {
    state.setState((arg0) => {
      const obj = { storedContacts: "" };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
  return str;
};
export { useContactSyncStore };
export const dismissUpsellCTA = function dismissUpsellCTA() {
  let state;
  const Storage = Storage4.Storage;
  const result = Storage.set(ContactSyncUpsellCTADismissed, true);
  let obj = react_native;
  obj.batchUpdates(() => {
    state.setState((arg0) => {
      const obj = { upsellCTADismissed: true };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
};
export const dismissDMListCTA = function dismissDMListCTA() {
  let state;
  const Storage = Storage4.Storage;
  const result = Storage.set(ContactSyncDMListCTADismissed, true);
  let obj = react_native;
  obj.batchUpdates(() => state.setState((arg0) => {
    const obj = { dmListCTADismissed: true };
    const merged = Object.assign(arg0);
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
  let obj;
  const Storage = Storage4.Storage;
  Storage.remove(ContactSyncUpsellCTADismissed);
  const Storage2 = Storage4.Storage;
  Storage2.remove(ContactSyncDMListCTADismissed);
  obj.setState((arg0) => {
    const obj = { upsellCTADismissed: false, dmListCTADismissed: false };
    const merged = Object.assign(arg0);
    return obj;
  });
};