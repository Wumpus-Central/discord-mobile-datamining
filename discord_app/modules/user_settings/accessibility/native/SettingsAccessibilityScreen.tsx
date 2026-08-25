// === Module 14774: SettingsAccessibilityScreen ===

// Module 14774 (SettingsAccessibilityScreen)
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import closure_5 from "updateExistingSettings" /* 4071 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8235 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ HelpdeskArticles: error, UserSettingsSections: closure_8 } = ME);
const result = require("set").fileFinishedImporting("modules/user_settings/accessibility/native/SettingsAccessibilityScreen.tsx");

export default function SettingsAccessibilityScreen() {
  stackNavigation = stackNavigation(animateEmojiOverrideReason[12]).useStackNavigation();
  let obj = stackNavigation(animateEmojiOverrideReason[12]);
  let items = [closure_5];
  const stateFromStoresObject = stackNavigation(animateEmojiOverrideReason[13]).useStateFromStoresObject(items, () => ({ gifAutoPlayOverrideReason: store.getAppliedOverrideReasonKey("gifAutoPlay"), animateEmojiOverrideReason: store.getAppliedOverrideReasonKey("animateEmoji"), animateStickersOverrideReason: store.getAppliedOverrideReasonKey("animateStickers") }));
  const gifAutoPlayOverrideReason = stateFromStoresObject.gifAutoPlayOverrideReason;
  animateEmojiOverrideReason = stateFromStoresObject.animateEmojiOverrideReason;
  const animateStickersOverrideReason = stateFromStoresObject.animateStickersOverrideReason;
  let obj2 = stackNavigation(animateEmojiOverrideReason[13]);
  let items1 = [stateFromStores];
  stateFromStores = stackNavigation(animateEmojiOverrideReason[13]).useStateFromStores(items1, () => ("respect-motion-settings" === stateFromStores.youBarNameplateAnimation || "respect-motion-settings" === stateFromStores.youBarAvatarDecoAnimation) && stateFromStores.useReducedMotion);
  let items2 = [animateEmojiOverrideReason, animateStickersOverrideReason, gifAutoPlayOverrideReason, stackNavigation, stateFromStores];
  const node = animateStickersOverrideReason.useMemo(() => {
    let obj = stackNavigation(animateEmojiOverrideReason[14]);
    obj = { settings: items, subLabel: null };
    items = [closure_1_6.ROLE_COLORS];
    const intl = stackNavigation(animateEmojiOverrideReason[6]).intl;
    obj = { learnMoreLink: null };
    let obj3 = gifAutoPlayOverrideReason(animateEmojiOverrideReason[7]);
    obj[0] = obj3.getArticleURL(closure_1_7.ROLE_STYLES);
    obj[1] = intl.format(stackNavigation(animateEmojiOverrideReason[6]).t["ksVr5/"], obj);
    const items1 = [obj, , , , , , , , , , , , ];
    obj1 = { settings: items2, subLabel: null };
    items2 = [closure_1_6.OFFICIAL_MESSAGE_STYLE];
    const intl2 = stackNavigation(animateEmojiOverrideReason[6]).intl;
    obj1[1] = intl2.string(stackNavigation(animateEmojiOverrideReason[6]).t.a3IPrX);
    items1[1] = obj1;
    const obj2 = { settings: items3, subLabel: null };
    items3 = [closure_1_6.DISPLAY_NAME_STYLES_ACCESSIBILITY];
    const intl3 = stackNavigation(animateEmojiOverrideReason[6]).intl;
    obj3 = {
      onClickOpenModal() {
        let obj = arr(table[9]);
        obj = { screen: constants.PROFILE_CUSTOMIZATION };
        obj.openUserSettings(obj, () => {
          callback(table[10]).runAfterInteractions(() => {
            let obj = callback(table[9]);
            obj = { screen: constants.DISPLAY_NAME_STYLES };
            obj.openUserSettings(obj);
          });
        });
      }
    };
    obj2[1] = intl3.format(gifAutoPlayOverrideReason(animateEmojiOverrideReason[8]).L8U56h, obj3);
    items1[2] = obj2;
    const obj4 = { settings: items4, subLabel: null };
    items4 = [closure_1_6.CONTRAST_MODE];
    const intl4 = stackNavigation(animateEmojiOverrideReason[6]).intl;
    obj4[1] = intl4.string(stackNavigation(animateEmojiOverrideReason[6]).t.Ax4Pgn);
    items1[3] = obj4;
    const obj5 = { settings: items5, subLabel: null };
    items5 = [closure_1_6.REDUCE_SATURATION];
    const intl5 = stackNavigation(animateEmojiOverrideReason[6]).intl;
    obj5[1] = intl5.string(stackNavigation(animateEmojiOverrideReason[6]).t["0PbE/H"]);
    items1[4] = obj5;
    const obj6 = { settings: items6, subLabel: null };
    items6 = [closure_1_6.SHOW_LINK_DECORATIONS];
    const intl6 = stackNavigation(animateEmojiOverrideReason[6]).intl;
    obj6[1] = intl6.string(stackNavigation(animateEmojiOverrideReason[6]).t["72i5GI"]);
    items1[5] = obj6;
    const obj7 = { settings: items7, subLabel: null };
    items7 = [closure_1_6.SHOW_ON_OFF_INDICATORS];
    const intl7 = stackNavigation(animateEmojiOverrideReason[6]).intl;
    obj7[1] = intl7.string(stackNavigation(animateEmojiOverrideReason[6]).t["3QuI9+"]);
    items1[6] = obj7;
    const obj8 = { label: null, settings: null, subLabel: null };
    const intl8 = stackNavigation(animateEmojiOverrideReason[6]).intl;
    obj8[0] = intl8.string(stackNavigation(animateEmojiOverrideReason[6]).t.BT8Bmp);
    const items8 = [closure_1_6.SYNC_PROFILE_COLORS];
    obj8[1] = items8;
    const intl9 = stackNavigation(animateEmojiOverrideReason[6]).intl;
    obj8[2] = intl9.format(stackNavigation(animateEmojiOverrideReason[6]).t.u6UjrL, {
      onThemeClick() {

      }
    });
    items1[7] = obj8;
    const obj10 = { label: null, settings: null, subLabel: null };
    const intl10 = stackNavigation(animateEmojiOverrideReason[6]).intl;
    obj10[0] = intl10.string(stackNavigation(animateEmojiOverrideReason[6]).t.e3TR1b);
    const items9 = [, ];
    ({ ENABLE_REDUCED_MOTION: arr10[0], SYNC_REDUCED_MOTION_WITH_DEVICE: arr10[1] } = closure_1_6);
    obj10[1] = items9;
    const intl11 = stackNavigation(animateEmojiOverrideReason[6]).intl;
    const obj11 = { helpdeskArticle: null };
    let obj15 = gifAutoPlayOverrideReason(animateEmojiOverrideReason[7]);
    obj11[0] = obj15.getArticleURL(closure_1_7.REDUCED_MOTION);
    obj10[2] = intl11.format(stackNavigation(animateEmojiOverrideReason[6]).t["2l9U2j"], obj11);
    items1[8] = obj10;
    const obj12 = { settings: items10, subLabel: null != gifAutoPlayOverrideReason && gifAutoPlayOverrideReason(animateEmojiOverrideReason[11])(gifAutoPlayOverrideReason) };
    items10 = [closure_1_6.AUTOPLAY_GIF];
    items1[9] = obj12;
    const obj13 = { settings: items11, subLabel: null };
    items11 = [closure_1_6.ANIMATE_EMOJI];
    const obj9 = {
      onThemeClick() {

      }
    };
    const tmp3 = gifAutoPlayOverrideReason;
    const tmp6 = stateFromStores;
    const tmp9 = null != gifAutoPlayOverrideReason && gifAutoPlayOverrideReason(animateEmojiOverrideReason[11])(gifAutoPlayOverrideReason);
    obj13[1] = null != animateEmojiOverrideReason && gifAutoPlayOverrideReason(animateEmojiOverrideReason[11])(animateEmojiOverrideReason);
    items1[10] = obj13;
    const obj14 = { settings: items12, subLabel: null };
    items12 = [closure_1_6.ANIMATE_STICKERS];
    const tmp10 = null != animateEmojiOverrideReason && gifAutoPlayOverrideReason(animateEmojiOverrideReason[11])(animateEmojiOverrideReason);
    obj14[1] = null != animateStickersOverrideReason && gifAutoPlayOverrideReason(animateEmojiOverrideReason[11])(animateStickersOverrideReason);
    items1[11] = obj14;
    obj15 = { settings: items13, label: null, subLabel: null };
    items13 = [, ];
    ({ YOU_BAR_NAMEPLATE_ACCESSIBILITY: arr14[0], YOU_BAR_AVATAR_DECO_ACCESSSIBILITY: arr14[1] } = closure_1_6);
    const intl12 = tmp(tmp2[6]).intl;
    obj15[1] = intl12.string(stackNavigation(animateEmojiOverrideReason[6]).t.Loi61N);
    const intl13 = tmp(tmp2[6]).intl;
    const t = tmp(tmp2[6]).t;
    const obj16 = { sections: null };
    obj15[2] = intl13.string(tmp6 ? t["SZC/D5"] : t.c7VVKU);
    items1[12] = obj15;
    obj16[0] = items1.filter((arg0) => null != arg0);
    return obj.createList(obj16);
  }, items2);
  return jsx(gifAutoPlayOverrideReason(animateEmojiOverrideReason[15]), { node });
};