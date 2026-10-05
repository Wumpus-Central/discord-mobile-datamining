// === Module 14534: DismissibleBadgeUtils ===

// Module 14534 (DismissibleBadgeUtils)
import c from "c" /* 576 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14533 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function useAlwaysShow() {
  return true;
}
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_7 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DismissibleBadgeUtils.tsx");

export function createDismissibleBadgePreNavigationAction(TINY_BRONCO_SETTINGS) {
  closure_0 = TINY_BRONCO_SETTINGS;
  let tmp = useShouldShowAgeNotice;
  if (useShouldShowAgeNotice === undefined) {
    tmp = useAlwaysShow;
  }
  closure_1 = tmp;
  return () => {
    const tmp = closure_1();
    if (tmp) {
      const items = [first];
      let tmp2 = items;
    } else {
      tmp2 = closure_1_7;
    }
    const tmp4 = _slicedToArray(dismissibleContent(dependencyMap[4]).useSelectedDismissibleContent(tmp2), 2);
    first = tmp4[0];
    closure_1 = tmp6;
    const items1 = [first, tmp4[1]];
    return React.useCallback(() => {
      if (first === closure_0) {
        closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      return true;
    }, items1);
  };
}
export const createDismissibleBadgeRouteProps = function createDismissibleBadgeRouteProps(CUSTOM_APP_ICONS_NEW_BADGE) {
  _require = CUSTOM_APP_ICONS_NEW_BADGE;
  const obj = require("ReactCompilerGating");
  closure_129_0 = CUSTOM_APP_ICONS_NEW_BADGE;
  closure_129_1 = useAlwaysShow;
  return {
    useTrailing: require("ReactCompilerGating").isReactCompilerEnabled() ? (() => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { dismissibleContent, newPremiumStyle: true };
        const tmp7 = jsx(DismissiblePremiumNewBadgeDefault, { dismissibleContent, newPremiumStyle: true });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }) : (() => jsx(DismissiblePremiumNewBadgeDefault, { dismissibleContent, newPremiumStyle: true })),
    usePreNavigationAction: () => {
      const tmp = closure_1();
      if (tmp) {
        const items = [first];
        let tmp2 = items;
      } else {
        tmp2 = closure_1_7;
      }
      const tmp4 = _slicedToArray(dismissibleContent(dependencyMap[4]).useSelectedDismissibleContent(tmp2), 2);
      first = tmp4[0];
      closure_1 = tmp6;
      const items1 = [first, tmp4[1]];
      return React.useCallback(() => {
        if (first === closure_0) {
          closure_1(ContentDismissActionType.TAKE_ACTION);
        }
        return true;
      }, items1);
    }
  };
};