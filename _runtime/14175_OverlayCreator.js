// === Module 14175: OverlayCreator ===

// Module 14175 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_14176_mod from "module_14176" /* 14176 */;
import module_14177_mod from "module_14177" /* 14177 */;
import Fragment from "Fragment" /* 21 */;

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
            const items = [<emitter />, ];
            items[1] = <module_14177.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};