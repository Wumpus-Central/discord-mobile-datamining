import _objectWithoutProperties from "_objectWithoutProperties";
import usePremiumUpsellConfig from "usePremiumUpsellConfig";
import get_ActivityIndicator from "getSystemLocale";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import { FLOATING_UPSELL_HEIGHT } from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import jsxProd from "styles";

let AnalyticsPages;
let AnalyticsSections;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function EditGuildProfileBanner(user) {
  let dependencyMap;
  let disabled;
  let displayProfile;
  let guildMember;
  let importDefault;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  user = user.user;
  ({ guildId: importDefault, guildMemberProfile: dependencyMap, pendingBanner } = user);
  let c4;
  let analyticsLocations;
  ({ displayProfile, guildMember, pendingAvatarSrc, pendingThemeColors, disabled } = user);
  let obj = importDefault(3931);
  let result = obj.canUsePremiumGuildMemberProfile(user);
  c4 = result;
  analyticsLocations = importDefault(5610)(importDefault(5630).EDIT_BANNER).analyticsLocations;
  obj = { value: analyticsLocations, children: null };
  obj = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, showProfilePreviewButton: false, showEditButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  const tmp3 = importDefault(5610);
  if (result) {
    result = null != guildMember;
  }
  obj[6] = result;
  obj[7] = function onPressEdit() {
    if (c4) {
      let tmpResult = tmp(tmp2[13]);
      let obj = { user: null, analyticsLocations: null, showRemoveBanner: null, removeText: null, onBannerChange: null };
      obj[0] = user;
      obj[1] = analyticsLocations;
      const tmp13 = user(outer1_2[15])(outer1_2[14], outer1_2.paths);
      let banner;
      if (banner != null) {
        banner = banner.banner;
      }
      obj[2] = user(outer1_2[16]).showRemoveBanner(pendingBanner, banner);
      const intl = tmp9(outer1_2[17]).intl;
      obj[3] = intl.string(user(outer1_2[17]).t.jHlJNS);
      obj[4] = function onBannerChange(banner, bannerOriginalMd5) {
        let obj = outer1_0(outer1_2[18]);
        obj = { guildId: closure_1, banner, bannerOriginalMd5 };
        return obj.setPendingChanges(obj);
      };
      tmpResult.openLazy(tmp13, "Change Banner", obj);
      const obj7 = user(outer1_2[16]);
      const tmp17 = pendingBanner;
    } else {
      tmpResult = tmp(tmp2[19]);
      obj = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
      obj[0] = outer1_16.PREMIUM_GUILD_PROFILE;
      const obj1 = { section: null, object: null };
      obj1[0] = outer1_12.PREMIUM_GUILD_MEMBER_PROFILE;
      obj1[1] = outer1_11.EDIT_GUILD_PROFILE_BANNER;
      obj[1] = obj1;
      obj[2] = analyticsLocations;
      const obj2 = { type: null };
      obj2[0] = outer1_17.PREMIUM_GUILD_IDENTITY_MODAL;
      obj[3] = obj2;
      const result = tmpResult.handleShowUpsellAlert(obj);
    }
  };
  let intl = tmp5(1236).intl;
  obj[8] = intl.string(user(1236).t["95hPAe"]);
  obj[9] = disabled;
  obj[1] = closure_18(importDefault(13808), obj);
  return closure_18(user(5610).AnalyticsLocationProvider, obj);
}
let closure_3 = ["nick", "bio", "guild_tag"];
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticsObjects: unpackModuleId, AnalyticsSections } = ME);
({ BIO_MAX_LENGTH: map1, DISPLAY_NAME_MAX_LENGTH: closure_14, PRONOUNS_MAX_LENGTH: closure_15, UpsellTypes: closure_16, AnalyticsPages } = ME);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default function GuildProfileEditForm(currentUser) {
  let avatarBackground;
  let bio;
  let containerBackground;
  let errors;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let guild_tag;
  let isDisabled;
  let nick;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBanner;
  let pendingBio;
  let pendingDisplayNameStyles;
  let pendingNameplate;
  let pendingNickname;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let primaryColor;
  let secondaryColor;
  let theme;
  currentUser = currentUser.currentUser;
  let guild;
  let analyticsLocations;
  const tmp3 = guild(analyticsLocations[20])();
  const tmp4 = guild(analyticsLocations[21])();
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const insets = guild(analyticsLocations[23])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[24]).space.PX_16;
  let obj = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  obj = { ref: ref3, offset: null };
  obj = { type: "toValue", value: null };
  const tmp5 = guild(analyticsLocations[22])();
  obj[1] = guild(analyticsLocations[24]).space.PX_64;
  obj[1] = obj;
  items[2] = obj;
  obj[1] = items;
  obj[2] = ref;
  const onFocus = guild(analyticsLocations[25])(obj).onFocus;
  const tmp11 = guild(analyticsLocations[26])();
  guild = tmp11.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio } = tmp11);
  ({ pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp11);
  let obj3 = currentUser(analyticsLocations[27]);
  const items1 = [trackCommunicationDisabled];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = outer1_8.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  let obj4 = currentUser(analyticsLocations[27]);
  const items2 = [createUserWidgetFromServer];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    let guildMemberProfile = null;
    if (null != guild) {
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      guildMemberProfile = outer1_9.getGuildMemberProfile(currentUser.id, id);
    }
    return guildMemberProfile;
  });
  let id;
  const tmp10 = guild(analyticsLocations[25]);
  if (guild != null) {
    id = guild.id;
  }
  const tmp15Result = guild(analyticsLocations[28])(currentUser.id, id);
  let tmp12Result = tmp12(tmp2[29]);
  const customStatusActivity = tmp12Result.useCustomStatusActivity();
  const tmp15 = guild(analyticsLocations[28]);
  tmp12Result = tmp12(tmp2[31]);
  const pendingAvatarSrc = tmp12Result.getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj1 = { userId: currentUser.id, image: pendingAvatar };
  const tmp19 = guild(analyticsLocations[30])(tmp15Result);
  const canEditNickname = currentUser(analyticsLocations[32]).useGuildActionSheetPermissions(guild).canEditNickname;
  let tmpResult = tmp(tmp2[9]);
  const result = tmpResult.canUsePremiumGuildMemberProfile(currentUser);
  const tmp12Result1 = currentUser(analyticsLocations[32]);
  let themeColors;
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp58Result3 = !result;
  const tmp12Result2 = currentUser(analyticsLocations[33]);
  if (!result) {
    tmp58Result3 = !tmp5;
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.nick;
  }
  if (str == null) {
    str = "";
  }
  let str2;
  if (stateFromStores1 != null) {
    str2 = stateFromStores1.pronouns;
  }
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmp15Result != null) {
    str3 = tmp15Result._userProfile.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  if (pendingPronouns == null) {
    pendingPronouns = str2;
  }
  let str4;
  if (stateFromStores1 != null) {
    str4 = stateFromStores1.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp15Result != null) {
    str5 = tmp15Result._userProfile.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  tmpResult = tmp(tmp2[10]);
  const items3 = [guild(analyticsLocations[11]).USER_SETTINGS];
  analyticsLocations = tmpResult(items3).analyticsLocations;
  const canResetThemeColorsResult = currentUser(analyticsLocations[33]).canResetThemeColors(pendingThemeColors, themeColors);
  ({ theme, primaryColor, secondaryColor } = guild(analyticsLocations[34])({ user: currentUser, displayProfile: tmp15Result, pendingThemeColors }));
  const tmp26 = guild(analyticsLocations[34])({ user: currentUser, displayProfile: tmp15Result, pendingThemeColors });
  const userProfileColors = currentUser(analyticsLocations[35]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp58Result3) {
    num = FLOATING_UPSELL_HEIGHT;
  }
  const sum = insets.bottom + num;
  const obj2 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[24]).space.PX_16;
  const tmp12Result3 = currentUser(analyticsLocations[35]);
  if (nick != null) {
    const first = nick[0];
  }
  const pronouns = errors.pronouns;
  if (pronouns != null) {
    const first1 = pronouns[0];
  }
  if (bio != null) {
    const first2 = bio[0];
  }
  if (guild_tag != null) {
    let first3 = guild_tag[0];
  }
  if (null == guild) {
    return null;
  } else {
    obj3 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
    obj3[0] = theme;
    obj3[1] = primaryColor;
    obj3[2] = secondaryColor;
    obj4 = { style: null, children: null };
    const items4 = [tmp4.container, ];
    const obj5 = { backgroundColor: null };
    obj5[0] = gradientSecondaryBackground;
    items4[1] = obj5;
    obj4[0] = items4;
    const obj6 = { ref: null, children: null };
    obj6[0] = ref;
    const obj7 = { style: null };
    obj7[0] = tmp4.bounceOffset;
    const items5 = [callback2(closure_7, obj7), ];
    const obj8 = { style: null, children: null };
    const obj9 = { backgroundColor: null };
    obj9[0] = gradientSecondaryBackground;
    obj8[0] = obj9;
    const obj10 = { user: null, displayProfile: null, guildId: null, guildMember: null, guildMemberProfile: null, pendingAvatarSrc: null, pendingBanner: null, pendingThemeColors: null, disabled: null };
    obj10[0] = currentUser;
    obj10[1] = tmp15Result;
    obj10[2] = guild.id;
    obj10[3] = stateFromStores;
    obj10[4] = stateFromStores1;
    obj10[5] = pendingAvatarSrc;
    obj10[6] = pendingBanner;
    obj10[7] = pendingThemeColors;
    obj10[8] = isDisabled;
    const items6 = [callback2(EditGuildProfileBanner, obj10), ];
    let tmp58Result = null;
    if (null != guild) {
      const obj11 = { style: null, children: null };
      const items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj2;
      obj11[0] = items7;
      const obj12 = { userId: null, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
      obj12[0] = currentUser.id;
      let tmp36 = isDisabled;
      if (!isDisabled) {
        tmp36 = !result;
      }
      obj12[1] = tmp36;
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj12[3] = id1;
      obj12[4] = obj2;
      obj11[1] = tmp58(tmp(tmp2[38]), obj12);
      tmp58Result = tmp58(tmp60, obj11);
      const tmpResult1 = tmp(tmp2[38]);
    }
    const items8 = [tmp58Result, ];
    const obj13 = { fallbackBackground: null, primaryColor: null, secondaryColor: null, containerStyle: null, children: null };
    obj13[0] = gradientFallbackBackground;
    obj13[1] = primaryColor;
    obj13[2] = secondaryColor;
    const items9 = [, , ];
    ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
    const obj14 = { paddingTop: 0, paddingBottom: null };
    obj14[1] = sum1;
    items9[2] = obj14;
    obj13[3] = items9;
    const obj15 = { customStatusActivity: null, hasCustomProfileTheme: null, style: null, emojiOnlyStyle: null, editEnabled: true };
    obj15[0] = customStatusActivity;
    obj15[1] = null != primaryColor;
    ({ customStatusBubble: obj18[2], emojiOnlyCustomStatusBubble: obj18[3] } = tmp3);
    const items10 = [callback2(tmp(tmp2[40]), obj15), , ];
    const obj16 = { user: null, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", guildId: null, pendingDisplayNameStyles: null };
    obj16[0] = currentUser;
    let tmp41 = pendingNickname;
    const tmp61 = closure_6;
    const tmpResult2 = tmp(tmp2[39]);
    if (pendingNickname == null) {
      tmp41 = str;
    }
    obj16[1] = tmp41;
    let tmp42 = str3;
    if ("" !== pendingPronouns) {
      tmp42 = pendingPronouns;
    }
    obj16[2] = tmp42;
    obj16[3] = tmp19;
    obj16[4] = containerBackground;
    obj16[6] = guild.id;
    obj16[7] = pendingDisplayNameStyles;
    items10[1] = callback2(tmp(tmp2[41]), obj16);
    let tmp59Result = null;
    if (null != guild) {
      const obj17 = { style: null, children: null };
      const items11 = [tmp4.formContainer, ];
      const obj18 = { backgroundColor: null, paddingBottom: 20 };
      obj18[0] = containerBackground;
      items11[1] = obj18;
      obj17[0] = items11;
      let tmp44 = null;
      if (null == first2) {
        tmp44 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp30).length > 0) {
              const intl = tmp12(tmp2[17]).intl;
              stringResult = intl.string(tmp12(tmp2[17]).t.s35OuK);
            }
            first3 = stringResult;
          }
          tmp58Result = null;
          if (null != first3) {
            tmp58Result = null;
            if ("" !== first3) {
              const obj19 = { style: null, children: null };
              obj19[0] = tmp4.errorContainer;
              const obj20 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
              obj20[2] = first3;
              obj19[1] = tmp58(tmp12(tmp2[36]).Text, obj20);
              tmp58Result = tmp58(tmp60, obj19);
            }
          }
          tmp44 = tmp58Result;
        }
      }
      const items12 = [tmp44, , , , , , , , , ];
      const obj21 = { inputRef: null, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, isDisabled: null };
      obj21[0] = ref1;
      const intl2 = tmp12(tmp2[17]).intl;
      obj21[1] = intl2.string(tmp12(tmp2[17]).t.me1lRk);
      obj21[2] = first;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      obj21[3] = pendingNickname;
      obj21[4] = onFocus;
      obj21[5] = function onChange(nickname) {
        let obj = currentUser(analyticsLocations[18]);
        obj = { guildId: guild.id, nickname };
        return obj.setPendingChanges(obj);
      };
      const tmpResult4 = tmp(tmp2[42]);
      obj21[6] = tmp(tmp2[43]).getName(currentUser);
      obj21[7] = closure_14;
      let tmp50 = !canEditNickname;
      if (canEditNickname) {
        tmp50 = isDisabled;
      }
      obj21[8] = tmp50;
      items12[1] = tmp58(tmpResult4, obj21);
      let tmp58Result1 = result;
      if (result) {
        const obj22 = { user: null, guildId: null };
        obj22[0] = currentUser;
        obj22[1] = guild.id;
        tmp58Result1 = tmp58(tmp(tmp2[44]), obj22);
      }
      items12[2] = tmp58Result1;
      const obj23 = { inputRef: null, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, isDisabled: null };
      obj23[0] = ref2;
      const tmpResult5 = tmp(tmp2[43]);
      const intl3 = tmp12(tmp2[17]).intl;
      obj23[1] = intl3.string(tmp12(tmp2[17]).t["+T3RI/"]);
      obj23[2] = first1;
      const intl4 = tmp12(tmp2[17]).intl;
      obj23[3] = intl4.string(tmp12(tmp2[17]).t.NZqtIp);
      obj23[4] = pendingPronouns;
      obj23[5] = onFocus;
      obj23[6] = function onChange(pronouns) {
        let obj = currentUser(analyticsLocations[18]);
        obj = { guildId: guild.id, pronouns };
        return obj.setPendingChanges(obj);
      };
      obj23[7] = str3;
      obj23[8] = closure_15;
      obj23[9] = isDisabled;
      items12[3] = tmp58(tmp(tmp2[42]), obj23);
      let tmp58Result2 = null;
      if (result) {
        const obj24 = { inputRef: null, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, numberOfLines: 5, isDisabled: null };
        obj24[0] = ref3;
        const intl5 = tmp12(tmp2[17]).intl;
        obj24[1] = intl5.string(tmp12(tmp2[17]).t.ZzAR2Y);
        obj24[2] = first2;
        const intl6 = tmp12(tmp2[17]).intl;
        obj24[3] = intl6.string(tmp12(tmp2[17]).t.S5O8U2);
        if (pendingBio == null) {
          pendingBio = str4;
        }
        obj24[4] = pendingBio;
        obj24[5] = onFocus;
        obj24[6] = function onChange(bio) {
          let obj = currentUser(analyticsLocations[18]);
          obj = { guildId: guild.id, bio };
          return obj.setPendingChanges(obj);
        };
        obj24[7] = str5;
        obj24[8] = closure_13;
        obj24[10] = isDisabled;
        tmp58Result2 = tmp58(tmp(tmp2[42]), obj24);
        const tmpResult7 = tmp(tmp2[42]);
      }
      items12[4] = tmp58Result2;
      const obj25 = { pendingAvatarSrc: null, pendingThemeColors: null, user: null, guildId: null, onProfileThemeColorsChanged: null, showResetMenu: null };
      obj25[0] = pendingAvatarSrc;
      obj25[1] = pendingThemeColors;
      obj25[2] = currentUser;
      obj25[3] = guild.id;
      obj25[4] = function onProfileThemeColorsChanged(themeColors) {
        let obj = currentUser(analyticsLocations[18]);
        obj = { guildId: guild.id, themeColors };
        return obj.setPendingChanges(obj);
      };
      obj25[5] = canResetThemeColorsResult;
      items12[5] = tmp58(tmp(tmp2[45]), obj25);
      const obj26 = { user: null, guildId: null, pendingAvatarDecoration: null };
      obj26[0] = currentUser;
      obj26[1] = guild.id;
      obj26[2] = pendingAvatarDecoration;
      items12[6] = tmp58(tmp(tmp2[46]), obj26);
      const obj27 = { user: null, guildId: null, pendingProfileEffect: null, displayProfile: null };
      obj27[0] = currentUser;
      obj27[1] = guild.id;
      obj27[2] = pendingProfileEffect;
      obj27[3] = tmp15Result;
      items12[7] = tmp58(tmp(tmp2[47]), obj27);
      const obj28 = { user: null, guildId: null, pendingProfileFrame: null, displayProfile: null };
      obj28[0] = currentUser;
      obj28[1] = guild.id;
      obj28[2] = pendingProfileFrame;
      obj28[3] = tmp15Result;
      items12[8] = tmp58(tmp(tmp2[48]), obj28);
      const obj29 = { user: null, pendingNameplate: null, guildId: null };
      obj29[0] = currentUser;
      obj29[1] = pendingNameplate;
      obj29[2] = guild.id;
      items12[9] = tmp58(tmp(tmp2[49]), obj29);
      obj17[1] = items12;
      tmp59Result = tmp59(tmp60, obj17);
      const tmpResult6 = tmp(tmp2[42]);
    }
    const obj30 = { children: null };
    items10[2] = tmp59Result;
    obj13[4] = items10;
    items8[1] = closure_19(tmpResult2, obj13);
    obj30[0] = items8;
    items6[1] = closure_19(closure_7, obj30);
    obj8[1] = items6;
    items5[1] = closure_19(closure_7, obj8);
    obj6[1] = items5;
    const items13 = [closure_19(tmp61, obj6), ];
    if (tmp58Result3) {
      const obj31 = { style: null, ctaText: null, onPress: null, children: null };
      const items14 = [tmp4.floatingUpsell, ];
      const obj32 = { bottom: null };
      obj32[0] = tmp(tmp2[24]).space.PX_16 + insets.bottom;
      items14[1] = obj32;
      obj31[0] = items14;
      const intl7 = tmp12(tmp2[17]).intl;
      obj31[1] = intl7.string(tmp12(tmp2[17]).t.pj0XBN);
      obj31[2] = function onPress() {
        let obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
        obj = {};
        const merged = Object.assign(outer1_20);
        obj.object = outer1_11.BUTTON_CTA;
        obj[0] = obj;
        obj[1] = analyticsLocations;
        obj[2] = currentUser(analyticsLocations[52]).PremiumFeatureCardOrder.TIER_2_LEADING;
        guild(analyticsLocations[51])(obj);
      };
      const obj33 = { variant: "text-sm/normal", children: null };
      const intl8 = tmp12(tmp2[17]).intl;
      obj33[1] = intl8.string(tmp12(tmp2[17]).t.YIZS5B);
      obj31[3] = tmp58(tmp12(tmp2[36]).Text, obj33);
      tmp58Result3 = tmp58(tmp(tmp2[50]), obj31);
      const tmpResult8 = tmp(tmp2[50]);
    }
    items13[1] = tmp58Result3;
    obj4[1] = items13;
    obj3[3] = closure_19(closure_7, obj4);
    return callback2(tmp12(tmp2[37]).ThemeContextProvider, obj3);
  }
  tmp30 = callback(errors, closure_3);
};