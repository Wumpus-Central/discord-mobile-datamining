// discord_app/modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, reasons;

let c3;
let closure_4;
let rect;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { flex: 0, alignSelf: "stretch", marginBottom: 8 },
  title: { lineHeight: 16, marginBottom: 8 },
  breadCrumbItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 8,
    marginEnd: 32,
    overflow: "visible",
  },
  breadCrumbDot: size,
  breadCrumbBar: rect,
  breadCrumbText: { marginStart: 8, lineHeight: 20 },
};
size = {
  marginStart: 2,
  marginTop: 8,
  width: 4,
  height: 4,
  borderRadius: 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
createStyles = createStyles.createStyles;
rect = {
  position: "absolute",
  width: 2,
  top: 10,
  bottom: -12,
  left: 3,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let closure_5 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (reasons) => {
      let closure_0;
      let container;
      let items;
      let title;
      let obj = require("react");
      const cResult = obj.c(18);
      reasons = reasons.reasons;
      const tmp4 = closure_5();
      _require = tmp4;
      if (0 === reasons.length) {
        return null;
      } else {
        let first;
        let tmp7;
        let tmp10;
        const _Symbol = Symbol;
        ({ container, title } = tmp4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(require("intl").t.eQg0Ck);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.title) {
          let obj2 = { style: title, accessibilityRole: "header", variant: "text-xs/bold", children: first };
          const tmp9 = closure_3(require("Text/Text").Text, obj2);
          cResult[1] = tmp4.title;
          cResult[2] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] === reasons) {
          if (cResult[4] === tmp4.breadCrumbBar) {
            if (cResult[5] === tmp4.breadCrumbDot) {
              if (cResult[6] === tmp4.breadCrumbItemContainer) {
                if (cResult[7] === tmp4.breadCrumbText) {
                  tmp10 = cResult[8];
                }
                if (cResult[14] === tmp4.container) {
                  if (cResult[15] === tmp7) {
                    let tmp13;
                    if (cResult[16] === tmp10) {
                      tmp13 = cResult[17];
                    }
                    return tmp13;
                  }
                }
                let obj3 = { style: container, children: items };
                items = [tmp7, tmp10];
                const tmp16 = closure_4(View, obj3);
                cResult[14] = tmp4.container;
                cResult[15] = tmp7;
                cResult[16] = tmp10;
                cResult[17] = tmp16;
                tmp13 = tmp16;
              }
            }
          }
        }
        if (cResult[9] === tmp4.breadCrumbBar) {
          if (cResult[10] === tmp4.breadCrumbDot) {
            if (cResult[11] === tmp4.breadCrumbItemContainer) {
              let tmp11;
              if (cResult[12] === tmp4.breadCrumbText) {
                tmp11 = cResult[13];
              }
              const mapped = reasons.map(tmp11);
              cResult[3] = reasons;
              cResult[4] = tmp4.breadCrumbBar;
              cResult[5] = tmp4.breadCrumbDot;
              cResult[6] = tmp4.breadCrumbItemContainer;
              cResult[7] = tmp4.breadCrumbText;
              cResult[8] = mapped;
              tmp10 = mapped;
            }
          }
        }
        const fn = function y(children, arg1) {
          let items;
          const obj = { style: closure_0.breadCrumbItemContainer, children: items };
          items = [, ,];
          const obj2 = { style: closure_0.breadCrumbBar };
          items[0] = _false(View, obj2);
          const obj3 = { style: closure_0.breadCrumbDot };
          items[1] = _false(View, obj3);
          const obj4 = {
            lineClamp: 2,
            ellipsizeMode: "tail",
            style: closure_0.breadCrumbText,
            variant: "text-md/medium",
            children,
          };
          items[2] = _false(Text_Text.Text, obj4);
          return React3(View, obj, "" + children + "+" + arg1);
        };
        cResult[9] = tmp4.breadCrumbBar;
        cResult[10] = tmp4.breadCrumbDot;
        cResult[11] = tmp4.breadCrumbItemContainer;
        cResult[12] = tmp4.breadCrumbText;
        cResult[13] = fn;
        tmp11 = fn;
      }
    }
  : (reasons) => {
      let closure_0;
      let intl;
      let items;
      reasons = reasons.reasons;
      const tmp = closure_5();
      _require = tmp;
      let tmp2 = null;
      if (0 !== reasons.length) {
        let obj = { style: tmp.container, children: items };
        let obj2 = {
          style: tmp.title,
          accessibilityRole: "header",
          variant: "text-xs/bold",
          children: intl.string(require("intl").t.eQg0Ck),
        };
        const Text = require("Text/Text").Text;
        intl = require("intl").intl;
        items = [
          closure_3(Text, obj2),
          reasons.map((children, index) => {
            let items;
            const obj = { style: closure_0.breadCrumbItemContainer, children: items };
            items = [, ,];
            const obj2 = { style: closure_0.breadCrumbBar };
            items[0] = _false(View, obj2);
            const obj3 = { style: closure_0.breadCrumbDot };
            items[1] = _false(View, obj3);
            const obj4 = {
              lineClamp: 2,
              ellipsizeMode: "tail",
              style: closure_0.breadCrumbText,
              variant: "text-md/medium",
              children,
            };
            items[2] = _false(Text_Text.Text, obj4);
            return React3(View, obj, "" + children + "+" + index);
          }),
        ];
        tmp2 = closure_4(View, obj);
      }
      return tmp2;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default tmp5;
