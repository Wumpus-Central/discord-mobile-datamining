// discord_app/modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow3 from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildIncidentsStore from "../../../guild_antiraid/GuildIncidentsStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj1;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { paddingHorizontal: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let guildAlertSettings;
      let stateFromStores;
      let tmp5;
      let tmp6;
      let obj = stateFromStores(576);
      const cResult = obj.c(20);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildIncidentsStore];
        const fn = function o() {
          return guildAlertSettings.getGuildAlertSettings();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === stateFromStores) {
        let tmp9;
        let tmp10;
        let tmp11;
        let tmp12;
        let tmp13;
        let tmp14;
        if (cResult[3] === tmp4) {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
          tmp11 = cResult[6];
          tmp12 = cResult[7];
          tmp13 = cResult[8];
          tmp14 = cResult[9];
        }
        const _Symbol = Symbol;
        if (tmp14 === Symbol.for("react.early_return_sentinel")) {
          if (cResult[12] === tmp9) {
            if (cResult[13] === tmp11) {
              if (cResult[14] === tmp12) {
                let tmp22;
                if (cResult[15] === tmp13) {
                  tmp22 = cResult[16];
                }
                if (cResult[17] === tmp10) {
                  let tmp25;
                  if (cResult[18] === tmp22) {
                    tmp25 = cResult[19];
                  }
                  tmp14 = tmp25;
                }
                let obj2 = { children: tmp22 };
                const tmp27 = closure_4(tmp10, obj2);
                cResult[17] = tmp10;
                cResult[18] = tmp22;
                cResult[19] = tmp27;
                tmp25 = tmp27;
              }
            }
          }
          const obj4 = { spacing: tmp11, style: tmp12, children: tmp13 };
          const tmp24 = closure_4(tmp9, obj4);
          cResult[12] = tmp9;
          cResult[13] = tmp11;
          cResult[14] = tmp12;
          cResult[15] = tmp13;
          cResult[16] = tmp24;
          tmp22 = tmp24;
        }
        return tmp14;
      }
      const forResult = Symbol.for("react.early_return_sentinel");
      let obj3 = SnowflakeUtilsDefault;
      const keys = obj3.keys(stateFromStores);
      let tmp16 = null;
      let mapped;
      let tmp18;
      let num3;
      let tmp19;
      let tmp20;
      if (0 !== keys.length) {
        const Form = tmp(8924).Form;
        const Stack = tmp(5600).Stack;
        const container = tmp4.container;
        if (cResult[10] !== stateFromStores) {
          class T {
            constructor(arg0) {
              closure_0 = arg0;
              obj = { title: closure_0[arg0].guildName, hasIcons: false, children: null };
              TableRowGroup = closure_0(closure_2[10]).TableRowGroup;
              obj1 = { label: null, value: null, onValueChange: null };
              TableSwitchRow = closure_0(closure_2[11]).TableSwitchRow;
              intl = closure_0(closure_2[12]).intl;
              obj1.label = intl.string(closure_0(closure_2[12]).t.u6dc5B);
              obj1.value = !closure_0[arg0].disableRaidAlertNag;
              obj1.onValueChange = function onValueChange() {
                const obj = stateFromStores(closure_2_2[13]);
                const result = obj.updateUserGuildSettings(
                  closure_0,
                  () => {
                    /* body not rendered: F153371 */
                  },
                  stateFromStores(closure_2_2[13]).UserSettingsDelay.INFREQUENT_USER_ACTION,
                );
              };
              items = [,];
              items[0] = jsx(TableSwitchRow, obj1);
              obj4 = { label: null, value: null, onValueChange: null };
              TableSwitchRow2 = closure_0(closure_2[11]).TableSwitchRow;
              intl2 = closure_0(closure_2[12]).intl;
              obj4.label = intl2.string(closure_0(closure_2[12]).t.P8MG6q);
              obj4.value = !closure_0[arg0].disableRaidAlertPush;
              obj4.onValueChange = function onValueChange() {
                const obj = stateFromStores(closure_2_2[13]);
                const result = obj.updateUserGuildSettings(
                  closure_0,
                  () => {
                    /* body not rendered: F153372 */
                  },
                  stateFromStores(closure_2_2[13]).UserSettingsDelay.INFREQUENT_USER_ACTION,
                );
              };
              items[1] = jsx(TableSwitchRow2, obj4);
              obj.children = items;
              return jsxs(TableRowGroup, obj, arg0);
            }
          }
          cResult[10] = stateFromStores;
          cResult[11] = T;
        } else {
          class T {
            constructor(arg0) {
              closure_0 = arg0;
              obj = { title: closure_0[arg0].guildName, hasIcons: false, children: null };
              TableRowGroup = closure_0(closure_2[10]).TableRowGroup;
              obj1 = { label: null, value: null, onValueChange: null };
              TableSwitchRow = closure_0(closure_2[11]).TableSwitchRow;
              intl = closure_0(closure_2[12]).intl;
              obj1.label = intl.string(closure_0(closure_2[12]).t.u6dc5B);
              obj1.value = !closure_0[arg0].disableRaidAlertNag;
              obj1.onValueChange = function onValueChange() {
                const obj = stateFromStores(closure_2_2[13]);
                const result = obj.updateUserGuildSettings(
                  closure_0,
                  () => {
                    /* body not rendered: F153371 */
                  },
                  stateFromStores(closure_2_2[13]).UserSettingsDelay.INFREQUENT_USER_ACTION,
                );
              };
              items = [,];
              items[0] = jsx(TableSwitchRow, obj1);
              obj4 = { label: null, value: null, onValueChange: null };
              TableSwitchRow2 = closure_0(closure_2[11]).TableSwitchRow;
              intl2 = closure_0(closure_2[12]).intl;
              obj4.label = intl2.string(closure_0(closure_2[12]).t.P8MG6q);
              obj4.value = !closure_0[arg0].disableRaidAlertPush;
              obj4.onValueChange = function onValueChange() {
                const obj = stateFromStores(closure_2_2[13]);
                const result = obj.updateUserGuildSettings(
                  closure_0,
                  () => {
                    /* body not rendered: F153372 */
                  },
                  stateFromStores(closure_2_2[13]).UserSettingsDelay.INFREQUENT_USER_ACTION,
                );
              };
              items[1] = jsx(TableSwitchRow2, obj4);
              obj.children = items;
              return jsxs(TableRowGroup, obj, arg0);
            }
          }
        }
        mapped = keys.map(T);
        num3 = 24;
        tmp16 = forResult;
        tmp18 = container;
        tmp19 = Form;
        tmp20 = Stack;
      }
      cResult[2] = stateFromStores;
      cResult[3] = tmp4;
      cResult[4] = tmp20;
      cResult[5] = tmp19;
      cResult[6] = num3;
      cResult[7] = tmp18;
      cResult[8] = mapped;
      cResult[9] = tmp16;
      tmp14 = tmp16;
      tmp13 = mapped;
      tmp12 = tmp18;
      tmp11 = num3;
      tmp10 = tmp19;
      tmp9 = tmp20;
    }
  : () => {
      let Stack;
      let guildAlertSettings;
      let obj4;
      let stateFromStores;
      const tmp = closure_6();
      let obj = stateFromStores(504);
      let items = [GuildIncidentsStore];
      stateFromStores = obj.useStateFromStores(items, () => guildAlertSettings.getGuildAlertSettings());
      let obj2 = SnowflakeUtilsDefault;
      const keys = obj2.keys(stateFromStores);
      let tmp5 = null;
      if (0 !== keys.length) {
        let obj3 = { children: closure_4(Stack, obj4) };
        const Form = tmp2(8924).Form;
        obj4 = {
          spacing: 24,
          style: tmp.container,
          children: keys.map((item) => {
            let intl;
            let intl2;
            let items;
            let closure_0 = item;
            let obj = { title: stateFromStores[item].guildName, hasIcons: false, children: items };
            const TableRowGroup = TableRowGroup2.TableRowGroup;
            const obj2 = {
              label: intl.string(intl3.t.u6dc5B),
              value: !stateFromStores[item].disableRaidAlertNag,
              onValueChange() {
                const obj = stateFromStores(closure_2_2[13]);
                const result = obj.updateUserGuildSettings(
                  closure_0,
                  (disableRaidAlertNag) => {
                    disableRaidAlertNag.disableRaidAlertNag = !disableRaidAlertNag.disableRaidAlertNag;
                  },
                  stateFromStores(closure_2_2[13]).UserSettingsDelay.INFREQUENT_USER_ACTION,
                );
              },
            };
            const TableSwitchRow = TableSwitchRow3.TableSwitchRow;
            intl = intl3.intl;
            items = [React3(TableSwitchRow, obj2)];
            const obj3 = {
              label: intl2.string(intl3.t.P8MG6q),
              value: !stateFromStores[item].disableRaidAlertPush,
              onValueChange() {
                const obj = stateFromStores(closure_2_2[13]);
                const result = obj.updateUserGuildSettings(
                  closure_0,
                  (disableRaidAlertPush) => {
                    disableRaidAlertPush.disableRaidAlertPush = !disableRaidAlertPush.disableRaidAlertPush;
                  },
                  stateFromStores(closure_2_2[13]).UserSettingsDelay.INFREQUENT_USER_ACTION,
                );
              },
            };
            const TableSwitchRow2 = TableSwitchRow3.TableSwitchRow;
            intl2 = intl3.intl;
            items[1] = React3(TableSwitchRow2, obj3);
            return hasOwnProperty(TableRowGroup, obj, item);
          }),
        };
        Stack = tmp2(5600).Stack;
        tmp5 = closure_4(Form, obj3);
      }
      return tmp5;
    };
let result = size.fileFinishedImporting(
  "modules/user_settings/notifications/native/UserSettingsCommunityNotifications.tsx",
);

export default tmp4;
