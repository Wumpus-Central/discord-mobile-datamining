// discord_app/modules/media_viewer/native/components/MediaModalLoadingOverlay.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: c3, ActivityIndicator: closure_4, StyleSheet } = react_native);
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { loader: obj2, loaderIndicator: obj3, loaderText: { textAlign: "center" } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.7)" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let intl;
        let items;
        let items1;
        let progress;
        let status;
        let style;
        const obj = react2;
        const cResult = obj.c(11);
        ({ style, status, progress } = arg0);
        const tmp4 = closure_7();
        if (cResult[0] === style) {
          let tmp5;
          let tmp17Result2;
          if (cResult[1] === tmp4.loader) {
            tmp5 = cResult[2];
          }
          if (cResult[3] === progress) {
            if (cResult[4] === status) {
              if (cResult[5] === tmp4.loaderIndicator) {
                let tmp6;
                if (cResult[6] === tmp4.loaderText) {
                  tmp6 = cResult[7];
                }
                if (cResult[8] === tmp5) {
                  let tmp13;
                  if (cResult[9] === tmp6) {
                    tmp13 = cResult[10];
                  }
                  return tmp13;
                }
                const obj2 = { style: tmp5, children: tmp6 };
                const tmp16 = hasOwnProperty(_false, obj2);
                cResult[8] = tmp5;
                cResult[9] = tmp6;
                cResult[10] = tmp16;
                tmp13 = tmp16;
              }
            }
          }
          if ("error" === status) {
            const obj3 = {
              style: tmp4.loaderText,
              variant: "heading-md/semibold",
              color: "text-overlay-light",
              children: intl.string(intl2.t["+ITMYX"]),
            };
            const Text2 = Text_Text.Text;
            intl = intl2.intl;
            tmp17Result2 = hasOwnProperty(Text2, obj3);
          } else {
            let tmp17Result = null;
            const Fragment = react.Fragment;
            if (null != progress) {
              const _Math = Math;
              const obj4 = {
                style: tmp4.loaderText,
                variant: "heading-md/semibold",
                color: "text-overlay-light",
                children: items,
              };
              const Text = Text_Text.Text;
              items = [Math.round(progress), "%"];
              tmp17Result = metroRequire(Text, obj4);
            }
            const obj5 = { children: items1 };
            items1 = [tmp17Result];
            const obj6 = { color: "white", style: tmp4.loaderIndicator, size: "large" };
            items1[1] = hasOwnProperty(React3, obj6);
            tmp17Result2 = metroRequire(Fragment, obj5);
          }
          cResult[3] = progress;
          cResult[4] = status;
          cResult[5] = tmp4.loaderIndicator;
          cResult[6] = tmp4.loaderText;
          cResult[7] = tmp17Result2;
          tmp6 = tmp17Result2;
        }
        const items2 = [tmp4.loader, style];
        cResult[0] = style;
        cResult[1] = tmp4.loader;
        cResult[2] = items2;
        tmp5 = items2;
      }
    : (progress) => {
        let intl;
        let items;
        let items1;
        let items2;
        let status;
        let style;
        let tmp12Result1;
        progress = progress.progress;
        ({ style, status } = progress);
        const tmp = closure_7();
        const obj = { style: items, children: tmp12Result1 };
        items = [tmp.loader, style];
        if ("error" === status) {
          const obj2 = {
            style: tmp.loaderText,
            variant: "heading-md/semibold",
            color: "text-overlay-light",
            children: intl.string(intl2.t["+ITMYX"]),
          };
          const Text2 = Text_Text.Text;
          intl = intl2.intl;
          tmp12Result1 = hasOwnProperty(Text2, obj2);
        } else {
          let tmp12Result = null;
          const Fragment = react.Fragment;
          if (null != progress) {
            const _Math = Math;
            const obj3 = {
              style: tmp.loaderText,
              variant: "heading-md/semibold",
              color: "text-overlay-light",
              children: items1,
            };
            const Text = Text_Text.Text;
            items1 = [Math.round(progress), "%"];
            tmp12Result = metroRequire(Text, obj3);
          }
          const obj4 = { children: items2 };
          items2 = [tmp12Result];
          const obj5 = { color: "white", style: tmp.loaderIndicator, size: "large" };
          items2[1] = hasOwnProperty(React3, obj5);
          tmp12Result1 = metroRequire(Fragment, obj4);
        }
        return hasOwnProperty(_false, obj);
      },
);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoadingOverlay.tsx");

export default memoResult;
