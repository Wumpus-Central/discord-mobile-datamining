// discord_app/modules/channel/getChannelIcon.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
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
    const obj = { id: null, icon: null, applicationId: null, size: null };
    ({ id: obj2.id, icon: obj2.icon } = type);
    obj.applicationId = type.getApplicationId();
    obj.size = num;
    return obj.getChannelIconURL(obj);
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
    const obj = { id: null, icon: null, applicationId: null, size: 128 };
    ({ id: obj2.id, icon: obj2.icon } = type);
    obj.applicationId = type.getApplicationId();
    return obj.getChannelIconSource(obj);
  }
};
