// discord_app/modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { Background } from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../design/void/native.tsx";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, img: null, header: null, title: null, description: null, nitroWheel: null, buttonContainer: null };
createCacheKey = { justifyContent: "center", paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", width: 231, height: 231, borderRadius: require("Themes").radii.sm, marginBottom: 16 };
createCacheKey[2] = { flexDirection: "row", justifyContent: "center" };
createCacheKey[3] = { textAlign: "center", marginBottom: 8 };
let obj1 = { alignSelf: "center", width: 231, height: 231, borderRadius: require("Themes").radii.sm, marginBottom: 16 };
createCacheKey[4] = { textAlign: "center", marginBottom: require("Themes").space.PX_24 };
const obj2 = { textAlign: "center", marginBottom: require("Themes").space.PX_24 };
createCacheKey[5] = { tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
const obj3 = { tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
createCacheKey[6] = { gap: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { gap: require("Themes").space.PX_8 };
let result = require("ContentDismissActionType").fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default function PremiumUpsellTooltipActionSheet(arg0) {
  let backdropProps;
  let closure_3;
  let dependencyMap;
  let description;
  let descriptionStyle;
  let imageSource;
  let imageStyle;
  let importDefault;
  let primaryButtonIcon;
  let primaryButtonText;
  let require;
  let secondaryButtonText;
  let title;
  ({ imageSource, dismissibleContent: require, primaryButtonIcon, secondaryButtonText, onDismiss: importDefault, onPrimaryButtonPress: dependencyMap, onSecondaryButtonPress: closure_3 } = arg0);
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  let tmp = createCacheKey();
  let obj = { startExpanded: true };
  const merged = Object.assign(backdropProps);
  obj.onDismiss = function handleDismiss(dismissAction) {
    let tmp = null != dismissAction;
    if (tmp) {
      tmp = dismissAction !== outer1_5.DISMISS;
    }
    if (!tmp) {
      if (closure_1 != null) {
        tmp3();
      }
    }
    let obj = outer1_0(outer1_2[6]);
    obj = { forceTrack: true, dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_0, obj);
  };
  obj = { style: tmp.container, children: null };
  let tmp2Result = null;
  if (null != imageSource) {
    obj = { style: null, source: null };
    const items = [tmp.img, imageStyle];
    obj[0] = items;
    obj[1] = imageSource;
    tmp2Result = tmp2(closure_3, obj);
  }
  const items1 = [tmp2Result, , , ];
  const obj1 = { style: tmp.header, children: null };
  const items2 = [closure_6(Button.NitroWheel, { style: tmp.nitroWheel }), closure_6(Text.Text, { variant: "heading-xl/bold", style: tmp.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title })];
  obj1[1] = items2;
  items1[1] = closure_7(closure_4, obj1);
  const items3 = [tmp.description, descriptionStyle];
  items1[2] = closure_6(Text.Text, { style: items3, variant: "text-md/medium", color: "text-default", children: description });
  const obj4 = { style: tmp.buttonContainer, children: null };
  const obj5 = {
    variant: "active",
    text: primaryButtonText,
    onPress() {
      callback2();
      outer1_1(outer1_2[11]).hideActionSheet();
      const PRIMARY = outer1_5.PRIMARY;
      if (!tmp4) {
        if (callback != null) {
          callback();
        }
      }
      const obj = outer1_1(outer1_2[11]);
      const tmp2 = outer1_2;
      tmp4 = null != PRIMARY && PRIMARY !== outer1_5.DISMISS;
      const result = outer1_0(outer1_2[6]).UNSAFE_markDismissibleContentAsDismissed(closure_0, { forceTrack: true, dismissAction: PRIMARY });
    },
    icon: null,
    size: "lg"
  };
  let primaryButtonIconResult;
  if (primaryButtonIcon != null) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  obj5[3] = primaryButtonIconResult;
  const items4 = [closure_6(Button.Button, obj5), ];
  tmp2Result = null;
  if (null != secondaryButtonText) {
    const obj6 = { variant: "secondary", text: null, onPress: null, size: "lg" };
    obj6[1] = secondaryButtonText;
    obj6[2] = function onPress() {
      if (closure_3 != null) {
        tmp();
      }
      outer1_1(outer1_2[11]).hideActionSheet();
      const DISMISS = outer1_5.DISMISS;
      if (!tmp5) {
        if (callback != null) {
          callback();
        }
      }
      const obj = outer1_1(outer1_2[11]);
      const tmp3 = outer1_2;
      tmp5 = null != DISMISS && DISMISS !== outer1_5.DISMISS;
      const result = outer1_0(outer1_2[6]).UNSAFE_markDismissibleContentAsDismissed(closure_0, { forceTrack: true, dismissAction: DISMISS });
    };
    tmp2Result = tmp2(tmp3(4714).Button, obj6);
  }
  items4[1] = tmp2Result;
  obj4[1] = items4;
  items1[3] = closure_7(closure_4, obj4);
  obj[1] = items1;
  obj.children = closure_7(closure_4, obj);
  return closure_6(Background.BottomSheet, obj);
};