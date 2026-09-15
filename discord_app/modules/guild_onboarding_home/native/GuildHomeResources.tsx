// === Module 16681: GuildHomeResources ===

// Module 16681 (GuildHomeResources)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7563 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12419 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16675 */;
import _modDef16683 from "module_16683" /* 16683 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildChannelStore from "GuildChannelStore" /* 2013 */;
import MessageStore from "MessageStore" /* 4860 */;
import PermissionStore from "PermissionStore" /* 4278 */;

require = fn;
function ResourceChannelRow(channelId) {
  channelId = channelId.channelId;
  ({ icon, description } = channelId);
  dependencyMap = undefined;
  const tmp = closure_14();
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = channelId(504).useStateFromStores(items1, () => PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores));
  let obj2 = channelId(504);
  const items2 = [MessageStore];
  const stateFromStores2 = channelId(504).useStateFromStores(items2, () => MessageStore.getMessages(channelId));
  const firstResult = stateFromStores2.first();
  const obj3 = channelId(504);
  const forumPostMediaProperties = channelId(8004).useForumPostMediaProperties(firstResult, false);
  const obj5 = channelId(8004);
  let length;
  const firstMediaIsEmbed = channelId(8004).useFirstMediaIsEmbed(firstResult, false);
  if (forumPostMediaProperties != null) {
    length = forumPostMediaProperties.length;
  }
  let first = null;
  if (length > 0) {
    first = forumPostMediaProperties[0];
  }
  const obj6 = channelId(8004);
  let flag = channelId(12143).useSharedMediaProps({ channel: stateFromStores, media: first }).shouldObscure;
  const tmp11 = stateFromStores(16682)(firstResult);
  const tmp12 = null != stateFromStores && null == stateFromStores2.first() && !stateFromStores2.loadingMore && !stateFromStores2.ready && !stateFromStores2.hasFetched;
  dependencyMap = tmp12;
  const items3 = [channelId, tmp12];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      const obj2 = { channelId, after: channelId, limit: 5 };
      const messages = MessageActionCreatorsDefault.fetchMessages(obj2);
    }
  }, items3);
  [][0] = stateFromStores;
  if (null != stateFromStores) {
    if (stateFromStores1) {
      const obj4 = { channelId: stateFromStores.id, icon };
      const resourceChannelIconURL = tmp10(1397).getResourceChannelIconURL(obj4);
      const obj7 = { onPress: tmp14, style: tmp.channelContainer, children: null };
      const obj8 = { style: tmp.textContent, children: null };
      const obj9 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: channelId.title };
      const items4 = [closure_12(tmp2(4635).Text, obj9), , ];
      let tmp19Result = tmp16;
      if (null == description || 0 === description.length) {
        tmp19Result = null != tmp11;
      }
      if (tmp19Result) {
        const obj10 = { variant: "text-sm/normal", color: "text-default", style: tmp.messageContent, lineClamp: 3, ellipsizeMode: "tail", children: null };
        ({ guild_id: obj15.guildId, id: obj15.channelId } = stateFromStores);
        obj10.children = tmp10(4629).parse(tmp11, true, { guildId: null, channelId: null });
        tmp19Result = closure_12(tmp2(4635).Text, obj10);
        const obj11 = { guildId: null, channelId: null };
        const tmp10Result3 = tmp10(4629);
      }
      items4[1] = tmp19Result;
      let tmp19Result4 = !tmp16;
      if (!(null == description || 0 === description.length)) {
        const obj12 = { variant: "text-sm/normal", color: "text-default", style: tmp.messageContent, lineClamp: 3, ellipsizeMode: "tail", children: null };
        ({ guild_id: obj18.guildId, id: obj18.channelId } = stateFromStores);
        obj12.children = tmp10(4629).parse(description, true, { guildId: null, channelId: null });
        tmp19Result4 = closure_12(tmp2(4635).Text, obj12);
        const obj13 = { guildId: null, channelId: null };
        const tmp10Result4 = tmp10(4629);
      }
      items4[2] = tmp19Result4;
      obj8.children = items4;
      const items5 = [closure_13(closure_4, obj8), , ];
      let tmp19Result5 = null;
      if (null != icon) {
        tmp19Result5 = null;
        if (null != resourceChannelIconURL) {
          const obj14 = { source: null, style: null };
          const obj16 = { uri: resourceChannelIconURL };
          obj14.source = obj16;
          obj14.style = tmp.icon;
          tmp19Result5 = closure_12(closure_5, obj14);
        }
      }
      items5[1] = tmp19Result5;
      let tmp19Result6 = null;
      if (null == resourceChannelIconURL) {
        tmp19Result6 = null;
        if (null != firstResult) {
          let blocked;
          if (firstResult != null) {
            blocked = firstResult.blocked;
          }
          tmp19Result6 = null;
          if (!blocked) {
            tmp19Result6 = null;
            if (null != first) {
              const obj17 = { channel: stateFromStores, media: first, isEmbed: firstMediaIsEmbed, embedLeftBorderColor: null, firstMessageId: null, containerStyle: null };
              if (flag == null) {
                flag = false;
              }
              obj17.embedLeftBorderColor = tmp2(8004).getEmbedColor(firstResult, flag);
              let id;
              if (firstResult != null) {
                id = firstResult.id;
              }
              obj17.firstMessageId = id;
              obj17.containerStyle = tmp.thumbnail;
              tmp19Result6 = closure_12(tmp2(12143).ForumPostMediaThumbnail, obj17);
              const tmp2Result2 = tmp2(8004);
            }
          }
        }
      }
      items5[2] = tmp19Result6;
      obj7.children = items5;
      return closure_13(tmp2(5207).PressableOpacity, obj7);
    }
  }
  return null;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ Permissions: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { paddingHorizontal: 12, display: "flex", flexDirection: "column", alignItems: "center" }, emptyStateContainer: { padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }, channelContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "flex-start" }, messageContent: { marginTop: 8 }, textContent: { flex: 1 }, thumbnail: { marginLeft: 8 }, emptyStateImage: { marginTop: 12, marginBottom: 20 }, icon: { width: 72, height: 72 } };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildHomeResources.tsx");

export default function GuildHomeResources(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_14();
  const arr = useResourceChannelsDefault(guildId);
  if (0 === arr.length) {
    const obj2 = { style: tmp.emptyStateContainer, children: null };
    const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    const intl = guildId(1115).intl;
    obj3.children = intl.string(guildId(1115).t.owvC9U);
    const items = [closure_12(guildId(4635).Text, obj3), , ];
    const obj4 = { style: tmp.emptyStateImage, source: _modDef16683 };
    items[1] = closure_12(closure_5, obj4);
    const obj5 = {
      onPress() {
          const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
          if (null != defaultChannel) {
            router_utils.transitionTo(closure_2_11.CHANNEL(guildId, defaultChannel.id));
          }
        },
      text: null
    };
    const intl2 = guildId(1115).intl;
    obj5.text = intl2.string(guildId(1115).t["3iCBUn"]);
    items[2] = closure_12(guildId(5059).Button, obj5);
    obj2.children = items;
    let tmp6 = closure_13(closure_4, obj2);
  } else {
    let obj = { style: tmp.container, children: arr.map((channelId) => closure_1_12(ResourceChannelRow, { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description }, "resource-" + channelId.channelId)) };
    tmp6 = closure_12(closure_4, obj);
  }
  return tmp6;
};