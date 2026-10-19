// === Module 13458: CreateGuildActionCreators ===

// Module 13458 (CreateGuildActionCreators)
import GuildChannelStore from "GuildChannelStore" /* 4843 */;

const require = fn;
const InstantInviteSources = fn(1087).InstantInviteSources;
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
        const result = defaultChannel(dependencyMap[2]).showInstantInviteActionSheet(defaultChannel, { source: constants.GUILD_CREATE });
      });
      flag = false;
    }
    return flag;
  });
};