// === Module 14828: UserSettingsCommunityNotifications ===

// Module 14828 (UserSettingsCommunityNotifications)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import noopAll from "noop" /* 19 */;
import computeAlertSettings from "computeAlertSettings" /* 10014 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { paddingHorizontal: 16 } });
let result = require("obj132").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx");

export default function UserSettingsCommunityNotifications() {
  let obj = stateFromStores(589);
  let items = [closure_3];
  stateFromStores = obj.useStateFromStores(items, () => guildAlertSettings.getGuildAlertSettings());
  const tmp = callback2();
  const keys = DISCORD_EPOCHDefault.keys(stateFromStores);
  let tmp5 = null;
  if (0 !== keys.length) {
    obj = { spacing: 24, style: null, children: null };
    obj[1] = tmp.container;
    obj[2] = keys.map((item, index) => {
      stateFromStores = item;
      let obj = { label: null, value: null, onValueChange: null };
      const intl = stateFromStores(dependencyMap[10]).intl;
      obj[0] = intl.string(stateFromStores(dependencyMap[10]).t.u6dc5B);
      obj[1] = !stateFromStores[item].disableRaidAlertNag;
      obj[2] = function onValueChange() {
        const result = item(closure_1_2[11]).updateUserGuildSettings(item, (disableRaidAlertNag) => {
          disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
        }, item(closure_1_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
      };
      const items = [closure_1_4(stateFromStores(dependencyMap[9]).TableSwitchRow, obj), ];
      obj = { label: null, value: null, onValueChange: null };
      const intl2 = stateFromStores(dependencyMap[10]).intl;
      obj[0] = intl2.string(stateFromStores(dependencyMap[10]).t.P8MG6q);
      obj[1] = !stateFromStores[item].disableRaidAlertPush;
      obj[2] = function onValueChange() {
        const result = item(closure_1_2[11]).updateUserGuildSettings(item, (disableRaidAlertPush) => {
          disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
        }, item(closure_1_2[11]).UserSettingsDelay.INFREQUENT_USER_ACTION);
      };
      items[1] = closure_1_4(stateFromStores(dependencyMap[9]).TableSwitchRow, obj);
      obj[2] = items;
      return closure_1_5(stateFromStores(dependencyMap[8]).TableRowGroup, obj, item);
    });
    obj[0] = callback(tmp2(4733).Stack, obj);
    tmp5 = callback(tmp2(8083).Form, obj);
  }
  return tmp5;
};