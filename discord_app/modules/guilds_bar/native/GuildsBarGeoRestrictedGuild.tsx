// discord_app/modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper.tsx";
import computeGuildsBarCutoutDefault from "utils/computeGuildsBarCutout.tsx";
import HomeDrawerGuildRowDefault from "../../home_drawer/native/HomeDrawerGuildRow.tsx";
import GuildsBarGeoRestrictedBadgeDefault from "GuildsBarGeoRestrictedBadge.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;

require = fn;
const GUILD_ITEM_BADGE_SIZE = fn(16218).GUILD_ITEM_BADGE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { guildIcon: null, geoRestrictedBadge: null };
let size = {
  width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
obj.guildIcon = size;
obj.geoRestrictedBadge = {
  borderColor: "transparent",
  width: GUILD_ITEM_BADGE_SIZE,
  height: GUILD_ITEM_BADGE_SIZE,
  bottom: 4,
  right: 12,
};
let closure_5 = createStyles.createStyles(obj);
let items = [computeGuildsBarCutoutDefault({ position: "bottom-right" })];
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (restrictedGuild) => {
        const cResult = restrictedGuild(576).c(22);
        restrictedGuild = restrictedGuild.restrictedGuild;
        let name = closure_5();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { disableSelectedColor: true, disableBGColor: true };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        let obj = restrictedGuild(576);
        const guildsBarAnimatedWrapperStyles = restrictedGuild(16230).useGuildsBarAnimatedWrapperStyles(first);
        if (cResult[1] === restrictedGuild.icon) {
          if (cResult[2] === restrictedGuild.id) {
            let tmp6 = cResult[3];
          }
          if (cResult[4] === restrictedGuild.id) {
            if (cResult[5] === restrictedGuild.name) {
              let tmp9 = cResult[6];
            }
            if (cResult[7] !== name.geoRestrictedBadge) {
              const obj3 = { style: name.geoRestrictedBadge };
              const tmp13 = jsx(GuildsBarGeoRestrictedBadgeDefault, { style: name.geoRestrictedBadge });
              cResult[7] = name.geoRestrictedBadge;
              cResult[8] = tmp13;
              let tmp10 = tmp13;
            } else {
              tmp10 = cResult[8];
            }
            if (cResult[9] !== restrictedGuild.id) {
              const obj5 = { guildId: restrictedGuild.id };
              const tmp17 = jsx(HomeDrawerGuildRowDefault, { guildId: restrictedGuild.id });
              cResult[9] = restrictedGuild.id;
              cResult[10] = tmp17;
              let tmp14 = tmp17;
            } else {
              tmp14 = cResult[10];
            }
            if (cResult[11] === tmp6) {
              if (cResult[12] === name.guildIcon) {
                if (cResult[13] === restrictedGuild.name) {
                  if (cResult[15] === tmp9) {
                    if (cResult[16] === restrictedGuild.name) {
                      if (cResult[17] === tmp10) {
                        if (cResult[18] === tmp14) {
                          if (cResult[19] === tmp18) {
                            if (cResult[20] === guildsBarAnimatedWrapperStyles) {
                              let tmp27 = cResult[21];
                            }
                            return tmp27;
                          }
                        }
                      }
                    }
                  }
                  const obj6 = {
                    selected: false,
                    unread: false,
                    circle: false,
                    styles: guildsBarAnimatedWrapperStyles,
                    label: restrictedGuild.name,
                    isDragTarget: false,
                    config: tmp9,
                    cutouts: items,
                    overState: "a",
                    externalChildren: tmp10,
                    expandedChildren: tmp14,
                    children: cResult[14],
                  };
                  const tmp31 = jsx(GuildsBarAnimatedItemWrapperDefault, {
                    selected: false,
                    unread: false,
                    circle: false,
                    styles: guildsBarAnimatedWrapperStyles,
                    label: restrictedGuild.name,
                    isDragTarget: false,
                    config: tmp9,
                    cutouts: items,
                    overState: "a",
                    externalChildren: tmp10,
                    expandedChildren: tmp14,
                    children: cResult[14],
                  });
                  cResult[15] = tmp9;
                  cResult[16] = restrictedGuild.name;
                  cResult[17] = tmp10;
                  cResult[18] = tmp14;
                  cResult[19] = cResult[14];
                  cResult[20] = guildsBarAnimatedWrapperStyles;
                  cResult[21] = tmp31;
                  tmp27 = tmp31;
                }
              }
            }
            if (null != tmp6) {
              const obj7 = { source: tmp6, style: name.guildIcon, fadeDuration: 0 };
              let tmp23 = jsx(FastImageDefault, { source: tmp6, style: name.guildIcon, fadeDuration: 0 });
            } else {
              const obj8 = {
                value: restrictedGuild.name,
                selected: false,
                animate: false,
                size: tmp(5971).GuildIconSizes.LARGE,
              };
              tmp23 = jsx(GuildIconDefault, {
                value: restrictedGuild.name,
                selected: false,
                animate: false,
                size: tmp(5971).GuildIconSizes.LARGE,
              });
            }
            cResult[11] = tmp6;
            cResult[12] = name.guildIcon;
            name = restrictedGuild.name;
            cResult[13] = name;
            cResult[14] = tmp23;
          }
          const obj9 = {
            onPress() {
              const obj2 = { title: null, body: null, cancelText: null, onCancel: null, isDismissable: false };
              const intl = util.intl;
              obj2.title = intl.string(util.t.aCAiGl);
              const intl2 = util.intl;
              obj2.body = intl2.format(util.t["4cJV9S"], { serverName: restrictedGuild.name });
              const intl3 = util.intl;
              obj2.cancelText = intl3.string(util.t.J2TBi3);
              obj2.onCancel = function onCancel() {
                GuildSettingsActionCreatorsDefault.leaveGuild(id.id);
              };
              AlertActionCreatorsDefault.show(obj2);
            },
          };
          cResult[4] = restrictedGuild.id;
          cResult[5] = restrictedGuild.name;
          cResult[6] = obj9;
          tmp9 = obj9;
        }
        let animatableSourceWithFallback = null;
        if (null != restrictedGuild.icon) {
          animatableSourceWithFallback = AvatarUtilsDefault.getAnimatableSourceWithFallback(false, (canAnimate) => {
            const obj = AvatarUtilsDefault;
            return obj.getGuildIconSource({
              id: restrictedGuild.id,
              size: GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE],
              icon: restrictedGuild.icon,
              canAnimate,
            });
          });
        }
        cResult[1] = restrictedGuild.icon;
        cResult[2] = restrictedGuild.id;
        cResult[3] = animatableSourceWithFallback;
        tmp6 = animatableSourceWithFallback;
        const tmpResult = restrictedGuild(16230);
      }
    : (restrictedGuild) => {
        restrictedGuild = restrictedGuild.restrictedGuild;
        const tmp = closure_5();
        let animatableSourceWithFallback = null;
        let obj = restrictedGuild(16230);
        const tmp2 = restrictedGuild;
        if (null != restrictedGuild.icon) {
          animatableSourceWithFallback = AvatarUtilsDefault.getAnimatableSourceWithFallback(false, (canAnimate) => {
            const obj = AvatarUtilsDefault;
            return obj.getGuildIconSource({
              id: restrictedGuild.id,
              size: GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE],
              icon: restrictedGuild.icon,
              canAnimate,
            });
          });
        }
        items = [,];
        ({ id: arr[0], name: arr[1] } = restrictedGuild);
        const memo = noop.useMemo(
          () => ({
            onPress() {
              const obj2 = { title: null, body: null, cancelText: null, onCancel: null, isDismissable: false };
              const intl = restrictedGuild(1126).intl;
              obj2.title = intl.string(restrictedGuild(1126).t.aCAiGl);
              const intl2 = restrictedGuild(1126).intl;
              obj2.body = intl2.format(restrictedGuild(1126).t["4cJV9S"], { serverName: name.name });
              const intl3 = restrictedGuild(1126).intl;
              obj2.cancelText = intl3.string(restrictedGuild(1126).t.J2TBi3);
              obj2.onCancel = function onCancel() {
                closure_2_1(dependencyMap[13]).leaveGuild(id.id);
              };
              AlertActionCreatorsDefault.show(obj2);
            },
          }),
          items,
        );
        const obj3 = {
          selected: false,
          unread: false,
          circle: false,
          styles: restrictedGuild(16230).useGuildsBarAnimatedWrapperStyles({
            disableSelectedColor: true,
            disableBGColor: true,
          }),
          label: restrictedGuild.name,
          isDragTarget: false,
          config: memo,
          cutouts: items,
          overState: "a",
          externalChildren: 28,
          expandedChildren: 480,
          children: "center",
        };
        const guildsBarAnimatedWrapperStyles = restrictedGuild(16230).useGuildsBarAnimatedWrapperStyles({
          disableSelectedColor: true,
          disableBGColor: true,
        });
        obj3.externalChildren = jsx(GuildsBarGeoRestrictedBadgeDefault, { style: tmp.geoRestrictedBadge });
        obj3.expandedChildren = jsx(HomeDrawerGuildRowDefault, { guildId: restrictedGuild.id });
        if (null != animatableSourceWithFallback) {
          const obj6 = { source: animatableSourceWithFallback, style: tmp.guildIcon, fadeDuration: 0 };
          let tmp8Result = jsx(FastImageDefault, {
            source: animatableSourceWithFallback,
            style: tmp.guildIcon,
            fadeDuration: 0,
          });
        } else {
          const obj7 = {
            value: restrictedGuild.name,
            selected: false,
            animate: false,
            size: tmp2(5971).GuildIconSizes.LARGE,
          };
          tmp8Result = jsx(GuildIconDefault, {
            value: restrictedGuild.name,
            selected: false,
            animate: false,
            size: tmp2(5971).GuildIconSizes.LARGE,
          });
          const tmp9Result = GuildIconDefault;
        }
        obj3.children = tmp8Result;
        return jsx(GuildsBarAnimatedItemWrapperDefault, {
          selected: false,
          unread: false,
          circle: false,
          styles: restrictedGuild(16230).useGuildsBarAnimatedWrapperStyles({
            disableSelectedColor: true,
            disableBGColor: true,
          }),
          label: restrictedGuild.name,
          isDragTarget: false,
          config: memo,
          cutouts: items,
          overState: "a",
          externalChildren: 28,
          expandedChildren: 480,
          children: "center",
        });
      },
);
