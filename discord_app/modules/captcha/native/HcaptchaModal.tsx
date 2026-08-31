// === Module 16833: HcaptchaModal ===

// Module 16833 (HcaptchaModal)
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "_getSystemLocale" /* 1996 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
class HcaptchaModal {
  constructor(arg0) {
    onMessage = global.onMessage;
    tmp = closure_4(global, closure_3);
    tmp2 = closure_13();
    tmp3 = onMessage;
    tmp4 = closure_2;
    obj = require("initialize");
    items = [];
    items[0] = closure_10;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    obj2 = require("useNavigation");
    navigation = obj2.useNavigation();
    routes = navigation.getState().routes;
    tmp6 = routes.length > 0;
    if (tmp6) {
      str = "auth";
      tmp6 = "auth" === routes[0].name;
    }
    if (!tmp6) {
      tmp7 = null;
      prop = undefined;
      if (stateFromStores != null) {
        prop = stateFromStores.ageVerificationStatus;
      }
      tmp6 = prop === require("PermissionOverwriteType").AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
    }
    tmp9 = closure_1;
    tmp10 = require("useSafeAreaInsets")();
    intl = require("getSystemLocale").intl;
    items1 = [];
    items1[0] = onMessage;
    stringResult = intl.string(require("getSystemLocale").t.wsoPhr);
    callback = closure_5.useCallback(() => {
      if (onMessage != null) {
        let obj = { nativeEvent: null };
        obj = { data: null };
        obj[0] = onMessage(closure_1_2[13]).CaptchaError.CANCEL;
        obj[0] = obj;
        tmp(obj);
      }
    }, items1);
    closure_1 = callback;
    tmp13 = require("useBackPressHandler")(() => {
      callback();
      return true;
    });
    tmp14 = jsxs;
    tmp15 = View;
    obj = { style: tmp2.container, children: null };
    tmp14Result = !tmp6;
    if (!tmp6) {
      obj1 = { spacing: null, align: "center", children: null };
      obj1[0] = require("Themes").space.PX_16;
      tmp17 = jsx;
      obj2 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
      obj2[3] = tmp2.title;
      obj2[4] = stringResult;
      items2 = [, ];
      items2[0] = jsx(require("Text").Text, obj2);
      tmp18 = ActivityIndicator;
      tmp3Result = require("set");
      WHITE = undefined;
      if (tmp3Result.isAndroid()) {
        WHITE = require("Themes").unsafe_rawColors.WHITE;
      }
      obj3 = { size: "small", color: null };
      obj3[1] = WHITE;
      items2[1] = tmp17(tmp18, obj3);
      obj1[2] = items2;
      tmp14Result = tmp14(require("Stack").Stack, obj1);
    }
    items3 = [, , ];
    items3[0] = tmp14Result;
    obj4 = { style: StyleSheet.absoluteFillObject, children: null };
    obj5 = {};
    tmp9Result = require("siteKey");
    merged = Object.assign(tmp);
    obj5.languageCode = closure_9.locale;
    obj5.onMessage = onMessage;
    obj4[1] = jsx(tmp9Result, obj5);
    items3[1] = jsx(tmp15, obj4);
    obj6 = { style: null, pointerEvents: "box-none", children: null };
    items4 = [, ];
    items4[0] = tmp2.closeButtonContainer;
    obj7 = { paddingTop: top + require("Themes").space.PX_8, paddingLeft: left + require("Themes").space.PX_16 };
    ({ top, left } = tmp10);
    items4[1] = obj7;
    obj6[0] = items4;
    obj8 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    intl2 = require("getSystemLocale").intl;
    obj8[1] = intl2.string(require("getSystemLocale").t.cpT0Cq);
    obj8[2] = callback;
    obj8[3] = tmp2.closeButtonHitArea;
    obj9 = { color: require("Themes").colors.INTERACTIVE_ICON_DEFAULT };
    obj8[4] = jsx(require("XLargeIcon").XLargeIcon, obj9);
    obj6[2] = jsx(require("PressableBase").PressableOpacity, obj8);
    items3[2] = jsx(tmp15, obj6);
    obj[1] = items3;
    return tmp14(tmp15, obj);
  }
}
let closure_3 = ["onMessage", "onClose"];
({ ActivityIndicator: closure_6, View: error, StyleSheet: closure_8 } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" }, title: { textAlign: "center" }, closeButtonContainer: { position: "absolute", top: 0, left: 0, zIndex: 2 }, closeButtonHitArea: { minWidth: 44, minHeight: 44, justifyContent: "center", alignItems: "center" } });
HcaptchaModal.modalConfig = { animation: require("ME").ModalAnimation.FADE };
const result = require("set").fileFinishedImporting("modules/captcha/native/HcaptchaModal.tsx");

export default HcaptchaModal;