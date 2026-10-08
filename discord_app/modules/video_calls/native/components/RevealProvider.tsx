// === Module 10671: RevealProvider ===

// Module 10671 (RevealProvider)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 10335 */;
import StatusBarDefault from "StatusBar" /* 10340 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10672 */;
import HomeIndicatorDefault from "HomeIndicator" /* 10673 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4759 */;
import GameConsoleStore from "GameConsoleStore" /* 5109 */;

const require = globalThis.__r;

require = fn;
const ChannelCallStore = fn(10333);
({ useChannelCallStore: metroRequire, focusTimeout: closure_7, resetFocusTimer: closure_8, useIsVoiceChatFocused: closure_9 } = ChannelCallStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const context = noop.createContext({ reveal: true });
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRevealProviderValue(arg0, id) {
  const cResult = c.c(9);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  const tmpResult = initialize;
  const tmp9 = useIsPrivateAudioOnlyCallDefault(id);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GameConsoleStore];
    class S {
      constructor() {
        return null != closure_1_5.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    let tmp12 = S;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  let tmp14 = arg0;
  const tmp10 = options();
  const stateFromStores1 = initialize.useStateFromStores(tmp11, tmp12);
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
    const tmp19 = PlatformUtils.isIOS() && tmp16;
    class S {
      constructor() {
        return null != closure_1_5.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[5] = tmp19;
    let tmp18 = tmp19;
    const tmpResult4 = PlatformUtils;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] === tmp18) {
    if (cResult[7] === tmp14) {
      let tmp20 = cResult[8];
    }
    return tmp20;
  }
  const obj2 = { reveal: tmp14, prefersDeferringSystemGestures: tmp18 };
  cResult[6] = tmp18;
  cResult[7] = tmp14;
  cResult[8] = obj2;
  tmp20 = obj2;
  const tmpResult3 = initialize;
}) : (function useRevealProviderValue(arg0, id) {
  let tmp = arg0;
  const items = [ActionSheetStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => null != key.getKey());
  const obj = stateFromStores1(504);
  const tmp2 = stateFromStores1;
  const tmp5 = useIsPrivateAudioOnlyCallDefault(id);
  const tmp6 = closure_9();
  const items1 = [GameConsoleStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const obj2 = stateFromStores1(504);
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
  const tmp8 = useIsActivityFocusedDefault(id.id);
  const tmp10 = tmp2(1381).isIOS() && tmp8;
  importDefault = tmp10;
  const items2 = [tmp, tmp10];
  return noop.useMemo(() => ({ reveal: stateFromStores1, prefersDeferringSystemGestures }), items2);
});
let closure_13 = tmp5;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/RevealProvider.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RevealProvider(channel) {
  const cResult = require("c").c(15);
  ({ children, showStatus, useThemedBarStyle } = channel);
  let tmp3 = undefined !== showStatus;
  if (tmp3) {
    tmp3 = showStatus;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(focus) {
      return focus.focus;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = closure_6(first);
  _require = tmp6;
  const tmp7 = closure_13(tmp6, channel.channel);
  ({ reveal, prefersDeferringSystemGestures } = tmp7);
  if (cResult[1] !== tmp6) {
    class D {
      constructor() {
        if (closure_0) {
          tmp3 = resetFocusTimer;
          tmp4 = resetFocusTimer();
        } else {
          tmp = focusTimeout;
          stopResult = focusTimeout.stop();
        }
        return;
      }
    }
    const items = [tmp6];
    cResult[1] = tmp6;
    cResult[2] = D;
    cResult[3] = items;
    let tmp9 = items;
  } else {
    class D {
      constructor() {
        if (closure_0) {
          tmp3 = resetFocusTimer;
          tmp4 = resetFocusTimer();
        } else {
          tmp = focusTimeout;
          stopResult = focusTimeout.stop();
        }
        return;
      }
    }
    tmp9 = cResult[3];
  }
  const effect = noop.useEffect(D, tmp9);
  if (!tmp4) {
    class D {
      constructor() {
        if (closure_0) {
          tmp3 = resetFocusTimer;
          tmp4 = resetFocusTimer();
        } else {
          tmp = focusTimeout;
          stopResult = focusTimeout.stop();
        }
        return;
      }
    }
  } else {
    class D {
      constructor() {
        if (closure_0) {
          tmp3 = resetFocusTimer;
          tmp4 = resetFocusTimer();
        } else {
          tmp = focusTimeout;
          stopResult = focusTimeout.stop();
        }
        return;
      }
    }
  }
  if (!reveal) {
    class D {
      constructor() {
        if (closure_0) {
          tmp3 = resetFocusTimer;
          tmp4 = resetFocusTimer();
        } else {
          tmp = focusTimeout;
          stopResult = focusTimeout.stop();
        }
        return;
      }
    }
  }
  if (!reveal) {
    class D {
      constructor() {
        if (closure_0) {
          tmp3 = resetFocusTimer;
          tmp4 = resetFocusTimer();
        } else {
          tmp = focusTimeout;
          stopResult = focusTimeout.stop();
        }
        return;
      }
    }
  }
  if (cResult[4] === str) {
    class D {
      constructor() {
        if (closure_0) {
          tmp3 = resetFocusTimer;
          tmp4 = resetFocusTimer();
        } else {
          tmp = focusTimeout;
          stopResult = focusTimeout.stop();
        }
        return;
      }
    }
    if (cResult[7] === prefersDeferringSystemGestures) {
      class D {
        constructor() {
          if (closure_0) {
            tmp3 = resetFocusTimer;
            tmp4 = resetFocusTimer();
          } else {
            tmp = focusTimeout;
            stopResult = focusTimeout.stop();
          }
          return;
        }
      }
      if (cResult[10] === children) {
        class D {
          constructor() {
            if (closure_0) {
              tmp3 = resetFocusTimer;
              tmp4 = resetFocusTimer();
            } else {
              tmp = focusTimeout;
              stopResult = focusTimeout.stop();
            }
            return;
          }
        }
      }
      const obj3 = { value: tmp7, children: null };
      const items1 = [tmp15, children, tmp17];
      obj3.children = items1;
      const tmp23 = closure_11(context.Provider, obj3);
      cResult[10] = children;
      cResult[11] = tmp15;
      cResult[12] = tmp17;
      cResult[13] = tmp7;
      cResult[14] = tmp23;
    }
    const obj4 = { prefersHidden: tmp13, prefersDeferringSystemGestures };
    const tmp19 = closure_10(HomeIndicatorDefault, obj4);
    cResult[7] = prefersDeferringSystemGestures;
    cResult[8] = tmp13;
    cResult[9] = tmp19;
  }
  const tmp16 = closure_10(StatusBarDefault, { hidden: !reveal, animated: true, barStyle: str });
  cResult[4] = str;
  cResult[5] = !reveal;
  cResult[6] = tmp16;
  const obj = require("c");
  tmp4 = undefined !== useThemedBarStyle && useThemedBarStyle;
}) : (function RevealProvider(showStatus) {
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
  const effect = noop.useEffect(() => {
    if (closure_0) {
      closure_2_8();
    } else {
      React5.stop();
    }
  }, items);
  if (!flag2) {
    let str = "light-content";
  } else {
    require("shared");
    str = "dark-content";
  }
  const obj2 = { value: tmp2, children: null };
  let tmp11 = !reveal;
  if (!reveal) {
    tmp11 = !flag;
  }
  const items1 = [closure_10(StatusBarDefault, { hidden: tmp11, animated: true, barStyle: str }), children, ];
  let tmp13 = !reveal;
  const tmp4Result = StatusBarDefault;
  if (!reveal) {
    tmp13 = !prefersDeferringSystemGestures;
  }
  items1[2] = closure_10(HomeIndicatorDefault, { prefersHidden: tmp13, prefersDeferringSystemGestures });
  obj2.children = items1;
  return closure_11(context.Provider, obj2);
});
export const RevealContext = context;
export const useRevealProviderValue = tmp5;