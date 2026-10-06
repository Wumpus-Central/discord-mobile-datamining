// === Module 17377: useControlAccessoryHeight ===

// Module 17377 (useControlAccessoryHeight)
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus" /* 17350 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let __initData = { code: "function useControlAccessoryHeightTsx1(){const{consoleStatusHeight,floatingCTAHeight}=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();}" };
const __initData2 = { code: "function useControlAccessoryHeightTsx2(){const{consoleStatusHeight,floatingCTAHeight}=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_4;
  let isConnectingOrConnectedToConsole;
  let sharedValue;
  let sharedValue1;
  let shouldShowFloatingCTA;
  const obj = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[2]);
  const cResult = obj.c(9);
  const channelId = sharedValue1.useContext(sharedValue(shouldShowFloatingCTA[3])).channelId;
  isConnectingOrConnectedToConsole = sharedValue(shouldShowFloatingCTA[4])(channelId).isConnectingOrConnectedToConsole;
  const obj3 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]);
  sharedValue = obj3.useSharedValue(0);
  if (cResult[0] === sharedValue) {
    let tmp5;
    let tmp6;
    let tmp11;
    if (cResult[1] === isConnectingOrConnectedToConsole) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    const effect = obj2.useEffect(tmp5, tmp6);
    const tmpResult = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[7]);
    shouldShowFloatingCTA = tmpResult.useShouldShowFloatingCTA(channelId);
    const tmpResult4 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]);
    sharedValue1 = tmpResult4.useSharedValue(0);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult5 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[8]);
      const floatingCTATotalViewHeight = tmpResult5.getFloatingCTATotalViewHeight();
      let num = 4;
      cResult[4] = floatingCTATotalViewHeight;
      tmp11 = floatingCTATotalViewHeight;
    } else {
      tmp11 = cResult[4];
    }
    __initData = tmp11;
    if (cResult[5] === sharedValue1) {
      let tmp13;
      let tmp14;
      if (cResult[6] === shouldShowFloatingCTA) {
        tmp13 = cResult[7];
        tmp14 = cResult[8];
      }
      const effect1 = obj2.useEffect(tmp13, tmp14);
      const tmpResult6 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]);
      class S {
        constructor() {
          const value = sharedValue.get();
          return value + sharedValue1.get();
        }
      }
      const obj4 = { consoleStatusHeight: sharedValue, floatingCTAHeight: sharedValue1 };
      S.__closure = obj4;
      S.__workletHash = 7974849446653;
      S.__initData = __initData;
      return tmpResult6.useDerivedValue(S);
    }
    class H {
      constructor() {
        let num = 0;
        set = sharedValue1.set;
        if (shouldShowFloatingCTA) {
          num = closure_4;
        }
        const result = set(num);
      }
    }
    const items = [sharedValue1, shouldShowFloatingCTA, tmp11];
    cResult[5] = sharedValue1;
    cResult[6] = shouldShowFloatingCTA;
    cResult[7] = H;
    cResult[8] = items;
    tmp14 = items;
    tmp13 = H;
  }
  const fn = function s() {
    let num = 0;
    set = sharedValue.set;
    if (isConnectingOrConnectedToConsole) {
      num = VoicePanelConsoleStatus.CONSOLE_STATUS_HEIGHT;
    }
    const result = set(num);
  };
  const items1 = [sharedValue, isConnectingOrConnectedToConsole];
  cResult[0] = sharedValue;
  cResult[1] = isConnectingOrConnectedToConsole;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp6 = items1;
  tmp5 = fn;
}) : (() => {
  let sharedValue;
  let sharedValue1;
  let shouldShowFloatingCTA;
  const channelId = sharedValue1.useContext(sharedValue(shouldShowFloatingCTA[3])).channelId;
  const isConnectingOrConnectedToConsole = sharedValue(shouldShowFloatingCTA[4])(channelId).isConnectingOrConnectedToConsole;
  const obj = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue, isConnectingOrConnectedToConsole];
  const effect = sharedValue1.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (isConnectingOrConnectedToConsole) {
      num = VoicePanelConsoleStatus.CONSOLE_STATUS_HEIGHT;
    }
    const result = set(num);
  }, items);
  const obj2 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[7]);
  shouldShowFloatingCTA = obj2.useShouldShowFloatingCTA(channelId);
  const obj3 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]);
  sharedValue1 = obj3.useSharedValue(0);
  const obj4 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[8]);
  const floatingCTATotalViewHeight = obj4.getFloatingCTATotalViewHeight();
  const items1 = [sharedValue1, shouldShowFloatingCTA, floatingCTATotalViewHeight];
  const effect1 = sharedValue1.useEffect(() => {
    let num = 0;
    set = sharedValue1.set;
    if (shouldShowFloatingCTA) {
      num = floatingCTATotalViewHeight;
    }
    const result = set(num);
  }, items1);
  const fn = function u() {
    const value = sharedValue.get();
    return value + sharedValue1.get();
  };
  fn.__closure = { consoleStatusHeight: sharedValue, floatingCTAHeight: sharedValue1 };
  fn.__workletHash = 584414576606;
  fn.__initData = __initData2;
  const obj5 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]);
  return obj5.useDerivedValue(fn);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx");

export default tmp2;