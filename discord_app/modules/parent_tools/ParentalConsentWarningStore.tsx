// === Module 14473: initialize ===

// Module 14473 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

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
  let prop1;
  if (lastWarningFetchDayStart != null) {
    prop1 = lastWarningFetchDayStart.lastModalShownDayStart;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  let warning;
  if (lastWarningFetchDayStart != null) {
    warning = lastWarningFetchDayStart.warning;
  }
  if (warning == null) {
    warning = null;
  }
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
  return { lastWarningFetchDayStart: c0, lastModalShownDayStart: c1, warning: c2 };
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
    obj[1] = prop1;
    let warning;
    if (lastWarningFetchDayStart != null) {
      warning = lastWarningFetchDayStart.warning;
    }
    if (warning == null) {
      warning = null;
    }
    obj[2] = warning;
    return obj;
  }
];
ParentalConsentWarningStore.migrations = items;
const parentalConsentWarningStore = new ParentalConsentWarningStore(dispatcherDefault, {
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
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningStore.tsx");

export default parentalConsentWarningStore;