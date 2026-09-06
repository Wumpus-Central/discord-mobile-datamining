// discord_app/modules/premium/powerups/native/GuildPowerupsLevelCard.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import BoostGemIcon from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import usePowerupActiveStatusDefault from "../hooks/usePowerupActiveStatus.tsx";
import useGuildPowerupOnShowMoreDefault from "hooks/useGuildPowerupOnShowMore.tsx";
import importDefaultResult1Default from "GuildPowerupsCard.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import BoostedGuildTiers from "../constants/GuildPowerupsConstants.tsx";
import ME from "../../../../Constants.tsx";
import { TIER_CARDS } from "../../../guild_boosting/GuildBoostingMarketingConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function GuildLevelPowerupHeader(arg0) {
  ({ active, nextActive, position } = arg0);
  const tmp = callback();
  if (active) {
    if (false !== nextActive) {
      const items = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerActive.backgroundColor];
      let items6 = items;
    }
    let obj = { style: null, children: null };
    obj[0] = tmp.progressContainer;
    obj = { start: null, end: null, colors: null, style: null };
    ({ START: obj2[0], END: obj2[1] } = closure_8);
    obj[2] = items6;
    const items1 = [tmp.progress, ,];
    let progressStart = position === constants.START;
    if (progressStart) {
      progressStart = tmp.progressStart;
    }
    items1[1] = progressStart;
    items1[2] = position === constants.END && tmp.progressEnd;
    obj[3] = items1;
    const items2 = [closure_10(LinearGradientDefault, obj), ,];
    obj = { style: null };
    const items3 = [,];
    ({ boostContainer: arr6[0], boostContainerBackground: arr6[1] } = tmp);
    obj[0] = items3;
    items2[1] = closure_10(View, obj);
    const items4 = [tmp.boostContainer];
    let boostContainerActive = active;
    if (active) {
      boostContainerActive = tmp.boostContainerActive;
    }
    obj1 = { style: null, children: null };
    items4[1] = boostContainerActive;
    obj1[0] = items4;
    const colors = ThemesDefault.colors;
    const obj2 = { size: "xs", color: null };
    obj2[1] = active ? colors.WHITE : colors.TEXT_MUTED;
    obj1[1] = closure_10(BoostGemIcon.BoostGemIcon, obj2);
    items2[2] = closure_10(View, obj1);
    obj[1] = items2;
    return closure_11(View, obj);
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
    obj = require("apexExperiment");
    manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupLevelBody");
    closure_2 = manaTypeConsolidationExperiment;
    tmp5 = closure_1;
    tmp6 = require("useGuildPowerupColorConfig")(global.isActive);
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
      if (null == closure_1_9[index]) {
        return [];
      } else {
        if (tmp.tier === closure_1_7.TIER_3) {
          const perks = tmp.perks;
          let substr = perks.slice(0, -1);
        } else {
          substr = tmp.perks;
        }
        let mapped;
        if (substr != null) {
          mapped = substr.map((perkIcon) => {
            let obj = closure_1_0(closure_1_2[12]);
            obj = { style: closure_1.perkRowStyle, children: null };
            obj = { color: closure_4, size: "sm" };
            const items = [closure_1_10(obj.getIconForPerk(perkIcon.perkIcon), obj)];
            obj1 = { color: closure_3, style: closure_1.perkText, variant: null, children: null };
            let str = "text-sm/medium";
            if (closure_2) {
              str = "experimental/body-sm/normal";
            }
            obj1[2] = str;
            obj1[3] = perkIcon.getCopy();
            items[1] = closure_1_10(closure_1_0(closure_1_2[13]).Text, obj1);
            obj[1] = items;
            return closure_1_11(closure_1_4, obj, "perk-" + closure_0 + "-" + arg1);
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
    obj2[1] = str;
    intl = require("getSystemLocale").intl;
    obj2[2] = intl.string(require("messagesProxy").nIj3LZ);
    obj1[1] = tmp9(require("Text").Text, obj2);
    items1[1] = tmp9(tmp8, obj1);
    obj[1] = items1;
    return tmp7(tmp8, obj);
  }
}
({ LevelCardPosition: c5, PowerupActiveStatusType: closure_6 } = BoostedGuildTiers);
({ BoostedGuildTiers: error, HorizontalGradient: closure_8 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = {
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
createCacheKey = { marginVertical: ThemesDefault.space.PX_24, position: "relative" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: 6, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj1 = { height: 6, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[4] = { marginStart: ThemesDefault.space.PX_16 };
let obj2 = { marginStart: ThemesDefault.space.PX_16 };
createCacheKey[5] = {
  marginEnd: ThemesDefault.space.PX_16,
  borderTopEndRadius: ThemesDefault.radii.round,
  borderBottomEndRadius: ThemesDefault.radii.round,
};
const obj3 = {
  marginEnd: ThemesDefault.space.PX_16,
  borderTopEndRadius: ThemesDefault.radii.round,
  borderBottomEndRadius: ThemesDefault.radii.round,
};
createCacheKey[6] = {
  backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT,
  width: 28,
  height: 28,
  start: ThemesDefault.space.PX_16 - 2,
  top: -11,
};
const obj4 = {
  backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT,
  width: 28,
  height: 28,
  start: ThemesDefault.space.PX_16 - 2,
  top: -11,
};
createCacheKey[7] = {
  padding: ThemesDefault.space.PX_4,
  borderRadius: ThemesDefault.radii.round,
  position: "absolute",
  width: 24,
  height: 24,
  top: -9,
  start: ThemesDefault.space.PX_16,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
};
const obj5 = {
  padding: ThemesDefault.space.PX_4,
  borderRadius: ThemesDefault.radii.round,
  position: "absolute",
  width: 24,
  height: 24,
  top: -9,
  start: ThemesDefault.space.PX_16,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
};
createCacheKey[8] = { backgroundColor: ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
const obj6 = { backgroundColor: ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
createCacheKey[9] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
const obj7 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[10] = { padding: ThemesDefault.space.PX_16, paddingTop: 0, flex: 1 };
const obj8 = { padding: ThemesDefault.space.PX_16, paddingTop: 0, flex: 1 };
createCacheKey[11] = { flexDirection: "column", marginTop: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
createCacheKey[12] = { flexDirection: "row", alignItems: "center" };
createCacheKey[13] = { flexDirection: "row", alignItems: "center" };
const obj9 = { flexDirection: "column", marginTop: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
createCacheKey[14] = { marginStart: ThemesDefault.space.PX_8 };
const obj10 = { marginStart: ThemesDefault.space.PX_8 };
createCacheKey[15] = { marginTop: "auto", paddingTop: ThemesDefault.space.PX_16 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const obj11 = { marginTop: "auto", paddingTop: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelCard.tsx");

export default function GuildPowerupsLevelCard(arg0) {
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  importDefault = undefined;
  const tmp = callback();
  let obj = isScrollingRef(8095);
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsLevelCard");
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  obj1 = isScrollingRef(12519);
  const calculatePowerupCardStatus = obj1.useCalculatePowerupCardStatus(powerup, tmp6, false);
  const tmp9 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  importDefault = tmp9;
  if (0 === index) {
    let MIDDLE = constants.START;
  } else if (null == nextPowerup) {
    MIDDLE = constants.END;
  } else {
    MIDDLE = constants.MIDDLE;
  }
  const items = [isScrollingRef, tmp9];
  callback = React.useCallback(() => {
    if (!isScrollingRef.current) {
      callback();
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
  const tmp5 = importDefault;
  const tmp7 = usePowerupActiveStatusDefault(guildId, nextPowerup);
  if (null != nextPowerup) {
    tmp20 = tmp7.type !== constants2.INACTIVE;
  }
  obj[2] = tmp20;
  const items1 = [closure_10(GuildLevelPowerupHeader, obj)];
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
  obj2[1] = str2;
  obj2[2] = powerup.title;
  const items2 = [
    closure_10(isScrollingRef(4556).Text, obj2),
    closure_10(GuildPowerupLevelBody, { isActive: tmp6.type !== constants2.INACTIVE, index }),
  ];
  const tmp19 = GuildLevelPowerupHeader;
  const tmp5Result = importDefaultResult1Default;
  items2[2] = closure_10(View, {
    style: tmp.footerContainer,
    children: closure_10(isScrollingRef(12524).GuildPowerupsCardFooter, obj4),
  });
  obj1[1] = items2;
  items1[1] = closure_11(View, obj1);
  obj[4] = items1;
  return closure_11(tmp5Result, obj);
}
export { GuildPowerupLevelBody };
