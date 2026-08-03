import { View } from "Button";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c4;
let c5;
function GuildPowerupsMultiPerkCard(arg0) {
  let c1;
  let forceStaticImage;
  let guildId;
  let isLoading;
  let isNewPerk;
  let powerup;
  ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
  let _require;
  let importDefault;
  let dependencyMap;
  let obj = _require(3965);
  const tmp4 = callback2(obj.isThemeLight(importDefault(4191)()));
  const tmp5 = importDefault(11725)(guildId);
  const tmp6 = importDefault(11711)(guildId, powerup);
  let obj1 = _require(11731);
  const calculatePowerupCardStatus = obj1.useCalculatePowerupCardStatus(powerup, tmp6, importDefault(11708)(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet"));
  let obj2 = _require(11711);
  const result = obj2.isPowerupActiveStatusActive(tmp6);
  _require = result;
  const tmp10 = importDefault(11732)(powerup, true, forceStaticImage);
  const disabled = importDefault(11744)(guildId, powerup, result).disabled;
  const tmp7 = importDefault(11708)(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
  ({ onActivate: c1, isLoading } = importDefault(11745)(guildId, powerup));
  dependencyMap = importDefault(11749)(guildId, powerup);
  const items = [tmp4.container, ];
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp5;
  }
  if (disabled2) {
    disabled2 = tmp4.disabled;
  }
  obj = { style: items, children: null };
  items[1] = disabled2;
  const items1 = [tmp4.imageContainer, , , ];
  let type;
  if (calculatePowerupCardStatus != null) {
    type = calculatePowerupCardStatus.type;
  }
  items1[1] = "active" === type && tmp4.imageContainerActive;
  let type1;
  if (calculatePowerupCardStatus != null) {
    type1 = calculatePowerupCardStatus.type;
  }
  items1[2] = "expiring" === type1 && tmp4.imageContainerExpiring;
  let type2;
  if (calculatePowerupCardStatus != null) {
    type2 = calculatePowerupCardStatus.type;
  }
  obj = { style: items1, children: null };
  items1[3] = "removing" === type2 && tmp4.imageContainerRemoving;
  let str = tmp10;
  let tmp3Result = tmp3(11735);
  if (tmp10 == null) {
    str = "";
  }
  obj1 = { imageUrl: str, isAnimated: !forceStaticImage, style: tmp4.image };
  const items2 = [closure_4(tmp3Result, obj1), ];
  if (isNewPerk) {
    obj2 = { text: null, style: null };
    const intl = tmp(1236).intl;
    obj2[0] = intl.string(tmp(1236).t.y2b7CA);
    obj2[1] = tmp4.badge;
    isNewPerk = tmp18(tmp(1297).TextBadge, obj2);
  }
  items2[1] = isNewPerk;
  obj[1] = items2;
  const items3 = [closure_5(View, obj), ];
  const obj3 = { style: tmp4.bodyContainer, children: null };
  const obj4 = { style: tmp4.titleContainer, children: null };
  const tmp11 = importDefault(11745)(guildId, powerup);
  const tmp17 = "removing" === type2 && tmp4.imageContainerRemoving;
  const items4 = [closure_4(_require(4251).Text, { variant: "heading-md/semibold", color: importDefault(11758)(result).textColor, children: powerup.title }), ];
  if (null != calculatePowerupCardStatus) {
    const obj6 = { status: null };
    obj6[0] = calculatePowerupCardStatus;
    let tmp18Result = tmp18(tmp(11736).GuildPowerupCardFooterStatus, obj6);
  } else {
    const obj7 = { cost: null };
    obj7[0] = powerup.cost;
    tmp18Result = tmp18(tmp(11736).GuildPowerupCardFooterCost, obj7);
  }
  items4[1] = tmp18Result;
  obj4[1] = items4;
  const items5 = [closure_5(View, obj4), ];
  if (!tmp5) {
    items5[1] = tmp5;
    obj3[1] = items5;
    items3[1] = tmp12(tmp13, obj3);
    obj[1] = items3;
    return tmp12(tmp13, obj);
  } else {
    const obj8 = { disabled: null, loading: null, variant: null, text: null, onPress: null };
    obj8[0] = disabled;
    obj8[1] = isLoading;
    let str2 = "primary";
    if (result) {
      str2 = "secondary";
    }
    obj8[2] = str2;
    const intl2 = tmp(1236).intl;
    tmp3Result = tmp3(2287);
    obj8[3] = intl2.string(result ? tmp3Result.TZsu1U : tmp3Result.gSxlHf);
    obj8[4] = function onPress() {
      if (c0) {
        callback();
      } else {
        _undefined();
      }
    };
    tmp18Result = tmp18(tmp(4666).Button, obj8);
  }
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, cardsContainer: null, titleContainer: null, bodyContainer: null, imageContainer: null, imageContainerActive: null, imageContainerExpiring: null, imageContainerRemoving: null, image: null, disabled: null, badge: null };
  obj = { gap: importDefault(712).space.PX_8 };
  obj[0] = obj;
  obj = { gap: importDefault(712).space.PX_24, marginHorizontal: importDefault(712).space.PX_16 };
  obj[1] = obj;
  obj[2] = { flexDirection: "column", gap: 4 };
  obj[3] = { justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
  const obj1 = { borderRadius: importDefault(712).radii.md, borderWidth: 1, borderColor: importDefault(712).colors.BACKGROUND_MOD_MUTED, borderStyle: "solid", backgroundColor: null };
  let str = "#ffffff";
  if (arg0) {
    str = "#000000";
  }
  const tmp3 = importDefault(689);
  const tmp3Result = importDefault(689)(str);
  obj1[4] = importDefault(689)(str).alpha(0.04).hex();
  obj[4] = obj1;
  const obj2 = { borderColor: null };
  let tmpResult = tmp(689);
  const alphaResult = importDefault(689)(str).alpha(0.04);
  const tmpResultResult = tmpResult(importDefault(712).unsafe_rawColors.GREEN_360);
  obj2[0] = tmpResult(importDefault(712).unsafe_rawColors.GREEN_360).alpha(0.35).hex();
  obj[5] = obj2;
  const obj3 = { borderColor: null };
  tmpResult = tmp(689);
  const alphaResult1 = tmpResult(importDefault(712).unsafe_rawColors.GREEN_360).alpha(0.35);
  const tmpResult1Result = tmpResult(importDefault(712).unsafe_rawColors.YELLOW_300);
  obj3[0] = tmpResult(importDefault(712).unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj[6] = obj3;
  const obj4 = { borderColor: null };
  const alphaResult2 = tmpResult(importDefault(712).unsafe_rawColors.YELLOW_300).alpha(0.35);
  const tmpResult1 = importDefault(689);
  const tmpResult2Result = importDefault(689)(importDefault(712).unsafe_rawColors.YELLOW_300);
  obj4[0] = importDefault(689)(importDefault(712).unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj[7] = obj4;
  obj[8] = { width: "75%", height: 180, resizeMode: "contain" };
  obj[9] = { opacity: 0.5 };
  const alphaResult3 = importDefault(689)(importDefault(712).unsafe_rawColors.YELLOW_300).alpha(0.35);
  obj[10] = { position: "absolute", top: importDefault(712).space.PX_8, right: importDefault(712).space.PX_8 };
  return obj;
});
let obj = { cardsContainer: null, disabledReasonContainer: null };
obj = { gap: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_16 };
obj[0] = obj;
obj[1] = { marginHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16 };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { marginHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16 };
let result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx");

export default function GuildPowerupsMultiPerkBottomSheet(guildId) {
  guildId = guildId.guildId;
  const listing = guildId.listing;
  let importDefault;
  const tmp = callback3();
  const tmp4 = importDefault(11759)(guildId, listing);
  importDefault = tmp4;
  let tmp6Result = null;
  if (null != tmp4) {
    let obj = { scrollable: true, startExpanded: true, onDismiss: null, children: null };
    obj[2] = guildId.onDismiss;
    obj = { contentContainerStyle: null, children: null };
    obj = { paddingBottom: null };
    obj[0] = importDefault(1581)().bottom;
    obj[0] = obj;
    ({ title: obj4[0], description: obj4[1] } = tmp4);
    const items = [callback(tmp2(11762), { title: null, description: null }), , ];
    tmp6Result = null != tmp4.disabledReason;
    if (tmp6Result) {
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.disabledReasonContainer;
      const obj3 = { text: null };
      obj3[0] = tmp4.disabledReason;
      obj2[1] = tmp6(tmp2(11755), obj3);
      tmp6Result = tmp6(View, obj2);
    }
    items[1] = tmp6Result;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.cardsContainer;
    const powerups = listing.powerups;
    obj4[1] = powerups.map((powerup) => outer1_4(outer1_8, { guildId, powerup, forceStaticImage: _undefined.forceStaticImages }, powerup.skuId));
    items[2] = callback(View, obj4);
    obj[1] = items;
    obj[3] = closure_5(guildId(5311).BottomSheetScrollView, obj);
    tmp6Result = tmp6(guildId(5309).BottomSheet, obj);
    const obj1 = { title: null, description: null };
    const tmp8 = closure_5;
  }
  return tmp6Result;
};