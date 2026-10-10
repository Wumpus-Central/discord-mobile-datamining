// === Module 8784: EndEventActionSheet ===

// Module 8784 (EndEventActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8518 */;
import CallsUtils from "CallsUtils" /* 8785 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(2071).EXPLICIT_END_EVENT_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: { fontSize: 24, fontFamily: fn(1085).Fonts.PRIMARY_BOLD, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, subtitle: { marginTop: 8, textAlign: "center" }, cancelButtonContainer: { marginTop: 24, alignSelf: "stretch" }, confirmButtonContainer: { marginTop: 8, alignSelf: "stretch" } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { fontSize: 24, fontFamily: fn(1085).Fonts.PRIMARY_BOLD, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EndEventActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EndEventActionSheet(channel) {
  const cResult = channel(576).c(29);
  channel = channel.channel;
  const tmp4 = closure_7();
  let obj = channel(576);
  const activeEvent = channel(8654).useActiveEvent(channel.id);
  if (null == activeEvent) {
    return null;
  } else {
    if (cResult[0] !== channel) {
      function handleClose() {
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
        CallsUtils.handleDisconnect(channel);
      }
      cResult[0] = channel;
      cResult[1] = handleClose;
      let tmp6 = handleClose;
    } else {
      tmp6 = cResult[1];
    }
    dependencyMap = tmp6;
    if (cResult[2] === activeEvent) {
      if (cResult[3] === tmp6) {
        let tmp7 = cResult[4];
      }
      const _Symbol = Symbol;
      ({ container, title } = tmp4);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["4Ao8LC"]);
        cResult[5] = stringResult;
        let tmp9 = stringResult;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== tmp4.title) {
        const obj3 = { style: title, accessibilityRole: "header", children: tmp9 };
        const tmp13 = closure_5(tmp(1200).LegacyText, obj3);
        cResult[6] = tmp4.title;
        cResult[7] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[7];
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t["0I0B8f"]);
        cResult[8] = stringResult1;
        let tmp14 = stringResult1;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] !== tmp4.subtitle) {
        const obj4 = { style: tmp4.subtitle, variant: "text-md/medium", color: "text-default", children: tmp14 };
        const tmp18 = closure_5(tmp(5088).Text, obj4);
        cResult[9] = tmp4.subtitle;
        cResult[10] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[10];
      }
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(tmp(1126).t.P60OAX);
        cResult[11] = stringResult2;
        let tmp19 = stringResult2;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] !== tmp6) {
        const obj5 = { text: tmp19, grow: true, onPress: tmp6 };
        const tmp23 = closure_5(tmp(5379).Button, obj5);
        cResult[12] = tmp6;
        cResult[13] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[13];
      }
      if (cResult[14] === tmp4.cancelButtonContainer) {
        if (cResult[15] === tmp21) {
          let tmp24 = cResult[16];
        }
        const _Symbol4 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult3 = intl4.string(tmp(1126).t.mjB9pd);
          cResult[17] = stringResult3;
          let tmp28 = stringResult3;
        } else {
          tmp28 = cResult[17];
        }
        if (cResult[18] !== tmp7) {
          const obj6 = { text: tmp28, variant: "destructive", grow: true, onPress: tmp7 };
          const tmp32 = closure_5(tmp(5379).Button, obj6);
          cResult[18] = tmp7;
          cResult[19] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[19];
        }
        if (cResult[20] === tmp4.confirmButtonContainer) {
          if (cResult[21] === tmp30) {
            let tmp33 = cResult[22];
          }
          if (cResult[23] === tmp4.container) {
            if (cResult[24] === tmp24) {
              if (cResult[25] === tmp33) {
                if (cResult[26] === tmp11) {
                  if (cResult[27] === tmp16) {
                    let tmp37 = cResult[28];
                  }
                  return tmp37;
                }
              }
            }
          }
          const obj7 = { children: null };
          const obj8 = { style: container, children: null };
          const items = [tmp11, tmp16, tmp24, tmp33];
          obj8.children = items;
          obj7.children = closure_6(View, obj8);
          const tmp43 = closure_5(activeEvent(13023), obj7);
          cResult[23] = tmp4.container;
          cResult[24] = tmp24;
          cResult[25] = tmp33;
          cResult[26] = tmp11;
          cResult[27] = tmp16;
          cResult[28] = tmp43;
          tmp37 = tmp43;
          const tmp40 = activeEvent(13023);
        }
        const obj9 = { style: tmp4.confirmButtonContainer, children: tmp30 };
        const tmp36 = closure_5(View, obj9);
        cResult[20] = tmp4.confirmButtonContainer;
        cResult[21] = tmp30;
        cResult[22] = tmp36;
        tmp33 = tmp36;
      }
      const obj10 = { style: tmp4.cancelButtonContainer, children: tmp21 };
      const tmp27 = closure_5(View, obj10);
      cResult[14] = tmp4.cancelButtonContainer;
      cResult[15] = tmp21;
      cResult[16] = tmp27;
      tmp24 = tmp27;
    }
    function handleConfirmClick() {
      if (null != activeEvent) {
        GuildScheduledEventsActionCreatorsDefault.endEvent(activeEvent.id, activeEvent.guild_id);
        closure_2();
      }
    }
    cResult[2] = activeEvent;
    cResult[3] = tmp6;
    cResult[4] = handleConfirmClick;
    tmp7 = handleConfirmClick;
  }
  const obj2 = channel(8654);
}) : (function EndEventActionSheet(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  const activeEvent = channel(8654).useActiveEvent(channel.id);
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
    const intl = tmp2(1126).intl;
    obj4.children = intl.string(tmp2(1126).t["4Ao8LC"]);
    const items = [closure_5(tmp2(1200).LegacyText, obj4), , , ];
    const obj5 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
    const intl2 = tmp2(1126).intl;
    obj5.children = intl2.string(tmp2(1126).t["0I0B8f"]);
    items[1] = closure_5(tmp2(5088).Text, obj5);
    const obj6 = { style: tmp.cancelButtonContainer, children: null };
    const obj7 = { text: null, grow: true, onPress: null };
    const intl3 = tmp2(1126).intl;
    obj7.text = intl3.string(tmp2(1126).t.P60OAX);
    obj7.onPress = handleClose;
    obj6.children = closure_5(tmp2(5379).Button, obj7);
    items[2] = closure_5(View, obj6);
    const obj8 = { style: tmp.confirmButtonContainer, children: null };
    const obj9 = { text: null, variant: "destructive", grow: true, onPress: null };
    const intl4 = tmp2(1126).intl;
    obj9.text = intl4.string(tmp2(1126).t.mjB9pd);
    obj9.onPress = function handleConfirmClick() {
      if (null != activeEvent) {
        GuildScheduledEventsActionCreatorsDefault.endEvent(activeEvent.id, activeEvent.guild_id);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_4);
        CallsUtils.handleDisconnect(channel);
      }
    };
    obj8.children = closure_5(tmp2(5379).Button, obj9);
    items[3] = closure_5(View, obj8);
    obj3.children = items;
    obj2.children = closure_6(View, obj3);
    return closure_5(activeEvent(13023), obj2);
  }
  let obj = channel(8654);
});