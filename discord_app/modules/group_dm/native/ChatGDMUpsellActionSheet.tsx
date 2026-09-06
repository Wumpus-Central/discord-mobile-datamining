// discord_app/modules/group_dm/native/ChatGDMUpsellActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef11604 from "../../../../_runtime/metro/11604__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  title: null,
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
createStyles = { marginBottom: nativeDefault.space.PX_4, textAlign: "center" };
createStyles.title = createStyles;
createStyles.footer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
createStyles.body = { textAlign: "center" };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
createStyles.noticeContainer = {
  borderRadius: nativeDefault.radii.sm,
  marginVertical: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
};
createStyles.innerContainer = { flexDirection: "row", alignItems: "center", paddingBottom: 16 };
createStyles.secondInnerContainer = { flexDirection: "row", alignItems: "center" };
createStyles.text = { flex: 1 };
createStyles.titleImage = { padding: 16, justifyContent: "center", alignItems: "center" };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  marginRight: 16,
  height: 40,
  width: 40,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
};
createStyles.item = size;
let obj2 = {
  borderRadius: nativeDefault.radii.sm,
  marginVertical: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
};
createStyles.button = { paddingTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(createStyles);
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
  obj = { style: tmp.titleImage, children: null };
  obj = { source: _modDef11604, resizeMode: "contain" };
  obj.children = closure_5(FastImageDefault, obj);
  obj.header = closure_5(View, obj);
  const obj1 = { style: null, children: null };
  const items1 = [tmp.footer];
  items1[1] = { padding: 16, paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  obj1.style = items1;
  const obj3 = { text: null, onPress: null };
  const intl = onClick(1114).intl;
  obj3.text = intl.string(onClick(1114).t["3PatSz"]);
  obj3.onPress = callback;
  const items2 = [closure_5(onClick(4975).Button, obj3)];
  const obj4 = { style: tmp.button, children: null };
  const obj5 = { text: null, onPress: null, variant: "tertiary" };
  const intl2 = onClick(1114).intl;
  obj5.text = intl2.string(onClick(1114).t["ETE/oC"]);
  obj5.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj4.children = closure_5(onClick(4975).Button, obj5);
  items2[1] = closure_5(View, obj4);
  obj1.children = items2;
  obj.footer = closure_6(View, obj1);
  const obj6 = { children: null };
  const obj7 = { style: tmp.title, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
  const intl3 = onClick(1114).intl;
  obj7.children = intl3.string(onClick(1114).t["bkqux/"]);
  const items3 = [closure_5(onClick(4556).Text, obj7), ,];
  const obj8 = { style: tmp.body, variant: "text-md/medium", color: "text-muted", children: null };
  const intl4 = onClick(1114).intl;
  obj8.children = intl4.string(onClick(1114).t.N6TdqN);
  items3[1] = closure_5(onClick(4556).Text, obj8);
  const obj9 = { style: tmp.noticeContainer, children: null };
  const obj10 = { style: tmp.innerContainer, children: null };
  const obj2 = { padding: 16, paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  const items4 = [closure_5(View, { style: tmp.item, children: closure_5(onClick(11605).TimerIcon, { size: "sm" }) })];
  const obj12 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl5 = onClick(1114).intl;
  obj12.children = intl5.string(onClick(1114).t.Fq3DJb);
  items4[1] = closure_5(onClick(4556).Text, obj12);
  obj10.children = items4;
  const items5 = [closure_6(View, obj10)];
  const obj13 = { style: tmp.secondInnerContainer, children: null };
  const obj11 = { style: tmp.item, children: closure_5(onClick(11605).TimerIcon, { size: "sm" }) };
  const items6 = [closure_5(View, { style: tmp.item, children: closure_5(onClick(4503).LinkIcon, { size: "sm" }) })];
  const obj15 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl6 = onClick(1114).intl;
  obj15.children = intl6.string(onClick(1114).t.XKbf2G);
  items6[1] = closure_5(onClick(4556).Text, obj15);
  obj13.children = items6;
  items5[1] = closure_6(View, obj13);
  obj9.children = items5;
  items3[2] = closure_6(View, obj9);
  obj6.children = items3;
  obj.children = closure_6(onClick(6627).BottomSheetScrollView, obj6);
  return closure_5(onClick(7150).BottomSheet, obj);
}
