// === Module 17128: UserSettingsCommunityNotifications ===

// Module 17128 (UserSettingsCommunityNotifications)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import TableRowGroup from "TableRowGroup" /* 6140 */;
import TableSwitchRow from "TableSwitchRow" /* 7549 */;
import noop from "module_19" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10596 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx");

export default function UserSettingsCommunityNotifications() {
  const tmp = closure_6();
  items = [GuildIncidentsStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => guildAlertSettings.getGuildAlertSettings());
  let obj = stateFromStores(504);
  const keys = SnowflakeUtilsDefault.keys(stateFromStores);
  let tmp5 = null;
  if (0 !== keys.length) {
    let obj3 = { children: null };
    const obj4 = {
      spacing: 24,
      style: tmp.container,
      children: keys.map((item) => {
          closure_0 = item;
          const obj = { title: stateFromStores[item].guildName, hasIcons: false, children: null };
          const obj2 = { label: null, value: null, onValueChange: null };
          const intl = util.intl;
          obj2.label = intl.string(util.t.u6dc5B);
          obj2.value = !stateFromStores[item].disableRaidAlertNag;
          obj2.onValueChange = function onValueChange() {
            const result = stateFromStores(4873).updateUserGuildSettings(closure_0, (disableRaidAlertNag) => {
              disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
            }, stateFromStores(4873).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          items = [React4(TableSwitchRow.TableSwitchRow, obj2), ];
          const obj3 = { label: null, value: null, onValueChange: null };
          const intl2 = util.intl;
          obj3.label = intl2.string(util.t.P8MG6q);
          obj3.value = !stateFromStores[item].disableRaidAlertPush;
          obj3.onValueChange = function onValueChange() {
            const result = stateFromStores(4873).updateUserGuildSettings(closure_0, (disableRaidAlertPush) => {
              disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
            }, stateFromStores(4873).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          items[1] = React4(TableSwitchRow.TableSwitchRow, obj3);
          obj.children = items;
          return hasOwnProperty(TableRowGroup.TableRowGroup, obj, item);
        })
    };
    obj3.children = closure_4(tmp2(6115).Stack, obj4);
    tmp5 = closure_4(tmp2(8088).Form, obj3);
  }
  return tmp5;
};