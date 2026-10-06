// === Module 11857: ScheduledMessageCard ===

// Module 11857 (ScheduledMessageCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import intl2 from "intl" /* 1126 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7486 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 11852 */;
import ScheduledMessageCardActionButtonsDefault from "ScheduledMessageCardActionButtons" /* 11860 */;
import ForLaterCardStatusHeader2 from "ForLaterCardStatusHeader" /* 11861 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const Routes = Constants.Routes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { card: { gap: 16, marginBottom: 16 }, cardDivider: obj2, attachmentCount: { flexDirection: "row", alignItems: "center", gap: 4 }, pendingRemoval: { alignItems: "center", paddingVertical: 16 } };
obj2 = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((scheduledMessage) => {
  let first;
  let intl;
  let items1;
  let obj8;
  let tmp7;
  const obj = scheduledMessage(576);
  const cResult = obj.c(25);
  scheduledMessage = scheduledMessage.scheduledMessage;
  const isPendingRemoval = scheduledMessage.isPendingRemoval;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== scheduledMessage.createArgs.channelId) {
    const fn = function v() {
      return ChannelStore.getChannel(scheduledMessage.createArgs.channelId);
    };
    cResult[1] = scheduledMessage.createArgs.channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = scheduledMessage(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] !== stateFromStores) {
    class R {
      constructor() {
        if (null != stateFromStores) {
          const obj2 = router_utils;
          obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
      }
    }
    cResult[3] = stateFromStores;
    cResult[4] = R;
  } else {
    class R {
      constructor() {
        if (null != stateFromStores) {
          const obj2 = router_utils;
          obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
      }
    }
  }
  if (null == stateFromStores) {
    class R {
      constructor() {
        if (null != stateFromStores) {
          const obj2 = router_utils;
          obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
      }
    }
  } else {
    class R {
      constructor() {
        if (null != stateFromStores) {
          const obj2 = router_utils;
          obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
      }
    }
    if (cResult[5] === isPendingRemoval) {
      let tmp20Result;
      class R {
        constructor() {
          if (null != stateFromStores) {
            const obj2 = router_utils;
            obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
            const arr = ModalActionCreatorsDefault;
            arr.pop();
          }
        }
      }
      if (cResult[8] !== stateFromStores) {
        class R {
          constructor() {
            if (null != stateFromStores) {
              const obj2 = router_utils;
              obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
              const arr = ModalActionCreatorsDefault;
              arr.pop();
            }
          }
        }
        let obj2 = { channel: stateFromStores, actions: null };
        cResult[8] = stateFromStores;
        cResult[9] = closure_7(scheduledMessage(11858).ForLaterCardHeader, obj2);
        const tmp15 = closure_7(scheduledMessage(11858).ForLaterCardHeader, obj2);
      } else {
        class R {
          constructor() {
            if (null != stateFromStores) {
              const obj2 = router_utils;
              obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
              const arr = ModalActionCreatorsDefault;
              arr.pop();
            }
          }
        }
      }
      if (cResult[10] !== tmp4.cardDivider) {
        class R {
          constructor() {
            if (null != stateFromStores) {
              const obj2 = router_utils;
              obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
              const arr = ModalActionCreatorsDefault;
              arr.pop();
            }
          }
        }
        const obj3 = { style: tmp4.cardDivider };
        cResult[10] = tmp4.cardDivider;
        cResult[11] = closure_7(View, obj3);
        const tmp18 = closure_7(View, obj3);
      } else {
        class R {
          constructor() {
            if (null != stateFromStores) {
              const obj2 = router_utils;
              obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
              const arr = ModalActionCreatorsDefault;
              arr.pop();
            }
          }
        }
      }
      if (cResult[12] === tmp26) {
        class R {
          constructor() {
            if (null != stateFromStores) {
              const obj2 = router_utils;
              obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
              const arr = ModalActionCreatorsDefault;
              arr.pop();
            }
          }
        }
      }
      if (isPendingRemoval) {
        class R {
          constructor() {
            if (null != stateFromStores) {
              const obj2 = router_utils;
              obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
              const arr = ModalActionCreatorsDefault;
              arr.pop();
            }
          }
        }
        const obj4 = { style: tmp4.pendingRemoval, children: closure_7(scheduledMessage(5975).ActivityIndicator, { size: "small" }) };
        tmp20Result = closure_7(View, obj4);
      } else {
        class R {
          constructor() {
            if (null != stateFromStores) {
              const obj2 = router_utils;
              obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
              const arr = ModalActionCreatorsDefault;
              arr.pop();
            }
          }
        }
        tmp21[0] = scheduledMessage.record;
        let tmp22;
        const ForLaterMessageRow = tmp(11859).ForLaterMessageRow;
        if (tmp26 > 0) {
          class R {
            constructor() {
              if (null != stateFromStores) {
                const obj2 = router_utils;
                obj2.transitionTo(Routes.CHANNEL(stateFromStores.getGuildId(), stateFromStores.id));
                const arr = ModalActionCreatorsDefault;
                arr.pop();
              }
            }
          }
          const obj5 = { style: tmp4.attachmentCount, children: items1 };
          const obj6 = { size: "xxs", color: stateFromStores(587).colors.TEXT_MUTED };
          const AttachmentIcon = tmp(10382).AttachmentIcon;
          items1 = [closure_7(AttachmentIcon, obj6), ];
          const obj7 = { variant: "text-sm/normal", color: "text-muted", children: intl.format(scheduledMessage(1126).t.ZJ1tPW, obj8) };
          const Text = tmp(4892).Text;
          intl = tmp(1126).intl;
          obj8 = { count: tmp26 };
          items1[1] = closure_7(Text, obj7);
          tmp22 = closure_8(View, obj5);
        }
        tmp21[3] = tmp22;
        tmp20Result = closure_7(ForLaterMessageRow, tmp21);
      }
      cResult[12] = tmp26;
      cResult[13] = isPendingRemoval;
      cResult[14] = scheduledMessage.record;
      cResult[15] = tmp4.attachmentCount;
      cResult[16] = tmp4.pendingRemoval;
      cResult[17] = tmp20Result;
    }
    const obj9 = { scheduledMessage, isPendingRemoval };
    cResult[5] = isPendingRemoval;
    cResult[6] = scheduledMessage;
    cResult[7] = closure_7(closure_10, obj9);
    const tmp13 = closure_7(closure_10, obj9);
  }
}) : ((scheduledMessage) => {
  let intl;
  let items1;
  let items2;
  let obj11;
  let tmp9Result;
  scheduledMessage = scheduledMessage.scheduledMessage;
  const isPendingRemoval = scheduledMessage.isPendingRemoval;
  const tmp = closure_9();
  const items = [ChannelStore];
  const obj = scheduledMessage(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(scheduledMessage.createArgs.channelId));
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp10Result;
    let obj2 = { variant: "primary", border: "subtle", shadow: "none", style: tmp.card, onPress: tmp5, children: items1 };
    const obj3 = { scheduledMessage, isPendingRemoval };
    const Card = tmp2(6002).Card;
    items1 = [closure_7(closure_10, obj3), , , ];
    const obj4 = { channel: stateFromStores, actions: null };
    items1[1] = closure_7(scheduledMessage(11858).ForLaterCardHeader, obj4);
    const obj5 = { style: tmp.cardDivider };
    items1[2] = closure_7(View, obj5);
    if (isPendingRemoval) {
      const obj6 = { style: tmp.pendingRemoval, children: closure_7(scheduledMessage(5975).ActivityIndicator, { size: "small" }) };
      tmp10Result = closure_7(View, obj6);
    } else {
      const obj7 = { message: scheduledMessage.record, lineClamp: 10, maxHeight: 400, footer: tmp9Result };
      tmp9Result = undefined;
      const ForLaterMessageRow = tmp2(11859).ForLaterMessageRow;
      if (scheduledMessage.attachmentUploads.length > 0) {
        const obj8 = { style: tmp.attachmentCount, children: items2 };
        const obj9 = { size: "xxs", color: stateFromStores(587).colors.TEXT_MUTED };
        const AttachmentIcon = tmp2(10382).AttachmentIcon;
        items2 = [closure_7(AttachmentIcon, obj9), ];
        const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl.format(scheduledMessage(1126).t.ZJ1tPW, obj11) };
        const Text = tmp2(4892).Text;
        intl = tmp2(1126).intl;
        obj11 = { count: scheduledMessage.attachmentUploads.length };
        items2[1] = closure_7(Text, obj10);
        tmp9Result = closure_8(View, obj8);
      }
      tmp10Result = closure_7(ForLaterMessageRow, obj7);
    }
    items1[3] = tmp10Result;
    return closure_8(Card, obj2);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let date;
  let isError;
  let isPendingRemoval;
  let scheduledMessage;
  let stateMessage;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(13);
  ({ scheduledMessage, isPendingRemoval } = arg0);
  if (cResult[0] !== scheduledMessage.state) {
    const tmpResult = ScheduledMessageUtils;
    const messageForState = tmpResult.getMessageForState(scheduledMessage.state);
    cResult[0] = scheduledMessage.state;
    cResult[1] = messageForState;
    tmp4 = messageForState;
  } else {
    tmp4 = cResult[1];
  }
  ({ isError, stateMessage } = tmp4);
  if (cResult[2] === isError) {
    if (cResult[3] === scheduledMessage.sendAtTimestamp) {
      let tmp6;
      if (cResult[4] === stateMessage) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === isPendingRemoval) {
        let tmp10;
        if (cResult[7] === scheduledMessage) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === isError) {
          if (cResult[10] === tmp6) {
            let tmp14;
            if (cResult[11] === tmp10) {
              tmp14 = cResult[12];
            }
            return tmp14;
          }
        }
        const obj2 = { IconComponent: CalendarPlusIcon.CalendarPlusIcon, label: tmp6, isCritical: isError, lineClamp: 2, actions: tmp10 };
        const ForLaterCardStatusHeader = ForLaterCardStatusHeader2.ForLaterCardStatusHeader;
        const tmp16 = metroImportDefault(ForLaterCardStatusHeader, obj2);
        cResult[9] = isError;
        cResult[10] = tmp6;
        cResult[11] = tmp10;
        cResult[12] = tmp16;
        tmp14 = tmp16;
      }
      const obj3 = { scheduledMessage, isPendingRemoval };
      const tmp13 = metroImportDefault(ScheduledMessageCardActionButtonsDefault, obj3);
      cResult[6] = isPendingRemoval;
      cResult[7] = scheduledMessage;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
  }
  let formatToPlainStringResult = stateMessage;
  if (!isError) {
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj4 = { timestamp: date.valueOf() };
    const ZN3tIx = intl2.t.ZN3tIx;
    date = new Date(scheduledMessage.sendAtTimestamp);
    formatToPlainStringResult = formatToPlainString(ZN3tIx, obj4);
  }
  cResult[2] = isError;
  cResult[3] = scheduledMessage.sendAtTimestamp;
  cResult[4] = stateMessage;
  cResult[5] = formatToPlainStringResult;
  tmp6 = formatToPlainStringResult;
}) : (function(scheduledMessage) {
  let date;
  let isError;
  let stateMessage;
  scheduledMessage = scheduledMessage.scheduledMessage;
  const isPendingRemoval = scheduledMessage.isPendingRemoval;
  const obj = ScheduledMessageUtils;
  const messageForState = obj.getMessageForState(scheduledMessage.state);
  ({ isError, stateMessage } = messageForState);
  const obj2 = { IconComponent: CalendarPlusIcon.CalendarPlusIcon, label: stateMessage, isCritical: isError, lineClamp: 2, actions: metroImportDefault(ScheduledMessageCardActionButtonsDefault, { scheduledMessage, isPendingRemoval }) };
  const ForLaterCardStatusHeader = ForLaterCardStatusHeader2.ForLaterCardStatusHeader;
  if (!isError) {
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj3 = { timestamp: date.valueOf() };
    const ZN3tIx = intl2.t.ZN3tIx;
    date = new Date(scheduledMessage.sendAtTimestamp);
    stateMessage = formatToPlainString(ZN3tIx, obj3);
  }
  return metroImportDefault(ForLaterCardStatusHeader, obj2);
});
const memoResult = react.memo(tmp3);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCard.tsx");

export default memoResult;