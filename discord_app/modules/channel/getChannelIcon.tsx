// discord_app/modules/channel/getChannelIcon.tsx
import Constants from "../../Constants.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/channel/getChannelIcon.tsx");

export const getChannelIconURL = function getChannelIconURL(type) {
  let num = size2;
  if (size2 === undefined) {
    num = 32;
  }
  type = type.type;
  if (ChannelTypes.DM === type) {
    const recipients = type.recipients;
    const mapped = recipients.map(UserStore.getUser);
    const first = _slicedToArray(mapped.filter(GlobalUtils.isNotNullish), 1)[0];
    let avatarURL = null;
    if (null != first) {
      avatarURL = first.getAvatarURL(undefined, num, arg2);
    }
    return avatarURL;
  } else if (tmp.GROUP_DM === type) {
    const obj = { id: null, icon: null, applicationId: type.getApplicationId(), size: num };
    ({ id: obj.id, icon: obj.icon } = type);
    const getChannelIconURL = AvatarUtilsDefault.getChannelIconURL;
    AvatarUtilsDefault;
    return getChannelIconURL(obj);
  }
};
export const getChannelIconSource = function getChannelIconSource(type) {
  type = type.type;
  if (ChannelTypes.DM === type) {
    const recipients = type.recipients;
    const mapped = recipients.map(UserStore.getUser);
    const first = _slicedToArray(mapped.filter(GlobalUtils.isNotNullish), 1)[0];
    let avatarSource = null;
    if (null != first) {
      avatarSource = first.getAvatarSource(undefined);
    }
    return avatarSource;
  } else if (tmp.GROUP_DM === type) {
    const obj = { id: null, icon: null, applicationId: type.getApplicationId(), size: 128 };
    ({ id: obj.id, icon: obj.icon } = type);
    const getChannelIconSource = AvatarUtilsDefault.getChannelIconSource;
    AvatarUtilsDefault;
    return getChannelIconSource(obj);
  }
};
