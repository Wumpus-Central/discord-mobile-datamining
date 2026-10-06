// === Module 13739: NsfwGateGuildSettingsActionSheet ===

// Module 13739 (NsfwGateGuildSettingsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13741 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guild;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let items;
  let tmp11;
  let tmp14;
  let tmp17;
  let tmp19;
  let tmp4;
  let tmp6;
  let tmp9;
  let obj = guild(576);
  const cResult = obj.c(20);
  guild = guild.guild;
  if (cResult[0] !== guild) {
    let obj2 = { guild };
    cResult[0] = guild;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = guild(13740);
  const messageRequestPrivacyOption = tmpResult.useMessageRequestPrivacyOption(tmp4);
  if (cResult[2] !== guild.name) {
    const obj3 = { title: guild.name };
    const tmp8 = closure_3(guild(6651).BottomSheetTitleHeader, obj3);
    cResult[2] = guild.name;
    cResult[3] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(guild(1126).t.h850Ss);
    cResult[4] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== guild.id) {
    const obj4 = {
      label: tmp9,
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = NotificationSettingsModalActionCreatorsDefault;
          obj2.open(guild.id);
        }
    };
    const tmp13 = closure_3(guild(6704).ActionSheetRow, obj4);
    cResult[5] = guild.id;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] !== guild) {
    const obj5 = { guild };
    const tmp16 = closure_3(guild(13741).RestrictedGuildPrivacyOption, obj5);
    cResult[7] = guild;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(guild(1126).t.J2TBi3);
    cResult[9] = stringResult1;
    tmp17 = stringResult1;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] !== guild) {
    const obj6 = {
      variant: "danger",
      label: tmp17,
      onPress() {
          const obj = GuildActionSheetActions;
          return obj.handleLeaveServer(guild);
        }
    };
    const tmp21 = closure_3(guild(6704).ActionSheetRow, obj6);
    cResult[10] = guild;
    cResult[11] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[11];
  }
  if (cResult[12] === messageRequestPrivacyOption) {
    if (cResult[13] === tmp11) {
      if (cResult[14] === tmp14) {
        let tmp22;
        if (cResult[15] === tmp19) {
          tmp22 = cResult[16];
        }
        if (cResult[17] === tmp6) {
          let tmp24;
          if (cResult[18] === tmp22) {
            tmp24 = cResult[19];
          }
          return tmp24;
        }
        const obj7 = { header: tmp6, children: tmp22 };
        const tmp26 = closure_3(guild(6708).ActionSheet, obj7);
        cResult[17] = tmp6;
        cResult[18] = tmp22;
        cResult[19] = tmp26;
        tmp24 = tmp26;
      }
    }
  }
  const obj8 = { hasIcons: false, children: items };
  items = [tmp11, tmp14, messageRequestPrivacyOption, tmp19];
  const tmp23 = closure_4(guild(6704).ActionSheetRow.Group, obj8);
  cResult[12] = messageRequestPrivacyOption;
  cResult[13] = tmp11;
  cResult[14] = tmp14;
  cResult[15] = tmp19;
  cResult[16] = tmp23;
  tmp22 = tmp23;
}) : ((guild) => {
  let Group;
  let intl;
  let intl2;
  let items;
  let obj3;
  let obj4;
  guild = guild.guild;
  let obj = guild(13740);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  let obj2 = { header: closure_3(guild(6651).BottomSheetTitleHeader, obj3), children: closure_4(Group, obj4) };
  const ActionSheet = guild(6708).ActionSheet;
  obj3 = { title: guild.name };
  obj4 = { hasIcons: false, children: items };
  Group = guild(6704).ActionSheetRow.Group;
  const obj5 = {
    label: intl.string(guild(1126).t.h850Ss),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = NotificationSettingsModalActionCreatorsDefault;
      obj2.open(guild.id);
    }
  };
  const ActionSheetRow = guild(6704).ActionSheetRow;
  intl = guild(1126).intl;
  items = [closure_3(ActionSheetRow, obj5), closure_3(guild(13741).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj6 = {
    variant: "danger",
    label: intl2.string(guild(1126).t.J2TBi3),
    onPress() {
      const obj = GuildActionSheetActions;
      return obj.handleLeaveServer(guild);
    }
  };
  const ActionSheetRow2 = guild(6704).ActionSheetRow;
  intl2 = guild(1126).intl;
  items[3] = closure_3(ActionSheetRow2, obj6);
  return closure_3(ActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default tmp4;