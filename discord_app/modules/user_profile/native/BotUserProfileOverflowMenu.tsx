// === Module 13281: BotUserProfileOverflowMenu ===

// Module 13281 (BotUserProfileOverflowMenu)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ToastUtils from "ToastUtils" /* 4453 */;
import UserUtilsDefault from "UserUtils" /* 4600 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ClipboardUtils from "ClipboardUtils" /* 7434 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8448 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8675 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 10003 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 12385 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12873 */;
import BotReportChooser from "BotReportChooser" /* 13284 */;
import openUserContextMenuCommandsDefault from "openUserContextMenuCommands" /* 13285 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, ApplicationFlags: closure_9, ChannelTypesSets: c10, RelationshipTypes: closure_11 } = Constants);
const RestrictionConfirmationConstants = fn(11645);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_12, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: map1 } = RestrictionConfirmationConstants);
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
  const items = [trackUserProfileAction];
  const stateFromStoresObject = application(channel[8]).useStateFromStoresObject(items, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), isIgnored: RelationshipStore.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj = application(channel[8]);
  const items1 = [analyticsLocations, context];
  const stateFromStores = application(channel[8]).useStateFromStores(items1, () => context.getChannel(analyticsLocations.getChannelId()));
  let obj2 = application(channel[8]);
  let result = application(channel[9]).isIarUserReportingEnabled("User Profile Options - Mobile");
  let obj3 = application(channel[9]);
  const tmp6 = user;
  const tmp7 = user(channel[10])();
  const userProfileAnalyticsContext = application(channel[11]).useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  let obj4 = application(channel[11]);
  const tmp9Result = user(channel[12])(user(channel[13]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp9Result.analyticsLocations;
  const newestAnalyticsLocation = tmp9Result.newestAnalyticsLocation;
  newestAnalyticsLocation.getCurrentUser();
  const items2 = [user.id, , , ];
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
      let obj5 = { label: null, action: null };
      let intl = tmp(tmp2[15]).intl;
      obj5.label = intl.string(tmp(tmp2[15]).t["8wXU9B"]);
      obj5.action = function action() {
        trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        RelationshipActionCreatorsDefault.unignoreUser(id, newestAnalyticsLocation, id);
        showUserProfile();
        const obj = { action: "UNIGNORE", analyticsLocations };
      };
      items3.push(obj5);
    }
    if (tmp14) {
      let obj6 = { label: null, action: null };
      const intl3 = tmp(tmp2[15]).intl;
      obj6.label = intl3.string(tmp(tmp2[15]).t.XyHpKH);
      obj6.action = function action() {
        trackUserProfileAction({ action: "UNBLOCK", analyticsLocations });
        RelationshipActionCreatorsDefault.unblockUser(id, { location: newestAnalyticsLocation });
        const obj = { action: "UNBLOCK", analyticsLocations };
        const obj3 = { location: newestAnalyticsLocation };
        const tmp2 = id;
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(tmp2, id);
        showUserProfile();
      };
      items3.push(obj6);
    }
    if (!tmp14) {
      const obj7 = { label: null, variant: "destructive", action: null };
      const intl4 = tmp(tmp2[15]).intl;
      obj7.label = intl4.string(tmp(tmp2[15]).t.l4Emac);
      obj7.action = function action() {
        trackUserProfileAction({ action: "BLOCK", analyticsLocations });
        const obj = { action: "BLOCK", analyticsLocations };
        const obj2 = ActionSheetActionCreatorsDefault;
        const obj3 = { userId: id, channelId: null, onSuccess: null, impressionName: null };
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        obj3.channelId = id;
        obj3.onSuccess = function onSuccess() {
          showUserProfile();
        };
        obj3.impressionName = discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION;
        obj2.openLazy(asyncRequireImpl(11646, dependencyMap.paths), closure_2_12, obj3, "stack");
        const tmp4 = asyncRequireImpl(11646, dependencyMap.paths);
      };
      items3.push(obj7);
      if (result) {
        const obj8 = { label: null, variant: "destructive", action: null };
        const intl6 = tmp(tmp2[15]).intl;
        obj8.label = intl6.string(tmp(tmp2[15]).t.jhJzez);
        obj8.action = function action() {
          trackUserProfileAction({ action: "REPORT", analyticsLocations });
          let tmp3;
          if ("@me" !== guildId) {
            if (null !== guildId) {
              tmp3 = guildId;
            }
          }
          const obj = { action: "REPORT", analyticsLocations };
          const obj2 = ActionSheetActionCreatorsDefault;
          const obj3 = { user, entrypoint: "UserProfileOverflowMenu", contextualGuildId: tmp3, contextualChannelId: null };
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          obj3.contextualChannelId = id;
          obj2.openLazy(asyncRequireImpl(13284, dependencyMap.paths), BotReportChooser.BOT_REPORT_CHOOSER_KEY, obj3, "replaceAll");
          const tmp5 = asyncRequireImpl(13284, dependencyMap.paths);
        };
        items3.push(obj8);
      } else {
        if (tmpResult.isAndroid()) {
          const obj9 = { label: null, variant: "destructive", action: null };
          const intl5 = tmp(tmp2[15]).intl;
          obj9.label = intl5.string(tmp(tmp2[15]).t.TbHyMG);
          obj9.action = function action() {
            trackUserProfileAction({ action: "REPORT", analyticsLocations });
            UserProfileAlertUtils.alertUserReported();
            const obj = { action: "REPORT", analyticsLocations };
            AnalyticsUtilsDefault.track(constants.TNS_USER_REPORT_SUBMITTED, { reported_user_id: id });
          };
          items3.push(obj9);
        }
        tmpResult = tmp(tmp2[25]);
      }
    }
    const items4 = [];
    const obj10 = { label: null, action: null };
    const intl7 = tmp(tmp2[15]).intl;
    obj10.label = intl7.string(tmp(tmp2[15]).t.y5MwJy);
    obj10.action = function action() {
      trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
      const obj = { action: "COPY_USERNAME", analyticsLocations };
      const obj2 = ClipboardUtils;
      obj2.copy(UserUtilsDefault.getUserTag(user, { decoration: "never", identifiable: "always" }));
      const result = ToastUtils.presentUsernameCopied();
      showUserProfile();
    };
    items4.push(obj10);
    if (null != application) {
      closure_12 = tmp(tmp2[31]).hasApplicationFlag(application, constants2.EMBEDDED);
      const tmpResult3 = tmp(tmp2[31]);
      installAppPropsFromProfileApplication = tmp(tmp2[32]).getInstallAppPropsFromProfileApplication(application);
      const obj11 = { label: null, action: null };
      const intl10 = tmp(tmp2[15]).intl;
      obj11.label = intl10.string(tmp(tmp2[15]).t.WqhZss);
      obj11.action = function action() {
        trackUserProfileAction({ action: "COPY_APP_LINK", analyticsLocations });
        const obj2 = getApplicationInstallURL;
        if (closure_12) {
          const obj3 = { applicationId: application.id, referrerId: null };
          id = undefined;
          if (id != null) {
            id = id.id;
          }
          obj3.referrerId = id;
          let activityLaunchURL = obj2.getActivityLaunchURL(obj3);
        } else {
          const obj4 = { id: application.id };
          const merged = Object.assign(closure_13);
          activityLaunchURL = obj2.getApplicationInstallURL(obj4);
        }
        ClipboardUtils.copy(activityLaunchURL);
        const obj = { action: "COPY_APP_LINK", analyticsLocations };
        ToastUtils.presentLinkCopied();
      };
      items4.push(obj11);
      const tmpResult4 = tmp(tmp2[32]);
    }
    const DeveloperMode = tmp(tmp2[34]).DeveloperMode;
    if (DeveloperMode.getSetting()) {
      const obj12 = { label: null, action: null };
      const intl8 = tmp(tmp2[15]).intl;
      obj12.label = intl8.string(tmp(tmp2[15]).t["/AXYnE"]);
      obj12.action = function action() {
        trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
        ClipboardUtils.copy(id);
        const obj = { action: "COPY_USER_ID", analyticsLocations };
        ToastUtils.presentIdCopied();
        showUserProfile();
      };
      items4.push(obj12);
    }
    let hasItem = null != channel && null != stateFromStores;
    if (hasItem) {
      const TEXTUAL = id.TEXTUAL;
      hasItem = TEXTUAL.has(stateFromStores.type);
    }
    if (hasItem) {
      const obj13 = { label: null, action: null };
      const intl9 = tmp(tmp2[15]).intl;
      obj13.label = intl9.string(tmp(tmp2[15]).t.PHjkRE);
      obj13.action = function action() {
        return openUserContextMenuCommandsDefault({ userId: id, selectedChannel: stateFromStores, showUserProfile, analyticsLocations });
      };
      items4.push(obj13);
    }
    if (0 !== items4.length) {
      const obj14 = { value: analyticsLocations, children: null };
      const obj15 = { style: tmp7, children: null };
      const obj16 = { items: null, children: null };
      const items5 = [items4, items3];
      obj16.items = items5;
      obj16.children = function children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = application(channel[15]).intl;
        obj.accessibilityLabel = intl.string(application(channel[15]).t["+zofAD"]);
        obj.icon = jsx(application(channel[39]).MoreHorizontalIcon, { size: "sm", color: user(channel[40]).colors.WHITE });
        return jsx(application(channel[38]).IconButton, { ref: ref.ref });
      };
      obj15.children = jsx(tmp(tmp2[37]).ContextMenu, { items: null, children: null });
      obj14.children = jsx(tmp6(tmp2[36]).View, { style: tmp7, children: null });
      let tmp26 = jsx(tmp(tmp2[12]).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
    } else {
      tmp26 = null;
    }
    return tmp26;
  }
  if (relationshipType !== guildId.BLOCKED) {
    const obj17 = { label: null, action: null };
    const intl2 = tmp(tmp2[15]).intl;
    obj17.label = intl2.string(tmp(tmp2[15]).t.ytCpKs);
    obj17.action = function action() {
      trackUserProfileAction({ action: "IGNORE", analyticsLocations });
      const obj = { action: "IGNORE", analyticsLocations };
      const obj2 = ActionSheetActionCreatorsDefault;
      const tmp2 = asyncRequireImpl(11647, dependencyMap.paths);
      obj2.openLazy(tmp2, map1, {
        userId: id,
        onSuccess() {
          showUserProfile();
        },
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION
      }, "stack");
    };
    items3.push(obj17);
  }
  const tmp9 = user(channel[12]);
};