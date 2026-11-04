// === Module 1736: ? ===

// Module 1736
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let XMLHttpRequest = fn;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_6 = ["", "text", "arraybuffer", "blob", "json"];
class XMLHttpRequestUpload {
  constructor() {
    self = this;
    tmp = c2(this, XMLHttpRequest);
    tmp2 = closure_4;
    obj = closure_4(XMLHttpRequest);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
XMLHttpRequest = XMLHttpRequestUpload;
_inherits(XMLHttpRequestUpload, fn(1737).EventTargetLite);
let closure_7 = _createClass(XMLHttpRequestUpload);
class XMLHttpRequest {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = c2(this, XMLHttpRequest);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(XMLHttpRequest);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.UNSENT = 0;
    tmp3Result.OPENED = 1;
    tmp3Result.HEADERS_RECEIVED = 2;
    tmp3Result.LOADING = 3;
    tmp3Result.DONE = 4;
    tmp3Result.readyState = 0;
    tmp3Result.status = 0;
    tmp3Result.statusText = "";
    tmp3Result.responseURL = "";
    tmp3Result.timeout = 0;
    tmp3Result.withCredentials = true;
    tmp7 = new metroImportDefault();
    tmp3Result.upload = tmp7;
    tmp3Result.onreadystatechange = null;
    tmp3Result.onloadstart = null;
    tmp3Result.onprogress = null;
    tmp3Result.onload = null;
    tmp3Result.onloadend = null;
    tmp3Result.onerror = null;
    tmp3Result.ontimeout = null;
    tmp3Result.onabort = null;
    tmp3Result.requestId = null;
    tmp3Result.requestToken = 0;
    tmp3Result.method = "GET";
    tmp3Result.url = "";
    tmp3Result.sent = false;
    tmp3Result.hasRequestBody = false;
    tmp3Result.requestBodyLength = 0;
    tmp3Result.uploadSettled = false;
    tmp3Result.downloadedBytes = 0;
    tmp3Result.mimeTypeOverride = null;
    tmp3Result.requestHeaders = [];
    tmp3Result.responseHeaders = [];
    tmp3Result.responseTypeValue = "";
    tmp3Result.responseBytes = null;
    tmp3Result.responseBlobValue = null;
    tmp3Result.responseTextValue = null;
    tmp3Result.responseJsonValue = undefined;
    return tmp3Result;
  }
}
_inherits(XMLHttpRequest, fn(1737).EventTargetLite);
let items = [
  {
    key: "responseType",
    get() {
      return this.responseTypeValue;
    },
    set(responseTypeValue) {
      if (this.readyState >= 3) {
        const dOMException = new XMLHttpRequest(1738).DOMException("[Worklets] Failed to set 'responseType' on 'XMLHttpRequest': the response type cannot be changed once loading has started.", "InvalidStateError");
        throw dOMException;
      } else if (closure_6.includes(responseTypeValue)) {
        tmp.responseTypeValue = responseTypeValue;
      }
    }
  },
  {
    key: "response",
    get() {
      const self = this;
      const responseTypeValue = this.responseTypeValue;
      let str = "";
      if ("" !== responseTypeValue) {
        if ("text" !== responseTypeValue) {
          if ("arraybuffer" === responseTypeValue) {
            let responseBytes = null;
            if (4 === self.readyState) {
              responseBytes = self.responseBytes;
            }
            return responseBytes;
          } else if ("blob" === responseTypeValue) {
            let responseBlobValue = null;
            if (4 === self.readyState) {
              responseBlobValue = null;
              if (null !== self.responseBytes) {
                if (null === self.responseBlobValue) {
                  items = [];
                  ({ responseBytes: arr[0], mimeTypeOverride } = self);
                  if (mimeTypeOverride == null) {
                    mimeTypeOverride = self.getResponseHeader("content-type");
                  }
                  if (mimeTypeOverride == null) {
                    mimeTypeOverride = str;
                  }
                  const obj3 = { type: mimeTypeOverride };
                  const blob = new XMLHttpRequest(1739).Blob(items, obj3);
                  self.responseBlobValue = blob;
                }
                responseBlobValue = self.responseBlobValue;
              }
            }
            return responseBlobValue;
          } else if ("json" === responseTypeValue) {
            if (4 !== self.readyState) {
              return null;
            } else {
              if (undefined === self.responseJsonValue) {
                try {
                  let utf8DecodeResult = str;
                  if (null !== self.responseBytes) {
                    const obj = XMLHttpRequest(1741);
                    const _Uint8Array = Uint8Array;
                    const uint8Array = new Uint8Array(self.responseBytes);
                    utf8DecodeResult = obj.utf8Decode(XMLHttpRequest(1741).stripUtf8Bom(uint8Array));
                    const obj2 = XMLHttpRequest(1741);
                  }
                  self.responseJsonValue = JSON.parse(utf8DecodeResult);
                } catch (err) {
                  tmp.responseJsonValue = null;
                }
              }
              return self.responseJsonValue;
            }
          } else {
            return null;
          }
        }
      }
      if (self.readyState >= 3) {
        str = self.getResponseText();
      }
      return str;
    }
  },
  {
    key: "responseText",
    get() {
      const self = this;
      let str = "";
      if ("" !== this.responseTypeValue) {
        if ("text" !== self.responseTypeValue) {
          const dOMException = new XMLHttpRequest(1738).DOMException("[Worklets] Failed to read 'responseText' on 'XMLHttpRequest': the value is only accessible if the object's 'responseType' is '' or 'text'.", "InvalidStateError");
          throw dOMException;
        }
      }
      if (self.readyState >= 3) {
        str = self.getResponseText();
      }
      return str;
    }
  },
  {
    key: "open",
    value: function open(arg0, arg1) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = true;
      }
      const StringResult = String(arg0);
      const StringResult1 = String(arg1);
      if (obj.isToken(StringResult)) {
        if (tmp3Result.isForbiddenMethod(StringResult)) {
          const _HermesInternal2 = HermesInternal;
          const dOMException = new XMLHttpRequest(1738).DOMException("[Worklets] Failed to execute 'open' on 'XMLHttpRequest': '" + StringResult + "' HTTP method is unsupported.", "SecurityError");
          throw dOMException;
        } else if ("" === StringResult1) {
          const dOMException1 = new XMLHttpRequest(1738).DOMException("[Worklets] Failed to execute 'open' on 'XMLHttpRequest': the URL cannot be empty.", "SyntaxError");
          throw dOMException1;
        } else if (flag) {
          const self = this;
          this.terminate();
          this.method = XMLHttpRequest(1742).normalizeMethod(StringResult);
          this.url = StringResult1;
          this.sent = false;
          this.hasRequestBody = false;
          this.requestBodyLength = 0;
          this.uploadSettled = false;
          this.mimeTypeOverride = null;
          this.requestHeaders = [];
          this.resetResponse();
          if (1 !== this.readyState) {
            self.setReadyState(1);
          } else {
            self.readyState = 1;
          }
          const tmp3Result2 = XMLHttpRequest(1742);
        } else {
          const dOMException2 = new XMLHttpRequest(1738).DOMException("[Worklets] Synchronous XMLHttpRequest is not supported.", "InvalidAccessError");
          throw dOMException2;
        }
        tmp3Result = XMLHttpRequest(1742);
      } else {
        const _HermesInternal = HermesInternal;
        const dOMException3 = new XMLHttpRequest(1738).DOMException("[Worklets] Failed to execute 'open' on 'XMLHttpRequest': '" + StringResult + "' is not a valid HTTP method.", "SyntaxError");
        throw dOMException3;
      }
      obj = XMLHttpRequest(1742);
    }
  },
  {
    key: "setRequestHeader",
    value: function setRequestHeader(arg0, arg1) {
      const self = this;
      if (1 === this.readyState) {
        if (!self.sent) {
          const _String = String;
          const StringResult = String(arg0);
          const _String2 = String;
          const normalizeHeaderValueResult = XMLHttpRequest(1742).normalizeHeaderValue(String(arg1));
          const obj = XMLHttpRequest(1742);
          if (obj2.isHeaderName(StringResult)) {
            if (tmp5Result.isHeaderValue(normalizeHeaderValueResult)) {
              if (!tmp5Result3.isForbiddenRequestHeader(StringResult, normalizeHeaderValueResult)) {
                XMLHttpRequest(1742).combineHeader(self.requestHeaders, StringResult, normalizeHeaderValueResult);
                const tmp5Result4 = XMLHttpRequest(1742);
              }
              tmp5Result3 = XMLHttpRequest(1742);
            }
            tmp5Result = XMLHttpRequest(1742);
          }
          const _HermesInternal = HermesInternal;
          const dOMException = new XMLHttpRequest(1738).DOMException("[Worklets] Failed to execute 'setRequestHeader' on 'XMLHttpRequest': '" + StringResult + ": " + normalizeHeaderValueResult + "' is not a valid header.", "SyntaxError");
          throw dOMException;
        }
      }
      const dOMException1 = new XMLHttpRequest(1738).DOMException("[Worklets] Failed to execute 'setRequestHeader' on 'XMLHttpRequest': the object's state must be OPENED.", "InvalidStateError");
      throw dOMException1;
    }
  },
  {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      return XMLHttpRequest(1742).sortAndCombineHeaders(this.responseHeaders);
    }
  },
  {
    key: "getResponseHeader",
    value: function getResponseHeader(arg0) {
      return XMLHttpRequest(1742).getHeader(this.responseHeaders, String(arg0));
    }
  },
  {
    key: "overrideMimeType",
    value: function overrideMimeType(arg0) {
      const self = this;
      if (this.readyState >= 3) {
        const dOMException = new XMLHttpRequest(1738).DOMException("[Worklets] Failed to execute 'overrideMimeType' on 'XMLHttpRequest': the MIME type cannot be overridden once loading has started.", "InvalidStateError");
        throw dOMException;
      } else {
        const _String = String;
        self.mimeTypeOverride = String(arg0);
        self.responseTextValue = null;
      }
    }
  },
  {
    key: "send",
    value: function send(data) {
      const self = this;
      if (undefined === __workletsNetworking) {
        const dOMException = new XMLHttpRequest(1738).DOMException("[Worklets] XMLHttpRequest is not available on this runtime.", "InvalidStateError");
        throw dOMException;
      } else {
        if (1 === self.readyState) {
          if (!self.sent) {
            self.sent = true;
            if (obj.isSupportedRequestUrl(self.url)) {
              if ("GET" !== self.method) {
                if ("HEAD" !== self.method) {
                  if (null == data) {
                    let obj2 = {};
                  } else if (typeof data === "string") {
                    const obj3 = { data, contentType: "text/plain;charset=UTF-8" };
                    obj2 = obj3;
                  } else {
                    const _ArrayBuffer2 = ArrayBuffer;
                    if (data instanceof ArrayBuffer) {
                      const obj4 = { data };
                      obj2 = obj4;
                    } else {
                      let __getBytes;
                      if (data != null) {
                        __getBytes = data.__getBytes;
                      }
                      if (typeof __getBytes === "function") {
                        const obj6 = { data: tmp(1740).toArrayBuffer(data.__getBytes()), contentType: null };
                        let type;
                        if ("" !== data.type) {
                          type = data.type;
                        }
                        obj6.contentType = type;
                        obj2 = obj6;
                        const tmpResult = tmp(1740);
                      } else if (data instanceof tmp(1743).FormData) {
                        ({ body: obj5.data, contentType: obj5.contentType } = data.__encodeMultipart());
                        obj2 = { data: null, contentType: null };
                        const __encodeMultipartResult = data.__encodeMultipart();
                        const obj7 = { data: null, contentType: null };
                      } else {
                        const _ArrayBuffer = ArrayBuffer;
                        const obj8 = { data: null };
                        if (ArrayBuffer.isView(data)) {
                          const _Uint8Array = Uint8Array;
                          const uint8Array = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
                          obj8.data = tmp(1740).toArrayBuffer(uint8Array);
                          obj2 = obj8;
                          const tmpResult4 = tmp(1740);
                        } else {
                          const _String = String;
                          obj8.data = String(data);
                          obj2 = obj8;
                        }
                      }
                    }
                  }
                }
                ({ data, contentType } = obj2);
                items = [];
                HermesBuiltin.arraySpread(self.requestHeaders, 0);
                let hasHeaderResult = undefined === contentType;
                if (!hasHeaderResult) {
                  hasHeaderResult = tmp(1742).hasHeader(items, "content-type");
                  const tmpResult5 = tmp(1742);
                }
                if (!hasHeaderResult) {
                  const items1 = ["Content-Type", contentType];
                  items.push(items1);
                }
                self.hasRequestBody = undefined !== data;
                if (typeof data === "string") {
                  let num3 = tmp(1741).utf8Encode(data).length;
                  const tmpResult6 = tmp(1741);
                } else {
                  num3 = undefined;
                  if (data != null) {
                    num3 = data.byteLength;
                  }
                  if (num3 == null) {
                    num3 = 0;
                  }
                }
                self.requestBodyLength = num3;
                const sum = self.requestToken + 1;
                self.requestToken = sum;
                XMLHttpRequest = sum;
                const request = { method: null, url: null, headers: null, body: null, timeoutMs: null, withCredentials: null };
                ({ method: obj12.method, url: obj12.url } = self);
                request.headers = items;
                request.body = data;
                ({ timeout: obj12.timeoutMs, withCredentials: obj12.withCredentials } = self);
                self.requestId = __workletsNetworking.sendRequest(request, (arg0, total) => {
                  let tmp = sum === self.requestToken;
                  if (tmp) {
                    tmp = null !== self.requestId;
                  }
                  if (tmp) {
                    const result = self.handleNetworkingEvent(arg0, total);
                  }
                });
                self.__dispatch("loadstart");
                if (self.hasRequestBody) {
                  const upload = self.upload;
                  const obj9 = { loaded: 0, total: self.requestBodyLength, lengthComputable: self.requestBodyLength > 0 };
                  upload.__dispatch("loadstart", obj9);
                }
              }
              obj2 = { data: "PX_8", contentType: "__closure" };
            } else {
              self.__dispatch("loadstart");
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => self.handleRequestError("network", "Only http and https URLs are supported, got '" + self.url + "'."));
            }
            obj = XMLHttpRequest(1742);
          }
        }
        const dOMException1 = new XMLHttpRequest(1738).DOMException("[Worklets] Failed to execute 'send' on 'XMLHttpRequest': the object's state must be OPENED.", "InvalidStateError");
        throw dOMException1;
      }
    }
  },
  {
    key: "abort",
    value: function abort() {
      const self = this;
      if (1 !== this.readyState) {
        if (this.terminate()) {
          if (0 !== self.readyState) {
            if (4 === self.readyState) {
              self.resetResponse();
              self.readyState = 0;
            } else {
              self.resetResponse();
              self.setReadyState(4);
              const result = self.settleUploadWithError("abort");
              self.__dispatch("abort");
              self.__dispatch("loadend");
              if (4 === self.readyState) {
                self.readyState = 0;
              }
            }
          }
        }
        self.readyState = 0;
      }
    }
  },
  {
    key: "handleNetworkingEvent",
    value: function handleNetworkingEvent(arg0, total) {
      const self = this;
      if ("response" === arg0) {
        ({ status: self.status, statusText: self.statusText, headers: self.responseHeaders, url: self.responseURL } = total);
        const result = self.settleUploadWithSuccess();
        self.setReadyState(2);
      } else if ("downloadProgress" === arg0) {
        ({ loaded, total: total2 } = total);
        self.downloadedBytes = loaded;
        if (2 === self.readyState) {
          self.setReadyState(3);
        } else {
          self.__dispatch("readystatechange");
        }
        const obj2 = { loaded, total: null, lengthComputable: null };
        let num7 = 0;
        if (total2 > 0) {
          num7 = total2;
        }
        obj2.total = num7;
        obj2.lengthComputable = total2 > 0;
        self.__dispatch("progress", obj2);
      } else if ("uploadProgress" === arg0) {
        total = total.total;
        const upload = self.upload;
        const obj = { loaded: total.loaded, total: null, lengthComputable: null };
        let num3 = 0;
        if (total > 0) {
          num3 = total;
        }
        obj.total = num3;
        obj.lengthComputable = total > 0;
        upload.__dispatch("progress", obj);
      } else if ("done" === arg0) {
        self.requestId = null;
        const error = total.error;
        if (undefined !== error) {
          self.handleRequestError(error, tmp12);
        } else if (0 === self.status) {
          self.handleRequestError("network", "The request completed without a response.");
        } else {
          const result1 = self.handleResponseEndOfBody(tmp11);
        }
      }
    }
  },
  {
    key: "handleRequestError",
    value: function handleRequestError(arg0, message) {
      let str = "timeout";
      if ("timeout" !== arg0) {
        let str2 = "error";
        if ("aborted" === arg0) {
          str2 = "abort";
        }
        str = str2;
      }
      this.resetResponse();
      this.setReadyState(4);
      const result = this.settleUploadWithError(str);
      this.__dispatch(str, { message });
      this.__dispatch("loadend");
    }
  },
  {
    key: "handleResponseEndOfBody",
    value: function handleResponseEndOfBody(arg0) {
      const obj = {};
      let arrayBuffer = arg0;
      if (arg0 == null) {
        const _ArrayBuffer = ArrayBuffer;
        arrayBuffer = new ArrayBuffer(0);
      }
      obj.responseBytes = arrayBuffer;
      obj.responseTextValue = null;
      obj.responseBlobValue = null;
      obj.responseJsonValue = undefined;
      const bound = Math.max(obj.responseBytes.byteLength, obj.downloadedBytes);
      const responseHeader = obj.getResponseHeader("content-length");
      if (null === responseHeader) {
        const _Number2 = Number;
        let _NaN = Number.NaN;
      } else {
        const _Number = Number;
        _NaN = Number(responseHeader);
      }
      let num2 = 0;
      if (Number.isInteger(_NaN)) {
        num2 = 0;
        if (_NaN > 0) {
          num2 = _NaN;
        }
      }
      const obj2 = { loaded: bound, total: num2, lengthComputable: num2 > 0 };
      const result = obj.settleUploadWithSuccess();
      obj.__dispatch("progress", obj2);
      obj.setReadyState(4);
      obj.__dispatch("load", obj2);
      obj.__dispatch("loadend", obj2);
    }
  },
  {
    key: "settleUploadWithSuccess",
    value: function settleUploadWithSuccess() {
      const self = this;
      if (this.hasRequestBody) {
        if (!self.uploadSettled) {
          self.uploadSettled = true;
          const obj = { loaded: null, total: null, lengthComputable: null };
          ({ requestBodyLength: obj.loaded, requestBodyLength: obj.total } = self);
          obj.lengthComputable = self.requestBodyLength > 0;
          const upload = self.upload;
          upload.__dispatch("progress", obj);
          const upload2 = self.upload;
          upload2.__dispatch("load", obj);
          const upload3 = self.upload;
          upload3.__dispatch("loadend", obj);
        }
      }
    }
  },
  {
    key: "settleUploadWithError",
    value: function settleUploadWithError(abort) {
      const self = this;
      if (tmp) {
        self.uploadSettled = true;
        const upload = self.upload;
        upload.__dispatch(abort);
        const upload2 = self.upload;
        upload2.__dispatch("loadend");
      }
    }
  },
  {
    key: "getResponseText",
    value: function getResponseText() {
      const self = this;
      if (null !== this.responseTextValue) {
        return self.responseTextValue;
      } else {
        const responseBytes = self.responseBytes;
        let extractCharsetResult = XMLHttpRequest(1742).extractCharset(self.mimeTypeOverride);
        if (extractCharsetResult == null) {
          extractCharsetResult = XMLHttpRequest(1742).extractCharset(self.getResponseHeader("content-type"));
          const tmp8Result = XMLHttpRequest(1742);
        }
        let str3 = "";
        if (null !== responseBytes) {
          str3 = str2;
          if (0 !== responseBytes.byteLength) {
            const _globalThis = globalThis;
            if (undefined === globalThis.__workletsNetworking) {
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(responseBytes);
              str3 = XMLHttpRequest(1741).utf8Decode(uint8Array);
              const tmp8Result2 = XMLHttpRequest(1741);
            }
          }
          str3 = str2.decodeText(responseBytes, extractCharsetResult);
        }
        self.responseTextValue = str3;
        const obj3 = XMLHttpRequest(1742);
      }
    }
  },
  {
    key: "resetResponse",
    value: function resetResponse() {

    }
  },
  {
    key: "terminate",
    value: function terminate() {
      const self = this;
      if (null === this.requestId) {
        let flag = self.sent;
      } else {
        const _globalThis = globalThis;
        if (__workletsNetworking != null) {
          __workletsNetworking.abortRequest(self.requestId);
        }
        self.requestId = null;
        flag = true;
      }
      return flag;
    }
  },
  {
    key: "setReadyState",
    value: function setReadyState(readyState) {
      this.readyState = readyState;
      this.__dispatch("readystatechange");
    }
  }
];
const importDefaultResultResult = _createClass(XMLHttpRequest, items);
importDefaultResultResult.UNSENT = 0;
importDefaultResultResult.OPENED = 1;
importDefaultResultResult.HEADERS_RECEIVED = 2;
importDefaultResultResult.LOADING = 3;
importDefaultResultResult.DONE = 4;

export const XMLHttpRequest = importDefaultResultResult;