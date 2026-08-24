// === Module 9585: Heading ===

// Module 9585 (Heading)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import map from "map" /* 4100 */;
import Text from "Text" /* 4739 */;
import DividerDefault from "Divider" /* 7223 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 7226 */;
import LinkButtonDefault from "LinkButton" /* 9586 */;
import useFriendsSinceDate from "useFriendsSinceDate" /* 9590 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "_getSystemLocale" /* 1995 */;
import closure_6 from "trackCommunicationDisabled" /* 1991 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 7224 */;
import { Routes } from "ME" /* 676 */;
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
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
  let variant = map.useToken(ThemesDefault.modules.mobile.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE);
  if (variant == null) {
    variant = headingVariant;
  }
  return closure_11(Text.Text, { accessibilityRole: "header", variant, color: "user-profile-about-me-heading-text", style: { marginBottom }, children: children.children });
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
  const obj = { style: items, accessible: true, accessibilityLabel, children: null };
  items = [callback3().textWithIcon, { columnGap: tmp2.columnGap }];
  const items1 = [icon, callback(Text.Text, { variant: tmp2.textVariant, color: "text-default", children })];
  obj[3] = items1;
  return callback2(View, obj);
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
      obj = { themeType: null, children: null };
      obj[0] = themeType;
      const intl = getSystemLocale.intl;
      obj[1] = intl.string(getSystemLocale.t.ZzAR2Y);
      const items = [callback(Heading, obj), ];
      obj = { bio: null, userId: null, textVariant: null, lineClamp: null };
      obj[0] = previewBio;
      obj[1] = userId;
      obj[2] = tmp.textVariant;
      obj[3] = lineClamp;
      items[1] = callback(LinkButtonDefault, obj);
      obj[0] = items;
      tmp4 = callback2(View, obj);
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
  let obj = userId(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  obj1 = userId(589);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let guild = null;
    if (null != closure_1) {
      guild = closure_1_7.getGuild(tmp);
    }
    return guild;
  });
  let obj2 = userId(589);
  const items2 = [closure_6];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let member = null;
    if (null != closure_1) {
      member = closure_1_6.getMember(tmp, userId);
    }
    return member;
  });
  let obj3 = userId(5229);
  let obj4 = DISCORD_EPOCHDefault;
  const createdAtDate = obj3.getCreatedAtDate(obj4.extractTimestamp(userId), stateFromStores);
  let obj5 = userId(5229);
  let joinedAt;
  if (stateFromStores2 != null) {
    joinedAt = stateFromStores2.joinedAt;
  }
  const createdAtDate1 = obj5.getCreatedAtDate(joinedAt, stateFromStores);
  obj = { themeType, children: null };
  const intl = tmp4(1236).intl;
  obj[1] = intl.string(userId(1236).t.a6XYD9);
  const items3 = [callback(Heading, obj), ];
  obj = { style: items4, children: null };
  items4 = [callback3().memberJoinDates, { columnGap }];
  obj1 = { themeType, icon: callback(tmp4(9588).ClydeIcon, { size: "xs" }), accessibilityLabel: null, children: null };
  const intl2 = tmp4(1236).intl;
  obj1[2] = intl2.formatToPlainString(userId(1236).t["9t7w53"], { date: createdAtDate });
  obj1[3] = createdAtDate;
  const items5 = [callback(TextWithIcon, obj1), ];
  let tmp13Result = null != stateFromStores1 && null != createdAtDate1;
  if (tmp13Result) {
    obj2 = { children: null };
    obj3 = { variant: null, color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    obj3[0] = textVariant;
    obj3[4] = closure_8;
    const items6 = [tmp15(tmp4(4739).Text, obj3), ];
    obj4 = { themeType: null, icon: null, accessibilityLabel: null, children: null };
    obj4[0] = themeType;
    obj5 = { guild: null, size: null };
    obj5[0] = stateFromStores1;
    obj5[1] = tmp4(7226).GuildIconSizes.XXSMALL;
    obj4[1] = tmp15(GuildIconSizesDefault, obj5);
    const intl3 = tmp4(1236).intl;
    const obj6 = { guildName: null, date: null };
    obj6[0] = stateFromStores1.name;
    obj6[1] = createdAtDate1;
    obj4[2] = intl3.formatToPlainString(tmp4(1236).t.FdLNDK, obj6);
    obj4[3] = createdAtDate1;
    items6[1] = tmp15(TextWithIcon, obj4);
    obj2[0] = items6;
    tmp13Result = tmp13(closure_13, obj2);
    const tmp9Result = GuildIconSizesDefault;
  }
  const obj7 = { children: null };
  items5[1] = tmp13Result;
  obj[1] = items5;
  items3[1] = closure_12(View, obj);
  obj7[0] = items3;
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
    obj = { themeType: null, children: null };
    obj[0] = themeType;
    const intl = tmp3(1236).intl;
    obj[1] = intl.string(tmp3(1236).t.wlTO8v);
    const items = [callback(Heading, obj), ];
    obj1 = { variant: null, color: "text-default", children: null };
    obj1[0] = tmp.textVariant;
    obj1[2] = friendsSinceDate;
    items[1] = callback(tmp3(4739).Text, obj1);
    obj[0] = items;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
}
function PolicyLinks(arg0) {
  ({ termsOfServiceUrl, privacyPolicyUrl, themeType } = arg0);
  if (null != termsOfServiceUrl) {
    let obj = { themeType: null, children: null };
    obj[0] = themeType;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.l6DP2n);
    const items = [callback(Heading, obj), ];
    obj = { style: null, children: null };
    obj[0] = tmp.policyLinks;
    let tmp5Result = null != termsOfServiceUrl;
    if (tmp5Result) {
      obj = { url: null, label: null, themeType: null };
      obj[0] = termsOfServiceUrl;
      const intl2 = tmp7(1236).intl;
      obj[1] = intl2.string(tmp7(1236).t.s7STcY);
      obj[2] = themeType;
      tmp5Result = tmp5(PolicyLink, obj);
    }
    const items1 = [tmp5Result, ];
    tmp5Result = null != privacyPolicyUrl;
    if (tmp5Result) {
      obj1 = { url: null, label: null, themeType: null };
      obj1[0] = privacyPolicyUrl;
      const intl3 = tmp7(1236).intl;
      obj1[1] = intl3.string(tmp7(1236).t.kH3JR5);
      obj1[2] = themeType;
      tmp5Result = tmp5(PolicyLink, obj1);
    }
    const obj2 = { children: null };
    items1[1] = tmp5Result;
    obj[1] = items1;
    items[1] = closure_12(View, obj);
    obj2[0] = items;
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
  return callback(Button.PressableOpacity, {
    accessibilityRole: "link",
    onPress() {
      let obj = closure_1_0(closure_1_2[22]);
      obj = { href: closure_0 };
      return obj.handleClick(obj);
    },
    children: callback(Text.Text, { variant: tmp.textVariant, color: "text-link", children: children.label })
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
  const tmp = callback3();
  ({ commands, application } = analyticsLocations(context[25])(channel, applicationId, commandIds));
  const items = [application, , , , ];
  ({ id: arr[1], guild_id: arr[2] } = channel);
  items[3] = context;
  items[4] = analyticsLocations;
  let tmp8Result = null;
  if (null != commands) {
    tmp8Result = null;
    if (0 !== commands.length) {
      obj = { themeType: null, children: null };
      obj[0] = themeType;
      const intl2 = tmp3(tmp2[13]).intl;
      obj[1] = intl2.string(tmp3(tmp2[13]).t["0hKkS+"]);
      const items1 = [callback(Heading, obj), , ];
      obj = { style: null, children: null };
      obj[0] = tmp.slashCommands;
      obj[1] = commands.map((command) => closure_1_11(analyticsLocations(context[33]), { application, channel, command }, command.id));
      items1[1] = callback(View, obj);
      let tmp10Result = null != application && null != application.bot;
      if (tmp10Result) {
        obj1 = { size: "sm", variant: "tertiary", text: null, onPress: null };
        const intl = tmp3(tmp2[13]).intl;
        obj1[2] = intl.string(tmp3(tmp2[13]).t.VEfKyb);
        obj1[3] = tmp5;
        tmp10Result = tmp10(tmp3(tmp2[34]).Button, obj1);
      }
      const obj2 = { children: null };
      items1[2] = tmp10Result;
      obj2[0] = items1;
      tmp8Result = closure_12(View, obj2);
      tmp10 = callback;
      const tmp8 = closure_12;
      let tmp9 = View;
    }
  }
  return tmp8Result;
}
({ DIVIDER_DOT: closure_8, UserProfileThemeTypes } = ARBITRARY_LARGE_OFFSET);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = { headingVariant: "text-sm/semibold", textVariant: "text-md/normal", headingSpacing: 8, rowGap: 24, columnGap: 6 };
let closure_15 = { [UserProfileThemeTypes.PREVIEW]: { headingVariant: "text-xs/semibold", textVariant: "text-sm/normal", headingSpacing: 4, rowGap: 12, columnGap: 3 } };
let closure_16 = createCacheKey.createStyles({ card: { flexDirection: "column" }, textWithIcon: { flexDirection: "row", alignItems: "center" }, memberJoinDates: { flexDirection: "row", flexWrap: "wrap" }, slashCommands: { flex: 1, flexDirection: "row", flexWrap: "wrap", marginBottom: 12 }, policyLinks: { rowGap: 8 } });
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCard.tsx");

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
  let obj = { style: items, children: null };
  items = [callback3().card, { rowGap: tmp2.rowGap }, style];
  const tmp = callback3();
  const tmp5 = closure_12;
  const items1 = [callback(Bio, { userId, displayProfile, pendingBio, themeType, lineClamp: bioLineClamp }), , , , ];
  obj = { userId, guildId: null, themeType: null };
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  obj[1] = guildId;
  obj[2] = themeType;
  items1[1] = callback(MemberJoinDates, obj);
  items1[2] = callback(FriendsSinceDate, { userId, themeType });
  let termsOfServiceUrl;
  if (application != null) {
    termsOfServiceUrl = application.termsOfServiceUrl;
  }
  obj = { termsOfServiceUrl, privacyPolicyUrl: null, themeType: null };
  let privacyPolicyUrl;
  if (application != null) {
    privacyPolicyUrl = application.privacyPolicyUrl;
  }
  obj[1] = privacyPolicyUrl;
  obj[2] = themeType;
  items1[3] = callback(PolicyLinks, obj);
  let prop;
  if (application != null) {
    prop = application.popularApplicationCommandIds;
  }
  let tmp7Result = null != prop && null != channel;
  if (tmp7Result) {
    obj1 = { applicationId: null, channel: null, commandIds: null, themeType: null };
    obj1[0] = application.id;
    obj1[1] = channel;
    obj1[2] = application.popularApplicationCommandIds;
    obj1[3] = themeType;
    tmp7Result = tmp7(BotSlashCommands, obj1);
  }
  items1[4] = tmp7Result;
  obj[1] = items1;
  return tmp5(DividerDefault, obj);
};