// discord_app/modules/video_calls/native/components/DisconnectRemoteButton.tsx
import CallBarActionAll from "CallBarAction.tsx";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import GameConsoleActionCreators from "../../../game_console/GameConsoleActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  const items = [GameConsoleStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({
    awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(),
    remoteSessionId: GameConsoleStore.getRemoteSessionId(),
  }));
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  let obj2 = {
    source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7325 : 10322),
    accessibilityLabel: null,
    isSmallSize: null,
    onPress: null,
  };
  const intl = tmp(1115).intl;
  obj2.accessibilityLabel = intl.string(channel(1115).t["6vrfgt"]);
  obj2.isSmallSize = channel.isSmallSize;
  obj2.onPress = function onPress() {
    if (null != remoteSessionId) {
      GameConsoleActionCreators.remoteDisconnect(tmp);
      CallsUtils.handleDisconnect(channel);
    } else {
      GameConsoleActionCreators.disconnectRemote();
    }
  };
  return jsx(CallBarActionAll.PrimaryActionButton, {
    source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7325 : 10322),
    accessibilityLabel: null,
    isSmallSize: null,
    onPress: null,
  });
};
