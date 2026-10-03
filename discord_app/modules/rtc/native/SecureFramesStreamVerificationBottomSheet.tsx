// === Module 9380: SecureFramesStreamVerificationBottomSheet ===

// Module 9380 (SecureFramesStreamVerificationBottomSheet)
import showShareActionSheet from "showShareActionSheet" /* 8038 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9375 */;
import noop from "module_19" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4929 */;

require = fn;
const AnalyticsSections = fn(1085).AnalyticsSections;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(576).c(11);
  channelId = channelId.channelId;
  const streamKey = channelId.streamKey;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StreamRTCConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== streamKey) {
    const fn = function s() {
      const secureFramesState = StreamRTCConnectionStore.getSecureFramesState(streamKey);
      let epochAuthenticator;
      if (secureFramesState != null) {
        epochAuthenticator = secureFramesState.epochAuthenticator;
      }
      return epochAuthenticator;
    };
    cResult[1] = streamKey;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
  if (cResult[3] !== channelId) {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        obj1 = { channelId };
        result = obj.trackE2EEStreamVerificationShareClicked(obj1);
        obj3 = closure_0(closure_2[8]);
        obj5 = { message: channelId };
        showShareActionSheetResult = obj3.showShareActionSheet(obj5, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        return;
      }
    }
    cResult[3] = channelId;
    cResult[4] = E;
  } else {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        obj1 = { channelId };
        result = obj.trackE2EEStreamVerificationShareClicked(obj1);
        obj3 = closure_0(closure_2[8]);
        obj5 = { message: channelId };
        showShareActionSheetResult = obj3.showShareActionSheet(obj5, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        obj1 = { channelId };
        result = obj.trackE2EEStreamVerificationShareClicked(obj1);
        obj3 = closure_0(closure_2[8]);
        obj5 = { message: channelId };
        showShareActionSheetResult = obj3.showShareActionSheet(obj5, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        return;
      }
    }
    const stringResult = obj3.string(tmp(1126).t.QogHld);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(tmp(1126).t.qODBkW);
    const intl2 = tmp(1126).intl;
    let obj2 = { helpArticle: tmp(9364).getSecureFramesHelpdeskArticle() };
    const formatResult = intl2.format(tmp(1126).t["H3+ktv"], obj2);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    cResult[7] = formatResult;
    let tmp11 = formatResult;
    let tmp10 = stringResult1;
    const tmp9 = stringResult;
    const tmpResult2 = tmp(9364);
  } else {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        obj1 = { channelId };
        result = obj.trackE2EEStreamVerificationShareClicked(obj1);
        obj3 = closure_0(closure_2[8]);
        obj5 = { message: channelId };
        showShareActionSheetResult = obj3.showShareActionSheet(obj5, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        return;
      }
    }
    tmp10 = cResult[6];
    tmp11 = cResult[7];
  }
  if (cResult[8] === stateFromStores) {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        obj1 = { channelId };
        result = obj.trackE2EEStreamVerificationShareClicked(obj1);
        obj3 = closure_0(closure_2[8]);
        obj5 = { message: channelId };
        showShareActionSheetResult = obj3.showShareActionSheet(obj5, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        return;
      }
    }
    return tmp15;
  }
  tmp15 = jsx(streamKey(9381), { title: tmp9, subtitle: tmp10, footer: tmp11, epochAuthenticator: stateFromStores, onShareClick: E });
  cResult[8] = stateFromStores;
  cResult[9] = E;
  cResult[10] = tmp15;
  const tmpResult = channelId(504);
}) : ((channelId) => {
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
  const intl = channelId(1126).intl;
  obj2.title = intl.string(channelId(1126).t.QogHld);
  const intl2 = channelId(1126).intl;
  obj2.subtitle = intl2.string(channelId(1126).t.qODBkW);
  const intl3 = channelId(1126).intl;
  const obj3 = { helpArticle: null };
  const tmp3 = streamKey(9381);
  obj3.helpArticle = channelId(9364).getSecureFramesHelpdeskArticle();
  obj2.footer = intl3.format(channelId(1126).t["H3+ktv"], obj3);
  obj2.epochAuthenticator = stateFromStores;
  obj2.onShareClick = callback;
  return <tmp3 title={null} subtitle={null} footer={null} epochAuthenticator={null} onShareClick={null} />;
});