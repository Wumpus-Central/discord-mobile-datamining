// _runtime/metro/00211__.js
import _createClassDefault from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";

class FormData {
  constructor() {
    _classCallCheck(this, FormData);
    this._parts = [];
  }
}
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
      let closure_0 = arg0;
      const _parts = this._parts;
      const found = _parts.filter((item) => {
        let tmp;
        [tmp] = item;
        return tmp === closure_0;
      });
      return found.map((item) => {
        let tmp;
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
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        const obj = { "content-disposition": `form-data; name="${tmp}"` };
        if (typeof tmp2 === "object") {
          const _Array = Array;
          if (!Array.isArray(tmp2)) {
            let obj2;
            if (tmp2) {
              if (typeof tmp2.name === "string") {
                const _encodeURIComponent = encodeURIComponent;
                const _HermesInternal = HermesInternal;
                const str = tmp2.name;
                obj["content-disposition"] =
                  obj["content-disposition"] + '; filename="' + encodeURIComponent(str.replace(/\//g, "_")) + '"';
              }
              if (typeof tmp2.type === "string") {
                obj["content-type"] = tmp2.type;
              }
              obj2 = { headers: obj, fieldName: tmp };
              const merged = Object.assign(tmp2);
            }
            return obj2;
          }
        }
        obj2 = { string: String(tmp2), headers: obj, fieldName: tmp };
        ({ string: String(tmp2), headers: obj, fieldName: tmp });
      });
    },
  },
];

export default _createClassDefault(FormData, items);
