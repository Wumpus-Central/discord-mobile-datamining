// === Module 11398: PremiumUpsellTooltipActionSheet ===

// Module 11398 (PremiumUpsellTooltipActionSheet)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4542 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import Text_Text from "Text/Text" /* 4718 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7346 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { justifyContent: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, img: null, header: null, title: null, description: null, nitroWheel: null, buttonContainer: null };
let size = { alignSelf: "center", width: 231, height: 231, borderRadius: nativeDefault.radii.sm, marginBottom: 16 };
obj2.img = size;
obj2.header = { flexDirection: "row", justifyContent: "center" };
obj2.title = { textAlign: "center", marginBottom: 8 };
let obj3 = { justifyContent: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
const size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
obj2.nitroWheel = size1;
let obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
obj2.buttonContainer = { gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default function PremiumUpsellTooltipActionSheet(arg0) {
  ({ imageSource, dismissibleContent: require, primaryButtonIcon, secondaryButtonText, onDismiss: importDefault, onPrimaryButtonPress: dependencyMap, onSecondaryButtonPress: closure_3 } = arg0);
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  let tmp = closure_8();
  let obj = { startExpanded: true };
  const merged = Object.assign(backdropProps);
  obj.onDismiss = function handleDismiss(dismissAction) {
    let tmp = null != dismissAction;
    if (tmp) {
      tmp = dismissAction !== ContentDismissActionType.DISMISS;
    }
    if (!tmp) {
      if (importDefault != null) {
        tmp3();
      }
    }
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_1_0, { forceTrack: true, dismissAction });
    const obj2 = { forceTrack: true, dismissAction };
  };
  let obj2 = { style: tmp.container, children: null };
  let tmp2Result = null;
  if (null != imageSource) {
    const obj3 = { style: null, source: null };
    const items = [tmp.img, imageStyle];
    obj3.style = items;
    obj3.source = imageSource;
    tmp2Result = closure_6(closure_3, obj3);
  }
  const items1 = [tmp2Result, , , ];
  const obj4 = { style: tmp.header, children: null };
  const items2 = [closure_6(native.NitroWheel, { style: tmp.nitroWheel }), closure_6(Text_Text.Text, { variant: "heading-xl/bold", style: tmp.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title })];
  obj4.children = items2;
  items1[1] = closure_7(closure_4, obj4);
  const obj7 = { style: null, variant: "text-md/medium", color: "text-default", children: description };
  const items3 = [tmp.description, descriptionStyle];
  obj7.style = items3;
  items1[2] = closure_6(Text_Text.Text, obj7);
  const obj8 = { style: tmp.buttonContainer, children: null };
  const obj9 = {
    variant: "active",
    text: primaryButtonText,
    onPress() {
      dependencyMap();
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const PRIMARY = ContentDismissActionType.PRIMARY;
      if (!tmp4) {
        if (closure_1_1 != null) {
          closure_1_1();
        }
      }
      tmp4 = null != PRIMARY && PRIMARY !== ContentDismissActionType.DISMISS;
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_1_0, { forceTrack: true, dismissAction: PRIMARY });
    },
    icon: null,
    size: "lg"
  };
  let primaryButtonIconResult;
  if (primaryButtonIcon != null) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  obj9.icon = primaryButtonIconResult;
  const items4 = [closure_6(components_Button_Button.Button, obj9), ];
  let tmp2Result2 = null;
  if (null != secondaryButtonText) {
    const obj10 = {
      variant: "secondary",
      text: secondaryButtonText,
      onPress() {
          if (closure_1_3 != null) {
            tmp();
          }
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const DISMISS = ContentDismissActionType.DISMISS;
          if (!tmp5) {
            if (closure_1_1 != null) {
              closure_1_1();
            }
          }
          tmp5 = null != DISMISS && DISMISS !== ContentDismissActionType.DISMISS;
          const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_1_0, { forceTrack: true, dismissAction: DISMISS });
        },
      size: "lg"
    };
    tmp2Result2 = closure_6(components_Button_Button.Button, obj10);
  }
  items4[1] = tmp2Result2;
  obj8.children = items4;
  items1[3] = closure_7(closure_4, obj8);
  obj2.children = items1;
  obj.children = closure_7(closure_4, obj2);
  return closure_6(Sheet_BottomSheet.BottomSheet, obj);
};