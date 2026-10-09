// discord_app/modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import NotificationSettingsUtils from "../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../actions/NotificationSettingsModalActionCreators.tsx";
import PushFeedbackActions from "../../push_feedback/PushFeedbackActions.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ HelpdeskArticles: closure_8, HighlightSettings: closure_9 } = Constants);
const FeedbackRating = fn(9621).FeedbackRating;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let createStyles = fn(5091);
let obj2 = {
  contentContainer: { padding: 24, alignItems: "center", justifyContent: "center" },
  header: { alignItems: "center", paddingBottom: 24 },
  headerTitle: { marginBottom: 4 },
  centerText: { textAlign: "center" },
  feedback: { marginTop: 16, alignItems: "stretch", alignSelf: "stretch", paddingBottom: 16 },
  thanks: { height: 40, textAlign: "center", textAlignVertical: "center" },
  settings: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginVertical: 8, padding: 0 },
};
let closure_13 = createStyles.createStyles(obj2);
createStyles = fn(5091);
let obj5 = { guildPill: null, guildName: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginVertical: 8, padding: 0 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj5.guildPill = {
  flexDirection: "row",
  padding: 8,
  marginBottom: 16,
  backgroundColor: nativeDefault.colors.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
};
obj5.guildName = { paddingHorizontal: 8 };
let closure_14 = createStyles.createStyles(obj5);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildPill(guild) {
      const cResult = c.c(9);
      guild = guild.guild;
      const tmp4 = closure_14();
      if (cResult[0] !== guild) {
        const obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32, animate: true };
        const tmp9 = closure_1_11(GuildIconDefault, obj2);
        cResult[0] = guild;
        cResult[1] = tmp9;
        let tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (cResult[2] === tmp4.guildName) {
        if (cResult[3] === name) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === tmp4.guildPill) {
          if (cResult[6] === tmp5) {
            if (cResult[7] === tmp11) {
              let tmp13 = cResult[8];
            }
            return tmp13;
          }
        }
        const obj3 = { style: tmp4.guildPill, children: null };
        const items = [tmp5, tmp11];
        obj3.children = items;
        const tmp16 = __initData(View, obj3);
        cResult[5] = tmp4.guildPill;
        cResult[6] = tmp5;
        cResult[7] = tmp11;
        cResult[8] = tmp16;
        tmp13 = tmp16;
      }
      const tmp12 = closure_1_11(Text_Text.Text, {
        style: tmp4.guildName,
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: name,
      });
      cResult[2] = tmp4.guildName;
      cResult[3] = name;
      cResult[4] = tmp12;
      tmp11 = tmp12;
      const obj4 = {
        style: tmp4.guildName,
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: name,
      };
    }
  : function GuildPill(guild) {
      guild = guild.guild;
      const tmp = closure_14();
      const obj = { style: tmp.guildPill, children: null };
      const obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32, animate: true };
      const items = [closure_1_11(GuildIconDefault, obj2)];
      const obj3 = {
        style: tmp.guildName,
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      let name;
      if (guild != null) {
        name = guild.name;
      }
      obj3.children = name;
      items[1] = closure_1_11(Text_Text.Text, obj3);
      obj.children = items;
      return __initData(View, obj);
    };
ReactCompilerGating = fn(558);
let obj6 = {
  flexDirection: "row",
  padding: 8,
  marginBottom: 16,
  backgroundColor: nativeDefault.colors.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SummaryFeedbackActionSheet(guildId) {
      const cResult = guildId(ref[11]).c(61);
      guildId = guildId.guildId;
      const feedbackSettings = guildId.feedbackSettings;
      const tmp4 = closure_13();
      ref = noop.useRef(null);
      const tmp6 = first(noop.useState(undefined), 2);
      first = tmp6[0];
      noop = tmp6[1];
      const tmp8 = first(noop.useState(false), 2);
      const first1 = tmp8[0];
      closure_6 = tmp8[1];
      let obj = guildId(ref[11]);
      let obj2 = noop;
      UserGuildSettingsStore = first(noop.useState(false), 2)[1];
      if (cResult[0] === feedbackSettings) {
        if (cResult[1] === first1) {
          let tmp11 = cResult[2];
        }
        closure_8 = tmp11;
        if (cResult[3] === first) {
          if (cResult[4] === tmp11) {
            let tmp12 = cResult[5];
            let tmp13 = cResult[6];
          }
          const effect = obj2.useEffect(tmp12, tmp13);
          if (cResult[7] !== tmp11) {
            class P {
              constructor(arg0) {
                tmp = closure_4(guildId);
                obj = guildId;
                if (guildId == null) {
                  obj = {};
                }
                tmp2 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
                if (tmp2) {
                  tmp5 = closure_8;
                  tmp6 = closure_8(guildId);
                  tmp7 = closure_7;
                  flag2 = false;
                  tmp8 = closure_7(false);
                } else {
                  tmp3 = closure_7;
                  flag = true;
                  tmp4 = closure_7(true);
                }
                obj2 = closure_0(closure_2[14]);
                handleSurveyCleanupResult = obj2.handleSurveyCleanup();
                return;
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
            cResult[8] = P;
          } else {
            class P {
              constructor(arg0) {
                tmp = closure_4(guildId);
                obj = guildId;
                if (guildId == null) {
                  obj = {};
                }
                tmp2 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
                if (tmp2) {
                  tmp5 = closure_8;
                  tmp6 = closure_8(guildId);
                  tmp7 = closure_7;
                  flag2 = false;
                  tmp8 = closure_7(false);
                } else {
                  tmp3 = closure_7;
                  flag = true;
                  tmp4 = closure_7(true);
                }
                obj2 = closure_0(closure_2[14]);
                handleSurveyCleanupResult = obj2.handleSurveyCleanup();
                return;
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
            class M {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
                tmp2 = closure_7(false);
                return;
              }
            }
            cResult[9] = M;
            class E {
              constructor() {
                return () => {
                  closure_1_8(first);
                };
              }
            }
          } else {
            class M {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
                tmp2 = closure_7(false);
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
                tmp2 = closure_7(false);
                return;
              }
            }
            const items = [UserGuildSettingsStore];
            class E {
              constructor() {
                return () => {
                  closure_1_8(first);
                };
              }
            }
            items[1] = closure_6;
            cResult[10] = items;
            const tmp16 = items;
          } else {
            class M {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
                tmp2 = closure_7(false);
                return;
              }
            }
          }
          if (cResult[11] !== guildId) {
            class M {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
                tmp2 = closure_7(false);
                return;
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
            cResult[12] = tmp19;
            cResult[13] = items1;
            let tmp18 = items1;
          } else {
            class M {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
                tmp2 = closure_7(false);
                return;
              }
            }
            tmp18 = cResult[13];
          }
          const stateFromStoresObject = tmp(tmp2[15]).useStateFromStoresObject(tmp16, tmp19, tmp18);
          ({ guild, muted, notifyHighlights } = stateFromStoresObject);
          if (feedbackSettings != null) {
            class M {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
                tmp2 = closure_7(false);
                return;
              }
            }
          }
          if (cResult[14] === first) {
            class M {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
                tmp2 = closure_7(false);
                return;
              }
            }
          }
          if (null == undefined) {
            class M {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
                tmp2 = closure_7(false);
                return;
              }
            }
            cResult[14] = first;
            class E {
              constructor() {
                return () => {
                  closure_1_8(first);
                };
              }
            }
            cResult[16] = tmp22;
            cResult[17] = P;
            cResult[18] = tmp4.centerText;
            cResult[19] = tmp4.thanks;
            cResult[20] = null;
          } else {
            class M {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
                tmp2 = closure_7(false);
                return;
              }
            }
            if (first == null) {
              class M {
                constructor() {
                  current = closure_2.current;
                  if (current != null) {
                    expandActionSheetResult = current.expandActionSheet();
                  }
                  tmp2 = closure_7(false);
                  return;
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
            if (tmp26) {
              class M {
                constructor() {
                  current = closure_2.current;
                  if (current != null) {
                    expandActionSheetResult = current.expandActionSheet();
                  }
                  tmp2 = closure_7(false);
                  return;
                }
              }
              const items2 = [tmp4.centerText];
              class E {
                constructor() {
                  return () => {
                    closure_1_8(first);
                  };
                }
              }
              tmp32[0] = items2;
              const intl2 = tmp(tmp2[16]).intl;
              tmp32[3] = intl2.string(tmp(tmp2[16]).t.kZbFIO);
              let tmp27Result = closure_11(tmp(tmp2[13]).Text, tmp32);
            } else {
              class M {
                constructor() {
                  current = closure_2.current;
                  if (current != null) {
                    expandActionSheetResult = current.expandActionSheet();
                  }
                  tmp2 = closure_7(false);
                  return;
                }
              }
              class E {
                constructor() {
                  return () => {
                    closure_1_8(first);
                  };
                }
              }
              tmp28[0] = tmp29(tmp(tmp2[16]).t.Yzl7Or);
              const intl = tmp(tmp2[16]).intl;
              tmp28[1] = intl.string(tmp(tmp2[16]).t.g1q5fr);
              if (feedbackSettings != null) {
                class M {
                  constructor() {
                    current = closure_2.current;
                    if (current != null) {
                      expandActionSheetResult = current.expandActionSheet();
                    }
                    tmp2 = closure_7(false);
                    return;
                  }
                }
              }
              if (undefined == null) {
                class M {
                  constructor() {
                    current = closure_2.current;
                    if (current != null) {
                      expandActionSheetResult = current.expandActionSheet();
                    }
                    tmp2 = closure_7(false);
                    return;
                  }
                }
              }
              tmp28[2] = undefined;
              tmp28[3] = null != feedbackSettings ? feedbackSettings.onFeedbackShown : () => {};
              tmp28[4] = P;
              tmp27Result = closure_11(tmp(tmp2[17]).FeedbackForm, tmp28);
            }
          }
          const tmpResult = tmp(tmp2[15]);
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
        if (!first1) {
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
          PushFeedbackActions.handleSurveyCleanup();
          closure_6(true);
        }
      };
      cResult[0] = feedbackSettings;
      cResult[1] = first1;
      cResult[2] = fn;
      tmp11 = fn;
      const tmp10 = first(noop.useState(false), 2);
    }
  : function SummaryFeedbackActionSheet(guildId) {
      guildId = guildId.guildId;
      const feedbackSettings = guildId.feedbackSettings;
      let first;
      noop = undefined;
      let tmp = closure_13();
      const ref = noop.useRef(null);
      const tmp3 = first(noop.useState(undefined), 2);
      first = tmp3[0];
      noop = tmp3[1];
      const tmp4 = first(noop.useState(false), 2);
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
            const onFeedbackCompleted = feedbackSettings.onFeedbackCompleted;
            if (onFeedbackCompleted != null) {
              onFeedbackCompleted(rating);
            }
          }
          PushFeedbackActions.handleSurveyCleanup();
          closure_6(true);
        }
      }, items);
      const items1 = [first, callback];
      const effect = noop.useEffect(
        () => () => {
          callback(first);
        },
        items1,
      );
      const items2 = [callback];
      const callback1 = noop.useCallback((arg0) => {
        closure_4(arg0);
        let obj = arg0;
        if (arg0 == null) {
          obj = {};
        }
        if (tmp2) {
          callback(arg0);
          closure_7(false);
        } else {
          closure_7(true);
        }
        PushFeedbackActions.handleSurveyCleanup();
        tmp2 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
      }, items2);
      const callback2 = noop.useCallback(() => {
        const current = ref.current;
        if (current != null) {
          current.expandActionSheet();
        }
        closure_7(false);
      }, []);
      const items3 = [closure_7, closure_6];
      const items4 = [guildId];
      const stateFromStoresObject = guildId(ref[15]).useStateFromStoresObject(
        items3,
        () => ({
          guild: GuildStore.getGuild(guildId),
          muted: UserGuildSettingsStore.isMuted(guildId),
          notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId),
        }),
        items4,
      );
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
        const sum = 316 + num + feedbackSettings(tmp12[18])().bottom;
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
        const obj3 = { scrollable: true, ref, contentHeight: null, startHeight: null, children: null };
        let tmp28;
        if (tmp23) {
          tmp28 = sum;
        }
        obj3.contentHeight = tmp28;
        obj3.startHeight = sum;
        const obj4 = { contentContainerStyle: tmp.contentContainer, onLayout: null, children: null };
        let tmp29;
        if (tmp6[0]) {
          tmp29 = callback2;
        }
        obj4.onLayout = tmp29;
        const obj5 = { style: tmp.header, children: null };
        const obj6 = { guild };
        const items5 = [closure_11(closure_15, obj6), ,];
        const obj7 = {
          style: tmp.headerTitle,
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl4 = tmp11(tmp12[16]).intl;
        obj7.children = intl4.string(tmp11(tmp12[16]).t.o8Bypv);
        items5[1] = closure_11(tmp11(tmp12[13]).Text, obj7);
        const obj8 = { style: tmp.centerText, variant: "text-md/medium", color: "text-default", children: null };
        const intl5 = tmp11(tmp12[16]).intl;
        const obj9 = { helpUrl: feedbackSettings(tmp12[19]).getArticleURL(callback.HIGHLIGHTS_NOTIFICATIONS) };
        obj8.children = intl5.format(tmp11(tmp12[16]).t.enfuur, obj9);
        items5[2] = closure_11(tmp11(tmp12[13]).Text, obj8);
        obj5.children = items5;
        const items6 = [closure_12(first1, obj5), , ,];
        let tmp27Result = null != null;
        if (tmp27Result) {
          const obj10 = { style: tmp.feedback, children: null };
          tmp27Result = closure_11(tmp31, obj10);
        }
        items6[1] = tmp27Result;
        if (first == null) {
          first = {};
        }
        let tmp27Result2 = !tmp36;
        if (first.rating !== FeedbackRating.GOOD) {
          const obj11 = { style: tmp.settings, shadow: "low", border: "subtle", children: null };
          const obj12 = { disabled: muted, label: null, value: null, onValueChange: null };
          const intl6 = tmp11(tmp12[16]).intl;
          obj12.label = intl6.string(tmp11(tmp12[16]).t.MVi7LQ);
          if (!muted) {
            muted = notifyHighlights === constants.DISABLED;
          }
          obj12.value = muted;
          obj12.onValueChange = function onValueChange(arg0) {
            const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
            const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
              guildId,
              { notify_highlights: arg0 ? constants.DISABLED : constants.ENABLED },
              NotificationLabel.highlights(!arg0),
            );
            const obj2 = { notify_highlights: arg0 ? constants.DISABLED : constants.ENABLED };
          };
          obj11.children = closure_11(tmp11(tmp12[21]).FormSwitchRow, obj12);
          tmp27Result2 = closure_11(tmp11(tmp12[20]).Card, obj11);
        }
        const obj13 = { children: null };
        items6[2] = tmp27Result2;
        const obj14 = { style: tmp.centerText, variant: "text-sm/medium", color: "text-default", children: null };
        const intl7 = tmp11(tmp12[16]).intl;
        const obj15 = {
          notifSettingsHook() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            NotificationSettingsModalActionCreatorsDefault.open(guildId);
          },
        };
        obj14.children = intl7.format(tmp11(tmp12[16]).t.F9rfLX, obj15);
        items6[3] = closure_11(tmp11(tmp12[13]).Text, obj14);
        obj13.children = items6;
        obj4.children = closure_12(first1, obj13);
        obj3.children = closure_11(tmp11(tmp12[25]).BottomSheetScrollView, obj4);
        return closure_11(tmp11(tmp12[26]).BottomSheet, obj3);
      } else {
        let obj16 = first;
        if (first == null) {
          obj16 = {};
        }
        if (tmp17) {
          const obj17 = { style: null, variant: "heading-md/semibold", color: "text-brand", children: null };
          const items7 = [,];
          ({ centerText: arr7[0], thanks: arr7[1] } = tmp);
          obj17.style = items7;
          const intl3 = tmp11(tmp12[16]).intl;
          obj17.children = intl3.string(tmp11(tmp12[16]).t.kZbFIO);
          let tmp18Result = closure_11(tmp11(tmp12[13]).Text, obj17);
        } else {
          const obj18 = {
            ratingsBodyLabel: null,
            reasonsHeaderLabel: null,
            reasons: null,
            trackOpen: null,
            onFeedbackChanged: null,
          };
          const intl = tmp11(tmp12[16]).intl;
          obj18.ratingsBodyLabel = intl.string(tmp11(tmp12[16]).t.Yzl7Or);
          const intl2 = tmp11(tmp12[16]).intl;
          obj18.reasonsHeaderLabel = intl2.string(tmp11(tmp12[16]).t.g1q5fr);
          let reasons1;
          if (feedbackSettings != null) {
            reasons1 = feedbackSettings.reasons;
          }
          if (reasons1 == null) {
            reasons1 = [];
          }
          obj18.reasons = reasons1;
          obj18.trackOpen = null != feedbackSettings ? feedbackSettings.onFeedbackShown : () => {};
          obj18.onFeedbackChanged = callback1;
          tmp18Result = closure_11(tmp11(tmp12[17]).FeedbackForm, obj18);
        }
        tmp17 = obj16.rating === FeedbackRating.GOOD || null != obj16.reason;
      }
      let obj2 = guildId(ref[15]);
    };
