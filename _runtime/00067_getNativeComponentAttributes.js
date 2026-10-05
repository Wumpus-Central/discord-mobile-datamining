// === Module 67: getNativeComponentAttributes ===

// Module 67 (getNativeComponentAttributes)
import _mod26 from "module_26" /* 26 */;
import processColor from "processColor" /* 50 */;
import processFilter from "processFilter" /* 54 */;
import processBoxShadowDefault from "processBoxShadow" /* 55 */;
import processBackgroundImage from "processBackgroundImage" /* 56 */;
import processBackgroundSize from "processBackgroundSize" /* 57 */;
import processBackgroundPosition from "processBackgroundPosition" /* 58 */;
import processBackgroundRepeat from "processBackgroundRepeat" /* 59 */;
import sizesDiffer from "sizesDiffer" /* 64 */;
import _mod68 from "module_68" /* 68 */;
import nullthrows from "nullthrows" /* 70 */;
import matricesDiffer from "matricesDiffer" /* 77 */;
import pointsDiffer from "pointsDiffer" /* 78 */;
import insetsDiffer from "insetsDiffer" /* 79 */;
import processColorArray from "processColorArray" /* 80 */;
import resolveAssetSource from "resolveAssetSource" /* 81 */;

let constants;

function merge(arg0, obj) {
  const tmp = obj;
  if (tmp) {
    if (arg0) {
      for (const key10005 in obj) {
        if (!obj.hasOwnProperty(key10005)) {
          continue;
        } else {
          let tmp3 = obj[key10005];
          let tmp4 = tmp3;
          if (arg0.hasOwnProperty(key10005)) {
            let tmp5 = arg0[key10005];
            let tmp6 = typeof tmp3 === "object" && typeof tmp5 === "object";
            tmp4 = tmp3;
            if (tmp6) {
              tmp4 = merge(tmp5, tmp3);
            }
          }
          arg0[key10005] = tmp4;
          continue;
        }
        continue;
      }
      return arg0;
    } else {
      return obj;
    }
  } else {
    return arg0;
  }
}

export default function getNativeComponentAttributes(uiViewClassName) {
  let NativeProps;
  let baseModuleName;
  let baseModuleName1;
  let bubblingEventTypes;
  let directEventTypes;
  const _default = _mod68.default;
  const viewManagerConfig = _default.getViewManagerConfig(uiViewClassName);
  if (null == viewManagerConfig) {
    return null;
  } else {
    ({ baseModuleName, bubblingEventTypes, directEventTypes, NativeProps } = viewManagerConfig);
    if (bubblingEventTypes == null) {
      bubblingEventTypes = {};
    }
    if (directEventTypes == null) {
      directEventTypes = {};
    }
    let tmp3 = directEventTypes;
    let tmp4 = NativeProps;
    let tmp5 = bubblingEventTypes;
    let tmp6 = NativeProps;
    let tmp7 = directEventTypes;
    let tmp8 = bubblingEventTypes;
    if (baseModuleName) {
      do {
        let _default2 = _mod68.default;
        let viewManagerConfig1 = _default2.getViewManagerConfig(baseModuleName);
        let tmp15 = tmp4;
        let tmp16 = tmp3;
        let tmp17 = tmp5;
        baseModuleName1 = null;
        if (viewManagerConfig1) {
          let obj = {};
          let merged = Object.assign(viewManagerConfig1.bubblingEventTypes);
          let merged1 = Object.assign(tmp14);
          let obj2 = {};
          let merged2 = Object.assign(viewManagerConfig1.directEventTypes);
          let merged3 = Object.assign(tmp13);
          let obj3 = {};
          let merged4 = Object.assign(viewManagerConfig1.NativeProps);
          let merged5 = Object.assign(tmp12);
          baseModuleName1 = viewManagerConfig1.baseModuleName;
          tmp15 = obj3;
          tmp16 = obj2;
          tmp17 = obj;
        }
        tmp4 = tmp15;
        tmp3 = tmp16;
        tmp5 = tmp17;
        baseModuleName = baseModuleName1;
        tmp6 = tmp15;
        tmp7 = tmp16;
        tmp8 = tmp17;
      } while (baseModuleName1);
    }
    const obj4 = { style: _mod26.default };
    for (const key10063 in tmp6) {
      let _default1;
      let tmp66;
      let tmp67;
      let obj5;
      let obj7;
      let obj6;
      let tmp63;
      let tmp60;
      let tmp55;
      let tmp117 = tmp6[key10063];
      if ("CATransform3D" === tmp117) {
        _default1 = matricesDiffer.default;
      } else {
        if ("CGPoint" !== tmp117) {
          if ("Point" !== tmp117) {
            if ("CGSize" === tmp117) {
              _default1 = sizesDiffer.default;
            } else if ("UIEdgeInsets" === tmp117) {
              _default1 = insetsDiffer.default;
            } else {
              _default1 = null;
            }
          }
        }
        _default1 = pointsDiffer.default;
      }
      let _default4 = null;
      switch (tmp117) {
        case "CGColor":
        {
          tmp66 = processColor;
          _default4 = tmp66.default;
          if (null == _default1) {
            tmp67 = null == _default4;
            if (!tmp67) {
              obj5 = { process: _default4 };
              tmp67 = obj5;
            }
            obj7 = tmp67;
          } else if (null == _default4) {
            obj6 = { diff: _default1 };
            obj7 = obj6;
          } else {
            obj7 = { diff: _default1, process: _default4 };
          }
          obj4[key10063] = obj7;
          continue;
          break;
        }
        case "UIColor":
        {
          tmp66 = processColor;
          _default4 = tmp66.default;
          if (null == _default1) {
            tmp67 = null == _default4;
            if (!tmp67) {
              obj5 = { process: _default4 };
              tmp67 = obj5;
            }
            obj7 = tmp67;
          } else if (null == _default4) {
            obj6 = { diff: _default1 };
            obj7 = obj6;
          } else {
            obj7 = { diff: _default1, process: _default4 };
          }
          obj4[key10063] = obj7;
          continue;
          break;
        }
        case "Color":
        {
          tmp66 = processColor;
          _default4 = tmp66.default;
          if (null == _default1) {
            tmp67 = null == _default4;
            if (!tmp67) {
              obj5 = { process: _default4 };
              tmp67 = obj5;
            }
            obj7 = tmp67;
          } else if (null == _default4) {
            obj6 = { diff: _default1 };
            obj7 = obj6;
          } else {
            obj7 = { diff: _default1, process: _default4 };
          }
          obj4[key10063] = obj7;
          continue;
          break;
        }
        case "CGColorArray":
        {
          tmp63 = processColorArray;
          _default4 = tmp63.default;
          break;
        }
        case "UIColorArray":
        {
          tmp63 = processColorArray;
          _default4 = tmp63.default;
          break;
        }
        case "ColorArray":
        {
          tmp63 = processColorArray;
          _default4 = tmp63.default;
          break;
        }
        case "CGImage":
        {
          tmp60 = resolveAssetSource;
          _default4 = tmp60.default;
          break;
        }
        case "UIImage":
        {
          tmp60 = resolveAssetSource;
          _default4 = tmp60.default;
          break;
        }
        case "RCTImageSource":
        {
          tmp60 = resolveAssetSource;
          _default4 = tmp60.default;
          break;
        }
        case "ImageSource":
        {
          tmp60 = resolveAssetSource;
          _default4 = tmp60.default;
          break;
        }
        case "BoxShadowArray":
        {
          _default4 = processBoxShadowDefault;
          break;
        }
        case "BoxShadow":
        {
          _default4 = processBoxShadowDefault;
          break;
        }
        case "FilterArray":
        {
          tmp55 = processFilter;
          _default4 = tmp55.default;
          break;
        }
        case "Filter":
        {
          tmp55 = processFilter;
          _default4 = tmp55.default;
          break;
        }
        case "BackgroundImage":
        {
          _default4 = processBackgroundImage.default;
          break;
        }
        case "BackgroundPosition":
        {
          _default4 = processBackgroundPosition.default;
          break;
        }
        case "BackgroundRepeat":
        {
          _default4 = processBackgroundRepeat.default;
          break;
        }
        case "BackgroundSize":
        {
          _default4 = processBackgroundSize.default;
          break;
        }
      }
    }
    const _Object = Object;
    const obj8 = { uiViewClassName, validAttributes: obj4, bubblingEventTypes: tmp8, directEventTypes: tmp7 };
    const merged6 = Object.assign(viewManagerConfig, obj8);
    const _default3 = _mod68.default;
    constants = _default3.getConstants();
    if (!constants.ViewManagerNames) {
      if (!constants.LazyViewManagersEnabled) {
        const bubblingEventTypes2 = viewManagerConfig.bubblingEventTypes;
        const genericBubblingEventTypes = constants.genericBubblingEventTypes;
        let tmp73 = bubblingEventTypes2;
        if (genericBubblingEventTypes) {
          tmp73 = genericBubblingEventTypes;
          if (bubblingEventTypes2) {
            tmp73 = bubblingEventTypes2;
            const keys = Object.keys();
            if (keys !== undefined) {
              tmp73 = bubblingEventTypes2;
              while (keys[tmp2] !== undefined) {
                if (!genericBubblingEventTypes.hasOwnProperty(tmp76)) {
                  continue;
                } else {
                  let obj10 = genericBubblingEventTypes[tmp76];
                  let tmp77 = obj10;
                  if (bubblingEventTypes2.hasOwnProperty(tmp76)) {
                    let obj11 = bubblingEventTypes2[tmp76];
                    let tmp78 = typeof obj10 === "object";
                    if (typeof obj10 === "object") {
                      tmp78 = typeof obj11 === "object";
                    }
                    tmp77 = obj10;
                    if (tmp78) {
                      let tmp79 = obj11;
                      if (obj10) {
                        tmp79 = obj10;
                        if (obj11) {
                          tmp79 = obj11;
                          let keys1 = Object.keys();
                          if (keys1 !== undefined) {
                            tmp79 = obj11;
                            let tmp82 = keys1[tmp];
                            while (tmp82 !== undefined) {
                              if (!obj10.hasOwnProperty(tmp82)) {
                                continue;
                              } else {
                                let tmp83 = obj10[tmp82];
                                let tmp84 = tmp83;
                                if (obj11.hasOwnProperty(tmp82)) {
                                  let tmp85 = obj11[tmp82];
                                  let tmp86 = typeof tmp83 === "object";
                                  if (typeof tmp83 === "object") {
                                    tmp86 = typeof tmp85 === "object";
                                  }
                                  tmp84 = tmp83;
                                  if (tmp86) {
                                    tmp84 = merge(tmp85, tmp83);
                                  }
                                }
                                obj11[tmp82] = tmp84;
                                continue;
                              }
                              continue;
                            }
                          }
                        }
                      }
                      tmp77 = tmp79;
                    }
                  }
                  bubblingEventTypes2[tmp76] = tmp77;
                  continue;
                }
                continue;
              }
            }
          }
        }
        viewManagerConfig.bubblingEventTypes = tmp73;
        const directEventTypes2 = viewManagerConfig.directEventTypes;
        const genericDirectEventTypes = constants.genericDirectEventTypes;
        let tmp88 = directEventTypes2;
        if (genericDirectEventTypes) {
          tmp88 = genericDirectEventTypes;
          if (directEventTypes2) {
            tmp88 = directEventTypes2;
            const keys2 = Object.keys();
            if (keys2 !== undefined) {
              tmp88 = directEventTypes2;
              while (keys2[tmp2] !== undefined) {
                if (!genericDirectEventTypes.hasOwnProperty(tmp91)) {
                  continue;
                } else {
                  let obj12 = genericDirectEventTypes[tmp91];
                  let tmp92 = obj12;
                  if (directEventTypes2.hasOwnProperty(tmp91)) {
                    let obj13 = directEventTypes2[tmp91];
                    let tmp93 = typeof obj12 === "object";
                    if (typeof obj12 === "object") {
                      tmp93 = typeof obj13 === "object";
                    }
                    tmp92 = obj12;
                    if (tmp93) {
                      let tmp94 = obj13;
                      if (obj12) {
                        tmp94 = obj12;
                        if (obj13) {
                          tmp94 = obj13;
                          let keys3 = Object.keys();
                          if (keys3 !== undefined) {
                            tmp94 = obj13;
                            let tmp97 = keys3[tmp];
                            while (tmp97 !== undefined) {
                              if (!obj12.hasOwnProperty(tmp97)) {
                                continue;
                              } else {
                                let tmp98 = obj12[tmp97];
                                let tmp99 = tmp98;
                                if (obj13.hasOwnProperty(tmp97)) {
                                  let tmp100 = obj13[tmp97];
                                  let tmp101 = typeof tmp98 === "object";
                                  if (typeof tmp98 === "object") {
                                    tmp101 = typeof tmp100 === "object";
                                  }
                                  tmp99 = tmp98;
                                  if (tmp101) {
                                    tmp99 = merge(tmp100, tmp98);
                                  }
                                }
                                obj13[tmp97] = tmp99;
                                continue;
                              }
                              continue;
                            }
                          }
                        }
                      }
                      tmp92 = tmp94;
                    }
                  }
                  directEventTypes2[tmp91] = tmp92;
                  continue;
                }
                continue;
              }
            }
          }
        }
        viewManagerConfig.directEventTypes = tmp88;
      }
      return viewManagerConfig;
    }
    const tmp68Result = nullthrows;
    const obj14 = tmp68Result(_mod68.default.getDefaultEventTypes)();
    if (obj14) {
      if (viewManagerConfig) {
        for (const key10197 in obj14) {
          if (!obj14.hasOwnProperty(key10197)) {
            continue;
          } else {
            let obj15 = obj14[key10197];
            let tmp105 = obj15;
            if (viewManagerConfig.hasOwnProperty(key10197)) {
              let obj16 = viewManagerConfig[key10197];
              let tmp106 = typeof obj15 === "object" && typeof obj16 === "object";
              tmp105 = obj15;
              if (tmp106) {
                let tmp107 = obj16;
                if (obj15) {
                  tmp107 = obj15;
                  if (obj16) {
                    tmp107 = obj16;
                    let keys4 = Object.keys();
                    if (keys4 !== undefined) {
                      tmp107 = obj16;
                      let tmp110 = keys4[tmp];
                      while (tmp110 !== undefined) {
                        if (!obj15.hasOwnProperty(tmp110)) {
                          continue;
                        } else {
                          let tmp111 = obj15[tmp110];
                          let tmp112 = tmp111;
                          if (obj16.hasOwnProperty(tmp110)) {
                            let tmp113 = obj16[tmp110];
                            let tmp114 = typeof tmp111 === "object" && typeof tmp113 === "object";
                            tmp112 = tmp111;
                            if (tmp114) {
                              tmp112 = merge(tmp113, tmp111);
                            }
                          }
                          obj16[tmp110] = tmp112;
                          continue;
                        }
                        continue;
                      }
                    }
                  }
                }
                tmp105 = tmp107;
              }
            }
            viewManagerConfig[key10197] = tmp105;
            continue;
          }
          continue;
        }
      }
    }
  }
};