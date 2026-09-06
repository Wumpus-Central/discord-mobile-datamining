// === Module 15329: SettingsAccessibilityScreen ===

// Module 15329 (SettingsAccessibilityScreen)
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef2786 from "module_2786" /* 2786 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import getSettingsOverrideReasonDefault from "getSettingsOverrideReason" /* 15330 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 1936 */;

require = fn;
const MobileUserSettings = fn(7975).MobileUserSettings;
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
    let obj = { settings: null, subLabel: null };
    const items = [MobileUserSettings.ROLE_COLORS];
    obj.settings = items;
    const intl = util.intl;
    obj = { learnMoreLink: null };
    let obj3 = HelpdeskUtilsDefault;
    obj.learnMoreLink = obj3.getArticleURL(constants.ROLE_STYLES);
    obj.subLabel = intl.format(util.t["ksVr5/"], obj);
    const items1 = [obj, , , , , , , , , , , , ];
    const obj1 = { settings: null, subLabel: null };
    const items2 = [MobileUserSettings.OFFICIAL_MESSAGE_STYLE];
    obj1.settings = items2;
    const intl2 = util.intl;
    obj1.subLabel = intl2.string(util.t.a3IPrX);
    items1[1] = obj1;
    const obj2 = { settings: null, subLabel: null };
    const items3 = [MobileUserSettings.DISPLAY_NAME_STYLES_ACCESSIBILITY];
    obj2.settings = items3;
    const intl3 = util.intl;
    obj3 = {
      onClickOpenModal() {
        closure_0(animateEmojiOverrideReason[9]);
        let obj = { screen: constants.PROFILE_CUSTOMIZATION };
        obj.openUserSettings(obj, () => {
          closure_1_0(closure_1_2[10]).runAfterInteractions(() => {
            closure_1_0(closure_1_2[9]);
            const obj = { screen: constants.DISPLAY_NAME_STYLES };
            obj.openUserSettings(obj);
          });
        });
      }
    };
    obj2.subLabel = intl3.format(_modDef2786.L8U56h, obj3);
    items1[2] = obj2;
    const obj4 = { settings: null, subLabel: null };
    const items4 = [MobileUserSettings.CONTRAST_MODE];
    obj4.settings = items4;
    const intl4 = util.intl;
    obj4.subLabel = intl4.string(util.t.Ax4Pgn);
    items1[3] = obj4;
    const obj5 = { settings: null, subLabel: null };
    const items5 = [MobileUserSettings.REDUCE_SATURATION];
    obj5.settings = items5;
    const intl5 = util.intl;
    obj5.subLabel = intl5.string(util.t["0PbE/H"]);
    items1[4] = obj5;
    const obj6 = { settings: null, subLabel: null };
    const items6 = [MobileUserSettings.SHOW_LINK_DECORATIONS];
    obj6.settings = items6;
    const intl6 = util.intl;
    obj6.subLabel = intl6.string(util.t["72i5GI"]);
    items1[5] = obj6;
    const obj7 = { settings: null, subLabel: null };
    const items7 = [MobileUserSettings.SHOW_ON_OFF_INDICATORS];
    obj7.settings = items7;
    const intl7 = util.intl;
    obj7.subLabel = intl7.string(util.t["3QuI9+"]);
    items1[6] = obj7;
    const obj8 = { label: null, settings: null, subLabel: null };
    const intl8 = util.intl;
    obj8.label = intl8.string(util.t.BT8Bmp);
    const items8 = [MobileUserSettings.SYNC_PROFILE_COLORS];
    obj8.settings = items8;
    const intl9 = util.intl;
    obj8.subLabel = intl9.format(util.t.u6UjrL, {
      onThemeClick() {
        closure_0.push(constants.APPEARANCE);
      }
    });
    items1[7] = obj8;
    const obj10 = { label: null, settings: null, subLabel: null };
    const intl10 = util.intl;
    obj10.label = intl10.string(util.t.e3TR1b);
    const items9 = [, ];
    ({ ENABLE_REDUCED_MOTION: arr10[0], SYNC_REDUCED_MOTION_WITH_DEVICE: arr10[1] } = MobileUserSettings);
    obj10.settings = items9;
    const intl11 = util.intl;
    const obj11 = { helpdeskArticle: null };
    let obj15 = HelpdeskUtilsDefault;
    obj11.helpdeskArticle = obj15.getArticleURL(constants.REDUCED_MOTION);
    obj10.subLabel = intl11.format(util.t["2l9U2j"], obj11);
    items1[8] = obj10;
    const obj12 = { settings: null, subLabel: null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason) };
    const items10 = [MobileUserSettings.AUTOPLAY_GIF];
    obj12.settings = items10;
    items1[9] = obj12;
    const obj13 = { settings: null, subLabel: null };
    const items11 = [MobileUserSettings.ANIMATE_EMOJI];
    obj13.settings = items11;
    const obj9 = {
      onThemeClick() {
        closure_0.push(constants.APPEARANCE);
      }
    };
    const tmp6 = stateFromStores;
    const tmp9 = null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason);
    obj13.subLabel = null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason);
    items1[10] = obj13;
    const obj14 = { settings: null, subLabel: null };
    const items12 = [MobileUserSettings.ANIMATE_STICKERS];
    obj14.settings = items12;
    const tmp10 = null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason);
    obj14.subLabel = null != animateStickersOverrideReason && getSettingsOverrideReasonDefault(animateStickersOverrideReason);
    items1[11] = obj14;
    obj15 = { settings: null, label: null, subLabel: null };
    const items13 = [, ];
    ({ YOU_BAR_NAMEPLATE_ACCESSIBILITY: arr14[0], YOU_BAR_AVATAR_DECO_ACCESSSIBILITY: arr14[1] } = MobileUserSettings);
    obj15.settings = items13;
    const intl12 = tmp(1114).intl;
    obj15.label = intl12.string(util.t.Loi61N);
    const intl13 = tmp(1114).intl;
    const t = tmp(1114).t;
    const obj16 = { sections: null };
    obj15.subLabel = intl13.string(tmp6 ? t["SZC/D5"] : t.c7VVKU);
    items1[12] = obj15;
    obj16.sections = items1.filter((item) => null != item);
    return obj.createList(obj16);
  }, items2);
  return jsx(gifAutoPlayOverrideReason(animateEmojiOverrideReason[15]), { node });
};