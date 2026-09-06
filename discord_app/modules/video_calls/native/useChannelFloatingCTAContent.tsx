// discord_app/modules/video_calls/native/useChannelFloatingCTAContent.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useChannelFloatingCTAContent.tsx");

export default function useChannelFloatingCTAContent(arg0) {
  _require = arg0;
  let items = [RTCConnectionStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = RTCConnectionStore.getChannelId() === tmp;
    }
    return tmp2;
  });
  let tmp2 = require("useGameConsoleAccounts")();
  importDefault = tmp2;
  const obj = require("useStateFromStores");
  const items1 = [MediaEngineStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () =>
    anyLocalVideoAutoDisabled.isAnyLocalVideoAutoDisabled(),
  );
  const items2 = [stateFromStores1, tmp2, stateFromStores];
  return stateFromStores1.useMemo(() => {
    const items = [];
    if (stateFromStores1) {
      items.push(dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
    }
    if (stateFromStores) {
      items.push(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
    }
    if (closure_1.some((twoWayLink) => twoWayLink.twoWayLink)) {
      items.push(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    }
    return items;
  }, items2);
}
