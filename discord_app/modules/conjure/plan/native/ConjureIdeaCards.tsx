// discord_app/modules/conjure/plan/native/ConjureIdeaCards.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3862 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5151);
let obj2 = { ideaCards: { gap: fn(12067).BLOCK_GAP } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { gap: fn(12067).BLOCK_GAP };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjureIdeaCards.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureIdeaCards(arg0) {
      const cResult = onPick(576).c(9);
      ({ ideas, onPick } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        let intl = onPick(1126).intl;
        obj2.children = intl.string(_modDef3862["wx/o8Y"]);
        const tmp8 = closure_4(onPick(5147).Text, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === ideas) {
        if (cResult[2] === onPick) {
          if (cResult[6] === tmp4.ideaCards) {
            if (cResult[7] === tmp9) {
              let tmp12 = cResult[8];
            }
            return tmp12;
          }
          const obj3 = { style: tmp4.ideaCards, children: null };
          let items = [first, cResult[3]];
          obj3.children = items;
          const tmp15 = closure_5(View, obj3);
          cResult[6] = tmp4.ideaCards;
          cResult[7] = cResult[3];
          cResult[8] = tmp15;
          tmp12 = tmp15;
        }
      }
      if (cResult[4] !== onPick) {
        const fn = function x(title) {
          closure_0 = title;
          const obj = {
            onPress() {
              return onPick(closure_0);
            },
            accessibilityLabel: null,
            children: null,
          };
          const intl = onPick(1126).intl;
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3862.H8G39M, { title: title.title });
          const items = [
            closure_1_4(onPick(5147).Text, {
              variant: "text-md/semibold",
              color: "text-default",
              children: title.title,
            }),
          ];
          let tmpResult = null;
          if ("" !== title.value) {
            const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
            tmpResult = closure_1_4(onPick(5147).Text, obj4);
          }
          items[1] = tmpResult;
          obj.children = closure_1_5(onPick(5437).Stack, { direction: "vertical", spacing: 4, children: items });
          return closure_1_4(onPick(6402).Card, obj, title.id);
        };
        cResult[4] = onPick;
        cResult[5] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[5];
      }
      const mapped = ideas.map(tmp10);
      cResult[1] = ideas;
      cResult[2] = onPick;
      cResult[3] = mapped;
      let obj = onPick(576);
    }
  : function ConjureIdeaCards(arg0) {
      ({ ideas, onPick: require } = arg0);
      let obj = { style: closure_6().ideaCards, children: null };
      const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      let intl = util.intl;
      obj2.children = intl.string(_modDef3862["wx/o8Y"]);
      let items = [
        closure_4(Text_Text.Text, obj2),
        ideas.map((title) => {
          closure_0 = title;
          const obj = {
            onPress() {
              return require(closure_0);
            },
            accessibilityLabel: null,
            children: null,
          };
          const intl = util.intl;
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3862.H8G39M, { title: title.title });
          const items = [
            closure_1_4(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: title.title }),
          ];
          let tmpResult = null;
          if ("" !== title.value) {
            const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
            tmpResult = closure_1_4(Text_Text.Text, obj4);
          }
          items[1] = tmpResult;
          obj.children = closure_1_5(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items });
          return closure_1_4(Card.Card, obj, title.id);
        }),
      ];
      obj.children = items;
      return closure_5(View, obj);
    };
