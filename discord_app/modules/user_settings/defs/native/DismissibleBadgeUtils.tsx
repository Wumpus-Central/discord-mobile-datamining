// discord_app/modules/user_settings/defs/native/DismissibleBadgeUtils.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function useAlwaysShow() {
  return true;
}
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_7 = [];
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DismissibleBadgeUtils.tsx");

export function createDismissibleBadgePreNavigationAction(TINY_BRONCO_SETTINGS) {
  let closure_0 = TINY_BRONCO_SETTINGS;
  let tmp = useShouldShowAgeNotice;
  if (useShouldShowAgeNotice === undefined) {
    tmp = useAlwaysShow;
  }
  let closure_1 = tmp;
  return () => {
    let first;
    let tmp3;
    const tmp = closure_1();
    const useSelectedDismissibleContent = closure_0(closure_1_2[4]).useSelectedDismissibleContent;
    closure_0(closure_1_2[4]);
    if (tmp) {
      const items = [first];
      tmp3 = items;
    } else {
      tmp3 = closure_1_7;
    }
    const tmp5 = closure_1_3(useSelectedDismissibleContent(tmp3), 2);
    first = tmp5[0];
    closure_1 = tmp7;
    const items1 = [first, tmp5[1]];
    return React.useCallback(() => {
      if (first === closure_0) {
        closure_1(constants.TAKE_ACTION);
      }
      return true;
    }, items1);
  };
}
export const createDismissibleBadgeRouteProps = function createDismissibleBadgeRouteProps(CUSTOM_APP_ICONS_NEW_BADGE) {
  let dismissibleContent;
  _require = CUSTOM_APP_ICONS_NEW_BADGE;
  let obj = require("ReactCompilerGating");
  _require = CUSTOM_APP_ICONS_NEW_BADGE;
  let closure_1 = useAlwaysShow;
  const obj2 = {
    useTrailing: obj.isReactCompilerEnabled()
      ? () => {
          let first;
          const obj = react2;
          const cResult = obj.c(1);
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp7 = jsx(DismissiblePremiumNewBadgeDefault, { dismissibleContent, newPremiumStyle: true });
            cResult[0] = tmp7;
            first = tmp7;
          } else {
            first = cResult[0];
          }
          return first;
        }
      : () => jsx(DismissiblePremiumNewBadgeDefault, { dismissibleContent, newPremiumStyle: true }),
    usePreNavigationAction: () => {
      let first;
      let tmp3;
      const tmp = closure_1();
      const useSelectedDismissibleContent = closure_0(closure_1_2[4]).useSelectedDismissibleContent;
      closure_0(closure_1_2[4]);
      if (tmp) {
        const items = [first];
        tmp3 = items;
      } else {
        tmp3 = closure_1_7;
      }
      const tmp5 = closure_1_3(useSelectedDismissibleContent(tmp3), 2);
      first = tmp5[0];
      closure_1 = tmp7;
      const items1 = [first, tmp5[1]];
      return React.useCallback(() => {
        if (first === closure_0) {
          closure_1(constants.TAKE_ACTION);
        }
        return true;
      }, items1);
    },
  };
  return obj2;
};
