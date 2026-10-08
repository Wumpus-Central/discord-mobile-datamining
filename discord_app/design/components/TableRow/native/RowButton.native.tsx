// === Module 8557: RowButton ===

// Module 8557 (RowButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import TableRow from "TableRow" /* 6184 */;
import Card from "Card" /* 6186 */;
import TableRowIcon from "TableRowIcon" /* 6192 */;
import BackgroundBlurView from "BackgroundBlurView" /* 8526 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["arrow", "disabled", "variant", "icon", "onPress", "experimental_withBlurBackground"];
let closure_4 = ["experimental_withBlurBackground", "onPress", "disabled", "children"];
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles(() => {
  const obj = { card: null, cardWithBlur: null };
  const obj2 = { padding: "y", borderTopStartRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderTopEndRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomStartRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomEndRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS };
  obj.card = obj2;
  obj.cardWithBlur = { overflow: "hidden" };
  return obj;
});
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function RowButton(arg0) {
  const cResult = c.c(22);
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
    let tmp10 = variant;
    let tmp9 = disabled;
    let tmp8 = arrow;
    let tmp7 = tmp13;
    let tmp6 = onPress;
    let tmp5 = icon;
    let tmp4 = experimental_withBlurBackground;
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
    if (!noop.isValidElement(tmp5)) {
      let str3 = "translucent";
      if (!tmp4) {
        if ("primary" === str2) {
          str = "default";
        }
        str3 = str;
      }
      if (cResult[8] === str3) {
      }
      const obj2 = { source: tmp5, variant: str3 };
      const tmp19 = jsx(TableRowIcon.TableRowIcon, { source: tmp5, variant: str3 });
      cResult[8] = str3;
      cResult[9] = tmp5;
      cResult[10] = tmp19;
    }
  }
  if (cResult[11] === (undefined === tmp8 || tmp8)) {
    if (cResult[12] === tmp15) {
      if (cResult[13] === tmp16) {
        if (cResult[14] === tmp7) {
          let tmp21 = cResult[15];
        }
        if (cResult[16] === tmp15) {
          if (cResult[17] === tmp4) {
            if (cResult[18] === tmp6) {
              if (cResult[19] === tmp7) {
                if (cResult[20] === tmp21) {
                  let tmp24 = cResult[21];
                }
                return tmp24;
              }
            }
          }
        }
        const obj3 = { experimental_withBlurBackground: tmp4, onPress: tmp6, disabled: tmp15 };
        const merged = Object.assign(tmp7);
        obj3.children = tmp21;
        const tmp30 = <closure_9 experimental_withBlurBackground={tmp4} onPress={tmp6} disabled={tmp15} />;
        cResult[16] = tmp15;
        cResult[17] = tmp4;
        cResult[18] = tmp6;
        cResult[19] = tmp7;
        cResult[20] = tmp21;
        cResult[21] = tmp30;
        tmp24 = tmp30;
      }
    }
  }
  const merged1 = Object.assign(tmp7);
  const tmp23 = jsx(TableRow.TableRowInner, { icon: tmp16, arrow: undefined === tmp8 || tmp8, disabled: undefined !== tmp9 && tmp9, borderRadius: nativeDefault.radii.xl });
  cResult[11] = undefined === tmp8 || tmp8;
  cResult[12] = undefined !== tmp9 && tmp9;
  cResult[13] = tmp16;
  cResult[14] = tmp7;
  cResult[15] = tmp23;
  tmp21 = tmp23;
  const obj4 = { icon: tmp16, arrow: undefined === tmp8 || tmp8, disabled: undefined !== tmp9 && tmp9, borderRadius: nativeDefault.radii.xl };
}) : (function RowButton(arrow) {
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
  const merged = Object.assign(arrow, Object.assign({ arrow: 0, disabled: 0, variant: 0, icon: 0, onPress: 0, experimental_withBlurBackground: 0 }));
  let tmp2 = icon;
  if (null != icon) {
    tmp2 = icon;
    if (!noop.isValidElement(icon)) {
      let str2 = "translucent";
      if (!experimental_withBlurBackground) {
        let str3 = "secondary";
        if ("primary" === str) {
          str3 = "default";
        }
        str2 = str3;
      }
      const obj = { source: icon, variant: str2 };
      tmp2 = jsx(TableRowIcon.TableRowIcon, { source: icon, variant: str2 });
    }
  }
  const obj2 = { experimental_withBlurBackground, onPress: arrow.onPress, disabled: flag2 };
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(merged);
  obj2.children = jsx(TableRow.TableRowInner, { icon: tmp2, arrow: flag, disabled: flag2, borderRadius: nativeDefault.radii.xl });
  return <closure_9 experimental_withBlurBackground={experimental_withBlurBackground} onPress={arrow.onPress} disabled={flag2} />;
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function RowButtonWrapper(arg0) {
  const cResult = c.c(36);
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
    let tmp7 = onPress;
    let tmp6 = experimental_withBlurBackground;
    let tmp5 = disabled;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    _require = cResult[5];
  }
  const tmp12 = closure_8();
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  if (cResult[6] !== sharedValue) {
    const fn = function w() {
      const result = sharedValue.set(1);
    };
    cResult[6] = sharedValue;
    cResult[7] = fn;
    let tmp14 = fn;
  } else {
    tmp14 = cResult[7];
  }
  dependencyMap = tmp14;
  if (cResult[8] !== sharedValue) {
    const fn2 = function v() {
      const result = sharedValue.set(0);
    };
    cResult[8] = sharedValue;
    cResult[9] = fn2;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[9];
  }
  closure_3 = tmp15;
  if (tmp6) {
    if (cResult[10] === tmp14) {
      class P {
        constructor(arg0) {
          onPressIn = closure_0.onPressIn;
          if (onPressIn != null) {
            tmp2 = arg0;
            onPressInResult = onPressIn(arg0);
          }
          tmp4 = closure_2();
          return;
        }
      }
      class I {
        constructor(arg0) {
          onPressOut = closure_0.onPressOut;
          if (onPressOut != null) {
            tmp2 = arg0;
            onPressOutResult = onPressOut(arg0);
          }
          tmp4 = closure_3();
          return;
        }
      }
      cResult[13] = tmp15;
      cResult[14] = tmp8;
      cResult[15] = I;
    }
    class P {
      constructor(arg0) {
        onPressIn = closure_0.onPressIn;
        if (onPressIn != null) {
          tmp2 = arg0;
          onPressInResult = onPressIn(arg0);
        }
        tmp4 = closure_2();
        return;
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
            class P {
              constructor(arg0) {
                onPressIn = closure_0.onPressIn;
                if (onPressIn != null) {
                  tmp2 = arg0;
                  onPressInResult = onPressIn(arg0);
                }
                tmp4 = closure_2();
                return;
              }
            }
          }
        }
      }
    }
    class P {
      constructor(arg0) {
        onPressIn = closure_0.onPressIn;
        if (onPressIn != null) {
          tmp2 = arg0;
          onPressInResult = onPressIn(arg0);
        }
        tmp4 = closure_2();
        return;
      }
    }
    class I {
      constructor(arg0) {
        onPressOut = closure_0.onPressOut;
        if (onPressOut != null) {
          tmp2 = arg0;
          onPressOutResult = onPressOut(arg0);
        }
        tmp4 = closure_3();
        return;
      }
    }
    tmp17[3] = tmp7;
    tmp17[4] = tmp12.card;
    tmp17[5] = tmp5;
    const merged = Object.assign(tmp8);
    tmp17.variant = "control-secondary";
    tmp17.border = "control-secondary";
    tmp17.children = tmp4;
    const tmp21 = jsx(Card.InternalCard, tmp17);
    cResult[30] = tmp4;
    cResult[31] = tmp5;
    cResult[32] = tmp7;
    cResult[33] = tmp8;
    cResult[34] = tmp12.card;
    cResult[35] = tmp21;
  }
  const tmpResult = ReanimatedRexport;
}) : (function RowButtonWrapper(experimental_withBlurBackground) {
  ({ onPress, disabled, children } = experimental_withBlurBackground);
  const merged = Object.assign(experimental_withBlurBackground, Object.assign({ experimental_withBlurBackground: 0, onPress: 0, disabled: 0, children: 0 }));
  const tmp2 = closure_8();
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  const items = [sharedValue];
  closure_2 = noop.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [sharedValue];
  closure_3 = noop.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  if (experimental_withBlurBackground.experimental_withBlurBackground) {
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
      style: null,
      disabled: null
    };
    const items2 = [, ];
    ({ card: arr3[0], cardWithBlur: arr3[1] } = tmp2);
    obj2.style = items2;
    obj2.disabled = disabled;
    const merged1 = Object.assign(merged);
    obj2.variant = "transparent";
    const obj3 = { pressed: sharedValue, children };
    obj2.children = jsx(BackgroundBlurView.BackgroundBlurView, { pressed: sharedValue, children });
    let obj4 = obj2;
  } else {
    obj4 = { shadow: "low", start: true, end: true, onPress, style: tmp2.card, disabled };
    const merged2 = Object.assign(merged);
    obj4.variant = "control-secondary";
    obj4.border = "control-secondary";
    obj4.children = children;
  }
  return jsx(Card.InternalCard, obj4);
});
tmp2.Icon = fn(6192).TableRowIcon;
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TableRow/native/RowButton.native.tsx");

export const RowButtonIconProps = fn(6192).TableRowIconProps;
export const RowButton = tmp2;