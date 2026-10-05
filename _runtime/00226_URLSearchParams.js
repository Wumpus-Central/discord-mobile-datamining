// === Module 226: URLSearchParams ===

// Module 226 (URLSearchParams)
import BlobModuleDefault from "BlobModule" /* 201 */;
import _mod227 from "module_227" /* 227 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let closure_1 = null;
if (BlobModuleDefault) {
  const importDefaultResult1 = BlobModuleDefault;
  if (typeof importDefaultResult1.getConstants().BLOB_URI_SCHEME === "string") {
    const importDefaultResult2 = BlobModuleDefault;
    const constants = importDefaultResult2.getConstants();
    let str = ":";
    closure_1 = `${tmp4.BLOB_URI_SCHEME}:`;
    if (typeof constants.BLOB_URI_HOST === "string") {
      let _HermesInternal = HermesInternal;
      let str2 = "/";
      let str3 = "//";
      closure_1 = `${tmp4.BLOB_URI_SCHEME}:` + "//" + constants.BLOB_URI_HOST + "/";
    }
  }
}
class URL {
  constructor(_url, str) {
    const self = this;
    _classCallCheck(this, URL);
    this._searchParamsInstance = null;
    if (str) {
      const obj = /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)*(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/;
      if (!obj.test(_url)) {
        let str1;
        if (typeof str === "string") {
          str1 = str;
          const obj2 = /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)*(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/;
          if (!obj2.test(str)) {
            const _TypeError = TypeError;
            const _HermesInternal = HermesInternal;
            const self2 = this;
            const self3 = this;
            const typeError = new TypeError("Invalid base URL: " + str);
            throw typeError;
          }
        } else {
          str1 = str.toString();
        }
        let substr = str1;
        if (str1.endsWith("/")) {
          substr = str1.slice(0, str1.length - 1);
        }
        let combined = _url;
        if (!_url.startsWith("/")) {
          const _HermesInternal2 = HermesInternal;
          combined = "/" + _url;
        }
        let str3 = combined;
        if (substr.endsWith(combined)) {
          str3 = "";
        }
        const _HermesInternal3 = HermesInternal;
        self._url = "" + substr + str3;
      }
    }
    self._url = _url;
    _url = self._url;
    if (_url.includes("#")) {
      const str5 = self._url;
      const parts = str5.split("#");
      const str6 = parts[0];
      const obj5 = str6.split("://")[1];
      if (!obj5.includes("/")) {
        self._url = parts.join("/#");
      }
    }
    const _url2 = self._url;
    if (!_url2.endsWith("/")) {
      const _url3 = self._url;
      if (!_url3.includes("?")) {
        const _url4 = self._url;
        if (!_url4.includes("#")) {
          const str11 = self._url;
          const obj6 = str11.split("://")[1];
          const tmp8 = obj6 && !obj6.includes("/");
          if (tmp8) {
            self._url = `${self._url}/`;
          }
        }
      }
    }
  }
}
let obj = {
  key: "hash",
  get() {
    const str = this._url;
    const match = str.match(/#([^/]*)/);
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
      const str = this._url;
      const match = str.match(/^https?:\/\/(?:[^@]+@)?([^:/?#]+)/);
      const str2 = this._url;
      const match1 = str2.match(/:(\d+)(?=[/?#]|$)/);
      let str3 = "";
      let str4 = "";
      if (match) {
        const tmp3 = match[1];
        if (match1) {
          const _HermesInternal = HermesInternal;
          str3 = ":" + match1[1];
        }
        str4 = tmp3 + str3;
      }
      return str4;
    }
  },
  {
    key: "hostname",
    get() {
      const str = this._url;
      const match = str.match(/^https?:\/\/(?:[^@]+@)?([^:/?#]+)/);
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
      const str = this._url;
      const match = str.match(/^(https?:\/\/[^/]+)/);
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
      const str = this._url;
      const match = str.match(/https?:\/\/.*:(.*)@/);
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
      const str = this._url;
      const match = str.match(/https?:\/\/[^/]+(\/[^?#]*)?/);
      return match && match[1] || "/";
    }
  },
  {
    key: "port",
    get() {
      const str = this._url;
      const match = str.match(/:(\d+)(?=[/?#]|$)/);
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
      const str = this._url;
      const match = str.match(/^([a-zA-Z][a-zA-Z\d+\-.]*):/);
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
      const str = this._url;
      const match = str.match(/\?([^#]*)/);
      let str2 = "";
      if (match) {
        const _HermesInternal = HermesInternal;
        str2 = "?" + match[1];
      }
      return str2;
    },
    set(str) {
      let text;
      let substr = str;
      if (str.startsWith("?")) {
        substr = str.slice(1);
      }
      const self = this;
      const str2 = this._url.split("?")[0];
      const first = str2.split("#")[0];
      const hash = this.hash;
      if (substr) {
        text = `${tmp2}?${tmp}${hash}`;
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
        const self2 = this;
        const self3 = this;
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
        let text;
        const str = self._url;
        const str3 = str.split("?")[0];
        const first = str3.split("#")[0];
        ({ hash, _searchParamsInstance } = self);
        const str1 = _searchParamsInstance.toString();
        if (str1) {
          text = `${tmp}?${tmp2}${hash}`;
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
      const str = this._url;
      const match = str.match(/^https?:\/\/([^:@]+)(?::[^@]*)?@/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  }
];
const entry = {
  key: "createObjectURL",
  value: function createObjectURL(data) {
    if (null === closure_1) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Cannot create URL for blob!");
      throw error;
    } else {
      const _HermesInternal = HermesInternal;
      return "" + closure_1 + data.data.blobId + "?offset=" + data.data.offset + "&size=" + data.size;
    }
  }
};
const items1 = [
  entry,
  {
    key: "revokeObjectURL",
    value: function revokeObjectURL(arg0) {

    }
  }
];
const importDefaultResultResult = _createClass(URL, items, items1);
const URL_export = importDefaultResultResult;

export const URLSearchParams = _mod227.URLSearchParams;
export { URL_export as URL };