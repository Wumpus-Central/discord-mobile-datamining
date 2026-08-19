// _runtime/04948_calculateGPSValue.js
import _modDef4933 from "metro/04933__.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

function calculateGPSValue(str) {
  [tmp2, str] = callback(str.split(","), 2);
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
  (match) => _modDef4933.ResolutionUnit(parseInt(match, 10)),
  (str) => {
    let XResolutionResult = str;
    if (obj.test(str)) {
      XResolutionResult = _modDef4933.XResolution(str.split("/"));
    }
    return XResolutionResult;
  },
  (str) => {
    let YResolutionResult = str;
    if (obj.test(str)) {
      YResolutionResult = _modDef4933.YResolution(str.split("/"));
    }
    return YResolutionResult;
  },
  (str) => {
    let ApertureValueResult = str;
    if (obj.test(str)) {
      ApertureValueResult = _modDef4933.ApertureValue(str.split("/"));
    }
    return ApertureValueResult;
  },
  "exif:GPSLatitude": calculateGPSValue,
  "exif:GPSLongitude": calculateGPSValue,
  (str) => {
    let FNumberResult = str;
    if (obj.test(str)) {
      FNumberResult = _modDef4933.FNumber(str.split("/"));
    }
    return FNumberResult;
  },
  (str) => {
    let FocalLengthResult = str;
    if (obj.test(str)) {
      FocalLengthResult = _modDef4933.FocalLength(str.split("/"));
    }
    return FocalLengthResult;
  },
  (match) => _modDef4933.FocalPlaneResolutionUnit(parseInt(match, 10)),
  (match) => {
    if ("0x" === match.substring(0, 2)) {
      const _parseInt2 = parseInt;
      let parsed = parseInt(match.substring(2), 16);
    } else {
      const _parseInt = parseInt;
      parsed = parseInt(match, 10);
    }
    return _modDef4933.ColorSpace(parsed);
  },
  (arg0, str) => {
    if (obj.test(str)) {
      const parts = str.split(", ");
      const mapped = parts.map((item, index) => item.charCodeAt(0));
      return _modDef4933.ComponentsConfiguration(mapped);
    } else {
      return str;
    }
    obj = /^\d, \d, \d, \d$/;
  },
  (match) => _modDef4933.Contrast(parseInt(match, 10)),
  (match) => _modDef4933.CustomRendered(parseInt(match, 10)),
  (match) => _modDef4933.ExposureMode(parseInt(match, 10)),
  (match) => _modDef4933.ExposureProgram(parseInt(match, 10)),
  (str) => {
    let ExposureTimeResult = str;
    if (obj.test(str)) {
      const parts = str.split("/");
      ExposureTimeResult = _modDef4933.ExposureTime(parts.map((item, index) => parseInt(item, 10)));
    }
    return ExposureTimeResult;
  },
  (match) => _modDef4933.MeteringMode(parseInt(match, 10)),
  (match) => _modDef4933.Saturation(parseInt(match, 10)),
  (match) => _modDef4933.SceneCaptureType(parseInt(match, 10)),
  (match) => _modDef4933.Sharpness(parseInt(match, 10)),
  (str) => {
    let ShutterSpeedValueResult = str;
    if (obj.test(str)) {
      ShutterSpeedValueResult = _modDef4933.ShutterSpeedValue(str.split("/"));
    }
    return ShutterSpeedValueResult;
  },
  (match) => _modDef4933.WhiteBalance(parseInt(match, 10))
};