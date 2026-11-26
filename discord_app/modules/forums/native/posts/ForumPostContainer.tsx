// === Module 12460: ForumPostContainer ===

// Module 12460 (ForumPostContainer)
import nativeDefault from "native" /* 575 */;
import _mod1654 from "module_1654" /* 1654 */;
import Card from "Card" /* 6145 */;
import useNativeForumPostHandlersDefault from "useNativeForumPostHandlers" /* 10736 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let obj = { childContainer: { position: "relative", minHeight: 110, padding: 12 }, card: { marginBottom: 12 }, disabledContainer: { marginBottom: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, overflow: "hidden" } };
let closure_6 = createStyles.createStyles(obj);
const ReanimatedHelperTypes = fn(7429);
const redux = noop.createContext(ReanimatedHelperTypes.createFakeSharedValue(false));
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostContainer.tsx");

export function useForumPostContainerPressedIn() {
  return noop.useContext(closure_7);
}
export function ForumPostPressableContainer(arg0) {
  ({ threadId, children, style } = arg0);
  const tmp = closure_6();
  const sharedValue = _mod1654.useSharedValue(false);
  items = [sharedValue];
  const memo = noop.useMemo(() => ({
    onPressIn() {
      return sharedValue.set(true);
    },
    onPressOut() {
      return sharedValue.set(false);
    }
  }), items);
  ({ onPressIn, onPressOut } = memo);
  const obj2 = { style: tmp.card, children: null };
  ({ onTapPost, onLongTapPost } = useNativeForumPostHandlersDefault({ threadId }));
  const obj3 = { style: null, variant: "surface-high", accessibilityRole: "button", onPress: onTapPost, onPressIn, onPressOut, onLongPress: onLongTapPost, unstable_pressDelay: 130, children };
  const items1 = [tmp.childContainer, style];
  obj3.style = items1;
  obj2.children = jsx(Card.Card, { style: null, variant: "surface-high", accessibilityRole: "button", onPress: onTapPost, onPressIn, onPressOut, onLongPress: onLongTapPost, unstable_pressDelay: 130, children });
  const tmp4 = useNativeForumPostHandlersDefault({ threadId });
  return <redux.Provider value={sharedValue}><View style={tmp.card}>{null}</View></redux.Provider>;
}
export function ForumPostDisabledContainer(arg0) {
  ({ children, style } = arg0);
  const obj = { style: null, pointerEvents: "none", children: null };
  items = [closure_6().disabledContainer, style];
  obj.style = items;
  obj.children = children;
  return <View style={null} pointerEvents="none">{null}</View>;
}