// discord_app/modules/channel/getChannelIcon.tsx
import _slicedToArray from "_slicedToArray";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ChannelTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/channel/getChannelIcon.tsx");

export const getChannelIconURL = function getChannelIconURL(type) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 32;
  }
  type = type.type;
  if (ChannelTypes.DM === type) {
    const recipients = type.recipients;
    const mapped = recipients.map(mergeGuildAvatar.getUser);
    const first = callback(mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish), 1)[0];
    let avatarURL = null;
    if (null != first) {
      avatarURL = first.getAvatarURL(undefined, num, arg2);
    }
    return avatarURL;
  } else if (tmp.GROUP_DM === type) {
    let obj = importDefault(1416);
    obj = { id: null, icon: null, applicationId: null, size: null };
    ({ id: obj2[0], icon: obj2[1] } = type);
    obj[2] = type.getApplicationId();
    obj[3] = num;
    return obj.getChannelIconURL(obj);
  }
};
export const getChannelIconSource = function getChannelIconSource(type) {
  type = type.type;
  if (ChannelTypes.DM === type) {
    const recipients = type.recipients;
    const mapped = recipients.map(mergeGuildAvatar.getUser);
    const first = callback(mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish), 1)[0];
    let avatarSource = null;
    if (null != first) {
      avatarSource = first.getAvatarSource(undefined);
    }
    return avatarSource;
  } else if (tmp.GROUP_DM === type) {
    let obj = importDefault(1416);
    obj = { id: null, icon: null, applicationId: null, size: 128 };
    ({ id: obj2[0], icon: obj2[1] } = type);
    obj[2] = type.getApplicationId();
    return obj.getChannelIconSource(obj);
  }
};