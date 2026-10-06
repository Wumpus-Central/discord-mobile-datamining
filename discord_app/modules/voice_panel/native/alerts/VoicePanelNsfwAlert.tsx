// === Module 17362: VoicePanelNsfwAlert ===

// Module 17362 (VoicePanelNsfwAlert)
import GuildRecord from "GuildRecord" /* 2070 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, guildId;

let hasOwnProperty;
let metroRequire;
const isGuildNSFW = GuildRecord.isGuildNSFW;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let dismissModalCallback;
  let items;
  let tmp5;
  let obj = guildId(dismissModalCallback[5]);
  const cResult = obj.c(26);
  guildId = guildId.guildId;
  const onConnect = guildId.onConnect;
  const obj2 = guildId(dismissModalCallback[6]);
  dismissModalCallback = obj2.useDismissModalCallback();
  if (cResult[0] !== guildId) {
    const tmp8 = isGuildNSFW(GuildStore.getGuild(guildId));
    cResult[0] = guildId;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === onConnect) {
      let tmp9;
      if (cResult[4] === dismissModalCallback) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === guildId) {
        let tmp10;
        let tmp11;
        let tmp13;
        let tmp16;
        let tmp18;
        let tmp21;
        let tmp23;
        if (cResult[7] === dismissModalCallback) {
          tmp10 = cResult[8];
        }
        if (cResult[9] !== tmp5) {
          let stringResult;
          const intl = tmp(tmp2[8]).intl;
          const string = intl.string;
          const t = tmp(tmp2[8]).t;
          if (tmp5) {
            stringResult = string(t.xi46lg);
          } else {
            stringResult = string(t.ZmwvDc);
          }
          cResult[9] = tmp5;
          cResult[10] = stringResult;
          tmp11 = stringResult;
        } else {
          tmp11 = cResult[10];
        }
        if (cResult[11] !== tmp5) {
          let string2Result;
          const intl2 = tmp(tmp2[8]).intl;
          const string2 = intl2.string;
          const t2 = tmp(tmp2[8]).t;
          if (tmp5) {
            string2Result = string2(t2.ZtuRts);
          } else {
            string2Result = string2(t2.E4Cd5I);
          }
          cResult[11] = tmp5;
          cResult[12] = string2Result;
          tmp13 = string2Result;
        } else {
          tmp13 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(tmp2[8]).intl;
          const stringResult1 = intl3.string(guildId(dismissModalCallback[8]).t.wVq7uo);
          cResult[13] = stringResult1;
          tmp16 = stringResult1;
        } else {
          tmp16 = cResult[13];
        }
        if (cResult[14] !== tmp9) {
          const obj3 = { variant: "primary", onPress: tmp9, text: tmp16 };
          const tmp20 = closure_5(guildId(dismissModalCallback[9]).AlertActionButton, obj3, "confirm");
          cResult[14] = tmp9;
          cResult[15] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[15];
        }
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(tmp2[8]).intl;
          const stringResult2 = intl4.string(guildId(dismissModalCallback[8]).t["/g10LC"]);
          cResult[16] = stringResult2;
          tmp21 = stringResult2;
        } else {
          tmp21 = cResult[16];
        }
        if (cResult[17] !== tmp10) {
          const obj4 = { variant: "secondary", onPress: tmp10, text: tmp21 };
          const tmp25 = closure_5(guildId(dismissModalCallback[9]).AlertActionButton, obj4, "add-profile-picture");
          cResult[17] = tmp10;
          cResult[18] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[18];
        }
        if (cResult[19] === tmp18) {
          let tmp26;
          if (cResult[20] === tmp23) {
            tmp26 = cResult[21];
          }
          if (cResult[22] === tmp26) {
            if (cResult[23] === tmp11) {
              let tmp29;
              if (cResult[24] === tmp13) {
                tmp29 = cResult[25];
              }
              return tmp29;
            }
          }
          const obj5 = { title: tmp11, content: tmp13, actions: tmp26 };
          const tmp31 = closure_5(guildId(dismissModalCallback[9]).AlertModal, obj5);
          cResult[22] = tmp26;
          cResult[23] = tmp11;
          cResult[24] = tmp13;
          cResult[25] = tmp31;
          tmp29 = tmp31;
        }
        const obj6 = { children: items };
        items = [tmp18, tmp23];
        const tmp28 = closure_6(guildId(dismissModalCallback[6]).AlertActions, obj6);
        cResult[19] = tmp18;
        cResult[20] = tmp23;
        cResult[21] = tmp28;
        tmp26 = tmp28;
      }
      const fn2 = function w() {
        const obj = GuildActionCreatorsDefault;
        obj.nsfwReturnToSafety(guildId);
        dismissModalCallback();
      };
      cResult[6] = guildId;
      cResult[7] = dismissModalCallback;
      cResult[8] = fn2;
      tmp10 = fn2;
    }
  }
  const fn = function _() {
    const obj = GuildActionCreatorsDefault;
    obj.nsfwAgree(guildId);
    onConnect();
    dismissModalCallback();
  };
  cResult[2] = guildId;
  cResult[3] = onConnect;
  cResult[4] = dismissModalCallback;
  cResult[5] = fn;
  tmp9 = fn;
}) : ((guildId) => {
  let AlertActions;
  let closure_2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let string2Result;
  let stringResult;
  guildId = guildId.guildId;
  const onConnect = guildId.onConnect;
  let obj = guildId(5720);
  dependencyMap = obj.useDismissModalCallback();
  const tmp3 = isGuildNSFW(GuildStore.getGuild(guildId));
  const AlertModal = guildId(5720).AlertModal;
  const intl = guildId(1126).intl;
  const string = intl.string;
  const t = guildId(1126).t;
  if (tmp3) {
    stringResult = string(t.xi46lg);
  } else {
    stringResult = string(t.ZmwvDc);
  }
  const obj2 = { title: stringResult, content: string2Result, actions: closure_6(AlertActions, obj3) };
  const intl2 = tmp(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp(1126).t;
  if (tmp3) {
    string2Result = string2(t2.ZtuRts);
  } else {
    string2Result = string2(t2.E4Cd5I);
  }
  obj3 = { children: items };
  AlertActions = tmp(5720).AlertActions;
  const obj4 = {
    variant: "primary",
    onPress() {
      const obj = GuildActionCreatorsDefault;
      obj.nsfwAgree(guildId);
      onConnect();
      closure_2();
    },
    text: intl3.string(guildId(1126).t.wVq7uo)
  };
  const AlertActionButton = tmp(5720).AlertActionButton;
  intl3 = tmp(1126).intl;
  items = [closure_5(AlertActionButton, obj4, "confirm"), ];
  const obj5 = {
    variant: "secondary",
    onPress() {
      const obj = GuildActionCreatorsDefault;
      obj.nsfwReturnToSafety(guildId);
      closure_2();
    },
    text: intl4.string(guildId(1126).t["/g10LC"])
  };
  const AlertActionButton2 = tmp(5720).AlertActionButton;
  intl4 = tmp(1126).intl;
  items[1] = closure_5(AlertActionButton2, obj5, "add-profile-picture");
  return closure_5(AlertModal, obj2);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx");

export default tmp4;
export const VOICE_PANEL_NSFW_KEY = "voice-panel-nsfw";