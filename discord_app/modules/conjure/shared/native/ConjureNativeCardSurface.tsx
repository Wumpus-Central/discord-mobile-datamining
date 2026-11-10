// === Module 12312: ConjureNativeCardSurface ===

// Module 12312 (ConjureNativeCardSurface)
import nativeDefault from "native" /* 575 */;
import Card from "Card" /* 7043 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(undefined);
const createStyles = fn(5142);
let obj = { surface: { padding: nativeDefault.space.PX_12 } };
let closure_5 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCardSurface.tsx");

export default function ConjureNativeCardSurface(holdsKeyboard) {
  let flag = holdsKeyboard.holdsKeyboard;
  ({ children, style } = holdsKeyboard);
  if (flag === undefined) {
    flag = false;
  }
  context = noop.useContext(context);
  const obj = { variant: "secondary", border: "subtle", radius: 12, style: null, onTouchStart: null, children: null };
  items = [closure_5().surface, style];
  obj.style = items;
  let tmp4;
  if (flag) {
    tmp4 = context;
  }
  obj.onTouchStart = tmp4;
  obj.children = children;
  return jsx(Card.Card, { variant: "secondary", border: "subtle", radius: 12, style: null, onTouchStart: null, children: null });
};
export const CONJURE_NATIVE_CARD_RADIUS = 12;
export const ConjureCardTouchContext = context;