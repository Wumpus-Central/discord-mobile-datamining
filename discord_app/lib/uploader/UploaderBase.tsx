// === Module 8080: UploaderBase ===

// Module 8080 (UploaderBase)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import uploader_UploadUtils from "uploader/UploadUtils" /* 5347 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const AbortCodes = fn(1074).AbortCodes;
const FileUploadErrorTypes = fn(4749).FileUploadErrorTypes;
const logger = new LoggerDefault("UploaderBase.tsx");
const EventEmitter = fn(568).EventEmitter;
class UploaderBase extends EventEmitter {
  constructor() {
    tmp3 = new UploaderBase(tmp2, new.target, new.target, tmp);
    closure_0 = tmp3;
    tmp3._aborted = false;
    tmp3._errored = false;
    tmp3.files = [];
    tmp3._lastUpdate = 0;
    tmp3._loaded = 0;
    tmp3.alreadyStarted = false;
    tmp3._handleStart = function _handleStart(_cancel) {
      closure_0._cancel = _cancel;
      if (!closure_0.alreadyStarted) {
        closure_0.emit("start", closure_0._file);
      }
      closure_0.alreadyStarted = true;
    };
    tmp3._handleProgress = function _handleProgress(loaded, total, arg2) {
      closure_0 = arg2;
      const timestamp = Date.now();
      const rounded = Math.floor((loaded - closure_0._loaded) / ((timestamp - closure_0._lastUpdate) / 1000));
      if (null != arg2) {
        const items = obj2._file.items;
        if (items != null) {
          const item = items.forEach((item) => {
            item.item.progress = closure_0[item.id];
          });
        }
      }
      closure_0._lastUpdate = timestamp;
      closure_0._loaded = loaded;
      const obj3 = {};
      const merged = Object.assign(obj2._file);
      obj3.currentSize = total;
      obj3.progress = uploader_UploadUtils.calculateProgress(loaded, total);
      obj3.rate = rounded;
      closure_0._file = obj3;
      closure_0.emit("progress", closure_0._file);
    };
    tmp3._handleException = function _handleException(arg0) {
      const obj = { reason: { type: FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN, msg: arg0.toString() } };
      closure_0._handleError(obj);
    };
    tmp3._handleAborted = function _handleAborted() {
      const result = closure_0.clearProcessingMessageInterval();
    };
    tmp3._handleError = function _handleError(arg0) {
      ({ code, reason, body } = arg0);
      const result = closure_0.clearProcessingMessageInterval();
      if (!closure_0._aborted) {
        closure_0._errored = true;
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        logger.log("_handleError: " + code + " (" + JSON.stringify(reason) + ") for " + closure_0.id);
        closure_0.emit("error", closure_0._file, code, body, reason);
        closure_0.removeAllListeners();
      }
    };
    tmp3._handleComplete = function _handleComplete(arg0) {
      const result = closure_0.clearProcessingMessageInterval();
      logger.log("_handleComplete for " + closure_0.id);
      closure_0.emit("complete", closure_0._file, arg0);
      closure_0.removeAllListeners();
    };
    obj = closure_1(closure_2[5]);
    tmp3.id = obj.uniqueId("Uploader");
    tmp3._file = { id: tmp3.id, currentSize: 0, totalPreCompressionSize: 0, compressionProgress: 0, progress: 0, rate: 0, hasImage: false, hasVideo: false, attachmentsCount: 0, items: "call" };
    return tmp3;
  }
}
const prototype = UploaderBase.prototype;
prototype["_fileSize"] = function _fileSize() {
  const files = this.files;
  return files.reduce((acc, currentSize) => {
    let num = currentSize.currentSize;
    if (num == null) {
      num = 0;
    }
    return acc + num;
  }, 0);
};
prototype["compressAndCheckFileSize"] = function compressAndCheckFileSize() {
  const self = this;
  return (async () => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c9 = 2;
        let tmp4 = c8;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            constants = tmp4;
            closure_132_0 = undefined;
            closure_132_1 = undefined;
            let maxFileSize;
            let obj13 = _self(c2[6]);
            let first = self.files[0];
            let target;
            if (first != null) {
              let item = first.item;
              if (item != null) {
                target = item.target;
              }
            }
            let uploadTarget = obj13.getUploadTarget(target);
            closure_132_0 = uploadTarget;
            if (self.files.length > uploadTarget.getMaxAttachmentsCount()) {
              let _HermesInternal2 = HermesInternal;
              let logResult = logger.log("Too many attachments for " + self.id);
              let obj4 = { code: null };
              obj4.code = constants.TOO_MANY_ATTACHMENTS;
              let _handleErrorResult = self._handleError(obj4);
              c9 = 3;
              return { value: false, done: true };
            } else {
              let _HermesInternal3 = HermesInternal;
              let logResult1 = logger.log("compressing files for " + self.id);
              let files = self.files;
              _self = files[Symbol.iterator]();
            }
          }
        } else if (1 === tmp4) {
          c7 = 0;
          _self.return();
          throw logger;
        } else if (2 === tmp4) {
          closure_132_3 = logger;
          let _handleExceptionResult = closure_133_0._handleException(closure_132_3);
          c7 = 0;
          _self.return();
          c9 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          _self.return();
          c9 = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else if (closure_132_1.isCancelled()) {
          let _HermesInternal = HermesInternal;
          let logResult2 = logger.log("compressAndCheckFileSize() file has been cancelled for compression - " + closure_132_1.id);
          c7 = 0;
        } else {
          let currentSize = closure_132_1.currentSize;
          c2 = currentSize;
          if (currentSize == null) {
            c2 = 0;
          }
          if (0 === c2) {
            let obj6 = { code: null };
            obj6.code = constants.ENTITY_EMPTY;
            let _handleErrorResult1 = closure_133_0._handleError(obj6);
            c7 = 0;
            _self.return();
            c9 = 3;
            return { value: false, done: true };
          } else {
            maxFileSize = closure_132_0.getMaxFileSize(closure_132_1.channelId);
            let currentSize2 = closure_132_1.currentSize;
            c3 = currentSize2;
            if (currentSize2 == null) {
              c3 = 0;
            }
            if (c3 > maxFileSize) {
              let obj = { code: null, reason: null };
              obj.code = constants.ENTITY_TOO_LARGE;
              let obj7 = { type: tmp.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE };
              obj.reason = obj7;
              let _handleErrorResult2 = closure_133_0._handleError(obj);
              c7 = 0;
              _self.return();
              c9 = 3;
              return { value: false, done: true };
            } else {
              c7 = 0;
            }
          }
        }
        if (_self === undefined) {
          let _fileSizeResult = closure_133_0._fileSize();
          let flag = _fileSizeResult <= closure_132_0.getMaxTotalAttachmentSize();
          if (!flag) {
            let obj8 = { code: null, reason: null };
            obj8.code = constants.ENTITY_TOO_LARGE;
            let obj9 = { type: tmp.POSTCOMPRESSION_SUM_TOO_LARGE };
            obj8.reason = obj9;
            let _handleErrorResult3 = closure_133_0._handleError(obj8);
            flag = false;
          }
          c9 = 3;
          let obj10 = { value: flag, done: true };
          return obj10;
        } else {
          closure_132_1 = tmp41;
          c7 = 2;
          c8 = 3;
          c9 = 1;
          let obj11 = { value: closure_132_1.reactNativeCompressAndExtractData(), done: false };
          return obj11;
        }
      }
    }
  })();
};
prototype["setUploadingTextForUI"] = function setUploadingTextForUI() {
  const files = this.files;
  const files2 = this.files;
  const someResult = files.some((isImage) => isImage.isImage);
  const _fileSizeResult = this._fileSize();
  logger.log("setUploadingTextForUI - total content: " + _fileSizeResult + " bytes and " + this.files.length + " attachments for " + this.id);
  const obj = {};
  const merged = Object.assign(this._file);
  obj.totalPostCompressionSize = _fileSizeResult;
  obj.currentSize = _fileSizeResult;
  obj.hasVideo = files2.some((isVideo) => isVideo.isVideo);
  obj.hasImage = someResult;
  obj.attachmentsCount = this.files.length;
  obj.items = this.files;
  this._file = obj;
};
prototype["_recomputeProgress"] = function _recomputeProgress() {
  const result = this._recomputeProgressTotal();
  ({ loaded, total } = result);
  this._handleProgress(loaded, total, this._recomputeProgressByFile());
};
prototype["_recomputeProgressTotal"] = function _recomputeProgressTotal() {
  const obj = { loaded: null, total: this._fileSize() };
  const files = this.files;
  obj.loaded = files.reduce((acc, loaded) => {
    let num = loaded.loaded;
    if (num == null) {
      num = 0;
    }
    return acc + num;
  }, 0);
  return obj;
};
prototype["_recomputeProgressByFile"] = function _recomputeProgressByFile() {
  let obj = {};
  const files = this.files;
  const item = files.forEach((id) => {
    obj = uploader_UploadUtils;
    obj[id.id] = obj.calculateProgress(id.loaded, id.currentSize);
  });
  return obj;
};
prototype["_addAttachmentsToPayload"] = function _addAttachmentsToPayload(arg0, arg1, arg2) {
  const merged = Object.assign(arg0);
  _modDef12;
  const items = [...arg2];
  return _modDef12.set({}, arg1, items);
};
prototype["clearProcessingMessageInterval"] = function clearProcessingMessageInterval() {
  const self = this;
  if (null != this.processingMessageChangeInterval) {
    const _clearInterval = clearInterval;
    clearInterval(self.processingMessageChangeInterval);
    self.processingMessageChangeInterval = undefined;
  }
};
prototype["cancel"] = function cancel() {
  const self = this;
  logger.log("cancel() for " + this.id);
  if (!this._aborted) {
    self._aborted = true;
    const _cancel = self._cancel;
    if (_cancel != null) {
      _cancel();
    }
    const files = self.files;
    const item = files.forEach((cancel) => cancel.cancel());
    self._handleComplete();
  }
};
prototype["cancelItem"] = function cancelItem(itemId) {
  const self = this;
  return (async () => {
    if (c4 === 2) {
      c4 = 3;
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
            closure_1 = tmp2;
            closure_129_0 = undefined;
            const _HermesInternal = HermesInternal;
            logger.log("Cancel called for " + self.id + " for item " + itemId);
            const files = self.files;
            const found = files.find((id) => id.id === closure_1_0);
            closure_129_0 = found;
            if (null != found) {
              if (!found.isCancelled()) {
                const files1 = self.files;
                const index = files1.indexOf(found);
                itemId = 0;
                const files2 = self.files;
                const items = [];
                itemId = HermesBuiltin.arraySpread(files2.slice(0, index), itemId);
                const files3 = self.files;
                itemId = HermesBuiltin.arraySpread(files3.slice(index + 1), itemId);
                self.files = items;
                const obj5 = {};
                const merged = Object.assign(self._file);
                obj5.items = self.files;
                self._file = obj5;
                c3 = 1;
                c4 = 1;
                const obj6 = { value: itemId(tmp3[8]).cancelGetAttachmentFile(found), done: false };
                return obj6;
              }
            }
            c4 = 3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_0.cancel();
          closure_130_1.emit("cancel-upload-item", closure_130_1._file);
          if (0 === closure_130_1.files.length) {
            closure_130_1.cancel();
          }
        }
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp31) {
        c4 = tmp;
        throw tmp31;
      }
    }
  })();
};
prototype["upload"] = function upload(items) {
  const self = this;
  if (null != this._cancel) {
    const _Error = Error;
    const error = new Error("Uploader.upload(...): An upload is already in progress.");
    throw error;
  } else {
    const _Date = Date;
    self._lastUpdate = Date.now();
    self._loaded = 0;
    const obj = { id: self.id, currentSize: 0, totalPreCompressionSize: 0, compressionProgress: 0, progress: 0, rate: 0, hasImage: false, hasVideo: false, attachmentsCount: 0, items };
    self._file = obj;
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/uploader/UploaderBase.tsx");

export default UploaderBase;