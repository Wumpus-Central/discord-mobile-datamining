// discord_app/modules/a11y/native/AccessibilityFocusLockManager.tsx
import { NativeModules } from "get ActivityIndicator";
import "initialize";
import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx";

let c4 = new require("SCREEN_READER_ENABLED_GETTER")("AccessibilityFocusLockManager");
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
  let importDefault;
  clearTimeout(this._focusLockEnabledDelayTimeoutId);
  importDefault = undefined;
  const _focusLockedNativeIDGroups = this._focusLockedNativeIDGroups;
  const values = _focusLockedNativeIDGroups.values();
  for (const item10014 of values) {
    tmp = item10014;
    importDefault = item10014;
    continue;
  }
  if (null != tmp) {
    if (self._screenReaderEnabled) {
      const _setTimeout = setTimeout;
      self._focusLockEnabledDelayTimeoutId = setTimeout(() => {
        if (obj.isAndroid()) {
          _undefined(outer1_2[5]).enableFocusLock(_undefined, flag);
          const obj2 = _undefined(outer1_2[5]);
        } else {
          const DCDAccessibilityManager = outer1_3.DCDAccessibilityManager;
          DCDAccessibilityManager.enableFocusLock(_undefined, flag);
        }
      }, self._focusLockEnabledDelayTimeout);
      self._focusLockEnabled = true;
    }
  }
  if (self._focusLockEnabled) {
    if (obj.isAndroid()) {
      enforcing.disableFocusLock();
      let obj2 = enforcing;
    } else {
      let DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
      DCDAccessibilityManager.disableFocusLock();
    }
    self._focusLockEnabled = false;
    obj = flag(500);
  }
};
prototype["_initialize"] = function _initialize() {
  const self = this;
  this._screenReaderEnabledListener = self(4763).addScreenReaderEnabledListener((_screenReaderEnabled) => {
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
    tmp2.error("No target view nativeIDs to add.");
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
        let tmp8 = tmp2;
        let tmp9 = item10024;
        let _HermesInternal = HermesInternal;
        let errorResult1 = tmp2.error("Duplicate target view nativeID " + tmp7 + " already accessibility focus locked.");
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
    tmp2.error("No target view nativeIDs to remove.");
  }
  const self = this;
  const _focusLockedNativeIDGroups = this._focusLockedNativeIDGroups;
  if (!_focusLockedNativeIDGroups.has(items1[0])) {
    const _HermesInternal = HermesInternal;
    tmp2.error("No target view nativeID " + items1[0] + " accessibility focus locked.");
  }
  const _focusLockedNativeIDGroups2 = self._focusLockedNativeIDGroups;
  _focusLockedNativeIDGroups2.delete(items1[0]);
  const result = self._updateAccessibilityFocusLock();
};
const accessibilityFocusLockManager = new AccessibilityFocusLockManager();
const tmp2 = new require("SCREEN_READER_ENABLED_GETTER")("AccessibilityFocusLockManager");
let result = require("initialize").fileFinishedImporting("modules/a11y/native/AccessibilityFocusLockManager.tsx");

export default accessibilityFocusLockManager;