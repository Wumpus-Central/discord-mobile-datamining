// discord_app/modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { Fonts } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import { SelectedDismissibleContent } from "../../../../dismissible_content/native/SelectedDismissibleContent.tsx";

let closure_6;
let error;
const require = arg1;
function OneWayToTwoWayNewTag(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const effect = React.useEffect(() => markAsDismissed(outer1_5.UNKNOWN), items);
  const tmp = createCacheKey();
  return callback(markAsDismissed(1297).NewTag, { containerStyle: createCacheKey().newContainer, variant: "text-xs/bold" });
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, header: null, titleContainer: null, title: null, body: null, newContainer: null, reconnectButton: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, margin: 16, padding: 12, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", marginBottom: 4, alignItems: "center" };
createCacheKey[2] = { flexGrow: 1, flexShrink: 1 };
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("Themes").colors.TEXT_DEFAULT, 16));
createCacheKey[3] = {};
const obj1 = {};
const obj2 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.TEXT_DEFAULT, 14));
createCacheKey[4] = obj2;
createCacheKey[5] = { paddingHorizontal: 6, width: "auto", alignSelf: "flex-start", marginBottom: 4 };
createCacheKey[6] = { marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx");

export const OneWayToTwoWayLinkUpsell = function OneWayToTwoWayLinkUpsell(newIndicatorDismissibleContent) {
  let body;
  let img;
  let onPress;
  let title;
  newIndicatorDismissibleContent = newIndicatorDismissibleContent.newIndicatorDismissibleContent;
  ({ title, body, img, onPress } = newIndicatorDismissibleContent);
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  obj = { style: tmp.titleContainer, children: null };
  const items = [newIndicatorDismissibleContent];
  const items1 = [
    callback(SelectedDismissibleContent, {
      contentTypes: items,
      children(visibleContent) {
        let tmp2 = null;
        if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
          const obj = { markAsDismissed: null };
          obj[0] = tmp;
          tmp2 = outer1_6(outer1_9, obj);
        }
        return tmp2;
      }
    }),
    callback(newIndicatorDismissibleContent(4340).Text, { style: tmp.title, variant: "text-md/semibold", children: title })
  ];
  obj[1] = items1;
  const items2 = [callback2(View, obj), img];
  obj[1] = items2;
  const items3 = [callback2(View, obj), callback(newIndicatorDismissibleContent(4340).Text, { style: tmp.body, variant: "text-sm/medium", children: body }), ];
  const obj4 = { style: tmp.reconnectButton, children: null };
  const obj5 = { text: null, onPress: null };
  const intl = newIndicatorDismissibleContent(1236).intl;
  obj5[0] = intl.string(newIndicatorDismissibleContent(1236).t.vD60Pv);
  obj5[1] = onPress;
  obj4[1] = callback(newIndicatorDismissibleContent(4754).Button, obj5);
  items3[2] = callback(View, obj4);
  obj[1] = items3;
  return callback2(View, obj);
};