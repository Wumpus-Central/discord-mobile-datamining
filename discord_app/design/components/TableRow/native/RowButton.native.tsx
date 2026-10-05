// === Module 8897: RowButton ===

// Module 8897 (RowButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import TableRow from "TableRow" /* 5993 */;
import Card_Card from "Card/Card" /* 5995 */;
import TableRowIcon from "TableRowIcon" /* 5999 */;
import BackgroundBlurView from "BackgroundBlurView" /* 8576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, dependencyMap;

let closure_3 = ["arrow", "disabled", "variant", "icon", "onPress", "experimental_withBlurBackground"];
let closure_4 = ["experimental_withBlurBackground", "onPress", "disabled", "children"];
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles(() => {
  let obj2;
  const obj = { card: obj2, cardWithBlur: { overflow: "hidden" } };
  obj2 = { padding: "y", borderTopStartRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderTopEndRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomStartRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomEndRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arrow;
  let disabled;
  let experimental_withBlurBackground;
  let icon;
  let onPress;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let variant;
  const obj = react2;
  const cResult = obj.c(22);
  if (cResult[0] !== arg0) {
    ({ arrow, disabled, variant, icon, onPress, experimental_withBlurBackground } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = experimental_withBlurBackground;
    cResult[2] = icon;
    cResult[3] = onPress;
    cResult[4] = tmp13;
    cResult[5] = arrow;
    cResult[6] = disabled;
    cResult[7] = variant;
    tmp10 = variant;
    tmp9 = disabled;
    tmp8 = arrow;
    tmp7 = tmp13;
    tmp6 = onPress;
    tmp5 = icon;
    tmp4 = experimental_withBlurBackground;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  let str = "secondary";
  let str2 = "secondary";
  if (undefined !== tmp10) {
    str2 = tmp10;
  }
  let tmp16 = tmp5;
  if (null != tmp5) {
    tmp16 = tmp5;
    if (!react.isValidElement(tmp5)) {
      let str3 = "translucent";
      if (!tmp4) {
        if ("primary" === str2) {
          str = "default";
        }
        str3 = str;
      }
      if (cResult[8] === str3) {
        let tmp17;
        if (cResult[9] === tmp5) {
          tmp17 = cResult[10];
        }
        tmp16 = tmp17;
      }
      const tmp19 = jsx(TableRowIcon.TableRowIcon, { source: tmp5, variant: str3 });
      cResult[8] = str3;
      cResult[9] = tmp5;
      cResult[10] = tmp19;
      tmp17 = tmp19;
    }
  }
  if (cResult[11] === (undefined === tmp8 || tmp8)) {
    if (cResult[12] === (undefined !== tmp9 && tmp9)) {
      if (cResult[13] === tmp16) {
        let tmp20;
        if (cResult[14] === tmp7) {
          tmp20 = cResult[15];
        }
        if (cResult[16] === (undefined !== tmp9 && tmp9)) {
          if (cResult[17] === tmp4) {
            if (cResult[18] === tmp6) {
              if (cResult[19] === tmp7) {
                let tmp23;
                if (cResult[20] === tmp20) {
                  tmp23 = cResult[21];
                }
                return tmp23;
              }
            }
          }
        }
        const merged = Object.assign(tmp7);
        const tmp29 = <closure_9 experimental_withBlurBackground={tmp4} onPress={tmp6} disabled={undefined !== tmp9 && tmp9}>{tmp20}</closure_9>;
        cResult[16] = undefined !== tmp9 && tmp9;
        cResult[17] = tmp4;
        cResult[18] = tmp6;
        cResult[19] = tmp7;
        cResult[20] = tmp20;
        cResult[21] = tmp29;
        tmp23 = tmp29;
      }
    }
  }
  const TableRowInner = TableRow.TableRowInner;
  const merged1 = Object.assign(tmp7);
  const tmp22 = <TableRowInner icon={tmp16} arrow={undefined === tmp8 || tmp8} disabled={undefined !== tmp9 && tmp9} borderRadius={nativeDefault.radii.xl} />;
  cResult[11] = undefined === tmp8 || tmp8;
  cResult[12] = undefined !== tmp9 && tmp9;
  cResult[13] = tmp16;
  cResult[14] = tmp7;
  cResult[15] = tmp22;
  tmp20 = tmp22;
}) : ((arrow) => {
  let experimental_withBlurBackground;
  let icon;
  let flag = arrow.arrow;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arrow.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let str = arrow.variant;
  if (str === undefined) {
    str = "secondary";
  }
  ({ icon, experimental_withBlurBackground } = arrow);
  const onPress = arrow.onPress;
  const merged = Object.assign(arrow, Object.assign({ arrow: 0, disabled: 0, variant: 0, icon: 0, onPress: 0, experimental_withBlurBackground: 0 }));
  let tmp2 = icon;
  if (null != icon) {
    tmp2 = icon;
    if (!react.isValidElement(icon)) {
      let str2 = "translucent";
      if (!experimental_withBlurBackground) {
        let str3 = "secondary";
        if ("primary" === str) {
          str3 = "default";
        }
        str2 = str3;
      }
      tmp2 = jsx(TableRowIcon.TableRowIcon, { source: icon, variant: str2 });
    }
  }
  const merged1 = Object.assign(merged);
  const TableRowInner = TableRow.TableRowInner;
  const merged2 = Object.assign(merged);
  return <closure_9 experimental_withBlurBackground={experimental_withBlurBackground} onPress={onPress} disabled={flag2}><TableRowInner icon={tmp2} arrow={flag} disabled={flag2} borderRadius={nativeDefault.radii.xl} /></closure_9>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let disabled;
  let experimental_withBlurBackground;
  let onPress;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(36);
  if (cResult[0] !== arg0) {
    ({ experimental_withBlurBackground, onPress, disabled, children } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_4);
    _require = tmp11;
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = disabled;
    cResult[3] = experimental_withBlurBackground;
    cResult[4] = onPress;
    cResult[5] = tmp11;
    tmp7 = onPress;
    tmp6 = experimental_withBlurBackground;
    tmp5 = disabled;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    _require = cResult[5];
  }
  const tmp12 = closure_8();
  const tmpResult = ReanimatedRexport;
  const sharedValue = tmpResult.useSharedValue(0);
  if (cResult[6] !== sharedValue) {
    const fn = function h() {
      const result = sharedValue.set(1);
    };
    cResult[6] = sharedValue;
    cResult[7] = fn;
    tmp14 = fn;
  } else {
    tmp14 = cResult[7];
  }
  dependencyMap = tmp14;
  if (cResult[8] !== sharedValue) {
    const fn2 = function p() {
      const result = sharedValue.set(0);
    };
    cResult[8] = sharedValue;
    cResult[9] = fn2;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[9];
  }
  closure_3 = tmp15;
  if (tmp6) {
    if (cResult[10] === tmp14) {
      class P {
        constructor(arg0) {
          const onPressIn = closure_0.onPressIn;
          if (onPressIn != null) {
            onPressIn(arg0);
          }
          closure_2();
        }
      }
      class I {
        constructor(arg0) {
          const onPressOut = closure_0.onPressOut;
          if (onPressOut != null) {
            onPressOut(arg0);
          }
          closure_3();
        }
      }
      cResult[13] = tmp15;
      cResult[14] = tmp8;
      cResult[15] = I;
    }
    class P {
      constructor(arg0) {
        const onPressIn = closure_0.onPressIn;
        if (onPressIn != null) {
          onPressIn(arg0);
        }
        closure_2();
      }
    }
    cResult[10] = tmp14;
    cResult[11] = tmp8;
    cResult[12] = P;
  } else {
    if (cResult[30] === tmp4) {
      if (cResult[31] === tmp5) {
        if (cResult[32] === tmp7) {
          if (cResult[33] === tmp8) {
            if (cResult[34] === tmp12.card) {
              tmp16 = cResult[35];
            }
          }
        }
      }
    }
    class P {
      constructor(arg0) {
        const onPressIn = closure_0.onPressIn;
        if (onPressIn != null) {
          onPressIn(arg0);
        }
        closure_2();
      }
    }
    class I {
      constructor(arg0) {
        const onPressOut = closure_0.onPressOut;
        if (onPressOut != null) {
          onPressOut(arg0);
        }
        closure_3();
      }
    }
    tmp17[3] = tmp7;
    tmp17[4] = tmp12.card;
    tmp17[5] = tmp5;
    const InternalCard = Card_Card.InternalCard;
    const merged = Object.assign(tmp8);
    tmp17.variant = "control-secondary";
    tmp17.border = "control-secondary";
    tmp17.children = tmp4;
    const tmp21 = <InternalCard {...tmp17} />;
    cResult[30] = tmp4;
    cResult[31] = tmp5;
    cResult[32] = tmp7;
    cResult[33] = tmp8;
    cResult[34] = tmp12.card;
    cResult[35] = tmp21;
    tmp16 = tmp21;
  }
  return tmp16;
}) : ((experimental_withBlurBackground) => {
  let children;
  let disabled;
  let items2;
  let obj3;
  let obj4;
  let onPress;
  ({ onPress, disabled, children } = experimental_withBlurBackground);
  experimental_withBlurBackground = experimental_withBlurBackground.experimental_withBlurBackground;
  const merged = Object.assign(experimental_withBlurBackground, Object.assign({ experimental_withBlurBackground: 0, onPress: 0, disabled: 0, children: 0 }));
  const tmp2 = closure_8();
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  let closure_2 = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [sharedValue];
  closure_3 = react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  const InternalCard = Card_Card.InternalCard;
  if (experimental_withBlurBackground) {
    const obj2 = {
      shadow: "none",
      border: "none",
      start: true,
      end: true,
      onPress,
      onPressIn(arg0) {
          const onPressIn = merged.onPressIn;
          if (onPressIn != null) {
            onPressIn(arg0);
          }
          closure_2();
        },
      onPressOut(arg0) {
          const onPressOut = merged.onPressOut;
          if (onPressOut != null) {
            onPressOut(arg0);
          }
          closure_3();
        },
      style: items2,
      disabled,
      variant: "transparent",
      children: jsx(BackgroundBlurView.BackgroundBlurView, obj3)
    };
    items2 = [, ];
    ({ card: arr3[0], cardWithBlur: arr3[1] } = tmp2);
    const merged1 = Object.assign(merged);
    obj4 = obj2;
    obj3 = { pressed: sharedValue, children };
  } else {
    obj4 = { shadow: "low", start: true, end: true, onPress, style: tmp2.card, disabled, variant: "control-secondary", border: "control-secondary", children };
    const merged2 = Object.assign(merged);
  }
  return <InternalCard {...obj4} />;
});
tmp2.Icon = TableRowIcon.TableRowIcon;
let result = size.fileFinishedImporting("design/components/TableRow/native/RowButton.native.tsx");

export const RowButtonIconProps = TableRowIcon.TableRowIconProps;
export const RowButton = tmp2;