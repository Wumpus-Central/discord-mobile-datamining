// discord_app/modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideFrame.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import Constants from "../../../../user_profile/native/Constants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import ProfileFrameConstants from "../ProfileFrameConstants.tsx";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault, obj1, override;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: hasOwnProperty, PROFILE_FRAME_Z_INDEX: metroRequire } =
  ProfileFrameConstants);
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
let jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, layer: obj3 };
obj2 = { pointerEvents: "none" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { alignItems: "center", overflow: "hidden" };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let containerHeight;
      let containerWidth;
      let layer;
      let overflowBottom;
      let overflowHorizontal;
      let overflowTop;
      let ratio;
      let uri;
      let obj = uri(576);
      const cResult = obj.c(41);
      ({ layer, uri } = arg0);
      ({ overflowHorizontal, containerWidth, containerHeight } = arg0);
      ({ ratio, overflowTop, overflowBottom } = arg0);
      const tmp3 = closure_9();
      const sum = containerWidth + 2 * overflowHorizontal;
      importDefault = sum;
      const result = ratio * sum;
      dependencyMap = result;
      if (cResult[0] === -overflowHorizontal) {
        if (cResult[1] === -overflowHorizontal) {
          let tmp9;
          let tmp11;
          if (cResult[2] === closure_6[layer.order]) {
            tmp9 = cResult[3];
          }
          const type = layer.type;
          if ("staple" === type) {
            let tmp19;
            if ("top" === layer.anchor) {
              tmp19 = -overflowTop;
            }
            let tmp20;
            if ("bottom" === layer.anchor) {
              tmp20 = -overflowBottom;
            }
            if (cResult[4] === tmp9) {
              if (cResult[5] === tmp19) {
                let tmp21;
                if (cResult[6] === tmp20) {
                  tmp21 = cResult[7];
                }
                tmp11 = tmp21;
              }
            }
            const obj2 = { top: tmp19, bottom: tmp20 };
            const merged = Object.assign(tmp9);
            cResult[4] = tmp9;
            cResult[5] = tmp19;
            cResult[6] = tmp20;
            cResult[7] = obj2;
            tmp21 = obj2;
          } else if ("rail" === type) {
            let str2 = "center";
            if ("center" !== layer.anchor) {
              let str3 = "flex-end";
              if ("top" === layer.anchor) {
                str3 = "flex-start";
              }
              str2 = str3;
            }
            if (cResult[8] === tmp9) {
              let tmp15;
              if (cResult[9] === str2) {
                tmp15 = cResult[10];
              }
              tmp11 = tmp15;
            }
            const obj3 = { justifyContent: str2 };
            const merged1 = Object.assign(tmp9);
            cResult[8] = tmp9;
            cResult[9] = str2;
            cResult[10] = obj3;
            tmp15 = obj3;
          } else {
            if (cResult[11] === tmp9) {
              if (cResult[12] === -overflowHorizontal) {
                tmp11 = cResult[13];
              }
            }
            const obj4 = { left: -overflowHorizontal };
            const merged2 = Object.assign(tmp9);
            cResult[11] = tmp9;
            cResult[12] = -overflowHorizontal;
            cResult[13] = obj4;
            tmp11 = obj4;
          }
          const tmp25 =
            true === layer.responsive &&
            "rail" === layer.type &&
            null != containerHeight &&
            containerWidth / containerHeight >= closure_5;
          if (0 !== result) {
            if (null != uri) {
              if (!tmp25) {
                if ("border" === layer.type) {
                  if (null != containerHeight) {
                    if (0 !== containerHeight) {
                      const _Math = Math;
                      const rounded = Math.ceil(containerHeight / result);
                      if (cResult[14] === tmp11) {
                        let tmp36;
                        let tmp37;
                        if (cResult[15] === tmp3.layer) {
                          tmp36 = cResult[16];
                        }
                        if (cResult[17] === result) {
                          if (cResult[18] === rounded) {
                            if (cResult[19] === uri) {
                              if (cResult[20] === sum) {
                                tmp37 = cResult[21];
                              }
                              if (cResult[26] === tmp36) {
                                let tmp40;
                                if (cResult[27] === tmp37) {
                                  tmp40 = cResult[28];
                                }
                                return tmp40;
                              }
                              class X {
                                constructor(arg0, arg1) {
                                  size = { source: null, resizeMode: "cover", width: closure_1, height: closure_2 };
                                  obj1 = { uri };
                                  size.source = obj1;
                                  return jsx(closure_1(closure_2[8]), size, arg1);
                                }
                              }
                              const tmp42 = <closure_4 style={tmp36}>{tmp37}</closure_4>;
                              cResult[26] = tmp36;
                              cResult[27] = tmp37;
                              cResult[28] = tmp42;
                              tmp40 = tmp42;
                            }
                          }
                        }
                        if (cResult[22] === result) {
                          if (cResult[23] === uri) {
                            let tmp38;
                            if (cResult[24] === sum) {
                              tmp38 = cResult[25];
                            }
                            const _Array = Array;
                            const obj6 = { length: null };
                            class X {
                              constructor(arg0, arg1) {
                                size = { source: null, resizeMode: "cover", width: closure_1, height: closure_2 };
                                obj1 = { uri };
                                size.source = obj1;
                                return jsx(closure_1(closure_2[8]), size, arg1);
                              }
                            }
                            const arr = Array.from(obj6, tmp38);
                            cResult[17] = result;
                            cResult[18] = rounded;
                            cResult[19] = uri;
                            cResult[20] = sum;
                            cResult[21] = arr;
                            tmp37 = arr;
                          }
                        }
                        class X {
                          constructor(arg0, arg1) {
                            size = { source: null, resizeMode: "cover", width: closure_1, height: closure_2 };
                            obj1 = { uri };
                            size.source = obj1;
                            return jsx(closure_1(closure_2[8]), size, arg1);
                          }
                        }
                        cResult[22] = result;
                        cResult[23] = uri;
                        cResult[24] = sum;
                        cResult[25] = X;
                        tmp38 = X;
                      }
                      const items = [tmp3.layer, tmp11];
                      cResult[14] = tmp11;
                      cResult[15] = tmp3.layer;
                      cResult[16] = items;
                      tmp36 = items;
                    }
                  }
                  return null;
                } else {
                  if (cResult[29] === tmp11) {
                    let tmp28;
                    let tmp29;
                    if (cResult[30] === tmp3.layer) {
                      tmp28 = cResult[31];
                    }
                    if (cResult[32] !== uri) {
                      const obj7 = { uri };
                      class X {
                        constructor(arg0, arg1) {
                          size = { source: null, resizeMode: "cover", width: closure_1, height: closure_2 };
                          obj1 = { uri };
                          size.source = obj1;
                          return jsx(closure_1(closure_2[8]), size, arg1);
                        }
                      }
                      cResult[33] = obj7;
                      tmp29 = obj7;
                    } else {
                      tmp29 = cResult[33];
                    }
                    if (cResult[34] === result) {
                      if (cResult[35] === tmp29) {
                        let tmp30;
                        if (cResult[36] === sum) {
                          tmp30 = cResult[37];
                        }
                        if (cResult[38] === tmp28) {
                          let tmp33;
                          if (cResult[39] === tmp30) {
                            tmp33 = cResult[40];
                          }
                          return tmp33;
                        }
                        class X {
                          constructor(arg0, arg1) {
                            size = { source: null, resizeMode: "cover", width: closure_1, height: closure_2 };
                            obj1 = { uri };
                            size.source = obj1;
                            return jsx(closure_1(closure_2[8]), size, arg1);
                          }
                        }
                        const tmp35 = <closure_4 style={tmp28}>{tmp30}</closure_4>;
                        cResult[38] = tmp28;
                        cResult[39] = tmp30;
                        cResult[40] = tmp35;
                        tmp33 = tmp35;
                      }
                    }
                    class X {
                      constructor(arg0, arg1) {
                        size = { source: null, resizeMode: "cover", width: closure_1, height: closure_2 };
                        obj1 = { uri };
                        size.source = obj1;
                        return jsx(closure_1(closure_2[8]), size, arg1);
                      }
                    }
                    const tmp32 = jsx(FastImageDefault, {
                      source: tmp29,
                      resizeMode: "cover",
                      width: sum,
                      height: result,
                    });
                    cResult[34] = result;
                    cResult[35] = tmp29;
                    cResult[36] = sum;
                    cResult[37] = tmp32;
                    tmp30 = tmp32;
                  }
                  const items1 = [tmp3.layer];
                  class X {
                    constructor(arg0, arg1) {
                      size = { source: null, resizeMode: "cover", width: closure_1, height: closure_2 };
                      obj1 = { uri };
                      size.source = obj1;
                      return jsx(closure_1(closure_2[8]), size, arg1);
                    }
                  }
                  cResult[29] = tmp11;
                  cResult[30] = tmp3.layer;
                  cResult[31] = items1;
                  tmp28 = items1;
                }
              }
            }
          }
          return null;
        }
      }
      const rect = { left: tmp6, right: tmp7, zIndex: tmp8 };
      cResult[0] = -overflowHorizontal;
      cResult[1] = -overflowHorizontal;
      cResult[2] = closure_6[layer.order];
      cResult[3] = rect;
      tmp9 = rect;
    }
  : (layer) => {
      let containerHeight;
      let containerWidth;
      let height;
      let width;
      layer = layer.layer;
      const uri = layer.uri;
      const overflowTop = layer.overflowTop;
      const overflowBottom = layer.overflowBottom;
      const overflowHorizontal = layer.overflowHorizontal;
      ({ containerWidth, containerHeight } = layer);
      const ratio = layer.ratio;
      const tmp = closure_9();
      const sum = containerWidth + 2 * overflowHorizontal;
      let c5 = sum;
      const result = ratio * sum;
      let c6 = result;
      const items = [, , , , ,];
      ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
      items[3] = overflowTop;
      items[4] = overflowBottom;
      items[5] = overflowHorizontal;
      const memo = overflowBottom.useMemo(() => {
        let str2;
        let tmp12;
        let tmp14;
        const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: metroRequire[layer.order] };
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
      let tmp5 = true === layer.responsive;
      if (tmp5) {
        tmp5 = "rail" === layer.type;
      }
      if (tmp5) {
        tmp5 = null != containerHeight;
      }
      if (tmp5) {
        tmp5 = containerWidth / containerHeight >= c5;
      }
      if (0 !== result) {
        if (null != uri) {
          if (!tmp5) {
            let str2 = "border";
            if ("border" === layer.type) {
              if (null != containerHeight) {
                if (0 !== containerHeight) {
                  let tmp12 = globalThis;
                  const _Math = Math;
                  let tmp14 = overflowHorizontal;
                  const items1 = [tmp.layer, memo];
                  const _Array = Array;
                  let obj3 = { length: Math.ceil(containerHeight / result) };
                  return (
                    <overflowHorizontal style={items1}>
                      {Array.from(obj3, (arg0, key) => {
                        const obj = { uri };
                        return jsx(FastImageDefault, { source: obj, resizeMode: "cover", width, height }, key);
                      })}
                    </overflowHorizontal>
                  );
                }
              }
              return null;
            } else {
              const items2 = [tmp.layer, memo];
              size = { source: obj4, resizeMode: "cover", width: sum, height: result };
              return <overflowHorizontal style={items2}>{null}</overflowHorizontal>;
            }
          }
        }
      }
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (override) => {
      let arr;
      let containerHeight;
      const obj = override(containerHeight[7]);
      const cResult = obj.c(27);
      override = override.override;
      const containerWidth = override.containerWidth;
      containerHeight = override.containerHeight;
      const profileThemeType = override.profileThemeType;
      const frameOrder = override.frameOrder;
      const filterLayer = override.filterLayer;
      let tmp2 = closure_9();
      if (cResult[0] === filterLayer) {
        if (cResult[1] === frameOrder) {
          if (cResult[2] === override.layers) {
            if (cResult[3] === profileThemeType) {
              arr = cResult[4];
            }
            if (0 !== arr.length) {
              if (0 !== containerWidth) {
                let tmp5;
                const result = containerWidth / override.innerWidth;
                const result1 = override.overflowTop * result;
                const result2 = override.overflowBottom * result;
                const result3 = override.overflowHorizontal * result;
                if (cResult[9] === containerHeight) {
                  if (cResult[10] === containerWidth) {
                    if (cResult[11] === result2) {
                      if (cResult[12] === result3) {
                        if (cResult[13] === result1) {
                          if (cResult[14] === override.layerAssetById) {
                            if (cResult[15] === arr) {
                              tmp5 = cResult[16];
                            }
                            if (cResult[24] === tmp2.container) {
                              let tmp8;
                              if (cResult[25] === tmp5) {
                                tmp8 = cResult[26];
                              }
                              return tmp8;
                            }
                            let tmp9 = result3;
                            const obj2 = { style: tmp17, children: tmp5 };
                            const tmp11 = result3(frameOrder, obj2);
                            cResult[24] = tmp2.container;
                            cResult[25] = tmp5;
                            cResult[26] = tmp11;
                            tmp8 = tmp11;
                          }
                        }
                      }
                    }
                  }
                }
                if (cResult[17] === containerHeight) {
                  if (cResult[18] === containerWidth) {
                    if (cResult[19] === result2) {
                      if (cResult[20] === result3) {
                        if (cResult[21] === result1) {
                          let tmp6;
                          if (cResult[22] === override.layerAssetById) {
                            tmp6 = cResult[23];
                          }
                          const mapped = arr.map(tmp6);
                          cResult[9] = containerHeight;
                          cResult[10] = containerWidth;
                          cResult[11] = result2;
                          cResult[12] = result3;
                          cResult[13] = result1;
                          cResult[14] = override.layerAssetById;
                          cResult[15] = arr;
                          cResult[16] = mapped;
                          tmp5 = mapped;
                        }
                      }
                    }
                  }
                }
                const fn2 = function _(layer) {
                  let uri;
                  if (override.layerAssetById[layer.id] != null) {
                    uri = tmp.uri;
                  }
                  if (uri == null) {
                    uri = null;
                  }
                  let num;
                  if (override.layerAssetById[layer.id] != null) {
                    num = tmp.ratio;
                  }
                  if (num == null) {
                    num = 0;
                  }
                  return (
                    <closure_10
                      key={layer.id}
                      layer={layer}
                      uri={uri}
                      ratio={num}
                      overflowTop={result1}
                      overflowBottom={result2}
                      overflowHorizontal={result3}
                      containerWidth={containerWidth}
                      containerHeight={containerHeight}
                    />
                  );
                };
                cResult[17] = containerHeight;
                cResult[18] = containerWidth;
                cResult[19] = result2;
                cResult[20] = result3;
                cResult[21] = result1;
                cResult[22] = override.layerAssetById;
                cResult[23] = fn2;
                tmp6 = fn2;
              }
            }
            return null;
          }
        }
      }
      if (cResult[5] === filterLayer) {
        if (cResult[6] === frameOrder) {
          let tmp3;
          if (cResult[7] === profileThemeType) {
            tmp3 = cResult[8];
          }
          const layers = override.layers;
          const found = layers.filter(tmp3);
          let num = 0;
          cResult[0] = filterLayer;
          cResult[1] = frameOrder;
          cResult[2] = override.layers;
          cResult[3] = profileThemeType;
          cResult[4] = found;
          arr = found;
        }
      }
      const fn = function i(order) {
        let tmp2 = null == frameOrder || tmp === order.order;
        if (tmp2) {
          let tmp5 = !(null != filterLayer && !tmp3(order));
          const tmp4 = null != filterLayer && !tmp3(order);
          if (tmp5) {
            let tmp8 = profileThemeType === UserProfileThemeTypes.PREVIEW;
            if (!tmp8) {
              tmp8 = "top" === order.anchor && "staple" === order.type;
              const tmp9 = "top" === order.anchor && "staple" === order.type;
            }
            tmp5 = tmp8;
          }
          tmp2 = tmp5;
        }
        return tmp2;
      };
      cResult[5] = filterLayer;
      cResult[6] = frameOrder;
      cResult[7] = profileThemeType;
      cResult[8] = fn;
      tmp3 = fn;
    }
  : (override) => {
      let containerHeight;
      let overflowHorizontal;
      let profileThemeType;
      override = override.override;
      const containerWidth = override.containerWidth;
      ({ containerHeight: dependencyMap, profileThemeType } = override);
      const frameOrder = override.frameOrder;
      const filterLayer = override.filterLayer;
      let overflowTop;
      let overflowBottom;
      jsx = undefined;
      const items = [override.layers, frameOrder, profileThemeType, filterLayer];
      const tmp = closure_9();
      const memo = profileThemeType.useMemo(() => {
        const layers = override.layers;
        return layers.filter((order) => {
          let tmp2 = null == frameOrder || tmp === order.order;
          if (tmp2) {
            let tmp5 = !(null != filterLayer && !tmp3(order));
            const tmp4 = null != filterLayer && !tmp3(order);
            if (tmp5) {
              let tmp8 = profileThemeType === constants.PREVIEW;
              if (!tmp8) {
                tmp8 = "top" === order.anchor && "staple" === order.type;
                const tmp9 = "top" === order.anchor && "staple" === order.type;
              }
              tmp5 = tmp8;
            }
            tmp2 = tmp5;
          }
          return tmp2;
        });
      }, items);
      if (0 !== memo.length) {
        if (0 !== containerWidth) {
          const result = containerWidth / override.innerWidth;
          overflowTop = override.overflowTop * result;
          overflowBottom = override.overflowBottom * result;
          jsx = override.overflowHorizontal * result;
          const tmp3 = jsx;
          let tmp4 = frameOrder;
          return (
            <frameOrder style={tmp.container}>
              {memo.map((layer) => {
                let uri;
                if (override.layerAssetById[layer.id] != null) {
                  uri = tmp.uri;
                }
                if (uri == null) {
                  uri = null;
                }
                let num;
                if (override.layerAssetById[layer.id] != null) {
                  num = tmp.ratio;
                }
                if (num == null) {
                  num = 0;
                }
                return (
                  <closure_10
                    key={layer.id}
                    layer={layer}
                    uri={uri}
                    ratio={num}
                    overflowTop={overflowTop}
                    overflowBottom={overflowBottom}
                    overflowHorizontal={overflowHorizontal}
                    containerWidth={containerWidth}
                    containerHeight={dependencyMap}
                  />
                );
              })}
            </frameOrder>
          );
        }
      }
      return null;
    };
let size = size_mod;
let result = size.fileFinishedImporting(
  "modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideFrame.tsx",
);

export default tmp7;
