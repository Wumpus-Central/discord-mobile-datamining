// discord_app/modules/user_settings/chat/native/SettingsChatScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import _modDef10527 from "../../../../../_runtime/metro/10527__.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";

require = fn;
function VideoUploadQualityNitroUpsell() {
  _require = require("useNavigation").useStackNavigation();
  const tmp3 = closure_11();
  const obj = require("useNavigation");
  const items = [UserStore, SubscriptionStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
    currentUser = currentUser.getCurrentUser();
    return closure_0(dependencyMap[11]).hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription);
  });
  const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = require("util").intl;
  obj3.children = intl.format(require("util").t["Up+hSO"], {
    supportURL: "https://support.discord.com/hc/articles/9665451164951",
  });
  const children = [closure_9(require("Text/Text").Text, obj3)];
  let tmp7Result = !stateFromStores;
  if (!stateFromStores) {
    const obj4 = { style: tmp3.card, children: null };
    const obj5 = { border: "none", shadow: "none", children: null };
    const obj6 = { style: tmp3.cardContent, children: null };
    const obj7 = {
      style: tmp3.cardIcon,
      source: _modDef10527,
      size: tmp(1176).Icon.Sizes.SMALL,
      color: nativeDefault.unsafe_rawColors.PRIMARY_400,
    };
    const items2 = [closure_9(tmp(1176).Icon, obj7)];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = tmp(1114).intl;
    const obj9 = {
      onClick() {
        UserSettingsModalActionCreatorsDefault.setSection(UserSettingsSections.PREMIUM);
        closure_0.push(UserSettingsSections.PREMIUM, { isFromTextSection: true });
      },
    };
    obj8.children = intl2.format(tmp(1114).t.uW1zul, obj9);
    items2[1] = closure_9(tmp(4632).Text, obj8);
    obj6.children = items2;
    obj5.children = closure_10(View, obj6);
    obj4.children = closure_9(tmp(5688).Card, obj5);
    tmp7Result = closure_9(View, obj4);
  }
  children[1] = tmp7Result;
  return closure_10(View, { children });
}
const View = fn(17).View;
const MobileUserSettings = fn(8079).MobileUserSettings;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  card: {
    marginTop: 8,
    borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.lg,
  },
  cardContent: { flexDirection: "row", alignItems: "center" },
  cardIcon: { marginEnd: 8 },
};
let closure_11 = createStyles.createStyles(obj2);
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
    const obj2 = { sections: null, scrollTarget: null };
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t["9nyle0"]);
    const items = [, ,];
    ({ DISPLAY_MEDIA_LINKS: arr[0], DISPLAY_MEDIA_UPLOADS: arr[1], IMAGE_DESCRIPTIONS: arr[2] } = MobileUserSettings);
    obj3.settings = items;
    const intl2 = util.intl;
    obj3.subLabel = intl2.string(util.t.T0rbtM);
    const items1 = [obj3, , , , , , , , ,];
    const obj4 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.YTnrbV);
    const items2 = [MobileUserSettings.SAVE_CAMERA_UPLOADS_TO_DEVICE];
    obj4.settings = items2;
    const intl4 = util.intl;
    obj4.subLabel = intl4.string(util.t.eZmJYE);
    items1[1] = obj4;
    const obj5 = { settings: null, subLabel: React7(VideoUploadQualityNitroUpsell, {}) };
    const items3 = [MobileUserSettings.VIDEO_UPLOAD_QUALITY];
    obj5.settings = items3;
    items1[2] = obj5;
    const obj6 = { label: null, settings: null, subLabel: null };
    const intl5 = util.intl;
    obj6.label = intl5.string(util.t.fyG8t2);
    const items4 = [MobileUserSettings.DATA_SAVING_MODE];
    obj6.settings = items4;
    const intl6 = util.intl;
    obj6.subLabel = intl6.string(util.t["wC0+Ph"]);
    items1[3] = obj6;
    const obj7 = { label: null, settings: null };
    const intl7 = util.intl;
    obj7.label = intl7.string(util.t.PWZOn4);
    const items5 = [MobileUserSettings.EMBED_AND_LINK_PREVIEWS];
    obj7.settings = items5;
    items1[4] = obj7;
    const obj8 = { label: null, settings: null, subLabel: null };
    const intl8 = util.intl;
    obj8.label = intl8.string(util.t.sMOuuS);
    const items6 = [,];
    ({ EMOJI_REACTIONS_ON_MESSAGES: arr7[0], CHAT_EMOJI_EMOTICONS: arr7[1] } = MobileUserSettings);
    obj8.settings = items6;
    const intl9 = util.intl;
    obj8.subLabel = intl9.format(util.t.GejoQK, {
      emojiHook(arg0) {
        return arg0;
      },
    });
    items1[5] = obj8;
    const obj10 = { settings: null };
    const items7 = [MobileUserSettings.SHOW_SPOILERS];
    obj10.settings = items7;
    items1[6] = obj10;
    const obj11 = { label: null, settings: null, subLabel: null };
    const intl10 = util.intl;
    obj11.label = intl10.string(util.t["29xPVZ"]);
    const items8 = [MobileUserSettings.STICKER_AUTOCOMPLETE];
    obj11.settings = items8;
    const intl11 = util.intl;
    obj11.subLabel = intl11.string(util.t["/eVrj8"]);
    items1[7] = obj11;
    const obj12 = { label: null, settings: null };
    const intl12 = util.intl;
    obj12.label = intl12.string(util.t["4NDJgM"]);
    const items9 = [, ,];
    ({
      SWIPE_RIGHT_TO_LEFT: arr10[0],
      DOUBLE_TAP_TO_REACT_ENABLED: arr10[1],
      DOUBLE_TAP_EMOJI: arr10[2],
    } = MobileUserSettings);
    obj12.settings = items9;
    items1[8] = obj12;
    const obj13 = { label: null, settings: null, subLabel: null };
    const intl13 = util.intl;
    obj13.label = intl13.string(util.t.BkuOO6);
    const items10 = [MobileUserSettings.TEXT_AND_MEDIA_SYNC];
    obj13.settings = items10;
    const intl14 = util.intl;
    obj13.subLabel = intl14.string(util.t.p4IKE9);
    items1[9] = obj13;
    obj2.sections = items1;
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
}
