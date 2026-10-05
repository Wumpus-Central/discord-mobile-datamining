// discord_common/js/packages/media-engine/native/ui/Video.tsx
import DirectVideoDefault from "DirectVideo.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

class Video {
  constructor(arg0) {
    return DirectVideoDefault(arg0, Video.onContainerResized);
  }
}
Video.onContainerResized = () => {};
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Video.tsx");

export default Video;
