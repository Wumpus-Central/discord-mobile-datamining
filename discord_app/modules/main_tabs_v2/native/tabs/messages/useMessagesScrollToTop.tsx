// === Module 16048: useMessagesScrollToTop ===

// Module 16048 (useMessagesScrollToTop)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx");

export default function useMessagesScrollToTop(listRef) {
  listRef = listRef.listRef;
  const listRefHappeningNow = listRef.listRefHappeningNow;
  const items = [listRef, listRefHappeningNow];
  const ref = noop.useRef(noop.useMemo(() => ({
    scrollToTopTimeout: -1,
    scrollToTop() {
      if (null != obj.coerceGuildsRoute(listRefHappeningNow(11218)())) {
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
  }), items));
  const scrollToTop = listRef(1484).useScrollToTop(ref);
};