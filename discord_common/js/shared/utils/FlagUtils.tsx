// discord_common/js/shared/utils/FlagUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("../discord_common/js/shared/utils/FlagUtils.tsx");

export const hasFlag = function hasFlag(arg0, arg1) {
  return (arg0 & arg1) === arg1;
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
export const removeFlags = function removeFlags(setting, UNREADS_ALL_MESSAGES, NO_RELATION) {
  const substr = [...arguments].slice();
  return substr.reduce((acc, item, index) => acc & ~item, setting);
};
export const setFlag = function setFlag(arg0, arg1, arg2) {
  if (arg2) {
    let tmp = arg0 | arg1;
  } else {
    tmp = arg0 & ~arg1;
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