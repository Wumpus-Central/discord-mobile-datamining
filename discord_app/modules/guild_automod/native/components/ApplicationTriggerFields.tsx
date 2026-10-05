// discord_app/modules/guild_automod/native/components/ApplicationTriggerFields.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ApplicationTriggerFields.tsx");

export default function ApplicationTriggerFields(rule) {
  let TableRow;
  let found;
  let intl2;
  let intl4;
  let obj4;
  let tmp5Result;
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  let guildBotApplications;
  const tmp = rule;
  let obj = rule(guildBotApplications[2]);
  guildBotApplications = obj.useGuildBotApplications(rule.guildId);
  const intl = rule(guildBotApplications[3]).intl;
  const applicationId = rule.triggerMetadata.applicationId;
  const stringResult = intl.string(rule(guildBotApplications[3]).t.FKSiso);
  if (guildBotApplications != null) {
    found = guildBotApplications.find((id) => id.id === applicationId);
  }
  if (null != guildBotApplications) {
    let tmp5Result2;
    if (0 === guildBotApplications.length) {
      let obj2 = {
        variant: "text-sm/normal",
        color: "text-muted",
        children: intl4.string(tmp(guildBotApplications[3]).t["7/h5vj"]),
      };
      const Text = tmp(tmp2[4]).Text;
      intl4 = tmp(tmp2[3]).intl;
      tmp5Result2 = applicationId(Text, obj2);
    }
    return tmp5Result2;
  }
  const obj3 = { title: stringResult, hasIcons: false, children: applicationId(TableRow, obj4) };
  const TableRowGroup = tmp(tmp2[5]).TableRowGroup;
  obj4 = {
    label: intl2.string(tmp(guildBotApplications[3]).t.tWkvsa),
    trailing: tmp5Result,
    arrow: true,
    onPress() {
      if (null != guildBotApplications) {
        let obj = ActionSheetActionCreatorsDefault;
        const obj2 = {
          applications: tmp,
          selectedApplicationId: applicationId,
          onSelectApplication(dependencyMap) {
            let name;
            let closure_0 = dependencyMap;
            const obj = { name, triggerMetadata: { applicationId: dependencyMap } };
            const merged = Object.assign(rule);
            const found = guildBotApplications.find((id) => id.id === closure_0);
            name = undefined;
            if (found != null) {
              name = found.name;
            }
            if (name == null) {
              name = rule.name;
            }
            return onChangeRule(obj);
          },
        };
        obj.openLazy(asyncRequire(17703, dependencyMap.paths), "AutomodSelectApplication", obj2);
      }
    },
  };
  TableRow = tmp(tmp2[6]).TableRow;
  intl2 = tmp(tmp2[3]).intl;
  if (null == guildBotApplications) {
    tmp5Result = tmp5(tmp(tmp2[7]).Ellipsis, { variant: "primary", size: "sm" });
  } else {
    let name;
    const TrailingText = tmp(tmp2[6]).TableRow.TrailingText;
    if (found != null) {
      name = found.name;
    }
    if (name == null) {
      const intl3 = tmp(tmp2[3]).intl;
      name = intl3.string(tmp(tmp2[3]).t["V+Iv+U"]);
    }
    const obj5 = { text: name };
    tmp5Result = tmp5(TrailingText, obj5);
  }
  tmp5Result2 = tmp5(TableRowGroup, obj3);
}
