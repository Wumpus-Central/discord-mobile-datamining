// _runtime/07396_FOCAL_PLANE_RESOLUTION_UNIT.js
const require = globalThis.__r;

const FOCAL_PLANE_RESOLUTION_UNIT = { INCHES: 2, CENTIMETERS: 3, MILLIMETERS: 4 };
let c3 = 25.4;
let c4 = 10;
let c5 = 1;

export default {
  get(exif, arg1) {
    let obj3;
    let value;
    function getFocalLengthIn35mmFilmValue(value2, value3, value4, value5, value6, value) {
      if (value2) {
        const tmp = value3;
        if (tmp) {
          const tmp2 = value4;
          if (tmp2) {
            const tmp3 = value5;
            if (tmp3) {
              const tmp4 = value6;
              if (tmp4) {
                const tmp5 = value;
                if (tmp5) {
                  try {
                    let tmp7;
                    if (constants.INCHES === value4) {
                      tmp7 = closure_1_3;
                    } else if (constants.CENTIMETERS === value4) {
                      tmp7 = closure_1_4;
                    } else if (constants.MILLIMETERS === value4) {
                      tmp7 = closure_1_5;
                    }
                    const result = value6 / ((value3[0] / value3[1]) * tmp7);
                    const _Math = Math;
                    return (
                      (value[0] / value[1]) *
                      (43.27 / Math.sqrt((value5 / ((value2[0] / value2[1]) * tmp7)) ** 2 + result ** 2))
                    );
                  } catch (err) {}
                }
              }
            }
          }
        }
      }
    }
    function getScaleFactorTo35mmEquivalent(value, value7) {
      const tmp = value;
      if (tmp) {
        const tmp2 = value7;
        if (tmp2) {
          try {
            const result = value7 / (value[0] / value[1]);
            const obj = { value: result, description: result.toFixed(1) };
            return obj;
          } catch (err) {}
        }
      }
    }
    function getFieldOfView(value7) {
      const tmp = value7;
      if (tmp) {
        try {
          const _Math = Math;
          const _Math2 = Math;
          const result = 2 * Math.atan(36 / (2 * value7)) * (180 / Math.PI);
          const obj = { value: result, description: result.toFixed(1) + " deg" };
          return obj;
        } catch (err) {}
      }
    }
    let tmp = arg1;
    if (tmp) {
      if (exif.exif) {
        let value2;
        if (exif.exif.FocalLength) {
          value = exif.exif.FocalLength.value;
        }
        if (arg1) {
          if (exif.exif) {
            let value3;
            if (exif.exif.FocalPlaneXResolution) {
              value2 = exif.exif.FocalPlaneXResolution.value;
            }
            if (arg1) {
              if (exif.exif) {
                let value4;
                if (exif.exif.FocalPlaneYResolution) {
                  value3 = exif.exif.FocalPlaneYResolution.value;
                }
                if (arg1) {
                  if (exif.exif) {
                    let value5;
                    if (exif.exif.FocalPlaneResolutionUnit) {
                      value4 = exif.exif.FocalPlaneResolutionUnit.value;
                    }
                    if (arg1) {
                      if (exif.file) {
                        let value6;
                        if (exif.file["Image Width"]) {
                          value5 = exif.file["Image Width"].value;
                        }
                        if (arg1) {
                          if (exif.file) {
                            let value7;
                            if (exif.file["Image Height"]) {
                              value6 = exif.file["Image Height"].value;
                            }
                            if (arg1) {
                              if (exif.exif) {
                                if (exif.exif.FocalLengthIn35mmFilm) {
                                  value7 = exif.exif.FocalLengthIn35mmFilm.value;
                                }
                                if (!value7) {
                                  let tmp2 = value2;
                                  let tmp3 = value3;
                                  let tmp4 = value4;
                                  let tmp5 = value5;
                                  let tmp7 = value;
                                  value7 = getFocalLengthIn35mmFilmValue(value2, value3, value4, value5, value6, value);
                                }
                                let obj = {};
                                let flag = false;
                                if (value7) {
                                  const obj2 = { value: value7, description: obj3.FocalLengthIn35mmFilm(value7) };
                                  obj.FocalLength35efl = obj2;
                                  flag = true;
                                  obj3 = require("metro/07368__.js");
                                }
                                const tmp10 = getScaleFactorTo35mmEquivalent(value, value7);
                                if (tmp10) {
                                  obj.ScaleFactorTo35mmEquivalent = tmp10;
                                  flag = true;
                                }
                                const tmp11 = getFieldOfView(value7);
                                if (tmp11) {
                                  obj.FieldOfView = tmp11;
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
