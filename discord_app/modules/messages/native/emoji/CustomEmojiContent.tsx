// === Module 10603: CustomEmojiContent ===

// Module 10603 (CustomEmojiContent)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4415 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4455 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import RoleSubscriptionEmojiUtilsAll from "RoleSubscriptionEmojiUtils" /* 5683 */;
import openUserSettings from "openUserSettings" /* 7627 */;
import openPremiumModalDefault from "openPremiumModal" /* 9512 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10601 */;
import guild_GuildUtils from "guild/GuildUtils" /* 10606 */;
import noop from "module_19" /* 19 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5679 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4578 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ UserSettingsSections: c10, AnalyticEvents: closure_11, AnalyticsPages: closure_12, AnalyticsSections: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { nitroWheel: { height: 32, width: 32 }, nitroWheelPurple: { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND_NEW }, emojiDescriptionWrapperOuter: { flexDirection: "row", flex: 1, alignItems: "center", gap: 8 }, starIcon: { height: 32, width: 32, margin: 0, padding: 0, flex: 0 }, starIconSelected: null, starIconUnselected: null, moreMenuIcon: null, bottomCtaButton: null, ctaDescriptionWrapper: null, betaTag: null, betaTagTextAddPack: null, betaTagTextRemovePack: null, favoriteButtonContainer: null };
let obj3 = { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND_NEW };
obj2.starIconSelected = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let obj4 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj2.starIconUnselected = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let size = { height: 32, width: 32, justifyContent: "center", alignItems: "center", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj2.moreMenuIcon = size;
obj2.bottomCtaButton = { marginTop: 24 };
obj2.ctaDescriptionWrapper = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginTop: 8 };
let obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.betaTag = { backgroundColor: nativeDefault.colors.WHITE };
let obj6 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.betaTagTextAddPack = { color: nativeDefault.unsafe_rawColors.BRAND_530 };
let obj7 = { color: nativeDefault.unsafe_rawColors.BRAND_530 };
obj2.betaTagTextRemovePack = { color: nativeDefault.unsafe_rawColors.PRIMARY_500 };
let obj8 = { color: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj2.favoriteButtonContainer = { paddingTop: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/emoji/CustomEmojiContent.tsx");

export default function CustomEmojiContent(emojiNode) {
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
  let merged1 = Object.assign(emojiNode(nonce[13]).useSharedMessageEmojiStyles());
  let obj2 = emojiNode(nonce[13]);
  const items = [obj6];
  const stateFromStores = emojiNode(nonce[14]).useStateFromStores(items, () => obj6.getCurrentUser());
  let obj3 = emojiNode(nonce[14]);
  let obj4 = expressionSourceGuild(nonce[9]);
  const isPremiumResult = expressionSourceGuild(nonce[9]).isPremium(stateFromStores);
  const items1 = [isFavoriteEmoji];
  const stateFromStores1 = emojiNode(nonce[14]).useStateFromStores(items1, () => isFavoriteEmoji.getGuildId());
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
    if (null == customEmojiFromJoinedGuild) {
      obj = { isRoleSubscriptionEmoji: false, isUnusableRoleSubscriptionEmoji: false, userIsRoleSubscriber: false };
    } else {
      obj = { isRoleSubscriptionEmoji: RoleSubscriptionEmojiUtilsAll.isPurchasableRoleSubscriptionEmoji(customEmojiFromJoinedGuild), isUnusableRoleSubscriptionEmoji: null, userIsRoleSubscriber: null };
      obj.isUnusableRoleSubscriptionEmoji = RoleSubscriptionEmojiUtilsAll.isUnusableRoleSubscriptionEmoji(customEmojiFromJoinedGuild, stateFromStores1);
      obj.userIsRoleSubscriber = SubscriptionRoleStore.getUserSubscriptionRoles(customEmojiFromJoinedGuild.guildId).size > 0;
    }
    return obj;
  }, items2);
  const isUnusableRoleSubscriptionEmoji = memo.isUnusableRoleSubscriptionEmoji;
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
  if (!tmp12) {
    let guildId;
    if (customEmojiFromJoinedGuild != null) {
      guildId = customEmojiFromJoinedGuild.guildId;
    }
    result = tmp2(nonce[18]).shouldHideGuildPurchaseEntryPoints(guildId);
    const tmp2Result = tmp2(nonce[18]);
  }
  let obj5 = emojiNode(nonce[14]);
  isFavoriteEmoji = emojiNode(nonce[19]).useIsFavoriteEmoji(stateFromStores1, customEmojiFromJoinedGuild);
  const tmp2Result4 = emojiNode(nonce[19]);
  const tidaWebformEnabled = expressionSourceGuild(nonce[20]).useExperiment({ location: "CustomEmojiContent" }, { autoTrackExposure: false }).tidaWebformEnabled;
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
    let DM_CHANNEL = constants3.GUILD_CHANNEL;
  } else {
    DM_CHANNEL = constants3.DM_CHANNEL;
  }
  obj6 = { page: DM_CHANNEL, section: constants4.EMOJI_UPSELL_POPOUT };
  const tmp6Result = expressionSourceGuild(nonce[20]);
  let text = emojiNode(nonce[22]).getEmojiPopoutData({
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
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      AnalyticsUtilsDefault.track(constants2.CLOSE_POPOUT, { nonce });
      const obj3 = { nonce };
      AnalyticsUtilsDefault.track(constants2.PREMIUM_PROMOTION_OPENED, { location_page: obj6.page, location_section: obj6.section });
      obj6 = openUserSettings;
      obj6.openUserSettings({ screen: constants.PREMIUM, params: { analyticsLocation: obj6 } });
    }
  });
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
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      AnalyticsUtilsDefault.track(constants2.CLOSE_POPOUT, { nonce });
      const obj3 = { nonce };
      AnalyticsUtilsDefault.track(constants2.PREMIUM_PROMOTION_OPENED, { location_page: obj6.page, location_section: obj6.section });
      obj6 = openUserSettings;
      obj6.openUserSettings({ screen: constants.PREMIUM, params: { analyticsLocation: obj6 } });
    }
  };
  const tmp2Result5 = emojiNode(nonce[22]);
  const obj8 = { emojiId: emojiNode.id, currentGuildId: stateFromStores1, popoutData: text, emojiSourceGuildId: null, nonce: null };
  let id1;
  if (expressionSourceGuild != null) {
    id1 = expressionSourceGuild.id;
  }
  obj8.emojiSourceGuildId = id1;
  obj8.nonce = nonce;
  const trackOpenPopout = emojiNode(nonce[24]).useTrackOpenPopout(obj8);
  ({ emojiDescription, type } = text);
  let tmp22 = !isUnusableRoleSubscriptionEmoji;
  if (!isUnusableRoleSubscriptionEmoji) {
    tmp22 = hasJoinedEmojiSourceGuild;
  }
  let intl = tmp2(nonce[28]).intl;
  let string = intl.string;
  let t = tmp2(nonce[28]).t;
  if (hasJoinedEmojiSourceGuild) {
    let stringResult = string(t.ohTzZH);
  } else {
    stringResult = string(t["eLfh+a"]);
  }
  const items3 = [emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM, emojiNode(nonce[22]).EmojiPopoutType.JOIN_GUILD];
  const tmp2Result6 = emojiNode(nonce[24]);
  const obj9 = {};
  const merged2 = Object.assign(items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton);
  obj9.borderRadius = expressionSourceGuild(nonce[8]).radii.xl;
  let obj10 = { style: null, children: null };
  const obj11 = {};
  const merged3 = Object.assign(obj.emojiContainer);
  obj11.marginTop = 8;
  obj10.style = obj11;
  const items4 = [closure_14(expressionSourceGuild(nonce[36]), { style: obj.emojiIcon, source: { uri: emojiNode.src } }), ];
  const obj13 = { style: obj.emojiDescriptionWrapperOuter, children: null };
  const obj14 = { style: obj.emojiDescriptionWrapper, children: null };
  const obj12 = { style: obj.emojiIcon, source: { uri: emojiNode.src } };
  const tmp24 = items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton;
  const items5 = [closure_14(emojiNode(nonce[27]).Text, { variant: "text-md/bold", color: "mobile-text-heading-primary", children: ":" + emojiNode.alt + ":" }), ];
  let tmp30Result = null != emojiDescription;
  if (tmp30Result) {
    const obj16 = { variant: "text-sm/medium", children: emojiDescription };
    tmp30Result = closure_14(tmp2(nonce[27]).Text, obj16);
  }
  function handleAddRemoveFavorite() {
    function content() {
      obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: null };
      const intl = emojiNode(nonce[28]).intl;
      const string = intl.string;
      const t = emojiNode(nonce[28]).t;
      if (isFavoriteEmoji) {
        let stringResult = string(t.in1rga);
      } else {
        stringResult = string(t.mE2e8A);
      }
      obj.children = stringResult;
      return closure_2_14(emojiNode(nonce[27]).Text, obj);
    }
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    AnalyticsUtilsDefault.track(constants2.CLOSE_POPOUT, { nonce });
    const obj4 = EmojiActionCreators;
    if (isFavoriteEmoji) {
      obj4.unfavoriteEmoji(customEmojiFromJoinedGuild);
      const obj5 = {
        key: "EMOJI_UNFAVORITED",
        icon() {
            const style = {};
            const merged = Object.assign(obj.starIcon);
            const merged1 = Object.assign(obj.starIconUnselected);
            return closure_2_14(emojiNode(nonce[26]).StarOutlineIcon, { style });
          },
        content
      };
      ToastActionCreatorsDefault.open(obj5);
      const tmpResult = ToastActionCreatorsDefault;
    } else {
      obj4.favoriteEmoji(customEmojiFromJoinedGuild);
      obj6 = {
        key: "EMOJI_FAVORITED",
        icon() {
            const style = {};
            const merged = Object.assign(obj.starIcon);
            const merged1 = Object.assign(obj.starIconSelected);
            return closure_2_14(emojiNode(nonce[25]).StarIcon, { style });
          },
        content
      };
      ToastActionCreatorsDefault.open(obj6);
      const tmpResult2 = ToastActionCreatorsDefault;
    }
    const obj3 = { nonce };
  }
  items5[1] = tmp30Result;
  obj14.children = items5;
  const items6 = [closure_15(stateFromStores1, obj14), , ];
  let tmp32 = null;
  if (tmp22) {
    tmp32 = null;
    if (!tidaWebformEnabled) {
      const intl2 = tmp2(nonce[28]).intl;
      const string2 = intl2.string;
      const t2 = tmp2(nonce[28]).t;
      if (isFavoriteEmoji) {
        let string2Result = string2(t2.aBUcp3);
      } else {
        string2Result = string2(t2.yZFibY);
      }
      const obj17 = { accessibilityLabel: string2Result, style: obj.moreMenuIcon, onPress: handleAddRemoveFavorite, children: null };
      if (isFavoriteEmoji) {
        const obj18 = { style: null };
        const obj19 = {};
        const merged4 = Object.assign(obj.starIcon);
        const merged5 = Object.assign(obj.starIconSelected);
        obj18.style = obj19;
        let tmp30Result7 = closure_14(tmp2(nonce[25]).StarIcon, obj18);
      } else {
        const obj20 = { style: null };
        const obj21 = {};
        const merged6 = Object.assign(obj.starIcon);
        const merged7 = Object.assign(obj.starIconUnselected);
        obj20.style = obj21;
        tmp30Result7 = closure_14(tmp2(nonce[26]).StarOutlineIcon, obj20);
      }
      obj17.children = tmp30Result7;
      closure_14(stateFromStores, obj17);
    }
  }
  items6[1] = tmp32;
  let tmp30Result9 = null;
  if (tidaWebformEnabled) {
    tmp30Result9 = null;
    if (setting) {
      const obj22 = { accessibilityLabel: null, style: null, onPress: null, children: null };
      function handleOpenEmojiOptionsMenu() {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10605, dependencyMap.paths), "EmojiOptionsActionSheet", { emojiSrc: emojiNode.src }, "stack");
      }
      const intl3 = tmp2(nonce[28]).intl;
      obj22.accessibilityLabel = intl3.string(tmp2(nonce[28]).t.PdRCRg);
      obj22.style = obj.moreMenuIcon;
      obj22.onPress = handleOpenEmojiOptionsMenu;
      const obj23 = { color: tmp6(nonce[8]).colors.INTERACTIVE_TEXT_DEFAULT };
      obj22.children = closure_14(tmp2(nonce[33]).MoreHorizontalIcon, obj23);
      tmp30Result9 = closure_14(stateFromStores, obj22);
    }
  }
  const tmp47 = type === emojiNode(nonce[22]).EmojiPopoutType.JOIN_GUILD;
  items6[2] = tmp30Result9;
  obj13.children = items6;
  items4[1] = closure_15(stateFromStores1, obj13);
  obj10.children = items4;
  const children = [closure_15(stateFromStores1, obj10), , , ];
  if (type === emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
    if (type !== tmp2(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
      let tmp30Result11 = null;
    } else {
      const obj24 = { style: obj9, children: null };
      let flag2 = { shouldTintPurple: false }.shouldTintPurple;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let nitroWheel = obj.nitroWheel;
      if (flag2) {
        const obj25 = {};
        const merged8 = Object.assign(nitroWheel);
        const merged9 = Object.assign(obj.nitroWheelPurple);
        let tmp50 = obj25;
      } else {
        tmp50 = nitroWheel;
      }
      const obj26 = { icon: null, text: null, variant: "active", size: "md", grow: true, onPress: null };
      const obj27 = { style: tmp50 };
      nitroWheel = closure_14(tmp2(nonce[34]).NitroWheel, obj27);
      obj26.icon = nitroWheel;
      text = text.text;
      obj26.text = text;
      obj26.onPress = function onPress() {
        let result = null == stateFromStores;
        if (!result) {
          result = PremiumUtilsDefault.canUseEmojisEverywhere(tmp);
        }
        if (!result) {
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          const obj4 = { nonce };
          AnalyticsUtilsDefault.track(constants2.CLOSE_POPOUT, obj4);
          ({ page: obj6.location_page, section: obj6.location_section } = obj6);
          AnalyticsUtilsDefault.track(constants2.PREMIUM_PROMOTION_OPENED, { location_page: null, location_section: null });
          const obj10 = { analyticsLocation: obj6, analyticsLocations };
          openPremiumModalDefault(obj10);
          const obj7 = { location_page: null, location_section: null };
        }
      };
      obj24.children = closure_14(tmp2(nonce[35]).Button, obj26);
      closure_14(tmp28, obj24);
    }
  } else {
    tmp30Result11 = null;
    if (tmp47) {
      const obj28 = { style: obj9, children: null };
      const obj29 = { text: null, size: "md", grow: true, onPress: null };
      const intl4 = tmp2(nonce[28]).intl;
      obj29.text = intl4.string(tmp2(nonce[28]).t.riu2R5);
      obj29.onPress = function onPress() {
        let id;
        if (expressionSourceGuild != null) {
          id = expressionSourceGuild.id;
        }
        guild_GuildUtils.handleJoinGuild(id);
      };
      obj28.children = closure_14(tmp2(nonce[35]).Button, obj29);
      tmp30Result11 = closure_14(tmp28, obj28);
    }
  }
  children[1] = tmp30Result11;
  if (hasJoinedEmojiSourceGuild) {
    let tmp26Result = null;
    if (null != expressionSourceGuild) {
      const obj30 = { style: obj.divider };
      const items8 = [closure_14(tmp2(nonce[38]).FormDivider, obj30), , ];
      const obj31 = { guild: expressionSourceGuild, hasJoinedGuild: hasJoinedEmojiSourceGuild, title: stringResult, showingJoinGuildCta: tmp47 };
      items8[1] = closure_14(tmp6(nonce[39]), obj31);
      let tmp30Result12 = !hasJoinedEmojiSourceGuild;
      if (!hasJoinedEmojiSourceGuild) {
        const obj32 = { expressionSourceGuild, doNotDisplayEmojiIds: null };
        const items9 = [emojiNode.id];
        obj32.doNotDisplayEmojiIds = items9;
        tmp30Result12 = closure_14(tmp2(nonce[40]).EmojiGrid, obj32);
      }
      const obj33 = { children: null };
      items8[2] = tmp30Result12;
      obj33.children = items8;
      tmp26Result = closure_15(closure_16, obj33);
    }
  } else {
    tmp26Result = null;
  }
  children[2] = tmp26Result;
  let tmp26Result2 = null;
  if (tmp22) {
    tmp26Result2 = null;
    if (tidaWebformEnabled) {
      const obj34 = { style: obj.divider };
      const items10 = [closure_14(tmp2(nonce[38]).FormDivider, obj34), ];
      const obj35 = { style: obj.favoriteButtonContainer, children: null };
      const intl5 = tmp2(nonce[28]).intl;
      const string3 = intl5.string;
      const t3 = tmp2(nonce[28]).t;
      if (isFavoriteEmoji) {
        let string3Result = string3(t3.Ay49KA);
      } else {
        string3Result = string3(t3.nNsr67);
      }
      const obj36 = { text: string3Result, variant: null, size: "md", onPress: null };
      let str = "primary";
      if (isFavoriteEmoji) {
        str = "tertiary";
      }
      const obj37 = { children: null };
      obj36.variant = str;
      obj36.onPress = handleAddRemoveFavorite;
      obj35.children = closure_14(tmp2(nonce[35]).Button, obj36);
      items10[1] = closure_14(tmp28, obj35);
      obj37.children = items10;
      tmp26Result2 = closure_15(closure_16, obj37);
    }
  }
  children[3] = tmp26Result2;
  return closure_15(closure_16, { children });
};