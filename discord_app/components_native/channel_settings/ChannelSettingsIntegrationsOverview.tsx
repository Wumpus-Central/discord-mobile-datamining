// discord_app/components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import useNavigation from "../../design/components/Navigator/native/useNavigation.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
function LinkedLobbyFormSection(channel) {
  channel = channel.channel;
  let obj = channel(1483);
  importDefault = obj.useNavigation();
  let obj1 = channel(7168);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(application_id);
  let tmp5 = null;
  if (null != getOrFetchApplication) {
    obj = { title: null, hasIcons: true, children: null };
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t.oAvIAg);
    obj = { label: getOrFetchApplication.name, icon: null, arrow: true, onPress: null };
    obj1 = { source: null, size: null };
    ({ id: obj7.id, icon: obj7.icon } = getOrFetchApplication);
    obj1.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null });
    obj1.size = tmp(1178).AvatarSizes.REFRESH_MEDIUM_32;
    obj.icon = closure_6(tmp(1178).Avatar, obj1);
    obj.onPress = function onPress() {
      closure_1.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, { channel, numScreensToPop: 1 });
    };
    obj.children = closure_6(tmp(5605).TableRow, obj);
    tmp5 = closure_6(tmp(5687).TableRowGroup, obj);
    const obj2 = { id: null, icon: null };
  }
  return tmp5;
}
fn(1961).GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
const ChannelSettingsSections = fn(1074).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { screenContainer: null };
createStyles = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingTop: nativeDefault.space.PX_16,
};
createStyles.screenContainer = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default function ConnectedChannelSettingsIntegrationsOverview(arg0) {
  ({ channelId: require, canManageWebhooks, canUnlinkLobby } = arg0);
  let obj = useNavigation;
  importDefault = obj.useNavigation();
  let obj1 = initialize;
  const items = [ChannelStore];
  const stateFromStores = obj1.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let tmp6Result = null;
  if (null != stateFromStores) {
    obj = { style: tmp4.screenContainer, children: null };
    obj = { style: null, spacing: null, children: null };
    obj1 = { paddingHorizontal: nativeDefault.space.PX_12 };
    obj.style = obj1;
    obj.spacing = nativeDefault.space.PX_24;
    if (canManageWebhooks) {
      const obj2 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl = tmp(1114).intl;
      obj2.label = intl.string(tmp(1114).t.jp25Id);
      const intl2 = tmp(1114).intl;
      obj2.subLabel = intl2.string(tmp(1114).t.mKIOkI);
      obj2.icon = tmp6(tmp(16726).WebhookIcon, {});
      obj2.onPress = function onPress() {
        return closure_1.push(ChannelSettingsSections.WEBHOOKS);
      };
      const items1 = [tmp6(tmp(5605).TableRow, obj2)];
      let hasItem = set.has(stateFromStores.type);
      if (hasItem) {
        const obj3 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
        const intl3 = tmp(1114).intl;
        obj3.label = intl3.string(tmp(1114).t.OrV60r);
        const intl4 = tmp(1114).intl;
        obj3.subLabel = intl4.string(tmp(1114).t.rQREJl);
        obj3.icon = tmp6(tmp(16839).ChannelsFollowedIcon, {});
        obj3.onPress = function onPress() {
          return closure_1.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
        };
        hasItem = tmp6(tmp(5605).TableRow, obj3);
      }
      const obj4 = { hasIcons: true, children: null };
      items1[1] = hasItem;
      obj4.children = items1;
      canManageWebhooks = tmp7(tmp(5687).TableRowGroup, obj4);
    }
    const items2 = [canManageWebhooks];
    if (canUnlinkLobby) {
      canUnlinkLobby = null != stateFromStores.linkedLobby;
    }
    if (canUnlinkLobby) {
      const obj5 = { channel: stateFromStores };
      canUnlinkLobby = tmp6(LinkedLobbyFormSection, obj5);
    }
    items2[1] = canUnlinkLobby;
    obj.children = items2;
    obj.children = closure_7(tmp(4973).Stack, obj);
    tmp6Result = tmp6(tmp(8593).Form, obj);
  }
  return tmp6Result;
}
