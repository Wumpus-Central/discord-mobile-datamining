// discord_app/modules/guild_onboarding_home/GuildOnboardingHomeTypes.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
function newMemberActionFromServer(channelId) {
  let icon;
  let tmp;
  const obj = {
    channelId: channelId.channel_id,
    actionType: channelId.action_type,
    title: channelId.title,
    description: channelId.description,
    emoji: tmp,
    icon,
  };
  tmp = null;
  if (null != channelId.emoji) {
    tmp = { id: channelId.emoji.id, name: channelId.emoji.name, animated: channelId.emoji.animated };
    const obj2 = { id: channelId.emoji.id, name: channelId.emoji.name, animated: channelId.emoji.animated };
  }
  icon = channelId.icon;
  if (icon == null) {
    icon = null;
  }
  return obj;
}
function resourceChannelFromServer(channelId) {
  let icon;
  let str;
  let tmp;
  const obj = { channelId: channelId.channel_id, title: channelId.title, description: str, emoji: tmp, icon };
  str = channelId.description;
  if (str == null) {
    str = "";
  }
  tmp = null;
  if (null != channelId.emoji) {
    tmp = { id: channelId.emoji.id, name: channelId.emoji.name, animated: channelId.emoji.animated };
    const obj2 = { id: channelId.emoji.id, name: channelId.emoji.name, animated: channelId.emoji.animated };
  }
  icon = channelId.icon;
  if (icon == null) {
    icon = null;
  }
  return obj;
}
function isSettingsEmpty(welcomeMessage) {
  let tmp = null == welcomeMessage;
  if (!tmp) {
    welcomeMessage = welcomeMessage.welcomeMessage;
    let tmp2 = null == welcomeMessage;
    if (!tmp2) {
      let tmp4 = !(null != welcomeMessage.message && welcomeMessage.message.length > 0);
      const tmp3 = null != welcomeMessage.message && welcomeMessage.message.length > 0;
      if (tmp4) {
        tmp4 = !(null != welcomeMessage.authorIds && welcomeMessage.authorIds.length > 0);
        const tmp5 = null != welcomeMessage.authorIds && welcomeMessage.authorIds.length > 0;
      }
      tmp2 = tmp4;
    }
    let tmp6 = tmp2;
    if (tmp6) {
      let tmp8 = !(null != welcomeMessage.newMemberActions && welcomeMessage.newMemberActions.length > 0);
      const tmp7 = null != welcomeMessage.newMemberActions && welcomeMessage.newMemberActions.length > 0;
      if (tmp8) {
        tmp8 = !(null != welcomeMessage.resourceChannels && welcomeMessage.resourceChannels.length > 0);
        const tmp9 = null != welcomeMessage.resourceChannels && welcomeMessage.resourceChannels.length > 0;
      }
      tmp6 = tmp8;
    }
    tmp = tmp6;
  }
  return tmp;
}
({ ChannelTypes: closure_4, Permissions: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeTypes.tsx");

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
  let enabled;
  let found;
  let found1;
  let new_member_actions;
  let obj3;
  let resource_channels;
  let welcome_message;
  if (null == body) {
    return null;
  } else {
    ({ welcome_message, new_member_actions, resource_channels } = body);
    let obj = {
      welcomeMessage: obj3,
      newMemberActions: found.map(newMemberActionFromServer),
      resourceChannels: found1.map(resourceChannelFromServer),
      enabled,
    };
    obj3 = { authorIds: null, message: null };
    ({ author_ids: obj2.authorIds, message: obj2.message } = welcome_message);
    enabled = body.enabled;
    found = new_member_actions.filter((channel_id) => {
      const obj = GlobalUtils;
      return obj.isNotNullish(ChannelStore.getChannel(channel_id.channel_id));
    });
    found1 = resource_channels.filter((channel_id) => {
      const obj = GlobalUtils;
      return obj.isNotNullish(ChannelStore.getChannel(channel_id.channel_id));
    });
    return obj;
  }
};
export const settingsToServer = function settingsToServer(guild_id, enabled) {
  let found;
  let found1;
  let newMemberActions;
  let obj;
  let resourceChannels;
  let str;
  let welcomeMessage;
  if (null == enabled) {
    return null;
  } else {
    ({ welcomeMessage, newMemberActions, resourceChannels } = enabled);
    let obj2 = {
      guild_id,
      welcome_message: obj,
      new_member_actions: found.map((channelId) => {
        let animated;
        let icon;
        let name;
        let obj2;
        const emoji = channelId.emoji;
        let id;
        const obj = {
          channel_id: channelId.channelId,
          action_type: channelId.actionType,
          title: channelId.title,
          description: channelId.description,
          emoji: obj2,
          icon,
        };
        if (emoji != null) {
          id = emoji.id;
        }
        const emoji2 = channelId.emoji;
        obj2 = { id, name, animated };
        name = undefined;
        if (emoji2 != null) {
          name = emoji2.name;
        }
        const emoji3 = channelId.emoji;
        animated = undefined;
        if (emoji3 != null) {
          animated = emoji3.animated;
        }
        icon = channelId.icon;
        return obj;
      }),
      resource_channels: found1.map((channelId) => {
        let animated;
        let icon;
        let name;
        let obj2;
        const emoji = channelId.emoji;
        let id;
        const obj = {
          channel_id: channelId.channelId,
          title: channelId.title,
          description: channelId.description,
          emoji: obj2,
          icon,
        };
        if (emoji != null) {
          id = emoji.id;
        }
        const emoji2 = channelId.emoji;
        obj2 = { id, name, animated };
        name = undefined;
        if (emoji2 != null) {
          name = emoji2.name;
        }
        const emoji3 = channelId.emoji;
        animated = undefined;
        if (emoji3 != null) {
          animated = emoji3.animated;
        }
        icon = channelId.icon;
        return obj;
      }),
      enabled,
    };
    let authorIds;
    enabled = enabled.enabled;
    if (welcomeMessage != null) {
      authorIds = welcomeMessage.authorIds;
    }
    if (authorIds == null) {
      authorIds = [];
    }
    obj = { author_ids: authorIds, message: str };
    str = undefined;
    if (welcomeMessage != null) {
      str = welcomeMessage.message;
    }
    if (str == null) {
      str = "";
    }
    if (newMemberActions == null) {
      newMemberActions = [];
    }
    found = newMemberActions.filter((channelId) => {
      const obj = GlobalUtils;
      return obj.isNotNullish(ChannelStore.getChannel(channelId.channelId));
    });
    if (resourceChannels == null) {
      resourceChannels = [];
    }
    found1 = resourceChannels.filter((channelId) => {
      const obj = GlobalUtils;
      return obj.isNotNullish(ChannelStore.getChannel(channelId.channelId));
    });
    return obj2;
  }
};
export const actionsFromServer = function actionsFromServer(body) {
  if (null == body) {
    return null;
  } else {
    const obj = {};
    for (const key10005 in body.channel_actions) {
      obj[key10005] = body.channel_actions[key10005].completed;
      continue;
    }
    return obj;
  }
};
export const isWelcomeMessageEmpty = function isWelcomeMessageEmpty(message) {
  let tmp = null == message;
  if (!tmp) {
    let tmp3 = !(null != message.message && message.message.length > 0);
    const tmp2 = null != message.message && message.message.length > 0;
    if (tmp3) {
      tmp3 = !(null != message.authorIds && message.authorIds.length > 0);
      const tmp4 = null != message.authorIds && message.authorIds.length > 0;
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
                    let channel = ChannelStore.getChannel(item10012.channelId);
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
    const obj = PermissionUtilsAll;
    canEveryoneRoleResult = !obj.canEveryoneRole(hasOwnProperty.SEND_MESSAGES, type);
  }
  if (canEveryoneRoleResult) {
    const obj2 = PermissionUtilsAll;
    canEveryoneRoleResult = obj2.canEveryoneRole(hasOwnProperty.VIEW_CHANNEL, type);
  }
  return canEveryoneRoleResult;
};
export const isChannelValidForNewMemberAction = function isChannelValidForNewMemberAction(type) {
  type = type.type;
  if (constants.GUILD_TEXT !== type) {
    if (constants.GUILD_ANNOUNCEMENT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          return false;
        }
      }
    }
  }
  const obj = PermissionUtilsAll;
  return obj.canEveryoneRole(hasOwnProperty.VIEW_CHANNEL, type);
};
export const ChannelEditBlockTypes = {
  DEFAULT: 0,
  [0]: "DEFAULT",
  TODO: 1,
  [1]: "TODO",
  RESOURCE: 2,
  [2]: "RESOURCE",
  RULES: 3,
  [3]: "RULES",
  UPDATES: 4,
  [4]: "UPDATES",
};
