// === Module 12744: CreateGuildActionCreators ===

// Module 12744 (CreateGuildActionCreators)
import GuildChannelStore from "GuildChannelStore" /* 2012 */;

const require = fn;
const InstantInviteSources = fn(1074).InstantInviteSources;
const size = fn(2);
let result = size.fileFinishedImporting("actions/native/CreateGuildActionCreators.tsx");

export const showInstantInviteModal = function showInstantInviteModal(arg0) {
  closure_0 = arg0;
  let result = GuildChannelStore.addConditionalChangeListener(() => {
    defaultChannel = GuildChannelStore.getDefaultChannel(defaultChannel);
    let flag = null == defaultChannel;
    if (!flag) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        defaultChannel(dependencyMap[2]);
        const obj = { source: constants.GUILD_CREATE };
        const result = obj.showInstantInviteActionSheet(defaultChannel, obj);
      });
      flag = false;
    }
    return flag;
  });
};