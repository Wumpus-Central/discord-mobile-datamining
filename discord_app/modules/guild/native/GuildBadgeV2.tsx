// discord_app/modules/guild/native/GuildBadgeV2.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import shared from "../../../design/shared.tsx";
import GuildTraits from "../../guild_badge/GuildTraits.tsx";
import BadgeCategory from "../../guild_badge/BadgeCategory.tsx";
import ExperimentalWebBadgeIcon from "../../../design/components/Icon/native/redesign/generated/ExperimentalWebBadgeIcon.tsx";
import GuildBadgeImageSource from "../../guild_badge/native/GuildBadgeImageSource.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_4 = createStyles.createStyles({ icon: { marginRight: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default function GuildBadgeV2(arg0) {
  ({ guild, size } = arg0);
  if (size === undefined) {
    size = native.Icon.Sizes.MEDIUM;
  }
  const merged = Object.assign(arg0, Object.assign({ guild: 0, size: 0 }));
  const tmp4 = closure_4();
  shared;
  if (null == guild) {
    return null;
  } else {
    const tmp5Result = BadgeCategory;
    const badgeCategory = tmp5Result.getBadgeCategory(GuildTraits.getGuildTraits(guild));
    if (badgeCategory === BadgeCategory.BadgeCategory.DISCOVERABLE) {
      const iconSize = native.getIconSize(size);
      const obj = {
        size: "custom",
        color: nativeDefault.colors.BADGE_INVERTED_BACKGROUND,
        secondaryColor: nativeDefault.colors.BADGE_INVERTED_TEXT,
        style: null,
      };
      const size1 = { width: iconSize, height: iconSize };
      const items = [size1];
      let icon = merged.style;
      if (icon == null) {
        icon = tmp4.icon;
      }
      items[1] = icon;
      obj.style = items;
      return jsx(ExperimentalWebBadgeIcon.ExperimentalWebBadgeIcon, {
        size: "custom",
        color: nativeDefault.colors.BADGE_INVERTED_BACKGROUND,
        secondaryColor: nativeDefault.colors.BADGE_INVERTED_TEXT,
        style: null,
      });
    } else {
      const guildBadgeImageSource = GuildBadgeImageSource.getGuildBadgeImageSource(guild, tmp8);
      let tmp10 = null;
      if (null != guildBadgeImageSource) {
        const obj2 = { size, source: guildBadgeImageSource, style: tmp4.icon, disableColor: true };
        const merged1 = Object.assign(merged);
        tmp10 = jsx(native.Icon, { size, source: guildBadgeImageSource, style: tmp4.icon, disableColor: true });
      }
      return tmp10;
    }
    const tmp5Result4 = GuildTraits;
  }
}
export function hasGuildBadge(fromGuildProfileResult, arg1) {
  const guildTraits = GuildTraits.getGuildTraits(fromGuildProfileResult);
  const badgeCategory = BadgeCategory.getBadgeCategory(guildTraits);
  const tmp5 = GuildBadgeImageSource.badgeVariants[badgeCategory];
  let tmp6 = null != tmp5;
  if (tmp6) {
    tmp6 = null != GuildBadgeImageSource.resolveImageSource(tmp5, guildTraits, arg1);
    const tmpResult = GuildBadgeImageSource;
  }
  return tmp6;
}
