// === Module 5264: FOCAL_PLANE_RESOLUTION_UNIT ===

// Module 5264 (FOCAL_PLANE_RESOLUTION_UNIT)
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
              value = exif.exif.FocalPlaneXResolution.value;
            }
            if (arg1) {
              if (exif.exif) {
                if (exif.exif.FocalPlaneYResolution) {
                  value = exif.exif.FocalPlaneYResolution.value;
                }
                if (arg1) {
                  if (exif.exif) {
                    if (exif.exif.FocalPlaneResolutionUnit) {
                      let value1 = exif.exif.FocalPlaneResolutionUnit.value;
                    }
                    if (arg1) {
                      if (exif.file) {
                        if (exif.file["Image Width"]) {
                          value2 = exif.file["Image Width"].value;
                        }
                        if (arg1) {
                          if (exif.file) {
                            if (exif.file["Image Height"]) {
                              let value3 = exif.file["Image Height"].value;
                            }
                            if (arg1) {
                              if (exif.exif) {
                                if (exif.exif.FocalLengthIn35mmFilm) {
                                  let value4 = exif.exif.FocalLengthIn35mmFilm.value;
                                }
                                if (!value4) {
                                  value4 = (function getFocalLengthIn35mmFilmValue(value, value2, value1, value2, value3, value3) {
                                    let _Math = value;
                                    if (value) {
                                      let result2 = value2;
                                      if (value2) {
                                        if (value1) {
                                          let tmp3 = value2;
                                          if (value2) {
                                            let sqrtResult = value3;
                                            if (value3) {
                                              let result3 = value3;
                                              if (value3) {
                                                try {
                                                  if (constants.INCHES === value1) {
                                                    let tmp7 = closure_1_3;
                                                    const result = sqrtResult / (result2[0] / result2[1] * tmp7);
                                                    const result1 = tmp3 / (_Math[0] / _Math[1] * tmp7);
                                                    _Math = Math;
                                                    tmp3 = result1 ** 2;
                                                    sqrtResult = Math.sqrt(tmp3 + result ** 2);
                                                    result2 = result3[0] / result3[1];
                                                    result3 = result2 * (43.27 / sqrtResult);
                                                  } else if (tmp6.CENTIMETERS !== value1) {
                                                    if (tmp6.MILLIMETERS === value1) {
                                                      tmp7 = closure_1_5;
                                                    }
                                                  }
                                                  tmp7 = closure_1_4;
                                                } catch (err) {
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  })(value, value, value1, value2, value3, value);
                                }
                                let FocalLength35efl = {};
                                let flag = false;
                                if (value4) {
                                  FocalLength35efl = { value: value4, description: require("module_5236").FocalLengthIn35mmFilm(value4) };
                                  FocalLength35efl.FocalLength35efl = FocalLength35efl;
                                  flag = true;
                                  const obj3 = require("module_5236");
                                }
                                const tmp9 = (function getScaleFactorTo35mmEquivalent(value, value4) {
                                  if (value) {
                                    if (value4) {
                                      try {
                                        const result = value4 / (value[0] / value[1]);
                                        obj = { value: result, description: result.toFixed(1) };
                                        return obj;
                                      } catch (err) {
                                      }
                                    }
                                  }
                                })(value, value4);
                                if (tmp9) {
                                  FocalLength35efl.ScaleFactorTo35mmEquivalent = tmp9;
                                  flag = true;
                                }
                                const tmp10 = (function getFieldOfView(value4) {
                                  if (value4) {
                                    try {
                                      const _Math = Math;
                                      const _Math2 = Math;
                                      const result = 2 * Math.atan(36 / (2 * value4)) * (180 / Math.PI);
                                      obj = { value: result, description: result.toFixed(1) + " deg" };
                                      return obj;
                                    } catch (err) {
                                    }
                                  }
                                })(value4);
                                if (tmp10) {
                                  FocalLength35efl.FieldOfView = tmp10;
                                  flag = true;
                                }
                                return flag ? FocalLength35efl : undefined;
                              }
                            }
                            if (!arg1) {
                              if (exif.FocalLengthIn35mmFilm) {
                                value4 = exif.FocalLengthIn35mmFilm.value;
                              }
                            }
                          }
                        }
                        if (!arg1) {
                          if (exif["Image Height"]) {
                            value3 = exif["Image Height"].value;
                          }
                        }
                      }
                    }
                    if (!arg1) {
                      if (exif["Image Width"]) {
                        value2 = exif["Image Width"].value;
                      }
                    }
                  }
                }
                if (!arg1) {
                  if (exif.FocalPlaneResolutionUnit) {
                    value1 = exif.FocalPlaneResolutionUnit.value;
                  }
                }
              }
            }
            if (!arg1) {
              if (exif.FocalPlaneYResolution) {
                value = exif.FocalPlaneYResolution.value;
              }
            }
          }
        }
        if (!arg1) {
          if (exif.FocalPlaneXResolution) {
            value = exif.FocalPlaneXResolution.value;
          }
        }
      }
    }
    if (!arg1) {
      if (exif.FocalLength) {
        value = exif.FocalLength.value;
      }
    }
  }
};
export { FOCAL_PLANE_RESOLUTION_UNIT };