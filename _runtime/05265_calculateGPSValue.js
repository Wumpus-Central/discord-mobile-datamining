// === Module 5265: calculateGPSValue ===

// Module 5265 (calculateGPSValue)
import _modDef5250 from "module_5250" /* 5250 */;
import _slicedToArray from "module_32" /* 32 */;

function calculateGPSValue(str) {
  [tmp2, str] = _slicedToArray(str.split(","), 2);
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
  (match) => _modDef5250.ResolutionUnit(parseInt(match, 10)),
  (str) => {
    let XResolutionResult = str;
    if (obj.test(str)) {
      XResolutionResult = _modDef5250.XResolution(str.split("/"));
    }
    return XResolutionResult;
  },
  (str) => {
    let YResolutionResult = str;
    if (obj.test(str)) {
      YResolutionResult = _modDef5250.YResolution(str.split("/"));
    }
    return YResolutionResult;
  },
  (str) => {
    let ApertureValueResult = str;
    if (obj.test(str)) {
      ApertureValueResult = _modDef5250.ApertureValue(str.split("/"));
    }
    return ApertureValueResult;
  },
  "exif:GPSLatitude": calculateGPSValue,
  "exif:GPSLongitude": calculateGPSValue,
  (str) => {
    let FNumberResult = str;
    if (obj.test(str)) {
      FNumberResult = _modDef5250.FNumber(str.split("/"));
    }
    return FNumberResult;
  },
  (str) => {
    let FocalLengthResult = str;
    if (obj.test(str)) {
      FocalLengthResult = _modDef5250.FocalLength(str.split("/"));
    }
    return FocalLengthResult;
  },
  (match) => _modDef5250.FocalPlaneResolutionUnit(parseInt(match, 10)),
  (match) => {
    if ("0x" === match.substring(0, 2)) {
      const _parseInt2 = parseInt;
      let parsed = parseInt(match.substring(2), 16);
    } else {
      const _parseInt = parseInt;
      parsed = parseInt(match, 10);
    }
    return _modDef5250.ColorSpace(parsed);
  },
  (arg0, str) => {
    if (obj.test(str)) {
      const parts = str.split(", ");
      const mapped = parts.map((item) => item.charCodeAt(0));
      return _modDef5250.ComponentsConfiguration(mapped);
    } else {
      return str;
    }
    obj = /^\d, \d, \d, \d$/;
  },
  (match) => _modDef5250.Contrast(parseInt(match, 10)),
  (match) => _modDef5250.CustomRendered(parseInt(match, 10)),
  (match) => _modDef5250.ExposureMode(parseInt(match, 10)),
  (match) => _modDef5250.ExposureProgram(parseInt(match, 10)),
  (str) => {
    let ExposureTimeResult = str;
    if (obj.test(str)) {
      const parts = str.split("/");
      ExposureTimeResult = _modDef5250.ExposureTime(parts.map((item) => parseInt(item, 10)));
    }
    return ExposureTimeResult;
  },
  (match) => _modDef5250.MeteringMode(parseInt(match, 10)),
  (match) => _modDef5250.Saturation(parseInt(match, 10)),
  (match) => _modDef5250.SceneCaptureType(parseInt(match, 10)),
  (match) => _modDef5250.Sharpness(parseInt(match, 10)),
  (str) => {
    let ShutterSpeedValueResult = str;
    if (obj.test(str)) {
      ShutterSpeedValueResult = _modDef5250.ShutterSpeedValue(str.split("/"));
    }
    return ShutterSpeedValueResult;
  },
  (match) => _modDef5250.WhiteBalance(parseInt(match, 10))
};