// === Module 15422: AccessibilitySetting ===

// Module 15422 (AccessibilitySetting)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7495 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsx = fn(21).jsx;
let items = [fn(1944).DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
const SettingBuilders = fn(11606);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.G0neg7);
  },
  parent: null,
  IconComponent: fn(15423).AccessibilityIcon,
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
        const obj3 = { text: null };
        const intl = util.intl;
        obj3.text = intl.string(util.t.y2b7CA);
        tmp5 = jsx(native.TextBadge, { text: null });
      }
    }
    return tmp5;
  },
  usePreNavigationAction() {
    const tmp = _slicedToArray(first(7495).useSelectedDismissibleContent(items), 2);
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
    route: fn(1074).UserSettingsSections.ACCESSIBILITY,
    getComponent() {
      return require("SettingsAccessibilityScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default route;