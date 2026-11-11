// === Module 12488: AppLauncherContext ===

// Module 12488 (AppLauncherContext)
import _mod1652 from "module_1652" /* 1652 */;
import AppLauncherTypes from "AppLauncherTypes" /* 12489 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 12490 */;
import noop from "module_19" /* 19 */;

require = fn;
const AppLauncherKeyboardCloseReason = { DISMISSED: 0, [0]: "DISMISSED", COMMAND: 1, [1]: "COMMAND", ACTIVITY: 2, [2]: "ACTIVITY", BACK: 3, [3]: "BACK", OAUTH_MODAL: 4, [4]: "OAUTH_MODAL" };
let context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherContext.tsx");

export { AppLauncherKeyboardCloseReason };
export const AppLauncherBottomSheetExpandReason = { GESTURE: 0, [0]: "GESTURE", KEYBOARD: 1, [1]: "KEYBOARD", APP_VIEW: 2, [2]: "APP_VIEW", COMMAND_VIEW: 3, [3]: "COMMAND_VIEW", OTHER: 4, [4]: "OTHER" };
export const AppLauncherContext = context;
export function useAppLauncherChatInputRefDummy(noop) {
  noop = noop.noop;
  return noop.useRef({
    getApplicationCommandManager() {
      if (!c0) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    openCustomKeyboard() {
      if (!c0) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    closeCustomKeyboard() {
      if (!c0) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    }
  });
}
export function useRequiredAppLauncherContext() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("AppLauncherContext not found, must be used within AppLauncherNavigator");
    throw error;
  } else {
    return context;
  }
}
export function useAppLauncherContext() {
  noop.useRef(obj.DISMISSED);
  const bottomSheetExpandReasonRef = noop.useRef(undefined);
  obj = _mod1652;
  const sharedValue = obj.useSharedValue(-1);
  const sharedValue1 = _mod1652.useSharedValue(0);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  const defaultAppLauncherWidth = useDefaultAppLauncherWidth.useDefaultAppLauncherWidth(TEXT);
  c0 = false;
  const ref = noop.useRef({
    getApplicationCommandManager() {
      if (!c0) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    openCustomKeyboard() {
      if (!c0) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    closeCustomKeyboard() {
      if (!c0) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    }
  });
  items = [defaultAppLauncherWidth, TEXT, ref, sharedValue, sharedValue1];
  const memo = noop.useMemo(() => ({ keyboardCloseReasonRef, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef, chatInputRef: ref, width: defaultAppLauncherWidth, entrypoint: TEXT, onActivityItemSelected: "Boolean" }), items);
  context = noop.useContext(context);
  if (context == null) {
    context = memo;
  }
  return context;
}