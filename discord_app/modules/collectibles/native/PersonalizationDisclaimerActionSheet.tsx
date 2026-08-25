// discord_app/modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import ButtonGroup from "../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import LinkExternalSmallIcon from "../../../design/components/Icon/native/redesign/generated/LinkExternalSmallIcon.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { HelpdeskArticles } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, header: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_8, alignSelf: "center", textAlign: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingVertical: ThemesDefault.space.PX_8, alignSelf: "center", textAlign: "center" };
const result = require("set").fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default function PersonalizationDisclaimerActionSheet() {
  const tmp = callback3();
  const callback = React.useCallback(() => {
    const obj = callback(4094);
    obj.openURL(callback(1995).getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
  }, []);
  let obj = { contentStyles: tmp.container, children: null };
  obj = { variant: "heading-md/medium", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.header, children: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.euks4U);
  const items = [callback(Text.Text, obj), ];
  obj = { children: null };
  obj1 = { size: "lg", text: null, onPress: null, icon: null, iconPosition: "end" };
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(getSystemLocale.t.hvVgAZ);
  obj1[2] = callback;
  obj1[3] = callback(LinkExternalSmallIcon.LinkExternalSmallIcon, { color: ThemesDefault.colors.WHITE });
  const items1 = [callback(Button.Button, obj1), ];
  const obj3 = { variant: "tertiary", size: "lg", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj3[2] = intl3.string(getSystemLocale.t.WAI6xu);
  obj3[3] = function onPress() {
    return callback(4347).hideActionSheet();
  };
  items1[1] = callback(Button.Button, obj3);
  obj[0] = items1;
  items[1] = callback2(ButtonGroup.ButtonGroup, obj);
  obj[1] = items;
  return callback2(Background.BottomSheet, obj);
};