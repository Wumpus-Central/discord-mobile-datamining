// === Module 15045: UserSettingsCommunityNotifications ===

// Module 15045 (UserSettingsCommunityNotifications)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1115 */;
import TableRowGroup from "TableRowGroup" /* 5994 */;
import TableSwitchRow from "TableSwitchRow" /* 6616 */;
import noop from "module_19" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 9529 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let closure_6 = createStyles.createStyles({ container: { paddingHorizontal: 16 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx");

export default function UserSettingsCommunityNotifications() {
  const tmp = closure_6();
  let items = [GuildIncidentsStore];
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
            const result = stateFromStores(2025).updateUserGuildSettings(closure_0, (disableRaidAlertNag) => {
              disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
            }, stateFromStores(2025).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          const items = [React4(TableSwitchRow.TableSwitchRow, obj2), ];
          const obj3 = { label: null, value: null, onValueChange: null };
          const intl2 = util.intl;
          obj3.label = intl2.string(util.t.P8MG6q);
          obj3.value = !stateFromStores[item].disableRaidAlertPush;
          obj3.onValueChange = function onValueChange() {
            const result = stateFromStores(2025).updateUserGuildSettings(closure_0, (disableRaidAlertPush) => {
              disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
            }, stateFromStores(2025).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          items[1] = React4(TableSwitchRow.TableSwitchRow, obj3);
          obj.children = items;
          return hasOwnProperty(TableRowGroup.TableRowGroup, obj, item);
        })
    };
    obj3.children = closure_4(tmp2(5272).Stack, obj4);
    tmp5 = closure_4(tmp2(8045).Form, obj3);
  }
  return tmp5;
};