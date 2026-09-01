// === Module 9055: BotUserProfileOverflowMenu ===

// Module 9055 (BotUserProfileOverflowMenu)
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1387 */;
import closure_5 from "markAllUserIdListsStale" /* 4130 */;
import closure_6 from "handleConnectionOpen" /* 1981 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY" /* 9056 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ AnalyticEvents: closure_8, ApplicationFlags: c9, ChannelTypesSets: c10, RelationshipTypes: unpackModuleId } = ME);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_12, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: map1 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
let result = require("set").fileFinishedImporting("modules/user_profile/native/BotUserProfileOverflowMenu.tsx");

export default function BotUserProfileOverflowMenu(application) {
  application = application.application;
  const user = application.user;
  const channel = application.channel;
  let stateFromStores;
  let context;
  let trackUserProfileAction;
  let analyticsLocations;
  let newestAnalyticsLocation;
  let currentUser;
  let constants;
  let id;
  let guildId;
  closure_12 = undefined;
  let installAppPropsFromProfileApplication;
  let obj = application(channel[8]);
  const items = [trackUserProfileAction];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ relationshipType: trackUserProfileAction.getRelationshipType(user.id), isIgnored: trackUserProfileAction.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  obj1 = application(channel[8]);
  const items1 = [analyticsLocations, context];
  stateFromStores = obj1.useStateFromStores(items1, () => context.getChannel(analyticsLocations.getChannelId()));
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
  newestAnalyticsLocation = tmp9Result.newestAnalyticsLocation;
  currentUser = newestAnalyticsLocation.getCurrentUser();
  const items2 = [user.id, , , ];
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  items2[1] = id;
  items2[2] = context;
  items2[3] = analyticsLocations;
  constants = stateFromStores.useCallback((showGuildProfile) => {
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
    user(channel[14])(obj);
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
      obj[0] = intl.string(tmp(tmp2[15]).t["8wXU9B"]);
      obj[1] = function action() {
        trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        user(channel[16]).unignoreUser(id, newestAnalyticsLocation, id);
        callback();
      };
      items3.push(obj);
    }
    if (tmp14) {
      obj = { label: null, action: null };
      const intl3 = tmp(tmp2[15]).intl;
      obj[0] = intl3.string(tmp(tmp2[15]).t.XyHpKH);
      obj[1] = function action() {
        let obj = { action: "UNBLOCK", analyticsLocations };
        trackUserProfileAction(obj);
        obj = { location: newestAnalyticsLocation };
        user(channel[16]).unblockUser(id, obj);
        const obj2 = user(channel[16]);
        const tmp2 = id;
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        const result = user(channel[21]).showUnblockSuccessToast(tmp2, id);
        callback();
      };
      items3.push(obj);
    }
    if (!tmp14) {
      obj1 = { label: null, variant: "destructive", action: null };
      const intl4 = tmp(tmp2[15]).intl;
      obj1[0] = intl4.string(tmp(tmp2[15]).t.l4Emac);
      obj1[2] = function action() {
        let obj = { action: "BLOCK", analyticsLocations };
        trackUserProfileAction(obj);
        const obj2 = user(channel[17]);
        const tmp2 = channel;
        const tmp3 = application;
        obj = { userId: id, channelId: null, onSuccess: null, impressionName: null };
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        obj[1] = id;
        obj[2] = function onSuccess() {
          callback();
        };
        obj[3] = tmp3(tmp2[20]).ImpressionNames.BLOCK_USER_CONFIRMATION;
        obj2.openLazy(application(channel[19])(channel[22], channel.paths), closure_12, obj, "stack");
      };
      items3.push(obj1);
      if (result) {
        obj2 = { label: null, variant: "destructive", action: null };
        const intl6 = tmp(tmp2[15]).intl;
        obj2[0] = intl6.string(tmp(tmp2[15]).t.jhJzez);
        obj2[2] = function action() {
          let obj = { action: "REPORT", analyticsLocations };
          trackUserProfileAction(obj);
          let tmp3;
          if ("@me" !== guildId) {
            if (null !== tmp2) {
              tmp3 = tmp2;
            }
          }
          const obj2 = user(channel[17]);
          obj = { user, entrypoint: "UserProfileOverflowMenu", contextualGuildId: tmp3, contextualChannelId: null };
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          obj[3] = id;
          obj2.openLazy(application(channel[19])(channel[23], channel.paths), application(channel[24]).BOT_REPORT_CHOOSER_KEY, obj, "replaceAll");
        };
        items3.push(obj2);
      } else {
        let tmpResult = tmp(tmp2[25]);
        if (tmpResult.isAndroid()) {
          obj3 = { label: null, variant: "destructive", action: null };
          const intl5 = tmp(tmp2[15]).intl;
          obj3[0] = intl5.string(tmp(tmp2[15]).t.TbHyMG);
          obj3[2] = function action() {
            let obj = { action: "REPORT", analyticsLocations };
            trackUserProfileAction(obj);
            application(channel[26]).alertUserReported();
            const obj2 = application(channel[26]);
            obj = { reported_user_id: id };
            user(channel[27]).track(closure_8.TNS_USER_REPORT_SUBMITTED, obj);
          };
          items3.push(obj3);
        }
      }
    }
    const items4 = [];
    const obj4 = { label: null, action: null };
    const intl7 = tmp(tmp2[15]).intl;
    obj4[0] = intl7.string(tmp(tmp2[15]).t.y5MwJy);
    obj4[1] = function action() {
      trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
      const obj = { action: "COPY_USERNAME", analyticsLocations };
      const obj2 = application(channel[28]);
      obj2.copy(user(channel[29]).getUserTag(user, { decoration: "never", identifiable: "always" }));
      const obj3 = user(channel[29]);
      const result = application(channel[30]).presentUsernameCopied();
      callback();
    };
    items4.push(obj4);
    if (null != application) {
      tmpResult = tmp(tmp2[31]);
      closure_12 = tmpResult.hasApplicationFlag(application, constants.EMBEDDED);
      installAppPropsFromProfileApplication = tmp(tmp2[32]).getInstallAppPropsFromProfileApplication(application);
      let obj5 = { label: null, action: null };
      const intl10 = tmp(tmp2[15]).intl;
      obj5[0] = intl10.string(tmp(tmp2[15]).t.WqhZss);
      obj5[1] = function action() {
        let obj = { action: "COPY_APP_LINK", analyticsLocations };
        trackUserProfileAction(obj);
        const obj2 = application(channel[33]);
        if (closure_12) {
          obj = { applicationId: null, referrerId: null };
          obj[0] = application.id;
          id = undefined;
          if (closure_8 != null) {
            id = closure_8.id;
          }
          obj[1] = id;
          let activityLaunchURL = obj2.getActivityLaunchURL(obj);
        } else {
          obj = { id: null };
          obj[0] = application.id;
          const merged = Object.assign(closure_13);
          activityLaunchURL = obj2.getApplicationInstallURL(obj);
        }
        application(channel[28]).copy(activityLaunchURL);
        const obj5 = application(channel[28]);
        application(channel[30]).presentLinkCopied();
      };
      items4.push(obj5);
      const tmpResult1 = tmp(tmp2[32]);
    }
    const DeveloperMode = tmp(tmp2[34]).DeveloperMode;
    if (DeveloperMode.getSetting()) {
      const obj6 = { label: null, action: null };
      const intl8 = tmp(tmp2[15]).intl;
      obj6[0] = intl8.string(tmp(tmp2[15]).t["/AXYnE"]);
      obj6[1] = function action() {
        trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
        application(channel[28]).copy(id);
        const obj = { action: "COPY_USER_ID", analyticsLocations };
        const obj2 = application(channel[28]);
        application(channel[30]).presentIdCopied();
        callback();
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
      obj7[0] = intl9.string(tmp(tmp2[15]).t.PHjkRE);
      obj7[1] = function action() {
        return user(channel[35])({ userId: id, selectedChannel: stateFromStores, showUserProfile: closure_9, analyticsLocations });
      };
      items4.push(obj7);
    }
    if (0 !== items4.length) {
      const obj8 = { value: null, children: null };
      obj8[0] = analyticsLocations;
      const obj9 = { style: null, children: null };
      obj9[0] = tmp7;
      const obj10 = { items: null, children: null };
      const items5 = [items4, items3];
      obj10[0] = items5;
      obj10[1] = function children(ref) {
        const merged = Object.assign(ref, Object.create(null));
        let obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = application(channel[15]).intl;
        obj.accessibilityLabel = intl.string(application(channel[15]).t["+zofAD"]);
        obj = { size: "sm", color: user(channel[40]).colors.WHITE };
        obj.icon = callback2(application(channel[39]).MoreHorizontalIcon, obj);
        return callback2(application(channel[38]).IconButton, obj);
      };
      obj9[1] = jsx(tmp(tmp2[37]).ContextMenu, { items: null, children: null });
      obj8[1] = jsx(tmp6(tmp2[36]).View, { style: null, children: null });
      let tmp26 = jsx(tmp(tmp2[12]).AnalyticsLocationProvider, { value: null, children: null });
    } else {
      tmp26 = null;
    }
    return tmp26;
  }
  if (relationshipType !== guildId.BLOCKED) {
    const obj11 = { label: null, action: null };
    const intl2 = tmp(tmp2[15]).intl;
    obj11[0] = intl2.string(tmp(tmp2[15]).t.ytCpKs);
    obj11[1] = function action() {
      let obj = { action: "IGNORE", analyticsLocations };
      trackUserProfileAction(obj);
      const obj2 = user(channel[17]);
      obj = {
        userId: id,
        onSuccess() {
          callback();
        },
        impressionName: application(channel[20]).ImpressionNames.IGNORE_USER_CONFIRMATION
      };
      obj2.openLazy(application(channel[19])(channel[18], channel.paths), closure_13, obj, "stack");
    };
    items3.push(obj11);
  }
};