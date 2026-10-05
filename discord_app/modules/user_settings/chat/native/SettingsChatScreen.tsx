// === Module 15281: SettingsChatScreen ===

// Module 15281 (SettingsChatScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl14 from "intl" /* 1126 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6487 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import AssetRegistryDefault from "AssetRegistry" /* 10124 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import SettingLayoutDefault from "SettingLayout" /* 14499 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, premiumTypeSubscription, route;

let c10;
let c9;
let obj2;
function getChatSettings() {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items10;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  const obj = { label: intl.string(intl14.t["9nyle0"]), settings: items, subLabel: intl2.string(intl14.t.T0rbtM) };
  intl = intl14.intl;
  items = [, , ];
  ({ DISPLAY_MEDIA_LINKS: arr[0], DISPLAY_MEDIA_UPLOADS: arr[1], IMAGE_DESCRIPTIONS: arr[2] } = MobileUserSettings);
  intl2 = intl14.intl;
  const items1 = [obj, , , , , , , , , ];
  const obj2 = { label: intl3.string(intl14.t.YTnrbV), settings: items2, subLabel: intl4.string(intl14.t.eZmJYE) };
  intl3 = intl14.intl;
  items2 = [MobileUserSettings.SAVE_CAMERA_UPLOADS_TO_DEVICE];
  intl4 = intl14.intl;
  items1[1] = obj2;
  const obj3 = { settings: items3, subLabel: React4(closure_12, {}) };
  items3 = [MobileUserSettings.VIDEO_UPLOAD_QUALITY];
  items1[2] = obj3;
  const obj4 = { label: intl5.string(intl14.t.fyG8t2), settings: items4, subLabel: intl6.string(intl14.t["wC0+Ph"]) };
  intl5 = intl14.intl;
  items4 = [MobileUserSettings.DATA_SAVING_MODE];
  intl6 = intl14.intl;
  items1[3] = obj4;
  const obj5 = { label: intl7.string(intl14.t.PWZOn4), settings: items5 };
  intl7 = intl14.intl;
  items5 = [MobileUserSettings.EMBED_AND_LINK_PREVIEWS];
  items1[4] = obj5;
  const obj6 = { label: intl8.string(intl14.t.sMOuuS), settings: items6 };
  intl8 = intl14.intl;
  items6 = [, , ];
  ({ EMOJI_REACTIONS_ON_MESSAGES: arr7[0], CHAT_EMOJI_EMOTICONS: arr7[1], INLINE_EMOJI_SUGGESTIONS: arr7[2] } = MobileUserSettings);
  items1[5] = obj6;
  const obj7 = { settings: items7 };
  items7 = [MobileUserSettings.SHOW_SPOILERS];
  items1[6] = obj7;
  const obj8 = { label: intl9.string(intl14.t["29xPVZ"]), settings: items8, subLabel: intl10.string(intl14.t["/eVrj8"]) };
  intl9 = intl14.intl;
  items8 = [MobileUserSettings.STICKER_AUTOCOMPLETE];
  intl10 = intl14.intl;
  items1[7] = obj8;
  const obj9 = { label: intl11.string(intl14.t["4NDJgM"]), settings: items9 };
  intl11 = intl14.intl;
  items9 = [, , ];
  ({ SWIPE_RIGHT_TO_LEFT: arr10[0], DOUBLE_TAP_TO_REACT_ENABLED: arr10[1], DOUBLE_TAP_EMOJI: arr10[2] } = MobileUserSettings);
  items1[8] = obj9;
  const obj10 = { label: intl12.string(intl14.t.BkuOO6), settings: items10, subLabel: intl13.string(intl14.t.p4IKE9) };
  intl12 = intl14.intl;
  items10 = [MobileUserSettings.TEXT_AND_MEDIA_SYNC];
  intl13 = intl14.intl;
  items1[9] = obj10;
  return items1;
}
const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { card: obj2, cardContent: { flexDirection: "row", alignItems: "center" }, cardIcon: { marginEnd: 8 } };
obj2 = { marginTop: 8, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Card;
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj10;
  let obj6;
  let obj7;
  let stackNavigation;
  let tmp11;
  let tmp6;
  let tmp7;
  let obj = stackNavigation(576);
  const cResult = obj.c(9);
  const obj2 = stackNavigation(1490);
  stackNavigation = obj2.useStackNavigation();
  const tmp5 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, SubscriptionStore];
    const fn = function l() {
      premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
      currentUser = currentUser.getCurrentUser();
      const obj = stackNavigation(dependencyMap[12]);
      return obj.hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = stackNavigation(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(stackNavigation(1126).t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" }) };
    const Text = tmp(4886).Text;
    intl = tmp(1126).intl;
    const tmp13 = closure_9(Text, obj3);
    cResult[2] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === stackNavigation) {
    if (cResult[4] === tmp5) {
      let tmp14;
      let tmp20;
      if (cResult[5] === stateFromStores) {
        tmp14 = cResult[6];
      }
      if (cResult[7] !== tmp14) {
        const obj4 = { children: items1 };
        items1 = [tmp11, tmp14];
        const tmp23 = closure_10(View, obj4);
        cResult[7] = tmp14;
        cResult[8] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[8];
      }
      return tmp20;
    }
  }
  let tmp15 = !stateFromStores;
  if (tmp15) {
    const obj5 = { style: tmp5.card, children: closure_9(Card, obj6) };
    obj6 = { border: "none", shadow: "none", children: closure_10(View, obj7) };
    obj7 = { style: tmp5.cardContent, children: items2 };
    Card = tmp(5995).Card;
    const obj8 = { style: tmp5.cardIcon, source: AssetRegistryDefault, size: stackNavigation(1188).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
    const Icon = tmp(1188).Icon;
    items2 = [closure_9(Icon, obj8), ];
    const obj9 = { variant: "text-sm/medium", color: "text-muted", children: intl2.format(stackNavigation(1126).t.uW1zul, obj10) };
    const Text2 = tmp(4886).Text;
    intl2 = tmp(1126).intl;
    obj10 = {
      onClick() {
          const obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(UserSettingsSections.PREMIUM);
          stackNavigation.push(UserSettingsSections.PREMIUM, { isFromTextSection: true });
        }
    };
    items2[1] = closure_9(Text2, obj9);
    tmp15 = closure_9(View, obj5);
  }
  cResult[3] = stackNavigation;
  cResult[4] = tmp5;
  cResult[5] = stateFromStores;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : (() => {
  let Card;
  let closure_0;
  let intl;
  let intl2;
  let items2;
  let obj5;
  let obj6;
  let obj9;
  let obj = require("useNavigation");
  _require = obj.useStackNavigation();
  const tmp3 = closure_11();
  const items = [UserStore, SubscriptionStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
    currentUser = currentUser.getCurrentUser();
    const obj = closure_0(dependencyMap[12]);
    return obj.hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription);
  });
  const obj3 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(require("intl").t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" }) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  const children = [closure_9(Text, obj3), ];
  let tmp7Result = !stateFromStores;
  if (tmp7Result) {
    const obj4 = { style: tmp3.card, children: closure_9(Card, obj5) };
    obj5 = { border: "none", shadow: "none", children: closure_10(View, obj6) };
    obj6 = { style: tmp3.cardContent, children: items2 };
    Card = tmp(5995).Card;
    const obj7 = { style: tmp3.cardIcon, source: AssetRegistryDefault, size: require("native").Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
    const Icon = tmp(1188).Icon;
    items2 = [closure_9(Icon, obj7), ];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: intl2.format(require("intl").t.uW1zul, obj9) };
    const Text2 = tmp(4886).Text;
    intl2 = tmp(1126).intl;
    obj9 = {
      onClick() {
          const obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(UserSettingsSections.PREMIUM);
          closure_0.push(UserSettingsSections.PREMIUM, { isFromTextSection: true });
        }
    };
    items2[1] = closure_9(Text2, obj8);
    tmp7Result = closure_9(View, obj4);
  }
  children[1] = tmp7Result;
  return closure_10(View, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  let initialSetting1;
  let tmp12;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  route = route.route;
  let initialSetting;
  const first = cResult[0];
  if (route != null) {
    const params = route.params;
    if (params != null) {
      initialSetting = params.initialSetting;
    }
  }
  if (first !== initialSetting) {
    const obj2 = { sections: getChatSettings(), scrollTarget: initialSetting1 };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    initialSetting1 = undefined;
    if (route != null) {
      const params2 = route.params;
      if (params2 != null) {
        initialSetting1 = params2.initialSetting;
      }
    }
    const list = createList(obj2);
    let initialSetting2;
    if (route != null) {
      const params3 = route.params;
      if (params3 != null) {
        initialSetting2 = params3.initialSetting;
      }
    }
    cResult[0] = initialSetting2;
    cResult[1] = list;
    tmp6 = list;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const obj3 = { node: tmp6 };
    const tmp15 = React4(SettingLayoutDefault, obj3);
    cResult[2] = tmp6;
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : ((route) => {
  route = route.route;
  let initialSetting;
  const useMemo = react.useMemo;
  if (route != null) {
    let params = route.params;
    if (params != null) {
      initialSetting = params.initialSetting;
    }
  }
  const items = [initialSetting];
  const node = useMemo(() => {
    let initialSetting;
    const tmp = SettingBuilders;
    const createList = tmp.createList;
    const obj = { sections: getChatSettings(), scrollTarget: initialSetting };
    initialSetting = undefined;
    if (route != null) {
      const params = route.params;
      if (params != null) {
        initialSetting = params.initialSetting;
      }
    }
    return createList(obj);
  }, items);
  return closure_9(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SettingsChatScreen.tsx");

export default tmp3;