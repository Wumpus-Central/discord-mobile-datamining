// discord_app/modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import markAllUserIdListsStale from "../../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { GuildSettingsSections } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { getChannelsAllowedToUnlink } from "../../../lobbies/hooks/useChannelsAllowedToUnlink.tsx";

const require = fn;
function SyncingToGamesItem(channels) {
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  let obj = channels(1500);
  dependencyMap = obj.useNavigation();
  const getOrFetchApplication = channels(7145).useGetOrFetchApplication(channels.applicationId);
  let tmp5Result = null;
  if (0 !== channels.length) {
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj = { title: null, hasIcons: true, children: null };
    obj[0] = name;
    obj[2] = channels.map((item, index) => {
      closure_0 = item;
      { label: channels(4984).computeChannelName(item, closure_1_4, closure_1_3), icon: null, arrow: true, onPress: null };
      let obj = { IconComponent: null };
      const obj2 = channels(4984);
      obj[0] = channels(6832).getChannelIconComponent(item);
      obj[1] = closure_1_6(channels(6291).TableRow.Icon, obj);
      obj[3] = function onPress() {
        const obj = { channel: item, numScreensToPop: null };
        let num = 1;
        if (isOnlySection) {
          num = 1;
          if (1 === item.length) {
            num = 2;
          }
        }
        obj[1] = num;
        closure_1_2.push(GuildSettingsSections.EDIT_LINKED_LOBBY, obj);
      };
      return closure_1_6(channels(6291).TableRow, obj, item.id);
    });
    tmp5Result = callback(channels(6286).TableRowGroup, obj);
  }
  return tmp5Result;
}
noopAll;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx");

export default function GuildSettingsModalLobbiesLinked(arg0) {
  let _require;
  let keys;
  ({ contentContainerStyle, guildId } = arg0);
  let obj = map;
  const token = obj.useToken(keys(712).modules.mobile.TABLE_ROW_PADDING);
  obj1 = getChannelsAllowedToUnlink;
  const channelsAllowedToUnlink = obj1.useChannelsAllowedToUnlink(guildId);
  let obj2 = keys(12);
  const groupByResult = obj2.groupBy(channelsAllowedToUnlink, (linkedLobby) => {
    linkedLobby = linkedLobby.linkedLobby;
    let application_id;
    if (linkedLobby != null) {
      application_id = linkedLobby.application_id;
    }
    return application_id;
  });
  _require = groupByResult;
  keys = Object.keys(groupByResult);
  obj = { contentContainerStyle: null, children: null };
  obj1 = { paddingTop: keys(712).space.PX_16 };
  const items = [obj1, contentContainerStyle];
  obj[0] = items;
  obj2 = { style: { paddingHorizontal: token }, spacing: keys(712).space.PX_24, children: keys.map((item, index) => closure_1_6(SyncingToGamesItem, { applicationId: item, channels: _undefined[item], isOnlySection: 1 === keys.length }, item)) };
  obj[1] = callback(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj2);
  const items1 = [callback(require("../../../../design/void/Form/native/index.tsx").Form, obj), callback(require("../../../../design/components/Navigator/native/NavScrim.android.tsx").NavScrim, {})];
  obj[0] = items1;
  return callback2(closure_7, obj);
};