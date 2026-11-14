// _runtime/metro/12520__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let LinkifyIt = require;
let fn = function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      fn = (arg0) => typeof arg0;
    }
    return fn(arg0);
  }
  fn = (arg0) => {
    if (arg0) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          let str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
};
function _defineProperty(arg0, arg1, value) {
  let StringResult = arg1;
  if ("object" == fn(arg1)) {
    StringResult = arg1;
    if (arg1) {
      const _Symbol = Symbol;
      if (undefined !== arg1[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(arg1, "string");
        }
        StringResult = callResult;
        if ("object" == fn(callResult)) {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(arg1);
      }
    }
  }
  let text = StringResult;
  if ("symbol" != fn(StringResult)) {
    text = `${tmp}`;
  }
  if (text in arg0) {
    const _Object = Object;
    const obj = { value, enumerable: true, configurable: true, writable: true };
    Object.defineProperty(arg0, text, obj);
  } else {
    arg0[text] = value;
  }
  return arg0;
}
function _objectSpread2(arg0) {
  closure_0 = arg0;
  for (let num = 1; num < arguments.length; num = num + 1) {
    let tmp2 = null != arguments[num] ? arguments[num] : {};
    closure_1 = tmp2;
    let _Object = Object;
    if (num % 2) {
      let _ObjectResult = _Object(tmp2);
      closure_0 = _ObjectResult;
      let _Object7 = Object;
      let keys = Object.keys(_ObjectResult);
      let _Object8 = Object;
      if (Object.getOwnPropertySymbols) {
        let _Object9 = Object;
        let ownPropertySymbols = Object.getOwnPropertySymbols(_ObjectResult);
        let push2 = keys.push;
        let applyResult = push2.apply(
          keys,
          ownPropertySymbols.filter((item) => Object.getOwnPropertyDescriptor(closure_0, item).enumerable),
        );
      }
      let item = keys.forEach((item) => {
        _defineProperty(closure_0, item, closure_1[item]);
      });
    } else {
      let _Object2 = Object;
      if (_Object.getOwnPropertyDescriptors) {
        let _Object6 = Object;
        let definePropertiesResult = _Object2.defineProperties(arg0, Object.getOwnPropertyDescriptors(tmp2));
      } else {
        let _Object2Result = _Object2(tmp2);
        closure_0 = _Object2Result;
        let _Object3 = Object;
        let keys1 = Object.keys(_Object2Result);
        let _Object4 = Object;
        if (Object.getOwnPropertySymbols) {
          let _Object5 = Object;
          let push = keys1.push;
          let applyResult1 = push.apply(keys1, Object.getOwnPropertySymbols(_Object2Result));
        }
        let item1 = keys1.forEach((item) => {
          Object.defineProperty(closure_0, item, Object.getOwnPropertyDescriptor(closure_1, item));
        });
      }
    }
  }
  return arg0;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class REBuilder {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    tmp = c2(this, LinkifyIt);
    tmp2 = closure_4(this, "src_Any", closure_0(closure_1[2]).Any.source);
    tmp3 = closure_4(this, "src_Cc", closure_0(closure_1[2]).Cc.source);
    tmp4 = closure_4(this, "src_Z", closure_0(closure_1[2]).Z.source);
    tmp5 = closure_4(this, "src_P", closure_0(closure_1[2]).P.source);
    items = [, ,];
    ({ src_Z: arr[0], src_P: arr[1], src_Cc: arr[2] } = this);
    tmp6 = closure_4(this, "src_ZPCc", items.join("|"));
    items1 = [,];
    ({ src_Z: arr2[0], src_Cc: arr2[1] } = this);
    tmp7 = closure_4(this, "src_ZCc", items1.join("|"));
    tmp8 = closure_4(this, "cache", {});
    tmp9 = closure_4(this, "opts", { maxLength: 10000, urlAuth: false, schema_names: [] });
    obj1 = {};
    tmp10 = hasOwnProperty(obj1, this.opts);
    tmp11 = hasOwnProperty(obj1, obj);
    this.opts = obj1;
    return;
  }
}
LinkifyIt = REBuilder;
const entry = {
  key: "set",
  value: function set() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    obj2 = {};
    _objectSpread2(obj2, this.opts);
    _objectSpread2(obj2, obj);
    this.opts = obj2;
    this.cache = {};
    return this;
  },
};
let items = [
  entry,
  {
    key: "escapeRE",
    value: function escapeRE(str) {
      return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    },
  },
  {
    key: "nestedPairRE",
    value: function nestedPairRE(arg0, arg1) {
      let num = arg2;
      if (arg2 === undefined) {
        num = 4;
      }
      const escapeREResult = this.escapeRE(arg0);
      const escapeREResult1 = this.escapeRE(arg1);
      const combined = "(?:(?!" + this.src_ZCc + "|" + escapeREResult + "|" + escapeREResult1 + ").)";
      let combined1 = "" + escapeREResult + combined + "{0,1000}" + escapeREResult1;
      let num2 = 2;
      let tmp5 = combined1;
      if (2 <= num) {
        do {
          let _HermesInternal = HermesInternal;
          let str = "";
          let str2 = "(?:";
          let str3 = "|";
          let str4 = "){0,1000}";
          combined1 = "" + escapeREResult + "(?:" + combined + "|" + combined1 + "){0,1000}" + escapeREResult1;
          num2 = num2 + 1;
          tmp5 = combined1;
        } while (num2 <= num);
      }
      return tmp5;
    },
  },
  {
    key: "get_text_separators",
    value: function get_text_separators() {
      const cache = this.cache;
      let text_separators = cache.text_separators;
      if (null === text_separators) {
        const tmp = /[><\uff5c]/;
        cache.text_separators = tmp;
        text_separators = tmp;
      }
      return text_separators;
    },
  },
  {
    key: "get_pseudo_letter",
    value: function get_pseudo_letter() {
      const self = this;
      const cache = this.cache;
      let src_pseudo_letter = cache.src_pseudo_letter;
      if (null === src_pseudo_letter) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp(
          "(?:(?!" + self.get_text_separators().source + "|" + self.src_ZPCc + ")" + self.src_Any + ")",
        );
        cache.src_pseudo_letter = regExp;
        src_pseudo_letter = regExp;
      }
      return src_pseudo_letter;
    },
  },
  {
    key: "get_ipv4_addr",
    value: function get_ipv4_addr() {
      const cache = this.cache;
      let src_ip4 = cache.src_ip4;
      if (null === src_ip4) {
        const _RegExp = RegExp;
        const regExp = new RegExp(
          "(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])[.]){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])",
        );
        cache.src_ip4 = regExp;
        src_ip4 = regExp;
      }
      return src_ip4;
    },
  },
  {
    key: "get_ipv6_addr",
    value: function get_ipv6_addr() {
      const combined =
        "(?:(?:" + "[0-9A-Fa-f]{1,4}" + ":" + "[0-9A-Fa-f]{1,4}" + ")|" + this.get_ipv4_addr().source + ")";
      const cache = this.cache;
      let src_ip6_addr = cache.src_ip6_addr;
      if (null === src_ip6_addr) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp(
          "(?:(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){6}" +
            combined +
            "|::(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){5}" +
            combined +
            "|(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ")?::(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){4}" +
            combined +
            "|(?:(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){0,1}" +
            "[0-9A-Fa-f]{1,4}" +
            ")?::(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){3}" +
            combined +
            "|(?:(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){0,2}" +
            "[0-9A-Fa-f]{1,4}" +
            ")?::(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){2}" +
            combined +
            "|(?:(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){0,3}" +
            "[0-9A-Fa-f]{1,4}" +
            ")?::" +
            "[0-9A-Fa-f]{1,4}" +
            ":" +
            combined +
            "|(?:(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){0,4}" +
            "[0-9A-Fa-f]{1,4}" +
            ")?::" +
            combined +
            "|(?:(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){0,5}" +
            "[0-9A-Fa-f]{1,4}" +
            ")?::" +
            "[0-9A-Fa-f]{1,4}" +
            "|(?:(?:" +
            "[0-9A-Fa-f]{1,4}" +
            ":){0,6}" +
            "[0-9A-Fa-f]{1,4}" +
            ")?::)",
        );
        cache.src_ip6_addr = regExp;
        src_ip6_addr = regExp;
      }
      return src_ip6_addr;
    },
  },
  {
    key: "get_ipv6_url_host",
    value: function get_ipv6_url_host() {
      const self = this;
      const cache = this.cache;
      let src_ip6_host = cache.src_ip6_host;
      if (null === src_ip6_host) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("\\[" + self.get_ipv6_addr().source + "\\]");
        cache.src_ip6_host = regExp;
        src_ip6_host = regExp;
      }
      return src_ip6_host;
    },
  },
  {
    key: "get_ipv6_mail_host",
    value: function get_ipv6_mail_host() {
      const self = this;
      const cache = this.cache;
      let src_ipv6_mail_host = cache.src_ipv6_mail_host;
      if (null === src_ipv6_mail_host) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("\\[IPv6:" + self.get_ipv6_addr().source + "\\]");
        cache.src_ipv6_mail_host = regExp;
        src_ipv6_mail_host = regExp;
      }
      return src_ipv6_mail_host;
    },
  },
  {
    key: "get_auth",
    value: function get_auth() {
      const cache = this.cache;
      let src_auth = cache.src_auth;
      if (null === src_auth) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("(?:(?:(?!" + tmp.src_ZCc + "|[@/\\[\\]()]).){1,50}@)?");
        cache.src_auth = regExp;
        src_auth = regExp;
      }
      return src_auth;
    },
  },
  {
    key: "get_port",
    value: function get_port() {
      const cache = this.cache;
      let src_port = cache.src_port;
      if (null === src_port) {
        const _RegExp = RegExp;
        const regExp = new RegExp("(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?");
        cache.src_port = regExp;
        src_port = regExp;
      }
      return src_port;
    },
  },
  {
    key: "get_host_terminator",
    value: function get_host_terminator() {
      const self = this;
      const cache = this.cache;
      let src_host_terminator = cache.src_host_terminator;
      if (null === src_host_terminator) {
        const source = self.get_text_separators().source;
        const src_ZPCc = self.src_ZPCc;
        let str = "-|";
        if (self.opts["---"]) {
          str = "-(?!--)|";
        }
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp(
          "(?=$|" + source + "|" + src_ZPCc + ")(?!" + str + "_|:\\d|\\.-|\\.(?!$|" + self.src_ZPCc + "))",
        );
        cache.src_host_terminator = regExp;
        src_host_terminator = regExp;
      }
      return src_host_terminator;
    },
  },
  {
    key: "get_path_terminator",
    value: function get_path_terminator() {
      const self = this;
      const cache = this.cache;
      let src_path_terminator = cache.src_path_terminator;
      if (null === src_path_terminator) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("" + self.src_ZPCc + "|" + self.get_text_separators().source);
        cache.src_path_terminator = regExp;
        src_path_terminator = regExp;
      }
      return src_path_terminator;
    },
  },
  {
    key: "get_path",
    value: function get_path() {
      const self = this;
      const cache = this.cache;
      let src_path = cache.src_path;
      if (null === src_path) {
        const nestedPairREResult = self.nestedPairRE("[", "]");
        const nestedPairREResult1 = self.nestedPairRE("(", ")");
        ({ src_ZCc, src_ZCc: src_ZCc2 } = self);
        const _HermesInternal = HermesInternal;
        let str16 = "\\-{1,20}|";
        const combined =
          "(?:[/?#](?:" +
          nestedPairREResult +
          "|" +
          nestedPairREResult1 +
          "|" +
          self.nestedPairRE("{", "}") +
          '|\\"(?:(?!' +
          src_ZCc +
          '|["]).){1,100}\\"|\\\'(?:(?!' +
          src_ZCc2 +
          "|[']).){1,100}\\'|\\'(?=" +
          self.get_pseudo_letter().source +
          "|[-])|\\.{2,20}[:]?[a-zA-Z0-9%/&]|\\.(?!" +
          self.src_ZCc +
          "|[.]|$)|";
        if (self.opts["---"]) {
          str16 = "\\-(?!--(?:[^-]|$))(?:-{0,19})|";
        }
        const _HermesInternal2 = HermesInternal;
        const sum = combined + str16;
        const sum1 =
          sum +
          ",(?!" +
          self.src_ZCc +
          "|$)|;(?!" +
          self.src_ZCc +
          "|$)|\\!{1,20}(?!" +
          self.src_ZCc +
          "|[!]|$)|\\?(?!" +
          self.src_ZCc +
          "|[?]|$)|";
        const sum2 = sum1 + self.get_path_extra().source;
        const _HermesInternal3 = HermesInternal;
        const regExp = new RegExp(
          sum2 +
            "[\\\\/:%@#&=_~*]|(?!" +
            self.get_path_terminator().source +
            ").){1," +
            self.opts.maxLength +
            "}|\\/)?",
        );
        cache.src_path = regExp;
        src_path = regExp;
        const nestedPairREResult2 = self.nestedPairRE("{", "}");
      }
      return src_path;
    },
  },
  {
    key: "get_mail_name",
    value: function get_mail_name() {
      const cache = this.cache;
      let src_mail_name = cache.src_mail_name;
      if (null === src_mail_name) {
        const _RegExp = RegExp;
        const regExp = new RegExp(
          "[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9](?:[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9]|[.](?=[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9])){0,63}",
        );
        cache.src_mail_name = regExp;
        src_mail_name = regExp;
      }
      return src_mail_name;
    },
  },
  {
    key: "get_xn",
    value: function get_xn() {
      const cache = this.cache;
      let src_xn = cache.src_xn;
      if (null === src_xn) {
        const _RegExp = RegExp;
        const regExp = new RegExp("xn--[a-z0-9\\-]{1,59}");
        cache.src_xn = regExp;
        src_xn = regExp;
      }
      return src_xn;
    },
  },
  {
    key: "get_tld",
    value: function get_tld() {
      const self = this;
      if (this.cache.tld) {
        return self.cache.tld;
      } else {
        let tlds = self.opts.tlds;
        if (!tlds) {
          tlds = [];
        }
        const set = new Set(tlds);
        items = [];
        HermesBuiltin.arraySpread(set, 0);
        const sorted = items.sort();
        const reversed = sorted.reverse();
        let str2 = reversed.join("|");
        if (!str2) {
          str2 = "$#none#$";
        }
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("" + str2 + "|" + self.get_xn().source);
        self.cache.tld = regExp;
        return self.cache.tld;
      }
    },
  },
  {
    key: "get_domain_root",
    value: function get_domain_root() {
      const self = this;
      const cache = this.cache;
      let src_domain_root = cache.src_domain_root;
      if (null === src_domain_root) {
        const _RegExp = RegExp;
        const text = `(?:${self.get_xn().source}`;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp(`(?:${self.get_xn().source}` + "|" + self.get_pseudo_letter().source + "{1,63})");
        cache.src_domain_root = regExp;
        src_domain_root = regExp;
      }
      return src_domain_root;
    },
  },
  {
    key: "get_domain",
    value: function get_domain() {
      const self = this;
      const cache = this.cache;
      let src_domain = cache.src_domain;
      if (null === src_domain) {
        const _RegExp = RegExp;
        const text = `(?:${self.get_xn().source}`;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp(
          `(?:${self.get_xn().source}` +
            "|(?:" +
            self.get_pseudo_letter().source +
            ")|(?:" +
            self.get_pseudo_letter().source +
            "(?:-|" +
            self.get_pseudo_letter().source +
            "){0,61}" +
            self.get_pseudo_letter().source +
            "))",
        );
        cache.src_domain = regExp;
        src_domain = regExp;
      }
      return src_domain;
    },
  },
  {
    key: "get_url_host_port",
    value: function get_url_host_port() {
      const self = this;
      const cache = this.cache;
      let url_host_port = cache.url_host_port;
      if (null === url_host_port) {
        const _RegExp = RegExp;
        const text = `(?:${self.get_ipv6_url_host().source}`;
        const source = self.get_domain().source;
        const _HermesInternal = HermesInternal;
        const text1 = `(?:${self.get_ipv6_url_host().source}${"|(?:(?:(?:" + source + ")\\.){0,10}" + self.get_domain().source + "))"}`;
        const text2 = `(?:${self.get_ipv6_url_host().source}${"|(?:(?:(?:" + source + ")\\.){0,10}" + self.get_domain().source + "))"}${self.get_port().source}`;
        const regExp = new RegExp(
          `(?:${self.get_ipv6_url_host().source}${"|(?:(?:(?:" + source + ")\\.){0,10}" + self.get_domain().source + "))"}${self.get_port().source}` +
            self.get_host_terminator().source,
        );
        cache.url_host_port = regExp;
        url_host_port = regExp;
      }
      return url_host_port;
    },
  },
  {
    key: "get_fuzzy_url_host_port",
    value: function get_fuzzy_url_host_port() {
      const self = this;
      const cache = this.cache;
      let fuzzy_url_host_port = cache.fuzzy_url_host_port;
      if (null === fuzzy_url_host_port) {
        let str = "";
        if (self.opts.fuzzyIP) {
          str = `${self.get_ipv4_addr().source}|`;
        }
        const _HermesInternal = HermesInternal;
        const text = `(?:${str}${"(?:(?:(?:" + tmp2 + ")\\.){1,10}(?:" + self.get_tld().source + ")))"}`;
        const regExp = new RegExp(text + self.get_host_terminator().source);
        cache.fuzzy_url_host_port = regExp;
        fuzzy_url_host_port = regExp;
      }
      return fuzzy_url_host_port;
    },
  },
  {
    key: "get_mail_host",
    value: function get_mail_host() {
      const self = this;
      const cache = this.cache;
      let src_mail_host = cache.src_mail_host;
      if (null === src_mail_host) {
        const _RegExp = RegExp;
        const text = `(?:${self.get_ipv6_mail_host().source}`;
        const source = self.get_domain().source;
        const _HermesInternal = HermesInternal;
        const text1 = `(?:${self.get_ipv6_mail_host().source}${"|(?:(?:(?:" + source + ")\\.){0,4}" + self.get_domain().source + "))"}`;
        const regExp = new RegExp(
          `(?:${self.get_ipv6_mail_host().source}${"|(?:(?:(?:" + source + ")\\.){0,4}" + self.get_domain().source + "))"}` +
            self.get_host_terminator().source,
        );
        cache.src_mail_host = regExp;
        src_mail_host = regExp;
      }
      return src_mail_host;
    },
  },
  {
    key: "get_fuzzy_mail_host",
    value: function get_fuzzy_mail_host() {
      const self = this;
      const cache = this.cache;
      let src_fuzzy_mail_host = cache.src_fuzzy_mail_host;
      if (null === src_fuzzy_mail_host) {
        const _RegExp = RegExp;
        const text = `(?:${self.get_ipv6_mail_host().source}`;
        const source = self.get_domain().source;
        const _HermesInternal = HermesInternal;
        const text1 = `(?:${self.get_ipv6_mail_host().source}${"|(?:(?:(?:" + source + ")[.]){1,4}" + self.get_domain_root().source + "))"}`;
        const regExp = new RegExp(
          `(?:${self.get_ipv6_mail_host().source}${"|(?:(?:(?:" + source + ")[.]){1,4}" + self.get_domain_root().source + "))"}` +
            self.get_host_terminator().source,
        );
        cache.src_fuzzy_mail_host = regExp;
        src_fuzzy_mail_host = regExp;
      }
      return src_fuzzy_mail_host;
    },
  },
  {
    key: "get_path_extra",
    value: function get_path_extra() {
      const cache = this.cache;
      let src_path_extra = cache.src_path_extra;
      if (null === src_path_extra) {
        const _RegExp = RegExp;
        const regExp = new RegExp("");
        cache.src_path_extra = regExp;
        src_path_extra = regExp;
      }
      return src_path_extra;
    },
  },
  {
    key: "get_fuzzy_mail_host_search",
    value: function get_fuzzy_mail_host_search() {
      const self = this;
      const cache = this.cache;
      let mail_fuzzy_host_search = cache.mail_fuzzy_host_search;
      if (null === mail_fuzzy_host_search) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("@" + self.get_fuzzy_mail_host().source, "ig");
        cache.mail_fuzzy_host_search = regExp;
        mail_fuzzy_host_search = regExp;
      }
      return mail_fuzzy_host_search;
    },
  },
  {
    key: "get_fuzzy_link_search",
    value: function get_fuzzy_link_search() {
      const self = this;
      const cache = this.cache;
      let link_fuzzy_search = cache.link_fuzzy_search;
      if (null === link_fuzzy_search) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp(
          "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" +
            self.src_ZPCc +
            "))(?:(?![$+<=>^`|\uFF5C])" +
            self.get_fuzzy_url_host_port().source +
            self.get_path().source +
            ")",
          "ig",
        );
        cache.link_fuzzy_search = regExp;
        link_fuzzy_search = regExp;
      }
      return link_fuzzy_search;
    },
  },
  {
    key: "get_http_validator",
    value: function get_http_validator() {
      const self = this;
      const cache = this.cache;
      let http_validator = cache.http_validator;
      if (null === http_validator) {
        let str = "";
        if (self.opts.urlAuth) {
          str = self.get_auth().source;
        }
        const text = `\\/\\/${str}`;
        const text1 = `\\/\\/${str}${self.get_url_host_port().source}`;
        const regExp = new RegExp(`\\/\\/${str}${self.get_url_host_port().source}` + self.get_path().source, "iy");
        cache.http_validator = regExp;
        http_validator = regExp;
      }
      return http_validator;
    },
  },
  {
    key: "get_relative_proto_validator",
    value: function get_relative_proto_validator() {
      const self = this;
      const cache = this.cache;
      let relative_proto_validator = cache.relative_proto_validator;
      if (null === relative_proto_validator) {
        let str = "";
        if (self.opts.urlAuth) {
          str = self.get_auth().source;
        }
        const _HermesInternal = HermesInternal;
        const sum =
          str +
          "(?:localhost|" +
          self.get_ipv6_url_host().source +
          "|(?:(?:" +
          self.get_domain().source +
          ")[.]){1,10}" +
          self.get_domain_root().source +
          ")";
        const sum1 = sum + self.get_port().source;
        const sum2 = sum1 + self.get_host_terminator().source;
        const regExp = new RegExp(sum2 + self.get_path().source, "iy");
        cache.relative_proto_validator = regExp;
        relative_proto_validator = regExp;
      }
      return relative_proto_validator;
    },
  },
  {
    key: "get_mail_name_validator",
    value: function get_mail_name_validator() {
      const self = this;
      const cache = this.cache;
      let mail_name_validator = cache.mail_name_validator;
      if (null === mail_name_validator) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp(
          "(?:^|" +
            self.get_text_separators().source +
            '|"|\\(|' +
            self.src_ZCc +
            ")(" +
            self.get_mail_name().source +
            ")$",
        );
        cache.mail_name_validator = regExp;
        mail_name_validator = regExp;
      }
      return mail_name_validator;
    },
  },
  {
    key: "get_mailto_validator",
    value: function get_mailto_validator() {
      const self = this;
      const cache = this.cache;
      let mailto_validator = cache.mailto_validator;
      if (null === mailto_validator) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("" + self.get_mail_name().source + "@" + self.get_mail_host().source, "iy");
        cache.mailto_validator = regExp;
        mailto_validator = regExp;
      }
      return mailto_validator;
    },
  },
  {
    key: "get_schema_names",
    value: function get_schema_names() {
      const self = this;
      const cache = this.cache;
      let schema_names = cache.schema_names;
      if (null === schema_names) {
        let schema_names1 = tmp.opts.schema_names;
        if (!schema_names1) {
          schema_names1 = [];
        }
        const mapped = schema_names1.map((item) => self.escapeRE(item));
        const regExp = new RegExp(mapped.join("|"));
        cache.schema_names = regExp;
        schema_names = regExp;
      }
      return schema_names;
    },
  },
  {
    key: "get_schema_search",
    value: function get_schema_search() {
      const self = this;
      const cache = this.cache;
      let schema_search = cache.schema_search;
      if (null === schema_search) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp(
          "(^|(?!_)(?:[><\uFF5C]|" + self.src_ZPCc + "))(" + self.get_schema_names().source + ")",
          "ig",
        );
        cache.schema_search = regExp;
        schema_search = regExp;
      }
      return schema_search;
    },
  },
  {
    key: "get_schema_at_start",
    value: function get_schema_at_start() {
      const self = this;
      const cache = this.cache;
      let schema_at_start = cache.schema_at_start;
      if (null === schema_at_start) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + self.get_schema_search().source, "i");
        cache.schema_at_start = regExp;
        schema_at_start = regExp;
      }
      return schema_at_start;
    },
  },
];
const _moduleResult = _createClass(REBuilder, items);
let closure_7 = ["rebuilder"];
let obj = {
  validate(arg0, lastIndex, re) {
    re = re.re;
    const get_http_validatorResult = re.get_http_validator();
    get_http_validatorResult.lastIndex = lastIndex;
    const match = get_http_validatorResult.exec(arg0);
    let num = 0;
    if (match) {
      num = match[0].length;
    }
    return num;
  },
  normalize(arg0, str) {
    return str.normalize(arg0);
  },
};
let obj2 = {
  "http:": obj,
  "https:": obj,
  "ftp:": obj,
  "//": {
    validate(arg0, lastIndex, re) {
      re = re.re;
      const result = re.get_relative_proto_validator();
      result.lastIndex = lastIndex;
      const match = result.exec(arg0);
      let num = 0;
      if (match) {
        if (lastIndex < 3) {
          if (lastIndex < 3) {
            let num3 = match[0].length;
          } else {
            num3 = 0;
          }
        } else {
          num3 = 0;
        }
        num = num3;
      }
      return num;
    },
    normalize(arg0, str) {
      return str.normalize(arg0);
    },
  },
  "mailto:": {
    validate(arg0, lastIndex, re) {
      re = re.re;
      const get_mailto_validatorResult = re.get_mailto_validator();
      get_mailto_validatorResult.lastIndex = lastIndex;
      const match = get_mailto_validatorResult.exec(arg0);
      let num = 0;
      if (match) {
        num = match[0].length;
      }
      return num;
    },
    normalize(arg0, str) {
      return str.normalize(arg0);
    },
  },
};
let obj3 = {
  fuzzyLink: false,
  fuzzyEmail: true,
  fuzzyIP: false,
  "---": false,
  tlds: null,
  urlAuth: false,
  maxLength: 10000,
};
const parts = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
let closure_129_0 = parts;
const parts1 =
  "a:cdefgilmnoqrstuwxz|b:abdefghijmnorstvwyz|c:acdfghiklmnoruvwxyz|d:ejkmoz|e:cegrstu|f:ijkmor|g:abdefghilmnpqrstuwy|h:kmnrtu|i:delmnoqrst|j:emop|k:eghimnprwyz|l:abcikrstuvy|m:acdeghklmnopqrstuvwxyz|n:acefgilopruz|o:m|p:aefghklmnrstwy|q:a|r:eosuw|s:abcdeghijklmnortuvxyz|t:cdfghjklmnortvwz|u:agksyz|v:aceginu|w:fs|y:et|z:amw".split(
    "|",
  );
let item = parts1.forEach((arr) => {
  const index = arr.indexOf(":");
  const substr = arr.slice(0, index);
  const substr1 = arr.slice(index + 1);
  for (const item10015 of substr1) {
    arr = LinkifyIt.push(substr + item10015);
    continue;
  }
});
obj3.tlds = parts;
class Match {
  constructor(arg0, arg1, arg2, arg3) {
    tmp = closure_2(this, Match);
    tmp2 = _defineProperty(this, "schema", undefined);
    tmp3 = _defineProperty(this, "index", undefined);
    tmp4 = _defineProperty(this, "lastIndex", undefined);
    tmp5 = _defineProperty(this, "raw", undefined);
    tmp6 = _defineProperty(this, "text", undefined);
    tmp7 = _defineProperty(this, "url", undefined);
    substr = global.slice(importDefault, importAll);
    this.schema = require.toLowerCase();
    this.index = importDefault;
    this.lastIndex = importAll;
    this.raw = substr;
    this.text = substr;
    this.url = substr;
    return;
  }
}
let closure_10 = _createClass(Match);
class LinkifyIt {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    self = this;
    tmp2 = c2(this, LinkifyIt);
    tmp3 = closure_4(this, "__opts__", undefined);
    tmp4 = closure_4(this, "__schemas__", undefined);
    tmp5 = closure_4(this, "re", undefined);
    rebuilder = obj.rebuilder;
    obj2 = metroImportDefault;
    if (null == obj) {
      obj1 = {};
    } else {
      if (null == obj) {
        obj10 = {};
      } else {
        obj11 = {};
        tmp6 = obj;
        obj10 = obj11;
        keys = Object.keys();
        if (keys !== undefined) {
          obj10 = obj11;
          tmp8 = keys[tmp];
          while (tmp8 !== undefined) {
            tmp22 = tmp8;
            hasOwnProperty = {}.hasOwnProperty;
            call2 = hasOwnProperty.call;
            if (!(typeof call2 === "unknown" ? hasOwnProperty(tmp8) : call2(obj, tmp8))) {
              continue;
            } else {
              if (obj2.includes(tmp8)) {
                continue;
              } else {
                obj11[tmp8] = obj[tmp8];
                continue;
              }
              continue;
            }
            continue;
          }
        }
      }
      tmp9 = globalThis;
      _Object = Object;
      obj1 = obj10;
      if (Object.getOwnPropertySymbols) {
        _Object2 = Object;
        ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        num = 0;
        num2 = 1;
        obj1 = obj10;
        if (0 < ownPropertySymbols.length) {
          do {
            tmp10 = ownPropertySymbols[num];
            tmp11 = num;
            if (!obj2.includes(tmp10)) {
              propertyIsEnumerable = {}.propertyIsEnumerable;
              call = propertyIsEnumerable.call;
              if (typeof call === "unknown" ? propertyIsEnumerable(tmp10) : call(obj, tmp10)) {
                obj10[tmp10] = obj[tmp10];
              }
            }
            num = num + 1;
            obj1 = obj10;
          } while (num < ownPropertySymbols.length);
        }
      }
    }
    tmp12 = hasOwnProperty;
    obj12 = {};
    tmp13 = hasOwnProperty(obj12, closure_9);
    tmp14 = hasOwnProperty(obj12, obj1);
    self.__opts__ = obj12;
    obj13 = {};
    tmp15 = hasOwnProperty(obj13, closure_8);
    self.__schemas__ = obj13;
    if (!rebuilder) {
      tmp16 = closure_6;
      tmp17 = new.target;
      tmp18 = new.target;
      rebuilder = new closure_6();
    }
    self.re = rebuilder;
    re = self.re;
    obj14 = {};
    tmp12Result = tmp12(obj14, self.__opts__);
    obj15 = { schema_names: Object.keys(self.__schemas__) };
    tmp12Result1 = tmp12(obj14, {}, obj15);
    result = re.set(obj14);
    return;
  }
}
const entry1 = {
  key: "add",
  value: function add(arg0) {
    let tmp3 = arg1;
    if (arg1 === undefined) {
      tmp3 = null;
    }
    const self = this;
    if (tmp3) {
      const obj = {
        normalize(arg0, str) {
          return str.normalize(arg0);
        },
      };
      _objectSpread2(obj, tmp3);
      self.__schemas__[arg0] = obj;
    } else {
      const __schemas__ = self.__schemas__;
      delete tmp[tmp2];
    }
    const re = self.re;
    obj2 = {};
    _objectSpread2(obj2, self.__opts__);
    _objectSpread2(obj2, {}, { schema_names: Object.keys(self.__schemas__) });
    const result = re.set(obj2);
    return self;
  },
};
let items1 = [
  entry1,
  {
    key: "set",
    value: function set() {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      obj2 = {};
      _objectSpread2(obj2, this.__opts__);
      _objectSpread2(obj2, obj);
      this.__opts__ = obj2;
      const re = this.re;
      obj3 = {};
      _objectSpread2(obj3, this.__opts__);
      _objectSpread2(obj3, {}, { schema_names: Object.keys(this.__schemas__) });
      const result = re.set(obj3);
      return this;
    },
  },
  {
    key: "test",
    value: function test(arr) {
      if (arr.length) {
        const self = this;
        const re = this.re;
        const get_schema_searchResult = re.get_schema_search();
        get_schema_searchResult.lastIndex = 0;
        let match = get_schema_searchResult.exec(arr);
        if (null !== match) {
          while (!self.testSchemaAt(arr, match[2], get_schema_searchResult.lastIndex)) {
            match = get_schema_searchResult.exec(arr);
          }
          return true;
        }
        if (self.__opts__.fuzzyLink) {
          if (self.__schemas__["http:"]) {
            const re2 = self.re;
            const result = re2.get_fuzzy_link_search();
            result.lastIndex = 0;
            if (null !== result.exec(arr)) {
              return true;
            }
          }
        }
        if (self.__opts__.fuzzyEmail) {
          if (self.__schemas__["mailto:"]) {
            if (arr.indexOf("@") >= 0) {
              const re3 = self.re;
              const result1 = re3.get_fuzzy_mail_host_search();
              const re4 = self.re;
              const result2 = re4.get_mail_name_validator();
              result1.lastIndex = 0;
              let match1 = result1.exec(arr);
              if (null !== match1) {
                const _Math = Math;
                while (!result2.test(tmp3(Math.max(0, match1.index - 65), match1.index))) {
                  match1 = result1.exec(arr);
                }
                return true;
              }
            }
          }
        }
        return false;
      } else {
        return false;
      }
    },
  },
  {
    key: "testSchemaAt",
    value: function testSchemaAt(arr, match, lastIndex) {
      const self = this;
      let num = 0;
      if (this.__schemas__[match.toLowerCase(match)]) {
        num = self.__schemas__[match.toLowerCase(match)].validate(
          arr.slice(0, lastIndex + self.__opts__.maxLength),
          lastIndex,
          self,
        );
        const obj = self.__schemas__[match.toLowerCase(match)];
      }
      return num;
    },
  },
  {
    key: "match",
    value: function match(arr) {
      const self = this;
      items = [];
      const re = this.re;
      const get_schema_searchResult = re.get_schema_search();
      if (arr.length) {
        get_schema_searchResult.lastIndex = 0;
        if (tmp2) {
          const re2 = self.re;
          const result = re2.get_fuzzy_link_search();
          result.lastIndex = 0;
        }
        let num4 = 0;
        let flag = false;
        let flag2 = false;
        let flag3 = false;
        if (tmp4) {
          const re3 = self.re;
          const result1 = re3.get_fuzzy_mail_host_search();
          result1.lastIndex = 0;
          const re4 = self.re;
          const result2 = re4.get_mail_name_validator();
          num4 = 0;
          flag = false;
          flag2 = false;
          flag3 = false;
        }
        while (true) {
          let _Math = Math;
          let bound = Math.max(num4 - 1, 0);
          let flag4 = flag;
          let tmp20 = tmp7;
          if (obj4) {
            flag4 = flag;
            tmp20 = tmp7;
            if (result2) {
              flag4 = flag;
              tmp20 = tmp7;
              if (!flag) {
                if (!tmp7) {
                  if (obj4.lastIndex < bound) {
                    obj4.lastIndex = bound;
                  }
                  let match = obj4.exec(arr);
                  flag4 = true;
                  while (match) {
                    let _Math2 = Math;
                    let match1 = result2.exec(arr.slice(Math.max(0, match.index - 65), match.index));
                    if (!match1) {
                      continue;
                    } else {
                      let obj = {
                        schema: "mailto:",
                        index: match.index - match1[1].length,
                        lastIndex: match.index + match[0].length,
                      };
                      flag4 = flag;
                      tmp20 = obj;
                      if (obj.index >= num4) {
                        break;
                      } else {
                        if (obj4.lastIndex >= bound) {
                          continue;
                        } else {
                          obj4.lastIndex = bound;
                          continue;
                        }
                        continue;
                      }
                    }
                    break;
                  }
                } else {
                  flag4 = flag;
                  tmp20 = tmp7;
                }
              }
            }
          }
          let flag5 = flag2;
          let tmp23 = tmp8;
          if (obj2) {
            flag5 = flag2;
            tmp23 = tmp8;
            if (!flag2) {
              if (!tmp8) {
                if (obj2.lastIndex < bound) {
                  obj2.lastIndex = bound;
                }
                let match2 = obj2.exec(arr);
                flag5 = true;
                while (match2) {
                  obj3 = {
                    schema: "",
                    index: match2.index + match2[1].length,
                    lastIndex: match2.index + match2[0].length,
                  };
                  flag5 = flag2;
                  tmp23 = obj3;
                  if (obj3.index >= num4) {
                    break;
                  } else {
                    if (obj2.lastIndex >= bound) {
                      continue;
                    } else {
                      obj2.lastIndex = bound;
                      continue;
                    }
                    continue;
                  }
                }
              } else {
                flag5 = flag2;
                tmp23 = tmp8;
              }
            }
          }
          let tmp25 = !tmp20;
          if (tmp20) {
            let tmp26 = tmp23;
            if (tmp23) {
              let tmp27 = tmp23.index < tmp20.index;
              if (!tmp27) {
                let tmp28 = tmp23.index === tmp20.index && tmp23.lastIndex > tmp20.lastIndex;
                tmp27 = tmp28;
              }
              tmp26 = tmp27;
            }
            tmp25 = tmp26;
          }
          let tmp29 = tmp20;
          if (tmp25) {
            tmp29 = tmp23;
          }
          let tmp30 = tmp6;
          let tmp31;
          let flag6 = flag3;
          let tmp32 = tmp6;
          if (!flag3) {
            while (true) {
              let tmp34 = tmp30;
              if (tmp30) {
                if (tmp34.index < num4) {
                  continue;
                } else {
                  if (!tmp29) {
                    let testSchemaAtResult = self.testSchemaAt(arr, tmp34.schema, tmp34.lastIndex);
                    if (!testSchemaAtResult) {
                      continue;
                    } else {
                      let obj5 = { schema: null, index: null, lastIndex: null };
                      ({ schema: obj8.schema, index: obj8.index } = tmp34);
                      obj5.lastIndex = tmp34.lastIndex + testSchemaAtResult;
                      tmp31 = obj5;
                      flag6 = flag3;
                      break;
                    }
                    break;
                  } else {
                    flag6 = flag3;
                    tmp32 = tmp34;
                    if (tmp34.index > tmp29.index) {
                      break;
                    }
                  }
                  break;
                }
                continue;
              } else {
                if (get_schema_searchResult.lastIndex < bound) {
                  get_schema_searchResult.lastIndex = bound;
                }
                let match3 = get_schema_searchResult.exec(arr);
                flag6 = true;
                tmp32 = tmp30;
                if (!match3) {
                  break;
                } else {
                  let obj6 = {
                    schema: match3[2],
                    index: match3.index + match3[1].length,
                    lastIndex: match3.index + match3[0].length,
                  };
                  tmp34 = obj6;
                }
              }
              break;
            }
          }
          let tmp37 = !tmp31;
          if (tmp31) {
            let tmp38 = tmp20;
            if (tmp20) {
              let tmp39 = tmp20.index < tmp31.index;
              if (!tmp39) {
                let tmp40 = tmp20.index === tmp31.index && tmp20.lastIndex > tmp31.lastIndex;
                tmp39 = tmp40;
              }
              tmp38 = tmp39;
            }
            tmp37 = tmp38;
          }
          if (tmp37) {
            tmp31 = tmp20;
          }
          let tmp41 = !tmp31;
          if (tmp31) {
            let tmp42 = tmp23;
            if (tmp23) {
              let tmp43 = tmp23.index < tmp31.index;
              if (!tmp43) {
                let tmp44 = tmp23.index === tmp31.index && tmp23.lastIndex > tmp31.lastIndex;
                tmp43 = tmp44;
              }
              tmp42 = tmp43;
            }
            tmp41 = tmp42;
          }
          if (tmp41) {
            tmp31 = tmp23;
          }
          if (!tmp31) {
            break;
          } else {
            let tmp46;
            let tmp47 = tmp23;
            if (tmp31 !== tmp20) {
              tmp46 = tmp20;
              tmp47 = tmp23;
              if (tmp31 === tmp23) {
                tmp46 = tmp20;
              }
            }
            let tmp49 = new.target;
            let tmp50 = new.target;
            let tmp52 = new closure_10(arr, tmp31.schema, tmp31.index, tmp31.lastIndex);
            if (tmp52.schema) {
              let normalizer = self.__schemas__[tmp52.schema];
              let normalizeResult = normalizer.normalize(tmp52, self);
            } else {
              let normalizeResult1 = self.normalize(tmp52);
            }
            arr = items.push(tmp52);
            num4 = tmp31.lastIndex;
            flag = flag4;
            flag2 = flag5;
            flag3 = flag6;
            tmp6 = tmp32;
            tmp7 = tmp46;
            tmp8 = tmp47;
            continue;
          }
        }
        let tmp45 = null;
        if (items.length) {
          tmp45 = items;
        }
        return tmp45;
      } else {
        return null;
      }
    },
  },
  {
    key: "matchAtStart",
    value: function matchAtStart(arr) {
      if (arr.length) {
        const self = this;
        const re = this.re;
        const match = re.get_schema_at_start().exec(arr);
        if (match) {
          const testSchemaAtResult = self.testSchemaAt(arr, match[2], match[0].length);
          if (testSchemaAtResult) {
            const tmp10 = new closure_10(
              arr,
              match[2],
              match.index + match[1].length,
              match.index + match[0].length + testSchemaAtResult,
            );
            const normalizer = self.__schemas__[tmp10.schema];
            normalizer.normalize(tmp10, self);
            return tmp10;
          } else {
            return null;
          }
        } else {
          return null;
        }
        const get_schema_at_startResult = re.get_schema_at_start();
      } else {
        return null;
      }
    },
  },
  {
    key: "tlds",
    value: function tlds(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      let tmp = arg0;
      if (!Array.isArray(arg0)) {
        items = [arg0];
        tmp = items;
      }
      const self = this;
      let combined = tmp;
      if (flag) {
        const tlds = self.__opts__.tlds;
        combined = tlds.concat(tmp);
      }
      this.__opts__.tlds = combined;
      const re = self.re;
      const obj = {};
      _objectSpread2(obj, self.__opts__);
      _objectSpread2(obj, {}, { schema_names: Object.keys(self.__schemas__) });
      const result = re.set(obj);
      return self;
    },
  },
  {
    key: "normalize",
    value: function normalize(schema) {
      if (!schema.schema) {
        const _HermesInternal = HermesInternal;
        schema.url = "http://" + schema.url;
      }
      let isMatch = "mailto:" !== schema.schema;
      if (!isMatch) {
        isMatch = /^mailto:/i.test(schema.url);
        const obj = /^mailto:/i;
      }
      if (!isMatch) {
        const _HermesInternal2 = HermesInternal;
        schema.url = "mailto:" + schema.url;
      }
    },
  },
];
const _moduleResult1 = _createClass(LinkifyIt, items1);

export const LinkifyIt = _moduleResult1;
export const REBuilder = _moduleResult;
export function linkifyit() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  return new _moduleResult1(obj);
}
