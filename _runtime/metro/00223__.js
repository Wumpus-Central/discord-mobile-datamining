// _runtime/metro/00223__.js
import _modDef132 from "00132__.js";
import _modDef133 from "00133__.js";
import byteLength from "../00206_byteLength.js";
import FileReaderModuleDefault from "../00224_FileReaderModule.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const require = globalThis.__r;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class FileReader {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FileReader);
    const obj = _getPrototypeOf(FileReader);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    tmp3Result.EMPTY = 0;
    tmp3Result.LOADING = 1;
    tmp3Result.DONE = 2;
    tmp3Result._aborted = false;
    tmp3Result._reset();
    return tmp3Result;
  }
}
_inherits(FileReader, _modDef132);
const entry = {
  key: "_reset",
  value: function _reset() {},
};
const items = [
  entry,
  {
    key: "_setReadyState",
    value: function _setReadyState(_readyState) {
      let _error;
      let dispatchEvent2;
      const self = this;
      this._readyState = _readyState;
      const dispatchEvent = this.dispatchEvent;
      const tmp3 = new _modDef133("readystatechange");
      dispatchEvent(tmp3);
      if (2 === _readyState) {
        if (self._aborted) {
          const dispatchEvent3 = self.dispatchEvent;
          const self3 = this;
          const self4 = this;
          const tmp14 = new _modDef133("abort");
          dispatchEvent3(tmp14);
        } else {
          ({ dispatchEvent: dispatchEvent2, _error } = self);
          const tmpResult = _modDef133;
          const self2 = this;
          if (_error) {
            const tmpResult1 = new tmpResult("error");
            dispatchEvent2(tmpResult1);
          } else {
            const tmpResult2 = new tmpResult("load");
            dispatchEvent2(tmpResult2);
          }
        }
        const dispatchEvent4 = self.dispatchEvent;
        const self5 = this;
        const self6 = this;
        const tmp17 = new _modDef133("loadend");
        dispatchEvent4(tmp17);
      }
    },
  },
  {
    key: "readAsArrayBuffer",
    value: function readAsArrayBuffer(data) {
      let self = this;
      this._aborted = false;
      if (null == data) {
        const _TypeError = TypeError;
        self = this;
        const self2 = this;
        const typeError = new TypeError(
          "Failed to execute 'readAsArrayBuffer' on 'FileReader': parameter 1 is not of type 'Blob'",
        );
        throw typeError;
      } else {
        const obj = FileReaderModuleDefault;
        const asDataURL = obj.readAsDataURL(data.data);
        asDataURL.then(
          (result) => {
            if (!self._aborted) {
              const tmp2 = result.split(",")[1];
              const obj2 = byteLength;
              self._result = obj2.toByteArray(tmp2).buffer;
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
    key: "readAsDataURL",
    value: function readAsDataURL(data) {
      let self = this;
      this._aborted = false;
      if (null == data) {
        const _TypeError = TypeError;
        self = this;
        const self2 = this;
        const typeError = new TypeError(
          "Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'",
        );
        throw typeError;
      } else {
        const obj = FileReaderModuleDefault;
        const asDataURL = obj.readAsDataURL(data.data);
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
      let self = this;
      let str = match;
      if (match === undefined) {
        str = "UTF-8";
      }
      this._aborted = false;
      if (null == _bodyBlob) {
        const _TypeError = TypeError;
        self = this;
        const self2 = this;
        const typeError = new TypeError(
          "Failed to execute 'readAsText' on 'FileReader': parameter 1 is not of type 'Blob'",
        );
        throw typeError;
      } else {
        const obj = FileReaderModuleDefault;
        const asText = obj.readAsText(_bodyBlob.data, str);
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
      const tmp = 0 !== this._readyState && 2 !== self._readyState;
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
      const obj = require("00205__.js");
      return obj.getEventHandlerAttribute(this, "abort");
    },
    set(handleEvent) {
      const obj = require("00205__.js");
      const result = obj.setEventHandlerAttribute(this, "abort", handleEvent);
    },
  },
  {
    key: "onerror",
    get() {
      const obj = require("00205__.js");
      return obj.getEventHandlerAttribute(this, "error");
    },
    set(handleEvent) {
      const obj = require("00205__.js");
      const result = obj.setEventHandlerAttribute(this, "error", handleEvent);
    },
  },
  {
    key: "onload",
    get() {
      const obj = require("00205__.js");
      return obj.getEventHandlerAttribute(this, "load");
    },
    set(handleEvent) {
      const obj = require("00205__.js");
      const result = obj.setEventHandlerAttribute(this, "load", handleEvent);
    },
  },
  {
    key: "onloadstart",
    get() {
      const obj = require("00205__.js");
      return obj.getEventHandlerAttribute(this, "loadstart");
    },
    set(handleEvent) {
      const obj = require("00205__.js");
      const result = obj.setEventHandlerAttribute(this, "loadstart", handleEvent);
    },
  },
  {
    key: "onloadend",
    get() {
      const obj = require("00205__.js");
      return obj.getEventHandlerAttribute(this, "loadend");
    },
    set(handleEvent) {
      const obj = require("00205__.js");
      const result = obj.setEventHandlerAttribute(this, "loadend", handleEvent);
    },
  },
  {
    key: "onprogress",
    get() {
      const obj = require("00205__.js");
      return obj.getEventHandlerAttribute(this, "progress");
    },
    set(handleEvent) {
      const obj = require("00205__.js");
      const result = obj.setEventHandlerAttribute(this, "progress", handleEvent);
    },
  },
];
const importDefaultResultResult = _createClass(FileReader, items);
importDefaultResultResult.EMPTY = 0;
importDefaultResultResult.LOADING = 1;
importDefaultResultResult.DONE = 2;

export default importDefaultResultResult;
