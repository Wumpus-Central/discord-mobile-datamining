// discord_app/modules/guild_automod/native/components/ApplicationTriggerFields.tsx
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ApplicationTriggerFields.tsx");

export default function ApplicationTriggerFields(rule) {
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  let guildBotApplications;
  guildBotApplications = rule(guildBotApplications[2]).useGuildBotApplications(rule.guildId);
  const intl = rule(guildBotApplications[3]).intl;
  const applicationId = rule.triggerMetadata.applicationId;
  let obj = rule(guildBotApplications[2]);
  if (guildBotApplications != null) {
    let found = guildBotApplications.find((id) => id.id === applicationId);
  }
  if (null != guildBotApplications) {
    if (0 === guildBotApplications.length) {
      let obj2 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp(tmp2[3]).intl;
      obj2.children = intl4.string(tmp(tmp2[3]).t["7/h5vj"]);
      let tmp5Result2 = applicationId(tmp(tmp2[4]).Text, obj2);
    }
    return tmp5Result2;
  }
  const obj3 = { title: intl.string(rule(guildBotApplications[3]).t.FKSiso), hasIcons: false, children: null };
  const obj4 = { label: null, trailing: null, arrow: true, onPress: null };
  const intl2 = tmp(tmp2[3]).intl;
  obj4.label = intl2.string(rule(guildBotApplications[3]).t.tWkvsa);
  if (null == guildBotApplications) {
    let tmp5Result = tmp5(tmp(tmp2[7]).Ellipsis, { variant: "primary", size: "sm" });
  } else {
    let name;
    if (found != null) {
      name = found.name;
    }
    if (name == null) {
      const intl3 = tmp(tmp2[3]).intl;
      name = intl3.string(tmp(tmp2[3]).t["V+Iv+U"]);
    }
    const obj5 = { text: name };
    tmp5Result = tmp5(tmp(tmp2[6]).TableRow.TrailingText, obj5);
  }
  obj4.trailing = tmp5Result;
  obj4.onPress = function onPress() {
    if (null != guildBotApplications) {
      const obj2 = {
        applications: tmp,
        selectedApplicationId: applicationId,
        onSelectApplication(applicationId) {
          closure_0 = applicationId;
          const obj = {};
          const merged = Object.assign(rule);
          const found = guildBotApplications.find((id) => id.id === closure_0);
          let name;
          if (found != null) {
            name = found.name;
          }
          if (name == null) {
            name = rule.name;
          }
          obj.name = name;
          obj.triggerMetadata = { applicationId };
          return onChangeRule(obj);
        },
      };
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(18047, dependencyMap.paths),
        "AutomodSelectApplication",
        obj2,
      );
    }
  };
  obj3.children = applicationId(rule(guildBotApplications[6]).TableRow, obj4);
  tmp5Result2 = tmp5(tmp(tmp2[5]).TableRowGroup, obj3);
}
