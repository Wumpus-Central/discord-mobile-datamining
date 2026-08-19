// === Module 211: FormData ===

// Module 211 (FormData)
import _createClassDefault from "_createClass" /* 42 */;
import FormData from "_classCallCheck" /* 41 */;

class FormData {
  constructor() {
    tmp = FormData(this, FormData);
    this._parts = [];
    return;
  }
}
let items = [
  {
    key: "append",
    value: function append(arg0, arg1) {
      const _parts = this._parts;
      const items = [arg0, arg1];
      _parts.push(items);
    }
  },
  {
    key: "getAll",
    value: function getAll(arg0) {
      closure_0 = arg0;
      const _parts = this._parts;
      const found = _parts.filter((arg0) => {
        [tmp] = arg0;
        return tmp === closure_0;
      });
      return found.map((arg0) => {
        [, tmp] = arg0;
        return tmp;
      });
    }
  },
  {
    key: "getParts",
    value: function getParts() {
      const _parts = this._parts;
      return _parts.map((arg0) => {
        [tmp, tmp2] = arg0;
        let obj = { "content-disposition": `form-data; name="${tmp}"` };
        if (typeof tmp2 === "object") {
          const _Array = Array;
          if (!Array.isArray(tmp2)) {
            if (tmp2) {
              if (typeof tmp2.name === "string") {
                const _encodeURIComponent = encodeURIComponent;
                const _HermesInternal = HermesInternal;
                obj["content-disposition"] = obj["content-disposition"] + "; filename=\"" + encodeURIComponent(tmp2.name.replace(/\//g, "_")) + "\"";
                const str = tmp2.name;
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
    }
  }
];

export default _createClassDefault(FormData, items);