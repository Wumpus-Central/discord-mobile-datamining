// discord_app/modules/guild_onboarding_home/native/GuildHomeResources.tsx
import ThemesDefault from "Themes" /* 712 */;
import useResourceChannelsDefault from "useResourceChannels" /* 15815 */;
import registerAssetDefault from "registerAsset" /* 15823 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "comparator" /* 1980 */;
import closure_8 from "reinjectEphemerals" /* 4994 */;
import closure_9 from "getUncachedChannelPermissions" /* 4021 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function ResourceChannelRow(channelId) {
  channelId = channelId.channelId;
  ({ icon, description } = channelId);
  let stateFromStores;
  dependencyMap = undefined;
  const tmp = callback3();
  let obj = channelId(589);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(channelId));
  obj1 = channelId(589);
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_9.can(closure_1_10.VIEW_CHANNEL, stateFromStores));
  let obj2 = channelId(589);
  const items2 = [closure_8];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => closure_1_8.getMessages(channelId));
  const firstResult = stateFromStores2.first();
  let obj4 = channelId(8515);
  const forumPostMediaProperties = obj4.useForumPostMediaProperties(firstResult, false);
  let obj5 = channelId(8515);
  let length;
  const firstMediaIsEmbed = obj5.useFirstMediaIsEmbed(firstResult, false);
  if (forumPostMediaProperties != null) {
    length = forumPostMediaProperties.length;
  }
  let first = null;
  if (length > 0) {
    first = forumPostMediaProperties[0];
  }
  let tmp2Result = tmp2(11185);
  let flag = tmp2Result.useSharedMediaProps({ channel: stateFromStores, media: first }).shouldObscure;
  const tmp11 = stateFromStores(15822)(firstResult);
  const tmp12 = null != stateFromStores && null == stateFromStores2.first() && !stateFromStores2.loadingMore && !stateFromStores2.ready && !stateFromStores2.hasFetched;
  dependencyMap = tmp12;
  const items3 = [channelId, tmp12];
  const effect = React.useEffect(() => {
    if (dependencyMap) {
      let obj = stateFromStores(7427);
      obj = { channelId: null, after: null, limit: 5 };
      obj[0] = channelId;
      obj[1] = channelId;
      const messages = obj.fetchMessages(obj);
    }
  }, items3);
  [][0] = stateFromStores;
  if (null != stateFromStores) {
    if (stateFromStores1) {
      let tmp10Result = tmp10(1435);
      obj = { channelId: null, icon: null };
      obj[0] = stateFromStores.id;
      obj[1] = icon;
      const resourceChannelIconURL = tmp10Result.getResourceChannelIconURL(obj);
      obj = { onPress: null, style: null, children: null };
      obj[0] = tmp14;
      obj[1] = tmp.channelContainer;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.textContent;
      obj2 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
      obj2[2] = channelId.title;
      const items4 = [callback(tmp2(4734).Text, obj2), , ];
      let tmp19Result = tmp16;
      if (null == description || 0 === description.length) {
        tmp19Result = null != tmp11;
      }
      if (tmp19Result) {
        const obj3 = { variant: "text-sm/normal", color: "text-default", style: null, lineClamp: 3, ellipsizeMode: "tail", children: null };
        obj3[2] = tmp.messageContent;
        tmp10Result = tmp10(6807);
        obj4 = { guildId: null, channelId: null };
        ({ guild_id: obj15[0], id: obj15[1] } = stateFromStores);
        obj3[5] = tmp10Result.parse(tmp11, true, obj4);
        tmp19Result = tmp19(tmp2(4734).Text, obj3);
      }
      items4[1] = tmp19Result;
      tmp19Result = !tmp16;
      if (!(null == description || 0 === description.length)) {
        obj5 = { variant: "text-sm/normal", color: "text-default", style: null, lineClamp: 3, ellipsizeMode: "tail", children: null };
        obj5[2] = tmp.messageContent;
        ({ guild_id: obj18[0], id: obj18[1] } = stateFromStores);
        obj5[5] = tmp10(6807).parse(description, true, { guildId: null, channelId: null });
        tmp19Result = tmp19(tmp2(4734).Text, obj5);
        const obj6 = { guildId: null, channelId: null };
        const tmp10Result1 = tmp10(6807);
      }
      items4[2] = tmp19Result;
      obj1[1] = items4;
      const items5 = [closure_13(closure_4, obj1), , ];
      let tmp19Result1 = null;
      if (null != icon) {
        tmp19Result1 = null;
        if (null != resourceChannelIconURL) {
          const obj7 = { source: null, style: null };
          const obj8 = { uri: null };
          obj8[0] = resourceChannelIconURL;
          obj7[0] = obj8;
          obj7[1] = tmp.icon;
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
              const obj9 = { channel: null, media: null, isEmbed: null, embedLeftBorderColor: null, firstMessageId: null, containerStyle: null };
              obj9[0] = stateFromStores;
              obj9[1] = first;
              obj9[2] = firstMediaIsEmbed;
              tmp2Result = tmp2(8515);
              if (flag == null) {
                flag = false;
              }
              obj9[3] = tmp2Result.getEmbedColor(firstResult, flag);
              let id;
              if (firstResult != null) {
                id = firstResult.id;
              }
              obj9[4] = id;
              obj9[5] = tmp.thumbnail;
              tmp19Result2 = tmp19(tmp2(11185).ForumPostMediaThumbnail, obj9);
            }
          }
        }
      }
      items5[2] = tmp19Result2;
      obj[2] = items5;
      return closure_13(tmp2(5433).PressableOpacity, obj);
    }
  }
  return null;
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ Permissions: c10, Routes: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { container: { paddingHorizontal: 12, display: "flex", flexDirection: "column", alignItems: "center" }, emptyStateContainer: { padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }, channelContainer: null, messageContent: null, textContent: null, thumbnail: null, emptyStateImage: null, icon: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: ThemesDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "flex-start" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginTop: 8 };
createCacheKey[4] = { flex: 1 };
createCacheKey[5] = { marginLeft: 8 };
createCacheKey[6] = { marginTop: 12, marginBottom: 20 };
createCacheKey[7] = { width: 72, height: 72 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/native/GuildHomeResources.tsx");

export default function GuildHomeResources(guildId) {
  guildId = guildId.guildId;
  const tmp = callback3();
  const arr = useResourceChannelsDefault(guildId);
  if (0 === arr.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.emptyStateContainer;
    obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    const intl = guildId(1236).intl;
    obj[2] = intl.string(guildId(1236).t.owvC9U);
    const items = [callback(guildId(4734).Text, obj), , ];
    obj1 = { style: null, source: null };
    obj1[0] = tmp.emptyStateImage;
    obj1[1] = registerAssetDefault;
    items[1] = callback(closure_5, obj1);
    const obj2 = { onPress: null, text: null };
    obj2[0] = function onPress() {
      const defaultChannel = closure_1_7.getDefaultChannel(guildId);
      if (null != defaultChannel) {
        guildId(closure_1_2[21]).transitionTo(closure_1_11.CHANNEL(guildId, defaultChannel.id));
        const obj = guildId(closure_1_2[21]);
      }
    };
    const intl2 = guildId(1236).intl;
    obj2[1] = intl2.string(guildId(1236).t["3iCBUn"]);
    items[2] = callback(guildId(4745).Button, obj2);
    obj[1] = items;
    let tmp6 = callback2(closure_4, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj[1] = arr.map((channelId) => callback(closure_15, { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description }, "resource-" + channelId.channelId));
    tmp6 = callback(closure_4, obj);
  }
  return tmp6;
};