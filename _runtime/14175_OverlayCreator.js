// _runtime/14175_OverlayCreator.js
import react from "00019_react.js";
import react_native from "00017_react-native.js";
import module_14176_mod from "metro/14176__.js";
import module_14177_mod from "metro/14177__.js";
import Fragment from "react/00021_Fragment.js";

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14176 = module_14176_mod;
if (!module_14176) {
  let obj = { default: module_14176 };
  tmp4 = obj;
} else {
  tmp4 = module_14176;
}
module_14176 = tmp4;
let module_14177 = module_14177_mod;
if (!module_14177) {
  tmp6 = { default: module_14177 };
  const obj2 = { default: module_14177 };
} else {
  tmp6 = module_14177;
}
module_14177 = tmp6;

export default function OverlayCreator() {
  let RN;
  return function overlay() {
    let closure_0 = closure_1.default();
    let obj = {
      onCommand(type) {
        if ("overlay" === type.type) {
          closure_0.emit("overlay", type.payload);
        }
      },
      features: {
        overlay(emitter) {
          return () => {
            let obj = arg0;
            if (arg0 === undefined) {
              obj = {};
            }
            const jsxs = React.jsxs;
            const View = RN.View;
            const jsx = React.jsx;
            const merged = Object.assign(obj);
            const items = [<emitter />];
            items[1] = <module_14177.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        },
      },
    };
    return obj;
  };
}
