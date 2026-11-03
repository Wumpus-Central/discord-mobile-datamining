// === Module 18564: GuildsBarGeoRestrictedGuild ===

// Module 18564 (GuildsBarGeoRestrictedGuild)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import FastImageDefault from "FastImage" /* 5837 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6078 */;
import GuildIcon from "GuildIcon" /* 7083 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 18515 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 18519 */;
import HomeDrawerGuildRowDefault from "HomeDrawerGuildRow" /* 18536 */;
import GuildsBarGeoRestrictedBadgeDefault from "GuildsBarGeoRestrictedBadge" /* 18565 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const GUILD_ITEM_BADGE_SIZE = fn(18503).GUILD_ITEM_BADGE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let obj = { guildIcon: null, geoRestrictedBadge: null };
let size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.guildIcon = size;
obj.geoRestrictedBadge = { borderColor: "transparent", width: GUILD_ITEM_BADGE_SIZE, height: GUILD_ITEM_BADGE_SIZE, bottom: 4, right: 12 };
let closure_5 = createStyles.createStyles(obj);
let items = [computeGuildsBarCutoutDefault({ position: "bottom-right" })];
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default noop.memo(function GuildsBarGeoRestrictedGuild(restrictedGuild) {
  restrictedGuild = restrictedGuild.restrictedGuild;
  const tmp = closure_5();
  let animatableSourceWithFallback = null;
  let obj = restrictedGuild(18515);
  const tmp2 = restrictedGuild;
  if (null != restrictedGuild.icon) {
    animatableSourceWithFallback = AvatarUtilsDefault.getAnimatableSourceWithFallback(false, (canAnimate) => {
      const obj = AvatarUtilsDefault;
      return obj.getGuildIconSource({ id: restrictedGuild.id, size: GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], icon: restrictedGuild.icon, canAnimate });
    });
  }
  items = [, ];
  ({ id: arr[0], name: arr[1] } = restrictedGuild);
  const memo = noop.useMemo(() => ({
    onPress() {
      const obj2 = { title: null, body: null, cancelText: null, onCancel: null, isDismissable: false };
      const intl = restrictedGuild(1113).intl;
      obj2.title = intl.string(restrictedGuild(1113).t.aCAiGl);
      const intl2 = restrictedGuild(1113).intl;
      obj2.body = intl2.format(restrictedGuild(1113).t["4cJV9S"], { serverName: name.name });
      const intl3 = restrictedGuild(1113).intl;
      obj2.cancelText = intl3.string(restrictedGuild(1113).t.J2TBi3);
      obj2.onCancel = function onCancel() {
        closure_2_1(dependencyMap[11]).leaveGuild(id.id);
      };
      AlertActionCreatorsDefault.show(obj2);
    }
  }), items);
  const obj3 = { selected: false, unread: false, circle: false, styles: restrictedGuild(18515).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: "(function CarouselPaginationTsx1(){let[withTiming,active,STANDARD_EASING]=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');})", expandedChildren: null, children: 1 };
  const guildsBarAnimatedWrapperStyles = restrictedGuild(18515).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  obj3.externalChildren = jsx(GuildsBarGeoRestrictedBadgeDefault, { style: tmp.geoRestrictedBadge });
  obj3.expandedChildren = jsx(HomeDrawerGuildRowDefault, { guildId: restrictedGuild.id });
  if (null != animatableSourceWithFallback) {
    const obj6 = { source: animatableSourceWithFallback, style: tmp.guildIcon, fadeDuration: 0 };
    let tmp8Result = jsx(FastImageDefault, { source: animatableSourceWithFallback, style: tmp.guildIcon, fadeDuration: 0 });
  } else {
    const obj7 = { value: restrictedGuild.name, selected: false, animate: false, size: tmp2(7083).GuildIconSizes.LARGE };
    tmp8Result = jsx(GuildIconDefault, { value: restrictedGuild.name, selected: false, animate: false, size: tmp2(7083).GuildIconSizes.LARGE });
    const tmp9Result = GuildIconDefault;
  }
  obj3.children = tmp8Result;
  return jsx(GuildsBarAnimatedItemWrapperDefault, { selected: false, unread: false, circle: false, styles: restrictedGuild(18515).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: "(function CarouselPaginationTsx1(){let[withTiming,active,STANDARD_EASING]=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');})", expandedChildren: null, children: 1 });
});