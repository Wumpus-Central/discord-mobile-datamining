// === Module 17310: VoicePanelNsfwAlert ===

// Module 17310 (VoicePanelNsfwAlert)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;

const require = fn;
const isGuildNSFW = fn(2070).isGuildNSFW;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(dismissModalCallback[5]).c(26);
  guildId = guildId.guildId;
  const onConnect = guildId.onConnect;
  const obj = guildId(dismissModalCallback[5]);
  dismissModalCallback = guildId(dismissModalCallback[6]).useDismissModalCallback();
  if (cResult[0] !== guildId) {
    const tmp8 = isGuildNSFW(GuildStore.getGuild(guildId));
    cResult[0] = guildId;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === onConnect) {
      if (cResult[4] === dismissModalCallback) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === guildId) {
        if (cResult[7] === dismissModalCallback) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] !== tmp5) {
          const intl = tmp(tmp2[8]).intl;
          const string = intl.string;
          let xi46lg = tmp(tmp2[8]).t;
          if (tmp5) {
            xi46lg = xi46lg.xi46lg;
            let stringResult = string(xi46lg);
          } else {
            stringResult = string(xi46lg.ZmwvDc);
          }
          cResult[9] = tmp5;
          cResult[10] = stringResult;
        } else if (cResult[11] !== tmp5) {
          const intl2 = tmp(tmp2[8]).intl;
          const string2 = intl2.string;
          let ZtuRts = tmp(tmp2[8]).t;
          if (tmp5) {
            ZtuRts = ZtuRts.ZtuRts;
            let string2Result = string2(ZtuRts);
          } else {
            string2Result = string2(ZtuRts.E4Cd5I);
          }
          cResult[11] = tmp5;
          cResult[12] = string2Result;
        } else {
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[8]).intl;
            const stringResult1 = intl3.string(tmp(tmp2[8]).t.wVq7uo);
            cResult[13] = stringResult1;
            let tmp18 = stringResult1;
          } else {
            tmp18 = cResult[13];
          }
          if (cResult[14] !== tmp9) {
            const obj3 = { variant: "primary", onPress: tmp9, text: tmp18 };
            const tmp22 = closure_5(tmp(tmp2[9]).AlertActionButton, obj3, "confirm");
            cResult[14] = tmp9;
            cResult[15] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[15];
          }
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(tmp2[8]).intl;
            const stringResult2 = intl4.string(tmp(tmp2[8]).t["/g10LC"]);
            cResult[16] = stringResult2;
            let tmp23 = stringResult2;
          } else {
            tmp23 = cResult[16];
          }
          if (cResult[17] !== tmp10) {
            const obj4 = { variant: "secondary", onPress: tmp10, text: tmp23 };
            const tmp27 = closure_5(tmp(tmp2[9]).AlertActionButton, obj4, "add-profile-picture");
            cResult[17] = tmp10;
            cResult[18] = tmp27;
            let tmp25 = tmp27;
          } else {
            tmp25 = cResult[18];
          }
          if (cResult[19] === tmp20) {
            if (cResult[20] === tmp25) {
              let tmp28 = cResult[21];
            }
            if (cResult[22] === tmp28) {
              if (cResult[23] === tmp11) {
                if (cResult[24] === tmp14) {
                  let tmp31 = cResult[25];
                }
                return tmp31;
              }
            }
            const obj5 = { title: tmp11, content: tmp14, actions: tmp28 };
            const tmp33 = closure_5(tmp(tmp2[9]).AlertModal, obj5);
            cResult[22] = tmp28;
            cResult[23] = tmp11;
            cResult[24] = tmp14;
            cResult[25] = tmp33;
            tmp31 = tmp33;
          }
          const obj6 = { children: null };
          const items = [tmp20, tmp25];
          obj6.children = items;
          const tmp30 = closure_6(tmp(tmp2[6]).AlertActions, obj6);
          cResult[19] = tmp20;
          cResult[20] = tmp25;
          cResult[21] = tmp30;
          tmp28 = tmp30;
        }
      }
      const fn2 = function w() {
        GuildActionCreatorsDefault.nsfwReturnToSafety(guildId);
        dismissModalCallback();
      };
      cResult[6] = guildId;
      cResult[7] = dismissModalCallback;
      cResult[8] = fn2;
      tmp10 = fn2;
    }
  }
  const fn = function _() {
    GuildActionCreatorsDefault.nsfwAgree(guildId);
    onConnect();
    dismissModalCallback();
  };
  cResult[2] = guildId;
  cResult[3] = onConnect;
  cResult[4] = dismissModalCallback;
  cResult[5] = fn;
  tmp9 = fn;
  const obj2 = guildId(dismissModalCallback[6]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const onConnect = guildId.onConnect;
  dependencyMap = guildId(5713).useDismissModalCallback();
  const tmp3 = isGuildNSFW(GuildStore.getGuild(guildId));
  const intl = guildId(1126).intl;
  const string = intl.string;
  const t = guildId(1126).t;
  if (tmp3) {
    let stringResult = string(t.xi46lg);
  } else {
    stringResult = string(t.ZmwvDc);
  }
  const obj2 = { title: stringResult, content: null, actions: null };
  const intl2 = tmp(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp(1126).t;
  if (tmp3) {
    let string2Result = string2(t2.ZtuRts);
  } else {
    string2Result = string2(t2.E4Cd5I);
  }
  obj2.content = string2Result;
  const obj3 = { children: null };
  const obj4 = {
    variant: "primary",
    onPress() {
      GuildActionCreatorsDefault.nsfwAgree(guildId);
      onConnect();
      closure_2();
    },
    text: null
  };
  const intl3 = tmp(1126).intl;
  obj4.text = intl3.string(guildId(1126).t.wVq7uo);
  const items = [closure_5(guildId(5713).AlertActionButton, obj4, "confirm"), ];
  const obj5 = {
    variant: "secondary",
    onPress() {
      GuildActionCreatorsDefault.nsfwReturnToSafety(guildId);
      closure_2();
    },
    text: null
  };
  const intl4 = tmp(1126).intl;
  obj5.text = intl4.string(guildId(1126).t["/g10LC"]);
  items[1] = closure_5(guildId(5713).AlertActionButton, obj5, "add-profile-picture");
  obj3.children = items;
  obj2.actions = closure_6(guildId(5713).AlertActions, obj3);
  return closure_5(guildId(5713).AlertModal, obj2);
});
export const VOICE_PANEL_NSFW_KEY = "voice-panel-nsfw";