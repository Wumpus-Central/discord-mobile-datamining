// === Module 16658: SecureFramesCallVerificationBottomSheet ===

// Module 16658 (SecureFramesCallVerificationBottomSheet)
import SecureFramesVerificationBottomSheetDefault from "SecureFramesVerificationBottomSheet" /* 9817 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "createRTCConnection" /* 4522 */;
import { AnalyticsSections } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/rtc/native/SecureFramesCallVerificationBottomSheet.tsx");

export default function SecureFramesCallVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(589);
  const items = [closure_4];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    secureFramesState = secureFramesState.getSecureFramesState();
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = React.useCallback((message) => {
    let obj = channelId(closure_1_2[5]);
    obj = { channelId };
    const result = obj.trackE2EECallVerificationShareClicked(obj);
    obj = { message };
    channelId(closure_1_2[6]).showShareActionSheet(obj, closure_1_5.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  obj = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
  const intl = channelId(1236).intl;
  obj[0] = intl.string(channelId(1236).t.cTQI5t);
  const intl2 = channelId(1236).intl;
  obj[1] = intl2.string(channelId(1236).t["MPp7+C"]);
  const intl3 = channelId(1236).intl;
  obj = { helpArticle: null };
  const tmp3 = SecureFramesVerificationBottomSheetDefault;
  obj[0] = channelId(9800).getSecureFramesHelpdeskArticle();
  obj[2] = intl3.format(channelId(1236).t.wKxADe, obj);
  obj[3] = stateFromStores;
  obj[4] = callback;
  return <tmp3 helpArticle={null} />;
};