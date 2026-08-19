// discord_app/modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SelectedDismissibleContentDefault from "../../../../dismissible_content/native/SelectedDismissibleContent.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { Fonts } from "../../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../../../rebrand/native/TextStyles.tsx";

const require = fn;
function OneWayToTwoWayNewTag(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const effect = React.useEffect(() => markAsDismissed(ContentDismissActionType.UNKNOWN), items);
  const tmp = callback3();
  return callback(markAsDismissed(1297).NewTag, { containerStyle: callback3().newContainer, variant: "text-xs/bold" });
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, margin: 16, padding: 12, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", marginBottom: 4, alignItems: "center" };
createCacheKey[2] = { flexGrow: 1, flexShrink: 1 };
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.TEXT_DEFAULT, 16));
createCacheKey[3] = {};
const obj2 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_DEFAULT, 14));
createCacheKey[4] = obj2;
createCacheKey[5] = { paddingHorizontal: 6, width: "auto", alignSelf: "flex-start", marginBottom: 4 };
createCacheKey[6] = { marginTop: 8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const importDefaultResult1 = importDefaultResult;
const result = require("obj132").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx");

export const OneWayToTwoWayLinkUpsell = function OneWayToTwoWayLinkUpsell(newIndicatorDismissibleContent) {
  newIndicatorDismissibleContent = newIndicatorDismissibleContent.newIndicatorDismissibleContent;
  ({ title, body, img, onPress } = newIndicatorDismissibleContent);
  const tmp = callback3();
  let obj = { style: tmp.titleContainer, children: null };
  const items = [newIndicatorDismissibleContent];
  const items1 = [
    callback(SelectedDismissibleContentDefault, {
      contentTypes: items,
      children(visibleContent) {
        let tmp2 = null;
        if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
          const obj = { markAsDismissed: null };
          obj[0] = tmp;
          tmp2 = closure_1_6(OneWayToTwoWayNewTag, obj);
        }
        return tmp2;
      }
    }),
    callback(newIndicatorDismissibleContent(4734).Text, { style: tmp.title, variant: "text-md/semibold", children: title })
  ];
  obj[1] = items1;
  const items2 = [callback2(View, obj), img];
  obj[1] = items2;
  const items3 = [callback2(View, obj), callback(newIndicatorDismissibleContent(4734).Text, { style: tmp.body, variant: "text-sm/medium", children: body }), ];
  const obj4 = { style: tmp.reconnectButton, children: null };
  const obj5 = { text: null, onPress: null };
  const intl = newIndicatorDismissibleContent(1236).intl;
  obj5[0] = intl.string(newIndicatorDismissibleContent(1236).t.vD60Pv);
  obj5[1] = onPress;
  obj4[1] = callback(newIndicatorDismissibleContent(4745).Button, obj5);
  items3[2] = callback(View, obj4);
  obj[1] = items3;
  return callback2(View, obj);
};