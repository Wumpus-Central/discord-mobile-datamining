// discord_app/modules/user_settings/chat/native/SettingsChatScreen.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../../_runtime/10185_registerAsset.js";
import _modDef14167 from "../../../settings/native/renderer/SettingLayout.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/UserStore.tsx";
import closure_6 from "../../../../stores/billing/SubscriptionStore.tsx";
import { MobileUserSettings } from "../../core/native/SettingsConstants.tsx";
import { UserSettingsSections } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

const require = arg1;
function VideoUploadQualityNitroUpsell() {
  let obj = useNavigation;
  _require = obj.useStackNavigation();
  const tmp3 = callback2();
  obj1 = defaultAreStatesEqual;
  const items = [closure_5, closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
    currentUser = currentUser.getCurrentUser();
    return arr(table[11]).hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription);
  });
  obj = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[2] = intl.format(require("../../../../intl/index.native.tsx").t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" });
  const children = [callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj), ];
  let tmp7Result = !stateFromStores;
  if (!stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp3.card;
    obj1 = { border: "none", shadow: "none", children: null };
    const obj2 = { style: null, children: null };
    obj2[0] = tmp3.cardContent;
    const obj3 = { style: null, source: null, size: null, color: null };
    obj3[0] = tmp3.cardIcon;
    obj3[1] = registerAssetDefault;
    obj3[2] = tmp(1297).Icon.Sizes.SMALL;
    obj3[3] = ThemesDefault.unsafe_rawColors.PRIMARY_400;
    const items2 = [tmp7(tmp(1297).Icon, obj3), ];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = tmp(1236).intl;
    const obj5 = { onClick: null };
    obj5[0] = function onClick() {
      closure_1_1(closure_1_2[17]).setSection(closure_1_8.PREMIUM);
      const obj = closure_1_1(closure_1_2[17]);
    };
    obj4[2] = intl2.format(tmp(1236).t.uW1zul, obj5);
    items2[1] = tmp7(tmp(4440).Text, obj4);
    obj2[1] = items2;
    obj1[2] = tmp5(tmp6, obj2);
    obj[1] = tmp7(tmp(5548).Card, obj1);
    tmp7Result = tmp7(tmp6, obj);
  }
  children[1] = tmp7Result;
  return closure_10(View, { children });
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { card: null, cardContent: null, cardIcon: null };
createCacheKey = { marginTop: 8, borderColor: ThemesDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { marginEnd: 8 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/chat/native/SettingsChatScreen.tsx");

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
  const node = React.useMemo(() => {
    let obj = route(closure_1_2[18]);
    obj = { sections: null, scrollTarget: null };
    obj = { label: null, settings: null, subLabel: null };
    const intl = route(closure_1_2[13]).intl;
    obj[0] = intl.string(route(closure_1_2[13]).t["9nyle0"]);
    const items = [, , ];
    ({ DISPLAY_MEDIA_LINKS: arr[0], DISPLAY_MEDIA_UPLOADS: arr[1], IMAGE_DESCRIPTIONS: arr[2] } = closure_1_7);
    obj[1] = items;
    const intl2 = route(closure_1_2[13]).intl;
    obj[2] = intl2.string(route(closure_1_2[13]).t.T0rbtM);
    const items1 = [obj, , , , , , , , ];
    obj1 = { label: null, settings: null, subLabel: null };
    const intl3 = route(closure_1_2[13]).intl;
    obj1[0] = intl3.string(route(closure_1_2[13]).t.YTnrbV);
    const items2 = [closure_1_7.SAVE_CAMERA_UPLOADS_TO_DEVICE];
    obj1[1] = items2;
    const intl4 = route(closure_1_2[13]).intl;
    obj1[2] = intl4.string(route(closure_1_2[13]).t.eZmJYE);
    items1[1] = obj1;
    const items3 = [closure_1_7.VIDEO_UPLOAD_QUALITY];
    items1[2] = { settings: items3, subLabel: closure_1_9(closure_1_12, {}) };
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl5 = route(closure_1_2[13]).intl;
    obj3[0] = intl5.string(route(closure_1_2[13]).t.fyG8t2);
    const items4 = [closure_1_7.DATA_SAVING_MODE];
    obj3[1] = items4;
    const intl6 = route(closure_1_2[13]).intl;
    obj3[2] = intl6.string(route(closure_1_2[13]).t["wC0+Ph"]);
    items1[3] = obj3;
    const obj4 = { label: null, settings: null };
    const intl7 = route(closure_1_2[13]).intl;
    obj4[0] = intl7.string(route(closure_1_2[13]).t.PWZOn4);
    const items5 = [closure_1_7.EMBED_AND_LINK_PREVIEWS];
    obj4[1] = items5;
    items1[4] = obj4;
    const obj5 = { label: null, settings: null, subLabel: null };
    const intl8 = route(closure_1_2[13]).intl;
    obj5[0] = intl8.string(route(closure_1_2[13]).t.sMOuuS);
    const items6 = [, ];
    ({ EMOJI_REACTIONS_ON_MESSAGES: arr7[0], CHAT_EMOJI_EMOTICONS: arr7[1] } = closure_1_7);
    obj5[1] = items6;
    const intl9 = route(closure_1_2[13]).intl;
    obj5[2] = intl9.format(route(closure_1_2[13]).t.GejoQK, {
      emojiHook(arg0) {
        return arg0;
      }
    });
    items1[5] = obj5;
    const obj7 = { label: null, settings: null, subLabel: null };
    const intl10 = route(closure_1_2[13]).intl;
    obj7[0] = intl10.string(route(closure_1_2[13]).t["29xPVZ"]);
    const items7 = [closure_1_7.STICKER_AUTOCOMPLETE];
    obj7[1] = items7;
    const intl11 = route(closure_1_2[13]).intl;
    obj7[2] = intl11.string(route(closure_1_2[13]).t["/eVrj8"]);
    items1[6] = obj7;
    const obj8 = { label: null, settings: null };
    const intl12 = route(closure_1_2[13]).intl;
    obj8[0] = intl12.string(route(closure_1_2[13]).t["4NDJgM"]);
    const items8 = [, , ];
    ({ SWIPE_RIGHT_TO_LEFT: arr9[0], DOUBLE_TAP_TO_REACT_ENABLED: arr9[1], DOUBLE_TAP_EMOJI: arr9[2] } = closure_1_7);
    obj8[1] = items8;
    items1[7] = obj8;
    const obj9 = { label: null, settings: null, subLabel: null };
    const intl13 = route(closure_1_2[13]).intl;
    obj9[0] = intl13.string(route(closure_1_2[13]).t.BkuOO6);
    const items9 = [closure_1_7.TEXT_AND_MEDIA_SYNC];
    obj9[1] = items9;
    const intl14 = route(closure_1_2[13]).intl;
    obj9[2] = intl14.string(route(closure_1_2[13]).t.p4IKE9);
    items1[8] = obj9;
    obj[0] = items1;
    let initialSetting;
    if (route != null) {
      const params = route.params;
      if (params != null) {
        initialSetting = params.initialSetting;
      }
    }
    obj[1] = initialSetting;
    return obj.createList(obj);
  }, items);
  return callback(_modDef14167, { node });
};