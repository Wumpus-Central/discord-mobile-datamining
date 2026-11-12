// _runtime/metro/09011__.js
const require = globalThis.__r;

function loadOptionalTextCodec() {
  try {
    const _Function = Function;
    const _function = new Function("mod", "return require(mod);");
    return _function("react-native-nitro-text-decoder");
  } catch (err) {
    return {};
  }
}
if (typeof TextEncoder !== "undefined") {
  let _TextEncoder = TextEncoder;
} else {
  _TextEncoder = loadOptionalTextCodec().TextEncoder;
}
if (typeof TextDecoder !== "undefined") {
  let _TextDecoder = TextDecoder;
} else {
  _TextDecoder = loadOptionalTextCodec().TextDecoder;
}

export function stringToUTF8(_body) {
  if (_TextEncoder) {
    const encoder = new tmp();
    let encodeResult = encoder.encode(_body);
  } else {
    const _console = console;
    console.warn("stringToUTF8: TextEncoder not available. Install react-native-nitro-text-decoder.");
    const _Uint8Array = Uint8Array;
    encodeResult = new Uint8Array(0);
  }
  return encodeResult;
}
export function utf8Length(substr) {
  let diff;
  let tmp2;
  if (_TextEncoder) {
    tmp2 = new tmp();
  }
  let encodeInto;
  if (tmp2 != null) {
    encodeInto = tmp2.encodeInto;
  }
  if (typeof encodeInto === "function") {
    const _Uint8Array = Uint8Array;
    const _Math = Math;
    const uint8Array = new Uint8Array(3 * Math.min(substr.length, 65536));
    let num10 = 0;
    let num11 = 0;
    let num12 = 0;
    if (0 < substr.length) {
      do {
        let _Math2 = Math;
        let bound = Math.min(num10 + 65536, substr.length);
        let charCodeAtResult = substr.charCodeAt(bound - 1);
        let tmp20 = bound < substr.length;
        if (tmp20) {
          tmp20 = charCodeAtResult >= 55296;
        }
        if (tmp20) {
          tmp20 = charCodeAtResult <= 56319;
        }
        diff = bound;
        if (tmp20) {
          diff = bound - 1;
        }
        num11 = num11 + tmp2.encodeInto(substr.slice(num10, diff), uint8Array).written;
        num10 = diff;
        num12 = num11;
      } while (diff < substr.length);
    }
    return num12;
  } else {
    let num3 = 0;
    let num = 0;
    let num2 = 0;
    if (0 < substr.length) {
      do {
        let charCodeAtResult1 = substr.charCodeAt(num);
        if (charCodeAtResult1 < 128) {
          let sum = num2 + 1;
          let tmp10 = num;
        } else if (charCodeAtResult1 < 2048) {
          sum = num2 + 2;
          tmp10 = num;
        } else {
          if (charCodeAtResult1 >= 55296) {
            if (charCodeAtResult1 <= 56319) {
              let sum1 = num + 1;
              let charCodeAtResult2 = substr.charCodeAt(sum1);
              if (charCodeAtResult2 >= 56320) {
                if (charCodeAtResult2 <= 57343) {
                  sum = num2 + 4;
                  tmp10 = sum1;
                }
              }
              sum = num2 + 3;
              tmp10 = num;
            }
          }
          sum = num2 + 3;
          tmp10 = num;
        }
        num = tmp10 + 1;
        num2 = sum;
        num3 = sum;
      } while (num < substr.length);
    }
    return num3;
  }
}
export function utf8ToString(uint8Array) {
  if (_TextDecoder) {
    const decoder = new tmp();
    let str2 = decoder.decode(uint8Array);
  } else {
    const _console = console;
    console.warn("utf8ToString: TextDecoder not available. Install react-native-nitro-text-decoder.");
    str2 = "";
  }
  return str2;
}
