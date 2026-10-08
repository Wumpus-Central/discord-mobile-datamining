// discord_app/modules/channel/preloadChannel.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ ME: c2, CURRENT_APP_CONTEXT: c3 } = Constants);
const result = size.fileFinishedImporting("modules/channel/preloadChannel.tsx");

export default function preloadChannel(arg0, channelId) {
  let tmp = null;
  if (arg0 !== React2) {
    tmp = arg0;
  }
  DispatcherDefault.dispatch({ type: "CHANNEL_PRELOAD", guildId: tmp, channelId, context });
}
