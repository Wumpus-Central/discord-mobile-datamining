// discord_app/modules/rtc/native/SecureFramesCallVerificationBottomSheet.tsx
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";
import SecureFramesTracking from "../SecureFramesTracking.tsx";
import SecureFramesVerificationBottomSheetDefault from "SecureFramesVerificationBottomSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

require = fn;
const AnalyticsSections = fn(1085).AnalyticsSections;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCallVerificationBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SecureFramesCallVerificationBottomSheet(channelId) {
      const cResult = channelId(576).c(10);
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
      let obj = channelId(576);
      const stateFromStores = channelId(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== channelId) {
        const fn2 = function u(message) {
          const result = SecureFramesTracking.trackE2EECallVerificationShareClicked({ channelId });
          const obj2 = { channelId };
          showShareActionSheet.showShareActionSheet({ message }, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        };
        cResult[2] = channelId;
        cResult[3] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.cTQI5t);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t["MPp7+C"]);
        const intl3 = tmp(1126).intl;
        let obj2 = { helpArticle: tmp(8809).getSecureFramesHelpdeskArticle() };
        const formatResult = intl3.format(tmp(1126).t.wKxADe, obj2);
        cResult[4] = stringResult;
        cResult[5] = stringResult1;
        cResult[6] = formatResult;
        let tmp11 = formatResult;
        let tmp10 = stringResult1;
        let tmp9 = stringResult;
        const tmpResult2 = tmp(8809);
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === tmp8) {
          let tmp15 = cResult[9];
        }
        return tmp15;
      }
      const tmp16 = jsx(SecureFramesVerificationBottomSheetDefault, {
        title: tmp9,
        subtitle: tmp10,
        footer: tmp11,
        epochAuthenticator: stateFromStores,
        onShareClick: tmp8,
      });
      cResult[7] = stateFromStores;
      cResult[8] = tmp8;
      cResult[9] = tmp16;
      tmp15 = tmp16;
      const tmpResult = channelId(504);
    }
  : function SecureFramesCallVerificationBottomSheet(channelId) {
      channelId = channelId.channelId;
      const items = [RTCConnectionStore];
      const items1 = [channelId];
      const stateFromStores = channelId(504).useStateFromStores(items, () => {
        secureFramesState = secureFramesState.getSecureFramesState();
        let epochAuthenticator;
        if (secureFramesState != null) {
          epochAuthenticator = secureFramesState.epochAuthenticator;
        }
        return epochAuthenticator;
      });
      const callback = noop.useCallback((message) => {
        const result = SecureFramesTracking.trackE2EECallVerificationShareClicked({ channelId });
        const obj2 = { channelId };
        showShareActionSheet.showShareActionSheet({ message }, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
      }, items1);
      let obj2 = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
      let obj = channelId(504);
      const intl = channelId(1126).intl;
      obj2.title = intl.string(channelId(1126).t.cTQI5t);
      const intl2 = channelId(1126).intl;
      obj2.subtitle = intl2.string(channelId(1126).t["MPp7+C"]);
      const intl3 = channelId(1126).intl;
      const obj3 = { helpArticle: null };
      obj3.helpArticle = channelId(8809).getSecureFramesHelpdeskArticle();
      obj2.footer = intl3.format(channelId(1126).t.wKxADe, obj3);
      obj2.epochAuthenticator = stateFromStores;
      obj2.onShareClick = callback;
      return <tmp3 title={null} subtitle={null} footer={null} epochAuthenticator={null} onShareClick={null} />;
    };
