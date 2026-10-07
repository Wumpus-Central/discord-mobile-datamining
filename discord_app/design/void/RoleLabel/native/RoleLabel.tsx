// discord_app/design/void/RoleLabel/native/RoleLabel.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import native from "../../native.tsx";
import Form from "../../Form/native/index.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../modules/a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({
  container: { display: "flex", flexDirection: "row" },
  roleDot: { marginRight: 4 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/RoleLabel/native/RoleLabel.tsx");

export const RoleLabel = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(17);
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
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[2] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[2];
      }
      let tmp10 = "username" === stateFromStores;
      if (tmp10) {
        tmp10 = null != color;
      }
      if (!tmp10) {
        if (cResult[5] === color) {
          if (cResult[6] === colors) {
            if (cResult[7] === stateFromStores) {
              if (cResult[8] === tmp4.roleDot) {
                let tmp14 = cResult[9];
              }
              if (cResult[10] === tmp9) {
                if (cResult[11] === name) {
                  let tmp18 = cResult[12];
                }
                if (cResult[13] === tmp4.container) {
                  if (cResult[14] === tmp14) {
                    if (cResult[15] === tmp18) {
                      let tmp21 = cResult[16];
                    }
                    return tmp21;
                  }
                }
                const obj3 = { style: tmp4.container, children: null };
                const items1 = [tmp14, tmp18];
                obj3.children = items1;
                const tmp24 = hasOwnProperty(View, obj3);
                cResult[13] = tmp4.container;
                cResult[14] = tmp14;
                cResult[15] = tmp18;
                cResult[16] = tmp24;
                tmp21 = tmp24;
              }
              const obj4 = { style: tmp9, text: name };
              const tmp20 = React4(Form.FormLabel, obj4);
              cResult[10] = tmp9;
              cResult[11] = name;
              cResult[12] = tmp20;
              tmp18 = tmp20;
            }
          }
        }
        let tmp15 = "dot" === stateFromStores;
        if (tmp15) {
          tmp15 = null != color;
        }
        if (tmp15) {
          const obj5 = { color, colors, containerStyles: tmp4.roleDot };
          tmp15 = React4(native.RoleDot, obj5);
        }
        cResult[5] = color;
        cResult[6] = colors;
        cResult[7] = stateFromStores;
        cResult[8] = tmp4.roleDot;
        cResult[9] = tmp15;
        tmp14 = tmp15;
      } else if (cResult[3] !== color) {
        const obj6 = { color };
        cResult[3] = color;
        cResult[4] = obj6;
      }
      const tmpResult = initialize;
    }
  : (color) => {
      color = color.color;
      ({ name, colors } = color);
      const tmp = closure_6();
      const items = [AccessibilityStore];
      const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
      let tmp5 = "username" === stateFromStores;
      if (tmp5) {
        tmp5 = null != color;
      }
      if (tmp5) {
        const obj2 = { color };
      }
      const obj3 = { style: tmp.container, children: null };
      let tmp10 = "dot" === stateFromStores;
      if (tmp10) {
        tmp10 = null != color;
      }
      if (tmp10) {
        const obj4 = { color, colors, containerStyles: tmp.roleDot };
        tmp10 = React4(native.RoleDot, obj4);
      }
      const items1 = [tmp10, React4(Form.FormLabel, { style: {}, text: name })];
      obj3.children = items1;
      return hasOwnProperty(View, obj3);
    };
