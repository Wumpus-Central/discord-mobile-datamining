// discord_app/modules/one_time_login/native/OneTimeLoginModal.tsx
import closure_3 from "ME";
import CircleErrorIcon from "CircleErrorIcon";
import get_ActivityIndicator from "useAlertStore";
import fetchFingerprint from "fetchFingerprint";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { BACKGROUND_GRADIENT_PRESETS_MOBILE as closure_12 } from "ThemeTypes";
import jsxProd from "getAlertModalItemKey";
import createCacheKey from "createCacheKey";
import { getMixedGradientColor } from "../../client_themes/native/ThemedGradient.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";
import { useWindowDimensions } from "../../screen/useWindowDimensions.native.tsx";

let c10;
let c5;
let closure_14;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
({ View: c5, ActivityIndicator: closure_6, Image: error } = get_ActivityIndicator);
({ Routes: c10, AnalyticEvents: unpackModuleId } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { container: null, centerContent: null, bottomContent: null, logo: null, loadingContainer: null, link: null, raisedIcon: null };
createCacheKey = { padding: 24, paddingTop: 128, paddingBottom: 96, borderRadius: require("Themes").radii.md, alignItems: "center", flex: 1, justifyContent: "space-between" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[3] = { width: 80, height: 80, alignSelf: "center" };
let obj1 = { alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[4] = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_8, alignItems: "center", marginBottom: 48 };
let obj2 = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_8, alignItems: "center", marginBottom: 48 };
createCacheKey[5] = { textDecorationLine: "underline", textDecorationColor: require("Themes").colors.TEXT_DEFAULT, flexShrink: 1 };
const obj3 = { textDecorationLine: "underline", textDecorationColor: require("Themes").colors.TEXT_DEFAULT, flexShrink: 1 };
createCacheKey[6] = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignSelf: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignSelf: "center" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/one_time_login/native/OneTimeLoginModal.tsx");

export default function OneTimeLoginModal(token) {
  token = token.token;
  let importDefault;
  let dependencyMap;
  let height;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  const tmp = createCacheKey();
  importDefault = tmp;
  const tmp2 = useSafeAreaInsets();
  dependencyMap = tmp2;
  height = useWindowDimensions().height;
  const items = [tmp2.bottom, height];
  const items1 = [token];
  const memo = callback.useMemo(() => {
    let height = "100%";
    if (obj.isAndroid()) {
      height = height + _undefined2.bottom;
    }
    return { height };
  }, items);
  const effect = callback.useEffect(() => {
    let obj = _undefined(_undefined2[13]);
    obj = { has_token: null != token };
    obj.track(outer1_11.ONE_TIME_LOGIN_MODAL_OPENED, obj);
    _undefined(_undefined2[13]).track(outer1_11.DEEP_LINK_CLICKED, { source: "native_modal", destination: "one_time_login_native_modal", deep_link_provider: "native_app" });
  }, items1);
  callback = callback.useCallback(() => {
    _undefined(_undefined2[13]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "loading" });
    const obj = _undefined(_undefined2[13]);
    _undefined(_undefined2[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = _undefined(_undefined2[14]);
    token(_undefined2[15]).resetToAuthRoute();
  }, []);
  callback1 = callback.useCallback(() => {
    _undefined(_undefined2[13]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "already_logged_in" });
    const obj = _undefined(_undefined2[13]);
    _undefined(_undefined2[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = _undefined(_undefined2[14]);
    token(_undefined2[16]).transitionTo(constants.ME);
  }, []);
  const items2 = [callback, tmp.raisedIcon];
  callback2 = callback.useCallback(() => {
    let obj = token(_undefined2[17]);
    obj = { header: null, title: null, content: null, actions: null };
    obj = { style: _undefined.raisedIcon, children: null };
    obj[1] = outer1_13(token(_undefined2[19]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } });
    obj[0] = outer1_13(callback1, obj);
    const intl = token(_undefined2[20]).intl;
    obj[1] = intl.string(token(_undefined2[20]).t.L6htwI);
    const intl2 = token(_undefined2[20]).intl;
    obj[2] = intl2.string(token(_undefined2[20]).t["4fnE/J"]);
    const obj1 = { children: null };
    const obj2 = { onPress: callback, text: null };
    const intl3 = token(_undefined2[20]).intl;
    obj2[1] = intl3.string(token(_undefined2[20]).t["9vN0pz"]);
    obj1[0] = outer1_13(token(_undefined2[18]).AlertActionButton, obj2, "confirm");
    obj[3] = outer1_13(token(_undefined2[21]).AlertActions, obj1);
    obj.openAlert("invalid-login-alert", outer1_13(token(_undefined2[18]).AlertModal, obj));
  }, items2);
  const items3 = [tmp.raisedIcon, callback1];
  callback3 = callback.useCallback(() => {
    let obj = token(_undefined2[17]);
    obj = { header: null, title: null, content: null, actions: null };
    obj = { style: _undefined.raisedIcon, children: null };
    obj[1] = outer1_13(token(_undefined2[19]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } });
    obj[0] = outer1_13(callback1, obj);
    const intl = token(_undefined2[20]).intl;
    obj[1] = intl.string(token(_undefined2[20]).t.MKW8z2);
    const intl2 = token(_undefined2[20]).intl;
    const currentUser = outer1_9.getCurrentUser();
    let str;
    if (currentUser != null) {
      str = currentUser.username;
    }
    if (str == null) {
      str = "current user";
    }
    obj[2] = intl2.formatToPlainString(token(_undefined2[20]).t.YOeM7B, { username: str });
    const obj1 = { children: null };
    const obj2 = { onPress: callback1, text: null };
    const intl3 = tmp(tmp2[20]).intl;
    obj2[1] = intl3.string(token(_undefined2[20]).t["3PatSz"]);
    obj1[0] = outer1_13(token(_undefined2[18]).AlertActionButton, obj2, "confirm");
    obj[3] = outer1_13(token(_undefined2[21]).AlertActions, obj1);
    obj.openAlert("already-logged-in-alert", outer1_13(token(_undefined2[18]).AlertModal, obj));
  }, items3);
  const items4 = [token, callback2, callback3];
  callback4 = callback.useCallback(height(function*() {
    let closure_1 = tmp3;
    let c3 = 1;
    if (null == outer1_0) {
      outer1_1(outer1_2[13]).track(outer1_11.ONE_TIME_LOGIN_ERROR, { source: "native_modal", error_reason: "missing_token", error_message: "No token provided" });
      outer1_6();
      c3 = 0;
    }
    if (outer1_8.isAuthenticated()) {
      outer1_7();
      c3 = 0;
    }
    let obj4 = outer1_1(outer1_2[13]);
    obj4.track(outer1_11.ONE_TIME_LOGIN_ATTEMPTED, { source: "native_modal" });
    const obj5 = outer1_1(outer1_2[22]);
    yield obj5.oneTimeLogin(tmp54);
    if (1 === tmp7) {
      c3 = 0;
      outer1_1 = closure_2;
      const _Error = Error;
      let str = "Login failed";
      if (outer1_1 instanceof Error) {
        str = outer1_1.message;
      }
      const obj2 = outer1_1(outer1_2[13]);
      obj4 = { source: "native_modal", error_reason: "api_error", error_message: null };
      obj4[2] = str;
      obj2.track(outer1_11.ONE_TIME_LOGIN_ERROR, obj4);
      outer1_6();
      let c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const obj = outer1_1(outer1_2[13]);
      obj.track(outer1_11.LOGIN_SUCCESSFUL, { source: "native_modal", login_method: "one_time_login" });
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        tmp3(tmp44[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
      }, 1500);
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  }), items4);
  const items5 = [callback4];
  const effect1 = callback.useEffect(() => {
    callback4();
  }, items5);
  let obj = { style: memo, children: null };
  obj = { absolute: true, wide: true, tall: true, gradientOverride: table[5], mix: true, angleOverride: 0, mixAmount: null };
  obj = { dark: null };
  obj[0] = token(4194).OverlayOpacity.LEVEL_1;
  obj[6] = obj;
  const items6 = [callback(getMixedGradientColor, obj), ];
  let obj1 = { style: tmp.container, children: null };
  let obj2 = { style: tmp.centerContent, children: null };
  const tmp11 = getMixedGradientColor;
  const items7 = [callback(callback3, { source: token(13322), style: tmp.logo }), ];
  let obj4 = { style: tmp.loadingContainer, children: null };
  const items8 = [callback(callback2, {}), ];
  let obj5 = { variant: "text-lg/semibold", children: null };
  let intl = token(1236).intl;
  obj5[1] = intl.string(token(1236).t.W9uNdG);
  items8[1] = callback(token(4734).Text, obj5);
  obj4[1] = items8;
  items7[1] = callback2(callback1, obj4);
  obj2[1] = items7;
  const items9 = [callback2(callback1, obj2), ];
  const obj6 = { style: tmp.bottomContent, children: null };
  const obj7 = { variant: "text-sm/normal", children: null };
  let intl2 = token(1236).intl;
  obj7[1] = intl2.string(token(1236).t["ZXe5/Y"]);
  const items10 = [callback(token(4734).Text, obj7), ];
  const obj8 = { textColor: "text-default", text: null, variant: "text-sm/medium", onPress: null, textStyle: null };
  let intl3 = token(1236).intl;
  obj8[1] = intl3.string(token(1236).t.FIEwfG);
  obj8[3] = callback;
  obj8[4] = tmp.link;
  items10[1] = callback(token(8580).LinkButton, obj8);
  obj6[1] = items10;
  items9[1] = callback2(callback1, obj6);
  obj1[1] = items9;
  items6[1] = callback2(callback1, obj1);
  obj[1] = items6;
  return callback2(callback1, obj);
};