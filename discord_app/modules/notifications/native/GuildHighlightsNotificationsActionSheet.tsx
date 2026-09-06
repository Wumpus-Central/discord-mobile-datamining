// === Module 11625: GuildHighlightsNotificationsActionSheet ===

// Module 11625 (GuildHighlightsNotificationsActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import PushFeedbackActions from "PushFeedbackActions" /* 11627 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

const GuildIconDefault = GuildIcon;

require = fn;
function GuildPill(guild) {
  guild = guild.guild;
  const tmp = closure_14();
  let obj = { style: tmp.guildPill, children: null };
  obj = { guild, size: GuildIcon.GuildIconSizes.SMALL_32, animate: true };
  const items = [closure_1_11(GuildIconDefault, obj), ];
  obj = { style: tmp.guildName, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  let name;
  if (guild != null) {
    name = guild.name;
  }
  obj.children = name;
  items[1] = closure_1_11(Text_Text.Text, obj);
  obj.children = items;
  return closure_1_12(View, obj);
}
const View = fn(17).View;
const Constants = fn(1074);
({ HelpdeskArticles: closure_8, HighlightSettings: closure_9 } = Constants);
const FeedbackRating = fn(11626).FeedbackRating;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { contentContainer: { padding: 24, alignItems: "center", justifyContent: "center" }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginBottom: 4 }, centerText: { textAlign: "center" }, feedback: { marginTop: 16, alignItems: "stretch", alignSelf: "stretch", paddingBottom: 16 }, thanks: { height: 40, textAlign: "center", textAlignVertical: "center" }, settings: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginVertical: 8, padding: 0 };
createStyles.settings = createStyles;
let closure_13 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let obj1 = { guildPill: null, guildName: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj1.guildPill = { flexDirection: "row", padding: 8, marginBottom: 16, backgroundColor: nativeDefault.colors.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
obj1.guildName = { paddingHorizontal: 8 };
let closure_14 = createStyles.createStyles(obj1);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx");

export default function SummaryFeedbackActionSheet(guildId) {
  guildId = guildId.guildId;
  const feedbackSettings = guildId.feedbackSettings;
  let first;
  noop = undefined;
  let tmp = closure_13();
  const ref = noop.useRef(null);
  const tmp3 = first(noop.useState(undefined), 2);
  first = tmp3[0];
  noop = tmp3[1];
  let tmp4 = first(noop.useState(false), 2);
  const first1 = tmp4[0];
  closure_6 = tmp4[1];
  const tmp6 = first(noop.useState(false), 2);
  closure_7 = tmp6[1];
  const items = [first1, feedbackSettings];
  const callback = noop.useCallback((rating) => {
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
      PushFeedbackActions.handleSurveyCleanup();
      closure_6(true);
      tmp4 = feedbackSettings;
    }
  }, items);
  const items1 = [first, callback];
  const effect = noop.useEffect(() => () => {
    callback(first);
  }, items1);
  const items2 = [callback];
  const callback1 = noop.useCallback((arg0) => {
    closure_4(arg0);
    if (arg0 == null) {
      const obj = {};
    }
    if (tmp2) {
      callback(arg0);
      closure_7(false);
    } else {
      closure_7(true);
    }
    PushFeedbackActions.handleSurveyCleanup();
  }, items2);
  const callback2 = noop.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.expandActionSheet();
    }
    closure_7(false);
  }, []);
  let obj1 = guildId(ref[13]);
  const items3 = [closure_7, closure_6];
  const items4 = [guildId];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items3, () => ({ guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) }), items4);
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
    obj = { scrollable: true, ref, contentHeight: null, startHeight: null, children: null };
    let tmp28;
    if (tmp23) {
      tmp28 = sum;
    }
    obj.contentHeight = tmp28;
    obj.startHeight = sum;
    obj1 = { contentContainerStyle: tmp.contentContainer, onLayout: null, children: null };
    let tmp29;
    if (tmp6[0]) {
      tmp29 = callback2;
    }
    obj1.onLayout = tmp29;
    const obj2 = { style: tmp.header, children: null };
    const obj3 = { guild };
    const items5 = [closure_11(GuildPill, obj3), , ];
    const obj4 = { style: tmp.headerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
    const intl4 = tmp11(tmp12[14]).intl;
    obj4.children = intl4.string(tmp11(tmp12[14]).t.o8Bypv);
    items5[1] = closure_11(tmp11(tmp12[11]).Text, obj4);
    const obj5 = { style: tmp.centerText, variant: "text-md/medium", color: "text-default", children: null };
    const intl5 = tmp11(tmp12[14]).intl;
    const obj6 = { helpUrl: feedbackSettings(tmp12[19]).getArticleURL(callback.HIGHLIGHTS_NOTIFICATIONS) };
    obj5.children = intl5.format(tmp11(tmp12[14]).t.enfuur, obj6);
    items5[2] = closure_11(tmp11(tmp12[11]).Text, obj5);
    obj2.children = items5;
    const items6 = [closure_12(first1, obj2), , , ];
    let tmp27Result = null != null;
    if (tmp27Result) {
      const obj7 = { style: tmp.feedback, children: null };
      tmp27Result = tmp27(tmp21(tmp12[20]).View, obj7);
    }
    items6[1] = tmp27Result;
    if (first == null) {
      first = {};
    }
    tmp27Result = !tmp36;
    if (first.rating !== FeedbackRating.GOOD) {
      const obj8 = { style: tmp.settings, shadow: "low", border: "subtle", children: null };
      const obj9 = { disabled: muted, label: null, value: null, onValueChange: null };
      const intl6 = tmp11(tmp12[14]).intl;
      obj9.label = intl6.string(tmp11(tmp12[14]).t.MVi7LQ);
      if (!muted) {
        muted = notifyHighlights === constants.DISABLED;
      }
      obj9.value = muted;
      obj9.onValueChange = function onValueChange(arg0) {
        const obj = { notify_highlights: arg0 ? tmp3.DISABLED : tmp3.ENABLED };
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
      };
      obj8.children = tmp27(tmp11(tmp12[22]).FormSwitchRow, obj9);
      tmp27Result = tmp27(tmp11(tmp12[21]).Card, obj8);
    }
    const obj10 = { children: null };
    items6[2] = tmp27Result;
    const obj11 = { style: tmp.centerText, variant: "text-sm/medium", color: "text-default", children: null };
    const intl7 = tmp11(tmp12[14]).intl;
    const obj12 = {
      notifSettingsHook() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          NotificationSettingsModalActionCreatorsDefault.open(guildId);
        }
    };
    obj11.children = intl7.format(tmp11(tmp12[14]).t.F9rfLX, obj12);
    items6[3] = closure_11(tmp11(tmp12[11]).Text, obj11);
    obj10.children = items6;
    obj1.children = closure_12(first1, obj10);
    obj.children = closure_11(tmp11(tmp12[18]).BottomSheetScrollView, obj1);
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
      obj14.style = items7;
      const intl3 = tmp11(tmp12[14]).intl;
      obj14.children = intl3.string(tmp11(tmp12[14]).t.kZbFIO);
      let tmp18Result = tmp18(tmp11(tmp12[11]).Text, obj14);
    } else {
      const obj15 = { ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, trackOpen: null, onFeedbackChanged: null };
      const intl = tmp11(tmp12[14]).intl;
      obj15.ratingsBodyLabel = intl.string(tmp11(tmp12[14]).t.Yzl7Or);
      const intl2 = tmp11(tmp12[14]).intl;
      obj15.reasonsHeaderLabel = intl2.string(tmp11(tmp12[14]).t.g1q5fr);
      let reasons1;
      if (feedbackSettings != null) {
        reasons1 = feedbackSettings.reasons;
      }
      if (reasons1 == null) {
        reasons1 = [];
      }
      obj15.reasons = reasons1;
      obj15.trackOpen = null != feedbackSettings ? feedbackSettings.onFeedbackShown : (() => {

      });
      obj15.onFeedbackChanged = callback1;
      tmp18Result = tmp18(tmp11(tmp12[15]).FeedbackForm, obj15);
    }
    tmp17 = obj13.rating === FeedbackRating.GOOD || null != obj13.reason;
  }
};