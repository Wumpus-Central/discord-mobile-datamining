// === Module 18037: WaterwheelsDiscoverHeader ===

// Module 18037 (WaterwheelsDiscoverHeader)
import nativeDefault from "native" /* 575 */;
import _modDef2655 from "module_2655" /* 2655 */;
import HapticUtils from "HapticUtils" /* 5259 */;
import useGameRecordsDefault from "useGameRecords" /* 14568 */;
import openWaterwheelsInterestPickerDefault from "openWaterwheelsInterestPicker" /* 18038 */;
import InterestGameCoverDefault from "InterestGameCover" /* 18054 */;
import noop from "module_19" /* 19 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 8924 */;

const require = globalThis.__r;

require = fn;
function openPicker() {
  const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
  openWaterwheelsInterestPickerDefault(true);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18030);
const THUMBNAIL_WIDTH = InterestGamePickerConstants.THUMBNAIL_WIDTH;
({ FOOTER_THUMBNAIL_GAP, SELECTED_BORDER_WIDTH, THUMBNAIL_ASPECT_RATIO } = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5043);
let obj2 = { header: { height: nativeDefault.space.PX_64, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE }, title: null, titleText: null, picks: null, cover: null, overlappingCover: null, overflow: null };
let obj3 = { height: nativeDefault.space.PX_64, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flexShrink: 1 };
obj2.titleText = { flexShrink: 1 };
const obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flexShrink: 1 };
obj2.picks = { minWidth: nativeDefault.space.PX_48, minHeight: nativeDefault.space.PX_48, flexDirection: "row", alignItems: "center", justifyContent: "center" };
let size = { width: THUMBNAIL_WIDTH, height: THUMBNAIL_WIDTH / THUMBNAIL_ASPECT_RATIO, borderRadius: nativeDefault.radii.xs, borderWidth: SELECTED_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
obj2.cover = size;
obj2.overlappingCover = { marginLeft: FOOTER_THUMBNAIL_GAP };
let obj5 = { minWidth: nativeDefault.space.PX_48, minHeight: nativeDefault.space.PX_48, flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj2.overflow = { marginLeft: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverHeader.tsx");

export default function WaterwheelsDiscoverHeader() {
  const tmp = closure_9();
  _require = tmp;
  items = [InterestPickerSessionStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => picks.getPicks());
  let obj = require("initialize");
  const substr = useGameRecordsDefault(stateFromStoresArray).slice(0, 3);
  const diff = stateFromStoresArray.length - substr.length;
  const obj2 = { style: tmp.header, children: null };
  const obj3 = { style: tmp.title, children: null };
  const arr3 = useGameRecordsDefault(stateFromStoresArray);
  const items1 = [closure_7(require("CompassIcon").CompassIcon, { size: "refresh_sm", color: nativeDefault.colors.ICON_STRONG }), ];
  const obj5 = { variant: "heading-md/semibold", color: "text-strong", style: tmp.titleText, lineClamp: 1, children: null };
  const intl = require("util").intl;
  obj5.children = intl.string(_modDef2655.v010oN);
  items1[1] = closure_7(require("Text/Text").Heading, obj5);
  obj3.children = items1;
  const items2 = [closure_8(closure_4, obj3), ];
  if (0 === stateFromStoresArray.length) {
    const obj6 = { variant: "secondary", size: "sm", text: null, icon: null, onPress: null };
    const intl3 = tmp2(1112).intl;
    obj6.text = intl3.string(_modDef2655.SCFT8N);
    obj6.icon = closure_7(tmp2(7756).GameControllerIcon, { size: "sm" });
    obj6.onPress = openPicker;
    let tmp8Result = closure_7(tmp2(5641).Button, obj6);
  } else {
    const obj7 = { style: tmp.picks, accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, children: null };
    const intl4 = tmp2(1112).intl;
    obj7.accessibilityLabel = intl4.string(_modDef2655["788GGP"]);
    const obj8 = { text: null };
    const intl5 = tmp2(1112).intl;
    const obj9 = { count: stateFromStoresArray.length };
    const items3 = [intl5.formatToPlainString(_modDef2655.tQPcpe, obj9)];
    HermesBuiltin.arraySpread(substr.map((name) => name.name), 1);
    obj8.text = items3.join(", ");
    obj7.accessibilityValue = obj8;
    obj7.onPress = openPicker;
    const obj10 = { style: tmp.picks, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", pointerEvents: "none", children: null };
    const items4 = [
      substr.map((game, index) => {
          items = [closure_0.cover, ];
          let overlappingCover = index > 0;
          if (overlappingCover) {
            overlappingCover = closure_0.overlappingCover;
          }
          const obj = { style: items, children: metroImportDefault(InterestGameCoverDefault, { game, width: THUMBNAIL_WIDTH, compact: true }) };
          items[1] = overlappingCover;
          return metroImportDefault(React4, obj, game.id);
        }),

    ];
    let tmp8Result2 = diff > 0;
    if (tmp8Result2) {
      const obj11 = { variant: "body-sm/semibold", color: "text-strong", style: tmp.overflow, children: null };
      const intl2 = tmp2(1112).intl;
      const obj12 = { count: diff };
      obj11.children = intl2.formatToPlainString(_modDef2655["OxfP+s"], obj12);
      tmp8Result2 = closure_7(tmp2(5634).Text, obj11);
    }
    items4[1] = tmp8Result2;
    obj10.children = items4;
    obj7.children = closure_8(closure_4, obj10);
    tmp8Result = closure_7(closure_3, obj7);
  }
  items2[1] = tmp8Result;
  obj2.children = items2;
  return closure_8(closure_4, obj2);
};