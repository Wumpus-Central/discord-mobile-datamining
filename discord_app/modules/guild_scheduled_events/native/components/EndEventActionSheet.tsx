// === Module 9201: EndEventActionSheet ===

// Module 9201 (EndEventActionSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8958 */;
import CallsUtils from "CallsUtils" /* 9202 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(4864).EXPLICIT_END_EVENT_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: { fontSize: 24, fontFamily: fn(1072).Fonts.PRIMARY_BOLD, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, subtitle: { marginTop: 8, textAlign: "center" }, cancelButtonContainer: { marginTop: 24, alignSelf: "stretch" }, confirmButtonContainer: { marginTop: 8, alignSelf: "stretch" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EndEventActionSheet.tsx");

export default function EndEventActionSheet(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  const activeEvent = channel(9071).useActiveEvent(channel.id);
  if (null == activeEvent) {
    return null;
  } else {
    function handleClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
      CallsUtils.handleDisconnect(channel);
    }
    let obj2 = { children: null };
    let obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.title, accessibilityRole: "header", children: null };
    const intl = tmp2(1114).intl;
    obj4.children = intl.string(tmp2(1114).t["4Ao8LC"]);
    const items = [closure_5(tmp2(1188).LegacyText, obj4), , , ];
    const obj5 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
    const intl2 = tmp2(1114).intl;
    obj5.children = intl2.string(tmp2(1114).t["0I0B8f"]);
    items[1] = closure_5(tmp2(5619).Text, obj5);
    const obj6 = { style: tmp.cancelButtonContainer, children: null };
    const obj7 = { text: null, grow: true, onPress: null };
    const intl3 = tmp2(1114).intl;
    obj7.text = intl3.string(tmp2(1114).t.P60OAX);
    obj7.onPress = handleClose;
    obj6.children = closure_5(tmp2(5629).Button, obj7);
    items[2] = closure_5(View, obj6);
    const obj8 = { style: tmp.confirmButtonContainer, children: null };
    const obj9 = { text: null, variant: "destructive", grow: true, onPress: null };
    const intl4 = tmp2(1114).intl;
    obj9.text = intl4.string(tmp2(1114).t.mjB9pd);
    obj9.onPress = function handleConfirmClick() {
      if (null != activeEvent) {
        GuildScheduledEventsActionCreatorsDefault.endEvent(activeEvent.id, activeEvent.guild_id);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
        CallsUtils.handleDisconnect(channel);
      }
    };
    obj8.children = closure_5(tmp2(5629).Button, obj9);
    items[3] = closure_5(View, obj8);
    obj3.children = items;
    obj2.children = closure_6(View, obj3);
    return closure_5(activeEvent(14701), obj2);
  }
  let obj = channel(9071);
};