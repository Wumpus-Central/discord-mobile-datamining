// === Module 14001: NsfwGateGuildSettingsActionSheet ===

// Module 14001 (NsfwGateGuildSettingsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7226 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 14003 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  const messageRequestPrivacyOption = guild(14002).useMessageRequestPrivacyOption({ guild });
  const obj2 = { header: closure_3(guild(7256).BottomSheetTitleHeader, { title: guild.name }), children: null };
  const obj4 = { hasIcons: false, children: null };
  const obj5 = { label: null, onPress: null };
  const intl = guild(1115).intl;
  obj5.label = intl.string(guild(1115).t.h850Ss);
  obj5.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  const items = [closure_3(guild(7306).ActionSheetRow, obj5), closure_3(guild(14003).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj6 = { variant: "danger", label: null, onPress: null };
  const intl2 = guild(1115).intl;
  obj6.label = intl2.string(guild(1115).t.J2TBi3);
  obj6.onPress = function onPress() {
    return GuildActionSheetActions.handleLeaveServer(guild);
  };
  items[3] = closure_3(guild(7306).ActionSheetRow, obj6);
  obj4.children = items;
  obj2.children = closure_4(guild(7306).ActionSheetRow.Group, obj4);
  return closure_3(guild(7304).ActionSheet, obj2);
};