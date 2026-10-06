// === Module 11316: useContentHarmTypes ===

// Module 11316 (useContentHarmTypes)
import react2 from "react" /* 576 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 6805 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let currentUser;
  let first;
  let stateFromStores2;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(6805);
    const eligibleHarmTypesConfigsForContext = tmpResult.getEligibleHarmTypesConfigsForContext();
    cResult[0] = eligibleHarmTypesConfigsForContext;
    first = eligibleHarmTypesConfigsForContext;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    class S {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[1] = items;
    cResult[2] = S;
    tmp6 = S;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores = tmpResult5.useStateFromStores(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores2, ];
    class S {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    items1[1] = RelationshipStore;
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === arg1) {
    let tmp11;
    let tmp15;
    let tmp14;
    let tmp13;
    let arr6;
    let NONE;
    if (cResult[5] === arg0) {
      tmp11 = cResult[6];
    }
    const tmpResult6 = tmp(504);
    const stateFromStores1 = tmpResult6.useStateFromStores(tmp9, tmp11);
    class S {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserSettingsProtoStore];
      class S {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      const items3 = [first];
      cResult[7] = items2;
      cResult[8] = tmp17;
      cResult[9] = items3;
      tmp15 = items3;
      tmp14 = tmp17;
      tmp13 = items2;
    } else {
      tmp13 = cResult[7];
      tmp14 = cResult[8];
      tmp15 = cResult[9];
    }
    const tmpResult7 = tmp(504);
    stateFromStores2 = tmpResult7.useStateFromStores(tmp13, tmp14, tmp15, tmp(6813).areSettingsEqual);
    if (null != stateFromStores1) {
      let tmp25;
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (arg1 !== id) {
        if (null != stateFromStores) {
          if (cResult[12] === stateFromStores1) {
            let tmp26;
            if (cResult[13] === stateFromStores2) {
              tmp26 = cResult[14];
            }
            arr6 = tmp26;
          }
          const _Symbol3 = Symbol;
          class S {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          const mapped = first.map((harmType) => {
            let tmp3 = null;
            if (null != UserSettingsProtoStore) {
              tmp3 = harmType.getUserSettingsWithDefaults(tmp)[tmp2];
            }
            harmType = null;
            const obj = ObscuredMediaUtils;
            if (obj.shouldRedactForSettingValue(tmp3)) {
              harmType = harmType.harmType;
            }
            return harmType;
          });
          const found = mapped.filter(tmp28);
          cResult[12] = stateFromStores1;
          cResult[13] = stateFromStores2;
          cResult[14] = found;
          tmp26 = found;
        }
      }
      class S {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [];
        cResult[11] = items4;
        class S {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
      } else {
        tmp25 = cResult[11];
      }
      arr6 = tmp25;
    } else {
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items5 = [];
        cResult[10] = items5;
        class S {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
      } else {
        arr6 = cResult[10];
      }
    }
    if (0 === arr6.length) {
      NONE = tmp(6808).ContentHarmTypeBitMask.NONE;
    } else if (cResult[16] !== arr6) {
      const tmpResult8 = tmp(6805);
      const result = tmpResult8.contentHarmTypesToFlags(arr6);
      class S {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[17] = result;
      NONE = result;
    } else {
      NONE = cResult[17];
    }
    return NONE;
  }
  const fn = function _() {
    const items = [ChannelStore, RelationshipStore];
    const obj = ObscuredMediaUtils;
    return obj.getChannelTypeById(closure_0, closure_1, items);
  };
  cResult[4] = arg1;
  cResult[5] = arg0;
  cResult[6] = fn;
  tmp11 = fn;
}) : ((arg0, arg1) => {
  let NONE;
  let closure_0;
  let closure_1;
  let currentUser;
  let stateFromStores1;
  let stateFromStores2;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("ObscuredMediaUtils");
  const eligibleHarmTypesConfigsForContext = obj.getEligibleHarmTypesConfigsForContext();
  let items = [UserStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores1, stateFromStores2];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const items = [ChannelStore, RelationshipStore];
    const obj = ObscuredMediaUtils;
    return obj.getChannelTypeById(closure_0, closure_1, items);
  });
  const items2 = [stateFromStores];
  const items3 = [eligibleHarmTypesConfigsForContext];
  const obj4 = require("get initialized");
  stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let settings;
    return eligibleHarmTypesConfigsForContext.reduce((acc, harmType) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
      return obj;
    }, {});
  }, items3, require("SensitiveMediaRedactionSettingUtils").areSettingsEqual);
  const items4 = [stateFromStores1, eligibleHarmTypesConfigsForContext, stateFromStores2, arg1, stateFromStores];
  const memo = eligibleHarmTypesConfigsForContext.useMemo(() => {
    if (null != stateFromStores1) {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (closure_1 !== id) {
        if (null != stateFromStores) {
          const mapped = eligibleHarmTypesConfigsForContext.map((harmType) => {
            let tmp3 = null;
            if (null != stateFromStores1) {
              tmp3 = harmType.getUserSettingsWithDefaults(tmp)[tmp2];
            }
            harmType = null;
            const obj = closure_0(closure_1[7]);
            if (obj.shouldRedactForSettingValue(tmp3)) {
              harmType = harmType.harmType;
            }
            return harmType;
          });
          const found = mapped.filter((item) => null != item);
        }
        return [];
      }
    }
  }, items4);
  if (0 === memo.length) {
    NONE = tmp(6808).ContentHarmTypeBitMask.NONE;
  } else {
    const tmpResult = tmp(6805);
    NONE = tmpResult.contentHarmTypesToFlags(memo);
  }
  return NONE;
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== message) {
    let obj2;
    if (null == message) {
      obj2 = {};
    } else {
      const tmpResult = ObscuredMediaUtils;
      obj2 = tmpResult.getChannelIdAndAuthorIdFromMessage(message);
    }
    cResult[0] = message;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  return closure_7(tmp4.channelId, tmp4.authorId);
}) : ((message) => {
  let obj2;
  if (null == message) {
    obj2 = {};
  } else {
    const obj = ObscuredMediaUtils;
    obj2 = obj.getChannelIdAndAuthorIdFromMessage(message);
  }
  return closure_7(obj2.channelId, obj2.authorId);
});
let result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

export const useEnabledHarmTypesBitmaskForChannelAndAuthorId = tmp2;
export const useEnabledHarmTypesBitmaskForMessage = tmp3;