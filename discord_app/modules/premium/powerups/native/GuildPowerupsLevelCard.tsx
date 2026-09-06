// discord_app/modules/premium/powerups/native/GuildPowerupsLevelCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import BoostGemIcon from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import usePowerupActiveStatusDefault from "../hooks/usePowerupActiveStatus.tsx";
import useCalculatePowerupCardStatus from "../utils/useCalculatePowerupCardStatus.tsx";
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter.tsx";
import useGuildPowerupOnShowMoreDefault from "hooks/useGuildPowerupOnShowMore.tsx";
import GuildPowerupsCardDefault from "GuildPowerupsCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function GuildLevelPowerupHeader(arg0) {
  ({ active, nextActive, position } = arg0);
  const tmp = closure_12();
  if (active) {
    if (false !== nextActive) {
      const items = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerActive.backgroundColor];
      let items6 = items;
    }
    let obj = { style: tmp.progressContainer, children: null };
    obj = { start: null, end: null, colors: null, style: null };
    ({ START: obj2.start, END: obj2.end } = React6);
    obj.colors = items6;
    const items1 = [tmp.progress, ,];
    let progressStart = position === constants.START;
    if (progressStart) {
      progressStart = tmp.progressStart;
    }
    items1[1] = progressStart;
    items1[2] = position === constants.END && tmp.progressEnd;
    obj.style = items1;
    const items2 = [closure_1_10(LinearGradientDefault, obj), ,];
    obj = { style: null };
    const items3 = [,];
    ({ boostContainer: arr6[0], boostContainerBackground: arr6[1] } = tmp);
    obj.style = items3;
    items2[1] = closure_1_10(View, obj);
    const items4 = [tmp.boostContainer];
    let boostContainerActive = active;
    if (active) {
      boostContainerActive = tmp.boostContainerActive;
    }
    const obj1 = { style: null, children: null };
    items4[1] = boostContainerActive;
    obj1.style = items4;
    const colors = nativeDefault.colors;
    const obj2 = { size: "xs", color: active ? colors.WHITE : colors.TEXT_MUTED };
    obj1.children = closure_1_10(BoostGemIcon.BoostGemIcon, obj2);
    items2[2] = closure_1_10(View, obj1);
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
    closure_2 = undefined;
    textColor = undefined;
    iconColor = undefined;
    tmp = closure_12();
    closure_1 = tmp;
    tmp3 = closure_2;
    tmp2 = index;
    obj = index(closure_2[10]);
    manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupLevelBody");
    closure_2 = manaTypeConsolidationExperiment;
    tmp5 = closure_1;
    tmp6 = closure_1(closure_2[11])(global.isActive);
    textColor = tmp6.textColor;
    iconColor = tmp6.iconColor;
    items = [, , , ,];
    items[0] = index;
    items[1] = iconColor;
    items[2] = textColor;
    items[3] = tmp;
    items[4] = manaTypeConsolidationExperiment;
    tmp8 = iconColor;
    obj = { style: tmp.perkRowContainer, children: null };
    items1 = [,];
    items1[0] = textColor.useMemo(() => {
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
            index(manaTypeConsolidationExperiment[12]);
            let obj = { style: closure_1_1.perkRowStyle, children: null };
            obj = { color: color2, size: "sm" };
            const items = [closure_2_10(obj.getIconForPerk(perkIcon.perkIcon), obj)];
            const obj1 = { color, style: closure_1_1.perkText, variant: null, children: null };
            let str = "text-sm/medium";
            if (closure_1_2) {
              str = "experimental/body-sm/normal";
            }
            obj1.variant = str;
            obj1.children = perkIcon.getCopy();
            items[1] = closure_2_10(index(manaTypeConsolidationExperiment[13]).Text, obj1);
            obj.children = items;
            return closure_2_11(iconColor, obj, "perk-" + closure_1_0 + "-" + index);
          });
        }
        return mapped;
      }
    }, items);
    tmp9 = jsx;
    obj1 = { style: tmp.perkRow, children: null };
    tmp7 = jsxs;
    obj2 = { color: textColor, variant: null, children: null };
    str = "text-sm/medium";
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-sm/normal";
    }
    obj2.variant = str;
    intl = tmp2(tmp3[14]).intl;
    obj2.children = intl.string(tmp5(tmp3[15]).nIj3LZ);
    obj1.children = tmp9(index(closure_2[13]).Text, obj2);
    items1[1] = tmp9(tmp8, obj1);
    obj.children = items1;
    return tmp7(tmp8, obj);
  }
}
const View = fn(17).View;
const GuildPowerupsConstants = fn(4450);
({ LevelCardPosition: hasOwnProperty, PowerupActiveStatusType: metroRequire } = GuildPowerupsConstants);
const Constants = fn(1074);
({ BoostedGuildTiers: closure_7, HorizontalGradient: closure_8 } = Constants);
const TIER_CARDS = fn(12566).TIER_CARDS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  cardContainer: { flex: 1 },
  card: { padding: 0, overflow: "hidden", flex: 1 },
  progressContainer: null,
  progress: null,
  progressStart: null,
  progressEnd: null,
  boostContainerBackground: null,
  boostContainer: null,
  boostContainerActive: null,
  boostContainerInactive: null,
  contentContainer: null,
  perkRowContainer: null,
  perkRow: null,
  perkRowStyle: null,
  perkText: null,
  footerContainer: null,
};
createStyles = { marginVertical: nativeDefault.space.PX_24, position: "relative" };
createStyles.progressContainer = createStyles;
createStyles.progress = { height: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj1 = { height: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.progressStart = { marginStart: nativeDefault.space.PX_16 };
let obj2 = { marginStart: nativeDefault.space.PX_16 };
createStyles.progressEnd = {
  marginEnd: nativeDefault.space.PX_16,
  borderTopEndRadius: nativeDefault.radii.round,
  borderBottomEndRadius: nativeDefault.radii.round,
};
let size = {
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  width: 28,
  height: 28,
  start: nativeDefault.space.PX_16 - 2,
  top: -11,
};
createStyles.boostContainerBackground = size;
const size1 = {
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
  position: "absolute",
  width: 24,
  height: 24,
  top: -9,
  start: nativeDefault.space.PX_16,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
createStyles.boostContainer = size1;
let obj3 = {
  marginEnd: nativeDefault.space.PX_16,
  borderTopEndRadius: nativeDefault.radii.round,
  borderBottomEndRadius: nativeDefault.radii.round,
};
createStyles.boostContainerActive = { backgroundColor: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
const obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
createStyles.boostContainerInactive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
const obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.contentContainer = { padding: nativeDefault.space.PX_16, paddingTop: 0, flex: 1 };
const obj6 = { padding: nativeDefault.space.PX_16, paddingTop: 0, flex: 1 };
createStyles.perkRowContainer = {
  flexDirection: "column",
  marginTop: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
createStyles.perkRow = { flexDirection: "row", alignItems: "center" };
createStyles.perkRowStyle = { flexDirection: "row", alignItems: "center" };
const obj7 = { flexDirection: "column", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
createStyles.perkText = { marginStart: nativeDefault.space.PX_8 };
const obj8 = { marginStart: nativeDefault.space.PX_8 };
createStyles.footerContainer = { marginTop: "auto", paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelCard.tsx");

export default function GuildPowerupsLevelCard(arg0) {
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  const tmp = closure_12();
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsLevelCard");
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  let obj1 = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj1.useCalculatePowerupCardStatus(powerup, tmp6, false);
  const tmp9 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  closure_1 = tmp9;
  if (0 === index) {
    let MIDDLE = constants.START;
  } else if (null == nextPowerup) {
    MIDDLE = constants.END;
  } else {
    MIDDLE = constants.MIDDLE;
  }
  const items = [isScrollingRef, tmp9];
  const callback = noop.useCallback(() => {
    if (!isScrollingRef.current) {
      closure_1();
    }
  }, items);
  obj = {
    containerStyle: tmp.cardContainer,
    style: tmp.card,
    onPress: callback,
    status: calculatePowerupCardStatus,
    children: null,
  };
  obj = { position: MIDDLE, active: tmp14, nextActive: null };
  let tmp20;
  const tmp7 = usePowerupActiveStatusDefault(guildId, nextPowerup);
  if (null != nextPowerup) {
    tmp20 = tmp7.type !== constants2.INACTIVE;
  }
  obj.nextActive = tmp20;
  const items1 = [closure_1_10(GuildLevelPowerupHeader, obj)];
  obj1 = { style: tmp.contentContainer, children: null };
  let str;
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  const obj2 = { color: str, variant: null, children: null };
  let str2 = "heading-lg/semibold";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-md/semibold";
  }
  obj2.variant = str2;
  obj2.children = powerup.title;
  const items2 = [
    closure_1_10(Text_Text.Text, obj2),
    closure_1_10(GuildPowerupLevelBody, { isActive: tmp6.type !== constants2.INACTIVE, index }),
  ];
  const obj3 = {
    style: tmp.footerContainer,
    children: closure_1_10(GuildPowerupsCardFooter.GuildPowerupsCardFooter, {
      cost: powerup.cost,
      status: calculatePowerupCardStatus,
    }),
  };
  items2[2] = closure_1_10(View, obj3);
  obj1.children = items2;
  items1[1] = closure_1_11(View, obj1);
  obj.children = items1;
  return closure_1_11(GuildPowerupsCardDefault, obj);
}
export { GuildPowerupLevelBody };
