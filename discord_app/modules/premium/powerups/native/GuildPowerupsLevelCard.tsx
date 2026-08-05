import { LinearGradient } from "../../../../../_runtime/04706_LinearGradient.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { BoostGemIcon } from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import { usePowerupActiveStatus } from "../hooks/usePowerupActiveStatus.tsx";
import { importDefaultResult1 } from "GuildPowerupsCard.tsx";
import { useGuildPowerupOnShowMore } from "hooks/useGuildPowerupOnShowMore.tsx";
// discord_app/modules/premium/powerups/native/GuildPowerupsLevelCard.tsx
import GuildPowerupCardFooterActive from "GuildPowerupCardFooterActive";
import { View } from "useGuildPowerupOnShowMore";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";
import { TIER_CARDS } from "BoostedGuildTiers";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
    obj1[1] = closure_10(BoostGemIcon /* BoostGemIcon */.BoostGemIcon, obj2);
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
    textColor = undefined;
    iconColor = undefined;
    tmp = jsxs();
    c1 = tmp;
    tmp2 = require("useGuildPowerupColorConfig")(global.isActive);
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
            let obj = outer1_0(outer1_2[11]);
            obj = { style: closure_1.perkRowStyle, children: null };
            obj = { color: GuildPowerupCardFooterActive, size: "sm" };
            const items = [outer1_10(obj.getIconForPerk(perkIcon.perkIcon), obj), ];
            const obj1 = { color: closure_2, style: closure_1.perkText, variant: "text-sm/medium", children: null };
            obj1[3] = perkIcon.getCopy();
            items[1] = outer1_10(outer1_0(outer1_2[12]).Text, obj1);
            obj[1] = items;
            return outer1_11(outer1_4, obj, "perk-" + closure_0 + "-" + arg1);
          });
        }
        return mapped;
      }
    }, items);
    obj = { style: tmp.perkRow, children: null };
    obj1 = { color: textColor, variant: "text-sm/medium", children: null };
    intl = require("getSystemLocale").intl;
    obj1[2] = intl.string(require("messagesProxy").nIj3LZ);
    obj[1] = jsx(require("Text").Text, obj1);
    items1[1] = jsx(View, obj);
    obj[1] = items1;
    return jsxs(View, obj);
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
  const tmp4 = usePowerupActiveStatus(guildId, powerup);
  let obj = isScrollingRef(11792);
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp4, false);
  const tmp8 = useGuildPowerupOnShowMore(guildId, powerup);
  importDefault = tmp8;
  if (0 === index) {
    let MIDDLE = constants.START;
  } else if (null == nextPowerup) {
    MIDDLE = constants.END;
  } else {
    MIDDLE = constants.MIDDLE;
  }
  const items = [isScrollingRef, tmp8];
  const callback = React.useCallback(() => {
    if (!isScrollingRef.current) {
      _undefined();
    }
  }, items);
  obj = { containerStyle: tmp.cardContainer, style: tmp.card, onPress: callback, status: calculatePowerupCardStatus, children: null };
  obj = { position: MIDDLE, active: tmp13, nextActive: null };
  let tmp19;
  const tmp2 = importDefault;
  const tmp5 = usePowerupActiveStatus(guildId, nextPowerup);
  if (null != nextPowerup) {
    tmp19 = tmp5.type !== constants2.INACTIVE;
  }
  obj[2] = tmp19;
  const items1 = [closure_10(GuildLevelPowerupHeader, obj), ];
  const obj1 = { style: tmp.contentContainer, children: null };
  const items2 = [closure_10(isScrollingRef(4281).Text, { variant: "heading-lg/semibold", children: powerup.title }), closure_10(GuildPowerupLevelBody, { isActive: tmp4.type !== constants2.INACTIVE, index }), ];
  const obj2 = { variant: "heading-lg/semibold", children: powerup.title };
  const tmp18 = GuildLevelPowerupHeader;
  const tmp2Result = importDefaultResult1;
  items2[2] = closure_10(View, { style: tmp.footerContainer, children: closure_10(isScrollingRef(11797).GuildPowerupsCardFooter, obj4) });
  obj1[1] = items2;
  items1[1] = closure_11(View, obj1);
  obj[4] = items1;
  return closure_11(tmp2Result, obj);
};
export { GuildPowerupLevelBody };