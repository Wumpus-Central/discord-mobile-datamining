// === Module 5933: MemberVerificationAlertPending ===

// Module 5933 (MemberVerificationAlertPending)
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5924 */;
import MemberVerificationAlertDefault from "MemberVerificationAlert" /* 5934 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guildId, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_3 = ["guildId", "onClose"];
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_1;
  let items;
  let tmp6;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(21);
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
    tmp6 = tmp9;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp10;
    let tmp13;
    let tmp12;
    let tmp16;
    let tmp18;
    let tmp21;
    let tmp23;
    if (cResult[5] === tmp5) {
      tmp10 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.zhfXbs);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t["SRM/e/"]);
      cResult[7] = stringResult;
      cResult[8] = stringResult1;
      tmp13 = stringResult1;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[7];
      tmp13 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult2 = intl3.string(tmp(1126).t.f293OM);
      cResult[9] = stringResult2;
      tmp16 = stringResult2;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] !== tmp5) {
      let obj2 = { variant: "secondary", text: tmp16, onPress: tmp5 };
      const tmp20 = closure_6(tmp(5601).Button, obj2);
      cResult[10] = tmp5;
      cResult[11] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[11];
    }
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult3 = intl4.string(tmp(1126).t.mqtdmQ);
      cResult[12] = stringResult3;
      tmp21 = stringResult3;
    } else {
      tmp21 = cResult[12];
    }
    if (cResult[13] !== tmp10) {
      const obj3 = { text: tmp21, variant: "destructive", onPress: tmp10 };
      const tmp25 = closure_6(tmp(5601).Button, obj3);
      cResult[13] = tmp10;
      cResult[14] = tmp25;
      tmp23 = tmp25;
    } else {
      tmp23 = cResult[14];
    }
    if (cResult[15] === tmp18) {
      let tmp26;
      if (cResult[16] === tmp23) {
        tmp26 = cResult[17];
      }
      if (cResult[18] === tmp6) {
        let tmp30;
        if (cResult[19] === tmp26) {
          tmp30 = cResult[20];
        }
        return tmp30;
      }
      const obj4 = { icon: tmp(5935).ClipboardListIcon, header: tmp12, subtitle: tmp13, buttons: tmp26 };
      const tmp33 = MemberVerificationAlertDefault;
      const merged = Object.assign(tmp6);
      const tmp37 = closure_6(tmp33, obj4);
      cResult[18] = tmp6;
      cResult[19] = tmp26;
      cResult[20] = tmp37;
      tmp30 = tmp37;
    }
    const obj5 = { children: items };
    items = [tmp18, tmp23];
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
    const obj = MemberVerificationAlertActionCreators;
    const obj2 = { guildId };
    const result = obj.openMemberVerificationCancelPendingAlert(obj2);
  };
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = fn;
  tmp10 = fn;
}) : ((guildId) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let obj2;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
  const items = [guildId, onClose];
  const callback = react.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj = MemberVerificationAlertActionCreators;
    const obj2 = { guildId };
    const result = obj.openMemberVerificationCancelPendingAlert(obj2);
  }, items);
  let obj = { icon: guildId(5935).ClipboardListIcon, header: intl.string(guildId(1126).t.zhfXbs), subtitle: intl2.string(guildId(1126).t["SRM/e/"]), buttons: closure_8(closure_7, obj2) };
  const tmp3 = onClose(5934);
  const merged1 = Object.assign(merged);
  intl = guildId(1126).intl;
  intl2 = guildId(1126).intl;
  obj2 = { children: items1 };
  const obj3 = { variant: "secondary", text: intl3.string(guildId(1126).t.f293OM), onPress: onClose };
  const Button = guildId(5601).Button;
  intl3 = guildId(1126).intl;
  items1 = [closure_6(Button, obj3), ];
  const obj4 = { text: intl4.string(guildId(1126).t.mqtdmQ), variant: "destructive", onPress: callback };
  const Button2 = guildId(5601).Button;
  intl4 = guildId(1126).intl;
  items1[1] = closure_6(Button2, obj4);
  return closure_6(tmp3, obj);
});
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertPending.tsx");

export default tmp3;