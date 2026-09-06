// _runtime/metro/08989__.js
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
          string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" },
          file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" },
          array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
          set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
        };
        closure_1 = {
          regex: "\u0627\u0646 \u067E\u0679",
          email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
          url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
          emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
          uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
          uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
          nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
          ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
          xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
          ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
          date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
          time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
          duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
          ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
          ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
          cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
          cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
          base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
          base64url:
            "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
          json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
          e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
          jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
          template_literal: "\u0627\u0646 \u067E\u0679",
        };
        closure_2 = {
          nan: "NaN",
          number: "\u0646\u0645\u0628\u0631",
          array: "\u0622\u0631\u06D2",
          null: "\u0646\u0644",
        };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp48 = closure_2[parsedTypeResult];
              if (tmp48 == null) {
                tmp48 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined =
                  "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof " +
                  code.expected +
                  " \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C " +
                  tmp48 +
                  " \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627";
              } else {
                const _HermesInternal16 = HermesInternal;
                combined =
                  "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: " +
                  expected +
                  " \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C " +
                  tmp48 +
                  " \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627";
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: " +
                  closure_2.stringifyPrimitive(code.values[0]) +
                  " \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627";
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: " +
                  closure_2.joinValues(code.values, "|") +
                  " \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627";
              }
              return combined1;
            case "too_big":
              let str30 = "<";
              if (code.inclusive) {
                str30 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str31 = code.origin;
              if (tmp27) {
                if (str31 == null) {
                  str31 = "\u0648\u06CC\u0644\u06CC\u0648";
                }
                let str = code.maximum.toString();
                let str38 = tmp27.unit;
                if (str38 == null) {
                  str38 = "\u0639\u0646\u0627\u0635\u0631";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 =
                  "\u0628\u06C1\u062A \u0628\u0691\u0627: " +
                  str31 +
                  " \u06A9\u06D2 " +
                  str30 +
                  str +
                  " " +
                  str38 +
                  " \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2";
              } else {
                let str32 = str31;
                if (str31 == null) {
                  str32 = "\u0648\u06CC\u0644\u06CC\u0648";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 =
                  "\u0628\u06C1\u062A \u0628\u0691\u0627: " +
                  str32 +
                  " \u06A9\u0627 " +
                  str30 +
                  code.maximum.toString() +
                  " \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627";
              }
              return combined2;
            case "too_small":
              let str22 = ">";
              if (code.inclusive) {
                str22 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: " +
                  origin +
                  " \u06A9\u06D2 " +
                  str22 +
                  str1 +
                  " " +
                  tmp15.unit +
                  " \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2";
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 =
                  "\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: " +
                  origin +
                  " \u06A9\u0627 " +
                  str22 +
                  str1 +
                  " \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627";
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 =
                  '\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "' +
                  code.prefix +
                  '" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 =
                  '\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "' +
                  code.suffix +
                  '" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 =
                  '\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "' +
                  code.includes +
                  '" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 =
                  "\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 " +
                  code.pattern +
                  " \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "\u063A\u0644\u0637 " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return (
                "\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: " +
                code.divisor +
                " \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2"
              );
            case "unrecognized_keys":
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "\u0632";
              }
              const _HermesInternal3 = HermesInternal;
              return (
                "\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC" +
                str5 +
                ": " +
                closure_2.joinValues(code.keys, "\u060C ")
              );
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC";
            case "invalid_union":
              return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = " \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648";
              return "" + code.origin + " \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648";
            default:
              return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
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
