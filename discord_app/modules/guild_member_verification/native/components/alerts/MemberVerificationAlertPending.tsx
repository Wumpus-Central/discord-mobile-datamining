// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertPending.tsx
import MemberVerificationAlertActionCreators from "../../MemberVerificationAlertActionCreators.tsx";
import MemberVerificationAlertDefault from "MemberVerificationAlert.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["guildId", "onClose"];
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/alerts/MemberVerificationAlertPending.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MemberVerificationAlertPending(guildId) {
      const cResult = require("c").c(21);
      if (cResult[0] !== guildId) {
        guildId = guildId.guildId;
        _require = guildId;
        const onClose = guildId.onClose;
        importDefault = onClose;
        const tmp9 = _objectWithoutProperties(guildId, closure_3);
        cResult[0] = guildId;
        cResult[1] = guildId;
        cResult[2] = onClose;
        cResult[3] = tmp9;
        let tmp6 = tmp9;
      } else {
        _require = cResult[1];
        importDefault = cResult[2];
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4) {
        if (cResult[5] === tmp5) {
          let tmp10 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.zhfXbs);
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t["SRM/e/"]);
          cResult[7] = stringResult;
          cResult[8] = stringResult1;
          let tmp13 = stringResult1;
          let tmp12 = stringResult;
        } else {
          tmp12 = cResult[7];
          tmp13 = cResult[8];
        }
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(tmp(1126).t.f293OM);
          cResult[9] = stringResult2;
          let tmp16 = stringResult2;
        } else {
          tmp16 = cResult[9];
        }
        if (cResult[10] !== tmp5) {
          const obj2 = { variant: "secondary", text: tmp16, onPress: tmp5 };
          const tmp20 = closure_6(tmp(5376).Button, obj2);
          cResult[10] = tmp5;
          cResult[11] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[11];
        }
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult3 = intl4.string(tmp(1126).t.mqtdmQ);
          cResult[12] = stringResult3;
          let tmp21 = stringResult3;
        } else {
          tmp21 = cResult[12];
        }
        if (cResult[13] !== tmp10) {
          const obj3 = { text: tmp21, variant: "destructive", onPress: tmp10 };
          const tmp25 = closure_6(tmp(5376).Button, obj3);
          cResult[13] = tmp10;
          cResult[14] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[14];
        }
        if (cResult[15] === tmp18) {
          if (cResult[16] === tmp23) {
            let tmp26 = cResult[17];
          }
          if (cResult[18] === tmp6) {
            if (cResult[19] === tmp26) {
              let tmp30 = cResult[20];
            }
            return tmp30;
          }
          const obj4 = {};
          const merged = Object.assign(tmp6);
          obj4.icon = tmp(6120).ClipboardListIcon;
          obj4.header = tmp12;
          obj4.subtitle = tmp13;
          obj4.buttons = tmp26;
          const tmp37 = closure_6(MemberVerificationAlertDefault, obj4);
          cResult[18] = tmp6;
          cResult[19] = tmp26;
          cResult[20] = tmp37;
          tmp30 = tmp37;
        }
        const obj5 = { children: null };
        const items = [tmp18, tmp23];
        obj5.children = items;
        const tmp29 = closure_8(closure_7, obj5);
        cResult[15] = tmp18;
        cResult[16] = tmp23;
        cResult[17] = tmp29;
        tmp26 = tmp29;
      }
      const fn = function v() {
        if (closure_1 != null) {
          tmp();
        }
        const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert({ guildId });
      };
      cResult[4] = tmp4;
      cResult[5] = tmp5;
      cResult[6] = fn;
      tmp10 = fn;
      const obj = require("c");
    }
  : function MemberVerificationAlertPending(guildId) {
      guildId = guildId.guildId;
      const onClose = guildId.onClose;
      const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
      const items = [guildId, onClose];
      const callback = noop.useCallback(() => {
        if (onClose != null) {
          tmp();
        }
        const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert({ guildId });
      }, items);
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.icon = guildId(6120).ClipboardListIcon;
      const intl = guildId(1126).intl;
      obj.header = intl.string(guildId(1126).t.zhfXbs);
      const intl2 = guildId(1126).intl;
      obj.subtitle = intl2.string(guildId(1126).t["SRM/e/"]);
      const obj2 = { children: null };
      const obj3 = { variant: "secondary", text: null, onPress: null };
      const intl3 = guildId(1126).intl;
      obj3.text = intl3.string(guildId(1126).t.f293OM);
      obj3.onPress = onClose;
      const items1 = [closure_6(guildId(5376).Button, obj3)];
      const obj4 = { text: null, variant: "destructive", onPress: null };
      const intl4 = guildId(1126).intl;
      obj4.text = intl4.string(guildId(1126).t.mqtdmQ);
      obj4.onPress = callback;
      items1[1] = closure_6(guildId(5376).Button, obj4);
      obj2.children = items1;
      obj.buttons = closure_8(closure_7, obj2);
      return closure_6(onClose(6119), obj);
    };
