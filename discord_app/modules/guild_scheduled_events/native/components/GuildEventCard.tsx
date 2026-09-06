// discord_app/modules/guild_scheduled_events/native/components/GuildEventCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ButtonGroup from "../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import GuildEventCardComponents from "GuildEventCardComponents.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";

require = fn;
function GuildEventCardControls(onCloseAction) {
  ({ event, isConnected } = onCloseAction);
  let obj = GuildEventCardComponents;
  const primaryActionButtonType = obj.usePrimaryActionButtonType(event, isConnected);
  obj = { direction: "horizontal", style: styles().actionContainer, children: null };
  const items = [
    React5(GuildEventCardComponents.GuildEventCardPrimaryAction, {
      event,
      onCloseAction: onCloseAction.onCloseAction,
      isConnected,
    }),
    ,
  ];
  let tmp6Result = primaryActionButtonType === GuildEventCardComponents.PrimaryActionType.START;
  if (tmp6Result) {
    obj = { event };
    tmp6Result = React5(GuildEventCardComponents.GuildEventCardRSVPAction, obj);
  }
  items[1] = tmp6Result;
  items[2] = React5(GuildEventCardComponents.GuildEventShareAction, { event });
  obj.children = items;
  return React6(ButtonGroup.ButtonGroup, obj);
}
const View = fn(17).View;
let closure_5 = fn(7526).isGuildScheduledEventActive;
fn(1963).AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let obj = { actionContainer: null };
obj = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 0 };
obj.actionContainer = obj;
const styles = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCard.tsx");

export default noop.memo((event) => {
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
  let obj = event(channel_id[10]);
  const items = [RTCConnectionStore];
  const items1 = [channel_id];
  let stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let isConnectedResult = RTCConnectionStore.isConnected();
      if (isConnectedResult) {
        isConnectedResult = RTCConnectionStore.getChannelId() === channel_id;
      }
      return isConnectedResult;
    },
    items1,
  );
  if (stateFromStores) {
    stateFromStores = closure_5(event);
  }
  function handlePress() {
    if (importDefault != null) {
      tmp(event);
    }
  }
  const result = event(channel_id[11]).recurrenceRuleFromServer(event.recurrence_rule);
  obj = { accessible: false, onPress: handlePress, children: null };
  const items2 = [
    closure_7(event(channel_id[8]).GuildEventCardHeader, { event, isNew: flag2 }),
    closure_7(event(channel_id[8]).GuildEventCardMetaInfo, { event, onTitlePress: handlePress }),
    ,
    ,
    ,
  ];
  let hasItem = !flag;
  if (!flag) {
    hasItem = set.has(event.entity_type);
  }
  if (hasItem) {
    obj = { noBackground: true, onConfirmPress: onCloseAction, channelId: channel_id };
    hasItem = closure_7(require("StageChannelAgeVerificationNotice"), obj);
  }
  items2[2] = hasItem;
  items2[3] = closure_7(event(channel_id[8]).GuildEventSimpleLocation, { event });
  let tmp6Result = null;
  if (!hideControls) {
    const obj1 = { event, onCloseAction, isConnected: stateFromStores };
    tmp6Result = closure_7(GuildEventCardControls, obj1);
  }
  items2[4] = tmp6Result;
  tmp6Result = null != result;
  if (tmp6Result) {
    const obj2 = {
      guildId: event.guild_id,
      recurrenceRule: result,
      guildEventId: event.id,
      onRecurrencePress(arg0) {
        let tmpResult;
        if (importDefault != null) {
          tmpResult = tmp(event, arg0);
        }
        return tmpResult;
      },
    };
    tmp6Result = closure_7(require("GuildEventRecurrences"), obj2);
  }
  items2[5] = tmp6Result;
  obj.children = closure_8(View, { children: items2 });
  return closure_7(event(channel_id[12]).Card, obj);
});
export const useGuildEventCardStyles = styles;
