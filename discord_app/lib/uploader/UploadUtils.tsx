// === Module 4836: doesImageMatchUpload ===

// Module 4836 (doesImageMatchUpload)
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import isBlockedDomain from "isBlockedDomain" /* 1917 */;
import cancel from "cancel" /* 4829 */;
import _getAttachmentFile from "_getAttachmentFile" /* 4837 */;

const result = obj132.fileFinishedImporting("lib/uploader/UploadUtils.tsx");
class DefaultHttpClient {
}
const prototype = DefaultHttpClient.prototype;
prototype["sliceBody"] = function sliceBody(body, start) {
  let substr = body;
  if (body instanceof File) {
    substr = body.slice(start);
  }
  return substr;
};
prototype["doUpload"] = function doUpload(body, fileByteRange) {
  fileByteRange = undefined;
  if (fileByteRange != null) {
    fileByteRange = fileByteRange.fileByteRange;
  }
  if (null != fileByteRange) {
    const self = this;
    body.body = this.sliceBody(body.body, fileByteRange.fileByteRange.start);
  }
  const HTTP = sendRequest.HTTP;
  return HTTP.put(body);
};
class LibdiscoreHttpClient {
  constructor() {
    obj = require("isBlockedDomain");
    if (obj.isLibdiscoreInitialized()) {
      return Object.create(new.target.prototype);
    } else {
      tmp = globalThis;
      _Error = Error;
      tmp2 = new.target;
      str = "Libdiscore is not loaded";
      tmp3 = new.target;
      error = new Error("Libdiscore is not loaded");
      tmp5 = error;
      throw error;
    }
  }
}
LibdiscoreHttpClient.prototype["doUpload"] = function doUpload(body) {
  const _require = body;
  httpClientAPI = _require(httpClientAPI[3]).getHttpClientAPI();
  if (null == httpClientAPI) {
    let _Error2 = Error;
    error = new Error("Libdiscore client is not available");
    throw error;
  } else {
    body = body.body;
    let uri;
    if (body != null) {
      uri = body.uri;
    }
    if (!tmp3) {
      // // eliminated: always false
      let _Error = Error;
      let error1 = new Error("No file path found in request body");
      throw error1;
    } else {
      uri = body.body.uri;
      const uri1 = body.body.uri;
      if (uri.startsWith("file://")) {
        let substr = uri1.slice(7);
      } else {
        substr = uri1;
      }
    }
    tmp3 = undefined !== uri && typeof body.body.uri === "string";
  }
};

export const doesImageMatchUpload = function doesImageMatchUpload(image, closure_0) {
  if (_require.id !== image.uri) {
    if (_require.item.platform === cancel.UploadPlatform.REACT_NATIVE) {
      const item = _require.item;
      const filename = image.filename;
      let tmp3 = item.originalUri === image.uri;
      if (!tmp3) {
        let tmp4 = null == filename;
        if (!tmp4) {
          const originalUri = item.originalUri;
          let hasItem;
          if (originalUri != null) {
            hasItem = originalUri.includes(filename);
          }
          tmp4 = !hasItem;
        }
        tmp3 = !tmp4;
      }
      return tmp3;
    } else {
      return false;
    }
  }
  return true;
};
export const calculateProgress = function calculateProgress(loaded, currentSize) {
  let num = 0;
  if (0 !== currentSize) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.floor(loaded / currentSize * 100), 100);
  }
  return num;
};
export { DefaultHttpClient };
export const canUploadNatively = function canUploadNatively(item) {
  let fileIsInAppDirResult = item.platform === cancel.UploadPlatform.REACT_NATIVE;
  if (fileIsInAppDirResult) {
    fileIsInAppDirResult = null != item.uri;
  }
  if (fileIsInAppDirResult) {
    let tmpResult = _getAttachmentFile;
    fileIsInAppDirResult = tmpResult.fileIsInAppDir(item.uri);
  }
  if (fileIsInAppDirResult) {
    tmpResult = isBlockedDomain;
    fileIsInAppDirResult = tmpResult.isLibdiscoreInitialized();
  }
  return fileIsInAppDirResult;
};
export { LibdiscoreHttpClient };