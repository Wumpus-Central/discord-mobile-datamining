// discord_app/modules/premium/powerups/native/GuildThemeMemberCoachmark.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../a11y/AccessibilityStore.tsx";
import closure_5 from "../GuildPowerupsStore.tsx";
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_6 } from "../constants/GuildPowerupsConstants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
createCacheKey = { coachmarkImage: null };
createCacheKey = { height: 120, width: 260 - 2 * ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildThemeMemberCoachmark.tsx");

export default function GuildThemeMemberCoachmark(guildId) {
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  dependencyMap = undefined;
  let stateFromStores1;
  let guildPowerupBannerImage;
  c5 = undefined;
  let callback;
  let callback1;
  const tmp = callback();
  dependencyMap = tmp;
  const items = [c5];
  const items1 = [guildId];
  const stateFromStores = guildId(589).useStateFromStores(items, () => {
    const stateForGuild = _undefined.getStateForGuild(guildId);
    let tmp2;
    if (stateForGuild != null) {
      tmp2 = stateForGuild.allPowerups[guildId(undefined, 4270).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
    return tmp2;
  }, items1);
  let obj = guildId(589);
  let tmp2 = guildId;
  const items2 = [guildPowerupBannerImage];
  stateFromStores1 = guildId(589).useStateFromStores(items2, () => guildPowerupBannerImage.useReducedMotion);
  const obj2 = guildId(589);
  guildPowerupBannerImage = guildId(12080).getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (guildPowerupBannerImage == null) {
    guildPowerupBannerImage = markAsDismissed(15527);
  }
  const diff = callback - markAsDismissed(4286)(guildId).available;
  c5 = diff;
  const items3 = [markAsDismissed];
  callback = stateFromStores1.useCallback(() => {
    markAsDismissed(callback1.USER_DISMISS);
  }, items3);
  const items4 = [diff, guildId, markAsDismissed];
  callback1 = stateFromStores1.useCallback(() => {
    markAsDismissed(callback1.TAKE_ACTION);
    if (c5 > 0) {
      guildId(5258).openApplyBoostModal(guildId);
      const obj = guildId(5258);
    }
  }, items4);
  const items5 = [callback, callback1, guildPowerupBannerImage, tmp.coachmarkImage, stateFromStores1];
  const memo = stateFromStores1.useMemo(() => {
    const obj = { title: null, description: null, visible: true, position: "bottom", offsetY: 8, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = guildId(1236).intl;
    obj[0] = intl.string(markAsDismissed(2369).RK6NbY);
    const intl2 = guildId(1236).intl;
    obj[1] = intl2.string(markAsDismissed(2369).xlAqGk);
    obj[5] = callback;
    obj[6] = function renderImgComponent() {
      return closure_1_8(closure_1_1(closure_1_2[16]), { imageUrl: closure_4, isAnimated: !closure_3, style: coachmarkImage.coachmarkImage });
    };
    const intl3 = guildId(1236).intl;
    obj[7] = intl3.string(guildId(1236).t.oPAx73);
    obj[9] = callback1;
    return obj;
  }, items5);
  const obj3 = guildId(12080);
  const coachmark = tmp2(8800).useCoachmark(guildId.targetRef, memo);
  return null;
};