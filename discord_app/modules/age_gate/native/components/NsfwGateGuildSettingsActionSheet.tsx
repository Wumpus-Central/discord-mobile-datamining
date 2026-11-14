// === Module 16346: NsfwGateGuildSettingsActionSheet ===

// Module 16346 (NsfwGateGuildSettingsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7883 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 16348 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  const messageRequestPrivacyOption = guild(16347).useMessageRequestPrivacyOption({ guild });
  const obj2 = { header: closure_3(guild(7913).BottomSheetTitleHeader, { title: guild.name }), children: null };
  const obj4 = { hasIcons: false, children: null };
  const obj5 = { label: null, onPress: null };
  const intl = guild(1113).intl;
  obj5.label = intl.string(guild(1113).t.h850Ss);
  obj5.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  items = [closure_3(guild(7953).ActionSheetRow, obj5), closure_3(guild(16348).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj6 = { variant: "danger", label: null, onPress: null };
  const intl2 = guild(1113).intl;
  obj6.label = intl2.string(guild(1113).t.J2TBi3);
  obj6.onPress = function onPress() {
    return GuildActionSheetActions.handleLeaveServer(guild);
  };
  items[3] = closure_3(guild(7953).ActionSheetRow, obj6);
  obj4.children = items;
  obj2.children = closure_4(guild(7953).ActionSheetRow.Group, obj4);
  return closure_3(guild(7951).ActionSheet, obj2);
};