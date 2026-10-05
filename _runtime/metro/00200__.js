// === Module 200: ? ===

// Module 200
import _modDef38 from "module_38" /* 38 */;
import _createClassDefault from "_createClass" /* 42 */;
import BlobModuleDefault from "BlobModule" /* 201 */;
import _mod203 from "module_203" /* 203 */;
import _mod204 from "module_204" /* 204 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class BlobManager {
  constructor() {
    _classCallCheck(this, BlobManager);
  }
}
const entry = {
  key: "createFromParts",
  value: function createFromParts(arr, type) {
    let lastModified;
    let str;
    let tmp = _modDef38;
    tmp(BlobModuleDefault, "NativeBlobModule is available.");
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
          let obj;
          if (data instanceof closure_1_1(closure_1_3[4]).default) {
            obj = { data: data.data, type: "blob" };
            const obj2 = { data: data.data, type: "blob" };
          } else {
            obj = { data: String(data), type: "string" };
            const _String = String;
          }
          return obj;
        }
      }
      const error = new Error("Creating blobs from 'ArrayBuffer' and 'ArrayBufferView' are not supported");
      throw error;
    });
    const reduced = mapped.reduce((acc, type) => {
      let sum;
      if ("string" === type.type) {
        const _encodeURI = encodeURI;
        sum = acc + BlobManager.unescape(encodeURI(type.data)).length;
      } else {
        sum = acc + type.data.size;
      }
      return sum;
    }, 0);
    let obj = BlobModuleDefault;
    const fromParts = obj.createFromParts(mapped, replaced);
    let obj2 = { blobId: replaced, offset: 0, size: reduced, type: str, lastModified };
    str = "";
    const createFromOptions = BlobManager.createFromOptions;
    if (type) {
      str = type.type;
    }
    if (type) {
      lastModified = type.lastModified;
    } else {
      const _Date = Date;
      lastModified = Date.now();
    }
    return createFromOptions(obj2);
  }
};
const items = [
  entry,
  {
    key: "createFromOptions",
    value: function createFromOptions(_response) {
      let result;
      const obj = _mod204;
      obj.register(_response.blobId);
      const _Object = Object;
      let data = _response;
      const obj2 = Object.create(_mod203.default.prototype);
      if (null == _response.__collector) {
        const obj5 = { __collector: result };
        const merged = Object.assign(_response);
        result = null;
        if (null != global.__blobCollectorProvider) {
          result = global.__blobCollectorProvider(tmp7);
        }
        data = obj5;
      }
      return assign(obj2, { data });
    }
  },
  {
    key: "release",
    value: function release(arg0) {
      const tmp3 = _modDef38;
      tmp3(BlobModuleDefault, "NativeBlobModule is available.");
      const obj = _mod204;
      obj.unregister(arg0);
      const obj2 = _mod204;
      if (!obj2.has(arg0)) {
        const tmpResult = BlobModuleDefault;
        tmpResult.release(arg0);
      }
    }
  },
  {
    key: "addNetworkingHandler",
    value: function addNetworkingHandler() {
      const tmp = _modDef38;
      tmp(BlobModuleDefault, "NativeBlobModule is available.");
      const obj = BlobModuleDefault;
      obj.addNetworkingHandler();
    }
  },
  {
    key: "addWebSocketHandler",
    value: function addWebSocketHandler(arg0) {
      const tmp = _modDef38;
      tmp(BlobModuleDefault, "NativeBlobModule is available.");
      const obj = BlobModuleDefault;
      obj.addWebSocketHandler(arg0);
    }
  },
  {
    key: "removeWebSocketHandler",
    value: function removeWebSocketHandler(arg0) {
      const tmp = _modDef38;
      tmp(BlobModuleDefault, "NativeBlobModule is available.");
      const obj = BlobModuleDefault;
      const result = obj.removeWebSocketHandler(arg0);
    }
  },
  {
    key: "sendOverSocket",
    value: function sendOverSocket(data, arg1) {
      const tmp = _modDef38;
      tmp(BlobModuleDefault, "NativeBlobModule is available.");
      const obj = BlobModuleDefault;
      obj.sendOverSocket(data.data, arg1);
    }
  }
];
const tmp2 = _createClassDefault(BlobManager, null, items);
tmp2.isAvailable = BlobModuleDefault;

export default tmp2;