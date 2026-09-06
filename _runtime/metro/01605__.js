// _runtime/metro/01605__.js
import BaseNavigationContainer from "../01486_BaseNavigationContainer.js";
import noop from "00019__.js";

require = arg1;

export const useScrollToTop = function useScrollToTop(ref) {
  closure_0 = ref;
  const context = noop.useContext(BaseNavigationContainer.NavigationContext);
  const route = BaseNavigationContainer.useRoute();
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
    throw error;
  } else {
    let items = [context, ref, route.key];
    const effect = noop.useEffect(() => {
      const items = [];
      for (let parent = closure_1; parent; parent = parent.getParent()) {
        if ("tab" === parent.getState().type) {
          let arr = items.push(parent);
        }
      }
      if (0 !== items.length) {
        closure_1 = items.map((addListener) =>
          addListener.addListener("tabPress", (arg0) => {
            const defaultPrevented = arg0;
            focused = focused.isFocused();
            let hasItem = ref.includes(focused);
            if (!hasItem) {
              hasItem = obj.getState().routes[0].key === key.key;
            }
            const animationFrame = requestAnimationFrame(() => {
              if (null == ref.current) {
                let tmp3 = closure_1;
                if (closure_1) {
                  tmp3 = hasItem;
                }
                if (tmp3) {
                  tmp3 = null;
                }
                if (tmp3) {
                  tmp3 = !defaultPrevented.defaultPrevented;
                }
                if (tmp3) {
                  if ("scrollToTop" in null) {
                    null.scrollToTop();
                  } else if ("scrollTo" in null) {
                    null.scrollTo({ y: 0, animated: true });
                  } else if ("scrollToOffset" in null) {
                    null.scrollToOffset({ offset: 0, animated: true });
                  } else if ("scrollResponderScrollTo" in null) {
                    const result = null.scrollResponderScrollTo({ y: 0, animated: true });
                  }
                }
              } else {
                if (!("scrollToTop" in ref.current)) {
                  if (!("scrollTo" in ref.current)) {
                    if (!("scrollToOffset" in ref.current)) {
                      if (!("scrollResponderScrollTo" in ref.current)) {
                        const current = ref.current;
                        if ("getScrollResponder" in ref.current) {
                          let current3 = current.getScrollResponder();
                        } else {
                          const current2 = ref.current;
                          if ("getNode" in current) {
                            current3 = current2.getNode();
                          } else {
                            current3 = current2;
                          }
                        }
                      }
                    }
                  }
                }
                current3 = ref.current;
              }
            });
            obj = focused;
          }),
        );
        return () => {
          const item = closure_1.forEach((fn) => fn());
        };
      }
    }, items);
  }
};
