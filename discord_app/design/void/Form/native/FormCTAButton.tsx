// discord_app/design/void/Form/native/FormCTAButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import RowButton from "../../../components/TableRow/native/RowButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../../modules/rebrand/native/TextStyles.tsx";

require = fn;
class FormCTAButton {
  constructor(arg0) {
    BRAND = global.color;
    if (undefined === BRAND) {
      tmp = closure_10;
      BRAND = closure_10.BRAND;
    }
    fontSize = global.fontSize;
    num = 16;
    if (undefined !== fontSize) {
      num = fontSize;
    }
    alignLeft = global.alignLeft;
    alignLeft2 = undefined !== alignLeft && alignLeft;
    disabled = global.disabled;
    tmp2 = undefined !== disabled && disabled;
    loading = global.loading;
    tmp3 = undefined !== loading && loading;
    ({ testID, onPress } = global);
    tmp4 = closure_9();
    tmp5 = jsx;
    tmp6 = closure_0;
    tmp7 = closure_1;
    items = [, , ,];
    items[0] = tmp4.text;
    tmp8 = closure_10;
    if (closure_10.BRAND === BRAND) {
      textWarning = tmp4.textBrand;
    } else if (tmp8.DANGER === BRAND) {
      textWarning = tmp4.textDanger;
    } else if (tmp8.WARNING === BRAND) {
      textWarning = tmp4.textWarning;
    }
    items[1] = textWarning;
    items[2] = { fontSize: num };
    if (alignLeft2) {
      alignLeft2 = tmp4.alignLeft;
    }
    items[3] = alignLeft2;
    tmp5Result = tmp5(closure_0(closure_1[8]).LegacyText, { style: items, children: global.label });
    if (tmp3) {
      tmp10 = ActivityIndicator;
      obj = { color: null };
      obj.color = BRAND;
      tmp5Result = tmp5(ActivityIndicator, obj);
    }
    obj1 = { style: null, children: null };
    tmp11 = View;
    if (closure_2.useContext(tmp6(tmp7[9]).RedesignCompatContext)) {
      obj1.style = tmp4.rowButton;
      obj5 = { label: null, onPress: null, arrow: false, disabled: null, testID: null };
      obj5.label = tmp5Result;
      obj5.onPress = onPress;
      if (!tmp2) {
        tmp2 = tmp3;
      }
      obj5.disabled = tmp2;
      obj5.testID = testID;
      obj1.children = tmp5(tmp6(tmp7[10]).RowButton, obj5);
      tmp16 = obj1;
    } else {
      items1 = [, ,];
      items1[0] = tmp4.sectionBody;
      disabled2 = tmp2;
      if (tmp2) {
        disabled2 = tmp4.disabled;
      }
      items1[1] = disabled2;
      items1[2] = global.style;
      obj1.style = items1;
      obj6 = {
        testID: null,
        accessibilityRole: "button",
        onPress: null,
        style: null,
        disabled: null,
        android_ripple: null,
        children: null,
      };
      obj6.testID = testID;
      obj6.onPress = onPress;
      obj6.style = tmp4.button;
      tmp13 = tmp2;
      tmp12 = Pressable;
      if (!tmp2) {
        tmp13 = tmp3;
      }
      obj6.disabled = tmp13;
      tmp14 = getThemedRippleConfig;
      tmp15 = ANDROID_FOREGROUND_RIPPLE;
      obj6.android_ripple = getThemedRippleConfig(ANDROID_FOREGROUND_RIPPLE);
      obj6.children = tmp5Result;
      obj1.children = tmp5(tmp12, obj6);
      tmp16 = obj1;
    }
    return tmp5(tmp11, tmp16);
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, Pressable: closure_4, Platform, StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const FormConstants = fn(1181);
({ ANDROID_FOREGROUND_RIPPLE: metroRequire, getThemedRippleConfig: closure_7 } = FormConstants);
const Fonts = fn(1074).Fonts;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = {
  rowButton: { paddingHorizontal: 16 },
  sectionBody: {},
  button: { minHeight: 44, justifyContent: "center" },
  text: { lineHeight: 44, paddingHorizontal: 17, textAlign: "left" },
  textBrand: null,
  textDanger: null,
  textWarning: null,
  alignLeft: null,
  disabled: null,
};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
obj2.textBrand = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, 16));
obj2.textDanger = {};
let TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.STATUS_WARNING, 16));
obj2.textWarning = {};
obj2.alignLeft = { textAlign: "left" };
obj2.disabled = { opacity: 0.5 };
const React7 = createStyles.createStyles(obj2);
const obj6 = { BRAND: "brand", DANGER: "danger", WARNING: "warning" };
FormCTAButton.Colors = obj6;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCTAButton.tsx");

export default FormCTAButton;
export const FormCTAButtonColors = obj6;
