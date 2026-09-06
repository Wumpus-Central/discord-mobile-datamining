// discord_app/modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  img: null,
  header: null,
  title: null,
  description: null,
  nitroWheel: null,
  buttonContainer: null,
};
createStyles = {
  justifyContent: "center",
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.container = createStyles;
let size = { alignSelf: "center", width: 231, height: 231, borderRadius: nativeDefault.radii.sm, marginBottom: 16 };
createStyles.img = size;
createStyles.header = { flexDirection: "row", justifyContent: "center" };
createStyles.title = { textAlign: "center", marginBottom: 8 };
createStyles.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
const size1 = {
  tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  width: 32,
  height: 32,
  marginTop: -2,
  marginLeft: -16,
};
createStyles.nitroWheel = size1;
let obj1 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
createStyles.buttonContainer = { gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default function PremiumUpsellTooltipActionSheet(arg0) {
  ({
    imageSource,
    dismissibleContent: require,
    primaryButtonIcon,
    secondaryButtonText,
    onDismiss: importDefault,
    onPrimaryButtonPress: dependencyMap,
    onSecondaryButtonPress: closure_3,
  } = arg0);
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
    const obj = { forceTrack: true, dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_1_0, obj);
  };
  obj = { style: tmp.container, children: null };
  let tmp2Result = null;
  if (null != imageSource) {
    obj = { style: null, source: null };
    const items = [tmp.img, imageStyle];
    obj.style = items;
    obj.source = imageSource;
    tmp2Result = tmp2(closure_3, obj);
  }
  const items1 = [tmp2Result, , ,];
  const obj1 = { style: tmp.header, children: null };
  const items2 = [
    closure_6(native.NitroWheel, { style: tmp.nitroWheel }),
    closure_6(Text_Text.Text, {
      variant: "heading-xl/bold",
      style: tmp.title,
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: title,
    }),
  ];
  obj1.children = items2;
  items1[1] = closure_7(closure_4, obj1);
  const obj4 = { style: null, variant: "text-md/medium", color: "text-default", children: description };
  const items3 = [tmp.description, descriptionStyle];
  obj4.style = items3;
  items1[2] = closure_6(Text_Text.Text, obj4);
  const obj5 = { style: tmp.buttonContainer, children: null };
  const obj6 = {
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
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_1_0, {
        forceTrack: true,
        dismissAction: PRIMARY,
      });
    },
    icon: null,
    size: "lg",
  };
  let primaryButtonIconResult;
  if (primaryButtonIcon != null) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  obj6.icon = primaryButtonIconResult;
  const items4 = [closure_6(components_Button_Button.Button, obj6)];
  tmp2Result = null;
  if (null != secondaryButtonText) {
    const obj7 = {
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
        const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(closure_1_0, {
          forceTrack: true,
          dismissAction: DISMISS,
        });
      },
      size: "lg",
    };
    tmp2Result = tmp2(tmp3(4975).Button, obj7);
  }
  items4[1] = tmp2Result;
  obj5.children = items4;
  items1[3] = closure_7(closure_4, obj5);
  obj.children = items1;
  obj.children = closure_7(closure_4, obj);
  return closure_6(Sheet_BottomSheet.BottomSheet, obj);
}
