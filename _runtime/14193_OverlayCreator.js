// === Module 14193: OverlayCreator ===

// Module 14193 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_14194_mod from "module_14194" /* 14194 */;
import module_14195_mod from "module_14195" /* 14195 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14194 = module_14194_mod;
if (!module_14194) {
  let obj = { default: module_14194 };
  tmp4 = obj;
} else {
  tmp4 = module_14194;
}
module_14194 = tmp4;
let module_14195 = module_14195_mod;
if (!module_14195) {
  tmp6 = { default: module_14195 };
  const obj2 = { default: module_14195 };
} else {
  tmp6 = module_14195;
}
module_14195 = tmp6;

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
            const items = [<emitter />, ];
            items[1] = <module_14195.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};