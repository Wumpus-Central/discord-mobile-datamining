// discord_app/modules/conjure/debug/native/ConjureHistoryState.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3827 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let obj2 = { placeholder: { alignItems: "center", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_24 } };
let closure_6 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { alignItems: "center", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_24 };
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureHistoryPlaceholder(state) {
      const cResult = c.c(15);
      ({ emptyTitle, emptyBody } = state);
      const tmp4 = closure_6();
      if (cResult[0] === emptyTitle) {
        if (cResult[1] === tmp5) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== tmp6) {
          const obj2 = { variant: "text-sm/medium", color: "text-default", children: tmp6 };
          const tmp11 = React4(Text_Text.Text, obj2);
          cResult[3] = tmp6;
          cResult[4] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] === emptyBody) {
          if (cResult[6] === tmp5) {
            let tmp12 = cResult[7];
          }
          if (cResult[8] !== tmp12) {
            const obj3 = { variant: "text-xs/normal", color: "text-muted", children: tmp12 };
            const tmp17 = React4(Text_Text.Text, obj3);
            cResult[8] = tmp12;
            cResult[9] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[9];
          }
          if (cResult[10] === tmp4.placeholder) {
            if (cResult[11] === str) {
              if (cResult[12] === tmp9) {
                if (cResult[13] === tmp15) {
                  let tmp18 = cResult[14];
                }
                return tmp18;
              }
            }
          }
          const obj4 = { style: tmp4.placeholder, accessibilityRole: str, children: null };
          const items = [tmp9, tmp15];
          obj4.children = items;
          const tmp21 = hasOwnProperty(View, obj4);
          cResult[10] = tmp4.placeholder;
          cResult[11] = str;
          cResult[12] = tmp9;
          cResult[13] = tmp15;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
        let stringResult = emptyBody;
        if (tmp5) {
          const intl2 = util.intl;
          stringResult = intl2.string(_modDef3827["8SErdg"]);
        }
        cResult[5] = emptyBody;
        cResult[6] = tmp5;
        cResult[7] = stringResult;
        tmp12 = stringResult;
      }
      let stringResult1 = emptyTitle;
      if ("failed" === state.state.status) {
        const intl = util.intl;
        stringResult1 = intl.string(_modDef3827.h1SE6R);
      }
      cResult[0] = emptyTitle;
      cResult[1] = "failed" === state.state.status;
      cResult[2] = stringResult1;
      tmp6 = stringResult1;
    }
  : function ConjureHistoryPlaceholder(state) {
      ({ emptyTitle, emptyBody } = state);
      const obj = { style: closure_6().placeholder, accessibilityRole: null, children: null };
      let str;
      if ("failed" === state.state.status) {
        str = "alert";
      }
      obj.accessibilityRole = str;
      if ("failed" === state.state.status) {
        const intl = util.intl;
        emptyTitle = intl.string(_modDef3827.h1SE6R);
      }
      const items = [
        React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: emptyTitle }),
      ];
      if ("failed" === state.state.status) {
        const intl2 = util.intl;
        emptyBody = intl2.string(_modDef3827["8SErdg"]);
      }
      items[1] = React4(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: emptyBody });
      obj.children = items;
      return hasOwnProperty(View, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureHistoryState.tsx");

export const ConjureHistoryPlaceholder = tmp4;
export const ConjureHistoryNotice = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureHistoryNotice(state) {
      let intl = require;
      let stringResult = dependencyMap;
      const cResult = c.c(2);
      state = state.state;
      if (!state.hasRows) {
        return null;
      } else {
        if ("failed" !== state.status) {
          if (state.truncated) {
            const _Symbol = Symbol;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { variant: "text-xs/normal", color: "text-muted", children: null };
              const intl2 = util.intl;
              obj2.children = intl2.string(_modDef3827.V7Ri8H);
              const tmp7 = React4(Text_Text.Text, obj2);
              cResult[1] = tmp7;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
          intl = util.intl;
          stringResult = intl.string(_modDef3827.h1SE6R);
          obj3.children = stringResult;
          const tmp13 = React4(Text_Text.Text, obj3);
          cResult[0] = tmp13;
          let first = tmp13;
        } else {
          first = cResult[0];
        }
      }
    }
  : function ConjureHistoryNotice(state) {
      state = state.state;
      if (!state.hasRows) {
        return null;
      } else if ("failed" === state.status) {
        const obj2 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
        const intl2 = util.intl;
        obj2.children = intl2.string(_modDef3827.h1SE6R);
        let tmp = React4(Text_Text.Text, obj2);
      } else if (state.truncated) {
        const obj = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl = util.intl;
        obj.children = intl.string(_modDef3827.V7Ri8H);
        tmp = React4(Text_Text.Text, obj);
      }
    };
