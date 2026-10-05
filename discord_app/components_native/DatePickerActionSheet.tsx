// discord_app/components_native/DatePickerActionSheet.tsx
import react_native from "../../_runtime/00017_react-native.js";
import react2 from "../../_runtime/00576_react.js";
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../intl/index.native.tsx";
import native from "../design/void/native.tsx";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import _modDef4461 from "../../_runtime/metro/04461__.js";
import ActionSheetActionCreatorsDefault from "../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../design/components/Text/native/Text.tsx";
import timing from "../design/animation/reanimated/timing/timing.tsx";
import BaseTextButton3 from "../design/components/Button/native/BaseTextButton.native.tsx";
import react_native2 from "../modules/a11y/native/setAccessibilityFocus.android.tsx";
import BottomSheetTitleHeader2 from "../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheetCloseButton from "../design/components/Sheet/native/ActionSheetCloseButton.native.tsx";
import ActionSheetHeaderPressableText3 from "../design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../_runtime/00019_react.js";
import Fragment from "../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
let react = react_mod;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  rangeErrorContainer: { justifyContent: "flex-start" },
  rangeError: obj2,
  datetimePickerContainer: { display: "flex", alignItems: "center" },
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
  padding: 12,
  marginHorizontal: 12,
  borderRadius: nativeDefault.radii.sm,
};
let closure_8 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles({
  footer: {
    marginVertical: 6,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  actionButton: { marginLeft: 24 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let handleCancel;
      let handleSubmit;
      let title;
      let tmp15;
      const obj = react2;
      const cResult = obj.c(15);
      ({ title, handleCancel, handleSubmit } = arg0);
      const obj2 = PlatformUtils;
      if (obj2.isAndroid()) {
        let tmp18;
        if (cResult[0] !== handleCancel) {
          const obj3 = { onPress: handleCancel };
          const tmp20 = metroRequire(ActionSheetCloseButton.ActionSheetCloseButton, obj3);
          cResult[0] = handleCancel;
          cResult[1] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[1];
        }
        if (cResult[2] === tmp18) {
          let tmp21;
          if (cResult[3] === title) {
            tmp21 = cResult[4];
          }
          tmp15 = tmp21;
        }
        const obj4 = { title, trailing: tmp18 };
        const tmp23 = metroRequire(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj4);
        cResult[2] = tmp18;
        cResult[3] = title;
        cResult[4] = tmp23;
        tmp21 = tmp23;
      } else {
        let tmp5;
        let tmp7;
        let tmp10;
        let tmp12;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl5.intl;
          const stringResult = intl.string(intl5.t["ETE/oC"]);
          cResult[5] = stringResult;
          tmp5 = stringResult;
        } else {
          tmp5 = cResult[5];
        }
        if (cResult[6] !== handleCancel) {
          const obj5 = { onPress: handleCancel, label: tmp5 };
          const tmp9 = metroRequire(ActionSheetHeaderPressableText3.ActionSheetHeaderPressableText, obj5);
          cResult[6] = handleCancel;
          cResult[7] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl5.intl;
          const stringResult1 = intl2.string(intl5.t["R3BPH+"]);
          cResult[8] = stringResult1;
          tmp10 = stringResult1;
        } else {
          tmp10 = cResult[8];
        }
        if (cResult[9] !== handleSubmit) {
          const obj6 = { onPress: handleSubmit, label: tmp10 };
          const tmp14 = metroRequire(ActionSheetHeaderPressableText3.ActionSheetHeaderPressableText, obj6);
          cResult[9] = handleSubmit;
          cResult[10] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[10];
        }
        if (cResult[11] === tmp7) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === title) {
              tmp15 = cResult[14];
            }
          }
        }
        const obj7 = { title, leading: tmp7, trailing: tmp12 };
        const tmp17 = metroRequire(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj7);
        cResult[11] = tmp7;
        cResult[12] = tmp12;
        cResult[13] = title;
        cResult[14] = tmp17;
        tmp15 = tmp17;
      }
      return tmp15;
    }
  : (handleSubmit) => {
      let ActionSheetHeaderPressableText;
      let ActionSheetHeaderPressableText2;
      let handleCancel;
      let intl;
      let intl2;
      let obj3;
      let obj5;
      let obj6;
      let title;
      let tmp4Result;
      ({ title, handleCancel } = handleSubmit);
      handleSubmit = handleSubmit.handleSubmit;
      const obj = PlatformUtils;
      const isAndroidResult = obj.isAndroid();
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      if (isAndroidResult) {
        const obj2 = { title, trailing: metroRequire(ActionSheetCloseButton.ActionSheetCloseButton, obj3) };
        obj3 = { onPress: handleCancel };
        tmp4Result = metroRequire(BottomSheetTitleHeader, obj2);
      } else {
        const obj4 = {
          title,
          leading: metroRequire(ActionSheetHeaderPressableText, obj5),
          trailing: metroRequire(ActionSheetHeaderPressableText2, obj6),
        };
        obj5 = { onPress: handleCancel, label: intl.string(intl5.t["ETE/oC"]) };
        ActionSheetHeaderPressableText = ActionSheetHeaderPressableText3.ActionSheetHeaderPressableText;
        intl = intl5.intl;
        obj6 = { onPress: handleSubmit, label: intl2.string(intl5.t["R3BPH+"]) };
        ActionSheetHeaderPressableText2 = ActionSheetHeaderPressableText3.ActionSheetHeaderPressableText;
        intl2 = intl5.intl;
        tmp4Result = metroRequire(BottomSheetTitleHeader, obj4);
      }
      return tmp4Result;
    };
const __initData = {
  code: "function DatePickerActionSheetTsx1(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}",
};
const __initData2 = {
  code: "function DatePickerActionSheetTsx2(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (show) => {
      let first;
      let tmp7;
      let obj = show(576);
      const cResult = obj.c(16);
      show = show.show;
      const errorText = show.errorText;
      const tmp4 = closure_8();
      const ref = react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          const obj = react_native2;
          const obj2 = { ref, delay: 200 };
          const result = obj.setAccessibilityFocus(obj2);
        };
        let num = 0;
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== show) {
        const items = [show];
        let num2 = 1;
        cResult[1] = show;
        let num3 = 2;
        cResult[2] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      const effect = react.useEffect(first, tmp7);
      const tmpResult = tmp(4612);
      const fn2 = function x() {
        let num;
        let num3;
        let num4;
        let withTiming2;
        let withTiming3;
        const obj = { easing: native.STANDARD_EASING, duration: num };
        num = 150;
        if (show) {
          num = 200;
        }
        let num2 = 0;
        const withTiming = timing.withTiming;
        timing;
        if (show) {
          num2 = 1;
        }
        const obj2 = {
          opacity: withTiming(num2, obj),
          maxHeight: withTiming2(num3, obj),
          paddingVertical: withTiming3(num4, obj),
        };
        num3 = 0;
        withTiming2 = timing.withTiming;
        timing;
        if (show) {
          num3 = 500;
        }
        num4 = 0;
        withTiming3 = timing.withTiming;
        timing;
        if (show) {
          num4 = 12;
        }
        return obj2;
      };
      fn2.__closure = { STANDARD_EASING: show(1188).STANDARD_EASING, show, withTiming: show(4891).withTiming };
      fn2.__workletHash = 11991491746736;
      fn2.__initData = __initData;
      ({ STANDARD_EASING: show(1188).STANDARD_EASING, show, withTiming: show(4891).withTiming });
      const animatedStyle = tmpResult.useAnimatedStyle(fn2);
      if (cResult[3] === animatedStyle) {
        let tmp10;
        let tmp12;
        if (cResult[4] === tmp4.rangeErrorContainer) {
          tmp10 = cResult[5];
        }
        let str = "no-hide-descendants";
        if (show) {
          str = "auto";
        }
        if (cResult[6] !== errorText) {
          const obj4 = { variant: "text-md/medium", color: "text-feedback-critical", children: errorText };
          const tmp14 = closure_6(show(4886).Text, obj4);
          let num4 = 6;
          cResult[6] = errorText;
          cResult[7] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[7];
        }
        if (cResult[8] === tmp4.rangeError) {
          let tmp15;
          if (cResult[9] === tmp12) {
            tmp15 = cResult[10];
          }
          if (cResult[11] === tmp10) {
            if (cResult[12] === !show) {
              if (cResult[13] === str) {
                let tmp19;
                if (cResult[14] === tmp15) {
                  tmp19 = cResult[15];
                }
                return tmp19;
              }
            }
          }
          const obj5 = {
            style: tmp10,
            accessibilityElementsHidden: !show,
            importantForAccessibility: str,
            children: tmp15,
          };
          const tmp22 = closure_6(ref(4612).View, obj5);
          cResult[11] = tmp10;
          cResult[12] = !show;
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
    }
  : (show) => {
      let items1;
      let obj4;
      let str;
      show = show.show;
      const errorText = show.errorText;
      const tmp = closure_8();
      const ref = react.useRef(null);
      const items = [show];
      const effect = react.useEffect(() => {
        const obj = react_native2;
        const obj2 = { ref, delay: 200 };
        const result = obj.setAccessibilityFocus(obj2);
      }, items);
      let obj = show(4612);
      const tmp4 = show;
      class S {
        constructor() {
          let num;
          let num3;
          let num4;
          let withTiming2;
          let withTiming3;
          const obj = { easing: native.STANDARD_EASING, duration: num };
          num = 150;
          if (show) {
            num = 200;
          }
          let num2 = 0;
          const withTiming = timing.withTiming;
          timing;
          if (show) {
            num2 = 1;
          }
          const obj2 = {
            opacity: withTiming(num2, obj),
            maxHeight: withTiming2(num3, obj),
            paddingVertical: withTiming3(num4, obj),
          };
          num3 = 0;
          withTiming2 = timing.withTiming;
          timing;
          if (show) {
            num3 = 500;
          }
          num4 = 0;
          withTiming3 = timing.withTiming;
          timing;
          if (show) {
            num4 = 12;
          }
          return obj2;
        }
      }
      let obj2 = { STANDARD_EASING: show(1188).STANDARD_EASING, show, withTiming: show(4891).withTiming };
      S.__closure = obj2;
      S.__workletHash = 8613167691923;
      S.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(S);
      const obj3 = {
        style: items1,
        accessibilityElementsHidden: !show,
        importantForAccessibility: str,
        children: closure_6(View, obj4),
      };
      items1 = [tmp.rangeErrorContainer, animatedStyle];
      str = "no-hide-descendants";
      View = ref(4612).View;
      if (show) {
        str = "auto";
      }
      obj4 = {
        ref,
        accessible: true,
        accessibilityRole: "alert",
        style: tmp.rangeError,
        children: closure_6(tmp4(4886).Text, {
          variant: "text-md/medium",
          color: "text-feedback-critical",
          children: errorText,
        }),
      };
      return closure_6(View, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (canSubmit) => {
      let handleCancel;
      let handleSubmit;
      let intl;
      let intl3;
      let items;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(15);
      ({ handleCancel, handleSubmit } = canSubmit);
      canSubmit = canSubmit.canSubmit;
      const tmp4 = closure_9();
      const obj2 = PlatformUtils;
      if (obj2.isAndroid()) {
        const _Symbol = Symbol;
        const footer = tmp4.footer;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/semibold", children: intl.string(intl5.t["ETE/oC"]) };
          const Text = Text_Text.Text;
          intl = intl5.intl;
          const tmp10 = metroRequire(Text, obj3);
          const intl2 = intl5.intl;
          const stringResult = intl2.string(intl5.t["ETE/oC"]);
          cResult[0] = tmp10;
          cResult[1] = stringResult;
          tmp7 = tmp10;
          tmp8 = stringResult;
        } else {
          [tmp7, tmp8] = cResult;
        }
        if (cResult[2] === tmp4.actionButton) {
          let tmp12;
          let tmp17;
          let tmp16;
          if (cResult[3] === handleCancel) {
            tmp12 = cResult[4];
          }
          const _Symbol2 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-md/semibold", children: intl3.string(intl5.t["cY+Oob"]) };
            const Text2 = Text_Text.Text;
            intl3 = intl5.intl;
            const tmp19 = metroRequire(Text2, obj4);
            const intl4 = intl5.intl;
            const stringResult1 = intl4.string(intl5.t["cY+Oob"]);
            cResult[5] = tmp19;
            cResult[6] = stringResult1;
            tmp17 = stringResult1;
            tmp16 = tmp19;
          } else {
            tmp16 = cResult[5];
            tmp17 = cResult[6];
          }
          if (cResult[7] === tmp4.actionButton) {
            if (cResult[8] === handleSubmit) {
              let tmp21;
              if (cResult[9] === !canSubmit) {
                tmp21 = cResult[10];
              }
              if (cResult[11] === tmp4.footer) {
                if (cResult[12] === tmp12) {
                  let tmp24;
                  if (cResult[13] === tmp21) {
                    tmp24 = cResult[14];
                  }
                  return tmp24;
                }
              }
              const obj5 = { style: footer, children: items };
              items = [tmp12, tmp21];
              const tmp27 = metroImportDefault(View, obj5);
              cResult[11] = tmp4.footer;
              cResult[12] = tmp12;
              cResult[13] = tmp21;
              cResult[14] = tmp27;
              tmp24 = tmp27;
            }
          }
          const obj6 = {
            shrink: true,
            disabled: !canSubmit,
            size: "md",
            variant: "secondary",
            textElement: tmp16,
            accessibilityLabel: tmp17,
            style: tmp4.actionButton,
            onPress: handleSubmit,
          };
          const tmp23 = metroRequire(BaseTextButton3.BaseTextButton, obj6);
          cResult[7] = tmp4.actionButton;
          cResult[8] = handleSubmit;
          cResult[9] = !canSubmit;
          cResult[10] = tmp23;
          tmp21 = tmp23;
        }
        const obj7 = {
          shrink: true,
          size: "md",
          variant: "secondary",
          textElement: tmp7,
          accessibilityLabel: tmp8,
          style: tmp4.actionButton,
          onPress: handleCancel,
        };
        const tmp14 = metroRequire(BaseTextButton3.BaseTextButton, obj7);
        cResult[2] = tmp4.actionButton;
        cResult[3] = handleCancel;
        cResult[4] = tmp14;
        tmp12 = tmp14;
      } else {
        return null;
      }
    }
  : (arg0) => {
      let Text;
      let Text2;
      let canSubmit;
      let handleCancel;
      let handleSubmit;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj4;
      let obj6;
      ({ handleCancel, handleSubmit, canSubmit } = arg0);
      const tmp = closure_9();
      let tmp4 = null;
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const obj2 = { style: tmp.footer, children: items };
        const obj3 = {
          shrink: true,
          size: "md",
          variant: "secondary",
          textElement: metroRequire(Text, obj4),
          accessibilityLabel: intl2.string(intl5.t["ETE/oC"]),
          style: tmp.actionButton,
          onPress: handleCancel,
        };
        const BaseTextButton = BaseTextButton3.BaseTextButton;
        obj4 = { variant: "text-md/semibold", children: intl.string(intl5.t["ETE/oC"]) };
        Text = Text_Text.Text;
        intl = intl5.intl;
        intl2 = intl5.intl;
        items = [metroRequire(BaseTextButton, obj3)];
        const obj5 = {
          shrink: true,
          disabled: !canSubmit,
          size: "md",
          variant: "secondary",
          textElement: metroRequire(Text2, obj6),
          accessibilityLabel: intl4.string(intl5.t["cY+Oob"]),
          style: tmp.actionButton,
          onPress: handleSubmit,
        };
        const BaseTextButton2 = BaseTextButton3.BaseTextButton;
        obj6 = { variant: "text-md/semibold", children: intl3.string(intl5.t["cY+Oob"]) };
        Text2 = Text_Text.Text;
        intl3 = intl5.intl;
        intl4 = intl5.intl;
        items[1] = metroRequire(BaseTextButton2, obj5);
        tmp4 = metroImportDefault(View, obj2);
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (minimumDate) {
      let date;
      let first;
      let first1;
      let items1;
      let maximumDate;
      let mode;
      let onSubmit;
      let startDate;
      let title;
      let tmp19;
      let tmp22;
      let tmp25;
      let tmp28;
      let tmp29;
      let tmp31;
      let tmp32;
      let tmp4;
      let tmp7;
      let tmp = maximumDate;
      let obj = maximumDate(onSubmit[8]);
      const cResult = obj.c(63);
      ({ mode, title, startDate, maximumDate } = minimumDate);
      minimumDate = minimumDate.minimumDate;
      onSubmit = minimumDate.onSubmit;
      const onCancel = minimumDate.onCancel;
      let str = "date";
      const requireDateChanged = minimumDate.requireDateChanged;
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
        tmp4 = stringResult;
      } else {
        tmp4 = cResult[1];
      }
      const tmp6 = first1();
      if (cResult[2] !== startDate) {
        date = startDate;
        if (startDate == null) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          date = new Date();
        }
        cResult[2] = startDate;
        cResult[3] = date;
        tmp7 = date;
      } else {
        tmp7 = cResult[3];
      }
      react = tmp7;
      let closure_5 = tmp11;
      const tmp12 = onCancel(react.useState(tmp7), 2);
      date = tmp12[0];
      let closure_7 = tmp12[1];
      const tmp14 = onCancel(react.useState(!requireDateChanged), 2);
      first1 = tmp14[0];
      closure_9 = tmp14[1];
      const tmp16 = onCancel(react.useState(true), 2);
      const first2 = tmp16[0];
      let closure_11 = tmp16[1];
      [tmp19, closure_12] = onCancel(react.useState(false), 2);
      onCancel(react.useState(false), 2);
      const tmp21 = minimumDate(onSubmit[20])();
      const ref = react.useRef(date);
      const obj2 = react;
      if (cResult[4] !== maximumDate) {
        let date1;
        if (null != maximumDate) {
          const _Date2 = Date;
          const self3 = this;
          const self4 = this;
          date1 = new Date(maximumDate.getFullYear() + 1, 0, 1, 0, -1);
        }
        cResult[4] = maximumDate;
        cResult[5] = date1;
        tmp22 = date1;
      } else {
        tmp22 = cResult[5];
      }
      if (cResult[6] !== minimumDate) {
        let date2;
        if (null != minimumDate) {
          const _Date3 = Date;
          const self5 = this;
          const self6 = this;
          date2 = new Date(minimumDate.getFullYear(), 0, 1, 0);
        }
        cResult[6] = minimumDate;
        cResult[7] = date2;
        tmp25 = date2;
      } else {
        tmp25 = cResult[7];
      }
      if (cResult[8] !== date) {
        function ee() {
          ref.current = current;
        }
        const items = [date];
        cResult[8] = date;
        cResult[9] = ee;
        cResult[10] = items;
        tmp29 = items;
        tmp28 = ee;
      } else {
        tmp28 = cResult[9];
        tmp29 = cResult[10];
      }
      const effect = obj2.useEffect(tmp28, tmp29);
      if (cResult[11] !== minimumDate) {
        function ie(getTime) {
          let tmp = null == minimumDate;
          if (!tmp) {
            const time = getTime.getTime();
            tmp = time >= minimumDate.getTime();
          }
          return tmp;
        }
        cResult[11] = minimumDate;
        cResult[12] = ie;
        tmp31 = ie;
      } else {
        tmp31 = cResult[12];
      }
      closure_14 = tmp31;
      if (cResult[13] !== maximumDate) {
        function ae(getTime) {
          let tmp = null == maximumDate;
          if (!tmp) {
            const time = getTime.getTime();
            tmp = time <= maximumDate.getTime();
          }
          return tmp;
        }
        cResult[13] = maximumDate;
        cResult[14] = ae;
        tmp32 = ae;
      } else {
        tmp32 = cResult[14];
      }
      let closure_15 = tmp32;
      if (cResult[15] === tmp7) {
        let tmp33;
        if (cResult[16] === onCancel) {
          tmp33 = cResult[17];
        }
        const tmp34 = minimumDate(onSubmit[21])(tmp33);
        if (cResult[18] === first1) {
          if (cResult[19] === first2) {
            let tmp35;
            if (cResult[20] === onSubmit) {
              tmp35 = cResult[21];
            }
            const tmp36 = minimumDate(onSubmit[21])(tmp35);
            if (cResult[22] === (null != minimumDate || null != maximumDate)) {
              if (cResult[23] === tmp31) {
                let tmp37;
                if (cResult[24] === tmp32) {
                  tmp37 = cResult[25];
                }
                const tmp38 = minimumDate(onSubmit[21])(tmp37);
                if (cResult[26] === tmp34) {
                  if (cResult[27] === tmp36) {
                    let tmp39;
                    if (cResult[28] === tmp4) {
                      tmp39 = cResult[29];
                    }
                    const tmp43 = tmp19 && !tmp31(date);
                    if (cResult[30] === minimumDate) {
                      let tmp44;
                      if (cResult[31] === str) {
                        tmp44 = cResult[32];
                      }
                      if (cResult[33] === tmp43) {
                        let tmp47;
                        if (cResult[34] === tmp44) {
                          tmp47 = cResult[35];
                        }
                        if (tmp19) {
                          tmp19 = !tmp32(date);
                        }
                        if (cResult[36] === maximumDate) {
                          let tmp51;
                          if (cResult[37] === str) {
                            tmp51 = cResult[38];
                          }
                          if (cResult[39] === tmp19) {
                            let tmp54;
                            if (cResult[40] === tmp51) {
                              tmp54 = cResult[41];
                            }
                            let str4 = "dark";
                            const tmpResult = tmp(onSubmit[23]);
                            if (tmpResult.isThemeLight(tmp21)) {
                              str4 = "light";
                            }
                            if (cResult[42] === tmp22) {
                              if (cResult[43] === tmp25) {
                                if (cResult[44] === date) {
                                  if (cResult[45] === tmp38) {
                                    if (cResult[46] === str) {
                                      let tmp58;
                                      if (cResult[47] === str4) {
                                        tmp58 = cResult[48];
                                      }
                                      if (cResult[49] === tmp6.datetimePickerContainer) {
                                        let tmp61;
                                        if (cResult[50] === tmp58) {
                                          tmp61 = cResult[51];
                                        }
                                        if (cResult[52] === first1) {
                                          if (cResult[53] === tmp34) {
                                            let tmp65;
                                            if (cResult[54] === tmp36) {
                                              tmp65 = cResult[55];
                                            }
                                            if (cResult[56] === onCancel) {
                                              if (cResult[57] === tmp39) {
                                                if (cResult[58] === tmp47) {
                                                  if (cResult[59] === tmp54) {
                                                    if (cResult[60] === tmp61) {
                                                      let tmp69;
                                                      if (cResult[61] === tmp65) {
                                                        tmp69 = cResult[62];
                                                      }
                                                      return tmp69;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            const obj3 = { onDismiss: onCancel, header: tmp39, children: items1 };
                                            items1 = [tmp47, tmp54, tmp61, tmp65];
                                            const tmp71 = closure_7(tmp(onSubmit[25]).BottomSheet, obj3);
                                            cResult[56] = onCancel;
                                            cResult[57] = tmp39;
                                            cResult[58] = tmp47;
                                            cResult[59] = tmp54;
                                            cResult[60] = tmp61;
                                            cResult[61] = tmp65;
                                            cResult[62] = tmp71;
                                            tmp69 = tmp71;
                                          }
                                        }
                                        const obj4 = { handleCancel: tmp34, handleSubmit: tmp36, canSubmit: first1 };
                                        const tmp68 = date(closure_14, obj4);
                                        cResult[52] = first1;
                                        cResult[53] = tmp34;
                                        cResult[54] = tmp36;
                                        cResult[55] = tmp68;
                                        tmp65 = tmp68;
                                      }
                                      const obj5 = { style: tmp6.datetimePickerContainer, children: tmp58 };
                                      const tmp64 = date(closure_5, obj5);
                                      cResult[49] = tmp6.datetimePickerContainer;
                                      cResult[50] = tmp58;
                                      cResult[51] = tmp64;
                                      tmp61 = tmp64;
                                    }
                                  }
                                }
                              }
                            }
                            const obj6 = {
                              theme: str4,
                              date,
                              onDateChange: tmp38,
                              maximumDate: tmp22,
                              minimumDate: tmp25,
                              mode: str,
                            };
                            const tmp60 = date(minimumDate(onSubmit[24]), obj6);
                            cResult[42] = tmp22;
                            cResult[43] = tmp25;
                            cResult[44] = date;
                            cResult[45] = tmp38;
                            cResult[46] = str;
                            cResult[47] = str4;
                            cResult[48] = tmp60;
                            tmp58 = tmp60;
                          }
                          const obj7 = { show: tmp19, errorText: tmp51 };
                          const tmp57 = date(ref, obj7);
                          cResult[39] = tmp19;
                          cResult[40] = tmp51;
                          cResult[41] = tmp57;
                          tmp54 = tmp57;
                        }
                        const intl3 = tmp(tmp2[12]).intl;
                        const formatToPlainString2 = intl3.formatToPlainString;
                        const R7r9VN = tmp(tmp2[12]).t.R7r9VN;
                        let str3 = "lll";
                        const format2 = minimumDate(tmp2[22])(maximumDate).format;
                        minimumDate(onSubmit[22])(maximumDate);
                        if ("date" === str) {
                          str3 = "L";
                        }
                        const obj8 = { maxDate: format2(str3) };
                        const formatToPlainString2Result = formatToPlainString2(R7r9VN, obj8);
                        cResult[36] = maximumDate;
                        cResult[37] = str;
                        cResult[38] = formatToPlainString2Result;
                        tmp51 = formatToPlainString2Result;
                      }
                      const obj9 = { show: tmp43, errorText: tmp44 };
                      const tmp50 = date(ref, obj9);
                      cResult[33] = tmp43;
                      cResult[34] = tmp44;
                      cResult[35] = tmp50;
                      tmp47 = tmp50;
                    }
                    const intl2 = tmp(tmp2[12]).intl;
                    const formatToPlainString = intl2.formatToPlainString;
                    const FsJO55 = tmp(tmp2[12]).t.FsJO55;
                    let str2 = "lll";
                    const format = minimumDate(tmp2[22])(minimumDate).format;
                    minimumDate(onSubmit[22])(minimumDate);
                    if ("date" === str) {
                      str2 = "L";
                    }
                    const obj10 = { minDate: format(str2) };
                    const formatToPlainStringResult = formatToPlainString(FsJO55, obj10);
                    cResult[30] = minimumDate;
                    cResult[31] = str;
                    cResult[32] = formatToPlainStringResult;
                    tmp44 = formatToPlainStringResult;
                  }
                }
                const obj11 = { title: tmp4, handleCancel: tmp34, handleSubmit: tmp36 };
                const tmp42 = date(first2, obj11);
                cResult[26] = tmp34;
                cResult[27] = tmp36;
                cResult[28] = tmp4;
                cResult[29] = tmp42;
                tmp39 = tmp42;
              }
            }
            function me(arg0) {
              if (null != arg0) {
                if (closure_5) {
                  const tmp4 = closure_14(arg0) && closure_15(arg0);
                  closure_11(tmp4);
                }
                __initData2(false);
                closure_9(true);
                closure_7(arg0);
              }
            }
            cResult[22] = null != minimumDate || null != maximumDate;
            cResult[23] = tmp31;
            cResult[24] = tmp32;
            cResult[25] = me;
            tmp37 = me;
          }
        }
        function se() {
          let tmp = first1;
          current = ref.current;
          if (first1) {
            tmp = first2;
          }
          if (tmp) {
            onSubmit(_modDef4461(current));
          }
          if (first2) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          } else {
            __initData2(true);
          }
        }
        cResult[18] = first1;
        cResult[19] = first2;
        cResult[20] = onSubmit;
        cResult[21] = se;
        tmp35 = se;
      }
      function oe() {
        ref.current = current;
        if (onCancel != null) {
          tmp();
        }
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
      cResult[15] = tmp7;
      cResult[16] = onCancel;
      cResult[17] = oe;
      tmp33 = oe;
    }
  : function (mode) {
      let FsJO55;
      let R7r9VN;
      let _undefined;
      let _undefined2;
      let c10;
      let c11;
      let c9;
      let first;
      let formatToPlainString;
      let formatToPlainString2;
      let items1;
      let maximumDate;
      let obj4;
      let obj6;
      let onCancel;
      let startDate;
      let str4;
      let tmp10;
      let tmp11Result;
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
      let closure_6;
      let first1;
      closure_8 = undefined;
      c9 = undefined;
      c10 = undefined;
      c11 = undefined;
      let ref;
      const requireDateChanged = mode.requireDateChanged;
      const tmp3 = closure_8();
      if (startDate == null) {
        let tmp4 = globalThis;
        const _Date = Date;
        const self = this;
        const self2 = this;
        startDate = new Date();
      }
      let obj = startDate;
      const tmp5 = onCancel(startDate.useState(startDate), 2);
      date = tmp5[0];
      closure_6 = tmp5[1];
      let tmp6 = onCancel(startDate.useState(!requireDateChanged), 2);
      first1 = tmp6[0];
      closure_8 = tmp6[1];
      [c9, c10] = onCancel(startDate.useState(true), 2);
      const tmp8 = onCancel(startDate.useState(true), 2);
      [tmp10, c11] = onCancel(startDate.useState(false), 2);
      onCancel(startDate.useState(false), 2);
      const tmp13 = minimumDate(4791)();
      ref = startDate.useRef(date);
      date = undefined;
      if (null != maximumDate) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        date = new Date(maximumDate.getFullYear() + 1, 0, 1, 0, -1);
      }
      let date1;
      if (null != minimumDate) {
        const _Date3 = Date;
        const self5 = this;
        const self6 = this;
        date1 = new Date(minimumDate.getFullYear(), 0, 1, 0);
      }
      const items = [date];
      const effect = obj.useEffect(() => {
        ref.current = current;
      }, items);
      const tmp19 = minimumDate(6452)(() => {
        ref.current = startDate;
        if (onCancel != null) {
          tmp();
        }
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      });
      const tmp20 = minimumDate(6452)(() => {
        let tmp = first1;
        const current = ref.current;
        if (first1) {
          tmp = c9;
        }
        if (tmp) {
          dependencyMap(_modDef4461(current));
        }
        if (c9) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        } else {
          _undefined2(true);
        }
      });
      const obj2 = {
        onDismiss: onCancel,
        header: closure_6(c10, { title, handleCancel: tmp19, handleSubmit: tmp20 }),
        children: items1,
      };
      const tmp21 = minimumDate(6452)((getTime) => {
        if (null != getTime) {
          const tmp2 = null == minimumDate && null == maximumDate;
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
          _undefined2(false);
          closure_8(true);
          closure_6(getTime);
        }
      });
      BottomSheet = maximumDate(6645).BottomSheet;
      let tmp26 = tmp10;
      const tmp22 = first1;
      if (tmp26) {
        let tmp27 = null == minimumDate;
        if (!tmp27) {
          let time = date.getTime();
          tmp27 = time >= minimumDate.getTime();
        }
        tmp26 = !tmp27;
      }
      const obj3 = { show: tmp26, errorText: formatToPlainString(FsJO55, obj4) };
      const intl2 = maximumDate(1126).intl;
      formatToPlainString = intl2.formatToPlainString;
      FsJO55 = maximumDate(1126).t.FsJO55;
      let str2 = "lll";
      let str3 = "lll";
      const format = minimumDate(4461)(minimumDate).format;
      minimumDate(4461)(minimumDate);
      if ("date" === str) {
        str3 = "L";
      }
      obj4 = { minDate: format(str3) };
      items1 = [closure_6(closure_13, obj3), , ,];
      if (tmp10) {
        let tmp31 = null == maximumDate;
        if (!tmp31) {
          let time1 = date.getTime();
          tmp31 = time1 <= maximumDate.getTime();
        }
      }
      const obj5 = { show: tmp10, errorText: formatToPlainString2(R7r9VN, obj6) };
      const intl3 = maximumDate(1126).intl;
      formatToPlainString2 = intl3.formatToPlainString;
      R7r9VN = maximumDate(1126).t.R7r9VN;
      const format2 = minimumDate(4461)(maximumDate).format;
      minimumDate(4461)(maximumDate);
      if ("date" === str) {
        str2 = "L";
      }
      obj6 = { maxDate: format2(str2) };
      items1[1] = closure_6(closure_13, obj5);
      const obj7 = {
        style: tmp3.datetimePickerContainer,
        children: closure_6(tmp11Result, {
          theme: str4,
          date,
          onDateChange: tmp21,
          maximumDate: date,
          minimumDate: date1,
          mode: str,
        }),
      };
      str4 = "dark";
      tmp11Result = minimumDate(9196);
      const tmp23Result = maximumDate(4729);
      const tmp34 = date;
      if (tmp23Result.isThemeLight(tmp13)) {
        str4 = "light";
      }
      items1[2] = closure_6(tmp34, obj7);
      items1[3] = closure_6(closure_14, { handleCancel: tmp19, handleSubmit: tmp20, canSubmit: first1 });
      return tmp22(BottomSheet, obj2);
    };
let result = size.fileFinishedImporting("components_native/DatePickerActionSheet.tsx");

export default tmp3;
