// === Module 12127: AppLauncherApplicationViewScreenInner ===

// Module 12127 (AppLauncherApplicationViewScreenInner)
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "getIndexKey" /* 9290 */;
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1482 */;
import { BuiltInSectionId } from "TRUE_OPTION_NAME" /* 4999 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function AppLauncherApplicationViewScreenInner(application) {
  application = application.application;
  ({ initiallyExpanded, expandBottomSheet } = application);
  let bottomSheetExpandReasonRef;
  let chatInputRef;
  closure_4 = undefined;
  initiallyExpanded = undefined;
  ({ context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted } = application);
  const requiredAppLauncherContext = application(bottomSheetExpandReasonRef[7]).useRequiredAppLauncherContext();
  bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  const tmp5 = expandBottomSheet(bottomSheetExpandReasonRef[8])();
  closure_4 = tmp5;
  if (initiallyExpanded == null) {
    initiallyExpanded = application(tmp2[9]).isEmbeddedApp(application);
    const tmpResult = application(tmp2[9]);
  }
  const items = [application, chatInputRef];
  const items1 = [tmp5, initiallyExpanded, expandBottomSheet, bottomSheetExpandReasonRef];
  const onAauth2Cancel = chatInputRef.useCallback(() => {
    const current = chatInputRef.current;
    obj = { type: application(bottomSheetExpandReasonRef[10]).KeyboardTypes.APP_LAUNCHER, context: obj };
    obj = { initialRouteName: closure_1_7.APPLICATION_VIEW, application };
    current.openCustomKeyboard(obj);
  }, items);
  const effect = chatInputRef.useEffect(() => {
    let tmp = initiallyExpanded;
    if (initiallyExpanded) {
      tmp = closure_4;
    }
    if (tmp) {
      bottomSheetExpandReasonRef.current = application(bottomSheetExpandReasonRef[7]).AppLauncherBottomSheetExpandReason.APP_VIEW;
      if (expandBottomSheet != null) {
        expandBottomSheet();
      }
    }
  }, items1);
  return jsx(expandBottomSheet(bottomSheetExpandReasonRef[11]), { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel });
}
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ AppLauncherRouteName: error, SCREEN_BACKGROUND_COLOR } = APP_LAUNCHER_BUILT_IN_SECTION_ICON);
let closure_10 = createCacheKey.createStyles({ container: { backgroundColor: SCREEN_BACKGROUND_COLOR, flex: 1 } });
let result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx");

export default function AppLauncherApplicationViewScreen(route) {
  const params = route.route.params;
  ({ application, onPressBack: require, context } = params);
  const installOnDemand = params.installOnDemand;
  const navigation = route.navigation;
  c4 = undefined;
  c5 = undefined;
  let id;
  ({ applicationId, initiallyExpanded, sectionName, expandBottomSheet, onCommandExecuted } = params);
  let obj = require(installOnDemand[7]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  ({ chatInputRef: c4, keyboardCloseReasonRef: c5 } = requiredAppLauncherContext);
  ({ entrypoint, onActivityItemSelected } = requiredAppLauncherContext);
  id = undefined;
  if (application != null) {
    id = application.id;
  }
  if (id == null) {
    id = applicationId;
  }
  let tmpResult = tmp(tmp2[12]);
  let tmp7 = null;
  if (id !== BuiltInSectionId.BUILT_IN) {
    tmp7 = id;
  }
  const getOrFetchApplication = tmpResult.useGetOrFetchApplication(tmp7);
  if (id === BuiltInSectionId.BUILT_IN) {
    let FAKE_BUILT_IN_APP = tmp(tmp2[9]).FAKE_BUILT_IN_APP;
  } else {
    FAKE_BUILT_IN_APP = getOrFetchApplication;
    if (getOrFetchApplication == null) {
      FAKE_BUILT_IN_APP = application;
    }
  }
  tmpResult = tmp(tmp2[13]);
  const items = [id, context, installOnDemand];
  const sharedValue = tmpResult.useSharedValue(0);
  const effect = navigation.useEffect(() => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = "channel" === context.type;
    }
    if (tmp2) {
      tmp2 = installOnDemand;
    }
    if (tmp2) {
      const result = id.queryInstallOnDemandApp(id, context.channel.id);
    }
  }, items);
  obj = { style: callback().container, children: null };
  if (null != FAKE_BUILT_IN_APP) {
    obj = { context: null, application: null, lockableScrollableContentOffsetY: null, initiallyExpanded: null, installOnDemand: null, sectionName: null, onPressBack: null, onActivityItemSelected: null, entrypoint: null, expandBottomSheet: null, onCommandExecuted: null };
    obj[0] = context;
    obj[1] = FAKE_BUILT_IN_APP;
    obj[2] = sharedValue;
    obj[3] = initiallyExpanded;
    obj[4] = installOnDemand;
    obj[5] = sectionName;
    obj[6] = function onPressBack() {
      if (closure_0 != null) {
        tmp();
      }
      let arr = navigation;
      if (navigation.canGoBack()) {
        arr = arr.pop();
      } else {
        c5.current = closure_1_0(installOnDemand[7]).AppLauncherKeyboardCloseReason.BACK;
        const current = _undefined.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
      }
    };
    obj[7] = onActivityItemSelected;
    obj[8] = entrypoint;
    obj[9] = expandBottomSheet;
    obj[10] = onCommandExecuted;
    let tmp11Result = tmp11(AppLauncherApplicationViewScreenInner, obj);
  } else {
    obj1 = { style: null, children: null };
    const obj2 = { paddingTop: null };
    obj2[0] = tmp(tmp2[14]).EXPANDED_HEADER_HEIGHT;
    obj1[0] = obj2;
    obj1[1] = tmp11(c4, {});
    tmp11Result = tmp11(tmp12, obj1);
  }
  obj[1] = tmp11Result;
  return <c5 style={callback().container}>{null}</c5>;
};