// discord_app/modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";
import SecureFramesTracking from "../SecureFramesTracking.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import StreamRTCConnectionStore from "../../../stores/StreamRTCConnectionStore.tsx";

require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default function SecureFramesStreamVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  const streamKey = channelId.streamKey;
  let obj = channelId(504);
  const items = [StreamRTCConnectionStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const secureFramesState = StreamRTCConnectionStore.getSecureFramesState(streamKey);
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = noop.useCallback((message) => {
    let obj = { channelId };
    const result = obj.trackE2EEStreamVerificationShareClicked(obj);
    obj = { message };
    showShareActionSheet.showShareActionSheet(obj, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  obj = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
  const intl = channelId(1114).intl;
  obj.title = intl.string(channelId(1114).t.QogHld);
  const intl2 = channelId(1114).intl;
  obj.subtitle = intl2.string(channelId(1114).t.qODBkW);
  const intl3 = channelId(1114).intl;
  obj = { helpArticle: null };
  const tmp3 = streamKey(9167);
  obj.helpArticle = channelId(9150).getSecureFramesHelpdeskArticle();
  obj.footer = intl3.format(channelId(1114).t["H3+ktv"], obj);
  obj.epochAuthenticator = stateFromStores;
  obj.onShareClick = callback;
  return <tmp3 helpArticle={null} />;
}
