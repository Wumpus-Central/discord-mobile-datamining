// === Module 8610: cuid ===

// Module 8610 (cuid)
import captureStackTrace2 from "captureStackTrace" /* 8607 */;

let hasOwnProperty;

let self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
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
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_1 = tmp3;
const tmp5 = self && self.__importStar || ((__esModule) => {
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
let c3 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let c4 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
let regExp = new RegExp("^" + "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))" + "$");
const regExp1 = new RegExp("^[A-Za-z0-9+/]{" + 22 + "}" + "==" + "$");
const regExp2 = new RegExp("^[A-Za-z0-9_-]{" + 22 + "}$");
const regExp3 = new RegExp("^[A-Za-z0-9+/]{" + 27 + "}" + "=" + "$");
const regExp4 = new RegExp("^[A-Za-z0-9_-]{" + 27 + "}$");
const regExp5 = new RegExp("^[A-Za-z0-9+/]{" + 43 + "}" + "=" + "$");
const regExp6 = new RegExp("^[A-Za-z0-9_-]{" + 43 + "}$");
const regExp7 = new RegExp("^[A-Za-z0-9+/]{" + 64 + "}" + "" + "$");
const regExp8 = new RegExp("^[A-Za-z0-9_-]{" + 64 + "}$");
const regExp9 = new RegExp("^[A-Za-z0-9+/]{" + 86 + "}" + "==" + "$");
const regExp10 = new RegExp("^[A-Za-z0-9_-]{" + 86 + "}$");

export const emoji = function emoji() {
  const regExp = new RegExp(c3, "u");
  return regExp;
};
export const time = function time(precision) {
  let combined1;
  const _RegExp = RegExp;
  if (typeof precision.precision === "number") {
    let combined;
    if (-1 === precision.precision) {
      const _HermesInternal3 = HermesInternal;
      combined = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d";
    } else if (0 === precision.precision) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d" + ":[0-5]\\d";
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d" + ":[0-5]\\d\\.\\d{" + precision.precision + "}";
    }
    combined1 = combined;
  } else {
    const _HermesInternal4 = HermesInternal;
    combined1 = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d" + "(?::[0-5]\\d(?:\\.\\d+)?)?";
  }
  const _RegExp1 = new _RegExp("^" + combined1 + "$");
  return _RegExp1;
};
export const datetime = function datetime(precision) {
  let combined1;
  precision = precision.precision;
  if (typeof precision === "number") {
    let combined;
    if (-1 === precision) {
      const _HermesInternal3 = HermesInternal;
      combined = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d";
    } else if (0 === precision) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d" + ":[0-5]\\d";
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d" + ":[0-5]\\d\\.\\d{" + precision + "}";
    }
    combined1 = combined;
  } else {
    const _HermesInternal4 = HermesInternal;
    combined1 = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d" + "(?::[0-5]\\d(?:\\.\\d+)?)?";
  }
  const items = ["Z"];
  if (precision.local) {
    items.push("");
  }
  if (precision.offset) {
    items.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  }
  const regExp = new RegExp("^" + c4 + "T(?:" + "" + combined1 + "(?:" + items.join("|") + ")" + ")$");
  return regExp;
};
export const cuid = /^[cC][^\s-]{8,}$/;
export const cuid2 = /^[0-9a-z]+$/;
export const ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
export const xid = /^[0-9a-vA-V]{20}$/;
export const ksuid = /^[A-Za-z0-9]{27}$/;
export const nanoid = /^[a-zA-Z0-9_-]{21}$/;
export const duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
export const extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
export const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
export const uuid = function(arg0) {
  let regExp;
  const tmp = arg0;
  if (tmp) {
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    regExp = new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-" + arg0 + "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$");
  } else {
    regExp = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  }
  return regExp;
};
export const uuid4 = exports.uuid(4);
export const uuid6 = exports.uuid(6);
export const uuid7 = exports.uuid(7);
export const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
export const html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const unicodeEmail = /^(?:[\0-\x08\x0E-\x1F!#-\?A-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){1,64}@(?:[\0-\x08\x0E-\x1F!-\?A-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){1,255}$/;
export const idnEmail = exports.unicodeEmail;
export const browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
export const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
export const mac = (includes) => {
  let str = includes;
  const escapeRegex = captureStackTrace.escapeRegex;
  if (includes == null) {
    str = ":";
  }
  const escapeRegexResult = escapeRegex(str);
  const regExp = new RegExp("^(?:[0-9A-F]{2}" + escapeRegexResult + "){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}" + escapeRegexResult + "){5}[0-9a-f]{2}$");
  return regExp;
};
export const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
export const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
export const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
export const base64url = /^[A-Za-z0-9_-]*$/;
export const hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
export const domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
export const e164 = /^\+[1-9]\d{6,14}$/;
export const date = regExp;
export const string = (minimum) => {
  let str = "[\\s\\S]*";
  const _RegExp = RegExp;
  if (minimum) {
    let num;
    if (minimum != null) {
      num = minimum.minimum;
    }
    if (num == null) {
      num = 0;
    }
    let str2;
    if (minimum != null) {
      str2 = minimum.maximum;
    }
    if (str2 == null) {
      str2 = "";
    }
    const _HermesInternal = HermesInternal;
    str = "[\\s\\S]{" + num + "," + str2 + "}";
  }
  const _RegExp1 = new _RegExp("^" + str + "$");
  return _RegExp1;
};
export const bigint = /^-?\d+n?$/;
export const integer = /^-?\d+$/;
export const number = /^-?\d+(?:\.\d+)?$/;
export const boolean = /^(?:true|false)$/i;
const null_export = /^null$/i;
export { null_export as null };
const undefined_export = /^undefined$/i;
export { undefined_export as undefined };
export const lowercase = /^[^A-Z]*$/;
export const uppercase = /^[^a-z]*$/;
export const hex = /^[0-9a-fA-F]*$/;
export const md5_hex = /^[0-9a-fA-F]{32}$/;
export const md5_base64 = regExp1;
export const md5_base64url = regExp2;
export const sha1_hex = /^[0-9a-fA-F]{40}$/;
export const sha1_base64 = regExp3;
export const sha1_base64url = regExp4;
export const sha256_hex = /^[0-9a-fA-F]{64}$/;
export const sha256_base64 = regExp5;
export const sha256_base64url = regExp6;
export const sha384_hex = /^[0-9a-fA-F]{96}$/;
export const sha384_base64 = regExp7;
export const sha384_base64url = regExp8;
export const sha512_hex = /^[0-9a-fA-F]{128}$/;
export const sha512_base64 = regExp9;
export const sha512_base64url = regExp10;