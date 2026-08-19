// discord_app/modules/user_settings/defs/native/AccessibilitySetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import useSelectedDismissibleContent from "../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SettingsAccessibilityScreen } from "../../accessibility/native/SettingsAccessibilityScreen.tsx";

require = fn;
let items = [require("DismissibleContent").DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.G0neg7);
  },
  parent: null,
  IconComponent: require("AccessibilityIcon").AccessibilityIcon,
  useTrailing() {
    let obj = useSelectedDismissibleContent;
    [tmp4, r10012] = callback(obj.useSelectedDismissibleContent(items), 2);
    let tmp5 = null;
    if (null != tmp4) {
      let hasItem;
      if (items != null) {
        hasItem = items.includes(tmp4);
      }
      tmp5 = null;
      if (hasItem) {
        obj = { text: null };
        const intl = getSystemLocale.intl;
        obj[0] = intl.string(getSystemLocale.t.y2b7CA);
        tmp5 = jsx(Button.TextBadge, { text: null });
      }
    }
    return tmp5;
  },
  usePreNavigationAction() {
    const tmp = callback(first(7366).useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    dependencyMap = tmp3;
    items = [tmp[1], first];
    return React.useCallback(() => {
      let tmp2 = null != first;
      if (tmp2) {
        let hasItem;
        if (items != null) {
          hasItem = items.includes(tmp);
        }
        tmp2 = hasItem;
      }
      if (tmp2) {
        callback(ContentDismissActionType.TAKE_ACTION);
      }
      return true;
    }, items);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.ACCESSIBILITY,
  getComponent() {
    return SettingsAccessibilityScreen /* SettingsAccessibilityScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default createToggle;