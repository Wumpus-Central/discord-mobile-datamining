// discord_app/modules/conjure/scope_setup/native/ConjureScopeServerCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ConjureNativeCardSurfaceDefault from "../../shared/native/ConjureNativeCardSurface.tsx";
import ConjureClarificationEntityPickerDefault from "../../clarification/native/ConjureClarificationEntityPicker.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = [];
const createStyles = fn(5014);
let obj2 = {
  surface: { marginTop: nativeDefault.space.PX_8, padding: 0, overflow: "hidden" },
  header: null,
  content: null,
  footer: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_8, padding: 0, overflow: "hidden" };
obj2.header = {
  gap: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj4 = {
  gap: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.content = { gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
let obj5 = { gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
obj2.footer = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_12,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeServerCard.tsx");

export default function ConjureScopeServerCard(card) {
  card = card.card;
  let onPickServer;
  let id;
  const tmp = closure_9();
  const first = _slicedToArray(card.clarification.questions, 1)[0];
  let default_entities = first.default_entities;
  if (default_entities == null) {
    default_entities = closure_8;
  }
  const tmp2Result = _slicedToArray(noop.useState(default_entities), 2);
  const first1 = tmp2Result[0];
  onPickServer = card.onPickServer;
  const onBack = card.onBack;
  const first2 = first1[0];
  id = undefined;
  if (first2 != null) {
    id = first2.id;
  }
  const obj = { style: tmp.surface, children: null };
  const obj2 = { style: tmp.header, children: null };
  const obj3 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3868.ickKBI);
  const items = [timestampProducer(Text_Text.Text, obj3)];
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(_modDef3868.OyM4SV);
  items[1] = timestampProducer(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [React5(View, obj2), ,];
  const obj5 = { style: tmp.content, children: null };
  const items2 = [
    timestampProducer(ConjureClarificationEntityPickerDefault, {
      projectId: card.projectId,
      question: first,
      value: first1,
      disabled: null == onPickServer,
      onChange: tmp2Result[1],
      fallback: null,
    }),
  ];
  let tmp14Result = null;
  if (null != first.note) {
    const obj7 = { variant: "text-xs/normal", color: "text-muted", children: first.note };
    tmp14Result = timestampProducer(Text_Text.Text, obj7);
  }
  items2[1] = tmp14Result;
  obj5.children = items2;
  items1[1] = React5(View, obj5);
  const obj8 = { style: tmp.footer, children: null };
  const obj9 = { variant: "primary", size: "sm", text: null, disabled: null, onPress: null };
  const intl3 = util.intl;
  obj9.text = intl3.string(_modDef3868.PTIP7V);
  obj9.disabled = null == id || null == onPickServer;
  obj9.onPress = function onPress() {
    if (null != id) {
      if (onPickServer != null) {
        tmp2(tmp);
      }
    }
  };
  const items3 = [timestampProducer(components_Button_Button.Button, obj9)];
  let tmp14Result2 = null;
  if (null != onBack) {
    const obj10 = { variant: "tertiary", size: "sm", text: null, onPress: null };
    const intl4 = util.intl;
    obj10.text = intl4.string(util.t["ETE/oC"]);
    obj10.onPress = onBack;
    tmp14Result2 = timestampProducer(components_Button_Button.Button, obj10);
  }
  items3[1] = tmp14Result2;
  obj8.children = items3;
  items1[2] = React5(View, obj8);
  obj.children = items1;
  return React5(ConjureNativeCardSurfaceDefault, obj);
}
