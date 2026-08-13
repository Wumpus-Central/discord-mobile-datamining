// discord_app/components_native/DatePickerActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "CollapsingText";
import jsxProd from "Background";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { RedesignBottomSheetTitleHeaderBase } from "../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { set } from "../utils/PlatformUtils.tsx";

let closure_6;
let error;
const require = arg1;
function ActionSheetHeader(handleSubmit) {
  let handleCancel;
  let title;
  ({ title, handleCancel } = handleSubmit);
  let obj = set;
  const BottomSheetTitleHeader = RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader;
  if (isAndroidResult) {
    obj = { title: null, trailing: null };
    obj[0] = title;
    obj = { onPress: null };
    obj[0] = handleCancel;
    obj[1] = tmp4(tmp(5805).ActionSheetCloseButton, obj);
    let tmp4Result = tmp4(BottomSheetTitleHeader, obj);
  } else {
    const obj1 = { title: null, leading: null, trailing: null };
    obj1[0] = title;
    const obj2 = { onPress: null, label: null };
    obj2[0] = handleCancel;
    const intl = tmp(1236).intl;
    obj2[1] = intl.string(tmp(1236).t["ETE/oC"]);
    obj1[1] = tmp4(tmp(9025).ActionSheetHeaderPressableText, obj2);
    const obj3 = { onPress: null, label: null };
    obj3[0] = handleSubmit.handleSubmit;
    const intl2 = tmp(1236).intl;
    obj3[1] = intl2.string(tmp(1236).t["R3BPH+"]);
    obj1[2] = tmp4(tmp(9025).ActionSheetHeaderPressableText, obj3);
    tmp4Result = tmp4(BottomSheetTitleHeader, obj1);
  }
  return tmp4Result;
}
function DateRangeError(children) {
  const show = children.show;
  let ref;
  const tmp = createCacheKey();
  ref = React.useRef(null);
  const items = [show];
  const effect = React.useEffect(() => {
    let obj = show(outer1_2[12]);
    obj = { ref, delay: 200 };
    const result = obj.setAccessibilityFocus(obj);
  }, items);
  let obj = show(4083);
  class A {
    constructor() {
      obj = { easing: show(outer1_2[14]).STANDARD_EASING, duration: null };
      tmp = show;
      tmp2 = outer1_2;
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
  obj = { STANDARD_EASING: show(1297).STANDARD_EASING, show, withTiming: show(4343).withTiming };
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
  obj[3] = closure_6(View, { ref, accessible: true, accessibilityRole: "alert", style: tmp.rangeError, children: closure_6(show(4338).Text, { variant: "text-md/medium", color: "text-overlay-light", children: children.errorText }) });
  return closure_6(ref(4083).View, obj);
}
function ActionSheetFooter(arg0) {
  let canSubmit;
  let handleCancel;
  let handleSubmit;
  ({ handleCancel, handleSubmit, canSubmit } = arg0);
  const tmp = callback3();
  let obj = set;
  let tmp4 = null;
  if (obj.isAndroid()) {
    obj = { style: null, children: null };
    obj[0] = tmp.footer;
    obj = { shrink: true, size: "md", variant: "secondary", textElement: null, accessibilityLabel: null, style: null, onPress: null };
    const obj1 = { variant: "text-md/semibold", children: null };
    const intl = tmp2(1236).intl;
    obj1[1] = intl.string(tmp2(1236).t["ETE/oC"]);
    obj[3] = callback(tmp2(4338).Text, obj1);
    const intl2 = tmp2(1236).intl;
    obj[4] = intl2.string(tmp2(1236).t["ETE/oC"]);
    obj[5] = tmp.actionButton;
    obj[6] = handleCancel;
    const items = [callback(tmp2(4756).BaseTextButton, obj), ];
    const obj2 = { shrink: true, disabled: null, size: "md", variant: "secondary", textElement: null, accessibilityLabel: null, style: null, onPress: null };
    obj2[1] = !canSubmit;
    const obj3 = { variant: "text-md/semibold", children: null };
    const intl3 = tmp2(1236).intl;
    obj3[1] = intl3.string(tmp2(1236).t["cY+Oob"]);
    obj2[4] = callback(tmp2(4338).Text, obj3);
    const intl4 = tmp2(1236).intl;
    obj2[5] = intl4.string(tmp2(1236).t["cY+Oob"]);
    obj2[6] = tmp.actionButton;
    obj2[7] = handleSubmit;
    items[1] = callback(tmp2(4756).BaseTextButton, obj2);
    obj[1] = items;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { rangeErrorContainer: { justifyContent: "flex-start" }, rangeError: null, datetimePickerContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_CRITICAL, padding: 12, marginHorizontal: 12, borderRadius: require("Themes").radii.sm };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_9 = createCacheKey.createStyles({ footer: { marginVertical: 6, paddingHorizontal: 12, display: "flex", flexDirection: "row", justifyContent: "flex-end" }, actionButton: { marginLeft: 24 } });
let closure_11 = { code: "function DatePickerActionSheetTsx1(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("components_native/DatePickerActionSheet.tsx");

export default function DatePickerActionSheet(mode) {
  let c10;
  let c11;
  let c9;
  let dependencyMap;
  let maximumDate;
  let onCancel;
  let startDate;
  let tmp12;
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
  let createCacheKey;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  let closure_12;
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
  createCacheKey = tmp8[1];
  let tmp3 = createCacheKey();
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
  const tmp25 = minimumDate(8540)(() => {
    closure_12.current = startDate;
    if (onCancel != null) {
      tmp();
    }
    minimumDate(outer1_2[6]).hideActionSheet();
  });
  const tmp26 = minimumDate(8540)(() => {
    let tmp = first1;
    if (first1) {
      tmp = c9;
    }
    if (tmp) {
      callback(minimumDate(outer1_2[20])(ref.current));
    }
    if (c9) {
      minimumDate(outer1_2[6]).hideActionSheet();
      const obj = minimumDate(outer1_2[6]);
    } else {
      _undefined(true);
    }
  });
  const tmp15 = minimumDate(4278)();
  obj = { onDismiss: onCancel, header: null, children: null };
  obj[1] = callback(c10, { title, handleCancel: tmp25, handleSubmit: tmp26 });
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
  const intl2 = tmp29(1236).intl;
  const obj1 = { minDate: null };
  const tmp27 = minimumDate(8540)((getTime) => {
    if (null != getTime) {
      let tmp2 = null == minimumDate;
      if (tmp2) {
        tmp2 = null == maximumDate;
      }
      if (!tmp2) {
        let tmp4 = null == obj2;
        if (!tmp4) {
          const time = getTime.getTime();
          tmp4 = time >= obj2.getTime();
        }
        if (tmp4) {
          let tmp6 = null == maximumDate;
          if (!tmp6) {
            const time1 = getTime.getTime();
            tmp6 = time1 <= obj.getTime();
          }
          tmp4 = tmp6;
          obj = maximumDate;
        }
        c10(tmp4);
        const tmp3 = c10;
      }
      _undefined(false);
      callback3(true);
      callback2(getTime);
    }
  });
  const tmp28 = first1;
  obj1[0] = minimumDate(3943)(minimumDate).format("L");
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
  const intl3 = tmp29(1236).intl;
  const obj3 = { maxDate: null };
  const obj6 = minimumDate(3943)(minimumDate);
  obj3[0] = minimumDate(3943)(maximumDate).format("L");
  obj2[1] = intl3.formatToPlainString(maximumDate(1236).t.R7r9VN, obj3);
  items1[1] = callback(closure_12, obj2);
  const obj4 = { style: tmp3.datetimePickerContainer, children: null };
  const obj9 = minimumDate(3943)(maximumDate);
  const tmp37 = first;
  const tmp13Result = minimumDate(9026);
  let str2 = "dark";
  if (tmp29Result.isThemeLight(tmp15)) {
    str2 = "light";
  }
  obj4[1] = callback(tmp13Result, { theme: str2, date: first, onDateChange: tmp27, maximumDate: date, minimumDate: date1, mode: str });
  items1[2] = callback(tmp37, obj4);
  items1[3] = callback(ActionSheetFooter, { handleCancel: tmp25, handleSubmit: tmp26, canSubmit: first1 });
  obj[2] = items1;
  return tmp28(maximumDate(5437).BottomSheet, obj);
};