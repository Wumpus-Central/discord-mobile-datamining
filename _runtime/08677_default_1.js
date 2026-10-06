// _runtime/08677_default_1.js
import captureStackTrace2 from "08642_captureStackTrace.js";

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
        function get() {
          return __esModule[closure_1];
        }
        closure_0 = __esModule;
        closure_1 = arg2;
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
        let tmp3 = ownPropertyDescriptor;
        if (tmp3) {
          let tmp4;
          if ("get" in ownPropertyDescriptor) {
            tmp4 = !__esModule.__esModule;
          } else {
            tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
          }
          tmp3 = !tmp4;
        }
        if (!tmp3) {
          ownPropertyDescriptor = { enumerable: true, get };
          const obj = { enumerable: true, get };
        }
        Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create
    ? (arg0, value) => {
        const obj = { enumerable: true, value };
        Object.defineProperty(arg0, "default", obj);
      }
    : (arg0, arg1) => {
        arg0.default = arg1;
      };
}
let closure_1 = tmp3;
const tmp5 =
  (self && self.__importStar) ||
  ((__esModule) => {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      for (const key10009 in __esModule) {
        let callResult = "default" !== key10009;
        if (callResult) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          callResult = hasOwnProperty.call(__esModule, key10009);
        }
        if (!callResult) {
          continue;
        } else {
          let tmp6 = closure_0(obj, __esModule, key10009);
          continue;
        }
        continue;
      }
    }
    closure_1(obj, __esModule);
    return obj;
  });
const captureStackTrace = tmp5(captureStackTrace2);
function error() {}

export default function default_1() {
  if (typeof error === "function") {
    let obj = {
      localeError: (code) => {
        switch (code.code) {
          case "invalid_type": {
            let combined;
            const expected = closure_2[code.expected] ?? code.expected;
            const parsedTypeResult = captureStackTrace.parsedType(code.input);
            const obj = /^[A-Z]/;
            if (obj.test(code.expected)) {
              const _HermesInternal17 = HermesInternal;
              combined = "Input tidak sah: dijangka instanceof " + code.expected + ", diterima " + tmp47;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "Input tidak sah: dijangka " + expected + ", diterima " + tmp47;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 = "Input tidak sah: dijangka " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 =
                "Pilihan tidak sah: dijangka salah satu daripada " + captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let combined2;
            let str27 = "<";
            if (code.inclusive) {
              str27 = "<=";
            }
            let str28 = code.origin;
            if (obj2[code.origin] ?? null) {
              if (str28 == null) {
                str28 = "nilai";
              }
              const verb = tmp25.verb;
              const str33 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str33.toString();
              const str34 = (obj2[code.origin] ?? null).unit ?? "elemen";
              combined2 = "Terlalu besar: dijangka " + str28 + " " + verb + " " + str27 + str1 + " " + str34;
            } else {
              let str29 = str28;
              if (str28 == null) {
                str29 = "nilai";
              }
              const _HermesInternal12 = HermesInternal;
              const str30 = code.maximum;
              combined2 = "Terlalu besar: dijangka " + str29 + " adalah " + str27 + str30.toString();
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let str17 = ">";
            if (code.inclusive) {
              str17 = ">=";
            }
            const origin = code.origin;
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              const str21 = code.minimum;
              combined3 =
                "Terlalu kecil: dijangka " +
                origin +
                " " +
                tmp15.verb +
                " " +
                str17 +
                str21.toString() +
                " " +
                tmp15.unit;
            } else {
              const _HermesInternal10 = HermesInternal;
              const str18 = code.minimum;
              combined3 = "Terlalu kecil: dijangka " + origin + " adalah " + str17 + str18.toString();
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'String tidak sah: mesti bermula dengan "' + code.prefix + '"';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 = 'String tidak sah: mesti berakhir dengan "' + code.suffix + '"';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'String tidak sah: mesti mengandungi "' + code.includes + '"';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 = "String tidak sah: mesti sepadan dengan corak " + code.pattern;
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "" + format + " tidak sah";
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "Nombor tidak sah: perlu gandaan " + code.divisor;
          }
          case "unrecognized_keys": {
            const _HermesInternal3 = HermesInternal;
            return "Kunci tidak dikenali: " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "Kunci tidak sah dalam " + code.origin;
          }
          case "invalid_union": {
            return "Input tidak sah";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "Nilai tidak sah dalam " + code.origin;
          }
          default: {
            return "Input tidak sah";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "aksara", verb: "mempunyai" },
      file: { unit: "bait", verb: "mempunyai" },
      array: { unit: "elemen", verb: "mempunyai" },
      set: { unit: "elemen", verb: "mempunyai" },
    };
    closure_1 = {
      regex: "input",
      email: "alamat e-mel",
      url: "URL",
      emoji: "emoji",
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
      datetime: "tarikh masa ISO",
      date: "tarikh ISO",
      time: "masa ISO",
      duration: "tempoh ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "julat IPv4",
      cidrv6: "julat IPv6",
      base64: "string dikodkan base64",
      base64url: "string dikodkan base64url",
      json_string: "string JSON",
      e164: "nombor E.164",
      jwt: "JWT",
      template_literal: "input",
    };
    let closure_2 = { nan: "NaN", number: "nombor" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
