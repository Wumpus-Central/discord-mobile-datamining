// discord_app/modules/one_time_login/native/OneTimeLoginModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import useAlertStore from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import ThemedGradientDefault from "../../client_themes/native/ThemedGradient.tsx";
import CircleErrorIcon from "../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ Routes: c10, AnalyticEvents: closure_11 } = Constants);
let closure_12 = fn(1230).BACKGROUND_GRADIENT_PRESETS_MOBILE;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  centerContent: null,
  bottomContent: null,
  logo: null,
  loadingContainer: null,
  link: null,
  raisedIcon: null,
};
createStyles = {
  padding: 24,
  paddingTop: 128,
  paddingBottom: 96,
  borderRadius: nativeDefault.radii.md,
  alignItems: "center",
  flex: 1,
  justifyContent: "space-between",
};
createStyles.container = createStyles;
createStyles.centerContent = { flex: 1, justifyContent: "center", alignItems: "center" };
createStyles.bottomContent = { alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.logo = { width: 80, height: 80, alignSelf: "center" };
let obj1 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.loadingContainer = {
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  alignItems: "center",
  marginBottom: 48,
};
let obj2 = {
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  alignItems: "center",
  marginBottom: 48,
};
createStyles.link = {
  textDecorationLine: "underline",
  textDecorationColor: nativeDefault.colors.TEXT_DEFAULT,
  flexShrink: 1,
};
let size = {
  width: 64,
  height: 64,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignSelf: "center",
};
createStyles.raisedIcon = size;
let closure_15 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/one_time_login/native/OneTimeLoginModal.tsx");

export default function OneTimeLoginModal(token) {
  token = token.token;
  let onPress;
  const tmp = closure_15();
  importDefault = tmp;
  const tmp2 = useSafeAreaInsetsDefault();
  dependencyMap = tmp2;
  let height = useWindowDimensionsDefault().height;
  const items = [tmp2.bottom, height];
  const items1 = [token];
  const memo = onPress.useMemo(() => {
    height = "100%";
    if (obj.isAndroid()) {
      height = height + bottom.bottom;
    }
    return { height };
  }, items);
  const effect = onPress.useEffect(() => {
    const obj = { has_token: null != token };
    obj.track(constants.ONE_TIME_LOGIN_MODAL_OPENED, obj);
    AnalyticsUtilsDefault.track(constants.DEEP_LINK_CLICKED, {
      source: "native_modal",
      destination: "one_time_login_native_modal",
      deep_link_provider: "native_app",
    });
  }, items1);
  onPress = onPress.useCallback(() => {
    closure_1(bottom[13]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "loading" });
    const obj = closure_1(bottom[13]);
    closure_1(bottom[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = closure_1(bottom[14]);
    token(bottom[15]).resetToAuthRoute();
  }, []);
  const callback1 = onPress.useCallback(() => {
    closure_1(bottom[13]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "already_logged_in" });
    const obj = closure_1(bottom[13]);
    closure_1(bottom[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = closure_1(bottom[14]);
    token(bottom[16]).transitionTo(constants.ME);
  }, []);
  const items2 = [onPress, tmp.raisedIcon];
  const callback2 = onPress.useCallback(() => {
    let obj = { header: null, title: null, content: null, actions: null };
    obj = {
      style: closure_1.raisedIcon,
      children: map1(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }),
    };
    obj.header = map1(hasOwnProperty, obj);
    const intl = util.intl;
    obj.title = intl.string(util.t.L6htwI);
    const intl2 = util.intl;
    obj.content = intl2.string(util.t["4fnE/J"]);
    const obj1 = { children: null };
    const obj2 = { onPress, text: null };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t["9vN0pz"]);
    obj1.children = map1(AlertModal.AlertActionButton, obj2, "confirm");
    obj.actions = map1(AlertModal.AlertActions, obj1);
    obj.openAlert("invalid-login-alert", map1(AlertModal.AlertModal, obj));
  }, items2);
  const items3 = [tmp.raisedIcon, callback1];
  const callback3 = onPress.useCallback(() => {
    let obj = { header: null, title: null, content: null, actions: null };
    obj = {
      style: closure_1.raisedIcon,
      children: map1(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }),
    };
    obj.header = map1(hasOwnProperty, obj);
    const intl = util.intl;
    obj.title = intl.string(util.t.MKW8z2);
    const intl2 = util.intl;
    const currentUser = UserStore.getCurrentUser();
    let str;
    if (currentUser != null) {
      str = currentUser.username;
    }
    if (str == null) {
      str = "current user";
    }
    obj.content = intl2.formatToPlainString(util.t.YOeM7B, { username: str });
    const obj1 = { children: null };
    const obj2 = { onPress: callback1, text: null };
    const intl3 = tmp(1114).intl;
    obj2.text = intl3.string(util.t["3PatSz"]);
    obj1.children = map1(AlertModal.AlertActionButton, obj2, "confirm");
    obj.actions = map1(AlertModal.AlertActions, obj1);
    obj.openAlert("already-logged-in-alert", map1(AlertModal.AlertModal, obj));
  }, items3);
  const items4 = [token, callback2, callback3];
  const callback4 = onPress.useCallback(
    height(function* () {
      if (null == token) {
        tmp3(tmp44[13]).track(constants.ONE_TIME_LOGIN_ERROR, {
          source: "native_modal",
          error_reason: "missing_token",
          error_message: "No token provided",
        });
        callback2();
        c3 = 0;
      }
      if (authenticated.isAuthenticated()) {
        callback3();
        c3 = 0;
      }
      let obj4 = tmp3(tmp44[13]);
      obj4.track(constants.ONE_TIME_LOGIN_ATTEMPTED, { source: "native_modal" });
      yield tmp3(tmp44[22]).oneTimeLogin(tmp53);
      if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = tmp44;
        const _Error = Error;
        let str = "Login failed";
        if (closure_128_1 instanceof Error) {
          str = closure_128_1.message;
        }
        closure_128_0 = str;
        obj4 = { source: "native_modal", error_reason: "api_error", error_message: closure_128_0 };
        tmp3(tmp44[13]).track(constants.ONE_TIME_LOGIN_ERROR, obj4);
        closure_129_6();
        c5 = 3;
        tmp3(tmp44[13]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        tmp3(tmp44[13]).track(constants.LOGIN_SUCCESSFUL, { source: "native_modal", login_method: "one_time_login" });
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          closure_1_1(closure_1_2[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
        }, 1500);
        c3 = 0;
        tmp3(tmp44[13]);
      }
      return arg1;
    }),
    items4,
  );
  const items5 = [callback4];
  const effect1 = onPress.useEffect(() => {
    callback4();
  }, items5);
  let obj = { style: memo, children: null };
  obj = {
    absolute: true,
    wide: true,
    tall: true,
    gradientOverride: closure_12[5],
    mix: true,
    angleOverride: 0,
    mixAmount: null,
  };
  obj = { dark: token(4378).OverlayOpacity.LEVEL_1 };
  obj.mixAmount = obj;
  const items6 = [closure_13(ThemedGradientDefault, obj)];
  let obj1 = { style: tmp.container, children: null };
  let obj2 = { style: tmp.centerContent, children: null };
  const items7 = [closure_13(callback3, { source: token(13862), style: tmp.logo })];
  let obj4 = { style: tmp.loadingContainer, children: null };
  const items8 = [closure_13(callback2, {})];
  const obj5 = { variant: "text-lg/semibold", children: null };
  let intl = token(1114).intl;
  obj5.children = intl.string(token(1114).t.W9uNdG);
  items8[1] = closure_13(token(4556).Text, obj5);
  obj4.children = items8;
  items7[1] = closure_14(callback1, obj4);
  obj2.children = items7;
  const items9 = [closure_14(callback1, obj2)];
  const obj6 = { style: tmp.bottomContent, children: null };
  const obj7 = { variant: "text-sm/normal", children: null };
  let intl2 = token(1114).intl;
  obj7.children = intl2.string(token(1114).t["ZXe5/Y"]);
  const items10 = [closure_13(token(4556).Text, obj7)];
  const obj8 = { textColor: "text-default", text: null, variant: "text-sm/medium", onPress: null, textStyle: null };
  let intl3 = token(1114).intl;
  obj8.text = intl3.string(token(1114).t.FIEwfG);
  obj8.onPress = onPress;
  obj8.textStyle = tmp.link;
  items10[1] = closure_13(token(6942).LinkButton, obj8);
  obj6.children = items10;
  items9[1] = closure_14(callback1, obj6);
  obj1.children = items9;
  items6[1] = closure_14(callback1, obj1);
  obj.children = items6;
  return closure_14(callback1, obj);
}
