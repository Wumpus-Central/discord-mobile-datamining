// === Module 9696: DisconnectRemoteButton ===

// Module 9696 (DisconnectRemoteButton)
import Fragment from "Fragment" /* 21 */;
import CallBarActionAll from "CallBarAction" /* 9076 */;
import CallsUtils from "CallsUtils" /* 9299 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9448 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let tmp4;
  let tmp5;
  let tmp9;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(10);
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function c() {
      const obj = { awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  const tmp8 = remoteSessionId(stateFromStoresObject.awaitingRemote ? 4809 : 9653);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["6vrfgt"]);
    cResult[2] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === channel) {
    let tmp11;
    if (cResult[4] === remoteSessionId) {
      tmp11 = cResult[5];
    }
    if (cResult[6] === isSmallSize) {
      if (cResult[7] === tmp8) {
        let tmp12;
        if (cResult[8] === tmp11) {
          tmp12 = cResult[9];
        }
        return tmp12;
      }
    }
    const tmp15 = jsx(CallBarActionAll.PrimaryActionButton, { source: tmp8, accessibilityLabel: tmp9, isSmallSize, onPress: tmp11 });
    cResult[6] = isSmallSize;
    cResult[7] = tmp8;
    cResult[8] = tmp11;
    cResult[9] = tmp15;
    tmp12 = tmp15;
  }
  const fn2 = function f() {
    if (null != remoteSessionId) {
      const obj2 = GameConsoleActionCreators;
      obj2.remoteDisconnect(tmp);
      const obj3 = CallsUtils;
      obj3.handleDisconnect(channel);
    } else {
      const obj = GameConsoleActionCreators;
      obj.disconnectRemote();
    }
  };
  cResult[3] = channel;
  cResult[4] = remoteSessionId;
  cResult[5] = fn2;
  tmp11 = fn2;
}) : ((channel) => {
  channel = channel.channel;
  const tmp = channel;
  const isSmallSize = channel.isSmallSize;
  let obj = channel(504);
  const items = [GameConsoleStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() };
    return obj;
  });
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  const awaitingRemote = stateFromStoresObject.awaitingRemote;
  const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
  const intl = tmp(1126).intl;
  return <PrimaryActionButton source={remoteSessionId(awaitingRemote ? 4809 : 9653)} accessibilityLabel={intl.string(tmp(1126).t["6vrfgt"])} isSmallSize={isSmallSize} onPress={function onPress() {
    if (null != remoteSessionId) {
      const obj2 = GameConsoleActionCreators;
      obj2.remoteDisconnect(tmp);
      const obj3 = CallsUtils;
      obj3.handleDisconnect(channel);
    } else {
      const obj = GameConsoleActionCreators;
      obj.disconnectRemote();
    }
  }} />;
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = tmp3;