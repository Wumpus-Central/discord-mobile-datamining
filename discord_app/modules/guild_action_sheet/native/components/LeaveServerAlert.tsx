// === Module 14068: LeaveServerAlert ===

// Module 14068 (LeaveServerAlert)
import Constants from "Constants" /* 1074 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9206 */;
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/LeaveServerAlert.tsx");

export default function LeaveServerAlert(guild) {
  guild = guild.guild;
  const features = guild.features;
  const hasItem = features.has(GuildFeatures.HUB);
  const intl = guild(1115).intl;
  const string = intl.string;
  const t = guild(1115).t;
  if (hasItem) {
    let stringResult = string(t.Dv8gFT);
  } else {
    stringResult = string(t.J2TBi3);
  }
  const obj = { title: stringResult, content: null, actions: null };
  const intl2 = tmp2(1115).intl;
  obj.content = intl2.formatToPlainString(guild(1115).t.TB1og8, { name: guild.name });
  const obj3 = { children: null };
  const obj4 = {
    variant: "destructive",
    onPress() {
      return GuildSettingsActionCreatorsDefault.leaveGuild(guild.id);
    },
    text: null
  };
  const intl3 = tmp2(1115).intl;
  obj4.text = intl3.string(guild(1115).t.p89ACt);
  const items = [closure_4(guild(4988).AlertActionButton, obj4, "confirm"), ];
  const obj5 = { variant: "secondary", text: null };
  const intl4 = tmp2(1115).intl;
  obj5.text = intl4.string(guild(1115).t.gm1Vej);
  items[1] = closure_4(guild(4988).AlertActionButton, obj5, "cancel");
  obj3.children = items;
  obj.actions = closure_5(guild(4988).AlertActions, obj3);
  return closure_4(guild(4988).AlertModal, obj);
};