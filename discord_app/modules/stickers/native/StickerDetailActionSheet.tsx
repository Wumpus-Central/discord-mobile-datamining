// === Module 10145: StickerDetailActionSheet ===

// Module 10145 (StickerDetailActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4580 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import StickersUtils from "StickersUtils" /* 5435 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 6730 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import StarIcon from "StarIcon" /* 9956 */;
import StarOutlineIcon2 from "StarOutlineIcon" /* 9958 */;
import StickersHooks from "StickersHooks" /* 10124 */;
import StickersActionCreators from "StickersActionCreators" /* 10125 */;
import stickers_StickersUtils from "stickers/StickersUtils" /* 10126 */;
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet" /* 10132 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 10144 */;
import openStickersPremiumUpsellAlertDefault from "openStickersPremiumUpsellAlert" /* 10148 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import StickersStore from "StickersStore" /* 5694 */;

const openStickerPackDetailActionSheetDefault = openStickerPackDetailActionSheet;

require = fn;
function UnavailableStickerDetail(arg0) {
  ({ renderableSticker, channel } = arg0);
  importDefault = undefined;
  let stickerAssetUrl;
  const tmp = closure_24();
  const currentUser = UserStore.getCurrentUser();
  const items = [channel.guild_id];
  const result = require("PremiumUtils").canUseCustomStickersEverywhere(currentUser);
  importDefault = noop.useMemo(() => {
    if (null != channel.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items);
  let obj = require("PremiumUtils");
  let tidaWebformEnabled = require("TidaWebformExperiment").useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = channel(stickerAssetUrl[35]).DeveloperMode;
  if (tidaWebformEnabled) {
    tidaWebformEnabled = DeveloperMode.useSetting();
  }
  let obj3 = require("TidaWebformExperiment");
  stickerAssetUrl = channel(stickerAssetUrl[36]).getStickerAssetUrl(renderableSticker);
  const items1 = [stickerAssetUrl];
  const obj4 = { style: tmp.guildEmojiTopContainer, children: null };
  const callback = noop.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { stickerUrl: tmp };
      obj.openLazy(asyncRequireImpl(10146, dependencyMap.paths), "StickerOptionsActionSheet", obj2, "stack");
    }
  }, items1);
  const items2 = [closure_21(require("Sticker"), { sticker: renderableSticker, size: 48 }), , ];
  const obj5 = { style: tmp.guildEmojiDescription, children: null };
  const items3 = [closure_21(channel(stickerAssetUrl[20]).Text, { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: renderableSticker.name }), ];
  const obj7 = { style: tmp.description, variant: "text-sm/medium", children: null };
  const intl = channel(tmp4[21]).intl;
  if (result) {
    let stringResult = intl.string(channel(tmp4[21]).t.vZaScH);
  } else {
    const obj8 = {
      openPremiumSettings() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          AnalyticsUtilsDefault.track(constants3.PREMIUM_PROMOTION_OPENED, { location_page: analyticsLocation.page, location_section: analyticsLocation.section });
          const obj3 = { location_page: analyticsLocation.page, location_section: analyticsLocation.section };
          openUserSettings.openUserSettings({ screen: constants5.PREMIUM, params: { analyticsLocation } });
        }
    };
    stringResult = intl.format(channel(tmp4[21]).t.hGWuxU, obj8);
  }
  obj7.children = stringResult;
  items3[1] = closure_21(channel(stickerAssetUrl[20]).Text, obj7);
  obj5.children = items3;
  items2[1] = closure_23(closure_6, obj5);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = null != stickerAssetUrl;
  }
  if (tidaWebformEnabled) {
    const obj9 = { accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl2 = channel(tmp4[21]).intl;
    obj9.accessibilityLabel = intl2.string(channel(tmp4[21]).t.PdRCRg);
    obj9.style = tmp.moreMenuIcon;
    obj9.onPress = callback;
    const obj10 = { color: tmp3(tmp4[13]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj9.children = closure_21(channel(tmp4[45]).MoreHorizontalIcon, obj10);
    tidaWebformEnabled = closure_21(closure_8, obj9);
  }
  items2[2] = tidaWebformEnabled;
  obj4.children = items2;
  return closure_23(closure_6, obj4);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ActivityIndicator: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const StickerPickerConstants = fn(10095);
({ PADDING_HORIZONTAL: closure_12, MIN_MARGIN: map1, STICKER_SIZE: closure_14 } = StickerPickerConstants);
const Constants = fn(1085);
({ AnalyticsPages: closure_15, AnalyticsSections: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18, UserSettingsSections: closure_19 } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(6653).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(4896);
const PlatformUtils = fn(1369);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let obj = { content: { padding: 16, paddingBottom: num }, description: { lineHeight: 18, marginTop: 4 }, guildEmojiTopContainer: { flexDirection: "row", alignItems: "center" }, buttonContainer: { marginTop: nativeDefault.space.PX_12 }, guildEmojiDescription: { paddingLeft: 16, flex: 1 }, divider: null, moreMenuIcon: null, favoriteContainer: null, starIcon: null, starIconSelected: null, starIconUnselected: null };
let obj4 = { marginTop: nativeDefault.space.PX_12 };
obj.divider = { marginLeft: 0, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.moreMenuIcon = { height: 32, width: 32, justifyContent: "center", alignItems: "center" };
let obj5 = { marginLeft: 0, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.favoriteContainer = { paddingTop: nativeDefault.space.PX_4 };
obj.starIcon = { height: 32, width: 32 };
let obj6 = { paddingTop: nativeDefault.space.PX_4 };
obj.starIconSelected = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let obj7 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj.starIconUnselected = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_24 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(13);
  const tmp2 = closure_24();
  importDefault = tmp2;
  let obj = require("c");
  const favoriteStickerIds = require("StickersHooks").useFavoriteStickerIds();
  if (cResult[0] === favoriteStickerIds) {
    if (cResult[1] === arg0) {
      let tmp3 = cResult[2];
    }
    dependencyMap = tmp3;
    if (cResult[3] !== tmp2) {
      const fn = function s(arg0) {
        const obj = {};
        const merged = Object.assign(starIcon.starIcon);
        if (arg0) {
          const merged1 = Object.assign(starIcon.starIconSelected);
          let style = obj;
        } else {
          const merged2 = Object.assign(starIcon.starIconUnselected);
          style = obj;
        }
        if (arg0) {
          let StarOutlineIcon = StarIcon.StarIcon;
        } else {
          StarOutlineIcon = StarOutlineIcon2.StarOutlineIcon;
        }
        return guild(StarOutlineIcon, { style });
      };
      cResult[3] = tmp2;
      cResult[4] = fn;
      class S {
        constructor() {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[19]);
          hideActionSheetResult = obj.hideActionSheet();
          content = function content() {
            const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: null };
            const intl = closure_0(1126).intl;
            const string = intl.string;
            const t = closure_0(1126).t;
            if (dependencyMap) {
              let stringResult = string(t.in1rga);
            } else {
              stringResult = string(t.mE2e8A);
            }
            obj.children = stringResult;
            return closure_2_21(closure_0(4892).Text, obj);
          };
          tmp4 = closure_0;
          obj2 = closure_0(closure_2[22]);
          designSystemsNotificationComponents = obj2.getDesignSystemsNotificationComponents("StickerDetailActionSheet");
          obj3 = closure_0(closure_2[23]);
          if (closure_2) {
            tmp10 = closure_0;
            unfavoriteStickerResult = obj3.unfavoriteSticker(closure_0);
            tmpResult = tmp(tmp2[24]);
            if (designSystemsNotificationComponents) {
              obj1 = { text: null, icon: null };
              intl2 = tmp4(tmp2[21]).intl;
              obj1.text = intl2.string(tmp4(tmp2[21]).t.in1rga);
              obj1.icon = tmp4(tmp2[18]).StarOutlineIcon;
              str2 = "STICKER_UNFAVORITED";
              openManaResult = tmpResult.openMana("STICKER_UNFAVORITED", obj1);
              return;
            } else {
              obj10 = { key: "STICKER_UNFAVORITED", icon: null, content: null };
              obj10.icon = function icon() {
                return closure_1_3(false);
              };
              obj10.content = content;
              openResult = tmpResult.open(obj10);
            }
          } else {
            tmp6 = closure_0;
            favoriteStickerResult = obj3.favoriteSticker(closure_0);
            tmpResult1 = tmp(tmp2[24]);
            if (designSystemsNotificationComponents) {
              obj11 = { text: null, icon: null, iconColor: null };
              intl = tmp4(tmp2[21]).intl;
              obj11.text = intl.string(tmp4(tmp2[21]).t.mE2e8A);
              obj11.icon = tmp4(tmp2[17]).StarIcon;
              obj11.iconColor = tmp(tmp2[13]).colors.ICON_FEEDBACK_WARNING;
              str = "STICKER_FAVORITED";
              openManaResult1 = tmpResult1.openMana("STICKER_FAVORITED", obj11);
              return;
            } else {
              obj12 = { key: "STICKER_FAVORITED", icon: null, content: null };
              obj12.icon = function icon() {
                return closure_1_3(true);
              };
              obj12.content = content;
              openResult1 = tmpResult1.open(obj12);
            }
          }
          return;
        }
      }
    }
    closure_3 = tmp5;
    if (cResult[5] === tmp3) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === arg0) {
          let tmp6 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp3) {
            if (cResult[11] === tmp5) {
              let tmp7 = cResult[12];
            }
            return tmp7;
          }
        }
        let obj3 = { isFavorite: tmp3, handleFavorite: tmp6, renderStarIcon: null };
        class S {
          constructor() {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[19]);
            hideActionSheetResult = obj.hideActionSheet();
            content = function content() {
              const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: null };
              const intl = closure_0(1126).intl;
              const string = intl.string;
              const t = closure_0(1126).t;
              if (dependencyMap) {
                let stringResult = string(t.in1rga);
              } else {
                stringResult = string(t.mE2e8A);
              }
              obj.children = stringResult;
              return closure_2_21(closure_0(4892).Text, obj);
            };
            tmp4 = closure_0;
            obj2 = closure_0(closure_2[22]);
            designSystemsNotificationComponents = obj2.getDesignSystemsNotificationComponents("StickerDetailActionSheet");
            obj3 = closure_0(closure_2[23]);
            if (closure_2) {
              tmp10 = closure_0;
              unfavoriteStickerResult = obj3.unfavoriteSticker(closure_0);
              tmpResult = tmp(tmp2[24]);
              if (designSystemsNotificationComponents) {
                obj1 = { text: null, icon: null };
                intl2 = tmp4(tmp2[21]).intl;
                obj1.text = intl2.string(tmp4(tmp2[21]).t.in1rga);
                obj1.icon = tmp4(tmp2[18]).StarOutlineIcon;
                str2 = "STICKER_UNFAVORITED";
                openManaResult = tmpResult.openMana("STICKER_UNFAVORITED", obj1);
                return;
              } else {
                obj10 = { key: "STICKER_UNFAVORITED", icon: null, content: null };
                obj10.icon = function icon() {
                  return closure_1_3(false);
                };
                obj10.content = content;
                openResult = tmpResult.open(obj10);
              }
            } else {
              tmp6 = closure_0;
              favoriteStickerResult = obj3.favoriteSticker(closure_0);
              tmpResult1 = tmp(tmp2[24]);
              if (designSystemsNotificationComponents) {
                obj11 = { text: null, icon: null, iconColor: null };
                intl = tmp4(tmp2[21]).intl;
                obj11.text = intl.string(tmp4(tmp2[21]).t.mE2e8A);
                obj11.icon = tmp4(tmp2[17]).StarIcon;
                obj11.iconColor = tmp(tmp2[13]).colors.ICON_FEEDBACK_WARNING;
                str = "STICKER_FAVORITED";
                openManaResult1 = tmpResult1.openMana("STICKER_FAVORITED", obj11);
                return;
              } else {
                obj12 = { key: "STICKER_FAVORITED", icon: null, content: null };
                obj12.icon = function icon() {
                  return closure_1_3(true);
                };
                obj12.content = content;
                openResult1 = tmpResult1.open(obj12);
              }
            }
            return;
          }
        }
        cResult[9] = tmp6;
        cResult[10] = tmp3;
        cResult[11] = tmp5;
        cResult[12] = obj3;
        tmp7 = obj3;
      }
    }
    class S {
      constructor() {
        tmp = closure_1;
        tmp2 = closure_2;
        obj = closure_1(closure_2[19]);
        hideActionSheetResult = obj.hideActionSheet();
        content = function content() {
          const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: null };
          const intl = closure_0(1126).intl;
          const string = intl.string;
          const t = closure_0(1126).t;
          if (dependencyMap) {
            let stringResult = string(t.in1rga);
          } else {
            stringResult = string(t.mE2e8A);
          }
          obj.children = stringResult;
          return closure_2_21(closure_0(4892).Text, obj);
        };
        tmp4 = closure_0;
        obj2 = closure_0(closure_2[22]);
        designSystemsNotificationComponents = obj2.getDesignSystemsNotificationComponents("StickerDetailActionSheet");
        obj3 = closure_0(closure_2[23]);
        if (closure_2) {
          tmp10 = closure_0;
          unfavoriteStickerResult = obj3.unfavoriteSticker(closure_0);
          tmpResult = tmp(tmp2[24]);
          if (designSystemsNotificationComponents) {
            obj1 = { text: null, icon: null };
            intl2 = tmp4(tmp2[21]).intl;
            obj1.text = intl2.string(tmp4(tmp2[21]).t.in1rga);
            obj1.icon = tmp4(tmp2[18]).StarOutlineIcon;
            str2 = "STICKER_UNFAVORITED";
            openManaResult = tmpResult.openMana("STICKER_UNFAVORITED", obj1);
            return;
          } else {
            obj10 = { key: "STICKER_UNFAVORITED", icon: null, content: null };
            obj10.icon = function icon() {
              return closure_1_3(false);
            };
            obj10.content = content;
            openResult = tmpResult.open(obj10);
          }
        } else {
          tmp6 = closure_0;
          favoriteStickerResult = obj3.favoriteSticker(closure_0);
          tmpResult1 = tmp(tmp2[24]);
          if (designSystemsNotificationComponents) {
            obj11 = { text: null, icon: null, iconColor: null };
            intl = tmp4(tmp2[21]).intl;
            obj11.text = intl.string(tmp4(tmp2[21]).t.mE2e8A);
            obj11.icon = tmp4(tmp2[17]).StarIcon;
            obj11.iconColor = tmp(tmp2[13]).colors.ICON_FEEDBACK_WARNING;
            str = "STICKER_FAVORITED";
            openManaResult1 = tmpResult1.openMana("STICKER_FAVORITED", obj11);
            return;
          } else {
            obj12 = { key: "STICKER_FAVORITED", icon: null, content: null };
            obj12.icon = function icon() {
              return closure_1_3(true);
            };
            obj12.content = content;
            openResult1 = tmpResult1.open(obj12);
          }
        }
        return;
      }
    }
    cResult[5] = tmp3;
    cResult[6] = tmp5;
    cResult[7] = arg0;
    cResult[8] = S;
    tmp6 = S;
  }
  const hasItem = favoriteStickerIds.includes(arg0);
  cResult[0] = favoriteStickerIds;
  cResult[1] = arg0;
  cResult[2] = hasItem;
  tmp3 = hasItem;
}) : ((arg0) => {
  _require = arg0;
  const tmp = closure_24();
  const starIcon = tmp;
  const favoriteStickerIds = require("StickersHooks").useFavoriteStickerIds();
  hasItem = favoriteStickerIds.includes(arg0);
  const items = [tmp];
  const renderStarIcon = noop.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(starIcon.starIcon);
    if (arg0) {
      const merged1 = Object.assign(starIcon.starIconSelected);
      let style = obj;
    } else {
      const merged2 = Object.assign(starIcon.starIconUnselected);
      style = obj;
    }
    if (arg0) {
      let StarOutlineIcon = StarIcon.StarIcon;
    } else {
      StarOutlineIcon = StarOutlineIcon2.StarOutlineIcon;
    }
    return guild(StarOutlineIcon, { style });
  }, items);
  const items1 = [hasItem, arg0, renderStarIcon];
  let obj = require("StickersHooks");
  return {
    isFavorite: hasItem,
    handleFavorite: noop.useCallback(() => {
      function content() {
        const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: null };
        const intl = closure_0(hasItem[21]).intl;
        const string = intl.string;
        const t = closure_0(hasItem[21]).t;
        if (closure_1_2) {
          let stringResult = string(t.in1rga);
        } else {
          stringResult = string(t.mE2e8A);
        }
        obj.children = stringResult;
        return closure_2_21(closure_0(hasItem[20]).Text, obj);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("StickerDetailActionSheet");
      const obj3 = StickersActionCreators;
      if (hasItem) {
        obj3.unfavoriteSticker(closure_0);
        const tmpResult = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          const obj4 = { text: null, icon: null };
          const intl2 = util.intl;
          obj4.text = intl2.string(util.t.in1rga);
          obj4.icon = StarOutlineIcon2.StarOutlineIcon;
          tmpResult.openMana("STICKER_UNFAVORITED", obj4);
        } else {
          const obj5 = {
            key: "STICKER_UNFAVORITED",
            icon() {
                  return renderStarIcon(false);
                },
            content
          };
          tmpResult.open(obj5);
        }
      } else {
        obj3.favoriteSticker(closure_0);
        const tmpResult2 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          const obj6 = { text: null, icon: null, iconColor: null };
          let intl = util.intl;
          obj6.text = intl.string(util.t.mE2e8A);
          obj6.icon = StarIcon.StarIcon;
          obj6.iconColor = nativeDefault.colors.ICON_FEEDBACK_WARNING;
          tmpResult2.openMana("STICKER_FAVORITED", obj6);
        } else {
          const obj7 = {
            key: "STICKER_FAVORITED",
            icon() {
                  return renderStarIcon(true);
                },
            content
          };
          tmpResult2.open(obj7);
        }
      }
    }, items1),
    renderStarIcon
  };
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = chatInputRef(pack_id[15]).c(25);
  ({ sticker, chatInputRef } = channel);
  const tmp4 = closure_24();
  importDefault = tmp4;
  pack_id = sticker.pack_id;
  const name = sticker.name;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StickersStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== pack_id) {
    const fn = function c() {
      return StickersStore.getStickerPack(pack_id);
    };
    cResult[1] = pack_id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = chatInputRef(pack_id[15]);
  const stateFromStores = chatInputRef(pack_id[25]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [StickersStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== pack_id) {
    const fn2 = function b() {
      return StickersStore.isPremiumPack(pack_id);
    };
    cResult[4] = pack_id;
    cResult[5] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  let tmpResult = chatInputRef(pack_id[25]);
  const stateFromStores1 = chatInputRef(pack_id[25]).useStateFromStores(tmp9, tmp11);
  closure_6 = tmp13;
  const tmpResult3 = chatInputRef(pack_id[25]);
  const fetchStickerPack = chatInputRef(pack_id[16]).useFetchStickerPack(pack_id);
  const diff = require("useWindowDimensions")().width - 2 * closure_12;
  const rounded = Math.floor(Math.min(ACTION_SHEET_MAX_WIDTH, diff - closure_13) / (closure_14 + closure_13));
  if (null != channel.channel.guild_id) {
    let DM_CHANNEL = constants.GUILD_CHANNEL;
  } else {
    DM_CHANNEL = constants.DM_CHANNEL;
  }
  if (cResult[6] !== DM_CHANNEL) {
    let obj2 = { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
    cResult[6] = DM_CHANNEL;
    cResult[7] = obj2;
    let tmp19 = obj2;
  } else {
    tmp19 = cResult[7];
  }
  _location = tmp19;
  if (cResult[8] === tmp19) {
    if (cResult[9] === stateFromStores) {
      let tmp21 = cResult[10];
      let tmp22 = cResult[11];
    }
    const effect = stateFromStores1.useEffect(tmp21, tmp22);
    if (cResult[12] === tmp19) {
      if (cResult[13] === chatInputRef) {
        if (cResult[14] === diff) {
          if (cResult[15] === tmp13) {
            if (cResult[16] === stateFromStores1) {
              if (cResult[17] === name) {
                if (cResult[18] === rounded) {
                  if (cResult[19] === pack_id) {
                    if (cResult[20] === tmp4.description) {
                      let tmp25 = cResult[21];
                    }
                    if (cResult[22] === stateFromStores) {
                      if (cResult[23] === tmp25) {
                        return cResult[24];
                      }
                    }
                    if (null == stateFromStores) {
                      let tmp25Result = closure_21(diff, { size: "large" });
                    } else {
                      tmp25Result = tmp25(stateFromStores);
                    }
                    class B {
                      constructor(arg0) {
                        closure_0 = channel;
                        tmp = closure_5;
                        intl = chatInputRef(pack_id[21]).intl;
                        format = intl.format;
                        t = chatInputRef(pack_id[21]).t;
                        if (closure_5) {
                          obj1 = { stickerPackName: null };
                          obj1.stickerPackName = channel.name;
                          formatResult = format(t.auckXz, obj1);
                        } else {
                          obj = { stickerPackName: null };
                          obj.stickerPackName = channel.name;
                          formatResult = format(t.OzB6e3, obj);
                        }
                        tmp5 = closure_1_21;
                        tmp3 = closure_1_23;
                        tmp4 = closure_1_22;
                        obj9 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: name };
                        items = [, , , , ];
                        items[0] = closure_1_21(chatInputRef(pack_id[20]).Text, obj9);
                        obj10 = { style: closure_1.description, variant: "text-sm/medium", children: formatResult };
                        items[1] = closure_1_21(chatInputRef(pack_id[20]).Text, obj10);
                        tmp6 = closure_1;
                        obj11 = { containerWidth: closure_7, stickers: null, rowSize: null };
                        stickers = channel.stickers;
                        tmp7 = closure_1(pack_id[28]);
                        obj11.stickers = stickers.slice(0, closure_8);
                        obj11.rowSize = closure_8;
                        items[2] = closure_1_21(tmp7, obj11);
                        tmp5Result = null;
                        if (tmp) {
                          tmp9 = closure_6;
                          obj12 = { style: null };
                          obj13 = { height: null };
                          tmp10 = pack_id;
                          obj13.height = tmp6(pack_id[13]).space.PX_16;
                          obj12.style = obj13;
                          tmp5Result = tmp5(closure_6, obj12);
                        }
                        items[3] = tmp5Result;
                        if (tmp) {
                          tmp11 = chatInputRef;
                          tmp12 = pack_id;
                          obj14 = { variant: "secondary", text: null, onPress: null };
                          tmp13 = chatInputRef;
                          tmp14 = pack_id;
                          intl2 = chatInputRef(pack_id[21]).intl;
                          tmp15 = chatInputRef;
                          tmp16 = pack_id;
                          obj14.text = intl2.string(chatInputRef(pack_id[21]).t.GPy3Ar);
                          obj14.onPress = function onPress() {
                            const result = showStickerDetailActionSheet.hideStickerDetailActionSheet();
                            if (closure_6) {
                              if (null != chatInputRef) {
                                const result1 = stickers_StickersUtils.openStickerPickerToPackId(tmp4, pack_id);
                                const tmpResult = stickers_StickersUtils;
                              }
                            }
                            const obj2 = { analyticsLocation, analyticsPopoutType: null, stickerPack: null };
                            obj2.analyticsPopoutType = openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_UPSELL;
                            obj2.stickerPack = stickerPack;
                            openStickerPackDetailActionSheetDefault(obj2);
                          };
                          tmp = tmp5(chatInputRef(pack_id[29]).Button, obj14);
                        }
                        items[4] = tmp;
                        return tmp3(tmp4, { children: items });
                      }
                    }
                    cResult[23] = tmp25;
                    cResult[24] = tmp25Result;
                  }
                }
              }
            }
          }
        }
      }
    }
    class B {
      constructor(arg0) {
        closure_0 = channel;
        tmp = closure_5;
        intl = chatInputRef(pack_id[21]).intl;
        format = intl.format;
        t = chatInputRef(pack_id[21]).t;
        if (closure_5) {
          obj1 = { stickerPackName: null };
          obj1.stickerPackName = channel.name;
          formatResult = format(t.auckXz, obj1);
        } else {
          obj = { stickerPackName: null };
          obj.stickerPackName = channel.name;
          formatResult = format(t.OzB6e3, obj);
        }
        tmp5 = closure_1_21;
        tmp3 = closure_1_23;
        tmp4 = closure_1_22;
        obj9 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: name };
        items = [, , , , ];
        items[0] = closure_1_21(chatInputRef(pack_id[20]).Text, obj9);
        obj10 = { style: closure_1.description, variant: "text-sm/medium", children: formatResult };
        items[1] = closure_1_21(chatInputRef(pack_id[20]).Text, obj10);
        tmp6 = closure_1;
        obj11 = { containerWidth: closure_7, stickers: null, rowSize: null };
        stickers = channel.stickers;
        tmp7 = closure_1(pack_id[28]);
        obj11.stickers = stickers.slice(0, closure_8);
        obj11.rowSize = closure_8;
        items[2] = closure_1_21(tmp7, obj11);
        tmp5Result = null;
        if (tmp) {
          tmp9 = closure_6;
          obj12 = { style: null };
          obj13 = { height: null };
          tmp10 = pack_id;
          obj13.height = tmp6(pack_id[13]).space.PX_16;
          obj12.style = obj13;
          tmp5Result = tmp5(closure_6, obj12);
        }
        items[3] = tmp5Result;
        if (tmp) {
          tmp11 = chatInputRef;
          tmp12 = pack_id;
          obj14 = { variant: "secondary", text: null, onPress: null };
          tmp13 = chatInputRef;
          tmp14 = pack_id;
          intl2 = chatInputRef(pack_id[21]).intl;
          tmp15 = chatInputRef;
          tmp16 = pack_id;
          obj14.text = intl2.string(chatInputRef(pack_id[21]).t.GPy3Ar);
          obj14.onPress = function onPress() {
            const result = showStickerDetailActionSheet.hideStickerDetailActionSheet();
            if (closure_6) {
              if (null != chatInputRef) {
                const result1 = stickers_StickersUtils.openStickerPickerToPackId(tmp4, pack_id);
                const tmpResult = stickers_StickersUtils;
              }
            }
            const obj2 = { analyticsLocation, analyticsPopoutType: null, stickerPack: null };
            obj2.analyticsPopoutType = openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_UPSELL;
            obj2.stickerPack = stickerPack;
            openStickerPackDetailActionSheetDefault(obj2);
          };
          tmp = tmp5(chatInputRef(pack_id[29]).Button, obj14);
        }
        items[4] = tmp;
        return tmp3(tmp4, { children: items });
      }
    }
    cResult[12] = tmp19;
    cResult[13] = chatInputRef;
    cResult[14] = diff;
    cResult[15] = tmp13;
    cResult[16] = stateFromStores1;
    cResult[17] = name;
    cResult[18] = rounded;
    cResult[19] = pack_id;
    cResult[20] = tmp4.description;
    cResult[21] = B;
    tmp25 = B;
  }
  class H {
    constructor() {
      if (null != closure_4) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        obj = closure_1(closure_2[27]);
        tmp4 = AnalyticEvents;
        obj1 = { location: null, type: "Sticker Upsell Sheet", sticker_pack_id: null };
        tmp5 = closure_9;
        obj1.location = closure_9;
        obj1.sticker_pack_id = tmp.id;
        trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
      }
      return;
    }
  }
  const items2 = [tmp19, stateFromStores];
  cResult[8] = tmp19;
  cResult[9] = stateFromStores;
  cResult[10] = H;
  cResult[11] = items2;
  tmp22 = items2;
  tmp21 = H;
  const tmpResult4 = chatInputRef(pack_id[16]);
}) : ((chatInputRef) => {
  ({ sticker, channel } = chatInputRef);
  chatInputRef = chatInputRef.chatInputRef;
  const pack_id = sticker.pack_id;
  const tmp = closure_24();
  const items = [StickersStore];
  const stateFromStores = channel(pack_id[25]).useStateFromStores(items, () => StickersStore.getStickerPack(pack_id));
  let obj = channel(pack_id[25]);
  const items1 = [StickersStore];
  const stateFromStores1 = channel(pack_id[25]).useStateFromStores(items1, () => StickersStore.isPremiumPack(pack_id));
  let obj2 = channel(pack_id[25]);
  const fetchStickerPack = channel(pack_id[16]).useFetchStickerPack(pack_id);
  const diff = chatInputRef(pack_id[26])().width - 2 * closure_12;
  const rounded = Math.floor(Math.min(ACTION_SHEET_MAX_WIDTH, diff - closure_13) / (closure_14 + closure_13));
  const items2 = [channel.guild_id];
  const memo = stateFromStores.useMemo(() => {
    if (null != channel.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items2);
  const items3 = [memo, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != stateFromStores) {
      const obj2 = { location: memo, type: "Sticker Upsell Sheet", sticker_pack_id: tmp.id };
      AnalyticsUtilsDefault.track(constants3.OPEN_POPOUT, obj2);
    }
  }, items3);
  if (null == stateFromStores) {
    let tmp13Result = closure_21(closure_7, { size: "large" });
  } else {
    const intl2 = channel(tmp3[21]).intl;
    const format = intl2.format;
    const t = channel(tmp3[21]).t;
    if (stateFromStores1) {
      const obj4 = { stickerPackName: stateFromStores.name };
      let formatResult = format(t.auckXz, obj4);
    } else {
      const obj5 = { stickerPackName: stateFromStores.name };
      formatResult = format(t.OzB6e3, obj5);
    }
    const obj6 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: sticker.name };
    const items4 = [closure_21(channel(tmp3[20]).Text, obj6), , , , ];
    const obj7 = { style: tmp.description, variant: "text-sm/medium", children: formatResult };
    items4[1] = closure_21(channel(tmp3[20]).Text, obj7);
    const obj8 = { containerWidth: diff, stickers: null, rowSize: null };
    const stickers = stateFromStores.stickers;
    obj8.stickers = stickers.slice(0, rounded);
    obj8.rowSize = rounded;
    items4[2] = closure_21(tmp7(tmp3[28]), obj8);
    let tmp15Result = null;
    if (stateFromStores1) {
      const obj9 = { style: null };
      const obj10 = { height: tmp7(tmp3[13]).space.PX_16 };
      obj9.style = obj10;
      tmp15Result = closure_21(memo, obj9);
    }
    items4[3] = tmp15Result;
    let tmp15Result2 = stateFromStores1;
    if (stateFromStores1) {
      const obj11 = { variant: "secondary", text: null, onPress: null };
      const intl = channel(tmp3[21]).intl;
      obj11.text = intl.string(channel(tmp3[21]).t.GPy3Ar);
      obj11.onPress = function onPress() {
        const result = showStickerDetailActionSheet.hideStickerDetailActionSheet();
        if (null != stateFromStores) {
          if (stateFromStores1) {
            if (null != chatInputRef) {
              const result1 = stickers_StickersUtils.openStickerPickerToPackId(tmp5, pack_id);
              const tmpResult = stickers_StickersUtils;
            }
          }
        }
        const obj2 = { analyticsLocation: memo, analyticsPopoutType: null, stickerPack: null };
        obj2.analyticsPopoutType = openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_UPSELL;
        obj2.stickerPack = stateFromStores;
        openStickerPackDetailActionSheetDefault(obj2);
      };
      tmp15Result2 = closure_21(channel(tmp3[29]).Button, obj11);
    }
    const obj12 = { children: null };
    items4[4] = tmp15Result2;
    obj12.children = items4;
    tmp13Result = closure_23(closure_22, obj12);
    const tmp7Result = tmp7(tmp3[28]);
  }
  return tmp13Result;
});
function GuildStickerDetail(sticker) {
  sticker = sticker.sticker;
  const channel = sticker.channel;
  let first1;
  noop = undefined;
  let stickerAssetUrl;
  let analyticsLocation;
  let obj7;
  let ref;
  const tmp = closure_24();
  const tmp3 = first1(noop.useState(null), 2);
  guild = tmp3[0];
  closure_3 = tmp3[1];
  const items = [ref];
  const stateFromStores = sticker(guild[25]).useStateFromStores(items, () => GuildStore.getGuild(sticker.guild_id));
  let hasItem = null == stateFromStores;
  if (!hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants4.DISCOVERABLE);
  }
  const tmp2Result = first1(noop.useState(!hasItem), 2);
  first1 = tmp2Result[0];
  noop = tmp2Result[1];
  const currentUser = UserStore.getCurrentUser();
  let obj2 = sticker(guild[25]);
  let result = channel(guild[33]).canUseCustomStickersEverywhere(currentUser);
  let obj3 = channel(guild[33]);
  let tidaWebformEnabled = channel(guild[34]).useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = tmp5(tmp6[35]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj4 = channel(guild[34]);
  ({ isFavorite, handleFavorite } = closure_25(sticker.id));
  if (tidaWebformEnabled) {
    tidaWebformEnabled = setting;
  }
  const tmp17 = closure_25(sticker.id);
  stickerAssetUrl = sticker(guild[36]).getStickerAssetUrl(sticker);
  const items1 = [stickerAssetUrl];
  const items2 = [channel.guild_id];
  const callback = obj.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { stickerUrl: tmp };
      obj.openLazy(asyncRequireImpl(10146, dependencyMap.paths), "StickerOptionsActionSheet", obj2, "stack");
    }
  }, items1);
  analyticsLocation = obj.useMemo(() => {
    if (null != channel.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items2);
  const tmp5Result = sticker(guild[36]);
  const obj5 = { guild_id: channel.getGuildId() };
  let merged = Object.assign(sticker(guild[39]).collectChannelAnalyticsMetadata(channel));
  const items3 = [sticker.id, first1];
  const effect = obj.useEffect(() => {
    closure_0 = async function _fetchDiscoverableGuild() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              c2 = 1;
              v3 = 1;
              const obj4 = { value: channel(guild[42])(tmp2.id), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            v3(closure_128_0);
            closure_1_5(true);
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          v3 = tmp;
          throw tmp16;
        }
      }
    };
    if (!first1) {
      (function fetchDiscoverableGuild() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items3);
  const tmp22 = sticker.guild_id === channel.getGuildId();
  const intl = tmp5(tmp6[21]).intl;
  if (result) {
    const string2 = intl.string;
    let fZ0DiG = tmp5(tmp6[21]).t;
    if (!tmp8) {
      if (tmp23) {
        let string2Result = string2(fZ0DiG.yHmoR9);
      } else {
        string2Result = string2(fZ0DiG.vZaScH);
      }
    }
    if (tmp22) {
      fZ0DiG = fZ0DiG.fZ0DiG;
      let string2Result1 = string2(fZ0DiG);
    } else {
      string2Result1 = string2(fZ0DiG["1f6D9m"]);
    }
  } else {
    if (tmp8) {
      const string = intl.string;
      const t = tmp5(tmp6[21]).t;
      if (tmp22) {
        let stringResult = string(t.jNphpt);
        let flag = true;
        let str = "Custom Sticker Popout (Upsell)";
        let flag2 = true;
      } else {
        stringResult = string(t.lyD5ZW);
        flag = true;
        str = "Custom Sticker Popout (Upsell)";
        flag2 = true;
      }
    } else if (tmp23) {
      stringResult = intl.string(tmp5(tmp6[21]).t.IuXYch);
      flag = true;
      str = "Custom Sticker Popout (Upsell)";
      flag2 = true;
    } else {
      const obj6 = {
        openPremiumSettings() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              AnalyticsUtilsDefault.track(constants3.PREMIUM_PROMOTION_OPENED, { location_page: analyticsLocation.page, location_section: analyticsLocation.section });
              const obj3 = { location_page: analyticsLocation.page, location_section: analyticsLocation.section };
              openUserSettings.openUserSettings({ screen: constants5.PREMIUM, params: { analyticsLocation } });
            }
      };
      stringResult = intl.format(tmp5(tmp6[21]).t.hGWuxU, obj6);
      flag = false;
      str = "Custom Sticker Popout (Soft Upsell)";
      flag2 = false;
    }
    let tmp29 = !flag2;
    if (!flag2) {
      tmp29 = !tmp8;
    }
    if (tmp29) {
      tmp29 = tmp23;
    }
    obj7 = { popoutAnalyticsConfig: obj.useRef(obj5).current, popoutType: str };
    ref = obj.useRef(obj7);
    const effect1 = obj.useEffect(() => {
      closure_9.current = obj7;
    });
    const items4 = [first1];
    const effect2 = obj.useEffect(() => {
      const popoutAnalyticsConfig = ref.current.popoutAnalyticsConfig;
      if (first1) {
        const obj2 = { type: tmp };
        const merged = Object.assign(popoutAnalyticsConfig);
        AnalyticsUtilsDefault.track(constants3.OPEN_POPOUT, obj2);
      }
    }, items4);
    let tmp33Result3 = null;
    if (first1) {
      const obj8 = { style: tmp.guildEmojiTopContainer, children: null };
      const obj9 = { sticker, size: 48 };
      const items5 = [closure_21(tmp14(tmp6[44]), obj9), , ];
      const obj10 = { style: tmp.guildEmojiDescription, children: null };
      const obj11 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: sticker.name };
      const items6 = [closure_21(tmp5(tmp6[20]).Text, obj11), ];
      const obj12 = { style: tmp.description, variant: "text-sm/medium", children: stringResult };
      items6[1] = closure_21(tmp5(tmp6[20]).Text, obj12);
      obj10.children = items6;
      items5[1] = closure_23(stickerAssetUrl, obj10);
      let tmp36Result = tidaWebformEnabled;
      if (tidaWebformEnabled) {
        tmp36Result = null != stickerAssetUrl;
      }
      if (tmp36Result) {
        const obj13 = { accessibilityLabel: null, style: null, onPress: null, children: null };
        const intl2 = tmp5(tmp6[21]).intl;
        obj13.accessibilityLabel = intl2.string(tmp5(tmp6[21]).t.PdRCRg);
        obj13.style = tmp.moreMenuIcon;
        obj13.onPress = callback;
        const obj14 = { color: tmp14(tmp6[13]).colors.INTERACTIVE_TEXT_DEFAULT };
        obj13.children = closure_21(tmp5(tmp6[45]).MoreHorizontalIcon, obj14);
        tmp36Result = closure_21(obj7, obj13);
      }
      items5[2] = tmp36Result;
      obj8.children = items5;
      const items7 = [closure_23(stickerAssetUrl, obj8), , , , ];
      if (flag) {
        const obj15 = { style: tmp.buttonContainer, children: null };
        const obj16 = { text: null, onPress: null };
        const intl3 = tmp5(tmp6[21]).intl;
        obj16.text = intl3.string(tmp5(tmp6[21]).t["gl/XHJ"]);
        obj16.onPress = function onPress() {
          return openStickersPremiumUpsellAlertDefault(closure_7);
        };
        const items8 = [closure_21(tmp14(tmp6[46]), obj16), ];
        const obj17 = { style: null };
        const obj18 = { height: tmp14(tmp6[13]).space.PX_16 };
        obj17.style = obj18;
        items8[1] = closure_21(tmp35, obj17);
        obj15.children = items8;
        flag = closure_23(tmp35, obj15);
        const tmp14Result = tmp14(tmp6[46]);
      }
      items7[1] = flag;
      let tmp33Result = tmp29;
      if (tmp29) {
        const obj19 = { style: tmp.buttonContainer, children: null };
        const obj20 = { text: null, onPress: null };
        const intl4 = tmp5(tmp6[21]).intl;
        obj20.text = intl4.string(tmp5(tmp6[21]).t.riu2R5);
        obj20.onPress = function onPress() {
          if (null != first) {
            const id = first.id;
            const joinGuildResult = GuildActionCreatorsDefault.joinGuild(id);
            GuildActionCreatorsDefault.joinGuild(id).then(() => {
              const result = channel(first[40]).transitionToGuildSync(id);
            }).catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
            const nextPromise = GuildActionCreatorsDefault.joinGuild(id).then(() => {
              const result = channel(first[40]).transitionToGuildSync(id);
            });
          }
        };
        const items9 = [closure_21(tmp5(tmp6[29]).Button, obj20), ];
        const obj21 = { style: null };
        const obj22 = { height: tmp14(tmp6[13]).space.PX_16 };
        obj21.style = obj22;
        items9[1] = closure_21(tmp35, obj21);
        obj19.children = items9;
        tmp33Result = closure_23(tmp35, obj19);
      }
      items7[2] = tmp33Result;
      if (!(null != stateFromStores || null != guild)) {
        items7[3] = tmp41;
        if (tidaWebformEnabled) {
          tidaWebformEnabled = tmp8;
        }
        if (tidaWebformEnabled) {
          const obj23 = { style: tmp.divider };
          const items10 = [closure_21(tmp5(tmp6[48]).FormDivider, obj23), ];
          const obj24 = { style: tmp.favoriteContainer, children: null };
          const intl6 = tmp5(tmp6[21]).intl;
          const string4 = intl6.string;
          const t2 = tmp5(tmp6[21]).t;
          if (isFavorite) {
            let string4Result = string4(t2.XhzKyF);
          } else {
            string4Result = string4(t2.kWmiPW);
          }
          const obj25 = { text: string4Result, variant: null, size: "md", onPress: null };
          let str3 = "primary";
          if (isFavorite) {
            str3 = "tertiary";
          }
          const obj26 = { children: null };
          obj25.variant = str3;
          obj25.onPress = handleFavorite;
          obj24.children = closure_21(tmp5(tmp6[29]).Button, obj25);
          items10[1] = closure_21(tmp35, obj24);
          obj26.children = items10;
          tidaWebformEnabled = closure_23(closure_22, obj26);
        }
        const obj27 = { children: null };
        items7[4] = tidaWebformEnabled;
        obj27.children = items7;
        tmp33Result3 = closure_23(closure_22, obj27);
      } else {
        const obj28 = { style: tmp.divider };
        const items11 = [closure_21(tmp5(tmp6[48]).FormDivider, obj28), ];
        if (guild == null) {
          guild = stateFromStores;
        }
        let obj29 = { guild, showingJoinGuildCta: tmp29, hasJoinedGuild: tmp8, title: null };
        const intl5 = tmp5(tmp6[21]).intl;
        const string3 = intl5.string;
        let t1 = tmp5(tmp6[21]).t;
        if (tmp8) {
          let string3Result = string3(t1.kx6pEG);
        } else {
          string3Result = string3(t1.pDE7Gb);
        }
        t1 = { children: null };
        obj29.title = string3Result;
        obj29 = closure_21(tmp14(tmp6[49]), obj29);
        items11[1] = obj29;
        t1.children = items11;
        closure_23(closure_22, t1);
        const tmp14Result2 = tmp14(tmp6[49]);
      }
    }
    return tmp33Result3;
  }
  const tmp5Result2 = sticker(guild[39]);
}
ReactCompilerGating = fn(558);
let obj8 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerDetailActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function StickerDetailActionSheet(arg0) {
  const cResult = c.c(14);
  ({ renderableSticker, channel, chatInputRef } = arg0);
  const tmp4 = closure_24();
  let num = 2;
  const tmp5 = _slicedToArray(StickersHooks.useStickerForRenderableSticker(renderableSticker, true), 2);
  const first = tmp5[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = guild(containerWidth, { size: "large" });
    cResult[0] = tmp10;
    let first1 = tmp10;
  } else {
    first1 = cResult[0];
  }
  if (null == first) {
    if (tmp5[1]) {
      if (cResult[1] === channel) {
      }
      const obj3 = { renderableSticker, channel };
      const tmp25 = guild(UnavailableStickerDetail, obj3);
      cResult[1] = channel;
      cResult[num] = renderableSticker;
      num = 3;
      cResult[3] = tmp25;
    }
  }
  let tmp11 = first1;
  if (null != first) {
    if (tmpResult.isStandardSticker(first)) {
      if (cResult[4] === channel) {
        if (cResult[5] === chatInputRef) {
        }
      }
      const obj4 = { sticker: first, channel, chatInputRef };
      const tmp20 = guild(closure_26, obj4);
      cResult[4] = channel;
      cResult[5] = chatInputRef;
      cResult[6] = first;
      cResult[7] = tmp20;
    } else {
      if (!tmpResult2.isGuildSticker(first)) {
        tmp11 = first1;
      } else {
        if (cResult[8] === channel) {
        }
        const obj5 = { sticker: first, channel };
        const tmp15 = guild(GuildStickerDetail, obj5);
        cResult[8] = channel;
        cResult[9] = first;
        cResult[10] = tmp15;
      }
      tmpResult2 = StickersUtils;
    }
    tmpResult = StickersUtils;
  }
  if (cResult[11] === tmp11) {
    if (cResult[12] === tmp4.content) {
      let tmp27 = cResult[13];
    }
    return tmp27;
  }
  const obj6 = { startExpanded: true, children: guild(timestampProducer, { style: tmp4.content, children: tmp11 }) };
  const tmp28 = guild(Sheet_BottomSheet.BottomSheet, obj6);
  cResult[11] = tmp11;
  cResult[12] = tmp4.content;
  cResult[13] = tmp28;
  tmp27 = tmp28;
  const obj7 = { style: tmp4.content, children: tmp11 };
}) : (function StickerDetailActionSheet(chatInputRef) {
  ({ renderableSticker, channel } = chatInputRef);
  const tmp = closure_24();
  const tmp4 = _slicedToArray(StickersHooks.useStickerForRenderableSticker(renderableSticker, true), 2);
  const first = tmp4[0];
  let tmp6Result2 = guild(containerWidth, { size: "large" });
  if (null == first) {
    if (tmp4[1]) {
      const obj2 = { renderableSticker, channel };
      let tmp6Result = guild(UnavailableStickerDetail, obj2);
    }
    const obj3 = { startExpanded: true, children: null };
    const obj4 = { style: tmp.content, children: tmp6Result };
    obj3.children = guild(timestampProducer, obj4);
    return guild(Sheet_BottomSheet.BottomSheet, obj3);
  }
  tmp6Result = tmp6Result2;
  if (null != first) {
    if (tmp2Result.isStandardSticker(first)) {
      const obj5 = { sticker: first, channel, chatInputRef: chatInputRef.chatInputRef };
      tmp6Result2 = guild(closure_26, obj5);
    } else {
      if (tmp2Result2.isGuildSticker(first)) {
        const obj6 = { sticker: first, channel };
        tmp6Result2 = guild(GuildStickerDetail, obj6);
      }
      tmp2Result2 = StickersUtils;
    }
    tmp6Result = tmp6Result2;
    tmp2Result = StickersUtils;
  }
}));