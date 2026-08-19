// discord_app/lib/uploader/UploaderBase.tsx
import timestampDefault from "../../modules/debug/Logger.tsx";
import applyDefault from "../../../_runtime/00012_apply.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import { AbortCodes } from "../../Constants.tsx";
import { FileUploadErrorTypes } from "../../modules/messages/MessageConstants.tsx";
import { EventEmitter } from "../../../_runtime/00652_EventEmitter.js";

const require = fn;
let closure_6 = new timestampDefault("UploaderBase.tsx");
class UploaderBase extends EventEmitter {
  constructor() {
    tmp3 = new UploaderBase(tmp2, new.target, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp3;
    tmp3._aborted = false;
    tmp3._errored = false;
    tmp3.files = [];
    tmp3._lastUpdate = 0;
    tmp3._loaded = 0;
    tmp3.alreadyStarted = false;
    tmp3._handleStart = function _handleStart(_cancel) {
      lib._cancel = _cancel;
      if (!lib.alreadyStarted) {
        lib.emit("start", lib._file);
      }
      lib.alreadyStarted = true;
    };
    tmp3._handleProgress = function _handleProgress(loaded, total, arg2) {
      const lib = arg2;
      const timestamp = Date.now();
      let obj = lib(dependencyMap[8]);
      const rounded = Math.floor((loaded - lib._loaded) / ((timestamp - lib._lastUpdate) / 1000));
      if (null != arg2) {
        const items = obj2._file.items;
        if (items != null) {
          const item = items.forEach((item, index) => {
            item.item.progress = table[item.id];
          });
        }
      }
      lib._lastUpdate = timestamp;
      lib._loaded = loaded;
      obj = {};
      const merged = Object.assign(obj2._file);
      obj.currentSize = total;
      obj.progress = obj.calculateProgress(loaded, total);
      obj.rate = rounded;
      lib._file = obj;
      lib.emit("progress", lib._file);
    };
    tmp3._handleException = function _handleException(closure_0) {
      const obj = { type: FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN, msg: closure_0.toString() };
      obj[0] = obj;
      lib._handleError(obj);
    };
    tmp3._handleAborted = function _handleAborted() {
      const result = lib.clearProcessingMessageInterval();
    };
    tmp3._handleError = function _handleError(arg0) {
      ({ code, reason, body } = arg0);
      const result = lib.clearProcessingMessageInterval();
      if (!lib._aborted) {
        lib._errored = true;
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        closure_1_6.log("_handleError: " + code + " (" + JSON.stringify(reason) + ") for " + lib.id);
        lib.emit("error", lib._file, code, body, reason);
        lib.removeAllListeners();
      }
    };
    tmp3._handleComplete = function _handleComplete(arg0) {
      const result = lib.clearProcessingMessageInterval();
      closure_1_6.log("_handleComplete for " + lib.id);
      lib.emit("complete", lib._file, arg0);
      lib.removeAllListeners();
    };
    obj = require("apply");
    tmp3.id = obj.uniqueId("Uploader");
    tmp3._file = { id: tmp3.id, currentSize: 0, totalPreCompressionSize: 0, compressionProgress: 0, progress: 0, rate: 0, hasImage: false, hasVideo: false, attachmentsCount: 0, items: "channel" };
    return tmp3;
  }
}
const prototype = UploaderBase.prototype;
prototype["_fileSize"] = function _fileSize() {
  const files = this.files;
  return files.reduce((acc, item, index) => {
    let num = item.currentSize;
    if (num == null) {
      num = 0;
    }
    return acc + num;
  }, 0);
};
prototype["compressAndCheckFileSize"] = function compressAndCheckFileSize() {
  const self = this;
  return callback(function*() {
    if (c9 === 2) {
      c9 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp8 === 3) {
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
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_5 = tmp4;
            closure_4 = tmp6;
            let store;
            let files;
            c2 = undefined;
            let effectiveKestrelLimit;
            const first = self.files[0];
            let target;
            if (first != null) {
              const item = first.item;
              if (item != null) {
                target = item.target;
              }
            }
            const uploadTarget = self(closure_1_2[6]).getUploadTarget(target);
            store = uploadTarget;
            if (self.files.length > uploadTarget.getMaxAttachmentsCount()) {
              const _HermesInternal2 = HermesInternal;
              closure_1_6.log("Too many attachments for " + self.id);
              obj1 = { code: null };
              obj1[0] = closure_1_4.TOO_MANY_ATTACHMENTS;
              self._handleError(obj1);
              c9 = 3;
              return { value: false, done: true };
            } else {
              files = self(closure_1_2[7]).getKestrelConfig({ location: "UploaderBase.compressAndCheckFileSize" });
              const _HermesInternal3 = HermesInternal;
              closure_1_6.log("compressing files for " + self.id);
              files = self.files;
              store = files[Symbol.iterator]();
              const obj15 = self(closure_1_2[7]);
            }
            const obj14 = self(closure_1_2[6]);
          }
        } else if (1 === tmp9) {
          c7 = 0;
          store.return();
          throw closure_6;
        } else if (2 === tmp9) {
          c7 = 1;
          closure_4 = closure_6;
          self._handleException(closure_4);
          c7 = 0;
          store.return();
          c9 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c9 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 0;
          store.return();
          c9 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else if (c2.isCancelled()) {
          const _HermesInternal = HermesInternal;
          closure_1_6.log("compressAndCheckFileSize() file has been cancelled for compression - " + c2.id);
          c7 = 0;
        } else {
          const currentSize = c2.currentSize;
          c2 = currentSize;
          if (currentSize == null) {
            c2 = 0;
          }
          if (0 === c2) {
            const obj3 = { code: null };
            obj3[0] = closure_1_4.ENTITY_EMPTY;
            store._handleError(obj3);
            c7 = 0;
            store.return();
            c9 = 3;
            return { value: false, done: true };
          } else {
            effectiveKestrelLimit = self(closure_1_2[7]).getEffectiveKestrelLimit(files, store.getMaxFileSize(c2.channelId));
            const currentSize2 = c2.currentSize;
            effectiveKestrelLimit = currentSize2;
            if (currentSize2 == null) {
              effectiveKestrelLimit = 0;
            }
            if (effectiveKestrelLimit > effectiveKestrelLimit) {
              obj = { code: null, reason: null };
              obj[0] = closure_1_4.ENTITY_TOO_LARGE;
              const obj4 = { type: null };
              obj4[0] = closure_1_5.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
              obj[1] = obj4;
              store._handleError(obj);
              c7 = 0;
              store.return();
              c9 = 3;
              return { value: false, done: true };
            } else {
              c7 = 0;
            }
            const obj13 = self(closure_1_2[7]);
          }
        }
        if (store === undefined) {
          let flag = store._fileSize() <= store.getMaxTotalAttachmentSize();
          if (!flag) {
            const obj5 = { code: null, reason: null };
            obj5[0] = closure_1_4.ENTITY_TOO_LARGE;
            const obj6 = { type: null };
            obj6[0] = closure_1_5.POSTCOMPRESSION_SUM_TOO_LARGE;
            obj5[1] = obj6;
            self._handleError(obj5);
            flag = false;
          }
          c9 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = flag;
          return obj7;
        } else {
          c2 = tmp46;
          c7 = 2;
          c8 = 3;
          c9 = 1;
          const obj8 = { value: null, done: false };
          obj8[0] = c2.reactNativeCompressAndExtractData();
          return obj8;
        }
      } catch (tmp65) {
        closure_6 = tmp65;
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
  const someResult = files.some((item, index) => item.isImage);
  const _fileSizeResult = this._fileSize();
  logger.log("setUploadingTextForUI - total content: " + _fileSizeResult + " bytes and " + this.files.length + " attachments for " + this.id);
  const obj = {};
  const merged = Object.assign(this._file);
  obj.totalPostCompressionSize = _fileSizeResult;
  obj.currentSize = _fileSizeResult;
  obj.hasVideo = files2.some((item, index) => item.isVideo);
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
  const obj = {
    loaded: files.reduce((acc, item, index) => {
      let num = item.loaded;
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0),
    total: this._fileSize()
  };
  files = this.files;
  return obj;
};
prototype["_recomputeProgressByFile"] = function _recomputeProgressByFile() {
  let obj = {};
  const files = this.files;
  const item = files.forEach((item, index) => {
    obj = obj(dependencyMap[8]);
    obj[item.id] = obj.calculateProgress(item.loaded, item.currentSize);
  });
  return obj;
};
prototype["_addAttachmentsToPayload"] = function _addAttachmentsToPayload(arg0, arg1, arg2) {
  const merged = Object.assign(arg0);
  applyDefault;
  const items = [...arg2];
  return applyDefault.set({}, arg1, items);
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
    const item = files.forEach((item, index) => item.cancel());
    self._handleComplete();
  }
};
prototype["cancelItem"] = function cancelItem(itemId) {
  closure_0 = itemId;
  const self = this;
  return callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp2;
            closure_0 = undefined;
            const _HermesInternal = HermesInternal;
            closure_1_6.log("Cancel called for " + self.id + " for item " + itemId);
            const files = self.files;
            const found = files.find((item, index) => item.id === closure_0);
            closure_0 = found;
            if (null != found) {
              if (!found.isCancelled()) {
                const files1 = self.files;
                const index = files1.indexOf(found);
                closure_0 = 0;
                const files2 = self.files;
                const items = [];
                closure_0 = HermesBuiltin.arraySpread(files2.slice(0, index), closure_0);
                const files3 = self.files;
                closure_0 = HermesBuiltin.arraySpread(files3.slice(index + 1), closure_0);
                self.files = items;
                obj1 = {};
                const merged = Object.assign(self._file);
                obj1.items = self.files;
                self._file = obj1;
                let obj2 = itemId(closure_1_2[9]);
                c3 = 1;
                c4 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.cancelGetAttachmentFile(found);
                return obj2;
              }
            }
            c4 = 3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0.cancel();
          closure_1.emit("cancel-upload-item", closure_1._file);
          if (0 === closure_1.files.length) {
            closure_1.cancel();
          }
        }
        c4 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp31) {
        c4 = tmp;
        throw tmp31;
      }
    }
  })();
};
prototype["upload"] = function upload(arg0) {
  const self = this;
  if (null != this._cancel) {
    const _Error = Error;
    error = new Error("Uploader.upload(...): An upload is already in progress.");
    throw error;
  } else {
    const _Date = Date;
    self._lastUpdate = Date.now();
    self._loaded = 0;
    const obj = { id: null, currentSize: 0, totalPreCompressionSize: 0, compressionProgress: 0, progress: 0, rate: 0, hasImage: false, hasVideo: false, attachmentsCount: 0, items: null };
    obj[0] = self.id;
    obj[9] = arg0;
    self._file = obj;
  }
};
const tmp2 = new timestampDefault("UploaderBase.tsx");
let result = require("obj132").fileFinishedImporting("lib/uploader/UploaderBase.tsx");

export default UploaderBase;