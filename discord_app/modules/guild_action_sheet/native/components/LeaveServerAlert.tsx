// === Module 13778: LeaveServerAlert ===

// Module 13778 (LeaveServerAlert)
import Constants from "Constants" /* 1085 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guild;

let closure_4;
let hasOwnProperty;
const GuildFeatures = Constants.GuildFeatures;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let intl4;
  let items;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp16;
  let tmp19;
  let tmp4;
  let tmp8;
  let obj = guild(576);
  const cResult = obj.c(16);
  guild = guild.guild;
  if (cResult[0] !== guild.features) {
    let stringResult;
    const features = guild.features;
    const hasItem = features.has(GuildFeatures.HUB);
    const intl = tmp(1126).intl;
    const string = intl.string;
    const t = tmp(1126).t;
    if (hasItem) {
      stringResult = string(t.Dv8gFT);
    } else {
      stringResult = string(t.J2TBi3);
    }
    cResult[0] = guild.features;
    cResult[1] = stringResult;
    tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== guild.name) {
    const intl2 = tmp(1126).intl;
    const obj2 = { name: guild.name };
    const formatToPlainStringResult = intl2.formatToPlainString(guild(1126).t.TB1og8, obj2);
    cResult[2] = guild.name;
    cResult[3] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guild.id) {
    const fn = function u() {
      const obj = GuildSettingsActionCreatorsDefault;
      return obj.leaveGuild(guild.id);
    };
    cResult[4] = guild.id;
    cResult[5] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(guild(1126).t.p89ACt);
    cResult[6] = stringResult1;
    tmp11 = stringResult1;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] !== tmp10) {
    const obj3 = { variant: "destructive", onPress: tmp10, text: tmp11 };
    const tmp15 = closure_4(guild(5713).AlertActionButton, obj3, "confirm");
    cResult[7] = tmp10;
    cResult[8] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "secondary", text: intl4.string(guild(1126).t.gm1Vej) };
    const AlertActionButton = tmp(5713).AlertActionButton;
    intl4 = tmp(1126).intl;
    const tmp18 = closure_4(AlertActionButton, obj4, "cancel");
    cResult[9] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[9];
  }
  if (cResult[10] !== tmp13) {
    const obj5 = { children: items };
    items = [tmp13, tmp16];
    const tmp21 = closure_5(guild(5713).AlertActions, obj5);
    cResult[10] = tmp13;
    cResult[11] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[11];
  }
  if (cResult[12] === tmp4) {
    if (cResult[13] === tmp8) {
      let tmp22;
      if (cResult[14] === tmp19) {
        tmp22 = cResult[15];
      }
      return tmp22;
    }
  }
  const tmp23 = closure_4(guild(5713).AlertModal, { title: tmp4, content: tmp8, actions: tmp19 });
  cResult[12] = tmp4;
  cResult[13] = tmp8;
  cResult[14] = tmp19;
  cResult[15] = tmp23;
  tmp22 = tmp23;
}) : ((guild) => {
  let AlertActions;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj3;
  let stringResult;
  guild = guild.guild;
  const features = guild.features;
  const AlertModal = guild(5713).AlertModal;
  const hasItem = features.has(GuildFeatures.HUB);
  const intl = guild(1126).intl;
  const string = intl.string;
  const t = guild(1126).t;
  if (hasItem) {
    stringResult = string(t.Dv8gFT);
  } else {
    stringResult = string(t.J2TBi3);
  }
  let obj = { title: stringResult, content: intl2.formatToPlainString(guild(1126).t.TB1og8, obj2), actions: closure_5(AlertActions, obj3) };
  intl2 = tmp2(1126).intl;
  obj2 = { name: guild.name };
  obj3 = { children: items };
  AlertActions = tmp2(5713).AlertActions;
  const obj4 = {
    variant: "destructive",
    onPress() {
      const obj = GuildSettingsActionCreatorsDefault;
      return obj.leaveGuild(guild.id);
    },
    text: intl3.string(guild(1126).t.p89ACt)
  };
  const AlertActionButton = tmp2(5713).AlertActionButton;
  intl3 = tmp2(1126).intl;
  items = [closure_4(AlertActionButton, obj4, "confirm"), ];
  const obj5 = { variant: "secondary", text: intl4.string(guild(1126).t.gm1Vej) };
  const AlertActionButton2 = tmp2(5713).AlertActionButton;
  intl4 = tmp2(1126).intl;
  items[1] = closure_4(AlertActionButton2, obj5, "cancel");
  return closure_4(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/LeaveServerAlert.tsx");

export default tmp3;