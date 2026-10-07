// === Module 17377: useControlAccessoryHeight ===

// Module 17377 (useControlAccessoryHeight)
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus" /* 17350 */;
import noop from "module_19" /* 19 */;

require = fn;
let __initData = { code: "function useControlAccessoryHeightTsx1(){const{consoleStatusHeight,floatingCTAHeight}=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();}" };
const __initData2 = { code: "function useControlAccessoryHeightTsx2(){const{consoleStatusHeight,floatingCTAHeight}=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[2]).c(9);
  const channelId = sharedValue1.useContext(sharedValue(shouldShowFloatingCTA[3])).channelId;
  isConnectingOrConnectedToConsole = sharedValue(shouldShowFloatingCTA[4])(channelId).isConnectingOrConnectedToConsole;
  const obj = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[2]);
  sharedValue = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]).useSharedValue(0);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === isConnectingOrConnectedToConsole) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = obj2.useEffect(tmp5, tmp6);
    shouldShowFloatingCTA = tmp(tmp2[7]).useShouldShowFloatingCTA(channelId);
    const tmpResult = tmp(tmp2[7]);
    sharedValue1 = tmp(tmp2[5]).useSharedValue(0);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const floatingCTATotalViewHeight = tmp(tmp2[8]).getFloatingCTATotalViewHeight();
      cResult[4] = floatingCTATotalViewHeight;
      let tmp11 = floatingCTATotalViewHeight;
      const tmpResult5 = tmp(tmp2[8]);
    } else {
      tmp11 = cResult[4];
    }
    __initData = tmp11;
    if (cResult[5] === sharedValue1) {
      if (cResult[6] === shouldShowFloatingCTA) {
        let tmp13 = cResult[7];
        let tmp14 = cResult[8];
      }
      const effect1 = obj2.useEffect(tmp13, tmp14);
      class S {
        constructor() {
          value = closure_1.get();
          return value + closure_3.get();
        }
      }
      const obj4 = { consoleStatusHeight: sharedValue, floatingCTAHeight: sharedValue1 };
      S.__closure = obj4;
      S.__workletHash = 7974849446653;
      S.__initData = __initData;
      return tmp(tmp2[5]).useDerivedValue(S);
    }
    class H {
      constructor() {
        num = 0;
        tmp = closure_3;
        if (closure_2) {
          num = closure_4;
        }
        result = closure_3.set(num);
        return;
      }
    }
    const items = [sharedValue1, shouldShowFloatingCTA, tmp11];
    cResult[5] = sharedValue1;
    cResult[6] = shouldShowFloatingCTA;
    cResult[7] = H;
    cResult[8] = items;
    tmp14 = items;
    tmp13 = H;
    const tmpResult4 = tmp(tmp2[5]);
  }
  const fn = function s() {
    let num = 0;
    if (isConnectingOrConnectedToConsole) {
      num = VoicePanelConsoleStatus.CONSOLE_STATUS_HEIGHT;
    }
    const result = sharedValue.set(num);
  };
  const items1 = [sharedValue, isConnectingOrConnectedToConsole];
  cResult[0] = sharedValue;
  cResult[1] = isConnectingOrConnectedToConsole;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp6 = items1;
  tmp5 = fn;
}) : (() => {
  const channelId = sharedValue1.useContext(sharedValue(shouldShowFloatingCTA[3])).channelId;
  const isConnectingOrConnectedToConsole = sharedValue(shouldShowFloatingCTA[4])(channelId).isConnectingOrConnectedToConsole;
  sharedValue = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]).useSharedValue(0);
  const items = [sharedValue, isConnectingOrConnectedToConsole];
  const effect = sharedValue1.useEffect(() => {
    let num = 0;
    if (isConnectingOrConnectedToConsole) {
      num = VoicePanelConsoleStatus.CONSOLE_STATUS_HEIGHT;
    }
    const result = sharedValue.set(num);
  }, items);
  const obj = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]);
  shouldShowFloatingCTA = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[7]).useShouldShowFloatingCTA(channelId);
  const obj2 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[7]);
  sharedValue1 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]).useSharedValue(0);
  const obj3 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]);
  const floatingCTATotalViewHeight = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[8]).getFloatingCTATotalViewHeight();
  const items1 = [sharedValue1, shouldShowFloatingCTA, floatingCTATotalViewHeight];
  const effect1 = sharedValue1.useEffect(() => {
    let num = 0;
    if (shouldShowFloatingCTA) {
      num = floatingCTATotalViewHeight;
    }
    const result = sharedValue1.set(num);
  }, items1);
  const obj4 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[8]);
  const fn = function u() {
    value = sharedValue.get();
    return value + sharedValue1.get();
  };
  fn.__closure = { consoleStatusHeight: sharedValue, floatingCTAHeight: sharedValue1 };
  fn.__workletHash = 584414576606;
  fn.__initData = __initData2;
  return isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]).useDerivedValue(fn);
});