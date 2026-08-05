// discord_app/modules/contact_sync/native/ContactSyncPersistedStore.tsx
import { Storage } from "Storage";
import keys from "keys";
import { Storage as Storage2 } from "Storage";
import { Storage as Storage3 } from "Storage";
import { Storage } from "../../../../discord_common/js/packages/storage/Storage.tsx";
import { batchUpdates } from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";

const V2_DCD_CONTACTS_STORAGE_KEY = "V2_DCD_CONTACTS_STORAGE_KEY";
const ContactSyncUpsellCTADismissed = "ContactSyncUpsellCTADismissed";
const ContactSyncDMListCTADismissed = "ContactSyncDMListCTADismissed";
const contact_sync_dm_list_cta_first_seen_date = "contact_sync_dm_list_cta_first_seen_date";
Storage.asyncGet("V2_DCD_CONTACTS_STORAGE_KEY", (arg0) => {
  const _require = arg0;
  const Storage = _Storage.Storage;
  const result = Storage.set(V2_DCD_CONTACTS_STORAGE_KEY, arg0);
  _batchUpdates.batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.storedContacts = closure_0;
      return obj;
    });
  });
  let obj = _batchUpdates;
  dispatcher.wait(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "CONTACT_SYNC_STORED_CONTACTS", empty: "" === closure_0 };
    return obj.dispatch(obj);
  });
});
let obj = keys.create(() => ({ loadedPolicyNotice: false, storedContacts: "", upsellCTADismissed: false, policyUpdateNoticeDismissed: false, dmListCTADismissed: false }));
Storage2.asyncGet("ContactSyncDMListCTADismissed", (arg0) => {
  let _require = Boolean(arg0);
  const Storage = _Storage.Storage;
  let timestamp = Storage.get(contact_sync_dm_list_cta_first_seen_date);
  if (timestamp == null) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (Date.now() - timestamp > 5184000000) {
    _require = true;
  }
  _batchUpdates.batchUpdates(() => outer1_7.setState({ dmListCTADismissed: c0 }));
});
Storage3.asyncGet("ContactSyncUpsellCTADismissed", (arg0) => {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_7.setState({ upsellCTADismissed: closure_0 }));
});
let result = require("dispatcher").fileFinishedImporting("modules/contact_sync/native/ContactSyncPersistedStore.tsx");

export const setStoredContacts = function setStoredContacts(arg0) {
  const _require = arg0;
  const Storage = _Storage.Storage;
  const result = Storage.set(V2_DCD_CONTACTS_STORAGE_KEY, arg0);
  _batchUpdates.batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.storedContacts = closure_0;
      return obj;
    });
  });
  const obj = _batchUpdates;
  dispatcher.wait(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "CONTACT_SYNC_STORED_CONTACTS", empty: "" === closure_0 };
    return obj.dispatch(obj);
  });
};
export const deleteStoredContacts = function deleteStoredContacts() {
  const Storage = Storage /* Storage */.Storage;
  let str = Storage.get(V2_DCD_CONTACTS_STORAGE_KEY);
  if (str == null) {
    str = "";
  }
  const Storage2 = tmp(595).Storage;
  Storage2.remove(V2_DCD_CONTACTS_STORAGE_KEY);
  batchUpdates /* batchUpdates */.batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.storedContacts = "";
      return obj;
    });
  });
  return str;
};
export const useContactSyncStore = obj;
export const dismissUpsellCTA = function dismissUpsellCTA() {
  const Storage = Storage /* Storage */.Storage;
  const result = Storage.set(ContactSyncUpsellCTADismissed, true);
  batchUpdates /* batchUpdates */.batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.upsellCTADismissed = true;
      return obj;
    });
  });
};
export const dismissDMListCTA = function dismissDMListCTA() {
  const Storage = Storage /* Storage */.Storage;
  const result = Storage.set(ContactSyncDMListCTADismissed, true);
  batchUpdates /* batchUpdates */.batchUpdates(() => state.setState((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.dmListCTADismissed = true;
    return obj;
  }));
};
export const setDMListCTAFirstSeenDate = function setDMListCTAFirstSeenDate() {
  const Storage = Storage /* Storage */.Storage;
  if (!Storage.get(contact_sync_dm_list_cta_first_seen_date)) {
    const Storage2 = Storage /* Storage */.Storage;
    const _Date = Date;
    const result = Storage2.set(contact_sync_dm_list_cta_first_seen_date, Date.now());
  }
};
export const clearDismissState = function clearDismissState() {
  const Storage = Storage /* Storage */.Storage;
  Storage.remove(ContactSyncUpsellCTADismissed);
  const Storage2 = Storage /* Storage */.Storage;
  Storage2.remove(ContactSyncDMListCTADismissed);
  obj.setState((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.upsellCTADismissed = false;
    obj.dmListCTADismissed = false;
    return obj;
  });
};