// === Module 14867: ParentalConsentWarningStore ===

// Module 14867 (ParentalConsentWarningStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let c0 = null;
let c1 = null;
let c2 = null;
const PersistedStore = initializeDefault.PersistedStore;
class ParentalConsentWarningStore extends PersistedStore {
}
const prototype = ParentalConsentWarningStore.prototype;
prototype["initialize"] = function initialize(lastWarningFetchDayStart) {
  let prop;
  if (lastWarningFetchDayStart != null) {
    prop = lastWarningFetchDayStart.lastWarningFetchDayStart;
  }
  if (prop == null) {
    prop = null;
  }
  c0 = prop;
  let prop1;
  if (lastWarningFetchDayStart != null) {
    prop1 = lastWarningFetchDayStart.lastModalShownDayStart;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  c1 = prop1;
  warning = undefined;
  if (lastWarningFetchDayStart != null) {
    warning = lastWarningFetchDayStart.warning;
  }
  if (warning == null) {
    warning = null;
  }
  c2 = warning;
};
prototype["getWarning"] = function getWarning() {
  return c2;
};
prototype["shouldFetchToday"] = function shouldFetchToday() {
  let tmp = null == c0;
  if (!tmp) {
    const _Date = Date;
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    tmp = c0 !== date.getTime();
  }
  return tmp;
};
prototype["hasShownModalToday"] = function hasShownModalToday() {
  let tmp = null != c1;
  if (tmp) {
    const _Date = Date;
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    tmp = c1 === date.getTime();
  }
  return tmp;
};
prototype["getState"] = function getState() {
  return { lastWarningFetchDayStart, lastModalShownDayStart, warning };
};
ParentalConsentWarningStore.displayName = "ParentalConsentWarningStore";
ParentalConsentWarningStore.persistKey = "ParentalConsentWarningStore";
const items = [
  (lastWarningFetchDayStart) => {
    let prop;
    if (lastWarningFetchDayStart != null) {
      prop = lastWarningFetchDayStart.lastWarningFetchDayStart;
    }
    if (prop == null) {
      prop = null;
    }
    const obj = { lastWarningFetchDayStart: prop, lastModalShownDayStart: null, warning: null };
    let prop1;
    if (lastWarningFetchDayStart != null) {
      prop1 = lastWarningFetchDayStart.lastModalShownDayStart;
    }
    if (prop1 == null) {
      prop1 = null;
    }
    obj.lastModalShownDayStart = prop1;
    warning = undefined;
    if (lastWarningFetchDayStart != null) {
      warning = lastWarningFetchDayStart.warning;
    }
    if (warning == null) {
      warning = null;
    }
    obj.warning = warning;
    return obj;
  }
];
ParentalConsentWarningStore.migrations = items;
const parentalConsentWarningStore = new ParentalConsentWarningStore(DispatcherDefault, {
  PARENTAL_CONSENT_WARNING_FETCH_SUCCESS: function handleFetchSuccess(warning) {
    warning = warning.warning;
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    const time = date.getTime();
    parentalConsentWarningStore.persist();
  },
  PARENTAL_CONSENT_WARNING_MODAL_SHOWN: function handleModalShown() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    const time = date.getTime();
    parentalConsentWarningStore.persist();
  },
  PARENTAL_CONSENT_WARNING_CLEARED: function handleWarningCleared() {
    c2 = null;
    parentalConsentWarningStore.persist();
  },
  LOGOUT: function handleLogout() {
    c0 = null;
    c1 = null;
    c2 = null;
    parentalConsentWarningStore.persist();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningStore.tsx");

export default parentalConsentWarningStore;