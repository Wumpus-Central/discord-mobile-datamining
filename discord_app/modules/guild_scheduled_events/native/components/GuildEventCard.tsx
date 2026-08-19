// === Module 8899: GuildEventCardControls ===

// Module 8899 (GuildEventCardControls)
import ThemesDefault from "Themes" /* 712 */;
import ButtonGroup from "ButtonGroup" /* 6687 */;
import usePrimaryActionButtonType from "usePrimaryActionButtonType" /* 8800 */;
import { View } from "get ActivityIndicator" /* 17 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import { isGuildScheduledEventActive as closure_5 } from "scheduledEventSort" /* 4370 */;
import { AGE_VERIFICATION_STAGE_CHANNEL_TYPES as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
function GuildEventCardControls(onCloseAction) {
  ({ event, isConnected } = onCloseAction);
  let obj = usePrimaryActionButtonType;
  const primaryActionButtonType = obj.usePrimaryActionButtonType(event, isConnected);
  obj = { direction: "horizontal", style: styles().actionContainer, children: null };
  const items = [callback2(usePrimaryActionButtonType.GuildEventCardPrimaryAction, { event, onCloseAction: onCloseAction.onCloseAction, isConnected }), , ];
  let tmp6Result = primaryActionButtonType === usePrimaryActionButtonType.PrimaryActionType.START;
  if (tmp6Result) {
    obj = { event: null };
    obj[0] = event;
    tmp6Result = callback2(usePrimaryActionButtonType.GuildEventCardRSVPAction, obj);
  }
  items[1] = tmp6Result;
  items[2] = callback2(usePrimaryActionButtonType.GuildEventShareAction, { event });
  obj[2] = items;
  return callback(ButtonGroup.ButtonGroup, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: 0 };
obj[0] = obj;
const styles = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((event) => {
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
  const items = [closure_4];
  const items1 = [channel_id];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let isConnectedResult = closure_1_4.isConnected();
    if (isConnectedResult) {
      isConnectedResult = closure_1_4.getChannelId() === channel_id;
    }
    return isConnectedResult;
  }, items1);
  if (stateFromStores) {
    stateFromStores = callback(event);
  }
  function handlePress() {
    if (closure_1 != null) {
      tmp(event);
    }
  }
  const result = event(channel_id[11]).recurrenceRuleFromServer(event.recurrence_rule);
  obj = { accessible: false, onPress: handlePress, children: null };
  const items2 = [callback2(event(channel_id[8]).GuildEventCardHeader, { event, isNew: flag2 }), callback2(event(channel_id[8]).GuildEventCardMetaInfo, { event, onTitlePress: handlePress }), , , , ];
  let hasItem = !flag;
  if (!flag) {
    hasItem = set.has(event.entity_type);
  }
  if (hasItem) {
    obj = { noBackground: true, onConfirmPress: null, channelId: null };
    obj[1] = onCloseAction;
    obj[2] = channel_id;
    hasItem = callback2(importDefault(tmp2[13]), obj);
  }
  items2[2] = hasItem;
  items2[3] = callback2(event(channel_id[8]).GuildEventSimpleLocation, { event });
  let tmp6Result = null;
  if (!hideControls) {
    obj1 = { event: null, onCloseAction: null, isConnected: null };
    obj1[0] = event;
    obj1[1] = onCloseAction;
    obj1[2] = stateFromStores;
    tmp6Result = callback2(GuildEventCardControls, obj1);
  }
  items2[4] = tmp6Result;
  tmp6Result = null != result;
  if (tmp6Result) {
    const obj2 = { guildId: null, recurrenceRule: null, guildEventId: null, onRecurrencePress: null };
    obj2[0] = event.guild_id;
    obj2[1] = result;
    obj2[2] = event.id;
    obj2[3] = function onRecurrencePress(arg0) {
      let tmpResult;
      if (closure_1 != null) {
        tmpResult = tmp(event, arg0);
      }
      return tmpResult;
    };
    tmp6Result = callback2(importDefault(tmp2[14]), obj2);
  }
  items2[5] = tmp6Result;
  obj[2] = callback(View, { children: items2 });
  return callback2(event(channel_id[12]).Card, obj);
});
let result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCard.tsx");

export default memoResult;
export const useGuildEventCardStyles = styles;