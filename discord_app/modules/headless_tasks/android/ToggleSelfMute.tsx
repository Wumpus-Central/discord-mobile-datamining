// discord_app/modules/headless_tasks/android/ToggleSelfMute.tsx
import _modDef17148 from "../HeadlessTaskUtils.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/headless_tasks/android/ToggleSelfMute.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    _modDef17148.awaitStorage(() => {
      const channel = closure_2_3.getChannel(callback);
      const muteStates = channelId(dependencyMap[2]).getMuteStates({ channel });
      const obj = channelId(dependencyMap[2]);
      channelId(dependencyMap[3]).createMuteHandler(muteStates).onPress();
      callback(true);
    });
  });
};