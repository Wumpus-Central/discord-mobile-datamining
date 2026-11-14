// discord_app/modules/voice_panel/native/stream_volume_moved/StreamVolumeMovedStore.tsx
import ZustandStore from "../../../../lib/ZustandStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const zustandStore = ZustandStore.createZustandStore(() => ({
  hintStreamKey: null,
  scrollToStreamVolumeUserId: null,
  coachmarkUserId: null,
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/StreamVolumeMovedStore.tsx");

export default zustandStore;
export function showStreamVolumeMovedHint(hintStreamKey) {
  zustandStore.setState({ hintStreamKey, scrollToStreamVolumeUserId: null });
}
export function clearStreamVolumeMovedHint(arg0) {
  if (zustandStore.getState().hintStreamKey === arg0) {
    zustandStore.setState({ hintStreamKey: null });
  }
}
export function consumeStreamVolumeMovedHint(arg0, scrollToStreamVolumeUserId) {
  if (zustandStore.getState().hintStreamKey === arg0) {
    const obj2 = { hintStreamKey: null, scrollToStreamVolumeUserId };
    zustandStore.setState(obj2);
  }
}
export function clearScrollToStreamVolume() {
  zustandStore.setState({ scrollToStreamVolumeUserId: null });
}
export function showStreamVolumeCoachmark(coachmarkUserId) {
  zustandStore.setState({ coachmarkUserId });
}
export function hideStreamVolumeCoachmark() {
  if (null != zustandStore.getState().coachmarkUserId) {
    zustandStore.setState({ coachmarkUserId: null });
  }
}
