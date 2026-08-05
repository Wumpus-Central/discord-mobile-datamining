// _runtime/00226_URL.js
import URL from "_classCallCheck";
import importDefaultResult from "_createClass";

let closure_1 = null;
if (require("BlobModule")) {
  if (typeof importDefaultResult1.getConstants().BLOB_URI_SCHEME === "string") {
    const constants = require("BlobModule").getConstants();
    closure_1 = `${tmp4.BLOB_URI_SCHEME}:`;
    if (typeof constants.BLOB_URI_HOST === "string") {
      let _HermesInternal = HermesInternal;
      closure_1 = `${tmp4.BLOB_URI_SCHEME}:` + "//" + constants.BLOB_URI_HOST + "/";
    }
    const importDefaultResult2 = require("BlobModule");
  }
  importDefaultResult1 = require("BlobModule");
}
class URL {
  constructor(arg0, arg1) {
    self = this;
    tmp = URL(this, URL);
    this._searchParamsInstance = null;
    if (arg1) {
      obj = /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)*(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/;
      if (!obj.test(global)) {
        if (typeof arg1 === "string") {
          obj2 = /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)*(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/;
          str = arg1;
          if (!obj2.test(arg1)) {
            tmp2 = globalThis;
            _TypeError = TypeError;
            _HermesInternal = HermesInternal;
            str = "Invalid base URL: ";
            tmp3 = new.target;
            tmp4 = new.target;
            typeError = new TypeError("Invalid base URL: " + arg1);
            tmp6 = typeError;
            throw typeError;
          }
        } else {
          str = arg1.toString();
        }
        str2 = "/";
        substr = str;
        if (str.endsWith("/")) {
          num = 1;
          num2 = 0;
          substr = require("_classCallCheck");
        }
        combined = global;
        if (!global.startsWith("/")) {
          tmp8 = globalThis;
          _HermesInternal2 = HermesInternal;
          combined = "/" + global;
        }
        str3 = combined;
        if (substr.endsWith(combined)) {
          str3 = "";
        }
        tmp9 = globalThis;
        _HermesInternal3 = HermesInternal;
        str4 = "";
        self._url = "" + substr + str3;
      }
      return;
    }
    self._url = global;
    _url = self._url;
    if (_url.includes("#")) {
      str5 = self._url;
      parts = str5.split("#");
      str6 = parts[0];
      str7 = "://";
      obj5 = str6.split("://")[1];
      str8 = "/";
      if (!obj5.includes("/")) {
        str9 = "/#";
        self._url = parts.join("/#");
      }
    }
    _url2 = self._url;
    if (!_url2.endsWith("/")) {
      _url3 = self._url;
      str10 = "?";
      if (!_url3.includes("?")) {
        _url4 = self._url;
        if (!_url4.includes("#")) {
          str11 = self._url;
          str12 = "://";
          obj6 = str11.split("://")[1];
          tmp10 = obj6;
          if (obj6) {
            tmp10 = !obj6.includes("/");
          }
          if (tmp10) {
            self._url = `${self._url}/`;
          }
        }
      }
    }
    return;
  }
}
let obj = {
  key: "hash",
  get() {
    const match = this._url.match(/#([^/]*)/);
    let str2 = "";
    if (match) {
      const _HermesInternal = HermesInternal;
      str2 = "#" + match[1];
    }
    return str2;
  }
};
const items = [
  obj,
  {
    key: "host",
    get() {
      const match = this._url.match(/^https?:\/\/(?:[^@]+@)?([^:/?#]+)/);
      const match1 = this._url.match(/:(\d+)(?=[/?#]|$)/);
      let str3 = "";
      let str4 = "";
      if (match) {
        if (match1) {
          const _HermesInternal = HermesInternal;
          str3 = ":" + match1[1];
        }
        str4 = match[1] + str3;
      }
      return str4;
    }
  },
  {
    key: "hostname",
    get() {
      const match = this._url.match(/^https?:\/\/(?:[^@]+@)?([^:/?#]+)/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  },
  {
    key: "href",
    get() {
      return this.toString();
    }
  },
  {
    key: "origin",
    get() {
      const match = this._url.match(/^(https?:\/\/[^/]+)/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  },
  {
    key: "password",
    get() {
      const match = this._url.match(/https?:\/\/.*:(.*)@/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  },
  {
    key: "pathname",
    get() {
      const match = this._url.match(/https?:\/\/[^/]+(\/[^?#]*)?/);
      let str2 = match;
      if (match) {
        str2 = match[1];
      }
      if (!str2) {
        str2 = "/";
      }
      return str2;
    }
  },
  {
    key: "port",
    get() {
      const match = this._url.match(/:(\d+)(?=[/?#]|$)/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  },
  {
    key: "protocol",
    get() {
      const match = this._url.match(/^([a-zA-Z][a-zA-Z\d+\-.]*):/);
      let str2 = "";
      if (match) {
        str2 = `${tmp[1]}:`;
      }
      return str2;
    }
  },
  {
    key: "search",
    get() {
      const match = this._url.match(/\?([^#]*)/);
      let str2 = "";
      if (match) {
        const _HermesInternal = HermesInternal;
        str2 = "?" + match[1];
      }
      return str2;
    },
    set(str) {
      let substr = str;
      if (str.startsWith("?")) {
        substr = str.slice(1);
      }
      const self = this;
      const first = this._url.split("?")[0].split("#")[0];
      const hash = this.hash;
      if (substr) {
        let text = `${tmp2}?${tmp}${hash}`;
      } else {
        text = first + hash;
      }
      self._url = text;
      self._searchParamsInstance = null;
    }
  },
  {
    key: "searchParams",
    get() {
      const self = this;
      if (null == this._searchParamsInstance) {
        const _URLSearchParams = URLSearchParams;
        const uRLSearchParams = new URLSearchParams(self.search);
        self._searchParamsInstance = uRLSearchParams;
      }
      return self._searchParamsInstance;
    }
  },
  {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  },
  {
    key: "toString",
    value: function toString() {
      let _searchParamsInstance;
      let hash;
      const self = this;
      if (null === this._searchParamsInstance) {
        return self._url;
      } else {
        let str = self._url;
        const first = str.split("?")[0].split("#")[0];
        ({ hash, _searchParamsInstance } = self);
        str = _searchParamsInstance.toString();
        if (str) {
          let text = `${tmp}?${tmp2}${hash}`;
        } else {
          text = first + hash;
        }
        return text;
      }
    }
  },
  {
    key: "username",
    get() {
      const match = this._url.match(/^https?:\/\/([^:@]+)(?::[^@]*)?@/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  }
];
obj = {
  key: "createObjectURL",
  value: function createObjectURL(data) {
    if (null === closure_1) {
      const _Error = Error;
      const error = new Error("Cannot create URL for blob!");
      throw error;
    } else {
      const _HermesInternal = HermesInternal;
      return "" + tmp + data.data.blobId + "?offset=" + data.data.offset + "&size=" + data.size;
    }
  }
};
const items1 = [
  obj,
  {
    key: "revokeObjectURL",
    value: function revokeObjectURL(arg0) {

    }
  }
];

export const URLSearchParams = require("URLSearchParams").URLSearchParams;
export const URL = require("_createClass")(URL, items, items1);