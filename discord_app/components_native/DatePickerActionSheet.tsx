// discord_app/components_native/DatePickerActionSheet.tsx
import obj132 from "../utils/PlatformUtils.tsx";
import ThemesDefault from "../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../intl/index.native.tsx";
import Text from "../design/components/Text/native/Text.tsx";
import CollapsingText from "../design/components/Button/native/BaseTextButton.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheetCloseButton from "../design/components/Sheet/native/ActionSheetCloseButton.native.tsx";
import ActionSheetHeaderPressableText from "../design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../_runtime/00019_noop.js";
import { View } from "../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import createCacheKey from "../design/components/Styles/native/createStyles.tsx";

require = fn;
function ActionSheetHeader(handleSubmit) {
  ({ title, handleCancel } = handleSubmit);
  let obj = obj132;
  const BottomSheetTitleHeader = RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader;
  if (isAndroidResult) {
    obj = { title: null, trailing: null };
    obj[0] = title;
    obj = { onPress: null };
    obj[0] = handleCancel;
    obj[1] = callback(ActionSheetCloseButton.ActionSheetCloseButton, obj);
    let tmp4Result = callback(BottomSheetTitleHeader, obj);
  } else {
    obj1 = { title: null, leading: null, trailing: null };
    obj1[0] = title;
    const obj2 = { onPress: null, label: null };
    obj2[0] = handleCancel;
    const intl = getSystemLocale.intl;
    obj2[1] = intl.string(getSystemLocale.t["ETE/oC"]);
    obj1[1] = callback(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, obj2);
    const obj3 = { onPress: null, label: null };
    obj3[0] = handleSubmit.handleSubmit;
    const intl2 = getSystemLocale.intl;
    obj3[1] = intl2.string(getSystemLocale.t["R3BPH+"]);
    obj1[2] = callback(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, obj3);
    tmp4Result = callback(BottomSheetTitleHeader, obj1);
  }
  return tmp4Result;
}
function DateRangeError(children) {
  const show = children.show;
  const tmp = callback3();
  const ref = React.useRef(null);
  const items = [show];
  const effect = React.useEffect(() => {
    show(dependencyMap[12]);
    const obj = { ref, delay: 200 };
    const result = obj.setAccessibilityFocus(obj);
  }, items);
  let obj = show(4115);
  class A {
    constructor() {
      obj = { easing: show(closure_1_2[14]).STANDARD_EASING, duration: null };
      tmp = show;
      tmp2 = closure_1_2;
      tmp3 = show;
      num = 150;
      if (show) {
        num = 200;
      }
      obj[1] = num;
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
      obj[1] = tmpResult1.withTiming(num3, obj);
      tmpResult2 = tmp(tmp2[15]);
      num4 = 0;
      if (tmp3) {
        num4 = 12;
      }
      obj[2] = tmpResult2.withTiming(num4, obj);
      return obj;
    }
  }
  obj = { STANDARD_EASING: show(1297).STANDARD_EASING, show, withTiming: show(4664).withTiming };
  A.__closure = obj;
  A.__workletHash = 11991491746736;
  A.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(A);
  obj = { style: items1, accessibilityElementsHidden: !show, importantForAccessibility: null, children: null };
  items1 = [tmp.rangeErrorContainer, animatedStyle];
  let str = "no-hide-descendants";
  if (show) {
    str = "auto";
  }
  obj[2] = str;
  obj[3] = callback(View, { ref, accessible: true, accessibilityRole: "alert", style: tmp.rangeError, children: callback(show(4734).Text, { variant: "text-md/medium", color: "text-overlay-light", children: children.errorText }) });
  return callback(ref(4115).View, obj);
}
function ActionSheetFooter(arg0) {
  ({ handleCancel, handleSubmit, canSubmit } = arg0);
  const tmp = callback4();
  let obj = obj132;
  let tmp4 = null;
  if (obj.isAndroid()) {
    obj = { style: null, children: null };
    obj[0] = tmp.footer;
    obj = { shrink: true, size: "md", variant: "secondary", textElement: null, accessibilityLabel: null, style: null, onPress: null };
    obj1 = { variant: "text-md/semibold", children: null };
    const intl = getSystemLocale.intl;
    obj1[1] = intl.string(getSystemLocale.t["ETE/oC"]);
    obj[3] = callback(Text.Text, obj1);
    const intl2 = getSystemLocale.intl;
    obj[4] = intl2.string(getSystemLocale.t["ETE/oC"]);
    obj[5] = tmp.actionButton;
    obj[6] = handleCancel;
    const items = [callback(CollapsingText.BaseTextButton, obj), ];
    const obj2 = { shrink: true, disabled: null, size: "md", variant: "secondary", textElement: null, accessibilityLabel: null, style: null, onPress: null };
    obj2[1] = !canSubmit;
    const obj3 = { variant: "text-md/semibold", children: null };
    const intl3 = getSystemLocale.intl;
    obj3[1] = intl3.string(getSystemLocale.t["cY+Oob"]);
    obj2[4] = callback(Text.Text, obj3);
    const intl4 = getSystemLocale.intl;
    obj2[5] = intl4.string(getSystemLocale.t["cY+Oob"]);
    obj2[6] = tmp.actionButton;
    obj2[7] = handleSubmit;
    items[1] = callback(CollapsingText.BaseTextButton, obj2);
    obj[1] = items;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
}
({ jsx: closure_6, jsxs: error } = jsxProd);
let createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, padding: 12, marginHorizontal: 12, borderRadius: ThemesDefault.radii.sm };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", alignItems: "center" };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_9 = createCacheKey.createStyles({ footer: { marginVertical: 6, paddingHorizontal: 12, display: "flex", flexDirection: "row", justifyContent: "flex-end" }, actionButton: { marginLeft: 24 } });
let closure_11 = { code: "function DatePickerActionSheetTsx1(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}" };
let result = require("obj132").fileFinishedImporting("components_native/DatePickerActionSheet.tsx");

export default function DatePickerActionSheet(mode) {
  let str = mode.mode;
  if (str === undefined) {
    str = "date";
  }
  let title = mode.title;
  if (title === undefined) {
    const intl = maximumDate(1236).intl;
    title = intl.string(maximumDate(1236).t.epc9sr);
  }
  ({ startDate, maximumDate } = mode);
  const minimumDate = mode.minimumDate;
  ({ onSubmit: dependencyMap, onCancel } = mode);
  startDate = undefined;
  let first;
  let callback;
  let first1;
  let callback3;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  closure_12 = undefined;
  if (startDate == null) {
    const _Date = Date;
    startDate = new Date();
  }
  let obj = startDate;
  const tmp7 = onCancel(startDate.useState(startDate), 2);
  first = tmp7[0];
  callback = tmp7[1];
  const tmp8 = onCancel(startDate.useState(!mode.requireDateChanged), 2);
  first1 = tmp8[0];
  callback3 = tmp8[1];
  const tmp3 = callback3();
  [c9, c10] = onCancel(startDate.useState(true), 2);
  const tmp10 = onCancel(startDate.useState(true), 2);
  [tmp12, c11] = onCancel(startDate.useState(false), 2);
  const tmp11 = onCancel(startDate.useState(false), 2);
  closure_12 = startDate.useRef(first);
  let date;
  if (null != maximumDate) {
    const _Date2 = Date;
    date = new Date(maximumDate.getFullYear() + 1, 0, 1, 0, -1);
  }
  let date1;
  if (null != minimumDate) {
    const _Date3 = Date;
    date1 = new Date(minimumDate.getFullYear(), 0, 1, 0);
  }
  const items = [first];
  const effect = obj.useEffect(() => {
    closure_12.current = first;
  }, items);
  const tmp25 = minimumDate(8601)(() => {
    closure_12.current = startDate;
    if (onCancel != null) {
      tmp();
    }
    minimumDate(dependencyMap[6]).hideActionSheet();
  });
  const tmp26 = minimumDate(8601)(() => {
    let tmp = first1;
    if (first1) {
      tmp = c9;
    }
    if (tmp) {
      callback(minimumDate(dependencyMap[20])(ref.current));
    }
    if (c9) {
      minimumDate(dependencyMap[6]).hideActionSheet();
      const obj = minimumDate(dependencyMap[6]);
    } else {
      _undefined(true);
    }
  });
  const tmp15 = minimumDate(4310)();
  obj = { onDismiss: onCancel, header: callback(c10, { title, handleCancel: tmp25, handleSubmit: tmp26 }), children: null };
  let tmp32 = tmp12;
  if (tmp12) {
    let tmp33 = null == minimumDate;
    if (!tmp33) {
      let time = first.getTime();
      tmp33 = time >= minimumDate.getTime();
    }
    tmp32 = !tmp33;
  }
  obj = { show: tmp32, errorText: null };
  const intl2 = maximumDate(1236).intl;
  obj1 = { minDate: null };
  const tmp27 = minimumDate(8601)((getTime) => {
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
      callback3(true);
      callback2(getTime);
    }
  });
  const tmp28 = first1;
  obj1[0] = minimumDate(3975)(minimumDate).format("L");
  obj[1] = intl2.formatToPlainString(maximumDate(1236).t.FsJO55, obj1);
  const items1 = [callback(closure_12, obj), , , ];
  if (tmp12) {
    let tmp35 = null == maximumDate;
    if (!tmp35) {
      let time1 = first.getTime();
      tmp35 = time1 <= maximumDate.getTime();
    }
  }
  const obj2 = { show: tmp12, errorText: null };
  const intl3 = maximumDate(1236).intl;
  const obj3 = { maxDate: null };
  const obj6 = minimumDate(3975)(minimumDate);
  obj3[0] = minimumDate(3975)(maximumDate).format("L");
  obj2[1] = intl3.formatToPlainString(maximumDate(1236).t.R7r9VN, obj3);
  items1[1] = callback(closure_12, obj2);
  const obj4 = { style: tmp3.datetimePickerContainer, children: null };
  const obj9 = minimumDate(3975)(maximumDate);
  const tmp37 = first;
  const tmp13Result = minimumDate(8830);
  let str2 = "dark";
  if (tmp29Result.isThemeLight(tmp15)) {
    str2 = "light";
  }
  obj4[1] = callback(tmp13Result, { theme: str2, date: first, onDateChange: tmp27, maximumDate: date, minimumDate: date1, mode: str });
  items1[2] = callback(tmp37, obj4);
  items1[3] = callback(ActionSheetFooter, { handleCancel: tmp25, handleSubmit: tmp26, canSubmit: first1 });
  obj[2] = items1;
  return tmp28(maximumDate(6950).BottomSheet, obj);
};