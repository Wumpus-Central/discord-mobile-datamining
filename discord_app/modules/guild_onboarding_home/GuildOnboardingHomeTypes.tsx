// === Module 11453: newMemberActionFromServer ===

// Module 11453 (newMemberActionFromServer)
import applyOverwritesAll from "applyOverwrites" /* 4026 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import ME from "ME" /* 676 */;

const require = arg1;
function newMemberActionFromServer(channelId) {
  let obj = { channelId: channelId.channel_id, actionType: channelId.action_type, title: channelId.title, description: channelId.description, emoji: null, icon: null };
  let tmp = null;
  if (null != channelId.emoji) {
    obj = { id: null, name: null, animated: null };
    obj[0] = channelId.emoji.id;
    obj[1] = channelId.emoji.name;
    obj[2] = channelId.emoji.animated;
    tmp = obj;
  }
  obj[4] = tmp;
  let icon = channelId.icon;
  if (icon == null) {
    icon = null;
  }
  obj[5] = icon;
  return obj;
}
function resourceChannelFromServer(channelId) {
  let obj = { channelId: channelId.channel_id, title: channelId.title, description: null, emoji: null, icon: null };
  let str = channelId.description;
  if (str == null) {
    str = "";
  }
  obj[2] = str;
  let tmp = null;
  if (null != channelId.emoji) {
    obj = { id: null, name: null, animated: null };
    obj[0] = channelId.emoji.id;
    obj[1] = channelId.emoji.name;
    obj[2] = channelId.emoji.animated;
    tmp = obj;
  }
  obj[3] = tmp;
  let icon = channelId.icon;
  if (icon == null) {
    icon = null;
  }
  obj[4] = icon;
  return obj;
}
function isSettingsEmpty(welcomeMessage) {
  let tmp = null == welcomeMessage;
  if (!tmp) {
    welcomeMessage = welcomeMessage.welcomeMessage;
    let tmp2 = null == welcomeMessage;
    if (!tmp2) {
      let tmp3 = null != welcomeMessage.message;
      if (tmp3) {
        tmp3 = welcomeMessage.message.length > 0;
      }
      let tmp4 = !tmp3;
      if (!tmp3) {
        let tmp5 = null != welcomeMessage.authorIds;
        if (tmp5) {
          tmp5 = welcomeMessage.authorIds.length > 0;
        }
        tmp4 = !tmp5;
      }
      tmp2 = tmp4;
    }
    let tmp6 = tmp2;
    if (tmp6) {
      let tmp7 = null != welcomeMessage.newMemberActions;
      if (tmp7) {
        tmp7 = welcomeMessage.newMemberActions.length > 0;
      }
      let tmp8 = !tmp7;
      if (!tmp7) {
        let tmp9 = null != welcomeMessage.resourceChannels;
        if (tmp9) {
          tmp9 = welcomeMessage.resourceChannels.length > 0;
        }
        tmp8 = !tmp9;
      }
      tmp6 = tmp8;
    }
    tmp = tmp6;
  }
  return tmp;
}
({ ChannelTypes: c4, Permissions: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeTypes.tsx");

export const WELCOME_MESSAGE_MIN_LENGTH = 7;
export const WELCOME_MESSAGE_MAX_LENGTH = 300;
export const NEW_MEMBER_ACTION_TITLE_MIN_LENGTH = 7;
export const NEW_MEMBER_ACTION_TITLE_MAX_LENGTH = 60;
export const NEW_MEMBER_ACTION_MIN = 3;
export const NEW_MEMBER_ACTION_MAX = 5;
export const RESOURCE_CHANNEL_TITLE_MIN_LENGTH = 1;
export const RESOURCE_CHANNEL_TITLE_MAX_LENGTH = 30;
export const RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH = 200;
export const RESOURCE_CHANNEL_MAX = 7;
export const NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY = "NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY";
export const CHANNEL_ACTION_BANNER_HEIGHT = 46;
export const NewMemberActionTypes = { VIEW: 0, [0]: "VIEW", CHAT: 1, [1]: "CHAT" };
export { newMemberActionFromServer };
export { resourceChannelFromServer };
export const settingsFromServer = function settingsFromServer(body) {
  if (null == body) {
    return null;
  } else {
    ({ welcome_message, new_member_actions, resource_channels } = body);
    let obj = { welcomeMessage: null, newMemberActions: null, resourceChannels: null, enabled: null };
    obj = { authorIds: null, message: null };
    ({ author_ids: obj2[0], message: obj2[1] } = welcome_message);
    obj[0] = obj;
    const found = new_member_actions.filter((channel_id) => callback(1370).isNotNullish(store.getChannel(channel_id.channel_id)));
    obj[1] = found.map(newMemberActionFromServer);
    const found1 = resource_channels.filter((channel_id) => callback(1370).isNotNullish(store.getChannel(channel_id.channel_id)));
    obj[2] = found1.map(resourceChannelFromServer);
    obj[3] = body.enabled;
    return obj;
  }
};
export const settingsToServer = function settingsToServer(arg0, enabled) {
  if (null == enabled) {
    return null;
  } else {
    ({ welcomeMessage, newMemberActions, resourceChannels } = enabled);
    let obj = { guild_id: null, welcome_message: null, new_member_actions: null, resource_channels: null, enabled: null };
    obj[0] = arg0;
    let authorIds;
    if (welcomeMessage != null) {
      authorIds = welcomeMessage.authorIds;
    }
    if (authorIds == null) {
      authorIds = [];
    }
    obj = { author_ids: null, message: null };
    obj[0] = authorIds;
    let str;
    if (welcomeMessage != null) {
      str = welcomeMessage.message;
    }
    if (str == null) {
      str = "";
    }
    obj[1] = str;
    obj[1] = obj;
    if (newMemberActions == null) {
      newMemberActions = [];
    }
    const found = newMemberActions.filter((channelId) => callback(1370).isNotNullish(store.getChannel(channelId.channelId)));
    obj[2] = found.map((channelId) => {
      let obj = { channel_id: channelId.channelId, action_type: channelId.actionType, title: channelId.title, description: channelId.description, emoji: null, icon: null };
      const emoji = channelId.emoji;
      let id;
      if (emoji != null) {
        id = emoji.id;
      }
      obj = { id, name: null, animated: null };
      const emoji2 = channelId.emoji;
      let name;
      if (emoji2 != null) {
        name = emoji2.name;
      }
      obj[1] = name;
      const emoji3 = channelId.emoji;
      let animated;
      if (emoji3 != null) {
        animated = emoji3.animated;
      }
      obj[2] = animated;
      obj[4] = obj;
      const icon = channelId.icon;
      obj[5] = icon;
      return obj;
    });
    if (resourceChannels == null) {
      resourceChannels = [];
    }
    const found1 = resourceChannels.filter((channelId) => callback(1370).isNotNullish(store.getChannel(channelId.channelId)));
    obj[3] = found1.map((channelId) => {
      let obj = { channel_id: channelId.channelId, title: channelId.title, description: channelId.description, emoji: null, icon: null };
      const emoji = channelId.emoji;
      let id;
      if (emoji != null) {
        id = emoji.id;
      }
      obj = { id, name: null, animated: null };
      const emoji2 = channelId.emoji;
      let name;
      if (emoji2 != null) {
        name = emoji2.name;
      }
      obj[1] = name;
      const emoji3 = channelId.emoji;
      let animated;
      if (emoji3 != null) {
        animated = emoji3.animated;
      }
      obj[2] = animated;
      obj[3] = obj;
      const icon = channelId.icon;
      obj[4] = icon;
      return obj;
    });
    obj[4] = enabled.enabled;
    return obj;
  }
};
export const actionsFromServer = function actionsFromServer(body) {
  if (null == body) {
    return null;
  } else {
    const obj = {};
    for (const key10005 in arg0.channel_actions) {
      let tmp = key10005;
      obj[key10005] = arg0.channel_actions[key10005].completed;
      continue;
    }
    return obj;
  }
};
export const isWelcomeMessageEmpty = function isWelcomeMessageEmpty(message) {
  let tmp = null == message;
  if (!tmp) {
    let tmp2 = null != message.message;
    if (tmp2) {
      tmp2 = message.message.length > 0;
    }
    let tmp3 = !tmp2;
    if (!tmp2) {
      let tmp4 = null != message.authorIds;
      if (tmp4) {
        tmp4 = message.authorIds.length > 0;
      }
      tmp3 = !tmp4;
    }
    tmp = tmp3;
  }
  return tmp;
};
export { isSettingsEmpty };
export const isSettingsValid = function isSettingsValid(welcomeMessage) {
  if (null == welcomeMessage) {
    return false;
  } else if (isSettingsEmpty(welcomeMessage)) {
    return true;
  } else {
    welcomeMessage = welcomeMessage.welcomeMessage;
    let message;
    if (welcomeMessage != null) {
      message = welcomeMessage.message;
    }
    if (null != message) {
      if (welcomeMessage.welcomeMessage.message.length >= 7) {
        const welcomeMessage2 = welcomeMessage.welcomeMessage;
        let authorIds;
        if (welcomeMessage2 != null) {
          authorIds = welcomeMessage2.authorIds;
        }
        if (null != authorIds) {
          if (0 !== welcomeMessage.welcomeMessage.authorIds.length) {
            if (null != welcomeMessage.newMemberActions) {
              if (welcomeMessage.newMemberActions.length >= 3) {
                if (null != welcomeMessage.newMemberActions) {
                  const newMemberActions = welcomeMessage.newMemberActions;
                  for (const item10012 of newMemberActions) {
                    let tmp5 = channel;
                    let channel = channel.getChannel(item10012.channelId);
                    if (null != channel) {
                      let tmp8 = importAll;
                      let tmp9 = dependencyMap;
                      let obj2 = applyOverwritesAll;
                      let tmp10 = constants2;
                      let tmp11 = channel;
                    }
                    let tmp12 = obj;
                    obj.return();
                    let flag = false;
                    return false;
                  }
                }
                return true;
              }
            }
            return false;
          }
        }
        return false;
      }
    }
    return false;
  }
};
export const isChannelValidForResourceChannel = function isChannelValidForResourceChannel(type) {
  let canEveryoneRoleResult = type.type === constants.GUILD_TEXT;
  if (canEveryoneRoleResult) {
    canEveryoneRoleResult = !applyOverwritesAll.canEveryoneRole(constants2.SEND_MESSAGES, type);
    const obj = applyOverwritesAll;
  }
  if (canEveryoneRoleResult) {
    canEveryoneRoleResult = applyOverwritesAll.canEveryoneRole(constants2.VIEW_CHANNEL, type);
    const obj2 = applyOverwritesAll;
  }
  return canEveryoneRoleResult;
};
export const isChannelValidForNewMemberAction = function isChannelValidForNewMemberAction(type) {
  type = type.type;
  if (constants.GUILD_TEXT !== type) {
    if (tmp.GUILD_ANNOUNCEMENT !== type) {
      if (tmp.GUILD_FORUM !== type) {
        if (tmp.GUILD_MEDIA !== type) {
          return false;
        }
      }
    }
  }
  return applyOverwritesAll.canEveryoneRole(constants2.VIEW_CHANNEL, type);
};
export const ChannelEditBlockTypes = { DEFAULT: 0, [0]: "DEFAULT", TODO: 1, [1]: "TODO", RESOURCE: 2, [2]: "RESOURCE", RULES: 3, [3]: "RULES", UPDATES: 4, [4]: "UPDATES" };