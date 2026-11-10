// discord_app/modules/conjure/app_hover_card/native/ConjureCreatorByline.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import conjureCreatorByline from "../conjureCreatorByline.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5142);
let closure_5 = createStyles.createStyles({ text: { flexShrink: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/ConjureCreatorByline.tsx");

export default function ConjureCreatorByline(arg0) {
  ({ creator, guildId } = arg0);
  const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: null };
  const obj2 = { user: creator, guildId, size: native.AvatarSizes.XSMALL_20, accessible: false };
  items = [React3(native.Avatar, obj2)];
  const obj3 = {
    variant: "body-sm/normal",
    color: "text-muted",
    lineClamp: 1,
    style: closure_5().text,
    children: null,
  };
  const tmp = closure_5();
  obj3.children = conjureCreatorByline.formatConjureCreatorByline(creator);
  items[1] = React3(Text_Text.Text, obj3);
  obj.children = items;
  return React4(Stack_Stack.Stack, obj);
}
