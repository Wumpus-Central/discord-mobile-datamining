// discord_app/modules/guild_action_sheet/native/components/LeaveServerAlert.tsx
import { GuildFeatures } from "ME";
import jsxProd from "jsxProd";

let c4;
let c5;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/guild_action_sheet/native/components/LeaveServerAlert.tsx");

export default function LeaveServerAlert(guild) {
  guild = guild.guild;
  const features = guild.features;
  const hasItem = features.has(GuildFeatures.HUB);
  const intl = guild(1236).intl;
  const string = intl.string;
  const t = guild(1236).t;
  if (hasItem) {
    let stringResult = string(t.Dv8gFT);
  } else {
    stringResult = string(t.J2TBi3);
  }
  let obj = { title: stringResult, content: null, actions: null };
  const intl2 = tmp2(1236).intl;
  obj = { name: guild.name };
  obj[1] = intl2.formatToPlainString(guild(1236).t.TB1og8, obj);
  obj = { children: null };
  const obj1 = {
    variant: "destructive",
    onPress() {
      return outer1_1(outer1_2[5]).leaveGuild(guild.id);
    },
    text: null
  };
  const intl3 = tmp2(1236).intl;
  obj1[2] = intl3.string(guild(1236).t.p89ACt);
  const items = [closure_4(guild(4645).AlertActionButton, obj1, "confirm"), ];
  const obj2 = { variant: "secondary", text: null };
  const intl4 = tmp2(1236).intl;
  obj2[1] = intl4.string(guild(1236).t.gm1Vej);
  items[1] = closure_4(guild(4645).AlertActionButton, obj2, "cancel");
  obj[0] = items;
  obj[2] = callback(guild(4645).AlertActions, obj);
  return closure_4(guild(4645).AlertModal, obj);
};