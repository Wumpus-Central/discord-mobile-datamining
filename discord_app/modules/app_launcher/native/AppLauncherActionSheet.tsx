// discord_app/modules/app_launcher/native/AppLauncherActionSheet.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { AppLauncherRouteName } from "AppLauncherNativeConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
function AppLauncherActionSheet(arg0) {
  ({ chatInputRef: require, channel } = arg0);
  const ref = React.useRef(null);
  let obj = require(ref[4]);
  const sharedValue = obj.useSharedValue(-1);
  obj1 = require(ref[4]);
  const sharedValue1 = obj1.useSharedValue(0);
  const ref1 = React.useRef(undefined);
  const TEXT = require(ref[6]).AppLauncherEntrypoint.TEXT;
  let obj2 = require(ref[7]);
  const items = [channel];
  const defaultAppLauncherWidth = obj2.useDefaultAppLauncherWidth(TEXT);
  const memo = React.useMemo(() => ({ channel, type: "channel" }), items);
  const ref2 = React.useRef(require(ref[5]).AppLauncherKeyboardCloseReason.DISMISSED);
  obj = { ref, animatedIndex: sharedValue, scrollable: true, startExpanded: true, children: null };
  obj1 = { bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, context: memo, chatInputRef: React.useRef(obj), entrypoint: TEXT, keyboardCloseReasonRef: ref2, width: defaultAppLauncherWidth, overrideParams: null };
  obj2 = { initialRouteName: AppLauncherRouteName.HOME, initialSearchQuery: null };
  const ref3 = React.useRef(obj);
  const tmp10 = channel(ref[9]);
  const appDMApplication = require(ref[10]).getAppDMApplication(channel);
  let name;
  if (appDMApplication != null) {
    name = appDMApplication.name;
  }
  obj2[1] = name;
  obj1[8] = obj2;
  obj[4] = <tmp10 bottomSheetIndex={sharedValue} bottomSheetPosition={sharedValue1} bottomSheetExpandReasonRef={ref1} context={memo} chatInputRef={React.useRef(obj)} entrypoint={TEXT} keyboardCloseReasonRef={ref2} width={defaultAppLauncherWidth} overrideParams={null} />;
  return jsx(require(ref[8]).BottomSheet, { ref, animatedIndex: sharedValue, scrollable: true, startExpanded: true, children: null });
}
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/AppLauncherActionSheet.tsx");

export const useAppLauncherActionSheet = function useAppLauncherActionSheet(arg0) {
  closure_0 = arg0;
  let tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  closure_2 = tmp3;
  const items = [first, arg0];
  return {
    appLauncherActionSheet: React.useMemo(() => {
      let tmp = null;
      if (first) {
        let obj = { transitionState: "visible", close: null, onLeave: null, registerDismissHandler: null };
        obj[1] = function close() {

        };
        obj[2] = function onLeave() {
          callback(false);
        };
        obj[3] = function registerDismissHandler(onDismiss) {

        };
        obj[0] = obj;
        obj = {};
        const merged = Object.assign(closure_0);
        obj[1] = <AppLauncherActionSheet />;
        tmp = jsx(first(table[11]).Provider, {});
      }
      return tmp;
    }, items),
    setAppLauncherActionSheetEnabled: tmp[1]
  };
};