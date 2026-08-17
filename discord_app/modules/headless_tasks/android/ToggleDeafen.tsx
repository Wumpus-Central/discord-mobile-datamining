// discord_app/modules/headless_tasks/android/ToggleDeafen.tsx
import closure_3 from "../../../stores/ChannelStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/headless_tasks/android/ToggleDeafen.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_1_1(closure_1_2[1]).awaitStorage(() => {
      const channel = closure_2_3.getChannel(callback);
      const deafStates = channelId(closure_2_2[2]).getDeafStates(channel);
      const obj = channelId(closure_2_2[2]);
      channelId(closure_2_2[3]).createDeafHandler(deafStates).onPress();
      callback(true);
    });
  });
};