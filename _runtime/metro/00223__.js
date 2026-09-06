// _runtime/metro/00223__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import dispatchDefault from "../00132_dispatch.js";
import EventDefault from "../00133_Event.js";
import FileReaderModuleDefault from "../00224_FileReaderModule.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
_possibleConstructorReturnDefault;
class FileReader {
  constructor() {
    self = this;
    tmp = closure_3(this, FileReader);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FileReader);
    tmp3 = closure_4;
    if (metroRequire()) {
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
_inherits(FileReader, dispatchDefault);
const entry = {
  key: "_reset",
  value: function _reset() {},
};
const items = [
  entry,
  {
    key: "_setReadyState",
    value: function _setReadyState(_readyState) {
      const self = this;
      this._readyState = _readyState;
      this.dispatchEvent(new EventDefault("readystatechange"));
      if (2 === _readyState) {
        if (self._aborted) {
          let tmpResult = EventDefault;
          let tmp6 = new.target;
          tmpResult = new tmpResult("abort");
          self.dispatchEvent(tmpResult);
          dispatchEvent = EventDefault;
          const tmp = new.target;
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
    value: function readAsArrayBuffer(response) {
      const self = this;
      this._aborted = false;
      if (null == response) {
        const _TypeError = TypeError;
        const typeError = new TypeError(
          "Failed to execute 'readAsArrayBuffer' on 'FileReader': parameter 1 is not of type 'Blob'",
        );
        throw typeError;
      } else {
        const asDataURL = FileReaderModuleDefault.readAsDataURL(response.data);
        asDataURL.then(
          (result) => {
            if (!self._aborted) {
              self._result = FileReader(206).toByteArray(result.split(",")[1]).buffer;
              self._setReadyState(2);
              const obj2 = FileReader(206);
            }
          },
          (_error) => {
            if (!self._aborted) {
              self._error = _error;
              self._setReadyState(2);
            }
          },
        );
      }
    },
  },
  {
    key: "readAsDataURL",
    value: function readAsDataURL(data) {
      const self = this;
      this._aborted = false;
      if (null == data) {
        const _TypeError = TypeError;
        const typeError = new TypeError(
          "Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'",
        );
        throw typeError;
      } else {
        const asDataURL = FileReaderModuleDefault.readAsDataURL(data.data);
        asDataURL.then(
          (_result) => {
            if (!self._aborted) {
              self._result = _result;
              self._setReadyState(2);
            }
          },
          (_error) => {
            if (!self._aborted) {
              self._error = _error;
              self._setReadyState(2);
            }
          },
        );
      }
    },
  },
  {
    key: "readAsText",
    value: function readAsText(_bodyBlob) {
      const self = this;
      let str = match;
      if (match === undefined) {
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
              self._result = _result;
              self._setReadyState(2);
            }
          },
          (_error) => {
            if (!self._aborted) {
              self._error = _error;
              self._setReadyState(2);
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
    set(handleEvent) {
      const result = FileReader(205).setEventHandlerAttribute(this, "abort", handleEvent);
    },
  },
  {
    key: "onerror",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "error");
    },
    set(handleEvent) {
      const result = FileReader(205).setEventHandlerAttribute(this, "error", handleEvent);
    },
  },
  {
    key: "onload",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "load");
    },
    set(handleEvent) {
      const result = FileReader(205).setEventHandlerAttribute(this, "load", handleEvent);
    },
  },
  {
    key: "onloadstart",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "loadstart");
    },
    set(handleEvent) {
      const result = FileReader(205).setEventHandlerAttribute(this, "loadstart", handleEvent);
    },
  },
  {
    key: "onloadend",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "loadend");
    },
    set(handleEvent) {
      const result = FileReader(205).setEventHandlerAttribute(this, "loadend", handleEvent);
    },
  },
  {
    key: "onprogress",
    get() {
      return FileReader(205).getEventHandlerAttribute(this, "progress");
    },
    set(handleEvent) {
      const result = FileReader(205).setEventHandlerAttribute(this, "progress", handleEvent);
    },
  },
];
const importDefaultResultResult = _createClass(FileReader, items);
importDefaultResultResult.EMPTY = 0;
importDefaultResultResult.LOADING = 1;
importDefaultResultResult.DONE = 2;

export default importDefaultResultResult;
