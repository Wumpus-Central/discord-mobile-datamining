// === Module 8537: DatePickerActionSheet ===

// Module 8537 (DatePickerActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import _modDef4659 from "module_4659" /* 4659 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import timing from "timing" /* 5091 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5369 */;
import BaseTextButton from "BaseTextButton" /* 5376 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const util = BottomSheetTitleHeader(1126);
const BottomSheetTitleHeader2 = BottomSheetTitleHeader(6828);
const ActionSheetCloseButton = BottomSheetTitleHeader(6880);
const ActionSheetHeaderPressableText = BottomSheetTitleHeader(8538);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(5090);
let obj2 = { rangeErrorContainer: { justifyContent: "flex-start" }, rangeError: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, padding: 12, marginHorizontal: 12, borderRadius: nativeDefault.radii.sm }, datetimePickerContainer: { display: "flex", alignItems: "center" } };
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(5090);
let closure_9 = createStyles.createStyles({ footer: { marginVertical: 6, paddingHorizontal: 12, display: "flex", flexDirection: "row", justifyContent: "flex-end" }, actionButton: { marginLeft: 24 } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetHeader(arg0) {
  let BottomSheetTitleHeader = require;
  let tmp = dependencyMap;
  const cResult = c.c(15);
  ({ title, handleCancel, handleSubmit } = arg0);
  if (obj2.isAndroid()) {
    if (cResult[0] !== handleCancel) {
      const obj3 = { onPress: handleCancel };
      const tmp19 = timestampProducer(ActionSheetCloseButton.ActionSheetCloseButton, obj3);
      cResult[0] = handleCancel;
      cResult[1] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[1];
    }
    if (cResult[2] === tmp17) {
    }
    BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    const obj4 = { title, trailing: tmp17 };
    tmp = timestampProducer(BottomSheetTitleHeader, obj4);
    cResult[2] = tmp17;
    cResult[3] = title;
    cResult[4] = tmp;
  } else {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["ETE/oC"]);
      cResult[5] = stringResult;
      let tmp4 = stringResult;
    } else {
      tmp4 = cResult[5];
    }
    if (cResult[6] !== handleCancel) {
      const obj5 = { onPress: handleCancel, label: tmp4 };
      const tmp8 = timestampProducer(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, obj5);
      cResult[6] = handleCancel;
      cResult[7] = tmp8;
      let tmp6 = tmp8;
    } else {
      tmp6 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t["R3BPH+"]);
      cResult[8] = stringResult1;
      let tmp9 = stringResult1;
    } else {
      tmp9 = cResult[8];
    }
    if (cResult[9] !== handleSubmit) {
      const obj6 = { onPress: handleSubmit, label: tmp9 };
      const tmp13 = timestampProducer(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, obj6);
      cResult[9] = handleSubmit;
      cResult[10] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[10];
    }
    if (cResult[11] === tmp6) {
      if (cResult[12] === tmp11) {
        if (cResult[13] === title) {
          let tmp14 = cResult[14];
        }
        return tmp14;
      }
    }
    const obj7 = { title, leading: tmp6, trailing: tmp11 };
    const tmp16 = timestampProducer(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj7);
    cResult[11] = tmp6;
    cResult[12] = tmp11;
    cResult[13] = title;
    cResult[14] = tmp16;
    tmp14 = tmp16;
  }
  obj2 = PlatformUtils;
}) : (function ActionSheetHeader(handleSubmit) {
  ({ title, handleCancel } = handleSubmit);
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  if (isAndroidResult) {
    const obj2 = { title, trailing: null };
    const obj3 = { onPress: handleCancel };
    obj2.trailing = timestampProducer(ActionSheetCloseButton.ActionSheetCloseButton, obj3);
    let tmp4Result = timestampProducer(BottomSheetTitleHeader, obj2);
  } else {
    const obj4 = { title, leading: null, trailing: null };
    const obj5 = { onPress: handleCancel, label: null };
    const intl = util.intl;
    obj5.label = intl.string(util.t["ETE/oC"]);
    obj4.leading = timestampProducer(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, obj5);
    const obj6 = { onPress: handleSubmit.handleSubmit, label: null };
    const intl2 = util.intl;
    obj6.label = intl2.string(util.t["R3BPH+"]);
    obj4.trailing = timestampProducer(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, obj6);
    tmp4Result = timestampProducer(BottomSheetTitleHeader, obj4);
  }
  return tmp4Result;
});
const __initData = { code: "function DatePickerActionSheetTsx1(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}" };
const __initData2 = { code: "function DatePickerActionSheetTsx2(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}" };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function DateRangeError(show) {
  const cResult = show(576).c(16);
  show = show.show;
  const errorText = show.errorText;
  const tmp4 = closure_8();
  const ref = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const result = setAccessibilityFocus.setAccessibilityFocus({ ref, delay: 200 });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== show) {
    const items = [show];
    cResult[1] = show;
    cResult[2] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(first, tmp7);
  let obj = show(576);
  class D {
    constructor() {
      obj = { easing: closure_0(closure_2[16]).STANDARD_EASING, duration: null };
      tmp = closure_0;
      tmp2 = closure_2;
      tmp3 = show;
      num = 150;
      if (show) {
        num = 200;
      }
      obj.duration = num;
      tmpResult = tmp(tmp2[17]);
      num2 = 0;
      if (tmp3) {
        num2 = 1;
      }
      obj1 = { opacity: tmpResult.withTiming(num2, obj), maxHeight: null, paddingVertical: null };
      tmpResult1 = tmp(tmp2[17]);
      num3 = 0;
      if (tmp3) {
        num3 = 500;
      }
      obj1.maxHeight = tmpResult1.withTiming(num3, obj);
      tmpResult2 = tmp(tmp2[17]);
      num4 = 0;
      if (tmp3) {
        num4 = 12;
      }
      obj1.paddingVertical = tmpResult2.withTiming(num4, obj);
      return obj1;
    }
  }
  let tmpResult = show(4810);
  D.__closure = { STANDARD_EASING: show(1200).STANDARD_EASING, show, withTiming: show(5091).withTiming };
  D.__workletHash = 11991491746736;
  D.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(D);
  if (cResult[3] === animatedStyle) {
    if (cResult[4] === tmp4.rangeErrorContainer) {
      let tmp10 = cResult[5];
    }
    let str = "no-hide-descendants";
    if (show) {
      str = "auto";
    }
    if (cResult[6] !== errorText) {
      const obj4 = { variant: "text-md/medium", color: "text-feedback-critical", children: errorText };
      const tmp14 = closure_6(tmp(5086).Text, obj4);
      cResult[6] = errorText;
      cResult[7] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === tmp4.rangeError) {
      if (cResult[9] === tmp12) {
        let tmp15 = cResult[10];
      }
      if (cResult[11] === tmp10) {
        if (cResult[12] === tmp11) {
          if (cResult[13] === str) {
            if (cResult[14] === tmp15) {
              let tmp19 = cResult[15];
            }
            return tmp19;
          }
        }
      }
      const obj5 = { style: tmp10, accessibilityElementsHidden: tmp11, importantForAccessibility: str, children: tmp15 };
      const tmp22 = closure_6(ref(4810).View, obj5);
      cResult[11] = tmp10;
      cResult[12] = tmp11;
      cResult[13] = str;
      cResult[14] = tmp15;
      cResult[15] = tmp22;
      tmp19 = tmp22;
    }
    const obj6 = { ref, accessible: true, accessibilityRole: "alert", style: tmp4.rangeError, children: tmp12 };
    const tmp18 = closure_6(View, obj6);
    cResult[8] = tmp4.rangeError;
    cResult[9] = tmp12;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  const items1 = [tmp4.rangeErrorContainer, animatedStyle];
  cResult[3] = animatedStyle;
  cResult[4] = tmp4.rangeErrorContainer;
  cResult[5] = items1;
  tmp10 = items1;
  const obj3 = { STANDARD_EASING: show(1200).STANDARD_EASING, show, withTiming: show(5091).withTiming };
}) : (function DateRangeError(children) {
  const show = children.show;
  const tmp = closure_8();
  const ref = noop.useRef(null);
  const items = [show];
  const effect = noop.useEffect(() => {
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref, delay: 200 });
  }, items);
  class S {
    constructor() {
      obj = { easing: closure_0(closure_2[16]).STANDARD_EASING, duration: null };
      tmp = closure_0;
      tmp2 = closure_2;
      tmp3 = show;
      num = 150;
      if (show) {
        num = 200;
      }
      obj.duration = num;
      tmpResult = tmp(tmp2[17]);
      num2 = 0;
      if (tmp3) {
        num2 = 1;
      }
      obj1 = { opacity: tmpResult.withTiming(num2, obj), maxHeight: null, paddingVertical: null };
      tmpResult1 = tmp(tmp2[17]);
      num3 = 0;
      if (tmp3) {
        num3 = 500;
      }
      obj1.maxHeight = tmpResult1.withTiming(num3, obj);
      tmpResult2 = tmp(tmp2[17]);
      num4 = 0;
      if (tmp3) {
        num4 = 12;
      }
      obj1.paddingVertical = tmpResult2.withTiming(num4, obj);
      return obj1;
    }
  }
  let obj = show(4810);
  const tmp4 = show;
  S.__closure = { STANDARD_EASING: show(1200).STANDARD_EASING, show, withTiming: show(5091).withTiming };
  S.__workletHash = 8613167691923;
  S.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(S);
  const obj3 = { style: null, accessibilityElementsHidden: !show, importantForAccessibility: null, children: null };
  const items1 = [tmp.rangeErrorContainer, animatedStyle];
  obj3.style = items1;
  let str = "no-hide-descendants";
  if (show) {
    str = "auto";
  }
  obj3.importantForAccessibility = str;
  let obj2 = { STANDARD_EASING: show(1200).STANDARD_EASING, show, withTiming: show(5091).withTiming };
  obj3.children = closure_6(View, { ref, accessible: true, accessibilityRole: "alert", style: tmp.rangeError, children: closure_6(tmp4(5086).Text, { variant: "text-md/medium", color: "text-feedback-critical", children: children.errorText }) });
  return closure_6(ref(4810).View, obj3);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetFooter(canSubmit) {
  const cResult = c.c(15);
  ({ handleCancel, handleSubmit } = canSubmit);
  const tmp4 = closure_9();
  if (obj2.isAndroid()) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-md/semibold", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t["ETE/oC"]);
      const tmp10 = timestampProducer(Text_Text.Text, obj3);
      const intl2 = util.intl;
      const stringResult = intl2.string(util.t["ETE/oC"]);
      cResult[0] = tmp10;
      cResult[1] = stringResult;
      tmp7 = tmp10;
      tmp8 = stringResult;
    } else {
      [tmp7, tmp8] = cResult;
    }
    if (cResult[2] === tmp4.actionButton) {
      if (cResult[3] === handleCancel) {
        let tmp12 = cResult[4];
      }
      const _Symbol2 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "text-md/semibold", children: null };
        const intl3 = util.intl;
        obj4.children = intl3.string(util.t["cY+Oob"]);
        const tmp19 = timestampProducer(Text_Text.Text, obj4);
        const intl4 = util.intl;
        const stringResult1 = intl4.string(util.t["cY+Oob"]);
        cResult[5] = tmp19;
        cResult[6] = stringResult1;
        let tmp17 = stringResult1;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[5];
        tmp17 = cResult[6];
      }
      if (cResult[7] === tmp4.actionButton) {
        if (cResult[8] === handleSubmit) {
          if (cResult[9] === tmp15) {
            let tmp21 = cResult[10];
          }
          if (cResult[11] === tmp4.footer) {
            if (cResult[12] === tmp12) {
              if (cResult[13] === tmp21) {
                let tmp24 = cResult[14];
              }
              return tmp24;
            }
          }
          const obj5 = { style: tmp4.footer, children: null };
          const items = [tmp12, tmp21];
          obj5.children = items;
          const tmp27 = React5(View, obj5);
          cResult[11] = tmp4.footer;
          cResult[12] = tmp12;
          cResult[13] = tmp21;
          cResult[14] = tmp27;
          tmp24 = tmp27;
        }
      }
      const obj6 = { shrink: true, disabled: !canSubmit.canSubmit, size: "md", variant: "secondary", textElement: tmp16, accessibilityLabel: tmp17, style: tmp4.actionButton, onPress: handleSubmit };
      const tmp23 = timestampProducer(BaseTextButton.BaseTextButton, obj6);
      cResult[7] = tmp4.actionButton;
      cResult[8] = handleSubmit;
      cResult[9] = !canSubmit.canSubmit;
      cResult[10] = tmp23;
      tmp21 = tmp23;
    }
    const obj7 = { shrink: true, size: "md", variant: "secondary", textElement: tmp7, accessibilityLabel: tmp8, style: tmp4.actionButton, onPress: handleCancel };
    const tmp14 = timestampProducer(BaseTextButton.BaseTextButton, obj7);
    cResult[2] = tmp4.actionButton;
    cResult[3] = handleCancel;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    return null;
  }
  obj2 = PlatformUtils;
}) : (function ActionSheetFooter(arg0) {
  ({ handleCancel, handleSubmit, canSubmit } = arg0);
  const tmp = closure_9();
  let tmp4 = null;
  if (obj.isAndroid()) {
    const obj2 = { style: tmp.footer, children: null };
    const obj3 = { shrink: true, size: "md", variant: "secondary", textElement: null, accessibilityLabel: null, style: null, onPress: null };
    const obj4 = { variant: "text-md/semibold", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t["ETE/oC"]);
    obj3.textElement = timestampProducer(Text_Text.Text, obj4);
    const intl2 = util.intl;
    obj3.accessibilityLabel = intl2.string(util.t["ETE/oC"]);
    obj3.style = tmp.actionButton;
    obj3.onPress = handleCancel;
    const items = [timestampProducer(BaseTextButton.BaseTextButton, obj3), ];
    const obj5 = { shrink: true, disabled: !canSubmit, size: "md", variant: "secondary", textElement: null, accessibilityLabel: null, style: null, onPress: null };
    const obj6 = { variant: "text-md/semibold", children: null };
    const intl3 = util.intl;
    obj6.children = intl3.string(util.t["cY+Oob"]);
    obj5.textElement = timestampProducer(Text_Text.Text, obj6);
    const intl4 = util.intl;
    obj5.accessibilityLabel = intl4.string(util.t["cY+Oob"]);
    obj5.style = tmp.actionButton;
    obj5.onPress = handleSubmit;
    items[1] = timestampProducer(BaseTextButton.BaseTextButton, obj5);
    obj2.children = items;
    tmp4 = React5(View, obj2);
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, padding: 12, marginHorizontal: 12, borderRadius: nativeDefault.radii.sm };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/DatePickerActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DatePickerActionSheet(minimumDate) {
  const cResult = maximumDate(onSubmit[8]).c(63);
  ({ mode, title, startDate, maximumDate } = minimumDate);
  minimumDate = minimumDate.minimumDate;
  onSubmit = minimumDate.onSubmit;
  const onCancel = minimumDate.onCancel;
  let str = "date";
  if (undefined !== mode) {
    str = mode;
  }
  if (cResult[0] !== title) {
    let stringResult = title;
    if (undefined === title) {
      const intl = tmp(tmp2[12]).intl;
      stringResult = intl.string(tmp(tmp2[12]).t.epc9sr);
    }
    cResult[0] = title;
    cResult[1] = stringResult;
    let tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = first1();
  if (cResult[2] !== startDate) {
    let date = startDate;
    if (startDate == null) {
      const _Date = Date;
      date = new Date();
    }
    cResult[2] = startDate;
    cResult[3] = date;
    let tmp7 = date;
  } else {
    tmp7 = cResult[3];
  }
  noop = tmp7;
  closure_5 = tmp13;
  const tmp14 = onCancel(noop.useState(tmp7), 2);
  date = tmp14[0];
  closure_7 = tmp14[1];
  const tmp16 = onCancel(noop.useState(!minimumDate.requireDateChanged), 2);
  first1 = tmp16[0];
  closure_9 = tmp16[1];
  const tmp18 = onCancel(noop.useState(true), 2);
  const first2 = tmp18[0];
  closure_11 = tmp18[1];
  let obj = maximumDate(onSubmit[8]);
  const obj2 = noop;
  [tmp21, closure_12] = onCancel(noop.useState(false), 2);
  const tmp20 = onCancel(noop.useState(false), 2);
  const ref = noop.useRef(date);
  if (cResult[4] !== maximumDate) {
    let date1;
    if (null != maximumDate) {
      const _Date2 = Date;
      date1 = new Date(maximumDate.getFullYear() + 1, 0, 1, 0, -1);
    }
    cResult[4] = maximumDate;
    cResult[5] = date1;
    let tmp24 = date1;
  } else {
    tmp24 = cResult[5];
  }
  if (cResult[6] !== minimumDate) {
    let date2;
    if (null != minimumDate) {
      const _Date3 = Date;
      date2 = new Date(minimumDate.getFullYear(), 0, 1, 0);
    }
    cResult[6] = minimumDate;
    cResult[7] = date2;
    let tmp29 = date2;
  } else {
    tmp29 = cResult[7];
  }
  if (cResult[8] !== date) {
    function ee() {
      closure_13.current = current;
    }
    const items = [date];
    cResult[8] = date;
    cResult[9] = ee;
    cResult[10] = items;
    let tmp35 = items;
    let tmp34 = ee;
  } else {
    tmp34 = cResult[9];
    tmp35 = cResult[10];
  }
  const effect = obj2.useEffect(tmp34, tmp35);
  if (cResult[11] !== minimumDate) {
    function isAboveMin(getTime) {
      let tmp = null == minimumDate;
      if (!tmp) {
        const time = getTime.getTime();
        tmp = time >= minimumDate.getTime();
      }
      return tmp;
    }
    cResult[11] = minimumDate;
    cResult[12] = isAboveMin;
    let tmp37 = isAboveMin;
  } else {
    tmp37 = cResult[12];
  }
  closure_14 = tmp37;
  if (cResult[13] !== maximumDate) {
    function isBelowMax(getTime) {
      let tmp = null == maximumDate;
      if (!tmp) {
        const time = getTime.getTime();
        tmp = time <= maximumDate.getTime();
      }
      return tmp;
    }
    cResult[13] = maximumDate;
    cResult[14] = isBelowMax;
    let tmp38 = isBelowMax;
  } else {
    tmp38 = cResult[14];
  }
  closure_15 = tmp38;
  if (cResult[15] === tmp7) {
    if (cResult[16] === onCancel) {
      let tmp39 = cResult[17];
    }
    const tmp40 = tmp22(tmp2[21])(tmp39);
    if (cResult[18] === first1) {
      if (cResult[19] === first2) {
        if (cResult[20] === onSubmit) {
          let tmp41 = cResult[21];
        }
        const tmp42 = tmp22(tmp2[21])(tmp41);
        if (cResult[22] === tmp13) {
          if (cResult[23] === tmp37) {
            if (cResult[24] === tmp38) {
              let tmp43 = cResult[25];
            }
            const tmp44 = tmp22(tmp2[21])(tmp43);
            if (cResult[26] === tmp40) {
              if (cResult[27] === tmp42) {
                if (cResult[28] === tmp4) {
                  let tmp45 = cResult[29];
                }
                let tmp49 = tmp21;
                if (tmp21) {
                  tmp49 = !tmp37(date);
                }
                if (cResult[30] === minimumDate) {
                  if (cResult[31] === str) {
                    let tmp50 = cResult[32];
                  }
                  if (cResult[33] === tmp49) {
                    if (cResult[34] === tmp50) {
                      let tmp52 = cResult[35];
                    }
                    if (tmp21) {
                      tmp21 = !tmp38(date);
                    }
                    if (cResult[36] === maximumDate) {
                      if (cResult[37] === str) {
                        let tmp56 = cResult[38];
                      }
                      if (cResult[39] === tmp21) {
                        if (cResult[40] === tmp56) {
                          let tmp58 = cResult[41];
                        }
                        let str4 = "dark";
                        if (tmpResult.isThemeLight(tmp23)) {
                          str4 = "light";
                        }
                        if (cResult[42] === tmp24) {
                          if (cResult[43] === tmp29) {
                            if (cResult[44] === date) {
                              if (cResult[45] === tmp44) {
                                if (cResult[46] === str) {
                                  if (cResult[47] === str4) {
                                    let tmp62 = cResult[48];
                                  }
                                  if (cResult[49] === tmp6.datetimePickerContainer) {
                                    if (cResult[50] === tmp62) {
                                      let tmp65 = cResult[51];
                                    }
                                    if (cResult[52] === first1) {
                                      if (cResult[53] === tmp40) {
                                        if (cResult[54] === tmp42) {
                                          let tmp69 = cResult[55];
                                        }
                                        if (cResult[56] === onCancel) {
                                          if (cResult[57] === tmp45) {
                                            if (cResult[58] === tmp52) {
                                              if (cResult[59] === tmp58) {
                                                if (cResult[60] === tmp65) {
                                                  if (cResult[61] === tmp69) {
                                                    let tmp73 = cResult[62];
                                                  }
                                                  return tmp73;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj3 = { onDismiss: onCancel, header: tmp45, children: null };
                                        const items1 = [tmp52, tmp58, tmp65, tmp69];
                                        obj3.children = items1;
                                        const tmp75 = closure_7(tmp(tmp2[25]).BottomSheet, obj3);
                                        cResult[56] = onCancel;
                                        cResult[57] = tmp45;
                                        cResult[58] = tmp52;
                                        cResult[59] = tmp58;
                                        cResult[60] = tmp65;
                                        cResult[61] = tmp69;
                                        cResult[62] = tmp75;
                                        tmp73 = tmp75;
                                      }
                                    }
                                    const obj5 = { handleCancel: tmp40, handleSubmit: tmp42, canSubmit: first1 };
                                    const tmp72 = date(closure_14, obj5);
                                    cResult[52] = first1;
                                    cResult[53] = tmp40;
                                    cResult[54] = tmp42;
                                    cResult[55] = tmp72;
                                    tmp69 = tmp72;
                                  }
                                  const obj6 = { style: tmp6.datetimePickerContainer, children: tmp62 };
                                  const tmp68 = date(closure_5, obj6);
                                  cResult[49] = tmp6.datetimePickerContainer;
                                  cResult[50] = tmp62;
                                  cResult[51] = tmp68;
                                  tmp65 = tmp68;
                                }
                              }
                            }
                          }
                        }
                        const obj8 = { theme: str4, date, onDateChange: tmp44, maximumDate: tmp24, minimumDate: tmp29, mode: str };
                        const tmp64 = date(tmp22(tmp2[24]), obj8);
                        cResult[42] = tmp24;
                        cResult[43] = tmp29;
                        cResult[44] = date;
                        cResult[45] = tmp44;
                        cResult[46] = str;
                        cResult[47] = str4;
                        cResult[48] = tmp64;
                        tmp62 = tmp64;
                        tmpResult = tmp(tmp2[23]);
                      }
                      const obj9 = { show: tmp21, errorText: tmp56 };
                      const tmp61 = date(ref, obj9);
                      cResult[39] = tmp21;
                      cResult[40] = tmp56;
                      cResult[41] = tmp61;
                      tmp58 = tmp61;
                    }
                    const intl3 = tmp(tmp2[12]).intl;
                    let str3 = "lll";
                    if ("date" === str) {
                      str3 = "L";
                    }
                    const obj10 = { maxDate: tmp22(tmp2[22])(maximumDate).format(str3) };
                    const formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[12]).t.R7r9VN, obj10);
                    cResult[36] = maximumDate;
                    cResult[37] = str;
                    cResult[38] = formatToPlainStringResult;
                    tmp56 = formatToPlainStringResult;
                    const obj7 = tmp22(tmp2[22])(maximumDate);
                  }
                  const obj11 = { show: tmp49, errorText: tmp50 };
                  const tmp55 = date(ref, obj11);
                  cResult[33] = tmp49;
                  cResult[34] = tmp50;
                  cResult[35] = tmp55;
                  tmp52 = tmp55;
                }
                const intl2 = tmp(tmp2[12]).intl;
                let str2 = "lll";
                if ("date" === str) {
                  str2 = "L";
                }
                const obj12 = { minDate: tmp22(tmp2[22])(minimumDate).format(str2) };
                const formatToPlainStringResult1 = intl2.formatToPlainString(tmp(tmp2[12]).t.FsJO55, obj12);
                cResult[30] = minimumDate;
                cResult[31] = str;
                cResult[32] = formatToPlainStringResult1;
                tmp50 = formatToPlainStringResult1;
                const obj4 = tmp22(tmp2[22])(minimumDate);
              }
            }
            const obj13 = { title: tmp4, handleCancel: tmp40, handleSubmit: tmp42 };
            const tmp48 = date(first2, obj13);
            cResult[26] = tmp40;
            cResult[27] = tmp42;
            cResult[28] = tmp4;
            cResult[29] = tmp48;
            tmp45 = tmp48;
          }
        }
        function me(arg0) {
          if (null != arg0) {
            if (closure_5) {
              let tmp4 = closure_14(arg0);
              if (tmp4) {
                tmp4 = closure_15(arg0);
              }
              closure_11(tmp4);
            }
            __initData2(false);
            closure_9(true);
            closure_7(arg0);
          }
        }
        cResult[22] = tmp13;
        cResult[23] = tmp37;
        cResult[24] = tmp38;
        cResult[25] = me;
        tmp43 = me;
      }
    }
    function se() {
      let tmp = first1;
      if (first1) {
        tmp = first2;
      }
      if (tmp) {
        onSubmit(_modDef4659(ref.current));
      }
      if (first2) {
        ActionSheetActionCreatorsDefault.hideActionSheet();
      } else {
        __initData2(true);
      }
    }
    cResult[18] = first1;
    cResult[19] = first2;
    cResult[20] = onSubmit;
    cResult[21] = se;
    tmp41 = se;
  }
  function oe() {
    closure_13.current = current;
    if (onCancel != null) {
      tmp();
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  cResult[15] = tmp7;
  cResult[16] = onCancel;
  cResult[17] = oe;
  tmp39 = oe;
}) : (function DatePickerActionSheet(mode) {
  let str = mode.mode;
  if (str === undefined) {
    str = "date";
  }
  let title = mode.title;
  if (title === undefined) {
    const intl = maximumDate(1126).intl;
    title = intl.string(maximumDate(1126).t.epc9sr);
  }
  ({ startDate, maximumDate } = mode);
  const minimumDate = mode.minimumDate;
  ({ onSubmit: dependencyMap, onCancel } = mode);
  startDate = undefined;
  let date;
  closure_6 = undefined;
  let first1;
  closure_8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  if (startDate == null) {
    const _Date = Date;
    startDate = new Date();
  }
  const tmp7 = onCancel(startDate.useState(startDate), 2);
  date = tmp7[0];
  closure_6 = tmp7[1];
  const tmp8 = onCancel(startDate.useState(!mode.requireDateChanged), 2);
  first1 = tmp8[0];
  closure_8 = tmp8[1];
  let obj = startDate;
  const tmp3 = closure_8();
  [c9, c10] = onCancel(startDate.useState(true), 2);
  const tmp10 = onCancel(startDate.useState(true), 2);
  [tmp12, c11] = onCancel(startDate.useState(false), 2);
  const tmp11 = onCancel(startDate.useState(false), 2);
  startDate.useRef(date);
  date = undefined;
  if (null != maximumDate) {
    const _Date2 = Date;
    date = new Date(maximumDate.getFullYear() + 1, 0, 1, 0, -1);
  }
  let date1;
  if (null != minimumDate) {
    const _Date3 = Date;
    date1 = new Date(minimumDate.getFullYear(), 0, 1, 0);
  }
  const items = [date];
  const effect = obj.useEffect(() => {
    closure_12.current = current;
  }, items);
  const tmp25 = minimumDate(6637)(() => {
    closure_12.current = startDate;
    if (onCancel != null) {
      tmp();
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  });
  const tmp26 = minimumDate(6637)(() => {
    let tmp = first1;
    if (first1) {
      tmp = c9;
    }
    if (tmp) {
      dependencyMap(_modDef4659(ref.current));
    }
    if (c9) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    } else {
      _undefined(true);
    }
  });
  const tmp15 = minimumDate(4991)();
  const obj2 = { onDismiss: onCancel, header: closure_6(c10, { title, handleCancel: tmp25, handleSubmit: tmp26 }), children: null };
  let tmp32 = tmp12;
  if (tmp12) {
    let tmp33 = null == minimumDate;
    if (!tmp33) {
      let time = date.getTime();
      tmp33 = time >= minimumDate.getTime();
    }
    tmp32 = !tmp33;
  }
  const obj3 = { show: tmp32, errorText: null };
  const intl2 = maximumDate(1126).intl;
  const tmp27 = minimumDate(6637)((getTime) => {
    if (null != getTime) {
      let tmp2 = null == minimumDate;
      if (tmp2) {
        tmp2 = null == maximumDate;
      }
      if (!tmp2) {
        let tmp4 = null == minimumDate;
        if (!tmp4) {
          const time = getTime.getTime();
          tmp4 = time >= minimumDate.getTime();
        }
        if (tmp4) {
          let tmp6 = null == maximumDate;
          if (!tmp6) {
            const time1 = getTime.getTime();
            tmp6 = time1 <= maximumDate.getTime();
          }
          tmp4 = tmp6;
        }
        _undefined(tmp4);
      }
      _undefined(false);
      closure_8(true);
      closure_6(getTime);
    }
  });
  const tmp28 = first1;
  let str2 = "lll";
  let str3 = "lll";
  if ("date" === str) {
    str3 = "L";
  }
  const obj5 = minimumDate(4659)(minimumDate);
  obj3.errorText = intl2.formatToPlainString(maximumDate(1126).t.FsJO55, { minDate: minimumDate(4659)(minimumDate).format(str3) });
  const items1 = [closure_6(closure_13, obj3), , , ];
  if (tmp12) {
    let tmp36 = null == maximumDate;
    if (!tmp36) {
      let time1 = date.getTime();
      tmp36 = time1 <= maximumDate.getTime();
    }
  }
  const obj6 = { show: tmp12, errorText: null };
  const intl3 = maximumDate(1126).intl;
  const obj4 = { minDate: minimumDate(4659)(minimumDate).format(str3) };
  if ("date" === str) {
    str2 = "L";
  }
  const obj8 = minimumDate(4659)(maximumDate);
  obj6.errorText = intl3.formatToPlainString(maximumDate(1126).t.R7r9VN, { maxDate: minimumDate(4659)(maximumDate).format(str2) });
  items1[1] = closure_6(closure_13, obj6);
  const obj9 = { style: tmp3.datetimePickerContainer, children: null };
  const obj7 = { maxDate: minimumDate(4659)(maximumDate).format(str2) };
  const tmp38 = date;
  const tmp13Result = minimumDate(8539);
  let str4 = "dark";
  if (tmp29Result.isThemeLight(tmp15)) {
    str4 = "light";
  }
  obj9.children = closure_6(tmp13Result, { theme: str4, date, onDateChange: tmp27, maximumDate: date, minimumDate: date1, mode: str });
  items1[2] = closure_6(tmp38, obj9);
  items1[3] = closure_6(closure_14, { handleCancel: tmp25, handleSubmit: tmp26, canSubmit: first1 });
  obj2.children = items1;
  return tmp28(maximumDate(6829).BottomSheet, obj2);
});