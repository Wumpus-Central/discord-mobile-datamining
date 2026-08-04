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
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
              let tmp4 = hasOwnPropertyResult;
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.default = function default_1() {
      if (typeof error !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let closure_0 = { string: { unit: "znak\u016F", verb: "m\u00EDt" }, file: { unit: "bajt\u016F", verb: "m\u00EDt" }, array: { unit: "prvk\u016F", verb: "m\u00EDt" }, set: { unit: "prvk\u016F", verb: "m\u00EDt" } };
      let closure_1 = { regex: "regul\u00E1rn\u00ED v\u00FDraz", email: "e-mailov\u00E1 adresa", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "datum a \u010Das ve form\u00E1tu ISO", date: "datum ve form\u00E1tu ISO", time: "\u010Das ve form\u00E1tu ISO", duration: "doba trv\u00E1n\u00ED ISO", ipv4: "IPv4 adresa", ipv6: "IPv6 adresa", cidrv4: "rozsah IPv4", cidrv6: "rozsah IPv6", base64: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64", base64url: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64url", json_string: "\u0159et\u011Bzec ve form\u00E1tu JSON", e164: "\u010D\u00EDslo E.164", jwt: "JWT", template_literal: "vstup" };
      let closure_2 = { nan: "NaN", number: "\u010D\u00EDslo", string: "\u0159et\u011Bzec", function: "funkce", array: "pole" };
      return { localeError: (arg0) => "Neplatn\u00E1 hodnota v " + tmp.origin };
    };
    let closure_2 = fn(require("mergeDefs"));
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}