// discord_app/modules/rtc/native/SecureFramesCallVerificationBottomSheet.tsx
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";
import SecureFramesTracking from "../SecureFramesTracking.tsx";
import SecureFramesVerificationBottomSheetDefault from "SecureFramesVerificationBottomSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCallVerificationBottomSheet.tsx");

export default function SecureFramesCallVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  const items = [RTCConnectionStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    secureFramesState = secureFramesState.getSecureFramesState();
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = noop.useCallback((message) => {
    const result = SecureFramesTracking.trackE2EECallVerificationShareClicked({ channelId });
    const obj2 = { channelId };
    showShareActionSheet.showShareActionSheet({ message }, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  let obj2 = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
  let obj = channelId(504);
  const intl = channelId(1115).intl;
  obj2.title = intl.string(channelId(1115).t.cTQI5t);
  const intl2 = channelId(1115).intl;
  obj2.subtitle = intl2.string(channelId(1115).t["MPp7+C"]);
  const intl3 = channelId(1115).intl;
  const obj3 = { helpArticle: null };
  obj3.helpArticle = channelId(9304).getSecureFramesHelpdeskArticle();
  obj2.footer = intl3.format(channelId(1115).t.wKxADe, obj3);
  obj2.epochAuthenticator = stateFromStores;
  obj2.onShareClick = callback;
  return <tmp3 title={null} subtitle={null} footer={null} epochAuthenticator={null} onShareClick={null} />;
}
