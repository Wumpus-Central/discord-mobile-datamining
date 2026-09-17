// discord_app/modules/guild_tag/native/VoiceGuildTag.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
const View = fn(17).View;
const GuildTagBadgeSize = fn(8080).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let PlatformUtils = fn(1364);
let num = 10;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
const createStyles = fn(4640);
let obj3 = {
  gapContainer: { height: num },
  tagContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: 4,
    paddingHorizontal: 4,
    marginVertical: (num - 16) / 2,
    height: 16,
    gap: 2,
  },
  tag: null,
};
let num2 = 16;
PlatformUtils = fn(1364);
if (PlatformUtils.isAndroid()) {
  num2 = 13;
}
obj3.tag = { lineHeight: num2 };
let closure_7 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/VoiceGuildTag.tsx");

export default function VoiceGuildTagChiplet(userId) {
  userId = userId.userId;
  const tmp = closure_7();
  const items = [UserStore];
  const items1 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const obj = userId(504);
  let primaryGuild;
  if (stateFromStores != null) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  const userPrimaryGuild = userId(8313).getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  if (null != guildId) {
    if (null != tag) {
      const obj3 = { style: tmp.gapContainer, children: null };
      const obj4 = { style: tmp.tagContainer, children: null };
      const guildTagBadgeUrl = tmp2(8313).getGuildTagBadgeUrl(guildId, tmp7, GuildTagBadgeSize.SIZE_12);
      const obj5 = { source: null, size: null };
      const obj6 = { uri: guildTagBadgeUrl };
      obj5.source = obj6;
      obj5.size = GuildTagBadgeSize.SIZE_12;
      const items2 = [closure_5(tmp2(9338).GuildTagBadge, obj5)];
      const obj7 = { variant: "text-xs/semibold", color: "text-default", style: tmp.tag, children: tag };
      items2[1] = closure_5(tmp2(4636).Text, obj7);
      obj4.children = items2;
      obj3.children = closure_6(View, obj4);
      return closure_5(View, obj3);
    }
  }
  return null;
}
