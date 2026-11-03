// === Module 1709: NativeWorklets ===

// Module 1709 (NativeWorklets)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;

const NativeWorklets = arg1;
let closure_4 = _classPrivateFieldKey("workletsModuleProxy");
let closure_5 = _classPrivateFieldKey("serializableUndefined");
let closure_6 = _classPrivateFieldKey("serializableNull");
let closure_7 = _classPrivateFieldKey("serializableTrue");
let closure_8 = _classPrivateFieldKey("serializableFalse");
class NativeWorklets {
  constructor() {
    self = this;
    tmp = c2(this, NativeWorklets);
    tmp2 = closure_4;
    definePropertyResult = Object.defineProperty(this, closure_4, { writable: true, value: "Array" });
    tmp4 = hasOwnProperty;
    definePropertyResult1 = Object.defineProperty(this, hasOwnProperty, { writable: true, value: "Array" });
    tmp6 = metroRequire;
    definePropertyResult2 = Object.defineProperty(this, metroRequire, { writable: true, value: "Array" });
    tmp8 = closure_7;
    definePropertyResult3 = Object.defineProperty(this, closure_7, { writable: true, value: "Array" });
    tmp10 = closure_8;
    definePropertyResult4 = Object.defineProperty(this, closure_8, { writable: true, value: "Array" });
    tmp12 = closure_0;
    tmp13 = closure_1;
    obj = closure_0(closure_1[4]);
    isBundleModeEnabledResult = obj.isBundleModeEnabled();
    globalThis._WORKLETS_VERSION_JS = closure_0(closure_1[5]).jsVersion;
    obj2 = closure_0(closure_1[6]);
    tmp15 = undefined === globalThis.__workletsModuleProxy && obj2.isRNRuntime();
    if (tmp15) {
      WorkletsTurboModule = tmp12(tmp13[7]).WorkletsTurboModule;
      tmp16 = null;
      if (WorkletsTurboModule != null) {
        installTurboModuleResult = WorkletsTurboModule.installTurboModule(isBundleModeEnabledResult);
      }
      if (!isBundleModeEnabledResult) {
        _globalThis = globalThis;
        __workletsModuleProxy = globalThis.__workletsModuleProxy;
        __initData = tmp12(tmp13[8]).installValueUnpacker.__initData;
        __initData2 = tmp12(tmp13[9]).installSynchronizableUnpacker.__initData;
        __initData3 = tmp12(tmp13[10]).installCustomSerializableUnpacker.__initData;
        __initData4 = tmp12(tmp13[11]).installShareableHostUnpacker.__initData;
        __initData5 = tmp12(tmp13[12]).installShareableGuestUnpacker.__initData;
        __initData6 = tmp12(tmp13[13]).installRemoteFunctionUnpacker.__initData;
        if (undefined !== __initData.bytecode) {
          tmp38 = __workletsModuleProxy;
          unpackersWithBytecode = __workletsModuleProxy.loadUnpackersWithBytecode(__initData.bytecode, __initData2.bytecode, __initData3.bytecode, __initData4.bytecode, __initData5.bytecode, __initData6.bytecode);
        } else {
          ({ code: code6, location: _location } = __initData);
          if (_location == null) {
            _location = "";
          }
          str = __initData.sourceMap;
          if (str == null) {
            str = "";
          }
          ({ code, location: _location2 } = __initData2);
          if (_location2 == null) {
            _location2 = "";
          }
          str2 = __initData2.sourceMap;
          if (str2 == null) {
            str2 = "";
          }
          ({ code: code2, location: _location3 } = __initData3);
          if (_location3 == null) {
            _location3 = "";
          }
          str3 = __initData3.sourceMap;
          if (str3 == null) {
            str3 = "";
          }
          ({ code: code3, location: _location4 } = __initData4);
          if (_location4 == null) {
            _location4 = "";
          }
          str4 = __initData4.sourceMap;
          if (str4 == null) {
            str4 = "";
          }
          ({ code: code4, location: _location5 } = __initData5);
          if (_location5 == null) {
            _location5 = "";
          }
          str5 = __initData5.sourceMap;
          if (str5 == null) {
            str5 = "";
          }
          ({ code: code5, location: _location6 } = __initData6);
          if (_location6 == null) {
            _location6 = "";
          }
          str6 = __initData6.sourceMap;
          if (str6 == null) {
            str6 = "";
          }
          flag = false;
          tmp18 = __workletsModuleProxy;
          tmp19 = code6;
          tmp20 = _location;
          tmp21 = str;
          tmp22 = code;
          tmp23 = _location2;
          tmp24 = str2;
          tmp25 = code2;
          tmp26 = _location3;
          tmp27 = str3;
          tmp28 = code3;
          tmp29 = _location4;
          tmp30 = str4;
          tmp31 = code4;
          tmp32 = _location5;
          tmp33 = str5;
          tmp34 = code5;
          tmp35 = _location6;
          tmp36 = str6;
          unpackersWithCode = __workletsModuleProxy.loadUnpackersWithCode(code6, _location, str, code, _location2, str2, code2, _location3, str3, code3, _location4, str4, code4, _location5, str5, code5, _location6, str6, false);
        }
      }
      WorkletsTurboModule2 = tmp12(tmp13[7]).WorkletsTurboModule;
      if (WorkletsTurboModule2 != null) {
        startResult = WorkletsTurboModule2.start();
      }
    }
    if (undefined === globalThis.__workletsModuleProxy) {
      _Error = Error;
      tmp41 = new.target;
      str7 = "[Worklets] Native part of Worklets doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-worklets/docs/guides/troubleshooting#native-part-of-worklets-doesnt-seem-to-be-initialized for more details.";
      tmp42 = new.target;
      error = new Error("[Worklets] Native part of Worklets doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-worklets/docs/guides/troubleshooting#native-part-of-worklets-doesnt-seem-to-be-initialized for more details.");
      tmp44 = error;
      throw error;
    } else {
      tmp45 = closure_3;
      _globalThis2 = globalThis;
      closure_3(self, tmp2)[tmp2] = globalThis.__workletsModuleProxy;
      tmp46 = closure_3(self, tmp6);
      obj3 = closure_3(self, tmp2)[tmp2];
      tmp46[tmp6] = obj3.createSerializableNull();
      tmp47 = closure_3(self, tmp4);
      obj4 = closure_3(self, tmp2)[tmp2];
      tmp47[tmp4] = obj4.createSerializableUndefined();
      tmp48 = closure_3(self, tmp8);
      obj5 = closure_3(self, tmp2)[tmp2];
      flag2 = true;
      tmp48[tmp8] = obj5.createSerializableBoolean(true);
      tmp49 = closure_3(self, tmp10);
      obj6 = closure_3(self, tmp2)[tmp2];
      flag3 = false;
      tmp49[tmp10] = obj6.createSerializableBoolean(false);
      return;
    }
  }
}
const entry = {
  key: "createSerializableImport",
  value: function createSerializableImport(source, imported) {
    return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableImport(source, imported);
  }
};
const items = [
  entry,
  {
    key: "createSerializableString",
    value: function createSerializableString(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableString(arg0);
    }
  },
  {
    key: "createSerializableNumber",
    value: function createSerializableNumber(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableNumber(arg0);
    }
  },
  {
    key: "createSerializableBoolean",
    value: function createSerializableBoolean(arg0) {
      const self = this;
      if (arg0) {
        let tmp3 = _classPrivateFieldBase(self, closure_7)[closure_7];
      } else {
        tmp3 = _classPrivateFieldBase(self, closure_8)[closure_8];
      }
      return tmp3;
    }
  },
  {
    key: "createSerializableBigInt",
    value: function createSerializableBigInt(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableBigInt(arg0);
    }
  },
  {
    key: "createSerializableUndefined",
    value: function createSerializableUndefined() {
      return _classPrivateFieldBase(this, closure_5)[closure_5];
    }
  },
  {
    key: "createSerializableNull",
    value: function createSerializableNull() {
      return _classPrivateFieldBase(this, closure_6)[closure_6];
    }
  },
  {
    key: "createSerializableTurboModuleLike",
    value: function createSerializableTurboModuleLike(arg0, prototypeOf1) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableTurboModuleLike(arg0, prototypeOf1);
    }
  },
  {
    key: "createSerializableObject",
    value: function createSerializableObject(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableObject(arg0, arg1, arg2);
    }
  },
  {
    key: "createSerializableHostObject",
    value: function createSerializableHostObject(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableHostObject(arg0);
    }
  },
  {
    key: "createSerializableArray",
    value: function createSerializableArray(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableArray(arg0, flag);
    }
  },
  {
    key: "createSerializableArrayBuffer",
    value: function createSerializableArrayBuffer(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableArrayBuffer(arg0);
    }
  },
  {
    key: "createSerializableMap",
    value: function createSerializableMap(arg0, arg1) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableMap(arg0, arg1);
    }
  },
  {
    key: "createSerializableSet",
    value: function createSerializableSet(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableSet(arg0);
    }
  },
  {
    key: "createSerializableError",
    value: function createSerializableError(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableError(arg0, arg1, arg2);
    }
  },
  {
    key: "createSerializableRegExp",
    value: function createSerializableRegExp(arg0, arg1) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableRegExp(arg0, arg1);
    }
  },
  {
    key: "createSerializableArrayBufferView",
    value: function createSerializableArrayBufferView(arg0, arg1, arg2, arg3) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableArrayBufferView(arg0, arg1, arg2, arg3);
    }
  },
  {
    key: "createSerializableNonWorkletFunction",
    value: function createSerializableNonWorkletFunction(__initData, arg1) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableNonWorkletFunction(__initData, arg1);
    }
  },
  {
    key: "createSerializableWorklet",
    value: function createSerializableWorklet(arg0, arg1) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSerializableWorklet(arg0, arg1);
    }
  },
  {
    key: "createCustomSerializable",
    value: function createCustomSerializable(serializable, arg1) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createCustomSerializable(serializable, arg1);
    }
  },
  {
    key: "registerCustomSerializable",
    value: function registerCustomSerializable(arg0, arg1, arg2, arg3) {
      const result = _classPrivateFieldBase(this, closure_4)[closure_4].registerCustomSerializable(arg0, arg1, arg2, arg3);
    }
  },
  {
    key: "createShareable",
    value: function createShareable(arg0, arg1, arg2, arg3, arg4) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createShareable(arg0, arg1, arg2, arg3, arg4);
    }
  },
  {
    key: "scheduleOnRN",
    value: function scheduleOnRN(arg0, arg1, arg2) {
      _classPrivateFieldBase(this, closure_4)[closure_4].scheduleOnRN(arg0, arg1, arg2);
    }
  },
  {
    key: "runOnRNSync",
    value: function runOnRNSync(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].runOnRNSync(arg0, arg1, arg2);
    }
  },
  {
    key: "scheduleOnUI",
    value: function scheduleOnUI(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].scheduleOnUI(arg0, arg1, arg2);
    }
  },
  {
    key: "runOnUISync",
    value: function runOnUISync(arg0, arg1) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].runOnUISync(arg0, arg1);
    }
  },
  {
    key: "createWorkletRuntime",
    value: function createWorkletRuntime(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createWorkletRuntime(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    }
  },
  {
    key: "scheduleOnRuntime",
    value: function scheduleOnRuntime(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].scheduleOnRuntime(arg0, arg1, arg2);
    }
  },
  {
    key: "scheduleOnRuntimeWithId",
    value: function scheduleOnRuntimeWithId(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].scheduleOnRuntimeWithId(arg0, arg1, arg2);
    }
  },
  {
    key: "runOnRuntimeSync",
    value: function runOnRuntimeSync(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].runOnRuntimeSync(arg0, arg1, arg2);
    }
  },
  {
    key: "runOnRuntimeSyncWithId",
    value: function runOnRuntimeSyncWithId(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].runOnRuntimeSyncWithId(arg0, arg1, arg2);
    }
  },
  {
    key: "handlePromise",
    value: function handlePromise(c2, arg1) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].handlePromise(c2, arg1);
    }
  },
  {
    key: "createSynchronizable",
    value: function createSynchronizable(arg0, arg1) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].createSynchronizable(arg0, arg1);
    }
  },
  {
    key: "synchronizableGetDirty",
    value: function synchronizableGetDirty(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].synchronizableGetDirty(arg0);
    }
  },
  {
    key: "synchronizableGetBlocking",
    value: function synchronizableGetBlocking(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].synchronizableGetBlocking(arg0);
    }
  },
  {
    key: "synchronizableSetBlocking",
    value: function synchronizableSetBlocking(arg0, fn) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].synchronizableSetBlocking(arg0, fn);
    }
  },
  {
    key: "synchronizableSetDirty",
    value: function synchronizableSetDirty(arg0, arg1) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].synchronizableSetDirty(arg0, arg1);
    }
  },
  {
    key: "synchronizableLock",
    value: function synchronizableLock(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].synchronizableLock(arg0);
    }
  },
  {
    key: "synchronizableUnlock",
    value: function synchronizableUnlock(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].synchronizableUnlock(arg0);
    }
  },
  {
    key: "reportFatalErrorOnJS",
    value: function reportFatalErrorOnJS(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].reportFatalErrorOnJS(arg0, arg1, arg2);
    }
  },
  {
    key: "getStaticFeatureFlag",
    value: function getStaticFeatureFlag(arg0) {
      return _classPrivateFieldBase(this, closure_4)[closure_4].getStaticFeatureFlag(arg0);
    }
  },
  {
    key: "setDynamicFeatureFlag",
    value: function setDynamicFeatureFlag(arg0, arg1) {
      const result = _classPrivateFieldBase(this, closure_4)[closure_4].setDynamicFeatureFlag(arg0, arg1);
    }
  },
  {
    key: "getCurrentThreadId",
    value: function getCurrentThreadId() {
      return _classPrivateFieldBase(this, closure_4)[closure_4].getCurrentThreadId();
    }
  },
  {
    key: "getUIRuntimeHolder",
    value: function getUIRuntimeHolder() {
      return _classPrivateFieldBase(this, closure_4)[closure_4].getUIRuntimeHolder();
    }
  },
  {
    key: "getUISchedulerHolder",
    value: function getUISchedulerHolder() {
      return _classPrivateFieldBase(this, closure_4)[closure_4].getUISchedulerHolder();
    }
  },
  {
    key: "toggleSlowAnimationsOnUIRuntime",
    value: function toggleSlowAnimationsOnUIRuntime() {
      const WorkletsTurboModule = NativeWorklets(1712).WorkletsTurboModule;
      let flag;
      if (WorkletsTurboModule != null) {
        flag = WorkletsTurboModule.toggleSlowAnimationsOnUIRuntime();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  }
];

export const WorkletsModule = new _createClass(NativeWorklets, items)();