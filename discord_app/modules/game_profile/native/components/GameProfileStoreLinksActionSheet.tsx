// discord_app/modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef4190 from "../../../../lib/native/Linking.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import BottomSheetModal from "../../../../../_runtime/05624_BottomSheetModal.js";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import _getDeepLinkUrlDefault from "../../hooks/useOpenExternalUrlFromGameProfile.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { header: null, headerText: null, buttons: null };
createCacheKey = {
  gap: ThemesDefault.space.PX_8,
  paddingTop: ThemesDefault.space.PX_8,
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingBottom: ThemesDefault.space.PX_24,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { gap: ThemesDefault.space.PX_12 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { gap: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting(
  "modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx",
);

export default function GameProfileStoreLinksActionSheet(gameName) {
  ({ websiteButtons, trackAction: require } = gameName);
  importDefault = undefined;
  const tmp = callback3();
  importDefault = _getDeepLinkUrlDefault(_modDef4190.openURL);
  let obj = { children: null };
  obj = { contentContainerStyle: null, children: null };
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom + ThemesDefault.space.PX_16 };
  obj[0] = obj;
  obj1 = { style: tmp.header, children: null };
  const obj2 = {
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.headerText,
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj2[3] = intl.string(getSystemLocale.t["/4gj6r"]);
  const items = [callback(Text.Text, obj2)];
  const obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp.headerText, children: null };
  const intl2 = getSystemLocale.intl;
  obj3[3] = intl2.format(getSystemLocale.t["0acM2Y"], { gameName: gameName.gameName });
  items[1] = callback(Text.Text, obj3);
  obj1[1] = items;
  const items1 = [callback2(View, obj1)];
  const tmp2 = _getDeepLinkUrlDefault;
  items1[1] = callback(View, {
    style: tmp.buttons,
    children: websiteButtons.map((url) => {
      url = url.url;
      const action = url.action;
      ({ icon, title } = url);
      return closure_1_4(
        closure_1_0(closure_1_2[12]).Button,
        {
          icon,
          text: title,
          variant: "secondary",
          size: "md",
          onPress() {
            action(closure_2_2[13]).hideActionSheet();
            url(action);
            action(url);
          },
        },
        url,
      );
    }),
  });
  obj[1] = items1;
  obj[0] = callback2(BottomSheetModal.BottomSheetScrollView, obj);
  return callback(ActionSheet.ActionSheet, obj);
}
export const ACTION_SHEET_KEY = "game-profile-store-links";
