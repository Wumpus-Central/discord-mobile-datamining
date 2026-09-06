// _runtime/00200_BlobManager.js
import _modDef38 from "metro/00038__.js";
import _createClassDefault from "metro/00042__createClass.js";
import BlobModuleDefault from "00201_BlobModule.js";
import Blob from "00203_Blob.js";
import register from "00204_register.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const BlobManager = global;
require = arg1;
class BlobManager {
  constructor() {
    tmp = closure_4(this, BlobManager);
    return;
  }
}
const entry = {
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
          if (data instanceof Blob.default) {
            let obj = { data: data.data, type: "blob" };
          } else {
            obj = { data: null, type: "string" };
            const _String = String;
            obj.data = String(data);
          }
          return obj;
        }
      }
      const error = new Error("Creating blobs from 'ArrayBuffer' and 'ArrayBufferView' are not supported");
      throw error;
    });
    const reduced = mapped.reduce((acc, type) => {
      if ("string" === type.type) {
        const _encodeURI = encodeURI;
        let sum = acc + BlobManager.unescape(encodeURI(type.data)).length;
      } else {
        sum = acc + type.data.size;
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
    obj.type = str;
    if (type) {
      let lastModified = type.lastModified;
    } else {
      const _Date = Date;
      lastModified = Date.now();
    }
    obj.lastModified = lastModified;
    return BlobManager.createFromOptions(obj);
  },
};
const items = [
  entry,
  {
    key: "createFromOptions",
    value: function createFromOptions(_response) {
      let obj = register;
      obj.register(_response.blobId);
      let data = _response;
      obj = Object.create(Blob.default.prototype);
      if (null == _response.__collector) {
        obj = {};
        const merged = Object.assign(_response);
        let result = null;
        if (null != BlobManager.__blobCollectorProvider) {
          result = BlobManager.__blobCollectorProvider(tmp7);
        }
        obj.__collector = result;
        data = obj;
      }
      return Object.assign(obj, { data });
    },
  },
  {
    key: "release",
    value: function release(arg0) {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      register.unregister(arg0);
      if (!obj2.has(arg0)) {
        BlobModuleDefault.release(arg0);
        const tmpResult = BlobModuleDefault;
      }
      obj2 = register;
    },
  },
  {
    key: "addNetworkingHandler",
    value: function addNetworkingHandler() {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      BlobModuleDefault.addNetworkingHandler();
    },
  },
  {
    key: "addWebSocketHandler",
    value: function addWebSocketHandler(arg0) {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      BlobModuleDefault.addWebSocketHandler(arg0);
    },
  },
  {
    key: "removeWebSocketHandler",
    value: function removeWebSocketHandler(arg0) {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      const result = BlobModuleDefault.removeWebSocketHandler(arg0);
    },
  },
  {
    key: "sendOverSocket",
    value: function sendOverSocket(data, arg1) {
      _modDef38(BlobModuleDefault, "NativeBlobModule is available.");
      BlobModuleDefault.sendOverSocket(data.data, arg1);
    },
  },
];
const tmp2 = _createClassDefault(BlobManager, null, items);
tmp2.isAvailable = BlobModuleDefault;

export default tmp2;
