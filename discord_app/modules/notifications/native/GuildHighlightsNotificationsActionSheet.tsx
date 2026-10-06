// === Module 11261: GuildHighlightsNotificationsActionSheet ===

// Module 11261 (GuildHighlightsNotificationsActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6616 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import Constants2 from "Constants" /* 11262 */;
import PushFeedbackActions from "PushFeedbackActions" /* 11263 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore_mod from "GuildStore" /* 2074 */;
import UserGuildSettingsStore_mod from "UserGuildSettingsStore" /* 5077 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let BottomSheet, guildId;

let c9;
let closure_12;
let metroImportAll;
let obj2;
let obj4;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
let GuildStore = GuildStore_mod;
let UserGuildSettingsStore = UserGuildSettingsStore_mod;
({ HelpdeskArticles: metroImportAll, HighlightSettings: c9 } = Constants);
const FeedbackRating = Constants2.FeedbackRating;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentContainer: { padding: 24, alignItems: "center", justifyContent: "center" }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginBottom: 4 }, centerText: { textAlign: "center" }, feedback: { marginTop: 16, alignItems: "stretch", alignSelf: "stretch", paddingBottom: 16 }, thanks: { height: 40, textAlign: "center", textAlignVertical: "center" }, settings: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginVertical: 8, padding: 0 };
let closure_13 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { guildPill: obj4, guildName: { paddingHorizontal: 8 } };
obj4 = { flexDirection: "row", padding: 8, marginBottom: 16, backgroundColor: nativeDefault.colors.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_14 = createStyles(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let items;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  guild = guild.guild;
  const tmp4 = closure_14();
  if (cResult[0] !== guild) {
    const obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32, animate: true };
    const tmp8 = GuildIconDefault;
    const tmp9 = unpackModuleId(tmp8, obj2);
    cResult[0] = guild;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (cResult[2] === tmp4.guildName) {
    let tmp11;
    if (cResult[3] === name) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.guildPill) {
      if (cResult[6] === tmp5) {
        let tmp13;
        if (cResult[7] === tmp11) {
          tmp13 = cResult[8];
        }
        return tmp13;
      }
    }
    const obj3 = { style: tmp4.guildPill, children: items };
    items = [tmp5, tmp11];
    const tmp16 = closure_12(View, obj3);
    cResult[5] = tmp4.guildPill;
    cResult[6] = tmp5;
    cResult[7] = tmp11;
    cResult[8] = tmp16;
    tmp13 = tmp16;
  }
  const obj4 = { style: tmp4.guildName, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: name };
  const tmp12 = unpackModuleId(Text_Text.Text, obj4);
  cResult[2] = tmp4.guildName;
  cResult[3] = name;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : ((guild) => {
  let items;
  let name;
  guild = guild.guild;
  const tmp = closure_14();
  const obj = { style: tmp.guildPill, children: items };
  const obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32, animate: true };
  const tmp5 = GuildIconDefault;
  items = [unpackModuleId(tmp5, obj2), ];
  const obj3 = { style: tmp.guildName, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: name };
  name = undefined;
  const Text = Text_Text.Text;
  if (guild != null) {
    name = guild.name;
  }
  items[1] = unpackModuleId(Text, obj3);
  return closure_12(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_4;
  let closure_6;
  let closure_7;
  let first;
  let guild;
  let muted;
  let notifyHighlights;
  let ref;
  let tmp = guildId;
  let tmp2 = ref;
  let obj = guildId(ref[11]);
  const cResult = obj.c(61);
  guildId = guildId.guildId;
  const feedbackSettings = guildId.feedbackSettings;
  const tmp4 = closure_13();
  let obj2 = react;
  ref = react.useRef(null);
  const tmp6 = first(react.useState(undefined), 2);
  first = tmp6[0];
  react = tmp6[1];
  const tmp8 = first(react.useState(false), 2);
  const first1 = tmp8[0];
  GuildStore = tmp8[1];
  UserGuildSettingsStore = first(react.useState(false), 2)[1];
  first(react.useState(false), 2);
  if (cResult[0] === feedbackSettings) {
    let tmp11;
    if (cResult[1] === first1) {
      tmp11 = cResult[2];
    }
    let closure_8 = tmp11;
    if (cResult[3] === first) {
      let tmp12;
      let tmp13;
      let tmp16;
      let tmp18;
      if (cResult[4] === tmp11) {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const effect = obj2.useEffect(tmp12, tmp13);
      if (cResult[7] !== tmp11) {
        class V {
          constructor(arg0) {
            closure_4(arg0);
            let obj = arg0;
            if (arg0 == null) {
              obj = {};
            }
            const tmp2 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
            if (tmp2) {
              closure_8(arg0);
              closure_7(false);
            } else {
              closure_7(true);
            }
            const obj2 = PushFeedbackActions;
            obj2.handleSurveyCleanup();
          }
        }
        cResult[7] = tmp11;
        class E {
          constructor() {
            return () => {
              closure_1_8(first);
            };
          }
        }
        cResult[8] = V;
      } else {
        class V {
          constructor(arg0) {
            closure_4(arg0);
            let obj = arg0;
            if (arg0 == null) {
              obj = {};
            }
            const tmp2 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
            if (tmp2) {
              closure_8(arg0);
              closure_7(false);
            } else {
              closure_7(true);
            }
            const obj2 = PushFeedbackActions;
            obj2.handleSurveyCleanup();
          }
        }
      }
      class E {
        constructor() {
          return () => {
            closure_1_8(first);
          };
        }
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.expandActionSheet();
            }
            closure_7(false);
          }
        }
        cResult[9] = U;
        class E {
          constructor() {
            return () => {
              closure_1_8(first);
            };
          }
        }
      } else {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.expandActionSheet();
            }
            closure_7(false);
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.expandActionSheet();
            }
            closure_7(false);
          }
        }
        const items = [UserGuildSettingsStore, ];
        class E {
          constructor() {
            return () => {
              closure_1_8(first);
            };
          }
        }
        items[1] = GuildStore;
        cResult[10] = items;
        tmp16 = items;
      } else {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.expandActionSheet();
            }
            closure_7(false);
          }
        }
      }
      if (cResult[11] !== guildId) {
        class P {
          constructor() {
            const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
            return obj;
          }
        }
        const items1 = [guildId];
        class E {
          constructor() {
            return () => {
              closure_1_8(first);
            };
          }
        }
        cResult[11] = guildId;
        cResult[12] = P;
        cResult[13] = items1;
        tmp18 = items1;
      } else {
        class P {
          constructor() {
            const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
            return obj;
          }
        }
        tmp18 = cResult[13];
      }
      const tmpResult = tmp(tmp2[15]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp16, P, tmp18);
      ({ guild, muted, notifyHighlights } = stateFromStoresObject);
      if (feedbackSettings != null) {
        class P {
          constructor() {
            const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
            return obj;
          }
        }
      }
      if (cResult[14] === first) {
        class P {
          constructor() {
            const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
            return obj;
          }
        }
      }
      let tmp23 = null;
      if (null != undefined) {
        let tmp26Result;
        class P {
          constructor() {
            const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
            return obj;
          }
        }
        if (first == null) {
          class P {
            constructor() {
              const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
              return obj;
            }
          }
        }
        class E {
          constructor() {
            return () => {
              closure_1_8(first);
            };
          }
        }
        if (tmp25) {
          class P {
            constructor() {
              const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
              return obj;
            }
          }
          const items2 = [tmp4.centerText, ];
          class E {
            constructor() {
              return () => {
                closure_1_8(first);
              };
            }
          }
          tmp31[0] = items2;
          const Text = tmp(tmp2[13]).Text;
          const intl3 = tmp(tmp2[16]).intl;
          tmp31[3] = intl3.string(tmp(tmp2[16]).t.kZbFIO);
          tmp26Result = closure_11(Text, tmp31);
        } else {
          class P {
            constructor() {
              const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
              return obj;
            }
          }
          const FeedbackForm = tmp(tmp2[17]).FeedbackForm;
          const intl = tmp(tmp2[16]).intl;
          class E {
            constructor() {
              return () => {
                closure_1_8(first);
              };
            }
          }
          tmp27[0] = tmp28(tmp(tmp2[16]).t.Yzl7Or);
          const intl2 = tmp(tmp2[16]).intl;
          tmp27[1] = intl2.string(tmp(tmp2[16]).t.g1q5fr);
          if (feedbackSettings != null) {
            class P {
              constructor() {
                const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
                return obj;
              }
            }
          }
          if (undefined == null) {
            class P {
              constructor() {
                const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
                return obj;
              }
            }
          }
          tmp27[2] = undefined;
          tmp27[3] = null != feedbackSettings ? feedbackSettings.onFeedbackShown : (() => {

          });
          tmp27[4] = V;
          tmp26Result = closure_11(FeedbackForm, tmp27);
        }
        tmp23 = tmp26Result;
      }
      cResult[14] = first;
      cResult[15] = feedbackSettings;
      cResult[16] = null != undefined;
      cResult[17] = V;
      cResult[18] = tmp4.centerText;
      cResult[19] = tmp4.thanks;
      cResult[20] = tmp23;
    }
    class E {
      constructor() {
        return () => {
          closure_1_8(first);
        };
      }
    }
    const items3 = [first, tmp11];
    cResult[3] = first;
    cResult[4] = tmp11;
    cResult[5] = E;
    cResult[6] = items3;
    tmp13 = items3;
    tmp12 = E;
  }
  const fn = function b(rating) {
    let tmp = first1;
    if (!tmp) {
      rating = undefined;
      if (rating != null) {
        rating = rating.rating;
      }
      tmp = null == rating;
    }
    if (!tmp) {
      if (feedbackSettings != null) {
        const onFeedbackCompleted = feedbackSettings.onFeedbackCompleted;
        if (onFeedbackCompleted != null) {
          onFeedbackCompleted(rating);
        }
      }
      const obj = PushFeedbackActions;
      obj.handleSurveyCleanup();
      closure_6(true);
    }
  };
  cResult[0] = feedbackSettings;
  cResult[1] = first1;
  cResult[2] = fn;
  tmp11 = fn;
}) : ((guildId) => {
  let BottomSheetScrollView;
  let FormSwitchRow;
  let closure_4;
  let enfuur;
  let format;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let items5;
  let items6;
  let notifyHighlights;
  let obj11;
  let obj14;
  let obj15;
  let obj17;
  let obj7;
  let reasons1;
  let tmp22Result;
  let tmp29;
  let tmp30;
  guildId = guildId.guildId;
  const feedbackSettings = guildId.feedbackSettings;
  let first;
  react = undefined;
  let tmp = closure_13();
  const ref = react.useRef(null);
  const tmp3 = first(react.useState(undefined), 2);
  first = tmp3[0];
  react = tmp3[1];
  const tmp4 = first(react.useState(false), 2);
  const first1 = tmp4[0];
  let closure_6 = tmp4[1];
  const tmp6 = first(react.useState(false), 2);
  let closure_7 = tmp6[1];
  const items = [first1, feedbackSettings];
  const first2 = tmp6[0];
  const callback = react.useCallback((rating) => {
    let tmp = first1;
    if (!tmp) {
      rating = undefined;
      if (rating != null) {
        rating = rating.rating;
      }
      tmp = null == rating;
    }
    if (!tmp) {
      if (feedbackSettings != null) {
        const onFeedbackCompleted = feedbackSettings.onFeedbackCompleted;
        if (onFeedbackCompleted != null) {
          onFeedbackCompleted(rating);
        }
      }
      const obj = PushFeedbackActions;
      obj.handleSurveyCleanup();
      closure_6(true);
    }
  }, items);
  const items1 = [first, callback];
  const effect = react.useEffect(() => () => {
    callback(first);
  }, items1);
  const items2 = [callback];
  const callback1 = react.useCallback((arg0) => {
    closure_4(arg0);
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    const tmp2 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
    if (tmp2) {
      callback(arg0);
      closure_7(false);
    } else {
      closure_7(true);
    }
    const obj2 = PushFeedbackActions;
    obj2.handleSurveyCleanup();
  }, items2);
  const callback2 = react.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.expandActionSheet();
    }
    closure_7(false);
  }, []);
  let obj2 = guildId(ref[15]);
  const items3 = [closure_7, closure_6];
  const items4 = [guildId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items3, () => {
    const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
    return obj;
  }, items4);
  let muted = stateFromStoresObject.muted;
  let reasons;
  ({ guild, notifyHighlights } = stateFromStoresObject);
  if (feedbackSettings != null) {
    reasons = feedbackSettings.reasons;
  }
  let tmp17 = null;
  if (null != reasons) {
    let tmp20Result;
    let obj = first;
    if (first == null) {
      obj = {};
    }
    const tmp19 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
    if (tmp19) {
      const obj3 = { style: items5, variant: "heading-md/semibold", color: "text-brand", children: intl3.string(guildId(ref[16]).t.kZbFIO) };
      items5 = [, ];
      ({ centerText: arr7[0], thanks: arr7[1] } = tmp);
      const Text = tmp12(tmp13[13]).Text;
      intl3 = tmp12(tmp13[16]).intl;
      tmp20Result = closure_11(Text, obj3);
    } else {
      const obj4 = {
        ratingsBodyLabel: intl.string(guildId(ref[16]).t.Yzl7Or),
        reasonsHeaderLabel: intl2.string(guildId(ref[16]).t.g1q5fr),
        reasons: reasons1,
        trackOpen: null != feedbackSettings ? feedbackSettings.onFeedbackShown : (() => {

            }),
        onFeedbackChanged: callback1
      };
      const FeedbackForm = tmp12(tmp13[17]).FeedbackForm;
      intl = tmp12(tmp13[16]).intl;
      intl2 = tmp12(tmp13[16]).intl;
      reasons1 = undefined;
      if (feedbackSettings != null) {
        reasons1 = feedbackSettings.reasons;
      }
      if (reasons1 == null) {
        reasons1 = [];
      }
      tmp20Result = closure_11(FeedbackForm, obj4);
    }
    tmp17 = tmp20Result;
  }
  let num = 0;
  const bottom = feedbackSettings(tmp13[18])().bottom;
  const tmp22 = feedbackSettings;
  if (null != reasons) {
    let num2 = 148;
    if (first1) {
      num2 = 64;
    }
    num = num2;
  }
  const sum = 316 + num + bottom;
  let tmp24 = !tmp16;
  if (null != reasons) {
    let obj5 = first;
    if (first == null) {
      obj5 = {};
    }
    tmp24 = obj5.rating === FeedbackRating.GOOD || null != obj5.reason;
  }
  if (!tmp24) {
    let rating;
    if (first != null) {
      rating = first.rating;
    }
    tmp24 = null == rating;
  }
  const obj6 = { scrollable: true, ref, contentHeight: tmp29, startHeight: sum, children: closure_11(BottomSheetScrollView, obj7) };
  tmp29 = undefined;
  BottomSheet = tmp12(tmp13[26]).BottomSheet;
  if (tmp24) {
    tmp29 = sum;
  }
  obj7 = { contentContainerStyle: tmp.contentContainer, onLayout: tmp30, children: closure_12(first1, obj15) };
  tmp30 = undefined;
  BottomSheetScrollView = tmp12(tmp13[25]).BottomSheetScrollView;
  if (first2) {
    tmp30 = callback2;
  }
  const obj8 = { style: tmp.header, children: items6 };
  items6 = [closure_11(closure_15, { guild }), , ];
  const obj9 = { style: tmp.headerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl4.string(guildId(ref[16]).t.o8Bypv) };
  const Text2 = tmp12(tmp13[13]).Text;
  intl4 = tmp12(tmp13[16]).intl;
  items6[1] = closure_11(Text2, obj9);
  const obj10 = { style: tmp.centerText, variant: "text-md/medium", color: "text-default", children: format(enfuur, obj11) };
  const Text3 = tmp12(tmp13[13]).Text;
  const intl5 = tmp12(tmp13[16]).intl;
  format = intl5.format;
  obj11 = { helpUrl: tmp22Result.getArticleURL(callback.HIGHLIGHTS_NOTIFICATIONS) };
  enfuur = tmp12(tmp13[16]).t.enfuur;
  tmp22Result = tmp22(ref[19]);
  items6[2] = closure_11(Text3, obj10);
  const items7 = [closure_12(first1, obj8), , , ];
  let tmp28Result = null != tmp17;
  if (tmp28Result) {
    const obj12 = { style: tmp.feedback, children: tmp17 };
    tmp28Result = closure_11(tmp32, obj12);
  }
  items7[1] = tmp28Result;
  if (first == null) {
    first = {};
  }
  let tmp28Result2 = first.rating !== FeedbackRating.GOOD;
  if (tmp28Result2) {
    const obj13 = { style: tmp.settings, shadow: "low", border: "subtle", children: closure_11(FormSwitchRow, obj14) };
    const Card = tmp12(tmp13[20]).Card;
    obj14 = {
      disabled: muted,
      label: intl6.string(guildId(ref[16]).t.MVi7LQ),
      value: muted,
      onValueChange(arg0) {
          const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
          const obj = { notify_highlights: arg0 ? constants.DISABLED : constants.ENABLED };
          NotificationSettingsModalActionCreatorsDefault;
          const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
          const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
        }
    };
    FormSwitchRow = tmp12(tmp13[21]).FormSwitchRow;
    intl6 = tmp12(tmp13[16]).intl;
    if (!muted) {
      muted = notifyHighlights === constants.DISABLED;
    }
    tmp28Result2 = closure_11(Card, obj13);
  }
  obj15 = { children: items7 };
  items7[2] = tmp28Result2;
  const obj16 = { style: tmp.centerText, variant: "text-sm/medium", color: "text-default", children: intl7.format(guildId(ref[16]).t.F9rfLX, obj17) };
  const Text4 = tmp12(tmp13[13]).Text;
  intl7 = tmp12(tmp13[16]).intl;
  obj17 = {
    notifSettingsHook() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = NotificationSettingsModalActionCreatorsDefault;
      obj2.open(guildId);
    }
  };
  items7[3] = closure_11(Text4, obj16);
  return closure_11(BottomSheet, obj6);
});
let result = size.fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx");

export default tmp6;