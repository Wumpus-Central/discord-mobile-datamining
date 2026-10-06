// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx
import MemberVerificationAlertDefault from "MemberVerificationAlert.tsx";
import GuildJoinRequestActionCreatorsDefault from "../../../GuildJoinRequestActionCreators.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, guildId, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_3 = ["guildId", "confirmText", "subtitleText", "onClose"];
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_0;
      let closure_1;
      let confirmText;
      let items;
      let onClose;
      let subtitleText;
      let tmp4;
      let tmp7;
      let tmp8;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(27);
      if (cResult[0] !== guildId) {
        guildId = guildId.guildId;
        _require = guildId;
        ({ confirmText, subtitleText, onClose } = guildId);
        importDefault = onClose;
        const tmp11 = _objectWithoutProperties(guildId, closure_3);
        cResult[0] = guildId;
        cResult[1] = confirmText;
        cResult[2] = guildId;
        cResult[3] = onClose;
        cResult[4] = tmp11;
        cResult[5] = subtitleText;
        tmp8 = subtitleText;
        tmp7 = tmp11;
        tmp4 = confirmText;
      } else {
        tmp4 = cResult[1];
        _require = cResult[2];
        importDefault = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp12;
        let tmp14;
        let tmp16;
        let tmp19;
        if (cResult[7] === onClose) {
          tmp12 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.KYiN1Q);
          cResult[9] = stringResult;
          tmp14 = stringResult;
        } else {
          tmp14 = cResult[9];
        }
        if (cResult[10] !== tmp8) {
          let stringResult1 = tmp8;
          if (tmp8 == null) {
            const intl2 = tmp(1126).intl;
            stringResult1 = intl2.string(tmp(1126).t.nQHxqm);
          }
          cResult[10] = tmp8;
          cResult[11] = stringResult1;
          tmp16 = stringResult1;
        } else {
          tmp16 = cResult[11];
        }
        if (cResult[12] !== tmp4) {
          let stringResult2 = tmp4;
          if (tmp4 == null) {
            const intl3 = tmp(1126).intl;
            stringResult2 = intl3.string(tmp(1126).t.OzHPde);
          }
          cResult[12] = tmp4;
          cResult[13] = stringResult2;
          tmp19 = stringResult2;
        } else {
          tmp19 = cResult[13];
        }
        if (cResult[14] === tmp12) {
          let tmp22;
          let tmp25;
          let tmp27;
          if (cResult[15] === tmp19) {
            tmp22 = cResult[16];
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult3 = intl4.string(tmp(1126).t.bANR0R);
            cResult[17] = stringResult3;
            tmp25 = stringResult3;
          } else {
            tmp25 = cResult[17];
          }
          if (cResult[18] !== onClose) {
            const obj2 = { text: tmp25, variant: "secondary", onPress: onClose };
            const tmp29 = closure_6(tmp(5601).Button, obj2);
            cResult[18] = onClose;
            cResult[19] = tmp29;
            tmp27 = tmp29;
          } else {
            tmp27 = cResult[19];
          }
          if (cResult[20] === tmp22) {
            let tmp30;
            if (cResult[21] === tmp27) {
              tmp30 = cResult[22];
            }
            if (cResult[23] === tmp7) {
              if (cResult[24] === tmp16) {
                let tmp34;
                if (cResult[25] === tmp30) {
                  tmp34 = cResult[26];
                }
                return tmp34;
              }
            }
            const obj3 = { header: tmp14, subtitle: tmp16, buttons: tmp30 };
            const tmp37 = MemberVerificationAlertDefault;
            const merged = Object.assign(tmp7);
            const tmp41 = closure_6(tmp37, obj3);
            cResult[23] = tmp7;
            cResult[24] = tmp16;
            cResult[25] = tmp30;
            cResult[26] = tmp41;
            tmp34 = tmp41;
          }
          const obj4 = { children: items };
          items = [tmp22, tmp27];
          const tmp33 = closure_8(closure_7, obj4);
          cResult[20] = tmp22;
          cResult[21] = tmp27;
          cResult[22] = tmp33;
          tmp30 = tmp33;
        }
        const obj5 = { variant: "destructive", text: tmp19, onPress: tmp12 };
        const tmp24 = closure_6(tmp(5601).Button, obj5);
        cResult[14] = tmp12;
        cResult[15] = tmp19;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      }
      const fn = function _() {
        if (closure_1 != null) {
          tmp();
        }
        const obj = GuildJoinRequestActionCreatorsDefault;
        const result = obj.removeGuildJoinRequest(closure_0);
      };
      cResult[6] = tmp5;
      cResult[7] = onClose;
      cResult[8] = fn;
      tmp12 = fn;
    }
  : (guildId) => {
      let confirmText;
      let intl;
      let intl4;
      let items1;
      let obj2;
      let onClose;
      let subtitleText;
      guildId = guildId.guildId;
      ({ confirmText, subtitleText, onClose } = guildId);
      const merged = Object.assign(guildId, Object.assign({ guildId: 0, confirmText: 0, subtitleText: 0, onClose: 0 }));
      const items = [guildId, onClose];
      const callback = react.useCallback(() => {
        if (onClose != null) {
          tmp();
        }
        const obj = GuildJoinRequestActionCreatorsDefault;
        const result = obj.removeGuildJoinRequest(guildId);
      }, items);
      let obj = {
        header: intl.string(guildId(1126).t.KYiN1Q),
        subtitle: subtitleText,
        buttons: closure_8(closure_7, obj2),
      };
      const tmp5 = onClose(5934);
      const merged1 = Object.assign(merged);
      intl = guildId(1126).intl;
      if (subtitleText == null) {
        const intl2 = tmp7(1126).intl;
        subtitleText = intl2.string(tmp7(1126).t.nQHxqm);
      }
      const Button = tmp7(5601).Button;
      if (confirmText == null) {
        const intl3 = tmp7(1126).intl;
        confirmText = intl3.string(tmp7(1126).t.OzHPde);
      }
      obj2 = { children: items1 };
      items1 = [closure_6(Button, { variant: "destructive", text: confirmText, onPress: callback })];
      const obj3 = { text: intl4.string(guildId(1126).t.bANR0R), variant: "secondary", onPress: onClose };
      const Button2 = tmp7(5601).Button;
      intl4 = tmp7(1126).intl;
      items1[1] = closure_6(Button2, obj3);
      return closure_6(tmp5, obj);
    };
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx",
);

export default tmp3;
