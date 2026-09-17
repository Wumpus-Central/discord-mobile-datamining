// === Module 10315: NotificationSettingsChannelPost ===

// Module 10315 (NotificationSettingsChannelPost)
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7233 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4821 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannelPost.tsx");

export const NotificationSettingsChannelPost = function NotificationSettingsChannelPost(channel) {
  _require = channel;
  ({ guild_id: importDefault, id: dependencyMap } = channel.channel);
  const items = [UserGuildSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ muted: UserGuildSettingsStore.isChannelMuted(importDefault, dependencyMap), guildMuted: UserGuildSettingsStore.isMuted(importDefault), newForumThreadsCreated: UserGuildSettingsStore.getNewForumThreadsCreated(channel.channel) }));
  ({ muted, newForumThreadsCreated } = stateFromStoresObject);
  const obj2 = { style: channel.style, children: null };
  const obj3 = { title: null, hasIcons: false, children: null };
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t.bK11jO);
  const obj4 = { label: null, checked: null, disabled: null, onPress: null };
  const intl2 = require("util").intl;
  obj4.label = intl2.string(require("util").t.Rkgjph);
  obj4.checked = newForumThreadsCreated;
  if (!muted) {
    muted = stateFromStoresObject.guildMuted;
  }
  obj4.disabled = muted;
  obj4.onPress = function onPress() {
    const result = NotificationSettingsModalActionCreatorsDefault.setForumThreadsCreated(channel.channel, !newForumThreadsCreated);
  };
  obj3.children = jsx(require("TableCheckboxRow").TableCheckboxRow, { label: null, checked: null, disabled: null, onPress: null });
  obj2.children = jsx(require("TableRowGroup").TableRowGroup, { title: null, hasIcons: false, children: null });
  return <newForumThreadsCreated style={channel.style}>{null}</newForumThreadsCreated>;
};