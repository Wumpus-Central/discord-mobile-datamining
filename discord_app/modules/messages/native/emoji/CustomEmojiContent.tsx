// === Module 9954: CustomEmojiContent ===

// Module 9954 (CustomEmojiContent)
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4580 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import RoleSubscriptionEmojiUtilsAll from "RoleSubscriptionEmojiUtils" /* 5650 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import openPremiumModalDefault from "openPremiumModal" /* 8943 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9952 */;
import StarIcon2 from "StarIcon" /* 9956 */;
import StarOutlineIcon2 from "StarOutlineIcon" /* 9958 */;
import guild_GuildUtils from "guild/GuildUtils" /* 9961 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5646 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size_mod from "module_2" /* 2 */;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let unpackModuleId;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ UserSettingsSections: c10, AnalyticEvents: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { nitroWheel: { height: 32, width: 32 }, nitroWheelPurple: obj2, emojiDescriptionWrapperOuter: { flexDirection: "row", flex: 1, alignItems: "center", gap: 8 }, starIcon: { height: 32, width: 32, margin: 0, padding: 0, flex: 0 }, starIconSelected: obj3, starIconUnselected: obj4, moreMenuIcon: size, bottomCtaButton: { marginTop: 24 }, ctaDescriptionWrapper: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginTop: 8 }, betaTag: obj5, betaTagTextAddPack: obj6, betaTagTextRemovePack: obj7, favoriteButtonContainer: obj8 };
obj2 = { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND_NEW };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = { height: 32, width: 32, justifyContent: "center", alignItems: "center", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj5 = { backgroundColor: nativeDefault.colors.WHITE };
obj6 = { color: nativeDefault.unsafe_rawColors.BRAND_530 };
obj7 = { color: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj8 = { paddingTop: nativeDefault.space.PX_4 };
let closure_17 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/messages/native/emoji/CustomEmojiContent.tsx");

export default function CustomEmojiContent(emojiNode) {
  let Button;
  let Button2;
  let Button3;
  let DM_CHANNEL;
  let MoreHorizontalIcon;
  let emojiDescription;
  let expressionSourceApplication;
  let handleOpenEmojiOptionsMenu;
  let hasJoinedEmojiSourceGuild;
  let id1;
  let intl3;
  let intl4;
  let isRoleSubscriptionEmoji;
  let items4;
  let items5;
  let items6;
  let items9;
  let nonce;
  let obj11;
  let obj19;
  let obj21;
  let obj23;
  let obj26;
  let obj27;
  let obj29;
  let obj36;
  let sourceType;
  let str;
  let stringResult;
  let tmp29Result;
  let tmp33Result11;
  let tmp33Result7;
  let type;
  let userIsRoleSubscriber;
  emojiNode = emojiNode.emojiNode;
  const expressionSourceGuild = emojiNode.expressionSourceGuild;
  const customEmojiFromJoinedGuild = emojiNode.customEmojiFromJoinedGuild;
  ({ hasJoinedEmojiSourceGuild, nonce } = emojiNode);
  let analyticsLocations;
  let isFavoriteEmoji;
  let obj6;
  let obj = {};
  ({ sourceType, expressionSourceApplication } = emojiNode);
  let merged = Object.assign(closure_17());
  let obj2 = emojiNode(nonce[13]);
  let merged1 = Object.assign(obj2.useSharedMessageEmojiStyles());
  let obj3 = emojiNode(nonce[14]);
  const items = [obj6];
  const stateFromStores = obj3.useStateFromStores(items, () => obj6.getCurrentUser());
  let obj4 = expressionSourceGuild(nonce[9]);
  const isPremiumResult = obj4.isPremium(stateFromStores);
  let obj5 = emojiNode(nonce[14]);
  const items1 = [isFavoriteEmoji];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => isFavoriteEmoji.getGuildId());
  let tmp9 = null != stateFromStores1;
  if (tmp9) {
    let id;
    if (expressionSourceGuild != null) {
      id = expressionSourceGuild.id;
    }
    tmp9 = stateFromStores1 === id;
  }
  analyticsLocations = tmp6(nonce[15])().analyticsLocations;
  const items2 = [customEmojiFromJoinedGuild, stateFromStores1];
  const memo = obj.useMemo(() => {
    let isUnusableRoleSubscriptionEmoji;
    let obj2;
    if (null == customEmojiFromJoinedGuild) {
      obj = { isRoleSubscriptionEmoji: false, isUnusableRoleSubscriptionEmoji: false, userIsRoleSubscriber: false };
    } else {
      obj = { isRoleSubscriptionEmoji: obj2.isPurchasableRoleSubscriptionEmoji(customEmojiFromJoinedGuild), isUnusableRoleSubscriptionEmoji: isUnusableRoleSubscriptionEmoji(customEmojiFromJoinedGuild, stateFromStores1), userIsRoleSubscriber: SubscriptionRoleStore.getUserSubscriptionRoles(customEmojiFromJoinedGuild.guildId).size > 0 };
      obj2 = RoleSubscriptionEmojiUtilsAll;
      isUnusableRoleSubscriptionEmoji = RoleSubscriptionEmojiUtilsAll.isUnusableRoleSubscriptionEmoji;
      RoleSubscriptionEmojiUtilsAll;
    }
    return obj;
  }, items2);
  let isUnusableRoleSubscriptionEmoji = memo.isUnusableRoleSubscriptionEmoji;
  let tmp12 = !isUnusableRoleSubscriptionEmoji;
  ({ isRoleSubscriptionEmoji, userIsRoleSubscriber } = memo);
  if (isUnusableRoleSubscriptionEmoji) {
    let type1;
    if (customEmojiFromJoinedGuild != null) {
      type1 = customEmojiFromJoinedGuild.type;
    }
    tmp12 = type1 !== tmp2(nonce[17]).EmojiTypes.GUILD;
  }
  let result = !tmp12;
  if (result) {
    let guildId;
    const shouldHideGuildPurchaseEntryPoints = emojiNode(nonce[18]).shouldHideGuildPurchaseEntryPoints;
    emojiNode(nonce[18]);
    if (customEmojiFromJoinedGuild != null) {
      guildId = customEmojiFromJoinedGuild.guildId;
    }
    result = shouldHideGuildPurchaseEntryPoints(guildId);
  }
  const tmp2Result4 = emojiNode(nonce[19]);
  isFavoriteEmoji = tmp2Result4.useIsFavoriteEmoji(stateFromStores1, customEmojiFromJoinedGuild);
  const tmp6Result = expressionSourceGuild(nonce[20]);
  const tidaWebformEnabled = tmp6Result.useExperiment({ location: "CustomEmojiContent" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = tmp2(nonce[21]).DeveloperMode;
  let flag;
  const setting = DeveloperMode.useSetting();
  if (expressionSourceGuild != null) {
    flag = expressionSourceGuild.isDiscoverable();
  }
  if (flag == null) {
    flag = false;
  }
  if (null != stateFromStores1) {
    DM_CHANNEL = constants3.GUILD_CHANNEL;
  } else {
    DM_CHANNEL = constants3.DM_CHANNEL;
  }
  obj6 = { page: DM_CHANNEL, section: constants4.EMOJI_UPSELL_POPOUT };
  let obj7 = {
    sourceType,
    expressionSourceApplication,
    isPremium: isPremiumResult,
    hasJoinedEmojiSourceGuild,
    isRoleSubscriptionEmoji,
    isUnusableRoleSubscriptionEmoji,
    userIsRoleSubscriber,
    shouldHideRoleSubscriptionCTA: result,
    emojiComesFromCurrentGuild: tmp9,
    isDiscoverable: flag,
    onOpenPremiumSettings() {
      obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { nonce };
      obj2.track(unpackModuleId.CLOSE_POPOUT, obj3);
      const obj4 = AnalyticsUtilsDefault;
      const obj5 = { location_page: obj6.page, location_section: obj6.section };
      obj4.track(unpackModuleId.PREMIUM_PROMOTION_OPENED, obj5);
      obj6 = openUserSettings;
      const obj7 = { screen: constants.PREMIUM, params: { analyticsLocation: obj6 } };
      obj6.openUserSettings(obj7);
    }
  };
  const tmp2Result5 = emojiNode(nonce[22]);
  const emojiPopoutData = tmp2Result5.getEmojiPopoutData(obj7);
  let obj8 = { emojiId: emojiNode.id, currentGuildId: stateFromStores1, popoutData: emojiPopoutData, emojiSourceGuildId: id1, nonce };
  id1 = undefined;
  const useTrackOpenPopout = emojiNode(nonce[24]).useTrackOpenPopout;
  emojiNode(nonce[24]);
  if (expressionSourceGuild != null) {
    id1 = expressionSourceGuild.id;
  }
  const trackOpenPopout = useTrackOpenPopout(obj8);
  ({ emojiDescription, type } = emojiPopoutData);
  let intl = tmp2(nonce[28]).intl;
  let string = intl.string;
  let t = tmp2(nonce[28]).t;
  if (hasJoinedEmojiSourceGuild) {
    stringResult = string(t.ohTzZH);
  } else {
    stringResult = string(t["eLfh+a"]);
  }
  const JOIN_GUILD = tmp2(nonce[22]).EmojiPopoutType.JOIN_GUILD;
  const items3 = [emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM, emojiNode(nonce[22]).EmojiPopoutType.JOIN_GUILD];
  let obj9 = { borderRadius: expressionSourceGuild(nonce[8]).radii.xl };
  const tmp27 = items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton;
  const merged2 = Object.assign(tmp27);
  let obj10 = { style: obj11, children: items4 };
  obj11 = { marginTop: 8 };
  const merged3 = Object.assign(obj.emojiContainer);
  items4 = [, ];
  const obj12 = { style: obj.emojiIcon, source: { uri: emojiNode.src } };
  items4[0] = closure_14(expressionSourceGuild(nonce[37]), obj12);
  const obj13 = { style: obj.emojiDescriptionWrapperOuter, children: items6 };
  const obj14 = { style: obj.emojiDescriptionWrapper, children: items5 };
  const obj15 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: ":" + emojiNode.alt + ":" };
  let Text = tmp2(nonce[27]).Text;
  items5 = [closure_14(Text, obj15), ];
  let tmp33Result = null != emojiDescription;
  if (tmp33Result) {
    const obj16 = { variant: "text-sm/medium", children: emojiDescription };
    tmp33Result = closure_14(tmp2(nonce[27]).Text, obj16);
  }
  function handleAddRemoveFavorite() {
    let intl;
    let intl2;
    function content() {
      let stringResult;
      obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: stringResult };
      const Text = emojiNode(nonce[27]).Text;
      const intl = emojiNode(nonce[28]).intl;
      const string = intl.string;
      const t = emojiNode(nonce[28]).t;
      if (isFavoriteEmoji) {
        stringResult = string(t.in1rga);
      } else {
        stringResult = string(t.mE2e8A);
      }
      return closure_2_14(Text, obj);
    }
    obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { nonce };
    obj2.track(unpackModuleId.CLOSE_POPOUT, obj3);
    const obj4 = DesignSystemsNotificationComponentsExperiment;
    const designSystemsNotificationComponents = obj4.getDesignSystemsNotificationComponents("CustomEmojiContent");
    const obj5 = EmojiActionCreators;
    if (isFavoriteEmoji) {
      obj5.unfavoriteEmoji(customEmojiFromJoinedGuild);
      const tmpResult = ToastActionCreatorsDefault;
      if (designSystemsNotificationComponents) {
        const openMana2 = tmpResult.openMana;
        obj6 = { text: intl2.string(intl6.t.in1rga), icon: StarOutlineIcon2.StarOutlineIcon };
        intl2 = intl6.intl;
        openMana2("EMOJI_UNFAVORITED", obj6);
      } else {
        const obj7 = {
          key: "EMOJI_UNFAVORITED",
          icon() {
                const style = {};
                const merged = Object.assign(obj.starIcon);
                const merged1 = Object.assign(obj.starIconUnselected);
                return closure_2_14(emojiNode(nonce[26]).StarOutlineIcon, { style });
              },
          content
        };
        tmpResult.open(obj7);
      }
    } else {
      obj5.favoriteEmoji(customEmojiFromJoinedGuild);
      const tmpResult2 = ToastActionCreatorsDefault;
      if (designSystemsNotificationComponents) {
        const openMana = tmpResult2.openMana;
        const obj8 = { text: intl.string(intl6.t.mE2e8A), icon: StarIcon2.StarIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
        intl = intl6.intl;
        openMana("EMOJI_FAVORITED", obj8);
      } else {
        const obj9 = {
          key: "EMOJI_FAVORITED",
          icon() {
                const style = {};
                const merged = Object.assign(obj.starIcon);
                const merged1 = Object.assign(obj.starIconSelected);
                return closure_2_14(emojiNode(nonce[25]).StarIcon, { style });
              },
          content
        };
        tmpResult2.open(obj9);
      }
    }
  }
  items5[1] = tmp33Result;
  items6 = [closure_15(stateFromStores1, obj14), , ];
  let tmp33Result8 = null;
  if (!isUnusableRoleSubscriptionEmoji && hasJoinedEmojiSourceGuild) {
    tmp33Result8 = null;
    if (!tidaWebformEnabled) {
      let string2Result;
      let intl2 = tmp2(nonce[28]).intl;
      const string2 = intl2.string;
      const t2 = tmp2(nonce[28]).t;
      const tmp36 = stateFromStores;
      if (isFavoriteEmoji) {
        string2Result = string2(t2.aBUcp3);
      } else {
        string2Result = string2(t2.yZFibY);
      }
      const obj17 = { accessibilityLabel: string2Result, style: obj.moreMenuIcon, onPress: handleAddRemoveFavorite, children: tmp33Result7 };
      if (isFavoriteEmoji) {
        const obj18 = { style: obj19 };
        obj19 = {};
        const StarIcon = tmp2(nonce[25]).StarIcon;
        const merged4 = Object.assign(obj.starIcon);
        const merged5 = Object.assign(obj.starIconSelected);
        tmp33Result7 = closure_14(StarIcon, obj18);
      } else {
        const obj20 = { style: obj21 };
        obj21 = {};
        const StarOutlineIcon = tmp2(nonce[26]).StarOutlineIcon;
        const merged6 = Object.assign(obj.starIcon);
        const merged7 = Object.assign(obj.starIconUnselected);
        tmp33Result7 = closure_14(StarOutlineIcon, obj20);
      }
      tmp33Result8 = closure_14(tmp36, obj17);
    }
  }
  items6[1] = tmp33Result8;
  let tmp33Result9 = null;
  if (tidaWebformEnabled) {
    tmp33Result9 = null;
    if (setting) {
      const obj22 = { accessibilityLabel: intl3.string(emojiNode(nonce[28]).t.PdRCRg), style: obj.moreMenuIcon, onPress: handleOpenEmojiOptionsMenu, children: closure_14(MoreHorizontalIcon, obj23) };
      handleOpenEmojiOptionsMenu = function handleOpenEmojiOptionsMenu() {
        obj = ActionSheetActionCreatorsDefault;
        const obj2 = { emojiSrc: emojiNode.src };
        obj.openLazy(asyncRequire(9960, dependencyMap.paths), "EmojiOptionsActionSheet", obj2, "stack");
      };
      intl3 = tmp2(nonce[28]).intl;
      obj23 = { color: expressionSourceGuild(nonce[8]).colors.INTERACTIVE_TEXT_DEFAULT };
      MoreHorizontalIcon = tmp2(nonce[34]).MoreHorizontalIcon;
      tmp33Result9 = closure_14(stateFromStores, obj22);
    }
  }
  items6[2] = tmp33Result9;
  items4[1] = closure_15(stateFromStores1, obj13);
  const children = [closure_15(stateFromStores1, obj10), , , ];
  if (type === emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
    let tmp33Result10 = null;
    if (type === emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
      let tmp52;
      let flag2 = { shouldTintPurple: false }.shouldTintPurple;
      const obj24 = { style: obj9, children: closure_14(Button3, obj26) };
      Button3 = tmp2(nonce[36]).Button;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const nitroWheel = obj.nitroWheel;
      if (flag2) {
        const obj25 = {};
        const merged8 = Object.assign(nitroWheel);
        const merged9 = Object.assign(obj.nitroWheelPurple);
        tmp52 = obj25;
      } else {
        tmp52 = nitroWheel;
      }
      obj26 = {
        icon: closure_14(emojiNode(nonce[35]).NitroWheel, obj27),
        text: emojiPopoutData.text,
        variant: "active",
        size: "md",
        grow: true,
        onPress() {
              let result = null == stateFromStores;
              if (!result) {
                obj = PremiumUtilsDefault;
                result = obj.canUseEmojisEverywhere(tmp);
              }
              if (!result) {
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideAllActionSheets();
                const obj4 = { nonce };
                const obj3 = AnalyticsUtilsDefault;
                obj3.track(unpackModuleId.CLOSE_POPOUT, obj4);
                const obj7 = { location_page: null, location_section: null };
                ({ page: obj6.location_page, section: obj6.location_section } = obj6);
                const obj5 = AnalyticsUtilsDefault;
                obj5.track(unpackModuleId.PREMIUM_PROMOTION_OPENED, obj7);
                const obj10 = { analyticsLocation: obj6, analyticsLocations };
                openPremiumModalDefault(obj10);
              }
            }
      };
      obj27 = { style: tmp52 };
      tmp33Result10 = closure_14(tmp31, obj24);
    }
    tmp33Result11 = tmp33Result10;
  } else {
    tmp33Result11 = null;
    if (type === JOIN_GUILD) {
      const obj28 = { style: obj9, children: closure_14(Button, obj29) };
      obj29 = {
        text: intl4.string(emojiNode(nonce[28]).t.riu2R5),
        size: "md",
        grow: true,
        onPress() {
              let id;
              const handleJoinGuild = guild_GuildUtils.handleJoinGuild;
              guild_GuildUtils;
              if (expressionSourceGuild != null) {
                id = expressionSourceGuild.id;
              }
              handleJoinGuild(id);
            }
      };
      Button = tmp2(nonce[36]).Button;
      intl4 = tmp2(nonce[28]).intl;
      tmp33Result11 = closure_14(tmp31, obj28);
    }
  }
  children[1] = tmp33Result11;
  if (hasJoinedEmojiSourceGuild) {
    tmp29Result = null;
    if (null != expressionSourceGuild) {
      const obj30 = { style: obj.divider };
      const items8 = [closure_14(emojiNode(nonce[39]).FormDivider, obj30), , ];
      const obj31 = { guild: expressionSourceGuild, hasJoinedGuild: hasJoinedEmojiSourceGuild, title: stringResult, showingJoinGuildCta: type === JOIN_GUILD };
      items8[1] = closure_14(expressionSourceGuild(nonce[40]), obj31);
      let tmp33Result12 = !hasJoinedEmojiSourceGuild;
      if (tmp33Result12) {
        const obj32 = { expressionSourceGuild, doNotDisplayEmojiIds: items9 };
        items9 = [emojiNode.id];
        tmp33Result12 = closure_14(tmp2(nonce[41]).EmojiGrid, obj32);
      }
      const obj33 = { children: items8 };
      items8[2] = tmp33Result12;
      tmp29Result = closure_15(closure_16, obj33);
    }
  } else {
    tmp29Result = null;
  }
  children[2] = tmp29Result;
  let tmp29Result2 = null;
  if (!isUnusableRoleSubscriptionEmoji && hasJoinedEmojiSourceGuild) {
    tmp29Result2 = null;
    if (tidaWebformEnabled) {
      let string3Result;
      const obj34 = { style: obj.divider };
      const items10 = [closure_14(emojiNode(nonce[39]).FormDivider, obj34), ];
      const obj35 = { style: obj.favoriteButtonContainer, children: closure_14(Button2, obj36) };
      Button2 = tmp2(nonce[36]).Button;
      const intl5 = tmp2(nonce[28]).intl;
      const string3 = intl5.string;
      const t3 = tmp2(nonce[28]).t;
      if (isFavoriteEmoji) {
        string3Result = string3(t3.Ay49KA);
      } else {
        string3Result = string3(t3.nNsr67);
      }
      obj36 = { text: string3Result, variant: str, size: "md", onPress: handleAddRemoveFavorite };
      str = "primary";
      if (isFavoriteEmoji) {
        str = "tertiary";
      }
      const obj37 = { children: items10 };
      items10[1] = closure_14(stateFromStores1, obj35);
      tmp29Result2 = closure_15(closure_16, obj37);
    }
  }
  children[3] = tmp29Result2;
  return closure_15(closure_16, { children });
};