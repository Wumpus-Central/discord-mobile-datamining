// === Module 17601: SyncingToGamesItem ===

// Module 17601 (SyncingToGamesItem)
import noopAll from "noop" /* 19 */;
import closure_3 from "markAllUserIdListsStale" /* 4209 */;
import closure_4 from "mergeGuildAvatar" /* 1371 */;
import { GuildSettingsSections } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
function SyncingToGamesItem(channels) {
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  dependencyMap = undefined;
  let obj = channels(1483);
  dependencyMap = obj.useNavigation();
  const getOrFetchApplication = channels(7168).useGetOrFetchApplication(channels.applicationId);
  let tmp5Result = null;
  if (0 !== channels.length) {
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj = { title: null, hasIcons: true, children: null };
    obj[0] = name;
    obj[2] = channels.map((id) => {
      closure_0 = id;
      let obj = { label: channels(4713).computeChannelName(id, closure_1_4, closure_1_3), icon: null, arrow: true, onPress: null };
      obj = { IconComponent: null };
      const obj2 = channels(4713);
      obj[0] = channels(5028).getChannelIconComponent(id);
      obj[1] = closure_1_6(channels(5605).TableRow.Icon, obj);
      obj[3] = function onPress() {
        const obj = { channel: length, numScreensToPop: null };
        let num = 1;
        if (closure_1_1) {
          num = 1;
          if (1 === length.length) {
            num = 2;
          }
        }
        obj[1] = num;
        closure_1_2.push(closure_2_5.EDIT_LINKED_LOBBY, obj);
      };
      return closure_1_6(channels(5605).TableRow, obj, id.id);
    });
    tmp5Result = closure_6(channels(5687).TableRowGroup, obj);
    const tmp5 = closure_6;
  }
  return tmp5Result;
}
noopAll;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx");

export default function GuildSettingsModalLobbiesLinked(arg0) {
  let _require;
  let keys;
  ({ contentContainerStyle, guildId } = arg0);
  let obj = _require(4262);
  const token = obj.useToken(keys(576).modules.mobile.TABLE_ROW_PADDING);
  obj1 = _require(17524);
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
  obj1 = { paddingTop: keys(576).space.PX_16 };
  const items = [obj1, contentContainerStyle];
  obj[0] = items;
  obj2 = { style: { paddingHorizontal: token }, spacing: keys(576).space.PX_24, children: keys.map((applicationId) => closure_1_6(closure_1_9, { applicationId, channels: _undefined[applicationId], isOnlySection: 1 === keys.length }, applicationId)) };
  obj[1] = callback(_require(4973).Stack, obj2);
  const items1 = [callback(_require(8593).Form, obj), callback(_require(7040).NavScrim, {})];
  obj[0] = items1;
  return callback2(closure_7, obj);
};