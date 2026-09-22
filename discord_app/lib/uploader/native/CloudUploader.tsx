// === Module 8084: CloudUploader ===

// Module 8084 (CloudUploader)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import Upload from "Upload" /* 5346 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UploaderBase from "UploaderBase" /* 8085 */;

require = fn;
get_ActivityIndicator = fn(17);
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const Constants = fn(1074);
({ AbortCodes: closure_4, NOOP: hasOwnProperty } = Constants);
const FileUploadErrorTypes = fn(4750).FileUploadErrorTypes;
let closure_7 = new LoggerDefault("CloudUploader(Native).tsx");
const nativeEventEmitter = new NativeEventEmitter(NativeModules.MediaManager);
class CloudUploader extends tmp6 {
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
  return self(function*() {
    if (logger === 2) {
      logger = 3;
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
        logger = 2;
        if (0 === constants) {
          if (arg0 === 1) {
            logger = 3;
            throw value;
          } else if (arg0 === 2) {
            logger = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            dependencyMap = tmp8;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            let uploadTarget;
            closure_130_0 = files(8000).backgroundTaskIdentifierInvalid;
            self.once("start", tmp4(function*() {
              if (c2 === 2) {
                c2 = 3;
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
                  c2 = 2;
                  if (0 === length) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      const obj4 = { title: null, content: null };
                      const intl = closure_2_0(1115).intl;
                      obj4.title = intl.string(closure_2_0(1115).t["B/HSDd"]);
                      const intl2 = closure_2_0(1115).intl;
                      const obj5 = { count: length.length };
                      obj4.content = intl2.formatToPlainString(closure_2_0(1115).t.D0noUt, obj5);
                      c2 = 1;
                      const obj7 = { value: files(8000).startBackgroundTask(obj4), done: false };
                      return obj7;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  } else {
                    closure_128_0 = value;
                    if (tmp2._aborted) {
                      files(8000).endBackgroundTask(closure_128_0);
                      const obj = files(8000);
                    }
                    c2 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp13) {
                  c2 = tmp;
                  throw tmp13;
                }
              }
            }));
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
            const tmp106 = _superprop_getUpload();
            const call = tmp106.call;
            let tmp42 = self;
            if (typeof call === "unknown") {
              tmp106(arr);
            } else {
              call(tmp42, arr);
            }
            self._file.attachmentsCount = arr.length;
            tmp42 = self;
            self._handleStart(undefined);
            closure_130_3 = 0;
            files = self.files;
            arr = files;
            _self = files[Symbol.iterator]();
          }
        } else if (1 === tmp8) {
          c5 = 0;
          closure_130_7 = tmp61;
          const _HermesInternal = HermesInternal;
          logger.log("" + closure_131_0.id + " failed in CloudUploader uploadFiles " + closure_130_7);
          closure_131_0._handleException(closure_130_7);
          logger = 3;
          let obj4 = { value: closure_130_2, done: true };
          return obj4;
        } else if (2 === tmp8) {
          c5 = 1;
          _self.return();
          throw tmp61;
        } else if (arg0 === 1) {
          logger = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 1;
          _self.return();
          c5 = 0;
          logger = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_5 = value;
          const prop = closure_131_0.preCompressionFileSizes;
          prop.push(closure_130_5);
          closure_130_4.preCompressionSize = closure_130_5;
          closure_130_3 = closure_130_3 + closure_130_5;
          closure_131_0._file.totalPreCompressionSize = closure_130_3;
          closure_131_0._file.currentSize = closure_130_3;
          uploadTarget = _self(5394).getUploadTarget(closure_130_4.item.target);
          if (closure_130_5 > uploadTarget.getMaxFileSize(closure_130_4.channelId)) {
            const obj6 = { code: tmp61.ENTITY_TOO_LARGE, reason: null };
            let obj7 = { type: constants.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE };
            obj6.reason = obj7;
            closure_131_0._handleError(obj6);
            c5 = 1;
            _self.return();
            c5 = 0;
            logger = 3;
            let obj8 = { value: closure_130_2, done: true };
            return obj8;
          } else if (closure_130_3 > uploadTarget.getMaxTotalAttachmentSize()) {
            let obj = { code: tmp61.ENTITY_TOO_LARGE, reason: null };
            const obj10 = { type: constants.PRECOMPRESSION_SUM_TOO_LARGE };
            obj.reason = obj10;
            closure_131_0._handleError(obj);
            c5 = 1;
            _self.return();
            c5 = 0;
            logger = 3;
            const obj12 = { value: closure_130_2, done: true };
            return obj12;
          } else {
            c5 = 1;
            if (_self === undefined) {
              const _HermesInternal2 = HermesInternal;
              logger.log("" + closure_131_0.id + " queued");
              files(8087).enqueue(() => {
                closure_1_0.startUpload();
                return closure_1_0;
              });
              c5 = 0;
              logger = 3;
              const obj13 = { value: closure_130_2, done: true };
              return obj13;
            } else {
              c5 = 2;
              closure_130_4 = tmp47;
              constants = 3;
              logger = 1;
              const obj14 = { value: _self(8086).getPreCompressionFileSize(closure_130_4.item), done: false };
              return obj14;
            }
          }
          const obj15 = _self(5394);
        }
      } catch (tmp61) {
        if (tmp5 === c5) {
          logger = tmp3;
          throw tmp61;
        } else if (tmp2 === tmp63) {
          constants = tmp2;
        } else {
          constants = tmp;
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
            closure_0 = tmp7;
            if (self._aborted) {
              self._handleAborted();
            } else {
              self._handleStart(c5);
              c3 = 1;
              if (obj6.isAndroid()) {
                const result = self.observeCompressionProgress(self.files);
              }
              c4 = 3;
              c5 = 1;
              const obj4 = { value: self.compressAndCheckFileSize(), done: false };
              return obj4;
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
              const obj5 = { value, done: true };
              return obj5;
            } else if (0 !== closure_129_0.files.length) {
              const files = closure_129_0.files;
              if (files.every((status) => status.status === closure_1_0(closure_1_2[13]).CloudUploadStatus.COMPLETED)) {
                const items = closure_129_0._file.items;
                if (items != null) {
                  const item = items.forEach((item) => {
                    item.item.progress = 100;
                  });
                }
                const obj7 = {};
                const merged = Object.assign(closure_129_0._file);
                obj7.progress = 100;
                closure_129_0._file = obj7;
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
            const obj8 = { value, done: true };
            return obj8;
          } else if (value) {
            const result1 = closure_129_0.setUploadingTextForUI();
            const _recomputeProgress = closure_129_0._recomputeProgress;
            c4 = 2;
            c5 = 1;
            const obj = { value: tmp3(tmp59[12])(closure_129_0.files, true, _recomputeProgress.bind(closure_129_0)), done: false };
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
          const obj9 = { value: undefined, done: true };
          return obj9;
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
  let result = mediaEventSubscriptions.set(this._file.id, nativeEventEmitter.addListener("compression-progress", (uri) => {
    uri = uri.uri;
    const uploadItems = self.uploadItems;
    if (uploadItems.has(uri)) {
      const uploadItems2 = self.uploadItems;
      uploadItems2.get(uri).compressionProgress = uri.progress;
      const uploadItems3 = self.uploadItems;
      const items = [];
      HermesBuiltin.arraySpread(uploadItems3.values(), 0);
      const meanByResult = _modDef12.meanBy(items, "compressionProgress");
      if (meanByResult >= 100) {
        const mediaEventSubscriptions = self.mediaEventSubscriptions;
        value = mediaEventSubscriptions.get(self._file.id);
        if (value != null) {
          value.remove();
        }
        const mediaEventSubscriptions2 = self.mediaEventSubscriptions;
        mediaEventSubscriptions2.delete(self._file.id);
        const uploadItems4 = self.uploadItems;
        uploadItems4.clear();
        const items1 = self._file.items;
        if (items1 != null) {
          const item = items1.forEach((item) => {
            item.item.compressionProgress = 100;
          });
        }
        const obj3 = {};
        const merged = Object.assign(self._file);
        obj3.compressionProgress = 100;
        self._file = obj3;
      } else {
        const obj4 = {};
        const merged1 = Object.assign(self._file);
        obj4.compressionProgress = meanByResult;
        self._file = obj4;
      }
      self.emit("compression-progress", self._file);
    }
  }));
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/uploader/native/CloudUploader.tsx");

export default CloudUploader;