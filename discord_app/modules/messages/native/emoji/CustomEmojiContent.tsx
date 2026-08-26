// === Module 8957: CustomEmojiContent ===

// Module 8957 (CustomEmojiContent)
import ThemesDefault from "Themes" /* 712 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "computeRolesForGuild" /* 5349 */;
import closure_8 from "handleConnectionOpen" /* 4266 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ UserSettingsSections: c10, AnalyticEvents: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
createCacheKey = { nitroWheel: { height: 32, width: 32 }, nitroWheelPurple: null, emojiDescriptionWrapperOuter: null, starIcon: null, starIconSelected: null, starIconUnselected: null, moreMenuIcon: null, bottomCtaButton: null, ctaDescriptionWrapper: null, betaTag: null, betaTagTextAddPack: null, betaTagTextRemovePack: null, favoriteButtonContainer: null };
createCacheKey = { tintColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND_NEW };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", flex: 1, alignItems: "center", gap: 8 };
createCacheKey[3] = { height: 32, width: 32, margin: 0, padding: 0, flex: 0 };
createCacheKey[4] = { tintColor: ThemesDefault.colors.ICON_FEEDBACK_WARNING };
let obj1 = { tintColor: ThemesDefault.colors.ICON_FEEDBACK_WARNING };
createCacheKey[5] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj2 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[6] = { height: 32, width: 32, justifyContent: "center", alignItems: "center", color: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT };
createCacheKey[7] = { marginTop: 24 };
createCacheKey[8] = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginTop: 8 };
let obj3 = { height: 32, width: 32, justifyContent: "center", alignItems: "center", color: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT };
createCacheKey[9] = { backgroundColor: ThemesDefault.colors.WHITE };
let obj4 = { backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[10] = { color: ThemesDefault.unsafe_rawColors.BRAND_530 };
let obj5 = { color: ThemesDefault.unsafe_rawColors.BRAND_530 };
createCacheKey[11] = { color: ThemesDefault.unsafe_rawColors.PRIMARY_500 };
const obj6 = { color: ThemesDefault.unsafe_rawColors.PRIMARY_500 };
createCacheKey[12] = { paddingTop: ThemesDefault.space.PX_4 };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let obj7 = { paddingTop: ThemesDefault.space.PX_4 };
let result = require("set").fileFinishedImporting("modules/messages/native/emoji/CustomEmojiContent.tsx");

export default function CustomEmojiContent(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  const expressionSourceGuild = emojiNode.expressionSourceGuild;
  const customEmojiFromJoinedGuild = emojiNode.customEmojiFromJoinedGuild;
  ({ hasJoinedEmojiSourceGuild, nonce } = emojiNode);
  let obj;
  let stateFromStores;
  let stateFromStores1;
  let analyticsLocations;
  let isFavoriteEmoji;
  obj = undefined;
  obj = {};
  ({ sourceType, expressionSourceApplication } = emojiNode);
  let merged = Object.assign(callback2());
  obj1 = emojiNode(nonce[13]);
  let merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  let obj2 = emojiNode(nonce[14]);
  const items = [obj];
  stateFromStores = obj2.useStateFromStores(items, () => obj.getCurrentUser());
  let obj3 = expressionSourceGuild(nonce[9]);
  let obj4 = emojiNode(nonce[14]);
  const items1 = [isFavoriteEmoji];
  stateFromStores1 = obj4.useStateFromStores(items1, () => isFavoriteEmoji.getGuildId());
  let tmp9 = null != stateFromStores1;
  if (tmp9) {
    let id;
    if (expressionSourceGuild != null) {
      id = expressionSourceGuild.id;
    }
    tmp9 = stateFromStores1 === id;
  }
  analyticsLocations = tmp6(tmp3[15])().analyticsLocations;
  const items2 = [customEmojiFromJoinedGuild, stateFromStores1];
  const memo = obj.useMemo(() => {
    if (null == customEmojiFromJoinedGuild) {
      obj = { isRoleSubscriptionEmoji: false, isUnusableRoleSubscriptionEmoji: false, userIsRoleSubscriber: false };
    } else {
      obj = { isRoleSubscriptionEmoji: null, isUnusableRoleSubscriptionEmoji: null, userIsRoleSubscriber: null };
      obj[0] = customEmojiFromJoinedGuild(nonce[16]).isPurchasableRoleSubscriptionEmoji(tmp);
      const obj2 = customEmojiFromJoinedGuild(nonce[16]);
      obj[1] = customEmojiFromJoinedGuild(nonce[16]).isUnusableRoleSubscriptionEmoji(tmp, stateFromStores1);
      obj[2] = analyticsLocations.getUserSubscriptionRoles(tmp.guildId).size > 0;
      const obj3 = customEmojiFromJoinedGuild(nonce[16]);
      const tmp4 = stateFromStores1;
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
    tmp12 = type !== tmp2(tmp3[17]).EmojiTypes.GUILD;
  }
  let result = !tmp12;
  if (!tmp12) {
    let tmp2Result = tmp2(tmp3[18]);
    let guildId;
    if (customEmojiFromJoinedGuild != null) {
      guildId = customEmojiFromJoinedGuild.guildId;
    }
    result = tmp2Result.shouldHideGuildPurchaseEntryPoints(guildId);
  }
  tmp2Result = tmp2(tmp3[19]);
  isFavoriteEmoji = tmp2Result.useIsFavoriteEmoji(stateFromStores1, customEmojiFromJoinedGuild);
  const isPremiumResult = obj3.isPremium(stateFromStores);
  const tidaWebformEnabled = expressionSourceGuild(nonce[20]).useExperiment({ location: "CustomEmojiContent" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = tmp2(tmp3[21]).DeveloperMode;
  let flag;
  const setting = DeveloperMode.useSetting();
  if (expressionSourceGuild != null) {
    flag = expressionSourceGuild.isDiscoverable();
  }
  if (flag == null) {
    flag = false;
  }
  if (null != stateFromStores1) {
    let DM_CHANNEL = constants.GUILD_CHANNEL;
  } else {
    DM_CHANNEL = constants.DM_CHANNEL;
  }
  obj = { page: DM_CHANNEL, section: constants2.EMOJI_UPSELL_POPOUT };
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
      obj = expressionSourceGuild(nonce[12]);
      obj.hideAllActionSheets();
      obj1 = expressionSourceGuild(nonce[10]);
      obj = { nonce };
      obj1.track(closure_1_11.CLOSE_POPOUT, obj);
      obj = { location_page: obj.page, location_section: obj.section };
      expressionSourceGuild(nonce[10]).track(closure_1_11.PREMIUM_PROMOTION_OPENED, obj);
      const obj4 = expressionSourceGuild(nonce[10]);
      obj1 = { screen: closure_1_10.PREMIUM, params: obj2 };
      emojiNode(nonce[23]).openUserSettings(obj1);
    }
  };
  let text = emojiNode(nonce[22]).getEmojiPopoutData(obj);
  const tmp2Result1 = emojiNode(nonce[22]);
  obj1 = { emojiId: emojiNode.id, currentGuildId: stateFromStores1, popoutData: text, emojiSourceGuildId: null, nonce: null };
  let id1;
  if (expressionSourceGuild != null) {
    id1 = expressionSourceGuild.id;
  }
  obj1[3] = id1;
  obj1[4] = nonce;
  const trackOpenPopout = emojiNode(nonce[24]).useTrackOpenPopout(obj1);
  ({ emojiDescription, type } = text);
  let tmp22 = !isUnusableRoleSubscriptionEmoji;
  if (!isUnusableRoleSubscriptionEmoji) {
    tmp22 = hasJoinedEmojiSourceGuild;
  }
  let intl = tmp2(tmp3[28]).intl;
  let string = intl.string;
  let t = tmp2(tmp3[28]).t;
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
  obj3[0] = obj4;
  const items4 = [callback(expressionSourceGuild(nonce[36]), { style: obj.emojiIcon, source: obj6 }), ];
  const obj7 = { style: obj.emojiDescriptionWrapperOuter, children: null };
  const obj8 = { style: obj.emojiDescriptionWrapper, children: null };
  let obj5 = { style: obj.emojiIcon, source: obj6 };
  const tmp24 = items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton;
  const items5 = [callback(emojiNode(nonce[27]).Text, { variant: "text-md/bold", color: "mobile-text-heading-primary", children: ":" + emojiNode.alt + ":" }), ];
  let tmp30Result = null != emojiDescription;
  if (tmp30Result) {
    const obj10 = { variant: "text-sm/medium", children: null };
    obj10[1] = emojiDescription;
    tmp30Result = tmp30(tmp2(tmp3[27]).Text, obj10);
  }
  function handleAddRemoveFavorite() {
    function content() {
      obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: null };
      const intl = closure_1_0(closure_1_3[28]).intl;
      const string = intl.string;
      const t = closure_1_0(closure_1_3[28]).t;
      if (closure_8) {
        let stringResult = string(t.in1rga);
      } else {
        stringResult = string(t.mE2e8A);
      }
      obj[2] = stringResult;
      return closure_1_14(closure_1_0(closure_1_3[27]).Text, obj);
    }
    obj = expressionSourceGuild(nonce[12]);
    obj.hideAllActionSheets();
    obj1 = expressionSourceGuild(nonce[10]);
    obj = { nonce };
    obj1.track(closure_1_11.CLOSE_POPOUT, obj);
    const obj4 = emojiNode(nonce[29]);
    if (isFavoriteEmoji) {
      obj4.unfavoriteEmoji(customEmojiFromJoinedGuild);
      let tmpResult = tmp(tmp2[30]);
      obj = { key: "EMOJI_UNFAVORITED", icon: null, content: null };
      obj[1] = function icon() {
        const style = {};
        const merged = Object.assign(closure_4.starIcon);
        const merged1 = Object.assign(closure_4.starIconUnselected);
        return closure_1_14(closure_1_0(closure_1_3[26]).StarOutlineIcon, { style });
      };
      obj[2] = content;
      tmpResult.open(obj);
    } else {
      obj4.favoriteEmoji(customEmojiFromJoinedGuild);
      tmpResult = tmp(tmp2[30]);
      obj1 = { key: "EMOJI_FAVORITED", icon: null, content: null };
      obj1[1] = function icon() {
        const style = {};
        const merged = Object.assign(closure_4.starIcon);
        const merged1 = Object.assign(closure_4.starIconSelected);
        return closure_1_14(closure_1_0(closure_1_3[25]).StarIcon, { style });
      };
      obj1[2] = content;
      tmpResult.open(obj1);
    }
  }
  items5[1] = tmp30Result;
  obj8[1] = items5;
  const items6 = [closure_15(stateFromStores1, obj8), , ];
  let tmp32 = null;
  if (tmp22) {
    tmp32 = null;
    if (!tidaWebformEnabled) {
      const intl2 = tmp2(tmp3[28]).intl;
      const string2 = intl2.string;
      const t2 = tmp2(tmp3[28]).t;
      if (isFavoriteEmoji) {
        let string2Result = string2(t2.aBUcp3);
      } else {
        string2Result = string2(t2.yZFibY);
      }
      const obj11 = { accessibilityLabel: null, style: null, onPress: null, children: null };
      obj11[0] = string2Result;
      obj11[1] = obj.moreMenuIcon;
      obj11[2] = handleAddRemoveFavorite;
      if (isFavoriteEmoji) {
        const obj12 = { style: null };
        const obj13 = {};
        const merged4 = Object.assign(obj.starIcon);
        const merged5 = Object.assign(obj.starIconSelected);
        obj12[0] = obj13;
        tmp30Result = tmp30(tmp2(tmp3[25]).StarIcon, obj12);
      } else {
        const obj14 = { style: null };
        const obj15 = {};
        const merged6 = Object.assign(obj.starIcon);
        const merged7 = Object.assign(obj.starIconUnselected);
        obj14[0] = obj15;
        tmp30Result = tmp30(tmp2(tmp3[26]).StarOutlineIcon, obj14);
      }
      obj11[3] = tmp30Result;
      tmp30(stateFromStores, obj11);
      const tmp33 = stateFromStores;
    }
  }
  items6[1] = tmp32;
  let tmp30Result2 = null;
  if (tidaWebformEnabled) {
    tmp30Result2 = null;
    if (setting) {
      const obj16 = { accessibilityLabel: null, style: null, onPress: null, children: null };
      function handleOpenEmojiOptionsMenu() {
        obj = expressionSourceGuild(nonce[12]);
        obj = { emojiSrc: emojiNode.src };
        obj.openLazy(emojiNode(nonce[32])(nonce[31], nonce.paths), "EmojiOptionsActionSheet", obj, "stack");
      }
      const intl3 = tmp2(tmp3[28]).intl;
      obj16[0] = intl3.string(tmp2(tmp3[28]).t.PdRCRg);
      obj16[1] = obj.moreMenuIcon;
      obj16[2] = handleOpenEmojiOptionsMenu;
      const obj17 = { color: null };
      obj17[0] = tmp6(tmp3[8]).colors.INTERACTIVE_TEXT_DEFAULT;
      obj16[3] = tmp30(tmp2(tmp3[33]).MoreHorizontalIcon, obj17);
      tmp30Result2 = tmp30(stateFromStores, obj16);
    }
  }
  const tmp47 = type === emojiNode(nonce[22]).EmojiPopoutType.JOIN_GUILD;
  items6[2] = tmp30Result2;
  obj7[1] = items6;
  items4[1] = closure_15(stateFromStores1, obj7);
  obj3[1] = items4;
  const children = [closure_15(stateFromStores1, obj3), , , ];
  if (type === emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
    if (type !== tmp2(tmp3[22]).EmojiPopoutType.GET_PREMIUM) {
      let tmp30Result4 = null;
    } else {
      const obj18 = { style: null, children: null };
      obj18[0] = obj2;
      let flag2 = { shouldTintPurple: false }.shouldTintPurple;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let nitroWheel = obj.nitroWheel;
      if (flag2) {
        const obj19 = {};
        const merged8 = Object.assign(nitroWheel);
        const merged9 = Object.assign(obj.nitroWheelPurple);
        let tmp50 = obj19;
      } else {
        tmp50 = nitroWheel;
      }
      const obj20 = { icon: null, text: null, variant: "active", size: "md", grow: true, onPress: null };
      const obj21 = { style: null };
      obj21[0] = tmp50;
      nitroWheel = tmp30(tmp2(tmp3[34]).NitroWheel, obj21);
      obj20[0] = nitroWheel;
      text = text.text;
      obj20[1] = text;
      obj20[5] = function onPress() {
        let result = null == stateFromStores;
        if (!result) {
          obj = expressionSourceGuild(nonce[9]);
          result = obj.canUseEmojisEverywhere(tmp);
        }
        if (!result) {
          obj1 = expressionSourceGuild(nonce[12]);
          obj1.hideAllActionSheets();
          obj = { nonce: null };
          obj[0] = nonce;
          expressionSourceGuild(nonce[10]).track(closure_1_11.CLOSE_POPOUT, obj);
          const obj3 = expressionSourceGuild(nonce[10]);
          obj = { location_page: null, location_section: null };
          ({ page: obj6[0], section: obj6[1] } = tmp2);
          expressionSourceGuild(nonce[10]).track(closure_1_11.PREMIUM_PROMOTION_OPENED, obj);
          obj1 = { analyticsLocation: null, analyticsLocations: null };
          obj1[0] = tmp2;
          obj1[1] = analyticsLocations;
          expressionSourceGuild(nonce[11])(obj1);
          const obj5 = expressionSourceGuild(nonce[10]);
        }
      };
      obj18[1] = tmp30(tmp2(tmp3[35]).Button, obj20);
      tmp30(tmp28, obj18);
    }
  } else {
    tmp30Result4 = null;
    if (tmp47) {
      const obj22 = { style: null, children: null };
      obj22[0] = obj2;
      const obj23 = { text: null, size: "md", grow: true, onPress: null };
      const intl4 = tmp2(tmp3[28]).intl;
      obj23[0] = intl4.string(tmp2(tmp3[28]).t.riu2R5);
      obj23[3] = function onPress() {
        let id;
        if (expressionSourceGuild != null) {
          id = expressionSourceGuild.id;
        }
        emojiNode(nonce[37]).handleJoinGuild(id);
      };
      obj22[1] = tmp30(tmp2(tmp3[35]).Button, obj23);
      tmp30Result4 = tmp30(tmp28, obj22);
    }
  }
  children[1] = tmp30Result4;
  if (hasJoinedEmojiSourceGuild) {
    let tmp26Result = null;
    if (null != expressionSourceGuild) {
      const obj24 = { style: null };
      obj24[0] = obj.divider;
      const items8 = [tmp30(tmp2(tmp3[38]).FormDivider, obj24), , ];
      const obj25 = { guild: null, hasJoinedGuild: null, title: null, showingJoinGuildCta: null };
      obj25[0] = expressionSourceGuild;
      obj25[1] = hasJoinedEmojiSourceGuild;
      obj25[2] = stringResult;
      obj25[3] = tmp47;
      items8[1] = tmp30(tmp6(tmp3[39]), obj25);
      let tmp30Result5 = !hasJoinedEmojiSourceGuild;
      if (!hasJoinedEmojiSourceGuild) {
        const obj26 = { expressionSourceGuild: null, doNotDisplayEmojiIds: null };
        obj26[0] = expressionSourceGuild;
        const items9 = [emojiNode.id];
        obj26[1] = items9;
        tmp30Result5 = tmp30(tmp2(tmp3[40]).EmojiGrid, obj26);
      }
      const obj27 = { children: null };
      items8[2] = tmp30Result5;
      obj27[0] = items8;
      tmp26Result = tmp26(tmp27, obj27);
    }
  } else {
    tmp26Result = null;
  }
  children[2] = tmp26Result;
  tmp26Result = null;
  if (tmp22) {
    tmp26Result = null;
    if (tidaWebformEnabled) {
      const obj28 = { style: null };
      obj28[0] = obj.divider;
      const items10 = [tmp30(tmp2(tmp3[38]).FormDivider, obj28), ];
      const obj29 = { style: null, children: null };
      obj29[0] = obj.favoriteButtonContainer;
      const intl5 = tmp2(tmp3[28]).intl;
      const string3 = intl5.string;
      const t3 = tmp2(tmp3[28]).t;
      if (isFavoriteEmoji) {
        let string3Result = string3(t3.Ay49KA);
      } else {
        string3Result = string3(t3.nNsr67);
      }
      const obj30 = { text: null, variant: null, size: "md", onPress: null };
      obj30[0] = string3Result;
      let str = "primary";
      if (isFavoriteEmoji) {
        str = "tertiary";
      }
      const obj31 = { children: null };
      obj30[1] = str;
      obj30[3] = handleAddRemoveFavorite;
      obj29[1] = tmp30(tmp2(tmp3[35]).Button, obj30);
      items10[1] = tmp30(tmp28, obj29);
      obj31[0] = items10;
      tmp26Result = tmp26(tmp27, obj31);
    }
  }
  children[3] = tmp26Result;
  return closure_15(closure_16, { children });
};