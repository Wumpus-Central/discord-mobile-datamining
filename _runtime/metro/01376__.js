// === Module 1376: ? ===

// Module 1376
const re2 = /; */;
const re3 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

export const parse = function parse(cookie, arg1) {
  if (typeof cookie !== "string") {
    const tmp3 = globalThis;
    const _TypeError = TypeError;
    const self = this;
    let str = "argument str must be a string";
    const self2 = this;
    const typeError = new TypeError("argument str must be a string");
    throw typeError;
  } else {
    let obj = arg1;
    const obj2 = {};
    if (!arg1) {
      obj = {};
    }
    const parts = cookie.split(re2);
    let closure_1 = obj.decode || decodeURIComponent;
    const item = parts.forEach((arr) => {
      function tryDecode(substr, fn) {
        try {
          return fn(substr);
        } catch (err) {
          return substr;
        }
      }
      const index = arr.indexOf("=");
      if (index >= 0) {
        const str = arr.substr(0, index);
        const trimmed = str.trim();
        const str2 = arr.substr(index + 1, arr.length);
        const trimmed1 = str2.trim();
        let substr = trimmed1;
        if ("\"" == trimmed1[0]) {
          substr = trimmed1.slice(1, -1);
        }
        if (null == obj2[trimmed]) {
          tmp3[trimmed] = tryDecode(substr, closure_1);
        }
      }
    });
    return obj2;
  }
};
export const serialize = function serialize(arg0, arg1, arg2) {
  const tmp = arg2 || {};
  const tmp2 = tmp.encode || encodeURIComponent;
  if (re3.test(arg0)) {
    const tmp2Result = tmp2(arg1);
    if (tmp2Result) {
      if (!re3.test(tmp2Result)) {
        const _TypeError2 = TypeError;
        const self3 = this;
        const self4 = this;
        const typeError = new TypeError("argument val is invalid");
        throw typeError;
      }
    }
    const items = [`${arg0}=${tmp7}`];
    if (null != tmp.maxAge) {
      const maxAge = tmp.maxAge;
      const _isNaN = isNaN;
      if (isNaN(maxAge)) {
        const _Error = Error;
        const self9 = this;
        const self10 = this;
        const error = new Error("maxAge should be a Number");
        throw error;
      } else {
        const _Math = Math;
        items.push(`Max-Age=${Math.floor(maxAge)}`);
      }
    }
    if (tmp.domain) {
      if (re3.test(tmp.domain)) {
        items.push(`Domain=${tmp.domain}`);
      } else {
        const _TypeError3 = TypeError;
        const self5 = this;
        const self6 = this;
        const typeError1 = new TypeError("option domain is invalid");
        throw typeError1;
      }
    }
    if (tmp.path) {
      if (re3.test(tmp.path)) {
        items.push(`Path=${tmp.path}`);
      } else {
        const _TypeError4 = TypeError;
        const self7 = this;
        const self8 = this;
        const typeError2 = new TypeError("option path is invalid");
        throw typeError2;
      }
    }
    if (tmp.expires) {
      const expires = tmp.expires;
      items.push(`Expires=${expires.toUTCString()}`);
    }
    if (tmp.httpOnly) {
      items.push("HttpOnly");
    }
    if (tmp.secure) {
      items.push("Secure");
    }
    if (tmp.firstPartyOnly) {
      items.push("First-Party-Only");
    }
    return items.join("; ");
  } else {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError3 = new TypeError("argument name is invalid");
    throw typeError3;
  }
};