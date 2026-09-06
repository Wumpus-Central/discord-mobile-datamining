// === Module 16759: AppLauncherActionSheet ===

// Module 16759 (AppLauncherActionSheet)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import ActionSheetContextDefault from "ActionSheetContext" /* 7152 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9409 */;
import AppLauncherContext from "AppLauncherContext" /* 11215 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 11216 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 12082 */;
import getAppDMApplication from "getAppDMApplication" /* 12196 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function AppLauncherActionSheet(arg0) {
  ({ chatInputRef: require, channel } = arg0);
  const ref = noop.useRef(null);
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(-1);
  let obj1 = ReanimatedRexport;
  const sharedValue1 = obj1.useSharedValue(0);
  const ref1 = noop.useRef(undefined);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  let obj2 = useDefaultAppLauncherWidth;
  const items = [channel];
  const defaultAppLauncherWidth = obj2.useDefaultAppLauncherWidth(TEXT);
  obj = {
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
  const memo = noop.useMemo(() => ({ channel, type: "channel" }), items);
  const ref2 = noop.useRef(AppLauncherContext.AppLauncherKeyboardCloseReason.DISMISSED);
  obj = { ref, animatedIndex: sharedValue, scrollable: true, startExpanded: true, children: null };
  obj1 = { bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, context: memo, chatInputRef: noop.useRef(obj), entrypoint: TEXT, keyboardCloseReasonRef: ref2, width: defaultAppLauncherWidth, overrideParams: null };
  obj2 = { initialRouteName: AppLauncherRouteName.HOME, initialSearchQuery: null };
  const ref3 = noop.useRef(obj);
  const appDMApplication = getAppDMApplication.getAppDMApplication(channel);
  let name;
  if (appDMApplication != null) {
    name = appDMApplication.name;
  }
  obj2.initialSearchQuery = name;
  obj1.overrideParams = obj2;
  obj.children = <tmp10 bottomSheetIndex={sharedValue} bottomSheetPosition={sharedValue1} bottomSheetExpandReasonRef={ref1} context={memo} chatInputRef={noop.useRef(obj)} entrypoint={TEXT} keyboardCloseReasonRef={ref2} width={defaultAppLauncherWidth} overrideParams={null} />;
  return jsx(Sheet_BottomSheet.BottomSheet, { ref, animatedIndex: sharedValue, scrollable: true, startExpanded: true, children: null });
}
const AppLauncherRouteName = fn(1482).AppLauncherRouteName;
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
      let obj = { value: null, children: null };
      obj = {
        transitionState: "visible",
        close() {

          },
        onLeave() {
            closure_1_2(false);
          },
        registerDismissHandler() {

          }
      };
      obj.value = obj;
      obj = {};
      const merged = Object.assign(closure_0);
      obj.children = <AppLauncherActionSheet />;
      tmp = jsx(ActionSheetContextDefault.Provider, {});
    }
    return tmp;
  }, items);
  return obj;
};