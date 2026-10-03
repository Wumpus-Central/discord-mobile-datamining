// discord_app/modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { flex: 0, alignSelf: "stretch", marginBottom: 8 },
  title: { lineHeight: 16, marginBottom: 8 },
  breadCrumbItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 8,
    marginEnd: 32,
    overflow: "visible",
  },
  breadCrumbDot: null,
  breadCrumbBar: null,
  breadCrumbText: null,
};
let size = {
  marginStart: 2,
  marginTop: 8,
  width: 4,
  height: 4,
  borderRadius: 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.breadCrumbDot = size;
const rect = {
  position: "absolute",
  width: 2,
  top: 10,
  bottom: -12,
  left: 3,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.breadCrumbBar = rect;
obj2.breadCrumbText = { marginStart: 8, lineHeight: 20 };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (reasons) => {
      const cResult = require("c").c(18);
      breadCrumbText = reasons.reasons;
      const tmp4 = closure_5();
      _require = tmp4;
      if (0 === breadCrumbText.length) {
        return null;
      } else {
        const _Symbol = Symbol;
        ({ container, title } = tmp4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.eQg0Ck);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.title) {
          const obj2 = { style: title, accessibilityRole: "header", variant: "text-xs/bold", children: first };
          const tmp9 = closure_3(tmp(4886).Text, obj2);
          cResult[1] = tmp4.title;
          cResult[2] = tmp9;
          let tmp7 = tmp9;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] === breadCrumbText) {
          if (cResult[4] === tmp4.breadCrumbBar) {
            if (cResult[5] === tmp4.breadCrumbDot) {
              if (cResult[6] === tmp4.breadCrumbItemContainer) {
                if (cResult[7] === tmp4.breadCrumbText) {
                  if (cResult[14] === tmp4.container) {
                    if (cResult[15] === tmp7) {
                      if (cResult[16] === tmp10) {
                        let tmp14 = cResult[17];
                      }
                      return tmp14;
                    }
                  }
                  const obj3 = { style: container, children: null };
                  let items = [tmp7, cResult[8]];
                  obj3.children = items;
                  const tmp17 = closure_4(View, obj3);
                  cResult[14] = tmp4.container;
                  cResult[15] = tmp7;
                  cResult[16] = cResult[8];
                  cResult[17] = tmp17;
                  tmp14 = tmp17;
                }
              }
            }
          }
        }
        if (cResult[9] === tmp4.breadCrumbBar) {
          if (cResult[10] === tmp4.breadCrumbDot) {
            if (cResult[11] === tmp4.breadCrumbItemContainer) {
              if (cResult[12] === tmp4.breadCrumbText) {
                let tmp11 = cResult[13];
              }
              const mapped = breadCrumbText.map(tmp11);
              cResult[3] = breadCrumbText;
              cResult[4] = tmp4.breadCrumbBar;
              cResult[5] = tmp4.breadCrumbDot;
              ({ breadCrumbItemContainer: tmp3[6], breadCrumbText } = tmp4);
              cResult[7] = breadCrumbText;
              cResult[8] = mapped;
            }
          }
        }
        const fn = function y(children, arg1) {
          const obj = { style: closure_0.breadCrumbItemContainer, children: null };
          const items = [
            React3(View, { style: closure_0.breadCrumbBar }),
            React3(View, { style: closure_0.breadCrumbDot }),
            React3(Text_Text.Text, {
              lineClamp: 2,
              ellipsizeMode: "tail",
              style: closure_0.breadCrumbText,
              variant: "text-md/medium",
              children,
            }),
          ];
          obj.children = items;
          return React4(View, obj, "" + children + "+" + arg1);
        };
        cResult[9] = tmp4.breadCrumbBar;
        cResult[10] = tmp4.breadCrumbDot;
        cResult[11] = tmp4.breadCrumbItemContainer;
        cResult[12] = tmp4.breadCrumbText;
        cResult[13] = fn;
        tmp11 = fn;
      }
      let obj = require("c");
    }
  : (reasons) => {
      reasons = reasons.reasons;
      const tmp = closure_5();
      _require = tmp;
      let tmp2 = null;
      if (0 !== reasons.length) {
        let obj = { style: tmp.container, children: null };
        const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
        const intl = require("util").intl;
        obj2.children = intl.string(require("util").t.eQg0Ck);
        let items = [
          closure_3(require("Text/Text").Text, obj2),
          reasons.map((children, index) => {
            const obj = { style: closure_0.breadCrumbItemContainer, children: null };
            const items = [
              React3(View, { style: closure_0.breadCrumbBar }),
              React3(View, { style: closure_0.breadCrumbDot }),
              React3(Text_Text.Text, {
                lineClamp: 2,
                ellipsizeMode: "tail",
                style: closure_0.breadCrumbText,
                variant: "text-md/medium",
                children,
              }),
            ];
            obj.children = items;
            return React4(View, obj, "" + children + "+" + index);
          }),
        ];
        obj.children = items;
        tmp2 = closure_4(View, obj);
      }
      return tmp2;
    };
