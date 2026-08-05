// discord_app/modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function MessageRequestRestrictedGuildPrivacyOption(guild) {
  guild = guild.guild;
  let id;
  id = guild.id;
  let MessageRequestRestrictedGuildIds = id(3958).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = id(3958).RestrictedGuildIds;
  const setting1 = RestrictedGuildIds.useSetting();
  const hasItem1 = setting1.includes(guild.id);
  const items = [id];
  const callback = React.useCallback((arg0) => {
    const sanitizedMessageRequestRestrictedGuilds = id(outer1_2[3]).getSanitizedMessageRequestRestrictedGuilds();
    if (arg0) {
      sanitizedMessageRequestRestrictedGuilds.delete(id);
    } else {
      sanitizedMessageRequestRestrictedGuilds.add(id);
    }
    const MessageRequestRestrictedGuildIds = id(outer1_2[2]).MessageRequestRestrictedGuildIds;
    MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
  }, items);
  const obj = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
  const intl = id(1236).intl;
  obj[0] = intl.string(id(1236).t["7UgSGP"]);
  const intl2 = id(1236).intl;
  obj[1] = intl2.string(id(1236).t.INRaYb);
  let tmp5 = !hasItem1;
  if (!hasItem1) {
    tmp5 = !hasItem;
  }
  obj[2] = tmp5;
  obj[3] = callback;
  obj[4] = hasItem1;
  return jsx(id(5648).ActionSheetSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null, disabled: null });
}
const result = require("explicitContentFromProto").fileFinishedImporting("modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx");

export const useMessageRequestPrivacyOption = function useMessageRequestPrivacyOption(guild) {
  let tmp = null;
  if (!require("../../hooks/useIsStricterMessageRequests.tsx")()) {
    const obj = { guild: null };
    obj[0] = guild.guild;
    tmp = <MessageRequestRestrictedGuildPrivacyOption guild={null} />;
  }
  return tmp;
};