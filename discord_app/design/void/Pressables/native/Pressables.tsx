// discord_app/design/void/Pressables/native/Pressables.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import StyleSheetUtilsDefault from "../../../../utils/native/StyleSheetUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["children", "androidRippleConfig", "style", "type", "activeOpacity", "underlayColor", "innerRef"];
let closure_4 = ["activeOpacity", "ref"];
let closure_5 = ["underlayColor", "ref"];
const Pressable = fn(17).Pressable;
const IOS_POINTER_STYLE = fn(5385).IOS_POINTER_STYLE;
const getThemedRippleConfig = fn(1204).getThemedRippleConfig;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { pressedHighlight: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED } };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PressableBase(type) {
      let merged1 = dependencyMap;
      const cResult = require("c").c(26);
      if (cResult[0] !== type) {
        ({ children, androidRippleConfig, style } = type);
        importDefault = style;
        type = type.type;
        dependencyMap = type;
        const activeOpacity = type.activeOpacity;
        _require = activeOpacity;
        const underlayColor = type.underlayColor;
        closure_3 = underlayColor;
        const innerRef = type.innerRef;
        const tmp14 = _objectWithoutProperties(type, closure_3);
        cResult[0] = type;
        cResult[1] = activeOpacity;
        cResult[2] = androidRippleConfig;
        cResult[3] = children;
        cResult[4] = innerRef;
        cResult[5] = tmp14;
        cResult[6] = style;
        cResult[7] = type;
        cResult[8] = underlayColor;
        let tmp8 = tmp14;
        let tmp7 = innerRef;
        let tmp6 = children;
        let tmp5 = androidRippleConfig;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        importDefault = cResult[6];
        dependencyMap = cResult[7];
        closure_3 = cResult[8];
      }
      const backgroundColor = closure_12().pressedHighlight.backgroundColor;
      let obj = require("c");
      if (tmpResult.isAndroid()) {
        if (!tmpResult2.isAndroid()) {
          if (cResult[20] === undefined) {
            if (cResult[21] === tmp6) {
              if (cResult[22] === tmp7) {
                if (cResult[23] === tmp8) {
                  if (cResult[24] === style) {
                    let tmp27 = cResult[25];
                  }
                  return tmp27;
                }
              }
            }
          }
          let obj2 = { android_ripple: undefined, style, ref: tmp7 };
          const merged = Object.assign(tmp8);
          obj2.children = tmp6;
          const tmp33 = <Pressable android_ripple={undefined} style={style} ref={tmp7} />;
          cResult[20] = undefined;
          cResult[21] = tmp6;
          cResult[22] = tmp7;
          cResult[23] = tmp8;
          cResult[24] = style;
          cResult[25] = tmp33;
          tmp27 = tmp33;
        } else {
          if (cResult[15] === tmp5) {
          }
          let obj3 = tmp5;
          if (tmp5 == null) {
            obj3 = {};
          }
          const cornerRadius = obj3.cornerRadius;
          let tmp18 = cornerRadius;
          if (null == cornerRadius) {
            if (cResult[18] !== style) {
              const styleProp = StyleSheetUtilsDefault.getStyleProp(style, "borderRadius");
              cResult[18] = style;
              cResult[19] = styleProp;
              let tmp19 = styleProp;
            } else {
              tmp19 = cResult[19];
            }
            tmp18 = cornerRadius;
            if (null != tmp19) {
              tmp18 = tmp19;
            }
          }
          const obj4 = {};
          merged1 = Object.assign(tmp5);
          obj4.cornerRadius = tmp18;
          const tmp25 = getThemedRippleConfig(obj4);
          cResult[15] = tmp5;
          cResult[16] = style;
          cResult[17] = tmp25;
        }
        tmpResult2 = tmp(1382);
      } else {
        if (cResult[9] === tmp4) {
          if (cResult[10] === backgroundColor) {
            if (cResult[11] === style) {
              if (cResult[12] === tmp10) {
                class E {
                  constructor(arg0) {
                    items = [, ,];
                    items[0] = closure_1;
                    if (!type.pressed) {
                      items[1] = null;
                      tmp4 = IOS_POINTER_STYLE;
                      items[2] = IOS_POINTER_STYLE;
                      return items;
                    } else {
                      tmp = closure_2;
                      str = "highlight";
                      if ("highlight" === closure_2) {
                        tmp2 = closure_3;
                        if (closure_3 == null) {
                          tmp2 = backgroundColor;
                        }
                        obj1 = { backgroundColor: null };
                        obj1.backgroundColor = tmp2;
                        obj = obj1;
                      } else {
                        num = closure_0;
                        if (closure_0 == null) {
                          num = 0.2;
                        }
                        obj = { opacity: null };
                        obj.opacity = num;
                      }
                      tmp3 = obj;
                    }
                    return;
                  }
                }
              }
            }
          }
        }
        class E {
          constructor(arg0) {
            items = [, ,];
            items[0] = closure_1;
            if (!type.pressed) {
              items[1] = null;
              tmp4 = IOS_POINTER_STYLE;
              items[2] = IOS_POINTER_STYLE;
              return items;
            } else {
              tmp = closure_2;
              str = "highlight";
              if ("highlight" === closure_2) {
                tmp2 = closure_3;
                if (closure_3 == null) {
                  tmp2 = backgroundColor;
                }
                obj1 = { backgroundColor: null };
                obj1.backgroundColor = tmp2;
                obj = obj1;
              } else {
                num = closure_0;
                if (closure_0 == null) {
                  num = 0.2;
                }
                obj = { opacity: null };
                obj.opacity = num;
              }
              tmp3 = obj;
            }
            return;
          }
        }
        cResult[9] = tmp4;
        cResult[10] = backgroundColor;
        cResult[11] = style;
        cResult[12] = tmp10;
        cResult[13] = tmp11;
        cResult[14] = E;
      }
      tmpResult = require("PlatformUtils");
    }
  : function PressableBase(androidRippleConfig) {
      androidRippleConfig = androidRippleConfig.androidRippleConfig;
      const style = androidRippleConfig.style;
      const type = androidRippleConfig.type;
      const activeOpacity = androidRippleConfig.activeOpacity;
      const underlayColor = androidRippleConfig.underlayColor;
      ({ children, innerRef } = androidRippleConfig);
      let merged = Object.assign(
        androidRippleConfig,
        Object.assign({
          children: 0,
          androidRippleConfig: 0,
          style: 0,
          type: 0,
          activeOpacity: 0,
          underlayColor: 0,
          innerRef: 0,
        }),
      );
      const backgroundColor = closure_12().pressedHighlight.backgroundColor;
      let items = [type, activeOpacity, underlayColor, style, backgroundColor];
      const items1 = [androidRippleConfig, style];
      const memo = noop.useMemo(
        () =>
          PlatformUtils.isAndroid()
            ? style
            : (pressed) => {
                const items = [style, ,];
                if (!pressed.pressed) {
                  items[1] = null;
                  items[2] = IOS_POINTER_STYLE;
                  return items;
                } else if ("highlight" === type) {
                  let tmp2 = underlayColor;
                  if (underlayColor == null) {
                    tmp2 = backgroundColor;
                  }
                  const obj2 = { backgroundColor: tmp2 };
                } else {
                  let num = activeOpacity;
                  if (activeOpacity == null) {
                    num = 0.2;
                  }
                  const obj = { opacity: num };
                }
              },
        items,
      );
      let obj = {
        android_ripple: noop.useMemo(() => {
          if (obj.isAndroid()) {
            let obj2 = androidRippleConfig;
            if (androidRippleConfig == null) {
              obj2 = {};
            }
            const cornerRadius = obj2.cornerRadius;
            let tmp4 = cornerRadius;
            if (null == cornerRadius) {
              const styleProp = StyleSheetUtilsDefault.getStyleProp(style, "borderRadius");
              tmp4 = cornerRadius;
              if (null != styleProp) {
                tmp4 = styleProp;
              }
            }
            const obj4 = {};
            const merged = Object.assign(androidRippleConfig);
            obj4.cornerRadius = tmp4;
            return getThemedRippleConfig(obj4);
          }
          obj = PlatformUtils;
        }, items1),
        style: memo,
        ref: innerRef,
      };
      const merged1 = Object.assign(merged);
      obj.children = children;
      return (
        <Pressable
          android_ripple={noop.useMemo(() => {
            if (obj.isAndroid()) {
              let obj2 = androidRippleConfig;
              if (androidRippleConfig == null) {
                obj2 = {};
              }
              const cornerRadius = obj2.cornerRadius;
              let tmp4 = cornerRadius;
              if (null == cornerRadius) {
                const styleProp = StyleSheetUtilsDefault.getStyleProp(style, "borderRadius");
                tmp4 = cornerRadius;
                if (null != styleProp) {
                  tmp4 = styleProp;
                }
              }
              const obj4 = {};
              const merged = Object.assign(androidRippleConfig);
              obj4.cornerRadius = tmp4;
              return getThemedRippleConfig(obj4);
            }
            obj = PlatformUtils;
          }, items1)}
          style={memo}
          ref={innerRef}
        />
      );
    };
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PressableOpacity(arg0) {
      const cResult = c.c(8);
      if (cResult[0] !== arg0) {
        ({ activeOpacity, ref } = arg0);
        const tmp7 = _objectWithoutProperties(arg0, closure_4);
        cResult[0] = arg0;
        cResult[1] = tmp7;
        cResult[2] = ref;
        cResult[3] = activeOpacity;
        let tmp4 = activeOpacity;
        let tmp3 = ref;
        let tmp2 = tmp7;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
        tmp4 = cResult[3];
      }
      let num5 = 0.2;
      if (undefined !== tmp4) {
        num5 = tmp4;
      }
      if (cResult[4] === num5) {
        if (cResult[5] === tmp2) {
          if (cResult[6] === tmp3) {
            let tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
      const merged = Object.assign(tmp2);
      const tmp10 = <closure_13 innerRef={tmp3} type="opacity" activeOpacity={num5} />;
      cResult[4] = num5;
      cResult[5] = tmp2;
      cResult[6] = tmp3;
      cResult[7] = tmp10;
      tmp8 = tmp10;
      const obj2 = { innerRef: tmp3, type: "opacity", activeOpacity: num5 };
    }
  : function PressableOpacity(activeOpacity) {
      let num = activeOpacity.activeOpacity;
      if (num === undefined) {
        num = 0.2;
      }
      const merged = Object.assign(Object.assign(activeOpacity, Object.assign({ activeOpacity: 0, ref: 0 })));
      return <closure_13 innerRef={activeOpacity.ref} type="opacity" activeOpacity={num} />;
    };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Pressables/native/Pressables.tsx");

export const PressableOpacity = tmp2;
export const PressableHighlight = ReactCompilerGating.isReactCompilerEnabled()
  ? function PressableHighlight(arg0) {
      const cResult = c.c(8);
      if (cResult[0] !== arg0) {
        ({ underlayColor, ref } = arg0);
        const tmp7 = _objectWithoutProperties(arg0, closure_5);
        cResult[0] = arg0;
        cResult[1] = tmp7;
        cResult[2] = ref;
        cResult[3] = underlayColor;
        let tmp4 = underlayColor;
        let tmp3 = ref;
        let tmp2 = tmp7;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
        tmp4 = cResult[3];
      }
      if (cResult[4] === tmp2) {
        if (cResult[5] === tmp3) {
          if (cResult[6] === tmp4) {
            let tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
      const merged = Object.assign(tmp2);
      const tmp10 = <closure_13 innerRef={tmp3} type="highlight" underlayColor={tmp4} />;
      cResult[4] = tmp2;
      cResult[5] = tmp3;
      cResult[6] = tmp4;
      cResult[7] = tmp10;
      tmp8 = tmp10;
      const obj2 = { innerRef: tmp3, type: "highlight", underlayColor: tmp4 };
    }
  : function PressableHighlight(arg0) {
      ({ underlayColor, ref } = arg0);
      const merged = Object.assign(Object.assign(arg0, Object.assign({ underlayColor: 0, ref: 0 })));
      return <closure_13 innerRef={ref} type="highlight" underlayColor={underlayColor} />;
    };
