// discord_app/modules/user_profile/native/GuildProfileEditForm.tsx
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import contextDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../app_analytics/AnalyticsLocation.tsx";
import ProfilePreviewButtonDefault from "UserProfileEditBannerButton.tsx";
import closure_4 from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../stores/GuildMemberStore.tsx";
import closure_9 from "../UserProfileStore.tsx";
import { FLOATING_UPSELL_HEIGHT } from "Constants.tsx";
import ME from "../../../Constants.tsx";
import { PremiumUpsellTypes } from "../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function EditGuildProfileBanner(user) {
  user = user.user;
  ({ guildId: importDefault, guildMemberProfile: dependencyMap, pendingBanner } = user);
  c4 = undefined;
  let analyticsLocations;
  ({ displayProfile, guildMember, pendingAvatarSrc, pendingThemeColors, disabled } = user);
  let obj = getPremiumPlanItemDefault;
  let result = obj.canUsePremiumGuildMemberProfile(user);
  c4 = result;
  analyticsLocations = contextDefault(QUICK_SWITCHERDefault.EDIT_BANNER).analyticsLocations;
  obj = { value: analyticsLocations, children: null };
  obj = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, showProfilePreviewButton: false, showEditButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  const tmp3 = contextDefault;
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
      const tmp13 = user(closure_1_2[15])(closure_1_2[14], closure_1_2.paths);
      let banner;
      if (banner != null) {
        banner = banner.banner;
      }
      obj[2] = user(closure_1_2[16]).showRemoveBanner(pendingBanner, banner);
      const intl = tmp9(closure_1_2[17]).intl;
      obj[3] = intl.string(user(closure_1_2[17]).t.jHlJNS);
      obj[4] = function onBannerChange(banner) {
        let obj = closure_1_0(closure_1_2[18]);
        obj = { guildId: closure_1, banner };
        return obj.setPendingChanges(obj);
      };
      tmpResult.openLazy(tmp13, "Change Banner", obj);
      const obj7 = user(closure_1_2[16]);
      const tmp17 = pendingBanner;
    } else {
      tmpResult = tmp(tmp2[19]);
      obj = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
      obj[0] = closure_1_15.PREMIUM_GUILD_PROFILE;
      obj1 = { section: null, object: null };
      obj1[0] = closure_1_12.PREMIUM_GUILD_MEMBER_PROFILE;
      obj1[1] = closure_1_11.EDIT_GUILD_PROFILE_BANNER;
      obj[1] = obj1;
      obj[2] = analyticsLocations;
      const obj2 = { type: null };
      obj2[0] = closure_1_16.PREMIUM_GUILD_IDENTITY_MODAL;
      obj[3] = obj2;
      const result = tmpResult.handleShowUpsellAlert(obj);
    }
  };
  let intl = tmp5(1236).intl;
  obj[8] = intl.string(user(1236).t["95hPAe"]);
  obj[9] = disabled;
  obj[1] = closure_17(ProfilePreviewButtonDefault, obj);
  return closure_17(user(7177).AnalyticsLocationProvider, obj);
}
let closure_3 = ["nick", "bio", "guild_tag"];
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticsObjects: unpackModuleId, AnalyticsSections } = ME);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let result = require("set").fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default function GuildProfileEditForm(currentUser) {
  currentUser = currentUser.currentUser;
  let guild;
  let analyticsLocations;
  const tmp3 = guild(analyticsLocations[20])();
  const tmp4 = guild(analyticsLocations[21])();
  let obj = currentUser(analyticsLocations[22]);
  const bioMaxLength = obj.useBioMaxLength({ location: "guild_profile_edit_form" });
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const insets = guild(analyticsLocations[24])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[25]).space.PX_16;
  obj = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  obj = { ref: ref3, offset: null };
  obj1 = { type: "toValue", value: null };
  const tmp7 = guild(analyticsLocations[23])();
  obj1[1] = guild(analyticsLocations[25]).space.PX_64;
  obj[1] = obj1;
  items[2] = obj;
  obj[1] = items;
  obj[2] = ref;
  const onFocus = guild(analyticsLocations[26])(obj).onFocus;
  const tmp13 = guild(analyticsLocations[27])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  let obj4 = currentUser(analyticsLocations[28]);
  const items1 = [closure_8];
  const stateFromStores = obj4.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = closure_1_8.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  let obj5 = currentUser(analyticsLocations[28]);
  const items2 = [closure_9];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => {
    let guildMemberProfile = null;
    if (null != guild) {
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      guildMemberProfile = closure_1_9.getGuildMemberProfile(currentUser.id, id);
    }
    return guildMemberProfile;
  });
  let id;
  const tmp12 = guild(analyticsLocations[26]);
  if (guild != null) {
    id = guild.id;
  }
  const tmp16Result = guild(analyticsLocations[29])(currentUser.id, id);
  let tmp5Result = tmp5(tmp2[30]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp16 = guild(analyticsLocations[29]);
  tmp5Result = tmp5(tmp2[32]);
  const pendingAvatarSrc = tmp5Result.getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj2 = { userId: currentUser.id, image: pendingAvatar };
  const tmp20 = guild(analyticsLocations[31])(tmp16Result);
  const canEditNickname = currentUser(analyticsLocations[33]).useGuildActionSheetPermissions(guild).canEditNickname;
  let tmpResult = tmp(tmp2[9]);
  const result = tmpResult.canUsePremiumGuildMemberProfile(currentUser);
  const tmp5Result1 = currentUser(analyticsLocations[33]);
  let themeColors;
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp58Result3 = !result;
  const tmp5Result2 = currentUser(analyticsLocations[34]);
  if (!result) {
    tmp58Result3 = !tmp7;
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
  if (tmp16Result != null) {
    str3 = tmp16Result._userProfile.pronouns;
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
  if (tmp16Result != null) {
    str5 = tmp16Result._userProfile.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  tmpResult = tmp(tmp2[10]);
  const items3 = [guild(analyticsLocations[11]).USER_SETTINGS];
  analyticsLocations = tmpResult(items3).analyticsLocations;
  const canResetThemeColorsResult = currentUser(analyticsLocations[34]).canResetThemeColors(pendingThemeColors, themeColors);
  ({ theme, primaryColor, secondaryColor } = guild(analyticsLocations[35])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  const tmp27 = guild(analyticsLocations[35])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const userProfileColors = currentUser(analyticsLocations[36]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp58Result3) {
    num = FLOATING_UPSELL_HEIGHT;
  }
  const sum = insets.bottom + num;
  const obj3 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[25]).space.PX_16;
  const tmp5Result3 = currentUser(analyticsLocations[36]);
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
    obj4 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
    obj4[0] = theme;
    obj4[1] = primaryColor;
    obj4[2] = secondaryColor;
    obj5 = { style: null, children: null };
    const items4 = [tmp4.container, ];
    const obj6 = { backgroundColor: null };
    obj6[0] = gradientSecondaryBackground;
    items4[1] = obj6;
    obj5[0] = items4;
    const obj7 = { ref: null, children: null };
    obj7[0] = ref;
    const obj8 = { style: null };
    obj8[0] = tmp4.bounceOffset;
    const items5 = [callback2(closure_7, obj8), ];
    const obj9 = { style: null, children: null };
    const obj10 = { backgroundColor: null };
    obj10[0] = gradientSecondaryBackground;
    obj9[0] = obj10;
    const obj11 = { user: null, displayProfile: null, guildId: null, guildMember: null, guildMemberProfile: null, pendingAvatarSrc: null, pendingBanner: null, pendingThemeColors: null, disabled: null };
    obj11[0] = currentUser;
    obj11[1] = tmp16Result;
    obj11[2] = guild.id;
    obj11[3] = stateFromStores;
    obj11[4] = stateFromStores1;
    obj11[5] = pendingAvatarSrc;
    obj11[6] = pendingBanner;
    obj11[7] = pendingThemeColors;
    obj11[8] = isDisabled;
    const items6 = [callback2(EditGuildProfileBanner, obj11), ];
    let tmp58Result = null;
    if (null != guild) {
      const obj12 = { style: null, children: null };
      const items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj3;
      obj12[0] = items7;
      const obj13 = { userId: null, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
      obj13[0] = currentUser.id;
      let tmp37 = isDisabled;
      if (!isDisabled) {
        tmp37 = !result;
      }
      obj13[1] = tmp37;
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj13[3] = id1;
      obj13[4] = obj3;
      obj12[1] = tmp58(tmp(tmp2[39]), obj13);
      tmp58Result = tmp58(tmp60, obj12);
      const tmpResult1 = tmp(tmp2[39]);
    }
    const items8 = [tmp58Result, ];
    const obj14 = { fallbackBackground: null, primaryColor: null, secondaryColor: null, containerStyle: null, children: null };
    obj14[0] = gradientFallbackBackground;
    obj14[1] = primaryColor;
    obj14[2] = secondaryColor;
    const items9 = [, , ];
    ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
    const obj15 = { paddingTop: 0, paddingBottom: null };
    obj15[1] = sum1;
    items9[2] = obj15;
    obj14[3] = items9;
    const obj16 = { customStatusActivity: null, hasCustomProfileTheme: null, style: null, emojiOnlyStyle: null, editEnabled: true };
    obj16[0] = customStatusActivity;
    obj16[1] = null != primaryColor;
    ({ customStatusBubble: obj19[2], emojiOnlyCustomStatusBubble: obj19[3] } = tmp3);
    const items10 = [callback2(tmp(tmp2[41]), obj16), , ];
    const obj17 = { user: null, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", guildId: null, pendingDisplayNameStyles: null };
    obj17[0] = currentUser;
    let tmp42 = pendingNickname;
    const tmp61 = closure_6;
    const tmpResult2 = tmp(tmp2[40]);
    if (pendingNickname == null) {
      tmp42 = str;
    }
    obj17[1] = tmp42;
    let tmp43 = str3;
    if ("" !== pendingPronouns) {
      tmp43 = pendingPronouns;
    }
    obj17[2] = tmp43;
    obj17[3] = tmp20;
    obj17[4] = containerBackground;
    obj17[6] = guild.id;
    obj17[7] = pendingDisplayNameStyles;
    items10[1] = callback2(tmp(tmp2[42]), obj17);
    let tmp59Result = null;
    if (null != guild) {
      const obj18 = { style: null, children: null };
      const items11 = [tmp4.formContainer, ];
      const obj19 = { backgroundColor: null, paddingBottom: 20 };
      obj19[0] = containerBackground;
      items11[1] = obj19;
      obj18[0] = items11;
      let tmp45 = null;
      if (null == first2) {
        tmp45 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp31).length > 0) {
              const intl = tmp5(tmp2[17]).intl;
              stringResult = intl.string(tmp5(tmp2[17]).t.s35OuK);
            }
            first3 = stringResult;
          }
          tmp58Result = null;
          if (null != first3) {
            tmp58Result = null;
            if ("" !== first3) {
              const obj20 = { style: null, children: null };
              obj20[0] = tmp4.errorContainer;
              const obj21 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
              obj21[2] = first3;
              obj20[1] = tmp58(tmp5(tmp2[37]).Text, obj21);
              tmp58Result = tmp58(tmp60, obj20);
            }
          }
          tmp45 = tmp58Result;
        }
      }
      const items12 = [tmp45, , , , , , , , , ];
      const obj22 = { inputRef: null, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, isDisabled: null };
      obj22[0] = ref1;
      const intl2 = tmp5(tmp2[17]).intl;
      obj22[1] = intl2.string(tmp5(tmp2[17]).t.me1lRk);
      obj22[2] = first;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      obj22[3] = pendingNickname;
      obj22[4] = onFocus;
      obj22[5] = function onChange(nickname) {
        let obj = currentUser(analyticsLocations[18]);
        obj = { guildId: guild.id, nickname };
        return obj.setPendingChanges(obj);
      };
      const tmpResult4 = tmp(tmp2[43]);
      obj22[6] = tmp(tmp2[44]).getName(currentUser);
      obj22[7] = closure_13;
      let tmp51 = !canEditNickname;
      if (canEditNickname) {
        tmp51 = isDisabled;
      }
      obj22[8] = tmp51;
      items12[1] = tmp58(tmpResult4, obj22);
      let tmp58Result1 = result;
      if (result) {
        const obj23 = { user: null, guildId: null };
        obj23[0] = currentUser;
        obj23[1] = guild.id;
        tmp58Result1 = tmp58(tmp(tmp2[45]), obj23);
      }
      items12[2] = tmp58Result1;
      const obj24 = { inputRef: null, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, isDisabled: null };
      obj24[0] = ref2;
      const tmpResult5 = tmp(tmp2[44]);
      const intl3 = tmp5(tmp2[17]).intl;
      obj24[1] = intl3.string(tmp5(tmp2[17]).t["+T3RI/"]);
      obj24[2] = first1;
      const intl4 = tmp5(tmp2[17]).intl;
      obj24[3] = intl4.string(tmp5(tmp2[17]).t.NZqtIp);
      obj24[4] = pendingPronouns;
      obj24[5] = onFocus;
      obj24[6] = function onChange(pronouns) {
        let obj = currentUser(analyticsLocations[18]);
        obj = { guildId: guild.id, pronouns };
        return obj.setPendingChanges(obj);
      };
      obj24[7] = str3;
      obj24[8] = closure_14;
      obj24[9] = isDisabled;
      items12[3] = tmp58(tmp(tmp2[43]), obj24);
      let tmp58Result2 = null;
      if (result) {
        const obj25 = { inputRef: null, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, numberOfLines: 5, isDisabled: null };
        obj25[0] = ref3;
        const intl5 = tmp5(tmp2[17]).intl;
        obj25[1] = intl5.string(tmp5(tmp2[17]).t.ZzAR2Y);
        obj25[2] = first2;
        const intl6 = tmp5(tmp2[17]).intl;
        obj25[3] = intl6.string(tmp5(tmp2[17]).t.S5O8U2);
        if (pendingBio == null) {
          pendingBio = str4;
        }
        obj25[4] = pendingBio;
        obj25[5] = onFocus;
        obj25[6] = function onChange(bio) {
          let obj = currentUser(analyticsLocations[18]);
          obj = { guildId: guild.id, bio };
          return obj.setPendingChanges(obj);
        };
        obj25[7] = str5;
        obj25[8] = bioMaxLength;
        obj25[10] = isDisabled;
        tmp58Result2 = tmp58(tmp(tmp2[43]), obj25);
        const tmpResult7 = tmp(tmp2[43]);
      }
      items12[4] = tmp58Result2;
      const obj26 = { pendingAvatarSrc: null, pendingThemeColors: null, user: null, guildId: null, onProfileThemeColorsChanged: null, showResetMenu: null };
      obj26[0] = pendingAvatarSrc;
      obj26[1] = pendingThemeColors;
      obj26[2] = currentUser;
      obj26[3] = guild.id;
      obj26[4] = function onProfileThemeColorsChanged(themeColors) {
        let obj = currentUser(analyticsLocations[18]);
        obj = { guildId: guild.id, themeColors };
        return obj.setPendingChanges(obj);
      };
      obj26[5] = canResetThemeColorsResult;
      items12[5] = tmp58(tmp(tmp2[46]), obj26);
      const obj27 = { user: null, guildId: null, pendingAvatarDecoration: null };
      obj27[0] = currentUser;
      obj27[1] = guild.id;
      obj27[2] = pendingAvatarDecoration;
      items12[6] = tmp58(tmp(tmp2[47]), obj27);
      const obj28 = { user: null, guildId: null, pendingProfileEffect: null, displayProfile: null };
      obj28[0] = currentUser;
      obj28[1] = guild.id;
      obj28[2] = pendingProfileEffect;
      obj28[3] = tmp16Result;
      items12[7] = tmp58(tmp(tmp2[48]), obj28);
      const obj29 = { user: null, guildId: null, pendingProfileFrame: null, displayProfile: null };
      obj29[0] = currentUser;
      obj29[1] = guild.id;
      obj29[2] = pendingProfileFrame;
      obj29[3] = tmp16Result;
      items12[8] = tmp58(tmp(tmp2[49]), obj29);
      const obj30 = { user: null, pendingNameplate: null, guildId: null };
      obj30[0] = currentUser;
      obj30[1] = pendingNameplate;
      obj30[2] = guild.id;
      items12[9] = tmp58(tmp(tmp2[50]), obj30);
      obj18[1] = items12;
      tmp59Result = tmp59(tmp60, obj18);
      const tmpResult6 = tmp(tmp2[43]);
    }
    const obj31 = { children: null };
    items10[2] = tmp59Result;
    obj14[4] = items10;
    items8[1] = closure_18(tmpResult2, obj14);
    obj31[0] = items8;
    items6[1] = closure_18(closure_7, obj31);
    obj9[1] = items6;
    items5[1] = closure_18(closure_7, obj9);
    obj7[1] = items5;
    const items13 = [closure_18(tmp61, obj7), ];
    if (tmp58Result3) {
      const obj32 = { style: null, ctaText: null, onPress: null, children: null };
      const items14 = [tmp4.floatingUpsell, ];
      const obj33 = { bottom: null };
      obj33[0] = tmp(tmp2[25]).space.PX_16 + insets.bottom;
      items14[1] = obj33;
      obj32[0] = items14;
      const intl7 = tmp5(tmp2[17]).intl;
      obj32[1] = intl7.string(tmp5(tmp2[17]).t.pj0XBN);
      obj32[2] = function onPress() {
        let obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
        obj = {};
        const merged = Object.assign(closure_1_19);
        obj.object = closure_1_11.BUTTON_CTA;
        obj[0] = obj;
        obj[1] = analyticsLocations;
        obj[2] = currentUser(analyticsLocations[53]).PremiumFeatureCardOrder.TIER_2_LEADING;
        guild(analyticsLocations[52])(obj);
      };
      const obj34 = { variant: "text-sm/normal", children: null };
      const intl8 = tmp5(tmp2[17]).intl;
      obj34[1] = intl8.string(tmp5(tmp2[17]).t.YIZS5B);
      obj32[3] = tmp58(tmp5(tmp2[37]).Text, obj34);
      tmp58Result3 = tmp58(tmp(tmp2[51]), obj32);
      const tmpResult8 = tmp(tmp2[51]);
    }
    items13[1] = tmp58Result3;
    obj5[1] = items13;
    obj4[3] = closure_18(closure_7, obj5);
    return callback2(tmp5(tmp2[38]).ThemeContextProvider, obj4);
  }
  tmp31 = callback(errors, closure_3);
};