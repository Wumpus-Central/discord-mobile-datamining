// === Module 18215: GuildThemeMemberCoachmark ===

// Module 18215 (GuildThemeMemberCoachmark)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2570 from "module_2570" /* 2570 */;
import Powerups from "Powerups" /* 5233 */;
import BoostingActionCreators from "BoostingActionCreators" /* 6768 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5229 */;

require = fn;
let closure_6 = fn(5230).GUILD_THEME_POWERUP_BOOST_PRICE;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { coachmarkImage: null };
let size = { height: 120, width: 260 - 2 * nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md };
obj2.coachmarkImage = size;
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildThemeMemberCoachmark.tsx");

export default function GuildThemeMemberCoachmark(guildId) {
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
  guildPowerupBannerImage = guildId(14079).getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (guildPowerupBannerImage == null) {
    guildPowerupBannerImage = markAsDismissed(18216);
  }
  const diff = onDismiss - markAsDismissed(8468)(guildId).available;
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
    obj.title = intl.string(_modDef2570.RK6NbY);
    const intl2 = util.intl;
    obj.description = intl2.string(_modDef2570.xlAqGk);
    obj.onDismiss = onDismiss;
    obj.renderImgComponent = function renderImgComponent() {
      return jsx(markAsDismissed(coachmarkImage[16]), { imageUrl, isAnimated: !stateFromStores1, style: coachmarkImage.coachmarkImage });
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.oPAx73);
    obj.onButtonPress = callback1;
    return obj;
  }, items5);
  const obj3 = guildId(14079);
  const coachmark = tmp2(9954).useCoachmark(guildId.targetRef, memo);
  return null;
};