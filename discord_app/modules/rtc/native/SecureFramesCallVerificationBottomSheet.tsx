// === Module 17113: SecureFramesCallVerificationBottomSheet ===

// Module 17113 (SecureFramesCallVerificationBottomSheet)
import showShareActionSheet from "showShareActionSheet" /* 8361 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9161 */;
import SecureFramesVerificationBottomSheetDefault from "SecureFramesVerificationBottomSheet" /* 9167 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;

require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCallVerificationBottomSheet.tsx");

export default function SecureFramesCallVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [RTCConnectionStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    secureFramesState = secureFramesState.getSecureFramesState();
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = noop.useCallback((message) => {
    let obj = { channelId };
    const result = obj.trackE2EECallVerificationShareClicked(obj);
    obj = { message };
    showShareActionSheet.showShareActionSheet(obj, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  obj = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
  const intl = channelId(1114).intl;
  obj.title = intl.string(channelId(1114).t.cTQI5t);
  const intl2 = channelId(1114).intl;
  obj.subtitle = intl2.string(channelId(1114).t["MPp7+C"]);
  const intl3 = channelId(1114).intl;
  obj = { helpArticle: null };
  obj.helpArticle = channelId(9150).getSecureFramesHelpdeskArticle();
  obj.footer = intl3.format(channelId(1114).t.wKxADe, obj);
  obj.epochAuthenticator = stateFromStores;
  obj.onShareClick = callback;
  return <tmp3 helpArticle={null} />;
};