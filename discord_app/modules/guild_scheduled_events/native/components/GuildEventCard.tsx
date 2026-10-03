// === Module 9469: GuildEventCard ===

// Module 9469 (GuildEventCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ButtonGroup from "ButtonGroup" /* 5592 */;
import GuildEventCardComponents from "GuildEventCardComponents" /* 9261 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_5 = fn(7037).isGuildScheduledEventActive;
fn(2057).AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj = { actionContainer: { paddingTop: nativeDefault.space.PX_16, paddingBottom: 0 } };
const styles = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ event, isConnected, onCloseAction } = arg0);
  const tmp4 = styles();
  const primaryActionButtonType = GuildEventCardComponents.usePrimaryActionButtonType(event, isConnected);
  if (cResult[0] === event) {
    if (cResult[1] === isConnected) {
      if (cResult[2] === onCloseAction) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] === event) {
        if (cResult[5] === primaryActionButtonType) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] !== event) {
          const obj3 = { event };
          const tmp13 = React5(GuildEventCardComponents.GuildEventShareAction, obj3);
          cResult[7] = event;
          cResult[8] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp4.actionContainer) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp8) {
              if (cResult[12] === tmp11) {
                let tmp14 = cResult[13];
              }
              return tmp14;
            }
          }
        }
        const obj4 = { direction: "horizontal", style: tmp4.actionContainer, children: null };
        const items = [tmp6, tmp8, tmp11];
        obj4.children = items;
        const tmp16 = closure_1_8(ButtonGroup.ButtonGroup, obj4);
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
        tmp9 = React5(GuildEventCardComponents.GuildEventCardRSVPAction, obj5);
      }
      cResult[4] = event;
      cResult[5] = primaryActionButtonType;
      cResult[6] = tmp9;
      tmp8 = tmp9;
    }
  }
  const tmp7 = React5(GuildEventCardComponents.GuildEventCardPrimaryAction, { event, onCloseAction, isConnected });
  cResult[0] = event;
  cResult[1] = isConnected;
  cResult[2] = onCloseAction;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : ((onCloseAction) => {
  ({ event, isConnected } = onCloseAction);
  const tmp = styles();
  const primaryActionButtonType = GuildEventCardComponents.usePrimaryActionButtonType(event, isConnected);
  const obj2 = { direction: "horizontal", style: tmp.actionContainer, children: null };
  const items = [React5(GuildEventCardComponents.GuildEventCardPrimaryAction, { event, onCloseAction: onCloseAction.onCloseAction, isConnected }), , ];
  let tmp6Result = primaryActionButtonType === GuildEventCardComponents.PrimaryActionType.START;
  if (tmp6Result) {
    const obj3 = { event };
    tmp6Result = React5(GuildEventCardComponents.GuildEventCardRSVPAction, obj3);
  }
  items[1] = tmp6Result;
  items[2] = React5(GuildEventCardComponents.GuildEventShareAction, { event });
  obj2.children = items;
  return closure_1_8(ButtonGroup.ButtonGroup, obj2);
});
ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 0 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCard.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  const cResult = event(channel_id[9]).c(44);
  event = event.event;
  const onPress = event.onPress;
  ({ onCloseAction, hideControls, hideAgeVerificationNotice, isNew } = event);
  channel_id = event.channel_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    cResult[0] = items;
    let first = items;
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
    let tmp9 = items1;
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
  const obj = event(channel_id[9]);
  const stateFromStores = event(channel_id[12]).useStateFromStores(first, C, tmp9);
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
            const obj2 = { noBackground: true, onConfirmPress: null, channelId: null };
            class V {
              constructor() {
                if (onPress != null) {
                  tmp2 = event;
                  tmpResult = tmp(event);
                }
                return;
              }
            }
            obj2.channelId = channel_id;
            tmp24 = closure_7(onPress(tmp2[14]), obj2);
          }
          cResult[18] = channel_id;
          cResult[19] = event.entity_type;
          cResult[20] = tmp4;
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
        const tmp22 = closure_7(tmp(tmp2[10]).GuildEventCardMetaInfo, tmp21);
        cResult[15] = event;
        cResult[16] = V;
        cResult[17] = tmp22;
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
      tmp17[1] = tmp5;
      const tmp18 = closure_7(tmp(tmp2[10]).GuildEventCardHeader, tmp17);
      cResult[12] = event;
      cResult[13] = tmp5;
      cResult[14] = tmp18;
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
  if (stateFromStores) {
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
  let tmpResult = event(channel_id[12]);
}) : ((event) => {
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
  const items = [RTCConnectionStore];
  const items1 = [channel_id];
  let stateFromStores = event(channel_id[12]).useStateFromStores(items, () => {
    let isConnectedResult = RTCConnectionStore.isConnected();
    if (isConnectedResult) {
      isConnectedResult = RTCConnectionStore.getChannelId() === channel_id;
    }
    return isConnectedResult;
  }, items1);
  if (stateFromStores) {
    stateFromStores = closure_5(event);
  }
  function handlePress() {
    if (importDefault != null) {
      tmp(event);
    }
  }
  const obj = event(channel_id[12]);
  const result = event(channel_id[13]).recurrenceRuleFromServer(event.recurrence_rule);
  const obj2 = { accessible: false, onPress: handlePress, children: null };
  const items2 = [closure_7(event(channel_id[10]).GuildEventCardHeader, { event, isNew: flag2 }), closure_7(event(channel_id[10]).GuildEventCardMetaInfo, { event, onTitlePress: handlePress }), , , , ];
  let hasItem = !flag;
  if (!flag) {
    hasItem = set.has(event.entity_type);
  }
  if (hasItem) {
    const obj3 = { noBackground: true, onConfirmPress: onCloseAction, channelId: channel_id };
    hasItem = closure_7(require("StageChannelAgeVerificationNotice"), obj3);
  }
  items2[2] = hasItem;
  items2[3] = closure_7(event(channel_id[10]).GuildEventSimpleLocation, { event });
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
  obj2.children = closure_8(View, { children: items2 });
  return closure_7(event(channel_id[16]).Card, obj2);
}));
export const useGuildEventCardStyles = styles;