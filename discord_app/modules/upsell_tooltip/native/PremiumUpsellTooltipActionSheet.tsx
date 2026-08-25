// discord_app/modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button2 from "../../../design/components/Button/native/Button.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, img: null, header: null, title: null, description: null, nitroWheel: null, buttonContainer: null };
createCacheKey = { justifyContent: "center", paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", width: 231, height: 231, borderRadius: ThemesDefault.radii.sm, marginBottom: 16 };
createCacheKey[2] = { flexDirection: "row", justifyContent: "center" };
createCacheKey[3] = { textAlign: "center", marginBottom: 8 };
let obj1 = { alignSelf: "center", width: 231, height: 231, borderRadius: ThemesDefault.radii.sm, marginBottom: 16 };
createCacheKey[4] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_24 };
const obj2 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[5] = { tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
const obj3 = { tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
createCacheKey[6] = { gap: ThemesDefault.space.PX_8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj4 = { gap: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default function PremiumUpsellTooltipActionSheet(arg0) {
  ({ imageSource, dismissibleContent: require, primaryButtonIcon, secondaryButtonText, onDismiss: importDefault, onPrimaryButtonPress: dependencyMap, onSecondaryButtonPress: closure_3 } = arg0);
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  let tmp = callback();
  let obj = { startExpanded: true };
  const merged = Object.assign(backdropProps);
  obj.onDismiss = function handleDismiss(dismissAction) {
    let tmp = null != dismissAction;
    if (tmp) {
      tmp = dismissAction !== closure_1_5.DISMISS;
    }
    if (!tmp) {
      if (closure_1 != null) {
        tmp3();
      }
    }
    let obj = closure_1_0(closure_1_2[6]);
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
  obj1 = { style: tmp.header, children: null };
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
      closure_1_1(closure_1_2[11]).hideActionSheet();
      const PRIMARY = closure_1_5.PRIMARY;
      if (!tmp4) {
        if (callback != null) {
          callback();
        }
      }
      const obj = closure_1_1(closure_1_2[11]);
      const tmp2 = closure_1_2;
      tmp4 = null != PRIMARY && PRIMARY !== closure_1_5.DISMISS;
      const result = closure_1_0(closure_1_2[6]).UNSAFE_markDismissibleContentAsDismissed(closure_0, { forceTrack: true, dismissAction: PRIMARY });
    },
    icon: null,
    size: "lg"
  };
  let primaryButtonIconResult;
  if (primaryButtonIcon != null) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  obj5[3] = primaryButtonIconResult;
  const items4 = [closure_6(Button2.Button, obj5), ];
  tmp2Result = null;
  if (null != secondaryButtonText) {
    const obj6 = { variant: "secondary", text: null, onPress: null, size: "lg" };
    obj6[1] = secondaryButtonText;
    obj6[2] = function onPress() {
      if (closure_3 != null) {
        tmp();
      }
      closure_1_1(closure_1_2[11]).hideActionSheet();
      const DISMISS = closure_1_5.DISMISS;
      if (!tmp5) {
        if (callback != null) {
          callback();
        }
      }
      const obj = closure_1_1(closure_1_2[11]);
      const tmp3 = closure_1_2;
      tmp5 = null != DISMISS && DISMISS !== closure_1_5.DISMISS;
      const result = closure_1_0(closure_1_2[6]).UNSAFE_markDismissibleContentAsDismissed(closure_0, { forceTrack: true, dismissAction: DISMISS });
    };
    tmp2Result = tmp2(tmp3(4815).Button, obj6);
  }
  items4[1] = tmp2Result;
  obj4[1] = items4;
  items1[3] = closure_7(closure_4, obj4);
  obj[1] = items1;
  obj.children = closure_7(closure_4, obj);
  return closure_6(Background.BottomSheet, obj);
};