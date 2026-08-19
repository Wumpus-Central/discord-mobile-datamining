// _runtime/13687_withoutSetter.js
import _mod13673 from "metro/13673__.js";
import prop2 from "13688_prop.js";
import prop3 from "13692_prop.js";
import sum from "13695_sum.js";
import call from "13696_call.js";
import prop from "13691_prop.js";

let closure_2 = prop2("wks");
let _Symbol = _mod13673.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13673.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13673.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (call(table, arg0)) {
    return table[arg0];
  } else {
    if (!prop3) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      table[arg0] = tmp5;
    } else {
      call;
    }
    _Symbol = _mod13673.Symbol;
    tmp5 = _Symbol[arg0];
  }
};