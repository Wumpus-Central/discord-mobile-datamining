// discord_app/modules/user_settings/defs/native/AccessibilitySetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import useSelectedDismissibleContent from "../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import closure_2 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SettingsAccessibilityScreen } from "../../accessibility/native/SettingsAccessibilityScreen.tsx";

require = arg1;
let items = [require("DismissibleContent").DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
createToggle = {
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
    const tmp = callback(first(6216).useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    dependencyMap = tmp3;
    items = [tmp[1], first];
    return React.useCallback(() => {
      let tmp2 = null != first;
      if (tmp2) {
        let hasItem;
        if (closure_1_6 != null) {
          hasItem = obj.includes(tmp);
        }
        tmp2 = hasItem;
        obj = closure_1_6;
      }
      if (tmp2) {
        callback(closure_1_4.TAKE_ACTION);
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
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default createToggle;