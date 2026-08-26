// discord_app/modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx
import DISCORD_EPOCHDefault from "../../../../utils/SnowflakeUtils.tsx";
import noopAll from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../guild_antiraid/GuildIncidentsStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { paddingHorizontal: 16 } });
let result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx");

export default function UserSettingsCommunityNotifications() {
  let obj = stateFromStores(589);
  let items = [closure_3];
  stateFromStores = obj.useStateFromStores(items, () => guildAlertSettings.getGuildAlertSettings());
  const tmp = callback2();
  const keys = DISCORD_EPOCHDefault.keys(stateFromStores);
  let tmp5 = null;
  if (0 !== keys.length) {
    obj = { children: null };
    obj = { spacing: 24, style: null, children: null };
    obj[1] = tmp.container;
    obj[2] = keys.map((arg0) => {
      stateFromStores = arg0;
      let obj = { title: stateFromStores[arg0].guildName, hasIcons: false, children: null };
      obj = { label: null, value: null, onValueChange: null };
      const intl = stateFromStores(closure_1_2[10]).intl;
      obj[0] = intl.string(stateFromStores(closure_1_2[10]).t.u6dc5B);
      obj[1] = !stateFromStores[arg0].disableRaidAlertNag;
      obj[2] = function onValueChange() {
        const result = callback(closure_1_2[11]).updateUserGuildSettings(callback, (disableRaidAlertNag) => {
          disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
        }, callback(closure_1_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
      };
      const items = [closure_1_4(stateFromStores(closure_1_2[9]).TableSwitchRow, obj), ];
      obj = { label: null, value: null, onValueChange: null };
      const intl2 = stateFromStores(closure_1_2[10]).intl;
      obj[0] = intl2.string(stateFromStores(closure_1_2[10]).t.P8MG6q);
      obj[1] = !stateFromStores[arg0].disableRaidAlertPush;
      obj[2] = function onValueChange() {
        const result = callback(closure_1_2[11]).updateUserGuildSettings(callback, (disableRaidAlertPush) => {
          disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
        }, callback(closure_1_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
      };
      items[1] = closure_1_4(stateFromStores(closure_1_2[9]).TableSwitchRow, obj);
      obj[2] = items;
      return closure_1_5(stateFromStores(closure_1_2[8]).TableRowGroup, obj, arg0);
    });
    obj[0] = callback(tmp2(4877).Stack, obj);
    tmp5 = callback(tmp2(8185).Form, obj);
  }
  return tmp5;
};