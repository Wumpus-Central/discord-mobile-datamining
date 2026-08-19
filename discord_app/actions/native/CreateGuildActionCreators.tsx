// discord_app/actions/native/CreateGuildActionCreators.tsx
import comparator from "../../stores/GuildChannelStore.tsx";
import { InstantInviteSources } from "../../Constants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("actions/native/CreateGuildActionCreators.tsx");

export const showInstantInviteModal = function showInstantInviteModal(closure_0) {
  let result = closure_2.addConditionalChangeListener(() => {
    defaultChannel = closure_1_2.getDefaultChannel(defaultChannel);
    let flag = null == defaultChannel;
    if (!flag) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        defaultChannel(closure_1_1[2]);
        const obj = { source: closure_1_3.GUILD_CREATE };
        const result = obj.showInstantInviteActionSheet(defaultChannel, obj);
      });
      flag = false;
    }
    return flag;
  });
};