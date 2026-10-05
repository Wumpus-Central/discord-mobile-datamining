// === Module 7272: uploader/UploadUtils ===

// Module 7272 (uploader/UploadUtils)
import shim from "shim" /* 562 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import UploadPlatform from "UploadPlatform" /* 7247 */;
import AttachmentFile from "AttachmentFile" /* 7273 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/uploader/UploadUtils.tsx");
class DefaultHttpClient {
  sliceBody(body, start) {
    let substr = body;
    if (body instanceof File) {
      substr = body.slice(start);
    }
    return substr;
  }
  doUpload(body, fileByteRange) {
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
  }
}
let prototype = DefaultHttpClient.prototype;
class LibdiscoreHttpClient {
  constructor() {
    const prototype = new.target.prototype;
    const obj = shim;
    if (obj.isLibdiscoreInitialized()) {
      return Object.create(prototype);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Libdiscore is not loaded");
      throw error;
    }
  }
  doUpload(body, fileByteRange) {
    let end;
    let start;
    let closure_0 = body;
    const obj = shim;
    const httpClientAPI = obj.getHttpClientAPI();
    if (null == httpClientAPI) {
      let _Error2 = Error;
      let self5 = this;
      let self6 = this;
      let error = new Error("Libdiscore client is not available");
      throw error;
    } else {
      body = body.body;
      let uri1;
      if (body != null) {
        uri1 = body.uri;
      }
      let tmp3;
      const tmp2 = undefined !== uri1 && typeof body.body.uri === "string";
      if (tmp2) {
        let substr;
        const uri = body.body.uri;
        const uri2 = body.body.uri;
        if (uri.startsWith("file://")) {
          substr = uri2.slice(7);
        } else {
          substr = uri2;
        }
        tmp3 = substr;
      }
      if (undefined !== tmp3) {
        if ("" !== tmp3) {
          const obj2 = { path: tmp3, byteRangeStart: start, byteRangeEnd: end };
          start = undefined;
          if (fileByteRange != null) {
            fileByteRange = fileByteRange.fileByteRange;
            if (fileByteRange != null) {
              start = fileByteRange.start;
            }
          }
          end = undefined;
          if (fileByteRange != null) {
            const fileByteRange2 = fileByteRange.fileByteRange;
            if (fileByteRange2 != null) {
              end = fileByteRange2.end;
            }
          }
          const request = { method: "PUT", body: obj2, headers: body.headers };
          let closure_2 = httpClientAPI.httpRequest(body.url, request);
          let self = this;
          let self2 = this;
          const promise = new Promise((arg0, arg1) => {
            let signal = arg0;
            let closure_1 = arg1;
            function pollStatus() {
              let body;
              let headers;
              if (null != httpClientAPI) {
                signal = signal.signal;
                let aborted;
                if (signal != null) {
                  aborted = signal.aborted;
                }
                if (aborted) {
                  const _Error3 = Error;
                  const self5 = this;
                  const self6 = this;
                  const error = new Error("Request cancelled");
                  closure_1(error);
                  httpClientAPI.cancelHttpRequest(closure_2);
                } else {
                  const httpRequestStatus = httpClientAPI.getHttpRequestStatus(closure_2);
                  let status;
                  if (httpRequestStatus != null) {
                    status = httpRequestStatus.status;
                  }
                  if ("success" === status) {
                    const response = httpRequestStatus.response;
                    let status1;
                    const tmp21 = signal;
                    if (response != null) {
                      status1 = response.status;
                    }
                    const response1 = { status: status1, headers, text: body };
                    const response2 = httpRequestStatus.response;
                    headers = undefined;
                    if (response2 != null) {
                      headers = response2.headers;
                    }
                    const response3 = httpRequestStatus.response;
                    body = undefined;
                    if (response3 != null) {
                      body = response3.body;
                    }
                    tmp21(response1);
                  } else {
                    let status2;
                    if (httpRequestStatus != null) {
                      status2 = httpRequestStatus.status;
                    }
                    if ("error" === status2) {
                      const _Error2 = Error;
                      const self3 = this;
                      const self4 = this;
                      const error1 = new Error(httpRequestStatus.error);
                      closure_1(error1);
                    } else {
                      let status3;
                      if (httpRequestStatus != null) {
                        status3 = httpRequestStatus.status;
                      }
                      if ("progressing" === status3) {
                        if (undefined !== signal.onRequestProgress) {
                          if (null != httpRequestStatus.uploaded_bytes) {
                            if (httpRequestStatus.uploaded_bytes > 0) {
                              const obj3 = { loaded: null, total: null };
                              ({ uploaded_bytes: obj2.loaded, total_bytes: obj2.total } = httpRequestStatus);
                              signal.onRequestProgress(obj3);
                            }
                          }
                        }
                        const _setTimeout = setTimeout;
                        const timerId = setTimeout(pollStatus, 50);
                      } else {
                        const _Error = Error;
                        const self = this;
                        const self2 = this;
                        const error2 = new Error("Unknown upload status");
                        closure_1(error2);
                      }
                    }
                  }
                }
              }
            }
            pollStatus();
          });
          return promise;
        }
      }
      let _Error = Error;
      let self3 = this;
      let self4 = this;
      let error1 = new Error("No file path found in request body");
      throw error1;
    }
  }
}

export const doesImageMatchUpload = function doesImageMatchUpload(image, id) {
  if (id.id !== image.uri) {
    if (id.item.platform === UploadPlatform.UploadPlatform.REACT_NATIVE) {
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
  let fileIsInAppDirResult = platform.platform === UploadPlatform.UploadPlatform.REACT_NATIVE && null != platform.uri;
  if (fileIsInAppDirResult) {
    const tmpResult = AttachmentFile;
    fileIsInAppDirResult = tmpResult.fileIsInAppDir(platform.uri);
  }
  if (fileIsInAppDirResult) {
    const tmpResult2 = shim;
    fileIsInAppDirResult = tmpResult2.isLibdiscoreInitialized();
  }
  return fileIsInAppDirResult;
};
export { LibdiscoreHttpClient };