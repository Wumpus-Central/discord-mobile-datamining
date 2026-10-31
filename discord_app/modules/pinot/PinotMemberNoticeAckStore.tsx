// === Module 11323: PinotMemberNoticeAckStore ===

// Module 11323 (PinotMemberNoticeAckStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

let set = new Set();
const PersistedStore = initializeDefault.PersistedStore;
class PinotMemberNoticeAckStoreImpl extends PersistedStore {
}
const prototype = PinotMemberNoticeAckStoreImpl.prototype;
prototype["initialize"] = function initialize(ackedChannelIds) {
  ackedChannelIds = undefined;
  if (ackedChannelIds != null) {
    ackedChannelIds = ackedChannelIds.ackedChannelIds;
  }
  if (ackedChannelIds == null) {
    ackedChannelIds = [];
  }
  set = new Set(ackedChannelIds);
};
prototype["getState"] = function getState() {
  return { ackedChannelIds: Array.from(set) };
};
prototype["isHidden"] = function isHidden(arg0) {
  let hasItem = set.has(arg0);
  if (!hasItem) {
    hasItem = set.size >= 2;
  }
  return hasItem;
};
PinotMemberNoticeAckStoreImpl.displayName = "PinotMemberNoticeAckStore";
PinotMemberNoticeAckStoreImpl.persistKey = "PinotMemberNoticeAckStore";
const pinotMemberNoticeAckStoreImpl = new PinotMemberNoticeAckStoreImpl(DispatcherDefault, {
  PINOT_MEMBER_NOTICE_ACK: function handleAck(channelId) {
    channelId = channelId.channelId;
    if (set.has(channelId)) {
      return false;
    } else {
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(set, 0)] = channelId;
      set = new Set(items);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/PinotMemberNoticeAckStore.tsx");

export default pinotMemberNoticeAckStoreImpl;