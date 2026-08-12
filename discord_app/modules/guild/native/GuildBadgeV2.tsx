// discord_app/modules/guild/native/GuildBadgeV2.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { AccessibilityAnnouncer } from "../../../design/shared.tsx";
import { Button } from "../../../design/void/native.tsx";
import { BadgeCategory } from "../../guild_badge/BadgeCategory.tsx";
import { GuildVisibility } from "../../guild_badge/GuildTraits.tsx";
import { badgeVariants } from "../../guild_badge/native/GuildBadgeImageSource.tsx";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ icon: { marginRight: 8 } });
const result = require("createCacheKey").fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default function GuildBadgeV2(arg0) {
  let guild;
  let size;
  ({ guild, size } = arg0);
  if (size === undefined) {
    size = Button.Icon.Sizes.MEDIUM;
  }
  const merged = Object.assign(arg0, Object.create(null));
  AccessibilityAnnouncer;
  if (null == guild) {
    return null;
  } else {
    const guildBadgeImageSource = tmp5(9310).getGuildBadgeImageSource(guild, tmp8);
    let tmp10 = null;
    if (null != guildBadgeImageSource) {
      const obj = { size: null, source: null, style: null, disableColor: true };
      obj[0] = size;
      obj[1] = guildBadgeImageSource;
      obj[2] = tmp4.icon;
      const merged1 = Object.assign(merged);
      tmp10 = jsx(tmp5(1297).Icon, { size: null, source: null, style: null, disableColor: true });
    }
    return tmp10;
  }
  tmp4 = callback();
};
export const hasGuildBadge = function hasGuildBadge(fromGuildProfileResult) {
  const guildTraits = GuildVisibility.getGuildTraits(fromGuildProfileResult);
  const obj = GuildVisibility;
  const tmp = require;
  const badgeCategory = BadgeCategory.getBadgeCategory(guildTraits);
  const tmp5 = badgeVariants.badgeVariants[badgeCategory];
  let tmp6 = null != tmp5;
  if (tmp6) {
    tmp6 = null != tmp(9310).resolveImageSource(tmp5, guildTraits, arg1);
    const tmpResult = tmp(9310);
  }
  return tmp6;
};