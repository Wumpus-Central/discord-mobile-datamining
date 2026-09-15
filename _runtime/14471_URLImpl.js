// === Module 14471: URLImpl ===

// Module 14471 (URLImpl)
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const URLImpl = require;
class URLImpl {
  constructor(arg0, arg1) {
    self = this;
    tmp = c2(this, URLImpl);
    [tmp2, tmp3] = require;
    basicURLParseResult = null;
    if (undefined !== tmp3) {
      tmp5 = closure_0;
      tmp6 = closure_1;
      obj = closure_0(closure_1[2]);
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
    tmp7 = closure_0;
    tmp8 = closure_1;
    obj2 = closure_0(closure_1[2]);
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
      tmp7Result = tmp7(tmp8[3]);
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
      return URLImpl(14472).serializeURL(this._url);
    },
    set(arg0) {
      const basicURLParseResult = URLImpl(14472).basicURLParse(arg0);
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
          self._query._list = URLImpl(14475).parseUrlencoded(query);
          const tmpResult = URLImpl(14475);
        }
      }
      const obj = URLImpl(14472);
    }
  },
  {
    key: "origin",
    get() {
      return URLImpl(14472).serializeURLOrigin(this._url);
    }
  },
  {
    key: "protocol",
    get() {
      return this._url.scheme + ":";
    },
    set(arg0) {
      URLImpl(14472).basicURLParse(`${arg0}:`, { url: this._url, stateOverride: "scheme start" });
    }
  },
  {
    key: "username",
    get() {
      return this._url.username;
    },
    set(arg0) {
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        URLImpl(14472).setTheUsername(this._url, arg0);
        const tmpResult = URLImpl(14472);
      }
      obj = URLImpl(14472);
    }
  },
  {
    key: "password",
    get() {
      return this._url.password;
    },
    set(arg0) {
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        URLImpl(14472).setThePassword(this._url, arg0);
        const tmpResult = URLImpl(14472);
      }
      obj = URLImpl(14472);
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
        let serializeHostResult = URLImpl(14472).serializeHost(host);
        const obj3 = URLImpl(14472);
      } else {
        const obj = URLImpl(14472);
        const text = `${obj.serializeHost(host.host)}:`;
        serializeHostResult = `${obj.serializeHost(host.host)}:${URLImpl(14472).serializeInteger(host.port)}`;
        const obj2 = URLImpl(14472);
      }
    },
    set(arg0) {
      if (!this._url.cannotBeABaseURL) {
        const obj2 = { url: tmp._url, stateOverride: "host" };
        URLImpl(14472).basicURLParse(arg0, obj2);
        const obj = URLImpl(14472);
      }
    }
  },
  {
    key: "hostname",
    get() {
      let str = "";
      if (null !== this._url.host) {
        str = URLImpl(14472).serializeHost(tmp._url.host);
        const obj = URLImpl(14472);
      }
      return str;
    },
    set(arg0) {
      if (!this._url.cannotBeABaseURL) {
        const obj2 = { url: tmp._url, stateOverride: "hostname" };
        URLImpl(14472).basicURLParse(arg0, obj2);
        const obj = URLImpl(14472);
      }
    }
  },
  {
    key: "port",
    get() {
      let str = "";
      if (null !== this._url.port) {
        str = URLImpl(14472).serializeInteger(tmp._url.port);
        const obj = URLImpl(14472);
      }
      return str;
    },
    set(arg0) {
      const self = this;
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        if ("" === arg0) {
          self._url.port = null;
        } else {
          const obj2 = { url: self._url, stateOverride: "port" };
          URLImpl(14472).basicURLParse(arg0, obj2);
          const tmpResult = URLImpl(14472);
        }
      }
      obj = URLImpl(14472);
    }
  },
  {
    key: "pathname",
    get() {
      const path1 = this._url.path;
      if (this._url.cannotBeABaseURL) {
        let str = path1[0];
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
        URLImpl(14472).basicURLParse(arg0, obj2);
        const obj = URLImpl(14472);
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
        URLImpl(14472).basicURLParse(substr, obj2);
        const obj = URLImpl(14472);
        self._query._list = URLImpl(14475).parseUrlencoded(substr);
        const obj3 = URLImpl(14475);
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
        URLImpl(14472).basicURLParse(substr, obj2);
        const obj = URLImpl(14472);
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