// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useGetGuildPowerupBannerImage from "../../hooks/useGetGuildPowerupBannerImage.tsx";
import GuildPowerupsBoostGemDefault from "../GuildPowerupsBoostGem.tsx";
import GuildPowerupsImageDefault from "../GuildPowerupsImage.tsx";
import _modDef15776 from "../../../../../../discord_assets/assets/powerups/server-theme-powerup-static.png.js";
import _modDef15780 from "../../../../../../discord_assets/assets/premium/powerups/level_background.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const GuildPowerupsConstants = fn(4720);
({
  GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET: metroRequire,
  GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET: closure_7,
  GuildPowerupType: closure_8,
} = GuildPowerupsConstants);
const Constants = fn(1074);
({ AnalyticsPages: closure_9, AnalyticsSections: c10 } = Constants);
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const ThemeTypes = fn(1085).ThemeTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { coachmarkImage: null, coachmarkCover: null, boostGemBackground: null };
  const size = { height: 120, width: 260 - 2 * nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md };
  obj.coachmarkImage = size;
  obj.coachmarkCover = { resizeMode: "cover" };
  let str = "#0000003D";
  if (arg0 === ThemeTypes.LIGHT) {
    str = "#0000001A";
  }
  obj.boostGemBackground = { width: 50, height: 50, backgroundColor: str };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx");

export default function useGuildPowerupsCoachmark(targetRef, arg1, type) {
  _require = arg1;
  importDefault = type;
  let items = [closure_5];
  const items1 = [arg1];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      const guild = GuildStore.getGuild(closure_0);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      return name;
    },
    items1,
  );
  const tmp5 = closure_14(require("useTheme")());
  noop = tmp5;
  let obj = require("initialize");
  let tmp4 = importDefault;
  const items2 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => stateFromStores1.useReducedMotion);
  const tmp7 = require("useHasAllocateBoostPermission")(arg1);
  closure_5 = tmp7;
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let powerup;
  if (type === require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK) {
    powerup = type.powerup;
  }
  let num = 0;
  if (null != powerup) {
    num = powerup.cost - require("useGuildPowerupsBoostCount")(arg1).available;
  }
  const tmp10 = tmp4(stateFromStores[15])(arg1, powerup, num, "boost_to_unlock_coachmark", {
    page: constants2.GUILD_CHANNEL,
    section: constants3.GUILD_HEADER,
  });
  closure_7 = tmp10;
  const items3 = [num, tmp7, arg1, stateFromStores, tmp10, type, tmp5, stateFromStores1];
  const memo = noop.useMemo(() => {
    let obj = {
      title: "",
      description: "",
      position: "bottom",
      visible: false,
      onDismiss() {},
    };
    if (null == guildPowerupBannerImage) {
      return obj;
    } else {
      function handleButtonPress() {
        if (null != guildPowerupBannerImage) {
          guildPowerupBannerImage.markAsDismissed(constants2.TAKE_ACTION);
          const obj2 = { guildId: powerups };
          guildPowerupBannerImage(stateFromStores[16])(obj2);
        }
      }
      function handleDismiss() {
        if (null != guildPowerupBannerImage) {
          guildPowerupBannerImage.markAsDismissed(constants2.USER_DISMISS);
        }
      }
      type = tmp.type;
      if (closure_0(stateFromStores[14]).GuildPowerupNotificationPopoutType.LEVEL_REACHED === type) {
        let obj2 = {};
        const merged = Object.assign(obj);
        obj2.visible = true;
        obj2.renderImgComponent = function renderImgComponent() {
          return jsx(guildPowerupBannerImage(stateFromStores[17]), {
            style: powerup.boostGemBackground,
            gemWidth: 30,
            gemHeight: 30,
          });
        };
        const intl24 = closure_0(stateFromStores[18]).intl;
        let obj3 = { perkName: tmp.powerup.title };
        obj2.title = intl24.formatToPlainString(type(stateFromStores[19])["Zg/m9K"], obj3);
        const intl25 = closure_0(stateFromStores[18]).intl;
        const obj4 = { perkName: tmp.powerup.title };
        obj2.description = intl25.formatToPlainString(type(stateFromStores[19])["1EGXSK"], obj4);
        const intl26 = closure_0(stateFromStores[18]).intl;
        obj2.buttonLabel = intl26.string(closure_0(stateFromStores[18]).t.RzWDqY);
        obj2.buttonVariant = "primary";
        obj2.onButtonPress = handleButtonPress;
        obj2.onDismiss = handleDismiss;
        return obj2;
      } else if (closure_0(stateFromStores[14]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE === type) {
        const obj5 = {};
        const merged1 = Object.assign(obj);
        obj5.visible = true;
        obj5.renderImgComponent = function renderImgComponent() {
          return jsx(guildPowerupBannerImage(stateFromStores[17]), {
            style: powerup.boostGemBackground,
            gemWidth: 30,
            gemHeight: 30,
          });
        };
        const intl21 = closure_0(stateFromStores[18]).intl;
        obj5.title = intl21.string(type(stateFromStores[19]).QpQBPQ);
        const intl22 = closure_0(stateFromStores[18]).intl;
        obj5.description = intl22.string(type(stateFromStores[19])["6hn0xF"]);
        const intl23 = closure_0(stateFromStores[18]).intl;
        obj5.buttonLabel = intl23.string(closure_0(stateFromStores[18]).t.RzWDqY);
        obj5.buttonVariant = "primary";
        obj5.onButtonPress = handleButtonPress;
        obj5.onDismiss = handleDismiss;
        return obj5;
      } else if (closure_0(stateFromStores[14]).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE === type) {
        const powerups = tmp.powerups;
        if (0 === powerups.length) {
          return obj;
        } else {
          if (powerups.length >= 3) {
            const intl18 = closure_0(stateFromStores[18]).intl;
            const obj6 = { perk: powerups[0].title, perk2: powerups[1].title, perk3: powerups[2].title };
            let formatToPlainStringResult = intl18.formatToPlainString(type(stateFromStores[19])["6Sv+3M"], obj6);
            let tmp34 = type;
          } else if (2 === powerups.length) {
            const intl17 = closure_0(stateFromStores[18]).intl;
            const obj7 = { perks: null };
            const _HermesInternal = HermesInternal;
            obj7.perks = "" + powerups[0].title + " & " + powerups[1].title;
            formatToPlainStringResult = intl17.formatToPlainString(type(stateFromStores[19]).wcQOqC, obj7);
            tmp34 = type;
          } else {
            const intl16 = closure_0(stateFromStores[18]).intl;
            const obj8 = { perk: powerups[0].title };
            tmp34 = type;
            formatToPlainStringResult = intl16.formatToPlainString(type(stateFromStores[19]).ZF8NT6, obj8);
          }
          const obj9 = {};
          const merged2 = Object.assign(obj);
          obj9.visible = true;
          obj9.renderImgComponent = function renderImgComponent() {
            if (powerups.length > 1) {
              let str = _modDef15780;
            } else {
              str = useGetGuildPowerupBannerImage.getGuildPowerupBannerImage(powerups[0], stateFromStores1, true);
              if (str == null) {
                str = "";
              }
            }
            const obj2 = { imageUrl: str, isAnimated: 1 === powerups.length, style: null };
            const items = [,];
            ({ coachmarkImage: arr2[0], coachmarkCover: arr2[1] } = closure_3);
            obj2.style = items;
            return jsx(GuildPowerupsImageDefault, { imageUrl: str, isAnimated: 1 === powerups.length, style: null });
          };
          const intl19 = closure_0(stateFromStores[18]).intl;
          let str10 = found1;
          if (found1 == null) {
            str10 = "";
          }
          const obj10 = { guildName: str10 };
          obj9.title = intl19.formatToPlainString(tmp34(stateFromStores[19]).LmpChE, obj10);
          obj9.description = formatToPlainStringResult;
          const intl20 = closure_0(stateFromStores[18]).intl;
          obj9.buttonLabel = intl20.string(closure_0(stateFromStores[18]).t.RzWDqY);
          obj9.buttonVariant = "primary";
          obj9.onButtonPress = handleButtonPress;
          obj9.onDismiss = handleDismiss;
          return obj9;
        }
      } else if (closure_0(stateFromStores[14]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE === type) {
        const powerups1 = tmp.powerups;
        const found = powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_TAG_SKU_ID);
        if (null != found) {
          guildPowerupBannerImage = closure_0(stateFromStores[22]).getGuildPowerupBannerImage(
            found,
            stateFromStores1,
            true,
          );
          if (null != guildPowerupBannerImage) {
            const obj11 = {};
            const merged3 = Object.assign(obj);
            obj11.visible = true;
            obj11.renderImgComponent = function renderImgComponent() {
              return jsx(GuildPowerupsImageDefault, {
                imageUrl: guildPowerupBannerImage,
                isAnimated: !stateFromStores1,
                style: powerup.coachmarkImage,
              });
            };
            const intl13 = closure_0(stateFromStores[18]).intl;
            obj11.title = intl13.string(type(stateFromStores[19]).GcEkAP);
            const intl14 = closure_0(stateFromStores[18]).intl;
            obj11.description = intl14.string(type(stateFromStores[19]).yo0g7X);
            const intl15 = closure_0(stateFromStores[18]).intl;
            obj11.buttonLabel = intl15.string(closure_0(stateFromStores[18]).t.RzWDqY);
            obj11.buttonVariant = "primary";
            obj11.onButtonPress = handleButtonPress;
            obj11.onDismiss = handleDismiss;
            return obj11;
          }
          const tmp50Result = closure_0(stateFromStores[22]);
        }
        found1 = powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
        if (null != found1) {
          const obj12 = {};
          const merged4 = Object.assign(obj);
          obj12.visible = true;
          obj12.renderImgComponent = function renderImgComponent() {
            guildPowerupBannerImage = useGetGuildPowerupBannerImage.getGuildPowerupBannerImage(
              found1,
              stateFromStores1,
              true,
            );
            if (guildPowerupBannerImage == null) {
              guildPowerupBannerImage = _modDef15776;
            }
            const obj2 = { imageUrl: guildPowerupBannerImage, isAnimated: !stateFromStores1, style: null };
            const items = [,];
            ({ coachmarkImage: arr[0], coachmarkCover: arr[1] } = closure_3);
            obj2.style = items;
            return <tmp4 imageUrl={guildPowerupBannerImage} isAnimated={!stateFromStores1} style={null} />;
          };
          obj12.title = found1.title;
          let str5 = "";
          if (typeof found1.description === "string") {
            str5 = found1.description;
          }
          obj12.description = str5;
          const intl12 = closure_0(stateFromStores[18]).intl;
          obj12.buttonLabel = intl12.string(closure_0(stateFromStores[18]).t.RzWDqY);
          obj12.buttonVariant = "primary";
          obj12.onButtonPress = handleButtonPress;
          obj12.onDismiss = handleDismiss;
          return obj12;
        } else if (null != powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).VANITY_URL_POWERUP_SKU_ID)) {
          const obj13 = {};
          const merged5 = Object.assign(obj);
          obj13.visible = true;
          obj13.renderImgComponent = function renderImgComponent() {
            const obj = { imageUrl: guildPowerupBannerImage(stateFromStores[25]), style: powerup.coachmarkImage };
            return jsx(guildPowerupBannerImage(stateFromStores[20]), {
              imageUrl: guildPowerupBannerImage(stateFromStores[25]),
              style: powerup.coachmarkImage,
            });
          };
          const intl9 = closure_0(stateFromStores[18]).intl;
          obj13.title = intl9.string(type(stateFromStores[19]).Ygpx4Q);
          const intl10 = closure_0(stateFromStores[18]).intl;
          obj13.description = intl10.string(type(stateFromStores[19]).mmNkUA);
          const intl11 = closure_0(stateFromStores[18]).intl;
          obj13.buttonLabel = intl11.string(closure_0(stateFromStores[18]).t.RzWDqY);
          obj13.buttonVariant = "primary";
          obj13.onButtonPress = handleButtonPress;
          obj13.onDismiss = handleDismiss;
          return obj13;
        } else if (null != powerups1.find((skuId) => set2.has(skuId.skuId))) {
          const obj14 = {};
          const merged6 = Object.assign(obj);
          obj14.visible = true;
          obj14.renderImgComponent = function renderImgComponent() {
            const obj = { imageUrl: guildPowerupBannerImage(stateFromStores[26]), style: powerup.coachmarkImage };
            return jsx(guildPowerupBannerImage(stateFromStores[20]), {
              imageUrl: guildPowerupBannerImage(stateFromStores[26]),
              style: powerup.coachmarkImage,
            });
          };
          const intl6 = closure_0(stateFromStores[18]).intl;
          obj14.title = intl6.string(type(stateFromStores[19])["kA2c+n"]);
          const intl7 = closure_0(stateFromStores[18]).intl;
          obj14.description = intl7.string(type(stateFromStores[19]).TUilLj);
          const intl8 = closure_0(stateFromStores[18]).intl;
          obj14.buttonLabel = intl8.string(closure_0(stateFromStores[18]).t.RzWDqY);
          obj14.buttonVariant = "primary";
          obj14.onButtonPress = handleButtonPress;
          obj14.onDismiss = handleDismiss;
          return obj14;
        } else if (null != powerups1.find((skuId) => set.has(skuId.skuId))) {
          const obj15 = {};
          const merged7 = Object.assign(obj);
          obj15.visible = true;
          obj15.renderImgComponent = function renderImgComponent() {
            const obj = { imageUrl: guildPowerupBannerImage(stateFromStores[27]), style: powerup.coachmarkImage };
            return jsx(guildPowerupBannerImage(stateFromStores[20]), {
              imageUrl: guildPowerupBannerImage(stateFromStores[27]),
              style: powerup.coachmarkImage,
            });
          };
          const intl3 = closure_0(stateFromStores[18]).intl;
          obj15.title = intl3.string(type(stateFromStores[19])["kA2c+n"]);
          const intl4 = closure_0(stateFromStores[18]).intl;
          obj15.description = intl4.string(type(stateFromStores[19]).TUilLj);
          const intl5 = closure_0(stateFromStores[18]).intl;
          obj15.buttonLabel = intl5.string(closure_0(stateFromStores[18]).t.RzWDqY);
          obj15.buttonVariant = "primary";
          obj15.onButtonPress = handleButtonPress;
          obj15.onDismiss = handleDismiss;
          return obj15;
        } else {
          let tmp52 = obj;
          if (
            null !=
            powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID)
          ) {
            const obj16 = {};
            const merged8 = Object.assign(obj);
            obj16.visible = true;
            obj16.renderImgComponent = function renderImgComponent() {
              const obj = {
                imageUrl: guildPowerupBannerImage(stateFromStores[28]),
                isAnimated: false,
                style: powerup.coachmarkImage,
              };
              return jsx(guildPowerupBannerImage(stateFromStores[20]), {
                imageUrl: guildPowerupBannerImage(stateFromStores[28]),
                isAnimated: false,
                style: powerup.coachmarkImage,
              });
            };
            const intl27 = closure_0(stateFromStores[18]).intl;
            obj16.title = intl27.string(type(stateFromStores[19]).rp0Ff1);
            const intl28 = closure_0(stateFromStores[18]).intl;
            obj16.description = intl28.string(type(stateFromStores[19])["3L/DZq"]);
            const intl29 = closure_0(stateFromStores[18]).intl;
            obj16.buttonLabel = intl29.string(closure_0(stateFromStores[18]).t.RzWDqY);
            obj16.buttonVariant = "primary";
            obj16.onButtonPress = handleButtonPress;
            obj16.onDismiss = handleDismiss;
            tmp52 = obj16;
          }
          return tmp52;
        }
      } else if (closure_0(stateFromStores[14]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK === type) {
        const powerup = tmp.powerup;
        const obj17 = {};
        const merged9 = Object.assign(obj);
        obj17.visible = true;
        obj17.offsetY = 8;
        obj17.renderImgComponent = function renderImgComponent() {
          if (powerup.type === constants.LEVEL) {
            const obj2 = { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 };
            let tmp9Result = jsx(GuildPowerupsBoostGemDefault, {
              style: powerup.boostGemBackground,
              gemWidth: 30,
              gemHeight: 30,
            });
          } else {
            let str = useGetGuildPowerupBannerImage.getGuildPowerupBannerImage(tmp, stateFromStores1, true);
            if (str == null) {
              str = "";
            }
            const obj = { imageUrl: str, isAnimated: !stateFromStores1, style: null };
            const items = [powerup.coachmarkImage, powerup.coachmarkCover];
            obj.style = items;
            tmp9Result = <tmp12 imageUrl={str} isAnimated={!stateFromStores1} style={null} />;
          }
          return tmp9Result;
        };
        const intl = closure_0(stateFromStores[18]).intl;
        obj17.title = intl.string(type(stateFromStores[19]).n37JhA);
        if (true !== closure_5) {
          if (powerup.type !== constants.LEVEL) {
            let Yr1ogl = tmp5(stateFromStores[19])["7MZ2tu"];
          }
          const obj18 = { boostCount: num, perkName: powerup.title };
          obj17.description = tmp6(Yr1ogl, obj18);
          const intl2 = closure_0(stateFromStores[18]).intl;
          obj17.buttonLabel = intl2.string(closure_0(stateFromStores[18]).t.oPAx73);
          obj17.buttonVariant = "primary";
          obj17.onButtonPress = function onButtonPress() {
            guildPowerupBannerImage.markAsDismissed(constants2.TAKE_ACTION);
            set2();
          };
          obj17.onDismiss = handleDismiss;
          return obj17;
        }
        Yr1ogl = tmp5(stateFromStores[19]).Yr1ogl;
      } else {
        if (closure_0(stateFromStores[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE !== type) {
          if (
            closure_0(stateFromStores[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE !==
            type
          ) {
            const GAME_SERVER_HOSTING_ENABLED = closure_0(stateFromStores[14]).GuildPowerupNotificationPopoutType
              .GAME_SERVER_HOSTING_ENABLED;
          }
        }
        return obj;
      }
    }
  }, items3);
  let obj2 = require("initialize");
  let obj3 = { page: constants2.GUILD_CHANNEL, section: constants3.GUILD_HEADER };
  const coachmark = require("useCoachmark").useCoachmark(targetRef, memo);
}
