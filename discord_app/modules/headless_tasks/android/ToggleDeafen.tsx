import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useDeafStates").fileFinishedImporting("modules/headless_tasks/android/ToggleDeafen.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    outer1_1(outer1_2[1]).awaitStorage(() => {
      const channel = outer2_3.getChannel(callback);
      const deafStates = channelId(outer2_2[2]).getDeafStates(channel);
      const obj = channelId(outer2_2[2]);
      channelId(outer2_2[3]).createDeafHandler(deafStates).onPress();
      callback(true);
    });
  });
};