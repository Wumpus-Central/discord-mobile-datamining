// discord_app/modules/conjure/debug/native/ConjureHistoryState.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import _modDef3753 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let state;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { placeholder: obj2 };
obj2 = { alignItems: "center", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_24 };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      let emptyBody;
      let emptyTitle;
      let items;
      const obj = react2;
      const cResult = obj.c(15);
      ({ emptyTitle, emptyBody } = state);
      state = state.state;
      const tmp4 = closure_6();
      if (cResult[0] === emptyTitle) {
        let tmp6;
        let tmp9;
        if ((cResult[1] === "failed") === state.status) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== tmp6) {
          const obj2 = { variant: "text-sm/medium", color: "text-default", children: tmp6 };
          const tmp11 = React3(Text_Text.Text, obj2);
          cResult[3] = tmp6;
          cResult[4] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] === emptyBody) {
          let tmp12;
          let tmp15;
          if ((cResult[6] === "failed") === state.status) {
            tmp12 = cResult[7];
          }
          if (cResult[8] !== tmp12) {
            const obj3 = { variant: "text-xs/normal", color: "text-muted", children: tmp12 };
            const tmp17 = React3(Text_Text.Text, obj3);
            cResult[8] = tmp12;
            cResult[9] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[9];
          }
          if (cResult[10] === tmp4.placeholder) {
            if (cResult[11] === str) {
              if (cResult[12] === tmp9) {
                let tmp18;
                if (cResult[13] === tmp15) {
                  tmp18 = cResult[14];
                }
                return tmp18;
              }
            }
          }
          const obj4 = { style: tmp4.placeholder, accessibilityRole: str, children: items };
          items = [tmp9, tmp15];
          const tmp21 = hasOwnProperty(View, obj4);
          cResult[10] = tmp4.placeholder;
          cResult[11] = str;
          cResult[12] = tmp9;
          cResult[13] = tmp15;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
        let stringResult = emptyBody;
        if ("failed" === state.status) {
          const intl2 = intl3.intl;
          stringResult = intl2.string(_modDef3753["8SErdg"]);
        }
        cResult[5] = emptyBody;
        cResult[6] = "failed" === state.status;
        cResult[7] = stringResult;
        tmp12 = stringResult;
      }
      let stringResult1 = emptyTitle;
      if ("failed" === state.status) {
        const intl = intl3.intl;
        stringResult1 = intl.string(_modDef3753.h1SE6R);
      }
      cResult[0] = emptyTitle;
      cResult[1] = "failed" === state.status;
      cResult[2] = stringResult1;
      tmp6 = stringResult1;
    }
  : (state) => {
      let emptyBody;
      let emptyTitle;
      let items;
      let str;
      ({ emptyTitle, emptyBody } = state);
      const obj = { style: closure_6().placeholder, accessibilityRole: str, children: items };
      str = undefined;
      if ("failed" === state.state.status) {
        str = "alert";
      }
      const Text = Text_Text.Text;
      if ("failed" === state.state.status) {
        const intl = intl3.intl;
        emptyTitle = intl.string(_modDef3753.h1SE6R);
      }
      items = [React3(Text, { variant: "text-sm/medium", color: "text-default", children: emptyTitle })];
      const Text2 = Text_Text.Text;
      if ("failed" === state.state.status) {
        const intl2 = intl3.intl;
        emptyBody = intl2.string(_modDef3753["8SErdg"]);
      }
      items[1] = React3(Text2, { variant: "text-xs/normal", color: "text-muted", children: emptyBody });
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      let intl;
      let intl2;
      const obj = react2;
      const cResult = obj.c(2);
      state = state.state;
      let tmp4 = null;
      if (state.hasRows) {
        let tmp10;
        if ("failed" === state.status) {
          let first;
          const _Symbol2 = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = {
              variant: "text-xs/normal",
              color: "text-feedback-critical",
              children: intl2.string(_modDef3753.h1SE6R),
            };
            const Text2 = Text_Text.Text;
            intl2 = intl3.intl;
            const tmp15 = React3(Text2, obj2);
            cResult[0] = tmp15;
            first = tmp15;
          } else {
            first = cResult[0];
          }
          tmp10 = first;
        } else {
          tmp10 = null;
          if (state.truncated) {
            let tmp6;
            const _Symbol = Symbol;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = {
                variant: "text-xs/normal",
                color: "text-muted",
                children: intl.string(_modDef3753.V7Ri8H),
              };
              const Text = Text_Text.Text;
              intl = intl3.intl;
              const tmp9 = React3(Text, obj3);
              cResult[1] = tmp9;
              tmp6 = tmp9;
            } else {
              tmp6 = cResult[1];
            }
            tmp10 = tmp6;
          }
        }
        tmp4 = tmp10;
      }
      return tmp4;
    }
  : (state) => {
      let intl;
      let intl2;
      state = state.state;
      let tmp = null;
      if (state.hasRows) {
        let tmp2;
        if ("failed" === state.status) {
          const obj2 = {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            children: intl2.string(_modDef3753.h1SE6R),
          };
          const Text2 = Text_Text.Text;
          intl2 = intl3.intl;
          tmp2 = React3(Text2, obj2);
        } else {
          tmp2 = null;
          if (state.truncated) {
            const obj = { variant: "text-xs/normal", color: "text-muted", children: intl.string(_modDef3753.V7Ri8H) };
            const Text = Text_Text.Text;
            intl = intl3.intl;
            tmp2 = React3(Text, obj);
          }
        }
        tmp = tmp2;
      }
      return tmp;
    };
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureHistoryState.tsx");

export const ConjureHistoryPlaceholder = tmp4;
export const ConjureHistoryNotice = tmp5;
