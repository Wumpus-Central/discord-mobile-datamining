// === Module 7467: CloudUploader ===

// Module 7467 (CloudUploader)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import UploadPlatform from "UploadPlatform" /* 7247 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UploaderBase from "UploaderBase" /* 7468 */;

require = fn;
const Constants = fn(1085);
({ AbortCodes: closure_4, NOOP: hasOwnProperty } = Constants);
const FileUploadErrorTypes = fn(4883).FileUploadErrorTypes;
let closure_7 = new LoggerDefault("CloudUploader(Native).tsx");
class CloudUploader extends tmp4 {
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
        return { value: "IconComponent", done: "IconComponent" };
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
            closure_130_6 = undefined;
            let uploadTarget;
            closure_130_0 = files(7251).backgroundTaskIdentifierInvalid;
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
                  return { value: "IconComponent", done: "IconComponent" };
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
                      const intl = closure_2_0(1126).intl;
                      obj4.title = intl.string(closure_2_0(1126).t["B/HSDd"]);
                      const intl2 = closure_2_0(1126).intl;
                      const obj5 = { count: length.length };
                      obj4.content = intl2.formatToPlainString(closure_2_0(1126).t.D0noUt, obj5);
                      c2 = 1;
                      const obj7 = { value: files(7251).startBackgroundTask(obj4), done: false };
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
                      files(7251).endBackgroundTask(closure_128_0);
                      const obj = files(7251);
                    }
                    c2 = 3;
                    return { value: "IconComponent", done: "IconComponent" };
                  }
                } catch (tmp13) {
                  c2 = tmp;
                  throw tmp13;
                }
              }
            }));
            function onCompleteTask() {
              closure_1(_superprop_getUpload[5]).endBackgroundTask(closure_1_0);
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
            const tmp111 = _superprop_getUpload();
            const call = tmp111.call;
            let obj8 = self;
            if (typeof call === "unknown") {
              tmp111(arr);
            } else {
              call(obj8, arr);
            }
            self._file.attachmentsCount = arr.length;
            self._handleStart(undefined);
            obj8 = _self(7469);
            closure_130_3 = obj8.shouldCheckUploadSizeOnlyAfterCompression();
            closure_130_4 = 0;
            files = self.files;
            arr = files;
            _self = files[Symbol.iterator]();
          }
        } else if (1 === tmp8) {
          c5 = 0;
          closure_130_8 = tmp63;
          const _HermesInternal = HermesInternal;
          logger.log("" + closure_131_0.id + " failed in CloudUploader uploadFiles " + closure_130_8);
          closure_131_0._handleException(closure_130_8);
          logger = 3;
          let obj4 = { value: closure_130_2, done: true };
          return obj4;
        } else if (2 === tmp8) {
          c5 = 1;
          _self.return();
          throw tmp63;
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
          closure_130_6 = value;
          const prop = closure_131_0.preCompressionFileSizes;
          prop.push(closure_130_6);
          closure_130_5.preCompressionSize = closure_130_6;
          closure_130_4 = closure_130_4 + closure_130_6;
          closure_131_0._file.totalPreCompressionSize = closure_130_4;
          closure_131_0._file.currentSize = closure_130_4;
          if (!closure_130_3) {
            uploadTarget = _self(7307).getUploadTarget(closure_130_5.item.target);
            if (closure_130_6 > uploadTarget.getMaxFileSize(closure_130_5.channelId)) {
              const obj6 = { code: tmp63.ENTITY_TOO_LARGE, reason: null };
              let obj7 = { type: constants.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE };
              obj6.reason = obj7;
              closure_131_0._handleError(obj6);
              c5 = 1;
              _self.return();
              c5 = 0;
              logger = 3;
              const obj10 = { value: closure_130_2, done: true };
              return obj10;
            } else if (closure_130_4 > uploadTarget.getMaxTotalAttachmentSize()) {
              const obj12 = { code: tmp63.ENTITY_TOO_LARGE, reason: null };
              const obj13 = { type: constants.PRECOMPRESSION_SUM_TOO_LARGE };
              obj12.reason = obj13;
              closure_131_0._handleError(obj12);
              c5 = 1;
              _self.return();
              c5 = 0;
              logger = 3;
              const obj14 = { value: closure_130_2, done: true };
              return obj14;
            }
            let obj = _self(7307);
          }
          c5 = 1;
          if (_self === undefined) {
            const _HermesInternal2 = HermesInternal;
            logger.log("" + closure_131_0.id + " queued");
            files(7471).enqueue(() => {
              closure_1_0.startUpload();
              return closure_1_0;
            });
            c5 = 0;
            logger = 3;
            const obj15 = { value: closure_130_2, done: true };
            return obj15;
          } else {
            c5 = 2;
            closure_130_5 = tmp49;
            constants = 3;
            logger = 1;
            const obj16 = { value: _self(7470).getPreCompressionFileSize(closure_130_5.item), done: false };
            return obj16;
          }
        }
      } catch (tmp63) {
        if (tmp5 === c5) {
          logger = tmp3;
          throw tmp63;
        } else if (tmp2 === tmp65) {
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
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
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
            closure_0 = tmp6;
            closure_128_0 = undefined;
            if (self._aborted) {
              self._handleAborted();
            } else {
              self._handleStart(c5);
              c3 = 1;
              closure_128_0 = self.observeCompressionProgress(self.files);
              c3 = 2;
              c4 = 4;
              c5 = 1;
              const obj4 = { value: self.compressAndCheckFileSize(), done: false };
              return obj4;
            }
          }
        } else {
          if (1 === tmp9) {
            c3 = 0;
            closure_128_1 = tmp66;
            closure_129_0._handleException(closure_128_1);
          } else if (2 === tmp9) {
            c3 = 1;
            closure_128_0();
            throw tmp66;
          } else if (3 === tmp9) {
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
              if (files.every((status) => status.status === closure_1_0(closure_1_2[12]).CloudUploadStatus.COMPLETED)) {
                const items = closure_129_0._file.items;
                if (items != null) {
                  const item = items.forEach((item) => {
                    item.item.progress = 100;
                  });
                }
                const obj6 = {};
                const merged = Object.assign(closure_129_0._file);
                obj6.progress = 100;
                closure_129_0._file = obj6;
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
            c3 = 1;
            closure_128_0();
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c3 = 1;
            closure_128_0();
            if (value) {
              const result = closure_129_0.setUploadingTextForUI();
              const _recomputeProgress = closure_129_0._recomputeProgress;
              c4 = 3;
              c5 = 1;
              const obj = { value: tmp4(tmp66[11])(closure_129_0.files, true, _recomputeProgress.bind(closure_129_0)), done: false };
              return obj;
            } else {
              c3 = 0;
              c5 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          }
          const _HermesInternal2 = HermesInternal;
          logger.log("All uploads cancelled for " + closure_129_0.id);
          closure_129_0._handleComplete();
          c3 = 0;
          c5 = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        }
        c5 = 3;
      } catch (tmp66) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp66;
        } else if (tmp2 === tmp68) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["observeCompressionProgress"] = function observeCompressionProgress(files) {
  const self = this;
  function cleanUp() {
    const mediaEventSubscriptions = self.mediaEventSubscriptions;
    value = mediaEventSubscriptions.get(self._file.id);
    if (value != null) {
      value.remove();
    }
    const mediaEventSubscriptions2 = self.mediaEventSubscriptions;
    mediaEventSubscriptions2.delete(self._file.id);
    const uploadItems = self.uploadItems;
    uploadItems.clear();
    self.removeListener("complete", cleanUp);
    self.removeListener("error", cleanUp);
  }
  let item = files.forEach((item) => {
    item = item.item;
    if (item.platform === UploadPlatform.UploadPlatform.REACT_NATIVE) {
      item.compressionProgress = 0;
      const uploadItems = self.uploadItems;
      const result = uploadItems.set(item.uri, item);
    }
  });
  let mediaEventSubscriptions = this.mediaEventSubscriptions;
  let result = mediaEventSubscriptions.set(this._file.id, self(1432).onCompressionProgress((uri) => {
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
        self.removeListener("complete", cleanUp);
        self.removeListener("error", cleanUp);
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
  this.once("complete", cleanUp);
  this.once("error", cleanUp);
  return cleanUp;
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/uploader/native/CloudUploader.tsx");

export default CloudUploader;