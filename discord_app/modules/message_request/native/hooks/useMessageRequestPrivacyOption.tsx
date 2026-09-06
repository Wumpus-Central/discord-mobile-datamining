// discord_app/modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx
import UserSettings from "../../../user_settings/UserSettings.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import useIsStricterMessageRequestsDefault from "../../hooks/useIsStricterMessageRequests.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function MessageRequestRestrictedGuildPrivacyOption(guild) {
  guild = guild.guild;
  const id = guild.id;
  let MessageRequestRestrictedGuildIds = id(1935).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = id(1935).RestrictedGuildIds;
  const setting1 = RestrictedGuildIds.useSetting();
  const hasItem1 = setting1.includes(guild.id);
  const items = [id];
  const callback = noop.useCallback((arg0) => {
    const sanitizedMessageRequestRestrictedGuilds = UserSettingsUtils.getSanitizedMessageRequestRestrictedGuilds();
    if (arg0) {
      sanitizedMessageRequestRestrictedGuilds.delete(id);
    } else {
      sanitizedMessageRequestRestrictedGuilds.add(id);
    }
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
  }, items);
  const obj = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
  const intl = id(1114).intl;
  obj.label = intl.string(id(1114).t["7UgSGP"]);
  const intl2 = id(1114).intl;
  obj.subLabel = intl2.string(id(1114).t.INRaYb);
  let tmp5 = !hasItem1;
  if (!hasItem1) {
    tmp5 = !hasItem;
  }
  obj.value = tmp5;
  obj.onValueChange = callback;
  obj.disabled = hasItem1;
  return jsx(id(7200).ActionSheetSwitchRow, {
    label: null,
    subLabel: null,
    value: null,
    onValueChange: null,
    disabled: null,
  });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx");

export const useMessageRequestPrivacyOption = function useMessageRequestPrivacyOption(guild) {
  let tmp = null;
  if (!useIsStricterMessageRequestsDefault()) {
    const obj = { guild: guild.guild };
    tmp = <MessageRequestRestrictedGuildPrivacyOption guild={arg0.guild} />;
  }
  return tmp;
};
