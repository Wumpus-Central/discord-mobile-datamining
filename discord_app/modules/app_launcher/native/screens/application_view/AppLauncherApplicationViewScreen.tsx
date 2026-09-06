// discord_app/modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx
import KeyboardTypes from "../../../../keyboard/native/KeyboardTypes.tsx";
import AppLauncherContext from "../../AppLauncherContext.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ApplicationCommandIndexStore from "../../../../application_commands/ApplicationCommandIndexStore.tsx";

require = fn;
function AppLauncherApplicationViewScreenInner(application) {
  application = application.application;
  ({ initiallyExpanded, expandBottomSheet } = application);
  let bottomSheetExpandReasonRef;
  initiallyExpanded = undefined;
  ({
    context,
    lockableScrollableContentOffsetY,
    installOnDemand,
    sectionName,
    onPressBack,
    onActivityItemSelected,
    entrypoint,
    onCommandExecuted,
  } = application);
  const requiredAppLauncherContext = application(bottomSheetExpandReasonRef[7]).useRequiredAppLauncherContext();
  bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
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
    let obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
    obj = { initialRouteName: constants.APPLICATION_VIEW, application };
    obj.context = obj;
    current.openCustomKeyboard(obj);
  }, items);
  const effect = chatInputRef.useEffect(() => {
    let tmp = initiallyExpanded;
    if (initiallyExpanded) {
      tmp = closure_4;
    }
    if (tmp) {
      bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.APP_VIEW;
      if (expandBottomSheet != null) {
        expandBottomSheet();
      }
    }
  }, items1);
  return jsx(expandBottomSheet(bottomSheetExpandReasonRef[11]), {
    application,
    context,
    lockableScrollableContentOffsetY,
    installOnDemand,
    sectionName,
    onPressBack,
    onActivityItemSelected,
    entrypoint,
    onCommandExecuted,
    onAauth2Cancel,
  });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const AppLauncherNativeConstants = fn(1482);
({ AppLauncherRouteName: closure_7, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const BuiltInSectionId = fn(4999).BuiltInSectionId;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { container: { backgroundColor: SCREEN_BACKGROUND_COLOR, flex: 1 } };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx",
);

export default function AppLauncherApplicationViewScreen(route) {
  const params = route.route.params;
  ({ application, onPressBack: require, context } = params);
  const installOnDemand = params.installOnDemand;
  const navigation = route.navigation;
  c4 = undefined;
  c5 = undefined;
  ({ applicationId, initiallyExpanded, sectionName, expandBottomSheet, onCommandExecuted } = params);
  let obj = require("AppLauncherContext");
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  ({ chatInputRef: c4, keyboardCloseReasonRef: c5 } = requiredAppLauncherContext);
  ({ entrypoint, onActivityItemSelected } = requiredAppLauncherContext);
  let id;
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
      const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(id, context.channel.id);
    }
  }, items);
  obj = { style: closure_10().container, children: null };
  if (null != FAKE_BUILT_IN_APP) {
    obj = {
      context,
      application: FAKE_BUILT_IN_APP,
      lockableScrollableContentOffsetY: sharedValue,
      initiallyExpanded,
      installOnDemand,
      sectionName,
      onPressBack() {
        if (closure_1_0 != null) {
          tmp();
        }
        let arr = navigation;
        if (navigation.canGoBack()) {
          arr = arr.pop();
        } else {
          c5.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
          const current = _undefined.current;
          if (current != null) {
            current.closeCustomKeyboard();
          }
        }
      },
      onActivityItemSelected,
      entrypoint,
      expandBottomSheet,
      onCommandExecuted,
    };
    let tmp11Result = tmp11(AppLauncherApplicationViewScreenInner, obj);
  } else {
    const obj1 = { style: null, children: null };
    const obj2 = { paddingTop: tmp(tmp2[14]).EXPANDED_HEADER_HEIGHT };
    obj1.style = obj2;
    obj1.children = tmp11(c4, {});
    tmp11Result = tmp11(tmp12, obj1);
  }
  obj.children = tmp11Result;
  return <c5 style={closure_10().container}>{null}</c5>;
}
