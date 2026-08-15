// _runtime/04292_parse.js
arg5.parse = function parse(str) {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("argument str must be a string");
    throw typeError;
  } else {
    let obj = arg1;
    obj = {};
    if (!arg1) {
      obj = {};
    }
    const parts = str.split(closure_2);
    let closure_1 = obj.decode || obj;
    const item = parts.forEach((arr) => {
      const index = arr.indexOf("=");
      if (index >= 0) {
        const trimmed = arr.substr(0, index).trim();
        const str = arr.substr(0, index);
        const trimmed1 = arr.substr(index + 1, arr.length).trim();
        let substr = trimmed1;
        if ("\"" == trimmed1[0]) {
          substr = trimmed1.slice(1, -1);
        }
        if (null == obj[trimmed]) {
          tmp3[trimmed] = (function tryDecode(substr, closure_1) {
            try {
              return closure_1(substr);
            } catch (err) {
              return tmp;
            }
          })(substr, closure_1);
        }
        const str2 = arr.substr(index + 1, arr.length);
      }
    });
    return obj;
  }
};
arg5.serialize = function serialize(arg0, arg1, arg2) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  if (regex.test(arg0)) {
    const tmpResult = tmp(arg1);
    if (tmpResult) {
      if (!obj2.test(tmpResult)) {
        const _TypeError2 = TypeError;
        const typeError = new TypeError("argument val is invalid");
        throw typeError;
      }
    }
    const items = [`${arg0}=${tmp8}`];
    if (null != obj.maxAge) {
      const maxAge = obj.maxAge;
      const _isNaN = isNaN;
      if (isNaN(maxAge)) {
        const _Error = Error;
        const error = new Error("maxAge should be a Number");
        throw error;
      } else {
        const _Math = Math;
        items.push(`Max-Age=${Math.floor(maxAge)}`);
      }
    }
    if (obj.domain) {
      if (obj2.test(obj.domain)) {
        items.push(`Domain=${obj.domain}`);
      } else {
        const _TypeError3 = TypeError;
        const typeError1 = new TypeError("option domain is invalid");
        throw typeError1;
      }
    }
    if (obj.path) {
      if (obj2.test(obj.path)) {
        items.push(`Path=${obj.path}`);
      } else {
        const _TypeError4 = TypeError;
        const typeError2 = new TypeError("option path is invalid");
        throw typeError2;
      }
    }
    if (obj.expires) {
      const expires = obj.expires;
      items.push(`Expires=${expires.toUTCString()}`);
    }
    if (obj.httpOnly) {
      items.push("HttpOnly");
    }
    if (obj.secure) {
      items.push("Secure");
    }
    if (obj.firstPartyOnly) {
      items.push("First-Party-Only");
    }
    return items.join("; ");
  } else {
    const _TypeError = TypeError;
    const typeError3 = new TypeError("argument name is invalid");
    throw typeError3;
  }
  tmp = obj.encode || encodeURIComponent;
};
const re2 = /; */;
const re3 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;