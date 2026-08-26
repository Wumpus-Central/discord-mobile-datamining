// === Module 10811: useRevealProviderValue ===

// Module 10811 (useRevealProviderValue)
import areParticipantStatesEqualDefault from "areParticipantStatesEqual" /* 9964 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10812 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "setContent" /* 4154 */;
import closure_5 from "set" /* 4461 */;
import VoiceChatDrawerState from "VoiceChatDrawerState" /* 9962 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
function useRevealProviderValue(arg0, channel) {
  let tmp = arg0;
  const items = [closure_4];
  const stateFromStores = stateFromStores1(589).useStateFromStores(items, () => null != key.getKey());
  const obj = stateFromStores1(589);
  const tmp2 = stateFromStores1;
  const tmp5 = areParticipantStatesEqualDefault(channel);
  const tmp6 = callback2();
  const items1 = [closure_5];
  stateFromStores1 = stateFromStores1(589).useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const obj2 = stateFromStores1(589);
  if (!arg0) {
    tmp = stateFromStores;
  }
  if (!tmp) {
    tmp = tmp5;
  }
  if (!tmp) {
    tmp = null === channel;
  }
  if (!tmp) {
    tmp = tmp6;
  }
  if (!tmp) {
    tmp = stateFromStores1;
  }
  stateFromStores1 = tmp;
  const tmp8 = useIsActivityFocusedDefault(channel.id);
  const tmp10 = tmp2(500).isIOS() && tmp8;
  importDefault = tmp10;
  const items2 = [tmp, tmp10];
  return importAllResult.useMemo(() => ({ reveal: stateFromStores1, prefersDeferringSystemGestures: closure_1 }), items2);
}
let c3 = importAllResult;
({ useChannelCallStore: closure_6, focusTimeout: error, resetFocusTimer: closure_8, useIsVoiceChatFocused: c9 } = VoiceChatDrawerState);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const context = importAllResult.createContext({ reveal: true });
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/RevealProvider.tsx");

export default function RevealProvider(showStatus) {
  let flag = showStatus.showStatus;
  ({ channel, children } = showStatus);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showStatus.useThemedBarStyle;
  if (flag2 === undefined) {
    flag2 = false;
  }
  closure_0 = undefined;
  const tmp = callback((focus) => focus.focus);
  closure_0 = tmp;
  const tmp2 = useRevealProviderValue(tmp, channel);
  ({ reveal, prefersDeferringSystemGestures } = tmp2);
  const items = [tmp];
  const effect = importAllResult.useEffect(() => {
    if (closure_0) {
      closure_1_8();
    } else {
      closure_1_7.stop();
    }
  }, items);
  let str = "light-content";
  if (flag2) {
    str = "light-content";
    if ("dark" !== tmp6) {
      str = "dark-content";
    }
  }
  const obj = { value: tmp2, children: null };
  let tmp10 = !reveal;
  let tmp4Result = tmp4(7960);
  if (!reveal) {
    tmp10 = !flag;
  }
  const items1 = [closure_10(tmp4Result, { hidden: tmp10, animated: true, barStyle: str }), children, ];
  let tmp12 = !reveal;
  tmp4Result = tmp4(10813);
  if (!reveal) {
    tmp12 = !prefersDeferringSystemGestures;
  }
  items1[2] = closure_10(tmp4Result, { prefersHidden: tmp12, prefersDeferringSystemGestures });
  obj[1] = items1;
  return closure_11(context.Provider, obj);
};
export const RevealContext = context;
export { useRevealProviderValue };