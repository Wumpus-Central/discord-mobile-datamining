// === Module 6110: MemberVerificationAlertSuccess ===

// Module 6110 (MemberVerificationAlertSuccess)
import LottieAnimationViewDefault from "LottieAnimationView" /* 6112 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import GuildStore from "GuildStore" /* 2086 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["guildId", "handleConfirmAndAck"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles({ alert: { marginTop: 120 }, header: { marginTop: 40, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" }, illustrationContainer: { position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", left: 0, right: 0, top: -220 }, illustration: { height: 246, width: 240 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertSuccess.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MemberVerificationAlertSuccess(guildId) {
  const cResult = require("c").c(36);
  if (cResult[0] !== guildId) {
    guildId = guildId.guildId;
    _require = guildId;
    const handleConfirmAndAck = guildId.handleConfirmAndAck;
    importDefault = handleConfirmAndAck;
    const tmp9 = _objectWithoutProperties(guildId, closure_3);
    dependencyMap = tmp9;
    cResult[0] = guildId;
    cResult[1] = guildId;
    cResult[2] = handleConfirmAndAck;
    cResult[3] = tmp9;
    const tmp5 = handleConfirmAndAck;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    dependencyMap = cResult[3];
  }
  const tmp10 = closure_10();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[4] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp4) {
    const fn = function b() {
      return GuildStore.getGuild(closure_0);
    };
    const items1 = [tmp4];
    cResult[5] = tmp4;
    cResult[6] = fn;
    cResult[7] = items1;
    let tmp14 = items1;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AccessibilityStore];
    class M {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[8] = items2;
    cResult[9] = M;
  }
  require("initialize");
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[10] === tmp5) {
      const _Symbol = Symbol;
      class M {
        constructor() {
          return closure_1_6.useReducedMotion;
        }
      }
      const _Symbol2 = Symbol;
      ({ alert: _alert, illustrationContainer } = tmp10);
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        cResult[14] = tmp(6111);
        class M {
          constructor() {
            return closure_1_6.useReducedMotion;
          }
        }
        const tmpResult4 = tmp(6111);
      } else {
        const tmp23 = cResult[14];
      }
      if (cResult[15] === tmp10.illustration) {
        if (cResult[16] === tmp25) {
          let tmp26 = cResult[17];
        }
        if (cResult[18] === tmp10.illustrationContainer) {
          if (cResult[21] !== stateFromStores.name) {
            const intl = tmp(1126).intl;
            class M {
              constructor() {
                return closure_1_6.useReducedMotion;
              }
            }
            const formatResult = intl.format(tmp(1126).t["7hhNEn"], { guildName: null });
            cResult[21] = stateFromStores.name;
            cResult[22] = formatResult;
            let tmp33 = formatResult;
            const obj2 = { guildName: null };
          } else {
            tmp33 = cResult[22];
          }
          class M {
            constructor() {
              return closure_1_6.useReducedMotion;
            }
          }
          const obj3 = { style: tmp10.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp33 };
          const tmp37 = closure_8(tmp(5087).Heading, obj3);
          cResult[23] = tmp10.header;
          cResult[24] = tmp33;
          cResult[25] = tmp37;
        }
        class M {
          constructor() {
            return closure_1_6.useReducedMotion;
          }
        }
        const obj4 = { style: illustrationContainer, children: tmp26 };
        const tmp32 = closure_8(View, obj4);
        cResult[18] = tmp10.illustrationContainer;
        cResult[19] = tmp26;
        cResult[20] = tmp32;
      }
      const obj5 = { source: tmp23, autoPlay: !tmp20, style: tmp10.illustration };
      const tmp29 = closure_8(LottieAnimationViewDefault, obj5);
      cResult[15] = tmp10.illustration;
      cResult[16] = !tmp20;
      cResult[17] = tmp29;
      tmp26 = tmp29;
    }
    function onConfirm() {
      closure_1();
      onClose = onClose.onClose;
      if (onClose != null) {
        onClose();
      }
    }
    class M {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[11] = tmp6;
    cResult[12] = onConfirm;
  }
  const tmpResult = require("initialize");
}) : (function MemberVerificationAlertSuccess(guildId) {
  guildId = guildId.guildId;
  const handleConfirmAndAck = guildId.handleConfirmAndAck;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, handleConfirmAndAck: 0 }));
  const tmp2 = closure_10();
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(merged[9]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  guildId(merged[9]);
  [][0] = AccessibilityStore;
  if (null == stateFromStores) {
    return null;
  } else {
    function onConfirm() {
      handleConfirmAndAck();
      const onClose = merged.onClose;
      if (onClose != null) {
        onClose();
      }
    }
    const obj2 = {};
    const merged1 = Object.assign(merged);
    const intl = tmp3(tmp4[10]).intl;
    obj2.confirmText = intl.string(tmp3(tmp4[10]).t.NuzmOA);
    obj2.style = tmp2.alert;
    obj2.onCancel = onConfirm;
    obj2.onConfirm = onConfirm;
    const obj3 = { style: tmp2.illustrationContainer, children: null };
    const obj4 = { source: null, autoPlay: null, style: null };
    const tmp10 = handleConfirmAndAck(tmp4[14]);
    obj4.source = tmp3(tmp4[11]);
    obj4.autoPlay = !tmp7;
    obj4.style = tmp2.illustration;
    obj3.children = closure_8(handleConfirmAndAck(tmp4[12]), obj4);
    const items2 = [closure_8(View, obj3), , ];
    const obj5 = { style: tmp2.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp3(tmp4[10]).intl;
    const obj6 = { guildName: stateFromStores.name };
    obj5.children = intl2.format(tmp3(tmp4[10]).t["7hhNEn"], obj6);
    items2[1] = closure_8(tmp3(tmp4[13]).Heading, obj5);
    const obj7 = { style: tmp2.text, variant: "text-sm/medium", color: "text-default", children: null };
    const intl3 = tmp3(tmp4[10]).intl;
    obj7.children = intl3.string(tmp3(tmp4[10]).t.nwpqyc);
    items2[2] = closure_8(tmp3(tmp4[13]).Text, obj7);
    obj2.children = items2;
    return closure_9(tmp10, obj2);
  }
  const obj = guildId(merged[9]);
});