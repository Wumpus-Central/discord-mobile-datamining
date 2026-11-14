// === Module 20106: useControlAccessoryHeight ===

// Module 20106 (useControlAccessoryHeight)
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus" /* 20078 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_4 = { code: "(function useControlAccessoryHeightTsx1(){let[consoleStatusHeight,floatingCTAHeight]=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx");

export default function useControlAccessoryHeight() {
  const channelId = sharedValue1.useContext(require("VoicePanelStateContext")).channelId;
  const isConnectingOrConnectedToConsole = require("useConsoleConnectingInfo")(channelId).isConnectingOrConnectedToConsole;
  _require = isConnectingOrConnectedToConsole;
  const sharedValue = require("module_1655").useSharedValue(0);
  items = [sharedValue, isConnectingOrConnectedToConsole];
  const effect = sharedValue1.useEffect(() => {
    let num = 0;
    if (c0) {
      num = VoicePanelConsoleStatus.CONSOLE_STATUS_HEIGHT;
    }
    const result = _undefined2.set(num);
  }, items);
  const obj = require("module_1655");
  shouldShowFloatingCTA = require("VoicePanelFloatingCTAUtils").useShouldShowFloatingCTA(channelId);
  const obj2 = require("VoicePanelFloatingCTAUtils");
  sharedValue1 = require("module_1655").useSharedValue(0);
  const obj3 = require("module_1655");
  const floatingCTATotalViewHeight = require("VoicePanelFloatingCTAContainer").getFloatingCTATotalViewHeight();
  const items1 = [sharedValue1, shouldShowFloatingCTA, floatingCTATotalViewHeight];
  const effect1 = sharedValue1.useEffect(() => {
    let num = 0;
    if (shouldShowFloatingCTA) {
      num = floatingCTATotalViewHeight;
    }
    const result = sharedValue1.set(num);
  }, items1);
  const obj4 = require("VoicePanelFloatingCTAContainer");
  const items2 = [floatingCTATotalViewHeight, sharedValue, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp7, tmp8, tmp9] = items2;
  function useControlAccessoryHeightTsx1() {
    value = _undefined.get();
    return value + _undefined2.get();
  }
  const items3 = [tmp8, tmp9];
  useControlAccessoryHeightTsx1.__closure = items3;
  useControlAccessoryHeightTsx1.__workletHash = 1979848822852;
  useControlAccessoryHeightTsx1.__initData = tmp7;
  return require("module_1655").useDerivedValue(useControlAccessoryHeightTsx1);
};