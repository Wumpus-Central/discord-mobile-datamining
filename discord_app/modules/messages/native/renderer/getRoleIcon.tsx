// discord_app/modules/messages/native/renderer/getRoleIcon.tsx
import intl2 from "../../../../intl/index.native.tsx";
import useRoleIconProps from "../../../roles/useRoleIconProps.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/renderer/getRoleIcon.tsx");

export const getRoleIcon = function getRoleIcon(size) {
  let guildId;
  let intl;
  let roleId;
  let surrogates;
  size = size.size;
  ({ guildId, roleId } = size);
  const getRoleIconProps = useRoleIconProps.getRoleIconProps;
  useRoleIconProps;
  const obj = useRoleIconProps;
  const roleIconProps = getRoleIconProps(obj.computeRoleIconRole({ guildId, roleId }), size);
  if (null != roleIconProps) {
    ({ src: obj2.source, name: obj2.name } = roleIconProps);
    const unicodeEmoji = roleIconProps.unicodeEmoji;
    const obj3 = {
      source: null,
      name: null,
      size,
      unicodeEmoji: surrogates,
      alt: intl.formatToPlainString(intl2.t["9+YWrE"], obj5),
    };
    surrogates = undefined;
    if (unicodeEmoji != null) {
      surrogates = unicodeEmoji.surrogates;
    }
    intl = intl2.intl;
    return obj3;
  }
};
