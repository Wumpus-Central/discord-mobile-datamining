// === Module 15387: VoiceGuildTagChiplet ===

// Module 15387 (VoiceGuildTagChiplet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { GuildTagBadgeSize } from "items" /* 8168 */;
import jsxProd from "jsxProd" /* 21 */;
import set from "set" /* 500 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let num = 10;
if (set.isAndroid()) {
  num = 14;
}
set = { gapContainer: { height: num }, tagContainer: null, tag: null };
set = { alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, marginVertical: (num - 16) / 2, height: 16, gap: 2 };
let num2 = 16;
set[1] = set;
if (set.isAndroid()) {
  num2 = 13;
}
set[2] = { lineHeight: num2 };
let closure_7 = createCacheKey.createStyles(set);
const result = set.fileFinishedImporting("modules/guild_tag/native/VoiceGuildTag.tsx");

export default function VoiceGuildTagChiplet(userId) {
  userId = userId.userId;
  const tmp = callback3();
  let obj = userId(589);
  const items = [closure_3];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getUser(userId), items1);
  obj1 = userId(8375);
  let primaryGuild;
  if (stateFromStores != null) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  const userPrimaryGuild = obj1.getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  if (null != guildId) {
    if (null != tag) {
      obj = { style: null, children: null };
      obj[0] = tmp.gapContainer;
      obj = { style: null, children: null };
      obj[0] = tmp.tagContainer;
      const guildTagBadgeUrl = tmp2(8375).getGuildTagBadgeUrl(guildId, tmp7, GuildTagBadgeSize.SIZE_12);
      obj1 = { source: null, size: null };
      const obj2 = { uri: null };
      obj2[0] = guildTagBadgeUrl;
      obj1[0] = obj2;
      obj1[1] = GuildTagBadgeSize.SIZE_12;
      const items2 = [callback(tmp2(9509).GuildTagBadge, obj1), ];
      const obj3 = { variant: "text-xs/semibold", color: "text-default", style: null, children: null };
      obj3[2] = tmp.tag;
      obj3[3] = tag;
      items2[1] = callback(tmp2(4734).Text, obj3);
      obj[1] = items2;
      obj[1] = callback2(View, obj);
      return callback(View, obj);
    }
  }
  return null;
};