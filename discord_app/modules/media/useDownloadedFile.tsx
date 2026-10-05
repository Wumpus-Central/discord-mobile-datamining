// discord_app/modules/media/useDownloadedFile.tsx
import intl2 from "../../intl/index.native.tsx";
import FileSizeUtils from "../../utils/FileSizeUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import size from "../../../_runtime/metro/00002__.js";

let c0, c8, c9, closure_3, closure_4;

let c5 = "utf-8";
const result = size.fileFinishedImporting("modules/media/useDownloadedFile.tsx");

export const getBytesLeftNotice = function getBytesLeftNotice(bytesLeft) {
  let obj2;
  let str = "";
  if (bytesLeft > 0) {
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { formattedBytes: obj2.formatKbSize(bytesLeft) };
    const prop = intl2.t["1+gGcK"];
    const _HermesInternal = HermesInternal;
    obj2 = FileSizeUtils;
    str = "... " + formatToPlainString(prop, obj);
  }
  return str;
};
export const useDownloadedFile = function useDownloadedFile(url, arg1) {
  let bytesLeft;
  let closure_2;
  let fileContents;
  let hadError;
  let closure_0 = url;
  let closure_1 = arg1;
  [hadError, closure_2] = react.useState(false);
  [fileContents, _slicedToArray] = react.useState(null);
  [bytesLeft, react] = react.useState(1);
  const items = [url, arg1];
  const effect = react.useEffect(() => {
    function download() {
      return obj(...arguments);
    }
    let obj = function _download() {
      obj = _asyncToGenerator(async () => {
        let value;
        function getDecoder(c1) {
          let first;
          if (c1 != null) {
            const parts = c1.split("charset=");
            first = parts.slice(-1)[0];
          }
          if (first == null) {
            first = closure_1_5;
          }
          try {
            const _TextDecoder = TextDecoder;
            const self = this;
            const self2 = this;
            const textDecoder = new TextDecoder(first);
            return textDecoder;
          } catch (tmp6) {
            let startsWithResult;
            if (c1 != null) {
              startsWithResult = c1.startsWith("text");
            }
            if (!startsWithResult) {
              const formatted = first.toLowerCase();
              if (!formatted.includes("utf")) {
                throw tmp6;
              }
            }
            const _TextDecoder2 = TextDecoder;
            const self3 = this;
            const self4 = this;
            const textDecoder1 = new TextDecoder(closure_1_5);
            return textDecoder1;
          }
        }
        if (c9 === 2) {
          c9 = 3;
          const str = "Generator functions may not be called on executing generators";
          throw new TypeError("Generator functions may not be called on executing generators");
        } else {
          const str2 = "/";
          const str3 = "1";
          if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c6;
            try {
              let v0;
              let decode;
              let decode2;
              let closure_5;
              let num2;
              let substr;
              c9 = 2;
              if (0 === c8) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  v0 = undefined;
                  decode = undefined;
                  decode2 = undefined;
                  closure_3 = undefined;
                  closure_4 = undefined;
                  closure_5 = undefined;
                  num2 = undefined;
                  substr = undefined;
                  c6 = 1;
                  const _fetch = fetch;
                  const obj4 = { headers: { Range: "bytes=0-50000", Accept: "text/plain" } };
                  c8 = 2;
                  c9 = 1;
                  const obj5 = { value: fetch(c0, obj4), done: false };
                  return obj5;
                }
              } else {
                if (1 === c8) {
                  c6 = 0;
                  closure_4(0);
                  decode(true);
                } else if (2 === c8) {
                  if (arg0 === 1) {
                    c9 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 0;
                    c9 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    v0 = value;
                    decode = getDecoder(c1);
                    closure_3 = decode;
                    decode = decode.decode;
                    c8 = 3;
                    c9 = 1;
                    const obj7 = { value: v0.arrayBuffer(), done: false };
                    return obj7;
                  }
                } else if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c9 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                } else {
                  decode2 = decode(value);
                  const headers2 = v0.headers;
                  value = headers2.get("content-range");
                  c0 = value;
                  if (value == null) {
                    c0 = "0";
                  }
                  const tmp6 = c0;
                  closure_3 = c0;
                  const headers = v0.headers;
                  const value2 = headers.get("content-length");
                  c1 = value2;
                  if (value2 == null) {
                    c1 = "1";
                  }
                  closure_4 = c1;
                  const _parseInt = parseInt;
                  closure_5 = parseInt(closure_3.split("/")[1]);
                  const _Number = Number;
                  num2 = 0;
                  if (!Number.isNaN(closure_5)) {
                    const _parseInt2 = parseInt;
                    num2 = closure_5 - parseInt(closure_4);
                  }
                  if (0 === num2) {
                    substr = decode2;
                  } else {
                    substr = decode2.slice(0, -1);
                  }
                  obj = closure_2_0(closure_2_1[5]);
                  closure_3(obj.sanitizeWhitespaceExcludingTabs(substr));
                  closure_4(num2);
                  decode(false);
                  c6 = 0;
                }
                c9 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp44) {
              let closure_7 = tmp44;
              if (0 === c6) {
                c9 = 3;
                throw tmp44;
              } else {
                c8 = 1;
              }
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !download();
  }, items);
  return { fileContents, bytesLeft, hadError };
};
