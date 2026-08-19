// === Module 15313: useMessagesScrollToTop ===

// Module 15313 (useMessagesScrollToTop)
import noop from "noop" /* 19 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx");

export default function useMessagesScrollToTop(listRef) {
  listRef = listRef.listRef;
  const listRefHappeningNow = listRef.listRefHappeningNow;
  const items = [listRef, listRefHappeningNow];
  const ref = React.useRef(React.useMemo(() => ({
    scrollToTopTimeout: -1,
    scrollToTop() {
      if (null != obj.coerceGuildsRoute(listRefHappeningNow(closure_1_2[3])())) {
        const self = this;
        if (-1 === this.scrollToTopTimeout) {
          const _setTimeout = setTimeout;
          self.scrollToTopTimeout = setTimeout(() => {
            if (ref != null) {
              const current = ref.current;
              if (current != null) {
                current.scrollToTop(!closure_1_4.useReducedMotion);
              }
            }
            const current2 = ref2.current;
            if (current2 != null) {
              const obj = { offset: 0, animated: null };
              obj[1] = !closure_1_4.useReducedMotion;
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
  const scrollToTop = listRef(1501).useScrollToTop(ref);
};