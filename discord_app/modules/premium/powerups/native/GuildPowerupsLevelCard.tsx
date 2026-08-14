// discord_app/modules/premium/powerups/native/GuildPowerupsLevelCard.tsx
import importDefaultResult1 from "importDefaultResult1";
import { View } from "useCalculatePowerupCardStatus";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";
import { TIER_CARDS } from "BoostedGuildTiers";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../../_runtime/04788_LinearGradient.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { BoostGemIcon } from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import { usePowerupActiveStatus } from "../hooks/usePowerupActiveStatus.tsx";
import { importDefaultResult1 } from "GuildPowerupsCard.tsx";
import { useGuildPowerupOnShowMore } from "hooks/useGuildPowerupOnShowMore.tsx";

let c10;
let c5;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function GuildLevelPowerupHeader(arg0) {
  let active;
  let nextActive;
  let position;
  ({ active, nextActive, position } = arg0);
  const tmp = createCacheKey();
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
    const items2 = [closure_10(LinearGradient, obj), , ];
    obj = { style: null };
    const items3 = [, ];
    ({ boostContainer: arr6[0], boostContainerBackground: arr6[1] } = tmp);
    obj[0] = items3;
    items2[1] = closure_10(View, obj);
    const items4 = [tmp.boostContainer, ];
    let boostContainerActive = active;
    if (active) {
      boostContainerActive = tmp.boostContainerActive;
    }
    const obj1 = { style: null, children: null };
    items4[1] = boostContainerActive;
    obj1[0] = items4;
    const colors = Themes.colors;
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
    c1 = undefined;
    c2 = undefined;
    textColor = undefined;
    iconColor = undefined;
    tmp = jsxs();
    c1 = tmp;
    tmp3 = c2;
    tmp2 = index;
    obj = require("apexExperiment");
    manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupLevelBody");
    c2 = manaTypeConsolidationExperiment;
    tmp5 = c1;
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
      if (null == outer1_9[index]) {
        return [];
      } else {
        if (tmp.tier === outer1_7.TIER_3) {
          const perks = tmp.perks;
          let substr = perks.slice(0, -1);
        } else {
          substr = tmp.perks;
        }
        let mapped;
        if (substr != null) {
          mapped = substr.map((perkIcon) => {
            let obj = outer1_0(outer1_2[12]);
            obj = { style: closure_1.perkRowStyle, children: null };
            obj = { color: closure_4, size: "sm" };
            const items = [outer1_10(obj.getIconForPerk(perkIcon.perkIcon), obj), ];
            const obj1 = { color: importDefaultResult1, style: closure_1.perkText, variant: null, children: null };
            let str = "text-sm/medium";
            if (closure_2) {
              str = "experimental/body-sm/normal";
            }
            obj1[2] = str;
            obj1[3] = perkIcon.getCopy();
            items[1] = outer1_10(outer1_0(outer1_2[13]).Text, obj1);
            obj[1] = items;
            return outer1_11(outer1_4, obj, "perk-" + closure_0 + "-" + arg1);
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
({ BoostedGuildTiers: error, HorizontalGradient: metroImportAll } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { cardContainer: { flex: 1 }, card: { padding: 0, overflow: "hidden", flex: 1 }, progressContainer: null, progress: null, progressStart: null, progressEnd: null, boostContainerBackground: null, boostContainer: null, boostContainerActive: null, boostContainerInactive: null, contentContainer: null, perkRowContainer: null, perkRow: null, perkRowStyle: null, perkText: null, footerContainer: null };
createCacheKey = { marginVertical: require("Themes").space.PX_24, position: "relative" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: 6, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
let obj1 = { height: 6, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[4] = { marginStart: require("Themes").space.PX_16 };
let obj2 = { marginStart: require("Themes").space.PX_16 };
createCacheKey[5] = { marginEnd: require("Themes").space.PX_16, borderTopEndRadius: require("Themes").radii.round, borderBottomEndRadius: require("Themes").radii.round };
const obj3 = { marginEnd: require("Themes").space.PX_16, borderTopEndRadius: require("Themes").radii.round, borderBottomEndRadius: require("Themes").radii.round };
createCacheKey[6] = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, width: 28, height: 28, start: require("Themes").space.PX_16 - 2, top: -11 };
const obj4 = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, width: 28, height: 28, start: require("Themes").space.PX_16 - 2, top: -11 };
createCacheKey[7] = { padding: require("Themes").space.PX_4, borderRadius: require("Themes").radii.round, position: "absolute", width: 24, height: 24, top: -9, start: require("Themes").space.PX_16, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
const obj5 = { padding: require("Themes").space.PX_4, borderRadius: require("Themes").radii.round, position: "absolute", width: 24, height: 24, top: -9, start: require("Themes").space.PX_16, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[8] = { backgroundColor: require("Themes").unsafe_rawColors.GUILD_BOOSTING_PINK };
const obj6 = { backgroundColor: require("Themes").unsafe_rawColors.GUILD_BOOSTING_PINK };
createCacheKey[9] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
const obj7 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[10] = { padding: require("Themes").space.PX_16, paddingTop: 0, flex: 1 };
const obj8 = { padding: require("Themes").space.PX_16, paddingTop: 0, flex: 1 };
createCacheKey[11] = { flexDirection: "column", marginTop: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
createCacheKey[12] = { flexDirection: "row", alignItems: "center" };
createCacheKey[13] = { flexDirection: "row", alignItems: "center" };
const obj9 = { flexDirection: "column", marginTop: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
createCacheKey[14] = { marginStart: require("Themes").space.PX_8 };
const obj10 = { marginStart: require("Themes").space.PX_8 };
createCacheKey[15] = { marginTop: "auto", paddingTop: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj11 = { marginTop: "auto", paddingTop: require("Themes").space.PX_16 };
const result = require("BoostedGuildTiers").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelCard.tsx");

export default function GuildPowerupsLevelCard(arg0) {
  let guildId;
  let index;
  let isScrollingRef;
  let nextPowerup;
  let powerup;
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  let importDefault;
  const tmp = createCacheKey();
  let obj = isScrollingRef(8261);
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsLevelCard");
  const tmp6 = usePowerupActiveStatus(guildId, powerup);
  let obj1 = isScrollingRef(11959);
  const calculatePowerupCardStatus = obj1.useCalculatePowerupCardStatus(powerup, tmp6, false);
  const tmp9 = useGuildPowerupOnShowMore(guildId, powerup);
  importDefault = tmp9;
  if (0 === index) {
    let MIDDLE = constants.START;
  } else if (null == nextPowerup) {
    MIDDLE = constants.END;
  } else {
    MIDDLE = constants.MIDDLE;
  }
  const items = [isScrollingRef, tmp9];
  const callback = React.useCallback(() => {
    if (!isScrollingRef.current) {
      _undefined();
    }
  }, items);
  obj = { containerStyle: tmp.cardContainer, style: tmp.card, onPress: callback, status: calculatePowerupCardStatus, children: null };
  obj = { position: MIDDLE, active: tmp14, nextActive: null };
  let tmp20;
  const tmp5 = importDefault;
  const tmp7 = usePowerupActiveStatus(guildId, nextPowerup);
  if (null != nextPowerup) {
    tmp20 = tmp7.type !== constants2.INACTIVE;
  }
  obj[2] = tmp20;
  const items1 = [closure_10(GuildLevelPowerupHeader, obj), ];
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
  const items2 = [closure_10(isScrollingRef(4338).Text, obj2), closure_10(GuildPowerupLevelBody, { isActive: tmp6.type !== constants2.INACTIVE, index }), ];
  const tmp19 = GuildLevelPowerupHeader;
  const tmp5Result = importDefaultResult1;
  items2[2] = closure_10(View, { style: tmp.footerContainer, children: closure_10(isScrollingRef(11964).GuildPowerupsCardFooter, obj4) });
  obj1[1] = items2;
  items1[1] = closure_11(View, obj1);
  obj[4] = items1;
  return closure_11(tmp5Result, obj);
};
export { GuildPowerupLevelBody };