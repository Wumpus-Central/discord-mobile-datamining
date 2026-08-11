// _runtime/01621_useScrollToTop.js
import noop from "noop";

const require = arg1;

export const useScrollToTop = function useScrollToTop(ref) {
  const _require = ref;
  context = route.useContext(_require(context[1]).NavigationContext);
  route = _require(context[1]).useRoute();
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
    throw error;
  } else {
    let items = [context, ref, route.key];
    const effect = obj.useEffect(() => {
      const items = [];
      for (let parent = closure_1; parent; parent = parent.getParent()) {
        let tmp = parent;
        if ("tab" === parent.getState().type) {
          let arr = items.push(parent);
        }
      }
      if (0 !== items.length) {
        closure_1 = items.map((addListener) => addListener.addListener("tabPress", (arg0) => {
          let closure_0 = arg0;
          let closure_1 = outer1_1.isFocused();
          let hasItem = closure_0.includes(outer1_1);
          if (!hasItem) {
            hasItem = outer1_1.getState().routes[0].key === outer1_2.key;
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
                tmp3 = !ref.defaultPrevented;
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
              if (!("scrollToTop" in tmp.current)) {
                if (!("scrollTo" in tmp.current)) {
                  if (!("scrollToOffset" in tmp.current)) {
                    if (!("scrollResponderScrollTo" in tmp.current)) {
                      const current = tmp.current;
                      if ("getScrollResponder" in tmp.current) {
                        let current3 = current.getScrollResponder();
                      } else {
                        const current2 = tmp.current;
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
              current3 = tmp.current;
            }
          });
        }));
        return () => {
          const item = closure_1.forEach((arg0) => arg0());
        };
      }
    }, items);
  }
  obj = route;
  const obj2 = _require(context[1]);
};