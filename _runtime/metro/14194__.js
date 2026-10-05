// _runtime/metro/14194__.js
import react from "../00019_react.js";
import module_14176_mod from "14176__.js";
import module_14195_mod from "14195__.js";
import Fragment from "../react/00021_Fragment.js";

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14176 = module_14176_mod;
if (!module_14176) {
  const obj = { default: module_14176 };
  tmp4 = obj;
} else {
  tmp4 = module_14176;
}
module_14176 = tmp4;
let module_14195 = module_14195_mod;
if (!module_14195) {
  let obj2 = { default: module_14195 };
  tmp6 = obj2;
} else {
  tmp6 = module_14195;
}
module_14195 = tmp6;

export default () => () => {
  closure_0 = closure_0.default();
  return {
    onCommand(type) {
      if ("storybook" === type.type) {
        closure_0.emit("storybook", type.payload);
      }
    },
    features: {
      storybookSwitcher(arg0) {
        closure_0 = arg0;
        return (arg0) => {
          closure_0 = arg0;
          return function StorybookSwitcherContainer(arg0) {
            const jsx = React.jsx;
            const jsx2 = React.jsx;
            const obj2 = {};
            const merged = Object.assign(arg0);
            return (
              <_default storybookUi={emitter} emitter={emitter}>
                {jsx2(emitter, obj2)}
              </_default>
            );
          };
        };
      },
    },
  };
};
