// === Module 9094: RevealProvider ===

// Module 9094 (RevealProvider)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 9088 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9095 */;
import StatusBarDefault from "StatusBar" /* 9096 */;
import HomeIndicatorDefault from "HomeIndicator" /* 9098 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4567 */;
import GameConsoleStore from "GameConsoleStore" /* 4913 */;
import ChannelCallStore from "ChannelCallStore" /* 9086 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ useChannelCallStore: metroRequire, focusTimeout: metroImportDefault, resetFocusTimer: metroImportAll, useIsVoiceChatFocused: c9 } = ChannelCallStore);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const context = react.createContext({ reveal: true });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, id) => {
  let awaitingRemoteSessionInfo;
  let key;
  let tmp11;
  let tmp12;
  let tmp18;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActionSheetStore];
    const fn = function u() {
      return null != key.getKey();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp9 = useIsPrivateAudioOnlyCallDefault(id);
  const tmp10 = React4();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GameConsoleStore];
    class S {
      constructor() {
        return null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp12 = S;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  let tmp14 = arg0;
  const tmpResult3 = get_initialized;
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, tmp12);
  const tmp16 = useIsActivityFocusedDefault(id.id);
  if (!arg0) {
    tmp14 = stateFromStores;
  }
  if (!tmp14) {
    tmp14 = tmp9;
  }
  if (!tmp14) {
    tmp14 = null === id;
  }
  if (!tmp14) {
    tmp14 = tmp10;
  }
  if (!tmp14) {
    tmp14 = stateFromStores1;
  }
  if (cResult[4] !== tmp16) {
    const tmpResult4 = PlatformUtils;
    const tmp19 = tmpResult4.isIOS() && tmp16;
    class S {
      constructor() {
        return null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[5] = tmp19;
    tmp18 = tmp19;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] === tmp18) {
    let tmp20;
    if (cResult[7] === tmp14) {
      tmp20 = cResult[8];
    }
    return tmp20;
  }
  const obj2 = { reveal: tmp14, prefersDeferringSystemGestures: tmp18 };
  cResult[6] = tmp18;
  cResult[7] = tmp14;
  cResult[8] = obj2;
  tmp20 = obj2;
}) : ((arg0, id) => {
  let awaitingRemoteSessionInfo;
  let key;
  let prefersDeferringSystemGestures;
  let stateFromStores1;
  let tmp = arg0;
  const items = [ActionSheetStore];
  const obj = stateFromStores1(504);
  const stateFromStores = obj.useStateFromStores(items, () => null != key.getKey());
  const tmp5 = useIsPrivateAudioOnlyCallDefault(id);
  const items1 = [GameConsoleStore];
  const tmp6 = closure_9();
  const obj2 = stateFromStores1(504);
  const tmp2 = stateFromStores1;
  stateFromStores1 = obj2.useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const tmp8 = useIsActivityFocusedDefault(id.id);
  if (!arg0) {
    tmp = stateFromStores;
  }
  if (!tmp) {
    tmp = tmp5;
  }
  if (!tmp) {
    tmp = null === id;
  }
  if (!tmp) {
    tmp = tmp6;
  }
  if (!tmp) {
    tmp = stateFromStores1;
  }
  stateFromStores1 = tmp;
  const tmp2Result = tmp2(1369);
  const tmp10 = tmp2Result.isIOS() && tmp8;
  importDefault = tmp10;
  const items2 = [tmp, tmp10];
  return react.useMemo(() => ({ reveal: stateFromStores1, prefersDeferringSystemGestures }), items2);
});
let closure_13 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let children;
  let closure_0;
  let first;
  let items1;
  let prefersDeferringSystemGestures;
  let reveal;
  let showStatus;
  let tmp9;
  let useThemedBarStyle;
  const obj = require("react");
  const cResult = obj.c(15);
  ({ children, showStatus, useThemedBarStyle } = channel);
  let tmp3 = undefined !== showStatus;
  channel = channel.channel;
  if (tmp3) {
    tmp3 = showStatus;
  }
  const tmp4 = undefined !== useThemedBarStyle && useThemedBarStyle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(focus) {
      return focus.focus;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = closure_6(first);
  _require = tmp6;
  const tmp7 = closure_13(tmp6, channel);
  ({ reveal, prefersDeferringSystemGestures } = tmp7);
  if (cResult[1] !== tmp6) {
    class F {
      constructor() {
        if (closure_0) {
          metroImportAll();
        } else {
          metroImportDefault.stop();
        }
      }
    }
    const items = [tmp6];
    cResult[1] = tmp6;
    cResult[2] = F;
    cResult[3] = items;
    tmp9 = items;
  } else {
    class F {
      constructor() {
        if (closure_0) {
          metroImportAll();
        } else {
          metroImportDefault.stop();
        }
      }
    }
    tmp9 = cResult[3];
  }
  const effect = react.useEffect(F, tmp9);
  if (!tmp4) {
    class F {
      constructor() {
        if (closure_0) {
          metroImportAll();
        } else {
          metroImportDefault.stop();
        }
      }
    }
  } else {
    class F {
      constructor() {
        if (closure_0) {
          metroImportAll();
        } else {
          metroImportDefault.stop();
        }
      }
    }
  }
  if (cResult[4] === str) {
    class F {
      constructor() {
        if (closure_0) {
          metroImportAll();
        } else {
          metroImportDefault.stop();
        }
      }
    }
    if (cResult[7] === prefersDeferringSystemGestures) {
      class F {
        constructor() {
          if (closure_0) {
            metroImportAll();
          } else {
            metroImportDefault.stop();
          }
        }
      }
      if (cResult[10] === children) {
        class F {
          constructor() {
            if (closure_0) {
              metroImportAll();
            } else {
              metroImportDefault.stop();
            }
          }
        }
      }
      const obj3 = { value: tmp7, children: items1 };
      items1 = [tmp15, children, tmp17];
      cResult[10] = children;
      cResult[11] = tmp15;
      cResult[12] = tmp17;
      cResult[13] = tmp7;
      cResult[14] = closure_11(context.Provider, obj3);
      const tmp23 = closure_11(context.Provider, obj3);
    }
    const obj4 = { prefersHidden: !reveal && !prefersDeferringSystemGestures, prefersDeferringSystemGestures };
    cResult[7] = prefersDeferringSystemGestures;
    cResult[8] = !reveal && !prefersDeferringSystemGestures;
    cResult[9] = closure_10(HomeIndicatorDefault, obj4);
    const tmp19 = closure_10(HomeIndicatorDefault, obj4);
  }
  cResult[4] = str;
  cResult[5] = !reveal && !tmp3;
  cResult[6] = closure_10(StatusBarDefault, { hidden: !reveal && !tmp3, animated: true, barStyle: str });
  const tmp16 = closure_10(StatusBarDefault, { hidden: !reveal && !tmp3, animated: true, barStyle: str });
}) : ((showStatus) => {
  let channel;
  let children;
  let closure_0;
  let items1;
  let prefersDeferringSystemGestures;
  let reveal;
  let str;
  let flag = showStatus.showStatus;
  ({ channel, children } = showStatus);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showStatus.useThemedBarStyle;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_6((focus) => focus.focus);
  _require = tmp;
  const tmp2 = closure_13(tmp, channel);
  ({ reveal, prefersDeferringSystemGestures } = tmp2);
  const items = [tmp];
  const effect = react.useEffect(() => {
    if (closure_0) {
      metroImportAll();
    } else {
      metroImportDefault.stop();
    }
  }, items);
  if (!flag2) {
    str = "light-content";
  } else {
    require("shared");
    str = "dark-content";
  }
  const Provider = context.Provider;
  let tmp11 = !reveal;
  const obj2 = { value: tmp2, children: items1 };
  const tmp4Result = StatusBarDefault;
  if (!reveal) {
    tmp11 = !flag;
  }
  items1 = [closure_10(tmp4Result, { hidden: tmp11, animated: true, barStyle: str }), children, ];
  let tmp13 = !reveal;
  const tmp4Result2 = HomeIndicatorDefault;
  if (!reveal) {
    tmp13 = !prefersDeferringSystemGestures;
  }
  items1[2] = closure_10(tmp4Result2, { prefersHidden: tmp13, prefersDeferringSystemGestures });
  return closure_11(Provider, obj2);
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/RevealProvider.tsx");

export default tmp6;
export const RevealContext = context;
export const useRevealProviderValue = tmp5;