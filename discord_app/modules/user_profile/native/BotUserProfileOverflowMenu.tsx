// discord_app/modules/user_profile/native/BotUserProfileOverflowMenu.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import showUserProfileActionSheetDefault from "showUserProfileActionSheet.tsx";
import SafetyToastsActionCreatorsDefault from "../../safety_common/SafetyToastsActionCreators.native.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import getApplicationInstallURL from "../../applications/getApplicationInstallURL.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import BotReportChooser from "../../in_app_reports/native/BotReportChooser.tsx";
import openUserContextMenuCommandsDefault from "openUserContextMenuCommands.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({
  AnalyticEvents: closure_8,
  ApplicationFlags: closure_9,
  ChannelTypesSets: c10,
  RelationshipTypes: closure_11,
} = Constants);
const RestrictionConfirmationConstants = fn(11382);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_12, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: map1 } =
  RestrictionConfirmationConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/BotUserProfileOverflowMenu.tsx");

export default function BotUserProfileOverflowMenu(application) {
  application = application.application;
  const user = application.user;
  const channel = application.channel;
  let context;
  let trackUserProfileAction;
  let analyticsLocations;
  constants2 = undefined;
  let guildId;
  closure_12 = undefined;
  let installAppPropsFromProfileApplication;
  let obj = application(channel[8]);
  const items = [trackUserProfileAction];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    relationshipType: RelationshipStore.getRelationshipType(user.id),
    isIgnored: RelationshipStore.isIgnored(user.id),
  }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj1 = application(channel[8]);
  const items1 = [analyticsLocations, context];
  const stateFromStores = obj1.useStateFromStores(items1, () => context.getChannel(analyticsLocations.getChannelId()));
  let obj2 = application(channel[9]);
  let result = obj2.isIarUserReportingEnabled("User Profile Options - Mobile");
  let obj3 = application(channel[11]);
  const userProfileAnalyticsContext = obj3.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmp6 = user;
  const tmp7 = user(channel[10])();
  const tmp9Result = user(channel[12])(user(channel[13]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp9Result.analyticsLocations;
  const newestAnalyticsLocation = tmp9Result.newestAnalyticsLocation;
  newestAnalyticsLocation.getCurrentUser();
  const items2 = [user.id, , ,];
  let id;
  if (channel != null) {
    id = channel.id;
  }
  items2[1] = id;
  items2[2] = context;
  items2[3] = analyticsLocations;
  constants2 = stateFromStores.useCallback((showGuildProfile) => {
    const obj = {};
    const merged = Object.assign(context);
    obj.showGuildProfile = showGuildProfile;
    obj.userId = user.id;
    id = undefined;
    if (channel != null) {
      id = channel.id;
    }
    obj.channelId = id;
    obj.sourceAnalyticsLocations = analyticsLocations;
    obj.ignoreBlockedSpeedBump = true;
    showUserProfileActionSheetDefault(obj);
  }, items2);
  id = user.id;
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const items3 = [];
  if (isIgnored) {
    if (!tmp14) {
      obj = { label: null, action: null };
      let intl = tmp(tmp2[15]).intl;
      obj.label = intl.string(tmp(tmp2[15]).t["8wXU9B"]);
      obj.action = function action() {
        trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        RelationshipActionCreatorsDefault.unignoreUser(id, newestAnalyticsLocation, id);
        showUserProfile();
        const obj = { action: "UNIGNORE", analyticsLocations };
      };
      items3.push(obj);
    }
    if (tmp14) {
      obj = { label: null, action: null };
      const intl3 = tmp(tmp2[15]).intl;
      obj.label = intl3.string(tmp(tmp2[15]).t.XyHpKH);
      obj.action = function action() {
        let obj = { action: "UNBLOCK", analyticsLocations };
        trackUserProfileAction(obj);
        obj = { location: newestAnalyticsLocation };
        RelationshipActionCreatorsDefault.unblockUser(id, obj);
        const tmp2 = id;
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(tmp2, id);
        showUserProfile();
      };
      items3.push(obj);
    }
    if (!tmp14) {
      obj1 = { label: null, variant: "destructive", action: null };
      const intl4 = tmp(tmp2[15]).intl;
      obj1.label = intl4.string(tmp(tmp2[15]).t.l4Emac);
      obj1.action = function action() {
        let obj = { action: "BLOCK", analyticsLocations };
        trackUserProfileAction(obj);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj = { userId: id, channelId: null, onSuccess: null, impressionName: null };
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        obj.channelId = id;
        obj.onSuccess = function onSuccess() {
          showUserProfile();
        };
        obj.impressionName = discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION;
        obj2.openLazy(asyncRequireImpl(11383, dependencyMap.paths), closure_2_12, obj, "stack");
        const tmp4 = asyncRequireImpl(11383, dependencyMap.paths);
      };
      items3.push(obj1);
      if (result) {
        obj2 = { label: null, variant: "destructive", action: null };
        const intl6 = tmp(tmp2[15]).intl;
        obj2.label = intl6.string(tmp(tmp2[15]).t.jhJzez);
        obj2.action = function action() {
          let obj = { action: "REPORT", analyticsLocations };
          trackUserProfileAction(obj);
          let tmp3;
          if ("@me" !== guildId) {
            if (null !== guildId) {
              tmp3 = guildId;
            }
          }
          const obj2 = ActionSheetActionCreatorsDefault;
          obj = { user, entrypoint: "UserProfileOverflowMenu", contextualGuildId: tmp3, contextualChannelId: null };
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          obj.contextualChannelId = id;
          obj2.openLazy(
            asyncRequireImpl(12991, dependencyMap.paths),
            BotReportChooser.BOT_REPORT_CHOOSER_KEY,
            obj,
            "replaceAll",
          );
          const tmp5 = asyncRequireImpl(12991, dependencyMap.paths);
        };
        items3.push(obj2);
      } else {
        let tmpResult = tmp(tmp2[25]);
        if (tmpResult.isAndroid()) {
          obj3 = { label: null, variant: "destructive", action: null };
          const intl5 = tmp(tmp2[15]).intl;
          obj3.label = intl5.string(tmp(tmp2[15]).t.TbHyMG);
          obj3.action = function action() {
            let obj = { action: "REPORT", analyticsLocations };
            trackUserProfileAction(obj);
            UserProfileAlertUtils.alertUserReported();
            obj = { reported_user_id: id };
            AnalyticsUtilsDefault.track(constants.TNS_USER_REPORT_SUBMITTED, obj);
          };
          items3.push(obj3);
        }
      }
    }
    const items4 = [];
    const obj4 = { label: null, action: null };
    const intl7 = tmp(tmp2[15]).intl;
    obj4.label = intl7.string(tmp(tmp2[15]).t.y5MwJy);
    obj4.action = function action() {
      trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
      const obj = { action: "COPY_USERNAME", analyticsLocations };
      const obj2 = ClipboardUtils;
      obj2.copy(UserUtilsDefault.getUserTag(user, { decoration: "never", identifiable: "always" }));
      const result = ToastUtils.presentUsernameCopied();
      showUserProfile();
    };
    items4.push(obj4);
    if (null != application) {
      tmpResult = tmp(tmp2[31]);
      closure_12 = tmpResult.hasApplicationFlag(application, constants2.EMBEDDED);
      installAppPropsFromProfileApplication = tmp(tmp2[32]).getInstallAppPropsFromProfileApplication(application);
      let obj5 = { label: null, action: null };
      const intl10 = tmp(tmp2[15]).intl;
      obj5.label = intl10.string(tmp(tmp2[15]).t.WqhZss);
      obj5.action = function action() {
        let obj = { action: "COPY_APP_LINK", analyticsLocations };
        trackUserProfileAction(obj);
        const obj2 = getApplicationInstallURL;
        if (closure_12) {
          obj = { applicationId: application.id, referrerId: null };
          id = undefined;
          if (id != null) {
            id = id.id;
          }
          obj.referrerId = id;
          let activityLaunchURL = obj2.getActivityLaunchURL(obj);
        } else {
          obj = { id: application.id };
          const merged = Object.assign(closure_13);
          activityLaunchURL = obj2.getApplicationInstallURL(obj);
        }
        ClipboardUtils.copy(activityLaunchURL);
        ToastUtils.presentLinkCopied();
      };
      items4.push(obj5);
      const tmpResult1 = tmp(tmp2[32]);
    }
    const DeveloperMode = tmp(tmp2[34]).DeveloperMode;
    if (DeveloperMode.getSetting()) {
      let obj6 = { label: null, action: null };
      const intl8 = tmp(tmp2[15]).intl;
      obj6.label = intl8.string(tmp(tmp2[15]).t["/AXYnE"]);
      obj6.action = function action() {
        trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
        ClipboardUtils.copy(id);
        const obj = { action: "COPY_USER_ID", analyticsLocations };
        ToastUtils.presentIdCopied();
        showUserProfile();
      };
      items4.push(obj6);
    }
    let hasItem = null != channel && null != stateFromStores;
    if (hasItem) {
      const TEXTUAL = id.TEXTUAL;
      hasItem = TEXTUAL.has(stateFromStores.type);
    }
    if (hasItem) {
      const obj7 = { label: null, action: null };
      const intl9 = tmp(tmp2[15]).intl;
      obj7.label = intl9.string(tmp(tmp2[15]).t.PHjkRE);
      obj7.action = function action() {
        return openUserContextMenuCommandsDefault({
          userId: id,
          selectedChannel: stateFromStores,
          showUserProfile,
          analyticsLocations,
        });
      };
      items4.push(obj7);
    }
    if (0 !== items4.length) {
      const obj8 = { value: analyticsLocations, children: null };
      const obj9 = { style: tmp7, children: null };
      const obj10 = { items: null, children: null };
      const items5 = [items4, items3];
      obj10.items = items5;
      obj10.children = function children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        let obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = application(channel[15]).intl;
        obj.accessibilityLabel = intl.string(application(channel[15]).t["+zofAD"]);
        obj = { size: "sm", color: user(channel[40]).colors.WHITE };
        obj.icon = jsx(application(channel[39]).MoreHorizontalIcon, {
          size: "sm",
          color: user(channel[40]).colors.WHITE,
        });
        return jsx(application(channel[38]).IconButton, { size: "sm", color: user(channel[40]).colors.WHITE });
      };
      obj9.children = jsx(tmp(tmp2[37]).ContextMenu, { items: null, children: null });
      obj8.children = jsx(tmp6(tmp2[36]).View, { style: tmp7, children: null });
      let tmp26 = jsx(tmp(tmp2[12]).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
    } else {
      tmp26 = null;
    }
    return tmp26;
  }
  if (relationshipType !== guildId.BLOCKED) {
    const obj11 = { label: null, action: null };
    const intl2 = tmp(tmp2[15]).intl;
    obj11.label = intl2.string(tmp(tmp2[15]).t.ytCpKs);
    obj11.action = function action() {
      let obj = { action: "IGNORE", analyticsLocations };
      trackUserProfileAction(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj = {
        userId: id,
        onSuccess() {
          showUserProfile();
        },
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION,
      };
      obj2.openLazy(asyncRequireImpl(11384, dependencyMap.paths), map1, obj, "stack");
    };
    items3.push(obj11);
  }
  const tmp9 = user(channel[12]);
}
