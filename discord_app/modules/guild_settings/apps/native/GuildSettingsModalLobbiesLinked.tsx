import { NavScrim } from "../../../../design/components/Navigator/native/NavScrim.android.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { Form } from "../../../../design/void/Form/native/index.tsx";
import { getChannelsAllowedToUnlink } from "../../../lobbies/hooks/useChannelsAllowedToUnlink.tsx";
// discord_app/modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx
import "noop";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { GuildSettingsSections } from "ME";
import jsxProd from "jsxProd";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function SyncingToGamesItem(channels) {
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  let dependencyMap;
  let obj = channels(1480);
  dependencyMap = obj.useNavigation();
  const getOrFetchApplication = channels(5616).useGetOrFetchApplication(channels.applicationId);
  let tmp5Result = null;
  if (0 !== channels.length) {
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj = { title: null, hasIcons: true, children: null };
    obj[0] = name;
    obj[2] = channels.map((id) => {
      let closure_0 = id;
      let obj = { label: null, icon: null, arrow: true, onPress: null };
      obj[0] = channels(4475).computeChannelName(id, outer1_4, outer1_3);
      obj = { IconComponent: null };
      const obj2 = channels(4475);
      obj[0] = channels(4745).getChannelIconComponent(id);
      obj[1] = outer1_6(channels(5315).TableRow.Icon, obj);
      obj[3] = function onPress() {
        const obj = { channel: length, numScreensToPop: null };
        let num = 1;
        if (outer1_1) {
          num = 1;
          if (1 === length.length) {
            num = 2;
          }
        }
        obj[1] = num;
        outer1_2.push(outer2_5.EDIT_LINKED_LOBBY, obj);
      };
      return outer1_6(channels(5315).TableRow, obj, id.id);
    });
    tmp5Result = closure_6(channels(5649).TableRowGroup, obj);
    const tmp5 = closure_6;
  }
  return tmp5Result;
}
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx");

export default function GuildSettingsModalLobbiesLinked(arg0) {
  let contentContainerStyle;
  let guildId;
  let _require;
  let keys;
  ({ contentContainerStyle, guildId } = arg0);
  let obj = _map;
  const token = obj.useToken(keys(712).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = _getChannelsAllowedToUnlink;
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
  obj = { children: null };
  obj = { contentContainerStyle: null, children: null };
  obj1 = { paddingTop: null };
  obj1[0] = keys(712).space.PX_16;
  const items = [obj1, contentContainerStyle];
  obj[0] = items;
  obj2 = { style: { paddingHorizontal: token }, spacing: null, children: null };
  obj2[1] = keys(712).space.PX_24;
  obj2[2] = keys.map((applicationId) => outer1_6(outer1_9, { applicationId, channels: _undefined[applicationId], isOnlySection: 1 === keys.length }, applicationId));
  obj[1] = callback(_Stack.Stack, obj2);
  const items1 = [callback(_Form.Form, obj), callback(_NavScrim.NavScrim, {})];
  obj[0] = items1;
  return callback2(closure_7, obj);
};