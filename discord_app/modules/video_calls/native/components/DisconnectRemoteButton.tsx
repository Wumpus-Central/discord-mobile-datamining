// === Module 11129: DisconnectRemoteButton ===

// Module 11129 (DisconnectRemoteButton)
import CallsUtils from "CallsUtils" /* 8785 */;
import CallBarActionAll from "CallBarAction" /* 10841 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 11111 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5111 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = ReactCompilerGating.isReactCompilerEnabled() ? (function DisconnectRemoteButton(channel) {
  const cResult = channel(576).c(10);
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function c() {
      return { awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = channel(576);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp4, tmp5);
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  const tmp8 = remoteSessionId(stateFromStoresObject.awaitingRemote ? 7728 : 11067);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["6vrfgt"]);
    cResult[2] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === channel) {
    if (cResult[4] === remoteSessionId) {
      let tmp11 = cResult[5];
    }
    if (cResult[6] === isSmallSize) {
      if (cResult[7] === tmp8) {
        if (cResult[8] === tmp11) {
          let tmp12 = cResult[9];
        }
        return tmp12;
      }
    }
    let obj2 = { source: tmp8, accessibilityLabel: tmp9, isSmallSize, onPress: tmp11 };
    const tmp15 = jsx(CallBarActionAll.PrimaryActionButton, { source: tmp8, accessibilityLabel: tmp9, isSmallSize, onPress: tmp11 });
    cResult[6] = isSmallSize;
    cResult[7] = tmp8;
    cResult[8] = tmp11;
    cResult[9] = tmp15;
    tmp12 = tmp15;
  }
  const fn2 = function f() {
    if (null != remoteSessionId) {
      GameConsoleActionCreators.remoteDisconnect(tmp);
      CallsUtils.handleDisconnect(channel);
    } else {
      GameConsoleActionCreators.disconnectRemote();
    }
  };
  cResult[3] = channel;
  cResult[4] = remoteSessionId;
  cResult[5] = fn2;
  tmp11 = fn2;
  const tmpResult = channel(504);
}) : (function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  const items = [GameConsoleStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({ awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() }));
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  let obj2 = { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7728 : 11067), accessibilityLabel: null, isSmallSize: null, onPress: null };
  const intl = tmp(1126).intl;
  obj2.accessibilityLabel = intl.string(channel(1126).t["6vrfgt"]);
  obj2.isSmallSize = channel.isSmallSize;
  obj2.onPress = function onPress() {
    if (null != remoteSessionId) {
      GameConsoleActionCreators.remoteDisconnect(tmp);
      CallsUtils.handleDisconnect(channel);
    } else {
      GameConsoleActionCreators.disconnectRemote();
    }
  };
  return jsx(CallBarActionAll.PrimaryActionButton, { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7728 : 11067), accessibilityLabel: null, isSmallSize: null, onPress: null });
});