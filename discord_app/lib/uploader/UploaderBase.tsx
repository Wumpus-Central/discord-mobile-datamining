// discord_app/lib/uploader/UploaderBase.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import uploader_UploadUtils from "UploadUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const AbortCodes = fn(1074).AbortCodes;
const FileUploadErrorTypes = fn(4553).FileUploadErrorTypes;
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
      let obj = uploader_UploadUtils;
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
      obj = {};
      const merged = Object.assign(obj2._file);
      obj.currentSize = total;
      obj.progress = obj.calculateProgress(loaded, total);
      obj.rate = rounded;
      closure_0._file = obj;
      closure_0.emit("progress", closure_0._file);
    };
    tmp3._handleException = function _handleException(arg0) {
      let obj = { reason: null };
      obj = { type: FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN, msg: arg0.toString() };
      obj.reason = obj;
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
    tmp3._file = {
      id: tmp3.id,
      currentSize: 0,
      totalPreCompressionSize: 0,
      compressionProgress: 0,
      progress: 0,
      rate: 0,
      hasImage: false,
      hasVideo: false,
      attachmentsCount: 0,
      items: "channel",
    };
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
    } else if (tmp8 === 3) {
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
            closure_132_0 = undefined;
            let kestrelConfig;
            closure_132_2 = undefined;
            let effectiveKestrelLimit;
            const first = self.files[0];
            let target;
            if (first != null) {
              const item = first.item;
              if (item != null) {
                target = item.target;
              }
            }
            const uploadTarget = _self(5174).getUploadTarget(target);
            closure_132_0 = uploadTarget;
            if (self.files.length > uploadTarget.getMaxAttachmentsCount()) {
              const _HermesInternal2 = HermesInternal;
              tmp65.log("Too many attachments for " + self.id);
              const obj1 = { code: tmp6.TOO_MANY_ATTACHMENTS };
              self._handleError(obj1);
              c9 = 3;
              return { value: false, done: true };
            } else {
              kestrelConfig = _self(5179).getKestrelConfig({ location: "UploaderBase.compressAndCheckFileSize" });
              const _HermesInternal3 = HermesInternal;
              tmp65.log("compressing files for " + self.id);
              const files = self.files;
              _self = files[Symbol.iterator]();
              const obj15 = _self(5179);
            }
            const obj14 = _self(5174);
          }
        } else if (1 === tmp9) {
          c7 = 0;
          _self.return();
          throw tmp65;
        } else if (2 === tmp9) {
          c7 = 1;
          closure_132_4 = tmp65;
          closure_133_0._handleException(closure_132_4);
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
          const obj2 = { value, done: true };
          return obj2;
        } else if (closure_132_2.isCancelled()) {
          const _HermesInternal = HermesInternal;
          tmp65.log("compressAndCheckFileSize() file has been cancelled for compression - " + closure_132_2.id);
          c7 = 0;
        } else {
          const currentSize = closure_132_2.currentSize;
          dependencyMap = currentSize;
          if (currentSize == null) {
            dependencyMap = 0;
          }
          if (0 === dependencyMap) {
            const obj3 = { code: tmp6.ENTITY_EMPTY };
            closure_133_0._handleError(obj3);
            c7 = 0;
            _self.return();
            c9 = 3;
            return { value: false, done: true };
          } else {
            effectiveKestrelLimit = _self(5179).getEffectiveKestrelLimit(
              kestrelConfig,
              closure_132_0.getMaxFileSize(closure_132_2.channelId),
            );
            const currentSize2 = closure_132_2.currentSize;
            c3 = currentSize2;
            if (currentSize2 == null) {
              c3 = 0;
            }
            if (c3 > effectiveKestrelLimit) {
              obj = { code: tmp6.ENTITY_TOO_LARGE, reason: null };
              const obj4 = { type: tmp4.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE };
              obj.reason = obj4;
              closure_133_0._handleError(obj);
              c7 = 0;
              _self.return();
              c9 = 3;
              return { value: false, done: true };
            } else {
              c7 = 0;
            }
            const obj13 = _self(5179);
          }
        }
        if (_self === undefined) {
          let flag = closure_133_0._fileSize() <= closure_132_0.getMaxTotalAttachmentSize();
          if (!flag) {
            const obj5 = { code: tmp6.ENTITY_TOO_LARGE, reason: null };
            const obj6 = { type: tmp4.POSTCOMPRESSION_SUM_TOO_LARGE };
            obj5.reason = obj6;
            closure_133_0._handleError(obj5);
            flag = false;
          }
          c9 = 3;
          const obj7 = { value: flag, done: true };
          return obj7;
        } else {
          closure_132_2 = tmp46;
          c7 = 2;
          c8 = 3;
          c9 = 1;
          const obj8 = { value: closure_132_2.reactNativeCompressAndExtractData(), done: false };
          return obj8;
        }
      } catch (tmp65) {
        if (tmp5 === c7) {
          c9 = tmp3;
          throw tmp65;
        } else if (tmp2 === tmp67) {
          c8 = tmp2;
        } else {
          c8 = tmp;
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
  logger.log(
    "setUploadingTextForUI - total content: " +
      _fileSizeResult +
      " bytes and " +
      this.files.length +
      " attachments for " +
      this.id,
  );
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
        let obj = { value, done: true };
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
                const obj1 = {};
                const merged = Object.assign(self._file);
                obj1.items = self.files;
                self._file = obj1;
                let obj2 = itemId(tmp3[9]);
                c3 = 1;
                c4 = 1;
                obj2 = { value: null, done: false };
                obj2.value = obj2.cancelGetAttachmentFile(found);
                return obj2;
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
        obj = { value, done: true };
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
    const obj = {
      id: self.id,
      currentSize: 0,
      totalPreCompressionSize: 0,
      compressionProgress: 0,
      progress: 0,
      rate: 0,
      hasImage: false,
      hasVideo: false,
      attachmentsCount: 0,
      items,
    };
    self._file = obj;
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/uploader/UploaderBase.tsx");

export default UploaderBase;
