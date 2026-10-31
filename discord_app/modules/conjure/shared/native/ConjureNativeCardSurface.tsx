// discord_app/modules/conjure/shared/native/ConjureNativeCardSurface.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
const obj2 = { surface: { padding: nativeDefault.space.PX_12 } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCardSurface.tsx");

export default function ConjureNativeCardSurface(arg0) {
  ({ children, style } = arg0);
  const obj = { variant: "secondary", border: "subtle", radius: 12, style: null, children };
  const items = [closure_3().surface, style];
  obj.style = items;
  return jsx(Card.Card, { variant: "secondary", border: "subtle", radius: 12, style: null, children });
}
export const CONJURE_NATIVE_CARD_RADIUS = 12;
