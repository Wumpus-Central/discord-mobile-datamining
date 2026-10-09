// === Module 16258: VEVOOPropTintColor ===

// Module 16258 (VEVOOPropTintColor)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import ColorUtils from "ColorUtils" /* 4928 */;
import FormSwitch from "FormSwitch" /* 6890 */;
import Form from "Form" /* 8563 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14767 */;
import VEVOO from "VEVOO" /* 16255 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
const VEVOOStore = fn(5365);
({ getVisualEffectViewOverrides: metroRequire, setVisualEffectViewOverides: closure_7 } = VEVOOStore);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let obj = { tintColor: null };
let size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, borderRadius: nativeDefault.radii.sm };
obj.tintColor = size;
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropTintColor.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VEVOOPropTintColor() {
  const cResult = c.c(43);
  const tmp4 = closure_11();
  const visualEffectViewOverrideSharedStyles = VEVOO.useVisualEffectViewOverrideSharedStyles();
  [tmp8, require] = first2(noop.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let str = closure_6().tintColorOverrideHex;
    if (str == null) {
      str = "black";
    }
    cResult[0] = str;
    let first = str;
  } else {
    first = cResult[0];
  }
  const tmp6Result = first2(noop.useState(first), 2);
  const first1 = tmp6Result[0];
  dependencyMap = tmp6Result[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = closure_6();
    cResult[1] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[1];
  }
  const tmp6Result2 = first2(noop.useState(tmp14.tintColorOverrideOpacity), 2);
  first2 = tmp6Result2[0];
  noop = tmp6Result2[1];
  const tmp7 = first2(noop.useState(false), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(arg0, arg1) {
        if (null != arg0) {
          tmp = closure_2;
          tmp2 = closure_2(arg0);
        }
        if (null != arg1) {
          tmp3 = closure_4;
          tmp4 = closure_4(arg1);
        }
        hexToRgbaStringResult = undefined;
        if (null != arg0) {
          if (null != arg1) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj = closure_0(closure_2[10]);
            hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
          }
        }
        obj1 = {};
        merged = Object.assign(closure_6());
        obj1.tintColorOverrideOpacity = arg1;
        obj1.tintColorOverrideHex = arg0;
        obj1.tintColorOverride = hexToRgbaStringResult;
        closure_0 = obj1;
        if (null == hexToRgbaStringResult) {
          tmp11 = closure_7;
          obj4 = {};
          tmp12 = obj4;
          tmp13 = obj1;
          merged1 = Object.assign(obj1);
          str = "rgba(0, 0, 0, 0)";
          obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
          tmp15 = closure_7(obj4);
          tmp16 = globalThis;
          _setTimeout = setTimeout;
          timerId = setTimeout(() => { ... });
        } else {
          tmp9 = closure_7;
          tmp10 = closure_7(obj1);
        }
        return;
      }
    }
    cResult[2] = R;
  } else {
    class R {
      constructor(arg0, arg1) {
        if (null != arg0) {
          tmp = closure_2;
          tmp2 = closure_2(arg0);
        }
        if (null != arg1) {
          tmp3 = closure_4;
          tmp4 = closure_4(arg1);
        }
        hexToRgbaStringResult = undefined;
        if (null != arg0) {
          if (null != arg1) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj = closure_0(closure_2[10]);
            hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
          }
        }
        obj1 = {};
        merged = Object.assign(closure_6());
        obj1.tintColorOverrideOpacity = arg1;
        obj1.tintColorOverrideHex = arg0;
        obj1.tintColorOverride = hexToRgbaStringResult;
        closure_0 = obj1;
        if (null == hexToRgbaStringResult) {
          tmp11 = closure_7;
          obj4 = {};
          tmp12 = obj4;
          tmp13 = obj1;
          merged1 = Object.assign(obj1);
          str = "rgba(0, 0, 0, 0)";
          obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
          tmp15 = closure_7(obj4);
          tmp16 = globalThis;
          _setTimeout = setTimeout;
          timerId = setTimeout(() => { ... });
        } else {
          tmp9 = closure_7;
          tmp10 = closure_7(obj1);
        }
        return;
      }
    }
  }
  View = R;
  if (cResult[3] === first1) {
    class R {
      constructor(arg0, arg1) {
        if (null != arg0) {
          tmp = closure_2;
          tmp2 = closure_2(arg0);
        }
        if (null != arg1) {
          tmp3 = closure_4;
          tmp4 = closure_4(arg1);
        }
        hexToRgbaStringResult = undefined;
        if (null != arg0) {
          if (null != arg1) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj = closure_0(closure_2[10]);
            hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
          }
        }
        obj1 = {};
        merged = Object.assign(closure_6());
        obj1.tintColorOverrideOpacity = arg1;
        obj1.tintColorOverrideHex = arg0;
        obj1.tintColorOverride = hexToRgbaStringResult;
        closure_0 = obj1;
        if (null == hexToRgbaStringResult) {
          tmp11 = closure_7;
          obj4 = {};
          tmp12 = obj4;
          tmp13 = obj1;
          merged1 = Object.assign(obj1);
          str = "rgba(0, 0, 0, 0)";
          obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
          tmp15 = closure_7(obj4);
          tmp16 = globalThis;
          _setTimeout = setTimeout;
          timerId = setTimeout(() => { ... });
        } else {
          tmp9 = closure_7;
          tmp10 = closure_7(obj1);
        }
        return;
      }
    }
    if (cResult[6] === B) {
      class R {
        constructor(arg0, arg1) {
          if (null != arg0) {
            tmp = closure_2;
            tmp2 = closure_2(arg0);
          }
          if (null != arg1) {
            tmp3 = closure_4;
            tmp4 = closure_4(arg1);
          }
          hexToRgbaStringResult = undefined;
          if (null != arg0) {
            if (null != arg1) {
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj = closure_0(closure_2[10]);
              hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
            }
          }
          obj1 = {};
          merged = Object.assign(closure_6());
          obj1.tintColorOverrideOpacity = arg1;
          obj1.tintColorOverrideHex = arg0;
          obj1.tintColorOverride = hexToRgbaStringResult;
          closure_0 = obj1;
          if (null == hexToRgbaStringResult) {
            tmp11 = closure_7;
            obj4 = {};
            tmp12 = obj4;
            tmp13 = obj1;
            merged1 = Object.assign(obj1);
            str = "rgba(0, 0, 0, 0)";
            obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
            tmp15 = closure_7(obj4);
            tmp16 = globalThis;
            _setTimeout = setTimeout;
            timerId = setTimeout(() => { ... });
          } else {
            tmp9 = closure_7;
            tmp10 = closure_7(obj1);
          }
          return;
        }
      }
      if (cResult[9] !== first1) {
        class R {
          constructor(arg0, arg1) {
            if (null != arg0) {
              tmp = closure_2;
              tmp2 = closure_2(arg0);
            }
            if (null != arg1) {
              tmp3 = closure_4;
              tmp4 = closure_4(arg1);
            }
            hexToRgbaStringResult = undefined;
            if (null != arg0) {
              if (null != arg1) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj = closure_0(closure_2[10]);
                hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
              }
            }
            obj1 = {};
            merged = Object.assign(closure_6());
            obj1.tintColorOverrideOpacity = arg1;
            obj1.tintColorOverrideHex = arg0;
            obj1.tintColorOverride = hexToRgbaStringResult;
            closure_0 = obj1;
            if (null == hexToRgbaStringResult) {
              tmp11 = closure_7;
              obj4 = {};
              tmp12 = obj4;
              tmp13 = obj1;
              merged1 = Object.assign(obj1);
              str = "rgba(0, 0, 0, 0)";
              obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
              tmp15 = closure_7(obj4);
              tmp16 = globalThis;
              _setTimeout = setTimeout;
              timerId = setTimeout(() => { ... });
            } else {
              tmp9 = closure_7;
              tmp10 = closure_7(obj1);
            }
            return;
          }
        }
        tmp25[0] = first1;
        cResult[9] = first1;
        cResult[10] = tmp25;
      } else {
        class R {
          constructor(arg0, arg1) {
            if (null != arg0) {
              tmp = closure_2;
              tmp2 = closure_2(arg0);
            }
            if (null != arg1) {
              tmp3 = closure_4;
              tmp4 = closure_4(arg1);
            }
            hexToRgbaStringResult = undefined;
            if (null != arg0) {
              if (null != arg1) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj = closure_0(closure_2[10]);
                hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
              }
            }
            obj1 = {};
            merged = Object.assign(closure_6());
            obj1.tintColorOverrideOpacity = arg1;
            obj1.tintColorOverrideHex = arg0;
            obj1.tintColorOverride = hexToRgbaStringResult;
            closure_0 = obj1;
            if (null == hexToRgbaStringResult) {
              tmp11 = closure_7;
              obj4 = {};
              tmp12 = obj4;
              tmp13 = obj1;
              merged1 = Object.assign(obj1);
              str = "rgba(0, 0, 0, 0)";
              obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
              tmp15 = closure_7(obj4);
              tmp16 = globalThis;
              _setTimeout = setTimeout;
              timerId = setTimeout(() => { ... });
            } else {
              tmp9 = closure_7;
              tmp10 = closure_7(obj1);
            }
            return;
          }
        }
      }
      if (cResult[11] === tmp4.tintColor) {
        class R {
          constructor(arg0, arg1) {
            if (null != arg0) {
              tmp = closure_2;
              tmp2 = closure_2(arg0);
            }
            if (null != arg1) {
              tmp3 = closure_4;
              tmp4 = closure_4(arg1);
            }
            hexToRgbaStringResult = undefined;
            if (null != arg0) {
              if (null != arg1) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj = closure_0(closure_2[10]);
                hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
              }
            }
            obj1 = {};
            merged = Object.assign(closure_6());
            obj1.tintColorOverrideOpacity = arg1;
            obj1.tintColorOverrideHex = arg0;
            obj1.tintColorOverride = hexToRgbaStringResult;
            closure_0 = obj1;
            if (null == hexToRgbaStringResult) {
              tmp11 = closure_7;
              obj4 = {};
              tmp12 = obj4;
              tmp13 = obj1;
              merged1 = Object.assign(obj1);
              str = "rgba(0, 0, 0, 0)";
              obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
              tmp15 = closure_7(obj4);
              tmp16 = globalThis;
              _setTimeout = setTimeout;
              timerId = setTimeout(() => { ... });
            } else {
              tmp9 = closure_7;
              tmp10 = closure_7(obj1);
            }
            return;
          }
        }
        if (cResult[14] === visualEffectViewOverrideSharedStyles.zeroPadding) {
          class R {
            constructor(arg0, arg1) {
              if (null != arg0) {
                tmp = closure_2;
                tmp2 = closure_2(arg0);
              }
              if (null != arg1) {
                tmp3 = closure_4;
                tmp4 = closure_4(arg1);
              }
              hexToRgbaStringResult = undefined;
              if (null != arg0) {
                if (null != arg1) {
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  obj = closure_0(closure_2[10]);
                  hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
                }
              }
              obj1 = {};
              merged = Object.assign(closure_6());
              obj1.tintColorOverrideOpacity = arg1;
              obj1.tintColorOverrideHex = arg0;
              obj1.tintColorOverride = hexToRgbaStringResult;
              closure_0 = obj1;
              if (null == hexToRgbaStringResult) {
                tmp11 = closure_7;
                obj4 = {};
                tmp12 = obj4;
                tmp13 = obj1;
                merged1 = Object.assign(obj1);
                str = "rgba(0, 0, 0, 0)";
                obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
                tmp15 = closure_7(obj4);
                tmp16 = globalThis;
                _setTimeout = setTimeout;
                timerId = setTimeout(() => { ... });
              } else {
                tmp9 = closure_7;
                tmp10 = closure_7(obj1);
              }
              return;
            }
          }
          if (cResult[17] !== first2) {
            class R {
              constructor(arg0, arg1) {
                if (null != arg0) {
                  tmp = closure_2;
                  tmp2 = closure_2(arg0);
                }
                if (null != arg1) {
                  tmp3 = closure_4;
                  tmp4 = closure_4(arg1);
                }
                hexToRgbaStringResult = undefined;
                if (null != arg0) {
                  if (null != arg1) {
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    obj = closure_0(closure_2[10]);
                    hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
                  }
                }
                obj1 = {};
                merged = Object.assign(closure_6());
                obj1.tintColorOverrideOpacity = arg1;
                obj1.tintColorOverrideHex = arg0;
                obj1.tintColorOverride = hexToRgbaStringResult;
                closure_0 = obj1;
                if (null == hexToRgbaStringResult) {
                  tmp11 = closure_7;
                  obj4 = {};
                  tmp12 = obj4;
                  tmp13 = obj1;
                  merged1 = Object.assign(obj1);
                  str = "rgba(0, 0, 0, 0)";
                  obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
                  tmp15 = closure_7(obj4);
                  tmp16 = globalThis;
                  _setTimeout = setTimeout;
                  timerId = setTimeout(() => { ... });
                } else {
                  tmp9 = closure_7;
                  tmp10 = closure_7(obj1);
                }
                return;
              }
            }
            let toFixedResult;
            if (first2 != null) {
              class R {
                constructor(arg0, arg1) {
                  if (null != arg0) {
                    tmp = closure_2;
                    tmp2 = closure_2(arg0);
                  }
                  if (null != arg1) {
                    tmp3 = closure_4;
                    tmp4 = closure_4(arg1);
                  }
                  hexToRgbaStringResult = undefined;
                  if (null != arg0) {
                    if (null != arg1) {
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      obj = closure_0(closure_2[10]);
                      hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
                    }
                  }
                  obj1 = {};
                  merged = Object.assign(closure_6());
                  obj1.tintColorOverrideOpacity = arg1;
                  obj1.tintColorOverrideHex = arg0;
                  obj1.tintColorOverride = hexToRgbaStringResult;
                  closure_0 = obj1;
                  if (null == hexToRgbaStringResult) {
                    tmp11 = closure_7;
                    obj4 = {};
                    tmp12 = obj4;
                    tmp13 = obj1;
                    merged1 = Object.assign(obj1);
                    str = "rgba(0, 0, 0, 0)";
                    obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
                    tmp15 = closure_7(obj4);
                    tmp16 = globalThis;
                    _setTimeout = setTimeout;
                    timerId = setTimeout(() => { ... });
                  } else {
                    tmp9 = closure_7;
                    tmp10 = closure_7(obj1);
                  }
                  return;
                }
              }
              toFixedResult = first2.toFixed(3);
            }
            if (toFixedResult == null) {
              class R {
                constructor(arg0, arg1) {
                  if (null != arg0) {
                    tmp = closure_2;
                    tmp2 = closure_2(arg0);
                  }
                  if (null != arg1) {
                    tmp3 = closure_4;
                    tmp4 = closure_4(arg1);
                  }
                  hexToRgbaStringResult = undefined;
                  if (null != arg0) {
                    if (null != arg1) {
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      obj = closure_0(closure_2[10]);
                      hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
                    }
                  }
                  obj1 = {};
                  merged = Object.assign(closure_6());
                  obj1.tintColorOverrideOpacity = arg1;
                  obj1.tintColorOverrideHex = arg0;
                  obj1.tintColorOverride = hexToRgbaStringResult;
                  closure_0 = obj1;
                  if (null == hexToRgbaStringResult) {
                    tmp11 = closure_7;
                    obj4 = {};
                    tmp12 = obj4;
                    tmp13 = obj1;
                    merged1 = Object.assign(obj1);
                    str = "rgba(0, 0, 0, 0)";
                    obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
                    tmp15 = closure_7(obj4);
                    tmp16 = globalThis;
                    _setTimeout = setTimeout;
                    timerId = setTimeout(() => { ... });
                  } else {
                    tmp9 = closure_7;
                    tmp10 = closure_7(obj1);
                  }
                  return;
                }
              }
            }
            cResult[17] = first2;
            cResult[18] = toFixedResult;
            const tmp34 = toFixedResult;
          } else {
            class R {
              constructor(arg0, arg1) {
                if (null != arg0) {
                  tmp = closure_2;
                  tmp2 = closure_2(arg0);
                }
                if (null != arg1) {
                  tmp3 = closure_4;
                  tmp4 = closure_4(arg1);
                }
                hexToRgbaStringResult = undefined;
                if (null != arg0) {
                  if (null != arg1) {
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    obj = closure_0(closure_2[10]);
                    hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
                  }
                }
                obj1 = {};
                merged = Object.assign(closure_6());
                obj1.tintColorOverrideOpacity = arg1;
                obj1.tintColorOverrideHex = arg0;
                obj1.tintColorOverride = hexToRgbaStringResult;
                closure_0 = obj1;
                if (null == hexToRgbaStringResult) {
                  tmp11 = closure_7;
                  obj4 = {};
                  tmp12 = obj4;
                  tmp13 = obj1;
                  merged1 = Object.assign(obj1);
                  str = "rgba(0, 0, 0, 0)";
                  obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
                  tmp15 = closure_7(obj4);
                  tmp16 = globalThis;
                  _setTimeout = setTimeout;
                  timerId = setTimeout(() => { ... });
                } else {
                  tmp9 = closure_7;
                  tmp10 = closure_7(obj1);
                }
                return;
              }
            }
          }
          const _HermesInternal = HermesInternal;
          const combined = "Blur Tint Opacity " + tmp34;
          if (cResult[19] !== first1) {
            class Y {
              constructor(arg0) {
                tmp = closure_5(closure_1, arg0);
                return;
              }
            }
            cResult[19] = first1;
            cResult[20] = Y;
          } else {
            class Y {
              constructor(arg0) {
                tmp = closure_5(closure_1, arg0);
                return;
              }
            }
          }
          if (cResult[21] === !tmp8) {
            class Y {
              constructor(arg0) {
                tmp = closure_5(closure_1, arg0);
                return;
              }
            }
            if (cResult[24] === visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal) {
              class Y {
                constructor(arg0) {
                  tmp = closure_5(closure_1, arg0);
                  return;
                }
              }
            }
            const obj4 = { style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, disabled: tmp33, label: combined, subLabel: tmp39 };
            const tmp45 = closure_8(Form.FormRow, obj4);
            cResult[24] = visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal;
            cResult[25] = combined;
            cResult[26] = tmp39;
            cResult[27] = tmp33;
            cResult[28] = tmp45;
          }
          const obj5 = { disabled: !tmp8, initialValue: ref, onValueChange: Y };
          const tmp42 = closure_8(first1(16257), obj5);
          cResult[21] = !tmp8;
          cResult[22] = Y;
          cResult[23] = tmp42;
        }
        const obj6 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint", trailing: tmp26 };
        const tmp32 = closure_8(Form.FormRow, obj6);
        cResult[14] = visualEffectViewOverrideSharedStyles.zeroPadding;
        cResult[15] = tmp26;
        cResult[16] = tmp32;
      }
      const obj7 = { style: null };
      const items = [tmp4.tintColor, tmp25];
      obj7.style = items;
      const tmp29 = closure_8(View, obj7);
      cResult[11] = tmp4.tintColor;
      cResult[12] = tmp25;
      cResult[13] = tmp29;
    }
    const obj8 = { value: tmp8, onValueChange: B };
    const tmp23 = closure_8(FormSwitch.FormSwitch, obj8);
    cResult[6] = B;
    cResult[7] = tmp8;
    cResult[8] = tmp23;
  }
  class B {
    constructor(arg0) {
      tmp = closure_0(arg0);
      tmp2 = closure_5;
      if (arg0) {
        tmp4 = closure_1;
        tmp5 = closure_3;
        tmp2Result = tmp2(closure_1, closure_3);
      } else {
        tmp2Result1 = tmp2(undefined, undefined);
      }
      return;
    }
  }
  cResult[3] = first1;
  cResult[4] = first2;
  cResult[5] = B;
  ref = noop.useRef(first2);
}) : (function VEVOOPropTintColor() {
  let tmp = closure_11();
  const visualEffectViewOverrideSharedStyles = VEVOO.useVisualEffectViewOverrideSharedStyles();
  [tmp7, require] = first1(noop.useState(false), 2);
  let str = closure_6().tintColorOverrideHex;
  if (str == null) {
    str = "black";
  }
  const tmp5Result = first1(noop.useState(str), 2);
  const backgroundColor = tmp5Result[0];
  dependencyMap = tmp5Result[1];
  const tmp5Result2 = first1(noop.useState(closure_6().tintColorOverrideOpacity), 2);
  first1 = tmp5Result2[0];
  noop = tmp5Result2[1];
  const tmp6 = first1(noop.useState(false), 2);
  closure_5 = obj2.useCallback((tintColorOverrideHex, tintColorOverrideOpacity) => {
    if (null != tintColorOverrideHex) {
      closure_2(tintColorOverrideHex);
    }
    if (null != tintColorOverrideOpacity) {
      closure_4(tintColorOverrideOpacity);
    }
    let hexToRgbaStringResult;
    if (null != tintColorOverrideHex) {
      if (null != tintColorOverrideOpacity) {
        hexToRgbaStringResult = ColorUtils.hexToRgbaString(tintColorOverrideHex, tintColorOverrideOpacity);
      }
    }
    const obj2 = {};
    const merged = Object.assign(timestampProducer());
    obj2.tintColorOverrideOpacity = tintColorOverrideOpacity;
    obj2.tintColorOverrideHex = tintColorOverrideHex;
    obj2.tintColorOverride = hexToRgbaStringResult;
    if (null == hexToRgbaStringResult) {
      const obj3 = {};
      const merged1 = Object.assign(obj2);
      obj3.tintColorOverride = "rgba(0, 0, 0, 0)";
      React5(obj3);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_2_7(obj2);
      });
    } else {
      React5(obj2);
    }
  }, []);
  let obj3 = {
    style: visualEffectViewOverrideSharedStyles.zeroPaddingVertical,
    labelStyle: visualEffectViewOverrideSharedStyles.zeroHeight,
    leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle,
    leading: closure_8(FormSwitch.FormSwitch, {
      value: tmp7,
      onValueChange(arg0) {
        _require(arg0);
        if (arg0) {
          closure_5(first, first1);
        } else {
          closure_5(undefined, undefined);
        }
      }
    }),
    subLabel: null,
    disabled: null,
    onPress: null
  };
  const obj5 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint", trailing: null };
  const obj6 = { style: null };
  const items = [tmp.tintColor, { backgroundColor }];
  obj6.style = items;
  obj5.trailing = closure_8(closure_5, obj6);
  const items1 = [closure_8(Form.FormRow, obj5), ];
  const obj7 = { style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, disabled: !tmp7, label: null, subLabel: null };
  let str2;
  if (first1 != null) {
    str2 = first1.toFixed(3);
  }
  if (str2 == null) {
    str2 = "";
  }
  const obj8 = { children: null };
  obj7.label = "Blur Tint Opacity " + str2;
  const obj4 = {
    value: tmp7,
    onValueChange(arg0) {
      _require(arg0);
      if (arg0) {
        closure_5(first, first1);
      } else {
        closure_5(undefined, undefined);
      }
    }
  };
  const ref = noop.useRef(first1);
  obj7.subLabel = closure_8(backgroundColor(16257), {
    disabled: !tmp7,
    initialValue: noop.useRef(first1),
    onValueChange(arg0) {
      closure_5(first, arg0);
    }
  });
  items1[1] = closure_8(Form.FormRow, obj7);
  obj8.children = items1;
  obj3.subLabel = closure_10(closure_9, obj8);
  obj3.disabled = !tmp7;
  obj3.onPress = function onPress() {
    const obj = { color: null, onSelect: null };
    const tmp = showCustomColorPickerActionSheetDefault;
    obj.color = utils_ColorUtils.hex2int(first);
    obj.onSelect = function onSelect(color) {
      closure_1_5(require("utils/ColorUtils").int2hex(color), first1);
    };
    tmp(obj);
  };
  return closure_8(Form.FormRow, obj3);
}));