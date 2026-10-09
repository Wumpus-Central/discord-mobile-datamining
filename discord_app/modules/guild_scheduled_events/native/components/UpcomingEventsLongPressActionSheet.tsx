// discord_app/modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const View = fn(17).View;
const ReadStateTypes = fn(5974).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let closure_9 = createStyles.createStyles({ headerIcon: { marginRight: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UpcomingEventsLongPressActionSheet(guildId) {
      const cResult = guildId(576).c(35);
      guildId = guildId.guildId;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function _() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserGuildSettingsStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        const fn2 = function f() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        };
        cResult[4] = guildId;
        cResult[5] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult = guildId(504);
      const stateFromStores1 = guildId(504).useStateFromStores(tmp9, tmp11);
      if (cResult[6] !== stateFromStores) {
        const obj2 = { guild: stateFromStores, size: tmp(6165).GuildIconSizes.LARGE };
        const tmp17 = closure_7(stateFromStores1(6165), obj2);
        cResult[6] = stateFromStores;
        cResult[7] = tmp17;
        let tmp13 = tmp17;
        const tmp16 = stateFromStores1(6165);
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4.headerIcon) {
        if (cResult[9] === tmp13) {
          let tmp18 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.tlopTM);
          cResult[11] = stringResult;
          let tmp20 = stringResult;
        } else {
          tmp20 = cResult[11];
        }
        if (cResult[12] !== tmp18) {
          const obj3 = { leading: tmp18, title: tmp20 };
          const tmp24 = closure_7(tmp(6835).BottomSheetTitleHeader, obj3);
          cResult[12] = tmp18;
          cResult[13] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[13];
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { source: stateFromStores1(12038) };
          const tmp28 = closure_7(tmp(1200).Icon, obj4);
          cResult[14] = tmp28;
          let tmp25 = tmp28;
        } else {
          tmp25 = cResult[14];
        }
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { text: null };
          const intl2 = tmp(1126).intl;
          obj5.text = intl2.string(tmp(1126).t.e6RscS);
          const tmp31 = closure_7(tmp(8563).FormLabel, obj5);
          cResult[15] = tmp31;
          let tmp29 = tmp31;
        } else {
          tmp29 = cResult[15];
        }
        if (cResult[16] !== guildId) {
          const obj6 = {
            leading: tmp25,
            label: tmp29,
            onPress() {
              ReadStateActionCreators.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
              ActionSheetActionCreatorsDefault.hideActionSheet();
            },
          };
          const tmp34 = closure_7(tmp(8563).FormRow, obj6);
          cResult[16] = guildId;
          cResult[17] = tmp34;
          let tmp32 = tmp34;
        } else {
          tmp32 = cResult[17];
        }
        const tmp35 = stateFromStores1(stateFromStores1 ? 12039 : 12040);
        if (cResult[18] !== tmp35) {
          const obj7 = { source: tmp35 };
          const tmp38 = closure_7(tmp(1200).Icon, obj7);
          cResult[18] = tmp35;
          cResult[19] = tmp38;
          let tmp36 = tmp38;
        } else {
          tmp36 = cResult[19];
        }
        if (cResult[20] !== stateFromStores1) {
          const intl3 = tmp(1126).intl;
          const string = intl3.string;
          let COiLo0 = tmp(1126).t;
          if (stateFromStores1) {
            COiLo0 = COiLo0.COiLo0;
            let stringResult1 = string(COiLo0);
          } else {
            stringResult1 = string(COiLo0.ONG3Yz);
          }
          cResult[20] = stateFromStores1;
          cResult[21] = stringResult1;
        } else {
          if (cResult[22] !== cResult[21]) {
            const obj8 = { text: tmp39 };
            const tmp44 = closure_7(tmp(8563).FormLabel, obj8);
            cResult[22] = tmp39;
            cResult[23] = tmp44;
            let tmp42 = tmp44;
          } else {
            tmp42 = cResult[23];
          }
          if (cResult[24] === guildId) {
            if (cResult[25] === stateFromStores1) {
              let tmp45 = cResult[26];
            }
            if (cResult[27] === tmp36) {
              if (cResult[28] === tmp42) {
                if (cResult[29] === tmp45) {
                  let tmp46 = cResult[30];
                }
                if (cResult[31] === tmp32) {
                  if (cResult[32] === tmp46) {
                    if (cResult[33] === tmp22) {
                      let tmp49 = cResult[34];
                    }
                    return tmp49;
                  }
                }
                const obj9 = { children: null };
                const items2 = [tmp22, tmp32, tmp46];
                obj9.children = items2;
                const tmp51 = closure_8(tmp(6892).ActionSheet, obj9);
                cResult[31] = tmp32;
                cResult[32] = tmp46;
                cResult[33] = tmp22;
                cResult[34] = tmp51;
                tmp49 = tmp51;
              }
            }
            const obj10 = { leading: tmp36, label: tmp42, onPress: tmp45 };
            const tmp48 = closure_7(tmp(8563).FormRow, obj10);
            cResult[27] = tmp36;
            cResult[28] = tmp42;
            cResult[29] = tmp45;
            cResult[30] = tmp48;
            tmp46 = tmp48;
          }
          const fn3 = function w() {
            const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
            const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
              guildId,
              { mute_scheduled_events: !stateFromStores1 },
              NotificationLabel.mutedEvents(!stateFromStores1),
            );
          };
          cResult[24] = guildId;
          cResult[25] = stateFromStores1;
          cResult[26] = fn3;
          tmp45 = fn3;
        }
      }
      const tmp19 = closure_7(View, { style: tmp4.headerIcon, children: tmp13 });
      cResult[8] = tmp4.headerIcon;
      cResult[9] = tmp13;
      cResult[10] = tmp19;
      tmp18 = tmp19;
      const obj11 = { style: tmp4.headerIcon, children: tmp13 };
      const tmpResult2 = guildId(504);
    }
  : function UpcomingEventsLongPressActionSheet(guildId) {
      guildId = guildId.guildId;
      const tmp = closure_9();
      const items = [GuildStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj = guildId(504);
      const items1 = [UserGuildSettingsStore];
      const stateFromStores1 = guildId(504).useStateFromStores(items1, () =>
        UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId),
      );
      const obj3 = { leading: null, title: null };
      const obj4 = { style: tmp.headerIcon, children: null };
      const obj5 = { guild: stateFromStores, size: null };
      const obj2 = guildId(504);
      const tmp8 = stateFromStores1;
      obj5.size = guildId(6165).GuildIconSizes.LARGE;
      obj4.children = closure_7(stateFromStores1(6165), obj5);
      obj3.leading = closure_7(View, obj4);
      const intl = guildId(1126).intl;
      obj3.title = intl.string(guildId(1126).t.tlopTM);
      const items2 = [closure_7(guildId(6835).BottomSheetTitleHeader, obj3), ,];
      const obj6 = { leading: null, label: null, onPress: null };
      const tmp9 = stateFromStores1(6165);
      obj6.leading = closure_7(guildId(1200).Icon, { source: stateFromStores1(12038) });
      const obj8 = { text: null };
      const intl2 = guildId(1126).intl;
      obj8.text = intl2.string(guildId(1126).t.e6RscS);
      obj6.label = closure_7(guildId(8563).FormLabel, obj8);
      obj6.onPress = function onPress() {
        ReadStateActionCreators.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      items2[1] = closure_7(guildId(8563).FormRow, obj6);
      const obj9 = { leading: null, label: null, onPress: null };
      const obj7 = { source: stateFromStores1(12038) };
      obj9.leading = closure_7(guildId(1200).Icon, { source: tmp8(stateFromStores1 ? 12039 : 12040) });
      const intl3 = tmp2(1126).intl;
      const string = intl3.string;
      const t = tmp2(1126).t;
      if (stateFromStores1) {
        let stringResult = string(t.COiLo0);
      } else {
        stringResult = string(t.ONG3Yz);
      }
      const obj11 = { children: null };
      obj9.label = closure_7(guildId(8563).FormLabel, { text: stringResult });
      obj9.onPress = function onPress() {
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
          guildId,
          { mute_scheduled_events: !stateFromStores1 },
          NotificationLabel.mutedEvents(!stateFromStores1),
        );
      };
      items2[2] = closure_7(guildId(8563).FormRow, obj9);
      obj11.children = items2;
      return closure_8(guildId(6892).ActionSheet, obj11);
    };
