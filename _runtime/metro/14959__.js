// _runtime/metro/14959__.js
const require = globalThis.__r;
let _undefined,
  arr1,
  childNodes1,
  childNodes2,
  create,
  fragmentModel,
  hasOwnProperty,
  removeChildResult,
  size,
  view_request_canceled_count,
  view_request_count,
  view_request_failed_count;

let enumerable;
let tmp12;
let tmp13;
function vt(items, arg1) {
  let tmp2 = null;
  if (null != items) {
    const _Symbol = Symbol;
    let prop = typeof Symbol !== "undefined";
    if (typeof Symbol !== "undefined") {
      const _Symbol2 = Symbol;
      prop = items[Symbol.iterator];
    }
    if (!prop) {
      prop = items[Symbol.iterator];
    }
    tmp2 = prop;
  }
  let iter = tmp2;
  if (null != tmp2) {
    let flag = true;
    let flag2 = false;
    try {
      items = [];
      try {
        const iter2 = iter.call(items);
        iter = iter2;
        flag = iter2.next().done;
        const iter3 = iter2.next();
        if (!flag) {
          items.push(iter4.value);
          if (!arg1) {
            const iter5 = iter.next();
            const done = iter5.done;
            flag = done;
            while (!done) {
              let arr3 = items.push(iter6.value);
              if (!arg1) {
                continue;
              } else if (items.length === arg1) {
                break;
              }
              continue;
            }
          }
        }
        try {
          const tmp13 = !flag && null != iter.return;
          if (tmp13) {
            iter.return();
          }
          const tmp17 = flag2;
          if (tmp17) {
            throw tmp;
          } else {
            return items;
          }
        } catch (tmp19) {
          const tmp20 = flag2;
          if (tmp20) {
            throw tmp;
          } else {
            throw tmp19;
          }
        }
      } catch (tmp) {
        flag2 = true;
      }
    } catch (tmp22) {
      try {
        const tmp24 = !flag && null != iter.return;
        if (tmp24) {
          iter.return();
        }
        const tmp28 = flag2;
        if (tmp28) {
          throw tmp;
        } else {
          throw tmp22;
        }
      } catch (tmp30) {
        if (flag2) {
          throw tmp;
        } else {
          throw tmp30;
        }
      }
    }
  }
}
function Rt() {
  if (typeof Reflect !== "undefined") {
    const _Reflect3 = Reflect;
    if (Reflect.construct) {
      const _Reflect = Reflect;
      if (!Reflect.construct.sham) {
        const _Proxy = Proxy;
        if (typeof Proxy === "function") {
          return true;
        } else {
          try {
            const _Boolean = Boolean;
            const _Reflect2 = Reflect;
            const _Boolean2 = Boolean;
            valueOf.call(Reflect.construct(Boolean, [], () => {}));
            return true;
          } catch (err) {
            return false;
          }
        }
      }
    }
  }
  return false;
}
const f1190202 = () => {};
const f1190212 = () => {};
const get = (arg0) => fn.call(fn, arg0);
const getJSON = function () {
  const slice = [].slice;
  return fn.apply({ json: true }, slice.call(arguments));
};
const remove = (arg0, arg1) => {
  fn(arg0, "", r(arg1, { expires: -1 }));
};
function U(arg0, arg1) {
  if (typeof Symbol !== "undefined") {
    let tmp;
    const _Symbol2 = Symbol;
    if (arg1[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp = arg1[Symbol.hasInstance](arg0);
    }
    return tmp;
  }
  tmp = U(arg0, arg1);
}
function Pe(str, arg1) {
  const tmp = str;
  if (tmp) {
    let length = arg1;
    if (typeof str === "string") {
      let num5;
      const tmp9 = null == length || length > str.length;
      if (tmp9) {
        length = str.length;
      }
      const _Array3 = Array;
      const self3 = this;
      const self4 = this;
      const array = new Array(length);
      for (let num5 = 0; num5 < length; num5 = num5 + 1) {
        array[num5] = str[num5];
      }
      return array;
    } else {
      const _Object = Object;
      const callResult = toString.call(str);
      let name = callResult.slice(8, -1);
      const tmp2 = "Object" === name && "Object".constructor;
      if (tmp2) {
        name = str.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          let num3;
          let length2 = length;
          const tmp4 = null == length || length > "Object".length;
          if (tmp4) {
            length2 = str.length;
          }
          const _Array = Array;
          const self = this;
          const self2 = this;
          const array2 = new Array(length2);
          for (let num3 = 0; num3 < length2; num3 = num3 + 1) {
            array2[num3] = str[num3];
          }
          return array2;
        }
      }
      const _Array2 = Array;
      return Array.from(name);
    }
  }
}
function V(iterable) {
  let tmp;
  if (Array.isArray(iterable)) {
    const _Array = Array;
    const self = this;
    const self2 = this;
    const array = new Array(length);
    let num = 0;
    tmp = array;
    if (0 < iterable.length) {
      do {
        array[num] = iterable[num];
        num = num + 1;
        tmp = array;
      } while (num < iterable.length);
    }
  }
  if (!tmp) {
    const _Symbol = Symbol;
    if (typeof Symbol === "undefined") {
      let arr;
      tmp = arr;
    } else {
      const _Symbol2 = Symbol;
    }
    const _Array2 = Array;
    arr = Array.from(iterable);
  }
  if (!tmp) {
    tmp = Pe(iterable);
  }
  if (tmp) {
    return tmp;
  } else {
    const _TypeError = TypeError;
    const self3 = this;
    const self4 = this;
    const typeError = new TypeError(
      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
    throw typeError;
  }
}
let fn = function X(arg0) {
  if (Object.setPrototypeOf) {
    let _Object = Object;
    fn = Object.getPrototypeOf;
  } else {
    fn = (arg0) => {
      let __proto__ = arg0.__proto__;
      if (!__proto__) {
        const _Object = Object;
        __proto__ = Object.getPrototypeOf(arg0);
      }
      return __proto__;
    };
  }
  return fn(arg0);
};
fn = function De(arg0, arg1, arg2) {
  if (typeof Reflect !== "undefined") {
    const _Reflect2 = Reflect;
    if (Reflect.get) {
      const _Reflect = Reflect;
      fn = Reflect.get;
    }
    let tmp = arg0;
    let tmp2 = arg2;
    if (!arg2) {
      tmp2 = arg0;
    }
    let tmp3 = arg1;
    return fn(arg0, arg1, tmp2);
  }
  fn = (arg0, arg1, arg2) => {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    let tmp = arg0;
    if (!hasOwnProperty.call(arg0, arg1)) {
      let tmp3 = fn(arg0);
      tmp = tmp3;
      if (null !== tmp3) {
        while (true) {
          let _Object = Object;
          let hasOwnProperty2 = Object.prototype.hasOwnProperty;
          tmp = tmp3;
          if (hasOwnProperty2.call(tmp3, arg1)) {
            break;
          } else {
            tmp3 = fn(tmp3);
            tmp = tmp3;
            if (null === tmp3) {
              break;
            }
          }
        }
      }
    }
    if (tmp) {
      let callResult;
      const _Object2 = Object;
      const iter = Object.getOwnPropertyDescriptor(tmp, arg1);
      if (iter.get) {
        let tmp7 = arg2;
        const get = iter.get;
        const call = get.call;
        if (!arg2) {
          tmp7 = arg0;
        }
        callResult = call(tmp7);
      } else {
        callResult = iter.value;
      }
      return callResult;
    }
  };
};
fn = function Le(arg0, fn2) {
  fn =
    Object.setPrototypeOf ||
    ((arg0, fn2) => {
      arg0.__proto__ = fn2;
      return arg0;
    });
  return fn(arg0, fn2);
};
function qt(arg0, arr) {
  if (null == arg0) {
    return {};
  } else {
    let obj2;
    if (null == arg0) {
      obj2 = {};
    } else {
      const obj = {};
      const _Object = Object;
      const keys = Object.keys(arg0);
      let num3 = 0;
      obj2 = obj;
      if (0 < keys.length) {
        do {
          let tmp2 = keys[num3];
          if (arr.indexOf(tmp2) < 0) {
            obj[tmp2] = arg0[tmp2];
          }
          num3 = num3 + 1;
          obj2 = obj;
        } while (num3 < keys.length);
      }
    }
    const _Object2 = Object;
    if (Object.getOwnPropertySymbols) {
      let num6;
      const _Object3 = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
      for (let num6 = 0; num6 < ownPropertySymbols.length; num6 = num6 + 1) {
        let tmp5 = ownPropertySymbols[num6];
        let callResult = arr.indexOf(tmp5) < 0;
        if (callResult) {
          let _Object4 = Object;
          callResult = propertyIsEnumerable.call(arg0, tmp5);
        }
        if (callResult) {
          obj2[tmp5] = arg0[tmp5];
        }
      }
    }
    return obj2;
  }
}
function ue(arg0) {
  let num;
  let closure_0 = arg0;
  for (let num = 1; num < arguments.length; num = num + 1) {
    let tmp2 = null != arguments[num] ? arguments[num] : {};
    let closure_1 = tmp2;
    let _Object = Object;
    let keys = Object.keys(tmp2);
    let _Object2 = Object;
    let combined = keys;
    if (typeof Object.getOwnPropertySymbols === "function") {
      let _Object3 = Object;
      let concat = keys.concat;
      let ownPropertySymbols = Object.getOwnPropertySymbols(tmp2);
      combined = concat(
        ownPropertySymbols.filter((item) => Object.getOwnPropertyDescriptor(closure_1, item).enumerable),
      );
    }
    let item = combined.forEach((item) => {
      if (item in closure_0) {
        const _Object = Object;
        const obj = { value: closure_1[item], enumerable: true, configurable: true, writable: true };
        Object.defineProperty(closure_0, item, obj);
      } else {
        closure_0[item] = closure_1[item];
      }
    });
  }
  return arg0;
}
function pt(arg0, arg1, arg2, arg3) {}
let c0 = () => {
  if (typeof closure_1_9 === "function") {
    if (c0) {
      c0 = 0;
      closure_1 = tmp(0);
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
c0 = () => {};
let closure_1;
const f119020 = f1190202;
const f69175 = (arg0, arg1) => {
  arg1.exports = function Ca(arg0, fn) {
    let tmp = arg0;
    if (!("length" in arg0)) {
      items = [arg0];
      tmp = items;
    }
    let callResult = slice.call(tmp);
    if (callResult.length) {
      const arr = callResult.shift();
      const tmp3 = fn(arr);
      while (!tmp3) {
        let tmp5 = arr.childNodes && arr.childNodes.length;
        let combined = callResult;
        if (tmp5) {
          let callResult1 = slice.call(arr.childNodes);
          combined = callResult1.concat(callResult);
        }
        callResult = combined;
      }
      return tmp3;
    }
  };
};
const f69176 = (arg0, arg1) => {
  let v0;
  function ve(data, arg1) {
    let tmp2;
    const self = this;
    if (typeof Symbol !== "undefined") {
      const _Symbol3 = Symbol;
      if (v0[Symbol.hasInstance]) {
        const _Symbol2 = Symbol;
        tmp2 = v0[Symbol.hasInstance](self);
      }
      let tmp4 = arg1;
      if (tmp2) {
        self.data = data;
        self.nodeValue = data;
        self.length = data.length;
        if (!tmp4) {
          tmp4 = null;
        }
        self.ownerDocument = tmp4;
      } else {
        const tmpResult = v0(data, tmp4);
        return tmpResult;
      }
    }
    if (typeof Symbol !== "undefined") {
      const _Symbol4 = Symbol;
      if (v0[Symbol.hasInstance]) {
        const _Symbol = Symbol;
        tmp2 = v0[Symbol.hasInstance](self);
      }
    }
    tmp2 = closure_2_8(self, v0);
  }
  let c0 = ve;
  if (typeof closure_9 === "function") {
    if (c0) {
      c0 = 0;
      let closure_1 = tmp(0);
    }
    let tmp2 = arg1;
    arg1.exports = ve;
    ve.prototype.nodeType = 8;
    ve.prototype.nodeName = "#comment";
    class ve {
      toString() {
        return "[object Comment]";
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const f69177 = (arg0, arg1) => {
  let v0;
  function ae(arg0, arg1) {
    let tmp2;
    const self = this;
    if (typeof Symbol !== "undefined") {
      const _Symbol3 = Symbol;
      if (v0[Symbol.hasInstance]) {
        const _Symbol2 = Symbol;
        tmp2 = v0[Symbol.hasInstance](self);
      }
      if (tmp2) {
        let tmp7 = arg1;
        const tmp6 = arg0 || "";
        self.data = tmp6;
        self.length = self.data.length;
        if (!arg1) {
          tmp7 = null;
        }
        self.ownerDocument = tmp7;
      } else {
        const tmpResult = v0(arg0);
        return tmpResult;
      }
    }
    if (typeof Symbol !== "undefined") {
      const _Symbol4 = Symbol;
      if (v0[Symbol.hasInstance]) {
        const _Symbol = Symbol;
        tmp2 = v0[Symbol.hasInstance](self);
      }
    }
    tmp2 = closure_2_8(self, v0);
  }
  let c0 = ae;
  if (typeof closure_9 === "function") {
    if (c0) {
      c0 = 0;
      let closure_1 = tmp(0);
    }
    let tmp2 = arg1;
    arg1.exports = ae;
    const str = "DOMTextNode";
    ae.prototype.type = "DOMTextNode";
    ae.prototype.nodeType = 3;
    ae.prototype.nodeName = "#text";
    class ae {
      toString() {
        return this.data;
      }
      replaceData(length2, arg1, arg2) {
        const substr = str.substring(0, length2);
        this.data = substr + arg2 + this.data.substring(length2 + arg1, this.data.length);
        this.length = this.data.length;
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const f69178 = (arg0, arg1) => {
  arg1.exports = function Ma(type) {
    let closure_0 = type;
    const self = this;
    type = type.type;
    if (!type.target) {
      type.target = self;
    }
    if (!self.listeners) {
      self.listeners = {};
    }
    if (self.listeners[type]) {
      return self.listeners[type].forEach((handleEvent) => {
        type.currentTarget = self;
        if (typeof handleEvent === "function") {
          handleEvent(type);
        } else {
          handleEvent.handleEvent(type);
        }
      });
    } else if (self.parentNode) {
      const parentNode = self.parentNode;
      parentNode.dispatchEvent(type);
    }
  };
};
const f69179 = (arg0, arg1) => {
  arg1.exports = function Ha(arg0, arg1) {
    const self = this;
    if (!this.listeners) {
      self.listeners = {};
    }
    if (!self.listeners[arg0]) {
      self.listeners[arg0] = [];
    }
    const arr = self.listeners[arg0];
    if (-1 === arr.indexOf(arg1)) {
      const arr2 = self.listeners[arg0];
      arr2.push(arg1);
    }
  };
};
const f69180 = (arg0, arg1) => {
  arg1.exports = function Ba(arg0, arg1) {
    const self = this;
    if (this.listeners) {
      if (self.listeners[arg0]) {
        const index = arr.indexOf(arg1);
        if (-1 !== index) {
          self.listeners[arg0].splice(index, 1);
        }
      }
    }
  };
};
const f69181 = (arg0, arg1) => {
  let tmp;
  function br(nodeType) {
    const f144530 = (item) => {
      let name;
      let value;
      ({ name, value } = item);
      let str = value;
      if ("style" === name) {
        let tmp = value;
        if (typeof value !== "string") {
          closure_1 = "";
          const _Object = Object;
          const keys = Object.keys(value);
          item = keys.forEach((item) => {
            const tmp = value[item];
            closure_1 = `${closure_1}${item.replace(/[A-Z]/g, (str) => "-" + str.toLowerCase())}:${tmp};`;
          });
          tmp = closure_1;
        }
        str = tmp;
      }
      let str2 = str;
      const push = items4.push;
      const text = `${name}="`;
      if (typeof str !== "string") {
        str2 = "";
        if (str) {
          str2 = str.toString();
        }
      }
      const str3 = str2.replace(/&/g, "&amp;");
      const str4 = str3.replace(/</g, "&lt;");
      const str5 = str4.replace(/>/g, "&gt;");
      push(`${tmp3}${str5.replace(/"/g, "&quot;")}"`);
    };
    nodeType = nodeType.nodeType;
    if (3 === nodeType) {
      let str37 = str36;
      if (typeof nodeType.data !== "string") {
        str37 = "";
        if (nodeType.data) {
          str37 = str36.toString();
        }
      }
      const str39 = str37.replace(/&/g, "&amp;");
      const str41 = str39.replace(/</g, "&lt;");
      return str41.replace(/>/g, "&gt;");
    } else if (8 === nodeType) {
      return "<!--" + nodeType.data + "-->";
    } else {
      let formatted = str43;
      if ("http://www.w3.org/1999/xhtml" === nodeType.namespaceURI) {
        formatted = str43.toLowerCase();
      }
      items = [];
      let str = "<";
      const items1 = [];
      let str2 = "innerHTML";
      let str3 = "namespaceURI";
      let str4 = "innerText";
      let str5 = "textContent";
      let push = items.push;
      let text = `<${tmp2}`;
      for (const key10026 in nodeType) {
        let tmp25 = nodeType[key10026];
        if (tmp25) {
          let str14;
          let _Symbol = Symbol;
          if (typeof Symbol !== "undefined") {
            let _Symbol2 = Symbol;
            str14 = "symbol";
          }
          let tmp6 = "style" === key10026;
          if (tmp6) {
            let _Object = Object;
            tmp6 = Object.keys(nodeType.style).length > 0;
          }
          if (!tmp6) {
            let hasOwnPropertyResult = nodeType.hasOwnProperty(key10026);
            if (hasOwnPropertyResult) {
              let tmp8 = "string" === str14 || "boolean" === str14 || "number" === str14;
              hasOwnPropertyResult = tmp8;
            }
            if (hasOwnPropertyResult) {
              hasOwnPropertyResult = "nodeName" !== key10026;
            }
            if (hasOwnPropertyResult) {
              hasOwnPropertyResult = "className" !== key10026;
            }
            if (hasOwnPropertyResult) {
              hasOwnPropertyResult = "tagName" !== key10026;
            }
            if (hasOwnPropertyResult) {
              hasOwnPropertyResult = "textContent" !== key10026;
            }
            if (hasOwnPropertyResult) {
              hasOwnPropertyResult = "innerText" !== key10026;
            }
            if (hasOwnPropertyResult) {
              hasOwnPropertyResult = "namespaceURI" !== key10026;
            }
            if (hasOwnPropertyResult) {
              hasOwnPropertyResult = "innerHTML" !== key10026;
            }
            tmp6 = hasOwnPropertyResult;
          }
          if (!tmp6) {
            continue;
          } else {
            let obj = { name: key10026, value: nodeType[key10026] };
            let arr = items1.push(obj);
            continue;
          }
          continue;
        }
        str14 = typeof tmp25;
      }
      for (const key10046 in nodeType._attributes) {
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp10 = keys[tmp];
          while (tmp10 !== undefined) {
            let iter = nodeType._attributes[key10046][tmp10];
            let str17 = "";
            if (iter.prefix) {
              str17 = `${iter.prefix}:`;
            }
            let obj2 = { name: str17 + tmp10, value: iter.value };
            let arr2 = items1.push(obj2);
            continue;
          }
        }
        continue;
      }
      if (nodeType.className) {
        const obj3 = { name: "class", value: nodeType.className };
        items1.push(obj3);
      }
      let str18 = "";
      if (items1.length) {
        const items2 = [];
        let item = items1.forEach(f144530);
        let str19 = "";
        if (items2.length) {
          str19 = ` ${arr3.join(" ")}`;
        }
        str18 = str19;
      }
      const dataset = nodeType.dataset;
      const items3 = [];
      for (const key10076 in dataset) {
        let obj4 = { name: "data-" + key10076, value: dataset[key10076] };
        let arr6 = items3.push(obj4);
        continue;
      }
      let str22 = "";
      if (items3.length) {
        const items4 = [];
        const item1 = items3.forEach(f144530);
        let str23 = "";
        if (items4.length) {
          str23 = ` ${arr5.join(" ")}`;
        }
        str22 = str23;
      }
      const _HermesInternal = HermesInternal;
      push(text + str18 + str22);
      if (closure_0.indexOf(formatted) > -1) {
        items.push(" />");
      } else {
        items.push(">");
        if (nodeType.childNodes.length) {
          const push3 = items.push;
          const childNodes = nodeType.childNodes;
          push3.apply(items, childNodes.map(br));
        } else {
          if (!nodeType.textContent) {
            if (!nodeType.innerText) {
              if (nodeType.innerHTML) {
                items.push(nodeType.innerHTML);
              }
            }
          }
          let str25 = nodeType.textContent;
          const push2 = items.push;
          if (!str25) {
            str25 = nodeType.innerText;
          }
          let str26 = str25;
          if (typeof str25 !== "string") {
            str26 = "";
            if (str25) {
              str26 = str25.toString();
            }
          }
          const str28 = str26.replace(/&/g, "&amp;");
          const str30 = str28.replace(/</g, "&lt;");
          push2(str30.replace(/>/g, "&gt;"));
        }
        items.push(`</${tmp2}>`);
      }
      return items.join("");
    }
  }
  if (typeof closure_1_10 === "function") {
    if (c0) {
      c0 = 0;
      let closure_1 = tmp(0);
    }
    const tmp2 = arg1;
    arg1.exports = br;
    let closure_0 = [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
    ];
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
};
const f69182 = (arg0, arg1) => {
  let closure_1;
  let tmp2;
  class I {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = I;
      if (typeof Symbol !== "undefined") {
        _Symbol3 = Symbol;
        if (tmp[Symbol.hasInstance]) {
          _Symbol2 = Symbol;
          tmp2 = tmp[Symbol.hasInstance](self);
        }
        tmp3 = arg0;
        if (tmp2) {
          tmp6 = arg2;
          if (undefined === arg2) {
            tmp6 = c2;
          } else if (!tmp6) {
            tmp6 = null;
          }
          tmp7 = c2;
          formatted = arg0;
          if (tmp6 === c2) {
            _String = String;
            str = String(arg0);
            formatted = str.toUpperCase();
          }
          tmp9 = arg1;
          self.tagName = formatted;
          self.nodeName = self.tagName;
          str2 = "";
          self.className = "";
          self.dataset = {};
          self.childNodes = [];
          tmp10 = null;
          self.parentNode = null;
          self.style = {};
          if (!arg1) {
            tmp9 = null;
          }
          self.ownerDocument = tmp9;
          self.namespaceURI = tmp6;
          self._attributes = {};
          str3 = "INPUT";
          if ("INPUT" === self.tagName) {
            str4 = "text";
            self.type = "text";
          }
          return;
        } else {
          tmpResult = tmp(arg0);
          tmp5 = tmpResult;
          return tmpResult;
        }
      }
      if (typeof Symbol !== "undefined") {
        _Symbol4 = Symbol;
        if (tmp[Symbol.hasInstance]) {
          _Symbol = Symbol;
          tmp2 = tmp[Symbol.hasInstance](self);
        }
      }
      tmp2 = closure_2_8(self, tmp);
      return;
    }
  }
  if (typeof closure_9 === "function") {
    class I {
      constructor(arg0, arg1, arg2) {
        self = this;
        tmp = I;
        if (typeof Symbol !== "undefined") {
          _Symbol3 = Symbol;
          if (tmp[Symbol.hasInstance]) {
            _Symbol2 = Symbol;
            tmp2 = tmp[Symbol.hasInstance](self);
          }
          tmp3 = arg0;
          if (tmp2) {
            tmp6 = arg2;
            if (undefined === arg2) {
              tmp6 = c2;
            } else if (!tmp6) {
              tmp6 = null;
            }
            tmp7 = c2;
            formatted = arg0;
            if (tmp6 === c2) {
              _String = String;
              str = String(arg0);
              formatted = str.toUpperCase();
            }
            tmp9 = arg1;
            self.tagName = formatted;
            self.nodeName = self.tagName;
            str2 = "";
            self.className = "";
            self.dataset = {};
            self.childNodes = [];
            tmp10 = null;
            self.parentNode = null;
            self.style = {};
            if (!arg1) {
              tmp9 = null;
            }
            self.ownerDocument = tmp9;
            self.namespaceURI = tmp6;
            self._attributes = {};
            str3 = "INPUT";
            if ("INPUT" === self.tagName) {
              str4 = "text";
              self.type = "text";
            }
            return;
          } else {
            tmpResult = tmp(arg0);
            tmp5 = tmpResult;
            return tmpResult;
          }
        }
        if (typeof Symbol !== "undefined") {
          _Symbol4 = Symbol;
          if (tmp[Symbol.hasInstance]) {
            _Symbol = Symbol;
            tmp2 = tmp[Symbol.hasInstance](self);
          }
        }
        tmp2 = closure_2_8(self, tmp);
        return;
      }
    }
    if (typeof closure_11 === "function") {
      let obj;
      class I {
        constructor(arg0, arg1, arg2) {
          self = this;
          tmp = I;
          if (typeof Symbol !== "undefined") {
            _Symbol3 = Symbol;
            if (tmp[Symbol.hasInstance]) {
              _Symbol2 = Symbol;
              tmp2 = tmp[Symbol.hasInstance](self);
            }
            tmp3 = arg0;
            if (tmp2) {
              tmp6 = arg2;
              if (undefined === arg2) {
                tmp6 = c2;
              } else if (!tmp6) {
                tmp6 = null;
              }
              tmp7 = c2;
              formatted = arg0;
              if (tmp6 === c2) {
                _String = String;
                str = String(arg0);
                formatted = str.toUpperCase();
              }
              tmp9 = arg1;
              self.tagName = formatted;
              self.nodeName = self.tagName;
              str2 = "";
              self.className = "";
              self.dataset = {};
              self.childNodes = [];
              tmp10 = null;
              self.parentNode = null;
              self.style = {};
              if (!arg1) {
                tmp9 = null;
              }
              self.ownerDocument = tmp9;
              self.namespaceURI = tmp6;
              self._attributes = {};
              str3 = "INPUT";
              if ("INPUT" === self.tagName) {
                str4 = "text";
                self.type = "text";
              }
              return;
            } else {
              tmpResult = tmp(arg0);
              tmp5 = tmpResult;
              return tmpResult;
            }
          }
          if (typeof Symbol !== "undefined") {
            _Symbol4 = Symbol;
            if (tmp[Symbol.hasInstance]) {
              _Symbol = Symbol;
              tmp2 = tmp[Symbol.hasInstance](self);
            }
          }
          tmp2 = closure_2_8(self, tmp);
          return;
        }
      }
      if (!tmp2) {
        class I {
          constructor(arg0, arg1, arg2) {
            self = this;
            tmp = I;
            if (typeof Symbol !== "undefined") {
              _Symbol3 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol2 = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
              tmp3 = arg0;
              if (tmp2) {
                tmp6 = arg2;
                if (undefined === arg2) {
                  tmp6 = c2;
                } else if (!tmp6) {
                  tmp6 = null;
                }
                tmp7 = c2;
                formatted = arg0;
                if (tmp6 === c2) {
                  _String = String;
                  str = String(arg0);
                  formatted = str.toUpperCase();
                }
                tmp9 = arg1;
                self.tagName = formatted;
                self.nodeName = self.tagName;
                str2 = "";
                self.className = "";
                self.dataset = {};
                self.childNodes = [];
                tmp10 = null;
                self.parentNode = null;
                self.style = {};
                if (!arg1) {
                  tmp9 = null;
                }
                self.ownerDocument = tmp9;
                self.namespaceURI = tmp6;
                self._attributes = {};
                str3 = "INPUT";
                if ("INPUT" === self.tagName) {
                  str4 = "text";
                  self.type = "text";
                }
                return;
              } else {
                tmpResult = tmp(arg0);
                tmp5 = tmpResult;
                return tmpResult;
              }
            }
            if (typeof Symbol !== "undefined") {
              _Symbol4 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
            }
            tmp2 = closure_2_8(self, tmp);
            return;
          }
        }
        obj = { exports: {} };
        let tmp3 = obj;
        let tmp4 = closure_139_0(obj.exports, obj);
      }
      let closure_0 = obj.exports;
      if (typeof closure_14 === "function") {
        class I {
          constructor(arg0, arg1, arg2) {
            self = this;
            tmp = I;
            if (typeof Symbol !== "undefined") {
              _Symbol3 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol2 = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
              tmp3 = arg0;
              if (tmp2) {
                tmp6 = arg2;
                if (undefined === arg2) {
                  tmp6 = c2;
                } else if (!tmp6) {
                  tmp6 = null;
                }
                tmp7 = c2;
                formatted = arg0;
                if (tmp6 === c2) {
                  _String = String;
                  str = String(arg0);
                  formatted = str.toUpperCase();
                }
                tmp9 = arg1;
                self.tagName = formatted;
                self.nodeName = self.tagName;
                str2 = "";
                self.className = "";
                self.dataset = {};
                self.childNodes = [];
                tmp10 = null;
                self.parentNode = null;
                self.style = {};
                if (!arg1) {
                  tmp9 = null;
                }
                self.ownerDocument = tmp9;
                self.namespaceURI = tmp6;
                self._attributes = {};
                str3 = "INPUT";
                if ("INPUT" === self.tagName) {
                  str4 = "text";
                  self.type = "text";
                }
                return;
              } else {
                tmpResult = tmp(arg0);
                tmp5 = tmpResult;
                return tmpResult;
              }
            }
            if (typeof Symbol !== "undefined") {
              _Symbol4 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
            }
            tmp2 = closure_2_8(self, tmp);
            return;
          }
        }
        if (!tmp7) {
          class I {
            constructor(arg0, arg1, arg2) {
              self = this;
              tmp = I;
              if (typeof Symbol !== "undefined") {
                _Symbol3 = Symbol;
                if (tmp[Symbol.hasInstance]) {
                  _Symbol2 = Symbol;
                  tmp2 = tmp[Symbol.hasInstance](self);
                }
                tmp3 = arg0;
                if (tmp2) {
                  tmp6 = arg2;
                  if (undefined === arg2) {
                    tmp6 = c2;
                  } else if (!tmp6) {
                    tmp6 = null;
                  }
                  tmp7 = c2;
                  formatted = arg0;
                  if (tmp6 === c2) {
                    _String = String;
                    str = String(arg0);
                    formatted = str.toUpperCase();
                  }
                  tmp9 = arg1;
                  self.tagName = formatted;
                  self.nodeName = self.tagName;
                  str2 = "";
                  self.className = "";
                  self.dataset = {};
                  self.childNodes = [];
                  tmp10 = null;
                  self.parentNode = null;
                  self.style = {};
                  if (!arg1) {
                    tmp9 = null;
                  }
                  self.ownerDocument = tmp9;
                  self.namespaceURI = tmp6;
                  self._attributes = {};
                  str3 = "INPUT";
                  if ("INPUT" === self.tagName) {
                    str4 = "text";
                    self.type = "text";
                  }
                  return;
                } else {
                  tmpResult = tmp(arg0);
                  tmp5 = tmpResult;
                  return tmpResult;
                }
              }
              if (typeof Symbol !== "undefined") {
                _Symbol4 = Symbol;
                if (tmp[Symbol.hasInstance]) {
                  _Symbol = Symbol;
                  tmp2 = tmp[Symbol.hasInstance](self);
                }
              }
              tmp2 = closure_2_8(self, tmp);
              return;
            }
          }
          const obj2 = { exports: {} };
          let tmp9 = closure_142_0(obj2.exports, obj2);
        }
        if (typeof closure_15 === "function") {
          class I {
            constructor(arg0, arg1, arg2) {
              self = this;
              tmp = I;
              if (typeof Symbol !== "undefined") {
                _Symbol3 = Symbol;
                if (tmp[Symbol.hasInstance]) {
                  _Symbol2 = Symbol;
                  tmp2 = tmp[Symbol.hasInstance](self);
                }
                tmp3 = arg0;
                if (tmp2) {
                  tmp6 = arg2;
                  if (undefined === arg2) {
                    tmp6 = c2;
                  } else if (!tmp6) {
                    tmp6 = null;
                  }
                  tmp7 = c2;
                  formatted = arg0;
                  if (tmp6 === c2) {
                    _String = String;
                    str = String(arg0);
                    formatted = str.toUpperCase();
                  }
                  tmp9 = arg1;
                  self.tagName = formatted;
                  self.nodeName = self.tagName;
                  str2 = "";
                  self.className = "";
                  self.dataset = {};
                  self.childNodes = [];
                  tmp10 = null;
                  self.parentNode = null;
                  self.style = {};
                  if (!arg1) {
                    tmp9 = null;
                  }
                  self.ownerDocument = tmp9;
                  self.namespaceURI = tmp6;
                  self._attributes = {};
                  str3 = "INPUT";
                  if ("INPUT" === self.tagName) {
                    str4 = "text";
                    self.type = "text";
                  }
                  return;
                } else {
                  tmpResult = tmp(arg0);
                  tmp5 = tmpResult;
                  return tmpResult;
                }
              }
              if (typeof Symbol !== "undefined") {
                _Symbol4 = Symbol;
                if (tmp[Symbol.hasInstance]) {
                  _Symbol = Symbol;
                  tmp2 = tmp[Symbol.hasInstance](self);
                }
              }
              tmp2 = closure_2_8(self, tmp);
              return;
            }
          }
          if (!tmp13) {
            class I {
              constructor(arg0, arg1, arg2) {
                self = this;
                tmp = I;
                if (typeof Symbol !== "undefined") {
                  _Symbol3 = Symbol;
                  if (tmp[Symbol.hasInstance]) {
                    _Symbol2 = Symbol;
                    tmp2 = tmp[Symbol.hasInstance](self);
                  }
                  tmp3 = arg0;
                  if (tmp2) {
                    tmp6 = arg2;
                    if (undefined === arg2) {
                      tmp6 = c2;
                    } else if (!tmp6) {
                      tmp6 = null;
                    }
                    tmp7 = c2;
                    formatted = arg0;
                    if (tmp6 === c2) {
                      _String = String;
                      str = String(arg0);
                      formatted = str.toUpperCase();
                    }
                    tmp9 = arg1;
                    self.tagName = formatted;
                    self.nodeName = self.tagName;
                    str2 = "";
                    self.className = "";
                    self.dataset = {};
                    self.childNodes = [];
                    tmp10 = null;
                    self.parentNode = null;
                    self.style = {};
                    if (!arg1) {
                      tmp9 = null;
                    }
                    self.ownerDocument = tmp9;
                    self.namespaceURI = tmp6;
                    self._attributes = {};
                    str3 = "INPUT";
                    if ("INPUT" === self.tagName) {
                      str4 = "text";
                      self.type = "text";
                    }
                    return;
                  } else {
                    tmpResult = tmp(arg0);
                    tmp5 = tmpResult;
                    return tmpResult;
                  }
                }
                if (typeof Symbol !== "undefined") {
                  _Symbol4 = Symbol;
                  if (tmp[Symbol.hasInstance]) {
                    _Symbol = Symbol;
                    tmp2 = tmp[Symbol.hasInstance](self);
                  }
                }
                tmp2 = closure_2_8(self, tmp);
                return;
              }
            }
            const obj3 = { exports: {} };
            closure_143_0(obj3.exports, obj3);
          }
          if (typeof closure_16 === "function") {
            class I {
              constructor(arg0, arg1, arg2) {
                self = this;
                tmp = I;
                if (typeof Symbol !== "undefined") {
                  _Symbol3 = Symbol;
                  if (tmp[Symbol.hasInstance]) {
                    _Symbol2 = Symbol;
                    tmp2 = tmp[Symbol.hasInstance](self);
                  }
                  tmp3 = arg0;
                  if (tmp2) {
                    tmp6 = arg2;
                    if (undefined === arg2) {
                      tmp6 = c2;
                    } else if (!tmp6) {
                      tmp6 = null;
                    }
                    tmp7 = c2;
                    formatted = arg0;
                    if (tmp6 === c2) {
                      _String = String;
                      str = String(arg0);
                      formatted = str.toUpperCase();
                    }
                    tmp9 = arg1;
                    self.tagName = formatted;
                    self.nodeName = self.tagName;
                    str2 = "";
                    self.className = "";
                    self.dataset = {};
                    self.childNodes = [];
                    tmp10 = null;
                    self.parentNode = null;
                    self.style = {};
                    if (!arg1) {
                      tmp9 = null;
                    }
                    self.ownerDocument = tmp9;
                    self.namespaceURI = tmp6;
                    self._attributes = {};
                    str3 = "INPUT";
                    if ("INPUT" === self.tagName) {
                      str4 = "text";
                      self.type = "text";
                    }
                    return;
                  } else {
                    tmpResult = tmp(arg0);
                    tmp5 = tmpResult;
                    return tmpResult;
                  }
                }
                if (typeof Symbol !== "undefined") {
                  _Symbol4 = Symbol;
                  if (tmp[Symbol.hasInstance]) {
                    _Symbol = Symbol;
                    tmp2 = tmp[Symbol.hasInstance](self);
                  }
                }
                tmp2 = closure_2_8(self, tmp);
                return;
              }
            }
            if (!tmp19) {
              class I {
                constructor(arg0, arg1, arg2) {
                  self = this;
                  tmp = I;
                  if (typeof Symbol !== "undefined") {
                    _Symbol3 = Symbol;
                    if (tmp[Symbol.hasInstance]) {
                      _Symbol2 = Symbol;
                      tmp2 = tmp[Symbol.hasInstance](self);
                    }
                    tmp3 = arg0;
                    if (tmp2) {
                      tmp6 = arg2;
                      if (undefined === arg2) {
                        tmp6 = c2;
                      } else if (!tmp6) {
                        tmp6 = null;
                      }
                      tmp7 = c2;
                      formatted = arg0;
                      if (tmp6 === c2) {
                        _String = String;
                        str = String(arg0);
                        formatted = str.toUpperCase();
                      }
                      tmp9 = arg1;
                      self.tagName = formatted;
                      self.nodeName = self.tagName;
                      str2 = "";
                      self.className = "";
                      self.dataset = {};
                      self.childNodes = [];
                      tmp10 = null;
                      self.parentNode = null;
                      self.style = {};
                      if (!arg1) {
                        tmp9 = null;
                      }
                      self.ownerDocument = tmp9;
                      self.namespaceURI = tmp6;
                      self._attributes = {};
                      str3 = "INPUT";
                      if ("INPUT" === self.tagName) {
                        str4 = "text";
                        self.type = "text";
                      }
                      return;
                    } else {
                      tmpResult = tmp(arg0);
                      tmp5 = tmpResult;
                      return tmpResult;
                    }
                  }
                  if (typeof Symbol !== "undefined") {
                    _Symbol4 = Symbol;
                    if (tmp[Symbol.hasInstance]) {
                      _Symbol = Symbol;
                      tmp2 = tmp[Symbol.hasInstance](self);
                    }
                  }
                  tmp2 = closure_2_8(self, tmp);
                  return;
                }
              }
              const obj4 = { exports: {} };
              closure_144_0(obj4.exports, obj4);
            }
            if (typeof closure_17 === "function") {
              class I {
                constructor(arg0, arg1, arg2) {
                  self = this;
                  tmp = I;
                  if (typeof Symbol !== "undefined") {
                    _Symbol3 = Symbol;
                    if (tmp[Symbol.hasInstance]) {
                      _Symbol2 = Symbol;
                      tmp2 = tmp[Symbol.hasInstance](self);
                    }
                    tmp3 = arg0;
                    if (tmp2) {
                      tmp6 = arg2;
                      if (undefined === arg2) {
                        tmp6 = c2;
                      } else if (!tmp6) {
                        tmp6 = null;
                      }
                      tmp7 = c2;
                      formatted = arg0;
                      if (tmp6 === c2) {
                        _String = String;
                        str = String(arg0);
                        formatted = str.toUpperCase();
                      }
                      tmp9 = arg1;
                      self.tagName = formatted;
                      self.nodeName = self.tagName;
                      str2 = "";
                      self.className = "";
                      self.dataset = {};
                      self.childNodes = [];
                      tmp10 = null;
                      self.parentNode = null;
                      self.style = {};
                      if (!arg1) {
                        tmp9 = null;
                      }
                      self.ownerDocument = tmp9;
                      self.namespaceURI = tmp6;
                      self._attributes = {};
                      str3 = "INPUT";
                      if ("INPUT" === self.tagName) {
                        str4 = "text";
                        self.type = "text";
                      }
                      return;
                    } else {
                      tmpResult = tmp(arg0);
                      tmp5 = tmpResult;
                      return tmpResult;
                    }
                  }
                  if (typeof Symbol !== "undefined") {
                    _Symbol4 = Symbol;
                    if (tmp[Symbol.hasInstance]) {
                      _Symbol = Symbol;
                      tmp2 = tmp[Symbol.hasInstance](self);
                    }
                  }
                  tmp2 = closure_2_8(self, tmp);
                  return;
                }
                appendChild(arg0) {
                  if (arg0.parentNode) {
                    parentNode = arg0.parentNode;
                    removeChildResult = parentNode.removeChild(arg0);
                  }
                  childNodes = this.childNodes;
                  arr1 = childNodes.push(arg0);
                  arg0.parentNode = this;
                  return arg0;
                }
                replaceChild(arg0, arg1) {
                  if (arg0.parentNode) {
                    parentNode = arg0.parentNode;
                    removeChildResult = parentNode.removeChild(arg0);
                  }
                  childNodes = this.childNodes;
                  arg1.parentNode = null;
                  this.childNodes[childNodes.indexOf(arg1)] = arg0;
                  arg0.parentNode = this;
                  return arg1;
                }
                removeChild(arg0) {
                  ({ childNodes, childNodes: childNodes2 } = this);
                  spliceResult = childNodes2.splice(childNodes.indexOf(arg0), 1);
                  arg0.parentNode = null;
                  return arg0;
                }
                insertBefore(arg0, arg1) {
                  if (arg0.parentNode) {
                    parentNode = arg0.parentNode;
                    removeChildResult = parentNode.removeChild(arg0);
                  }
                  self = this;
                  num = -1;
                  if (null != arg1) {
                    childNodes = self.childNodes;
                    num = childNodes.indexOf(arg1);
                  }
                  if (num > -1) {
                    childNodes1 = self.childNodes;
                    num2 = 0;
                    spliceResult = childNodes1.splice(num, 0, arg0);
                  } else {
                    childNodes2 = self.childNodes;
                    arr1 = childNodes2.push(arg0);
                  }
                  arg0.parentNode = self;
                  return arg0;
                }
                setAttributeNS(arg0, arg1, arg2) {
                  index = arg1.indexOf(":");
                  substr1 = arg1;
                  substr = null;
                  if (index > -1) {
                    num = 0;
                    substr = require("Discord");
                    num2 = 1;
                    substr1 = arg1.substr(index + 1);
                  }
                  self = this;
                  if ("INPUT" === this.tagName) {
                    str = "type";
                    if ("type" === arg1) {
                      self.type = arg2;
                    }
                    return;
                  }
                  tmp4 = self._attributes[arg0];
                  if (!tmp4) {
                    obj = {};
                    self._attributes[arg0] = obj;
                    tmp4 = obj;
                  }
                  tmp4[substr1] = { value: arg2, prefix: substr };
                  return;
                }
                getAttributeNS(arg0, arg1) {
                  self = this;
                  tmp = this._attributes[arg0];
                  tmp2 = tmp && tmp[arg1] && tmp[arg1].value;
                  if ("INPUT" === self.tagName) {
                    str = "type";
                    if ("type" === arg1) {
                      type = self.type;
                    }
                    return type;
                  }
                  type = null;
                  if (typeof tmp2 === "string") {
                    type = tmp2;
                  }
                  return;
                }
                removeAttributeNS(arg0, arg1) {
                  tmp = this._attributes[arg0];
                  if (tmp) {
                    delete tmp[arg1];
                  }
                  return;
                }
                hasAttributeNS(arg0, arg1) {
                  tmp = this._attributes[arg0];
                  tmp2 = tmp;
                  if (tmp2) {
                    tmp3 = arg1;
                    tmp2 = arg1 in tmp;
                  }
                  return tmp2;
                }
                setAttribute(arg0, arg1) {
                  return this.setAttributeNS(null, arg0, arg1);
                }
                getAttribute(arg0) {
                  return this.getAttributeNS(null, arg0);
                }
                removeAttribute(arg0) {
                  return this.removeAttributeNS(null, arg0);
                }
                hasAttribute(arg0) {
                  return this.hasAttributeNS(null, arg0);
                }
                focus() {
                  return;
                }
                toString() {
                  return closure_1(this);
                }
                getElementsByClassName(arg0) {
                  closure_0 = arg0.split(" ");
                  items = [];
                  closure_1 = items;
                  tmp = closure_0(this, () => {
                    /* body not rendered: F144531 */
                  });
                  return items;
                }
                getElementsByTagName(arg0) {
                  closure_0 = arg0.toLowerCase();
                  items = [];
                  closure_1 = items;
                  tmp = closure_0(this.childNodes, () => {
                    /* body not rendered: F144532 */
                  });
                  return items;
                }
                contains(arg0) {
                  closure_0 = arg0;
                  tmp =
                    closure_0(this, function () {
                      /* body not rendered: F144533 */
                    }) || false;
                  return tmp;
                }
              }
              if (!tmp25) {
                class I {
                  constructor(arg0, arg1, arg2) {
                    self = this;
                    tmp = I;
                    if (typeof Symbol !== "undefined") {
                      _Symbol3 = Symbol;
                      if (tmp[Symbol.hasInstance]) {
                        _Symbol2 = Symbol;
                        tmp2 = tmp[Symbol.hasInstance](self);
                      }
                      tmp3 = arg0;
                      if (tmp2) {
                        tmp6 = arg2;
                        if (undefined === arg2) {
                          tmp6 = c2;
                        } else if (!tmp6) {
                          tmp6 = null;
                        }
                        tmp7 = c2;
                        formatted = arg0;
                        if (tmp6 === c2) {
                          _String = String;
                          str = String(arg0);
                          formatted = str.toUpperCase();
                        }
                        tmp9 = arg1;
                        self.tagName = formatted;
                        self.nodeName = self.tagName;
                        str2 = "";
                        self.className = "";
                        self.dataset = {};
                        self.childNodes = [];
                        tmp10 = null;
                        self.parentNode = null;
                        self.style = {};
                        if (!arg1) {
                          tmp9 = null;
                        }
                        self.ownerDocument = tmp9;
                        self.namespaceURI = tmp6;
                        self._attributes = {};
                        str3 = "INPUT";
                        if ("INPUT" === self.tagName) {
                          str4 = "text";
                          self.type = "text";
                        }
                        return;
                      } else {
                        tmpResult = tmp(arg0);
                        tmp5 = tmpResult;
                        return tmpResult;
                      }
                    }
                    if (typeof Symbol !== "undefined") {
                      _Symbol4 = Symbol;
                      if (tmp[Symbol.hasInstance]) {
                        _Symbol = Symbol;
                        tmp2 = tmp[Symbol.hasInstance](self);
                      }
                    }
                    tmp2 = closure_2_8(self, tmp);
                    return;
                  }
                  appendChild(arg0) {
                    if (arg0.parentNode) {
                      parentNode = arg0.parentNode;
                      removeChildResult = parentNode.removeChild(arg0);
                    }
                    childNodes = this.childNodes;
                    arr1 = childNodes.push(arg0);
                    arg0.parentNode = this;
                    return arg0;
                  }
                  replaceChild(arg0, arg1) {
                    if (arg0.parentNode) {
                      parentNode = arg0.parentNode;
                      removeChildResult = parentNode.removeChild(arg0);
                    }
                    childNodes = this.childNodes;
                    arg1.parentNode = null;
                    this.childNodes[childNodes.indexOf(arg1)] = arg0;
                    arg0.parentNode = this;
                    return arg1;
                  }
                  removeChild(arg0) {
                    ({ childNodes, childNodes: childNodes2 } = this);
                    spliceResult = childNodes2.splice(childNodes.indexOf(arg0), 1);
                    arg0.parentNode = null;
                    return arg0;
                  }
                  insertBefore(arg0, arg1) {
                    if (arg0.parentNode) {
                      parentNode = arg0.parentNode;
                      removeChildResult = parentNode.removeChild(arg0);
                    }
                    self = this;
                    num = -1;
                    if (null != arg1) {
                      childNodes = self.childNodes;
                      num = childNodes.indexOf(arg1);
                    }
                    if (num > -1) {
                      childNodes1 = self.childNodes;
                      num2 = 0;
                      spliceResult = childNodes1.splice(num, 0, arg0);
                    } else {
                      childNodes2 = self.childNodes;
                      arr1 = childNodes2.push(arg0);
                    }
                    arg0.parentNode = self;
                    return arg0;
                  }
                  setAttributeNS(arg0, arg1, arg2) {
                    index = arg1.indexOf(":");
                    substr1 = arg1;
                    substr = null;
                    if (index > -1) {
                      num = 0;
                      substr = require("Discord");
                      num2 = 1;
                      substr1 = arg1.substr(index + 1);
                    }
                    self = this;
                    if ("INPUT" === this.tagName) {
                      str = "type";
                      if ("type" === arg1) {
                        self.type = arg2;
                      }
                      return;
                    }
                    tmp4 = self._attributes[arg0];
                    if (!tmp4) {
                      obj = {};
                      self._attributes[arg0] = obj;
                      tmp4 = obj;
                    }
                    tmp4[substr1] = { value: arg2, prefix: substr };
                    return;
                  }
                  getAttributeNS(arg0, arg1) {
                    self = this;
                    tmp = this._attributes[arg0];
                    tmp2 = tmp && tmp[arg1] && tmp[arg1].value;
                    if ("INPUT" === self.tagName) {
                      str = "type";
                      if ("type" === arg1) {
                        type = self.type;
                      }
                      return type;
                    }
                    type = null;
                    if (typeof tmp2 === "string") {
                      type = tmp2;
                    }
                    return;
                  }
                  removeAttributeNS(arg0, arg1) {
                    tmp = this._attributes[arg0];
                    if (tmp) {
                      delete tmp[arg1];
                    }
                    return;
                  }
                  hasAttributeNS(arg0, arg1) {
                    tmp = this._attributes[arg0];
                    tmp2 = tmp;
                    if (tmp2) {
                      tmp3 = arg1;
                      tmp2 = arg1 in tmp;
                    }
                    return tmp2;
                  }
                  setAttribute(arg0, arg1) {
                    return this.setAttributeNS(null, arg0, arg1);
                  }
                  getAttribute(arg0) {
                    return this.getAttributeNS(null, arg0);
                  }
                  removeAttribute(arg0) {
                    return this.removeAttributeNS(null, arg0);
                  }
                  hasAttribute(arg0) {
                    return this.hasAttributeNS(null, arg0);
                  }
                  focus() {
                    return;
                  }
                  toString() {
                    return closure_1(this);
                  }
                  getElementsByClassName(arg0) {
                    closure_0 = arg0.split(" ");
                    items = [];
                    closure_1 = items;
                    tmp = closure_0(this, () => {
                      /* body not rendered: F144531 */
                    });
                    return items;
                  }
                  getElementsByTagName(arg0) {
                    closure_0 = arg0.toLowerCase();
                    items = [];
                    closure_1 = items;
                    tmp = closure_0(this.childNodes, () => {
                      /* body not rendered: F144532 */
                    });
                    return items;
                  }
                  contains(arg0) {
                    closure_0 = arg0;
                    tmp =
                      closure_0(this, function () {
                        /* body not rendered: F144533 */
                      }) || false;
                    return tmp;
                  }
                }
                const obj5 = { exports: {} };
                _undefined = obj5;
                closure_0(obj5.exports, _undefined);
              }
              _undefined = _undefined.exports;
              let str = "http://www.w3.org/1999/xhtml";
              let c2 = "http://www.w3.org/1999/xhtml";
              arg1.exports = I;
              let str2 = "DOMElement";
              I.prototype.type = "DOMElement";
              let num = 1;
              I.prototype.nodeType = 1;
              I.prototype.removeEventListener = tmp23;
              I.prototype.addEventListener = tmp17;
              I.prototype.dispatchEvent = tmp11;
            } else {
              class I {
                constructor(arg0, arg1, arg2) {
                  self = this;
                  tmp = I;
                  if (typeof Symbol !== "undefined") {
                    _Symbol3 = Symbol;
                    if (tmp[Symbol.hasInstance]) {
                      _Symbol2 = Symbol;
                      tmp2 = tmp[Symbol.hasInstance](self);
                    }
                    tmp3 = arg0;
                    if (tmp2) {
                      tmp6 = arg2;
                      if (undefined === arg2) {
                        tmp6 = c2;
                      } else if (!tmp6) {
                        tmp6 = null;
                      }
                      tmp7 = c2;
                      formatted = arg0;
                      if (tmp6 === c2) {
                        _String = String;
                        str = String(arg0);
                        formatted = str.toUpperCase();
                      }
                      tmp9 = arg1;
                      self.tagName = formatted;
                      self.nodeName = self.tagName;
                      str2 = "";
                      self.className = "";
                      self.dataset = {};
                      self.childNodes = [];
                      tmp10 = null;
                      self.parentNode = null;
                      self.style = {};
                      if (!arg1) {
                        tmp9 = null;
                      }
                      self.ownerDocument = tmp9;
                      self.namespaceURI = tmp6;
                      self._attributes = {};
                      str3 = "INPUT";
                      if ("INPUT" === self.tagName) {
                        str4 = "text";
                        self.type = "text";
                      }
                      return;
                    } else {
                      tmpResult = tmp(arg0);
                      tmp5 = tmpResult;
                      return tmpResult;
                    }
                  }
                  if (typeof Symbol !== "undefined") {
                    _Symbol4 = Symbol;
                    if (tmp[Symbol.hasInstance]) {
                      _Symbol = Symbol;
                      tmp2 = tmp[Symbol.hasInstance](self);
                    }
                  }
                  tmp2 = closure_2_8(self, tmp);
                  return;
                }
                appendChild(arg0) {
                  if (arg0.parentNode) {
                    parentNode = arg0.parentNode;
                    removeChildResult = parentNode.removeChild(arg0);
                  }
                  childNodes = this.childNodes;
                  arr1 = childNodes.push(arg0);
                  arg0.parentNode = this;
                  return arg0;
                }
                replaceChild(arg0, arg1) {
                  if (arg0.parentNode) {
                    parentNode = arg0.parentNode;
                    removeChildResult = parentNode.removeChild(arg0);
                  }
                  childNodes = this.childNodes;
                  arg1.parentNode = null;
                  this.childNodes[childNodes.indexOf(arg1)] = arg0;
                  arg0.parentNode = this;
                  return arg1;
                }
                removeChild(arg0) {
                  ({ childNodes, childNodes: childNodes2 } = this);
                  spliceResult = childNodes2.splice(childNodes.indexOf(arg0), 1);
                  arg0.parentNode = null;
                  return arg0;
                }
                insertBefore(arg0, arg1) {
                  if (arg0.parentNode) {
                    parentNode = arg0.parentNode;
                    removeChildResult = parentNode.removeChild(arg0);
                  }
                  self = this;
                  num = -1;
                  if (null != arg1) {
                    childNodes = self.childNodes;
                    num = childNodes.indexOf(arg1);
                  }
                  if (num > -1) {
                    childNodes1 = self.childNodes;
                    num2 = 0;
                    spliceResult = childNodes1.splice(num, 0, arg0);
                  } else {
                    childNodes2 = self.childNodes;
                    arr1 = childNodes2.push(arg0);
                  }
                  arg0.parentNode = self;
                  return arg0;
                }
                setAttributeNS(arg0, arg1, arg2) {
                  index = arg1.indexOf(":");
                  substr1 = arg1;
                  substr = null;
                  if (index > -1) {
                    num = 0;
                    substr = require("Discord");
                    num2 = 1;
                    substr1 = arg1.substr(index + 1);
                  }
                  self = this;
                  if ("INPUT" === this.tagName) {
                    str = "type";
                    if ("type" === arg1) {
                      self.type = arg2;
                    }
                    return;
                  }
                  tmp4 = self._attributes[arg0];
                  if (!tmp4) {
                    obj = {};
                    self._attributes[arg0] = obj;
                    tmp4 = obj;
                  }
                  tmp4[substr1] = { value: arg2, prefix: substr };
                  return;
                }
                getAttributeNS(arg0, arg1) {
                  self = this;
                  tmp = this._attributes[arg0];
                  tmp2 = tmp && tmp[arg1] && tmp[arg1].value;
                  if ("INPUT" === self.tagName) {
                    str = "type";
                    if ("type" === arg1) {
                      type = self.type;
                    }
                    return type;
                  }
                  type = null;
                  if (typeof tmp2 === "string") {
                    type = tmp2;
                  }
                  return;
                }
                removeAttributeNS(arg0, arg1) {
                  tmp = this._attributes[arg0];
                  if (tmp) {
                    delete tmp[arg1];
                  }
                  return;
                }
                hasAttributeNS(arg0, arg1) {
                  tmp = this._attributes[arg0];
                  tmp2 = tmp;
                  if (tmp2) {
                    tmp3 = arg1;
                    tmp2 = arg1 in tmp;
                  }
                  return tmp2;
                }
                setAttribute(arg0, arg1) {
                  return this.setAttributeNS(null, arg0, arg1);
                }
                getAttribute(arg0) {
                  return this.getAttributeNS(null, arg0);
                }
                removeAttribute(arg0) {
                  return this.removeAttributeNS(null, arg0);
                }
                hasAttribute(arg0) {
                  return this.hasAttributeNS(null, arg0);
                }
                focus() {
                  return;
                }
                toString() {
                  return closure_1(this);
                }
                getElementsByClassName(arg0) {
                  closure_0 = arg0.split(" ");
                  items = [];
                  closure_1 = items;
                  tmp = closure_0(this, () => {
                    /* body not rendered: F144531 */
                  });
                  return items;
                }
                getElementsByTagName(arg0) {
                  closure_0 = arg0.toLowerCase();
                  items = [];
                  closure_1 = items;
                  tmp = closure_0(this.childNodes, () => {
                    /* body not rendered: F144532 */
                  });
                  return items;
                }
                contains(arg0) {
                  closure_0 = arg0;
                  tmp =
                    closure_0(this, function () {
                      /* body not rendered: F144533 */
                    }) || false;
                  return tmp;
                }
              }
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            class I {
              constructor(arg0, arg1, arg2) {
                self = this;
                tmp = I;
                if (typeof Symbol !== "undefined") {
                  _Symbol3 = Symbol;
                  if (tmp[Symbol.hasInstance]) {
                    _Symbol2 = Symbol;
                    tmp2 = tmp[Symbol.hasInstance](self);
                  }
                  tmp3 = arg0;
                  if (tmp2) {
                    tmp6 = arg2;
                    if (undefined === arg2) {
                      tmp6 = c2;
                    } else if (!tmp6) {
                      tmp6 = null;
                    }
                    tmp7 = c2;
                    formatted = arg0;
                    if (tmp6 === c2) {
                      _String = String;
                      str = String(arg0);
                      formatted = str.toUpperCase();
                    }
                    tmp9 = arg1;
                    self.tagName = formatted;
                    self.nodeName = self.tagName;
                    str2 = "";
                    self.className = "";
                    self.dataset = {};
                    self.childNodes = [];
                    tmp10 = null;
                    self.parentNode = null;
                    self.style = {};
                    if (!arg1) {
                      tmp9 = null;
                    }
                    self.ownerDocument = tmp9;
                    self.namespaceURI = tmp6;
                    self._attributes = {};
                    str3 = "INPUT";
                    if ("INPUT" === self.tagName) {
                      str4 = "text";
                      self.type = "text";
                    }
                    return;
                  } else {
                    tmpResult = tmp(arg0);
                    tmp5 = tmpResult;
                    return tmpResult;
                  }
                }
                if (typeof Symbol !== "undefined") {
                  _Symbol4 = Symbol;
                  if (tmp[Symbol.hasInstance]) {
                    _Symbol = Symbol;
                    tmp2 = tmp[Symbol.hasInstance](self);
                  }
                }
                tmp2 = closure_2_8(self, tmp);
                return;
              }
              appendChild(arg0) {
                if (arg0.parentNode) {
                  parentNode = arg0.parentNode;
                  removeChildResult = parentNode.removeChild(arg0);
                }
                childNodes = this.childNodes;
                arr1 = childNodes.push(arg0);
                arg0.parentNode = this;
                return arg0;
              }
              replaceChild(arg0, arg1) {
                if (arg0.parentNode) {
                  parentNode = arg0.parentNode;
                  removeChildResult = parentNode.removeChild(arg0);
                }
                childNodes = this.childNodes;
                arg1.parentNode = null;
                this.childNodes[childNodes.indexOf(arg1)] = arg0;
                arg0.parentNode = this;
                return arg1;
              }
              removeChild(arg0) {
                ({ childNodes, childNodes: childNodes2 } = this);
                spliceResult = childNodes2.splice(childNodes.indexOf(arg0), 1);
                arg0.parentNode = null;
                return arg0;
              }
              insertBefore(arg0, arg1) {
                if (arg0.parentNode) {
                  parentNode = arg0.parentNode;
                  removeChildResult = parentNode.removeChild(arg0);
                }
                self = this;
                num = -1;
                if (null != arg1) {
                  childNodes = self.childNodes;
                  num = childNodes.indexOf(arg1);
                }
                if (num > -1) {
                  childNodes1 = self.childNodes;
                  num2 = 0;
                  spliceResult = childNodes1.splice(num, 0, arg0);
                } else {
                  childNodes2 = self.childNodes;
                  arr1 = childNodes2.push(arg0);
                }
                arg0.parentNode = self;
                return arg0;
              }
              setAttributeNS(arg0, arg1, arg2) {
                index = arg1.indexOf(":");
                substr1 = arg1;
                substr = null;
                if (index > -1) {
                  num = 0;
                  substr = require("Discord");
                  num2 = 1;
                  substr1 = arg1.substr(index + 1);
                }
                self = this;
                if ("INPUT" === this.tagName) {
                  str = "type";
                  if ("type" === arg1) {
                    self.type = arg2;
                  }
                  return;
                }
                tmp4 = self._attributes[arg0];
                if (!tmp4) {
                  obj = {};
                  self._attributes[arg0] = obj;
                  tmp4 = obj;
                }
                tmp4[substr1] = { value: arg2, prefix: substr };
                return;
              }
              getAttributeNS(arg0, arg1) {
                self = this;
                tmp = this._attributes[arg0];
                tmp2 = tmp && tmp[arg1] && tmp[arg1].value;
                if ("INPUT" === self.tagName) {
                  str = "type";
                  if ("type" === arg1) {
                    type = self.type;
                  }
                  return type;
                }
                type = null;
                if (typeof tmp2 === "string") {
                  type = tmp2;
                }
                return;
              }
              removeAttributeNS(arg0, arg1) {
                tmp = this._attributes[arg0];
                if (tmp) {
                  delete tmp[arg1];
                }
                return;
              }
              hasAttributeNS(arg0, arg1) {
                tmp = this._attributes[arg0];
                tmp2 = tmp;
                if (tmp2) {
                  tmp3 = arg1;
                  tmp2 = arg1 in tmp;
                }
                return tmp2;
              }
              setAttribute(arg0, arg1) {
                return this.setAttributeNS(null, arg0, arg1);
              }
              getAttribute(arg0) {
                return this.getAttributeNS(null, arg0);
              }
              removeAttribute(arg0) {
                return this.removeAttributeNS(null, arg0);
              }
              hasAttribute(arg0) {
                return this.hasAttributeNS(null, arg0);
              }
              focus() {
                return;
              }
              toString() {
                return closure_1(this);
              }
              getElementsByClassName(arg0) {
                closure_0 = arg0.split(" ");
                items = [];
                closure_1 = items;
                tmp = closure_0(this, () => {
                  /* body not rendered: F144531 */
                });
                return items;
              }
              getElementsByTagName(arg0) {
                closure_0 = arg0.toLowerCase();
                items = [];
                closure_1 = items;
                tmp = closure_0(this.childNodes, () => {
                  /* body not rendered: F144532 */
                });
                return items;
              }
              contains(arg0) {
                closure_0 = arg0;
                tmp =
                  closure_0(this, function () {
                    /* body not rendered: F144533 */
                  }) || false;
                return tmp;
              }
            }
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          class I {
            constructor(arg0, arg1, arg2) {
              self = this;
              tmp = I;
              if (typeof Symbol !== "undefined") {
                _Symbol3 = Symbol;
                if (tmp[Symbol.hasInstance]) {
                  _Symbol2 = Symbol;
                  tmp2 = tmp[Symbol.hasInstance](self);
                }
                tmp3 = arg0;
                if (tmp2) {
                  tmp6 = arg2;
                  if (undefined === arg2) {
                    tmp6 = c2;
                  } else if (!tmp6) {
                    tmp6 = null;
                  }
                  tmp7 = c2;
                  formatted = arg0;
                  if (tmp6 === c2) {
                    _String = String;
                    str = String(arg0);
                    formatted = str.toUpperCase();
                  }
                  tmp9 = arg1;
                  self.tagName = formatted;
                  self.nodeName = self.tagName;
                  str2 = "";
                  self.className = "";
                  self.dataset = {};
                  self.childNodes = [];
                  tmp10 = null;
                  self.parentNode = null;
                  self.style = {};
                  if (!arg1) {
                    tmp9 = null;
                  }
                  self.ownerDocument = tmp9;
                  self.namespaceURI = tmp6;
                  self._attributes = {};
                  str3 = "INPUT";
                  if ("INPUT" === self.tagName) {
                    str4 = "text";
                    self.type = "text";
                  }
                  return;
                } else {
                  tmpResult = tmp(arg0);
                  tmp5 = tmpResult;
                  return tmpResult;
                }
              }
              if (typeof Symbol !== "undefined") {
                _Symbol4 = Symbol;
                if (tmp[Symbol.hasInstance]) {
                  _Symbol = Symbol;
                  tmp2 = tmp[Symbol.hasInstance](self);
                }
              }
              tmp2 = closure_2_8(self, tmp);
              return;
            }
            appendChild(arg0) {
              if (arg0.parentNode) {
                parentNode = arg0.parentNode;
                removeChildResult = parentNode.removeChild(arg0);
              }
              childNodes = this.childNodes;
              arr1 = childNodes.push(arg0);
              arg0.parentNode = this;
              return arg0;
            }
            replaceChild(arg0, arg1) {
              if (arg0.parentNode) {
                parentNode = arg0.parentNode;
                removeChildResult = parentNode.removeChild(arg0);
              }
              childNodes = this.childNodes;
              arg1.parentNode = null;
              this.childNodes[childNodes.indexOf(arg1)] = arg0;
              arg0.parentNode = this;
              return arg1;
            }
            removeChild(arg0) {
              ({ childNodes, childNodes: childNodes2 } = this);
              spliceResult = childNodes2.splice(childNodes.indexOf(arg0), 1);
              arg0.parentNode = null;
              return arg0;
            }
            insertBefore(arg0, arg1) {
              if (arg0.parentNode) {
                parentNode = arg0.parentNode;
                removeChildResult = parentNode.removeChild(arg0);
              }
              self = this;
              num = -1;
              if (null != arg1) {
                childNodes = self.childNodes;
                num = childNodes.indexOf(arg1);
              }
              if (num > -1) {
                childNodes1 = self.childNodes;
                num2 = 0;
                spliceResult = childNodes1.splice(num, 0, arg0);
              } else {
                childNodes2 = self.childNodes;
                arr1 = childNodes2.push(arg0);
              }
              arg0.parentNode = self;
              return arg0;
            }
            setAttributeNS(arg0, arg1, arg2) {
              index = arg1.indexOf(":");
              substr1 = arg1;
              substr = null;
              if (index > -1) {
                num = 0;
                substr = require("Discord");
                num2 = 1;
                substr1 = arg1.substr(index + 1);
              }
              self = this;
              if ("INPUT" === this.tagName) {
                str = "type";
                if ("type" === arg1) {
                  self.type = arg2;
                }
                return;
              }
              tmp4 = self._attributes[arg0];
              if (!tmp4) {
                obj = {};
                self._attributes[arg0] = obj;
                tmp4 = obj;
              }
              tmp4[substr1] = { value: arg2, prefix: substr };
              return;
            }
            getAttributeNS(arg0, arg1) {
              self = this;
              tmp = this._attributes[arg0];
              tmp2 = tmp && tmp[arg1] && tmp[arg1].value;
              if ("INPUT" === self.tagName) {
                str = "type";
                if ("type" === arg1) {
                  type = self.type;
                }
                return type;
              }
              type = null;
              if (typeof tmp2 === "string") {
                type = tmp2;
              }
              return;
            }
            removeAttributeNS(arg0, arg1) {
              tmp = this._attributes[arg0];
              if (tmp) {
                delete tmp[arg1];
              }
              return;
            }
            hasAttributeNS(arg0, arg1) {
              tmp = this._attributes[arg0];
              tmp2 = tmp;
              if (tmp2) {
                tmp3 = arg1;
                tmp2 = arg1 in tmp;
              }
              return tmp2;
            }
            setAttribute(arg0, arg1) {
              return this.setAttributeNS(null, arg0, arg1);
            }
            getAttribute(arg0) {
              return this.getAttributeNS(null, arg0);
            }
            removeAttribute(arg0) {
              return this.removeAttributeNS(null, arg0);
            }
            hasAttribute(arg0) {
              return this.hasAttributeNS(null, arg0);
            }
            focus() {
              return;
            }
            toString() {
              return closure_1(this);
            }
            getElementsByClassName(arg0) {
              closure_0 = arg0.split(" ");
              items = [];
              closure_1 = items;
              tmp = closure_0(this, () => {
                /* body not rendered: F144531 */
              });
              return items;
            }
            getElementsByTagName(arg0) {
              closure_0 = arg0.toLowerCase();
              items = [];
              closure_1 = items;
              tmp = closure_0(this.childNodes, () => {
                /* body not rendered: F144532 */
              });
              return items;
            }
            contains(arg0) {
              closure_0 = arg0;
              tmp =
                closure_0(this, function () {
                  /* body not rendered: F144533 */
                }) || false;
              return tmp;
            }
          }
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        class I {
          constructor(arg0, arg1, arg2) {
            self = this;
            tmp = I;
            if (typeof Symbol !== "undefined") {
              _Symbol3 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol2 = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
              tmp3 = arg0;
              if (tmp2) {
                tmp6 = arg2;
                if (undefined === arg2) {
                  tmp6 = c2;
                } else if (!tmp6) {
                  tmp6 = null;
                }
                tmp7 = c2;
                formatted = arg0;
                if (tmp6 === c2) {
                  _String = String;
                  str = String(arg0);
                  formatted = str.toUpperCase();
                }
                tmp9 = arg1;
                self.tagName = formatted;
                self.nodeName = self.tagName;
                str2 = "";
                self.className = "";
                self.dataset = {};
                self.childNodes = [];
                tmp10 = null;
                self.parentNode = null;
                self.style = {};
                if (!arg1) {
                  tmp9 = null;
                }
                self.ownerDocument = tmp9;
                self.namespaceURI = tmp6;
                self._attributes = {};
                str3 = "INPUT";
                if ("INPUT" === self.tagName) {
                  str4 = "text";
                  self.type = "text";
                }
                return;
              } else {
                tmpResult = tmp(arg0);
                tmp5 = tmpResult;
                return tmpResult;
              }
            }
            if (typeof Symbol !== "undefined") {
              _Symbol4 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
            }
            tmp2 = closure_2_8(self, tmp);
            return;
          }
          appendChild(arg0) {
            if (arg0.parentNode) {
              parentNode = arg0.parentNode;
              removeChildResult = parentNode.removeChild(arg0);
            }
            childNodes = this.childNodes;
            arr1 = childNodes.push(arg0);
            arg0.parentNode = this;
            return arg0;
          }
          replaceChild(arg0, arg1) {
            if (arg0.parentNode) {
              parentNode = arg0.parentNode;
              removeChildResult = parentNode.removeChild(arg0);
            }
            childNodes = this.childNodes;
            arg1.parentNode = null;
            this.childNodes[childNodes.indexOf(arg1)] = arg0;
            arg0.parentNode = this;
            return arg1;
          }
          removeChild(arg0) {
            ({ childNodes, childNodes: childNodes2 } = this);
            spliceResult = childNodes2.splice(childNodes.indexOf(arg0), 1);
            arg0.parentNode = null;
            return arg0;
          }
          insertBefore(arg0, arg1) {
            if (arg0.parentNode) {
              parentNode = arg0.parentNode;
              removeChildResult = parentNode.removeChild(arg0);
            }
            self = this;
            num = -1;
            if (null != arg1) {
              childNodes = self.childNodes;
              num = childNodes.indexOf(arg1);
            }
            if (num > -1) {
              childNodes1 = self.childNodes;
              num2 = 0;
              spliceResult = childNodes1.splice(num, 0, arg0);
            } else {
              childNodes2 = self.childNodes;
              arr1 = childNodes2.push(arg0);
            }
            arg0.parentNode = self;
            return arg0;
          }
          setAttributeNS(arg0, arg1, arg2) {
            index = arg1.indexOf(":");
            substr1 = arg1;
            substr = null;
            if (index > -1) {
              num = 0;
              substr = require("Discord");
              num2 = 1;
              substr1 = arg1.substr(index + 1);
            }
            self = this;
            if ("INPUT" === this.tagName) {
              str = "type";
              if ("type" === arg1) {
                self.type = arg2;
              }
              return;
            }
            tmp4 = self._attributes[arg0];
            if (!tmp4) {
              obj = {};
              self._attributes[arg0] = obj;
              tmp4 = obj;
            }
            tmp4[substr1] = { value: arg2, prefix: substr };
            return;
          }
          getAttributeNS(arg0, arg1) {
            self = this;
            tmp = this._attributes[arg0];
            tmp2 = tmp && tmp[arg1] && tmp[arg1].value;
            if ("INPUT" === self.tagName) {
              str = "type";
              if ("type" === arg1) {
                type = self.type;
              }
              return type;
            }
            type = null;
            if (typeof tmp2 === "string") {
              type = tmp2;
            }
            return;
          }
          removeAttributeNS(arg0, arg1) {
            tmp = this._attributes[arg0];
            if (tmp) {
              delete tmp[arg1];
            }
            return;
          }
          hasAttributeNS(arg0, arg1) {
            tmp = this._attributes[arg0];
            tmp2 = tmp;
            if (tmp2) {
              tmp3 = arg1;
              tmp2 = arg1 in tmp;
            }
            return tmp2;
          }
          setAttribute(arg0, arg1) {
            return this.setAttributeNS(null, arg0, arg1);
          }
          getAttribute(arg0) {
            return this.getAttributeNS(null, arg0);
          }
          removeAttribute(arg0) {
            return this.removeAttributeNS(null, arg0);
          }
          hasAttribute(arg0) {
            return this.hasAttributeNS(null, arg0);
          }
          focus() {
            return;
          }
          toString() {
            return closure_1(this);
          }
          getElementsByClassName(arg0) {
            closure_0 = arg0.split(" ");
            items = [];
            closure_1 = items;
            tmp = closure_0(this, () => {
              /* body not rendered: F144531 */
            });
            return items;
          }
          getElementsByTagName(arg0) {
            closure_0 = arg0.toLowerCase();
            items = [];
            closure_1 = items;
            tmp = closure_0(this.childNodes, () => {
              /* body not rendered: F144532 */
            });
            return items;
          }
          contains(arg0) {
            closure_0 = arg0;
            tmp =
              closure_0(this, function () {
                /* body not rendered: F144533 */
              }) || false;
            return tmp;
          }
        }
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      class I {
        constructor(arg0, arg1, arg2) {
          self = this;
          tmp = I;
          if (typeof Symbol !== "undefined") {
            _Symbol3 = Symbol;
            if (tmp[Symbol.hasInstance]) {
              _Symbol2 = Symbol;
              tmp2 = tmp[Symbol.hasInstance](self);
            }
            tmp3 = arg0;
            if (tmp2) {
              tmp6 = arg2;
              if (undefined === arg2) {
                tmp6 = c2;
              } else if (!tmp6) {
                tmp6 = null;
              }
              tmp7 = c2;
              formatted = arg0;
              if (tmp6 === c2) {
                _String = String;
                str = String(arg0);
                formatted = str.toUpperCase();
              }
              tmp9 = arg1;
              self.tagName = formatted;
              self.nodeName = self.tagName;
              str2 = "";
              self.className = "";
              self.dataset = {};
              self.childNodes = [];
              tmp10 = null;
              self.parentNode = null;
              self.style = {};
              if (!arg1) {
                tmp9 = null;
              }
              self.ownerDocument = tmp9;
              self.namespaceURI = tmp6;
              self._attributes = {};
              str3 = "INPUT";
              if ("INPUT" === self.tagName) {
                str4 = "text";
                self.type = "text";
              }
              return;
            } else {
              tmpResult = tmp(arg0);
              tmp5 = tmpResult;
              return tmpResult;
            }
          }
          if (typeof Symbol !== "undefined") {
            _Symbol4 = Symbol;
            if (tmp[Symbol.hasInstance]) {
              _Symbol = Symbol;
              tmp2 = tmp[Symbol.hasInstance](self);
            }
          }
          tmp2 = closure_2_8(self, tmp);
          return;
        }
        appendChild(arg0) {
          if (arg0.parentNode) {
            parentNode = arg0.parentNode;
            removeChildResult = parentNode.removeChild(arg0);
          }
          childNodes = this.childNodes;
          arr1 = childNodes.push(arg0);
          arg0.parentNode = this;
          return arg0;
        }
        replaceChild(arg0, arg1) {
          if (arg0.parentNode) {
            parentNode = arg0.parentNode;
            removeChildResult = parentNode.removeChild(arg0);
          }
          childNodes = this.childNodes;
          arg1.parentNode = null;
          this.childNodes[childNodes.indexOf(arg1)] = arg0;
          arg0.parentNode = this;
          return arg1;
        }
        removeChild(arg0) {
          ({ childNodes, childNodes: childNodes2 } = this);
          spliceResult = childNodes2.splice(childNodes.indexOf(arg0), 1);
          arg0.parentNode = null;
          return arg0;
        }
        insertBefore(arg0, arg1) {
          if (arg0.parentNode) {
            parentNode = arg0.parentNode;
            removeChildResult = parentNode.removeChild(arg0);
          }
          self = this;
          num = -1;
          if (null != arg1) {
            childNodes = self.childNodes;
            num = childNodes.indexOf(arg1);
          }
          if (num > -1) {
            childNodes1 = self.childNodes;
            num2 = 0;
            spliceResult = childNodes1.splice(num, 0, arg0);
          } else {
            childNodes2 = self.childNodes;
            arr1 = childNodes2.push(arg0);
          }
          arg0.parentNode = self;
          return arg0;
        }
        setAttributeNS(arg0, arg1, arg2) {
          index = arg1.indexOf(":");
          substr1 = arg1;
          substr = null;
          if (index > -1) {
            num = 0;
            substr = require("Discord");
            num2 = 1;
            substr1 = arg1.substr(index + 1);
          }
          self = this;
          if ("INPUT" === this.tagName) {
            str = "type";
            if ("type" === arg1) {
              self.type = arg2;
            }
            return;
          }
          tmp4 = self._attributes[arg0];
          if (!tmp4) {
            obj = {};
            self._attributes[arg0] = obj;
            tmp4 = obj;
          }
          tmp4[substr1] = { value: arg2, prefix: substr };
          return;
        }
        getAttributeNS(arg0, arg1) {
          self = this;
          tmp = this._attributes[arg0];
          tmp2 = tmp && tmp[arg1] && tmp[arg1].value;
          if ("INPUT" === self.tagName) {
            str = "type";
            if ("type" === arg1) {
              type = self.type;
            }
            return type;
          }
          type = null;
          if (typeof tmp2 === "string") {
            type = tmp2;
          }
          return;
        }
        removeAttributeNS(arg0, arg1) {
          tmp = this._attributes[arg0];
          if (tmp) {
            delete tmp[arg1];
          }
          return;
        }
        hasAttributeNS(arg0, arg1) {
          tmp = this._attributes[arg0];
          tmp2 = tmp;
          if (tmp2) {
            tmp3 = arg1;
            tmp2 = arg1 in tmp;
          }
          return tmp2;
        }
        setAttribute(arg0, arg1) {
          return this.setAttributeNS(null, arg0, arg1);
        }
        getAttribute(arg0) {
          return this.getAttributeNS(null, arg0);
        }
        removeAttribute(arg0) {
          return this.removeAttributeNS(null, arg0);
        }
        hasAttribute(arg0) {
          return this.hasAttributeNS(null, arg0);
        }
        focus() {
          return;
        }
        toString() {
          return closure_1(this);
        }
        getElementsByClassName(arg0) {
          closure_0 = arg0.split(" ");
          items = [];
          closure_1 = items;
          tmp = closure_0(this, () => {
            /* body not rendered: F144531 */
          });
          return items;
        }
        getElementsByTagName(arg0) {
          closure_0 = arg0.toLowerCase();
          items = [];
          closure_1 = items;
          tmp = closure_0(this.childNodes, () => {
            /* body not rendered: F144532 */
          });
          return items;
        }
        contains(arg0) {
          closure_0 = arg0;
          tmp =
            closure_0(this, function () {
              /* body not rendered: F144533 */
            }) || false;
          return tmp;
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    class I {
      constructor(arg0, arg1, arg2) {
        self = this;
        tmp = I;
        if (typeof Symbol !== "undefined") {
          _Symbol3 = Symbol;
          if (tmp[Symbol.hasInstance]) {
            _Symbol2 = Symbol;
            tmp2 = tmp[Symbol.hasInstance](self);
          }
          tmp3 = arg0;
          if (tmp2) {
            tmp6 = arg2;
            if (undefined === arg2) {
              tmp6 = c2;
            } else if (!tmp6) {
              tmp6 = null;
            }
            tmp7 = c2;
            formatted = arg0;
            if (tmp6 === c2) {
              _String = String;
              str = String(arg0);
              formatted = str.toUpperCase();
            }
            tmp9 = arg1;
            self.tagName = formatted;
            self.nodeName = self.tagName;
            str2 = "";
            self.className = "";
            self.dataset = {};
            self.childNodes = [];
            tmp10 = null;
            self.parentNode = null;
            self.style = {};
            if (!arg1) {
              tmp9 = null;
            }
            self.ownerDocument = tmp9;
            self.namespaceURI = tmp6;
            self._attributes = {};
            str3 = "INPUT";
            if ("INPUT" === self.tagName) {
              str4 = "text";
              self.type = "text";
            }
            return;
          } else {
            tmpResult = tmp(arg0);
            tmp5 = tmpResult;
            return tmpResult;
          }
        }
        if (typeof Symbol !== "undefined") {
          _Symbol4 = Symbol;
          if (tmp[Symbol.hasInstance]) {
            _Symbol = Symbol;
            tmp2 = tmp[Symbol.hasInstance](self);
          }
        }
        tmp2 = closure_2_8(self, tmp);
        return;
      }
      appendChild(arg0) {
        if (arg0.parentNode) {
          parentNode = arg0.parentNode;
          removeChildResult = parentNode.removeChild(arg0);
        }
        childNodes = this.childNodes;
        arr1 = childNodes.push(arg0);
        arg0.parentNode = this;
        return arg0;
      }
      replaceChild(arg0, arg1) {
        if (arg0.parentNode) {
          parentNode = arg0.parentNode;
          removeChildResult = parentNode.removeChild(arg0);
        }
        childNodes = this.childNodes;
        arg1.parentNode = null;
        this.childNodes[childNodes.indexOf(arg1)] = arg0;
        arg0.parentNode = this;
        return arg1;
      }
      removeChild(arg0) {
        ({ childNodes, childNodes: childNodes2 } = this);
        spliceResult = childNodes2.splice(childNodes.indexOf(arg0), 1);
        arg0.parentNode = null;
        return arg0;
      }
      insertBefore(arg0, arg1) {
        if (arg0.parentNode) {
          parentNode = arg0.parentNode;
          removeChildResult = parentNode.removeChild(arg0);
        }
        self = this;
        num = -1;
        if (null != arg1) {
          childNodes = self.childNodes;
          num = childNodes.indexOf(arg1);
        }
        if (num > -1) {
          childNodes1 = self.childNodes;
          num2 = 0;
          spliceResult = childNodes1.splice(num, 0, arg0);
        } else {
          childNodes2 = self.childNodes;
          arr1 = childNodes2.push(arg0);
        }
        arg0.parentNode = self;
        return arg0;
      }
      setAttributeNS(arg0, arg1, arg2) {
        index = arg1.indexOf(":");
        substr1 = arg1;
        substr = null;
        if (index > -1) {
          num = 0;
          substr = require("Discord");
          num2 = 1;
          substr1 = arg1.substr(index + 1);
        }
        self = this;
        if ("INPUT" === this.tagName) {
          str = "type";
          if ("type" === arg1) {
            self.type = arg2;
          }
          return;
        }
        tmp4 = self._attributes[arg0];
        if (!tmp4) {
          obj = {};
          self._attributes[arg0] = obj;
          tmp4 = obj;
        }
        tmp4[substr1] = { value: arg2, prefix: substr };
        return;
      }
      getAttributeNS(arg0, arg1) {
        self = this;
        tmp = this._attributes[arg0];
        tmp2 = tmp && tmp[arg1] && tmp[arg1].value;
        if ("INPUT" === self.tagName) {
          str = "type";
          if ("type" === arg1) {
            type = self.type;
          }
          return type;
        }
        type = null;
        if (typeof tmp2 === "string") {
          type = tmp2;
        }
        return;
      }
      removeAttributeNS(arg0, arg1) {
        tmp = this._attributes[arg0];
        if (tmp) {
          delete tmp[arg1];
        }
        return;
      }
      hasAttributeNS(arg0, arg1) {
        tmp = this._attributes[arg0];
        tmp2 = tmp;
        if (tmp2) {
          tmp3 = arg1;
          tmp2 = arg1 in tmp;
        }
        return tmp2;
      }
      setAttribute(arg0, arg1) {
        return this.setAttributeNS(null, arg0, arg1);
      }
      getAttribute(arg0) {
        return this.getAttributeNS(null, arg0);
      }
      removeAttribute(arg0) {
        return this.removeAttributeNS(null, arg0);
      }
      hasAttribute(arg0) {
        return this.hasAttributeNS(null, arg0);
      }
      focus() {
        return;
      }
      toString() {
        return closure_1(this);
      }
      getElementsByClassName(arg0) {
        closure_0 = arg0.split(" ");
        items = [];
        closure_1 = items;
        tmp = closure_0(this, () => {
          /* body not rendered: F144531 */
        });
        return items;
      }
      getElementsByTagName(arg0) {
        closure_0 = arg0.toLowerCase();
        items = [];
        closure_1 = items;
        tmp = closure_0(this.childNodes, () => {
          /* body not rendered: F144532 */
        });
        return items;
      }
      contains(arg0) {
        closure_0 = arg0;
        tmp =
          closure_0(this, function () {
            /* body not rendered: F144533 */
          }) || false;
        return tmp;
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
};
const f69183 = (arg0, arg1) => {
  let tmp2;
  class K {
    constructor(arg0) {
      self = this;
      tmp = c0;
      if (typeof Symbol !== "undefined") {
        _Symbol3 = Symbol;
        if (tmp[Symbol.hasInstance]) {
          _Symbol2 = Symbol;
          tmp2 = tmp[Symbol.hasInstance](self);
        }
        if (tmp2) {
          tmp5 = arg0;
          self.childNodes = [];
          tmp6 = null;
          self.parentNode = null;
          if (!arg0) {
            tmp5 = null;
          }
          self.ownerDocument = tmp5;
          return;
        } else {
          tmpResult = tmp();
          tmp4 = tmpResult;
          return tmpResult;
        }
      }
      if (typeof Symbol !== "undefined") {
        _Symbol4 = Symbol;
        if (tmp[Symbol.hasInstance]) {
          _Symbol = Symbol;
          tmp2 = tmp[Symbol.hasInstance](self);
        }
      }
      tmp2 = closure_2_8(self, tmp);
      return;
    }
  }
  if (typeof closure_9 === "function") {
    class K {
      constructor(arg0) {
        self = this;
        tmp = c0;
        if (typeof Symbol !== "undefined") {
          _Symbol3 = Symbol;
          if (tmp[Symbol.hasInstance]) {
            _Symbol2 = Symbol;
            tmp2 = tmp[Symbol.hasInstance](self);
          }
          if (tmp2) {
            tmp5 = arg0;
            self.childNodes = [];
            tmp6 = null;
            self.parentNode = null;
            if (!arg0) {
              tmp5 = null;
            }
            self.ownerDocument = tmp5;
            return;
          } else {
            tmpResult = tmp();
            tmp4 = tmpResult;
            return tmpResult;
          }
        }
        if (typeof Symbol !== "undefined") {
          _Symbol4 = Symbol;
          if (tmp[Symbol.hasInstance]) {
            _Symbol = Symbol;
            tmp2 = tmp[Symbol.hasInstance](self);
          }
        }
        tmp2 = closure_2_8(self, tmp);
        return;
      }
    }
    if (typeof closure_18 === "function") {
      let obj;
      class K {
        constructor(arg0) {
          self = this;
          tmp = c0;
          if (typeof Symbol !== "undefined") {
            _Symbol3 = Symbol;
            if (tmp[Symbol.hasInstance]) {
              _Symbol2 = Symbol;
              tmp2 = tmp[Symbol.hasInstance](self);
            }
            if (tmp2) {
              tmp5 = arg0;
              self.childNodes = [];
              tmp6 = null;
              self.parentNode = null;
              if (!arg0) {
                tmp5 = null;
              }
              self.ownerDocument = tmp5;
              return;
            } else {
              tmpResult = tmp();
              tmp4 = tmpResult;
              return tmpResult;
            }
          }
          if (typeof Symbol !== "undefined") {
            _Symbol4 = Symbol;
            if (tmp[Symbol.hasInstance]) {
              _Symbol = Symbol;
              tmp2 = tmp[Symbol.hasInstance](self);
            }
          }
          tmp2 = closure_2_8(self, tmp);
          return;
        }
        toString() {
          childNodes = this.childNodes;
          mapped = childNodes.map(() => {
            /* body not rendered: F144534 */
          });
          return mapped.join("");
        }
      }
      if (!tmp2) {
        class K {
          constructor(arg0) {
            self = this;
            tmp = c0;
            if (typeof Symbol !== "undefined") {
              _Symbol3 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol2 = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
              if (tmp2) {
                tmp5 = arg0;
                self.childNodes = [];
                tmp6 = null;
                self.parentNode = null;
                if (!arg0) {
                  tmp5 = null;
                }
                self.ownerDocument = tmp5;
                return;
              } else {
                tmpResult = tmp();
                tmp4 = tmpResult;
                return tmpResult;
              }
            }
            if (typeof Symbol !== "undefined") {
              _Symbol4 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
            }
            tmp2 = closure_2_8(self, tmp);
            return;
          }
          toString() {
            childNodes = this.childNodes;
            mapped = childNodes.map(() => {
              /* body not rendered: F144534 */
            });
            return mapped.join("");
          }
        }
        obj = { exports: {} };
        closure_146_0(obj.exports, obj);
      }
      let tmp5 = arg1;
      const _exports = obj.exports;
      arg1.exports = K;
      K.prototype.type = "DocumentFragment";
      K.prototype.nodeType = 11;
      K.prototype.nodeName = "#document-fragment";
      K.prototype.appendChild = _exports.prototype.appendChild;
      K.prototype.replaceChild = _exports.prototype.replaceChild;
      K.prototype.removeChild = _exports.prototype.removeChild;
    } else {
      class K {
        constructor(arg0) {
          self = this;
          tmp = c0;
          if (typeof Symbol !== "undefined") {
            _Symbol3 = Symbol;
            if (tmp[Symbol.hasInstance]) {
              _Symbol2 = Symbol;
              tmp2 = tmp[Symbol.hasInstance](self);
            }
            if (tmp2) {
              tmp5 = arg0;
              self.childNodes = [];
              tmp6 = null;
              self.parentNode = null;
              if (!arg0) {
                tmp5 = null;
              }
              self.ownerDocument = tmp5;
              return;
            } else {
              tmpResult = tmp();
              tmp4 = tmpResult;
              return tmpResult;
            }
          }
          if (typeof Symbol !== "undefined") {
            _Symbol4 = Symbol;
            if (tmp[Symbol.hasInstance]) {
              _Symbol = Symbol;
              tmp2 = tmp[Symbol.hasInstance](self);
            }
          }
          tmp2 = closure_2_8(self, tmp);
          return;
        }
        toString() {
          childNodes = this.childNodes;
          mapped = childNodes.map(() => {
            /* body not rendered: F144534 */
          });
          return mapped.join("");
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    class K {
      constructor(arg0) {
        self = this;
        tmp = c0;
        if (typeof Symbol !== "undefined") {
          _Symbol3 = Symbol;
          if (tmp[Symbol.hasInstance]) {
            _Symbol2 = Symbol;
            tmp2 = tmp[Symbol.hasInstance](self);
          }
          if (tmp2) {
            tmp5 = arg0;
            self.childNodes = [];
            tmp6 = null;
            self.parentNode = null;
            if (!arg0) {
              tmp5 = null;
            }
            self.ownerDocument = tmp5;
            return;
          } else {
            tmpResult = tmp();
            tmp4 = tmpResult;
            return tmpResult;
          }
        }
        if (typeof Symbol !== "undefined") {
          _Symbol4 = Symbol;
          if (tmp[Symbol.hasInstance]) {
            _Symbol = Symbol;
            tmp2 = tmp[Symbol.hasInstance](self);
          }
        }
        tmp2 = closure_2_8(self, tmp);
        return;
      }
      toString() {
        childNodes = this.childNodes;
        mapped = childNodes.map(() => {
          /* body not rendered: F144534 */
        });
        return mapped.join("");
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
};
const f69184 = (arg0, arg1) => {
  class it {
    constructor(arg0) {
      return;
    }
    initEvent(arg0, arg1, arg2) {
      return;
    }
    preventDefault() {
      return;
    }
  }
  arg1.exports = it;
};
const f69185 = (arg0, arg1) => {
  let tmp2;
  class Ue {
    constructor() {
      let tmp2;
      const self = this;
      if (typeof Symbol !== "undefined") {
        const _Symbol3 = Symbol;
        if (Ue[Symbol.hasInstance]) {
          const _Symbol2 = Symbol;
          tmp2 = Ue[Symbol.hasInstance](self);
        }
        if (tmp2) {
          self.head = <head />;
          self.body = <body />;
          self.documentElement = <html />;
          const documentElement = self.documentElement;
          documentElement.appendChild(self.head);
          const documentElement2 = self.documentElement;
          documentElement2.appendChild(self.body);
          items = [self.documentElement];
          self.childNodes = items;
          self.nodeType = 9;
        } else {
          const tmpResult = Ue();
          return tmpResult;
        }
      }
      if (typeof Symbol !== "undefined") {
        const _Symbol4 = Symbol;
        if (Ue[Symbol.hasInstance]) {
          const _Symbol = Symbol;
          tmp2 = Ue[Symbol.hasInstance](self);
        }
      }
      tmp2 = closure_2_8(self, Ue);
    }
  }
  if (typeof closure_9 === "function") {
    class Ue {
      constructor() {
        let tmp2;
        const self = this;
        if (typeof Symbol !== "undefined") {
          const _Symbol3 = Symbol;
          if (Ue[Symbol.hasInstance]) {
            const _Symbol2 = Symbol;
            tmp2 = Ue[Symbol.hasInstance](self);
          }
          if (tmp2) {
            self.head = <head />;
            self.body = <body />;
            self.documentElement = <html />;
            const documentElement = self.documentElement;
            documentElement.appendChild(self.head);
            const documentElement2 = self.documentElement;
            documentElement2.appendChild(self.body);
            items = [self.documentElement];
            self.childNodes = items;
            self.nodeType = 9;
          } else {
            const tmpResult = Ue();
            return tmpResult;
          }
        }
        if (typeof Symbol !== "undefined") {
          const _Symbol4 = Symbol;
          if (Ue[Symbol.hasInstance]) {
            const _Symbol = Symbol;
            tmp2 = Ue[Symbol.hasInstance](self);
          }
        }
        tmp2 = closure_2_8(self, Ue);
      }
    }
    if (typeof closure_11 === "function") {
      let obj;
      class Ue {
        constructor() {
          let tmp2;
          const self = this;
          if (typeof Symbol !== "undefined") {
            const _Symbol3 = Symbol;
            if (Ue[Symbol.hasInstance]) {
              const _Symbol2 = Symbol;
              tmp2 = Ue[Symbol.hasInstance](self);
            }
            if (tmp2) {
              self.head = <head />;
              self.body = <body />;
              self.documentElement = <html />;
              const documentElement = self.documentElement;
              documentElement.appendChild(self.head);
              const documentElement2 = self.documentElement;
              documentElement2.appendChild(self.body);
              items = [self.documentElement];
              self.childNodes = items;
              self.nodeType = 9;
            } else {
              const tmpResult = Ue();
              return tmpResult;
            }
          }
          if (typeof Symbol !== "undefined") {
            const _Symbol4 = Symbol;
            if (Ue[Symbol.hasInstance]) {
              const _Symbol = Symbol;
              tmp2 = Ue[Symbol.hasInstance](self);
            }
          }
          tmp2 = closure_2_8(self, Ue);
        }
      }
      if (!tmp2) {
        class Ue {
          constructor() {
            let tmp2;
            const self = this;
            if (typeof Symbol !== "undefined") {
              const _Symbol3 = Symbol;
              if (Ue[Symbol.hasInstance]) {
                const _Symbol2 = Symbol;
                tmp2 = Ue[Symbol.hasInstance](self);
              }
              if (tmp2) {
                self.head = <head />;
                self.body = <body />;
                self.documentElement = <html />;
                const documentElement = self.documentElement;
                documentElement.appendChild(self.head);
                const documentElement2 = self.documentElement;
                documentElement2.appendChild(self.body);
                items = [self.documentElement];
                self.childNodes = items;
                self.nodeType = 9;
              } else {
                const tmpResult = Ue();
                return tmpResult;
              }
            }
            if (typeof Symbol !== "undefined") {
              const _Symbol4 = Symbol;
              if (Ue[Symbol.hasInstance]) {
                const _Symbol = Symbol;
                tmp2 = Ue[Symbol.hasInstance](self);
              }
            }
            tmp2 = closure_2_8(self, Ue);
          }
        }
        obj = { exports: {} };
        let tmp3 = obj;
        closure_139_0(obj.exports, obj);
      }
      let closure_0 = obj.exports;
      if (typeof closure_12 === "function") {
        let obj2;
        class Ue {
          constructor() {
            let tmp2;
            const self = this;
            if (typeof Symbol !== "undefined") {
              const _Symbol3 = Symbol;
              if (Ue[Symbol.hasInstance]) {
                const _Symbol2 = Symbol;
                tmp2 = Ue[Symbol.hasInstance](self);
              }
              if (tmp2) {
                self.head = <head />;
                self.body = <body />;
                self.documentElement = <html />;
                const documentElement = self.documentElement;
                documentElement.appendChild(self.head);
                const documentElement2 = self.documentElement;
                documentElement2.appendChild(self.body);
                items = [self.documentElement];
                self.childNodes = items;
                self.nodeType = 9;
              } else {
                const tmpResult = Ue();
                return tmpResult;
              }
            }
            if (typeof Symbol !== "undefined") {
              const _Symbol4 = Symbol;
              if (Ue[Symbol.hasInstance]) {
                const _Symbol = Symbol;
                tmp2 = Ue[Symbol.hasInstance](self);
              }
            }
            tmp2 = closure_2_8(self, Ue);
          }
        }
        if (!tmp7) {
          class Ue {
            constructor() {
              let tmp2;
              const self = this;
              if (typeof Symbol !== "undefined") {
                const _Symbol3 = Symbol;
                if (Ue[Symbol.hasInstance]) {
                  const _Symbol2 = Symbol;
                  tmp2 = Ue[Symbol.hasInstance](self);
                }
                if (tmp2) {
                  self.head = <head />;
                  self.body = <body />;
                  self.documentElement = <html />;
                  const documentElement = self.documentElement;
                  documentElement.appendChild(self.head);
                  const documentElement2 = self.documentElement;
                  documentElement2.appendChild(self.body);
                  items = [self.documentElement];
                  self.childNodes = items;
                  self.nodeType = 9;
                } else {
                  const tmpResult = Ue();
                  return tmpResult;
                }
              }
              if (typeof Symbol !== "undefined") {
                const _Symbol4 = Symbol;
                if (Ue[Symbol.hasInstance]) {
                  const _Symbol = Symbol;
                  tmp2 = Ue[Symbol.hasInstance](self);
                }
              }
              tmp2 = closure_2_8(self, Ue);
            }
          }
          obj2 = { exports: {} };
          closure_140_0(obj2.exports, obj2);
        }
        let closure_1 = obj2.exports;
        if (typeof closure_13 === "function") {
          let obj3;
          class Ue {
            constructor() {
              let tmp2;
              const self = this;
              if (typeof Symbol !== "undefined") {
                const _Symbol3 = Symbol;
                if (Ue[Symbol.hasInstance]) {
                  const _Symbol2 = Symbol;
                  tmp2 = Ue[Symbol.hasInstance](self);
                }
                if (tmp2) {
                  self.head = <head />;
                  self.body = <body />;
                  self.documentElement = <html />;
                  const documentElement = self.documentElement;
                  documentElement.appendChild(self.head);
                  const documentElement2 = self.documentElement;
                  documentElement2.appendChild(self.body);
                  items = [self.documentElement];
                  self.childNodes = items;
                  self.nodeType = 9;
                } else {
                  const tmpResult = Ue();
                  return tmpResult;
                }
              }
              if (typeof Symbol !== "undefined") {
                const _Symbol4 = Symbol;
                if (Ue[Symbol.hasInstance]) {
                  const _Symbol = Symbol;
                  tmp2 = Ue[Symbol.hasInstance](self);
                }
              }
              tmp2 = closure_2_8(self, Ue);
            }
          }
          if (!tmp12) {
            class Ue {
              constructor() {
                let tmp2;
                const self = this;
                if (typeof Symbol !== "undefined") {
                  const _Symbol3 = Symbol;
                  if (Ue[Symbol.hasInstance]) {
                    const _Symbol2 = Symbol;
                    tmp2 = Ue[Symbol.hasInstance](self);
                  }
                  if (tmp2) {
                    self.head = <head />;
                    self.body = <body />;
                    self.documentElement = <html />;
                    const documentElement = self.documentElement;
                    documentElement.appendChild(self.head);
                    const documentElement2 = self.documentElement;
                    documentElement2.appendChild(self.body);
                    items = [self.documentElement];
                    self.childNodes = items;
                    self.nodeType = 9;
                  } else {
                    const tmpResult = Ue();
                    return tmpResult;
                  }
                }
                if (typeof Symbol !== "undefined") {
                  const _Symbol4 = Symbol;
                  if (Ue[Symbol.hasInstance]) {
                    const _Symbol = Symbol;
                    tmp2 = Ue[Symbol.hasInstance](self);
                  }
                }
                tmp2 = closure_2_8(self, Ue);
              }
            }
            obj3 = { exports: {} };
            closure_141_0(obj3.exports, obj3);
          }
          let closure_2 = obj3.exports;
          if (typeof closure_18 === "function") {
            let obj4;
            class Ue {
              constructor() {
                let tmp2;
                const self = this;
                if (typeof Symbol !== "undefined") {
                  const _Symbol3 = Symbol;
                  if (Ue[Symbol.hasInstance]) {
                    const _Symbol2 = Symbol;
                    tmp2 = Ue[Symbol.hasInstance](self);
                  }
                  if (tmp2) {
                    self.head = <head />;
                    self.body = <body />;
                    self.documentElement = <html />;
                    const documentElement = self.documentElement;
                    documentElement.appendChild(self.head);
                    const documentElement2 = self.documentElement;
                    documentElement2.appendChild(self.body);
                    items = [self.documentElement];
                    self.childNodes = items;
                    self.nodeType = 9;
                  } else {
                    const tmpResult = Ue();
                    return tmpResult;
                  }
                }
                if (typeof Symbol !== "undefined") {
                  const _Symbol4 = Symbol;
                  if (Ue[Symbol.hasInstance]) {
                    const _Symbol = Symbol;
                    tmp2 = Ue[Symbol.hasInstance](self);
                  }
                }
                tmp2 = closure_2_8(self, Ue);
              }
            }
            if (!tmp17) {
              class Ue {
                constructor() {
                  let tmp2;
                  const self = this;
                  if (typeof Symbol !== "undefined") {
                    const _Symbol3 = Symbol;
                    if (Ue[Symbol.hasInstance]) {
                      const _Symbol2 = Symbol;
                      tmp2 = Ue[Symbol.hasInstance](self);
                    }
                    if (tmp2) {
                      self.head = <head />;
                      self.body = <body />;
                      self.documentElement = <html />;
                      const documentElement = self.documentElement;
                      documentElement.appendChild(self.head);
                      const documentElement2 = self.documentElement;
                      documentElement2.appendChild(self.body);
                      items = [self.documentElement];
                      self.childNodes = items;
                      self.nodeType = 9;
                    } else {
                      const tmpResult = Ue();
                      return tmpResult;
                    }
                  }
                  if (typeof Symbol !== "undefined") {
                    const _Symbol4 = Symbol;
                    if (Ue[Symbol.hasInstance]) {
                      const _Symbol = Symbol;
                      tmp2 = Ue[Symbol.hasInstance](self);
                    }
                  }
                  tmp2 = closure_2_8(self, Ue);
                }
              }
              obj4 = { exports: {} };
              closure_146_0(obj4.exports, obj4);
            }
            const _exports = obj4.exports;
            if (typeof closure_19 === "function") {
              let obj5;
              class Ue {
                constructor() {
                  let tmp2;
                  const self = this;
                  if (typeof Symbol !== "undefined") {
                    const _Symbol3 = Symbol;
                    if (Ue[Symbol.hasInstance]) {
                      const _Symbol2 = Symbol;
                      tmp2 = Ue[Symbol.hasInstance](self);
                    }
                    if (tmp2) {
                      self.head = <head />;
                      self.body = <body />;
                      self.documentElement = <html />;
                      const documentElement = self.documentElement;
                      documentElement.appendChild(self.head);
                      const documentElement2 = self.documentElement;
                      documentElement2.appendChild(self.body);
                      items = [self.documentElement];
                      self.childNodes = items;
                      self.nodeType = 9;
                    } else {
                      const tmpResult = Ue();
                      return tmpResult;
                    }
                  }
                  if (typeof Symbol !== "undefined") {
                    const _Symbol4 = Symbol;
                    if (Ue[Symbol.hasInstance]) {
                      const _Symbol = Symbol;
                      tmp2 = Ue[Symbol.hasInstance](self);
                    }
                  }
                  tmp2 = closure_2_8(self, Ue);
                }
              }
              if (!tmp22) {
                class Ue {
                  constructor() {
                    let tmp2;
                    const self = this;
                    if (typeof Symbol !== "undefined") {
                      const _Symbol3 = Symbol;
                      if (Ue[Symbol.hasInstance]) {
                        const _Symbol2 = Symbol;
                        tmp2 = Ue[Symbol.hasInstance](self);
                      }
                      if (tmp2) {
                        self.head = <head />;
                        self.body = <body />;
                        self.documentElement = <html />;
                        const documentElement = self.documentElement;
                        documentElement.appendChild(self.head);
                        const documentElement2 = self.documentElement;
                        documentElement2.appendChild(self.body);
                        items = [self.documentElement];
                        self.childNodes = items;
                        self.nodeType = 9;
                      } else {
                        const tmpResult = Ue();
                        return tmpResult;
                      }
                    }
                    if (typeof Symbol !== "undefined") {
                      const _Symbol4 = Symbol;
                      if (Ue[Symbol.hasInstance]) {
                        const _Symbol = Symbol;
                        tmp2 = Ue[Symbol.hasInstance](self);
                      }
                    }
                    tmp2 = closure_2_8(self, Ue);
                  }
                }
                obj5 = { exports: {} };
                closure_147_0(obj5.exports, obj5);
              }
              const tmp25 = obj5;
              let closure_4 = obj5.exports;
              if (typeof closure_20 === "function") {
                class Ue {
                  constructor() {
                    let tmp2;
                    const self = this;
                    if (typeof Symbol !== "undefined") {
                      const _Symbol3 = Symbol;
                      if (Ue[Symbol.hasInstance]) {
                        const _Symbol2 = Symbol;
                        tmp2 = Ue[Symbol.hasInstance](self);
                      }
                      if (tmp2) {
                        self.head = <head />;
                        self.body = <body />;
                        self.documentElement = <html />;
                        const documentElement = self.documentElement;
                        documentElement.appendChild(self.head);
                        const documentElement2 = self.documentElement;
                        documentElement2.appendChild(self.body);
                        items = [self.documentElement];
                        self.childNodes = items;
                        self.nodeType = 9;
                      } else {
                        const tmpResult = Ue();
                        return tmpResult;
                      }
                    }
                    if (typeof Symbol !== "undefined") {
                      const _Symbol4 = Symbol;
                      if (Ue[Symbol.hasInstance]) {
                        const _Symbol = Symbol;
                        tmp2 = Ue[Symbol.hasInstance](self);
                      }
                    }
                    tmp2 = closure_2_8(self, Ue);
                  }
                }
                if (!tmp27) {
                  class Ue {
                    constructor() {
                      let tmp2;
                      const self = this;
                      if (typeof Symbol !== "undefined") {
                        const _Symbol3 = Symbol;
                        if (Ue[Symbol.hasInstance]) {
                          const _Symbol2 = Symbol;
                          tmp2 = Ue[Symbol.hasInstance](self);
                        }
                        if (tmp2) {
                          self.head = <head />;
                          self.body = <body />;
                          self.documentElement = <html />;
                          const documentElement = self.documentElement;
                          documentElement.appendChild(self.head);
                          const documentElement2 = self.documentElement;
                          documentElement2.appendChild(self.body);
                          items = [self.documentElement];
                          self.childNodes = items;
                          self.nodeType = 9;
                        } else {
                          const tmpResult = Ue();
                          return tmpResult;
                        }
                      }
                      if (typeof Symbol !== "undefined") {
                        const _Symbol4 = Symbol;
                        if (Ue[Symbol.hasInstance]) {
                          const _Symbol = Symbol;
                          tmp2 = Ue[Symbol.hasInstance](self);
                        }
                      }
                      tmp2 = closure_2_8(self, Ue);
                    }
                  }
                  obj6 = { exports: {} };
                  closure_148_0(obj6.exports, obj6);
                }
                let closure_5 = obj6.exports;
                if (typeof closure_14 === "function") {
                  class Ue {
                    constructor() {
                      let tmp2;
                      const self = this;
                      if (typeof Symbol !== "undefined") {
                        const _Symbol3 = Symbol;
                        if (Ue[Symbol.hasInstance]) {
                          const _Symbol2 = Symbol;
                          tmp2 = Ue[Symbol.hasInstance](self);
                        }
                        if (tmp2) {
                          self.head = <head />;
                          self.body = <body />;
                          self.documentElement = <html />;
                          const documentElement = self.documentElement;
                          documentElement.appendChild(self.head);
                          const documentElement2 = self.documentElement;
                          documentElement2.appendChild(self.body);
                          items = [self.documentElement];
                          self.childNodes = items;
                          self.nodeType = 9;
                        } else {
                          const tmpResult = Ue();
                          return tmpResult;
                        }
                      }
                      if (typeof Symbol !== "undefined") {
                        const _Symbol4 = Symbol;
                        if (Ue[Symbol.hasInstance]) {
                          const _Symbol = Symbol;
                          tmp2 = Ue[Symbol.hasInstance](self);
                        }
                      }
                      tmp2 = closure_2_8(self, Ue);
                    }
                  }
                  if (!tmp32) {
                    class Ue {
                      constructor() {
                        let tmp2;
                        const self = this;
                        if (typeof Symbol !== "undefined") {
                          const _Symbol3 = Symbol;
                          if (Ue[Symbol.hasInstance]) {
                            const _Symbol2 = Symbol;
                            tmp2 = Ue[Symbol.hasInstance](self);
                          }
                          if (tmp2) {
                            self.head = <head />;
                            self.body = <body />;
                            self.documentElement = <html />;
                            const documentElement = self.documentElement;
                            documentElement.appendChild(self.head);
                            const documentElement2 = self.documentElement;
                            documentElement2.appendChild(self.body);
                            items = [self.documentElement];
                            self.childNodes = items;
                            self.nodeType = 9;
                          } else {
                            const tmpResult = Ue();
                            return tmpResult;
                          }
                        }
                        if (typeof Symbol !== "undefined") {
                          const _Symbol4 = Symbol;
                          if (Ue[Symbol.hasInstance]) {
                            const _Symbol = Symbol;
                            tmp2 = Ue[Symbol.hasInstance](self);
                          }
                        }
                        tmp2 = closure_2_8(self, Ue);
                      }
                    }
                    obj7 = { exports: {} };
                    let tmp33 = obj7;
                    closure_142_0(obj7.exports, obj7);
                  }
                  if (typeof closure_15 === "function") {
                    class Ue {
                      constructor() {
                        let tmp2;
                        const self = this;
                        if (typeof Symbol !== "undefined") {
                          const _Symbol3 = Symbol;
                          if (Ue[Symbol.hasInstance]) {
                            const _Symbol2 = Symbol;
                            tmp2 = Ue[Symbol.hasInstance](self);
                          }
                          if (tmp2) {
                            self.head = <head />;
                            self.body = <body />;
                            self.documentElement = <html />;
                            const documentElement = self.documentElement;
                            documentElement.appendChild(self.head);
                            const documentElement2 = self.documentElement;
                            documentElement2.appendChild(self.body);
                            items = [self.documentElement];
                            self.childNodes = items;
                            self.nodeType = 9;
                          } else {
                            const tmpResult = Ue();
                            return tmpResult;
                          }
                        }
                        if (typeof Symbol !== "undefined") {
                          const _Symbol4 = Symbol;
                          if (Ue[Symbol.hasInstance]) {
                            const _Symbol = Symbol;
                            tmp2 = Ue[Symbol.hasInstance](self);
                          }
                        }
                        tmp2 = closure_2_8(self, Ue);
                      }
                    }
                    if (!tmp38) {
                      class Ue {
                        constructor() {
                          let tmp2;
                          const self = this;
                          if (typeof Symbol !== "undefined") {
                            const _Symbol3 = Symbol;
                            if (Ue[Symbol.hasInstance]) {
                              const _Symbol2 = Symbol;
                              tmp2 = Ue[Symbol.hasInstance](self);
                            }
                            if (tmp2) {
                              self.head = <head />;
                              self.body = <body />;
                              self.documentElement = <html />;
                              const documentElement = self.documentElement;
                              documentElement.appendChild(self.head);
                              const documentElement2 = self.documentElement;
                              documentElement2.appendChild(self.body);
                              items = [self.documentElement];
                              self.childNodes = items;
                              self.nodeType = 9;
                            } else {
                              const tmpResult = Ue();
                              return tmpResult;
                            }
                          }
                          if (typeof Symbol !== "undefined") {
                            const _Symbol4 = Symbol;
                            if (Ue[Symbol.hasInstance]) {
                              const _Symbol = Symbol;
                              tmp2 = Ue[Symbol.hasInstance](self);
                            }
                          }
                          tmp2 = closure_2_8(self, Ue);
                        }
                      }
                      let obj8 = { exports: {} };
                      closure_143_0(obj8.exports, obj8);
                    }
                    if (typeof closure_16 === "function") {
                      class Ue {
                        constructor() {
                          let tmp2;
                          const self = this;
                          if (typeof Symbol !== "undefined") {
                            const _Symbol3 = Symbol;
                            if (Ue[Symbol.hasInstance]) {
                              const _Symbol2 = Symbol;
                              tmp2 = Ue[Symbol.hasInstance](self);
                            }
                            if (tmp2) {
                              self.head = <head />;
                              self.body = <body />;
                              self.documentElement = <html />;
                              const documentElement = self.documentElement;
                              documentElement.appendChild(self.head);
                              const documentElement2 = self.documentElement;
                              documentElement2.appendChild(self.body);
                              items = [self.documentElement];
                              self.childNodes = items;
                              self.nodeType = 9;
                            } else {
                              const tmpResult = Ue();
                              return tmpResult;
                            }
                          }
                          if (typeof Symbol !== "undefined") {
                            const _Symbol4 = Symbol;
                            if (Ue[Symbol.hasInstance]) {
                              const _Symbol = Symbol;
                              tmp2 = Ue[Symbol.hasInstance](self);
                            }
                          }
                          tmp2 = closure_2_8(self, Ue);
                        }
                      }
                      if (!tmp44) {
                        class Ue {
                          constructor() {
                            let tmp2;
                            const self = this;
                            if (typeof Symbol !== "undefined") {
                              const _Symbol3 = Symbol;
                              if (Ue[Symbol.hasInstance]) {
                                const _Symbol2 = Symbol;
                                tmp2 = Ue[Symbol.hasInstance](self);
                              }
                              if (tmp2) {
                                self.head = <head />;
                                self.body = <body />;
                                self.documentElement = <html />;
                                const documentElement = self.documentElement;
                                documentElement.appendChild(self.head);
                                const documentElement2 = self.documentElement;
                                documentElement2.appendChild(self.body);
                                items = [self.documentElement];
                                self.childNodes = items;
                                self.nodeType = 9;
                              } else {
                                const tmpResult = Ue();
                                return tmpResult;
                              }
                            }
                            if (typeof Symbol !== "undefined") {
                              const _Symbol4 = Symbol;
                              if (Ue[Symbol.hasInstance]) {
                                const _Symbol = Symbol;
                                tmp2 = Ue[Symbol.hasInstance](self);
                              }
                            }
                            tmp2 = closure_2_8(self, Ue);
                          }
                        }
                        obj9 = { exports: {} };
                        closure_144_0(obj9.exports, obj9);
                      }
                      arg1.exports = Ue;
                      const prototype = Ue.prototype;
                      prototype.createTextNode = function (arg0) {
                        const tmp = new closure_2(arg0, this);
                        return tmp;
                      };
                      prototype.createElementNS = function (arg0, arg1) {
                        let StringResult = null;
                        if (null !== arg0) {
                          const _String = String;
                          StringResult = String(arg0);
                        }
                        const tmp3 = new _exports(arg1, this, StringResult);
                        return tmp3;
                      };
                      prototype.createElement = function (arg0) {
                        const tmp = new _exports(arg0, this);
                        return tmp;
                      };
                      prototype.createDocumentFragment = function () {
                        const tmp = new closure_4(this);
                        return tmp;
                      };
                      prototype.createEvent = (arg0) => {
                        const tmp = new closure_5(arg0);
                        return tmp;
                      };
                      prototype.createComment = function (arg0) {
                        const tmp = new closure_1(arg0, this);
                        return tmp;
                      };
                      prototype.getElementById = function (arg0) {
                        closure_0 = String(arg0);
                        const tmp =
                          closure_0(this.childNodes, (id) => {
                            if (String(id.id) === closure_0) {
                              return id;
                            }
                          }) || null;
                        return tmp;
                      };
                      prototype.getElementsByClassName = _exports.prototype.getElementsByClassName;
                      prototype.getElementsByTagName = _exports.prototype.getElementsByTagName;
                      prototype.contains = _exports.prototype.contains;
                      prototype.removeEventListener = obj9.exports;
                      prototype.addEventListener = tmp42;
                      prototype.dispatchEvent = tmp36;
                    } else {
                      class Ue {
                        constructor() {
                          let tmp2;
                          const self = this;
                          if (typeof Symbol !== "undefined") {
                            const _Symbol3 = Symbol;
                            if (Ue[Symbol.hasInstance]) {
                              const _Symbol2 = Symbol;
                              tmp2 = Ue[Symbol.hasInstance](self);
                            }
                            if (tmp2) {
                              self.head = <head />;
                              self.body = <body />;
                              self.documentElement = <html />;
                              const documentElement = self.documentElement;
                              documentElement.appendChild(self.head);
                              const documentElement2 = self.documentElement;
                              documentElement2.appendChild(self.body);
                              items = [self.documentElement];
                              self.childNodes = items;
                              self.nodeType = 9;
                            } else {
                              const tmpResult = Ue();
                              return tmpResult;
                            }
                          }
                          if (typeof Symbol !== "undefined") {
                            const _Symbol4 = Symbol;
                            if (Ue[Symbol.hasInstance]) {
                              const _Symbol = Symbol;
                              tmp2 = Ue[Symbol.hasInstance](self);
                            }
                          }
                          tmp2 = closure_2_8(self, Ue);
                        }
                      }
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    class Ue {
                      constructor() {
                        let tmp2;
                        const self = this;
                        if (typeof Symbol !== "undefined") {
                          const _Symbol3 = Symbol;
                          if (Ue[Symbol.hasInstance]) {
                            const _Symbol2 = Symbol;
                            tmp2 = Ue[Symbol.hasInstance](self);
                          }
                          if (tmp2) {
                            self.head = <head />;
                            self.body = <body />;
                            self.documentElement = <html />;
                            const documentElement = self.documentElement;
                            documentElement.appendChild(self.head);
                            const documentElement2 = self.documentElement;
                            documentElement2.appendChild(self.body);
                            items = [self.documentElement];
                            self.childNodes = items;
                            self.nodeType = 9;
                          } else {
                            const tmpResult = Ue();
                            return tmpResult;
                          }
                        }
                        if (typeof Symbol !== "undefined") {
                          const _Symbol4 = Symbol;
                          if (Ue[Symbol.hasInstance]) {
                            const _Symbol = Symbol;
                            tmp2 = Ue[Symbol.hasInstance](self);
                          }
                        }
                        tmp2 = closure_2_8(self, Ue);
                      }
                    }
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  class Ue {
                    constructor() {
                      let tmp2;
                      const self = this;
                      if (typeof Symbol !== "undefined") {
                        const _Symbol3 = Symbol;
                        if (Ue[Symbol.hasInstance]) {
                          const _Symbol2 = Symbol;
                          tmp2 = Ue[Symbol.hasInstance](self);
                        }
                        if (tmp2) {
                          self.head = <head />;
                          self.body = <body />;
                          self.documentElement = <html />;
                          const documentElement = self.documentElement;
                          documentElement.appendChild(self.head);
                          const documentElement2 = self.documentElement;
                          documentElement2.appendChild(self.body);
                          items = [self.documentElement];
                          self.childNodes = items;
                          self.nodeType = 9;
                        } else {
                          const tmpResult = Ue();
                          return tmpResult;
                        }
                      }
                      if (typeof Symbol !== "undefined") {
                        const _Symbol4 = Symbol;
                        if (Ue[Symbol.hasInstance]) {
                          const _Symbol = Symbol;
                          tmp2 = Ue[Symbol.hasInstance](self);
                        }
                      }
                      tmp2 = closure_2_8(self, Ue);
                    }
                  }
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                class Ue {
                  constructor() {
                    let tmp2;
                    const self = this;
                    if (typeof Symbol !== "undefined") {
                      const _Symbol3 = Symbol;
                      if (Ue[Symbol.hasInstance]) {
                        const _Symbol2 = Symbol;
                        tmp2 = Ue[Symbol.hasInstance](self);
                      }
                      if (tmp2) {
                        self.head = <head />;
                        self.body = <body />;
                        self.documentElement = <html />;
                        const documentElement = self.documentElement;
                        documentElement.appendChild(self.head);
                        const documentElement2 = self.documentElement;
                        documentElement2.appendChild(self.body);
                        items = [self.documentElement];
                        self.childNodes = items;
                        self.nodeType = 9;
                      } else {
                        const tmpResult = Ue();
                        return tmpResult;
                      }
                    }
                    if (typeof Symbol !== "undefined") {
                      const _Symbol4 = Symbol;
                      if (Ue[Symbol.hasInstance]) {
                        const _Symbol = Symbol;
                        tmp2 = Ue[Symbol.hasInstance](self);
                      }
                    }
                    tmp2 = closure_2_8(self, Ue);
                  }
                }
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              class Ue {
                constructor() {
                  let tmp2;
                  const self = this;
                  if (typeof Symbol !== "undefined") {
                    const _Symbol3 = Symbol;
                    if (Ue[Symbol.hasInstance]) {
                      const _Symbol2 = Symbol;
                      tmp2 = Ue[Symbol.hasInstance](self);
                    }
                    if (tmp2) {
                      self.head = <head />;
                      self.body = <body />;
                      self.documentElement = <html />;
                      const documentElement = self.documentElement;
                      documentElement.appendChild(self.head);
                      const documentElement2 = self.documentElement;
                      documentElement2.appendChild(self.body);
                      items = [self.documentElement];
                      self.childNodes = items;
                      self.nodeType = 9;
                    } else {
                      const tmpResult = Ue();
                      return tmpResult;
                    }
                  }
                  if (typeof Symbol !== "undefined") {
                    const _Symbol4 = Symbol;
                    if (Ue[Symbol.hasInstance]) {
                      const _Symbol = Symbol;
                      tmp2 = Ue[Symbol.hasInstance](self);
                    }
                  }
                  tmp2 = closure_2_8(self, Ue);
                }
              }
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            class Ue {
              constructor() {
                let tmp2;
                const self = this;
                if (typeof Symbol !== "undefined") {
                  const _Symbol3 = Symbol;
                  if (Ue[Symbol.hasInstance]) {
                    const _Symbol2 = Symbol;
                    tmp2 = Ue[Symbol.hasInstance](self);
                  }
                  if (tmp2) {
                    self.head = <head />;
                    self.body = <body />;
                    self.documentElement = <html />;
                    const documentElement = self.documentElement;
                    documentElement.appendChild(self.head);
                    const documentElement2 = self.documentElement;
                    documentElement2.appendChild(self.body);
                    items = [self.documentElement];
                    self.childNodes = items;
                    self.nodeType = 9;
                  } else {
                    const tmpResult = Ue();
                    return tmpResult;
                  }
                }
                if (typeof Symbol !== "undefined") {
                  const _Symbol4 = Symbol;
                  if (Ue[Symbol.hasInstance]) {
                    const _Symbol = Symbol;
                    tmp2 = Ue[Symbol.hasInstance](self);
                  }
                }
                tmp2 = closure_2_8(self, Ue);
              }
            }
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          class Ue {
            constructor() {
              let tmp2;
              const self = this;
              if (typeof Symbol !== "undefined") {
                const _Symbol3 = Symbol;
                if (Ue[Symbol.hasInstance]) {
                  const _Symbol2 = Symbol;
                  tmp2 = Ue[Symbol.hasInstance](self);
                }
                if (tmp2) {
                  self.head = <head />;
                  self.body = <body />;
                  self.documentElement = <html />;
                  const documentElement = self.documentElement;
                  documentElement.appendChild(self.head);
                  const documentElement2 = self.documentElement;
                  documentElement2.appendChild(self.body);
                  items = [self.documentElement];
                  self.childNodes = items;
                  self.nodeType = 9;
                } else {
                  const tmpResult = Ue();
                  return tmpResult;
                }
              }
              if (typeof Symbol !== "undefined") {
                const _Symbol4 = Symbol;
                if (Ue[Symbol.hasInstance]) {
                  const _Symbol = Symbol;
                  tmp2 = Ue[Symbol.hasInstance](self);
                }
              }
              tmp2 = closure_2_8(self, Ue);
            }
          }
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        class Ue {
          constructor() {
            let tmp2;
            const self = this;
            if (typeof Symbol !== "undefined") {
              const _Symbol3 = Symbol;
              if (Ue[Symbol.hasInstance]) {
                const _Symbol2 = Symbol;
                tmp2 = Ue[Symbol.hasInstance](self);
              }
              if (tmp2) {
                self.head = <head />;
                self.body = <body />;
                self.documentElement = <html />;
                const documentElement = self.documentElement;
                documentElement.appendChild(self.head);
                const documentElement2 = self.documentElement;
                documentElement2.appendChild(self.body);
                items = [self.documentElement];
                self.childNodes = items;
                self.nodeType = 9;
              } else {
                const tmpResult = Ue();
                return tmpResult;
              }
            }
            if (typeof Symbol !== "undefined") {
              const _Symbol4 = Symbol;
              if (Ue[Symbol.hasInstance]) {
                const _Symbol = Symbol;
                tmp2 = Ue[Symbol.hasInstance](self);
              }
            }
            tmp2 = closure_2_8(self, Ue);
          }
        }
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      class Ue {
        constructor() {
          let tmp2;
          const self = this;
          if (typeof Symbol !== "undefined") {
            const _Symbol3 = Symbol;
            if (Ue[Symbol.hasInstance]) {
              const _Symbol2 = Symbol;
              tmp2 = Ue[Symbol.hasInstance](self);
            }
            if (tmp2) {
              self.head = <head />;
              self.body = <body />;
              self.documentElement = <html />;
              const documentElement = self.documentElement;
              documentElement.appendChild(self.head);
              const documentElement2 = self.documentElement;
              documentElement2.appendChild(self.body);
              items = [self.documentElement];
              self.childNodes = items;
              self.nodeType = 9;
            } else {
              const tmpResult = Ue();
              return tmpResult;
            }
          }
          if (typeof Symbol !== "undefined") {
            const _Symbol4 = Symbol;
            if (Ue[Symbol.hasInstance]) {
              const _Symbol = Symbol;
              tmp2 = Ue[Symbol.hasInstance](self);
            }
          }
          tmp2 = closure_2_8(self, Ue);
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    class Ue {
      constructor() {
        let tmp2;
        const self = this;
        if (typeof Symbol !== "undefined") {
          const _Symbol3 = Symbol;
          if (Ue[Symbol.hasInstance]) {
            const _Symbol2 = Symbol;
            tmp2 = Ue[Symbol.hasInstance](self);
          }
          if (tmp2) {
            self.head = <head />;
            self.body = <body />;
            self.documentElement = <html />;
            const documentElement = self.documentElement;
            documentElement.appendChild(self.head);
            const documentElement2 = self.documentElement;
            documentElement2.appendChild(self.body);
            items = [self.documentElement];
            self.childNodes = items;
            self.nodeType = 9;
          } else {
            const tmpResult = Ue();
            return tmpResult;
          }
        }
        if (typeof Symbol !== "undefined") {
          const _Symbol4 = Symbol;
          if (Ue[Symbol.hasInstance]) {
            const _Symbol = Symbol;
            tmp2 = Ue[Symbol.hasInstance](self);
          }
        }
        tmp2 = closure_2_8(self, Ue);
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
};
const f69186 = function (arg0, arg1) {
  let obj;
  if (typeof closure_1_21 === "function") {
    const tmp = obj;
    if (!tmp) {
      obj = { exports: {} };
      closure_149_0(obj.exports, obj);
    }
    const self = this;
    const self2 = this;
    const _exports = new obj.exports();
    arg1.exports = _exports;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let c1;
const f119021 = f1190212;
let obj = {};
let obj2 = { default: () => ne };
for (const key10058 in obj2) {
  let obj3 = { get: obj2[key10058], enumerable: true };
  let definePropertyResult = defineProperty(obj, key10058, obj3);
  continue;
}
if (typeof obj === "object") {
  const ownPropertyNames = getOwnPropertyNames(obj);
  let length = ownPropertyNames.length;
  let num = 0;
  let num2 = 1;
  let tmp2 = null;
  if (0 < length) {
    do {
      let tmp3 = ownPropertyNames[num];
      let tmp4 = num;
      let callResult = hasOwnProperty.call(definePropertyResult1, tmp3);
      let tmp6 = !callResult && tmp3 !== undefined;
      if (tmp6) {
        let obj4 = { get: fn.bind(null, tmp3), enumerable };
        fn = (arg0) => closure_0[arg0];
        let ownPropertyDescriptor = getOwnPropertyDescriptor(obj, tmp3);
        enumerable = !ownPropertyDescriptor;
        if (ownPropertyDescriptor) {
          enumerable = ownPropertyDescriptor.enumerable;
        }
        let definePropertyResult2 = defineProperty(definePropertyResult1, tmp3, obj4);
      }
      num = num + 1;
    } while (num < length);
  }
}
class G {
  constructor(value, arg1, arg2) {
    let enumerable;
    let obj;
    let tmp4;
    if (null != value) {
      obj = create(getPrototypeOf(value));
    } else {
      obj = {};
    }
    if (!value) {
      const obj2 = { value, enumerable: true };
      tmp4 = defineProperty(obj, "default", obj2);
    } else {
      tmp4 = obj;
    }
    if (typeof pt === "function") {
      let num;
      let closure_0 = value;
      if (!closure_0) {
        return tmp4;
      }
      const arr = getOwnPropertyNames(value);
      for (let num = 0; num < arr.length; num = num + 1) {
        let tmp7 = arr[num];
        let callResult = hasOwnProperty.call(tmp4, tmp7);
        let tmp10 = !callResult && tmp7 !== undefined;
        if (tmp10) {
          let obj3 = { get: fn.bind(null, tmp7), enumerable };
          fn = (arg0) => closure_0[arg0];
          let tmp13 = getOwnPropertyDescriptor(value, tmp7);
          enumerable = !tmp13;
          if (tmp13) {
            enumerable = tmp13.enumerable;
          }
          let tmp11Result = defineProperty(tmp4, tmp7, obj3);
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
let obj5 = { exports: {} };
let tmp9 = ((arg0, arg1) => {
  let _window;
  if (typeof window !== "undefined") {
    _window = window;
  } else {
    _window = global;
    if (undefined === global) {
      const _self = self;
      _window = typeof self !== "undefined" ? self : {};
    }
  }
  arg1.exports = _window;
})(0, obj5);
const GResult = G(obj5.exports);
let closure_25 = G(obj5.exports);
let closure_26 = G(obj5.exports);
let obj6 = {
  now() {
    const _performance = closure_26.default.performance;
    if (
      typeof _performance &&
      _performance.timing &&
      (_performance && _performance.timing).navigationStart === "number"
    ) {
      let sum;
      if (typeof _performance.now === "function") {
        sum = tmp2 + _performance.now();
      }
      const _Math = Math;
      return Math.round(sum);
    }
    sum = Date.now();
  },
};
function ee() {
  const _crypto = closure_25.default.crypto;
  let getRandomValues;
  if (null !== _crypto) {
    if (undefined !== _crypto) {
      getRandomValues = _crypto.getRandomValues;
    }
  }
  if (typeof getRandomValues === "function") {
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
    const uint8Array = new Uint8Array(32);
    items = uint8Array;
    const _crypto2 = closure_25.default.crypto;
    const randomValues = _crypto2.getRandomValues(uint8Array);
    let num6 = 0;
    do {
      uint8Array[num6] = uint8Array[num6] % 16;
      num6 = num6 + 1;
    } while (num6 < 32);
  } else {
    items = [];
    let num = 0;
    do {
      let _Math = Math;
      items[num] = (16 * Math.random()) | 0;
      num = num + 1;
    } while (num < 32);
  }
  let closure_1 = 0;
  let str = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
    let str;
    if ("x" === arg0) {
      str = items[closure_1];
    } else {
      str = (3 & items[closure_1]) | 8;
    }
    closure_1 = closure_1 + 1;
    return str.toString(16);
  });
  const str2 = obj6.now();
  let substr;
  if (null != str2) {
    const str3 = str2.toString(16);
    substr = str3.substring(3);
  }
  let sum = str;
  if (substr) {
    sum = str.substring(0, 28) + substr;
  }
  return sum;
}
class Oe {
  constructor() {
    const random = Math.random();
    const str = (random * Math.pow(36, 6)) | 0;
    const text = `000000${str.toString(36)}`;
    return `000000${str.toString(36)}`.slice(-6);
  }
}
function J(nodeName) {
  let element;
  if (nodeName) {
    if (undefined !== nodeName.nodeName) {
      if (!nodeName.muxId) {
        nodeName.muxId = Oe();
      }
      return nodeName.muxId;
    }
  }
  try {
    const _document = document;
    element = document.querySelector(nodeName);
  } catch (err) {}
  const tmp3 = element && !element.muxId;
  if (tmp3) {
    element.muxId = nodeName;
  }
  let muxId;
  if (null != element) {
    muxId = element.muxId;
  }
  if (!muxId) {
    muxId = nodeName;
  }
  return muxId;
}
function se(nodeName) {
  const tmp = nodeName;
  if (tmp) {
    let tmp3;
    let element;
    if (undefined !== nodeName.nodeName) {
      tmp3 = J(nodeName);
      element = nodeName;
    }
    let str2 = "";
    if (element) {
      str2 = "";
      if (element.nodeName) {
        const str3 = element.nodeName;
        str2 = str3.toLowerCase();
      }
    }
    items = [element, tmp3, str2];
    return items;
  }
  element = document.querySelector(nodeName);
  tmp3 = nodeName;
}
let c33 = 0;
let c34 = 1;
let c35 = 2;
let c36 = 3;
let c37 = 4;
let tmp11 = (function (arg0) {
  let items1;
  let num = 3;
  if (arguments.length > 1) {
    num = 3;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  const _console = console;
  if (arg0) {
    items = [_console, arg0];
    items1 = items;
  } else {
    items1 = [_console];
  }
  const bind = trace.bind;
  let closure_1 = bind.apply(trace, V(items1));
  const bind2 = info.bind;
  let closure_2 = bind2.apply(info, V(items1));
  const bind3 = debug.bind;
  let closure_3 = bind3.apply(debug, V(items1));
  const bind4 = warn.bind;
  let closure_4 = bind4.apply(warn, V(items1));
  const bind5 = error.bind;
  let closure_5 = bind5.apply(error, V(items1));
  let closure_6 = num;
  const obj = {
    trace() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (closure_6 <= c33) {
        return closure_1.apply(undefined, V(array));
      }
    },
    debug() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (closure_6 <= c34) {
        return closure_3.apply(undefined, V(array));
      }
    },
    info() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (closure_6 <= c35) {
        return closure_2.apply(undefined, V(array));
      }
    },
    warn() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (closure_6 <= c36) {
        return closure_4.apply(undefined, V(array));
      }
    },
    error() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (closure_6 <= c37) {
        return closure_5.apply(undefined, V(array));
      }
    },
  };
  Object.defineProperty(obj, "level", {
    get: () => closure_6,
    set: function (arg0) {
      let tmp = arg0;
      if (arg0 !== this.level) {
        if (null == tmp) {
          tmp = num;
        }
        closure_6 = tmp;
      }
    },
  });
  return obj;
})("[mux]");
const __initData5 = tmp11;
let closure_39 = G(obj5.exports);
if (c0) {
  c0 = 0;
  closure_1 = tmp12(0);
}
if (c0) {
  c0 = 0;
  closure_1 = tmp13(0);
}
class N {
  constructor(arg0, arg1, arg2) {
    let num;
    for (let num = 0; num < arg1.length; num = num + 1) {
      let tmp2 = arg1[num];
      let flag = tmp2.enumerable;
      if (!flag) {
        flag = false;
      }
      tmp2.enumerable = flag;
      tmp2.configurable = true;
      if ("value" in tmp2) {
        tmp2.writable = true;
      }
      let _Object = Object;
      let definePropertyResult = Object.defineProperty(tmp, tmp2.key, tmp2);
    }
    return arg0;
  }
}
class F {
  constructor(str) {
    if (typeof re === "function") {
      if (typeof str === "string") {
        if ("" !== str) {
          const tmp2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
          let first;
          if (tmp2[4]) {
            first = (tmp2[4].match(/[^\.]+\.[^\.]+$/) || [])[0];
            tmp2[4].match(/[^\.]+\.[^\.]+$/) || [];
          }
          items = [tmp2[4], first];
        }
        return items[0];
      }
      items = ["localhost"];
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function re(str) {
  if (typeof str === "string") {
    if ("" !== str) {
      const tmp = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
      let first;
      if (tmp[4]) {
        first = (tmp[4].match(/[^\.]+\.[^\.]+$/) || [])[0];
        tmp[4].match(/[^\.]+\.[^\.]+$/) || [];
      }
      items = [tmp[4], first];
      return items;
    }
  }
  return ["localhost"];
}
let closure_46 = G(obj5.exports);
const vanityURLCode = {
  exists() {
    const _performance = closure_46.default.performance;
    return undefined !== (_performance && _performance.timing);
  },
  domContentLoadedEventEnd() {
    const _performance = closure_46.default.performance;
    return _performance && _performance.timing && (_performance && _performance.timing).domContentLoadedEventEnd;
  },
  navigationStart() {
    const _performance = closure_46.default.performance;
    return _performance && _performance.timing && (_performance && _performance.timing).navigationStart;
  },
};
let items = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"];
let items1 = ["x-cdn", "content-type"];
let closure_50 = items1.concat(items);
function Me(arg0) {}
function He(arg0) {}
function Se(arg0) {}
function Nt(requestEndDate, getMetricsFor) {
  let bytesLoaded;
  let tmp18;
  let url;
  const tmp = requestEndDate;
  if (tmp) {
    if (requestEndDate.requestEndDate) {
      if (typeof F === "function") {
        if (typeof re === "function") {
          if (typeof requestEndDate.url === "string") {
            let HttpList;
            let obj;
            if ("" !== requestEndDate.url) {
              const str2 = (requestEndDate.url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) ||
                [])[4];
              let first;
              if (str2) {
                first = (str2.match(/[^\.]+\.[^\.]+$/) || [])[0];
                str2.match(/[^\.]+\.[^\.]+$/) || [];
              }
              items = [str2, first];
            }
            const _Date = Date;
            const self = this;
            const self2 = this;
            const first1 = items[0];
            ({ url, bytesLoaded } = requestEndDate);
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const date = new Date(requestEndDate.requestStartDate);
            const time = date.getTime();
            const _Date3 = Date;
            const self5 = this;
            const self6 = this;
            const date1 = new Date(requestEndDate.firstByteDate);
            const time1 = date1.getTime();
            const _isNaN = isNaN;
            const date2 = new Date(requestEndDate.requestEndDate);
            const time2 = date2.getTime();
            let num2 = 0;
            if (!isNaN(requestEndDate.duration)) {
              num2 = requestEndDate.duration;
            }
            if (typeof getMetricsFor.getMetricsFor === "function") {
              HttpList = getMetricsFor.getMetricsFor(requestEndDate.mediaType).HttpList;
            } else {
              const dashMetrics = getMetricsFor.getDashMetrics();
              HttpList = dashMetrics.getHttpRequests(requestEndDate.mediaType);
            }
            let tmp16;
            if (HttpList.length > 0) {
              let str3 = HttpList[HttpList.length - 1]._responseHeaders || "";
              obj = {};
              if (!str3) {
                str3 = "";
              }
              const str4 = str3.trim();
              const parts = str4.split(/[\r\n]+/);
              const item = parts.forEach((item) => {
                const tmp = item;
                if (tmp) {
                  const parts = item.split(": ");
                  const str2 = parts.shift();
                  let tmp2 = str2;
                  if (tmp2) {
                    let tmp4 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                    if (!tmp4) {
                      const formatted = str2.toLowerCase();
                      tmp4 = 0 === formatted.indexOf("x-litix-");
                    }
                    tmp2 = tmp4;
                  }
                  if (tmp2) {
                    obj2[str2] = parts.join(": ");
                  }
                }
              });
              tmp16 = obj;
            }
            const obj2 = {
              requestStart: time,
              requestResponseStart: time1,
              requestResponseEnd: time2,
              requestBytesLoaded: bytesLoaded,
              requestResponseHeaders: tmp16,
              requestMediaDuration: num2,
              requestHostname: first1,
              requestUrl: url,
              requestId: tmp18,
            };
            tmp18 = undefined;
            if (tmp16) {
              obj = tmp16;
              let tmp19;
              if (tmp16) {
                const found = items.find((item) => undefined !== obj2[item]);
                let tmp22;
                if (found) {
                  tmp22 = tmp16[found];
                }
                tmp19 = tmp22;
              }
              tmp18 = tmp19;
            }
            return obj2;
          }
          items = ["localhost"];
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return {};
}
function pa(arg0) {}
function Ct(arg0, arg1, arg2) {}
let c57 = 0;
let fn2 = function r() {
  let tmp2;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn2[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn2[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_listeners" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_listeners", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._listeners = undefined;
      }
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn2[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn2[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn2);
};
const entry = {
  key: "on",
  value(arg0, _eventEmitterGuid, self) {
    _eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
    if (!_eventEmitterGuid) {
      const sum = c57 + 1;
      c57 = sum;
      _eventEmitterGuid = sum;
    }
    self = this;
    _eventEmitterGuid._eventEmitterGuid = _eventEmitterGuid;
    const tmp3 = this._listeners || {};
    self._listeners = tmp3;
    items = self._listeners[arg0];
    const _listeners = self._listeners;
    if (!items) {
      items = [];
    }
    _listeners[arg0] = items;
    let bindResult = _eventEmitterGuid;
    if (self) {
      bindResult = _eventEmitterGuid.bind(self);
    }
    const arr2 = self._listeners[arg0];
    arr2.push(bindResult);
    return bindResult;
  },
};
let items2 = [
  entry,
  {
    key: "off",
    value(arg0, arg1) {
      const _eventEmitterGuid = arg1;
      const _listeners = this._listeners && tmp._listeners[arg0];
      if (_listeners) {
        const item = _listeners.forEach((_eventEmitterGuid, index) => {
          if (_eventEmitterGuid._eventEmitterGuid === _eventEmitterGuid._eventEmitterGuid) {
            _listeners.splice(index, 1);
          }
        });
      }
    },
  },
  {
    key: "one",
    value(arg0, _eventEmitterGuid, arg2) {
      let closure_0 = arg0;
      let closure_1 = _eventEmitterGuid;
      let closure_2 = arg2;
      let self = this;
      _eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      if (!_eventEmitterGuid) {
        const sum = c57 + 1;
        c57 = sum;
        _eventEmitterGuid = sum;
      }
      _eventEmitterGuid._eventEmitterGuid = _eventEmitterGuid;
      fn = function o() {
        self.off(closure_0, fn);
        self = closure_2;
        const apply = closure_1.apply;
        if (!closure_2) {
          self = this;
        }
        apply(self, arguments);
      };
      fn._eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      self.on(arg0, fn);
    },
  },
  {
    key: "emit",
    value(arg0, arg1) {
      const f153300 = (call) => {
        const obj = { type };
        call.call(self, obj, type);
      };
      let closure_0 = arg0;
      const self = this;
      if (this._listeners) {
        const tmp = arg1 || {};
        const arr = self._listeners["before" + arg0] || [];
        const arr2 = self._listeners["before*"] || [];
        const arr3 = self._listeners[arg0] || [];
        const arr4 = self._listeners["after" + arg0] || [];
        const substr = arr.slice();
        const item = substr.forEach(f153300);
        const substr1 = arr2.slice();
        const item1 = substr1.forEach(f153300);
        const substr2 = arr3.slice();
        const item2 = substr2.forEach(f153300);
        closure_0 = tmp;
        const substr3 = arr4.slice();
        const item3 = substr3.forEach(f153300);
      }
    },
  },
];
N(fn2, items2);
let closure_58 = G(obj5.exports);
let fn3 = function r(pm) {
  let tmp2;
  let closure_0 = pm;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn3[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn3[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_playbackHeartbeatInterval" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_playbackHeartbeatInterval", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._playbackHeartbeatInterval = undefined;
      }
      if ("_playheadShouldBeProgressing" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_playheadShouldBeProgressing", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._playheadShouldBeProgressing = undefined;
      }
      if ("pm" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "pm", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      self._playbackHeartbeatInterval = null;
      self._playheadShouldBeProgressing = false;
      pm.on("playing", () => {
        self._playheadShouldBeProgressing = true;
      });
      const _startPlaybackHeartbeatInterval = self._startPlaybackHeartbeatInterval;
      pm.on("play", _startPlaybackHeartbeatInterval.bind(self));
      const _startPlaybackHeartbeatInterval2 = self._startPlaybackHeartbeatInterval;
      pm.on("playing", _startPlaybackHeartbeatInterval2.bind(self));
      const _startPlaybackHeartbeatInterval3 = self._startPlaybackHeartbeatInterval;
      pm.on("adbreakstart", _startPlaybackHeartbeatInterval3.bind(self));
      const _startPlaybackHeartbeatInterval4 = self._startPlaybackHeartbeatInterval;
      pm.on("adplay", _startPlaybackHeartbeatInterval4.bind(self));
      const _startPlaybackHeartbeatInterval5 = self._startPlaybackHeartbeatInterval;
      pm.on("adplaying", _startPlaybackHeartbeatInterval5.bind(self));
      const _startPlaybackHeartbeatInterval6 = self._startPlaybackHeartbeatInterval;
      pm.on("devicewake", _startPlaybackHeartbeatInterval6.bind(self));
      const _startPlaybackHeartbeatInterval7 = self._startPlaybackHeartbeatInterval;
      pm.on("viewstart", _startPlaybackHeartbeatInterval7.bind(self));
      const _startPlaybackHeartbeatInterval8 = self._startPlaybackHeartbeatInterval;
      pm.on("rebufferstart", _startPlaybackHeartbeatInterval8.bind(self));
      const _stopPlaybackHeartbeatInterval = self._stopPlaybackHeartbeatInterval;
      pm.on("pause", _stopPlaybackHeartbeatInterval.bind(self));
      const _stopPlaybackHeartbeatInterval2 = self._stopPlaybackHeartbeatInterval;
      pm.on("ended", _stopPlaybackHeartbeatInterval2.bind(self));
      const _stopPlaybackHeartbeatInterval3 = self._stopPlaybackHeartbeatInterval;
      pm.on("viewend", _stopPlaybackHeartbeatInterval3.bind(self));
      const _stopPlaybackHeartbeatInterval4 = self._stopPlaybackHeartbeatInterval;
      pm.on("error", _stopPlaybackHeartbeatInterval4.bind(self));
      const _stopPlaybackHeartbeatInterval5 = self._stopPlaybackHeartbeatInterval;
      pm.on("aderror", _stopPlaybackHeartbeatInterval5.bind(self));
      const _stopPlaybackHeartbeatInterval6 = self._stopPlaybackHeartbeatInterval;
      pm.on("adpause", _stopPlaybackHeartbeatInterval6.bind(self));
      const _stopPlaybackHeartbeatInterval7 = self._stopPlaybackHeartbeatInterval;
      pm.on("adended", _stopPlaybackHeartbeatInterval7.bind(self));
      const _stopPlaybackHeartbeatInterval8 = self._stopPlaybackHeartbeatInterval;
      pm.on("adbreakend", _stopPlaybackHeartbeatInterval8.bind(self));
      pm.on("seeked", () => {
        if (closure_0.data.player_is_paused) {
          const result = self._stopPlaybackHeartbeatInterval();
        } else {
          const result1 = self._startPlaybackHeartbeatInterval();
        }
      });
      pm.on("timeupdate", () => {
        if (null !== self._playbackHeartbeatInterval) {
          closure_0.emit("playbackheartbeat");
        }
      });
      pm.on("devicesleep", (arg0, viewer_time) => {
        if (null !== self._playbackHeartbeatInterval) {
          const _default = closure_2_58.default;
          _default.clearInterval(self._playbackHeartbeatInterval);
          const obj = { viewer_time: viewer_time.viewer_time };
          closure_0.emit("playbackheartbeatend", obj);
          self._playbackHeartbeatInterval = null;
        }
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn3[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn3[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn3);
};
const entry1 = {
  key: "_startPlaybackHeartbeatInterval",
  value() {
    const self = this;
    if (null === this._playbackHeartbeatInterval) {
      let pm = self.pm;
      pm.emit("playbackheartbeat");
      const _default = closure_58.default;
      self._playbackHeartbeatInterval = _default.setInterval(() => {
        const pm = self.pm;
        pm.emit("playbackheartbeat");
      }, self.pm.playbackHeartbeatTime);
    }
  },
};
let items3 = [
  entry1,
  {
    key: "_stopPlaybackHeartbeatInterval",
    value() {
      const self = this;
      this._playheadShouldBeProgressing = false;
      if (null !== this._playbackHeartbeatInterval) {
        const _default = closure_58.default;
        _default.clearInterval(self._playbackHeartbeatInterval);
        const pm = self.pm;
        pm.emit("playbackheartbeatend");
        self._playbackHeartbeatInterval = null;
      }
    },
  },
];
N(fn3, items3);
let fn4 = function r(on) {
  let tmp2;
  let closure_0 = on;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn4[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn4[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("viewErrored" in self) {
        const _Object = Object;
        Object.defineProperty(self, "viewErrored", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.viewErrored = undefined;
      }
      on.on("viewinit", () => {
        self.viewErrored = false;
      });
      on.on("error", (arg0, player_error_code) => {
        try {
          const obj = {
            player_error_code: null,
            player_error_message: null,
            player_error_context: null,
            player_error_severity: null,
            player_error_business_exception: null,
          };
          ({
            player_error_code: obj.player_error_code,
            player_error_message: obj.player_error_message,
            player_error_context: obj.player_error_context,
            player_error_severity: obj.player_error_severity,
            player_error_business_exception: obj.player_error_business_exception,
          } = player_error_code);
          const errorTranslatorResult = closure_0.errorTranslator(obj);
          if (errorTranslatorResult) {
            player_error_code = tmp5.player_error_code;
            const data = closure_0.data;
            if (!player_error_code) {
              player_error_code = player_error_code.player_error_code;
            }
            data.player_error_code = player_error_code;
            let player_error_message = tmp5.player_error_message;
            const data2 = closure_0.data;
            if (!player_error_message) {
              player_error_message = player_error_code.player_error_message;
            }
            data2.player_error_message = player_error_message;
            let player_error_context = tmp5.player_error_context;
            const data3 = closure_0.data;
            if (!player_error_context) {
              player_error_context = player_error_code.player_error_context;
            }
            data3.player_error_context = player_error_context;
            let player_error_severity = tmp5.player_error_severity;
            const data4 = closure_0.data;
            if (!player_error_severity) {
              player_error_severity = player_error_code.player_error_severity;
            }
            data4.player_error_severity = player_error_severity;
            let player_error_business_exception = errorTranslatorResult.player_error_business_exception;
            const data5 = closure_0.data;
            if (!player_error_business_exception) {
              player_error_business_exception = player_error_code.player_error_business_exception;
            }
            data5.player_error_business_exception = player_error_business_exception;
            self.viewErrored = true;
          }
        } catch (tmp16) {
          const log = closure_0.mux.log;
          log.warn("Exception in error translator callback.", tmp16);
          self.viewErrored = true;
        }
      });
      on.on("aftererror", () => {
        const data = closure_0.data;
        const tmp2 = null === data || undefined === data;
        if (!tmp2) {
          delete data["player_error_code"];
        }
        const data2 = closure_0.data;
        const tmp3 = null === data2 || undefined === data2;
        if (!tmp3) {
          delete data2["player_error_message"];
        }
        const data3 = closure_0.data;
        const tmp4 = null === data3 || undefined === data3;
        if (!tmp4) {
          delete data3["player_error_context"];
        }
        const data4 = closure_0.data;
        const tmp5 = null === data4 || undefined === data4;
        if (!tmp5) {
          delete data4["player_error_severity"];
        }
        const data5 = closure_0.data;
        const tmp6 = null === data5 || undefined === data5;
        if (!tmp6) {
          delete data5["player_error_business_exception"];
        }
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      let tmp4 = typeError;
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn4[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn4[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn4);
};
let fn5 = function r(pm) {
  let tmp2;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn5[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn5[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_watchTimeTrackerLastCheckedTime" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_watchTimeTrackerLastCheckedTime", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._watchTimeTrackerLastCheckedTime = undefined;
      }
      if ("pm" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "pm", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      self._watchTimeTrackerLastCheckedTime = null;
      const _updateWatchTime = self._updateWatchTime;
      pm.on("playbackheartbeat", _updateWatchTime.bind(self));
      const _clearWatchTimeState = self._clearWatchTimeState;
      pm.on("playbackheartbeatend", _clearWatchTimeState.bind(self));
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn5[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn5[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn5);
};
const entry2 = {
  key: "_updateWatchTime",
  value(arg0, viewer_time) {
    const self = this;
    viewer_time = viewer_time.viewer_time;
    if (null === this._watchTimeTrackerLastCheckedTime) {
      self._watchTimeTrackerLastCheckedTime = viewer_time;
    }
    const data = self.pm.data;
    let num = data.view_watch_time;
    const diff = viewer_time - self._watchTimeTrackerLastCheckedTime;
    if (!num) {
      num = 0;
    }
    data.view_watch_time = data.view_watch_time + diff;
    self._watchTimeTrackerLastCheckedTime = viewer_time;
  },
};
let items4 = [
  entry2,
  {
    key: "_clearWatchTimeState",
    value(arg0, arg1) {
      this._updateWatchTime(arg0, arg1);
      this._watchTimeTrackerLastCheckedTime = null;
    },
  },
];
N(fn5, items4);
let fn6 = function r(pm) {
  let tmp2;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn6[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn6[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_playbackTimeTrackerLastPlayheadPosition" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_playbackTimeTrackerLastPlayheadPosition", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._playbackTimeTrackerLastPlayheadPosition = undefined;
      }
      if ("_lastTime" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_lastTime", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._lastTime = undefined;
      }
      if ("_isAdPlaying" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_isAdPlaying", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._isAdPlaying = undefined;
      }
      if ("_callbackUpdatePlaybackTime" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_callbackUpdatePlaybackTime", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._callbackUpdatePlaybackTime = undefined;
      }
      if ("pm" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "pm", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      self._playbackTimeTrackerLastPlayheadPosition = -1;
      self._lastTime = obj6.now();
      self._isAdPlaying = false;
      self._callbackUpdatePlaybackTime = null;
      pm.on("viewinit", () => {
        self.pm.data.view_playing_time_ms_cumulative = 0;
      });
      const _startPlaybackTimeTracking = self._startPlaybackTimeTracking;
      const bindResult = _startPlaybackTimeTracking.bind(self);
      pm.on("playing", bindResult);
      pm.on("adplaying", bindResult);
      pm.on("seeked", bindResult);
      pm.on("rebufferend", bindResult);
      const _stopPlaybackTimeTracking = self._stopPlaybackTimeTracking;
      const bindResult1 = _stopPlaybackTimeTracking.bind(self);
      pm.on("playbackheartbeatend", bindResult1);
      pm.on("seeking", bindResult1);
      pm.on("rebufferstart", bindResult1);
      pm.on("adplaying", () => {
        self._isAdPlaying = true;
      });
      pm.on("adended", () => {
        self._isAdPlaying = false;
      });
      pm.on("adpause", () => {
        self._isAdPlaying = false;
      });
      pm.on("adbreakstart", () => {
        self._isAdPlaying = false;
      });
      pm.on("adbreakend", () => {
        self._isAdPlaying = false;
      });
      pm.on("adplay", () => {
        self._isAdPlaying = false;
      });
      pm.on("viewinit", () => {
        self._playbackTimeTrackerLastPlayheadPosition = -1;
        self._lastTime = closure_2_27.now();
        self._isAdPlaying = false;
        self._callbackUpdatePlaybackTime = null;
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn6[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn6[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn6);
};
const entry3 = {
  key: "_startPlaybackTimeTracking",
  value() {
    const self = this;
    if (null === this._callbackUpdatePlaybackTime) {
      const _updatePlaybackTime = self._updatePlaybackTime;
      self._callbackUpdatePlaybackTime = _updatePlaybackTime.bind(self);
      self._playbackTimeTrackerLastPlayheadPosition = self.pm.data.player_playhead_time;
      self._lastTime = obj6.now();
      const pm = self.pm;
      pm.on("playbackheartbeat", self._callbackUpdatePlaybackTime);
    }
  },
};
const items5 = [
  entry3,
  {
    key: "_stopPlaybackTimeTracking",
    value() {
      const self = this;
      if (this._callbackUpdatePlaybackTime) {
        self._updatePlaybackTime();
        const pm = self.pm;
        pm.off("playbackheartbeat", self._callbackUpdatePlaybackTime);
        self._callbackUpdatePlaybackTime = null;
        self._playbackTimeTrackerLastPlayheadPosition = -1;
      }
    },
  },
  {
    key: "_updatePlaybackTime",
    value() {
      let num;
      const self = this;
      const nowResult = obj6.now();
      const diff = nowResult - self._lastTime;
      if (self._playbackTimeTrackerLastPlayheadPosition >= 0) {
        if ((this.pm.data.player_playhead_time || 0) > self._playbackTimeTrackerLastPlayheadPosition) {
          num = tmp - self._playbackTimeTrackerLastPlayheadPosition;
        }
        const tmp4 = num > 0 && num <= 1000;
        if (tmp4) {
          const data = self.pm.data;
          data.view_content_playback_time = data.view_content_playback_time || 0;
          data.view_content_playback_time = data.view_content_playback_time + num;
        }
        const tmp6 = null !== self._callbackUpdatePlaybackTime && diff > 0 && diff <= 1000;
        if (tmp6) {
          if (self._isAdPlaying) {
            const data2 = self.pm.data;
            data2.ad_playing_time_ms_cumulative = data2.ad_playing_time_ms_cumulative || 0;
            data2.ad_playing_time_ms_cumulative = data2.ad_playing_time_ms_cumulative + diff;
          }
          const data3 = self.pm.data;
          data3.view_playing_time_ms_cumulative = data3.view_playing_time_ms_cumulative || 0;
          data3.view_playing_time_ms_cumulative = data3.view_playing_time_ms_cumulative + diff;
        }
        self._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time || 0;
        self._lastTime = nowResult;
      }
      num = -1;
      if (self._isAdPlaying) {
        num = diff;
      }
    },
  },
];
N(fn6, items5);
let fn7 = function r(pm) {
  let tmp2;
  const self = this;
  let closure_0 = pm;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn7[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn7[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("pm" in self) {
        const _Object = Object;
        Object.defineProperty(self, "pm", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      const _updatePlayheadTime = self._updatePlayheadTime;
      const bindResult = _updatePlayheadTime.bind(self);
      pm.on("playbackheartbeat", bindResult);
      pm.on("playbackheartbeatend", bindResult);
      pm.on("timeupdate", bindResult);
      pm.on("destroy", () => {
        closure_0.off("timeupdate", bindResult);
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn7[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn7[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn7);
};
const entry4 = {
  key: "_updateMaxPlayheadPosition",
  value() {
    let player_playhead_time;
    const self = this;
    const data = this.pm.data;
    if (undefined === this.pm.data.view_max_playhead_position) {
      player_playhead_time = self.pm.data.player_playhead_time;
    } else {
      const _Math = Math;
      player_playhead_time = Math.max(self.pm.data.view_max_playhead_position, self.pm.data.player_playhead_time);
    }
    data.view_max_playhead_position = player_playhead_time;
  },
};
const items6 = [
  entry4,
  {
    key: "_updatePlayheadTime",
    value(arg0, player_playhead_time) {
      const self = this;
      const tmp = player_playhead_time;
      if (tmp) {
        if (player_playhead_time.player_playhead_time) {
          self.pm.data.player_playhead_time = player_playhead_time.player_playhead_time;
          const tmp5 = self.pm.currentFragmentPDT && self.pm.currentFragmentStart;
          if (tmp5) {
            self.pm.data.player_program_time =
              self.pm.currentFragmentPDT + self.pm.data.player_playhead_time - self.pm.currentFragmentStart;
          }
          const result = self._updateMaxPlayheadPosition();
        }
      }
      if (self.pm.getPlayheadTime) {
        const pm = self.pm;
        const playheadTime = pm.getPlayheadTime();
        if (undefined !== playheadTime) {
          self.pm.data.player_playhead_time = playheadTime;
          const tmp3 = self.pm.currentFragmentPDT && self.pm.currentFragmentStart;
          if (tmp3) {
            self.pm.data.player_program_time =
              self.pm.currentFragmentPDT + self.pm.data.player_playhead_time - self.pm.currentFragmentStart;
          }
          const result1 = self._updateMaxPlayheadPosition();
        }
      }
    },
  },
];
N(fn7, items6);
let c64 = 300000;
let fn8 = function r(disableRebufferTracking) {
  let tmp2;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn8[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn8[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if (!disableRebufferTracking.disableRebufferTracking) {
        function i(arg0, arg1) {
          a(arg1);
          c1 = undefined;
        }
        function a(viewer_time) {
          const tmp = viewer_time;
          if (tmp) {
            const data = disableRebufferTracking.data;
            let num = data.view_rebuffer_duration;
            const diff = viewer_time.viewer_time - viewer_time;
            if (!num) {
              num = 0;
            }
            data.view_rebuffer_duration = num;
            data.view_rebuffer_duration = data.view_rebuffer_duration + diff;
            viewer_time = viewer_time.viewer_time;
            if (disableRebufferTracking.data.view_rebuffer_duration > c64) {
              disableRebufferTracking.emit("viewend");
              disableRebufferTracking.send("viewend");
              const log = disableRebufferTracking.mux.log;
              const concat = "Ending view after rebuffering for longer than ".concat;
              log.warn(
                "Ending view after rebuffering for longer than ".concat(
                  tmp5,
                  "ms, future events will be ignored unless a programchange or videochange occurs.",
                ),
              );
            }
          }
          const tmp10 =
            disableRebufferTracking.data.view_watch_time >= 0 && disableRebufferTracking.data.view_rebuffer_count > 0;
          if (tmp10) {
            disableRebufferTracking.data.view_rebuffer_frequency =
              disableRebufferTracking.data.view_rebuffer_count / disableRebufferTracking.data.view_watch_time;
            disableRebufferTracking.data.view_rebuffer_percentage =
              disableRebufferTracking.data.view_rebuffer_duration / disableRebufferTracking.data.view_watch_time;
          }
        }
        disableRebufferTracking.on("playbackheartbeat", (arg0, arg1) => {
          a(arg1);
        });
        disableRebufferTracking.on("rebufferstart", (arg0, viewer_time) => {
          const tmp = viewer_time;
          if (!tmp) {
            const data = disableRebufferTracking.data;
            const tmp2 = data.view_rebuffer_count || 0;
            data.view_rebuffer_count = tmp2;
            data.view_rebuffer_count = data.view_rebuffer_count + 1;
            viewer_time = viewer_time.viewer_time;
            disableRebufferTracking.one("rebufferend", i);
          }
        });
        disableRebufferTracking.on("viewinit", () => {
          c1 = undefined;
          disableRebufferTracking.off("rebufferend", i);
        });
      }
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn8[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn8[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn8);
};
const fn9 = function r(pm) {
  let tmp2;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn9[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn9[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_lastCheckedTime" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_lastCheckedTime", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._lastCheckedTime = undefined;
      }
      if ("_lastPlayheadTime" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_lastPlayheadTime", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._lastPlayheadTime = undefined;
      }
      if ("_lastPlayheadTimeUpdatedTime" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_lastPlayheadTimeUpdatedTime", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._lastPlayheadTimeUpdatedTime = undefined;
      }
      if ("_rebuffering" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_rebuffering", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._rebuffering = undefined;
      }
      if ("pm" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "pm", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      const tmp11 = !pm.disableRebufferTracking && !pm.disablePlayheadRebufferTracking;
      if (tmp11) {
        self._lastCheckedTime = null;
        self._lastPlayheadTime = null;
        self._lastPlayheadTimeUpdatedTime = null;
        const _checkIfRebuffering = self._checkIfRebuffering;
        pm.on("playbackheartbeat", _checkIfRebuffering.bind(self));
        const _cleanupRebufferTracker = self._cleanupRebufferTracker;
        pm.on("playbackheartbeatend", _cleanupRebufferTracker.bind(self));
        pm.on("seeking", () => {
          const obj = { viewer_time: closure_2_27.now() };
          const result = self._cleanupRebufferTracker(null, obj);
        });
      }
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn9[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn9[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn9);
};
const entry5 = {
  key: "_checkIfRebuffering",
  value(arg0, viewer_time) {
    const self = this;
    if (!this.pm.seekingTracker.isSeeking) {
      if (!self.pm.adTracker.isAdBreak) {
        if (self.pm.playbackHeartbeat._playheadShouldBeProgressing) {
          if (null !== self._lastCheckedTime) {
            if (self._lastPlayheadTime === self.pm.data.player_playhead_time) {
              const sustainedRebufferThreshold = self.pm.sustainedRebufferThreshold;
              let tmp5 = typeof sustainedRebufferThreshold === "number";
              if (typeof sustainedRebufferThreshold === "number") {
                tmp5 = tmp4 >= self.pm.sustainedRebufferThreshold;
              }
              if (tmp5) {
                if (!self._rebuffering) {
                  self._rebuffering = true;
                  const pm = self.pm;
                  const obj = { viewer_time: self._lastPlayheadTimeUpdatedTime };
                  pm.emit("rebufferstart", obj);
                }
              }
              self._lastCheckedTime = viewer_time.viewer_time;
            } else {
              const result = self._cleanupRebufferTracker(arg0, viewer_time, true);
            }
          } else {
            const result1 = self._prepareRebufferTrackerState(viewer_time.viewer_time);
          }
        }
      }
    }
    const result2 = self._cleanupRebufferTracker(arg0, viewer_time);
  },
};
const items7 = [
  entry5,
  {
    key: "_clearRebufferTrackerState",
    value() {},
  },
  {
    key: "_prepareRebufferTrackerState",
    value(_lastCheckedTime) {
      this._lastCheckedTime = _lastCheckedTime;
      this._lastPlayheadTime = this.pm.data.player_playhead_time;
      this._lastPlayheadTimeUpdatedTime = _lastCheckedTime;
    },
  },
  {
    key: "_cleanupRebufferTracker",
    value(arg0, viewer_time) {
      const self = this;
      const tmp = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
      if (this._rebuffering) {
        self._rebuffering = false;
        const pm3 = self.pm;
        const obj2 = { viewer_time: viewer_time.viewer_time };
        pm3.emit("rebufferend", obj2);
      } else if (null !== self._lastCheckedTime) {
        const diff = self.pm.data.player_playhead_time - self._lastPlayheadTime;
        const diff1 = viewer_time.viewer_time - self._lastPlayheadTimeUpdatedTime;
        const minimumRebufferDuration = self.pm.minimumRebufferDuration;
        let tmp3 = typeof minimumRebufferDuration === "number";
        if (typeof minimumRebufferDuration === "number") {
          tmp3 = diff > 0;
        }
        if (tmp3) {
          tmp3 = diff1 - diff > self.pm.minimumRebufferDuration;
        }
        if (tmp3) {
          self._lastCheckedTime = null;
          const pm = self.pm;
          const obj = { viewer_time: self._lastPlayheadTimeUpdatedTime };
          pm.emit("rebufferstart", obj);
          const pm2 = self.pm;
          const obj3 = { viewer_time: self._lastPlayheadTimeUpdatedTime + diff1 - diff };
          pm2.emit("rebufferend", obj3);
        }
      }
      if (tmp) {
        const result = self._prepareRebufferTrackerState(viewer_time.viewer_time);
      } else {
        const result1 = self._clearRebufferTrackerState();
      }
    },
  },
];
N(fn9, items7);
const fn10 = function r(pm) {
  let tmp2;
  let closure_0 = pm;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn10[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn10[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("pm" in self) {
        const _Object = Object;
        Object.defineProperty(self, "pm", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      pm.on("viewinit", () => {
        let view_id;
        const data = view_id.data;
        view_id = data.view_id;
        if (!data.view_program_changed) {
          fn = function n(type, viewer_time) {
            viewer_time = viewer_time.viewer_time;
            let tmp = "playing" === type.type && undefined === view_id.data.view_time_to_first_frame;
            if (!tmp) {
              let tmp3 = "adplaying" === type.type;
              if (tmp3) {
                tmp3 = undefined === view_id.data.view_time_to_first_frame || self._inPrerollPosition();
                const _inPrerollPositionResult =
                  undefined === view_id.data.view_time_to_first_frame || self._inPrerollPosition();
              }
              tmp = tmp3;
            }
            if (tmp) {
              const calculateTimeToFirstFrame = self.calculateTimeToFirstFrame;
              if (!viewer_time) {
                viewer_time = closure_3_27.now();
              }
              const result = calculateTimeToFirstFrame(viewer_time, view_id);
            }
          };
          view_id.one("playing", fn);
          view_id.one("adplaying", fn);
          view_id.one("viewend", () => {
            view_id.off("playing", fn);
            view_id.off("adplaying", fn);
          });
        }
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const str = "Cannot call a class as a function";
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn10[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn10[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn10);
};
const entry6 = {
  key: "_inPrerollPosition",
  value() {
    return undefined === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1000;
  },
};
const items8 = [
  entry6,
  {
    key: "calculateTimeToFirstFrame",
    value(viewer_time, arg1) {
      const self = this;
      if (arg1 === this.pm.data.view_id) {
        const watchTimeTracker = self.pm.watchTimeTracker;
        const obj = { viewer_time };
        watchTimeTracker._updateWatchTime(null, obj);
        self.pm.data.view_time_to_first_frame = self.pm.data.view_watch_time;
        const tmp = (self.pm.data.player_autoplay_on || self.pm.data.video_is_autoplay) && self.pm.pageLoadInitTime;
        if (tmp) {
          self.pm.data.view_aggregate_startup_time =
            self.pm.data.view_start + self.pm.data.view_watch_time - self.pm.pageLoadInitTime;
        }
      }
    },
  },
];
N(fn10, items8);
const fn11 = function r(on) {
  let tmp2;
  let closure_0 = on;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn11[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn11[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_lastPlayerHeight" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_lastPlayerHeight", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._lastPlayerHeight = undefined;
      }
      if ("_lastPlayerWidth" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_lastPlayerWidth", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._lastPlayerWidth = undefined;
      }
      if ("_lastPlayheadPosition" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_lastPlayheadPosition", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._lastPlayheadPosition = undefined;
      }
      if ("_lastSourceHeight" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_lastSourceHeight", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._lastSourceHeight = undefined;
      }
      if ("_lastSourceWidth" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "_lastSourceWidth", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._lastSourceWidth = undefined;
      }
      on.on("viewinit", () => {
        self._lastPlayheadPosition = -1;
      });
      items = [
        "pause",
        "rebufferstart",
        "seeking",
        "error",
        "adbreakstart",
        "hb",
        "renditionchange",
        "orientationchange",
        "viewend",
        "playbackmodechange",
      ];
      const item = items.forEach((item) => {
        let data;
        data.on(item, () => {
          if (self._lastPlayheadPosition >= 0) {
            if (data.data.player_playhead_time >= 0) {
              if (self._lastPlayerWidth >= 0) {
                if (self._lastSourceWidth > 0) {
                  if (self._lastPlayerHeight >= 0) {
                    if (self._lastSourceHeight > 0) {
                      const diff = tmp4.data.player_playhead_time - self._lastPlayheadPosition;
                      if (diff < 0) {
                        self._lastPlayheadPosition = -1;
                      } else {
                        const _Math2 = Math;
                        const bound = Math.min(
                          self._lastPlayerWidth / self._lastSourceWidth,
                          self._lastPlayerHeight / self._lastSourceHeight,
                        );
                        const _Math3 = Math;
                        const bound1 = Math.max(0, bound - 1);
                        const _Math4 = Math;
                        const bound2 = Math.max(0, 1 - bound);
                        let num = tmp4.data.view_max_upscale_percentage;
                        const data5 = tmp4.data;
                        const _Math5 = Math;
                        const max2 = Math.max;
                        if (!num) {
                          num = 0;
                        }
                        data5.view_max_upscale_percentage = max2(num, bound1);
                        let num2 = tmp4.data.view_max_downscale_percentage;
                        data = tmp4.data;
                        const _Math = Math;
                        if (!num2) {
                          num2 = 0;
                        }
                        data.view_max_downscale_percentage = max(num2, bound2);
                        const data2 = tmp4.data;
                        data2.view_total_content_playback_time = data2.view_total_content_playback_time || 0;
                        data2.view_total_content_playback_time = data2.view_total_content_playback_time + diff;
                        const data3 = tmp4.data;
                        let num3 = data3.view_total_upscaling;
                        const result = bound1 * diff;
                        if (!num3) {
                          num3 = 0;
                        }
                        data3.view_total_upscaling = num3;
                        data3.view_total_upscaling = data3.view_total_upscaling + result;
                        const data4 = tmp4.data;
                        let num4 = data4.view_total_downscaling;
                        const result1 = bound2 * diff;
                        if (!num4) {
                          num4 = 0;
                        }
                        data4.view_total_downscaling = num4;
                        data4.view_total_downscaling = data4.view_total_downscaling + result1;
                      }
                    }
                  }
                }
              }
            }
          }
          self._lastPlayheadPosition = -1;
        });
      });
      const items1 = ["playing", "hb", "renditionchange", "orientationchange", "playbackmodechange"];
      const item1 = items1.forEach((item) => {
        closure_0.on(item, () => {
          self._lastPlayheadPosition = closure_1_0.data.player_playhead_time;
          self._lastPlayerWidth = closure_1_0.data.player_width;
          self._lastPlayerHeight = closure_1_0.data.player_height;
          self._lastSourceWidth = closure_1_0.data.video_source_width;
          self._lastSourceHeight = closure_1_0.data.video_source_height;
        });
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      const tmp4 = typeError;
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn11[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn11[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn11);
};
const fn12 = function r(on) {
  let tmp2;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn12[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn12[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("isSeeking" in self) {
        const _Object = Object;
        Object.defineProperty(self, "isSeeking", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.isSeeking = undefined;
      }
      self.isSeeking = false;
      let num = -1;
      let c2 = -1;
      function a() {}
      on.on("seeking", (arg0, viewer_time) => {
        const merged = Object.assign(on.data, viewer_time);
        if (self.isSeeking) {
          if (viewer_time.viewer_time - viewer_time <= 2000) {
            viewer_time = viewer_time.viewer_time;
          }
        }
        if (self.isSeeking) {
          if (typeof a === "function") {
            const nowResult = obj6.now();
            const diff = (on.data.viewer_time || nowResult) - (viewer_time || nowResult);
            const data = on.data;
            data.view_seek_duration = data.view_seek_duration || 0;
            data.view_seek_duration = data.view_seek_duration + diff;
            let num2 = on.data.view_max_seek_time;
            const data2 = on.data;
            const _Math = Math;
            if (!num2) {
              num2 = 0;
            }
            data2.view_max_seek_time = max(num2, diff);
            self.isSeeking = false;
            viewer_time = -1;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        self.isSeeking = true;
        viewer_time = viewer_time.viewer_time;
        const data3 = on.data;
        data3.view_seek_count = data3.view_seek_count || 0;
        data3.view_seek_count = data3.view_seek_count + 1;
        on.send("seeking");
      });
      on.on("seeked", () => {
        if (typeof a === "function") {
          const nowResult = obj6.now();
          const diff = (on.data.viewer_time || nowResult) - (c2 || nowResult);
          const data = on.data;
          data.view_seek_duration = data.view_seek_duration || 0;
          data.view_seek_duration = data.view_seek_duration + diff;
          let num = on.data.view_max_seek_time;
          const data2 = on.data;
          const _Math = Math;
          if (!num) {
            num = 0;
          }
          data2.view_max_seek_time = max(num, diff);
          self.isSeeking = false;
          c2 = -1;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      on.on("viewend", () => {
        if (self.isSeeking) {
          if (typeof a === "function") {
            const nowResult = obj6.now();
            const diff = (on.data.viewer_time || nowResult) - (c2 || nowResult);
            const data = on.data;
            data.view_seek_duration = data.view_seek_duration || 0;
            data.view_seek_duration = data.view_seek_duration + diff;
            let num = on.data.view_max_seek_time;
            const data2 = on.data;
            const _Math = Math;
            if (!num) {
              num = 0;
            }
            data2.view_max_seek_time = max(num, diff);
            self.isSeeking = false;
            c2 = -1;
            on.send("seeked");
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        self.isSeeking = false;
        c2 = -1;
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn12[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn12[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn12);
};
function Xt(arg0, arg1) {}
let closure_71 = [
  "adbreakstart",
  "adrequest",
  "adresponse",
  "adplay",
  "adplaying",
  "adpause",
  "adended",
  "adbreakend",
  "aderror",
  "adclicked",
  "adskipped",
];
const fn13 = function r(pm) {
  let tmp2;
  const f119125 = (viewer_time, viewer_time2) => viewer_time.viewer_time - viewer_time2.viewer_time;
  let closure_0 = pm;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn13[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn13[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_adHasPlayed" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_adHasPlayed", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._adHasPlayed = undefined;
      }
      if ("_adRequests" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_adRequests", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._adRequests = undefined;
      }
      if ("_adResponses" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_adResponses", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._adResponses = undefined;
      }
      if ("_currentAdRequestNumber" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_currentAdRequestNumber", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._currentAdRequestNumber = undefined;
      }
      if ("_currentAdResponseNumber" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "_currentAdResponseNumber", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._currentAdResponseNumber = undefined;
      }
      if ("_prerollPlayTime" in self) {
        const _Object6 = Object;
        Object.defineProperty(self, "_prerollPlayTime", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._prerollPlayTime = undefined;
      }
      if ("_wouldBeNewAdPlay" in self) {
        const _Object7 = Object;
        Object.defineProperty(self, "_wouldBeNewAdPlay", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._wouldBeNewAdPlay = undefined;
      }
      if ("isAdBreak" in self) {
        const _Object8 = Object;
        Object.defineProperty(self, "isAdBreak", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.isAdBreak = undefined;
      }
      if ("pm" in self) {
        const _Object9 = Object;
        Object.defineProperty(self, "pm", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      pm.on("viewinit", () => {
        self.isAdBreak = false;
        self._currentAdRequestNumber = 0;
        self._currentAdResponseNumber = 0;
        self._adRequests = [];
        self._adResponses = [];
        self._adHasPlayed = false;
        self._wouldBeNewAdPlay = true;
        self._prerollPlayTime = undefined;
      });
      const item = closure_71.forEach((item) => {
        const _updateAdData = self._updateAdData;
        return closure_0.on(item, _updateAdData.bind(self));
      });
      fn = function i() {
        self.isAdBreak = false;
      };
      pm.on("adbreakstart", () => {
        self.isAdBreak = true;
      });
      pm.on("play", fn);
      pm.on("playing", fn);
      pm.on("viewend", fn);
      pm.on("adrequest", (arg0, arg1) => {
        self._currentAdRequestNumber = +self._currentAdRequestNumber + 1;
        ({ ad_request_id: null }).ad_request_id = `generatedAdRequestId${+self._currentAdRequestNumber}`;
        const _adRequests = self._adRequests;
        if (typeof closure_2_70 === "function") {
          _adRequests.push(tmp2);
          const sorted = _adRequests.sort(f119125);
          const data = closure_0.data;
          data.view_ad_request_count = data.view_ad_request_count || 0;
          data.view_ad_request_count = data.view_ad_request_count + 1;
          if (self.inPrerollPosition()) {
            closure_0.data.view_preroll_requested = true;
            if (!self._adHasPlayed) {
              const data2 = closure_0.data;
              data2.view_preroll_request_count = data2.view_preroll_request_count || 0;
              data2.view_preroll_request_count = data2.view_preroll_request_count + 1;
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      pm.on("adresponse", (arg0, arg1) => {
        const obj = { ad_request_id: `generatedAdRequestId${+self._currentAdResponseNumber}` };
        self._currentAdResponseNumber = +self._currentAdResponseNumber + 1;
        const merged = Object.assign(obj, arg1);
        const _adResponses = self._adResponses;
        if (typeof closure_2_70 === "function") {
          _adResponses.push(merged);
          const sorted = _adResponses.sort(f119125);
          const findAdRequestResult = self.findAdRequest(merged.ad_request_id);
          if (findAdRequestResult) {
            const data = closure_0.data;
            const _Math = Math;
            const bound = Math.max(0, merged.viewer_time - findAdRequestResult.viewer_time);
            let num2 = 1;
            if (undefined !== bound) {
              num2 = bound;
            }
            data.view_ad_request_time = data.view_ad_request_time || 0;
            data.view_ad_request_time = data.view_ad_request_time + num2;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      pm.on("adplay", (arg0, viewer_time) => {
        self._adHasPlayed = true;
        if (self._wouldBeNewAdPlay) {
          self._wouldBeNewAdPlay = false;
          const data = closure_0.data;
          data.view_ad_played_count = data.view_ad_played_count || 0;
          data.view_ad_played_count = data.view_ad_played_count + 1;
        }
        const inPrerollPositionResult = self.inPrerollPosition() && !closure_0.data.view_preroll_played;
        if (inPrerollPositionResult) {
          closure_0.data.view_preroll_played = true;
          if (self._adRequests.length > 0) {
            const _Math = Math;
            closure_0.data.view_preroll_request_time = Math.max(
              0,
              viewer_time.viewer_time - self._adRequests[0].viewer_time,
            );
          }
          if (closure_0.data.view_start) {
            const _Math2 = Math;
            closure_0.data.view_startup_preroll_request_time = Math.max(
              0,
              viewer_time.viewer_time - closure_0.data.view_start,
            );
          }
          self._prerollPlayTime = viewer_time.viewer_time;
        }
      });
      pm.on("adplaying", (arg0, viewer_time) => {
        const inPrerollPositionResult =
          self.inPrerollPosition() &&
          undefined === closure_0.data.view_preroll_load_time &&
          undefined !== self._prerollPlayTime;
        if (inPrerollPositionResult) {
          closure_0.data.view_preroll_load_time = viewer_time.viewer_time - self._prerollPlayTime;
          closure_0.data.view_startup_preroll_load_time = viewer_time.viewer_time - self._prerollPlayTime;
        }
      });
      pm.on("adclicked", (arg0, arg1) => {
        if (!self._wouldBeNewAdPlay) {
          const data = closure_0.data;
          data.view_ad_clicked_count = data.view_ad_clicked_count || 0;
          data.view_ad_clicked_count = data.view_ad_clicked_count + 1;
        }
      });
      pm.on("adskipped", (arg0, arg1) => {
        if (!self._wouldBeNewAdPlay) {
          const data = closure_0.data;
          data.view_ad_skipped_count = data.view_ad_skipped_count || 0;
          data.view_ad_skipped_count = data.view_ad_skipped_count + 1;
        }
      });
      pm.on("adended", () => {
        self._wouldBeNewAdPlay = true;
      });
      pm.on("aderror", () => {
        self._wouldBeNewAdPlay = true;
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn13[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn13[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn13);
};
const entry7 = {
  key: "inPrerollPosition",
  value() {
    return undefined === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1000;
  },
};
const items9 = [
  entry7,
  {
    key: "findAdRequest",
    value(arg0) {
      const self = this;
      let num = 0;
      if (0 < this._adRequests.length) {
        while (self._adRequests[num].ad_request_id !== arg0) {
          num = num + 1;
        }
        return self._adRequests[num];
      }
    },
  },
  {
    key: "_updateAdData",
    value(arg0, ad_tag_url) {
      const self = this;
      if (this.inPrerollPosition()) {
        if (!self.pm.data.view_preroll_ad_tag_hostname) {
          if (ad_tag_url.ad_tag_url) {
            if (typeof re === "function") {
              if (typeof ad_tag_url.ad_tag_url === "string") {
                if ("" !== ad_tag_url.ad_tag_url) {
                  const str2 = (ad_tag_url.ad_tag_url.match(
                    /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                  ) || [])[4];
                  let first;
                  if (str2) {
                    first = (str2.match(/[^\.]+\.[^\.]+$/) || [])[0];
                    str2.match(/[^\.]+\.[^\.]+$/) || [];
                  }
                  items = [str2, first];
                }
                const _Array = Array;
                let tmp7;
                if (Array.isArray(items)) {
                  tmp7 = items;
                }
                if (!tmp7) {
                  tmp7 = vt(items, 2);
                }
                if (!tmp7) {
                  tmp7 = Pe(items, 2);
                }
                if (tmp7) {
                  [self.pm.data.view_preroll_ad_tag_hostname, self.pm.data.view_preroll_ad_tag_domain] = tmp7;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                  throw typeError;
                }
              }
              items = ["localhost"];
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        if (!self.pm.data.view_preroll_ad_asset_hostname) {
          if (ad_tag_url.ad_asset_url) {
            if (typeof re === "function") {
              if (typeof ad_tag_url.ad_asset_url === "string") {
                let items1;
                if ("" !== ad_tag_url.ad_asset_url) {
                  const str5 = (ad_tag_url.ad_asset_url.match(
                    /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                  ) || [])[4];
                  let first1;
                  if (str5) {
                    first1 = (str5.match(/[^\.]+\.[^\.]+$/) || [])[0];
                    str5.match(/[^\.]+\.[^\.]+$/) || [];
                  }
                  items1 = [str5, first1];
                }
                const _Array2 = Array;
                let tmp17;
                if (Array.isArray(items1)) {
                  tmp17 = items1;
                }
                if (!tmp17) {
                  tmp17 = vt(items1, 2);
                }
                if (!tmp17) {
                  tmp17 = Pe(items1, 2);
                }
                if (tmp17) {
                  [self.pm.data.view_preroll_ad_asset_hostname, self.pm.data.view_preroll_ad_asset_domain] = tmp17;
                } else {
                  const _TypeError2 = TypeError;
                  const self4 = this;
                  const self5 = this;
                  const typeError1 = new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                  throw typeError1;
                }
              }
              items1 = ["localhost"];
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        self.pm.data.ad_type = "preroll";
      }
      let ad_asset_url;
      const data = self.pm.data;
      if (null != ad_tag_url) {
        ad_asset_url = ad_tag_url.ad_asset_url;
      }
      data.ad_asset_url = ad_asset_url;
      ad_tag_url = undefined;
      const data2 = self.pm.data;
      if (null != ad_tag_url) {
        ad_tag_url = ad_tag_url.ad_tag_url;
      }
      data2.ad_tag_url = ad_tag_url;
      let ad_creative_id;
      const data3 = self.pm.data;
      if (null != ad_tag_url) {
        ad_creative_id = ad_tag_url.ad_creative_id;
      }
      data3.ad_creative_id = ad_creative_id;
      let ad_id;
      const data4 = self.pm.data;
      if (null != ad_tag_url) {
        ad_id = ad_tag_url.ad_id;
      }
      data4.ad_id = ad_id;
      let ad_universal_id;
      const data5 = self.pm.data;
      if (null != ad_tag_url) {
        ad_universal_id = ad_tag_url.ad_universal_id;
      }
      data5.ad_universal_id = ad_universal_id;
      const tmp26 = null != ad_tag_url && ad_tag_url.ad_type;
      if (tmp26) {
        let ad_type;
        const data6 = self.pm.data;
        if (null != ad_tag_url) {
          ad_type = ad_tag_url.ad_type;
        }
        data6.ad_type = ad_type;
      }
    },
  },
];
N(fn13, items9);
const fn14 = function r(one) {
  let tmp2;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn14[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn14[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("lastWallClockTime" in self) {
        let _Object = Object;
        Object.defineProperty(self, "lastWallClockTime", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self.lastWallClockTime = undefined;
      }
      fn = function i() {
        self.lastWallClockTime = obj6.now();
        one.on("before*", a);
      };
      function a(arg0) {
        const nowResult = obj6.now();
        const lastWallClockTime = self.lastWallClockTime;
        self.lastWallClockTime = nowResult;
        if (nowResult - lastWallClockTime > 30000) {
          const obj = { viewer_time: lastWallClockTime };
          one.emit("devicesleep", obj);
          const _Object = Object;
          const obj2 = { viewer_time: lastWallClockTime };
          const merged = Object.assign(one.data, obj2);
          one.send("devicesleep");
          const obj3 = { viewer_time: nowResult };
          one.emit("devicewake", obj3);
          const _Object2 = Object;
          const obj4 = { viewer_time: nowResult };
          const merged1 = Object.assign(one.data, obj4);
          one.send("devicewake");
        }
      }
      one.one("playbackheartbeat", fn);
      one.on("playbackheartbeatend", () => {
        one.off("before*", a);
        one.one("playbackheartbeat", fn);
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn14[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn14[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn14);
};
let closure_74 = G(obj5.exports);
const fn15 = function e(arg0) {
  let closure_0 = arg0;
  const withConverter = function i(arg0, arg1, arg2) {
    let tmp2 = arg1;
    if (typeof document !== "undefined") {
      if (arguments.length > 1) {
        let writeResult;
        const tmp26 = r({ path: "/" }, fn.defaults, arg2);
        if (typeof tmp26.expires === "number") {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const date = new Date();
          date.setMilliseconds(date.getMilliseconds() + 86400000 * tmp26.expires);
          tmp26.expires = date;
        }
        try {
          const _JSON2 = JSON;
          const json = JSON.stringify(tmp2);
          const obj4 = /^[\{\[]/;
          if (obj4.test(json)) {
            tmp2 = json;
          }
        } catch (err) {}
        if (closure_0.write) {
          writeResult = closure_0.write(tmp2, arg0);
        } else {
          const _encodeURIComponent = encodeURIComponent;
          const _String = String;
          const _decodeURIComponent3 = decodeURIComponent;
          const str8 = encodeURIComponent(String(tmp2));
          writeResult = str8.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        }
        const _encodeURIComponent2 = encodeURIComponent;
        const _String2 = String;
        const _decodeURIComponent4 = decodeURIComponent;
        const _escape = escape;
        items = [, , , , , ,];
        const str9 = encodeURIComponent(String(arg0));
        const str10 = str9.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        items[0] = str10.replace(/[\(\)]/g, escape);
        items[1] = "=";
        items[2] = writeResult;
        let str13 = "";
        const _document3 = document;
        if (tmp26.expires) {
          const expires = tmp26.expires;
          str13 = `; expires=${expires.toUTCString()}`;
        }
        items[3] = str13;
        let str15 = "";
        if (tmp26.path) {
          str15 = `; path=${tmp26.path}`;
        }
        items[4] = str15;
        let str17 = "";
        if (tmp26.domain) {
          str17 = `; domain=${tmp26.domain}`;
        }
        items[5] = str17;
        let str19 = "";
        if (tmp26.secure) {
          str19 = "; secure";
        }
        items[6] = str19;
        const joined = items.join("");
        _document3.cookie = joined;
        return joined;
      } else {
        let obj;
        let parts;
        if (!arg0) {
          obj = {};
        }
        const _document = document;
        if (document.cookie) {
          const _document2 = document;
          const str = document.cookie;
          parts = str.split("; ");
        } else {
          parts = [];
        }
        const tmp4 = /(%[0-9A-Z]{2})+/g;
        let num4 = 0;
        if (0 < parts.length) {
          const str5 = parts[num4];
          const parts1 = str5.split("=");
          const substr = parts1.slice(1);
          const str6 = substr.join("=");
          let substr1 = str6;
          if ('"' === str6.charAt(0)) {
            substr1 = substr1.slice(1, -1);
          }
          try {
            let readResult;
            const _decodeURIComponent = decodeURIComponent;
            const str7 = parts1[0];
            const replaced = str7.replace(tmp4, decodeURIComponent);
            if (closure_0.read) {
              readResult = closure_0.read(substr1, replaced);
            } else {
              readResult = closure_0(substr1, replaced);
              if (!readResult) {
                const _decodeURIComponent2 = decodeURIComponent;
                readResult = substr1.replace(tmp4, decodeURIComponent);
              }
            }
            let parsed = readResult;
            if (tmp.json) {
              try {
                const _JSON = JSON;
                parsed = JSON.parse(parsed);
              } catch (err) {}
            }
            if (arg0 === replaced) {
              obj = parsed;
            } else {
              if (!arg0) {
                obj[replaced] = parsed;
              }
              num4 = num4 + 1;
            }
          } catch (err) {}
        }
        return obj;
      }
    }
  };
  withConverter.set = withConverter;
  withConverter.get = get;
  withConverter.getJSON = getJSON;
  withConverter.defaults = {};
  withConverter.remove = remove;
  withConverter.withConverter = withConverter;
  return withConverter;
};
function r() {
  let num;
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
}
const f119135 = () => {};
const fn16 = function i(arg0, arg1, arg2) {
  let tmp2 = arg1;
  if (typeof document !== "undefined") {
    if (arguments.length > 1) {
      let writeResult;
      const tmp26 = r({ path: "/" }, fn.defaults, arg2);
      if (typeof tmp26.expires === "number") {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date();
        date.setMilliseconds(date.getMilliseconds() + 86400000 * tmp26.expires);
        tmp26.expires = date;
      }
      try {
        const _JSON2 = JSON;
        const json = JSON.stringify(tmp2);
        const obj4 = /^[\{\[]/;
        if (obj4.test(json)) {
          tmp2 = json;
        }
      } catch (err) {}
      if (closure_0.write) {
        writeResult = closure_0.write(tmp2, arg0);
      } else {
        const _encodeURIComponent = encodeURIComponent;
        const _String = String;
        const _decodeURIComponent3 = decodeURIComponent;
        const str8 = encodeURIComponent(String(tmp2));
        writeResult = str8.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
      }
      const _encodeURIComponent2 = encodeURIComponent;
      const _String2 = String;
      const _decodeURIComponent4 = decodeURIComponent;
      const _escape = escape;
      items = [, , , , , ,];
      const str9 = encodeURIComponent(String(arg0));
      const str10 = str9.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
      items[0] = str10.replace(/[\(\)]/g, escape);
      items[1] = "=";
      items[2] = writeResult;
      let str13 = "";
      const _document3 = document;
      if (tmp26.expires) {
        const expires = tmp26.expires;
        str13 = `; expires=${expires.toUTCString()}`;
      }
      items[3] = str13;
      let str15 = "";
      if (tmp26.path) {
        str15 = `; path=${tmp26.path}`;
      }
      items[4] = str15;
      let str17 = "";
      if (tmp26.domain) {
        str17 = `; domain=${tmp26.domain}`;
      }
      items[5] = str17;
      let str19 = "";
      if (tmp26.secure) {
        str19 = "; secure";
      }
      items[6] = str19;
      const joined = items.join("");
      _document3.cookie = joined;
      return joined;
    } else {
      let obj;
      let parts;
      if (!arg0) {
        obj = {};
      }
      const _document = document;
      if (document.cookie) {
        const _document2 = document;
        const str = document.cookie;
        parts = str.split("; ");
      } else {
        parts = [];
      }
      const tmp4 = /(%[0-9A-Z]{2})+/g;
      let num4 = 0;
      if (0 < parts.length) {
        const str5 = parts[num4];
        const parts1 = str5.split("=");
        const substr = parts1.slice(1);
        const str6 = substr.join("=");
        let substr1 = str6;
        if ('"' === str6.charAt(0)) {
          substr1 = substr1.slice(1, -1);
        }
        try {
          let readResult;
          const _decodeURIComponent = decodeURIComponent;
          const str7 = parts1[0];
          const replaced = str7.replace(tmp4, decodeURIComponent);
          if (closure_0.read) {
            readResult = closure_0.read(substr1, replaced);
          } else {
            readResult = closure_0(substr1, replaced);
            if (!readResult) {
              const _decodeURIComponent2 = decodeURIComponent;
              readResult = substr1.replace(tmp4, decodeURIComponent);
            }
          }
          let parsed = readResult;
          if (tmp.json) {
            try {
              const _JSON = JSON;
              parsed = JSON.parse(parsed);
            } catch (err) {}
          }
          if (arg0 === replaced) {
            obj = parsed;
          } else {
            if (!arg0) {
              obj[replaced] = parsed;
            }
            num4 = num4 + 1;
          }
        } catch (err) {}
      }
      return obj;
    }
  }
};
fn16.set = fn16;
fn16.get = get;
fn16.getJSON = getJSON;
fn16.defaults = {};
fn16.remove = remove;
fn16.withConverter = fn15;
const muxData = "muxData";
function tr() {
  let obj;
  try {
    const str = fn16.get(muxData) || "";
    obj = ((str) => {
      let parts = str.split("&");
      return parts.reduce(function (acc, item) {
        const parts = item.split("=");
        let tmp2;
        if (Array.isArray(parts)) {
          tmp2 = parts;
        }
        if (!tmp2) {
          tmp2 = vt(parts, 2);
        }
        if (!tmp2) {
          tmp2 = closure_1_23(parts, 2);
        }
        if (tmp2) {
          let tmp9 = tmp7;
          const first = tmp2[0];
          if (tmp2[1]) {
            tmp9 = tmp7;
            if (+tmp2[1] == tmp2[1]) {
              tmp9 = tmp8;
            }
          }
          acc[first] = tmp9;
          return acc;
        } else {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
          throw typeError;
        }
      }, {});
    })(str);
  } catch (err) {
    obj = {};
  }
  return obj;
}
function rr(arg0) {
  try {
    let tmp = arg0;
    const result = fn16.set(
      muxData,
      ((arg0) => {
        const entries = Object.entries(arg0);
        const mapped = entries.map(function (item) {
          let tmp;
          if (Array.isArray(item)) {
            tmp = item;
          }
          if (!tmp) {
            tmp = vt(item, 2);
          }
          if (!tmp) {
            tmp = closure_1_23(item, 2);
          }
          if (tmp) {
            const concat = "".concat;
            const tmp5 = tmp[1];
            const combined = "".concat(tmp[0], "=");
            return combined.concat(tmp5);
          } else {
            const _TypeError = TypeError;
            const self = this;
            const self2 = this;
            const typeError = new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
            throw typeError;
          }
        });
        return mapped.join("&");
      })(arg0),
      { expires: 365 },
    );
  } catch (err) {}
}
let closure_79 = G(obj5.exports);
function or() {
  if (typeof sr === "function") {
    const _navigator = closure_79.default.navigator;
    let tmp2 = _navigator;
    if (tmp2) {
      tmp2 = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
    }
    let str = "cellular";
    if ("cellular" !== (tmp2 && tmp2.type)) {
      str = "wired";
      if ("ethernet" !== (tmp2 && tmp2.type)) {
        str = "wifi";
        if ("wifi" !== (tmp2 && tmp2.type)) {
          if (undefined !== (tmp2 && tmp2.type)) {
            str = "other";
          }
        }
      }
    }
    return str;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function sr() {
  const _navigator = closure_79.default.navigator;
  let tmp = _navigator;
  if (tmp) {
    tmp = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
  }
  return tmp && tmp.type;
}
or.getConnectionFromAPI = sr;
const point = {
  a: "env",
  b: "beacon",
  c: "custom",
  d: "ad",
  e: "event",
  f: "experiment",
  i: "internal",
  m: "mux",
  n: "response",
  p: "player",
  q: "request",
  r: "retry",
  s: "session",
  t: "timestamp",
  u: "viewer",
  v: "video",
  w: "page",
  x: "view",
  y: "sub",
};
let obj7 = {};
for (const key10232 in point) {
  if (!point.hasOwnProperty(key10232)) {
    continue;
  } else {
    obj7[point[key10232]] = key10232;
    continue;
  }
  continue;
}
let obj8 = {
  ad: "ad",
  af: "affiliate",
  ag: "aggregate",
  ap: "api",
  al: "application",
  ao: "audio",
  ar: "architecture",
  as: "asset",
  au: "autoplay",
  av: "average",
  bi: "bitrate",
  bn: "brand",
  br: "break",
  bw: "browser",
  by: "bytes",
  bz: "business",
  ca: "cached",
  cb: "cancel",
  cc: "codec",
  cd: "code",
  cg: "category",
  ch: "changed",
  ci: "client",
  ck: "clicked",
  cl: "canceled",
  cm: "cmcd",
  cn: "config",
  co: "count",
  ce: "counter",
  cp: "complete",
  cq: "creator",
  cr: "creative",
  cs: "captions",
  ct: "content",
  cu: "current",
  cv: "cumulative",
  cx: "connection",
  cz: "context",
  da: "data",
  dg: "downscaling",
  dm: "domain",
  dn: "cdn",
  do: "downscale",
  dr: "drm",
  dp: "dropped",
  du: "duration",
  dv: "device",
  dy: "dynamic",
  eb: "enabled",
  ec: "encoding",
  ed: "edge",
  en: "end",
  eg: "engine",
  em: "embed",
  er: "error",
  ep: "experiments",
  es: "errorcode",
  et: "errortext",
  ee: "event",
  ev: "events",
  ex: "expires",
  ez: "exception",
  fa: "failed",
  fi: "first",
  fm: "family",
  ft: "format",
  fp: "fps",
  fq: "frequency",
  fr: "frame",
  fs: "fullscreen",
  ha: "has",
  hb: "holdback",
  he: "headers",
  ho: "host",
  hn: "hostname",
  ht: "height",
  id: "id",
  ii: "init",
  in: "instance",
  ip: "ip",
  is: "is",
  ke: "key",
  la: "language",
  lb: "labeled",
  le: "level",
  li: "live",
  ld: "loaded",
  lo: "load",
  ls: "lists",
  lt: "latency",
  ma: "max",
  md: "media",
  me: "message",
  mf: "manifest",
  mi: "mime",
  ml: "midroll",
  mm: "min",
  mn: "manufacturer",
  mo: "model",
  mp: "mode",
  ms: "ms",
  mx: "mux",
  ne: "newest",
  nm: "name",
  no: "number",
  on: "on",
  or: "origin",
  os: "os",
  pa: "paused",
  pb: "playback",
  pd: "producer",
  pe: "percentage",
  pf: "played",
  pg: "program",
  ph: "playhead",
  pi: "plugin",
  pl: "preroll",
  pn: "playing",
  po: "poster",
  pp: "pip",
  pr: "preload",
  ps: "position",
  pt: "part",
  pv: "previous",
  py: "property",
  px: "pop",
  pz: "plan",
  ra: "rate",
  rd: "requested",
  re: "rebuffer",
  rf: "rendition",
  rg: "range",
  rm: "remote",
  ro: "ratio",
  rp: "response",
  rq: "request",
  rs: "requests",
  sa: "sample",
  sd: "skipped",
  se: "session",
  sh: "shift",
  sk: "seek",
  sm: "stream",
  so: "source",
  sq: "sequence",
  sr: "series",
  ss: "status",
  st: "start",
  su: "startup",
  sv: "server",
  sw: "software",
  sy: "severity",
  ta: "tag",
  tc: "tech",
  te: "text",
  tg: "target",
  th: "throughput",
  ti: "time",
  tl: "total",
  to: "to",
  tt: "title",
  ty: "type",
  ug: "upscaling",
  un: "universal",
  up: "upscale",
  ur: "url",
  us: "user",
  va: "variant",
  vd: "viewed",
  vi: "video",
  ve: "version",
  vw: "view",
  vr: "viewer",
  wd: "width",
  wa: "watch",
  wt: "waiting",
};
let obj9 = {};
for (const key10238 in obj8) {
  if (!obj8.hasOwnProperty(key10238)) {
    continue;
  } else {
    obj9[obj8[key10238]] = key10238;
    continue;
  }
  continue;
}
const fn17 = (arg0, arg1) => {
  let obj;
  let tmp = global;
  if (undefined === global) {
    const _window = window;
    tmp = typeof window !== "undefined" ? window : {};
  }
  if (typeof f119021 === "function") {
    let _document1;
    const tmp3 = obj;
    if (!tmp3) {
      obj = { exports: {} };
      closure_150_0(obj.exports, obj);
    }
    const _exports = obj.exports;
    const _document = document;
    if (typeof document !== "undefined") {
      _document1 = document;
    } else {
      _document1 = tmp["__GLOBAL_DOCUMENT_CACHE@4"];
      if (!_document1) {
        tmp["__GLOBAL_DOCUMENT_CACHE@4"] = _exports;
        _document1 = _exports;
      }
    }
    arg1.exports = _document1;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_84 = G(obj5.exports);
let obj10 = { exports: {} };
fn17(0, obj10);
let closure_85 = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 10000, maxPayloadKBSize: 500 };
let closure_86 = ["hb", "requestcompleted", "requestfailed", "requestcanceled"];
class $ {
  constructor(arg0) {
    const obj = {};
    if (arguments.length > 1) {
      obj._beaconUrl = arg0 || "https://img.litix.io";
      obj._eventQueue = [];
      obj._postInFlight = false;
      obj._resendAfterPost = false;
      obj._failureCount = 0;
      obj._sendTimeout = false;
      const _Object = Object;
      obj._options = Object.assign({}, closure_85, {});
    }
  }
  queueEvent(arg0, arg1) {
    const self = this;
    let tmp2 = this._eventQueue.length <= this._options.maxQueueLength;
    const merged = Object.assign({}, arg1);
    if (!tmp2) {
      tmp2 = "eventrateexceeded" === arg0;
    }
    if (tmp2) {
      const _eventQueue = self._eventQueue;
      _eventQueue.push(merged);
      if (!self._sendTimeout) {
        self._startBeaconSending();
      }
      tmp2 = self._eventQueue.length <= self._options.maxQueueLength;
    }
    return tmp2;
  }
  flushEvents() {
    const self = this;
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        if (arguments[0]) {
          if (1 === self._eventQueue.length) {
            const _eventQueue = self._eventQueue;
            _eventQueue.pop();
          }
        }
      }
    }
    if (self._eventQueue.length) {
      self._sendBeaconQueue();
    }
    self._startBeaconSending();
  }
  destroy() {
    const self = this;
    const tmp = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
    this.destroyed = true;
    if (tmp) {
      self._clearBeaconQueue();
    } else {
      self.flushEvents();
    }
    const _default = closure_84.default;
    _default.clearTimeout(self._sendTimeout);
  }
  _clearBeaconQueue() {
    const self = this;
    let num = 0;
    if (this._eventQueue.length > this._options.maxBeaconSize) {
      num = self._eventQueue.length - self._options.maxBeaconSize;
    }
    const _eventQueue = self._eventQueue;
    const substr = _eventQueue.slice(num);
    if (num > 0) {
      const _Object = Object;
      const _Object2 = Object;
      const obj = { mux_view_message: "event queue truncated" };
      const obj2 = {};
      const obj3 = {};
      const tmp2 = substr[substr.length - 1];
      const keys = Object.keys(obj);
      const item = keys.forEach((item) => {
        let closure_0 = item;
        let c1 = false;
        if (obj3.hasOwnProperty(item)) {
          if (undefined !== obj3[item]) {
            const parts = item.split("_");
            const first = parts[0];
            let closure_2 = tmp12;
            if (!obj7[first]) {
              logger.info(`Data key word \`${arr2[0]}\` not expected in ${item}`);
              closure_2 = `${tmp10}_`;
            }
            const spliceResult = parts.splice(1);
            item = spliceResult.forEach((item) => {
              if ("url" === item) {
                c1 = true;
              }
              if (closure_2_83[item]) {
                closure_2 = closure_2 + tmp[item];
              } else {
                const _Number = Number;
                const _Number2 = Number;
                if (Number.isInteger(Number(item))) {
                  closure_2 = closure_2 + item;
                } else {
                  logger.info(`Data key word \`${item}\` not expected in ${closure_0}`);
                  closure_2 = `${closure_2}_${item}_`;
                }
              }
            });
            const tmp5 = c1;
            if (tmp5) {
              obj14[closure_2] = obj3[item];
            } else {
              obj8[closure_2] = obj3[item];
            }
          }
        }
      });
      const _Object3 = Object;
      assign(tmp2, Object.assign(obj2, obj3));
    }
    Mr(self._beaconUrl, self._createPayload(substr), true, () => {});
  }
  _sendBeaconQueue() {
    const self = this;
    if (this._postInFlight) {
      self._resendAfterPost = true;
    } else {
      const _eventQueue = self._eventQueue;
      const substr = _eventQueue.slice(0, self._options.maxBeaconSize);
      const _eventQueue1 = self._eventQueue;
      self._eventQueue = _eventQueue1.slice(self._options.maxBeaconSize);
      self._postInFlight = true;
      const _createPayloadResult = self._createPayload(substr);
      let closure_2 = obj6.now();
      Mr(self._beaconUrl, _createPayloadResult, false, (arg0, arg1) => {
        let obj;
        if (arg1) {
          self._eventQueue = substr.concat(self._eventQueue);
          self._failureCount = self._failureCount + 1;
          logger.info(`Error sending beacon: ${arg1}`);
          obj = self;
        } else {
          self._failureCount = 0;
          obj = self;
        }
        obj._roundTripTime = obj6.now() - closure_2;
        obj._postInFlight = false;
        if (obj._resendAfterPost) {
          obj._resendAfterPost = false;
          if (obj._eventQueue.length > 0) {
            obj._sendBeaconQueue();
          }
        }
      });
    }
  }
  _getNextBeaconTime() {
    const self = this;
    if (this._failureCount) {
      const _Math = Math;
      const _Math2 = Math;
      const powResult = Math.pow(2, self._failureCount - 1);
      return (1 + powResult * Math.random()) * self._options.baseTimeBetweenBeacons;
    } else {
      return self._options.baseTimeBetweenBeacons;
    }
  }
  _startBeaconSending() {
    const self = this;
    const _default = closure_84.default;
    _default.clearTimeout(this._sendTimeout);
    const tmp3 = !this.destroyed;
    if (tmp3) {
      const _default2 = closure_84.default;
      self._sendTimeout = _default2.setTimeout(() => {
        if (self._eventQueue.length) {
          self._sendBeaconQueue();
        }
        self._startBeaconSending();
      }, self._getNextBeaconTime());
    }
  }
  _createPayload(events) {
    let arr2;
    let tmp2;
    let tmp3;
    let tmp7;
    const self = this;
    const obj = { transmission_timestamp: Math.round(obj6.now()) };
    if (this._roundTripTime) {
      const _Math = Math;
      obj.rtt_ms = Math.round(self._roundTripTime);
    }
    const obj2 = { metadata: obj, events };
    let json = JSON.stringify(obj2);
    const result = json.length / 1024;
    let result1 = result;
    if (result > self._options.maxPayloadKBSize) {
      logger.info(`Payload size is too big (${tmp} kb). Removing unnecessary events.`);
      const found = events.filter((item) => -1 === closure_1_86.indexOf(item.e));
      const obj3 = { metadata: obj, events: tmp7 };
      tmp7 = found;
      const _JSON = JSON;
      if (!found) {
        tmp7 = events;
      }
      const json1 = stringify(obj3);
      result1 = json1.length / 1024;
      tmp3 = found;
      json = json1;
      arr2 = found;
    }
    if (result1 > self._options.maxPayloadKBSize) {
      logger.info(`Payload size still too big (${tmp2} kb). Cropping fields..`);
      const item = arr2.forEach((item) => {
        for (const key10005 in item) {
          let arr = item[key10005];
          let tmp2 = typeof arr === "string" && arr.length > 51200;
          if (!tmp2) {
            continue;
          } else {
            item[key10005] = arr.substring(0, 51200);
            continue;
          }
          continue;
        }
      });
      const _JSON2 = JSON;
      const stringify2 = JSON.stringify;
      const obj4 = { metadata: obj, events: tmp3 };
      if (!tmp3) {
        tmp3 = events;
      }
      const stringify2Result = stringify2(obj4);
      const result2 = stringify2Result.length / 1024;
      json = stringify2Result;
    }
    return json;
  }
}
let closure_87 =
  typeof G(obj10.exports).default.exitPictureInPicture === "function"
    ? (arg0) => arg0.length <= 57344
    : (arg0) => false;
function Mr(_beaconUrl, _createPayloadResult, arg2, fn) {
  let closure_0 = fn;
  const tmp = arg2;
  if (tmp) {
    let tmp2 = globalThis;
    if (navigator) {
      const _navigator = navigator;
      if (navigator.sendBeacon) {
        const _navigator2 = navigator;
        if (navigator.sendBeacon(_beaconUrl, _createPayloadResult)) {
          fn();
        }
      }
    }
  }
  if (closure_84.default.fetch) {
    const request = {
      method: "POST",
      body: _createPayloadResult,
      headers: { "Content-Type": "text/plain" },
      keepalive: closure_87(_createPayloadResult),
    };
    const _fetch = _default.fetch;
    const _fetchResult = _fetch(_beaconUrl, request);
    const nextPromise = _fetchResult.then((ok) => {
      let tmp2 = "Error";
      if (ok.ok) {
        tmp2 = null;
      }
      return closure_0(null, tmp2);
    });
    nextPromise.catch((error) => closure_0(null, error));
  } else if (closure_84.default.XMLHttpRequest) {
    const self = this;
    const self2 = this;
    const xMLHttpRequest = new tmp3.default.XMLHttpRequest();
    xMLHttpRequest.onreadystatechange = () => {
      if (4 === xMLHttpRequest.readyState) {
        let str;
        if (200 !== tmp.status) {
          str = "error";
        }
        return closure_0(null, str);
      }
    };
    let str = "POST";
    xMLHttpRequest.open("POST", _beaconUrl);
    xMLHttpRequest.setRequestHeader("Content-Type", "text/plain");
    xMLHttpRequest.send(_createPayloadResult);
  } else {
    fn();
  }
}
let closure_90 = [
  "env_key",
  "view_id",
  "view_sequence_number",
  "player_sequence_number",
  "beacon_domain",
  "player_playhead_time",
  "viewer_time",
  "mux_api_version",
  "event",
  "video_id",
  "player_instance_id",
  "player_error_code",
  "player_error_message",
  "player_error_context",
  "player_error_severity",
  "player_error_business_exception",
  "view_playing_time_ms_cumulative",
  "ad_playing_time_ms_cumulative",
];
let closure_91 = [
  "adplay",
  "adplaying",
  "adpause",
  "adfirstquartile",
  "admidpoint",
  "adthirdquartile",
  "adended",
  "adresponse",
  "adrequest",
];
let closure_92 = ["ad_id", "ad_creative_id", "ad_universal_id"];
let closure_93 = ["viewstart", "error", "ended", "viewend"];
const fn18 = function r(mux, envKey) {
  let architecture;
  let beaconCollectionDomain;
  let beaconDomain;
  let family;
  let layout;
  let manufacturer;
  let name;
  let options;
  let product;
  let version;
  let version1;
  if (arguments.length > 2) {
    let tmp5;
    const self = this;
    const _Symbol = Symbol;
    if (typeof Symbol !== "undefined") {
      const _Symbol5 = Symbol;
      if (fn18[Symbol.hasInstance]) {
        const _Symbol4 = Symbol;
        tmp5 = fn18[Symbol.hasInstance](self);
      }
      if (tmp5) {
        let str14;
        if ("mux" in self) {
          const _Object = Object;
          Object.defineProperty(self, "mux", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.mux = undefined;
        }
        if ("envKey" in self) {
          const _Object2 = Object;
          Object.defineProperty(self, "envKey", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.envKey = undefined;
        }
        if ("options" in self) {
          const _Object3 = Object;
          Object.defineProperty(self, "options", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.options = undefined;
        }
        if ("eventQueue" in self) {
          const _Object4 = Object;
          Object.defineProperty(self, "eventQueue", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.eventQueue = undefined;
        }
        if ("sampleRate" in self) {
          const _Object5 = Object;
          Object.defineProperty(self, "sampleRate", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.sampleRate = undefined;
        }
        if ("disableCookies" in self) {
          const _Object6 = Object;
          Object.defineProperty(self, "disableCookies", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.disableCookies = undefined;
        }
        if ("respectDoNotTrack" in self) {
          const _Object7 = Object;
          Object.defineProperty(self, "respectDoNotTrack", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.respectDoNotTrack = undefined;
        }
        if ("previousBeaconData" in self) {
          const _Object8 = Object;
          Object.defineProperty(self, "previousBeaconData", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.previousBeaconData = undefined;
        }
        if ("lastEventTime" in self) {
          const _Object9 = Object;
          Object.defineProperty(self, "lastEventTime", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.lastEventTime = undefined;
        }
        if ("rateLimited" in self) {
          const _Object10 = Object;
          Object.defineProperty(self, "rateLimited", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.rateLimited = undefined;
        }
        if ("pageLevelData" in self) {
          const _Object11 = Object;
          Object.defineProperty(self, "pageLevelData", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.pageLevelData = undefined;
        }
        if ("viewerData" in self) {
          const _Object12 = Object;
          Object.defineProperty(self, "viewerData", {
            value: "p",
            enumerable: "flag_ky",
            configurable: "flag_cf",
            writable: "flag_cn",
          });
        } else {
          self.viewerData = undefined;
        }
        self.mux = mux;
        self.envKey = envKey;
        self.options = {};
        self.previousBeaconData = null;
        self.lastEventTime = 0;
        self.rateLimited = false;
        ({ envKey, options } = self);
        ({ beaconCollectionDomain, beaconDomain } = options);
        if (beaconCollectionDomain) {
          str14 = `https://${beaconCollectionDomain}`;
        } else {
          if (!beaconDomain) {
            beaconDomain = "litix.io";
          }
          if (!envKey) {
            envKey = "inferred";
          }
          str14 = "https://img.litix.io/a.gif";
          if (envKey.match(/^[a-z0-9]+$/)) {
            str14 = `https://${envKey}.${beaconDomain}`;
          }
        }
        const self4 = this;
        const self5 = this;
        new $(str14);
        self.eventQueue = this;
        const sampleRate = self.options.sampleRate;
        let num4 = 1;
        if (null !== sampleRate) {
          num4 = 1;
          if (undefined !== sampleRate) {
            num4 = sampleRate;
          }
        }
        self.sampleRate = num4;
        const disableCookies = self.options.disableCookies;
        self.disableCookies = null !== disableCookies && undefined !== disableCookies && disableCookies;
        const respectDoNotTrack = self.options.respectDoNotTrack;
        self.respectDoNotTrack = null !== respectDoNotTrack && undefined !== respectDoNotTrack && respectDoNotTrack;
        self.previousBeaconData = null;
        self.lastEventTime = 0;
        self.rateLimited = false;
        const obj = {
          mux_api_version: self.mux.API_VERSION,
          mux_embed: self.mux.NAME,
          mux_embed_version: self.mux.VERSION,
          viewer_application_name: name,
          viewer_application_version: version,
          viewer_application_engine: layout,
          viewer_device_name: product,
          viewer_device_category: "",
          viewer_device_manufacturer: manufacturer,
          viewer_os_family: family,
          viewer_os_architecture: architecture,
          viewer_os_version: version1,
          viewer_connection_type: null,
          page_url: null,
        };
        const platform = self.options.platform;
        name = undefined;
        if (null !== platform) {
          if (undefined !== platform) {
            name = platform.name;
          }
        }
        const platform2 = self.options.platform;
        version = undefined;
        if (null !== platform2) {
          if (undefined !== platform2) {
            version = platform2.version;
          }
        }
        const platform3 = self.options.platform;
        layout = undefined;
        if (null !== platform3) {
          if (undefined !== platform3) {
            layout = platform3.layout;
          }
        }
        const platform4 = self.options.platform;
        product = undefined;
        if (null !== platform4) {
          if (undefined !== platform4) {
            product = platform4.product;
          }
        }
        const platform5 = self.options.platform;
        manufacturer = undefined;
        if (null !== platform5) {
          if (undefined !== platform5) {
            manufacturer = platform5.manufacturer;
          }
        }
        const platform6 = self.options.platform;
        family = undefined;
        if (null !== platform6) {
          if (undefined !== platform6) {
            const os = platform6.os;
            if (null !== os) {
              if (undefined !== os) {
                family = os.family;
              }
            }
          }
        }
        const platform7 = self.options.platform;
        architecture = undefined;
        if (null !== platform7) {
          if (undefined !== platform7) {
            const os2 = platform7.os;
            if (null !== os2) {
              if (undefined !== os2) {
                architecture = os2.architecture;
              }
            }
          }
        }
        const platform8 = self.options.platform;
        version1 = undefined;
        if (null !== platform8) {
          if (undefined !== platform8) {
            const os3 = platform8.os;
            if (null !== os3) {
              if (undefined !== os3) {
                version1 = os3.version;
              }
            }
          }
        }
        if (typeof or === "function") {
          if (typeof sr === "function") {
            let obj3;
            const _navigator = closure_79.default.navigator;
            let tmp37 = _navigator;
            if (tmp37) {
              tmp37 = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
            }
            let str18 = "cellular";
            if ("cellular" !== (tmp37 && tmp37.type)) {
              str18 = "wired";
              if ("ethernet" !== (tmp37 && tmp37.type)) {
                str18 = "wifi";
                if ("wifi" !== (tmp37 && tmp37.type)) {
                  if (undefined !== (tmp37 && tmp37.type)) {
                    str18 = "other";
                  }
                }
              }
            }
            obj.viewer_connection_type = str18;
            let href;
            if (null !== closure_74.default) {
              if (undefined !== closure_74.default) {
                const _location = closure_74.default.location;
                if (null !== _location) {
                  if (undefined !== _location) {
                    href = _location.href;
                  }
                }
              }
            }
            obj.page_url = href;
            self.pageLevelData = obj;
            if (self.disableCookies) {
              obj3 = {};
            } else {
              const tmp43 = tr();
              const mux_viewer_id = tmp43.mux_viewer_id || ee();
              tmp43.mux_viewer_id = mux_viewer_id;
              let msn = tmp43.msn;
              if (!msn) {
                const _Math = Math;
                msn = Math.random();
              }
              tmp43.msn = msn;
              rr(tmp43);
              obj3 = { mux_viewer_id: null, mux_sample_number: null };
              ({ mux_viewer_id: obj2.mux_viewer_id, msn: obj2.mux_sample_number } = tmp43);
            }
            self.viewerData = obj3;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("Cannot call a class as a function");
        throw typeError;
      }
    }
    const _Symbol2 = Symbol;
    if (typeof Symbol !== "undefined") {
      const _Symbol6 = Symbol;
      if (fn18[Symbol.hasInstance]) {
        const _Symbol3 = Symbol;
        tmp5 = fn18[Symbol.hasInstance](self);
      }
    }
    tmp5 = U(self, fn18);
  }
};
const entry8 = {
  key: "send",
  value(event, view_id) {
    const tmp = event;
    if (tmp) {
      if (null != view_id) {
        if (view_id.view_id) {
          const self = this;
          if (this.respectDoNotTrack) {
            let doNotTrack = closure_39.default.doNotTrack;
            if (!doNotTrack) {
              let tmp5 = closure_39.default.navigator && closure_39.default.navigator.doNotTrack;
              doNotTrack = tmp5;
            }
            const str = "1";
            if ("1" === doNotTrack) {
              return logger.info("Not sending `" + event + "` because Do Not Track is enabled");
            }
          }
          if (view_id) {
            if (typeof view_id === "object") {
              let obj;
              if (self.disableCookies) {
                obj = {};
              } else {
                const tmp7 = tr();
                const nowResult = logger.now();
                if (tmp7.session_start) {
                  tmp7.sst = tmp7.session_start;
                  delete tmp7["session_start"];
                }
                if (tmp7.session_id) {
                  tmp7.sid = tmp7.session_id;
                  delete tmp7["session_id"];
                }
                if (tmp7.session_expires) {
                  tmp7.sex = tmp7.session_expires;
                  delete tmp7["session_expires"];
                }
                const sex = tmp7.sex;
                let tmp10 = !sex;
                if (sex) {
                  tmp10 = tmp7.sex < nowResult;
                }
                if (tmp10) {
                  tmp7.sid = ee();
                  tmp7.sst = nowResult;
                }
                tmp7.sex = nowResult + 1500000;
                rr(tmp7);
                obj = { session_id: null, session_start: null, session_expires: null };
                ({ sid: obj.session_id, sst: obj.session_start, sex: obj.session_expires } = tmp7);
              }
              const obj3 = {};
              ue(obj3, self.pageLevelData, view_id, obj, self.viewerData);
              const obj4 = { event, env_key: self.envKey };
              const _Object = Object;
              const _Object2 = Object;
              if (Object.getOwnPropertyDescriptors) {
                const _Object6 = Object;
                _Object2.defineProperties(obj3, Object.getOwnPropertyDescriptors(obj4));
              } else {
                const _Object2Result = _Object2(obj4);
                const _Object3 = Object;
                const keys = Object.keys(_Object2Result);
                const _Object4 = Object;
                if (Object.getOwnPropertySymbols) {
                  const _Object5 = Object;
                  const push = keys.push;
                  push.apply(keys, Object.getOwnPropertySymbols(_Object2Result));
                }
                let item = keys.forEach((item) => {
                  Object.defineProperty(obj7, item, Object.getOwnPropertyDescriptor(obj8, item));
                });
              }
              if (obj3.user_id) {
                obj3.viewer_user_id = obj3.user_id;
                delete obj2["user_id"];
              }
              const mux_sample_number = obj3.mux_sample_number;
              let num4 = 0;
              if (null !== mux_sample_number) {
                num4 = 0;
                if (undefined !== mux_sample_number) {
                  num4 = mux_sample_number;
                }
              }
              const tmp24 = num4 >= self.sampleRate;
              const result = self._deduplicateBeaconData(event, obj3);
              global = result;
              obj7 = {};
              const _Object7 = Object;
              const obj5 = {};
              const keys1 = Object.keys(result);
              const item1 = keys1.forEach((item) => {
                let closure_0 = item;
                let c1 = false;
                if (obj3.hasOwnProperty(item)) {
                  if (undefined !== obj3[item]) {
                    const parts = item.split("_");
                    const first = parts[0];
                    let closure_2 = tmp12;
                    if (!obj7[first]) {
                      logger.info(`Data key word \`${arr2[0]}\` not expected in ${item}`);
                      closure_2 = `${tmp10}_`;
                    }
                    const spliceResult = parts.splice(1);
                    item = spliceResult.forEach((item) => {
                      if ("url" === item) {
                        c1 = true;
                      }
                      if (closure_2_83[item]) {
                        closure_2 = closure_2 + tmp[item];
                      } else {
                        const _Number = Number;
                        const _Number2 = Number;
                        if (Number.isInteger(Number(item))) {
                          closure_2 = closure_2 + item;
                        } else {
                          logger.info(`Data key word \`${item}\` not expected in ${closure_0}`);
                          closure_2 = `${closure_2}_${item}_`;
                        }
                      }
                    });
                    const tmp5 = c1;
                    if (tmp5) {
                      obj14[closure_2] = obj3[item];
                    } else {
                      obj8[closure_2] = obj3[item];
                    }
                  }
                }
              });
              const _Object8 = Object;
              const merged = Object.assign(obj5, obj7);
              const utils = self.mux.utils;
              self.lastEventTime = utils.now();
              if (tmp24) {
                return logger.info("Not sending event due to sample rate restriction", event, obj3, merged);
              } else {
                if (!self.envKey) {
                  const str2 =
                    "Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL";
                  const infoResult = logger.info(
                    "Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",
                    event,
                    obj3,
                    merged,
                  );
                }
                if (!self.rateLimited) {
                  const str3 = "Sending event";
                  logger.info("Sending event", event, obj3, merged);
                  const eventQueue = self.eventQueue;
                  self.rateLimited = !eventQueue.queueEvent(event, merged);
                  if (self.mux.WINDOW_UNLOADING) {
                    if ("viewend" === event) {
                      const eventQueue5 = self.eventQueue;
                      eventQueue5.destroy(true);
                    }
                  }
                  if (self.mux.WINDOW_HIDDEN) {
                    if ("hb" === event) {
                      const eventQueue3 = self.eventQueue;
                      eventQueue3.flushEvents(true);
                    }
                    if (self.rateLimited) {
                      obj3.event = "eventrateexceeded";
                      const obj8 = {};
                      const obj14 = {};
                      const _Object9 = Object;
                      const keys2 = Object.keys(obj3);
                      const item2 = keys2.forEach((item) => {
                        let closure_0 = item;
                        let c1 = false;
                        if (obj3.hasOwnProperty(item)) {
                          if (undefined !== obj3[item]) {
                            const parts = item.split("_");
                            const first = parts[0];
                            let closure_2 = tmp12;
                            if (!obj7[first]) {
                              logger.info(`Data key word \`${arr2[0]}\` not expected in ${item}`);
                              closure_2 = `${tmp10}_`;
                            }
                            const spliceResult = parts.splice(1);
                            item = spliceResult.forEach((item) => {
                              if ("url" === item) {
                                c1 = true;
                              }
                              if (closure_2_83[item]) {
                                closure_2 = closure_2 + tmp[item];
                              } else {
                                const _Number = Number;
                                const _Number2 = Number;
                                if (Number.isInteger(Number(item))) {
                                  closure_2 = closure_2 + item;
                                } else {
                                  logger.info(`Data key word \`${item}\` not expected in ${closure_0}`);
                                  closure_2 = `${closure_2}_${item}_`;
                                }
                              }
                            });
                            const tmp5 = c1;
                            if (tmp5) {
                              obj14[closure_2] = obj3[item];
                            } else {
                              obj8[closure_2] = obj3[item];
                            }
                          }
                        }
                      });
                      const _Object10 = Object;
                      const eventQueue4 = self.eventQueue;
                      eventQueue4.queueEvent(obj3.event, Object.assign(obj8, obj14));
                      return logger.error("Beaconing disabled due to rate limit.");
                    }
                  }
                  if (closure_93.indexOf(event) >= 0) {
                    const eventQueue2 = self.eventQueue;
                    eventQueue2.flushEvents();
                  }
                }
              }
            }
          }
          return logger.error("A data object was expected in send() but was not provided");
        }
      }
    }
  },
};
const items10 = [
  entry8,
  {
    key: "destroy",
    value() {
      const eventQueue = this.eventQueue;
      eventQueue.destroy(false);
    },
  },
  {
    key: "_deduplicateBeaconData",
    value(arr, view_id) {
      let closure_0 = arr;
      let self = this;
      let obj = {};
      let obj2 = obj;
      view_id = view_id.view_id;
      if ("-1" !== view_id) {
        if ("viewstart" !== arr) {
          if ("viewend" !== arr) {
            if (self.previousBeaconData) {
              const utils = self.mux.utils;
              if (utils.now() - self.lastEventTime < 600000) {
                let closure_3 = 0 === arr.indexOf("request");
                let tmp = globalThis;
                const _Object = Object;
                const entries = Object.entries(view_id);
                const item = entries.forEach(function (item) {
                  let tmp5;
                  let tmp6;
                  let tmp;
                  if (Array.isArray(item)) {
                    tmp = item;
                  }
                  if (!tmp) {
                    tmp = vt(item, 2);
                  }
                  if (!tmp) {
                    tmp = Pe(item, 2);
                  }
                  if (tmp) {
                    [tmp5, tmp6] = tmp;
                    let previousBeaconData = self.previousBeaconData;
                    if (previousBeaconData) {
                      previousBeaconData =
                        tmp6 !== obj.previousBeaconData[tmp5] ||
                        closure_90.indexOf(tmp5) > -1 ||
                        obj.objectHasChanged(closure_3, tmp5, tmp6, obj.previousBeaconData[tmp5]) ||
                        obj.eventRequiresKey(arr, tmp5);
                      const eventRequiresKeyResult =
                        tmp6 !== obj.previousBeaconData[tmp5] ||
                        closure_90.indexOf(tmp5) > -1 ||
                        obj.objectHasChanged(closure_3, tmp5, tmp6, obj.previousBeaconData[tmp5]) ||
                        obj.eventRequiresKey(arr, tmp5);
                    }
                    if (previousBeaconData) {
                      obj2[tmp5] = tmp6;
                      self.previousBeaconData[tmp5] = tmp6;
                    }
                  } else {
                    const _TypeError = TypeError;
                    self = this;
                    const self2 = this;
                    const typeError = new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                    throw typeError;
                  }
                });
              }
              return obj;
            }
          }
        }
      }
      obj2 = {};
      ue(obj2, view_id);
      if (view_id) {
        self.previousBeaconData = obj2;
      }
      if (view_id) {
        view_id = "viewend" === arr;
      }
      obj = obj2;
      if (view_id) {
        self.previousBeaconData = null;
        obj = obj2;
      }
    },
  },
  {
    key: "objectHasChanged",
    value(arg0, arr, arg2, arg3) {
      let tmp = !arg0;
      if (arg0) {
        tmp = 0 !== arr.indexOf("request_");
      }
      let tmp2 = !tmp;
      if (tmp2) {
        let obj = arg2;
        let tmp3 = "request_response_headers" === arr || typeof obj !== "object";
        let obj2 = arg3;
        if (!tmp3) {
          tmp3 = typeof obj2 !== "object";
        }
        if (!tmp3) {
          const _Object = Object;
          if (!obj) {
            obj = {};
          }
          const _Object2 = Object;
          const keys2 = Object.keys;
          const length = keys(obj).length;
          if (!obj2) {
            obj2 = {};
          }
          tmp3 = length !== keys2(obj2).length;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    },
  },
  {
    key: "eventRequiresKey",
    value(arg0, arr) {
      let tmp = "renditionchange" === arg0 && 0 === arr.indexOf("video_source_");
      if (!tmp) {
        const hasItem = closure_92.includes(arr) && closure_91.includes(arg0);
        tmp = hasItem;
      }
      return tmp;
    },
  },
];
N(fn18, items10);
const fn19 = function r(on) {
  let tmp2;
  const self = this;
  let closure_0 = on;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn19[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn19[Symbol.hasInstance](self);
    }
    if (tmp2) {
      let num = 0;
      let closure_1 = 0;
      let closure_2 = 0;
      let closure_3 = 0;
      let closure_4 = 0;
      let closure_5 = 0;
      let closure_6 = 0;
      let closure_7 = 0;
      on.on("requestcompleted", (arg0, arg1) => {
        let diff1;
        let request_bytes_loaded;
        let request_response_end;
        let request_response_start;
        let request_start;
        ({ request_start, request_response_start, request_response_end, request_bytes_loaded } = arg1);
        view_request_count = view_request_count + 1;
        if (request_response_start) {
          let num3 = 0;
          if (null != request_start) {
            num3 = request_start;
          }
          let num4 = 0;
          const diff = request_response_start - num3;
          if (null != request_response_end) {
            num4 = request_response_end;
          }
          diff1 = num4 - request_response_start;
        } else {
          let num = 0;
          if (null != request_response_end) {
            num = request_response_end;
          }
          let num2 = 0;
          if (null != request_start) {
            num2 = request_start;
          }
          diff1 = num - num2;
        }
        if (diff1 > 0) {
          if (request_bytes_loaded) {
            if (request_bytes_loaded > 0) {
              closure_5 = closure_5 + 1;
              closure_2 = closure_2 + request_bytes_loaded;
              closure_3 = closure_3 + diff1;
              let num5 = closure_0.data.view_min_request_throughput;
              const result = (request_bytes_loaded / diff1) * 8000;
              const data2 = closure_0.data;
              const _Math2 = Math;
              if (!num5) {
                num5 = Infinity;
              }
              data2.view_min_request_throughput = min(num5, result);
              closure_0.data.view_average_request_throughput = (closure_2 / closure_3) * 8000;
              closure_0.data.view_request_count = view_request_count;
              if (tmp2 > 0) {
                closure_1 = closure_1 + tmp2;
                let num6 = closure_0.data.view_max_request_latency;
                const data = closure_0.data;
                const _Math = Math;
                if (!num6) {
                  num6 = 0;
                }
                data.view_max_request_latency = max(num6, tmp2);
                closure_0.data.view_average_request_latency = closure_1 / closure_5;
              }
            }
          }
        }
      });
      on.on("requestfailed", (arg0, arg1) => {
        view_request_count = view_request_count + 1;
        view_request_failed_count = view_request_failed_count + 1;
        closure_0.data.view_request_count = view_request_count;
        closure_0.data.view_request_failed_count = view_request_failed_count;
      });
      on.on("requestcanceled", (arg0, arg1) => {
        view_request_count = view_request_count + 1;
        view_request_canceled_count = view_request_canceled_count + 1;
        closure_0.data.view_request_count = view_request_count;
        closure_0.data.view_request_canceled_count = view_request_canceled_count;
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn19[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn19[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn19);
};
const fn20 = function r(on) {
  let tmp2;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn20[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn20[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_lastEventTime" in self) {
        let _Object = Object;
        Object.defineProperty(self, "_lastEventTime", {
          value: "p",
          enumerable: "flag_ky",
          configurable: "flag_cf",
          writable: "flag_cn",
        });
      } else {
        self._lastEventTime = undefined;
      }
      on.on("before*", (type, viewer_time) => {
        let data;
        viewer_time = viewer_time.viewer_time;
        const nowResult = obj6.now();
        const _lastEventTime = self._lastEventTime;
        self._lastEventTime = nowResult;
        if (_lastEventTime) {
          if (nowResult - _lastEventTime > 3600000) {
            let _Object = Object;
            const keys = Object.keys(on.data);
            const log = on.mux.log;
            const reduced = keys.reduce((acc, arr) => {
              let obj4 = acc;
              if (0 === arr.indexOf("video_")) {
                const obj = {};
                const _Object = Object;
                if (arr in obj) {
                  const _Object2 = Object;
                  const obj2 = { value: data.data[arr], enumerable: true, configurable: true, writable: true };
                  Object.defineProperty(obj, arr, obj2);
                } else {
                  obj[arr] = data.data[arr];
                }
                obj4 = assign(acc, obj);
              }
              return obj4;
            }, {});
            log.info("Received event after at least an hour inactivity, creating a new view");
            let _Object2 = Object;
            let obj2 = { viewer_time };
            const _playheadShouldBeProgressing2 = on.playbackHeartbeat._playheadShouldBeProgressing;
            on._resetView(Object.assign(obj2, reduced));
            on.playbackHeartbeat._playheadShouldBeProgressing = _playheadShouldBeProgressing2;
            const _playheadShouldBeProgressing =
              on.playbackHeartbeat._playheadShouldBeProgressing && "play" !== type.type && "adbreakstart" !== type.type;
            if (_playheadShouldBeProgressing) {
              let obj = { viewer_time };
              on.emit("play", obj);
              if ("playing" !== type.type) {
                let obj4 = { viewer_time };
                on.emit("playing", obj4);
              }
            }
          }
        }
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn20[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn20[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn20);
};
const fn21 = function r(on) {
  let tmp2;
  const self = this;
  let closure_0 = on;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn21[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn21[Symbol.hasInstance](self);
    }
    if (tmp2) {
      t = function t(arg0) {};
      let closure_2 = null;
      let video_cdn = null;
      let prop = null;
      let viewer_time = 0;
      on.on("viewinit", () => {
        closure_2 = null;
        video_cdn = null;
        prop = null;
        viewer_time = 0;
      });
      const str3 = "beforecdnchange";
      on.on("beforecdnchange", (arg0, video_cdn) => {
        video_cdn = undefined;
        if (null != video_cdn) {
          video_cdn = video_cdn.video_cdn;
        }
        let tmp2 = video_cdn;
        if (tmp2) {
          tmp2 = undefined === video_cdn.video_previous_cdn || null === video_cdn.video_previous_cdn;
        }
        if (tmp2) {
          let formatted;
          if (null != video_cdn) {
            formatted = video_cdn.toLowerCase();
          }
          let formatted1;
          if (null != video_cdn) {
            formatted1 = str.toLowerCase();
          }
          if (formatted === formatted1) {
            let tmp10;
            if (null != closure_2) {
              tmp10 = closure_2;
            }
            video_cdn.video_previous_cdn = tmp10;
          } else {
            let tmp7;
            if (null != video_cdn) {
              tmp7 = video_cdn;
            }
            video_cdn.video_previous_cdn = tmp7;
            closure_2 = video_cdn;
          }
        }
      });
      on.on("requestcompleted", (arg0, request_type) => {
        if (typeof t === "function") {
          if (null != request_type) {
            if (request_type.request_type) {
              if ("media" === request_type.request_type) {
                const request_response_headers = request_type.request_response_headers;
                if (null !== request_response_headers) {
                  if (undefined !== request_response_headers) {
                    if (request_response_headers["x-cdn"]) {
                      prop = request_type.request_response_headers["x-cdn"];
                    }
                    if (null != request_type) {
                      if (request_type.request_start) {
                        viewer_time = request_type.request_start;
                      }
                      if (null != prop) {
                        let formatted;
                        if (null != prop) {
                          formatted = prop.toLowerCase();
                        }
                        let formatted1;
                        if (null != prop) {
                          formatted1 = str3.toLowerCase();
                        }
                        if (formatted !== formatted1) {
                          if (viewer_time <= viewer_time) {
                            const obj = { video_cdn: prop };
                            closure_0.emit("cdnchange", obj);
                          }
                        }
                      }
                    }
                    if (null != request_type) {
                      if (request_type.viewer_time) {
                        viewer_time = request_type.viewer_time;
                      }
                    }
                    const _Date = Date;
                    viewer_time = Date.now();
                  }
                }
              }
            }
          }
          prop = null;
          if (null != request_type) {
            prop = null;
            if (request_type.video_cdn) {
              prop = request_type.video_cdn;
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const str = "Cannot call a class as a function";
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn21[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn21[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn21);
};
const fn22 = function r(on) {
  let tmp2;
  let closure_0 = on;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn22[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      tmp2 = fn22[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_emittingAutomaticEvent" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_emittingAutomaticEvent", {
          value: false,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        self._emittingAutomaticEvent = false;
      }
      if ("_hasInitialized" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_hasInitialized", {
          value: false,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        self._hasInitialized = false;
      }
      on.on("viewstart", () => {
        if (!self._hasInitialized) {
          self._hasInitialized = true;
          self._emittingAutomaticEvent = true;
          closure_0.emit("playbackmodechange", { player_playback_mode: "standard", player_playback_mode_data: "{}" });
          self._emittingAutomaticEvent = false;
        }
      });
      on.on("viewend", () => {
        self._hasInitialized = false;
      });
      on.on("playbackmodechange", (arg0, player_playback_mode_data) => {
        if (!self._emittingAutomaticEvent) {
          if (player_playback_mode_data.player_playback_mode_data) {
            if (
              !((player_playback_mode_data) => {
                try {
                  const _JSON = JSON;
                  const parsed = JSON.parse(player_playback_mode_data);
                  return true;
                } catch (err) {
                  return false;
                }
              })(player_playback_mode_data.player_playback_mode_data)
            ) {
              const log = closure_0.mux.log;
              log.warn("Invalid JSON string for player_playback_mode_data");
              player_playback_mode_data.player_playback_mode_data = "{}";
            }
          } else {
            player_playback_mode_data.player_playback_mode_data = "{}";
          }
          ({
            player_playback_mode_data: closure_0.data.player_playback_mode_data,
            player_playback_mode: closure_0.data.player_playback_mode,
          } = player_playback_mode_data);
        }
      });
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn22[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn22[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn22);
};
let closure_99 = [
  "viewstart",
  "ended",
  "loadstart",
  "pause",
  "play",
  "playing",
  "ratechange",
  "waiting",
  "adplay",
  "adpause",
  "adended",
  "aderror",
  "adplaying",
  "adrequest",
  "adresponse",
  "adbreakstart",
  "adbreakend",
  "adfirstquartile",
  "admidpoint",
  "adthirdquartile",
  "rebufferstart",
  "rebufferend",
  "seeked",
  "error",
  "hb",
  "requestcompleted",
  "requestfailed",
  "requestcanceled",
  "renditionchange",
  "cdnchange",
  "playbackmodechange",
];
const set = new Set(["requestcompleted", "requestfailed", "requestcanceled"]);
let f119013;
class t {
  constructor(mux, id, beaconDomain) {
    let tmp2;
    let self = this;
    const tmp = closure_1;
    if (typeof Symbol !== "undefined") {
      const _Symbol3 = Symbol;
      if (tmp[Symbol.hasInstance]) {
        const _Symbol2 = Symbol;
        tmp2 = tmp[Symbol.hasInstance](self);
      }
      if (tmp2) {
        const callResult = t.call(self);
        let tmp5 = undefined === callResult;
        if (tmp5) {
          const _ReferenceError47 = ReferenceError;
          const self113 = this;
          const self114 = this;
          const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
          throw referenceError;
        } else {
          if ("pageLoadEndTime" in callResult) {
            const _Object = Object;
            Object.defineProperty(callResult, "pageLoadEndTime", {
              value: "p",
              enumerable: "flag_ky",
              configurable: "flag_cf",
              writable: "flag_cn",
            });
          } else {
            callResult.pageLoadEndTime = undefined;
          }
          if (tmp5) {
            const _ReferenceError46 = ReferenceError;
            const self111 = this;
            const self112 = this;
            const referenceError1 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
            throw referenceError1;
          } else {
            if ("pageLoadInitTime" in callResult) {
              const _Object2 = Object;
              Object.defineProperty(callResult, "pageLoadInitTime", {
                value: "p",
                enumerable: "flag_ky",
                configurable: "flag_cf",
                writable: "flag_cn",
              });
            } else {
              callResult.pageLoadInitTime = undefined;
            }
            if (tmp5) {
              const _ReferenceError45 = ReferenceError;
              const self109 = this;
              const self110 = this;
              const referenceError2 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              throw referenceError2;
            } else {
              if ("_destroyed" in callResult) {
                const _Object3 = Object;
                Object.defineProperty(callResult, "_destroyed", {
                  value: "p",
                  enumerable: "flag_ky",
                  configurable: "flag_cf",
                  writable: "flag_cn",
                });
              } else {
                callResult._destroyed = undefined;
              }
              if (tmp5) {
                const _ReferenceError44 = ReferenceError;
                const self107 = this;
                const self108 = this;
                const referenceError3 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                throw referenceError3;
              } else {
                if ("_heartBeatTimeout" in callResult) {
                  const _Object4 = Object;
                  Object.defineProperty(callResult, "_heartBeatTimeout", {
                    value: "p",
                    enumerable: "flag_ky",
                    configurable: "flag_cf",
                    writable: "flag_cn",
                  });
                } else {
                  callResult._heartBeatTimeout = undefined;
                }
                if (tmp5) {
                  const _ReferenceError43 = ReferenceError;
                  const self105 = this;
                  const self106 = this;
                  const referenceError4 = new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                  throw referenceError4;
                } else {
                  if ("adTracker" in callResult) {
                    const _Object5 = Object;
                    Object.defineProperty(callResult, "adTracker", {
                      value: "p",
                      enumerable: "flag_ky",
                      configurable: "flag_cf",
                      writable: "flag_cn",
                    });
                  } else {
                    callResult.adTracker = undefined;
                  }
                  if (tmp5) {
                    const _ReferenceError42 = ReferenceError;
                    const self103 = this;
                    const self104 = this;
                    const referenceError5 = new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                    throw referenceError5;
                  } else {
                    if ("dashjs" in callResult) {
                      const _Object6 = Object;
                      Object.defineProperty(callResult, "dashjs", {
                        value: "p",
                        enumerable: "flag_ky",
                        configurable: "flag_cf",
                        writable: "flag_cn",
                      });
                    } else {
                      callResult.dashjs = undefined;
                    }
                    if (tmp5) {
                      const _ReferenceError41 = ReferenceError;
                      const self101 = this;
                      const self102 = this;
                      const referenceError6 = new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                      throw referenceError6;
                    } else {
                      if ("data" in callResult) {
                        const _Object7 = Object;
                        Object.defineProperty(callResult, "data", {
                          value: "p",
                          enumerable: "flag_ky",
                          configurable: "flag_cf",
                          writable: "flag_cn",
                        });
                      } else {
                        callResult.data = undefined;
                      }
                      if (tmp5) {
                        const _ReferenceError40 = ReferenceError;
                        const self99 = this;
                        const self100 = this;
                        const referenceError7 = new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                        throw referenceError7;
                      } else {
                        if ("disablePlayheadRebufferTracking" in callResult) {
                          const _Object8 = Object;
                          Object.defineProperty(callResult, "disablePlayheadRebufferTracking", {
                            value: "p",
                            enumerable: "flag_ky",
                            configurable: "flag_cf",
                            writable: "flag_cn",
                          });
                        } else {
                          callResult.disablePlayheadRebufferTracking = undefined;
                        }
                        if (tmp5) {
                          const _ReferenceError39 = ReferenceError;
                          const self97 = this;
                          const self98 = this;
                          const referenceError8 = new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                          throw referenceError8;
                        } else {
                          if ("disableRebufferTracking" in callResult) {
                            const _Object9 = Object;
                            Object.defineProperty(callResult, "disableRebufferTracking", {
                              value: "p",
                              enumerable: "flag_ky",
                              configurable: "flag_cf",
                              writable: "flag_cn",
                            });
                          } else {
                            callResult.disableRebufferTracking = undefined;
                          }
                          if (tmp5) {
                            const _ReferenceError38 = ReferenceError;
                            const self95 = this;
                            const self96 = this;
                            const referenceError9 = new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called",
                            );
                            throw referenceError9;
                          } else {
                            if ("errorTracker" in callResult) {
                              const _Object10 = Object;
                              Object.defineProperty(callResult, "errorTracker", {
                                value: "p",
                                enumerable: "flag_ky",
                                configurable: "flag_cf",
                                writable: "flag_cn",
                              });
                            } else {
                              callResult.errorTracker = undefined;
                            }
                            if (tmp5) {
                              const _ReferenceError37 = ReferenceError;
                              const self93 = this;
                              const self94 = this;
                              const referenceError10 = new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called",
                              );
                              throw referenceError10;
                            } else {
                              if ("errorTranslator" in callResult) {
                                const _Object11 = Object;
                                Object.defineProperty(callResult, "errorTranslator", {
                                  value: "p",
                                  enumerable: "flag_ky",
                                  configurable: "flag_cf",
                                  writable: "flag_cn",
                                });
                              } else {
                                callResult.errorTranslator = undefined;
                              }
                              if (tmp5) {
                                const _ReferenceError36 = ReferenceError;
                                const self91 = this;
                                const self92 = this;
                                const referenceError11 = new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called",
                                );
                                throw referenceError11;
                              } else {
                                if ("emitTranslator" in callResult) {
                                  const _Object12 = Object;
                                  Object.defineProperty(callResult, "emitTranslator", {
                                    value: "p",
                                    enumerable: "flag_ky",
                                    configurable: "flag_cf",
                                    writable: "flag_cn",
                                  });
                                } else {
                                  callResult.emitTranslator = undefined;
                                }
                                if (tmp5) {
                                  const _ReferenceError35 = ReferenceError;
                                  const self89 = this;
                                  const self90 = this;
                                  const referenceError12 = new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called",
                                  );
                                  throw referenceError12;
                                } else {
                                  if ("getAdData" in callResult) {
                                    const _Object13 = Object;
                                    Object.defineProperty(callResult, "getAdData", {
                                      value: "p",
                                      enumerable: "flag_ky",
                                      configurable: "flag_cf",
                                      writable: "flag_cn",
                                    });
                                  } else {
                                    callResult.getAdData = undefined;
                                  }
                                  if (tmp5) {
                                    const _ReferenceError34 = ReferenceError;
                                    const self87 = this;
                                    const self88 = this;
                                    const referenceError13 = new ReferenceError(
                                      "this hasn't been initialised - super() hasn't been called",
                                    );
                                    throw referenceError13;
                                  } else {
                                    if ("getPlayheadTime" in callResult) {
                                      const _Object14 = Object;
                                      Object.defineProperty(callResult, "getPlayheadTime", {
                                        value: "p",
                                        enumerable: "flag_ky",
                                        configurable: "flag_cf",
                                        writable: "flag_cn",
                                      });
                                    } else {
                                      callResult.getPlayheadTime = undefined;
                                    }
                                    if (tmp5) {
                                      const _ReferenceError33 = ReferenceError;
                                      const self85 = this;
                                      const self86 = this;
                                      const referenceError14 = new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called",
                                      );
                                      throw referenceError14;
                                    } else {
                                      if ("getStateData" in callResult) {
                                        const _Object15 = Object;
                                        Object.defineProperty(callResult, "getStateData", {
                                          value: "p",
                                          enumerable: "flag_ky",
                                          configurable: "flag_cf",
                                          writable: "flag_cn",
                                        });
                                      } else {
                                        callResult.getStateData = undefined;
                                      }
                                      if (tmp5) {
                                        const _ReferenceError32 = ReferenceError;
                                        const self83 = this;
                                        const self84 = this;
                                        const referenceError15 = new ReferenceError(
                                          "this hasn't been initialised - super() hasn't been called",
                                        );
                                        throw referenceError15;
                                      } else {
                                        if ("stateDataTranslator" in callResult) {
                                          const _Object16 = Object;
                                          Object.defineProperty(callResult, "stateDataTranslator", {
                                            value: "p",
                                            enumerable: "flag_ky",
                                            configurable: "flag_cf",
                                            writable: "flag_cn",
                                          });
                                        } else {
                                          callResult.stateDataTranslator = undefined;
                                        }
                                        if (tmp5) {
                                          const _ReferenceError31 = ReferenceError;
                                          const self81 = this;
                                          const self82 = this;
                                          const referenceError16 = new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called",
                                          );
                                          throw referenceError16;
                                        } else {
                                          if ("hlsjs" in callResult) {
                                            const _Object17 = Object;
                                            Object.defineProperty(callResult, "hlsjs", {
                                              value: "p",
                                              enumerable: "flag_ky",
                                              configurable: "flag_cf",
                                              writable: "flag_cn",
                                            });
                                          } else {
                                            callResult.hlsjs = undefined;
                                          }
                                          if (tmp5) {
                                            const _ReferenceError30 = ReferenceError;
                                            const self79 = this;
                                            const self80 = this;
                                            const referenceError17 = new ReferenceError(
                                              "this hasn't been initialised - super() hasn't been called",
                                            );
                                            throw referenceError17;
                                          } else {
                                            if ("id" in callResult) {
                                              const _Object18 = Object;
                                              Object.defineProperty(callResult, "id", {
                                                value: "p",
                                                enumerable: "flag_ky",
                                                configurable: "flag_cf",
                                                writable: "flag_cn",
                                              });
                                            } else {
                                              callResult.id = undefined;
                                            }
                                            if (tmp5) {
                                              const _ReferenceError29 = ReferenceError;
                                              const self77 = this;
                                              const self78 = this;
                                              const referenceError18 = new ReferenceError(
                                                "this hasn't been initialised - super() hasn't been called",
                                              );
                                              throw referenceError18;
                                            } else {
                                              if ("longResumeTracker" in callResult) {
                                                const _Object19 = Object;
                                                Object.defineProperty(callResult, "longResumeTracker", {
                                                  value: "p",
                                                  enumerable: "flag_ky",
                                                  configurable: "flag_cf",
                                                  writable: "flag_cn",
                                                });
                                              } else {
                                                callResult.longResumeTracker = undefined;
                                              }
                                              if (tmp5) {
                                                const _ReferenceError28 = ReferenceError;
                                                const self75 = this;
                                                const self76 = this;
                                                const referenceError19 = new ReferenceError(
                                                  "this hasn't been initialised - super() hasn't been called",
                                                );
                                                throw referenceError19;
                                              } else {
                                                if ("minimumRebufferDuration" in callResult) {
                                                  const _Object20 = Object;
                                                  Object.defineProperty(callResult, "minimumRebufferDuration", {
                                                    value: "p",
                                                    enumerable: "flag_ky",
                                                    configurable: "flag_cf",
                                                    writable: "flag_cn",
                                                  });
                                                } else {
                                                  callResult.minimumRebufferDuration = undefined;
                                                }
                                                if (tmp5) {
                                                  const _ReferenceError27 = ReferenceError;
                                                  const self73 = this;
                                                  const self74 = this;
                                                  const referenceError20 = new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called",
                                                  );
                                                  throw referenceError20;
                                                } else {
                                                  if ("mux" in callResult) {
                                                    const _Object21 = Object;
                                                    Object.defineProperty(callResult, "mux", {
                                                      value: "p",
                                                      enumerable: "flag_ky",
                                                      configurable: "flag_cf",
                                                      writable: "flag_cn",
                                                    });
                                                  } else {
                                                    callResult.mux = undefined;
                                                  }
                                                  if (tmp5) {
                                                    const _ReferenceError26 = ReferenceError;
                                                    const self71 = this;
                                                    const self72 = this;
                                                    const referenceError21 = new ReferenceError(
                                                      "this hasn't been initialised - super() hasn't been called",
                                                    );
                                                    throw referenceError21;
                                                  } else {
                                                    if ("playbackEventDispatcher" in callResult) {
                                                      const _Object22 = Object;
                                                      Object.defineProperty(callResult, "playbackEventDispatcher", {
                                                        value: "p",
                                                        enumerable: "flag_ky",
                                                        configurable: "flag_cf",
                                                        writable: "flag_cn",
                                                      });
                                                    } else {
                                                      callResult.playbackEventDispatcher = undefined;
                                                    }
                                                    if (tmp5) {
                                                      const _ReferenceError25 = ReferenceError;
                                                      const self69 = this;
                                                      const self70 = this;
                                                      const referenceError22 = new ReferenceError(
                                                        "this hasn't been initialised - super() hasn't been called",
                                                      );
                                                      throw referenceError22;
                                                    } else {
                                                      if ("playbackHeartbeat" in callResult) {
                                                        const _Object23 = Object;
                                                        Object.defineProperty(callResult, "playbackHeartbeat", {
                                                          value: "p",
                                                          enumerable: "flag_ky",
                                                          configurable: "flag_cf",
                                                          writable: "flag_cn",
                                                        });
                                                      } else {
                                                        callResult.playbackHeartbeat = undefined;
                                                      }
                                                      if (tmp5) {
                                                        const _ReferenceError24 = ReferenceError;
                                                        const self67 = this;
                                                        const self68 = this;
                                                        const referenceError23 = new ReferenceError(
                                                          "this hasn't been initialised - super() hasn't been called",
                                                        );
                                                        throw referenceError23;
                                                      } else {
                                                        if ("playbackHeartbeatTime" in callResult) {
                                                          const _Object24 = Object;
                                                          Object.defineProperty(callResult, "playbackHeartbeatTime", {
                                                            value: "p",
                                                            enumerable: "flag_ky",
                                                            configurable: "flag_cf",
                                                            writable: "flag_cn",
                                                          });
                                                        } else {
                                                          callResult.playbackHeartbeatTime = undefined;
                                                        }
                                                        if (tmp5) {
                                                          const _ReferenceError23 = ReferenceError;
                                                          const self65 = this;
                                                          const self66 = this;
                                                          const referenceError24 = new ReferenceError(
                                                            "this hasn't been initialised - super() hasn't been called",
                                                          );
                                                          throw referenceError24;
                                                        } else {
                                                          if ("playheadTime" in callResult) {
                                                            const _Object25 = Object;
                                                            Object.defineProperty(callResult, "playheadTime", {
                                                              value: "p",
                                                              enumerable: "flag_ky",
                                                              configurable: "flag_cf",
                                                              writable: "flag_cn",
                                                            });
                                                          } else {
                                                            callResult.playheadTime = undefined;
                                                          }
                                                          if (tmp5) {
                                                            const _ReferenceError22 = ReferenceError;
                                                            const self63 = this;
                                                            const self64 = this;
                                                            const referenceError25 = new ReferenceError(
                                                              "this hasn't been initialised - super() hasn't been called",
                                                            );
                                                            throw referenceError25;
                                                          } else {
                                                            if ("seekingTracker" in callResult) {
                                                              const _Object26 = Object;
                                                              Object.defineProperty(callResult, "seekingTracker", {
                                                                value: "p",
                                                                enumerable: "flag_ky",
                                                                configurable: "flag_cf",
                                                                writable: "flag_cn",
                                                              });
                                                            } else {
                                                              callResult.seekingTracker = undefined;
                                                            }
                                                            if (tmp5) {
                                                              const _ReferenceError21 = ReferenceError;
                                                              const self61 = this;
                                                              const self62 = this;
                                                              const referenceError26 = new ReferenceError(
                                                                "this hasn't been initialised - super() hasn't been called",
                                                              );
                                                              throw referenceError26;
                                                            } else {
                                                              if ("sustainedRebufferThreshold" in callResult) {
                                                                const _Object27 = Object;
                                                                Object.defineProperty(
                                                                  callResult,
                                                                  "sustainedRebufferThreshold",
                                                                  {
                                                                    value: "p",
                                                                    enumerable: "flag_ky",
                                                                    configurable: "flag_cf",
                                                                    writable: "flag_cn",
                                                                  },
                                                                );
                                                              } else {
                                                                callResult.sustainedRebufferThreshold = undefined;
                                                              }
                                                              if (tmp5) {
                                                                const _ReferenceError20 = ReferenceError;
                                                                const self59 = this;
                                                                const self60 = this;
                                                                const referenceError27 = new ReferenceError(
                                                                  "this hasn't been initialised - super() hasn't been called",
                                                                );
                                                                throw referenceError27;
                                                              } else {
                                                                if ("watchTimeTracker" in callResult) {
                                                                  const _Object28 = Object;
                                                                  Object.defineProperty(
                                                                    callResult,
                                                                    "watchTimeTracker",
                                                                    {
                                                                      value: "p",
                                                                      enumerable: "flag_ky",
                                                                      configurable: "flag_cf",
                                                                      writable: "flag_cn",
                                                                    },
                                                                  );
                                                                } else {
                                                                  callResult.watchTimeTracker = undefined;
                                                                }
                                                                if (tmp5) {
                                                                  const _ReferenceError19 = ReferenceError;
                                                                  const self57 = this;
                                                                  const self58 = this;
                                                                  const referenceError28 = new ReferenceError(
                                                                    "this hasn't been initialised - super() hasn't been called",
                                                                  );
                                                                  throw referenceError28;
                                                                } else {
                                                                  if ("currentFragmentPDT" in callResult) {
                                                                    const _Object29 = Object;
                                                                    Object.defineProperty(
                                                                      callResult,
                                                                      "currentFragmentPDT",
                                                                      {
                                                                        value: "p",
                                                                        enumerable: "flag_ky",
                                                                        configurable: "flag_cf",
                                                                        writable: "flag_cn",
                                                                      },
                                                                    );
                                                                  } else {
                                                                    callResult.currentFragmentPDT = undefined;
                                                                  }
                                                                  if (tmp5) {
                                                                    const _ReferenceError18 = ReferenceError;
                                                                    const self55 = this;
                                                                    const self56 = this;
                                                                    const referenceError29 = new ReferenceError(
                                                                      "this hasn't been initialised - super() hasn't been called",
                                                                    );
                                                                    throw referenceError29;
                                                                  } else {
                                                                    if ("currentFragmentStart" in callResult) {
                                                                      const _Object30 = Object;
                                                                      Object.defineProperty(
                                                                        callResult,
                                                                        "currentFragmentStart",
                                                                        {
                                                                          value: "p",
                                                                          enumerable: "flag_ky",
                                                                          configurable: "flag_cf",
                                                                          writable: "flag_cn",
                                                                        },
                                                                      );
                                                                    } else {
                                                                      callResult.currentFragmentStart = undefined;
                                                                    }
                                                                    callResult.pageLoadInitTime =
                                                                      closure_47.navigationStart();
                                                                    callResult.pageLoadEndTime =
                                                                      closure_47.domContentLoadedEventEnd();
                                                                    const obj2 = {
                                                                      debug: false,
                                                                      minimumRebufferDuration: 250,
                                                                      sustainedRebufferThreshold: 1000,
                                                                      playbackHeartbeatTime: 25,
                                                                      beaconDomain: "litix.io",
                                                                      sampleRate: 1,
                                                                      disableCookies: false,
                                                                      respectDoNotTrack: false,
                                                                      disableRebufferTracking: false,
                                                                      disablePlayheadRebufferTracking: false,
                                                                      errorTranslator(arg0) {
                                                                        return arg0;
                                                                      },
                                                                      emitTranslator() {
                                                                        let num;
                                                                        const length = arguments.length;
                                                                        const array = new Array(length);
                                                                        for (let num = 0; num < length; num = num + 1) {
                                                                          array[num] = arguments[num];
                                                                        }
                                                                        return array;
                                                                      },
                                                                      stateDataTranslator(stateData) {
                                                                        return stateData;
                                                                      },
                                                                    };
                                                                    callResult.mux = mux;
                                                                    callResult.id = id;
                                                                    const tmp41 =
                                                                      null != beaconDomain && beaconDomain.beaconDomain;
                                                                    if (tmp41) {
                                                                      let log = callResult.mux.log;
                                                                      log.warn(
                                                                        "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.",
                                                                      );
                                                                    }
                                                                    const _Object31 = Object;
                                                                    let merged = Object.assign(obj2, beaconDomain);
                                                                    merged.data = merged.data || {};
                                                                    if (merged.data.property_key) {
                                                                      merged.data.env_key = merged.data.property_key;
                                                                      delete tmp43.data["property_key"];
                                                                    }
                                                                    logger.level = merged.debug ? c34 : c36;
                                                                    callResult.getPlayheadTime = merged.getPlayheadTime;
                                                                    callResult.getStateData =
                                                                      merged.getStateData || (() => ({}));
                                                                    callResult.getAdData =
                                                                      merged.getAdData || (() => {});
                                                                    ({
                                                                      minimumRebufferDuration:
                                                                        obj.minimumRebufferDuration,
                                                                      sustainedRebufferThreshold:
                                                                        obj.sustainedRebufferThreshold,
                                                                      playbackHeartbeatTime: obj.playbackHeartbeatTime,
                                                                      disableRebufferTracking:
                                                                        obj.disableRebufferTracking,
                                                                    } = merged);
                                                                    if (callResult.disableRebufferTracking) {
                                                                      const log2 = callResult.mux.log;
                                                                      log2.warn(
                                                                        "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.",
                                                                      );
                                                                    }
                                                                    ({
                                                                      disablePlayheadRebufferTracking:
                                                                        obj.disablePlayheadRebufferTracking,
                                                                      errorTranslator: obj.errorTranslator,
                                                                      emitTranslator: obj.emitTranslator,
                                                                      stateDataTranslator: obj.stateDataTranslator,
                                                                    } = merged);
                                                                    const self4 = this;
                                                                    fn18(mux, merged.data.env_key, merged);
                                                                    callResult.playbackEventDispatcher = this;
                                                                    callResult.data = {
                                                                      player_instance_id: ee(),
                                                                      mux_sample_rate: merged.sampleRate,
                                                                      beacon_domain:
                                                                        merged.beaconCollectionDomain ||
                                                                        merged.beaconDomain,
                                                                    };
                                                                    let num = 1;
                                                                    callResult.data.view_sequence_number = 1;
                                                                    callResult.data.player_sequence_number = 1;
                                                                    fn = function () {
                                                                      const self = this;
                                                                      if (undefined === this.data.view_start) {
                                                                        const utils = self.mux.utils;
                                                                        self.data.view_start = utils.now();
                                                                        self.emit("viewstart");
                                                                      }
                                                                    };
                                                                    const obj3 = {
                                                                      player_instance_id: ee(),
                                                                      mux_sample_rate: merged.sampleRate,
                                                                      beacon_domain:
                                                                        merged.beaconCollectionDomain ||
                                                                        merged.beaconDomain,
                                                                    };
                                                                    if (tmp5) {
                                                                      const _ReferenceError17 = ReferenceError;
                                                                      const self53 = this;
                                                                      const self54 = this;
                                                                      const referenceError30 = new ReferenceError(
                                                                        "this hasn't been initialised - super() hasn't been called",
                                                                      );
                                                                      throw referenceError30;
                                                                    } else {
                                                                      closure_1 = tmp48(callResult);
                                                                      callResult.on("viewinit", function (arg0, arg1) {
                                                                        this._resetVideoData();
                                                                        this._resetViewData();
                                                                        this._resetErrorData();
                                                                        this._updateStateData();
                                                                        const merged = Object.assign(this.data, arg1);
                                                                        this._initializeViewData();
                                                                        this.one("play", closure_1);
                                                                        this.one("adbreakstart", closure_1);
                                                                      });
                                                                      callResult.on(
                                                                        "videochange",
                                                                        function (arg0, arg1) {
                                                                          this._resetView(arg1);
                                                                        },
                                                                      );
                                                                      callResult.on(
                                                                        "programchange",
                                                                        function (arg0, arg1) {
                                                                          const self = this;
                                                                          if (this.data.player_is_paused) {
                                                                            const log = self.mux.log;
                                                                            log.warn(
                                                                              "The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.",
                                                                            );
                                                                          }
                                                                          self._resetView(
                                                                            Object.assign(arg1, {
                                                                              view_program_changed: true,
                                                                            }),
                                                                          );
                                                                          closure_1();
                                                                          self.emit("play");
                                                                          self.emit("playing");
                                                                        },
                                                                      );
                                                                      callResult.on(
                                                                        "fragmentchange",
                                                                        (arg0, arg1) => {},
                                                                      );
                                                                      callResult.on("destroy", callResult.destroy);
                                                                      const _window = window;
                                                                      if (typeof window !== "undefined") {
                                                                        const _window2 = window;
                                                                        if (
                                                                          typeof window.addEventListener === "function"
                                                                        ) {
                                                                          const _window3 = window;
                                                                          if (
                                                                            typeof window.removeEventListener ===
                                                                            "function"
                                                                          ) {
                                                                            const fn2 = function f() {
                                                                              let WINDOW_HIDDEN =
                                                                                undefined !==
                                                                                callResult.data.view_start;
                                                                              callResult.mux.WINDOW_HIDDEN =
                                                                                "hidden" === document.visibilityState;
                                                                              if (WINDOW_HIDDEN) {
                                                                                WINDOW_HIDDEN =
                                                                                  callResult.mux.WINDOW_HIDDEN;
                                                                              }
                                                                              if (WINDOW_HIDDEN) {
                                                                                if (!callResult.data.player_is_paused) {
                                                                                  callResult.emit("hb");
                                                                                }
                                                                              }
                                                                            };
                                                                            const _window4 = window;
                                                                            const listener = window.addEventListener(
                                                                              "visibilitychange",
                                                                              fn2,
                                                                              false,
                                                                            );
                                                                            fn3 = function g(event) {
                                                                              if (!event.persisted) {
                                                                                callResult.destroy();
                                                                              }
                                                                            };
                                                                            const _window5 = window;
                                                                            const listener1 = window.addEventListener(
                                                                              "pagehide",
                                                                              fn3,
                                                                              false,
                                                                            );
                                                                            callResult.on("destroy", () => {
                                                                              const removed =
                                                                                window.removeEventListener(
                                                                                  "visibilitychange",
                                                                                  fn2,
                                                                                );
                                                                              const removed1 =
                                                                                window.removeEventListener(
                                                                                  "pagehide",
                                                                                  fn3,
                                                                                );
                                                                            });
                                                                          }
                                                                        }
                                                                      }
                                                                      callResult.on(
                                                                        "playerready",
                                                                        function (arg0, arg1) {
                                                                          const merged = Object.assign(this.data, arg1);
                                                                        },
                                                                      );
                                                                      const item = closure_99.forEach((item) => {
                                                                        let closure_0 = item;
                                                                        callResult.on(item, function (arg0, arg1) {
                                                                          const self = this;
                                                                          if (0 !== closure_0.indexOf("ad")) {
                                                                            self._updateStateData();
                                                                          }
                                                                          const merged = Object.assign(self.data, arg1);
                                                                          self._sanitizeData();
                                                                        });
                                                                        callResult.on(`after${item}`, function () {
                                                                          const self = this;
                                                                          const viewErrored =
                                                                            "error" !== closure_0 ||
                                                                            self.errorTracker.viewErrored;
                                                                          if (viewErrored) {
                                                                            self.send(closure_0);
                                                                          }
                                                                        });
                                                                      });
                                                                      callResult.on("viewend", (arg0, arg1) => {
                                                                        const merged = Object.assign(
                                                                          callResult.data,
                                                                          arg1,
                                                                        );
                                                                      });
                                                                      callResult.one("playerready", function (arg0) {
                                                                        const self = this;
                                                                        if (this.data.player_init_time) {
                                                                          self.data.player_startup_time =
                                                                            tmp - self.data.player_init_time;
                                                                        }
                                                                        self.pageLoadInitTime =
                                                                          self.data.page_load_init_time ||
                                                                          self.pageLoadInitTime;
                                                                        self.pageLoadEndTime =
                                                                          self.data.page_load_end_time ||
                                                                          self.pageLoadEndTime;
                                                                        const tmp2 =
                                                                          !self.mux.PLAYER_TRACKED &&
                                                                          self.pageLoadInitTime;
                                                                        if (tmp2) {
                                                                          self.mux.PLAYER_TRACKED = true;
                                                                          const tmp3 =
                                                                            self.data.player_init_time ||
                                                                            self.pageLoadEndTime;
                                                                          if (tmp3) {
                                                                            let num = self.data.player_init_time;
                                                                            const data = self.data;
                                                                            const _Math = Math;
                                                                            if (!num) {
                                                                              num = Infinity;
                                                                            }
                                                                            const tmp5 =
                                                                              self.pageLoadEndTime || Infinity;
                                                                            data.page_load_time =
                                                                              min(num, tmp5) - self.pageLoadInitTime;
                                                                          }
                                                                        }
                                                                        self.send("playerready");
                                                                        delete self.data["player_startup_time"];
                                                                        delete self.data["page_load_time"];
                                                                      });
                                                                      if (tmp5) {
                                                                        const _ReferenceError16 = ReferenceError;
                                                                        const self51 = this;
                                                                        const self52 = this;
                                                                        const referenceError31 = new ReferenceError(
                                                                          "this hasn't been initialised - super() hasn't been called",
                                                                        );
                                                                        throw referenceError31;
                                                                      } else {
                                                                        const self5 = this;
                                                                        tmp59(callResult);
                                                                        callResult.longResumeTracker = this;
                                                                        if (tmp5) {
                                                                          const _ReferenceError15 = ReferenceError;
                                                                          const self49 = this;
                                                                          const self50 = this;
                                                                          const referenceError32 = new ReferenceError(
                                                                            "this hasn't been initialised - super() hasn't been called",
                                                                          );
                                                                          throw referenceError32;
                                                                        } else {
                                                                          const self6 = this;
                                                                          tmp61(callResult);
                                                                          callResult.errorTracker = this;
                                                                          if (tmp5) {
                                                                            const _ReferenceError14 = ReferenceError;
                                                                            const self47 = this;
                                                                            const self48 = this;
                                                                            const referenceError33 = new ReferenceError(
                                                                              "this hasn't been initialised - super() hasn't been called",
                                                                            );
                                                                            throw referenceError33;
                                                                          } else {
                                                                            const self7 = this;
                                                                            tmp63(callResult);
                                                                            if (tmp5) {
                                                                              const _ReferenceError13 = ReferenceError;
                                                                              const self45 = this;
                                                                              const self46 = this;
                                                                              const referenceError34 =
                                                                                new ReferenceError(
                                                                                  "this hasn't been initialised - super() hasn't been called",
                                                                                );
                                                                              throw referenceError34;
                                                                            } else {
                                                                              const self8 = this;
                                                                              tmp65(callResult);
                                                                              callResult.seekingTracker = this;
                                                                              if (tmp5) {
                                                                                const _ReferenceError12 =
                                                                                  ReferenceError;
                                                                                const self43 = this;
                                                                                const self44 = this;
                                                                                const referenceError35 =
                                                                                  new ReferenceError(
                                                                                    "this hasn't been initialised - super() hasn't been called",
                                                                                  );
                                                                                throw referenceError35;
                                                                              } else {
                                                                                const self9 = this;
                                                                                tmp67(callResult);
                                                                                callResult.playheadTime = this;
                                                                                if (tmp5) {
                                                                                  const _ReferenceError11 =
                                                                                    ReferenceError;
                                                                                  const self41 = this;
                                                                                  const self42 = this;
                                                                                  const referenceError36 =
                                                                                    new ReferenceError(
                                                                                      "this hasn't been initialised - super() hasn't been called",
                                                                                    );
                                                                                  throw referenceError36;
                                                                                } else {
                                                                                  const self10 = this;
                                                                                  tmp69(callResult);
                                                                                  callResult.playbackHeartbeat = this;
                                                                                  if (tmp5) {
                                                                                    const _ReferenceError10 =
                                                                                      ReferenceError;
                                                                                    const self39 = this;
                                                                                    const self40 = this;
                                                                                    const referenceError37 =
                                                                                      new ReferenceError(
                                                                                        "this hasn't been initialised - super() hasn't been called",
                                                                                      );
                                                                                    throw referenceError37;
                                                                                  } else {
                                                                                    const self11 = this;
                                                                                    tmp71(callResult);
                                                                                    if (tmp5) {
                                                                                      const _ReferenceError9 =
                                                                                        ReferenceError;
                                                                                      const self37 = this;
                                                                                      const self38 = this;
                                                                                      const referenceError38 =
                                                                                        new ReferenceError(
                                                                                          "this hasn't been initialised - super() hasn't been called",
                                                                                        );
                                                                                      throw referenceError38;
                                                                                    } else {
                                                                                      const self12 = this;
                                                                                      tmp73(callResult);
                                                                                      callResult.watchTimeTracker =
                                                                                        this;
                                                                                      if (tmp5) {
                                                                                        const _ReferenceError8 =
                                                                                          ReferenceError;
                                                                                        const self35 = this;
                                                                                        const self36 = this;
                                                                                        const referenceError39 =
                                                                                          new ReferenceError(
                                                                                            "this hasn't been initialised - super() hasn't been called",
                                                                                          );
                                                                                        throw referenceError39;
                                                                                      } else {
                                                                                        const self13 = this;
                                                                                        tmp75(callResult);
                                                                                        if (tmp5) {
                                                                                          const _ReferenceError7 =
                                                                                            ReferenceError;
                                                                                          const self33 = this;
                                                                                          const self34 = this;
                                                                                          const referenceError40 =
                                                                                            new ReferenceError(
                                                                                              "this hasn't been initialised - super() hasn't been called",
                                                                                            );
                                                                                          throw referenceError40;
                                                                                        } else {
                                                                                          const self14 = this;
                                                                                          tmp77(callResult);
                                                                                          callResult.adTracker = this;
                                                                                          if (tmp5) {
                                                                                            const _ReferenceError6 =
                                                                                              ReferenceError;
                                                                                            const self31 = this;
                                                                                            const self32 = this;
                                                                                            const referenceError41 =
                                                                                              new ReferenceError(
                                                                                                "this hasn't been initialised - super() hasn't been called",
                                                                                              );
                                                                                            throw referenceError41;
                                                                                          } else {
                                                                                            const self15 = this;
                                                                                            tmp79(callResult);
                                                                                            if (tmp5) {
                                                                                              const _ReferenceError5 =
                                                                                                ReferenceError;
                                                                                              const self29 = this;
                                                                                              const self30 = this;
                                                                                              const referenceError42 =
                                                                                                new ReferenceError(
                                                                                                  "this hasn't been initialised - super() hasn't been called",
                                                                                                );
                                                                                              throw referenceError42;
                                                                                            } else {
                                                                                              const self16 = this;
                                                                                              tmp81(callResult);
                                                                                              if (tmp5) {
                                                                                                const _ReferenceError4 =
                                                                                                  ReferenceError;
                                                                                                const self27 = this;
                                                                                                const self28 = this;
                                                                                                const referenceError43 =
                                                                                                  new ReferenceError(
                                                                                                    "this hasn't been initialised - super() hasn't been called",
                                                                                                  );
                                                                                                throw referenceError43;
                                                                                              } else {
                                                                                                const self17 = this;
                                                                                                tmp83(callResult);
                                                                                                if (tmp5) {
                                                                                                  const _ReferenceError3 =
                                                                                                    ReferenceError;
                                                                                                  const self25 = this;
                                                                                                  const self26 = this;
                                                                                                  const referenceError44 =
                                                                                                    new ReferenceError(
                                                                                                      "this hasn't been initialised - super() hasn't been called",
                                                                                                    );
                                                                                                  throw referenceError44;
                                                                                                } else {
                                                                                                  const self18 = this;
                                                                                                  tmp85(callResult);
                                                                                                  if (tmp5) {
                                                                                                    const _ReferenceError2 =
                                                                                                      ReferenceError;
                                                                                                    const self23 = this;
                                                                                                    const self24 = this;
                                                                                                    const referenceError45 =
                                                                                                      new ReferenceError(
                                                                                                        "this hasn't been initialised - super() hasn't been called",
                                                                                                      );
                                                                                                    throw referenceError45;
                                                                                                  } else {
                                                                                                    const self19 = this;
                                                                                                    tmp87(callResult);
                                                                                                    if (tmp5) {
                                                                                                      const _ReferenceError =
                                                                                                        ReferenceError;
                                                                                                      const self21 =
                                                                                                        this;
                                                                                                      const self22 =
                                                                                                        this;
                                                                                                      const referenceError46 =
                                                                                                        new ReferenceError(
                                                                                                          "this hasn't been initialised - super() hasn't been called",
                                                                                                        );
                                                                                                      throw referenceError46;
                                                                                                    } else {
                                                                                                      const self20 =
                                                                                                        this;
                                                                                                      tmp89(callResult);
                                                                                                      if (
                                                                                                        merged.hlsjs
                                                                                                      ) {
                                                                                                        callResult.addHLSJS(
                                                                                                          merged,
                                                                                                        );
                                                                                                      }
                                                                                                      if (
                                                                                                        merged.dashjs
                                                                                                      ) {
                                                                                                        callResult.addDashJS(
                                                                                                          merged,
                                                                                                        );
                                                                                                      }
                                                                                                      callResult.emit(
                                                                                                        "viewinit",
                                                                                                        merged.data,
                                                                                                      );
                                                                                                      return callResult;
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
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("Cannot call a class as a function");
        throw typeError;
      }
    }
    if (typeof Symbol !== "undefined") {
      const _Symbol4 = Symbol;
      if (tmp[Symbol.hasInstance]) {
        const _Symbol = Symbol;
        tmp2 = tmp[Symbol.hasInstance](self);
      }
    }
    tmp2 = U(self, tmp);
  }
}
let obj11 = { constructor: { value: t, writable: true, configurable: true } };
t.prototype = Object.create(fn2.prototype, obj11);
let tmp25 = fn(t, fn2);
closure_1 = Rt();
f119013 = function () {
  let constructResult;
  let tmp9;
  const self = this;
  const obj = fn(f119013);
  if (t) {
    const _Reflect = Reflect;
    constructResult = Reflect.construct(obj, arguments, fn(self).constructor);
  } else {
    constructResult = obj(...arguments);
  }
  if (!constructResult) {
    tmp9 = self;
    if (undefined === self) {
      const _ReferenceError = ReferenceError;
      const self2 = this;
      const self3 = this;
      const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
      throw referenceError;
    }
  } else {
    if (constructResult) {
      let str;
      const _Symbol = Symbol;
      if (typeof Symbol !== "undefined") {
        const _Symbol2 = Symbol;
        str = "symbol";
      }
      tmp9 = constructResult;
      if ("object" !== str) {
        tmp9 = constructResult;
      }
    }
    str = typeof constructResult;
  }
  return tmp9;
};
const entry9 = {
  key: "emit",
  value(arg0, arg1) {
    let utils;
    const self = this;
    const obj = { viewer_time: utils.now() };
    utils = this.mux.utils;
    const obj2 = assign(obj, arg1);
    items = [arg0, obj2];
    let emitTranslatorResult = items;
    if (this.emitTranslator) {
      try {
        emitTranslatorResult = self.emitTranslator(arg0, obj2);
      } catch (tmp2) {
        const log = self.mux.log;
        log.warn("Exception in emit translator callback.", tmp2);
      }
    }
    const length = null != emitTranslatorResult && emitTranslatorResult.length;
    if (length) {
      const tmp8 = fn(fn(t.prototype), "emit", self);
      const call = tmp8.call;
      const items1 = [self];
      call.apply(tmp8, items1.concat(V(emitTranslatorResult)));
    }
  },
};
const items11 = [
  entry9,
  {
    key: "destroy",
    value() {
      const self = this;
      if (!this._destroyed) {
        self._destroyed = true;
        if (undefined !== self.data.view_start) {
          self.emit("viewend");
          self.send("viewend");
        }
        const playbackEventDispatcher = self.playbackEventDispatcher;
        playbackEventDispatcher.destroy();
        self.removeHLSJS();
        self.removeDashJS();
        const _window = window;
        window.clearTimeout(self._heartBeatTimeout);
      }
    },
  },
  {
    key: "send",
    value(arg0) {
      const self = this;
      if (this.data.view_id) {
        const _Object = Object;
        const merged = Object.assign({}, self.data);
        if (undefined === merged.video_source_is_live) {
          if (merged.player_source_duration !== Infinity) {
            if (merged.video_source_duration !== Infinity) {
              const tmp3 = merged.player_source_duration > 0 || merged.video_source_duration > 0;
              if (tmp3) {
                merged.video_source_is_live = false;
              }
            }
          }
          merged.video_source_is_live = true;
        }
        if (!merged.video_source_is_live) {
          items = [
            "player_program_time",
            "player_manifest_newest_program_time",
            "player_live_edge_program_time",
            "player_program_time",
            "video_holdback",
            "video_part_holdback",
            "video_target_duration",
            "video_part_target_duration",
          ];
          const item = items.forEach((item) => {
            merged[item] = undefined;
          });
        }
        merged.video_source_url = merged.video_source_url || merged.player_source_url;
        if (merged.video_source_url) {
          if (typeof re === "function") {
            if (typeof merged.video_source_url === "string") {
              let items1;
              if ("" !== merged.video_source_url) {
                const str2 = (merged.video_source_url.match(
                  /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                ) || [])[4];
                let first;
                if (str2) {
                  first = (str2.match(/[^\.]+\.[^\.]+$/) || [])[0];
                  str2.match(/[^\.]+\.[^\.]+$/) || [];
                }
                items1 = [str2, first];
              }
              const _Array = Array;
              let tmp10;
              if (Array.isArray(items1)) {
                tmp10 = items1;
              }
              if (!tmp10) {
                tmp10 = vt(items1, 2);
              }
              if (!tmp10) {
                tmp10 = Pe(items1, 2);
              }
              if (tmp10) {
                [tmp2.video_source_hostname, tmp2.video_source_domain] = tmp10;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
                throw typeError;
              }
            }
            items1 = ["localhost"];
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        delete tmp2["ad_request_id"];
        const playbackEventDispatcher = self.playbackEventDispatcher;
        playbackEventDispatcher.send(arg0, merged);
        const data = self.data;
        data.view_sequence_number = data.view_sequence_number + 1;
        const data2 = self.data;
        data2.player_sequence_number = data2.player_sequence_number + 1;
        if (!set.has(arg0)) {
          self._restartHeartBeat();
        }
        if ("viewend" === arg0) {
          delete self.data["view_id"];
        }
      }
    },
  },
  {
    key: "_resetView",
    value(arg0) {
      this.emit("viewend");
      this.send("viewend");
      this.emit("viewinit", arg0);
    },
  },
  {
    key: "_updateStateData",
    value() {
      const self = this;
      let stateData = this.getStateData();
      if (typeof this.stateDataTranslator === "function") {
        try {
          stateData = self.stateDataTranslator(stateData);
        } catch (tmp3) {
          const log = self.mux.log;
          log.warn("Exception in stateDataTranslator translator callback.", tmp3);
        }
      }
      const data = self.data;
      if (null !== data) {
        if (undefined !== data) {
          if (data.video_cdn) {
            if (null != stateData) {
              if (stateData.video_cdn) {
                const video_cdn = stateData.video_cdn;
                stateData = qt(stateData, ["video_cdn"]);
              }
            }
          }
        }
      }
      const merged = Object.assign(self.data, stateData);
      const playheadTime = self.playheadTime;
      playheadTime._updatePlayheadTime();
      self._sanitizeData();
    },
  },
  {
    key: "_sanitizeData",
    value() {
      const self = this;
      items = [
        "player_width",
        "player_height",
        "video_source_width",
        "video_source_height",
        "player_playhead_time",
        "video_source_bitrate",
      ];
      const item = items.forEach((item) => {
        const parsed = parseInt(self.data[item], 10);
        const data = self.data;
        let tmp2;
        if (!isNaN(parsed)) {
          tmp2 = parsed;
        }
        data[item] = tmp2;
      });
      const items1 = ["player_source_url", "video_source_url"];
      const item1 = items1.forEach((item) => {
        if (self.data[item]) {
          const str = self.data[item];
          const formatted = str.toLowerCase();
          const tmp2 = 0 === formatted.indexOf("data:") || 0 === formatted.indexOf("blob:");
          if (tmp2) {
            self.data[item] = "MSE style URL";
          }
        }
      });
    },
  },
  {
    key: "_resetVideoData",
    value() {
      const self = this;
      const keys = Object.keys(this.data);
      const item = keys.forEach((arr) => {
        const tmp = arr;
        if (0 === arr.indexOf("video_")) {
          delete self.data[tmp];
        }
      });
    },
  },
  {
    key: "_resetViewData",
    value() {
      const self = this;
      const keys = Object.keys(this.data);
      const item = keys.forEach((arr) => {
        const tmp = arr;
        if (0 === arr.indexOf("view_")) {
          delete self.data[tmp];
        }
      });
      this.data.view_sequence_number = 1;
    },
  },
  {
    key: "_resetErrorData",
    value() {
      delete this.data["player_error_code"];
      delete this.data["player_error_message"];
      delete this.data["player_error_context"];
      delete this.data["player_error_severity"];
      delete this.data["player_error_business_exception"];
    },
  },
  {
    key: "_initializeViewData",
    value() {
      const self = this;
      let data = this.data;
      const tmp = ee();
      data.view_id = tmp;
      let closure_1 = tmp;
      if (this.data.player_is_paused) {
        self.one("play", function o() {
          if (closure_1 === self.data.view_id) {
            const data = self.data;
            data.player_view_count = data.player_view_count || 0;
            data.player_view_count = data.player_view_count + 1;
          }
        });
      } else if (tmp === self.data.view_id) {
        const data2 = self.data;
        data2.player_view_count = data2.player_view_count || 0;
        data2.player_view_count = data2.player_view_count + 1;
      }
    },
  },
  {
    key: "_restartHeartBeat",
    value() {
      const self = this;
      window.clearTimeout(this._heartBeatTimeout);
      this._heartBeatTimeout = window.setTimeout(() => {
        if (!self.data.player_is_paused) {
          self.emit("hb");
        }
      }, 10000);
    },
  },
  {
    key: "addHLSJS",
    value(hlsjs) {
      let Hls;
      let id;
      let mux;
      const self = this;
      if (hlsjs.hlsjs) {
        if (self.hlsjs) {
          const log2 = self.mux.log;
          let str2 = "An instance of HLS.js is already being monitored for this player.";
          const warnResult = log2.warn("An instance of HLS.js is already being monitored for this player.");
        } else {
          self.hlsjs = hlsjs.hlsjs;
          ({ mux, id } = self);
          ({ hlsjs, Hls } = hlsjs);
          if (!Hls) {
            let tmp2 = globalThis;
            const _window = window;
            Hls = window.Hls;
          }
          let tmp6 = Hls;
          const tmp7 = (function (mux, id, hlsjs) {
            let closure_1 = id;
            let tmp;
            if (arguments.length > 4) {
              tmp = arguments[4];
            }
            let closure_3 = tmp;
            const log = mux.log;
            const secondsToMs = mux.utils.secondsToMs;
            function s(arg0) {}
            if (closure_47.exists()) {
              function u(arg0, arg1) {}
              fn = function f(request_event_type, arg1) {
                let audioTracks;
                let levels;
                let networkDetails;
                let sessionData;
                let stats;
                let str3;
                let tmp5;
                let tmp6;
                let url;
                ({ levels, audioTracks, url, stats, networkDetails, sessionData } = arg1);
                let obj = {};
                const obj2 = {};
                const item = levels.forEach((width, index) => {
                  size = { width: width.width, height: width.height, bitrate: width.bitrate, attrs: width.attrs };
                  obj[index] = size;
                });
                const item1 = audioTracks.forEach((name, index) => {
                  obj = { name: name.name, language: name.lang, bitrate: name.bitrate };
                  obj2[index] = obj;
                });
                if (typeof He === "function") {
                  if (stats) {
                    const navigationStartResult = closure_2_47.navigationStart();
                    const loading = stats.loading;
                    ({
                      bytesLoaded: stats.total,
                      requestStart: Math.round(navigationStartResult + (loading ? loading.start : stats.trequest)),
                      responseStart: Math.round(navigationStartResult + tmp5),
                      responseEnd: Math.round(navigationStartResult + tmp6),
                    });
                    const _Math = Math;
                    const _Math2 = Math;
                    const _Math3 = Math;
                    tmp5 = loading ? loading.first : stats.tfirst;
                    tmp6 = loading ? loading.end : stats.tload;
                  }
                  if (typeof Me === "function") {
                    obj6 = {};
                    for (const key10052 in sessionData) {
                      let tmp35 = sessionData[key10052];
                      let prop = tmp35["DATA-ID"];
                      if (-1 === prop.search("io.litix.data.")) {
                        continue;
                      } else {
                        ({ "DATA-ID": str3, VALUE: obj5[str3.replace(str3, "io.litix.data.", "")] } = tmp35);
                        continue;
                      }
                      continue;
                    }
                    obj7 = {};
                    tmp13(obj7, obj6);
                    const obj8 = {
                      request_event_type,
                      request_bytes_loaded: tmp8,
                      request_start: tmp9,
                      request_response_start: tmp10,
                      request_response_end: tmp11,
                      request_type: "manifest",
                      request_hostname: null,
                      request_response_headers: null,
                      request_rendition_lists: null,
                    };
                    if (typeof closure_2_44 === "function") {
                      if (typeof re === "function") {
                        if (typeof url === "string") {
                          if ("" !== url) {
                            const str4 = (url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) ||
                              [])[4];
                            let first;
                            if (str4) {
                              first = (str4.match(/[^\.]+\.[^\.]+$/) || [])[0];
                              str4.match(/[^\.]+\.[^\.]+$/) || [];
                            }
                            items = [str4, first];
                          }
                          obj8.request_hostname = items[0];
                          if (typeof Se === "function") {
                            let tmp24;
                            if (networkDetails) {
                              if (typeof networkDetails.getAllResponseHeaders === "function") {
                                let str5 = networkDetails.getAllResponseHeaders();
                                obj9 = {};
                                if (!str5) {
                                  str5 = "";
                                }
                                const str6 = str5.trim();
                                const parts = str6.split(/[\r\n]+/);
                                const item2 = parts.forEach((item) => {
                                  const tmp = item;
                                  if (tmp) {
                                    const parts = item.split(": ");
                                    const str2 = parts.shift();
                                    let tmp2 = str2;
                                    if (tmp2) {
                                      let tmp4 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                                      if (!tmp4) {
                                        const formatted = str2.toLowerCase();
                                        tmp4 = 0 === formatted.indexOf("x-litix-");
                                      }
                                      tmp2 = tmp4;
                                    }
                                    if (tmp2) {
                                      obj2[str2] = parts.join(": ");
                                    }
                                  }
                                });
                                tmp24 = obj9;
                              }
                            }
                            obj8.request_response_headers = tmp24;
                            const obj10 = { media: obj, audio: obj2, video: {} };
                            obj8.request_rendition_lists = obj10;
                            const _Object = Object;
                            const _Object2 = Object;
                            if (Object.getOwnPropertyDescriptors) {
                              const _Object6 = Object;
                              _Object2.defineProperties(obj7, Object.getOwnPropertyDescriptors(obj8));
                            } else {
                              const _Object2Result = _Object2(obj8);
                              const _Object3 = Object;
                              const keys = Object.keys(_Object2Result);
                              const _Object4 = Object;
                              if (Object.getOwnPropertySymbols) {
                                const _Object5 = Object;
                                const push = keys.push;
                                push.apply(keys, Object.getOwnPropertySymbols(_Object2Result));
                              }
                              const item3 = keys.forEach((item) => {
                                Object.defineProperty(obj7, item, Object.getOwnPropertyDescriptor(obj8, item));
                              });
                            }
                            if (typeof tmp12 === "function") {
                              mux.emit(id, "requestcompleted", obj7);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                        items = ["localhost"];
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
              hlsjs.on(tmp.Events.MANIFEST_LOADED, fn);
              const fn2 = function g(request_event_type, arg1) {
                let details;
                let networkDetails;
                let stats;
                let tmp4;
                let tmp5;
                ({ details, networkDetails, stats } = arg1);
                if (typeof He === "function") {
                  if (stats) {
                    const navigationStartResult = closure_2_47.navigationStart();
                    const loading = stats.loading;
                    ({
                      bytesLoaded: stats.total,
                      requestStart: Math.round(navigationStartResult + (loading ? loading.start : stats.trequest)),
                      responseStart: Math.round(navigationStartResult + tmp4),
                      responseEnd: Math.round(navigationStartResult + tmp5),
                    });
                    const _Math = Math;
                    const _Math2 = Math;
                    const _Math3 = Math;
                    tmp4 = loading ? loading.first : stats.tfirst;
                    tmp5 = loading ? loading.end : stats.tload;
                  }
                  if (typeof s === "function") {
                    const _parseInt = parseInt;
                    const parsed = parseInt(closure_3.version);
                    let programDateTime;
                    const tmp16 = 1 === parsed && null !== tmp11.programDateTime;
                    if (tmp16) {
                      programDateTime = tmp11.programDateTime;
                    }
                    const tmp19 = 0 === parsed && null !== tmp11.pdt;
                    if (tmp19) {
                      programDateTime = tmp11.pdt;
                    }
                    const sum = programDateTime + secondsToMs(tmp11.duration);
                    const obj3 = {
                      request_event_type,
                      request_bytes_loaded: tmp7,
                      request_start: tmp8,
                      request_response_start: tmp9,
                      request_response_end: tmp10,
                      request_current_level: tmp,
                      request_type: "manifest",
                      request_hostname: null,
                      request_response_headers: null,
                      video_holdback: null,
                      video_part_holdback: null,
                      video_part_target_duration: null,
                      video_target_duration: null,
                      video_source_is_live: null,
                      player_manifest_newest_program_time: null,
                    };
                    if (typeof closure_2_44 === "function") {
                      if (typeof re === "function") {
                        if (typeof details.url === "string") {
                          if ("" !== details.url) {
                            const str2 = (details.url.match(
                              /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                            ) || [])[4];
                            let first;
                            if (str2) {
                              first = (str2.match(/[^\.]+\.[^\.]+$/) || [])[0];
                              str2.match(/[^\.]+\.[^\.]+$/) || [];
                            }
                            items = [str2, first];
                          }
                          obj3.request_hostname = items[0];
                          if (typeof Se === "function") {
                            let tmp31;
                            if (networkDetails) {
                              if (typeof networkDetails.getAllResponseHeaders === "function") {
                                let str3 = networkDetails.getAllResponseHeaders();
                                const obj4 = {};
                                if (!str3) {
                                  str3 = "";
                                }
                                const str4 = str3.trim();
                                const parts = str4.split(/[\r\n]+/);
                                const item = parts.forEach((item) => {
                                  const tmp = item;
                                  if (tmp) {
                                    const parts = item.split(": ");
                                    const str2 = parts.shift();
                                    let tmp2 = str2;
                                    if (tmp2) {
                                      let tmp4 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                                      if (!tmp4) {
                                        const formatted = str2.toLowerCase();
                                        tmp4 = 0 === formatted.indexOf("x-litix-");
                                      }
                                      tmp2 = tmp4;
                                    }
                                    if (tmp2) {
                                      obj2[str2] = parts.join(": ");
                                    }
                                  }
                                });
                                tmp31 = obj4;
                              }
                            }
                            obj3.request_response_headers = tmp31;
                            obj3.video_holdback = details.holdBack && secondsToMs(details.holdBack);
                            details.holdBack && secondsToMs(details.holdBack);
                            obj3.video_part_holdback = details.partHoldBack && secondsToMs(details.partHoldBack);
                            details.partHoldBack && secondsToMs(details.partHoldBack);
                            obj3.video_part_target_duration = details.partTarget && secondsToMs(details.partTarget);
                            details.partTarget && secondsToMs(details.partTarget);
                            obj3.video_target_duration = details.targetduration && secondsToMs(details.targetduration);
                            obj3.video_source_is_live = details.live;
                            const _isNaN = isNaN;
                            let tmp37;
                            details.targetduration && secondsToMs(details.targetduration);
                            if (!isNaN(sum)) {
                              tmp37 = sum;
                            }
                            obj3.player_manifest_newest_program_time = tmp37;
                            if (typeof tmp24 === "function") {
                              mux.emit(id, "requestcompleted", obj3);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                        items = ["localhost"];
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
              hlsjs.on(tmp.Events.LEVEL_LOADED, fn2);
              fn3 = function k(request_event_type, arg1) {
                let networkDetails;
                let stats;
                let tmp4;
                let tmp5;
                ({ networkDetails, stats } = arg1);
                if (typeof He === "function") {
                  let obj;
                  if (stats) {
                    const navigationStartResult = closure_2_47.navigationStart();
                    const loading = stats.loading;
                    const _Math = Math;
                    const obj2 = {
                      bytesLoaded: stats.total,
                      requestStart: Math.round(navigationStartResult + (loading ? loading.start : stats.trequest)),
                      responseStart: Math.round(navigationStartResult + tmp4),
                      responseEnd: Math.round(navigationStartResult + tmp5),
                    };
                    const _Math2 = Math;
                    const _Math3 = Math;
                    obj = obj2;
                    tmp4 = loading ? loading.first : stats.tfirst;
                    tmp5 = loading ? loading.end : stats.tload;
                  } else {
                    obj = {};
                  }
                  const obj4 = {
                    request_event_type,
                    request_bytes_loaded: null,
                    request_start: null,
                    request_response_start: null,
                    request_response_end: null,
                    request_type: "manifest",
                    request_hostname: null,
                    request_response_headers: null,
                  };
                  ({
                    bytesLoaded: obj3.request_bytes_loaded,
                    requestStart: obj3.request_start,
                    responseStart: obj3.request_response_start,
                    responseEnd: obj3.request_response_end,
                  } = obj);
                  if (typeof closure_2_44 === "function") {
                    if (typeof re === "function") {
                      if (typeof tmp.url === "string") {
                        if ("" !== tmp.url) {
                          const str2 = (tmp.url.match(
                            /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                          ) || [])[4];
                          let first;
                          if (str2) {
                            first = (str2.match(/[^\.]+\.[^\.]+$/) || [])[0];
                            str2.match(/[^\.]+\.[^\.]+$/) || [];
                          }
                          items = [str2, first];
                        }
                        obj4.request_hostname = items[0];
                        if (typeof Se === "function") {
                          let tmp15;
                          if (networkDetails) {
                            if (typeof networkDetails.getAllResponseHeaders === "function") {
                              let str3 = networkDetails.getAllResponseHeaders();
                              obj7 = {};
                              if (!str3) {
                                str3 = "";
                              }
                              const str4 = str3.trim();
                              const parts = str4.split(/[\r\n]+/);
                              const item = parts.forEach((item) => {
                                const tmp = item;
                                if (tmp) {
                                  const parts = item.split(": ");
                                  const str2 = parts.shift();
                                  let tmp2 = str2;
                                  if (tmp2) {
                                    let tmp4 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                                    if (!tmp4) {
                                      const formatted = str2.toLowerCase();
                                      tmp4 = 0 === formatted.indexOf("x-litix-");
                                    }
                                    tmp2 = tmp4;
                                  }
                                  if (tmp2) {
                                    obj2[str2] = parts.join(": ");
                                  }
                                }
                              });
                              tmp15 = obj7;
                            }
                          }
                          obj4.request_response_headers = tmp15;
                          if (typeof tmp8 === "function") {
                            mux.emit(id, "requestcompleted", obj4);
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                      items = ["localhost"];
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
              hlsjs.on(tmp.Events.AUDIO_TRACK_LOADED, fn3);
              fn4 = function h(request_event_type, arg1) {
                let bytesLoaded;
                let first1;
                let frag;
                let networkDetails;
                let requestStart;
                let responseEnd;
                let responseStart;
                let responseURL;
                let stats;
                let tmp17;
                let tmp3;
                let tmp4;
                ({ stats, networkDetails, frag } = arg1);
                if (!stats) {
                  stats = frag.stats;
                }
                if (typeof He === "function") {
                  let obj;
                  let obj3;
                  if (stats) {
                    const navigationStartResult = closure_2_47.navigationStart();
                    const loading = stats.loading;
                    const _Math = Math;
                    const obj2 = {
                      bytesLoaded: stats.total,
                      requestStart: Math.round(navigationStartResult + (loading ? loading.start : stats.trequest)),
                      responseStart: Math.round(navigationStartResult + tmp3),
                      responseEnd: Math.round(navigationStartResult + tmp4),
                    };
                    const _Math2 = Math;
                    const _Math3 = Math;
                    obj = obj2;
                    tmp3 = loading ? loading.first : stats.tfirst;
                    tmp4 = loading ? loading.end : stats.tload;
                  } else {
                    obj = {};
                  }
                  let tmp6;
                  ({ bytesLoaded, requestStart, responseStart, responseEnd } = obj);
                  if (networkDetails) {
                    if (typeof Se === "function") {
                      let tmp8;
                      if (networkDetails) {
                        if (typeof networkDetails.getAllResponseHeaders === "function") {
                          let str = networkDetails.getAllResponseHeaders();
                          obj3 = {};
                          if (!str) {
                            str = "";
                          }
                          const str2 = str.trim();
                          const parts = str2.split(/[\r\n]+/);
                          const item = parts.forEach((item) => {
                            const tmp = item;
                            if (tmp) {
                              const parts = item.split(": ");
                              const str2 = parts.shift();
                              let tmp2 = str2;
                              if (tmp2) {
                                let tmp4 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                                if (!tmp4) {
                                  const formatted = str2.toLowerCase();
                                  tmp4 = 0 === formatted.indexOf("x-litix-");
                                }
                                tmp2 = tmp4;
                              }
                              if (tmp2) {
                                obj2[str2] = parts.join(": ");
                              }
                            }
                          });
                          tmp8 = obj3;
                        }
                      }
                      tmp6 = tmp8;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  const obj4 = {
                    request_event_type,
                    request_bytes_loaded: bytesLoaded,
                    request_start: requestStart,
                    request_response_start: responseStart,
                    request_response_end: responseEnd,
                    request_hostname: first1,
                    request_id: tmp17,
                    request_response_headers: tmp6,
                    request_media_duration: frag.duration,
                    request_url: responseURL,
                  };
                  first1 = undefined;
                  if (networkDetails) {
                    if (typeof closure_2_44 === "function") {
                      if (typeof re === "function") {
                        if (typeof networkDetails.responseURL === "string") {
                          if ("" !== networkDetails.responseURL) {
                            const str4 = (networkDetails.responseURL.match(
                              /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                            ) || [])[4];
                            let first;
                            if (str4) {
                              first = (str4.match(/[^\.]+\.[^\.]+$/) || [])[0];
                              str4.match(/[^\.]+\.[^\.]+$/) || [];
                            }
                            items = [str4, first];
                          }
                          first1 = items[0];
                        }
                        items = ["localhost"];
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  tmp17 = undefined;
                  if (tmp6) {
                    obj3 = tmp6;
                    let tmp18;
                    if (tmp6) {
                      const found = closure_2_49.find((item) => undefined !== obj2[item]);
                      let tmp21;
                      if (found) {
                        tmp21 = tmp6[found];
                      }
                      tmp18 = tmp21;
                    }
                    tmp17 = tmp18;
                  }
                  responseURL = undefined;
                  if (null != networkDetails) {
                    responseURL = networkDetails.responseURL;
                  }
                  if ("main" === frag.type) {
                    obj4.request_type = "media";
                    obj4.request_current_level = frag.level;
                    const tmp25 = hlsjs.levels[frag.level] || {};
                    obj4.request_video_width = tmp25.width;
                    const tmp26 = hlsjs.levels[frag.level] || {};
                    obj4.request_video_height = tmp26.height;
                    const tmp27 = hlsjs.levels[frag.level] || {};
                    obj4.request_labeled_bitrate = tmp27.bitrate;
                  } else {
                    obj4.request_type = frag.type;
                  }
                  if (typeof u === "function") {
                    mux.emit(id, "requestcompleted", obj4);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
              hlsjs.on(tmp.Events.FRAG_LOADED, fn4);
              fn5 = function c(arg0, frag) {
                frag = frag.frag;
                if (typeof s === "function") {
                  const _parseInt = parseInt;
                  const parsed = parseInt(closure_3.version);
                  let programDateTime;
                  const tmp5 = 1 === parsed && null !== frag.programDateTime;
                  if (tmp5) {
                    programDateTime = frag.programDateTime;
                  }
                  const tmp8 = 0 === parsed && null !== frag.pdt;
                  if (tmp8) {
                    programDateTime = frag.pdt;
                  }
                  const obj = { currentFragmentPDT: programDateTime, currentFragmentStart: secondsToMs(tmp) };
                  if (typeof u === "function") {
                    mux.emit(id, "fragmentchange", obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
              hlsjs.on(tmp.Events.FRAG_CHANGED, fn5);
              fn6 = function m(arg0, url) {
                let details;
                let fatal;
                let frag;
                let networkDetails;
                let obj2;
                let response;
                let tmp;
                let type;
                ({ details, response, frag, networkDetails } = url);
                let str;
                ({ type, fatal } = url);
                if (null != frag) {
                  str = frag.url;
                }
                if (!str) {
                  str = url.url;
                }
                if (!str) {
                  str = "";
                }
                if (networkDetails) {
                  if (typeof Se === "function") {
                    let tmp3;
                    if (networkDetails) {
                      if (typeof networkDetails.getAllResponseHeaders === "function") {
                        let str2 = networkDetails.getAllResponseHeaders();
                        obj2 = {};
                        if (!str2) {
                          str2 = "";
                        }
                        const str3 = str2.trim();
                        let parts = str3.split(/[\r\n]+/);
                        const item = parts.forEach((item) => {
                          const tmp = item;
                          if (tmp) {
                            const parts = item.split(": ");
                            const str2 = parts.shift();
                            let tmp2 = str2;
                            if (tmp2) {
                              let tmp4 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                              if (!tmp4) {
                                const formatted = str2.toLowerCase();
                                tmp4 = 0 === formatted.indexOf("x-litix-");
                              }
                              tmp2 = tmp4;
                            }
                            if (tmp2) {
                              obj2[str2] = parts.join(": ");
                            }
                          }
                        });
                        tmp3 = obj2;
                      }
                    }
                    tmp = tmp3;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                const tmp6 =
                  details === closure_3.ErrorDetails.MANIFEST_LOAD_ERROR ||
                  details === closure_3.ErrorDetails.MANIFEST_LOAD_TIMEOUT ||
                  details === closure_3.ErrorDetails.FRAG_LOAD_ERROR ||
                  details === closure_3.ErrorDetails.FRAG_LOAD_TIMEOUT ||
                  details === closure_3.ErrorDetails.LEVEL_LOAD_ERROR ||
                  details === closure_3.ErrorDetails.LEVEL_LOAD_TIMEOUT ||
                  details === closure_3.ErrorDetails.AUDIO_TRACK_LOAD_ERROR ||
                  details === closure_3.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ||
                  details === closure_3.ErrorDetails.SUBTITLE_LOAD_ERROR ||
                  details === closure_3.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ||
                  details === closure_3.ErrorDetails.KEY_LOAD_ERROR ||
                  details === closure_3.ErrorDetails.KEY_LOAD_TIMEOUT;
                if (tmp6) {
                  const obj = {
                    request_error: details,
                    request_url: str,
                    request_hostname: null,
                    request_id: null,
                    request_type: null,
                    request_error_code: null,
                    request_error_text: null,
                  };
                  if (typeof closure_2_44 === "function") {
                    if (typeof re === "function") {
                      if (typeof str === "string") {
                        if ("" !== str) {
                          const str4 = (str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) ||
                            [])[4];
                          let first;
                          if (str4) {
                            first = (str4.match(/[^\.]+\.[^\.]+$/) || [])[0];
                            str4.match(/[^\.]+\.[^\.]+$/) || [];
                          }
                          items = [str4, first];
                        }
                        obj.request_hostname = items[0];
                        let tmp13;
                        if (tmp) {
                          obj2 = tmp;
                          let tmp14;
                          if (tmp) {
                            const found = closure_2_49.find((item) => undefined !== obj2[item]);
                            let tmp17;
                            if (found) {
                              tmp17 = tmp[found];
                            }
                            tmp14 = tmp17;
                          }
                          tmp13 = tmp14;
                        }
                        obj.request_id = tmp13;
                        let str6 = "media";
                        if (details !== closure_3.ErrorDetails.FRAG_LOAD_ERROR) {
                          str6 = "media";
                          if (details !== closure_3.ErrorDetails.FRAG_LOAD_TIMEOUT) {
                            let str7 = "audio";
                            if (details !== closure_3.ErrorDetails.AUDIO_TRACK_LOAD_ERROR) {
                              str7 = "audio";
                              if (details !== closure_3.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT) {
                                let str9 = "subtitle";
                                if (details !== closure_3.ErrorDetails.SUBTITLE_LOAD_ERROR) {
                                  str9 = "subtitle";
                                  if (details !== closure_3.ErrorDetails.SUBTITLE_LOAD_TIMEOUT) {
                                    let str10;
                                    if (details === closure_3.ErrorDetails.KEY_LOAD_ERROR) {
                                      str10 = "encryption";
                                    } else {
                                      str10 = "manifest";
                                    }
                                    str9 = str10;
                                  }
                                }
                                str7 = str9;
                              }
                            }
                            str6 = str7;
                          }
                        }
                        obj.request_type = str6;
                        let code;
                        if (null != response) {
                          code = response.code;
                        }
                        obj.request_error_code = code;
                        let text;
                        if (null != response) {
                          text = response.text;
                        }
                        obj.request_error_text = text;
                        if (typeof tmp7 === "function") {
                          mux.emit(id, "requestfailed", obj);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                      items = ["localhost"];
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                if (fatal) {
                  let str13 = "";
                  const concat = "".concat;
                  if (str) {
                    const concat2 = "url: ".concat;
                    str13 = "url: ".concat(str, "\n");
                  }
                  let str16 = "";
                  const combined = concat(str13);
                  const concat3 = "".concat;
                  if (response) {
                    if (response.code) {
                      const concat4 = "response: ".concat;
                      const combined1 = "response: ".concat(response.code, ", ");
                      str16 = combined1.concat(response.text, "\n");
                    } else {
                      str16 = "";
                    }
                  }
                  let str20 = "";
                  const sum = combined + concat3(str16);
                  const concat5 = "".concat;
                  if (url.reason) {
                    const concat6 = "failure reason: ".concat;
                    str20 = "failure reason: ".concat(url.reason, "\n");
                  }
                  let str23 = "";
                  const sum1 = sum + concat5(str20);
                  const concat7 = "".concat;
                  if (url.level) {
                    const concat8 = "level: ".concat;
                    str23 = "level: ".concat(url.level, "\n");
                  }
                  let str26 = "";
                  const sum2 = sum1 + concat7(str23);
                  const concat9 = "".concat;
                  if (url.parent) {
                    const concat10 = "parent stream controller: ".concat;
                    str26 = "parent stream controller: ".concat(url.parent, "\n");
                  }
                  let str29 = "";
                  const sum3 = sum2 + concat9(str26);
                  const concat11 = "".concat;
                  if (url.buffer) {
                    const concat12 = "buffer length: ".concat;
                    str29 = "buffer length: ".concat(url.buffer, "\n");
                  }
                  let str32 = "";
                  const sum4 = sum3 + concat11(str29);
                  const concat13 = "".concat;
                  if (url.error) {
                    const concat14 = "error: ".concat;
                    str32 = "error: ".concat(url.error, "\n");
                  }
                  let str35 = "";
                  const sum5 = sum4 + concat13(str32);
                  const concat15 = "".concat;
                  if (url.event) {
                    const concat16 = "event: ".concat;
                    str35 = "event: ".concat(url.event, "\n");
                  }
                  let str38 = "";
                  const sum6 = sum5 + concat15(str35);
                  const concat17 = "".concat;
                  if (url.err) {
                    let message;
                    const concat18 = "error message: ".concat;
                    if (null !== url.err) {
                      if (undefined !== url.err) {
                        message = err.message;
                      }
                    }
                    str38 = concat18(message, "\n");
                  }
                  const obj3 = {
                    player_error_code: type,
                    player_error_message: details,
                    player_error_context: sum6 + concat17(str38),
                  };
                  if (typeof u === "function") {
                    mux.emit(id, "error", obj3);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              };
              hlsjs.on(tmp.Events.ERROR, fn6);
              fn7 = function w(request_event_type, frag) {
                frag = frag.frag;
                const obj = {
                  request_event_type,
                  request_url: (frag && frag._url) || "",
                  request_type: "media",
                  request_hostname: null,
                };
                if (typeof closure_2_44 === "function") {
                  if (typeof re === "function") {
                    if ((typeof frag && frag._url) || "" === "string") {
                      if ("" !== ((frag && frag._url) || "")) {
                        const str2 = (((frag && frag._url) || "").match(
                          /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                        ) || [])[4];
                        let first;
                        if (str2) {
                          first = (str2.match(/[^\.]+\.[^\.]+$/) || [])[0];
                          str2.match(/[^\.]+\.[^\.]+$/) || [];
                        }
                        items = [str2, first];
                      }
                      obj.request_hostname = items[0];
                      if (typeof tmp === "function") {
                        mux.emit(id, "requestcanceled", obj);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    items = ["localhost"];
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
              hlsjs.on(tmp.Events.FRAG_LOAD_EMERGENCY_ABORTED, fn7);
              fn8 = function x(arg0, arg1) {
                let videoCodec;
                if (hlsjs.levels[arg1.level]) {
                  if (hlsjs.levels[arg1.level].attrs) {
                    if (hlsjs.levels[arg1.level].attrs.BANDWIDTH) {
                      let tmp4;
                      const BANDWIDTH = tmp.attrs.BANDWIDTH;
                      const _parseFloat = parseFloat;
                      const parsed = parseFloat(tmp.attrs["FRAME-RATE"]);
                      const _isNaN = isNaN;
                      if (!isNaN(parsed)) {
                        tmp4 = parsed;
                      }
                      if (BANDWIDTH) {
                        const obj = {
                          video_source_fps: tmp4,
                          video_source_bitrate: BANDWIDTH,
                          video_source_width: null,
                          video_source_height: null,
                          video_source_rendition_name: null,
                          video_source_codec: videoCodec,
                        };
                        ({
                          width: obj.video_source_width,
                          height: obj.video_source_height,
                          name: obj.video_source_rendition_name,
                        } = hlsjs.levels[arg1.level]);
                        videoCodec = undefined;
                        if (null != hlsjs.levels[arg1.level]) {
                          videoCodec = tmp.videoCodec;
                        }
                        if (typeof u === "function") {
                          mux.emit(id, "renditionchange", obj);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        log.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
                      }
                    }
                  }
                }
              };
              hlsjs.on(tmp.Events.LEVEL_SWITCHED, fn8);
              hlsjs._stopMuxMonitor = () => {
                hlsjs.off(closure_3.Events.MANIFEST_LOADED, fn);
                hlsjs.off(closure_3.Events.LEVEL_LOADED, fn2);
                hlsjs.off(closure_3.Events.AUDIO_TRACK_LOADED, fn3);
                hlsjs.off(closure_3.Events.FRAG_LOADED, fn4);
                hlsjs.off(closure_3.Events.FRAG_CHANGED, fn5);
                hlsjs.off(closure_3.Events.ERROR, fn6);
                hlsjs.off(closure_3.Events.FRAG_LOAD_EMERGENCY_ABORTED, fn7);
                hlsjs.off(closure_3.Events.LEVEL_SWITCHED, fn8);
                hlsjs.off(closure_3.Events.DESTROYING, hlsjs._stopMuxMonitor);
                delete hlsjs["_stopMuxMonitor"];
              };
              hlsjs.on(tmp.Events.DESTROYING, hlsjs._stopMuxMonitor);
            } else {
              let str = "performance timing not supported. Not tracking HLS.js.";
              log.warn("performance timing not supported. Not tracking HLS.js.");
            }
          })(mux, id, hlsjs, {}, Hls);
        }
      } else {
        let log = self.mux.log;
        let str = "You must pass a valid hlsjs instance in order to track it.";
        log.warn("You must pass a valid hlsjs instance in order to track it.");
      }
    },
  },
  {
    key: "removeHLSJS",
    value() {
      const self = this;
      if (this.hlsjs) {
        const hlsjs = self.hlsjs;
        const tmp = hlsjs && typeof hlsjs._stopMuxMonitor === "function";
        if (tmp) {
          hlsjs._stopMuxMonitor();
        }
        self.hlsjs = undefined;
      }
    },
  },
  {
    key: "addDashJS",
    value(dashjs) {
      let closure_1;
      let tmp3;
      const self = this;
      if (dashjs.dashjs) {
        if (self.dashjs) {
          const log3 = self.mux.log;
          log3.warn("An instance of Dash.js is already being monitored for this player.");
        } else {
          self.dashjs = dashjs.dashjs;
          const mux = self.mux;
          dashjs = dashjs.dashjs;
          if (typeof Ct === "function") {
            create = tmp3;
            const log2 = mux.log;
            if (dashjs) {
              if (dashjs.on) {
                let tmp5 = ((dashjs) => {
                  try {
                    const getVersion = dashjs.getVersion;
                    let first;
                    if (null !== getVersion) {
                      if (undefined !== getVersion) {
                        const callResult = getVersion.call(dashjs);
                        if (null !== callResult) {
                          if (undefined !== callResult) {
                            const parts = str.split(".");
                            first = parts.map((item) => parseInt(item))[0];
                          }
                        }
                      }
                    }
                    return first;
                  } catch (err) {
                    return false;
                  }
                })(dashjs);
                function o(arg0, arg1) {}
                fn = function s(arg0) {
                  let data;
                  let type;
                  ({ data, type } = arg0);
                  if (!data) {
                    data = {};
                  }
                  const obj = {
                    request_event_type: type,
                    request_start: 0,
                    request_response_start: 0,
                    request_response_end: 0,
                    request_bytes_loaded: -1,
                    request_type: "manifest",
                    request_hostname: null,
                    request_url: null,
                  };
                  if (typeof F === "function") {
                    if (typeof re === "function") {
                      if (typeof data.url === "string") {
                        if ("" !== data.url) {
                          const str2 = (data.url.match(
                            /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                          ) || [])[4];
                          let first;
                          if (str2) {
                            first = (str2.match(/[^\.]+\.[^\.]+$/) || [])[0];
                            str2.match(/[^\.]+\.[^\.]+$/) || [];
                          }
                          items = [str2, first];
                        }
                        obj.request_hostname = items[0];
                        obj.request_url = data.url;
                        if (typeof tmp === "function") {
                          mux.emit(create, "requestcompleted", obj);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                      items = ["localhost"];
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                };
                dashjs.on("manifestLoaded", fn);
                let closure_6 = {};
                function f(arg0) {}
                const fn2 = function k(arg0) {
                  let bitrateList;
                  let chunk;
                  let request;
                  let tmp2;
                  let type;
                  let type2;
                  ({ chunk, type, request } = arg0);
                  if (!chunk) {
                    chunk = {};
                  }
                  ({ type: type2, bitrateList } = chunk.mediaInfo || {});
                  const obj = {};
                  if (!bitrateList) {
                    bitrateList = [];
                  }
                  const item = bitrateList.forEach((item, index) => {
                    obj[index] = {};
                    ({ width: obj[index].width, height: obj[index].height, bandwidth: obj[index].bitrate } = item);
                    obj[index].attrs = {};
                  });
                  if ("video" === type2) {
                    closure_6.video = obj;
                    tmp2 = closure_6;
                  } else if ("audio" === type2) {
                    closure_6.audio = obj;
                    tmp2 = closure_6;
                  } else {
                    tmp2 = closure_6;
                    closure_6.media = obj;
                  }
                  const tmp5 = Nt(request, dashjs);
                  const obj2 = {
                    request_event_type: type,
                    request_start: tmp5.requestStart,
                    request_response_start: tmp5.requestResponseStart,
                    request_response_end: tmp5.requestResponseEnd,
                    request_bytes_loaded: -1,
                    request_type: `${type2}_init`,
                    request_response_headers: tmp5.requestResponseHeaders,
                    request_hostname: tmp5.requestHostname,
                    request_id: tmp5.requestId,
                    request_url: tmp5.requestUrl,
                    request_media_duration: tmp5.requestMediaDuration,
                    request_rendition_lists: tmp2,
                  };
                  if (typeof o === "function") {
                    mux.emit(create, "requestcompleted", obj2);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                };
                if (tmp5 >= 4) {
                  dashjs.on("initFragmentLoaded", fn2);
                } else {
                  dashjs.on("initFragmentLoaded", (fragmentModel) => {
                    fragmentModel = fragmentModel.fragmentModel;
                    if (typeof f === "function") {
                      let tmp3 = null;
                      if (typeof fragmentModel.getRequests === "function") {
                        const requests = fragmentModel.getRequests({ state: "executed" });
                        let tmp4 = null;
                        if (0 !== requests.length) {
                          tmp4 = requests[requests.length - 1];
                        }
                        tmp3 = tmp4;
                      }
                      const obj = { type: tmp, request: tmp3, chunk: tmp2 };
                      fn2(obj);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                }
                fn3 = function c(arg0) {
                  let chunk;
                  let mediaInfo;
                  let obj;
                  let request;
                  let requestBytesLoaded;
                  let requestHostname;
                  let requestId;
                  let requestMediaDuration;
                  let requestResponseEnd;
                  let requestResponseHeaders;
                  let requestResponseStart;
                  let requestStart;
                  let requestUrl;
                  let start;
                  let type;
                  ({ chunk, type, request } = arg0);
                  if (!chunk) {
                    chunk = {};
                  }
                  ({ mediaInfo, start } = chunk);
                  if (!mediaInfo) {
                    mediaInfo = {};
                  }
                  const type2 = mediaInfo.type;
                  ({
                    requestStart,
                    requestResponseStart,
                    requestResponseEnd,
                    requestBytesLoaded,
                    requestResponseHeaders,
                    requestMediaDuration,
                    requestHostname,
                    requestUrl,
                    requestId,
                  } = Nt(request, dashjs));
                  Nt(request, dashjs);
                  const qualityFor = dashjs.getQualityFor(type2);
                  const bitrateList = dashjs.getCurrentTrackFor(type2).bitrateList;
                  if (bitrateList) {
                    obj = {
                      currentLevel: qualityFor,
                      renditionWidth: bitrateList[qualityFor].width || null,
                      renditionHeight: bitrateList[qualityFor].height || null,
                      renditionBitrate: bitrateList[qualityFor].bandwidth,
                    };
                    const obj2 = {
                      currentLevel: qualityFor,
                      renditionWidth: bitrateList[qualityFor].width || null,
                      renditionHeight: bitrateList[qualityFor].height || null,
                      renditionBitrate: bitrateList[qualityFor].bandwidth,
                    };
                  } else {
                    obj = {};
                  }
                  const obj3 = {
                    request_event_type: type,
                    request_start: requestStart,
                    request_response_start: requestResponseStart,
                    request_response_end: requestResponseEnd,
                    request_bytes_loaded: requestBytesLoaded,
                    request_type: type2,
                    request_response_headers: requestResponseHeaders,
                    request_hostname: requestHostname,
                    request_id: requestId,
                    request_url: requestUrl,
                    request_media_start_time: start,
                    request_media_duration: requestMediaDuration,
                    request_current_level: obj.currentLevel,
                    request_labeled_bitrate: obj.renditionBitrate,
                    request_video_width: obj.renditionWidth,
                    request_video_height: obj.renditionHeight,
                  };
                  if (typeof o === "function") {
                    mux.emit(create, "requestcompleted", obj3);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                };
                if (tmp5 >= 4) {
                  let str7 = "mediaFragmentLoaded";
                  dashjs.on("mediaFragmentLoaded", fn3);
                } else {
                  let str6 = "mediaFragmentLoaded";
                  dashjs.on("mediaFragmentLoaded", (fragmentModel) => {
                    fragmentModel = fragmentModel.fragmentModel;
                    if (typeof f === "function") {
                      let tmp3 = null;
                      if (typeof fragmentModel.getRequests === "function") {
                        const requests = fragmentModel.getRequests({ state: "executed" });
                        let tmp4 = null;
                        if (0 !== requests.length) {
                          tmp4 = requests[requests.length - 1];
                        }
                        tmp3 = tmp4;
                      }
                      const obj = { type: tmp, request: tmp3, chunk: tmp2 };
                      fn3(obj);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                }
                let closure_10 = {
                  video: "duration",
                  audio: "toCharArray$esjava$1",
                  totalBitrate: "toCharArray$esjava$1",
                };
                fn4 = function x(newQuality, arg1, arg2) {
                  let closure_0 = newQuality;
                  if (typeof newQuality.newQuality === "number") {
                    const mediaType = newQuality.mediaType;
                    if ("audio" === mediaType) {
                      const bitrateInfoListFor = dashjs.getBitrateInfoListFor(mediaType);
                      const found = bitrateInfoListFor.find(
                        (qualityIndex) => qualityIndex.qualityIndex === newQuality.newQuality,
                      );
                      if (found) {
                        if (typeof found.bitrate === "number") {
                          const obj2 = {};
                          ue(obj2, found);
                          const obj3 = { codec: dashjs.getCurrentTrackFor(mediaType).codec };
                          const _Object5 = Object;
                          const _Object6 = Object;
                          if (Object.getOwnPropertyDescriptors) {
                            const _Object4 = Object;
                            _Object6.defineProperties(obj2, Object.getOwnPropertyDescriptors(obj3));
                          } else {
                            const _Object6Result = _Object6(obj3);
                            const _Object = Object;
                            const keys = Object.keys(_Object6Result);
                            const _Object2 = Object;
                            if (Object.getOwnPropertySymbols) {
                              const _Object3 = Object;
                              const push = keys.push;
                              push.apply(keys, Object.getOwnPropertySymbols(_Object6Result));
                            }
                            const item = keys.forEach((item) => {
                              Object.defineProperty(obj7, item, Object.getOwnPropertyDescriptor(obj8, item));
                            });
                          }
                          closure_10[mediaType] = obj2;
                          let tmp6;
                          if (closure_10.video) {
                            if (typeof closure_10.video.bitrate === "number") {
                              if (closure_10.video.width) {
                                if (closure_10.video.height) {
                                  const bitrate = closure_10.video.bitrate;
                                  let sum = bitrate;
                                  const tmp9 = closure_10.audio && typeof closure_10.audio.bitrate === "number";
                                  if (tmp9) {
                                    sum = bitrate + closure_10.audio.bitrate;
                                  }
                                  if (sum !== closure_10.totalBitrate) {
                                    closure_10.totalBitrate = sum;
                                    const obj4 = {
                                      video_source_bitrate: sum,
                                      video_source_height: closure_10.video.height,
                                      video_source_width: closure_10.video.width,
                                      video_source_codec: null,
                                    };
                                    const str7 = closure_10.video.codec;
                                    if (typeof pa === "function") {
                                      const match = str7.match(/.*codecs\*?="(.*)"/);
                                      let tmp13;
                                      if (null !== match) {
                                        if (undefined !== match) {
                                          tmp13 = match[1];
                                        }
                                      }
                                      obj4.video_source_codec = tmp13;
                                      tmp6 = obj4;
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  }
                                }
                              }
                              log2.warn("have bitrate info for video but missing width/height");
                            }
                          }
                          if (tmp6) {
                            if (typeof o === "function") {
                              mux.emit(create, "renditionchange", tmp6);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        }
                      }
                      const concat = "missing bitrate info for ".concat;
                      log2.warn("missing bitrate info for ".concat(mediaType));
                    }
                  } else {
                    log2.warn("missing evt.newQuality in qualityChangeRendered event", newQuality);
                  }
                };
                dashjs.on("qualityChangeRendered", fn4);
                fn5 = function v(arg0) {
                  let mediaType;
                  let request;
                  ({ request, mediaType } = arg0);
                  if (!request) {
                    request = {};
                  }
                  const obj = {
                    request_event_type: `${request.type}_${request.action}`,
                    request_url: request.url,
                    request_type: mediaType,
                    request_hostname: null,
                  };
                  if (typeof F === "function") {
                    if (typeof re === "function") {
                      if (typeof request.url === "string") {
                        if ("" !== request.url) {
                          const str2 = (request.url.match(
                            /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                          ) || [])[4];
                          let first;
                          if (str2) {
                            first = (str2.match(/[^\.]+\.[^\.]+$/) || [])[0];
                            str2.match(/[^\.]+\.[^\.]+$/) || [];
                          }
                          items = [str2, first];
                        }
                        obj.request_hostname = items[0];
                        if (typeof o === "function") {
                          mux.emit(create, "requestcanceled", obj);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                      items = ["localhost"];
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                };
                dashjs.on("fragmentLoadingAbandoned", fn5);
                fn6 = function p(error) {
                  let message;
                  error = error.error;
                  let request;
                  if (null != error) {
                    const data = error.data;
                    if (null !== data) {
                      if (undefined !== data) {
                        request = data.request;
                      }
                    }
                  }
                  if (!request) {
                    request = {};
                  }
                  let response;
                  if (null != error) {
                    const data2 = error.data;
                    if (null !== data2) {
                      if (undefined !== data2) {
                        response = data2.response;
                      }
                    }
                  }
                  if (!response) {
                    response = {};
                  }
                  let code;
                  if (null != error) {
                    code = error.code;
                  }
                  if (27 === code) {
                    const obj2 = {
                      request_error: `${obj.type}_${obj.action}`,
                      request_url: request.url,
                      request_hostname: null,
                      request_type: null,
                      request_error_code: null,
                      request_error_text: null,
                    };
                    if (typeof F === "function") {
                      if (typeof re === "function") {
                        if (typeof request.url === "string") {
                          if ("" !== request.url) {
                            const str = (request.url.match(
                              /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                            ) || [])[4];
                            let first;
                            if (str) {
                              first = (str.match(/[^\.]+\.[^\.]+$/) || [])[0];
                              str.match(/[^\.]+\.[^\.]+$/) || [];
                            }
                            items = [str, first];
                          }
                          obj2.request_hostname = items[0];
                          obj2.request_type = request.mediaType;
                          ({ status: obj4.request_error_code, statusText: obj4.request_error_text } = response);
                          if (typeof tmp21 === "function") {
                            mux.emit(create, "requestfailed", obj2);
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                        items = ["localhost"];
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  if (null != request) {
                    if (request.url) {
                      const concat = "url: ".concat;
                      "url: ".concat(request.url, "\n");
                    }
                  }
                  if (null == response) {
                    let str6 = "";
                    if (null != response) {
                      str6 = "";
                    }
                    let code1;
                    const sum = tmp9 + tmp10(str6);
                    if (null != error) {
                      code1 = error.code;
                    }
                    const obj3 = { player_error_code: code1, player_error_message: message, player_error_context: sum };
                    message = undefined;
                    if (null != error) {
                      message = error.message;
                    }
                    if (typeof o === "function") {
                      mux.emit(create, "error", obj3);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  let status;
                  const concat2 = "response: ".concat;
                  if (null != response) {
                    status = response.status;
                  }
                  let statusText;
                  const concat3 = concat2(status, ", ").concat;
                  concat2(status, ", ");
                  if (null != response) {
                    statusText = response.statusText;
                  }
                  str6 = concat3(statusText, "\n");
                };
                dashjs.on("error", fn6);
                dashjs._stopMuxMonitor = () => {
                  dashjs.off("manifestLoaded", fn);
                  dashjs.off("initFragmentLoaded", fn2);
                  dashjs.off("mediaFragmentLoaded", fn3);
                  dashjs.off("qualityChangeRendered", fn4);
                  dashjs.off("error", fn6);
                  dashjs.off("fragmentLoadingAbandoned", fn5);
                  delete dashjs["_stopMuxMonitor"];
                };
              }
            }
            let str2 = "Invalid dash.js player reference. Monitoring blocked.";
            log2.warn("Invalid dash.js player reference. Monitoring blocked.");
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      } else {
        const log = self.mux.log;
        let str = "You must pass a valid dashjs instance in order to track it.";
        log.warn("You must pass a valid dashjs instance in order to track it.");
      }
    },
  },
  {
    key: "removeDashJS",
    value() {
      const self = this;
      if (this.dashjs) {
        const dashjs = self.dashjs;
        const tmp = dashjs && typeof dashjs._stopMuxMonitor === "function";
        if (tmp) {
          dashjs._stopMuxMonitor();
        }
        self.dashjs = undefined;
      }
    },
  },
];
N(t, items11);
let closure_102 = G(obj10.exports);
let closure_103 = [
  "loadstart",
  "pause",
  "play",
  "playing",
  "seeking",
  "seeked",
  "timeupdate",
  "ratechange",
  "stalled",
  "waiting",
  "error",
  "ended",
];
let closure_104 = {
  1: "MEDIA_ERR_ABORTED",
  2: "MEDIA_ERR_NETWORK",
  3: "MEDIA_ERR_DECODE",
  4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
};
const GResult1 = G(obj5.exports);
let tmp28 = GResult1.default && GResult1.default.WeakMap;
if (tmp28) {
  const _WeakMap = WeakMap;
  let self = this;
  let self2 = this;
  const weakMap = new WeakMap();
  const tmp30 = weakMap;
}
let c107 = "#EXT-X-TARGETDURATION";
let c108 = "#EXT-X-PART-INF";
let c109 = "#EXT-X-SERVER-CONTROL";
let c110 = "#EXTINF";
let c111 = "#EXT-X-PROGRAM-DATE-TIME";
let c112 = "#EXT-X-VERSION";
let c113 = "#EXT-X-SESSION-DATA";
class Ve {
  constructor(arg0) {
    const obj = { buffer: "", manifest: { segments: [], serverControl: {}, sessionData: {} }, currentUri: {} };
    obj.process(arg0);
    return obj.manifest;
  }
  process(arg0) {
    const self = this;
    this.buffer = this.buffer + arg0;
    const buffer = this.buffer;
    let index = buffer.indexOf("\n");
    if (index > -1) {
      do {
        let str = self.buffer;
        let processLineResult = self.processLine(str.substring(0, index));
        let str2 = self.buffer;
        self.buffer = str2.substring(index + 1);
        let buffer1 = self.buffer;
        index = buffer1.indexOf("\n");
      } while (index > -1);
    }
  }
  processLine(arr) {
    let str7;
    const index = arr.indexOf(":");
    if (typeof Ii === "function") {
      let items1;
      const num = -1;
      if (-1 === index) {
        items = [arr];
        items1 = items;
      } else {
        items1 = [arr.substring(0, index), arr.substring(index + 1)];
      }
      const first = items1[0];
      if (2 === items1.length) {
        if (typeof _t === "function") {
          let str = "yes";
          if ("yes" !== items1[1].toLowerCase()) {
            if ("no" !== items1[1].toLowerCase()) {
              let parsed = str10;
              if (-1 === items1[1].indexOf(":")) {
                const _parseFloat = parseFloat;
                parsed = parseFloat(str10);
              }
              const _isNaN = isNaN;
              if (isNaN(parsed)) {
                parsed = str10;
              }
            }
          }
          parsed = "yes" === str10.toLowerCase();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const self = this;
      if ("#" !== first[0]) {
        self.currentUri.uri = first;
        const segments = self.manifest.segments;
        arr = segments.push(self.currentUri);
        const targetDuration = self.manifest.targetDuration && !("duration" in self.currentUri);
        if (targetDuration) {
          self.currentUri.duration = self.manifest.targetDuration;
        }
        self.currentUri = {};
      } else if (c107 === first) {
        const _isFinite = isFinite;
        if (isFinite(tmp3)) {
          if (tmp3 >= 0) {
            self.manifest.targetDuration = tmp3;
            self.setHoldBack();
          }
        }
      } else if (c108 === first) {
        ct(self.manifest, items1);
        if (self.manifest.partInf.partTarget) {
          self.manifest.partTargetDuration = self.manifest.partInf.partTarget;
        }
        self.setHoldBack();
      } else if (c109 === first) {
        ct(self.manifest, items1);
        self.setHoldBack();
      } else if (c110 === first) {
        if (0 === tmp3) {
          self.currentUri.duration = 0.01;
        } else if (tmp3 > 0) {
          self.currentUri.duration = tmp3;
        }
      } else if (c111 === first) {
        const _Date = Date;
        const self2 = this;
        const self3 = this;
        const date = new Date(tmp3);
        if (!self.manifest.dateTimeString) {
          self.manifest.dateTimeString = tmp3;
          self.manifest.dateTimeObject = date;
        }
        self.currentUri.dateTimeString = tmp3;
        self.currentUri.dateTimeObject = date;
      } else if (c112 === first) {
        ct(self.manifest, items1);
      } else if (c113 === first) {
        if (typeof Li === "function") {
          const obj = {};
          if (items1[1]) {
            const searchResult = items1[1].search(",");
            const items2 = [items1[1].slice(0, searchResult), items1[1].slice(searchResult + 1)];
            const item = items2.forEach((item, index) => {
              let num;
              const str = item.replace(/['"]+/g, "");
              const parts = str.split("=");
              for (let num = 0; num < parts.length; num = num + 1) {
                if ("DATA-ID" === parts[num]) {
                  obj["DATA-ID"] = parts[1 - num];
                }
                if ("VALUE" === parts[num]) {
                  obj.VALUE = parts[1 - num];
                }
              }
            });
          }
          if (typeof Me === "function") {
            const obj4 = {};
            for (const key10062 in tmp7) {
              let tmp39 = tmp7[key10062];
              let prop = tmp39["DATA-ID"];
              if (-1 === prop.search("io.litix.data.")) {
                continue;
              } else {
                ({ "DATA-ID": str7, VALUE: obj3[str7.replace(str7, "io.litix.data.", "")] } = tmp39);
                continue;
              }
              continue;
            }
            const _Object = Object;
            const merged = Object.assign(self.manifest.sessionData, obj4);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  setHoldBack() {
    let partTargetDuration;
    let serverControl;
    let targetDuration;
    ({ serverControl, targetDuration, partTargetDuration } = this.manifest);
    if (serverControl) {
      const result = targetDuration && 3 * targetDuration;
      const result1 = partTargetDuration && 2 * partTargetDuration;
      if (targetDuration) {
        targetDuration = !serverControl.hasOwnProperty("holdBack");
      }
      if (targetDuration) {
        serverControl.holdBack = result;
      }
      const tmp3 = result && serverControl.holdBack < result;
      if (tmp3) {
        serverControl.holdBack = result;
      }
      const tmp4 = partTargetDuration && !serverControl.hasOwnProperty("partHoldBack");
      if (tmp4) {
        serverControl.partHoldBack = 3 * partTargetDuration;
      }
      if (partTargetDuration) {
        partTargetDuration = serverControl.partHoldBack < result1;
      }
      if (partTargetDuration) {
        serverControl.partHoldBack = result1;
      }
    }
  }
}
function ct(arg0, arg1) {
  let str = arg1[0];
  const str2 = str.replace("#EXT-X-", "");
  if (typeof Jr === "function") {
    const formatted = str2.toLowerCase();
    const arr = arg1[1];
    if (typeof Oi === "function") {
      let parsed1;
      if (arr.indexOf("=") > -1) {
        const str7 = arg1[1];
        if (typeof Pi === "function") {
          const parts = str7.split(",");
          let merged = {};
          let num2 = 0;
          let tmp11 = merged;
          if (parts.length > 0) {
            const str12 = parts[num2];
            while (typeof Ai === "function") {
              let obj = {};
              let parts1 = str12.split("=");
              if (parts1.length > 1) {
                let str20 = parts1[0];
                if (typeof Jr === "function") {
                  let formatted1 = str20.toLowerCase();
                  let str13 = parts1[1];
                  if (typeof _t === "function") {
                    if ("yes" !== str13.toLowerCase()) {
                      let parsed;
                      if ("no" !== str13.toLowerCase()) {
                        parsed = str13;
                        if (-1 === str13.indexOf(":")) {
                          let _parseFloat2 = parseFloat;
                          parsed = parseFloat(str13);
                        }
                        let _isNaN2 = isNaN;
                        if (isNaN(parsed)) {
                          parsed = str13;
                        }
                      }
                      obj[tmp16] = parsed;
                    }
                    parsed = "yes" === str13.toLowerCase();
                  } else {
                    let str22 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let str21 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
              let _Object = Object;
              merged = Object.assign(obj, merged);
              num2 = num2 + 1;
              tmp11 = merged;
            }
            throw new TypeError("Trying to call a non-function");
          }
          parsed1 = tmp9(tmp11, {});
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof _t === "function") {
        if ("yes" !== arg1[1].toLowerCase()) {
          if ("no" !== arg1[1].toLowerCase()) {
            parsed1 = str16;
            if (-1 === arg1[1].indexOf(":")) {
              const _parseFloat = parseFloat;
              parsed1 = parseFloat(str16);
            }
            const _isNaN = isNaN;
            if (isNaN(parsed1)) {
              parsed1 = str16;
            }
          }
        }
        parsed1 = "yes" === str16.toLowerCase();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      arg0[tmp2] = parsed1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function Jr(arg0) {}
function _t(arg0) {}
function Ai(arg0) {}
function Pi(arg0) {}
function Oi(arg0) {}
function Ii(arg0, arg1) {}
function Li(arg0) {}
let closure_122 = {};
function ne(keys) {
  let closure_1 = arguments;
  if (typeof keys === "string") {
    if (ne.hasOwnProperty(keys)) {
      const _default2 = GResult.default;
      const timerId = _default2.setTimeout(() => {
        closure_1 = splice.call(closure_1, 1);
        const obj = ne[keys];
        obj.apply(null, closure_1);
      }, 0);
    } else {
      logger.warn(`\`${keys}\` is an unknown task`);
    }
  } else if (typeof keys === "function") {
    const _default = GResult.default;
    const timerId1 = _default.setTimeout(() => {
      keys(ne);
    }, 0);
  } else {
    logger.warn(`\`${keys}\` is invalid.`);
  }
}
const obj12 = {
  safeCall: function ut(arg0, arg1, arg2, arg3) {
    let applyResult = arg3;
    if (arg0) {
      if (typeof arg0[arg1] === "function") {
        try {
          const obj = arg0[arg1];
          applyResult = obj.apply(arg0, arg2);
        } catch (tmp4) {
          logger.info("safeCall error", tmp4);
        }
      }
    }
    return applyResult;
  },
  safeIncrement: function P(arg0, arg1, arg2) {
    let num = 1;
    if (undefined !== arg2) {
      num = arg2;
    }
    arg0[arg1] = arg0[arg1] + num;
  },
  getComputedStyle: function dt(arg0, arg1) {
    let str = "";
    if (arg0) {
      str = "";
      if (arg1) {
        str = "";
        if (GResult1.default) {
          str = "";
          if (typeof GResult1.default.getComputedStyle === "function") {
            let value;
            const tmp3 = weakMap && weakMap.has(arg0);
            if (tmp3) {
              value = weakMap.get(arg0);
            }
            if (!value) {
              const _default = GResult1.default;
              const computedStyle = _default.getComputedStyle(arg0, null);
              value = computedStyle;
              if (weakMap) {
                const result = weakMap.set(arg0, computedStyle);
                value = computedStyle;
              }
            }
            str = value.getPropertyValue(arg1);
          }
        }
      }
    }
    return str;
  },
  secondsToMs: function lt(arg0) {
    return Math.floor(1000 * arg0);
  },
  assign: Object.assign,
  headersStringToObject: function pe(arg0) {
    let str = arg0;
    const obj = {};
    if (!arg0) {
      str = "";
    }
    const str2 = str.trim();
    const parts = str2.split(/[\r\n]+/);
    const item = parts.forEach((item) => {
      const tmp = item;
      if (tmp) {
        const parts = item.split(": ");
        const str2 = parts.shift();
        let tmp2 = str2;
        if (tmp2) {
          let tmp4 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
          if (!tmp4) {
            const formatted = str2.toLowerCase();
            tmp4 = 0 === formatted.indexOf("x-litix-");
          }
          tmp2 = tmp4;
        }
        if (tmp2) {
          obj2[str2] = parts.join(": ");
        }
      }
    });
    return obj;
  },
  cdnHeadersToRequestId: function de(arg0) {
    let closure_0 = arg0;
    if (closure_0) {
      const found = items.find((item) => undefined !== obj2[item]);
      let tmp3;
      if (found) {
        tmp3 = arg0[found];
      }
      return tmp3;
    }
  },
  extractHostnameAndDomain: re,
  extractHostname: F,
  manifestParser: Ve,
  generateShortID: Oe,
  generateUUID: ee,
  now: obj6.now,
  findMediaElement: se,
};
const obj13 = {
  loaded: obj6.now(),
  NAME: "mux-embed",
  VERSION: "5.13.0",
  API_VERSION: "2.1",
  PLAYER_TRACKED: false,
  monitor(videoElement, arg1) {
    let closure_3;
    let tmp11;
    let tmp13;
    let closure_0 = ne;
    let merged = arg1;
    if (typeof se === "function") {
      let tmp = videoElement;
      if (tmp) {
        let tmp4;
        let element;
        if (undefined !== videoElement.nodeName) {
          tmp4 = J(videoElement);
          element = videoElement;
        }
        let str2 = "";
        if (element) {
          str2 = "";
          if (element.nodeName) {
            let str3 = element.nodeName;
            str2 = str3.toLowerCase();
          }
        }
        items = [element, tmp4, str2];
        const tmp6 = globalThis;
        let _Array = Array;
        let tmp7;
        if (Array.isArray(items)) {
          tmp7 = items;
        }
        if (!tmp7) {
          tmp7 = vt(items, 3);
        }
        if (!tmp7) {
          tmp7 = Pe(items, 3);
        }
        if (tmp7) {
          let errorResult;
          [defineProperty, tmp11] = tmp7;
          getOwnPropertyDescriptor = tmp11;
          const tmp12 = tmp7[2];
          let log = ne.log;
          const getComputedStyle = ne.utils.getComputedStyle;
          const secondsToMs = ne.utils.secondsToMs;
          if (defineProperty) {
            if ("video" !== tmp12) {
              if ("audio" !== tmp12) {
                errorResult = log.error(`The element of \`${tmp11}\` was not a media element.`);
              }
            }
            if (tmp13.mux) {
              let mux = defineProperty.mux;
              mux.destroy();
              delete defineProperty["mux"];
              log.warn("Already monitoring this video element, replacing existing event listeners");
            }
            let _Object = Object;
            const obj2 = {
              getPlayheadTime() {
                return secondsToMs(defineProperty.currentTime);
              },
              getStateData() {
                let _default;
                let droppedVideoFrames;
                const self = this;
                const getPlayheadTime = this.getPlayheadTime;
                let callResult;
                if (null !== getPlayheadTime) {
                  if (undefined !== getPlayheadTime) {
                    callResult = getPlayheadTime.call(self);
                  }
                }
                if (!callResult) {
                  callResult = secondsToMs(defineProperty.currentTime);
                }
                let currentSrc = self.hlsjs && self.hlsjs.url;
                let source = self.dashjs && typeof self.dashjs.getSource === "function";
                if (source) {
                  const dashjs = self.dashjs;
                  source = dashjs.getSource();
                }
                const obj = {
                  player_is_paused: defineProperty.paused,
                  player_width: parseInt(getComputedStyle(defineProperty, "width")),
                  player_height: parseInt(getComputedStyle(defineProperty, "height")),
                  player_autoplay_on: defineProperty.autoplay,
                  player_preload_on: defineProperty.preload,
                  player_language_code: defineProperty.lang,
                  player_is_fullscreen: _default,
                  video_poster_url: defineProperty.poster,
                  video_source_url: currentSrc,
                  video_source_duration: secondsToMs(defineProperty.duration),
                  video_source_height: defineProperty.videoHeight,
                  video_source_width: defineProperty.videoWidth,
                  view_dropped_frame_count: droppedVideoFrames,
                };
                _default = closure_102.default;
                if (_default) {
                  _default =
                    closure_102.default.fullscreenElement ||
                    closure_102.default.webkitFullscreenElement ||
                    closure_102.default.mozFullScreenElement ||
                    closure_102.default.msFullscreenElement;
                }
                if (!currentSrc) {
                  currentSrc = source;
                }
                if (!currentSrc) {
                  currentSrc = defineProperty.currentSrc;
                }
                droppedVideoFrames = undefined;
                if (null != defineProperty) {
                  const getVideoPlaybackQuality = defineProperty.getVideoPlaybackQuality;
                  if (null !== getVideoPlaybackQuality) {
                    if (undefined !== getVideoPlaybackQuality) {
                      droppedVideoFrames = getVideoPlaybackQuality.call(defineProperty).droppedVideoFrames;
                    }
                  }
                }
                if (defineProperty.getStartDate) {
                  if (callResult > 0) {
                    const startDate = defineProperty.getStartDate();
                    if (startDate) {
                      if (typeof startDate.getTime === "function") {
                        if (startDate.getTime()) {
                          const time = startDate.getTime();
                          obj.player_program_time = time + callResult;
                          if (defineProperty.seekable.length > 0) {
                            const seekable = defineProperty.seekable;
                            obj.player_live_edge_program_time = time + seekable.end(defineProperty.seekable.length - 1);
                          }
                        }
                      }
                    }
                  }
                }
                return obj;
              },
            };
            merged = Object.assign({ automaticErrorTracking: true }, arg1, obj2);
            let _Object2 = Object;
            const obj3 = {
              player_software: "HTML5 Video Element",
              player_mux_plugin_name: "VideoElementMonitor",
              player_mux_plugin_version: ne.VERSION,
            };
            merged.data = Object.assign(obj3, merged.data);
            const mux1 = defineProperty.mux || {};
            defineProperty.mux = mux1;
            let flag = false;
            defineProperty.mux.deleted = false;
            defineProperty.mux.emit = (arg0, arg1) => {
              ne.emit(getOwnPropertyDescriptor, arg0, arg1);
            };
            defineProperty.mux.updateData = (arg0) => {
              const mux = defineProperty.mux;
              mux.emit("hb", arg0);
            };
            function h() {
              log.error("The monitor for this video element has already been destroyed.");
            }
            defineProperty.mux.destroy = () => {
              const keys = Object.keys(defineProperty.mux.listeners);
              const item = keys.forEach((item) => {
                const removed = closure_1_2.removeEventListener(item, closure_1_2.mux.listeners[item], false);
              });
              delete defineProperty.mux["listeners"];
              defineProperty.mux.destroy = h;
              defineProperty.mux.swapElement = h;
              defineProperty.mux.emit = h;
              defineProperty.mux.addHLSJS = h;
              defineProperty.mux.addDashJS = h;
              defineProperty.mux.removeHLSJS = h;
              defineProperty.mux.removeDashJS = h;
              defineProperty.mux.updateData = h;
              defineProperty.mux.setEmitTranslator = h;
              defineProperty.mux.setStateDataTranslator = h;
              defineProperty.mux.setGetPlayheadTime = h;
              defineProperty.mux.deleted = true;
              ne.emit(getOwnPropertyDescriptor, "destroy");
            };
            defineProperty.mux.swapElement = function (nodeName) {
              if (typeof se === "function") {
                const tmp = nodeName;
                if (tmp) {
                  let tmp4;
                  let element;
                  if (undefined !== nodeName.nodeName) {
                    tmp4 = closure_1_30(nodeName);
                    element = nodeName;
                  }
                  let str2 = "";
                  if (element) {
                    str2 = "";
                    if (element.nodeName) {
                      const str3 = element.nodeName;
                      str2 = str3.toLowerCase();
                    }
                  }
                  items = [element, tmp4, str2];
                  const _Array = Array;
                  let tmp7;
                  if (Array.isArray(items)) {
                    tmp7 = items;
                  }
                  if (!tmp7) {
                    tmp7 = vt(items, 3);
                  }
                  if (!tmp7) {
                    tmp7 = Pe(items, 3);
                  }
                  if (tmp7) {
                    let errorResult1;
                    const first = tmp7[0];
                    let tmp13 = tmp7[2];
                    if (first) {
                      if ("video" !== tmp13) {
                        let errorResult;
                        if ("audio" !== tmp13) {
                          const log2 = first.log;
                          errorResult = log2.error(`The element of \`${tmp7[1]}\` was not a media element.`);
                        }
                        errorResult1 = errorResult;
                      }
                      first.muxId = first.muxId;
                      delete first["muxId"];
                      first.mux = first.mux || {};
                      const _Object = Object;
                      let tmp17 = first;
                      first.mux.listeners = Object.assign({}, first.mux.listeners);
                      delete first.mux["listeners"];
                      const _Object2 = Object;
                      const keys = Object.keys(first.mux.listeners);
                      const item = keys.forEach((item) => {
                        const removed = defineProperty.removeEventListener(item, first.mux.listeners[item], false);
                        const listener = first.addEventListener(item, first.mux.listeners[item], false);
                      });
                      let tmp20 = first;
                      first.mux.swapElement = first.mux.swapElement;
                      first.mux.destroy = first.mux.destroy;
                      delete first["mux"];
                    } else {
                      log = first.log;
                      errorResult1 = log.error(`No element was found with the \`${tmp12}\` query selector.`);
                    }
                    return errorResult1;
                  } else {
                    const _TypeError = TypeError;
                    const self = this;
                    const self2 = this;
                    const typeError = new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                    let tmp10 = typeError;
                    throw typeError;
                  }
                }
                let tmp2 = globalThis;
                const _document = document;
                element = document.querySelector(nodeName);
                tmp4 = nodeName;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            };
            defineProperty.mux.addHLSJS = (merged) => {
              ne.addHLSJS(getOwnPropertyDescriptor, merged);
            };
            defineProperty.mux.addDashJS = (merged) => {
              ne.addDashJS(getOwnPropertyDescriptor, merged);
            };
            defineProperty.mux.removeHLSJS = () => {
              ne.removeHLSJS(getOwnPropertyDescriptor);
            };
            defineProperty.mux.removeDashJS = () => {
              ne.removeDashJS(getOwnPropertyDescriptor);
            };
            defineProperty.mux.setEmitTranslator = (emitTranslator) => {
              ne.setEmitTranslator(getOwnPropertyDescriptor, emitTranslator);
            };
            defineProperty.mux.setStateDataTranslator = (stateDataTranslator) => {
              const result = ne.setStateDataTranslator(getOwnPropertyDescriptor, stateDataTranslator);
            };
            defineProperty.mux.setGetPlayheadTime = (getPlayheadTime) => {
              if (!getPlayheadTime) {
                getPlayheadTime = merged.getPlayheadTime;
              }
              ne.setGetPlayheadTime(getOwnPropertyDescriptor, getPlayheadTime);
            };
            ne.init(tmp11, merged);
            ne.emit(tmp11, "playerready");
            if (!defineProperty.paused) {
              ne.emit(tmp11, "play");
              if (defineProperty.readyState > 2) {
                ne.emit(tmp11, "playing");
              }
            }
            defineProperty.mux.listeners = {};
            let item = closure_103.forEach((item) => {
              const tmp = "error" === item && !merged.automaticErrorTracking;
              if (!tmp) {
                closure_2.mux.listeners[item] = () => {
                  const obj = {};
                  if ("error" === item) {
                    if (defineProperty.error) {
                      if (1 !== defineProperty.error.code) {
                        obj.player_error_code = defineProperty.error.code;
                        const message = closure_104[defineProperty.error.code] || defineProperty.error.message;
                        obj.player_error_message = message;
                      }
                    }
                  }
                  item.emit(getOwnPropertyDescriptor, item, obj);
                };
                const listener = closure_2.addEventListener(item, closure_2.mux.listeners[item], false);
              }
            });
          } else {
            errorResult = log.error(`No element was found with the \`${tmp11}\` query selector.`);
          }
          return errorResult;
        } else {
          let _TypeError = TypeError;
          let self = this;
          let self2 = this;
          let typeError = new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
          let tmp10 = typeError;
          throw typeError;
        }
      }
      let tmp2 = globalThis;
      let _document = document;
      element = document.querySelector(videoElement);
      tmp4 = videoElement;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  destroyMonitor(videoElement) {
    if (typeof se === "function") {
      const tmp = videoElement;
      if (tmp) {
        let tmp4;
        let element;
        if (undefined !== videoElement.nodeName) {
          tmp4 = J(videoElement);
          element = videoElement;
        }
        let str2 = "";
        if (element) {
          str2 = "";
          if (element.nodeName) {
            const str3 = element.nodeName;
            str2 = str3.toLowerCase();
          }
        }
        items = [element, tmp4, str2];
        const _Array = Array;
        let tmp7;
        if (Array.isArray(items)) {
          tmp7 = items;
        }
        if (!tmp7) {
          tmp7 = vt(items, 1);
        }
        if (!tmp7) {
          tmp7 = Pe(items, 1);
        }
        if (tmp7) {
          const first = tmp7[0];
          if (first) {
            if (first.mux) {
              if (typeof first.mux.destroy === "function") {
                const mux = first.mux;
                mux.destroy();
              }
            }
          }
          logger.error(`A video element monitor for \`${videoElement}\` has not been initialized via \`mux.monitor\`.`);
        } else {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
          throw typeError;
        }
      }
      const _document = document;
      element = document.querySelector(videoElement);
      tmp4 = videoElement;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  addHLSJS(merged, merged2) {
    const tmp = J(merged);
    if (closure_122[tmp]) {
      const obj = tmp2[tmp];
      obj.addHLSJS(merged);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  addDashJS(merged, merged2) {
    const tmp = J(merged);
    if (closure_122[tmp]) {
      const obj = tmp2[tmp];
      obj.addDashJS(merged);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  removeHLSJS(getOwnPropertyDescriptor) {
    const tmp = J(getOwnPropertyDescriptor);
    if (closure_122[tmp]) {
      const obj = closure_122[tmp];
      obj.removeHLSJS();
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  removeDashJS(getOwnPropertyDescriptor) {
    const tmp = J(getOwnPropertyDescriptor);
    if (closure_122[tmp]) {
      const obj = closure_122[tmp];
      obj.removeDashJS();
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  init(arg0, respectDoNotTrack) {
    let doNotTrack = closure_39.default.doNotTrack;
    if (!doNotTrack) {
      doNotTrack = closure_39.default.navigator && closure_39.default.navigator.doNotTrack;
    }
    const tmp3 = "1" === doNotTrack && respectDoNotTrack && respectDoNotTrack.respectDoNotTrack;
    if (tmp3) {
      logger.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
    }
    const tmp6 = J(arg0);
    closure_122[tmp6] = t(ne, tmp6, respectDoNotTrack);
    t(ne, tmp6, respectDoNotTrack);
  },
  emit(arg0, arg1, arg2) {
    const tmp = J(arg0);
    if (closure_122[tmp]) {
      const obj = closure_122[tmp];
      obj.emit(arg1, arg2);
      if ("destroy" === arg1) {
        delete closure_122[tmp];
      }
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  updateData(arg0, arg1) {
    const tmp = J(arg0);
    if (closure_122[tmp]) {
      const obj = tmp2[tmp];
      obj.emit("hb", arg1);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setEmitTranslator(getOwnPropertyDescriptor, emitTranslator) {
    const tmp = J(getOwnPropertyDescriptor);
    if (closure_122[tmp]) {
      tmp2[tmp].emitTranslator = emitTranslator;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setStateDataTranslator(getOwnPropertyDescriptor, stateDataTranslator) {
    const tmp = J(getOwnPropertyDescriptor);
    if (closure_122[tmp]) {
      tmp2[tmp].stateDataTranslator = stateDataTranslator;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setGetPlayheadTime(getOwnPropertyDescriptor, getPlayheadTime) {
    const tmp = J(getOwnPropertyDescriptor);
    if (closure_122[tmp]) {
      tmp2[tmp].getPlayheadTime = getPlayheadTime;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  checkDoNotTrack: function ce() {
    let doNotTrack = closure_39.default.doNotTrack;
    if (!doNotTrack) {
      doNotTrack = closure_39.default.navigator && closure_39.default.navigator.doNotTrack;
    }
    return "1" === doNotTrack;
  },
  log: tmp11,
  utils: obj12,
  events: {
    PLAYER_READY: "playerready",
    VIEW_INIT: "viewinit",
    VIDEO_CHANGE: "videochange",
    PLAY: "play",
    PAUSE: "pause",
    PLAYING: "playing",
    TIME_UPDATE: "timeupdate",
    SEEKING: "seeking",
    SEEKED: "seeked",
    REBUFFER_START: "rebufferstart",
    REBUFFER_END: "rebufferend",
    ERROR: "error",
    ENDED: "ended",
    RENDITION_CHANGE: "renditionchange",
    ORIENTATION_CHANGE: "orientationchange",
    PLAYBACK_MODE_CHANGE: "playbackmodechange",
    AD_REQUEST: "adrequest",
    AD_RESPONSE: "adresponse",
    AD_BREAK_START: "adbreakstart",
    AD_PLAY: "adplay",
    AD_PLAYING: "adplaying",
    AD_PAUSE: "adpause",
    AD_FIRST_QUARTILE: "adfirstquartile",
    AD_MID_POINT: "admidpoint",
    AD_THIRD_QUARTILE: "adthirdquartile",
    AD_ENDED: "adended",
    AD_BREAK_END: "adbreakend",
    AD_ERROR: "aderror",
    REQUEST_COMPLETED: "requestcompleted",
    REQUEST_FAILED: "requestfailed",
    REQUEST_CANCELLED: "requestcanceled",
    HEARTBEAT: "hb",
    DESTROY: "destroy",
  },
  WINDOW_HIDDEN: false,
  WINDOW_UNLOADING: false,
};
let merged = Object.assign(ne, obj13);
const tmp32 = undefined !== GResult.default && typeof GResult.default.addEventListener === "function";
if (tmp32) {
  let _default = GResult.default;
  let flag = false;
  let str = "pagehide";
  let listener = _default.addEventListener(
    "pagehide",
    (event) => {
      if (!event.persisted) {
        ne.WINDOW_UNLOADING = true;
      }
    },
    false,
  );
}

export default definePropertyResult1;
