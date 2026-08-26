// === Module 4865: _updateAccessibilityFocusLock ===

// Module 4865 (_updateAccessibilityFocusLock)
import timestampDefault from "timestamp" /* 3 */;
import initializeDefault from "initialize" /* 4626 */;
import SCREEN_READER_ENABLED_GETTER from "SCREEN_READER_ENABLED_GETTER" /* 4866 */;

require = arg1;
let closure_3 = new timestampDefault("AccessibilityFocusLockManager");
initializeDefault;
class AccessibilityFocusLockManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = require("SCREEN_READER_ENABLED_GETTER");
    applyArgumentsResult._screenReaderEnabled = obj.getIsScreenReaderEnabled();
    map = new Map();
    applyArgumentsResult._focusLockedNativeIDGroups = map;
    applyArgumentsResult._focusLockEnabled = false;
    applyArgumentsResult._focusLockEnabledDelayTimeoutId = -1;
    applyArgumentsResult._focusLockEnabledDelayTimeout = 250;
    return applyArgumentsResult;
  }
}
const prototype = AccessibilityFocusLockManager.prototype;
prototype["_updateAccessibilityFocusLock"] = function _updateAccessibilityFocusLock(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const self = this;
  let tmp;
  let item10014;
  clearTimeout(this._focusLockEnabledDelayTimeoutId);
  item10014 = undefined;
  const _focusLockedNativeIDGroups = this._focusLockedNativeIDGroups;
  const values = _focusLockedNativeIDGroups.values();
  for (const item10014 of values) {
    tmp = item10014;
    continue;
  }
  if (null != tmp) {
    if (self._screenReaderEnabled) {
      const _setTimeout = setTimeout;
      self._focusLockEnabledDelayTimeoutId = setTimeout(() => {
        item10014(closure_1_2[3]).enableFocusLock(item10014, flag);
      }, self._focusLockEnabledDelayTimeout);
      self._focusLockEnabled = true;
    }
  }
  if (self._focusLockEnabled) {
    item10014(4812).disableFocusLock();
    self._focusLockEnabled = false;
    const obj = item10014(4812);
  }
};
prototype["_initialize"] = function _initialize() {
  const self = this;
  this._screenReaderEnabledListener = self(4866).addScreenReaderEnabledListener((_screenReaderEnabled) => {
    self._screenReaderEnabled = _screenReaderEnabled;
    const result = self._updateAccessibilityFocusLock();
  });
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  const _screenReaderEnabledListener = this._screenReaderEnabledListener;
  if (_screenReaderEnabledListener != null) {
    const result = _screenReaderEnabledListener();
  }
  const _focusLockedNativeIDGroups = self._focusLockedNativeIDGroups;
  _focusLockedNativeIDGroups.clear();
  const result1 = self._updateAccessibilityFocusLock();
};
prototype["enableAccessibilityFocusLock"] = function enableAccessibilityFocusLock(items) {
  if (0 === items.length) {
    logger.error("No target view nativeIDs to add.");
  }
  const self = this;
  const _focusLockedNativeIDGroups = this._focusLockedNativeIDGroups;
  const values = _focusLockedNativeIDGroups.values();
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let tmp6 = nextResult;
    for (const item10024 of nextResult) {
      let tmp7 = item10024;
      if (arg0.includes(item10024)) {
        let tmp8 = logger;
        let tmp9 = item10024;
        let _HermesInternal = HermesInternal;
        let errorResult1 = logger.error("Duplicate target view nativeID " + tmp7 + " already accessibility focus locked.");
      }
      continue;
    }
    continue;
  }
  const _focusLockedNativeIDGroups2 = self._focusLockedNativeIDGroups;
  const result = _focusLockedNativeIDGroups2.set(items[0], items);
  const result1 = self._updateAccessibilityFocusLock(true);
};
prototype["disableAccessibilityFocusLock"] = function disableAccessibilityFocusLock(items1) {
  if (0 === items1.length) {
    logger.error("No target view nativeIDs to remove.");
  }
  const self = this;
  const _focusLockedNativeIDGroups = this._focusLockedNativeIDGroups;
  if (!_focusLockedNativeIDGroups.has(items1[0])) {
    const _HermesInternal = HermesInternal;
    logger.error("No target view nativeID " + items1[0] + " accessibility focus locked.");
  }
  const _focusLockedNativeIDGroups2 = self._focusLockedNativeIDGroups;
  _focusLockedNativeIDGroups2.delete(items1[0]);
  const result = self._updateAccessibilityFocusLock();
};
const accessibilityFocusLockManager = new AccessibilityFocusLockManager();
const tmp2 = new timestampDefault("AccessibilityFocusLockManager");
let result = require("set").fileFinishedImporting("modules/a11y/native/AccessibilityFocusLockManager.tsx");

export default accessibilityFocusLockManager;