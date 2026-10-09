// discord_app/modules/user_settings/accessibility/native/SettingsAccessibilityScreen.tsx
import useStateFromStores from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import _modDef2955 from "../../../display_name_styles/intl/DisplayNameStyles.messages.js";
import openUserSettings from "../../core/native/openUserSettings.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import getSettingsOverrideReasonDefault from "../getSettingsOverrideReason.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import UserSettingsOverridesStore from "../../UserSettingsOverridesStore.tsx";

require = fn;
function getAccessibilitySettingScreen(youBarAnimationsOverridden) {
  ({
    navigation: require,
    gifAutoPlayOverrideReason,
    animateEmojiOverrideReason,
    animateStickersOverrideReason,
  } = youBarAnimationsOverridden);
  const obj = { settings: null, subLabel: null };
  const items = [MobileUserSettings.ROLE_COLORS];
  obj.settings = items;
  const intl = util.intl;
  const obj2 = { learnMoreLink: HelpdeskUtilsDefault.getArticleURL(constants.ROLE_STYLES) };
  obj.subLabel = intl.format(util.t["ksVr5/"], obj2);
  const items1 = [obj, , , , , , , , , , , , ,];
  const obj4 = { settings: null, subLabel: null };
  const items2 = [MobileUserSettings.OFFICIAL_MESSAGE_STYLE];
  obj4.settings = items2;
  const intl2 = util.intl;
  obj4.subLabel = intl2.string(util.t.a3IPrX);
  items1[1] = obj4;
  const obj5 = { settings: null, subLabel: null };
  const items3 = [MobileUserSettings.DISPLAY_NAME_STYLES_ACCESSIBILITY];
  obj5.settings = items3;
  const intl3 = util.intl;
  obj5.subLabel = intl3.format(_modDef2955.L8U56h, {
    onClickOpenModal() {
      openUserSettings.openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION }, () => {
        closure_1_0(closure_1_2[10]).runAfterInteractions(() => {
          closure_1_0(closure_1_2[9]).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES });
        });
      });
    },
  });
  items1[2] = obj5;
  const obj7 = { settings: null, subLabel: null };
  const items4 = [MobileUserSettings.CONTRAST_MODE];
  obj7.settings = items4;
  const intl4 = util.intl;
  obj7.subLabel = intl4.string(util.t.Ax4Pgn);
  items1[3] = obj7;
  const obj8 = { settings: null, subLabel: null };
  const items5 = [MobileUserSettings.REDUCE_SATURATION];
  obj8.settings = items5;
  const intl5 = util.intl;
  obj8.subLabel = intl5.string(util.t["0PbE/H"]);
  items1[4] = obj8;
  const obj9 = { settings: null, subLabel: null };
  const items6 = [MobileUserSettings.TOAST_DURATION];
  obj9.settings = items6;
  const intl6 = util.intl;
  obj9.subLabel = intl6.string(util.t.CZ3jxp);
  items1[5] = obj9;
  const obj10 = { settings: null, subLabel: null };
  const items7 = [MobileUserSettings.SHOW_LINK_DECORATIONS];
  obj10.settings = items7;
  const intl7 = util.intl;
  obj10.subLabel = intl7.string(util.t["72i5GI"]);
  items1[6] = obj10;
  const obj11 = { settings: null, subLabel: null };
  const items8 = [MobileUserSettings.SHOW_ON_OFF_INDICATORS];
  obj11.settings = items8;
  const intl8 = util.intl;
  obj11.subLabel = intl8.string(util.t["3QuI9+"]);
  items1[7] = obj11;
  const obj12 = { label: null, settings: null, subLabel: null };
  const intl9 = util.intl;
  obj12.label = intl9.string(util.t.BT8Bmp);
  const items9 = [MobileUserSettings.SYNC_PROFILE_COLORS];
  obj12.settings = items9;
  const intl10 = util.intl;
  obj12.subLabel = intl10.format(util.t.u6UjrL, {
    onThemeClick() {
      require.push(constants2.APPEARANCE);
    },
  });
  items1[8] = obj12;
  const obj14 = { label: null, settings: null, subLabel: null };
  const intl11 = util.intl;
  obj14.label = intl11.string(util.t.e3TR1b);
  const items10 = [,];
  ({ ENABLE_REDUCED_MOTION: arr11[0], SYNC_REDUCED_MOTION_WITH_DEVICE: arr11[1] } = MobileUserSettings);
  obj14.settings = items10;
  const intl12 = util.intl;
  const obj15 = { helpdeskArticle: null };
  const obj13 = {
    onThemeClick() {
      require.push(constants2.APPEARANCE);
    },
  };
  const obj6 = {
    onClickOpenModal() {
      openUserSettings.openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION }, () => {
        closure_1_0(closure_1_2[10]).runAfterInteractions(() => {
          closure_1_0(closure_1_2[9]).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES });
        });
      });
    },
  };
  obj15.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.REDUCED_MOTION);
  obj14.subLabel = intl12.format(util.t["2l9U2j"], obj15);
  items1[9] = obj14;
  const obj17 = { settings: null, subLabel: null };
  const items11 = [MobileUserSettings.AUTOPLAY_GIF];
  obj17.settings = items11;
  obj17.subLabel = null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason);
  items1[10] = obj17;
  const obj18 = { settings: null, subLabel: null };
  const items12 = [MobileUserSettings.ANIMATE_EMOJI];
  obj18.settings = items12;
  const tmp5 = null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason);
  obj18.subLabel = null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason);
  items1[11] = obj18;
  const obj19 = { settings: null, subLabel: null };
  const items13 = [MobileUserSettings.ANIMATE_STICKERS];
  obj19.settings = items13;
  const tmp6 = null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason);
  obj19.subLabel =
    null != animateStickersOverrideReason && getSettingsOverrideReasonDefault(animateStickersOverrideReason);
  items1[12] = obj19;
  const obj20 = { settings: null, label: null, subLabel: null };
  const items14 = [,];
  ({ YOU_BAR_NAMEPLATE_ACCESSIBILITY: arr15[0], YOU_BAR_AVATAR_DECO_ACCESSSIBILITY: arr15[1] } = MobileUserSettings);
  obj20.settings = items14;
  const intl13 = util.intl;
  obj20.label = intl13.string(util.t.Loi61N);
  const intl14 = util.intl;
  const t = util.t;
  obj20.subLabel = intl14.string(youBarAnimationsOverridden.youBarAnimationsOverridden ? t["SZC/D5"] : t.c7VVKU);
  items1[13] = obj20;
  return items1.filter((item) => null != item);
}
const MobileUserSettings = fn(7974).MobileUserSettings;
const Constants = fn(1085);
({ HelpdeskArticles: closure_7, UserSettingsSections: closure_8 } = Constants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/accessibility/native/SettingsAccessibilityScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SettingsAccessibilityScreen() {
      const cResult = c.c(12);
      const stackNavigation = useNavigation.useStackNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsOverridesStore];
        const fn = function o() {
          return {
            gifAutoPlayOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateEmoji"),
            animateStickersOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateStickers"),
          };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(tmp5, tmp6);
      ({ gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason } =
        stateFromStoresObject);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AccessibilityStore];
        class O {
          constructor() {
            tmp = closure_1_4;
            tmp2 =
              ("respect-motion-settings" === closure_1_4.youBarNameplateAnimation ||
                "respect-motion-settings" === tmp.youBarAvatarDecoAnimation) &&
              tmp.useReducedMotion;
            return tmp2;
          }
        }
        cResult[2] = items1;
        cResult[3] = O;
        let tmp10 = O;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = useStateFromStores;
      const stateFromStores = useStateFromStores.useStateFromStores(tmp9, tmp10);
      if (cResult[4] === animateEmojiOverrideReason) {
        if (cResult[5] === animateStickersOverrideReason) {
          if (cResult[6] === gifAutoPlayOverrideReason) {
            if (cResult[7] === stackNavigation) {
              if (cResult[8] === stateFromStores) {
                let tmp13 = cResult[9];
              }
              if (cResult[10] !== tmp13) {
                class O {
                  constructor() {
                    tmp = closure_1_4;
                    tmp2 =
                      ("respect-motion-settings" === closure_1_4.youBarNameplateAnimation ||
                        "respect-motion-settings" === tmp.youBarAvatarDecoAnimation) &&
                      tmp.useReducedMotion;
                    return tmp2;
                  }
                }
                const tmp18 = jsx(SettingLayoutDefault, { node: null });
                cResult[10] = tmp13;
                cResult[11] = tmp18;
                let tmp15 = tmp18;
                const obj3 = { node: null };
              } else {
                tmp15 = cResult[11];
              }
              return tmp15;
            }
          }
        }
      }
      const tmpResult3 = useStateFromStores;
      const tmpResult4 = SettingBuilders;
      const list = tmpResult4.createList({
        sections: getAccessibilitySettingScreen({
          navigation: stackNavigation,
          gifAutoPlayOverrideReason,
          animateEmojiOverrideReason,
          animateStickersOverrideReason,
          youBarAnimationsOverridden: stateFromStores,
        }),
      });
      cResult[4] = animateEmojiOverrideReason;
      cResult[5] = animateStickersOverrideReason;
      cResult[6] = gifAutoPlayOverrideReason;
      cResult[7] = stackNavigation;
      cResult[8] = stateFromStores;
      cResult[9] = list;
      tmp13 = list;
      const obj4 = {
        sections: getAccessibilitySettingScreen({
          navigation: stackNavigation,
          gifAutoPlayOverrideReason,
          animateEmojiOverrideReason,
          animateStickersOverrideReason,
          youBarAnimationsOverridden: stateFromStores,
        }),
      };
    }
  : function SettingsAccessibilityScreen() {
      stackNavigation = stackNavigation(animateEmojiOverrideReason[14]).useStackNavigation();
      const obj = stackNavigation(animateEmojiOverrideReason[14]);
      const items = [UserSettingsOverridesStore];
      const stateFromStoresObject = stackNavigation(animateEmojiOverrideReason[15]).useStateFromStoresObject(
        items,
        () => ({
          gifAutoPlayOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("gifAutoPlay"),
          animateEmojiOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateEmoji"),
          animateStickersOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateStickers"),
        }),
      );
      const gifAutoPlayOverrideReason = stateFromStoresObject.gifAutoPlayOverrideReason;
      animateEmojiOverrideReason = stateFromStoresObject.animateEmojiOverrideReason;
      const animateStickersOverrideReason = stateFromStoresObject.animateStickersOverrideReason;
      let obj2 = stackNavigation(animateEmojiOverrideReason[15]);
      const items1 = [stateFromStores];
      stateFromStores = stackNavigation(animateEmojiOverrideReason[15]).useStateFromStores(
        items1,
        () =>
          ("respect-motion-settings" === stateFromStores.youBarNameplateAnimation ||
            "respect-motion-settings" === stateFromStores.youBarAvatarDecoAnimation) &&
          stateFromStores.useReducedMotion,
      );
      const items2 = [
        animateEmojiOverrideReason,
        animateStickersOverrideReason,
        gifAutoPlayOverrideReason,
        stackNavigation,
        stateFromStores,
      ];
      const node = animateStickersOverrideReason.useMemo(() => {
        const obj2 = {
          sections: getAccessibilitySettingScreen({
            navigation: stackNavigation,
            gifAutoPlayOverrideReason,
            animateEmojiOverrideReason,
            animateStickersOverrideReason,
            youBarAnimationsOverridden: stateFromStores,
          }),
        };
        return SettingBuilders.createList(obj2);
      }, items2);
      return jsx(gifAutoPlayOverrideReason(animateEmojiOverrideReason[17]), { node });
    };
