// === Module 16169: GuildThemeMemberCoachmark ===

// Module 16169 (GuildThemeMemberCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2428 from "module_2428" /* 2428 */;
import Powerups from "Powerups" /* 4453 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5434 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

require = fn;
let closure_6 = fn(4450).GUILD_THEME_POWERUP_BOOST_PRICE;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { coachmarkImage: null };
let size = { height: 120, width: 260 - 2 * nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md };
createStyles.coachmarkImage = size;
let closure_9 = createStyles.createStyles(createStyles);
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
  guildPowerupBannerImage = guildId(12520).getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (guildPowerupBannerImage == null) {
    guildPowerupBannerImage = markAsDismissed(16170);
  }
  const diff = onDismiss - markAsDismissed(4469)(guildId).available;
  c5 = diff;
  const items3 = [markAsDismissed];
  onDismiss = stateFromStores1.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const items4 = [diff, guildId, markAsDismissed];
  callback1 = stateFromStores1.useCallback(() => {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    if (c5 > 0) {
      actions_BoostingActionCreators.openApplyBoostModal(guildId);
    }
  }, items4);
  const items5 = [onDismiss, callback1, guildPowerupBannerImage, tmp.coachmarkImage, stateFromStores1];
  const memo = stateFromStores1.useMemo(() => {
    const obj = { title: null, description: null, visible: true, position: "bottom", offsetY: 8, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef2428.RK6NbY);
    const intl2 = util.intl;
    obj.description = intl2.string(_modDef2428.xlAqGk);
    obj.onDismiss = onDismiss;
    obj.renderImgComponent = function renderImgComponent() {
      return jsx(markAsDismissed(coachmarkImage[16]), { imageUrl, isAnimated: !stateFromStores1, style: coachmarkImage.coachmarkImage });
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.oPAx73);
    obj.onButtonPress = callback1;
    return obj;
  }, items5);
  const obj3 = guildId(12520);
  const coachmark = tmp2(11127).useCoachmark(guildId.targetRef, memo);
  return null;
};