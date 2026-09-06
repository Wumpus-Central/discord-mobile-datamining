// === Module 15518: UserSettingsCommunityNotifications ===

// Module 15518 (UserSettingsCommunityNotifications)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1114 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import noop from "module_19" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10080 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { paddingHorizontal: 16 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx");

export default function UserSettingsCommunityNotifications() {
  let obj = stateFromStores(504);
  let items = [GuildIncidentsStore];
  stateFromStores = obj.useStateFromStores(items, () => guildAlertSettings.getGuildAlertSettings());
  const tmp = closure_6();
  const keys = SnowflakeUtilsDefault.keys(stateFromStores);
  let tmp5 = null;
  if (0 !== keys.length) {
    obj = { children: null };
    obj = {
      spacing: 24,
      style: tmp.container,
      children: keys.map((item) => {
          closure_0 = item;
          let obj = { title: stateFromStores[item].guildName, hasIcons: false, children: null };
          obj = { label: null, value: null, onValueChange: null };
          const intl = util.intl;
          obj.label = intl.string(util.t.u6dc5B);
          obj.value = !stateFromStores[item].disableRaidAlertNag;
          obj.onValueChange = function onValueChange() {
            const result = stateFromStores(1940).updateUserGuildSettings(closure_0, (disableRaidAlertNag) => {
              disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
            }, stateFromStores(1940).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          const items = [React4(TableSwitchRow.TableSwitchRow, obj), ];
          obj = { label: null, value: null, onValueChange: null };
          const intl2 = util.intl;
          obj.label = intl2.string(util.t.P8MG6q);
          obj.value = !stateFromStores[item].disableRaidAlertPush;
          obj.onValueChange = function onValueChange() {
            const result = stateFromStores(1940).updateUserGuildSettings(closure_0, (disableRaidAlertPush) => {
              disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
            }, stateFromStores(1940).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          items[1] = React4(TableSwitchRow.TableSwitchRow, obj);
          obj.children = items;
          return hasOwnProperty(TableRowGroup.TableRowGroup, obj, item);
        })
    };
    obj.children = closure_4(tmp2(4973).Stack, obj);
    tmp5 = closure_4(tmp2(8593).Form, obj);
  }
  return tmp5;
};