// === Module 9298: EndEventActionSheet ===

// Module 9298 (EndEventActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9178 */;
import CallsUtils from "CallsUtils" /* 9299 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_4 = GuildScheduledEventsConstants.EXPLICIT_END_EVENT_SHEET_KEY;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: obj2, subtitle: { marginTop: 8, textAlign: "center" }, cancelButtonContainer: { marginTop: 24, alignSelf: "stretch" }, confirmButtonContainer: { marginTop: 8, alignSelf: "stretch" } };
obj2 = { fontSize: 24, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let closure_2;
  let container;
  let items;
  let obj8;
  let title;
  let obj = channel(576);
  const cResult = obj.c(29);
  channel = channel.channel;
  const tmp4 = closure_7();
  let obj2 = channel(9160);
  const activeEvent = obj2.useActiveEvent(channel.id);
  if (null == activeEvent) {
    return null;
  } else {
    let tmp6;
    if (cResult[0] !== channel) {
      const fn = function o() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(closure_4);
        const obj2 = CallsUtils;
        obj2.handleDisconnect(channel);
      };
      cResult[0] = channel;
      cResult[1] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[1];
    }
    dependencyMap = tmp6;
    if (cResult[2] === activeEvent) {
      let tmp7;
      let tmp9;
      let tmp11;
      let tmp14;
      let tmp16;
      let tmp19;
      let tmp21;
      if (cResult[3] === tmp6) {
        tmp7 = cResult[4];
      }
      const _Symbol = Symbol;
      ({ container, title } = tmp4);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(channel(1126).t["4Ao8LC"]);
        cResult[5] = stringResult;
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== tmp4.title) {
        const obj3 = { style: title, accessibilityRole: "header", children: tmp9 };
        const tmp13 = closure_5(channel(1188).LegacyText, obj3);
        cResult[6] = tmp4.title;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[7];
      }
      const _Symbol2 = Symbol;
      const subtitle = tmp4.subtitle;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(channel(1126).t["0I0B8f"]);
        cResult[8] = stringResult1;
        tmp14 = stringResult1;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] !== tmp4.subtitle) {
        const obj4 = { style: subtitle, variant: "text-md/medium", color: "text-default", children: tmp14 };
        const tmp18 = closure_5(channel(4886).Text, obj4);
        cResult[9] = tmp4.subtitle;
        cResult[10] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[10];
      }
      const _Symbol3 = Symbol;
      const cancelButtonContainer = tmp4.cancelButtonContainer;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(channel(1126).t.P60OAX);
        cResult[11] = stringResult2;
        tmp19 = stringResult2;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] !== tmp6) {
        const obj5 = { text: tmp19, grow: true, onPress: tmp6 };
        const tmp23 = closure_5(channel(5594).Button, obj5);
        cResult[12] = tmp6;
        cResult[13] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[13];
      }
      if (cResult[14] === tmp4.cancelButtonContainer) {
        let tmp24;
        let tmp28;
        let tmp30;
        if (cResult[15] === tmp21) {
          tmp24 = cResult[16];
        }
        const _Symbol4 = Symbol;
        const confirmButtonContainer = tmp4.confirmButtonContainer;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult3 = intl4.string(channel(1126).t.mjB9pd);
          cResult[17] = stringResult3;
          tmp28 = stringResult3;
        } else {
          tmp28 = cResult[17];
        }
        if (cResult[18] !== tmp7) {
          const obj6 = { text: tmp28, variant: "destructive", grow: true, onPress: tmp7 };
          const tmp32 = closure_5(channel(5594).Button, obj6);
          cResult[18] = tmp7;
          cResult[19] = tmp32;
          tmp30 = tmp32;
        } else {
          tmp30 = cResult[19];
        }
        if (cResult[20] === tmp4.confirmButtonContainer) {
          let tmp33;
          if (cResult[21] === tmp30) {
            tmp33 = cResult[22];
          }
          if (cResult[23] === tmp4.container) {
            if (cResult[24] === tmp24) {
              if (cResult[25] === tmp33) {
                if (cResult[26] === tmp11) {
                  let tmp37;
                  if (cResult[27] === tmp16) {
                    tmp37 = cResult[28];
                  }
                  return tmp37;
                }
              }
            }
          }
          const obj7 = { children: closure_6(View, obj8) };
          obj8 = { style: container, children: items };
          items = [tmp11, tmp16, tmp24, tmp33];
          const tmp40 = activeEvent(9466);
          const tmp43 = closure_5(tmp40, obj7);
          cResult[23] = tmp4.container;
          cResult[24] = tmp24;
          cResult[25] = tmp33;
          cResult[26] = tmp11;
          cResult[27] = tmp16;
          cResult[28] = tmp43;
          tmp37 = tmp43;
        }
        const obj9 = { style: confirmButtonContainer, children: tmp30 };
        const tmp36 = closure_5(View, obj9);
        cResult[20] = tmp4.confirmButtonContainer;
        cResult[21] = tmp30;
        cResult[22] = tmp36;
        tmp33 = tmp36;
      }
      const obj10 = { style: cancelButtonContainer, children: tmp21 };
      const tmp27 = closure_5(View, obj10);
      cResult[14] = tmp4.cancelButtonContainer;
      cResult[15] = tmp21;
      cResult[16] = tmp27;
      tmp24 = tmp27;
    }
    const fn2 = function y() {
      if (null != activeEvent) {
        const obj = GuildScheduledEventsActionCreatorsDefault;
        obj.endEvent(activeEvent.id, activeEvent.guild_id);
        closure_2();
      }
    };
    cResult[2] = activeEvent;
    cResult[3] = tmp6;
    cResult[4] = fn2;
    tmp7 = fn2;
  }
}) : ((channel) => {
  let Button;
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let obj7;
  let obj9;
  channel = channel.channel;
  const tmp = closure_7();
  let obj = channel(9160);
  const activeEvent = obj.useActiveEvent(channel.id);
  if (null == activeEvent) {
    return null;
  } else {
    function handleClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_4);
      const obj2 = CallsUtils;
      obj2.handleDisconnect(channel);
    }
    let obj2 = { children: closure_6(View, obj3) };
    obj3 = { style: tmp.container, children: items };
    const obj4 = { style: tmp.title, accessibilityRole: "header", children: intl.string(channel(1126).t["4Ao8LC"]) };
    const tmp7 = activeEvent(9466);
    const LegacyText = tmp2(1188).LegacyText;
    intl = tmp2(1126).intl;
    items = [closure_5(LegacyText, obj4), , , ];
    const obj5 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: intl2.string(channel(1126).t["0I0B8f"]) };
    const Text = tmp2(4886).Text;
    intl2 = tmp2(1126).intl;
    items[1] = closure_5(Text, obj5);
    const obj6 = { style: tmp.cancelButtonContainer, children: closure_5(Button, obj7) };
    obj7 = { text: intl3.string(channel(1126).t.P60OAX), grow: true, onPress: handleClose };
    Button = tmp2(5594).Button;
    intl3 = tmp2(1126).intl;
    items[2] = closure_5(View, obj6);
    const obj8 = { style: tmp.confirmButtonContainer, children: closure_5(Button2, obj9) };
    obj9 = {
      text: intl4.string(channel(1126).t.mjB9pd),
      variant: "destructive",
      grow: true,
      onPress() {
          if (null != activeEvent) {
            const obj = GuildScheduledEventsActionCreatorsDefault;
            obj.endEvent(activeEvent.id, activeEvent.guild_id);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet(closure_4);
            const obj3 = CallsUtils;
            obj3.handleDisconnect(channel);
          }
        }
    };
    Button2 = tmp2(5594).Button;
    intl4 = tmp2(1126).intl;
    items[3] = closure_5(View, obj8);
    return closure_5(tmp7, obj2);
  }
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EndEventActionSheet.tsx");

export default tmp4;