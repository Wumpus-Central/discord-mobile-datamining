// === Module 10056: DisconnectRemoteButton ===

// Module 10056 (DisconnectRemoteButton)
import noopAll from "noop" /* 19 */;
import ActionButtonAll from "ActionButton" /* 9506 */;
import closure_4 from "set" /* 4465 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  let remoteSessionId;
  let obj = channel(589);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ awaitingRemote: null != store.getAwaitingRemoteSessionInfo(), remoteSessionId: store.getRemoteSessionId() }));
  remoteSessionId = stateFromStoresObject.remoteSessionId;
  obj = { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7732 : 10019), accessibilityLabel: null, isSmallSize: null, onPress: null };
  const intl = tmp(1236).intl;
  obj[1] = intl.string(channel(1236).t["6vrfgt"]);
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
  return jsx(ActionButtonAll.PrimaryActionButton, { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7732 : 10019), accessibilityLabel: null, isSmallSize: null, onPress: null });
};