// === Module 16609: AccessibilitySetting ===

// Module 16609 (AccessibilitySetting)
import util from "util" /* 1112 */;
import Badge from "Badge" /* 6941 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 8960 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ContentDismissActionType = fn(4640).ContentDismissActionType;
const jsx = fn(21).jsx;
let items = [fn(4627).DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
const SettingBuilders = fn(11817);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.G0neg7);
  },
  parent: null,
  IconComponent: fn(16610).AccessibilityIcon,
  useTrailing() {
    [tmp4, r10012] = useSelectedDismissibleContent.useSelectedDismissibleContent(items);
    let tmp5 = null;
    if (null != tmp4) {
      let hasItem;
      if (items != null) {
        hasItem = items.includes(tmp4);
      }
      tmp5 = null;
      if (hasItem) {
        tmp5 = jsx(Badge.Badge, { type: "new", variant: "notification" });
      }
    }
    return tmp5;
  },
  usePreNavigationAction() {
    const tmp = _slicedToArray(first(8960).useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    dependencyMap = tmp3;
    items = [tmp[1], first];
    return noop.useCallback(() => {
      let tmp2 = null != first;
      if (tmp2) {
        let hasItem;
        if (items != null) {
          hasItem = items.includes(tmp);
        }
        tmp2 = hasItem;
      }
      if (tmp2) {
        closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      return true;
    }, items);
  },
  screen: {
    route: fn(1071).UserSettingsSections.ACCESSIBILITY,
    getComponent() {
      return require("SettingsAccessibilityScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default route;