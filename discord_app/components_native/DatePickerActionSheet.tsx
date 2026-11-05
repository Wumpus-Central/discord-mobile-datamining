// === Module 9161: DatePickerActionSheet ===

// Module 9161 (DatePickerActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _modDef2171 from "module_2171" /* 2171 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import Text_Text from "Text/Text" /* 5763 */;
import BaseTextButton from "BaseTextButton" /* 5771 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 6159 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7460 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 7505 */;
import ActionSheetHeaderPressableText from "ActionSheetHeaderPressableText" /* 9162 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ActionSheetHeader(handleSubmit) {
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
}
function DateRangeError(children) {
  const show = children.show;
  const tmp = closure_8();
  const ref = noop.useRef(null);
  let _require = ref;
  items = [show];
  const effect = noop.useEffect(() => {
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref: _undefined, delay: 200 });
  }, items);
  const items1 = [closure_11, require("native").STANDARD_EASING, show, require("timing/timing").withTiming];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class DatePickerActionSheetTsx1 {
    constructor() {
      obj = { easing: closure_0, duration: null };
      tmp = closure_1;
      num = 150;
      if (closure_1) {
        num = 200;
      }
      obj.duration = num;
      tmp2 = closure_2;
      num2 = 0;
      if (tmp) {
        num2 = 1;
      }
      obj1 = { opacity: tmp2(num2, obj), maxHeight: null, paddingVertical: null };
      num3 = 0;
      if (tmp) {
        num3 = 500;
      }
      obj1.maxHeight = tmp2(num3, obj);
      num4 = 0;
      if (tmp) {
        num4 = 12;
      }
      obj1.paddingVertical = tmp2(num4, obj);
      return obj1;
    }
  }
  const items2 = [tmp7, tmp8, tmp9];
  DatePickerActionSheetTsx1.__closure = items2;
  DatePickerActionSheetTsx1.__workletHash = 15125772430249;
  DatePickerActionSheetTsx1.__initData = tmp6;
  const animatedStyle = require("module_1652").useAnimatedStyle(DatePickerActionSheetTsx1);
  let obj2 = { style: null, accessibilityElementsHidden: !show, importantForAccessibility: null, children: null };
  const items3 = [tmp.rangeErrorContainer, animatedStyle];
  obj2.style = items3;
  let str = "no-hide-descendants";
  if (show) {
    str = "auto";
  }
  obj2.importantForAccessibility = str;
  let obj = require("module_1652");
  obj2.children = closure_6(View, { ref, accessible: true, accessibilityRole: "alert", style: tmp.rangeError, children: closure_6(require("Text/Text").Text, { variant: "body-md/medium", color: "text-feedback-critical", children: children.errorText }) });
  return closure_6(_modDef1652.View, obj2);
}
function ActionSheetFooter(arg0) {
  ({ handleCancel, handleSubmit, canSubmit } = arg0);
  const tmp = closure_9();
  let tmp4 = null;
  if (obj.isAndroid()) {
    const obj2 = { style: tmp.footer, children: null };
    const obj3 = { shrink: true, size: "md", variant: "secondary", textElement: null, accessibilityLabel: null, style: null, onPress: null };
    const obj4 = { variant: "body-md/semibold", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t["ETE/oC"]);
    obj3.textElement = timestampProducer(Text_Text.Text, obj4);
    const intl2 = util.intl;
    obj3.accessibilityLabel = intl2.string(util.t["ETE/oC"]);
    obj3.style = tmp.actionButton;
    obj3.onPress = handleCancel;
    items = [timestampProducer(BaseTextButton.BaseTextButton, obj3), ];
    const obj5 = { shrink: true, disabled: !canSubmit, size: "md", variant: "secondary", textElement: null, accessibilityLabel: null, style: null, onPress: null };
    const obj6 = { variant: "body-md/semibold", children: null };
    const intl3 = util.intl;
    obj6.children = intl3.string(util.t["cY+Oob"]);
    obj5.textElement = timestampProducer(Text_Text.Text, obj6);
    const intl4 = util.intl;
    obj5.accessibilityLabel = intl4.string(util.t["cY+Oob"]);
    obj5.style = tmp.actionButton;
    obj5.onPress = handleSubmit;
    items[1] = timestampProducer(BaseTextButton.BaseTextButton, obj5);
    obj2.children = items;
    tmp4 = metroImportDefault(View, obj2);
  }
  return tmp4;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let createStyles = fn(5143);
let obj2 = { rangeErrorContainer: { justifyContent: "flex-start" }, rangeError: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_CRITICAL, padding: 12, marginHorizontal: 12, borderRadius: nativeDefault.radii.sm }, datetimePickerContainer: { display: "flex", alignItems: "center" } };
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(5143);
let closure_9 = createStyles.createStyles({ footer: { marginVertical: 6, paddingHorizontal: 12, display: "flex", flexDirection: "row", justifyContent: "flex-end" }, actionButton: { marginLeft: 24 } });
let closure_11 = { code: "(function DatePickerActionSheetTsx1(){let[STANDARD_EASING,show,withTiming]=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};})" };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/DatePickerActionSheet.tsx");

export default function DatePickerActionSheet(mode) {
  let str = mode.mode;
  if (str === undefined) {
    str = "date";
  }
  let title = mode.title;
  if (title === undefined) {
    const intl = maximumDate(1113).intl;
    title = intl.string(maximumDate(1113).t.epc9sr);
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
  items = [date];
  const effect = obj.useEffect(() => {
    closure_12.current = current;
  }, items);
  const tmp25 = minimumDate(7280)(() => {
    closure_12.current = startDate;
    if (onCancel != null) {
      tmp();
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  });
  const tmp26 = minimumDate(7280)(() => {
    let tmp = first1;
    if (first1) {
      tmp = c9;
    }
    if (tmp) {
      dependencyMap(_modDef2171(ref.current));
    }
    if (c9) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    } else {
      _undefined(true);
    }
  });
  const tmp15 = minimumDate(5379)();
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
  const intl2 = maximumDate(1113).intl;
  const tmp27 = minimumDate(7280)((getTime) => {
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
  const obj5 = minimumDate(2171)(minimumDate);
  obj3.errorText = intl2.formatToPlainString(maximumDate(1113).t.FsJO55, { minDate: minimumDate(2171)(minimumDate).format(str3) });
  const items1 = [closure_6(ref, obj3), , , ];
  if (tmp12) {
    let tmp36 = null == maximumDate;
    if (!tmp36) {
      let time1 = date.getTime();
      tmp36 = time1 <= maximumDate.getTime();
    }
  }
  const obj6 = { show: tmp12, errorText: null };
  const intl3 = maximumDate(1113).intl;
  const obj4 = { minDate: minimumDate(2171)(minimumDate).format(str3) };
  if ("date" === str) {
    str2 = "L";
  }
  const obj8 = minimumDate(2171)(maximumDate);
  obj6.errorText = intl3.formatToPlainString(maximumDate(1113).t.R7r9VN, { maxDate: minimumDate(2171)(maximumDate).format(str2) });
  items1[1] = closure_6(ref, obj6);
  const obj9 = { style: tmp3.datetimePickerContainer, children: null };
  const obj7 = { maxDate: minimumDate(2171)(maximumDate).format(str2) };
  const tmp38 = date;
  const tmp13Result = minimumDate(9163);
  let str4 = "dark";
  if (tmp29Result.isThemeLight(tmp15)) {
    str4 = "light";
  }
  obj9.children = closure_6(tmp13Result, { theme: str4, date, onDateChange: tmp27, maximumDate: date, minimumDate: date1, mode: str });
  items1[2] = closure_6(tmp38, obj9);
  items1[3] = closure_6(ActionSheetFooter, { handleCancel: tmp25, handleSubmit: tmp26, canSubmit: first1 });
  obj2.children = items1;
  return tmp28(maximumDate(5398).BottomSheet, obj2);
};