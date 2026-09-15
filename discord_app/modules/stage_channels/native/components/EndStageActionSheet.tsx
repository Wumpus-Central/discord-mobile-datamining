// === Module 9213: EndStageActionSheet ===

// Module 9213 (EndStageActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8519 */;
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet" /* 8717 */;
import CallsUtils from "CallsUtils" /* 9214 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(5499).EXPLICIT_END_STAGE_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: { fontSize: 24, fontFamily: fn(1074).Fonts.PRIMARY_BOLD, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, subtitle: { marginTop: 8, textAlign: "center" }, cancelButton: { marginTop: 24, alignSelf: "stretch" }, confirmButton: { marginTop: 8, alignSelf: "stretch" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/EndStageActionSheet.tsx");

export default function EndStageActionSheet(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  let obj = { children: null };
  let obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = channel(1115).intl;
  obj3.children = intl.string(channel(1115).t.pADdJu);
  const items = [closure_5(channel(1177).LegacyText, obj3), , , ];
  const obj4 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = channel(1115).intl;
  obj4.children = intl2.string(channel(1115).t.mT7jwN);
  items[1] = closure_5(channel(4635).Text, obj4);
  const obj5 = { style: tmp.cancelButton, children: null };
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl3 = channel(1115).intl;
  obj6.text = intl3.string(channel(1115).t.xTwqz2);
  obj6.onPress = function handleClose() {
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
    CallsUtils.handleDisconnect(channel);
  };
  obj5.children = closure_5(channel(5059).Button, obj6);
  items[2] = closure_5(View, obj5);
  const obj7 = { style: tmp.confirmButton, children: null };
  const obj8 = { variant: "destructive", text: null, onPress: null };
  const intl4 = channel(1115).intl;
  obj8.text = intl4.string(channel(1115).t.wnWqGg);
  obj8.onPress = function onPress() {
    StageChannelActionCreators.endStage(channel);
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
    CallsUtils.handleDisconnect(channel);
  };
  obj7.children = closure_5(channel(5059).Button, obj8);
  items[3] = closure_5(View, obj7);
  obj2.children = items;
  obj.children = closure_6(View, obj2);
  return closure_5(ScrollHandlingActionSheetDefault, obj);
};