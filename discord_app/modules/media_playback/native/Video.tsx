// discord_app/modules/media_playback/native/Video.tsx
import c from "../../../../_runtime/00576_c.js";
import MediaPlaybackExperiment from "MediaPlaybackExperiment.tsx";
import NativeVideo from "NativeVideo.tsx";
import _mod8794 from "../../../../_runtime/metro/08794__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_playback/native/Video.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function Video(ref) {
        const cResult = c.c(11);
        if (cResult[0] !== ref) {
          const tmp8 = _objectWithoutProperties(ref.ref, closure_2);
          cResult[0] = ref.ref;
          cResult[1] = tmp8;
          cResult[2] = ref.ref;
          let tmp5 = ref;
          let tmp4 = tmp8;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
        }
        if (tmpResult.isNativeMediaPlaybackEnabled()) {
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmpResult3 = NativeVideo;
            cResult[3] = tmpResult3;
          }
          if (cResult[4] === tmp4) {
            if (cResult[5] === tmp5) {
              let tmp21 = cResult[6];
            }
            return tmp21;
          }
          const obj2 = {};
          const merged = Object.assign(tmp4);
          obj2.ref = tmp5;
          const tmp26 = <tmp19.default />;
          cResult[4] = tmp4;
          cResult[5] = tmp5;
          cResult[6] = tmp26;
          tmp21 = tmp26;
        } else {
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const tmpResult4 = _mod8794;
            cResult[7] = tmpResult4;
          }
          if (cResult[8] === tmp4) {
            if (cResult[9] === tmp5) {
              let tmp12 = cResult[10];
            }
            return tmp12;
          }
          const obj3 = {};
          const merged1 = Object.assign(tmp4);
          obj3.ref = tmp5;
          const tmp17 = <tmp10.default />;
          cResult[8] = tmp4;
          cResult[9] = tmp5;
          cResult[10] = tmp17;
          tmp12 = tmp17;
        }
        tmpResult = MediaPlaybackExperiment;
      }
    : function Video(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        if (obj.isNativeMediaPlaybackEnabled()) {
          const obj2 = {};
          const merged1 = Object.assign(merged);
          obj2.ref = ref;
          return jsx(NativeVideo.default, {});
        } else {
          const obj3 = {};
          const merged2 = Object.assign(merged);
          obj3.ref = ref;
          return jsx(_mod8794.default, {});
        }
        obj = MediaPlaybackExperiment;
      },
);
