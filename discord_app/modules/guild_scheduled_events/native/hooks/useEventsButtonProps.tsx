// === Module 12016: useEventsButtonProps ===

// Module 12016 (useEventsButtonProps)
import useGuildEventsDefault from "useGuildEvents" /* 9253 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "generateOldThreadCutoff" /* 4459 */;
import closure_5 from "updateUserGuildSettingsInternal" /* 4653 */;
import { ReadStateTypes } from "ReadStateTypes" /* 4654 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx");

export default function useEventsButtonProps(id) {
  const _require = id;
  let obj = _require(589);
  const items = [closure_4];
  const items1 = [id.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ hasUnread: closure_1_4.hasUnread(id.id, closure_1_6.GUILD_EVENT), mentionCount: closure_1_4.getMentionCount(id.id, closure_1_6.GUILD_EVENT) }), items1);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const items2 = [closure_5];
  const eventsMuted = _require(589).useStateFromStores(items2, () => closure_1_5.isMuteScheduledEventsEnabled(id.id));
  const arr4 = useGuildEventsDefault(id.id);
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
    let obj = closure_1_1(closure_1_2[9]);
    obj = { guildId: id.id };
    obj.openLazy(id(closure_1_2[11])(closure_1_2[10], closure_1_2.paths), "UpcomingEventsLongPress-" + id.id, obj);
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
  let mode = tmp(12021).ChannelModes.DEFAULT;
  let tmp8 = hasUnread;
  if (hasUnread) {
    tmp8 = !eventsMuted;
  }
  if (tmp8) {
    mode = tmp(12021).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
};