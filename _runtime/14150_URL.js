// === Module 14150: URL ===

// Module 14150 (URL)
import react_native from "react-native" /* 17 */;
import _mod14151 from "module_14151" /* 14151 */;

let closure_0 = null;
const BlobModule = react_native.NativeModules.BlobModule;
const tmp2 = BlobModule && typeof BlobModule.BLOB_URI_SCHEME === "string";
if (tmp2) {
  closure_0 = `${BlobModule.BLOB_URI_SCHEME}:`;
  if (typeof BlobModule.BLOB_URI_HOST === "string") {
    let _HermesInternal = HermesInternal;
    closure_0 = `${BlobModule.BLOB_URI_SCHEME}:` + "//" + BlobModule.BLOB_URI_HOST + "/";
  }
}
_mod14151.URL.createObjectURL = function createObjectURL(data) {
  if (null === closure_0) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Cannot create URL for blob!");
    throw error;
  } else {
    const _HermesInternal = HermesInternal;
    return "" + closure_0 + data.data.blobId + "?offset=" + data.data.offset + "&size=" + data.size;
  }
};
_mod14151.URL.revokeObjectURL = function revokeObjectURL(arg0) {

};

export const URL = _mod14151.URL;