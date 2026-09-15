// === Module 16991: ChannelSettingsIntegrationsOverview ===

// Module 16991 (ChannelSettingsIntegrationsOverview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import useNavigation from "useNavigation" /* 1484 */;
import Stack_Stack from "Stack/Stack" /* 5057 */;
import TableRow from "TableRow" /* 5690 */;
import TableRowGroup from "TableRowGroup" /* 5772 */;
import Form from "Form" /* 8719 */;
import WebhookIcon from "WebhookIcon" /* 16878 */;
import ChannelsFollowedIcon from "ChannelsFollowedIcon" /* 16992 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

require = fn;
function LinkedLobbyFormSection(channel) {
  channel = channel.channel;
  importDefault = channel(1484).useNavigation();
  const obj = channel(1484);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = channel(7275).useGetOrFetchApplication(application_id);
  let tmp5 = null;
  if (null != getOrFetchApplication) {
    const obj3 = { title: null, hasIcons: true, children: null };
    const intl = tmp(1115).intl;
    obj3.title = intl.string(tmp(1115).t.oAvIAg);
    const obj4 = { label: getOrFetchApplication.name, icon: null, arrow: true, onPress: null };
    const obj5 = { source: null, size: null };
    ({ id: obj7.id, icon: obj7.icon } = getOrFetchApplication);
    obj5.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null });
    obj5.size = tmp(1177).AvatarSizes.REFRESH_MEDIUM_32;
    obj4.icon = closure_6(tmp(1177).Avatar, obj5);
    obj4.onPress = function onPress() {
      closure_1.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, { channel, numScreensToPop: 1 });
    };
    obj3.children = closure_6(tmp(5690).TableRow, obj4);
    tmp5 = closure_6(tmp(5772).TableRowGroup, obj3);
    const obj11 = { id: null, icon: null };
  }
  return tmp5;
}
fn(1962).GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
const ChannelSettingsSections = fn(1074).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4639);
const obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default function ConnectedChannelSettingsIntegrationsOverview(arg0) {
  ({ channelId: require, canManageWebhooks, canUnlinkLobby } = arg0);
  importDefault = useNavigation.useNavigation();
  const items = [ChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let tmp6Result = null;
  if (null != stateFromStores) {
    const obj3 = { style: tmp4.screenContainer, children: null };
    const obj4 = { style: null, spacing: null, children: null };
    const obj5 = { paddingHorizontal: nativeDefault.space.PX_12 };
    obj4.style = obj5;
    obj4.spacing = nativeDefault.space.PX_24;
    if (canManageWebhooks) {
      const obj6 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl = util.intl;
      obj6.label = intl.string(util.t.jp25Id);
      const intl2 = util.intl;
      obj6.subLabel = intl2.string(util.t.mKIOkI);
      obj6.icon = closure_6(WebhookIcon.WebhookIcon, {});
      obj6.onPress = function onPress() {
        return closure_1.push(ChannelSettingsSections.WEBHOOKS);
      };
      const items1 = [closure_6(TableRow.TableRow, obj6), ];
      let hasItem = set.has(stateFromStores.type);
      if (hasItem) {
        const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
        const intl3 = util.intl;
        obj7.label = intl3.string(util.t.OrV60r);
        const intl4 = util.intl;
        obj7.subLabel = intl4.string(util.t.rQREJl);
        obj7.icon = closure_6(ChannelsFollowedIcon.ChannelsFollowedIcon, {});
        obj7.onPress = function onPress() {
          return closure_1.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
        };
        hasItem = closure_6(TableRow.TableRow, obj7);
      }
      const obj8 = { hasIcons: true, children: null };
      items1[1] = hasItem;
      obj8.children = items1;
      canManageWebhooks = closure_7(TableRowGroup.TableRowGroup, obj8);
    }
    const items2 = [canManageWebhooks, ];
    if (canUnlinkLobby) {
      canUnlinkLobby = null != stateFromStores.linkedLobby;
    }
    if (canUnlinkLobby) {
      const obj9 = { channel: stateFromStores };
      canUnlinkLobby = closure_6(LinkedLobbyFormSection, obj9);
    }
    items2[1] = canUnlinkLobby;
    obj4.children = items2;
    obj3.children = closure_7(Stack_Stack.Stack, obj4);
    tmp6Result = closure_6(Form.Form, obj3);
  }
  return tmp6Result;
};