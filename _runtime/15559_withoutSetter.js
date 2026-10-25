// _runtime/15559_withoutSetter.js
import _mod15545 from "metro/15545__.js";
import _mod15560 from "metro/15560__.js";
import _mod15564 from "metro/15564__.js";
import _mod15567 from "metro/15567__.js";
import _mod15568 from "metro/15568__.js";
import prop from "metro/15563__.js";

let closure_2 = _mod15560("wks");
let _Symbol = _mod15545.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15545.Symbol;
  const tmp2 = _Symbol.for || _mod15545.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15545.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15567;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15568(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15564) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15568;
    }
    _Symbol = _mod15545.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
