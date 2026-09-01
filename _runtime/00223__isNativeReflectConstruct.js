// _runtime/00223__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import dispatchDefault from "00132_dispatch.js";
import EventDefault from "00133_Event.js";
import FileReaderModuleDefault from "00224_FileReaderModule.js";
import closure_3 from "metro/00041__classCallCheck.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

const FileReader = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class FileReader {
  constructor() {
    self = this;
    tmp = closure_3(this, FileReader);
    tmp2 = closure_5;
    obj = closure_5(FileReader);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.EMPTY = 0;
    tmp3Result.LOADING = 1;
    tmp3Result.DONE = 2;
    tmp3Result._aborted = false;
    _resetResult = tmp3Result._reset();
    return tmp3Result;
  }
}
_inheritsDefault(FileReader, dispatchDefault);
const items = [
  {
    key: "_reset",
    value: function _reset() {},
  },
  {
    key: "_setReadyState",
    value: function _setReadyState(_readyState) {
      const self = this;
      this._readyState = _readyState;
      let tmp = importDefault;
      this.dispatchEvent(new EventDefault("readystatechange"));
      if (2 === _readyState) {
        if (self._aborted) {
          let tmpResult = EventDefault;
          let tmp6 = new.target;
          tmpResult = new tmpResult("abort");
          self.dispatchEvent(tmpResult);
          dispatchEvent = EventDefault;
          tmp = new.target;
          dispatchEvent = new dispatchEvent("loadend");
          self.dispatchEvent(dispatchEvent);
        } else {
          ({ dispatchEvent, _error } = self);
          tmpResult = EventDefault;
          tmp6 = new.target;
          if (!_error) {
            const tmpResult1 = new tmpResult("load");
            dispatchEvent(tmpResult1);
          }
        }
        const tmpResult2 = new tmpResult("error");
        dispatchEvent(tmpResult2);
      }
    },
  },
  {
    key: "readAsArrayBuffer",
    value: function readAsArrayBuffer(closure_0) {
      const self = this;
      this._aborted = false;
      if (null == closure_0) {
        const _TypeError = TypeError;
        const typeError = new TypeError(
          "Failed to execute 'readAsArrayBuffer' on 'FileReader': parameter 1 is not of type 'Blob'",
        );
        throw typeError;
      } else {
        const asDataURL = FileReaderModuleDefault.readAsDataURL(closure_0.data);
        asDataURL.then(
          (arg0) => {
            if (!self._aborted) {
              obj._result = self(closure_1_2[7]).toByteArray(arg0.split(",")[1]).buffer;
              obj._setReadyState(2);
              const obj2 = self(closure_1_2[7]);
            }
          },
          (_error) => {
            if (!self._aborted) {
              obj._error = _error;
              obj._setReadyState(2);
            }
          },
        );
      }
    },
  },
  {
    key: "readAsDataURL",
    value: function readAsDataURL(closure_0) {
      const self = this;
      this._aborted = false;
      if (null == closure_0) {
        const _TypeError = TypeError;
        const typeError = new TypeError(
          "Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'",
        );
        throw typeError;
      } else {
        const asDataURL = FileReaderModuleDefault.readAsDataURL(closure_0.data);
        asDataURL.then(
          (_result) => {
            if (!self._aborted) {
              obj._result = _result;
              obj._setReadyState(2);
            }
          },
          (_error) => {
            if (!self._aborted) {
              obj._error = _error;
              obj._setReadyState(2);
            }
          },
        );
      }
    },
  },
  {
    key: "readAsText",
    value: function readAsText(_bodyBlob, arg1) {
      const self = this;
      let str = arg1;
      if (arg1 === undefined) {
        str = "UTF-8";
      }
      this._aborted = false;
      if (null == _bodyBlob) {
        const _TypeError = TypeError;
        const typeError = new TypeError(
          "Failed to execute 'readAsText' on 'FileReader': parameter 1 is not of type 'Blob'",
        );
        throw typeError;
      } else {
        const asText = FileReaderModuleDefault.readAsText(_bodyBlob.data, str);
        asText.then(
          (_result) => {
            if (!self._aborted) {
              obj._result = _result;
              obj._setReadyState(2);
            }
          },
          (_error) => {
            if (!self._aborted) {
              obj._error = _error;
              obj._setReadyState(2);
            }
          },
        );
      }
    },
  },
  {
    key: "abort",
    value: function abort() {
      const self = this;
      this._aborted = true;
      let tmp = 0 !== this._readyState;
      if (tmp) {
        tmp = 2 !== self._readyState;
      }
      if (tmp) {
        self._reset();
        self._setReadyState(2);
      }
      self._reset();
    },
  },
  {
    key: "readyState",
    get() {
      return this._readyState;
    },
  },
  {
    key: "error",
    get() {
      return this._error;
    },
  },
  {
    key: "result",
    get() {
      return this._result;
    },
  },
  {
    key: "onabort",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "abort");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "abort", fn);
    },
  },
  {
    key: "onerror",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "error");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "error", fn);
    },
  },
  {
    key: "onload",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "load");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "load", fn);
    },
  },
  {
    key: "onloadstart",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "loadstart");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "loadstart", fn);
    },
  },
  {
    key: "onloadend",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "loadend");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "loadend", fn);
    },
  },
  {
    key: "onprogress",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "progress");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "progress", fn);
    },
  },
];
const importDefaultResultResult = importDefaultResult(FileReader, items);
importDefaultResultResult.EMPTY = 0;
importDefaultResultResult.LOADING = 1;
importDefaultResultResult.DONE = 2;

export default importDefaultResultResult;
