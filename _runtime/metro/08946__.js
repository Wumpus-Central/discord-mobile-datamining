// _runtime/metro/08946__.js
import _mod8939 from "08939__.js";

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.default = function default_1() {
      if (typeof error === "function") {
        let obj = { localeError: null };
        obj = {
          string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
          file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
          array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
          set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
        };
        closure_1 = {
          regex: "\u0645\u062F\u062E\u0644",
          email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
          url: "\u0631\u0627\u0628\u0637",
          emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
          ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
          cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
          cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
          base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
          base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
          json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
          e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
          jwt: "JWT",
          template_literal: "\u0645\u062F\u062E\u0644",
        };
        closure_2 = { nan: "NaN" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp50 = closure_2[parsedTypeResult];
              if (tmp50 == null) {
                tmp50 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined =
                  "\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof " +
                  code.expected +
                  "\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 " +
                  tmp50;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined =
                  "\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 " +
                  expected +
                  "\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 " +
                  tmp50;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 " +
                  closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: " +
                  closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str30 = "<";
              if (code.inclusive) {
                str30 = "<=";
              }
              let tmp29 = obj[code.origin];
              if (tmp29 == null) {
                tmp29 = null;
              }
              let str31 = code.origin;
              if (tmp29) {
                if (str31 == null) {
                  str31 = "\u0627\u0644\u0642\u064A\u0645\u0629";
                }
                let str = code.maximum.toString();
                let str39 = tmp29.unit;
                if (str39 == null) {
                  str39 = "\u0639\u0646\u0635\u0631";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 =
                  " \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 " +
                  str31 +
                  " " +
                  str30 +
                  " " +
                  str +
                  " " +
                  str39;
              } else {
                let str32 = str31;
                if (str31 == null) {
                  str32 = "\u0627\u0644\u0642\u064A\u0645\u0629";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 =
                  "\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 " +
                  str32 +
                  " " +
                  str30 +
                  " " +
                  code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str21 = ">";
              if (code.inclusive) {
                str21 = ">=";
              }
              let tmp17 = obj[code.origin];
              if (tmp17 == null) {
                tmp17 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp17) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 " +
                  origin +
                  " \u0623\u0646 \u064A\u0643\u0648\u0646 " +
                  str21 +
                  " " +
                  str1 +
                  " " +
                  tmp17.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 =
                  "\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 " +
                  origin +
                  " \u0623\u0646 \u064A\u0643\u0648\u0646 " +
                  str21 +
                  " " +
                  str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 =
                  '\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "' +
                  code.prefix +
                  '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 =
                  '\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "' +
                  code.suffix +
                  '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 =
                  '\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "' +
                  code.includes +
                  '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 =
                  "\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 " +
                  code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return (
                "\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A " +
                code.divisor
              );
            case "unrecognized_keys":
              let str3 = "";
              let str4 = "";
              if (code.keys.length > 1) {
                str4 = "\u0627\u062A";
              }
              if (code.keys.length > 1) {
                str3 = "\u0629";
              }
              const _HermesInternal3 = HermesInternal;
              return (
                "\u0645\u0639\u0631\u0641" +
                str4 +
                " \u063A\u0631\u064A\u0628" +
                str3 +
                ": " +
                closure_2.joinValues(code.keys, "\u060C ")
              );
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return (
                "\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A " + code.origin
              );
            case "invalid_union":
              return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ";
              return (
                "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A " + code.origin
              );
            default:
              return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod8939);
    function error() {}
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
