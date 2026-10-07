// === Module 8427: GuildBadgeV2 ===

// Module 8427 (GuildBadgeV2)
import c from "c" /* 576 */;
import BadgeCategory from "BadgeCategory" /* 8429 */;
import GuildTraits from "GuildTraits" /* 8430 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const native = Icon(1188);
const shared = Icon(4735);
const GuildBadgeImageSource = Icon(8428);
require = fn;
let closure_2 = ["guild", "size"];
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_5 = createStyles.createStyles({ icon: { marginRight: 8 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Icon = require;
  let tmp = dependencyMap;
  const cResult = c.c(12);
  if (cResult[0] !== arg0) {
    ({ guild, size } = arg0);
    const tmp7 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = guild;
    cResult[2] = tmp7;
    cResult[3] = size;
    let MEDIUM = size;
    let tmp4 = tmp7;
    let tmp3 = guild;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    MEDIUM = cResult[3];
  }
  if (undefined === MEDIUM) {
    MEDIUM = native.Icon.Sizes.MEDIUM;
  }
  let icon = closure_5();
  const theme = shared.useThemeContext().theme;
  if (null == tmp3) {
    return null;
  } else {
    if (cResult[4] === tmp3) {
      if (cResult[5] === theme) {
        let tmp8 = cResult[6];
      }
      if (null == tmp8) {
        return null;
      } else {
        if (cResult[7] === tmp8) {
          if (cResult[8] === tmp4) {
            if (cResult[9] === MEDIUM) {
            }
          }
        }
        Icon = native.Icon;
        const obj2 = { size: MEDIUM, source: tmp8, style: icon.icon, disableColor: true };
        const merged = Object.assign(tmp4);
        tmp = <Icon size={MEDIUM} source={tmp8} style={icon.icon} disableColor />;
        cResult[7] = tmp8;
        cResult[8] = tmp4;
        cResult[9] = MEDIUM;
        icon = icon.icon;
        cResult[10] = icon;
        cResult[11] = tmp;
      }
    }
    const guildBadgeImageSource = GuildBadgeImageSource.getGuildBadgeImageSource(tmp3, theme);
    cResult[4] = tmp3;
    cResult[5] = theme;
    cResult[6] = guildBadgeImageSource;
    tmp8 = guildBadgeImageSource;
    const IconResult1 = GuildBadgeImageSource;
  }
  const IconResult = shared;
}) : ((arg0) => {
  ({ guild, size } = arg0);
  if (size === undefined) {
    size = native.Icon.Sizes.MEDIUM;
  }
  const merged = Object.assign(arg0, Object.assign({ guild: 0, size: 0 }));
  shared;
  if (null == guild) {
    return null;
  } else {
    const guildBadgeImageSource = GuildBadgeImageSource.getGuildBadgeImageSource(guild, tmp8);
    let tmp10 = null;
    if (null != guildBadgeImageSource) {
      const obj = { size, source: guildBadgeImageSource, style: tmp4.icon, disableColor: true };
      const merged1 = Object.assign(merged);
      tmp10 = jsx(native.Icon, { size, source: guildBadgeImageSource, style: tmp4.icon, disableColor: true });
    }
    return tmp10;
  }
  tmp4 = closure_5();
});
export const hasGuildBadge = function hasGuildBadge(fromGuildProfileResult, arg1) {
  const guildTraits = GuildTraits.getGuildTraits(fromGuildProfileResult);
  const badgeCategory = BadgeCategory.getBadgeCategory(guildTraits);
  const tmp5 = GuildBadgeImageSource.badgeVariants[badgeCategory];
  let tmp6 = null != tmp5;
  if (tmp6) {
    tmp6 = null != GuildBadgeImageSource.resolveImageSource(tmp5, guildTraits, arg1);
    const tmpResult = GuildBadgeImageSource;
  }
  return tmp6;
};