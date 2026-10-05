// discord_app/modules/quests/native/BountiesBannerBackground.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import common_Video from "../../../components_native/common/Video.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const locations = [0, 0.6];
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"];
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let children;
        let items1;
        let style;
        let tmp4;
        let tmp5;
        let tmp8;
        let uri;
        let useReducedMotion;
        const obj = react2;
        const cResult = obj.c(12);
        ({ children, style, uri } = arg0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          const fn = function c() {
            return useReducedMotion.useReducedMotion;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const tmpResult = get_initialized;
        const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
        if (cResult[2] !== uri) {
          const obj2 = { uri };
          cResult[2] = uri;
          cResult[3] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] === tmp8) {
          let tmp9;
          let tmp11;
          if (cResult[5] === stateFromStores) {
            tmp9 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { colors, locations, style: _false.absoluteFillObject };
            const tmp17 = metroRequire(LinearGradientDefault, obj3);
            cResult[7] = tmp17;
            tmp11 = tmp17;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] === children) {
            if (cResult[9] === style) {
              let tmp18;
              if (cResult[10] === tmp9) {
                tmp18 = cResult[11];
              }
              return tmp18;
            }
          }
          const obj4 = { style, children: items1 };
          items1 = [tmp9, tmp11, children];
          const tmp21 = metroImportDefault(React3, obj4);
          cResult[8] = children;
          cResult[9] = style;
          cResult[10] = tmp9;
          cResult[11] = tmp21;
          tmp18 = tmp21;
        }
        const obj5 = {
          source: tmp8,
          style: _false.absoluteFillObject,
          resizeMode: "cover",
          muted: true,
          disableFocus: true,
          paused: stateFromStores,
          importantForAccessibility: "no-hide-descendants",
        };
        const tmp10 = metroRequire(common_Video.VideoComponent, obj5);
        cResult[4] = tmp8;
        cResult[5] = stateFromStores;
        cResult[6] = tmp10;
        tmp9 = tmp10;
      }
    : (arg0) => {
        let children;
        let items1;
        let style;
        let uri;
        let useReducedMotion;
        ({ children, style, uri } = arg0);
        const items = [AccessibilityStore];
        const obj2 = { style, children: items1 };
        const obj = get_initialized;
        const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
        items1 = [, ,];
        const obj3 = {
          source: { uri },
          style: _false.absoluteFillObject,
          resizeMode: "cover",
          muted: true,
          disableFocus: true,
          paused: stateFromStores,
          importantForAccessibility: "no-hide-descendants",
        };
        items1[0] = metroRequire(common_Video.VideoComponent, obj3);
        const obj4 = { colors, locations, style: _false.absoluteFillObject };
        items1[1] = metroRequire(LinearGradientDefault, obj4);
        items1[2] = children;
        return metroImportDefault(React3, obj2);
      },
);
const result = size.fileFinishedImporting("modules/quests/native/BountiesBannerBackground.tsx");

export default memoResult;
