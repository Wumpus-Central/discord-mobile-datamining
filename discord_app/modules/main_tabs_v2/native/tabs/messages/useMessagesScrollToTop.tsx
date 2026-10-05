// === Module 15975: useMessagesScrollToTop ===

// Module 15975 (useMessagesScrollToTop)
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx");

export default function useMessagesScrollToTop(listRef) {
  listRef = listRef.listRef;
  const listRefHappeningNow = listRef.listRefHappeningNow;
  const items = [listRef, listRefHappeningNow];
  const ref = react.useRef(react.useMemo(() => {
    let obj = {
      scrollToTopTimeout: -1,
      scrollToTop() {
        let ref;
        let ref2;
        let obj = listRef(dependencyMap[2]);
        if (null != obj.coerceGuildsRoute(listRefHappeningNow(dependencyMap[3])())) {
          const self = this;
          if (-1 === this.scrollToTopTimeout) {
            const _setTimeout = setTimeout;
            self.scrollToTopTimeout = setTimeout(() => {
              if (ref != null) {
                const current = ref.current;
                if (current != null) {
                  current.scrollToTop(!closure_2_4.useReducedMotion);
                }
              }
              const current2 = ref2.current;
              if (current2 != null) {
                const obj = { offset: 0, animated: !closure_2_4.useReducedMotion };
                current2.scrollToOffset(obj);
              }
            }, 300);
          } else {
            const _clearTimeout = clearTimeout;
            clearTimeout(self.scrollToTopTimeout);
            self.scrollToTopTimeout = -1;
          }
        }
      }
    };
    return obj;
  }, items));
  let obj = listRef(1491);
  const scrollToTop = obj.useScrollToTop(ref);
};