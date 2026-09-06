// discord_app/lib/uploader/native/CloudUploader.tsx
import LoggerDefault from "../../../modules/debug/Logger.tsx";
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import Upload from "../Upload.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UploaderBase from "../UploaderBase.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const Constants = fn(1074);
({ AbortCodes: closure_4, NOOP: hasOwnProperty } = Constants);
const MessageConstants = fn(4553);
({ DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE: metroRequire, FileUploadErrorTypes: closure_7 } =
  MessageConstants);
let closure_8 = new LoggerDefault("CloudUploader(Native).tsx");
const nativeEventEmitter = new NativeEventEmitter(NativeModules.MediaManager);
class CloudUploader extends tmp7 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.mediaEventSubscriptions = map;
    map1 = new Map();
    applyArgumentsResult.uploadItems = map1;
    applyArgumentsResult.preCompressionFileSizes = [];
    return applyArgumentsResult;
  }
}
const prototype = CloudUploader.prototype;
prototype["uploadFiles"] = function uploadFiles(guildId) {
  closure_1 = guildId;
  function _superprop_getUpload() {
    return super.upload;
  }
  const self = this;
  return self(function* () {
    if (constants === 2) {
      constants = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        constants = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            constants = 3;
            obj = { value, done: true };
            return obj;
          } else {
            dependencyMap = tmp8;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            closure_130_6 = undefined;
            let uploadTarget;
            closure_130_0 = files(7755).backgroundTaskIdentifierInvalid;
            self.once(
              "start",
              tmp4(function* () {
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp4 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    let obj = { value, done: true };
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c2 = 2;
                    if (0 === length) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        const obj1 = { title: null, content: null };
                        const intl = closure_2_0(1114).intl;
                        obj1.title = intl.string(closure_2_0(1114).t["B/HSDd"]);
                        const intl2 = closure_2_0(1114).intl;
                        const obj2 = { count: length.length };
                        obj1.content = intl2.formatToPlainString(closure_2_0(1114).t.D0noUt, obj2);
                        c2 = 1;
                        const obj3 = { value: files(7755).startBackgroundTask(obj1), done: false };
                        return obj3;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      closure_128_0 = value;
                      if (tmp2._aborted) {
                        obj = files(7755);
                        obj.endBackgroundTask(closure_128_0);
                      }
                      c2 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp13) {
                    c2 = tmp;
                    throw tmp13;
                  }
                }
              }),
            );
            function onCompleteTask() {
              closure_1(_superprop_getUpload[6]).endBackgroundTask(closure_1_0);
              closure_0.removeListener("complete", files);
              closure_0.removeListener("error", files);
            }
            closure_130_1 = onCompleteTask;
            self.once("error", onCompleteTask);
            self.once("complete", onCompleteTask);
            const promise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              closure_0.once("error", (file, code, responseBody, reason) => {
                closure_1({ file, code, responseBody, reason });
              });
              closure_0.once("complete", () => {
                if (!closure_2_0._errored) {
                  closure_0(tmp.files);
                }
              });
            });
            closure_130_2 = promise;
            c5 = 1;
            let arr = files;
            self.files = files;
            let tmp65 = _superprop_getUpload();
            const call = tmp65.call;
            let getKestrelConfig = self;
            if (typeof call === "unknown") {
              tmp65(arr);
            } else {
              call(getKestrelConfig, arr);
            }
            self._file.attachmentsCount = arr.length;
            self._handleStart(undefined);
            tmp65 = _self(5179);
            getKestrelConfig = tmp65.getKestrelConfig;
            closure_130_3 = getKestrelConfig({ location: "CloudUploader.native.uploadFiles" });
            closure_130_4 = 0;
            files = self.files;
            arr = files;
            _self = files[Symbol.iterator]();
          }
        } else if (1 === tmp8) {
          c5 = 0;
          closure_130_8 = tmp83;
          const _HermesInternal = HermesInternal;
          logger.log("" + closure_131_0.id + " failed in CloudUploader uploadFiles " + closure_130_8);
          closure_131_0._handleException(closure_130_8);
          constants = 3;
          let obj1 = { value: closure_130_2, done: true };
          return obj1;
        } else if (2 === tmp8) {
          c5 = 1;
          _self.return();
          throw tmp83;
        } else if (arg0 === 1) {
          constants = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 1;
          _self.return();
          c5 = 0;
          constants = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_130_6 = value;
          const prop = closure_131_0.preCompressionFileSizes;
          arr = prop.push(closure_130_6);
          closure_130_5.preCompressionSize = closure_130_6;
          closure_130_4 = closure_130_4 + closure_130_6;
          closure_131_0._file.totalPreCompressionSize = closure_130_4;
          closure_131_0._file.currentSize = closure_130_4;
          uploadTarget = _self(5174).getUploadTarget(closure_130_5.item.target);
          const _Math = Math;
          if (closure_130_6 > Math.max(uploadTarget.getMaxFileSize(closure_130_5.channelId), c6)) {
            let obj3 = { code: tmp83.ENTITY_TOO_LARGE, reason: null };
            let obj4 = { type: constants.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE };
            obj3.reason = obj4;
            closure_131_0._handleError(obj3);
            c5 = 1;
            _self.return();
            c5 = 0;
            constants = 3;
            const obj5 = { value: closure_130_2, done: true };
            return obj5;
          } else {
            if (closure_130_3.enabled) {
              obj = _self(5179);
              if (
                closure_130_6 >
                obj.getEffectiveKestrelLimit(closure_130_3, uploadTarget.getMaxFileSize(closure_130_5.channelId))
              ) {
                const obj6 = { code: tmp83.ENTITY_TOO_LARGE, reason: null };
                const obj7 = { type: constants.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE };
                obj6.reason = obj7;
                closure_131_0._handleError(obj6);
                c5 = 1;
                _self.return();
                c5 = 0;
                constants = 3;
                const obj8 = { value: closure_130_2, done: true };
                return obj8;
              }
            }
            if (closure_130_4 > uploadTarget.getMaxTotalAttachmentSize()) {
              const obj9 = { code: tmp83.ENTITY_TOO_LARGE, reason: null };
              const obj10 = { type: constants.PRECOMPRESSION_SUM_TOO_LARGE };
              obj9.reason = obj10;
              closure_131_0._handleError(obj9);
              c5 = 1;
              _self.return();
              c5 = 0;
              constants = 3;
              const obj11 = { value: closure_130_2, done: true };
              return obj11;
            } else {
              c5 = 1;
              if (_self === undefined) {
                const _HermesInternal2 = HermesInternal;
                logger.log("" + closure_131_0.id + " queued");
                files(7841).enqueue(() => {
                  closure_1_0.startUpload();
                  return closure_1_0;
                });
                c5 = 0;
                constants = 3;
                let obj12 = { value: closure_130_2, done: true };
                return obj12;
              } else {
                c5 = 2;
                closure_130_5 = tmp69;
                obj12 = _self(5138);
                c6 = 3;
                constants = 1;
                const obj13 = { value: obj12.getFileSize(closure_130_5.item.uri), done: false };
                return obj13;
              }
            }
          }
          const obj19 = _self(5174);
        }
      } catch (tmp83) {
        if (tmp5 === c5) {
          constants = tmp3;
          throw tmp83;
        } else if (tmp2 === tmp85) {
          c6 = tmp2;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
prototype["startUpload"] = function startUpload() {
  const self = this;
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            _self = tmp7;
            if (self._aborted) {
              self._handleAborted();
            } else {
              self._handleStart(c5);
              c3 = 1;
              let obj5 = _self(tmp59[12]);
              if (obj5.isAndroid()) {
                const result = self.observeCompressionProgress(self.files);
              }
              c4 = 3;
              c5 = 1;
              const obj1 = { value: self.compressAndCheckFileSize(), done: false };
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp59;
            closure_129_0._handleException(closure_128_0);
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else if (0 !== closure_129_0.files.length) {
              const files = closure_129_0.files;
              if (files.every((status) => status.status === closure_1_0(closure_1_2[14]).CloudUploadStatus.COMPLETED)) {
                const items = closure_129_0._file.items;
                if (items != null) {
                  const item = items.forEach((item) => {
                    item.item.progress = 100;
                  });
                }
                const obj3 = {};
                const merged = Object.assign(closure_129_0._file);
                obj3.progress = 100;
                closure_129_0._file = obj3;
                closure_129_0.emit("progress", closure_129_0._file);
                const _HermesInternal = HermesInternal;
                logger.log("All uploads complete for " + closure_129_0.id);
                closure_129_0._handleComplete();
                c3 = 0;
              } else {
                const _Error = Error;
                const error = new Error("Not all attachments were uploaded successfully");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (value) {
            const result1 = closure_129_0.setUploadingTextForUI();
            const _recomputeProgress = closure_129_0._recomputeProgress;
            c4 = 2;
            c5 = 1;
            obj = {
              value: tmp3(tmp59[13])(closure_129_0.files, true, _recomputeProgress.bind(closure_129_0)),
              done: false,
            };
            return obj;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          const _HermesInternal2 = HermesInternal;
          logger.log("All uploads cancelled for " + closure_129_0.id);
          closure_129_0._handleComplete();
          c3 = 0;
          c5 = 3;
          obj5 = { value: undefined, done: true };
          return obj5;
        }
        c5 = 3;
      } catch (tmp59) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp59;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["observeCompressionProgress"] = function observeCompressionProgress(files) {
  const self = this;
  let item = files.forEach((item) => {
    item = item.item;
    if (item.platform === Upload.UploadPlatform.REACT_NATIVE) {
      item.compressionProgress = 0;
      const uploadItems = self.uploadItems;
      const result = uploadItems.set(item.uri, item);
    }
  });
  let mediaEventSubscriptions = this.mediaEventSubscriptions;
  let result = mediaEventSubscriptions.set(
    this._file.id,
    nativeEventEmitter.addListener("compression-progress", (uri) => {
      uri = uri.uri;
      let obj = self;
      const uploadItems = self.uploadItems;
      if (uploadItems.has(uri)) {
        const uploadItems2 = obj.uploadItems;
        uploadItems2.get(uri).compressionProgress = uri.progress;
        const uploadItems3 = obj.uploadItems;
        const items = [];
        HermesBuiltin.arraySpread(uploadItems3.values(), 0);
        const meanByResult = _modDef12.meanBy(items, "compressionProgress");
        if (meanByResult >= 100) {
          const mediaEventSubscriptions = obj.mediaEventSubscriptions;
          value = mediaEventSubscriptions.get(obj._file.id);
          if (value != null) {
            value.remove();
          }
          const mediaEventSubscriptions2 = obj.mediaEventSubscriptions;
          mediaEventSubscriptions2.delete(obj._file.id);
          const uploadItems4 = obj.uploadItems;
          uploadItems4.clear();
          const items1 = obj._file.items;
          if (items1 != null) {
            const item = items1.forEach((item) => {
              item.item.compressionProgress = 100;
            });
          }
          obj = {};
          const merged = Object.assign(obj._file);
          obj.compressionProgress = 100;
          obj._file = obj;
        } else {
          obj = {};
          const merged1 = Object.assign(obj._file);
          obj.compressionProgress = meanByResult;
          obj._file = obj;
        }
        obj.emit("compression-progress", obj._file);
      }
    }),
  );
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/uploader/native/CloudUploader.tsx");

export default CloudUploader;
