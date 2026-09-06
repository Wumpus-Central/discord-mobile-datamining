// discord_app/modules/guild_tag/native/VoiceGuildTag.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
const View = fn(17).View;
const GuildTagBadgeSize = fn(7944).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let PlatformUtils = fn(1115);
let num = 10;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
const createStyles = fn(4560);
PlatformUtils = { gapContainer: { height: num }, tagContainer: null, tag: null };
PlatformUtils = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: 4,
  paddingHorizontal: 4,
  marginVertical: (num - 16) / 2,
  height: 16,
  gap: 2,
};
let num2 = 16;
PlatformUtils.tagContainer = PlatformUtils;
PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  num2 = 13;
}
PlatformUtils.tag = { lineHeight: num2 };
let closure_7 = createStyles.createStyles(PlatformUtils);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/VoiceGuildTag.tsx");

export default function VoiceGuildTagChiplet(userId) {
  userId = userId.userId;
  const tmp = closure_7();
  let obj = userId(504);
  const items = [UserStore];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  let obj1 = userId(8165);
  let primaryGuild;
  if (stateFromStores != null) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  const userPrimaryGuild = obj1.getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  if (null != guildId) {
    if (null != tag) {
      obj = { style: tmp.gapContainer, children: null };
      obj = { style: tmp.tagContainer, children: null };
      const guildTagBadgeUrl = tmp2(8165).getGuildTagBadgeUrl(guildId, tmp7, GuildTagBadgeSize.SIZE_12);
      obj1 = { source: null, size: null };
      const obj2 = { uri: guildTagBadgeUrl };
      obj1.source = obj2;
      obj1.size = GuildTagBadgeSize.SIZE_12;
      const items2 = [closure_5(tmp2(9184).GuildTagBadge, obj1)];
      const obj3 = { variant: "text-xs/semibold", color: "text-default", style: tmp.tag, children: tag };
      items2[1] = closure_5(tmp2(4556).Text, obj3);
      obj.children = items2;
      obj.children = closure_6(View, obj);
      return closure_5(View, obj);
    }
  }
  return null;
}
