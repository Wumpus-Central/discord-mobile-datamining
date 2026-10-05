// _runtime/metro/00965__.js
import _mod693 from "00693__.js";
import _asyncToGenerator from "00005__asyncToGenerator.js";
import _slicedToArray_mod from "00032__slicedToArray.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let c1, c2, defineProperty, errorHandler, size;

let items;
let obj6;
let obj7;
let obj8;
let tmp10;
function createMirror$2() {
  const tmp = new closure_8();
  return tmp;
}
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
function hookSetter(headers, item10017, arg2, arg3) {
  let closure_3;
  const set2 = function set(arg0) {
    const self = this;
    let closure_0 = arg0;
    setTimeout$1(() => {
      set.set.call(self, closure_0);
    }, 0);
    const tmp3 = closure_3 && closure_3.set;
    if (tmp3) {
      set = closure_3.set;
      set.call(this, arg0);
    }
  };
  const f82627 = () => {
    let ownPropertyDescriptor;
    const tmp3 = ownPropertyDescriptor || {};
    let closure_0 = tmp;
    let closure_1 = tmp2;
    closure_2 = tmp3;
    const _Object = window.Object;
    ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(tmp, tmp2);
    const _Object2 = window.Object;
    _Object2.defineProperty(closure_0, closure_1, tmp3);
    return f82627;
  };
  let closure_0 = headers;
  let closure_1 = item10017;
  let tmp = arg2;
  let closure_2 = arg2;
  let _window = arg4;
  if (arg4 === undefined) {
    const tmp2 = globalThis;
    _window = window;
  }
  let _Object = _window.Object;
  let ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(headers, item10017);
  let _Object2 = _window.Object;
  defineProperty = _Object2.defineProperty;
  if (!arg3) {
    tmp = { set: set2 };
    const obj = { set: set2 };
  }
  defineProperty(headers, item10017, tmp);
  return f82627;
}
function patch(arg0, arg1, fn) {
  let obj2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  try {
    if (arg1 in arg0) {
      let closure_2 = tmp2;
      const tmp4 = fn(arg0[arg1]);
      if (typeof tmp4 === "function") {
        const prototype = tmp5.prototype || {};
        tmp4.prototype = prototype;
        const _Object = Object;
        const obj = { __rrweb_original__: obj2 };
        obj2 = { enumerable: false, value: arg0[arg1] };
        Object.defineProperties(tmp4, obj);
      }
      arg0[arg1] = tmp4;
      return () => {
        closure_0[closure_1] = closure_2;
      };
    } else {
      return () => {};
    }
  } catch (err) {
    return () => {};
  }
}
function isBlocked(nodeType, arg1, arg2, arg3, arg4) {
  const f82625 = (parentNode) => {
    function elementClassMatchesRegex(classList, test) {
      let diff = tmp - 1;
      if (+classList.classList.length) {
        while (!test.test(classList.classList[diff])) {
          let tmp4 = +diff;
          diff = tmp4 - 1;
        }
        return true;
      }
      return false;
    }
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
          } else if (elementClassMatchesRegex(parentNode, c0)) {
            return true;
          }
        }
        let tmp4 = !closure_1 || !parentNode.matches(tmp3);
        return !tmp4;
      } catch (err) {
        return false;
      }
    }
  };
  function closestElementOfNode(nodeType) {
    const tmp = nodeType;
    if (tmp) {
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
  }
  let tmp = nodeType;
  if (tmp) {
    const obj = closestElementOfNode(nodeType);
    if (obj) {
      const tmp3 = arg2;
      let tmp4 = arg3;
      let closure_0 = arg1;
      let closure_1 = arg2;
      const fn = f82625;
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
        let tmp10 = num2 >= 0;
        if (tmp10) {
          let num12 = -1;
          if (arg3) {
            let c0 = null;
            closure_1 = arg3;
            let num13 = -1;
            if (obj) {
              let num14 = -1;
              if (obj.nodeType === obj.ELEMENT_NODE) {
                const fn2 = f82625;
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
          tmp10 = (num2 > -1 && num12 < 0) || num2 < num12;
        }
        return tmp10;
      } else {
        const tmp6 = arg3 && obj.matches(arg3);
        const tmp7 = fn(obj) && !tmp6;
        return tmp7;
      }
    } else {
      return false;
    }
  } else {
    const flag = false;
    return false;
  }
}
function getImplementation(arg0) {
  if (closure_14[arg0]) {
    return closure_14[arg0];
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
          const contentWindow = element.contentWindow && tmp7[arg0];
          if (contentWindow) {
            obj = tmp7[arg0];
          }
          const head2 = _document.head;
          head2.removeChild(element);
        } catch (err) {}
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
  const tmp = getImplementation("requestAnimationFrame");
  return tmp(...items);
}
function setTimeout$1() {
  const items = [...arguments];
  const tmp = getImplementation("setTimeout");
  return tmp(...items);
}
function serializeArg(buffer, arg1, arg2) {
  let items;
  let items1;
  let items3;
  let text;
  let closure_0 = arg1;
  let closure_1 = arg2;
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
                        const _Uint8Array2 = Uint8Array;
                        const self = this;
                        const self2 = this;
                        const obj2 = { rr_type: buffer.constructor.name, base64: text };
                        const uint8Array = new Uint8Array(buffer);
                        let str = "";
                        let num9 = 0;
                        let str2 = "";
                        if (0 < uint8Array.length) {
                          do {
                            let sum = num9 + 1;
                            let sum1 = num9 + 2;
                            str =
                              `` +
                              c21[uint8Array[num9] >> 2] +
                              c21[((3 & uint8Array[num9]) << 4) | (uint8Array[sum] >> 4)] +
                              c21[((15 & uint8Array[sum]) << 2) | (uint8Array[sum1] >> 6)] +
                              c21[63 & uint8Array[sum1]];
                            num9 = num9 + 3;
                            str2 = str;
                          } while (num9 < uint8Array.length);
                        }
                        if (uint8Array.length % 3 === 2) {
                          text = `${str2.substring(0, str2.length - 1)}=`;
                        } else {
                          text = str2;
                          if (uint8Array.length % 3 === 1) {
                            text = `${str2.substring(0, str2.length - 2)}==`;
                          }
                        }
                        return obj2;
                      } else {
                        const _DataView = DataView;
                        if (buffer instanceof DataView) {
                          obj3 = { rr_type: buffer.constructor.name, args: items };
                          items = [serializeArg(buffer.buffer, arg1, arg2), ,];
                          ({ byteOffset: arr4[1], byteLength: arr4[2] } = buffer);
                          return obj3;
                        } else {
                          if (buffer instanceof globalThis.HTMLImageElement) {
                            return { rr_type: buffer.constructor.name, src: buffer.src };
                          } else {
                            if (buffer instanceof globalThis.HTMLCanvasElement) {
                              obj5 = { rr_type: "HTMLImageElement", src: buffer.toDataURL() };
                              return obj5;
                            } else {
                              let tmp3;
                              if (buffer instanceof globalThis.ImageData) {
                                const obj6 = { rr_type: buffer.constructor.name, args: items1 };
                                items1 = [serializeArg(buffer.data, arg1, arg2), ,];
                                ({ width: arr3[1], height: arr3[2] } = buffer);
                                tmp3 = obj6;
                              } else if (typeof isInstanceOfWebGLObject === "function") {
                                closure_0 = buffer;
                                closure_1 = arg1;
                                const items2 = [
                                  "WebGLActiveInfo",
                                  "WebGLBuffer",
                                  "WebGLFramebuffer",
                                  "WebGLProgram",
                                  "WebGLRenderbuffer",
                                  "WebGLShader",
                                  "WebGLShaderPrecisionFormat",
                                  "WebGLTexture",
                                  "WebGLUniformLocation",
                                  "WebGLVertexArrayObject",
                                  "WebGLVertexArrayObjectOES",
                                ];
                                const found = items2.filter((item) => typeof closure_1[item] === "function");
                                const _Boolean = Boolean;
                                if (Boolean(found.find((item) => closure_0 instanceof closure_1[item]))) {
                                  tmp3 = { rr_type: buffer.constructor.name, index: saveWebGLVar(buffer, arg1, arg2) };
                                  const obj = {
                                    rr_type: buffer.constructor.name,
                                    index: saveWebGLVar(buffer, arg1, arg2),
                                  };
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
    const _Object = Object;
    const obj7 = { rr_type: buffer.constructor.name, args: items3 };
    items3 = [Object.values(buffer)];
    return obj7;
  }
}
function initCanvasContextObserver(HTMLCanvasElement, arg1, arg2, arg3, arg4) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  let closure_3 = arg4;
  let items = [];
  try {
    let str = "getContext";
    items.push(
      patch(HTMLCanvasElement.HTMLCanvasElement.prototype, "getContext", (arg0) => {
        closure_0 = arg0;
        return function (arg0) {
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
      }),
    );
  } catch (err) {
    const _console = console;
    console.error("failed to patch HTMLCanvasElement.prototype.getContext");
  }
  return () => {
    const item = items.forEach((fn) => fn());
  };
}
function patchGLPrototype(headers, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  function _loop2(item10017) {
    let type;
    headers = item10017;
    items = ["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"];
    if (items.includes(item10017)) {
      return 0;
    } else {
      try {
        if (typeof headers[item10017] !== "function") {
          return 0;
        } else {
          items.push(
            patch(
              tmp2,
              item10017,
              (property) =>
                function () {
                  const self = this;
                  items = [...arguments];
                  const applyResult = property.apply(this, items);
                  saveWebGLVar(applyResult, closure_6, this);
                  if ("tagName" in this.canvas) {
                    if (!isBlocked(self.canvas, closure_3, closure_4, closure_5, true)) {
                      if (typeof serializeArgs === "function") {
                        property = closure_6;
                        const obj = {
                          type,
                          property,
                          args: items.map((item) => closure_2_24(item, closure_0, closure_1)),
                        };
                        closure_2(self.canvas, obj);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                  return applyResult;
                },
            ),
          );
        }
      } catch (err) {
        let obj = {
          set(arg0) {
            const obj = { type, property, args: items, setter: true };
            items = [arg0];
            closure_2(this.canvas, obj);
          },
        };
        items.push(hookSetter(headers, item10017, obj));
      }
    }
  }
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  let closure_4 = arg4;
  closure_5 = arg5;
  let closure_6 = arg7;
  let items = [];
  const ownPropertyNames = Object.getOwnPropertyNames(headers);
  for (const item10017 of ownPropertyNames) {
    let tmp2 = _loop2(item10017);
    continue;
  }
  return items;
}
let _slicedToArray = _slicedToArray_mod;
let closure_5 = ["type"];
const definePropertyResult = Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function __publicField$1(arg0, arg1, arg2) {}
let closure_8 = (() => {
  class Mirror {
    constructor() {
      const self = this;
      _classCallCheck(this, Mirror);
      map = new Map();
      if (typeof __publicField$1 === "function") {
        if ("idNodeMap" in self) {
          const obj = { enumerable: true, configurable: true, writable: true, value: map };
          defineProperty(self, "idNodeMap", obj);
        } else {
          self.idNodeMap = map;
        }
        const _WeakMap = WeakMap;
        const self2 = this;
        const self3 = this;
        const weakMap = new WeakMap();
        if (typeof __publicField$1 === "function") {
          if ("nodeMetaMap" in self) {
            const obj2 = { enumerable: true, configurable: true, writable: true, value: weakMap };
            defineProperty(self, "nodeMetaMap", obj2);
          } else {
            self.nodeMetaMap = weakMap;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const entry = {
    key: "getId",
    value: function getId(arg0) {
      const tmp = arg0;
      if (tmp) {
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
    },
  };
  const items = [
    entry,
    {
      key: "getNode",
      value: function getNode(arg0) {
        const idNodeMap = this.idNodeMap;
        const tmp = idNodeMap.get(arg0) || null;
        return tmp;
      },
    },
    {
      key: "getIds",
      value: function getIds() {
        const idNodeMap = this.idNodeMap;
        return Array.from(idNodeMap.keys());
      },
    },
    {
      key: "getMeta",
      value: function getMeta(arg0) {
        const nodeMetaMap = this.nodeMetaMap;
        const tmp = nodeMetaMap.get(arg0) || null;
        return tmp;
      },
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
      },
    },
    {
      key: "has",
      value: function has(arg0) {
        const idNodeMap = this.idNodeMap;
        return idNodeMap.has(arg0);
      },
    },
    {
      key: "hasNode",
      value: function hasNode(arg0) {
        const nodeMetaMap = this.nodeMetaMap;
        return nodeMetaMap.has(arg0);
      },
    },
    {
      key: "add",
      value: function add(arg0, id) {
        const idNodeMap = this.idNodeMap;
        const result = idNodeMap.set(id.id, arg0);
        const nodeMetaMap = this.nodeMetaMap;
        const result1 = nodeMetaMap.set(arg0, id);
      },
    },
    {
      key: "replace",
      value: function replace(arg0, arg1) {
        const self = this;
        const node = this.getNode(arg0);
        if (node) {
          const nodeMetaMap = self.nodeMetaMap;
          const value = nodeMetaMap.get(node);
          if (value) {
            const nodeMetaMap2 = self.nodeMetaMap;
            const result = nodeMetaMap2.set(arg1, value);
          }
        }
        const idNodeMap = self.idNodeMap;
        const result1 = idNodeMap.set(arg0, arg1);
      },
    },
    {
      key: "reset",
      value: function reset() {
        let weakMap;
        ({ idNodeMap: new Map(), nodeMetaMap: weakMap });
        new Map();
        weakMap = new WeakMap();
      },
    },
  ];
  return _createClass(Mirror, items);
})();
let c10 =
  "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
let obj = {
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
  },
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
  let obj2 = {
    get(arg0, arg1, arg2) {
      if ("map" === arg1) {
        const _console = console;
        console.error(c10);
      }
      return Reflect.get(arg0, arg1, arg2);
    },
  };
  let self = this;
  let tmp2 = obj;
  let tmp3 = obj2;
  const proxy = new Proxy(obj, obj2);
}
let str = Date.now();
str.toString();
let closure_14 = {};
let obj3 = {};
let tmp6 = ((arg0) => {
  arg0["2D"] = 0;
  arg0[0] = "2D";
  arg0.WebGL = 1;
  arg0[1] = "WebGL";
  arg0.WebGL2 = 2;
  arg0[2] = "WebGL2";
  return arg0;
})(obj3);
function callbackWrapper(arg0) {}
let c21 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
if (typeof Uint8Array === "undefined") {
  items = [];
} else {
  let _Uint8Array = Uint8Array;
  let self2 = this;
  let num5 = 256;
  let self3 = this;
  items = new Uint8Array(256);
}
let num = 0;
do {
  let charCodeAt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt;
  items["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(num)] = num;
  num = num + 1;
} while (num < 64);
let map = new Map();
function saveWebGLVar(applyResult, arg1, arg2) {
  const tmp = applyResult;
  if (tmp) {
    if (typeof isInstanceOfWebGLObject === "function") {
      let closure_0 = applyResult;
      let closure_1 = arg1;
      const items = [
        "WebGLActiveInfo",
        "WebGLBuffer",
        "WebGLFramebuffer",
        "WebGLProgram",
        "WebGLRenderbuffer",
        "WebGLShader",
        "WebGLShaderPrecisionFormat",
        "WebGLTexture",
        "WebGLUniformLocation",
        "WebGLVertexArrayObject",
        "WebGLVertexArrayObjectOES",
      ];
      const found = items.filter((item) => typeof closure_1[item] === "function");
      const _Boolean = Boolean;
      const name = applyResult.constructor.name;
      let value = map.get(arg2);
      const obj = map;
      if (!value) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
        const result = obj.set(arg2, map);
        value = map;
      }
      if (!value.has(name)) {
        const result1 = value.set(name, []);
      }
      const value2 = value.get(name);
      let length = value2.indexOf(applyResult);
      if (-1 === length) {
        length = value2.length;
        value2.push(applyResult);
      }
      return length;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function serializeArgs(arg0, arg1, arg2) {}
function isInstanceOfWebGLObject(arg0, arg1) {}
let closure_29 = (() => {
  class CanvasManager {
    constructor(recordCanvas) {
      let enableManualSnapshot;
      let sampling;
      const self = this;
      let tmp = _classCallCheck(this, CanvasManager);
      this.pendingCanvasMutations = new Map();
      this.rafStamps = { latestId: 0, invokeId: null };
      new Map();
      this.shadowDoms = new Set();
      new Set();
      const weakSet = new WeakSet();
      this.windowsSet = weakSet;
      this.windows = [];
      this.restoreHandlers = [];
      this.frozen = false;
      this.locked = false;
      this.snapshotInProgressMap = new Map();
      this.worker = null;
      this.lastSnapshotTime = 0;
      this.processMutation = (arg0, arg1) => {
        const tmp3 =
          !(self.rafStamps.invokeId && self.rafStamps.latestId !== self.rafStamps.invokeId) && self.rafStamps.invokeId;
        if (!tmp3) {
          self.rafStamps.invokeId = self.rafStamps.latestId;
        }
        const pendingCanvasMutations = self.pendingCanvasMutations;
        if (!pendingCanvasMutations.has(arg0)) {
          const pendingCanvasMutations2 = self.pendingCanvasMutations;
          const result = pendingCanvasMutations2.set(arg0, []);
        }
        const pendingCanvasMutations3 = self.pendingCanvasMutations;
        const value = pendingCanvasMutations3.get(arg0);
        value.push(arg1);
      };
      ({ enableManualSnapshot, sampling } = recordCanvas);
      let str = "all";
      new Map();
      if (undefined !== sampling) {
        str = sampling;
      }
      recordCanvas = recordCanvas.recordCanvas;
      errorHandler = recordCanvas.errorHandler;
      recordCanvas.sampling = str;
      ({ mutationCb: self.mutationCb, mirror: self.mirror } = recordCanvas);
      self.options = recordCanvas;
      const win = recordCanvas.win;
      if (recordCanvas) {
        recordCanvas = typeof str === "number";
      }
      if (!recordCanvas) {
        recordCanvas = enableManualSnapshot;
      }
      if (recordCanvas) {
        self.worker = self.initFPSWorker();
      }
      self.addWindow(win);
      if (!enableManualSnapshot) {
        if (typeof callbackWrapper === "function") {
          let fn = () => {
            let tmp = recordCanvas;
            const tmp2 = recordCanvas && "all" === str;
            if (tmp2) {
              self.startRAFTimestamping();
              const result = self.startPendingCanvasMutationFlusher();
            }
            if (tmp) {
              tmp = typeof str === "number";
            }
            if (tmp) {
              const canvasFPSObserver = self.initCanvasFPSObserver();
            }
          };
          const tmp8 = errorHandler;
          if (tmp8) {
            fn = () => {
              const items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                return HermesBuiltin.apply(fn, items1, undefined);
              } catch (tmp8) {
                if (closure_2_18) {
                  if (true === tmp9(tmp8)) {
                    return () => {};
                  }
                }
                throw tmp8;
              }
            };
          }
          fn();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  const entry = {
    key: "reset",
    value: function reset() {
      const self = this;
      const pendingCanvasMutations = this.pendingCanvasMutations;
      pendingCanvasMutations.clear();
      const restoreHandlers = this.restoreHandlers;
      const item = restoreHandlers.forEach((fn) => {
        try {
          fn();
        } catch (err) {}
      });
      this.restoreHandlers = [];
      const weakSet = new WeakSet();
      this.windowsSet = weakSet;
      this.windows = [];
      this.shadowDoms = new Set();
      const worker = this.worker;
      new Set();
      if (worker != null) {
        worker.terminate();
      }
      self.worker = null;
      self.snapshotInProgressMap = new Map();
      new Map();
    },
  };
  let items = [
    entry,
    {
      key: "freeze",
      value: function freeze() {
        this.frozen = true;
      },
    },
    {
      key: "unfreeze",
      value: function unfreeze() {
        this.frozen = false;
      },
    },
    {
      key: "lock",
      value: function lock() {
        this.locked = true;
      },
    },
    {
      key: "unlock",
      value: function unlock() {
        this.locked = false;
      },
    },
    {
      key: "addWindow",
      value: function addWindow(arg0) {
        let closure_3;
        let closure_4;
        const self = this;
        let closure_1 = arg0;
        const options = this.options;
        const sampling = options.sampling;
        let str = "all";
        if (undefined !== sampling) {
          str = sampling;
        }
        ({
          blockClass: closure_3,
          blockSelector: closure_4,
          unblockSelector: closure_5,
          recordCanvas: CanvasManager,
        } = options);
        const windowsSet = self.windowsSet;
        const enableManualSnapshot = options.enableManualSnapshot;
        if (!windowsSet.has(arg0)) {
          if (enableManualSnapshot) {
            const windowsSet3 = self.windowsSet;
            windowsSet3.add(arg0);
            const windows = self.windows;
            const _WeakRef2 = WeakRef;
            const self4 = this;
            const self5 = this;
            const push2 = windows.push;
            const weakRef = new WeakRef(arg0);
            push2(weakRef);
          } else if (typeof closure_20 === "function") {
            let fn = () => {
              let tmp2 = CanvasManager;
              if (CanvasManager) {
                tmp2 = "all" === str;
              }
              if (tmp2) {
                const canvasMutationObserver = self.initCanvasMutationObserver(
                  closure_1,
                  closure_3,
                  closure_4,
                  closure_5,
                );
              }
              if (CanvasManager) {
                if (typeof str === "number") {
                  CanvasManager = initCanvasContextObserver(closure_1, closure_3, closure_4, closure_5, true);
                  const restoreHandlers = self.restoreHandlers;
                  restoreHandlers.push(() => {
                    closure_0();
                  });
                }
              }
            };
            if (closure_18) {
              fn = () => {
                const items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, items, 0);
                  return HermesBuiltin.apply(fn, items1, undefined);
                } catch (tmp8) {
                  if (closure_2_18) {
                    if (true === tmp9(tmp8)) {
                      return () => {};
                    }
                  }
                  throw tmp8;
                }
              };
            }
            fn();
            const windowsSet2 = self.windowsSet;
            windowsSet2.add(arg0);
            const windows1 = self.windows;
            const _WeakRef = WeakRef;
            const self2 = this;
            const self3 = this;
            const push = windows1.push;
            const weakRef1 = new WeakRef(arg0);
            push(weakRef1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      },
    },
    {
      key: "addShadowRoot",
      value: function addShadowRoot(arg0) {
        const shadowDoms = this.shadowDoms;
        const add = shadowDoms.add;
        const weakRef = new WeakRef(arg0);
        add(weakRef);
      },
    },
    {
      key: "resetShadowRoots",
      value: function resetShadowRoots() {
        this.shadowDoms = new Set();
        new Set();
      },
    },
    {
      key: "snapshot",
      value: function snapshot(arg0, skipRequestAnimationFrame) {
        const self = this;
        let closure_0 = arg0;
        let prop;
        if (skipRequestAnimationFrame != null) {
          prop = skipRequestAnimationFrame.skipRequestAnimationFrame;
        }
        if (prop) {
          const _performance = performance;
          self.takeSnapshot(performance.now(), true, arg0);
        } else {
          onRequestAnimationFrame((arg0) => self.takeSnapshot(arg0, true, closure_0));
        }
      },
    },
    {
      key: "initFPSWorker",
      value: function initFPSWorker() {
        const self = this;
        const blob = new Blob([
          'for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};',
        ]);
        const worker = new globalThis.Worker(URL.createObjectURL(blob));
        worker.onmessage = (data) => {
          let height;
          let items;
          let items1;
          let items2;
          let items3;
          let items4;
          let width;
          data = data.data;
          const id = data.id;
          const snapshotInProgressMap = self.snapshotInProgressMap;
          const result = snapshotInProgressMap.set(id, false);
          if ("base64" in data) {
            ({ width, height } = data);
            obj3 = { property: "clearRect", args: items };
            items = [0, 0, width, height];
            const obj2 = { id, type: closure_2_19["2D"], commands: items1 };
            items1 = [obj3];
            const obj6 = { rr_type: "Blob", data: items2, type: data.type };
            items2 = [{ rr_type: "ArrayBuffer", base64: data.base64 }];
            obj5 = { rr_type: "ImageBitmap", args: items3 };
            items3 = [obj6];
            const obj4 = { property: "drawImage", args: items4 };
            items4 = [obj5, 0, 0, width, height];
            const obj7 = { rr_type: "ArrayBuffer", base64: data.base64 };
            items1[1] = obj4;
            self.mutationCb(obj2);
          }
        };
        return worker;
      },
    },
    {
      key: "initCanvasFPSObserver",
      value: function initCanvasFPSObserver() {
        const self = this;
        if (this.windows.length) {
          function rafCallback(arg0) {
            self.takeSnapshot(arg0, false);
            closure_1 = onRequestAnimationFrame(rafCallback);
          }
          let closure_1 = closure_16(rafCallback);
          const restoreHandlers = self.restoreHandlers;
          restoreHandlers.push(() => {
            if (closure_1) {
              const _cancelAnimationFrame = cancelAnimationFrame;
              cancelAnimationFrame(closure_1);
            }
          });
        }
      },
    },
    {
      key: "initCanvasMutationObserver",
      value: function initCanvasMutationObserver(WebGLRenderingContext, arg1, arg2, arg3) {
        function initCanvas2DMutationObserver(arg0, CanvasRenderingContext2D, arg2, arg3, arg4) {
          closure_0 = arg0;
          let closure_2 = arg2;
          let closure_3 = arg3;
          let closure_4 = arg4;
          closure_5 = [];
          const ownPropertyNames = Object.getOwnPropertyNames(
            CanvasRenderingContext2D.CanvasRenderingContext2D.prototype,
          );
          function _loop(iter) {
            const property = iter;
            try {
              if (typeof CanvasRenderingContext2D.CanvasRenderingContext2D.prototype[iter] !== "function") {
                return 1;
              } else {
                let arr = closure_5.push(
                  closure_1_12(tmp2.CanvasRenderingContext2D.prototype, iter, (arg0) => {
                    closure_0 = arg0;
                    return function () {
                      const self = this;
                      let items = [...arguments];
                      if (!closure_4_13(this.canvas, closure_2, closure_3, closure_4, true)) {
                        closure_4_17(() => {
                          const arr = items;
                          if (typeof closure_4_25 === "function") {
                            items = closure_3_1;
                            closure_1 = self;
                            const obj = {
                              type: v2D["2D"],
                              property,
                              args: arr.map((item) => closure_2_24(item, closure_0, closure_1)),
                            };
                            items(self.canvas, obj);
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }, 0);
                      }
                      return property.apply(this, items);
                    };
                  }),
                );
              }
            } catch (err) {
              let obj = {
                set(arg0) {
                  let items;
                  const obj = { type: v2D["2D"], property, args: items, setter: true };
                  items = [arg0];
                  property(this.canvas, obj);
                },
              };
              closure_5.push(closure_1_11(CanvasRenderingContext2D.CanvasRenderingContext2D.prototype, iter, obj));
            }
          }
          const iter = ownPropertyNames[Symbol.iterator]();
          while (iter !== undefined) {
            let _loopResult = _loop(iter.next());
            continue;
          }
          return () => {
            const item = closure_5.forEach((fn) => fn());
          };
        }
        let closure_0 = closure_27(WebGLRenderingContext, arg1, arg2, arg3, false);
        const processMutation = this.processMutation;
        let closure_1 = initCanvas2DMutationObserver(
          processMutation.bind(this),
          WebGLRenderingContext,
          arg1,
          arg2,
          arg3,
        );
        const processMutation2 = this.processMutation;
        const bindResult = processMutation2.bind(this);
        let items = [];
        const items1 = [
          ...closure_28(
            WebGLRenderingContext.WebGLRenderingContext.prototype,
            closure_19.WebGL,
            bindResult,
            arg1,
            arg2,
            arg3,
            0,
            WebGLRenderingContext,
          ),
        ];
        items.push.apply(items1);
        if (undefined !== WebGLRenderingContext.WebGL2RenderingContext) {
          const push = items.push;
          const items2 = [];
          HermesBuiltin.arraySpread(
            items2,
            closure_28(
              WebGLRenderingContext.WebGL2RenderingContext.prototype,
              v2D.WebGL2,
              bindResult,
              arg1,
              arg2,
              arg3,
              0,
              WebGLRenderingContext,
            ),
            0,
          );
          HermesBuiltin.apply(push, items2, items);
        }
        const f149965 = () => {};
        const restoreHandlers = this.restoreHandlers;
        let arr = restoreHandlers.push(() => {
          closure_0();
          closure_1();
          if (typeof f149965 === "function") {
            const item = closure_130_0.forEach((fn) => fn());
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
      },
    },
    {
      key: "getCanvasElements",
      value: function getCanvasElements(blockClass, blockSelector, unblockSelector) {
        let closure_0 = blockClass;
        let closure_1 = blockSelector;
        let closure_2 = unblockSelector;
        const items = [];
        function searchCanvas(querySelectorAll) {
          const elements = querySelectorAll.querySelectorAll("canvas");
          const item = elements.forEach((item) => {
            if (!closure_2_13(item, blockClass, blockSelector, unblockSelector, true)) {
              items.push(item);
            }
          });
        }
        const iter = this.windows[Symbol.iterator]();
        const nextResult = iter.next();
        if (iter === undefined) {
          const shadowDoms = this.shadowDoms;
          for (const item10031 of shadowDoms) {
            let derefResult = item10031.deref();
            if (derefResult) {
              let searchCanvasResult = searchCanvas(tmp10);
            }
            continue;
          }
          return items;
        } else {
          const derefResult1 = nextResult.deref();
          let tmp2;
          try {
            const _document = derefResult1 && derefResult1.document;
            tmp2 = _document;
          } catch (err) {}
          const tmp4 = tmp2;
          if (tmp4) {
            searchCanvas(tmp2);
          }
        }
      },
    },
    {
      key: "takeSnapshot",
      value: function takeSnapshot(lastSnapshotTime, arg1, arg2) {
        let blockClass;
        let blockSelector;
        let closure_2;
        let dataURLOptions;
        let maxCanvasSize;
        let sampling;
        let unblockSelector;
        const self = this;
        let closure_1 = arg1;
        const options = this.options;
        ({ sampling, dataURLOptions: closure_2, maxCanvasSize: CanvasManager } = options);
        ({ blockClass, blockSelector, unblockSelector } = options);
        if ("all" !== sampling) {
          if (!sampling) {
            sampling = 2;
          }
        }
        let flag = !(self.lastSnapshotTime && lastSnapshotTime - self.lastSnapshotTime < tmp2);
        const tmp3 = self.lastSnapshotTime && lastSnapshotTime - self.lastSnapshotTime < tmp2;
        if (flag) {
          let canvasElements;
          let tmp4 = arg2;
          self.lastSnapshotTime = lastSnapshotTime;
          if (arg2) {
            let items = [arg2];
            canvasElements = items;
          } else {
            canvasElements = self.getCanvasElements(blockClass, blockSelector, unblockSelector);
          }
          const item = canvasElements.forEach((width) => {
            let closure_0 = width;
            const mirror = self.mirror;
            const id = mirror.getId(width);
            const mirror2 = self.mirror;
            if (mirror2.hasNode(width)) {
              if (width.width) {
                if (width.height) {
                  let snapshotInProgressMap = self.snapshotInProgressMap;
                  if (!snapshotInProgressMap.get(id)) {
                    const snapshotInProgressMap2 = self.snapshotInProgressMap;
                    const result = snapshotInProgressMap2.set(id, true);
                    const tmp4 = id;
                    if (!tmp4) {
                      let items = ["webgl", "webgl2"];
                      if (items.includes(width.__context)) {
                        const context = width.getContext(width.__context);
                        let prop;
                        if (context != null) {
                          const contextAttributes = context.getContextAttributes();
                          if (contextAttributes != null) {
                            prop = contextAttributes.preserveDrawingBuffer;
                          }
                        }
                        if (false === prop) {
                          context.clear(context.COLOR_BUFFER_BIT);
                        }
                      }
                    }
                    const tmp9 = globalThis;
                    const imageBitmap = globalThis.createImageBitmap(width);
                    const nextPromise = imageBitmap.then((bitmap) => {
                      const worker = self.worker;
                      if (worker != null) {
                        size = { id, bitmap, width: null, height: null, dataURLOptions, maxCanvasSize: CanvasManager };
                        ({ width: obj.width, height: obj.height } = width);
                        const items = [bitmap];
                        worker.postMessage(size, items);
                      }
                    });
                    nextPromise.catch((error) => {
                      let closure_0 = error;
                      if (typeof closure_2_20 === "function") {
                        let fn = () => {
                          const snapshotInProgressMap = self.snapshotInProgressMap;
                          snapshotInProgressMap.delete(id);
                          throw error;
                        };
                        if (closure_2_18) {
                          fn = () => {
                            const items = [...arguments];
                            try {
                              const items1 = [];
                              HermesBuiltin.arraySpread(items1, items, 0);
                              return HermesBuiltin.apply(fn, items1, undefined);
                            } catch (tmp8) {
                              if (closure_2_18) {
                                if (true === tmp9(tmp8)) {
                                  return () => {};
                                }
                              }
                              throw tmp8;
                            }
                          };
                        }
                        fn();
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                  }
                }
              }
            }
          });
          flag = true;
        }
        return flag;
      },
    },
    {
      key: "startPendingCanvasMutationFlusher",
      value: function startPendingCanvasMutationFlusher() {
        const self = this;
        onRequestAnimationFrame(() => self.flushPendingCanvasMutations());
      },
    },
    {
      key: "startRAFTimestamping",
      value: function startRAFTimestamping() {
        const self = this;
        function setLatestRAFTimestamp(latestId) {
          self.rafStamps.latestId = latestId;
          onRequestAnimationFrame(setLatestRAFTimestamp);
        }
        closure_16(setLatestRAFTimestamp);
      },
    },
    {
      key: "flushPendingCanvasMutations",
      value: function flushPendingCanvasMutations() {
        const self = this;
        const prop = this.pendingCanvasMutations;
        const item = prop.forEach((item, index) => {
          const mirror = self.mirror;
          const result = self.flushPendingCanvasMutationFor(index, mirror.getId(index));
        });
        onRequestAnimationFrame(() => self.flushPendingCanvasMutations());
      },
    },
    {
      key: "flushPendingCanvasMutationFor",
      value: function flushPendingCanvasMutationFor(index, id) {
        const self = this;
        if (!this.frozen) {
          if (!self.locked) {
            const pendingCanvasMutations = self.pendingCanvasMutations;
            const value = pendingCanvasMutations.get(index);
            if (value) {
              if (-1 !== id) {
                const obj = { id, type: value[0].type, commands: value.map((item) => closure_1_2(item, closure_1_5)) };
                self.mutationCb(obj);
                const pendingCanvasMutations2 = self.pendingCanvasMutations;
                pendingCanvasMutations2.delete(index);
              }
            }
          }
        }
      },
    },
  ];
  return _createClass(CanvasManager, items);
})();
try {
  const _Array = Array;
  let num2 = 2;
  if (2 !== Array.from([1], (arg0) => 2 * arg0)[0]) {
    const _document2 = document;
    let element = <iframe />;
    const _document3 = document;
    const body2 = document.body;
    body2.appendChild(element);
    let contentWindow = element.contentWindow;
    let from;
    const _Array3 = Array;
    if (contentWindow != null) {
      from = contentWindow.Array.from;
    }
    if (!from) {
      const _Array2 = Array;
      from = Array.from;
    }
    _Array3.from = from;
    let _document = document;
    body.removeChild(element);
  }
  !createMirror$2();
  let obj4 = { NotStarted: 0, Running: 1, Stopped: 2 };
  obj4[0] = "NotStarted";
  obj4[1] = "Running";
  let num3 = 2;
  obj4[2] = "Stopped";
  let obj5 = { low: obj6, medium: obj7, high: obj8 };
  obj6 = { sampling: { canvas: 1 }, dataURLOptions: { type: "image/webp", quality: 0.25 } };
  obj7 = { sampling: { canvas: 2 }, dataURLOptions: { type: "image/webp", quality: 0.4 } };
  let num4 = 1280;
  let c31 = 1280;
  obj8 = { sampling: { canvas: 4 }, dataURLOptions: { type: "image/webp", quality: 0.5 } };
  const _module = _mod693;
  exports.replayCanvasIntegration = _module.defineIntegration(() => {
    let bound;
    let items;
    let medium;
    let promise;
    let tmp3;
    let tmp4;
    let tmp6;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let closure_0;
    _slicedToArray = undefined;
    let tmp = obj.maxCanvasSize || [];
    let tmp2 = _slicedToArray(tmp, 2);
    [tmp3, tmp4] = tmp2;
    let obj2 = {
      quality: obj.quality || "medium",
      enableManualSnapshot: obj.enableManualSnapshot,
      maxCanvasSize: items,
    };
    if (tmp3) {
      const tmp8 = globalThis;
      const _Math = Math;
      bound = Math.min(tmp3, c31);
      tmp6 = c31;
    } else {
      tmp6 = c31;
      bound = c31;
    }
    items = [bound];
    let bound1 = tmp6;
    if (tmp4) {
      const _Math2 = Math;
      bound1 = Math.min(tmp4, tmp6);
    }
    items[1] = bound1;
    new Promise((arg0) => {
      c1 = arg0;
      return arg0;
    });
    obj3 = {
      name: "ReplayCanvas",
      getOptions() {
        const enableManualSnapshot = obj2.enableManualSnapshot;
        const maxCanvasSize = obj2.maxCanvasSize;
        let obj = {
          enableManualSnapshot,
          recordCanvas: true,
          getCanvasManager(arg0) {
            const obj = {
              enableManualSnapshot,
              maxCanvasSize,
              errorHandler(obj) {
                try {
                  if (typeof obj === "object") {
                    obj.__rrweb__ = true;
                  }
                } catch (err) {}
              },
            };
            const merged = Object.assign(arg0);
            const tmp2 = new closure_29(obj);
            closure_0 = tmp2;
            maxCanvasSize(tmp2);
            return tmp2;
          },
        };
        const tmp = medium[obj2.quality] || medium.medium;
        let merged = Object.assign(tmp);
        return obj;
      },
      snapshot(arg0, arg1) {
        closure_0 = arg0;
        let closure_1 = arg1;
        return closure_0(function* () {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let obj;
              c2 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_0 = tmp3;
                  obj = closure_0;
                  if (!obj) {
                    c1 = 1;
                    c2 = 1;
                    const obj4 = { value, done: false };
                    return obj4;
                  }
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else {
                obj = value;
                if (arg0 === 2) {
                  c2 = 3;
                  obj5 = { value, done: true };
                  return obj5;
                }
              }
              obj.snapshot(closure_128_0, closure_128_1);
              c2 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp8) {
              c2 = 3;
              throw tmp8;
            }
          }
        })();
      },
    };
    return obj3;
  });
} catch (tmp10) {
  let _console = console;
  let str2 = "Unable to override Array.from";
  console.debug("Unable to override Array.from", tmp10);
}
