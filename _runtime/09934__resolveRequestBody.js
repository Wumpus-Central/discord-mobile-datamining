// === Module 9934: _resolveRequestBody ===

// Module 9934 (_resolveRequestBody)
import NitroRequest from "NitroRequest" /* 9927 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _resolveRequestBody(arg0) {
  if (c11 === 2) {
    c11 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c11 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_8 = tmp6;
          const request = closure_1;
          closure_136_0 = closure_1;
          closure_136_1 = undefined;
          closure_136_2 = undefined;
          if (typeof _require !== "string") {
            const _URL = URL;
            if (!(_require instanceof URL)) {
              if (_require instanceof NitroRequest.NitroRequest) {
                const rawBodyOfResult = NitroRequest.rawBodyOf(_require);
                let body;
                if (request != null) {
                  body = request.body;
                }
                let tmp41 = request;
                if (null == body) {
                  tmp41 = request;
                  if (null != rawBodyOfResult) {
                    closure_2 = request;
                    if (request == null) {
                      closure_2 = {};
                    }
                    const obj4 = {};
                    const merged = Object.assign(closure_2);
                    let headers;
                    if (request != null) {
                      headers = request.headers;
                    }
                    if (headers == null) {
                      headers = _require.headers;
                    }
                    obj4.headers = headers;
                    obj4.body = rawBodyOfResult;
                    tmp41 = obj4;
                  }
                }
                c11 = 3;
                const obj5 = { value: tmp41, done: true };
                return obj5;
              } else {
                let body1;
                if (request != null) {
                  body1 = request.body;
                }
                if (null != body1) {
                  c11 = 3;
                  const obj6 = { value: request, done: true };
                  return obj6;
                } else if (typeof _require.clone !== "function") {
                  c11 = 3;
                  const obj7 = { value: request, done: true };
                  return obj7;
                } else {
                  let method;
                  if (request != null) {
                    method = request.method;
                  }
                  if (method == null) {
                    method = _require.method;
                  }
                  let GET = method;
                  if (method == null) {
                    GET = "GET";
                  }
                  const formatted = GET.toUpperCase();
                  if ("GET" !== formatted) {
                    if ("HEAD" !== formatted) {
                      c10 = 1;
                      const _bodyInit = _require._bodyInit;
                      const _Blob = Blob;
                      if (typeof Blob === "undefined") {
                        const _ArrayBuffer = ArrayBuffer;
                        if (typeof ArrayBuffer === "undefined") {
                          const _ArrayBuffer2 = ArrayBuffer;
                          c9 = 3;
                          c11 = 1;
                          const obj8 = { value: _require.clone().text(), done: false };
                          return obj8;
                        } else {
                          const _ArrayBuffer3 = ArrayBuffer;
                        }
                      } else {
                        const _Blob2 = Blob;
                      }
                      if (typeof _require.arrayBuffer === "function") {
                        c9 = 2;
                        c11 = 1;
                        const obj9 = { value: _require.clone().arrayBuffer(), done: false };
                        return obj9;
                      }
                    }
                  }
                  c11 = 3;
                  const obj10 = { value: request, done: true };
                  return obj10;
                }
              }
            }
          }
          c11 = 3;
          const obj11 = { value: request, done: true };
          return obj11;
        }
      } else if (1 === tmp6) {
        c10 = 0;
        c11 = 3;
        const obj12 = { value: closure_136_0, done: true };
        return obj12;
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 0;
          c11 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_136_1 = value;
          if (0 !== closure_136_1.byteLength) {
            closure_6 = closure_136_0;
            if (closure_136_0 == null) {
              closure_6 = {};
            }
            const obj14 = {};
            const merged1 = Object.assign(closure_6);
            obj14.body = closure_136_1;
          }
          c10 = 0;
          c11 = 3;
        }
      } else if (arg0 === 1) {
        c11 = 3;
        throw value;
      } else if (arg0 === 2) {
        c10 = 0;
        c11 = 3;
        const obj15 = { value, done: true };
        return obj15;
      } else {
        closure_136_2 = value;
        if (0 !== closure_136_2.length) {
          closure_7 = closure_136_0;
          if (closure_136_0 == null) {
            closure_7 = {};
          }
          const obj = {};
          const merged2 = Object.assign(closure_7);
          obj.body = closure_136_2;
        }
        c10 = 0;
        c11 = 3;
      }
    } catch (tmp47) {
      if (tmp3 === c10) {
        c11 = tmp2;
        throw tmp47;
      } else {
        c9 = tmp;
      }
    }
  }
};
const contentType = async function _resolveBlobBody() {
  c4 = 0;
  c5 = 0;
  return (async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c3 = 0;
            c2 = 0;
            closure_130_0 = value;
            let body;
            let body2;
            closure_130_2 = undefined;
            let headers;
            closure_130_4 = undefined;
            if (value != null) {
              body = value.body;
            }
            if (body) {
              const _Blob = Blob;
              if (typeof Blob !== "undefined") {
                const _Blob2 = Blob;
                if (value.body instanceof Blob) {
                  body2 = value.body;
                  const promise = new Promise((arg0, arg1) => {
                    closure_0 = arg0;
                    closure_1 = arg1;
                    const fileReader = new FileReader();
                    fileReader.onload = () => closure_0(fileReader.result);
                    fileReader.onerror = () => closure_1(fileReader.error);
                    const asArrayBuffer = fileReader.readAsArrayBuffer(closure_1_1);
                  });
                  c4 = 1;
                  c5 = 1;
                  const obj4 = { value: promise, done: false };
                  return obj4;
                }
              }
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_130_2 = value;
          headers = closure_130_0.headers;
          if (body2.type) {
            const headersToPairsResult = closure_131_0(closure_131_1[1]).headersToPairs(headers);
            closure_1 = headersToPairsResult;
            if (headersToPairsResult == null) {
              closure_1 = [];
            }
            closure_130_4 = closure_1;
            if (!closure_130_4.some((key) => "content-type" === key.key.toLowerCase())) {
              const entry = { key: "Content-Type", value: body2.type };
              closure_130_4.push(entry);
              headers = closure_130_4.map((item) => {
                items = [, ];
                ({ key: arr[0], value: arr[1] } = item);
                return items;
              });
            }
            const obj = closure_131_0(closure_131_1[1]);
          }
          const obj8 = {};
          const merged = Object.assign(closure_130_0);
          obj8.body = closure_130_2;
          obj8.headers = headers;
          c5 = 3;
          const obj9 = { value: obj8, done: true };
          return obj9;
        }
      } catch (tmp32) {
        c5 = tmp;
        throw tmp32;
      }
    }
  })();
};
let items = [{ code: "(function viewToBuffer_Pnpm_bodyJs1(view){const buf=view.buffer;if(view.byteOffset===0&&view.byteLength===buf.byteLength)return buf;return buf.slice(view.byteOffset,view.byteOffset+view.byteLength);})" }];
[tmp2] = items;
function viewToBuffer(buffer) {
  buffer = buffer.buffer;
  if (0 !== buffer.byteOffset) {
    let substr = buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  } else {
    substr = buffer;
  }
  return substr;
}
viewToBuffer.__workletHash = 6585710296313;
viewToBuffer.__initData = tmp2;
const items1 = [{ code: "(function assertBodyAllowed_Pnpm_bodyJs2(method,body){if(body==null)return;const m=(method!==null&&method!==void 0?method:'GET').toUpperCase();if(m==='GET'||m==='HEAD'){throw new TypeError('Request with GET/HEAD method cannot have body.');}})" }];
[tmp3] = items1;
function serializeFormData(getParts) {
  items = [];
  if (typeof getParts.getParts === "function") {
    const parts = getParts.getParts();
    const iter = parts[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = nextResult;
      if (undefined !== nextResult.string) {
        let obj2 = { name: null, value: null };
        obj2.name = tmp8.fieldName;
        let _String = String;
        obj2.value = String(tmp8.string);
        let arr = items.push(obj2);
      } else if (tmp8.uri) {
        let obj = { name: null, fileUri: null, fileName: null, mimeType: null };
        ({ fieldName: obj.name, uri: obj.fileUri, fileName } = tmp8);
        if (fileName == null) {
          fileName = tmp8.name;
        }
        if (fileName == null) {
          fileName = "file";
        }
        obj.fileName = fileName;
        let str3 = tmp8.type;
        if (str3 == null) {
          str3 = "application/octet-stream";
        }
        obj.mimeType = str3;
        let arr3 = items.push(obj);
      }
      continue;
    }
    return items;
  } else {
    const item = getParts.forEach((value, name) => {
      if (typeof value === "string") {
        const obj2 = { name, value };
        items.push(obj2);
      } else {
        let tmp = value;
        if (value) {
          tmp = typeof value === "object";
        }
        if (tmp) {
          const obj = { name, fileUri: null, fileName: null, mimeType: null };
          let fileUri = value.uri;
          if (fileUri == null) {
            fileUri = value.fileUri;
          }
          obj.fileUri = fileUri;
          let str = value.name;
          if (str == null) {
            str = value.fileName;
          }
          if (str == null) {
            str = "file";
          }
          obj.fileName = str;
          let str2 = value.type;
          if (str2 == null) {
            str2 = value.mimeType;
          }
          if (str2 == null) {
            str2 = "application/octet-stream";
          }
          obj.mimeType = str2;
          items.push(obj);
        }
      }
    });
    return items;
  }
}
function isFormData(append) {
  let tmp = typeof FormData !== "undefined";
  if (typeof FormData !== "undefined") {
    const _FormData = FormData;
    tmp = append instanceof FormData;
  }
  if (!tmp) {
    let tmp2 = !append;
    if (append) {
      tmp2 = typeof append !== "object";
    }
    if (!tmp2) {
      tmp2 = typeof append.append !== "function";
    }
    if (!tmp2) {
      tmp2 = typeof append.getParts !== "function";
    }
    tmp = !tmp2;
  }
  return tmp;
}
function assertBodyAllowed(arg0, body) {
  if (null != body) {
    let str = arg0;
    if (arg0 == null) {
      str = "GET";
    }
    const formatted = str.toUpperCase();
    const _TypeError = TypeError;
    const typeError = new TypeError("Request with GET/HEAD method cannot have body.");
    throw typeError;
  }
}
assertBodyAllowed.__workletHash = 5605608569406;
assertBodyAllowed.__initData = tmp3;
const items2 = [{ code: "(function normalizeBody_Pnpm_bodyJs3(body){let[TEXT_CONTENT_TYPE,isFormData,serializeFormData,URLSearchParams,FORM_CONTENT_TYPE,BYTES_CONTENT_TYPE,viewToBuffer]=this.__closure;if(body==null)return undefined;if(typeof body==='string')return{bodyString:body,contentType:TEXT_CONTENT_TYPE};if(isFormData(body)){return{bodyFormData:serializeFormData(body)};}if(body instanceof URLSearchParams)return{bodyString:body.toString(),contentType:FORM_CONTENT_TYPE};if(typeof ArrayBuffer!=='undefined'&&body instanceof ArrayBuffer)return{bodyBytes:body,contentType:BYTES_CONTENT_TYPE};if(ArrayBuffer.isView(body)){return{bodyBytes:viewToBuffer(body),contentType:BYTES_CONTENT_TYPE};}throw new Error('Unsupported body type for nitro fetch');})" }, fn(9935).TEXT_CONTENT_TYPE, isFormData, serializeFormData, URLSearchParams, fn(9935).FORM_CONTENT_TYPE, fn(9935).BYTES_CONTENT_TYPE, viewToBuffer];
let closure_129_0;
let closure_129_1;
let closure_129_2;
let closure_129_3;
let closure_129_4;
let closure_129_5;
let closure_129_6;
[tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items2;
function normalizeBody(body1) {
  if (null != body1) {
    if (typeof body1 === "string") {
      const obj2 = { bodyString: body1, contentType: require };
      return obj2;
    } else if (dependencyMap(body1)) {
      const obj3 = { bodyFormData: asyncGeneratorStep(body1) };
      return obj3;
    } else if (body1 instanceof closure_3) {
      const obj4 = { bodyString: body1.toString(), contentType };
      return obj4;
    } else {
      const _ArrayBuffer = ArrayBuffer;
      if (typeof ArrayBuffer !== "undefined") {
        const _ArrayBuffer3 = ArrayBuffer;
        if (body1 instanceof ArrayBuffer) {
          const obj5 = { bodyBytes: body1, contentType: contentType2 };
          return obj5;
        }
      }
      const _ArrayBuffer2 = ArrayBuffer;
      if (ArrayBuffer.isView(body1)) {
        const obj = { bodyBytes: timestampProducer(body1), contentType: contentType2 };
        return obj;
      } else {
        const _Error = Error;
        const error = new Error("Unsupported body type for nitro fetch");
        throw error;
      }
    }
  }
}
const items3 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
normalizeBody.__closure = items3;
normalizeBody.__workletHash = 10320267193798;
normalizeBody.__initData = tmp4;
const items4 = [{ code: "(function normalizeBodyPure_Pnpm_bodyJs4(body){let[TEXT_CONTENT_TYPE,FORM_CONTENT_TYPE,BYTES_CONTENT_TYPE,viewToBuffer]=this.__closure;if(body==null)return undefined;if(typeof body==='string')return{bodyString:body,contentType:TEXT_CONTENT_TYPE};if(typeof body==='object'&&body!==null&&typeof body.toString==='function'&&Object.prototype.toString.call(body)==='[object URLSearchParams]'){return{bodyString:body.toString(),contentType:FORM_CONTENT_TYPE};}if(typeof ArrayBuffer!=='undefined'&&Object.prototype.toString.call(body)==='[object ArrayBuffer]'){return{bodyBytes:body,contentType:BYTES_CONTENT_TYPE};}if(ArrayBuffer.isView(body)){return{bodyBytes:viewToBuffer(body),contentType:BYTES_CONTENT_TYPE};}throw new Error('Unsupported body type for nitro fetch worklet (FormData is not available in worklets)');})" }, fn(9935).TEXT_CONTENT_TYPE, fn(9935).FORM_CONTENT_TYPE, fn(9935).BYTES_CONTENT_TYPE, viewToBuffer];
let closure_130_0;
let closure_130_1;
let closure_130_2;
let closure_130_3;
[tmp12, tmp13, tmp14, tmp15, tmp16] = items4;
function normalizeBodyPure(bodyString) {
  if (null != bodyString) {
    if (typeof bodyString === "string") {
      const obj2 = { bodyString, contentType: require };
      return obj2;
    } else {
      if (typeof bodyString === "object") {
        if (null !== bodyString) {
          if (typeof bodyString.toString === "function") {
            const _Object = Object;
            const call = toString.call;
            if ("[object URLSearchParams]" === (typeof call === "unknown" ? toString() : call(bodyString))) {
              const obj3 = { bodyString: bodyString.toString(), contentType: dependencyMap };
              return obj3;
            }
          }
        }
      }
      const _ArrayBuffer = ArrayBuffer;
      if (typeof ArrayBuffer !== "undefined") {
        const _Object2 = Object;
        const call2 = toString2.call;
        if ("[object ArrayBuffer]" === (typeof call2 === "unknown" ? toString2() : call2(bodyString))) {
          const obj4 = { bodyBytes: bodyString, contentType: asyncGeneratorStep };
          return obj4;
        }
      }
      const _ArrayBuffer2 = ArrayBuffer;
      if (ArrayBuffer.isView(bodyString)) {
        const obj = { bodyBytes: closure_3(bodyString), contentType: asyncGeneratorStep };
        return obj;
      } else {
        const _Error = Error;
        const error = new Error("Unsupported body type for nitro fetch worklet (FormData is not available in worklets)");
        throw error;
      }
    }
  }
}
const items5 = [tmp13, tmp14, tmp15, tmp16];
normalizeBodyPure.__closure = items5;
normalizeBodyPure.__workletHash = 15447287653261;
normalizeBodyPure.__initData = tmp12;

export { serializeFormData };
export { isFormData };
export { assertBodyAllowed };
export { normalizeBody };
export { normalizeBodyPure };
export function resolveRequestBody(arg0, arg1) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function resolveBlobBody(arg0) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}