// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx
import MemberVerificationAlertDefault from "MemberVerificationAlert.tsx";
import GuildJoinRequestActionCreatorsDefault from "../../../GuildJoinRequestActionCreators.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["guildId", "confirmText", "subtitleText", "onClose"];
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MemberVerificationAlertCancelPending(guildId) {
      const cResult = require("c").c(27);
      if (cResult[0] !== guildId) {
        guildId = guildId.guildId;
        _require = guildId;
        ({ confirmText, subtitleText, onClose } = guildId);
        importDefault = onClose;
        const tmp11 = _objectWithoutProperties(guildId, closure_3);
        class P {
          constructor() {
            if (closure_1 != null) {
              tmpResult = tmp();
            }
            obj = closure_1(closure_2[5]);
            result = obj.removeGuildJoinRequest(closure_0);
            return;
          }
        }
        cResult[0] = guildId;
        cResult[1] = confirmText;
        cResult[2] = guildId;
        cResult[3] = onClose;
        cResult[4] = tmp11;
        cResult[5] = subtitleText;
        let tmp8 = subtitleText;
        let tmp7 = tmp11;
        let tmp4 = confirmText;
      } else {
        tmp4 = cResult[1];
        _require = cResult[2];
        importDefault = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === onClose) {
          let tmp12 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.KYiN1Q);
          cResult[9] = stringResult;
        }
        if (cResult[10] !== tmp8) {
          let stringResult1 = tmp8;
          if (tmp8 == null) {
            const intl2 = tmp(1126).intl;
            stringResult1 = intl2.string(tmp(1126).t.nQHxqm);
          }
          cResult[10] = tmp8;
          cResult[11] = stringResult1;
          let tmp16 = stringResult1;
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
          let tmp19 = stringResult2;
        } else {
          tmp19 = cResult[13];
        }
        if (cResult[14] === tmp12) {
          if (cResult[15] === tmp19) {
            let tmp22 = cResult[16];
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult3 = intl4.string(tmp(1126).t.bANR0R);
            cResult[17] = stringResult3;
            let tmp24 = stringResult3;
          } else {
            tmp24 = cResult[17];
          }
          if (cResult[18] !== onClose) {
            const obj2 = { text: tmp24, variant: "secondary", onPress: onClose };
            cResult[18] = onClose;
            cResult[19] = closure_6(tmp(5376).Button, obj2);
            class P {
              constructor() {
                if (closure_1 != null) {
                  tmpResult = tmp();
                }
                obj = closure_1(closure_2[5]);
                result = obj.removeGuildJoinRequest(closure_0);
                return;
              }
            }
            const tmp28 = closure_6(tmp(5376).Button, obj2);
          }
          if (cResult[20] === tmp22) {
            if (cResult[21] === tmp26) {
              let tmp29 = cResult[22];
            }
            if (cResult[23] === tmp7) {
              if (cResult[24] === tmp16) {
                if (cResult[25] === tmp29) {
                  let tmp34 = cResult[26];
                }
                return tmp34;
              }
            }
            const obj3 = {};
            const merged = Object.assign(tmp7);
            class P {
              constructor() {
                if (closure_1 != null) {
                  tmpResult = tmp();
                }
                obj = closure_1(closure_2[5]);
                result = obj.removeGuildJoinRequest(closure_0);
                return;
              }
            }
            obj3.subtitle = tmp16;
            obj3.buttons = tmp29;
            const tmp41 = closure_6(MemberVerificationAlertDefault, obj3);
            cResult[23] = tmp7;
            cResult[24] = tmp16;
            cResult[25] = tmp29;
            cResult[26] = tmp41;
            tmp34 = tmp41;
          }
          const obj4 = { children: null };
          class P {
            constructor() {
              if (closure_1 != null) {
                tmpResult = tmp();
              }
              obj = closure_1(closure_2[5]);
              result = obj.removeGuildJoinRequest(closure_0);
              return;
            }
          }
          tmp32[0] = tmp22;
          tmp32[1] = tmp26;
          obj4.children = tmp32;
          const tmp33 = closure_8(closure_7, obj4);
          cResult[20] = tmp22;
          cResult[21] = tmp26;
          cResult[22] = tmp33;
          tmp29 = tmp33;
        }
        class P {
          constructor() {
            if (closure_1 != null) {
              tmpResult = tmp();
            }
            obj = closure_1(closure_2[5]);
            result = obj.removeGuildJoinRequest(closure_0);
            return;
          }
        }
        const obj5 = { variant: "destructive", text: tmp19, onPress: tmp12 };
        const tmp23 = closure_6(tmp(5376).Button, obj5);
        cResult[14] = tmp12;
        cResult[15] = tmp19;
        cResult[16] = tmp23;
        tmp22 = tmp23;
      }
      class P {
        constructor() {
          if (closure_1 != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[5]);
          result = obj.removeGuildJoinRequest(closure_0);
          return;
        }
      }
      cResult[6] = tmp5;
      cResult[7] = onClose;
      cResult[8] = P;
      tmp12 = P;
      const obj = require("c");
    }
  : function MemberVerificationAlertCancelPending(guildId) {
      guildId = guildId.guildId;
      ({ confirmText, subtitleText, onClose } = guildId);
      const merged = Object.assign(guildId, Object.assign({ guildId: 0, confirmText: 0, subtitleText: 0, onClose: 0 }));
      const items = [guildId, onClose];
      const callback = noop.useCallback(() => {
        if (onClose != null) {
          tmp();
        }
        const result = GuildJoinRequestActionCreatorsDefault.removeGuildJoinRequest(guildId);
      }, items);
      const obj = {};
      const merged1 = Object.assign(merged);
      const intl = guildId(1126).intl;
      obj.header = intl.string(guildId(1126).t.KYiN1Q);
      if (subtitleText == null) {
        const intl2 = tmp7(1126).intl;
        subtitleText = intl2.string(tmp7(1126).t.nQHxqm);
      }
      obj.subtitle = subtitleText;
      if (confirmText == null) {
        const intl3 = tmp7(1126).intl;
        confirmText = intl3.string(tmp7(1126).t.OzHPde);
      }
      const obj2 = { children: null };
      const items1 = [
        closure_6(guildId(5376).Button, { variant: "destructive", text: confirmText, onPress: callback }),
      ];
      const obj3 = { text: null, variant: "secondary", onPress: null };
      const intl4 = tmp7(1126).intl;
      obj3.text = intl4.string(guildId(1126).t.bANR0R);
      obj3.onPress = onClose;
      items1[1] = closure_6(guildId(5376).Button, obj3);
      obj2.children = items1;
      obj.buttons = closure_8(closure_7, obj2);
      return closure_6(onClose(6119), obj);
    };
