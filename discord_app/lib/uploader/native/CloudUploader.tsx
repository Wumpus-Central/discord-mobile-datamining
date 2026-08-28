// === Module 7530: nativeEventEmitter ===

// Module 7530 (nativeEventEmitter)
import timestampDefault from "timestamp" /* 3 */;
import _fileSizeDefault from "_fileSize" /* 7531 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING" /* 4439 */;

const require = arg1;
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
({ AbortCodes: c4, NOOP: c5 } = ME);
({ DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE: closure_6, FileUploadErrorTypes: error } = MESSAGE_GROUP_SPACING);
let closure_8 = new timestampDefault("CloudUploader(Native).tsx");
const nativeEventEmitter = new NativeEventEmitter(NativeModules.MediaManager);
_fileSizeDefault;
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
prototype["uploadFiles"] = function uploadFiles(c3) {
  let self = this;
  closure_1 = c3;
  function _superprop_getUpload() {
    return super.upload;
  }
  self = this;
  return self(function*() {
    if (store === 2) {
      store = 3;
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
        store = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            store = 3;
            throw arg1;
          } else if (arg0 === 2) {
            store = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_3 = tmp4;
            c2 = tmp8;
            closure_0 = undefined;
            let files;
            c2 = undefined;
            closure_3 = undefined;
            closure_4 = undefined;
            c5 = undefined;
            c6 = undefined;
            store = undefined;
            let onceResult = closure_1_1;
            onceResult = closure_1_2;
            closure_0 = closure_1_1(closure_1_2[6]).backgroundTaskIdentifierInvalid;
            onceResult = closure_1_0;
            onceResult = closure_1_3;
            onceResult = closure_1_0.once("start", closure_1_3(function*() {
              if (dependencyMap === 2) {
                dependencyMap = 3;
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
                  dependencyMap = 2;
                  if (0 === length) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      let callback = tmp2;
                      obj1 = { title: null, content: null };
                      const intl = callback(1236).intl;
                      obj1[0] = intl.string(callback(1236).t["B/HSDd"]);
                      const intl2 = callback(1236).intl;
                      const obj2 = { count: null };
                      obj2[0] = length.length;
                      obj1[1] = intl2.formatToPlainString(callback(1236).t.D0noUt, obj2);
                      dependencyMap = 1;
                      const obj3 = { value: null, done: false };
                      obj3[0] = files(7447).startBackgroundTask(obj1);
                      return obj3;
                    }
                  } else if (arg0 === 1) {
                    dependencyMap = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    const obj4 = { value: null, done: true };
                    obj4[0] = arg1;
                    return obj4;
                  } else {
                    callback = arg1;
                    if (closure_1_0._aborted) {
                      obj = files(7447);
                      obj.endBackgroundTask(closure_1_0);
                    }
                    dependencyMap = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp13) {
                  dependencyMap = tmp;
                  throw tmp13;
                }
              }
            }));
            function onCompleteTask() {
              closure_2_1(closure_2_2[6]).endBackgroundTask(closure_0);
              closure_0.removeListener("complete", files);
              closure_0.removeListener("error", files);
            }
            files = onCompleteTask;
            onceResult = closure_1_0;
            onceResult = closure_1_0.once("error", onCompleteTask);
            onceResult = closure_1_0;
            onceResult = closure_1_0.once("complete", onCompleteTask);
            onceResult = new.target;
            onceResult = new.target;
            onceResult = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              closure_0.once("error", (file, code, responseBody, reason) => {
                callback({ file, code, responseBody, reason });
              });
              closure_0.once("complete", () => {
                if (!lib._errored) {
                  lib(tmp.files);
                }
              });
            });
            c2 = onceResult;
            c5 = 1;
            onceResult = closure_1_0;
            let arr = closure_1_1;
            closure_1_0.files = closure_1_1;
            onceResult = closure_1_2;
            let tmp65 = closure_1_2();
            const call = tmp65.call;
            let getKestrelConfig = closure_1_0;
            if (typeof call === "unknown") {
              tmp65(arr);
            } else {
              onceResult = call(getKestrelConfig, arr);
            }
            closure_1_0._file.attachmentsCount = arr.length;
            closure_1_0._handleStart(undefined);
            tmp65 = closure_1_0(closure_1_2[8]);
            getKestrelConfig = tmp65.getKestrelConfig;
            closure_3 = getKestrelConfig({ location: "CloudUploader.native.uploadFiles" });
            closure_4 = 0;
            files = closure_1_0.files;
            arr = files;
            closure_0 = files[Symbol.iterator]();
          }
        } else if (1 === tmp8) {
          c5 = 0;
          const logger = closure_4;
          const _HermesInternal = HermesInternal;
          logger.log("" + closure_0.id + " failed in CloudUploader uploadFiles " + logger);
          closure_0._handleException(logger);
          store = 3;
          obj1 = { value: null, done: true };
          obj1[0] = closure_1_2;
          return obj1;
        } else if (2 === tmp8) {
          c5 = 1;
          closure_0.return();
          throw closure_4;
        } else if (arg0 === 1) {
          store = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 1;
          closure_0.return();
          c5 = 0;
          store = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          c6 = arg1;
          const prop = closure_0.preCompressionFileSizes;
          arr = prop.push(c6);
          c5.preCompressionSize = c6;
          onceResult = c6;
          closure_4 = closure_4 + c6;
          onceResult = closure_0;
          onceResult = closure_4;
          closure_0._file.totalPreCompressionSize = closure_4;
          onceResult = closure_0;
          onceResult = closure_4;
          closure_0._file.currentSize = closure_4;
          onceResult = closure_1_0;
          onceResult = closure_1_2;
          onceResult = c5;
          store = closure_1_0(closure_1_2[10]).getUploadTarget(c5.item.target);
          onceResult = c6;
          const _Math = Math;
          onceResult = store;
          onceResult = c5;
          onceResult = c6;
          if (c6 > Math.max(store.getMaxFileSize(c5.channelId), c6)) {
            let obj3 = { code: null, reason: null };
            obj3[0] = closure_1_4.ENTITY_TOO_LARGE;
            let obj4 = { type: null };
            obj4[0] = store.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
            obj3[1] = obj4;
            closure_0._handleError(obj3);
            c5 = 1;
            closure_0.return();
            c5 = 0;
            store = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = closure_1_2;
            return obj5;
          } else {
            onceResult = c2;
            onceResult = closure_1_3;
            if (closure_1_3.enabled) {
              obj = closure_1_0(closure_1_2[8]);
              if (c6 > obj.getEffectiveKestrelLimit(closure_1_3, store.getMaxFileSize(c5.channelId))) {
                const obj6 = { code: null, reason: null };
                obj6[0] = closure_1_4.ENTITY_TOO_LARGE;
                const obj7 = { type: null };
                obj7[0] = store.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                obj6[1] = obj7;
                closure_0._handleError(obj6);
                c5 = 1;
                closure_0.return();
                c5 = 0;
                store = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = closure_1_2;
                return obj8;
              }
            }
            if (closure_1_4 > store.getMaxTotalAttachmentSize()) {
              const obj9 = { code: null, reason: null };
              obj9[0] = closure_1_4.ENTITY_TOO_LARGE;
              const obj10 = { type: null };
              obj10[0] = store.PRECOMPRESSION_SUM_TOO_LARGE;
              obj9[1] = obj10;
              closure_0._handleError(obj9);
              c5 = 1;
              closure_0.return();
              c5 = 0;
              store = 3;
              const obj11 = { value: null, done: true };
              obj11[0] = closure_1_2;
              return obj11;
            } else {
              c5 = 1;
              if (closure_0 === undefined) {
                const _HermesInternal2 = HermesInternal;
                logger.log("" + closure_1_0.id + " queued");
                closure_1_1(closure_1_2[11]).enqueue(() => {
                  closure_0.startUpload();
                  return closure_0;
                });
                c5 = 0;
                store = 3;
                let obj12 = { value: null, done: true };
                obj12[0] = c2;
                return obj12;
              } else {
                c5 = 2;
                c5 = tmp69;
                obj12 = closure_1_0(closure_1_2[9]);
                c6 = 3;
                store = 1;
                const obj13 = { value: null, done: false };
                obj13[0] = obj12.getFileSize(c5.item.uri);
                return obj13;
              }
            }
          }
          const obj19 = closure_1_0(closure_1_2[10]);
        }
      } catch (tmp83) {
        closure_4 = tmp83;
        if (tmp5 === c5) {
          store = tmp3;
          throw tmp83;
        } else if (tmp2 === tmp85) {
          c6 = tmp2;
        } else {
          c6 = onceResult;
        }
      }
    }
  })();
};
prototype["startUpload"] = function startUpload() {
  const self = this;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
            closure_1 = tmp3;
            let lib = tmp7;
            if (lib._aborted) {
              obj10._handleAborted();
            } else {
              obj10._handleStart(c5);
              c3 = 1;
              let obj5 = lib(closure_1_2[12]);
              if (obj5.isAndroid()) {
                const result = lib.observeCompressionProgress(lib.files);
              }
              c4 = 3;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = lib.compressAndCheckFileSize();
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            lib = closure_2;
            lib._handleException(lib);
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else if (0 !== lib.files.length) {
              const files = lib.files;
              if (files.every((status) => status.status === callback(tmp59[14]).CloudUploadStatus.COMPLETED)) {
                const items = lib._file.items;
                if (items != null) {
                  const item = items.forEach((item) => {
                    item.item.progress = 100;
                  });
                }
                const obj3 = {};
                const merged = Object.assign(lib._file);
                obj3.progress = 100;
                lib._file = obj3;
                lib.emit("progress", lib._file);
                const _HermesInternal = HermesInternal;
                closure_1_8.log("All uploads complete for " + lib.id);
                lib._handleComplete();
                c3 = 0;
              } else {
                const _Error = Error;
                error = new Error("Not all attachments were uploaded successfully");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else if (arg1) {
            const result1 = lib.setUploadingTextForUI();
            const _recomputeProgress = lib._recomputeProgress;
            c4 = 2;
            c5 = 1;
            obj = { value: null, done: false };
            obj[0] = closure_1_1(closure_1_2[13])(lib.files, true, _recomputeProgress.bind(lib));
            return obj;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          const _HermesInternal2 = HermesInternal;
          closure_1_8.log("All uploads cancelled for " + lib.id);
          lib._handleComplete();
          c3 = 0;
          c5 = 3;
          obj5 = { value: null, done: true };
          obj5[0] = undefined;
          return obj5;
        }
        c5 = 3;
      } catch (tmp59) {
        closure_2 = tmp59;
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
    if (item.platform === self(closure_1_2[15]).UploadPlatform.REACT_NATIVE) {
      item.compressionProgress = 0;
      const uploadItems = self.uploadItems;
      const result = uploadItems.set(item.uri, item);
    }
  });
  let mediaEventSubscriptions = this.mediaEventSubscriptions;
  let result = mediaEventSubscriptions.set(this._file.id, nativeEventEmitter.addListener("compression-progress", (uri) => {
    uri = uri.uri;
    let obj = self;
    const uploadItems = self.uploadItems;
    if (uploadItems.has(uri)) {
      const uploadItems2 = obj.uploadItems;
      uploadItems2.get(uri).compressionProgress = uri.progress;
      const uploadItems3 = obj.uploadItems;
      const items = [];
      HermesBuiltin.arraySpread(uploadItems3.values(), 0);
      const meanByResult = closure_1_1(closure_1_2[16]).meanBy(items, "compressionProgress");
      if (meanByResult >= 100) {
        const mediaEventSubscriptions = obj.mediaEventSubscriptions;
        const value = mediaEventSubscriptions.get(obj._file.id);
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
      const obj2 = closure_1_1(closure_1_2[16]);
    }
  }));
};
const tmp5 = new timestampDefault("CloudUploader(Native).tsx");
let result = require("set").fileFinishedImporting("lib/uploader/native/CloudUploader.tsx");

export default CloudUploader;