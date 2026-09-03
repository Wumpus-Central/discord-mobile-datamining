// === Module 9881: SecureFramesStreamVerificationBottomSheet ===

// Module 9881 (SecureFramesStreamVerificationBottomSheet)
import closure_3 from "noop" /* 19 */;
import closure_4 from "initialize" /* 4568 */;
import { AnalyticsSections } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default function SecureFramesStreamVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  const streamKey = channelId.streamKey;
  let obj = channelId(586);
  const items = [closure_4];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const secureFramesState = closure_1_4.getSecureFramesState(streamKey);
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = React.useCallback((message) => {
    let obj = channelId(closure_1_2[5]);
    obj = { channelId };
    const result = obj.trackE2EEStreamVerificationShareClicked(obj);
    obj = { message };
    channelId(closure_1_2[6]).showShareActionSheet(obj, closure_1_5.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  obj = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
  const intl = channelId(1233).intl;
  obj[0] = intl.string(channelId(1233).t.QogHld);
  const intl2 = channelId(1233).intl;
  obj[1] = intl2.string(channelId(1233).t.qODBkW);
  const intl3 = channelId(1233).intl;
  obj = { helpArticle: null };
  const tmp3 = streamKey(9882);
  obj[0] = channelId(9865).getSecureFramesHelpdeskArticle();
  obj[2] = intl3.format(channelId(1233).t["H3+ktv"], obj);
  obj[3] = stateFromStores;
  obj[4] = callback;
  return <tmp3 helpArticle={null} />;
};