// === Module 11734: GuildLevelPowerupHeader ===

// Module 11734 (GuildLevelPowerupHeader)
import ThemesDefault from "Themes" /* 712 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import BoostGemIcon from "BoostGemIcon" /* 7979 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 11668 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 11736 */;
import importDefaultResult1Default from "importDefaultResult1" /* 11737 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4262 */;
import ME from "ME" /* 676 */;
import { TIER_CARDS } from "BoostedGuildTiers" /* 11735 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
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
    const items1 = [tmp.progress, , ];
    let progressStart = position === constants.START;
    if (progressStart) {
      progressStart = tmp.progressStart;
    }
    items1[1] = progressStart;
    items1[2] = position === constants.END && tmp.progressEnd;
    obj[3] = items1;
    const items2 = [callback(LinearGradientDefault, obj), , ];
    obj = { style: null };
    const items3 = [, ];
    ({ boostContainer: arr6[0], boostContainerBackground: arr6[1] } = tmp);
    obj[0] = items3;
    items2[1] = callback(View, obj);
    const items4 = [tmp.boostContainer, ];
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
    obj1[1] = callback(BoostGemIcon.BoostGemIcon, obj2);
    items2[2] = callback(View, obj1);
    obj[1] = items2;
    return callback2(View, obj);
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
    items = [, , , , ];
    items[0] = index;
    items[1] = iconColor;
    items[2] = textColor;
    items[3] = tmp;
    items[4] = manaTypeConsolidationExperiment;
    tmp8 = iconColor;
    obj = { style: tmp.perkRowContainer, children: null };
    items1 = [, ];
    items1[0] = textColor.useMemo(() => {
      if (null == TIER_CARDS[index]) {
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
          mapped = substr.map((item, index) => {
            index(manaTypeConsolidationExperiment[12]);
            const obj = { color: closure_4, size: "sm" };
            const items = [closure_1_10(obj.getIconForPerk(item.perkIcon), obj), ];
            obj1 = { color: closure_3, style: closure_1.perkText, variant: null, children: null };
            let str = "text-sm/medium";
            if (closure_2) {
              str = "experimental/body-sm/normal";
            }
            obj1[2] = str;
            obj1[3] = item.getCopy();
            items[1] = closure_1_10(index(manaTypeConsolidationExperiment[13]).Text, obj1);
            obj[1] = items;
            return closure_1_11(iconColor, obj, "perk-" + closure_0 + "-" + index);
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
const createCacheKey = { marginVertical: ThemesDefault.space.PX_24, position: "relative" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: 6, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[4] = { marginStart: ThemesDefault.space.PX_16 };
createCacheKey[5] = { marginEnd: ThemesDefault.space.PX_16, borderTopEndRadius: ThemesDefault.radii.round, borderBottomEndRadius: ThemesDefault.radii.round };
createCacheKey[6] = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, width: 28, height: 28, start: ThemesDefault.space.PX_16 - 2, top: -11 };
createCacheKey[7] = { padding: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.radii.round, position: "absolute", width: 24, height: 24, top: -9, start: ThemesDefault.space.PX_16, alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[8] = { backgroundColor: ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
createCacheKey[9] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[10] = { padding: ThemesDefault.space.PX_16, paddingTop: 0, flex: 1 };
createCacheKey[11] = { flexDirection: "column", marginTop: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
createCacheKey[12] = { flexDirection: "row", alignItems: "center" };
createCacheKey[13] = { flexDirection: "row", alignItems: "center" };
createCacheKey[14] = { marginStart: ThemesDefault.space.PX_8 };
createCacheKey[15] = { marginTop: "auto", paddingTop: ThemesDefault.space.PX_16 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelCard.tsx");

export default function GuildPowerupsLevelCard(arg0) {
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  const tmp = callback();
  let obj = isScrollingRef(8307);
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsLevelCard");
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  obj1 = isScrollingRef(11688);
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
  obj = { position: MIDDLE, active: tmp14, nextActive: null };
  let tmp20;
  const tmp7 = usePowerupActiveStatusDefault(guildId, nextPowerup);
  if (null != nextPowerup) {
    tmp20 = tmp7.type !== constants2.INACTIVE;
  }
  obj[2] = tmp20;
  const items1 = [callback(GuildLevelPowerupHeader, obj), ];
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
  const items2 = [callback(isScrollingRef(4734).Text, obj2), callback(GuildPowerupLevelBody, { isActive: tmp6.type !== constants2.INACTIVE, index }), ];
  const tmp5Result = importDefaultResult1Default;
  items2[2] = callback(View, { style: tmp.footerContainer, children: callback(isScrollingRef(11693).GuildPowerupsCardFooter, obj4) });
  obj1[1] = items2;
  items1[1] = callback2(View, obj1);
  obj[4] = items1;
  return callback2(tmp5Result, obj);
};
export { GuildPowerupLevelBody };