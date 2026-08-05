// _runtime/04935_calculateGPSValue.js
import _slicedToArray from "_slicedToArray";

function calculateGPSValue(str) {
  let tmp2;
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
  (joined) => importDefault(4920).ResolutionUnit(parseInt(joined, 10)),
  (str) => {
    let XResolutionResult = str;
    if (obj.test(str)) {
      XResolutionResult = importDefault(4920).XResolution(str.split("/"));
    }
    return XResolutionResult;
  },
  (str) => {
    let YResolutionResult = str;
    if (obj.test(str)) {
      YResolutionResult = importDefault(4920).YResolution(str.split("/"));
    }
    return YResolutionResult;
  },
  (str) => {
    let ApertureValueResult = str;
    if (obj.test(str)) {
      ApertureValueResult = importDefault(4920).ApertureValue(str.split("/"));
    }
    return ApertureValueResult;
  },
  "exif:GPSLatitude": calculateGPSValue,
  "exif:GPSLongitude": calculateGPSValue,
  (str) => {
    let FNumberResult = str;
    if (obj.test(str)) {
      FNumberResult = importDefault(4920).FNumber(str.split("/"));
    }
    return FNumberResult;
  },
  (str) => {
    let FocalLengthResult = str;
    if (obj.test(str)) {
      FocalLengthResult = importDefault(4920).FocalLength(str.split("/"));
    }
    return FocalLengthResult;
  },
  (joined) => importDefault(4920).FocalPlaneResolutionUnit(parseInt(joined, 10)),
  (joined) => {
    if ("0x" === joined.substring(0, 2)) {
      const _parseInt2 = parseInt;
      let parsed = parseInt(joined.substring(2), 16);
    } else {
      const _parseInt = parseInt;
      parsed = parseInt(joined, 10);
    }
    return importDefault(4920).ColorSpace(parsed);
  },
  (arg0, str) => {
    if (obj.test(str)) {
      const parts = str.split(", ");
      const mapped = parts.map((str) => str.charCodeAt(0));
      return importDefault(4920).ComponentsConfiguration(mapped);
    } else {
      return str;
    }
    obj = /^\d, \d, \d, \d$/;
  },
  (joined) => importDefault(4920).Contrast(parseInt(joined, 10)),
  (joined) => importDefault(4920).CustomRendered(parseInt(joined, 10)),
  (joined) => importDefault(4920).ExposureMode(parseInt(joined, 10)),
  (joined) => importDefault(4920).ExposureProgram(parseInt(joined, 10)),
  (str) => {
    let ExposureTimeResult = str;
    if (obj.test(str)) {
      const parts = str.split("/");
      ExposureTimeResult = importDefault(4920).ExposureTime(parts.map((joined) => parseInt(joined, 10)));
      const obj2 = importDefault(4920);
    }
    return ExposureTimeResult;
  },
  (joined) => importDefault(4920).MeteringMode(parseInt(joined, 10)),
  (joined) => importDefault(4920).Saturation(parseInt(joined, 10)),
  (joined) => importDefault(4920).SceneCaptureType(parseInt(joined, 10)),
  (joined) => importDefault(4920).Sharpness(parseInt(joined, 10)),
  (str) => {
    let ShutterSpeedValueResult = str;
    if (obj.test(str)) {
      ShutterSpeedValueResult = importDefault(4920).ShutterSpeedValue(str.split("/"));
    }
    return ShutterSpeedValueResult;
  },
  (joined) => importDefault(4920).WhiteBalance(parseInt(joined, 10))
};