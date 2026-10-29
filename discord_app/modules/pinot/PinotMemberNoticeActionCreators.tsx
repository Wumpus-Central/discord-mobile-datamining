// discord_app/modules/pinot/PinotMemberNoticeActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/pinot/PinotMemberNoticeActionCreators.tsx");

export function ackPinotMemberNotice(channelId) {
  DispatcherDefault.dispatch({ type: "PINOT_MEMBER_NOTICE_ACK", channelId });
}
