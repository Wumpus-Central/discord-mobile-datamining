// === Module 15671: BotUserProfileContent ===

// Module 15671 (BotUserProfileContent)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import ToastUtils from "ToastUtils" /* 6014 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import ClipboardUtils from "ClipboardUtils" /* 7943 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8134 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
const View = fn(17).View;
const Constants = fn(7962);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_6, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: metroImportDefault } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(5567).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/BotUserProfileContent.tsx");

export default noop.memo(function BotUserProfileContent(user) {
  user = user.user;
  const channel = user.channel;
  ({ displayProfile, showUserProfileActionSheet, navigationReplace: dependencyMap } = user);
  closure_4 = undefined;
  let guild_id;
  ({ disableMessage, scrollPosition } = user);
  const tmp3 = channel(8607)();
  const tmp5 = channel(8593)(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(8609)({ scrollPosition, bannerHeight: tmp5 }));
  const tmp6 = channel(8609)({ scrollPosition, bannerHeight: tmp5 });
  const trackUserProfileAction = user(8545).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(8545);
  items = [guild_id];
  const stateFromStores = user(504).useStateFromStores(items, () => guild_id.getCurrentUser());
  let obj2 = user(504);
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = channel(6351).useName(guildId, id, user);
  const obj3 = channel(6351);
  closure_4 = channel(5372).useUserTag(user);
  let application;
  if (displayProfile != null) {
    application = displayProfile.application;
  }
  channel(15672)(user, "BotUserProfileContent");
  let result = tmp(13465)(application);
  const tmp16 = channel;
  const tmpResult = channel(5372);
  guild_id = undefined;
  const tmpResult7 = channel(13479);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const items1 = [guild_id, user];
  const memo = trackUserProfileAction.useMemo(() => {
    if (null != guild_id) {
      if (null != user) {
        const obj = {};
        items = [tmp2.id];
        obj[tmp] = items;
      }
      return {};
    }
  }, items1);
  const tmpResult1Result = channel(13479)(tmp16);
  const subscribeGuildMembers = user(14150).useSubscribeGuildMembers(memo, "BotUserProfileContent");
  const tmp7Result = user(14150);
  const tmp22 = channel(15466)(user.id);
  const tmp21 = channel(8608)(displayProfile);
  ({ primaryColor, theme, secondaryColor } = channel(8590)({ user, displayProfile }));
  const tmp23 = channel(8590)({ user, displayProfile });
  const userProfileColors = user(8601).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null != user) {
    if (null != stateFromStores) {
      const obj4 = { user, displayProfile, bannerHeight: tmp5, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      const items2 = [closure_9(tmp(8610), obj4), , ];
      const obj5 = { style: null, children: null };
      const items3 = [tmp3.bannerButtons, bannerAnimatedStyle];
      obj5.style = items3;
      const obj6 = { user, currentUser: stateFromStores, application, displayProfile, channel };
      obj5.children = closure_9(tmp(15673), obj6);
      items2[1] = closure_9(tmp(1655).View, obj5);
      const obj7 = { style: contentAnimatedStyle, children: null };
      const obj8 = { user, guildId: null, backgroundColor: null, statusStyle: null };
      let guildId1;
      if (displayProfile != null) {
        guildId1 = displayProfile.guildId;
      }
      obj8.guildId = guildId1;
      obj8.backgroundColor = tmp25;
      const obj9 = { backgroundColor: tmp26 };
      obj8.statusStyle = obj9;
      const items4 = [closure_9(tmp7(8622).OpenableUserProfileAvatar, obj8), ];
      const items5 = [, , ];
      ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
      let num = 0;
      if (null == tmp22) {
        num = closure_7;
      }
      const obj11 = { style: null, children: null };
      const obj12 = { paddingTop: num, paddingBottom: channel(1630)().bottom + closure_6 };
      items5[2] = obj12;
      obj11.style = items5;
      const obj13 = {
        customStatusActivity: tmp22,
        hasCustomProfileTheme: null != primaryColor,
        onPressTruncatedStatus: function handlePressTruncatedStatus() {
              const obj = ActionSheetActionCreatorsDefault;
              const obj2 = { user, guildId: guild_id, channelId: null };
              let id;
              if (channel != null) {
                id = channel.id;
              }
              obj2.channelId = id;
              obj.openLazy(asyncRequireImpl(15465, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj2, "stack");
            },
        style: null,
        emojiOnlyStyle: null
      };
      ({ customStatusBubble: obj10.style, emojiOnlyCustomStatusBubble: obj10.emojiOnlyStyle } = tmp3);
      const items6 = [closure_9(tmp(9531), obj13), , ];
      const obj14 = { style: tmp3.primaryInfo, children: null };
      const obj15 = { user, guildId: guild_id, displayName: name, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityHint: null, onPressDisplayName: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: true };
      let pronouns;
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      function handleCopyUsername() {
        trackUserProfileAction({ action: "COPY_USERNAME" });
        ClipboardUtils.copy(closure_4);
        const result = ToastUtils.presentUsernameCopied();
      }
      obj15.pronouns = pronouns;
      obj15.badges = tmp21;
      obj15.badgeContainerBackground = containerBackground;
      function handlePressPronouns() {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        ToastUtils.presentUserPronouns();
      }
      const intl = tmp7(1113).intl;
      obj15.displayNameAccessibilityHint = intl.string(tmp7(1113).t.y5MwJy);
      obj15.onPressDisplayName = handleCopyUsername;
      obj15.onPressUserTag = handleCopyUsername;
      obj15.onPressPronouns = handlePressPronouns;
      const items7 = [closure_9(tmp(15467), obj15), , ];
      const obj16 = { user };
      items7[1] = closure_9(tmp(15699), obj16);
      const obj17 = { style: tmp3.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: null, secondaryButton: null };
      let tmp43Result;
      const tmpResult8 = tmp(15467);
      if (null != application) {
        if (tmpResult1Result) {
          result = tmp7(12701).hasInstallConfiguration(application);
          const tmp7Result4 = tmp7(12701);
        }
        if (result) {
          const obj18 = { application, botUserId: user.id, channel, guildId: guild_id };
          tmp43Result = closure_9(tmp(15703), obj18);
          const tmpResult10 = tmp(15703);
        }
      }
      obj17.primaryButton = tmp43Result;
      const obj19 = { icon: null, text: null, variant: "secondary", disabled: null, grow: true, accessibilityHint: null, onPress: null };
      const obj20 = { size: "sm", color: tmp(575).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      obj19.icon = closure_9(tmp7(8069).ChatIcon, obj20);
      const intl2 = tmp7(1113).intl;
      obj19.text = intl2.string(tmp7(1113).t.zROXEV);
      obj19.disabled = disableMessage;
      const intl3 = tmp7(1113).intl;
      const obj21 = { name: null };
      const tmpResult9 = tmp(15702);
      obj21.name = tmp(5372).getName(user);
      obj19.accessibilityHint = intl3.formatToPlainString(tmp7(1113).t.zFfSFQ, obj21);
      obj19.onPress = function onPress() {
        trackUserProfileAction({ action: "SEND_MESSAGE" });
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        ModalActionCreatorsDefault.popAll();
        ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id, navigationReplace });
      };
      obj17.secondaryButton = closure_9(tmp7(5936).Button, obj19);
      items7[2] = closure_9(tmpResult9, obj17);
      obj14.children = items7;
      items6[1] = closure_10(closure_4, obj14);
      let tmp41Result2 = null;
      if (null != stateFromStores) {
        const items8 = [tmp3.card, ];
        const obj22 = { backgroundColor: containerBackground };
        items8[1] = obj22;
        const obj23 = { style: tmp3.cards, children: null };
        const obj24 = { user, currentUser: stateFromStores, guildId: guild_id, style: items8 };
        const items9 = [closure_9(tmp(15704), obj24), , , ];
        const obj25 = { userId: user.id, displayProfile, channel, style: items8 };
        items9[1] = closure_9(tmp(15478), obj25);
        let tmp41Result = null != guild_id;
        if (tmp41Result) {
          const obj26 = { userId: user.id, guildId: guild_id, style: items8 };
          const items10 = [closure_9(tmp(7940), obj26), ];
          const obj27 = { user, currentUser: stateFromStores, guildId: guild_id, channelId: null, showUserProfile: null, style: null };
          let id1;
          if (channel != null) {
            id1 = channel.id;
          }
          const obj28 = { children: null };
          obj27.channelId = id1;
          obj27.showUserProfile = showUserProfileActionSheet;
          obj27.style = items8;
          items10[1] = closure_9(tmp(15769), obj27);
          obj28.children = items10;
          tmp41Result = closure_10(closure_11, obj28);
          const tmpResult12 = tmp(15769);
        }
        items9[2] = tmp41Result;
        const obj29 = { userId: user.id, onBack: showUserProfileActionSheet };
        items9[3] = closure_9(tmp(15772), obj29);
        obj23.children = items9;
        tmp41Result2 = closure_10(tmp28, obj23);
      }
      const obj30 = { children: null };
      items6[2] = tmp41Result2;
      obj11.children = items6;
      items4[1] = closure_10(closure_4, obj11);
      obj7.children = items4;
      items2[2] = closure_10(tmp(1655).View, obj7);
      obj30.children = items2;
      return closure_10(closure_11, obj30);
    }
  }
  return null;
});