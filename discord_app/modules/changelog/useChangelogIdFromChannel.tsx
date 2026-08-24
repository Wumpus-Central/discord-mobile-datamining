// discord_app/modules/changelog/useChangelogIdFromChannel.tsx
import closure_2 from "../../stores/MessageStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default function useChangelogIdFromChannel(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _initialize.useStateFromStores(items, () => closure_1_2.getLastMessage(closure_0));
  let changelogId;
  if (stateFromStores != null) {
    changelogId = stateFromStores.changelogId;
  }
  return changelogId;
};