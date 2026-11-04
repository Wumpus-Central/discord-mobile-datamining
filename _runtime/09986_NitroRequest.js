// === Module 9986: NitroRequest ===

// Module 9986 (NitroRequest)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import "_classCallCheck";
import _createClass from "_createClass" /* 42 */;

let NitroRequest = arg1;
let duration;
let _classCallCheck;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
class NitroRequest {
  constructor(arg0, arg1) {
    self = this;
    body1 = arg1;
    tmp2 = c2(this, NitroRequest);
    this._bodyUsed = false;
    if (global instanceof NitroRequest) {
      self.url = global.url;
      tmp32 = null;
      method = undefined;
      if (body1 != null) {
        method = body1.method;
      }
      if (method == null) {
        method = global.method;
      }
      self.method = method.toUpperCase();
      tmp34 = closure_0;
      tmp35 = closure_1;
      headers1 = undefined;
      if (body1 != null) {
        headers1 = body1.headers;
      }
      if (headers1) {
        headers5 = body1.headers;
        NitroHeaders3 = tmp34(tmp35[3]).NitroHeaders;
        headers4 = body1.headers;
      } else {
        headers4 = global.headers;
      }
      tmp37 = new.target;
      tmp38 = new.target;
      tmp39 = headers4;
      nitroHeaders = new closure_0(closure_1[3]).NitroHeaders(headers4);
      tmp41 = nitroHeaders;
      self.headers = nitroHeaders;
      redirect = undefined;
      if (body1 != null) {
        redirect = body1.redirect;
      }
      if (redirect == null) {
        redirect = global.redirect;
      }
      self.redirect = redirect;
      signal = undefined;
      if (body1 != null) {
        signal = body1.signal;
      }
      if (signal == null) {
        signal = global.signal;
      }
      self.signal = signal;
      cache = undefined;
      if (body1 != null) {
        cache = body1.cache;
      }
      if (cache == null) {
        cache = global.cache;
      }
      self.cache = cache;
      credentials = undefined;
      if (body1 != null) {
        credentials = body1.credentials;
      }
      if (credentials == null) {
        credentials = global.credentials;
      }
      self.credentials = credentials;
      mode = undefined;
      if (body1 != null) {
        mode = body1.mode;
      }
      if (mode == null) {
        mode = global.mode;
      }
      self.mode = mode;
      referrer = undefined;
      if (body1 != null) {
        referrer = body1.referrer;
      }
      if (referrer == null) {
        referrer = global.referrer;
      }
      self.referrer = referrer;
      referrerPolicy = undefined;
      if (body1 != null) {
        referrerPolicy = body1.referrerPolicy;
      }
      if (referrerPolicy == null) {
        referrerPolicy = global.referrerPolicy;
      }
      self.referrerPolicy = referrerPolicy;
      integrity = undefined;
      if (body1 != null) {
        integrity = body1.integrity;
      }
      if (integrity == null) {
        integrity = global.integrity;
      }
      self.integrity = integrity;
      keepalive = undefined;
      if (body1 != null) {
        keepalive = body1.keepalive;
      }
      if (keepalive == null) {
        keepalive = global.keepalive;
      }
      self.keepalive = keepalive;
      body = undefined;
      if (body1 != null) {
        body = body1.body;
      }
      if (undefined !== body) {
        body1 = body1.body;
        if (body1 == null) {
          body1 = null;
        }
        _body = body1;
      } else {
        _body = global._body;
      }
      self._body = _body;
    } else {
      if (typeof global === "object") {
        tmp52 = null;
        if (null !== global) {
          str19 = "url";
          if ("url" in global) {
            str = "method";
            if ("method" in global) {
              str2 = "headers";
              if ("headers" in global) {
                tmp3 = globalThis;
                _URL = URL;
                if (!(global instanceof URL)) {
                  self.url = global.url;
                  method1 = undefined;
                  if (body1 != null) {
                    method1 = body1.method;
                  }
                  if (method1 == null) {
                    method1 = global.method;
                  }
                  self.method = method1.toUpperCase();
                  tmp5 = closure_0;
                  tmp6 = closure_1;
                  headers6 = undefined;
                  if (body1 != null) {
                    headers6 = body1.headers;
                  }
                  if (headers6) {
                    headers2 = body1.headers;
                    NitroHeaders = tmp5(tmp6[3]).NitroHeaders;
                    headers = body1.headers;
                  } else {
                    headers = global.headers;
                  }
                  tmp8 = new.target;
                  tmp9 = new.target;
                  tmp10 = headers;
                  nitroHeaders1 = new closure_0(closure_1[3]).NitroHeaders(headers);
                  tmp12 = nitroHeaders1;
                  self.headers = nitroHeaders1;
                  str3 = undefined;
                  if (body1 != null) {
                    str3 = body1.redirect;
                  }
                  if (str3 == null) {
                    str3 = global.redirect;
                  }
                  if (str3 == null) {
                    str3 = "follow";
                  }
                  self.redirect = str3;
                  signal1 = undefined;
                  if (body1 != null) {
                    signal1 = body1.signal;
                  }
                  if (signal1 == null) {
                    signal1 = global.signal;
                  }
                  self.signal = signal1;
                  str4 = undefined;
                  if (body1 != null) {
                    str4 = body1.cache;
                  }
                  if (str4 == null) {
                    str4 = global.cache;
                  }
                  if (str4 == null) {
                    str4 = "default";
                  }
                  self.cache = str4;
                  str5 = undefined;
                  if (body1 != null) {
                    str5 = body1.credentials;
                  }
                  if (str5 == null) {
                    str5 = global.credentials;
                  }
                  if (str5 == null) {
                    str5 = "same-origin";
                  }
                  self.credentials = str5;
                  str6 = undefined;
                  if (body1 != null) {
                    str6 = body1.mode;
                  }
                  if (str6 == null) {
                    str6 = global.mode;
                  }
                  if (str6 == null) {
                    str6 = "cors";
                  }
                  self.mode = str6;
                  str7 = undefined;
                  if (body1 != null) {
                    str7 = body1.referrer;
                  }
                  if (str7 == null) {
                    str7 = global.referrer;
                  }
                  if (str7 == null) {
                    str7 = "about:client";
                  }
                  self.referrer = str7;
                  str8 = undefined;
                  if (body1 != null) {
                    str8 = body1.referrerPolicy;
                  }
                  if (str8 == null) {
                    str8 = global.referrerPolicy;
                  }
                  if (str8 == null) {
                    str8 = "";
                  }
                  self.referrerPolicy = str8;
                  str9 = undefined;
                  if (body1 != null) {
                    str9 = body1.integrity;
                  }
                  if (str9 == null) {
                    str9 = global.integrity;
                  }
                  if (str9 == null) {
                    str9 = "";
                  }
                  self.integrity = str9;
                  flag = undefined;
                  if (body1 != null) {
                    flag = body1.keepalive;
                  }
                  if (flag == null) {
                    flag = global.keepalive;
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  self.keepalive = flag;
                  body2 = undefined;
                  if (body1 != null) {
                    body2 = body1.body;
                  }
                  if (body2 == null) {
                    body2 = null;
                  }
                  self._body = body2;
                }
                str18 = "";
                self.destination = "";
                return;
              }
            }
          }
        }
      }
      tmp15 = globalThis;
      _String = String;
      self.url = String(global);
      tmp16 = null;
      str10 = undefined;
      if (body1 != null) {
        str10 = body1.method;
      }
      if (str10 == null) {
        str10 = "GET";
      }
      self.method = str10.toUpperCase();
      tmp17 = closure_0;
      tmp18 = closure_1;
      headers7 = undefined;
      if (body1 != null) {
        headers7 = body1.headers;
      }
      headers8 = undefined;
      if (headers7) {
        headers3 = body1.headers;
        NitroHeaders2 = tmp17(tmp18[3]).NitroHeaders;
        headers8 = body1.headers;
      }
      tmp21 = new.target;
      tmp22 = new.target;
      tmp23 = headers8;
      nitroHeaders2 = new closure_0(closure_1[3]).NitroHeaders(headers8);
      tmp25 = nitroHeaders2;
      self.headers = nitroHeaders2;
      str11 = undefined;
      if (body1 != null) {
        str11 = body1.redirect;
      }
      if (str11 == null) {
        str11 = "follow";
      }
      self.redirect = str11;
      signal2 = undefined;
      if (body1 != null) {
        signal2 = body1.signal;
      }
      if (signal2 == null) {
        _AbortController = AbortController;
        tmp27 = new.target;
        tmp28 = new.target;
        abortController = new AbortController();
        tmp30 = abortController;
        signal2 = abortController.signal;
      }
      self.signal = signal2;
      str12 = undefined;
      if (body1 != null) {
        str12 = body1.cache;
      }
      if (str12 == null) {
        str12 = "default";
      }
      self.cache = str12;
      str13 = undefined;
      if (body1 != null) {
        str13 = body1.credentials;
      }
      if (str13 == null) {
        str13 = "same-origin";
      }
      self.credentials = str13;
      str14 = undefined;
      if (body1 != null) {
        str14 = body1.mode;
      }
      if (str14 == null) {
        str14 = "cors";
      }
      self.mode = str14;
      str15 = undefined;
      if (body1 != null) {
        str15 = body1.referrer;
      }
      if (str15 == null) {
        str15 = "about:client";
      }
      self.referrer = str15;
      str16 = undefined;
      if (body1 != null) {
        str16 = body1.referrerPolicy;
      }
      if (str16 == null) {
        str16 = "";
      }
      self.referrerPolicy = str16;
      str17 = undefined;
      if (body1 != null) {
        str17 = body1.integrity;
      }
      if (str17 == null) {
        str17 = "";
      }
      self.integrity = str17;
      flag2 = undefined;
      if (body1 != null) {
        flag2 = body1.keepalive;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      self.keepalive = flag2;
      body3 = undefined;
      if (body1 != null) {
        body3 = body1.body;
      }
      if (body3 == null) {
        body3 = null;
      }
      self._body = body3;
    }
    return;
  }
}
let items = [
  {
    key: "bodyUsed",
    get() {
      return this._bodyUsed;
    }
  },
  {
    key: "body",
    get() {
      const self = this;
      if (null == this._body) {
        return null;
      } else {
        const _getBodyBytesResult = self._getBodyBytes();
        NitroRequest = _getBodyBytesResult;
        let readableStream = null;
        if (_getBodyBytesResult) {
          const _ReadableStream = ReadableStream;
          const obj = {
            start(enqueue) {
                  const uint8Array = new Uint8Array(_getBodyBytesResult);
                  enqueue.enqueue(uint8Array);
                  enqueue.close();
                }
          };
          readableStream = new ReadableStream(obj);
        }
        return readableStream;
      }
    }
  },
  {
    key: "_throwIfBodyUsed",
    value: function _throwIfBodyUsed() {
      if (this._bodyUsed) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Body has already been consumed.");
        throw typeError;
      }
    }
  },
  {
    key: "_getBodyBytes",
    value: function _getBodyBytes() {
      const self = this;
      if (null != this._body) {
        if (typeof self._body === "string") {
          const stringToUTF8Result = NitroRequest(9988).stringToUTF8(self._body);
          const buffer = stringToUTF8Result.buffer;
          return buffer.slice(stringToUTF8Result.byteOffset, stringToUTF8Result.byteOffset + stringToUTF8Result.byteLength);
        } else {
          const _ArrayBuffer2 = ArrayBuffer;
          if (self._body instanceof ArrayBuffer) {
            return self._body;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            if (ArrayBuffer.isView(self._body)) {
              const _body = self._body;
              const buffer1 = _body.buffer;
              return buffer1.slice(_body.byteOffset, _body.byteOffset + _body.byteLength);
            }
          }
        }
      }
    }
  },
  {
    key: "_getBodyString",
    value: function _getBodyString() {
      const self = this;
      if (null == this._body) {
        return "";
      } else if (typeof self._body === "string") {
        return self._body;
      } else {
        const _getBodyBytesResult = self._getBodyBytes();
        let str = "";
        if (_getBodyBytesResult) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(_getBodyBytesResult);
          str = NitroRequest(9988).utf8ToString(uint8Array);
          const obj = NitroRequest(9988);
        }
        return str;
      }
    }
  },
,
,
,
,
,
,

];
const entry = { key: "text", value: null };
closure_6 = asyncGeneratorStep(async function() {
  const self = this;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          self._throwIfBodyUsed();
          self._bodyUsed = true;
          c1 = 3;
          const obj = { value: self._getBodyString(), done: true };
          return obj;
        }
      } catch (tmp6) {
        c1 = tmp;
        throw tmp6;
      }
    }
  })();
});
entry.value = function text() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[5] = entry;
const entry1 = { key: "json", value: null };
closure_5 = asyncGeneratorStep(async function() {
  const self = this;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          self._throwIfBodyUsed();
          self._bodyUsed = true;
          let str = self._getBodyString();
          if (!str) {
            str = "{}";
          }
          c1 = 3;
          const obj = { value: JSON.parse(str), done: true };
          return obj;
        }
      } catch (tmp7) {
        c1 = tmp;
        throw tmp7;
      }
    }
  })();
});
entry1.value = function json() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[6] = entry1;
const entry2 = { key: "arrayBuffer", value: null };
closure_4 = asyncGeneratorStep(async function() {
  const self = this;
  c2 = 0;
  return (async (arg0) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          self._throwIfBodyUsed();
          self._bodyUsed = true;
          const _getBodyBytesResult = self._getBodyBytes();
          arrayBuffer = _getBodyBytesResult;
          if (_getBodyBytesResult == null) {
            const _ArrayBuffer = ArrayBuffer;
            arrayBuffer = new ArrayBuffer(0);
          }
          c2 = 3;
          const obj = { value: arrayBuffer, done: true };
          return obj;
        }
      } catch (tmp13) {
        c2 = tmp;
        throw tmp13;
      }
    }
  })();
});
entry2.value = function arrayBuffer() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[7] = entry2;
const entry3 = { key: "blob", value: null };
closure_3 = asyncGeneratorStep(async function() {
  const self = this;
  c3 = 0;
  return (async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          self._throwIfBodyUsed();
          self._bodyUsed = true;
          const headers = self.headers;
          value = headers.get("content-type");
          dependencyMap = value;
          if (value == null) {
            dependencyMap = "";
          }
          let blob = dependencyMap;
          if (null == self._body) {
            const _Blob2 = Blob;
            const obj4 = { type: blob };
            blob = new Blob([], obj4);
          } else if (typeof self._body === "string") {
            const _Blob = Blob;
            items = [self._body];
            const obj = { type: blob };
            const blob1 = new Blob(items, obj);
          } else {
            const _getBodyBytesResult = self._getBodyBytes();
            arrayBuffer = _getBodyBytesResult;
            if (_getBodyBytesResult == null) {
              const _ArrayBuffer = ArrayBuffer;
              arrayBuffer = new ArrayBuffer(0);
            }
            self(dependencyMap[5]).bytesToBlob(arrayBuffer, blob);
            const obj6 = self(dependencyMap[5]);
          }
          c3 = 3;
        }
      } catch (tmp23) {
        c3 = tmp;
        throw tmp23;
      }
    }
  })();
});
entry3.value = function blob() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[8] = entry3;
const entry4 = { key: "bytes", value: null };
_classCallCheck = asyncGeneratorStep(async function() {
  const self = this;
  c2 = 0;
  return (async (arg0) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          self._throwIfBodyUsed();
          self._bodyUsed = true;
          const _getBodyBytesResult = self._getBodyBytes();
          arrayBuffer = _getBodyBytesResult;
          if (_getBodyBytesResult == null) {
            const _ArrayBuffer = ArrayBuffer;
            arrayBuffer = new ArrayBuffer(0);
          }
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(arrayBuffer);
          c2 = 3;
          const obj = { value: uint8Array, done: true };
          return obj;
        }
      } catch (tmp15) {
        c2 = tmp;
        throw tmp15;
      }
    }
  })();
});
entry4.value = function bytes() {
  const self = this;
  const apply = _classCallCheck.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[9] = entry4;
items[10] = {
  key: "clone",
  value: function clone() {
    if (this._bodyUsed) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot clone a Request whose body has been used.");
      throw typeError;
    } else {
      NitroRequest(tmp);
      return Object.create(NitroRequest.prototype);
    }
  }
};
const entry5 = { key: "formData", value: null };
duration = asyncGeneratorStep(async function() {
  const self = this;
  c4 = 0;
  c5 = 0;
  return (async () => {
    headers = self;
    const tmp11 = self(parseFormData[6]);
    closure_2 = tmp11;
    parseFormData = tmp11.parseFormData;
    await self.text();
    headers = headers.headers;
    return parseFormData(value, headers.get("content-type"));
  })();
});
entry5.value = function formData() {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[11] = entry5;

export const NitroRequest = _createClass(NitroRequest, items);
export function rawBodyOf(_body) {
  return _body._body;
}