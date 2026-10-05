// === Module 17253: SecureFramesCallVerificationBottomSheet ===

// Module 17253 (SecureFramesCallVerificationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import showShareActionSheet from "showShareActionSheet" /* 8038 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9375 */;
import SecureFramesVerificationBottomSheetDefault from "SecureFramesVerificationBottomSheet" /* 9381 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId, secureFramesState;

const AnalyticsSections = Constants.AnalyticsSections;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmpResult2;
  let obj = channelId(576);
  const cResult = obj.c(10);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    const fn = function s() {
      secureFramesState = secureFramesState.getSecureFramesState();
      let epochAuthenticator;
      if (secureFramesState != null) {
        epochAuthenticator = secureFramesState.epochAuthenticator;
      }
      return epochAuthenticator;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== channelId) {
    const fn2 = function u(message) {
      const obj = SecureFramesTracking;
      const obj2 = { channelId };
      const result = obj.trackE2EECallVerificationShareClicked(obj2);
      const obj3 = showShareActionSheet;
      const obj4 = { message };
      obj3.showShareActionSheet(obj4, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
    };
    cResult[2] = channelId;
    cResult[3] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(channelId(1126).t.cTQI5t);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(channelId(1126).t["MPp7+C"]);
    const intl3 = tmp(1126).intl;
    const format = intl3.format;
    let obj2 = { helpArticle: tmpResult2.getSecureFramesHelpdeskArticle() };
    const wKxADe = tmp(1126).t.wKxADe;
    tmpResult2 = channelId(9364);
    const formatResult = format(wKxADe, obj2);
    cResult[4] = stringResult;
    cResult[5] = stringResult1;
    cResult[6] = formatResult;
    tmp11 = formatResult;
    tmp10 = stringResult1;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
    tmp11 = cResult[6];
  }
  if (cResult[7] === stateFromStores) {
    let tmp15;
    if (cResult[8] === tmp8) {
      tmp15 = cResult[9];
    }
    return tmp15;
  }
  const tmp16 = jsx(SecureFramesVerificationBottomSheetDefault, { title: tmp9, subtitle: tmp10, footer: tmp11, epochAuthenticator: stateFromStores, onShareClick: tmp8 });
  cResult[7] = stateFromStores;
  cResult[8] = tmp8;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : ((channelId) => {
  let obj4;
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
  const callback = react.useCallback((message) => {
    const obj = SecureFramesTracking;
    const obj2 = { channelId };
    const result = obj.trackE2EECallVerificationShareClicked(obj2);
    const obj3 = showShareActionSheet;
    const obj4 = { message };
    obj3.showShareActionSheet(obj4, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  SecureFramesVerificationBottomSheetDefault;
  const intl = channelId(1126).intl;
  const intl2 = channelId(1126).intl;
  const intl3 = channelId(1126).intl;
  const format = intl3.format;
  let obj3 = { helpArticle: obj4.getSecureFramesHelpdeskArticle() };
  const wKxADe = channelId(1126).t.wKxADe;
  obj4 = channelId(9364);
  return <tmp3 title={intl.string(channelId(1126).t.cTQI5t)} subtitle={intl2.string(channelId(1126).t["MPp7+C"])} footer={format(wKxADe, obj3)} epochAuthenticator={stateFromStores} onShareClick={callback} />;
});
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCallVerificationBottomSheet.tsx");

export default tmp2;