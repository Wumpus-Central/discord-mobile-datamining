// === Module 1612: react ===

// Module 1612 (react)
import BaseNavigationContainer from "BaseNavigationContainer" /* 1493 */;
import react from "react" /* 19 */;

let closure_1, focused;


export const useScrollToTop = function useScrollToTop(ref) {
  let closure_0 = ref;
  const context = react.useContext(BaseNavigationContainer.NavigationContext);
  const obj2 = BaseNavigationContainer;
  const route = obj2.useRoute();
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
    throw error;
  } else {
    let items = [context, ref, route.key];
    const effect = react.useEffect(() => {
      let key;
      let parent;
      const items = [];
      for (let parent = closure_1; parent; parent = parent.getParent()) {
        if ("tab" === parent.getState().type) {
          let arr = items.push(parent);
        }
      }
      if (0 !== items.length) {
        closure_1 = items.map((addListener) => addListener.addListener("tabPress", (arg0) => {
          const ref = arg0;
          const obj = focused;
          focused = focused.isFocused();
          const hasItem = items.includes(focused) || obj.getState().routes[0].key === key.key;
          const animationFrame = requestAnimationFrame(() => {
            let tmp2 = null;
            if (null != ref.current) {
              if (!("scrollToTop" in ref.current)) {
                if (!("scrollTo" in ref.current)) {
                  if (!("scrollToOffset" in ref.current)) {
                    let current3;
                    if (!("scrollResponderScrollTo" in ref.current)) {
                      const current = ref.current;
                      if ("getScrollResponder" in ref.current) {
                        current3 = current.getScrollResponder();
                      } else {
                        const current2 = ref.current;
                        if ("getNode" in current) {
                          current3 = current2.getNode();
                        } else {
                          current3 = current2;
                        }
                      }
                    }
                    tmp2 = current3;
                  }
                }
              }
              current3 = ref.current;
            }
            const tmp3 = closure_1 && hasItem && tmp2 && !defaultPrevented.defaultPrevented;
            if (tmp3) {
              if ("scrollToTop" in tmp2) {
                tmp2.scrollToTop();
              } else if ("scrollTo" in tmp2) {
                tmp2.scrollTo({ y: 0, animated: true });
              } else if ("scrollToOffset" in tmp2) {
                tmp2.scrollToOffset({ offset: 0, animated: true });
              } else if ("scrollResponderScrollTo" in tmp2) {
                const result = tmp2.scrollResponderScrollTo({ y: 0, animated: true });
              }
            }
          });
        }));
        return () => {
          const item = closure_1.forEach((fn) => fn());
        };
      }
    }, items);
  }
};