// discord_app/modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { BottomSheetModal } from "../../../../../_runtime/05398_BottomSheetModal.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { ActionSheet } from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { Linking } from "../../../../lib/native/Linking.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
import { _getDeepLinkUrl } from "../../hooks/useOpenExternalUrlFromGameProfile.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { header: null, headerText: null, buttons: null };
createCacheKey = { gap: require("Themes").space.PX_8, paddingTop: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { gap: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { gap: require("Themes").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx");

export default function GameProfileStoreLinksActionSheet(gameName) {
  let require;
  let websiteButtons;
  ({ websiteButtons, trackAction: require } = gameName);
  let importDefault;
  const tmp = createCacheKey();
  importDefault = _getDeepLinkUrl(Linking.openURL);
  let obj = { children: null };
  obj = { contentContainerStyle: null, children: null };
  obj = { paddingBottom: null };
  obj[0] = useSafeAreaInsets().bottom + Themes.space.PX_16;
  obj[0] = obj;
  const obj1 = { style: tmp.header, children: null };
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
  const tmp2 = _getDeepLinkUrl;
  items1[1] = callback(View, {
    style: tmp.buttons,
    children: websiteButtons.map((url) => {
      let icon;
      let title;
      url = url.url;
      const action = url.action;
      ({ icon, title } = url);
      return outer1_4(outer1_0(outer1_2[12]).Button, {
        icon,
        text: title,
        variant: "secondary",
        size: "md",
        onPress() {
          action(outer2_2[13]).hideActionSheet();
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