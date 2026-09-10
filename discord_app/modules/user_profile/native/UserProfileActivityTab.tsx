// discord_app/modules/user_profile/native/UserProfileActivityTab.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import UserProfileRecentActivityCardDefault from "UserProfileRecentActivityCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function UserProfileActivityTabSkeleton() {
  const tmp = closure_8();
  closure_0 = tmp;
  let obj = {
    style: tmp.loading,
    children: Array.from({ length: 8 }).map((item, index) => {
      let obj = { style: closure_0.loadingRow, children: null };
      obj = { style: closure_0.loadingThumbnail };
      const items = [hasOwnProperty(View, obj)];
      obj = { style: closure_0.loadingLine };
      items[1] = hasOwnProperty(View, obj);
      obj.children = items;
      return timestampProducer(View, obj, index);
    }),
  };
  return closure_5(View, obj);
}
function Section(introText) {
  introText = introText.introText;
  ({ heading, children } = introText);
  const tmp = closure_8();
  let obj = { style: tmp.section, children: null };
  obj = {
    style: tmp.sectionHeading,
    variant: "text-sm/medium",
    color: "text-strong",
    accessibilityRole: "header",
    lineClamp: 1,
    children: heading,
  };
  const items = [hasOwnProperty(Text_Text.Text, obj), ,];
  let tmp4Result = null != introText;
  if (tmp4Result) {
    obj = { style: tmp.introText, variant: "text-xs/medium", children: introText };
    tmp4Result = hasOwnProperty(Text_Text.Text, obj);
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
      return hasOwnProperty(
        Text_Text.Text,
        {
          variant: "text-xs/medium",
          style: learnMore.learnMore,
          accessibilityRole: "link",
          onPress() {
            learnMore(8435);
            const obj = { href: closure_1_1(2024).getArticleURL(constants.ACTIVITY_STATUS_SETTINGS) };
            return obj.handleClick(obj);
          },
          children,
        },
        id,
      );
    },
  });
}
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4605);
let createStyles = {
  section: null,
  sectionHeading: null,
  introText: null,
  learnMore: null,
  loading: null,
  loadingRow: null,
  loadingThumbnail: null,
  loadingLine: null,
};
createStyles = { gap: nativeDefault.space.PX_16 };
createStyles.section = createStyles;
createStyles.sectionHeading = { marginBottom: -nativeDefault.space.PX_8 };
let obj1 = { marginBottom: -nativeDefault.space.PX_8 };
createStyles.introText = { marginTop: -nativeDefault.space.PX_8 };
let obj2 = { marginTop: -nativeDefault.space.PX_8 };
createStyles.learnMore = { color: nativeDefault.colors.TEXT_LINK };
const obj3 = { color: nativeDefault.colors.TEXT_LINK };
createStyles.loading = { gap: nativeDefault.space.PX_8 };
const obj4 = { gap: nativeDefault.space.PX_8 };
createStyles.loadingRow = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
};
let size = {
  width: 60,
  height: 60,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
createStyles.loadingThumbnail = size;
const size1 = {
  width: 135,
  height: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
createStyles.loadingLine = size1;
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityTab.tsx");

export default function UserProfileActivityTab(user) {
  user = user.user;
  ({ currentUser, guildId, cardStyle } = user);
  let obj = { userId: user.id, currentUserId: currentUser.id, guildId };
  ({ recent, isCurrentUser, hasCurrentActivity, hasRecentActivity } = cardStyle(13136)(obj));
  if (!hasCurrentActivity) {
    if (!hasRecentActivity) {
      if (tmp4) {
        let tmp10Result = closure_5(UserProfileActivityTabSkeleton, {});
      } else {
        const tmp7 = user(13139);
        if (isCurrentUser) {
          tmp10Result = closure_5(tmp7.UserProfileActivityEmptyCurrentUser, {});
        } else {
          obj = { user, guildId, channelId: user.channelId };
          tmp10Result = closure_5(tmp7.UserProfileActivityEmptyOtherUser, obj);
        }
      }
    }
    return tmp10Result;
  }
  if (hasCurrentActivity) {
    obj = { heading: null, children: null };
    const intl = user(1114).intl;
    obj.heading = intl.string(user(1114).t.J6STd9);
    const obj1 = { user, currentUser, guildId, style: cardStyle };
    obj.children = closure_5(cardStyle(13068), obj1);
    hasCurrentActivity = closure_5(Section, obj);
  }
  const items = [hasCurrentActivity];
  if (hasRecentActivity) {
    const obj2 = { heading: null, introText: null, children: null };
    const intl2 = user(1114).intl;
    obj2.heading = intl2.string(user(1114).t.jzgEoL);
    let tmp15Result;
    if (isCurrentUser) {
      tmp15Result = closure_5(RecentActivityIntroText, {});
    }
    obj2.introText = tmp15Result;
    obj2.children = recent.map((entry) =>
      hasOwnProperty(UserProfileRecentActivityCardDefault, { user, entry, style: cardStyle }, entry.id),
    );
    hasRecentActivity = closure_5(Section, obj2);
  }
  items[1] = hasRecentActivity;
  tmp10Result = closure_6(closure_7, { children: items });
  const tmp3 = cardStyle(13136)(obj);
}
