// _runtime/metro/01170__.js
import _mod19 from "00019__.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _mod1159 from "01159__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
function formatReact(str, arg1, arg2) {
  let bindFormatValuesResult = str;
  if (typeof str !== "string") {
    const self = this;
    bindFormatValuesResult = this.bindFormatValues(arg2, str, arg1);
  }
  return bindFormatValuesResult;
}
_possibleConstructorReturn;
const createElement = _mod19.createElement;
let obj = { format: formatReact, builder: null };
function _class() {
  const self = this;
  c2(this, _class);
  const obj = hasOwnProperty(_class);
  if (closure_7()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, arguments, hasOwnProperty(self).constructor);
  } else {
    constructResult = obj(...arguments);
  }
  const tmp3Result = closure_4(self, constructResult);
  tmp3Result._nodeKey = 0;
  tmp3Result.result = [];
  return tmp3Result;
}
_inherits(_class, _mod1159.FormatBuilder);
let entry = {
  key: "pushRichTextTag",
  value: function pushRichTextTag(arg0, arg1, arg2) {
    const result = this.result;
    this._nodeKey = +this._nodeKey + 1;
    result.push(_class[arg0](arg1, "" + this.context.keyPrefix + ".tag-" + +this._nodeKey, arg2));
  },
};
let items = [
  entry,
  {
    key: "pushLiteralText",
    value: function pushLiteralText(arg0) {
      const self = this;
      if (typeof this.result[this.result.length - 1] === "string") {
        let result = self.result;
        const diff = self.result.length - 1;
        result[diff] = result[diff] + arg0;
      } else {
        result = self.result;
        result.push(arg0);
      }
    },
  },
  {
    key: "pushObject",
    value: function pushObject(arg0) {
      const result = this.result;
      result.push(arg0);
    },
  },
  {
    key: "finish",
    value: function finish() {
      return this.result;
    },
  },
];
obj.builder = _createClass(_class, items);

export { formatReact };
export const makeReactFormatter = function makeReactFormatter(arg0) {
  let obj = { format: formatReact, builder: null };
  _class = function _class() {
    const self = this;
    c2(this, _class);
    const obj = hasOwnProperty(_class);
    if (closure_7()) {
      const _Reflect = Reflect;
      let constructResult = Reflect.construct(obj, arguments, hasOwnProperty(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = closure_4(self, constructResult);
    tmp3Result._nodeKey = 0;
    tmp3Result.result = [];
    return tmp3Result;
  };
  _inherits(_class, _class(1159).FormatBuilder);
  const entry = {
    key: "pushRichTextTag",
    value: function pushRichTextTag(arg0, arg1, arg2) {
      const result = this.result;
      this._nodeKey = +this._nodeKey + 1;
      result.push(_class[arg0](arg1, "" + this.context.keyPrefix + ".tag-" + +this._nodeKey, arg2));
    },
  };
  const items = [
    entry,
    {
      key: "pushLiteralText",
      value: function pushLiteralText(arg0) {
        const self = this;
        if (typeof this.result[this.result.length - 1] === "string") {
          let result = self.result;
          const diff = self.result.length - 1;
          result[diff] = result[diff] + arg0;
        } else {
          result = self.result;
          result.push(arg0);
        }
      },
    },
    {
      key: "pushObject",
      value: function pushObject(arg0) {
        const result = this.result;
        result.push(arg0);
      },
    },
    {
      key: "finish",
      value: function finish() {
        return this.result;
      },
    },
  ];
  obj.builder = _createClass(_class, items);
  return obj;
};
export const DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
  $b(element, key) {
    return <strong key={key}>{element}</strong>;
  },
  $i(element, key) {
    return <em key={key}>{element}</em>;
  },
  $del(element, key) {
    return <del key={key}>{element}</del>;
  },
  $code(element, key) {
    return <code key={key}>{element}</code>;
  },
  $link(element, key, arg2) {
    [tmp] = arg2;
    return (
      <a href={tmp} key={key}>
        {element}
      </a>
    );
  },
  $p(element, key) {
    return <p key={key}>{element}</p>;
  },
};
export const reactFormatter = obj;
