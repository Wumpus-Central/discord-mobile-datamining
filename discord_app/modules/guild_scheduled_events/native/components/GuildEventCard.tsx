// === Module 9469: GuildEventCard ===

// Module 9469 (GuildEventCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import ButtonGroup2 from "ButtonGroup" /* 5592 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import GuildEventCardComponents from "GuildEventCardComponents" /* 9261 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let tmp2;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
let closure_5 = GuildScheduledEventStore.isGuildScheduledEventActive;
const set = GuildScheduledEventsConstants.AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { actionContainer: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 0 };
const styles = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let event;
  let isConnected;
  let items;
  let onCloseAction;
  const obj = react2;
  const cResult = obj.c(14);
  ({ event, isConnected, onCloseAction } = arg0);
  const tmp4 = styles();
  const obj2 = GuildEventCardComponents;
  const primaryActionButtonType = obj2.usePrimaryActionButtonType(event, isConnected);
  if (cResult[0] === event) {
    if (cResult[1] === isConnected) {
      let tmp6;
      if (cResult[2] === onCloseAction) {
        tmp6 = cResult[3];
      }
      if (cResult[4] === event) {
        let tmp8;
        let tmp11;
        if (cResult[5] === primaryActionButtonType) {
          tmp8 = cResult[6];
        }
        if (cResult[7] !== event) {
          const obj3 = { event };
          const tmp13 = metroImportDefault(GuildEventCardComponents.GuildEventShareAction, obj3);
          cResult[7] = event;
          cResult[8] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp4.actionContainer) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp8) {
              let tmp14;
              if (cResult[12] === tmp11) {
                tmp14 = cResult[13];
              }
              return tmp14;
            }
          }
        }
        const obj4 = { direction: "horizontal", style: tmp4.actionContainer, children: items };
        items = [tmp6, tmp8, tmp11];
        const tmp16 = metroImportAll(ButtonGroup2.ButtonGroup, obj4);
        cResult[9] = tmp4.actionContainer;
        cResult[10] = tmp6;
        cResult[11] = tmp8;
        cResult[12] = tmp11;
        cResult[13] = tmp16;
        tmp14 = tmp16;
      }
      let tmp9 = primaryActionButtonType === GuildEventCardComponents.PrimaryActionType.START;
      if (tmp9) {
        const obj5 = { event };
        tmp9 = metroImportDefault(GuildEventCardComponents.GuildEventCardRSVPAction, obj5);
      }
      cResult[4] = event;
      cResult[5] = primaryActionButtonType;
      cResult[6] = tmp9;
      tmp8 = tmp9;
    }
  }
  const tmp7 = metroImportDefault(GuildEventCardComponents.GuildEventCardPrimaryAction, { event, onCloseAction, isConnected });
  cResult[0] = event;
  cResult[1] = isConnected;
  cResult[2] = onCloseAction;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : ((onCloseAction) => {
  let event;
  let isConnected;
  let items;
  ({ event, isConnected } = onCloseAction);
  onCloseAction = onCloseAction.onCloseAction;
  const tmp = styles();
  const obj = GuildEventCardComponents;
  const primaryActionButtonType = obj.usePrimaryActionButtonType(event, isConnected);
  const obj2 = { direction: "horizontal", style: tmp.actionContainer, children: items };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  items = [metroImportDefault(GuildEventCardComponents.GuildEventCardPrimaryAction, { event, onCloseAction, isConnected }), , ];
  let tmp6Result = primaryActionButtonType === GuildEventCardComponents.PrimaryActionType.START;
  if (tmp6Result) {
    const obj3 = { event };
    tmp6Result = metroImportDefault(GuildEventCardComponents.GuildEventCardRSVPAction, obj3);
  }
  items[1] = tmp6Result;
  items[2] = metroImportDefault(GuildEventCardComponents.GuildEventShareAction, { event });
  return metroImportAll(ButtonGroup, obj2);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  let channel_id;
  let first;
  let hideAgeVerificationNotice;
  let hideControls;
  let isNew;
  let onCloseAction;
  let tmp9;
  const tmp = event;
  const obj = event(channel_id[9]);
  const cResult = obj.c(44);
  event = event.event;
  const onPress = event.onPress;
  ({ onCloseAction, hideControls, hideAgeVerificationNotice, isNew } = event);
  channel_id = event.channel_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel_id) {
    class C {
      constructor() {
        obj = closure_4;
        isConnectedResult = closure_4.isConnected();
        if (isConnectedResult) {
          tmp2 = channel_id;
          isConnectedResult = obj.getChannelId() === channel_id;
        }
        return isConnectedResult;
      }
    }
    const items1 = [channel_id];
    cResult[1] = channel_id;
    cResult[2] = C;
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class C {
      constructor() {
        obj = closure_4;
        isConnectedResult = closure_4.isConnected();
        if (isConnectedResult) {
          tmp2 = channel_id;
          isConnectedResult = obj.getChannelId() === channel_id;
        }
        return isConnectedResult;
      }
    }
    tmp9 = cResult[3];
  }
  let tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(first, C, tmp9);
  if (cResult[4] === event) {
    class C {
      constructor() {
        obj = closure_4;
        isConnectedResult = closure_4.isConnected();
        if (isConnectedResult) {
          tmp2 = channel_id;
          isConnectedResult = obj.getChannelId() === channel_id;
        }
        return isConnectedResult;
      }
    }
    if (cResult[7] !== event.recurrence_rule) {
      class C {
        constructor() {
          obj = closure_4;
          isConnectedResult = closure_4.isConnected();
          if (isConnectedResult) {
            tmp2 = channel_id;
            isConnectedResult = obj.getChannelId() === channel_id;
          }
          return isConnectedResult;
        }
      }
      const result = obj3.recurrenceRuleFromServer(event.recurrence_rule);
      class V {
        constructor() {
          if (onPress != null) {
            tmp2 = event;
            tmpResult = tmp(event);
          }
          return;
        }
      }
      cResult[8] = result;
    } else {
      class C {
        constructor() {
          obj = closure_4;
          isConnectedResult = closure_4.isConnected();
          if (isConnectedResult) {
            tmp2 = channel_id;
            isConnectedResult = obj.getChannelId() === channel_id;
          }
          return isConnectedResult;
        }
      }
    }
    if (cResult[9] === event) {
      class C {
        constructor() {
          obj = closure_4;
          isConnectedResult = closure_4.isConnected();
          if (isConnectedResult) {
            tmp2 = channel_id;
            isConnectedResult = obj.getChannelId() === channel_id;
          }
          return isConnectedResult;
        }
      }
      if (cResult[12] === event) {
        class C {
          constructor() {
            obj = closure_4;
            isConnectedResult = closure_4.isConnected();
            if (isConnectedResult) {
              tmp2 = channel_id;
              isConnectedResult = obj.getChannelId() === channel_id;
            }
            return isConnectedResult;
          }
        }
        if (cResult[15] === event) {
          class C {
            constructor() {
              obj = closure_4;
              isConnectedResult = closure_4.isConnected();
              if (isConnectedResult) {
                tmp2 = channel_id;
                isConnectedResult = obj.getChannelId() === channel_id;
              }
              return isConnectedResult;
            }
          }
          if (cResult[18] === channel_id) {
            class C {
              constructor() {
                obj = closure_4;
                isConnectedResult = closure_4.isConnected();
                if (isConnectedResult) {
                  tmp2 = channel_id;
                  isConnectedResult = obj.getChannelId() === channel_id;
                }
                return isConnectedResult;
              }
            }
          }
          let tmp24 = !tmp4;
          class V {
            constructor() {
              if (onPress != null) {
                tmp2 = event;
                tmpResult = tmp(event);
              }
              return;
            }
          }
          if (tmp24) {
            class C {
              constructor() {
                obj = closure_4;
                isConnectedResult = closure_4.isConnected();
                if (isConnectedResult) {
                  tmp2 = channel_id;
                  isConnectedResult = obj.getChannelId() === channel_id;
                }
                return isConnectedResult;
              }
            }
            const obj2 = { noBackground: true, onConfirmPress: null, channelId: channel_id };
            class V {
              constructor() {
                if (onPress != null) {
                  tmp2 = event;
                  tmpResult = tmp(event);
                }
                return;
              }
            }
            tmp24 = closure_7(onPress(tmp2[14]), obj2);
          }
          cResult[18] = channel_id;
          cResult[19] = event.entity_type;
          cResult[20] = undefined !== hideAgeVerificationNotice && hideAgeVerificationNotice;
          cResult[21] = onCloseAction;
          cResult[22] = tmp24;
        }
        class V {
          constructor() {
            if (onPress != null) {
              tmp2 = event;
              tmpResult = tmp(event);
            }
            return;
          }
        }
        tmp21[0] = event;
        tmp21[1] = V;
        cResult[15] = event;
        cResult[16] = V;
        cResult[17] = closure_7(tmp(channel_id[10]).GuildEventCardMetaInfo, tmp21);
        const tmp22 = closure_7(tmp(channel_id[10]).GuildEventCardMetaInfo, tmp21);
      }
      class V {
        constructor() {
          if (onPress != null) {
            tmp2 = event;
            tmpResult = tmp(event);
          }
          return;
        }
      }
      tmp17[0] = event;
      tmp17[1] = undefined !== isNew && isNew;
      cResult[12] = event;
      cResult[13] = undefined !== isNew && isNew;
      cResult[14] = closure_7(tmp(channel_id[10]).GuildEventCardHeader, tmp17);
      const tmp18 = closure_7(tmp(channel_id[10]).GuildEventCardHeader, tmp17);
    }
    class V {
      constructor() {
        if (onPress != null) {
          tmp2 = event;
          tmpResult = tmp(event);
        }
        return;
      }
    }
    cResult[9] = event;
    cResult[10] = onPress;
    cResult[11] = V;
  }
  let tmp11 = stateFromStores;
  if (tmp11) {
    class C {
      constructor() {
        obj = closure_4;
        isConnectedResult = closure_4.isConnected();
        if (isConnectedResult) {
          tmp2 = channel_id;
          isConnectedResult = obj.getChannelId() === channel_id;
        }
        return isConnectedResult;
      }
    }
    tmp11 = closure_5(event);
  }
  cResult[4] = event;
  cResult[5] = stateFromStores;
  cResult[6] = tmp11;
}) : ((event) => {
  let hideControls;
  let items2;
  let onCloseAction;
  event = event.event;
  ({ onPress: importDefault, onCloseAction, hideControls } = event);
  if (hideControls === undefined) {
    hideControls = false;
  }
  let flag = event.hideAgeVerificationNotice;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = event.isNew;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const channel_id = event.channel_id;
  const tmp = event;
  const items = [RTCConnectionStore];
  const items1 = [channel_id];
  const obj = event(channel_id[12]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const isConnectedResult = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === channel_id;
    return isConnectedResult;
  }, items1) && closure_5(event);
  function handlePress() {
    if (importDefault != null) {
      tmp(event);
    }
  }
  let tmpResult = tmp(tmp2[13]);
  const result = tmpResult.recurrenceRuleFromServer(event.recurrence_rule);
  const obj2 = { accessible: false, onPress: handlePress, children: closure_8(View, { children: items2 }) };
  const Card = tmp(tmp2[16]).Card;
  items2 = [closure_7(tmp(channel_id[10]).GuildEventCardHeader, { event, isNew: flag2 }), closure_7(tmp(channel_id[10]).GuildEventCardMetaInfo, { event, onTitlePress: handlePress }), , , , ];
  let hasItem = !flag && set.has(event.entity_type);
  if (hasItem) {
    const obj3 = { noBackground: true, onConfirmPress: onCloseAction, channelId: channel_id };
    hasItem = closure_7(require("StageChannelAgeVerificationNotice"), obj3);
  }
  items2[2] = hasItem;
  items2[3] = closure_7(tmp(channel_id[10]).GuildEventSimpleLocation, { event });
  let tmp6Result = null;
  if (!hideControls) {
    const obj4 = { event, onCloseAction, isConnected: stateFromStores };
    tmp6Result = closure_7(closure_10, obj4);
  }
  items2[4] = tmp6Result;
  let tmp6Result2 = null != result;
  if (tmp6Result2) {
    const obj5 = {
      guildId: event.guild_id,
      recurrenceRule: result,
      guildEventId: event.id,
      onRecurrencePress(arg0) {
          let tmpResult;
          if (importDefault != null) {
            tmpResult = tmp(event, arg0);
          }
          return tmpResult;
        }
    };
    tmp6Result2 = closure_7(require("GuildEventRecurrences"), obj5);
  }
  items2[5] = tmp6Result2;
  return closure_7(Card, obj2);
}));
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCard.tsx");

export default memoResult;
export const useGuildEventCardStyles = styles;