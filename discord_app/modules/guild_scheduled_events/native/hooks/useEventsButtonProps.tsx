// === Module 11548: useEventsButtonProps ===

// Module 11548 (useEventsButtonProps)
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import useGuildEventsDefault from "useGuildEvents" /* 8891 */;
import noop from "noop" /* 19 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { ReadStateTypes } from "ReadStateTypes" /* 5044 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx");

export default function useEventsButtonProps(id) {
  const _require = id;
  let obj = _require(589);
  const items = [closure_4];
  const items1 = [id.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ hasUnread: closure_1_4.hasUnread(id.id, ReadStateTypes.GUILD_EVENT), mentionCount: closure_1_4.getMentionCount(id.id, ReadStateTypes.GUILD_EVENT) }), items1);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const items2 = [closure_5];
  const eventsMuted = _require(589).useStateFromStores(items2, () => closure_1_5.isMuteScheduledEventsEnabled(id.id));
  const arr4 = useGuildEventsDefault(id.id);
  const items3 = [id];
  const items4 = [id.id];
  const handlePress = React.useCallback(() => {
    if (obj.shouldShowMembershipVerificationGate(id.id)) {
      let tmpResult = id(dependencyMap[7]);
      let result = tmpResult.openMemberVerificationModal(id.id);
    } else {
      tmpResult = id(dependencyMap[8]);
      result = tmpResult.openGuildEventListActionSheet(id);
    }
    return result;
  }, items3);
  const handleLongPress = React.useCallback(() => {
    const obj = { guildId: id.id };
    obj.openLazy(id(dependencyMap[11])(dependencyMap[10], dependencyMap.paths), "UpcomingEventsLongPress-" + id.id, obj);
  }, items4);
  if (arr4.length > 0) {
    const intl2 = tmp(1236).intl;
    obj = { number: null };
    obj[0] = arr4.length;
    let name = intl2.formatToPlainString(tmp(1236).t.IBdqSu, obj);
  } else {
    const intl = tmp(1236).intl;
    name = intl.string(tmp(1236).t.tlopTM);
  }
  let mode = tmp(11553).ChannelModes.DEFAULT;
  let tmp8 = hasUnread;
  if (hasUnread) {
    tmp8 = !eventsMuted;
  }
  if (tmp8) {
    mode = tmp(11553).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
};