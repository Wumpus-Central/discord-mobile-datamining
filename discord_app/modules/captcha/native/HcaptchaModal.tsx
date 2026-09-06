// === Module 17291: HcaptchaModal ===

// Module 17291 (HcaptchaModal)
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 11277 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
class HcaptchaModal {
  constructor(arg0) {
    onMessage = global.onMessage;
    tmp = closure_4(global, closure_3);
    tmp2 = closure_13();
    tmp3 = onMessage;
    tmp4 = closure_2;
    obj = onMessage(closure_2[8]);
    items = [];
    items[0] = closure_10;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    obj2 = onMessage(closure_2[9]);
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
      tmp6 = prop === tmp3(tmp4[10]).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
    }
    tmp9 = closure_1;
    rect = closure_1(tmp4[11])();
    intl = tmp3(tmp4[12]).intl;
    items1 = [];
    items1[0] = onMessage;
    stringResult = intl.string(tmp3(tmp4[12]).t.wsoPhr);
    callback = closure_5.useCallback(() => {
      if (onMessage != null) {
        let obj = { nativeEvent: null };
        obj = { data: SharedCaptchaUtils.CaptchaError.CANCEL };
        obj.nativeEvent = obj;
        tmp(obj);
      }
    }, items1);
    closure_1 = callback;
    tmp12 = closure_1(tmp4[14])(() => {
      callback();
      return true;
    });
    tmp13 = jsxs;
    tmp14 = View;
    obj = { style: tmp2.container, children: null };
    tmp13Result = !tmp6;
    if (!tmp6) {
      obj1 = { spacing: null, align: "center", children: null };
      obj1.spacing = tmp9(tmp4[16]).space.PX_16;
      tmp16 = jsx;
      obj2 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
      obj2.style = tmp2.title;
      obj2.children = stringResult;
      items2 = [, ];
      items2[0] = jsx(tmp3(tmp4[17]).Text, obj2);
      tmp17 = ActivityIndicator;
      tmp3Result = tmp3(tmp4[18]);
      WHITE = undefined;
      if (tmp3Result.isAndroid()) {
        WHITE = tmp9(tmp4[16]).unsafe_rawColors.WHITE;
      }
      obj3 = { size: "small", color: null };
      obj3.color = WHITE;
      items2[1] = tmp16(tmp17, obj3);
      obj1.children = items2;
      tmp13Result = tmp13(tmp3(tmp4[15]).Stack, obj1);
    }
    items3 = [, , ];
    items3[0] = tmp13Result;
    obj4 = { style: StyleSheet.absoluteFillObject, children: null };
    obj5 = {};
    tmp9Result = tmp9(tmp4[19]);
    merged = Object.assign(tmp);
    obj5.languageCode = closure_9.locale;
    obj5.onMessage = onMessage;
    obj4.children = jsx(tmp9Result, obj5);
    items3[1] = jsx(tmp14, obj4);
    obj6 = { style: null, pointerEvents: "box-none", children: null };
    items4 = [, ];
    items4[0] = tmp2.closeButtonContainer;
    obj7 = { paddingTop: rect.top + tmp9(tmp4[16]).space.PX_8, paddingLeft: rect.left + tmp9(tmp4[16]).space.PX_16 };
    items4[1] = obj7;
    obj6.style = items4;
    obj8 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    intl2 = tmp3(tmp4[12]).intl;
    obj8.accessibilityLabel = intl2.string(tmp3(tmp4[12]).t.cpT0Cq);
    obj8.onPress = callback;
    obj8.style = tmp2.closeButtonHitArea;
    obj9 = { color: tmp9(tmp4[16]).colors.INTERACTIVE_ICON_DEFAULT };
    obj8.children = jsx(tmp3(tmp4[21]).XLargeIcon, obj9);
    obj6.children = jsx(tmp3(tmp4[20]).PressableOpacity, obj8);
    items3[2] = jsx(tmp14, obj6);
    obj.children = items3;
    return tmp13(tmp14, obj);
  }
}
let closure_3 = ["onMessage", "onClose"];
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7, StyleSheet: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" }, title: { textAlign: "center" }, closeButtonContainer: { position: "absolute", top: 0, left: 0, zIndex: 2 }, closeButtonHitArea: { minWidth: 44, minHeight: 44, justifyContent: "center", alignItems: "center" } });
HcaptchaModal.modalConfig = { animation: fn(1074).ModalAnimation.FADE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/native/HcaptchaModal.tsx");

export default HcaptchaModal;