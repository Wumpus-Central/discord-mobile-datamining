// === Module 5338: CloudUpload ===

// Module 5338 (CloudUpload)
import LoggerDefault from "Logger" /* 3 */;
import BackoffDefault from "Backoff" /* 559 */;
import DurationsDefault from "Durations" /* 1091 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import Upload2 from "Upload" /* 5339 */;
import uploader_UploadUtils from "uploader/UploadUtils" /* 5347 */;
import InlineUploaderDefault from "InlineUploader" /* 5381 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import DevSettingsStore from "DevSettingsStore" /* 4755 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import NetworkStore from "NetworkStore" /* 4805 */;

const Upload = Upload2;

require = fn;
let closure_3 = ["Content-Range"];
const Constants = fn(1074);
({ AbortCodes: c10, AnalyticEvents: closure_11 } = Constants);
const logger = new LoggerDefault("CloudUpload.tsx");
const set = new Set([429]);
let ResumableUploadError;
class ResumableUploadError extends Error {
  constructor(arg0) {
    obj = fn;
    num = undefined;
    if (fn === undefined) {
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
      obj1 = { cause: null };
      obj1.cause = cause;
      tmp12 = new.target;
      tmp13 = new.target;
      tmp14 = combined;
      tmp15 = obj1;
      response1 = new response(combined, obj1, errorKind, ":status_", tmp9, str, num, concat);
      tmp17 = response1;
      str6 = "ResumableUploadError";
      response1.name = "ResumableUploadError";
      response1.phase = global;
      response1.kind = errorKind;
      response1.messageShort = combined;
      return response1;
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
  }
  if (!hasItem1) {
    const formatted2 = error.message.toLowerCase();
    hasItem1 = formatted2.includes("offline");
  }
  if (!hasItem1) {
    const formatted3 = error.message.toLowerCase();
    hasItem1 = formatted3.includes("changed");
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
  closure_0 = status_check;
  return (response) => {
    if (response instanceof HTTPUtils.HTTPResponseError) {
      const obj2 = { response };
      throw new ResumableUploadError(closure_0, obj2);
    } else {
      const _Error = Error;
      const obj = { cause: null };
      if (response instanceof Error) {
        obj.cause = response;
        throw new ResumableUploadError(closure_0, obj);
      } else {
        const _Error2 = Error;
        const _String = String;
        const error = new Error(String(response));
        obj.cause = error;
        throw new ResumableUploadError(closure_0, obj);
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
const CloudUploadStatus = { NOT_STARTED: "NOT_STARTED", STARTED: "STARTED", UPLOADING: "UPLOADING", ERROR: "ERROR", COMPLETED: "COMPLETED", CANCELED: "CANCELED", REMOVED_FROM_MSG_DRAFT: "REMOVED_FROM_MSG_DRAFT" };
let closure_16 = function UploadAnalytics() {
  const merged = Object.assign({ timing: null, uploadResumptionCount: 0, uploadResumptionPosition: 0 });
  merged[0] = {};
  return merged;
}.prototype;
let CloudUpload;
class CloudUpload extends tmp5 {
  constructor(arg0, arg1, arg2, arg3) {
    obj = new CloudUpload(global, tmp4, tmp3, new.target, global, new.target, tmp2, CloudUpload, tmp);
    closure_0 = obj;
    obj.status = closure_15.NOT_STARTED;
    obj.loaded = 0;
    obj.reactNativeFilePrepped = false;
    if (typeof closure_16 === "function") {
      tmp6 = fn;
      merged = Object.assign({ timing: null, uploadResumptionCount: 0, uploadResumptionPosition: 0 });
      merged[0] = {};
      obj.uploadAnalytics = merged;
      obj.uploadAttempts = 0;
      obj._aborted = false;
      tmp8 = null;
      obj._originalMd5 = null;
      obj.createResumeAwareProgressFn = function createResumeAwareProgressFn(arg0) {
        closure_0 = arg0;
        return (loaded) => {
          const sum = loaded.loaded + closure_0;
          obj.emit("progress", sum, loaded.total + closure_0, sum - obj.loaded);
          obj.loaded = sum;
        };
      };
      obj.channelId = fn;
      file = global.file;
      num = undefined;
      if (file != null) {
        num = file.size;
      }
      if (num == null) {
        num = 0;
      }
      obj.preCompressionSize = num;
      file2 = global.file;
      num2 = undefined;
      if (file2 != null) {
        num2 = file2.size;
      }
      if (num2 == null) {
        num2 = 0;
      }
      tmp9 = importDefault;
      tmp10 = importAll;
      obj.currentSize = num2;
      obj.reactNativeFileIndex = importDefault;
      if (null != importAll) {
        obj.allowOptimization = importAll;
      }
      tmp11 = closure_0;
      tmp12 = closure_2;
      tmp13 = global.platform === closure_0(closure_2[9]).UploadPlatform.WEB && null != global.compressionMetadata;
      if (tmp13) {
        obj.mimeType = global.compressionMetadata.originalContentType;
        obj.preCompressionSize = global.compressionMetadata.preCompressionSize;
      }
      tmp14 = global.platform === tmp11(tmp12[9]).UploadPlatform.WEB && null != global.originalMd5;
      if (tmp14) {
        obj._originalMd5 = global.originalMd5;
      }
      result = obj.applyItemConversionAnalytics();
      tmp16 = globalThis;
      _AbortController = AbortController;
      tmp17 = new.target;
      tmp18 = new.target;
      abortController = new AbortController();
      tmp20 = abortController;
      obj._abortController = abortController;
      if (null == obj.origin) {
        tmp21 = new.target;
        tmp22 = new.target;
        defaultHttpClient = new tmp11(tmp12[10]).DefaultHttpClient();
        tmp24 = defaultHttpClient;
        obj._uploadHttpClient = defaultHttpClient;
        obj._libdiscoreEnabled = false;
        return obj;
      } else {
        if (typeof obj.origin === "string") {
          origin = obj.origin;
        } else {
          origin = tmp11(tmp12[9]).UploadOrigin[obj.origin];
        }
        obj.uploadAnalytics.origin = origin;
      }
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
    return;
  }
  resetState() {
    self = this;
    this.status = closure_15.NOT_STARTED;
    this.uploadedFilename = undefined;
    this.responseUrl = undefined;
    this.responseUrlSetAt = undefined;
    this.error = undefined;
    this.startTime = undefined;
    if (typeof closure_16 === "function") {
      merged = Object.assign({ timing: null, uploadResumptionCount: 0, uploadResumptionPosition: 0 });
      merged[0] = {};
      self.uploadAnalytics = merged;
      result = self.applyItemConversionAnalytics();
      num = 0;
      self.uploadAttempts = 0;
      flag = false;
      self._aborted = false;
      tmp3 = globalThis;
      _AbortController = AbortController;
      tmp4 = new.target;
      tmp5 = new.target;
      abortController = new AbortController();
      tmp7 = abortController;
      self._abortController = abortController;
      tmp8 = closure_20;
      return super.resetState();
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype = CloudUpload.prototype;
CloudUpload["fromJson"] = function fromJson(item) {
  let tmp = new CloudUpload(item.item, item.channelId, item.reactNativeFileIndex);
  closure_0 = tmp;
  const entries = Object.entries(item);
  item = entries.forEach((item) => {
    const tmp = _slicedToArray(item, 2);
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
  if (this.item.platform === Upload2.UploadPlatform.REACT_NATIVE) {
    const obj2 = { timeout: DurationsDefault.Millis.HOUR, backoff: null, retries: 12 };
    const result = 0.5 * DurationsDefault.Millis.SECOND;
    const tmp82 = new BackoffDefault(result, 30 * DurationsDefault.Millis.MINUTE);
    obj2.backoff = tmp82;
    let obj = obj2;
  } else {
    obj = { timeout: DurationsDefault.Millis.HOUR, retries: 12, backoff: null };
    const tmp5 = new BackoffDefault();
    obj.backoff = tmp5;
  }
  return obj;
};
prototype["createAttachmentUrlRetryOpts"] = function createAttachmentUrlRetryOpts() {
  const self = this;
  if (this.item.platform === Upload2.UploadPlatform.REACT_NATIVE) {
    const obj = { timeout: null, backoff: null, retries: 8 };
    const obj2 = { response: 30 * DurationsDefault.Millis.SECOND, deadline: 30 * DurationsDefault.Millis.MINUTE };
    obj.timeout = obj2;
    const result = 0.5 * DurationsDefault.Millis.SECOND;
    const tmp42 = new BackoffDefault(result, 60 * DurationsDefault.Millis.SECOND);
    obj.backoff = tmp42;
    let retryOptsResult = obj;
  } else {
    retryOptsResult = self.retryOpts();
  }
  return retryOptsResult;
};
prototype["buildOriginalMd5Headers"] = function buildOriginalMd5Headers() {
  return InlineUploaderDefault.buildHeadersForMd5(this._originalMd5);
};
prototype["supportsResume"] = function supportsResume() {
  let _libdiscoreEnabled = this._libdiscoreEnabled;
  if (!_libdiscoreEnabled) {
    _libdiscoreEnabled = this.item.platform !== Upload2.UploadPlatform.REACT_NATIVE;
  }
  return _libdiscoreEnabled;
};
prototype["uploadFileToCloud"] = function uploadFileToCloud() {
  const self = this;
  return (async () => {
    if (null == self.responseUrl) {
      const _Error = Error;
      const error = new Error("_uploadFileToCloud - responseUrl is not set");
      throw error;
    }
    const _HermesInternal3 = HermesInternal;
    const combined = "Uploading " + self.id;
    if (self.item.platform === v3(dependencyMap[9]).UploadPlatform.REACT_NATIVE) {
      const _HermesInternal2 = HermesInternal;
      let combined1 = "filename=" + self.item.filename + ", uri=" + self.item.uri;
    } else {
      const _HermesInternal = HermesInternal;
      combined1 = "filename=" + self.item.file.name;
    }
    logger.log(combined, combined1);
    if (self.item.platform === v3(dependencyMap[9]).UploadPlatform.REACT_NATIVE) {
      const obj4 = { type: self.item.mimeType, uri: self.item.uri, name: self.item.filename };
      let str6 = "application/octet-stream";
      if (null != obj4.type) {
        str6 = "application/octet-stream";
        if ("application/json" !== obj4.type) {
          str6 = obj4.type;
        }
      }
      let str4 = str6;
      let file = obj4;
    } else {
      file = self.item.file;
      str4 = "application/octet-stream";
    }
    if (tmp25Result.canUploadNatively(self.item)) {
      const libdiscoreHttpClient = new tmp25(dependencyMap[10]).LibdiscoreHttpClient();
      self._uploadHttpClient = libdiscoreHttpClient;
      self._libdiscoreEnabled = true;
      logger.log("Using libdiscore client for file upload");
    }
    await self.uploadFileWithResumption(self.responseUrl, file, str4);
    return value;
  })();
};
prototype["getResumePosition"] = function getResumePosition(responseUrl) {
  closure_0 = responseUrl;
  const self = this;
  return (async () => {
    const obj4 = { url, headers: { "Content-Range": "bytes */*" }, rejectWithError: true, retries: 0, timeout: { deadline: 30 * v1(1091).Millis.SECOND }, signal: self._abortController.signal };
    const _uploadHttpClient = self._uploadHttpClient;
    _uploadHttpClient.doUpload(obj4);
    await _uploadHttpClient.doUpload(obj4).then((status) => {
      if (200 !== status.status) {
        if (201 !== status.status) {
          let currentSize = closure_2_14.rejectionHandler("status_check")(status);
        }
        return currentSize;
      }
      currentSize = v1.currentSize;
    }).catch((error) => {
      if (error instanceof c0(1271).HTTPResponseError) {
        if (308 === error.status) {
          let str = error.headers.range;
          if (str == null) {
            str = "";
          }
          const parseRangeHeaderResult = v1.parseRangeHeader(str);
          let num2 = 0;
          if (null != parseRangeHeaderResult) {
            num2 = parseRangeHeaderResult[1] + 1;
          }
          return num2;
        }
      }
      return closure_2_14.rejectionHandler("status_check")(error);
    });
    return value;
  })();
};
prototype["startOrResumeUpload"] = function startOrResumeUpload(arg0, arg1) {
  closure_0 = arg0;
  const self = this;
  return (async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let obj7;
            closure_129_0 = undefined;
            let _catch = self;
            let obj5 = globalThis;
            const _HermesInternal = HermesInternal;
            logger.log("Attempting to upload attachment with resumeFrom: " + num + " and attempts: " + self.uploadAttempts);
            if (num > 0) {
              const uploadAnalytics = _catch.uploadAnalytics;
              uploadAnalytics.uploadResumptionCount = uploadAnalytics.uploadResumptionCount + 1;
              const headers = config.headers;
              config = headers;
              if (headers == null) {
                config = {};
              }
              const obj4 = {};
              const merged = Object.assign(config);
              obj4["Content-Range"] = "bytes " + tmp37 + "-" + _catch.currentSize - 1 + "/" + _catch.currentSize;
              config.headers = obj4;
              let tmp18 = tmp19;
            } else {
              tmp18 = config;
              if (null != config.headers) {
                const headers2 = tmp16.headers;
                const prop = headers2["Content-Range"];
                tmp16.headers = v3(headers2, c3);
                tmp18 = tmp16;
              }
            }
            obj5 = tmp2(tmp3[14]);
            tmp18.onRequestProgress = obj5.throttle(_catch.createResumeAwareProgressFn(num), 50);
            const _uploadHttpClient = _catch._uploadHttpClient;
            const obj6 = { fileByteRange: null };
            obj7 = { start: num };
            obj6.fileByteRange = obj7;
            _catch = _uploadHttpClient.doUpload(tmp18, obj6).catch;
            _catch(ResumableUploadError.rejectionHandler("upload"));
            c3 = 1;
            v3 = 1;
            const doUploadResult = _uploadHttpClient.doUpload(tmp18, obj6);
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_129_0 = value;
          if (200 !== closure_129_0.status) {
            if (201 !== closure_129_0.status) {
              const obj9 = { response: closure_129_0 };
              throw new ResumableUploadError("upload", obj9);
            }
          }
          v3 = 3;
          const obj = { value: closure_129_0, done: true };
          return obj;
        }
      } catch (tmp29) {
        v3 = tmp;
        throw tmp29;
      }
    }
  })();
};
prototype["uploadFileWithResumption"] = function uploadFileWithResumption(responseUrl, file, arg2) {
  closure_0 = responseUrl;
  closure_1 = file;
  closure_2 = arg2;
  const self = this;
  return (async (arg0) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp5;
            closure_132_0 = undefined;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            const retryOptsResult = self.retryOpts();
            ({ backoff: closure_132_1, retries } = retryOptsResult);
            closure_132_2 = retries;
            const request = { url, body, headers: null, signal: null, onRequestProgress: null, retries: 0, rejectWithError: true, timeout: null };
            let obj4 = { "Content-Type": next };
            request.headers = obj4;
            request.signal = self._abortController.signal;
            request.onRequestProgress = iter4(next[14]).throttle(self.createResumeAwareProgressFn(0), 50);
            request.timeout = retryOptsResult.timeout;
            closure_132_3 = request;
            closure_132_4 = 0;
            closure_132_5 = async function _loop() {
              if (c6 === 2) {
                c6 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp7 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c6 = 2;
                  if (0 === c5) {
                    if (arg0 === 1) {
                      c6 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c6 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      closure_2 = tmp3;
                      closure_1 = tmp5;
                      responseUrl = undefined;
                      closure_129_1 = undefined;
                      closure_129_2 = undefined;
                      c3.uploadAttempts = c3.uploadAttempts + 1;
                      c3.uploadAnalytics.numUploadAttempts = c3.uploadAttempts;
                      c3 = 1;
                      responseUrl = c3.responseUrl;
                      c5 = 2;
                      c6 = 1;
                      const obj4 = { value: c3.ensureFreshResponseUrl(), done: false };
                      return obj4;
                    }
                  } else if (1 === tmp8) {
                    c3 = 0;
                    closure_129_3 = closure_4;
                    if (closure_129_3 instanceof closure_2_14) {
                      if (closure_129_3.canRetry()) {
                        const _HermesInternal2 = HermesInternal;
                        logger.warn("Error uploading " + c3.id + ": " + closure_129_3.message + ", attempting resumption");
                        c3.uploadAnalytics.uploadResumptionReason = closure_129_3.messageShort;
                        c5 = 5;
                        c6 = 1;
                        const obj5 = { value: body(next[15]).awaitOnline(), done: false };
                        return obj5;
                      }
                    }
                    const _HermesInternal = HermesInternal;
                    logger.warn("Unrecoverable error uploading " + c3.id + ": " + closure_129_3.message);
                    throw closure_129_3;
                  } else {
                    if (2 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        c6 = 3;
                        const obj6 = { value, done: true };
                        return obj6;
                      } else {
                        closure_130_3.url = c3.responseUrl;
                        if (responseUrl !== c3.responseUrl) {
                          closure_130_4 = 0;
                          c3.loaded = 0;
                        } else if (c3.uploadAttempts > 1) {
                          c5 = 4;
                          c6 = 1;
                          const obj7 = {
                            value: c3.trackTime("resumptionCheckTimeMs", tmp3(async () => {
                                          await resumePosition.getResumePosition(resumePosition.responseUrl);
                                          return value;
                                        })),
                            done: false
                          };
                          return obj7;
                        }
                        value = {};
                        c3.startOrResumeUpload(closure_130_3, closure_130_4);
                        c5 = 3;
                        c6 = 1;
                      }
                    } else if (3 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        c6 = 3;
                        const obj8 = { value, done: true };
                        return obj8;
                      } else {
                        value.v = value;
                        c3 = 0;
                        c6 = 3;
                        const obj10 = { value, done: true };
                        return obj10;
                      }
                    } else if (4 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 !== 2) {
                        closure_129_1 = value;
                        c3.uploadAnalytics.uploadResumptionPosition = closure_129_1;
                        let num7 = 0;
                        if (c3.supportsResume()) {
                          num7 = closure_129_1;
                        }
                        closure_130_4 = num7;
                        c3.loaded = closure_130_4;
                      }
                    } else if (5 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c6 = 3;
                        const obj11 = { value, done: true };
                        return obj11;
                      } else {
                        closure_129_2 = closure_130_1.fail();
                        const _HermesInternal3 = HermesInternal;
                        logger.log("Waiting " + closure_129_2 + "ms before attachment upload attempt " + c3.uploadAttempts + 1);
                        const promise = new Promise((arg0) => setTimeout(arg0, closure_1_2));
                        c5 = 6;
                        c6 = 1;
                        const obj12 = { value: promise, done: false };
                        return obj12;
                      }
                    } else if (arg0 === 1) {
                      c6 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c6 = 3;
                      const obj = { value, done: true };
                      return obj;
                    } else {
                      c6 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                    c3 = 0;
                    c6 = 3;
                    const obj13 = { value, done: true };
                    return obj13;
                  }
                } catch (tmp59) {
                  closure_4 = tmp59;
                  if (tmp4 === c3) {
                    c6 = tmp2;
                    throw tmp59;
                  } else {
                    c5 = tmp;
                  }
                }
              }
            };
            if (self.uploadAttempts <= retries) {
              if (!self._aborted) {
                const iter3 = closure_132_5()[tmp59.iterator]();
                HermesBuiltin.ensureObject("iterator is not an object");
                next = iter3.next;
                url = undefined;
                const tmp29 = closure_132_5();
              }
            }
            const _Error = Error;
            let _HermesInternal = HermesInternal;
            const error = new Error("Upload failed after " + closure_133_3.uploadAttempts + " attempts");
            throw error;
          }
        } else {
          if (1 === tmp8) {
            c6 = 1;
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else {
              url = value;
              if (arg0 === 2) {
                url = value;
                c6 = 0;
                const method = HermesBuiltin.getMethod("return");
                if (method === undefined) {
                  c9 = 3;
                  let obj5 = { value, done: true };
                  return obj5;
                } else {
                  const iter2 = method(url);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    c9 = 3;
                    let obj = { value: iter2.value, done: true };
                    return obj;
                  } else {
                    c8 = 1;
                    c9 = 1;
                    return iter2;
                  }
                }
              } else {
                c6 = 0;
                const tmp20 = value;
              }
            }
          } else {
            c6 = 0;
            const method1 = HermesBuiltin.getMethod("throw");
            if (method1 === undefined) {
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              throw new TypeError("yield* delegate must have a .throw() method");
            } else {
              const iter = method1(tmp10);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              if (iter.done) {
                iter4 = iter;
              } else {
                c8 = 1;
                c9 = 1;
                return iter;
              }
            }
            tmp10 = closure_7;
          }
          value = iter4.value;
          closure_132_0 = value;
          if (value) {
            c9 = 3;
            let obj6 = { value: closure_132_0.v, done: true };
            return obj6;
          }
        }
        iter4 = next(tmp20);
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        if (!iter4.done) {
          c8 = 1;
          c9 = 1;
          return iter4;
        }
      } catch (tmp51) {
        closure_7 = tmp51;
        if (tmp4 === c6) {
          c9 = tmp2;
          throw tmp51;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
prototype["getSize"] = function getSize() {
  const self = this;
  return (async () => {
    const getFileSize = value(c2[16]).getFileSize;
    if (getFileSize != null) {
      const fileSize = getFileSize(self.item.uri);
    }
    await fileSize;
    if (value == null) {
      value = 0;
    }
    return value;
  })();
};
prototype["trackTime"] = function trackTime(compressTimeMs, arg1) {
  closure_0 = compressTimeMs;
  closure_1 = arg1;
  const self = this;
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp5;
            closure_128_0 = undefined;
            const _performance4 = performance;
            closure_128_0 = performance.now();
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj4 = { value: tmp3(), done: false };
            return obj4;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          const _performance3 = performance;
          closure_129_2.uploadAnalytics.timing[closure_129_0] = performance.now() - closure_128_0;
          throw closure_2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          const _performance2 = performance;
          closure_129_2.uploadAnalytics.timing[closure_129_0] = performance.now() - closure_128_0;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c3 = 0;
          const _performance = performance;
          closure_129_2.uploadAnalytics.timing[closure_129_0] = performance.now() - closure_128_0;
          c5 = 3;
          const obj = { value, done: true };
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
  return (async () => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp9;
            closure_132_0 = undefined;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            let file;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            closure_132_6 = undefined;
            let uploadTarget;
            let maxFileSize;
            closure_132_9 = undefined;
            closure_132_10 = undefined;
            if (self.status !== constants2.COMPLETED) {
              self.setStatus(constants2.STARTED);
              const _performance = performance;
              self.startTime = performance.now();
              self.trackUploadStart();
              if (false === self.reactNativeFilePrepped) {
                c8 = 1;
                c9 = 1;
                const obj5 = { value: self.reactNativeCompressAndExtractData(), done: false };
                return obj5;
              }
            }
            c9 = 3;
            c6 = 0;
            c9 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } else {
          if (1 === tmp9) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else {
            if (2 === tmp9) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                closure_132_4 = value;
                if (null != closure_132_4) {
                  closure_132_0 = true;
                  if (null == closure_132_4.convertedFile) {
                    const result = closure_133_0.applyConversionAnalytics(closure_132_4.analytics);
                  } else {
                    let tmp125 = null == closure_133_0._originalMd5;
                    if (tmp125) {
                      tmp125 = null != file;
                    }
                    if (tmp125) {
                      closure_3 = closure_133_0;
                      const obj11 = status(5368);
                      c8 = 3;
                      c9 = 1;
                      const obj8 = { value: status(5368).fromBlob(file).catch(() => null), done: false };
                      return obj8;
                    } else {
                      closure_133_0.item.file = closure_132_4.convertedFile;
                      closure_133_0.currentSize = closure_132_4.convertedFile.size;
                      closure_133_0.setFilename(closure_132_4.convertedFile.name);
                    }
                  }
                }
              }
            } else if (3 === tmp9) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_3._originalMd5 = value;
              }
            } else if (4 === tmp9) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else {
                if (arg0 !== 2) {
                  closure_132_5 = value;
                  if (null != closure_132_5) {
                    if (null != closure_132_5.convertedFile) {
                      closure_133_0.item.file = closure_132_5.convertedFile;
                      closure_133_0.currentSize = closure_132_5.convertedFile.size;
                    }
                    if (null != closure_132_5.convertedMimeType) {
                      closure_133_0.uploadAnalytics.convertedMimeType = closure_132_5.convertedMimeType;
                    }
                    if (null != closure_132_5.hashTimeMs) {
                      closure_133_0.uploadAnalytics.timing.hashTimeMs = closure_132_5.hashTimeMs;
                    }
                    if (null != closure_132_5.conversionFailureReason) {
                      closure_133_0.uploadAnalytics.conversionFailureReason = closure_132_5.conversionFailureReason;
                    }
                    closure_133_0.uploadAnalytics.timing.compressTimeMs = closure_132_5.compressTimeMs;
                  }
                  const uploadPayload = v0(5386).default.getUploadPayload(closure_133_0);
                  c8 = 5;
                  c9 = 1;
                  const _default = v0(5386).default;
                }
                c9 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (5 === tmp9) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                closure_132_6 = value;
                uploadTarget = v0(5387).getUploadTarget(closure_133_0.item.target);
                if (null != closure_132_6.filename) {
                  if ("" !== closure_132_6.filename) {
                    const currentSize2 = closure_133_0.currentSize;
                    if (0 !== closure_133_0.currentSize) {
                      maxFileSize = uploadTarget.getMaxFileSize(closure_133_0.channelId);
                      const currentSize = closure_133_0.currentSize;
                      v0 = currentSize;
                      if (currentSize == null) {
                        v0 = 0;
                      }
                      if (v0 > maxFileSize) {
                        closure_133_0.handleError(constants.ENTITY_TOO_LARGE);
                      } else {
                        if (tmp226.get("upload_fail_50")) {
                          const _Math = Math;
                          if (Math.random() < 0.5) {
                            const _setTimeout = setTimeout;
                            const timerId = setTimeout(() => {
                              v0.handleError(500);
                            }, 1000);
                          }
                        }
                        c6 = 1;
                        const _HermesInternal3 = HermesInternal;
                        logger.log("Requesting upload url for " + closure_133_0.id);
                        c8 = 8;
                        c9 = 1;
                        const obj12 = {
                          value: closure_133_0.trackTime("getUploadUrlTimeMs", tmp3(async () => {
                                                createAttachmentURL = createAttachmentURL.getCreateAttachmentURL(c0.channelId);
                                                const HTTP = v0(dependencyMap[8]).HTTP;
                                                const request = { url: createAttachmentURL, body: null, headers: c0.buildOriginalMd5Headers() };
                                                const obj4 = { files: null };
                                                const items = [closure_2_6];
                                                obj4.files = items;
                                                request.body = obj4;
                                                const merged = Object.assign(c0.createAttachmentUrlRetryOpts());
                                                request.rejectWithError = false;
                                                await HTTP.post(request);
                                                return value;
                                              })),
                          done: false
                        };
                        return obj12;
                      }
                    } else {
                      closure_133_0.handleError(constants.ENTITY_EMPTY);
                    }
                  }
                }
                const _JSON2 = JSON;
                logger.error("File does not have a filename.", JSON.stringify(closure_132_6));
                closure_133_0.handleError(constants.INVALID_FILE_ASSET);
                c9 = 3;
                const obj13 = { value: undefined, done: true };
                return obj13;
              }
            } else if (6 === tmp9) {
              c6 = 0;
              closure_132_11 = tmp226;
              let code;
              if (closure_132_11 != null) {
                const body = closure_132_11.body;
                if (body != null) {
                  code = body.code;
                }
              }
              status = code;
              if (code == null) {
                status = closure_132_11.status;
              }
              closure_132_10 = status;
              if (closure_132_10 !== constants.ENTITY_TOO_LARGE) {
                dependencyMap = closure_132_10;
                if (closure_132_10 == null) {
                  const _JSON = JSON;
                  dependencyMap = JSON.stringify(closure_132_11.body);
                }
                const _HermesInternal2 = HermesInternal;
                logger.error("Requesting upload url failed with code " + dependencyMap + " for " + closure_133_0.id);
                status(1231).captureException(closure_132_11);
                let obj4 = status(1231);
              }
              closure_133_0.handleError(closure_132_10);
              c9 = 3;
              const obj14 = { value: undefined, done: true };
              return obj14;
            } else if (7 === tmp9) {
              c6 = 0;
              closure_132_12 = tmp226;
              if (closure_133_0.isCancelled()) {
                closure_133_0.handleComplete(closure_132_12);
              } else {
                const _HermesInternal = HermesInternal;
                logger.info("Error: status " + closure_132_12.status + " for " + closure_133_0.id);
                closure_133_0.handleError(closure_132_12);
              }
            } else if (8 === tmp9) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c9 = 3;
                const obj20 = { value, done: true };
                return obj20;
              } else {
                closure_132_9 = value;
                closure_133_0.setResponseUrl(closure_132_9.body.attachments[0].upload_url);
                closure_133_0.setUploadedFilename(closure_132_9.body.attachments[0].upload_filename);
                c6 = 2;
                c8 = 9;
                c9 = 1;
                const obj21 = {
                  value: closure_133_0.trackTime("uploadTimeMs", tmp3(async () => {
                                await c0.uploadFileToCloud();
                                return value;
                              })),
                  done: false
                };
                return obj21;
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_133_0.trackUploadFinished(constants2.COMPLETED);
              closure_133_0.handleComplete(closure_133_0.id);
              c6 = 0;
            }
            c9 = 3;
            const obj22 = { value, done: true };
            return obj22;
          }
          if (closure_133_0.isCancelled()) {
            closure_133_0.handleComplete(closure_133_0.id);
          } else if (closure_133_0.allowOptimization) {
            if (closure_133_0.item.platform === v0(5339).UploadPlatform.WEB) {
              if (!closure_132_0) {
                if (true !== closure_133_0.item.imageConversionEvaluated) {
                  c8 = 4;
                  c9 = 1;
                  const obj23 = { value: CloudUpload.tryConvertToWebP(closure_133_0.item.file, () => v0._aborted, closure_133_0.id), done: false };
                  return obj23;
                }
              }
            }
          }
        }
        if (closure_133_0.isCancelled()) {
          closure_133_0.handleComplete(closure_133_0.id);
        } else {
          closure_132_0 = false;
          let tmp151 = null;
          if (closure_133_0.allowOptimization) {
            tmp151 = null;
            if (closure_133_0.item.platform === v0(5339).UploadPlatform.WEB) {
              tmp151 = null;
              if (true !== closure_133_0.item.imageConversionEvaluated) {
                tmp151 = null;
                if (null != closure_133_0.item.file) {
                  let str = "heic";
                  if (!obj15.isHeicFile(closure_133_0.item.file)) {
                    let str2 = null;
                    if (obj16.isJxrFile(closure_133_0.item.file)) {
                      str2 = "jxr";
                    }
                    str = str2;
                    obj16 = v0(5383);
                  }
                  tmp151 = str;
                  obj15 = v0(5383);
                }
              }
            }
          }
          closure_132_1 = tmp151;
          if (null != closure_132_1) {
            if (closure_133_0.item.platform === v0(5339).UploadPlatform.WEB) {
              if (null != closure_133_0.item.file) {
                let tmp168 = null != closure_133_0.mimeType;
                if (tmp168) {
                  tmp168 = "" !== closure_133_0.mimeType;
                }
                if (tmp168) {
                  if ("heic" === closure_132_1) {
                    const HeicUploadConversionExperiment = v0(5384).HeicUploadConversionExperiment;
                    let config = HeicUploadConversionExperiment.getConfig({ location: "CloudUpload.tryConvertToJpeg.heic" });
                  } else {
                    const JxrUploadConversionExperiment = v0(5385).JxrUploadConversionExperiment;
                    config = JxrUploadConversionExperiment.getConfig({ location: "CloudUpload.tryConvertToJpeg.jxr" });
                  }
                  closure_132_2 = config;
                  if (closure_132_2.enabled) {
                    file = closure_133_0.item.file;
                    const obj24 = {
                      file: closure_133_0.item.file,
                      format: closure_132_1,
                      isAborted() {
                                        return v0._aborted;
                                      },
                      uploadId: closure_133_0.id,
                      quality: closure_132_2.quality,
                      maxFileSizeBytes: closure_132_2.maxFileSizeBytes
                    };
                    c8 = 2;
                    c9 = 1;
                    const obj25 = { value: CloudUpload.tryConvertToJpeg(obj24), done: false };
                    return obj25;
                  }
                } else {
                  if ("heic" === closure_132_1) {
                    let heicMimeTypeResult = v0(5383).heicMimeType(closure_133_0.item.file);
                    const obj18 = v0(5383);
                  } else {
                    heicMimeTypeResult = v0(5383).jxrMimeType(closure_133_0.item.file);
                    const obj17 = v0(5383);
                  }
                  closure_133_0.mimeType = heicMimeTypeResult;
                }
              }
            }
          }
        }
      } catch (tmp226) {
        if (tmp4 === c6) {
          c9 = tmp2;
          throw tmp226;
        } else if (tmp === tmp228) {
          c8 = tmp6;
        } else {
          c8 = tmp5;
        }
      }
    }
  })();
};
prototype["reactNativeCompressAndExtractData"] = function reactNativeCompressAndExtractData() {
  const self = this;
  return (async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            dependencyMap = 0;
            closure_1 = tmp2;
            closure_129_0 = undefined;
            let uri;
            let name;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            closure_129_5 = undefined;
            closure_129_6 = undefined;
            if (obj17.getUploadTarget(self.item.target).shouldReactNativeCompressUploads) {
              if (true === self.reactNativeFilePrepped) {
                self.uploadAnalytics.fileAlreadyPrepped = true;
                const _HermesInternal6 = HermesInternal;
                logger.log("reactNativeCompressAndExtractData() file already prepped - " + self.id);
                c4 = 3;
                const obj5 = { value: self, done: true };
                return obj5;
              } else {
                const _HermesInternal5 = HermesInternal;
                logger.log("Starting compression/conversion for " + self.id);
                c3 = 1;
                c4 = 1;
                const obj6 = {
                  value: self.trackTime("compressTimeMs", asyncGeneratorStep(async () => {
                                reactNativeFileIndex = reactNativeFileIndex.reactNativeFileIndex;
                                if (reactNativeFileIndex == null) {
                                  reactNativeFileIndex = 0;
                                }
                                await size(dependencyMap[25]).getAttachmentFile(reactNativeFileIndex, reactNativeFileIndex);
                                return value;
                              })),
                  done: false
                };
                return obj6;
              }
            } else {
              self.uploadAnalytics.compressAndExtractDisabled = true;
              logger.log("reactNativeCompressAndExtractData() disabled by upload target");
              c4 = 3;
              const obj7 = { value: self, done: true };
              return obj7;
            }
            obj17 = size(5387);
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_129_0 = value;
              if (null != closure_129_0) {
                if (null != closure_129_0.file) {
                  uri = closure_129_0.uri;
                  name = closure_129_0.file.name;
                  if (obj14.isResolvedUpload(closure_129_0.file)) {
                    closure_130_0.uploadAnalytics.imageCompressionQuality = closure_129_0.file.imageCompressionQuality;
                    closure_130_0.uploadAnalytics.videoCompressionQuality = closure_129_0.file.videoCompressionQuality;
                    closure_130_0.uploadAnalytics.imageEncoderType = closure_129_0.file.imageEncoderType;
                    if (closure_129_0.file.isImage) {
                      closure_130_0.uploadAnalytics.sourceMediaWidth = closure_129_0.file.sourceWidth;
                      closure_130_0.uploadAnalytics.sourceMediaHeight = closure_129_0.file.sourceHeight;
                      closure_130_0.uploadAnalytics.uploadedImageWidth = closure_129_0.file.uploadedImageWidth;
                      closure_130_0.uploadAnalytics.uploadedImageHeight = closure_129_0.file.uploadedImageHeight;
                    }
                    if (undefined !== closure_129_0.file.videoMetadata) {
                      closure_130_0.uploadAnalytics.sourceMediaWidth = closure_129_0.file.videoMetadata.width;
                      closure_130_0.uploadAnalytics.sourceMediaHeight = closure_129_0.file.videoMetadata.height;
                      closure_130_0.uploadAnalytics.sourceMediaFormat = closure_129_0.file.videoMetadata.format;
                      closure_130_0.uploadAnalytics.sourceVideoBitrate = closure_129_0.file.videoMetadata.bitRate;
                      closure_130_0.uploadAnalytics.sourceVideoFramerate = closure_129_0.file.videoMetadata.frameRate;
                      closure_130_0.uploadAnalytics.videoDurationMs = closure_129_0.file.videoMetadata.durationMs;
                      closure_130_0.uploadAnalytics.sourceVideoProfile = closure_129_0.file.videoMetadata.sourceProfile;
                      closure_130_0.uploadAnalytics.sourceVideoLevel = closure_129_0.file.videoMetadata.sourceLevel;
                    }
                    if (undefined !== closure_129_0.file.encodingConfig) {
                      closure_130_0.uploadAnalytics.targetVideoWidth = closure_129_0.file.encodingConfig.targetWidth;
                      closure_130_0.uploadAnalytics.targetVideoHeight = closure_129_0.file.encodingConfig.targetHeight;
                      closure_130_0.uploadAnalytics.targetVideoBitrate = closure_129_0.file.encodingConfig.targetBitrate;
                      closure_130_0.uploadAnalytics.targetVideoCodec = "avc1";
                      closure_130_0.uploadAnalytics.targetVideoFramerate = closure_129_0.file.encodingConfig.frameRate;
                      closure_130_0.uploadAnalytics.targetVideoIsHdr = closure_129_0.file.encodingConfig.createHDR;
                      closure_130_0.uploadAnalytics.progressUpdateGranularity = closure_129_0.file.encodingConfig.progressUpdateGranularity;
                    }
                    closure_130_0.uploadAnalytics.psnr = closure_129_0.file.psnr;
                    closure_130_0.uploadAnalytics.ssim = closure_129_0.file.ssim;
                    closure_130_0.uploadAnalytics.origin = closure_129_0.file.origin;
                    closure_130_0.uploadAnalytics.psnrMeasurementLatencyMs = closure_129_0.file.psnrMeasurementLatencyMs;
                    closure_130_0.uploadAnalytics.ssimMeasurementLatencyMs = closure_129_0.file.ssimMeasurementLatencyMs;
                  }
                  closure_130_0.filename = name;
                  if (null != name) {
                    if (null != uri) {
                      if (null != closure_129_0.file.type) {
                        const parts = name.split(".");
                        const str17 = parts.pop();
                        let formatted;
                        if (str17 != null) {
                          formatted = str17.toLowerCase();
                        }
                        closure_129_3 = formatted;
                        let str3 = "image/jpeg";
                        if ("jpg" !== closure_129_3) {
                          str3 = "image/jpeg";
                          if ("jpeg" !== closure_129_3) {
                            str3 = closure_129_0.file.type;
                          }
                        }
                        closure_129_4 = str3;
                        closure_130_0.uploadAnalytics.convertedMimeType = closure_129_4;
                        const fileSize = closure_129_0.fileSize;
                        size = fileSize;
                        if (fileSize == null) {
                          c3 = 2;
                          c4 = 1;
                          const obj9 = { value: size(5340).getFileData(uri), done: false };
                          return obj9;
                        }
                      }
                    }
                  }
                  const obj10 = { filename: name, uri, type: closure_129_0.file.type };
                  const _HermesInternal2 = HermesInternal;
                  logger.error("Insufficient file data: " + obj10 + " for " + closure_130_0.id);
                  const _Error2 = Error;
                  const obj11 = { filename: name, uri, type: closure_129_0.file.type };
                  const _HermesInternal3 = HermesInternal;
                  const error = new Error("Insufficient file data: " + obj11);
                  throw error;
                }
              }
              const _HermesInternal4 = HermesInternal;
              logger.error("Failed to get compressed file for " + closure_130_0.id);
              c4 = 3;
              const obj12 = { value: closure_130_0, done: true };
              return obj12;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            size = value.size;
          }
          closure_129_5 = size;
          closure_130_0.postCompressionSize = closure_129_5;
          closure_130_0.currentSize = closure_129_5;
          if (null == closure_129_5) {
            const _HermesInternal = HermesInternal;
            logger.error("Size missing from file data for " + closure_130_0.id);
            const _Error = Error;
            const error1 = new Error("Size missing from file data");
            throw error1;
          } else {
            const _HermesInternal7 = HermesInternal;
            logger.log("Completed compression and conversion. Output size=" + closure_129_5 + " bytes; filename=" + name + "; uri=" + uri + "; originalMimeType=" + closure_130_0.mimeType + "; mimeType=" + closure_129_4 + " for " + closure_130_0.id);
            const obj13 = { uri, filename: name, mimeType: closure_129_4 };
            closure_129_6 = obj13;
            const obj15 = {};
            const merged = Object.assign(closure_130_0.item);
            const merged1 = Object.assign(closure_129_6);
            closure_130_0.item = obj15;
            closure_130_0.reactNativeFilePrepped = true;
            c4 = 3;
            const obj16 = { value: closure_130_0, done: true };
            return obj16;
          }
        }
      } catch (tmp113) {
        c4 = tmp;
        throw tmp113;
      }
    }
  })();
};
CloudUpload["tryConvertToWebP"] = function tryConvertToWebP(file, arg1, id) {
  closure_0 = file;
  closure_1 = arg1;
  closure_2 = id;
  return (async () => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp5;
            closure_132_0 = undefined;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            closure_132_6 = undefined;
            const imageAttachmentMezzanineV2Config = unknown_error(hashTimeMs[27]).getImageAttachmentMezzanineV2Config({ location: "CloudUpload.maybeConvertToWebP" });
            if (imageAttachmentMezzanineV2Config.enabled) {
              if (null == size) {
                const _HermesInternal6 = HermesInternal;
                logger.warn("webp conversion skipped for " + closure_2 + ": no file");
                c9 = 3;
                return { value: null, done: true };
              } else {
                if (null != imageAttachmentMezzanineV2Config.maxFileSizeBytes) {
                  if (size.size > imageAttachmentMezzanineV2Config.maxFileSizeBytes) {
                    const _HermesInternal5 = HermesInternal;
                    logger.warn("webp conversion skipped for " + closure_2 + ": too big");
                    c9 = 3;
                    return { value: null, done: true };
                  }
                }
                if (compressTimeMs()) {
                  c9 = 3;
                  return { value: null, done: true };
                } else {
                  const _performance2 = performance;
                  closure_132_2 = performance.now();
                  closure_132_3 = { compressTimeMs: 0 };
                  c7 = 1;
                  c8 = 2;
                  c9 = 1;
                  const obj4 = { value: tmp97(tmp98[29])(tmp98[28], tmp98.paths), done: false };
                  return obj4;
                }
              }
            } else {
              const _HermesInternal4 = HermesInternal;
              logger.warn("webp conversion skipped for " + closure_2 + ": not enabled");
              c9 = 3;
              return { value: null, done: true };
            }
            const obj9 = unknown_error(hashTimeMs[27]);
            tmp97 = unknown_error;
          }
        } else {
          if (1 === tmp8) {
            c7 = 0;
            closure_132_7 = closure_6;
            const _HermesInternal3 = HermesInternal;
            logger.warn("webp conversion failed for " + closure_133_2 + ":", closure_132_7);
            let UNKNOWN_ERROR;
            if (closure_132_1 != null) {
              UNKNOWN_ERROR = closure_132_1.UNKNOWN_ERROR;
            }
            unknown_error = UNKNOWN_ERROR;
            if (UNKNOWN_ERROR == null) {
              unknown_error = "unknown_error";
            }
            closure_132_3.conversionFailureReason = unknown_error;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_132_4 = value;
              closure_132_1 = closure_132_4.ConversionFailureReason;
              c8 = 3;
              c9 = 1;
              const obj6 = { value: closure_132_4.maybeConvertToWebP(closure_133_0), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_132_0 = value;
            if (closure_133_1()) {
              c7 = 0;
              c9 = 3;
              return { value: null, done: true };
            } else {
              if (closure_132_0.success) {
                if (null != closure_132_0.convertedBlob) {
                  const compressionRatio = closure_132_0.compressionRatio;
                  ({ sizeBefore, sizeAfter } = closure_132_0);
                  const _HermesInternal2 = HermesInternal;
                  logger.log("webp conversion worked for " + closure_133_2 + ": " + sizeBefore + " -> " + sizeAfter + " bytes (" + compressionRatio.toFixed(2) + "x)");
                  const _File = File;
                  const items = [closure_132_0.convertedBlob];
                  const obj = { type: "image/webp", lastModified: closure_133_0.lastModified };
                  file = new File(items, closure_133_0.name, obj);
                  closure_132_3.convertedFile = file;
                  closure_132_3.convertedMimeType = "image/webp";
                  hashTimeMs = closure_132_0.hashTimeMs;
                  if (hashTimeMs == null) {
                    hashTimeMs = undefined;
                  }
                  closure_132_3.hashTimeMs = hashTimeMs;
                }
                c7 = 0;
              }
              const reason = closure_132_0.reason;
              UNKNOWN_ERROR = reason;
              if (reason == null) {
                UNKNOWN_ERROR = closure_132_1.UNKNOWN_ERROR;
              }
              closure_132_5 = UNKNOWN_ERROR;
              const _HermesInternal = HermesInternal;
              logger.log("webp conversion skipped for " + closure_133_2 + ": " + closure_132_5);
              closure_132_3.conversionFailureReason = closure_132_5;
            }
          }
          const _Math = Math;
          const _performance = performance;
          closure_132_6 = Math.round(performance.now() - closure_132_2);
          compressTimeMs = undefined;
          if (closure_132_0 != null) {
            compressTimeMs = closure_132_0.compressTimeMs;
          }
          if (compressTimeMs == null) {
            compressTimeMs = closure_132_6;
          }
          closure_132_3.compressTimeMs = compressTimeMs;
          c9 = 3;
          const obj8 = { value: closure_132_3, done: true };
          return obj8;
        }
      } catch (tmp85) {
        closure_6 = tmp85;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp85;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
CloudUpload["tryConvertToJpeg"] = function tryConvertToJpeg(arg0) {
  ({ file: require, format: importDefault, isAborted: dependencyMap, uploadId: closure_3, quality: _objectWithoutProperties, maxFileSizeBytes: asyncGeneratorStep } = arg0);
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            let convertFileToJpeg;
            closure_128_1 = undefined;
            if (null != require) {
              if (!dependencyMap()) {
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj4 = { value: closure_0(tmp32[29])(tmp32[30], tmp32.paths), done: false };
                return obj4;
              }
            }
            c5 = 3;
            return { value: null, done: true };
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_2 = tmp32;
          const _HermesInternal = HermesInternal;
          logger.warn("" + closure_129_1 + " conversion threw for " + closure_129_3 + ":", closure_128_2);
          const obj5 = { convertedFile: null, analytics: { convertedMimeType: null, conversionFailureReason: "unknown_error", compressTimeMs: 0 } };
          c5 = 3;
          const obj6 = { value: obj5, done: true };
          return obj6;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            convertFileToJpeg = value.convertFileToJpeg;
            c4 = 3;
            c5 = 1;
            const obj8 = { value: convertFileToJpeg(closure_129_0, closure_129_1, closure_129_4, closure_129_5), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_128_1 = value;
          let tmp11 = null;
          if (!closure_129_2()) {
            tmp11 = closure_128_1;
          }
          c3 = 0;
          c5 = 3;
          const obj = { value: tmp11, done: true };
          return obj;
        }
      } catch (tmp32) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp32;
        } else {
          c4 = tmp;
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
  logger.log("Upload complete for " + this.id);
  this.emit("complete", arg0);
  this.removeAllListeners();
};
prototype["_cancel"] = function _cancel(COMPLETED, arg1) {
  const self = this;
  logger.log(arg1);
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
prototype["applyConversionAnalytics"] = function applyConversionAnalytics(analytics) {
  const self = this;
  ({ convertedMimeType, conversionFailureReason, imageCompressionQuality, imageEncoderType } = analytics);
  if (null != convertedMimeType) {
    self.uploadAnalytics.convertedMimeType = convertedMimeType;
  }
  if (null != conversionFailureReason) {
    self.uploadAnalytics.conversionFailureReason = conversionFailureReason;
  }
  self.uploadAnalytics.timing.compressTimeMs = analytics.compressTimeMs;
  if (null != imageCompressionQuality) {
    self.uploadAnalytics.imageCompressionQuality = imageCompressionQuality;
  }
  if (null != imageEncoderType) {
    self.uploadAnalytics.imageEncoderType = imageEncoderType;
  }
};
prototype["applyItemConversionAnalytics"] = function applyItemConversionAnalytics() {
  const self = this;
  const item = this.item;
  let tmp = item.platform === Upload2.UploadPlatform.WEB;
  if (tmp) {
    tmp = null != item.imageConversionAnalytics;
  }
  if (tmp) {
    const result = self.applyConversionAnalytics(item.imageConversionAnalytics);
  }
};
prototype["delete"] = function delete() {
  const self = this;
  return (async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null != self.uploadedFilename) {
            const uploadTarget = v3(5387).getUploadTarget(self.item.target);
            dependencyMap = 1;
            const deleteUploadURL = uploadTarget.getDeleteUploadURL(self.uploadedFilename);
            const HTTP = v3(1271).HTTP;
            c1 = 2;
            v3 = 1;
            const obj5 = { value: HTTP.del(deleteUploadURL), done: false };
            return obj5;
          }
        } else {
          if (1 === tmp6) {
            dependencyMap = 0;
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            dependencyMap = 0;
          }
          dependencyMap = 0;
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        }
        v3 = 3;
      } catch (tmp10) {
        if (tmp3 === dependencyMap) {
          v3 = tmp2;
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
    const result = 12 * DurationsDefault.Millis.HOUR;
    return Date.now() - responseUrlSetAt > result;
  }
};
prototype["ensureFreshResponseUrl"] = function ensureFreshResponseUrl() {
  const self = this;
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            _self = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            let createAttachmentURL;
            if (responseUrlStale.isResponseUrlStale(self.responseUrlSetAt)) {
              c4 = 1;
              c5 = 1;
              const obj4 = { value: _self(tmp40[21]).default.getUploadPayload(self), done: false };
              return obj4;
            } else {
              c5 = 3;
            }
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_1 = value;
            const uploadTarget = _self(tmp40[22]).getUploadTarget(closure_129_0.item.target);
            createAttachmentURL = uploadTarget.getCreateAttachmentURL(closure_129_0.channelId);
            c3 = 1;
            const HTTP = _self(tmp40[8]).HTTP;
            const request = { url: createAttachmentURL, body: null, headers: null };
            const obj6 = { files: null };
            const items = [closure_128_1];
            obj6.files = items;
            request.body = obj6;
            request.headers = closure_129_0.buildOriginalMd5Headers();
            const merged = Object.assign(closure_129_0.createAttachmentUrlRetryOpts());
            request.rejectWithError = true;
            c4 = 3;
            c5 = 1;
            const obj7 = { value: HTTP.post(request), done: false };
            return obj7;
          }
        } else if (2 === tmp7) {
          c3 = 0;
          closure_128_3 = tmp40;
          if (closure_128_3 instanceof _self(tmp40[8]).HTTPResponseError) {
            const obj8 = { response: closure_128_3 };
            throw new ResumableUploadError("upload", obj8);
          } else {
            throw closure_128_3;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_128_0 = value;
          c3 = 0;
          const body = closure_128_0.body;
          let first;
          if (body != null) {
            const attachments = body.attachments;
            if (attachments != null) {
              first = attachments[0];
            }
          }
          if (null != first) {
            closure_129_0.setResponseUrl(closure_128_0.body.attachments[0].upload_url);
            closure_129_0.setUploadedFilename(closure_128_0.body.attachments[0].upload_filename);
          }
        }
        const obj = { response: closure_128_0 };
        throw new ResumableUploadError("upload", obj);
      } catch (tmp40) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp40;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["setStatus"] = function setStatus(status) {
  this.status = status;
};
prototype["setFilename"] = function setFilename(name) {
  this.filename = name;
};
prototype["setUploadedFilename"] = function setUploadedFilename(upload_filename) {
  this.uploadedFilename = upload_filename;
};
prototype["trackUploadStart"] = function trackUploadStart() {
  const obj3 = { file_size: this.currentSize, mime_type: null, video_upload_quality: null, data_saving_mode: null, low_quality_image_mode: null, channel_id: null, connection_type: null, effective_connection_speed: null, service_provider: null };
  let str = this.mimeType;
  if (str == null) {
    str = "unknown";
  }
  obj3.mime_type = str;
  ({ videoUploadQuality: obj2.video_upload_quality, dataSavingMode: obj2.data_saving_mode, dataSavingMode: obj2.low_quality_image_mode } = UnsyncedUserSettingsStore);
  obj3.channel_id = this.channelId;
  obj3.connection_type = NetworkStore.getType();
  obj3.effective_connection_speed = NetworkStore.getEffectiveConnectionSpeed();
  obj3.service_provider = NetworkStore.getServiceProvider();
  AnalyticsUtilsDefault.track(constants.ATTACHMENT_UPLOAD_STARTED, obj3);
};
prototype["trackUploadFinished"] = function trackUploadFinished(COMPLETED) {
  const self = this;
  let num = -1;
  if (null != this.startTime) {
    const _performance = performance;
    num = performance.now() - self.startTime;
  }
  const obj3 = { duration_ms: num, file_size: self.currentSize, pre_compression_file_size: self.preCompressionSize, final_state: COMPLETED, mime_type: null, num_upload_attempts: null, error_code: null, video_upload_quality: null, data_saving_mode: null, low_quality_image_mode: null, compress_time_ms: null, get_upload_url_time_ms: null, upload_time_ms: null, converted_mime_type: null, image_compression_quality: null, video_compression_quality: null, image_encoder_type: null, was_converted: null, was_compressed: null, source_media_width: null, source_media_height: null, source_media_format: null, uploaded_image_width: null, uploaded_image_height: null, source_video_bitrate: null, video_duration_ms: null, source_video_profile_name: null, source_video_profile_level: null, target_video_width: null, target_video_height: null, target_video_bitrate: null, target_video_codec: null, target_video_framerate: null, target_video_is_hdr: null, hevc_is_supported: null, progress_update_granularity: null, source_video_framerate: null, channel_id: null, hash_time_ms: null, psnr: null, ssim: null, origin: null, psnr_measurement_latency_ms: null, ssim_measurement_latency_ms: null, upload_resumption_count: null, upload_resumption_reason: null, upload_resumption_position: null, upload_resumption_check_time_ms: null, conversion_failure_reason: null, upload_http_client: null, connection_type: null, effective_connection_speed: null, service_provider: null };
  let str = self.mimeType;
  if (str == null) {
    str = "unknown";
  }
  obj3.mime_type = str;
  let num2 = self.uploadAnalytics.numUploadAttempts;
  if (num2 == null) {
    num2 = 1;
  }
  obj3.num_upload_attempts = num2;
  obj3.error_code = self.error;
  ({ videoUploadQuality: obj2.video_upload_quality, dataSavingMode: obj2.data_saving_mode, dataSavingMode: obj2.low_quality_image_mode } = UnsyncedUserSettingsStore);
  obj3.compress_time_ms = self.uploadAnalytics.timing.compressTimeMs;
  obj3.get_upload_url_time_ms = self.uploadAnalytics.timing.getUploadUrlTimeMs;
  obj3.upload_time_ms = self.uploadAnalytics.timing.uploadTimeMs;
  let str2 = self.uploadAnalytics.convertedMimeType;
  if (str2 == null) {
    str2 = "unknown";
  }
  obj3.converted_mime_type = str2;
  let num3 = self.uploadAnalytics.imageCompressionQuality;
  if (num3 == null) {
    num3 = 0;
  }
  obj3.image_compression_quality = num3;
  let str3 = self.uploadAnalytics.videoCompressionQuality;
  if (str3 == null) {
    str3 = "unknown";
  }
  obj3.video_compression_quality = str3;
  let str4 = self.uploadAnalytics.imageEncoderType;
  if (str4 == null) {
    str4 = "unknown";
  }
  obj3.image_encoder_type = str4;
  obj3.was_converted = null != self.uploadAnalytics.convertedMimeType && self.mimeType !== self.uploadAnalytics.convertedMimeType;
  obj3.was_compressed = self.currentSize < self.preCompressionSize;
  obj3.source_media_width = self.uploadAnalytics.sourceMediaWidth;
  obj3.source_media_height = self.uploadAnalytics.sourceMediaHeight;
  obj3.source_media_format = self.uploadAnalytics.sourceMediaFormat;
  obj3.uploaded_image_width = self.uploadAnalytics.uploadedImageWidth;
  obj3.uploaded_image_height = self.uploadAnalytics.uploadedImageHeight;
  obj3.source_video_bitrate = self.uploadAnalytics.sourceVideoBitrate;
  obj3.video_duration_ms = self.uploadAnalytics.videoDurationMs;
  obj3.source_video_profile_name = self.uploadAnalytics.sourceVideoProfile;
  obj3.source_video_profile_level = self.uploadAnalytics.sourceVideoLevel;
  obj3.target_video_width = self.uploadAnalytics.targetVideoWidth;
  obj3.target_video_height = self.uploadAnalytics.targetVideoHeight;
  obj3.target_video_bitrate = self.uploadAnalytics.targetVideoBitrate;
  obj3.target_video_codec = self.uploadAnalytics.targetVideoCodec;
  obj3.target_video_framerate = self.uploadAnalytics.targetVideoFramerate;
  obj3.target_video_is_hdr = self.uploadAnalytics.targetVideoIsHdr;
  obj3.hevc_is_supported = self.uploadAnalytics.hevcIsSupported;
  obj3.progress_update_granularity = self.uploadAnalytics.progressUpdateGranularity;
  obj3.source_video_framerate = self.uploadAnalytics.sourceVideoFramerate;
  obj3.channel_id = self.channelId;
  obj3.hash_time_ms = self.uploadAnalytics.timing.hashTimeMs;
  obj3.psnr = self.uploadAnalytics.psnr;
  obj3.ssim = self.uploadAnalytics.ssim;
  obj3.origin = self.uploadAnalytics.origin;
  obj3.psnr_measurement_latency_ms = self.uploadAnalytics.psnrMeasurementLatencyMs;
  obj3.ssim_measurement_latency_ms = self.uploadAnalytics.ssimMeasurementLatencyMs;
  obj3.upload_resumption_count = self.uploadAnalytics.uploadResumptionCount;
  obj3.upload_resumption_reason = self.uploadAnalytics.uploadResumptionReason;
  obj3.upload_resumption_position = self.uploadAnalytics.uploadResumptionPosition;
  obj3.upload_resumption_check_time_ms = self.uploadAnalytics.timing.resumptionCheckTimeMs;
  obj3.conversion_failure_reason = self.uploadAnalytics.conversionFailureReason;
  let str5 = "httputils";
  if (self._libdiscoreEnabled) {
    str5 = "libdiscore";
  }
  obj3.upload_http_client = str5;
  obj3.connection_type = NetworkStore.getType();
  obj3.effective_connection_speed = NetworkStore.getEffectiveConnectionSpeed();
  obj3.service_provider = NetworkStore.getServiceProvider();
  AnalyticsUtilsDefault.track(constants.ATTACHMENT_UPLOAD_FINISHED, obj3);
};
let size = fn(2);
let result = size.fileFinishedImporting("lib/uploader/CloudUpload.tsx");

export { ResumableUploadError };
export { CloudUploadStatus };
export { CloudUpload };