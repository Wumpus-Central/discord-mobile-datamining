// === Module 16132: GuildThemeMemberCoachmark ===

// Module 16132 (GuildThemeMemberCoachmark)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef2553 from "module_2553" /* 2553 */;
import Powerups from "Powerups" /* 4777 */;
import BoostingActionCreators from "BoostingActionCreators" /* 5619 */;
import GuildPowerupsImageDefault from "GuildPowerupsImage" /* 12195 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4773 */;

require = fn;
let closure_6 = fn(4774).GUILD_THEME_POWERUP_BOOST_PRICE;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { coachmarkImage: null };
let size = { height: 120, width: 260 - 2 * nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md };
obj2.coachmarkImage = size;
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildThemeMemberCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(26);
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  let obj = guildId(576);
  dependencyMap = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        stateForGuild = closure_5.getStateForGuild(guildId);
        tmp2 = undefined;
        if (stateForGuild != null) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp2 = stateForGuild.allPowerups[closure_0(undefined, closure_2[10]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
        }
        return tmp2;
      }
    }
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = I;
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    class I {
      constructor() {
        stateForGuild = closure_5.getStateForGuild(guildId);
        tmp2 = undefined;
        if (stateForGuild != null) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp2 = stateForGuild.allPowerups[closure_0(undefined, closure_2[10]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
        }
        return tmp2;
      }
    }
    tmp8 = cResult[3];
  }
  const tmp4 = closure_9();
  const stateFromStores = guildId(504).useStateFromStores(first, I, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        stateForGuild = closure_5.getStateForGuild(guildId);
        tmp2 = undefined;
        if (stateForGuild != null) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp2 = stateForGuild.allPowerups[closure_0(undefined, closure_2[10]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
        }
        return tmp2;
      }
    }
    const items2 = [AccessibilityStore];
    const fn = function v() {
      return imageUrl.useReducedMotion;
    };
    cResult[4] = items2;
    cResult[5] = fn;
    let tmp11 = fn;
    const tmp10 = items2;
  } else {
    class I {
      constructor() {
        stateForGuild = closure_5.getStateForGuild(guildId);
        tmp2 = undefined;
        if (stateForGuild != null) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp2 = stateForGuild.allPowerups[closure_0(undefined, closure_2[10]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
        }
        return tmp2;
      }
    }
    tmp11 = cResult[5];
  }
  const tmpResult = guildId(504);
  const stateFromStores1 = guildId(504).useStateFromStores(tmp10, tmp11);
  if (cResult[6] === stateFromStores) {
    class I {
      constructor() {
        stateForGuild = closure_5.getStateForGuild(guildId);
        tmp2 = undefined;
        if (stateForGuild != null) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp2 = stateForGuild.allPowerups[closure_0(undefined, closure_2[10]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
        }
        return tmp2;
      }
    }
    AccessibilityStore = tmp13;
    const diff = closure_6 - markAsDismissed(7682)(guildId).available;
    GuildPowerupsStore = diff;
    if (cResult[9] !== markAsDismissed) {
      class R {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      cResult[9] = markAsDismissed;
      cResult[10] = R;
    } else {
      class R {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[11] === diff) {
      class R {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    class G {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        if (closure_5 > 0) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp4 = guildId;
          openApplyBoostModalResult = obj.openApplyBoostModal(guildId);
        }
        return;
      }
    }
    cResult[11] = diff;
    cResult[12] = guildId;
    cResult[13] = markAsDismissed;
    cResult[14] = G;
  }
  const tmpResult3 = guildId(504);
  let guildPowerupBannerImage = guildId(12192).getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (guildPowerupBannerImage == null) {
    class R {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    guildPowerupBannerImage = markAsDismissed(16133);
  }
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = guildPowerupBannerImage;
  tmp13 = guildPowerupBannerImage;
  const tmpResult4 = guildId(12192);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  let guildPowerupBannerImage;
  c5 = undefined;
  let onDismiss;
  let callback1;
  const tmp = closure_9();
  dependencyMap = tmp;
  const items = [c5];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
    let tmp2;
    if (stateForGuild != null) {
      tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
    return tmp2;
  }, items1);
  let obj = guildId(504);
  let tmp2 = guildId;
  const items2 = [guildPowerupBannerImage];
  const stateFromStores1 = guildId(504).useStateFromStores(items2, () => guildPowerupBannerImage.useReducedMotion);
  const obj2 = guildId(504);
  guildPowerupBannerImage = guildId(12192).getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (guildPowerupBannerImage == null) {
    guildPowerupBannerImage = markAsDismissed(16133);
  }
  const diff = onDismiss - markAsDismissed(7682)(guildId).available;
  c5 = diff;
  const items3 = [markAsDismissed];
  onDismiss = stateFromStores1.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const items4 = [diff, guildId, markAsDismissed];
  callback1 = stateFromStores1.useCallback(() => {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    if (c5 > 0) {
      BoostingActionCreators.openApplyBoostModal(guildId);
    }
  }, items4);
  const items5 = [onDismiss, callback1, guildPowerupBannerImage, tmp.coachmarkImage, stateFromStores1];
  const memo = stateFromStores1.useMemo(() => {
    const obj = { title: null, description: null, visible: true, position: "bottom", offsetY: 8, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef2553.RK6NbY);
    const intl2 = util.intl;
    obj.description = intl2.string(_modDef2553.xlAqGk);
    obj.onDismiss = onDismiss;
    obj.renderImgComponent = function renderImgComponent() {
      return jsx(markAsDismissed(coachmarkImage[18]), { imageUrl, isAnimated: !stateFromStores1, style: coachmarkImage.coachmarkImage });
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.oPAx73);
    obj.onButtonPress = callback1;
    return obj;
  }, items5);
  const obj3 = guildId(12192);
  const coachmark = tmp2(9895).useCoachmark(guildId.targetRef, memo);
  return null;
});