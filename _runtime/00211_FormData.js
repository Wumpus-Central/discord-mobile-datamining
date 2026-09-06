// _runtime/00211_FormData.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

class FormData {
  constructor() {
    tmp = closure_0(this, FormData);
    this._parts = [];
    return;
  }
}
_classCallCheck = FormData;
const entry = {
  key: "append",
  value: function append(arg0, arg1) {
    const _parts = this._parts;
    const items = [arg0, arg1];
    _parts.push(items);
  },
};
let items = [
  entry,
  {
    key: "getAll",
    value: function getAll(arg0) {
      closure_0 = arg0;
      const _parts = this._parts;
      const found = _parts.filter((item) => {
        [tmp] = item;
        return tmp === closure_0;
      });
      return found.map((item) => {
        [, tmp] = item;
        return tmp;
      });
    },
  },
  {
    key: "getParts",
    value: function getParts() {
      const _parts = this._parts;
      return _parts.map((item) => {
        [tmp, tmp2] = item;
        let obj = { "content-disposition": `form-data; name="${tmp}"` };
        if (typeof tmp2 === "object") {
          const _Array = Array;
          if (!Array.isArray(tmp2)) {
            if (tmp2) {
              if (typeof tmp2.name === "string") {
                const _encodeURIComponent = encodeURIComponent;
                const _HermesInternal = HermesInternal;
                obj["content-disposition"] =
                  obj["content-disposition"] + '; filename="' + encodeURIComponent(tmp2.name.replace(/\//g, "_")) + '"';
              }
              if (typeof tmp2.type === "string") {
                obj["content-type"] = tmp2.type;
              }
              obj = {};
              const merged = Object.assign(tmp2);
              obj.headers = obj;
              obj.fieldName = tmp;
            }
            return obj;
          }
        }
        obj = { string: String(tmp2), headers: obj, fieldName: tmp };
      });
    },
  },
];

export default _createClassDefault(FormData, items);
