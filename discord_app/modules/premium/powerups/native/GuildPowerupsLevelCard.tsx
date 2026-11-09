// === Module 14382: GuildPowerupsLevelCard ===

// Module 14382 (GuildPowerupsLevelCard)
import nativeDefault from "native" /* 575 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import Text_Text from "Text/Text" /* 5751 */;
import BoostGemIcon from "BoostGemIcon" /* 10042 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 14315 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 14336 */;
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter" /* 14341 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 14384 */;
import GuildPowerupsCardDefault from "GuildPowerupsCard" /* 14385 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildLevelPowerupHeader(arg0) {
  ({ active, nextActive, position } = arg0);
  const tmp = closure_12();
  if (active) {
    if (false !== nextActive) {
      items = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerActive.backgroundColor];
      let items6 = items;
    }
    const obj = { style: tmp.progressContainer, children: null };
    const obj3 = { start: null, end: null, colors: null, style: null };
    ({ START: obj2.start, END: obj2.end } = React5);
    obj3.colors = items6;
    const items1 = [tmp.progress, , ];
    let progressStart = position === constants.START;
    if (progressStart) {
      progressStart = tmp.progressStart;
    }
    items1[1] = progressStart;
    items1[2] = position === constants.END && tmp.progressEnd;
    obj3.style = items1;
    const items2 = [closure_1_10(LinearGradientDefault, obj3), , ];
    const obj4 = { style: null };
    const items3 = [, ];
    ({ boostContainer: arr6[0], boostContainerBackground: arr6[1] } = tmp);
    obj4.style = items3;
    items2[1] = closure_1_10(View, obj4);
    const items4 = [tmp.boostContainer, ];
    let boostContainerActive = active;
    if (active) {
      boostContainerActive = tmp.boostContainerActive;
    }
    const obj5 = { style: null, children: null };
    items4[1] = boostContainerActive;
    obj5.style = items4;
    const colors = nativeDefault.colors;
    const obj9 = { size: "xs", color: active ? colors.WHITE : colors.TEXT_MUTED };
    obj5.children = closure_1_10(BoostGemIcon.BoostGemIcon, obj9);
    items2[2] = closure_1_10(View, obj5);
    obj.children = items2;
    return closure_1_11(View, obj);
  }
  if (active) {
    if (false === nextActive) {
      const items5 = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerInactive.backgroundColor];
      items6 = items5;
    }
  }
  items6 = [tmp.boostContainerInactive.backgroundColor, tmp.boostContainerInactive.backgroundColor];
}
class GuildPowerupLevelBody {
  constructor(arg0) {
    index = global.index;
    closure_1 = undefined;
    textColor = undefined;
    iconColor = undefined;
    tmp = closure_12();
    closure_1 = tmp;
    tmp2 = closure_1(textColor[10])(global.isActive);
    textColor = tmp2.textColor;
    iconColor = tmp2.iconColor;
    items = [, , , ];
    items[0] = index;
    items[1] = iconColor;
    items[2] = textColor;
    items[3] = tmp;
    obj = { style: tmp.perkRowContainer, children: null };
    items1 = [, ];
    items1[0] = iconColor.useMemo(() => {
      if (null == TIER_CARDS[index]) {
        return [];
      } else {
        if (tmp.tier === TIER_3.TIER_3) {
          const perks = tmp.perks;
          let substr = perks.slice(0, -1);
        } else {
          substr = tmp.perks;
        }
        let mapped;
        if (substr != null) {
          mapped = substr.map((perkIcon, index) => {
            const obj2 = { style: closure_1_1.perkRowStyle, children: null };
            items = [closure_2_10(index(textColor[11]).getIconForPerk(perkIcon.perkIcon), { color: color2, size: "sm" }), ];
            const obj = index(textColor[11]);
            const obj3 = { color: color2, size: "sm" };
            items[1] = closure_2_10(index(textColor[12]).Text, { color, style: closure_1_1.perkText, variant: "body-sm/normal", children: perkIcon.getCopy() });
            obj2.children = items;
            return closure_2_11(View, obj2, "perk-" + closure_1_0 + "-" + index);
          });
        }
        return mapped;
      }
    }, items);
    obj1 = { style: tmp.perkRow, children: null };
    obj4 = { color: textColor, variant: "body-sm/normal", children: null };
    intl = index(textColor[13]).intl;
    obj4.children = intl.string(closure_1(textColor[14]).nIj3LZ);
    obj1.children = jsx(index(textColor[12]).Text, obj4);
    items1[1] = jsx(View, obj1);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
const View = fn(17).View;
const GuildPowerupsConstants = fn(5346);
({ LevelCardPosition: hasOwnProperty, PowerupActiveStatusType: closure_6 } = GuildPowerupsConstants);
const Constants = fn(1072);
({ BoostedGuildTiers: metroImportDefault, HorizontalGradient: closure_8 } = Constants);
const TIER_CARDS = fn(14383).TIER_CARDS;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { cardContainer: { flex: 1 }, card: { padding: 0, overflow: "hidden", flex: 1 }, progressContainer: { marginVertical: nativeDefault.space.PX_24, position: "relative" }, progress: null, progressStart: null, progressEnd: null, boostContainerBackground: null, boostContainer: null, boostContainerActive: null, boostContainerInactive: null, contentContainer: null, perkRowContainer: null, perkRow: null, perkRowStyle: null, perkText: null, footerContainer: null };
let obj3 = { marginVertical: nativeDefault.space.PX_24, position: "relative" };
obj2.progress = { height: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj4 = { height: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.progressStart = { marginStart: nativeDefault.space.PX_16 };
let obj5 = { marginStart: nativeDefault.space.PX_16 };
obj2.progressEnd = { marginEnd: nativeDefault.space.PX_16, borderTopEndRadius: nativeDefault.radii.round, borderBottomEndRadius: nativeDefault.radii.round };
let size = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, width: 28, height: 28, start: nativeDefault.space.PX_16 - 2, top: -11 };
obj2.boostContainerBackground = size;
const size1 = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, position: "absolute", width: 24, height: 24, top: -9, start: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.boostContainer = size1;
let obj6 = { marginEnd: nativeDefault.space.PX_16, borderTopEndRadius: nativeDefault.radii.round, borderBottomEndRadius: nativeDefault.radii.round };
obj2.boostContainerActive = { backgroundColor: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
const obj7 = { backgroundColor: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
obj2.boostContainerInactive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
const obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.contentContainer = { padding: nativeDefault.space.PX_16, paddingTop: 0, flex: 1 };
let obj9 = { padding: nativeDefault.space.PX_16, paddingTop: 0, flex: 1 };
obj2.perkRowContainer = { flexDirection: "column", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.perkRow = { flexDirection: "row", alignItems: "center" };
obj2.perkRowStyle = { flexDirection: "row", alignItems: "center" };
const obj10 = { flexDirection: "column", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.perkText = { marginStart: nativeDefault.space.PX_8 };
const obj11 = { marginStart: nativeDefault.space.PX_8 };
obj2.footerContainer = { marginTop: "auto", paddingTop: nativeDefault.space.PX_16 };
const application_id = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelCard.tsx");

export default function GuildPowerupsLevelCard(arg0) {
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  const tmp = closure_12();
  const tmp4 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp5 = usePowerupActiveStatusDefault(guildId, nextPowerup);
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp4, false);
  const tmp8 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  closure_1 = tmp8;
  if (0 === index) {
    let MIDDLE = constants.START;
  } else if (null == nextPowerup) {
    MIDDLE = constants.END;
  } else {
    MIDDLE = constants.MIDDLE;
  }
  items = [isScrollingRef, tmp8];
  const callback = noop.useCallback(() => {
    if (!isScrollingRef.current) {
      closure_1();
    }
  }, items);
  const obj2 = { containerStyle: tmp.cardContainer, style: tmp.card, onPress: callback, status: calculatePowerupCardStatus, children: null };
  const obj3 = { position: MIDDLE, active: tmp4.type !== constants2.INACTIVE, nextActive: null };
  let tmp19;
  if (null != nextPowerup) {
    tmp19 = tmp5.type !== constants2.INACTIVE;
  }
  obj3.nextActive = tmp19;
  const items1 = [closure_1_10(GuildLevelPowerupHeader, obj3), ];
  const obj4 = { style: tmp.contentContainer, children: null };
  const items2 = [closure_1_10(Text_Text.Text, { color: "text-strong", variant: "heading-md/semibold", children: powerup.title }), closure_1_10(GuildPowerupLevelBody, { isActive: tmp4.type !== constants2.INACTIVE, index }), ];
  const obj6 = { style: tmp.footerContainer, children: closure_1_10(GuildPowerupsCardFooter.GuildPowerupsCardFooter, { cost: powerup.cost, status: calculatePowerupCardStatus }) };
  items2[2] = closure_1_10(View, obj6);
  obj4.children = items2;
  items1[1] = closure_1_11(View, obj4);
  obj2.children = items1;
  return closure_1_11(GuildPowerupsCardDefault, obj2);
};
export { GuildPowerupLevelBody };