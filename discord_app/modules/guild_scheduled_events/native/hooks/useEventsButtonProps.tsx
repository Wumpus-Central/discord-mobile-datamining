import noop from "noop";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { ReadStateTypes } from "ReadStateTypes";

const require = arg1;
let result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx");

export default function useEventsButtonProps(id) {
  let hasUnread;
  let mentionCount;
  const _require = id;
  let obj = _require(589);
  const items = [generateOldThreadCutoff];
  const items1 = [id.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ hasUnread: outer1_4.hasUnread(id.id, outer1_6.GUILD_EVENT), mentionCount: outer1_4.getMentionCount(id.id, outer1_6.GUILD_EVENT) }), items1);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const items2 = [updateUserGuildSettingsInternal];
  const eventsMuted = _require(589).useStateFromStores(items2, () => outer1_5.isMuteScheduledEventsEnabled(id.id));
  const arr4 = importDefault(8960)(id.id);
  const items3 = [id];
  const items4 = [id.id];
  const handlePress = React.useCallback(() => {
    if (obj.shouldShowMembershipVerificationGate(id.id)) {
      let tmpResult = tmp(tmp2[7]);
      let result = tmpResult.openMemberVerificationModal(tmp3.id);
    } else {
      tmpResult = tmp(tmp2[8]);
      result = tmpResult.openGuildEventListActionSheet(tmp3);
    }
    return result;
  }, items3);
  const handleLongPress = React.useCallback(() => {
    let obj = outer1_1(outer1_2[9]);
    obj = { guildId: id.id };
    obj.openLazy(id(outer1_2[11])(outer1_2[10], outer1_2.paths), "UpcomingEventsLongPress-" + id.id, obj);
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
  let mode = tmp(11665).ChannelModes.DEFAULT;
  let tmp8 = hasUnread;
  if (hasUnread) {
    tmp8 = !eventsMuted;
  }
  if (tmp8) {
    mode = tmp(11665).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
};