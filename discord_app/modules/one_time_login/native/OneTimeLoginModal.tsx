// discord_app/modules/one_time_login/native/OneTimeLoginModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import getMixedGradientColorDefault from "../../client_themes/native/ThemedGradient.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../stores/AuthenticationStore.tsx";
import closure_9 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import { BACKGROUND_GRADIENT_PRESETS_MOBILE as closure_12 } from "../../client_themes/ClientThemesConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c5, ActivityIndicator: closure_6, Image: error } = get_ActivityIndicator);
({ Routes: c10, AnalyticEvents: unpackModuleId } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = {
  container: null,
  centerContent: null,
  bottomContent: null,
  logo: null,
  loadingContainer: null,
  link: null,
  raisedIcon: null,
};
createCacheKey = {
  padding: 24,
  paddingTop: 128,
  paddingBottom: 96,
  borderRadius: ThemesDefault.radii.md,
  alignItems: "center",
  flex: 1,
  justifyContent: "space-between",
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[3] = { width: 80, height: 80, alignSelf: "center" };
let obj1 = { alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[4] = {
  display: "flex",
  flexDirection: "row",
  gap: ThemesDefault.space.PX_8,
  alignItems: "center",
  marginBottom: 48,
};
let obj2 = {
  display: "flex",
  flexDirection: "row",
  gap: ThemesDefault.space.PX_8,
  alignItems: "center",
  marginBottom: 48,
};
createCacheKey[5] = {
  textDecorationLine: "underline",
  textDecorationColor: ThemesDefault.colors.TEXT_DEFAULT,
  flexShrink: 1,
};
const obj3 = { textDecorationLine: "underline", textDecorationColor: ThemesDefault.colors.TEXT_DEFAULT, flexShrink: 1 };
createCacheKey[6] = {
  width: 64,
  height: 64,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: ThemesDefault.radii.round,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignSelf: "center",
};
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj4 = {
  width: 64,
  height: 64,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: ThemesDefault.radii.round,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignSelf: "center",
};
const result = require("set").fileFinishedImporting("modules/one_time_login/native/OneTimeLoginModal.tsx");

export default function OneTimeLoginModal(token) {
  token = token.token;
  importDefault = undefined;
  dependencyMap = undefined;
  let height;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  const tmp = callback3();
  importDefault = tmp;
  const tmp2 = useSafeAreaInsetsDefault();
  dependencyMap = tmp2;
  height = useWindowDimensionsDefault().height;
  const items = [tmp2.bottom, height];
  const items1 = [token];
  const memo = callback.useMemo(() => {
    height = "100%";
    if (obj.isAndroid()) {
      height = height + bottom.bottom;
    }
    return { height };
  }, items);
  const effect = callback.useEffect(() => {
    let obj = lib(bottom[13]);
    obj = { has_token: null != token };
    obj.track(closure_1_11.ONE_TIME_LOGIN_MODAL_OPENED, obj);
    lib(bottom[13]).track(closure_1_11.DEEP_LINK_CLICKED, {
      source: "native_modal",
      destination: "one_time_login_native_modal",
      deep_link_provider: "native_app",
    });
  }, items1);
  callback = callback.useCallback(() => {
    lib(bottom[13]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "loading" });
    const obj = lib(bottom[13]);
    lib(bottom[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = lib(bottom[14]);
    token(bottom[15]).resetToAuthRoute();
  }, []);
  callback1 = callback.useCallback(() => {
    lib(bottom[13]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "already_logged_in" });
    const obj = lib(bottom[13]);
    lib(bottom[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = lib(bottom[14]);
    token(bottom[16]).transitionTo(constants.ME);
  }, []);
  const items2 = [callback, tmp.raisedIcon];
  callback2 = callback.useCallback(() => {
    let obj = token(bottom[17]);
    obj = { header: null, title: null, content: null, actions: null };
    obj = {
      style: lib.raisedIcon,
      children: closure_1_13(token(bottom[19]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }),
    };
    obj[0] = closure_1_13(callback1, obj);
    const intl = token(bottom[20]).intl;
    obj[1] = intl.string(token(bottom[20]).t.L6htwI);
    const intl2 = token(bottom[20]).intl;
    obj[2] = intl2.string(token(bottom[20]).t["4fnE/J"]);
    obj1 = { children: null };
    const obj2 = { onPress: callback, text: null };
    const intl3 = token(bottom[20]).intl;
    obj2[1] = intl3.string(token(bottom[20]).t["9vN0pz"]);
    obj1[0] = closure_1_13(token(bottom[18]).AlertActionButton, obj2, "confirm");
    obj[3] = closure_1_13(token(bottom[21]).AlertActions, obj1);
    obj.openAlert("invalid-login-alert", closure_1_13(token(bottom[18]).AlertModal, obj));
  }, items2);
  const items3 = [tmp.raisedIcon, callback1];
  callback3 = callback.useCallback(() => {
    let obj = token(bottom[17]);
    obj = { header: null, title: null, content: null, actions: null };
    obj = {
      style: lib.raisedIcon,
      children: closure_1_13(token(bottom[19]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }),
    };
    obj[0] = closure_1_13(callback1, obj);
    const intl = token(bottom[20]).intl;
    obj[1] = intl.string(token(bottom[20]).t.MKW8z2);
    const intl2 = token(bottom[20]).intl;
    const currentUser = closure_1_9.getCurrentUser();
    let str;
    if (currentUser != null) {
      str = currentUser.username;
    }
    if (str == null) {
      str = "current user";
    }
    obj[2] = intl2.formatToPlainString(token(bottom[20]).t.YOeM7B, { username: str });
    obj1 = { children: null };
    const obj2 = { onPress: callback1, text: null };
    const intl3 = tmp(tmp2[20]).intl;
    obj2[1] = intl3.string(token(bottom[20]).t["3PatSz"]);
    obj1[0] = closure_1_13(token(bottom[18]).AlertActionButton, obj2, "confirm");
    obj[3] = closure_1_13(token(bottom[21]).AlertActions, obj1);
    obj.openAlert("already-logged-in-alert", closure_1_13(token(bottom[18]).AlertModal, obj));
  }, items3);
  const items4 = [token, callback2, callback3];
  callback4 = callback.useCallback(
    height(function* () {
      let lib = tmp3;
      c3 = 1;
      if (null == closure_1_0) {
        lib(closure_1_2[13]).track(closure_1_11.ONE_TIME_LOGIN_ERROR, {
          source: "native_modal",
          error_reason: "missing_token",
          error_message: "No token provided",
        });
        closure_1_6();
        c3 = 0;
      }
      if (closure_1_8.isAuthenticated()) {
        closure_1_7();
        c3 = 0;
      }
      let obj4 = lib(closure_1_2[13]);
      obj4.track(closure_1_11.ONE_TIME_LOGIN_ATTEMPTED, { source: "native_modal" });
      const obj5 = lib(closure_1_2[22]);
      yield obj5.oneTimeLogin(tmp54);
      if (1 === tmp7) {
        c3 = 0;
        lib = closure_2;
        const _Error = Error;
        let str = "Login failed";
        if (lib instanceof Error) {
          str = lib.message;
        }
        const obj2 = lib(closure_1_2[13]);
        obj4 = { source: "native_modal", error_reason: "api_error", error_message: null };
        obj4[2] = str;
        obj2.track(closure_1_11.ONE_TIME_LOGIN_ERROR, obj4);
        closure_1_6();
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = lib(closure_1_2[13]);
        obj.track(closure_1_11.LOGIN_SUCCESSFUL, { source: "native_modal", login_method: "one_time_login" });
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          tmp3(tmp44[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
        }, 1500);
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    }),
    items4,
  );
  const items5 = [callback4];
  const effect1 = callback.useEffect(() => {
    callback4();
  }, items5);
  let obj = { style: memo, children: null };
  obj = {
    absolute: true,
    wide: true,
    tall: true,
    gradientOverride: table[5],
    mix: true,
    angleOverride: 0,
    mixAmount: null,
  };
  obj = { dark: token(4296).OverlayOpacity.LEVEL_1 };
  obj[6] = obj;
  const items6 = [callback(getMixedGradientColorDefault, obj)];
  obj1 = { style: tmp.container, children: null };
  let obj2 = { style: tmp.centerContent, children: null };
  const tmp11 = getMixedGradientColorDefault;
  const items7 = [callback(callback3, { source: token(13601), style: tmp.logo })];
  let obj4 = { style: tmp.loadingContainer, children: null };
  const items8 = [callback(callback2, {})];
  let obj5 = { variant: "text-lg/semibold", children: null };
  let intl = token(1236).intl;
  obj5[1] = intl.string(token(1236).t.W9uNdG);
  items8[1] = callback(token(4474).Text, obj5);
  obj4[1] = items8;
  items7[1] = callback2(callback1, obj4);
  obj2[1] = items7;
  const items9 = [callback2(callback1, obj2)];
  const obj6 = { style: tmp.bottomContent, children: null };
  const obj7 = { variant: "text-sm/normal", children: null };
  let intl2 = token(1236).intl;
  obj7[1] = intl2.string(token(1236).t["ZXe5/Y"]);
  const items10 = [callback(token(4474).Text, obj7)];
  const obj8 = { textColor: "text-default", text: null, variant: "text-sm/medium", onPress: null, textStyle: null };
  let intl3 = token(1236).intl;
  obj8[1] = intl3.string(token(1236).t.FIEwfG);
  obj8[3] = callback;
  obj8[4] = tmp.link;
  items10[1] = callback(token(7715).LinkButton, obj8);
  obj6[1] = items10;
  items9[1] = callback2(callback1, obj6);
  obj1[1] = items9;
  items6[1] = callback2(callback1, obj1);
  obj[1] = items6;
  return callback2(callback1, obj);
}
