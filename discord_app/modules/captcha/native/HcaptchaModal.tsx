// discord_app/modules/captcha/native/HcaptchaModal.tsx
import SharedCaptchaUtils from "../SharedCaptchaUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

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
        const obj = { nativeEvent: null };
        const obj2 = { data: SharedCaptchaUtils.CaptchaError.CANCEL };
        obj.nativeEvent = obj2;
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
    obj1 = { style: tmp2.container, children: null };
    tmp13Result = !tmp6;
    if (!tmp6) {
      obj15 = { spacing: null, align: "center", children: null };
      obj15.spacing = tmp9(tmp4[16]).space.PX_16;
      tmp16 = jsx;
      obj16 = {
        accessibilityRole: "header",
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        style: null,
        children: null,
      };
      obj16.style = tmp2.title;
      obj16.children = stringResult;
      items2 = [,];
      items2[0] = jsx(tmp3(tmp4[17]).Text, obj16);
      tmp17 = ActivityIndicator;
      tmp3Result = tmp3(tmp4[18]);
      WHITE = undefined;
      if (tmp3Result.isAndroid()) {
        WHITE = tmp9(tmp4[16]).unsafe_rawColors.WHITE;
      }
      obj17 = { size: "small", color: null };
      obj17.color = WHITE;
      items2[1] = tmp16(tmp17, obj17);
      obj15.children = items2;
      tmp13Result = tmp13(tmp3(tmp4[15]).Stack, obj15);
    }
    items3 = [, ,];
    items3[0] = tmp13Result;
    obj18 = { style: StyleSheet.absoluteFillObject, children: null };
    obj19 = {};
    tmp9Result = tmp9(tmp4[19]);
    merged = Object.assign(tmp);
    obj19.languageCode = closure_9.locale;
    obj19.onMessage = onMessage;
    obj18.children = jsx(tmp9Result, obj19);
    items3[1] = jsx(tmp14, obj18);
    obj20 = { style: null, pointerEvents: "box-none", children: null };
    items4 = [,];
    items4[0] = tmp2.closeButtonContainer;
    obj21 = { paddingTop: rect.top + tmp9(tmp4[16]).space.PX_8, paddingLeft: rect.left + tmp9(tmp4[16]).space.PX_16 };
    items4[1] = obj21;
    obj20.style = items4;
    obj22 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    intl2 = tmp3(tmp4[12]).intl;
    obj22.accessibilityLabel = intl2.string(tmp3(tmp4[12]).t.cpT0Cq);
    obj22.onPress = callback;
    obj22.style = tmp2.closeButtonHitArea;
    obj23 = { color: tmp9(tmp4[16]).colors.INTERACTIVE_ICON_DEFAULT };
    obj22.children = jsx(tmp3(tmp4[21]).XLargeIcon, obj23);
    obj20.children = jsx(tmp3(tmp4[20]).PressableOpacity, obj22);
    items3[2] = jsx(tmp14, obj20);
    obj1.children = items3;
    return tmp13(tmp14, obj1);
  }
}
let closure_3 = ["onMessage", "onClose"];
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7, StyleSheet: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4638);
createStyles.createStyles({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { textAlign: "center" },
  closeButtonContainer: { position: "absolute", top: 0, left: 0, zIndex: 2 },
  closeButtonHitArea: { minWidth: 44, minHeight: 44, justifyContent: "center", alignItems: "center" },
});
HcaptchaModal.modalConfig = { animation: fn(1074).ModalAnimation.FADE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/native/HcaptchaModal.tsx");

export default HcaptchaModal;
