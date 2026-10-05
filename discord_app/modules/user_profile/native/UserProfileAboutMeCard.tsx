// discord_app/modules/user_profile/native/UserProfileAboutMeCard.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants2 from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AppLauncherNativeConstants from "../../app_launcher/native/AppLauncherNativeConstants.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import UserProfileCardDefault from "UserProfileCard.tsx";
import MaskedLinkUtils from "../../../utils/MaskedLinkUtils.tsx";
import BioTextDefault from "../../profile_customization/native/BioText.tsx";
import useFriendsSinceDate from "../hooks/useFriendsSinceDate.tsx";
import UserProfileAboutMeCardCommandDefault from "UserProfileAboutMeCardCommand.tsx";
import react from "../../../../_runtime/00019_react.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import Constants from "Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let children, url;

let UserProfileThemeTypes;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const View = react_native.View;
({ DIVIDER_DOT: metroImportAll, UserProfileThemeTypes } = Constants);
const Routes = Constants2.Routes;
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let closure_14 = {
  headingVariant: "text-sm/semibold",
  textVariant: "text-md/normal",
  headingSpacing: 8,
  rowGap: 24,
  columnGap: 6,
};
let closure_15 = {
  [UserProfileThemeTypes.PREVIEW]: {
    headingVariant: "text-xs/semibold",
    textVariant: "text-sm/normal",
    headingSpacing: 4,
    rowGap: 12,
    columnGap: 3,
  },
};
let closure_16 = createStyles.createStyles({
  card: { flexDirection: "column" },
  textWithIcon: { flexDirection: "row", alignItems: "center" },
  memberJoinDates: { flexDirection: "row", flexWrap: "wrap" },
  slashCommands: { flex: 1, flexDirection: "row", flexWrap: "wrap", marginBottom: 12 },
  policyLinks: { rowGap: 8 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let headingSpacing;
      let headingVariant;
      let themeType;
      let tmp4;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(8);
      ({ children, themeType } = arg0);
      if (cResult[0] !== themeType) {
        let tmp6;
        if (null != themeType) {
          tmp6 = closure_15[themeType];
        }
        if (tmp6 == null) {
          tmp6 = closure_14;
        }
        cResult[0] = themeType;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      ({ headingSpacing, headingVariant } = tmp4);
      const tmpResult = useToken;
      let token = tmpResult.useToken(nativeDefault.modules.mobile.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE);
      if (token == null) {
        token = headingVariant;
      }
      if (cResult[2] !== headingSpacing) {
        const obj2 = { marginBottom: headingSpacing };
        cResult[2] = headingSpacing;
        cResult[3] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === children) {
        if (cResult[5] === token) {
          let tmp10;
          if (cResult[6] === tmp9) {
            tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
      const tmp11 = unpackModuleId(Text_Text.Text, {
        accessibilityRole: "header",
        variant: token,
        color: "user-profile-about-me-heading-text",
        style: tmp9,
        children,
      });
      cResult[4] = children;
      cResult[5] = token;
      cResult[6] = tmp9;
      cResult[7] = tmp11;
      tmp10 = tmp11;
    }
  : (themeType) => {
      let headingSpacing;
      let headingVariant;
      themeType = themeType.themeType;
      let tmp;
      children = themeType.children;
      if (null != themeType) {
        tmp = closure_15[themeType];
      }
      if (tmp == null) {
        tmp = closure_14;
      }
      ({ headingVariant, headingSpacing } = tmp);
      const obj = useToken;
      let token = obj.useToken(nativeDefault.modules.mobile.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE);
      const Text = Text_Text.Text;
      if (token == null) {
        token = headingVariant;
      }
      const obj2 = {
        accessibilityRole: "header",
        variant: token,
        color: "user-profile-about-me-heading-text",
        style: { marginBottom: headingSpacing },
        children,
      };
      return unpackModuleId(Text, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let columnGap;
      let icon;
      let items;
      let textVariant;
      let themeType;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(15);
      ({ icon, children, themeType, accessibilityLabel } = arg0);
      const tmp4 = closure_16();
      if (cResult[0] !== themeType) {
        let tmp7;
        if (null != themeType) {
          tmp7 = closure_15[themeType];
        }
        if (tmp7 == null) {
          tmp7 = closure_14;
        }
        cResult[0] = themeType;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      ({ textVariant, columnGap } = tmp5);
      if (cResult[2] !== columnGap) {
        const obj2 = { columnGap };
        cResult[2] = columnGap;
        cResult[3] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp4.textWithIcon) {
        let tmp10;
        if (cResult[5] === tmp9) {
          tmp10 = cResult[6];
        }
        if (cResult[7] === children) {
          let tmp11;
          if (cResult[8] === textVariant) {
            tmp11 = cResult[9];
          }
          if (cResult[10] === accessibilityLabel) {
            if (cResult[11] === icon) {
              if (cResult[12] === tmp10) {
                let tmp14;
                if (cResult[13] === tmp11) {
                  tmp14 = cResult[14];
                }
                return tmp14;
              }
            }
          }
          const obj3 = { style: tmp10, accessible: true, accessibilityLabel, children: items };
          items = [icon, tmp11];
          const tmp17 = closure_12(View, obj3);
          cResult[10] = accessibilityLabel;
          cResult[11] = icon;
          cResult[12] = tmp10;
          cResult[13] = tmp11;
          cResult[14] = tmp17;
          tmp14 = tmp17;
        }
        const obj4 = { variant: textVariant, color: "text-default", children };
        const tmp13 = unpackModuleId(Text_Text.Text, obj4);
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
    }
  : (themeType) => {
      let accessibilityLabel;
      let icon;
      let items;
      let items1;
      themeType = themeType.themeType;
      ({ icon, children, accessibilityLabel } = themeType);
      let tmp2;
      const tmp = closure_16();
      if (null != themeType) {
        tmp2 = closure_15[themeType];
      }
      if (tmp2 == null) {
        tmp2 = closure_14;
      }
      const obj = { style: items, accessible: true, accessibilityLabel, children: items1 };
      items = [tmp.textWithIcon, { columnGap: tmp2.columnGap }];
      items1 = [icon, unpackModuleId(Text_Text.Text, { variant: tmp2.textVariant, color: "text-default", children })];
      return closure_12(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let displayProfile;
      let items;
      let lineClamp;
      let pendingBio;
      let themeType;
      let tmp4;
      let userId;
      const obj = react2;
      const cResult = obj.c(16);
      ({ userId, displayProfile, pendingBio, themeType, lineClamp } = arg0);
      if (cResult[0] !== themeType) {
        let tmp6;
        if (null != themeType) {
          tmp6 = closure_15[themeType];
        }
        if (tmp6 == null) {
          tmp6 = closure_14;
        }
        cResult[0] = themeType;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      const textVariant = tmp4.textVariant;
      if (cResult[2] === displayProfile) {
        let tmp8;
        if (cResult[3] === pendingBio) {
          tmp8 = cResult[4];
        }
        let tmp11 = null;
        if (null != tmp8) {
          tmp11 = null;
          if ("" !== tmp8) {
            let tmp12;
            let tmp14;
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl4.intl;
              const stringResult = intl.string(intl4.t.ZzAR2Y);
              cResult[5] = stringResult;
              tmp12 = stringResult;
            } else {
              tmp12 = cResult[5];
            }
            if (cResult[6] !== themeType) {
              const obj2 = { themeType, children: tmp12 };
              const tmp17 = unpackModuleId(closure_17, obj2);
              cResult[6] = themeType;
              cResult[7] = tmp17;
              tmp14 = tmp17;
            } else {
              tmp14 = cResult[7];
            }
            if (cResult[8] === tmp8) {
              if (cResult[9] === lineClamp) {
                if (cResult[10] === textVariant) {
                  let tmp18;
                  if (cResult[11] === userId) {
                    tmp18 = cResult[12];
                  }
                  if (cResult[13] === tmp14) {
                    let tmp22;
                    if (cResult[14] === tmp18) {
                      tmp22 = cResult[15];
                    }
                    tmp11 = tmp22;
                  }
                  const obj3 = { children: items };
                  items = [tmp14, tmp18];
                  const tmp25 = closure_12(View, obj3);
                  cResult[13] = tmp14;
                  cResult[14] = tmp18;
                  cResult[15] = tmp25;
                  tmp22 = tmp25;
                }
              }
            }
            const obj4 = { bio: tmp8, userId, textVariant, lineClamp };
            const tmp21 = unpackModuleId(BioTextDefault, obj4);
            cResult[8] = tmp8;
            cResult[9] = lineClamp;
            cResult[10] = textVariant;
            cResult[11] = userId;
            cResult[12] = tmp21;
            tmp18 = tmp21;
          }
        }
        return tmp11;
      }
      let previewBio;
      if (displayProfile != null) {
        previewBio = displayProfile.getPreviewBio(pendingBio);
      }
      cResult[2] = displayProfile;
      cResult[3] = pendingBio;
      cResult[4] = previewBio;
      tmp8 = previewBio;
    }
  : (arg0) => {
      let displayProfile;
      let intl;
      let items;
      let lineClamp;
      let pendingBio;
      let themeType;
      let userId;
      ({ displayProfile, themeType } = arg0);
      let tmp;
      ({ userId, pendingBio, lineClamp } = arg0);
      if (null != themeType) {
        tmp = closure_15[themeType];
      }
      if (tmp == null) {
        tmp = closure_14;
      }
      let previewBio;
      const textVariant = tmp.textVariant;
      if (displayProfile != null) {
        previewBio = displayProfile.getPreviewBio(pendingBio);
      }
      let tmp4 = null;
      if (null != previewBio) {
        tmp4 = null;
        if ("" !== previewBio) {
          const obj = { children: items };
          const obj2 = { themeType, children: intl.string(intl4.t.ZzAR2Y) };
          intl = intl4.intl;
          items = [unpackModuleId(closure_17, obj2)];
          const obj3 = { bio: previewBio, userId, textVariant, lineClamp };
          items[1] = unpackModuleId(BioTextDefault, obj3);
          tmp4 = closure_12(View, obj);
        }
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let columnGap;
      let locale;
      let textVariant;
      let tmp10;
      let tmp13;
      let tmp17;
      let tmp5;
      let tmp9;
      const tmp = userId;
      const obj = userId(576);
      const cResult = obj.c(47);
      userId = userId.userId;
      const guildId = userId.guildId;
      const themeType = userId.themeType;
      const tmp4 = closure_16();
      if (cResult[0] !== themeType) {
        let tmp7;
        if (null != themeType) {
          tmp7 = closure_15[themeType];
        }
        if (tmp7 == null) {
          tmp7 = closure_14;
        }
        cResult[0] = themeType;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      ({ textVariant, columnGap } = tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        class A {
          constructor() {
            return closure_1_5.locale;
          }
        }
        cResult[2] = items;
        cResult[3] = A;
        tmp10 = A;
        tmp9 = items;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        class A {
          constructor() {
            return closure_1_5.locale;
          }
        }
        cResult[4] = items1;
        tmp13 = items1;
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
        class A {
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
      const tmpResult5 = tmp(504);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp13, R);
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
        class A {
          constructor() {
            return closure_1_5.locale;
          }
        }
        cResult[7] = items2;
        tmp17 = items2;
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
        let tmp27;
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
        const tmpResult6 = tmp(504);
        const stateFromStores2 = tmpResult6.useStateFromStores(tmp17, G);
        class A {
          constructor() {
            return closure_1_5.locale;
          }
        }
        const getCreatedAtDate = tmp(6678).getCreatedAtDate;
        tmp(6678);
        const obj5 = guildId(11);
        const createdAtDate = getCreatedAtDate(obj5.extractTimestamp(userId), stateFromStores);
        const getCreatedAtDate2 = tmp(6678).getCreatedAtDate;
        tmp(6678);
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
        const createdAtDate2 = getCreatedAtDate2(tmp24, stateFromStores);
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
          const stringResult = obj6.string(tmp(1126).t.a6XYD9);
          class A {
            constructor() {
              return closure_1_5.locale;
            }
          }
          cResult[25] = stringResult;
          tmp27 = stringResult;
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
          const obj2 = { themeType: null, children: tmp27 };
          class A {
            constructor() {
              return closure_1_5.locale;
            }
          }
          cResult[26] = themeType;
          cResult[27] = closure_11(closure_17, obj2);
          const tmp31 = closure_11(closure_17, obj2);
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
          tmp33[0] = columnGap;
          class A {
            constructor() {
              return closure_1_5.locale;
            }
          }
          cResult[29] = tmp33;
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
          class A {
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
          const obj4 = {
            themeType,
            icon: tmp36,
            accessibilityLabel: formatToPlainStringResult,
            children: createdAtDate,
          };
          cResult[34] = createdAtDate;
          cResult[35] = formatToPlainStringResult;
          cResult[36] = themeType;
          cResult[37] = closure_11(closure_18, obj4);
          const tmp41 = closure_11(closure_18, obj4);
        }
        const items3 = [tmp4.memberJoinDates, tmp33];
        cResult[30] = tmp4.memberJoinDates;
        cResult[31] = tmp33;
        cResult[32] = items3;
      }
      class G {
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
      cResult[10] = G;
    }
  : (userId) => {
      let columnGap;
      let intl;
      let intl2;
      let intl3;
      let items4;
      let items5;
      let items6;
      let locale;
      let obj11;
      let obj12;
      let textVariant;
      let themeType;
      let tmp10Result;
      userId = userId.userId;
      ({ guildId: importDefault, themeType } = userId);
      let tmp2;
      const tmp = closure_16();
      if (null != themeType) {
        tmp2 = closure_15[themeType];
      }
      if (tmp2 == null) {
        tmp2 = closure_14;
      }
      ({ textVariant, columnGap } = tmp2);
      const items = [LocaleStore];
      const obj = userId(504);
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      const items1 = [GuildStore];
      const obj2 = userId(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        let guild = null;
        if (null != importDefault) {
          guild = GuildStore.getGuild(tmp);
        }
        return guild;
      });
      const items2 = [GuildMemberStore];
      const obj3 = userId(504);
      const stateFromStores2 = obj3.useStateFromStores(items2, () => {
        let member = null;
        if (null != importDefault) {
          member = GuildMemberStore.getMember(tmp, userId);
        }
        return member;
      });
      const getCreatedAtDate = userId(6678).getCreatedAtDate;
      userId(6678);
      const obj4 = SnowflakeUtilsDefault;
      const createdAtDate = getCreatedAtDate(obj4.extractTimestamp(userId), stateFromStores);
      let joinedAt;
      const getCreatedAtDate2 = userId(6678).getCreatedAtDate;
      userId(6678);
      if (stateFromStores2 != null) {
        joinedAt = stateFromStores2.joinedAt;
      }
      const createdAtDate2 = getCreatedAtDate2(joinedAt, stateFromStores);
      const obj5 = { themeType, children: intl.string(userId(1126).t.a6XYD9) };
      intl = tmp4(1126).intl;
      const items3 = [closure_11(closure_17, obj5)];
      const obj6 = { style: items4, children: items5 };
      items4 = [tmp.memberJoinDates, { columnGap }];
      const obj7 = {
        themeType,
        icon: closure_11(userId(10547).ClydeIcon, { size: "xs" }),
        accessibilityLabel: intl2.formatToPlainString(userId(1126).t["9t7w53"], { date: createdAtDate }),
        children: createdAtDate,
      };
      intl2 = tmp4(1126).intl;
      items5 = [closure_11(closure_18, obj7)];
      let tmp15Result = null != stateFromStores1 && null != createdAtDate2;
      if (tmp15Result) {
        const obj8 = { children: items6 };
        const obj9 = {
          variant: textVariant,
          color: "text-default",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children,
        };
        items6 = [closure_11(userId(4886).Text, obj9)];
        const obj10 = {
          themeType,
          icon: closure_11(tmp10Result, obj11),
          accessibilityLabel: intl3.formatToPlainString(userId(1126).t.FdLNDK, obj12),
          children: createdAtDate2,
        };
        obj11 = { guild: stateFromStores1, size: userId(5971).GuildIconSizes.XXSMALL };
        tmp10Result = GuildIconDefault;
        intl3 = tmp4(1126).intl;
        obj12 = { guildName: stateFromStores1.name, date: createdAtDate2 };
        items6[1] = closure_11(closure_18, obj10);
        tmp15Result = closure_12(closure_13, obj8);
      }
      const obj13 = { children: items3 };
      items5[1] = tmp15Result;
      items3[1] = closure_12(View, obj6);
      return closure_12(View, obj13);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let themeType;
      let tmp4;
      let userId;
      const obj = react2;
      const cResult = obj.c(11);
      ({ themeType, userId } = arg0);
      if (cResult[0] !== themeType) {
        let tmp6;
        if (null != themeType) {
          tmp6 = closure_15[themeType];
        }
        if (tmp6 == null) {
          tmp6 = closure_14;
        }
        cResult[0] = themeType;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      const textVariant = tmp4.textVariant;
      const tmpResult = useFriendsSinceDate;
      const friendsSinceDate = tmpResult.useFriendsSinceDate(userId);
      let tmp9 = null;
      if (null != friendsSinceDate) {
        let tmp11;
        let tmp13;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl4.intl;
          const stringResult = intl.string(intl4.t.wlTO8v);
          cResult[2] = stringResult;
          tmp11 = stringResult;
        } else {
          tmp11 = cResult[2];
        }
        if (cResult[3] !== themeType) {
          const obj2 = { themeType, children: tmp11 };
          const tmp16 = unpackModuleId(closure_17, obj2);
          cResult[3] = themeType;
          cResult[4] = tmp16;
          tmp13 = tmp16;
        } else {
          tmp13 = cResult[4];
        }
        if (cResult[5] === friendsSinceDate) {
          let tmp17;
          if (cResult[6] === textVariant) {
            tmp17 = cResult[7];
          }
          if (cResult[8] === tmp13) {
            let tmp20;
            if (cResult[9] === tmp17) {
              tmp20 = cResult[10];
            }
            tmp9 = tmp20;
          }
          const obj3 = { children: items };
          items = [tmp13, tmp17];
          const tmp23 = closure_12(View, obj3);
          cResult[8] = tmp13;
          cResult[9] = tmp17;
          cResult[10] = tmp23;
          tmp20 = tmp23;
        }
        const obj4 = { variant: textVariant, color: "text-default", children: friendsSinceDate };
        const tmp19 = unpackModuleId(Text_Text.Text, obj4);
        cResult[5] = friendsSinceDate;
        cResult[6] = textVariant;
        cResult[7] = tmp19;
        tmp17 = tmp19;
      }
      return tmp9;
    }
  : (themeType) => {
      let intl;
      let items;
      themeType = themeType.themeType;
      let tmp;
      const userId = themeType.userId;
      if (null != themeType) {
        tmp = closure_15[themeType];
      }
      if (tmp == null) {
        tmp = closure_14;
      }
      const textVariant = tmp.textVariant;
      const obj = useFriendsSinceDate;
      const friendsSinceDate = obj.useFriendsSinceDate(userId);
      let tmp6 = null;
      if (null != friendsSinceDate) {
        const obj2 = { children: items };
        const obj3 = { themeType, children: intl.string(intl4.t.wlTO8v) };
        intl = intl4.intl;
        items = [unpackModuleId(closure_17, obj3)];
        const obj4 = { variant: textVariant, color: "text-default", children: friendsSinceDate };
        items[1] = unpackModuleId(Text_Text.Text, obj4);
        tmp6 = closure_12(View, obj2);
      }
      return tmp6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let intl2;
      let intl3;
      let items;
      let items1;
      let privacyPolicyUrl;
      let termsOfServiceUrl;
      let themeType;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(16);
      ({ termsOfServiceUrl, privacyPolicyUrl, themeType } = arg0);
      const tmp4 = closure_16();
      if (null != termsOfServiceUrl) {
        let first;
        let tmp9;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl4.intl;
          const stringResult = intl.string(intl4.t.l6DP2n);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== themeType) {
          const obj2 = { themeType, children: first };
          const tmp12 = unpackModuleId(closure_17, obj2);
          cResult[1] = themeType;
          cResult[2] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] === termsOfServiceUrl) {
          let tmp13;
          if (cResult[4] === themeType) {
            tmp13 = cResult[5];
          }
          if (cResult[6] === privacyPolicyUrl) {
            let tmp17;
            if (cResult[7] === themeType) {
              tmp17 = cResult[8];
            }
            if (cResult[9] === tmp4.policyLinks) {
              if (cResult[10] === tmp13) {
                let tmp21;
                if (cResult[11] === tmp17) {
                  tmp21 = cResult[12];
                }
                if (cResult[13] === tmp9) {
                  let tmp25;
                  if (cResult[14] === tmp21) {
                    tmp25 = cResult[15];
                  }
                  tmp5 = tmp25;
                }
                const obj3 = { children: items };
                items = [tmp9, tmp21];
                const tmp28 = closure_12(View, obj3);
                cResult[13] = tmp9;
                cResult[14] = tmp21;
                cResult[15] = tmp28;
                tmp25 = tmp28;
              }
            }
            const obj4 = { style: tmp4.policyLinks, children: items1 };
            items1 = [tmp13, tmp17];
            const tmp24 = closure_12(View, obj4);
            cResult[9] = tmp4.policyLinks;
            cResult[10] = tmp13;
            cResult[11] = tmp17;
            cResult[12] = tmp24;
            tmp21 = tmp24;
          }
          let tmp18 = null != privacyPolicyUrl;
          if (tmp18) {
            const obj5 = { url: privacyPolicyUrl, label: intl3.string(intl4.t.kH3JR5), themeType };
            intl3 = intl4.intl;
            tmp18 = unpackModuleId(closure_23, obj5);
          }
          cResult[6] = privacyPolicyUrl;
          cResult[7] = themeType;
          cResult[8] = tmp18;
          tmp17 = tmp18;
        }
        let tmp14 = null != termsOfServiceUrl;
        if (tmp14) {
          const obj6 = { url: termsOfServiceUrl, label: intl2.string(intl4.t.s7STcY), themeType };
          intl2 = intl4.intl;
          tmp14 = unpackModuleId(closure_23, obj6);
        }
        cResult[3] = termsOfServiceUrl;
        cResult[4] = themeType;
        cResult[5] = tmp14;
        tmp13 = tmp14;
      } else {
        tmp5 = null;
      }
      return tmp5;
    }
  : (arg0) => {
      let intl;
      let intl2;
      let intl3;
      let items1;
      let privacyPolicyUrl;
      let termsOfServiceUrl;
      let themeType;
      let tmp3Result;
      ({ termsOfServiceUrl, privacyPolicyUrl, themeType } = arg0);
      if (null != termsOfServiceUrl) {
        const obj = { themeType, children: intl.string(intl4.t.l6DP2n) };
        intl = intl4.intl;
        const items = [unpackModuleId(closure_17, obj)];
        let tmp5Result = null != termsOfServiceUrl;
        const obj2 = { style: tmp.policyLinks, children: items1 };
        if (tmp5Result) {
          const obj3 = { url: termsOfServiceUrl, label: intl2.string(intl4.t.s7STcY), themeType };
          intl2 = intl4.intl;
          tmp5Result = unpackModuleId(closure_23, obj3);
        }
        items1 = [tmp5Result];
        let tmp5Result2 = null != privacyPolicyUrl;
        if (tmp5Result2) {
          const obj4 = { url: privacyPolicyUrl, label: intl3.string(intl4.t.kH3JR5), themeType };
          intl3 = intl4.intl;
          tmp5Result2 = unpackModuleId(closure_23, obj4);
        }
        const obj5 = { children: items };
        items1[1] = tmp5Result2;
        items[1] = closure_12(View, obj2);
        tmp3Result = closure_12(View, obj5);
      } else {
        tmp3Result = null;
      }
      return tmp3Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (url) => {
      let label;
      let themeType;
      let tmp4;
      let tmp8;
      let obj = url(576);
      const cResult = obj.c(10);
      url = url.url;
      ({ label, themeType } = url);
      if (cResult[0] !== themeType) {
        let tmp6;
        if (null != themeType) {
          tmp6 = closure_15[themeType];
        }
        if (tmp6 == null) {
          tmp6 = closure_14;
        }
        cResult[0] = themeType;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      const textVariant = tmp4.textVariant;
      if (cResult[2] !== url) {
        const fn = function s() {
          const obj = MaskedLinkUtils;
          const obj2 = { href: url };
          return obj.handleClick(obj2);
        };
        cResult[2] = url;
        cResult[3] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === label) {
        let tmp9;
        if (cResult[5] === textVariant) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp8) {
          let tmp11;
          if (cResult[8] === tmp9) {
            tmp11 = cResult[9];
          }
          return tmp11;
        }
        let obj2 = { accessibilityRole: "link", onPress: tmp8, children: tmp9 };
        const tmp13 = closure_11(url(1188).PressableOpacity, obj2);
        cResult[7] = tmp8;
        cResult[8] = tmp9;
        cResult[9] = tmp13;
        tmp11 = tmp13;
      }
      const tmp10 = closure_11(url(4886).Text, { variant: textVariant, color: "text-link", children: label });
      cResult[4] = label;
      cResult[5] = textVariant;
      cResult[6] = tmp10;
      tmp9 = tmp10;
    }
  : (label) => {
      let href;
      let themeType;
      ({ url: require, themeType } = label);
      let tmp;
      label = label.label;
      if (null != themeType) {
        tmp = closure_15[themeType];
      }
      if (tmp == null) {
        tmp = closure_14;
      }
      const textVariant = tmp.textVariant;
      let obj = {
        accessibilityRole: "link",
        onPress() {
          const obj = MaskedLinkUtils;
          const obj2 = { href: require };
          return obj.handleClick(obj2);
        },
        children: closure_11(Text_Text.Text, { variant: textVariant, color: "text-link", children: label }),
      };
      const PressableOpacity = native.PressableOpacity;
      return closure_11(PressableOpacity, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let analyticsLocations;
      let application;
      let applicationId;
      let commandIds;
      let commands;
      let context;
      let intl2;
      let items;
      let tmp = channel;
      let obj = channel(context[11]);
      const cResult = obj.c(26);
      channel = channel.channel;
      const themeType = channel.themeType;
      ({ applicationId, commandIds } = channel);
      const tmp4 = closure_16();
      analyticsLocations = analyticsLocations(context[25])().analyticsLocations;
      let obj2 = channel(context[26]);
      context = obj2.useUserProfileAnalyticsContext().context;
      ({ commands, application } = analyticsLocations(context[27])(channel, applicationId, commandIds));
      analyticsLocations(context[27])(channel, applicationId, commandIds);
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === application) {
          if (cResult[2] === channel.guild_id) {
            if (cResult[3] === channel.id) {
              let tmp6;
              if (cResult[4] === context) {
                tmp6 = cResult[5];
              }
              if (null != commands) {
                if (0 !== commands.length) {
                  let tmp8;
                  let tmp10;
                  let tmp15;
                  const _Symbol = Symbol;
                  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[15]).intl;
                    const stringResult = intl.string(tmp(context[15]).t["0hKkS+"]);
                    let num = 6;
                    cResult[6] = stringResult;
                    tmp8 = stringResult;
                  } else {
                    tmp8 = cResult[6];
                  }
                  if (cResult[7] !== themeType) {
                    let obj3 = { themeType, children: tmp8 };
                    const tmp13 = closure_11(closure_17, obj3);
                    cResult[7] = themeType;
                    class R {
                      constructor(command) {
                        const obj = { application, channel, command };
                        return unpackModuleId(UserProfileAboutMeCardCommandDefault, obj, command.id);
                      }
                    }
                    cResult[8] = tmp13;
                    tmp10 = tmp13;
                  } else {
                    tmp10 = cResult[8];
                  }
                  if (cResult[9] === application) {
                    if (cResult[10] === channel) {
                      if (cResult[11] === commands) {
                        tmp15 = cResult[12];
                      }
                      if (cResult[16] === tmp4.slashCommands) {
                        let tmp18;
                        if (cResult[17] === tmp15) {
                          tmp18 = cResult[18];
                        }
                        if (cResult[19] === application) {
                          let tmp22;
                          if (cResult[20] === tmp6) {
                            tmp22 = cResult[21];
                          }
                          if (cResult[22] === tmp10) {
                            if (cResult[23] === tmp18) {
                              let tmp25;
                              if (cResult[24] === tmp22) {
                                tmp25 = cResult[25];
                              }
                              return tmp25;
                            }
                          }
                          let obj4 = { children: items };
                          items = [tmp10, tmp18];
                          class R {
                            constructor(command) {
                              const obj = { application, channel, command };
                              return unpackModuleId(UserProfileAboutMeCardCommandDefault, obj, command.id);
                            }
                          }
                          const tmp28 = closure_12(View, obj4);
                          cResult[22] = tmp10;
                          cResult[23] = tmp18;
                          cResult[24] = tmp22;
                          cResult[25] = tmp28;
                          tmp25 = tmp28;
                        }
                        let tmp23 = null != application && null != application.bot;
                        if (tmp23) {
                          const obj5 = {
                            size: "sm",
                            variant: "tertiary",
                            text: intl2.string(tmp(context[15]).t.VEfKyb),
                            onPress: tmp6,
                          };
                          const Button = tmp(tmp2[36]).Button;
                          intl2 = tmp(tmp2[15]).intl;
                          tmp23 = closure_11(Button, obj5);
                        }
                        cResult[19] = application;
                        cResult[20] = tmp6;
                        class R {
                          constructor(command) {
                            const obj = { application, channel, command };
                            return unpackModuleId(UserProfileAboutMeCardCommandDefault, obj, command.id);
                          }
                        }
                        cResult[21] = tmp23;
                        tmp22 = tmp23;
                      }
                      const obj6 = { style: tmp14, children: tmp15 };
                      const tmp21 = closure_11(View, obj6);
                      class R {
                        constructor(command) {
                          const obj = { application, channel, command };
                          return unpackModuleId(UserProfileAboutMeCardCommandDefault, obj, command.id);
                        }
                      }
                      cResult[16] = tmp4.slashCommands;
                      cResult[17] = tmp15;
                      cResult[18] = tmp21;
                      tmp18 = tmp21;
                    }
                  }
                  if (cResult[13] === application) {
                    let tmp16;
                    if (cResult[14] === channel) {
                      tmp16 = cResult[15];
                    }
                    const mapped = commands.map(tmp16);
                    cResult[9] = application;
                    cResult[10] = channel;
                    cResult[11] = commands;
                    class R {
                      constructor(command) {
                        const obj = { application, channel, command };
                        return unpackModuleId(UserProfileAboutMeCardCommandDefault, obj, command.id);
                      }
                    }
                    cResult[12] = mapped;
                    tmp15 = mapped;
                  }
                  class R {
                    constructor(command) {
                      const obj = { application, channel, command };
                      return unpackModuleId(UserProfileAboutMeCardCommandDefault, obj, command.id);
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
        let sourceAnalyticsLocations;
        if (null != application) {
          if (null != application.bot) {
            const id = application.bot.id;
            let obj3 = analyticsLocations(context[28]);
            obj3.hideAllActionSheets();
            const obj4 = channel(context[29]);
            const rootNavigationRef = obj4.getRootNavigationRef();
            let tmp9 = context;
            let tmp10 = channel;
            if (null != rootNavigationRef) {
              tmp9 = context;
              tmp10 = channel;
              if (rootNavigationRef.isReady()) {
                const state = rootNavigationRef.getState();
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
                let obj = channel(context[30]);
                obj.transitionTo(Routes.CHANNEL(id.guild_id, id.id));
                tmp9 = context;
                tmp10 = channel;
              }
            }
            const tmp10Result = tmp10(tmp9[31]);
            tmp10Result.runAfterInteractions(() => {
              let obj3;
              let userId;
              let obj = ChatInputUtils;
              const bestActiveInput = obj.getBestActiveInput();
              if (bestActiveInput != null) {
                const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
                const obj2 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj3 };
                obj3 = {
                  initialRouteName: AppLauncherRouteName.APPLICATION_VIEW,
                  initiallyExpanded: true,
                  application,
                  onPressBack() {
                    const obj = { userId, channelId: id.id, sourceAnalyticsLocations };
                    const tmp = analyticsLocations(context[34]);
                    const merged = Object.assign(closure_2_2);
                    tmp(obj);
                  },
                };
                openCustomKeyboard(obj2);
              }
            });
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
    }
  : (channel) => {
      let application;
      let applicationId;
      let commandIds;
      let commands;
      let intl;
      let intl2;
      let themeType;
      channel = channel.channel;
      let analyticsLocations;
      let context;
      application = undefined;
      ({ applicationId, commandIds, themeType } = channel);
      let tmp = closure_16();
      analyticsLocations = analyticsLocations(context[25])().analyticsLocations;
      let obj = channel(context[26]);
      context = obj.useUserProfileAnalyticsContext().context;
      ({ commands, application } = analyticsLocations(context[27])(channel, applicationId, commandIds));
      const items = [application, , , ,];
      ({ id: arr[1], guild_id: arr[2] } = channel);
      items[3] = context;
      items[4] = analyticsLocations;
      let tmp8Result = null;
      analyticsLocations(context[27])(channel, applicationId, commandIds);
      if (null != commands) {
        let num = 0;
        tmp8Result = null;
        if (0 !== commands.length) {
          let obj2 = { themeType, children: intl2.string(channel(context[15]).t["0hKkS+"]) };
          intl2 = tmp3(tmp2[15]).intl;
          const items1 = [closure_11(closure_17, obj2), ,];
          let obj3 = {
            style: tmp.slashCommands,
            children: commands.map((command) => {
              const obj = { application, channel, command };
              return unpackModuleId(UserProfileAboutMeCardCommandDefault, obj, command.id);
            }),
          };
          items1[1] = closure_11(View, obj3);
          let tmp10Result = null != application && null != application.bot;
          if (tmp10Result) {
            let obj4 = {
              size: "sm",
              variant: "tertiary",
              text: intl.string(channel(context[15]).t.VEfKyb),
              onPress: tmp5,
            };
            const Button = tmp3(tmp2[36]).Button;
            intl = tmp3(tmp2[15]).intl;
            tmp10Result = closure_11(Button, obj4);
          }
          const obj5 = { children: items1 };
          items1[2] = tmp10Result;
          tmp8Result = closure_12(View, obj5);
        }
      }
      return tmp8Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let application;
      let bioLineClamp;
      let channel;
      let displayProfile;
      let items;
      let pendingBio;
      let style;
      let themeType;
      let tmp4;
      let tmp8;
      let userId;
      const obj = react2;
      const cResult = obj.c(36);
      ({ userId, displayProfile, channel, pendingBio, bioLineClamp, themeType, style } = arg0);
      const tmp3 = closure_16();
      if (cResult[0] !== themeType) {
        let tmp6;
        if (null != themeType) {
          tmp6 = closure_15[themeType];
        }
        if (tmp6 == null) {
          tmp6 = closure_14;
        }
        cResult[0] = themeType;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      const rowGap = tmp4.rowGap;
      if (displayProfile != null) {
        application = displayProfile.application;
      }
      if (cResult[2] !== rowGap) {
        const obj2 = { rowGap };
        cResult[2] = rowGap;
        cResult[3] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === style) {
        if (cResult[5] === tmp3.card) {
          let tmp9;
          if (cResult[6] === tmp8) {
            tmp9 = cResult[7];
          }
          if (cResult[8] === bioLineClamp) {
            if (cResult[9] === displayProfile) {
              if (cResult[10] === pendingBio) {
                if (cResult[11] === themeType) {
                  let tmp10;
                  if (cResult[12] === userId) {
                    tmp10 = cResult[13];
                  }
                  let guildId;
                  if (displayProfile != null) {
                    guildId = displayProfile.guildId;
                  }
                  if (cResult[14] === guildId) {
                    if (cResult[15] === themeType) {
                      let tmp15;
                      if (cResult[16] === userId) {
                        tmp15 = cResult[17];
                      }
                      if (cResult[18] === themeType) {
                        let tmp19;
                        if (cResult[19] === userId) {
                          tmp19 = cResult[20];
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
                            let tmp25;
                            if (cResult[23] === themeType) {
                              tmp25 = cResult[24];
                            }
                            if (cResult[25] === application) {
                              if (cResult[26] === channel) {
                                let tmp29;
                                if (cResult[27] === themeType) {
                                  tmp29 = cResult[28];
                                }
                                if (cResult[29] === tmp25) {
                                  if (cResult[30] === tmp29) {
                                    if (cResult[31] === tmp9) {
                                      if (cResult[32] === tmp10) {
                                        if (cResult[33] === tmp15) {
                                          let tmp34;
                                          if (cResult[34] === tmp19) {
                                            tmp34 = cResult[35];
                                          }
                                          return tmp34;
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj3 = { style: tmp9, children: items };
                                items = [tmp10, tmp15, tmp19, tmp25, tmp29];
                                const tmp37 = closure_12(UserProfileCardDefault, obj3);
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
                              const obj4 = {
                                applicationId: application.id,
                                channel,
                                commandIds: application.popularApplicationCommandIds,
                                themeType,
                              };
                              tmp31 = unpackModuleId(closure_24, obj4);
                            }
                            cResult[25] = application;
                            cResult[26] = channel;
                            cResult[27] = themeType;
                            cResult[28] = tmp31;
                            tmp29 = tmp31;
                          }
                        }
                        const obj5 = { termsOfServiceUrl, privacyPolicyUrl, themeType };
                        const tmp28 = unpackModuleId(closure_22, obj5);
                        cResult[21] = termsOfServiceUrl;
                        cResult[22] = privacyPolicyUrl;
                        cResult[23] = themeType;
                        cResult[24] = tmp28;
                        tmp25 = tmp28;
                      }
                      const obj6 = { userId, themeType };
                      const tmp22 = unpackModuleId(closure_21, obj6);
                      cResult[18] = themeType;
                      cResult[19] = userId;
                      cResult[20] = tmp22;
                      tmp19 = tmp22;
                    }
                  }
                  const obj7 = { userId, guildId, themeType };
                  const tmp18 = unpackModuleId(closure_20, obj7);
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
          const tmp13 = unpackModuleId(closure_19, obj8);
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
    }
  : (arg0) => {
      let bioLineClamp;
      let channel;
      let displayProfile;
      let guildId;
      let items;
      let items1;
      let pendingBio;
      let privacyPolicyUrl;
      let style;
      let themeType;
      let userId;
      ({ userId, displayProfile, channel, themeType } = arg0);
      ({ pendingBio, bioLineClamp, style } = arg0);
      let tmp2;
      const tmp = closure_16();
      if (null != themeType) {
        tmp2 = closure_15[themeType];
      }
      if (tmp2 == null) {
        tmp2 = closure_14;
      }
      let application;
      const rowGap = tmp2.rowGap;
      if (displayProfile != null) {
        application = displayProfile.application;
      }
      const obj = { style: items, children: items1 };
      items = [tmp.card, { rowGap }, style];
      items1 = [, , , ,];
      const tmp6 = UserProfileCardDefault;
      items1[0] = unpackModuleId(closure_19, {
        userId,
        displayProfile,
        pendingBio,
        themeType,
        lineClamp: bioLineClamp,
      });
      const obj2 = { userId, guildId, themeType };
      guildId = undefined;
      if (displayProfile != null) {
        guildId = displayProfile.guildId;
      }
      items1[1] = unpackModuleId(closure_20, obj2);
      items1[2] = unpackModuleId(closure_21, { userId, themeType });
      let termsOfServiceUrl;
      if (application != null) {
        termsOfServiceUrl = application.termsOfServiceUrl;
      }
      const obj3 = { termsOfServiceUrl, privacyPolicyUrl, themeType };
      privacyPolicyUrl = undefined;
      if (application != null) {
        privacyPolicyUrl = application.privacyPolicyUrl;
      }
      items1[3] = unpackModuleId(closure_22, obj3);
      let prop;
      if (application != null) {
        prop = application.popularApplicationCommandIds;
      }
      let tmp7Result = null != prop && null != channel;
      if (tmp7Result) {
        const obj4 = {
          applicationId: application.id,
          channel,
          commandIds: application.popularApplicationCommandIds,
          themeType,
        };
        tmp7Result = unpackModuleId(closure_24, obj4);
      }
      items1[4] = tmp7Result;
      return closure_12(tmp6, obj);
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCard.tsx");

export default tmp4;
