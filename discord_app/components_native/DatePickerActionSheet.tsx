// === Module 9717: DatePickerActionSheet ===

// Module 9717 (DatePickerActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import native from "native" /* 1178 */;
import _modDef4153 from "module_4153" /* 4153 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import timing from "timing" /* 4561 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 4971 */;
import BaseTextButton from "BaseTextButton" /* 4976 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7149 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 7199 */;
import ActionSheetHeaderPressableText from "ActionSheetHeaderPressableText" /* 9718 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ActionSheetHeader(handleSubmit) {
  ({ title, handleCancel } = handleSubmit);
  let obj = PlatformUtils;
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  if (isAndroidResult) {
    obj = { title, trailing: null };
    obj = { onPress: handleCancel };
    obj.trailing = timestampProducer(ActionSheetCloseButton.ActionSheetCloseButton, obj);
    let tmp4Result = timestampProducer(BottomSheetTitleHeader, obj);
  } else {
    const obj1 = { title, leading: null, trailing: null };
    const obj2 = { onPress: handleCancel, label: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t["ETE/oC"]);
    obj1.leading = timestampProducer(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, obj2);
    const obj3 = { onPress: handleSubmit.handleSubmit, label: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t["R3BPH+"]);
    obj1.trailing = timestampProducer(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, obj3);
    tmp4Result = timestampProducer(BottomSheetTitleHeader, obj1);
  }
  return tmp4Result;
}
function DateRangeError(children) {
  const show = children.show;
  const tmp = closure_8();
  const ref = noop.useRef(null);
  const items = [show];
  const effect = noop.useEffect(() => {
    const obj = { ref, delay: 200 };
    const result = obj.setAccessibilityFocus(obj);
  }, items);
  let obj = show(4296);
  class A {
    constructor() {
      obj = { easing: closure_0(closure_2[14]).STANDARD_EASING, duration: null };
      tmp = closure_0;
      tmp2 = closure_2;
      tmp3 = show;
      num = 150;
      if (show) {
        num = 200;
      }
      obj.duration = num;
      tmpResult = tmp(tmp2[15]);
      num2 = 0;
      if (tmp3) {
        num2 = 1;
      }
      obj = { opacity: tmpResult.withTiming(num2, obj), maxHeight: null, paddingVertical: null };
      tmpResult1 = tmp(tmp2[15]);
      num3 = 0;
      if (tmp3) {
        num3 = 500;
      }
      obj.maxHeight = tmpResult1.withTiming(num3, obj);
      tmpResult2 = tmp(tmp2[15]);
      num4 = 0;
      if (tmp3) {
        num4 = 12;
      }
      obj.paddingVertical = tmpResult2.withTiming(num4, obj);
      return obj;
    }
  }
  obj = { STANDARD_EASING: show(1178).STANDARD_EASING, show, withTiming: show(4561).withTiming };
  A.__closure = obj;
  A.__workletHash = 11991491746736;
  A.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(A);
  obj = { style: null, accessibilityElementsHidden: !show, importantForAccessibility: null, children: null };
  const items1 = [tmp.rangeErrorContainer, animatedStyle];
  obj.style = items1;
  let str = "no-hide-descendants";
  if (show) {
    str = "auto";
  }
  obj.importantForAccessibility = str;
  obj.children = closure_6(View, { ref, accessible: true, accessibilityRole: "alert", style: tmp.rangeError, children: closure_6(show(4556).Text, { variant: "text-md/medium", color: "text-feedback-critical", children: children.errorText }) });
  return closure_6(ref(4296).View, obj);
}
function ActionSheetFooter(arg0) {
  ({ handleCancel, handleSubmit, canSubmit } = arg0);
  const tmp = closure_9();
  let obj = PlatformUtils;
  let tmp4 = null;
  if (obj.isAndroid()) {
    obj = { style: tmp.footer, children: null };
    obj = { shrink: true, size: "md", variant: "secondary", textElement: null, accessibilityLabel: null, style: null, onPress: null };
    const obj1 = { variant: "text-md/semibold", children: null };
    const intl = util.intl;
    obj1.children = intl.string(util.t["ETE/oC"]);
    obj.textElement = timestampProducer(Text_Text.Text, obj1);
    const intl2 = util.intl;
    obj.accessibilityLabel = intl2.string(util.t["ETE/oC"]);
    obj.style = tmp.actionButton;
    obj.onPress = handleCancel;
    const items = [timestampProducer(BaseTextButton.BaseTextButton, obj), ];
    const obj2 = { shrink: true, disabled: !canSubmit, size: "md", variant: "secondary", textElement: null, accessibilityLabel: null, style: null, onPress: null };
    const obj3 = { variant: "text-md/semibold", children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(util.t["cY+Oob"]);
    obj2.textElement = timestampProducer(Text_Text.Text, obj3);
    const intl4 = util.intl;
    obj2.accessibilityLabel = intl4.string(util.t["cY+Oob"]);
    obj2.style = tmp.actionButton;
    obj2.onPress = handleSubmit;
    items[1] = timestampProducer(BaseTextButton.BaseTextButton, obj2);
    obj.children = items;
    tmp4 = React5(View, obj);
  }
  return tmp4;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { rangeErrorContainer: { justifyContent: "flex-start" }, rangeError: null, datetimePickerContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, padding: 12, marginHorizontal: 12, borderRadius: nativeDefault.radii.sm };
createStyles.rangeError = createStyles;
createStyles.datetimePickerContainer = { display: "flex", alignItems: "center" };
let closure_8 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ footer: { marginVertical: 6, paddingHorizontal: 12, display: "flex", flexDirection: "row", justifyContent: "flex-end" }, actionButton: { marginLeft: 24 } });
const __initData = { code: "function DatePickerActionSheetTsx1(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/DatePickerActionSheet.tsx");

export default function DatePickerActionSheet(mode) {
  let str = mode.mode;
  if (str === undefined) {
    str = "date";
  }
  let title = mode.title;
  if (title === undefined) {
    const intl = maximumDate(1114).intl;
    title = intl.string(maximumDate(1114).t.epc9sr);
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
  let ref;
  if (startDate == null) {
    const _Date = Date;
    startDate = new Date();
  }
  let obj = startDate;
  const tmp7 = onCancel(startDate.useState(startDate), 2);
  date = tmp7[0];
  closure_6 = tmp7[1];
  const tmp8 = onCancel(startDate.useState(!mode.requireDateChanged), 2);
  first1 = tmp8[0];
  closure_8 = tmp8[1];
  const tmp3 = closure_8();
  [c9, c10] = onCancel(startDate.useState(true), 2);
  const tmp10 = onCancel(startDate.useState(true), 2);
  [tmp12, c11] = onCancel(startDate.useState(false), 2);
  const tmp11 = onCancel(startDate.useState(false), 2);
  ref = startDate.useRef(date);
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
  const tmp25 = minimumDate(6964)(() => {
    closure_12.current = startDate;
    if (onCancel != null) {
      tmp();
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  });
  const tmp26 = minimumDate(6964)(() => {
    let tmp = first1;
    if (first1) {
      tmp = c9;
    }
    if (tmp) {
      dependencyMap(_modDef4153(ref.current));
    }
    if (c9) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    } else {
      _undefined(true);
    }
  });
  const tmp15 = minimumDate(4495)();
  obj = { onDismiss: onCancel, header: closure_6(c10, { title, handleCancel: tmp25, handleSubmit: tmp26 }), children: null };
  let tmp32 = tmp12;
  if (tmp12) {
    let tmp33 = null == minimumDate;
    if (!tmp33) {
      let time = date.getTime();
      tmp33 = time >= minimumDate.getTime();
    }
    tmp32 = !tmp33;
  }
  obj = { show: tmp32, errorText: null };
  const intl2 = maximumDate(1114).intl;
  let obj4 = tmp13(4153)(minimumDate);
  let str2 = "lll";
  let str3 = "lll";
  if ("date" === str) {
    str3 = "L";
  }
  const tmp27 = minimumDate(6964)((getTime) => {
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
  obj.errorText = intl2.formatToPlainString(maximumDate(1114).t.FsJO55, { minDate: obj4.format(str3) });
  const items1 = [closure_6(ref, obj), , , ];
  if (tmp12) {
    let tmp36 = null == maximumDate;
    if (!tmp36) {
      let time1 = date.getTime();
      tmp36 = time1 <= maximumDate.getTime();
    }
  }
  const obj2 = { show: tmp12, errorText: null };
  const intl3 = maximumDate(1114).intl;
  const obj1 = { minDate: obj4.format(str3) };
  if ("date" === str) {
    str2 = "L";
  }
  const obj8 = minimumDate(4153)(maximumDate);
  obj2.errorText = intl3.formatToPlainString(maximumDate(1114).t.R7r9VN, { maxDate: minimumDate(4153)(maximumDate).format(str2) });
  items1[1] = closure_6(ref, obj2);
  obj4 = { style: tmp3.datetimePickerContainer, children: null };
  const obj3 = { maxDate: minimumDate(4153)(maximumDate).format(str2) };
  const tmp38 = date;
  const tmp13Result = minimumDate(9719);
  let str4 = "dark";
  if (tmp29Result.isThemeLight(tmp15)) {
    str4 = "light";
  }
  obj4.children = closure_6(tmp13Result, { theme: str4, date, onDateChange: tmp27, maximumDate: date, minimumDate: date1, mode: str });
  items1[2] = closure_6(tmp38, obj4);
  items1[3] = closure_6(ActionSheetFooter, { handleCancel: tmp25, handleSubmit: tmp26, canSubmit: first1 });
  obj.children = items1;
  return tmp28(maximumDate(7150).BottomSheet, obj);
};