// === Module 9012: context ===

// Module 9012 (context)
import importAllResult from "noop" /* 19 */;

const require = arg1;
let obj = { DISMISSED: 0, [0]: "DISMISSED", COMMAND: 1, [1]: "COMMAND", ACTIVITY: 2, [2]: "ACTIVITY", BACK: 3, [3]: "BACK", OAUTH_MODAL: 4, [4]: "OAUTH_MODAL" };
let context = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/AppLauncherContext.tsx");

export const AppLauncherKeyboardCloseReason = obj;
export const AppLauncherBottomSheetExpandReason = { GESTURE: 0, [0]: "GESTURE", KEYBOARD: 1, [1]: "KEYBOARD", APP_VIEW: 2, [2]: "APP_VIEW", COMMAND_VIEW: 3, [3]: "COMMAND_VIEW", OTHER: 4, [4]: "OTHER" };
export const AppLauncherContext = context;
export const useAppLauncherChatInputRefDummy = function useAppLauncherChatInputRefDummy(noop) {
  noop = noop.noop;
  return importAllResult.useRef({
    getApplicationCommandManager() {
      if (!c0) {
        const _Error = Error;
        error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    openCustomKeyboard() {
      if (!c0) {
        const _Error = Error;
        error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    closeCustomKeyboard() {
      if (!c0) {
        const _Error = Error;
        error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    }
  });
};
export const useRequiredAppLauncherContext = function useRequiredAppLauncherContext() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error("AppLauncherContext not found, must be used within AppLauncherNavigator");
    throw error;
  } else {
    return context;
  }
};
export const useAppLauncherContext = function useAppLauncherContext() {
  let _require = sharedValue.useRef(sharedValue1.DISMISSED);
  dependencyMap = sharedValue.useRef(undefined);
  obj = _require(4187);
  sharedValue = obj.useSharedValue(-1);
  sharedValue1 = _require(4187).useSharedValue(0);
  const TEXT = _require(8403).AppLauncherEntrypoint.TEXT;
  const obj2 = _require(4187);
  const defaultAppLauncherWidth = _require(9013).useDefaultAppLauncherWidth(TEXT);
  _require = false;
  obj = {
    getApplicationCommandManager() {
      if (!c0) {
        const _Error = Error;
        error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    openCustomKeyboard() {
      if (!c0) {
        const _Error = Error;
        error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    closeCustomKeyboard() {
      if (!c0) {
        const _Error = Error;
        error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    }
  };
  const ref = sharedValue.useRef(obj);
  const items = [defaultAppLauncherWidth, TEXT, ref, sharedValue, sharedValue1];
  const memo = sharedValue.useMemo(() => ({ keyboardCloseReasonRef: c0, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: closure_1, chatInputRef: ref, width: defaultAppLauncherWidth, entrypoint: TEXT, onActivityItemSelected: "Boolean" }), items);
  context = sharedValue.useContext(TEXT);
  if (context == null) {
    context = memo;
  }
  return context;
};