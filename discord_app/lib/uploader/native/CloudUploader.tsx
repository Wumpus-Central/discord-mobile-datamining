// === Module 7467: CloudUploader ===

// Module 7467 (CloudUploader)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import MessageConstants from "MessageConstants" /* 4883 */;
import UploadPlatform from "UploadPlatform" /* 7247 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import UploaderBase from "UploaderBase" /* 7468 */;
import size from "module_2" /* 2 */;

let _self, c2, c4, closure_0, constants, set, uri;

let closure_4;
let hasOwnProperty;
({ AbortCodes: closure_4, NOOP: hasOwnProperty } = Constants);
const FileUploadErrorTypes = MessageConstants.FileUploadErrorTypes;
const tmp3 = new LoggerDefault("CloudUploader(Native).tsx");
let closure_7 = tmp3;
class CloudUploader extends UploaderBase {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.mediaEventSubscriptions = new Map();
    new Map();
    applyArgumentsResult.uploadItems = new Map();
    applyArgumentsResult.preCompressionFileSizes = [];
    new Map();
    return applyArgumentsResult;
  }
  uploadFiles(c1) {
    let closure_1 = c1;
    const _superprop_getUpload = () => super.upload;
    let self = this;
    return self(function*() {
      let closure_3;
      let files;
      let logger;
      let obj13;
      let obj7;
      let obj9;
      let preCompressionSize;
      if (logger === 2) {
        logger = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let closure_2;
          let tmp;
          let uploadTarget;
          let promise;
          logger = 2;
          const tmp4 = preCompressionSize;
          if (0 === preCompressionSize) {
            if (arg0 === 1) {
              logger = 3;
              throw value;
            } else if (arg0 === 2) {
              logger = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp4;
              tmp = undefined;
              preCompressionSize = undefined;
              uploadTarget = undefined;
              _self = files(closure_2[5]).backgroundTaskIdentifierInvalid;
              const onceResult = self.once("start", tmp(function*() {
                let intl;
                let intl2;
                let obj5;
                if (c2 === 2) {
                  c2 = 3;
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
                    let _aborted;
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
                        _aborted = tmp;
                        const obj4 = { title: intl.string(closure_2_0(closure_2_2[6]).t["B/HSDd"]), content: intl2.formatToPlainString(closure_2_0(closure_2_2[6]).t.D0noUt, obj5) };
                        const startBackgroundTask = files(closure_2_2[5]).startBackgroundTask;
                        const tmp18 = files(closure_2_2[5]);
                        intl = closure_2_0(closure_2_2[6]).intl;
                        intl2 = closure_2_0(closure_2_2[6]).intl;
                        obj5 = { count: length.length };
                        c2 = 1;
                        const obj6 = { value: startBackgroundTask(obj4), done: false };
                        return obj6;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj7 = { value, done: true };
                      return obj7;
                    } else {
                      _aborted = value;
                      if (_aborted._aborted) {
                        const obj = files(closure_2_2[5]);
                        obj.endBackgroundTask(_aborted);
                      }
                      c2 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp12) {
                    c2 = 3;
                    throw tmp12;
                  }
                }
              }));
              function onCompleteTask() {
                const obj = files(closure_2[5]);
                obj.endBackgroundTask(closure_1_0);
                closure_2_0.removeListener("complete", closure_1_1);
                closure_2_0.removeListener("error", closure_1_1);
              }
              const onceResult1 = self.once("error", onCompleteTask);
              self.once("complete", onCompleteTask);
              self = this;
              const self2 = this;
              promise = new Promise((arg0, arg1) => {
                closure_0 = arg0;
                let closure_1 = arg1;
                closure_0.once("error", (file, code, responseBody, reason) => {
                  const obj = { file, code, responseBody, reason };
                  closure_1(obj);
                });
                closure_0.once("complete", () => {
                  if (!closure_2_0._errored) {
                    closure_0(tmp.files);
                  }
                });
              });
              c5 = 1;
              self.files = files;
              const obj17 = _superprop_getUpload();
              obj17.call(self, files);
              self._file.attachmentsCount = files.length;
              self._handleStart(undefined);
              const obj8 = _self(closure_2[7]);
              tmp = obj8.shouldCheckUploadSizeOnlyAfterCompression();
              constants = 0;
              files = self.files;
              _self = files[Symbol.iterator]();
            }
          } else if (1 === tmp4) {
            c5 = 0;
            closure_8 = constants;
            const _HermesInternal = HermesInternal;
            logger.log("" + closure_131_0.id + " failed in CloudUploader uploadFiles " + closure_8);
            closure_131_0._handleException(closure_8);
            logger = 3;
            let obj4 = { value: promise, done: true };
            return obj4;
          } else if (2 === tmp4) {
            c5 = 1;
            _self.return();
            throw constants;
          } else if (arg0 === 1) {
            logger = 3;
            throw value;
          } else if (arg0 === 2) {
            _self.return();
            c5 = 0;
            logger = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            preCompressionSize = value;
            const prop = closure_131_0.preCompressionFileSizes;
            prop.push(preCompressionSize);
            c5.preCompressionSize = preCompressionSize;
            constants = constants + preCompressionSize;
            closure_131_0._file.totalPreCompressionSize = constants;
            closure_131_0._file.currentSize = constants;
            const tmp79 = tmp;
            if (!tmp79) {
              let obj = _self(closure_2[9]);
              uploadTarget = obj.getUploadTarget(c5.item.target);
              const tmp12 = c5;
              if (preCompressionSize > uploadTarget.getMaxFileSize(c5.channelId)) {
                let obj6 = { code: constants.ENTITY_TOO_LARGE, reason: obj7 };
                obj7 = { type: preCompressionSize.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE };
                closure_131_0._handleError(obj6);
                _self.return();
                c5 = 0;
                logger = 3;
                const obj10 = { value: promise, done: true };
                return obj10;
              } else if (constants > uploadTarget.getMaxTotalAttachmentSize()) {
                const obj12 = { code: constants.ENTITY_TOO_LARGE, reason: obj13 };
                obj13 = { type: preCompressionSize.PRECOMPRESSION_SUM_TOO_LARGE };
                closure_131_0._handleError(obj12);
                _self.return();
                c5 = 0;
                logger = 3;
                const obj14 = { value: promise, done: true };
                return obj14;
              }
            }
            c5 = 1;
          }
          if (_self === undefined) {
            const _HermesInternal2 = HermesInternal;
            logger.log("" + closure_131_0.id + " queued");
            const obj11 = files(closure_2[10]);
            obj11.enqueue(() => {
              closure_1_0.startUpload();
              return closure_1_0;
            });
            c5 = 0;
            logger = 3;
            const obj15 = { value: promise, done: true };
            return obj15;
          } else {
            c5 = tmp45;
            preCompressionSize = 3;
            logger = 1;
            const obj16 = { value: obj9.getPreCompressionFileSize(c5.item), done: false };
            obj9 = _self(closure_2[8]);
            return obj16;
          }
        } catch (tmp59) {
          constants = tmp59;
          if (0 === c5) {
            logger = 3;
            throw tmp59;
          } else if (1 === tmp61) {
            preCompressionSize = 1;
          } else {
            preCompressionSize = 2;
          }
        }
      }
    })();
  }
  startUpload() {
    let self = this;
    return (async function() {
      let closure_1;
      let self;
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
          let result;
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
              _self = undefined;
              if (self._aborted) {
                self._handleAborted();
              } else {
                self._handleStart(c5);
                _self = self.observeCompressionProgress(self.files);
                c3 = 2;
                result = self.compressAndCheckFileSize();
                c4 = 4;
                c5 = 1;
                const obj4 = { value: result, done: false };
                return obj4;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            result = closure_129_0;
            closure_129_0._handleException(closure_2);
          } else if (2 === c4) {
            c3 = 1;
            _self();
            throw closure_2;
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (0 === closure_129_0.files.length) {
              const _HermesInternal2 = HermesInternal;
              logger.log("All uploads cancelled for " + closure_129_0.id);
              closure_129_0._handleComplete();
              c3 = 0;
              c5 = 3;
              const obj6 = { value: undefined, done: true };
              return obj6;
            } else {
              result = closure_129_0.files;
              if (result.every((status) => status.status === closure_1_0(closure_1_2[12]).CloudUploadStatus.COMPLETED)) {
                result = closure_129_0._file.items;
                if (result != null) {
                  const item = result.forEach((item) => {
                    item.item.progress = 100;
                  });
                }
                const obj7 = { progress: 100 };
                const merged = Object.assign(closure_129_0._file);
                closure_129_0._file = obj7;
                closure_129_0.emit("progress", closure_129_0._file);
                result = logger.log;
                const _HermesInternal = HermesInternal;
                result("All uploads complete for " + closure_129_0.id);
                closure_129_0._handleComplete();
                c3 = 0;
              } else {
                const _Error = Error;
                self = this;
                const self2 = this;
                const error = new Error("Not all attachments were uploaded successfully");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            _self();
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c3 = 1;
            _self();
            if (value) {
              const result1 = closure_129_0.setUploadingTextForUI();
              result = tmp(closure_2[11]);
              const _recomputeProgress = closure_129_0._recomputeProgress;
              c4 = 3;
              c5 = 1;
              const obj = { value: result(closure_129_0.files, true, _recomputeProgress.bind(closure_129_0)), done: false };
              return obj;
            } else {
              c3 = 0;
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp57) {
          closure_2 = tmp57;
          if (0 === c3) {
            c5 = 3;
            throw tmp57;
          } else if (1 === tmp59) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    })();
  }
  observeCompressionProgress(files) {
    const self = this;
    function cleanUp() {
      const mediaEventSubscriptions = self.mediaEventSubscriptions;
      const value = mediaEventSubscriptions.get(self._file.id);
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
    const id = this._file.id;
    set = mediaEventSubscriptions.set;
    const obj = self(1432);
    let result = set(id, obj.onCompressionProgress((uri) => {
      uri = uri.uri;
      const uploadItems = self.uploadItems;
      const progress = uri.progress;
      if (uploadItems.has(uri)) {
        const uploadItems2 = self.uploadItems;
        uploadItems2.get(uri).compressionProgress = progress;
        const uploadItems3 = self.uploadItems;
        const meanBy = _modDef12.meanBy;
        const items = [];
        _modDef12;
        HermesBuiltin.arraySpread(items, uploadItems3.values(), 0);
        const meanByResult = meanBy(items, "compressionProgress");
        if (meanByResult >= 100) {
          const mediaEventSubscriptions = self.mediaEventSubscriptions;
          const value = mediaEventSubscriptions.get(self._file.id);
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
          const obj2 = { compressionProgress: 100 };
          const merged = Object.assign(self._file);
          self._file = obj2;
        } else {
          const obj3 = { compressionProgress: meanByResult };
          const merged1 = Object.assign(self._file);
          self._file = obj3;
        }
        self.emit("compression-progress", self._file);
      }
    }));
    this.once("complete", cleanUp);
    this.once("error", cleanUp);
    return cleanUp;
  }
}
let closure_8 = CloudUploader.prototype;
let result = size.fileFinishedImporting("lib/uploader/native/CloudUploader.tsx");

export default CloudUploader;