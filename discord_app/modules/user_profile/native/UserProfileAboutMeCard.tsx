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
  let token = useToken.useToken(nativeDefault.modules.mobile.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE);
  if (token == null) {
    token = headingVariant;
  }
  return closure_1_11(Text_Text.Text, {
    accessibilityRole: "header",
    variant: token,
    color: "user-profile-about-me-heading-text",
    style: { marginBottom: headingSpacing },
    children: children.children,
  });
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
      const obj = { children: null };
      const obj2 = { themeType, children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.ZzAR2Y);
      const items = [closure_1_11(Heading, obj2)];
      const obj3 = { bio: previewBio, userId, textVariant: tmp.textVariant, lineClamp };
      items[1] = closure_1_11(BioTextDefault, obj3);
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
  const tmp = closure_16();
  const items = [LocaleStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => locale.locale);
  const obj = userId(504);
  const items1 = [GuildStore];
  const stateFromStores1 = userId(504).useStateFromStores(items1, () => {
    let guild = null;
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
  const obj4 = userId(5492);
  const createdAtDate = obj4.getCreatedAtDate(SnowflakeUtilsDefault.extractTimestamp(userId), stateFromStores);
  let joinedAt;
  if (stateFromStores2 != null) {
    joinedAt = stateFromStores2.joinedAt;
  }
  const createdAtDate1 = userId(5492).getCreatedAtDate(joinedAt, stateFromStores);
  const obj7 = { themeType, children: null };
  const intl = tmp4(1115).intl;
  obj7.children = intl.string(userId(1115).t.a6XYD9);
  const items3 = [closure_11(Heading, obj7)];
  const obj8 = { style: null, children: null };
  const items4 = [tmp.memberJoinDates, { columnGap }];
  obj8.style = items4;
  const obj9 = {
    themeType,
    icon: closure_11(userId(10951).ClydeIcon, { size: "xs" }),
    accessibilityLabel: null,
    children: null,
  };
  const intl2 = tmp4(1115).intl;
  obj9.accessibilityLabel = intl2.formatToPlainString(userId(1115).t["9t7w53"], { date: createdAtDate });
  obj9.children = createdAtDate;
  const items5 = [closure_11(TextWithIcon, obj9)];
  let tmp13Result = null != stateFromStores1 && null != createdAtDate1;
  if (tmp13Result) {
    const obj10 = { children: null };
    const obj11 = {
      variant: textVariant,
      color: "text-default",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children,
    };
    const items6 = [closure_11(tmp4(4635).Text, obj11)];
    const obj12 = { themeType, icon: null, accessibilityLabel: null, children: null };
    const obj13 = { guild: stateFromStores1, size: tmp4(5669).GuildIconSizes.XXSMALL };
    obj12.icon = closure_11(GuildIconDefault, obj13);
    const intl3 = tmp4(1115).intl;
    const obj14 = { guildName: stateFromStores1.name, date: createdAtDate1 };
    obj12.accessibilityLabel = intl3.formatToPlainString(tmp4(1115).t.FdLNDK, obj14);
    obj12.children = createdAtDate1;
    items6[1] = closure_11(TextWithIcon, obj12);
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
  const friendsSinceDate = useFriendsSinceDate.useFriendsSinceDate(themeType.userId);
  let tmp6 = null;
  if (null != friendsSinceDate) {
    const obj2 = { children: null };
    const obj3 = { themeType, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.wlTO8v);
    const items = [closure_1_11(Heading, obj3)];
    const obj4 = { variant: tmp.textVariant, color: "text-default", children: friendsSinceDate };
    items[1] = closure_1_11(Text_Text.Text, obj4);
    obj2.children = items;
    tmp6 = closure_1_12(View, obj2);
  }
  return tmp6;
}
function PolicyLinks(arg0) {
  ({ termsOfServiceUrl, privacyPolicyUrl, themeType } = arg0);
  if (null != termsOfServiceUrl) {
    const obj = { themeType, children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t.l6DP2n);
    const items = [closure_1_11(Heading, obj)];
    const obj2 = { style: tmp.policyLinks, children: null };
    let tmp5Result = null != termsOfServiceUrl;
    if (tmp5Result) {
      const obj3 = { url: termsOfServiceUrl, label: null, themeType: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.s7STcY);
      obj3.themeType = themeType;
      tmp5Result = closure_1_11(PolicyLink, obj3);
    }
    const items1 = [tmp5Result];
    let tmp5Result2 = null != privacyPolicyUrl;
    if (tmp5Result2) {
      const obj4 = { url: privacyPolicyUrl, label: null, themeType: null };
      const intl3 = util.intl;
      obj4.label = intl3.string(util.t.kH3JR5);
      obj4.themeType = themeType;
      tmp5Result2 = closure_1_11(PolicyLink, obj4);
    }
    const obj5 = { children: null };
    items1[1] = tmp5Result2;
    obj2.children = items1;
    items[1] = closure_1_12(View, obj2);
    obj5.children = items;
    let tmp3Result = closure_1_12(View, obj5);
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
      return MaskedLinkUtils.handleClick({ href });
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
  const tmp = closure_16();
  context = channel(context[24]).useUserProfileAnalyticsContext().context;
  let obj = channel(context[24]);
  ({ commands, application } = analyticsLocations(context[25])(channel, applicationId, commandIds));
  const items = [application, , , ,];
  ({ id: arr[1], guild_id: arr[2] } = channel);
  items[3] = context;
  items[4] = analyticsLocations;
  let tmp8Result = null;
  if (null != commands) {
    tmp8Result = null;
    if (0 !== commands.length) {
      let obj2 = { themeType, children: null };
      const intl2 = tmp3(tmp2[13]).intl;
      obj2.children = intl2.string(tmp3(tmp2[13]).t["0hKkS+"]);
      const items1 = [closure_11(Heading, obj2), ,];
      let obj3 = {
        style: tmp.slashCommands,
        children: commands.map((command) =>
          closure_2_11(UserProfileAboutMeCardCommandDefault, { application, channel, command }, command.id),
        ),
      };
      items1[1] = closure_11(View, obj3);
      let tmp10Result = null != application && null != application.bot;
      if (tmp10Result) {
        let obj4 = { size: "sm", variant: "tertiary", text: null, onPress: null };
        const intl = tmp3(tmp2[13]).intl;
        obj4.text = intl.string(tmp3(tmp2[13]).t.VEfKyb);
        obj4.onPress = tmp5;
        tmp10Result = closure_11(tmp3(tmp2[34]).Button, obj4);
      }
      const obj5 = { children: null };
      items1[2] = tmp10Result;
      obj5.children = items1;
      tmp8Result = closure_12(View, obj5);
    }
  }
  return tmp8Result;
}
const View = fn(17).View;
const Constants = fn(7315);
({ DIVIDER_DOT: closure_8, UserProfileThemeTypes } = Constants);
const Routes = fn(1074).Routes;
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
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
const createStyles = fn(4639);
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
  const obj = { style: null, children: null };
  const items = [closure_16().card, { rowGap: tmp2.rowGap }, style];
  obj.style = items;
  const tmp = closure_16();
  const items1 = [closure_1_11(Bio, { userId, displayProfile, pendingBio, themeType, lineClamp: bioLineClamp }), , , ,];
  const obj2 = { userId, guildId: null, themeType: null };
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  obj2.guildId = guildId;
  obj2.themeType = themeType;
  items1[1] = closure_1_11(MemberJoinDates, obj2);
  items1[2] = closure_1_11(FriendsSinceDate, { userId, themeType });
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
  items1[3] = closure_1_11(PolicyLinks, obj3);
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
    tmp7Result = closure_1_11(BotSlashCommands, obj4);
  }
  items1[4] = tmp7Result;
  obj.children = items1;
  return closure_1_12(UserProfileCardDefault, obj);
}
