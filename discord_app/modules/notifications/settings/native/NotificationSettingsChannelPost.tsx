// discord_app/modules/notifications/settings/native/NotificationSettingsChannelPost.tsx
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "updateUserGuildSettingsInternal" /* 5043 */;
import { jsx } from "jsxProd" /* 21 */;
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { TableCheckboxRow } from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import { TableRowGroupTitle } from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannelPost.tsx");

export const NotificationSettingsChannelPost = function NotificationSettingsChannelPost(channel) {
  const _require = channel;
  ({ guild_id: importDefault, id: dependencyMap } = channel.channel);
  let obj = _initialize;
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ muted: closure_1_4.isChannelMuted(closure_1, closure_2), guildMuted: closure_1_4.isMuted(closure_1), newForumThreadsCreated: closure_1_4.getNewForumThreadsCreated(channel.channel) }));
  ({ muted, newForumThreadsCreated } = stateFromStoresObject);
  obj = { style: channel.style, children: null };
  obj = { title: null, hasIcons: false, children: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.bK11jO);
  obj1 = { label: null, checked: null, disabled: null, onPress: null };
  const intl2 = _getSystemLocale.intl;
  obj1[0] = intl2.string(_getSystemLocale.t.Rkgjph);
  obj1[1] = newForumThreadsCreated;
  if (!muted) {
    muted = stateFromStoresObject.guildMuted;
  }
  obj1[2] = muted;
  obj1[3] = function onPress() {
    const result = closure_1_1(closure_1_2[8]).setForumThreadsCreated(channel.channel, !newForumThreadsCreated);
  };
  obj[2] = jsx(_TableCheckboxRow.TableCheckboxRow, { label: null, checked: null, disabled: null, onPress: null });
  obj[1] = jsx(_TableRowGroupTitle.TableRowGroup, { title: null, hasIcons: false, children: null });
  return <newForumThreadsCreated title={null} hasIcons={false}>{null}</newForumThreadsCreated>;
};