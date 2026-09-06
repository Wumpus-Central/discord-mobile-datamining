// === Module 16346: GuildsBarGeoRestrictedGuild ===

// Module 16346 (GuildsBarGeoRestrictedGuild)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import FastImageDefault from "FastImage" /* 5587 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16294 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 16297 */;
import HomeDrawerGuildRowDefault from "HomeDrawerGuildRow" /* 16316 */;
import GuildsBarGeoRestrictedBadgeDefault from "GuildsBarGeoRestrictedBadge" /* 16347 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const GUILD_ITEM_BADGE_SIZE = fn(16285).GUILD_ITEM_BADGE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
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
  let obj = restrictedGuild(16294);
  let animatableSourceWithFallback = null;
  if (null != restrictedGuild.icon) {
    let obj1 = AvatarUtilsDefault;
    animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(false, (canAnimate) => {
      const obj = { id: restrictedGuild.id, size: GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], icon: restrictedGuild.icon, canAnimate };
      return obj.getGuildIconSource(obj);
    });
  }
  items = [, ];
  ({ id: arr[0], name: arr[1] } = restrictedGuild);
  const memo = noop.useMemo(() => ({
    onPress() {
      let obj = { title: null, body: null, cancelText: null, onCancel: null };
      const intl = restrictedGuild(1114).intl;
      obj.title = intl.string(restrictedGuild(1114).t.aCAiGl);
      const intl2 = restrictedGuild(1114).intl;
      obj = { serverName: name.name };
      obj.body = intl2.format(restrictedGuild(1114).t["4cJV9S"], obj);
      const intl3 = restrictedGuild(1114).intl;
      obj.cancelText = intl3.string(restrictedGuild(1114).t.J2TBi3);
      obj.onCancel = function onCancel() {
        closure_2_1(dependencyMap[11]).leaveGuild(id.id);
      };
      obj.show(obj);
    }
  }), items);
  obj = { selected: false, unread: false, circle: false, styles: obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: 0.12, expandedChildren: 0.12, children: 0.167 };
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const tmp2 = restrictedGuild;
  obj = { style: tmp.geoRestrictedBadge };
  obj.externalChildren = jsx(GuildsBarGeoRestrictedBadgeDefault, { style: tmp.geoRestrictedBadge });
  obj1 = { guildId: restrictedGuild.id };
  obj.expandedChildren = jsx(HomeDrawerGuildRowDefault, { guildId: restrictedGuild.id });
  if (null != animatableSourceWithFallback) {
    const obj2 = { source: animatableSourceWithFallback, style: tmp.guildIcon, fadeDuration: 0 };
    let tmp8Result = jsx(FastImageDefault, { source: animatableSourceWithFallback, style: tmp.guildIcon, fadeDuration: 0 });
  } else {
    const obj3 = { value: restrictedGuild.name, selected: false, animate: false, size: tmp2(5584).GuildIconSizes.LARGE };
    tmp8Result = jsx(GuildIconDefault, { value: restrictedGuild.name, selected: false, animate: false, size: tmp2(5584).GuildIconSizes.LARGE });
    const tmp9Result = GuildIconDefault;
  }
  obj.children = tmp8Result;
  return jsx(GuildsBarAnimatedItemWrapperDefault, { style: tmp.geoRestrictedBadge });
});