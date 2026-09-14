// discord_app/modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import GuildActionSheetActions from "../../../guild_action_sheet/native/components/GuildActionSheetActions.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  const messageRequestPrivacyOption = guild(13997).useMessageRequestPrivacyOption({ guild });
  const obj2 = { header: closure_3(guild(7252).BottomSheetTitleHeader, { title: guild.name }), children: null };
  const obj4 = { hasIcons: false, children: null };
  const obj5 = { label: null, onPress: null };
  const intl = guild(1114).intl;
  obj5.label = intl.string(guild(1114).t.h850Ss);
  obj5.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  const items = [
    closure_3(guild(7302).ActionSheetRow, obj5),
    closure_3(guild(13998).RestrictedGuildPrivacyOption, { guild }),
    messageRequestPrivacyOption,
  ];
  const obj6 = { variant: "danger", label: null, onPress: null };
  const intl2 = guild(1114).intl;
  obj6.label = intl2.string(guild(1114).t.J2TBi3);
  obj6.onPress = function onPress() {
    return GuildActionSheetActions.handleLeaveServer(guild);
  };
  items[3] = closure_3(guild(7302).ActionSheetRow, obj6);
  obj4.children = items;
  obj2.children = closure_4(guild(7302).ActionSheetRow.Group, obj4);
  return closure_3(guild(7300).ActionSheet, obj2);
}
