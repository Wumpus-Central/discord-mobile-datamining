// === Module 14675: ParentalConsentWarningStore ===

// Module 14675 (ParentalConsentWarningStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let prop = null;
let prop1 = null;
let warning = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class ParentalConsentWarningStore extends PersistedStore {
  initialize(lastWarningFetchDayStart) {
    prop = undefined;
    if (lastWarningFetchDayStart != null) {
      prop = lastWarningFetchDayStart.lastWarningFetchDayStart;
    }
    if (prop == null) {
      prop = null;
    }
    prop1 = undefined;
    if (lastWarningFetchDayStart != null) {
      prop1 = lastWarningFetchDayStart.lastModalShownDayStart;
    }
    if (prop1 == null) {
      prop1 = null;
    }
    warning = undefined;
    if (lastWarningFetchDayStart != null) {
      warning = lastWarningFetchDayStart.warning;
    }
    if (warning == null) {
      warning = null;
    }
  }
  getWarning() {
    return warning;
  }
  shouldFetchToday() {
    let tmp = null == prop;
    if (!tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      tmp = prop !== date.getTime();
    }
    return tmp;
  }
  hasShownModalToday() {
    let tmp = null != prop1;
    if (tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      tmp = prop1 === date.getTime();
    }
    return tmp;
  }
  getState() {
    return { lastWarningFetchDayStart: prop, lastModalShownDayStart: prop1, warning };
  }
}
const prototype = ParentalConsentWarningStore.prototype;
ParentalConsentWarningStore.displayName = "ParentalConsentWarningStore";
ParentalConsentWarningStore.persistKey = "ParentalConsentWarningStore";
const items = [
  (lastWarningFetchDayStart) => {
    prop = undefined;
    if (lastWarningFetchDayStart != null) {
      prop = lastWarningFetchDayStart.lastWarningFetchDayStart;
    }
    if (prop == null) {
      prop = null;
    }
    const obj = { lastWarningFetchDayStart: prop, lastModalShownDayStart: prop1, warning };
    prop1 = undefined;
    if (lastWarningFetchDayStart != null) {
      prop1 = lastWarningFetchDayStart.lastModalShownDayStart;
    }
    if (prop1 == null) {
      prop1 = null;
    }
    warning = undefined;
    if (lastWarningFetchDayStart != null) {
      warning = lastWarningFetchDayStart.warning;
    }
    if (warning == null) {
      warning = null;
    }
    return obj;
  }
];
ParentalConsentWarningStore.migrations = items;
let obj = {
  PARENTAL_CONSENT_WARNING_FETCH_SUCCESS: function handleFetchSuccess(warning) {
    warning = warning.warning;
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    prop = date.getTime();
    parentalConsentWarningStore.persist();
  },
  PARENTAL_CONSENT_WARNING_MODAL_SHOWN: function handleModalShown() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    prop1 = date.getTime();
    parentalConsentWarningStore.persist();
  },
  PARENTAL_CONSENT_WARNING_CLEARED: function handleWarningCleared() {
    warning = null;
    parentalConsentWarningStore.persist();
  },
  LOGOUT: function handleLogout() {
    prop = null;
    prop1 = null;
    warning = null;
    parentalConsentWarningStore.persist();
  }
};
const parentalConsentWarningStore = new ParentalConsentWarningStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningStore.tsx");

export default parentalConsentWarningStore;