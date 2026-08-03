// === Module 4832: ? ===

// Module 4832
obj = { 0: obj, 1: obj, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: "GPSSatellites", 9: null, 10: null, 11: "GPSDOP", 12: null, 13: "GPSSpeed", 14: null, 15: "GPSTrack", 16: null, 17: "GPSImgDirection", 18: "GPSMapDatum", 19: null, 20: null, 21: null, 22: null, 23: null, 24: "GPSDestBearing", 25: null, 26: "GPSDestDistance", 27: null, 28: null, 29: "GPSDateStamp", 30: null, 31: "GPSHPositioningError" };
obj = {
  name: "GPSVersionID",
  description(arg0) {
    let str = "Unknown";
    if (2 === arg0[0]) {
      str = "Unknown";
      if (2 === arg0[1]) {
        str = "Unknown";
        if (0 === arg0[2]) {
          str = "Unknown";
          if (0 === arg0[3]) {
            str = "Version 2.2";
          }
        }
      }
    }
    return str;
  }
};
obj = {
  name: "GPSLatitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "North latitude";
    if ("N" !== joined) {
      let str2 = "Unknown";
      if ("S" === joined) {
        str2 = "South latitude";
      }
      str = str2;
    }
    return str;
  }
};
obj[2] = { name: "GPSLatitude", description: require("getStringValue").getCalculatedGpsValue };
obj[3] = {
  name: "GPSLongitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "East longitude";
    if ("E" !== joined) {
      let str2 = "Unknown";
      if ("W" === joined) {
        str2 = "West longitude";
      }
      str = str2;
    }
    return str;
  }
};
const obj1 = { name: "GPSLatitude", description: require("getStringValue").getCalculatedGpsValue };
obj[4] = { name: "GPSLongitude", description: require("getStringValue").getCalculatedGpsValue };
obj[5] = {
  name: "GPSAltitudeRef",
  description(arg0) {
    let str = "Sea level";
    if (0 !== arg0) {
      let str2 = "Unknown";
      if (1 === arg0) {
        str2 = "Sea level reference (negative value)";
      }
      str = str2;
    }
    return str;
  }
};
obj[6] = {
  name: "GPSAltitude",
  description(arg0) {
    return arg0[0] / arg0[1] + " m";
  }
};
obj[7] = {
  name: "GPSTimeStamp",
  description(arr) {
    const mapped = arr.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const result = tmp / tmp2;
      let combined = result;
      if (obj.test("" + result)) {
        const _HermesInternal = HermesInternal;
        combined = "0" + result;
      }
      return combined;
    });
    return mapped.join(":");
  }
};
obj[9] = {
  name: "GPSStatus",
  description(join) {
    const joined = join.join("");
    let str = "Measurement in progress";
    if ("A" !== joined) {
      let str2 = "Unknown";
      if ("V" === joined) {
        str2 = "Measurement Interoperability";
      }
      str = str2;
    }
    return str;
  }
};
obj[10] = {
  name: "GPSMeasureMode",
  description(join) {
    const joined = join.join("");
    let str = "2-dimensional measurement";
    if ("2" !== joined) {
      let str2 = "Unknown";
      if ("3" === joined) {
        str2 = "3-dimensional measurement";
      }
      str = str2;
    }
    return str;
  }
};
obj[12] = {
  name: "GPSSpeedRef",
  description(join) {
    const joined = join.join("");
    let str = "Kilometers per hour";
    if ("K" !== joined) {
      let str2 = "Miles per hour";
      if ("M" !== joined) {
        let str4 = "Unknown";
        if ("N" === joined) {
          str4 = "Knots";
        }
        str2 = str4;
      }
      str = str2;
    }
    return str;
  }
};
obj[14] = {
  name: "GPSTrackRef",
  description(join) {
    const joined = join.join("");
    let str = "True direction";
    if ("T" !== joined) {
      let str2 = "Unknown";
      if ("M" === joined) {
        str2 = "Magnetic direction";
      }
      str = str2;
    }
    return str;
  }
};
obj[16] = {
  name: "GPSImgDirectionRef",
  description(join) {
    const joined = join.join("");
    let str = "True direction";
    if ("T" !== joined) {
      let str2 = "Unknown";
      if ("M" === joined) {
        str2 = "Magnetic direction";
      }
      str = str2;
    }
    return str;
  }
};
obj[19] = {
  name: "GPSDestLatitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "North latitude";
    if ("N" !== joined) {
      let str2 = "Unknown";
      if ("S" === joined) {
        str2 = "South latitude";
      }
      str = str2;
    }
    return str;
  }
};
obj[20] = {
  name: "GPSDestLatitude",
  description(arg0) {
    return arg0[0][0] / arg0[0][1] + arg0[1][0] / arg0[1][1] / 60 + arg0[2][0] / arg0[2][1] / 3600;
  }
};
obj[21] = {
  name: "GPSDestLongitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "East longitude";
    if ("E" !== joined) {
      let str2 = "Unknown";
      if ("W" === joined) {
        str2 = "West longitude";
      }
      str = str2;
    }
    return str;
  }
};
obj[22] = {
  name: "GPSDestLongitude",
  description(arg0) {
    return arg0[0][0] / arg0[0][1] + arg0[1][0] / arg0[1][1] / 60 + arg0[2][0] / arg0[2][1] / 3600;
  }
};
obj[23] = {
  name: "GPSDestBearingRef",
  description(join) {
    const joined = join.join("");
    let str = "True direction";
    if ("T" !== joined) {
      let str2 = "Unknown";
      if ("M" === joined) {
        str2 = "Magnetic direction";
      }
      str = str2;
    }
    return str;
  }
};
obj[25] = {
  name: "GPSDestDistanceRef",
  description(join) {
    const joined = join.join("");
    let str = "Kilometers";
    if ("K" !== joined) {
      let str2 = "Miles";
      if ("M" !== joined) {
        let str4 = "Unknown";
        if ("N" === joined) {
          str4 = "Knots";
        }
        str2 = str4;
      }
      str = str2;
    }
    return str;
  }
};
const obj2 = { name: "GPSLongitude", description: require("getStringValue").getCalculatedGpsValue };
obj[27] = { name: "GPSProcessingMethod", description: require("getStringValue").getEncodedString };
const obj3 = { name: "GPSProcessingMethod", description: require("getStringValue").getEncodedString };
obj[28] = { name: "GPSAreaInformation", description: require("getStringValue").getEncodedString };
obj[30] = {
  name: "GPSDifferential",
  description(arg0) {
    let str = "Measurement without differential correction";
    if (0 !== arg0) {
      let str2 = "Unknown";
      if (1 === arg0) {
        str2 = "Differential correction applied";
      }
      str = str2;
    }
    return str;
  }
};
arg5.default = obj;