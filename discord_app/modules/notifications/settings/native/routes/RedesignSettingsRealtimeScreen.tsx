// === Module 15750: RedesignSettingsRealtimeScreen ===

// Module 15750 (RedesignSettingsRealtimeScreen)
import SettingBuilders from "SettingBuilders" /* 11211 */;
import SettingLayoutDefault from "SettingLayout" /* 14454 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15745 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsRealtimeScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildRealtimeSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});