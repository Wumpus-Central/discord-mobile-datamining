// === Module 14850: SettingsAccessibilityScreen ===

// Module 14850 (SettingsAccessibilityScreen)
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2110 */;
import _modDef2876 from "module_2876" /* 2876 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
import getSettingsOverrideReasonDefault from "getSettingsOverrideReason" /* 14851 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 2021 */;

require = fn;
const MobileUserSettings = fn(7412).MobileUserSettings;
const Constants = fn(1074);
({ HelpdeskArticles: closure_7, UserSettingsSections: closure_8 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/accessibility/native/SettingsAccessibilityScreen.tsx");

export default function SettingsAccessibilityScreen() {
  stackNavigation = stackNavigation(animateEmojiOverrideReason[12]).useStackNavigation();
  let obj = stackNavigation(animateEmojiOverrideReason[12]);
  let items = [UserSettingsOverridesStore];
  const stateFromStoresObject = stackNavigation(animateEmojiOverrideReason[13]).useStateFromStoresObject(items, () => ({ gifAutoPlayOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("gifAutoPlay"), animateEmojiOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateEmoji"), animateStickersOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateStickers") }));
  const gifAutoPlayOverrideReason = stateFromStoresObject.gifAutoPlayOverrideReason;
  animateEmojiOverrideReason = stateFromStoresObject.animateEmojiOverrideReason;
  const animateStickersOverrideReason = stateFromStoresObject.animateStickersOverrideReason;
  let obj2 = stackNavigation(animateEmojiOverrideReason[13]);
  let items1 = [stateFromStores];
  stateFromStores = stackNavigation(animateEmojiOverrideReason[13]).useStateFromStores(items1, () => ("respect-motion-settings" === stateFromStores.youBarNameplateAnimation || "respect-motion-settings" === stateFromStores.youBarAvatarDecoAnimation) && stateFromStores.useReducedMotion);
  let items2 = [animateEmojiOverrideReason, animateStickersOverrideReason, gifAutoPlayOverrideReason, stackNavigation, stateFromStores];
  const node = animateStickersOverrideReason.useMemo(() => {
    closure_0 = stackNavigation;
    const obj2 = { settings: null, subLabel: null };
    const items = [MobileUserSettings.ROLE_COLORS];
    obj2.settings = items;
    const intl = util.intl;
    const obj3 = { learnMoreLink: null };
    const obj = SettingBuilders;
    obj3.learnMoreLink = HelpdeskUtilsDefault.getArticleURL(constants.ROLE_STYLES);
    obj2.subLabel = intl.format(util.t["ksVr5/"], obj3);
    const items1 = [obj2, , , , , , , , , , , , ];
    const obj5 = { settings: null, subLabel: null };
    const items2 = [MobileUserSettings.OFFICIAL_MESSAGE_STYLE];
    obj5.settings = items2;
    const intl2 = util.intl;
    obj5.subLabel = intl2.string(util.t.a3IPrX);
    items1[1] = obj5;
    const obj6 = { settings: null, subLabel: null };
    const items3 = [MobileUserSettings.DISPLAY_NAME_STYLES_ACCESSIBILITY];
    obj6.settings = items3;
    const intl3 = util.intl;
    obj6.subLabel = intl3.format(_modDef2876.L8U56h, {
      onClickOpenModal() {
        closure_0(animateEmojiOverrideReason[9]).openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION }, () => {
          closure_1_0(closure_1_2[10]).runAfterInteractions(() => {
            closure_1_0(closure_1_2[9]).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES });
          });
        });
      }
    });
    items1[2] = obj6;
    const obj8 = { settings: null, subLabel: null };
    const items4 = [MobileUserSettings.CONTRAST_MODE];
    obj8.settings = items4;
    const intl4 = util.intl;
    obj8.subLabel = intl4.string(util.t.Ax4Pgn);
    items1[3] = obj8;
    const obj9 = { settings: null, subLabel: null };
    const items5 = [MobileUserSettings.REDUCE_SATURATION];
    obj9.settings = items5;
    const intl5 = util.intl;
    obj9.subLabel = intl5.string(util.t["0PbE/H"]);
    items1[4] = obj9;
    const obj10 = { settings: null, subLabel: null };
    const items6 = [MobileUserSettings.SHOW_LINK_DECORATIONS];
    obj10.settings = items6;
    const intl6 = util.intl;
    obj10.subLabel = intl6.string(util.t["72i5GI"]);
    items1[5] = obj10;
    const obj11 = { settings: null, subLabel: null };
    const items7 = [MobileUserSettings.SHOW_ON_OFF_INDICATORS];
    obj11.settings = items7;
    const intl7 = util.intl;
    obj11.subLabel = intl7.string(util.t["3QuI9+"]);
    items1[6] = obj11;
    const obj12 = { label: null, settings: null, subLabel: null };
    const intl8 = util.intl;
    obj12.label = intl8.string(util.t.BT8Bmp);
    const items8 = [MobileUserSettings.SYNC_PROFILE_COLORS];
    obj12.settings = items8;
    const intl9 = util.intl;
    obj12.subLabel = intl9.format(util.t.u6UjrL, {
      onThemeClick() {
        closure_0.push(constants.APPEARANCE);
      }
    });
    items1[7] = obj12;
    const obj14 = { label: null, settings: null, subLabel: null };
    const intl10 = util.intl;
    obj14.label = intl10.string(util.t.e3TR1b);
    const items9 = [, ];
    ({ ENABLE_REDUCED_MOTION: arr10[0], SYNC_REDUCED_MOTION_WITH_DEVICE: arr10[1] } = MobileUserSettings);
    obj14.settings = items9;
    const intl11 = util.intl;
    const obj15 = { helpdeskArticle: null };
    const obj13 = {
      onThemeClick() {
        closure_0.push(constants.APPEARANCE);
      }
    };
    const obj7 = {
      onClickOpenModal() {
        closure_0(animateEmojiOverrideReason[9]).openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION }, () => {
          closure_1_0(closure_1_2[10]).runAfterInteractions(() => {
            closure_1_0(closure_1_2[9]).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES });
          });
        });
      }
    };
    obj15.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.REDUCED_MOTION);
    obj14.subLabel = intl11.format(util.t["2l9U2j"], obj15);
    items1[8] = obj14;
    const obj17 = { settings: null, subLabel: null };
    const items10 = [MobileUserSettings.AUTOPLAY_GIF];
    obj17.settings = items10;
    obj17.subLabel = null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason);
    items1[9] = obj17;
    const obj18 = { settings: null, subLabel: null };
    const items11 = [MobileUserSettings.ANIMATE_EMOJI];
    obj18.settings = items11;
    const tmp9 = null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason);
    obj18.subLabel = null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason);
    items1[10] = obj18;
    const obj19 = { settings: null, subLabel: null };
    const items12 = [MobileUserSettings.ANIMATE_STICKERS];
    obj19.settings = items12;
    const tmp10 = null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason);
    obj19.subLabel = null != animateStickersOverrideReason && getSettingsOverrideReasonDefault(animateStickersOverrideReason);
    items1[11] = obj19;
    const obj20 = { settings: null, label: null, subLabel: null };
    const items13 = [, ];
    ({ YOU_BAR_NAMEPLATE_ACCESSIBILITY: arr14[0], YOU_BAR_AVATAR_DECO_ACCESSSIBILITY: arr14[1] } = MobileUserSettings);
    obj20.settings = items13;
    const intl12 = util.intl;
    obj20.label = intl12.string(util.t.Loi61N);
    const intl13 = util.intl;
    const t = util.t;
    const obj21 = { sections: null };
    obj20.subLabel = intl13.string(stateFromStores ? t["SZC/D5"] : t.c7VVKU);
    items1[12] = obj20;
    obj21.sections = items1.filter((item) => null != item);
    return obj.createList(obj21);
  }, items2);
  return jsx(gifAutoPlayOverrideReason(animateEmojiOverrideReason[15]), { node });
};