// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx
import messagesProxy from "messagesProxy";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { ThemeTypes } from "sum";
import { jsx } from "metadata";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";

let c10;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET: closure_6, GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET: error, GuildPowerupType: metroImportAll } = BoostedGuildTiers);
({ AnalyticsPages: c9, AnalyticsSections: c10 } = ME);
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { coachmarkImage: null, coachmarkCover: null, boostGemBackground: null };
  obj = { height: 120, width: 260 - 2 * Themes.space.PX_16, borderRadius: Themes.radii.md };
  obj[0] = obj;
  obj[1] = { resizeMode: "cover" };
  let str = "#0000003D";
  if (arg0 === ThemeTypes.LIGHT) {
    str = "#0000001A";
  }
  obj[2] = { width: 50, height: 50, backgroundColor: str };
  return obj;
});
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx");

export default function useGuildPowerupsCoachmark(targetRef, arg1, type) {
  const _require = arg1;
  const importDefault = type;
  let obj = _require(stateFromStores[10]);
  let items = [createGuildRecordFromRust];
  const items1 = [arg1];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = tmp7.getGuild(closure_0);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  }, items1);
  const tmp5 = callback(importDefault(stateFromStores[11])());
  const React = tmp5;
  const items2 = [stateFromStores1];
  stateFromStores1 = _require(stateFromStores[10]).useStateFromStores(items2, () => stateFromStores1.useReducedMotion);
  const tmp7 = importDefault(stateFromStores[13])(arg1);
  createGuildRecordFromRust = tmp7;
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let powerup;
  if (type === _require(stateFromStores[14]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK) {
    powerup = type.powerup;
  }
  let num = 0;
  if (null != powerup) {
    num = powerup.cost - importDefault(stateFromStores[12])(arg1).available;
  }
  obj = { page: constants.GUILD_CHANNEL, section: constants2.GUILD_HEADER };
  const tmp10 = importDefault(stateFromStores[15])(arg1, powerup, num, "boost_to_unlock_coachmark", obj);
  let closure_7 = tmp10;
  const items3 = [num, tmp7, arg1, stateFromStores, tmp10, type, tmp5, stateFromStores1];
  const memo = React.useMemo(() => {
    let obj = {
      title: "",
      description: "",
      position: "bottom",
      visible: false,
      onDismiss() {

      }
    };
    if (null == guildPowerupBannerImage) {
      return obj;
    } else {
      function handleButtonPress() {
        let obj = guildPowerupBannerImage;
        if (null != guildPowerupBannerImage) {
          obj.markAsDismissed(outer1_11.TAKE_ACTION);
          obj = { guildId: null };
          obj[0] = powerups;
          guildPowerupBannerImage(found1[16])(obj);
        }
      }
      function handleDismiss() {
        if (null != guildPowerupBannerImage) {
          guildPowerupBannerImage.markAsDismissed(outer1_11.USER_DISMISS);
        }
      }
      const type = tmp.type;
      const tmp51 = stateFromStores;
      if (callback(stateFromStores[14]).GuildPowerupNotificationPopoutType.LEVEL_REACHED === type) {
        obj = {};
        const merged = Object.assign(obj);
        obj.visible = true;
        obj.renderImgComponent = function renderImgComponent() {
          return outer1_13(guildPowerupBannerImage(found1[17]), { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 });
        };
        const intl24 = tmp50(tmp51[18]).intl;
        obj = { perkName: null };
        obj[0] = tmp.powerup.title;
        obj.title = intl24.formatToPlainString(type(tmp51[19])["Zg/m9K"], obj);
        const intl25 = tmp50(tmp51[18]).intl;
        const obj1 = { perkName: null };
        obj1[0] = tmp.powerup.title;
        obj.description = intl25.formatToPlainString(type(tmp51[19])["1EGXSK"], obj1);
        const intl26 = tmp50(tmp51[18]).intl;
        obj.buttonLabel = intl26.string(tmp50(tmp51[18]).t.RzWDqY);
        obj.buttonVariant = "primary";
        obj.onButtonPress = handleButtonPress;
        obj.onDismiss = handleDismiss;
        return obj;
      } else if (tmp50(tmp51[14]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE === type) {
        const obj2 = {};
        const merged1 = Object.assign(obj);
        obj2.visible = true;
        obj2.renderImgComponent = function renderImgComponent() {
          return outer1_13(guildPowerupBannerImage(found1[17]), { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 });
        };
        const intl21 = tmp50(tmp51[18]).intl;
        obj2.title = intl21.string(type(tmp51[19]).QpQBPQ);
        const intl22 = tmp50(tmp51[18]).intl;
        obj2.description = intl22.string(type(tmp51[19])["6hn0xF"]);
        const intl23 = tmp50(tmp51[18]).intl;
        obj2.buttonLabel = intl23.string(tmp50(tmp51[18]).t.RzWDqY);
        obj2.buttonVariant = "primary";
        obj2.onButtonPress = handleButtonPress;
        obj2.onDismiss = handleDismiss;
        return obj2;
      } else if (tmp50(tmp51[14]).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE === type) {
        const powerups = tmp.powerups;
        if (0 === powerups.length) {
          return obj;
        } else {
          if (powerups.length >= 3) {
            const intl18 = tmp50(tmp51[18]).intl;
            let obj3 = { perk: null, perk2: null, perk3: null };
            obj3[0] = powerups[0].title;
            obj3[1] = powerups[1].title;
            obj3[2] = powerups[2].title;
            let formatToPlainStringResult = intl18.formatToPlainString(type(tmp51[19])["6Sv+3M"], obj3);
            let tmp34 = type;
          } else if (2 === powerups.length) {
            const intl17 = tmp50(tmp51[18]).intl;
            const obj4 = { perks: null };
            const _HermesInternal = HermesInternal;
            obj4[0] = "" + powerups[0].title + " & " + powerups[1].title;
            formatToPlainStringResult = intl17.formatToPlainString(type(tmp51[19]).wcQOqC, obj4);
            tmp34 = type;
          } else {
            const intl16 = tmp50(tmp51[18]).intl;
            const obj5 = { perk: null };
            obj5[0] = powerups[0].title;
            tmp34 = type;
            formatToPlainStringResult = intl16.formatToPlainString(type(tmp51[19]).ZF8NT6, obj5);
          }
          const obj6 = {};
          const merged2 = Object.assign(obj);
          obj6.visible = true;
          obj6.renderImgComponent = function renderImgComponent() {
            if (powerups.length > 1) {
              let str = guildPowerupBannerImage(tmp3[21]);
            } else {
              let obj = powerups(tmp3[22]);
              str = obj.getGuildPowerupBannerImage(arr[0], outer1_4, true);
              if (str == null) {
                str = "";
              }
            }
            obj = { imageUrl: str, isAnimated: 1 === arr.length, style: items };
            items = [, ];
            ({ coachmarkImage: arr2[0], coachmarkCover: arr2[1] } = powerup);
            return outer2_13(guildPowerupBannerImage(stateFromStores[20]), obj);
          };
          const intl19 = tmp50(tmp51[18]).intl;
          let str10 = found1;
          if (found1 == null) {
            str10 = "";
          }
          const obj7 = { guildName: null };
          obj7[0] = str10;
          obj6.title = intl19.formatToPlainString(tmp34(tmp51[19]).LmpChE, obj7);
          obj6.description = formatToPlainStringResult;
          const intl20 = tmp50(tmp51[18]).intl;
          obj6.buttonLabel = intl20.string(tmp50(tmp51[18]).t.RzWDqY);
          obj6.buttonVariant = "primary";
          obj6.onButtonPress = handleButtonPress;
          obj6.onDismiss = handleDismiss;
          return obj6;
        }
      } else if (tmp50(tmp51[14]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE === type) {
        const powerups1 = tmp.powerups;
        const found = powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_TAG_SKU_ID);
        if (null != found) {
          guildPowerupBannerImage = tmp50(tmp51[22]).getGuildPowerupBannerImage(found, stateFromStores1, true);
          if (null != guildPowerupBannerImage) {
            const obj8 = {};
            const merged3 = Object.assign(obj);
            obj8.visible = true;
            obj8.renderImgComponent = function renderImgComponent() {
              return outer2_13(guildPowerupBannerImage(stateFromStores[20]), { imageUrl: guildPowerupBannerImage, isAnimated: !outer1_4, style: powerup.coachmarkImage });
            };
            const intl13 = tmp50(tmp51[18]).intl;
            obj8.title = intl13.string(type(tmp51[19]).GcEkAP);
            const intl14 = tmp50(tmp51[18]).intl;
            obj8.description = intl14.string(type(tmp51[19]).yo0g7X);
            const intl15 = tmp50(tmp51[18]).intl;
            obj8.buttonLabel = intl15.string(tmp50(tmp51[18]).t.RzWDqY);
            obj8.buttonVariant = "primary";
            obj8.onButtonPress = handleButtonPress;
            obj8.onDismiss = handleDismiss;
            return obj8;
          }
          const tmp50Result = tmp50(tmp51[22]);
        }
        found1 = powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
        if (null != found1) {
          const obj9 = {};
          const merged4 = Object.assign(obj);
          obj9.visible = true;
          obj9.renderImgComponent = function renderImgComponent() {
            let obj = powerups(stateFromStores[22]);
            let guildPowerupBannerImage = obj.getGuildPowerupBannerImage(found1, outer1_4, true);
            if (guildPowerupBannerImage == null) {
              guildPowerupBannerImage = guildPowerupBannerImage(stateFromStores[24]);
            }
            obj = { imageUrl: guildPowerupBannerImage, isAnimated: !outer1_4, style: items };
            items = [, ];
            ({ coachmarkImage: arr[0], coachmarkCover: arr[1] } = powerup);
            return outer2_13(guildPowerupBannerImage(stateFromStores[20]), obj);
          };
          obj9.title = found1.title;
          let str5 = "";
          if (typeof found1.description === "string") {
            str5 = found1.description;
          }
          obj9.description = str5;
          const intl12 = tmp50(tmp51[18]).intl;
          obj9.buttonLabel = intl12.string(tmp50(tmp51[18]).t.RzWDqY);
          obj9.buttonVariant = "primary";
          obj9.onButtonPress = handleButtonPress;
          obj9.onDismiss = handleDismiss;
          return obj9;
        } else if (null != powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).VANITY_URL_POWERUP_SKU_ID)) {
          const obj10 = {};
          const merged5 = Object.assign(obj);
          obj10.visible = true;
          obj10.renderImgComponent = function renderImgComponent() {
            const obj = { imageUrl: null, style: null };
            obj[0] = guildPowerupBannerImage(found1[25]);
            obj[1] = powerup.coachmarkImage;
            return outer1_13(guildPowerupBannerImage(found1[20]), obj);
          };
          const intl9 = tmp50(tmp51[18]).intl;
          obj10.title = intl9.string(type(tmp51[19]).Ygpx4Q);
          const intl10 = tmp50(tmp51[18]).intl;
          obj10.description = intl10.string(type(tmp51[19]).mmNkUA);
          const intl11 = tmp50(tmp51[18]).intl;
          obj10.buttonLabel = intl11.string(tmp50(tmp51[18]).t.RzWDqY);
          obj10.buttonVariant = "primary";
          obj10.onButtonPress = handleButtonPress;
          obj10.onDismiss = handleDismiss;
          return obj10;
        } else if (null != powerups1.find((skuId) => set2.has(skuId.skuId))) {
          const obj11 = {};
          const merged6 = Object.assign(obj);
          obj11.visible = true;
          obj11.renderImgComponent = function renderImgComponent() {
            const obj = { imageUrl: null, style: null };
            obj[0] = guildPowerupBannerImage(found1[26]);
            obj[1] = powerup.coachmarkImage;
            return outer1_13(guildPowerupBannerImage(found1[20]), obj);
          };
          const intl6 = tmp50(tmp51[18]).intl;
          obj11.title = intl6.string(type(tmp51[19])["kA2c+n"]);
          const intl7 = tmp50(tmp51[18]).intl;
          obj11.description = intl7.string(type(tmp51[19]).TUilLj);
          const intl8 = tmp50(tmp51[18]).intl;
          obj11.buttonLabel = intl8.string(tmp50(tmp51[18]).t.RzWDqY);
          obj11.buttonVariant = "primary";
          obj11.onButtonPress = handleButtonPress;
          obj11.onDismiss = handleDismiss;
          return obj11;
        } else if (null != powerups1.find((skuId) => set.has(skuId.skuId))) {
          const obj12 = {};
          const merged7 = Object.assign(obj);
          obj12.visible = true;
          obj12.renderImgComponent = function renderImgComponent() {
            const obj = { imageUrl: null, style: null };
            obj[0] = guildPowerupBannerImage(found1[27]);
            obj[1] = powerup.coachmarkImage;
            return outer1_13(guildPowerupBannerImage(found1[20]), obj);
          };
          const intl3 = tmp50(tmp51[18]).intl;
          obj12.title = intl3.string(type(tmp51[19])["kA2c+n"]);
          const intl4 = tmp50(tmp51[18]).intl;
          obj12.description = intl4.string(type(tmp51[19]).TUilLj);
          const intl5 = tmp50(tmp51[18]).intl;
          obj12.buttonLabel = intl5.string(tmp50(tmp51[18]).t.RzWDqY);
          obj12.buttonVariant = "primary";
          obj12.onButtonPress = handleButtonPress;
          obj12.onDismiss = handleDismiss;
          return obj12;
        } else {
          let tmp52 = obj;
          if (null != powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID)) {
            const obj13 = {};
            const merged8 = Object.assign(obj);
            obj13.visible = true;
            obj13.renderImgComponent = function renderImgComponent() {
              const obj = { imageUrl: null, isAnimated: false, style: null };
              obj[0] = guildPowerupBannerImage(found1[28]);
              obj[2] = powerup.coachmarkImage;
              return outer1_13(guildPowerupBannerImage(found1[20]), obj);
            };
            const intl27 = tmp50(tmp51[18]).intl;
            obj13.title = intl27.string(type(tmp51[19]).rp0Ff1);
            const intl28 = tmp50(tmp51[18]).intl;
            obj13.description = intl28.string(type(tmp51[19])["3L/DZq"]);
            const intl29 = tmp50(tmp51[18]).intl;
            obj13.buttonLabel = intl29.string(tmp50(tmp51[18]).t.RzWDqY);
            obj13.buttonVariant = "primary";
            obj13.onButtonPress = handleButtonPress;
            obj13.onDismiss = handleDismiss;
            tmp52 = obj13;
          }
          return tmp52;
        }
      } else if (tmp50(tmp51[14]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK === type) {
        const powerup = tmp.powerup;
        const obj14 = {};
        const merged9 = Object.assign(obj);
        obj14.visible = true;
        obj14.offsetY = 8;
        obj14.renderImgComponent = function renderImgComponent() {
          if (powerup.type === outer2_8.LEVEL) {
            let obj = { style: null, gemWidth: 30, gemHeight: 30 };
            obj[0] = powerup.boostGemBackground;
            let tmp9Result = outer2_13(guildPowerupBannerImage(stateFromStores[17]), obj);
          } else {
            const tmp12 = guildPowerupBannerImage(stateFromStores[20]);
            const tmp9 = outer2_13;
            let str = powerups(stateFromStores[22]).getGuildPowerupBannerImage(tmp, outer1_4, true);
            if (str == null) {
              str = "";
            }
            obj = { imageUrl: null, isAnimated: null, style: null };
            obj[0] = str;
            obj[1] = !outer1_4;
            const items = [powerup.coachmarkImage, powerup.coachmarkCover];
            obj[2] = items;
            tmp9Result = tmp9(tmp12, obj);
            const obj3 = powerups(stateFromStores[22]);
            const tmp14 = outer1_4;
          }
          return tmp9Result;
        };
        const intl = tmp50(tmp51[18]).intl;
        obj14.title = intl.string(type(tmp51[19]).n37JhA);
        if (true !== createGuildRecordFromRust) {
          if (powerup.type !== outer1_8.LEVEL) {
            let Yr1ogl = tmp5(tmp51[19])["7MZ2tu"];
          }
          const obj15 = { boostCount: null, perkName: null };
          obj15[0] = num;
          obj15[1] = powerup.title;
          obj14.description = tmp6(Yr1ogl, obj15);
          const intl2 = tmp50(tmp51[18]).intl;
          obj14.buttonLabel = intl2.string(tmp50(tmp51[18]).t.oPAx73);
          obj14.buttonVariant = "primary";
          obj14.onButtonPress = function onButtonPress() {
            guildPowerupBannerImage.markAsDismissed(outer1_11.TAKE_ACTION);
            set2();
          };
          obj14.onDismiss = handleDismiss;
          return obj14;
        }
        Yr1ogl = tmp5(tmp51[19]).Yr1ogl;
      } else {
        if (tmp50(tmp51[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE !== type) {
          if (tmp50(tmp51[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE !== type) {
            const GAME_SERVER_HOSTING_ENABLED = tmp50(tmp51[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_ENABLED;
          }
        }
        return obj;
      }
    }
  }, items3);
  let obj2 = _require(stateFromStores[10]);
  const tmp4 = importDefault;
  const coachmark = _require(stateFromStores[29]).useCoachmark(targetRef, memo);
};