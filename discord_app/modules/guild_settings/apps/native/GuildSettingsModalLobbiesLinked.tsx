// === Module 17601: GuildSettingsModalLobbiesLinked ===

// Module 17601 (GuildSettingsModalLobbiesLinked)
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
function SyncingToGamesItem(channels) {
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  let obj = channels(1483);
  dependencyMap = obj.useNavigation();
  const getOrFetchApplication = channels(7168).useGetOrFetchApplication(channels.applicationId);
  let tmp5Result = null;
  if (0 !== channels.length) {
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj = {
      title: name,
      hasIcons: true,
      children: channels.map((id) => {
          const channel = id;
          let obj = { label: channels(4713).computeChannelName(id, UserStore, RelationshipStore), icon: null, arrow: true, onPress: null };
          obj = { IconComponent: null };
          const obj2 = channels(4713);
          obj.IconComponent = channels(5028).getChannelIconComponent(id);
          obj.icon = closure_1_6(channels(5605).TableRow.Icon, obj);
          obj.onPress = function onPress() {
            const obj = { channel, numScreensToPop: null };
            let num = 1;
            if (isOnlySection) {
              num = 1;
              if (1 === channels.length) {
                num = 2;
              }
            }
            obj.numScreensToPop = num;
            closure_2.push(GuildSettingsSections.EDIT_LINKED_LOBBY, obj);
          };
          return closure_1_6(channels(5605).TableRow, obj, id.id);
        })
    };
    tmp5Result = closure_6(channels(5687).TableRowGroup, obj);
  }
  return tmp5Result;
}
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx");

export default function GuildSettingsModalLobbiesLinked(arg0) {
  _require = undefined;
  let keys;
  ({ contentContainerStyle, guildId } = arg0);
  let obj = require("useToken");
  const token = obj.useToken(keys(576).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = require("useChannelsAllowedToUnlink");
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
  obj.contentContainerStyle = items;
  obj2 = { style: { paddingHorizontal: token }, spacing: keys(576).space.PX_24, children: keys.map((applicationId) => timestampProducer(SyncingToGamesItem, { applicationId, channels: _undefined[applicationId], isOnlySection: 1 === keys.length }, applicationId)) };
  obj.children = closure_6(require("Stack/Stack").Stack, obj2);
  const items1 = [closure_6(require("Form").Form, obj), closure_6(require("NavScrim").NavScrim, {})];
  obj.children = items1;
  return closure_8(closure_7, obj);
};