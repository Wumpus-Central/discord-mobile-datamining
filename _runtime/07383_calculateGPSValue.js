// === Module 7383: calculateGPSValue ===

// Module 7383 (calculateGPSValue)
import _modDef7368 from "module_7368" /* 7368 */;
import _slicedToArray from "module_32" /* 32 */;

function calculateGPSValue(str) {
  [tmp2, str] = str.split(",");
  if (undefined !== tmp2) {
    if (undefined !== str) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(tmp2);
      const _parseFloat2 = parseFloat;
      const parsed1 = parseFloat(str);
      const _Number = Number;
      if (!Number.isNaN(parsed)) {
        const _Number2 = Number;
        if (!Number.isNaN(parsed1)) {
          return "" + (parsed + parsed1 / 60) + charAtResult;
        }
      }
      charAtResult = str.charAt(str.length - 1);
    }
  }
  return str;
}

export default {
  (arg0) => {
    let str = "Horizontal (normal)";
    if ("1" !== arg0) {
      let str14 = "Mirror horizontal";
      if ("2" !== arg0) {
        let str2 = "Rotate 180";
        if ("3" !== arg0) {
          let str4 = "Mirror vertical";
          if ("4" !== arg0) {
            let str6 = "Mirror horizontal and rotate 270 CW";
            if ("5" !== arg0) {
              let str8 = "Rotate 90 CW";
              if ("6" !== arg0) {
                let str10 = "Mirror horizontal and rotate 90 CW";
                if ("7" !== arg0) {
                  let str12 = "Rotate 270 CW";
                  if ("8" !== arg0) {
                    str12 = arg0;
                  }
                  str10 = str12;
                }
                str8 = str10;
              }
              str6 = str8;
            }
            str4 = str6;
          }
          str2 = str4;
        }
        str14 = str2;
      }
      str = str14;
    }
    return str;
  },
  (match) => _modDef7368.ResolutionUnit(parseInt(match, 10)),
  (str) => {
    let XResolutionResult = str;
    if (obj.test(str)) {
      XResolutionResult = _modDef7368.XResolution(str.split("/"));
    }
    return XResolutionResult;
  },
  (str) => {
    let YResolutionResult = str;
    if (obj.test(str)) {
      YResolutionResult = _modDef7368.YResolution(str.split("/"));
    }
    return YResolutionResult;
  },
  (str) => {
    let ApertureValueResult = str;
    if (obj.test(str)) {
      ApertureValueResult = _modDef7368.ApertureValue(str.split("/"));
    }
    return ApertureValueResult;
  },
  "exif:GPSLatitude": calculateGPSValue,
  "exif:GPSLongitude": calculateGPSValue,
  (str) => {
    let FNumberResult = str;
    if (obj.test(str)) {
      FNumberResult = _modDef7368.FNumber(str.split("/"));
    }
    return FNumberResult;
  },
  (str) => {
    let FocalLengthResult = str;
    if (obj.test(str)) {
      FocalLengthResult = _modDef7368.FocalLength(str.split("/"));
    }
    return FocalLengthResult;
  },
  (match) => _modDef7368.FocalPlaneResolutionUnit(parseInt(match, 10)),
  (match) => {
    if ("0x" === match.substring(0, 2)) {
      const _parseInt2 = parseInt;
      let parsed = parseInt(match.substring(2), 16);
    } else {
      const _parseInt = parseInt;
      parsed = parseInt(match, 10);
    }
    return _modDef7368.ColorSpace(parsed);
  },
  (arg0, str) => {
    if (obj.test(str)) {
      const parts = str.split(", ");
      const mapped = parts.map((item) => item.charCodeAt(0));
      return _modDef7368.ComponentsConfiguration(mapped);
    } else {
      return str;
    }
    obj = /^\d, \d, \d, \d$/;
  },
  (match) => _modDef7368.Contrast(parseInt(match, 10)),
  (match) => _modDef7368.CustomRendered(parseInt(match, 10)),
  (match) => _modDef7368.ExposureMode(parseInt(match, 10)),
  (match) => _modDef7368.ExposureProgram(parseInt(match, 10)),
  (str) => {
    let ExposureTimeResult = str;
    if (obj.test(str)) {
      const parts = str.split("/");
      ExposureTimeResult = _modDef7368.ExposureTime(parts.map((item) => parseInt(item, 10)));
    }
    return ExposureTimeResult;
  },
  (match) => _modDef7368.MeteringMode(parseInt(match, 10)),
  (match) => _modDef7368.Saturation(parseInt(match, 10)),
  (match) => _modDef7368.SceneCaptureType(parseInt(match, 10)),
  (match) => _modDef7368.Sharpness(parseInt(match, 10)),
  (str) => {
    let ShutterSpeedValueResult = str;
    if (obj.test(str)) {
      ShutterSpeedValueResult = _modDef7368.ShutterSpeedValue(str.split("/"));
    }
    return ShutterSpeedValueResult;
  },
  (match) => _modDef7368.WhiteBalance(parseInt(match, 10))
};