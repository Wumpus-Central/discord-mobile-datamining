// === Module 15213: ConjureCreatorByline ===

// Module 15213 (ConjureCreatorByline)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5753 */;
import Stack_Stack from "Stack/Stack" /* 6161 */;
import conjureCreatorByline from "conjureCreatorByline" /* 15214 */;
import noop from "module_19" /* 19 */;

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
  items = [React3(native.Avatar, obj2), ];
  const obj3 = { variant: "body-sm/normal", color: "text-muted", lineClamp: 1, style: closure_5().text, children: null };
  const tmp = closure_5();
  obj3.children = conjureCreatorByline.formatConjureCreatorByline(creator);
  items[1] = React3(Text_Text.Text, obj3);
  obj.children = items;
  return React4(Stack_Stack.Stack, obj);
};