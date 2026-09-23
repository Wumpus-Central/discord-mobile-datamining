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
let closure_12 = fn(1229).BACKGROUND_GRADIENT_PRESETS_MOBILE;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  container: {
    padding: 24,
    paddingTop: 128,
    paddingBottom: 96,
    borderRadius: nativeDefault.radii.md,
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  centerContent: { flex: 1, justifyContent: "center", alignItems: "center" },
  bottomContent: null,
  logo: null,
  loadingContainer: null,
  link: null,
  raisedIcon: null,
};
let obj3 = {
  padding: 24,
  paddingTop: 128,
  paddingBottom: 96,
  borderRadius: nativeDefault.radii.md,
  alignItems: "center",
  flex: 1,
  justifyContent: "space-between",
};
obj2.bottomContent = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.logo = { width: 80, height: 80, alignSelf: "center" };
let obj4 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.loadingContainer = {
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  alignItems: "center",
  marginBottom: 48,
};
let obj5 = {
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  alignItems: "center",
  marginBottom: 48,
};
obj2.link = { textDecorationLine: "underline", textDecorationColor: nativeDefault.colors.TEXT_DEFAULT, flexShrink: 1 };
let size = {
  width: 64,
  height: 64,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignSelf: "center",
};
obj2.raisedIcon = size;
let closure_15 = createStyles.createStyles(obj2);
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
    AnalyticsUtilsDefault.track(constants.ONE_TIME_LOGIN_MODAL_OPENED, { has_token: null != token });
    const obj2 = { has_token: null != token };
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
    const obj2 = { header: null, title: null, content: null, actions: null };
    const obj = useAlertStore;
    obj2.header = map1(hasOwnProperty, {
      style: closure_1.raisedIcon,
      children: map1(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }),
    });
    const intl = util.intl;
    obj2.title = intl.string(util.t.L6htwI);
    const intl2 = util.intl;
    obj2.content = intl2.string(util.t["4fnE/J"]);
    const obj4 = { children: null };
    const obj5 = { onPress, text: null };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t["9vN0pz"]);
    obj4.children = map1(AlertModal.AlertActionButton, obj5, "confirm");
    obj2.actions = map1(AlertModal.AlertActions, obj4);
    obj.openAlert("invalid-login-alert", map1(AlertModal.AlertModal, obj2));
  }, items2);
  const items3 = [tmp.raisedIcon, callback1];
  const callback3 = onPress.useCallback(() => {
    const obj2 = { header: null, title: null, content: null, actions: null };
    const obj = useAlertStore;
    obj2.header = map1(hasOwnProperty, {
      style: closure_1.raisedIcon,
      children: map1(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }),
    });
    const intl = util.intl;
    obj2.title = intl.string(util.t.MKW8z2);
    const intl2 = util.intl;
    const currentUser = UserStore.getCurrentUser();
    let str;
    if (currentUser != null) {
      str = currentUser.username;
    }
    if (str == null) {
      str = "current user";
    }
    obj2.content = intl2.formatToPlainString(util.t.YOeM7B, { username: str });
    const obj4 = { children: null };
    const obj5 = { onPress: callback1, text: null };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t["3PatSz"]);
    obj4.children = map1(AlertModal.AlertActionButton, obj5, "confirm");
    obj2.actions = map1(AlertModal.AlertActions, obj4);
    obj.openAlert("already-logged-in-alert", map1(AlertModal.AlertModal, obj2));
    const obj3 = {
      style: closure_1.raisedIcon,
      children: map1(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }),
    };
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
      tmp3(tmp44[13]).track(constants.ONE_TIME_LOGIN_ATTEMPTED, { source: "native_modal" });
      tmp3(tmp44[13]);
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
        tmp3(tmp44[13]).track(constants.ONE_TIME_LOGIN_ERROR, {
          source: "native_modal",
          error_reason: "api_error",
          error_message: closure_128_0,
        });
        closure_129_6();
        c5 = 3;
        tmp3(tmp44[13]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        tmp3(tmp44[13]).track(constants.LOGIN_SUCCESSFUL, { source: "native_modal", login_method: "one_time_login" });
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          closure_1_1(closure_1_2[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
        }, 1500);
        c3 = 0;
        tmp3(tmp44[13]);
      }
      return value;
    }),
    items4,
  );
  const items5 = [callback4];
  const effect1 = onPress.useEffect(() => {
    callback4();
  }, items5);
  let obj = { style: memo, children: null };
  let obj2 = {
    absolute: true,
    wide: true,
    tall: true,
    gradientOverride: closure_12[5],
    mix: true,
    angleOverride: 0,
    mixAmount: null,
  };
  let obj3 = { dark: token(4645).OverlayOpacity.LEVEL_1 };
  obj2.mixAmount = obj3;
  const items6 = [closure_13(ThemedGradientDefault, obj2)];
  let obj4 = { style: tmp.container, children: null };
  let obj5 = { style: tmp.centerContent, children: null };
  const items7 = [closure_13(callback3, { source: token(14220), style: tmp.logo })];
  const obj7 = { style: tmp.loadingContainer, children: null };
  const items8 = [closure_13(callback2, {})];
  const obj8 = { variant: "text-lg/semibold", children: null };
  let intl = token(1115).intl;
  obj8.children = intl.string(token(1115).t.W9uNdG);
  items8[1] = closure_13(token(4823).Text, obj8);
  obj7.children = items8;
  items7[1] = closure_14(callback1, obj7);
  obj5.children = items7;
  const items9 = [closure_14(callback1, obj5)];
  const obj9 = { style: tmp.bottomContent, children: null };
  const obj10 = { variant: "text-sm/normal", children: null };
  let intl2 = token(1115).intl;
  obj10.children = intl2.string(token(1115).t["ZXe5/Y"]);
  const items10 = [closure_13(token(4823).Text, obj10)];
  const obj11 = { textColor: "text-default", text: null, variant: "text-sm/medium", onPress: null, textStyle: null };
  let intl3 = token(1115).intl;
  obj11.text = intl3.string(token(1115).t.FIEwfG);
  obj11.onPress = onPress;
  obj11.textStyle = tmp.link;
  items10[1] = closure_13(token(7271).LinkButton, obj11);
  obj9.children = items10;
  items9[1] = closure_14(callback1, obj9);
  obj4.children = items9;
  items6[1] = closure_14(callback1, obj4);
  obj.children = items6;
  return closure_14(callback1, obj);
}
