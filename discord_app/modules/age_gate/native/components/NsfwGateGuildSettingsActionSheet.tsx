// discord_app/modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("MessageRequestRestrictedGuildPrivacyOption").fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  let obj = guild(13266);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  obj = { header: null, children: null };
  obj = { title: guild.name };
  obj[0] = callback(guild(5396).BottomSheetTitleHeader, obj);
  const obj1 = { hasIcons: false, children: null };
  const obj2 = { label: null, onPress: null };
  const intl = guild(1236).intl;
  obj2[0] = intl.string(guild(1236).t.h850Ss);
  obj2[1] = function onPress() {
    outer1_1(outer1_2[7]).hideActionSheet();
    const obj = outer1_1(outer1_2[7]);
    outer1_1(outer1_2[8]).open(guild.id);
  };
  const items = [callback(guild(5766).ActionSheetRow, obj2), callback(guild(13267).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj3 = { variant: "danger", label: null, onPress: null };
  const intl2 = guild(1236).intl;
  obj3[1] = intl2.string(guild(1236).t.J2TBi3);
  obj3[2] = function onPress() {
    return guild(outer1_2[9]).handleLeaveServer(guild);
  };
  items[3] = callback(guild(5766).ActionSheetRow, obj3);
  obj1[1] = items;
  obj[1] = callback2(guild(5766).ActionSheetRow.Group, obj1);
  return callback(guild(5764).ActionSheet, obj);
};