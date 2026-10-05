// === Module 14950: VttParser ===

// Module 14950 (VttParser)
import size from "module_2" /* 2 */;

let closure_0;

class VttParserError extends Error {
  constructor(arg0, error) {
    const tmp2 = new tmp(arg0, new.target);
    tmp2.error = error;
    tmp2.name = "ParserError";
    return tmp2;
  }
}
const re1 = /([0-9]+)?:?([0-9]{2}):([0-9]{2}\.[0-9]{2,3})/;
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VttParser.tsx");

export { VttParserError };
export const parseVtt = function parseVtt(text) {
  let tmp;
  let tmp11;
  let tmp2;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const meta = obj.meta;
  let tmp4 = undefined !== meta && meta;
  const strict = obj.strict;
  const tmp5 = undefined === strict || strict;
  let str = text.trim();
  let str2 = str.replace(/\r\n/g, "\n");
  const str3 = str2.replace(/\r/g, "\n");
  let parts = str3.split("\n\n");
  const str4 = parts.shift();
  if (str4.startsWith("WEBVTT")) {
    let parts1 = str4.split("\n");
    const str7 = parts1[0];
    const replaced = str7.replace("WEBVTT", "");
    let str9 = replaced.length;
    let num = 0;
    if (str9 > 0) {
      let first = replaced[0];
      str9 = " ";
      if (" " !== first) {
        let str10 = "\t";
        if ("\t" !== replaced[0]) {
          let self7 = this;
          if (typeof closure_0 === "function") {
            let self8 = this;
            let str13 = "Header comment must start with space or tab";
            let self9 = this;
            let tmp52 = new tmp5("Header comment must start with space or tab", tmp3, parts1, tmp2, tmp, first);
            tmp52.error = undefined;
            let str14 = "ParserError";
            tmp52.name = "ParserError";
            throw tmp52;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
    if (0 === parts.length) {
      if (1 === parts1.length) {
        let obj2 = { valid: true, strict: tmp5, cues: [], errors: [] };
        return obj2;
      }
    }
    if (!tmp4) {
      let num3 = 1;
      if (parts1.length > 1) {
        if ("" !== parts1[1]) {
          let self4 = this;
          if (typeof closure_0 === "function") {
            let self5 = this;
            let str11 = "Missing blank line after signature";
            let self6 = this;
            const str91 = new str9("Missing blank line after signature", tmp3, parts1, tmp2, tmp, tmp11, parts, str9, tmp4, this);
            str91.error = undefined;
            let str12 = "ParserError";
            str91.name = "ParserError";
            throw str91;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
    closure_0 = tmp5;
    const items = [];
    const mapped = parts.map((item, index) => {
      let regex;
      function parseCue(item, index, arg2) {
        const parts = item.split("\n");
        const found = parts.filter(Boolean);
        let length = found.length;
        if (length > 0) {
          const str = found[0];
          const trimmed = str.trim();
          length = trimmed.startsWith("NOTE");
          if (length) {
            return null;
          }
        }
        if (1 === found.length) {
          const first = found[0];
          if (!first.includes("-->")) {
            const _HermesInternal = HermesInternal;
            const combined = "Cue identifier cannot be standalone (cue #" + index + ")";
            const self = this;
            if (typeof closure_1_0 === "function") {
              const self2 = this;
              const self3 = this;
              const tmp11 = new closure_1_2(combined, tmp6, tmp5, tmp4, tmp3, tmp2, "\n", tmp, closure_1_0, combined, 0, index);
              tmp11.error = undefined;
              tmp11.name = "ParserError";
              throw tmp11;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        if (found.length > 1) {
          const first1 = found[0];
          if (!first1.includes("-->")) {
            const obj2 = found[1];
            if (!obj2.includes("-->")) {
              const _HermesInternal2 = HermesInternal;
              const combined1 = "Cue identifier needs to be followed by timestamp (cue #" + index + ")";
              const self4 = this;
              if (typeof closure_1_0 === "function") {
                const self5 = this;
                const self6 = this;
                const tmp17 = new closure_1_2(combined1, tmp6, tmp5, tmp4, tmp3, tmp2, "\n", tmp, closure_1_0, combined1, 0, index);
                tmp17.error = undefined;
                tmp17.name = "ParserError";
                throw tmp17;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
        let hasItem = found.length > 1;
        if (hasItem) {
          const obj3 = found[1];
          hasItem = obj3.includes("-->");
        }
        let str10 = "";
        if (hasItem) {
          str10 = found.shift();
        }
        const str11 = found[0];
        const parts1 = str11.split(" --> ");
        if (2 === parts1.length) {
          if (regex.test(parts1[0])) {
            if (regex.test(parts1[1])) {
              let _parseFloat2;
              const str12 = parts1[0];
              const match = str12.match(regex);
              let num = 0;
              if (null != match) {
                let str13 = match[1];
                const _parseFloat = parseFloat;
                if (str13 == null) {
                  str13 = "0";
                }
                _parseFloat2 = parseFloat;
                const result = 60 * _parseFloat(str13);
                const _parseFloat3 = parseFloat;
                const result1 = 60 * parseFloat(match[2]);
                num = result * 60 + result1 + parseFloat(match[3]);
              }
              let str14 = parts1[1];
              const match1 = str14.match(regex);
              let num3 = 0;
              if (null != match1) {
                let str15 = match1[1];
                const _parseFloat4 = parseFloat;
                if (str15 == null) {
                  str15 = "0";
                }
                _parseFloat2 = parseFloat;
                const result2 = 60 * _parseFloat4(str15);
                str14 = parseFloat;
                const result3 = 60 * parseFloat(match1[2]);
                num3 = result2 * 60 + result3 + parseFloat(match1[3]);
              }
              const tmp28 = arg2;
              if (tmp28) {
                if (num > num3) {
                  const _HermesInternal5 = HermesInternal;
                  const combined2 = "Start timestamp greater than end (cue #" + index + ")";
                  const self13 = this;
                  if (typeof closure_1_0 === "function") {
                    const self14 = this;
                    const self15 = this;
                    const tmp47 = new closure_1_2(combined2, tmp6, tmp5, _parseFloat2, str14, regex, "\n", "", str10, num);
                    tmp47.error = undefined;
                    tmp47.name = "ParserError";
                    throw tmp47;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else if (num3 <= num) {
                  const _HermesInternal4 = HermesInternal;
                  const combined3 = "End must be greater than start (cue #" + index + ")";
                  const self10 = this;
                  if (typeof closure_1_0 === "function") {
                    const self11 = this;
                    const self12 = this;
                    const tmp41 = new closure_1_2(combined3, tmp6, tmp5, _parseFloat2, str14, regex, "\n", "", str10, num);
                    tmp41.error = undefined;
                    tmp41.name = "ParserError";
                    throw tmp41;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
              if (!arg2) {
                if (num3 < num) {
                  const _HermesInternal3 = HermesInternal;
                  const combined4 = "End must be greater or equal to start when not strict (cue #" + index + ")";
                  const self7 = this;
                  if (typeof closure_1_0 === "function") {
                    const self8 = this;
                    const self9 = this;
                    const tmp33 = new closure_1_2(combined4, tmp6, closure_1_0, combined4, this, regex, "\n", "", str10, num, num3, index, found, closure_1_2, parts1, globalThis, length, null == match1);
                    tmp33.error = undefined;
                    tmp33.name = "ParserError";
                    throw tmp33;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
              const str19 = parts1[1];
              const str20 = str19.replace(regex, "");
              const trimmed1 = str20.trim();
              found.shift();
              const str21 = found.join("\n");
              if ("" === str21.trim()) {
                return false;
              } else {
                return { identifier: str10, start: num, end: num3, text: str21, styles: trimmed1 };
              }
            }
          }
        }
        const combined5 = "Invalid cue timestamp (cue #" + index + ")";
        if (typeof closure_1_0 === "function") {
          const self16 = this;
          const self17 = this;
          const tmp52 = new closure_1_2(combined5, tmp6, tmp5, tmp4, tmp3, regex, "\n");
          tmp52.error = undefined;
          tmp52.name = "ParserError";
          throw tmp52;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      try {
        const tmp = item;
        const tmp2 = index;
        let num = 0;
        return parseCue(item, index, closure_0);
      } catch (tmp4) {
        items.push(tmp4);
        return null;
      }
    });
    let found = mapped.filter((item) => null !== item && false !== item);
    if (tmp5) {
      if (items.length > 0) {
        throw items[0];
      }
    }
    let tmp16 = null;
    if (tmp4) {
      let obj3 = {};
      const substr = parts1.slice(1);
      const item = substr.forEach((arr) => {
        const index = arr.indexOf(":");
        const str = arr.slice(0, index);
        const trimmed = str.trim();
        const str2 = arr.slice(index + 1);
        obj3[trimmed] = str2.trim();
      });
      const _Object = Object;
      let tmp19 = null;
      if (Object.keys(obj3).length > 0) {
        tmp19 = obj3;
      }
      tmp16 = tmp19;
    }
    const obj4 = { valid: 0 === items.length, strict: tmp5, cues: found, errors: items };
    if (tmp4) {
      tmp4 = { meta: tmp16 };
      const obj5 = { meta: tmp16 };
    }
    const merged = Object.assign(tmp4);
    return obj4;
  } else {
    let self = this;
    if (typeof closure_0 === "function") {
      let self2 = this;
      let self3 = this;
      const tmp22 = new tmp2("Must start with \"WEBVTT\"", tmp3, tmp6, tmp2, this, "WEBVTT", parts, "\n", tmp4, str4, tmp5, VttParserError, strict);
      tmp22.error = undefined;
      tmp22.name = "ParserError";
      throw tmp22;
    } else {
      let str15 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
};