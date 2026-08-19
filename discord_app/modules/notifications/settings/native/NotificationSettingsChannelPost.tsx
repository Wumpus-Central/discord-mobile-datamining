// discord_app/modules/notifications/settings/native/NotificationSettingsChannelPost.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import _modDef6798 from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import updateUserGuildSettingsInternal from "../../../../stores/UserGuildSettingsStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannelPost.tsx");

export const NotificationSettingsChannelPost = function NotificationSettingsChannelPost(channel) {
  const _require = channel;
  ({ guild_id: importDefault, id: dependencyMap } = channel.channel);
  let obj = initialize;
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ muted: closure_1_4.isChannelMuted(closure_1, closure_2), guildMuted: closure_1_4.isMuted(closure_1), newForumThreadsCreated: closure_1_4.getNewForumThreadsCreated(channel.channel) }));
  ({ muted, newForumThreadsCreated } = stateFromStoresObject);
  obj = { title: null, hasIcons: false, children: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx").t.bK11jO);
  obj1 = { label: null, checked: null, disabled: null, onPress: null };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj1[0] = intl2.string(require("../../../../intl/index.native.tsx").t.Rkgjph);
  obj1[1] = newForumThreadsCreated;
  if (!muted) {
    muted = stateFromStoresObject.guildMuted;
  }
  obj1[2] = muted;
  obj1[3] = function onPress() {
    const result = _modDef6798.setForumThreadsCreated(channel.channel, !newForumThreadsCreated);
  };
  obj[2] = jsx(require("../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx").TableCheckboxRow, { label: null, checked: null, disabled: null, onPress: null });
  obj[1] = jsx(require("../../../../design/components/TableRow/native/TableRowGroup.native.tsx").TableRowGroup, { title: null, hasIcons: false, children: null });
  return <newForumThreadsCreated title={null} hasIcons={false}>{null}</newForumThreadsCreated>;
};