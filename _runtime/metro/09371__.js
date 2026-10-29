// _runtime/metro/09371__.js
import ElementType from "../09380_ElementType.js";

const require = globalThis.__r;

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    let fn2 = self;
    if (self) {
      fn2 = self.__importDefault;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
        if (!__esModule) {
          const obj = { default: __esModule };
          let tmp = obj;
        } else {
          tmp = __esModule;
        }
        return tmp;
      };
    }
    const _Object3 = Object;
    function parseDocument(arg0, fn) {
      const domHandler = new require("cloneNode").DomHandler(undefined, fn);
      const parser = new require("QuoteType").Parser(domHandler, fn);
      parser.end(arg0);
      return domHandler.root;
    }
    function parseDOM(arg0, fn) {
      const domHandler = new require("cloneNode").DomHandler(undefined, fn);
      const parser = new require("QuoteType").Parser(domHandler, fn);
      parser.end(arg0);
      return domHandler.root.children;
    }
    exports.Parser = undefined;
    exports.DomHandler = undefined;
    exports.DefaultHandler = undefined;
    exports.parseDocument = undefined;
    exports.parseDOM = undefined;
    exports.createDomStream = undefined;
    exports.Tokenizer = undefined;
    exports.ElementType = undefined;
    exports.getFeed = undefined;
    exports.parseFeed = undefined;
    exports.DomUtils = undefined;
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
        return require("QuoteType").Parser;
      },
    };
    Object.defineProperty(exports, "Parser", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
        return require("cloneNode").DomHandler;
      },
    };
    Object.defineProperty(exports, "DomHandler", obj2);
    const _Object6 = Object;
    const obj3 = {
      enumerable: true,
      get() {
        return require("cloneNode").DomHandler;
      },
    };
    Object.defineProperty(exports, "DefaultHandler", obj3);
    exports.parseDocument = parseDocument;
    exports.parseDOM = parseDOM;
    exports.createDomStream = function createDomStream(arg0, fn, arg2) {
      const parser = new require("QuoteType").Parser(new require("cloneNode").DomHandler(arg0, fn, arg2), fn);
      return parser;
    };
    const _Object7 = Object;
    const obj4 = {
      enumerable: true,
      get() {
        return fn2(require("09373__.js")).default;
      },
    };
    Object.defineProperty(exports, "Tokenizer", obj4);
    exports.ElementType = fn(ElementType);
    const _Object8 = Object;
    const obj5 = {
      enumerable: true,
      get() {
        return require("09381__.js").getFeed;
      },
    };
    Object.defineProperty(exports, "getFeed", obj5);
    let closure_5 = { xmlMode: true };
    exports.parseFeed = function parseFeed(arg0, fn) {
      let tmp = fn;
      if (undefined === fn) {
        tmp = closure_5;
      }
      const domHandler = new require("cloneNode").DomHandler(undefined, tmp);
      const parser = new require("QuoteType").Parser(domHandler, tmp);
      parser.end(arg0);
      return require("09381__.js").getFeed(domHandler.root.children);
    };
    exports.DomUtils = fn(require("09381__.js"));
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
