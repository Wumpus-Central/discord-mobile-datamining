// === Module 16093: GuildThemeMemberCoachmark ===

// Module 16093 (GuildThemeMemberCoachmark)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _modDef2525 from "module_2525" /* 2525 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import Powerups from "Powerups" /* 4771 */;
import BoostingActionCreators from "BoostingActionCreators" /* 5612 */;
import GuildPowerupsImageDefault from "GuildPowerupsImage" /* 12180 */;
import react from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4879 */;
import GuildPowerupsStore_mod from "GuildPowerupsStore" /* 4767 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, guildId;

let size;
let AccessibilityStore = AccessibilityStore_mod;
let GuildPowerupsStore = GuildPowerupsStore_mod;
let closure_6 = GuildPowerupsConstants.GUILD_THEME_POWERUP_BOOST_PRICE;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { coachmarkImage: size };
size = { height: 120, width: 260 - 2 * nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md };
let closure_9 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let coachmarkImage;
  let first;
  let imageUrl;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp8;
  let tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(26);
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  dependencyMap = closure_9();
  closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
        let tmp2;
        if (stateForGuild != null) {
          tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
        }
        return tmp2;
      }
    }
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = I;
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    class I {
      constructor() {
        const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
        let tmp2;
        if (stateForGuild != null) {
          tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
        }
        return tmp2;
      }
    }
    tmp8 = cResult[3];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, I, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
        let tmp2;
        if (stateForGuild != null) {
          tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
        }
        return tmp2;
      }
    }
    const items2 = [AccessibilityStore];
    const fn = function v() {
      return AccessibilityStore.useReducedMotion;
    };
    cResult[4] = items2;
    cResult[5] = fn;
    tmp11 = fn;
    tmp10 = items2;
  } else {
    class I {
      constructor() {
        const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
        let tmp2;
        if (stateForGuild != null) {
          tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
        }
        return tmp2;
      }
    }
    tmp11 = cResult[5];
  }
  const tmpResult3 = guildId(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp10, tmp11);
  if (cResult[6] === stateFromStores) {
    class I {
      constructor() {
        const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
        let tmp2;
        if (stateForGuild != null) {
          tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
        }
        return tmp2;
      }
    }
    AccessibilityStore = tmp13;
    const diff = closure_6 - markAsDismissed(7671)(guildId).available;
    GuildPowerupsStore = diff;
    if (cResult[9] !== markAsDismissed) {
      class R {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      cResult[9] = markAsDismissed;
      cResult[10] = R;
    } else {
      class R {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[11] === diff) {
      class R {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    class G {
      constructor() {
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        if (GuildPowerupsStore > 0) {
          const obj = BoostingActionCreators;
          obj.openApplyBoostModal(guildId);
        }
      }
    }
    cResult[11] = diff;
    cResult[12] = guildId;
    cResult[13] = markAsDismissed;
    cResult[14] = G;
  }
  const tmpResult4 = guildId(12177);
  let guildPowerupBannerImage = tmpResult4.getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (guildPowerupBannerImage == null) {
    class R {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    guildPowerupBannerImage = markAsDismissed(16094);
  }
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = guildPowerupBannerImage;
  tmp13 = guildPowerupBannerImage;
}) : ((guildId) => {
  let closure_2;
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  let guildPowerupBannerImage;
  let c5;
  let onDismiss;
  let callback1;
  const targetRef = guildId.targetRef;
  const tmp = closure_9();
  dependencyMap = tmp;
  let tmp2 = guildId;
  let obj = guildId(504);
  const items = [c5];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
    let tmp2;
    if (stateForGuild != null) {
      tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
    return tmp2;
  }, items1);
  const items2 = [guildPowerupBannerImage];
  const obj2 = guildId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => guildPowerupBannerImage.useReducedMotion);
  const obj3 = guildId(12177);
  guildPowerupBannerImage = obj3.getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (guildPowerupBannerImage == null) {
    guildPowerupBannerImage = markAsDismissed(16094);
  }
  const diff = onDismiss - markAsDismissed(7671)(guildId).available;
  c5 = diff;
  const items3 = [markAsDismissed];
  onDismiss = stateFromStores1.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const items4 = [diff, guildId, markAsDismissed];
  callback1 = stateFromStores1.useCallback(() => {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    if (c5 > 0) {
      const obj = BoostingActionCreators;
      obj.openApplyBoostModal(guildId);
    }
  }, items4);
  const items5 = [onDismiss, callback1, guildPowerupBannerImage, tmp.coachmarkImage, stateFromStores1];
  const memo = stateFromStores1.useMemo(() => {
    let coachmarkImage;
    let imageUrl;
    let intl;
    let intl2;
    let intl3;
    const obj = {
      title: intl.string(_modDef2525.RK6NbY),
      description: intl2.string(_modDef2525.xlAqGk),
      visible: true,
      position: "bottom",
      offsetY: 8,
      onDismiss,
      renderImgComponent() {
        return jsx(markAsDismissed(coachmarkImage[18]), { imageUrl, isAnimated: !stateFromStores1, style: coachmarkImage.coachmarkImage });
      },
      buttonLabel: intl3.string(intl4.t.oPAx73),
      buttonVariant: "primary",
      onButtonPress: callback1
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    return obj;
  }, items5);
  const tmp2Result = tmp2(9882);
  const coachmark = tmp2Result.useCoachmark(targetRef, memo);
  return null;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildThemeMemberCoachmark.tsx");

export default tmp2;