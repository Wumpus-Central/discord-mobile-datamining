// discord_app/lib/uploader/CloudUpload.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import InlineUploaderDefault from "../uploader_inline/InlineUploader.tsx";
import UploadPlatform from "../../modules/media_uploads/UploadPlatform.tsx";
import Upload2 from "Upload.tsx";
import uploader_UploadUtils from "UploadUtils.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import DevSettingsStore from "../../modules/devtools/dev_settings/DevSettingsStore.tsx";
import UnsyncedUserSettingsStore from "../../modules/user_settings/UnsyncedUserSettingsStore.tsx";
import NetworkStore from "../../stores/NetworkStore.tsx";
import Constants from "../../Constants.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

const Upload = Upload2;
let c0, c5, c8;

let c10;
let unpackModuleId;
let closure_3 = ["Content-Range"];
({ AbortCodes: c10, AnalyticEvents: unpackModuleId } = Constants);
let tmp3 = new LoggerDefault("CloudUpload.tsx");
let logger = tmp3;
const set = new Set([429]);
class ResumableUploadError extends Error {
  constructor(phase, arg1) {
    let cause;
    let concat;
    let response;
    let str;
    let tmp7;
    let obj = arg1;
    let num;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ cause, response } = obj);
    let concat1 = cause;
    const getErrorKind = ResumableUploadError.getErrorKind;
    if (cause == null) {
      concat = Error;
      str = undefined;
      if (response != null) {
        str = response.text;
      }
      if (str == null) {
        str = "Unknown error";
      }
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      concat1 = new concat("" + str);
    }
    const errorKind = getErrorKind(concat1, response);
    if ("server_error" !== errorKind) {
      let combined;
      if ("client_error" !== errorKind) {
        const _HermesInternal2 = HermesInternal;
        combined = "" + phase + ":" + errorKind;
      }
      const self3 = this;
      const self4 = this;
      const obj2 = { cause };
      const response1 = new response(combined, obj2, errorKind, ":status_", tmp7, str, num, concat);
      response1.name = "ResumableUploadError";
      response1.phase = phase;
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
    combined = concat(phase, ":", errorKind, ":status_", num);
    tmp7 = num;
  }
  static getErrorKind(concat1, response) {
    let str8;
    let num;
    if (response != null) {
      num = response.status;
    }
    if (num == null) {
      num = 0;
    }
    const str = concat1.message;
    const hasItem = set.has(num);
    const formatted = str.toLowerCase();
    let hasItem1 = formatted.includes("network");
    if (!hasItem1) {
      const str2 = concat1.message;
      const formatted1 = str2.toLowerCase();
      hasItem1 = formatted1.includes("terminated");
    }
    if (!hasItem1) {
      const str4 = concat1.message;
      const formatted2 = str4.toLowerCase();
      hasItem1 = formatted2.includes("offline");
    }
    if (!hasItem1) {
      const str6 = concat1.message;
      const formatted3 = str6.toLowerCase();
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
      str8 = str9;
    } else {
      str8 = "server_error";
    }
    return str8;
  }
  static rejectionHandler(status_check) {
    let closure_0 = status_check;
    return function (response) {
      if (response instanceof HTTPUtils.HTTPResponseError) {
        const self5 = this;
        const obj2 = { response };
        throw new ResumableUploadError(status_check, obj2);
      } else {
        const _Error = Error;
        const obj = { cause: null };
        if (response instanceof Error) {
          obj.cause = response;
          const self4 = this;
          throw new ResumableUploadError(status_check, obj);
        } else {
          const _Error2 = Error;
          const _String = String;
          const self = this;
          const self2 = this;
          const error = new Error(String(response));
          obj.cause = error;
          const self3 = this;
          throw new ResumableUploadError(status_check, obj);
        }
      }
    };
  }
  canRetry() {
    const self = this;
    return "server_error" === this.kind || "network_error" === self.kind || "client_error" === self.kind;
  }
}
const prototype = ResumableUploadError.prototype;
const CloudUploadStatus = {
  NOT_STARTED: "NOT_STARTED",
  STARTED: "STARTED",
  UPLOADING: "UPLOADING",
  ERROR: "ERROR",
  COMPLETED: "COMPLETED",
  CANCELED: "CANCELED",
  REMOVED_FROM_MSG_DRAFT: "REMOVED_FROM_MSG_DRAFT",
};
function UploadAnalytics() {
  const merged = Object.assign({ timing: null, uploadResumptionCount: 0, uploadResumptionPosition: 0 });
  merged[0] = {};
  return merged;
}
class CloudUpload extends Upload {
  constructor(file, channelId, length, allowOptimization) {
    const obj = new CloudUpload(file, tmp4, tmp3, new.target, file, this, tmp2, CloudUpload, tmp);
    obj.status = obj.NOT_STARTED;
    obj.loaded = 0;
    obj.reactNativeFilePrepped = false;
    if (typeof UploadAnalytics === "function") {
      const merged = Object.assign({ timing: null, uploadResumptionCount: 0, uploadResumptionPosition: 0 });
      merged[0] = {};
      obj.uploadAnalytics = merged;
      obj.uploadAttempts = 0;
      obj._aborted = false;
      obj._originalMd5 = null;
      obj.createResumeAwareProgressFn = function createResumeAwareProgressFn(arg0) {
        let closure_0 = arg0;
        return (loaded) => {
          const sum = loaded.loaded + closure_0;
          obj.emit("progress", sum, loaded.total + closure_0, sum - obj.loaded);
          obj.loaded = sum;
        };
      };
      obj.channelId = channelId;
      file = file.file;
      let num;
      if (file != null) {
        num = file.size;
      }
      if (num == null) {
        num = 0;
      }
      obj.preCompressionSize = num;
      const file2 = file.file;
      let num2;
      if (file2 != null) {
        num2 = file2.size;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj.currentSize = num2;
      obj.reactNativeFileIndex = length;
      if (null != allowOptimization) {
        obj.allowOptimization = allowOptimization;
      }
      const tmp13 = file.platform === UploadPlatform.UploadPlatform.WEB && null != file.compressionMetadata;
      if (tmp13) {
        obj.mimeType = file.compressionMetadata.originalContentType;
        obj.preCompressionSize = file.compressionMetadata.preCompressionSize;
      }
      const tmp14 = file.platform === UploadPlatform.UploadPlatform.WEB && null != file.originalMd5;
      if (tmp14) {
        obj._originalMd5 = file.originalMd5;
      }
      const result = obj.applyItemConversionAnalytics();
      const _AbortController = AbortController;
      const self = this;
      const self2 = this;
      const abortController = new AbortController();
      obj._abortController = abortController;
      if (null != obj.origin) {
        let origin;
        const uploadAnalytics = obj.uploadAnalytics;
        if (typeof obj.origin === "string") {
          origin = obj.origin;
        } else {
          origin = Upload2.UploadOrigin[obj.origin];
        }
        uploadAnalytics.origin = origin;
      }
      const self3 = this;
      const self4 = this;
      const defaultHttpClient = new uploader_UploadUtils.DefaultHttpClient();
      obj._uploadHttpClient = defaultHttpClient;
      obj._libdiscoreEnabled = false;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static fromJson(item) {
    const tmp = new CloudUpload(item.item, item.channelId, item.reactNativeFileIndex);
    let closure_0 = tmp;
    const entries = Object.entries(item);
    item = entries.forEach((item) => {
      let first;
      let tmp2;
      [first, tmp2] = item;
      if (!first.startsWith("_")) {
        closure_0[first] = tmp2;
      }
    });
    if (tmp.status !== obj.COMPLETED) {
      tmp.status = obj.NOT_STARTED;
    }
    return tmp;
  }
  parseRangeHeader(str) {
    const match = str.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
    let tmp2 = null;
    if (null != match) {
      const _parseInt = parseInt;
      const items = [parseInt(match[1], 10)];
      const _parseInt2 = parseInt;
      items[1] = parseInt(match[2], 10);
      tmp2 = items;
    }
    return tmp2;
  }
  retryOpts() {
    let obj;
    let tmp3;
    let tmp62;
    if (this.item.platform === UploadPlatform.UploadPlatform.REACT_NATIVE) {
      const obj2 = { timeout: DurationsDefault.Millis.HOUR, backoff: tmp62, retries: 12 };
      const tmp6 = BackoffDefault;
      const result = 0.5 * DurationsDefault.Millis.SECOND;
      const self3 = this;
      const self4 = this;
      obj = obj2;
      tmp62 = new tmp6(result, 30 * DurationsDefault.Millis.MINUTE);
    } else {
      obj = { timeout: DurationsDefault.Millis.HOUR, retries: 12, backoff: tmp3 };
      const self = this;
      const self2 = this;
      tmp3 = new BackoffDefault();
    }
    return obj;
  }
  createAttachmentUrlRetryOpts() {
    let obj2;
    let retryOptsResult;
    let tmp42;
    const self = this;
    if (this.item.platform === UploadPlatform.UploadPlatform.REACT_NATIVE) {
      const obj = { timeout: obj2, backoff: tmp42, retries: 8 };
      obj2 = { response: 30 * DurationsDefault.Millis.SECOND, deadline: 30 * DurationsDefault.Millis.MINUTE };
      const tmp4 = BackoffDefault;
      const result = 0.5 * DurationsDefault.Millis.SECOND;
      const self2 = this;
      const self3 = this;
      retryOptsResult = obj;
      tmp42 = new tmp4(result, 60 * DurationsDefault.Millis.SECOND);
    } else {
      retryOptsResult = self.retryOpts();
    }
    return retryOptsResult;
  }
  buildOriginalMd5Headers() {
    const obj = InlineUploaderDefault;
    return obj.buildHeadersForMd5(this._originalMd5);
  }
  supportsResume() {
    const _libdiscoreEnabled =
      this._libdiscoreEnabled || this.item.platform !== UploadPlatform.UploadPlatform.REACT_NATIVE;
    return _libdiscoreEnabled;
  }
  uploadFileToCloud() {
    let self = this;
    return (async function () {
      let c1;
      let combined1;
      let file;
      let log;
      let str4;
      if (null == self.responseUrl) {
        const _Error = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("_uploadFileToCloud - responseUrl is not set");
        throw error;
      }
      const _HermesInternal3 = HermesInternal;
      const obj9 = log;
      log = log.log;
      const combined = "Uploading " + obj8.id;
      if (self.item.platform === v3(dependencyMap[10]).UploadPlatform.REACT_NATIVE) {
        const _HermesInternal2 = HermesInternal;
        combined1 = "filename=" + obj8.item.filename + ", uri=" + obj8.item.uri;
      } else {
        const _HermesInternal = HermesInternal;
        combined1 = "filename=" + obj8.item.file.name;
      }
      log(combined, combined1);
      if (self.item.platform === v3(dependencyMap[10]).UploadPlatform.REACT_NATIVE) {
        const obj4 = { type: self.item.mimeType, uri: self.item.uri, name: self.item.filename };
        let str6 = "application/octet-stream";
        if (null != obj4.type) {
          str6 = "application/octet-stream";
          if ("application/json" !== obj4.type) {
            str6 = obj4.type;
          }
        }
        str4 = str6;
        file = obj4;
      } else {
        file = obj8.item.file;
        str4 = "application/octet-stream";
      }
      const tmp19Result = v3(dependencyMap[11]);
      if (tmp19Result.canUploadNatively(self.item)) {
        self = this;
        const self2 = this;
        const libdiscoreHttpClient = new tmp19(dependencyMap[11]).LibdiscoreHttpClient();
        self._uploadHttpClient = libdiscoreHttpClient;
        self._libdiscoreEnabled = true;
        obj9.log("Using libdiscore client for file upload");
      }
      await self.uploadFileWithResumption(self.responseUrl, file, str4);
      return value;
    })();
  }
  getResumePosition(responseUrl) {
    let closure_0 = responseUrl;
    const self = this;
    return (async () => {
      let nextPromise;
      let obj5;
      let v1;
      if (c0 === 2) {
        c0 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          let num2 = 0;
          if (0 === v1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj4 = {
                url,
                headers: { "Content-Range": "bytes */*" },
                rejectWithError: true,
                retries: 0,
                timeout: obj5,
                signal: self._abortController.signal,
              };
              obj5 = { deadline: 30 * v1(dependencyMap[12]).Millis.SECOND };
              const _uploadHttpClient = self._uploadHttpClient;
              const doUploadResult = _uploadHttpClient.doUpload(obj4);
              v1 = 1;
              c0 = 1;
              const obj6 = {
                value: nextPromise.catch((error) => {
                  if (error instanceof c0(closure_2_2[8]).HTTPResponseError) {
                    if (308 === error.status) {
                      let str = error.headers.range;
                      const parseRangeHeader = v1.parseRangeHeader;
                      if (str == null) {
                        str = "";
                      }
                      const parseRangeHeaderResult = parseRangeHeader(str);
                      let num2 = 0;
                      if (null != parseRangeHeaderResult) {
                        num2 = parseRangeHeaderResult[1] + 1;
                      }
                      return num2;
                    }
                  }
                  return closure_2_14.rejectionHandler("status_check")(error);
                }),
                done: false,
              };
              nextPromise = doUploadResult.then((status) => {
                if (200 !== status.status) {
                  let currentSize;
                  if (201 !== status.status) {
                    currentSize = closure_2_14.rejectionHandler("status_check")(status);
                  }
                  return currentSize;
                }
                currentSize = v1.currentSize;
              });
              return obj6;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp4) {
          c0 = 3;
          throw tmp4;
        }
      }
    })();
  }
  startOrResumeUpload(arg0, arg1) {
    let num;
    let closure_0 = arg0;
    let self = this;
    return (async function () {
      let closure_1;
      let doUploadResult;
      let obj7;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let config;
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
              let tmp16;
              let closure_2 = tmp2;
              config = undefined;
              const _HermesInternal2 = HermesInternal;
              logger.log(
                "Attempting to upload attachment with resumeFrom: " + 2 + " and attempts: " + self.uploadAttempts,
              );
              if (2 > 0) {
                const uploadAnalytics = obj11.uploadAnalytics;
                uploadAnalytics.uploadResumptionCount = uploadAnalytics.uploadResumptionCount + 1;
                const headers = config.headers;
                config = headers;
                if (headers == null) {
                  config = {};
                }
                const obj4 = { "Content-Range": "bytes " + 2 + "-" + self.currentSize - 1 + "/" + self.currentSize };
                const merged = Object.assign(config);
                const _HermesInternal = HermesInternal;
                config.headers = obj4;
                tmp16 = tmp17;
              } else {
                tmp16 = config;
                if (null != config.headers) {
                  const headers2 = tmp14.headers;
                  const prop = headers2["Content-Range"];
                  config.headers = v3(headers2, c3);
                  tmp16 = tmp14;
                }
              }
              const obj5 = tmp(closure_2[15]);
              tmp16.onRequestProgress = obj5.throttle(self.createResumeAwareProgressFn(2), 50);
              const _uploadHttpClient = obj11._uploadHttpClient;
              const obj6 = { fileByteRange: obj7 };
              obj7 = { start: 2 };
              c3 = 1;
              v3 = 1;
              const obj8 = {
                value: doUploadResult.catch(ResumableUploadError.rejectionHandler("upload")),
                done: false,
              };
              doUploadResult = _uploadHttpClient.doUpload(tmp16, obj6);
              return obj8;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            config = value;
            if (200 !== config.status) {
              if (201 !== config.status) {
                const obj10 = { response: config };
                self = this;
                throw new ResumableUploadError("upload", obj10);
              }
            }
            v3 = 3;
            const obj = { value: config, done: true };
            return obj;
          }
        } catch (tmp26) {
          v3 = 3;
          throw tmp26;
        }
      }
    })();
  }
  uploadFileWithResumption(responseUrl, file, arg2) {
    let closure_0 = responseUrl;
    let closure_1 = file;
    let closure_2 = arg2;
    let self = this;
    return (async function () {
      let c1;
      let iter4;
      let next;
      let obj4;
      let obj8;
      let retries;
      let timeout;
      let value;
      if (c9 === 2) {
        let num12 = 3;
        let num13 = 3;
        c9 = 3;
        const str10 = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        let num14 = 3;
        let num15 = 0;
        const str11 = " attempts";
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c6;
          try {
            let url;
            let iter3;
            let tmp16;
            let num = 2;
            c9 = 2;
            if (0 === c8) {
              if (arg0 === 1) {
                let num10 = 3;
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                let num9 = 3;
                c9 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_5 = tmp;
                url = undefined;
                c1 = undefined;
                retries = undefined;
                const retryOptsResult = self.retryOpts();
                ({ backoff: c1, retries } = retryOptsResult);
                let request = {
                  url,
                  body,
                  headers: obj4,
                  signal: self._abortController.signal,
                  onRequestProgress: obj8.throttle(self.createResumeAwareProgressFn(0), 50),
                  retries: 0,
                  rejectWithError: true,
                  timeout,
                };
                obj4 = { "Content-Type": next };
                timeout = retryOptsResult.timeout;
                obj8 = iter4(next[15]);
                let c4 = 0;
                function* _loop() {
                  let c3;
                  let value;
                  if (c6 === 2) {
                    c6 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    try {
                      let uploadResumptionPosition;
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
                          uploadResumptionPosition = undefined;
                          closure_2 = undefined;
                          request.uploadAttempts = request.uploadAttempts + 1;
                          request.uploadAnalytics.numUploadAttempts = request.uploadAttempts;
                          request = 1;
                          responseUrl = request.responseUrl;
                          c5 = 2;
                          c6 = 1;
                          const obj4 = { value: request.ensureFreshResponseUrl(), done: false };
                          return obj4;
                        }
                      } else {
                        let num7;
                        if (1 === c5) {
                          request = closure_4;
                          num7 = request;
                          if (request instanceof closure_2_14) {
                            num7 = request;
                            if (request.canRetry()) {
                              const _HermesInternal2 = HermesInternal;
                              const str = "Error uploading ";
                              logger.warn(
                                "Error uploading " + request.id + ": " + request.message + ", attempting resumption",
                              );
                              request.uploadAnalytics.uploadResumptionReason = request.messageShort;
                              const obj10 = uploadResumptionPosition(retries[16]);
                              num7 = obj10.awaitOnline();
                              c5 = 5;
                              c6 = 1;
                              const obj5 = { value: num7, done: false };
                              return obj5;
                            }
                          }
                          const _HermesInternal = HermesInternal;
                          num7 = logger.warn("Unrecoverable error uploading " + request.id + ": " + request.message);
                          throw request;
                        } else {
                          if (2 === c5) {
                            if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              request = 0;
                              c6 = 3;
                              const obj6 = { value, done: true };
                              return obj6;
                            } else {
                              closure_130_3.url = request.responseUrl;
                              num7 = responseUrl;
                              if (responseUrl !== request.responseUrl) {
                                num7 = 0;
                                request.loaded = 0;
                              } else if (request.uploadAttempts > 1) {
                                num7 = request.trackTime(
                                  "resumptionCheckTimeMs",
                                  _loop(function* () {
                                    yield resumePosition.getResumePosition(resumePosition.responseUrl);
                                    return value;
                                  }),
                                );
                                c5 = 4;
                                c6 = 1;
                                const obj7 = { value: num7, done: false };
                                return obj7;
                              }
                            }
                          } else if (3 === c5) {
                            if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              request = 0;
                              c6 = 3;
                              const obj8 = { value, done: true };
                              return obj8;
                            } else {
                              value.v = value;
                              request = 0;
                              c6 = 3;
                              const obj9 = { value, done: true };
                              return obj9;
                            }
                          } else if (4 === c5) {
                            if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              request = 0;
                              c6 = 3;
                              const obj11 = { value, done: true };
                              return obj11;
                            } else {
                              uploadResumptionPosition = value;
                              request.uploadAnalytics.uploadResumptionPosition = uploadResumptionPosition;
                              num7 = 0;
                              if (request.supportsResume()) {
                                num7 = uploadResumptionPosition;
                              }
                              num7 = request;
                              request.loaded = num7;
                            }
                          } else if (5 === c5) {
                            if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c6 = 3;
                              const obj12 = { value, done: true };
                              return obj12;
                            } else {
                              closure_2 = closure_130_1.fail();
                              const _HermesInternal3 = HermesInternal;
                              logger.log(
                                "Waiting " +
                                  closure_2 +
                                  "ms before attachment upload attempt " +
                                  request.uploadAttempts +
                                  1,
                              );
                              self = this;
                              const self2 = this;
                              const promise = new Promise((arg0) => setTimeout(arg0, closure_1_2));
                              c5 = 6;
                              c6 = 1;
                              const obj13 = { value: promise, done: false };
                              return obj13;
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
                            return { value: "IconComponent", done: null };
                          }
                          value = {};
                          num7 = request.startOrResumeUpload(closure_130_3, num7);
                          c5 = 3;
                          c6 = 1;
                          const obj14 = { value: num7, done: false };
                          return obj14;
                        }
                      }
                    } catch (tmp50) {
                      closure_4 = tmp50;
                      if (0 === request) {
                        c6 = 3;
                        throw tmp50;
                      } else {
                        c5 = 1;
                      }
                    }
                  }
                }
                if (self.uploadAttempts <= retries) {
                  if (!self._aborted) {
                    const tmp25 = _loop();
                    iter3 = tmp25[tmp52.iterator]();
                    const str8 = "iterator is not an object";
                    HermesBuiltin.ensureObject("iterator is not an object");
                    next = iter3.next;
                    url = undefined;
                  }
                }
                const _Error = Error;
                let _HermesInternal = HermesInternal;
                self = this;
                let self2 = this;
                const error = new Error("Upload failed after " + closure_133_3.uploadAttempts + " attempts");
                throw error;
              }
            } else {
              if (1 === tmp4) {
                c6 = 1;
                if (arg0 === 1) {
                  let num6 = 3;
                  c9 = 3;
                  throw value;
                } else {
                  url = value;
                  if (arg0 === 2) {
                    url = value;
                    c6 = 0;
                    const str6 = "return";
                    const method = HermesBuiltin.getMethod("return");
                    if (method === undefined) {
                      let num5 = 3;
                      c9 = 3;
                      let obj5 = { value, done: true };
                      return obj5;
                    } else {
                      const iter2 = method(url);
                      const str7 = "iterator.return() did not return an object";
                      HermesBuiltin.ensureObject("iterator.return() did not return an object");
                      if (iter2.done) {
                        let num4 = 3;
                        c9 = 3;
                        let obj = { value: iter2.value, done: true };
                        return obj;
                      } else {
                        c8 = 1;
                        let num3 = 1;
                        c9 = 1;
                        return iter2;
                      }
                    }
                  } else {
                    c6 = 0;
                    tmp16 = value;
                  }
                }
              } else {
                let tmp5 = iter3;
                let tmp7 = closure_7;
                c6 = 0;
                let str = "throw";
                let tmp6 = closure_7;
                const method1 = HermesBuiltin.getMethod("throw");
                if (method1 === undefined) {
                  const str3 = "return";
                  const method2 = HermesBuiltin.getMethod("return");
                  if (method2 !== undefined) {
                    const str4 = "iterator.return() did not return an object";
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  }
                  const str5 = "yield* delegate must have a .throw() method";
                  throw new TypeError("yield* delegate must have a .throw() method");
                } else {
                  const iter = method1(tmp6);
                  const str2 = "iterator.throw() did not return an object";
                  HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                  if (iter.done) {
                    iter4 = iter;
                  } else {
                    c8 = 1;
                    let num2 = 1;
                    c9 = 1;
                    return iter;
                  }
                }
              }
              value = iter4.value;
              url = value;
              if (value) {
                let num8 = 3;
                c9 = 3;
                let obj6 = { value: url.v, done: true };
                return obj6;
              }
            }
            iter4 = next(tmp16);
            const str9 = "iterator.next() did not return an object";
            HermesBuiltin.ensureObject("iterator.next() did not return an object");
            if (!iter4.done) {
              c8 = 1;
              let num7 = 1;
              c9 = 1;
              return iter4;
            }
          } catch (tmp45) {
            closure_7 = tmp45;
            if (0 === c6) {
              let num11 = 3;
              c9 = 3;
              throw tmp45;
            } else {
              c8 = 2;
            }
          }
        }
      }
    })();
  }
  getSize() {
    const self = this;
    return (async () => {
      let c1;
      let fileSize;
      let value;
      const uri = self.item.uri;
      const getFileSize = value(c2[17]).getFileSize;
      const tmp9 = value(c2[17]);
      if (getFileSize != null) {
        fileSize = getFileSize(uri);
      }
      await fileSize;
      if (value == null) {
        value = 0;
      }
      return value;
    })();
  }
  trackTime(compressTimeMs, arg1) {
    let closure_0 = compressTimeMs;
    let closure_1 = arg1;
    const self = this;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let diff;
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
              const _performance4 = performance;
              closure_0 = performance.now();
              c3 = 1;
              diff = tmp();
              c4 = 2;
              c5 = 1;
              const obj4 = { value: diff, done: false };
              return obj4;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            const _performance3 = performance;
            const timing = closure_129_2.uploadAnalytics.timing;
            diff = performance.now() - closure_0;
            timing[closure_129_0] = diff;
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            diff = closure_129_0;
            const _performance2 = performance;
            closure_129_2.uploadAnalytics.timing[closure_129_0] = performance.now() - closure_0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c3 = 0;
            diff = closure_129_0;
            const _performance = performance;
            closure_129_2.uploadAnalytics.timing[closure_129_0] = performance.now() - closure_0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp22) {
          closure_2 = tmp22;
          if (0 === c3) {
            c5 = 3;
            throw tmp22;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
  upload() {
    const self = this;
    return (async () => {
      let _default;
      let closure_4;
      let closure_5;
      let closure_7;
      let fromBlobResult;
      let status;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        const flag = true;
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c6;
          let createAttachmentURL;
          try {
            let v0;
            let file;
            let tmp4;
            let tmp;
            let closure_6;
            let maxFileSize;
            let closure_9;
            let closure_10;
            c9 = 2;
            switch (c8) {
              case 0: {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  let obj4 = { value, done: true };
                  return obj4;
                } else {
                  v0 = undefined;
                  let str;
                  let config;
                  file = undefined;
                  tmp4 = undefined;
                  tmp = undefined;
                  closure_6 = undefined;
                  createAttachmentURL = undefined;
                  maxFileSize = undefined;
                  closure_9 = undefined;
                  closure_10 = undefined;
                  if (self.status !== constants2.COMPLETED) {
                    self.setStatus(constants2.STARTED);
                    const _performance = performance;
                    self.startTime = performance.now();
                    self.trackUploadStart();
                    if (false === self.reactNativeFilePrepped) {
                      c6 = 1;
                      c8 = 2;
                      c9 = 1;
                      const obj5 = { value: self.reactNativeCompressAndExtractData(), done: false };
                      return obj5;
                    } else if (closure_133_0.isCancelled()) {
                      closure_133_0.handleComplete(closure_133_0.id);
                    } else {
                      v0 = false;
                      let tmp145 = null;
                      if (closure_133_0.allowOptimization) {
                        tmp145 = null;
                        if (closure_133_0.item.platform === v0(closure_2[10]).UploadPlatform.WEB) {
                          tmp145 = null;
                          if (true !== closure_133_0.item.imageConversionEvaluated) {
                            tmp145 = null;
                            if (null != closure_133_0.item.file) {
                              str = "heic";
                              const obj15 = v0(closure_2[18]);
                              if (!obj15.isHeicFile(closure_133_0.item.file)) {
                                let str2 = null;
                                const obj16 = v0(closure_2[18]);
                                if (obj16.isJxrFile(closure_133_0.item.file)) {
                                  str2 = "jxr";
                                }
                                str = str2;
                              }
                              tmp145 = str;
                            }
                          }
                        }
                      }
                      str = tmp145;
                      if (null != str) {
                        if (closure_133_0.item.platform === v0(closure_2[10]).UploadPlatform.WEB) {
                          if (null != closure_133_0.item.file) {
                            const tmp162 = null != closure_133_0.mimeType && "" !== closure_133_0.mimeType;
                            if (!tmp162) {
                              let heicMimeTypeResult;
                              if ("heic" === str) {
                                const obj18 = v0(closure_2[18]);
                                heicMimeTypeResult = obj18.heicMimeType(closure_133_0.item.file);
                              } else {
                                const obj17 = v0(closure_2[18]);
                                heicMimeTypeResult = obj17.jxrMimeType(closure_133_0.item.file);
                              }
                              closure_133_0.mimeType = heicMimeTypeResult;
                            }
                            if ("heic" === str) {
                              const HeicUploadConversionExperiment = v0(closure_2[19]).HeicUploadConversionExperiment;
                              config = HeicUploadConversionExperiment.getConfig({
                                location: "CloudUpload.tryConvertToJpeg.heic",
                              });
                            } else {
                              const JxrUploadConversionExperiment = v0(closure_2[20]).JxrUploadConversionExperiment;
                              config = JxrUploadConversionExperiment.getConfig({
                                location: "CloudUpload.tryConvertToJpeg.jxr",
                              });
                            }
                            if (config.enabled) {
                              file = closure_133_0.item.file;
                              const obj6 = {
                                file: closure_133_0.item.file,
                                format: str,
                                isAborted() {
                                  return v0._aborted;
                                },
                                uploadId: closure_133_0.id,
                                quality: config.quality,
                                maxFileSizeBytes: config.maxFileSizeBytes,
                              };
                              c8 = 3;
                              c9 = 1;
                              const obj7 = { value: CloudUpload.tryConvertToJpeg(obj6), done: false };
                              return obj7;
                            }
                          }
                        }
                      }
                      if (closure_133_0.isCancelled()) {
                        closure_133_0.handleComplete(closure_133_0.id);
                      } else {
                        if (closure_133_0.allowOptimization) {
                          if (closure_133_0.item.platform === v0(closure_2[10]).UploadPlatform.WEB) {
                            const tmp295 = v0;
                            if (!tmp295) {
                              if (true !== closure_133_0.item.imageConversionEvaluated) {
                                c8 = 5;
                                c9 = 1;
                                const obj8 = {
                                  value: CloudUpload.tryConvertToWebP(
                                    closure_133_0.item.file,
                                    () => v0._aborted,
                                    closure_133_0.id,
                                  ),
                                  done: false,
                                };
                                return obj8;
                              }
                            }
                          }
                        }
                        c8 = 6;
                        c9 = 1;
                        const obj9 = { value: _default.getUploadPayload(closure_133_0), done: false };
                        _default = v0(closure_2[22]).default;
                        return obj9;
                      }
                    }
                  }
                  c9 = 3;
                  return { value: "IconComponent", done: null };
                }
                break;
              }
              case 1: {
                c6 = 0;
                if (!closure_133_0.isCancelled()) {
                  const handleErrorResult = closure_133_0.handleError(constants.INVALID_FILE_ASSET);
                  c9 = 3;
                  const obj11 = { value: undefined, done: true };
                  return obj11;
                }
                break;
              }
              case 2: {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c9 = 3;
                  const obj12 = { value, done: true };
                  return obj12;
                } else {
                  c6 = 0;
                }
                break;
              }
              case 3: {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  const obj13 = { value, done: true };
                  return obj13;
                } else {
                  tmp4 = value;
                  if (null != tmp4) {
                    v0 = true;
                    if (null != tmp4.convertedFile) {
                      const tmp113 = null == closure_133_0._originalMd5 && null != file;
                      if (tmp113) {
                        closure_3 = closure_133_0;
                        const obj10 = status(closure_2[21]);
                        c8 = 4;
                        c9 = 1;
                        const obj14 = { value: fromBlobResult.catch(() => null), done: false };
                        fromBlobResult = obj10.fromBlob(file);
                        return obj14;
                      } else {
                        closure_133_0.item.file = tmp4.convertedFile;
                        closure_133_0.currentSize = tmp4.convertedFile.size;
                        closure_133_0.setFilename(tmp4.convertedFile.name);
                      }
                    }
                    const result = closure_133_0.applyConversionAnalytics(tmp4.analytics);
                  }
                }
                break;
              }
              case 4: {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  const obj20 = { value, done: true };
                  return obj20;
                } else {
                  closure_3._originalMd5 = value;
                }
                break;
              }
              case 5: {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  const obj21 = { value, done: true };
                  return obj21;
                } else {
                  tmp = value;
                  if (null != tmp) {
                    if (null != tmp.convertedFile) {
                      closure_133_0.item.file = tmp.convertedFile;
                      closure_133_0.currentSize = tmp.convertedFile.size;
                    }
                    if (null != tmp.convertedMimeType) {
                      closure_133_0.uploadAnalytics.convertedMimeType = tmp.convertedMimeType;
                    }
                    if (null != tmp.hashTimeMs) {
                      closure_133_0.uploadAnalytics.timing.hashTimeMs = tmp.hashTimeMs;
                    }
                    if (null != tmp.conversionFailureReason) {
                      closure_133_0.uploadAnalytics.conversionFailureReason = tmp.conversionFailureReason;
                    }
                    closure_133_0.uploadAnalytics.timing.compressTimeMs = tmp.compressTimeMs;
                  }
                }
                break;
              }
              case 6: {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  const obj22 = { value, done: true };
                  return obj22;
                } else {
                  closure_6 = value;
                  const obj28 = v0(closure_2[23]);
                  createAttachmentURL = obj28.getUploadTarget(closure_133_0.item.target);
                  if (null != closure_6.filename) {
                    if ("" !== closure_6.filename) {
                      const currentSize2 = closure_133_0.currentSize;
                      if (0 !== closure_133_0.currentSize) {
                        maxFileSize = createAttachmentURL.getMaxFileSize(closure_133_0.channelId);
                        const currentSize = closure_133_0.currentSize;
                        v0 = currentSize;
                        if (currentSize == null) {
                          v0 = 0;
                        }
                        if (v0 > maxFileSize) {
                          closure_133_0.handleError(constants.ENTITY_TOO_LARGE);
                        } else {
                          if (createAttachmentURL.get("upload_fail_50")) {
                            const _Math = Math;
                            if (Math.random() < 0.5) {
                              const _setTimeout = setTimeout;
                              const timerId = setTimeout(() => {
                                v0.handleError(500);
                              }, 1000);
                            }
                          }
                          c6 = 2;
                          const _HermesInternal3 = HermesInternal;
                          logger.log("Requesting upload url for " + closure_133_0.id);
                          c8 = 9;
                          c9 = 1;
                          const obj23 = {
                            value: closure_133_0.trackTime(
                              "getUploadUrlTimeMs",
                              tmp(async () => {
                                let c1;
                                let items;
                                let obj4;
                                createAttachmentURL = createAttachmentURL.getCreateAttachmentURL(c0.channelId);
                                const HTTP = v0(closure_2_2[8]).HTTP;
                                const request = {
                                  url: createAttachmentURL,
                                  body: obj4,
                                  headers: c0.buildOriginalMd5Headers(),
                                  rejectWithError: false,
                                };
                                obj4 = { files: items };
                                items = [closure_2_6];
                                const post = HTTP.post;
                                const merged = Object.assign(c0.createAttachmentUrlRetryOpts());
                                await post(request);
                                return value;
                              }),
                            ),
                            done: false,
                          };
                          return obj23;
                        }
                      } else {
                        closure_133_0.handleError(constants.ENTITY_EMPTY);
                      }
                    }
                  }
                  const _JSON2 = JSON;
                  logger.error("File does not have a filename.", JSON.stringify(closure_6));
                  closure_133_0.handleError(constants.INVALID_FILE_ASSET);
                  c9 = 3;
                  const obj24 = { value: undefined, done: true };
                  return obj24;
                }
                break;
              }
              case 7: {
                c6 = 0;
                let closure_11 = createAttachmentURL;
                let code;
                if (closure_11 != null) {
                  const body = closure_11.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                status = code;
                if (code == null) {
                  status = closure_11.status;
                }
                closure_10 = status;
                if (closure_10 !== constants.ENTITY_TOO_LARGE) {
                  closure_2 = closure_10;
                  const error = logger.error;
                  if (closure_10 == null) {
                    const _JSON = JSON;
                    closure_2 = JSON.stringify(closure_11.body);
                  }
                  const _HermesInternal2 = HermesInternal;
                  error("Requesting upload url failed with code " + closure_2 + " for " + closure_133_0.id);
                  const obj3 = status(closure_2[25]);
                  obj3.captureException(closure_11);
                }
                closure_133_0.handleError(closure_10);
                c9 = 3;
                const obj25 = { value: undefined, done: true };
                return obj25;
              }
              case 8: {
                c6 = 0;
                logger = createAttachmentURL;
                if (closure_133_0.isCancelled()) {
                  closure_133_0.handleComplete(logger);
                } else {
                  const _HermesInternal = HermesInternal;
                  logger.info("Error: status " + logger.status + " for " + closure_133_0.id);
                  closure_133_0.handleError(logger);
                }
                break;
              }
              case 9: {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c9 = 3;
                  const obj26 = { value, done: true };
                  return obj26;
                } else {
                  closure_9 = value;
                  closure_133_0.setResponseUrl(closure_9.body.attachments[0].upload_url);
                  closure_133_0.setUploadedFilename(closure_9.body.attachments[0].upload_filename);
                  c6 = 3;
                  c8 = 10;
                  c9 = 1;
                  const obj = {
                    value: closure_133_0.trackTime(
                      "uploadTimeMs",
                      tmp(async () => {
                        let c1;
                        await c0.uploadFileToCloud();
                        return value;
                      }),
                    ),
                    done: false,
                  };
                  return obj;
                }
                break;
              }
              default: {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c9 = 3;
                  const obj27 = { value, done: true };
                  return obj27;
                } else {
                  closure_133_0.trackUploadFinished(constants2.COMPLETED);
                  closure_133_0.handleComplete(closure_133_0.id);
                  c6 = 0;
                }
                break;
              }
            }
          } catch (tmp226) {
            createAttachmentURL = tmp226;
            if (0 === c6) {
              c9 = 3;
              throw tmp226;
            } else if (1 === c6) {
              c8 = 1;
            } else if (2 === c6) {
              c8 = 7;
            } else {
              c8 = 8;
            }
          }
        }
      }
    })();
  }
  reactNativeCompressAndExtractData() {
    let self = this;
    return (async function () {
      let closure_1;
      let name;
      let str3;
      let uri;
      if (arg0 === 1) {
        throw value;
      }
      if (arg0 === 2) {
        return value;
      }
      let c2 = 0;
      const obj16 = size(c2[23]);
      if (!obj16.getUploadTarget(self.item.target).shouldReactNativeCompressUploads) {
        self.uploadAnalytics.compressAndExtractDisabled = true;
        logger.log("reactNativeCompressAndExtractData() disabled by upload target");
        return self;
      }
      if (true === self.reactNativeFilePrepped) {
        self.uploadAnalytics.fileAlreadyPrepped = true;
        const _HermesInternal7 = HermesInternal;
        logger.log("reactNativeCompressAndExtractData() file already prepped - " + self.id);
        return self;
      }
      const _HermesInternal6 = HermesInternal;
      logger.log("Starting compression/conversion for " + self.id);
      await self.trackTime(
        "compressTimeMs",
        closure_1_5(function* () {
          let c1;
          let v0;
          const reactNativeFileIndex = v0.reactNativeFileIndex;
          const tmp6 = v0(name[26]);
          v0 = reactNativeFileIndex;
          const getAttachmentFile = tmp6.getAttachmentFile;
          const tmp7 = v0;
          if (reactNativeFileIndex == null) {
            v0 = 0;
          }
          yield getAttachmentFile(tmp7, v0);
          return value;
        }),
      );
      if (1 === tmp4) {
        if (arg0 === 1) {
          let c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          size = value;
          if (null != size) {
            if (null != size.file) {
              uri = size.uri;
              name = size.file.name;
              const obj13 = size(c2[9]);
              if (obj13.isResolvedUpload(size.file)) {
                let tmp6 = c2;
                closure_130_0.uploadAnalytics.imageCompressionQuality = size.file.imageCompressionQuality;
                closure_130_0.uploadAnalytics.videoCompressionQuality = size.file.videoCompressionQuality;
                closure_130_0.uploadAnalytics.imageEncoderType = size.file.imageEncoderType;
                if (size.file.isImage) {
                  closure_130_0.uploadAnalytics.sourceMediaWidth = size.file.sourceWidth;
                  closure_130_0.uploadAnalytics.sourceMediaHeight = size.file.sourceHeight;
                  closure_130_0.uploadAnalytics.uploadedImageWidth = size.file.uploadedImageWidth;
                  closure_130_0.uploadAnalytics.uploadedImageHeight = size.file.uploadedImageHeight;
                }
                if (undefined !== size.file.videoMetadata) {
                  closure_130_0.uploadAnalytics.sourceMediaWidth = size.file.videoMetadata.width;
                  closure_130_0.uploadAnalytics.sourceMediaHeight = size.file.videoMetadata.height;
                  closure_130_0.uploadAnalytics.sourceMediaFormat = size.file.videoMetadata.format;
                  closure_130_0.uploadAnalytics.sourceVideoBitrate = size.file.videoMetadata.bitRate;
                  closure_130_0.uploadAnalytics.sourceVideoFramerate = size.file.videoMetadata.frameRate;
                  closure_130_0.uploadAnalytics.videoDurationMs = size.file.videoMetadata.durationMs;
                  closure_130_0.uploadAnalytics.sourceVideoProfile = size.file.videoMetadata.sourceProfile;
                  closure_130_0.uploadAnalytics.sourceVideoLevel = size.file.videoMetadata.sourceLevel;
                }
                if (undefined !== size.file.encodingConfig) {
                  closure_130_0.uploadAnalytics.targetVideoWidth = size.file.encodingConfig.targetWidth;
                  closure_130_0.uploadAnalytics.targetVideoHeight = size.file.encodingConfig.targetHeight;
                  closure_130_0.uploadAnalytics.targetVideoBitrate = size.file.encodingConfig.targetBitrate;
                  closure_130_0.uploadAnalytics.targetVideoCodec = "avc1";
                  closure_130_0.uploadAnalytics.targetVideoFramerate = size.file.encodingConfig.frameRate;
                  closure_130_0.uploadAnalytics.targetVideoIsHdr = size.file.encodingConfig.createHDR;
                  closure_130_0.uploadAnalytics.progressUpdateGranularity =
                    size.file.encodingConfig.progressUpdateGranularity;
                }
                closure_130_0.uploadAnalytics.psnr = size.file.psnr;
                closure_130_0.uploadAnalytics.ssim = size.file.ssim;
                closure_130_0.uploadAnalytics.origin = size.file.origin;
                closure_130_0.uploadAnalytics.psnrMeasurementLatencyMs = size.file.psnrMeasurementLatencyMs;
                closure_130_0.uploadAnalytics.ssimMeasurementLatencyMs = size.file.ssimMeasurementLatencyMs;
              }
              closure_130_0.filename = name;
              if (null != name) {
                if (null != uri) {
                  if (null != size.file.type) {
                    const parts = name.split(".");
                    const str17 = parts.pop();
                    let formatted;
                    if (str17 != null) {
                      formatted = str17.toLowerCase();
                    }
                    const str = "image/jpeg";
                    str3 = "image/jpeg";
                    if ("jpg" !== formatted) {
                      str3 = "image/jpeg";
                      if ("jpeg" !== formatted) {
                        str3 = size.file.type;
                      }
                    }
                    closure_130_0.uploadAnalytics.convertedMimeType = str3;
                    const fileSize = size.fileSize;
                    size = fileSize;
                    if (fileSize == null) {
                      const obj3 = size(c2[27]);
                      let c3 = 2;
                      c4 = 1;
                      const obj9 = { value: obj3.getFileData(uri), done: false };
                      return obj9;
                    }
                  }
                }
              }
              const obj10 = { filename: name, uri, type: size.file.type };
              const _HermesInternal2 = HermesInternal;
              logger.error("Insufficient file data: " + obj10 + " for " + closure_130_0.id);
              const _Error2 = Error;
              const obj11 = { filename: name, uri, type: size.file.type };
              const _HermesInternal3 = HermesInternal;
              const self3 = this;
              const self4 = this;
              const error = new Error("Insufficient file data: " + obj11);
              throw error;
            }
          }
          const _HermesInternal4 = HermesInternal;
          logger.error("Failed to get compressed file for " + closure_130_0.id);
          const _Error3 = Error;
          const _HermesInternal5 = HermesInternal;
          const self5 = this;
          const self6 = this;
          const error1 = new Error("Failed to get compressed file for " + closure_130_0.id);
          throw error1;
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
      const currentSize = size;
      closure_130_0.postCompressionSize = currentSize;
      closure_130_0.currentSize = currentSize;
      if (null == currentSize) {
        const _HermesInternal = HermesInternal;
        logger.error("Size missing from file data for " + closure_130_0.id);
        const _Error = Error;
        self = this;
        const self2 = this;
        const error2 = new Error("Size missing from file data");
        throw error2;
      }
      const _HermesInternal8 = HermesInternal;
      logger.log(
        "Completed compression and conversion. Output size=" +
          currentSize +
          " bytes; filename=" +
          name +
          "; uri=" +
          uri +
          "; originalMimeType=" +
          closure_130_0.mimeType +
          "; mimeType=" +
          str3 +
          " for " +
          closure_130_0.id,
      );
      const obj12 = { uri, filename: name, mimeType: str3 };
      const obj14 = {};
      const merged = Object.assign(closure_130_0.item);
      const merged1 = Object.assign(obj12);
      closure_130_0.item = obj14;
      closure_130_0.reactNativeFilePrepped = true;
      return closure_130_0;
    })();
  }
  static tryConvertToWebP(file, arg1, id) {
    let closure_0 = file;
    let closure_1 = arg1;
    let closure_2 = id;
    return (async function () {
      let ConversionFailureReason;
      let compressTimeMs;
      let hashTimeMs;
      let self;
      let sizeAfter;
      let sizeBefore;
      let unknown_error;
      let conversionFailureReason = tmp;
      const obj9 = unknown_error(hashTimeMs[28]);
      const imageAttachmentMezzanineV2Config = obj9.getImageAttachmentMezzanineV2Config({
        location: "CloudUpload.maybeConvertToWebP",
      });
      const tmp87 = unknown_error;
      if (!imageAttachmentMezzanineV2Config.enabled) {
        const _HermesInternal4 = HermesInternal;
        logger.warn("webp conversion skipped for " + closure_2 + ": not enabled");
        return null;
      }
      if (null == unknown_error) {
        self = closure_2;
        const _HermesInternal6 = HermesInternal;
        logger.warn("webp conversion skipped for " + closure_2 + ": no file");
        return null;
      }
      if (null != imageAttachmentMezzanineV2Config.maxFileSizeBytes) {
        if (unknown_error.size > imageAttachmentMezzanineV2Config.maxFileSizeBytes) {
          self = closure_2;
          const _HermesInternal5 = HermesInternal;
          logger.warn("webp conversion skipped for " + closure_2 + ": too big");
          let c9 = 3;
          return { value: null, done: true };
        }
      }
      if (compressTimeMs()) {
        return null;
      }
      const _performance2 = performance;
      closure_2 = performance.now();
      const value = { compressTimeMs: 0 };
      await tmp87(hashTimeMs[30])(hashTimeMs[29], hashTimeMs.paths);
      if (1 === c8) {
        let c7 = 0;
        let closure_7 = closure_6;
        const _HermesInternal3 = HermesInternal;
        logger.warn("webp conversion failed for " + closure_133_2 + ":", closure_7);
        self = ConversionFailureReason == null;
        let UNKNOWN_ERROR;
        const tmp55 = value;
        if (!self) {
          UNKNOWN_ERROR = ConversionFailureReason.UNKNOWN_ERROR;
        }
        unknown_error = UNKNOWN_ERROR;
        if (UNKNOWN_ERROR == null) {
          unknown_error = "unknown_error";
        }
        tmp55.conversionFailureReason = unknown_error;
      } else if (2 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const _self = value;
          ConversionFailureReason = _self.ConversionFailureReason;
          c8 = 3;
          c9 = 1;
          const obj6 = { value: _self.maybeConvertToWebP(closure_133_0), done: false };
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
        unknown_error = value;
        if (closure_133_1()) {
          c7 = 0;
          c9 = 3;
          return { value: null, done: true };
        } else {
          if (unknown_error.success) {
            if (null != unknown_error.convertedBlob) {
              const compressionRatio = unknown_error.compressionRatio;
              ({ sizeBefore, sizeAfter } = unknown_error);
              const _HermesInternal2 = HermesInternal;
              logger.log(
                "webp conversion worked for " +
                  closure_133_2 +
                  ": " +
                  sizeBefore +
                  " -> " +
                  sizeAfter +
                  " bytes (" +
                  compressionRatio.toFixed(2) +
                  "x)",
              );
              const _File = File;
              const items = [unknown_error.convertedBlob];
              const obj = { type: "image/webp", lastModified: closure_133_0.lastModified };
              self = this;
              const self2 = this;
              file = new File(items, closure_133_0.name, obj);
              value.convertedFile = file;
              value.convertedMimeType = "image/webp";
              hashTimeMs = unknown_error.hashTimeMs;
              const tmp39 = value;
              if (hashTimeMs == null) {
                hashTimeMs = undefined;
              }
              tmp39.hashTimeMs = hashTimeMs;
            }
            c7 = 0;
          }
          const reason = unknown_error.reason;
          let UNKNOWN_ERROR2 = reason;
          if (reason == null) {
            UNKNOWN_ERROR2 = ConversionFailureReason.UNKNOWN_ERROR;
          }
          conversionFailureReason = UNKNOWN_ERROR2;
          self = logger;
          const _HermesInternal = HermesInternal;
          logger.log("webp conversion skipped for " + closure_133_2 + ": " + conversionFailureReason);
          value.conversionFailureReason = conversionFailureReason;
        }
      }
      const _Math = Math;
      const _performance = performance;
      closure_6 = Math.round(performance.now() - closure_2);
      self = unknown_error == null;
      const tmp60 = value;
      if (!self) {
        compressTimeMs = unknown_error.compressTimeMs;
      }
      if (compressTimeMs == null) {
        compressTimeMs = closure_6;
      }
      tmp60.compressTimeMs = compressTimeMs;
      return value;
    })();
  }
  static tryConvertToJpeg(arg0) {
    ({
      file: require,
      format: importDefault,
      isAborted: dependencyMap,
      uploadId: closure_3,
      quality: _objectWithoutProperties,
      maxFileSizeBytes: _asyncToGenerator,
    } = arg0);
    return (async () => {
      let closure_0;
      let paths;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let convertFileToJpeg;
          let closure_1;
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
              require = tmp4;
              convertFileToJpeg = undefined;
              closure_1 = undefined;
              if (null != require) {
                if (!dependencyMap()) {
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: require("asyncRequire")(paths[31], paths.paths), done: false };
                  return obj4;
                }
              }
              c5 = 3;
              return { value: null, done: true };
            }
          } else if (1 === c4) {
            c3 = 0;
            const _HermesInternal = HermesInternal;
            logger.warn("" + closure_129_1 + " conversion threw for " + closure_129_3 + ":", paths);
            const obj5 = {
              convertedFile: null,
              analytics: { convertedMimeType: null, conversionFailureReason: "unknown_error", compressTimeMs: 0 },
            };
            c5 = 3;
            const obj6 = { value: obj5, done: true };
            return obj6;
          } else if (2 === c4) {
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
              const obj8 = {
                value: convertFileToJpeg(closure_129_0, closure_129_1, closure_129_4, closure_129_5),
                done: false,
              };
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
            closure_1 = value;
            let tmp8 = null;
            if (!closure_129_2()) {
              tmp8 = closure_1;
            }
            c3 = 0;
            c5 = 3;
            const obj = { value: tmp8, done: true };
            return obj;
          }
        } catch (tmp29) {
          paths = tmp29;
          if (0 === c3) {
            c5 = 3;
            throw tmp29;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
  handleError(error) {
    const self = this;
    this.setStatus(obj.ERROR);
    this.error = error;
    this.trackUploadFinished(obj.ERROR);
    try {
      self.emit("error", error);
    } catch (err) {}
    self.removeAllListeners();
  }
  handleComplete(arg0) {
    this.setStatus(obj.COMPLETED);
    logger.log("Upload complete for " + this.id);
    this.emit("complete", arg0);
    this.removeAllListeners();
  }
  _cancel(COMPLETED, arg1) {
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
  }
  cancel() {
    this._cancel(obj.CANCELED, "Cancelled called for " + this.id);
  }
  removeFromMsgDraft() {
    this._cancel(obj.REMOVED_FROM_MSG_DRAFT, "Removed from draft for " + this.id);
  }
  isCancelled() {
    return this.status === obj.CANCELED || this.status === tmp.REMOVED_FROM_MSG_DRAFT;
  }
  applyConversionAnalytics(analytics) {
    let conversionFailureReason;
    let convertedMimeType;
    let imageCompressionQuality;
    let imageEncoderType;
    const self = this;
    ({ convertedMimeType, conversionFailureReason, imageCompressionQuality, imageEncoderType } = analytics);
    const compressTimeMs = analytics.compressTimeMs;
    if (null != convertedMimeType) {
      self.uploadAnalytics.convertedMimeType = convertedMimeType;
    }
    if (null != conversionFailureReason) {
      self.uploadAnalytics.conversionFailureReason = conversionFailureReason;
    }
    self.uploadAnalytics.timing.compressTimeMs = compressTimeMs;
    if (null != imageCompressionQuality) {
      self.uploadAnalytics.imageCompressionQuality = imageCompressionQuality;
    }
    if (null != imageEncoderType) {
      self.uploadAnalytics.imageEncoderType = imageEncoderType;
    }
  }
  applyItemConversionAnalytics() {
    const self = this;
    const item = this.item;
    const tmp = item.platform === UploadPlatform.UploadPlatform.WEB && null != item.imageConversionAnalytics;
    if (tmp) {
      const result = self.applyConversionAnalytics(item.imageConversionAnalytics);
    }
  }
  resetState() {
    const self = this;
    this.status = obj.NOT_STARTED;
    this.uploadedFilename = undefined;
    this.responseUrl = undefined;
    this.responseUrlSetAt = undefined;
    this.error = undefined;
    this.startTime = undefined;
    if (typeof UploadAnalytics === "function") {
      const merged = Object.assign({ timing: null, uploadResumptionCount: 0, uploadResumptionPosition: 0 });
      merged[0] = {};
      self.uploadAnalytics = merged;
      const result = self.applyItemConversionAnalytics();
      self.uploadAttempts = 0;
      self._aborted = false;
      const _AbortController = AbortController;
      const self2 = this;
      const self3 = this;
      const abortController = new AbortController();
      self._abortController = abortController;
      return super.resetState();
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  delete() {
    const self = this;
    return (async () => {
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj2 = v3(c2[23]);
              const uploadTarget = obj2.getUploadTarget(self.item.target);
              c2 = 1;
              const deleteUploadURL = uploadTarget.getDeleteUploadURL(self.uploadedFilename);
              const HTTP = v3(c2[8]).HTTP;
              c1 = 2;
              v3 = 1;
              const obj5 = { value: HTTP.del(deleteUploadURL), done: false };
              return obj5;
            }
          } else if (1 === tmp3) {
            c2 = 0;
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c2 = 0;
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp7) {
          if (0 === c2) {
            v3 = 3;
            throw tmp7;
          } else {
            c1 = 1;
          }
        }
      }
    })();
  }
  setResponseUrl(upload_url) {
    this.responseUrl = upload_url;
    this.responseUrlSetAt = Date.now();
  }
  static isResponseUrlStale(responseUrlSetAt) {
    if (null == responseUrlSetAt) {
      return true;
    } else {
      const _Date = Date;
      const result = 12 * DurationsDefault.Millis.HOUR;
      return Date.now() - responseUrlSetAt > result;
    }
  }
  ensureFreshResponseUrl() {
    let self = this;
    return (async function () {
      let _default;
      let items;
      let obj6;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        let url;
        try {
          let response;
          let closure_1;
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
              response = undefined;
              closure_1 = undefined;
              url = undefined;
              if (responseUrlStale.isResponseUrlStale(self.responseUrlSetAt)) {
                c4 = 1;
                c5 = 1;
                const obj4 = { value: _default.getUploadPayload(self), done: false };
                _default = response(url[22]).default;
                return obj4;
              }
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_1 = value;
              const obj9 = response(url[23]);
              const uploadTarget = obj9.getUploadTarget(closure_129_0.item.target);
              url = uploadTarget.getCreateAttachmentURL(closure_129_0.channelId);
              c3 = 1;
              const HTTP = response(url[8]).HTTP;
              const request = {
                url,
                body: obj6,
                headers: closure_129_0.buildOriginalMd5Headers(),
                rejectWithError: true,
              };
              obj6 = { files: items };
              items = [closure_1];
              const post = HTTP.post;
              const merged = Object.assign(closure_129_0.createAttachmentUrlRetryOpts());
              c4 = 3;
              c5 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (2 === c4) {
            c3 = 0;
            const response2 = url;
            if (response2 instanceof response(url[8]).HTTPResponseError) {
              const obj8 = { response: response2 };
              const self2 = this;
              throw new ResumableUploadError("upload", obj8);
            } else {
              throw response2;
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
            response = value;
            c3 = 0;
            const body = response.body;
            let first;
            if (body != null) {
              const attachments = body.attachments;
              if (attachments != null) {
                first = attachments[0];
              }
            }
            if (null == first) {
              const obj = { response };
              self = this;
              throw new ResumableUploadError("upload", obj);
            } else {
              closure_129_0.setResponseUrl(response.body.attachments[0].upload_url);
              closure_129_0.setUploadedFilename(response.body.attachments[0].upload_filename);
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp35) {
          url = tmp35;
          if (0 === c3) {
            c5 = 3;
            throw tmp35;
          } else {
            c4 = 2;
          }
        }
      }
    })();
  }
  setStatus(status) {
    this.status = status;
  }
  setFilename(name) {
    this.filename = name;
  }
  setUploadedFilename(upload_filename) {
    this.uploadedFilename = upload_filename;
  }
  trackUploadStart() {
    let str;
    const obj = {
      file_size: this.currentSize,
      mime_type: str,
      video_upload_quality: null,
      data_saving_mode: null,
      low_quality_image_mode: null,
      channel_id: this.channelId,
      connection_type: NetworkStore.getType(),
      effective_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
      service_provider: NetworkStore.getServiceProvider(),
    };
    str = this.mimeType;
    const track = AnalyticsUtilsDefault.track;
    const ATTACHMENT_UPLOAD_STARTED = unpackModuleId.ATTACHMENT_UPLOAD_STARTED;
    AnalyticsUtilsDefault;
    if (str == null) {
      str = "unknown";
    }
    ({
      videoUploadQuality: obj.video_upload_quality,
      dataSavingMode: obj.data_saving_mode,
      dataSavingMode: obj.low_quality_image_mode,
    } = UnsyncedUserSettingsStore);
    track(ATTACHMENT_UPLOAD_STARTED, obj);
  }
  trackUploadFinished(COMPLETED) {
    let num2;
    let num3;
    let str;
    let str2;
    let str3;
    let str4;
    let str5;
    const self = this;
    let num = -1;
    if (null != this.startTime) {
      const _performance = performance;
      num = performance.now() - self.startTime;
    }
    const obj = {
      duration_ms: num,
      file_size: self.currentSize,
      pre_compression_file_size: self.preCompressionSize,
      final_state: COMPLETED,
      mime_type: str,
      num_upload_attempts: num2,
      error_code: self.error,
      video_upload_quality: null,
      data_saving_mode: null,
      low_quality_image_mode: null,
      compress_time_ms: self.uploadAnalytics.timing.compressTimeMs,
      get_upload_url_time_ms: self.uploadAnalytics.timing.getUploadUrlTimeMs,
      upload_time_ms: self.uploadAnalytics.timing.uploadTimeMs,
      converted_mime_type: str2,
      image_compression_quality: num3,
      video_compression_quality: str3,
      image_encoder_type: str4,
      was_converted:
        null != self.uploadAnalytics.convertedMimeType && self.mimeType !== self.uploadAnalytics.convertedMimeType,
      was_compressed: self.currentSize < self.preCompressionSize,
      source_media_width: self.uploadAnalytics.sourceMediaWidth,
      source_media_height: self.uploadAnalytics.sourceMediaHeight,
      source_media_format: self.uploadAnalytics.sourceMediaFormat,
      uploaded_image_width: self.uploadAnalytics.uploadedImageWidth,
      uploaded_image_height: self.uploadAnalytics.uploadedImageHeight,
      source_video_bitrate: self.uploadAnalytics.sourceVideoBitrate,
      video_duration_ms: self.uploadAnalytics.videoDurationMs,
      source_video_profile_name: self.uploadAnalytics.sourceVideoProfile,
      source_video_profile_level: self.uploadAnalytics.sourceVideoLevel,
      target_video_width: self.uploadAnalytics.targetVideoWidth,
      target_video_height: self.uploadAnalytics.targetVideoHeight,
      target_video_bitrate: self.uploadAnalytics.targetVideoBitrate,
      target_video_codec: self.uploadAnalytics.targetVideoCodec,
      target_video_framerate: self.uploadAnalytics.targetVideoFramerate,
      target_video_is_hdr: self.uploadAnalytics.targetVideoIsHdr,
      hevc_is_supported: self.uploadAnalytics.hevcIsSupported,
      progress_update_granularity: self.uploadAnalytics.progressUpdateGranularity,
      source_video_framerate: self.uploadAnalytics.sourceVideoFramerate,
      channel_id: self.channelId,
      hash_time_ms: self.uploadAnalytics.timing.hashTimeMs,
      psnr: self.uploadAnalytics.psnr,
      ssim: self.uploadAnalytics.ssim,
      origin: self.uploadAnalytics.origin,
      psnr_measurement_latency_ms: self.uploadAnalytics.psnrMeasurementLatencyMs,
      ssim_measurement_latency_ms: self.uploadAnalytics.ssimMeasurementLatencyMs,
      upload_resumption_count: self.uploadAnalytics.uploadResumptionCount,
      upload_resumption_reason: self.uploadAnalytics.uploadResumptionReason,
      upload_resumption_position: self.uploadAnalytics.uploadResumptionPosition,
      upload_resumption_check_time_ms: self.uploadAnalytics.timing.resumptionCheckTimeMs,
      conversion_failure_reason: self.uploadAnalytics.conversionFailureReason,
      upload_http_client: str5,
      connection_type: NetworkStore.getType(),
      effective_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
      service_provider: NetworkStore.getServiceProvider(),
    };
    str = self.mimeType;
    const track = AnalyticsUtilsDefault.track;
    const ATTACHMENT_UPLOAD_FINISHED = unpackModuleId.ATTACHMENT_UPLOAD_FINISHED;
    AnalyticsUtilsDefault;
    if (str == null) {
      str = "unknown";
    }
    num2 = self.uploadAnalytics.numUploadAttempts;
    if (num2 == null) {
      num2 = 1;
    }
    ({
      videoUploadQuality: obj.video_upload_quality,
      dataSavingMode: obj.data_saving_mode,
      dataSavingMode: obj.low_quality_image_mode,
    } = UnsyncedUserSettingsStore);
    str2 = self.uploadAnalytics.convertedMimeType;
    if (str2 == null) {
      str2 = "unknown";
    }
    num3 = self.uploadAnalytics.imageCompressionQuality;
    if (num3 == null) {
      num3 = 0;
    }
    str3 = self.uploadAnalytics.videoCompressionQuality;
    if (str3 == null) {
      str3 = "unknown";
    }
    str4 = self.uploadAnalytics.imageEncoderType;
    if (str4 == null) {
      str4 = "unknown";
    }
    str5 = "httputils";
    if (self._libdiscoreEnabled) {
      str5 = "libdiscore";
    }
    track(ATTACHMENT_UPLOAD_FINISHED, obj);
  }
}
let closure_20 = CloudUpload.prototype;
let size = size_mod;
let result = size.fileFinishedImporting("lib/uploader/CloudUpload.tsx");

export { ResumableUploadError };
export { CloudUploadStatus };
export { CloudUpload };
