import { DismissibleContent } from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { fetchCurrentAppIcon } from "../../../app_icons/native/AppIconUtils.tsx";
import { DismissibleNewTag } from "../../../dismissible_content/native/DismissibleNewBadge.tsx";
import { UserSettingsAppIcons } from "../../app_icon/native/UserSettingsAppIcons.tsx";
// discord_app/modules/user_settings/defs/native/AppIconsSetting.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.N4YDao);
  },
  parent: null,
  IconComponent: require("SettingsItemAppIcon"),
  useTrailing: function useAppIconSettingTrailing() {
    const obj = { dismissibleContent: null, newPremiumStyle: true };
    obj[0] = DismissibleContent /* DismissibleContent */.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE;
    return jsx(DismissibleNewTag, { dismissibleContent: null, newPremiumStyle: true });
  },
  usePreNavigationAction: function useAppIconSettingPreNavigationAction() {
    const items = [first(1358).DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE];
    const tmp = callback(first(5931).useSelectedDismissibleContent(items), 2);
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
    return fetchCurrentAppIcon /* fetchCurrentAppIcon */.isAppIconsSupported();
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APP_ICONS,
  getComponent() {
    return UserSettingsAppIcons.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default createToggle;