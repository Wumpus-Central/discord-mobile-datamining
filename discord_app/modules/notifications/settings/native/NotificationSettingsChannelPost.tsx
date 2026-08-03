// === Module 10485: NotificationSettingsChannelPost ===

// Module 10485 (NotificationSettingsChannelPost)
import "noop";
import { View } from "get ActivityIndicator";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannelPost.tsx");

export const NotificationSettingsChannelPost = function NotificationSettingsChannelPost(channel) {
  let dependencyMap;
  let importDefault;
  let muted;
  let newForumThreadsCreated;
  const _require = channel;
  ({ guild_id: importDefault, id: dependencyMap } = channel.channel);
  let obj = _require(589);
  const items = [updateUserGuildSettingsInternal];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ muted: outer1_4.isChannelMuted(closure_1, closure_2), guildMuted: outer1_4.isMuted(closure_1), newForumThreadsCreated: outer1_4.getNewForumThreadsCreated(channel.channel) }));
  ({ muted, newForumThreadsCreated } = stateFromStoresObject);
  obj = { style: channel.style, children: null };
  obj = { title: null, hasIcons: false, children: null };
  const intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t.bK11jO);
  const obj1 = { label: null, checked: null, disabled: null, onPress: null };
  const intl2 = _require(1236).intl;
  obj1[0] = intl2.string(_require(1236).t.Rkgjph);
  obj1[1] = newForumThreadsCreated;
  if (!muted) {
    muted = stateFromStoresObject.guildMuted;
  }
  obj1[2] = muted;
  obj1[3] = function onPress() {
    const result = outer1_1(outer1_2[8]).setForumThreadsCreated(channel.channel, !newForumThreadsCreated);
  };
  obj[2] = jsx(_require(9272).TableCheckboxRow, { label: null, checked: null, disabled: null, onPress: null });
  obj[1] = jsx(_require(5620).TableRowGroup, { title: null, hasIcons: false, children: null });
  return <newForumThreadsCreated title={null} hasIcons={false}>{null}</newForumThreadsCreated>;
};