// discord_app/modules/conjure/plan/native/ConjureIdeaCards.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef4026 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5140);
let obj2 = { ideaCards: { gap: fn(12836).BLOCK_GAP } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjureIdeaCards.tsx");

export default function ConjureIdeaCards(arg0) {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_6().ideaCards, children: null };
  const obj2 = { variant: "body-sm/semibold", color: "text-muted", children: null };
  let intl = util.intl;
  obj2.children = intl.string(_modDef4026["wx/o8Y"]);
  items = [
    closure_4(Text_Text.Text, obj2),
    ideas.map((title) => {
      closure_0 = title;
      const obj = {
        onPress() {
          let tmpResult;
          if (require != null) {
            tmpResult = tmp(closure_0);
          }
          return tmpResult;
        },
        disabled: null == closure_0,
        accessibilityLabel: null,
        children: null,
      };
      let tmpResult = null;
      const intl = util.intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef4026.H8G39M, { title: title.title });
      items = [
        closure_1_4(Text_Text.Text, { variant: "body-md/semibold", color: "text-default", children: title.title }),
      ];
      if ("" !== title.value) {
        const obj4 = { variant: "body-sm/normal", color: "text-muted", children: title.value };
        tmpResult = closure_1_4(Text_Text.Text, obj4);
      }
      items[1] = tmpResult;
      obj.children = closure_1_5(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_4(Card.Card, obj, title.id);
    }),
  ];
  obj.children = items;
  return closure_5(View, obj);
}
