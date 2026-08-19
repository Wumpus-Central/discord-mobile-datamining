// === Module 15609: items ===

// Module 15609 (items)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import preloadDefault from "preload" /* 5449 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 7188 */;
import UnreadIndicatorDefault from "UnreadIndicator" /* 15558 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 15561 */;
import GuildRowWrapperDefault from "GuildRowWrapper" /* 15580 */;
import _modDef15610 from "module_15610" /* 15610 */;
import importAllResult from "noop" /* 19 */;
import { GUILD_ITEM_BADGE_SIZE } from "GUILD_ITEM_SIZE" /* 15548 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let c3 = importAllResult;
let obj = { width: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
obj[1] = { borderColor: "transparent", width: GUILD_ITEM_BADGE_SIZE, height: GUILD_ITEM_BADGE_SIZE, bottom: 4, right: 12 };
let closure_5 = createCacheKey.createStyles(obj);
let items = [computeGuildsBarCutoutDefault({ position: "bottom-right" })];
const memoResult = importAllResult.memo(function GuildsBarGeoRestrictedGuild(restrictedGuild) {
  restrictedGuild = restrictedGuild.restrictedGuild;
  const tmp4 = callback();
  let obj = restrictedGuild(15558);
  let animatableSourceWithFallback = null;
  const tmp3 = useIsMobileVisualRefreshExperimentEnabledDefault("GuildsBarGeoRestrictedGuild");
  const tmp5 = restrictedGuild;
  if (null != restrictedGuild.icon) {
    let tmpResult = getAvatarURLDefault;
    animatableSourceWithFallback = tmpResult.getAnimatableSourceWithFallback(false, (canAnimate) => {
      const obj = { id: restrictedGuild.id, size: restrictedGuild(dependencyMap[9]).ImageSizes[restrictedGuild(undefined, dependencyMap[9]).GuildIconSizes.LARGE], icon: restrictedGuild.icon, canAnimate };
      return obj.getGuildIconSource(obj);
    });
  }
  items = [, ];
  ({ id: arr[0], name: arr[1] } = restrictedGuild);
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      closure_1_1(closure_1_2[10]);
      let obj = { title: null, body: null, cancelText: null, onCancel: null };
      const intl = restrictedGuild(closure_1_2[11]).intl;
      obj[0] = intl.string(restrictedGuild(closure_1_2[11]).t.aCAiGl);
      const intl2 = restrictedGuild(closure_1_2[11]).intl;
      obj = { serverName: name.name };
      obj[1] = intl2.format(restrictedGuild(closure_1_2[11]).t["4cJV9S"], obj);
      const intl3 = restrictedGuild(closure_1_2[11]).intl;
      obj[2] = intl3.string(restrictedGuild(closure_1_2[11]).t.J2TBi3);
      obj[3] = function onCancel() {
        closure_1_1(closure_1_2[12]).leaveGuild(id.id);
      };
      obj.show(obj);
    }
  }), items);
  { selected: false, unread: false, circle: !tmp3, styles: obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: 1, expandedChildren: 2, children: 4 };
  tmpResult = UnreadIndicatorDefault;
  obj = { style: tmp4.geoRestrictedBadge };
  obj[9] = jsx(_modDef15610, { style: tmp4.geoRestrictedBadge });
  obj[10] = jsx(GuildRowWrapperDefault, { guildId: restrictedGuild.id });
  if (null != animatableSourceWithFallback) {
    const obj2 = { source: null, style: null, fadeDuration: 0 };
    obj2[0] = animatableSourceWithFallback;
    obj2[1] = tmp4.guildIcon;
    let tmp9Result = jsx(preloadDefault, { source: null, style: null, fadeDuration: 0 });
  } else {
    const obj3 = { value: null, selected: false, animate: false, size: null };
    obj3[0] = restrictedGuild.name;
    obj3[3] = tmp5(7188).GuildIconSizes.LARGE;
    tmp9Result = jsx(GuildIconSizesDefault, { value: null, selected: false, animate: false, size: null });
    const tmpResult1 = GuildIconSizesDefault;
  }
  obj[11] = tmp9Result;
  return <tmpResult style={tmp4.geoRestrictedBadge} />;
});
const result = require("obj132").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default memoResult;