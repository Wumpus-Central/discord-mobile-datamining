// === Module 11634: ForumPostContainer ===

// Module 11634 (ForumPostContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Card_Card from "Card/Card" /* 5995 */;
import useNativeForumPostHandlersDefault from "useNativeForumPostHandlers" /* 10031 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReanimatedHelperTypes from "ReanimatedHelperTypes" /* 6571 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { childContainer: { position: "relative", minHeight: 110, padding: 12 }, card: { marginBottom: 12 }, disabledContainer: obj2 };
obj2 = { marginBottom: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
let closure_6 = createStyles.createStyles(obj);
const createContext = react.createContext;
const redux = createContext(ReanimatedHelperTypes.createFakeSharedValue(false));
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let onLongTapPost;
  let onPressIn;
  let onPressOut;
  let onTapPost;
  let style;
  let threadId;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(20);
  ({ threadId, children, style } = arg0);
  const tmp4 = closure_6();
  const obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(false);
  if (cResult[0] !== sharedValue) {
    const obj3 = {
      onPressIn() {
          return sharedValue.set(true);
        },
      onPressOut() {
          return sharedValue.set(false);
        }
    };
    cResult[0] = sharedValue;
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  ({ onPressIn, onPressOut } = tmp6);
  if (cResult[2] !== threadId) {
    const obj4 = { threadId };
    cResult[2] = threadId;
    cResult[3] = obj4;
    tmp7 = obj4;
  } else {
    tmp7 = cResult[3];
  }
  ({ onTapPost, onLongTapPost } = useNativeForumPostHandlersDefault(tmp7));
  useNativeForumPostHandlersDefault(tmp7);
  if (cResult[4] === style) {
    let tmp9;
    if (cResult[5] === tmp4.childContainer) {
      tmp9 = cResult[6];
    }
    if (cResult[7] === children) {
      if (cResult[8] === onLongTapPost) {
        if (cResult[9] === onPressIn) {
          if (cResult[10] === onPressOut) {
            if (cResult[11] === onTapPost) {
              let tmp10;
              if (cResult[12] === tmp9) {
                tmp10 = cResult[13];
              }
              if (cResult[14] === tmp4.card) {
                let tmp13;
                if (cResult[15] === tmp10) {
                  tmp13 = cResult[16];
                }
                if (cResult[17] === sharedValue) {
                  let tmp17;
                  if (cResult[18] === tmp13) {
                    tmp17 = cResult[19];
                  }
                  return tmp17;
                }
                const tmp20 = <redux.Provider value={sharedValue}>{tmp13}</redux.Provider>;
                cResult[17] = sharedValue;
                cResult[18] = tmp13;
                cResult[19] = tmp20;
                tmp17 = tmp20;
              }
              const tmp16 = <View style={tmp4.card}>{tmp10}</View>;
              cResult[14] = tmp4.card;
              cResult[15] = tmp10;
              cResult[16] = tmp16;
              tmp13 = tmp16;
            }
          }
        }
      }
    }
    const tmp12 = jsx(Card_Card.Card, { style: tmp9, variant: "surface-high", accessibilityRole: "button", onPress: onTapPost, onPressIn, onPressOut, onLongPress: onLongTapPost, unstable_pressDelay: 130, children });
    cResult[7] = children;
    cResult[8] = onLongTapPost;
    cResult[9] = onPressIn;
    cResult[10] = onPressOut;
    cResult[11] = onTapPost;
    cResult[12] = tmp9;
    cResult[13] = tmp12;
    tmp10 = tmp12;
  }
  const items = [tmp4.childContainer, style];
  cResult[4] = style;
  cResult[5] = tmp4.childContainer;
  cResult[6] = items;
  tmp9 = items;
}) : ((arg0) => {
  let children;
  let onLongTapPost;
  let onPressIn;
  let onPressOut;
  let onTapPost;
  let style;
  let threadId;
  ({ threadId, children, style } = arg0);
  const tmp = closure_6();
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(false);
  const items = [sharedValue];
  const memo = react.useMemo(() => ({
    onPressIn() {
      return sharedValue.set(true);
    },
    onPressOut() {
      return sharedValue.set(false);
    }
  }), items);
  ({ onPressIn, onPressOut } = memo);
  ({ onTapPost, onLongTapPost } = useNativeForumPostHandlersDefault({ threadId }));
  const items1 = [tmp.childContainer, style];
  useNativeForumPostHandlersDefault({ threadId });
  return <redux.Provider value={sharedValue}><View style={tmp.card}>{null}</View></redux.Provider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => react.useContext(redux);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let style;
  const obj = react2;
  const cResult = obj.c(6);
  ({ children, style } = arg0);
  const tmp2 = closure_6();
  if (cResult[0] === style) {
    let tmp3;
    if (cResult[1] === tmp2.disabledContainer) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp4;
      if (cResult[4] === tmp3) {
        tmp4 = cResult[5];
      }
      return tmp4;
    }
    const tmp7 = <View style={tmp3} pointerEvents="none">{children}</View>;
    cResult[3] = children;
    cResult[4] = tmp3;
    cResult[5] = tmp7;
    tmp4 = tmp7;
  }
  const items = [tmp2.disabledContainer, style];
  cResult[0] = style;
  cResult[1] = tmp2.disabledContainer;
  cResult[2] = items;
  tmp3 = items;
}) : ((arg0) => {
  let children;
  let style;
  ({ children, style } = arg0);
  const items = [closure_6().disabledContainer, style];
  return <View style={items} pointerEvents="none">{children}</View>;
});
const result1 = size.fileFinishedImporting("modules/forums/native/posts/ForumPostContainer.tsx");

export const useForumPostContainerPressedIn = fn;
export const ForumPostPressableContainer = tmp4;
export const ForumPostDisabledContainer = tmp5;