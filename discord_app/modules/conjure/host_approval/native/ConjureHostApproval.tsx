// === Module 11740: host_approval/ConjureHostApproval ===

// Module 11740 (host_approval/ConjureHostApproval)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5216 */;
import components_Button_Button from "components/Button/Button" /* 5226 */;
import Stack_Stack from "Stack/Stack" /* 5957 */;
import ConjureHostApproval from "ConjureHostApproval" /* 10693 */;
import ConjureAwaitingUser from "ConjureAwaitingUser" /* 11741 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 11742 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4966);
let obj2 = { cards: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 }, card: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.card = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHostApprovalCard(projectId) {
  const cResult = projectId(576).c(35);
  projectId = projectId.projectId;
  const approval = projectId.approval;
  const tmp4 = closure_6();
  const id = approval.id;
  ({ host, reason } = approval);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_4(tmp(11741).ConjureAwaitingPulseRing, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: null };
    const intl = tmp(1128).intl;
    obj2.children = intl.string(id(3830).W4DsVo);
    const tmp11 = closure_4(tmp(5216).Text, obj2);
    cResult[1] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== host) {
    const intl2 = tmp(1128).intl;
    const obj3 = { host };
    const formatResult = intl2.format(id(3830).E4Gc7e, obj3);
    cResult[2] = host;
    cResult[3] = formatResult;
    let tmp12 = formatResult;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== tmp12) {
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: tmp12 };
    const tmp17 = closure_4(tmp(5216).Text, obj4);
    cResult[4] = tmp12;
    cResult[5] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== reason) {
    let tmp19 = null;
    if ("" !== reason) {
      const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl3 = tmp(1128).intl;
      const obj6 = { reason };
      obj5.children = intl3.format(id(3830)["5poqiN"], obj6);
      tmp19 = closure_4(tmp(5216).Text, obj5);
    }
    cResult[6] = reason;
    cResult[7] = tmp19;
    let tmp18 = tmp19;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] === id) {
    if (cResult[9] === projectId) {
      let tmp22 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1128).intl;
      const stringResult = intl4.string(id(3830).B05C3K);
      cResult[11] = stringResult;
      let tmp23 = stringResult;
    } else {
      tmp23 = cResult[11];
    }
    if (cResult[12] !== tmp22) {
      const obj7 = { variant: "primary", size: "sm", onPress: tmp22, text: tmp23 };
      const tmp28 = closure_4(tmp(5226).Button, obj7);
      cResult[12] = tmp22;
      cResult[13] = tmp28;
      let tmp26 = tmp28;
    } else {
      tmp26 = cResult[13];
    }
    if (cResult[14] === id) {
      if (cResult[15] === projectId) {
        let tmp29 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1128).intl;
        cResult[17] = intl5.string(id(3830)["rGv+om"]);
        class C {
          constructor() {
            obj = closure_0(closure_2[11]);
            return obj.answerHostApproval(projectId, id, "deny");
          }
        }
        const stringResult1 = intl5.string(id(3830)["rGv+om"]);
      } else {
        const tmp31 = cResult[17];
      }
      if (cResult[18] !== tmp29) {
        const obj8 = { variant: "secondary", size: "sm", onPress: tmp29, text: tmp31 };
        const tmp36 = closure_4(tmp(5226).Button, obj8);
        class C {
          constructor() {
            obj = closure_0(closure_2[11]);
            return obj.answerHostApproval(projectId, id, "deny");
          }
        }
        cResult[19] = tmp36;
        let tmp34 = tmp36;
      } else {
        tmp34 = cResult[19];
      }
      if (cResult[20] === id) {
        if (cResult[21] === projectId) {
          let tmp37 = cResult[22];
        }
        const _Symbol3 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = tmp(1128).intl;
          cResult[23] = intl6.string(id(3830).vWkaSE);
          class C {
            constructor() {
              obj = closure_0(closure_2[11]);
              return obj.answerHostApproval(projectId, id, "deny");
            }
          }
          const stringResult2 = intl6.string(id(3830).vWkaSE);
        } else {
          const tmp38 = cResult[23];
        }
        if (cResult[24] !== tmp37) {
          const obj9 = { variant: "secondary", size: "sm", onPress: tmp37, text: tmp38 };
          const tmp43 = closure_4(tmp(5226).Button, obj9);
          class C {
            constructor() {
              obj = closure_0(closure_2[11]);
              return obj.answerHostApproval(projectId, id, "deny");
            }
          }
          cResult[25] = tmp43;
          let tmp41 = tmp43;
        } else {
          tmp41 = cResult[25];
        }
        if (cResult[26] === tmp34) {
          if (cResult[27] === tmp41) {
            if (cResult[28] === tmp26) {
              let tmp44 = cResult[29];
            }
            if (cResult[30] === tmp4.card) {
              if (cResult[31] === tmp44) {
                if (cResult[32] === tmp15) {
                  if (cResult[33] === tmp18) {
                    let tmp47 = cResult[34];
                  }
                  return tmp47;
                }
              }
            }
            const obj10 = { style: tmp4.card, children: null };
            class C {
              constructor() {
                obj = closure_0(closure_2[11]);
                return obj.answerHostApproval(projectId, id, "deny");
              }
            }
            tmp50[0] = first;
            tmp50[1] = tmp8;
            tmp50[2] = tmp15;
            tmp50[3] = tmp18;
            tmp50[4] = tmp44;
            obj10.children = tmp50;
            const tmp51 = closure_5(id(11742), obj10);
            cResult[30] = tmp4.card;
            cResult[31] = tmp44;
            cResult[32] = tmp15;
            cResult[33] = tmp18;
            cResult[34] = tmp51;
            tmp47 = tmp51;
          }
        }
        class C {
          constructor() {
            obj = closure_0(closure_2[11]);
            return obj.answerHostApproval(projectId, id, "deny");
          }
        }
        const obj11 = { direction: "horizontal", spacing: id(587).space.PX_8, children: null };
        const items = [tmp26, tmp34, tmp41];
        obj11.children = items;
        const tmp46 = closure_5(tmp(5957).Stack, obj11);
        cResult[26] = tmp34;
        cResult[27] = tmp41;
        cResult[28] = tmp26;
        cResult[29] = tmp46;
        tmp44 = tmp46;
      }
      class C {
        constructor() {
          obj = closure_0(closure_2[11]);
          return obj.answerHostApproval(projectId, id, "deny");
        }
      }
      cResult[20] = id;
      cResult[21] = projectId;
      cResult[22] = C;
      tmp37 = C;
    }
    cResult[14] = id;
    cResult[15] = projectId;
    cResult[16] = tmp30;
    tmp29 = tmp30;
  }
  const fn = function h() {
    return ConjureHostApproval.answerHostApproval(projectId, id, "once");
  };
  cResult[8] = id;
  cResult[9] = projectId;
  cResult[10] = fn;
  tmp22 = fn;
  const obj = projectId(576);
}) : (function ConjureHostApprovalCard(arg0) {
  ({ projectId: require, approval } = arg0);
  importDefault = undefined;
  ({ id: c1, reason } = approval);
  const obj = { style: closure_6().card, children: null };
  const tmp = closure_6();
  const items = [closure_4(ConjureAwaitingUser.ConjureAwaitingPulseRing, {}), , , , ];
  const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3830.W4DsVo);
  items[1] = closure_4(Text_Text.Text, obj2);
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3830.E4Gc7e, { host: approval.host });
  items[2] = closure_4(Text_Text.Text, obj3);
  let tmp6Result = null;
  if ("" !== reason) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl3 = util.intl;
    const obj5 = { reason };
    obj4.children = intl3.format(tmp3(3830)["5poqiN"], obj5);
    tmp6Result = closure_4(Text_Text.Text, obj4);
  }
  items[3] = tmp6Result;
  const obj6 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
  const obj7 = {
    variant: "primary",
    size: "sm",
    onPress() {
      return ConjureHostApproval.answerHostApproval(_require, c1, "once");
    },
    text: null
  };
  const intl4 = util.intl;
  obj7.text = intl4.string(_modDef3830.B05C3K);
  const items1 = [closure_4(components_Button_Button.Button, obj7), , ];
  const obj8 = {
    variant: "secondary",
    size: "sm",
    onPress() {
      return ConjureHostApproval.answerHostApproval(_require, c1, "always");
    },
    text: null
  };
  const intl5 = util.intl;
  obj8.text = intl5.string(_modDef3830["rGv+om"]);
  items1[1] = closure_4(components_Button_Button.Button, obj8);
  const obj9 = {
    variant: "secondary",
    size: "sm",
    onPress() {
      return ConjureHostApproval.answerHostApproval(_require, c1, "deny");
    },
    text: null
  };
  const intl6 = util.intl;
  obj9.text = intl6.string(_modDef3830.vWkaSE);
  items1[2] = closure_4(components_Button_Button.Button, obj9);
  obj6.children = items1;
  items[4] = closure_5(Stack_Stack.Stack, obj6);
  obj.children = items;
  return closure_5(ConjureNativeCardSurfaceDefault, obj);
});
fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHostApprovalCards(projectId) {
  const cResult = projectId(576).c(8);
  projectId = projectId.projectId;
  const tmp2 = closure_6();
  const obj = projectId(576);
  const conjureHostApprovals = projectId(10693).useConjureHostApprovals(projectId);
  let num = 0;
  if (0 === conjureHostApprovals.length) {
    return null;
  } else {
    if (cResult[0] === conjureHostApprovals) {
      if (cResult[1] === projectId) {
        if (cResult[5] === tmp2.cards) {
          if (cResult[6] === tmp3) {
            let tmp7 = cResult[7];
          }
          return tmp7;
        }
        const obj3 = { style: tmp12, children: cResult[2] };
        const tmp10 = closure_4(View, obj3);
        cResult[5] = tmp2.cards;
        cResult[6] = cResult[2];
        cResult[7] = tmp10;
        tmp7 = tmp10;
      }
    }
    if (cResult[3] !== projectId) {
      const fn = function x(approval) {
        return React4(closure_7, { projectId, approval }, approval.id);
      };
      cResult[3] = projectId;
      cResult[4] = fn;
      let tmp4 = fn;
    } else {
      tmp4 = cResult[4];
    }
    const mapped = conjureHostApprovals.map(tmp4);
    cResult[num] = conjureHostApprovals;
    cResult[1] = projectId;
    num = 2;
    cResult[2] = mapped;
  }
  const obj2 = projectId(10693);
}) : (function ConjureHostApprovalCards(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_6();
  const conjureHostApprovals = projectId(10693).useConjureHostApprovals(projectId);
  let tmp2 = null;
  if (0 !== conjureHostApprovals.length) {
    const obj2 = { style: tmp.cards, children: conjureHostApprovals.map((approval) => React4(closure_7, { projectId, approval }, approval.id)) };
    tmp2 = closure_4(View, obj2);
  }
  return tmp2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/host_approval/native/ConjureHostApproval.tsx");

export const ConjureHostApprovalCards = tmp4;
export const ConjureAllowedHostsSetting = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAllowedHostsSetting(projectId) {
  let TableRowGroup = projectId;
  let tmp = dependencyMap;
  const cResult = projectId(576).c(7);
  projectId = projectId.projectId;
  let obj = projectId(576);
  const conjureAllowedHosts = projectId(10693).useConjureAllowedHosts(projectId);
  if (null == conjureAllowedHosts) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = TableRowGroup(1128).intl;
      const stringResult = intl.string(_modDef3830.Ufr2wk);
      let intl2 = TableRowGroup(1128).intl;
      const stringResult1 = intl2.string(_modDef3830.wremls);
      cResult[0] = stringResult;
      cResult[1] = stringResult1;
      tmp4 = stringResult;
      tmp5 = stringResult1;
    } else {
      [tmp4, tmp5] = cResult;
    }
    if (cResult[2] === conjureAllowedHosts) {
      if (cResult[3] === projectId) {
        if (cResult[5] !== cResult[4]) {
          TableRowGroup = TableRowGroup(6966).TableRowGroup;
          const obj3 = { title: tmp4, description: tmp5, hasIcons: false, children: tmp9 };
          tmp = closure_4(TableRowGroup, obj3);
          cResult[5] = tmp9;
          cResult[6] = tmp;
        }
      }
    }
    if (0 === conjureAllowedHosts.length) {
      const obj4 = { label: null };
      const intl3 = TableRowGroup(1128).intl;
      obj4.label = intl3.string(_modDef3830.AweHIi);
      let mapped = closure_4(TableRowGroup(6882).TableRow, obj4);
    } else {
      mapped = conjureAllowedHosts.map((label) => {
        closure_0 = label;
        const obj = { label, trailing: null };
        const obj2 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, onPress: null };
        const intl = projectId(1128).intl;
        obj2.text = intl.string(_modDef3830["4r+tVj"]);
        const intl2 = projectId(1128).intl;
        obj2.accessibilityLabel = intl2.formatToPlainString(_modDef3830.mocW6h, { host: label });
        obj2.onPress = function onPress() {
          return ConjureHostApproval.removeAllowedHost(projectId, closure_0);
        };
        obj.trailing = closure_1_4(projectId(5226).Button, obj2);
        return closure_1_4(projectId(6882).TableRow, obj, label);
      });
    }
    cResult[2] = conjureAllowedHosts;
    cResult[3] = projectId;
    cResult[4] = mapped;
  }
  let obj2 = projectId(10693);
}) : (function ConjureAllowedHostsSetting(projectId) {
  projectId = projectId.projectId;
  let intl = projectId;
  let stringResult = dependencyMap;
  const conjureAllowedHosts = projectId(10693).useConjureAllowedHosts(projectId);
  if (null == conjureAllowedHosts) {
    return null;
  } else {
    let obj2 = { title: null, description: null, hasIcons: false, children: null };
    let intl2 = intl(1128).intl;
    obj2.title = intl2.string(_modDef3830.Ufr2wk);
    const intl3 = intl(1128).intl;
    obj2.description = intl3.string(_modDef3830.wremls);
    if (0 === conjureAllowedHosts.length) {
      const obj3 = { label: null };
      intl = intl(1128).intl;
      stringResult = intl.string(_modDef3830.AweHIi);
      obj3.label = stringResult;
      let mapped = closure_4(intl(6882).TableRow, obj3);
    } else {
      mapped = conjureAllowedHosts.map((label) => {
        closure_0 = label;
        const obj = { label, trailing: null };
        const obj2 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, onPress: null };
        const intl = projectId(1128).intl;
        obj2.text = intl.string(_modDef3830["4r+tVj"]);
        const intl2 = projectId(1128).intl;
        obj2.accessibilityLabel = intl2.formatToPlainString(_modDef3830.mocW6h, { host: label });
        obj2.onPress = function onPress() {
          return ConjureHostApproval.removeAllowedHost(projectId, closure_0);
        };
        obj.trailing = closure_1_4(projectId(5226).Button, obj2);
        return closure_1_4(projectId(6882).TableRow, obj, label);
      });
    }
    obj2.children = mapped;
    closure_4(intl(6966).TableRowGroup, obj2);
  }
  let obj = projectId(10693);
});