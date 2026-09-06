// _runtime/metro/14368__.js
import _mod17 from "00017__.js";
import replaceByteInByteSequence from "../14369_replaceByteInByteSequence.js";

let closure_0 = null;
const BlobModule = _mod17.NativeModules.BlobModule;
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
replaceByteInByteSequence.URL.createObjectURL = function createObjectURL(data) {
  if (null === closure_0) {
    const _Error = Error;
    const error = new Error("Cannot create URL for blob!");
    throw error;
  } else {
    const _HermesInternal = HermesInternal;
    return "" + tmp + data.data.blobId + "?offset=" + data.data.offset + "&size=" + data.size;
  }
};
replaceByteInByteSequence.URL.revokeObjectURL = function revokeObjectURL(arg0) {};

export const URL = replaceByteInByteSequence.URL;
