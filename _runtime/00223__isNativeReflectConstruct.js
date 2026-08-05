// _runtime/00223__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import { Event } from "00133_Event.js";
import { FileReaderModule } from "00224_FileReaderModule.js";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class FileReader {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, FileReader);
    tmp2 = __esModule;
    obj = __esModule(FileReader);
    tmp3 = __esModule;
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
require("_inherits")(FileReader, require("dispatch"));
const items = [
  {
    key: "_reset",
    value: function _reset() {

    }
  },
  {
    key: "_setReadyState",
    value: function _setReadyState(_readyState) {
      let _error;
      let dispatchEvent;
      const self = this;
      this._readyState = _readyState;
      let tmp = importDefault;
      this.dispatchEvent(new Event("readystatechange"));
      if (2 === _readyState) {
        if (self._aborted) {
          let tmpResult = tmp(133);
          let tmp6 = new.target;
          tmpResult = new tmpResult("abort");
          self.dispatchEvent(tmpResult);
          dispatchEvent = tmp(133);
          tmp = new.target;
          dispatchEvent = new dispatchEvent("loadend");
          self.dispatchEvent(dispatchEvent);
        } else {
          ({ dispatchEvent, _error } = self);
          tmpResult = tmp(133);
          tmp6 = new.target;
          if (!_error) {
            const tmpResult1 = new tmpResult("load");
            dispatchEvent(tmpResult1);
          }
        }
        const tmpResult2 = new tmpResult("error");
        dispatchEvent(tmpResult2);
      }
    }
  },
  {
    key: "readAsArrayBuffer",
    value: function readAsArrayBuffer(closure_0) {
      const self = this;
      this._aborted = false;
      if (null == closure_0) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'readAsArrayBuffer' on 'FileReader': parameter 1 is not of type 'Blob'");
        throw typeError;
      } else {
        const asDataURL = FileReaderModule.readAsDataURL(closure_0.data);
        asDataURL.then((arg0) => {
          if (!self._aborted) {
            obj._result = self(outer1_2[7]).toByteArray(arg0.split(",")[1]).buffer;
            obj._setReadyState(2);
            const obj2 = self(outer1_2[7]);
          }
        }, (_error) => {
          if (!self._aborted) {
            obj._error = _error;
            obj._setReadyState(2);
          }
        });
      }
    }
  },
  {
    key: "readAsDataURL",
    value: function readAsDataURL(closure_0) {
      const self = this;
      this._aborted = false;
      if (null == closure_0) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'");
        throw typeError;
      } else {
        const asDataURL = FileReaderModule.readAsDataURL(closure_0.data);
        asDataURL.then((_result) => {
          if (!self._aborted) {
            obj._result = _result;
            obj._setReadyState(2);
          }
        }, (_error) => {
          if (!self._aborted) {
            obj._error = _error;
            obj._setReadyState(2);
          }
        });
      }
    }
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
        const typeError = new TypeError("Failed to execute 'readAsText' on 'FileReader': parameter 1 is not of type 'Blob'");
        throw typeError;
      } else {
        const asText = FileReaderModule.readAsText(_bodyBlob.data, str);
        asText.then((_result) => {
          if (!self._aborted) {
            obj._result = _result;
            obj._setReadyState(2);
          }
        }, (_error) => {
          if (!self._aborted) {
            obj._error = _error;
            obj._setReadyState(2);
          }
        });
      }
    }
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
    }
  },
  {
    key: "readyState",
    get() {
      return this._readyState;
    }
  },
  {
    key: "error",
    get() {
      return this._error;
    }
  },
  {
    key: "result",
    get() {
      return this._result;
    }
  },
  {
    key: "onabort",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "abort");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "abort", fn);
    }
  },
  {
    key: "onerror",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "error");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "error", fn);
    }
  },
  {
    key: "onload",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "load");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "load", fn);
    }
  },
  {
    key: "onloadstart",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "loadstart");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "loadstart", fn);
    }
  },
  {
    key: "onloadend",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "loadend");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "loadend", fn);
    }
  },
  {
    key: "onprogress",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "progress");
    },
    set(fn) {
      const result = FileReader(205).setEventHandlerAttribute(this, "progress", fn);
    }
  }
];
const importDefaultResultResult = importDefaultResult(FileReader, items);
importDefaultResultResult.EMPTY = 0;
importDefaultResultResult.LOADING = 1;
importDefaultResultResult.DONE = 2;

export default importDefaultResultResult;