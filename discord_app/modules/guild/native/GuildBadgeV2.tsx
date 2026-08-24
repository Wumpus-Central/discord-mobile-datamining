// === Module 9189: GuildBadgeV2 ===

// Module 9189 (GuildBadgeV2)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import badgeVariants from "badgeVariants" /* 9190 */;
import BadgeCategory from "BadgeCategory" /* 9191 */;
import GuildVisibility from "GuildVisibility" /* 9192 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
let closure_3 = createCacheKey.createStyles({ icon: { marginRight: 8 } });
const result = require("set").fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default function GuildBadgeV2(arg0) {
  ({ guild, size } = arg0);
  if (size === undefined) {
    size = Button.Icon.Sizes.MEDIUM;
  }
  const merged = Object.assign(arg0, Object.create(null));
  AccessibilityAnnouncer;
  if (null == guild) {
    return null;
  } else {
    const guildBadgeImageSource = tmp5(9190).getGuildBadgeImageSource(guild, tmp8);
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
    tmp6 = null != badgeVariants.resolveImageSource(tmp5, guildTraits, arg1);
    const tmpResult = badgeVariants;
  }
  return tmp6;
};