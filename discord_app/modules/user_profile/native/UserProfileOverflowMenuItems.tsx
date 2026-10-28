// discord_app/modules/user_profile/native/UserProfileOverflowMenuItems.tsx
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01999_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import Sheet_showSimpleActionSheet from "../../../design/components/Sheet/native/showSimpleActionSheet.native.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import SafetyToastsActionCreatorsDefault from "../../safety_common/SafetyToastsActionCreators.native.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import BotReportChooser from "../../in_app_reports/native/BotReportChooser.tsx";
import Constants from "../../../Constants.tsx";
import RestrictionConfirmationConstants from "../../relationships/native/RestrictionConfirmationConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ AnalyticEvents: c3, AVATAR_MAX_SIZE: closure_4, NOOP: hasOwnProperty } = Constants);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: metroRequire, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_7 } =
  RestrictionConfirmationConstants);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenuItems.tsx");

export const getIgnoreMenuItem = function getIgnoreMenuItem(arg0, isBlocked) {
  ({
    user: require,
    channelId: importDefault,
    location: dependencyMap,
    analyticsLocations: closure_3,
    trackUserProfileAction: closure_4,
    showUserProfile: closure_5,
  } = arg0);
  if (isBlocked.isBlocked) {
    return null;
  } else {
    let obj = { label: null, action: null };
    const intl = util.intl;
    const string = intl.string;
    let t = util.t;
    if (tmp) {
      t = string(t["8wXU9B"]);
      obj.label = t;
      obj.action = function action() {
        closure_1_4({ action: "UNIGNORE", analyticsLocations });
        RelationshipActionCreatorsDefault.unignoreUser(user.id, dependencyMap, channelId);
        onSuccess();
      };
    } else {
      obj.label = string(t.ytCpKs);
      obj.action = function action() {
        const obj = ActionSheetActionCreatorsDefault;
        const tmp = asyncRequireImpl(11000, dependencyMap.paths);
        obj.openLazy(
          tmp,
          React5,
          {
            userId: user.id,
            channelId,
            onBlock() {
              return closure_1_4({ action: "BLOCK", analyticsLocations });
            },
            onIgnore() {
              return closure_1_4({ action: "IGNORE", analyticsLocations });
            },
            onSuccess,
            impressionName: discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION,
          },
          "stack",
        );
      };
    }
  }
};
export const getBlockMenuItem = function getBlockMenuItem(arg0, isBlocked) {
  ({
    user: require,
    channelId: importDefault,
    location: dependencyMap,
    analyticsLocations: closure_3,
    trackUserProfileAction: closure_4,
    showUserProfile: closure_5,
  } = arg0);
  if (isBlocked.isBlocked) {
    let obj2 = { label: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.XyHpKH);
    obj2.action = function action() {
      closure_1_4({ action: "UNBLOCK", analyticsLocations });
      RelationshipActionCreatorsDefault.unblockUser(user.id, { location: _location }, channelId);
      onSuccess();
      const obj = { action: "UNBLOCK", analyticsLocations };
      const obj3 = { location: _location };
      const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(user.id, channelId);
    };
    let obj = obj2;
  } else {
    obj = { label: null, variant: "destructive", action: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.l4Emac);
    obj.action = function action() {
      const obj = ActionSheetActionCreatorsDefault;
      const tmp = asyncRequireImpl(10999, dependencyMap.paths);
      obj.openLazy(
        tmp,
        timestampProducer,
        {
          userId: user.id,
          channelId,
          onBlock() {
            return closure_1_4({ action: "BLOCK", analyticsLocations });
          },
          onIgnore() {
            return closure_1_4({ action: "IGNORE", analyticsLocations });
          },
          onSuccess,
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION,
        },
        "stack",
      );
    };
  }
  return obj;
};
export const getReportMenuItem = function getReportMenuItem(user, isInIarUserReportingExperiment) {
  user = user.user;
  ({ channelId: importDefault, analyticsLocations: dependencyMap, trackUserProfileAction: closure_3 } = user);
  ({ guildId: closure_4, reportEntrypoint: closure_5 } = isInIarUserReportingExperiment);
  if (isInIarUserReportingExperiment.isInIarUserReportingExperiment) {
    const intl2 = tmp(1125).intl;
    tmp(1125).t;
    const t = { label: null, variant: "destructive", action: null };
    t.label = intl2.string(user.bot ? t.jhJzez : t.A1MM3D);
    t.action = function action() {
      constants({ action: "REPORT", analyticsLocations });
      if (user.bot) {
        const obj4 = ActionSheetActionCreatorsDefault;
        const tmp18 = asyncRequireImpl(14519, dependencyMap.paths);
        const obj5 = { user, entrypoint, contextualGuildId, contextualChannelId };
        obj4.openLazy(tmp18, BotReportChooser.BOT_REPORT_CHOOSER_KEY, obj5, "replaceAll");
      } else {
        const result = ReportModals.showReportModalForUser(user, contextualGuildId);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
      const obj = { action: "REPORT", analyticsLocations };
    };
    const tmp4 = user.bot ? t.jhJzez : t.A1MM3D;
  } else {
    let tmp3 = null;
    if (tmpResult.isAndroid()) {
      let obj = { label: null, variant: "destructive", action: null };
      const intl = tmp(1125).intl;
      obj.label = intl.string(tmp(1125).t.TbHyMG);
      obj.action = function action() {
        closure_1_3({ action: "REPORT", analyticsLocations });
        UserProfileAlertUtils.alertUserReported();
        const obj = { action: "REPORT", analyticsLocations };
        AnalyticsUtilsDefault.track(constants.TNS_USER_REPORT_SUBMITTED, { reported_user_id: user.id });
      };
      tmp3 = obj;
    }
    return tmp3;
  }
};
export const getDeveloperCopyMenuItem = function getDeveloperCopyMenuItem(arg0, tidaWebformEnabled) {
  ({ user: require, analyticsLocations: importDefault, trackUserProfileAction: dependencyMap } = arg0);
  ({ avatarGuildId: closure_3, bannerUrl: closure_4 } = tidaWebformEnabled);
  let obj = { label: null, action: null };
  let intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (tidaWebformEnabled.tidaWebformEnabled) {
    obj.label = string(t.QvQeLv);
    obj.action = function action() {
      const items = [];
      let obj = { label: null, onPress: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.y5MwJy);
      obj.onPress = function onPress() {
        dependencyMap({ action: "COPY_USERNAME", analyticsLocations });
        const obj = { action: "COPY_USERNAME", analyticsLocations };
        const obj2 = ClipboardUtils;
        obj2.copy(analyticsLocations(5058).getUserTag(avatarURL, { decoration: "never", identifiable: "always" }));
        const obj3 = analyticsLocations(5058);
        const result = ToastUtils.presentUsernameCopied();
      };
      items.push(obj);
      let obj2 = { label: null, onPress: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t["/AXYnE"]);
      obj2.onPress = function onPress() {
        dependencyMap({ action: "COPY_USER_ID", analyticsLocations });
        ClipboardUtils.copy(avatarURL.id);
        const obj = { action: "COPY_USER_ID", analyticsLocations };
        ToastUtils.presentIdCopied();
      };
      items.push(obj2);
      let hasAvatarForGuildResult = null != closure_1_0.avatar;
      if (!hasAvatarForGuildResult) {
        hasAvatarForGuildResult = closure_1_0.hasAvatarForGuild(constants);
      }
      if (hasAvatarForGuildResult) {
        const obj4 = { label: null, onPress: null };
        const intl3 = util.intl;
        obj4.label = intl3.string(util.t.gERDvM);
        obj4.onPress = function onPress() {
          dependencyMap({ action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations });
          avatarURL = avatarURL.getAvatarURL(closure_1_3, closure_2_4, true);
          if (null != avatarURL) {
            ClipboardUtils.copy(avatarURL);
            ToastUtils.presentLinkCopied();
          }
          const obj = { action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations };
        };
        items.push(obj4);
      }
      if (null != closure_1_4) {
        const obj5 = { label: null, onPress: null };
        const intl4 = util.intl;
        obj5.label = intl4.string(util.t.hsNv0R);
        obj5.onPress = function onPress() {
          dependencyMap({ action: "COPY_BANNER_IMAGE_LINK", analyticsLocations });
          ClipboardUtils.copy(closure_1_4);
          const obj = { action: "COPY_BANNER_IMAGE_LINK", analyticsLocations };
          ToastUtils.presentLinkCopied();
        };
        items.push(obj5);
      }
      const obj6 = { options: items, key: "copy-info", header: null, stackingBehavior: "stack", hasIcons: false };
      const obj7 = { title: null };
      const intl5 = util.intl;
      obj7.title = intl5.string(util.t.QvQeLv);
      obj6.header = obj7;
      let result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj6);
      const tmpResult = Sheet_showSimpleActionSheet;
    };
    let tmp = obj;
  } else {
    obj.label = string(t["/AXYnE"]);
    obj.action = function action() {
      dependencyMap({ action: "COPY_USER_ID", analyticsLocations });
      ClipboardUtils.copy(closure_1_0.id);
      const obj = { action: "COPY_USER_ID", analyticsLocations };
      ToastUtils.presentIdCopied();
    };
    tmp = obj;
  }
  return tmp;
};
