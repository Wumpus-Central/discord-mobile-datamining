import importAllResult from "_copy";
import { View } from "useProfileTheme";
import mergeGuildAvatar from "mergeGuildAvatar";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "UserProfileOverscrollBanner";

let c10;
let c9;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
let c3 = importAllResult;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_6, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: error } = ARBITRARY_LARGE_OFFSET);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
const memoResult = importAllResult.memo(function BotUserProfileContent(user) {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let contentAnimatedStyle;
  let disableMessage;
  let displayProfile;
  let primaryColor;
  let scrollPosition;
  let secondaryColor;
  let showBlur;
  let showUserProfileActionSheet;
  let theme;
  user = user.user;
  const channel = user.channel;
  ({ displayProfile, showUserProfileActionSheet } = user);
  let trackUserProfileAction;
  let importAllResult;
  let guild_id;
  ({ disableMessage, scrollPosition } = user);
  const tmp3 = channel(trackUserProfileAction[6])();
  const tmp5 = channel(trackUserProfileAction[7])(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(trackUserProfileAction[8])({ scrollPosition, bannerHeight: tmp5 }));
  let obj = user(trackUserProfileAction[10]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = user(trackUserProfileAction[11]);
  let items = [mergeGuildAvatar];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = channel(trackUserProfileAction[12]);
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = obj2.useName(guildId, id, user);
  let tmpResult = tmp(tmp2[13]);
  importAllResult = tmpResult.useUserTag(user);
  if (displayProfile != null) {
    const application = displayProfile.application;
  }
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const items1 = [guild_id, user];
  const memo = importAllResult.useMemo(() => {
    if (null != guild_id) {
      if (null != user) {
        const obj = {};
        const items = [tmp2.id];
        obj[tmp] = items;
      }
      return {};
    }
  }, items1);
  let tmp7Result = tmp7(tmp2[14]);
  const subscribeGuildMembers = tmp7Result.useSubscribeGuildMembers(memo, "BotUserProfileContent");
  const tmp4 = ACTION_SHEET_MAX_WIDTH;
  const tmp6 = channel(trackUserProfileAction[8])({ scrollPosition, bannerHeight: tmp5 });
  const tmp16 = channel(trackUserProfileAction[16])(user.id);
  const tmp15 = channel(trackUserProfileAction[15])(displayProfile);
  ({ primaryColor, theme, secondaryColor } = channel(trackUserProfileAction[17])({ user, displayProfile }));
  tmp7Result = tmp7(tmp2[18]);
  const userProfileColors = tmp7Result.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null != user) {
    if (null != stateFromStores) {
      obj = { user: null, displayProfile: null, bannerHeight: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null };
      obj[0] = user;
      obj[1] = displayProfile;
      obj[2] = tmp5;
      obj[3] = bannerAnimatedStyle;
      obj[4] = bannerImageAnimatedStyle;
      obj[5] = blurAnimatedProps;
      obj[6] = showBlur;
      const items2 = [callback(tmp(tmp2[21]), obj), , ];
      obj = { style: null, children: null };
      const items3 = [tmp3.bannerButtons, bannerAnimatedStyle];
      obj[0] = items3;
      obj1 = { user: null, application: null, channel: null };
      obj1[0] = user;
      obj1[1] = application;
      obj1[2] = channel;
      obj[1] = callback(tmp(tmp2[23]), obj1);
      items2[1] = callback(tmp(tmp2[22]).View, obj);
      obj2 = { style: null, children: null };
      obj2[0] = contentAnimatedStyle;
      const obj3 = { user: null, guildId: null, backgroundColor: null, statusStyle: null };
      obj3[0] = user;
      let guildId1;
      if (displayProfile != null) {
        guildId1 = displayProfile.guildId;
      }
      obj3[1] = guildId1;
      obj3[2] = tmp19;
      const obj4 = { backgroundColor: null };
      obj4[0] = tmp20;
      obj3[3] = obj4;
      const items4 = [callback(tmp7(tmp2[24]).OpenableUserProfileAvatar, obj3), ];
      const items5 = [, , ];
      ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
      let num = 0;
      if (null == tmp16) {
        num = closure_7;
      }
      const obj5 = { style: null, children: null };
      const obj6 = { paddingTop: null, paddingBottom: null };
      obj6[0] = num;
      obj6[1] = channel(trackUserProfileAction[9])().bottom + closure_6;
      items5[2] = obj6;
      obj5[0] = items5;
      const obj7 = { customStatusActivity: null, hasCustomProfileTheme: null, onPressTruncatedStatus: null, style: null, emojiOnlyStyle: null };
      obj7[0] = tmp16;
      obj7[1] = null != primaryColor;
      obj7[2] = function onPressTruncatedStatus() {
        let obj = channel(trackUserProfileAction[26]);
        obj = { user, guildId: guild_id, channelId: null };
        let id;
        if (channel != null) {
          id = channel.id;
        }
        obj[2] = id;
        obj.openLazy(user(trackUserProfileAction[28])(trackUserProfileAction[27], trackUserProfileAction.paths), "UserProfileCustomStatusActionSheet", obj, "stack");
      };
      ({ customStatusBubble: obj10[3], emojiOnlyCustomStatusBubble: obj10[4] } = tmp3);
      const items6 = [callback(tmp(tmp2[25]), obj7), , ];
      const obj8 = { style: null, children: null };
      obj8[0] = tmp3.primaryInfo;
      const obj9 = { user: null, guildId: null, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityHint: null, onPressDisplayName: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: true };
      obj9[0] = user;
      obj9[1] = guild_id;
      obj9[2] = name;
      let pronouns;
      tmpResult = tmp(tmp2[29]);
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      function handleCopyUsername() {
        trackUserProfileAction({ action: "COPY_USERNAME" });
        user(trackUserProfileAction[19]).copy(closure_3);
        const obj = user(trackUserProfileAction[19]);
        const result = user(trackUserProfileAction[20]).presentUsernameCopied();
      }
      obj9[3] = pronouns;
      obj9[4] = tmp15;
      obj9[5] = containerBackground;
      function handlePressPronouns() {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        user(trackUserProfileAction[20]).presentUserPronouns();
      }
      const intl = tmp7(tmp2[30]).intl;
      obj9[6] = intl.string(tmp7(tmp2[30]).t.y5MwJy);
      obj9[7] = handleCopyUsername;
      obj9[8] = handleCopyUsername;
      obj9[9] = handlePressPronouns;
      const items7 = [callback(tmpResult, obj9), , ];
      const obj10 = { user: null };
      obj10[0] = user;
      items7[1] = callback(tmp(tmp2[31]), obj10);
      const obj11 = { style: null, maxWidth: null, primaryButton: null, secondaryButton: null };
      obj11[0] = tmp3.primaryButtons;
      obj11[1] = tmp4;
      let tmp37Result;
      if (null != application) {
        if (tmp7Result1.canInstallApplication(application)) {
          const obj12 = { application: null, botUserId: null, channel: null, guildId: null };
          obj12[0] = application;
          obj12[1] = user.id;
          obj12[2] = channel;
          obj12[3] = guild_id;
          tmp37Result = tmp37(tmp(tmp2[34]), obj12);
          const tmp29 = channel;
          const tmp30 = guild_id;
          const tmpResult2 = tmp(tmp2[34]);
        }
        tmp7Result1 = tmp7(tmp2[33]);
      }
      obj11[2] = tmp37Result;
      const obj13 = { icon: null, text: null, variant: "secondary", disabled: null, grow: true, accessibilityHint: null, onPress: null };
      const obj14 = { size: "sm", color: null };
      obj14[1] = tmp(tmp2[37]).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      obj13[0] = callback(tmp7(tmp2[36]).ChatIcon, obj14);
      const intl2 = tmp7(tmp2[30]).intl;
      obj13[1] = intl2.string(tmp7(tmp2[30]).t.zROXEV);
      obj13[3] = disableMessage;
      const intl3 = tmp7(tmp2[30]).intl;
      const obj15 = { name: null };
      const tmpResult1 = tmp(tmp2[32]);
      obj15[0] = tmp(tmp2[13]).getName(user);
      obj13[5] = intl3.formatToPlainString(tmp7(tmp2[30]).t.zFfSFQ, obj15);
      obj13[6] = function onPress() {
        trackUserProfileAction({ action: "SEND_MESSAGE" });
        let obj = channel(trackUserProfileAction[26]);
        obj.hideActionSheet();
        channel(trackUserProfileAction[38]).popAll();
        const obj2 = channel(trackUserProfileAction[38]);
        obj = { recipientIds: user.id };
        channel(trackUserProfileAction[39]).openPrivateChannel(obj);
      };
      obj11[3] = callback(tmp7(tmp2[35]).Button, obj13);
      items7[2] = callback(tmpResult1, obj11);
      obj8[1] = items7;
      items6[1] = closure_10(guild_id, obj8);
      let tmp35Result = null;
      if (null != stateFromStores) {
        const items8 = [tmp3.card, ];
        const obj16 = { backgroundColor: null };
        obj16[0] = containerBackground;
        items8[1] = obj16;
        const obj17 = { style: null, children: null };
        obj17[0] = tmp3.cards;
        const obj18 = { user: null, currentUser: null, guildId: null, style: null };
        obj18[0] = user;
        obj18[1] = stateFromStores;
        obj18[2] = guild_id;
        obj18[3] = items8;
        const items9 = [tmp37(tmp(tmp2[40]), obj18), , , ];
        const obj19 = { userId: null, displayProfile: null, channel: null, style: null };
        obj19[0] = user.id;
        obj19[1] = displayProfile;
        obj19[2] = channel;
        obj19[3] = items8;
        items9[1] = tmp37(tmp(tmp2[41]), obj19);
        tmp35Result = null != guild_id;
        if (tmp35Result) {
          const obj20 = { userId: null, guildId: null, style: null };
          obj20[0] = user.id;
          obj20[1] = guild_id;
          obj20[2] = items8;
          const items10 = [tmp37(tmp(tmp2[42]), obj20), ];
          const obj21 = { user: null, currentUser: null, guildId: null, channelId: null, showUserProfile: null, style: null };
          obj21[0] = user;
          obj21[1] = stateFromStores;
          obj21[2] = guild_id;
          let id1;
          if (channel != null) {
            id1 = channel.id;
          }
          const obj22 = { children: null };
          obj21[3] = id1;
          obj21[4] = showUserProfileActionSheet;
          obj21[5] = items8;
          items10[1] = tmp37(tmp(tmp2[43]), obj21);
          obj22[0] = items10;
          tmp35Result = tmp35(tmp36, obj22);
          const tmpResult4 = tmp(tmp2[43]);
        }
        items9[2] = tmp35Result;
        const obj23 = { userId: null, style: null, onBack: null };
        obj23[0] = user.id;
        obj23[1] = items8;
        obj23[2] = showUserProfileActionSheet;
        items9[3] = tmp37(tmp(tmp2[44]), obj23);
        obj17[1] = items9;
        tmp35Result = tmp35(tmp22, obj17);
      }
      const obj24 = { children: null };
      items6[2] = tmp35Result;
      obj5[1] = items6;
      items4[1] = closure_10(guild_id, obj5);
      obj2[1] = items4;
      items2[2] = closure_10(tmp(tmp2[22]).View, obj2);
      obj24[0] = items2;
      return closure_10(closure_11, obj24);
    }
  }
  return null;
});
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_profile/native/BotUserProfileContent.tsx");

export default memoResult;