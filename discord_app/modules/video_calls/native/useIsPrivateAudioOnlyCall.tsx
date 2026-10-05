// discord_app/modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx
import CallConstants from "../../calls/CallConstants.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

function areParticipantStatesEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
}
const isActivityParticipant = CallConstants.isActivityParticipant;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let _private;
      let closure_1;
      let first;
      let tmp6;
      let tmp7;
      _require = id;
      const obj = require("react");
      const cResult = obj.c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ChannelRTCStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function v() {
          const items = [
            ChannelRTCStore.getSelectedParticipant(_private.id),
            ChannelRTCStore.getParticipantsVersion(_private.id),
          ];
          return items;
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== id) {
        const items1 = [id];
        cResult[3] = id;
        cResult[4] = items1;
        tmp7 = items1;
      } else {
        tmp7 = cResult[4];
      }
      const tmpResult = require("get initialized");
      const first1 = _slicedToArray(tmpResult.useStateFromStores(first, tmp6, tmp7, areParticipantStatesEqual), 1)[0];
      if (cResult[5] === id.id) {
        let tmp9;
        let tmp12;
        if (cResult[6] === first1) {
          tmp9 = cResult[7];
        }
        dependencyMap = tmp9;
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [VoiceStateStore, MediaEngineStore, ApplicationStreamingStore];
          cResult[8] = items2;
          tmp12 = items2;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] === id) {
          let tmp16;
          let tmp17;
          if (cResult[10] === tmp9) {
            tmp16 = cResult[11];
            tmp17 = cResult[12];
          }
          const tmpResult2 = require("get initialized");
          return tmpResult2.useStateFromStores(tmp12, tmp16, tmp17);
        }
        const fn2 = function b() {
          const isPrivateResult =
            _private.isPrivate() &&
            !VoiceStateStore.hasVideo(_private.id) &&
            !closure_1 &&
            0 === ApplicationStreamingStore.getAllApplicationStreamsForChannel(_private.id).length &&
            0 === ApplicationStreamingStore.getAllActiveStreamsForChannel(_private.id).length &&
            !MediaEngineStore.isVideoEnabled();
          return isPrivateResult;
        };
        const items3 = [id, tmp9];
        cResult[9] = id;
        cResult[10] = tmp9;
        cResult[11] = fn2;
        cResult[12] = items3;
        tmp17 = items3;
        tmp16 = fn2;
      }
      const tmp10 =
        EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id.id).length > 0 || isActivityParticipant(first1);
      cResult[5] = id.id;
      cResult[6] = first1;
      cResult[7] = tmp10;
      tmp9 = tmp10;
    }
  : (id) => {
      let _private;
      let closure_1;
      _require = id;
      let items = [ChannelRTCStore];
      const items1 = [id];
      const obj = require("get initialized");
      const first = _slicedToArray(
        obj.useStateFromStores(
          items,
          () => {
            const items = [
              ChannelRTCStore.getSelectedParticipant(_private.id),
              ChannelRTCStore.getParticipantsVersion(_private.id),
            ];
            return items;
          },
          items1,
          areParticipantStatesEqual,
        ),
        1,
      )[0];
      let tmp4 = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id.id).length > 0;
      const tmp = _require;
      if (!tmp4) {
        tmp4 = isActivityParticipant(first);
      }
      dependencyMap = tmp4;
      const items2 = [VoiceStateStore, MediaEngineStore, ApplicationStreamingStore];
      const items3 = [id, tmp4];
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(
        items2,
        () => {
          const isPrivateResult =
            _private.isPrivate() &&
            !VoiceStateStore.hasVideo(_private.id) &&
            !closure_1 &&
            0 === ApplicationStreamingStore.getAllApplicationStreamsForChannel(_private.id).length &&
            0 === ApplicationStreamingStore.getAllActiveStreamsForChannel(_private.id).length &&
            !MediaEngineStore.isVideoEnabled();
          return isPrivateResult;
        },
        items3,
      );
    };
const result = size.fileFinishedImporting("modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx");

export default tmp2;
