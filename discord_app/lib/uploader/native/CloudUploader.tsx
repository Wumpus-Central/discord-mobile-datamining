// === Module 7206: nativeEventEmitter ===

// Module 7206 (nativeEventEmitter)
import _fileSize from "_fileSize";
import get_ActivityIndicator from "set";
import ME from "ME";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";
import "_fileSize";

let NativeEventEmitter;
let NativeModules;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
({ AbortCodes: c4, NOOP: c5 } = ME);
({ DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE: closure_6, FileUploadErrorTypes: error } = MESSAGE_GROUP_SPACING);
const metroImportAll = new require("MESSAGE_GROUP_SPACING")("CloudUploader(Native).tsx");
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
prototype["uploadFiles"] = function uploadFiles(c3) {
  let self = this;
  let closure_1 = c3;
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
            let _fileSize = tmp4;
            let c2 = tmp8;
            let closure_0;
            let files;
            c2 = undefined;
            _fileSize = undefined;
            let closure_4;
            let c5;
            c6 = undefined;
            store = undefined;
            let onceResult = outer1_1;
            onceResult = outer1_2;
            closure_0 = outer1_1(outer1_2[6]).backgroundTaskIdentifierInvalid;
            onceResult = outer1_0;
            onceResult = outer1_3;
            onceResult = outer1_0.once("start", outer1_3(function*() {
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
                      const obj1 = { title: null, content: null };
                      const intl = callback(1236).intl;
                      obj1[0] = intl.string(callback(1236).t["B/HSDd"]);
                      const intl2 = callback(1236).intl;
                      const obj2 = { count: null };
                      obj2[0] = length.length;
                      obj1[1] = intl2.formatToPlainString(callback(1236).t.D0noUt, obj2);
                      dependencyMap = 1;
                      const obj3 = { value: null, done: false };
                      obj3[0] = files(7123).startBackgroundTask(obj1);
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
                    if (outer1_0._aborted) {
                      obj = files(7123);
                      obj.endBackgroundTask(outer1_0);
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
              outer2_1(outer2_2[6]).endBackgroundTask(closure_0);
              closure_0.removeListener("complete", files);
              closure_0.removeListener("error", files);
            }
            files = onCompleteTask;
            onceResult = outer1_0;
            onceResult = outer1_0.once("error", onCompleteTask);
            onceResult = outer1_0;
            onceResult = outer1_0.once("complete", onCompleteTask);
            onceResult = new.target;
            onceResult = new.target;
            onceResult = new Promise((arg0, arg1) => {
              let closure_0 = arg0;
              let closure_1 = arg1;
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
            onceResult = outer1_0;
            let arr = outer1_1;
            outer1_0.files = outer1_1;
            onceResult = outer1_2;
            let tmp65 = outer1_2();
            const call = tmp65.call;
            let getKestrelConfig = outer1_0;
            if (typeof call === "unknown") {
              tmp65(arr);
            } else {
              onceResult = call(getKestrelConfig, arr);
            }
            outer1_0._file.attachmentsCount = arr.length;
            outer1_0._handleStart(undefined);
            tmp65 = outer1_0(outer1_2[8]);
            getKestrelConfig = tmp65.getKestrelConfig;
            _fileSize = getKestrelConfig({ location: "CloudUploader.native.uploadFiles" });
            closure_4 = 0;
            files = outer1_0.files;
            arr = files;
            closure_0 = files[Symbol.iterator]();
          }
        } else if (1 === tmp8) {
          c5 = 0;
          const outer1_8 = closure_4;
          const _HermesInternal = HermesInternal;
          outer1_8.log("" + closure_0.id + " failed in CloudUploader uploadFiles " + outer1_8);
          closure_0._handleException(outer1_8);
          store = 3;
          let obj1 = { value: null, done: true };
          obj1[0] = outer1_2;
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
          onceResult = outer1_0;
          onceResult = outer1_2;
          onceResult = c5;
          store = outer1_0(outer1_2[10]).getUploadTarget(c5.item.target);
          onceResult = c6;
          const _Math = Math;
          onceResult = store;
          onceResult = c5;
          onceResult = c6;
          if (c6 > Math.max(store.getMaxFileSize(c5.channelId), c6)) {
            let obj3 = { code: null, reason: null };
            obj3[0] = outer1_4.ENTITY_TOO_LARGE;
            let obj4 = { type: null };
            obj4[0] = store.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
            obj3[1] = obj4;
            closure_0._handleError(obj3);
            c5 = 1;
            closure_0.return();
            c5 = 0;
            store = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = outer1_2;
            return obj5;
          } else {
            onceResult = c2;
            onceResult = outer1_3;
            if (outer1_3.enabled) {
              obj = outer1_0(outer1_2[8]);
              if (c6 > obj.getEffectiveKestrelLimit(outer1_3, store.getMaxFileSize(c5.channelId))) {
                const obj6 = { code: null, reason: null };
                obj6[0] = outer1_4.ENTITY_TOO_LARGE;
                const obj7 = { type: null };
                obj7[0] = store.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                obj6[1] = obj7;
                closure_0._handleError(obj6);
                c5 = 1;
                closure_0.return();
                c5 = 0;
                store = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = outer1_2;
                return obj8;
              }
            }
            if (outer1_4 > store.getMaxTotalAttachmentSize()) {
              const obj9 = { code: null, reason: null };
              obj9[0] = outer1_4.ENTITY_TOO_LARGE;
              const obj10 = { type: null };
              obj10[0] = store.PRECOMPRESSION_SUM_TOO_LARGE;
              obj9[1] = obj10;
              closure_0._handleError(obj9);
              c5 = 1;
              closure_0.return();
              c5 = 0;
              store = 3;
              const obj11 = { value: null, done: true };
              obj11[0] = outer1_2;
              return obj11;
            } else {
              c5 = 1;
              if (closure_0 === undefined) {
                const _HermesInternal2 = HermesInternal;
                outer1_8.log("" + outer1_0.id + " queued");
                outer1_1(outer1_2[11]).enqueue(() => {
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
                obj12 = outer1_0(outer1_2[9]);
                c6 = 3;
                store = 1;
                const obj13 = { value: null, done: false };
                obj13[0] = obj12.getFileSize(c5.item.uri);
                return obj13;
              }
            }
          }
          const obj19 = outer1_0(outer1_2[10]);
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
            let closure_1 = tmp3;
            const uploadingTextForUI = tmp7;
            if (outer1_0._aborted) {
              obj10._handleAborted();
            } else {
              obj10._handleStart(c5);
              let c3 = 1;
              let obj5 = outer1_0(outer1_2[12]);
              if (obj5.isAndroid()) {
                const result = outer1_0.observeCompressionProgress(outer1_0.files);
              }
              c4 = 3;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0.compressAndCheckFileSize();
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            outer1_0 = closure_2;
            outer1_0._handleException(outer1_0);
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
            } else if (0 !== uploadingTextForUI.files.length) {
              const files = outer1_0.files;
              if (files.every((status) => status.status === tmp7(tmp59[14]).CloudUploadStatus.COMPLETED)) {
                const items = outer1_0._file.items;
                if (items != null) {
                  const item = items.forEach((item) => {
                    item.item.progress = 100;
                  });
                }
                const obj3 = {};
                const merged = Object.assign(outer1_0._file);
                obj3.progress = 100;
                outer1_0._file = obj3;
                outer1_0.emit("progress", outer1_0._file);
                const _HermesInternal = HermesInternal;
                outer1_8.log("All uploads complete for " + outer1_0.id);
                outer1_0._handleComplete();
                c3 = 0;
              } else {
                const _Error = Error;
                const error = new Error("Not all attachments were uploaded successfully");
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
            const result1 = uploadingTextForUI.setUploadingTextForUI();
            const _recomputeProgress = uploadingTextForUI._recomputeProgress;
            c4 = 2;
            c5 = 1;
            obj = { value: null, done: false };
            obj[0] = outer1_1(outer1_2[13])(uploadingTextForUI.files, true, _recomputeProgress.bind(uploadingTextForUI));
            return obj;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          const _HermesInternal2 = HermesInternal;
          outer1_8.log("All uploads cancelled for " + outer1_0.id);
          outer1_0._handleComplete();
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
    if (item.platform === self(outer1_2[15]).UploadPlatform.REACT_NATIVE) {
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
      const meanByResult = outer1_1(outer1_2[16]).meanBy(items, "compressionProgress");
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
      const obj2 = outer1_1(outer1_2[16]);
    }
  }));
};
const tmp5 = new require("MESSAGE_GROUP_SPACING")("CloudUploader(Native).tsx");
let result = require("ME").fileFinishedImporting("lib/uploader/native/CloudUploader.tsx");

export default CloudUploader;