// === Module 16507: GuildsBarGeoRestrictedGuild ===

// Module 16507 (GuildsBarGeoRestrictedGuild)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4984 */;
import GuildIcon from "GuildIcon" /* 5672 */;
import FastImageDefault from "FastImage" /* 5675 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16454 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 16458 */;
import HomeDrawerGuildRowDefault from "HomeDrawerGuildRow" /* 16477 */;
import GuildsBarGeoRestrictedBadgeDefault from "GuildsBarGeoRestrictedBadge" /* 16508 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const GUILD_ITEM_BADGE_SIZE = fn(16442).GUILD_ITEM_BADGE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
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
  let obj = restrictedGuild(16454);
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
      const obj2 = { title: null, body: null, cancelText: null, onCancel: null };
      const intl = restrictedGuild(1115).intl;
      obj2.title = intl.string(restrictedGuild(1115).t.aCAiGl);
      const intl2 = restrictedGuild(1115).intl;
      obj2.body = intl2.format(restrictedGuild(1115).t["4cJV9S"], { serverName: name.name });
      const intl3 = restrictedGuild(1115).intl;
      obj2.cancelText = intl3.string(restrictedGuild(1115).t.J2TBi3);
      obj2.onCancel = function onCancel() {
        closure_2_1(dependencyMap[11]).leaveGuild(id.id);
      };
      AlertActionCreatorsDefault.show(obj2);
    }
  }), items);
  const obj3 = { selected: false, unread: false, circle: false, styles: restrictedGuild(16454).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: 0.12, expandedChildren: 0.12, children: 0.167 };
  const guildsBarAnimatedWrapperStyles = restrictedGuild(16454).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  obj3.externalChildren = jsx(GuildsBarGeoRestrictedBadgeDefault, { style: tmp.geoRestrictedBadge });
  obj3.expandedChildren = jsx(HomeDrawerGuildRowDefault, { guildId: restrictedGuild.id });
  if (null != animatableSourceWithFallback) {
    const obj6 = { source: animatableSourceWithFallback, style: tmp.guildIcon, fadeDuration: 0 };
    let tmp8Result = jsx(FastImageDefault, { source: animatableSourceWithFallback, style: tmp.guildIcon, fadeDuration: 0 });
  } else {
    const obj7 = { value: restrictedGuild.name, selected: false, animate: false, size: tmp2(5672).GuildIconSizes.LARGE };
    tmp8Result = jsx(GuildIconDefault, { value: restrictedGuild.name, selected: false, animate: false, size: tmp2(5672).GuildIconSizes.LARGE });
    const tmp9Result = GuildIconDefault;
  }
  obj3.children = tmp8Result;
  return jsx(GuildsBarAnimatedItemWrapperDefault, { selected: false, unread: false, circle: false, styles: restrictedGuild(16454).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: 0.12, expandedChildren: 0.12, children: 0.167 });
});