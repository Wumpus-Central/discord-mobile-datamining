// === Module 13520: URLImpl ===

// Module 13520 (URLImpl)
import _classCallCheck from "_classCallCheck";

const URLImpl = require;
class URLImpl {
  constructor(arg0, arg1) {
    self = this;
    tmp = outer1_2(this, URLImpl);
    [tmp2, tmp3] = require;
    basicURLParseResult = null;
    if (undefined !== tmp3) {
      tmp5 = URLImpl;
      tmp6 = closure_1;
      obj = require("parseIPv4Number");
      basicURLParseResult = obj.basicURLParse(tmp3);
      if (null === basicURLParseResult) {
        tmp16 = globalThis;
        _TypeError2 = TypeError;
        _HermesInternal2 = HermesInternal;
        str3 = "Invalid base URL: ";
        tmp17 = new.target;
        tmp18 = new.target;
        typeError = new TypeError("Invalid base URL: " + tmp3);
        tmp20 = typeError;
        throw typeError;
      }
    }
    tmp7 = URLImpl;
    tmp8 = closure_1;
    obj2 = require("parseIPv4Number");
    basicURLParseResult1 = obj2.basicURLParse(tmp2, { baseURL: basicURLParseResult });
    if (null === basicURLParseResult1) {
      tmp11 = globalThis;
      _TypeError = TypeError;
      _HermesInternal = HermesInternal;
      str2 = "Invalid URL: ";
      tmp12 = new.target;
      tmp13 = new.target;
      typeError1 = new TypeError("Invalid URL: " + tmp2);
      tmp15 = typeError1;
      throw typeError1;
    } else {
      str = "";
      if (null !== basicURLParseResult1.query) {
        str = basicURLParseResult1.query;
      }
      tmp10 = global;
      self._url = basicURLParseResult1;
      tmp7Result = require("module_13525");
      items = [];
      items[0] = str;
      self._query = tmp7Result.createImpl(global, items, { doNotStripQMark: true });
      self._query._url = self;
      return;
    }
  }
}
let items = [
  {
    key: "href",
    get() {
      return URLImpl(13521).serializeURL(this._url);
    },
    set(arg0) {
      const basicURLParseResult = URLImpl(13521).basicURLParse(arg0);
      if (null === basicURLParseResult) {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("Invalid URL: " + arg0);
        throw typeError;
      } else {
        this._url = basicURLParseResult;
        const _list = this._query._list;
        const self = this;
        _list.splice(0);
        const query = basicURLParseResult.query;
        if (null !== query) {
          self._query._list = tmp(13524).parseUrlencoded(query);
          const tmpResult = tmp(13524);
        }
      }
      const obj = URLImpl(13521);
      tmp = URLImpl;
    }
  },
  {
    key: "origin",
    get() {
      return URLImpl(13521).serializeURLOrigin(this._url);
    }
  },
  {
    key: "protocol",
    get() {
      return this._url.scheme + ":";
    },
    set(arg0) {
      let obj = URLImpl(13521);
      obj = { url: this._url, stateOverride: "scheme start" };
      obj.basicURLParse(`${arg0}:`, obj);
    }
  },
  {
    key: "username",
    get() {
      return this._url.username;
    },
    set(arg0) {
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        URLImpl(13521).setTheUsername(this._url, arg0);
        const tmpResult = URLImpl(13521);
      }
    }
  },
  {
    key: "password",
    get() {
      return this._url.password;
    },
    set(arg0) {
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        URLImpl(13521).setThePassword(this._url, arg0);
        const tmpResult = URLImpl(13521);
      }
    }
  },
  {
    key: "host",
    get() {
      let host = this._url;
      if (null === host.host) {
        return "";
      } else if (null === host.port) {
        host = host.host;
        let serializeHostResult = URLImpl(13521).serializeHost(host);
        const obj3 = URLImpl(13521);
      } else {
        const obj = URLImpl(13521);
        const text = `${obj.serializeHost(host.host)}:`;
        serializeHostResult = `${obj.serializeHost(host.host)}:${URLImpl(13521).serializeInteger(host.port)}`;
        const obj2 = URLImpl(13521);
      }
    },
    set(arg0) {
      if (!this._url.cannotBeABaseURL) {
        let obj = URLImpl(13521);
        obj = { url: null, stateOverride: "host" };
        obj[0] = tmp._url;
        obj.basicURLParse(arg0, obj);
      }
    }
  },
  {
    key: "hostname",
    get() {
      let str = "";
      if (null !== this._url.host) {
        str = URLImpl(13521).serializeHost(tmp._url.host);
        const obj = URLImpl(13521);
      }
      return str;
    },
    set(arg0) {
      if (!this._url.cannotBeABaseURL) {
        let obj = URLImpl(13521);
        obj = { url: null, stateOverride: "hostname" };
        obj[0] = tmp._url;
        obj.basicURLParse(arg0, obj);
      }
    }
  },
  {
    key: "port",
    get() {
      let str = "";
      if (null !== this._url.port) {
        str = URLImpl(13521).serializeInteger(tmp._url.port);
        const obj = URLImpl(13521);
      }
      return str;
    },
    set(arg0) {
      const self = this;
      let obj = URLImpl(13521);
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        if ("" === arg0) {
          self._url.port = null;
        } else {
          obj = { url: null, stateOverride: "port" };
          obj[0] = self._url;
          URLImpl(13521).basicURLParse(arg0, obj);
          const tmpResult = URLImpl(13521);
        }
      }
    }
  },
  {
    key: "pathname",
    get() {
      let path = this._url.path;
      if (this._url.cannotBeABaseURL) {
        let str = path[0];
      } else {
        str = "";
        if (0 !== path.length) {
          path = tmp._url.path;
          str = `/${path.join("/")}`;
        }
      }
      return str;
    },
    set(arg0) {
      const self = this;
      if (!this._url.cannotBeABaseURL) {
        self._url.path = [];
        let obj = URLImpl(13521);
        obj = { url: null, stateOverride: "path start" };
        obj[0] = self._url;
        obj.basicURLParse(arg0, obj);
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
        if ("?" === str[0]) {
          substr = str.substring(1);
        }
        _url.query = "";
        let obj = URLImpl(13521);
        obj = { url: null, stateOverride: "query" };
        obj[0] = _url;
        obj.basicURLParse(substr, obj);
        self._query._list = URLImpl(13524).parseUrlencoded(substr);
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
        if ("#" === str[0]) {
          substr = str.substring(1);
        }
        self._url.fragment = "";
        let obj = URLImpl(13521);
        obj = { url: null, stateOverride: "fragment" };
        obj[0] = self._url;
        obj.basicURLParse(substr, obj);
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

export const implementation = require("_createClass")(URLImpl, items);