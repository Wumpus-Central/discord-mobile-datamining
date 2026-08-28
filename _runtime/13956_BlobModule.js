// _runtime/13956_BlobModule.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import parseURL from "13957_parseURL.js";

let closure_0 = null;
const BlobModule = get_ActivityIndicator.NativeModules.BlobModule;
let tmp2 = BlobModule;
if (BlobModule) {
  tmp2 = typeof BlobModule.BLOB_URI_SCHEME === "string";
}
if (tmp2) {
  closure_0 = `${BlobModule.BLOB_URI_SCHEME}:`;
  if (typeof BlobModule.BLOB_URI_HOST === "string") {
    let _HermesInternal = HermesInternal;
    closure_0 = `${BlobModule.BLOB_URI_SCHEME}:` + "//" + BlobModule.BLOB_URI_HOST + "/";
  }
}
parseURL.URL.createObjectURL = function createObjectURL(data) {
  if (null === closure_0) {
    const _Error = Error;
    error = new Error("Cannot create URL for blob!");
    throw error;
  } else {
    const _HermesInternal = HermesInternal;
    return "" + tmp + data.data.blobId + "?offset=" + data.data.offset + "&size=" + data.size;
  }
};
parseURL.URL.revokeObjectURL = function revokeObjectURL(arg0) {

};

export const URL = parseURL.URL;