// === Module 14060: OneTimeLoginModal ===

// Module 14060 (OneTimeLoginModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useAlertStore from "useAlertStore" /* 5301 */;
import AlertModal from "AlertModal" /* 5305 */;
import FastImageDefault from "FastImage" /* 6156 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6289 */;
import ThemedGradientDefault from "ThemedGradient" /* 10225 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ Routes: closure_9, AnalyticEvents: c10 } = Constants);
let closure_11 = fn(1253).BACKGROUND_GRADIENT_PRESETS_MOBILE;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { padding: 24, paddingTop: 128, paddingBottom: 96, borderRadius: nativeDefault.radii.md, alignItems: "center", flex: 1, justifyContent: "space-between" }, centerContent: { flex: 1, justifyContent: "center", alignItems: "center" }, bottomContent: null, logo: null, loadingContainer: null, link: null, raisedIcon: null };
let obj3 = { padding: 24, paddingTop: 128, paddingBottom: 96, borderRadius: nativeDefault.radii.md, alignItems: "center", flex: 1, justifyContent: "space-between" };
obj2.bottomContent = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.logo = { width: 80, height: 80, alignSelf: "center" };
let obj4 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.loadingContainer = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", marginBottom: 48 };
let obj5 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", marginBottom: 48 };
obj2.link = { textDecorationLine: "underline", textDecorationColor: nativeDefault.colors.TEXT_DEFAULT, flexShrink: 1 };
let size = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "center" };
obj2.raisedIcon = size;
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { textDecorationLine: "underline", textDecorationColor: nativeDefault.colors.TEXT_DEFAULT, flexShrink: 1 };
size = fn(2);
const result = size.fileFinishedImporting("modules/one_time_login/native/OneTimeLoginModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OneTimeLoginModal(token) {
  const cResult = require("c").c(46);
  token = token.token;
  _require = token;
  const tmp4 = closure_14();
  importDefault = tmp4;
  const tmp5 = useSafeAreaInsetsDefault();
  const height = useWindowDimensionsDefault().height;
  if (cResult[0] === tmp5.bottom) {
    if (cResult[1] === height) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      let obj2 = { height: tmp6 };
      cResult[3] = tmp6;
      cResult[4] = obj2;
    }
    if (cResult[5] !== token) {
      const fn = function p() {
        AnalyticsUtilsDefault.track(constants.ONE_TIME_LOGIN_MODAL_OPENED, { has_token: null != closure_0 });
        const obj2 = { has_token: null != closure_0 };
        AnalyticsUtilsDefault.track(constants.DEEP_LINK_CLICKED, { source: "native_modal", destination: "one_time_login_native_modal", deep_link_provider: "native_app" });
      };
      const items = [token];
      cResult[5] = token;
      cResult[6] = fn;
      cResult[7] = items;
      let tmp9 = items;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[6];
      tmp9 = cResult[7];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function k() {
        closure_1(onPress[15]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "loading" });
        const obj = closure_1(onPress[15]);
        closure_1(onPress[16]).popWithKey("ONE_TIME_LOGIN_MODAL");
        const obj2 = closure_1(onPress[16]);
        closure_0(onPress[17]).resetToAuthRoute();
      };
      cResult[8] = fn2;
      let tmp13 = fn2;
    } else {
      tmp13 = cResult[8];
    }
    dependencyMap = tmp13;
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function b() {
        closure_1(onPress[15]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "already_logged_in" });
        const obj = closure_1(onPress[15]);
        closure_1(onPress[16]).popWithKey("ONE_TIME_LOGIN_MODAL");
        const obj2 = closure_1(onPress[16]);
        closure_0(onPress[18]).transitionTo(constants.ME);
      };
      cResult[9] = fn3;
      let tmp14 = fn3;
    } else {
      tmp14 = cResult[9];
    }
    onPress = tmp14;
    if (cResult[10] !== tmp4.raisedIcon) {
      class G {
        constructor() {
          obj = closure_0(closure_2[19]);
          obj1 = { header: null, title: null, content: null, actions: null };
          obj6 = { style: closure_1.raisedIcon, children: jsx(closure_0(closure_2[21]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
          obj1.header = jsx(View, obj6);
          intl = closure_0(closure_2[22]).intl;
          obj1.title = intl.string(closure_0(closure_2[22]).t.L6htwI);
          intl2 = closure_0(closure_2[22]).intl;
          obj1.content = intl2.string(closure_0(closure_2[22]).t["4fnE/J"]);
          obj7 = { children: null };
          obj8 = { onPress: closure_2, text: null };
          intl3 = closure_0(closure_2[22]).intl;
          obj8.text = intl3.string(closure_0(closure_2[22]).t["9vN0pz"]);
          obj7.children = jsx(closure_0(closure_2[20]).AlertActionButton, obj8, "confirm");
          obj1.actions = jsx(closure_0(closure_2[23]).AlertActions, obj7);
          openAlertResult = obj.openAlert("invalid-login-alert", jsx(closure_0(closure_2[20]).AlertModal, obj1));
          return;
        }
      }
      cResult[10] = tmp4.raisedIcon;
      cResult[11] = G;
    } else {
      class G {
        constructor() {
          obj = closure_0(closure_2[19]);
          obj1 = { header: null, title: null, content: null, actions: null };
          obj6 = { style: closure_1.raisedIcon, children: jsx(closure_0(closure_2[21]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
          obj1.header = jsx(View, obj6);
          intl = closure_0(closure_2[22]).intl;
          obj1.title = intl.string(closure_0(closure_2[22]).t.L6htwI);
          intl2 = closure_0(closure_2[22]).intl;
          obj1.content = intl2.string(closure_0(closure_2[22]).t["4fnE/J"]);
          obj7 = { children: null };
          obj8 = { onPress: closure_2, text: null };
          intl3 = closure_0(closure_2[22]).intl;
          obj8.text = intl3.string(closure_0(closure_2[22]).t["9vN0pz"]);
          obj7.children = jsx(closure_0(closure_2[20]).AlertActionButton, obj8, "confirm");
          obj1.actions = jsx(closure_0(closure_2[23]).AlertActions, obj7);
          openAlertResult = obj.openAlert("invalid-login-alert", jsx(closure_0(closure_2[20]).AlertModal, obj1));
          return;
        }
      }
    }
    noop = G;
    if (cResult[12] !== tmp4.raisedIcon) {
      class R {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[19]);
          tmp3 = jsx;
          obj1 = { header: null, title: null, content: null, actions: null };
          obj6 = { style: closure_1.raisedIcon, children: jsx(closure_0(closure_2[21]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
          obj1.header = jsx(View, obj6);
          intl = closure_0(closure_2[22]).intl;
          obj1.title = intl.string(closure_0(closure_2[22]).t.MKW8z2);
          intl2 = closure_0(closure_2[22]).intl;
          currentUser = closure_8.getCurrentUser();
          str = undefined;
          if (currentUser != null) {
            str = currentUser.username;
          }
          if (str == null) {
            str = "current user";
          }
          obj1.content = intl2.formatToPlainString(closure_0(closure_2[22]).t.YOeM7B, { username: str });
          obj7 = { children: null };
          obj8 = { onPress: closure_3, text: null };
          intl3 = tmp(tmp2[22]).intl;
          obj8.text = intl3.string(tmp(tmp2[22]).t["3PatSz"]);
          obj7.children = tmp3(tmp(tmp2[20]).AlertActionButton, obj8, "confirm");
          obj1.actions = tmp3(tmp(tmp2[23]).AlertActions, obj7);
          openAlertResult = obj.openAlert("already-logged-in-alert", tmp3(closure_0(closure_2[20]).AlertModal, obj1));
          return;
        }
      }
      cResult[12] = tmp4.raisedIcon;
      cResult[13] = R;
    } else {
      class R {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[19]);
          tmp3 = jsx;
          obj1 = { header: null, title: null, content: null, actions: null };
          obj6 = { style: closure_1.raisedIcon, children: jsx(closure_0(closure_2[21]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
          obj1.header = jsx(View, obj6);
          intl = closure_0(closure_2[22]).intl;
          obj1.title = intl.string(closure_0(closure_2[22]).t.MKW8z2);
          intl2 = closure_0(closure_2[22]).intl;
          currentUser = closure_8.getCurrentUser();
          str = undefined;
          if (currentUser != null) {
            str = currentUser.username;
          }
          if (str == null) {
            str = "current user";
          }
          obj1.content = intl2.formatToPlainString(closure_0(closure_2[22]).t.YOeM7B, { username: str });
          obj7 = { children: null };
          obj8 = { onPress: closure_3, text: null };
          intl3 = tmp(tmp2[22]).intl;
          obj8.text = intl3.string(tmp(tmp2[22]).t["3PatSz"]);
          obj7.children = tmp3(tmp(tmp2[20]).AlertActionButton, obj8, "confirm");
          obj1.actions = tmp3(tmp(tmp2[23]).AlertActions, obj7);
          openAlertResult = obj.openAlert("already-logged-in-alert", tmp3(closure_0(closure_2[20]).AlertModal, obj1));
          return;
        }
      }
    }
    closure_5 = R;
    if (cResult[14] === R) {
      class R {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[19]);
          tmp3 = jsx;
          obj1 = { header: null, title: null, content: null, actions: null };
          obj6 = { style: closure_1.raisedIcon, children: jsx(closure_0(closure_2[21]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
          obj1.header = jsx(View, obj6);
          intl = closure_0(closure_2[22]).intl;
          obj1.title = intl.string(closure_0(closure_2[22]).t.MKW8z2);
          intl2 = closure_0(closure_2[22]).intl;
          currentUser = closure_8.getCurrentUser();
          str = undefined;
          if (currentUser != null) {
            str = currentUser.username;
          }
          if (str == null) {
            str = "current user";
          }
          obj1.content = intl2.formatToPlainString(closure_0(closure_2[22]).t.YOeM7B, { username: str });
          obj7 = { children: null };
          obj8 = { onPress: closure_3, text: null };
          intl3 = tmp(tmp2[22]).intl;
          obj8.text = intl3.string(tmp(tmp2[22]).t["3PatSz"]);
          obj7.children = tmp3(tmp(tmp2[20]).AlertActionButton, obj8, "confirm");
          obj1.actions = tmp3(tmp(tmp2[23]).AlertActions, obj7);
          openAlertResult = obj.openAlert("already-logged-in-alert", tmp3(closure_0(closure_2[20]).AlertModal, obj1));
          return;
        }
      }
    }
    _require = onPress(function*() {
      if (null == closure_0) {
        tmp3(tmp44[15]).track(constants2.ONE_TIME_LOGIN_ERROR, { source: "native_modal", error_reason: "missing_token", error_message: "No token provided" });
        v2();
        c3 = 0;
      }
      if (authenticated.isAuthenticated()) {
        v3();
        c3 = 0;
      }
      tmp3(tmp44[15]).track(constants2.ONE_TIME_LOGIN_ATTEMPTED, { source: "native_modal" });
      tmp3(tmp44[15]);
      yield tmp3(tmp44[24]).oneTimeLogin(tmp53);
      if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = tmp44;
        const _Error = Error;
        let str = "Login failed";
        if (closure_128_1 instanceof Error) {
          str = closure_128_1.message;
        }
        closure_128_0 = str;
        tmp3(tmp44[15]).track(constants2.ONE_TIME_LOGIN_ERROR, { source: "native_modal", error_reason: "api_error", error_message: closure_128_0 });
        v2();
        v3 = 3;
        tmp3(tmp44[15]);
      } else if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        tmp3(tmp44[15]).track(constants2.LOGIN_SUCCESSFUL, { source: "native_modal", login_method: "one_time_login" });
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          closure_1_1(closure_1_2[16]).popWithKey("ONE_TIME_LOGIN_MODAL");
        }, 1500);
        c3 = 0;
        tmp3(tmp44[15]);
      }
      return value;
    });
    function t9() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[14] = R;
    cResult[15] = G;
    cResult[16] = token;
    cResult[17] = t9;
  }
  let obj = require("c");
  if (tmpResult.isAndroid()) {
    class R {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[19]);
        tmp3 = jsx;
        obj1 = { header: null, title: null, content: null, actions: null };
        obj6 = { style: closure_1.raisedIcon, children: jsx(closure_0(closure_2[21]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
        obj1.header = jsx(View, obj6);
        intl = closure_0(closure_2[22]).intl;
        obj1.title = intl.string(closure_0(closure_2[22]).t.MKW8z2);
        intl2 = closure_0(closure_2[22]).intl;
        currentUser = closure_8.getCurrentUser();
        str = undefined;
        if (currentUser != null) {
          str = currentUser.username;
        }
        if (str == null) {
          str = "current user";
        }
        obj1.content = intl2.formatToPlainString(closure_0(closure_2[22]).t.YOeM7B, { username: str });
        obj7 = { children: null };
        obj8 = { onPress: closure_3, text: null };
        intl3 = tmp(tmp2[22]).intl;
        obj8.text = intl3.string(tmp(tmp2[22]).t["3PatSz"]);
        obj7.children = tmp3(tmp(tmp2[20]).AlertActionButton, obj8, "confirm");
        obj1.actions = tmp3(tmp(tmp2[23]).AlertActions, obj7);
        openAlertResult = obj.openAlert("already-logged-in-alert", tmp3(closure_0(closure_2[20]).AlertModal, obj1));
        return;
      }
    }
  }
  cResult[0] = tmp5.bottom;
  cResult[1] = height;
  cResult[2] = "100%";
  tmp6 = str;
  tmpResult = require("utils/PlatformUtils");
}) : (function OneTimeLoginModal(token) {
  token = token.token;
  onPress = undefined;
  const tmp = closure_14();
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
    AnalyticsUtilsDefault.track(constants.DEEP_LINK_CLICKED, { source: "native_modal", destination: "one_time_login_native_modal", deep_link_provider: "native_app" });
  }, items1);
  onPress = onPress.useCallback(() => {
    closure_1(bottom[15]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "loading" });
    const obj = closure_1(bottom[15]);
    closure_1(bottom[16]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = closure_1(bottom[16]);
    token(bottom[17]).resetToAuthRoute();
  }, []);
  const callback1 = onPress.useCallback(() => {
    closure_1(bottom[15]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "already_logged_in" });
    const obj = closure_1(bottom[15]);
    closure_1(bottom[16]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = closure_1(bottom[16]);
    token(bottom[18]).transitionTo(constants.ME);
  }, []);
  const items2 = [onPress, tmp.raisedIcon];
  const callback2 = onPress.useCallback(() => {
    const obj2 = { header: null, title: null, content: null, actions: null };
    const obj = useAlertStore;
    obj2.header = __initData(hasOwnProperty, { style: closure_1.raisedIcon, children: __initData(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) });
    const intl = util.intl;
    obj2.title = intl.string(util.t.L6htwI);
    const intl2 = util.intl;
    obj2.content = intl2.string(util.t["4fnE/J"]);
    const obj4 = { children: null };
    const obj5 = { onPress, text: null };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t["9vN0pz"]);
    obj4.children = __initData(AlertModal.AlertActionButton, obj5, "confirm");
    obj2.actions = __initData(AlertModal.AlertActions, obj4);
    obj.openAlert("invalid-login-alert", __initData(AlertModal.AlertModal, obj2));
  }, items2);
  const items3 = [tmp.raisedIcon, callback1];
  const callback3 = onPress.useCallback(() => {
    const obj2 = { header: null, title: null, content: null, actions: null };
    const obj = useAlertStore;
    obj2.header = __initData(hasOwnProperty, { style: closure_1.raisedIcon, children: __initData(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) });
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
    obj4.children = __initData(AlertModal.AlertActionButton, obj5, "confirm");
    obj2.actions = __initData(AlertModal.AlertActions, obj4);
    obj.openAlert("already-logged-in-alert", __initData(AlertModal.AlertModal, obj2));
    const obj3 = { style: closure_1.raisedIcon, children: __initData(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
  }, items3);
  const items4 = [token, callback2, callback3];
  const callback4 = onPress.useCallback(height(function*() {
    if (null == token) {
      tmp3(tmp44[15]).track(constants.ONE_TIME_LOGIN_ERROR, { source: "native_modal", error_reason: "missing_token", error_message: "No token provided" });
      callback2();
      c3 = 0;
    }
    if (authenticated.isAuthenticated()) {
      callback3();
      c3 = 0;
    }
    tmp3(tmp44[15]).track(constants.ONE_TIME_LOGIN_ATTEMPTED, { source: "native_modal" });
    tmp3(tmp44[15]);
    yield tmp3(tmp44[24]).oneTimeLogin(tmp53);
    if (1 === tmp7) {
      c3 = 0;
      closure_128_1 = tmp44;
      const _Error = Error;
      let str = "Login failed";
      if (closure_128_1 instanceof Error) {
        str = closure_128_1.message;
      }
      closure_128_0 = str;
      tmp3(tmp44[15]).track(constants.ONE_TIME_LOGIN_ERROR, { source: "native_modal", error_reason: "api_error", error_message: closure_128_0 });
      closure_129_6();
      c5 = 3;
      tmp3(tmp44[15]);
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      tmp3(tmp44[15]).track(constants.LOGIN_SUCCESSFUL, { source: "native_modal", login_method: "one_time_login" });
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_1_1(closure_1_2[16]).popWithKey("ONE_TIME_LOGIN_MODAL");
      }, 1500);
      c3 = 0;
      tmp3(tmp44[15]);
    }
    return value;
  }), items4);
  const items5 = [callback4];
  const effect1 = onPress.useEffect(() => {
    callback4();
  }, items5);
  let obj = { style: memo, children: null };
  let obj2 = { absolute: true, wide: true, tall: true, gradientOverride: closure_11[5], mix: true, angleOverride: 0, mixAmount: null };
  let obj3 = { dark: token(4936).OverlayOpacity.LEVEL_1 };
  obj2.mixAmount = obj3;
  const items6 = [closure_12(ThemedGradientDefault, obj2), ];
  let obj4 = { style: tmp.container, children: null };
  let obj5 = { style: tmp.centerContent, children: null };
  const obj6 = { source: null, style: null };
  obj6.source = token(14061);
  obj6.style = tmp.logo;
  const items7 = [closure_12(FastImageDefault, obj6), ];
  const obj7 = { style: tmp.loadingContainer, children: null };
  const items8 = [closure_12(callback2, {}), ];
  const obj8 = { variant: "text-lg/semibold", children: null };
  let intl = token(1126).intl;
  obj8.children = intl.string(token(1126).t.W9uNdG);
  items8[1] = closure_12(token(5088).Text, obj8);
  obj7.children = items8;
  items7[1] = closure_13(callback1, obj7);
  obj5.children = items7;
  const items9 = [closure_13(callback1, obj5), ];
  const obj9 = { style: tmp.bottomContent, children: null };
  const obj10 = { variant: "text-sm/normal", children: null };
  let intl2 = token(1126).intl;
  obj10.children = intl2.string(token(1126).t["ZXe5/Y"]);
  const items10 = [closure_12(token(5088).Text, obj10), ];
  const obj11 = { textColor: "text-default", text: null, variant: "text-sm/medium", onPress: null, textStyle: null };
  let intl3 = token(1126).intl;
  obj11.text = intl3.string(token(1126).t.FIEwfG);
  obj11.onPress = onPress;
  obj11.textStyle = tmp.link;
  items10[1] = closure_12(token(6622).LinkButton, obj11);
  obj9.children = items10;
  items9[1] = closure_13(callback1, obj9);
  obj4.children = items9;
  items6[1] = closure_13(callback1, obj4);
  obj.children = items6;
  return closure_13(callback1, obj);
});