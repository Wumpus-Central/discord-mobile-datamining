// === Module 12987: BotUserProfileContent ===

// Module 12987 (BotUserProfileContent)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const Constants = fn(7208);
({ PROFILE_CONTENT_BOTTOM_PADDING: metroRequire, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_7 } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/BotUserProfileContent.tsx");

export default noop.memo(function BotUserProfileContent(user) {
  user = user.user;
  const channel = user.channel;
  ({ displayProfile, showUserProfileActionSheet } = user);
  let trackUserProfileAction;
  noop = undefined;
  let guild_id;
  ({ disableMessage, scrollPosition } = user);
  const tmp3 = channel(trackUserProfileAction[6])();
  const tmp5 = channel(trackUserProfileAction[7])(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(trackUserProfileAction[8])({ scrollPosition, bannerHeight: tmp5 }));
  let obj = user(trackUserProfileAction[10]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = user(trackUserProfileAction[11]);
  let items = [UserStore];
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
  noop = tmpResult.useUserTag(user);
  if (displayProfile != null) {
    const application = displayProfile.application;
  }
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const items1 = [guild_id, user];
  const memo = noop.useMemo(() => {
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
      obj = { user, displayProfile, bannerHeight: tmp5, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      const items2 = [closure_9(tmp(tmp2[21]), obj), , ];
      obj = { style: null, children: null };
      const items3 = [tmp3.bannerButtons, bannerAnimatedStyle];
      obj.style = items3;
      obj1 = { user, application, channel };
      obj.children = closure_9(tmp(tmp2[23]), obj1);
      items2[1] = closure_9(tmp(tmp2[22]).View, obj);
      obj2 = { style: contentAnimatedStyle, children: null };
      const obj3 = { user, guildId: null, backgroundColor: null, statusStyle: null };
      let guildId1;
      if (displayProfile != null) {
        guildId1 = displayProfile.guildId;
      }
      obj3.guildId = guildId1;
      obj3.backgroundColor = tmp19;
      const obj4 = { backgroundColor: tmp20 };
      obj3.statusStyle = obj4;
      const items4 = [closure_9(tmp7(tmp2[24]).OpenableUserProfileAvatar, obj3), ];
      const items5 = [, , ];
      ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
      let num = 0;
      if (null == tmp16) {
        num = closure_7;
      }
      const obj5 = { style: null, children: null };
      const obj6 = { paddingTop: num, paddingBottom: channel(trackUserProfileAction[9])().bottom + closure_6 };
      items5[2] = obj6;
      obj5.style = items5;
      const obj7 = {
        customStatusActivity: tmp16,
        hasCustomProfileTheme: null != primaryColor,
        onPressTruncatedStatus() {
              const obj = { user, guildId: guild_id, channelId: null };
              let id;
              if (channel != null) {
                id = channel.id;
              }
              obj.channelId = id;
              obj.openLazy(asyncRequireImpl(11149, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj, "stack");
            },
        style: null,
        emojiOnlyStyle: null
      };
      ({ customStatusBubble: obj10.style, emojiOnlyCustomStatusBubble: obj10.emojiOnlyStyle } = tmp3);
      const items6 = [closure_9(tmp(tmp2[25]), obj7), , ];
      const obj8 = { style: tmp3.primaryInfo, children: null };
      const obj9 = { user, guildId: guild_id, displayName: name, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityHint: null, onPressDisplayName: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: true };
      let pronouns;
      tmpResult = tmp(tmp2[29]);
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      function handleCopyUsername() {
        trackUserProfileAction({ action: "COPY_USERNAME" });
        ClipboardUtils.copy(closure_3);
        const result = ToastUtils.presentUsernameCopied();
      }
      obj9.pronouns = pronouns;
      obj9.badges = tmp15;
      obj9.badgeContainerBackground = containerBackground;
      function handlePressPronouns() {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        ToastUtils.presentUserPronouns();
      }
      const intl = tmp7(tmp2[30]).intl;
      obj9.displayNameAccessibilityHint = intl.string(tmp7(tmp2[30]).t.y5MwJy);
      obj9.onPressDisplayName = handleCopyUsername;
      obj9.onPressUserTag = handleCopyUsername;
      obj9.onPressPronouns = handlePressPronouns;
      const items7 = [closure_9(tmpResult, obj9), , ];
      const obj10 = { user };
      items7[1] = closure_9(tmp(tmp2[31]), obj10);
      const obj11 = { style: tmp3.primaryButtons, maxWidth: tmp4, primaryButton: null, secondaryButton: null };
      let tmp37Result;
      if (null != application) {
        if (tmp7Result1.canInstallApplication(application)) {
          const obj12 = { application, botUserId: user.id, channel, guildId: guild_id };
          tmp37Result = tmp37(tmp(tmp2[34]), obj12);
          const tmpResult2 = tmp(tmp2[34]);
        }
        tmp7Result1 = tmp7(tmp2[33]);
      }
      obj11.primaryButton = tmp37Result;
      const obj13 = { icon: null, text: null, variant: "secondary", disabled: null, grow: true, accessibilityHint: null, onPress: null };
      const obj14 = { size: "sm", color: tmp(tmp2[37]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      obj13.icon = closure_9(tmp7(tmp2[36]).ChatIcon, obj14);
      const intl2 = tmp7(tmp2[30]).intl;
      obj13.text = intl2.string(tmp7(tmp2[30]).t.zROXEV);
      obj13.disabled = disableMessage;
      const intl3 = tmp7(tmp2[30]).intl;
      const obj15 = { name: null };
      const tmpResult1 = tmp(tmp2[32]);
      obj15.name = tmp(tmp2[13]).getName(user);
      obj13.accessibilityHint = intl3.formatToPlainString(tmp7(tmp2[30]).t.zFfSFQ, obj15);
      obj13.onPress = function onPress() {
        trackUserProfileAction({ action: "SEND_MESSAGE" });
        let obj = ActionSheetActionCreatorsDefault;
        obj.hideAllActionSheets();
        ModalActionCreatorsDefault.popAll();
        obj = { recipientIds: user.id };
        ChannelActionCreatorsDefault.openPrivateChannel(obj);
      };
      obj11.secondaryButton = closure_9(tmp7(tmp2[35]).Button, obj13);
      items7[2] = closure_9(tmpResult1, obj11);
      obj8.children = items7;
      items6[1] = closure_10(guild_id, obj8);
      let tmp35Result = null;
      if (null != stateFromStores) {
        const items8 = [tmp3.card, ];
        const obj16 = { backgroundColor: containerBackground };
        items8[1] = obj16;
        const obj17 = { style: tmp3.cards, children: null };
        const obj18 = { user, currentUser: stateFromStores, guildId: guild_id, style: items8 };
        const items9 = [tmp37(tmp(tmp2[40]), obj18), , , ];
        const obj19 = { userId: user.id, displayProfile, channel, style: items8 };
        items9[1] = tmp37(tmp(tmp2[41]), obj19);
        tmp35Result = null != guild_id;
        if (tmp35Result) {
          const obj20 = { userId: user.id, guildId: guild_id, style: items8 };
          const items10 = [tmp37(tmp(tmp2[42]), obj20), ];
          const obj21 = { user, currentUser: stateFromStores, guildId: guild_id, channelId: null, showUserProfile: null, style: null };
          let id1;
          if (channel != null) {
            id1 = channel.id;
          }
          const obj22 = { children: null };
          obj21.channelId = id1;
          obj21.showUserProfile = showUserProfileActionSheet;
          obj21.style = items8;
          items10[1] = tmp37(tmp(tmp2[43]), obj21);
          obj22.children = items10;
          tmp35Result = tmp35(tmp36, obj22);
          const tmpResult4 = tmp(tmp2[43]);
        }
        items9[2] = tmp35Result;
        const obj23 = { userId: user.id, style: items8, onBack: showUserProfileActionSheet };
        items9[3] = tmp37(tmp(tmp2[44]), obj23);
        obj17.children = items9;
        tmp35Result = tmp35(tmp22, obj17);
      }
      const obj24 = { children: null };
      items6[2] = tmp35Result;
      obj5.children = items6;
      items4[1] = closure_10(guild_id, obj5);
      obj2.children = items4;
      items2[2] = closure_10(tmp(tmp2[22]).View, obj2);
      obj24.children = items2;
      return closure_10(closure_11, obj24);
    }
  }
  return null;
});