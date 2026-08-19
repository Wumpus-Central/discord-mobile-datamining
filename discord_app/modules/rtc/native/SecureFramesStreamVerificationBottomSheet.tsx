// === Module 9722: SecureFramesStreamVerificationBottomSheet ===

// Module 9722 (SecureFramesStreamVerificationBottomSheet)
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 4558 */;
import { AnalyticsSections } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default function SecureFramesStreamVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  const streamKey = channelId.streamKey;
  let obj = channelId(589);
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
    channelId(dependencyMap[5]);
    let obj = { channelId };
    const result = obj.trackE2EEStreamVerificationShareClicked(obj);
    obj = { message };
    channelId(dependencyMap[6]).showShareActionSheet(obj, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  obj = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
  const intl = channelId(1236).intl;
  obj[0] = intl.string(channelId(1236).t.QogHld);
  const intl2 = channelId(1236).intl;
  obj[1] = intl2.string(channelId(1236).t.qODBkW);
  const intl3 = channelId(1236).intl;
  obj = { helpArticle: null };
  const tmp3 = streamKey(9723);
  obj[0] = channelId(9708).getSecureFramesHelpdeskArticle();
  obj[2] = intl3.format(channelId(1236).t["H3+ktv"], obj);
  obj[3] = stateFromStores;
  obj[4] = callback;
  return <tmp3 helpArticle={null} />;
};