// === Module 15059: ConjureAppChannelSheetHeader ===

// Module 15059 (ConjureAppChannelSheetHeader)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5866 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 13679 */;
import ConjureCreatorBylineDefault from "ConjureCreatorByline" /* 13683 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5243);
let closure_5 = createStyles.createStyles({ details: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/ConjureAppChannelSheetHeader.tsx");

export default function ConjureAppChannelSheetHeader(guildId) {
  ({ application, creator } = guildId);
  const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_12, align: "center", children: null };
  items = [React3(ConjureAppSheetIconDefault, { application }), ];
  const obj2 = { spacing: nativeDefault.space.PX_4, style: closure_5().details, children: null };
  const items1 = [React3(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", lineClamp: 2, children: application.name }), ];
  let tmp5Result = null;
  if (null != creator) {
    const obj4 = { creator, guildId: guildId.guildId };
    tmp5Result = React3(ConjureCreatorBylineDefault, obj4);
  }
  items1[1] = tmp5Result;
  obj2.children = items1;
  items[1] = React4(Stack_Stack.Stack, obj2);
  obj.children = items;
  return React4(Stack_Stack.Stack, obj);
};