// _runtime/00067_merge.js
import { result } from "00026_result.js";
import { getValidLengthPercentageSizeOrNull } from "00057_getValidLengthPercentageSizeOrNull.js";
import { sizesDiffer } from "00064_sizesDiffer.js";
import { measure } from "00068_measure.js";
import { nullthrows } from "00070_nullthrows.js";
import { matricesDiffer } from "00077_matricesDiffer.js";
import { pointsDiffer } from "00078_pointsDiffer.js";
import { insetsDiffer } from "00079_insetsDiffer.js";
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function merge(arg0, obj) {
  if (obj) {
    if (arg0) {
      for (const key10005 in arg1) {
        let tmp7 = key10005;
        if (!arg1.hasOwnProperty(key10005)) {
          continue;
        } else {
          let tmp2 = arg1[key10005];
          let tmp3 = tmp2;
          if (arg0.hasOwnProperty(key10005)) {
            let tmp4 = arg0[key10005];
            let tmp5 = typeof tmp2 === "object";
            if (typeof tmp2 === "object") {
              tmp5 = typeof tmp4 === "object";
            }
            tmp3 = tmp2;
            if (tmp5) {
              let tmp6 = merge;
              tmp3 = merge(tmp4, tmp2);
            }
          }
          arg0[key10005] = tmp3;
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
arg5.default = function getNativeComponentAttributes(arg0) {
  let NativeProps;
  let baseModuleName;
  let bubblingEventTypes;
  let directEventTypes;
  let _default = measure.default;
  const viewManagerConfig = _default.getViewManagerConfig(arg0);
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
    while (baseModuleName) {
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let _default2 = measure.default;
      let viewManagerConfig1 = _default2.getViewManagerConfig(baseModuleName);
      let tmp15 = tmp4;
      let tmp16 = tmp3;
      let tmp17 = tmp5;
      baseModuleName = null;
      if (viewManagerConfig1) {
        let obj = {};
        let tmp19 = obj;
        let merged = Object.assign(viewManagerConfig1.bubblingEventTypes);
        let tmp21 = obj;
        let tmp22 = tmp5;
        let merged1 = Object.assign(tmp14);
        obj = {};
        let tmp24 = obj;
        let merged2 = Object.assign(viewManagerConfig1.directEventTypes);
        let tmp26 = obj;
        let tmp27 = tmp3;
        let merged3 = Object.assign(tmp13);
        let obj1 = {};
        let tmp29 = obj1;
        let merged4 = Object.assign(viewManagerConfig1.NativeProps);
        let tmp31 = obj1;
        let tmp32 = tmp4;
        let merged5 = Object.assign(tmp12);
        baseModuleName = viewManagerConfig1.baseModuleName;
        tmp15 = obj1;
        tmp16 = obj;
        tmp17 = obj;
      }
      tmp4 = tmp15;
      tmp3 = tmp16;
      tmp5 = tmp17;
      tmp6 = tmp4;
      tmp7 = tmp3;
      tmp8 = tmp5;
    }
    const obj2 = {};
    for (const key10063 in tmp6) {
      let tmp95 = key10063;
      let tmp96 = tmp6[key10063];
      if ("CATransform3D" === tmp96) {
        let tmp42 = require;
        let tmp43 = dependencyMap;
        _default = matricesDiffer.default;
      } else {
        if ("CGPoint" !== tmp96) {
          if ("Point" !== tmp96) {
            if ("CGSize" === tmp96) {
              let tmp38 = require;
              let tmp39 = dependencyMap;
              _default = sizesDiffer.default;
            } else if ("UIEdgeInsets" === tmp96) {
              let tmp36 = require;
              let tmp37 = dependencyMap;
              _default = insetsDiffer.default;
            } else {
              _default = null;
            }
          }
        }
        let tmp40 = require;
        let tmp41 = dependencyMap;
        _default = pointsDiffer.default;
      }
      let tmp44 = require;
      let tmp45 = dependencyMap;
      let _default3 = getValidLengthPercentageSizeOrNull.default;
      while (true) {
        if (null == _default) {
          let tmp46 = null == _default3;
          if (!tmp46) {
            let obj3 = { process: null };
            obj3[0] = _default3;
            tmp46 = obj3;
          }
          let obj5 = tmp46;
        } else if (null == _default3) {
          let obj4 = { diff: null };
          obj4[0] = _default;
          obj5 = obj4;
        } else {
          obj5 = { diff: null, process: null };
          obj5[0] = _default;
          obj5[1] = _default3;
        }
        obj2[key10063] = obj5;
        continue label0;
      }
    }
    obj2.style = result.default;
    const _Object = Object;
    const obj6 = { uiViewClassName: null, validAttributes: null, bubblingEventTypes: null, directEventTypes: null };
    obj6[0] = arg0;
    obj6[1] = obj2;
    obj6[2] = tmp8;
    obj6[3] = tmp7;
    const merged6 = Object.assign(viewManagerConfig, obj6);
    const constants = measure.default.getConstants();
    if (!constants.ViewManagerNames) {
      if (!constants.LazyViewManagersEnabled) {
        const bubblingEventTypes2 = viewManagerConfig.bubblingEventTypes;
        const genericBubblingEventTypes = constants.genericBubblingEventTypes;
        let tmp52 = bubblingEventTypes2;
        if (genericBubblingEventTypes) {
          tmp52 = genericBubblingEventTypes;
          if (bubblingEventTypes2) {
            tmp52 = bubblingEventTypes2;
            const keys = Object.keys();
            if (keys !== undefined) {
              tmp52 = bubblingEventTypes2;
              while (keys[tmp2] !== undefined) {
                let tmp97 = tmp55;
                if (!genericBubblingEventTypes.hasOwnProperty(tmp55)) {
                  continue;
                } else {
                  let obj10 = genericBubblingEventTypes[tmp55];
                  let tmp56 = obj10;
                  if (bubblingEventTypes2.hasOwnProperty(tmp55)) {
                    let obj11 = bubblingEventTypes2[tmp55];
                    let tmp57 = typeof obj10 === "object";
                    if (typeof obj10 === "object") {
                      tmp57 = typeof obj11 === "object";
                    }
                    tmp56 = obj10;
                    if (tmp57) {
                      let tmp58 = obj11;
                      if (obj10) {
                        tmp58 = obj10;
                        if (obj11) {
                          let tmp59 = obj10;
                          tmp58 = obj11;
                          let keys1 = Object.keys();
                          if (keys1 !== undefined) {
                            tmp58 = obj11;
                            let tmp61 = keys1[tmp];
                            while (tmp61 !== undefined) {
                              let tmp98 = tmp61;
                              if (!obj10.hasOwnProperty(tmp61)) {
                                continue;
                              } else {
                                let tmp62 = obj10[tmp61];
                                let tmp63 = tmp62;
                                if (obj11.hasOwnProperty(tmp61)) {
                                  let tmp64 = obj11[tmp61];
                                  let tmp65 = typeof tmp62 === "object";
                                  if (typeof tmp62 === "object") {
                                    tmp65 = typeof tmp64 === "object";
                                  }
                                  tmp63 = tmp62;
                                  if (tmp65) {
                                    let tmp66 = merge;
                                    tmp63 = merge(tmp64, tmp62);
                                  }
                                }
                                obj11[tmp61] = tmp63;
                                continue;
                              }
                              continue;
                            }
                          }
                        }
                      }
                      tmp56 = tmp58;
                    }
                  }
                  bubblingEventTypes2[tmp55] = tmp56;
                  continue;
                }
                continue;
              }
            }
          }
        }
        viewManagerConfig.bubblingEventTypes = tmp52;
        const directEventTypes2 = viewManagerConfig.directEventTypes;
        const genericDirectEventTypes = constants.genericDirectEventTypes;
        let tmp67 = directEventTypes2;
        if (genericDirectEventTypes) {
          tmp67 = genericDirectEventTypes;
          if (directEventTypes2) {
            tmp67 = directEventTypes2;
            const keys2 = Object.keys();
            if (keys2 !== undefined) {
              tmp67 = directEventTypes2;
              while (keys2[tmp2] !== undefined) {
                let tmp99 = tmp70;
                if (!genericDirectEventTypes.hasOwnProperty(tmp70)) {
                  continue;
                } else {
                  let obj12 = genericDirectEventTypes[tmp70];
                  let tmp71 = obj12;
                  if (directEventTypes2.hasOwnProperty(tmp70)) {
                    let obj13 = directEventTypes2[tmp70];
                    let tmp72 = typeof obj12 === "object";
                    if (typeof obj12 === "object") {
                      tmp72 = typeof obj13 === "object";
                    }
                    tmp71 = obj12;
                    if (tmp72) {
                      let tmp73 = obj13;
                      if (obj12) {
                        tmp73 = obj12;
                        if (obj13) {
                          let tmp74 = obj12;
                          tmp73 = obj13;
                          let keys3 = Object.keys();
                          if (keys3 !== undefined) {
                            tmp73 = obj13;
                            let tmp76 = keys3[tmp];
                            while (tmp76 !== undefined) {
                              tmp = tmp76;
                              if (!obj12.hasOwnProperty(tmp76)) {
                                continue;
                              } else {
                                let tmp77 = obj12[tmp76];
                                let tmp78 = tmp77;
                                if (obj13.hasOwnProperty(tmp76)) {
                                  let tmp79 = obj13[tmp76];
                                  let tmp80 = typeof tmp77 === "object";
                                  if (typeof tmp77 === "object") {
                                    tmp80 = typeof tmp79 === "object";
                                  }
                                  tmp78 = tmp77;
                                  if (tmp80) {
                                    let tmp81 = merge;
                                    tmp78 = merge(tmp79, tmp77);
                                  }
                                }
                                obj13[tmp76] = tmp78;
                                continue;
                              }
                              continue;
                            }
                          }
                        }
                      }
                      tmp71 = tmp73;
                    }
                  }
                  directEventTypes2[tmp70] = tmp71;
                  continue;
                }
                continue;
              }
            }
          }
        }
        viewManagerConfig.directEventTypes = tmp67;
      }
      return viewManagerConfig;
    }
    const _default4 = measure.default;
    const obj14 = nullthrows(measure.default.getDefaultEventTypes)();
    if (obj14) {
      if (viewManagerConfig) {
        for (const key10197 in obj14) {
          tmp = key10197;
          if (!obj14.hasOwnProperty(key10197)) {
            continue;
          } else {
            let obj15 = obj14[key10197];
            let tmp84 = obj15;
            if (viewManagerConfig.hasOwnProperty(key10197)) {
              let obj16 = viewManagerConfig[key10197];
              let tmp85 = typeof obj15 === "object";
              if (typeof obj15 === "object") {
                tmp85 = typeof obj16 === "object";
              }
              tmp84 = obj15;
              if (tmp85) {
                let tmp86 = obj16;
                if (obj15) {
                  tmp86 = obj15;
                  if (obj16) {
                    let tmp87 = obj15;
                    tmp86 = obj16;
                    let keys4 = Object.keys();
                    if (keys4 !== undefined) {
                      tmp86 = obj16;
                      let tmp89 = keys4[tmp];
                      while (tmp89 !== undefined) {
                        tmp = tmp89;
                        if (!obj15.hasOwnProperty(tmp89)) {
                          continue;
                        } else {
                          let tmp90 = obj15[tmp89];
                          let tmp91 = tmp90;
                          if (obj16.hasOwnProperty(tmp89)) {
                            let tmp92 = obj16[tmp89];
                            let tmp93 = typeof tmp90 === "object";
                            if (typeof tmp90 === "object") {
                              tmp93 = typeof tmp92 === "object";
                            }
                            tmp91 = tmp90;
                            if (tmp93) {
                              let tmp94 = merge;
                              tmp91 = merge(tmp92, tmp90);
                            }
                          }
                          obj16[tmp89] = tmp91;
                          continue;
                        }
                        continue;
                      }
                    }
                  }
                }
                tmp84 = tmp86;
              }
            }
            viewManagerConfig[key10197] = tmp84;
            continue;
          }
          continue;
        }
      }
    }
    const tmp47Result = nullthrows;
  }
};