// === Module 11316: useContentHarmTypes ===

// Module 11316 (useContentHarmTypes)
import c from "c" /* 576 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 6805 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const eligibleHarmTypesConfigsForContext = tmp(6805).getEligibleHarmTypesConfigsForContext();
    cResult[0] = eligibleHarmTypesConfigsForContext;
    let first = eligibleHarmTypesConfigsForContext;
    const tmpResult = tmp(6805);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    class S {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[1] = items;
    cResult[2] = S;
    let tmp6 = S;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores2, ];
    class S {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    items1[1] = RelationshipStore;
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === arg1) {
    if (cResult[5] === arg0) {
      let tmp11 = cResult[6];
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp9, tmp11);
    class S {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserSettingsProtoStore];
      class S {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      const items3 = [first];
      cResult[7] = items2;
      cResult[8] = tmp17;
      cResult[9] = items3;
      let tmp15 = items3;
      let tmp14 = tmp17;
      let tmp13 = items2;
    } else {
      tmp13 = cResult[7];
      tmp14 = cResult[8];
      tmp15 = cResult[9];
    }
    const tmpResult7 = tmp(504);
    stateFromStores2 = tmpResult7.useStateFromStores(tmp13, tmp14, tmp15, tmp(6813).areSettingsEqual);
    if (null != stateFromStores1) {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (arg1 !== id) {
        if (null != stateFromStores) {
          const _Symbol3 = Symbol;
          class S {
            constructor() {
              return closure_1_6.getCurrentUser();
            }
          }
          const mapped = first.map((harmType) => {
            let tmp3 = null;
            if (null != UserSettingsProtoStore) {
              tmp3 = harmType.getUserSettingsWithDefaults(tmp)[tmp2];
            }
            harmType = null;
            if (obj.shouldRedactForSettingValue(tmp3)) {
              harmType = harmType.harmType;
            }
            return harmType;
          });
          const found = mapped.filter(tmp27);
          cResult[12] = stateFromStores1;
          cResult[13] = stateFromStores2;
          cResult[14] = found;
        }
      }
      class S {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [];
        cResult[11] = items4;
        class S {
          constructor() {
            return closure_1_6.getCurrentUser();
          }
        }
      } else {
        const tmp25 = cResult[11];
      }
      let arr6 = tmp25;
    } else {
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items5 = [];
        cResult[10] = items5;
        class S {
          constructor() {
            return closure_1_6.getCurrentUser();
          }
        }
      } else {
        arr6 = cResult[10];
      }
    }
    if (0 === arr6.length) {
      let NONE = tmp(6808).ContentHarmTypeBitMask.NONE;
    } else if (cResult[16] !== arr6) {
      const result = tmp(6805).contentHarmTypesToFlags(arr6);
      class S {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      cResult[17] = result;
      NONE = result;
      const tmpResult8 = tmp(6805);
    } else {
      NONE = cResult[17];
    }
    return NONE;
  }
  const fn = function _() {
    const items = [ChannelStore, RelationshipStore];
    return ObscuredMediaUtils.getChannelTypeById(closure_0, closure_1, items);
  };
  cResult[4] = arg1;
  cResult[5] = arg0;
  cResult[6] = fn;
  tmp11 = fn;
  const tmpResult5 = require("initialize");
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const eligibleHarmTypesConfigsForContext = require("ObscuredMediaUtils").getEligibleHarmTypesConfigsForContext();
  let obj = require("ObscuredMediaUtils");
  let items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("initialize");
  const items1 = [stateFromStores1, stateFromStores2];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const items = [ChannelStore, RelationshipStore];
    return ObscuredMediaUtils.getChannelTypeById(closure_0, closure_1, items);
  });
  const obj3 = require("initialize");
  const items2 = [stateFromStores];
  const items3 = [eligibleHarmTypesConfigsForContext];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => eligibleHarmTypesConfigsForContext.reduce((acc, harmType) => {
    const obj = {};
    const merged = Object.assign(acc);
    obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
    return obj;
  }, {}), items3, require("SensitiveMediaRedactionSettingUtils").areSettingsEqual);
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
    let NONE = tmp(6808).ContentHarmTypeBitMask.NONE;
  } else {
    NONE = tmp(6805).contentHarmTypesToFlags(memo);
    const tmpResult = tmp(6805);
  }
  return NONE;
});
let closure_7 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

export const useEnabledHarmTypesBitmaskForChannelAndAuthorId = tmp2;
export const useEnabledHarmTypesBitmaskForMessage = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = c.c(2);
  if (cResult[0] !== message) {
    if (null == message) {
      let obj2 = {};
    } else {
      obj2 = ObscuredMediaUtils.getChannelIdAndAuthorIdFromMessage(message);
      const tmpResult = ObscuredMediaUtils;
    }
    cResult[0] = message;
    cResult[1] = obj2;
  } else {
    return closure_7(cResult[1].channelId, cResult[1].authorId);
  }
}) : ((message) => {
  if (null == message) {
    let obj2 = {};
  } else {
    obj2 = ObscuredMediaUtils.getChannelIdAndAuthorIdFromMessage(message);
  }
  return closure_7(obj2.channelId, obj2.authorId);
});