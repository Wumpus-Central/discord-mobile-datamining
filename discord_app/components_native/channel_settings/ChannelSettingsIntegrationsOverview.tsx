// === Module 16653: LinkedLobbyFormSection ===

// Module 16653 (LinkedLobbyFormSection)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import getAvatarURLDefault from "getAvatarURL" /* 1430 */;
import useNavigation from "useNavigation" /* 1498 */;
import { GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES as closure_3 } from "createChannelRecord" /* 1390 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import { ChannelSettingsSections } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function LinkedLobbyFormSection(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let obj = channel(1498);
  importDefault = obj.useNavigation();
  obj1 = channel(5967);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(application_id);
  let tmp5 = null;
  if (null != getOrFetchApplication) {
    obj = { title: null, hasIcons: true, children: null };
    const intl = tmp(1233).intl;
    obj[0] = intl.string(tmp(1233).t.oAvIAg);
    obj = { label: null, icon: null, arrow: true, onPress: null };
    obj[0] = getOrFetchApplication.name;
    obj1 = { source: null, size: null };
    ({ id: obj7[0], icon: obj7[1] } = getOrFetchApplication);
    obj1[0] = getAvatarURLDefault.getApplicationIconSource({ id: null, icon: null });
    obj1[1] = tmp(1296).AvatarSizes.REFRESH_MEDIUM_32;
    obj[1] = callback(tmp(1296).Avatar, obj1);
    obj[3] = function onPress() {

    };
    obj[2] = callback(tmp(5607).TableRow, obj);
    tmp5 = callback(tmp(6000).TableRowGroup, obj);
    const obj2 = { id: null, icon: null };
    const obj6 = getAvatarURLDefault;
  }
  return tmp5;
}
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { screenContainer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default function ConnectedChannelSettingsIntegrationsOverview(arg0) {
  ({ channelId: require, canManageWebhooks, canUnlinkLobby } = arg0);
  importDefault = undefined;
  let obj = useNavigation;
  importDefault = obj.useNavigation();
  obj1 = initialize;
  const items = [closure_4];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_4.getChannel(closure_0));
  let tmp6Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp4.screenContainer;
    obj = { style: null, spacing: null, children: null };
    obj1 = { paddingHorizontal: null };
    obj1[0] = ThemesDefault.space.PX_12;
    obj[0] = obj1;
    obj[1] = ThemesDefault.space.PX_24;
    if (canManageWebhooks) {
      const obj2 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl = tmp(1233).intl;
      obj2[0] = intl.string(tmp(1233).t.jp25Id);
      const intl2 = tmp(1233).intl;
      obj2[1] = intl2.string(tmp(1233).t.mKIOkI);
      obj2[2] = tmp6(tmp(16539).WebhookIcon, {});
      obj2[4] = function onPress() {
        return arr.push(closure_1_5.WEBHOOKS);
      };
      const items1 = [tmp6(tmp(5607).TableRow, obj2), ];
      let hasItem = set.has(stateFromStores.type);
      if (hasItem) {
        const obj3 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
        const intl3 = tmp(1233).intl;
        obj3[0] = intl3.string(tmp(1233).t.OrV60r);
        const intl4 = tmp(1233).intl;
        obj3[1] = intl4.string(tmp(1233).t.rQREJl);
        obj3[2] = tmp6(tmp(16654).ChannelsFollowedIcon, {});
        obj3[4] = function onPress() {
          return arr.push(closure_1_5.CHANNELS_FOLLOWED);
        };
        hasItem = tmp6(tmp(5607).TableRow, obj3);
      }
      const obj4 = { hasIcons: true, children: null };
      items1[1] = hasItem;
      obj4[1] = items1;
      canManageWebhooks = tmp7(tmp(6000).TableRowGroup, obj4);
    }
    const items2 = [canManageWebhooks, ];
    if (canUnlinkLobby) {
      canUnlinkLobby = null != stateFromStores.linkedLobby;
    }
    if (canUnlinkLobby) {
      const obj5 = { channel: null };
      obj5[0] = stateFromStores;
      canUnlinkLobby = tmp6(LinkedLobbyFormSection, obj5);
    }
    items2[1] = canUnlinkLobby;
    obj[2] = items2;
    obj[1] = closure_7(tmp(4926).Stack, obj);
    tmp6Result = tmp6(tmp(8372).Form, obj);
  }
  return tmp6Result;
};