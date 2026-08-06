// discord_app/modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx
import noop from "noop";
import initialize from "initialize";
import { AnalyticsSections } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default function SecureFramesStreamVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  const streamKey = channelId.streamKey;
  let obj = channelId(589);
  const items = [initialize];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const secureFramesState = outer1_4.getSecureFramesState(streamKey);
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = React.useCallback((message) => {
    let obj = channelId(outer1_2[5]);
    obj = { channelId };
    const result = obj.trackE2EEStreamVerificationShareClicked(obj);
    obj = { message };
    channelId(outer1_2[6]).showShareActionSheet(obj, outer1_5.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  obj = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
  const intl = channelId(1236).intl;
  obj[0] = intl.string(channelId(1236).t.QogHld);
  const intl2 = channelId(1236).intl;
  obj[1] = intl2.string(channelId(1236).t.qODBkW);
  const intl3 = channelId(1236).intl;
  obj = { helpArticle: null };
  const tmp3 = streamKey(9148);
  obj[0] = channelId(9132).getSecureFramesHelpdeskArticle();
  obj[2] = intl3.format(channelId(1236).t["H3+ktv"], obj);
  obj[3] = stateFromStores;
  obj[4] = callback;
  return <tmp3 helpArticle={null} />;
};