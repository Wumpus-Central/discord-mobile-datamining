// discord_app/modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../Constants.tsx";
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";
import SecureFramesTracking from "../SecureFramesTracking.tsx";
import react from "../../../../_runtime/00019_react.js";
import StreamRTCConnectionStore from "../../../stores/StreamRTCConnectionStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channelId;

const AnalyticsSections = Constants.AnalyticsSections;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let obj3;
      let tmp10;
      let tmp11;
      let tmp16;
      let tmp6;
      let tmp9;
      let tmpResult2;
      let obj = channelId(576);
      const cResult = obj.c(11);
      channelId = channelId.channelId;
      const streamKey = channelId.streamKey;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StreamRTCConnectionStore];
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = channelId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== channelId) {
        class E {
          constructor(message) {
            const obj = SecureFramesTracking;
            const obj2 = { channelId };
            const result = obj.trackE2EEStreamVerificationShareClicked(obj2);
            const obj3 = showShareActionSheet;
            const obj4 = { message };
            obj3.showShareActionSheet(obj4, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
          }
        }
        cResult[3] = channelId;
        cResult[4] = E;
      } else {
        class E {
          constructor(message) {
            const obj = SecureFramesTracking;
            const obj2 = { channelId };
            const result = obj.trackE2EEStreamVerificationShareClicked(obj2);
            const obj3 = showShareActionSheet;
            const obj4 = { message };
            obj3.showShareActionSheet(obj4, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
          }
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(message) {
            const obj = SecureFramesTracking;
            const obj2 = { channelId };
            const result = obj.trackE2EEStreamVerificationShareClicked(obj2);
            const obj3 = showShareActionSheet;
            const obj4 = { message };
            obj3.showShareActionSheet(obj4, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
          }
        }
        const stringResult = obj3.string(channelId(1126).t.QogHld);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(channelId(1126).t.qODBkW);
        const intl2 = tmp(1126).intl;
        const format = intl2.format;
        let obj2 = { helpArticle: tmpResult2.getSecureFramesHelpdeskArticle() };
        const prop = tmp(1126).t["H3+ktv"];
        tmpResult2 = channelId(9378);
        const formatResult = format(prop, obj2);
        cResult[5] = stringResult;
        cResult[6] = stringResult1;
        cResult[7] = formatResult;
        tmp11 = formatResult;
        tmp10 = stringResult1;
        tmp9 = stringResult;
      } else {
        class E {
          constructor(message) {
            const obj = SecureFramesTracking;
            const obj2 = { channelId };
            const result = obj.trackE2EEStreamVerificationShareClicked(obj2);
            const obj3 = showShareActionSheet;
            const obj4 = { message };
            obj3.showShareActionSheet(obj4, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
          }
        }
        tmp10 = cResult[6];
        tmp11 = cResult[7];
      }
      if (cResult[8] === stateFromStores) {
        class E {
          constructor(message) {
            const obj = SecureFramesTracking;
            const obj2 = { channelId };
            const result = obj.trackE2EEStreamVerificationShareClicked(obj2);
            const obj3 = showShareActionSheet;
            const obj4 = { message };
            obj3.showShareActionSheet(obj4, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
          }
        }
        return tmp16;
      }
      tmp16 = jsx(streamKey(9395), {
        title: tmp9,
        subtitle: tmp10,
        footer: tmp11,
        epochAuthenticator: stateFromStores,
        onShareClick: E,
      });
      cResult[8] = stateFromStores;
      cResult[9] = E;
      cResult[10] = tmp16;
    }
  : (channelId) => {
      let obj4;
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
      const callback = react.useCallback((message) => {
        const obj = SecureFramesTracking;
        const obj2 = { channelId };
        const result = obj.trackE2EEStreamVerificationShareClicked(obj2);
        const obj3 = showShareActionSheet;
        const obj4 = { message };
        obj3.showShareActionSheet(obj4, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
      }, items1);
      streamKey(9395);
      const intl = channelId(1126).intl;
      const intl2 = channelId(1126).intl;
      const intl3 = channelId(1126).intl;
      const format = intl3.format;
      let obj3 = { helpArticle: obj4.getSecureFramesHelpdeskArticle() };
      const prop = channelId(1126).t["H3+ktv"];
      obj4 = channelId(9378);
      return (
        <tmp3
          title={intl.string(channelId(1126).t.QogHld)}
          subtitle={intl2.string(channelId(1126).t.qODBkW)}
          footer={format(prop, obj3)}
          epochAuthenticator={stateFromStores}
          onShareClick={callback}
        />
      );
    };
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default tmp2;
