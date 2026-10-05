// === Module 14137: implementation ===

// Module 14137 (implementation)
import _createClass from "_createClass" /* 42 */;
import _mod14141 from "module_14141" /* 14141 */;
import _mod14142 from "module_14142" /* 14142 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const require = globalThis.__r;

class URLImpl {
  constructor(arg0, arg1) {
    let tmp2;
    let tmp3;
    const self = this;
    _classCallCheck(this, URLImpl);
    [tmp2, tmp3] = arg1;
    let basicURLParseResult = null;
    if (undefined !== tmp3) {
      const obj = require("module_14138");
      basicURLParseResult = obj.basicURLParse(tmp3);
      if (null === basicURLParseResult) {
        const _TypeError2 = TypeError;
        const _HermesInternal2 = HermesInternal;
        const self4 = this;
        const self5 = this;
        const typeError = new TypeError("Invalid base URL: " + tmp3);
        throw typeError;
      }
    }
    const obj2 = require("module_14138");
    const basicURLParseResult1 = obj2.basicURLParse(tmp2, { baseURL: basicURLParseResult });
    if (null === basicURLParseResult1) {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError1 = new TypeError("Invalid URL: " + tmp2);
      throw typeError1;
    } else {
      let str = "";
      if (null !== basicURLParseResult1.query) {
        str = basicURLParseResult1.query;
      }
      self._url = basicURLParseResult1;
      const items = [str];
      const tmp7Result = _mod14142;
      self._query = tmp7Result.createImpl(arg0, items, { doNotStripQMark: true });
      self._query._url = self;
    }
  }
}
let obj = {
  key: "href",
  get() {
    const obj = require("module_14138");
    return obj.serializeURL(this._url);
  },
  set(arg0) {
    const obj = require("module_14138");
    const basicURLParseResult = obj.basicURLParse(arg0);
    if (null === basicURLParseResult) {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Invalid URL: " + arg0);
      throw typeError;
    } else {
      this._url = basicURLParseResult;
      const _list = this._query._list;
      const self = this;
      _list.splice(0);
      const query = basicURLParseResult.query;
      if (null !== query) {
        const _query = self._query;
        const tmpResult = _mod14141;
        _query._list = tmpResult.parseUrlencoded(query);
      }
    }
  }
};
let items = [
  obj,
  {
    key: "origin",
    get() {
      const obj = require("module_14138");
      return obj.serializeURLOrigin(this._url);
    }
  },
  {
    key: "protocol",
    get() {
      return this._url.scheme + ":";
    },
    set(arg0) {
      const obj = require("module_14138");
      const obj2 = { url: this._url, stateOverride: "scheme start" };
      obj.basicURLParse(`${arg0}:`, obj2);
    }
  },
  {
    key: "username",
    get() {
      return this._url.username;
    },
    set(arg0) {
      const obj = require("module_14138");
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        const tmpResult = require("module_14138");
        tmpResult.setTheUsername(this._url, arg0);
      }
    }
  },
  {
    key: "password",
    get() {
      return this._url.password;
    },
    set(arg0) {
      const obj = require("module_14138");
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        const tmpResult = require("module_14138");
        tmpResult.setThePassword(this._url, arg0);
      }
    }
  },
  {
    key: "host",
    get() {
      const _url = this._url;
      let str = "";
      if (null !== _url.host) {
        let serializeHostResult;
        if (null === _url.port) {
          const obj3 = require("module_14138");
          serializeHostResult = obj3.serializeHost(_url.host);
        } else {
          const obj = require("module_14138");
          const text = `${obj.serializeHost(_url.host)}:`;
          const obj2 = require("module_14138");
          serializeHostResult = `${obj.serializeHost(_url.host)}:${obj2.serializeInteger(_url.port)}`;
        }
        str = serializeHostResult;
      }
      return str;
    },
    set(arg0) {
      if (!this._url.cannotBeABaseURL) {
        const obj2 = { url: tmp._url, stateOverride: "host" };
        const obj = require("module_14138");
        obj.basicURLParse(arg0, obj2);
      }
    }
  },
  {
    key: "hostname",
    get() {
      let str = "";
      if (null !== this._url.host) {
        const obj = require("module_14138");
        str = obj.serializeHost(tmp._url.host);
      }
      return str;
    },
    set(arg0) {
      if (!this._url.cannotBeABaseURL) {
        const obj2 = { url: tmp._url, stateOverride: "hostname" };
        const obj = require("module_14138");
        obj.basicURLParse(arg0, obj2);
      }
    }
  },
  {
    key: "port",
    get() {
      let str = "";
      if (null !== this._url.port) {
        const obj = require("module_14138");
        str = obj.serializeInteger(tmp._url.port);
      }
      return str;
    },
    set(arg0) {
      const self = this;
      const obj = require("module_14138");
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        if ("" === arg0) {
          self._url.port = null;
        } else {
          const obj2 = { url: self._url, stateOverride: "port" };
          const tmpResult = require("module_14138");
          tmpResult.basicURLParse(arg0, obj2);
        }
      }
    }
  },
  {
    key: "pathname",
    get() {
      let str;
      const path1 = this._url.path;
      if (this._url.cannotBeABaseURL) {
        str = path1[0];
      } else {
        str = "";
        if (0 !== path1.length) {
          const path = tmp._url.path;
          str = `/${path.join("/")}`;
        }
      }
      return str;
    },
    set(arg0) {
      const self = this;
      if (!this._url.cannotBeABaseURL) {
        self._url.path = [];
        const obj2 = { url: self._url, stateOverride: "path start" };
        const obj = require("module_14138");
        obj.basicURLParse(arg0, obj2);
      }
    }
  },
  {
    key: "search",
    get() {
      const self = this;
      let str = "";
      if (null !== this._url.query) {
        str = "";
        if ("" !== self._url.query) {
          str = `?${self._url.query}`;
        }
      }
      return str;
    },
    set(str) {
      const self = this;
      const _url = this._url;
      if ("" === str) {
        _url.query = null;
        self._query._list = [];
      } else {
        let substr = str;
        if ("?" === "?"[0]) {
          substr = str.substring(1);
        }
        _url.query = "";
        const obj2 = { url: _url, stateOverride: "query" };
        const obj = require("module_14138");
        obj.basicURLParse(substr, obj2);
        const _query = self._query;
        const obj3 = _mod14141;
        _query._list = obj3.parseUrlencoded(substr);
      }
    }
  },
  {
    key: "searchParams",
    get() {
      return this._query;
    }
  },
  {
    key: "hash",
    get() {
      const self = this;
      let str = "";
      if (null !== this._url.fragment) {
        str = "";
        if ("" !== self._url.fragment) {
          str = `#${self._url.fragment}`;
        }
      }
      return str;
    },
    set(str) {
      const self = this;
      if ("" !== str) {
        let substr = str;
        if ("#" === "#"[0]) {
          substr = str.substring(1);
        }
        self._url.fragment = "";
        const obj2 = { url: self._url, stateOverride: "fragment" };
        const obj = require("module_14138");
        obj.basicURLParse(substr, obj2);
      } else {
        self._url.fragment = null;
      }
    }
  },
  {
    key: "toJSON",
    value: function toJSON() {
      return this.href;
    }
  }
];

export const implementation = _createClass(URLImpl, items);