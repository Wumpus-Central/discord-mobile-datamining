// _runtime/05345_FOCAL_PLANE_RESOLUTION_UNIT.js
const require = globalThis.__r;

const importDefault = arg2;
const dependencyMap = arg6;
const FOCAL_PLANE_RESOLUTION_UNIT = { INCHES: 2, CENTIMETERS: 3, MILLIMETERS: 4 };
let c3 = 25.4;
let c4 = 10;
let c5 = 1;

export default {
  get(exif, arg1) {
    if (arg1) {
      if (exif.exif) {
        if (exif.exif.FocalLength) {
          value = exif.exif.FocalLength.value;
        }
        if (arg1) {
          if (exif.exif) {
            if (exif.exif.FocalPlaneXResolution) {
              value2 = exif.exif.FocalPlaneXResolution.value;
            }
            if (arg1) {
              if (exif.exif) {
                if (exif.exif.FocalPlaneYResolution) {
                  let value3 = exif.exif.FocalPlaneYResolution.value;
                }
                if (arg1) {
                  if (exif.exif) {
                    if (exif.exif.FocalPlaneResolutionUnit) {
                      let value4 = exif.exif.FocalPlaneResolutionUnit.value;
                    }
                    if (arg1) {
                      if (exif.file) {
                        if (exif.file["Image Width"]) {
                          let value5 = exif.file["Image Width"].value;
                        }
                        if (arg1) {
                          if (exif.file) {
                            if (exif.file["Image Height"]) {
                              let value6 = exif.file["Image Height"].value;
                            }
                            if (arg1) {
                              if (exif.exif) {
                                if (exif.exif.FocalLengthIn35mmFilm) {
                                  let value7 = exif.exif.FocalLengthIn35mmFilm.value;
                                }
                                if (!value7) {
                                  value7 = (function getFocalLengthIn35mmFilmValue(
                                    value2,
                                    value3,
                                    value4,
                                    value5,
                                    value6,
                                    value,
                                  ) {
                                    let _Math = value2;
                                    if (value2) {
                                      let result2 = value3;
                                      if (value3) {
                                        if (value4) {
                                          let tmp3 = value5;
                                          if (value5) {
                                            let sqrtResult = value6;
                                            if (value6) {
                                              let result3 = value;
                                              if (value) {
                                                try {
                                                  if (constants.INCHES === value4) {
                                                    let tmp7 = closure_1_3;
                                                    const result = sqrtResult / ((result2[0] / result2[1]) * tmp7);
                                                    const result1 = tmp3 / ((_Math[0] / _Math[1]) * tmp7);
                                                    _Math = Math;
                                                    tmp3 = result1 ** 2;
                                                    sqrtResult = Math.sqrt(tmp3 + result ** 2);
                                                    result2 = result3[0] / result3[1];
                                                    result3 = result2 * (43.27 / sqrtResult);
                                                  } else if (constants.CENTIMETERS !== value4) {
                                                    if (constants.MILLIMETERS === value4) {
                                                      tmp7 = closure_1_5;
                                                    }
                                                  }
                                                  tmp7 = closure_1_4;
                                                } catch (err) {}
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  })(value2, value3, value4, value5, value6, value);
                                }
                                let obj = {};
                                let flag = false;
                                if (value7) {
                                  const obj2 = {
                                    value: value7,
                                    description: require("metro/05317__.js").FocalLengthIn35mmFilm(value7),
                                  };
                                  obj.FocalLength35efl = obj2;
                                  flag = true;
                                  const obj3 = require("metro/05317__.js");
                                }
                                const tmp9 = (function getScaleFactorTo35mmEquivalent(value, value7) {
                                  if (value) {
                                    if (value7) {
                                      try {
                                        const result = value7 / (value[0] / value[1]);
                                        const obj = { value: result, description: result.toFixed(1) };
                                        return obj;
                                      } catch (err) {}
                                    }
                                  }
                                })(value, value7);
                                if (tmp9) {
                                  obj.ScaleFactorTo35mmEquivalent = tmp9;
                                  flag = true;
                                }
                                const tmp10 = (function getFieldOfView(value7) {
                                  if (value7) {
                                    try {
                                      const _Math = Math;
                                      const _Math2 = Math;
                                      const result = 2 * Math.atan(36 / (2 * value7)) * (180 / Math.PI);
                                      const obj = { value: result, description: result.toFixed(1) + " deg" };
                                      return obj;
                                    } catch (err) {}
                                  }
                                })(value7);
                                if (tmp10) {
                                  obj.FieldOfView = tmp10;
                                  flag = true;
                                }
                                return flag ? obj : undefined;
                              }
                            }
                            if (!arg1) {
                              if (exif.FocalLengthIn35mmFilm) {
                                value7 = exif.FocalLengthIn35mmFilm.value;
                              }
                            }
                          }
                        }
                        if (!arg1) {
                          if (exif["Image Height"]) {
                            value6 = exif["Image Height"].value;
                          }
                        }
                      }
                    }
                    if (!arg1) {
                      if (exif["Image Width"]) {
                        value5 = exif["Image Width"].value;
                      }
                    }
                  }
                }
                if (!arg1) {
                  if (exif.FocalPlaneResolutionUnit) {
                    value4 = exif.FocalPlaneResolutionUnit.value;
                  }
                }
              }
            }
            if (!arg1) {
              if (exif.FocalPlaneYResolution) {
                value3 = exif.FocalPlaneYResolution.value;
              }
            }
          }
        }
        if (!arg1) {
          if (exif.FocalPlaneXResolution) {
            value2 = exif.FocalPlaneXResolution.value;
          }
        }
      }
    }
    if (!arg1) {
      if (exif.FocalLength) {
        value = exif.FocalLength.value;
      }
    }
  },
};
export { FOCAL_PLANE_RESOLUTION_UNIT };
