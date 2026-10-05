// discord_app/modules/user_profile/native/UserProfileActivityTab.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import UserProfileRecentActivityCardDefault from "UserProfileRecentActivityCard.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, user;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let size1;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  section: obj2,
  sectionHeading: obj3,
  introText: obj4,
  learnMore: obj5,
  loading: obj6,
  loadingRow: obj7,
  loadingThumbnail: size,
  loadingLine: size1,
};
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: -nativeDefault.space.PX_8 };
obj4 = { marginTop: -nativeDefault.space.PX_8 };
obj5 = { color: nativeDefault.colors.TEXT_LINK };
obj6 = { gap: nativeDefault.space.PX_8 };
obj7 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
};
size = {
  width: 60,
  height: 60,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
size1 = {
  width: 135,
  height: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let first;
      let obj = require("react");
      const cResult = obj.c(8);
      const tmp2 = closure_8();
      _require = tmp2;
      const loading = tmp2.loading;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const _Array = Array;
        const arr = Array.from({ length: 8 });
        cResult[0] = arr;
        first = arr;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp2.loadingLine) {
        if (cResult[2] === tmp2.loadingRow) {
          let tmp4;
          if (cResult[3] === tmp2.loadingThumbnail) {
            tmp4 = cResult[4];
          }
          if (cResult[5] === tmp2.loading) {
            let tmp6;
            if (cResult[6] === tmp4) {
              tmp6 = cResult[7];
            }
            return tmp6;
          }
          let obj2 = { style: loading, children: tmp4 };
          const tmp9 = closure_5(View, obj2);
          cResult[5] = tmp2.loading;
          cResult[6] = tmp4;
          cResult[7] = tmp9;
          tmp6 = tmp9;
        }
      }
      const mapped = first.map((item, index) => {
        let items;
        const obj = { style: closure_0.loadingRow, children: items };
        items = [,];
        const obj2 = { style: closure_0.loadingThumbnail };
        items[0] = hasOwnProperty(View, obj2);
        const obj3 = { style: closure_0.loadingLine };
        items[1] = hasOwnProperty(View, obj3);
        return metroRequire(View, obj, index);
      });
      cResult[1] = tmp2.loadingLine;
      cResult[2] = tmp2.loadingRow;
      cResult[3] = tmp2.loadingThumbnail;
      cResult[4] = mapped;
      tmp4 = mapped;
    }
  : () => {
      let arr;
      const tmp = closure_8();
      let closure_0 = tmp;
      let obj = {
        style: tmp.loading,
        children: arr.map((item, index) => {
          let items;
          const obj = { style: closure_0.loadingRow, children: items };
          items = [,];
          const obj2 = { style: closure_0.loadingThumbnail };
          items[0] = hasOwnProperty(View, obj2);
          const obj3 = { style: closure_0.loadingLine };
          items[1] = hasOwnProperty(View, obj3);
          return metroRequire(View, obj, index);
        }),
      };
      arr = Array.from({ length: 8 });
      return closure_5(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let heading;
      let introText;
      let items;
      const obj = react2;
      const cResult = obj.c(11);
      ({ heading, introText, children } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] === heading) {
        let tmp5;
        if (cResult[1] === tmp4.sectionHeading) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === introText) {
          let tmp7;
          if (cResult[4] === tmp4.introText) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === children) {
            if (cResult[7] === tmp4.section) {
              if (cResult[8] === tmp5) {
                let tmp11;
                if (cResult[9] === tmp7) {
                  tmp11 = cResult[10];
                }
                return tmp11;
              }
            }
          }
          const obj2 = { style: tmp4.section, children: items };
          items = [tmp5, tmp7, children];
          const tmp14 = metroRequire(View, obj2);
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
      const obj4 = {
        style: tmp4.sectionHeading,
        variant: "text-sm/medium",
        color: "text-strong",
        accessibilityRole: "header",
        lineClamp: 1,
        children: heading,
      };
      const tmp6 = hasOwnProperty(Text_Text.Text, obj4);
      cResult[0] = heading;
      cResult[1] = tmp4.sectionHeading;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (introText) => {
      let children;
      let heading;
      let items;
      introText = introText.introText;
      ({ heading, children } = introText);
      const tmp = closure_8();
      const obj = { style: tmp.section, children: items };
      items = [, ,];
      const obj2 = {
        style: tmp.sectionHeading,
        variant: "text-sm/medium",
        color: "text-strong",
        accessibilityRole: "header",
        lineClamp: 1,
        children: heading,
      };
      items[0] = hasOwnProperty(Text_Text.Text, obj2);
      let tmp4Result = null != introText;
      if (tmp4Result) {
        const obj3 = { style: tmp.introText, variant: "text-xs/medium", children: introText };
        tmp4Result = hasOwnProperty(Text_Text.Text, obj3);
      }
      items[1] = tmp4Result;
      items[2] = children;
      return metroRequire(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let learnMore;
      let tmp5;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(2);
      const tmp4 = closure_8();
      _require = tmp4;
      if (cResult[0] !== tmp4) {
        const intl = tmp(1126).intl;
        let obj2 = {
          learnMoreHook(children, id) {
            let obj = {
              variant: "text-xs/medium",
              style: learnMore.learnMore,
              accessibilityRole: "link",
              onPress() {
                let obj2;
                const obj = { href: obj2.getArticleURL(constants.ACTIVITY_STATUS_SETTINGS) };
                const handleClick = learnMore(closure_1_2[10]).handleClick;
                learnMore(closure_1_2[10]);
                obj2 = closure_1_1(closure_1_2[11]);
                return handleClick(obj);
              },
              children,
            };
            return hasOwnProperty(Text_Text.Text, obj, id);
          },
        };
        const formatResult = intl.format(tmp(1126).t["4bk9Ak"], obj2);
        cResult[0] = tmp4;
        cResult[1] = formatResult;
        tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      let learnMore;
      _require = closure_8();
      const intl = require("intl").intl;
      let obj = {
        learnMoreHook(children, id) {
          let obj = {
            variant: "text-xs/medium",
            style: learnMore.learnMore,
            accessibilityRole: "link",
            onPress() {
              let obj2;
              const obj = { href: obj2.getArticleURL(constants.ACTIVITY_STATUS_SETTINGS) };
              const handleClick = learnMore(closure_1_2[10]).handleClick;
              learnMore(closure_1_2[10]);
              obj2 = closure_1_1(closure_1_2[11]);
              return handleClick(obj);
            },
            children,
          };
          return hasOwnProperty(Text_Text.Text, obj, id);
        },
      };
      return intl.format(require("intl").t["4bk9Ak"], obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let cardStyle;
      let channelId;
      let currentUser;
      let guildId;
      let hasCurrentActivity;
      let hasRecentActivity;
      let intl;
      let intl2;
      let isCurrentUser;
      let items;
      let obj6;
      let recent;
      let tmp22Result;
      let obj = user(576);
      const cResult = obj.c(25);
      user = user.user;
      ({ currentUser, guildId, channelId, cardStyle } = user);
      if (cResult[0] === currentUser.id) {
        if (cResult[1] === guildId) {
          let tmp4;
          let tmp7;
          if (cResult[2] === user.id) {
            tmp4 = cResult[3];
          }
          const tmp6 = cardStyle(12916)(tmp4);
          ({ recent, isCurrentUser, hasCurrentActivity, hasRecentActivity } = tmp6);
          if (!hasCurrentActivity) {
            if (!hasRecentActivity) {
              if (tmp6.isFetching) {
                let tmp12;
                const _Symbol = Symbol;
                if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp15 = closure_5(closure_9, {});
                  cResult[4] = tmp15;
                  tmp12 = tmp15;
                } else {
                  tmp12 = cResult[4];
                }
                tmp7 = tmp12;
              } else {
                let tmp8Result;
                if (cResult[5] === channelId) {
                  if (cResult[6] === guildId) {
                    if (cResult[7] === isCurrentUser) {
                      if (cResult[8] === user) {
                        tmp7 = cResult[9];
                      }
                    }
                  }
                }
                const tmpResult = user(12919);
                if (isCurrentUser) {
                  tmp8Result = closure_5(tmpResult.UserProfileActivityEmptyCurrentUser, {});
                } else {
                  const obj2 = { user, guildId, channelId };
                  tmp8Result = closure_5(tmpResult.UserProfileActivityEmptyOtherUser, obj2);
                }
                cResult[5] = channelId;
                cResult[6] = guildId;
                cResult[7] = isCurrentUser;
                cResult[8] = user;
                cResult[9] = tmp8Result;
                tmp7 = tmp8Result;
              }
            }
            return tmp7;
          }
          if (cResult[10] === cardStyle) {
            if (cResult[11] === currentUser) {
              if (cResult[12] === guildId) {
                if (cResult[13] === hasCurrentActivity) {
                  let tmp16;
                  if (cResult[14] === user) {
                    tmp16 = cResult[15];
                  }
                  if (cResult[16] === cardStyle) {
                    if (cResult[17] === hasRecentActivity) {
                      if (cResult[18] === isCurrentUser) {
                        if (cResult[19] === recent) {
                          let tmp20;
                          if (cResult[20] === user) {
                            tmp20 = cResult[21];
                          }
                          if (cResult[22] === tmp16) {
                            let tmp26;
                            if (cResult[23] === tmp20) {
                              tmp26 = cResult[24];
                            }
                            tmp7 = tmp26;
                          }
                          const obj3 = { children: items };
                          items = [tmp16, tmp20];
                          const tmp29 = closure_6(closure_7, obj3);
                          cResult[22] = tmp16;
                          cResult[23] = tmp20;
                          cResult[24] = tmp29;
                          tmp26 = tmp29;
                        }
                      }
                    }
                  }
                  let tmp22Result2 = hasRecentActivity;
                  if (tmp22Result2) {
                    const obj4 = {
                      heading: intl2.string(user(1126).t.jzgEoL),
                      introText: tmp22Result,
                      children: recent.map((entry) => {
                        const obj = { user, entry, style: cardStyle };
                        return hasOwnProperty(UserProfileRecentActivityCardDefault, obj, entry.id);
                      }),
                    };
                    intl2 = tmp(1126).intl;
                    tmp22Result = undefined;
                    if (isCurrentUser) {
                      tmp22Result = closure_5(closure_11, {});
                    }
                    tmp22Result2 = closure_5(closure_10, obj4);
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
          if (tmp17) {
            const obj5 = { heading: intl.string(user(1126).t.J6STd9), children: closure_5(cardStyle(12817), obj6) };
            intl = tmp(1126).intl;
            obj6 = { user, currentUser, guildId, style: cardStyle };
            tmp17 = closure_5(closure_10, obj5);
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
      const obj7 = { userId: user.id, currentUserId: currentUser.id, guildId };
      cResult[0] = currentUser.id;
      cResult[1] = guildId;
      cResult[2] = user.id;
      cResult[3] = obj7;
      tmp4 = obj7;
    }
  : (user) => {
      let cardStyle;
      let currentUser;
      let guildId;
      let hasCurrentActivity;
      let hasRecentActivity;
      let intl;
      let intl2;
      let isCurrentUser;
      let obj4;
      let recent;
      let tmp15Result;
      user = user.user;
      ({ currentUser, guildId, cardStyle } = user);
      const channelId = user.channelId;
      let obj = { userId: user.id, currentUserId: currentUser.id, guildId };
      ({ recent, isCurrentUser, hasCurrentActivity, hasRecentActivity } = cardStyle(12916)(obj));
      cardStyle(12916)(obj);
      if (!hasCurrentActivity) {
        let tmp10Result;
        if (!hasRecentActivity) {
          if (tmp4) {
            tmp10Result = closure_5(closure_9, {});
          } else {
            const tmp7 = user(12919);
            if (isCurrentUser) {
              tmp10Result = closure_5(tmp7.UserProfileActivityEmptyCurrentUser, {});
            } else {
              const obj2 = { user, guildId, channelId };
              tmp10Result = closure_5(tmp7.UserProfileActivityEmptyOtherUser, obj2);
            }
          }
        }
        return tmp10Result;
      }
      if (hasCurrentActivity) {
        const obj3 = { heading: intl.string(user(1126).t.J6STd9), children: closure_5(cardStyle(12817), obj4) };
        intl = user(1126).intl;
        obj4 = { user, currentUser, guildId, style: cardStyle };
        hasCurrentActivity = closure_5(closure_10, obj3);
      }
      const items = [hasCurrentActivity];
      if (hasRecentActivity) {
        const obj5 = {
          heading: intl2.string(user(1126).t.jzgEoL),
          introText: tmp15Result,
          children: recent.map((entry) => {
            const obj = { user, entry, style: cardStyle };
            return hasOwnProperty(UserProfileRecentActivityCardDefault, obj, entry.id);
          }),
        };
        intl2 = user(1126).intl;
        tmp15Result = undefined;
        if (isCurrentUser) {
          tmp15Result = closure_5(closure_11, {});
        }
        hasRecentActivity = closure_5(closure_10, obj5);
      }
      items[1] = hasRecentActivity;
      tmp10Result = closure_6(closure_7, { children: items });
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityTab.tsx");

export default tmp5;
