// === Module 13196: UserProfileActivityTab ===

// Module 13196 (UserProfileActivityTab)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4632 */;
import UserProfileRecentActivityCardDefault from "UserProfileRecentActivityCard" /* 13201 */;
import noop from "module_19" /* 19 */;

require = fn;
function UserProfileActivityTabSkeleton() {
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
}
function Section(introText) {
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
}
function RecentActivityIntroText() {
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
          const obj = learnMore(8488);
          obj2.href = closure_1_1(2024).getArticleURL(constants.ACTIVITY_STATUS_SETTINGS);
          return obj.handleClick(obj2);
        },
        children
      }, id);
    }
  });
}
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { section: { gap: nativeDefault.space.PX_16 }, sectionHeading: null, introText: null, learnMore: null, loading: null, loadingRow: null, loadingThumbnail: null, loadingLine: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.sectionHeading = { marginBottom: -nativeDefault.space.PX_8 };
let obj4 = { marginBottom: -nativeDefault.space.PX_8 };
obj2.introText = { marginTop: -nativeDefault.space.PX_8 };
let obj5 = { marginTop: -nativeDefault.space.PX_8 };
obj2.learnMore = { color: nativeDefault.colors.TEXT_LINK };
const obj6 = { color: nativeDefault.colors.TEXT_LINK };
obj2.loading = { gap: nativeDefault.space.PX_8 };
const obj7 = { gap: nativeDefault.space.PX_8 };
obj2.loadingRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12 };
let size = { width: 60, height: 60, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.loadingThumbnail = size;
const size1 = { width: 135, height: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.loadingLine = size1;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityTab.tsx");

export default function UserProfileActivityTab(user) {
  user = user.user;
  ({ currentUser, guildId, cardStyle } = user);
  ({ recent, isCurrentUser, hasCurrentActivity, hasRecentActivity } = cardStyle(13197)({ userId: user.id, currentUserId: currentUser.id, guildId }));
  if (!hasCurrentActivity) {
    if (!hasRecentActivity) {
      if (tmp4) {
        let tmp10Result = closure_5(UserProfileActivityTabSkeleton, {});
      } else {
        const tmp7 = user(13200);
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
    const intl = user(1114).intl;
    obj3.heading = intl.string(user(1114).t.J6STd9);
    const obj4 = { user, currentUser, guildId, style: cardStyle };
    obj3.children = closure_5(cardStyle(13129), obj4);
    hasCurrentActivity = closure_5(Section, obj3);
  }
  const items = [hasCurrentActivity, ];
  if (hasRecentActivity) {
    const obj5 = { heading: null, introText: null, children: null };
    const intl2 = user(1114).intl;
    obj5.heading = intl2.string(user(1114).t.jzgEoL);
    let tmp15Result;
    if (isCurrentUser) {
      tmp15Result = closure_5(RecentActivityIntroText, {});
    }
    obj5.introText = tmp15Result;
    obj5.children = recent.map((entry) => hasOwnProperty(UserProfileRecentActivityCardDefault, { user, entry, style: cardStyle }, entry.id));
    hasRecentActivity = closure_5(Section, obj5);
  }
  items[1] = hasRecentActivity;
  tmp10Result = closure_6(closure_7, { children: items });
  const obj = { userId: user.id, currentUserId: currentUser.id, guildId };
  const tmp3 = cardStyle(13197)({ userId: user.id, currentUserId: currentUser.id, guildId });
};