// === Module 5909: Pressables ===

// Module 5909 (Pressables)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FormConstants from "FormConstants" /* 1192 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import styleConstants from "styleConstants" /* 5611 */;
import StyleSheetUtilsDefault from "StyleSheetUtils" /* 5910 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, obj1, str;

let obj2;
let closure_3 = ["children", "androidRippleConfig", "style", "type", "activeOpacity", "underlayColor", "innerRef"];
let closure_4 = ["activeOpacity"];
let closure_5 = ["underlayColor"];
const Pressable = react_native.Pressable;
const IOS_POINTER_STYLE = styleConstants.IOS_POINTER_STYLE;
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const jsx = Fragment.jsx;
let obj = { pressedHighlight: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  let androidRippleConfig;
  let children;
  let closure_0;
  let closure_2;
  let style;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(26);
  if (cResult[0] !== type) {
    ({ children, androidRippleConfig, style } = type);
    let closure_1 = style;
    type = type.type;
    dependencyMap = type;
    const activeOpacity = type.activeOpacity;
    _require = activeOpacity;
    const underlayColor = type.underlayColor;
    closure_3 = underlayColor;
    const innerRef = type.innerRef;
    const tmp14 = _objectWithoutProperties(type, closure_3);
    let num = 0;
    cResult[0] = type;
    cResult[1] = activeOpacity;
    cResult[2] = androidRippleConfig;
    cResult[3] = children;
    cResult[4] = innerRef;
    cResult[5] = tmp14;
    cResult[6] = style;
    cResult[7] = type;
    cResult[8] = underlayColor;
    tmp8 = tmp14;
    tmp7 = innerRef;
    tmp6 = children;
    tmp5 = androidRippleConfig;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    closure_1 = cResult[6];
    dependencyMap = cResult[7];
    closure_3 = cResult[8];
  }
  const backgroundColor = closure_12().pressedHighlight.backgroundColor;
  const tmpResult = tmp(1369);
  if (!tmpResult.isAndroid()) {
    if (cResult[9] === tmp4) {
      if (cResult[10] === backgroundColor) {
        if (cResult[11] === style) {
          if (cResult[12] === tmp10) {
            class E {
              constructor(arg0) {
                items = [, , ];
                items[0] = closure_1;
                tmp = null;
                if (type.pressed) {
                  tmp2 = closure_2;
                  str = "highlight";
                  if ("highlight" === closure_2) {
                    tmp3 = closure_3;
                    if (closure_3 == null) {
                      tmp3 = backgroundColor;
                    }
                    obj1 = { backgroundColor: null };
                    obj1.backgroundColor = tmp3;
                    obj = obj1;
                  } else {
                    num = closure_0;
                    if (closure_0 == null) {
                      num = 0.2;
                    }
                    obj = { opacity: null };
                    obj.opacity = num;
                  }
                  tmp = obj;
                }
                items[1] = tmp;
                items[2] = IOS_POINTER_STYLE;
                return items;
              }
            }
          }
        }
      }
    }
    class E {
      constructor(arg0) {
        items = [, , ];
        items[0] = closure_1;
        tmp = null;
        if (type.pressed) {
          tmp2 = closure_2;
          str = "highlight";
          if ("highlight" === closure_2) {
            tmp3 = closure_3;
            if (closure_3 == null) {
              tmp3 = backgroundColor;
            }
            obj1 = { backgroundColor: null };
            obj1.backgroundColor = tmp3;
            obj = obj1;
          } else {
            num = closure_0;
            if (closure_0 == null) {
              num = 0.2;
            }
            obj = { opacity: null };
            obj.opacity = num;
          }
          tmp = obj;
        }
        items[1] = tmp;
        items[2] = IOS_POINTER_STYLE;
        return items;
      }
    }
    cResult[9] = tmp4;
    cResult[10] = backgroundColor;
    cResult[11] = style;
    cResult[12] = tmp10;
    cResult[13] = tmp11;
    cResult[14] = E;
  }
  const tmpResult2 = tmp(1369);
  if (tmpResult2.isAndroid()) {
    if (cResult[15] === tmp5) {
      class E {
        constructor(arg0) {
          items = [, , ];
          items[0] = closure_1;
          tmp = null;
          if (type.pressed) {
            tmp2 = closure_2;
            str = "highlight";
            if ("highlight" === closure_2) {
              tmp3 = closure_3;
              if (closure_3 == null) {
                tmp3 = backgroundColor;
              }
              obj1 = { backgroundColor: null };
              obj1.backgroundColor = tmp3;
              obj = obj1;
            } else {
              num = closure_0;
              if (closure_0 == null) {
                num = 0.2;
              }
              obj = { opacity: null };
              obj.opacity = num;
            }
            tmp = obj;
          }
          items[1] = tmp;
          items[2] = IOS_POINTER_STYLE;
          return items;
        }
      }
    }
    class E {
      constructor(arg0) {
        items = [, , ];
        items[0] = closure_1;
        tmp = null;
        if (type.pressed) {
          tmp2 = closure_2;
          str = "highlight";
          if ("highlight" === closure_2) {
            tmp3 = closure_3;
            if (closure_3 == null) {
              tmp3 = backgroundColor;
            }
            obj1 = { backgroundColor: null };
            obj1.backgroundColor = tmp3;
            obj = obj1;
          } else {
            num = closure_0;
            if (closure_0 == null) {
              num = 0.2;
            }
            obj = { opacity: null };
            obj.opacity = num;
          }
          tmp = obj;
        }
        items[1] = tmp;
        items[2] = IOS_POINTER_STYLE;
        return items;
      }
    }
    let obj2 = tmp5;
    if (tmp5 == null) {
      obj2 = {};
    }
    const cornerRadius = obj2.cornerRadius;
    let tmp19 = cornerRadius;
    if (null == cornerRadius) {
      let tmp20;
      if (cResult[18] !== style) {
        class E {
          constructor(arg0) {
            items = [, , ];
            items[0] = closure_1;
            tmp = null;
            if (type.pressed) {
              tmp2 = closure_2;
              str = "highlight";
              if ("highlight" === closure_2) {
                tmp3 = closure_3;
                if (closure_3 == null) {
                  tmp3 = backgroundColor;
                }
                obj1 = { backgroundColor: null };
                obj1.backgroundColor = tmp3;
                obj = obj1;
              } else {
                num = closure_0;
                if (closure_0 == null) {
                  num = 0.2;
                }
                obj = { opacity: null };
                obj.opacity = num;
              }
              tmp = obj;
            }
            items[1] = tmp;
            items[2] = IOS_POINTER_STYLE;
            return items;
          }
        }
        const styleProp = obj5.getStyleProp(style, "borderRadius");
        cResult[18] = style;
        cResult[19] = styleProp;
        tmp20 = styleProp;
      } else {
        tmp20 = cResult[19];
      }
      class E {
        constructor(arg0) {
          items = [, , ];
          items[0] = closure_1;
          tmp = null;
          if (type.pressed) {
            tmp2 = closure_2;
            str = "highlight";
            if ("highlight" === closure_2) {
              tmp3 = closure_3;
              if (closure_3 == null) {
                tmp3 = backgroundColor;
              }
              obj1 = { backgroundColor: null };
              obj1.backgroundColor = tmp3;
              obj = obj1;
            } else {
              num = closure_0;
              if (closure_0 == null) {
                num = 0.2;
              }
              obj = { opacity: null };
              obj.opacity = num;
            }
            tmp = obj;
          }
          items[1] = tmp;
          items[2] = IOS_POINTER_STYLE;
          return items;
        }
      }
      if (null != tmp20) {
        tmp19 = tmp20;
      }
    }
    const obj3 = { cornerRadius: tmp19 };
    const merged = Object.assign(tmp5);
    cResult[15] = tmp5;
    cResult[16] = style;
    cResult[17] = getThemedRippleConfig(obj3);
    const tmp27 = getThemedRippleConfig(obj3);
  }
  if (cResult[20] === undefined) {
    if (cResult[21] === tmp6) {
      if (cResult[22] === tmp7) {
        if (cResult[23] === tmp8) {
          class E {
            constructor(arg0) {
              items = [, , ];
              items[0] = closure_1;
              tmp = null;
              if (type.pressed) {
                tmp2 = closure_2;
                str = "highlight";
                if ("highlight" === closure_2) {
                  tmp3 = closure_3;
                  if (closure_3 == null) {
                    tmp3 = backgroundColor;
                  }
                  obj1 = { backgroundColor: null };
                  obj1.backgroundColor = tmp3;
                  obj = obj1;
                } else {
                  num = closure_0;
                  if (closure_0 == null) {
                    num = 0.2;
                  }
                  obj = { opacity: null };
                  obj.opacity = num;
                }
                tmp = obj;
              }
              items[1] = tmp;
              items[2] = IOS_POINTER_STYLE;
              return items;
            }
          }
        }
      }
    }
  }
  const merged1 = Object.assign(tmp8);
  cResult[20] = undefined;
  cResult[21] = tmp6;
  cResult[22] = tmp7;
  cResult[23] = tmp8;
  cResult[24] = style;
  cResult[25] = <Pressable android_ripple={undefined} style={style} ref={tmp7}>{tmp6}</Pressable>;
}) : ((androidRippleConfig) => {
  let children;
  let innerRef;
  androidRippleConfig = androidRippleConfig.androidRippleConfig;
  const style = androidRippleConfig.style;
  const type = androidRippleConfig.type;
  const activeOpacity = androidRippleConfig.activeOpacity;
  const underlayColor = androidRippleConfig.underlayColor;
  ({ children, innerRef } = androidRippleConfig);
  let merged = Object.assign(androidRippleConfig, Object.assign({ children: 0, androidRippleConfig: 0, style: 0, type: 0, activeOpacity: 0, underlayColor: 0, innerRef: 0 }));
  const backgroundColor = closure_12().pressedHighlight.backgroundColor;
  let items = [type, activeOpacity, underlayColor, style, backgroundColor];
  const items1 = [androidRippleConfig, style];
  const memo = react.useMemo(() => {
    let obj = PlatformUtils;
    return obj.isAndroid() ? style : ((pressed) => {
      const items = [style, , ];
      let tmp = null;
      if (pressed.pressed) {
        let obj;
        if ("highlight" === type) {
          let tmp3 = underlayColor;
          if (underlayColor == null) {
            tmp3 = backgroundColor;
          }
          obj = { backgroundColor: tmp3 };
          const obj2 = { backgroundColor: tmp3 };
        } else {
          let num = activeOpacity;
          if (activeOpacity == null) {
            num = 0.2;
          }
          obj = { opacity: num };
        }
        tmp = obj;
      }
      items[1] = tmp;
      items[2] = IOS_POINTER_STYLE;
      return items;
    });
  }, items);
  const merged1 = Object.assign(merged);
  return <Pressable android_ripple={react.useMemo(() => {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      let obj2 = androidRippleConfig;
      if (androidRippleConfig == null) {
        obj2 = {};
      }
      const cornerRadius = obj2.cornerRadius;
      let tmp4 = cornerRadius;
      if (null == cornerRadius) {
        const obj3 = StyleSheetUtilsDefault;
        const styleProp = obj3.getStyleProp(style, "borderRadius");
        tmp4 = cornerRadius;
        if (null != styleProp) {
          tmp4 = styleProp;
        }
      }
      const obj4 = { cornerRadius: tmp4 };
      const merged = Object.assign(androidRippleConfig);
      return getThemedRippleConfig(obj4);
    }
  }, items1)} style={memo} ref={innerRef}>{children}</Pressable>;
});
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRef2 = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((activeOpacity, innerRef) => {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== activeOpacity) {
    activeOpacity = activeOpacity.activeOpacity;
    const tmp6 = _objectWithoutProperties(activeOpacity, closure_4);
    cResult[0] = activeOpacity;
    cResult[1] = tmp6;
    cResult[2] = activeOpacity;
    tmp3 = activeOpacity;
    tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  let num4 = 0.2;
  if (undefined !== tmp3) {
    num4 = tmp3;
  }
  if (cResult[3] === num4) {
    if (cResult[4] === tmp2) {
      let tmp7;
      if (cResult[5] === innerRef) {
        tmp7 = cResult[6];
      }
      return tmp7;
    }
  }
  const merged = Object.assign(tmp2);
  const tmp9 = <closure_13 innerRef={innerRef} type="opacity" activeOpacity={num4} />;
  cResult[3] = num4;
  cResult[4] = tmp2;
  cResult[5] = innerRef;
  cResult[6] = tmp9;
  tmp7 = tmp9;
}) : ((activeOpacity, innerRef) => {
  let num = activeOpacity.activeOpacity;
  if (num === undefined) {
    num = 0.2;
  }
  const merged = Object.assign(Object.assign(activeOpacity, Object.assign({ activeOpacity: 0 })));
  return <closure_13 innerRef={innerRef} type="opacity" activeOpacity={num} />;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRef2Result = forwardRef2(ReactCompilerGating.isReactCompilerEnabled() ? ((underlayColor, innerRef) => {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== underlayColor) {
    underlayColor = underlayColor.underlayColor;
    const tmp6 = _objectWithoutProperties(underlayColor, closure_5);
    cResult[0] = underlayColor;
    cResult[1] = tmp6;
    cResult[2] = underlayColor;
    tmp3 = underlayColor;
    tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[3] === tmp2) {
    if (cResult[4] === innerRef) {
      let tmp7;
      if (cResult[5] === tmp3) {
        tmp7 = cResult[6];
      }
      return tmp7;
    }
  }
  const merged = Object.assign(tmp2);
  const tmp9 = <closure_13 innerRef={innerRef} type="highlight" underlayColor={tmp3} />;
  cResult[3] = tmp2;
  cResult[4] = innerRef;
  cResult[5] = tmp3;
  cResult[6] = tmp9;
  tmp7 = tmp9;
}) : ((underlayColor, innerRef) => {
  const merged = Object.assign(Object.assign(underlayColor, Object.assign({ underlayColor: 0 })));
  return <closure_13 innerRef={innerRef} type="highlight" underlayColor={underlayColor.underlayColor} />;
}));
const result = size.fileFinishedImporting("design/void/Pressables/native/Pressables.tsx");

export const PressableOpacity = forwardRefResult;
export const PressableHighlight = forwardRef2Result;