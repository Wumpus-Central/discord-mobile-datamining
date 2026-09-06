// _runtime/metro/08971__.js
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
          string: { unit: "\uBB38\uC790", verb: "to have" },
          file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
          array: { unit: "\uAC1C", verb: "to have" },
          set: { unit: "\uAC1C", verb: "to have" },
        };
        closure_1 = {
          regex: "\uC785\uB825",
          email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
          url: "URL",
          emoji: "\uC774\uBAA8\uC9C0",
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
          datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
          date: "ISO \uB0A0\uC9DC",
          time: "ISO \uC2DC\uAC04",
          duration: "ISO \uAE30\uAC04",
          ipv4: "IPv4 \uC8FC\uC18C",
          ipv6: "IPv6 \uC8FC\uC18C",
          cidrv4: "IPv4 \uBC94\uC704",
          cidrv6: "IPv6 \uBC94\uC704",
          base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
          base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
          json_string: "JSON \uBB38\uC790\uC5F4",
          e164: "E.164 \uBC88\uD638",
          jwt: "JWT",
          template_literal: "\uC785\uB825",
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
              let tmp49 = closure_2[parsedTypeResult];
              if (tmp49 == null) {
                tmp49 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined =
                  "\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof " +
                  code.expected +
                  ", \uBC1B\uC740 \uD0C0\uC785\uC740 " +
                  tmp49 +
                  "\uC785\uB2C8\uB2E4";
              } else {
                const _HermesInternal16 = HermesInternal;
                combined =
                  "\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 " +
                  expected +
                  ", \uBC1B\uC740 \uD0C0\uC785\uC740 " +
                  tmp49 +
                  "\uC785\uB2C8\uB2E4";
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 " +
                  closure_2.stringifyPrimitive(code.values[0]) +
                  " \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4";
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "\uC798\uBABB\uB41C \uC635\uC158: " +
                  closure_2.joinValues(code.values, "\uB610\uB294 ") +
                  " \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4";
              }
              return combined1;
            case "too_big":
              let str33 = "\uBBF8\uB9CC";
              if (code.inclusive) {
                str33 = "\uC774\uD558";
              }
              let str34 = "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
              if ("\uBBF8\uB9CC" === str33) {
                str34 = "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4";
              }
              let tmp28 = obj[code.origin];
              if (tmp28 == null) {
                tmp28 = null;
              }
              let str35;
              if (tmp28 != null) {
                str35 = tmp28.unit;
              }
              if (str35 == null) {
                str35 = "\uC694\uC18C";
              }
              let str36 = code.origin;
              if (tmp28) {
                if (str36 == null) {
                  str36 = "\uAC12";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 =
                  "" +
                  str36 +
                  "\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: " +
                  code.maximum.toString() +
                  str35 +
                  " " +
                  str33 +
                  str34;
              } else {
                let str37 = str36;
                if (str36 == null) {
                  str37 = "\uAC12";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 =
                  "" +
                  str37 +
                  "\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: " +
                  code.maximum.toString() +
                  " " +
                  str33 +
                  str34;
              }
              return combined2;
            case "too_small":
              let str18 = "\uCD08\uACFC";
              if (code.inclusive) {
                str18 = "\uC774\uC0C1";
              }
              let str19 = "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
              if ("\uC774\uC0C1" === str18) {
                str19 = "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              let str21;
              if (tmp15 != null) {
                str21 = tmp15.unit;
              }
              if (str21 == null) {
                str21 = "\uC694\uC18C";
              }
              let str22 = code.origin;
              if (tmp15) {
                if (str22 == null) {
                  str22 = "\uAC12";
                }
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "" +
                  str22 +
                  "\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: " +
                  code.minimum.toString() +
                  str21 +
                  " " +
                  str18 +
                  str19;
              } else {
                let str23 = str22;
                if (str22 == null) {
                  str23 = "\uAC12";
                }
                const _HermesInternal10 = HermesInternal;
                combined3 =
                  "" +
                  str23 +
                  "\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: " +
                  code.minimum.toString() +
                  " " +
                  str18 +
                  str19;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 =
                  '\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "' +
                  code.prefix +
                  '"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 =
                  '\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "' +
                  code.suffix +
                  '"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 =
                  '\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "' +
                  code.includes +
                  '"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 =
                  "\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD " +
                  code.pattern +
                  " \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "\uC798\uBABB\uB41C " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return (
                "\uC798\uBABB\uB41C \uC22B\uC790: " +
                code.divisor +
                "\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4"
              );
            case "unrecognized_keys":
              const _HermesInternal3 = HermesInternal;
              return "\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "\uC798\uBABB\uB41C \uD0A4: " + code.origin;
            case "invalid_union":
              return "\uC798\uBABB\uB41C \uC785\uB825";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              return "\uC798\uBABB\uB41C \uAC12: " + code.origin;
            default:
              return "\uC798\uBABB\uB41C \uC785\uB825";
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
