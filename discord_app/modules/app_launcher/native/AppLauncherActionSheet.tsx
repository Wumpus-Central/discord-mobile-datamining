// === Module 12750: AppLauncherActionSheet ===

// Module 12750 (AppLauncherActionSheet)
import _mod1652 from "module_1652" /* 1652 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5396 */;
import ActionSheetContextDefault from "ActionSheetContext" /* 5727 */;
import AppLauncherContext from "AppLauncherContext" /* 11690 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11691 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 11692 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 12627 */;
import getAppDMApplication from "getAppDMApplication" /* 12751 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function AppLauncherActionSheet(arg0) {
  ({ chatInputRef: require, channel } = arg0);
  const ref = noop.useRef(null);
  const sharedValue = _mod1652.useSharedValue(-1);
  const sharedValue1 = _mod1652.useSharedValue(0);
  const ref1 = noop.useRef(undefined);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  const ref2 = noop.useRef(AppLauncherContext.AppLauncherKeyboardCloseReason.DISMISSED);
  items = [channel];
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
    }
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
      }
    }),
    entrypoint: TEXT,
    keyboardCloseReasonRef: ref2,
    width: defaultAppLauncherWidth,
    overrideParams: null
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
    }
  });
  const appDMApplication = getAppDMApplication.getAppDMApplication(channel);
  let name;
  if (appDMApplication != null) {
    name = appDMApplication.name;
  }
  obj7.initialSearchQuery = name;
  obj6.overrideParams = obj7;
  obj5.children = <tmp10 bottomSheetIndex={sharedValue} bottomSheetPosition={sharedValue1} bottomSheetExpandReasonRef={ref1} context={memo} chatInputRef={noop.useRef({
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
    }
  })} entrypoint={TEXT} keyboardCloseReasonRef={ref2} width={defaultAppLauncherWidth} overrideParams={null} />;
  return jsx(Sheet_BottomSheet.BottomSheet, { ref, animatedIndex: sharedValue, scrollable: true, startExpanded: true, children: null });
}
const AppLauncherRouteName = fn(1498).AppLauncherRouteName;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherActionSheet.tsx");

export function useAppLauncherActionSheet(arg0) {
  closure_0 = arg0;
  let tmp = memo(noop.useState(false), 2);
  const first = tmp[0];
  closure_2 = tmp3;
  memo = noop.useMemo(() => ({
    transitionState: "visible",
    close() {

    },
    onLeave() {
      closure_1_2(false);
    },
    registerDismissHandler() {

    }
  }), []);
  let obj = { appLauncherActionSheet: null, setAppLauncherActionSheetEnabled: tmp[1] };
  items = [memo, first, arg0];
  obj.appLauncherActionSheet = noop.useMemo(() => {
    let tmp = null;
    if (first) {
      const obj = { value: memo, children: null };
      const obj2 = {};
      const merged = Object.assign(closure_0);
      obj.children = <AppLauncherActionSheet />;
      tmp = jsx(ActionSheetContextDefault.Provider, { value: memo, children: null });
    }
    return tmp;
  }, items);
  return obj;
}