// === Module 9805: EndEventActionSheet ===

// Module 9805 (EndEventActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import CallsUtils from "CallsUtils" /* 9082 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9703 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(1963).EXPLICIT_END_EVENT_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: null, subtitle: null, cancelButtonContainer: null, confirmButtonContainer: null };
createStyles = { fontSize: 24, fontFamily: fn(1074).Fonts.PRIMARY_BOLD, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.title = createStyles;
createStyles.subtitle = { marginTop: 8, textAlign: "center" };
createStyles.cancelButtonContainer = { marginTop: 24, alignSelf: "stretch" };
createStyles.confirmButtonContainer = { marginTop: 8, alignSelf: "stretch" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EndEventActionSheet.tsx");

export default function EndEventActionSheet(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  let obj = channel(9662);
  const activeEvent = obj.useActiveEvent(channel.id);
  if (null == activeEvent) {
    return null;
  } else {
    function handleClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
      CallsUtils.handleDisconnect(channel);
    }
    obj = { children: null };
    obj = { style: tmp.container, children: null };
    const obj1 = { style: tmp.title, accessibilityRole: "header", children: null };
    const intl = tmp2(1114).intl;
    obj1.children = intl.string(tmp2(1114).t["4Ao8LC"]);
    const items = [closure_5(tmp2(1178).LegacyText, obj1), , , ];
    let obj2 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
    const intl2 = tmp2(1114).intl;
    obj2.children = intl2.string(tmp2(1114).t["0I0B8f"]);
    items[1] = closure_5(tmp2(4556).Text, obj2);
    let obj3 = { style: tmp.cancelButtonContainer, children: null };
    const obj4 = { text: null, grow: true, onPress: null };
    const intl3 = tmp2(1114).intl;
    obj4.text = intl3.string(tmp2(1114).t.P60OAX);
    obj4.onPress = handleClose;
    obj3.children = closure_5(tmp2(4975).Button, obj4);
    items[2] = closure_5(View, obj3);
    const obj5 = { style: tmp.confirmButtonContainer, children: null };
    const obj6 = { text: null, variant: "destructive", grow: true, onPress: null };
    const intl4 = tmp2(1114).intl;
    obj6.text = intl4.string(tmp2(1114).t.mjB9pd);
    obj6.onPress = function onPress() {
      if (null != activeEvent) {
        GuildScheduledEventsActionCreatorsDefault.endEvent(tmp.id, tmp.guild_id);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
        CallsUtils.handleDisconnect(channel);
      }
    };
    obj5.children = closure_5(tmp2(4975).Button, obj6);
    items[3] = closure_5(View, obj5);
    obj.children = items;
    obj.children = closure_6(View, obj);
    return closure_5(activeEvent(8591), obj);
  }
};