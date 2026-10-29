// === Module 11076: PinotMemberNoticeActionCreators ===

// Module 11076 (PinotMemberNoticeActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/PinotMemberNoticeActionCreators.tsx");

export function ackPinotMemberNotice(channelId) {
  DispatcherDefault.dispatch({ type: "PINOT_MEMBER_NOTICE_ACK", channelId });
}