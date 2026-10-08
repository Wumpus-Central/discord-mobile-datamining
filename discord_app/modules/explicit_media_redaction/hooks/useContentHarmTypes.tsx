// === Module 11491: useContentHarmTypes ===

// Module 11491 (useContentHarmTypes)
import c from "c" /* 576 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 6976 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEnabledHarmTypesBitmaskForChannelAndAuthorId(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const eligibleHarmTypesConfigsForContext = tmp(6976).getEligibleHarmTypesConfigsForContext();
    cResult[0] = eligibleHarmTypesConfigsForContext;
    let first = eligibleHarmTypesConfigsForContext;
    const tmpResult = tmp(6976);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    const fn = function p() {
      return currentUser.getCurrentUser();
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp6 = fn;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores2, RelationshipStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === arg1) {
    if (cResult[5] === arg0) {
      let tmp12 = cResult[6];
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp9, tmp12);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [stateFromStores1];
      const fn2 = function b() {
        return first.reduce((acc, harmType) => {
          const obj = {};
          const merged = Object.assign(acc);
          obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
          return obj;
        }, {});
      };
      const items3 = [first];
      cResult[7] = items2;
      cResult[8] = fn2;
      cResult[9] = items3;
      let tmp16 = items3;
      let tmp15 = fn2;
      let tmp14 = items2;
    } else {
      tmp14 = cResult[7];
      tmp15 = cResult[8];
      tmp16 = cResult[9];
    }
    const tmpResult6 = tmp(504);
    stateFromStores2 = tmpResult6.useStateFromStores(tmp14, tmp15, tmp16, tmp(6985).areSettingsEqual);
    if (null != stateFromStores1) {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (arg1 !== id) {
        if (null != stateFromStores) {
          const _Symbol3 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class B {
              constructor(arg0) {
                return null != arg0;
              }
            }
            cResult[15] = B;
          } else {
            class B {
              constructor(arg0) {
                return null != arg0;
              }
            }
          }
          const mapped = first.map((harmType) => {
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
          const found = mapped.filter(B);
          cResult[12] = stateFromStores1;
          cResult[13] = stateFromStores2;
          cResult[14] = found;
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            return null != arg0;
          }
        }
        cResult[11] = tmp27;
      } else {
        class B {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      let arr6 = tmp27;
    } else {
      class B {
        constructor(arg0) {
          return null != arg0;
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            return null != arg0;
          }
        }
        cResult[10] = tmp24;
        arr6 = tmp24;
      } else {
        class B {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
    }
    if (0 === arr6.length) {
      class B {
        constructor(arg0) {
          return null != arg0;
        }
      }
    } else {
      class B {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
    return tmp32;
  }
  class T {
    constructor() {
      obj = closure_0(closure_1[7]);
      items = [, ];
      items[0] = closure_4;
      items[1] = closure_5;
      return obj.getChannelTypeById(closure_0, closure_1, items);
    }
  }
  cResult[4] = arg1;
  cResult[5] = arg0;
  cResult[6] = T;
  tmp12 = T;
  const tmpResult4 = require("initialize");
}) : (function useEnabledHarmTypesBitmaskForChannelAndAuthorId(arg0, arg1) {
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
    let NONE = tmp(6980).ContentHarmTypeBitMask.NONE;
  } else {
    NONE = tmp(6976).contentHarmTypesToFlags(memo);
    const tmpResult = tmp(6976);
  }
  return NONE;
});
let closure_7 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

export const useEnabledHarmTypesBitmaskForChannelAndAuthorId = tmp2;
export const useEnabledHarmTypesBitmaskForMessage = ReactCompilerGating.isReactCompilerEnabled() ? (function useEnabledHarmTypesBitmaskForMessage(message) {
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
}) : (function useEnabledHarmTypesBitmaskForMessage(message) {
  if (null == message) {
    let obj2 = {};
  } else {
    obj2 = ObscuredMediaUtils.getChannelIdAndAuthorIdFromMessage(message);
  }
  return closure_7(obj2.channelId, obj2.authorId);
});