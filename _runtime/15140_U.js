// _runtime/15140_U.js
let f98876 = global;
function U(arg0, arg1) {
  if (typeof Symbol !== "undefined") {
    const _Symbol2 = Symbol;
    if (arg1[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      let tmp = arg1[Symbol.hasInstance](arg0);
    }
    return tmp;
  }
  tmp = U(arg0, arg1);
}
function Pe(str, arg1) {
  if (str) {
    let length = arg1;
    if (typeof str === "string") {
      if (tmp10) {
        length = str.length;
      }
      const _Array3 = Array;
      let array = new Array(length);
      for (let num5 = 0; num5 < length; num5 = num5 + 1) {
        array[num5] = str[num5];
      }
      return array;
    } else {
      const _Object = Object;
      const call = toString.call;
      let name = typeof call === "unknown" ? toString() : call(str).slice(8, -1);
      if (tmp) {
        name = str.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          if ("Arguments" !== name) {
            const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
          }
          let length2 = length;
          if (tmp3) {
            length2 = str.length;
          }
          const _Array = Array;
          array = new Array(length2);
          for (let num3 = 0; num3 < length2; num3 = num3 + 1) {
            array[num3] = str[num3];
          }
          return array;
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
    const array = new Array(length);
    let num = 0;
    tmp = array;
    if (0 < iterable.length) {
      do {
        array[num] = iterable[num];
        num = num + 1;
        tmp = array;
      } while (num < length);
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
    const typeError = new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
fn = function De(arg0, key10009, arg2) {
  if (typeof Reflect !== "undefined") {
    const _Reflect2 = Reflect;
    if (Reflect.get) {
      const _Reflect = Reflect;
      fn = Reflect.get;
    }
    let tmp2 = arg2;
    if (!arg2) {
      tmp2 = arg0;
    }
    return fn(arg0, key10009, tmp2);
  }
  fn = (arg0, key10009, arg2) => {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    let tmp = arg0;
    if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009))) {
      let tmp3 = fn(arg0);
      tmp = tmp3;
      if (null !== tmp3) {
        while (true) {
          let _Object = Object;
          let call2 = hasOwnProperty2.call;
          tmp = tmp3;
          if (typeof call2 === "unknown" ? hasOwnProperty2(key10009) : call2(tmp3, key10009)) {
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
      const _Object2 = Object;
      const iter = Object.getOwnPropertyDescriptor(tmp, key10009);
      if (iter.get) {
        let tmp7 = arg2;
        const get = iter.get;
        const call3 = get.call;
        if (!arg2) {
          tmp7 = arg0;
        }
        typeof call3 === "unknown" ? get() : call3(tmp7);
      } else {
        return iter.value;
      }
    }
  };
};
fn = function Le(arg0, fn2) {
  fn = Object.setPrototypeOf;
  if (!fn) {
    fn = (arg0, fn2) => {
      arg0.__proto__ = fn2;
      return arg0;
    };
  }
  return fn(arg0, fn2);
};
function qt(arg0, arr) {
  if (null == arg0) {
    return {};
  } else {
    if (null == arg0) {
      let obj = {};
    } else {
      obj = {};
      const _Object = Object;
      const keys = Object.keys(arg0);
      for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
        let tmp2 = keys[num3];
        if (arr.indexOf(tmp2) < 0) {
          obj[tmp2] = arg0[tmp2];
        }
      }
    }
    const _Object2 = Object;
    if (Object.getOwnPropertySymbols) {
      const _Object3 = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
      let num6 = 0;
      if (0 < ownPropertySymbols.length) {
        const tmp6 = arr.indexOf(ownPropertySymbols[num6]) < 0;
        while (!tmp6) {
          if (tmp6) {
            obj[tmp5] = arg0[tmp5];
          }
          num6 = num6 + 1;
        }
        const _Object4 = Object;
        const call = propertyIsEnumerable.call;
        typeof call === "unknown" ? propertyIsEnumerable(ownPropertySymbols[num6]) : call(arg0, ownPropertySymbols[num6]);
      }
    }
    return obj;
  }
}
function ue(arg0) {
  closure_0 = arg0;
  for (let num = 1; num < arguments.length; num = num + 1) {
    let tmp2 = null != arguments[num] ? arguments[num] : {};
    closure_1 = tmp2;
    let _Object = Object;
    let keys = Object.keys(tmp2);
    let _Object2 = Object;
    let combined = keys;
    if (typeof Object.getOwnPropertySymbols === "function") {
      let _Object3 = Object;
      let ownPropertySymbols = Object.getOwnPropertySymbols(tmp2);
      combined = keys.concat(ownPropertySymbols.filter((item) => Object.getOwnPropertyDescriptor(closure_1, item).enumerable));
    }
    let item = combined.forEach((item) => {
      if (item in closure_0) {
        const _Object = Object;
        const obj = { value: tmp2, enumerable: true, configurable: true, writable: true };
        Object.defineProperty(tmp, item, obj);
      } else {
        tmp[item] = tmp2;
      }
    });
  }
  return arg0;
}
function pt(arg0, arg1, arg2, arg3) {

}
let closure_129_0 = () => {
  if (typeof f98883 === "function") {
    if (c0) {
      c0 = 0;
      closure_1 = tmp(0);
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_129_1;
let f98883 = () => {

};
let closure_130_0 = () => {

};
let closure_130_1;
f98883 = () => {

};
let closure_131_0 = (arg0, arg1) => {
  arg1.exports = function Ca(arg0, fn) {
    let tmp = arg0;
    if (!("length" in arg0)) {
      items = [arg0];
      tmp = items;
    }
    const call = slice.call;
    let arr2 = typeof call === "unknown" ? slice() : call(tmp);
    if (arr2.length) {
      const arr = arr2.shift();
      const tmp4 = fn(arr);
      while (!tmp4) {
        let tmp5 = arr.childNodes && arr.childNodes.length;
        if (!tmp5) {
          arr2 = arr3;
        } else {
          let tmp7 = slice;
          let call2 = slice.call;
          let concat = arr.childNodes;
          let tmp8 = typeof call2 === "unknown" ? tmp7() : call2(concat);
          concat = tmp8.concat;
          let combined = concat(arr2);
        }
      }
      return tmp4;
    }
  };
};
let closure_131_1;
let f98884 = () => {

};
let closure_132_0 = (arg0, arg1) => {
  function ve(data, arg1) {
    const self = this;
    if (typeof Symbol !== "undefined") {
      const _Symbol3 = Symbol;
      if (tmp[Symbol.hasInstance]) {
        const _Symbol2 = Symbol;
        let tmp2 = tmp[Symbol.hasInstance](self);
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
        const tmpResult = tmp(data, tmp4);
        return tmpResult;
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
  c0 = ve;
  if (typeof f98883 === "function") {
    if (c0) {
      c0 = 0;
      closure_1 = tmp(0);
    }
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
let closure_132_1;
f98884 = () => {

};
let closure_133_0 = (arg0, arg1) => {
  function ae(arg0, arg1) {
    const self = this;
    if (typeof Symbol !== "undefined") {
      const _Symbol3 = Symbol;
      if (tmp[Symbol.hasInstance]) {
        const _Symbol2 = Symbol;
        let tmp2 = tmp[Symbol.hasInstance](self);
      }
      if (tmp2) {
        let str = arg0;
        if (!arg0) {
          str = "";
        }
        let tmp6 = arg1;
        self.data = str;
        self.length = self.data.length;
        if (!arg1) {
          tmp6 = null;
        }
        self.ownerDocument = tmp6;
      } else {
        const tmpResult = tmp(arg0);
        return tmpResult;
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
  c0 = ae;
  if (typeof f98883 === "function") {
    if (c0) {
      c0 = 0;
      closure_1 = tmp(0);
    }
    arg1.exports = ae;
    ae.prototype.type = "DOMTextNode";
    ae.prototype.nodeType = 3;
    ae.prototype.nodeName = "#text";
    class ae {
      toString() {
        return this.data;
      }
      replaceData(arg0, arg1, arg2) {
        str = this.data;
        substr = str.substring(0, arg0);
        this.data = substr + arg2 + str.substring(arg0 + arg1, str.length);
        this.length = this.data.length;
        return;
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_133_1;
f98884 = () => {

};
let closure_134_0 = (arg0, arg1) => {
  arg1.exports = function Ma(target) {
    closure_0 = target;
    const self = this;
    if (!target.target) {
      target.target = self;
    }
    if (!self.listeners) {
      self.listeners = {};
    }
    if (self.listeners[target.type]) {
      return arr.forEach((handleEvent) => {
        closure_0.currentTarget = self;
        if (typeof handleEvent === "function") {
          handleEvent(tmp);
        } else {
          handleEvent.handleEvent(tmp);
        }
      });
    } else if (self.parentNode) {
      const parentNode = self.parentNode;
      parentNode.dispatchEvent(target);
    }
  };
};
let closure_134_1;
f98884 = () => {

};
let closure_135_0 = (arg0, arg1) => {
  arg1.exports = function Ha(arg0, arg1) {
    const self = this;
    if (!this.listeners) {
      self.listeners = {};
    }
    if (!self.listeners[arg0]) {
      self.listeners[arg0] = [];
    }
    let arr = self.listeners[arg0];
    if (-1 === arr.indexOf(arg1)) {
      arr = self.listeners[arg0].push(arg1);
    }
  };
};
let closure_135_1;
f98884 = () => {

};
let closure_136_0 = (arg0, arg1) => {
  arg1.exports = function Ba(arg0, arg1) {
    const self = this;
    if (this.listeners) {
      if (self.listeners[arg0]) {
        const index = arr.indexOf(arg1);
        if (-1 !== index) {
          arr.splice(index, 1);
        }
      }
    }
  };
};
let closure_136_1;
f98884 = () => {

};
let closure_137_0 = (arg0, arg1) => {
  function br(nodeType) {
    nodeType = nodeType.nodeType;
    if (3 === nodeType) {
      let str37 = str36;
      if (typeof nodeType.data !== "string") {
        str37 = "";
        if (str36) {
          str37 = str36.toString();
        }
      }
      const str39 = str37.replace(/&/g, "&amp;");
      return str37.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    } else if (8 === nodeType) {
      return "<!--" + nodeType.data + "-->";
    } else {
      let formatted = str43;
      if ("http://www.w3.org/1999/xhtml" === nodeType.namespaceURI) {
        formatted = str43.toLowerCase();
      }
      items = [];
      const items1 = [];
      let text = `<${tmp2}`;
      for (const key10026 in arg0) {
        let tmp25 = arg0[key10026];
        if (tmp25) {
          let _Symbol = Symbol;
          if (typeof Symbol !== "undefined") {
            let _Symbol2 = Symbol;
            let str14 = "symbol";
          }
          let tmp6 = "style" === key10026;
          if (tmp6) {
            let _Object = Object;
            tmp6 = Object.keys(arg0.style).length > 0;
          }
          if (!tmp6) {
            let hasOwnPropertyResult = arg0.hasOwnProperty(key10026);
            if (hasOwnPropertyResult) {
              let tmp8 = "string" === str14;
              if (!tmp8) {
                tmp8 = "boolean" === str14;
              }
              if (!tmp8) {
                tmp8 = "number" === str14;
              }
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
            let obj = { name: key10026, value: arg0[key10026] };
            let arr = items1.push(obj);
            continue;
          }
          continue;
        }
        str14 = typeof tmp25;
      }
      for (const key10046 in arg0._attributes) {
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp10 = keys[tmp];
          while (tmp10 !== undefined) {
            let iter = arg0._attributes[key10046][tmp10];
            let str17 = "";
            if (iter.prefix) {
              str17 = `${iter.prefix}:`;
            }
            obj = { name: str17 + tmp10, value: iter.value };
            arr = items1.push(obj);
            continue;
          }
        }
        continue;
      }
      if (nodeType.className) {
        obj = { name: "class", value: nodeType.className };
        items1.push(obj);
      }
      const str18 = "";
      if (items1.length) {
        const items2 = [];
        let items4 = items2;
        let item = items1.forEach((item) => {
          ({ name, value } = item);
          let str = value;
          if ("style" === name) {
            items4 = value;
            let tmp = value;
            if (typeof value !== "string") {
              closure_1 = "";
              const _Object = Object;
              const keys = Object.keys(value);
              item = keys.forEach((item) => {
                closure_1 = `${closure_1}${item.replace(/[A-Z]/g, (str) => "-" + str.toLowerCase())}:${tmp};`;
              });
              tmp = closure_1;
            }
            str = tmp;
          }
          let str2 = str;
          const text = `${name}="`;
          if (typeof str !== "string") {
            str2 = "";
            if (str) {
              str2 = str.toString();
            }
          }
          const str3 = str2.replace(/&/g, "&amp;");
          const str4 = str2.replace(/&/g, "&amp;").replace(/</g, "&lt;");
          items4.push(`${tmp3}${str2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")}"`);
        });
        let str19 = "";
        if (items2.length) {
          str19 = ` ${arr3.join(" ")}`;
        }
      }
      const dataset = nodeType.dataset;
      const items3 = [];
      for (const key10076 in dataset) {
        let obj1 = { name: "data-" + key10076, value: dataset[key10076] };
        let arr2 = items3.push(obj1);
        continue;
      }
      const str22 = "";
      if (items3.length) {
        items4 = [];
        const item1 = items3.forEach((item) => {
          ({ name, value } = item);
          let str = value;
          if ("style" === name) {
            items4 = value;
            let tmp = value;
            if (typeof value !== "string") {
              closure_1 = "";
              const _Object = Object;
              const keys = Object.keys(value);
              item = keys.forEach((item) => {
                closure_1 = `${closure_1}${item.replace(/[A-Z]/g, (str) => "-" + str.toLowerCase())}:${tmp};`;
              });
              tmp = closure_1;
            }
            str = tmp;
          }
          let str2 = str;
          const text = `${name}="`;
          if (typeof str !== "string") {
            str2 = "";
            if (str) {
              str2 = str.toString();
            }
          }
          const str3 = str2.replace(/&/g, "&amp;");
          const str4 = str2.replace(/&/g, "&amp;").replace(/</g, "&lt;");
          items4.push(`${tmp3}${str2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")}"`);
        });
        let str23 = "";
        if (items4.length) {
          str23 = ` ${arr5.join(" ")}`;
        }
      }
      const _HermesInternal = HermesInternal;
      if (closure_0.indexOf(formatted) > -1) {
        items.push(" />");
      } else {
        if (nodeType.childNodes.length) {
          const push = items.push;
          const childNodes = nodeType.childNodes;
          push.apply(items, childNodes.map(closure_1));
        } else {
          if (!nodeType.textContent) {
            if (!nodeType.innerText) {
              if (nodeType.innerHTML) {
                items.push(nodeType.innerHTML);
              }
            }
          }
          let str25 = nodeType.textContent;
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
          items.push(str26.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
          const str30 = str26.replace(/&/g, "&amp;").replace(/</g, "&lt;");
        }
        items.push(`</${tmp2}>`);
        arr5 = items.push(">");
      }
      return items.join("");
    }
  }
  closure_1 = br;
  if (typeof f98883 === "function") {
    if (closure_0) {
      closure_0 = 0;
      closure_1 = tmp(0);
    }
    arg1.exports = br;
    closure_0 = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_137_1;
f98884 = () => {

};
let closure_138_0 = (arg0, arg1) => {
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
      tmp2 = U(self, tmp);
      return;
    }
  }
  closure_3 = I;
  if (typeof f98883 === "function") {
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
        tmp2 = U(self, tmp);
        return;
      }
    }
    if (typeof f98884 === "function") {
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
          tmp2 = U(self, tmp);
          return;
        }
      }
      if (!closure_139_1) {
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
            tmp2 = U(self, tmp);
            return;
          }
        }
        let obj = { exports: {} };
        closure_139_1 = obj;
        closure_139_0(obj.exports, closure_139_1);
      }
      closure_0 = closure_139_1.exports;
      if (typeof f98884 === "function") {
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
            tmp2 = U(self, tmp);
            return;
          }
        }
        if (!closure_142_1) {
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
              tmp2 = U(self, tmp);
              return;
            }
          }
          obj = { exports: {} };
          closure_142_1 = obj;
          closure_142_0(obj.exports, closure_142_1);
        }
        if (typeof f98884 === "function") {
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
              tmp2 = U(self, tmp);
              return;
            }
          }
          if (!closure_143_1) {
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
                tmp2 = U(self, tmp);
                return;
              }
            }
            obj = { exports: {} };
            closure_143_1 = obj;
            closure_143_0(obj.exports, closure_143_1);
          }
          if (typeof f98884 === "function") {
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
                tmp2 = U(self, tmp);
                return;
              }
            }
            if (!closure_144_1) {
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
                  tmp2 = U(self, tmp);
                  return;
                }
              }
              const obj1 = { exports: {} };
              closure_144_1 = obj1;
              closure_144_0(obj1.exports, closure_144_1);
            }
            if (typeof f98884 === "function") {
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
                  tmp2 = U(self, tmp);
                  return;
                }
                appendChild(arg0) {
                  if (arg0.parentNode) {
                    parentNode = arg0.parentNode;
                    removeChildResult = parentNode.removeChild(arg0);
                  }
                  childNodes = this.childNodes;
                  arr = childNodes.push(arg0);
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
                    arr = childNodes2.push(arg0);
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
                  value = tmp;
                  if (tmp) {
                    value = tmp[arg1];
                  }
                  if (value) {
                    value = tmp[arg1].value;
                  }
                  if ("INPUT" === self.tagName) {
                    str = "type";
                    if ("type" === arg1) {
                      type = self.type;
                    }
                    return type;
                  }
                  type = null;
                  if (typeof value === "string") {
                    type = value;
                  }
                  return;
                }
                removeAttributeNS(arg0, arg1) {
                  if (this._attributes[arg0]) {
                    tmp3 = arg1;
                    delete tmp2[tmp];
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
                  tmp = closure_0(this, () => { ... });
                  return items;
                }
                getElementsByTagName(arg0) {
                  closure_0 = arg0.toLowerCase();
                  items = [];
                  closure_1 = items;
                  tmp = closure_0(this.childNodes, () => { ... });
                  return items;
                }
                contains(arg0) {
                  closure_0 = arg0;
                  tmp = closure_0(this, /* F116316 */ function() { ... }) || false;
                  return tmp;
                }
              }
              if (!closure_1) {
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
                    tmp2 = U(self, tmp);
                    return;
                  }
                  appendChild(arg0) {
                    if (arg0.parentNode) {
                      parentNode = arg0.parentNode;
                      removeChildResult = parentNode.removeChild(arg0);
                    }
                    childNodes = this.childNodes;
                    arr = childNodes.push(arg0);
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
                      arr = childNodes2.push(arg0);
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
                    value = tmp;
                    if (tmp) {
                      value = tmp[arg1];
                    }
                    if (value) {
                      value = tmp[arg1].value;
                    }
                    if ("INPUT" === self.tagName) {
                      str = "type";
                      if ("type" === arg1) {
                        type = self.type;
                      }
                      return type;
                    }
                    type = null;
                    if (typeof value === "string") {
                      type = value;
                    }
                    return;
                  }
                  removeAttributeNS(arg0, arg1) {
                    if (this._attributes[arg0]) {
                      tmp3 = arg1;
                      delete tmp2[tmp];
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
                    tmp = closure_0(this, () => { ... });
                    return items;
                  }
                  getElementsByTagName(arg0) {
                    closure_0 = arg0.toLowerCase();
                    items = [];
                    closure_1 = items;
                    tmp = closure_0(this.childNodes, () => { ... });
                    return items;
                  }
                  contains(arg0) {
                    closure_0 = arg0;
                    tmp = closure_0(this, /* F116316 */ function() { ... }) || false;
                    return tmp;
                  }
                }
                const obj2 = { exports: {} };
                closure_1 = obj2;
                closure_0(obj2.exports, closure_1);
              }
              closure_1 = closure_1.exports;
              c2 = "http://www.w3.org/1999/xhtml";
              arg1.exports = I;
              I.prototype.type = "DOMElement";
              I.prototype.nodeType = 1;
              I.prototype.removeEventListener = tmp19;
              I.prototype.addEventListener = tmp14;
              I.prototype.dispatchEvent = tmp9;
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
                  tmp2 = U(self, tmp);
                  return;
                }
                appendChild(arg0) {
                  if (arg0.parentNode) {
                    parentNode = arg0.parentNode;
                    removeChildResult = parentNode.removeChild(arg0);
                  }
                  childNodes = this.childNodes;
                  arr = childNodes.push(arg0);
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
                    arr = childNodes2.push(arg0);
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
                  value = tmp;
                  if (tmp) {
                    value = tmp[arg1];
                  }
                  if (value) {
                    value = tmp[arg1].value;
                  }
                  if ("INPUT" === self.tagName) {
                    str = "type";
                    if ("type" === arg1) {
                      type = self.type;
                    }
                    return type;
                  }
                  type = null;
                  if (typeof value === "string") {
                    type = value;
                  }
                  return;
                }
                removeAttributeNS(arg0, arg1) {
                  if (this._attributes[arg0]) {
                    tmp3 = arg1;
                    delete tmp2[tmp];
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
                  tmp = closure_0(this, () => { ... });
                  return items;
                }
                getElementsByTagName(arg0) {
                  closure_0 = arg0.toLowerCase();
                  items = [];
                  closure_1 = items;
                  tmp = closure_0(this.childNodes, () => { ... });
                  return items;
                }
                contains(arg0) {
                  closure_0 = arg0;
                  tmp = closure_0(this, /* F116316 */ function() { ... }) || false;
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
                tmp2 = U(self, tmp);
                return;
              }
              appendChild(arg0) {
                if (arg0.parentNode) {
                  parentNode = arg0.parentNode;
                  removeChildResult = parentNode.removeChild(arg0);
                }
                childNodes = this.childNodes;
                arr = childNodes.push(arg0);
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
                  arr = childNodes2.push(arg0);
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
                value = tmp;
                if (tmp) {
                  value = tmp[arg1];
                }
                if (value) {
                  value = tmp[arg1].value;
                }
                if ("INPUT" === self.tagName) {
                  str = "type";
                  if ("type" === arg1) {
                    type = self.type;
                  }
                  return type;
                }
                type = null;
                if (typeof value === "string") {
                  type = value;
                }
                return;
              }
              removeAttributeNS(arg0, arg1) {
                if (this._attributes[arg0]) {
                  tmp3 = arg1;
                  delete tmp2[tmp];
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
                tmp = closure_0(this, () => { ... });
                return items;
              }
              getElementsByTagName(arg0) {
                closure_0 = arg0.toLowerCase();
                items = [];
                closure_1 = items;
                tmp = closure_0(this.childNodes, () => { ... });
                return items;
              }
              contains(arg0) {
                closure_0 = arg0;
                tmp = closure_0(this, /* F116316 */ function() { ... }) || false;
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
              tmp2 = U(self, tmp);
              return;
            }
            appendChild(arg0) {
              if (arg0.parentNode) {
                parentNode = arg0.parentNode;
                removeChildResult = parentNode.removeChild(arg0);
              }
              childNodes = this.childNodes;
              arr = childNodes.push(arg0);
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
                arr = childNodes2.push(arg0);
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
              value = tmp;
              if (tmp) {
                value = tmp[arg1];
              }
              if (value) {
                value = tmp[arg1].value;
              }
              if ("INPUT" === self.tagName) {
                str = "type";
                if ("type" === arg1) {
                  type = self.type;
                }
                return type;
              }
              type = null;
              if (typeof value === "string") {
                type = value;
              }
              return;
            }
            removeAttributeNS(arg0, arg1) {
              if (this._attributes[arg0]) {
                tmp3 = arg1;
                delete tmp2[tmp];
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
              tmp = closure_0(this, () => { ... });
              return items;
            }
            getElementsByTagName(arg0) {
              closure_0 = arg0.toLowerCase();
              items = [];
              closure_1 = items;
              tmp = closure_0(this.childNodes, () => { ... });
              return items;
            }
            contains(arg0) {
              closure_0 = arg0;
              tmp = closure_0(this, /* F116316 */ function() { ... }) || false;
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
            tmp2 = U(self, tmp);
            return;
          }
          appendChild(arg0) {
            if (arg0.parentNode) {
              parentNode = arg0.parentNode;
              removeChildResult = parentNode.removeChild(arg0);
            }
            childNodes = this.childNodes;
            arr = childNodes.push(arg0);
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
              arr = childNodes2.push(arg0);
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
            value = tmp;
            if (tmp) {
              value = tmp[arg1];
            }
            if (value) {
              value = tmp[arg1].value;
            }
            if ("INPUT" === self.tagName) {
              str = "type";
              if ("type" === arg1) {
                type = self.type;
              }
              return type;
            }
            type = null;
            if (typeof value === "string") {
              type = value;
            }
            return;
          }
          removeAttributeNS(arg0, arg1) {
            if (this._attributes[arg0]) {
              tmp3 = arg1;
              delete tmp2[tmp];
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
            tmp = closure_0(this, () => { ... });
            return items;
          }
          getElementsByTagName(arg0) {
            closure_0 = arg0.toLowerCase();
            items = [];
            closure_1 = items;
            tmp = closure_0(this.childNodes, () => { ... });
            return items;
          }
          contains(arg0) {
            closure_0 = arg0;
            tmp = closure_0(this, /* F116316 */ function() { ... }) || false;
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
          tmp2 = U(self, tmp);
          return;
        }
        appendChild(arg0) {
          if (arg0.parentNode) {
            parentNode = arg0.parentNode;
            removeChildResult = parentNode.removeChild(arg0);
          }
          childNodes = this.childNodes;
          arr = childNodes.push(arg0);
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
            arr = childNodes2.push(arg0);
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
          value = tmp;
          if (tmp) {
            value = tmp[arg1];
          }
          if (value) {
            value = tmp[arg1].value;
          }
          if ("INPUT" === self.tagName) {
            str = "type";
            if ("type" === arg1) {
              type = self.type;
            }
            return type;
          }
          type = null;
          if (typeof value === "string") {
            type = value;
          }
          return;
        }
        removeAttributeNS(arg0, arg1) {
          if (this._attributes[arg0]) {
            tmp3 = arg1;
            delete tmp2[tmp];
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
          tmp = closure_0(this, () => { ... });
          return items;
        }
        getElementsByTagName(arg0) {
          closure_0 = arg0.toLowerCase();
          items = [];
          closure_1 = items;
          tmp = closure_0(this.childNodes, () => { ... });
          return items;
        }
        contains(arg0) {
          closure_0 = arg0;
          tmp = closure_0(this, /* F116316 */ function() { ... }) || false;
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
        tmp2 = U(self, tmp);
        return;
      }
      appendChild(arg0) {
        if (arg0.parentNode) {
          parentNode = arg0.parentNode;
          removeChildResult = parentNode.removeChild(arg0);
        }
        childNodes = this.childNodes;
        arr = childNodes.push(arg0);
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
          arr = childNodes2.push(arg0);
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
        value = tmp;
        if (tmp) {
          value = tmp[arg1];
        }
        if (value) {
          value = tmp[arg1].value;
        }
        if ("INPUT" === self.tagName) {
          str = "type";
          if ("type" === arg1) {
            type = self.type;
          }
          return type;
        }
        type = null;
        if (typeof value === "string") {
          type = value;
        }
        return;
      }
      removeAttributeNS(arg0, arg1) {
        if (this._attributes[arg0]) {
          tmp3 = arg1;
          delete tmp2[tmp];
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
        tmp = closure_0(this, () => { ... });
        return items;
      }
      getElementsByTagName(arg0) {
        closure_0 = arg0.toLowerCase();
        items = [];
        closure_1 = items;
        tmp = closure_0(this.childNodes, () => { ... });
        return items;
      }
      contains(arg0) {
        closure_0 = arg0;
        tmp = closure_0(this, /* F116316 */ function() { ... }) || false;
        return tmp;
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_138_1;
f98884 = () => {

};
let closure_139_0 = (arg0, arg1) => {
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
      tmp2 = U(self, tmp);
      return;
    }
  }
  closure_0 = K;
  if (typeof f98883 === "function") {
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
        tmp2 = U(self, tmp);
        return;
      }
    }
    if (typeof f98884 === "function") {
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
          tmp2 = U(self, tmp);
          return;
        }
        toString() {
          childNodes = this.childNodes;
          mapped = childNodes.map(() => { ... });
          return mapped.join("");
        }
      }
      if (!closure_146_1) {
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
            tmp2 = U(self, tmp);
            return;
          }
          toString() {
            childNodes = this.childNodes;
            mapped = childNodes.map(() => { ... });
            return mapped.join("");
          }
        }
        const obj = { exports: {} };
        closure_146_1 = obj;
        closure_146_0(obj.exports, closure_146_1);
      }
      const _exports = closure_146_1.exports;
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
          tmp2 = U(self, tmp);
          return;
        }
        toString() {
          childNodes = this.childNodes;
          mapped = childNodes.map(() => { ... });
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
        tmp2 = U(self, tmp);
        return;
      }
      toString() {
        childNodes = this.childNodes;
        mapped = childNodes.map(() => { ... });
        return mapped.join("");
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_139_1;
f98884 = () => {

};
let closure_140_0 = (arg0, arg1) => {
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
let closure_140_1;
f98884 = () => {

};
let closure_141_0 = (arg0, arg1) => {
  class Ue {
    constructor() {
      self = this;
      tmp = Ue;
      if (typeof Symbol !== "undefined") {
        _Symbol3 = Symbol;
        if (tmp[Symbol.hasInstance]) {
          _Symbol2 = Symbol;
          tmp2 = tmp[Symbol.hasInstance](self);
        }
        if (tmp2) {
          str = "head";
          self.head = self.createElement("head");
          str2 = "body";
          self.body = self.createElement("body");
          str3 = "html";
          self.documentElement = self.createElement("html");
          documentElement = self.documentElement;
          appendChildResult = documentElement.appendChild(self.head);
          documentElement2 = self.documentElement;
          appendChildResult1 = documentElement2.appendChild(self.body);
          items = [];
          items[0] = self.documentElement;
          self.childNodes = items;
          num = 9;
          self.nodeType = 9;
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
      tmp2 = U(self, tmp);
      return;
    }
  }
  if (typeof f98883 === "function") {
    class Ue {
      constructor() {
        self = this;
        tmp = Ue;
        if (typeof Symbol !== "undefined") {
          _Symbol3 = Symbol;
          if (tmp[Symbol.hasInstance]) {
            _Symbol2 = Symbol;
            tmp2 = tmp[Symbol.hasInstance](self);
          }
          if (tmp2) {
            str = "head";
            self.head = self.createElement("head");
            str2 = "body";
            self.body = self.createElement("body");
            str3 = "html";
            self.documentElement = self.createElement("html");
            documentElement = self.documentElement;
            appendChildResult = documentElement.appendChild(self.head);
            documentElement2 = self.documentElement;
            appendChildResult1 = documentElement2.appendChild(self.body);
            items = [];
            items[0] = self.documentElement;
            self.childNodes = items;
            num = 9;
            self.nodeType = 9;
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
        tmp2 = U(self, tmp);
        return;
      }
    }
    if (typeof f98884 === "function") {
      class Ue {
        constructor() {
          self = this;
          tmp = Ue;
          if (typeof Symbol !== "undefined") {
            _Symbol3 = Symbol;
            if (tmp[Symbol.hasInstance]) {
              _Symbol2 = Symbol;
              tmp2 = tmp[Symbol.hasInstance](self);
            }
            if (tmp2) {
              str = "head";
              self.head = self.createElement("head");
              str2 = "body";
              self.body = self.createElement("body");
              str3 = "html";
              self.documentElement = self.createElement("html");
              documentElement = self.documentElement;
              appendChildResult = documentElement.appendChild(self.head);
              documentElement2 = self.documentElement;
              appendChildResult1 = documentElement2.appendChild(self.body);
              items = [];
              items[0] = self.documentElement;
              self.childNodes = items;
              num = 9;
              self.nodeType = 9;
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
          tmp2 = U(self, tmp);
          return;
        }
      }
      if (!closure_139_1) {
        class Ue {
          constructor() {
            self = this;
            tmp = Ue;
            if (typeof Symbol !== "undefined") {
              _Symbol3 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol2 = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
              if (tmp2) {
                str = "head";
                self.head = self.createElement("head");
                str2 = "body";
                self.body = self.createElement("body");
                str3 = "html";
                self.documentElement = self.createElement("html");
                documentElement = self.documentElement;
                appendChildResult = documentElement.appendChild(self.head);
                documentElement2 = self.documentElement;
                appendChildResult1 = documentElement2.appendChild(self.body);
                items = [];
                items[0] = self.documentElement;
                self.childNodes = items;
                num = 9;
                self.nodeType = 9;
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
            tmp2 = U(self, tmp);
            return;
          }
        }
        let obj = { exports: {} };
        closure_139_1 = obj;
        closure_139_0(obj.exports, closure_139_1);
      }
      closure_0 = closure_139_1.exports;
      if (typeof f98884 === "function") {
        class Ue {
          constructor() {
            self = this;
            tmp = Ue;
            if (typeof Symbol !== "undefined") {
              _Symbol3 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol2 = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
              if (tmp2) {
                str = "head";
                self.head = self.createElement("head");
                str2 = "body";
                self.body = self.createElement("body");
                str3 = "html";
                self.documentElement = self.createElement("html");
                documentElement = self.documentElement;
                appendChildResult = documentElement.appendChild(self.head);
                documentElement2 = self.documentElement;
                appendChildResult1 = documentElement2.appendChild(self.body);
                items = [];
                items[0] = self.documentElement;
                self.childNodes = items;
                num = 9;
                self.nodeType = 9;
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
            tmp2 = U(self, tmp);
            return;
          }
        }
        if (!closure_140_1) {
          class Ue {
            constructor() {
              self = this;
              tmp = Ue;
              if (typeof Symbol !== "undefined") {
                _Symbol3 = Symbol;
                if (tmp[Symbol.hasInstance]) {
                  _Symbol2 = Symbol;
                  tmp2 = tmp[Symbol.hasInstance](self);
                }
                if (tmp2) {
                  str = "head";
                  self.head = self.createElement("head");
                  str2 = "body";
                  self.body = self.createElement("body");
                  str3 = "html";
                  self.documentElement = self.createElement("html");
                  documentElement = self.documentElement;
                  appendChildResult = documentElement.appendChild(self.head);
                  documentElement2 = self.documentElement;
                  appendChildResult1 = documentElement2.appendChild(self.body);
                  items = [];
                  items[0] = self.documentElement;
                  self.childNodes = items;
                  num = 9;
                  self.nodeType = 9;
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
              tmp2 = U(self, tmp);
              return;
            }
          }
          obj = { exports: {} };
          closure_140_1 = obj;
          closure_140_0(obj.exports, closure_140_1);
        }
        closure_1 = closure_140_1.exports;
        if (typeof f98884 === "function") {
          class Ue {
            constructor() {
              self = this;
              tmp = Ue;
              if (typeof Symbol !== "undefined") {
                _Symbol3 = Symbol;
                if (tmp[Symbol.hasInstance]) {
                  _Symbol2 = Symbol;
                  tmp2 = tmp[Symbol.hasInstance](self);
                }
                if (tmp2) {
                  str = "head";
                  self.head = self.createElement("head");
                  str2 = "body";
                  self.body = self.createElement("body");
                  str3 = "html";
                  self.documentElement = self.createElement("html");
                  documentElement = self.documentElement;
                  appendChildResult = documentElement.appendChild(self.head);
                  documentElement2 = self.documentElement;
                  appendChildResult1 = documentElement2.appendChild(self.body);
                  items = [];
                  items[0] = self.documentElement;
                  self.childNodes = items;
                  num = 9;
                  self.nodeType = 9;
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
              tmp2 = U(self, tmp);
              return;
            }
          }
          if (!closure_141_1) {
            class Ue {
              constructor() {
                self = this;
                tmp = Ue;
                if (typeof Symbol !== "undefined") {
                  _Symbol3 = Symbol;
                  if (tmp[Symbol.hasInstance]) {
                    _Symbol2 = Symbol;
                    tmp2 = tmp[Symbol.hasInstance](self);
                  }
                  if (tmp2) {
                    str = "head";
                    self.head = self.createElement("head");
                    str2 = "body";
                    self.body = self.createElement("body");
                    str3 = "html";
                    self.documentElement = self.createElement("html");
                    documentElement = self.documentElement;
                    appendChildResult = documentElement.appendChild(self.head);
                    documentElement2 = self.documentElement;
                    appendChildResult1 = documentElement2.appendChild(self.body);
                    items = [];
                    items[0] = self.documentElement;
                    self.childNodes = items;
                    num = 9;
                    self.nodeType = 9;
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
                tmp2 = U(self, tmp);
                return;
              }
            }
            obj = { exports: {} };
            closure_141_1 = obj;
            closure_141_0(obj.exports, closure_141_1);
          }
          closure_2 = closure_141_1.exports;
          if (typeof f98884 === "function") {
            class Ue {
              constructor() {
                self = this;
                tmp = Ue;
                if (typeof Symbol !== "undefined") {
                  _Symbol3 = Symbol;
                  if (tmp[Symbol.hasInstance]) {
                    _Symbol2 = Symbol;
                    tmp2 = tmp[Symbol.hasInstance](self);
                  }
                  if (tmp2) {
                    str = "head";
                    self.head = self.createElement("head");
                    str2 = "body";
                    self.body = self.createElement("body");
                    str3 = "html";
                    self.documentElement = self.createElement("html");
                    documentElement = self.documentElement;
                    appendChildResult = documentElement.appendChild(self.head);
                    documentElement2 = self.documentElement;
                    appendChildResult1 = documentElement2.appendChild(self.body);
                    items = [];
                    items[0] = self.documentElement;
                    self.childNodes = items;
                    num = 9;
                    self.nodeType = 9;
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
                tmp2 = U(self, tmp);
                return;
              }
            }
            if (!closure_146_1) {
              class Ue {
                constructor() {
                  self = this;
                  tmp = Ue;
                  if (typeof Symbol !== "undefined") {
                    _Symbol3 = Symbol;
                    if (tmp[Symbol.hasInstance]) {
                      _Symbol2 = Symbol;
                      tmp2 = tmp[Symbol.hasInstance](self);
                    }
                    if (tmp2) {
                      str = "head";
                      self.head = self.createElement("head");
                      str2 = "body";
                      self.body = self.createElement("body");
                      str3 = "html";
                      self.documentElement = self.createElement("html");
                      documentElement = self.documentElement;
                      appendChildResult = documentElement.appendChild(self.head);
                      documentElement2 = self.documentElement;
                      appendChildResult1 = documentElement2.appendChild(self.body);
                      items = [];
                      items[0] = self.documentElement;
                      self.childNodes = items;
                      num = 9;
                      self.nodeType = 9;
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
                  tmp2 = U(self, tmp);
                  return;
                }
              }
              const obj1 = { exports: {} };
              closure_146_1 = obj1;
              closure_146_0(obj1.exports, closure_146_1);
            }
            const _exports = closure_146_1.exports;
            if (typeof f98884 === "function") {
              class Ue {
                constructor() {
                  self = this;
                  tmp = Ue;
                  if (typeof Symbol !== "undefined") {
                    _Symbol3 = Symbol;
                    if (tmp[Symbol.hasInstance]) {
                      _Symbol2 = Symbol;
                      tmp2 = tmp[Symbol.hasInstance](self);
                    }
                    if (tmp2) {
                      str = "head";
                      self.head = self.createElement("head");
                      str2 = "body";
                      self.body = self.createElement("body");
                      str3 = "html";
                      self.documentElement = self.createElement("html");
                      documentElement = self.documentElement;
                      appendChildResult = documentElement.appendChild(self.head);
                      documentElement2 = self.documentElement;
                      appendChildResult1 = documentElement2.appendChild(self.body);
                      items = [];
                      items[0] = self.documentElement;
                      self.childNodes = items;
                      num = 9;
                      self.nodeType = 9;
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
                  tmp2 = U(self, tmp);
                  return;
                }
              }
              if (!closure_147_1) {
                class Ue {
                  constructor() {
                    self = this;
                    tmp = Ue;
                    if (typeof Symbol !== "undefined") {
                      _Symbol3 = Symbol;
                      if (tmp[Symbol.hasInstance]) {
                        _Symbol2 = Symbol;
                        tmp2 = tmp[Symbol.hasInstance](self);
                      }
                      if (tmp2) {
                        str = "head";
                        self.head = self.createElement("head");
                        str2 = "body";
                        self.body = self.createElement("body");
                        str3 = "html";
                        self.documentElement = self.createElement("html");
                        documentElement = self.documentElement;
                        appendChildResult = documentElement.appendChild(self.head);
                        documentElement2 = self.documentElement;
                        appendChildResult1 = documentElement2.appendChild(self.body);
                        items = [];
                        items[0] = self.documentElement;
                        self.childNodes = items;
                        num = 9;
                        self.nodeType = 9;
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
                    tmp2 = U(self, tmp);
                    return;
                  }
                }
                const obj2 = { exports: {} };
                closure_147_1 = obj2;
                closure_147_0(obj2.exports, closure_147_1);
              }
              closure_4 = closure_147_1.exports;
              if (typeof f98884 === "function") {
                class Ue {
                  constructor() {
                    self = this;
                    tmp = Ue;
                    if (typeof Symbol !== "undefined") {
                      _Symbol3 = Symbol;
                      if (tmp[Symbol.hasInstance]) {
                        _Symbol2 = Symbol;
                        tmp2 = tmp[Symbol.hasInstance](self);
                      }
                      if (tmp2) {
                        str = "head";
                        self.head = self.createElement("head");
                        str2 = "body";
                        self.body = self.createElement("body");
                        str3 = "html";
                        self.documentElement = self.createElement("html");
                        documentElement = self.documentElement;
                        appendChildResult = documentElement.appendChild(self.head);
                        documentElement2 = self.documentElement;
                        appendChildResult1 = documentElement2.appendChild(self.body);
                        items = [];
                        items[0] = self.documentElement;
                        self.childNodes = items;
                        num = 9;
                        self.nodeType = 9;
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
                    tmp2 = U(self, tmp);
                    return;
                  }
                }
                if (!closure_148_1) {
                  class Ue {
                    constructor() {
                      self = this;
                      tmp = Ue;
                      if (typeof Symbol !== "undefined") {
                        _Symbol3 = Symbol;
                        if (tmp[Symbol.hasInstance]) {
                          _Symbol2 = Symbol;
                          tmp2 = tmp[Symbol.hasInstance](self);
                        }
                        if (tmp2) {
                          str = "head";
                          self.head = self.createElement("head");
                          str2 = "body";
                          self.body = self.createElement("body");
                          str3 = "html";
                          self.documentElement = self.createElement("html");
                          documentElement = self.documentElement;
                          appendChildResult = documentElement.appendChild(self.head);
                          documentElement2 = self.documentElement;
                          appendChildResult1 = documentElement2.appendChild(self.body);
                          items = [];
                          items[0] = self.documentElement;
                          self.childNodes = items;
                          num = 9;
                          self.nodeType = 9;
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
                      tmp2 = U(self, tmp);
                      return;
                    }
                  }
                  obj3 = { exports: {} };
                  closure_148_1 = obj3;
                  closure_148_0(obj3.exports, closure_148_1);
                }
                closure_5 = closure_148_1.exports;
                if (typeof f98884 === "function") {
                  class Ue {
                    constructor() {
                      self = this;
                      tmp = Ue;
                      if (typeof Symbol !== "undefined") {
                        _Symbol3 = Symbol;
                        if (tmp[Symbol.hasInstance]) {
                          _Symbol2 = Symbol;
                          tmp2 = tmp[Symbol.hasInstance](self);
                        }
                        if (tmp2) {
                          str = "head";
                          self.head = self.createElement("head");
                          str2 = "body";
                          self.body = self.createElement("body");
                          str3 = "html";
                          self.documentElement = self.createElement("html");
                          documentElement = self.documentElement;
                          appendChildResult = documentElement.appendChild(self.head);
                          documentElement2 = self.documentElement;
                          appendChildResult1 = documentElement2.appendChild(self.body);
                          items = [];
                          items[0] = self.documentElement;
                          self.childNodes = items;
                          num = 9;
                          self.nodeType = 9;
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
                      tmp2 = U(self, tmp);
                      return;
                    }
                  }
                  if (!closure_142_1) {
                    class Ue {
                      constructor() {
                        self = this;
                        tmp = Ue;
                        if (typeof Symbol !== "undefined") {
                          _Symbol3 = Symbol;
                          if (tmp[Symbol.hasInstance]) {
                            _Symbol2 = Symbol;
                            tmp2 = tmp[Symbol.hasInstance](self);
                          }
                          if (tmp2) {
                            str = "head";
                            self.head = self.createElement("head");
                            str2 = "body";
                            self.body = self.createElement("body");
                            str3 = "html";
                            self.documentElement = self.createElement("html");
                            documentElement = self.documentElement;
                            appendChildResult = documentElement.appendChild(self.head);
                            documentElement2 = self.documentElement;
                            appendChildResult1 = documentElement2.appendChild(self.body);
                            items = [];
                            items[0] = self.documentElement;
                            self.childNodes = items;
                            num = 9;
                            self.nodeType = 9;
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
                        tmp2 = U(self, tmp);
                        return;
                      }
                    }
                    obj4 = { exports: {} };
                    closure_142_1 = obj4;
                    closure_142_0(obj4.exports, closure_142_1);
                  }
                  if (typeof f98884 === "function") {
                    class Ue {
                      constructor() {
                        self = this;
                        tmp = Ue;
                        if (typeof Symbol !== "undefined") {
                          _Symbol3 = Symbol;
                          if (tmp[Symbol.hasInstance]) {
                            _Symbol2 = Symbol;
                            tmp2 = tmp[Symbol.hasInstance](self);
                          }
                          if (tmp2) {
                            str = "head";
                            self.head = self.createElement("head");
                            str2 = "body";
                            self.body = self.createElement("body");
                            str3 = "html";
                            self.documentElement = self.createElement("html");
                            documentElement = self.documentElement;
                            appendChildResult = documentElement.appendChild(self.head);
                            documentElement2 = self.documentElement;
                            appendChildResult1 = documentElement2.appendChild(self.body);
                            items = [];
                            items[0] = self.documentElement;
                            self.childNodes = items;
                            num = 9;
                            self.nodeType = 9;
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
                        tmp2 = U(self, tmp);
                        return;
                      }
                    }
                    if (!closure_143_1) {
                      class Ue {
                        constructor() {
                          self = this;
                          tmp = Ue;
                          if (typeof Symbol !== "undefined") {
                            _Symbol3 = Symbol;
                            if (tmp[Symbol.hasInstance]) {
                              _Symbol2 = Symbol;
                              tmp2 = tmp[Symbol.hasInstance](self);
                            }
                            if (tmp2) {
                              str = "head";
                              self.head = self.createElement("head");
                              str2 = "body";
                              self.body = self.createElement("body");
                              str3 = "html";
                              self.documentElement = self.createElement("html");
                              documentElement = self.documentElement;
                              appendChildResult = documentElement.appendChild(self.head);
                              documentElement2 = self.documentElement;
                              appendChildResult1 = documentElement2.appendChild(self.body);
                              items = [];
                              items[0] = self.documentElement;
                              self.childNodes = items;
                              num = 9;
                              self.nodeType = 9;
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
                          tmp2 = U(self, tmp);
                          return;
                        }
                      }
                      const obj5 = { exports: {} };
                      closure_143_1 = obj5;
                      closure_143_0(obj5.exports, closure_143_1);
                    }
                    if (typeof f98884 === "function") {
                      class Ue {
                        constructor() {
                          self = this;
                          tmp = Ue;
                          if (typeof Symbol !== "undefined") {
                            _Symbol3 = Symbol;
                            if (tmp[Symbol.hasInstance]) {
                              _Symbol2 = Symbol;
                              tmp2 = tmp[Symbol.hasInstance](self);
                            }
                            if (tmp2) {
                              str = "head";
                              self.head = self.createElement("head");
                              str2 = "body";
                              self.body = self.createElement("body");
                              str3 = "html";
                              self.documentElement = self.createElement("html");
                              documentElement = self.documentElement;
                              appendChildResult = documentElement.appendChild(self.head);
                              documentElement2 = self.documentElement;
                              appendChildResult1 = documentElement2.appendChild(self.body);
                              items = [];
                              items[0] = self.documentElement;
                              self.childNodes = items;
                              num = 9;
                              self.nodeType = 9;
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
                          tmp2 = U(self, tmp);
                          return;
                        }
                      }
                      if (!closure_144_1) {
                        class Ue {
                          constructor() {
                            self = this;
                            tmp = Ue;
                            if (typeof Symbol !== "undefined") {
                              _Symbol3 = Symbol;
                              if (tmp[Symbol.hasInstance]) {
                                _Symbol2 = Symbol;
                                tmp2 = tmp[Symbol.hasInstance](self);
                              }
                              if (tmp2) {
                                str = "head";
                                self.head = self.createElement("head");
                                str2 = "body";
                                self.body = self.createElement("body");
                                str3 = "html";
                                self.documentElement = self.createElement("html");
                                documentElement = self.documentElement;
                                appendChildResult = documentElement.appendChild(self.head);
                                documentElement2 = self.documentElement;
                                appendChildResult1 = documentElement2.appendChild(self.body);
                                items = [];
                                items[0] = self.documentElement;
                                self.childNodes = items;
                                num = 9;
                                self.nodeType = 9;
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
                            tmp2 = U(self, tmp);
                            return;
                          }
                        }
                        obj6 = { exports: {} };
                        closure_144_1 = obj6;
                        closure_144_0(obj6.exports, closure_144_1);
                      }
                      arg1.exports = Ue;
                      const prototype = Ue.prototype;
                      prototype.createTextNode = function(arg0) {
                        return new closure_2(arg0, this);
                      };
                      prototype.createElementNS = function(arg0, arg1) {
                        let StringResult = null;
                        if (null !== arg0) {
                          const _String = String;
                          StringResult = String(arg0);
                        }
                        return new _exports(arg1, this, StringResult);
                      };
                      prototype.createElement = function(arg0) {
                        return new _exports(arg0, this);
                      };
                      prototype.createDocumentFragment = function() {
                        return new closure_4(this);
                      };
                      prototype.createEvent = (arg0) => new closure_5(arg0);
                      prototype.createComment = function(arg0) {
                        return new closure_1(arg0, this);
                      };
                      prototype.getElementById = function(arg0) {
                        closure_0 = String(arg0);
                        return closure_0(this.childNodes, (id) => {
                          if (String(id.id) === closure_0) {
                            return id;
                          }
                        }) || null;
                      };
                      prototype.getElementsByClassName = _exports.prototype.getElementsByClassName;
                      prototype.getElementsByTagName = _exports.prototype.getElementsByTagName;
                      prototype.contains = _exports.prototype.contains;
                      prototype.removeEventListener = closure_144_1.exports;
                      prototype.addEventListener = tmp34;
                      prototype.dispatchEvent = tmp29;
                    } else {
                      class Ue {
                        constructor() {
                          self = this;
                          tmp = Ue;
                          if (typeof Symbol !== "undefined") {
                            _Symbol3 = Symbol;
                            if (tmp[Symbol.hasInstance]) {
                              _Symbol2 = Symbol;
                              tmp2 = tmp[Symbol.hasInstance](self);
                            }
                            if (tmp2) {
                              str = "head";
                              self.head = self.createElement("head");
                              str2 = "body";
                              self.body = self.createElement("body");
                              str3 = "html";
                              self.documentElement = self.createElement("html");
                              documentElement = self.documentElement;
                              appendChildResult = documentElement.appendChild(self.head);
                              documentElement2 = self.documentElement;
                              appendChildResult1 = documentElement2.appendChild(self.body);
                              items = [];
                              items[0] = self.documentElement;
                              self.childNodes = items;
                              num = 9;
                              self.nodeType = 9;
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
                          tmp2 = U(self, tmp);
                          return;
                        }
                      }
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    class Ue {
                      constructor() {
                        self = this;
                        tmp = Ue;
                        if (typeof Symbol !== "undefined") {
                          _Symbol3 = Symbol;
                          if (tmp[Symbol.hasInstance]) {
                            _Symbol2 = Symbol;
                            tmp2 = tmp[Symbol.hasInstance](self);
                          }
                          if (tmp2) {
                            str = "head";
                            self.head = self.createElement("head");
                            str2 = "body";
                            self.body = self.createElement("body");
                            str3 = "html";
                            self.documentElement = self.createElement("html");
                            documentElement = self.documentElement;
                            appendChildResult = documentElement.appendChild(self.head);
                            documentElement2 = self.documentElement;
                            appendChildResult1 = documentElement2.appendChild(self.body);
                            items = [];
                            items[0] = self.documentElement;
                            self.childNodes = items;
                            num = 9;
                            self.nodeType = 9;
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
                        tmp2 = U(self, tmp);
                        return;
                      }
                    }
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  class Ue {
                    constructor() {
                      self = this;
                      tmp = Ue;
                      if (typeof Symbol !== "undefined") {
                        _Symbol3 = Symbol;
                        if (tmp[Symbol.hasInstance]) {
                          _Symbol2 = Symbol;
                          tmp2 = tmp[Symbol.hasInstance](self);
                        }
                        if (tmp2) {
                          str = "head";
                          self.head = self.createElement("head");
                          str2 = "body";
                          self.body = self.createElement("body");
                          str3 = "html";
                          self.documentElement = self.createElement("html");
                          documentElement = self.documentElement;
                          appendChildResult = documentElement.appendChild(self.head);
                          documentElement2 = self.documentElement;
                          appendChildResult1 = documentElement2.appendChild(self.body);
                          items = [];
                          items[0] = self.documentElement;
                          self.childNodes = items;
                          num = 9;
                          self.nodeType = 9;
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
                      tmp2 = U(self, tmp);
                      return;
                    }
                  }
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                class Ue {
                  constructor() {
                    self = this;
                    tmp = Ue;
                    if (typeof Symbol !== "undefined") {
                      _Symbol3 = Symbol;
                      if (tmp[Symbol.hasInstance]) {
                        _Symbol2 = Symbol;
                        tmp2 = tmp[Symbol.hasInstance](self);
                      }
                      if (tmp2) {
                        str = "head";
                        self.head = self.createElement("head");
                        str2 = "body";
                        self.body = self.createElement("body");
                        str3 = "html";
                        self.documentElement = self.createElement("html");
                        documentElement = self.documentElement;
                        appendChildResult = documentElement.appendChild(self.head);
                        documentElement2 = self.documentElement;
                        appendChildResult1 = documentElement2.appendChild(self.body);
                        items = [];
                        items[0] = self.documentElement;
                        self.childNodes = items;
                        num = 9;
                        self.nodeType = 9;
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
                    tmp2 = U(self, tmp);
                    return;
                  }
                }
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              class Ue {
                constructor() {
                  self = this;
                  tmp = Ue;
                  if (typeof Symbol !== "undefined") {
                    _Symbol3 = Symbol;
                    if (tmp[Symbol.hasInstance]) {
                      _Symbol2 = Symbol;
                      tmp2 = tmp[Symbol.hasInstance](self);
                    }
                    if (tmp2) {
                      str = "head";
                      self.head = self.createElement("head");
                      str2 = "body";
                      self.body = self.createElement("body");
                      str3 = "html";
                      self.documentElement = self.createElement("html");
                      documentElement = self.documentElement;
                      appendChildResult = documentElement.appendChild(self.head);
                      documentElement2 = self.documentElement;
                      appendChildResult1 = documentElement2.appendChild(self.body);
                      items = [];
                      items[0] = self.documentElement;
                      self.childNodes = items;
                      num = 9;
                      self.nodeType = 9;
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
                  tmp2 = U(self, tmp);
                  return;
                }
              }
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            class Ue {
              constructor() {
                self = this;
                tmp = Ue;
                if (typeof Symbol !== "undefined") {
                  _Symbol3 = Symbol;
                  if (tmp[Symbol.hasInstance]) {
                    _Symbol2 = Symbol;
                    tmp2 = tmp[Symbol.hasInstance](self);
                  }
                  if (tmp2) {
                    str = "head";
                    self.head = self.createElement("head");
                    str2 = "body";
                    self.body = self.createElement("body");
                    str3 = "html";
                    self.documentElement = self.createElement("html");
                    documentElement = self.documentElement;
                    appendChildResult = documentElement.appendChild(self.head);
                    documentElement2 = self.documentElement;
                    appendChildResult1 = documentElement2.appendChild(self.body);
                    items = [];
                    items[0] = self.documentElement;
                    self.childNodes = items;
                    num = 9;
                    self.nodeType = 9;
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
                tmp2 = U(self, tmp);
                return;
              }
            }
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          class Ue {
            constructor() {
              self = this;
              tmp = Ue;
              if (typeof Symbol !== "undefined") {
                _Symbol3 = Symbol;
                if (tmp[Symbol.hasInstance]) {
                  _Symbol2 = Symbol;
                  tmp2 = tmp[Symbol.hasInstance](self);
                }
                if (tmp2) {
                  str = "head";
                  self.head = self.createElement("head");
                  str2 = "body";
                  self.body = self.createElement("body");
                  str3 = "html";
                  self.documentElement = self.createElement("html");
                  documentElement = self.documentElement;
                  appendChildResult = documentElement.appendChild(self.head);
                  documentElement2 = self.documentElement;
                  appendChildResult1 = documentElement2.appendChild(self.body);
                  items = [];
                  items[0] = self.documentElement;
                  self.childNodes = items;
                  num = 9;
                  self.nodeType = 9;
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
              tmp2 = U(self, tmp);
              return;
            }
          }
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        class Ue {
          constructor() {
            self = this;
            tmp = Ue;
            if (typeof Symbol !== "undefined") {
              _Symbol3 = Symbol;
              if (tmp[Symbol.hasInstance]) {
                _Symbol2 = Symbol;
                tmp2 = tmp[Symbol.hasInstance](self);
              }
              if (tmp2) {
                str = "head";
                self.head = self.createElement("head");
                str2 = "body";
                self.body = self.createElement("body");
                str3 = "html";
                self.documentElement = self.createElement("html");
                documentElement = self.documentElement;
                appendChildResult = documentElement.appendChild(self.head);
                documentElement2 = self.documentElement;
                appendChildResult1 = documentElement2.appendChild(self.body);
                items = [];
                items[0] = self.documentElement;
                self.childNodes = items;
                num = 9;
                self.nodeType = 9;
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
            tmp2 = U(self, tmp);
            return;
          }
        }
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      class Ue {
        constructor() {
          self = this;
          tmp = Ue;
          if (typeof Symbol !== "undefined") {
            _Symbol3 = Symbol;
            if (tmp[Symbol.hasInstance]) {
              _Symbol2 = Symbol;
              tmp2 = tmp[Symbol.hasInstance](self);
            }
            if (tmp2) {
              str = "head";
              self.head = self.createElement("head");
              str2 = "body";
              self.body = self.createElement("body");
              str3 = "html";
              self.documentElement = self.createElement("html");
              documentElement = self.documentElement;
              appendChildResult = documentElement.appendChild(self.head);
              documentElement2 = self.documentElement;
              appendChildResult1 = documentElement2.appendChild(self.body);
              items = [];
              items[0] = self.documentElement;
              self.childNodes = items;
              num = 9;
              self.nodeType = 9;
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
          tmp2 = U(self, tmp);
          return;
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    class Ue {
      constructor() {
        self = this;
        tmp = Ue;
        if (typeof Symbol !== "undefined") {
          _Symbol3 = Symbol;
          if (tmp[Symbol.hasInstance]) {
            _Symbol2 = Symbol;
            tmp2 = tmp[Symbol.hasInstance](self);
          }
          if (tmp2) {
            str = "head";
            self.head = self.createElement("head");
            str2 = "body";
            self.body = self.createElement("body");
            str3 = "html";
            self.documentElement = self.createElement("html");
            documentElement = self.documentElement;
            appendChildResult = documentElement.appendChild(self.head);
            documentElement2 = self.documentElement;
            appendChildResult1 = documentElement2.appendChild(self.body);
            items = [];
            items[0] = self.documentElement;
            self.childNodes = items;
            num = 9;
            self.nodeType = 9;
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
        tmp2 = U(self, tmp);
        return;
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_141_1;
f98884 = () => {

};
let closure_142_0 = (arg0, arg1) => {
  if (typeof f98884 === "function") {
    if (!closure_149_1) {
      const obj = { exports: {} };
      closure_149_1 = obj;
      closure_149_0(obj.exports, closure_149_1);
    }
    const _exports = new closure_149_1.exports();
    arg1.exports = _exports;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_142_1;
f98884 = () => {

};
let obj = {};
obj = {
  default() {
    return ne;
  }
};
for (const key10058 in obj) {
  obj = { get: null, enumerable: true };
  obj.get = obj[key10058];
  let definePropertyResult = defineProperty(obj, key10058, obj);
  continue;
}
let closure_143_0 = obj;
if (typeof obj === "object") {
  const ownPropertyNames = getOwnPropertyNames(obj);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    do {
      let tmp3 = ownPropertyNames[num];
      let call = hasOwnProperty.call;
      let tmp5 = typeof call === "unknown" ? hasOwnProperty(tmp3) : call(definePropertyResult1, tmp3);
      let tmp6 = !tmp5;
      if (!tmp5) {
        tmp6 = tmp3 !== undefined;
      }
      if (tmp6) {
        let obj1 = { get: null, enumerable: null };
        fn = (arg0) => value[arg0];
        obj1.get = fn.bind(null, tmp3);
        let ownPropertyDescriptor = getOwnPropertyDescriptor(obj, tmp3);
        let enumerable = !ownPropertyDescriptor;
        if (ownPropertyDescriptor) {
          enumerable = ownPropertyDescriptor.enumerable;
        }
        obj1.enumerable = enumerable;
        let definePropertyResult2 = defineProperty(definePropertyResult1, tmp3, obj1);
      }
      num = num + 1;
    } while (num < length);
  }
}
class G {
  constructor(arg0, arg1, arg2) {
    if (null != global) {
      tmp = closure_1;
      tmp2 = getPrototypeOf;
      obj = closure_1(getPrototypeOf(global));
    } else {
      obj = {};
    }
    tmp3 = pt;
    if (!global) {
      tmp5 = defineProperty;
      obj = { value: null, enumerable: true };
      obj.value = global;
      str = "default";
      tmp4 = defineProperty(obj, "default", obj);
    } else {
      tmp4 = obj;
    }
    if (typeof tmp3 === "function") {
      closure_0 = global;
      if (!global) {
        return tmp4;
      }
      tmp6 = getOwnPropertyNames;
      arr = getOwnPropertyNames(global);
      length = arr.length;
      num = 0;
      num2 = 1;
      if (0 < length) {
        do {
          tmp7 = arr[num];
          tmp8 = hasOwnProperty;
          call = hasOwnProperty.call;
          tmp9 = num;
          tmp10 = typeof call === "unknown" ? tmp8(tmp7) : call(tmp4, tmp7);
          tmp11 = !tmp10;
          if (!tmp10) {
            tmp11 = tmp7 !== undefined;
          }
          if (tmp11) {
            obj1 = { get: null, enumerable: null };
            fn = (arg0) => value[arg0];
            tmp12 = defineProperty;
            obj1.get = fn.bind(null, tmp7);
            tmp13 = getOwnPropertyDescriptor;
            tmp14 = getOwnPropertyDescriptor(global, tmp7);
            enumerable = !tmp14;
            if (tmp14) {
              enumerable = tmp14.enumerable;
            }
            obj1.enumerable = enumerable;
            tmp12Result = tmp12(tmp4, tmp7, obj1);
          }
          num = num + 1;
        } while (num < length);
      }
    } else {
      str2 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
    return;
  }
}
let obj2 = { exports: {} };
((arg0, arg1) => {
  if (typeof window !== "undefined") {
    let _window = window;
  } else {
    _window = f98876;
    if (undefined === f98876) {
      const _self = self;
    }
  }
  arg1.exports = _window;
})(0, obj2);
const GResult = G(obj2.exports);
let closure_25 = G(obj2.exports);
let closure_26 = G(obj2.exports);
let obj3 = {
  now() {
    const _performance = closure_26.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    let navigationStart = timing;
    if (timing) {
      navigationStart = timing.navigationStart;
    }
    if (typeof navigationStart === "number") {
      if (typeof _performance.now === "function") {
        let sum = navigationStart + _performance.now();
      }
      const _Math = Math;
      return Math.round(sum);
    }
    sum = Date.now();
  }
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
      items[num] = 16 * Math.random() | 0;
      num = num + 1;
    } while (num < 32);
  }
  closure_1 = 0;
  let str = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
    if ("x" === arg0) {
      let str = items[closure_1];
    } else {
      str = 3 & items[closure_1] | 8;
    }
    closure_1 = closure_1 + 1;
    return str.toString(16);
  });
  const str2 = obj3.now();
  let substr;
  if (null != str2) {
    substr = str2.toString(16).substring(3);
    const str3 = str2.toString(16);
  }
  let sum = str;
  if (substr) {
    sum = str.substring(0, 28) + substr;
  }
  return sum;
}
class Oe {
  constructor() {
    random = Math.random();
    str = random * Math.pow(36, 6) | 0;
    text = `000000${str.toString(36)}`;
    return `000000${str.toString(36)}`.slice(-6);
  }
}
function J(nodeName) {
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
    const element = document.querySelector(nodeName);
    let tmp3 = element;
    if (element) {
      tmp3 = !element.muxId;
    }
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
  } catch (err) {
  }
}
function se(nodeName) {
  if (nodeName) {
    if (undefined !== nodeName.nodeName) {
      let tmp2 = J(nodeName);
      let element = nodeName;
    }
    let str2 = "";
    if (element) {
      str2 = "";
      if (element.nodeName) {
        str2 = element.nodeName.toLowerCase();
      }
    }
    items = [element, tmp2, str2];
    return items;
  }
  element = document.querySelector(nodeName);
  tmp2 = nodeName;
}
let c33 = 0;
let c34 = 1;
let c35 = 2;
let c36 = 3;
let c37 = 4;
let tmp11 = ((arg0) => {
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
    let items1 = items;
  } else {
    items1 = [_console];
  }
  const bind = trace.bind;
  closure_1 = bind.apply(trace, V(items1));
  const bind2 = info.bind;
  closure_2 = bind2.apply(info, V(items1));
  const bind3 = debug.bind;
  closure_3 = bind3.apply(debug, V(items1));
  const bind4 = warn.bind;
  closure_4 = bind4.apply(warn, V(items1));
  const bind5 = error.bind;
  closure_5 = bind5.apply(error, V(items1));
  closure_6 = num;
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
    }
  };
  Object.defineProperty(obj, "level", {
    get: () => closure_6,
    set: function(arg0) {
      let tmp = arg0;
      if (arg0 !== this.level) {
        if (null == tmp) {
          tmp = num;
        }
        closure_6 = tmp;
      }
    }
  });
  return obj;
})("[mux]");
const __initData16 = tmp11;
let closure_39 = G(obj2.exports);
if (closure_129_0) {
  closure_129_0 = 0;
  closure_129_1 = tmp12(0);
}
if (closure_130_0) {
  closure_130_0 = 0;
  closure_130_1 = tmp13(0);
}
class N {
  constructor(arg0, arg1, arg2) {
    for (let num = 0; num < require.length; num = num + 1) {
      tmp2 = require[num];
      flag = tmp2.enumerable;
      tmp3 = num;
      if (!flag) {
        flag = false;
      }
      tmp2.enumerable = flag;
      tmp2.configurable = true;
      if ("value" in tmp2) {
        tmp2.writable = true;
      }
      _Object = Object;
      definePropertyResult = Object.defineProperty(tmp, tmp2.key, tmp2);
    }
    return global;
  }
}
class F {
  constructor(arg0) {
    if (typeof re === "function") {
      tmp = global;
      if (typeof global === "string") {
        str3 = "";
        if ("" !== global) {
          tmp2 = global.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
          str = tmp2[4];
          first = undefined;
          if (str) {
            tmp4 = str.match(/[^\.]+\.[^\.]+$/) || [];
            first = tmp4[0];
          }
          items = [, ];
          items[0] = str;
          items[1] = first;
        }
        return items[0];
      }
      items = ["localhost"];
    } else {
      str2 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
    return;
  }
}
let closure_44 = F;
function re(str) {
  if (typeof str === "string") {
    if ("" !== str) {
      str = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
      let first;
      if (str) {
        first = str.match(/[^\.]+\.[^\.]+$/) || [][0];
        const tmp3 = str.match(/[^\.]+\.[^\.]+$/) || [];
      }
      items = [str, first];
      return items;
    }
  }
  return ["localhost"];
}
let closure_46 = G(obj2.exports);
let closure_47 = {
  exists() {
    const _performance = closure_46.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    return undefined !== timing;
  },
  domContentLoadedEventEnd() {
    const _performance = closure_46.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    let domContentLoadedEventEnd = timing;
    if (timing) {
      domContentLoadedEventEnd = timing.domContentLoadedEventEnd;
    }
    return domContentLoadedEventEnd;
  },
  navigationStart() {
    const _performance = closure_46.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    let navigationStart = timing;
    if (timing) {
      navigationStart = timing.navigationStart;
    }
    return navigationStart;
  }
};
let items = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"];
let items1 = ["x-cdn", "content-type"];
let closure_50 = items1.concat(items);
function Me(arg0) {

}
function He(arg0) {

}
function Se(arg0) {

}
function Nt(request, dashjs) {
  if (request) {
    if (request.requestEndDate) {
      if (typeof closure_44 === "function") {
        if (typeof re === "function") {
          if (typeof str === "string") {
            if ("" !== str) {
              const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
              let first;
              if (str2) {
                first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                const tmp5 = str2.match(/[^\.]+\.[^\.]+$/) || [];
              }
              items = [str2, first];
              const tmp3 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
            }
            const _Date = Date;
            ({ url, bytesLoaded } = request);
            const date = new Date(request.requestStartDate);
            const _Date2 = Date;
            const time = date.getTime();
            const date1 = new Date(request.firstByteDate);
            const _Date3 = Date;
            const time1 = date1.getTime();
            const date2 = new Date(request.requestEndDate);
            const _isNaN = isNaN;
            const time2 = date2.getTime();
            let num2 = 0;
            if (!isNaN(request.duration)) {
              num2 = request.duration;
            }
            if (typeof dashjs.getMetricsFor === "function") {
              let HttpList = dashjs.getMetricsFor(request.mediaType).HttpList;
            } else {
              const dashMetrics = dashjs.getDashMetrics();
              HttpList = dashMetrics.getHttpRequests(request.mediaType);
            }
            let tmp20;
            if (HttpList.length > 0) {
              let str3 = HttpList[HttpList.length - 1]._responseHeaders || "";
              let obj = {};
              if (!str3) {
                str3 = "";
              }
              const parts = str3.trim().split(/[\r\n]+/);
              const item = parts.forEach((item) => {
                if (item) {
                  const parts = item.split(": ");
                  const str2 = parts.shift();
                  let tmp = str2;
                  if (str2) {
                    let tmp3 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                    if (!tmp3) {
                      const formatted = str2.toLowerCase();
                      tmp3 = 0 === formatted.indexOf("x-litix-");
                    }
                    tmp = tmp3;
                  }
                  if (tmp) {
                    obj[str2] = parts.join(": ");
                  }
                }
              });
              tmp20 = obj;
              const str4 = str3.trim();
            }
            obj = { requestStart: time, requestResponseStart: time1, requestResponseEnd: time2, requestBytesLoaded: bytesLoaded, requestResponseHeaders: tmp20, requestMediaDuration: num2, requestHostname: items[0], requestUrl: url, requestId: null };
            let tmp22;
            if (tmp20) {
              obj = tmp20;
              let tmp23;
              if (tmp20) {
                const found = items.find((item) => undefined !== obj[item]);
                let tmp26;
                if (found) {
                  tmp26 = tmp20[found];
                }
                tmp23 = tmp26;
              }
              tmp22 = tmp23;
            }
            obj.requestId = tmp22;
            return obj;
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
function pa(arg0) {

}
function Ct(arg0, arg1, arg2) {

}
let c57 = 0;
let fn2 = function r() {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_listeners" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_listeners", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._listeners = undefined;
      }
    } else {
      const _TypeError = TypeError;
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
    self._listeners = this._listeners || {};
    items = self._listeners[arg0];
    if (!items) {
      items = [];
    }
    self._listeners[arg0] = items;
    let bindResult = _eventEmitterGuid;
    if (self) {
      bindResult = _eventEmitterGuid.bind(self);
    }
    self._listeners[arg0].push(bindResult);
    return bindResult;
  }
};
let items2 = [
  entry,
  {
    key: "off",
    value(arg0, arg1) {
      const _eventEmitterGuid = arg1;
      let _listeners = this._listeners;
      if (_listeners) {
        _listeners = tmp._listeners[arg0];
      }
      if (_listeners) {
        const item = _listeners.forEach((_eventEmitterGuid, index) => {
          if (_eventEmitterGuid._eventEmitterGuid === _eventEmitterGuid._eventEmitterGuid) {
            _listeners.splice(index, 1);
          }
        });
      }
    }
  },
  {
    key: "one",
    value(arg0, _eventEmitterGuid, arg2) {
      closure_0 = arg0;
      closure_1 = _eventEmitterGuid;
      closure_2 = arg2;
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
        const apply = closure_1.apply;
        self = closure_2;
        if (!closure_2) {
          self = this;
        }
        if (typeof apply === "unknown") {
          HermesBuiltin.applyArguments(self);
        } else {
          apply(self, arguments);
        }
      };
      fn._eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      self.on(arg0, fn);
    }
  },
  {
    key: "emit",
    value(arg0, arg1) {
      const self = this;
      if (this._listeners) {
        if (!arg1) {
          let obj = {};
        }
        const substr = self._listeners["before" + arg0] || [].slice();
        const item = substr.forEach((call) => {
          call = call.call;
          obj = { type: f98876 };
          if (typeof call === "unknown") {
            call(obj, tmp2);
          } else {
            call(closure_1, obj, tmp2);
          }
        });
        const substr1 = self._listeners["before*"] || [].slice();
        const item1 = substr1.forEach((call) => {
          call = call.call;
          obj = { type: f98876 };
          if (typeof call === "unknown") {
            call(obj, tmp2);
          } else {
            call(closure_1, obj, tmp2);
          }
        });
        const substr2 = self._listeners[arg0] || [].slice();
        const item2 = substr2.forEach((call) => {
          call = call.call;
          obj = { type: f98876 };
          if (typeof call === "unknown") {
            call(obj, tmp2);
          } else {
            call(closure_1, obj, tmp2);
          }
        });
        const substr3 = self._listeners["after" + arg0] || [].slice();
        const item3 = substr3.forEach((call) => {
          call = call.call;
          obj = { type: f98876 };
          if (typeof call === "unknown") {
            call(obj, tmp2);
          } else {
            call(closure_1, obj, tmp2);
          }
        });
        const arr = self._listeners["before" + arg0] || [];
        const arr2 = self._listeners["before*"] || [];
        const arr3 = self._listeners[arg0] || [];
        const arr4 = self._listeners["after" + arg0] || [];
      }
    }
  }
];
N(fn2, items2);
let closure_58 = G(obj2.exports);
let fn3 = function r(pm) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_playbackHeartbeatInterval" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_playbackHeartbeatInterval", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._playbackHeartbeatInterval = undefined;
      }
      if ("_playheadShouldBeProgressing" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_playheadShouldBeProgressing", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._playheadShouldBeProgressing = undefined;
      }
      if ("pm" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
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
        if (pm.data.player_is_paused) {
          const result = obj._stopPlaybackHeartbeatInterval();
        } else {
          const result1 = obj._startPlaybackHeartbeatInterval();
        }
      });
      pm.on("timeupdate", () => {
        if (null !== self._playbackHeartbeatInterval) {
          pm.emit("playbackheartbeat");
        }
      });
      pm.on("devicesleep", (arg0, viewer_time) => {
        if (null !== self._playbackHeartbeatInterval) {
          closure_58.default.clearInterval(tmp._playbackHeartbeatInterval);
          const obj = { viewer_time: viewer_time.viewer_time };
          pm.emit("playbackheartbeatend", obj);
          tmp._playbackHeartbeatInterval = null;
          const _default = closure_58.default;
        }
      });
    } else {
      const _TypeError = TypeError;
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
};
const entry1 = {
  key: "_startPlaybackHeartbeatInterval",
  value() {
    const self = this;
    if (null === this._playbackHeartbeatInterval) {
      let pm = self.pm;
      pm.emit("playbackheartbeat");
      self._playbackHeartbeatInterval = closure_58.default.setInterval(() => {
        const pm = self.pm;
        pm.emit("playbackheartbeat");
      }, self.pm.playbackHeartbeatTime);
      const _default = closure_58.default;
    }
  }
};
let items3 = [
  entry1,
  {
    key: "_stopPlaybackHeartbeatInterval",
    value() {
      const self = this;
      this._playheadShouldBeProgressing = false;
      if (null !== this._playbackHeartbeatInterval) {
        closure_58.default.clearInterval(self._playbackHeartbeatInterval);
        const pm = self.pm;
        pm.emit("playbackheartbeatend");
        self._playbackHeartbeatInterval = null;
        const _default = closure_58.default;
      }
    }
  }
];
N(fn3, items3);
let fn4 = function r(on) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("viewErrored" in self) {
        const _Object = Object;
        Object.defineProperty(self, "viewErrored", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self.viewErrored = undefined;
      }
      on.on("viewinit", () => {
        self.viewErrored = false;
      });
      on.on("error", (arg0, player_error_code) => {
        try {
          const obj = { player_error_code: null, player_error_message: null, player_error_context: null, player_error_severity: null, player_error_business_exception: null };
          ({ player_error_code: obj.player_error_code, player_error_message: obj.player_error_message, player_error_context: obj.player_error_context, player_error_severity: obj.player_error_severity, player_error_business_exception: obj.player_error_business_exception } = player_error_code);
          const errorTranslatorResult = on.errorTranslator(obj);
          if (errorTranslatorResult) {
            player_error_code = tmp5.player_error_code;
            if (!player_error_code) {
              player_error_code = player_error_code.player_error_code;
            }
            tmp3.data.player_error_code = player_error_code;
            let player_error_message = tmp5.player_error_message;
            if (!player_error_message) {
              player_error_message = player_error_code.player_error_message;
            }
            tmp3.data.player_error_message = player_error_message;
            let player_error_context = tmp5.player_error_context;
            if (!player_error_context) {
              player_error_context = player_error_code.player_error_context;
            }
            tmp3.data.player_error_context = player_error_context;
            let player_error_severity = tmp5.player_error_severity;
            if (!player_error_severity) {
              player_error_severity = player_error_code.player_error_severity;
            }
            tmp3.data.player_error_severity = player_error_severity;
            let player_error_business_exception = errorTranslatorResult.player_error_business_exception;
            if (!player_error_business_exception) {
              player_error_business_exception = player_error_code.player_error_business_exception;
            }
            tmp3.data.player_error_business_exception = player_error_business_exception;
            self.viewErrored = true;
          }
        } catch (tmp16) {
          const log = on.mux.log;
          log.warn("Exception in error translator callback.", tmp16);
          self.viewErrored = true;
        }
      });
      on.on("aftererror", () => {
        const data = on.data;
        let tmp5 = null === data;
        if (!tmp5) {
          tmp5 = undefined === data;
        }
        if (!tmp5) {
          delete tmp3[tmp2];
        }
        const data2 = tmp4.data;
        let tmp6 = null === data2;
        if (!tmp6) {
          tmp6 = undefined === data2;
        }
        if (!tmp6) {
          delete tmp3[tmp2];
        }
        const data3 = tmp4.data;
        let tmp7 = null === data3;
        if (!tmp7) {
          tmp7 = undefined === data3;
        }
        if (!tmp7) {
          delete tmp3[tmp2];
        }
        const data4 = tmp4.data;
        let tmp8 = null === data4;
        if (!tmp8) {
          tmp8 = undefined === data4;
        }
        if (!tmp8) {
          delete tmp3[tmp2];
        }
        const data5 = tmp4.data;
        let tmp9 = null === data5;
        if (!tmp9) {
          tmp9 = undefined === data5;
        }
        if (!tmp9) {
          delete tmp2[tmp];
        }
      });
    } else {
      const _TypeError = TypeError;
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
};
let fn5 = function r(pm) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_watchTimeTrackerLastCheckedTime" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_watchTimeTrackerLastCheckedTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._watchTimeTrackerLastCheckedTime = undefined;
      }
      if ("pm" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
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
  }
};
let items4 = [
  entry2,
  {
    key: "_clearWatchTimeState",
    value(arg0, arg1) {
      this._updateWatchTime(arg0, arg1);
      this._watchTimeTrackerLastCheckedTime = null;
    }
  }
];
N(fn5, items4);
let fn6 = function r(pm) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_playbackTimeTrackerLastPlayheadPosition" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_playbackTimeTrackerLastPlayheadPosition", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._playbackTimeTrackerLastPlayheadPosition = undefined;
      }
      if ("_lastTime" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_lastTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._lastTime = undefined;
      }
      if ("_isAdPlaying" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_isAdPlaying", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._isAdPlaying = undefined;
      }
      if ("_callbackUpdatePlaybackTime" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_callbackUpdatePlaybackTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._callbackUpdatePlaybackTime = undefined;
      }
      if ("pm" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      self._playbackTimeTrackerLastPlayheadPosition = -1;
      self._lastTime = __initData5.now();
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
        self._lastTime = obj3.now();
        self._isAdPlaying = false;
        self._callbackUpdatePlaybackTime = null;
      });
    } else {
      const _TypeError = TypeError;
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
};
const entry3 = {
  key: "_startPlaybackTimeTracking",
  value() {
    const self = this;
    if (null === this._callbackUpdatePlaybackTime) {
      const _updatePlaybackTime = self._updatePlaybackTime;
      self._callbackUpdatePlaybackTime = _updatePlaybackTime.bind(self);
      self._playbackTimeTrackerLastPlayheadPosition = self.pm.data.player_playhead_time;
      self._lastTime = obj3.now();
      const pm = self.pm;
      pm.on("playbackheartbeat", self._callbackUpdatePlaybackTime);
    }
  }
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
    }
  },
  {
    key: "_updatePlaybackTime",
    value() {
      const self = this;
      const nowResult = obj3.now();
      const diff = nowResult - self._lastTime;
      if (self._playbackTimeTrackerLastPlayheadPosition >= 0) {
        if (tmp > self._playbackTimeTrackerLastPlayheadPosition) {
          let num = tmp - self._playbackTimeTrackerLastPlayheadPosition;
        }
        let tmp4 = num > 0;
        if (tmp4) {
          tmp4 = num <= 1000;
        }
        if (tmp4) {
          const data = self.pm.data;
          data.view_content_playback_time = data.view_content_playback_time || 0;
          data.view_content_playback_time = data.view_content_playback_time + num;
        }
        let tmp6 = null !== self._callbackUpdatePlaybackTime && diff > 0;
        if (tmp6) {
          tmp6 = diff <= 1000;
        }
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
        self._playbackTimeTrackerLastPlayheadPosition = tmp;
        self._lastTime = nowResult;
      }
      num = -1;
      if (self._isAdPlaying) {
        num = diff;
      }
    }
  }
];
N(fn6, items5);
let fn7 = function r(pm) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("pm" in self) {
        const _Object = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      const _updatePlayheadTime = self._updatePlayheadTime;
      const bindResult = _updatePlayheadTime.bind(self);
      closure_1 = bindResult;
      pm.on("playbackheartbeat", bindResult);
      pm.on("playbackheartbeatend", bindResult);
      pm.on("timeupdate", bindResult);
      pm.on("destroy", () => {
        pm.off("timeupdate", bindResult);
      });
    } else {
      const _TypeError = TypeError;
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
};
const entry4 = {
  key: "_updateMaxPlayheadPosition",
  value() {
    const self = this;
    if (undefined === this.pm.data.view_max_playhead_position) {
      let player_playhead_time = self.pm.data.player_playhead_time;
    } else {
      const _Math = Math;
      player_playhead_time = Math.max(self.pm.data.view_max_playhead_position, self.pm.data.player_playhead_time);
    }
    this.pm.data.view_max_playhead_position = player_playhead_time;
  }
};
const items6 = [
  entry4,
  {
    key: "_updatePlayheadTime",
    value(arg0, player_playhead_time) {
      const self = this;
      if (player_playhead_time) {
        if (player_playhead_time.player_playhead_time) {
          self.pm.data.player_playhead_time = player_playhead_time.player_playhead_time;
          if (tmp4) {
            self.pm.data.player_program_time = self.pm.currentFragmentPDT + self.pm.data.player_playhead_time - self.pm.currentFragmentStart;
          }
          const result = self._updateMaxPlayheadPosition();
          tmp4 = self.pm.currentFragmentPDT && self.pm.currentFragmentStart;
        }
      }
      if (self.pm.getPlayheadTime) {
        const pm = self.pm;
        const playheadTime = pm.getPlayheadTime();
        if (undefined !== playheadTime) {
          self.pm.data.player_playhead_time = playheadTime;
          if (tmp2) {
            self.pm.data.player_program_time = self.pm.currentFragmentPDT + self.pm.data.player_playhead_time - self.pm.currentFragmentStart;
          }
          const result1 = self._updateMaxPlayheadPosition();
          tmp2 = self.pm.currentFragmentPDT && self.pm.currentFragmentStart;
        }
      }
    }
  }
];
N(fn7, items6);
let c64 = 300000;
let fn8 = function r(disableRebufferTracking) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if (!disableRebufferTracking.disableRebufferTracking) {
        function i(arg0, arg1) {
          a(arg1);
          c1 = undefined;
        }
        function a(viewer_time) {
          if (viewer_time) {
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
              obj.emit("viewend");
              obj.send("viewend");
              const log = obj.mux.log;
              const concat = "Ending view after rebuffering for longer than ".concat;
              log.warn("Ending view after rebuffering for longer than ".concat(tmp4, "ms, future events will be ignored unless a programchange or videochange occurs."));
            }
          }
          if (tmp9) {
            tmp8.data.view_rebuffer_frequency = tmp8.data.view_rebuffer_count / tmp8.data.view_watch_time;
            tmp8.data.view_rebuffer_percentage = tmp8.data.view_rebuffer_duration / tmp8.data.view_watch_time;
          }
        }
        disableRebufferTracking.on("playbackheartbeat", (arg0, arg1) => {
          a(arg1);
        });
        disableRebufferTracking.on("rebufferstart", (arg0, viewer_time) => {
          if (!viewer_time) {
            const data = disableRebufferTracking.data;
            data.view_rebuffer_count = data.view_rebuffer_count || 0;
            data.view_rebuffer_count = data.view_rebuffer_count + 1;
            viewer_time = viewer_time.viewer_time;
            disableRebufferTracking.one("rebufferend", i);
            const tmp = data.view_rebuffer_count || 0;
          }
        });
        disableRebufferTracking.on("viewinit", () => {
          c1 = undefined;
          disableRebufferTracking.off("rebufferend", i);
        });
      }
    } else {
      const _TypeError = TypeError;
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
};
const fn9 = function r(pm) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_lastCheckedTime" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_lastCheckedTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._lastCheckedTime = undefined;
      }
      if ("_lastPlayheadTime" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_lastPlayheadTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._lastPlayheadTime = undefined;
      }
      if ("_lastPlayheadTimeUpdatedTime" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_lastPlayheadTimeUpdatedTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._lastPlayheadTimeUpdatedTime = undefined;
      }
      if ("_rebuffering" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_rebuffering", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._rebuffering = undefined;
      }
      if ("pm" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      const disableRebufferTracking = pm.disableRebufferTracking;
      let tmp13 = !disableRebufferTracking;
      if (!disableRebufferTracking) {
        tmp13 = !pm.disablePlayheadRebufferTracking;
      }
      if (tmp13) {
        self._lastCheckedTime = null;
        self._lastPlayheadTime = null;
        self._lastPlayheadTimeUpdatedTime = null;
        const _checkIfRebuffering = self._checkIfRebuffering;
        pm.on("playbackheartbeat", _checkIfRebuffering.bind(self));
        const _cleanupRebufferTracker = self._cleanupRebufferTracker;
        pm.on("playbackheartbeatend", _cleanupRebufferTracker.bind(self));
        pm.on("seeking", () => {
          const result = self._cleanupRebufferTracker(null, { viewer_time: obj3.now() });
        });
      }
    } else {
      const _TypeError = TypeError;
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
  }
};
const items7 = [
  entry5,
  {
    key: "_clearRebufferTrackerState",
    value() {

    }
  },
  {
    key: "_prepareRebufferTrackerState",
    value(_lastCheckedTime) {
      this._lastCheckedTime = _lastCheckedTime;
      this._lastPlayheadTime = this.pm.data.player_playhead_time;
      this._lastPlayheadTimeUpdatedTime = _lastCheckedTime;
    }
  },
  {
    key: "_cleanupRebufferTracker",
    value(arg0, viewer_time) {
      const self = this;
      if (this._rebuffering) {
        self._rebuffering = false;
        const pm3 = self.pm;
        let obj = { viewer_time: viewer_time.viewer_time };
        pm3.emit("rebufferend", obj);
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
          obj = { viewer_time: self._lastPlayheadTimeUpdatedTime };
          pm.emit("rebufferstart", obj);
          const pm2 = self.pm;
          obj = { viewer_time: self._lastPlayheadTimeUpdatedTime + diff1 - diff };
          pm2.emit("rebufferend", obj);
        }
      }
      if (tmp) {
        const result = self._prepareRebufferTrackerState(viewer_time.viewer_time);
      } else {
        const result1 = self._clearRebufferTrackerState();
      }
    }
  }
];
N(fn9, items7);
const fn10 = function r(pm) {
  closure_0 = pm;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("pm" in self) {
        const _Object = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      pm.on("viewinit", () => {
        const data = view_id.data;
        view_id = data.view_id;
        if (!data.view_program_changed) {
          fn = function n(type, viewer_time) {
            viewer_time = viewer_time.viewer_time;
            let tmp = "playing" === type.type;
            if (tmp) {
              tmp = undefined === view_id.data.view_time_to_first_frame;
            }
            if (!tmp) {
              let tmp3 = "adplaying" === type.type;
              if (tmp3) {
                let _inPrerollPositionResult = undefined === view_id.data.view_time_to_first_frame;
                if (!_inPrerollPositionResult) {
                  _inPrerollPositionResult = self._inPrerollPosition();
                }
                tmp3 = _inPrerollPositionResult;
              }
              tmp = tmp3;
            }
            if (tmp) {
              if (!viewer_time) {
                viewer_time = obj3.now();
              }
              const result = self.calculateTimeToFirstFrame(viewer_time, view_id);
            }
          };
          obj.one("playing", fn);
          obj.one("adplaying", fn);
          obj.one("viewend", () => {
            view_id.off("playing", fn);
            view_id.off("adplaying", fn);
          });
        }
      });
    } else {
      const _TypeError = TypeError;
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
};
const entry6 = {
  key: "_inPrerollPosition",
  value() {
    let tmp = undefined === this.pm.data.view_content_playback_time;
    if (!tmp) {
      tmp = this.pm.data.view_content_playback_time <= 1000;
    }
    return tmp;
  }
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
        if (tmp) {
          self.pm.data.view_aggregate_startup_time = self.pm.data.view_start + self.pm.data.view_watch_time - self.pm.pageLoadInitTime;
        }
        tmp = (self.pm.data.player_autoplay_on || self.pm.data.video_is_autoplay) && self.pm.pageLoadInitTime;
      }
    }
  }
];
N(fn10, items8);
const fn11 = function r(on) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_lastPlayerHeight" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_lastPlayerHeight", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._lastPlayerHeight = undefined;
      }
      if ("_lastPlayerWidth" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_lastPlayerWidth", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._lastPlayerWidth = undefined;
      }
      if ("_lastPlayheadPosition" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_lastPlayheadPosition", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._lastPlayheadPosition = undefined;
      }
      if ("_lastSourceHeight" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_lastSourceHeight", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._lastSourceHeight = undefined;
      }
      if ("_lastSourceWidth" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "_lastSourceWidth", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._lastSourceWidth = undefined;
      }
      on.on("viewinit", () => {
        self._lastPlayheadPosition = -1;
      });
      items = ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb", "renditionchange", "orientationchange", "viewend", "playbackmodechange"];
      const item = items.forEach((item) => {
        on.on(item, () => {
          if (self._lastPlayheadPosition >= 0) {
            if (data.data.player_playhead_time >= 0) {
              if (tmp._lastPlayerWidth >= 0) {
                if (tmp._lastSourceWidth > 0) {
                  if (tmp._lastPlayerHeight >= 0) {
                    if (tmp._lastSourceHeight > 0) {
                      const diff = tmp4.data.player_playhead_time - tmp._lastPlayheadPosition;
                      if (diff < 0) {
                        tmp._lastPlayheadPosition = -1;
                      } else {
                        const _Math = Math;
                        const bound = Math.min(tmp._lastPlayerWidth / tmp._lastSourceWidth, tmp._lastPlayerHeight / tmp._lastSourceHeight);
                        const _Math2 = Math;
                        const bound1 = Math.max(0, bound - 1);
                        const _Math3 = Math;
                        const bound2 = Math.max(0, 1 - bound);
                        let num = tmp4.data.view_max_upscale_percentage;
                        if (!num) {
                          num = 0;
                        }
                        tmp4.data.view_max_upscale_percentage = Math.max(num, bound1);
                        let num2 = tmp4.data.view_max_downscale_percentage;
                        if (!num2) {
                          num2 = 0;
                        }
                        tmp4.data.view_max_downscale_percentage = Math.max(num2, bound2);
                        data = tmp4.data;
                        data.view_total_content_playback_time = data.view_total_content_playback_time || 0;
                        data.view_total_content_playback_time = data.view_total_content_playback_time + diff;
                        const data2 = tmp4.data;
                        let num3 = data2.view_total_upscaling;
                        const result = bound1 * diff;
                        if (!num3) {
                          num3 = 0;
                        }
                        data2.view_total_upscaling = num3;
                        data2.view_total_upscaling = data2.view_total_upscaling + result;
                        const data3 = tmp4.data;
                        let num4 = data3.view_total_downscaling;
                        const result1 = bound2 * diff;
                        if (!num4) {
                          num4 = 0;
                        }
                        data3.view_total_downscaling = num4;
                        data3.view_total_downscaling = data3.view_total_downscaling + result1;
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
        on.on(item, () => {
          self._lastPlayheadPosition = on.data.player_playhead_time;
          self._lastPlayerWidth = on.data.player_width;
          self._lastPlayerHeight = on.data.player_height;
          self._lastSourceWidth = on.data.video_source_width;
          self._lastSourceHeight = on.data.video_source_height;
        });
      });
    } else {
      const _TypeError = TypeError;
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
};
const fn12 = function r(on) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("isSeeking" in self) {
        const _Object = Object;
        Object.defineProperty(self, "isSeeking", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self.isSeeking = undefined;
      }
      self.isSeeking = false;
      c2 = -1;
      function a() {

      }
      on.on("seeking", (arg0, viewer_time) => {
        const merged = Object.assign(on.data, viewer_time);
        if (self.isSeeking) {
          if (viewer_time.viewer_time - viewer_time <= 2000) {
            viewer_time = viewer_time.viewer_time;
          }
        }
        if (self.isSeeking) {
          if (typeof a === "function") {
            const nowResult = obj3.now();
            let tmp8 = viewer_time;
            if (!viewer_time) {
              tmp8 = nowResult;
            }
            const diff = (obj.data.viewer_time || nowResult) - tmp8;
            const data = obj.data;
            data.view_seek_duration = data.view_seek_duration || 0;
            data.view_seek_duration = data.view_seek_duration + diff;
            let num2 = obj.data.view_max_seek_time;
            if (!num2) {
              num2 = 0;
            }
            obj.data.view_max_seek_time = Math.max(num2, diff);
            tmp2.isSeeking = false;
            viewer_time = -1;
            const tmp7 = obj.data.viewer_time || nowResult;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        self.isSeeking = true;
        viewer_time = viewer_time.viewer_time;
        const data2 = obj.data;
        data2.view_seek_count = data2.view_seek_count || 0;
        data2.view_seek_count = data2.view_seek_count + 1;
        on.send("seeking");
      });
      on.on("seeked", () => {
        if (typeof a === "function") {
          const nowResult = obj3.now();
          let tmp5 = c2;
          if (!c2) {
            tmp5 = nowResult;
          }
          const diff = (on.data.viewer_time || nowResult) - tmp5;
          const data = tmp3.data;
          data.view_seek_duration = data.view_seek_duration || 0;
          data.view_seek_duration = data.view_seek_duration + diff;
          let num = tmp3.data.view_max_seek_time;
          if (!num) {
            num = 0;
          }
          on.data.view_max_seek_time = Math.max(num, diff);
          self.isSeeking = false;
          c2 = -1;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      on.on("viewend", () => {
        if (self.isSeeking) {
          if (typeof a === "function") {
            const nowResult = obj3.now();
            let tmp6 = c2;
            if (!c2) {
              tmp6 = nowResult;
            }
            const diff = (on.data.viewer_time || nowResult) - tmp6;
            const data = obj.data;
            data.view_seek_duration = data.view_seek_duration || 0;
            data.view_seek_duration = data.view_seek_duration + diff;
            let num = obj.data.view_max_seek_time;
            if (!num) {
              num = 0;
            }
            on.data.view_max_seek_time = Math.max(num, diff);
            tmp.isSeeking = false;
            c2 = -1;
            on.send("seeked");
            const tmp5 = on.data.viewer_time || nowResult;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        self.isSeeking = false;
        c2 = -1;
      });
    } else {
      const _TypeError = TypeError;
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
};
function Xt(arg0, arg1) {

}
let closure_71 = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror", "adclicked", "adskipped"];
const fn13 = function r(pm) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_adHasPlayed" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_adHasPlayed", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._adHasPlayed = undefined;
      }
      if ("_adRequests" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_adRequests", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._adRequests = undefined;
      }
      if ("_adResponses" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_adResponses", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._adResponses = undefined;
      }
      if ("_currentAdRequestNumber" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_currentAdRequestNumber", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._currentAdRequestNumber = undefined;
      }
      if ("_currentAdResponseNumber" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "_currentAdResponseNumber", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._currentAdResponseNumber = undefined;
      }
      if ("_prerollPlayTime" in self) {
        const _Object6 = Object;
        Object.defineProperty(self, "_prerollPlayTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._prerollPlayTime = undefined;
      }
      if ("_wouldBeNewAdPlay" in self) {
        const _Object7 = Object;
        Object.defineProperty(self, "_wouldBeNewAdPlay", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._wouldBeNewAdPlay = undefined;
      }
      if ("isAdBreak" in self) {
        const _Object8 = Object;
        Object.defineProperty(self, "isAdBreak", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self.isAdBreak = undefined;
      }
      if ("pm" in self) {
        const _Object9 = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
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
      const item = closure_2_71.forEach((item) => {
        const _updateAdData = self._updateAdData;
        return pm.on(item, _updateAdData.bind(self));
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
        { ad_request_id: null }.ad_request_id = `generatedAdRequestId${+self._currentAdRequestNumber}`;
        const _adRequests = self._adRequests;
        if (typeof Xt === "function") {
          _adRequests.push(tmp2);
          const sorted = _adRequests.sort((viewer_time, viewer_time2) => viewer_time.viewer_time - viewer_time2.viewer_time);
          const data = pm.data;
          data.view_ad_request_count = data.view_ad_request_count || 0;
          data.view_ad_request_count = data.view_ad_request_count + 1;
          if (obj.inPrerollPosition()) {
            tmp5.data.view_preroll_requested = true;
            if (!obj._adHasPlayed) {
              const data2 = tmp5.data;
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
        if (typeof Xt === "function") {
          _adResponses.push(merged);
          const sorted = _adResponses.sort((viewer_time, viewer_time2) => viewer_time.viewer_time - viewer_time2.viewer_time);
          const findAdRequestResult = obj2.findAdRequest(merged.ad_request_id);
          if (findAdRequestResult) {
            const data = pm.data;
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
        obj2 = self;
      });
      pm.on("adplay", (arg0, viewer_time) => {
        self._adHasPlayed = true;
        if (self._wouldBeNewAdPlay) {
          obj._wouldBeNewAdPlay = false;
          const data = pm.data;
          data.view_ad_played_count = data.view_ad_played_count || 0;
          data.view_ad_played_count = data.view_ad_played_count + 1;
        }
        let inPrerollPositionResult = obj.inPrerollPosition();
        if (inPrerollPositionResult) {
          inPrerollPositionResult = !pm.data.view_preroll_played;
        }
        if (inPrerollPositionResult) {
          pm.data.view_preroll_played = true;
          if (obj._adRequests.length > 0) {
            const _Math = Math;
            tmp5.data.view_preroll_request_time = Math.max(0, viewer_time.viewer_time - obj._adRequests[0].viewer_time);
          }
          if (pm.data.view_start) {
            const _Math2 = Math;
            tmp5.data.view_startup_preroll_request_time = Math.max(0, viewer_time.viewer_time - tmp5.data.view_start);
          }
          obj._prerollPlayTime = viewer_time.viewer_time;
        }
      });
      pm.on("adplaying", (arg0, viewer_time) => {
        let inPrerollPositionResult = self.inPrerollPosition();
        if (inPrerollPositionResult) {
          inPrerollPositionResult = undefined === pm.data.view_preroll_load_time;
        }
        if (inPrerollPositionResult) {
          inPrerollPositionResult = undefined !== tmp._prerollPlayTime;
        }
        if (inPrerollPositionResult) {
          pm.data.view_preroll_load_time = viewer_time.viewer_time - tmp._prerollPlayTime;
          pm.data.view_startup_preroll_load_time = viewer_time.viewer_time - tmp._prerollPlayTime;
        }
      });
      pm.on("adclicked", (arg0, arg1) => {
        if (!self._wouldBeNewAdPlay) {
          const data = pm.data;
          data.view_ad_clicked_count = data.view_ad_clicked_count || 0;
          data.view_ad_clicked_count = data.view_ad_clicked_count + 1;
        }
      });
      pm.on("adskipped", (arg0, arg1) => {
        if (!self._wouldBeNewAdPlay) {
          const data = pm.data;
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
};
const entry7 = {
  key: "inPrerollPosition",
  value() {
    let tmp = undefined === this.pm.data.view_content_playback_time;
    if (!tmp) {
      tmp = this.pm.data.view_content_playback_time <= 1000;
    }
    return tmp;
  }
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
    }
  },
  {
    key: "_updateAdData",
    value(arg0, ad_tag_url) {
      const self = this;
      if (this.inPrerollPosition()) {
        if (!self.pm.data.view_preroll_ad_tag_hostname) {
          if (ad_tag_url.ad_tag_url) {
            if (typeof re === "function") {
              if (typeof str === "string") {
                if ("" !== str) {
                  const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                  let first;
                  if (str2) {
                    first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                    const tmp4 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                  }
                  items = [str2, first];
                  const tmp2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                }
                const _Array = Array;
                let tmp7;
                if (Array.isArray(items)) {
                  tmp7 = items;
                }
                if (!tmp7) {
                  tmp7 = (function vt(items, arg1) {
                    let tmp6 = null;
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
                      tmp6 = prop;
                    }
                    if (null != tmp6) {
                      let flag2 = false;
                      try {
                        items = [];
                        try {
                          const call = tmp9.call;
                          if (typeof call === "unknown") {
                            let iter = tmp9();
                          } else {
                            iter = call(items);
                          }
                          const iter3 = iter.next();
                          const done = iter3.done;
                          let tmp11 = done;
                          if (!done) {
                            items.push(iter4.value);
                            if (!arg1) {
                              const iter5 = iter2.next();
                              const done2 = iter5.done;
                              tmp11 = done2;
                              while (!done2) {
                                let arr = items.push(iter6.value);
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
                            let tmp19 = !tmp11;
                            if (!tmp11) {
                              tmp19 = null != iter2.return;
                            }
                            if (tmp19) {
                              iter2.return();
                            }
                            if (flag2) {
                              throw tmp5;
                            } else {
                              return items;
                            }
                          } catch (tmp25) {
                            if (tmp2) {
                              throw tmp;
                            } else {
                              throw tmp25;
                            }
                          }
                        } catch (tmp5) {
                          flag2 = true;
                        }
                      } catch (tmp28) {
                        try {
                          let tmp30 = !tmp3;
                          if (!tmp3) {
                            tmp30 = tmp4 != obj.return;
                          }
                          if (tmp30) {
                            obj.return();
                          }
                          if (tmp2) {
                            throw tmp;
                          } else {
                            throw tmp28;
                          }
                        } catch (tmp36) {
                          if (tmp2) {
                            throw tmp;
                          } else {
                            throw tmp36;
                          }
                        }
                      }
                    }
                  })(items, 2);
                }
                if (!tmp7) {
                  tmp7 = Pe(items, 2);
                }
                if (tmp7) {
                  [self.pm.data.view_preroll_ad_tag_hostname, self.pm.data.view_preroll_ad_tag_domain] = tmp7;
                } else {
                  const _TypeError = TypeError;
                  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
              if (typeof str4 === "string") {
                if ("" !== str4) {
                  const str5 = str4.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                  let first1;
                  if (str5) {
                    first1 = str5.match(/[^\.]+\.[^\.]+$/) || [][0];
                    const tmp16 = str5.match(/[^\.]+\.[^\.]+$/) || [];
                  }
                  let items1 = [str5, first1];
                  const tmp14 = str4.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                }
                const _Array2 = Array;
                let tmp19;
                if (Array.isArray(items1)) {
                  tmp19 = items1;
                }
                if (!tmp19) {
                  tmp19 = (function vt(items, arg1) {
                    let tmp6 = null;
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
                      tmp6 = prop;
                    }
                    if (null != tmp6) {
                      let flag2 = false;
                      try {
                        items = [];
                        try {
                          const call = tmp9.call;
                          if (typeof call === "unknown") {
                            let iter = tmp9();
                          } else {
                            iter = call(items);
                          }
                          const iter3 = iter.next();
                          const done = iter3.done;
                          let tmp11 = done;
                          if (!done) {
                            items.push(iter4.value);
                            if (!arg1) {
                              const iter5 = iter2.next();
                              const done2 = iter5.done;
                              tmp11 = done2;
                              while (!done2) {
                                let arr = items.push(iter6.value);
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
                            let tmp19 = !tmp11;
                            if (!tmp11) {
                              tmp19 = null != iter2.return;
                            }
                            if (tmp19) {
                              iter2.return();
                            }
                            if (flag2) {
                              throw tmp5;
                            } else {
                              return items;
                            }
                          } catch (tmp25) {
                            if (tmp2) {
                              throw tmp;
                            } else {
                              throw tmp25;
                            }
                          }
                        } catch (tmp5) {
                          flag2 = true;
                        }
                      } catch (tmp28) {
                        try {
                          let tmp30 = !tmp3;
                          if (!tmp3) {
                            tmp30 = tmp4 != obj.return;
                          }
                          if (tmp30) {
                            obj.return();
                          }
                          if (tmp2) {
                            throw tmp;
                          } else {
                            throw tmp28;
                          }
                        } catch (tmp36) {
                          if (tmp2) {
                            throw tmp;
                          } else {
                            throw tmp36;
                          }
                        }
                      }
                    }
                  })(items1, 2);
                }
                if (!tmp19) {
                  tmp19 = Pe(items1, 2);
                }
                if (tmp19) {
                  [self.pm.data.view_preroll_ad_asset_hostname, self.pm.data.view_preroll_ad_asset_domain] = tmp19;
                } else {
                  const _TypeError2 = TypeError;
                  const typeError1 = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
      if (null != ad_tag_url) {
        ad_asset_url = ad_tag_url.ad_asset_url;
      }
      self.pm.data.ad_asset_url = ad_asset_url;
      ad_tag_url = undefined;
      if (null != ad_tag_url) {
        ad_tag_url = ad_tag_url.ad_tag_url;
      }
      self.pm.data.ad_tag_url = ad_tag_url;
      let ad_creative_id;
      if (null != ad_tag_url) {
        ad_creative_id = ad_tag_url.ad_creative_id;
      }
      self.pm.data.ad_creative_id = ad_creative_id;
      let ad_id;
      if (null != ad_tag_url) {
        ad_id = ad_tag_url.ad_id;
      }
      self.pm.data.ad_id = ad_id;
      let ad_universal_id;
      if (null != ad_tag_url) {
        ad_universal_id = ad_tag_url.ad_universal_id;
      }
      self.pm.data.ad_universal_id = ad_universal_id;
      if (tmp30) {
        let ad_type;
        if (null != ad_tag_url) {
          ad_type = ad_tag_url.ad_type;
        }
        self.pm.data.ad_type = ad_type;
      }
    }
  }
];
N(fn13, items9);
const fn14 = function r(one) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("lastWallClockTime" in self) {
        let _Object = Object;
        Object.defineProperty(self, "lastWallClockTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self.lastWallClockTime = undefined;
      }
      fn = function i() {
        self.lastWallClockTime = obj3.now();
        one.on("before*", a);
      };
      function a(arg0) {
        const nowResult = obj3.now();
        const lastWallClockTime = self.lastWallClockTime;
        self.lastWallClockTime = nowResult;
        if (nowResult - lastWallClockTime > 30000) {
          let obj = { viewer_time: lastWallClockTime };
          one.emit("devicesleep", obj);
          const _Object = Object;
          obj = { viewer_time: lastWallClockTime };
          const merged = Object.assign(one.data, obj);
          one.send("devicesleep");
          obj = { viewer_time: nowResult };
          one.emit("devicewake", obj);
          const _Object2 = Object;
          const obj1 = { viewer_time: nowResult };
          const merged1 = Object.assign(one.data, obj1);
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
};
let closure_74 = G(obj2.exports);
const fn15 = function e(arg0) {
  closure_0 = arg0;
  const withConverter = function i(arg0, arg1, arg2) {
    let tmp2 = arg1;
    if (typeof document !== "undefined") {
      if (arguments.length > 1) {
        const tmp26 = f98876({ path: "/" }, fn.defaults, arg2);
        if (typeof tmp26.expires === "number") {
          const _Date = Date;
          const date = new Date();
          date.setMilliseconds(date.getMilliseconds() + 86400000 * tmp26.expires);
          tmp26.expires = date;
        }
        try {
          const _JSON2 = JSON;
          const json = JSON.stringify(tmp2);
          if (obj4.test(json)) {
            tmp2 = json;
          }
          if (closure_0.write) {
            let writeResult = obj5.write(tmp2, arg0);
          } else {
            const _encodeURIComponent = encodeURIComponent;
            const _String = String;
            const _decodeURIComponent3 = decodeURIComponent;
            writeResult = encodeURIComponent(String(tmp2)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            const str8 = encodeURIComponent(String(tmp2));
          }
          const _encodeURIComponent2 = encodeURIComponent;
          const _String2 = String;
          const _decodeURIComponent4 = decodeURIComponent;
          obj4 = /^[\{\[]/;
          obj5 = closure_0;
          const str9 = encodeURIComponent(String(arg0));
          const _escape = escape;
          items = [encodeURIComponent(String(arg0)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape), "=", writeResult, , , , ];
          let str13 = "";
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
          document.cookie = joined;
          return joined;
        } catch (err) {
        }
      } else {
        if (!arg0) {
          let obj = {};
        }
        const _document = document;
        if (document.cookie) {
          const _document2 = document;
          let parts = document.cookie.split("; ");
          const str = document.cookie;
        } else {
          parts = [];
        }
        const tmp4 = /(%[0-9A-Z]{2})+/g;
        let num4 = 0;
        if (0 < parts.length) {
          const parts1 = parts[num4].split("=");
          const substr = parts1.slice(1);
          const str6 = substr.join("=");
          let substr1 = str6;
          if ("\"" === str6.charAt(0)) {
            substr1 = substr1.slice(1, -1);
          }
          try {
            const _decodeURIComponent = decodeURIComponent;
            const replaced = parts1[0].replace(tmp4, decodeURIComponent);
            if (closure_0.read) {
              let readResult = obj3.read(substr1, replaced);
            } else {
              readResult = obj3(substr1, replaced);
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
              } catch (err) {
              }
            }
            if (arg0 === replaced) {
              obj = parsed;
            } else {
              if (!arg0) {
                obj[replaced] = parsed;
              }
              num4 = num4 + 1;
            }
          } catch (err) {
          }
        }
        return obj;
      }
    }
  };
  withConverter.set = withConverter;
  withConverter.get = (arg0) => {
    const call = fn.call;
    return typeof call === "unknown" ? fn(arg0) : call(fn, arg0);
  };
  withConverter.getJSON = () => {
    const slice = [].slice;
    const call = slice.call;
    if (typeof call === "unknown") {
      let substr = slice();
    } else {
      substr = call(arguments);
    }
    return fn.apply({ json: true }, substr);
  };
  withConverter.defaults = {};
  withConverter.remove = (D, arg1) => {
    fn(D, "", f98876(arg1, { expires: -1 }));
  };
  withConverter.withConverter = withConverter;
  return withConverter;
};
let closure_144_1 = fn15;
let closure_144_0 = function r() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
};
f98876 = () => {

};
const fn16 = function i(arg0, arg1, arg2) {
  let tmp2 = arg1;
  if (typeof document !== "undefined") {
    if (arguments.length > 1) {
      const tmp26 = f98876({ path: "/" }, fn.defaults, arg2);
      if (typeof tmp26.expires === "number") {
        const _Date = Date;
        const date = new Date();
        date.setMilliseconds(date.getMilliseconds() + 86400000 * tmp26.expires);
        tmp26.expires = date;
      }
      try {
        const _JSON2 = JSON;
        const json = JSON.stringify(tmp2);
        if (obj4.test(json)) {
          tmp2 = json;
        }
        if (closure_0.write) {
          let writeResult = obj5.write(tmp2, arg0);
        } else {
          const _encodeURIComponent = encodeURIComponent;
          const _String = String;
          const _decodeURIComponent3 = decodeURIComponent;
          writeResult = encodeURIComponent(String(tmp2)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
          const str8 = encodeURIComponent(String(tmp2));
        }
        const _encodeURIComponent2 = encodeURIComponent;
        const _String2 = String;
        const _decodeURIComponent4 = decodeURIComponent;
        obj4 = /^[\{\[]/;
        obj5 = closure_0;
        const str9 = encodeURIComponent(String(arg0));
        const _escape = escape;
        items = [encodeURIComponent(String(arg0)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape), "=", writeResult, , , , ];
        let str13 = "";
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
        document.cookie = joined;
        return joined;
      } catch (err) {
      }
    } else {
      if (!arg0) {
        let obj = {};
      }
      const _document = document;
      if (document.cookie) {
        const _document2 = document;
        let parts = document.cookie.split("; ");
        const str = document.cookie;
      } else {
        parts = [];
      }
      const tmp4 = /(%[0-9A-Z]{2})+/g;
      let num4 = 0;
      if (0 < parts.length) {
        const parts1 = parts[num4].split("=");
        const substr = parts1.slice(1);
        const str6 = substr.join("=");
        let substr1 = str6;
        if ("\"" === str6.charAt(0)) {
          substr1 = substr1.slice(1, -1);
        }
        try {
          const _decodeURIComponent = decodeURIComponent;
          const replaced = parts1[0].replace(tmp4, decodeURIComponent);
          if (closure_0.read) {
            let readResult = obj3.read(substr1, replaced);
          } else {
            readResult = obj3(substr1, replaced);
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
            } catch (err) {
            }
          }
          if (arg0 === replaced) {
            obj = parsed;
          } else {
            if (!arg0) {
              obj[replaced] = parsed;
            }
            num4 = num4 + 1;
          }
        } catch (err) {
        }
      }
      return obj;
    }
  }
};
create = fn16;
fn16.set = fn16;
fn16.get = (arg0) => {
  const call = fn.call;
  return typeof call === "unknown" ? fn(arg0) : call(fn, arg0);
};
fn16.getJSON = () => {
  const slice = [].slice;
  const call = slice.call;
  if (typeof call === "unknown") {
    let substr = slice();
  } else {
    substr = call(arguments);
  }
  return fn.apply({ json: true }, substr);
};
fn16.defaults = {};
fn16.remove = (D, arg1) => {
  fn(D, "", f98876(arg1, { expires: -1 }));
};
fn16.withConverter = fn15;
const muxData = "muxData";
function tr() {
  try {
    let str = fn16.get(muxData);
    if (!str) {
      str = "";
    }
    let obj = ((str) => {
      let parts = str.split("&");
      return parts.reduce((acc, item) => {
        const parts = item.split("=");
        let tmp2;
        if (Array.isArray(parts)) {
          tmp2 = parts;
        }
        if (!tmp2) {
          tmp2 = (function vt(items, arg1) {
            let tmp6 = null;
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
              tmp6 = prop;
            }
            if (null != tmp6) {
              let flag2 = false;
              try {
                items = [];
                try {
                  const call = tmp9.call;
                  if (typeof call === "unknown") {
                    let iter = tmp9();
                  } else {
                    iter = call(items);
                  }
                  const iter3 = iter.next();
                  const done = iter3.done;
                  let tmp11 = done;
                  if (!done) {
                    items.push(iter4.value);
                    if (!arg1) {
                      const iter5 = iter2.next();
                      const done2 = iter5.done;
                      tmp11 = done2;
                      while (!done2) {
                        let arr = items.push(iter6.value);
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
                    let tmp19 = !tmp11;
                    if (!tmp11) {
                      tmp19 = null != iter2.return;
                    }
                    if (tmp19) {
                      iter2.return();
                    }
                    if (flag2) {
                      throw tmp5;
                    } else {
                      return items;
                    }
                  } catch (tmp25) {
                    if (tmp2) {
                      throw tmp;
                    } else {
                      throw tmp25;
                    }
                  }
                } catch (tmp5) {
                  flag2 = true;
                }
              } catch (tmp28) {
                try {
                  let tmp30 = !tmp3;
                  if (!tmp3) {
                    tmp30 = tmp4 != obj.return;
                  }
                  if (tmp30) {
                    obj.return();
                  }
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp28;
                  }
                } catch (tmp36) {
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp36;
                  }
                }
              }
            }
          })(parts, 2);
        }
        if (!tmp2) {
          tmp2 = closure_1_23(parts, 2);
        }
        if (tmp2) {
          let tmp10 = tmp8;
          if (tmp2[1]) {
            tmp10 = tmp8;
            if (tmp9 == tmp8) {
              tmp10 = tmp9;
            }
          }
          acc[tmp2[0]] = tmp10;
          return acc;
        } else {
          const _TypeError = TypeError;
          const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          throw typeError;
        }
      }, {});
    })(str);
    return obj;
  } catch (err) {
    obj = {};
  }
}
function rr(arg0) {
  try {
    const result = fn16.set(muxData, ((arg0) => {
      const entries = Object.entries(arg0);
      const mapped = entries.map((item) => {
        let tmp;
        if (Array.isArray(item)) {
          tmp = item;
        }
        if (!tmp) {
          tmp = (function vt(items, arg1) {
            let tmp6 = null;
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
              tmp6 = prop;
            }
            if (null != tmp6) {
              let flag2 = false;
              try {
                items = [];
                try {
                  const call = tmp9.call;
                  if (typeof call === "unknown") {
                    let iter = tmp9();
                  } else {
                    iter = call(items);
                  }
                  const iter3 = iter.next();
                  const done = iter3.done;
                  let tmp11 = done;
                  if (!done) {
                    items.push(iter4.value);
                    if (!arg1) {
                      const iter5 = iter2.next();
                      const done2 = iter5.done;
                      tmp11 = done2;
                      while (!done2) {
                        let arr = items.push(iter6.value);
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
                    let tmp19 = !tmp11;
                    if (!tmp11) {
                      tmp19 = null != iter2.return;
                    }
                    if (tmp19) {
                      iter2.return();
                    }
                    if (flag2) {
                      throw tmp5;
                    } else {
                      return items;
                    }
                  } catch (tmp25) {
                    if (tmp2) {
                      throw tmp;
                    } else {
                      throw tmp25;
                    }
                  }
                } catch (tmp5) {
                  flag2 = true;
                }
              } catch (tmp28) {
                try {
                  let tmp30 = !tmp3;
                  if (!tmp3) {
                    tmp30 = tmp4 != obj.return;
                  }
                  if (tmp30) {
                    obj.return();
                  }
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp28;
                  }
                } catch (tmp36) {
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp36;
                  }
                }
              }
            }
          })(item, 2);
        }
        if (!tmp) {
          tmp = closure_1_23(item, 2);
        }
        if (tmp) {
          const concat = "".concat;
          const combined = "".concat(tmp[0], "=");
          return combined.concat(tmp[1]);
        } else {
          const _TypeError = TypeError;
          const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          throw typeError;
        }
      });
      return mapped.join("&");
    })(arg0), { expires: 365 });
  } catch (err) {
  }
}
let closure_79 = G(obj2.exports);
function or() {
  if (typeof sr === "function") {
    const _navigator = closure_79.default.navigator;
    let tmp2 = _navigator;
    if (_navigator) {
      tmp2 = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
      const tmp3 = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
    }
    let type = tmp2;
    if (tmp2) {
      type = tmp2.type;
    }
    let str = "cellular";
    if ("cellular" !== type) {
      str = "wired";
      if ("ethernet" !== type) {
        str = "wifi";
        if ("wifi" !== type) {
          if (undefined !== type) {
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
  if (_navigator) {
    tmp = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
    const tmp2 = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
  }
  let type = tmp;
  if (tmp) {
    type = tmp.type;
  }
  return type;
}
or.getConnectionFromAPI = sr;
const point = { a: "env", b: "beacon", c: "custom", d: "ad", e: "event", f: "experiment", i: "internal", m: "mux", n: "response", p: "player", q: "request", r: "retry", s: "session", t: "timestamp", u: "viewer", v: "video", w: "page", x: "view", y: "sub" };
let obj4 = {};
for (const key10232 in point) {
  if (!point.hasOwnProperty(key10232)) {
    continue;
  } else {
    obj4[point[key10232]] = key10232;
    continue;
  }
  continue;
}
let obj5 = { ad: "ad", af: "affiliate", ag: "aggregate", ap: "api", al: "application", ao: "audio", ar: "architecture", as: "asset", au: "autoplay", av: "average", bi: "bitrate", bn: "brand", br: "break", bw: "browser", by: "bytes", bz: "business", ca: "cached", cb: "cancel", cc: "codec", cd: "code", cg: "category", ch: "changed", ci: "client", ck: "clicked", cl: "canceled", cm: "cmcd", cn: "config", co: "count", ce: "counter", cp: "complete", cq: "creator", cr: "creative", cs: "captions", ct: "content", cu: "current", cv: "cumulative", cx: "connection", cz: "context", da: "data", dg: "downscaling", dm: "domain", dn: "cdn", do: "downscale", dr: "drm", dp: "dropped", du: "duration", dv: "device", dy: "dynamic", eb: "enabled", ec: "encoding", ed: "edge", en: "end", eg: "engine", em: "embed", er: "error", ep: "experiments", es: "errorcode", et: "errortext", ee: "event", ev: "events", ex: "expires", ez: "exception", fa: "failed", fi: "first", fm: "family", ft: "format", fp: "fps", fq: "frequency", fr: "frame", fs: "fullscreen", ha: "has", hb: "holdback", he: "headers", ho: "host", hn: "hostname", ht: "height", id: "id", ii: "init", in: "instance", ip: "ip", is: "is", ke: "key", la: "language", lb: "labeled", le: "level", li: "live", ld: "loaded", lo: "load", ls: "lists", lt: "latency", ma: "max", md: "media", me: "message", mf: "manifest", mi: "mime", ml: "midroll", mm: "min", mn: "manufacturer", mo: "model", mp: "mode", ms: "ms", mx: "mux", ne: "newest", nm: "name", no: "number", on: "on", or: "origin", os: "os", pa: "paused", pb: "playback", pd: "producer", pe: "percentage", pf: "played", pg: "program", ph: "playhead", pi: "plugin", pl: "preroll", pn: "playing", po: "poster", pp: "pip", pr: "preload", ps: "position", pt: "part", pv: "previous", py: "property", px: "pop", pz: "plan", ra: "rate", rd: "requested", re: "rebuffer", rf: "rendition", rg: "range", rm: "remote", ro: "ratio", rp: "response", rq: "request", rs: "requests", sa: "sample", sd: "skipped", se: "session", sh: "shift", sk: "seek", sm: "stream", so: "source", sq: "sequence", sr: "series", ss: "status", st: "start", su: "startup", sv: "server", sw: "software", sy: "severity", ta: "tag", tc: "tech", te: "text", tg: "target", th: "throughput", ti: "time", tl: "total", to: "to", tt: "title", ty: "type", ug: "upscaling", un: "universal", up: "upscale", ur: "url", us: "user", va: "variant", vd: "viewed", vi: "video", ve: "version", vw: "view", vr: "viewer", wd: "width", wa: "watch", wt: "waiting" };
let obj6 = {};
for (const key10238 in obj5) {
  if (!obj5.hasOwnProperty(key10238)) {
    continue;
  } else {
    obj6[obj5[key10238]] = key10238;
    continue;
  }
  continue;
}
const fn17 = (arg0, arg1) => {
  if (undefined !== f98876) {
    if (typeof f98884 === "function") {
      if (!closure_150_1) {
        const obj = { exports: {} };
        closure_150_1 = obj;
        closure_150_0(obj.exports, closure_150_1);
      }
      const _exports = closure_150_1.exports;
      let _document = document;
      if (typeof document !== "undefined") {
        _document = document;
      } else {
        _document = tmp["__GLOBAL_DOCUMENT_CACHE@4"];
        if (!_document) {
          tmp["__GLOBAL_DOCUMENT_CACHE@4"] = _exports;
          _document = _exports;
        }
      }
      arg1.exports = _document;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const _window = window;
  }
};
let closure_84 = G(obj2.exports);
const obj7 = { exports: {} };
fn17(0, obj7);
let closure_85 = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 10000, maxPayloadKBSize: 500 };
let closure_86 = ["hb", "requestcompleted", "requestfailed", "requestcanceled"];
class $ {
  constructor(arg0) {
    obj = {};
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        tmp = arguments[1];
      }
      str = global;
      if (!global) {
        str = "https://img.litix.io";
      }
      obj._beaconUrl = str;
      obj._eventQueue = [];
      flag = false;
      obj._postInFlight = false;
      obj._resendAfterPost = false;
      num = 0;
      obj._failureCount = 0;
      obj._sendTimeout = false;
      tmp2 = globalThis;
      _Object = Object;
      tmp3 = closure_85;
      obj._options = Object.assign({}, closure_85, {});
      return;
    }
    return;
  }
  queueEvent(arg0, arg1) {
    self = this;
    tmp2 = this._eventQueue.length <= this._options.maxQueueLength;
    merged = Object.assign({}, require);
    if (!tmp2) {
      tmp3 = global;
      str = "eventrateexceeded";
      tmp2 = "eventrateexceeded" === global;
    }
    if (tmp2) {
      _eventQueue = self._eventQueue;
      arr = _eventQueue.push(merged);
      if (!self._sendTimeout) {
        _startBeaconSendingResult = self._startBeaconSending();
      }
      tmp2 = self._eventQueue.length <= self._options.maxQueueLength;
    }
    return tmp2;
  }
  flushEvents() {
    self = this;
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        if (arguments[0]) {
          num = 1;
          if (1 === self._eventQueue.length) {
            _eventQueue = self._eventQueue;
            arr = _eventQueue.pop();
          }
          return;
        }
      }
    }
    if (self._eventQueue.length) {
      _sendBeaconQueueResult = self._sendBeaconQueue();
    }
    _startBeaconSendingResult = self._startBeaconSending();
    return;
  }
  destroy() {
    tmp = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
    self = this;
    this.destroyed = true;
    if (tmp) {
      _clearBeaconQueueResult = self._clearBeaconQueue();
    } else {
      flushEventsResult = self.flushEvents();
    }
    _default = closure_84.default;
    clearTimeoutResult = _default.clearTimeout(self._sendTimeout);
    return;
  }
  _clearBeaconQueue() {
    self = this;
    num = 0;
    if (this._eventQueue.length > this._options.maxBeaconSize) {
      num = self._eventQueue.length - self._options.maxBeaconSize;
    }
    _eventQueue = self._eventQueue;
    substr = _eventQueue.slice(num);
    if (num > 0) {
      tmp = globalThis;
      _Object = Object;
      num2 = 1;
      obj = { mux_view_message: "event queue truncated" };
      closure_0 = obj;
      obj = {};
      closure_1 = obj;
      obj1 = {};
      closure_2 = obj1;
      _Object2 = Object;
      keys = Object.keys(obj);
      item = keys.forEach((item) => {
        closure_0 = item;
        c1 = false;
        if (obj.hasOwnProperty(item)) {
          if (undefined !== tmp[item]) {
            const parts = item.split("_");
            const first = parts[0];
            closure_2 = tmp12;
            if (!obj4[first]) {
              logger.info(`Data key word \`${arr2[0]}\` not expected in ${item}`);
              closure_2 = `${tmp10}_`;
            }
            item = parts.splice(1).forEach((item) => {
              if ("url" === item) {
                c1 = true;
              }
              if (obj6[item]) {
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
            if (c1) {
              obj2[closure_2] = tmp[item];
            } else {
              obj1[closure_2] = tmp[item];
            }
            const spliceResult = parts.splice(1);
          }
        }
      });
      _Object3 = Object;
      merged = Object.assign(substr[substr.length - 1], Object.assign(obj, obj1));
    }
    tmp4 = Mr(self._beaconUrl, self._createPayload(substr), true, () => {

    });
    return;
  }
  _sendBeaconQueue() {
    self = this;
    self = this;
    if (this._postInFlight) {
      flag3 = true;
      self._resendAfterPost = true;
    } else {
      _eventQueue = self._eventQueue;
      num = 0;
      substr = _eventQueue.slice(0, self._options.maxBeaconSize);
      closure_1 = substr;
      _eventQueue1 = self._eventQueue;
      self._eventQueue = _eventQueue1.slice(self._options.maxBeaconSize);
      flag = true;
      self._postInFlight = true;
      tmp3 = closure_27;
      _createPayloadResult = self._createPayload(substr);
      closure_2 = closure_27.now();
      tmp4 = Mr;
      flag2 = false;
      num2 = 0;
      tmp5 = Mr(self._beaconUrl, _createPayloadResult, false, (arg0, arg1) => {
        if (arg1) {
          tmp._eventQueue = substr.concat(tmp._eventQueue);
          tmp._failureCount = tmp._failureCount + 1;
          logger.info(`Error sending beacon: ${arg1}`);
          let obj = tmp;
        } else {
          tmp._failureCount = 0;
          obj = tmp;
        }
        obj._roundTripTime = obj3.now() - closure_2;
        obj._postInFlight = false;
        if (obj._resendAfterPost) {
          obj._resendAfterPost = false;
          if (obj._eventQueue.length > 0) {
            obj._sendBeaconQueue();
          }
        }
      });
    }
    return;
  }
  _getNextBeaconTime() {
    self = this;
    if (this._failureCount) {
      tmp = globalThis;
      _Math = Math;
      num = 1;
      num2 = 2;
      _Math2 = Math;
      powResult = Math.pow(2, self._failureCount - 1);
      return (1 + powResult * Math.random()) * self._options.baseTimeBetweenBeacons;
    } else {
      return self._options.baseTimeBetweenBeacons;
    }
  }
  _startBeaconSending() {
    self = this;
    self = this;
    _default = closure_84.default;
    tmp = closure_84;
    clearTimeoutResult = _default.clearTimeout(this._sendTimeout);
    if (!this.destroyed) {
      _default2 = tmp.default;
      self._sendTimeout = _default2.setTimeout(() => {
        if (self._eventQueue.length) {
          obj._sendBeaconQueue();
        }
        self._startBeaconSending();
      }, self._getNextBeaconTime());
    }
    return;
  }
  _createPayload(arg0) {
    self = this;
    obj = { transmission_timestamp: Math.round(closure_27.now()) };
    if (this._roundTripTime) {
      _Math = Math;
      obj.rtt_ms = Math.round(self._roundTripTime);
    }
    obj = { metadata: obj, events: global };
    json = JSON.stringify(obj);
    result = json.length / 1024;
    result1 = result;
    if (result > self._options.maxPayloadKBSize) {
      tmp4 = closure_38;
      str = " kb). Removing unnecessary events.";
      str2 = "Payload size is too big (";
      infoResult = closure_38.info(`Payload size is too big (${tmp} kb). Removing unnecessary events.`);
      found = global.filter((item) => -1 === closure_1_86.indexOf(item.e));
      obj1 = { metadata: null, events: null };
      obj1.metadata = obj;
      tmp7 = found;
      if (!found) {
        tmp7 = global;
      }
      obj1.events = tmp7;
      json1 = JSON.stringify(obj1);
      result1 = json1.length / 1024;
      tmp3 = found;
      json = json1;
      arr2 = found;
    }
    if (result1 > self._options.maxPayloadKBSize) {
      tmp8 = closure_38;
      str3 = " kb). Cropping fields..";
      str4 = "Payload size still too big (";
      infoResult1 = closure_38.info(`Payload size still too big (${tmp2} kb). Cropping fields..`);
      item = arr2.forEach((item) => {
        for (const key10005 in arg0) {
          let arr = arg0[key10005];
          let tmp2 = typeof arr === "string";
          if (typeof arr === "string") {
            tmp2 = arr.length > 51200;
          }
          if (!tmp2) {
            continue;
          } else {
            arg0[key10005] = arr.substring(0, 51200);
            continue;
          }
          continue;
        }
      });
      obj2 = { metadata: null, events: null };
      obj2.metadata = obj;
      if (!tmp3) {
        tmp3 = global;
      }
      obj2.events = tmp3;
      json2 = JSON.stringify(obj2);
      result2 = json2.length / 1024;
      json = json2;
    }
    return json;
  }
}
let closure_87 = typeof G(obj7.exports).default.exitPictureInPicture === "function" ? ((arg0) => arg0.length <= 57344) : ((arg0) => false);
function Mr(_beaconUrl, _createPayloadResult, arg2, fn) {
  closure_0 = fn;
  if (arg2) {
    const _navigator = navigator;
    if (navigator) {
      const _navigator2 = navigator;
      if (navigator.sendBeacon) {
        const _navigator3 = navigator;
        if (navigator.sendBeacon(_beaconUrl, _createPayloadResult)) {
          fn();
        }
      }
    }
  }
  if (closure_84.default.fetch) {
    const request = { method: "POST", body: _createPayloadResult, headers: { "Content-Type": "text/plain" }, keepalive: closure_87(_createPayloadResult) };
    const response = _default.fetch(_beaconUrl, request);
    response.then((ok) => {
      let tmp2 = "Error";
      if (ok.ok) {
        tmp2 = null;
      }
      return closure_0(null, tmp2);
    }).catch((error) => closure_0(null, error));
    const nextPromise = response.then((ok) => {
      let tmp2 = "Error";
      if (ok.ok) {
        tmp2 = null;
      }
      return closure_0(null, tmp2);
    });
  } else if (_default.XMLHttpRequest) {
    const xMLHttpRequest = new tmp2.default.XMLHttpRequest();
    xMLHttpRequest.onreadystatechange = () => {
      if (4 === xMLHttpRequest.readyState) {
        let str;
        if (200 !== tmp.status) {
          str = "error";
        }
        return closure_0(null, str);
      }
    };
    xMLHttpRequest.open("POST", _beaconUrl);
    xMLHttpRequest.setRequestHeader("Content-Type", "text/plain");
    xMLHttpRequest.send(_createPayloadResult);
  } else {
    fn();
  }
}
let closure_89 = $;
let closure_90 = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id", "player_error_code", "player_error_message", "player_error_context", "player_error_severity", "player_error_business_exception", "view_playing_time_ms_cumulative", "ad_playing_time_ms_cumulative"];
let closure_91 = ["adplay", "adplaying", "adpause", "adfirstquartile", "admidpoint", "adthirdquartile", "adended", "adresponse", "adrequest"];
let closure_92 = ["ad_id", "ad_creative_id", "ad_universal_id"];
let closure_93 = ["viewstart", "error", "ended", "viewend"];
const fn18 = function r(mux, envKey) {
  if (arguments.length > 2) {
    const self = this;
    const _Symbol = Symbol;
    if (typeof Symbol !== "undefined") {
      const _Symbol5 = Symbol;
      if (tmp2[Symbol.hasInstance]) {
        const _Symbol4 = Symbol;
        let tmp5 = tmp2[Symbol.hasInstance](self);
      }
      if (tmp5) {
        if ("mux" in self) {
          const _Object = Object;
          Object.defineProperty(self, "mux", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.mux = undefined;
        }
        if ("envKey" in self) {
          const _Object2 = Object;
          Object.defineProperty(self, "envKey", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.envKey = undefined;
        }
        if ("options" in self) {
          const _Object3 = Object;
          Object.defineProperty(self, "options", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.options = undefined;
        }
        if ("eventQueue" in self) {
          const _Object4 = Object;
          Object.defineProperty(self, "eventQueue", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.eventQueue = undefined;
        }
        if ("sampleRate" in self) {
          const _Object5 = Object;
          Object.defineProperty(self, "sampleRate", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.sampleRate = undefined;
        }
        if ("disableCookies" in self) {
          const _Object6 = Object;
          Object.defineProperty(self, "disableCookies", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.disableCookies = undefined;
        }
        if ("respectDoNotTrack" in self) {
          const _Object7 = Object;
          Object.defineProperty(self, "respectDoNotTrack", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.respectDoNotTrack = undefined;
        }
        if ("previousBeaconData" in self) {
          const _Object8 = Object;
          Object.defineProperty(self, "previousBeaconData", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.previousBeaconData = undefined;
        }
        if ("lastEventTime" in self) {
          const _Object9 = Object;
          Object.defineProperty(self, "lastEventTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.lastEventTime = undefined;
        }
        if ("rateLimited" in self) {
          const _Object10 = Object;
          Object.defineProperty(self, "rateLimited", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.rateLimited = undefined;
        }
        if ("pageLevelData" in self) {
          const _Object11 = Object;
          Object.defineProperty(self, "pageLevelData", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
        } else {
          self.pageLevelData = undefined;
        }
        if ("viewerData" in self) {
          const _Object12 = Object;
          Object.defineProperty(self, "viewerData", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
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
        let tmp25 = closure_2_89;
        if (beaconCollectionDomain) {
          let str14 = `https://${beaconCollectionDomain}`;
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
        tmp25 = new tmp25(str14);
        self.eventQueue = new.target;
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
        let obj = { mux_api_version: self.mux.API_VERSION, mux_embed: self.mux.NAME, mux_embed_version: self.mux.VERSION, viewer_application_name: null, viewer_application_version: null, viewer_application_engine: null, viewer_device_name: null, viewer_device_category: "", viewer_device_manufacturer: null, viewer_os_family: null, viewer_os_architecture: null, viewer_os_version: null, viewer_connection_type: null, page_url: null };
        const platform = self.options.platform;
        let name;
        if (null !== platform) {
          if (undefined !== platform) {
            name = platform.name;
          }
        }
        obj.viewer_application_name = name;
        const platform2 = self.options.platform;
        let version;
        if (null !== platform2) {
          if (undefined !== platform2) {
            version = platform2.version;
          }
        }
        obj.viewer_application_version = version;
        const platform3 = self.options.platform;
        let layout;
        if (null !== platform3) {
          if (undefined !== platform3) {
            layout = platform3.layout;
          }
        }
        obj.viewer_application_engine = layout;
        const platform4 = self.options.platform;
        let product;
        if (null !== platform4) {
          if (undefined !== platform4) {
            product = platform4.product;
          }
        }
        obj.viewer_device_name = product;
        const platform5 = self.options.platform;
        let manufacturer;
        if (null !== platform5) {
          if (undefined !== platform5) {
            manufacturer = platform5.manufacturer;
          }
        }
        obj.viewer_device_manufacturer = manufacturer;
        const platform6 = self.options.platform;
        let family;
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
        obj.viewer_os_family = family;
        const platform7 = self.options.platform;
        let architecture;
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
        obj.viewer_os_architecture = architecture;
        const platform8 = self.options.platform;
        let version1;
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
        obj.viewer_os_version = version1;
        if (typeof closure_2_81 === "function") {
          if (typeof closure_2_80 === "function") {
            const _navigator = closure_2_79.default.navigator;
            let tmp41 = _navigator;
            if (_navigator) {
              tmp41 = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
              const tmp42 = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
            }
            let type = tmp41;
            if (tmp41) {
              type = tmp41.type;
            }
            let str18 = "cellular";
            if ("cellular" !== type) {
              str18 = "wired";
              if ("ethernet" !== type) {
                str18 = "wifi";
                if ("wifi" !== type) {
                  if (undefined !== type) {
                    str18 = "other";
                  }
                }
              }
            }
            obj.viewer_connection_type = str18;
            let href;
            if (null !== closure_2_74.default) {
              if (undefined !== tmp43.default) {
                const _location = tmp43.default.location;
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
              obj = {};
            } else {
              const tmp46 = closure_2_77();
              let mux_viewer_id = tmp46.mux_viewer_id;
              if (!mux_viewer_id) {
                mux_viewer_id = __initData6();
              }
              tmp46.mux_viewer_id = mux_viewer_id;
              let msn = tmp46.msn;
              if (!msn) {
                const _Math = Math;
                msn = Math.random();
              }
              tmp46.msn = msn;
              closure_2_78(tmp46);
              obj = { mux_viewer_id: null, mux_sample_number: null };
              ({ mux_viewer_id: obj2.mux_viewer_id, msn: obj2.mux_sample_number } = tmp46);
            }
            self.viewerData = obj;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Cannot call a class as a function");
        throw typeError;
      }
    }
    const _Symbol2 = Symbol;
    if (typeof Symbol !== "undefined") {
      const _Symbol6 = Symbol;
      if (tmp2[Symbol.hasInstance]) {
        const _Symbol3 = Symbol;
        tmp5 = tmp2[Symbol.hasInstance](self);
      }
    }
    tmp5 = U(self, tmp2);
  }
};
const entry8 = {
  key: "send",
  value(event, view_id) {
    if (event) {
      if (null != view_id) {
        if (view_id.view_id) {
          const self = this;
          if (this.respectDoNotTrack) {
            let doNotTrack = closure_39.default.doNotTrack;
            if (!doNotTrack) {
              doNotTrack = tmp6.default.navigator && tmp6.default.navigator.doNotTrack;
              const tmp7 = tmp6.default.navigator && tmp6.default.navigator.doNotTrack;
            }
            if ("1" === doNotTrack) {
              return logger.info("Not sending `" + event + "` because Do Not Track is enabled");
            }
          }
          if (view_id) {
            if (typeof view_id === "object") {
              if (self.disableCookies) {
                let obj = {};
              } else {
                const tmp9 = tr();
                const nowResult = obj3.now();
                if (tmp9.session_start) {
                  tmp9.sst = tmp9.session_start;
                  delete tmp[tmp3];
                }
                if (tmp9.session_id) {
                  tmp9.sid = tmp9.session_id;
                  delete tmp[tmp3];
                }
                if (tmp9.session_expires) {
                  tmp9.sex = tmp9.session_expires;
                  delete tmp[tmp3];
                }
                const sex = tmp9.sex;
                let tmp12 = !sex;
                if (sex) {
                  tmp12 = tmp9.sex < nowResult;
                }
                if (tmp12) {
                  tmp9.sid = ee();
                  tmp9.sst = nowResult;
                }
                tmp9.sex = nowResult + 1500000;
                rr(tmp9);
                obj = { session_id: null, session_start: null, session_expires: null };
                ({ sid: obj.session_id, sst: obj.session_start, sex: obj.session_expires } = tmp9);
              }
              obj = {};
              ue(obj, self.pageLevelData, view_id, obj, self.viewerData);
              obj = { event, env_key: self.envKey };
              let obj1 = obj;
              const _Object = Object;
              const _Object2 = Object;
              if (Object.getOwnPropertyDescriptors) {
                const _Object6 = Object;
                _Object2.defineProperties(obj, Object.getOwnPropertyDescriptors(obj));
              } else {
                const _Object2Result = _Object2(obj);
                obj = _Object2Result;
                const _Object3 = Object;
                const keys = Object.keys(_Object2Result);
                const _Object4 = Object;
                if (Object.getOwnPropertySymbols) {
                  const _Object5 = Object;
                  const push = keys.push;
                  push.apply(keys, Object.getOwnPropertySymbols(_Object2Result));
                }
                let item = keys.forEach((item) => {
                  Object.defineProperty(obj2, item, Object.getOwnPropertyDescriptor(obj3, item));
                });
              }
              if (obj.user_id) {
                obj.viewer_user_id = obj.user_id;
                delete tmp3[tmp2];
              }
              const mux_sample_number = obj.mux_sample_number;
              let num4 = 0;
              if (null !== mux_sample_number) {
                num4 = 0;
                if (undefined !== mux_sample_number) {
                  num4 = mux_sample_number;
                }
              }
              const result = self._deduplicateBeaconData(event, obj);
              obj = result;
              obj1 = {};
              const obj2 = {};
              const _Object7 = Object;
              const keys1 = Object.keys(result);
              const item1 = keys1.forEach((item) => {
                closure_0 = item;
                c1 = false;
                if (obj.hasOwnProperty(item)) {
                  if (undefined !== tmp[item]) {
                    const parts = item.split("_");
                    const first = parts[0];
                    closure_2 = tmp12;
                    if (!obj4[first]) {
                      logger.info(`Data key word \`${arr2[0]}\` not expected in ${item}`);
                      closure_2 = `${tmp10}_`;
                    }
                    item = parts.splice(1).forEach((item) => {
                      if ("url" === item) {
                        c1 = true;
                      }
                      if (obj6[item]) {
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
                    if (c1) {
                      obj2[closure_2] = tmp[item];
                    } else {
                      obj1[closure_2] = tmp[item];
                    }
                    const spliceResult = parts.splice(1);
                  }
                }
              });
              const _Object8 = Object;
              const merged = Object.assign(obj1, obj2);
              const utils = self.mux.utils;
              self.lastEventTime = utils.now();
              if (tmp26) {
                return logger.info("Not sending event due to sample rate restriction", event, obj, merged);
              } else {
                if (!self.envKey) {
                  logger.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", event, obj, merged);
                }
                if (!self.rateLimited) {
                  logger.info("Sending event", event, obj, merged);
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
                      obj.event = "eventrateexceeded";
                      closure_129_0 = obj;
                      obj3 = {};
                      closure_129_1 = obj3;
                      obj4 = {};
                      closure_129_2 = obj4;
                      const _Object9 = Object;
                      const keys2 = Object.keys(obj);
                      const item2 = keys2.forEach((item) => {
                        closure_0 = item;
                        c1 = false;
                        if (obj.hasOwnProperty(item)) {
                          if (undefined !== tmp[item]) {
                            const parts = item.split("_");
                            const first = parts[0];
                            closure_2 = tmp12;
                            if (!obj4[first]) {
                              logger.info(`Data key word \`${arr2[0]}\` not expected in ${item}`);
                              closure_2 = `${tmp10}_`;
                            }
                            item = parts.splice(1).forEach((item) => {
                              if ("url" === item) {
                                c1 = true;
                              }
                              if (obj6[item]) {
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
                            if (c1) {
                              obj2[closure_2] = tmp[item];
                            } else {
                              obj1[closure_2] = tmp[item];
                            }
                            const spliceResult = parts.splice(1);
                          }
                        }
                      });
                      const _Object10 = Object;
                      const eventQueue4 = self.eventQueue;
                      eventQueue4.queueEvent(obj.event, Object.assign(obj3, obj4));
                      return obj6.error("Beaconing disabled due to rate limit.");
                    }
                  }
                  if (closure_93.indexOf(event) >= 0) {
                    const eventQueue2 = self.eventQueue;
                    eventQueue2.flushEvents();
                  }
                  obj6 = logger;
                }
              }
              tmp26 = num4 >= self.sampleRate;
            }
          }
          return logger.error("A data object was expected in send() but was not provided");
        }
      }
    }
  }
};
const items10 = [
  entry8,
  {
    key: "destroy",
    value() {
      const eventQueue = this.eventQueue;
      eventQueue.destroy(false);
    }
  },
  {
    key: "_deduplicateBeaconData",
    value(arr, view_id) {
      closure_0 = arr;
      const self = this;
      let previousBeaconData = {};
      view_id = view_id.view_id;
      if ("-1" !== view_id) {
        if ("viewstart" !== arr) {
          if ("viewend" !== arr) {
            if (self.previousBeaconData) {
              const utils = self.mux.utils;
              if (utils.now() - self.lastEventTime < 600000) {
                closure_3 = 0 === arr.indexOf("request");
                const _Object = Object;
                const entries = Object.entries(view_id);
                const item = entries.forEach((item) => {
                  let tmp;
                  if (Array.isArray(item)) {
                    tmp = item;
                  }
                  if (!tmp) {
                    tmp = (function vt(items, arg1) {
                      let tmp6 = null;
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
                        tmp6 = prop;
                      }
                      if (null != tmp6) {
                        let flag2 = false;
                        try {
                          items = [];
                          try {
                            const call = tmp9.call;
                            if (typeof call === "unknown") {
                              let iter = tmp9();
                            } else {
                              iter = call(items);
                            }
                            const iter3 = iter.next();
                            const done = iter3.done;
                            let tmp11 = done;
                            if (!done) {
                              items.push(iter4.value);
                              if (!arg1) {
                                const iter5 = iter2.next();
                                const done2 = iter5.done;
                                tmp11 = done2;
                                while (!done2) {
                                  let arr = items.push(iter6.value);
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
                              let tmp19 = !tmp11;
                              if (!tmp11) {
                                tmp19 = null != iter2.return;
                              }
                              if (tmp19) {
                                iter2.return();
                              }
                              if (flag2) {
                                throw tmp5;
                              } else {
                                return items;
                              }
                            } catch (tmp25) {
                              if (tmp2) {
                                throw tmp;
                              } else {
                                throw tmp25;
                              }
                            }
                          } catch (tmp5) {
                            flag2 = true;
                          }
                        } catch (tmp28) {
                          try {
                            let tmp30 = !tmp3;
                            if (!tmp3) {
                              tmp30 = tmp4 != obj.return;
                            }
                            if (tmp30) {
                              obj.return();
                            }
                            if (tmp2) {
                              throw tmp;
                            } else {
                              throw tmp28;
                            }
                          } catch (tmp36) {
                            if (tmp2) {
                              throw tmp;
                            } else {
                              throw tmp36;
                            }
                          }
                        }
                      }
                    })(item, 2);
                  }
                  if (!tmp) {
                    tmp = Pe(item, 2);
                  }
                  if (tmp) {
                    [tmp7, tmp8] = tmp;
                    previousBeaconData = self.previousBeaconData;
                    if (previousBeaconData) {
                      let eventRequiresKeyResult = tmp8 !== obj.previousBeaconData[tmp7];
                      if (!eventRequiresKeyResult) {
                        eventRequiresKeyResult = closure_90.indexOf(tmp7) > -1;
                      }
                      if (!eventRequiresKeyResult) {
                        eventRequiresKeyResult = obj.objectHasChanged(closure_3, tmp7, tmp8, obj.previousBeaconData[tmp7]);
                      }
                      if (!eventRequiresKeyResult) {
                        eventRequiresKeyResult = obj.eventRequiresKey(closure_0, tmp7);
                      }
                      previousBeaconData = eventRequiresKeyResult;
                    }
                    if (previousBeaconData) {
                      obj[tmp7] = tmp8;
                      obj.previousBeaconData[tmp7] = tmp8;
                    }
                  } else {
                    const _TypeError = TypeError;
                    const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    throw typeError;
                  }
                });
              }
              return previousBeaconData;
            }
          }
        }
      }
      previousBeaconData = {};
      ue(previousBeaconData, view_id);
      if (view_id) {
        self.previousBeaconData = previousBeaconData;
      }
      if (view_id) {
        view_id = "viewend" === arr;
      }
      if (view_id) {
        self.previousBeaconData = null;
      }
    }
  },
  {
    key: "objectHasChanged",
    value(arg0, arr, arg2, arg3) {
      let tmp = !arg0;
      if (arg0) {
        tmp = 0 !== arr.indexOf("request_");
      }
      let tmp2 = !tmp;
      if (!tmp) {
        let obj = arg2;
        let tmp3 = "request_response_headers" === arr || typeof obj !== "object";
        obj = arg3;
        if (!tmp3) {
          tmp3 = typeof obj !== "object";
        }
        if (!tmp3) {
          if (!obj) {
            obj = {};
          }
          if (!obj) {
            obj = {};
          }
          tmp3 = Object.keys(obj).length !== Object.keys(obj).length;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }
  },
  {
    key: "eventRequiresKey",
    value(arg0, arr) {
      let tmp = "renditionchange" === arg0;
      if (tmp) {
        tmp = 0 === arr.indexOf("video_source_");
      }
      if (!tmp) {
        let hasItem = closure_92.includes(arr);
        if (hasItem) {
          hasItem = closure_91.includes(arg0);
        }
        tmp = hasItem;
      }
      return tmp;
    }
  }
];
N(fn18, items10);
const fn19 = function r(on) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      closure_1 = 0;
      closure_2 = 0;
      closure_3 = 0;
      let view_request_count = 0;
      closure_5 = 0;
      let view_request_failed_count = 0;
      let view_request_canceled_count = 0;
      on.on("requestcompleted", (arg0, arg1) => {
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
          let diff1 = num4 - request_response_start;
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
              let num5 = on.data.view_min_request_throughput;
              const result = request_bytes_loaded / diff1 * 8000;
              if (!num5) {
                num5 = Infinity;
              }
              on.data.view_min_request_throughput = Math.min(num5, result);
              on.data.view_average_request_throughput = closure_2 / closure_3 * 8000;
              on.data.view_request_count = view_request_count;
              if (tmp2 > 0) {
                closure_1 = closure_1 + tmp2;
                let num6 = tmp14.data.view_max_request_latency;
                if (!num6) {
                  num6 = 0;
                }
                tmp14.data.view_max_request_latency = Math.max(num6, tmp2);
                tmp14.data.view_average_request_latency = closure_1 / closure_5;
              }
            }
          }
        }
      });
      on.on("requestfailed", (arg0, arg1) => {
        view_request_count = view_request_count + 1;
        view_request_failed_count = view_request_failed_count + 1;
        on.data.view_request_count = view_request_count;
        on.data.view_request_failed_count = view_request_failed_count;
      });
      on.on("requestcanceled", (arg0, arg1) => {
        view_request_count = view_request_count + 1;
        view_request_canceled_count = view_request_canceled_count + 1;
        on.data.view_request_count = view_request_count;
        on.data.view_request_canceled_count = view_request_canceled_count;
      });
    } else {
      const _TypeError = TypeError;
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
};
const fn20 = function r(on) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_lastEventTime" in self) {
        let _Object = Object;
        Object.defineProperty(self, "_lastEventTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
      } else {
        self._lastEventTime = undefined;
      }
      on.on("before*", (type, viewer_time) => {
        viewer_time = viewer_time.viewer_time;
        const nowResult = obj3.now();
        const _lastEventTime = self._lastEventTime;
        self._lastEventTime = nowResult;
        if (_lastEventTime) {
          if (nowResult - _lastEventTime > 3600000) {
            let _Object = Object;
            const keys = Object.keys(on.data);
            const log = on.mux.log;
            const reduced = keys.reduce((acc, arr) => {
              if (0 !== arr.indexOf("video_")) {
                return acc;
              } else {
                let definePropertyResult = globalThis;
                let obj = {};
                if (arr in obj) {
                  const _Object = definePropertyResult.Object;
                  obj = { value: tmp3, enumerable: true, configurable: true, writable: true };
                  definePropertyResult = _Object.defineProperty(obj, arr, obj);
                } else {
                  obj[arr] = tmp3;
                }
                const merged = Object.assign(acc, obj);
              }
            }, {});
            log.info("Received event after at least an hour inactivity, creating a new view");
            const _Object2 = Object;
            let obj = { viewer_time };
            on._resetView(Object.assign(obj, reduced));
            on.playbackHeartbeat._playheadShouldBeProgressing = on.playbackHeartbeat._playheadShouldBeProgressing;
            let _playheadShouldBeProgressing = on.playbackHeartbeat._playheadShouldBeProgressing;
            if (_playheadShouldBeProgressing) {
              _playheadShouldBeProgressing = "play" !== type.type;
            }
            if (_playheadShouldBeProgressing) {
              _playheadShouldBeProgressing = "adbreakstart" !== type.type;
            }
            if (_playheadShouldBeProgressing) {
              obj = { viewer_time };
              obj3.emit("play", obj);
              if ("playing" !== type.type) {
                obj = { viewer_time };
                obj3.emit("playing", obj);
              }
            }
          }
        }
      });
    } else {
      const _TypeError = TypeError;
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
};
const fn21 = function r(on) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      function t(arg0) {

      }
      closure_2 = null;
      let video_cdn = null;
      let prop = null;
      let viewer_time = 0;
      on.on("viewinit", () => {
        closure_2 = null;
        video_cdn = null;
        prop = null;
        viewer_time = 0;
      });
      on.on("beforecdnchange", (arg0, video_cdn) => {
        video_cdn = undefined;
        if (null != video_cdn) {
          video_cdn = video_cdn.video_cdn;
        }
        let tmp2 = video_cdn;
        if (video_cdn) {
          tmp2 = undefined === video_cdn.video_previous_cdn || null === video_cdn.video_previous_cdn;
          const tmp3 = undefined === video_cdn.video_previous_cdn || null === video_cdn.video_previous_cdn;
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
                            on.emit("cdnchange", obj);
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
};
const fn22 = function r(on) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_emittingAutomaticEvent" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_emittingAutomaticEvent", { value: false, enumerable: true, configurable: true, writable: true });
      } else {
        self._emittingAutomaticEvent = false;
      }
      if ("_hasInitialized" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_hasInitialized", { value: false, enumerable: true, configurable: true, writable: true });
      } else {
        self._hasInitialized = false;
      }
      on.on("viewstart", () => {
        if (!self._hasInitialized) {
          tmp._hasInitialized = true;
          tmp._emittingAutomaticEvent = true;
          on.emit("playbackmodechange", { player_playback_mode: "standard", player_playback_mode_data: "{}" });
          tmp._emittingAutomaticEvent = false;
        }
      });
      on.on("viewend", () => {
        self._hasInitialized = false;
      });
      on.on("playbackmodechange", (arg0, player_playback_mode_data) => {
        if (!self._emittingAutomaticEvent) {
          player_playback_mode = player_playback_mode_data;
          if (player_playback_mode_data.player_playback_mode_data) {
            if (!((player_playback_mode_data) => {
              try {
                const _JSON = JSON;
                const parsed = JSON.parse(player_playback_mode_data);
                return true;
              } catch (err) {
                return false;
              }
            })(player_playback_mode.player_playback_mode_data)) {
              const log = on.mux.log;
              log.warn("Invalid JSON string for player_playback_mode_data");
              player_playback_mode.player_playback_mode_data = "{}";
            }
          } else {
            player_playback_mode.player_playback_mode_data = "{}";
          }
          ({ player_playback_mode_data: closure_0.data.player_playback_mode_data, player_playback_mode } = player_playback_mode);
          on.data.player_playback_mode = player_playback_mode;
        }
      });
    } else {
      const _TypeError = TypeError;
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
};
let closure_99 = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange", "cdnchange", "playbackmodechange"];
const set = new Set(["requestcompleted", "requestfailed", "requestcanceled"]);
f98876 = undefined;
class t {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp3 = closure_1;
    if (typeof Symbol !== "undefined") {
      _Symbol3 = Symbol;
      if (tmp3[Symbol.hasInstance]) {
        _Symbol2 = Symbol;
        tmp4 = tmp3[Symbol.hasInstance](self);
      }
      if (tmp4) {
        tmp9 = f98876;
        call = f98876.call;
        obj = typeof call === "unknown" ? tmp9() : call(self);
        closure_0 = obj;
        tmp10 = undefined === obj;
        if (tmp10) {
          _ReferenceError47 = ReferenceError;
          tmp300 = new.target;
          str88 = "this hasn't been initialised - super() hasn't been called";
          tmp301 = new.target;
          referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
          tmp303 = referenceError;
          throw referenceError;
        } else {
          str2 = "pageLoadEndTime";
          if ("pageLoadEndTime" in obj) {
            _Object = Object;
            definePropertyResult = Object.defineProperty(obj, "pageLoadEndTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
          } else {
            obj.pageLoadEndTime = undefined;
          }
          if (tmp10) {
            _ReferenceError46 = ReferenceError;
            tmp296 = new.target;
            str87 = "this hasn't been initialised - super() hasn't been called";
            tmp297 = new.target;
            referenceError1 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
            tmp299 = referenceError1;
            throw referenceError1;
          } else {
            str3 = "pageLoadInitTime";
            if ("pageLoadInitTime" in obj) {
              _Object2 = Object;
              definePropertyResult1 = Object.defineProperty(obj, "pageLoadInitTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
            } else {
              obj.pageLoadInitTime = undefined;
            }
            if (tmp10) {
              _ReferenceError45 = ReferenceError;
              tmp292 = new.target;
              str86 = "this hasn't been initialised - super() hasn't been called";
              tmp293 = new.target;
              referenceError2 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              tmp295 = referenceError2;
              throw referenceError2;
            } else {
              str4 = "_destroyed";
              if ("_destroyed" in obj) {
                _Object3 = Object;
                definePropertyResult2 = Object.defineProperty(obj, "_destroyed", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
              } else {
                obj._destroyed = undefined;
              }
              if (tmp10) {
                _ReferenceError44 = ReferenceError;
                tmp288 = new.target;
                str85 = "this hasn't been initialised - super() hasn't been called";
                tmp289 = new.target;
                referenceError3 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                tmp291 = referenceError3;
                throw referenceError3;
              } else {
                str5 = "_heartBeatTimeout";
                if ("_heartBeatTimeout" in obj) {
                  _Object4 = Object;
                  definePropertyResult3 = Object.defineProperty(obj, "_heartBeatTimeout", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                } else {
                  obj._heartBeatTimeout = undefined;
                }
                if (tmp10) {
                  _ReferenceError43 = ReferenceError;
                  tmp284 = new.target;
                  str84 = "this hasn't been initialised - super() hasn't been called";
                  tmp285 = new.target;
                  referenceError4 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  tmp287 = referenceError4;
                  throw referenceError4;
                } else {
                  str6 = "adTracker";
                  if ("adTracker" in obj) {
                    _Object5 = Object;
                    definePropertyResult4 = Object.defineProperty(obj, "adTracker", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                  } else {
                    obj.adTracker = undefined;
                  }
                  if (tmp10) {
                    _ReferenceError42 = ReferenceError;
                    tmp280 = new.target;
                    str83 = "this hasn't been initialised - super() hasn't been called";
                    tmp281 = new.target;
                    referenceError5 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    tmp283 = referenceError5;
                    throw referenceError5;
                  } else {
                    str7 = "dashjs";
                    if ("dashjs" in obj) {
                      _Object6 = Object;
                      definePropertyResult5 = Object.defineProperty(obj, "dashjs", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                    } else {
                      obj.dashjs = undefined;
                    }
                    if (tmp10) {
                      _ReferenceError41 = ReferenceError;
                      tmp276 = new.target;
                      str82 = "this hasn't been initialised - super() hasn't been called";
                      tmp277 = new.target;
                      referenceError6 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      tmp279 = referenceError6;
                      throw referenceError6;
                    } else {
                      str8 = "data";
                      if ("data" in obj) {
                        _Object7 = Object;
                        definePropertyResult6 = Object.defineProperty(obj, "data", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                      } else {
                        obj.data = undefined;
                      }
                      if (tmp10) {
                        _ReferenceError40 = ReferenceError;
                        tmp272 = new.target;
                        str81 = "this hasn't been initialised - super() hasn't been called";
                        tmp273 = new.target;
                        referenceError7 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        tmp275 = referenceError7;
                        throw referenceError7;
                      } else {
                        str9 = "disablePlayheadRebufferTracking";
                        if ("disablePlayheadRebufferTracking" in obj) {
                          _Object8 = Object;
                          definePropertyResult7 = Object.defineProperty(obj, "disablePlayheadRebufferTracking", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                        } else {
                          obj.disablePlayheadRebufferTracking = undefined;
                        }
                        if (tmp10) {
                          _ReferenceError39 = ReferenceError;
                          tmp268 = new.target;
                          str80 = "this hasn't been initialised - super() hasn't been called";
                          tmp269 = new.target;
                          referenceError8 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          tmp271 = referenceError8;
                          throw referenceError8;
                        } else {
                          str10 = "disableRebufferTracking";
                          if ("disableRebufferTracking" in obj) {
                            _Object9 = Object;
                            definePropertyResult8 = Object.defineProperty(obj, "disableRebufferTracking", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                          } else {
                            obj.disableRebufferTracking = undefined;
                          }
                          if (tmp10) {
                            _ReferenceError38 = ReferenceError;
                            tmp264 = new.target;
                            str79 = "this hasn't been initialised - super() hasn't been called";
                            tmp265 = new.target;
                            referenceError9 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            tmp267 = referenceError9;
                            throw referenceError9;
                          } else {
                            str11 = "errorTracker";
                            if ("errorTracker" in obj) {
                              _Object10 = Object;
                              definePropertyResult9 = Object.defineProperty(obj, "errorTracker", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                            } else {
                              obj.errorTracker = undefined;
                            }
                            if (tmp10) {
                              _ReferenceError37 = ReferenceError;
                              tmp260 = new.target;
                              str78 = "this hasn't been initialised - super() hasn't been called";
                              tmp261 = new.target;
                              referenceError10 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                              tmp263 = referenceError10;
                              throw referenceError10;
                            } else {
                              str12 = "errorTranslator";
                              if ("errorTranslator" in obj) {
                                _Object11 = Object;
                                definePropertyResult10 = Object.defineProperty(obj, "errorTranslator", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                              } else {
                                obj.errorTranslator = undefined;
                              }
                              if (tmp10) {
                                _ReferenceError36 = ReferenceError;
                                tmp256 = new.target;
                                str77 = "this hasn't been initialised - super() hasn't been called";
                                tmp257 = new.target;
                                referenceError11 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                tmp259 = referenceError11;
                                throw referenceError11;
                              } else {
                                str13 = "emitTranslator";
                                if ("emitTranslator" in obj) {
                                  _Object12 = Object;
                                  definePropertyResult11 = Object.defineProperty(obj, "emitTranslator", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                } else {
                                  obj.emitTranslator = undefined;
                                }
                                if (tmp10) {
                                  _ReferenceError35 = ReferenceError;
                                  tmp252 = new.target;
                                  str76 = "this hasn't been initialised - super() hasn't been called";
                                  tmp253 = new.target;
                                  referenceError12 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                  tmp255 = referenceError12;
                                  throw referenceError12;
                                } else {
                                  str14 = "getAdData";
                                  if ("getAdData" in obj) {
                                    _Object13 = Object;
                                    definePropertyResult12 = Object.defineProperty(obj, "getAdData", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                  } else {
                                    obj.getAdData = undefined;
                                  }
                                  if (tmp10) {
                                    _ReferenceError34 = ReferenceError;
                                    tmp248 = new.target;
                                    str75 = "this hasn't been initialised - super() hasn't been called";
                                    tmp249 = new.target;
                                    referenceError13 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    tmp251 = referenceError13;
                                    throw referenceError13;
                                  } else {
                                    str15 = "getPlayheadTime";
                                    if ("getPlayheadTime" in obj) {
                                      _Object14 = Object;
                                      definePropertyResult13 = Object.defineProperty(obj, "getPlayheadTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                    } else {
                                      obj.getPlayheadTime = undefined;
                                    }
                                    if (tmp10) {
                                      _ReferenceError33 = ReferenceError;
                                      tmp244 = new.target;
                                      str74 = "this hasn't been initialised - super() hasn't been called";
                                      tmp245 = new.target;
                                      referenceError14 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                      tmp247 = referenceError14;
                                      throw referenceError14;
                                    } else {
                                      str16 = "getStateData";
                                      if ("getStateData" in obj) {
                                        _Object15 = Object;
                                        definePropertyResult14 = Object.defineProperty(obj, "getStateData", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                      } else {
                                        obj.getStateData = undefined;
                                      }
                                      if (tmp10) {
                                        _ReferenceError32 = ReferenceError;
                                        tmp240 = new.target;
                                        str73 = "this hasn't been initialised - super() hasn't been called";
                                        tmp241 = new.target;
                                        referenceError15 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        tmp243 = referenceError15;
                                        throw referenceError15;
                                      } else {
                                        str17 = "stateDataTranslator";
                                        if ("stateDataTranslator" in obj) {
                                          _Object16 = Object;
                                          definePropertyResult15 = Object.defineProperty(obj, "stateDataTranslator", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                        } else {
                                          obj.stateDataTranslator = undefined;
                                        }
                                        if (tmp10) {
                                          _ReferenceError31 = ReferenceError;
                                          tmp236 = new.target;
                                          str72 = "this hasn't been initialised - super() hasn't been called";
                                          tmp237 = new.target;
                                          referenceError16 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                          tmp239 = referenceError16;
                                          throw referenceError16;
                                        } else {
                                          str18 = "hlsjs";
                                          if ("hlsjs" in obj) {
                                            _Object17 = Object;
                                            definePropertyResult16 = Object.defineProperty(obj, "hlsjs", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                          } else {
                                            obj.hlsjs = undefined;
                                          }
                                          if (tmp10) {
                                            _ReferenceError30 = ReferenceError;
                                            tmp232 = new.target;
                                            str71 = "this hasn't been initialised - super() hasn't been called";
                                            tmp233 = new.target;
                                            referenceError17 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            tmp235 = referenceError17;
                                            throw referenceError17;
                                          } else {
                                            str19 = "id";
                                            if ("id" in obj) {
                                              _Object18 = Object;
                                              definePropertyResult17 = Object.defineProperty(obj, "id", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                            } else {
                                              obj.id = undefined;
                                            }
                                            if (tmp10) {
                                              _ReferenceError29 = ReferenceError;
                                              tmp228 = new.target;
                                              str70 = "this hasn't been initialised - super() hasn't been called";
                                              tmp229 = new.target;
                                              referenceError18 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                              tmp231 = referenceError18;
                                              throw referenceError18;
                                            } else {
                                              str20 = "longResumeTracker";
                                              if ("longResumeTracker" in obj) {
                                                _Object19 = Object;
                                                definePropertyResult18 = Object.defineProperty(obj, "longResumeTracker", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                              } else {
                                                obj.longResumeTracker = undefined;
                                              }
                                              if (tmp10) {
                                                _ReferenceError28 = ReferenceError;
                                                tmp224 = new.target;
                                                str69 = "this hasn't been initialised - super() hasn't been called";
                                                tmp225 = new.target;
                                                referenceError19 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                tmp227 = referenceError19;
                                                throw referenceError19;
                                              } else {
                                                str21 = "minimumRebufferDuration";
                                                if ("minimumRebufferDuration" in obj) {
                                                  _Object20 = Object;
                                                  definePropertyResult19 = Object.defineProperty(obj, "minimumRebufferDuration", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                } else {
                                                  obj.minimumRebufferDuration = undefined;
                                                }
                                                if (tmp10) {
                                                  _ReferenceError27 = ReferenceError;
                                                  tmp220 = new.target;
                                                  str68 = "this hasn't been initialised - super() hasn't been called";
                                                  tmp221 = new.target;
                                                  referenceError20 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                  tmp223 = referenceError20;
                                                  throw referenceError20;
                                                } else {
                                                  str22 = "mux";
                                                  if ("mux" in obj) {
                                                    _Object21 = Object;
                                                    definePropertyResult20 = Object.defineProperty(obj, "mux", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                  } else {
                                                    obj.mux = undefined;
                                                  }
                                                  if (tmp10) {
                                                    _ReferenceError26 = ReferenceError;
                                                    tmp216 = new.target;
                                                    str67 = "this hasn't been initialised - super() hasn't been called";
                                                    tmp217 = new.target;
                                                    referenceError21 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                    tmp219 = referenceError21;
                                                    throw referenceError21;
                                                  } else {
                                                    str23 = "playbackEventDispatcher";
                                                    if ("playbackEventDispatcher" in obj) {
                                                      _Object22 = Object;
                                                      definePropertyResult21 = Object.defineProperty(obj, "playbackEventDispatcher", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                    } else {
                                                      obj.playbackEventDispatcher = undefined;
                                                    }
                                                    if (tmp10) {
                                                      _ReferenceError25 = ReferenceError;
                                                      tmp212 = new.target;
                                                      str66 = "this hasn't been initialised - super() hasn't been called";
                                                      tmp213 = new.target;
                                                      referenceError22 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                      tmp215 = referenceError22;
                                                      throw referenceError22;
                                                    } else {
                                                      str24 = "playbackHeartbeat";
                                                      if ("playbackHeartbeat" in obj) {
                                                        _Object23 = Object;
                                                        definePropertyResult22 = Object.defineProperty(obj, "playbackHeartbeat", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                      } else {
                                                        obj.playbackHeartbeat = undefined;
                                                      }
                                                      if (tmp10) {
                                                        _ReferenceError24 = ReferenceError;
                                                        tmp208 = new.target;
                                                        str65 = "this hasn't been initialised - super() hasn't been called";
                                                        tmp209 = new.target;
                                                        referenceError23 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                        tmp211 = referenceError23;
                                                        throw referenceError23;
                                                      } else {
                                                        str25 = "playbackHeartbeatTime";
                                                        if ("playbackHeartbeatTime" in obj) {
                                                          _Object24 = Object;
                                                          definePropertyResult23 = Object.defineProperty(obj, "playbackHeartbeatTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                        } else {
                                                          obj.playbackHeartbeatTime = undefined;
                                                        }
                                                        if (tmp10) {
                                                          _ReferenceError23 = ReferenceError;
                                                          tmp204 = new.target;
                                                          str64 = "this hasn't been initialised - super() hasn't been called";
                                                          tmp205 = new.target;
                                                          referenceError24 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                          tmp207 = referenceError24;
                                                          throw referenceError24;
                                                        } else {
                                                          str26 = "playheadTime";
                                                          if ("playheadTime" in obj) {
                                                            _Object25 = Object;
                                                            definePropertyResult24 = Object.defineProperty(obj, "playheadTime", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                          } else {
                                                            obj.playheadTime = undefined;
                                                          }
                                                          if (tmp10) {
                                                            _ReferenceError22 = ReferenceError;
                                                            tmp200 = new.target;
                                                            str63 = "this hasn't been initialised - super() hasn't been called";
                                                            tmp201 = new.target;
                                                            referenceError25 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                            tmp203 = referenceError25;
                                                            throw referenceError25;
                                                          } else {
                                                            str27 = "seekingTracker";
                                                            if ("seekingTracker" in obj) {
                                                              _Object26 = Object;
                                                              definePropertyResult25 = Object.defineProperty(obj, "seekingTracker", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                            } else {
                                                              obj.seekingTracker = undefined;
                                                            }
                                                            if (tmp10) {
                                                              _ReferenceError21 = ReferenceError;
                                                              tmp196 = new.target;
                                                              str62 = "this hasn't been initialised - super() hasn't been called";
                                                              tmp197 = new.target;
                                                              referenceError26 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                              tmp199 = referenceError26;
                                                              throw referenceError26;
                                                            } else {
                                                              str28 = "sustainedRebufferThreshold";
                                                              if ("sustainedRebufferThreshold" in obj) {
                                                                _Object27 = Object;
                                                                definePropertyResult26 = Object.defineProperty(obj, "sustainedRebufferThreshold", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                              } else {
                                                                obj.sustainedRebufferThreshold = undefined;
                                                              }
                                                              if (tmp10) {
                                                                _ReferenceError20 = ReferenceError;
                                                                tmp192 = new.target;
                                                                str61 = "this hasn't been initialised - super() hasn't been called";
                                                                tmp193 = new.target;
                                                                referenceError27 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                tmp195 = referenceError27;
                                                                throw referenceError27;
                                                              } else {
                                                                str29 = "watchTimeTracker";
                                                                if ("watchTimeTracker" in obj) {
                                                                  _Object28 = Object;
                                                                  definePropertyResult27 = Object.defineProperty(obj, "watchTimeTracker", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                                } else {
                                                                  obj.watchTimeTracker = undefined;
                                                                }
                                                                if (tmp10) {
                                                                  _ReferenceError19 = ReferenceError;
                                                                  tmp188 = new.target;
                                                                  str60 = "this hasn't been initialised - super() hasn't been called";
                                                                  tmp189 = new.target;
                                                                  referenceError28 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                  tmp191 = referenceError28;
                                                                  throw referenceError28;
                                                                } else {
                                                                  str30 = "currentFragmentPDT";
                                                                  if ("currentFragmentPDT" in obj) {
                                                                    _Object29 = Object;
                                                                    definePropertyResult28 = Object.defineProperty(obj, "currentFragmentPDT", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                                  } else {
                                                                    obj.currentFragmentPDT = undefined;
                                                                  }
                                                                  if (tmp10) {
                                                                    _ReferenceError18 = ReferenceError;
                                                                    tmp184 = new.target;
                                                                    str59 = "this hasn't been initialised - super() hasn't been called";
                                                                    tmp185 = new.target;
                                                                    referenceError29 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                    tmp187 = referenceError29;
                                                                    throw referenceError29;
                                                                  } else {
                                                                    str31 = "currentFragmentStart";
                                                                    if ("currentFragmentStart" in obj) {
                                                                      _Object30 = Object;
                                                                      definePropertyResult29 = Object.defineProperty(obj, "currentFragmentStart", { value: "IconComponent", enumerable: "cup_with_straw", configurable: "flaske sake", writable: "sake" });
                                                                    } else {
                                                                      obj.currentFragmentStart = undefined;
                                                                    }
                                                                    tmp41 = global;
                                                                    tmp42 = require;
                                                                    tmp43 = importDefault;
                                                                    tmp44 = closure_2_47;
                                                                    obj.pageLoadInitTime = closure_2_47.navigationStart();
                                                                    obj.pageLoadEndTime = closure_2_47.domContentLoadedEventEnd();
                                                                    obj = { debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1000, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, disablePlayheadRebufferTracking: false, errorTranslator: null, emitTranslator: null, stateDataTranslator: null };
                                                                    obj.errorTranslator = function errorTranslator(arg0) {
                                                                      return arg0;
                                                                    };
                                                                    obj.emitTranslator = function emitTranslator() {
                                                                      const length = arguments.length;
                                                                      const array = new Array(length);
                                                                      for (let num = 0; num < length; num = num + 1) {
                                                                        array[num] = arguments[num];
                                                                      }
                                                                      return array;
                                                                    };
                                                                    obj.stateDataTranslator = function stateDataTranslator(stateData) {
                                                                      return stateData;
                                                                    };
                                                                    obj.mux = global;
                                                                    obj.id = require;
                                                                    tmp45 = null;
                                                                    tmp46 = null != importDefault && importDefault.beaconDomain;
                                                                    if (tmp46) {
                                                                      log = obj.mux.log;
                                                                      str32 = "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.";
                                                                      warnResult = log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.");
                                                                    }
                                                                    _Object31 = Object;
                                                                    merged = Object.assign(obj, importDefault);
                                                                    merged.data = merged.data || {};
                                                                    if (merged.data.property_key) {
                                                                      merged.data.env_key = merged.data.property_key;
                                                                      data = merged.data;
                                                                      str33 = "property_key";
                                                                      delete tmp2[tmp];
                                                                    }
                                                                    closure_2_38.level = merged.debug ? closure_2_34 : closure_2_36;
                                                                    obj.getPlayheadTime = merged.getPlayheadTime;
                                                                    obj.getStateData = merged.getStateData || (() => ({}));
                                                                    obj.getAdData = merged.getAdData || (() => {

                                                                    });
                                                                    ({ minimumRebufferDuration: obj.minimumRebufferDuration, sustainedRebufferThreshold: obj.sustainedRebufferThreshold, playbackHeartbeatTime: obj.playbackHeartbeatTime, disableRebufferTracking: obj.disableRebufferTracking } = merged);
                                                                    if (obj.disableRebufferTracking) {
                                                                      log2 = obj.mux.log;
                                                                      str34 = "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.";
                                                                      warnResult1 = log2.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.");
                                                                    }
                                                                    ({ disablePlayheadRebufferTracking: obj.disablePlayheadRebufferTracking, errorTranslator: obj.errorTranslator, emitTranslator: obj.emitTranslator, stateDataTranslator: obj.stateDataTranslator } = merged);
                                                                    tmp50 = closure_2_94;
                                                                    tmp51 = new.target;
                                                                    tmp52 = closure_2_94(global, merged.data.env_key, merged);
                                                                    obj.playbackEventDispatcher = new.target;
                                                                    obj1 = { player_instance_id: null, mux_sample_rate: null, beacon_domain: null };
                                                                    tmp53 = closure_2_28;
                                                                    obj1.player_instance_id = closure_2_28();
                                                                    obj1.mux_sample_rate = merged.sampleRate;
                                                                    obj1.beacon_domain = merged.beaconCollectionDomain || merged.beaconDomain;
                                                                    obj.data = obj1;
                                                                    num = 1;
                                                                    obj.data.view_sequence_number = 1;
                                                                    obj.data.player_sequence_number = 1;
                                                                    fn = function() {
                                                                      const self = this;
                                                                      if (undefined === this.data.view_start) {
                                                                        const utils = self.mux.utils;
                                                                        self.data.view_start = utils.now();
                                                                        self.emit("viewstart");
                                                                      }
                                                                    };
                                                                    if (tmp10) {
                                                                      _ReferenceError17 = ReferenceError;
                                                                      tmp180 = new.target;
                                                                      str58 = "this hasn't been initialised - super() hasn't been called";
                                                                      tmp181 = new.target;
                                                                      referenceError30 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                      tmp183 = referenceError30;
                                                                      throw referenceError30;
                                                                    } else {
                                                                      closure_1 = tmp54(obj);
                                                                      str35 = "viewinit";
                                                                      onResult = obj.on("viewinit", function(arg0, arg1) {
                                                                        this._resetVideoData();
                                                                        this._resetViewData();
                                                                        this._resetErrorData();
                                                                        this._updateStateData();
                                                                        const merged = Object.assign(this.data, arg1);
                                                                        this._initializeViewData();
                                                                        this.one("play", closure_1);
                                                                        this.one("adbreakstart", closure_1);
                                                                      });
                                                                      str36 = "videochange";
                                                                      onResult1 = obj.on("videochange", function(arg0, arg1) {
                                                                        this._resetView(arg1);
                                                                      });
                                                                      str37 = "programchange";
                                                                      onResult2 = obj.on("programchange", function(arg0, arg1) {
                                                                        const self = this;
                                                                        if (this.data.player_is_paused) {
                                                                          const log = self.mux.log;
                                                                          log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.");
                                                                        }
                                                                        self._resetView(Object.assign(arg1, { view_program_changed: true }));
                                                                        closure_1();
                                                                        self.emit("play");
                                                                        self.emit("playing");
                                                                      });
                                                                      str38 = "fragmentchange";
                                                                      onResult3 = obj.on("fragmentchange", (arg0, arg1) => {

                                                                      });
                                                                      str39 = "destroy";
                                                                      onResult4 = obj.on("destroy", obj.destroy);
                                                                      _window = window;
                                                                      if (typeof window !== "undefined") {
                                                                        _window2 = window;
                                                                        if (typeof window.addEventListener === "function") {
                                                                          _window3 = window;
                                                                          if (typeof window.removeEventListener === "function") {
                                                                            fn2 = function f() {
                                                                              let WINDOW_HIDDEN = undefined !== obj.data.view_start;
                                                                              obj.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState;
                                                                              if (WINDOW_HIDDEN) {
                                                                                WINDOW_HIDDEN = obj.mux.WINDOW_HIDDEN;
                                                                              }
                                                                              if (WINDOW_HIDDEN) {
                                                                                if (!obj.data.player_is_paused) {
                                                                                  obj.emit("hb");
                                                                                }
                                                                              }
                                                                            };
                                                                            f = fn2;
                                                                            _window4 = window;
                                                                            flag = false;
                                                                            str89 = "visibilitychange";
                                                                            listener = window.addEventListener("visibilitychange", fn2, false);
                                                                            fn3 = function g(event) {
                                                                              if (!event.persisted) {
                                                                                obj.destroy();
                                                                              }
                                                                            };
                                                                            g = fn3;
                                                                            _window5 = window;
                                                                            str90 = "pagehide";
                                                                            listener1 = window.addEventListener("pagehide", fn3, false);
                                                                            onResult5 = obj.on("destroy", () => {
                                                                              const removed = window.removeEventListener("visibilitychange", fn2);
                                                                              const removed1 = window.removeEventListener("pagehide", fn3);
                                                                            });
                                                                          }
                                                                        }
                                                                      }
                                                                      str40 = "playerready";
                                                                      onResult6 = obj.on("playerready", function(arg0, arg1) {
                                                                        const merged = Object.assign(this.data, arg1);
                                                                      });
                                                                      tmp61 = closure_2_99;
                                                                      item = closure_2_99.forEach((item) => {
                                                                        obj.on(item, function(arg0, arg1) {
                                                                          const self = this;
                                                                          if (0 !== item.indexOf("ad")) {
                                                                            self._updateStateData();
                                                                          }
                                                                          const merged = Object.assign(self.data, arg1);
                                                                          self._sanitizeData();
                                                                        });
                                                                        obj.on(`after${item}`, function() {
                                                                          const self = this;
                                                                          let viewErrored = "error" !== closure_0;
                                                                          if (!viewErrored) {
                                                                            viewErrored = self.errorTracker.viewErrored;
                                                                          }
                                                                          if (viewErrored) {
                                                                            self.send(closure_0);
                                                                          }
                                                                        });
                                                                      });
                                                                      str41 = "viewend";
                                                                      onResult7 = obj.on("viewend", (arg0, arg1) => {
                                                                        const merged = Object.assign(obj.data, arg1);
                                                                      });
                                                                      oneResult = obj.one("playerready", function(arg0) {
                                                                        const self = this;
                                                                        if (this.data.player_init_time) {
                                                                          self.data.player_startup_time = tmp4 - self.data.player_init_time;
                                                                        }
                                                                        self.pageLoadInitTime = self.data.page_load_init_time || self.pageLoadInitTime;
                                                                        self.pageLoadEndTime = self.data.page_load_end_time || self.pageLoadEndTime;
                                                                        const PLAYER_TRACKED = self.mux.PLAYER_TRACKED;
                                                                        let pageLoadInitTime = !PLAYER_TRACKED;
                                                                        if (!PLAYER_TRACKED) {
                                                                          pageLoadInitTime = self.pageLoadInitTime;
                                                                        }
                                                                        if (pageLoadInitTime) {
                                                                          self.mux.PLAYER_TRACKED = true;
                                                                          if (tmp5) {
                                                                            let num = self.data.player_init_time;
                                                                            if (!num) {
                                                                              num = Infinity;
                                                                            }
                                                                            self.data.page_load_time = Math.min(num, self.pageLoadEndTime || Infinity) - self.pageLoadInitTime;
                                                                            const tmp7 = self.pageLoadEndTime || Infinity;
                                                                          }
                                                                          tmp5 = self.data.player_init_time || self.pageLoadEndTime;
                                                                        }
                                                                        self.send("playerready");
                                                                        delete tmp3[tmp2];
                                                                        delete tmp2[tmp];
                                                                      });
                                                                      if (tmp10) {
                                                                        _ReferenceError16 = ReferenceError;
                                                                        tmp176 = new.target;
                                                                        str57 = "this hasn't been initialised - super() hasn't been called";
                                                                        tmp177 = new.target;
                                                                        referenceError31 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                        tmp179 = referenceError31;
                                                                        throw referenceError31;
                                                                      } else {
                                                                        tmp66 = new.target;
                                                                        tmp65Result = tmp65(obj);
                                                                        obj.longResumeTracker = new.target;
                                                                        if (tmp10) {
                                                                          _ReferenceError15 = ReferenceError;
                                                                          tmp172 = new.target;
                                                                          str56 = "this hasn't been initialised - super() hasn't been called";
                                                                          tmp173 = new.target;
                                                                          referenceError32 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                          tmp175 = referenceError32;
                                                                          throw referenceError32;
                                                                        } else {
                                                                          tmp69 = new.target;
                                                                          tmp68Result = tmp68(obj);
                                                                          obj.errorTracker = new.target;
                                                                          if (tmp10) {
                                                                            _ReferenceError14 = ReferenceError;
                                                                            tmp168 = new.target;
                                                                            str55 = "this hasn't been initialised - super() hasn't been called";
                                                                            tmp169 = new.target;
                                                                            referenceError33 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                            tmp171 = referenceError33;
                                                                            throw referenceError33;
                                                                          } else {
                                                                            tmp72 = new.target;
                                                                            tmp71Result = tmp71(obj);
                                                                            if (tmp10) {
                                                                              _ReferenceError13 = ReferenceError;
                                                                              tmp164 = new.target;
                                                                              str54 = "this hasn't been initialised - super() hasn't been called";
                                                                              tmp165 = new.target;
                                                                              referenceError34 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                              tmp167 = referenceError34;
                                                                              throw referenceError34;
                                                                            } else {
                                                                              tmp75 = new.target;
                                                                              tmp74Result = tmp74(obj);
                                                                              obj.seekingTracker = new.target;
                                                                              if (tmp10) {
                                                                                _ReferenceError12 = ReferenceError;
                                                                                tmp160 = new.target;
                                                                                str53 = "this hasn't been initialised - super() hasn't been called";
                                                                                tmp161 = new.target;
                                                                                referenceError35 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                tmp163 = referenceError35;
                                                                                throw referenceError35;
                                                                              } else {
                                                                                tmp78 = new.target;
                                                                                tmp77Result = tmp77(obj);
                                                                                obj.playheadTime = new.target;
                                                                                if (tmp10) {
                                                                                  _ReferenceError11 = ReferenceError;
                                                                                  tmp156 = new.target;
                                                                                  str52 = "this hasn't been initialised - super() hasn't been called";
                                                                                  tmp157 = new.target;
                                                                                  referenceError36 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                  tmp159 = referenceError36;
                                                                                  throw referenceError36;
                                                                                } else {
                                                                                  tmp81 = new.target;
                                                                                  tmp80Result = tmp80(obj);
                                                                                  obj.playbackHeartbeat = new.target;
                                                                                  if (tmp10) {
                                                                                    _ReferenceError10 = ReferenceError;
                                                                                    tmp152 = new.target;
                                                                                    str51 = "this hasn't been initialised - super() hasn't been called";
                                                                                    tmp153 = new.target;
                                                                                    referenceError37 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                    tmp155 = referenceError37;
                                                                                    throw referenceError37;
                                                                                  } else {
                                                                                    tmp84 = new.target;
                                                                                    tmp83Result = tmp83(obj);
                                                                                    if (tmp10) {
                                                                                      _ReferenceError9 = ReferenceError;
                                                                                      tmp148 = new.target;
                                                                                      str50 = "this hasn't been initialised - super() hasn't been called";
                                                                                      tmp149 = new.target;
                                                                                      referenceError38 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                      tmp151 = referenceError38;
                                                                                      throw referenceError38;
                                                                                    } else {
                                                                                      tmp87 = new.target;
                                                                                      tmp86Result = tmp86(obj);
                                                                                      obj.watchTimeTracker = new.target;
                                                                                      if (tmp10) {
                                                                                        _ReferenceError8 = ReferenceError;
                                                                                        tmp144 = new.target;
                                                                                        str49 = "this hasn't been initialised - super() hasn't been called";
                                                                                        tmp145 = new.target;
                                                                                        referenceError39 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                        tmp147 = referenceError39;
                                                                                        throw referenceError39;
                                                                                      } else {
                                                                                        tmp90 = new.target;
                                                                                        tmp89Result = tmp89(obj);
                                                                                        if (tmp10) {
                                                                                          _ReferenceError7 = ReferenceError;
                                                                                          tmp140 = new.target;
                                                                                          str48 = "this hasn't been initialised - super() hasn't been called";
                                                                                          tmp141 = new.target;
                                                                                          referenceError40 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                          tmp143 = referenceError40;
                                                                                          throw referenceError40;
                                                                                        } else {
                                                                                          tmp93 = new.target;
                                                                                          tmp92Result = tmp92(obj);
                                                                                          obj.adTracker = new.target;
                                                                                          if (tmp10) {
                                                                                            _ReferenceError6 = ReferenceError;
                                                                                            tmp136 = new.target;
                                                                                            str47 = "this hasn't been initialised - super() hasn't been called";
                                                                                            tmp137 = new.target;
                                                                                            referenceError41 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                            tmp139 = referenceError41;
                                                                                            throw referenceError41;
                                                                                          } else {
                                                                                            tmp96 = new.target;
                                                                                            tmp95Result = tmp95(obj);
                                                                                            if (tmp10) {
                                                                                              _ReferenceError5 = ReferenceError;
                                                                                              tmp132 = new.target;
                                                                                              str46 = "this hasn't been initialised - super() hasn't been called";
                                                                                              tmp133 = new.target;
                                                                                              referenceError42 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                              tmp135 = referenceError42;
                                                                                              throw referenceError42;
                                                                                            } else {
                                                                                              tmp99 = new.target;
                                                                                              tmp98Result = tmp98(obj);
                                                                                              if (tmp10) {
                                                                                                _ReferenceError4 = ReferenceError;
                                                                                                tmp128 = new.target;
                                                                                                str45 = "this hasn't been initialised - super() hasn't been called";
                                                                                                tmp129 = new.target;
                                                                                                referenceError43 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                                tmp131 = referenceError43;
                                                                                                throw referenceError43;
                                                                                              } else {
                                                                                                tmp102 = new.target;
                                                                                                tmp101Result = tmp101(obj);
                                                                                                if (tmp10) {
                                                                                                  _ReferenceError3 = ReferenceError;
                                                                                                  tmp124 = new.target;
                                                                                                  str44 = "this hasn't been initialised - super() hasn't been called";
                                                                                                  tmp125 = new.target;
                                                                                                  referenceError44 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                                  tmp127 = referenceError44;
                                                                                                  throw referenceError44;
                                                                                                } else {
                                                                                                  tmp105 = new.target;
                                                                                                  tmp104Result = tmp104(obj);
                                                                                                  if (tmp10) {
                                                                                                    _ReferenceError2 = ReferenceError;
                                                                                                    tmp120 = new.target;
                                                                                                    str43 = "this hasn't been initialised - super() hasn't been called";
                                                                                                    tmp121 = new.target;
                                                                                                    referenceError45 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                                    tmp123 = referenceError45;
                                                                                                    throw referenceError45;
                                                                                                  } else {
                                                                                                    tmp108 = new.target;
                                                                                                    tmp107Result = tmp107(obj);
                                                                                                    if (tmp10) {
                                                                                                      _ReferenceError = ReferenceError;
                                                                                                      tmp116 = new.target;
                                                                                                      str42 = "this hasn't been initialised - super() hasn't been called";
                                                                                                      tmp117 = new.target;
                                                                                                      referenceError46 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                                      tmp119 = referenceError46;
                                                                                                      throw referenceError46;
                                                                                                    } else {
                                                                                                      tmp111 = new.target;
                                                                                                      tmp110Result = tmp110(obj);
                                                                                                      if (merged.hlsjs) {
                                                                                                        addHLSJSResult = obj.addHLSJS(merged);
                                                                                                      }
                                                                                                      if (merged.dashjs) {
                                                                                                        addDashJSResult = obj.addDashJS(merged);
                                                                                                      }
                                                                                                      emitResult = obj.emit("viewinit", merged.data);
                                                                                                      return obj;
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
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "Cannot call a class as a function";
        tmp6 = new.target;
        typeError = new TypeError("Cannot call a class as a function");
        tmp8 = typeError;
        throw typeError;
      }
    }
    if (typeof Symbol !== "undefined") {
      _Symbol4 = Symbol;
      if (tmp3[Symbol.hasInstance]) {
        _Symbol = Symbol;
        tmp4 = tmp3[Symbol.hasInstance](self);
      }
    }
    tmp4 = closure_8(self, tmp3);
    return;
  }
}
t.prototype = Object.create(fn2.prototype, { constructor: { value: t, writable: true, configurable: true } });
fn(t, fn2);
create = (function Rt() {
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
            const call = valueOf.call;
            const _Reflect2 = Reflect;
            const _Boolean2 = Boolean;
            if (typeof call === "unknown") {
              valueOf();
            } else {
              call(constructResult);
            }
            return true;
          } catch (err) {
            return false;
          }
        }
      }
    }
  }
  return false;
})();
f98876 = function() {
  const self = this;
  const obj = BottomSheet(f98876);
  if (closure_1) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, arguments, BottomSheet(self).constructor);
  } else {
    constructResult = obj(...arguments);
  }
  if (!constructResult) {
    let tmp8 = self;
    if (undefined === self) {
      const _ReferenceError = ReferenceError;
      const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
      throw referenceError;
    }
  } else {
    if (constructResult) {
      const _Symbol = Symbol;
      if (typeof Symbol !== "undefined") {
        const _Symbol2 = Symbol;
        let str = "symbol";
      }
      tmp8 = constructResult;
      if ("object" !== str) {
        tmp8 = constructResult;
      }
    }
    str = typeof constructResult;
  }
  return tmp8;
};
const entry9 = {
  key: "emit",
  value(arg0, arg1) {
    const self = this;
    const obj = { viewer_time: null };
    const utils = this.mux.utils;
    obj.viewer_time = utils.now();
    const merged = Object.assign(obj, arg1);
    items = [arg0, merged];
    let emitTranslatorResult = items;
    if (this.emitTranslator) {
      try {
        emitTranslatorResult = self.emitTranslator(arg0, merged);
      } catch (tmp3) {
        const log = tmp.mux.log;
        log.warn("Exception in emit translator callback.", tmp3);
      }
    }
    let length = null != emitTranslatorResult;
    if (length) {
      length = emitTranslatorResult.length;
    }
    if (length) {
      const tmp9 = closure_2_41(BottomSheet(closure_1.prototype), "emit", self);
      const call = tmp9.call;
      const items1 = [self];
      call.apply(tmp9, items1.concat(__initData10(emitTranslatorResult)));
    }
  }
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
    }
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
              if (tmp7) {
                merged.video_source_is_live = false;
              }
              tmp7 = merged.player_source_duration > 0 || merged.video_source_duration > 0;
            }
          }
          merged.video_source_is_live = true;
        }
        if (!merged.video_source_is_live) {
          items = ["player_program_time", "player_manifest_newest_program_time", "player_live_edge_program_time", "player_program_time", "video_holdback", "video_part_holdback", "video_target_duration", "video_part_target_duration"];
          const item = items.forEach((item) => {
            merged[item] = undefined;
          });
        }
        merged.video_source_url = merged.video_source_url || merged.player_source_url;
        if (merged.video_source_url) {
          if (typeof re === "function") {
            if (typeof str === "string") {
              if ("" !== str) {
                const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                let first;
                if (str2) {
                  first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                  const tmp12 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                }
                let items1 = [str2, first];
                const tmp10 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
              }
              const _Array = Array;
              let tmp14;
              if (Array.isArray(items1)) {
                tmp14 = items1;
              }
              if (!tmp14) {
                tmp14 = (function vt(items, arg1) {
                  let tmp6 = null;
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
                    tmp6 = prop;
                  }
                  if (null != tmp6) {
                    let flag2 = false;
                    try {
                      items = [];
                      try {
                        const call = tmp9.call;
                        if (typeof call === "unknown") {
                          let iter = tmp9();
                        } else {
                          iter = call(items);
                        }
                        const iter3 = iter.next();
                        const done = iter3.done;
                        let tmp11 = done;
                        if (!done) {
                          items.push(iter4.value);
                          if (!arg1) {
                            const iter5 = iter2.next();
                            const done2 = iter5.done;
                            tmp11 = done2;
                            while (!done2) {
                              let arr = items.push(iter6.value);
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
                          let tmp19 = !tmp11;
                          if (!tmp11) {
                            tmp19 = null != iter2.return;
                          }
                          if (tmp19) {
                            iter2.return();
                          }
                          if (flag2) {
                            throw tmp5;
                          } else {
                            return items;
                          }
                        } catch (tmp25) {
                          if (tmp2) {
                            throw tmp;
                          } else {
                            throw tmp25;
                          }
                        }
                      } catch (tmp5) {
                        flag2 = true;
                      }
                    } catch (tmp28) {
                      try {
                        let tmp30 = !tmp3;
                        if (!tmp3) {
                          tmp30 = tmp4 != obj.return;
                        }
                        if (tmp30) {
                          obj.return();
                        }
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp28;
                        }
                      } catch (tmp36) {
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp36;
                        }
                      }
                    }
                  }
                })(items1, 2);
              }
              if (!tmp14) {
                tmp14 = Pe(items1, 2);
              }
              if (tmp14) {
                [tmp6.video_source_hostname, tmp6.video_source_domain] = tmp14;
              } else {
                const _TypeError = TypeError;
                const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                throw typeError;
              }
            }
            items1 = ["localhost"];
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        delete tmp4[tmp3];
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
          const data3 = self.data;
          delete tmp2[tmp];
        }
      }
    }
  },
  {
    key: "_resetView",
    value(arg0) {
      this.emit("viewend");
      this.send("viewend");
      this.emit("viewinit", arg0);
    }
  },
  {
    key: "_updateStateData",
    value() {
      const self = this;
      let stateData = this.getStateData();
      if (typeof this.stateDataTranslator === "function") {
        try {
          stateData = self.stateDataTranslator(stateData);
        } catch (tmp4) {
          const log = tmp.mux.log;
          log.warn("Exception in stateDataTranslator translator callback.", tmp4);
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
    }
  },
  {
    key: "_sanitizeData",
    value() {
      const self = this;
      items = ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"];
      const item = items.forEach((item) => {
        const parsed = parseInt(self.data[item], 10);
        let tmp2;
        if (!isNaN(parsed)) {
          tmp2 = parsed;
        }
        self.data[item] = tmp2;
      });
      const items1 = ["player_source_url", "video_source_url"];
      const item1 = items1.forEach((item) => {
        if (self.data[item]) {
          const formatted = tmp.data[item].toLowerCase();
          let tmp2 = 0 === formatted.indexOf("data:");
          if (!tmp2) {
            tmp2 = 0 === formatted.indexOf("blob:");
          }
          if (tmp2) {
            tmp.data[item] = "MSE style URL";
          }
        }
      });
    }
  },
  {
    key: "_resetVideoData",
    value() {
      const self = this;
      const keys = Object.keys(this.data);
      const item = keys.forEach((arr) => {
        if (0 === arr.indexOf("video_")) {
          const data = self.data;
          delete tmp[tmp2];
        }
      });
    }
  },
  {
    key: "_resetViewData",
    value() {
      const self = this;
      const keys = Object.keys(this.data);
      const item = keys.forEach((arr) => {
        if (0 === arr.indexOf("view_")) {
          const data = self.data;
          delete tmp[tmp2];
        }
      });
      this.data.view_sequence_number = 1;
    }
  },
  {
    key: "_resetErrorData",
    value() {
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp2[tmp];
    }
  },
  {
    key: "_initializeViewData",
    value() {
      const self = this;
      const tmp = ee();
      this.data.view_id = tmp;
      closure_1 = tmp;
      if (this.data.player_is_paused) {
        self.one("play", function o() {
          if (closure_1 === self.data.view_id) {
            const data = self.data;
            data.player_view_count = data.player_view_count || 0;
            data.player_view_count = data.player_view_count + 1;
          }
        });
      } else if (tmp === self.data.view_id) {
        let data = self.data;
        data.player_view_count = data.player_view_count || 0;
        data.player_view_count = data.player_view_count + 1;
      }
    }
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
    }
  },
  {
    key: "addHLSJS",
    value(hlsjs) {
      const self = this;
      if (hlsjs.hlsjs) {
        if (self.hlsjs) {
          const log2 = self.mux.log;
          log2.warn("An instance of HLS.js is already being monitored for this player.");
        } else {
          self.hlsjs = hlsjs.hlsjs;
          ({ mux, id } = self);
          ({ hlsjs, Hls } = hlsjs);
          if (!Hls) {
            const _window = window;
            Hls = window.Hls;
          }
          ((mux, id, hlsjs) => {
            closure_1 = id;
            let tmp;
            if (arguments.length > 4) {
              tmp = arguments[4];
            }
            closure_3 = tmp;
            const log = mux.log;
            const secondsToMs = mux.utils.secondsToMs;
            function s(arg0) {

            }
            if (closure_47.exists()) {
              function u(arg0, arg1) {

              }
              fn = function f(request_event_type, arg1) {
                ({ levels, audioTracks, url, stats, networkDetails, sessionData } = arg1);
                let obj = {};
                let obj2 = obj;
                obj = {};
                obj3 = obj;
                const item = levels.forEach((width, index) => {
                  const size = { width: width.width, height: width.height, bitrate: width.bitrate, attrs: width.attrs };
                  obj2[index] = size;
                });
                const item1 = audioTracks.forEach((name, index) => {
                  obj3[index] = { name: name.name, language: name.lang, bitrate: name.bitrate };
                });
                if (typeof He === "function") {
                  if (stats) {
                    const navigationStartResult = closure_2_47.navigationStart();
                    let loading = stats.loading;
                    let round = loading ? loading.start : stats.trequest;
                    let _Math = loading ? loading.first : stats.tfirst;
                    loading = { bytesLoaded: stats.total, requestStart: null, responseStart: null, responseEnd: null };
                    const _Math2 = Math;
                    loading.requestStart = Math.round(navigationStartResult + round);
                    const _Math3 = Math;
                    round = Math.round;
                    loading.responseStart = round(navigationStartResult + _Math);
                    _Math = Math;
                    stats = Math.round;
                    loading.responseEnd = stats(navigationStartResult + (loading ? loading.end : stats.tload));
                    const tmp5 = loading ? loading.end : stats.tload;
                  } else {
                    obj = {};
                    if (typeof Me === "function") {
                      for (const key10049 in sessionData) {
                        let tmp35 = sessionData[key10049];
                        let prop = tmp35["DATA-ID"];
                        if (-1 === prop.search("io.litix.data.")) {
                          continue;
                        } else {
                          ({ DATA-ID: str3, VALUE: obj5[str3.replace(str3, "io.litix.data.", "")] } = tmp35);
                          continue;
                        }
                        continue;
                      }
                      obj2 = {};
                      tmp13(obj2, {});
                      obj3 = { request_event_type, request_bytes_loaded: tmp8, request_start: tmp9, request_response_start: tmp10, request_response_end: tmp11, request_type: "manifest", request_hostname: null, request_response_headers: null, request_rendition_lists: null };
                      if (typeof closure_2_44 === "function") {
                        if (typeof re === "function") {
                          if (typeof url === "string") {
                            if ("" !== url) {
                              const str4 = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                              let first;
                              if (str4) {
                                first = str4.match(/[^\.]+\.[^\.]+$/) || [][0];
                                const tmp22 = str4.match(/[^\.]+\.[^\.]+$/) || [];
                              }
                              items = [str4, first];
                              const tmp20 = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                            }
                            obj3.request_hostname = items[0];
                            if (typeof Se === "function") {
                              let tmp24;
                              if (networkDetails) {
                                if (typeof networkDetails.getAllResponseHeaders === "function") {
                                  let str5 = networkDetails.getAllResponseHeaders();
                                  obj4 = {};
                                  obj2 = obj4;
                                  if (!str5) {
                                    str5 = "";
                                  }
                                  const parts = str5.trim().split(/[\r\n]+/);
                                  const item2 = parts.forEach((item) => {
                                    if (item) {
                                      const parts = item.split(": ");
                                      const str2 = parts.shift();
                                      let tmp = str2;
                                      if (str2) {
                                        let tmp3 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                                        if (!tmp3) {
                                          const formatted = str2.toLowerCase();
                                          tmp3 = 0 === formatted.indexOf("x-litix-");
                                        }
                                        tmp = tmp3;
                                      }
                                      if (tmp) {
                                        obj[str2] = parts.join(": ");
                                      }
                                    }
                                  });
                                  tmp24 = obj4;
                                  const str6 = str5.trim();
                                }
                              }
                              obj3.request_response_headers = tmp24;
                              const obj5 = { media: obj, audio: obj, video: {} };
                              obj3.request_rendition_lists = obj5;
                              const _Object = Object;
                              const _Object2 = Object;
                              if (Object.getOwnPropertyDescriptors) {
                                const _Object6 = Object;
                                _Object2.defineProperties(obj2, Object.getOwnPropertyDescriptors(obj3));
                              } else {
                                const _Object2Result = _Object2(obj3);
                                obj2 = _Object2Result;
                                const _Object3 = Object;
                                const keys = Object.keys(_Object2Result);
                                const _Object4 = Object;
                                if (Object.getOwnPropertySymbols) {
                                  const _Object5 = Object;
                                  const push = keys.push;
                                  push.apply(keys, Object.getOwnPropertySymbols(_Object2Result));
                                }
                                const item3 = keys.forEach((item) => {
                                  Object.defineProperty(obj2, item, Object.getOwnPropertyDescriptor(obj3, item));
                                });
                              }
                              if (typeof tmp12 === "function") {
                                mux.emit(closure_1, "requestcompleted", obj2);
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
                      const obj1 = {};
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
              hlsjs.on(tmp.Events.MANIFEST_LOADED, fn);
              const fn2 = function g(request_event_type, arg1) {
                ({ details, networkDetails, stats } = arg1);
                if (typeof He === "function") {
                  if (stats) {
                    const navigationStartResult = closure_2_47.navigationStart();
                    let loading = stats.loading;
                    let round = loading ? loading.start : stats.trequest;
                    let _Math = loading ? loading.first : stats.tfirst;
                    loading = { bytesLoaded: stats.total, requestStart: null, responseStart: null, responseEnd: null };
                    const _Math2 = Math;
                    loading.requestStart = Math.round(navigationStartResult + round);
                    const _Math3 = Math;
                    round = Math.round;
                    loading.responseStart = round(navigationStartResult + _Math);
                    _Math = Math;
                    stats = Math.round;
                    loading.responseEnd = stats(navigationStartResult + (loading ? loading.end : stats.tload));
                    const tmp4 = loading ? loading.end : stats.tload;
                  } else {
                    let obj = {};
                    if (typeof s === "function") {
                      const _parseInt = parseInt;
                      const parsed = parseInt(closure_3.version);
                      let tmp16 = 1 === parsed;
                      if (tmp16) {
                        tmp16 = null !== tmp11.programDateTime;
                      }
                      let programDateTime;
                      if (tmp16) {
                        programDateTime = tmp11.programDateTime;
                      }
                      let tmp19 = 0 === parsed;
                      if (tmp19) {
                        tmp19 = null !== tmp11.pdt;
                      }
                      if (tmp19) {
                        programDateTime = tmp11.pdt;
                      }
                      const sum = programDateTime + secondsToMs(tmp11.duration);
                      obj = { request_event_type, request_bytes_loaded: tmp7, request_start: tmp8, request_response_start: tmp9, request_response_end: tmp10, request_current_level: tmp, request_type: "manifest", request_hostname: null, request_response_headers: null, video_holdback: null, video_part_holdback: null, video_part_target_duration: null, video_target_duration: null, video_source_is_live: null, player_manifest_newest_program_time: null };
                      if (typeof closure_2_44 === "function") {
                        if (typeof re === "function") {
                          if (typeof str === "string") {
                            if ("" !== str) {
                              const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                              let first;
                              if (str2) {
                                first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                                const tmp29 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                              }
                              items = [str2, first];
                              const tmp27 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                            }
                            obj.request_hostname = items[0];
                            if (typeof Se === "function") {
                              let tmp31;
                              if (networkDetails) {
                                if (typeof networkDetails.getAllResponseHeaders === "function") {
                                  let str3 = networkDetails.getAllResponseHeaders();
                                  obj = {};
                                  if (!str3) {
                                    str3 = "";
                                  }
                                  const parts = str3.trim().split(/[\r\n]+/);
                                  const item = parts.forEach((item) => {
                                    if (item) {
                                      const parts = item.split(": ");
                                      const str2 = parts.shift();
                                      let tmp = str2;
                                      if (str2) {
                                        let tmp3 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                                        if (!tmp3) {
                                          const formatted = str2.toLowerCase();
                                          tmp3 = 0 === formatted.indexOf("x-litix-");
                                        }
                                        tmp = tmp3;
                                      }
                                      if (tmp) {
                                        obj[str2] = parts.join(": ");
                                      }
                                    }
                                  });
                                  tmp31 = obj;
                                  const str4 = str3.trim();
                                }
                              }
                              obj.request_response_headers = tmp31;
                              obj.video_holdback = details.holdBack && tmp22(details.holdBack);
                              const tmp33 = details.holdBack && tmp22(details.holdBack);
                              obj.video_part_holdback = details.partHoldBack && tmp22(details.partHoldBack);
                              const tmp34 = details.partHoldBack && tmp22(details.partHoldBack);
                              obj.video_part_target_duration = details.partTarget && tmp22(details.partTarget);
                              const tmp35 = details.partTarget && tmp22(details.partTarget);
                              obj.video_target_duration = details.targetduration && tmp22(details.targetduration);
                              obj.video_source_is_live = details.live;
                              const _isNaN = isNaN;
                              let tmp37;
                              if (!isNaN(sum)) {
                                tmp37 = sum;
                              }
                              obj.player_manifest_newest_program_time = tmp37;
                              if (typeof tmp24 === "function") {
                                mux.emit(closure_1, "requestcompleted", obj);
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                              const tmp36 = details.targetduration && tmp22(details.targetduration);
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
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
              hlsjs.on(tmp.Events.LEVEL_LOADED, fn2);
              fn3 = function k(request_event_type, arg1) {
                ({ networkDetails, stats } = arg1);
                if (typeof He === "function") {
                  if (stats) {
                    const navigationStartResult = closure_2_47.navigationStart();
                    let loading = stats.loading;
                    let round = loading ? loading.start : stats.trequest;
                    let _Math = loading ? loading.first : stats.tfirst;
                    loading = { bytesLoaded: stats.total, requestStart: null, responseStart: null, responseEnd: null };
                    const _Math2 = Math;
                    loading.requestStart = Math.round(navigationStartResult + round);
                    const _Math3 = Math;
                    round = Math.round;
                    loading.responseStart = round(navigationStartResult + _Math);
                    _Math = Math;
                    stats = Math.round;
                    loading.responseEnd = stats(navigationStartResult + (loading ? loading.end : stats.tload));
                    const tmp4 = loading ? loading.end : stats.tload;
                  } else {
                    let obj = {};
                    obj = { request_event_type, request_bytes_loaded: null, request_start: null, request_response_start: null, request_response_end: null, request_type: "manifest", request_hostname: null, request_response_headers: null };
                    ({ bytesLoaded: obj3.request_bytes_loaded, requestStart: obj3.request_start, responseStart: obj3.request_response_start, responseEnd: obj3.request_response_end } = obj);
                    if (typeof closure_2_44 === "function") {
                      if (typeof re === "function") {
                        if (typeof str === "string") {
                          if ("" !== str) {
                            const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                            let first;
                            if (str2) {
                              first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                              const tmp13 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                            }
                            items = [str2, first];
                            const tmp11 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                          }
                          obj.request_hostname = items[0];
                          if (typeof Se === "function") {
                            let tmp15;
                            if (networkDetails) {
                              if (typeof networkDetails.getAllResponseHeaders === "function") {
                                let str3 = networkDetails.getAllResponseHeaders();
                                obj = {};
                                if (!str3) {
                                  str3 = "";
                                }
                                const parts = str3.trim().split(/[\r\n]+/);
                                const item = parts.forEach((item) => {
                                  if (item) {
                                    const parts = item.split(": ");
                                    const str2 = parts.shift();
                                    let tmp = str2;
                                    if (str2) {
                                      let tmp3 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                                      if (!tmp3) {
                                        const formatted = str2.toLowerCase();
                                        tmp3 = 0 === formatted.indexOf("x-litix-");
                                      }
                                      tmp = tmp3;
                                    }
                                    if (tmp) {
                                      obj[str2] = parts.join(": ");
                                    }
                                  }
                                });
                                tmp15 = obj;
                                const str4 = str3.trim();
                              }
                            }
                            obj.request_response_headers = tmp15;
                            if (typeof tmp8 === "function") {
                              mux.emit(closure_1, "requestcompleted", obj);
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
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
              hlsjs.on(tmp.Events.AUDIO_TRACK_LOADED, fn3);
              fn4 = function h(request_event_type, arg1) {
                ({ stats, networkDetails, frag } = arg1);
                if (!stats) {
                  stats = frag.stats;
                }
                if (typeof He === "function") {
                  if (stats) {
                    const navigationStartResult = closure_2_47.navigationStart();
                    let loading = stats.loading;
                    let round = loading ? loading.start : stats.trequest;
                    let _Math = loading ? loading.first : stats.tfirst;
                    loading = { bytesLoaded: stats.total, requestStart: null, responseStart: null, responseEnd: null };
                    const _Math2 = Math;
                    loading.requestStart = Math.round(navigationStartResult + round);
                    const _Math3 = Math;
                    round = Math.round;
                    loading.responseStart = round(navigationStartResult + _Math);
                    _Math = Math;
                    stats = Math.round;
                    loading.responseEnd = stats(navigationStartResult + (loading ? loading.end : stats.tload));
                    const tmp3 = loading ? loading.end : stats.tload;
                  } else {
                    let obj = {};
                    ({ bytesLoaded, requestStart, responseStart, responseEnd } = obj);
                    if (networkDetails) {
                      if (typeof Se === "function") {
                        if (networkDetails) {
                          if (typeof networkDetails.getAllResponseHeaders === "function") {
                            let str = networkDetails.getAllResponseHeaders();
                            obj = {};
                            if (!str) {
                              str = "";
                            }
                            const parts = str.trim().split(/[\r\n]+/);
                            const item = parts.forEach((item) => {
                              if (item) {
                                const parts = item.split(": ");
                                const str2 = parts.shift();
                                let tmp = str2;
                                if (str2) {
                                  let tmp3 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                                  if (!tmp3) {
                                    const formatted = str2.toLowerCase();
                                    tmp3 = 0 === formatted.indexOf("x-litix-");
                                  }
                                  tmp = tmp3;
                                }
                                if (tmp) {
                                  obj[str2] = parts.join(": ");
                                }
                              }
                            });
                            const str2 = str.trim();
                          }
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    obj = { request_event_type, request_bytes_loaded: bytesLoaded, request_start: requestStart, request_response_start: responseStart, request_response_end: responseEnd, request_hostname: null, request_id: null, request_response_headers: null, request_media_duration: null, request_url: null };
                    if (!networkDetails) {
                      obj.request_hostname = undefined;
                      let tmp17;
                      if (tmp6) {
                        obj = tmp6;
                        let tmp18;
                        if (tmp6) {
                          const found = closure_2_49.find((item) => undefined !== obj[item]);
                          let tmp21;
                          if (found) {
                            tmp21 = tmp6[found];
                          }
                          tmp18 = tmp21;
                        }
                        tmp17 = tmp18;
                      }
                      obj.request_id = tmp17;
                      obj.request_response_headers = tmp6;
                      obj.request_media_duration = frag.duration;
                      let responseURL;
                      if (null != networkDetails) {
                        responseURL = networkDetails.responseURL;
                      }
                      obj.request_url = responseURL;
                      if ("main" === frag.type) {
                        obj.request_type = "media";
                        obj.request_current_level = frag.level;
                        obj.request_video_width = hlsjs.levels[frag.level] || {}.width;
                        obj.request_video_height = hlsjs.levels[frag.level] || {}.height;
                        obj.request_labeled_bitrate = hlsjs.levels[frag.level] || {}.bitrate;
                        const tmp25 = hlsjs.levels[frag.level] || {};
                        const tmp26 = hlsjs.levels[frag.level] || {};
                        const tmp27 = hlsjs.levels[frag.level] || {};
                      } else {
                        obj.request_type = frag.type;
                      }
                      if (typeof u === "function") {
                        mux.emit(closure_1, "requestcompleted", obj);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else if (typeof closure_2_44 === "function") {
                      if (typeof re === "function") {
                        if (typeof str3 === "string") {
                          if ("" !== str3) {
                            const str4 = str3.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                            let first;
                            if (str4) {
                              first = str4.match(/[^\.]+\.[^\.]+$/) || [][0];
                              const tmp15 = str4.match(/[^\.]+\.[^\.]+$/) || [];
                            }
                            items = [str4, first];
                            const tmp13 = str3.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                          }
                          const first1 = items[0];
                        }
                        items = ["localhost"];
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
              };
              hlsjs.on(tmp.Events.FRAG_LOADED, fn4);
              fn5 = function c(arg0, frag) {
                frag = frag.frag;
                if (typeof s === "function") {
                  const _parseInt = parseInt;
                  const parsed = parseInt(closure_3.version);
                  let tmp5 = 1 === parsed;
                  if (tmp5) {
                    tmp5 = null !== frag.programDateTime;
                  }
                  let programDateTime;
                  if (tmp5) {
                    programDateTime = frag.programDateTime;
                  }
                  let tmp8 = 0 === parsed;
                  if (tmp8) {
                    tmp8 = null !== frag.pdt;
                  }
                  if (tmp8) {
                    programDateTime = frag.pdt;
                  }
                  const obj = { currentFragmentPDT: programDateTime, currentFragmentStart: secondsToMs(tmp) };
                  if (typeof u === "function") {
                    mux.emit(closure_1, "fragmentchange", obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
              hlsjs.on(tmp.Events.FRAG_CHANGED, fn5);
              fn6 = function m(arg0, url) {
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
                    if (networkDetails) {
                      if (typeof networkDetails.getAllResponseHeaders === "function") {
                        let str2 = networkDetails.getAllResponseHeaders();
                        let obj = {};
                        if (!str2) {
                          str2 = "";
                        }
                        let parts = str2.trim().split(/[\r\n]+/);
                        const item = parts.forEach((item) => {
                          if (item) {
                            const parts = item.split(": ");
                            const str2 = parts.shift();
                            let tmp = str2;
                            if (str2) {
                              let tmp3 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
                              if (!tmp3) {
                                const formatted = str2.toLowerCase();
                                tmp3 = 0 === formatted.indexOf("x-litix-");
                              }
                              tmp = tmp3;
                            }
                            if (tmp) {
                              obj[str2] = parts.join(": ");
                            }
                          }
                        });
                        const str3 = str2.trim();
                      }
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                if (tmp6) {
                  obj = { request_error: details, request_url: str, request_hostname: null, request_id: null, request_type: null, request_error_code: null, request_error_text: null };
                  if (typeof closure_2_44 === "function") {
                    if (typeof re === "function") {
                      if (typeof str === "string") {
                        if ("" !== str) {
                          const str4 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                          let first;
                          if (str4) {
                            first = str4.match(/[^\.]+\.[^\.]+$/) || [][0];
                            const tmp12 = str4.match(/[^\.]+\.[^\.]+$/) || [];
                          }
                          items = [str4, first];
                          const tmp10 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                        }
                        obj.request_hostname = items[0];
                        let tmp13;
                        if (tmp) {
                          obj = tmp;
                          let tmp14;
                          if (tmp) {
                            const found = closure_2_49.find((item) => undefined !== obj[item]);
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
                        if (details !== tmp5.ErrorDetails.FRAG_LOAD_ERROR) {
                          str6 = "media";
                          if (details !== tmp5.ErrorDetails.FRAG_LOAD_TIMEOUT) {
                            let str7 = "audio";
                            if (details !== tmp5.ErrorDetails.AUDIO_TRACK_LOAD_ERROR) {
                              str7 = "audio";
                              if (details !== tmp5.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT) {
                                let str9 = "subtitle";
                                if (details !== tmp5.ErrorDetails.SUBTITLE_LOAD_ERROR) {
                                  str9 = "subtitle";
                                  if (details !== tmp5.ErrorDetails.SUBTITLE_LOAD_TIMEOUT) {
                                    if (details === tmp5.ErrorDetails.KEY_LOAD_ERROR) {
                                      let str10 = "encryption";
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
                          mux.emit(closure_1, "requestfailed", obj);
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
                  if (str) {
                    const concat = "url: ".concat;
                    str13 = "url: ".concat(str, "\n");
                  }
                  let str16 = "";
                  const combined = "".concat(str13);
                  if (response) {
                    if (response.code) {
                      const concat2 = "response: ".concat;
                      const combined1 = "response: ".concat(response.code, ", ");
                      str16 = combined1.concat(response.text, "\n");
                    } else {
                      str16 = "";
                    }
                  }
                  let str20 = "";
                  const sum = combined + "".concat(str16);
                  if (url.reason) {
                    const concat3 = "failure reason: ".concat;
                    str20 = "failure reason: ".concat(url.reason, "\n");
                  }
                  let str23 = "";
                  const sum1 = sum + "".concat(str20);
                  if (url.level) {
                    const concat4 = "level: ".concat;
                    str23 = "level: ".concat(url.level, "\n");
                  }
                  let str26 = "";
                  const sum2 = sum1 + "".concat(str23);
                  if (url.parent) {
                    const concat5 = "parent stream controller: ".concat;
                    str26 = "parent stream controller: ".concat(url.parent, "\n");
                  }
                  let str29 = "";
                  const sum3 = sum2 + "".concat(str26);
                  if (url.buffer) {
                    const concat6 = "buffer length: ".concat;
                    str29 = "buffer length: ".concat(url.buffer, "\n");
                  }
                  let str32 = "";
                  const sum4 = sum3 + "".concat(str29);
                  if (url.error) {
                    const concat7 = "error: ".concat;
                    str32 = "error: ".concat(url.error, "\n");
                  }
                  let str35 = "";
                  const sum5 = sum4 + "".concat(str32);
                  if (url.event) {
                    const concat8 = "event: ".concat;
                    str35 = "event: ".concat(url.event, "\n");
                  }
                  let str38 = "";
                  const sum6 = sum5 + "".concat(str35);
                  if (url.err) {
                    let message;
                    if (null !== url.err) {
                      if (undefined !== err) {
                        message = err.message;
                      }
                    }
                    str38 = "error message: ".concat(message, "\n");
                  }
                  obj = { player_error_code: type, player_error_message: details, player_error_context: sum6 + "".concat(str38) };
                  if (typeof u === "function") {
                    mux.emit(closure_1, "error", obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              };
              hlsjs.on(tmp.Events.ERROR, fn6);
              fn7 = function w(request_event_type, frag) {
                frag = frag.frag;
                let str = frag;
                if (frag) {
                  str = frag._url;
                }
                if (!str) {
                  str = "";
                }
                const obj = { request_event_type, request_url: str, request_type: "media", request_hostname: null };
                if (typeof closure_2_44 === "function") {
                  if (typeof re === "function") {
                    if (typeof str === "string") {
                      if ("" !== str) {
                        const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                        let first;
                        if (str2) {
                          first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                          const tmp5 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                        }
                        items = [str2, first];
                        const tmp3 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                      }
                      obj.request_hostname = items[0];
                      if (typeof tmp === "function") {
                        mux.emit(closure_1, "requestcanceled", obj);
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
                if (hlsjs.levels[arg1.level]) {
                  if (tmp.attrs) {
                    if (tmp.attrs.BANDWIDTH) {
                      const BANDWIDTH = tmp.attrs.BANDWIDTH;
                      const _parseFloat = parseFloat;
                      const parsed = parseFloat(tmp.attrs["FRAME-RATE"]);
                      const _isNaN = isNaN;
                      if (!isNaN(parsed)) {
                        const tmp4 = parsed;
                      }
                      if (BANDWIDTH) {
                        const obj = { video_source_fps: tmp4, video_source_bitrate: BANDWIDTH, video_source_width: null, video_source_height: null, video_source_rendition_name: null, video_source_codec: null };
                        ({ width: obj.video_source_width, height: obj.video_source_height, name: obj.video_source_rendition_name } = tmp);
                        let videoCodec;
                        if (null != tmp) {
                          videoCodec = tmp.videoCodec;
                        }
                        obj.video_source_codec = videoCodec;
                        if (typeof tmp7 === "function") {
                          mux.emit(closure_1, "renditionchange", obj);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                        tmp7 = u;
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
                delete tmp2[tmp];
              };
              hlsjs.on(tmp.Events.DESTROYING, hlsjs._stopMuxMonitor);
            } else {
              log.warn("performance timing not supported. Not tracking HLS.js.");
            }
          })(mux, id, hlsjs, {}, Hls);
        }
      } else {
        let log = self.mux.log;
        log.warn("You must pass a valid hlsjs instance in order to track it.");
      }
    }
  },
  {
    key: "removeHLSJS",
    value() {
      const self = this;
      if (this.hlsjs) {
        const hlsjs = self.hlsjs;
        let tmp = hlsjs;
        if (hlsjs) {
          tmp = typeof hlsjs._stopMuxMonitor === "function";
        }
        if (tmp) {
          hlsjs._stopMuxMonitor();
        }
        self.hlsjs = undefined;
      }
    }
  },
  {
    key: "addDashJS",
    value(dashjs) {
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
            closure_1 = tmp3;
            const log2 = mux.log;
            if (dashjs) {
              if (dashjs.on) {
                let tmp5 = ((dashjs) => {
                  try {
                    const getVersion = dashjs.getVersion;
                    let first;
                    if (null !== getVersion) {
                      if (undefined !== tmp2) {
                        const call = tmp2.call;
                        if (typeof call === "unknown") {
                          let callResult = tmp2();
                        } else {
                          callResult = call(dashjs);
                        }
                        if (null !== callResult) {
                          if (undefined !== str) {
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
                function o(arg0, arg1) {

                }
                fn = function s(arg0) {
                  ({ data, type } = arg0);
                  if (!data) {
                    data = {};
                  }
                  const obj = { request_event_type: type, request_start: 0, request_response_start: 0, request_response_end: 0, request_bytes_loaded: -1, request_type: "manifest", request_hostname: null, request_url: null };
                  if (typeof closure_44 === "function") {
                    if (typeof re === "function") {
                      if (typeof str === "string") {
                        if ("" !== str) {
                          const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                          let first;
                          if (str2) {
                            first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                            const tmp5 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                          }
                          items = [str2, first];
                          const tmp3 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                        }
                        obj.request_hostname = items[0];
                        obj.request_url = str;
                        if (typeof tmp === "function") {
                          mux.emit(closure_1, "requestcompleted", obj);
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
                closure_6 = {};
                function f(arg0) {

                }
                const fn2 = function k(arg0) {
                  ({ chunk, type, request } = arg0);
                  if (!chunk) {
                    chunk = {};
                  }
                  ({ type: type2, bitrateList } = chunk.mediaInfo || {});
                  let media = {};
                  if (!bitrateList) {
                    bitrateList = [];
                  }
                  const item = bitrateList.forEach((item, index) => {
                    obj[index] = {};
                    ({ width: obj[index].width, height: obj[index].height, bandwidth: obj[index].bitrate } = item);
                    obj[index].attrs = {};
                  });
                  if ("video" === type2) {
                    closure_6.video = media;
                    let tmp2 = closure_6;
                  } else if ("audio" === type2) {
                    closure_6.audio = media;
                    tmp2 = closure_6;
                  } else {
                    tmp2 = closure_6;
                    closure_6.media = media;
                  }
                  const tmp5 = Nt(request, dashjs);
                  media = { request_event_type: type, request_start: tmp5.requestStart, request_response_start: tmp5.requestResponseStart, request_response_end: tmp5.requestResponseEnd, request_bytes_loaded: -1, request_type: `${type2}_init`, request_response_headers: tmp5.requestResponseHeaders, request_hostname: tmp5.requestHostname, request_id: tmp5.requestId, request_url: tmp5.requestUrl, request_media_duration: tmp5.requestMediaDuration, request_rendition_lists: tmp2 };
                  if (typeof o === "function") {
                    mux.emit(closure_1, "requestcompleted", media);
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
                  ({ chunk, type, request } = arg0);
                  if (!chunk) {
                    chunk = {};
                  }
                  ({ mediaInfo, start } = chunk);
                  if (!mediaInfo) {
                    mediaInfo = {};
                  }
                  const type2 = mediaInfo.type;
                  ({ requestStart, requestResponseStart, requestResponseEnd, requestBytesLoaded, requestResponseHeaders, requestMediaDuration, requestHostname, requestUrl, requestId } = Nt(request, dashjs));
                  const qualityFor = dashjs.getQualityFor(type2);
                  const bitrateList = dashjs.getCurrentTrackFor(type2).bitrateList;
                  if (bitrateList) {
                    let obj = { currentLevel: qualityFor, renditionWidth: bitrateList[qualityFor].width || null, renditionHeight: bitrateList[qualityFor].height || null, renditionBitrate: bitrateList[qualityFor].bandwidth };
                  } else {
                    obj = {};
                  }
                  obj = { request_event_type: type, request_start: requestStart, request_response_start: requestResponseStart, request_response_end: requestResponseEnd, request_bytes_loaded: requestBytesLoaded, request_type: type2, request_response_headers: requestResponseHeaders, request_hostname: requestHostname, request_id: requestId, request_url: requestUrl, request_media_start_time: start, request_media_duration: requestMediaDuration, request_current_level: obj.currentLevel, request_labeled_bitrate: obj.renditionBitrate, request_video_width: obj.renditionWidth, request_video_height: obj.renditionHeight };
                  if (typeof o === "function") {
                    mux.emit(closure_1, "requestcompleted", obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                  const tmp = Nt(request, dashjs);
                };
                if (tmp5 >= 4) {
                  dashjs.on("mediaFragmentLoaded", fn3);
                } else {
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
                const video = { video: "Array", audio: "call", totalBitrate: "o" };
                fn4 = function x(newQuality, arg1, arg2) {
                  let obj = newQuality;
                  if (typeof newQuality.newQuality === "number") {
                    const mediaType = newQuality.mediaType;
                    if ("audio" === mediaType) {
                      obj = dashjs;
                      const bitrateInfoListFor = dashjs.getBitrateInfoListFor(mediaType);
                      const found = bitrateInfoListFor.find((qualityIndex) => qualityIndex.qualityIndex === obj.newQuality);
                      if (found) {
                        if (typeof found.bitrate === "number") {
                          obj = {};
                          ue(obj, found);
                          obj = { codec: null };
                          obj.codec = obj.getCurrentTrackFor(mediaType).codec;
                          const _Object5 = Object;
                          const _Object6 = Object;
                          if (Object.getOwnPropertyDescriptors) {
                            const _Object4 = Object;
                            _Object6.defineProperties(obj, Object.getOwnPropertyDescriptors(obj));
                          } else {
                            const _Object6Result = _Object6(obj);
                            obj = _Object6Result;
                            const _Object = Object;
                            const keys = Object.keys(_Object6Result);
                            const _Object2 = Object;
                            if (Object.getOwnPropertySymbols) {
                              const _Object3 = Object;
                              const push = keys.push;
                              push.apply(keys, Object.getOwnPropertySymbols(_Object6Result));
                            }
                            const item = keys.forEach((item) => {
                              Object.defineProperty(obj2, item, Object.getOwnPropertyDescriptor(obj3, item));
                            });
                          }
                          video[mediaType] = obj;
                          let tmp6;
                          if (video.video) {
                            if (typeof tmp22.video.bitrate === "number") {
                              if (tmp22.video.width) {
                                if (tmp22.video.height) {
                                  const bitrate = tmp22.video.bitrate;
                                  let sum = bitrate;
                                  if (tmp9) {
                                    sum = bitrate + tmp22.audio.bitrate;
                                  }
                                  if (sum !== tmp22.totalBitrate) {
                                    tmp22.totalBitrate = sum;
                                    const obj1 = { video_source_bitrate: sum, video_source_height: tmp22.video.height, video_source_width: tmp22.video.width, video_source_codec: null };
                                    if (typeof pa === "function") {
                                      const match = str7.match(/.*codecs\*?="(.*)"/);
                                      let tmp13;
                                      if (null !== match) {
                                        if (undefined !== match) {
                                          tmp13 = match[1];
                                        }
                                      }
                                      obj1.video_source_codec = tmp13;
                                      tmp6 = obj1;
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                    str7 = tmp22.video.codec;
                                  }
                                  tmp9 = tmp22.audio && typeof tmp22.audio.bitrate === "number";
                                }
                              }
                              log2.warn("have bitrate info for video but missing width/height");
                            }
                          }
                          if (tmp6) {
                            if (typeof o === "function") {
                              mux.emit(closure_1, "renditionchange", tmp6);
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
                  ({ request, mediaType } = arg0);
                  if (!request) {
                    request = {};
                  }
                  const obj = { request_event_type: `${request.type}_${request.action}`, request_url: request.url, request_type: mediaType, request_hostname: null };
                  if (typeof closure_44 === "function") {
                    if (typeof re === "function") {
                      if (typeof str === "string") {
                        if ("" !== str) {
                          const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                          let first;
                          if (str2) {
                            first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                            const tmp5 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                          }
                          items = [str2, first];
                          const tmp3 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                        }
                        obj.request_hostname = items[0];
                        if (typeof o === "function") {
                          mux.emit(closure_1, "requestcanceled", obj);
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
                    obj = { request_error: `${obj.type}_${obj.action}`, request_url: request.url, request_hostname: null, request_type: null, request_error_code: null, request_error_text: null };
                    if (typeof closure_44 === "function") {
                      if (typeof re === "function") {
                        if (typeof str9 === "string") {
                          if ("" !== str9) {
                            const str = str9.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                            let first;
                            if (str) {
                              first = str.match(/[^\.]+\.[^\.]+$/) || [][0];
                              const tmp5 = str.match(/[^\.]+\.[^\.]+$/) || [];
                            }
                            items = [str, first];
                            const tmp3 = str9.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                          }
                          obj.request_hostname = items[0];
                          obj.request_type = request.mediaType;
                          ({ status: obj5.request_error_code, statusText: obj5.request_error_text } = response);
                          if (typeof tmp20 === "function") {
                            mux.emit(closure_1, "requestfailed", obj);
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
                    obj = { player_error_code: code1, player_error_message: null, player_error_context: null };
                    let message;
                    if (null != error) {
                      message = error.message;
                    }
                    obj.player_error_message = message;
                    obj.player_error_context = sum;
                    if (typeof tmp14 === "function") {
                      mux.emit(closure_1, "error", obj);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                    tmp14 = o;
                  }
                  let status;
                  if (null != response) {
                    status = response.status;
                  }
                  const combined = "response: ".concat(status, ", ");
                  let statusText;
                  if (null != response) {
                    statusText = response.statusText;
                  }
                  str6 = combined.concat(statusText, "\n");
                };
                dashjs.on("error", fn6);
                dashjs._stopMuxMonitor = () => {
                  dashjs.off("manifestLoaded", fn);
                  dashjs.off("initFragmentLoaded", fn2);
                  dashjs.off("mediaFragmentLoaded", fn3);
                  dashjs.off("qualityChangeRendered", fn4);
                  dashjs.off("error", fn6);
                  dashjs.off("fragmentLoadingAbandoned", fn5);
                  delete tmp2[tmp];
                };
              }
            }
            log2.warn("Invalid dash.js player reference. Monitoring blocked.");
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      } else {
        const log = self.mux.log;
        log.warn("You must pass a valid dashjs instance in order to track it.");
      }
    }
  },
  {
    key: "removeDashJS",
    value() {
      const self = this;
      if (this.dashjs) {
        const dashjs = self.dashjs;
        let tmp = dashjs;
        if (dashjs) {
          tmp = typeof dashjs._stopMuxMonitor === "function";
        }
        if (tmp) {
          dashjs._stopMuxMonitor();
        }
        self.dashjs = undefined;
      }
    }
  }
];
N(t, items11);
let closure_102 = G(obj7.exports);
let closure_103 = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"];
let closure_104 = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" };
const GResult1 = G(obj2.exports);
if (tmp28) {
  const _WeakMap = WeakMap;
  const weakMap = new WeakMap();
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
    obj = { buffer: "", manifest: { segments: [], serverControl: {}, sessionData: {} }, currentUri: {} };
    processResult = obj.process(global);
    return obj.manifest;
  }
  process(arg0) {
    self = this;
    this.buffer = this.buffer + global;
    buffer = this.buffer;
    index = buffer.indexOf("\n");
    if (index > -1) {
      do {
        str = self.buffer;
        processLineResult = self.processLine(str.substring(0, index));
        str2 = self.buffer;
        self.buffer = str2.substring(index + 1);
        buffer1 = self.buffer;
        index = buffer1.indexOf("\n");
      } while (index > -1);
    }
    return;
  }
  processLine(arg0) {
    index = global.indexOf(":");
    if (typeof Ii === "function") {
      num = -1;
      if (-1 === index) {
        items = [];
        items[0] = global;
        items1 = items;
      } else {
        num2 = 0;
        items1 = [, ];
        items1[0] = global.substring(0, index);
        num3 = 1;
        items1[1] = global.substring(index + 1);
      }
      first = items1[0];
      num4 = 2;
      if (2 !== items1.length) {
        self = this;
        str3 = "#";
        if ("#" !== first[0]) {
          self.currentUri.uri = first;
          segments = self.manifest.segments;
          arr = segments.push(self.currentUri);
          targetDuration = self.manifest.targetDuration;
          if (targetDuration) {
            str8 = "duration";
            targetDuration = !("duration" in self.currentUri);
          }
          if (targetDuration) {
            self.currentUri.duration = self.manifest.targetDuration;
          }
          self.currentUri = {};
        } else {
          tmp31 = c107;
          if (c107 === first) {
            tmp27 = globalThis;
            _isFinite = isFinite;
            if (isFinite(undefined)) {
              num12 = 0;
              if (undefined >= 0) {
                self.manifest.targetDuration = undefined;
                setHoldBackResult = self.setHoldBack();
              }
            }
            return;
          } else {
            tmp32 = c108;
            if (c108 === first) {
              tmp24 = ct;
              num11 = 0;
              tmp25 = ct(self.manifest, items1);
              if (self.manifest.partInf.partTarget) {
                self.manifest.partTargetDuration = self.manifest.partInf.partTarget;
              }
              setHoldBackResult1 = self.setHoldBack();
            } else {
              tmp33 = c109;
              if (c109 === first) {
                tmp21 = ct;
                num10 = 0;
                tmp22 = ct(self.manifest, items1);
                setHoldBackResult2 = self.setHoldBack();
              } else {
                tmp34 = c110;
                if (c110 === first) {
                  num8 = 0;
                  if (0 === undefined) {
                    num9 = 0.01;
                    self.currentUri.duration = 0.01;
                  } else if (undefined > 0) {
                    self.currentUri.duration = undefined;
                  }
                } else {
                  tmp35 = c111;
                  if (c111 === first) {
                    tmp16 = globalThis;
                    _Date = Date;
                    tmp17 = new.target;
                    tmp18 = new.target;
                    date = new Date(undefined);
                    tmp20 = date;
                    if (!self.manifest.dateTimeString) {
                      self.manifest.dateTimeString = undefined;
                      self.manifest.dateTimeObject = date;
                    }
                    self.currentUri.dateTimeString = undefined;
                    self.currentUri.dateTimeObject = date;
                  } else {
                    tmp36 = c112;
                    if (c112 === first) {
                      tmp14 = ct;
                      num7 = 0;
                      tmp15 = ct(self.manifest, items1);
                    } else {
                      tmp37 = c113;
                      if (c113 === first) {
                        tmp38 = Li;
                        arr5 = items1[1];
                        if (typeof Li === "function") {
                          obj = {};
                          closure_0 = obj;
                          if (arr5) {
                            str4 = ",";
                            searchResult = arr5.search(",");
                            num5 = 0;
                            items2 = [, ];
                            items2[0] = arr5.slice(0, searchResult);
                            num6 = 1;
                            items2[1] = arr5.slice(searchResult + 1);
                            item = items2.forEach((item, index) => {
                              const parts = item.replace(/['"]+/g, "").split("=");
                              for (let num = 0; num < parts.length; num = num + 1) {
                                if ("DATA-ID" === parts[num]) {
                                  obj["DATA-ID"] = parts[1 - num];
                                }
                                if ("VALUE" === parts[num]) {
                                  obj.VALUE = parts[1 - num];
                                }
                              }
                            });
                            obj = { data: null };
                            obj.data = obj;
                            tmp7 = obj;
                          }
                          tmp10 = Me;
                          if (typeof Me === "function") {
                            obj1 = {};
                            tmp11 = tmp7;
                            str5 = "";
                            str6 = "io.litix.data.";
                            for (const key10063 in tmp7) {
                              tmp39 = key10063;
                              tmp40 = tmp7[key10063];
                              prop = tmp40["DATA-ID"];
                              if (-1 === prop.search("io.litix.data.")) {
                                continue;
                              } else {
                                ({ DATA-ID: str7, VALUE: obj3[str7.replace(str7, "io.litix.data.", "")] } = tmp40);
                                continue;
                              }
                              continue;
                            }
                            tmp12 = globalThis;
                            _Object = Object;
                            merged = Object.assign(self.manifest.sessionData, obj1);
                          } else {
                            str13 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          str12 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        return;
      } else {
        tmp30 = _t;
        str10 = items1[1];
        if (typeof _t === "function") {
          str = "yes";
          if ("yes" !== str10.toLowerCase()) {
            str2 = "no";
            if ("no" !== str10.toLowerCase()) {
              parsed = str10;
              if (-1 === str10.indexOf(":")) {
                tmp4 = globalThis;
                _parseFloat = parseFloat;
                parsed = parseFloat(str10);
              }
              tmp5 = globalThis;
              _isNaN = isNaN;
              if (isNaN(parsed)) {
                parsed = str10;
              }
            }
            tmp6 = parsed;
          }
          parsed = "yes" === str10.toLowerCase();
        } else {
          str11 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
    } else {
      str9 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
    return;
  }
  setHoldBack() {
    ({ serverControl, targetDuration, partTargetDuration } = this.manifest);
    if (serverControl) {
      result = targetDuration;
      if (targetDuration) {
        num = 3;
        result = 3 * targetDuration;
      }
      result1 = partTargetDuration;
      if (partTargetDuration) {
        num2 = 2;
        result1 = 2 * partTargetDuration;
      }
      if (targetDuration) {
        str = "holdBack";
        targetDuration = !serverControl.hasOwnProperty("holdBack");
      }
      if (targetDuration) {
        serverControl.holdBack = result;
      }
      tmp3 = result;
      if (result) {
        tmp3 = serverControl.holdBack < result;
      }
      if (tmp3) {
        serverControl.holdBack = result;
      }
      tmp4 = partTargetDuration;
      if (partTargetDuration) {
        str2 = "partHoldBack";
        tmp4 = !serverControl.hasOwnProperty("partHoldBack");
      }
      if (tmp4) {
        num3 = 3;
        serverControl.partHoldBack = 3 * partTargetDuration;
      }
      if (partTargetDuration) {
        partTargetDuration = serverControl.partHoldBack < result1;
      }
      if (partTargetDuration) {
        serverControl.partHoldBack = result1;
      }
    }
    return;
  }
}
function ct(arg0, arg1) {
  if (typeof Jr === "function") {
    const formatted = str2.toLowerCase();
    if (typeof Oi === "function") {
      if (arr.indexOf("=") > -1) {
        if (typeof Pi === "function") {
          const parts = str7.split(",");
          let merged = {};
          let num2 = 0;
          let tmp11 = merged;
          if (parts.length > 0) {
            while (typeof Ai === "function") {
              let obj = {};
              let parts1 = str12.split("=");
              if (parts1.length <= 1) {
                let _Object = Object;
                merged = Object.assign(obj, merged);
                num2 = num2 + 1;
                tmp11 = merged;
              } else {
                let str20 = parts1[0];
                if (typeof Jr === "function") {
                  let formatted1 = str20.toLowerCase();
                  let str13 = parts1[1];
                  if (typeof _t === "function") {
                    if ("yes" !== str13.toLowerCase()) {
                      if ("no" !== str13.toLowerCase()) {
                        let parsed = str13;
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
            }
            throw new TypeError("Trying to call a non-function");
          }
          parsed = tmp9(tmp11, {});
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        str7 = arg1[1];
      } else if (typeof _t === "function") {
        if ("yes" !== str16.toLowerCase()) {
          if ("no" !== str16.toLowerCase()) {
            parsed = str16;
            if (-1 === str16.indexOf(":")) {
              const _parseFloat = parseFloat;
              parsed = parseFloat(str16);
            }
            const _isNaN = isNaN;
            if (isNaN(parsed)) {
              parsed = str16;
            }
          }
        }
        parsed = "yes" === str16.toLowerCase();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      arg0[tmp2] = parsed;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    arr = arg1[1];
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  str2 = arg1[0].replace("#EXT-X-", "");
}
function Jr(arg0) {

}
function _t(arg0) {

}
function Ai(arg0) {

}
function Pi(arg0) {

}
function Oi(arg0) {

}
function Ii(arg0, arg1) {

}
function Li(arg0) {

}
const dependencyMap = {};
function ne(key10009) {
  closure_1 = arguments;
  if (typeof key10009 === "string") {
    if (ne.hasOwnProperty(key10009)) {
      const timerId = GResult.default.setTimeout(() => {
        const call = splice.call;
        if (typeof call === "unknown") {
          spliceResult = splice(1);
        } else {
          spliceResult = call(spliceResult, 1);
        }
        ne[closure_0].apply(null, spliceResult);
      }, 0);
      const _default2 = GResult.default;
    } else {
      logger.warn(`\`${key10009}\` is an unknown task`);
    }
  } else if (typeof key10009 === "function") {
    const timerId1 = GResult.default.setTimeout(() => {
      key10009(ne);
    }, 0);
    const _default = GResult.default;
  } else {
    logger.warn(`\`${key10009}\` is invalid.`);
  }
}
let merged = Object.assign(ne, {
  loaded: obj3.now(),
  NAME: "mux-embed",
  VERSION: "5.13.0",
  API_VERSION: "2.1",
  PLAYER_TRACKED: false,
  monitor(videoElement, arg1) {
    let obj = ne;
    closure_0 = ne;
    let merged = arg1;
    if (typeof se === "function") {
      if (videoElement) {
        if (undefined !== videoElement.nodeName) {
          let tmp6 = J(videoElement);
          let element = videoElement;
        }
        let str2 = "";
        if (element) {
          str2 = "";
          if (element.nodeName) {
            str2 = element.nodeName.toLowerCase();
          }
        }
        items = [element, tmp6, str2];
        let _Array = Array;
        let tmp9;
        if (Array.isArray(items)) {
          tmp9 = items;
        }
        if (!tmp9) {
          tmp9 = (function vt(items, arg1) {
            let tmp6 = null;
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
              tmp6 = prop;
            }
            if (null != tmp6) {
              let flag2 = false;
              try {
                items = [];
                try {
                  const call = tmp9.call;
                  if (typeof call === "unknown") {
                    let iter = tmp9();
                  } else {
                    iter = call(items);
                  }
                  const iter3 = iter.next();
                  const done = iter3.done;
                  let tmp11 = done;
                  if (!done) {
                    items.push(iter4.value);
                    if (!arg1) {
                      const iter5 = iter2.next();
                      const done2 = iter5.done;
                      tmp11 = done2;
                      while (!done2) {
                        let arr = items.push(iter6.value);
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
                    let tmp19 = !tmp11;
                    if (!tmp11) {
                      tmp19 = null != iter2.return;
                    }
                    if (tmp19) {
                      iter2.return();
                    }
                    if (flag2) {
                      throw tmp5;
                    } else {
                      return items;
                    }
                  } catch (tmp25) {
                    if (tmp2) {
                      throw tmp;
                    } else {
                      throw tmp25;
                    }
                  }
                } catch (tmp5) {
                  flag2 = true;
                }
              } catch (tmp28) {
                try {
                  let tmp30 = !tmp3;
                  if (!tmp3) {
                    tmp30 = tmp4 != obj.return;
                  }
                  if (tmp30) {
                    obj.return();
                  }
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp28;
                  }
                } catch (tmp36) {
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp36;
                  }
                }
              }
            }
          })(items, 3);
        }
        if (!tmp9) {
          tmp9 = Pe(items, 3);
        }
        if (tmp9) {
          [defineProperty, tmp15] = tmp9;
          getOwnPropertyDescriptor = tmp15;
          let log = obj.log;
          const getComputedStyle = obj.utils.getComputedStyle;
          const secondsToMs = obj.utils.secondsToMs;
          if (defineProperty) {
            if ("video" !== tmp16) {
              if ("audio" !== tmp16) {
                let errorResult = log.error(`The element of \`${tmp15}\` was not a media element.`);
              }
            }
            if (tmp17.mux) {
              let mux = defineProperty.mux;
              mux.destroy();
              delete tmp2[tmp];
              log.warn("Already monitoring this video element, replacing existing event listeners");
            }
            obj = {
              getPlayheadTime() {
                        return secondsToMs(defineProperty.currentTime);
                      },
              getStateData() {
                        const self = this;
                        const getPlayheadTime = this.getPlayheadTime;
                        let tmp;
                        if (null !== getPlayheadTime) {
                          if (undefined !== getPlayheadTime) {
                            const call = getPlayheadTime.call;
                            typeof call === "unknown" ? getPlayheadTime() : call(self);
                          }
                        }
                        if (!tmp) {
                          tmp = secondsToMs(defineProperty.currentTime);
                        }
                        let currentSrc = self.hlsjs && self.hlsjs.url;
                        let source = self.dashjs && typeof self.dashjs.getSource === "function";
                        if (source) {
                          const dashjs = self.dashjs;
                          source = dashjs.getSource();
                        }
                        const obj = { player_is_paused: defineProperty.paused, player_width: parseInt(getComputedStyle(defineProperty, "width")), player_height: parseInt(getComputedStyle(defineProperty, "height")), player_autoplay_on: defineProperty.autoplay, player_preload_on: defineProperty.preload, player_language_code: defineProperty.lang, player_is_fullscreen: null, video_poster_url: null, video_source_url: null, video_source_duration: null, video_source_height: null, video_source_width: null, view_dropped_frame_count: null };
                        let _default = closure_102.default;
                        if (_default) {
                          _default = tmp6.default.fullscreenElement || tmp6.default.webkitFullscreenElement || tmp6.default.mozFullScreenElement || tmp6.default.msFullscreenElement;
                          const tmp7 = tmp6.default.fullscreenElement || tmp6.default.webkitFullscreenElement || tmp6.default.mozFullScreenElement || tmp6.default.msFullscreenElement;
                        }
                        obj.player_is_fullscreen = _default;
                        obj.video_poster_url = defineProperty.poster;
                        if (!currentSrc) {
                          currentSrc = source;
                        }
                        if (!currentSrc) {
                          currentSrc = defineProperty.currentSrc;
                        }
                        obj.video_source_url = currentSrc;
                        obj.video_source_duration = secondsToMs(defineProperty.duration);
                        obj.video_source_height = defineProperty.videoHeight;
                        obj.video_source_width = defineProperty.videoWidth;
                        if (null != defineProperty) {
                          const getVideoPlaybackQuality = defineProperty.getVideoPlaybackQuality;
                          if (null !== getVideoPlaybackQuality) {
                            if (undefined !== getVideoPlaybackQuality) {
                              const call2 = getVideoPlaybackQuality.call;
                              const droppedVideoFrames = typeof call2 === "unknown" ? getVideoPlaybackQuality() : call2(defineProperty).droppedVideoFrames;
                            }
                          }
                        }
                        obj.view_dropped_frame_count = undefined;
                        if (defineProperty.getStartDate) {
                          if (tmp > 0) {
                            const startDate = defineProperty.getStartDate();
                            if (startDate) {
                              if (typeof startDate.getTime === "function") {
                                if (startDate.getTime()) {
                                  const time = startDate.getTime();
                                  obj.player_program_time = time + tmp;
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
                      }
            };
            let _Object = Object;
            merged = Object.assign({ automaticErrorTracking: true }, arg1, obj);
            let _Object2 = Object;
            obj = { player_software: "HTML5 Video Element", player_mux_plugin_name: "VideoElementMonitor", player_mux_plugin_version: null };
            obj.player_mux_plugin_version = obj.VERSION;
            merged.data = Object.assign(obj, merged.data);
            mux = defineProperty.mux;
            if (!mux) {
              mux = {};
            }
            defineProperty.mux = mux;
            defineProperty.mux.deleted = false;
            defineProperty.mux.emit = (arg0, arg1) => {
              closure_0.emit(closure_3, arg0, arg1);
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
              delete tmp2[tmp];
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
              closure_0.emit(closure_3, "destroy");
            };
            defineProperty.mux.swapElement = (nodeName) => {
              if (typeof se === "function") {
                if (nodeName) {
                  if (undefined !== nodeName.nodeName) {
                    let tmp8 = closure_1_30(nodeName);
                    let element = nodeName;
                  }
                  let str2 = "";
                  if (element) {
                    str2 = "";
                    if (element.nodeName) {
                      str2 = element.nodeName.toLowerCase();
                    }
                  }
                  items = [element, tmp8, str2];
                  const _Array = Array;
                  let tmp11;
                  if (Array.isArray(items)) {
                    tmp11 = items;
                  }
                  if (!tmp11) {
                    tmp11 = (function vt(items, arg1) {
                      let tmp6 = null;
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
                        tmp6 = prop;
                      }
                      if (null != tmp6) {
                        let flag2 = false;
                        try {
                          items = [];
                          try {
                            const call = tmp9.call;
                            if (typeof call === "unknown") {
                              let iter = tmp9();
                            } else {
                              iter = call(items);
                            }
                            const iter3 = iter.next();
                            const done = iter3.done;
                            let tmp11 = done;
                            if (!done) {
                              items.push(iter4.value);
                              if (!arg1) {
                                const iter5 = iter2.next();
                                const done2 = iter5.done;
                                tmp11 = done2;
                                while (!done2) {
                                  let arr = items.push(iter6.value);
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
                              let tmp19 = !tmp11;
                              if (!tmp11) {
                                tmp19 = null != iter2.return;
                              }
                              if (tmp19) {
                                iter2.return();
                              }
                              if (flag2) {
                                throw tmp5;
                              } else {
                                return items;
                              }
                            } catch (tmp25) {
                              if (tmp2) {
                                throw tmp;
                              } else {
                                throw tmp25;
                              }
                            }
                          } catch (tmp5) {
                            flag2 = true;
                          }
                        } catch (tmp28) {
                          try {
                            let tmp30 = !tmp3;
                            if (!tmp3) {
                              tmp30 = tmp4 != obj.return;
                            }
                            if (tmp30) {
                              obj.return();
                            }
                            if (tmp2) {
                              throw tmp;
                            } else {
                              throw tmp28;
                            }
                          } catch (tmp36) {
                            if (tmp2) {
                              throw tmp;
                            } else {
                              throw tmp36;
                            }
                          }
                        }
                      }
                    })(items, 3);
                  }
                  if (!tmp11) {
                    tmp11 = Pe(items, 3);
                  }
                  if (tmp11) {
                    const first = tmp11[0];
                    let text = tmp11[1];
                    if (first) {
                      if ("video" === tmp19) {
                        first.muxId = first.muxId;
                        delete tmp4[tmp3];
                        first.mux = first.mux || {};
                        const _Object = Object;
                        first.mux.listeners = Object.assign({}, first.mux.listeners);
                        const mux = first.mux;
                        delete tmp4[tmp3];
                        const _Object2 = Object;
                        const keys = Object.keys(first.mux.listeners);
                        const item = keys.forEach((item) => {
                          const removed = defineProperty.removeEventListener(item, first.mux.listeners[item], false);
                          const listener = first.addEventListener(item, first.mux.listeners[item], false);
                        });
                        first.mux.swapElement = first.mux.swapElement;
                        first.mux.destroy = first.mux.destroy;
                        delete tmp2[tmp];
                        let errorResult;
                      }
                      const log2 = first.log;
                      text = `The element of \`${tmp18}`;
                      errorResult = log2.error(`${`The element of \`${tmp18}`}\` was not a media element.`);
                    } else {
                      log = first.log;
                      return log.error("No element was found with the `" + `The element of \`${tmp18}` + "` query selector.");
                    }
                  } else {
                    const _TypeError = TypeError;
                    const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    throw typeError;
                  }
                }
                const _document = document;
                element = document.querySelector(nodeName);
                tmp8 = nodeName;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            };
            defineProperty.mux.addHLSJS = (merged) => {
              closure_0.addHLSJS(closure_3, merged);
            };
            defineProperty.mux.addDashJS = (merged) => {
              closure_0.addDashJS(closure_3, merged);
            };
            defineProperty.mux.removeHLSJS = () => {
              closure_0.removeHLSJS(closure_3);
            };
            defineProperty.mux.removeDashJS = () => {
              closure_0.removeDashJS(closure_3);
            };
            defineProperty.mux.setEmitTranslator = (emitTranslator) => {
              closure_0.setEmitTranslator(closure_3, emitTranslator);
            };
            defineProperty.mux.setStateDataTranslator = (stateDataTranslator) => {
              const result = closure_0.setStateDataTranslator(closure_3, stateDataTranslator);
            };
            defineProperty.mux.setGetPlayheadTime = (getPlayheadTime) => {
              if (!getPlayheadTime) {
                getPlayheadTime = merged.getPlayheadTime;
              }
              closure_0.setGetPlayheadTime(closure_3, getPlayheadTime);
            };
            obj.init(tmp15, merged);
            obj.emit(tmp15, "playerready");
            if (!defineProperty.paused) {
              obj.emit(tmp15, "play");
              if (defineProperty.readyState > 2) {
                obj.emit(tmp15, "playing");
              }
            }
            defineProperty.mux.listeners = {};
            let item = closure_103.forEach((item) => {
              let tmp = "error" === item;
              if (tmp) {
                tmp = !merged.automaticErrorTracking;
              }
              if (!tmp) {
                closure_2.mux.listeners[item] = () => {
                  const obj = {};
                  if ("error" === item) {
                    if (defineProperty.error) {
                      if (1 !== defineProperty.error.code) {
                        obj.player_error_code = defineProperty.error.code;
                        let message = closure_104[defineProperty.error.code];
                        if (!message) {
                          message = defineProperty.error.message;
                        }
                        obj.player_error_message = message;
                      }
                    }
                  }
                  item.emit(closure_3, item, obj);
                };
                const listener = closure_2.addEventListener(item, closure_2.mux.listeners[item], false);
              }
            });
          } else {
            errorResult = log.error(`No element was found with the \`${tmp15}\` query selector.`);
          }
          return errorResult;
        } else {
          let _TypeError = TypeError;
          let typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          throw typeError;
        }
      }
      let _document = document;
      element = document.querySelector(videoElement);
      tmp6 = videoElement;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  destroyMonitor(videoElement) {
    if (typeof se === "function") {
      if (videoElement) {
        if (undefined !== videoElement.nodeName) {
          let tmp4 = J(videoElement);
          let element = videoElement;
        }
        let str2 = "";
        if (element) {
          str2 = "";
          if (element.nodeName) {
            str2 = element.nodeName.toLowerCase();
          }
        }
        items = [element, tmp4, str2];
        const _Array = Array;
        let tmp7;
        if (Array.isArray(items)) {
          tmp7 = items;
        }
        if (!tmp7) {
          tmp7 = (function vt(items, arg1) {
            let tmp6 = null;
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
              tmp6 = prop;
            }
            if (null != tmp6) {
              let flag2 = false;
              try {
                items = [];
                try {
                  const call = tmp9.call;
                  if (typeof call === "unknown") {
                    let iter = tmp9();
                  } else {
                    iter = call(items);
                  }
                  const iter3 = iter.next();
                  const done = iter3.done;
                  let tmp11 = done;
                  if (!done) {
                    items.push(iter4.value);
                    if (!arg1) {
                      const iter5 = iter2.next();
                      const done2 = iter5.done;
                      tmp11 = done2;
                      while (!done2) {
                        let arr = items.push(iter6.value);
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
                    let tmp19 = !tmp11;
                    if (!tmp11) {
                      tmp19 = null != iter2.return;
                    }
                    if (tmp19) {
                      iter2.return();
                    }
                    if (flag2) {
                      throw tmp5;
                    } else {
                      return items;
                    }
                  } catch (tmp25) {
                    if (tmp2) {
                      throw tmp;
                    } else {
                      throw tmp25;
                    }
                  }
                } catch (tmp5) {
                  flag2 = true;
                }
              } catch (tmp28) {
                try {
                  let tmp30 = !tmp3;
                  if (!tmp3) {
                    tmp30 = tmp4 != obj.return;
                  }
                  if (tmp30) {
                    obj.return();
                  }
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp28;
                  }
                } catch (tmp36) {
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp36;
                  }
                }
              }
            }
          })(items, 1);
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
          const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
  addHLSJS(merged, merged) {
    const tmp = J(merged);
    if (dependencyMap[tmp]) {
      tmp2[tmp].addHLSJS(merged);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  addDashJS(merged, merged) {
    const tmp = J(merged);
    if (dependencyMap[tmp]) {
      tmp2[tmp].addDashJS(merged);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  removeHLSJS(arg0) {
    const tmp = J(arg0);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].removeHLSJS();
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  removeDashJS(arg0) {
    const tmp = J(arg0);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].removeDashJS();
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  init(arg0, respectDoNotTrack) {
    let doNotTrack = closure_39.default.doNotTrack;
    if (!doNotTrack) {
      doNotTrack = tmp.default.navigator && tmp.default.navigator.doNotTrack;
      const tmp2 = tmp.default.navigator && tmp.default.navigator.doNotTrack;
    }
    if (tmp3) {
      logger.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
    }
    const tmp6 = J(arg0);
    closure_122[tmp6] = t(ne, tmp6, respectDoNotTrack);
  },
  emit(arg0, arg1, arg2) {
    const tmp3 = J(arg0);
    if (dependencyMap[tmp3]) {
      tmp4[tmp3].emit(arg1, arg2);
      if ("destroy" === arg1) {
        delete tmp[tmp2];
      }
    } else {
      logger.error(`A monitor for \`${tmp3}\` has not been initialized.`);
    }
  },
  updateData(arg0, arg1) {
    const tmp = J(arg0);
    if (dependencyMap[tmp]) {
      tmp2[tmp].emit("hb", arg1);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setEmitTranslator(arg0, emitTranslator) {
    const tmp = J(arg0);
    if (dependencyMap[tmp]) {
      tmp2[tmp].emitTranslator = emitTranslator;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setStateDataTranslator(arg0, stateDataTranslator) {
    const tmp = J(arg0);
    if (dependencyMap[tmp]) {
      tmp2[tmp].stateDataTranslator = stateDataTranslator;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setGetPlayheadTime(arg0, getPlayheadTime) {
    const tmp = J(arg0);
    if (dependencyMap[tmp]) {
      tmp2[tmp].getPlayheadTime = getPlayheadTime;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  checkDoNotTrack: function ce() {
    let doNotTrack = closure_39.default.doNotTrack;
    if (!doNotTrack) {
      doNotTrack = tmp.default.navigator && tmp.default.navigator.doNotTrack;
      const tmp2 = tmp.default.navigator && tmp.default.navigator.doNotTrack;
    }
    return "1" === doNotTrack;
  },
  log: tmp11,
  utils: {
    safeCall: function ut(arg0, arg1, arg2, arg3) {
      let applyResult = arg3;
      if (arg0) {
        if (typeof arg0[arg1] === "function") {
          try {
            applyResult = arg0[arg1].apply(arg0, arg2);
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
            if (typeof tmp2.default.getComputedStyle === "function") {
              let hasItem = weakMap;
              if (weakMap) {
                hasItem = obj.has(arg0);
              }
              value = undefined;
              if (hasItem) {
                value = obj.get(arg0);
              }
              if (!value) {
                const computedStyle = tmp2.default.getComputedStyle(arg0, null);
                value = computedStyle;
                if (obj) {
                  const result = obj.set(arg0, computedStyle);
                  value = computedStyle;
                }
                const _default = tmp2.default;
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
      const parts = str.trim().split(/[\r\n]+/);
      const item = parts.forEach((item) => {
        if (item) {
          const parts = item.split(": ");
          const str2 = parts.shift();
          let tmp = str2;
          if (str2) {
            let tmp3 = closure_2_50.indexOf(str2.toLowerCase()) >= 0;
            if (!tmp3) {
              const formatted = str2.toLowerCase();
              tmp3 = 0 === formatted.indexOf("x-litix-");
            }
            tmp = tmp3;
          }
          if (tmp) {
            obj[str2] = parts.join(": ");
          }
        }
      });
      return obj;
    },
    cdnHeadersToRequestId: function de(arg0) {
      closure_0 = arg0;
      if (arg0) {
        const found = items.find((item) => undefined !== obj[item]);
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
    now: obj3.now,
    findMediaElement: se
  },
  events: { PLAYER_READY: "playerready", VIEW_INIT: "viewinit", VIDEO_CHANGE: "videochange", PLAY: "play", PAUSE: "pause", PLAYING: "playing", TIME_UPDATE: "timeupdate", SEEKING: "seeking", SEEKED: "seeked", REBUFFER_START: "rebufferstart", REBUFFER_END: "rebufferend", ERROR: "error", ENDED: "ended", RENDITION_CHANGE: "renditionchange", ORIENTATION_CHANGE: "orientationchange", PLAYBACK_MODE_CHANGE: "playbackmodechange", AD_REQUEST: "adrequest", AD_RESPONSE: "adresponse", AD_BREAK_START: "adbreakstart", AD_PLAY: "adplay", AD_PLAYING: "adplaying", AD_PAUSE: "adpause", AD_FIRST_QUARTILE: "adfirstquartile", AD_MID_POINT: "admidpoint", AD_THIRD_QUARTILE: "adthirdquartile", AD_ENDED: "adended", AD_BREAK_END: "adbreakend", AD_ERROR: "aderror", REQUEST_COMPLETED: "requestcompleted", REQUEST_FAILED: "requestfailed", REQUEST_CANCELLED: "requestcanceled", HEARTBEAT: "hb", DESTROY: "destroy" },
  WINDOW_HIDDEN: false,
  WINDOW_UNLOADING: false
});
if (tmp34) {
  let listener = GResult.default.addEventListener("pagehide", (event) => {
    if (!event.persisted) {
      ne.WINDOW_UNLOADING = true;
    }
  }, false);
  let _default = GResult.default;
}

export default definePropertyResult1;