// === Module 12020: ForumPostContainer ===

// Module 12020 (ForumPostContainer)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Card from "Card" /* 5607 */;
import useNativeForumPostHandlersDefault from "useNativeForumPostHandlers" /* 10219 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { childContainer: { position: "relative", minHeight: 110, padding: 12 }, card: { marginBottom: 12 }, disabledContainer: null };
obj = { marginBottom: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
obj.disabledContainer = obj;
let closure_6 = createStyles.createStyles(obj);
const ReanimatedHelperTypes = fn(7074);
const redux = noop.createContext(ReanimatedHelperTypes.createFakeSharedValue(false));
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostContainer.tsx");

export const useForumPostContainerPressedIn = function useForumPostContainerPressedIn() {
  return noop.useContext(closure_7);
};
export const ForumPostPressableContainer = function ForumPostPressableContainer(arg0) {
  ({ threadId, children, style } = arg0);
  const tmp = closure_6();
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(false);
  const items = [sharedValue];
  const memo = noop.useMemo(() => ({
    onPressIn() {
      return sharedValue.set(true);
    },
    onPressOut() {
      return sharedValue.set(false);
    }
  }), items);
  ({ onPressIn, onPressOut } = memo);
  obj = { style: tmp.card, children: null };
  ({ onTapPost, onLongTapPost } = useNativeForumPostHandlersDefault({ threadId }));
  obj = { style: null, variant: "surface-high", accessibilityRole: "button", onPress: onTapPost, onPressIn, onPressOut, onLongPress: onLongTapPost, unstable_pressDelay: 130, children };
  const items1 = [tmp.childContainer, style];
  obj.style = items1;
  obj.children = jsx(Card.Card, { style: null, variant: "surface-high", accessibilityRole: "button", onPress: onTapPost, onPressIn, onPressOut, onLongPress: onLongTapPost, unstable_pressDelay: 130, children });
  const tmp4 = useNativeForumPostHandlersDefault({ threadId });
  return <redux.Provider value={sharedValue}><View style={null} variant="surface-high" accessibilityRole="button" onPress={onTapPost} onPressIn={onPressIn} onPressOut={onPressOut} onLongPress={onLongTapPost} unstable_pressDelay={130}>{children}</View></redux.Provider>;
};
export const ForumPostDisabledContainer = function ForumPostDisabledContainer(arg0) {
  ({ children, style } = arg0);
  const obj = { style: null, pointerEvents: "none", children: null };
  const items = [closure_6().disabledContainer, style];
  obj.style = items;
  obj.children = children;
  return <View style={null} pointerEvents="none">{null}</View>;
};