// discord_app/modules/frames/useFrameRunsInBackground.tsx
import frameRunsInBackgroundDefault from "frameRunsInBackground.tsx";
import UnsyncedUserSettingsStore from "../user_settings/UnsyncedUserSettingsStore.tsx";
import FramesStore from "FramesStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/useFrameRunsInBackground.tsx");

export default function useFrameRunsInBackground(arg0) {
  _require = arg0;
  const items = [FramesStore, UnsyncedUserSettingsStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => frameRunsInBackgroundDefault(FramesStore.getFrame(closure_0), UnsyncedUserSettingsStore),
    items1,
  );
}
