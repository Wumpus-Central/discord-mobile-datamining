// discord_app/modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import computeGuildsBarCutoutDefault from "utils/computeGuildsBarCutout.tsx";
import GuildRowWrapperDefault from "../../home_drawer/native/HomeDrawerGuildRow.tsx";
import _modDef15610 from "GuildsBarGeoRestrictedBadge.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { GUILD_ITEM_BADGE_SIZE } from "GuildsBarConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
  const tmp4 = callback();
  let obj = restrictedGuild(15558);
  let animatableSourceWithFallback = null;
  const tmp3 = useIsMobileVisualRefreshExperimentEnabledDefault("GuildsBarGeoRestrictedGuild");
  const tmp5 = restrictedGuild;
  if (null != restrictedGuild.icon) {
    let tmpResult = tmp(1435);
    animatableSourceWithFallback = tmpResult.getAnimatableSourceWithFallback(false, (canAnimate) => {
      let obj = closure_1_1(closure_1_2[8]);
      obj = { id: restrictedGuild.id, size: restrictedGuild(closure_1_2[9]).ImageSizes[restrictedGuild(undefined, closure_1_2[9]).GuildIconSizes.LARGE], icon: restrictedGuild.icon, canAnimate };
      return obj.getGuildIconSource(obj);
    });
  }
  items = [, ];
  ({ id: arr[0], name: arr[1] } = restrictedGuild);
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      let obj = closure_1_1(closure_1_2[10]);
      obj = { title: null, body: null, cancelText: null, onCancel: null };
      const intl = closure_1_0(closure_1_2[11]).intl;
      obj[0] = intl.string(closure_1_0(closure_1_2[11]).t.aCAiGl);
      const intl2 = closure_1_0(closure_1_2[11]).intl;
      obj = { serverName: name.name };
      obj[1] = intl2.format(closure_1_0(closure_1_2[11]).t["4cJV9S"], obj);
      const intl3 = closure_1_0(closure_1_2[11]).intl;
      obj[2] = intl3.string(closure_1_0(closure_1_2[11]).t.J2TBi3);
      obj[3] = function onCancel() {
        closure_1_1(closure_1_2[12]).leaveGuild(id.id);
      };
      obj.show(obj);
    }
  }), items);
  obj = { selected: false, unread: false, circle: !tmp3, styles: obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: 1, expandedChildren: 2, children: 4 };
  tmpResult = tmp(15558);
  obj = { style: tmp4.geoRestrictedBadge };
  obj[9] = jsx(_modDef15610, { style: tmp4.geoRestrictedBadge });
  obj[10] = jsx(GuildRowWrapperDefault, { guildId: restrictedGuild.id });
  if (null != animatableSourceWithFallback) {
    const obj2 = { source: null, style: null, fadeDuration: 0 };
    obj2[0] = animatableSourceWithFallback;
    obj2[1] = tmp4.guildIcon;
    let tmp9Result = tmp9(tmp(5449), obj2);
  } else {
    const obj3 = { value: null, selected: false, animate: false, size: null };
    obj3[0] = restrictedGuild.name;
    obj3[3] = tmp5(7188).GuildIconSizes.LARGE;
    tmp9Result = tmp9(tmp(7188), obj3);
    const tmpResult1 = tmp(7188);
  }
  obj[11] = tmp9Result;
  return <tmpResult style={tmp4.geoRestrictedBadge} />;
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default memoResult;