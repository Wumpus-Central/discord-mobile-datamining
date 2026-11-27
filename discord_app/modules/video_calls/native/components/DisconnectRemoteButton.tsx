// === Module 10530: DisconnectRemoteButton ===

// Module 10530 (DisconnectRemoteButton)
import CallsUtils from "CallsUtils" /* 8637 */;
import CallBarActionAll from "CallBarAction" /* 10033 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 10512 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5852 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  items = [GameConsoleStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({ awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() }));
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  let obj2 = { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7752 : 10384), accessibilityLabel: null, isSmallSize: null, onPress: null };
  const intl = tmp(1112).intl;
  obj2.accessibilityLabel = intl.string(channel(1112).t["6vrfgt"]);
  obj2.isSmallSize = channel.isSmallSize;
  obj2.onPress = function onPress() {
    if (null != remoteSessionId) {
      GameConsoleActionCreators.remoteDisconnect(tmp);
      CallsUtils.handleDisconnect(channel);
    } else {
      GameConsoleActionCreators.disconnectRemote();
    }
  };
  return jsx(CallBarActionAll.PrimaryActionButton, { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7752 : 10384), accessibilityLabel: null, isSmallSize: null, onPress: null });
}