// === Module 18139: GuildSettingsModalLobbiesLinked ===

// Module 18139 (GuildSettingsModalLobbiesLinked)
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4474 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

const require = fn;
function SyncingToGamesItem(channels) {
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  dependencyMap = channels(1484).useNavigation();
  let obj = channels(1484);
  const tmp = channels;
  const getOrFetchApplication = channels(7501).useGetOrFetchApplication(channels.applicationId);
  let tmp5Result = null;
  if (0 !== channels.length) {
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    let obj3 = {
      title: name,
      hasIcons: true,
      children: channels.map((id) => {
          const channel = id;
          let obj = { label: channels(4982).computeChannelName(id, UserStore, RelationshipStore), icon: null, arrow: true, onPress: null };
          const obj3 = { IconComponent: null };
          const obj2 = channels(4982);
          obj3.IconComponent = channels(5327).getChannelIconComponent(id);
          obj.icon = closure_1_6(channels(5910).TableRow.Icon, obj3);
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
          return closure_1_6(channels(5910).TableRow, obj, id.id);
        })
    };
    tmp5Result = closure_6(tmp(5992).TableRowGroup, obj3);
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
  const token = require("useToken").useToken(keys(576).modules.mobile.TABLE_ROW_PADDING);
  const obj = require("useToken");
  const channelsAllowedToUnlink = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink(guildId);
  const obj2 = require("useChannelsAllowedToUnlink");
  const groupByResult = keys(12).groupBy(channelsAllowedToUnlink, (linkedLobby) => {
    linkedLobby = linkedLobby.linkedLobby;
    let application_id;
    if (linkedLobby != null) {
      application_id = linkedLobby.application_id;
    }
    return application_id;
  });
  _require = groupByResult;
  keys = Object.keys(groupByResult);
  const obj4 = { children: null };
  const obj5 = { contentContainerStyle: null, children: null };
  const obj3 = keys(12);
  const items = [{ paddingTop: keys(576).space.PX_16 }, contentContainerStyle];
  obj5.contentContainerStyle = items;
  const obj6 = { paddingTop: keys(576).space.PX_16 };
  obj5.children = closure_6(require("Stack/Stack").Stack, { style: { paddingHorizontal: token }, spacing: keys(576).space.PX_24, children: keys.map((applicationId) => timestampProducer(SyncingToGamesItem, { applicationId, channels: _undefined[applicationId], isOnlySection: 1 === keys.length }, applicationId)) });
  const items1 = [closure_6(require("Form").Form, obj5), closure_6(require("NavScrim").NavScrim, {})];
  obj4.children = items1;
  return closure_8(closure_7, obj4);
};