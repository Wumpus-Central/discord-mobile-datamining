// === Module 11301: PinotMemberNoticeAckStore ===

// Module 11301 (PinotMemberNoticeAckStore)
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
prototype["isAcked"] = function isAcked(arg0) {
  return set.has(arg0);
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