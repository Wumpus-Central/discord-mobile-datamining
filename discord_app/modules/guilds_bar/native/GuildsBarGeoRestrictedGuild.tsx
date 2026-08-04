import importAllResult from "noop";
import { GUILD_ITEM_BADGE_SIZE } from "GUILD_ITEM_SIZE";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let obj = { guildIcon: null, geoRestrictedBadge: null };
obj = { width: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
obj[1] = { borderColor: "transparent", width: GUILD_ITEM_BADGE_SIZE, height: GUILD_ITEM_BADGE_SIZE, bottom: 4, right: 12 };
let closure_5 = createCacheKey.createStyles(obj);
let items = [require("computeGuildsBarCutout")({ position: "bottom-right" })];
const memoResult = importAllResult.memo(function GuildsBarGeoRestrictedGuild(restrictedGuild) {
  restrictedGuild = restrictedGuild.restrictedGuild;
  const tmp4 = callback();
  let obj = restrictedGuild(15291);
  let animatableSourceWithFallback = null;
  const tmp3 = importDefault(1348)("GuildsBarGeoRestrictedGuild");
  const tmp5 = restrictedGuild;
  if (null != restrictedGuild.icon) {
    let tmpResult = tmp(1416);
    animatableSourceWithFallback = tmpResult.getAnimatableSourceWithFallback(false, (arg0) => {
      let obj = outer1_1(outer1_2[8]);
      obj = { id: restrictedGuild.id, size: null, icon: null, canAnimate: null };
      obj[1] = restrictedGuild(outer1_2[9]).ImageSizes[restrictedGuild(undefined, outer1_2[9]).GuildIconSizes.LARGE];
      obj[2] = restrictedGuild.icon;
      obj[3] = arg0;
      return obj.getGuildIconSource(obj);
    });
  }
  const items = [, ];
  ({ id: arr[0], name: arr[1] } = restrictedGuild);
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      let obj = outer1_1(outer1_2[10]);
      obj = { title: null, body: null, cancelText: null, onCancel: null };
      const intl = outer1_0(outer1_2[11]).intl;
      obj[0] = intl.string(outer1_0(outer1_2[11]).t.aCAiGl);
      const intl2 = outer1_0(outer1_2[11]).intl;
      obj = { serverName: name.name };
      obj[1] = intl2.format(outer1_0(outer1_2[11]).t["4cJV9S"], obj);
      const intl3 = outer1_0(outer1_2[11]).intl;
      obj[2] = intl3.string(outer1_0(outer1_2[11]).t.J2TBi3);
      obj[3] = function onCancel() {
        outer1_1(outer1_2[12]).leaveGuild(id.id);
      };
      obj.show(obj);
    }
  }), items);
  obj = { selected: false, unread: false, circle: !tmp3, styles: obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: 1, expandedChildren: 2, children: 4 };
  tmpResult = tmp(15291);
  obj = { style: tmp4.geoRestrictedBadge };
  obj[9] = jsx(importDefault(15342), { style: tmp4.geoRestrictedBadge });
  obj[10] = jsx(importDefault(15312), { guildId: restrictedGuild.id });
  if (null != animatableSourceWithFallback) {
    const obj2 = { source: null, style: null, fadeDuration: 0 };
    obj2[0] = animatableSourceWithFallback;
    obj2[1] = tmp4.guildIcon;
    let tmp9Result = tmp9(tmp(5236), obj2);
  } else {
    const obj3 = { value: null, selected: false, animate: false, size: null };
    obj3[0] = restrictedGuild.name;
    obj3[3] = tmp5(5661).GuildIconSizes.LARGE;
    tmp9Result = tmp9(tmp(5661), obj3);
    const tmpResult1 = tmp(5661);
  }
  obj[11] = tmp9Result;
  return <tmpResult style={tmp4.geoRestrictedBadge} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default memoResult;