// === Module 8327: FramePreviewOverrideFrame ===

// Module 8327 (FramePreviewOverrideFrame)
import FastImageDefault from "FastImage" /* 6164 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ProfileFrameConstants = fn(8323);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: hasOwnProperty, PROFILE_FRAME_Z_INDEX: metroRequire } = ProfileFrameConstants);
const UserProfileThemeTypes = fn(6891).UserProfileThemeTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { container: null, layer: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.pointerEvents = "none";
obj2.container = obj3;
let obj4 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.alignItems = "center";
obj4.overflow = "hidden";
obj2.layer = obj4;
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function OverrideProfileFrameLayer(arg0) {
  const cResult = uri(576).c(41);
  ({ layer, uri } = arg0);
  ({ overflowHorizontal, containerWidth, containerHeight } = arg0);
  ({ ratio, overflowTop, overflowBottom } = arg0);
  const tmp3 = closure_9();
  const sum = containerWidth + 2 * overflowHorizontal;
  importDefault = sum;
  const result = ratio * sum;
  dependencyMap = result;
  if (cResult[0] === -overflowHorizontal) {
    if (cResult[1] === tmp7) {
      if (cResult[2] === tmp8) {
        let tmp9 = cResult[3];
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
          }
        }
        const obj2 = {};
        const merged = Object.assign(tmp9);
        obj2.top = tmp19;
        obj2.bottom = tmp20;
        cResult[4] = tmp9;
        cResult[5] = tmp19;
        cResult[6] = tmp20;
        cResult[7] = obj2;
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
          if (cResult[8] === tmp9) {
            if (cResult[9] === str2) {
              let tmp15 = cResult[10];
            }
            let tmp11 = tmp15;
          }
          const obj3 = {};
          const merged1 = Object.assign(tmp9);
          obj3.justifyContent = str2;
          cResult[8] = tmp9;
          cResult[9] = str2;
          cResult[10] = obj3;
          tmp15 = obj3;
        } else {
          if (cResult[11] === tmp9) {
            if (cResult[12] === tmp10) {
              tmp11 = cResult[13];
            }
          }
          const obj4 = {};
          const merged2 = Object.assign(tmp9);
          obj4.left = -overflowHorizontal;
          cResult[11] = tmp9;
          cResult[12] = -overflowHorizontal;
          cResult[13] = obj4;
          tmp11 = obj4;
        }
        let tmp26 = true === layer.responsive;
        if (tmp26) {
          tmp26 = "rail" === layer.type;
        }
        if (tmp26) {
          tmp26 = null != containerHeight;
        }
        if (tmp26) {
          tmp26 = containerWidth / containerHeight >= closure_5;
        }
        if (0 !== result) {
          if (null != uri) {
            if (!tmp26) {
              if ("border" === layer.type) {
                if (null != containerHeight) {
                  if (0 !== containerHeight) {
                    let fromResult = globalThis;
                    const _Math = Math;
                    const rounded = Math.ceil(containerHeight / result);
                    if (cResult[14] === tmp11) {
                      if (cResult[15] === tmp3.layer) {
                        let tmp37 = cResult[16];
                      }
                      if (cResult[17] === result) {
                        if (cResult[18] === rounded) {
                          if (cResult[19] === uri) {
                            if (cResult[20] === sum) {
                              if (cResult[26] === tmp37) {
                                if (cResult[27] === tmp38) {
                                  let tmp42 = cResult[28];
                                }
                                return tmp42;
                              }
                              class X {
                                constructor(arg0, arg1) {
                                  size = { source: null, resizeMode: "cover", width: closure_1, height: closure_2 };
                                  obj1 = { uri };
                                  size.source = obj1;
                                  return jsx(closure_1(closure_2[8]), size, arg1);
                                }
                              }
                              const obj5 = { style: tmp37, children: cResult[21] };
                              const tmp44 = <closure_4 style={tmp37}>{cResult[21]}</closure_4>;
                              cResult[26] = tmp37;
                              cResult[27] = cResult[21];
                              cResult[28] = tmp44;
                              tmp42 = tmp44;
                            }
                          }
                        }
                      }
                      if (cResult[22] === result) {
                        if (cResult[23] === uri) {
                          if (cResult[24] === sum) {
                            let tmp39 = cResult[25];
                          }
                          const _Array = fromResult.Array;
                          class X {
                            constructor(arg0, arg1) {
                              size = { source: null, resizeMode: "cover", width: closure_1, height: closure_2 };
                              obj1 = { uri };
                              size.source = obj1;
                              return jsx(closure_1(closure_2[8]), size, arg1);
                            }
                          }
                          fromResult = _Array.from({ length: null }, tmp39);
                          cResult[17] = result;
                          cResult[18] = rounded;
                          cResult[19] = uri;
                          cResult[20] = sum;
                          cResult[21] = fromResult;
                          const obj6 = { length: null };
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
                      tmp39 = X;
                    }
                    const items = [tmp3.layer, tmp11];
                    cResult[14] = tmp11;
                    cResult[15] = tmp3.layer;
                    cResult[16] = items;
                    tmp37 = items;
                  }
                }
                return null;
              } else {
                if (cResult[29] === tmp11) {
                  if (cResult[30] === tmp3.layer) {
                    let tmp29 = cResult[31];
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
                    let tmp30 = obj7;
                  } else {
                    tmp30 = cResult[33];
                  }
                  if (cResult[34] === result) {
                    if (cResult[35] === tmp30) {
                      if (cResult[36] === sum) {
                        let tmp31 = cResult[37];
                      }
                      if (cResult[38] === tmp29) {
                        if (cResult[39] === tmp31) {
                          let tmp34 = cResult[40];
                        }
                        return tmp34;
                      }
                      class X {
                        constructor(arg0, arg1) {
                          size = { source: null, resizeMode: "cover", width: closure_1, height: closure_2 };
                          obj1 = { uri };
                          size.source = obj1;
                          return jsx(closure_1(closure_2[8]), size, arg1);
                        }
                      }
                      const obj8 = { style: tmp29, children: tmp31 };
                      const tmp36 = <closure_4 style={tmp29}>{tmp31}</closure_4>;
                      cResult[38] = tmp29;
                      cResult[39] = tmp31;
                      cResult[40] = tmp36;
                      tmp34 = tmp36;
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
                  let size = { source: tmp30, resizeMode: "cover", width: sum, height: result };
                  const tmp33 = jsx(FastImageDefault, { source: tmp30, resizeMode: "cover", width: sum, height: result });
                  cResult[34] = result;
                  cResult[35] = tmp30;
                  cResult[36] = sum;
                  cResult[37] = tmp33;
                  tmp31 = tmp33;
                }
                const items1 = [tmp3.layer, ];
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
                tmp29 = items1;
              }
            }
          }
        }
        return null;
      }
    }
  }
  const rect = { left: tmp6, right: tmp7, zIndex: tmp8 };
  cResult[0] = -overflowHorizontal;
  cResult[1] = -overflowHorizontal;
  cResult[2] = overflowTop[layer.order];
  cResult[3] = rect;
  tmp9 = rect;
  const obj = uri(576);
}) : (function OverrideProfileFrameLayer(layer) {
  layer = layer.layer;
  const uri = layer.uri;
  overflowTop = layer.overflowTop;
  overflowBottom = layer.overflowBottom;
  overflowHorizontal = layer.overflowHorizontal;
  ({ containerWidth, containerHeight } = layer);
  const tmp = closure_9();
  const sum = containerWidth + 2 * overflowHorizontal;
  c5 = sum;
  const result = layer.ratio * sum;
  c6 = result;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowBottom.useMemo(() => {
    const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: overflowTop[layer.order] };
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
        if ("border" === layer.type) {
          if (null != containerHeight) {
            if (0 !== containerHeight) {
              const _Math = Math;
              let obj2 = { style: null, children: null };
              const items1 = [tmp.layer, memo];
              obj2.style = items1;
              const _Array = Array;
              let obj3 = { length: Math.ceil(containerHeight / result) };
              obj2.children = Array.from(obj3, (arg0, key) => {
                const size = { source: { uri }, resizeMode: "cover", width, height };
                return jsx(FastImageDefault, { source: { uri }, resizeMode: "cover", width, height }, key);
              });
              return <overflowHorizontal style={null}>{null}</overflowHorizontal>;
            }
          }
          return null;
        } else {
          let obj = { style: null, children: null };
          const items2 = [tmp.layer, memo];
          obj.style = items2;
          let size = { source: null, resizeMode: "cover", width: null, height: null };
          const obj4 = { uri };
          size.source = obj4;
          size.width = sum;
          size.height = result;
          obj.children = jsx(uri(overflowTop[8]), { source: null, resizeMode: "cover", width: null, height: null });
          return <overflowHorizontal style={null}>{null}</overflowHorizontal>;
        }
      }
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideFrame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FramePreviewOverrideFrame(override) {
  const cResult = layerAssetById(containerHeight[7]).c(27);
  layerAssetById = override.override;
  const containerWidth = override.containerWidth;
  containerHeight = override.containerHeight;
  const profileThemeType = override.profileThemeType;
  const frameOrder = override.frameOrder;
  const filterLayer = override.filterLayer;
  let obj = layerAssetById(containerHeight[7]);
  if (cResult[0] === filterLayer) {
    if (cResult[1] === frameOrder) {
      if (cResult[2] === layerAssetById.layers) {
        if (cResult[3] === profileThemeType) {
          if (0 !== cResult[4].length) {
            if (0 !== containerWidth) {
              const result = containerWidth / layerAssetById.innerWidth;
              const result1 = layerAssetById.overflowTop * result;
              const result2 = layerAssetById.overflowBottom * result;
              const result3 = layerAssetById.overflowHorizontal * result;
              if (cResult[9] === containerHeight) {
                if (cResult[10] === containerWidth) {
                  if (cResult[11] === result2) {
                    if (cResult[12] === result3) {
                      if (cResult[13] === result1) {
                        if (cResult[14] === layerAssetById.layerAssetById) {
                          if (cResult[15] === arr) {
                            if (cResult[24] === tmp2.container) {
                              if (cResult[25] === tmp6) {
                                let tmp10 = cResult[26];
                              }
                              return tmp10;
                            }
                            const obj2 = { style: tmp19, children: cResult[16] };
                            const tmp13 = result3(frameOrder, obj2);
                            class O {
                              constructor(arg0) {
                                tmp = override.layerAssetById[override.id];
                                obj = { layer: override, uri: null, ratio: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null, containerWidth: null, containerHeight: null };
                                uri = undefined;
                                tmp2 = jsx;
                                tmp3 = OverrideProfileFrameLayer;
                                if (tmp != null) {
                                  uri = tmp.uri;
                                }
                                if (uri == null) {
                                  uri = null;
                                }
                                obj.uri = uri;
                                num = undefined;
                                if (tmp != null) {
                                  num = tmp.ratio;
                                }
                                if (num == null) {
                                  num = 0;
                                }
                                obj.ratio = num;
                                obj.overflowTop = closure_6;
                                obj.overflowBottom = closure_7;
                                obj.overflowHorizontal = closure_8;
                                obj.containerWidth = containerWidth;
                                obj.containerHeight = containerHeight;
                                return tmp2(tmp3, obj, override.id);
                              }
                            }
                            cResult[25] = cResult[16];
                            cResult[26] = tmp13;
                            tmp10 = tmp13;
                          }
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
                        if (cResult[22] === layerAssetById.layerAssetById) {
                          let tmp7 = cResult[23];
                        }
                        const mapped = arr.map(tmp7);
                        cResult[9] = containerHeight;
                        cResult[10] = containerWidth;
                        cResult[11] = result2;
                        class O {
                          constructor(arg0) {
                            tmp = override.layerAssetById[override.id];
                            obj = { layer: override, uri: null, ratio: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null, containerWidth: null, containerHeight: null };
                            uri = undefined;
                            tmp2 = jsx;
                            tmp3 = OverrideProfileFrameLayer;
                            if (tmp != null) {
                              uri = tmp.uri;
                            }
                            if (uri == null) {
                              uri = null;
                            }
                            obj.uri = uri;
                            num = undefined;
                            if (tmp != null) {
                              num = tmp.ratio;
                            }
                            if (num == null) {
                              num = 0;
                            }
                            obj.ratio = num;
                            obj.overflowTop = closure_6;
                            obj.overflowBottom = closure_7;
                            obj.overflowHorizontal = closure_8;
                            obj.containerWidth = containerWidth;
                            obj.containerHeight = containerHeight;
                            return tmp2(tmp3, obj, override.id);
                          }
                        }
                        cResult[13] = result1;
                        layerAssetById = layerAssetById.layerAssetById;
                        cResult[14] = layerAssetById;
                        cResult[15] = arr;
                        cResult[16] = mapped;
                      }
                    }
                  }
                }
              }
              class O {
                constructor(arg0) {
                  tmp = override.layerAssetById[override.id];
                  obj = { layer: override, uri: null, ratio: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null, containerWidth: null, containerHeight: null };
                  uri = undefined;
                  tmp2 = jsx;
                  tmp3 = OverrideProfileFrameLayer;
                  if (tmp != null) {
                    uri = tmp.uri;
                  }
                  if (uri == null) {
                    uri = null;
                  }
                  obj.uri = uri;
                  num = undefined;
                  if (tmp != null) {
                    num = tmp.ratio;
                  }
                  if (num == null) {
                    num = 0;
                  }
                  obj.ratio = num;
                  obj.overflowTop = closure_6;
                  obj.overflowBottom = closure_7;
                  obj.overflowHorizontal = closure_8;
                  obj.containerWidth = containerWidth;
                  obj.containerHeight = containerHeight;
                  return tmp2(tmp3, obj, override.id);
                }
              }
              cResult[17] = containerHeight;
              cResult[18] = containerWidth;
              cResult[19] = result2;
              cResult[20] = result3;
              cResult[21] = result1;
              cResult[22] = layerAssetById.layerAssetById;
              cResult[23] = O;
              tmp7 = O;
            }
          }
          return null;
        }
      }
    }
  }
  if (cResult[5] === filterLayer) {
    if (cResult[6] === frameOrder) {
      if (cResult[7] === profileThemeType) {
        let tmp3 = cResult[8];
      }
      const layers = layerAssetById.layers;
      const found = layers.filter(tmp3);
      cResult[0] = filterLayer;
      cResult[1] = layerAssetById.layers;
      class O {
        constructor(arg0) {
          tmp = override.layerAssetById[override.id];
          obj = { layer: override, uri: null, ratio: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null, containerWidth: null, containerHeight: null };
          uri = undefined;
          tmp2 = jsx;
          tmp3 = OverrideProfileFrameLayer;
          if (tmp != null) {
            uri = tmp.uri;
          }
          if (uri == null) {
            uri = null;
          }
          obj.uri = uri;
          num = undefined;
          if (tmp != null) {
            num = tmp.ratio;
          }
          if (num == null) {
            num = 0;
          }
          obj.ratio = num;
          obj.overflowTop = closure_6;
          obj.overflowBottom = closure_7;
          obj.overflowHorizontal = closure_8;
          obj.containerWidth = containerWidth;
          obj.containerHeight = containerHeight;
          return tmp2(tmp3, obj, override.id);
        }
      }
      cResult[3] = profileThemeType;
      cResult[4] = found;
    }
  }
  const fn = function i(order) {
    let tmp2 = null == frameOrder || tmp === order.order;
    if (tmp2) {
      let tmp4 = null != filterLayer;
      if (tmp4) {
        tmp4 = !tmp3(order);
      }
      let tmp5 = !tmp4;
      if (!tmp4) {
        let tmp8 = profileThemeType === UserProfileThemeTypes.PREVIEW;
        if (!tmp8) {
          let tmp9 = "top" === order.anchor;
          if (tmp9) {
            tmp9 = "staple" === order.type;
          }
          tmp8 = tmp9;
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
}) : (function FramePreviewOverrideFrame(override) {
  override = override.override;
  const containerWidth = override.containerWidth;
  ({ containerHeight: dependencyMap, profileThemeType } = override);
  const frameOrder = override.frameOrder;
  const filterLayer = override.filterLayer;
  overflowTop = undefined;
  overflowBottom = undefined;
  overflowHorizontal = undefined;
  const items = [override.layers, frameOrder, profileThemeType, filterLayer];
  const memo = profileThemeType.useMemo(() => {
    const layers = override.layers;
    return layers.filter((order) => {
      let tmp2 = null == frameOrder || tmp === order.order;
      if (tmp2) {
        let tmp4 = null != filterLayer;
        if (tmp4) {
          tmp4 = !tmp3(order);
        }
        let tmp5 = !tmp4;
        if (!tmp4) {
          let tmp8 = profileThemeType === constants.PREVIEW;
          if (!tmp8) {
            let tmp9 = "top" === order.anchor;
            if (tmp9) {
              tmp9 = "staple" === order.type;
            }
            tmp8 = tmp9;
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
      overflowHorizontal = override.overflowHorizontal * result;
      let obj = {
        style: tmp.container,
        children: memo.map((layer) => {
              const obj = { layer, uri: null, ratio: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null, containerWidth: null, containerHeight: null };
              let uri;
              if (override.layerAssetById[layer.id] != null) {
                uri = tmp.uri;
              }
              if (uri == null) {
                uri = null;
              }
              obj.uri = uri;
              let num;
              if (override.layerAssetById[layer.id] != null) {
                num = tmp.ratio;
              }
              if (num == null) {
                num = 0;
              }
              obj.ratio = num;
              obj.overflowTop = overflowTop;
              obj.overflowBottom = overflowBottom;
              obj.overflowHorizontal = overflowHorizontal;
              obj.containerWidth = containerWidth;
              obj.containerHeight = containerHeight;
              return <closure_10 key={layer.id} layer={layer} uri={null} ratio={null} overflowTop={null} overflowBottom={null} overflowHorizontal={null} containerWidth={null} containerHeight={null} />;
            })
      };
      return overflowHorizontal(frameOrder, obj);
    }
  }
  return null;
});