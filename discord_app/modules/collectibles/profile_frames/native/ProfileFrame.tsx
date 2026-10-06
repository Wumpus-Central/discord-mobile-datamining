// discord_app/modules/collectibles/profile_frames/native/ProfileFrame.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import FramePreviewOverrideStore from "tooling/FramePreviewOverrideStore.tsx";
import useProfileFrameLayerAsset from "useProfileFrameLayerAsset.tsx";
import FramePreviewOverrideFrameDefault from "tooling/FramePreviewOverrideFrame.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ProfileFrameConstants from "ProfileFrameConstants.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let frame, importDefault, obj1, set;

let Easing;
let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
({ View: closure_4, StyleSheet } = react_native);
let closure_5 = FramePreviewOverrideStore.useFramePreviewOverrideStore;
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: metroRequire, PROFILE_FRAME_Z_INDEX: metroImportDefault } =
  ProfileFrameConstants);
let jsx = Fragment.jsx;
let source = { duration: 150, easing: Easing.in(ReanimatedRexport.Easing.ease) };
Easing = ReanimatedRexport.Easing;
let createStyles = createStyles_mod;
let obj2 = { container: obj3, layer: obj4 };
obj3 = { pointerEvents: "none" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { alignItems: "center", overflow: "hidden" };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let assetUrl;
      let containerHeight;
      let containerWidth;
      let fade;
      let layer;
      let overflowBottom;
      let overflowHorizontal;
      let overflowTop;
      let skuId;
      const obj = fade(assetUrl[8]);
      const cResult = obj.c(48);
      ({ skuId, layer, overflowHorizontal, containerWidth, containerHeight, fade } = arg0);
      ({ overflowTop, overflowBottom } = arg0);
      const tmp3 = closure_10();
      const sum = containerWidth + 2 * overflowHorizontal;
      importDefault = sum;
      if (cResult[0] === layer) {
        if (cResult[1] === skuId) {
          let tmp5;
          if (cResult[2] === sum) {
            tmp5 = cResult[3];
          }
          const tmp7 = require("useProfileFrameLayerAsset")(tmp5);
          assetUrl = tmp7.assetUrl;
          const imageHeight = tmp7.imageHeight;
          const tmp6 = importDefault;
          if (cResult[4] === -overflowHorizontal) {
            if (cResult[5] === -overflowHorizontal) {
              let tmp12;
              let tmp14;
              if (cResult[6] === closure_7[layer.order]) {
                tmp12 = cResult[7];
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
                    let tmp24;
                    if (cResult[10] === tmp23) {
                      tmp24 = cResult[11];
                    }
                    tmp14 = tmp24;
                  }
                }
                const obj2 = { top: tmp22, bottom: tmp23 };
                const merged = Object.assign(tmp12);
                cResult[8] = tmp12;
                cResult[9] = tmp22;
                cResult[10] = tmp23;
                cResult[11] = obj2;
                tmp24 = obj2;
              } else if ("rail" === type) {
                let str2 = "center";
                if ("center" !== layer.anchor) {
                  let str3 = "flex-end";
                  if ("top" === layer.anchor) {
                    str3 = "flex-start";
                  }
                  str2 = str3;
                }
                if (cResult[12] === tmp12) {
                  let tmp18;
                  if (cResult[13] === str2) {
                    tmp18 = cResult[14];
                  }
                  tmp14 = tmp18;
                }
                const obj3 = { justifyContent: str2 };
                const merged1 = Object.assign(tmp12);
                cResult[12] = tmp12;
                cResult[13] = str2;
                cResult[14] = obj3;
                tmp18 = obj3;
              } else {
                if (cResult[15] === tmp12) {
                  if (cResult[16] === -overflowHorizontal) {
                    tmp14 = cResult[17];
                  }
                }
                const obj4 = { left: -overflowHorizontal };
                const merged2 = Object.assign(tmp12);
                cResult[15] = tmp12;
                cResult[16] = -overflowHorizontal;
                cResult[17] = obj4;
                tmp14 = obj4;
              }
              const tmp28 =
                true === layer.responsive &&
                "rail" === layer.type &&
                null != containerHeight &&
                containerWidth / containerHeight >= closure_6;
              if (0 !== imageHeight) {
                if (null != assetUrl) {
                  if (!tmp28) {
                    if ("border" === layer.type) {
                      if (null != containerHeight) {
                        if (0 !== containerHeight) {
                          const _Math = Math;
                          const rounded = Math.ceil(containerHeight / imageHeight);
                          if (cResult[18] === tmp14) {
                            let tmp38;
                            let tmp39;
                            if (cResult[19] === tmp3.layer) {
                              tmp38 = cResult[20];
                            }
                            if (cResult[21] === assetUrl) {
                              if (cResult[22] === fade) {
                                if (cResult[23] === imageHeight) {
                                  if (cResult[24] === rounded) {
                                    if (cResult[25] === sum) {
                                      tmp39 = cResult[26];
                                    }
                                    if (cResult[32] === tmp38) {
                                      let tmp42;
                                      if (cResult[33] === tmp39) {
                                        tmp42 = cResult[34];
                                      }
                                      return tmp42;
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
                                    const tmp44 = <closure_4 style={tmp38}>{tmp39}</closure_4>;
                                    cResult[32] = tmp38;
                                    cResult[33] = tmp39;
                                    cResult[34] = tmp44;
                                    tmp42 = tmp44;
                                  }
                                }
                              }
                            }
                            if (cResult[27] === assetUrl) {
                              if (cResult[28] === fade) {
                                if (cResult[29] === imageHeight) {
                                  let tmp40;
                                  if (cResult[30] === sum) {
                                    tmp40 = cResult[31];
                                  }
                                  const _Array = Array;
                                  const obj6 = { length: null };
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
                                  const arr = Array.from(obj6, tmp40);
                                  cResult[21] = assetUrl;
                                  cResult[22] = fade;
                                  cResult[23] = imageHeight;
                                  cResult[24] = rounded;
                                  cResult[25] = sum;
                                  cResult[26] = arr;
                                  tmp39 = arr;
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
                            tmp40 = G;
                          }
                          const items = [tmp3.layer, tmp14];
                          cResult[18] = tmp14;
                          cResult[19] = tmp3.layer;
                          cResult[20] = items;
                          tmp38 = items;
                        }
                      }
                      return null;
                    } else {
                      if (cResult[35] === tmp14) {
                        let tmp31;
                        let tmp32;
                        if (cResult[36] === tmp3.layer) {
                          tmp31 = cResult[37];
                        }
                        if (cResult[38] !== assetUrl) {
                          const obj7 = { uri: assetUrl };
                          class G {
                            constructor(arg0, arg1) {
                              size = { source: null, resizeMode: "cover", width: closure_1, height: imageHeight, fade };
                              obj1 = { uri: assetUrl };
                              size.source = obj1;
                              return jsx(closure_1(closure_2[10]), size, arg1);
                            }
                          }
                          cResult[39] = obj7;
                          tmp32 = obj7;
                        } else {
                          tmp32 = cResult[39];
                        }
                        if (cResult[40] === fade) {
                          if (cResult[41] === imageHeight) {
                            if (cResult[42] === tmp32) {
                              let tmp33;
                              if (cResult[43] === sum) {
                                tmp33 = cResult[44];
                              }
                              if (cResult[45] === tmp31) {
                                let tmp35;
                                if (cResult[46] === tmp33) {
                                  tmp35 = cResult[47];
                                }
                                return tmp35;
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
                              const tmp37 = <closure_4 style={tmp31}>{tmp33}</closure_4>;
                              cResult[45] = tmp31;
                              cResult[46] = tmp33;
                              cResult[47] = tmp37;
                              tmp35 = tmp37;
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
                        const tmp34 = jsx(tmp6(assetUrl[10]), {
                          source: tmp32,
                          resizeMode: "cover",
                          width: sum,
                          height: imageHeight,
                          fade,
                        });
                        cResult[40] = fade;
                        cResult[41] = imageHeight;
                        cResult[42] = tmp32;
                        cResult[43] = sum;
                        cResult[44] = tmp34;
                        tmp33 = tmp34;
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
                      tmp31 = items1;
                    }
                  }
                }
              }
              return null;
            }
          }
          const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: closure_7[layer.order] };
          cResult[4] = -overflowHorizontal;
          cResult[5] = -overflowHorizontal;
          cResult[6] = closure_7[layer.order];
          cResult[7] = rect;
          tmp12 = rect;
        }
      }
      const obj9 = { skuId, layer, width: sum };
      cResult[0] = layer;
      cResult[1] = skuId;
      cResult[2] = sum;
      cResult[3] = obj9;
      tmp5 = obj9;
    }
  : (layer) => {
      let containerHeight;
      let containerWidth;
      let fade;
      let width;
      layer = layer.layer;
      const overflowTop = layer.overflowTop;
      const overflowBottom = layer.overflowBottom;
      const overflowHorizontal = layer.overflowHorizontal;
      ({ containerWidth, containerHeight, fade } = layer);
      const skuId = layer.skuId;
      const tmp = closure_10();
      const sum = containerWidth + 2 * overflowHorizontal;
      let c5 = sum;
      const tmp5 = overflowTop(overflowBottom[9])({ skuId, layer, width: sum });
      const assetUrl = tmp5.assetUrl;
      const imageHeight = tmp5.imageHeight;
      const items = [, , , , ,];
      ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
      items[3] = overflowTop;
      items[4] = overflowBottom;
      items[5] = overflowHorizontal;
      const memo = overflowHorizontal.useMemo(() => {
        let str2;
        let tmp12;
        let tmp14;
        const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: metroImportDefault[layer.order] };
        const type = layer.type;
        if ("staple" === type) {
          const obj = { top: tmp12, bottom: tmp14 };
          const merged = Object.assign(rect);
          tmp12 = undefined;
          if ("top" === layer.anchor) {
            tmp12 = -overflowTop;
          }
          tmp14 = undefined;
          if ("bottom" === layer.anchor) {
            tmp14 = -overflowBottom;
          }
          return obj;
        } else if ("rail" === type) {
          const obj2 = { justifyContent: str2 };
          const merged1 = Object.assign(rect);
          str2 = "center";
          if ("center" !== layer.anchor) {
            let str3 = "flex-end";
            if ("top" === layer.anchor) {
              str3 = "flex-start";
            }
            str2 = str3;
          }
          return obj2;
        } else {
          const obj3 = { left: -tmp };
          const merged2 = Object.assign(rect);
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
            let str2 = "border";
            if ("border" === layer.type) {
              if (null != containerHeight) {
                if (0 !== containerHeight) {
                  let tmp12 = globalThis;
                  const _Math = Math;
                  const items1 = [tmp.layer, memo];
                  const _Array = Array;
                  let obj3 = { length: Math.ceil(containerHeight / imageHeight) };
                  return (
                    <fade style={items1}>
                      {Array.from(obj3, (arg0, key) => {
                        source = { uri: assetUrl };
                        return jsx(
                          FastImageDefault,
                          { source, resizeMode: "cover", width, height: imageHeight, fade },
                          key,
                        );
                      })}
                    </fade>
                  );
                }
              }
              return null;
            } else {
              const items2 = [tmp.layer, memo];
              size = { source: obj4, resizeMode: "cover", width: sum, height: imageHeight, fade };
              return <fade style={items2}>{null}</fade>;
            }
          }
        }
      }
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (frame) => {
      let containerHeight;
      let overflowBottom;
      const tmp = frame;
      let obj = frame(containerHeight[8]);
      const cResult = obj.c(46);
      frame = frame.frame;
      const containerWidth = frame.containerWidth;
      containerHeight = frame.containerHeight;
      const profileThemeType = frame.profileThemeType;
      const frameOrder = frame.frameOrder;
      const filterLayer = frame.filterLayer;
      const tmp4 = overflowBottom();
      const obj2 = frame(containerHeight[11]);
      const isProfileFrameLayerPreloadEnabled = obj2.useIsProfileFrameLayerPreloadEnabled("ProfileFrame");
      if (cResult[0] === containerWidth) {
        if (cResult[1] === filterLayer) {
          if (cResult[2] === frame) {
            let tmp6;
            let arr;
            if (cResult[3] === profileThemeType) {
              tmp6 = cResult[4];
            }
            const tmpResult = tmp(containerHeight[9]);
            const settled = tmpResult.usePreloadLayerImages(tmp6).settled;
            if (cResult[5] === filterLayer) {
              if (cResult[6] === frame.layers) {
                if (cResult[7] === frameOrder) {
                  if (cResult[8] === profileThemeType) {
                    arr = cResult[9];
                  }
                  const useSharedValue = tmp(containerHeight[5]).useSharedValue;
                  tmp(containerHeight[5]);
                  class T {
                    constructor(order) {
                      let result = null == frameOrder || tmp === order.order;
                      if (result) {
                        const obj = useProfileFrameLayerAsset;
                        result = obj.isProfileFrameLayerShown(order, profileThemeType, filterLayer);
                      }
                      return result;
                    }
                  }
                  jsx = tmp10;
                  if (cResult[14] === tmp10) {
                    let tmp11;
                    let tmp12;
                    if (cResult[15] === settled) {
                      tmp11 = cResult[16];
                      tmp12 = cResult[17];
                    }
                    const effect = profileThemeType.useEffect(tmp11, tmp12);
                    if (0 !== arr.length) {
                      if (0 !== containerWidth) {
                        if (settled) {
                          if (cResult[18] === containerWidth) {
                            let tmp15;
                            if (cResult[19] === frame) {
                              tmp15 = cResult[20];
                            }
                            const overflowTop = tmp15.overflowTop;
                            overflowBottom = tmp15.overflowBottom;
                            const overflowHorizontal = tmp15.overflowHorizontal;
                            class T {
                              constructor(order) {
                                let result = null == frameOrder || tmp === order.order;
                                if (result) {
                                  const obj = useProfileFrameLayerAsset;
                                  result = obj.isProfileFrameLayerShown(order, profileThemeType, filterLayer);
                                }
                                return result;
                              }
                            }
                            if (cResult[21] !== tmp10) {
                              const obj3 = { opacity: tmp10 };
                              cResult[21] = tmp10;
                              cResult[22] = obj3;
                              class T {
                                constructor(order) {
                                  let result = null == frameOrder || tmp === order.order;
                                  if (result) {
                                    const obj = useProfileFrameLayerAsset;
                                    result = obj.isProfileFrameLayerShown(order, profileThemeType, filterLayer);
                                  }
                                  return result;
                                }
                              }
                            }
                            if (cResult[23] === tmp4.container) {
                              let tmp19;
                              let tmp20;
                              if (cResult[24] === tmp18) {
                                tmp19 = cResult[25];
                              }
                              if (cResult[26] === containerHeight) {
                                if (cResult[27] === containerWidth) {
                                  if (cResult[28] === frame.skuId) {
                                    if (cResult[29] === isProfileFrameLayerPreloadEnabled) {
                                      if (cResult[30] === overflowBottom) {
                                        if (cResult[31] === overflowHorizontal) {
                                          if (cResult[32] === overflowTop) {
                                            if (cResult[33] === arr) {
                                              tmp20 = cResult[34];
                                            }
                                            if (cResult[43] === tmp19) {
                                              let tmp23;
                                              if (cResult[44] === tmp20) {
                                                tmp23 = cResult[45];
                                              }
                                              return tmp23;
                                            }
                                            class O {
                                              constructor(layer) {
                                                return (
                                                  <closure_11
                                                    key={layer.id}
                                                    skuId={frame.skuId}
                                                    layer={layer}
                                                    overflowTop={overflowTop}
                                                    overflowBottom={overflowBottom}
                                                    overflowHorizontal={overflowHorizontal}
                                                    containerWidth={containerWidth}
                                                    containerHeight={containerHeight}
                                                    fade={!isProfileFrameLayerPreloadEnabled}
                                                  />
                                                );
                                              }
                                            }
                                            class T {
                                              constructor(order) {
                                                let result = null == frameOrder || tmp === order.order;
                                                if (result) {
                                                  const obj = useProfileFrameLayerAsset;
                                                  result = obj.isProfileFrameLayerShown(
                                                    order,
                                                    profileThemeType,
                                                    filterLayer,
                                                  );
                                                }
                                                return result;
                                              }
                                            }
                                            const tmp25 = jsx(containerWidth(containerHeight[5]).View, {
                                              style: tmp19,
                                              children: null,
                                            });
                                            cResult[43] = tmp19;
                                            cResult[44] = tmp20;
                                            cResult[45] = tmp25;
                                            tmp23 = tmp25;
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
                                          let tmp21;
                                          if (cResult[41] === overflowTop) {
                                            tmp21 = cResult[42];
                                          }
                                          const mapped = arr.map(tmp21);
                                          class O {
                                            constructor(layer) {
                                              return (
                                                <closure_11
                                                  key={layer.id}
                                                  skuId={frame.skuId}
                                                  layer={layer}
                                                  overflowTop={overflowTop}
                                                  overflowBottom={overflowBottom}
                                                  overflowHorizontal={overflowHorizontal}
                                                  containerWidth={containerWidth}
                                                  containerHeight={containerHeight}
                                                  fade={!isProfileFrameLayerPreloadEnabled}
                                                />
                                              );
                                            }
                                          }
                                          cResult[27] = containerWidth;
                                          class T {
                                            constructor(order) {
                                              let result = null == frameOrder || tmp === order.order;
                                              if (result) {
                                                const obj = useProfileFrameLayerAsset;
                                                result = obj.isProfileFrameLayerShown(
                                                  order,
                                                  profileThemeType,
                                                  filterLayer,
                                                );
                                              }
                                              return result;
                                            }
                                          }
                                          cResult[28] = frame.skuId;
                                          cResult[29] = isProfileFrameLayerPreloadEnabled;
                                          cResult[30] = overflowBottom;
                                          cResult[31] = overflowHorizontal;
                                          cResult[32] = overflowTop;
                                          cResult[33] = arr;
                                          cResult[34] = mapped;
                                          tmp20 = mapped;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              class O {
                                constructor(layer) {
                                  return (
                                    <closure_11
                                      key={layer.id}
                                      skuId={frame.skuId}
                                      layer={layer}
                                      overflowTop={overflowTop}
                                      overflowBottom={overflowBottom}
                                      overflowHorizontal={overflowHorizontal}
                                      containerWidth={containerWidth}
                                      containerHeight={containerHeight}
                                      fade={!isProfileFrameLayerPreloadEnabled}
                                    />
                                  );
                                }
                              }
                              cResult[35] = containerHeight;
                              class T {
                                constructor(order) {
                                  let result = null == frameOrder || tmp === order.order;
                                  if (result) {
                                    const obj = useProfileFrameLayerAsset;
                                    result = obj.isProfileFrameLayerShown(order, profileThemeType, filterLayer);
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
                              tmp21 = O;
                            }
                            const items = [tmp4.container, tmp18];
                            cResult[23] = tmp4.container;
                            cResult[24] = tmp18;
                            cResult[25] = items;
                            tmp19 = items;
                          }
                          const tmp17 = containerWidth(containerHeight[13])(frame, containerWidth);
                          cResult[18] = containerWidth;
                          class T {
                            constructor(order) {
                              let result = null == frameOrder || tmp === order.order;
                              if (result) {
                                const obj = useProfileFrameLayerAsset;
                                result = obj.isProfileFrameLayerShown(order, profileThemeType, filterLayer);
                              }
                              return result;
                            }
                          }
                          cResult[20] = tmp17;
                          tmp15 = tmp17;
                        }
                      }
                    }
                    return null;
                  }
                  const fn = function _() {
                    jsx = jsx.set;
                    if (settled) {
                      const obj = timing;
                      obj.withTiming(1, obj);
                    }
                    const result = <num />;
                  };
                  const items1 = [settled, tmp10];
                  cResult[14] = tmp10;
                  cResult[15] = settled;
                  cResult[16] = fn;
                  cResult[17] = items1;
                  tmp12 = items1;
                  tmp11 = fn;
                }
              }
            }
            if (cResult[10] === filterLayer) {
              if (cResult[11] === frameOrder) {
                let tmp7;
                if (cResult[12] === profileThemeType) {
                  tmp7 = cResult[13];
                }
                const layers = frame.layers;
                const found = layers.filter(tmp7);
                class O {
                  constructor(layer) {
                    return (
                      <closure_11
                        key={layer.id}
                        skuId={frame.skuId}
                        layer={layer}
                        overflowTop={overflowTop}
                        overflowBottom={overflowBottom}
                        overflowHorizontal={overflowHorizontal}
                        containerWidth={containerWidth}
                        containerHeight={containerHeight}
                        fade={!isProfileFrameLayerPreloadEnabled}
                      />
                    );
                  }
                }
                cResult[5] = filterLayer;
                class T {
                  constructor(order) {
                    let result = null == frameOrder || tmp === order.order;
                    if (result) {
                      const obj = useProfileFrameLayerAsset;
                      result = obj.isProfileFrameLayerShown(order, profileThemeType, filterLayer);
                    }
                    return result;
                  }
                }
                cResult[7] = frameOrder;
                cResult[8] = profileThemeType;
                cResult[9] = found;
                arr = found;
              }
            }
            class T {
              constructor(order) {
                let result = null == frameOrder || tmp === order.order;
                if (result) {
                  const obj = useProfileFrameLayerAsset;
                  result = obj.isProfileFrameLayerShown(order, profileThemeType, filterLayer);
                }
                return result;
              }
            }
            cResult[10] = filterLayer;
            cResult[11] = frameOrder;
            cResult[12] = profileThemeType;
            cResult[13] = T;
            tmp7 = T;
          }
        }
      }
      const obj5 = { frame, containerWidth, profileThemeType, filterLayer };
      cResult[0] = containerWidth;
      cResult[1] = filterLayer;
      cResult[2] = frame;
      cResult[3] = profileThemeType;
      cResult[4] = obj5;
      tmp6 = obj5;
    }
  : (frame) => {
      let c10;
      let c11;
      let c9;
      let containerHeight;
      let items2;
      let overflowBottom;
      let overflowHorizontal;
      let overflowTop;
      let profileThemeType;
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
      let obj = frame(7906);
      let closure_6 = obj.useIsProfileFrameLayerPreloadEnabled("ProfileFrame");
      const obj2 = frame(7905);
      const settled = obj2.usePreloadLayerImages({ frame, containerWidth, profileThemeType, filterLayer }).settled;
      const items = [frame.layers, frameOrder, profileThemeType, filterLayer];
      const memo = profileThemeType.useMemo(() => {
        const layers = frame.layers;
        return layers.filter((order) => {
          let result = null == frameOrder || tmp === order.order;
          if (result) {
            const obj = frame(dependencyMap[9]);
            result = obj.isProfileFrameLayerShown(order, profileThemeType, filterLayer);
          }
          return result;
        });
      }, items);
      let num = 0;
      const useSharedValue = frame(4618).useSharedValue;
      frame(4618);
      if (settled) {
        num = 1;
      }
      sharedValue = useSharedValue(num);
      const items1 = [settled, sharedValue];
      const effect = profileThemeType.useEffect(() => {
        let num = 0;
        set = sharedValue.set;
        if (settled) {
          const obj = timing;
          num = obj.withTiming(1, obj);
        }
        const result = set(num);
      }, items1);
      if (0 !== memo.length) {
        if (0 !== containerWidth) {
          if (settled) {
            ({
              overflowTop: c9,
              overflowBottom: c10,
              overflowHorizontal: c11,
            } = containerWidth(7907)(frame, containerWidth));
            const obj4 = {
              style: items2,
              children: memo.map((layer) => (
                <closure_11
                  key={layer.id}
                  skuId={frame.skuId}
                  layer={layer}
                  overflowTop={overflowTop}
                  overflowBottom={overflowBottom}
                  overflowHorizontal={overflowHorizontal}
                  containerWidth={containerWidth}
                  containerHeight={dependencyMap}
                  fade={!closure_6}
                />
              )),
            };
            items2 = [tmp.container];
            const obj5 = { opacity: sharedValue };
            items2[1] = obj5;
            containerWidth(7907)(frame, containerWidth);
            const View = containerWidth(4618).View;
            return sharedValue(View, obj4);
          }
        }
      }
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(override) {
          return override.override;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmp4 = closure_5(first);
      if (null != tmp4) {
        if (cResult[1] === tmp4) {
          let tmp12;
          if (cResult[2] === arg0) {
            tmp12 = cResult[3];
          }
          tmp5 = tmp12;
        }
        FramePreviewOverrideFrameDefault;
        const merged = Object.assign(arg0);
        const tmp19 = <tmp15 override={tmp4} />;
        cResult[1] = tmp4;
        cResult[2] = arg0;
        cResult[3] = tmp19;
        tmp12 = tmp19;
      } else if (cResult[4] !== arg0) {
        const merged1 = Object.assign(arg0);
        const tmp11 = <closure_12 />;
        cResult[4] = arg0;
        cResult[5] = tmp11;
        tmp5 = tmp11;
      } else {
        tmp5 = cResult[5];
      }
      return tmp5;
    }
  : (arg0) => {
      let tmp7;
      const tmp = closure_5((override) => override.override);
      if (null != tmp) {
        FramePreviewOverrideFrameDefault;
        const merged = Object.assign(arg0);
        tmp7 = <tmp11 override={tmp} />;
      } else {
        const merged1 = Object.assign(arg0);
        tmp7 = <closure_12 />;
      }
      return tmp7;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default tmp7;
