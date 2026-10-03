// discord_app/modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import GuildActionSheetActions from "../../../guild_action_sheet/native/components/GuildActionSheetActions.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = guild(576).c(20);
      guild = guild.guild;
      if (cResult[0] !== guild) {
        const obj2 = { guild };
        cResult[0] = guild;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      let obj = guild(576);
      const messageRequestPrivacyOption = guild(13720).useMessageRequestPrivacyOption(tmp4);
      if (cResult[2] !== guild.name) {
        const obj3 = { title: guild.name };
        const tmp8 = closure_3(tmp(6644).BottomSheetTitleHeader, obj3);
        cResult[2] = guild.name;
        cResult[3] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.h850Ss);
        cResult[4] = stringResult;
        let tmp9 = stringResult;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== guild.id) {
        const obj4 = {
          label: tmp9,
          onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            NotificationSettingsModalActionCreatorsDefault.open(guild.id);
          },
        };
        const tmp13 = closure_3(tmp(6697).ActionSheetRow, obj4);
        cResult[5] = guild.id;
        cResult[6] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== guild) {
        const obj5 = { guild };
        const tmp16 = closure_3(tmp(13721).RestrictedGuildPrivacyOption, obj5);
        cResult[7] = guild;
        cResult[8] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.J2TBi3);
        cResult[9] = stringResult1;
        let tmp17 = stringResult1;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] !== guild) {
        const obj6 = {
          variant: "danger",
          label: tmp17,
          onPress() {
            return GuildActionSheetActions.handleLeaveServer(guild);
          },
        };
        const tmp21 = closure_3(tmp(6697).ActionSheetRow, obj6);
        cResult[10] = guild;
        cResult[11] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] === messageRequestPrivacyOption) {
        if (cResult[13] === tmp11) {
          if (cResult[14] === tmp14) {
            if (cResult[15] === tmp19) {
              let tmp22 = cResult[16];
            }
            if (cResult[17] === tmp6) {
              if (cResult[18] === tmp22) {
                let tmp24 = cResult[19];
              }
              return tmp24;
            }
            const obj7 = { header: tmp6, children: tmp22 };
            const tmp26 = closure_3(tmp(6701).ActionSheet, obj7);
            cResult[17] = tmp6;
            cResult[18] = tmp22;
            cResult[19] = tmp26;
            tmp24 = tmp26;
          }
        }
      }
      const obj8 = { hasIcons: false, children: null };
      const items = [tmp11, tmp14, messageRequestPrivacyOption, tmp19];
      obj8.children = items;
      const tmp23 = closure_4(guild(6697).ActionSheetRow.Group, obj8);
      cResult[12] = messageRequestPrivacyOption;
      cResult[13] = tmp11;
      cResult[14] = tmp14;
      cResult[15] = tmp19;
      cResult[16] = tmp23;
      tmp22 = tmp23;
      const tmpResult = guild(13720);
    }
  : (guild) => {
      guild = guild.guild;
      const messageRequestPrivacyOption = guild(13720).useMessageRequestPrivacyOption({ guild });
      const obj2 = { header: closure_3(guild(6644).BottomSheetTitleHeader, { title: guild.name }), children: null };
      const obj4 = { hasIcons: false, children: null };
      const obj5 = { label: null, onPress: null };
      const intl = guild(1126).intl;
      obj5.label = intl.string(guild(1126).t.h850Ss);
      obj5.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        NotificationSettingsModalActionCreatorsDefault.open(guild.id);
      };
      const items = [
        closure_3(guild(6697).ActionSheetRow, obj5),
        closure_3(guild(13721).RestrictedGuildPrivacyOption, { guild }),
        messageRequestPrivacyOption,
      ];
      const obj6 = { variant: "danger", label: null, onPress: null };
      const intl2 = guild(1126).intl;
      obj6.label = intl2.string(guild(1126).t.J2TBi3);
      obj6.onPress = function onPress() {
        return GuildActionSheetActions.handleLeaveServer(guild);
      };
      items[3] = closure_3(guild(6697).ActionSheetRow, obj6);
      obj4.children = items;
      obj2.children = closure_4(guild(6697).ActionSheetRow.Group, obj4);
      return closure_3(guild(6701).ActionSheet, obj2);
    };
