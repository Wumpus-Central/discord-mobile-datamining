// discord_app/modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import combined from "combined";
import { View } from "Background";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import ME from "ME";
import { FeedbackRating } from "FeedbackRating";
import jsxProd from "PressableCard";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function GuildPill(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = { style: tmp.guildPill, children: null };
  obj = { guild, size: null, animate: true };
  obj[1] = require("../../guild/native/GuildIcon.tsx") /* GuildIconSizes */.GuildIconSizes.SMALL_32;
  const items = [callback(require("../../guild/native/GuildIcon.tsx"), obj), ];
  obj = { style: tmp.guildName, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  let name;
  if (guild != null) {
    name = guild.name;
  }
  obj[3] = name;
  items[1] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  obj[1] = items;
  return closure_12(View, obj);
}
({ HelpdeskArticles: metroImportAll, HighlightSettings: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { contentContainer: { padding: 24, alignItems: "center", justifyContent: "center" }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginBottom: 4 }, centerText: { textAlign: "center" }, feedback: { marginTop: 16, alignItems: "stretch", alignSelf: "stretch", paddingBottom: 16 }, thanks: { height: 40, textAlign: "center", textAlignVertical: "center" }, settings: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginVertical: 8, padding: 0 };
createCacheKey[6] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { guildPill: null, guildName: null };
const merged = Object.assign(require("Themes").shadows.SHADOW_LOW);
obj1[0] = { flexDirection: "row", padding: 8, marginBottom: 16, backgroundColor: require("Themes").colors.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round };
obj1[1] = { paddingHorizontal: 8 };
let closure_14 = createCacheKey.createStyles(obj1);
let obj2 = { flexDirection: "row", padding: 8, marginBottom: 16, backgroundColor: require("Themes").colors.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx");

export default function SummaryFeedbackActionSheet(guildId) {
  let guild;
  let notifyHighlights;
  guildId = guildId.guildId;
  const feedbackSettings = guildId.feedbackSettings;
  let ref;
  let first;
  let React;
  let first1;
  let createGuildRecordFromRust;
  let updateUserGuildSettingsInternal;
  let callback;
  let tmp = createCacheKey();
  ref = React.useRef(null);
  const tmp3 = first(React.useState(undefined), 2);
  first = tmp3[0];
  React = tmp3[1];
  let tmp4 = first(React.useState(false), 2);
  first1 = tmp4[0];
  createGuildRecordFromRust = tmp4[1];
  const tmp6 = first(React.useState(false), 2);
  updateUserGuildSettingsInternal = tmp6[1];
  const items = [first1, feedbackSettings];
  callback = React.useCallback((rating) => {
    let tmp = first1;
    if (!first1) {
      rating = undefined;
      if (rating != null) {
        rating = rating.rating;
      }
      tmp = null == rating;
    }
    if (!tmp) {
      if (feedbackSettings != null) {
        const onFeedbackCompleted = tmp4.onFeedbackCompleted;
        if (onFeedbackCompleted != null) {
          onFeedbackCompleted(rating);
        }
      }
      guildId(ref[12]).handleSurveyCleanup();
      guild(true);
      const obj = guildId(ref[12]);
      tmp4 = feedbackSettings;
    }
  }, items);
  const items1 = [first, callback];
  const effect = React.useEffect(() => () => {
    callback(_slicedToArray);
  }, items1);
  const items2 = [callback];
  const callback1 = React.useCallback((arg0) => {
    callback(arg0);
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    if (tmp2) {
      callback(arg0);
      lib(false);
    } else {
      lib(true);
    }
    guildId(ref[12]).handleSurveyCleanup();
  }, items2);
  const callback2 = React.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.expandActionSheet();
    }
    lib(false);
  }, []);
  let obj1 = guildId(ref[13]);
  const items3 = [updateUserGuildSettingsInternal, createGuildRecordFromRust];
  const items4 = [guildId];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items3, () => ({ guild: guild.getGuild(guildId), muted: lib.isMuted(guildId), notifyHighlights: lib.getNotifyHighlights(guildId) }), items4);
  let muted = stateFromStoresObject.muted;
  let reasons;
  ({ guild, notifyHighlights } = stateFromStoresObject);
  if (feedbackSettings != null) {
    reasons = feedbackSettings.reasons;
  }
  if (null == reasons) {
    let num = 0;
    if (tmp15) {
      let num2 = 148;
      if (first1) {
        num2 = 64;
      }
      num = num2;
    }
    const sum = 316 + num + feedbackSettings(tmp12[16])().bottom;
    let tmp23 = !tmp15;
    if (tmp15) {
      let obj = first;
      if (first == null) {
        obj = {};
      }
      tmp23 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
      const tmp25 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
    }
    if (!tmp23) {
      let rating;
      if (first != null) {
        rating = first.rating;
      }
      tmp23 = null == rating;
    }
    obj = { scrollable: true, ref: null, contentHeight: null, startHeight: null, children: null };
    obj[1] = ref;
    let tmp28;
    if (tmp23) {
      tmp28 = sum;
    }
    obj[2] = tmp28;
    obj[3] = sum;
    obj1 = { contentContainerStyle: null, onLayout: null, children: null };
    obj1[0] = tmp.contentContainer;
    let tmp29;
    if (tmp6[0]) {
      tmp29 = callback2;
    }
    obj1[1] = tmp29;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.header;
    const obj3 = { guild: null };
    obj3[0] = guild;
    const items5 = [closure_11(GuildPill, obj3), , ];
    const obj4 = { style: null, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
    obj4[0] = tmp.headerTitle;
    const intl4 = tmp11(tmp12[14]).intl;
    obj4[3] = intl4.string(tmp11(tmp12[14]).t.o8Bypv);
    items5[1] = closure_11(tmp11(tmp12[11]).Text, obj4);
    const obj5 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj5[0] = tmp.centerText;
    const intl5 = tmp11(tmp12[14]).intl;
    const obj6 = { helpUrl: null };
    obj6[0] = feedbackSettings(tmp12[19]).getArticleURL(callback.HIGHLIGHTS_NOTIFICATIONS);
    obj5[3] = intl5.format(tmp11(tmp12[14]).t.enfuur, obj6);
    items5[2] = closure_11(tmp11(tmp12[11]).Text, obj5);
    obj2[1] = items5;
    const items6 = [callback2(first1, obj2), , , ];
    let tmp27Result = null != null;
    if (tmp27Result) {
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.feedback;
      obj7[1] = null;
      tmp27Result = tmp27(tmp21(tmp12[20]).View, obj7);
    }
    items6[1] = tmp27Result;
    if (first == null) {
      first = {};
    }
    tmp27Result = !tmp36;
    if (first.rating !== FeedbackRating.GOOD) {
      const obj8 = { style: null, shadow: "low", border: "subtle", children: null };
      obj8[0] = tmp.settings;
      const obj9 = { disabled: null, label: null, value: null, onValueChange: null };
      obj9[0] = muted;
      const intl6 = tmp11(tmp12[14]).intl;
      obj9[1] = intl6.string(tmp11(tmp12[14]).t.MVi7LQ);
      if (!muted) {
        muted = notifyHighlights === constants.DISABLED;
      }
      obj9[2] = muted;
      obj9[3] = function onValueChange(arg0) {
        let obj = feedbackSettings(ref[23]);
        obj = { notify_highlights: arg0 ? tmp3.DISABLED : tmp3.ENABLED };
        const NotificationLabel = guildId(ref[24]).NotificationLabel;
        const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
      };
      obj8[3] = tmp27(tmp11(tmp12[22]).FormSwitchRow, obj9);
      tmp27Result = tmp27(tmp11(tmp12[21]).Card, obj8);
    }
    const obj10 = { children: null };
    items6[2] = tmp27Result;
    const obj11 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj11[0] = tmp.centerText;
    const intl7 = tmp11(tmp12[14]).intl;
    const obj12 = { notifSettingsHook: null };
    obj12[0] = function notifSettingsHook() {
      feedbackSettings(ref[25]).hideActionSheet();
      const obj = feedbackSettings(ref[25]);
      feedbackSettings(ref[23]).open(guildId);
    };
    obj11[3] = intl7.format(tmp11(tmp12[14]).t.F9rfLX, obj12);
    items6[3] = closure_11(tmp11(tmp12[11]).Text, obj11);
    obj10[0] = items6;
    obj1[2] = callback2(first1, obj10);
    obj[4] = closure_11(tmp11(tmp12[18]).BottomSheetScrollView, obj1);
    return closure_11(tmp11(tmp12[17]).BottomSheet, obj);
  } else {
    let obj13 = first;
    if (first == null) {
      obj13 = {};
    }
    if (tmp17) {
      const obj14 = { style: null, variant: "heading-md/semibold", color: "text-brand", children: null };
      const items7 = [, ];
      ({ centerText: arr7[0], thanks: arr7[1] } = tmp);
      obj14[0] = items7;
      const intl3 = tmp11(tmp12[14]).intl;
      obj14[3] = intl3.string(tmp11(tmp12[14]).t.kZbFIO);
      let tmp18Result = tmp18(tmp11(tmp12[11]).Text, obj14);
    } else {
      const obj15 = { ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, trackOpen: null, onFeedbackChanged: null };
      const intl = tmp11(tmp12[14]).intl;
      obj15[0] = intl.string(tmp11(tmp12[14]).t.Yzl7Or);
      const intl2 = tmp11(tmp12[14]).intl;
      obj15[1] = intl2.string(tmp11(tmp12[14]).t.g1q5fr);
      let reasons1;
      if (feedbackSettings != null) {
        reasons1 = feedbackSettings.reasons;
      }
      if (reasons1 == null) {
        reasons1 = [];
      }
      obj15[2] = reasons1;
      obj15[3] = null != feedbackSettings ? feedbackSettings.onFeedbackShown : (() => {

      });
      obj15[4] = callback1;
      tmp18Result = tmp18(tmp11(tmp12[15]).FeedbackForm, obj15);
    }
    tmp17 = obj13.rating === FeedbackRating.GOOD || null != obj13.reason;
  }
};