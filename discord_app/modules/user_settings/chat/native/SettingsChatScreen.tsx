// discord_app/modules/user_settings/chat/native/SettingsChatScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import _modDef10398 from "../../../../../_runtime/metro/10398__.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";

require = fn;
function VideoUploadQualityNitroUpsell() {
  let obj = require("useNavigation");
  _require = obj.useStackNavigation();
  const tmp3 = closure_11();
  let obj1 = require("useStateFromStores");
  const items = [UserStore, SubscriptionStore];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
    currentUser = currentUser.getCurrentUser();
    return closure_0(dependencyMap[11]).hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription);
  });
  obj = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = require("util").intl;
  obj.children = intl.format(require("util").t["Up+hSO"], {
    supportURL: "https://support.discord.com/hc/articles/9665451164951",
  });
  const children = [closure_9(require("Text/Text").Text, obj)];
  let tmp7Result = !stateFromStores;
  if (!stateFromStores) {
    obj = { style: tmp3.card, children: null };
    obj1 = { border: "none", shadow: "none", children: null };
    const obj2 = { style: tmp3.cardContent, children: null };
    const obj3 = {
      style: tmp3.cardIcon,
      source: _modDef10398,
      size: tmp(1178).Icon.Sizes.SMALL,
      color: nativeDefault.unsafe_rawColors.PRIMARY_400,
    };
    const items2 = [closure_9(tmp(1178).Icon, obj3)];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = tmp(1114).intl;
    const obj5 = {
      onClick() {
        UserSettingsModalActionCreatorsDefault.setSection(UserSettingsSections.PREMIUM);
        closure_0.push(UserSettingsSections.PREMIUM, { isFromTextSection: true });
      },
    };
    obj4.children = intl2.format(tmp(1114).t.uW1zul, obj5);
    items2[1] = closure_9(tmp(4556).Text, obj4);
    obj2.children = items2;
    obj1.children = closure_10(View, obj2);
    obj.children = closure_9(tmp(5607).Card, obj1);
    tmp7Result = closure_9(View, obj);
  }
  children[1] = tmp7Result;
  return closure_10(View, { children });
}
const View = fn(17).View;
const MobileUserSettings = fn(7975).MobileUserSettings;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { card: null, cardContent: null, cardIcon: null };
createStyles = {
  marginTop: 8,
  borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
};
createStyles.card = createStyles;
createStyles.cardContent = { flexDirection: "row", alignItems: "center" };
createStyles.cardIcon = { marginEnd: 8 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SettingsChatScreen.tsx");

export default function SettingsChatScreen(route) {
  route = route.route;
  let initialSetting;
  if (route != null) {
    let params = route.params;
    if (params != null) {
      initialSetting = params.initialSetting;
    }
  }
  let items = [initialSetting];
  const node = noop.useMemo(() => {
    let obj = { sections: null, scrollTarget: null };
    obj = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["9nyle0"]);
    const items = [, ,];
    ({ DISPLAY_MEDIA_LINKS: arr[0], DISPLAY_MEDIA_UPLOADS: arr[1], IMAGE_DESCRIPTIONS: arr[2] } = MobileUserSettings);
    obj.settings = items;
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t.T0rbtM);
    const items1 = [obj, , , , , , , ,];
    const obj1 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj1.label = intl3.string(util.t.YTnrbV);
    const items2 = [MobileUserSettings.SAVE_CAMERA_UPLOADS_TO_DEVICE];
    obj1.settings = items2;
    const intl4 = util.intl;
    obj1.subLabel = intl4.string(util.t.eZmJYE);
    items1[1] = obj1;
    const obj2 = { settings: null, subLabel: React7(VideoUploadQualityNitroUpsell, {}) };
    const items3 = [MobileUserSettings.VIDEO_UPLOAD_QUALITY];
    obj2.settings = items3;
    items1[2] = obj2;
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl5 = util.intl;
    obj3.label = intl5.string(util.t.fyG8t2);
    const items4 = [MobileUserSettings.DATA_SAVING_MODE];
    obj3.settings = items4;
    const intl6 = util.intl;
    obj3.subLabel = intl6.string(util.t["wC0+Ph"]);
    items1[3] = obj3;
    const obj4 = { label: null, settings: null };
    const intl7 = util.intl;
    obj4.label = intl7.string(util.t.PWZOn4);
    const items5 = [MobileUserSettings.EMBED_AND_LINK_PREVIEWS];
    obj4.settings = items5;
    items1[4] = obj4;
    const obj5 = { label: null, settings: null, subLabel: null };
    const intl8 = util.intl;
    obj5.label = intl8.string(util.t.sMOuuS);
    const items6 = [,];
    ({ EMOJI_REACTIONS_ON_MESSAGES: arr7[0], CHAT_EMOJI_EMOTICONS: arr7[1] } = MobileUserSettings);
    obj5.settings = items6;
    const intl9 = util.intl;
    obj5.subLabel = intl9.format(util.t.GejoQK, {
      emojiHook(arg0) {
        return arg0;
      },
    });
    items1[5] = obj5;
    const obj7 = { label: null, settings: null, subLabel: null };
    const intl10 = util.intl;
    obj7.label = intl10.string(util.t["29xPVZ"]);
    const items7 = [MobileUserSettings.STICKER_AUTOCOMPLETE];
    obj7.settings = items7;
    const intl11 = util.intl;
    obj7.subLabel = intl11.string(util.t["/eVrj8"]);
    items1[6] = obj7;
    const obj8 = { label: null, settings: null };
    const intl12 = util.intl;
    obj8.label = intl12.string(util.t["4NDJgM"]);
    const items8 = [, ,];
    ({
      SWIPE_RIGHT_TO_LEFT: arr9[0],
      DOUBLE_TAP_TO_REACT_ENABLED: arr9[1],
      DOUBLE_TAP_EMOJI: arr9[2],
    } = MobileUserSettings);
    obj8.settings = items8;
    items1[7] = obj8;
    const obj9 = { label: null, settings: null, subLabel: null };
    const intl13 = util.intl;
    obj9.label = intl13.string(util.t.BkuOO6);
    const items9 = [MobileUserSettings.TEXT_AND_MEDIA_SYNC];
    obj9.settings = items9;
    const intl14 = util.intl;
    obj9.subLabel = intl14.string(util.t.p4IKE9);
    items1[8] = obj9;
    obj.sections = items1;
    let initialSetting;
    if (route != null) {
      const params = route.params;
      if (params != null) {
        initialSetting = params.initialSetting;
      }
    }
    obj.scrollTarget = initialSetting;
    return obj.createList(obj);
  }, items);
  return closure_9(SettingLayoutDefault, { node });
}
