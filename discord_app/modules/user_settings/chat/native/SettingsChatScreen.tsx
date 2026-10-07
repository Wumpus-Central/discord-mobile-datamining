// === Module 15296: SettingsChatScreen ===

// Module 15296 (SettingsChatScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6494 */;
import _modDef10137 from "module_10137" /* 10137 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import SettingLayoutDefault from "SettingLayout" /* 14515 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;

require = fn;
function getChatSettings() {
  const obj = { label: null, settings: null, subLabel: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["9nyle0"]);
  const items = [, , ];
  ({ DISPLAY_MEDIA_LINKS: arr[0], DISPLAY_MEDIA_UPLOADS: arr[1], IMAGE_DESCRIPTIONS: arr[2] } = MobileUserSettings);
  obj.settings = items;
  const intl2 = util.intl;
  obj.subLabel = intl2.string(util.t.T0rbtM);
  const items1 = [obj, , , , , , , , , ];
  const obj2 = { label: null, settings: null, subLabel: null };
  const intl3 = util.intl;
  obj2.label = intl3.string(util.t.YTnrbV);
  const items2 = [MobileUserSettings.SAVE_CAMERA_UPLOADS_TO_DEVICE];
  obj2.settings = items2;
  const intl4 = util.intl;
  obj2.subLabel = intl4.string(util.t.eZmJYE);
  items1[1] = obj2;
  const obj3 = { settings: null, subLabel: options(closure_12, {}) };
  const items3 = [MobileUserSettings.VIDEO_UPLOAD_QUALITY];
  obj3.settings = items3;
  items1[2] = obj3;
  const obj4 = { label: null, settings: null, subLabel: null };
  const intl5 = util.intl;
  obj4.label = intl5.string(util.t.fyG8t2);
  const items4 = [MobileUserSettings.DATA_SAVING_MODE];
  obj4.settings = items4;
  const intl6 = util.intl;
  obj4.subLabel = intl6.string(util.t["wC0+Ph"]);
  items1[3] = obj4;
  const obj5 = { label: null, settings: null };
  const intl7 = util.intl;
  obj5.label = intl7.string(util.t.PWZOn4);
  const items5 = [MobileUserSettings.EMBED_AND_LINK_PREVIEWS];
  obj5.settings = items5;
  items1[4] = obj5;
  const obj6 = { label: null, settings: null };
  const intl8 = util.intl;
  obj6.label = intl8.string(util.t.sMOuuS);
  const items6 = [, , ];
  ({ EMOJI_REACTIONS_ON_MESSAGES: arr7[0], CHAT_EMOJI_EMOTICONS: arr7[1], INLINE_EMOJI_SUGGESTIONS: arr7[2] } = MobileUserSettings);
  obj6.settings = items6;
  items1[5] = obj6;
  const obj7 = { settings: null };
  const items7 = [MobileUserSettings.SHOW_SPOILERS];
  obj7.settings = items7;
  items1[6] = obj7;
  const obj8 = { label: null, settings: null, subLabel: null };
  const intl9 = util.intl;
  obj8.label = intl9.string(util.t["29xPVZ"]);
  const items8 = [MobileUserSettings.STICKER_AUTOCOMPLETE];
  obj8.settings = items8;
  const intl10 = util.intl;
  obj8.subLabel = intl10.string(util.t["/eVrj8"]);
  items1[7] = obj8;
  const obj9 = { label: null, settings: null };
  const intl11 = util.intl;
  obj9.label = intl11.string(util.t["4NDJgM"]);
  const items9 = [, , ];
  ({ SWIPE_RIGHT_TO_LEFT: arr10[0], DOUBLE_TAP_TO_REACT_ENABLED: arr10[1], DOUBLE_TAP_EMOJI: arr10[2] } = MobileUserSettings);
  obj9.settings = items9;
  items1[8] = obj9;
  const obj10 = { label: null, settings: null, subLabel: null };
  const intl12 = util.intl;
  obj10.label = intl12.string(util.t.BkuOO6);
  const items10 = [MobileUserSettings.TEXT_AND_MEDIA_SYNC];
  obj10.settings = items10;
  const intl13 = util.intl;
  obj10.subLabel = intl13.string(util.t.p4IKE9);
  items1[9] = obj10;
  return items1;
}
const View = fn(17).View;
const MobileUserSettings = fn(7645).MobileUserSettings;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { card: { marginTop: 8, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg }, cardContent: { flexDirection: "row", alignItems: "center" }, cardIcon: { marginEnd: 8 } };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stackNavigation(576).c(9);
  const obj = stackNavigation(576);
  stackNavigation = stackNavigation(1490).useStackNavigation();
  const tmp5 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, SubscriptionStore];
    const fn = function l() {
      premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
      currentUser = currentUser.getCurrentUser();
      return stackNavigation(dependencyMap[12]).hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const obj2 = stackNavigation(1490);
  const stateFromStores = stackNavigation(573).useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = tmp(1126).intl;
    obj3.children = intl.format(tmp(1126).t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" });
    const tmp13 = closure_9(tmp(4892).Text, obj3);
    cResult[2] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === stackNavigation) {
    if (cResult[4] === tmp5) {
      if (cResult[5] === stateFromStores) {
        let tmp14 = cResult[6];
      }
      if (cResult[7] !== tmp14) {
        const obj4 = { children: null };
        const items1 = [tmp11, tmp14];
        obj4.children = items1;
        const tmp23 = closure_10(View, obj4);
        cResult[7] = tmp14;
        cResult[8] = tmp23;
        let tmp20 = tmp23;
      } else {
        tmp20 = cResult[8];
      }
      return tmp20;
    }
  }
  let tmp15 = !stateFromStores;
  if (!stateFromStores) {
    const obj5 = { style: tmp5.card, children: null };
    const obj6 = { border: "none", shadow: "none", children: null };
    const obj7 = { style: tmp5.cardContent, children: null };
    const obj8 = { style: tmp5.cardIcon, source: _modDef10137, size: tmp(1188).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
    const items2 = [closure_9(tmp(1188).Icon, obj8), ];
    const obj9 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = tmp(1126).intl;
    const obj10 = {
      onClick() {
          UserSettingsModalActionCreatorsDefault.setSection(UserSettingsSections.PREMIUM);
          stackNavigation.push(UserSettingsSections.PREMIUM, { isFromTextSection: true });
        }
    };
    obj9.children = intl2.format(tmp(1126).t.uW1zul, obj10);
    items2[1] = closure_9(tmp(4892).Text, obj9);
    obj7.children = items2;
    obj6.children = closure_10(View, obj7);
    obj5.children = closure_9(tmp(6002).Card, obj6);
    tmp15 = closure_9(View, obj5);
  }
  cResult[3] = stackNavigation;
  cResult[4] = tmp5;
  cResult[5] = stateFromStores;
  cResult[6] = tmp15;
  tmp14 = tmp15;
  const tmpResult = stackNavigation(573);
}) : (() => {
  _require = require("useNavigation").useStackNavigation();
  const tmp3 = closure_11();
  const obj = require("useNavigation");
  const items = [UserStore, SubscriptionStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
    currentUser = currentUser.getCurrentUser();
    return closure_0(dependencyMap[12]).hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription);
  });
  const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = require("util").intl;
  obj3.children = intl.format(require("util").t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" });
  const children = [closure_9(require("Text/Text").Text, obj3), ];
  let tmp7Result = !stateFromStores;
  if (!stateFromStores) {
    const obj4 = { style: tmp3.card, children: null };
    const obj5 = { border: "none", shadow: "none", children: null };
    const obj6 = { style: tmp3.cardContent, children: null };
    const obj7 = { style: tmp3.cardIcon, source: _modDef10137, size: tmp(1188).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
    const items2 = [closure_9(tmp(1188).Icon, obj7), ];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = tmp(1126).intl;
    const obj9 = {
      onClick() {
          UserSettingsModalActionCreatorsDefault.setSection(UserSettingsSections.PREMIUM);
          closure_0.push(UserSettingsSections.PREMIUM, { isFromTextSection: true });
        }
    };
    obj8.children = intl2.format(tmp(1126).t.uW1zul, obj9);
    items2[1] = closure_9(tmp(4892).Text, obj8);
    obj6.children = items2;
    obj5.children = closure_10(View, obj6);
    obj4.children = closure_9(tmp(6002).Card, obj5);
    tmp7Result = closure_9(View, obj4);
  }
  children[1] = tmp7Result;
  return closure_10(View, { children });
});
ReactCompilerGating = fn(558);
let obj3 = { marginTop: 8, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SettingsChatScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  const cResult = c.c(4);
  route = route.route;
  let initialSetting;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      initialSetting = params.initialSetting;
    }
  }
  if (cResult[0] !== initialSetting) {
    const obj2 = { sections: getChatSettings(), scrollTarget: null };
    let initialSetting1;
    if (route != null) {
      const params2 = route.params;
      if (params2 != null) {
        initialSetting1 = params2.initialSetting;
      }
    }
    obj2.scrollTarget = initialSetting1;
    const list = SettingBuilders.createList(obj2);
    let initialSetting2;
    if (route != null) {
      const params3 = route.params;
      if (params3 != null) {
        initialSetting2 = params3.initialSetting;
      }
    }
    cResult[0] = initialSetting2;
    cResult[1] = list;
    let tmp5 = list;
    const tmpResult = SettingBuilders;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const obj3 = { node: tmp5 };
    const tmp13 = options(SettingLayoutDefault, obj3);
    cResult[2] = tmp5;
    cResult[3] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  return tmp10;
}) : ((route) => {
  route = route.route;
  let initialSetting;
  if (route != null) {
    let params = route.params;
    if (params != null) {
      initialSetting = params.initialSetting;
    }
  }
  const items = [initialSetting];
  const node = noop.useMemo(() => {
    const obj2 = { sections: getChatSettings(), scrollTarget: null };
    let initialSetting;
    if (route != null) {
      const params = route.params;
      if (params != null) {
        initialSetting = params.initialSetting;
      }
    }
    obj2.scrollTarget = initialSetting;
    return SettingBuilders.createList(obj2);
  }, items);
  return closure_9(SettingLayoutDefault, { node });
});