// === Module 15687: LinkedLobbyFormSection ===

// Module 15687 (LinkedLobbyFormSection)
import "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ChannelSettingsSections } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function LinkedLobbyFormSection(channel) {
  channel = channel.channel;
  let importDefault;
  let obj = channel(1480);
  importDefault = obj.useNavigation();
  let obj1 = channel(5525);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(application_id);
  let tmp5 = null;
  if (null != getOrFetchApplication) {
    obj = { title: null, hasIcons: true, children: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.oAvIAg);
    obj = { label: null, icon: null, arrow: true, onPress: null };
    obj[0] = getOrFetchApplication.name;
    obj1 = { source: null, size: null };
    ({ id: obj7[0], icon: obj7[1] } = getOrFetchApplication);
    obj1[0] = importDefault(1416).getApplicationIconSource({ id: null, icon: null });
    obj1[1] = tmp(1297).AvatarSizes.REFRESH_MEDIUM_32;
    obj[1] = callback(tmp(1297).Avatar, obj1);
    obj[3] = function onPress() {

    };
    obj[2] = callback(tmp(5224).TableRow, obj);
    tmp5 = callback(tmp(5558).TableRowGroup, obj);
    const obj2 = { id: null, icon: null };
    const obj6 = importDefault(1416);
  }
  return tmp5;
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { screenContainer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, paddingTop: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default function ConnectedChannelSettingsIntegrationsOverview(arg0) {
  let canManageWebhooks;
  let canUnlinkLobby;
  let require;
  ({ channelId: require, canManageWebhooks, canUnlinkLobby } = arg0);
  let importDefault;
  let obj = require(1480) /* useNavigation */;
  importDefault = obj.useNavigation();
  let obj1 = require(589) /* initialize */;
  const items = [ensureGuildLoaded];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_3.getChannel(closure_0));
  let tmp6Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp4.screenContainer;
    obj = { style: null, spacing: null, children: null };
    obj1 = { paddingHorizontal: null };
    obj1[0] = importDefault(712).space.PX_12;
    obj[0] = obj1;
    obj[1] = importDefault(712).space.PX_24;
    if (canManageWebhooks) {
      const obj2 = { hasIcons: true, children: null };
      const obj3 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl = tmp(1236).intl;
      obj3[0] = intl.string(tmp(1236).t.jp25Id);
      const intl2 = tmp(1236).intl;
      obj3[1] = intl2.string(tmp(1236).t.mKIOkI);
      obj3[2] = tmp6(tmp(15583).WebhookIcon, {});
      obj3[4] = function onPress() {
        return arr.push(outer1_4.WEBHOOKS);
      };
      const items1 = [tmp6(tmp(5224).TableRow, obj3), ];
      const obj4 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl3 = tmp(1236).intl;
      obj4[0] = intl3.string(tmp(1236).t.OrV60r);
      const intl4 = tmp(1236).intl;
      obj4[1] = intl4.string(tmp(1236).t.rQREJl);
      obj4[2] = tmp6(tmp(15688).ChannelsFollowedIcon, {});
      obj4[4] = function onPress() {
        return arr.push(outer1_4.CHANNELS_FOLLOWED);
      };
      items1[1] = tmp6(tmp(5224).TableRow, obj4);
      obj2[1] = items1;
      canManageWebhooks = tmp7(tmp(5558).TableRowGroup, obj2);
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
    obj[1] = closure_6(tmp(4602).Stack, obj);
    tmp6Result = tmp6(tmp(7639).Form, obj);
  }
  return tmp6Result;
};