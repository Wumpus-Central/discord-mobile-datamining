// === Module 10578: UserProfileAboutMeCard ===

// Module 10578 (UserProfileAboutMeCard)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import KeyboardTypes from "KeyboardTypes" /* 1629 */;
import useToken from "useToken" /* 4779 */;
import ChatInputUtils from "ChatInputUtils" /* 4946 */;
import Text_Text from "Text/Text" /* 5087 */;
import GuildIconDefault from "GuildIcon" /* 6165 */;
import UserProfileCardDefault from "UserProfileCard" /* 6897 */;
import UserProfileAnalyticsContext from "UserProfileAnalyticsContext" /* 8298 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8474 */;
import BioTextDefault from "BioText" /* 10579 */;
import useFriendsSinceDate from "useFriendsSinceDate" /* 10581 */;
import UserProfileAboutMeCardCommandDefault from "UserProfileAboutMeCardCommand" /* 10583 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;

require = fn;
const View = fn(17).View;
const Constants = fn(6898);
({ DIVIDER_DOT: closure_8, UserProfileThemeTypes } = Constants);
const Routes = fn(1085).Routes;
const AppLauncherRouteName = fn(1502).AppLauncherRouteName;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = { headingVariant: "text-sm/semibold", textVariant: "text-md/normal", headingSpacing: 8, rowGap: 24, columnGap: 6 };
const dependencyMap2 = { [UserProfileThemeTypes.PREVIEW]: { headingVariant: "text-xs/semibold", textVariant: "text-sm/normal", headingSpacing: 4, rowGap: 12, columnGap: 3 } };
const createStyles = fn(5091);
let closure_16 = createStyles.createStyles({ card: { flexDirection: "column" }, textWithIcon: { flexDirection: "row", alignItems: "center" }, memberJoinDates: { flexDirection: "row", flexWrap: "wrap" }, slashCommands: { flex: 1, flexDirection: "row", flexWrap: "wrap", marginBottom: 12 }, policyLinks: { rowGap: 8 } });
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function Heading(arg0) {
  const cResult = c.c(8);
  ({ children, themeType } = arg0);
  if (cResult[0] !== themeType) {
    let tmp6;
    if (null != themeType) {
      tmp6 = dependencyMap2[themeType];
    }
    if (tmp6 == null) {
      tmp6 = closure_14;
    }
    cResult[0] = themeType;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  ({ headingSpacing, headingVariant } = tmp4);
  let token = useToken.useToken(nativeDefault.modules.mobile.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE);
  if (token == null) {
    token = headingVariant;
  }
  if (cResult[2] !== headingSpacing) {
    const obj2 = { marginBottom: headingSpacing };
    cResult[2] = headingSpacing;
    cResult[3] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === children) {
    if (cResult[5] === token) {
      if (cResult[6] === tmp9) {
        let tmp10 = cResult[7];
      }
      return tmp10;
    }
  }
  const tmp11 = closure_1_11(Text_Text.Text, { accessibilityRole: "header", variant: token, color: "user-profile-about-me-heading-text", style: tmp9, children });
  cResult[4] = children;
  cResult[5] = token;
  cResult[6] = tmp9;
  cResult[7] = tmp11;
  tmp10 = tmp11;
  const tmpResult = useToken;
}) : (function Heading(children) {
  const themeType = children.themeType;
  let tmp;
  if (null != themeType) {
    tmp = dependencyMap2[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  ({ headingVariant, headingSpacing } = tmp);
  let token = useToken.useToken(nativeDefault.modules.mobile.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE);
  if (token == null) {
    token = headingVariant;
  }
  return closure_1_11(Text_Text.Text, { accessibilityRole: "header", variant: token, color: "user-profile-about-me-heading-text", style: { marginBottom: headingSpacing }, children: children.children });
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function TextWithIcon(arg0) {
  const cResult = c.c(15);
  ({ icon, children, themeType, accessibilityLabel } = arg0);
  const tmp4 = closure_16();
  if (cResult[0] !== themeType) {
    let tmp7;
    if (null != themeType) {
      tmp7 = dependencyMap2[themeType];
    }
    if (tmp7 == null) {
      tmp7 = closure_14;
    }
    cResult[0] = themeType;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  ({ textVariant, columnGap } = tmp5);
  if (cResult[2] !== columnGap) {
    const obj2 = { columnGap };
    cResult[2] = columnGap;
    cResult[3] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.textWithIcon) {
    if (cResult[5] === tmp9) {
      let tmp10 = cResult[6];
    }
    if (cResult[7] === children) {
      if (cResult[8] === textVariant) {
        let tmp11 = cResult[9];
      }
      if (cResult[10] === accessibilityLabel) {
        if (cResult[11] === icon) {
          if (cResult[12] === tmp10) {
            if (cResult[13] === tmp11) {
              let tmp14 = cResult[14];
            }
            return tmp14;
          }
        }
      }
      const obj3 = { style: tmp10, accessible: true, accessibilityLabel, children: null };
      const items = [icon, tmp11];
      obj3.children = items;
      const tmp17 = __initData(View, obj3);
      cResult[10] = accessibilityLabel;
      cResult[11] = icon;
      cResult[12] = tmp10;
      cResult[13] = tmp11;
      cResult[14] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { variant: textVariant, color: "text-default", children };
    const tmp13 = closure_1_11(Text_Text.Text, obj4);
    cResult[7] = children;
    cResult[8] = textVariant;
    cResult[9] = tmp13;
    tmp11 = tmp13;
  }
  const items1 = [tmp4.textWithIcon, tmp9];
  cResult[4] = tmp4.textWithIcon;
  cResult[5] = tmp9;
  cResult[6] = items1;
  tmp10 = items1;
}) : (function TextWithIcon(themeType) {
  themeType = themeType.themeType;
  ({ icon, children, accessibilityLabel } = themeType);
  let tmp2;
  if (null != themeType) {
    tmp2 = dependencyMap2[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_14;
  }
  const obj = { style: null, accessible: true, accessibilityLabel, children: null };
  const items = [closure_16().textWithIcon, { columnGap: tmp2.columnGap }];
  obj.style = items;
  const items1 = [icon, closure_1_11(Text_Text.Text, { variant: tmp2.textVariant, color: "text-default", children })];
  obj.children = items1;
  return __initData(View, obj);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function Bio(arg0) {
  const cResult = c.c(17);
  ({ userId, displayProfile, pendingBio, themeType, lineClamp } = arg0);
  if (cResult[0] !== themeType) {
    let tmp6;
    if (null != themeType) {
      tmp6 = dependencyMap2[themeType];
    }
    if (tmp6 == null) {
      tmp6 = closure_14;
    }
    cResult[0] = themeType;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  const textVariant = tmp4.textVariant;
  const context = UserProfileAnalyticsContext.useUserProfileAnalyticsContext().context;
  if (cResult[2] === displayProfile) {
    if (cResult[3] === pendingBio) {
      let tmp8 = cResult[4];
    }
    if (null != tmp8) {
      if ("" !== tmp8) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.ZzAR2Y);
          cResult[5] = stringResult;
          let tmp11 = stringResult;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] !== themeType) {
          const obj2 = { themeType, children: tmp11 };
          const tmp16 = closure_1_11(closure_17, obj2);
          cResult[6] = themeType;
          cResult[7] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[7];
        }
        let guildId;
        if (context != null) {
          guildId = context.guildId;
        }
        if (cResult[8] === tmp8) {
          if (cResult[9] === lineClamp) {
            if (cResult[10] === guildId) {
              if (cResult[11] === textVariant) {
                if (cResult[12] === userId) {
                  let tmp18 = cResult[13];
                }
                if (cResult[14] === tmp13) {
                  if (cResult[15] === tmp18) {
                    let tmp22 = cResult[16];
                  }
                  return tmp22;
                }
                const obj3 = { children: null };
                const items = [tmp13, tmp18];
                obj3.children = items;
                const tmp25 = __initData(View, obj3);
                cResult[14] = tmp13;
                cResult[15] = tmp18;
                cResult[16] = tmp25;
                tmp22 = tmp25;
              }
            }
          }
        }
        const obj4 = { bio: tmp8, userId, guildId, textVariant, lineClamp };
        const tmp21 = closure_1_11(BioTextDefault, obj4);
        cResult[8] = tmp8;
        cResult[9] = lineClamp;
        cResult[10] = guildId;
        cResult[11] = textVariant;
        cResult[12] = userId;
        cResult[13] = tmp21;
        tmp18 = tmp21;
      }
    }
    return null;
  }
  let previewBio;
  if (displayProfile != null) {
    previewBio = displayProfile.getPreviewBio(pendingBio);
  }
  cResult[2] = displayProfile;
  cResult[3] = pendingBio;
  cResult[4] = previewBio;
  tmp8 = previewBio;
  const tmpResult = UserProfileAnalyticsContext;
}) : (function Bio(arg0) {
  ({ displayProfile, themeType } = arg0);
  let tmp;
  ({ userId, pendingBio, lineClamp } = arg0);
  if (null != themeType) {
    tmp = dependencyMap2[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  const context = UserProfileAnalyticsContext.useUserProfileAnalyticsContext().context;
  let previewBio;
  if (displayProfile != null) {
    previewBio = displayProfile.getPreviewBio(pendingBio);
  }
  let tmp8Result = null;
  if (null != previewBio) {
    tmp8Result = null;
    if ("" !== previewBio) {
      const obj2 = { themeType, children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.ZzAR2Y);
      const items = [closure_1_11(closure_17, obj2), ];
      const obj3 = { bio: previewBio, userId, guildId: null, textVariant: null, lineClamp: null };
      let guildId;
      if (context != null) {
        guildId = context.guildId;
      }
      const obj4 = { children: null };
      obj3.guildId = guildId;
      obj3.textVariant = tmp.textVariant;
      obj3.lineClamp = lineClamp;
      items[1] = closure_1_11(BioTextDefault, obj3);
      obj4.children = items;
      tmp8Result = __initData(View, obj4);
    }
  }
  return tmp8Result;
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberJoinDates(userId) {
  const cResult = userId(576).c(47);
  userId = userId.userId;
  const guildId = userId.guildId;
  const themeType = userId.themeType;
  const tmp4 = closure_16();
  if (cResult[0] !== themeType) {
    let tmp7;
    if (null != themeType) {
      tmp7 = dependencyMap2[themeType];
    }
    if (tmp7 == null) {
      tmp7 = closure_14;
    }
    cResult[0] = themeType;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  ({ textVariant, columnGap } = tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    class P {
      constructor() {
        return closure_1_5.locale;
      }
    }
    cResult[2] = items;
    cResult[3] = P;
    let tmp10 = P;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    class P {
      constructor() {
        return closure_1_5.locale;
      }
    }
    cResult[4] = items1;
    let tmp13 = items1;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    class R {
      constructor() {
        guild = null;
        if (null != guildId) {
          tmp3 = closure_7;
          guild = closure_7.getGuild(tmp);
        }
        return guild;
      }
    }
    cResult[5] = guildId;
    class P {
      constructor() {
        return closure_1_5.locale;
      }
    }
    cResult[6] = R;
  } else {
    class R {
      constructor() {
        guild = null;
        if (null != guildId) {
          tmp3 = closure_7;
          guild = closure_7.getGuild(tmp);
        }
        return guild;
      }
    }
  }
  const tmpResult = userId(504);
  const stateFromStores1 = userId(504).useStateFromStores(tmp13, R);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        guild = null;
        if (null != guildId) {
          tmp3 = closure_7;
          guild = closure_7.getGuild(tmp);
        }
        return guild;
      }
    }
    const items2 = [GuildMemberStore];
    class P {
      constructor() {
        return closure_1_5.locale;
      }
    }
    cResult[7] = items2;
    const tmp17 = items2;
  } else {
    class R {
      constructor() {
        guild = null;
        if (null != guildId) {
          tmp3 = closure_7;
          guild = closure_7.getGuild(tmp);
        }
        return guild;
      }
    }
  }
  if (cResult[8] === guildId) {
    class R {
      constructor() {
        guild = null;
        if (null != guildId) {
          tmp3 = closure_7;
          guild = closure_7.getGuild(tmp);
        }
        return guild;
      }
    }
    const stateFromStores2 = tmp(504).useStateFromStores(tmp17, U);
    class P {
      constructor() {
        return closure_1_5.locale;
      }
    }
    const tmpResult6 = tmp(504);
    const tmpResult7 = tmp(6869);
    const createdAtDate = tmpResult7.getCreatedAtDate(guildId(11).extractTimestamp(userId), stateFromStores);
    const obj6 = guildId(11);
    if (stateFromStores2 != null) {
      class R {
        constructor() {
          guild = null;
          if (null != guildId) {
            tmp3 = closure_7;
            guild = closure_7.getGuild(tmp);
          }
          return guild;
        }
      }
    }
    const createdAtDate1 = tmp(6869).getCreatedAtDate(tmp22, stateFromStores);
    const _Symbol = Symbol;
    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          guild = null;
          if (null != guildId) {
            tmp3 = closure_7;
            guild = closure_7.getGuild(tmp);
          }
          return guild;
        }
      }
      const stringResult = obj8.string(tmp(1126).t.a6XYD9);
      class P {
        constructor() {
          return closure_1_5.locale;
        }
      }
      cResult[25] = stringResult;
      const tmp25 = stringResult;
    } else {
      class R {
        constructor() {
          guild = null;
          if (null != guildId) {
            tmp3 = closure_7;
            guild = closure_7.getGuild(tmp);
          }
          return guild;
        }
      }
    }
    if (cResult[26] !== themeType) {
      class R {
        constructor() {
          guild = null;
          if (null != guildId) {
            tmp3 = closure_7;
            guild = closure_7.getGuild(tmp);
          }
          return guild;
        }
      }
      const obj2 = { themeType: null, children: null };
      class P {
        constructor() {
          return closure_1_5.locale;
        }
      }
      obj2.children = tmp25;
      const tmp29 = closure_11(closure_17, obj2);
      cResult[26] = themeType;
      cResult[27] = tmp29;
    } else {
      class R {
        constructor() {
          guild = null;
          if (null != guildId) {
            tmp3 = closure_7;
            guild = closure_7.getGuild(tmp);
          }
          return guild;
        }
      }
    }
    if (cResult[28] !== columnGap) {
      class R {
        constructor() {
          guild = null;
          if (null != guildId) {
            tmp3 = closure_7;
            guild = closure_7.getGuild(tmp);
          }
          return guild;
        }
      }
      tmp31[0] = columnGap;
      class P {
        constructor() {
          return closure_1_5.locale;
        }
      }
      cResult[29] = tmp31;
    } else {
      class R {
        constructor() {
          guild = null;
          if (null != guildId) {
            tmp3 = closure_7;
            guild = closure_7.getGuild(tmp);
          }
          return guild;
        }
      }
    }
    if (cResult[30] === tmp4.memberJoinDates) {
      class R {
        constructor() {
          guild = null;
          if (null != guildId) {
            tmp3 = closure_7;
            guild = closure_7.getGuild(tmp);
          }
          return guild;
        }
      }
      const _Symbol2 = Symbol;
      class P {
        constructor() {
          return closure_1_5.locale;
        }
      }
      const intl = tmp(1126).intl;
      const obj3 = { date: createdAtDate };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["9t7w53"], obj3);
      if (cResult[34] === createdAtDate) {
        class R {
          constructor() {
            guild = null;
            if (null != guildId) {
              tmp3 = closure_7;
              guild = closure_7.getGuild(tmp);
            }
            return guild;
          }
        }
      }
      const obj4 = { themeType, icon: tmp34, accessibilityLabel: formatToPlainStringResult, children: createdAtDate };
      const tmp39 = closure_11(closure_18, obj4);
      cResult[34] = createdAtDate;
      cResult[35] = formatToPlainStringResult;
      cResult[36] = themeType;
      cResult[37] = tmp39;
    }
    const items3 = [tmp4.memberJoinDates, tmp31];
    cResult[30] = tmp4.memberJoinDates;
    cResult[31] = tmp31;
    cResult[32] = items3;
    const tmpResult8 = tmp(6869);
  }
  class U {
    constructor() {
      member = null;
      if (null != guildId) {
        tmp3 = closure_6;
        tmp4 = userId;
        member = closure_6.getMember(tmp, userId);
      }
      return member;
    }
  }
  cResult[8] = guildId;
  cResult[9] = userId;
  cResult[10] = U;
  const tmpResult5 = userId(504);
}) : (function MemberJoinDates(userId) {
  userId = userId.userId;
  ({ guildId: importDefault, themeType } = userId);
  let tmp2;
  if (null != themeType) {
    tmp2 = dependencyMap2[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_14;
  }
  ({ textVariant, columnGap } = tmp2);
  const tmp = closure_16();
  const items = [LocaleStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => locale.locale);
  const obj = userId(504);
  const items1 = [GuildStore];
  const stateFromStores1 = userId(504).useStateFromStores(items1, () => {
    guild = null;
    if (null != importDefault) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  const obj2 = userId(504);
  const items2 = [GuildMemberStore];
  const stateFromStores2 = userId(504).useStateFromStores(items2, () => {
    let member = null;
    if (null != importDefault) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  });
  const obj3 = userId(504);
  const obj4 = userId(6869);
  const createdAtDate = obj4.getCreatedAtDate(SnowflakeUtilsDefault.extractTimestamp(userId), stateFromStores);
  let joinedAt;
  if (stateFromStores2 != null) {
    joinedAt = stateFromStores2.joinedAt;
  }
  const createdAtDate1 = userId(6869).getCreatedAtDate(joinedAt, stateFromStores);
  const obj7 = { themeType, children: null };
  const intl = tmp4(1126).intl;
  obj7.children = intl.string(userId(1126).t.a6XYD9);
  const items3 = [closure_11(closure_17, obj7), ];
  const obj8 = { style: null, children: null };
  const items4 = [tmp.memberJoinDates, { columnGap }];
  obj8.style = items4;
  const obj9 = { themeType, icon: closure_11(userId(10142).ClydeIcon, { size: "xs" }), accessibilityLabel: null, children: null };
  const intl2 = tmp4(1126).intl;
  obj9.accessibilityLabel = intl2.formatToPlainString(userId(1126).t["9t7w53"], { date: createdAtDate });
  obj9.children = createdAtDate;
  const items5 = [closure_11(closure_18, obj9), ];
  let tmp13Result = null != stateFromStores1 && null != createdAtDate1;
  if (tmp13Result) {
    const obj10 = { children: null };
    const obj11 = { variant: textVariant, color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
    const items6 = [closure_11(tmp4(5087).Text, obj11), ];
    const obj12 = { themeType, icon: null, accessibilityLabel: null, children: null };
    const obj13 = { guild: stateFromStores1, size: tmp4(6165).GuildIconSizes.XXSMALL };
    obj12.icon = closure_11(GuildIconDefault, obj13);
    const intl3 = tmp4(1126).intl;
    const obj14 = { guildName: stateFromStores1.name, date: createdAtDate1 };
    obj12.accessibilityLabel = intl3.formatToPlainString(tmp4(1126).t.FdLNDK, obj14);
    obj12.children = createdAtDate1;
    items6[1] = closure_11(closure_18, obj12);
    obj10.children = items6;
    tmp13Result = closure_12(closure_13, obj10);
    const tmp9Result = GuildIconDefault;
  }
  const obj15 = { children: null };
  items5[1] = tmp13Result;
  obj8.children = items5;
  items3[1] = closure_12(View, obj8);
  obj15.children = items3;
  return closure_12(View, obj15);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function FriendsSinceDate(arg0) {
  const cResult = c.c(11);
  ({ themeType, userId } = arg0);
  if (cResult[0] !== themeType) {
    let tmp6;
    if (null != themeType) {
      tmp6 = dependencyMap2[themeType];
    }
    if (tmp6 == null) {
      tmp6 = closure_14;
    }
    cResult[0] = themeType;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  const textVariant = tmp4.textVariant;
  const friendsSinceDate = useFriendsSinceDate.useFriendsSinceDate(userId);
  if (null == friendsSinceDate) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.wlTO8v);
      cResult[2] = stringResult;
      let tmp10 = stringResult;
    } else {
      tmp10 = cResult[2];
    }
    if (cResult[3] !== themeType) {
      const obj2 = { themeType, children: tmp10 };
      const tmp15 = closure_1_11(closure_17, obj2);
      cResult[3] = themeType;
      cResult[4] = tmp15;
      let tmp12 = tmp15;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] === friendsSinceDate) {
      if (cResult[6] === textVariant) {
        let tmp16 = cResult[7];
      }
      if (cResult[8] === tmp12) {
      }
      const obj3 = { children: null };
      const items = [tmp12, tmp16];
      obj3.children = items;
      const tmp22 = __initData(View, obj3);
      cResult[8] = tmp12;
      cResult[9] = tmp16;
      cResult[10] = tmp22;
    }
    const obj4 = { variant: textVariant, color: "text-default", children: friendsSinceDate };
    const tmp18 = closure_1_11(Text_Text.Text, obj4);
    cResult[5] = friendsSinceDate;
    cResult[6] = textVariant;
    cResult[7] = tmp18;
    tmp16 = tmp18;
  }
  const tmpResult = useFriendsSinceDate;
}) : (function FriendsSinceDate(themeType) {
  themeType = themeType.themeType;
  let tmp;
  if (null != themeType) {
    tmp = dependencyMap2[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  const friendsSinceDate = useFriendsSinceDate.useFriendsSinceDate(themeType.userId);
  let tmp6 = null;
  if (null != friendsSinceDate) {
    const obj2 = { children: null };
    const obj3 = { themeType, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.wlTO8v);
    const items = [closure_1_11(closure_17, obj3), ];
    const obj4 = { variant: tmp.textVariant, color: "text-default", children: friendsSinceDate };
    items[1] = closure_1_11(Text_Text.Text, obj4);
    obj2.children = items;
    tmp6 = __initData(View, obj2);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function PolicyLinks(arg0) {
  const cResult = c.c(16);
  ({ termsOfServiceUrl, privacyPolicyUrl, themeType } = arg0);
  const tmp4 = closure_16();
  if (null == termsOfServiceUrl) {
    if (null == privacyPolicyUrl) {
      return null;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.l6DP2n);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== themeType) {
    const obj2 = { themeType, children: first };
    const tmp11 = closure_1_11(closure_17, obj2);
    cResult[1] = themeType;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === termsOfServiceUrl) {
    if (cResult[4] === themeType) {
      let tmp12 = cResult[5];
    }
    if (cResult[6] === privacyPolicyUrl) {
      if (cResult[7] === themeType) {
        let tmp16 = cResult[8];
      }
      if (cResult[9] === tmp4.policyLinks) {
        if (cResult[10] === tmp12) {
          if (cResult[11] === tmp16) {
            let tmp20 = cResult[12];
          }
          if (cResult[13] === tmp8) {
          }
          const obj3 = { children: null };
          const items = [tmp8, tmp20];
          obj3.children = items;
          const tmp27 = __initData(View, obj3);
          cResult[13] = tmp8;
          cResult[14] = tmp20;
          cResult[15] = tmp27;
        }
      }
      const obj4 = { style: tmp4.policyLinks, children: null };
      const items1 = [tmp12, tmp16];
      obj4.children = items1;
      const tmp23 = __initData(View, obj4);
      cResult[9] = tmp4.policyLinks;
      cResult[10] = tmp12;
      cResult[11] = tmp16;
      cResult[12] = tmp23;
      tmp20 = tmp23;
    }
    let tmp17 = null != privacyPolicyUrl;
    if (tmp17) {
      const obj5 = { url: privacyPolicyUrl, label: null, themeType: null };
      const intl3 = util.intl;
      obj5.label = intl3.string(util.t.kH3JR5);
      obj5.themeType = themeType;
      tmp17 = closure_1_11(closure_23, obj5);
    }
    cResult[6] = privacyPolicyUrl;
    cResult[7] = themeType;
    cResult[8] = tmp17;
    tmp16 = tmp17;
  }
  let tmp13 = null != termsOfServiceUrl;
  if (tmp13) {
    const obj6 = { url: termsOfServiceUrl, label: null, themeType: null };
    const intl2 = util.intl;
    obj6.label = intl2.string(util.t.s7STcY);
    obj6.themeType = themeType;
    tmp13 = closure_1_11(closure_23, obj6);
  }
  cResult[3] = termsOfServiceUrl;
  cResult[4] = themeType;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (function PolicyLinks(arg0) {
  ({ termsOfServiceUrl, privacyPolicyUrl, themeType } = arg0);
  if (null != termsOfServiceUrl) {
    const obj = { themeType, children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t.l6DP2n);
    const items = [closure_1_11(closure_17, obj), ];
    const obj2 = { style: tmp.policyLinks, children: null };
    let tmp5Result = null != termsOfServiceUrl;
    if (tmp5Result) {
      const obj3 = { url: termsOfServiceUrl, label: null, themeType: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.s7STcY);
      obj3.themeType = themeType;
      tmp5Result = closure_1_11(closure_23, obj3);
    }
    const items1 = [tmp5Result, ];
    let tmp5Result2 = null != privacyPolicyUrl;
    if (tmp5Result2) {
      const obj4 = { url: privacyPolicyUrl, label: null, themeType: null };
      const intl3 = util.intl;
      obj4.label = intl3.string(util.t.kH3JR5);
      obj4.themeType = themeType;
      tmp5Result2 = closure_1_11(closure_23, obj4);
    }
    const obj5 = { children: null };
    items1[1] = tmp5Result2;
    obj2.children = items1;
    items[1] = __initData(View, obj2);
    obj5.children = items;
    let tmp3Result = __initData(View, obj5);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function PolicyLink(url) {
  const cResult = url(576).c(10);
  url = url.url;
  ({ label, themeType } = url);
  if (cResult[0] !== themeType) {
    let tmp6;
    if (null != themeType) {
      tmp6 = dependencyMap2[themeType];
    }
    if (tmp6 == null) {
      tmp6 = closure_14;
    }
    cResult[0] = themeType;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  const textVariant = tmp4.textVariant;
  if (cResult[2] !== url) {
    const fn = function s() {
      return MaskedLinkUtils.handleClick({ href: url });
    };
    cResult[2] = url;
    cResult[3] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === label) {
    if (cResult[5] === textVariant) {
      let tmp9 = cResult[6];
    }
    if (cResult[7] === tmp8) {
      if (cResult[8] === tmp9) {
        let tmp11 = cResult[9];
      }
      return tmp11;
    }
    const obj2 = { accessibilityRole: "link", onPress: tmp8, children: tmp9 };
    const tmp13 = closure_11(tmp(1200).PressableOpacity, obj2);
    cResult[7] = tmp8;
    cResult[8] = tmp9;
    cResult[9] = tmp13;
    tmp11 = tmp13;
  }
  const tmp10 = closure_11(url(5087).Text, { variant: textVariant, color: "text-link", children: label });
  cResult[4] = label;
  cResult[5] = textVariant;
  cResult[6] = tmp10;
  tmp9 = tmp10;
  const obj = url(576);
}) : (function PolicyLink(children) {
  ({ url: require, themeType } = children);
  let tmp;
  if (null != themeType) {
    tmp = dependencyMap2[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  return closure_11(native.PressableOpacity, {
    accessibilityRole: "link",
    onPress() {
      return MaskedLinkUtils.handleClick({ href });
    },
    children: closure_11(Text_Text.Text, { variant: tmp.textVariant, color: "text-link", children: children.label })
  });
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function BotSlashCommands(channel) {
  const cResult = channel(context[11]).c(26);
  channel = channel.channel;
  const themeType = channel.themeType;
  ({ applicationId, commandIds } = channel);
  const tmp4 = closure_16();
  analyticsLocations = analyticsLocations(context[26])().analyticsLocations;
  let obj = channel(context[11]);
  context = channel(context[15]).useUserProfileAnalyticsContext().context;
  let obj2 = channel(context[15]);
  ({ commands, application } = analyticsLocations(context[27])(channel, applicationId, commandIds));
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === application) {
      if (cResult[2] === channel.guild_id) {
        if (cResult[3] === channel.id) {
          if (cResult[4] === context) {
            let tmp6 = cResult[5];
          }
          if (null != commands) {
            if (0 !== commands.length) {
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(tmp2[16]).intl;
                const stringResult = intl.string(tmp(tmp2[16]).t["0hKkS+"]);
                cResult[6] = stringResult;
                let tmp8 = stringResult;
              } else {
                tmp8 = cResult[6];
              }
              if (cResult[7] !== themeType) {
                let obj3 = { themeType, children: tmp8 };
                const tmp13 = closure_11(closure_17, obj3);
                cResult[7] = themeType;
                class R {
                  constructor(arg0) {
                    obj = { application, channel, command: channel };
                    return jsx(closure_1(closure_2[35]), obj, channel.id);
                  }
                }
                cResult[8] = tmp13;
                let tmp10 = tmp13;
              } else {
                tmp10 = cResult[8];
              }
              if (cResult[9] === application) {
                if (cResult[10] === channel) {
                  if (cResult[11] === commands) {
                    if (cResult[16] === tmp4.slashCommands) {
                      if (cResult[17] === tmp15) {
                        let tmp19 = cResult[18];
                      }
                      if (cResult[19] === application) {
                        if (cResult[20] === tmp6) {
                          let tmp23 = cResult[21];
                        }
                        if (cResult[22] === tmp10) {
                          if (cResult[23] === tmp19) {
                            if (cResult[24] === tmp23) {
                              let tmp26 = cResult[25];
                            }
                            return tmp26;
                          }
                        }
                        let obj4 = { children: null };
                        const items = [tmp10, tmp19, ];
                        class R {
                          constructor(arg0) {
                            obj = { application, channel, command: channel };
                            return jsx(closure_1(closure_2[35]), obj, channel.id);
                          }
                        }
                        obj4.children = items;
                        const tmp29 = closure_12(View, obj4);
                        cResult[22] = tmp10;
                        cResult[23] = tmp19;
                        cResult[24] = tmp23;
                        cResult[25] = tmp29;
                        tmp26 = tmp29;
                      }
                      let tmp24 = null != application && null != application.bot;
                      if (tmp24) {
                        const obj5 = { size: "sm", variant: "tertiary", text: null, onPress: null };
                        const intl2 = tmp(tmp2[16]).intl;
                        obj5.text = intl2.string(tmp(tmp2[16]).t.VEfKyb);
                        obj5.onPress = tmp6;
                        tmp24 = closure_11(tmp(tmp2[36]).Button, obj5);
                      }
                      cResult[19] = application;
                      cResult[20] = tmp6;
                      class R {
                        constructor(arg0) {
                          obj = { application, channel, command: channel };
                          return jsx(closure_1(closure_2[35]), obj, channel.id);
                        }
                      }
                      cResult[21] = tmp24;
                      tmp23 = tmp24;
                    }
                    const obj6 = { style: tmp14, children: cResult[12] };
                    const tmp22 = closure_11(View, obj6);
                    class R {
                      constructor(arg0) {
                        obj = { application, channel, command: channel };
                        return jsx(closure_1(closure_2[35]), obj, channel.id);
                      }
                    }
                    cResult[16] = tmp4.slashCommands;
                    cResult[17] = cResult[12];
                    cResult[18] = tmp22;
                    tmp19 = tmp22;
                  }
                }
              }
              if (cResult[13] === application) {
                if (cResult[14] === channel) {
                  let tmp16 = cResult[15];
                }
                const mapped = commands.map(tmp16);
                cResult[9] = application;
                cResult[10] = channel;
                cResult[11] = commands;
                class R {
                  constructor(arg0) {
                    obj = { application, channel, command: channel };
                    return jsx(closure_1(closure_2[35]), obj, channel.id);
                  }
                }
                cResult[12] = mapped;
              }
              class R {
                constructor(arg0) {
                  obj = { application, channel, command: channel };
                  return jsx(closure_1(closure_2[35]), obj, channel.id);
                }
              }
              cResult[13] = application;
              cResult[14] = channel;
              cResult[15] = R;
              tmp16 = R;
            }
          }
          return null;
        }
      }
    }
  }
  const fn = function n() {
    if (null != application) {
      if (null != application.bot) {
        const id = application.bot.id;
        analyticsLocations(context[28]).hideAllActionSheets();
        let obj3 = analyticsLocations(context[28]);
        const rootNavigationRef = channel(context[29]).getRootNavigationRef();
        let tmp9 = context;
        let tmp10 = channel;
        if (null != rootNavigationRef) {
          tmp9 = context;
          tmp10 = channel;
          if (rootNavigationRef.isReady()) {
            state = rootNavigationRef.getState();
            let num;
            if (state != null) {
              const routes = state.routes;
              if (routes != null) {
                num = routes.length;
              }
            }
            if (num == null) {
              num = 0;
            }
            if (num > 1) {
              do {
                let goBackResult = rootNavigationRef.goBack();
                num = num - 1;
              } while (num > 1);
            }
            channel(context[30]).transitionTo(Routes.CHANNEL(id.guild_id, id.id));
            tmp9 = context;
            tmp10 = channel;
            let obj = channel(context[30]);
          }
        }
        const obj4 = channel(context[29]);
        tmp10(tmp9[31]).runAfterInteractions(() => {
          const bestActiveInput = ChatInputUtils.getBestActiveInput();
          if (bestActiveInput != null) {
            const obj2 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
            const obj3 = {
              initialRouteName: AppLauncherRouteName.APPLICATION_VIEW,
              initiallyExpanded: true,
              application,
              onPressBack() {
                  const obj = {};
                  const merged = Object.assign(closure_2_2);
                  obj.userId = userId;
                  obj.channelId = id.id;
                  obj.sourceAnalyticsLocations = sourceAnalyticsLocations;
                  analyticsLocations(context[34])(obj);
                }
            };
            obj2.context = obj3;
            bestActiveInput.openCustomKeyboard(obj2);
          }
        });
        const tmp10Result = tmp10(tmp9[31]);
      }
    }
  };
  cResult[0] = analyticsLocations;
  cResult[1] = application;
  cResult[2] = channel.guild_id;
  cResult[3] = channel.id;
  cResult[4] = context;
  cResult[5] = fn;
  tmp6 = fn;
  const tmp5 = analyticsLocations(context[27])(channel, applicationId, commandIds);
}) : (function BotSlashCommands(channel) {
  channel = channel.channel;
  let analyticsLocations;
  let context;
  application = undefined;
  ({ applicationId, commandIds, themeType } = channel);
  analyticsLocations = analyticsLocations(context[26])().analyticsLocations;
  const tmp = closure_16();
  context = channel(context[15]).useUserProfileAnalyticsContext().context;
  let obj = channel(context[15]);
  ({ commands, application } = analyticsLocations(context[27])(channel, applicationId, commandIds));
  const items = [application, , , , ];
  ({ id: arr[1], guild_id: arr[2] } = channel);
  items[3] = context;
  items[4] = analyticsLocations;
  let tmp8Result = null;
  if (null != commands) {
    tmp8Result = null;
    if (0 !== commands.length) {
      let obj2 = { themeType, children: null };
      const intl2 = tmp3(tmp2[16]).intl;
      obj2.children = intl2.string(tmp3(tmp2[16]).t["0hKkS+"]);
      const items1 = [closure_11(closure_17, obj2), , ];
      let obj3 = { style: tmp.slashCommands, children: commands.map((command) => closure_2_11(UserProfileAboutMeCardCommandDefault, { application, channel, command }, command.id)) };
      items1[1] = closure_11(View, obj3);
      let tmp10Result = null != application && null != application.bot;
      if (tmp10Result) {
        let obj4 = { size: "sm", variant: "tertiary", text: null, onPress: null };
        const intl = tmp3(tmp2[16]).intl;
        obj4.text = intl.string(tmp3(tmp2[16]).t.VEfKyb);
        obj4.onPress = tmp5;
        tmp10Result = closure_11(tmp3(tmp2[36]).Button, obj4);
      }
      const obj5 = { children: null };
      items1[2] = tmp10Result;
      obj5.children = items1;
      tmp8Result = closure_12(View, obj5);
    }
  }
  return tmp8Result;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileAboutMeCard(arg0) {
  const cResult = c.c(36);
  ({ userId, displayProfile, channel, pendingBio, bioLineClamp, themeType, style } = arg0);
  const tmp3 = closure_16();
  if (cResult[0] !== themeType) {
    let tmp6;
    if (null != themeType) {
      tmp6 = dependencyMap2[themeType];
    }
    if (tmp6 == null) {
      tmp6 = closure_14;
    }
    cResult[0] = themeType;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  const rowGap = tmp4.rowGap;
  if (displayProfile != null) {
    const application = displayProfile.application;
  }
  if (cResult[2] !== rowGap) {
    const obj2 = { rowGap };
    cResult[2] = rowGap;
    cResult[3] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === style) {
    if (cResult[5] === tmp3.card) {
      if (cResult[6] === tmp8) {
        let tmp9 = cResult[7];
      }
      if (cResult[8] === bioLineClamp) {
        if (cResult[9] === displayProfile) {
          if (cResult[10] === pendingBio) {
            if (cResult[11] === themeType) {
              if (cResult[12] === userId) {
                let tmp10 = cResult[13];
              }
              let guildId;
              if (displayProfile != null) {
                guildId = displayProfile.guildId;
              }
              if (cResult[14] === guildId) {
                if (cResult[15] === themeType) {
                  if (cResult[16] === userId) {
                    let tmp15 = cResult[17];
                  }
                  if (cResult[18] === themeType) {
                    if (cResult[19] === userId) {
                      let tmp19 = cResult[20];
                    }
                    let termsOfServiceUrl;
                    if (application != null) {
                      termsOfServiceUrl = application.termsOfServiceUrl;
                    }
                    let privacyPolicyUrl;
                    if (application != null) {
                      privacyPolicyUrl = application.privacyPolicyUrl;
                    }
                    if (cResult[21] === termsOfServiceUrl) {
                      if (cResult[22] === privacyPolicyUrl) {
                        if (cResult[23] === themeType) {
                          let tmp25 = cResult[24];
                        }
                        if (cResult[25] === application) {
                          if (cResult[26] === channel) {
                            if (cResult[27] === themeType) {
                              let tmp29 = cResult[28];
                            }
                            if (cResult[29] === tmp25) {
                              if (cResult[30] === tmp29) {
                                if (cResult[31] === tmp9) {
                                  if (cResult[32] === tmp10) {
                                    if (cResult[33] === tmp15) {
                                      if (cResult[34] === tmp19) {
                                        let tmp34 = cResult[35];
                                      }
                                      return tmp34;
                                    }
                                  }
                                }
                              }
                            }
                            const obj3 = { style: tmp9, children: null };
                            const items = [tmp10, tmp15, tmp19, tmp25, tmp29];
                            obj3.children = items;
                            const tmp37 = __initData(UserProfileCardDefault, obj3);
                            cResult[29] = tmp25;
                            cResult[30] = tmp29;
                            cResult[31] = tmp9;
                            cResult[32] = tmp10;
                            cResult[33] = tmp15;
                            cResult[34] = tmp19;
                            cResult[35] = tmp37;
                            tmp34 = tmp37;
                          }
                        }
                        let prop;
                        if (application != null) {
                          prop = application.popularApplicationCommandIds;
                        }
                        let tmp31 = null != prop && null != channel;
                        if (tmp31) {
                          const obj4 = { applicationId: application.id, channel, commandIds: application.popularApplicationCommandIds, themeType };
                          tmp31 = closure_1_11(closure_24, obj4);
                        }
                        cResult[25] = application;
                        cResult[26] = channel;
                        cResult[27] = themeType;
                        cResult[28] = tmp31;
                        tmp29 = tmp31;
                      }
                    }
                    const obj5 = { termsOfServiceUrl, privacyPolicyUrl, themeType };
                    const tmp28 = closure_1_11(closure_22, obj5);
                    cResult[21] = termsOfServiceUrl;
                    cResult[22] = privacyPolicyUrl;
                    cResult[23] = themeType;
                    cResult[24] = tmp28;
                    tmp25 = tmp28;
                  }
                  const obj6 = { userId, themeType };
                  const tmp22 = closure_1_11(closure_21, obj6);
                  cResult[18] = themeType;
                  cResult[19] = userId;
                  cResult[20] = tmp22;
                  tmp19 = tmp22;
                }
              }
              const obj7 = { userId, guildId, themeType };
              const tmp18 = closure_1_11(closure_20, obj7);
              cResult[14] = guildId;
              cResult[15] = themeType;
              cResult[16] = userId;
              cResult[17] = tmp18;
              tmp15 = tmp18;
            }
          }
        }
      }
      const obj8 = { userId, displayProfile, pendingBio, themeType, lineClamp: bioLineClamp };
      const tmp13 = closure_1_11(closure_19, obj8);
      cResult[8] = bioLineClamp;
      cResult[9] = displayProfile;
      cResult[10] = pendingBio;
      cResult[11] = themeType;
      cResult[12] = userId;
      cResult[13] = tmp13;
      tmp10 = tmp13;
    }
  }
  const items1 = [tmp3.card, tmp8, style];
  cResult[4] = style;
  cResult[5] = tmp3.card;
  cResult[6] = tmp8;
  cResult[7] = items1;
  tmp9 = items1;
}) : (function UserProfileAboutMeCard(arg0) {
  ({ userId, displayProfile, channel, themeType } = arg0);
  ({ pendingBio, bioLineClamp, style } = arg0);
  let tmp2;
  if (null != themeType) {
    tmp2 = dependencyMap2[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_14;
  }
  let application;
  if (displayProfile != null) {
    application = displayProfile.application;
  }
  const obj = { style: null, children: null };
  const items = [closure_16().card, { rowGap: tmp2.rowGap }, style];
  obj.style = items;
  const tmp = closure_16();
  const items1 = [closure_1_11(closure_19, { userId, displayProfile, pendingBio, themeType, lineClamp: bioLineClamp }), , , , ];
  const obj2 = { userId, guildId: null, themeType: null };
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  obj2.guildId = guildId;
  obj2.themeType = themeType;
  items1[1] = closure_1_11(closure_20, obj2);
  items1[2] = closure_1_11(closure_21, { userId, themeType });
  let termsOfServiceUrl;
  if (application != null) {
    termsOfServiceUrl = application.termsOfServiceUrl;
  }
  const obj3 = { termsOfServiceUrl, privacyPolicyUrl: null, themeType: null };
  let privacyPolicyUrl;
  if (application != null) {
    privacyPolicyUrl = application.privacyPolicyUrl;
  }
  obj3.privacyPolicyUrl = privacyPolicyUrl;
  obj3.themeType = themeType;
  items1[3] = closure_1_11(closure_22, obj3);
  let prop;
  if (application != null) {
    prop = application.popularApplicationCommandIds;
  }
  let tmp7Result = null != prop && null != channel;
  if (tmp7Result) {
    const obj4 = { applicationId: application.id, channel, commandIds: application.popularApplicationCommandIds, themeType };
    tmp7Result = closure_1_11(closure_24, obj4);
  }
  items1[4] = tmp7Result;
  obj.children = items1;
  return __initData(UserProfileCardDefault, obj);
});