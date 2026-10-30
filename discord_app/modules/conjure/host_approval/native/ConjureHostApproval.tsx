// discord_app/modules/conjure/host_approval/native/ConjureHostApproval.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import ConjureHostApproval from "../ConjureHostApproval.tsx";
import ConjureNativeCardSurfaceDefault from "../../shared/native/ConjureNativeCardSurface.tsx";
import ConjureAwaitingUser from "../../chat/native/ConjureAwaitingUser.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ConjureHostApprovalCard(arg0) {
  ({ projectId: require, approval } = arg0);
  importDefault = undefined;
  ({ id: c1, reason } = approval);
  const obj = { style: closure_6().card, children: null };
  const tmp = closure_6();
  const items = [closure_4(ConjureAwaitingUser.ConjureAwaitingPulseRing, {}), , , ,];
  const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3865.W4DsVo);
  items[1] = closure_4(Text_Text.Text, obj2);
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3865.E4Gc7e, { host: approval.host });
  items[2] = closure_4(Text_Text.Text, obj3);
  let tmp6Result = null;
  if ("" !== reason) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl3 = util.intl;
    const obj5 = { reason };
    obj4.children = intl3.format(tmp3(3865)["5poqiN"], obj5);
    tmp6Result = closure_4(Text_Text.Text, obj4);
  }
  items[3] = tmp6Result;
  const obj6 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
  const obj7 = {
    variant: "primary",
    size: "sm",
    onPress() {
      return ConjureHostApproval.answerHostApproval(closure_1_0, c1, "once");
    },
    text: null,
  };
  const intl4 = util.intl;
  obj7.text = intl4.string(_modDef3865.B05C3K);
  const items1 = [closure_4(components_Button_Button.Button, obj7), ,];
  const obj8 = {
    variant: "secondary",
    size: "sm",
    onPress() {
      return ConjureHostApproval.answerHostApproval(closure_1_0, c1, "always");
    },
    text: null,
  };
  const intl5 = util.intl;
  obj8.text = intl5.string(_modDef3865["rGv+om"]);
  items1[1] = closure_4(components_Button_Button.Button, obj8);
  const obj9 = {
    variant: "secondary",
    size: "sm",
    onPress() {
      return ConjureHostApproval.answerHostApproval(closure_1_0, c1, "deny");
    },
    text: null,
  };
  const intl6 = util.intl;
  obj9.text = intl6.string(_modDef3865.vWkaSE);
  items1[2] = closure_4(components_Button_Button.Button, obj9);
  obj6.children = items1;
  items[4] = closure_5(Stack_Stack.Stack, obj6);
  obj.children = items;
  return closure_5(ConjureNativeCardSurfaceDefault, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = { cards: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 }, card: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.card = {
  marginTop: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/host_approval/native/ConjureHostApproval.tsx");

export function ConjureHostApprovalCards(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_6();
  const conjureHostApprovals = projectId(10870).useConjureHostApprovals(projectId);
  let tmp2 = null;
  if (0 !== conjureHostApprovals.length) {
    const obj2 = {
      style: tmp.cards,
      children: conjureHostApprovals.map((approval) =>
        React4(ConjureHostApprovalCard, { projectId, approval }, approval.id),
      ),
    };
    tmp2 = closure_4(View, obj2);
  }
  return tmp2;
}
export function ConjureAllowedHostsSetting(projectId) {
  projectId = projectId.projectId;
  let intl = projectId;
  let stringResult = dependencyMap;
  const conjureAllowedHosts = projectId(10870).useConjureAllowedHosts(projectId);
  if (null == conjureAllowedHosts) {
    return null;
  } else {
    let obj2 = { title: null, description: null, hasIcons: false, children: null };
    let intl2 = intl(1114).intl;
    obj2.title = intl2.string(_modDef3865.Ufr2wk);
    const intl3 = intl(1114).intl;
    obj2.description = intl3.string(_modDef3865.wremls);
    if (0 === conjureAllowedHosts.length) {
      const obj3 = { label: null };
      intl = intl(1114).intl;
      stringResult = intl.string(_modDef3865.AweHIi);
      obj3.label = stringResult;
      let mapped = closure_4(intl(6969).TableRow, obj3);
    } else {
      mapped = conjureAllowedHosts.map((label) => {
        closure_0 = label;
        const obj = { label, trailing: null };
        const obj2 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, onPress: null };
        const intl = projectId(1114).intl;
        obj2.text = intl.string(_modDef3865["4r+tVj"]);
        const intl2 = projectId(1114).intl;
        obj2.accessibilityLabel = intl2.formatToPlainString(_modDef3865.mocW6h, { host: label });
        obj2.onPress = function onPress() {
          return ConjureHostApproval.removeAllowedHost(projectId, closure_0);
        };
        obj.trailing = closure_1_4(projectId(5629).Button, obj2);
        return closure_1_4(projectId(6969).TableRow, obj, label);
      });
    }
    obj2.children = mapped;
    closure_4(intl(7054).TableRowGroup, obj2);
  }
  let obj = projectId(10870);
}
