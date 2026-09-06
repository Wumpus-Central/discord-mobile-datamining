// === Module 10338: CustomEmojiContent ===

// Module 10338 (CustomEmojiContent)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import RoleSubscriptionEmojiUtilsAll from "RoleSubscriptionEmojiUtils" /* 5464 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import openPremiumModalDefault from "openPremiumModal" /* 9392 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10336 */;
import guild_GuildUtils from "guild/GuildUtils" /* 10341 */;
import noop from "module_19" /* 19 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5460 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ UserSettingsSections: c10, AnalyticEvents: closure_11, AnalyticsPages: closure_12, AnalyticsSections: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
fn(4560);
let createStyles = { nitroWheel: { height: 32, width: 32 }, nitroWheelPurple: null, emojiDescriptionWrapperOuter: null, starIcon: null, starIconSelected: null, starIconUnselected: null, moreMenuIcon: null, bottomCtaButton: null, ctaDescriptionWrapper: null, betaTag: null, betaTagTextAddPack: null, betaTagTextRemovePack: null, favoriteButtonContainer: null };
createStyles = { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND_NEW };
createStyles.nitroWheelPurple = createStyles;
createStyles.emojiDescriptionWrapperOuter = { flexDirection: "row", flex: 1, alignItems: "center", gap: 8 };
createStyles.starIcon = { height: 32, width: 32, margin: 0, padding: 0, flex: 0 };
createStyles.starIconSelected = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let obj1 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
createStyles.starIconUnselected = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let size = { height: 32, width: 32, justifyContent: "center", alignItems: "center", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
createStyles.moreMenuIcon = size;
createStyles.bottomCtaButton = { marginTop: 24 };
createStyles.ctaDescriptionWrapper = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginTop: 8 };
let obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.betaTag = { backgroundColor: nativeDefault.colors.WHITE };
let obj3 = { backgroundColor: nativeDefault.colors.WHITE };
createStyles.betaTagTextAddPack = { color: nativeDefault.unsafe_rawColors.BRAND_530 };
let obj4 = { color: nativeDefault.unsafe_rawColors.BRAND_530 };
createStyles.betaTagTextRemovePack = { color: nativeDefault.unsafe_rawColors.PRIMARY_500 };
let obj5 = { color: nativeDefault.unsafe_rawColors.PRIMARY_500 };
createStyles.favoriteButtonContainer = { paddingTop: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/emoji/CustomEmojiContent.tsx");

export default function CustomEmojiContent(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  const expressionSourceGuild = emojiNode.expressionSourceGuild;
  const customEmojiFromJoinedGuild = emojiNode.customEmojiFromJoinedGuild;
  ({ hasJoinedEmojiSourceGuild, nonce } = emojiNode);
  let analyticsLocations;
  let isFavoriteEmoji;
  let obj = {};
  ({ sourceType, expressionSourceApplication } = emojiNode);
  let merged = Object.assign(closure_17());
  let obj1 = emojiNode(nonce[13]);
  let merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  let obj2 = emojiNode(nonce[14]);
  const items = [obj];
  const stateFromStores = obj2.useStateFromStores(items, () => obj.getCurrentUser());
  let obj3 = expressionSourceGuild(nonce[9]);
  let obj4 = emojiNode(nonce[14]);
  const items1 = [isFavoriteEmoji];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => isFavoriteEmoji.getGuildId());
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
    type = undefined;
    if (customEmojiFromJoinedGuild != null) {
      type = customEmojiFromJoinedGuild.type;
    }
    tmp12 = type !== tmp2(nonce[17]).EmojiTypes.GUILD;
  }
  let result = !tmp12;
  if (!tmp12) {
    let tmp2Result = tmp2(nonce[18]);
    let guildId;
    if (customEmojiFromJoinedGuild != null) {
      guildId = customEmojiFromJoinedGuild.guildId;
    }
    result = tmp2Result.shouldHideGuildPurchaseEntryPoints(guildId);
  }
  tmp2Result = tmp2(nonce[19]);
  isFavoriteEmoji = tmp2Result.useIsFavoriteEmoji(stateFromStores1, customEmojiFromJoinedGuild);
  const isPremiumResult = obj3.isPremium(stateFromStores);
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
  obj = { page: DM_CHANNEL, section: constants4.EMOJI_UPSELL_POPOUT };
  const tmp6Result = expressionSourceGuild(nonce[20]);
  obj = {
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
      let obj1 = AnalyticsUtilsDefault;
      obj = { nonce };
      obj1.track(constants2.CLOSE_POPOUT, obj);
      obj = { location_page: obj.page, location_section: obj.section };
      AnalyticsUtilsDefault.track(constants2.PREMIUM_PROMOTION_OPENED, obj);
      obj1 = { screen: constants.PREMIUM, params: { analyticsLocation: obj } };
      openUserSettings.openUserSettings(obj1);
    }
  };
  let text = emojiNode(nonce[22]).getEmojiPopoutData(obj);
  const tmp2Result1 = emojiNode(nonce[22]);
  obj1 = { emojiId: emojiNode.id, currentGuildId: stateFromStores1, popoutData: text, emojiSourceGuildId: null, nonce: null };
  let id1;
  if (expressionSourceGuild != null) {
    id1 = expressionSourceGuild.id;
  }
  obj1.emojiSourceGuildId = id1;
  obj1.nonce = nonce;
  const trackOpenPopout = emojiNode(nonce[24]).useTrackOpenPopout(obj1);
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
  const tmp2Result2 = emojiNode(nonce[24]);
  obj2 = {};
  const merged2 = Object.assign(items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton);
  obj2.borderRadius = expressionSourceGuild(nonce[8]).radii.xl;
  obj3 = { style: null, children: null };
  obj4 = {};
  const merged3 = Object.assign(obj.emojiContainer);
  obj4.marginTop = 8;
  obj3.style = obj4;
  const items4 = [closure_14(expressionSourceGuild(nonce[36]), { style: obj.emojiIcon, source: { uri: emojiNode.src } }), ];
  const obj6 = { style: obj.emojiDescriptionWrapperOuter, children: null };
  const obj7 = { style: obj.emojiDescriptionWrapper, children: null };
  let obj5 = { style: obj.emojiIcon, source: { uri: emojiNode.src } };
  const tmp24 = items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton;
  const items5 = [closure_14(emojiNode(nonce[27]).Text, { variant: "text-md/bold", color: "mobile-text-heading-primary", children: ":" + emojiNode.alt + ":" }), ];
  let tmp30Result = null != emojiDescription;
  if (tmp30Result) {
    const obj9 = { variant: "text-sm/medium", children: emojiDescription };
    tmp30Result = closure_14(tmp2(nonce[27]).Text, obj9);
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
    obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    let obj1 = AnalyticsUtilsDefault;
    obj = { nonce };
    obj1.track(constants2.CLOSE_POPOUT, obj);
    const obj4 = EmojiActionCreators;
    if (isFavoriteEmoji) {
      obj4.unfavoriteEmoji(customEmojiFromJoinedGuild);
      let tmpResult = ToastActionCreatorsDefault;
      obj = {
        key: "EMOJI_UNFAVORITED",
        icon() {
            const style = {};
            const merged = Object.assign(obj.starIcon);
            const merged1 = Object.assign(obj.starIconUnselected);
            return closure_2_14(emojiNode(nonce[26]).StarOutlineIcon, { style });
          },
        content
      };
      tmpResult.open(obj);
    } else {
      obj4.favoriteEmoji(customEmojiFromJoinedGuild);
      tmpResult = ToastActionCreatorsDefault;
      obj1 = {
        key: "EMOJI_FAVORITED",
        icon() {
            const style = {};
            const merged = Object.assign(obj.starIcon);
            const merged1 = Object.assign(obj.starIconSelected);
            return closure_2_14(emojiNode(nonce[25]).StarIcon, { style });
          },
        content
      };
      tmpResult.open(obj1);
    }
  }
  items5[1] = tmp30Result;
  obj7.children = items5;
  const items6 = [closure_15(stateFromStores1, obj7), , ];
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
      const obj10 = { accessibilityLabel: string2Result, style: obj.moreMenuIcon, onPress: handleAddRemoveFavorite, children: null };
      if (isFavoriteEmoji) {
        const obj11 = { style: null };
        const obj12 = {};
        const merged4 = Object.assign(obj.starIcon);
        const merged5 = Object.assign(obj.starIconSelected);
        obj11.style = obj12;
        tmp30Result = closure_14(tmp2(nonce[25]).StarIcon, obj11);
      } else {
        const obj13 = { style: null };
        const obj14 = {};
        const merged6 = Object.assign(obj.starIcon);
        const merged7 = Object.assign(obj.starIconUnselected);
        obj13.style = obj14;
        tmp30Result = closure_14(tmp2(nonce[26]).StarOutlineIcon, obj13);
      }
      obj10.children = tmp30Result;
      closure_14(stateFromStores, obj10);
    }
  }
  items6[1] = tmp32;
  let tmp30Result2 = null;
  if (tidaWebformEnabled) {
    tmp30Result2 = null;
    if (setting) {
      const obj15 = { accessibilityLabel: null, style: null, onPress: null, children: null };
      function handleOpenEmojiOptionsMenu() {
        obj = { emojiSrc: emojiNode.src };
        obj.openLazy(asyncRequireImpl(10340, dependencyMap.paths), "EmojiOptionsActionSheet", obj, "stack");
      }
      const intl3 = tmp2(nonce[28]).intl;
      obj15.accessibilityLabel = intl3.string(tmp2(nonce[28]).t.PdRCRg);
      obj15.style = obj.moreMenuIcon;
      obj15.onPress = handleOpenEmojiOptionsMenu;
      const obj16 = { color: tmp6(nonce[8]).colors.INTERACTIVE_TEXT_DEFAULT };
      obj15.children = closure_14(tmp2(nonce[33]).MoreHorizontalIcon, obj16);
      tmp30Result2 = closure_14(stateFromStores, obj15);
    }
  }
  const tmp47 = type === emojiNode(nonce[22]).EmojiPopoutType.JOIN_GUILD;
  items6[2] = tmp30Result2;
  obj6.children = items6;
  items4[1] = closure_15(stateFromStores1, obj6);
  obj3.children = items4;
  const children = [closure_15(stateFromStores1, obj3), , , ];
  if (type === emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
    if (type !== tmp2(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
      let tmp30Result4 = null;
    } else {
      const obj17 = { style: obj2, children: null };
      let flag2 = { shouldTintPurple: false }.shouldTintPurple;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let nitroWheel = obj.nitroWheel;
      if (flag2) {
        const obj18 = {};
        const merged8 = Object.assign(nitroWheel);
        const merged9 = Object.assign(obj.nitroWheelPurple);
        let tmp50 = obj18;
      } else {
        tmp50 = nitroWheel;
      }
      const obj19 = { icon: null, text: null, variant: "active", size: "md", grow: true, onPress: null };
      const obj20 = { style: tmp50 };
      nitroWheel = closure_14(tmp2(nonce[34]).NitroWheel, obj20);
      obj19.icon = nitroWheel;
      text = text.text;
      obj19.text = text;
      obj19.onPress = function onPress() {
        let result = null == stateFromStores;
        if (!result) {
          obj = PremiumUtilsDefault;
          result = obj.canUseEmojisEverywhere(tmp);
        }
        if (!result) {
          let obj1 = ActionSheetActionCreatorsDefault;
          obj1.hideAllActionSheets();
          obj = { nonce };
          AnalyticsUtilsDefault.track(constants2.CLOSE_POPOUT, obj);
          obj = { location_page: null, location_section: null };
          ({ page: obj6.location_page, section: obj6.location_section } = tmp2);
          AnalyticsUtilsDefault.track(constants2.PREMIUM_PROMOTION_OPENED, obj);
          obj1 = { analyticsLocation: tmp2, analyticsLocations };
          openPremiumModalDefault(obj1);
        }
      };
      obj17.children = closure_14(tmp2(nonce[35]).Button, obj19);
      closure_14(tmp28, obj17);
    }
  } else {
    tmp30Result4 = null;
    if (tmp47) {
      const obj21 = { style: obj2, children: null };
      const obj22 = { text: null, size: "md", grow: true, onPress: null };
      const intl4 = tmp2(nonce[28]).intl;
      obj22.text = intl4.string(tmp2(nonce[28]).t.riu2R5);
      obj22.onPress = function onPress() {
        let id;
        if (expressionSourceGuild != null) {
          id = expressionSourceGuild.id;
        }
        guild_GuildUtils.handleJoinGuild(id);
      };
      obj21.children = closure_14(tmp2(nonce[35]).Button, obj22);
      tmp30Result4 = closure_14(tmp28, obj21);
    }
  }
  children[1] = tmp30Result4;
  if (hasJoinedEmojiSourceGuild) {
    let tmp26Result = null;
    if (null != expressionSourceGuild) {
      const obj23 = { style: obj.divider };
      const items8 = [closure_14(tmp2(nonce[38]).FormDivider, obj23), , ];
      const obj24 = { guild: expressionSourceGuild, hasJoinedGuild: hasJoinedEmojiSourceGuild, title: stringResult, showingJoinGuildCta: tmp47 };
      items8[1] = closure_14(tmp6(nonce[39]), obj24);
      let tmp30Result5 = !hasJoinedEmojiSourceGuild;
      if (!hasJoinedEmojiSourceGuild) {
        const obj25 = { expressionSourceGuild, doNotDisplayEmojiIds: null };
        const items9 = [emojiNode.id];
        obj25.doNotDisplayEmojiIds = items9;
        tmp30Result5 = closure_14(tmp2(nonce[40]).EmojiGrid, obj25);
      }
      const obj26 = { children: null };
      items8[2] = tmp30Result5;
      obj26.children = items8;
      tmp26Result = closure_15(closure_16, obj26);
    }
  } else {
    tmp26Result = null;
  }
  children[2] = tmp26Result;
  tmp26Result = null;
  if (tmp22) {
    tmp26Result = null;
    if (tidaWebformEnabled) {
      const obj27 = { style: obj.divider };
      const items10 = [closure_14(tmp2(nonce[38]).FormDivider, obj27), ];
      const obj28 = { style: obj.favoriteButtonContainer, children: null };
      const intl5 = tmp2(nonce[28]).intl;
      const string3 = intl5.string;
      const t3 = tmp2(nonce[28]).t;
      if (isFavoriteEmoji) {
        let string3Result = string3(t3.Ay49KA);
      } else {
        string3Result = string3(t3.nNsr67);
      }
      const obj29 = { text: string3Result, variant: null, size: "md", onPress: null };
      let str = "primary";
      if (isFavoriteEmoji) {
        str = "tertiary";
      }
      const obj30 = { children: null };
      obj29.variant = str;
      obj29.onPress = handleAddRemoveFavorite;
      obj28.children = closure_14(tmp2(nonce[35]).Button, obj29);
      items10[1] = closure_14(tmp28, obj28);
      obj30.children = items10;
      tmp26Result = closure_15(closure_16, obj30);
    }
  }
  children[3] = tmp26Result;
  return closure_15(closure_16, { children });
};