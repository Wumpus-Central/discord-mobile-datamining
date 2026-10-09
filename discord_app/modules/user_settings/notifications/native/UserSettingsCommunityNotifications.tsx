// === Module 15735: UserSettingsCommunityNotifications ===

// Module 15735 (UserSettingsCommunityNotifications)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1126 */;
import TableRowGroup from "TableRowGroup" /* 6269 */;
import TableSwitchRow from "TableSwitchRow" /* 6889 */;
import noop from "module_19" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10660 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({ container: { paddingHorizontal: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsCommunityNotifications() {
  const cResult = stateFromStores(576).c(20);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildIncidentsStore];
    const fn = function u() {
      return guildAlertSettings.getGuildAlertSettings();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === tmp4) {
      let tmp14 = cResult[9];
    }
    const _Symbol = Symbol;
    if (tmp14 !== Symbol.for("react.early_return_sentinel")) {
      return tmp14;
    } else {
      if (cResult[12] === tmp9) {
        if (cResult[13] === tmp11) {
          if (cResult[14] === tmp12) {
            if (cResult[15] === tmp13) {
              let tmp19 = cResult[16];
            }
            if (cResult[17] === tmp10) {
            }
            let obj2 = { children: tmp19 };
            const tmp24 = closure_4(tmp10, obj2);
            cResult[17] = tmp10;
            cResult[18] = tmp19;
            cResult[19] = tmp24;
          }
        }
      }
      const obj4 = { spacing: tmp11, style: tmp12, children: tmp13 };
      const tmp21 = closure_4(tmp9, obj4);
      cResult[12] = tmp9;
      cResult[13] = tmp11;
      cResult[14] = tmp12;
      cResult[15] = tmp13;
      cResult[16] = tmp21;
      tmp19 = tmp21;
    }
  }
  const tmpResult = stateFromStores(504);
  const forResult = Symbol.for("react.early_return_sentinel");
  const keys = SnowflakeUtilsDefault.keys(stateFromStores);
  if (0 === keys.length) {
    cResult[2] = stateFromStores;
    cResult[3] = tmp4;
    cResult[4] = undefined;
    cResult[5] = undefined;
    cResult[6] = undefined;
    cResult[7] = undefined;
    cResult[8] = undefined;
    cResult[9] = null;
    tmp14 = null;
  } else {
    if (cResult[10] !== stateFromStores) {
      const fn2 = function p(id) {
        closure_0 = id;
        const obj = { title: stateFromStores[id].guildName, hasIcons: false, children: null };
        const obj2 = { label: null, value: null, onValueChange: null };
        const intl = util.intl;
        obj2.label = intl.string(util.t.u6dc5B);
        obj2.value = !stateFromStores[id].disableRaidAlertNag;
        obj2.onValueChange = function onValueChange() {
          const result = stateFromStores(2046).updateUserGuildSettings(closure_0, (disableRaidAlertNag) => {
            disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
          }, stateFromStores(2046).UserSettingsDelay.INFREQUENT_USER_ACTION);
        };
        const items = [React4(TableSwitchRow.TableSwitchRow, obj2), ];
        const obj3 = { label: null, value: null, onValueChange: null };
        const intl2 = util.intl;
        obj3.label = intl2.string(util.t.P8MG6q);
        obj3.value = !stateFromStores[id].disableRaidAlertPush;
        obj3.onValueChange = function onValueChange() {
          const result = stateFromStores(2046).updateUserGuildSettings(closure_0, (disableRaidAlertPush) => {
            disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
          }, stateFromStores(2046).UserSettingsDelay.INFREQUENT_USER_ACTION);
        };
        items[1] = React4(TableSwitchRow.TableSwitchRow, obj3);
        obj.children = items;
        return hasOwnProperty(TableRowGroup.TableRowGroup, obj, id);
      };
      cResult[10] = stateFromStores;
      cResult[11] = fn2;
      let tmp16 = fn2;
    } else {
      tmp16 = cResult[11];
    }
    const mapped = keys.map(tmp16);
    const container = tmp4.container;
    const Form = tmp(8563).Form;
    const Stack = tmp(5374).Stack;
  }
}) : (function UserSettingsCommunityNotifications() {
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
            const result = stateFromStores(2046).updateUserGuildSettings(closure_0, (disableRaidAlertNag) => {
              disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
            }, stateFromStores(2046).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          const items = [React4(TableSwitchRow.TableSwitchRow, obj2), ];
          const obj3 = { label: null, value: null, onValueChange: null };
          const intl2 = util.intl;
          obj3.label = intl2.string(util.t.P8MG6q);
          obj3.value = !stateFromStores[item].disableRaidAlertPush;
          obj3.onValueChange = function onValueChange() {
            const result = stateFromStores(2046).updateUserGuildSettings(closure_0, (disableRaidAlertPush) => {
              disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
            }, stateFromStores(2046).UserSettingsDelay.INFREQUENT_USER_ACTION);
          };
          items[1] = React4(TableSwitchRow.TableSwitchRow, obj3);
          obj.children = items;
          return hasOwnProperty(TableRowGroup.TableRowGroup, obj, item);
        })
    };
    obj3.children = closure_4(tmp2(5374).Stack, obj4);
    tmp5 = closure_4(tmp2(8563).Form, obj3);
  }
  return tmp5;
});