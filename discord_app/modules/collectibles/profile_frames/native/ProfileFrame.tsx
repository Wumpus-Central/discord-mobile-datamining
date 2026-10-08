// === Module 8322: ProfileFrame ===

// Module 8322 (ProfileFrame)
import c from "c" /* 576 */;
import timing from "timing" /* 5091 */;
import FastImageDefault from "FastImage" /* 6164 */;
import useProfileFrameLayerAsset from "useProfileFrameLayerAsset" /* 8324 */;
import FramePreviewOverrideFrameDefault from "FramePreviewOverrideFrame" /* 8327 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
let closure_5 = fn(8305).useFramePreviewOverrideStore;
const ProfileFrameConstants = fn(8323);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: metroRequire, PROFILE_FRAME_Z_INDEX: closure_7 } = ProfileFrameConstants);
let jsx = fn(21).jsx;
let source = { duration: 150, easing: null };
const Easing = fn(4810).Easing;
source.easing = Easing.in(fn(4810).Easing.ease);
const createStyles = fn(5090);
let obj3 = { container: null, layer: null };
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.pointerEvents = "none";
obj3.container = obj4;
let obj5 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.alignItems = "center";
obj5.overflow = "hidden";
obj3.layer = obj5;
let closure_10 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileFrameLayer(arg0) {
  const cResult = require("c").c(45);
  ({ skuId, layer, overflowHorizontal, containerWidth, containerHeight } = arg0);
  ({ overflowTop, overflowBottom } = arg0);
  const tmp3 = closure_10();
  const sum = containerWidth + 2 * overflowHorizontal;
  require = sum;
  if (cResult[0] === layer) {
    if (cResult[1] === skuId) {
      if (cResult[2] === sum) {
        let tmp5 = cResult[3];
      }
      const tmp7 = assetUrl(tmp[9])(tmp5);
      assetUrl = tmp7.assetUrl;
      imageHeight = tmp7.imageHeight;
      if (cResult[4] === -overflowHorizontal) {
        if (cResult[5] === tmp9) {
          if (cResult[6] === tmp11) {
            let tmp12 = cResult[7];
          }
          const type = layer.type;
          if ("staple" === type) {
            let tmp22;
            if ("top" === layer.anchor) {
              tmp22 = -overflowTop;
            }
            let tmp23;
            if ("bottom" === layer.anchor) {
              tmp23 = -overflowBottom;
            }
            if (cResult[8] === tmp12) {
              if (cResult[9] === tmp22) {
              }
            }
            const obj2 = {};
            const merged = Object.assign(tmp12);
            obj2.top = tmp22;
            obj2.bottom = tmp23;
            cResult[8] = tmp12;
            cResult[9] = tmp22;
            cResult[10] = tmp23;
            cResult[11] = obj2;
          } else {
            if ("rail" === type) {
              let str2 = "center";
              if ("center" !== layer.anchor) {
                let str3 = "flex-end";
                if ("top" === layer.anchor) {
                  str3 = "flex-start";
                }
                str2 = str3;
              }
              if (cResult[12] === tmp12) {
                if (cResult[13] === str2) {
                  let tmp18 = cResult[14];
                }
                let tmp14 = tmp18;
              }
              const obj3 = {};
              const merged1 = Object.assign(tmp12);
              obj3.justifyContent = str2;
              cResult[12] = tmp12;
              cResult[13] = str2;
              cResult[14] = obj3;
              tmp18 = obj3;
            } else {
              if (cResult[15] === tmp12) {
                if (cResult[16] === tmp13) {
                  tmp14 = cResult[17];
                }
              }
              const obj4 = {};
              const merged2 = Object.assign(tmp12);
              obj4.left = -overflowHorizontal;
              cResult[15] = tmp12;
              cResult[16] = -overflowHorizontal;
              cResult[17] = obj4;
              tmp14 = obj4;
            }
            let tmp29 = true === layer.responsive;
            if (tmp29) {
              tmp29 = "rail" === layer.type;
            }
            if (tmp29) {
              tmp29 = null != containerHeight;
            }
            if (tmp29) {
              tmp29 = containerWidth / containerHeight >= closure_6;
            }
            if (0 !== imageHeight) {
              if (null != assetUrl) {
                if (!tmp29) {
                  if ("border" === layer.type) {
                    if (null != containerHeight) {
                      if (0 !== containerHeight) {
                        let fromResult = globalThis;
                        const _Math = Math;
                        const rounded = Math.ceil(containerHeight / imageHeight);
                        if (cResult[18] === tmp14) {
                          if (cResult[19] === tmp3.layer) {
                            let tmp41 = cResult[20];
                          }
                          if (cResult[21] === assetUrl) {
                            if (cResult[22] === imageHeight) {
                              if (cResult[23] === rounded) {
                                if (cResult[24] === sum) {
                                  if (cResult[30] === tmp41) {
                                    if (cResult[31] === tmp42) {
                                      let tmp46 = cResult[32];
                                    }
                                    return tmp46;
                                  }
                                  const obj5 = { style: tmp41, children: cResult[25] };
                                  const tmp49 = <closure_4 style={tmp41}>{cResult[25]}</closure_4>;
                                  cResult[30] = tmp41;
                                  cResult[31] = cResult[25];
                                  cResult[32] = tmp49;
                                  tmp46 = tmp49;
                                }
                              }
                            }
                          }
                          if (cResult[26] === assetUrl) {
                            if (cResult[27] === imageHeight) {
                              if (cResult[28] === sum) {
                                let tmp43 = cResult[29];
                              }
                              const _Array = fromResult.Array;
                              const obj6 = { length: rounded };
                              fromResult = _Array.from(obj6, tmp43);
                              cResult[21] = assetUrl;
                              cResult[22] = imageHeight;
                              cResult[23] = rounded;
                              cResult[24] = sum;
                              cResult[25] = fromResult;
                            }
                          }
                          const fn = function q(arg0, key) {
                            const size = { source: null, resizeMode: "cover", width: sum, height: imageHeight };
                            source = { uri: assetUrl };
                            size.source = source;
                            return jsx(FastImageDefault, { source: null, resizeMode: "cover", width: sum, height: imageHeight }, key);
                          };
                          cResult[26] = assetUrl;
                          cResult[27] = imageHeight;
                          cResult[28] = sum;
                          cResult[29] = fn;
                          tmp43 = fn;
                        }
                        const items = [tmp3.layer, tmp14];
                        cResult[18] = tmp14;
                        cResult[19] = tmp3.layer;
                        cResult[20] = items;
                        tmp41 = items;
                      }
                    }
                    return null;
                  } else {
                    if (cResult[33] === tmp14) {
                      if (cResult[34] === tmp3.layer) {
                        let tmp32 = cResult[35];
                      }
                      if (cResult[36] !== assetUrl) {
                        const obj7 = { uri: assetUrl };
                        cResult[36] = assetUrl;
                        cResult[37] = obj7;
                        let tmp33 = obj7;
                      } else {
                        tmp33 = cResult[37];
                      }
                      if (cResult[38] === imageHeight) {
                        if (cResult[39] === tmp33) {
                          if (cResult[40] === sum) {
                            let tmp34 = cResult[41];
                          }
                          if (cResult[42] === tmp32) {
                            if (cResult[43] === tmp34) {
                              let tmp37 = cResult[44];
                            }
                            return tmp37;
                          }
                          const obj8 = { style: tmp32, children: tmp34 };
                          const tmp40 = <closure_4 style={tmp32}>{tmp34}</closure_4>;
                          cResult[42] = tmp32;
                          cResult[43] = tmp34;
                          cResult[44] = tmp40;
                          tmp37 = tmp40;
                        }
                      }
                      let size = { source: tmp33, resizeMode: "cover", width: sum, height: imageHeight };
                      const tmp36 = jsx(tmp6(tmp[10]), { source: tmp33, resizeMode: "cover", width: sum, height: imageHeight });
                      cResult[38] = imageHeight;
                      cResult[39] = tmp33;
                      cResult[40] = sum;
                      cResult[41] = tmp36;
                      tmp34 = tmp36;
                    }
                    const items1 = [tmp3.layer, tmp14];
                    cResult[33] = tmp14;
                    cResult[34] = tmp3.layer;
                    cResult[35] = items1;
                    tmp32 = items1;
                  }
                }
              }
            }
            return null;
          }
        }
      }
      const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: closure_7[layer.order] };
      cResult[4] = -overflowHorizontal;
      cResult[5] = -overflowHorizontal;
      cResult[6] = closure_7[layer.order];
      cResult[7] = rect;
      tmp12 = rect;
      tmp6 = assetUrl;
    }
  }
  const obj9 = { skuId, layer, width: sum };
  cResult[0] = layer;
  cResult[1] = skuId;
  cResult[2] = sum;
  cResult[3] = obj9;
  tmp5 = obj9;
  const obj = require("c");
}) : (function ProfileFrameLayer(skuId) {
  const layer = skuId.layer;
  const overflowTop = skuId.overflowTop;
  const overflowBottom = skuId.overflowBottom;
  const overflowHorizontal = skuId.overflowHorizontal;
  ({ containerWidth, containerHeight } = skuId);
  const tmp = closure_10();
  const sum = containerWidth + 2 * overflowHorizontal;
  c4 = sum;
  const tmp5 = overflowTop(overflowBottom[9])({ skuId: skuId.skuId, layer, width: sum });
  const assetUrl = tmp5.assetUrl;
  const imageHeight = tmp5.imageHeight;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowHorizontal.useMemo(() => {
    const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: React5[layer.order] };
    const type = layer.type;
    if ("staple" === type) {
      const obj = {};
      const merged = Object.assign(rect);
      let tmp12;
      if ("top" === layer.anchor) {
        tmp12 = -overflowTop;
      }
      obj.top = tmp12;
      let tmp14;
      if ("bottom" === layer.anchor) {
        tmp14 = -overflowBottom;
      }
      obj.bottom = tmp14;
      return obj;
    } else if ("rail" === type) {
      const obj2 = {};
      const merged1 = Object.assign(rect);
      let str2 = "center";
      if ("center" !== layer.anchor) {
        let str3 = "flex-end";
        if ("top" === layer.anchor) {
          str3 = "flex-start";
        }
        str2 = str3;
      }
      obj2.justifyContent = str2;
      return obj2;
    } else {
      const obj3 = {};
      const merged2 = Object.assign(rect);
      obj3.left = -tmp;
      return obj3;
    }
  }, items);
  let tmp7 = true === layer.responsive;
  if (tmp7) {
    tmp7 = "rail" === layer.type;
  }
  if (tmp7) {
    tmp7 = null != containerHeight;
  }
  if (tmp7) {
    tmp7 = containerWidth / containerHeight >= imageHeight;
  }
  if (0 !== imageHeight) {
    if (null != assetUrl) {
      if (!tmp7) {
        if ("border" === layer.type) {
          if (null != containerHeight) {
            if (0 !== containerHeight) {
              const _Math = Math;
              let obj2 = { style: null, children: null };
              const items1 = [tmp.layer, memo];
              obj2.style = items1;
              const _Array = Array;
              let obj3 = { length: Math.ceil(containerHeight / imageHeight) };
              obj2.children = Array.from(obj3, (arg0, key) => {
                const size = { source: null, resizeMode: "cover", width, height: imageHeight };
                source = { uri: assetUrl };
                size.source = source;
                return jsx(FastImageDefault, { source: null, resizeMode: "cover", width, height: imageHeight }, key);
              });
              return <c4 style={null}>{null}</c4>;
            }
          }
          return null;
        } else {
          let obj = { style: null, children: null };
          const items2 = [tmp.layer, memo];
          obj.style = items2;
          let size = { source: null, resizeMode: "cover", width: null, height: null };
          const obj4 = { uri: assetUrl };
          size.source = obj4;
          size.width = sum;
          size.height = imageHeight;
          obj.children = jsx(overflowTop(overflowBottom[10]), { source: null, resizeMode: "cover", width: null, height: null });
          return <c4 style={null}>{null}</c4>;
        }
      }
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function LiveProfileFrame(frame) {
  const cResult = frame(containerHeight[8]).c(44);
  frame = frame.frame;
  const containerWidth = frame.containerWidth;
  containerHeight = frame.containerHeight;
  const profileThemeType = frame.profileThemeType;
  const frameOrder = frame.frameOrder;
  let layers = frame.filterLayer;
  const tmp4 = overflowHorizontal();
  if (cResult[0] === containerWidth) {
    if (cResult[1] === layers) {
      if (cResult[2] === frame) {
        if (cResult[3] === profileThemeType) {
          let tmp5 = cResult[4];
        }
        const settled = tmp(tmp2[9]).usePreloadLayerImages(tmp5).settled;
        if (cResult[5] === layers) {
          if (cResult[6] === frame.layers) {
            if (cResult[7] === frameOrder) {
              if (cResult[8] === profileThemeType) {
                const useSharedValue = tmp(tmp2[5]).useSharedValue;
                class T {
                  constructor(arg0) {
                    result = null == frameOrder || tmp === frame.order;
                    if (result) {
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj = closure_0(closure_2[9]);
                      tmp5 = profileThemeType;
                      tmp6 = filterLayer;
                      result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                    }
                    return result;
                  }
                }
                if (cResult[14] === tmp10) {
                  if (cResult[15] === settled) {
                    let tmp11 = cResult[16];
                    let tmp12 = cResult[17];
                  }
                  const effect = profileThemeType.useEffect(tmp11, tmp12);
                  if (0 !== arr.length) {
                    if (0 !== containerWidth) {
                      if (settled) {
                        if (cResult[18] === containerWidth) {
                          const overflowTop = tmp15.overflowTop;
                          const overflowBottom = tmp15.overflowBottom;
                          overflowHorizontal = tmp15.overflowHorizontal;
                          class T {
                            constructor(arg0) {
                              result = null == frameOrder || tmp === frame.order;
                              if (result) {
                                tmp3 = closure_0;
                                tmp4 = closure_2;
                                obj = closure_0(closure_2[9]);
                                tmp5 = profileThemeType;
                                tmp6 = filterLayer;
                                result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                              }
                              return result;
                            }
                          }
                          if (cResult[21] !== tmp10) {
                            const obj2 = { opacity: tmp10 };
                            cResult[21] = tmp10;
                            cResult[22] = obj2;
                            class T {
                              constructor(arg0) {
                                result = null == frameOrder || tmp === frame.order;
                                if (result) {
                                  tmp3 = closure_0;
                                  tmp4 = closure_2;
                                  obj = closure_0(closure_2[9]);
                                  tmp5 = profileThemeType;
                                  tmp6 = filterLayer;
                                  result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                                }
                                return result;
                              }
                            }
                          }
                          if (cResult[23] === tmp4.container) {
                            if (cResult[24] === tmp18) {
                              let tmp19 = cResult[25];
                            }
                            if (cResult[26] === containerHeight) {
                              if (cResult[27] === containerWidth) {
                                if (cResult[28] === frame.skuId) {
                                  if (cResult[29] === overflowBottom) {
                                    if (cResult[30] === overflowHorizontal) {
                                      if (cResult[31] === overflowTop) {
                                        if (cResult[32] === arr) {
                                          if (cResult[41] === tmp19) {
                                            if (cResult[42] === tmp21) {
                                              let tmp25 = cResult[43];
                                            }
                                            return tmp25;
                                          }
                                          class S {
                                            constructor(arg0) {
                                              obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                                              return jsx(ProfileFrameLayer, obj, frame.id);
                                            }
                                          }
                                          const obj3 = { style: tmp19, children: null };
                                          class T {
                                            constructor(arg0) {
                                              result = null == frameOrder || tmp === frame.order;
                                              if (result) {
                                                tmp3 = closure_0;
                                                tmp4 = closure_2;
                                                obj = closure_0(closure_2[9]);
                                                tmp5 = profileThemeType;
                                                tmp6 = filterLayer;
                                                result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                                              }
                                              return result;
                                            }
                                          }
                                          const tmp27 = overflowTop(containerWidth(tmp2[5]).View, obj3);
                                          class P {
                                            constructor() {
                                              num = 0;
                                              tmp = closure_7;
                                              if (settled) {
                                                tmp2 = closure_0;
                                                tmp3 = closure_2;
                                                obj = closure_0(closure_2[11]);
                                                tmp4 = closure_9;
                                                num2 = 1;
                                                num = obj.withTiming(1, closure_9);
                                              }
                                              result = closure_7.set(num);
                                              return;
                                            }
                                          }
                                          cResult[42] = cResult[33];
                                          cResult[43] = tmp27;
                                          tmp25 = tmp27;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            if (cResult[34] === containerHeight) {
                              if (cResult[35] === containerWidth) {
                                if (cResult[36] === frame.skuId) {
                                  if (cResult[37] === overflowBottom) {
                                    if (cResult[38] === overflowHorizontal) {
                                      if (cResult[39] === overflowTop) {
                                        let tmp22 = cResult[40];
                                      }
                                      const mapped = arr.map(tmp22);
                                      class S {
                                        constructor(arg0) {
                                          obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                                          return jsx(ProfileFrameLayer, obj, frame.id);
                                        }
                                      }
                                      cResult[27] = containerWidth;
                                      class T {
                                        constructor(arg0) {
                                          result = null == frameOrder || tmp === frame.order;
                                          if (result) {
                                            tmp3 = closure_0;
                                            tmp4 = closure_2;
                                            obj = closure_0(closure_2[9]);
                                            tmp5 = profileThemeType;
                                            tmp6 = filterLayer;
                                            result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                                          }
                                          return result;
                                        }
                                      }
                                      cResult[28] = frame;
                                      class P {
                                        constructor() {
                                          num = 0;
                                          tmp = closure_7;
                                          if (settled) {
                                            tmp2 = closure_0;
                                            tmp3 = closure_2;
                                            obj = closure_0(closure_2[11]);
                                            tmp4 = closure_9;
                                            num2 = 1;
                                            num = obj.withTiming(1, closure_9);
                                          }
                                          result = closure_7.set(num);
                                          return;
                                        }
                                      }
                                      cResult[29] = overflowBottom;
                                      cResult[30] = overflowHorizontal;
                                      cResult[31] = overflowTop;
                                      cResult[32] = arr;
                                      cResult[33] = mapped;
                                    }
                                  }
                                }
                              }
                            }
                            class S {
                              constructor(arg0) {
                                obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                                return jsx(ProfileFrameLayer, obj, frame.id);
                              }
                            }
                            cResult[34] = containerHeight;
                            class T {
                              constructor(arg0) {
                                result = null == frameOrder || tmp === frame.order;
                                if (result) {
                                  tmp3 = closure_0;
                                  tmp4 = closure_2;
                                  obj = closure_0(closure_2[9]);
                                  tmp5 = profileThemeType;
                                  tmp6 = filterLayer;
                                  result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                                }
                                return result;
                              }
                            }
                            cResult[35] = containerWidth;
                            class P {
                              constructor() {
                                num = 0;
                                tmp = closure_7;
                                if (settled) {
                                  tmp2 = closure_0;
                                  tmp3 = closure_2;
                                  obj = closure_0(closure_2[11]);
                                  tmp4 = closure_9;
                                  num2 = 1;
                                  num = obj.withTiming(1, closure_9);
                                }
                                result = closure_7.set(num);
                                return;
                              }
                            }
                            cResult[37] = overflowBottom;
                            cResult[38] = overflowHorizontal;
                            cResult[39] = overflowTop;
                            cResult[40] = S;
                            tmp22 = S;
                          }
                          class P {
                            constructor() {
                              num = 0;
                              tmp = closure_7;
                              if (settled) {
                                tmp2 = closure_0;
                                tmp3 = closure_2;
                                obj = closure_0(closure_2[11]);
                                tmp4 = closure_9;
                                num2 = 1;
                                num = obj.withTiming(1, closure_9);
                              }
                              result = closure_7.set(num);
                              return;
                            }
                          }
                          tmp20[0] = tmp4.container;
                          tmp20[1] = tmp18;
                          cResult[23] = tmp4.container;
                          cResult[24] = tmp18;
                          cResult[25] = tmp20;
                          tmp19 = tmp20;
                        }
                        cResult[18] = containerWidth;
                        class T {
                          constructor(arg0) {
                            result = null == frameOrder || tmp === frame.order;
                            if (result) {
                              tmp3 = closure_0;
                              tmp4 = closure_2;
                              obj = closure_0(closure_2[9]);
                              tmp5 = profileThemeType;
                              tmp6 = filterLayer;
                              result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                            }
                            return result;
                          }
                        }
                        cResult[20] = containerWidth(tmp2[12])(frame, containerWidth);
                        class P {
                          constructor() {
                            num = 0;
                            tmp = closure_7;
                            if (settled) {
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              obj = closure_0(closure_2[11]);
                              tmp4 = closure_9;
                              num2 = 1;
                              num = obj.withTiming(1, closure_9);
                            }
                            result = closure_7.set(num);
                            return;
                          }
                        }
                        const tmp17 = containerWidth(tmp2[12])(frame, containerWidth);
                      }
                    }
                  }
                  return null;
                }
                class P {
                  constructor() {
                    num = 0;
                    tmp = closure_7;
                    if (settled) {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = closure_0(closure_2[11]);
                      tmp4 = closure_9;
                      num2 = 1;
                      num = obj.withTiming(1, closure_9);
                    }
                    result = closure_7.set(num);
                    return;
                  }
                }
                const items = [settled, tmp10];
                cResult[14] = tmp10;
                cResult[15] = settled;
                cResult[16] = P;
                cResult[17] = items;
                tmp12 = items;
                tmp11 = P;
                const tmpResult2 = tmp(tmp2[5]);
              }
            }
          }
        }
        if (cResult[10] === layers) {
          if (cResult[11] === frameOrder) {
            if (cResult[12] === profileThemeType) {
              let tmp6 = cResult[13];
            }
            const layers1 = frame.layers;
            const found = layers1.filter(tmp6);
            class S {
              constructor(arg0) {
                obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                return jsx(ProfileFrameLayer, obj, frame.id);
              }
            }
            cResult[5] = layers;
            layers = frame.layers;
            class T {
              constructor(arg0) {
                result = null == frameOrder || tmp === frame.order;
                if (result) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[9]);
                  tmp5 = profileThemeType;
                  tmp6 = filterLayer;
                  result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                }
                return result;
              }
            }
            cResult[6] = layers;
            class P {
              constructor() {
                num = 0;
                tmp = closure_7;
                if (settled) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[11]);
                  tmp4 = closure_9;
                  num2 = 1;
                  num = obj.withTiming(1, closure_9);
                }
                result = closure_7.set(num);
                return;
              }
            }
            cResult[8] = profileThemeType;
            cResult[9] = found;
          }
        }
        class T {
          constructor(arg0) {
            result = null == frameOrder || tmp === frame.order;
            if (result) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[9]);
              tmp5 = profileThemeType;
              tmp6 = filterLayer;
              result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
            }
            return result;
          }
        }
        cResult[10] = layers;
        cResult[11] = frameOrder;
        cResult[12] = profileThemeType;
        cResult[13] = T;
        tmp6 = T;
        const tmpResult = tmp(tmp2[9]);
      }
    }
  }
  const obj4 = { frame, containerWidth, profileThemeType, filterLayer: layers };
  cResult[0] = containerWidth;
  cResult[1] = layers;
  cResult[2] = frame;
  cResult[3] = profileThemeType;
  cResult[4] = obj4;
  tmp5 = obj4;
}) : (function LiveProfileFrame(frame) {
  frame = frame.frame;
  const containerWidth = frame.containerWidth;
  ({ containerHeight: dependencyMap, profileThemeType } = frame);
  const frameOrder = frame.frameOrder;
  const filterLayer = frame.filterLayer;
  let sharedValue;
  jsx = undefined;
  c9 = undefined;
  c10 = undefined;
  const tmp = c10();
  const settled = frame(8324).usePreloadLayerImages({ frame, containerWidth, profileThemeType, filterLayer }).settled;
  const items = [frame.layers, frameOrder, profileThemeType, filterLayer];
  const memo = profileThemeType.useMemo(() => {
    const layers = frame.layers;
    return layers.filter((order) => {
      let result = null == frameOrder || tmp === order.order;
      if (result) {
        result = frame(containerHeight[9]).isProfileFrameLayerShown(order, profileThemeType, filterLayer);
        const obj = frame(containerHeight[9]);
      }
      return result;
    });
  }, items);
  let obj = frame(8324);
  let num = 0;
  if (settled) {
    num = 1;
  }
  sharedValue = frame(4810).useSharedValue(num);
  const items1 = [settled, sharedValue];
  const effect = profileThemeType.useEffect(() => {
    let num = 0;
    if (settled) {
      const obj = timing;
      num = obj.withTiming(1, obj);
    }
    const result = sharedValue.set(num);
  }, items1);
  if (0 !== memo.length) {
    if (0 !== containerWidth) {
      if (settled) {
        ({ overflowTop: c8, overflowBottom: c9, overflowHorizontal: c10 } = containerWidth(8326)(frame, containerWidth));
        const obj4 = { style: null, children: null };
        const items2 = [tmp.container, ];
        const obj5 = { opacity: sharedValue };
        items2[1] = obj5;
        obj4.style = items2;
        obj4.children = memo.map((layer) => <closure_11 key={layer.id} skuId={frame.skuId} layer={layer} overflowTop={overflowTop} overflowBottom={overflowBottom} overflowHorizontal={overflowHorizontal} containerWidth={containerWidth} containerHeight={containerHeight} />);
        return jsx(containerWidth(4810).View, { style: null, children: null });
      }
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileFrame(arg0) {
  let tmp = dependencyMap;
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(override) {
      return override.override;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = closure_5(first);
  if (null != tmp4) {
    if (cResult[1] === tmp4) {
    }
    const obj2 = { override: tmp4 };
    const merged = Object.assign(arg0);
    tmp = jsx(FramePreviewOverrideFrameDefault, { override: tmp4 });
    cResult[1] = tmp4;
    cResult[2] = arg0;
    cResult[3] = tmp;
  } else {
    if (cResult[4] !== arg0) {
      const obj3 = {};
      const merged1 = Object.assign(arg0);
      const tmp11 = <closure_12 />;
      cResult[4] = arg0;
      cResult[5] = tmp11;
      let tmp5 = tmp11;
    } else {
      tmp5 = cResult[5];
    }
    return tmp5;
  }
}) : (function ProfileFrame(arg0) {
  const tmp = closure_5((override) => override.override);
  if (null != tmp) {
    const obj2 = { override: tmp };
    const merged = Object.assign(arg0);
    let tmp7 = jsx(FramePreviewOverrideFrameDefault, { override: tmp });
  } else {
    const obj = {};
    const merged1 = Object.assign(arg0);
    tmp7 = <closure_12 />;
  }
  return tmp7;
});