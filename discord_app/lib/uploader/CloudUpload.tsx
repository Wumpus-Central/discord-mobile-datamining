// discord_app/lib/uploader/CloudUpload.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import handleConnectionInfoChange from "handleConnectionInfoChange";
import _slicedToArray from "_slicedToArray";
import getUserAgnosticState from "getUserAgnosticState";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import closure_9 from "handleConnectionInfoChange";
import ME from "ME";
import "cancel";
import set from "_slicedToArray";

let c10;
let unpackModuleId;
let require = arg1;
let closure_3 = ["Content-Range"];
({ AbortCodes: c10, AnalyticEvents: unpackModuleId } = ME);
let closure_12 = new require("getUserAgnosticState")("CloudUpload.tsx");
let set = new Set([429]);
let ResumableUploadError;
class ResumableUploadError extends Error {
  constructor(arg0) {
    obj = arg1;
    num = undefined;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ cause, response } = obj);
    error = cause;
    tmp = ResumableUploadError;
    if (cause == null) {
      tmp3 = globalThis;
      str = undefined;
      if (response != null) {
        str = response.text;
      }
      if (str == null) {
        str = "Unknown error";
      }
      _HermesInternal = HermesInternal;
      str2 = "";
      tmp4 = new.target;
      tmp5 = new.target;
      error = new Error("" + str);
    }
    errorKind = ResumableUploadError.getErrorKind(error, response);
    if ("server_error" !== errorKind) {
      str3 = "client_error";
      if ("client_error" !== errorKind) {
        tmp7 = globalThis;
        _HermesInternal2 = HermesInternal;
        str4 = ":";
        str5 = "";
        combined = "" + global + ":" + errorKind;
      }
      tmp10 = new.target;
      tmp11 = ResumableUploadError;
      obj = { cause: null };
      obj[0] = cause;
      tmp12 = new.target;
      tmp13 = new.target;
      tmp14 = combined;
      tmp15 = obj;
      response = new response(combined, obj, errorKind, ":status_", tmp9, str, num, concat);
      tmp17 = response;
      // ThrowIfThisInitialized (0x7c)
      str6 = "ResumableUploadError";
      response.name = "ResumableUploadError";
      response.phase = global;
      response.kind = errorKind;
      response.messageShort = combined;
      return response;
    }
    num = undefined;
    if (response != null) {
      num = response.status;
    }
    if (num == null) {
      num = 0;
    }
    response = HermesInternal;
    concat = HermesInternal.concat;
    tmp9 = num;
    combined = concat(global, ":", errorKind, ":status_", num);
    return;
  }
}
ResumableUploadError["getErrorKind"] = function getErrorKind(error, response) {
  let num;
  if (response != null) {
    num = response.status;
  }
  if (num == null) {
    num = 0;
  }
  const hasItem = set.has(num);
  const formatted = error.message.toLowerCase();
  let hasItem1 = formatted.includes("network");
  if (!hasItem1) {
    const formatted1 = error.message.toLowerCase();
    hasItem1 = formatted1.includes("terminated");
    const str2 = error.message;
  }
  if (!hasItem1) {
    const formatted2 = error.message.toLowerCase();
    hasItem1 = formatted2.includes("offline");
    const str4 = error.message;
  }
  if (!hasItem1) {
    const formatted3 = error.message.toLowerCase();
    hasItem1 = formatted3.includes("changed");
    const str6 = error.message;
  }
  if (num < 500) {
    let str9 = "client_error";
    if (!hasItem) {
      let str10 = "unknown";
      if (hasItem1) {
        str10 = "network_error";
      }
      str9 = str10;
    }
    let str8 = str9;
  } else {
    str8 = "server_error";
  }
  return str8;
};
ResumableUploadError["rejectionHandler"] = function rejectionHandler(status_check) {
  let closure_0 = status_check;
  return (arg0) => {
    if (arg0 instanceof status_check(outer1_2[8]).HTTPResponseError) {
      let obj = { response: null };
      obj[0] = arg0;
      throw new outer1_17(status_check, obj);
    } else {
      const _Error = Error;
      obj = { cause: null };
      if (arg0 instanceof Error) {
        obj[0] = arg0;
        throw new tmp2(tmp3, obj);
      } else {
        const _Error2 = Error;
        const _String = String;
        const error = new Error(String(arg0));
        obj[0] = error;
        throw new tmp2(tmp3, obj);
      }
    }
  };
};
ResumableUploadError.prototype["canRetry"] = function canRetry() {
  const self = this;
  let tmp = "server_error" === this.kind;
  if (!tmp) {
    tmp = "network_error" === self.kind;
  }
  if (!tmp) {
    tmp = "client_error" === self.kind;
  }
  return tmp;
};
let obj = { NOT_STARTED: "NOT_STARTED", STARTED: "STARTED", UPLOADING: "UPLOADING", ERROR: "ERROR", COMPLETED: "COMPLETED", CANCELED: "CANCELED", REMOVED_FROM_MSG_DRAFT: "REMOVED_FROM_MSG_DRAFT" };
let closure_16 = function UploadAnalytics() {
  const obj = Object.create(new.target.prototype);
  obj[0] = {};
  return obj;
}.prototype;
let CloudUpload;
class CloudUpload extends tmp5 {
  constructor(arg0, arg1, arg2, arg3) {
    tmp5 = new CloudUpload(global, tmp4, tmp3, new.target, global, new.target, tmp2, CloudUpload, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp5;
    tmp5.status = canRetry.NOT_STARTED;
    tmp5.loaded = 0;
    tmp5.reactNativeFilePrepped = false;
    tmp6 = UploadAnalytics;
    if (typeof UploadAnalytics !== "fileFinishedImporting") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    obj = Object.create(tmp6.prototype);
    obj[0] = {};
    tmp5.uploadAnalytics = obj;
    tmp5.uploadAttempts = 0;
    tmp5._aborted = false;
    tmp5.createResumeAwareProgressFn = function createResumeAwareProgressFn(arg0) {
      let closure_0 = arg0;
      return (loaded) => {
        const sum = loaded.loaded + closure_0;
        closure_0.emit("progress", sum, loaded.total + closure_0, sum - closure_0.loaded);
        closure_0.loaded = sum;
      };
    };
    tmp5.channelId = arg1;
    file = global.file;
    num = undefined;
    if (file != null) {
      num = file.size;
    }
    if (num == null) {
      num = 0;
    }
    tmp5.preCompressionSize = num;
    file2 = global.file;
    num2 = undefined;
    if (file2 != null) {
      num2 = file2.size;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp5.currentSize = num2;
    tmp5.reactNativeFileIndex = importDefault;
    if (null != importAll) {
      tmp5.allowOptimization = importAll;
    }
    tmp8 = closure_0;
    tmp9 = closure_2;
    tmp10 = global.platform === require("cancel").UploadPlatform.WEB && null != global.compressionMetadata;
    if (tmp10) {
      tmp5.mimeType = global.compressionMetadata.originalContentType;
    }
    abortController = new AbortController();
    tmp5._abortController = abortController;
    if (null == tmp5.origin) {
      tmp12 = new.target;
      tmp13 = new.target;
      defaultHttpClient = new require("doesImageMatchUpload").DefaultHttpClient();
      tmp15 = defaultHttpClient;
      tmp5._uploadHttpClient = defaultHttpClient;
      tmp5._libdiscoreEnabled = false;
      return tmp5;
    } else {
      if (typeof tmp5.origin === "y") {
        origin = tmp5.origin;
      } else {
        origin = require("cancel").UploadOrigin[tmp5.origin];
      }
      tmp5.uploadAnalytics.origin = origin;
    }
    return;
  }
  resetState() {
    self = this;
    this.status = canRetry.NOT_STARTED;
    this.uploadedFilename = undefined;
    this.responseUrl = undefined;
    this.responseUrlSetAt = undefined;
    this.error = undefined;
    this.startTime = undefined;
    tmp = UploadAnalytics;
    if (typeof UploadAnalytics !== "fileFinishedImporting") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    obj = Object.create(tmp.prototype);
    obj[0] = {};
    self.uploadAnalytics = obj;
    self.uploadAttempts = 0;
    self._aborted = false;
    abortController = new AbortController();
    self._abortController = abortController;
    return super.resetState();
  }
}
const prototype = CloudUpload.prototype;
CloudUpload["fromJson"] = function fromJson(item) {
  let tmp = new CloudUpload(item.item, item.channelId, item.reactNativeFileIndex);
  const require = tmp;
  const entries = Object.entries(item);
  item = entries.forEach((arg0) => {
    const tmp = outer1_6(arg0, 2);
    const first = tmp[0];
    if (!first.startsWith("_")) {
      closure_0[first] = tmp[1];
    }
  });
  if (tmp.status !== obj.COMPLETED) {
    tmp.status = obj.NOT_STARTED;
  }
  return tmp;
};
prototype["parseRangeHeader"] = function parseRangeHeader(str) {
  const match = str.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
  let tmp2 = null;
  if (null != match) {
    const _parseInt = parseInt;
    const items = [parseInt(match[1], 10), ];
    const _parseInt2 = parseInt;
    items[1] = parseInt(match[2], 10);
    tmp2 = items;
  }
  return tmp2;
};
prototype["retryOpts"] = function retryOpts() {
  if (this.item.platform === require(4726) /* cancel */.UploadPlatform.REACT_NATIVE) {
    let obj = { timeout: null, backoff: null, retries: 12 };
    obj[0] = importDefault(687).Millis.HOUR;
    let tmp8 = importDefault(584);
    const result = 0.5 * importDefault(687).Millis.SECOND;
    tmp8 = new tmp8(result, 30 * importDefault(687).Millis.MINUTE);
    obj[1] = tmp8;
  } else {
    obj = { timeout: null, retries: 12, backoff: null };
    obj[0] = importDefault(687).Millis.HOUR;
    const tmp5 = new importDefault(584)();
    obj[2] = tmp5;
  }
  return obj;
};
prototype["createAttachmentUrlRetryOpts"] = function createAttachmentUrlRetryOpts() {
  const self = this;
  if (this.item.platform === require(4726) /* cancel */.UploadPlatform.REACT_NATIVE) {
    let obj = { timeout: null, backoff: null, retries: 8 };
    obj = { response: null, deadline: null };
    obj[0] = 30 * importDefault(687).Millis.SECOND;
    obj[1] = 30 * importDefault(687).Millis.MINUTE;
    obj[0] = obj;
    let tmp4 = importDefault(584);
    const result = 0.5 * importDefault(687).Millis.SECOND;
    tmp4 = new tmp4(result, 60 * importDefault(687).Millis.SECOND);
    obj[1] = tmp4;
    let retryOptsResult = obj;
  } else {
    retryOptsResult = self.retryOpts();
  }
  return retryOptsResult;
};
prototype["supportsResume"] = function supportsResume() {
  let _libdiscoreEnabled = this._libdiscoreEnabled;
  if (!_libdiscoreEnabled) {
    _libdiscoreEnabled = this.item.platform !== require(4726) /* cancel */.UploadPlatform.REACT_NATIVE;
  }
  return _libdiscoreEnabled;
};
prototype["uploadFileToCloud"] = function uploadFileToCloud() {
  const self = this;
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (null == v0.responseUrl) {
            const _Error = Error;
            const error = new Error("_uploadFileToCloud - responseUrl is not set");
            throw error;
          } else {
            const _HermesInternal3 = HermesInternal;
            const combined = "Uploading " + obj8.id;
            if (obj8.item.platform === v0(outer1_2[9]).UploadPlatform.REACT_NATIVE) {
              const _HermesInternal2 = HermesInternal;
              let combined1 = "filename=" + obj8.item.filename + ", uri=" + obj8.item.uri;
            } else {
              const _HermesInternal = HermesInternal;
              combined1 = "filename=" + obj8.item.file.name;
            }
            outer1_12.log(combined, combined1);
            if (obj8.item.platform === v0(outer1_2[9]).UploadPlatform.REACT_NATIVE) {
              const obj1 = { type: null, uri: null, name: null };
              obj1[0] = obj8.item.mimeType;
              obj1[1] = obj8.item.uri;
              obj1[2] = obj8.item.filename;
              let str6 = "application/octet-stream";
              if (null != obj1.type) {
                str6 = "application/octet-stream";
                if ("application/json" !== obj1.type) {
                  str6 = obj1.type;
                }
              }
              let str4 = str6;
              let file = obj1;
            } else {
              file = obj8.item.file;
              str4 = "application/octet-stream";
            }
            if (tmp26Result.canUploadNatively(obj8.item)) {
              const libdiscoreHttpClient = new tmp26(tmp27[10]).LibdiscoreHttpClient();
              obj8._uploadHttpClient = libdiscoreHttpClient;
              obj8._libdiscoreEnabled = true;
              outer1_12.log("Using libdiscore client for file upload");
            }
            c1 = 1;
            v0 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = obj8.uploadFileWithResumption(obj8.responseUrl, file, str4);
            return obj2;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp17) {
        v0 = tmp;
        throw tmp17;
      }
    }
  })();
};
prototype["getResumePosition"] = function getResumePosition(responseUrl) {
  let closure_0 = responseUrl;
  const self = this;
  return callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const obj1 = { url: null, headers: null, rejectWithError: true, retries: 0, timeout: null, signal: null };
            obj1[0] = c0;
            obj1[1] = { "Content-Range": "bytes */*" };
            const obj2 = { deadline: null };
            obj2[0] = 30 * v0(outer1_2[11]).Millis.SECOND;
            obj1[4] = obj2;
            obj1[5] = v0._abortController.signal;
            const _uploadHttpClient = v0._uploadHttpClient;
            const doUploadResult = _uploadHttpClient.doUpload(obj1);
            v0 = 1;
            c0 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = _uploadHttpClient.doUpload(obj1).then((status) => {
              if (200 !== status.status) {
                if (201 !== status.status) {
                  let currentSize = outer1_14.rejectionHandler("status_check")(status);
                }
                return currentSize;
              }
              currentSize = c1.currentSize;
            }).catch((status) => {
              if (status instanceof v3(outer1_2[8]).HTTPResponseError) {
                if (308 === status.status) {
                  let str = status.headers.range;
                  if (str == null) {
                    str = "";
                  }
                  const parseRangeHeaderResult = c1.parseRangeHeader(str);
                  let num2 = 0;
                  if (null != parseRangeHeaderResult) {
                    num2 = parseRangeHeaderResult[1] + 1;
                  }
                  return num2;
                }
              }
              return outer1_14.rejectionHandler("status_check")(status);
            });
            return obj3;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp5) {
        c0 = tmp;
        throw tmp5;
      }
    }
  })();
};
prototype["startOrResumeUpload"] = function startOrResumeUpload(c3, outer1_4) {
  let closure_0 = c3;
  let num = outer1_4;
  if (outer1_4 === undefined) {
    num = 0;
  }
  const self = this;
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp3;
            let closure_1 = tmp2;
            let obj3;
            let closure_0;
            let _catch = outer1_2;
            let obj4 = globalThis;
            const _HermesInternal = HermesInternal;
            outer1_12.log("Attempting to upload attachment with resumeFrom: " + outer1_1 + " and attempts: " + outer1_2.uploadAttempts);
            if (outer1_1 > 0) {
              const uploadAnalytics = _catch.uploadAnalytics;
              uploadAnalytics.uploadResumptionCount = uploadAnalytics.uploadResumptionCount + 1;
              const headers = outer1_0.headers;
              closure_0 = headers;
              if (headers == null) {
                closure_0 = {};
              }
              const obj1 = {};
              const merged = Object.assign(closure_0);
              obj1["Content-Range"] = "bytes " + tmp38 + "-" + _catch.currentSize - 1 + "/" + _catch.currentSize;
              outer1_0.headers = obj1;
              let tmp18 = tmp19;
            } else {
              tmp18 = outer1_0;
              if (null != outer1_0.headers) {
                const headers2 = tmp16.headers;
                Content_Range = headers2["Content-Range"];
                tmp16.headers = v0(headers2, c3);
                tmp18 = tmp16;
              }
            }
            obj4 = outer1_1(outer1_2[13]);
            tmp18.onRequestProgress = obj4.throttle(_catch.createResumeAwareProgressFn(outer1_1), 50);
            const _uploadHttpClient = _catch._uploadHttpClient;
            const obj2 = { fileByteRange: null };
            obj3 = { start: null };
            obj3[0] = outer1_1;
            obj2[0] = obj3;
            _catch = _uploadHttpClient.doUpload(tmp18, obj2).catch;
            _catch(outer1_14.rejectionHandler("upload"));
            c3 = 1;
            v0 = 1;
            const doUploadResult = _uploadHttpClient.doUpload(tmp18, obj2);
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          closure_0 = arg1;
          if (200 !== closure_0.status) {
            if (201 !== closure_0.status) {
              const obj5 = { response: null };
              obj5[0] = closure_0;
              throw new outer1_14("upload", obj5);
            }
          }
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = closure_0;
          return obj;
        }
      } catch (tmp29) {
        v0 = tmp;
        throw tmp29;
      }
    }
  })();
};
prototype["uploadFileWithResumption"] = function uploadFileWithResumption(responseUrl, file, arg2) {
  let closure_0 = responseUrl;
  let closure_1 = file;
  let closure_2 = arg2;
  const self = this;
  return callback(function*() {
    let iter4;
    let retries;
    if (c9 === 2) {
      c9 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let _loop = tmp3;
            let c4 = tmp5;
            let v;
            iter4 = undefined;
            let next;
            let iter3;
            c4 = undefined;
            _loop = undefined;
            const retryOptsResult = outer1_3.retryOpts();
            ({ backoff: iter4, retries } = retryOptsResult);
            next = retries;
            let obj1 = { url: null, body: null, headers: null, signal: null, onRequestProgress: null, retries: 0, rejectWithError: true, timeout: null };
            obj1[0] = outer1_0;
            obj1[1] = outer1_1;
            let obj2 = { "Content-Type": null };
            obj2[0] = outer1_2;
            obj1[2] = obj2;
            obj1[3] = outer1_3._abortController.signal;
            obj1[4] = outer1_1(outer1_2[13]).throttle(outer1_3.createResumeAwareProgressFn(0), 50);
            obj1[7] = retryOptsResult.timeout;
            iter3 = obj1;
            c4 = 0;
            _loop = function* _loop() {
              if (c6 === 2) {
                c6 = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp7 === 3) {
                if (arg0 === 1) {
                  throw arg1;
                } else if (arg0 === 2) {
                  let obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c6 = 2;
                  if (0 === c5) {
                    if (arg0 === 1) {
                      c6 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c6 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      let closure_2 = tmp3;
                      let c1 = tmp5;
                      let responseUrl;
                      c1 = undefined;
                      closure_2 = undefined;
                      c3.uploadAttempts = c3.uploadAttempts + 1;
                      c3.uploadAnalytics.numUploadAttempts = c3.uploadAttempts;
                      c3 = 1;
                      responseUrl = c3.responseUrl;
                      c5 = 2;
                      c6 = 1;
                      let obj1 = { value: null, done: false };
                      obj1[0] = c3.ensureFreshResponseUrl();
                      return obj1;
                    }
                  } else if (1 === tmp8) {
                    c3 = 0;
                    c3 = _objectWithoutProperties;
                    if (c3 instanceof outer2_14) {
                      if (iter3.canRetry()) {
                        const _HermesInternal2 = HermesInternal;
                        outer2_12.warn("Error uploading " + c3.id + ": " + c3.message + ", attempting resumption");
                        c3.uploadAnalytics.uploadResumptionReason = c3.messageShort;
                        let obj8 = iter4(next[14]);
                        c5 = 5;
                        c6 = 1;
                        let obj2 = { value: null, done: false };
                        obj2[0] = obj8.awaitOnline();
                        return obj2;
                      }
                    }
                    const _HermesInternal = HermesInternal;
                    outer2_12.warn("Unrecoverable error uploading " + c3.id + ": " + iter3.message);
                    throw iter3;
                  } else {
                    if (2 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        c6 = 3;
                        const obj3 = { value: null, done: true };
                        obj3[0] = arg1;
                        return obj3;
                      } else {
                        c3.url = c3.responseUrl;
                        if (outer1_0 !== c3.responseUrl) {
                          let outer1_4 = 0;
                          c3.loaded = 0;
                        } else if (c3.uploadAttempts > 1) {
                          c5 = 4;
                          c6 = 1;
                          const obj4 = { value: null, done: false };
                          obj4[0] = c3.trackTime("resumptionCheckTimeMs", _loop(function*() {
                            if (c0 === 2) {
                              c0 = 3;
                              HermesBuiltin.throwTypeError();
                            } else if (tmp3 === 3) {
                              if (arg0 === 1) {
                                throw arg1;
                              } else if (arg0 === 2) {
                                let obj = { value: null, done: true };
                                obj[0] = arg1;
                                return obj;
                              } else {
                                return { value: "HermesInternal", done: null };
                              }
                            } else {
                              try {
                                c0 = 2;
                                if (0 === c1) {
                                  if (arg0 === 1) {
                                    c0 = 3;
                                    throw arg1;
                                  } else if (arg0 === 2) {
                                    c0 = 3;
                                    obj = { value: null, done: true };
                                    obj[0] = arg1;
                                    return obj;
                                  } else {
                                    c1 = 1;
                                    c0 = 1;
                                    const obj1 = { value: null, done: false };
                                    obj1[0] = outer1_3.getResumePosition(outer1_3.responseUrl);
                                    return obj1;
                                  }
                                } else if (arg0 === 1) {
                                  c0 = 3;
                                  throw arg1;
                                } else if (arg0 === 2) {
                                  c0 = 3;
                                  const obj2 = { value: null, done: true };
                                  obj2[0] = arg1;
                                  return obj2;
                                } else {
                                  c0 = 3;
                                  obj = { value: null, done: true };
                                  obj[0] = arg1;
                                  return obj;
                                }
                              } catch (tmp6) {
                                c0 = tmp;
                                throw tmp6;
                              }
                            }
                          }));
                          return obj4;
                        }
                        responseUrl = {};
                        c3.startOrResumeUpload(c3, outer1_4);
                        c5 = 3;
                        c6 = 1;
                      }
                    } else if (3 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        c6 = 3;
                        const obj5 = { value: null, done: true };
                        obj5[0] = arg1;
                        return obj5;
                      } else {
                        responseUrl.v = arg1;
                        c3 = 0;
                        c6 = 3;
                        const obj6 = { value: null, done: true };
                        obj6[0] = responseUrl;
                        return obj6;
                      }
                    } else if (4 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw arg1;
                      } else if (arg0 !== 2) {
                        const outer1_1 = arg1;
                        c3.uploadAnalytics.uploadResumptionPosition = outer1_1;
                        let num7 = 0;
                        if (c3.supportsResume()) {
                          num7 = outer1_1;
                        }
                        outer1_4 = num7;
                        c3.loaded = outer1_4;
                      }
                    } else if (5 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c6 = 3;
                        const obj7 = { value: null, done: true };
                        obj7[0] = arg1;
                        return obj7;
                      } else {
                        closure_2 = c1.fail();
                        const _HermesInternal3 = HermesInternal;
                        outer2_12.log("Waiting " + closure_2 + "ms before attachment upload attempt " + c3.uploadAttempts + 1);
                        const promise = new Promise((arg0) => setTimeout(arg0, closure_2));
                        c5 = 6;
                        c6 = 1;
                        obj8 = { value: null, done: false };
                        obj8[0] = promise;
                        return obj8;
                      }
                    } else if (arg0 === 1) {
                      c6 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c6 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      c6 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                    c3 = 0;
                    c6 = 3;
                    const obj9 = { value: null, done: true };
                    obj9[0] = arg1;
                    return obj9;
                  }
                } catch (tmp59) {
                  _objectWithoutProperties = tmp59;
                  if (tmp4 === c3) {
                    c6 = tmp2;
                    throw tmp59;
                  } else {
                    c5 = tmp;
                  }
                }
              }
            };
            if (outer1_3.uploadAttempts <= retries) {
              if (!outer1_3._aborted) {
                iter3 = _loop()[tmp61.iterator]();
                HermesBuiltin.ensureObject("iterator is not an object");
                next = iter3.next;
                v = undefined;
                const tmp30 = _loop();
              }
            }
            const _Error = Error;
            let _HermesInternal = HermesInternal;
            const error = new Error("Upload failed after " + iter3.uploadAttempts + " attempts");
            throw error;
          }
        } else {
          if (1 !== tmp8) {
            let c6 = 0;
            const method = HermesBuiltin.getMethod("throw");
            if (method === undefined) {
              const method1 = HermesBuiltin.getMethod("return");
              if (method1 !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              HermesBuiltin.throwTypeError();
            } else {
              const iter = method(tmp10);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              if (iter.done) {
                iter4 = iter;
              } else {
                c8 = 1;
                c9 = 1;
                return iter;
              }
            }
            const value = iter4.value;
            v = value;
            if (value) {
              c9 = 3;
              let obj3 = { value: null, done: true };
              obj3[0] = v.v;
              return obj3;
            }
            tmp10 = getUserAgnosticState;
          }
          c6 = 1;
          if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else {
            v = arg1;
            if (arg0 === 2) {
              v = arg1;
              c6 = 0;
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 === undefined) {
                c9 = 3;
                let obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                const iter2 = method2(v);
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
                if (iter2.done) {
                  c9 = 3;
                  obj = { value: null, done: true };
                  obj[0] = iter2.value;
                  return obj;
                } else {
                  c8 = 1;
                  c9 = 1;
                  return iter2;
                }
              }
            } else {
              c6 = 0;
              const tmp21 = arg1;
            }
          }
        }
        iter4 = next(tmp21);
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        if (!iter4.done) {
          c8 = 1;
          c9 = 1;
          return iter4;
        }
      } catch (tmp52) {
        getUserAgnosticState = tmp52;
        if (tmp4 === c6) {
          c9 = tmp2;
          throw tmp52;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
prototype["getSize"] = function getSize() {
  const self = this;
  return callback(function*() {
    if (c1 === 2) {
      c1 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let fileSize;
            const getFileSize = outer1_0(table[15]).getFileSize;
            if (getFileSize != null) {
              fileSize = getFileSize(outer1_0.item.uri);
            }
            table = 1;
            c1 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = fileSize;
            return obj1;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          let c0 = arg1;
          if (arg1 == null) {
            c0 = 0;
          }
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = c0;
          return obj;
        }
      } catch (tmp12) {
        c1 = tmp;
        throw tmp12;
      }
    }
  })();
};
prototype["trackTime"] = function trackTime(compressTimeMs, arg1) {
  let closure_0 = compressTimeMs;
  let closure_1 = arg1;
  const self = this;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp3;
            let closure_0 = tmp5;
            closure_0 = undefined;
            const _performance4 = performance;
            closure_0 = performance.now();
            let c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_1();
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          const _performance3 = performance;
          closure_2.uploadAnalytics.timing[closure_0] = performance.now() - closure_0;
          throw closure_2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          const _performance2 = performance;
          closure_2.uploadAnalytics.timing[closure_0] = performance.now() - closure_0;
          c5 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          c3 = 0;
          const _performance = performance;
          closure_2.uploadAnalytics.timing[closure_0] = performance.now() - closure_0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp27) {
        closure_2 = tmp27;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp27;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["upload"] = function upload() {
  const self = this;
  return callback(function*() {
    if (status === 2) {
      status = 3;
      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
    } else {
      throwTypeErrorResult = arg1;
      throwTypeErrorResult = arg0;
      throwTypeErrorResult = tmp7;
      throwTypeErrorResult = globalThis;
      throwTypeErrorResult = null;
      if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          status = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              status = 3;
              throw arg1;
            } else if (arg0 === 2) {
              status = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c4 = tmp3;
              let c3 = tmp9;
              let c0;
              status = undefined;
              let closure_2;
              c3 = undefined;
              c4 = undefined;
              let handleConnectionInfoChange;
              let c6;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = outer1_15;
              if (outer1_0.status !== outer1_15.COMPLETED) {
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_15;
                throwTypeErrorResult = outer1_0.setStatus(outer1_15.STARTED);
                throwTypeErrorResult = outer1_0;
                const _performance = performance;
                outer1_0.startTime = performance.now();
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_0.trackUploadStart();
                throwTypeErrorResult = outer1_0;
                if (false === outer1_0.reactNativeFilePrepped) {
                  throwTypeErrorResult = outer1_0;
                  c7 = 1;
                  status = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = outer1_0.reactNativeCompressAndExtractData();
                  return obj1;
                }
              }
              status = 3;
              c6 = 0;
              status = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } else {
            if (1 === tmp9) {
              if (arg0 === 1) {
                status = 3;
                throw arg1;
              } else if (arg0 === 2) {
                status = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              }
            } else if (2 === tmp9) {
              if (arg0 === 1) {
                status = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                throwTypeErrorResult = c3;
                outer1_0 = arg1;
                throwTypeErrorResult = outer1_0;
                if (null != outer1_0) {
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = outer1_0;
                  if (null != outer1_0.convertedFile) {
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_0;
                    outer1_0.item.file = outer1_0.convertedFile;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_0;
                    outer1_0.currentSize = outer1_0.convertedFile.size;
                  }
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = outer1_0;
                  if (null != outer1_0.convertedMimeType) {
                    throwTypeErrorResult = c3;
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_0;
                    outer1_0.uploadAnalytics.convertedMimeType = outer1_0.convertedMimeType;
                  }
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = outer1_0;
                  if (null != outer1_0.hashTimeMs) {
                    throwTypeErrorResult = c3;
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_0;
                    outer1_0.uploadAnalytics.timing.hashTimeMs = outer1_0.hashTimeMs;
                  }
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = outer1_0;
                  if (null != outer1_0.conversionFailureReason) {
                    throwTypeErrorResult = c3;
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_0;
                    outer1_0.uploadAnalytics.conversionFailureReason = outer1_0.conversionFailureReason;
                  }
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = c4;
                  throwTypeErrorResult = outer1_0;
                  throwTypeErrorResult = outer1_0;
                  outer1_0.uploadAnalytics.timing.compressTimeMs = outer1_0.compressTimeMs;
                }
                throwTypeErrorResult = c4;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_2;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_0(outer1_2[16]).default.getUploadPayload(outer1_0);
                c7 = 3;
                status = 1;
                const _default = outer1_0(outer1_2[16]).default;
              }
            } else if (3 === tmp9) {
              if (arg0 === 1) {
                status = 3;
                throw arg1;
              } else if (arg0 === 2) {
                status = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                throwTypeErrorResult = c3;
                throwTypeErrorResult = c4;
                const outer1_1 = arg1;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_2;
                throwTypeErrorResult = outer1_0;
                outer1_2 = outer1_0(outer1_2[17]).getUploadTarget(outer1_0.item.target);
                throwTypeErrorResult = outer1_1;
                if (null != outer1_1.filename) {
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = outer1_1;
                  if ("" !== outer1_1.filename) {
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = outer1_0;
                    const currentSize2 = outer1_0.currentSize;
                    throwTypeErrorResult = outer1_0;
                    if (0 !== outer1_0.currentSize) {
                      let obj5 = outer1_0(outer1_2[19]);
                      const outer1_3 = obj5.getKestrelConfig({ location: "CloudUpload.upload.postCompressionCheck" });
                      let obj6 = outer1_0(outer1_2[19]);
                      const outer1_4 = obj6.getEffectiveKestrelLimit(outer1_3, outer1_2.getMaxFileSize(outer1_0.channelId));
                      const currentSize = outer1_0.currentSize;
                      c0 = currentSize;
                      if (currentSize == null) {
                        c0 = 0;
                      }
                      if (c0 > outer1_4) {
                        outer1_0.handleError(outer1_10.ENTITY_TOO_LARGE);
                      } else {
                        throwTypeErrorResult = c4;
                        throwTypeErrorResult = c7;
                        if (c7.get("upload_fail_50")) {
                          const _Math = Math;
                          if (Math.random() < 0.5) {
                            const _setTimeout = setTimeout;
                            const timerId = setTimeout(() => {
                              c0.handleError(500);
                            }, 1000);
                          }
                        }
                        c6 = 1;
                        const _HermesInternal3 = HermesInternal;
                        outer1_12.log("Requesting upload url for " + outer1_0.id);
                        c7 = 6;
                        status = 1;
                        let obj4 = { value: null, done: false };
                        obj4[0] = outer1_0.trackTime("getUploadUrlTimeMs", outer1_5(function*() {
                          if (v0 === 2) {
                            v0 = 3;
                            HermesBuiltin.throwTypeError();
                          } else if (tmp3 === 3) {
                            if (arg0 === 1) {
                              throw arg1;
                            } else if (arg0 === 2) {
                              let obj = { value: null, done: true };
                              obj[0] = arg1;
                              return obj;
                            } else {
                              return { value: "HermesInternal", done: null };
                            }
                          } else {
                            try {
                              v0 = 2;
                              if (0 === c1) {
                                if (arg0 === 1) {
                                  v0 = 3;
                                  throw arg1;
                                } else if (arg0 === 2) {
                                  v0 = 3;
                                  obj = { value: null, done: true };
                                  obj[0] = arg1;
                                  return obj;
                                } else {
                                  const createAttachmentURL = outer1_2.getCreateAttachmentURL(v0.channelId);
                                  const HTTP = v0(table[8]).HTTP;
                                  const obj1 = { url: null, body: null };
                                  obj1[0] = createAttachmentURL;
                                  const obj2 = { files: null };
                                  const items = [c1];
                                  obj2[0] = items;
                                  obj1[1] = obj2;
                                  const merged = Object.assign(v0.createAttachmentUrlRetryOpts());
                                  obj1.rejectWithError = false;
                                  c1 = 1;
                                  v0 = 1;
                                  const obj3 = { value: null, done: false };
                                  obj3[0] = HTTP.post(obj1);
                                  return obj3;
                                }
                              } else if (arg0 === 1) {
                                v0 = 3;
                                throw arg1;
                              } else if (arg0 === 2) {
                                v0 = 3;
                                const obj4 = { value: null, done: true };
                                obj4[0] = arg1;
                                return obj4;
                              } else {
                                v0 = 3;
                                obj = { value: null, done: true };
                                obj[0] = arg1;
                                return obj;
                              }
                            } catch (tmp5) {
                              v0 = tmp;
                              throw tmp5;
                            }
                          }
                        }));
                        return obj4;
                      }
                    } else {
                      outer1_0.handleError(outer1_10.ENTITY_EMPTY);
                    }
                  }
                }
                const _JSON2 = JSON;
                outer1_12.error("File does not have a filename.", JSON.stringify(outer1_1));
                outer1_0.handleError(outer1_10.INVALID_FILE_ASSET);
                status = 3;
                obj5 = { value: null, done: true };
                obj5[0] = undefined;
                return obj5;
              }
            } else if (4 === tmp9) {
              c6 = 0;
              c7 = handleConnectionInfoChange;
              let code;
              if (c7 != null) {
                const body = c7.body;
                if (body != null) {
                  code = body.code;
                }
              }
              status = code;
              if (code == null) {
                status = c7.status;
              }
              c6 = status;
              if (c6 !== outer1_10.ENTITY_TOO_LARGE) {
                throwTypeErrorResult = c3;
                throwTypeErrorResult = c4;
                throwTypeErrorResult = c6;
                closure_2 = c6;
                throwTypeErrorResult = outer1_12;
                if (c6 == null) {
                  const _JSON = JSON;
                  closure_2 = JSON.stringify(c7.body);
                }
                const _HermesInternal2 = HermesInternal;
                outer1_12.error("Requesting upload url failed with code " + closure_2 + " for " + outer1_0.id);
                obj3 = outer1_1(outer1_2[20]);
                obj3.captureException(c7);
              }
              outer1_0.handleError(c6);
              status = 3;
              obj6 = { value: null, done: true };
              obj6[0] = undefined;
              return obj6;
            } else if (5 === tmp9) {
              c6 = 0;
              status = handleConnectionInfoChange;
              if (c0.isCancelled()) {
                outer1_0.handleComplete(status);
              } else {
                const _HermesInternal = HermesInternal;
                outer1_12.info("Error: status " + status.status + " for " + outer1_0.id);
                outer1_0.handleError(status);
              }
            } else if (6 === tmp9) {
              if (arg0 === 1) {
                status = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 0;
                status = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              } else {
                throwTypeErrorResult = c3;
                throwTypeErrorResult = c4;
                handleConnectionInfoChange = arg1;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = handleConnectionInfoChange;
                throwTypeErrorResult = outer1_0.setResponseUrl(handleConnectionInfoChange.body.attachments[0].upload_url);
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = handleConnectionInfoChange;
                throwTypeErrorResult = outer1_0.setUploadedFilename(handleConnectionInfoChange.body.attachments[0].upload_filename);
                throwTypeErrorResult = c3;
                throwTypeErrorResult = c4;
                c6 = 2;
                throwTypeErrorResult = c0;
                throwTypeErrorResult = outer1_5;
                c7 = 7;
                status = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = c0.trackTime("uploadTimeMs", outer1_5(function*() {
                  if (c0 === 2) {
                    c0 = 3;
                    HermesBuiltin.throwTypeError();
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw arg1;
                    } else if (arg0 === 2) {
                      let obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    try {
                      c0 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c0 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c0 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          c1 = 1;
                          c0 = 1;
                          const obj1 = { value: null, done: false };
                          obj1[0] = c0.uploadFileToCloud();
                          return obj1;
                        }
                      } else if (arg0 === 1) {
                        c0 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c0 = 3;
                        const obj2 = { value: null, done: true };
                        obj2[0] = arg1;
                        return obj2;
                      } else {
                        c0 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      }
                    } catch (tmp6) {
                      c0 = tmp;
                      throw tmp6;
                    }
                  }
                }));
                return obj8;
              }
            } else if (arg0 === 1) {
              status = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c0.trackUploadFinished(outer1_15.COMPLETED);
              c0.handleComplete(c0.id);
              c6 = 0;
            }
            status = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          }
          throwTypeErrorResult = c4;
          throwTypeErrorResult = c0;
          throwTypeErrorResult = c4;
          if (c0.isCancelled()) {
            throwTypeErrorResult = c0;
            throwTypeErrorResult = obj13.handleComplete(c0.id);
          } else if (obj13.allowOptimization) {
            throwTypeErrorResult = c4;
            throwTypeErrorResult = outer1_0;
            throwTypeErrorResult = outer1_0;
            throwTypeErrorResult = outer1_2;
            if (outer1_0.item.platform === outer1_0(outer1_2[9]).UploadPlatform.WEB) {
              throwTypeErrorResult = c3;
              throwTypeErrorResult = c4;
              throwTypeErrorResult = outer1_18;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = outer1_0;
              c7 = 2;
              status = 1;
              const obj10 = { value: null, done: false };
              obj10[0] = outer1_18.tryConvertToWebP(outer1_0.item.file, () => c0._aborted, outer1_0.id);
              return obj10;
            }
          }
        } catch (throwTypeErrorResult) {
          handleConnectionInfoChange = throwTypeErrorResult;
          if (tmp4 === c6) {
            throwTypeErrorResult = tmp2;
            status = tmp2;
            throw throwTypeErrorResult;
          } else if (throwTypeErrorResult === throwTypeErrorResult) {
            c7 = tmp6;
          } else {
            c7 = tmp5;
          }
        }
      }
    }
  })();
};
prototype["reactNativeCompressAndExtractData"] = function reactNativeCompressAndExtractData() {
  const self = this;
  return callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
    } else {
      throwTypeErrorResult = arg1;
      throwTypeErrorResult = arg0;
      throwTypeErrorResult = tmp3;
      if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let name = 0;
              let uri = tmp2;
              let size;
              uri = undefined;
              name = undefined;
              c3 = undefined;
              c4 = undefined;
              let handleConnectionInfoChange;
              let obj9;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = outer1_2;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = outer1_0;
              if (obj17.getUploadTarget(outer1_0.item.target).shouldReactNativeCompressUploads) {
                if (true === throwTypeErrorResult.reactNativeFilePrepped) {
                  throwTypeErrorResult = outer1_0;
                  outer1_0.uploadAnalytics.fileAlreadyPrepped = true;
                  throwTypeErrorResult = outer1_12;
                  throwTypeErrorResult = outer1_0;
                  throwTypeErrorResult = globalThis;
                  const _HermesInternal6 = HermesInternal;
                  throwTypeErrorResult = outer1_12.log("reactNativeCompressAndExtractData() file already prepped - " + outer1_0.id);
                  c4 = 3;
                  let obj1 = { value: null, done: true };
                  obj1[0] = outer1_0;
                  return obj1;
                } else {
                  throwTypeErrorResult = outer1_12;
                  throwTypeErrorResult = outer1_0;
                  throwTypeErrorResult = globalThis;
                  const _HermesInternal5 = HermesInternal;
                  throwTypeErrorResult = outer1_12.log("Starting compression/conversion for " + outer1_0.id);
                  throwTypeErrorResult = outer1_0;
                  throwTypeErrorResult = outer1_5;
                  c3 = 1;
                  c4 = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = outer1_0.trackTime("compressTimeMs", outer1_5(function*() {
                    if (c1 === 2) {
                      c1 = 3;
                      HermesBuiltin.throwTypeError();
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw arg1;
                      } else if (arg0 === 2) {
                        let obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c1 = 2;
                        if (0 === c2) {
                          if (arg0 === 1) {
                            c1 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c1 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            let obj2 = size(name[21]);
                            const reactNativeFileIndex = outer1_0.reactNativeFileIndex;
                            let c0 = reactNativeFileIndex;
                            if (reactNativeFileIndex == null) {
                              c0 = 0;
                            }
                            c2 = 1;
                            c1 = 1;
                            const obj1 = { value: null, done: false };
                            obj1[0] = obj2.getAttachmentFile(outer1_0, c0);
                            return obj1;
                          }
                        } else if (arg0 === 1) {
                          c1 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c1 = 3;
                          obj2 = { value: null, done: true };
                          obj2[0] = arg1;
                          return obj2;
                        } else {
                          c1 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        }
                      } catch (tmp10) {
                        c1 = tmp;
                        throw tmp10;
                      }
                    }
                  }));
                  return obj2;
                }
              } else {
                throwTypeErrorResult.uploadAnalytics.compressAndExtractDisabled = true;
                throwTypeErrorResult = outer1_12;
                throwTypeErrorResult = outer1_12.log("reactNativeCompressAndExtractData() disabled by upload target");
                c4 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = outer1_0;
                return obj3;
              }
              obj17 = outer1_0(outer1_2[17]);
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                throwTypeErrorResult = uri;
                size = arg1;
                throwTypeErrorResult = size;
                throwTypeErrorResult = null;
                if (null != size) {
                  throwTypeErrorResult = uri;
                  throwTypeErrorResult = size;
                  if (null != size.file) {
                    throwTypeErrorResult = uri;
                    throwTypeErrorResult = name;
                    throwTypeErrorResult = size;
                    uri = size.uri;
                    throwTypeErrorResult = size;
                    name = size.file.name;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_2;
                    throwTypeErrorResult = size;
                    if (obj14.isResolvedUpload(size.file)) {
                      outer1_0.uploadAnalytics.imageCompressionQuality = size.file.imageCompressionQuality;
                      outer1_0.uploadAnalytics.videoCompressionQuality = size.file.videoCompressionQuality;
                      outer1_0.uploadAnalytics.imageEncoderType = size.file.imageEncoderType;
                      if (size.file.isImage) {
                        outer1_0.uploadAnalytics.sourceMediaWidth = size.file.sourceWidth;
                        outer1_0.uploadAnalytics.sourceMediaHeight = size.file.sourceHeight;
                        outer1_0.uploadAnalytics.uploadedImageWidth = size.file.uploadedImageWidth;
                        outer1_0.uploadAnalytics.uploadedImageHeight = size.file.uploadedImageHeight;
                      }
                      if (undefined !== size.file.videoMetadata) {
                        throwTypeErrorResult = uri;
                        throwTypeErrorResult = name;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.sourceMediaWidth = size.file.videoMetadata.width;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.sourceMediaHeight = size.file.videoMetadata.height;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.sourceMediaFormat = size.file.videoMetadata.format;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.sourceVideoBitrate = size.file.videoMetadata.bitRate;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.sourceVideoFramerate = size.file.videoMetadata.frameRate;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.videoDurationMs = size.file.videoMetadata.durationMs;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.sourceVideoProfile = size.file.videoMetadata.sourceProfile;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.sourceVideoLevel = size.file.videoMetadata.sourceLevel;
                      }
                      if (undefined !== size.file.encodingConfig) {
                        throwTypeErrorResult = uri;
                        throwTypeErrorResult = name;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.targetVideoWidth = size.file.encodingConfig.targetWidth;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.targetVideoHeight = size.file.encodingConfig.targetHeight;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        outer1_0.uploadAnalytics.targetVideoBitrate = size.file.encodingConfig.targetBitrate;
                        throwTypeErrorResult = outer1_0;
                        throwTypeErrorResult = size;
                        let str = "avc1";
                        if (size.file.encodingConfig.useHEVC) {
                          str = "hvc1";
                        }
                        outer1_0.uploadAnalytics.targetVideoCodec = str;
                        outer1_0.uploadAnalytics.targetVideoFramerate = size.file.encodingConfig.frameRate;
                        outer1_0.uploadAnalytics.targetVideoIsHdr = size.file.encodingConfig.createHDR;
                        outer1_0.uploadAnalytics.hevcIsSupported = size.file.encodingConfig.hevcIsSupported;
                        outer1_0.uploadAnalytics.progressUpdateGranularity = size.file.encodingConfig.progressUpdateGranularity;
                      }
                      outer1_0.uploadAnalytics.psnr = size.file.psnr;
                      outer1_0.uploadAnalytics.ssim = size.file.ssim;
                      outer1_0.uploadAnalytics.origin = size.file.origin;
                      outer1_0.uploadAnalytics.psnrMeasurementLatencyMs = size.file.psnrMeasurementLatencyMs;
                      outer1_0.uploadAnalytics.ssimMeasurementLatencyMs = size.file.ssimMeasurementLatencyMs;
                    }
                    outer1_0.filename = name;
                    if (null != name) {
                      throwTypeErrorResult = uri;
                      throwTypeErrorResult = uri;
                      if (null != uri) {
                        throwTypeErrorResult = uri;
                        throwTypeErrorResult = size;
                        if (null != size.file.type) {
                          throwTypeErrorResult = uri;
                          throwTypeErrorResult = name;
                          const parts = name.split(".");
                          const str17 = parts.pop();
                          let formatted;
                          if (str17 != null) {
                            formatted = str17.toLowerCase();
                          }
                          c3 = formatted;
                          let str4 = "image/jpeg";
                          if ("jpg" !== c3) {
                            str4 = "image/jpeg";
                            if ("jpeg" !== c3) {
                              str4 = size.file.type;
                            }
                          }
                          c4 = str4;
                          outer1_0.uploadAnalytics.convertedMimeType = c4;
                          const fileSize = size.fileSize;
                          size = fileSize;
                          if (fileSize == null) {
                            obj2 = outer1_0(outer1_2[22]);
                            c3 = 2;
                            c4 = 1;
                            const obj5 = { value: null, done: false };
                            obj5[0] = obj2.getFileData(uri);
                            return obj5;
                          }
                        }
                      }
                    }
                    const obj6 = { filename: null, uri: null, type: null };
                    obj6[0] = name;
                    obj6[1] = uri;
                    obj6[2] = size.file.type;
                    const _HermesInternal2 = HermesInternal;
                    outer1_12.error("Insufficient file data: " + obj6 + " for " + size.id);
                    const _Error2 = Error;
                    const obj7 = { filename: null, uri: null, type: null };
                    obj7[0] = name;
                    obj7[1] = uri;
                    throwTypeErrorResult = size;
                    obj7[2] = size.file.type;
                    const _HermesInternal3 = HermesInternal;
                    throwTypeErrorResult = new.target;
                    throwTypeErrorResult = new.target;
                    throwTypeErrorResult = new Error("Insufficient file data: " + obj7);
                    throw throwTypeErrorResult;
                  }
                }
                throwTypeErrorResult = name;
                throwTypeErrorResult = outer1_12;
                throwTypeErrorResult = size;
                throwTypeErrorResult = globalThis;
                const _HermesInternal4 = HermesInternal;
                throwTypeErrorResult = outer1_12.error("Failed to get compressed file for " + size.id);
                c4 = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = size;
                return obj8;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              size = arg1.size;
            }
            handleConnectionInfoChange = size;
            size.postCompressionSize = handleConnectionInfoChange;
            size.currentSize = handleConnectionInfoChange;
            if (null == handleConnectionInfoChange) {
              const _HermesInternal = HermesInternal;
              outer1_12.error("Size missing from file data for " + size.id);
              const _Error = Error;
              const error = new Error("Size missing from file data");
              throw error;
            } else {
              throwTypeErrorResult = uri;
              throwTypeErrorResult = name;
              throwTypeErrorResult = outer1_12;
              throwTypeErrorResult = handleConnectionInfoChange;
              throwTypeErrorResult = name;
              throwTypeErrorResult = uri;
              throwTypeErrorResult = size;
              throwTypeErrorResult = c4;
              throwTypeErrorResult = size;
              throwTypeErrorResult = globalThis;
              const _HermesInternal7 = HermesInternal;
              throwTypeErrorResult = outer1_12.log("Completed compression and conversion. Output size=" + handleConnectionInfoChange + " bytes; filename=" + name + "; uri=" + uri + "; originalMimeType=" + size.mimeType + "; mimeType=" + c4 + " for " + size.id);
              obj9 = { uri: null, filename: null, mimeType: null };
              throwTypeErrorResult = uri;
              obj9[0] = uri;
              throwTypeErrorResult = name;
              obj9[1] = name;
              throwTypeErrorResult = c4;
              obj9[2] = c4;
              throwTypeErrorResult = size;
              const obj10 = {};
              throwTypeErrorResult = size;
              throwTypeErrorResult = obj10;
              throwTypeErrorResult = Object.assign(size.item);
              throwTypeErrorResult = obj9;
              throwTypeErrorResult = obj10;
              throwTypeErrorResult = Object.assign(obj9);
              size.item = obj10;
              throwTypeErrorResult = size;
              size.reactNativeFilePrepped = true;
              c4 = 3;
              const obj11 = { value: null, done: true };
              obj11[0] = size;
              return obj11;
            }
          }
        } catch (throwTypeErrorResult) {
          c4 = throwTypeErrorResult;
          throw throwTypeErrorResult;
        }
      }
    }
  })();
};
CloudUpload["tryConvertToWebP"] = function tryConvertToWebP(file, arg1, id) {
  let closure_0 = file;
  let closure_1 = arg1;
  let closure_2 = id;
  return callback(function*() {
    let sizeAfter;
    let sizeBefore;
    if (c9 === 2) {
      c9 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === imageAttachmentMezzanineV2Config) {
          if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let handleConnectionInfoChange = tmp3;
            let c4 = tmp5;
            let closure_0;
            let lib;
            let c2;
            let UNKNOWN_ERROR;
            c4 = undefined;
            handleConnectionInfoChange = undefined;
            let _slicedToArray;
            imageAttachmentMezzanineV2Config = outer1_0(outer1_2[23]).getImageAttachmentMezzanineV2Config({ location: "CloudUpload.maybeConvertToWebP" });
            if (imageAttachmentMezzanineV2Config.enabled) {
              if (null == outer1_0) {
                const _HermesInternal6 = HermesInternal;
                outer1_12.warn("webp conversion skipped for " + outer1_2 + ": no file");
                c9 = 3;
                return { value: null, done: true };
              } else {
                if (null != imageAttachmentMezzanineV2Config.maxFileSizeBytes) {
                  if (outer1_0.size > imageAttachmentMezzanineV2Config.maxFileSizeBytes) {
                    const _HermesInternal5 = HermesInternal;
                    outer1_12.warn("webp conversion skipped for " + outer1_2 + ": too big");
                    c9 = 3;
                    return { value: null, done: true };
                  }
                }
                if (outer1_1()) {
                  c9 = 3;
                  return { value: null, done: true };
                } else {
                  const _performance2 = performance;
                  c2 = performance.now();
                  UNKNOWN_ERROR = { compressTimeMs: 0 };
                  let c7 = 1;
                  imageAttachmentMezzanineV2Config = 2;
                  c9 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = tmp98(tmp99[25])(tmp99[24], tmp99.paths);
                  return obj1;
                }
              }
            } else {
              const _HermesInternal4 = HermesInternal;
              outer1_12.warn("webp conversion skipped for " + outer1_2 + ": not enabled");
              c9 = 3;
              return { value: null, done: true };
            }
            const obj9 = outer1_0(outer1_2[23]);
            tmp98 = outer1_0;
          }
        } else {
          if (1 === tmp8) {
            c7 = 0;
            c7 = _slicedToArray;
            const _HermesInternal3 = HermesInternal;
            outer1_12.warn("webp conversion failed for " + outer1_2 + ":", c7);
            UNKNOWN_ERROR = undefined;
            if (lib != null) {
              UNKNOWN_ERROR = lib.UNKNOWN_ERROR;
            }
            closure_0 = UNKNOWN_ERROR;
            if (UNKNOWN_ERROR == null) {
              closure_0 = "unknown_error";
            }
            UNKNOWN_ERROR.conversionFailureReason = closure_0;
            const tmp62 = UNKNOWN_ERROR;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              const outer1_4 = arg1;
              outer1_1 = outer1_4.ConversionFailureReason;
              imageAttachmentMezzanineV2Config = 3;
              c9 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = outer1_4.maybeConvertToWebP(closure_0);
              return obj3;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_0 = arg1;
            if (lib()) {
              c7 = 0;
              c9 = 3;
              return { value: null, done: true };
            } else {
              if (closure_0.success) {
                if (null != closure_0.convertedBlob) {
                  const compressionRatio = closure_0.compressionRatio;
                  ({ sizeBefore, sizeAfter } = closure_0);
                  const _HermesInternal2 = HermesInternal;
                  outer1_12.log("webp conversion worked for " + c2 + ": " + sizeBefore + " -> " + sizeAfter + " bytes (" + compressionRatio.toFixed(2) + "x)");
                  const _File = File;
                  const items = [closure_0.convertedBlob];
                  obj = { type: "image/webp", lastModified: null };
                  obj[1] = closure_0.lastModified;
                  const file = new File(items, closure_0.name, obj);
                  UNKNOWN_ERROR.convertedFile = file;
                  UNKNOWN_ERROR.convertedMimeType = "image/webp";
                  const hashTimeMs = closure_0.hashTimeMs;
                  c2 = hashTimeMs;
                  if (hashTimeMs == null) {
                    c2 = undefined;
                  }
                  UNKNOWN_ERROR.hashTimeMs = c2;
                  const tmp46 = UNKNOWN_ERROR;
                }
                c7 = 0;
              }
              const reason = closure_0.reason;
              UNKNOWN_ERROR = reason;
              if (reason == null) {
                UNKNOWN_ERROR = lib.UNKNOWN_ERROR;
              }
              handleConnectionInfoChange = UNKNOWN_ERROR;
              const _HermesInternal = HermesInternal;
              outer1_12.log("webp conversion skipped for " + c2 + ": " + handleConnectionInfoChange);
              UNKNOWN_ERROR.conversionFailureReason = handleConnectionInfoChange;
            }
          }
          const _Math = Math;
          const _performance = performance;
          _slicedToArray = Math.round(performance.now() - c2);
          let compressTimeMs;
          if (closure_0 != null) {
            compressTimeMs = closure_0.compressTimeMs;
          }
          lib = compressTimeMs;
          if (compressTimeMs == null) {
            lib = _slicedToArray;
          }
          UNKNOWN_ERROR.compressTimeMs = lib;
          c9 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = UNKNOWN_ERROR;
          return obj5;
        }
      } catch (tmp85) {
        _slicedToArray = tmp85;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp85;
        }
      }
    }
  })();
};
prototype["handleError"] = function handleError(error) {
  const self = this;
  this.setStatus(obj.ERROR);
  this.error = error;
  this.trackUploadFinished(obj.ERROR);
  try {
    self.emit("error", error);
    self.removeAllListeners();
  } catch (err) {
  }
};
prototype["handleComplete"] = function handleComplete(arg0) {
  this.setStatus(obj.COMPLETED);
  tmp3.log("Upload complete for " + this.id);
  this.emit("complete", arg0);
  this.removeAllListeners();
};
prototype["_cancel"] = function _cancel(COMPLETED) {
  const self = this;
  tmp3.log(arg1);
  this._aborted = true;
  const _abortController = this._abortController;
  _abortController.abort();
  this.trackUploadFinished(COMPLETED);
  if (this.status === obj.COMPLETED) {
    self.delete();
  }
  self.setStatus(COMPLETED);
  self.emit("complete");
  self.removeAllListeners();
};
prototype["cancel"] = function cancel() {
  this._cancel(obj.CANCELED, "Cancelled called for " + this.id);
};
prototype["removeFromMsgDraft"] = function removeFromMsgDraft() {
  this._cancel(obj.REMOVED_FROM_MSG_DRAFT, "Removed from draft for " + this.id);
};
prototype["isCancelled"] = function isCancelled() {
  return this.status === obj.CANCELED || this.status === tmp.REMOVED_FROM_MSG_DRAFT;
};
prototype["delete"] = function delete() {
  const self = this;
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (null != v0.uploadedFilename) {
            let obj1 = v0(4767);
            const uploadTarget = obj1.getUploadTarget(tmp18.item.target);
            let dependencyMap = 1;
            const deleteUploadURL = uploadTarget.getDeleteUploadURL(tmp18.uploadedFilename);
            const HTTP = v0(530).HTTP;
            c1 = 2;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = HTTP.del(deleteUploadURL);
            return obj1;
          }
        } else {
          if (1 === tmp6) {
            dependencyMap = 0;
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            dependencyMap = 0;
          }
          dependencyMap = 0;
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        v0 = 3;
      } catch (tmp10) {
        if (tmp3 === dependencyMap) {
          v0 = tmp2;
          throw tmp10;
        } else {
          c1 = tmp;
        }
      }
    }
  })();
};
prototype["setResponseUrl"] = function setResponseUrl(upload_url) {
  this.responseUrl = upload_url;
  this.responseUrlSetAt = Date.now();
};
CloudUpload["isResponseUrlStale"] = function isResponseUrlStale(responseUrlSetAt) {
  if (null == responseUrlSetAt) {
    return true;
  } else {
    const _Date = Date;
    const result = 12 * importDefault(687).Millis.HOUR;
    return Date.now() - responseUrlSetAt > result;
  }
};
prototype["ensureFreshResponseUrl"] = function ensureFreshResponseUrl() {
  const self = this;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === closure_2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let createAttachmentURL = tmp5;
            let store = tmp2;
            store = undefined;
            createAttachmentURL = undefined;
            closure_2 = undefined;
            if (outer1_18.isResponseUrlStale(outer1_0.responseUrlSetAt)) {
              closure_2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(c2[16]).default.getUploadPayload(outer1_0);
              return obj1;
            } else {
              c3 = 3;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            store = arg1;
            const uploadTarget = outer1_0(c2[17]).getUploadTarget(store.item.target);
            createAttachmentURL = uploadTarget.getCreateAttachmentURL(store.channelId);
            const HTTP = outer1_0(c2[8]).HTTP;
            const obj3 = { url: null, body: null };
            obj3[0] = createAttachmentURL;
            const obj4 = { files: null };
            const items = [store];
            obj4[0] = items;
            obj3[1] = obj4;
            const merged = Object.assign(store.createAttachmentUrlRetryOpts());
            obj3.rejectWithError = false;
            closure_2 = 2;
            c3 = 1;
            const obj5 = { value: null, done: false };
            obj5[0] = HTTP.post(obj3);
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        } else {
          closure_2 = arg1;
          if (closure_2.ok) {
            const body = closure_2.body;
            let first;
            if (body != null) {
              const attachments = body.attachments;
              if (attachments != null) {
                first = attachments[0];
              }
            }
            if (null != first) {
              store.setResponseUrl(closure_2.body.attachments[0].upload_url);
              store.setUploadedFilename(closure_2.body.attachments[0].upload_filename);
            }
          }
        }
        obj = { response: null };
        obj[0] = closure_2;
        throw new outer1_14("upload", obj);
      } catch (tmp27) {
        c3 = tmp;
        throw tmp27;
      }
    }
  })();
};
prototype["setStatus"] = function setStatus(status) {
  this.status = status;
};
prototype["setFilename"] = function setFilename(filename) {
  this.filename = filename;
};
prototype["setUploadedFilename"] = function setUploadedFilename(upload_filename) {
  this.uploadedFilename = upload_filename;
};
prototype["trackUploadStart"] = function trackUploadStart() {
  let obj = importDefault(698);
  obj = { file_size: this.currentSize, mime_type: null, video_upload_quality: null, data_saving_mode: null, low_quality_image_mode: null, channel_id: null, connection_type: null, effective_connection_speed: null, service_provider: null };
  let str = this.mimeType;
  if (str == null) {
    str = "unknown";
  }
  obj[1] = str;
  ({ videoUploadQuality: obj2[2], dataSavingMode: obj2[3], dataSavingMode: obj2[4] } = CHANNEL_SIDEBAR_WIDTH);
  obj[5] = this.channelId;
  obj[6] = store.getType();
  obj[7] = store.getEffectiveConnectionSpeed();
  obj[8] = store.getServiceProvider();
  obj.track(constants.ATTACHMENT_UPLOAD_STARTED, obj);
};
prototype["trackUploadFinished"] = function trackUploadFinished(COMPLETED) {
  const self = this;
  let num = -1;
  if (null != this.startTime) {
    const _performance = performance;
    num = performance.now() - self.startTime;
  }
  let obj = importDefault(698);
  obj = { duration_ms: num, file_size: self.currentSize, pre_compression_file_size: self.preCompressionSize, final_state: COMPLETED, mime_type: null, num_upload_attempts: null, error_code: null, video_upload_quality: null, data_saving_mode: null, low_quality_image_mode: null, compress_time_ms: null, get_upload_url_time_ms: null, upload_time_ms: null, converted_mime_type: null, image_compression_quality: null, video_compression_quality: null, image_encoder_type: null, was_converted: null, was_compressed: null, source_media_width: null, source_media_height: null, source_media_format: null, uploaded_image_width: null, uploaded_image_height: null, source_video_bitrate: null, video_duration_ms: null, source_video_profile_name: null, source_video_profile_level: null, target_video_width: null, target_video_height: null, target_video_bitrate: null, target_video_codec: null, target_video_framerate: null, target_video_is_hdr: null, hevc_is_supported: null, progress_update_granularity: null, source_video_framerate: null, channel_id: null, hash_time_ms: null, psnr: null, ssim: null, origin: null, psnr_measurement_latency_ms: null, ssim_measurement_latency_ms: null, upload_resumption_count: null, upload_resumption_reason: null, upload_resumption_position: null, upload_resumption_check_time_ms: null, conversion_failure_reason: null, upload_http_client: null, connection_type: null, effective_connection_speed: null, service_provider: null };
  let str = self.mimeType;
  if (str == null) {
    str = "unknown";
  }
  obj[4] = str;
  let num2 = self.uploadAnalytics.numUploadAttempts;
  if (num2 == null) {
    num2 = 1;
  }
  obj[5] = num2;
  obj[6] = self.error;
  ({ videoUploadQuality: obj2[7], dataSavingMode: obj2[8], dataSavingMode: obj2[9] } = CHANNEL_SIDEBAR_WIDTH);
  obj[10] = self.uploadAnalytics.timing.compressTimeMs;
  obj[11] = self.uploadAnalytics.timing.getUploadUrlTimeMs;
  obj[12] = self.uploadAnalytics.timing.uploadTimeMs;
  let str2 = self.uploadAnalytics.convertedMimeType;
  if (str2 == null) {
    str2 = "unknown";
  }
  obj[13] = str2;
  let num3 = self.uploadAnalytics.imageCompressionQuality;
  if (num3 == null) {
    num3 = 0;
  }
  obj[14] = num3;
  let str3 = self.uploadAnalytics.videoCompressionQuality;
  if (str3 == null) {
    str3 = "unknown";
  }
  obj[15] = str3;
  let str4 = self.uploadAnalytics.imageEncoderType;
  if (str4 == null) {
    str4 = "unknown";
  }
  obj[16] = str4;
  obj[17] = null != self.uploadAnalytics.convertedMimeType && self.mimeType !== self.uploadAnalytics.convertedMimeType;
  obj[18] = self.currentSize < self.preCompressionSize;
  obj[19] = self.uploadAnalytics.sourceMediaWidth;
  obj[20] = self.uploadAnalytics.sourceMediaHeight;
  obj[21] = self.uploadAnalytics.sourceMediaFormat;
  obj[22] = self.uploadAnalytics.uploadedImageWidth;
  obj[23] = self.uploadAnalytics.uploadedImageHeight;
  obj[24] = self.uploadAnalytics.sourceVideoBitrate;
  obj[25] = self.uploadAnalytics.videoDurationMs;
  obj[26] = self.uploadAnalytics.sourceVideoProfile;
  obj[27] = self.uploadAnalytics.sourceVideoLevel;
  obj[28] = self.uploadAnalytics.targetVideoWidth;
  obj[29] = self.uploadAnalytics.targetVideoHeight;
  obj[30] = self.uploadAnalytics.targetVideoBitrate;
  obj[31] = self.uploadAnalytics.targetVideoCodec;
  obj[32] = self.uploadAnalytics.targetVideoFramerate;
  obj[33] = self.uploadAnalytics.targetVideoIsHdr;
  obj[34] = self.uploadAnalytics.hevcIsSupported;
  obj[35] = self.uploadAnalytics.progressUpdateGranularity;
  obj[36] = self.uploadAnalytics.sourceVideoFramerate;
  obj[37] = self.channelId;
  obj[38] = self.uploadAnalytics.timing.hashTimeMs;
  obj[39] = self.uploadAnalytics.psnr;
  obj[40] = self.uploadAnalytics.ssim;
  obj[41] = self.uploadAnalytics.origin;
  obj[42] = self.uploadAnalytics.psnrMeasurementLatencyMs;
  obj[43] = self.uploadAnalytics.ssimMeasurementLatencyMs;
  obj[44] = self.uploadAnalytics.uploadResumptionCount;
  obj[45] = self.uploadAnalytics.uploadResumptionReason;
  obj[46] = self.uploadAnalytics.uploadResumptionPosition;
  obj[47] = self.uploadAnalytics.timing.resumptionCheckTimeMs;
  obj[48] = self.uploadAnalytics.conversionFailureReason;
  let str5 = "httputils";
  if (self._libdiscoreEnabled) {
    str5 = "libdiscore";
  }
  obj[49] = str5;
  obj[50] = store.getType();
  obj[51] = store.getEffectiveConnectionSpeed();
  obj[52] = store.getServiceProvider();
  obj.track(constants.ATTACHMENT_UPLOAD_FINISHED, obj);
};
let result = set.fileFinishedImporting("lib/uploader/CloudUpload.tsx");

export { ResumableUploadError };
export const CloudUploadStatus = obj;
export { CloudUpload };