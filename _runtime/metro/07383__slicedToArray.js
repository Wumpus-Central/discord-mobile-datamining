// === Module 7383: _slicedToArray ===

// Module 7383 (_slicedToArray)
import _modDef7368 from "module_7368" /* 7368 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function calculateGPSValue(str) {
  let tmp2;
  const tmp = _slicedToArray(str.split(","), 2);
  [tmp2, str] = tmp;
  if (undefined !== tmp2) {
    if (undefined !== str) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(tmp2);
      const _parseFloat2 = parseFloat;
      const parsed1 = parseFloat(str);
      const _Number = Number;
      const charAtResult = str.charAt(str.length - 1);
      if (!Number.isNaN(parsed)) {
        const _Number2 = Number;
        if (!Number.isNaN(parsed1)) {
          return "" + (parsed + parsed1 / 60) + charAtResult;
        }
      }
    }
  }
  return str;
}

export default {
  "tiff:Orientation": (arg0) => {
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
  "tiff:ResolutionUnit": (match) => {
    const obj = _modDef7368;
    return obj.ResolutionUnit(parseInt(match, 10));
  },
  "tiff:XResolution": (str) => {
    const obj = /^-?\d+\/-?\d+$/;
    const XResolution = _modDef7368.XResolution;
    let XResolutionResult = str;
    if (obj.test(str)) {
      XResolutionResult = XResolution(str.split("/"));
    }
    return XResolutionResult;
  },
  "tiff:YResolution": (str) => {
    const obj = /^-?\d+\/-?\d+$/;
    const YResolution = _modDef7368.YResolution;
    let YResolutionResult = str;
    if (obj.test(str)) {
      YResolutionResult = YResolution(str.split("/"));
    }
    return YResolutionResult;
  },
  "exif:ApertureValue": (str) => {
    const obj = /^-?\d+\/-?\d+$/;
    const ApertureValue = _modDef7368.ApertureValue;
    let ApertureValueResult = str;
    if (obj.test(str)) {
      ApertureValueResult = ApertureValue(str.split("/"));
    }
    return ApertureValueResult;
  },
  "exif:GPSLatitude": calculateGPSValue,
  "exif:GPSLongitude": calculateGPSValue,
  "exif:FNumber": (str) => {
    const obj = /^-?\d+\/-?\d+$/;
    const FNumber = _modDef7368.FNumber;
    let FNumberResult = str;
    if (obj.test(str)) {
      FNumberResult = FNumber(str.split("/"));
    }
    return FNumberResult;
  },
  "exif:FocalLength": (str) => {
    const obj = /^-?\d+\/-?\d+$/;
    const FocalLength = _modDef7368.FocalLength;
    let FocalLengthResult = str;
    if (obj.test(str)) {
      FocalLengthResult = FocalLength(str.split("/"));
    }
    return FocalLengthResult;
  },
  "exif:FocalPlaneResolutionUnit": (match) => {
    const obj = _modDef7368;
    return obj.FocalPlaneResolutionUnit(parseInt(match, 10));
  },
  "exif:ColorSpace": (match) => {
    let parsed;
    const ColorSpace = _modDef7368.ColorSpace;
    _modDef7368;
    if ("0x" === match.substring(0, 2)) {
      const _parseInt2 = parseInt;
      parsed = parseInt(match.substring(2), 16);
    } else {
      const _parseInt = parseInt;
      parsed = parseInt(match, 10);
    }
    return ColorSpace(parsed);
  },
  "exif:ComponentsConfiguration": (arg0, str) => {
    const obj = /^\d, \d, \d, \d$/;
    if (obj.test(str)) {
      const parts = str.split(", ");
      const mapped = parts.map((item) => item.charCodeAt(0));
      const obj2 = _modDef7368;
      return obj2.ComponentsConfiguration(mapped);
    } else {
      return str;
    }
  },
  "exif:Contrast": (match) => {
    const obj = _modDef7368;
    return obj.Contrast(parseInt(match, 10));
  },
  "exif:CustomRendered": (match) => {
    const obj = _modDef7368;
    return obj.CustomRendered(parseInt(match, 10));
  },
  "exif:ExposureMode": (match) => {
    const obj = _modDef7368;
    return obj.ExposureMode(parseInt(match, 10));
  },
  "exif:ExposureProgram": (match) => {
    const obj = _modDef7368;
    return obj.ExposureProgram(parseInt(match, 10));
  },
  "exif:ExposureTime": (str) => {
    let ExposureTimeResult = str;
    const obj = /^-?\d+\/-?\d+$/;
    if (obj.test(str)) {
      const ExposureTime = _modDef7368.ExposureTime;
      _modDef7368;
      const parts = str.split("/");
      ExposureTimeResult = ExposureTime(parts.map((item) => parseInt(item, 10)));
    }
    return ExposureTimeResult;
  },
  "exif:MeteringMode": (match) => {
    const obj = _modDef7368;
    return obj.MeteringMode(parseInt(match, 10));
  },
  "exif:Saturation": (match) => {
    const obj = _modDef7368;
    return obj.Saturation(parseInt(match, 10));
  },
  "exif:SceneCaptureType": (match) => {
    const obj = _modDef7368;
    return obj.SceneCaptureType(parseInt(match, 10));
  },
  "exif:Sharpness": (match) => {
    const obj = _modDef7368;
    return obj.Sharpness(parseInt(match, 10));
  },
  "exif:ShutterSpeedValue": (str) => {
    const obj = /^-?\d+\/-?\d+$/;
    const ShutterSpeedValue = _modDef7368.ShutterSpeedValue;
    let ShutterSpeedValueResult = str;
    if (obj.test(str)) {
      ShutterSpeedValueResult = ShutterSpeedValue(str.split("/"));
    }
    return ShutterSpeedValueResult;
  },
  "exif:WhiteBalance": (match) => {
    const obj = _modDef7368;
    return obj.WhiteBalance(parseInt(match, 10));
  }
};