// === Module 1289: _isNativeReflectConstruct ===

// Module 1289 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import c4 from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { createElement } from "noop";

let _class = require;
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
function formatReact(arg0, arg1, arg2) {
  let bindFormatValuesResult = arg0;
  if (typeof arg0 !== "y") {
    const self = this;
    bindFormatValuesResult = this.bindFormatValues(arg2, arg0, arg1);
  }
  return bindFormatValuesResult;
}
let obj = { format: formatReact, builder: null };
_class = exports.DEFAULT_REACT_RICH_TEXT_ELEMENTS;
_class = function _class(arg0) {
  const self = this;
  _classCallCheck(this, _class);
  const obj = _getPrototypeOf(_class);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj(...arguments);
  }
  const tmp3Result = _possibleConstructorReturn(self, constructResult);
  tmp3Result._nodeKey = 0;
  tmp3Result.result = [];
  return tmp3Result;
};
_inherits(_class, require("_isNativeReflectConstruct").FormatBuilder);
obj = {
  key: "pushRichTextTag",
  value: function pushRichTextTag(arg0, arg1, arg2) {
    const result = this.result;
    this._nodeKey = +this._nodeKey + 1;
    result.push(_class[arg0](arg1, "" + this.context.keyPrefix + ".tag-" + +this._nodeKey, arg2));
  }
};
let items = [
  obj,
  {
    key: "pushLiteralText",
    value: function pushLiteralText(arg0) {
      const self = this;
      if (typeof this.result[this.result.length - 1] === "y") {
        let result = self.result;
        const diff = self.result.length - 1;
        result[diff] = result[diff] + arg0;
      } else {
        result = self.result;
        result.push(arg0);
      }
    }
  },
  {
    key: "pushObject",
    value: function pushObject(arg0) {
      const result = this.result;
      result.push(arg0);
    }
  },
  {
    key: "finish",
    value: function finish() {
      return this.result;
    }
  }
];
obj[1] = _createClass(_class, items);

export { formatReact };
export const makeReactFormatter = function makeReactFormatter(arg0) {
  let obj = { format: formatReact, builder: null };
  let _class = arg0;
  _class = function _class(arg0) {
    const self = this;
    _classCallCheck(this, _class);
    const obj = _getPrototypeOf(_class);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      let constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    tmp3Result._nodeKey = 0;
    tmp3Result.result = [];
    return tmp3Result;
  };
  _inherits(_class, _class(1278).FormatBuilder);
  obj = {
    key: "pushRichTextTag",
    value: function pushRichTextTag(arg0, arg1, arg2) {
      const result = this.result;
      this._nodeKey = +this._nodeKey + 1;
      result.push(_class[arg0](arg1, "" + this.context.keyPrefix + ".tag-" + +this._nodeKey, arg2));
    }
  };
  const items = [
    obj,
    {
      key: "pushLiteralText",
      value: function pushLiteralText(arg0) {
        const self = this;
        if (typeof this.result[this.result.length - 1] === "y") {
          let result = self.result;
          const diff = self.result.length - 1;
          result[diff] = result[diff] + arg0;
        } else {
          result = self.result;
          result.push(arg0);
        }
      }
    },
    {
      key: "pushObject",
      value: function pushObject(arg0) {
        const result = this.result;
        result.push(arg0);
      }
    },
    {
      key: "finish",
      value: function finish() {
        return this.result;
      }
    }
  ];
  obj[1] = _createClass(_class, items);
  return obj;
};
export const DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
  $b(arg0, key) {
    return <strong key={arg1}>{arg0}</strong>;
  },
  $i(arg0, key) {
    return <em key={arg1}>{arg0}</em>;
  },
  $del(arg0, key) {
    return <del key={arg1}>{arg0}</del>;
  },
  $code(arg0, key) {
    return <code key={arg1}>{arg0}</code>;
  },
  $link(arg0, key) {
    let tmp;
    [tmp] = arg2;
    return <a href={tmp} key={arg1}>{arg0}</a>;
  },
  $p(arg0, key) {
    return <p key={arg1}>{arg0}</p>;
  }
};
export const reactFormatter = obj;