// discord_app/modules/conjure/contexts/native/ConjureContextBoundaryRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  contextBoundary: { gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 },
  contextRule: null,
  contextLine: null,
  contextLabel: null,
  contextText: null,
  contextCentered: null,
};
let obj3 = { gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
obj2.contextRule = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.contextLine = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
let obj5 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
obj2.contextLabel = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_6,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_10,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_6,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_10,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
obj2.contextText = {
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.contextCentered = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/contexts/native/ConjureContextBoundaryRow.tsx");

export default function ConjureContextBoundaryRow(arg0) {
  let action;
  ({ projectId, contextSwitch } = arg0);
  const tmp = closure_7();
  const conjureContextSwitchRow = action(12474).useConjureContextSwitchRow(projectId, contextSwitch);
  if (null == conjureContextSwitchRow) {
    return null;
  } else {
    action = conjureContextSwitchRow.action;
    let obj2 = { style: tmp.contextBoundary, children: null };
    let obj3 = { style: tmp.contextRule, children: null };
    let obj4 = { style: tmp.contextLine };
    let items = [closure_4(View, obj4), ,];
    let obj5 = { style: tmp.contextLabel, accessible: true, accessibilityRole: "header", children: null };
    const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const items1 = [closure_4(tmp2(11635).ChatPlusIcon, obj6)];
    const obj7 = { variant: "text-xs/semibold", color: "text-default", children: conjureContextSwitchRow.label };
    items1[1] = closure_4(tmp2(5624).Text, obj7);
    obj5.children = items1;
    items[1] = closure_5(View, obj5);
    const obj8 = { style: tmp.contextLine };
    items[2] = closure_4(View, obj8);
    obj3.children = items;
    const items2 = [closure_5(View, obj3)];
    const obj9 = { style: tmp.contextText, accessibilityLiveRegion: "polite", children: null };
    const obj10 = { variant: "text-sm/normal", color: "text-muted", style: tmp.contextCentered, children: null };
    const items3 = [conjureContextSwitchRow.body];
    let tmp8Result = null;
    if (null != action) {
      let str = "text-link";
      if (action.disabled) {
        str = "text-muted";
      }
      const obj11 = { children: null };
      const obj12 = {
        variant: "text-sm/medium",
        color: str,
        accessibilityRole: "link",
        accessibilityLabel: action.text,
        accessibilityState: null,
        disabled: null,
        onPress: null,
        children: null,
      };
      const obj13 = { disabled: action.disabled };
      obj12.accessibilityState = obj13;
      obj12.disabled = action.disabled;
      obj12.onPress = function onPress() {
        const onPress = action.onPress;
        if (action.confirm) {
          const obj2 = { title: null, content: null, actions: null };
          const intl = util.intl;
          obj2.title = intl.string(_modDef3868["i+xjZM"]);
          const intl2 = util.intl;
          obj2.content = intl2.string(_modDef3868.fMBZmD);
          const obj3 = { children: null };
          const obj4 = { variant: "destructive", text: null, onPress: null };
          const intl3 = util.intl;
          obj4.text = intl3.string(_modDef3868.i5f3Uo);
          obj4.onPress = onPress;
          const items = [React4(AlertModal.AlertActionButton, obj4)];
          const obj5 = { variant: "secondary", text: null };
          const intl4 = util.intl;
          obj5.text = intl4.string(util.t["ETE/oC"]);
          items[1] = React4(AlertModal.AlertActionButton, obj5);
          obj3.children = items;
          obj2.actions = hasOwnProperty(timestampProducer, obj3);
          useAlertStore.openAlert("ConjureContextSwitchRevert", React4(AlertModal.AlertModal, obj2));
        } else {
          const onPressResult = onPress();
        }
        return onPressResult;
      };
      obj12.children = action.text;
      const items4 = [" ", closure_4(tmp2(5624).Text, obj12)];
      obj11.children = items4;
      tmp8Result = closure_5(closure_6, obj11);
    }
    items3[1] = tmp8Result;
    obj10.children = items3;
    const items5 = [closure_5(tmp2(5624).Text, obj10)];
    let tmp10Result = null;
    if (null != conjureContextSwitchRow.note) {
      const obj14 = {
        variant: "text-xs/normal",
        color: "text-muted",
        style: tmp.contextCentered,
        children: conjureContextSwitchRow.note,
      };
      tmp10Result = closure_4(tmp2(5624).Text, obj14);
    }
    items5[1] = tmp10Result;
    obj9.children = items5;
    items2[1] = closure_5(View, obj9);
    obj2.children = items2;
    return closure_5(View, obj2);
  }
  let obj = action(12474);
}
