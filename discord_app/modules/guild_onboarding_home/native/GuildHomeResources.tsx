// === Module 16565: GuildHomeResources ===

// Module 16565 (GuildHomeResources)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12284 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16559 */;
import _modDef16567 from "module_16567" /* 16567 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import MessageStore from "MessageStore" /* 4781 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
function ResourceChannelRow(channelId) {
  channelId = channelId.channelId;
  ({ icon, description } = channelId);
  dependencyMap = undefined;
  const tmp = closure_14();
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj1 = channelId(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores));
  let obj2 = channelId(504);
  const items2 = [MessageStore];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => MessageStore.getMessages(channelId));
  const firstResult = stateFromStores2.first();
  let obj4 = channelId(7897);
  const forumPostMediaProperties = obj4.useForumPostMediaProperties(firstResult, false);
  let obj5 = channelId(7897);
  let length;
  const firstMediaIsEmbed = obj5.useFirstMediaIsEmbed(firstResult, false);
  if (forumPostMediaProperties != null) {
    length = forumPostMediaProperties.length;
  }
  let first = null;
  if (length > 0) {
    first = forumPostMediaProperties[0];
  }
  let tmp2Result = tmp2(12009);
  let flag = tmp2Result.useSharedMediaProps({ channel: stateFromStores, media: first }).shouldObscure;
  const tmp11 = stateFromStores(16566)(firstResult);
  const tmp12 = null != stateFromStores && null == stateFromStores2.first() && !stateFromStores2.loadingMore && !stateFromStores2.ready && !stateFromStores2.hasFetched;
  dependencyMap = tmp12;
  const items3 = [channelId, tmp12];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      const obj = { channelId, after: channelId, limit: 5 };
      const messages = obj.fetchMessages(obj);
    }
  }, items3);
  [][0] = stateFromStores;
  if (null != stateFromStores) {
    if (stateFromStores1) {
      let tmp10Result = tmp10(1396);
      obj = { channelId: stateFromStores.id, icon };
      const resourceChannelIconURL = tmp10Result.getResourceChannelIconURL(obj);
      obj = { onPress: tmp14, style: tmp.channelContainer, children: null };
      obj1 = { style: tmp.textContent, children: null };
      obj2 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: channelId.title };
      const items4 = [closure_12(tmp2(4556).Text, obj2), , ];
      let tmp19Result = tmp16;
      if (null == description || 0 === description.length) {
        tmp19Result = null != tmp11;
      }
      if (tmp19Result) {
        const obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp.messageContent, lineClamp: 3, ellipsizeMode: "tail", children: null };
        tmp10Result = tmp10(4550);
        obj4 = { guildId: null, channelId: null };
        ({ guild_id: obj15.guildId, id: obj15.channelId } = stateFromStores);
        obj3.children = tmp10Result.parse(tmp11, true, obj4);
        tmp19Result = tmp19(tmp2(4556).Text, obj3);
      }
      items4[1] = tmp19Result;
      tmp19Result = !tmp16;
      if (!(null == description || 0 === description.length)) {
        obj5 = { variant: "text-sm/normal", color: "text-default", style: tmp.messageContent, lineClamp: 3, ellipsizeMode: "tail", children: null };
        ({ guild_id: obj18.guildId, id: obj18.channelId } = stateFromStores);
        obj5.children = tmp10(4550).parse(description, true, { guildId: null, channelId: null });
        tmp19Result = tmp19(tmp2(4556).Text, obj5);
        const obj6 = { guildId: null, channelId: null };
        const tmp10Result1 = tmp10(4550);
      }
      items4[2] = tmp19Result;
      obj1.children = items4;
      const items5 = [closure_13(closure_4, obj1), , ];
      let tmp19Result1 = null;
      if (null != icon) {
        tmp19Result1 = null;
        if (null != resourceChannelIconURL) {
          const obj7 = { source: null, style: null };
          const obj8 = { uri: resourceChannelIconURL };
          obj7.source = obj8;
          obj7.style = tmp.icon;
          tmp19Result1 = tmp19(closure_5, obj7);
        }
      }
      items5[1] = tmp19Result1;
      let tmp19Result2 = null;
      if (null == resourceChannelIconURL) {
        tmp19Result2 = null;
        if (null != firstResult) {
          let blocked;
          if (firstResult != null) {
            blocked = firstResult.blocked;
          }
          tmp19Result2 = null;
          if (!blocked) {
            tmp19Result2 = null;
            if (null != first) {
              const obj9 = { channel: stateFromStores, media: first, isEmbed: firstMediaIsEmbed, embedLeftBorderColor: null, firstMessageId: null, containerStyle: null };
              tmp2Result = tmp2(7897);
              if (flag == null) {
                flag = false;
              }
              obj9.embedLeftBorderColor = tmp2Result.getEmbedColor(firstResult, flag);
              let id;
              if (firstResult != null) {
                id = firstResult.id;
              }
              obj9.firstMessageId = id;
              obj9.containerStyle = tmp.thumbnail;
              tmp19Result2 = tmp19(tmp2(12009).ForumPostMediaThumbnail, obj9);
            }
          }
        }
      }
      items5[2] = tmp19Result2;
      obj.children = items5;
      return closure_13(tmp2(5123).PressableOpacity, obj);
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
fn(4560);
let createStyles = { container: { paddingHorizontal: 12, display: "flex", flexDirection: "column", alignItems: "center" }, emptyStateContainer: { padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }, channelContainer: null, messageContent: null, textContent: null, thumbnail: null, emptyStateImage: null, icon: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "flex-start" };
createStyles.channelContainer = createStyles;
createStyles.messageContent = { marginTop: 8 };
createStyles.textContent = { flex: 1 };
createStyles.thumbnail = { marginLeft: 8 };
createStyles.emptyStateImage = { marginTop: 12, marginBottom: 20 };
createStyles.icon = { width: 72, height: 72 };
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildHomeResources.tsx");

export default function GuildHomeResources(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_14();
  const arr = useResourceChannelsDefault(guildId);
  if (0 === arr.length) {
    let obj = { style: tmp.emptyStateContainer, children: null };
    obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    const intl = guildId(1114).intl;
    obj.children = intl.string(guildId(1114).t.owvC9U);
    const items = [closure_12(guildId(4556).Text, obj), , ];
    const obj1 = { style: tmp.emptyStateImage, source: _modDef16567 };
    items[1] = closure_12(closure_5, obj1);
    const obj2 = {
      onPress() {
          const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
          if (null != defaultChannel) {
            router_utils.transitionTo(closure_2_11.CHANNEL(guildId, defaultChannel.id));
          }
        },
      text: null
    };
    const intl2 = guildId(1114).intl;
    obj2.text = intl2.string(guildId(1114).t["3iCBUn"]);
    items[2] = closure_12(guildId(4975).Button, obj2);
    obj.children = items;
    let tmp6 = closure_13(closure_4, obj);
  } else {
    obj = { style: tmp.container, children: arr.map((channelId) => closure_1_12(ResourceChannelRow, { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description }, "resource-" + channelId.channelId)) };
    tmp6 = closure_12(closure_4, obj);
  }
  return tmp6;
};