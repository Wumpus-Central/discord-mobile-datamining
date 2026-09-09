// === Module 8034: getRoleIcon ===

// Module 8034 (getRoleIcon)
import util from "util" /* 1114 */;
import useRoleIconProps from "useRoleIconProps" /* 7200 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/getRoleIcon.tsx");

export const getRoleIcon = function getRoleIcon(size) {
  size = size.size;
  ({ guildId, roleId } = size);
  let obj = useRoleIconProps;
  const roleIconProps = obj.getRoleIconProps(useRoleIconProps.computeRoleIconRole({ guildId, roleId }), size);
  if (null != roleIconProps) {
    obj = { source: null, name: null, size: null, unicodeEmoji: null, alt: null };
    ({ src: obj3.source, name: obj3.name } = roleIconProps);
    obj.size = size;
    const unicodeEmoji = roleIconProps.unicodeEmoji;
    let surrogates;
    if (unicodeEmoji != null) {
      surrogates = unicodeEmoji.surrogates;
    }
    obj.unicodeEmoji = surrogates;
    const intl = util.intl;
    obj = { name: roleIconProps.name };
    obj.alt = intl.formatToPlainString(util.t["9+YWrE"], obj);
    return obj;
  }
};