// === Module 14810: OneWayToTwoWayNewTag ===

// Module 14810 (OneWayToTwoWayNewTag)
import ThemesDefault from "Themes" /* 709 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10643 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { Fonts } from "ME" /* 673 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "createTextStyle" /* 5470 */;

const require = arg1;
function OneWayToTwoWayNewTag(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const effect = React.useEffect(() => markAsDismissed(closure_1_5.UNKNOWN), items);
  const tmp = callback3();
  return callback(markAsDismissed(1296).NewTag, { containerStyle: callback3().newContainer, variant: "text-xs/bold" });
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, header: null, titleContainer: null, title: null, body: null, newContainer: null, reconnectButton: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, margin: 16, padding: 12, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", marginBottom: 4, alignItems: "center" };
createCacheKey[2] = { flexGrow: 1, flexShrink: 1 };
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.TEXT_DEFAULT, 16));
createCacheKey[3] = {};
const obj1 = {};
const obj2 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_DEFAULT, 14));
createCacheKey[4] = obj2;
createCacheKey[5] = { paddingHorizontal: 6, width: "auto", alignSelf: "flex-start", marginBottom: 4 };
createCacheKey[6] = { marginTop: 8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const importDefaultResult1 = importDefaultResult;
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx");

export const OneWayToTwoWayLinkUpsell = function OneWayToTwoWayLinkUpsell(newIndicatorDismissibleContent) {
  newIndicatorDismissibleContent = newIndicatorDismissibleContent.newIndicatorDismissibleContent;
  ({ title, body, img, onPress } = newIndicatorDismissibleContent);
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  obj = { style: tmp.titleContainer, children: null };
  const items = [newIndicatorDismissibleContent];
  const items1 = [
    callback(SelectedDismissibleContentDefault, {
      contentTypes: items,
      children(visibleContent) {
        let tmp2 = null;
        if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
          const obj = { markAsDismissed: null };
          obj[0] = tmp;
          tmp2 = closure_1_6(closure_1_9, obj);
        }
        return tmp2;
      }
    }),
    callback(newIndicatorDismissibleContent(4474).Text, { style: tmp.title, variant: "text-md/semibold", children: title })
  ];
  obj[1] = items1;
  const items2 = [callback2(View, obj), img];
  obj[1] = items2;
  const items3 = [callback2(View, obj), callback(newIndicatorDismissibleContent(4474).Text, { style: tmp.body, variant: "text-sm/medium", children: body }), ];
  const obj4 = { style: tmp.reconnectButton, children: null };
  const obj5 = { text: null, onPress: null };
  const intl = newIndicatorDismissibleContent(1233).intl;
  obj5[0] = intl.string(newIndicatorDismissibleContent(1233).t.vD60Pv);
  obj5[1] = onPress;
  obj4[1] = callback(newIndicatorDismissibleContent(4929).Button, obj5);
  items3[2] = callback(View, obj4);
  obj[1] = items3;
  return callback2(View, obj);
};