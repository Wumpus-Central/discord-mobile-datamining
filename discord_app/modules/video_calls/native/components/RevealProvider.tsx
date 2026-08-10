// discord_app/modules/video_calls/native/components/RevealProvider.tsx
import importAllResult from "noop";
import setContent from "setContent";
import set from "set";
import VoiceChatDrawerState from "VoiceChatDrawerState";
import jsxProd from "jsxProd";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useIsActivityFocused } from "../../../activities/useIsActivityFocused.tsx";
import { areParticipantStatesEqual } from "../useIsPrivateAudioOnlyCall.tsx";

let c10;
let c9;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
let require = arg1;
function useRevealProviderValue(arg0, channel) {
  let tmp = arg0;
  const items = [setContent];
  const stateFromStores = initialize.useStateFromStores(items, () => null != key.getKey());
  const obj = initialize;
  const tmp2 = require;
  const tmp5 = areParticipantStatesEqual(channel);
  const tmp6 = callback2();
  const items1 = [set];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const obj2 = initialize;
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
  require = tmp;
  const tmp8 = useIsActivityFocused(channel.id);
  const tmp10 = tmp2(500).isIOS() && tmp8;
  importDefault = tmp10;
  const items2 = [tmp, tmp10];
  return importAllResult.useMemo(() => ({ reveal: closure_0, prefersDeferringSystemGestures: closure_1 }), items2);
}
let c3 = importAllResult;
({ useChannelCallStore: closure_6, focusTimeout: error, resetFocusTimer: metroImportAll, useIsVoiceChatFocused: c9 } = VoiceChatDrawerState);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const context = importAllResult.createContext({ reveal: true });
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/RevealProvider.tsx");

export default function RevealProvider(showStatus) {
  let channel;
  let children;
  let prefersDeferringSystemGestures;
  let reveal;
  let flag = showStatus.showStatus;
  ({ channel, children } = showStatus);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showStatus.useThemedBarStyle;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let c0;
  const tmp = callback((focus) => focus.focus);
  c0 = tmp;
  const tmp2 = useRevealProviderValue(tmp, channel);
  ({ reveal, prefersDeferringSystemGestures } = tmp2);
  const items = [tmp];
  const effect = importAllResult.useEffect(() => {
    if (c0) {
      outer1_8();
    } else {
      outer1_7.stop();
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
  let tmp4Result = tmp4(7748);
  if (!reveal) {
    tmp10 = !flag;
  }
  const items1 = [closure_10(tmp4Result, { hidden: tmp10, animated: true, barStyle: str }), children, ];
  let tmp12 = !reveal;
  tmp4Result = tmp4(10656);
  if (!reveal) {
    tmp12 = !prefersDeferringSystemGestures;
  }
  items1[2] = closure_10(tmp4Result, { prefersHidden: tmp12, prefersDeferringSystemGestures });
  obj[1] = items1;
  return closure_11(context.Provider, obj);
};
export const RevealContext = context;
export { useRevealProviderValue };