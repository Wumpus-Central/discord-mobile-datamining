// === Module 7583: nativeEventEmitter ===

// Module 7583 (nativeEventEmitter)
import timestampDefault from "timestamp" /* 3 */;
import applyDefault from "apply" /* 12 */;
import _fileSizeDefault from "_fileSize" /* 7584 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING" /* 4663 */;

const require = fn;
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
  closure_1 = c3;
  function _superprop_getUpload() {
    return super.upload;
  }
  const self = this;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            let promise = tmp8;
            closure_0 = undefined;
            let files;
            promise = undefined;
            closure_3 = undefined;
            closure_4 = undefined;
            c5 = undefined;
            c6 = undefined;
            store = undefined;
            closure_0 = closure_1_1(_superprop_getUpload[6]).backgroundTaskIdentifierInvalid;
            closure_1_0.once("start", closure_1_3(function*() {
              if (c2 === 2) {
                c2 = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw arg1;
                } else if (arg0 === 2) {
                  let obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } else {
                try {
                  c2 = 2;
                  if (0 === length) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      let callback = tmp2;
                      obj1 = { title: null, content: null };
                      const intl = callback(promise[7]).intl;
                      obj1[0] = intl.string(callback(promise[7]).t["B/HSDd"]);
                      const intl2 = callback(promise[7]).intl;
                      const obj2 = { count: null };
                      obj2[0] = length.length;
                      obj1[1] = intl2.formatToPlainString(callback(promise[7]).t.D0noUt, obj2);
                      c2 = 1;
                      const obj3 = { value: null, done: false };
                      obj3[0] = files(promise[6]).startBackgroundTask(obj1);
                      return obj3;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj4 = { value: null, done: true };
                    obj4[0] = arg1;
                    return obj4;
                  } else {
                    callback = arg1;
                    if (closure_1_0._aborted) {
                      obj = files(promise[6]);
                      obj.endBackgroundTask(closure_1_0);
                    }
                    c2 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } catch (tmp13) {
                  c2 = tmp;
                  throw tmp13;
                }
              }
            }));
            function onCompleteTask() {
              closure_2_1(_superprop_getUpload[6]).endBackgroundTask(closure_0);
              closure_0.removeListener("complete", files);
              closure_0.removeListener("error", files);
            }
            files = onCompleteTask;
            closure_1_0.once("error", onCompleteTask);
            closure_1_0.once("complete", onCompleteTask);
            promise = new Promise((arg0, arg1) => {
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
            c5 = 1;
            let arr = closure_1_1;
            closure_1_0.files = closure_1_1;
            let tmp65 = _superprop_getUpload();
            const call = tmp65.call;
            let getKestrelConfig = closure_1_0;
            if (typeof call === "unknown") {
              tmp65(arr);
            } else {
              call(getKestrelConfig, arr);
            }
            closure_1_0._file.attachmentsCount = arr.length;
            closure_1_0._handleStart(undefined);
            tmp65 = closure_1_0(_superprop_getUpload[8]);
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
          obj1[0] = _superprop_getUpload;
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
          closure_4 = closure_4 + c6;
          closure_0._file.totalPreCompressionSize = closure_4;
          closure_0._file.currentSize = closure_4;
          store = closure_1_0(_superprop_getUpload[10]).getUploadTarget(c5.item.target);
          const _Math = Math;
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
            obj5[0] = _superprop_getUpload;
            return obj5;
          } else {
            if (closure_1_3.enabled) {
              obj = closure_1_0(_superprop_getUpload[8]);
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
                obj8[0] = _superprop_getUpload;
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
              obj11[0] = _superprop_getUpload;
              return obj11;
            } else {
              c5 = 1;
              if (closure_0 === undefined) {
                const _HermesInternal2 = HermesInternal;
                logger.log("" + closure_1_0.id + " queued");
                closure_1_1(_superprop_getUpload[11]).enqueue(() => {
                  closure_0.startUpload();
                  return closure_0;
                });
                c5 = 0;
                store = 3;
                let obj12 = { value: null, done: true };
                obj12[0] = promise;
                return obj12;
              } else {
                c5 = 2;
                c5 = tmp69;
                obj12 = closure_1_0(_superprop_getUpload[9]);
                c6 = 3;
                store = 1;
                const obj13 = { value: null, done: false };
                obj13[0] = obj12.getFileSize(c5.item.uri);
                return obj13;
              }
            }
          }
          const obj19 = closure_1_0(_superprop_getUpload[10]);
        }
      } catch (tmp83) {
        closure_4 = tmp83;
        if (tmp5 === c5) {
          store = tmp3;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
              if (files.every((item, index) => item.status === callback(tmp59[14]).CloudUploadStatus.COMPLETED)) {
                const items = lib._file.items;
                if (items != null) {
                  const item = items.forEach((item, index) => {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
  let item = files.forEach((item, index) => {
    item = item.item;
    if (item.platform === self(dependencyMap[15]).UploadPlatform.REACT_NATIVE) {
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
      const meanByResult = applyDefault.meanBy(items, "compressionProgress");
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
          const item = items1.forEach((item, index) => {
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
  }));
};
const tmp5 = new timestampDefault("CloudUploader(Native).tsx");
let result = require("obj132").fileFinishedImporting("lib/uploader/native/CloudUploader.tsx");

export default CloudUploader;