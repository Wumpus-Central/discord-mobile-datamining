// discord_app/modules/user_profile/native/BotUserProfileOverflowMenu.tsx
import encodeProperties from "encodeProperties";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import { jsx } from "BlockedInformationTable";

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ AnalyticEvents: metroImportAll, ApplicationFlags: c9, ChannelTypesSets: c10, RelationshipTypes: unpackModuleId } = ME);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_12, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: map1 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
let result = require("upsertRelationship").fileFinishedImporting("modules/user_profile/native/BotUserProfileOverflowMenu.tsx");

export default function BotUserProfileOverflowMenu(application) {
  let isIgnored;
  let relationshipType;
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
  let closure_12;
  let installAppPropsFromProfileApplication;
  let obj = application(channel[8]);
  const items = [trackUserProfileAction];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ relationshipType: trackUserProfileAction.getRelationshipType(user.id), isIgnored: trackUserProfileAction.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj1 = application(channel[8]);
  const items1 = [analyticsLocations, context];
  stateFromStores = obj1.useStateFromStores(items1, () => context.getChannel(analyticsLocations.getChannelId()));
  let obj2 = application(channel[9]);
  let result = obj2.isIarUserReportingEnabled("User Profile Options - Mobile");
  let obj3 = application(channel[10]);
  const userProfileAnalyticsContext = obj3.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmp7Result = user(channel[11])(user(channel[12]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp7Result.analyticsLocations;
  newestAnalyticsLocation = tmp7Result.newestAnalyticsLocation;
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
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj.channelId = id;
    obj.sourceAnalyticsLocations = analyticsLocations;
    obj.ignoreBlockedSpeedBump = true;
    user(channel[13])(obj);
  }, items2);
  id = user.id;
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const items3 = [];
  if (isIgnored) {
    if (!tmp12) {
      obj = { label: null, action: null };
      let intl = tmp(tmp2[14]).intl;
      obj[0] = intl.string(tmp(tmp2[14]).t["8wXU9B"]);
      obj[1] = function action() {
        trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
        let id;
        if (channel != null) {
          id = channel.id;
        }
        user(channel[15]).unignoreUser(id, newestAnalyticsLocation, id);
        callback();
      };
      items3.push(obj);
    }
    if (tmp12) {
      obj = { label: null, action: null };
      const intl3 = tmp(tmp2[14]).intl;
      obj[0] = intl3.string(tmp(tmp2[14]).t.XyHpKH);
      obj[1] = function action() {
        let obj = { action: "UNBLOCK", analyticsLocations };
        trackUserProfileAction(obj);
        obj = { location: newestAnalyticsLocation };
        user(channel[15]).unblockUser(id, obj);
        const obj2 = user(channel[15]);
        const tmp2 = id;
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        const result = user(channel[20]).showUnblockSuccessToast(tmp2, id);
        callback();
      };
      items3.push(obj);
    }
    if (!tmp12) {
      obj1 = { label: null, variant: "destructive", action: null };
      const intl4 = tmp(tmp2[14]).intl;
      obj1[0] = intl4.string(tmp(tmp2[14]).t.l4Emac);
      obj1[2] = function action() {
        let obj = { action: "BLOCK", analyticsLocations };
        trackUserProfileAction(obj);
        const obj2 = user(channel[16]);
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
        obj[3] = tmp3(tmp2[19]).ImpressionNames.BLOCK_USER_CONFIRMATION;
        obj2.openLazy(application(channel[18])(channel[21], channel.paths), closure_12, obj, "stack");
      };
      items3.push(obj1);
      if (result) {
        obj2 = { label: null, variant: "destructive", action: null };
        const intl6 = tmp(tmp2[14]).intl;
        obj2[0] = intl6.string(tmp(tmp2[14]).t.jhJzez);
        obj2[2] = function action() {
          let obj = { action: "REPORT", analyticsLocations };
          trackUserProfileAction(obj);
          let tmp3;
          if ("@me" !== guildId) {
            if (null !== tmp2) {
              tmp3 = tmp2;
            }
          }
          const obj2 = user(channel[16]);
          obj = { user, entrypoint: "UserProfileOverflowMenu", contextualGuildId: tmp3, contextualChannelId: null };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj[3] = id;
          obj2.openLazy(application(channel[18])(channel[22], channel.paths), application(channel[23]).BOT_REPORT_CHOOSER_KEY, obj, "replaceAll");
        };
        items3.push(obj2);
      } else {
        let tmpResult = tmp(tmp2[24]);
        if (tmpResult.isAndroid()) {
          obj3 = { label: null, variant: "destructive", action: null };
          const intl5 = tmp(tmp2[14]).intl;
          obj3[0] = intl5.string(tmp(tmp2[14]).t.TbHyMG);
          obj3[2] = function action() {
            let obj = { action: "REPORT", analyticsLocations };
            trackUserProfileAction(obj);
            application(channel[25]).alertUserReported();
            const obj2 = application(channel[25]);
            obj = { reported_user_id: id };
            user(channel[26]).track(closure_8.TNS_USER_REPORT_SUBMITTED, obj);
          };
          items3.push(obj3);
        }
      }
    }
    const items4 = [];
    const obj4 = { label: null, action: null };
    const intl7 = tmp(tmp2[14]).intl;
    obj4[0] = intl7.string(tmp(tmp2[14]).t.y5MwJy);
    obj4[1] = function action() {
      trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
      const obj = { action: "COPY_USERNAME", analyticsLocations };
      const obj2 = application(channel[27]);
      obj2.copy(user(channel[28]).getUserTag(user, { decoration: "never", identifiable: "always" }));
      const obj3 = user(channel[28]);
      const result = application(channel[29]).presentUsernameCopied();
      callback();
    };
    items4.push(obj4);
    if (null != application) {
      tmpResult = tmp(tmp2[30]);
      closure_12 = tmpResult.hasApplicationFlag(application, constants.EMBEDDED);
      installAppPropsFromProfileApplication = tmp(tmp2[31]).getInstallAppPropsFromProfileApplication(application);
      let obj5 = { label: null, action: null };
      const intl10 = tmp(tmp2[14]).intl;
      obj5[0] = intl10.string(tmp(tmp2[14]).t.WqhZss);
      obj5[1] = function action() {
        let obj = { action: "COPY_APP_LINK", analyticsLocations };
        trackUserProfileAction(obj);
        const obj2 = application(channel[32]);
        if (closure_12) {
          obj = { applicationId: null, referrerId: null };
          obj[0] = application.id;
          let id;
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
        application(channel[27]).copy(activityLaunchURL);
        const obj5 = application(channel[27]);
        application(channel[29]).presentLinkCopied();
      };
      items4.push(obj5);
      const tmpResult1 = tmp(tmp2[31]);
    }
    const DeveloperMode = tmp(tmp2[33]).DeveloperMode;
    if (DeveloperMode.getSetting()) {
      const obj6 = { label: null, action: null };
      const intl8 = tmp(tmp2[14]).intl;
      obj6[0] = intl8.string(tmp(tmp2[14]).t["/AXYnE"]);
      obj6[1] = function action() {
        trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
        application(channel[27]).copy(id);
        const obj = { action: "COPY_USER_ID", analyticsLocations };
        const obj2 = application(channel[27]);
        application(channel[29]).presentIdCopied();
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
      const intl9 = tmp(tmp2[14]).intl;
      obj7[0] = intl9.string(tmp(tmp2[14]).t.PHjkRE);
      obj7[1] = function action() {
        return user(channel[34])({ userId: id, selectedChannel: stateFromStores, showUserProfile: closure_9, analyticsLocations });
      };
      items4.push(obj7);
    }
    if (0 !== items4.length) {
      const obj8 = { value: null, children: null };
      obj8[0] = analyticsLocations;
      const obj9 = { items: null, children: null };
      const items5 = [items4, items3];
      obj9[0] = items5;
      obj9[1] = function children(ref) {
        const merged = Object.assign(ref, Object.create(null));
        let obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = application(channel[14]).intl;
        obj.accessibilityLabel = intl.string(application(channel[14]).t["+zofAD"]);
        obj = { size: "sm", color: null };
        obj[1] = user(channel[38]).colors.WHITE;
        obj.icon = callback2(application(channel[37]).MoreHorizontalIcon, obj);
        return callback2(application(channel[36]).IconButton, obj);
      };
      obj8[1] = jsx(tmp(tmp2[35]).ContextMenu, { items: null, children: null });
      let tmp24 = jsx(tmp(tmp2[11]).AnalyticsLocationProvider, { value: null, children: null });
    } else {
      tmp24 = null;
    }
    return tmp24;
  }
  if (relationshipType !== guildId.BLOCKED) {
    const obj10 = { label: null, action: null };
    const intl2 = tmp(tmp2[14]).intl;
    obj10[0] = intl2.string(tmp(tmp2[14]).t.ytCpKs);
    obj10[1] = function action() {
      let obj = { action: "IGNORE", analyticsLocations };
      trackUserProfileAction(obj);
      const obj2 = user(channel[16]);
      obj = {
        userId: id,
        onSuccess() {
          callback();
        },
        impressionName: application(channel[19]).ImpressionNames.IGNORE_USER_CONFIRMATION
      };
      obj2.openLazy(application(channel[18])(channel[17], channel.paths), closure_13, obj, "stack");
    };
    items3.push(obj10);
  }
};