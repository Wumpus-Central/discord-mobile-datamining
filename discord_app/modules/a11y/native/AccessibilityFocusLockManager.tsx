// discord_app/modules/a11y/native/AccessibilityFocusLockManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import NativeDeviceAccessibilityModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx";
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled.native.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";

require = fn;
const logger = new LoggerDefault("AccessibilityFocusLockManager");
class AccessibilityFocusLockManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = closure_0(closure_2[2]);
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
  clearTimeout(this._focusLockEnabledDelayTimeoutId);
  let item10014;
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
        NativeDeviceAccessibilityModuleDefault.enableFocusLock(item10014, flag);
      }, self._focusLockEnabledDelayTimeout);
      self._focusLockEnabled = true;
    }
  }
  if (self._focusLockEnabled) {
    item10014(4908).disableFocusLock();
    self._focusLockEnabled = false;
    const obj = item10014(4908);
  }
};
prototype["_initialize"] = function _initialize() {
  const self = this;
  this._screenReaderEnabledListener = useIsScreenReaderEnabled.addScreenReaderEnabledListener(
    (_screenReaderEnabled) => {
      self._screenReaderEnabled = _screenReaderEnabled;
      const result = self._updateAccessibilityFocusLock();
    },
  );
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
    for (const item10024 of nextResult) {
      let tmp7 = item10024;
      if (arg0.includes(item10024)) {
        let _HermesInternal = HermesInternal;
        let errorResult1 = logger.error(
          "Duplicate target view nativeID " + tmp7 + " already accessibility focus locked.",
        );
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/a11y/native/AccessibilityFocusLockManager.tsx");

export default accessibilityFocusLockManager;
