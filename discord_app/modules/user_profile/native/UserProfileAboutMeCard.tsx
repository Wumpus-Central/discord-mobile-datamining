// discord_app/modules/user_profile/native/UserProfileAboutMeCard.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
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
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function Heading(children) {
  const themeType = children.themeType;
  let tmp;
  if (null != themeType) {
    tmp = dependencyMap[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  ({ headingVariant, headingSpacing } = tmp);
  let obj = useToken;
  let token = obj.useToken(nativeDefault.modules.mobile.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE);
  if (token == null) {
    token = headingVariant;
  }
  obj = {
    accessibilityRole: "header",
    variant: token,
    color: "user-profile-about-me-heading-text",
    style: { marginBottom: headingSpacing },
    children: children.children,
  };
  return closure_1_11(Text_Text.Text, obj);
}
function TextWithIcon(themeType) {
  themeType = themeType.themeType;
  ({ icon, children, accessibilityLabel } = themeType);
  let tmp2;
  if (null != themeType) {
    tmp2 = dependencyMap[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_14;
  }
  const obj = { style: null, accessible: true, accessibilityLabel, children: null };
  const items = [closure_16().textWithIcon, { columnGap: tmp2.columnGap }];
  obj.style = items;
  const items1 = [icon, closure_1_11(Text_Text.Text, { variant: tmp2.textVariant, color: "text-default", children })];
  obj.children = items1;
  return closure_1_12(View, obj);
}
function Bio(arg0) {
  ({ displayProfile, themeType } = arg0);
  let tmp;
  ({ userId, pendingBio, lineClamp } = arg0);
  if (null != themeType) {
    tmp = dependencyMap[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  let previewBio;
  if (displayProfile != null) {
    previewBio = displayProfile.getPreviewBio(pendingBio);
  }
  let tmp4 = null;
  if (null != previewBio) {
    tmp4 = null;
    if ("" !== previewBio) {
      let obj = { children: null };
      obj = { themeType, children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t.ZzAR2Y);
      const items = [closure_1_11(Heading, obj)];
      obj = { bio: previewBio, userId, textVariant: tmp.textVariant, lineClamp };
      items[1] = closure_1_11(BioTextDefault, obj);
      obj.children = items;
      tmp4 = closure_1_12(View, obj);
    }
  }
  return tmp4;
}
function MemberJoinDates(userId) {
  userId = userId.userId;
  ({ guildId: importDefault, themeType } = userId);
  let tmp2;
  if (null != themeType) {
    tmp2 = dependencyMap[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_14;
  }
  ({ textVariant, columnGap } = tmp2);
  let obj = userId(504);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj1 = userId(504);
  const items1 = [GuildStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let guild = null;
    if (null != importDefault) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  let obj2 = userId(504);
  const items2 = [GuildMemberStore];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let member = null;
    if (null != importDefault) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  });
  let obj3 = userId(5407);
  let obj4 = SnowflakeUtilsDefault;
  const createdAtDate = obj3.getCreatedAtDate(obj4.extractTimestamp(userId), stateFromStores);
  let obj5 = userId(5407);
  let joinedAt;
  if (stateFromStores2 != null) {
    joinedAt = stateFromStores2.joinedAt;
  }
  const createdAtDate1 = obj5.getCreatedAtDate(joinedAt, stateFromStores);
  obj = { themeType, children: null };
  const intl = tmp4(1114).intl;
  obj.children = intl.string(userId(1114).t.a6XYD9);
  const items3 = [closure_11(Heading, obj)];
  obj = { style: null, children: null };
  const items4 = [closure_16().memberJoinDates, { columnGap }];
  obj.style = items4;
  obj1 = {
    themeType,
    icon: closure_11(tmp4(10818).ClydeIcon, { size: "xs" }),
    accessibilityLabel: null,
    children: null,
  };
  const intl2 = tmp4(1114).intl;
  obj1.accessibilityLabel = intl2.formatToPlainString(userId(1114).t["9t7w53"], { date: createdAtDate });
  obj1.children = createdAtDate;
  const items5 = [closure_11(TextWithIcon, obj1)];
  let tmp13Result = null != stateFromStores1 && null != createdAtDate1;
  if (tmp13Result) {
    obj2 = { children: null };
    obj3 = {
      variant: textVariant,
      color: "text-default",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children,
    };
    const items6 = [tmp15(tmp4(4556).Text, obj3)];
    obj4 = { themeType, icon: null, accessibilityLabel: null, children: null };
    obj5 = { guild: stateFromStores1, size: tmp4(5584).GuildIconSizes.XXSMALL };
    obj4.icon = tmp15(GuildIconDefault, obj5);
    const intl3 = tmp4(1114).intl;
    const obj6 = { guildName: stateFromStores1.name, date: createdAtDate1 };
    obj4.accessibilityLabel = intl3.formatToPlainString(tmp4(1114).t.FdLNDK, obj6);
    obj4.children = createdAtDate1;
    items6[1] = tmp15(TextWithIcon, obj4);
    obj2.children = items6;
    tmp13Result = tmp13(closure_13, obj2);
    const tmp9Result = GuildIconDefault;
  }
  const obj7 = { children: null };
  items5[1] = tmp13Result;
  obj.children = items5;
  items3[1] = closure_12(View, obj);
  obj7.children = items3;
  return closure_12(View, obj7);
}
function FriendsSinceDate(themeType) {
  themeType = themeType.themeType;
  let tmp;
  if (null != themeType) {
    tmp = dependencyMap[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  let obj = useFriendsSinceDate;
  const friendsSinceDate = obj.useFriendsSinceDate(themeType.userId);
  let tmp6 = null;
  if (null != friendsSinceDate) {
    obj = { children: null };
    obj = { themeType, children: null };
    const intl = tmp3(1114).intl;
    obj.children = intl.string(tmp3(1114).t.wlTO8v);
    const items = [closure_1_11(Heading, obj)];
    const obj1 = { variant: tmp.textVariant, color: "text-default", children: friendsSinceDate };
    items[1] = closure_1_11(tmp3(4556).Text, obj1);
    obj.children = items;
    tmp6 = closure_1_12(View, obj);
  }
  return tmp6;
}
function PolicyLinks(arg0) {
  ({ termsOfServiceUrl, privacyPolicyUrl, themeType } = arg0);
  if (null != termsOfServiceUrl) {
    let obj = { themeType, children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t.l6DP2n);
    const items = [closure_1_11(Heading, obj)];
    obj = { style: tmp.policyLinks, children: null };
    let tmp5Result = null != termsOfServiceUrl;
    if (tmp5Result) {
      obj = { url: termsOfServiceUrl, label: null, themeType: null };
      const intl2 = tmp7(1114).intl;
      obj.label = intl2.string(tmp7(1114).t.s7STcY);
      obj.themeType = themeType;
      tmp5Result = tmp5(PolicyLink, obj);
    }
    const items1 = [tmp5Result];
    tmp5Result = null != privacyPolicyUrl;
    if (tmp5Result) {
      const obj1 = { url: privacyPolicyUrl, label: null, themeType: null };
      const intl3 = tmp7(1114).intl;
      obj1.label = intl3.string(tmp7(1114).t.kH3JR5);
      obj1.themeType = themeType;
      tmp5Result = tmp5(PolicyLink, obj1);
    }
    const obj2 = { children: null };
    items1[1] = tmp5Result;
    obj.children = items1;
    items[1] = closure_1_12(View, obj);
    obj2.children = items;
    let tmp3Result = tmp3(tmp4, obj2);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
}
function PolicyLink(children) {
  ({ url: require, themeType } = children);
  let tmp;
  if (null != themeType) {
    tmp = dependencyMap[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  return closure_11(native.PressableOpacity, {
    accessibilityRole: "link",
    onPress() {
      const obj = { href };
      return obj.handleClick(obj);
    },
    children: closure_11(Text_Text.Text, { variant: tmp.textVariant, color: "text-link", children: children.label }),
  });
}
function BotSlashCommands(channel) {
  channel = channel.channel;
  let analyticsLocations;
  let context;
  application = undefined;
  ({ applicationId, commandIds, themeType } = channel);
  analyticsLocations = analyticsLocations(context[23])().analyticsLocations;
  let obj = channel(context[24]);
  context = obj.useUserProfileAnalyticsContext().context;
  const tmp = closure_16();
  ({ commands, application } = analyticsLocations(context[25])(channel, applicationId, commandIds));
  const items = [application, , , ,];
  ({ id: arr[1], guild_id: arr[2] } = channel);
  items[3] = context;
  items[4] = analyticsLocations;
  let tmp8Result = null;
  if (null != commands) {
    tmp8Result = null;
    if (0 !== commands.length) {
      obj = { themeType, children: null };
      const intl2 = tmp3(tmp2[13]).intl;
      obj.children = intl2.string(tmp3(tmp2[13]).t["0hKkS+"]);
      const items1 = [closure_11(Heading, obj), ,];
      obj = {
        style: tmp.slashCommands,
        children: commands.map((command) =>
          closure_2_11(UserProfileAboutMeCardCommandDefault, { application, channel, command }, command.id),
        ),
      };
      items1[1] = closure_11(View, obj);
      let tmp10Result = null != application && null != application.bot;
      if (tmp10Result) {
        const obj1 = { size: "sm", variant: "tertiary", text: null, onPress: null };
        const intl = tmp3(tmp2[13]).intl;
        obj1.text = intl.string(tmp3(tmp2[13]).t.VEfKyb);
        obj1.onPress = tmp5;
        tmp10Result = tmp10(tmp3(tmp2[34]).Button, obj1);
      }
      const obj2 = { children: null };
      items1[2] = tmp10Result;
      obj2.children = items1;
      tmp8Result = closure_12(View, obj2);
      tmp10 = closure_11;
    }
  }
  return tmp8Result;
}
const View = fn(17).View;
const Constants = fn(7208);
({ DIVIDER_DOT: closure_8, UserProfileThemeTypes } = Constants);
const Routes = fn(1074).Routes;
const AppLauncherRouteName = fn(1482).AppLauncherRouteName;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = {
  headingVariant: "text-sm/semibold",
  textVariant: "text-md/normal",
  headingSpacing: 8,
  rowGap: 24,
  columnGap: 6,
};
const dependencyMap = {
  [UserProfileThemeTypes.PREVIEW]: {
    headingVariant: "text-xs/semibold",
    textVariant: "text-sm/normal",
    headingSpacing: 4,
    rowGap: 12,
    columnGap: 3,
  },
};
const createStyles = fn(4560);
let closure_16 = createStyles.createStyles({
  card: { flexDirection: "column" },
  textWithIcon: { flexDirection: "row", alignItems: "center" },
  memberJoinDates: { flexDirection: "row", flexWrap: "wrap" },
  slashCommands: { flex: 1, flexDirection: "row", flexWrap: "wrap", marginBottom: 12 },
  policyLinks: { rowGap: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCard.tsx");

export default function UserProfileAboutMeCard(arg0) {
  ({ userId, displayProfile, channel, themeType } = arg0);
  ({ pendingBio, bioLineClamp, style } = arg0);
  let tmp2;
  if (null != themeType) {
    tmp2 = dependencyMap[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_14;
  }
  let application;
  if (displayProfile != null) {
    application = displayProfile.application;
  }
  let obj = { style: null, children: null };
  const items = [closure_16().card, { rowGap: tmp2.rowGap }, style];
  obj.style = items;
  const tmp = closure_16();
  const tmp5 = closure_1_12;
  const items1 = [closure_1_11(Bio, { userId, displayProfile, pendingBio, themeType, lineClamp: bioLineClamp }), , , ,];
  obj = { userId, guildId: null, themeType: null };
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  obj.guildId = guildId;
  obj.themeType = themeType;
  items1[1] = closure_1_11(MemberJoinDates, obj);
  items1[2] = closure_1_11(FriendsSinceDate, { userId, themeType });
  let termsOfServiceUrl;
  if (application != null) {
    termsOfServiceUrl = application.termsOfServiceUrl;
  }
  obj = { termsOfServiceUrl, privacyPolicyUrl: null, themeType: null };
  let privacyPolicyUrl;
  if (application != null) {
    privacyPolicyUrl = application.privacyPolicyUrl;
  }
  obj.privacyPolicyUrl = privacyPolicyUrl;
  obj.themeType = themeType;
  items1[3] = closure_1_11(PolicyLinks, obj);
  let prop;
  if (application != null) {
    prop = application.popularApplicationCommandIds;
  }
  let tmp7Result = null != prop && null != channel;
  if (tmp7Result) {
    const obj1 = {
      applicationId: application.id,
      channel,
      commandIds: application.popularApplicationCommandIds,
      themeType,
    };
    tmp7Result = tmp7(BotSlashCommands, obj1);
  }
  items1[4] = tmp7Result;
  obj.children = items1;
  return tmp5(UserProfileCardDefault, obj);
}
