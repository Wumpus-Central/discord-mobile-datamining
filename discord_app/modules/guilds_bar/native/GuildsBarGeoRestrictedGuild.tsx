// === Module 16168: items ===

// Module 16168 (items)
import ThemesDefault from "Themes" /* 709 */;
import getAvatarURLDefault from "getAvatarURL" /* 1430 */;
import UnreadIndicatorDefault from "UnreadIndicator" /* 16116 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 16119 */;
import GuildRowWrapperDefault from "GuildRowWrapper" /* 16138 */;
import _modDef16169 from "module_16169" /* 16169 */;
import importAllResult from "noop" /* 19 */;
import { GUILD_ITEM_BADGE_SIZE } from "GUILD_ITEM_SIZE" /* 16107 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c3 = importAllResult;
let obj = { guildIcon: null, geoRestrictedBadge: null };
obj = { width: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
obj[1] = { borderColor: "transparent", width: GUILD_ITEM_BADGE_SIZE, height: GUILD_ITEM_BADGE_SIZE, bottom: 4, right: 12 };
let closure_5 = createCacheKey.createStyles(obj);
let items = [computeGuildsBarCutoutDefault({ position: "bottom-right" })];
const memoResult = importAllResult.memo(function GuildsBarGeoRestrictedGuild(restrictedGuild) {
  restrictedGuild = restrictedGuild.restrictedGuild;
  const tmp = callback();
  let obj = restrictedGuild(16116);
  let animatableSourceWithFallback = null;
  if (null != restrictedGuild.icon) {
    obj1 = getAvatarURLDefault;
    animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(false, (canAnimate) => {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { id: restrictedGuild.id, size: restrictedGuild(closure_1_2[8]).ImageSizes[restrictedGuild(undefined, closure_1_2[8]).GuildIconSizes.LARGE], icon: restrictedGuild.icon, canAnimate };
      return obj.getGuildIconSource(obj);
    });
  }
  items = [, ];
  ({ id: arr[0], name: arr[1] } = restrictedGuild);
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      let obj = closure_1_1(closure_1_2[9]);
      obj = { title: null, body: null, cancelText: null, onCancel: null };
      const intl = closure_1_0(closure_1_2[10]).intl;
      obj[0] = intl.string(closure_1_0(closure_1_2[10]).t.aCAiGl);
      const intl2 = closure_1_0(closure_1_2[10]).intl;
      obj = { serverName: name.name };
      obj[1] = intl2.format(closure_1_0(closure_1_2[10]).t["4cJV9S"], obj);
      const intl3 = closure_1_0(closure_1_2[10]).intl;
      obj[2] = intl3.string(closure_1_0(closure_1_2[10]).t.J2TBi3);
      obj[3] = function onCancel() {
        closure_1_1(closure_1_2[11]).leaveGuild(id.id);
      };
      obj.show(obj);
    }
  }), items);
  obj = { selected: false, unread: false, circle: false, styles: obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: 8, expandedChildren: 12, children: 8 };
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const tmp2 = restrictedGuild;
  obj = { style: tmp.geoRestrictedBadge };
  obj[9] = jsx(_modDef16169, { style: tmp.geoRestrictedBadge });
  obj1 = { guildId: restrictedGuild.id };
  obj[10] = jsx(GuildRowWrapperDefault, { guildId: restrictedGuild.id });
  if (null != animatableSourceWithFallback) {
    const obj2 = { source: null, style: null, fadeDuration: 0 };
    obj2[0] = animatableSourceWithFallback;
    obj2[1] = tmp.guildIcon;
    let tmp8Result = tmp8(tmp9(5501), obj2);
  } else {
    const obj3 = { value: null, selected: false, animate: false, size: null };
    obj3[0] = restrictedGuild.name;
    obj3[3] = tmp2(6012).GuildIconSizes.LARGE;
    tmp8Result = tmp8(tmp9(6012), obj3);
    const tmp9Result = tmp9(6012);
  }
  obj[11] = tmp8Result;
  return jsx(UnreadIndicatorDefault, { style: tmp.geoRestrictedBadge });
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default memoResult;