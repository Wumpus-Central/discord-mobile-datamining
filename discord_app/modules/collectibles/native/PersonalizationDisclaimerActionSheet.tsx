// === Module 14973: PersonalizationDisclaimerActionSheet ===

// Module 14973 (PersonalizationDisclaimerActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import ButtonGroup from "ButtonGroup" /* 6687 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 6693 */;
import Background from "Background" /* 6950 */;
import noop from "noop" /* 19 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_8, alignSelf: "center", textAlign: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default function PersonalizationDisclaimerActionSheet() {
  const tmp = callback3();
  const callback = React.useCallback(() => {
    const obj = callback(4090);
    obj.openURL(callback(1993).getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
  }, []);
  let obj = { variant: "heading-md/medium", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.header, children: null };
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
    return callback(4342).hideActionSheet();
  };
  items1[1] = callback(Button.Button, obj3);
  obj[0] = items1;
  items[1] = callback2(ButtonGroup.ButtonGroup, obj);
  obj[1] = items;
  return callback2(Background.BottomSheet, obj);
};