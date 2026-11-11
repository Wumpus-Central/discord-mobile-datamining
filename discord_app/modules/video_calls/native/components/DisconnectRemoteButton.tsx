// === Module 12965: DisconnectRemoteButton ===

// Module 12965 (DisconnectRemoteButton)
import CallsUtils from "CallsUtils" /* 10516 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 10758 */;
import CallBarActionAll from "CallBarAction" /* 12639 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 6009 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  items = [GameConsoleStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({ awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() }));
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  let obj2 = { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7366 : 12905), accessibilityLabel: null, isSmallSize: null, onPress: null };
  const intl = tmp(1113).intl;
  obj2.accessibilityLabel = intl.string(channel(1113).t["6vrfgt"]);
  obj2.isSmallSize = channel.isSmallSize;
  obj2.onPress = function onPress() {
    if (null != remoteSessionId) {
      GameConsoleActionCreators.remoteDisconnect(tmp);
      CallsUtils.handleDisconnect(channel);
    } else {
      GameConsoleActionCreators.disconnectRemote();
    }
  };
  return jsx(CallBarActionAll.PrimaryActionButton, { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7366 : 12905), accessibilityLabel: null, isSmallSize: null, onPress: null });
}