const prototype = function VttParserError(arg0, error) {
  tmp = new tmp(arg0, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp.error = error;
  tmp.name = "ParserError";
  return tmp;
}.prototype;
class prototype extends Error {
}
const re1 = /([0-9]+)?:?([0-9]{2}):([0-9]{2}\.[0-9]{2,3})/;
let result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VttParser.tsx");

export const VttParserError = prototype;
export const parseVtt = function parseVtt(text) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const meta = obj.meta;
  let tmp4 = undefined !== meta && meta;
  const strict = obj.strict;
  let tmp5 = undefined === strict || strict;
  let str = text.trim();
  const str2 = text.trim().replace(/\r\n/g, "\n");
  let parts = text.trim().replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n\n");
  const str4 = parts.shift();
  if (str4.startsWith("WEBVTT")) {
    let parts1 = str4.split("\n");
    const replaced = parts1[0].replace("WEBVTT", "");
    let str9 = replaced.length;
    if (str9 > 0) {
      let first = replaced[0];
      str9 = " ";
      if (" " !== first) {
        if ("\t" !== replaced[0]) {
          if (typeof obj !== "function") {
            HermesBuiltin.throwTypeError();
          }
          tmp5 = new tmp5("Header comment must start with space or tab", tmp3, parts1, tmp2, tmp, first);
          // ThrowIfThisInitialized (0x7c)
          tmp5.error = undefined;
          tmp5.name = "ParserError";
          throw tmp5;
        }
      }
    }
    if (0 === parts.length) {
      if (1 === parts1.length) {
        obj = { valid: true, strict: null, cues: null, errors: null };
        obj[1] = tmp5;
        obj[2] = [];
        obj[3] = [];
        return obj;
      }
    }
    if (!tmp4) {
      if (parts1.length > 1) {
        if ("" !== parts1[1]) {
          if (typeof obj !== "function") {
            HermesBuiltin.throwTypeError();
          }
          str9 = new str9("Missing blank line after signature", tmp3, parts1, tmp2, tmp, obj, parts, str9, tmp4, new.target);
          // ThrowIfThisInitialized (0x7c)
          str9.error = undefined;
          str9.name = "ParserError";
          throw str9;
        }
      }
    }
    obj = tmp5;
    const items = [];
    const mapped = parts.map((arg0, arg1) => {
      try {
        return (function parseCue(str, arg1, arg2) {
          const parts = str.split("\n");
          const found = parts.filter(Boolean);
          let length = found.length;
          if (length > 0) {
            const trimmed = found[0].trim();
            length = trimmed.startsWith("NOTE");
            if (length) {
              return null;
            }
            str = found[0];
          }
          if (1 === found.length) {
            const first = found[0];
            if (!first.includes("-->")) {
              const _HermesInternal = HermesInternal;
              const combined = "Cue identifier cannot be standalone (cue #" + arg1 + ")";
              if (typeof closure_0 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              const tmp14 = new closure_2(combined, tmp6, tmp5, tmp4, tmp3, tmp2, "\n", tmp, closure_0, combined, 0, arg1);
              // ThrowIfThisInitialized (0x7c)
              tmp14.error = undefined;
              tmp14.name = "ParserError";
              throw tmp14;
            }
          }
          if (found.length > 1) {
            const first1 = found[0];
            if (!first1.includes("-->")) {
              if (!obj2.includes("-->")) {
                const _HermesInternal2 = HermesInternal;
                const combined1 = "Cue identifier needs to be followed by timestamp (cue #" + arg1 + ")";
                if (typeof closure_0 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const tmp23 = new closure_2(combined1, tmp6, tmp5, tmp4, tmp3, tmp2, "\n", tmp, closure_0, combined1, 0, arg1);
                // ThrowIfThisInitialized (0x7c)
                tmp23.error = undefined;
                tmp23.name = "ParserError";
                throw tmp23;
              }
              obj2 = found[1];
            }
          }
          let hasItem = found.length > 1;
          if (hasItem) {
            hasItem = found[1].includes("-->");
            const obj3 = found[1];
          }
          let str10 = "";
          if (hasItem) {
            str10 = found.shift();
          }
          const parts1 = found[0].split(" --> ");
          if (2 === parts1.length) {
            if (regex.test(parts1[0])) {
              if (obj7.test(parts1[1])) {
                const match = parts1[0].match(obj7);
                let num = 0;
                if (null != match) {
                  let str13 = match[1];
                  if (str13 == null) {
                    str13 = "0";
                  }
                  let _parseFloat = parseFloat;
                  const result = 60 * parseFloat(str13);
                  const _parseFloat2 = parseFloat;
                  const result1 = 60 * parseFloat(match[2]);
                  num = result * 60 + result1 + parseFloat(match[3]);
                }
                let str14 = parts1[1];
                const match1 = str14.match(obj7);
                let num3 = 0;
                if (null != match1) {
                  let str15 = match1[1];
                  if (str15 == null) {
                    str15 = "0";
                  }
                  _parseFloat = parseFloat;
                  const result2 = 60 * parseFloat(str15);
                  str14 = parseFloat;
                  const result3 = 60 * parseFloat(match1[2]);
                  num3 = result2 * 60 + result3 + parseFloat(match1[3]);
                }
                if (arg2) {
                  if (num > num3) {
                    const _HermesInternal5 = HermesInternal;
                    const combined2 = "Start timestamp greater than end (cue #" + arg1 + ")";
                    if (typeof closure_0 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const tmp62 = new closure_2(combined2, tmp6, tmp5, _parseFloat, str14, obj7, "\n", "", str10, num);
                    // ThrowIfThisInitialized (0x7c)
                    tmp62.error = undefined;
                    tmp62.name = "ParserError";
                    throw tmp62;
                  } else if (num3 <= num) {
                    const _HermesInternal4 = HermesInternal;
                    const combined3 = "End must be greater than start (cue #" + arg1 + ")";
                    if (typeof closure_0 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const tmp53 = new closure_2(combined3, tmp6, tmp5, _parseFloat, str14, obj7, "\n", "", str10, num);
                    // ThrowIfThisInitialized (0x7c)
                    tmp53.error = undefined;
                    tmp53.name = "ParserError";
                    throw tmp53;
                  }
                }
                if (!arg2) {
                  if (num3 < num) {
                    const _HermesInternal3 = HermesInternal;
                    const combined4 = "End must be greater or equal to start when not strict (cue #" + arg1 + ")";
                    if (typeof closure_0 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const tmp42 = new closure_2(combined4, tmp6, closure_0, combined4, new.target, obj7, "\n", "", str10, num, num3, arg1, found, closure_2, parts1, globalThis, length, tmp31);
                    // ThrowIfThisInitialized (0x7c)
                    tmp42.error = undefined;
                    tmp42.name = "ParserError";
                    throw tmp42;
                  }
                }
                const trimmed1 = parts1[1].replace(obj7, "").trim();
                found.shift();
                const str21 = found.join("\n");
                if ("" === str21.trim()) {
                  return false;
                } else {
                  const obj = { identifier: null, start: null, end: null, text: null, styles: null };
                  obj[0] = str10;
                  obj[1] = num;
                  obj[2] = num3;
                  obj[3] = str21;
                  obj[4] = trimmed1;
                  return obj;
                }
                const str12 = parts1[0];
                const str19 = parts1[1];
                const str20 = parts1[1].replace(obj7, "");
              }
            }
          }
          const combined5 = "Invalid cue timestamp (cue #" + arg1 + ")";
          if (typeof closure_0 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp65 = new closure_2(combined5, tmp6, tmp5, tmp4, tmp3, obj7, "\n");
          // ThrowIfThisInitialized (0x7c)
          tmp65.error = undefined;
          tmp65.name = "ParserError";
          throw tmp65;
        })(arg0, arg1, obj);
      } catch (tmp4) {
        items.push(tmp4);
        return null;
      }
    });
    let found = mapped.filter((arg0) => {
      let tmp = null !== arg0;
      if (tmp) {
        tmp = false !== arg0;
      }
      return tmp;
    });
    if (tmp5) {
      if (items.length > 0) {
        throw items[0];
      }
    }
    let tmp22 = null;
    if (tmp4) {
      obj = {};
      const substr = parts1.slice(1);
      const item = substr.forEach((arr) => {
        const index = arr.indexOf(":");
        const trimmed = arr.slice(0, index).trim();
        const str = arr.slice(0, index);
        obj[trimmed] = arr.slice(index + 1).trim();
      });
      const _Object = Object;
      let tmp25 = null;
      if (Object.keys(obj).length > 0) {
        tmp25 = obj;
      }
      tmp22 = tmp25;
    }
    const obj1 = { valid: null, strict: null, cues: null, errors: null };
    obj1[0] = 0 === items.length;
    obj1[1] = tmp5;
    obj1[2] = found;
    obj1[3] = items;
    if (tmp4) {
      let obj2 = { meta: null };
      obj2[0] = tmp22;
      tmp4 = obj2;
    }
    const merged = Object.assign(tmp4);
    return obj1;
  } else {
    if (typeof obj !== "function") {
      HermesBuiltin.throwTypeError();
    }
    tmp2 = new tmp2("Must start with \"WEBVTT\"", tmp3, obj, tmp2, new.target, "WEBVTT", parts, "\n", tmp4, str4, tmp5, prototype, strict);
    // ThrowIfThisInitialized (0x7c)
    tmp2.error = undefined;
    tmp2.name = "ParserError";
    throw tmp2;
  }
  const str3 = text.trim().replace(/\r\n/g, "\n").replace(/\r/g, "\n");
};