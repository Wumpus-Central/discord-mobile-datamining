// === Module 6594: MemberVerificationAlertIncomplete ===

// Module 6594 (MemberVerificationAlertIncomplete)
import intl5 from "intl" /* 1126 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5924 */;
import MemberVerificationAlertDefault from "MemberVerificationAlert" /* 5934 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5967 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4706 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let guildId, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let closure_3 = ["guildId", "onClose"];
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let _require;
  let closure_1;
  let items2;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp6;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(29);
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
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildJoinRequestStore];
    cResult[4] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4) {
    const fn = function _() {
      return UserGuildJoinRequestStore.getJoinRequestGuild(guildId);
    };
    const items1 = [tmp4];
    cResult[5] = tmp4;
    cResult[6] = fn;
    cResult[7] = items1;
    tmp13 = items1;
    tmp12 = fn;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === tmp4) {
    let tmp15;
    if (cResult[9] === tmp5) {
      tmp15 = cResult[10];
    }
    if (cResult[11] === tmp4) {
      let tmp16;
      let tmp17;
      let tmp24;
      let tmp29;
      if (cResult[12] === tmp5) {
        tmp16 = cResult[13];
      }
      if (cResult[14] !== stateFromStores) {
        let formatToPlainStringResult;
        class P {
          constructor() {
            let intl;
            let intl2;
            if (closure_1 != null) {
              tmp();
            }
            const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
            const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
            MemberVerificationAlertActionCreators;
            intl = intl5.intl;
            intl2 = intl5.intl;
            const result = openMemberVerificationCancelPendingAlert(obj);
          }
        }
        if (null != undefined) {
          let intl = tmp(1126).intl;
          const formatToPlainString = intl.formatToPlainString;
          class P {
            constructor() {
              let intl;
              let intl2;
              if (closure_1 != null) {
                tmp();
              }
              const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
              const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
              MemberVerificationAlertActionCreators;
              intl = intl5.intl;
              intl2 = intl5.intl;
              const result = openMemberVerificationCancelPendingAlert(obj);
            }
          }
          tmp21[0] = stateFromStores.name;
          formatToPlainStringResult = formatToPlainString(tmp(1126).t.f5Jaw7, tmp21);
        } else {
          const string = tmp(1126).intl.string;
          class P {
            constructor() {
              let intl;
              let intl2;
              if (closure_1 != null) {
                tmp();
              }
              const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
              const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
              MemberVerificationAlertActionCreators;
              intl = intl5.intl;
              intl2 = intl5.intl;
              const result = openMemberVerificationCancelPendingAlert(obj);
            }
          }
        }
        cResult[14] = stateFromStores;
        cResult[15] = formatToPlainStringResult;
        tmp17 = formatToPlainStringResult;
      } else {
        tmp17 = cResult[15];
      }
      class P {
        constructor() {
          let intl;
          let intl2;
          if (closure_1 != null) {
            tmp();
          }
          const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
          const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
          MemberVerificationAlertActionCreators;
          intl = intl5.intl;
          intl2 = intl5.intl;
          const result = openMemberVerificationCancelPendingAlert(obj);
        }
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const string2 = tmp(1126).intl.string;
        class P {
          constructor() {
            let intl;
            let intl2;
            if (closure_1 != null) {
              tmp();
            }
            const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
            const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
            MemberVerificationAlertActionCreators;
            intl = intl5.intl;
            intl2 = intl5.intl;
            const result = openMemberVerificationCancelPendingAlert(obj);
          }
        }
        cResult[16] = tmp23;
      }
      if (cResult[17] !== tmp15) {
        const obj2 = { variant: "secondary", text: null, onPress: tmp15 };
        class P {
          constructor() {
            let intl;
            let intl2;
            if (closure_1 != null) {
              tmp();
            }
            const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
            const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
            MemberVerificationAlertActionCreators;
            intl = intl5.intl;
            intl2 = intl5.intl;
            const result = openMemberVerificationCancelPendingAlert(obj);
          }
        }
        const tmp26 = closure_7(tmp(5601).Button, obj2);
        cResult[17] = tmp15;
        cResult[18] = tmp26;
        tmp24 = tmp26;
      } else {
        tmp24 = cResult[18];
      }
      const _Symbol = Symbol;
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const string3 = tmp(1126).intl.string;
        class P {
          constructor() {
            let intl;
            let intl2;
            if (closure_1 != null) {
              tmp();
            }
            const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
            const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
            MemberVerificationAlertActionCreators;
            intl = intl5.intl;
            intl2 = intl5.intl;
            const result = openMemberVerificationCancelPendingAlert(obj);
          }
        }
        cResult[19] = tmp28;
      }
      if (cResult[20] !== tmp16) {
        const obj3 = { text: null, variant: "destructive", onPress: tmp16 };
        class P {
          constructor() {
            let intl;
            let intl2;
            if (closure_1 != null) {
              tmp();
            }
            const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
            const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
            MemberVerificationAlertActionCreators;
            intl = intl5.intl;
            intl2 = intl5.intl;
            const result = openMemberVerificationCancelPendingAlert(obj);
          }
        }
        const tmp31 = closure_7(tmp(5601).Button, obj3);
        cResult[20] = tmp16;
        cResult[21] = tmp31;
        tmp29 = tmp31;
      } else {
        tmp29 = cResult[21];
      }
      if (cResult[22] === tmp29) {
        let tmp32;
        if (cResult[23] === tmp24) {
          tmp32 = cResult[24];
        }
        if (cResult[25] === tmp17) {
          if (cResult[26] === tmp6) {
            let tmp36;
            if (cResult[27] === tmp32) {
              tmp36 = cResult[28];
            }
            return tmp36;
          }
        }
        class P {
          constructor() {
            let intl;
            let intl2;
            if (closure_1 != null) {
              tmp();
            }
            const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
            const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
            MemberVerificationAlertActionCreators;
            intl = intl5.intl;
            intl2 = intl5.intl;
            const result = openMemberVerificationCancelPendingAlert(obj);
          }
        }
        const obj4 = { icon: tmp(6595).ListViewIcon, header: tmp17, buttons: tmp32 };
        const tmp38 = MemberVerificationAlertDefault;
        const merged = Object.assign(tmp6);
        const tmp42 = closure_7(tmp38, obj4);
        cResult[25] = tmp17;
        cResult[26] = tmp6;
        cResult[27] = tmp32;
        cResult[28] = tmp42;
        tmp36 = tmp42;
      }
      const obj5 = { children: items2 };
      items2 = [tmp24, tmp29];
      const tmp35 = closure_9(closure_8, obj5);
      cResult[22] = tmp29;
      cResult[23] = tmp24;
      cResult[24] = tmp35;
      tmp32 = tmp35;
    }
    class P {
      constructor() {
        let intl;
        let intl2;
        if (closure_1 != null) {
          tmp();
        }
        const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
        const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
        MemberVerificationAlertActionCreators;
        intl = intl5.intl;
        intl2 = intl5.intl;
        const result = openMemberVerificationCancelPendingAlert(obj);
      }
    }
    cResult[11] = tmp4;
    cResult[12] = tmp5;
    cResult[13] = P;
    tmp16 = P;
  }
  const fn2 = function p() {
    if (closure_1 != null) {
      tmp();
    }
    const obj = MemberVerificationModalActionCreators;
    const result = obj.openMemberVerificationModal(guildId);
  };
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = fn2;
  tmp15 = fn2;
}) : ((guildId) => {
  let formatToPlainStringResult;
  let intl3;
  let intl4;
  let items4;
  let obj4;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
  let obj = guildId(573);
  const items = [UserGuildJoinRequestStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildJoinRequestStore.getJoinRequestGuild(guildId), items1);
  const items2 = [guildId, onClose];
  const items3 = [guildId, onClose];
  const callback = react.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj = MemberVerificationModalActionCreators;
    const result = obj.openMemberVerificationModal(guildId);
  }, items2);
  let name;
  const callback1 = react.useCallback(() => {
    let intl;
    let intl2;
    if (onClose != null) {
      tmp();
    }
    const obj = { guildId, subtitleText: intl.string(intl5.t.fJwWVt), confirmText: intl2.string(intl5.t.OQFlFD) };
    const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
    MemberVerificationAlertActionCreators;
    intl = intl5.intl;
    intl2 = intl5.intl;
    const result = openMemberVerificationCancelPendingAlert(obj);
  }, items3);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (null != name) {
    let intl2 = tmp2(1126).intl;
    const obj2 = { guildName: stateFromStores.name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1126).t.f5Jaw7, obj2);
  } else {
    let intl = tmp2(1126).intl;
    formatToPlainStringResult = intl.string(tmp2(1126).t["0sTyEb"]);
  }
  const obj3 = { icon: guildId(6595).ListViewIcon, header: formatToPlainStringResult, buttons: closure_9(closure_8, obj4) };
  const tmp9 = onClose(5934);
  const merged1 = Object.assign(merged);
  obj4 = { children: items4 };
  const obj5 = { variant: "secondary", text: intl3.string(guildId(1126).t.h3aGmv), onPress: callback };
  const Button = tmp2(5601).Button;
  intl3 = tmp2(1126).intl;
  items4 = [closure_7(Button, obj5), ];
  const obj6 = { text: intl4.string(guildId(1126).t.OQFlFD), variant: "destructive", onPress: callback1 };
  const Button2 = tmp2(5601).Button;
  intl4 = tmp2(1126).intl;
  items4[1] = closure_7(Button2, obj6);
  return closure_7(tmp9, obj3);
});
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx");

export default tmp3;