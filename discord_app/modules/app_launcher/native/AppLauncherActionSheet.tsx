// discord_app/modules/app_launcher/native/AppLauncherActionSheet.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ActionSheetContextDefault from "../../action_sheet/native/ActionSheetContext.tsx";
import AppLauncherTypes from "../AppLauncherTypes.tsx";
import AppLauncherContext from "AppLauncherContext.tsx";
import useDefaultAppLauncherWidth from "hooks/useDefaultAppLauncherWidth.tsx";
import AppLauncherNavigatorDefault from "AppLauncherNavigator.tsx";
import getAppDMApplication from "../../app_dms/getAppDMApplication.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function AppLauncherActionSheet(arg0) {
  ({ chatInputRef: require, channel } = arg0);
  const ref = noop.useRef(null);
  const sharedValue = ReanimatedRexport.useSharedValue(-1);
  const sharedValue1 = ReanimatedRexport.useSharedValue(0);
  const ref1 = noop.useRef(undefined);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  const ref2 = noop.useRef(AppLauncherContext.AppLauncherKeyboardCloseReason.DISMISSED);
  const items = [channel];
  const defaultAppLauncherWidth = useDefaultAppLauncherWidth.useDefaultAppLauncherWidth(TEXT);
  const memo = noop.useMemo(() => ({ channel, type: "channel" }), items);
  const obj4 = {
    getApplicationCommandManager() {
      const current = ref.current;
      let applicationCommandManager;
      if (current != null) {
        applicationCommandManager = current.getApplicationCommandManager();
      }
      return applicationCommandManager;
    },
    closeCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    },
    openCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    },
  };
  const obj5 = { ref, animatedIndex: sharedValue, scrollable: true, startExpanded: true, children: null };
  const obj6 = {
    bottomSheetIndex: sharedValue,
    bottomSheetPosition: sharedValue1,
    bottomSheetExpandReasonRef: ref1,
    context: memo,
    chatInputRef: noop.useRef({
      getApplicationCommandManager() {
        const current = ref.current;
        let applicationCommandManager;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      },
      closeCustomKeyboard() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      },
      openCustomKeyboard() {
        const current = ref.current;
        if (current != null) {
          current.expandActionSheet();
        }
      },
    }),
    entrypoint: TEXT,
    keyboardCloseReasonRef: ref2,
    width: defaultAppLauncherWidth,
    overrideParams: null,
  };
  const obj7 = { initialRouteName: AppLauncherRouteName.HOME, initialSearchQuery: null };
  const ref3 = noop.useRef({
    getApplicationCommandManager() {
      const current = ref.current;
      let applicationCommandManager;
      if (current != null) {
        applicationCommandManager = current.getApplicationCommandManager();
      }
      return applicationCommandManager;
    },
    closeCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    },
    openCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    },
  });
  const appDMApplication = getAppDMApplication.getAppDMApplication(channel);
  let name;
  if (appDMApplication != null) {
    name = appDMApplication.name;
  }
  obj7.initialSearchQuery = name;
  obj6.overrideParams = obj7;
  obj5.children = (
    <tmp10
      bottomSheetIndex={sharedValue}
      bottomSheetPosition={sharedValue1}
      bottomSheetExpandReasonRef={ref1}
      context={memo}
      chatInputRef={noop.useRef({
        getApplicationCommandManager() {
          const current = ref.current;
          let applicationCommandManager;
          if (current != null) {
            applicationCommandManager = current.getApplicationCommandManager();
          }
          return applicationCommandManager;
        },
        closeCustomKeyboard() {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
        },
        openCustomKeyboard() {
          const current = ref.current;
          if (current != null) {
            current.expandActionSheet();
          }
        },
      })}
      entrypoint={TEXT}
      keyboardCloseReasonRef={ref2}
      width={defaultAppLauncherWidth}
      overrideParams={null}
    />
  );
  return jsx(Sheet_BottomSheet.BottomSheet, {
    ref,
    animatedIndex: sharedValue,
    scrollable: true,
    startExpanded: true,
    children: null,
  });
}
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherActionSheet.tsx");

export const useAppLauncherActionSheet = function useAppLauncherActionSheet(arg0) {
  closure_0 = arg0;
  let tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  closure_2 = tmp3;
  let obj = { appLauncherActionSheet: null, setAppLauncherActionSheetEnabled: tmp[1] };
  const items = [first, arg0];
  obj.appLauncherActionSheet = noop.useMemo(() => {
    let tmp = null;
    if (first) {
      const obj = { value: null, children: null };
      const obj2 = {
        transitionState: "visible",
        close() {},
        onLeave() {
          closure_1_2(false);
        },
        registerDismissHandler() {},
      };
      obj.value = obj2;
      const obj3 = {};
      const merged = Object.assign(closure_0);
      obj.children = <AppLauncherActionSheet />;
      tmp = jsx(ActionSheetContextDefault.Provider, { value: null, children: null });
    }
    return tmp;
  }, items);
  return obj;
};
