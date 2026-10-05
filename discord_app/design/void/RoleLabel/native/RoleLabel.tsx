// discord_app/design/void/RoleLabel/native/RoleLabel.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import native from "../../native.tsx";
import Form from "../../Form/native/index.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../../modules/a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({
  container: { display: "flex", flexDirection: "row" },
  roleDot: { marginRight: 4 },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let color;
      let colors;
      let items1;
      let name;
      let roleStyle;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(17);
      ({ name, color, colors } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function y() {
          return roleStyle.roleStyle;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[2] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[2];
      }
      const tmp10 = "username" === stateFromStores && null != color;
      if (tmp10) {
        let tmp12;
        if (cResult[3] !== color) {
          const obj3 = { color };
          cResult[3] = color;
          cResult[4] = obj3;
          tmp12 = obj3;
        } else {
          tmp12 = cResult[4];
        }
        tmp9 = tmp12;
      }
      if (cResult[5] === color) {
        if (cResult[6] === colors) {
          if (cResult[7] === stateFromStores) {
            let tmp13;
            if (cResult[8] === tmp4.roleDot) {
              tmp13 = cResult[9];
            }
            if (cResult[10] === tmp9) {
              let tmp17;
              if (cResult[11] === name) {
                tmp17 = cResult[12];
              }
              if (cResult[13] === tmp4.container) {
                if (cResult[14] === tmp13) {
                  let tmp20;
                  if (cResult[15] === tmp17) {
                    tmp20 = cResult[16];
                  }
                  return tmp20;
                }
              }
              const obj4 = { style: tmp4.container, children: items1 };
              items1 = [tmp13, tmp17];
              const tmp23 = hasOwnProperty(View, obj4);
              cResult[13] = tmp4.container;
              cResult[14] = tmp13;
              cResult[15] = tmp17;
              cResult[16] = tmp23;
              tmp20 = tmp23;
            }
            const obj5 = { style: tmp9, text: name };
            const tmp19 = React3(Form.FormLabel, obj5);
            cResult[10] = tmp9;
            cResult[11] = name;
            cResult[12] = tmp19;
            tmp17 = tmp19;
          }
        }
      }
      let tmp14 = "dot" === stateFromStores && null != color;
      if (tmp14) {
        const obj6 = { color, colors, containerStyles: tmp4.roleDot };
        tmp14 = React3(native.RoleDot, obj6);
      }
      cResult[5] = color;
      cResult[6] = colors;
      cResult[7] = stateFromStores;
      cResult[8] = tmp4.roleDot;
      cResult[9] = tmp14;
      tmp13 = tmp14;
    }
  : (color) => {
      let colors;
      let items1;
      let name;
      let roleStyle;
      color = color.color;
      ({ name, colors } = color);
      const tmp = closure_6();
      const items = [AccessibilityStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
      const tmp5 = "username" === stateFromStores && null != color;
      let tmp10 = "dot" === stateFromStores && null != color;
      const obj3 = { style: tmp.container, children: items1 };
      if (tmp10) {
        const obj4 = { color, colors, containerStyles: tmp.roleDot };
        tmp10 = React3(native.RoleDot, obj4);
      }
      items1 = [tmp10, React3(Form.FormLabel, { style: {}, text: name })];
      return hasOwnProperty(View, obj3);
    };
const result = size.fileFinishedImporting("design/void/RoleLabel/native/RoleLabel.tsx");

export const RoleLabel = tmp4;
