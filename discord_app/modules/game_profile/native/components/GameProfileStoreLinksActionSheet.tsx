// === Module 8710: GameProfileStoreLinksActionSheet ===

// Module 8710 (GameProfileStoreLinksActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import _modDef4255 from "module_4255" /* 4255 */;
import Text from "Text" /* 4556 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import _getDeepLinkUrlDefault from "_getDeepLinkUrl" /* 8683 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { header: null, headerText: null, buttons: null };
createCacheKey = { gap: ThemesDefault.space.PX_8, paddingTop: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { gap: ThemesDefault.space.PX_12 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { gap: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx");

export default function GameProfileStoreLinksActionSheet(gameName) {
  ({ websiteButtons, trackAction: require } = gameName);
  importDefault = undefined;
  const tmp = callback3();
  importDefault = _getDeepLinkUrlDefault(_modDef4255.openURL);
  let obj = { children: null };
  obj = { contentContainerStyle: null, children: null };
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom + ThemesDefault.space.PX_16 };
  obj[0] = obj;
  obj1 = { style: tmp.header, children: null };
  const obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
  const intl = getSystemLocale.intl;
  obj2[3] = intl.string(getSystemLocale.t["/4gj6r"]);
  const items = [callback(Text.Text, obj2), ];
  const obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp.headerText, children: null };
  const intl2 = getSystemLocale.intl;
  obj3[3] = intl2.format(getSystemLocale.t["0acM2Y"], { gameName: gameName.gameName });
  items[1] = callback(Text.Text, obj3);
  obj1[1] = items;
  const items1 = [callback2(View, obj1), ];
  const tmp2 = _getDeepLinkUrlDefault;
  items1[1] = callback(View, {
    style: tmp.buttons,
    children: websiteButtons.map((url) => {
      url = url.url;
      const action = url.action;
      ({ icon, title } = url);
      return closure_1_4(closure_1_0(closure_1_2[12]).Button, {
        icon,
        text: title,
        variant: "secondary",
        size: "md",
        onPress() {
          action(closure_2_2[13]).hideActionSheet();
          url(action);
          action(url);
        }
      }, url);
    })
  });
  obj[1] = items1;
  obj[0] = callback2(BottomSheetModal.BottomSheetScrollView, obj);
  return callback(ActionSheet.ActionSheet, obj);
};
export const ACTION_SHEET_KEY = "game-profile-store-links";