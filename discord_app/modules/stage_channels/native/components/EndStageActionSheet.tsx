// === Module 9081: EndStageActionSheet ===

// Module 9081 (EndStageActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8398 */;
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet" /* 8591 */;
import CallsUtils from "CallsUtils" /* 9082 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(5414).EXPLICIT_END_STAGE_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: null, subtitle: null, cancelButton: null, confirmButton: null };
createStyles = { fontSize: 24, fontFamily: fn(1074).Fonts.PRIMARY_BOLD, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.title = createStyles;
createStyles.subtitle = { marginTop: 8, textAlign: "center" };
createStyles.cancelButton = { marginTop: 24, alignSelf: "stretch" };
createStyles.confirmButton = { marginTop: 8, alignSelf: "stretch" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/EndStageActionSheet.tsx");

export default function EndStageActionSheet(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = channel(1114).intl;
  obj.children = intl.string(channel(1114).t.pADdJu);
  const items = [closure_5(channel(1178).LegacyText, obj), , , ];
  const obj1 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = channel(1114).intl;
  obj1.children = intl2.string(channel(1114).t.mT7jwN);
  items[1] = closure_5(channel(4556).Text, obj1);
  let obj2 = { style: tmp.cancelButton, children: null };
  const obj3 = { variant: "secondary", text: null, onPress: null };
  const intl3 = channel(1114).intl;
  obj3.text = intl3.string(channel(1114).t.xTwqz2);
  obj3.onPress = function handleClose() {
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
    CallsUtils.handleDisconnect(channel);
  };
  obj2.children = closure_5(channel(4975).Button, obj3);
  items[2] = closure_5(View, obj2);
  const obj4 = { style: tmp.confirmButton, children: null };
  const obj5 = { variant: "destructive", text: null, onPress: null };
  const intl4 = channel(1114).intl;
  obj5.text = intl4.string(channel(1114).t.wnWqGg);
  obj5.onPress = function onPress() {
    StageChannelActionCreators.endStage(channel);
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
    CallsUtils.handleDisconnect(channel);
  };
  obj4.children = closure_5(channel(4975).Button, obj5);
  items[3] = closure_5(View, obj4);
  obj.children = items;
  obj.children = closure_6(View, obj);
  return closure_5(ScrollHandlingActionSheetDefault, obj);
};