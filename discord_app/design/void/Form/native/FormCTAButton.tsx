// === Module 8124: FormCTAButton ===

// Module 8124 (FormCTAButton)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import context from "context" /* 5479 */;
import closure_2 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import semanticColor from "semanticColor" /* 1301 */;
import { Fonts } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import importDefaultResult from "createTextStyle" /* 5342 */;

require = arg1;
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
    items = [, , , ];
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
    tmp5Result = tmp5(require("Button").LegacyText, { style: items, children: global.label });
    if (tmp3) {
      tmp10 = ActivityIndicator;
      obj = { color: null };
      obj[0] = BRAND;
      tmp5Result = tmp5(ActivityIndicator, obj);
    }
    obj = { style: null, children: null };
    tmp11 = View;
    if (closure_2.useContext(require("context").RedesignCompatContext)) {
      obj[0] = tmp4.rowButton;
      obj1 = { label: null, onPress: null, arrow: false, disabled: null, testID: null };
      obj1[0] = tmp5Result;
      obj1[1] = onPress;
      if (!tmp2) {
        tmp2 = tmp3;
      }
      obj1[3] = tmp2;
      obj1[4] = testID;
      obj[1] = tmp5(require("RowButtonWrapper").RowButton, obj1);
      tmp16 = obj;
    } else {
      items1 = [, , ];
      items1[0] = tmp4.sectionBody;
      disabled2 = tmp2;
      if (tmp2) {
        disabled2 = tmp4.disabled;
      }
      items1[1] = disabled2;
      items1[2] = global.style;
      obj[0] = items1;
      obj2 = { testID: null, accessibilityRole: "button", onPress: null, style: null, disabled: null, android_ripple: null, children: null };
      obj2[0] = testID;
      obj2[2] = onPress;
      obj2[3] = tmp4.button;
      tmp13 = tmp2;
      tmp12 = Pressable;
      if (!tmp2) {
        tmp13 = tmp3;
      }
      obj2[4] = tmp13;
      tmp14 = getThemedRippleConfig;
      tmp15 = ANDROID_FOREGROUND_RIPPLE;
      obj2[5] = getThemedRippleConfig(ANDROID_FOREGROUND_RIPPLE);
      obj2[6] = tmp5Result;
      obj[1] = tmp5(tmp12, obj2);
      tmp16 = obj;
    }
    return tmp5(tmp11, tmp16);
  }
}
({ ActivityIndicator: c3, Pressable: c4, Platform, StyleSheet, View: c5 } = get_ActivityIndicator);
({ ANDROID_FOREGROUND_RIPPLE: closure_6, getThemedRippleConfig: error } = semanticColor);
createCacheKey = { rowButton: { paddingHorizontal: 16 }, sectionBody: {}, button: { minHeight: 44, justifyContent: "center" }, text: { lineHeight: 44, paddingHorizontal: 17, textAlign: "left" }, textBrand: null, textDanger: null, textWarning: null, alignLeft: null, disabled: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
createCacheKey[4] = createCacheKey;
let obj1 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL, 16));
createCacheKey[5] = obj1;
const importDefaultResult1 = importDefaultResult;
const obj2 = {};
const merged2 = Object.assign(importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.STATUS_WARNING, 16));
createCacheKey[6] = obj2;
createCacheKey[7] = { textAlign: "left" };
createCacheKey[8] = { opacity: 0.5 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const obj3 = { BRAND: "brand", DANGER: "danger", WARNING: "warning" };
FormCTAButton.Colors = obj3;
const importDefaultResult2 = importDefaultResult;
const result = require("set").fileFinishedImporting("design/void/Form/native/FormCTAButton.tsx");

export default FormCTAButton;
export const FormCTAButtonColors = obj3;