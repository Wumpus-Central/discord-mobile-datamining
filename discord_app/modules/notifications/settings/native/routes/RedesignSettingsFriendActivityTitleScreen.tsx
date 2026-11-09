// === Module 18305: RedesignSettingsFriendActivityTitleScreen ===

// Module 18305 (RedesignSettingsFriendActivityTitleScreen)
import SettingBuilders from "SettingBuilders" /* 11685 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18295 */;
import EffectiveNotifSettingsLayoutDefault from "EffectiveNotifSettingsLayout" /* 18300 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsFriendActivityTitleScreen.tsx");

export default noop.memo(function RedesignSettingsFriendActivityTitleScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    items = [MobileNotifSettingsRouteBuilders.buildFriendActivityTitleSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(EffectiveNotifSettingsLayoutDefault, { node });
});