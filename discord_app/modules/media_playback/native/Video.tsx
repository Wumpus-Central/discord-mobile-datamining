// === Module 8874: media_playback/Video ===

// Module 8874 (media_playback/Video)
import MediaPlaybackExperiment from "MediaPlaybackExperiment" /* 8875 */;
import NativeVideo from "NativeVideo" /* 8877 */;
import _mod8879 from "module_8879" /* 8879 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_playback/native/Video.tsx");

export default noop.memo(function Video(ref) {
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
    return jsx(_mod8879.default, {});
  }
  obj = MediaPlaybackExperiment;
});