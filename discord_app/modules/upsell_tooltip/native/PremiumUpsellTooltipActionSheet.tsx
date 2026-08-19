// === Module 9339: PremiumUpsellTooltipActionSheet ===

// Module 9339 (PremiumUpsellTooltipActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4196 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import Text from "Text" /* 4734 */;
import Button2 from "Button" /* 4745 */;
import Background from "Background" /* 6950 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { justifyContent: "center", paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", width: 231, height: 231, borderRadius: ThemesDefault.radii.sm, marginBottom: 16 };
createCacheKey[2] = { flexDirection: "row", justifyContent: "center" };
createCacheKey[3] = { textAlign: "center", marginBottom: 8 };
createCacheKey[4] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[5] = { tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
createCacheKey[6] = { gap: ThemesDefault.space.PX_8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default function PremiumUpsellTooltipActionSheet(arg0) {
  ({ imageSource, dismissibleContent: require, primaryButtonIcon, secondaryButtonText, onDismiss: importDefault, onPrimaryButtonPress: dependencyMap, onSecondaryButtonPress: closure_3 } = arg0);
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  let tmp = callback();
  let obj = { startExpanded: true };
  const merged = Object.assign(backdropProps);
  obj.onDismiss = function handleDismiss(dismissAction) {
    let tmp = null != dismissAction;
    if (tmp) {
      tmp = dismissAction !== ContentDismissActionType.DISMISS;
    }
    if (!tmp) {
      if (closure_1 != null) {
        tmp3();
      }
    }
    const obj = { forceTrack: true, dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_0, obj);
  };
  obj = { style: tmp.container, children: null };
  let tmp2Result = null;
  if (null != imageSource) {
    obj = { style: null, source: null };
    const items = [tmp.img, imageStyle];
    obj[0] = items;
    obj[1] = imageSource;
    tmp2Result = callback(closure_3, obj);
  }
  const items1 = [tmp2Result, , , ];
  obj1 = { style: tmp.header, children: null };
  const items2 = [callback(Button.NitroWheel, { style: tmp.nitroWheel }), callback(Text.Text, { variant: "heading-xl/bold", style: tmp.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title })];
  obj1[1] = items2;
  items1[1] = callback2(closure_4, obj1);
  const items3 = [tmp.description, descriptionStyle];
  items1[2] = callback(Text.Text, { style: items3, variant: "text-md/medium", color: "text-default", children: description });
  const obj4 = { style: tmp.buttonContainer, children: null };
  const obj5 = {
    variant: "active",
    text: primaryButtonText,
    onPress() {
      callback2();
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
      const PRIMARY = ContentDismissActionType.PRIMARY;
      if (!tmp4) {
        if (callback != null) {
          callback();
        }
      }
      tmp4 = null != PRIMARY && PRIMARY !== ContentDismissActionType.DISMISS;
      const result = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(closure_0, { forceTrack: true, dismissAction: PRIMARY });
    },
    icon: null,
    size: "lg"
  };
  let primaryButtonIconResult;
  if (primaryButtonIcon != null) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  obj5[3] = primaryButtonIconResult;
  const items4 = [callback(Button2.Button, obj5), ];
  tmp2Result = null;
  if (null != secondaryButtonText) {
    const obj6 = { variant: "secondary", text: null, onPress: null, size: "lg" };
    obj6[1] = secondaryButtonText;
    obj6[2] = function onPress() {
      if (closure_3 != null) {
        tmp();
      }
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
      const DISMISS = ContentDismissActionType.DISMISS;
      if (!tmp5) {
        if (callback != null) {
          callback();
        }
      }
      tmp5 = null != DISMISS && DISMISS !== ContentDismissActionType.DISMISS;
      const result = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(closure_0, { forceTrack: true, dismissAction: DISMISS });
    };
    tmp2Result = callback(Button2.Button, obj6);
  }
  items4[1] = tmp2Result;
  obj4[1] = items4;
  items1[3] = callback2(closure_4, obj4);
  obj[1] = items1;
  obj.children = callback2(closure_4, obj);
  return callback(Background.BottomSheet, obj);
};