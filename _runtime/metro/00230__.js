// _runtime/metro/00230__.js
import _mod231 from "00231__.js";

if (!global.alert) {
  global.alert = (arg0) => {
    const _default = _mod231.default;
    _default.alert("Alert", "" + arg0);
  };
}
