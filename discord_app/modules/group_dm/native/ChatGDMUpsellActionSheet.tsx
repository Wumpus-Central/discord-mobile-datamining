// discord_app/modules/group_dm/native/ChatGDMUpsellActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef11942 from "../../../../_runtime/metro/11942__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  title: { marginBottom: nativeDefault.space.PX_4, textAlign: "center" },
  footer: null,
  body: null,
  noticeContainer: null,
  innerContainer: null,
  secondInnerContainer: null,
  text: null,
  titleImage: null,
  item: null,
  button: null,
};
let obj3 = { marginBottom: nativeDefault.space.PX_4, textAlign: "center" };
obj2.footer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
obj2.body = { textAlign: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
obj2.noticeContainer = {
  borderRadius: nativeDefault.radii.sm,
  marginVertical: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
};
obj2.innerContainer = { flexDirection: "row", alignItems: "center", paddingBottom: 16 };
obj2.secondInnerContainer = { flexDirection: "row", alignItems: "center" };
obj2.text = { flex: 1 };
obj2.titleImage = { padding: 16, justifyContent: "center", alignItems: "center" };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  marginRight: 16,
  height: 40,
  width: 40,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
};
obj2.item = size;
let obj5 = {
  borderRadius: nativeDefault.radii.sm,
  marginVertical: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
};
obj2.button = { paddingTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMUpsellActionSheet.tsx");

export default function ChatGDMUpsellActionSheet(onClick) {
  onClick = onClick.onClick;
  const tmp = closure_7();
  const items = [onClick];
  const callback = noop.useCallback(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
      dismissible_content.DismissibleContent.GDM_INVITE_REMINDER,
    );
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onClick();
  }, items);
  let obj = { showGradient: true, scrollable: true, startExpanded: true, header: null, footer: null, children: null };
  const obj2 = { style: tmp.titleImage, children: null };
  const obj3 = { source: _modDef11942, resizeMode: "contain" };
  obj2.children = closure_5(FastImageDefault, obj3);
  obj.header = closure_5(View, obj2);
  const obj4 = { style: null, children: null };
  const items1 = [tmp.footer];
  items1[1] = { padding: 16, paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  obj4.style = items1;
  const obj6 = { text: null, onPress: null };
  const intl = onClick(1115).intl;
  obj6.text = intl.string(onClick(1115).t["3PatSz"]);
  obj6.onPress = callback;
  const items2 = [closure_5(onClick(5273).Button, obj6)];
  const obj7 = { style: tmp.button, children: null };
  const obj8 = { text: null, onPress: null, variant: "tertiary" };
  const intl2 = onClick(1115).intl;
  obj8.text = intl2.string(onClick(1115).t["ETE/oC"]);
  obj8.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj7.children = closure_5(onClick(5273).Button, obj8);
  items2[1] = closure_5(View, obj7);
  obj4.children = items2;
  obj.footer = closure_6(View, obj4);
  const obj9 = { children: null };
  const obj10 = { style: tmp.title, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
  const intl3 = onClick(1115).intl;
  obj10.children = intl3.string(onClick(1115).t["bkqux/"]);
  const items3 = [closure_5(onClick(4825).Text, obj10), ,];
  const obj11 = { style: tmp.body, variant: "text-md/medium", color: "text-muted", children: null };
  const intl4 = onClick(1115).intl;
  obj11.children = intl4.string(onClick(1115).t.N6TdqN);
  items3[1] = closure_5(onClick(4825).Text, obj11);
  const obj12 = { style: tmp.noticeContainer, children: null };
  const obj13 = { style: tmp.innerContainer, children: null };
  const obj5 = { padding: 16, paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  const items4 = [closure_5(View, { style: tmp.item, children: closure_5(onClick(11943).TimerIcon, { size: "sm" }) })];
  const obj15 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl5 = onClick(1115).intl;
  obj15.children = intl5.string(onClick(1115).t.Fq3DJb);
  items4[1] = closure_5(onClick(4825).Text, obj15);
  obj13.children = items4;
  const items5 = [closure_6(View, obj13)];
  const obj16 = { style: tmp.secondInnerContainer, children: null };
  const obj14 = { style: tmp.item, children: closure_5(onClick(11943).TimerIcon, { size: "sm" }) };
  const items6 = [closure_5(View, { style: tmp.item, children: closure_5(onClick(4771).LinkIcon, { size: "sm" }) })];
  const obj18 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl6 = onClick(1115).intl;
  obj18.children = intl6.string(onClick(1115).t.XKbf2G);
  items6[1] = closure_5(onClick(4825).Text, obj18);
  obj16.children = items6;
  items5[1] = closure_6(View, obj16);
  obj12.children = items5;
  items3[2] = closure_6(View, obj12);
  obj9.children = items3;
  obj.children = closure_6(onClick(6957).BottomSheetScrollView, obj9);
  return closure_5(onClick(7483).BottomSheet, obj);
}
