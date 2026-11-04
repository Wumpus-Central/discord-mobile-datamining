// _runtime/09991_decodeFormComponent.js
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";
import "_classCallCheck";
import _createClass from "metro/00042__createClass.js";

let NitroResponse = arg1;
let closure_3 = function decodeFormComponent(arg0) {
  try {
    const _decodeURIComponent = decodeURIComponent;
    return decodeURIComponent(tmp2);
  } catch (err) {
    return tmp;
  }
};
function parseFormData(value, headers) {
  let formatted;
  if (headers != null) {
    const str2 = headers.split(";")[0];
    if (str2 != null) {
      formatted = str2.trim().toLowerCase();
      const str3 = str2.trim();
    }
  }
  if ("application/x-www-form-urlencoded" !== formatted) {
    const _TypeError = TypeError;
    const typeError = new TypeError("formData() only supports application/x-www-form-urlencoded bodies");
    throw typeError;
  } else {
    const _FormData = FormData;
    const formData = new FormData();
    const parts = value.split("&");
    const iter = parts[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let arr = nextResult;
      if (nextResult) {
        let index = arr.indexOf("=");
        let tmp7 = index;
        if (index < 0) {
          let substr = nextResult;
        } else {
          substr = arr.slice(0, tmp7);
        }
        let str4 = "";
        let tmp8Result = closure_3(substr);
        if (tmp7 >= 0) {
          str4 = arr.slice(tmp7 + 1);
        }
        let appendResult = formData.append(tmp8Result, closure_3(str4));
      }
      continue;
    }
    return formData;
  }
}
let duration;
let _classCallCheck;
closure_3 = undefined;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
class NitroResponse {
  constructor(arg0, arg1) {
    self = this;
    body = global;
    tmp = c2(this, NitroResponse);
    this._bodyUsed = false;
    tmp2 = null != global && typeof body === "object";
    if (tmp2) {
      str = "url";
      tmp2 = "url" in body;
    }
    if (tmp2) {
      str2 = "status";
      tmp2 = "status" in body;
    }
    if (tmp2) {
      str3 = "ok";
      tmp2 = "ok" in body;
    }
    if (tmp2) {
      ({
        url: self.url,
        ok: self.ok,
        status: self.status,
        statusText: self.statusText,
        redirected: self.redirected,
        type,
      } = body);
      if (type == null) {
        type = "basic";
      }
      self.type = type;
      tmp16 = closure_0;
      tmp17 = closure_1;
      if (body.headers instanceof closure_0(closure_1[3]).NitroHeaders) {
        self.headers = body.headers;
      } else {
        tmp18 = new.target;
        tmp19 = new.target;
        nitroHeaders = new tmp16(tmp17[3]).NitroHeaders(body.headers);
        tmp21 = nitroHeaders;
        self.headers = nitroHeaders;
      }
      ({ bodyBytes: self._bodyBytes, bodyString: self._bodyString, body } = body);
      self._bodyStream = body;
    } else {
      tmp3 = arg1;
      num = undefined;
      if (arg1 != null) {
        num = arg1.status;
      }
      if (num == null) {
        num = 200;
      }
      self.status = num;
      str4 = undefined;
      if (arg1 != null) {
        str4 = arg1.statusText;
      }
      if (str4 == null) {
        str4 = "";
      }
      self.statusText = str4;
      num2 = 200;
      tmp4 = self.status >= 200;
      if (tmp4) {
        num3 = 300;
        tmp4 = self.status < 300;
      }
      self.ok = tmp4;
      str5 = "";
      self.url = "";
      self.redirected = false;
      str6 = "default";
      self.type = "default";
      tmp5 = closure_0;
      tmp6 = closure_1;
      headers1 = undefined;
      if (arg1 != null) {
        headers1 = arg1.headers;
      }
      tmp8 = new.target;
      tmp9 = new.target;
      tmp10 = headers1;
      nitroHeaders1 = new closure_0(closure_1[3]).NitroHeaders(headers1);
      tmp12 = nitroHeaders1;
      self.headers = nitroHeaders1;
      if (null != body) {
        if (typeof body === "string") {
          self._bodyString = body;
        } else {
          tmp22 = globalThis;
          _ArrayBuffer2 = ArrayBuffer;
          if (body instanceof ArrayBuffer) {
            self._bodyBytes = body;
          } else {
            _ArrayBuffer = ArrayBuffer;
            if (ArrayBuffer.isView(body)) {
              buffer = body.buffer;
              self._bodyBytes = buffer.slice(body.byteOffset, body.byteOffset + body.byteLength);
            } else {
              _ReadableStream = ReadableStream;
              if (typeof ReadableStream !== "undefined") {
                _ReadableStream2 = ReadableStream;
                if (body instanceof ReadableStream) {
                  self._bodyStream = body;
                }
              }
              _URLSearchParams = URLSearchParams;
              if (typeof URLSearchParams !== "undefined") {
                _URLSearchParams2 = URLSearchParams;
                if (body instanceof URLSearchParams) {
                  self._bodyString = body.toString();
                  headers = self.headers;
                  str7 = "content-type";
                  if (!headers.has("content-type")) {
                    headers2 = self.headers;
                    str8 = "application/x-www-form-urlencoded;charset=UTF-8";
                    result = headers2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                  }
                }
              }
              _Blob = Blob;
              tmp13 = typeof Blob !== "undefined";
              if (typeof Blob !== "undefined") {
                _Blob2 = Blob;
                tmp13 = body instanceof Blob;
              }
              if (tmp13) {
                self._bodyString = "";
                stream = body.stream;
                streamResult = undefined;
                if (stream != null) {
                  streamResult = stream();
                }
                self._bodyStream = streamResult;
              }
            }
          }
        }
      }
      return;
    }
    return;
  }
}
let items = [
  {
    key: "bodyUsed",
    get() {
      return this._bodyUsed;
    },
  },
  {
    key: "body",
    get() {
      const self = this;
      if (this._bodyStream) {
        return self._bodyStream;
      } else {
        const _getBodyBytesResult = self._getBodyBytes();
        NitroResponse = _getBodyBytesResult;
        let readableStream = null;
        if (_getBodyBytesResult) {
          const _ReadableStream = ReadableStream;
          const obj = {
            start(enqueue) {
              const uint8Array = new Uint8Array(_getBodyBytesResult);
              enqueue.enqueue(uint8Array);
              enqueue.close();
            },
          };
          readableStream = new ReadableStream(obj);
        }
        return readableStream;
      }
    },
  },
  {
    key: "_throwIfBodyUsed",
    value: function _throwIfBodyUsed() {
      if (this._bodyUsed) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Body has already been consumed.");
        throw typeError;
      }
    },
  },
  {
    key: "_getBodyBytes",
    value: function _getBodyBytes() {
      const self = this;
      if (null != this._bodyBytes) {
        return self._bodyBytes;
      } else if (null != self._bodyString) {
        const stringToUTF8Result = NitroResponse(9988).stringToUTF8(self._bodyString);
        const buffer = stringToUTF8Result.buffer;
        return buffer.slice(
          stringToUTF8Result.byteOffset,
          stringToUTF8Result.byteOffset + stringToUTF8Result.byteLength,
        );
      }
    },
  },
  {
    key: "_getBodyString",
    value: function _getBodyString() {
      const self = this;
      if (null != this._bodyString) {
        let str = self._bodyString;
      } else {
        str = "";
        if (self._bodyBytes) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(self._bodyBytes);
          str = NitroResponse(9988).utf8ToString(uint8Array);
          const obj = NitroResponse(9988);
        }
      }
      return str;
    },
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
];
const entry = { key: "text", value: null };
closure_7 = asyncGeneratorStep(async function () {
  const self = this;
  c9 = 0;
  c10 = 0;
  c8 = 0;
  return (async (arg0) => {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c10 = 2;
        let tmp5 = c9;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_6 = tmp;
            closure_5 = tmp2;
            let reader;
            closure_133_1 = undefined;
            closure_133_2 = undefined;
            let done;
            value = undefined;
            closure_133_5 = undefined;
            closure_133_6 = undefined;
            closure_133_7 = undefined;
            closure_133_8 = undefined;
            closure_133_9 = undefined;
            let _throwIfBodyUsedResult = self._throwIfBodyUsed();
            self._bodyUsed = true;
            if (self._bodyStream) {
              if (!self._bodyBytes) {
                if (null == self._bodyString) {
                  let _bodyStream = self._bodyStream;
                  reader = _bodyStream.getReader();
                  closure_133_1 = [];
                  let readResult = reader.read();
                  c9 = 1;
                  c10 = 1;
                }
              }
            }
            c10 = 3;
            let obj4 = { value: self._getBodyString(), done: true };
            return obj4;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            closure_133_2 = value;
            done = closure_133_2.done;
            value = closure_133_2.value;
            if (!done) {
              if (value) {
                let arr = closure_133_1.push(value);
              }
            }
          }
        } else if (2 === tmp5) {
          c8 = 0;
          closure_1.return();
          throw closure_1_7;
        } else {
          c8 = 0;
          closure_3.return();
          throw closure_1_7;
        }
        closure_133_5 = 0;
        closure_2 = closure_133_1;
        closure_1 = closure_133_1[Symbol.iterator]();
        while (closure_1 !== undefined) {
          closure_133_6 = tmp20;
          closure_133_5 = closure_133_5 + closure_133_6.byteLength;
          c8 = 0;
          continue;
        }
        let _Uint8Array = Uint8Array;
        let tmp26 = new.target;
        let tmp27 = new.target;
        let uint8Array = new Uint8Array(closure_133_5);
        closure_133_7 = uint8Array;
        closure_133_8 = 0;
        closure_4 = closure_133_1;
        closure_3 = closure_133_1[Symbol.iterator]();
        while (closure_3 !== undefined) {
          closure_133_9 = tmp34;
          let result = closure_133_7.set(closure_133_9, closure_133_8);
          closure_133_8 = closure_133_8 + closure_133_9.byteLength;
          c8 = 0;
          continue;
        }
        let obj = self(closure_1[4]);
        c10 = 3;
        let obj6 = { value: obj.utf8ToString(closure_133_7), done: true };
        return obj6;
      }
    }
  })();
});
entry.value = function text() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[5] = entry;
const entry1 = { key: "json", value: null };
closure_6 = asyncGeneratorStep(async function () {
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
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[6] = entry1;
const entry2 = { key: "arrayBuffer", value: null };
closure_5 = asyncGeneratorStep(async function () {
  const self = this;
  c7 = 0;
  c10 = 0;
  c9 = 0;
  return (async (arg0) => {
    if (c10 === 2) {
      c10 = 3;
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
      while (true) {
        c10 = 2;
        let tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_6 = tmp;
            let reader;
            closure_134_1 = undefined;
            closure_134_2 = undefined;
            let done;
            value = undefined;
            closure_134_5 = undefined;
            closure_134_6 = undefined;
            closure_134_7 = undefined;
            closure_134_8 = undefined;
            closure_134_9 = undefined;
            let _throwIfBodyUsedResult = self._throwIfBodyUsed();
            self._bodyUsed = true;
            if (self._bodyStream) {
              if (!self._bodyBytes) {
                if (null == self._bodyString) {
                  let _bodyStream = self._bodyStream;
                  reader = _bodyStream.getReader();
                  closure_134_1 = [];
                  let readResult = reader.read();
                  c7 = 1;
                  c10 = 1;
                }
              }
            }
            let _getBodyBytesResult = self._getBodyBytes();
            arrayBuffer = _getBodyBytesResult;
            if (_getBodyBytesResult == null) {
              let _ArrayBuffer = ArrayBuffer;
              let tmp50 = new.target;
              let tmp51 = new.target;
              arrayBuffer = new ArrayBuffer(0);
            }
            c10 = 3;
            let obj4 = { value: arrayBuffer, done: true };
            return obj4;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            closure_134_2 = value;
            done = closure_134_2.done;
            value = closure_134_2.value;
            if (!done) {
              if (value) {
                let arr = closure_134_1.push(value);
              }
            }
          }
        } else if (2 === tmp4) {
          c9 = 0;
          closure_2.return();
          throw closure_1_8;
        } else {
          c9 = 0;
          closure_4.return();
          throw closure_1_8;
        }
        closure_134_5 = 0;
        closure_3 = closure_134_1;
        closure_2 = closure_134_1[Symbol.iterator]();
        while (closure_2 !== undefined) {
          closure_134_6 = tmp19;
          closure_134_5 = closure_134_5 + closure_134_6.byteLength;
          c9 = 0;
          continue;
        }
        let _Uint8Array = Uint8Array;
        let tmp25 = new.target;
        let tmp26 = new.target;
        let uint8Array = new Uint8Array(closure_134_5);
        closure_134_7 = uint8Array;
        closure_134_8 = 0;
        closure_5 = closure_134_1;
        closure_4 = closure_134_1[Symbol.iterator]();
        while (closure_4 !== undefined) {
          closure_134_9 = tmp33;
          let result = closure_134_7.set(closure_134_9, closure_134_8);
          closure_134_8 = closure_134_8 + closure_134_9.byteLength;
          c9 = 0;
          continue;
        }
        let buffer = closure_134_7.buffer;
        c10 = 3;
        let obj = {
          value: buffer.slice(closure_134_7.byteOffset, closure_134_7.byteOffset + closure_134_7.byteLength),
          done: true,
        };
        return obj;
      }
    }
  })();
});
entry2.value = function arrayBuffer() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[7] = entry2;
const entry3 = { key: "_drainStream", value: null };
closure_4 = asyncGeneratorStep(async function () {
  const self = this;
  c6 = 0;
  c9 = 0;
  c8 = 0;
  return (async (arg0) => {
    if (c9 === 2) {
      c9 = 3;
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
      while (true) {
        c9 = 2;
        let tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp;
            closure_133_2 = undefined;
            let done;
            value = undefined;
            closure_133_5 = undefined;
            closure_133_6 = undefined;
            closure_133_7 = undefined;
            closure_133_8 = undefined;
            closure_133_9 = undefined;
            let _bodyStream = self._bodyStream;
            let reader = _bodyStream.getReader();
            closure_133_1 = [];
            let readResult = reader.read();
            c6 = 1;
            c9 = 1;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_133_2 = value;
            done = closure_133_2.done;
            value = closure_133_2.value;
            if (!done) {
              if (value) {
                let arr = closure_133_1.push(value);
              }
            }
          }
        } else if (2 === tmp4) {
          c8 = 0;
          closure_1.return();
          throw closure_1_7;
        } else {
          c8 = 0;
          closure_3.return();
          throw closure_1_7;
        }
        closure_133_5 = 0;
        closure_2 = closure_133_1;
        closure_1 = closure_133_1[Symbol.iterator]();
        while (closure_1 !== undefined) {
          closure_133_6 = tmp19;
          closure_133_5 = closure_133_5 + closure_133_6.byteLength;
          c8 = 0;
          continue;
        }
        let _Uint8Array = Uint8Array;
        let tmp25 = new.target;
        let tmp26 = new.target;
        let uint8Array = new Uint8Array(closure_133_5);
        closure_133_7 = uint8Array;
        closure_133_8 = 0;
        closure_4 = closure_133_1;
        closure_3 = closure_133_1[Symbol.iterator]();
        while (closure_3 !== undefined) {
          closure_133_9 = tmp33;
          let result = closure_133_7.set(closure_133_9, closure_133_8);
          closure_133_8 = closure_133_8 + closure_133_9.byteLength;
          c8 = 0;
          continue;
        }
        let buffer = closure_133_7.buffer;
        c9 = 3;
        let obj = {
          value: buffer.slice(closure_133_7.byteOffset, closure_133_7.byteOffset + closure_133_7.byteLength),
          done: true,
        };
        return obj;
      }
    }
  })();
});
entry3.value = function _drainStream() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[8] = entry3;
const entry4 = { key: "blob", value: null };
closure_3 = asyncGeneratorStep(async function () {
  const self = this;
  c5 = 0;
  c6 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let _bodyBytes = self;
            closure_4 = tmp2;
            closure_132_0 = undefined;
            self._throwIfBodyUsed();
            self._bodyUsed = true;
            const headers = self.headers;
            value = headers.get("content-type");
            dependencyMap = value;
            if (value == null) {
              dependencyMap = "";
            }
            closure_132_0 = dependencyMap;
            if (_bodyBytes._bodyStream) {
              if (!_bodyBytes._bodyBytes) {
                if (null == _bodyBytes._bodyString) {
                  const tmp14 = self(9989);
                  closure_3 = tmp14;
                  bytesToBlob = tmp14.bytesToBlob;
                  c5 = 1;
                  c6 = 1;
                  const obj5 = { value: _bodyBytes._drainStream(), done: false };
                  return obj5;
                }
              }
            }
            if (null != _bodyBytes._bodyBytes) {
              _bodyBytes = _bodyBytes._bodyBytes;
              let bytesToBlobResult = self(9989).bytesToBlob(_bodyBytes, tmp11);
              const obj4 = self(9989);
            } else {
              const _Blob = Blob;
              items = [_bodyBytes._getBodyString()];
              const obj6 = { type: tmp11 };
              bytesToBlobResult = new Blob(items, obj6);
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else {
          if (arg0 !== 2) {
            bytesToBlob(value, closure_132_0);
            c6 = 3;
          }
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp24) {
        c6 = tmp;
        throw tmp24;
      }
    }
  })();
});
entry4.value = function blob() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[9] = entry4;
const entry5 = { key: "bytes", value: null };
_classCallCheck = asyncGeneratorStep(async function () {
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
entry5.value = function bytes() {
  const self = this;
  const apply = _classCallCheck.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[10] = entry5;
items[11] = {
  key: "clone",
  value: function clone() {
    if (this._bodyUsed) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot clone a Response whose body has been used.");
      throw typeError;
    } else {
      const response = {
        url: null,
        status: null,
        statusText: null,
        ok: null,
        redirected: null,
        headers: null,
        bodyBytes: null,
        bodyString: null,
        type: null,
      };
      ({
        url: obj.url,
        status: obj.status,
        statusText: obj.statusText,
        ok: obj.ok,
        redirected: obj.redirected,
        headers: obj.headers,
        _bodyBytes: obj.bodyBytes,
        _bodyString: obj.bodyString,
        type: obj.type,
      } = this);
      NitroResponse(response);
      return Object.create(NitroResponse.prototype);
    }
  },
};
const entry6 = { key: "formData", value: null };
duration = asyncGeneratorStep(async function () {
  const self = this;
  c3 = 0;
  c4 = 0;
  return (async () => {
    headers = self;
    await self.text();
    headers = headers.headers;
    return closure_1(value, headers.get("content-type"));
  })();
});
entry6.value = function formData() {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[12] = entry6;
const entry7 = {
  key: "error",
  value: function error() {
    NitroResponse({ url: "", status: 0, statusText: "", ok: false, redirected: false, headers: [], type: "error" });
    return Object.create(NitroResponse.prototype);
  },
};
const items1 = [
  entry7,
  {
    key: "json",
    value: function json(arg0, headers) {
      const json = JSON.stringify(arg0);
      headers = undefined;
      if (headers != null) {
        headers = headers.headers;
      }
      const nitroHeaders = new NitroResponse(9987).NitroHeaders(headers);
      if (!nitroHeaders.has("content-type")) {
        const result = nitroHeaders.set("content-type", "application/json");
      }
      let num;
      if (headers != null) {
        num = headers.status;
      }
      if (num == null) {
        num = 200;
      }
      const response = {
        url: "",
        status: num,
        statusText: null,
        ok: null,
        redirected: false,
        headers: null,
        bodyString: null,
      };
      let str2;
      if (headers != null) {
        str2 = headers.statusText;
      }
      if (str2 == null) {
        str2 = "";
      }
      response.statusText = str2;
      let num2;
      if (headers != null) {
        num2 = headers.status;
      }
      if (num2 == null) {
        num2 = 200;
      }
      let tmp5 = num2 >= 200;
      if (tmp5) {
        let num3;
        if (headers != null) {
          num3 = headers.status;
        }
        if (num3 == null) {
          num3 = 200;
        }
        tmp5 = num3 < 300;
      }
      response.ok = tmp5;
      response.headers = nitroHeaders;
      response.bodyString = json;
      NitroResponse(response);
      return Object.create(NitroResponse.prototype);
    },
  },
  {
    key: "redirect",
    value: function redirect(_loadingFrameUrl) {
      let num = arg1;
      if (arg1 === undefined) {
        num = 302;
      }
      items = [301, 302, 303, 307, 308];
      if (items.includes(num)) {
        const nitroHeaders = new NitroResponse(9987).NitroHeaders();
        const result = nitroHeaders.set("location", _loadingFrameUrl);
        const response = { url: "", status: num, statusText: "", ok: false, redirected: false, headers: nitroHeaders };
        NitroResponse(response);
        return Object.create(NitroResponse.prototype);
      } else {
        const _RangeError = RangeError;
        const _HermesInternal = HermesInternal;
        const rangeError = new RangeError("Invalid redirect status: " + num + ". Must be one of " + items.join(", "));
        throw rangeError;
      }
    },
  },
];
const importDefaultResult1Result = _createClass(NitroResponse, items, items1);
Object.defineProperty(importDefaultResult1Result.prototype, Symbol.toStringTag, {
  value: "Response",
  configurable: true,
});

export { parseFormData };
export const NitroResponse = importDefaultResult1Result;
