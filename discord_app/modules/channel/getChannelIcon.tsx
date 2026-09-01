// discord_app/modules/channel/getChannelIcon.tsx
import getAvatarURLDefault from "../../utils/AvatarUtils.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../stores/UserStore.tsx";
import { ChannelTypes } from "../../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/channel/getChannelIcon.tsx");

export const getChannelIconURL = function getChannelIconURL(type) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 32;
  }
  type = type.type;
  if (ChannelTypes.DM === type) {
    const recipients = type.recipients;
    const mapped = recipients.map(closure_4.getUser);
    const first = callback(mapped.filter(isDiscordFrontendDevelopment.isNotNullish), 1)[0];
    let avatarURL = null;
    if (null != first) {
      avatarURL = first.getAvatarURL(undefined, num, arg2);
    }
    return avatarURL;
  } else if (tmp.GROUP_DM === type) {
    let obj = getAvatarURLDefault;
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
    const mapped = recipients.map(closure_4.getUser);
    const first = callback(mapped.filter(isDiscordFrontendDevelopment.isNotNullish), 1)[0];
    let avatarSource = null;
    if (null != first) {
      avatarSource = first.getAvatarSource(undefined);
    }
    return avatarSource;
  } else if (tmp.GROUP_DM === type) {
    let obj = getAvatarURLDefault;
    obj = { id: null, icon: null, applicationId: null, size: 128 };
    ({ id: obj2[0], icon: obj2[1] } = type);
    obj[2] = type.getApplicationId();
    return obj.getChannelIconSource(obj);
  }
};
