import _classCallCheck from "_classCallCheck";

const BlobManager = global;
const require = arg1;
class BlobManager {
  constructor() {
    tmp = _classCallCheck(this, BlobManager);
    return;
  }
}
const items = [
  {
    key: "createFromParts",
    value: function createFromParts(arr, type) {
      importDefault(38)(importDefault(201), "NativeBlobModule is available.");
      const replaced = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
        const tmp = 16 * Math.random() | 0;
        let str = tmp;
        if ("x" != arg0) {
          str = 3 & tmp | 8;
        }
        return str.toString(16);
      });
      const mapped = arr.map((data) => {
        if (!(data instanceof ArrayBuffer)) {
          const _ArrayBuffer = ArrayBuffer;
          if (!ArrayBuffer.isView(data)) {
            if (data instanceof callback(table[4]).default) {
              let obj = { data: null, type: "blob" };
              obj[0] = data.data;
            } else {
              obj = { data: null, type: "string" };
              const _String = String;
              obj[0] = String(data);
            }
            return obj;
          }
        }
        const error = new Error("Creating blobs from 'ArrayBuffer' and 'ArrayBufferView' are not supported");
        throw error;
      });
      const reduced = mapped.reduce((arg0, type) => {
        if ("string" === type.type) {
          const _encodeURI = encodeURI;
          let sum = arg0 + closure_0.unescape(encodeURI(type.data)).length;
        } else {
          sum = arg0 + type.data.size;
        }
        return sum;
      }, 0);
      let obj = importDefault(201);
      const fromParts = obj.createFromParts(mapped, replaced);
      obj = { blobId: replaced, offset: 0, size: reduced, type: null, lastModified: null };
      let str = "";
      if (type) {
        str = type.type;
      }
      obj[3] = str;
      if (type) {
        let lastModified = type.lastModified;
      } else {
        const _Date = Date;
        lastModified = Date.now();
      }
      obj[4] = lastModified;
      return BlobManager.createFromOptions(obj);
    }
  },
  {
    key: "createFromOptions",
    value: function createFromOptions(_response) {
      let obj = require(204) /* map */;
      obj.register(_response.blobId);
      let data = _response;
      obj = Object.create(require(203) /* Blob */.default.prototype);
      if (null == _response.__collector) {
        obj = {};
        const merged = Object.assign(_response);
        let result = null;
        if (null != BlobManager.__blobCollectorProvider) {
          result = obj3.__blobCollectorProvider(tmp7);
        }
        obj.__collector = result;
        data = obj;
        obj3 = BlobManager;
      }
      return Object.assign(obj, { data });
    }
  },
  {
    key: "release",
    value: function release(arg0) {
      importDefault(38)(importDefault(201), "NativeBlobModule is available.");
      const tmp = importDefault;
      const tmp3 = importDefault(38);
      require(204) /* map */.unregister(arg0);
      const obj = require(204) /* map */;
      if (!obj2.has(arg0)) {
        tmp(201).release(arg0);
        const tmpResult = tmp(201);
      }
    }
  },
  {
    key: "addNetworkingHandler",
    value: function addNetworkingHandler() {
      importDefault(38)(importDefault(201), "NativeBlobModule is available.");
      const tmp = importDefault(38);
      importDefault(201).addNetworkingHandler();
    }
  },
  {
    key: "addWebSocketHandler",
    value: function addWebSocketHandler(arg0) {
      importDefault(38)(importDefault(201), "NativeBlobModule is available.");
      const tmp = importDefault(38);
      importDefault(201).addWebSocketHandler(arg0);
    }
  },
  {
    key: "removeWebSocketHandler",
    value: function removeWebSocketHandler(arg0) {
      importDefault(38)(importDefault(201), "NativeBlobModule is available.");
      const tmp = importDefault(38);
      const result = importDefault(201).removeWebSocketHandler(arg0);
    }
  },
  {
    key: "sendOverSocket",
    value: function sendOverSocket(data) {
      importDefault(38)(importDefault(201), "NativeBlobModule is available.");
      const tmp = importDefault(38);
      importDefault(201).sendOverSocket(data.data, arg1);
    }
  }
];
const tmp2 = require("_createClass")(BlobManager, null, items);
tmp2.isAvailable = require("BlobModule");

export default tmp2;