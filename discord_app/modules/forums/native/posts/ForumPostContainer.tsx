// discord_app/modules/forums/native/posts/ForumPostContainer.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import useNativeForumPostHandlersDefault from "hooks/useNativeForumPostHandlers.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj = {
  childContainer: { position: "relative", minHeight: 110, padding: 12 },
  card: { marginBottom: 12 },
  disabledContainer: {
    marginBottom: 12,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.md,
    overflow: "hidden",
  },
};
let closure_6 = createStyles.createStyles(obj);
const ReanimatedHelperTypes = fn(6754);
const redux = noop.createContext(ReanimatedHelperTypes.createFakeSharedValue(false));
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
fn(558);
let obj3 = {
  marginBottom: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
};
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostPressableContainer(arg0) {
      const cResult = c.c(20);
      ({ threadId, children, style } = arg0);
      const tmp4 = closure_6();
      const sharedValue = ReanimatedRexport.useSharedValue(false);
      if (cResult[0] !== sharedValue) {
        const obj3 = {
          onPressIn() {
            return sharedValue.set(true);
          },
          onPressOut() {
            return sharedValue.set(false);
          },
        };
        cResult[0] = sharedValue;
        cResult[1] = obj3;
        let tmp6 = obj3;
      } else {
        tmp6 = cResult[1];
      }
      ({ onPressIn, onPressOut } = tmp6);
      if (cResult[2] !== threadId) {
        const obj4 = { threadId };
        cResult[2] = threadId;
        cResult[3] = obj4;
        let tmp7 = obj4;
      } else {
        tmp7 = cResult[3];
      }
      ({ onTapPost, onLongTapPost } = useNativeForumPostHandlersDefault(tmp7));
      if (cResult[4] === style) {
        if (cResult[5] === tmp4.childContainer) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === children) {
          if (cResult[8] === onLongTapPost) {
            if (cResult[9] === onPressIn) {
              if (cResult[10] === onPressOut) {
                if (cResult[11] === onTapPost) {
                  if (cResult[12] === tmp9) {
                    let tmp10 = cResult[13];
                  }
                  if (cResult[14] === tmp4.card) {
                    if (cResult[15] === tmp10) {
                      let tmp13 = cResult[16];
                    }
                    if (cResult[17] === sharedValue) {
                      if (cResult[18] === tmp13) {
                        let tmp17 = cResult[19];
                      }
                      return tmp17;
                    }
                    const obj5 = { value: sharedValue, children: tmp13 };
                    const tmp20 = <redux.Provider value={sharedValue}>{tmp13}</redux.Provider>;
                    cResult[17] = sharedValue;
                    cResult[18] = tmp13;
                    cResult[19] = tmp20;
                    tmp17 = tmp20;
                  }
                  const obj6 = { style: tmp4.card, children: tmp10 };
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
        const obj7 = {
          style: tmp9,
          variant: "surface-high",
          accessibilityRole: "button",
          onPress: onTapPost,
          onPressIn,
          onPressOut,
          onLongPress: onLongTapPost,
          unstable_pressDelay: 130,
          children,
        };
        const tmp12 = jsx(Card.Card, {
          style: tmp9,
          variant: "surface-high",
          accessibilityRole: "button",
          onPress: onTapPost,
          onPressIn,
          onPressOut,
          onLongPress: onLongTapPost,
          unstable_pressDelay: 130,
          children,
        });
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
      const tmp8 = useNativeForumPostHandlersDefault(tmp7);
    }
  : function ForumPostPressableContainer(arg0) {
      ({ threadId, children, style } = arg0);
      const tmp = closure_6();
      const sharedValue = ReanimatedRexport.useSharedValue(false);
      const items = [sharedValue];
      const memo = noop.useMemo(
        () => ({
          onPressIn() {
            return sharedValue.set(true);
          },
          onPressOut() {
            return sharedValue.set(false);
          },
        }),
        items,
      );
      ({ onPressIn, onPressOut } = memo);
      const obj2 = { style: tmp.card, children: null };
      ({ onTapPost, onLongTapPost } = useNativeForumPostHandlersDefault({ threadId }));
      const obj3 = {
        style: null,
        variant: "surface-high",
        accessibilityRole: "button",
        onPress: onTapPost,
        onPressIn,
        onPressOut,
        onLongPress: onLongTapPost,
        unstable_pressDelay: 130,
        children,
      };
      const items1 = [tmp.childContainer, style];
      obj3.style = items1;
      obj2.children = jsx(Card.Card, {
        style: null,
        variant: "surface-high",
        accessibilityRole: "button",
        onPress: onTapPost,
        onPressIn,
        onPressOut,
        onLongPress: onLongTapPost,
        unstable_pressDelay: 130,
        children,
      });
      const tmp4 = useNativeForumPostHandlersDefault({ threadId });
      return (
        <redux.Provider value={sharedValue}>
          <View style={tmp.card}>{null}</View>
        </redux.Provider>
      );
    };
function useForumPostContainerPressedIn() {
  return noop.useContext(closure_7);
}
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/forums/native/posts/ForumPostContainer.tsx");

export { useForumPostContainerPressedIn };
export const ForumPostPressableContainer = tmp3;
export const ForumPostDisabledContainer = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostDisabledContainer(arg0) {
      const cResult = c.c(6);
      ({ children, style } = arg0);
      const tmp2 = closure_6();
      if (cResult[0] === style) {
        if (cResult[1] === tmp2.disabledContainer) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp3) {
            let tmp4 = cResult[5];
          }
          return tmp4;
        }
        const obj2 = { style: tmp3, pointerEvents: "none", children };
        const tmp7 = (
          <View style={tmp3} pointerEvents="none">
            {children}
          </View>
        );
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
    }
  : function ForumPostDisabledContainer(arg0) {
      ({ children, style } = arg0);
      const obj = { style: null, pointerEvents: "none", children: null };
      const items = [closure_6().disabledContainer, style];
      obj.style = items;
      obj.children = children;
      return (
        <View style={null} pointerEvents="none">
          {null}
        </View>
      );
    };
