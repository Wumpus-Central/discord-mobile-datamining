// discord_app/modules/user_profile/native/BotUserProfileContent.tsx
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(7455);
({ PROFILE_CONTENT_BOTTOM_PADDING: metroRequire, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_7 } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(7398).ACTION_SHEET_MAX_WIDTH;
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
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(
    trackUserProfileAction[8],
  )({ scrollPosition, bannerHeight: tmp5 }));
  const tmp6 = channel(trackUserProfileAction[8])({ scrollPosition, bannerHeight: tmp5 });
  trackUserProfileAction = user(trackUserProfileAction[10]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(trackUserProfileAction[10]);
  let items = [UserStore];
  const stateFromStores = user(trackUserProfileAction[11]).useStateFromStores(items, () =>
    currentUser.getCurrentUser(),
  );
  let obj2 = user(trackUserProfileAction[11]);
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = channel(trackUserProfileAction[12]).useName(guildId, id, user);
  const obj3 = channel(trackUserProfileAction[12]);
  noop = channel(trackUserProfileAction[13]).useUserTag(user);
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
  const tmpResult = channel(trackUserProfileAction[13]);
  const subscribeGuildMembers = user(trackUserProfileAction[14]).useSubscribeGuildMembers(
    memo,
    "BotUserProfileContent",
  );
  const tmp7Result = user(trackUserProfileAction[14]);
  const tmp16 = channel(trackUserProfileAction[16])(user.id);
  const tmp15 = channel(trackUserProfileAction[15])(displayProfile);
  ({ primaryColor, theme, secondaryColor } = channel(trackUserProfileAction[17])({ user, displayProfile }));
  const tmp17 = channel(trackUserProfileAction[17])({ user, displayProfile });
  const userProfileColors = user(trackUserProfileAction[18]).useUserProfileColors({
    theme,
    primaryColor,
    secondaryColor,
  });
  const containerBackground = userProfileColors.containerBackground;
  if (null != user) {
    if (null != stateFromStores) {
      const obj4 = {
        user,
        displayProfile,
        bannerHeight: tmp5,
        bannerAnimatedStyle,
        bannerImageAnimatedStyle,
        blurAnimatedProps,
        showBlur,
      };
      const items2 = [closure_9(tmp(tmp2[21]), obj4), ,];
      const obj5 = { style: null, children: null };
      const items3 = [tmp3.bannerButtons, bannerAnimatedStyle];
      obj5.style = items3;
      const obj6 = { user, application, channel };
      obj5.children = closure_9(tmp(tmp2[23]), obj6);
      items2[1] = closure_9(tmp(tmp2[22]).View, obj5);
      const obj7 = { style: contentAnimatedStyle, children: null };
      const obj8 = { user, guildId: null, backgroundColor: null, statusStyle: null };
      let guildId1;
      if (displayProfile != null) {
        guildId1 = displayProfile.guildId;
      }
      obj8.guildId = guildId1;
      obj8.backgroundColor = tmp19;
      const obj9 = { backgroundColor: tmp20 };
      obj8.statusStyle = obj9;
      const items4 = [closure_9(tmp7(tmp2[24]).OpenableUserProfileAvatar, obj8)];
      const items5 = [, ,];
      ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
      let num = 0;
      if (null == tmp16) {
        num = closure_7;
      }
      const obj11 = { style: null, children: null };
      const obj12 = { paddingTop: num, paddingBottom: channel(trackUserProfileAction[9])().bottom + closure_6 };
      items5[2] = obj12;
      obj11.style = items5;
      const obj13 = {
        customStatusActivity: tmp16,
        hasCustomProfileTheme: null != primaryColor,
        onPressTruncatedStatus() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { user, guildId: guild_id, channelId: null };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj2.channelId = id;
          obj.openLazy(
            asyncRequireImpl(11420, dependencyMap.paths),
            "UserProfileCustomStatusActionSheet",
            obj2,
            "stack",
          );
        },
        style: null,
        emojiOnlyStyle: null,
      };
      ({ customStatusBubble: obj10.style, emojiOnlyCustomStatusBubble: obj10.emojiOnlyStyle } = tmp3);
      const items6 = [closure_9(tmp(tmp2[25]), obj13), ,];
      const obj14 = { style: tmp3.primaryInfo, children: null };
      const obj15 = {
        user,
        guildId: guild_id,
        displayName: name,
        pronouns: null,
        badges: null,
        badgeContainerBackground: null,
        displayNameAccessibilityHint: null,
        onPressDisplayName: null,
        onPressUserTag: null,
        onPressPronouns: null,
        showBadgeToastOnPress: true,
      };
      let pronouns;
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      function handleCopyUsername() {
        trackUserProfileAction({ action: "COPY_USERNAME" });
        ClipboardUtils.copy(closure_3);
        const result = ToastUtils.presentUsernameCopied();
      }
      obj15.pronouns = pronouns;
      obj15.badges = tmp15;
      obj15.badgeContainerBackground = containerBackground;
      function handlePressPronouns() {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        ToastUtils.presentUserPronouns();
      }
      const intl = tmp7(tmp2[30]).intl;
      obj15.displayNameAccessibilityHint = intl.string(tmp7(tmp2[30]).t.y5MwJy);
      obj15.onPressDisplayName = handleCopyUsername;
      obj15.onPressUserTag = handleCopyUsername;
      obj15.onPressPronouns = handlePressPronouns;
      const items7 = [closure_9(tmp(tmp2[29]), obj15), ,];
      const obj16 = { user };
      items7[1] = closure_9(tmp(tmp2[31]), obj16);
      const obj17 = {
        style: tmp3.primaryButtons,
        maxWidth: ACTION_SHEET_MAX_WIDTH,
        primaryButton: null,
        secondaryButton: null,
      };
      let tmp37Result;
      const tmpResult6 = tmp(tmp2[29]);
      if (null != application) {
        if (tmp7Result4.canInstallApplication(application)) {
          const obj18 = { application, botUserId: user.id, channel, guildId: guild_id };
          tmp37Result = closure_9(tmp(tmp2[34]), obj18);
          const tmpResult8 = tmp(tmp2[34]);
        }
        tmp7Result4 = tmp7(tmp2[33]);
      }
      obj17.primaryButton = tmp37Result;
      const obj19 = {
        icon: null,
        text: null,
        variant: "secondary",
        disabled: null,
        grow: true,
        accessibilityHint: null,
        onPress: null,
      };
      const obj20 = { size: "sm", color: tmp(tmp2[37]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      obj19.icon = closure_9(tmp7(tmp2[36]).ChatIcon, obj20);
      const intl2 = tmp7(tmp2[30]).intl;
      obj19.text = intl2.string(tmp7(tmp2[30]).t.zROXEV);
      obj19.disabled = disableMessage;
      const intl3 = tmp7(tmp2[30]).intl;
      const obj21 = { name: null };
      const tmpResult7 = tmp(tmp2[32]);
      obj21.name = tmp(tmp2[13]).getName(user);
      obj19.accessibilityHint = intl3.formatToPlainString(tmp7(tmp2[30]).t.zFfSFQ, obj21);
      obj19.onPress = function onPress() {
        trackUserProfileAction({ action: "SEND_MESSAGE" });
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        ModalActionCreatorsDefault.popAll();
        ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
      };
      obj17.secondaryButton = closure_9(tmp7(tmp2[35]).Button, obj19);
      items7[2] = closure_9(tmpResult7, obj17);
      obj14.children = items7;
      items6[1] = closure_10(guild_id, obj14);
      let tmp35Result2 = null;
      if (null != stateFromStores) {
        const items8 = [tmp3.card];
        const obj22 = { backgroundColor: containerBackground };
        items8[1] = obj22;
        const obj23 = { style: tmp3.cards, children: null };
        const obj24 = { user, currentUser: stateFromStores, guildId: guild_id, style: items8 };
        const items9 = [closure_9(tmp(tmp2[40]), obj24), , ,];
        const obj25 = { userId: user.id, displayProfile, channel, style: items8 };
        items9[1] = closure_9(tmp(tmp2[41]), obj25);
        let tmp35Result = null != guild_id;
        if (tmp35Result) {
          const obj26 = { userId: user.id, guildId: guild_id, style: items8 };
          const items10 = [closure_9(tmp(tmp2[42]), obj26)];
          const obj27 = {
            user,
            currentUser: stateFromStores,
            guildId: guild_id,
            channelId: null,
            showUserProfile: null,
            style: null,
          };
          let id1;
          if (channel != null) {
            id1 = channel.id;
          }
          const obj28 = { children: null };
          obj27.channelId = id1;
          obj27.showUserProfile = showUserProfileActionSheet;
          obj27.style = items8;
          items10[1] = closure_9(tmp(tmp2[43]), obj27);
          obj28.children = items10;
          tmp35Result = closure_10(closure_11, obj28);
          const tmpResult10 = tmp(tmp2[43]);
        }
        items9[2] = tmp35Result;
        const obj29 = { userId: user.id, onBack: showUserProfileActionSheet };
        items9[3] = closure_9(tmp(tmp2[44]), obj29);
        obj23.children = items9;
        tmp35Result2 = closure_10(tmp22, obj23);
      }
      const obj30 = { children: null };
      items6[2] = tmp35Result2;
      obj11.children = items6;
      items4[1] = closure_10(guild_id, obj11);
      obj7.children = items4;
      items2[2] = closure_10(tmp(tmp2[22]).View, obj7);
      obj30.children = items2;
      return closure_10(closure_11, obj30);
    }
  }
  return null;
});
