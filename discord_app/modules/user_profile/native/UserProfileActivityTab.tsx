// === Module 13356: UserProfileActivityTab ===

// Module 13356 (UserProfileActivityTab)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import UserProfileRecentActivityCardDefault from "UserProfileRecentActivityCard" /* 13361 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { section: { gap: nativeDefault.space.PX_16 }, sectionHeading: null, introText: null, learnMore: null, loading: null, loadingRow: null, loadingThumbnail: null, loadingLine: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.sectionHeading = { marginBottom: -nativeDefault.space.PX_8 };
let obj4 = { marginBottom: -nativeDefault.space.PX_8 };
obj2.introText = { marginTop: -nativeDefault.space.PX_8 };
let obj5 = { marginTop: -nativeDefault.space.PX_8 };
obj2.learnMore = { color: nativeDefault.colors.TEXT_LINK };
let obj6 = { color: nativeDefault.colors.TEXT_LINK };
obj2.loading = { gap: nativeDefault.space.PX_8 };
let obj7 = { gap: nativeDefault.space.PX_8 };
obj2.loadingRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12 };
let size = { width: 60, height: 60, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.loadingThumbnail = size;
const size1 = { width: 135, height: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.loadingLine = size1;
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileActivityTabSkeleton() {
  const cResult = require("c").c(8);
  const tmp2 = closure_8();
  _require = tmp2;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Array = Array;
    const arr = Array.from({ length: 8 });
    cResult[0] = arr;
    let first = arr;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp2.loadingLine) {
    if (cResult[2] === tmp2.loadingRow) {
      if (cResult[3] === tmp2.loadingThumbnail) {
        let tmp4 = cResult[4];
      }
      if (cResult[5] === tmp2.loading) {
        if (cResult[6] === tmp4) {
          let tmp6 = cResult[7];
        }
        return tmp6;
      }
      const obj2 = { style: tmp2.loading, children: tmp4 };
      const tmp9 = closure_5(View, obj2);
      cResult[5] = tmp2.loading;
      cResult[6] = tmp4;
      cResult[7] = tmp9;
      tmp6 = tmp9;
    }
  }
  const mapped = first.map((item, index) => {
    const obj = { style: closure_0.loadingRow, children: null };
    const items = [hasOwnProperty(View, { style: closure_0.loadingThumbnail }), hasOwnProperty(View, { style: closure_0.loadingLine })];
    obj.children = items;
    return timestampProducer(View, obj, index);
  });
  cResult[1] = tmp2.loadingLine;
  cResult[2] = tmp2.loadingRow;
  cResult[3] = tmp2.loadingThumbnail;
  cResult[4] = mapped;
  tmp4 = mapped;
  let obj = require("c");
}) : (function UserProfileActivityTabSkeleton() {
  const tmp = closure_8();
  closure_0 = tmp;
  let obj = {
    style: tmp.loading,
    children: Array.from({ length: 8 }).map((item, index) => {
      const obj = { style: closure_0.loadingRow, children: null };
      const items = [hasOwnProperty(View, { style: closure_0.loadingThumbnail }), hasOwnProperty(View, { style: closure_0.loadingLine })];
      obj.children = items;
      return timestampProducer(View, obj, index);
    })
  };
  return closure_5(View, obj);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function Section(arg0) {
  const cResult = c.c(11);
  ({ heading, introText, children } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === heading) {
    if (cResult[1] === tmp4.sectionHeading) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === introText) {
      if (cResult[4] === tmp4.introText) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === children) {
        if (cResult[7] === tmp4.section) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp7) {
              let tmp11 = cResult[10];
            }
            return tmp11;
          }
        }
      }
      const obj2 = { style: tmp4.section, children: null };
      const items = [tmp5, tmp7, children];
      obj2.children = items;
      const tmp14 = timestampProducer(View, obj2);
      cResult[6] = children;
      cResult[7] = tmp4.section;
      cResult[8] = tmp5;
      cResult[9] = tmp7;
      cResult[10] = tmp14;
      tmp11 = tmp14;
    }
    let tmp9 = null != introText;
    if (tmp9) {
      const obj3 = { style: tmp4.introText, variant: "text-xs/medium", children: introText };
      tmp9 = hasOwnProperty(Text_Text.Text, obj3);
    }
    cResult[3] = introText;
    cResult[4] = tmp4.introText;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = hasOwnProperty(Text_Text.Text, { style: tmp4.sectionHeading, variant: "text-sm/medium", color: "text-strong", accessibilityRole: "header", lineClamp: 1, children: heading });
  cResult[0] = heading;
  cResult[1] = tmp4.sectionHeading;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj4 = { style: tmp4.sectionHeading, variant: "text-sm/medium", color: "text-strong", accessibilityRole: "header", lineClamp: 1, children: heading };
}) : (function Section(introText) {
  introText = introText.introText;
  ({ heading, children } = introText);
  const tmp = closure_8();
  const obj = { style: tmp.section, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { style: tmp.sectionHeading, variant: "text-sm/medium", color: "text-strong", accessibilityRole: "header", lineClamp: 1, children: heading }), , ];
  let tmp4Result = null != introText;
  if (tmp4Result) {
    const obj3 = { style: tmp.introText, variant: "text-xs/medium", children: introText };
    tmp4Result = hasOwnProperty(Text_Text.Text, obj3);
  }
  items[1] = tmp4Result;
  items[2] = children;
  obj.children = items;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function RecentActivityIntroText() {
  const cResult = require("c").c(2);
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] !== tmp4) {
    const intl = tmp(1126).intl;
    let obj2 = {
      learnMoreHook(children, id) {
          return hasOwnProperty(Text_Text.Text, {
            variant: "text-xs/medium",
            style: learnMore.learnMore,
            accessibilityRole: "link",
            onPress() {
              const obj2 = { href: null };
              const obj = learnMore(8490);
              obj2.href = closure_1_1(2128).getArticleURL(constants.ACTIVITY_STATUS_SETTINGS);
              return obj.handleClick(obj2);
            },
            children
          }, id);
        }
    };
    const formatResult = intl.format(tmp(1126).t["4bk9Ak"], obj2);
    cResult[0] = tmp4;
    cResult[1] = formatResult;
    let tmp5 = formatResult;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function RecentActivityIntroText() {
  _require = closure_8();
  const intl = require("util").intl;
  return intl.format(require("util").t["4bk9Ak"], {
    learnMoreHook(children, id) {
      return hasOwnProperty(Text_Text.Text, {
        variant: "text-xs/medium",
        style: learnMore.learnMore,
        accessibilityRole: "link",
        onPress() {
          const obj2 = { href: null };
          const obj = learnMore(8490);
          obj2.href = closure_1_1(2128).getArticleURL(constants.ACTIVITY_STATUS_SETTINGS);
          return obj.handleClick(obj2);
        },
        children
      }, id);
    }
  });
});
ReactCompilerGating = fn(558);
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12 };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileActivityTab(user) {
  const cResult = user(576).c(25);
  user = user.user;
  ({ currentUser, guildId, channelId, cardStyle } = user);
  if (cResult[0] === currentUser.id) {
    if (cResult[1] === guildId) {
      if (cResult[2] === user.id) {
        let tmp4 = cResult[3];
      }
      const tmp6 = cardStyle(13357)(tmp4);
      ({ recent, isCurrentUser, hasCurrentActivity, hasRecentActivity } = tmp6);
      if (!hasCurrentActivity) {
        if (!hasRecentActivity) {
          if (tmp6.isFetching) {
            const _Symbol = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp14 = closure_5(closure_9, {});
              cResult[4] = tmp14;
            }
          } else {
            if (cResult[5] === channelId) {
              if (cResult[6] === guildId) {
                if (cResult[7] === isCurrentUser) {
                  if (cResult[8] === user) {
                    return cResult[9];
                  }
                }
              }
            }
            let obj2 = tmp(13360);
            if (isCurrentUser) {
              obj2 = {};
              let tmp7Result = closure_5(obj2.UserProfileActivityEmptyCurrentUser, obj2);
            } else {
              const obj3 = { user, guildId, channelId };
              tmp7Result = closure_5(obj2.UserProfileActivityEmptyOtherUser, obj3);
            }
            cResult[5] = channelId;
            cResult[6] = guildId;
            cResult[7] = isCurrentUser;
            cResult[8] = user;
            cResult[9] = tmp7Result;
          }
        }
      }
      if (cResult[10] === cardStyle) {
        if (cResult[11] === currentUser) {
          if (cResult[12] === guildId) {
            if (cResult[13] === hasCurrentActivity) {
              if (cResult[14] === user) {
                let tmp16 = cResult[15];
              }
              if (cResult[16] === cardStyle) {
                if (cResult[17] === hasRecentActivity) {
                  if (cResult[18] === isCurrentUser) {
                    if (cResult[19] === recent) {
                      if (cResult[20] === user) {
                        let tmp20 = cResult[21];
                      }
                      if (cResult[22] === tmp16) {
                      }
                      const obj4 = { children: null };
                      const items = [tmp16, tmp20];
                      obj4.children = items;
                      const tmp29 = closure_6(closure_7, obj4);
                      cResult[22] = tmp16;
                      cResult[23] = tmp20;
                      cResult[24] = tmp29;
                    }
                  }
                }
              }
              let tmp22Result2 = hasRecentActivity;
              if (hasRecentActivity) {
                const obj5 = { heading: null, introText: null, children: null };
                const intl2 = tmp(1126).intl;
                obj5.heading = intl2.string(tmp(1126).t.jzgEoL);
                let tmp22Result;
                if (isCurrentUser) {
                  tmp22Result = closure_5(closure_11, {});
                }
                obj5.introText = tmp22Result;
                obj5.children = recent.map((entry) => hasOwnProperty(UserProfileRecentActivityCardDefault, { user, entry, style: cardStyle }, entry.id));
                tmp22Result2 = closure_5(closure_10, obj5);
              }
              cResult[16] = cardStyle;
              cResult[17] = hasRecentActivity;
              cResult[18] = isCurrentUser;
              cResult[19] = recent;
              cResult[20] = user;
              cResult[21] = tmp22Result2;
              tmp20 = tmp22Result2;
            }
          }
        }
      }
      let tmp17 = hasCurrentActivity;
      if (hasCurrentActivity) {
        const obj6 = { heading: null, children: null };
        const intl = tmp(1126).intl;
        obj6.heading = intl.string(tmp(1126).t.J6STd9);
        const obj7 = { user, currentUser, guildId, style: cardStyle };
        obj6.children = closure_5(cardStyle(13112), obj7);
        tmp17 = closure_5(closure_10, obj6);
      }
      cResult[10] = cardStyle;
      cResult[11] = currentUser;
      cResult[12] = guildId;
      cResult[13] = hasCurrentActivity;
      cResult[14] = user;
      cResult[15] = tmp17;
      tmp16 = tmp17;
    }
  }
  const obj8 = { userId: user.id, currentUserId: currentUser.id, guildId };
  cResult[0] = currentUser.id;
  cResult[1] = guildId;
  cResult[2] = user.id;
  cResult[3] = obj8;
  tmp4 = obj8;
  const obj = user(576);
}) : (function UserProfileActivityTab(user) {
  user = user.user;
  ({ currentUser, guildId, cardStyle } = user);
  ({ recent, isCurrentUser, hasCurrentActivity, hasRecentActivity } = cardStyle(13357)({ userId: user.id, currentUserId: currentUser.id, guildId }));
  if (!hasCurrentActivity) {
    if (!hasRecentActivity) {
      if (tmp4) {
        let tmp10Result = closure_5(closure_9, {});
      } else {
        const tmp7 = user(13360);
        if (isCurrentUser) {
          tmp10Result = closure_5(tmp7.UserProfileActivityEmptyCurrentUser, {});
        } else {
          const obj2 = { user, guildId, channelId: user.channelId };
          tmp10Result = closure_5(tmp7.UserProfileActivityEmptyOtherUser, obj2);
        }
      }
    }
    return tmp10Result;
  }
  if (hasCurrentActivity) {
    const obj3 = { heading: null, children: null };
    const intl = user(1126).intl;
    obj3.heading = intl.string(user(1126).t.J6STd9);
    const obj4 = { user, currentUser, guildId, style: cardStyle };
    obj3.children = closure_5(cardStyle(13112), obj4);
    hasCurrentActivity = closure_5(closure_10, obj3);
  }
  const items = [hasCurrentActivity, ];
  if (hasRecentActivity) {
    const obj5 = { heading: null, introText: null, children: null };
    const intl2 = user(1126).intl;
    obj5.heading = intl2.string(user(1126).t.jzgEoL);
    let tmp15Result;
    if (isCurrentUser) {
      tmp15Result = closure_5(closure_11, {});
    }
    obj5.introText = tmp15Result;
    obj5.children = recent.map((entry) => hasOwnProperty(UserProfileRecentActivityCardDefault, { user, entry, style: cardStyle }, entry.id));
    hasRecentActivity = closure_5(closure_10, obj5);
  }
  items[1] = hasRecentActivity;
  tmp10Result = closure_6(closure_7, { children: items });
  const obj = { userId: user.id, currentUserId: currentUser.id, guildId };
  const tmp3 = cardStyle(13357)({ userId: user.id, currentUserId: currentUser.id, guildId });
});