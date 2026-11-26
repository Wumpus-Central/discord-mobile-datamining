// discord_app/modules/messages/native/emoji/CustomEmojiContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/02120_asyncRequireImpl.js";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import RoleSubscriptionEmojiUtilsAll from "../../../guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import openPremiumModalDefault from "../../../premium/native/openPremiumModal.tsx";
import EmojiActionCreators from "../../../../actions/EmojiActionCreators.tsx";
import StarOutlineIcon from "../../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx";
import StarIcon from "../../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import guild_GuildUtils from "../../../guild/GuildUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SubscriptionRoleStore from "../../../guild_role_subscriptions/SubscriptionRoleStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const EmojiSourceDataTypes = fn(7053).EmojiSourceDataTypes;
const Constants = fn(1071);
({
  UserSettingsSections: closure_11,
  AnalyticEvents: closure_12,
  AnalyticsPages: map1,
  AnalyticsSections: closure_14,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  nitroWheel: { height: 32, width: 32 },
  nitroWheelPurple: { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND_NEW },
  emojiDescriptionWrapperOuter: { flexDirection: "row", flex: 1, alignItems: "center", gap: 8 },
  moreMenuIcon: null,
  bottomCtaButton: null,
  ctaDescriptionWrapper: null,
  betaTag: null,
  betaTagTextAddPack: null,
  betaTagTextRemovePack: null,
  favoriteButtonContainer: null,
};
let size = {
  height: 32,
  width: 32,
  justifyContent: "center",
  alignItems: "center",
  color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT,
};
obj2.moreMenuIcon = size;
obj2.bottomCtaButton = { marginTop: 24 };
obj2.ctaDescriptionWrapper = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: 8,
};
let obj3 = { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND_NEW };
obj2.betaTag = { backgroundColor: nativeDefault.colors.WHITE };
let obj4 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.betaTagTextAddPack = { color: nativeDefault.unsafe_rawColors.BRAND_530 };
let obj5 = { color: nativeDefault.unsafe_rawColors.BRAND_530 };
obj2.betaTagTextRemovePack = { color: nativeDefault.unsafe_rawColors.PRIMARY_500 };
let obj6 = { color: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj2.favoriteButtonContainer = { paddingTop: nativeDefault.space.PX_4 };
let closure_18 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/emoji/CustomEmojiContent.tsx");

export default function CustomEmojiContent(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  ({ sourceType, expressionSourceGuild } = emojiNode);
  const customEmojiFromJoinedGuild = emojiNode.customEmojiFromJoinedGuild;
  ({ hasJoinedEmojiSourceGuild, nonce } = emojiNode);
  let analyticsLocations;
  let isFavoriteEmoji;
  let obj = {};
  const merged = Object.assign(closure_18());
  const merged1 = Object.assign(emojiNode(nonce[14]).useSharedMessageEmojiStyles());
  let obj2 = emojiNode(nonce[14]);
  items = [UserStore];
  const stateFromStores = emojiNode(nonce[15]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = emojiNode(nonce[15]);
  let obj4 = expressionSourceGuild(nonce[10]);
  const isPremiumResult = expressionSourceGuild(nonce[10]).isPremium(stateFromStores);
  const items1 = [SelectedGuildStore];
  const stateFromStores1 = emojiNode(nonce[15]).useStateFromStores(items1, () => guildId.getGuildId());
  let tmp9 = null != stateFromStores1;
  if (tmp9) {
    let id;
    if (expressionSourceGuild != null) {
      id = expressionSourceGuild.id;
    }
    tmp9 = stateFromStores1 === id;
  }
  analyticsLocations = expressionSourceGuild(nonce[16])().analyticsLocations;
  const items2 = [customEmojiFromJoinedGuild, stateFromStores1];
  const memo = stateFromStores.useMemo(() => {
    if (null == customEmojiFromJoinedGuild) {
      let obj = { isRoleSubscriptionEmoji: false, isUnusableRoleSubscriptionEmoji: false, userIsRoleSubscriber: false };
    } else {
      obj = {
        isRoleSubscriptionEmoji:
          RoleSubscriptionEmojiUtilsAll.isPurchasableRoleSubscriptionEmoji(customEmojiFromJoinedGuild),
        isUnusableRoleSubscriptionEmoji: null,
        userIsRoleSubscriber: null,
      };
      obj.isUnusableRoleSubscriptionEmoji = RoleSubscriptionEmojiUtilsAll.isUnusableRoleSubscriptionEmoji(
        customEmojiFromJoinedGuild,
        stateFromStores1,
      );
      obj.userIsRoleSubscriber =
        SubscriptionRoleStore.getUserSubscriptionRoles(customEmojiFromJoinedGuild.guildId).size > 0;
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
    tmp12 = type1 !== tmp2(nonce[18]).EmojiTypes.GUILD;
  }
  let result = !tmp12;
  if (!tmp12) {
    let guildId;
    if (customEmojiFromJoinedGuild != null) {
      guildId = customEmojiFromJoinedGuild.guildId;
    }
    result = tmp2(nonce[19]).shouldHideGuildPurchaseEntryPoints(guildId);
    const tmp2Result = tmp2(nonce[19]);
  }
  let obj5 = emojiNode(nonce[15]);
  isFavoriteEmoji = emojiNode(nonce[20]).useIsFavoriteEmoji(stateFromStores1, customEmojiFromJoinedGuild);
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
  const tmp2Result4 = emojiNode(nonce[20]);
  let onPress = emojiNode(nonce[22]).getEmojiPopoutData({
    sourceType,
    expressionSourceApplication: emojiNode.expressionSourceApplication,
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
      AnalyticsUtilsDefault.track(constants2.PREMIUM_PROMOTION_OPENED, {
        location_page: obj6.page,
        location_section: obj6.section,
      });
      obj6 = openUserSettings;
      obj6.openUserSettings({ screen: constants.PREMIUM, params: { analyticsLocation: obj6 } });
    },
  });
  let obj7 = {
    sourceType,
    expressionSourceApplication: emojiNode.expressionSourceApplication,
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
      AnalyticsUtilsDefault.track(constants2.PREMIUM_PROMOTION_OPENED, {
        location_page: obj6.page,
        location_section: obj6.section,
      });
      obj6 = openUserSettings;
      obj6.openUserSettings({ screen: constants.PREMIUM, params: { analyticsLocation: obj6 } });
    },
  };
  const tmp2Result5 = emojiNode(nonce[22]);
  const obj8 = {
    emojiId: emojiNode.id,
    currentGuildId: stateFromStores1,
    popoutData: onPress,
    emojiSourceGuildId: null,
    nonce: null,
  };
  let id1;
  if (expressionSourceGuild != null) {
    id1 = expressionSourceGuild.id;
  }
  obj8.emojiSourceGuildId = id1;
  obj8.nonce = nonce;
  const trackOpenPopout = emojiNode(nonce[24]).useTrackOpenPopout(obj8);
  ({ emojiDescription, type } = onPress);
  let intl = tmp2(nonce[27]).intl;
  const string = intl.string;
  const t = tmp2(nonce[27]).t;
  if (hasJoinedEmojiSourceGuild) {
    let stringResult = string(t.ohTzZH);
  } else {
    stringResult = string(t["eLfh+a"]);
  }
  const items3 = [emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM, emojiNode(nonce[22]).EmojiPopoutType.JOIN_GUILD];
  const tmp2Result6 = emojiNode(nonce[24]);
  const obj9 = {};
  const merged2 = Object.assign(items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton);
  obj9.borderRadius = expressionSourceGuild(nonce[9]).radii.xl;
  let obj10 = { style: null, children: null };
  const obj11 = {};
  const merged3 = Object.assign(obj.emojiContainer);
  obj11.marginTop = 8;
  obj10.style = obj11;
  const items4 = [
    closure_15(expressionSourceGuild(nonce[35]), { style: obj.emojiIcon, source: { uri: emojiNode.src } }),
  ];
  const obj13 = { style: obj.emojiDescriptionWrapperOuter, children: null };
  const obj14 = { style: obj.emojiDescriptionWrapper, children: null };
  const obj12 = { style: obj.emojiIcon, source: { uri: emojiNode.src } };
  const tmp23 = items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton;
  const items5 = [
    closure_15(emojiNode(nonce[36]).Text, {
      variant: "body-md/semibold",
      color: "mobile-text-heading-primary",
      children: ":" + emojiNode.alt + ":",
    }),
  ];
  let tmp29Result = null != emojiDescription;
  if (tmp29Result) {
    const obj16 = { variant: "body-sm/medium", children: emojiDescription };
    tmp29Result = closure_15(tmp2(nonce[36]).Text, obj16);
  }
  items5[1] = tmp29Result;
  obj14.children = items5;
  const items6 = [closure_16(analyticsLocations, obj14)];
  let tmp29Result5 = null;
  if (setting) {
    tmp29Result5 = null;
    if (sourceType !== isFavoriteEmoji.PACK) {
      const obj17 = { accessibilityLabel: null, style: null, onPress: null, children: null };
      function handleOpenEmojiOptionsMenu() {
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(9769, dependencyMap.paths),
          "EmojiOptionsActionSheet",
          { emojiSrc: emojiNode.src },
          "stack",
        );
      }
      const intl4 = tmp2(nonce[27]).intl;
      obj17.accessibilityLabel = intl4.string(tmp2(nonce[27]).t.PdRCRg);
      obj17.style = obj.moreMenuIcon;
      obj17.onPress = handleOpenEmojiOptionsMenu;
      const obj18 = { color: expressionSourceGuild(nonce[9]).colors.INTERACTIVE_TEXT_DEFAULT };
      obj17.children = closure_15(tmp2(nonce[32]).MoreHorizontalIcon, obj18);
      tmp29Result5 = closure_15(stateFromStores1, obj17);
    }
  }
  const tmp33 = type === emojiNode(nonce[22]).EmojiPopoutType.JOIN_GUILD;
  items6[1] = tmp29Result5;
  obj13.children = items6;
  items4[1] = closure_16(analyticsLocations, obj13);
  obj10.children = items4;
  const children = [closure_16(analyticsLocations, obj10), , ,];
  if (type === emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
    if (type !== tmp2(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
      let tmp29Result7 = null;
    } else {
      const obj19 = { style: obj9, children: null };
      let flag2 = { shouldTintPurple: false }.shouldTintPurple;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let nitroWheel = obj.nitroWheel;
      if (flag2) {
        const obj20 = {};
        const merged4 = Object.assign(nitroWheel);
        const merged5 = Object.assign(obj.nitroWheelPurple);
        let tmp36 = obj20;
      } else {
        tmp36 = nitroWheel;
      }
      const obj21 = { icon: null, text: null, variant: "active", size: "md", grow: true, onPress: null };
      const obj22 = { style: tmp36 };
      nitroWheel = closure_15(tmp2(nonce[33]).NitroWheel, obj22);
      obj21.icon = nitroWheel;
      obj21.text = onPress.text;
      onPress = function onPress() {
        let result = null == stateFromStores;
        if (!result) {
          result = PremiumUtilsDefault.canUseEmojisEverywhere(tmp);
        }
        if (!result) {
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          const obj4 = { nonce };
          AnalyticsUtilsDefault.track(constants2.CLOSE_POPOUT, obj4);
          ({ page: obj6.location_page, section: obj6.location_section } = obj6);
          AnalyticsUtilsDefault.track(constants2.PREMIUM_PROMOTION_OPENED, {
            location_page: null,
            location_section: null,
          });
          const obj10 = { analyticsLocation: obj6, analyticsLocations };
          openPremiumModalDefault(obj10);
          const obj7 = { location_page: null, location_section: null };
        }
      };
      obj21.onPress = onPress;
      obj19.children = closure_15(tmp2(nonce[34]).Button, obj21);
      closure_15(tmp27, obj19);
    }
  } else {
    tmp29Result7 = null;
    if (tmp33) {
      const obj23 = { style: obj9, children: null };
      const obj24 = { text: null, size: "md", grow: true, onPress: null };
      let intl2 = tmp2(nonce[27]).intl;
      obj24.text = intl2.string(tmp2(nonce[27]).t.riu2R5);
      obj24.onPress = function onPress() {
        let id;
        if (expressionSourceGuild != null) {
          id = expressionSourceGuild.id;
        }
        guild_GuildUtils.handleJoinGuild(id);
      };
      obj23.children = closure_15(tmp2(nonce[34]).Button, obj24);
      tmp29Result7 = closure_15(tmp27, obj23);
    }
  }
  children[1] = tmp29Result7;
  if (hasJoinedEmojiSourceGuild) {
    let tmp25Result = null;
    if (null != expressionSourceGuild) {
      const obj25 = { style: obj.divider };
      const items8 = [closure_15(tmp2(nonce[38]).FormDivider, obj25), ,];
      const obj26 = {
        guild: expressionSourceGuild,
        hasJoinedGuild: hasJoinedEmojiSourceGuild,
        title: stringResult,
        showingJoinGuildCta: tmp33,
      };
      items8[1] = closure_15(expressionSourceGuild(nonce[39]), obj26);
      let tmp29Result8 = !hasJoinedEmojiSourceGuild;
      if (!hasJoinedEmojiSourceGuild) {
        const obj27 = { expressionSourceGuild, doNotDisplayEmojiIds: null };
        const items9 = [emojiNode.id];
        obj27.doNotDisplayEmojiIds = items9;
        tmp29Result8 = closure_15(tmp2(nonce[40]).EmojiGrid, obj27);
      }
      const obj28 = { children: null };
      items8[2] = tmp29Result8;
      obj28.children = items8;
      tmp25Result = closure_16(closure_17, obj28);
    }
  } else {
    tmp25Result = null;
  }
  children[2] = tmp25Result;
  let tmp25Result2 = null;
  if (!isUnusableRoleSubscriptionEmoji) {
    tmp25Result2 = null;
    if (hasJoinedEmojiSourceGuild) {
      const obj29 = { style: obj.divider };
      const items10 = [closure_15(tmp2(nonce[38]).FormDivider, obj29)];
      const obj30 = { style: obj.favoriteButtonContainer, children: null };
      const intl3 = tmp2(nonce[27]).intl;
      const string2 = intl3.string;
      const t2 = tmp2(nonce[27]).t;
      if (isFavoriteEmoji) {
        let string2Result = string2(t2.Ay49KA);
      } else {
        string2Result = string2(t2.nNsr67);
      }
      const obj31 = { text: string2Result, variant: null, size: "md", onPress: null };
      let str = "primary";
      if (isFavoriteEmoji) {
        str = "tertiary";
      }
      const obj32 = { children: null };
      obj31.variant = str;
      obj31.onPress = function handleAddRemoveFavorite() {
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        AnalyticsUtilsDefault.track(constants2.CLOSE_POPOUT, { nonce });
        const obj4 = EmojiActionCreators;
        if (isFavoriteEmoji) {
          obj4.unfavoriteEmoji(customEmojiFromJoinedGuild);
          const obj5 = { text: null, icon: null };
          const intl2 = util.intl;
          obj5.text = intl2.string(util.t.in1rga);
          obj5.icon = StarOutlineIcon.StarOutlineIcon;
          ToastActionCreatorsDefault.open("EMOJI_UNFAVORITED", obj5);
          const tmpResult = ToastActionCreatorsDefault;
        } else {
          obj4.favoriteEmoji(customEmojiFromJoinedGuild);
          obj6 = { text: null, icon: null, iconColor: null };
          const intl = util.intl;
          obj6.text = intl.string(util.t.mE2e8A);
          obj6.icon = StarIcon.StarIcon;
          obj6.iconColor = nativeDefault.colors.ICON_FEEDBACK_WARNING;
          ToastActionCreatorsDefault.open("EMOJI_FAVORITED", obj6);
          const tmpResult2 = ToastActionCreatorsDefault;
        }
        const obj3 = { nonce };
      };
      obj30.children = closure_15(tmp2(nonce[34]).Button, obj31);
      items10[1] = closure_15(tmp27, obj30);
      obj32.children = items10;
      tmp25Result2 = closure_16(closure_17, obj32);
    }
  }
  children[3] = tmp25Result2;
  return closure_16(closure_17, { children });
}
