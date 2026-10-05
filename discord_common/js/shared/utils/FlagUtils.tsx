// === Module 1390: FlagUtils ===

// Module 1390 (FlagUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/FlagUtils.tsx");

export const hasFlag = function hasFlag(flags, FIND_BY_EMAIL) {
  return (flags & FIND_BY_EMAIL) === FIND_BY_EMAIL;
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
  let tmp2;
  const tmp = setting;
  if (tmp) {
    tmp2 = channelIdFlags | OPT_IN_ENABLED;
  } else {
    tmp2 = channelIdFlags & ~OPT_IN_ENABLED;
  }
  return tmp2;
};
export const toggleFlag = function toggleFlag(arg0, arg1) {
  let tmp;
  if ((arg0 & arg1) === arg1) {
    tmp = arg0 & ~arg1;
  } else {
    tmp = arg0 | arg1;
  }
  return tmp;
};