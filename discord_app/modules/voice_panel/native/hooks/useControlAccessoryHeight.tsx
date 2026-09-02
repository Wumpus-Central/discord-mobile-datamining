// === Module 17020: useControlAccessoryHeight ===

// Module 17020 (useControlAccessoryHeight)
import closure_3 from "noop" /* 19 */;

const require = arg1;
let closure_4 = { code: "function useControlAccessoryHeightTsx1(){const{consoleStatusHeight,floatingCTAHeight}=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();}" };
let result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx");

export default function useControlAccessoryHeight() {
  const channelId = sharedValue1.useContext(sharedValue(shouldShowFloatingCTA[1])).channelId;
  const isConnectingOrConnectedToConsole = sharedValue(shouldShowFloatingCTA[2])(channelId).isConnectingOrConnectedToConsole;
  sharedValue = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[3]).useSharedValue(0);
  const items = [sharedValue, isConnectingOrConnectedToConsole];
  const effect = sharedValue1.useEffect(() => {
    let num = 0;
    if (isConnectingOrConnectedToConsole) {
      num = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[4]).CONSOLE_STATUS_HEIGHT;
    }
    const result = sharedValue.set(num);
  }, items);
  const obj = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[3]);
  shouldShowFloatingCTA = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]).useShouldShowFloatingCTA(channelId);
  const obj2 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]);
  sharedValue1 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[3]).useSharedValue(0);
  const obj3 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[3]);
  const floatingCTATotalViewHeight = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[6]).getFloatingCTATotalViewHeight();
  const items1 = [sharedValue1, shouldShowFloatingCTA, floatingCTATotalViewHeight];
  const effect1 = sharedValue1.useEffect(() => {
    let num = 0;
    if (shouldShowFloatingCTA) {
      num = floatingCTATotalViewHeight;
    }
    const result = sharedValue1.set(num);
  }, items1);
  const obj4 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[6]);
  const fn = function l() {
    const value = sharedValue.get();
    return value + sharedValue1.get();
  };
  fn.__closure = { consoleStatusHeight: sharedValue, floatingCTAHeight: sharedValue1 };
  fn.__workletHash = 7974849446653;
  fn.__initData = floatingCTATotalViewHeight;
  return isConnectingOrConnectedToConsole(shouldShowFloatingCTA[3]).useDerivedValue(fn);
};