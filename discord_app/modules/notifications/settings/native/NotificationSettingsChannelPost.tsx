// === Module 10169: NotificationSettingsChannelPost ===

// Module 10169 (NotificationSettingsChannelPost)
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannelPost.tsx");

export const NotificationSettingsChannelPost = function NotificationSettingsChannelPost(channel) {
  _require = channel;
  ({ guild_id: importDefault, id: dependencyMap } = channel.channel);
  let obj = require("initialize");
  const items = [UserGuildSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ muted: UserGuildSettingsStore.isChannelMuted(importDefault, dependencyMap), guildMuted: UserGuildSettingsStore.isMuted(importDefault), newForumThreadsCreated: UserGuildSettingsStore.getNewForumThreadsCreated(channel.channel) }));
  ({ muted, newForumThreadsCreated } = stateFromStoresObject);
  obj = { style: channel.style, children: null };
  obj = { title: null, hasIcons: false, children: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.bK11jO);
  const obj1 = { label: null, checked: null, disabled: null, onPress: null };
  const intl2 = require("util").intl;
  obj1.label = intl2.string(require("util").t.Rkgjph);
  obj1.checked = newForumThreadsCreated;
  if (!muted) {
    muted = stateFromStoresObject.guildMuted;
  }
  obj1.disabled = muted;
  obj1.onPress = function onPress() {
    const result = NotificationSettingsModalActionCreatorsDefault.setForumThreadsCreated(channel.channel, !newForumThreadsCreated);
  };
  obj.children = jsx(require("TableCheckboxRow").TableCheckboxRow, { label: null, checked: null, disabled: null, onPress: null });
  obj.children = jsx(require("TableRowGroup").TableRowGroup, { title: null, hasIcons: false, children: null });
  return <newForumThreadsCreated title={null} hasIcons={false}>{null}</newForumThreadsCreated>;
};