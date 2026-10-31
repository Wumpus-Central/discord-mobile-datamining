// discord_app/modules/media_playback/native/Video.tsx
import MediaPlaybackExperiment from "MediaPlaybackExperiment.tsx";
import NativeVideo from "NativeVideo.tsx";
import _mod8879 from "../../../../_runtime/metro/08879__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
