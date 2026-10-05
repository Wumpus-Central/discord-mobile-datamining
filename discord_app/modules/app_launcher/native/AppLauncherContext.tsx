// discord_app/modules/app_launcher/native/AppLauncherContext.tsx
import react2 from "../../../../_runtime/00576_react.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import AppLauncherTypes from "../AppLauncherTypes.tsx";
import useDefaultAppLauncherWidth from "hooks/useDefaultAppLauncherWidth.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let noop;

const AppLauncherKeyboardCloseReason = {
  DISMISSED: 0,
  [0]: "DISMISSED",
  COMMAND: 1,
  [1]: "COMMAND",
  ACTIVITY: 2,
  [2]: "ACTIVITY",
  BACK: 3,
  [3]: "BACK",
  OAUTH_MODAL: 4,
  [4]: "OAUTH_MODAL",
};
let context = react.createContext(undefined);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (noop) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(2);
      noop = noop.noop;
      if (cResult[0] !== noop) {
        const obj2 = {
          getApplicationCommandManager() {
            if (!noop) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
              throw error;
            }
          },
          openCustomKeyboard() {
            if (!noop) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
              throw error;
            }
          },
          closeCustomKeyboard() {
            if (!noop) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
              throw error;
            }
          },
        };
        cResult[0] = noop;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return react.useRef(tmp2);
    }
  : (noop) => {
      noop = noop.noop;
      const obj = {
        getApplicationCommandManager() {
          if (!noop) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
            throw error;
          }
        },
        openCustomKeyboard() {
          if (!noop) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
            throw error;
          }
        },
        closeCustomKeyboard() {
          if (!noop) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("use useRequiredAppLauncherContext and provide a ChatInputRef");
            throw error;
          }
        },
      };
      return react.useRef(obj);
    };
let closure_5 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function () {
      context = react.useContext(context);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("AppLauncherContext not found, must be used within AppLauncherNavigator");
        throw error;
      } else {
        return context;
      }
    }
  : function () {
      context = react.useContext(context);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("AppLauncherContext not found, must be used within AppLauncherNavigator");
        throw error;
      } else {
        return context;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(6);
      const ref = react.useRef(obj.DISMISSED);
      const ref1 = react.useRef(undefined);
      const obj3 = ReanimatedRexport;
      const sharedValue = obj3.useSharedValue(-1);
      const obj4 = ReanimatedRexport;
      const sharedValue1 = obj4.useSharedValue(0);
      const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
      const obj5 = useDefaultAppLauncherWidth;
      const defaultAppLauncherWidth = obj5.useDefaultAppLauncherWidth(TEXT);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { noop: false };
        cResult[0] = obj6;
        first = obj6;
      } else {
        first = cResult[0];
      }
      const tmp8 = closure_5(first);
      if (cResult[1] === sharedValue) {
        if (cResult[2] === sharedValue1) {
          if (cResult[3] === tmp8) {
            let tmp9;
            if (cResult[4] === defaultAppLauncherWidth) {
              tmp9 = cResult[5];
            }
            context = react.useContext(context);
            if (context == null) {
              context = tmp9;
            }
            return context;
          }
        }
      }
      const obj7 = {
        keyboardCloseReasonRef: ref,
        bottomSheetIndex: sharedValue,
        bottomSheetPosition: sharedValue1,
        bottomSheetExpandReasonRef: ref1,
        chatInputRef: tmp8,
        width: defaultAppLauncherWidth,
        entrypoint: TEXT,
        onActivityItemSelected: "Boolean",
      };
      cResult[1] = sharedValue;
      cResult[2] = sharedValue1;
      cResult[3] = tmp8;
      cResult[4] = defaultAppLauncherWidth;
      cResult[5] = obj7;
      tmp9 = obj7;
    }
  : () => {
      let obj;
      let closure_0 = react.useRef(obj.DISMISSED);
      let closure_1 = react.useRef(undefined);
      obj = ReanimatedRexport;
      const sharedValue = obj.useSharedValue(-1);
      const obj2 = ReanimatedRexport;
      const sharedValue1 = obj2.useSharedValue(0);
      const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
      const obj3 = useDefaultAppLauncherWidth;
      const defaultAppLauncherWidth = obj3.useDefaultAppLauncherWidth(TEXT);
      const tmp4 = closure_5({ noop: false });
      let closure_6 = tmp4;
      const items = [defaultAppLauncherWidth, TEXT, tmp4, sharedValue, sharedValue1];
      const memo = react.useMemo(
        () => ({
          keyboardCloseReasonRef,
          bottomSheetIndex: sharedValue,
          bottomSheetPosition: sharedValue1,
          bottomSheetExpandReasonRef,
          chatInputRef,
          width: defaultAppLauncherWidth,
          entrypoint: TEXT,
          onActivityItemSelected: "Boolean",
        }),
        items,
      );
      context = react.useContext(context);
      if (context == null) {
        context = memo;
      }
      return context;
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherContext.tsx");

export { AppLauncherKeyboardCloseReason };
export const AppLauncherBottomSheetExpandReason = {
  GESTURE: 0,
  [0]: "GESTURE",
  KEYBOARD: 1,
  [1]: "KEYBOARD",
  APP_VIEW: 2,
  [2]: "APP_VIEW",
  COMMAND_VIEW: 3,
  [3]: "COMMAND_VIEW",
  OTHER: 4,
  [4]: "OTHER",
};
export const AppLauncherContext = context;
export const useAppLauncherChatInputRefDummy = tmp3;
export const useRequiredAppLauncherContext = tmp4;
export const useAppLauncherContext = tmp5;
