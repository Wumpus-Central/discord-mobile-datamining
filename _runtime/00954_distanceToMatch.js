// _runtime/00954_distanceToMatch.js
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";
import _slicedToArray from "metro/00032__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

function distanceToMatch(nodeType, fn) {
  let num = arg2;
  if (arg2 === undefined) {
    num = Infinity;
  }
  let num2 = arg3;
  if (arg3 === undefined) {
    num2 = 0;
  }
  let num3 = -1;
  if (nodeType) {
    let num4 = -1;
    if (nodeType.nodeType === nodeType.ELEMENT_NODE) {
      num4 = -1;
      if (num2 <= num) {
        let tmp2 = num2;
        if (!fn(nodeType)) {
          tmp2 = distanceToMatch(nodeType.parentNode, fn, num, num2 + 1);
        }
        num4 = tmp2;
      }
    }
    num3 = num4;
  }
  return num3;
}
function hookSetter(headers, arg1, arg2, arg3) {
  closure_0 = headers;
  closure_1 = arg1;
  let tmp = arg2;
  closure_2 = arg2;
  let _window = arg4;
  if (arg4 === undefined) {
    _window = window;
  }
  const _Object = _window.Object;
  const ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(headers, arg1);
  const _Object2 = _window.Object;
  if (!arg3) {
    const obj = {
      set(arg0) {
          const self = this;
          closure_0 = arg0;
          setTimeout$1(() => {
            const call = set.call;
            if (typeof call === "unknown") {
              const result = set(closure_0);
            } else {
              call(self, closure_0);
            }
          }, 0);
          if (set) {
            set = set.set;
          }
          if (set) {
            let call = set2.call;
            if (typeof call === "unknown") {
              set2(arg0);
            } else {
              call(self, arg0);
            }
          }
        }
    };
    tmp = obj;
  }
  _Object2.defineProperty(headers, arg1, tmp);
  return () => {
    obj = closure_1_3;
    if (!closure_1_3) {
      obj = {};
    }
    closure_0 = closure_1_0;
    closure_1 = closure_1_1;
    let _Object = window.Object;
    let ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(closure_1_0, closure_1_1);
    let _Object2 = window.Object;
    _Object2.defineProperty(closure_1_0, closure_1_1, obj);
    return () => {
      obj = closure_1_3;
      if (!closure_1_3) {
        obj = {};
      }
      closure_0 = closure_1_0;
      closure_1 = closure_1_1;
      let _Object = window.Object;
      let ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(closure_1_0, closure_1_1);
      let _Object2 = window.Object;
      _Object2.defineProperty(closure_1_0, closure_1_1, obj);
      return () => {
        obj = closure_1_3;
        if (!closure_1_3) {
          obj = {};
        }
        closure_0 = closure_1_0;
        closure_1 = closure_1_1;
        let _Object = window.Object;
        let ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(closure_1_0, closure_1_1);
        let _Object2 = window.Object;
        _Object2.defineProperty(closure_1_0, closure_1_1, obj);
        return () => {
          obj = closure_1_3;
          if (!closure_1_3) {
            obj = {};
          }
          closure_0 = closure_1_0;
          closure_1 = closure_1_1;
          let _Object = window.Object;
          let ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(closure_1_0, closure_1_1);
          let _Object2 = window.Object;
          _Object2.defineProperty(closure_1_0, closure_1_1, obj);
          return () => { ... };
        };
      };
    };
  };
}
function patch(arg0, arg1, fn) {
  closure_0 = arg0;
  closure_1 = arg1;
  try {
    if (arg1 in arg0) {
      closure_2 = tmp2;
      const tmp4 = fn(arg0[arg1]);
      if (typeof tmp4 === "function") {
        let prototype = tmp5.prototype;
        if (!prototype) {
          prototype = {};
        }
        tmp5.prototype = prototype;
        const _Object = Object;
        __rrweb_original__ = { __rrweb_original__: null };
        __rrweb_original__ = { enumerable: false, value: tmp2 };
        __rrweb_original__.__rrweb_original__ = __rrweb_original__;
        Object.defineProperties(tmp5, __rrweb_original__);
      }
      arg0[arg1] = tmp4;
      return () => {
        closure_0[closure_1] = closure_2;
      };
    } else {
      return () => {

      };
    }
  } catch (err) {
    return () => {

    };
  }
}
function isBlocked(nodeType, arg1, arg2, arg3, arg4) {
  if (nodeType) {
    const obj = (function closestElementOfNode(nodeType) {
      if (nodeType) {
        try {
          let parentElement = nodeType;
          if (nodeType.nodeType !== nodeType.ELEMENT_NODE) {
            parentElement = nodeType.parentElement;
          }
          return parentElement;
        } catch (err) {
          return null;
        }
      } else {
        return null;
      }
    })(nodeType);
    if (obj) {
      c0 = arg1;
      closure_1 = arg2;
      const fn = (parentNode) => {
        if (null === parentNode) {
          return false;
        } else {
          try {
            if (c0) {
              if (typeof c0 === "string") {
                const _HermesInternal = HermesInternal;
                if (parentNode.matches("." + c0)) {
                  return true;
                }
              } else if ((function elementClassMatchesRegex(classList, test) {
                let diff = tmp - 1;
                if (+classList.classList.length) {
                  while (!test.test(classList.classList[diff])) {
                    let tmp4 = +diff;
                    diff = tmp4 - 1;
                  }
                  return true;
                }
                return false;
              })(parentNode, c0)) {
                return true;
              }
            }
            let tmp4 = !closure_1;
            if (closure_1) {
              tmp4 = !parentNode.matches(tmp3);
            }
            return !tmp4;
          } catch (err) {
            return false;
          }
        }
      };
      if (arg4) {
        let num2 = -1;
        if (obj) {
          let num3 = -1;
          if (obj.nodeType === obj.ELEMENT_NODE) {
            let num4 = 0;
            if (!fn(obj)) {
              const parentNode = obj.parentNode;
              let num5 = -1;
              if (parentNode) {
                let num6 = -1;
                if (parentNode.nodeType === parentNode.ELEMENT_NODE) {
                  num6 = -1;
                  if (Infinity >= 1) {
                    let num9 = 1;
                    if (!fn(parentNode)) {
                      num9 = distanceToMatch(parentNode.parentNode, fn, Infinity, 2);
                    }
                    num6 = num9;
                  }
                }
                num5 = num6;
              }
              num4 = num5;
            }
            num3 = num4;
          }
          num2 = num3;
        }
        let tmp9 = num2 >= 0;
        if (tmp9) {
          let num12 = -1;
          if (arg3) {
            c0 = null;
            closure_1 = arg3;
            let num13 = -1;
            if (obj) {
              let num14 = -1;
              if (obj.nodeType === obj.ELEMENT_NODE) {
                const fn2 = (parentNode) => {
                  if (null === parentNode) {
                    return false;
                  } else {
                    try {
                      if (c0) {
                        if (typeof c0 === "string") {
                          const _HermesInternal = HermesInternal;
                          if (parentNode.matches("." + c0)) {
                            return true;
                          }
                        } else if ((function elementClassMatchesRegex(classList, test) {
                          let diff = tmp - 1;
                          if (+classList.classList.length) {
                            while (!test.test(classList.classList[diff])) {
                              let tmp4 = +diff;
                              diff = tmp4 - 1;
                            }
                            return true;
                          }
                          return false;
                        })(parentNode, c0)) {
                          return true;
                        }
                      }
                      let tmp4 = !closure_1;
                      if (closure_1) {
                        tmp4 = !parentNode.matches(tmp3);
                      }
                      return !tmp4;
                    } catch (err) {
                      return false;
                    }
                  }
                };
                let num15 = 0;
                if (!fn2(obj)) {
                  const parentNode2 = obj.parentNode;
                  let num16 = -1;
                  if (parentNode2) {
                    let num17 = -1;
                    if (parentNode2.nodeType === parentNode2.ELEMENT_NODE) {
                      num17 = -1;
                      if (Infinity >= 1) {
                        let num20 = 1;
                        if (!fn2(parentNode2)) {
                          num20 = distanceToMatch(parentNode2.parentNode, fn2, Infinity, 2);
                        }
                        num17 = num20;
                      }
                    }
                    num16 = num17;
                  }
                  num15 = num16;
                }
                num14 = num15;
              }
              num13 = num14;
            }
            num12 = num13;
          }
          tmp9 = num2 > -1 && num12 < 0 || num2 < num12;
          const tmp13 = num2 > -1 && num12 < 0 || num2 < num12;
        }
        return tmp9;
      } else {
        let matchesResult = arg3;
        if (arg3) {
          matchesResult = obj.matches(arg3);
        }
        return fn(obj) && !matchesResult;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function getImplementation(arg0) {
  if (closure_14[arg0]) {
    return tmp2;
  } else {
    const _window = window;
    const _document = window.document;
    const _window2 = window;
    let obj = window[arg0];
    if (_document) {
      if (typeof _document.createElement === "function") {
        try {
          const element = <iframe />;
          element.hidden = true;
          const head = _document.head;
          head.appendChild(element);
          const contentWindow = element.contentWindow;
          if (contentWindow) {
            obj = tmp7[arg0];
          }
          const head2 = _document.head;
          head2.removeChild(element);
        } catch (err) {
        }
      }
    }
    const _window3 = window;
    const bindResult = obj.bind(window);
    tmp[arg0] = bindResult;
    return bindResult;
  }
}
function onRequestAnimationFrame() {
  const items = [...arguments];
  return getImplementation("requestAnimationFrame")(...items);
}
function setTimeout$1() {
  const items = [...arguments];
  return getImplementation("setTimeout")(...items);
}
function serializeArg(buffer, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  if (buffer instanceof Array) {
    return buffer.map((item) => serializeArg(item, closure_0, closure_1));
  } else if (null === buffer) {
    return buffer;
  } else {
    const _Float32Array = Float32Array;
    if (!(buffer instanceof Float32Array)) {
      const _Float64Array = Float64Array;
      if (!(buffer instanceof Float64Array)) {
        const _Int32Array = Int32Array;
        if (!(buffer instanceof Int32Array)) {
          const _Uint32Array = Uint32Array;
          if (!(buffer instanceof Uint32Array)) {
            const _Uint8Array = Uint8Array;
            if (!(buffer instanceof Uint8Array)) {
              const _Uint16Array = Uint16Array;
              if (!(buffer instanceof Uint16Array)) {
                const _Int16Array = Int16Array;
                if (!(buffer instanceof Int16Array)) {
                  const _Int8Array = Int8Array;
                  if (!(buffer instanceof Int8Array)) {
                    const _Uint8ClampedArray = Uint8ClampedArray;
                    if (!(buffer instanceof Uint8ClampedArray)) {
                      const _ArrayBuffer = ArrayBuffer;
                      if (buffer instanceof ArrayBuffer) {
                        let obj = { rr_type: buffer.constructor.name, base64: null };
                        const _Uint8Array2 = Uint8Array;
                        const uint8Array = new Uint8Array(buffer);
                        let str = "";
                        let num9 = 0;
                        let str2 = "";
                        if (0 < uint8Array.length) {
                          do {
                            let sum = num9 + 1;
                            let sum1 = num9 + 2;
                            str = `` + dependencyMap[uint8Array[num9] >> 2] + dependencyMap[(3 & uint8Array[num9]) << 4 | uint8Array[sum] >> 4] + dependencyMap[(15 & uint8Array[sum]) << 2 | uint8Array[sum1] >> 6] + dependencyMap[63 & uint8Array[sum1]];
                            num9 = num9 + 3;
                            str2 = str;
                          } while (num9 < length);
                        }
                        if (uint8Array.length % 3 === 2) {
                          let text = `${str2.substring(0, str2.length - 1)}=`;
                        } else {
                          text = str2;
                          if (length % 3 === 1) {
                            text = `${str2.substring(0, str2.length - 2)}==`;
                          }
                        }
                        obj.base64 = text;
                        return obj;
                      } else {
                        const _DataView = DataView;
                        if (buffer instanceof DataView) {
                          obj = { rr_type: buffer.constructor.name, args: null };
                          const items = [serializeArg(buffer.buffer, arg1, arg2), , ];
                          ({ byteOffset: arr4[1], byteLength: arr4[2] } = buffer);
                          obj.args = items;
                          return obj;
                        } else {
                          if (buffer instanceof globalThis.HTMLImageElement) {
                            const obj1 = { rr_type: buffer.constructor.name, src: buffer.src };
                            return obj1;
                          } else {
                            if (buffer instanceof globalThis.HTMLCanvasElement) {
                              const obj2 = { rr_type: "HTMLImageElement", src: buffer.toDataURL() };
                              return obj2;
                            } else {
                              if (buffer instanceof globalThis.ImageData) {
                                const obj3 = { rr_type: buffer.constructor.name, args: null };
                                const items1 = [serializeArg(buffer.data, arg1, arg2), , ];
                                ({ width: arr3[1], height: arr3[2] } = buffer);
                                obj3.args = items1;
                                let tmp3 = obj3;
                              } else if (typeof closure_26 === "function") {
                                closure_0 = buffer;
                                closure_1 = arg1;
                                const items2 = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"];
                                const found = items2.filter((item) => typeof dependencyMap[item] === "function");
                                const _Boolean = Boolean;
                                if (Boolean(found.find((item) => closure_0 instanceof dependencyMap[item]))) {
                                  obj = { rr_type: buffer.constructor.name, index: closure_23(buffer, arg1, arg2) };
                                  tmp3 = obj;
                                } else {
                                  tmp3 = buffer;
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                              return tmp3;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj4 = { rr_type: buffer.constructor.name, args: null };
    const _Object = Object;
    const items3 = [Object.values(buffer)];
    obj4.args = items3;
    return obj4;
  }
}
function initCanvasContextObserver(HTMLCanvasElement, arg1, arg2, arg3, arg4) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  closure_3 = arg4;
  let items = [];
  try {
    items.push(patch(HTMLCanvasElement.HTMLCanvasElement.prototype, "getContext", (arg0) => {
      closure_0 = arg0;
      return function(arg0) {
        const self = this;
        const substr = [...arguments].slice();
        if (!isBlocked(this, closure_0, closure_1, closure_2, true)) {
          let str = "webgl";
          if ("experimental-webgl" !== arg0) {
            str = arg0;
          }
          if (!("__context" in self)) {
            self.__context = str;
          }
          if (closure_3) {
            items = ["webgl", "webgl2"];
            if (items.includes(str)) {
              if (substr[0]) {
                if (typeof substr[0] === "object") {
                  const first = substr[0];
                  if (!first.preserveDrawingBuffer) {
                    first.preserveDrawingBuffer = true;
                  }
                }
              }
              substr.splice(0, 1, { preserveDrawingBuffer: true });
            }
          }
        }
        const items1 = [arg0, ...substr];
        return closure_0.apply(self, items1);
      };
    }));
    return () => {
      const item = items.forEach((fn) => fn());
    };
  } catch (err) {
    const _console = console;
    console.error("failed to patch HTMLCanvasElement.prototype.getContext");
  }
}
function patchGLPrototype(headers, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  closure_4 = arg4;
  closure_5 = arg5;
  closure_6 = arg7;
  let items = [];
  const ownPropertyNames = Object.getOwnPropertyNames(headers);
  for (const item10017 of ownPropertyNames) {
    let tmp2 = (function _loop2(item10017) {
      headers = item10017;
      items = ["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"];
      if (items.includes(item10017)) {
        return 0;
      } else {
        try {
          if (typeof headers[item10017] !== "function") {
            return 0;
          } else {
            items.push(patch(tmp3, item10017, (property) => function() {
              const self = this;
              items = [...arguments];
              const applyResult = property.apply(this, items);
              __initData3(applyResult, closure_6, this);
              if ("tagName" in this.canvas) {
                if (!isBlocked(self.canvas, closure_3, closure_4, closure_5, true)) {
                  if (typeof closure_4_25 === "function") {
                    property = closure_6;
                    const obj = { type, property, args: items.map((item) => closure_2_24(item, closure_0, closure_1)) };
                    closure_2(self.canvas, obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
              return applyResult;
            }));
          }
        } catch (err) {
          let obj = {
            set(arg0) {
                  const obj = { type, property, args: null, setter: true };
                  items = [arg0];
                  obj.args = items;
                  closure_2(this.canvas, obj);
                }
          };
          items.push(hookSetter(headers, tmp, obj));
        }
      }
    })(item10017);
    continue;
  }
  return items;
}
let closure_5 = ["type"];
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function __publicField$1(arg0, arg1, arg2) {

}
let closure_8 = (() => {
  class Mirror {
    constructor() {
      self = this;
      tmp = closure_3(this, Mirror);
      tmp2 = __publicField$1;
      map = new Map();
      if (typeof __publicField$1 === "function") {
        tmp4 = map;
        str = "idNodeMap";
        if ("idNodeMap" in self) {
          tmp5 = defineProperty;
          obj = { enumerable: true, configurable: true, writable: true, value: null };
          obj.value = map;
          tmp6 = defineProperty(self, "idNodeMap", obj);
        } else {
          self.idNodeMap = map;
        }
        _WeakMap = WeakMap;
        tmp7 = new.target;
        tmp8 = new.target;
        weakMap = new WeakMap();
        if (typeof tmp2 === "function") {
          tmp10 = weakMap;
          str2 = "nodeMetaMap";
          if ("nodeMetaMap" in self) {
            tmp11 = defineProperty;
            obj = { enumerable: true, configurable: true, writable: true, value: null };
            obj.value = weakMap;
            tmp12 = defineProperty(self, "nodeMetaMap", obj);
          } else {
            self.nodeMetaMap = weakMap;
          }
          return;
        } else {
          str4 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const entry = {
    key: "getId",
    value: function getId(arg0) {
      if (arg0) {
        const self = this;
        const meta = this.getMeta(arg0);
        let num2;
        if (meta != null) {
          num2 = meta.id;
        }
        if (num2 == null) {
          num2 = -1;
        }
        return num2;
      } else {
        return -1;
      }
    }
  };
  const items = [
    entry,
    {
      key: "getNode",
      value: function getNode(arg0) {
        const idNodeMap = this.idNodeMap;
        return idNodeMap.get(arg0) || null;
      }
    },
    {
      key: "getIds",
      value: function getIds() {
        const idNodeMap = this.idNodeMap;
        return Array.from(idNodeMap.keys());
      }
    },
    {
      key: "getMeta",
      value: function getMeta(arg0) {
        const nodeMetaMap = this.nodeMetaMap;
        return nodeMetaMap.get(arg0) || null;
      }
    },
    {
      key: "removeNodeFromMap",
      value: function removeNodeFromMap(childNodes) {
        const self = this;
        const idNodeMap = this.idNodeMap;
        idNodeMap.delete(this.getId(childNodes));
        if (childNodes.childNodes) {
          childNodes = childNodes.childNodes;
          const item = childNodes.forEach((item) => self.removeNodeFromMap(item));
        }
      }
    },
    {
      key: "has",
      value: function has(arg0) {
        const idNodeMap = this.idNodeMap;
        return idNodeMap.has(arg0);
      }
    },
    {
      key: "hasNode",
      value: function hasNode(arg0) {
        const nodeMetaMap = this.nodeMetaMap;
        return nodeMetaMap.has(arg0);
      }
    },
    {
      key: "add",
      value: function add(arg0, id) {
        const idNodeMap = this.idNodeMap;
        const result = idNodeMap.set(id.id, arg0);
        const nodeMetaMap = this.nodeMetaMap;
        const result1 = nodeMetaMap.set(arg0, id);
      }
    },
    {
      key: "replace",
      value: function replace(arg0, arg1) {
        const self = this;
        const node = this.getNode(arg0);
        if (node) {
          const nodeMetaMap = self.nodeMetaMap;
          value = nodeMetaMap.get(node);
          if (value) {
            const nodeMetaMap2 = self.nodeMetaMap;
            const result = nodeMetaMap2.set(arg1, value);
          }
        }
        const idNodeMap = self.idNodeMap;
        const result1 = idNodeMap.set(arg0, arg1);
      }
    },
    {
      key: "reset",
      value: function reset() {
        const obj = { idNodeMap: new Map() };
        const weakMap = new WeakMap();
        obj.nodeMetaMap = weakMap;
      }
    }
  ];
  return _createClass(Mirror, items);
})();
let c10 = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
let __rrweb_original__ = {
  map: {},
  getId() {
    console.error(c10);
    return -1;
  },
  getNode() {
    console.error(c10);
    return null;
  },
  removeNodeFromMap() {
    console.error(c10);
  },
  has() {
    console.error(c10);
    return false;
  },
  reset() {
    console.error(c10);
  }
};
let _Reflect = typeof window !== "undefined";
if (typeof window !== "undefined") {
  let _window2 = window;
  _Reflect = window.Proxy;
}
if (_Reflect) {
  let _window = window;
  _Reflect = window.Reflect;
}
if (_Reflect) {
  const _Proxy = Proxy;
  __rrweb_original__ = {
    get(arg0, arg1, arg2) {
        if ("map" === arg1) {
          const _console = console;
          console.error(c10);
        }
        return Reflect.get(arg0, arg1, arg2);
      }
  };
  const proxy = new Proxy(__rrweb_original__, __rrweb_original__);
}
let str = Date.now();
str = str.toString();
let closure_14 = {};
__rrweb_original__ = {};
((__rrweb_original__) => {
  __rrweb_original__["2D"] = 0;
  __rrweb_original__[0] = "2D";
  __rrweb_original__.WebGL = 1;
  __rrweb_original__[1] = "WebGL";
  __rrweb_original__.WebGL2 = 2;
  __rrweb_original__[2] = "WebGL2";
  return __rrweb_original__;
})(__rrweb_original__);
function callbackWrapper(arg0) {

}
let c21 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
if (typeof Uint8Array === "undefined") {
  let items = [];
} else {
  let _Uint8Array = Uint8Array;
  let uint8Array = new Uint8Array(256);
}