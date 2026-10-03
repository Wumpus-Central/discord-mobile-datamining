// discord_app/modules/media/useDownloadedFile.tsx
import util from "../../intl/index.native.tsx";
import FileSizeUtils from "../../utils/FileSizeUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
let c5 = "utf-8";
const size = fn(2);
const result = size.fileFinishedImporting("modules/media/useDownloadedFile.tsx");

export const getBytesLeftNotice = function getBytesLeftNotice(bytesLeft) {
  let str = "";
  if (bytesLeft > 0) {
    const intl = util.intl;
    const obj = { formattedBytes: FileSizeUtils.formatKbSize(bytesLeft) };
    const _HermesInternal = HermesInternal;
    str = "... " + intl.formatToPlainString(util.t["1+gGcK"], obj);
  }
  return str;
};
export const useDownloadedFile = function useDownloadedFile(url, arg1) {
  dependencyMap = arg1;
  const hadError = _slicedToArray(noop.useState(false), 2);
  closure_2 = hadError[1];
  const fileContents = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = fileContents[1];
  const bytesLeft = _slicedToArray(noop.useState(1), 2);
  noop = bytesLeft[1];
  const items = [url, arg1];
  const effect = noop.useEffect(() => {
    closure_0 = async function _download() {
      closure_5 = tmp3;
      const _fetch = fetch;
      await fetch(c0, { headers: { Range: "bytes=0-50000", Accept: "text/plain" } });
      if (1 === tmp7) {
        c6 = 0;
        closure_4(0);
        decode(true);
        c9 = 3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c9 = 3;
          return { value, done: true };
        } else {
          closure_132_0 = value;
          closure_132_1 = (function getDecoder(c1) {
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
              const textDecoder = new TextDecoder(first);
              return textDecoder;
            } catch (tmp9) {
              let startsWithResult;
              if (obj != tmp) {
                startsWithResult = obj.startsWith("text");
              }
              if (!startsWithResult) {
                const formatted = str.toLowerCase();
                if (!formatted.includes("utf")) {
                  throw tmp9;
                }
              }
              const _TextDecoder2 = TextDecoder;
              const textDecoder1 = new TextDecoder(closure_1_5);
              return textDecoder1;
            }
          })(c1);
          closure_3 = closure_132_1;
          decode = closure_132_1.decode;
          c8 = 3;
          c9 = 1;
          return { value: closure_132_0.arrayBuffer(), done: false };
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_132_2 = decode(value);
        const headers2 = closure_132_0.headers;
        value = headers2.get("content-range");
        c0 = value;
        if (value == null) {
          c0 = "0";
        }
        closure_132_3 = c0;
        const headers = closure_132_0.headers;
        value2 = headers.get("content-length");
        c1 = value2;
        if (value2 == null) {
          c1 = "1";
        }
        closure_132_4 = c1;
        const _parseInt = parseInt;
        closure_132_5 = parseInt(closure_132_3.split("/")[1]);
        const _Number = Number;
        let num2 = 0;
        if (!Number.isNaN(closure_132_5)) {
          const _parseInt2 = parseInt;
          num2 = closure_132_5 - parseInt(closure_132_4);
        }
        closure_132_6 = num2;
        if (0 === closure_132_6) {
          let substr = closure_132_2;
        } else {
          substr = closure_132_2.slice(0, -1);
        }
        closure_132_7 = substr;
        closure_3(url(dependencyMap[5]).sanitizeWhitespaceExcludingTabs(closure_132_7));
        closure_4(closure_132_6);
        decode(false);
        c6 = 0;
        url(dependencyMap[5]);
      }
      return value;
    };
    !(function download() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items);
  return { fileContents: fileContents[0], bytesLeft: bytesLeft[0], hadError: hadError[0] };
};
