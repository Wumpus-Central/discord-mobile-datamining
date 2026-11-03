// _runtime/metro/01785__.js
import _createClassDefault from "00042__createClass.js";
import _classCallCheck_mod from "00041__classCallCheck.js";

let _classCallCheck = _classCallCheck_mod;
class CSSCallbackStore {
  constructor(arg0) {
    tmp = closure_0(this, CSSCallbackStore);
    this.callbacks = {};
    set = new Set();
    this.present = set;
    this.props = global;
    return;
  }
}
_classCallCheck = CSSCallbackStore;
const entry = {
  key: "sync",
  value: function sync(callbacks) {
    const self = this;
    this.callbacks = callbacks;
    let flag = false;
    for (const item10011 of tmp) {
      let tmp3 = arg0[item10011];
      let tmp4 = typeof tmp3 === "function";
      if (typeof tmp3 === "function") {
        let present4 = self.present;
        if (!present4.has(item10011)) {
          let present = self.present;
          let addResult = present.add(item10011);
          flag = true;
        }
        continue;
      }
      let hasItem = !tmp4;
      if (!tmp4) {
        let present2 = self.present;
        hasItem = present2.has(item10011);
      }
      if (hasItem) {
        let present3 = self.present;
        let deleteResult = present3.delete(item10011);
        flag = true;
      }
    }
    if (flag) {
      self.onPresenceChanged(self.present);
    }
  },
};
const items = [
  entry,
  {
    key: "detach",
    value: function detach() {
      this.sync({});
    },
  },
  {
    key: "invoke",
    value: function invoke(arg0, arg1) {
      const callbacks = this.callbacks;
      if (callbacks[arg0] != null) {
        tmp(arg1);
      }
    },
  },
];

export default _createClassDefault(CSSCallbackStore, items);
