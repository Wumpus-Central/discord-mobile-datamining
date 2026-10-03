// discord_app/modules/collectibles/profile_frames/native/ProfileFrame.tsx
import c from "../../../../../_runtime/00576_c.js";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useProfileFrameLayerAsset from "useProfileFrameLayerAsset.tsx";
import FramePreviewOverrideFrameDefault from "tooling/FramePreviewOverrideFrame.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
let closure_5 = fn(7874).useFramePreviewOverrideStore;
const ProfileFrameConstants = fn(7893);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: metroRequire, PROFILE_FRAME_Z_INDEX: closure_7 } =
  ProfileFrameConstants);
let jsx = fn(21).jsx;
let source = { duration: 150, easing: null };
const Easing = fn(4612).Easing;
source.easing = Easing.in(fn(4612).Easing.ease);
const createStyles = fn(4890);
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
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = fade(assetUrl[8]).c(48);
      ({ skuId, layer, overflowHorizontal, containerWidth, containerHeight, fade } = arg0);
      ({ overflowTop, overflowBottom } = arg0);
      const tmp3 = closure_10();
      const sum = containerWidth + 2 * overflowHorizontal;
      importDefault = sum;
      if (cResult[0] === layer) {
        if (cResult[1] === skuId) {
          if (cResult[2] === sum) {
            let tmp5 = cResult[3];
          }
          const tmp7 = require("useProfileFrameLayerAsset")(tmp5);
          assetUrl = tmp7.assetUrl;
          const imageHeight = tmp7.imageHeight;
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
                                let tmp39 = cResult[20];
                              }
                              if (cResult[21] === assetUrl) {
                                if (cResult[22] === fade) {
                                  if (cResult[23] === imageHeight) {
                                    if (cResult[24] === rounded) {
                                      if (cResult[25] === sum) {
                                        if (cResult[32] === tmp39) {
                                          if (cResult[33] === tmp40) {
                                            let tmp44 = cResult[34];
                                          }
                                          return tmp44;
                                        }
                                        class G {
                                          constructor(arg0, arg1) {
                                            size = {
                                              source: null,
                                              resizeMode: "cover",
                                              width: closure_1,
                                              height: imageHeight,
                                              fade,
                                            };
                                            obj1 = { uri: assetUrl };
                                            size.source = obj1;
                                            return jsx(closure_1(closure_2[10]), size, arg1);
                                          }
                                        }
                                        const obj5 = { style: tmp39, children: cResult[26] };
                                        const tmp46 = <closure_4 style={tmp39}>{cResult[26]}</closure_4>;
                                        cResult[32] = tmp39;
                                        cResult[33] = cResult[26];
                                        cResult[34] = tmp46;
                                        tmp44 = tmp46;
                                      }
                                    }
                                  }
                                }
                              }
                              if (cResult[27] === assetUrl) {
                                if (cResult[28] === fade) {
                                  if (cResult[29] === imageHeight) {
                                    if (cResult[30] === sum) {
                                      let tmp41 = cResult[31];
                                    }
                                    const _Array = fromResult.Array;
                                    class G {
                                      constructor(arg0, arg1) {
                                        size = {
                                          source: null,
                                          resizeMode: "cover",
                                          width: closure_1,
                                          height: imageHeight,
                                          fade,
                                        };
                                        obj1 = { uri: assetUrl };
                                        size.source = obj1;
                                        return jsx(closure_1(closure_2[10]), size, arg1);
                                      }
                                    }
                                    fromResult = _Array.from({ length: null }, tmp41);
                                    cResult[21] = assetUrl;
                                    cResult[22] = fade;
                                    cResult[23] = imageHeight;
                                    cResult[24] = rounded;
                                    cResult[25] = sum;
                                    cResult[26] = fromResult;
                                    const obj6 = { length: null };
                                  }
                                }
                              }
                              class G {
                                constructor(arg0, arg1) {
                                  size = {
                                    source: null,
                                    resizeMode: "cover",
                                    width: closure_1,
                                    height: imageHeight,
                                    fade,
                                  };
                                  obj1 = { uri: assetUrl };
                                  size.source = obj1;
                                  return jsx(closure_1(closure_2[10]), size, arg1);
                                }
                              }
                              cResult[27] = assetUrl;
                              cResult[28] = fade;
                              cResult[29] = imageHeight;
                              cResult[30] = sum;
                              cResult[31] = G;
                              tmp41 = G;
                            }
                            const items = [tmp3.layer, tmp14];
                            cResult[18] = tmp14;
                            cResult[19] = tmp3.layer;
                            cResult[20] = items;
                            tmp39 = items;
                          }
                        }
                        return null;
                      } else {
                        if (cResult[35] === tmp14) {
                          if (cResult[36] === tmp3.layer) {
                            let tmp32 = cResult[37];
                          }
                          if (cResult[38] !== assetUrl) {
                            const obj7 = { uri: assetUrl };
                            class G {
                              constructor(arg0, arg1) {
                                size = {
                                  source: null,
                                  resizeMode: "cover",
                                  width: closure_1,
                                  height: imageHeight,
                                  fade,
                                };
                                obj1 = { uri: assetUrl };
                                size.source = obj1;
                                return jsx(closure_1(closure_2[10]), size, arg1);
                              }
                            }
                            cResult[39] = obj7;
                            let tmp33 = obj7;
                          } else {
                            tmp33 = cResult[39];
                          }
                          if (cResult[40] === fade) {
                            if (cResult[41] === imageHeight) {
                              if (cResult[42] === tmp33) {
                                if (cResult[43] === sum) {
                                  let tmp34 = cResult[44];
                                }
                                if (cResult[45] === tmp32) {
                                  if (cResult[46] === tmp34) {
                                    let tmp36 = cResult[47];
                                  }
                                  return tmp36;
                                }
                                class G {
                                  constructor(arg0, arg1) {
                                    size = {
                                      source: null,
                                      resizeMode: "cover",
                                      width: closure_1,
                                      height: imageHeight,
                                      fade,
                                    };
                                    obj1 = { uri: assetUrl };
                                    size.source = obj1;
                                    return jsx(closure_1(closure_2[10]), size, arg1);
                                  }
                                }
                                const obj8 = { style: tmp32, children: tmp34 };
                                const tmp38 = <closure_4 style={tmp32}>{tmp34}</closure_4>;
                                cResult[45] = tmp32;
                                cResult[46] = tmp34;
                                cResult[47] = tmp38;
                                tmp36 = tmp38;
                              }
                            }
                          }
                          class G {
                            constructor(arg0, arg1) {
                              size = { source: null, resizeMode: "cover", width: closure_1, height: imageHeight, fade };
                              obj1 = { uri: assetUrl };
                              size.source = obj1;
                              return jsx(closure_1(closure_2[10]), size, arg1);
                            }
                          }
                          let size = { source: tmp33, resizeMode: "cover", width: sum, height: imageHeight, fade };
                          const tmp35 = jsx(tmp6(tmp[10]), {
                            source: tmp33,
                            resizeMode: "cover",
                            width: sum,
                            height: imageHeight,
                            fade,
                          });
                          cResult[40] = fade;
                          cResult[41] = imageHeight;
                          cResult[42] = tmp33;
                          cResult[43] = sum;
                          cResult[44] = tmp35;
                          tmp34 = tmp35;
                        }
                        const items1 = [tmp3.layer];
                        class G {
                          constructor(arg0, arg1) {
                            size = { source: null, resizeMode: "cover", width: closure_1, height: imageHeight, fade };
                            obj1 = { uri: assetUrl };
                            size.source = obj1;
                            return jsx(closure_1(closure_2[10]), size, arg1);
                          }
                        }
                        cResult[35] = tmp14;
                        cResult[36] = tmp3.layer;
                        cResult[37] = items1;
                        tmp32 = items1;
                      }
                    }
                  }
                }
                return null;
              }
            }
          }
          const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: dependencyMap2[layer.order] };
          cResult[4] = -overflowHorizontal;
          cResult[5] = -overflowHorizontal;
          cResult[6] = dependencyMap2[layer.order];
          cResult[7] = rect;
          tmp12 = rect;
          tmp6 = importDefault;
        }
      }
      const obj9 = { skuId, layer, width: sum };
      cResult[0] = layer;
      cResult[1] = skuId;
      cResult[2] = sum;
      cResult[3] = obj9;
      tmp5 = obj9;
      const obj = fade(assetUrl[8]);
    }
  : (skuId) => {
      const layer = skuId.layer;
      const overflowTop = skuId.overflowTop;
      const overflowBottom = skuId.overflowBottom;
      const overflowHorizontal = skuId.overflowHorizontal;
      ({ containerWidth, containerHeight, fade } = skuId);
      const tmp = closure_10();
      const sum = containerWidth + 2 * overflowHorizontal;
      c5 = sum;
      const tmp5 = overflowTop(overflowBottom[9])({ skuId: skuId.skuId, layer, width: sum });
      const assetUrl = tmp5.assetUrl;
      const imageHeight = tmp5.imageHeight;
      const items = [, , , , ,];
      ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
      items[3] = overflowTop;
      items[4] = overflowBottom;
      items[5] = overflowHorizontal;
      const memo = overflowHorizontal.useMemo(() => {
        const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: dependencyMap2[layer.order] };
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
        tmp7 = containerWidth / containerHeight >= assetUrl;
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
                    const size = { source: null, resizeMode: "cover", width, height: imageHeight, fade };
                    source = { uri: assetUrl };
                    size.source = source;
                    return jsx(
                      FastImageDefault,
                      { source: null, resizeMode: "cover", width, height: imageHeight, fade },
                      key,
                    );
                  });
                  return <fade style={null}>{null}</fade>;
                }
              }
              return null;
            } else {
              let obj = { style: null, children: null };
              const items2 = [tmp.layer, memo];
              obj.style = items2;
              let size = { source: null, resizeMode: "cover", width: null, height: null, fade: null };
              const obj4 = { uri: assetUrl };
              size.source = obj4;
              size.width = sum;
              size.height = imageHeight;
              size.fade = fade;
              obj.children = jsx(overflowTop(overflowBottom[10]), {
                source: null,
                resizeMode: "cover",
                width: null,
                height: null,
                fade: null,
              });
              return <fade style={null}>{null}</fade>;
            }
          }
        }
      }
      return null;
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (frame) => {
      const cResult = frame(containerHeight[8]).c(46);
      frame = frame.frame;
      const containerWidth = frame.containerWidth;
      containerHeight = frame.containerHeight;
      const profileThemeType = frame.profileThemeType;
      const frameOrder = frame.frameOrder;
      let layers = frame.filterLayer;
      const tmp4 = overflowBottom();
      let obj = frame(containerHeight[8]);
      const isProfileFrameLayerPreloadEnabled = frame(containerHeight[11]).useIsProfileFrameLayerPreloadEnabled(
        "ProfileFrame",
      );
      if (cResult[0] === containerWidth) {
        if (cResult[1] === layers) {
          if (cResult[2] === frame) {
            if (cResult[3] === profileThemeType) {
              let tmp6 = cResult[4];
            }
            const settled = tmp(tmp2[9]).usePreloadLayerImages(tmp6).settled;
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
                    jsx = tmp11;
                    if (cResult[14] === tmp11) {
                      if (cResult[15] === settled) {
                        let tmp12 = cResult[16];
                        let tmp13 = cResult[17];
                      }
                      const effect = profileThemeType.useEffect(tmp12, tmp13);
                      if (0 !== arr.length) {
                        if (0 !== containerWidth) {
                          if (settled) {
                            if (cResult[18] === containerWidth) {
                              if (cResult[19] === frame) {
                                let tmp16 = cResult[20];
                              }
                              const overflowTop = tmp16.overflowTop;
                              overflowBottom = tmp16.overflowBottom;
                              const overflowHorizontal = tmp16.overflowHorizontal;
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
                              if (cResult[21] !== tmp11) {
                                const obj3 = { opacity: tmp11 };
                                cResult[21] = tmp11;
                                cResult[22] = obj3;
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
                                if (cResult[24] === tmp19) {
                                  let tmp20 = cResult[25];
                                }
                                if (cResult[26] === containerHeight) {
                                  if (cResult[27] === containerWidth) {
                                    if (cResult[28] === frame.skuId) {
                                      if (cResult[29] === isProfileFrameLayerPreloadEnabled) {
                                        if (cResult[30] === overflowBottom) {
                                          if (cResult[31] === overflowHorizontal) {
                                            if (cResult[32] === overflowTop) {
                                              if (cResult[33] === arr) {
                                                if (cResult[43] === tmp20) {
                                                  if (cResult[44] === tmp21) {
                                                    let tmp25 = cResult[45];
                                                  }
                                                  return tmp25;
                                                }
                                                class O {
                                                  constructor(arg0) {
                                                    obj = {
                                                      skuId: frame.skuId,
                                                      layer: frame,
                                                      overflowTop,
                                                      overflowBottom,
                                                      overflowHorizontal,
                                                      containerWidth,
                                                      containerHeight,
                                                      fade: !closure_6,
                                                    };
                                                    return jsx(f45485, obj, frame.id);
                                                  }
                                                }
                                                const obj4 = { style: tmp20, children: null };
                                                class T {
                                                  constructor(arg0) {
                                                    result = null == frameOrder || tmp === frame.order;
                                                    if (result) {
                                                      tmp3 = closure_0;
                                                      tmp4 = closure_2;
                                                      obj = closure_0(closure_2[9]);
                                                      tmp5 = profileThemeType;
                                                      tmp6 = filterLayer;
                                                      result = obj.isProfileFrameLayerShown(
                                                        frame,
                                                        profileThemeType,
                                                        filterLayer,
                                                      );
                                                    }
                                                    return result;
                                                  }
                                                }
                                                const tmp27 = jsx(containerWidth(tmp2[5]).View, {
                                                  style: tmp20,
                                                  children: null,
                                                });
                                                cResult[43] = tmp20;
                                                cResult[44] = cResult[34];
                                                cResult[45] = tmp27;
                                                tmp25 = tmp27;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                if (cResult[35] === containerHeight) {
                                  if (cResult[36] === containerWidth) {
                                    if (cResult[37] === frame.skuId) {
                                      if (cResult[38] === isProfileFrameLayerPreloadEnabled) {
                                        if (cResult[39] === overflowBottom) {
                                          if (cResult[40] === overflowHorizontal) {
                                            if (cResult[41] === overflowTop) {
                                              let tmp22 = cResult[42];
                                            }
                                            const mapped = arr.map(tmp22);
                                            class O {
                                              constructor(arg0) {
                                                obj = {
                                                  skuId: frame.skuId,
                                                  layer: frame,
                                                  overflowTop,
                                                  overflowBottom,
                                                  overflowHorizontal,
                                                  containerWidth,
                                                  containerHeight,
                                                  fade: !closure_6,
                                                };
                                                return jsx(f45485, obj, frame.id);
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
                                                  result = obj.isProfileFrameLayerShown(
                                                    frame,
                                                    profileThemeType,
                                                    filterLayer,
                                                  );
                                                }
                                                return result;
                                              }
                                            }
                                            cResult[28] = frame;
                                            cResult[29] = isProfileFrameLayerPreloadEnabled;
                                            cResult[30] = overflowBottom;
                                            cResult[31] = overflowHorizontal;
                                            cResult[32] = overflowTop;
                                            cResult[33] = arr;
                                            cResult[34] = mapped;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                class O {
                                  constructor(arg0) {
                                    obj = {
                                      skuId: frame.skuId,
                                      layer: frame,
                                      overflowTop,
                                      overflowBottom,
                                      overflowHorizontal,
                                      containerWidth,
                                      containerHeight,
                                      fade: !closure_6,
                                    };
                                    return jsx(f45485, obj, frame.id);
                                  }
                                }
                                cResult[35] = containerHeight;
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
                                cResult[36] = containerWidth;
                                cResult[37] = frame.skuId;
                                cResult[38] = isProfileFrameLayerPreloadEnabled;
                                cResult[39] = overflowBottom;
                                cResult[40] = overflowHorizontal;
                                cResult[41] = overflowTop;
                                cResult[42] = O;
                                tmp22 = O;
                              }
                              const items = [tmp4.container, tmp19];
                              cResult[23] = tmp4.container;
                              cResult[24] = tmp19;
                              cResult[25] = items;
                              tmp20 = items;
                            }
                            const tmp18 = containerWidth(tmp2[13])(frame, containerWidth);
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
                            cResult[20] = tmp18;
                            tmp16 = tmp18;
                          }
                        }
                      }
                      return null;
                    }
                    const fn = function _() {
                      let num = 0;
                      if (settled) {
                        const obj = timing;
                        num = obj.withTiming(1, obj);
                      }
                      const result = tmp11.set(num);
                    };
                    const items1 = [settled, tmp11];
                    cResult[14] = tmp11;
                    cResult[15] = settled;
                    cResult[16] = fn;
                    cResult[17] = items1;
                    tmp13 = items1;
                    tmp12 = fn;
                    const tmpResult2 = tmp(tmp2[5]);
                  }
                }
              }
            }
            if (cResult[10] === layers) {
              if (cResult[11] === frameOrder) {
                if (cResult[12] === profileThemeType) {
                  let tmp7 = cResult[13];
                }
                const layers1 = frame.layers;
                const found = layers1.filter(tmp7);
                class O {
                  constructor(arg0) {
                    obj = {
                      skuId: frame.skuId,
                      layer: frame,
                      overflowTop,
                      overflowBottom,
                      overflowHorizontal,
                      containerWidth,
                      containerHeight,
                      fade: !closure_6,
                    };
                    return jsx(f45485, obj, frame.id);
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
                cResult[7] = frameOrder;
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
            tmp7 = T;
            const tmpResult = tmp(tmp2[9]);
          }
        }
      }
      const obj5 = { frame, containerWidth, profileThemeType, filterLayer: layers };
      cResult[0] = containerWidth;
      cResult[1] = layers;
      cResult[2] = frame;
      cResult[3] = profileThemeType;
      cResult[4] = obj5;
      tmp6 = obj5;
    }
  : (frame) => {
      frame = frame.frame;
      const containerWidth = frame.containerWidth;
      ({ containerHeight: dependencyMap, profileThemeType } = frame);
      const frameOrder = frame.frameOrder;
      const filterLayer = frame.filterLayer;
      let sharedValue;
      c9 = undefined;
      c10 = undefined;
      c11 = undefined;
      const tmp = c10();
      closure_6 = frame(7895).useIsProfileFrameLayerPreloadEnabled("ProfileFrame");
      let obj = frame(7895);
      const settled = frame(7894).usePreloadLayerImages({
        frame,
        containerWidth,
        profileThemeType,
        filterLayer,
      }).settled;
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
      const obj2 = frame(7894);
      let num = 0;
      if (settled) {
        num = 1;
      }
      sharedValue = frame(4612).useSharedValue(num);
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
            ({
              overflowTop: c9,
              overflowBottom: c10,
              overflowHorizontal: c11,
            } = containerWidth(7896)(frame, containerWidth));
            const obj5 = { style: null, children: null };
            const items2 = [tmp.container];
            const obj6 = { opacity: sharedValue };
            items2[1] = obj6;
            obj5.style = items2;
            obj5.children = memo.map((layer) => (
              <closure_11
                key={layer.id}
                skuId={frame.skuId}
                layer={layer}
                overflowTop={overflowTop}
                overflowBottom={overflowBottom}
                overflowHorizontal={overflowHorizontal}
                containerWidth={containerWidth}
                containerHeight={containerHeight}
                fade={!closure_6}
              />
            ));
            return sharedValue(containerWidth(4612).View, obj5);
          }
        }
      }
      return null;
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
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
    };
