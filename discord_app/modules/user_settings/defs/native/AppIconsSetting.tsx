import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.N4YDao);
  },
  parent: null,
  IconComponent: require("SettingsItemAppIcon"),
  useTrailing: function useAppIconSettingTrailing() {
    const obj = { dismissibleContent: null, newPremiumStyle: true };
    obj[0] = require(1358) /* DismissibleContent */.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE;
    return jsx(importDefault(14570), { dismissibleContent: null, newPremiumStyle: true });
  },
  usePreNavigationAction: function useAppIconSettingPreNavigationAction() {
    const items = [first(1358).DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE];
    const tmp = callback(first(5921).useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    const importDefault = tmp3;
    const items1 = [first, tmp[1]];
    return React.useCallback(() => {
      if (first === first(outer1_2[6]).DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE) {
        tmp3 = tmp3(outer1_5.TAKE_ACTION);
      }
      return true;
    }, items1);
  },
  usePredicate() {
    return require(7570) /* fetchCurrentAppIcon */.isAppIconsSupported();
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(14573).default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default createToggle;