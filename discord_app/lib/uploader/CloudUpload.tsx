// discord_app/lib/uploader/CloudUpload.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Upload2 from "Upload.tsx";
import uploader_UploadUtils from "UploadUtils.tsx";
import InlineUploaderDefault from "../uploader_inline/InlineUploader.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import DevSettingsStore from "../../modules/devtools/dev_settings/DevSettingsStore.tsx";
import UnsyncedUserSettingsStore from "../../modules/user_settings/UnsyncedUserSettingsStore.tsx";
import NetworkStore from "../../stores/NetworkStore.tsx";

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
      obj = { cause: null };
      obj.cause = cause;
      tmp12 = new.target;
      tmp13 = new.target;
      tmp14 = combined;
      tmp15 = obj;
      response = new response(combined, obj, errorKind, ":status_", tmp9, str, num, concat);
      tmp17 = response;
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
      obj = { response };
      throw new ResumableUploadError(closure_0, obj);
    } else {
      const _Error = Error;
      obj = { cause: null };
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
    tmp5 = new CloudUpload(global, tmp4, tmp3, new.target, global, new.target, tmp2, CloudUpload, tmp);
    closure_0 = tmp5;
    tmp5.status = closure_15.NOT_STARTED;
    tmp5.loaded = 0;
    tmp5.reactNativeFilePrepped = false;
    if (typeof closure_16 === "function") {
      tmp7 = fn;
      merged = Object.assign({ timing: null, uploadResumptionCount: 0, uploadResumptionPosition: 0 });
      merged[0] = {};
      tmp5.uploadAnalytics = merged;
      tmp5.uploadAttempts = 0;
      tmp5._aborted = false;
      tmp9 = null;
      tmp5._originalMd5 = null;
      tmp5.createResumeAwareProgressFn = function createResumeAwareProgressFn(arg0) {
        closure_0 = arg0;
        return (loaded) => {
          const sum = loaded.loaded + closure_0;
          closure_0.emit("progress", sum, loaded.total + closure_0, sum - closure_0.loaded);
          closure_0.loaded = sum;
        };
      };
      tmp5.channelId = fn;
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
      tmp10 = importDefault;
      tmp11 = importAll;
      tmp5.currentSize = num2;
      tmp5.reactNativeFileIndex = importDefault;
      if (null != importAll) {
        tmp5.allowOptimization = importAll;
      }
      tmp12 = closure_0;
      tmp13 = closure_2;
      tmp14 = global.platform === closure_0(closure_2[9]).UploadPlatform.WEB && null != global.compressionMetadata;
      if (tmp14) {
        tmp5.mimeType = global.compressionMetadata.originalContentType;
        tmp5.preCompressionSize = global.compressionMetadata.preCompressionSize;
      }
      tmp15 = global.platform === tmp12(tmp13[9]).UploadPlatform.WEB && null != global.originalMd5;
      if (tmp15) {
        tmp5._originalMd5 = global.originalMd5;
      }
      if (global.platform === tmp12(tmp13[9]).UploadPlatform.WEB) {
        if (null != global.heicConversionAnalytics) {
          ({ convertedMimeType, conversionFailureReason, compressTimeMs } = global.heicConversionAnalytics);
          if (null != convertedMimeType) {
            tmp5.uploadAnalytics.convertedMimeType = convertedMimeType;
          }
          if (null != conversionFailureReason) {
            tmp5.uploadAnalytics.conversionFailureReason = conversionFailureReason;
          }
          tmp5.uploadAnalytics.timing.compressTimeMs = compressTimeMs;
        }
      }
      tmp16 = globalThis;
      _AbortController = AbortController;
      tmp17 = new.target;
      tmp18 = new.target;
      abortController = new AbortController();
      tmp20 = abortController;
      tmp5._abortController = abortController;
      if (null == tmp5.origin) {
        tmp21 = new.target;
        tmp22 = new.target;
        defaultHttpClient = new tmp12(tmp13[10]).DefaultHttpClient();
        tmp24 = defaultHttpClient;
        tmp5._uploadHttpClient = defaultHttpClient;
        tmp5._libdiscoreEnabled = false;
        return tmp5;
      } else {
        if (typeof tmp5.origin === "string") {
          origin = tmp5.origin;
        } else {
          origin = tmp12(tmp13[9]).UploadOrigin[tmp5.origin];
        }
        tmp5.uploadAnalytics.origin = origin;
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
      num = 0;
      self.uploadAttempts = 0;
      flag = false;
      self._aborted = false;
      tmp2 = globalThis;
      _AbortController = AbortController;
      tmp3 = new.target;
      tmp4 = new.target;
      abortController = new AbortController();
      tmp6 = abortController;
      self._abortController = abortController;
      tmp7 = closure_20;
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
    obj = { timeout: DurationsDefault.Millis.HOUR, backoff: null, retries: 12 };
    let tmp8 = BackoffDefault;
    const result = 0.5 * DurationsDefault.Millis.SECOND;
    tmp8 = new tmp8(result, 30 * DurationsDefault.Millis.MINUTE);
    obj.backoff = tmp8;
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
    let timeout = { timeout: null, backoff: null, retries: 8 };
    timeout = { response: 30 * DurationsDefault.Millis.SECOND, deadline: 30 * DurationsDefault.Millis.MINUTE };
    timeout.timeout = timeout;
    let tmp4 = BackoffDefault;
    const result = 0.5 * DurationsDefault.Millis.SECOND;
    tmp4 = new tmp4(result, 60 * DurationsDefault.Millis.SECOND);
    timeout.backoff = tmp4;
    let retryOptsResult = timeout;
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
      const obj1 = { type: self.item.mimeType, uri: self.item.uri, name: self.item.filename };
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
    const obj1 = { url, headers: { "Content-Range": "bytes */*" }, rejectWithError: true, retries: 0, timeout: { deadline: 30 * v1(1090).Millis.SECOND }, signal: self._abortController.signal };
    const _uploadHttpClient = self._uploadHttpClient;
    _uploadHttpClient.doUpload(obj1);
    await _uploadHttpClient.doUpload(obj1).then((status) => {
      if (200 !== status.status) {
        if (201 !== status.status) {
          let currentSize = closure_2_14.rejectionHandler("status_check")(status);
        }
        return currentSize;
      }
      currentSize = v1.currentSize;
    }).catch((error) => {
      if (error instanceof c0(1272).HTTPResponseError) {
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
        obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj3;
            closure_129_0 = undefined;
            let _catch = self;
            let obj4 = globalThis;
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
              const obj1 = {};
              const merged = Object.assign(config);
              obj1["Content-Range"] = "bytes " + tmp37 + "-" + _catch.currentSize - 1 + "/" + _catch.currentSize;
              config.headers = obj1;
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
            obj4 = tmp2(tmp3[14]);
            tmp18.onRequestProgress = obj4.throttle(_catch.createResumeAwareProgressFn(num), 50);
            const _uploadHttpClient = _catch._uploadHttpClient;
            const obj2 = { fileByteRange: null };
            obj3 = { start: num };
            obj2.fileByteRange = obj3;
            _catch = _uploadHttpClient.doUpload(tmp18, obj2).catch;
            _catch(ResumableUploadError.rejectionHandler("upload"));
            c3 = 1;
            v3 = 1;
            const doUploadResult = _uploadHttpClient.doUpload(tmp18, obj2);
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_0 = value;
          if (200 !== closure_129_0.status) {
            if (201 !== closure_129_0.status) {
              const obj5 = { response: closure_129_0 };
              throw new ResumableUploadError("upload", obj5);
            }
          }
          v3 = 3;
          obj = { value: closure_129_0, done: true };
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
        obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value, done: true };
            return obj;
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
            let obj1 = { "Content-Type": next };
            request.headers = obj1;
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
                  obj = { value, done: true };
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
                      throw value;
                    } else if (arg0 === 2) {
                      c6 = 3;
                      obj = { value, done: true };
                      return obj;
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
                      const obj1 = { value: c3.ensureFreshResponseUrl(), done: false };
                      return obj1;
                    }
                  } else if (1 === tmp8) {
                    c3 = 0;
                    closure_129_3 = closure_4;
                    if (closure_129_3 instanceof closure_2_14) {
                      if (closure_129_3.canRetry()) {
                        const _HermesInternal2 = HermesInternal;
                        logger.warn("Error uploading " + c3.id + ": " + closure_129_3.message + ", attempting resumption");
                        c3.uploadAnalytics.uploadResumptionReason = closure_129_3.messageShort;
                        let obj8 = body(next[15]);
                        c5 = 5;
                        c6 = 1;
                        const obj2 = { value: obj8.awaitOnline(), done: false };
                        return obj2;
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
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        closure_130_3.url = c3.responseUrl;
                        if (responseUrl !== c3.responseUrl) {
                          closure_130_4 = 0;
                          c3.loaded = 0;
                        } else if (c3.uploadAttempts > 1) {
                          c5 = 4;
                          c6 = 1;
                          const obj4 = {
                            value: c3.trackTime("resumptionCheckTimeMs", tmp3(async () => {
                                          await resumePosition.getResumePosition(resumePosition.responseUrl);
                                          return value;
                                        })),
                            done: false
                          };
                          return obj4;
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
                        const obj5 = { value, done: true };
                        return obj5;
                      } else {
                        value.v = value;
                        c3 = 0;
                        c6 = 3;
                        const obj6 = { value, done: true };
                        return obj6;
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
                        const obj7 = { value, done: true };
                        return obj7;
                      } else {
                        closure_129_2 = closure_130_1.fail();
                        const _HermesInternal3 = HermesInternal;
                        logger.log("Waiting " + closure_129_2 + "ms before attachment upload attempt " + c3.uploadAttempts + 1);
                        const promise = new Promise((arg0) => setTimeout(arg0, closure_1_2));
                        c5 = 6;
                        c6 = 1;
                        obj8 = { value: promise, done: false };
                        return obj8;
                      }
                    } else if (arg0 === 1) {
                      c6 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c6 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c6 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                    c3 = 0;
                    c6 = 3;
                    const obj9 = { value, done: true };
                    return obj9;
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
                  let obj2 = { value, done: true };
                  return obj2;
                } else {
                  const iter2 = method(url);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    c9 = 3;
                    obj = { value: iter2.value, done: true };
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
            let obj3 = { value: closure_132_0.v, done: true };
            return obj3;
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
        obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp5;
            closure_128_0 = undefined;
            const _performance4 = performance;
            closure_128_0 = performance.now();
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: tmp3(), done: false };
            return obj1;
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
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c3 = 0;
          const _performance = performance;
          closure_129_2.uploadAnalytics.timing[closure_129_0] = performance.now() - closure_128_0;
          c5 = 3;
          obj = { value, done: true };
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
        obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp9;
            closure_132_0 = undefined;
            let config;
            let file;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            let uploadTarget;
            let kestrelConfig;
            let effectiveKestrelLimit;
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
                let obj1 = { value: self.reactNativeCompressAndExtractData(), done: false };
                return obj1;
              }
            }
            c9 = 3;
            c6 = 0;
            c9 = 3;
            obj = { value, done: true };
            return obj;
          }
        } else {
          if (1 === tmp9) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj2 = { value, done: true };
              return obj2;
            }
          } else {
            if (2 === tmp9) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_132_3 = value;
                if (null != closure_132_3) {
                  closure_132_0 = true;
                  if (null != closure_132_3.convertedFile) {
                    let tmp130 = null == closure_133_0._originalMd5;
                    if (tmp130) {
                      tmp130 = null != file;
                    }
                    if (tmp130) {
                      closure_3 = closure_133_0;
                      let obj13 = status(5157);
                      c8 = 3;
                      c9 = 1;
                      const obj4 = { value: obj13.fromBlob(file).catch(() => null), done: false };
                      return obj4;
                    }
                  }
                  if (null != closure_132_3.convertedMimeType) {
                    closure_133_0.uploadAnalytics.convertedMimeType = closure_132_3.convertedMimeType;
                  }
                  if (null != closure_132_3.conversionFailureReason) {
                    closure_133_0.uploadAnalytics.conversionFailureReason = closure_132_3.conversionFailureReason;
                  }
                  closure_133_0.uploadAnalytics.timing.compressTimeMs = closure_132_3.compressTimeMs;
                }
              }
            } else {
              if (3 === tmp9) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  let obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_3._originalMd5 = value;
                }
              } else if (4 === tmp9) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_132_4 = value;
                  if (null != closure_132_4) {
                    if (null != closure_132_4.convertedFile) {
                      closure_133_0.item.file = closure_132_4.convertedFile;
                      closure_133_0.currentSize = closure_132_4.convertedFile.size;
                    }
                    if (null != closure_132_4.convertedMimeType) {
                      closure_133_0.uploadAnalytics.convertedMimeType = closure_132_4.convertedMimeType;
                    }
                    if (null != closure_132_4.hashTimeMs) {
                      closure_133_0.uploadAnalytics.timing.hashTimeMs = closure_132_4.hashTimeMs;
                    }
                    if (null != closure_132_4.conversionFailureReason) {
                      closure_133_0.uploadAnalytics.conversionFailureReason = closure_132_4.conversionFailureReason;
                    }
                    closure_133_0.uploadAnalytics.timing.compressTimeMs = closure_132_4.compressTimeMs;
                  }
                  const uploadPayload = v0(5173).default.getUploadPayload(closure_133_0);
                  c8 = 5;
                  c9 = 1;
                  const _default = v0(5173).default;
                }
              } else if (5 === tmp9) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  let obj6 = { value, done: true };
                  return obj6;
                } else {
                  closure_132_5 = value;
                  uploadTarget = v0(5174).getUploadTarget(closure_133_0.item.target);
                  if (null != closure_132_5.filename) {
                    if ("" !== closure_132_5.filename) {
                      const currentSize2 = closure_133_0.currentSize;
                      if (0 !== closure_133_0.currentSize) {
                        obj5 = v0(5179);
                        kestrelConfig = obj5.getKestrelConfig({ location: "CloudUpload.upload.postCompressionCheck" });
                        obj6 = v0(5179);
                        effectiveKestrelLimit = obj6.getEffectiveKestrelLimit(kestrelConfig, uploadTarget.getMaxFileSize(closure_133_0.channelId));
                        const currentSize = closure_133_0.currentSize;
                        v0 = currentSize;
                        if (currentSize == null) {
                          v0 = 0;
                        }
                        if (v0 > effectiveKestrelLimit) {
                          closure_133_0.handleError(constants.ENTITY_TOO_LARGE);
                        } else {
                          if (tmp224.get("upload_fail_50")) {
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
                          const obj7 = {
                            value: closure_133_0.trackTime("getUploadUrlTimeMs", tmp3(async () => {
                                                    createAttachmentURL = createAttachmentURL.getCreateAttachmentURL(c0.channelId);
                                                    const HTTP = v0(dependencyMap[8]).HTTP;
                                                    const request = { url: createAttachmentURL, body: null, headers: c0.buildOriginalMd5Headers() };
                                                    const obj1 = { files: null };
                                                    const items = [closure_2_5];
                                                    obj1.files = items;
                                                    request.body = obj1;
                                                    const merged = Object.assign(c0.createAttachmentUrlRetryOpts());
                                                    request.rejectWithError = false;
                                                    await HTTP.post(request);
                                                    return value;
                                                  })),
                            done: false
                          };
                          return obj7;
                        }
                      } else {
                        closure_133_0.handleError(constants.ENTITY_EMPTY);
                      }
                    }
                  }
                  const _JSON2 = JSON;
                  logger.error("File does not have a filename.", JSON.stringify(closure_132_5));
                  closure_133_0.handleError(constants.INVALID_FILE_ASSET);
                  c9 = 3;
                  const obj8 = { value: undefined, done: true };
                  return obj8;
                }
              } else if (6 === tmp9) {
                c6 = 0;
                closure_132_11 = tmp224;
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
                  obj3 = status(1232);
                  obj3.captureException(closure_132_11);
                }
                closure_133_0.handleError(closure_132_10);
                c9 = 3;
                const obj9 = { value: undefined, done: true };
                return obj9;
              } else if (7 === tmp9) {
                c6 = 0;
                closure_132_12 = tmp224;
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
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  closure_132_9 = value;
                  closure_133_0.setResponseUrl(closure_132_9.body.attachments[0].upload_url);
                  closure_133_0.setUploadedFilename(closure_132_9.body.attachments[0].upload_filename);
                  c6 = 2;
                  c8 = 9;
                  c9 = 1;
                  const obj11 = {
                    value: closure_133_0.trackTime("uploadTimeMs", tmp3(async () => {
                                    await c0.uploadFileToCloud();
                                    return value;
                                  })),
                    done: false
                  };
                  return obj11;
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
              let obj12 = { value, done: true };
              return obj12;
            }
            closure_133_0.item.file = closure_132_3.convertedFile;
            closure_133_0.currentSize = closure_132_3.convertedFile.size;
            closure_133_0.setFilename(closure_132_3.convertedFile.name);
            let tmp141 = null == file;
            if (!tmp141) {
              let tmp144 = null != closure_133_0.mimeType;
              if (tmp144) {
                tmp144 = "" !== closure_133_0.mimeType;
              }
              tmp141 = tmp144;
            }
            if (!tmp141) {
              obj12 = v0(5171);
              closure_133_0.mimeType = obj12.heicMimeType(file);
            }
          }
          if (closure_133_0.isCancelled()) {
            closure_133_0.handleComplete(closure_133_0.id);
          } else if (closure_133_0.allowOptimization) {
            if (closure_133_0.item.platform === v0(5128).UploadPlatform.WEB) {
              if (!closure_132_0) {
                if (true !== closure_133_0.item.heicConversionEvaluated) {
                  c8 = 4;
                  c9 = 1;
                  obj13 = { value: CloudUpload.tryConvertToWebP(closure_133_0.item.file, () => v0._aborted, closure_133_0.id), done: false };
                  return obj13;
                }
              }
            }
          }
        }
        if (closure_133_0.isCancelled()) {
          closure_133_0.handleComplete(closure_133_0.id);
        } else {
          closure_132_0 = false;
          if (closure_133_0.allowOptimization) {
            if (closure_133_0.item.platform === v0(5128).UploadPlatform.WEB) {
              if (true !== closure_133_0.item.heicConversionEvaluated) {
                if (null != closure_133_0.item.file) {
                  if (obj25.isHeicFile(closure_133_0.item.file)) {
                    const HeicUploadConversionExperiment = v0(5172).HeicUploadConversionExperiment;
                    config = HeicUploadConversionExperiment.getConfig({ location: "CloudUpload.tryConvertHeicToJpeg" });
                    if (config.enabled) {
                      file = closure_133_0.item.file;
                      c8 = 2;
                      c9 = 1;
                      const obj14 = { value: CloudUpload.tryConvertHeicToJpeg(closure_133_0.item.file, () => v0._aborted, closure_133_0.id, config.quality, config.maxFileSizeBytes), done: false };
                      return obj14;
                    }
                  }
                  obj25 = v0(5171);
                }
              }
            }
          }
        }
      } catch (tmp224) {
        if (tmp4 === c6) {
          c9 = tmp2;
          throw tmp224;
        } else if (tmp === tmp226) {
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
        obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
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
                const obj1 = { value: self, done: true };
                return obj1;
              } else {
                const _HermesInternal5 = HermesInternal;
                logger.log("Starting compression/conversion for " + self.id);
                c3 = 1;
                c4 = 1;
                let obj2 = {
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
                return obj2;
              }
            } else {
              self.uploadAnalytics.compressAndExtractDisabled = true;
              logger.log("reactNativeCompressAndExtractData() disabled by upload target");
              c4 = 3;
              const obj3 = { value: self, done: true };
              return obj3;
            }
            obj17 = size(5174);
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
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
                          obj2 = size(5129);
                          c3 = 2;
                          c4 = 1;
                          const obj5 = { value: obj2.getFileData(uri), done: false };
                          return obj5;
                        }
                      }
                    }
                  }
                  const obj6 = { filename: name, uri, type: closure_129_0.file.type };
                  const _HermesInternal2 = HermesInternal;
                  logger.error("Insufficient file data: " + obj6 + " for " + closure_130_0.id);
                  const _Error2 = Error;
                  const obj7 = { filename: name, uri, type: closure_129_0.file.type };
                  const _HermesInternal3 = HermesInternal;
                  const error = new Error("Insufficient file data: " + obj7);
                  throw error;
                }
              }
              const _HermesInternal4 = HermesInternal;
              logger.error("Failed to get compressed file for " + closure_130_0.id);
              c4 = 3;
              const obj8 = { value: closure_130_0, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
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
            const obj9 = { uri, filename: name, mimeType: closure_129_4 };
            closure_129_6 = obj9;
            const obj10 = {};
            const merged = Object.assign(closure_130_0.item);
            const merged1 = Object.assign(closure_129_6);
            closure_130_0.item = obj10;
            closure_130_0.reactNativeFilePrepped = true;
            c4 = 3;
            const obj11 = { value: closure_130_0, done: true };
            return obj11;
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
        obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value, done: true };
            return obj;
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
                  const obj1 = { value: tmp97(tmp98[29])(tmp98[28], tmp98.paths), done: false };
                  return obj1;
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
              const obj2 = { value, done: true };
              return obj2;
            } else {
              closure_132_4 = value;
              closure_132_1 = closure_132_4.ConversionFailureReason;
              c8 = 3;
              c9 = 1;
              const obj3 = { value: closure_132_4.maybeConvertToWebP(closure_133_0), done: false };
              return obj3;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj4 = { value, done: true };
            return obj4;
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
                  obj = { type: "image/webp", lastModified: closure_133_0.lastModified };
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
          const obj5 = { value: closure_132_3, done: true };
          return obj5;
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
CloudUpload["tryConvertHeicToJpeg"] = function tryConvertHeicToJpeg(file, arg1, id, quality, maxFileSizeBytes) {
  closure_0 = file;
  closure_1 = arg1;
  closure_2 = id;
  closure_3 = quality;
  closure_4 = maxFileSizeBytes;
  return (async () => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            if (null != closure_0) {
              if (!closure_1()) {
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj1 = { value: UNKNOWN_ERROR(tmp3[29])(tmp3[30], tmp3.paths), done: false };
                return obj1;
              }
            }
            c6 = 3;
            return { value: null, done: true };
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_4 = closure_3;
          const _HermesInternal3 = HermesInternal;
          logger.warn("heic conversion threw for " + closure_130_2 + ":", closure_129_4);
          c6 = 3;
          let obj2 = { value: { convertedFile: null, convertedMimeType: null, conversionFailureReason: "unknown_error", compressTimeMs: 0 }, done: true };
          return obj2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_129_0 = value;
            closure_129_1 = closure_129_0.maybeConvertHeicToJpeg;
            closure_129_2 = closure_129_0.HeicConversionFailureReason;
            c5 = 3;
            c6 = 1;
            const obj4 = { value: closure_129_1(closure_130_0, closure_130_3, closure_130_4), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_129_3 = value;
          let tmp10 = null;
          if (!closure_130_1()) {
            tmp10 = null;
            if (null != closure_129_3) {
              if (!closure_129_3.success) {
                const _HermesInternal = HermesInternal;
                logger.log("heic conversion skipped for " + closure_130_2 + ": " + closure_129_3.reason);
                const reason = closure_129_3.reason;
                UNKNOWN_ERROR = reason;
                if (reason == null) {
                  UNKNOWN_ERROR = closure_129_2.UNKNOWN_ERROR;
                }
                obj = { convertedFile: null, convertedMimeType: null, conversionFailureReason: UNKNOWN_ERROR, compressTimeMs: closure_129_3.compressTimeMs };
              }
              const _HermesInternal2 = HermesInternal;
              logger.log("heic conversion worked for " + closure_130_2 + ": " + closure_129_3.sizeBefore + " -> " + closure_129_3.sizeAfter + " bytes");
              const obj6 = { convertedFile: null, convertedMimeType: "image/jpeg", conversionFailureReason: null, compressTimeMs: null };
              const _File = File;
              const items = [closure_129_3.convertedBlob];
              obj2 = UNKNOWN_ERROR(tmp3[17]);
              const obj7 = { type: "image/jpeg", lastModified: closure_130_0.lastModified };
              file = new File(items, obj2.renameToJpegExtension(closure_130_0.name), obj7);
              obj6.convertedFile = file;
              obj6.compressTimeMs = closure_129_3.compressTimeMs;
              obj = obj6;
            }
          }
          c4 = 0;
          c6 = 3;
          const obj8 = { value: tmp10, done: true };
          return obj8;
        }
      } catch (tmp68) {
        closure_3 = tmp68;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp68;
        } else {
          c5 = tmp;
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
        obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else if (null != self.uploadedFilename) {
            let obj1 = v3(5174);
            const uploadTarget = obj1.getUploadTarget(self.item.target);
            dependencyMap = 1;
            const deleteUploadURL = uploadTarget.getDeleteUploadURL(self.uploadedFilename);
            const HTTP = v3(1272).HTTP;
            c1 = 2;
            v3 = 1;
            obj1 = { value: HTTP.del(deleteUploadURL), done: false };
            return obj1;
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
          obj = { value, done: true };
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
        obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            _self = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            let createAttachmentURL;
            if (responseUrlStale.isResponseUrlStale(self.responseUrlSetAt)) {
              c4 = 1;
              c5 = 1;
              const obj1 = { value: _self(tmp40[20]).default.getUploadPayload(self), done: false };
              return obj1;
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
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_1 = value;
            const uploadTarget = _self(tmp40[21]).getUploadTarget(closure_129_0.item.target);
            createAttachmentURL = uploadTarget.getCreateAttachmentURL(closure_129_0.channelId);
            c3 = 1;
            const HTTP = _self(tmp40[8]).HTTP;
            const request = { url: createAttachmentURL, body: null, headers: null };
            const obj3 = { files: null };
            const items = [closure_128_1];
            obj3.files = items;
            request.body = obj3;
            request.headers = closure_129_0.buildOriginalMd5Headers();
            const merged = Object.assign(closure_129_0.createAttachmentUrlRetryOpts());
            request.rejectWithError = true;
            c4 = 3;
            c5 = 1;
            const obj4 = { value: HTTP.post(request), done: false };
            return obj4;
          }
        } else if (2 === tmp7) {
          c3 = 0;
          closure_128_3 = tmp40;
          if (closure_128_3 instanceof _self(tmp40[8]).HTTPResponseError) {
            const obj5 = { response: closure_128_3 };
            throw new ResumableUploadError("upload", obj5);
          } else {
            throw closure_128_3;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
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
        obj = { response: closure_128_0 };
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
  obj = { file_size: this.currentSize, mime_type: null, video_upload_quality: null, data_saving_mode: null, low_quality_image_mode: null, channel_id: null, connection_type: null, effective_connection_speed: null, service_provider: null };
  let str = this.mimeType;
  if (str == null) {
    str = "unknown";
  }
  obj.mime_type = str;
  ({ videoUploadQuality: obj2.video_upload_quality, dataSavingMode: obj2.data_saving_mode, dataSavingMode: obj2.low_quality_image_mode } = UnsyncedUserSettingsStore);
  obj.channel_id = this.channelId;
  obj.connection_type = NetworkStore.getType();
  obj.effective_connection_speed = NetworkStore.getEffectiveConnectionSpeed();
  obj.service_provider = NetworkStore.getServiceProvider();
  obj.track(constants.ATTACHMENT_UPLOAD_STARTED, obj);
};
prototype["trackUploadFinished"] = function trackUploadFinished(COMPLETED) {
  const self = this;
  let num = -1;
  if (null != this.startTime) {
    const _performance = performance;
    num = performance.now() - self.startTime;
  }
  obj = { duration_ms: num, file_size: self.currentSize, pre_compression_file_size: self.preCompressionSize, final_state: COMPLETED, mime_type: null, num_upload_attempts: null, error_code: null, video_upload_quality: null, data_saving_mode: null, low_quality_image_mode: null, compress_time_ms: null, get_upload_url_time_ms: null, upload_time_ms: null, converted_mime_type: null, image_compression_quality: null, video_compression_quality: null, image_encoder_type: null, was_converted: null, was_compressed: null, source_media_width: null, source_media_height: null, source_media_format: null, uploaded_image_width: null, uploaded_image_height: null, source_video_bitrate: null, video_duration_ms: null, source_video_profile_name: null, source_video_profile_level: null, target_video_width: null, target_video_height: null, target_video_bitrate: null, target_video_codec: null, target_video_framerate: null, target_video_is_hdr: null, hevc_is_supported: null, progress_update_granularity: null, source_video_framerate: null, channel_id: null, hash_time_ms: null, psnr: null, ssim: null, origin: null, psnr_measurement_latency_ms: null, ssim_measurement_latency_ms: null, upload_resumption_count: null, upload_resumption_reason: null, upload_resumption_position: null, upload_resumption_check_time_ms: null, conversion_failure_reason: null, upload_http_client: null, connection_type: null, effective_connection_speed: null, service_provider: null };
  let str = self.mimeType;
  if (str == null) {
    str = "unknown";
  }
  obj.mime_type = str;
  let num2 = self.uploadAnalytics.numUploadAttempts;
  if (num2 == null) {
    num2 = 1;
  }
  obj.num_upload_attempts = num2;
  obj.error_code = self.error;
  ({ videoUploadQuality: obj2.video_upload_quality, dataSavingMode: obj2.data_saving_mode, dataSavingMode: obj2.low_quality_image_mode } = UnsyncedUserSettingsStore);
  obj.compress_time_ms = self.uploadAnalytics.timing.compressTimeMs;
  obj.get_upload_url_time_ms = self.uploadAnalytics.timing.getUploadUrlTimeMs;
  obj.upload_time_ms = self.uploadAnalytics.timing.uploadTimeMs;
  let str2 = self.uploadAnalytics.convertedMimeType;
  if (str2 == null) {
    str2 = "unknown";
  }
  obj.converted_mime_type = str2;
  let num3 = self.uploadAnalytics.imageCompressionQuality;
  if (num3 == null) {
    num3 = 0;
  }
  obj.image_compression_quality = num3;
  let str3 = self.uploadAnalytics.videoCompressionQuality;
  if (str3 == null) {
    str3 = "unknown";
  }
  obj.video_compression_quality = str3;
  let str4 = self.uploadAnalytics.imageEncoderType;
  if (str4 == null) {
    str4 = "unknown";
  }
  obj.image_encoder_type = str4;
  obj.was_converted = null != self.uploadAnalytics.convertedMimeType && self.mimeType !== self.uploadAnalytics.convertedMimeType;
  obj.was_compressed = self.currentSize < self.preCompressionSize;
  obj.source_media_width = self.uploadAnalytics.sourceMediaWidth;
  obj.source_media_height = self.uploadAnalytics.sourceMediaHeight;
  obj.source_media_format = self.uploadAnalytics.sourceMediaFormat;
  obj.uploaded_image_width = self.uploadAnalytics.uploadedImageWidth;
  obj.uploaded_image_height = self.uploadAnalytics.uploadedImageHeight;
  obj.source_video_bitrate = self.uploadAnalytics.sourceVideoBitrate;
  obj.video_duration_ms = self.uploadAnalytics.videoDurationMs;
  obj.source_video_profile_name = self.uploadAnalytics.sourceVideoProfile;
  obj.source_video_profile_level = self.uploadAnalytics.sourceVideoLevel;
  obj.target_video_width = self.uploadAnalytics.targetVideoWidth;
  obj.target_video_height = self.uploadAnalytics.targetVideoHeight;
  obj.target_video_bitrate = self.uploadAnalytics.targetVideoBitrate;
  obj.target_video_codec = self.uploadAnalytics.targetVideoCodec;
  obj.target_video_framerate = self.uploadAnalytics.targetVideoFramerate;
  obj.target_video_is_hdr = self.uploadAnalytics.targetVideoIsHdr;
  obj.hevc_is_supported = self.uploadAnalytics.hevcIsSupported;
  obj.progress_update_granularity = self.uploadAnalytics.progressUpdateGranularity;
  obj.source_video_framerate = self.uploadAnalytics.sourceVideoFramerate;
  obj.channel_id = self.channelId;
  obj.hash_time_ms = self.uploadAnalytics.timing.hashTimeMs;
  obj.psnr = self.uploadAnalytics.psnr;
  obj.ssim = self.uploadAnalytics.ssim;
  obj.origin = self.uploadAnalytics.origin;
  obj.psnr_measurement_latency_ms = self.uploadAnalytics.psnrMeasurementLatencyMs;
  obj.ssim_measurement_latency_ms = self.uploadAnalytics.ssimMeasurementLatencyMs;
  obj.upload_resumption_count = self.uploadAnalytics.uploadResumptionCount;
  obj.upload_resumption_reason = self.uploadAnalytics.uploadResumptionReason;
  obj.upload_resumption_position = self.uploadAnalytics.uploadResumptionPosition;
  obj.upload_resumption_check_time_ms = self.uploadAnalytics.timing.resumptionCheckTimeMs;
  obj.conversion_failure_reason = self.uploadAnalytics.conversionFailureReason;
  let str5 = "httputils";
  if (self._libdiscoreEnabled) {
    str5 = "libdiscore";
  }
  obj.upload_http_client = str5;
  obj.connection_type = NetworkStore.getType();
  obj.effective_connection_speed = NetworkStore.getEffectiveConnectionSpeed();
  obj.service_provider = NetworkStore.getServiceProvider();
  obj.track(constants.ATTACHMENT_UPLOAD_FINISHED, obj);
};
let size = fn(2);
let result = size.fileFinishedImporting("lib/uploader/CloudUpload.tsx");

export { ResumableUploadError };
export { CloudUploadStatus };
export { CloudUpload };