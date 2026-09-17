// === Module 9320: SecureFramesStreamVerificationBottomSheet ===

// Module 9320 (SecureFramesStreamVerificationBottomSheet)
import showShareActionSheet from "showShareActionSheet" /* 8510 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9315 */;
import noop from "module_19" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4679 */;

require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default function SecureFramesStreamVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  const streamKey = channelId.streamKey;
  const items = [StreamRTCConnectionStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    const secureFramesState = StreamRTCConnectionStore.getSecureFramesState(streamKey);
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = noop.useCallback((message) => {
    const result = SecureFramesTracking.trackE2EEStreamVerificationShareClicked({ channelId });
    const obj2 = { channelId };
    showShareActionSheet.showShareActionSheet({ message }, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  let obj2 = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
  let obj = channelId(504);
  const intl = channelId(1115).intl;
  obj2.title = intl.string(channelId(1115).t.QogHld);
  const intl2 = channelId(1115).intl;
  obj2.subtitle = intl2.string(channelId(1115).t.qODBkW);
  const intl3 = channelId(1115).intl;
  const obj3 = { helpArticle: null };
  const tmp3 = streamKey(9321);
  obj3.helpArticle = channelId(9304).getSecureFramesHelpdeskArticle();
  obj2.footer = intl3.format(channelId(1115).t["H3+ktv"], obj3);
  obj2.epochAuthenticator = stateFromStores;
  obj2.onShareClick = callback;
  return <tmp3 title={null} subtitle={null} footer={null} epochAuthenticator={null} onShareClick={null} />;
};