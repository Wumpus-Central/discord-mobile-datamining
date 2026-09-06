// discord_app/modules/user_settings/family_center/native/ParentalControlsSensitiveContentFiltersScreen.tsx
import util from "../../../../intl/index.native.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const MobileUserSettings = fn(7975).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/family_center/native/ParentalControlsSensitiveContentFiltersScreen.tsx",
);

export default function UserSettingsSensitiveContentFilters() {
  const node = noop.useMemo(() => {
    let obj = { sections: null };
    obj = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.GYpoAq);
    const items = [,];
    ({
      PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0],
      PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1],
    } = MobileUserSettings);
    obj.settings = items;
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t.Wnojv1);
    const items1 = [obj];
    const obj1 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj1.label = intl3.string(util.t["16/3Bi"]);
    const items2 = [,];
    ({
      PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0],
      PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1],
    } = MobileUserSettings);
    obj1.settings = items2;
    const intl4 = util.intl;
    obj1.subLabel = intl4.string(util.t.XgH9eh);
    items1[1] = obj1;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
}
