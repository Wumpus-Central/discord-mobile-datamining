// === Module 13908: NsfwGateGuildSettingsActionSheet ===

// Module 13908 (NsfwGateGuildSettingsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13910 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  let obj = guild(13909);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  obj = { header: null, children: null };
  obj = { title: guild.name };
  obj.header = closure_3(guild(7149).BottomSheetTitleHeader, obj);
  const obj1 = { hasIcons: false, children: null };
  const obj2 = { label: null, onPress: null };
  const intl = guild(1114).intl;
  obj2.label = intl.string(guild(1114).t.h850Ss);
  obj2.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  const items = [closure_3(guild(7200).ActionSheetRow, obj2), closure_3(guild(13910).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj3 = { variant: "danger", label: null, onPress: null };
  const intl2 = guild(1114).intl;
  obj3.label = intl2.string(guild(1114).t.J2TBi3);
  obj3.onPress = function onPress() {
    return GuildActionSheetActions.handleLeaveServer(guild);
  };
  items[3] = closure_3(guild(7200).ActionSheetRow, obj3);
  obj1.children = items;
  obj.children = closure_4(guild(7200).ActionSheetRow.Group, obj1);
  return closure_3(guild(7198).ActionSheet, obj);
};