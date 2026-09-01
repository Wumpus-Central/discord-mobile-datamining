// _runtime/00200_BlobManager.js
import _modDef38 from "metro/00038__.js";
import _createClassDefault from "metro/00042__createClass.js";
import BlobModuleDefault from "00201_BlobModule.js";
import Blob from "00203_Blob.js";
import map from "00204_map.js";
import closure_4 from "metro/00041__classCallCheck.js";

const BlobManager = global;
require = arg1;
class BlobManager {
  constructor() {
    tmp = closure_4(this, BlobManager);
    return;
  }
}
const items = [
  {
    key: "createFromParts",
    value: function createFromParts(arr, type) {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      const replaced = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
        const tmp = (16 * Math.random()) | 0;
        let str = tmp;
        if ("x" != arg0) {
          str = (3 & tmp) | 8;
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
        error = new Error("Creating blobs from 'ArrayBuffer' and 'ArrayBufferView' are not supported");
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
      let obj = BlobModuleDefault;
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
    },
  },
  {
    key: "createFromOptions",
    value: function createFromOptions(_response) {
      let obj = map;
      obj.register(_response.blobId);
      let data = _response;
      obj = Object.create(Blob.default.prototype);
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
    },
  },
  {
    key: "release",
    value: function release(arg0) {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      const tmp = importDefault;
      const tmp3 = _modDef38;
      map.unregister(arg0);
      const obj = map;
      if (!obj2.has(arg0)) {
        BlobModuleDefault.release(arg0);
        const tmpResult = BlobModuleDefault;
      }
    },
  },
  {
    key: "addNetworkingHandler",
    value: function addNetworkingHandler() {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      const tmp = _modDef38;
      BlobModuleDefault.addNetworkingHandler();
    },
  },
  {
    key: "addWebSocketHandler",
    value: function addWebSocketHandler(arg0) {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      const tmp = _modDef38;
      BlobModuleDefault.addWebSocketHandler(arg0);
    },
  },
  {
    key: "removeWebSocketHandler",
    value: function removeWebSocketHandler(arg0) {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      const tmp = _modDef38;
      const result = BlobModuleDefault.removeWebSocketHandler(arg0);
    },
  },
  {
    key: "sendOverSocket",
    value: function sendOverSocket(data) {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      const tmp = _modDef38;
      BlobModuleDefault.sendOverSocket(data.data, arg1);
    },
  },
];
const tmp2 = _createClassDefault(BlobManager, null, items);
tmp2.isAvailable = BlobModuleDefault;

export default tmp2;
