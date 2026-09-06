// discord_app/modules/guild_action_sheet/native/components/LeaveServerAlert.tsx
import Constants from "../../../../Constants.tsx";
import GuildSettingsActionCreatorsDefault from "../../../guild_settings/GuildSettingsActionCreators.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import size from "../../../../../_runtime/metro/00002__.js";

const GuildFeatures = Constants.GuildFeatures;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/LeaveServerAlert.tsx");

export default function LeaveServerAlert(guild) {
  guild = guild.guild;
  const features = guild.features;
  const hasItem = features.has(GuildFeatures.HUB);
  const intl = guild(1114).intl;
  const string = intl.string;
  const t = guild(1114).t;
  if (hasItem) {
    let stringResult = string(t.Dv8gFT);
  } else {
    stringResult = string(t.J2TBi3);
  }
  let obj = { title: stringResult, content: null, actions: null };
  const intl2 = tmp2(1114).intl;
  obj = { name: guild.name };
  obj.content = intl2.formatToPlainString(guild(1114).t.TB1og8, obj);
  obj = { children: null };
  const obj1 = {
    variant: "destructive",
    onPress() {
      return GuildSettingsActionCreatorsDefault.leaveGuild(guild.id);
    },
    text: null,
  };
  const intl3 = tmp2(1114).intl;
  obj1.text = intl3.string(guild(1114).t.p89ACt);
  const items = [closure_4(guild(4910).AlertActionButton, obj1, "confirm")];
  const obj2 = { variant: "secondary", text: null };
  const intl4 = tmp2(1114).intl;
  obj2.text = intl4.string(guild(1114).t.gm1Vej);
  items[1] = closure_4(guild(4910).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = closure_5(guild(4910).AlertActions, obj);
  return closure_4(guild(4910).AlertModal, obj);
}
