// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx
import util from "../../../../../intl/index.native.tsx";
import MemberVerificationAlertActionCreators from "../../MemberVerificationAlertActionCreators.tsx";
import MemberVerificationAlertDefault from "MemberVerificationAlert.tsx";
import MemberVerificationModalActionCreators from "../../../MemberVerificationModalActionCreators.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserGuildJoinRequestStore from "../../../UserGuildJoinRequestStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["guildId", "onClose"];
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MemberVerificationAlertIncomplete(guildId) {
  const cResult = require("c").c(29);
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
    class I {
      constructor() {
        if (closure_1 != null) {
          tmpResult = tmp();
        }
        obj = closure_0(closure_2[7]);
        result = obj.openMemberVerificationModal(closure_0);
        return;
      }
    }
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildJoinRequestStore];
    cResult[4] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4) {
    const fn = function _() {
      return UserGuildJoinRequestStore.getJoinRequestGuild(closure_0);
    };
    const items1 = [tmp4];
    cResult[5] = tmp4;
    cResult[6] = fn;
    cResult[7] = items1;
    let tmp13 = items1;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === tmp4) {
    if (cResult[9] === tmp5) {
      let tmp15 = cResult[10];
    }
    if (cResult[11] === tmp4) {
      if (cResult[12] === tmp5) {
        let tmp16 = cResult[13];
      }
      if (cResult[14] !== stateFromStores) {
        let name;
        if (stateFromStores != null) {
          name = stateFromStores.name;
        }
        if (null != name) {
          let intl2 = tmp(1126).intl;
          let obj2 = { guildName: stateFromStores.name };
          let formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.f5Jaw7, obj2);
        } else {
          let intl = tmp(1126).intl;
          formatToPlainStringResult = intl.string(tmp(1126).t["0sTyEb"]);
        }
        cResult[14] = stateFromStores;
        cResult[15] = formatToPlainStringResult;
      } else {
        const _Symbol = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(tmp(1126).t.h3aGmv);
          cResult[16] = stringResult;
          let tmp22 = stringResult;
        } else {
          tmp22 = cResult[16];
        }
        if (cResult[17] !== tmp15) {
          const obj3 = { variant: "secondary", text: tmp22, onPress: tmp15 };
          const tmp26 = closure_7(tmp(5376).Button, obj3);
          cResult[17] = tmp15;
          cResult[18] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[18];
        }
        const _Symbol2 = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult1 = intl4.string(tmp(1126).t.OQFlFD);
          cResult[19] = stringResult1;
          let tmp27 = stringResult1;
        } else {
          tmp27 = cResult[19];
        }
        if (cResult[20] !== tmp16) {
          const obj4 = { text: tmp27, variant: "destructive", onPress: tmp16 };
          const tmp31 = closure_7(tmp(5376).Button, obj4);
          cResult[20] = tmp16;
          cResult[21] = tmp31;
          let tmp29 = tmp31;
        } else {
          tmp29 = cResult[21];
        }
        if (cResult[22] === tmp29) {
          if (cResult[23] === tmp24) {
            let tmp32 = cResult[24];
          }
          if (cResult[25] === tmp17) {
            if (cResult[26] === tmp6) {
              if (cResult[27] === tmp32) {
                let tmp36 = cResult[28];
              }
              return tmp36;
            }
          }
          const obj5 = {};
          const merged = Object.assign(tmp6);
          obj5.icon = tmp(6778).ListViewIcon;
          obj5.header = tmp17;
          obj5.buttons = tmp32;
          const tmp43 = closure_7(MemberVerificationAlertDefault, obj5);
          cResult[25] = tmp17;
          cResult[26] = tmp6;
          class I {
            constructor() {
              if (closure_1 != null) {
                tmpResult = tmp();
              }
              obj = closure_0(closure_2[7]);
              result = obj.openMemberVerificationModal(closure_0);
              return;
            }
          }
          cResult[27] = tmp32;
          cResult[28] = tmp43;
          tmp36 = tmp43;
        }
        const items2 = [tmp24, tmp29];
        { children: null }.children = items2;
        class I {
          constructor() {
            if (closure_1 != null) {
              tmpResult = tmp();
            }
            obj = closure_0(closure_2[7]);
            result = obj.openMemberVerificationModal(closure_0);
            return;
          }
        }
        cResult[22] = tmp29;
        cResult[23] = tmp24;
        cResult[24] = tmp35;
        tmp32 = tmp35;
        const obj6 = { children: null };
      }
    }
    const fn2 = function h() {
      if (closure_1 != null) {
        tmp();
      }
      const obj2 = { guildId, subtitleText: null, confirmText: null };
      const intl = util.intl;
      obj2.subtitleText = intl.string(util.t.fJwWVt);
      const intl2 = util.intl;
      obj2.confirmText = intl2.string(util.t.OQFlFD);
      const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert(obj2);
    };
    cResult[11] = tmp4;
    cResult[12] = tmp5;
    cResult[13] = fn2;
    tmp16 = fn2;
  }
  class I {
    constructor() {
      if (closure_1 != null) {
        tmpResult = tmp();
      }
      obj = closure_0(closure_2[7]);
      result = obj.openMemberVerificationModal(closure_0);
      return;
    }
  }
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = I;
  tmp15 = I;
  const tmpResult = require("useStateFromStores");
}) : (function MemberVerificationAlertIncomplete(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
  const items = [UserGuildJoinRequestStore];
  const items1 = [guildId];
  const stateFromStores = guildId(573).useStateFromStores(items, () => UserGuildJoinRequestStore.getJoinRequestGuild(guildId), items1);
  const items2 = [guildId, onClose];
  const items3 = [guildId, onClose];
  const callback = noop.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const result = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
  }, items2);
  let name;
  const callback1 = noop.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj2 = { guildId, subtitleText: null, confirmText: null };
    const intl = util.intl;
    obj2.subtitleText = intl.string(util.t.fJwWVt);
    const intl2 = util.intl;
    obj2.confirmText = intl2.string(util.t.OQFlFD);
    const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert(obj2);
  }, items3);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (null != name) {
    let intl2 = tmp2(1126).intl;
    let obj2 = { guildName: stateFromStores.name };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1126).t.f5Jaw7, obj2);
  } else {
    let intl = tmp2(1126).intl;
    formatToPlainStringResult = intl.string(tmp2(1126).t["0sTyEb"]);
  }
  const obj3 = {};
  const obj = guildId(573);
  const merged1 = Object.assign(merged);
  obj3.icon = guildId(6778).ListViewIcon;
  obj3.header = formatToPlainStringResult;
  const obj4 = { children: null };
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl3 = tmp2(1126).intl;
  obj5.text = intl3.string(guildId(1126).t.h3aGmv);
  obj5.onPress = callback;
  const items4 = [closure_7(guildId(5376).Button, obj5), ];
  const obj6 = { text: null, variant: "destructive", onPress: null };
  const intl4 = tmp2(1126).intl;
  obj6.text = intl4.string(guildId(1126).t.OQFlFD);
  obj6.onPress = callback1;
  items4[1] = closure_7(guildId(5376).Button, obj6);
  obj4.children = items4;
  obj3.buttons = closure_9(closure_8, obj4);
  return closure_7(onClose(6119), obj3);
});