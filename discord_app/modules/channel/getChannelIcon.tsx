// === Module 13030: getChannelIcon ===

// Module 13030 (getChannelIcon)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1371 */;

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