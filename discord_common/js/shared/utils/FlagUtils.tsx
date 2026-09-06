// discord_common/js/shared/utils/FlagUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/FlagUtils.tsx");

export const hasFlag = function hasFlag(flags, IS_ANIMATED) {
  return (flags & IS_ANIMATED) === IS_ANIMATED;
};
export const hasAnyFlag = function hasAnyFlag(flags, arg1) {
  return flags & arg1;
};
export const addFlag = function addFlag(setting, SUPPRESS_NOTIFICATIONS) {
  return setting | SUPPRESS_NOTIFICATIONS;
};
export const removeFlag = function removeFlag(flags, OBFUSCATED) {
  return flags & ~OBFUSCATED;
};
export const removeFlags = function removeFlags(setting) {
  const substr = [...arguments].slice();
  return substr.reduce((acc, item) => acc & ~item, setting);
};
export const setFlag = function setFlag(channelIdFlags, OPT_IN_ENABLED, setting) {
  if (setting) {
    let tmp = channelIdFlags | OPT_IN_ENABLED;
  } else {
    tmp = channelIdFlags & ~OPT_IN_ENABLED;
  }
  return tmp;
};
export const toggleFlag = function toggleFlag(arg0, arg1) {
  if ((arg0 & arg1) === arg1) {
    let tmp = arg0 & ~arg1;
  } else {
    tmp = arg0 | arg1;
  }
  return tmp;
};
