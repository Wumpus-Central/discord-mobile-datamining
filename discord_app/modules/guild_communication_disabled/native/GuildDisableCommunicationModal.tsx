// === Module 11992: GuildDisableCommunicationModal ===

// Module 11992 (GuildDisableCommunicationModal)
import GuildDisableCommunicationDefault from "GuildDisableCommunication" /* 11993 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunicationModal.tsx");

export default function GuildDisableCommunicationModal(onBeforeGoBack) {
  const guildId = onBeforeGoBack.guildId;
  const user = onBeforeGoBack.user;
  let onGoBack;
  onGoBack = user(onGoBack[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "disableCommunication", title: null, render: null };
  const intl = guildId(onGoBack[4]).intl;
  const obj2 = { user: null };
  const tmp = user(onGoBack[3]);
  obj2.user = user(onGoBack[5]).getName(guildId, null, user);
  obj.title = intl.formatToPlainString(guildId(onGoBack[4]).t.FN7NIS, obj2);
  obj.render = function render() {
    return jsx(GuildDisableCommunicationDefault, { user, guildId, onClose: onGoBack });
  };
  return <tmp screenKey="disableCommunication" title={null} render={null} />;
};