// discord_app/modules/video_calls/native/components/RevealProvider.tsx
import useIsPrivateAudioOnlyCallDefault from "../useIsPrivateAudioOnlyCall.tsx";
import useIsActivityFocusedDefault from "../../../activities/useIsActivityFocused.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../../action_sheet/native/ActionSheetStore.tsx";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";

const require = fn;
function useRevealProviderValue(arg0, channel) {
  let tmp = arg0;
  const items = [ActionSheetStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => null != key.getKey());
  const obj = stateFromStores1(504);
  const tmp2 = stateFromStores1;
  const tmp5 = useIsPrivateAudioOnlyCallDefault(channel);
  const tmp6 = closure_9();
  const items1 = [GameConsoleStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(
    items1,
    () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo(),
  );
  const obj2 = stateFromStores1(504);
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
  const tmp10 = tmp2(1115).isIOS() && tmp8;
  importDefault = tmp10;
  const items2 = [tmp, tmp10];
  return noop.useMemo(() => ({ reveal: stateFromStores1, prefersDeferringSystemGestures }), items2);
}
const ChannelCallStore = fn(9467);
({
  useChannelCallStore: metroRequire,
  focusTimeout: closure_7,
  resetFocusTimer: closure_8,
  useIsVoiceChatFocused: closure_9,
} = ChannelCallStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const context = noop.createContext({ reveal: true });
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/RevealProvider.tsx");

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
  const tmp = closure_6((focus) => focus.focus);
  closure_0 = tmp;
  const tmp2 = useRevealProviderValue(tmp, channel);
  ({ reveal, prefersDeferringSystemGestures } = tmp2);
  const items = [tmp];
  const effect = noop.useEffect(() => {
    if (closure_0) {
      React6();
    } else {
      React5.stop();
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
  let tmp4Result = tmp4(9481);
  if (!reveal) {
    tmp10 = !flag;
  }
  const items1 = [closure_10(tmp4Result, { hidden: tmp10, animated: true, barStyle: str }), children];
  let tmp12 = !reveal;
  tmp4Result = tmp4(9483);
  if (!reveal) {
    tmp12 = !prefersDeferringSystemGestures;
  }
  items1[2] = closure_10(tmp4Result, { prefersHidden: tmp12, prefersDeferringSystemGestures });
  obj.children = items1;
  return closure_11(context.Provider, obj);
}
export const RevealContext = context;
export { useRevealProviderValue };
