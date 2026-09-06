// === Module 5136: uploader/UploadUtils ===

// Module 5136 (uploader/UploadUtils)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import js_shim_shim from "js_shim/shim" /* 1351 */;
import Upload from "Upload" /* 5128 */;
import AttachmentFile from "AttachmentFile" /* 5137 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/uploader/UploadUtils.tsx");
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
  const HTTP = HTTPUtils.HTTP;
  return HTTP.put(body);
};
class LibdiscoreHttpClient {
  constructor() {
    obj = closure_0(closure_1[3]);
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
LibdiscoreHttpClient.prototype["doUpload"] = function doUpload(body, arg1) {
  closure_0 = body;
  const httpClientAPI = js_shim_shim.getHttpClientAPI();
  if (null == httpClientAPI) {
    let _Error2 = Error;
    let error = new Error("Libdiscore client is not available");
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

export const doesImageMatchUpload = function doesImageMatchUpload(image, id) {
  if (id.id !== image.uri) {
    if (id.item.platform === Upload.UploadPlatform.REACT_NATIVE) {
      const item = id.item;
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
export const canUploadNatively = function canUploadNatively(platform) {
  let fileIsInAppDirResult = platform.platform === Upload.UploadPlatform.REACT_NATIVE;
  if (fileIsInAppDirResult) {
    fileIsInAppDirResult = null != platform.uri;
  }
  if (fileIsInAppDirResult) {
    let tmpResult = AttachmentFile;
    fileIsInAppDirResult = tmpResult.fileIsInAppDir(platform.uri);
  }
  if (fileIsInAppDirResult) {
    tmpResult = js_shim_shim;
    fileIsInAppDirResult = tmpResult.isLibdiscoreInitialized();
  }
  return fileIsInAppDirResult;
};
export { LibdiscoreHttpClient };