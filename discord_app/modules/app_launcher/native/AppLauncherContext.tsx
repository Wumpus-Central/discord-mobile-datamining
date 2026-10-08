// === Module 11232: AppLauncherContext ===

// Module 11232 (AppLauncherContext)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11233 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 11234 */;
import noop from "module_19" /* 19 */;

require = fn;
const AppLauncherKeyboardCloseReason = { DISMISSED: 0, [0]: "DISMISSED", COMMAND: 1, [1]: "COMMAND", ACTIVITY: 2, [2]: "ACTIVITY", BACK: 3, [3]: "BACK", OAUTH_MODAL: 4, [4]: "OAUTH_MODAL" };
let context = noop.createContext(undefined);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppLauncherChatInputRefDummy(noop) {
  const cResult = c.c(2);
  noop = noop.noop;
  if (cResult[0] !== noop) {
    const obj2 = {
      getApplicationCommandManager() {
          if (!noop) {
            const _Error = Error;
            const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
            throw error;
          }
        },
      openCustomKeyboard() {
          if (!noop) {
            const _Error = Error;
            const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
            throw error;
          }
        },
      closeCustomKeyboard() {
          if (!noop) {
            const _Error = Error;
            const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
            throw error;
          }
        }
    };
    cResult[0] = noop;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return noop.useRef(tmp2);
}) : (function useAppLauncherChatInputRefDummy(noop) {
  noop = noop.noop;
  return noop.useRef({
    getApplicationCommandManager() {
      if (!noop) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    openCustomKeyboard() {
      if (!noop) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    },
    closeCustomKeyboard() {
      if (!noop) {
        const _Error = Error;
        const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
        throw error;
      }
    }
  });
});
let closure_5 = tmp3;
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequiredAppLauncherContext() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("AppLauncherContext not found, must be used within AppLauncherNavigator");
    throw error;
  } else {
    return context;
  }
}) : (function useRequiredAppLauncherContext() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("AppLauncherContext not found, must be used within AppLauncherNavigator");
    throw error;
  } else {
    return context;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherContext.tsx");

export { AppLauncherKeyboardCloseReason };
export const AppLauncherBottomSheetExpandReason = { GESTURE: 0, [0]: "GESTURE", KEYBOARD: 1, [1]: "KEYBOARD", APP_VIEW: 2, [2]: "APP_VIEW", COMMAND_VIEW: 3, [3]: "COMMAND_VIEW", OTHER: 4, [4]: "OTHER" };
export const AppLauncherContext = context;
export const useAppLauncherChatInputRefDummy = tmp3;
export const useRequiredAppLauncherContext = tmp4;
export const useAppLauncherContext = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppLauncherContext() {
  const obj = c;
  const cResult = obj.c(6);
  const ref = noop.useRef(obj.DISMISSED);
  const ref1 = noop.useRef(undefined);
  const sharedValue = ReanimatedRexport.useSharedValue(-1);
  const sharedValue1 = ReanimatedRexport.useSharedValue(0);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  const defaultAppLauncherWidth = useDefaultAppLauncherWidth.useDefaultAppLauncherWidth(TEXT);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { noop: false };
    cResult[0] = obj6;
    let first = obj6;
  } else {
    first = cResult[0];
  }
  const tmp8 = closure_5(first);
  if (cResult[1] === sharedValue) {
    if (cResult[2] === sharedValue1) {
      if (cResult[3] === tmp8) {
        if (cResult[4] === defaultAppLauncherWidth) {
          let tmp9 = cResult[5];
        }
        context = noop.useContext(context);
        if (context == null) {
          context = tmp9;
        }
        return context;
      }
    }
  }
  const obj7 = { keyboardCloseReasonRef: ref, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, chatInputRef: tmp8, width: defaultAppLauncherWidth, entrypoint: TEXT, onActivityItemSelected: "Boolean" };
  cResult[1] = sharedValue;
  cResult[2] = sharedValue1;
  cResult[3] = tmp8;
  cResult[4] = defaultAppLauncherWidth;
  cResult[5] = obj7;
  tmp9 = obj7;
}) : (function useAppLauncherContext() {
  const keyboardCloseReasonRef = noop.useRef(obj.DISMISSED);
  const bottomSheetExpandReasonRef = noop.useRef(undefined);
  obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(-1);
  const sharedValue1 = ReanimatedRexport.useSharedValue(0);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  const defaultAppLauncherWidth = useDefaultAppLauncherWidth.useDefaultAppLauncherWidth(TEXT);
  const tmp4 = closure_5({ noop: false });
  const chatInputRef = tmp4;
  const items = [defaultAppLauncherWidth, TEXT, tmp4, sharedValue, sharedValue1];
  const memo = noop.useMemo(() => ({ keyboardCloseReasonRef, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef, chatInputRef, width: defaultAppLauncherWidth, entrypoint: TEXT, onActivityItemSelected: "Boolean" }), items);
  context = noop.useContext(context);
  if (context == null) {
    context = memo;
  }
  return context;
});