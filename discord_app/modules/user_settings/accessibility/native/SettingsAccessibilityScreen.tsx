// === Module 14431: SettingsAccessibilityScreen ===

// Module 14431 (SettingsAccessibilityScreen)
import noop from "noop";
import updateExistingSettings from "updateExistingSettings";
import { MobileSetting } from "MobileSetting";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_6;
let error;
const require = arg1;
({ HelpdeskArticles: closure_6, UserSettingsSections: error } = ME);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/accessibility/native/SettingsAccessibilityScreen.tsx");

export default function SettingsAccessibilityScreen() {
  stackNavigation = stackNavigation(animateEmojiOverrideReason[11]).useStackNavigation();
  let obj = stackNavigation(animateEmojiOverrideReason[11]);
  let items = [updateExistingSettings];
  const stateFromStoresObject = stackNavigation(animateEmojiOverrideReason[12]).useStateFromStoresObject(items, () => ({ gifAutoPlayOverrideReason: store.getAppliedOverrideReasonKey("gifAutoPlay"), animateEmojiOverrideReason: store.getAppliedOverrideReasonKey("animateEmoji"), animateStickersOverrideReason: store.getAppliedOverrideReasonKey("animateStickers") }));
  const gifAutoPlayOverrideReason = stateFromStoresObject.gifAutoPlayOverrideReason;
  animateEmojiOverrideReason = stateFromStoresObject.animateEmojiOverrideReason;
  const animateStickersOverrideReason = stateFromStoresObject.animateStickersOverrideReason;
  let items1 = [animateEmojiOverrideReason, animateStickersOverrideReason, gifAutoPlayOverrideReason, stackNavigation];
  const node = animateStickersOverrideReason.useMemo(() => {
    let obj = stackNavigation(animateEmojiOverrideReason[13]);
    obj = { settings: items, subLabel: null };
    items = [outer1_5.ROLE_COLORS];
    const intl = stackNavigation(animateEmojiOverrideReason[5]).intl;
    obj = { learnMoreLink: null };
    let obj3 = gifAutoPlayOverrideReason(animateEmojiOverrideReason[6]);
    obj[0] = obj3.getArticleURL(outer1_6.ROLE_STYLES);
    obj[1] = intl.format(stackNavigation(animateEmojiOverrideReason[5]).t["ksVr5/"], obj);
    const items1 = [obj, , , , , , , , , , , ];
    const obj1 = { settings: items2, subLabel: null };
    items2 = [outer1_5.OFFICIAL_MESSAGE_STYLE];
    const intl2 = stackNavigation(animateEmojiOverrideReason[5]).intl;
    obj1[1] = intl2.string(stackNavigation(animateEmojiOverrideReason[5]).t.a3IPrX);
    items1[1] = obj1;
    const obj2 = { settings: items3, subLabel: null };
    items3 = [outer1_5.DISPLAY_NAME_STYLES_ACCESSIBILITY];
    const intl3 = stackNavigation(animateEmojiOverrideReason[5]).intl;
    obj3 = {
      onClickOpenModal() {
        let obj = arr(table[8]);
        obj = { screen: constants.PROFILE_CUSTOMIZATION };
        obj.openUserSettings(obj, () => {
          callback(table[9]).runAfterInteractions(() => {
            let obj = callback(table[8]);
            obj = { screen: constants.DISPLAY_NAME_STYLES };
            obj.openUserSettings(obj);
          });
        });
      }
    };
    obj2[1] = intl3.format(gifAutoPlayOverrideReason(animateEmojiOverrideReason[7]).L8U56h, obj3);
    items1[2] = obj2;
    const obj4 = { settings: items4, subLabel: null };
    items4 = [outer1_5.CONTRAST_MODE];
    const intl4 = stackNavigation(animateEmojiOverrideReason[5]).intl;
    obj4[1] = intl4.string(stackNavigation(animateEmojiOverrideReason[5]).t.Ax4Pgn);
    items1[3] = obj4;
    const obj5 = { settings: items5, subLabel: null };
    items5 = [outer1_5.REDUCE_SATURATION];
    const intl5 = stackNavigation(animateEmojiOverrideReason[5]).intl;
    obj5[1] = intl5.string(stackNavigation(animateEmojiOverrideReason[5]).t["0PbE/H"]);
    items1[4] = obj5;
    const obj6 = { settings: items6, subLabel: null };
    items6 = [outer1_5.SHOW_LINK_DECORATIONS];
    const intl6 = stackNavigation(animateEmojiOverrideReason[5]).intl;
    obj6[1] = intl6.string(stackNavigation(animateEmojiOverrideReason[5]).t["72i5GI"]);
    items1[5] = obj6;
    const obj7 = { settings: items7, subLabel: null };
    items7 = [outer1_5.SHOW_ON_OFF_INDICATORS];
    const intl7 = stackNavigation(animateEmojiOverrideReason[5]).intl;
    obj7[1] = intl7.string(stackNavigation(animateEmojiOverrideReason[5]).t["3QuI9+"]);
    items1[6] = obj7;
    const obj8 = { label: null, settings: null, subLabel: null };
    const intl8 = stackNavigation(animateEmojiOverrideReason[5]).intl;
    obj8[0] = intl8.string(stackNavigation(animateEmojiOverrideReason[5]).t.BT8Bmp);
    const items8 = [outer1_5.SYNC_PROFILE_COLORS];
    obj8[1] = items8;
    const intl9 = stackNavigation(animateEmojiOverrideReason[5]).intl;
    obj8[2] = intl9.format(stackNavigation(animateEmojiOverrideReason[5]).t.u6UjrL, {
      onThemeClick() {

      }
    });
    items1[7] = obj8;
    const obj10 = { label: null, settings: null, subLabel: null };
    const intl10 = stackNavigation(animateEmojiOverrideReason[5]).intl;
    obj10[0] = intl10.string(stackNavigation(animateEmojiOverrideReason[5]).t.e3TR1b);
    const items9 = [, ];
    ({ ENABLE_REDUCED_MOTION: arr10[0], SYNC_REDUCED_MOTION_WITH_DEVICE: arr10[1] } = outer1_5);
    obj10[1] = items9;
    const intl11 = stackNavigation(animateEmojiOverrideReason[5]).intl;
    const obj11 = { helpdeskArticle: null };
    let obj15 = gifAutoPlayOverrideReason(animateEmojiOverrideReason[6]);
    obj11[0] = obj15.getArticleURL(outer1_6.REDUCED_MOTION);
    obj10[2] = intl11.format(stackNavigation(animateEmojiOverrideReason[5]).t["2l9U2j"], obj11);
    items1[8] = obj10;
    const obj12 = { settings: items10, subLabel: null };
    items10 = [outer1_5.AUTOPLAY_GIF];
    obj12[1] = null != gifAutoPlayOverrideReason && gifAutoPlayOverrideReason(animateEmojiOverrideReason[10])(gifAutoPlayOverrideReason);
    items1[9] = obj12;
    const obj13 = { settings: items11, subLabel: null };
    items11 = [outer1_5.ANIMATE_EMOJI];
    const obj9 = {
      onThemeClick() {

      }
    };
    const tmp2 = gifAutoPlayOverrideReason;
    const tmp7 = null != gifAutoPlayOverrideReason && gifAutoPlayOverrideReason(animateEmojiOverrideReason[10])(gifAutoPlayOverrideReason);
    obj13[1] = null != animateEmojiOverrideReason && gifAutoPlayOverrideReason(animateEmojiOverrideReason[10])(animateEmojiOverrideReason);
    items1[10] = obj13;
    const obj14 = { settings: items12, subLabel: null };
    items12 = [outer1_5.ANIMATE_STICKERS];
    const tmp8 = null != animateEmojiOverrideReason && gifAutoPlayOverrideReason(animateEmojiOverrideReason[10])(animateEmojiOverrideReason);
    obj15 = { sections: items1.filter((arg0) => null != arg0) };
    obj14[1] = null != animateStickersOverrideReason && gifAutoPlayOverrideReason(animateEmojiOverrideReason[10])(animateStickersOverrideReason);
    items1[11] = obj14;
    return obj.createList(obj15);
  }, items1);
  return jsx(gifAutoPlayOverrideReason(animateEmojiOverrideReason[14]), { node });
};