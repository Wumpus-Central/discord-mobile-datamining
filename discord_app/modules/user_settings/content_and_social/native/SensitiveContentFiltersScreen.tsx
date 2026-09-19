// discord_app/modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx
import util from "../../../../intl/index.native.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import SettingsScreenNotices from "../../privacy_and_safety/native/SettingsScreenNotices.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const SettingsScreenNoticesDefault = SettingsScreenNotices;

require = fn;
function SensitiveContentFiltersNotices() {
  const obj = { isListHeader: true, screen: SettingsScreenNotices.SettingsScreen.SENSITIVE_CONTENT_FILTERS };
  return jsx(SettingsScreenNoticesDefault, {
    isListHeader: true,
    screen: SettingsScreenNotices.SettingsScreen.SENSITIVE_CONTENT_FILTERS,
  });
}
const MobileUserSettings = fn(8232).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx",
);

export default function UserSettingsSensitiveContentFilters() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null, ListHeaderComponent: null };
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.GYpoAq);
    const items = [, ,];
    ({
      EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0],
      EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1],
      EXPLICIT_MEDIA_FILTERS_GUILDS: arr[2],
    } = MobileUserSettings);
    obj3.settings = items;
    const intl2 = util.intl;
    obj3.subLabel = intl2.string(util.t.Wnojv1);
    const items1 = [obj3];
    const obj4 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t["16/3Bi"]);
    const items2 = [, ,];
    ({
      GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0],
      GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1],
      GORE_MEDIA_FILTERS_GUILDS: arr3[2],
    } = MobileUserSettings);
    obj4.settings = items2;
    const intl4 = util.intl;
    obj4.subLabel = intl4.string(util.t.XgH9eh);
    items1[1] = obj4;
    obj2.sections = items1;
    obj2.ListHeaderComponent = ListHeaderComponent;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
}
