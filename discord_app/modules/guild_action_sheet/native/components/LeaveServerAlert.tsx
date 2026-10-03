// === Module 13776: LeaveServerAlert ===

// Module 13776 (LeaveServerAlert)
import Constants from "Constants" /* 1085 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import jsxProd from "jsxProd" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/LeaveServerAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(16);
  guild = guild.guild;
  if (cResult[0] !== guild.features) {
    const features = guild.features;
    const hasItem = features.has(GuildFeatures.HUB);
    const intl = tmp(1126).intl;
    const string = intl.string;
    let features2 = tmp(1126).t;
    if (hasItem) {
      let stringResult = string(features2.Dv8gFT);
    } else {
      stringResult = string(features2.J2TBi3);
    }
    features2 = guild.features;
    cResult[0] = features2;
    cResult[1] = stringResult;
  } else {
    if (cResult[2] !== guild.name) {
      const intl2 = tmp(1126).intl;
      const obj2 = { name: guild.name };
      const formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.TB1og8, obj2);
      cResult[2] = guild.name;
      cResult[3] = formatToPlainStringResult;
      let tmp9 = formatToPlainStringResult;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] !== guild.id) {
      const fn = function u() {
        return GuildSettingsActionCreatorsDefault.leaveGuild(guild.id);
      };
      cResult[4] = guild.id;
      cResult[5] = fn;
      let tmp11 = fn;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(tmp(1126).t.p89ACt);
      cResult[6] = stringResult1;
      let tmp13 = stringResult1;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== tmp11) {
      const obj3 = { variant: "destructive", onPress: tmp11, text: tmp13 };
      const tmp17 = closure_4(tmp(5713).AlertActionButton, obj3, "confirm");
      cResult[7] = tmp11;
      cResult[8] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "secondary", text: null };
      const intl4 = tmp(1126).intl;
      obj4.text = intl4.string(tmp(1126).t.gm1Vej);
      const tmp20 = closure_4(tmp(5713).AlertActionButton, obj4, "cancel");
      cResult[9] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] !== tmp15) {
      const obj5 = { children: null };
      const items = [tmp15, tmp18];
      obj5.children = items;
      const tmp23 = closure_5(tmp(5713).AlertActions, obj5);
      cResult[10] = tmp15;
      cResult[11] = tmp23;
      let tmp21 = tmp23;
    } else {
      tmp21 = cResult[11];
    }
    if (cResult[12] === cResult[1]) {
      if (cResult[13] === tmp9) {
        if (cResult[14] === tmp21) {
          let tmp24 = cResult[15];
        }
        return tmp24;
      }
    }
    const obj6 = { title: cResult[1], content: tmp9, actions: tmp21 };
    const tmp26 = closure_4(tmp(5713).AlertModal, obj6);
    cResult[12] = cResult[1];
    cResult[13] = tmp9;
    cResult[14] = tmp21;
    cResult[15] = tmp26;
    tmp24 = tmp26;
  }
  const obj = guild(576);
}) : ((guild) => {
  guild = guild.guild;
  const features = guild.features;
  const hasItem = features.has(GuildFeatures.HUB);
  const intl = guild(1126).intl;
  const string = intl.string;
  const t = guild(1126).t;
  if (hasItem) {
    let stringResult = string(t.Dv8gFT);
  } else {
    stringResult = string(t.J2TBi3);
  }
  const obj = { title: stringResult, content: null, actions: null };
  const intl2 = tmp2(1126).intl;
  obj.content = intl2.formatToPlainString(guild(1126).t.TB1og8, { name: guild.name });
  const obj3 = { children: null };
  const obj4 = {
    variant: "destructive",
    onPress() {
      return GuildSettingsActionCreatorsDefault.leaveGuild(guild.id);
    },
    text: null
  };
  const intl3 = tmp2(1126).intl;
  obj4.text = intl3.string(guild(1126).t.p89ACt);
  const items = [closure_4(guild(5713).AlertActionButton, obj4, "confirm"), ];
  const obj5 = { variant: "secondary", text: null };
  const intl4 = tmp2(1126).intl;
  obj5.text = intl4.string(guild(1126).t.gm1Vej);
  items[1] = closure_4(guild(5713).AlertActionButton, obj5, "cancel");
  obj3.children = items;
  obj.actions = closure_5(guild(5713).AlertActions, obj3);
  return closure_4(guild(5713).AlertModal, obj);
});