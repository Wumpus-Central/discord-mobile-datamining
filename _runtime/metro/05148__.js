// === Module 5148: ? ===

// Module 5148
arg5.default = {
  ApertureValue(arg0) {
    return Math.pow(Math.sqrt(2), arg0[0] / arg0[1]).toFixed(2);
  },
  ColorSpace(parsed) {
    let str = "sRGB";
    if (1 !== parsed) {
      let str2 = "Unknown";
      if (65535 === parsed) {
        str2 = "Uncalibrated";
      }
      str = str2;
    }
    return str;
  },
  ComponentsConfiguration(mapped) {
    mapped = mapped.map((arg0) => {
      let str = "Y";
      if (49 !== arg0) {
        let str2 = "Cb";
        if (50 !== arg0) {
          let str3 = "Cr";
          if (51 !== arg0) {
            let str4 = "R";
            if (52 !== arg0) {
              let str5 = "G";
              if (53 !== arg0) {
                let str6;
                if (54 === arg0) {
                  str6 = "B";
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        str = str2;
      }
      return str;
    });
    return mapped.join("");
  },
  Contrast(arg0) {
    let str = "Normal";
    if (0 !== arg0) {
      let str2 = "Soft";
      if (1 !== arg0) {
        let str3 = "Unknown";
        if (2 === arg0) {
          str3 = "Hard";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  },
  CustomRendered(arg0) {
    let str = "Normal process";
    if (0 !== arg0) {
      let str2 = "Unknown";
      if (1 === arg0) {
        str2 = "Custom process";
      }
      str = str2;
    }
    return str;
  },
  ExposureMode(arg0) {
    let str = "Auto exposure";
    if (0 !== arg0) {
      let str2 = "Manual exposure";
      if (1 !== arg0) {
        let str3 = "Unknown";
        if (2 === arg0) {
          str3 = "Auto bracket";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  },
  ExposureProgram(arg0) {
    let str = "Undefined";
    if (0 !== arg0) {
      let str10 = "Manual";
      if (1 !== arg0) {
        let str9 = "Normal program";
        if (2 !== arg0) {
          let str2 = "Aperture priority";
          if (3 !== arg0) {
            let str3 = "Shutter priority";
            if (4 !== arg0) {
              let str4 = "Creative program";
              if (5 !== arg0) {
                let str5 = "Action program";
                if (6 !== arg0) {
                  let str6 = "Portrait mode";
                  if (7 !== arg0) {
                    let str7 = "Landscape mode";
                    if (8 !== arg0) {
                      let str8 = "Unknown";
                      if (9 === arg0) {
                        str8 = "Bulb";
                      }
                      str7 = str8;
                    }
                    str6 = str7;
                  }
                  str5 = str6;
                }
                str4 = str5;
              }
              str3 = str4;
            }
            str2 = str3;
          }
          str9 = str2;
        }
        str10 = str9;
      }
      str = str10;
    }
    return str;
  },
  ExposureTime(parts) {
    if (parts[0] / parts[1] > 0.25) {
      const result = parts[0] / parts[1];
      const _Number = Number;
      if (Number.isInteger(result)) {
        let text = `${obj}`;
      } else {
        text = result.toFixed(1);
      }
      return text;
    } else {
      if (0 !== parts[0]) {
        const _Math = Math;
        const _HermesInternal2 = HermesInternal;
        let combined = "1/" + Math.round(parts[1] / parts[0]);
      } else {
        const _HermesInternal = HermesInternal;
        combined = "0/" + parts[1];
      }
      return combined;
    }
  },
  FNumber(arg0) {
    return "f/" + Number(arg0[0] / arg0[1]).toFixed(1);
  },
  FocalLength(arg0) {
    return arg0[0] / arg0[1] + " mm";
  },
  FocalPlaneResolutionUnit(arg0) {
    let str = "inches";
    if (2 !== arg0) {
      let str2 = "centimeters";
      if (3 !== arg0) {
        let str3 = "Unknown";
        if (4 === arg0) {
          str3 = "millimeters";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  },
  LightSource(arg0) {
    let str = "Daylight";
    if (1 !== arg0) {
      let str20 = "Fluorescent";
      if (2 !== arg0) {
        let str19 = "Tungsten (incandescent light)";
        if (3 !== arg0) {
          let str18 = "Flash";
          if (4 !== arg0) {
            let str17 = "Fine weather";
            if (9 !== arg0) {
              let str16 = "Cloudy weather";
              if (10 !== arg0) {
                let str15 = "Shade";
                if (11 !== arg0) {
                  let str14 = "Daylight fluorescent (D 5700 \u2013 7100K)";
                  if (12 !== arg0) {
                    let str13 = "Day white fluorescent (N 4600 \u2013 5400K)";
                    if (13 !== arg0) {
                      let str12 = "Cool white fluorescent (W 3900 \u2013 4500K)";
                      if (14 !== arg0) {
                        let str11 = "White fluorescent (WW 3200 \u2013 3700K)";
                        if (15 !== arg0) {
                          let str10 = "Standard light A";
                          if (17 !== arg0) {
                            let str9 = "Standard light B";
                            if (18 !== arg0) {
                              let str2 = "Standard light C";
                              if (19 !== arg0) {
                                let str3 = "D55";
                                if (20 !== arg0) {
                                  let str4 = "D65";
                                  if (21 !== arg0) {
                                    let str5 = "D75";
                                    if (22 !== arg0) {
                                      let str6 = "D50";
                                      if (23 !== arg0) {
                                        let str7 = "ISO studio tungsten";
                                        if (24 !== arg0) {
                                          let str8 = "Unknown";
                                          if (255 === arg0) {
                                            str8 = "Other light source";
                                          }
                                          str7 = str8;
                                        }
                                        str6 = str7;
                                      }
                                      str5 = str6;
                                    }
                                    str4 = str5;
                                  }
                                  str3 = str4;
                                }
                                str2 = str3;
                              }
                              str9 = str2;
                            }
                            str10 = str9;
                          }
                          str11 = str10;
                        }
                        str12 = str11;
                      }
                      str13 = str12;
                    }
                    str14 = str13;
                  }
                  str15 = str14;
                }
                str16 = str15;
              }
              str17 = str16;
            }
            str18 = str17;
          }
          str19 = str18;
        }
        str20 = str19;
      }
      str = str20;
    }
    return str;
  },
  MeteringMode(arg0) {
    let str = "Average";
    if (1 !== arg0) {
      let str2 = "CenterWeightedAverage";
      if (2 !== arg0) {
        let str3 = "Spot";
        if (3 !== arg0) {
          let str4 = "MultiSpot";
          if (4 !== arg0) {
            let str5 = "Pattern";
            if (5 !== arg0) {
              let str6 = "Partial";
              if (6 !== arg0) {
                let str7 = "Unknown";
                if (255 === arg0) {
                  str7 = "Other";
                }
                str6 = str7;
              }
              str5 = str6;
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  },
  ResolutionUnit(arg0) {
    let str = "inches";
    if (2 !== arg0) {
      let str2 = "Unknown";
      if (3 === arg0) {
        str2 = "centimeters";
      }
      str = str2;
    }
    return str;
  },
  Saturation(arg0) {
    let str = "Normal";
    if (0 !== arg0) {
      let str2 = "Low saturation";
      if (1 !== arg0) {
        let str3 = "Unknown";
        if (2 === arg0) {
          str3 = "High saturation";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  },
  FocalLengthIn35mmFilm(value4) {
    let str = "Unknown";
    if (0 !== value4) {
      str = `${value4} mm`;
    }
    return str;
  },
  SceneCaptureType(arg0) {
    let str = "Standard";
    if (0 !== arg0) {
      let str2 = "Landscape";
      if (1 !== arg0) {
        let str3 = "Portrait";
        if (2 !== arg0) {
          let str4 = "Unknown";
          if (3 === arg0) {
            str4 = "Night scene";
          }
          str3 = str4;
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  },
  Sharpness(arg0) {
    let str = "Normal";
    if (0 !== arg0) {
      let str2 = "Soft";
      if (1 !== arg0) {
        let str3 = "Unknown";
        if (2 === arg0) {
          str3 = "Hard";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  },
  ShutterSpeedValue(arg0) {
    const powResult = Math.pow(2, arg0[0] / arg0[1]);
    if (powResult <= 1) {
      const _Math2 = Math;
      const _HermesInternal2 = HermesInternal;
      let combined = "" + Math.round(1 / powResult);
    } else {
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      combined = "1/" + Math.round(powResult);
    }
    return combined;
  },
  WhiteBalance(arg0) {
    let str = "Auto white balance";
    if (0 !== arg0) {
      let str2 = "Unknown";
      if (1 === arg0) {
        str2 = "Manual white balance";
      }
      str = str2;
    }
    return str;
  },
  XResolution(arg0) {
    return "" + Math.round(arg0[0] / arg0[1]);
  },
  YResolution(arg0) {
    return "" + Math.round(arg0[0] / arg0[1]);
  }
};