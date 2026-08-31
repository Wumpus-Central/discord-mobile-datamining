// === Module 16115: MemberActionRow ===

// Module 16115 (MemberActionRow)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "getEmojiToGroupId" /* 5369 */;
import closure_6 from "ensureGuildLoaded" /* 1387 */;
import closure_7 from "trackCommunicationDisabled" /* 1992 */;
import closure_8 from "createGuildRecordFromRust" /* 1909 */;
import closure_9 from "getUncachedChannelPermissions" /* 4091 */;
import closure_10 from "handleSettingsLoadSuccess" /* 4675 */;
import closure_11 from "set" /* 4676 */;
import { Permissions } from "ME" /* 676 */;
import { EMOJI_URL_BASE_SIZE } from "set" /* 1925 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4079 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
function MemberActionRow(channelId) {
  channelId = channelId.channelId;
  let emoji = channelId.emoji;
  let id;
  let stateFromStores;
  ({ title, icon, completed } = channelId);
  const tmp = callback3();
  if (emoji == null) {
    emoji = {};
  }
  id = emoji.id;
  const name = emoji.name;
  obj1 = channelId(stateFromStores[15]);
  const items = [closure_6];
  stateFromStores = obj1.useStateFromStores(items, () => closure_1_6.getChannel(channelId));
  let obj2 = channelId(stateFromStores[15]);
  const items1 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_1_9.can(closure_1_12.VIEW_CHANNEL, stateFromStores));
  let obj3 = channelId(stateFromStores[15]);
  const items2 = [closure_5];
  const items3 = [id];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = closure_1_5.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items3);
  let obj4 = id(stateFromStores[17]);
  const newMemberActionIconURL = obj4.getNewMemberActionIconURL({ channelId, icon });
  [][0] = stateFromStores;
  let tmp11 = null;
  if (null != stateFromStores) {
    tmp11 = null;
    if (stateFromStores1) {
      if (null != newMemberActionIconURL) {
        let obj = { style: null, source: null, resizeMode: "contain" };
        obj[0] = tmp.icon;
        obj = { uri: null };
        obj[0] = newMemberActionIconURL;
        obj[1] = obj;
        let tmp14 = callback(tmp5(tmp3[19]), obj);
        let tmp15 = callback;
      } else if (null != stateFromStores2) {
        obj1 = { style: null, source: null, resizeMode: "contain" };
        obj1[0] = tmp.emoji;
        obj2 = { uri: null };
        let tmp5Result = tmp5(tmp3[19]);
        tmp5Result = tmp5(tmp3[17]);
        obj3 = { id: null, animated: null, size: null };
        ({ id: obj14[0], animated: obj14[1] } = stateFromStores2);
        obj3[2] = EMOJI_URL_BASE_SIZE;
        obj2[0] = tmp5Result.getEmojiURL(obj3);
        obj1[1] = obj2;
        tmp14 = callback(tmp5Result, obj1);
        tmp15 = callback;
      } else {
        if (null != name) {
          const tmp5Result1 = tmp5(tmp3[20]);
          if (null != tmp5Result1.getByName(tmp5Result2.convertSurrogateToName(name, false))) {
            obj4 = { style: null, variant: "heading-xxl/normal", children: null };
            obj4[0] = tmp.textEmoji;
            obj4[2] = name;
            tmp14 = callback(tmp2(tmp3[21]).Text, obj4);
            tmp15 = callback;
          }
          tmp5Result2 = tmp5(tmp3[20]);
        }
        const obj5 = { style: null, children: null };
        obj5[0] = tmp.emojiPlaceholder;
        const obj6 = { size: null, source: null };
        obj6[0] = tmp2(tmp3[22]).Icon.Sizes.REFRESH_SMALL_16;
        obj6[1] = tmp5(tmp3[23]);
        obj5[1] = callback(tmp2(tmp3[22]).Icon, obj6);
        tmp14 = callback(View, obj5);
        tmp15 = callback;
      }
      const obj7 = { onPress: null, style: null, children: null };
      obj7[0] = tmp10;
      obj7[1] = tmp.actionContainer;
      const items4 = [tmp14, , ];
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.channelNameContainer;
      const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      obj9[2] = title;
      const items5 = [tmp15(tmp2(tmp3[21]).Text, obj9), ];
      const obj10 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = tmp2(tmp3[25]).intl;
      const obj11 = { channelName: null };
      obj11[0] = tmp6;
      obj10[2] = intl.format(tmp2(tmp3[25]).t.MkzlDL, obj11);
      items5[1] = tmp15(tmp2(tmp3[21]).Text, obj10);
      obj8[1] = items5;
      items4[1] = callback2(View, obj8);
      const obj12 = { disableColor: true, size: null, source: null };
      obj12[1] = tmp2(tmp3[22]).Icon.Sizes.MEDIUM;
      obj12[2] = tmp5(completed ? tmp3[26] : tmp3[27]);
      tmp15 = tmp15(tmp2(tmp3[22]).Icon, obj12);
      items4[2] = tmp15;
      obj7[2] = items4;
      callback2(tmp2(tmp3[24]).PressableOpacity, obj7);
      const tmp21 = callback2;
    }
  }
  return tmp11;
}
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
createCacheKey = { actionsContainer: { paddingHorizontal: 12 }, actionsHeader: { display: "flex", marginBottom: 16 }, actionContainer: null, channelNameContainer: null, icon: null, emoji: null, textEmoji: null, emojiPlaceholder: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: ThemesDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flex: 1, marginHorizontal: 8 };
createCacheKey[4] = { width: 40, height: 40, borderRadius: ThemesDefault.radii.xs };
createCacheKey[5] = { width: 40, height: 40 };
createCacheKey[6] = { width: 40, textAlign: "center" };
let obj1 = { width: 40, height: 40, borderRadius: ThemesDefault.radii.xs };
createCacheKey[7] = { width: 40, height: 40, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let obj2 = { width: 40, height: 40, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" };
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx");

export default function GuildOnboardingNewMemberActions(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  let stateFromStores2;
  let stateFromStores3;
  const tmp = callback3();
  let obj = guildId(stateFromStores2[15]);
  const items = [closure_10];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getNewMemberActions(guildId), items1);
  obj1 = guildId(stateFromStores2[15]);
  const items2 = [closure_11];
  stateFromStores1 = obj1.useStateFromStores(items2, () => closure_1_11.getCompletedActions(guildId));
  let obj2 = guildId(stateFromStores2[15]);
  const items3 = [closure_7];
  stateFromStores2 = obj2.useStateFromStores(items3, () => closure_1_7.getSelfMember(guildId));
  let obj3 = guildId(stateFromStores2[15]);
  const items4 = [closure_8];
  stateFromStores3 = obj3.useStateFromStores(items4, () => closure_1_8.getGuild(guildId));
  const items5 = [stateFromStores1, guildId, ];
  let flags;
  if (stateFromStores2 != null) {
    flags = stateFromStores2.flags;
  }
  items5[2] = flags;
  const effect = stateFromStores3.useEffect(() => {
    let hasFlagResult = null == stateFromStores1;
    if (hasFlagResult) {
      let flags;
      if (stateFromStores2 != null) {
        flags = stateFromStores2.flags;
      }
      hasFlagResult = null != flags;
    }
    if (hasFlagResult) {
      let num = stateFromStores2.flags;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = guildId(stateFromStores2[28]).hasFlag(num, closure_1_14.STARTED_HOME_ACTIONS);
      const obj = guildId(stateFromStores2[28]);
    }
    if (hasFlagResult) {
      const newMemberActions = guildId(stateFromStores2[18]).fetchNewMemberActions(guildId);
      const obj2 = guildId(stateFromStores2[18]);
    }
  }, items5);
  [][0] = stateFromStores3;
  let tmp15Result = null;
  if (null != stateFromStores2) {
    tmp15Result = null;
    if (null != stateFromStores) {
      tmp15Result = null;
      if (0 !== stateFromStores.length) {
        obj = { style: null, children: null };
        obj[0] = tmp.actionsContainer;
        obj = { style: null, children: null };
        obj[0] = tmp.actionsHeader;
        obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
        const intl2 = tmp2(tmp3[25]).intl;
        obj1[2] = intl2.string(tmp2(tmp3[25]).t.LhlgY9);
        obj[1] = callback(tmp2(tmp3[21]).Text, obj1);
        const items6 = [
          callback(View, obj),
          stateFromStores.map((channelId) => {
                  const obj = { channelId: channelId.channelId, title: channelId.title, emoji: channelId.emoji, icon: channelId.icon, completed: null };
                  let flag;
                  if (stateFromStores1 != null) {
                    flag = tmp3[channelId.channelId];
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  obj[4] = flag;
                  return closure_1_15(closure_1_18, obj, "member-action-" + channelId.channelId);
                }),

        ];
        let rulesChannelId;
        if (stateFromStores3 != null) {
          rulesChannelId = stateFromStores3.rulesChannelId;
        }
        tmp15Result = null != rulesChannelId;
        if (tmp15Result) {
          obj2 = { onPress: null, style: null, children: null };
          obj2[0] = tmp10;
          obj2[1] = tmp.actionContainer;
          obj3 = { style: null, children: null };
          obj3[0] = tmp.emojiPlaceholder;
          const obj4 = { size: null, source: null };
          obj4[0] = tmp2(tmp3[22]).Icon.Sizes.REFRESH_SMALL_16;
          obj4[1] = stateFromStores1(tmp3[29]);
          obj3[1] = tmp17(tmp2(tmp3[22]).Icon, obj4);
          const items7 = [tmp17(tmp16, obj3), ];
          const obj5 = { style: null, children: null };
          obj5[0] = tmp.channelNameContainer;
          const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
          const intl = tmp2(tmp3[25]).intl;
          obj6[2] = intl.string(tmp2(tmp3[25]).t["K/i3iQ"]);
          obj5[1] = tmp17(tmp2(tmp3[21]).Text, obj6);
          items7[1] = tmp17(tmp16, obj5);
          obj2[2] = items7;
          tmp15Result = tmp15(tmp2(tmp3[24]).PressableOpacity, obj2);
        }
        items6[2] = tmp15Result;
        obj[1] = items6;
        tmp15Result = tmp15(tmp16, obj);
      }
    }
  }
  return tmp15Result;
};