// discord_app/modules/user_settings/defs/native/AccessibilitySetting.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
let items = [require("DismissibleContent").DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.G0neg7);
  },
  parent: null,
  IconComponent: require("AccessibilityIcon").AccessibilityIcon,
  useTrailing() {
    let tmp4;
    let obj = require(5931) /* useSelectedDismissibleContent */;
    [tmp4, r10012] = callback(obj.useSelectedDismissibleContent(items), 2);
    let tmp5 = null;
    if (null != tmp4) {
      let hasItem;
      if (obj2 != null) {
        hasItem = obj2.includes(tmp4);
      }
      tmp5 = null;
      if (hasItem) {
        obj = { text: null };
        const intl = tmp(1236).intl;
        obj[0] = intl.string(tmp(1236).t.y2b7CA);
        tmp5 = jsx(tmp(1297).TextBadge, { text: null });
      }
    }
    return tmp5;
  },
  usePreNavigationAction() {
    const tmp = callback(first(5931).useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    const dependencyMap = tmp3;
    items = [tmp[1], first];
    return React.useCallback(() => {
      let tmp2 = null != first;
      if (tmp2) {
        let hasItem;
        if (outer1_6 != null) {
          hasItem = obj.includes(tmp);
        }
        tmp2 = hasItem;
        obj = outer1_6;
      }
      if (tmp2) {
        tmp3(outer1_4.TAKE_ACTION);
      }
      return true;
    }, items);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.ACCESSIBILITY,
  getComponent() {
    return require(14464) /* SettingsAccessibilityScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default createToggle;