// discord_app/modules/video_calls/native/components/DisconnectRemoteButton.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ActionButtonAll from "CallBarAction.tsx";
import closure_4 from "../../../game_console/GameConsoleStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  let remoteSessionId;
  let obj = channel(504);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    awaitingRemote: null != store.getAwaitingRemoteSessionInfo(),
    remoteSessionId: store.getRemoteSessionId(),
  }));
  remoteSessionId = stateFromStoresObject.remoteSessionId;
  obj = {
    source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 6992 : 9975),
    accessibilityLabel: null,
    isSmallSize: null,
    onPress: null,
  };
  const intl = tmp(1114).intl;
  obj[1] = intl.string(channel(1114).t["6vrfgt"]);
  obj[2] = channel.isSmallSize;
  obj[3] = function onPress() {
    if (null != remoteSessionId) {
      channel(closure_1_3[8]).remoteDisconnect(tmp);
      const obj2 = channel(closure_1_3[8]);
      channel(closure_1_3[9]).handleDisconnect(channel);
      const obj3 = channel(closure_1_3[9]);
    } else {
      channel(closure_1_3[8]).disconnectRemote();
      const obj = channel(closure_1_3[8]);
    }
  };
  return jsx(ActionButtonAll.PrimaryActionButton, {
    source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 6992 : 9975),
    accessibilityLabel: null,
    isSmallSize: null,
    onPress: null,
  });
};
