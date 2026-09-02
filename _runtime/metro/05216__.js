// _runtime/metro/05216__.js
const module = arg2;
const dependencyMap = arg6;
let obj = { INCHES: 2, CENTIMETERS: 3, MILLIMETERS: 4 };
let c3 = 25.4;
let c4 = 10;
let c5 = 1;
arg5.default = {
  get(exif) {
    if (arg1) {
      if (exif.exif) {
        if (exif.exif.FocalLength) {
          let value = exif.exif.FocalLength.value;
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
                          let value2 = exif.file["Image Width"].value;
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
                                  value4 = (function getFocalLengthIn35mmFilmValue(
                                    value,
                                    value2,
                                    value1,
                                    value2,
                                    value3,
                                    value3,
                                  ) {
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
                                                    let tmp7 = closure_3;
                                                    const result = sqrtResult / ((result2[0] / result2[1]) * tmp7);
                                                    const result1 = tmp3 / ((_Math[0] / _Math[1]) * tmp7);
                                                    _Math = Math;
                                                    tmp3 = result1 ** 2;
                                                    sqrtResult = Math.sqrt(tmp3 + result ** 2);
                                                    result2 = 5188 / result3[1];
                                                    result3 = result2 * (43.27 / sqrtResult);
                                                  } else if (tmp6.CENTIMETERS !== value1) {
                                                    if (tmp6.MILLIMETERS === value1) {
                                                      tmp7 = closure_5;
                                                    }
                                                  }
                                                  tmp7 = closure_4;
                                                } catch (err) {}
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  })(value, value, value1, value2, value3, value);
                                }
                                obj = {};
                                let flag = false;
                                if (value4) {
                                  obj = { value: null, description: null };
                                  obj[0] = value4;
                                  obj[1] = module(5188).FocalLengthIn35mmFilm(value4);
                                  obj.FocalLength35efl = obj;
                                  flag = true;
                                  const obj3 = module(5188);
                                }
                                const tmp9 = (function getScaleFactorTo35mmEquivalent(value, value4) {
                                  if (value) {
                                    if (value4) {
                                      try {
                                        const result = value4 / (value[0] / value[1]);
                                        obj = { value: null, description: null };
                                        obj[0] = result;
                                        obj[1] = result.toFixed(1);
                                        return obj;
                                      } catch (err) {}
                                    }
                                  }
                                })(value, value4);
                                if (tmp9) {
                                  obj.ScaleFactorTo35mmEquivalent = tmp9;
                                  flag = true;
                                }
                                const tmp10 = (function getFieldOfView(value4) {
                                  if (value4) {
                                    try {
                                      const _Math = Math;
                                      const _Math2 = Math;
                                      const result = 2 * Math.atan(36 / (2 * value4)) * (180 / Math.PI);
                                      obj = { value: null, description: null };
                                      obj[0] = result;
                                      obj[1] = result.toFixed(1) + " deg";
                                      return obj;
                                    } catch (err) {}
                                  }
                                })(value4);
                                if (tmp10) {
                                  obj.FieldOfView = tmp10;
                                  flag = true;
                                }
                                return flag ? obj : undefined;
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
  },
};
arg5.FOCAL_PLANE_RESOLUTION_UNIT = obj;
