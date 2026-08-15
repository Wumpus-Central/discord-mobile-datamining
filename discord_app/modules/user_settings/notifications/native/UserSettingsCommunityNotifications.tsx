// discord_app/modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx
import "noop";
import computeAlertSettings from "computeAlertSettings";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { DISCORD_EPOCH } from "../../../../utils/SnowflakeUtils.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { paddingHorizontal: 16 } });
let result = require("jsxProd").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx");

export default function UserSettingsCommunityNotifications() {
  let obj = stateFromStores(589);
  let items = [computeAlertSettings];
  stateFromStores = obj.useStateFromStores(items, () => guildAlertSettings.getGuildAlertSettings());
  const tmp = callback2();
  const keys = DISCORD_EPOCH.keys(stateFromStores);
  let tmp5 = null;
  if (0 !== keys.length) {
    obj = { children: null };
    obj = { spacing: 24, style: null, children: null };
    obj[1] = tmp.container;
    obj[2] = keys.map((arg0) => {
      const stateFromStores = arg0;
      let obj = { title: stateFromStores[arg0].guildName, hasIcons: false, children: null };
      obj = { label: null, value: null, onValueChange: null };
      const intl = stateFromStores(outer1_2[10]).intl;
      obj[0] = intl.string(stateFromStores(outer1_2[10]).t.u6dc5B);
      obj[1] = !stateFromStores[arg0].disableRaidAlertNag;
      obj[2] = function onValueChange() {
        const result = callback(outer1_2[11]).updateUserGuildSettings(callback, (disableRaidAlertNag) => {
          disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
        }, callback(outer1_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
      };
      const items = [outer1_4(stateFromStores(outer1_2[9]).TableSwitchRow, obj), ];
      obj = { label: null, value: null, onValueChange: null };
      const intl2 = stateFromStores(outer1_2[10]).intl;
      obj[0] = intl2.string(stateFromStores(outer1_2[10]).t.P8MG6q);
      obj[1] = !stateFromStores[arg0].disableRaidAlertPush;
      obj[2] = function onValueChange() {
        const result = callback(outer1_2[11]).updateUserGuildSettings(callback, (disableRaidAlertPush) => {
          disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
        }, callback(outer1_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
      };
      items[1] = outer1_4(stateFromStores(outer1_2[9]).TableSwitchRow, obj);
      obj[2] = items;
      return outer1_5(stateFromStores(outer1_2[8]).TableRowGroup, obj, arg0);
    });
    obj[0] = callback(tmp2(4733).Stack, obj);
    tmp5 = callback(tmp2(8083).Form, obj);
  }
  return tmp5;
};