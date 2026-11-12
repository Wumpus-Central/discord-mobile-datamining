// discord_app/modules/conjure/app_hover_card/native/ConjureAppChannelSheetHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon.tsx";
import ConjureCreatorBylineDefault from "ConjureCreatorByline.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  items = [React3(ConjureAppSheetIconDefault, { application })];
  const obj2 = { spacing: nativeDefault.space.PX_4, style: closure_5().details, children: null };
  const items1 = [
    React3(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      lineClamp: 2,
      children: application.name,
    }),
  ];
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
}
