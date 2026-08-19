// discord_app/modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx
import setDefault from "../../hooks/useIsStricterMessageRequests.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
function MessageRequestRestrictedGuildPrivacyOption(guild) {
  guild = guild.guild;
  const id = guild.id;
  let MessageRequestRestrictedGuildIds = id(4066).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = id(4066).RestrictedGuildIds;
  const setting1 = RestrictedGuildIds.useSetting();
  const hasItem1 = setting1.includes(guild.id);
  const items = [id];
  const callback = React.useCallback((arg0) => {
    const sanitizedMessageRequestRestrictedGuilds = id(dependencyMap[3]).getSanitizedMessageRequestRestrictedGuilds();
    if (arg0) {
      sanitizedMessageRequestRestrictedGuilds.delete(id);
    } else {
      sanitizedMessageRequestRestrictedGuilds.add(id);
    }
    const MessageRequestRestrictedGuildIds = id(dependencyMap[2]).MessageRequestRestrictedGuildIds;
    MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
    const obj = id(dependencyMap[3]);
  }, items);
  let obj = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
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
  return jsx(id(7177).ActionSheetSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null, disabled: null });
}
const result = require("obj132").fileFinishedImporting("modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx");

export const useMessageRequestPrivacyOption = function useMessageRequestPrivacyOption(guild) {
  let tmp = null;
  if (!setDefault()) {
    const obj = { guild: null };
    obj[0] = guild.guild;
    tmp = <MessageRequestRestrictedGuildPrivacyOption guild={null} />;
  }
  return tmp;
};