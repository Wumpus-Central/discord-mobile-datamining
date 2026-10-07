// discord_app/modules/scheduled_messages/native/ScheduledMessageCard.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../routing/router_utils.tsx";
import util from "../../../intl/index.native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ScheduledMessageUtils from "../ScheduledMessageUtils.tsx";
import CalendarPlusIcon from "../../../design/components/Icon/native/redesign/generated/CalendarPlusIcon.tsx";
import ScheduledMessageCardActionButtonsDefault from "ScheduledMessageCardActionButtons.tsx";
import ForLaterCardStatusHeader from "../../saved_messages/native/ForLaterCardStatusHeader.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const View = fn(17).View;
const Routes = fn(1085).Routes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  card: { gap: 16, marginBottom: 16 },
  cardDivider: {
    marginHorizontal: -16,
    height: 1,
    alignSelf: "stretch",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  },
  attachmentCount: { flexDirection: "row", alignItems: "center", gap: 4 },
  pendingRemoval: { alignItems: "center", paddingVertical: 16 },
};
let closure_9 = createStyles.createStyles(obj);
fn(558);
let obj3 = {
  marginHorizontal: -16,
  height: 1,
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(13);
      ({ scheduledMessage, isPendingRemoval } = arg0);
      if (cResult[0] !== scheduledMessage.state) {
        const messageForState = ScheduledMessageUtils.getMessageForState(scheduledMessage.state);
        cResult[0] = scheduledMessage.state;
        cResult[1] = messageForState;
        let tmp4 = messageForState;
        const tmpResult = ScheduledMessageUtils;
      } else {
        tmp4 = cResult[1];
      }
      ({ isError, stateMessage } = tmp4);
      if (cResult[2] === isError) {
        if (cResult[3] === scheduledMessage.sendAtTimestamp) {
          if (cResult[4] === stateMessage) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === isPendingRemoval) {
            if (cResult[7] === scheduledMessage) {
              let tmp12 = cResult[8];
            }
            if (cResult[9] === isError) {
              if (cResult[10] === tmp6) {
                if (cResult[11] === tmp12) {
                  let tmp16 = cResult[12];
                }
                return tmp16;
              }
            }
            const obj2 = {
              IconComponent: CalendarPlusIcon.CalendarPlusIcon,
              label: tmp6,
              isCritical: isError,
              lineClamp: 2,
              actions: tmp12,
            };
            const tmp18 = React5(ForLaterCardStatusHeader.ForLaterCardStatusHeader, obj2);
            cResult[9] = isError;
            cResult[10] = tmp6;
            cResult[11] = tmp12;
            cResult[12] = tmp18;
            tmp16 = tmp18;
          }
          const obj3 = { scheduledMessage, isPendingRemoval };
          const tmp15 = React5(ScheduledMessageCardActionButtonsDefault, obj3);
          cResult[6] = isPendingRemoval;
          cResult[7] = scheduledMessage;
          cResult[8] = tmp15;
          tmp12 = tmp15;
        }
      }
      let formatToPlainStringResult = stateMessage;
      if (!isError) {
        const intl = util.intl;
        const obj4 = { timestamp: null };
        const _Date = Date;
        const date = new Date(scheduledMessage.sendAtTimestamp);
        obj4.timestamp = date.valueOf();
        formatToPlainStringResult = intl.formatToPlainString(util.t.ZN3tIx, obj4);
      }
      cResult[2] = isError;
      cResult[3] = scheduledMessage.sendAtTimestamp;
      cResult[4] = stateMessage;
      cResult[5] = formatToPlainStringResult;
      tmp6 = formatToPlainStringResult;
    }
  : (isPendingRemoval) => {
      const scheduledMessage = isPendingRemoval.scheduledMessage;
      const messageForState = ScheduledMessageUtils.getMessageForState(scheduledMessage.state);
      ({ isError, stateMessage } = messageForState);
      const obj2 = {
        IconComponent: CalendarPlusIcon.CalendarPlusIcon,
        label: null,
        isCritical: null,
        lineClamp: 2,
        actions: null,
      };
      if (!isError) {
        const intl = util.intl;
        const obj3 = { timestamp: null };
        const _Date = Date;
        const date = new Date(scheduledMessage.sendAtTimestamp);
        obj3.timestamp = date.valueOf();
        stateMessage = intl.formatToPlainString(util.t.ZN3tIx, obj3);
      }
      obj2.label = stateMessage;
      obj2.isCritical = isError;
      obj2.actions = React5(ScheduledMessageCardActionButtonsDefault, {
        scheduledMessage,
        isPendingRemoval: isPendingRemoval.isPendingRemoval,
      });
      return React5(ForLaterCardStatusHeader.ForLaterCardStatusHeader, obj2);
    };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scheduledMessage) => {
      const cResult = pendingRemoval(576).c(25);
      pendingRemoval = scheduledMessage.scheduledMessage;
      const isPendingRemoval = scheduledMessage.isPendingRemoval;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== pendingRemoval.createArgs.channelId) {
        const fn = function v() {
          return ChannelStore.getChannel(pendingRemoval.createArgs.channelId);
        };
        cResult[1] = pendingRemoval.createArgs.channelId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = pendingRemoval(576);
      const stateFromStores = pendingRemoval(504).useStateFromStores(first, tmp7);
      if (cResult[3] !== stateFromStores) {
        class R {
          constructor() {
            obj = closure_1;
            if (null != closure_1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj2 = closure_0(closure_2[10]);
              tmp3 = Routes;
              transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
              tmp5 = closure_1;
              arr = closure_1(closure_2[11]);
              arr1 = arr.pop();
            }
            return;
          }
        }
        cResult[3] = stateFromStores;
        cResult[4] = R;
      } else {
        class R {
          constructor() {
            obj = closure_1;
            if (null != closure_1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj2 = closure_0(closure_2[10]);
              tmp3 = Routes;
              transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
              tmp5 = closure_1;
              arr = closure_1(closure_2[11]);
              arr1 = arr.pop();
            }
            return;
          }
        }
      }
      if (null == stateFromStores) {
        class R {
          constructor() {
            obj = closure_1;
            if (null != closure_1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj2 = closure_0(closure_2[10]);
              tmp3 = Routes;
              transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
              tmp5 = closure_1;
              arr = closure_1(closure_2[11]);
              arr1 = arr.pop();
            }
            return;
          }
        }
      } else {
        class R {
          constructor() {
            obj = closure_1;
            if (null != closure_1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj2 = closure_0(closure_2[10]);
              tmp3 = Routes;
              transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
              tmp5 = closure_1;
              arr = closure_1(closure_2[11]);
              arr1 = arr.pop();
            }
            return;
          }
        }
        if (cResult[5] === isPendingRemoval) {
          class R {
            constructor() {
              obj = closure_1;
              if (null != closure_1) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj2 = closure_0(closure_2[10]);
                tmp3 = Routes;
                transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                tmp5 = closure_1;
                arr = closure_1(closure_2[11]);
                arr1 = arr.pop();
              }
              return;
            }
          }
          if (cResult[8] !== stateFromStores) {
            class R {
              constructor() {
                obj = closure_1;
                if (null != closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[10]);
                  tmp3 = Routes;
                  transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                  tmp5 = closure_1;
                  arr = closure_1(closure_2[11]);
                  arr1 = arr.pop();
                }
                return;
              }
            }
            let obj2 = { channel: stateFromStores, actions: null };
            const tmp15 = closure_7(tmp(11858).ForLaterCardHeader, obj2);
            cResult[8] = stateFromStores;
            cResult[9] = tmp15;
          } else {
            class R {
              constructor() {
                obj = closure_1;
                if (null != closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[10]);
                  tmp3 = Routes;
                  transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                  tmp5 = closure_1;
                  arr = closure_1(closure_2[11]);
                  arr1 = arr.pop();
                }
                return;
              }
            }
          }
          if (cResult[10] !== tmp4.cardDivider) {
            class R {
              constructor() {
                obj = closure_1;
                if (null != closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[10]);
                  tmp3 = Routes;
                  transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                  tmp5 = closure_1;
                  arr = closure_1(closure_2[11]);
                  arr1 = arr.pop();
                }
                return;
              }
            }
            const obj3 = { style: tmp4.cardDivider };
            const tmp18 = closure_7(View, obj3);
            cResult[10] = tmp4.cardDivider;
            cResult[11] = tmp18;
          } else {
            class R {
              constructor() {
                obj = closure_1;
                if (null != closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[10]);
                  tmp3 = Routes;
                  transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                  tmp5 = closure_1;
                  arr = closure_1(closure_2[11]);
                  arr1 = arr.pop();
                }
                return;
              }
            }
          }
          if (cResult[12] === tmp26) {
            class R {
              constructor() {
                obj = closure_1;
                if (null != closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[10]);
                  tmp3 = Routes;
                  transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                  tmp5 = closure_1;
                  arr = closure_1(closure_2[11]);
                  arr1 = arr.pop();
                }
                return;
              }
            }
          }
          if (isPendingRemoval) {
            class R {
              constructor() {
                obj = closure_1;
                if (null != closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[10]);
                  tmp3 = Routes;
                  transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                  tmp5 = closure_1;
                  arr = closure_1(closure_2[11]);
                  arr1 = arr.pop();
                }
                return;
              }
            }
            const obj4 = {
              style: tmp4.pendingRemoval,
              children: closure_7(tmp(5975).ActivityIndicator, { size: "small" }),
            };
            let tmp19Result = closure_7(View, obj4);
          } else {
            class R {
              constructor() {
                obj = closure_1;
                if (null != closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[10]);
                  tmp3 = Routes;
                  transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                  tmp5 = closure_1;
                  arr = closure_1(closure_2[11]);
                  arr1 = arr.pop();
                }
                return;
              }
            }
            tmp20[0] = pendingRemoval.record;
            let tmp21;
            if (tmp26 > 0) {
              class R {
                constructor() {
                  obj = closure_1;
                  if (null != closure_1) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[10]);
                    tmp3 = Routes;
                    transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                    tmp5 = closure_1;
                    arr = closure_1(closure_2[11]);
                    arr1 = arr.pop();
                  }
                  return;
                }
              }
              const obj5 = { style: tmp4.attachmentCount, children: null };
              const obj6 = { size: "xxs", color: stateFromStores(587).colors.TEXT_MUTED };
              const items1 = [closure_7(tmp(10382).AttachmentIcon, obj6)];
              const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
              const intl = tmp(1126).intl;
              const obj8 = { count: tmp26 };
              obj7.children = intl.format(tmp(1126).t.ZJ1tPW, obj8);
              items1[1] = closure_7(tmp(4892).Text, obj7);
              obj5.children = items1;
              tmp21 = closure_8(View, obj5);
            }
            tmp20[3] = tmp21;
            tmp19Result = closure_7(tmp(11859).ForLaterMessageRow, tmp20);
          }
          cResult[12] = tmp26;
          cResult[13] = isPendingRemoval;
          cResult[14] = pendingRemoval.record;
          ({ attachmentCount: tmp3[15], pendingRemoval } = tmp4);
          cResult[16] = pendingRemoval;
          cResult[17] = tmp19Result;
        }
        const obj9 = { scheduledMessage: pendingRemoval, isPendingRemoval };
        const tmp13 = closure_7(closure_10, obj9);
        cResult[5] = isPendingRemoval;
        cResult[6] = pendingRemoval;
        cResult[7] = tmp13;
      }
      const tmpResult = pendingRemoval(504);
    }
  : (scheduledMessage) => {
      scheduledMessage = scheduledMessage.scheduledMessage;
      const isPendingRemoval = scheduledMessage.isPendingRemoval;
      const tmp = closure_9();
      const items = [ChannelStore];
      const stateFromStores = scheduledMessage(504).useStateFromStores(items, () =>
        ChannelStore.getChannel(scheduledMessage.createArgs.channelId),
      );
      [][0] = stateFromStores;
      if (null == stateFromStores) {
        return null;
      } else {
        let obj2 = {
          variant: "primary",
          border: "subtle",
          shadow: "none",
          style: tmp.card,
          onPress: tmp5,
          children: null,
        };
        const obj3 = { scheduledMessage, isPendingRemoval };
        const items1 = [closure_7(closure_10, obj3), , ,];
        const obj4 = { channel: stateFromStores, actions: null };
        items1[1] = closure_7(tmp2(11858).ForLaterCardHeader, obj4);
        const obj5 = { style: tmp.cardDivider };
        items1[2] = closure_7(View, obj5);
        if (isPendingRemoval) {
          const obj6 = {
            style: tmp.pendingRemoval,
            children: closure_7(tmp2(5975).ActivityIndicator, { size: "small" }),
          };
          let tmp10Result = closure_7(View, obj6);
        } else {
          const obj7 = { message: scheduledMessage.record, lineClamp: 10, maxHeight: 400, footer: null };
          let tmp9Result;
          if (length > 0) {
            const obj8 = { style: tmp.attachmentCount, children: null };
            const obj9 = { size: "xxs", color: stateFromStores(587).colors.TEXT_MUTED };
            const items2 = [closure_7(tmp2(10382).AttachmentIcon, obj9)];
            const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
            const intl = tmp2(1126).intl;
            const obj11 = { count: length };
            obj10.children = intl.format(tmp2(1126).t.ZJ1tPW, obj11);
            items2[1] = closure_7(tmp2(4892).Text, obj10);
            obj8.children = items2;
            tmp9Result = closure_8(View, obj8);
          }
          obj7.footer = tmp9Result;
          tmp10Result = closure_7(tmp2(11859).ForLaterMessageRow, obj7);
        }
        items1[3] = tmp10Result;
        obj2.children = items1;
        return closure_8(tmp2(6002).Card, obj2);
      }
      const obj = scheduledMessage(504);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCard.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (scheduledMessage) => {
        const cResult = pendingRemoval(576).c(25);
        pendingRemoval = scheduledMessage.scheduledMessage;
        const isPendingRemoval = scheduledMessage.isPendingRemoval;
        const tmp4 = closure_9();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== pendingRemoval.createArgs.channelId) {
          const fn = function v() {
            return ChannelStore.getChannel(pendingRemoval.createArgs.channelId);
          };
          cResult[1] = pendingRemoval.createArgs.channelId;
          cResult[2] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const obj = pendingRemoval(576);
        const stateFromStores = pendingRemoval(504).useStateFromStores(first, tmp7);
        if (cResult[3] !== stateFromStores) {
          class R {
            constructor() {
              obj = closure_1;
              if (null != closure_1) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj2 = closure_0(closure_2[10]);
                tmp3 = Routes;
                transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                tmp5 = closure_1;
                arr = closure_1(closure_2[11]);
                arr1 = arr.pop();
              }
              return;
            }
          }
          cResult[3] = stateFromStores;
          cResult[4] = R;
        } else {
          class R {
            constructor() {
              obj = closure_1;
              if (null != closure_1) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj2 = closure_0(closure_2[10]);
                tmp3 = Routes;
                transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                tmp5 = closure_1;
                arr = closure_1(closure_2[11]);
                arr1 = arr.pop();
              }
              return;
            }
          }
        }
        if (null == stateFromStores) {
          class R {
            constructor() {
              obj = closure_1;
              if (null != closure_1) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj2 = closure_0(closure_2[10]);
                tmp3 = Routes;
                transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                tmp5 = closure_1;
                arr = closure_1(closure_2[11]);
                arr1 = arr.pop();
              }
              return;
            }
          }
        } else {
          class R {
            constructor() {
              obj = closure_1;
              if (null != closure_1) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj2 = closure_0(closure_2[10]);
                tmp3 = Routes;
                transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                tmp5 = closure_1;
                arr = closure_1(closure_2[11]);
                arr1 = arr.pop();
              }
              return;
            }
          }
          if (cResult[5] === isPendingRemoval) {
            class R {
              constructor() {
                obj = closure_1;
                if (null != closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[10]);
                  tmp3 = Routes;
                  transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                  tmp5 = closure_1;
                  arr = closure_1(closure_2[11]);
                  arr1 = arr.pop();
                }
                return;
              }
            }
            if (cResult[8] !== stateFromStores) {
              class R {
                constructor() {
                  obj = closure_1;
                  if (null != closure_1) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[10]);
                    tmp3 = Routes;
                    transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                    tmp5 = closure_1;
                    arr = closure_1(closure_2[11]);
                    arr1 = arr.pop();
                  }
                  return;
                }
              }
              let obj2 = { channel: stateFromStores, actions: null };
              const tmp15 = closure_7(tmp(11858).ForLaterCardHeader, obj2);
              cResult[8] = stateFromStores;
              cResult[9] = tmp15;
            } else {
              class R {
                constructor() {
                  obj = closure_1;
                  if (null != closure_1) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[10]);
                    tmp3 = Routes;
                    transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                    tmp5 = closure_1;
                    arr = closure_1(closure_2[11]);
                    arr1 = arr.pop();
                  }
                  return;
                }
              }
            }
            if (cResult[10] !== tmp4.cardDivider) {
              class R {
                constructor() {
                  obj = closure_1;
                  if (null != closure_1) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[10]);
                    tmp3 = Routes;
                    transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                    tmp5 = closure_1;
                    arr = closure_1(closure_2[11]);
                    arr1 = arr.pop();
                  }
                  return;
                }
              }
              const obj3 = { style: tmp4.cardDivider };
              const tmp18 = closure_7(View, obj3);
              cResult[10] = tmp4.cardDivider;
              cResult[11] = tmp18;
            } else {
              class R {
                constructor() {
                  obj = closure_1;
                  if (null != closure_1) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[10]);
                    tmp3 = Routes;
                    transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                    tmp5 = closure_1;
                    arr = closure_1(closure_2[11]);
                    arr1 = arr.pop();
                  }
                  return;
                }
              }
            }
            if (cResult[12] === tmp26) {
              class R {
                constructor() {
                  obj = closure_1;
                  if (null != closure_1) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[10]);
                    tmp3 = Routes;
                    transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                    tmp5 = closure_1;
                    arr = closure_1(closure_2[11]);
                    arr1 = arr.pop();
                  }
                  return;
                }
              }
            }
            if (isPendingRemoval) {
              class R {
                constructor() {
                  obj = closure_1;
                  if (null != closure_1) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[10]);
                    tmp3 = Routes;
                    transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                    tmp5 = closure_1;
                    arr = closure_1(closure_2[11]);
                    arr1 = arr.pop();
                  }
                  return;
                }
              }
              const obj4 = {
                style: tmp4.pendingRemoval,
                children: closure_7(tmp(5975).ActivityIndicator, { size: "small" }),
              };
              let tmp19Result = closure_7(View, obj4);
            } else {
              class R {
                constructor() {
                  obj = closure_1;
                  if (null != closure_1) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[10]);
                    tmp3 = Routes;
                    transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                    tmp5 = closure_1;
                    arr = closure_1(closure_2[11]);
                    arr1 = arr.pop();
                  }
                  return;
                }
              }
              tmp20[0] = pendingRemoval.record;
              let tmp21;
              if (tmp26 > 0) {
                class R {
                  constructor() {
                    obj = closure_1;
                    if (null != closure_1) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj2 = closure_0(closure_2[10]);
                      tmp3 = Routes;
                      transitionToResult = obj2.transitionTo(Routes.CHANNEL(obj.getGuildId(), obj.id));
                      tmp5 = closure_1;
                      arr = closure_1(closure_2[11]);
                      arr1 = arr.pop();
                    }
                    return;
                  }
                }
                const obj5 = { style: tmp4.attachmentCount, children: null };
                const obj6 = { size: "xxs", color: stateFromStores(587).colors.TEXT_MUTED };
                const items1 = [closure_7(tmp(10382).AttachmentIcon, obj6)];
                const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
                const intl = tmp(1126).intl;
                const obj8 = { count: tmp26 };
                obj7.children = intl.format(tmp(1126).t.ZJ1tPW, obj8);
                items1[1] = closure_7(tmp(4892).Text, obj7);
                obj5.children = items1;
                tmp21 = closure_8(View, obj5);
              }
              tmp20[3] = tmp21;
              tmp19Result = closure_7(tmp(11859).ForLaterMessageRow, tmp20);
            }
            cResult[12] = tmp26;
            cResult[13] = isPendingRemoval;
            cResult[14] = pendingRemoval.record;
            ({ attachmentCount: tmp3[15], pendingRemoval } = tmp4);
            cResult[16] = pendingRemoval;
            cResult[17] = tmp19Result;
          }
          const obj9 = { scheduledMessage: pendingRemoval, isPendingRemoval };
          const tmp13 = closure_7(closure_10, obj9);
          cResult[5] = isPendingRemoval;
          cResult[6] = pendingRemoval;
          cResult[7] = tmp13;
        }
        const tmpResult = pendingRemoval(504);
      }
    : (scheduledMessage) => {
        scheduledMessage = scheduledMessage.scheduledMessage;
        const isPendingRemoval = scheduledMessage.isPendingRemoval;
        const tmp = closure_9();
        const items = [ChannelStore];
        const stateFromStores = scheduledMessage(504).useStateFromStores(items, () =>
          ChannelStore.getChannel(scheduledMessage.createArgs.channelId),
        );
        [][0] = stateFromStores;
        if (null == stateFromStores) {
          return null;
        } else {
          let obj2 = {
            variant: "primary",
            border: "subtle",
            shadow: "none",
            style: tmp.card,
            onPress: tmp5,
            children: null,
          };
          const obj3 = { scheduledMessage, isPendingRemoval };
          const items1 = [closure_7(closure_10, obj3), , ,];
          const obj4 = { channel: stateFromStores, actions: null };
          items1[1] = closure_7(tmp2(11858).ForLaterCardHeader, obj4);
          const obj5 = { style: tmp.cardDivider };
          items1[2] = closure_7(View, obj5);
          if (isPendingRemoval) {
            const obj6 = {
              style: tmp.pendingRemoval,
              children: closure_7(tmp2(5975).ActivityIndicator, { size: "small" }),
            };
            let tmp10Result = closure_7(View, obj6);
          } else {
            const obj7 = { message: scheduledMessage.record, lineClamp: 10, maxHeight: 400, footer: null };
            let tmp9Result;
            if (length > 0) {
              const obj8 = { style: tmp.attachmentCount, children: null };
              const obj9 = { size: "xxs", color: stateFromStores(587).colors.TEXT_MUTED };
              const items2 = [closure_7(tmp2(10382).AttachmentIcon, obj9)];
              const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
              const intl = tmp2(1126).intl;
              const obj11 = { count: length };
              obj10.children = intl.format(tmp2(1126).t.ZJ1tPW, obj11);
              items2[1] = closure_7(tmp2(4892).Text, obj10);
              obj8.children = items2;
              tmp9Result = closure_8(View, obj8);
            }
            obj7.footer = tmp9Result;
            tmp10Result = closure_7(tmp2(11859).ForLaterMessageRow, obj7);
          }
          items1[3] = tmp10Result;
          obj2.children = items1;
          return closure_8(tmp2(6002).Card, obj2);
        }
        const obj = scheduledMessage(504);
      },
);
