import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_6 } from "BoostedGuildTiers";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { coachmarkImage: null };
createCacheKey = { height: 120, width: 260 - 2 * require("Themes").space.PX_16, borderRadius: require("Themes").radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("calculateAppliedBoosts").fileFinishedImporting("modules/premium/powerups/native/GuildThemeMemberCoachmark.tsx");

export default function GuildThemeMemberCoachmark(guildId) {
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  let dependencyMap;
  let stateFromStores1;
  let guildPowerupBannerImage;
  let c5;
  let callback;
  let callback1;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  const items = [c5];
  const items1 = [guildId];
  const stateFromStores = guildId(589).useStateFromStores(items, () => {
    const stateForGuild = _undefined2.getStateForGuild(guildId);
    let tmp2;
    if (stateForGuild != null) {
      tmp2 = stateForGuild.allPowerups[guildId(undefined, _undefined[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
    return tmp2;
  }, items1);
  let obj = guildId(589);
  let tmp2 = guildId;
  const items2 = [guildPowerupBannerImage];
  stateFromStores1 = guildId(589).useStateFromStores(items2, () => guildPowerupBannerImage.useReducedMotion);
  const obj2 = guildId(589);
  guildPowerupBannerImage = guildId(11793).getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (guildPowerupBannerImage == null) {
    guildPowerupBannerImage = markAsDismissed(15177);
  }
  const diff = callback - markAsDismissed(4192)(guildId).available;
  c5 = diff;
  const items3 = [markAsDismissed];
  callback = stateFromStores1.useCallback(() => {
    markAsDismissed(callback1.USER_DISMISS);
  }, items3);
  const items4 = [diff, guildId, markAsDismissed];
  callback1 = stateFromStores1.useCallback(() => {
    markAsDismissed(callback1.TAKE_ACTION);
    if (c5 > 0) {
      guildId(_undefined[13]).openApplyBoostModal(guildId);
      const obj = guildId(_undefined[13]);
    }
  }, items4);
  const items5 = [callback, callback1, guildPowerupBannerImage, tmp.coachmarkImage, stateFromStores1];
  const memo = stateFromStores1.useMemo(() => {
    const obj = { title: null, description: null, visible: true, position: "bottom", offsetY: 8, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = guildId(_undefined[14]).intl;
    obj[0] = intl.string(markAsDismissed(_undefined[15]).RK6NbY);
    const intl2 = guildId(_undefined[14]).intl;
    obj[1] = intl2.string(markAsDismissed(_undefined[15]).xlAqGk);
    obj[5] = callback;
    obj[6] = function renderImgComponent() {
      return outer1_8(outer1_1(outer1_2[16]), { imageUrl: maybeApplyNoTextColorForLightCustomTheme, isAnimated: !noop, style: coachmarkImage.coachmarkImage });
    };
    const intl3 = guildId(_undefined[14]).intl;
    obj[7] = intl3.string(guildId(_undefined[14]).t.oPAx73);
    obj[9] = callback1;
    return obj;
  }, items5);
  const obj3 = guildId(11793);
  const coachmark = tmp2(8575).useCoachmark(guildId.targetRef, memo);
  return null;
};