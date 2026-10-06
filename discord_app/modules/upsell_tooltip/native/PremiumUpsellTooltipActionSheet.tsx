// === Module 9878: PremiumUpsellTooltipActionSheet ===

// Module 9878 (PremiumUpsellTooltipActionSheet)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4704 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, onPrimaryButtonPress;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let size1;
({ Image: c3, View: closure_4 } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, img: size, header: { flexDirection: "row", justifyContent: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: obj3, nitroWheel: size1, buttonContainer: obj4 };
obj2 = { justifyContent: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { alignSelf: "center", width: 231, height: 231, borderRadius: nativeDefault.radii.sm, marginBottom: 16 };
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
obj4 = { gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPrimaryButtonPress) => {
  let backdropProps;
  let description;
  let descriptionStyle;
  let dismissibleContent;
  let imageSource;
  let imageStyle;
  let onDismiss;
  let primaryButtonIcon;
  let primaryButtonText;
  let secondaryButtonText;
  let title;
  let obj = dismissibleContent(onPrimaryButtonPress[7]);
  const cResult = obj.c(52);
  ({ title, backdropProps, description, descriptionStyle, imageSource, imageStyle, dismissibleContent } = onPrimaryButtonPress);
  ({ primaryButtonText, primaryButtonIcon, secondaryButtonText, onDismiss } = onPrimaryButtonPress);
  onPrimaryButtonPress = onPrimaryButtonPress.onPrimaryButtonPress;
  const onSecondaryButtonPress = onPrimaryButtonPress.onSecondaryButtonPress;
  const tmp2 = closure_8();
  if (cResult[0] === dismissibleContent) {
    let tmp3;
    if (cResult[1] === onDismiss) {
      tmp3 = cResult[2];
    }
    let closure_4 = tmp3;
    if (cResult[3] === tmp3) {
      if (cResult[6] === tmp3) {
        class E {
          constructor() {
            if (onSecondaryButtonPress != null) {
              tmp();
            }
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            closure_4(ContentDismissActionType.DISMISS);
          }
        }
        class R {
          constructor() {
            onPrimaryButtonPress();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            closure_4(ContentDismissActionType.PRIMARY);
          }
        }
        let tmp9 = null;
        if (tmp7) {
          class E {
            constructor() {
              if (onSecondaryButtonPress != null) {
                tmp();
              }
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              closure_4(ContentDismissActionType.DISMISS);
            }
          }
          class R {
            constructor() {
              onPrimaryButtonPress();
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              closure_4(ContentDismissActionType.PRIMARY);
            }
          }
          tmp13[0] = tmp2.img;
          tmp13[1] = imageStyle;
          tmp12[0] = tmp13;
          tmp12[1] = imageSource;
          tmp9 = closure_6(onSecondaryButtonPress, tmp12);
        }
        cResult[9] = tmp7;
        cResult[10] = imageSource;
        cResult[11] = imageStyle;
        cResult[12] = tmp2.img;
        cResult[13] = tmp9;
      }
      class E {
        constructor() {
          if (onSecondaryButtonPress != null) {
            tmp();
          }
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_4(ContentDismissActionType.DISMISS);
        }
      }
      class R {
        constructor() {
          onPrimaryButtonPress();
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_4(ContentDismissActionType.PRIMARY);
        }
      }
      cResult[6] = tmp3;
      cResult[7] = onSecondaryButtonPress;
      cResult[8] = E;
    }
    class R {
      constructor() {
        onPrimaryButtonPress();
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        closure_4(ContentDismissActionType.PRIMARY);
      }
    }
    cResult[3] = tmp3;
    cResult[4] = onPrimaryButtonPress;
    cResult[5] = R;
  }
  const fn = function l(dismissAction) {
    const tmp = null != dismissAction && dismissAction !== ContentDismissActionType.DISMISS;
    if (!tmp) {
      if (onDismiss != null) {
        tmp3();
      }
    }
    const obj = DismissibleContentUnsafeUtils;
    const obj2 = { forceTrack: true, dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissibleContent, obj2);
  };
  cResult[0] = dismissibleContent;
  cResult[1] = onDismiss;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((arg0) => {
  let backdropProps;
  let closure_3;
  let description;
  let descriptionStyle;
  let imageSource;
  let imageStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj2;
  let primaryButtonIcon;
  let primaryButtonIconResult;
  let primaryButtonText;
  let secondaryButtonText;
  let title;
  ({ imageSource, dismissibleContent: require, primaryButtonIcon, secondaryButtonText, onDismiss: importDefault, onPrimaryButtonPress: dependencyMap, onSecondaryButtonPress: closure_3 } = arg0);
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  let tmp = closure_8();
  let obj = {
    startExpanded: true,
    onDismiss: function handleDismiss(dismissAction) {
      const tmp = null != dismissAction && dismissAction !== ContentDismissActionType.DISMISS;
      if (!tmp) {
        if (importDefault != null) {
          tmp3();
        }
      }
      const obj = DismissibleContentUnsafeUtils;
      const obj2 = { forceTrack: true, dismissAction };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(require, obj2);
    },
    children: closure_7(closure_4, obj2)
  };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged = Object.assign(backdropProps);
  obj2 = { style: tmp.container, children: items1 };
  let tmp2Result = null;
  if (null != imageSource) {
    const obj3 = { style: items, source: imageSource };
    items = [tmp.img, imageStyle];
    tmp2Result = closure_6(closure_3, obj3);
  }
  items1 = [tmp2Result, , , ];
  const obj4 = { style: tmp.header, children: items2 };
  items2 = [, ];
  const obj5 = { style: tmp.nitroWheel };
  items2[0] = closure_6(native.NitroWheel, obj5);
  const obj6 = { variant: "heading-xl/bold", style: tmp.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  items2[1] = closure_6(Text_Text.Text, obj6);
  items1[1] = closure_7(closure_4, obj4);
  const obj7 = { style: items3, variant: "text-md/medium", color: "text-default", children: description };
  items3 = [tmp.description, descriptionStyle];
  items1[2] = closure_6(Text_Text.Text, obj7);
  const obj9 = {
    variant: "active",
    text: primaryButtonText,
    onPress() {
      dependencyMap();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const PRIMARY = ContentDismissActionType.PRIMARY;
      const tmp4 = null != PRIMARY && PRIMARY !== ContentDismissActionType.DISMISS;
      if (!tmp4) {
        if (importDefault != null) {
          importDefault();
        }
      }
      const obj2 = DismissibleContentUnsafeUtils;
      const result = obj2.UNSAFE_markDismissibleContentAsDismissed(require, { forceTrack: true, dismissAction: PRIMARY });
    },
    icon: primaryButtonIconResult,
    size: "lg"
  };
  primaryButtonIconResult = undefined;
  const obj8 = { style: tmp.buttonContainer, children: items4 };
  const Button = components_Button_Button.Button;
  if (primaryButtonIcon != null) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  items4 = [closure_6(Button, obj9), ];
  let tmp2Result2 = null;
  if (null != secondaryButtonText) {
    const obj10 = {
      variant: "secondary",
      text: secondaryButtonText,
      onPress() {
          if (closure_3 != null) {
            tmp();
          }
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const DISMISS = ContentDismissActionType.DISMISS;
          const tmp5 = null != DISMISS && DISMISS !== ContentDismissActionType.DISMISS;
          if (!tmp5) {
            if (importDefault != null) {
              importDefault();
            }
          }
          const obj2 = DismissibleContentUnsafeUtils;
          const result = obj2.UNSAFE_markDismissibleContentAsDismissed(require, { forceTrack: true, dismissAction: DISMISS });
        },
      size: "lg"
    };
    tmp2Result2 = closure_6(components_Button_Button.Button, obj10);
  }
  items4[1] = tmp2Result2;
  items1[3] = closure_7(closure_4, obj8);
  return closure_6(BottomSheet, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default tmp6;