// === Module 18229: DevToolsCampaignsScreen ===

// Module 18229 (DevToolsCampaignsScreen)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7354 */;
import TextInput from "TextInput" /* 7553 */;
import TableRowGroup from "TableRowGroup" /* 7680 */;
import ActionSheet from "ActionSheet" /* 7885 */;
import CampaignDevToolsUtils from "CampaignDevToolsUtils" /* 9603 */;
import useCampaignDevTools from "useCampaignDevTools" /* 18230 */;
import MobileBottomSheetCopy from "MobileBottomSheetCopy" /* 18232 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function CampaignPicker() {
  const tmp2 = loading(18230)();
  ({ select: require, error, loading } = tmp2);
  ({ campaignsLoading, componentsLoading } = tmp2);
  ({ campaigns, selectedId, reload } = tmp2);
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  const first = tmp3[0];
  let obj = CampaignDevToolsUtils;
  let str = "Search campaigns";
  if (campaignsLoading) {
    str = "Loading...";
  }
  items = [closure_7(TextInput.TextInput, { label: "Search campaigns", placeholder: str, disabled: loading, onChange: tmp3[1], value: first }), , , , ];
  if (componentsLoading) {
    componentsLoading = closure_7(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "small", accessibilityLabel: "Loading campaign surfaces" });
  }
  items[1] = componentsLoading;
  let tmp7Result = null != error;
  if (tmp7Result) {
    let obj3 = { variant: "body-md/normal", children: error };
    tmp7Result = closure_7(Text_Text.Text, obj3);
  }
  items[2] = tmp7Result;
  let tmp7Result2 = null != selectedId;
  if (tmp7Result2) {
    let obj4 = {
      grow: true,
      shrink: true,
      text: "Clear override",
      variant: "secondary",
      onPress() {
          _require(null);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    tmp7Result2 = closure_7(components_Button_Button.Button, obj4);
  }
  let obj5 = { keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: "Dismiss campaign picker", children: null };
  const obj6 = { direction: "horizontal", spacing: 8, children: null };
  const items1 = [tmp7Result2, closure_7(components_Button_Button.Button, { grow: true, shrink: true, text: "Refresh campaigns", variant: "secondary", disabled: campaignsLoading, onPress: reload })];
  obj6.children = items1;
  items[3] = closure_8(Stack_Stack.Stack, obj6);
  items[4] = obj.groupCampaigns(CampaignDevToolsUtils.filterCampaigns(campaigns, first, (name) => name.name)).map((label) => {
    let obj = { hasIcons: false, title: label.label, children: null };
    const campaigns = label.campaigns;
    obj.children = campaigns.map((label) => {
      closure_0 = label;
      return closure_1_7(closure_1_0(dependencyMap[17]).TableRow, {
        label: label.name,
        disabled,
        onPress: closure_1_3(function*() {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  c1 = 1;
                  c2 = 1;
                  const obj4 = { value: tmp4(tmp4.id), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                if (value) {
                  disabled(dependencyMap[15]).hideActionSheet();
                  const obj = disabled(dependencyMap[15]);
                }
                c2 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp11) {
              c2 = tmp;
              throw tmp11;
            }
          }
        })
      }, label.id);
    });
    return metroImportDefault(TableRowGroup.TableRowGroup, obj, label.label);
  });
  obj5.children = items;
  return closure_8(ActionSheet.ActionSheet, obj5);
}
function NitroPicker() {
  let obj = { dismissAccessibilityLabel: "Dismiss Nitro status picker", children: null };
  const obj2 = { hasIcons: false, title: "Nitro status", children: null };
  const NITRO_OPTIONS = useCampaignDevTools.NITRO_OPTIONS;
  obj2.children = NITRO_OPTIONS.map((label) => closure_7(label(7379).TableRow, {
    label: label.label,
    onPress() {
      require("useCampaignDevTools").setCampaignNitro(label.value);
      const obj = require("useCampaignDevTools");
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, label.id));
  obj.children = metroImportDefault(TableRowGroup.TableRowGroup, obj2);
  return metroImportDefault(ActionSheet.ActionSheet, obj);
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { content: { padding: nativeDefault.space.PX_16 }, dismissalDetails: { flex: 1, minWidth: 0 }, variantDetails: { flex: 1, minWidth: 0 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsCampaignsScreen.tsx");

export default function DevToolsCampaignsScreen() {
  const tmp = closure_10();
  _require = tmp;
  [tmp3, importDefault] = reload.useState(false);
  const tmp5 = require("useCampaignDevTools")();
  ({ campaigns, selectedId } = tmp5);
  ({ previewActions, details, dismissals } = tmp5);
  ({ nitro: _slicedToArray, error, reload } = tmp5);
  ({ campaignsLoading, componentsLoading } = tmp5);
  items = [reload];
  const effect = reload.useEffect(() => {
    reload();
  }, items);
  const found = campaigns.find((id) => id.id === selectedId);
  let str;
  if (found != null) {
    str = found.name;
  }
  if (str == null) {
    str = "Select a campaign";
  }
  const found1 = previewActions.filter((component) => {
    component = component.component;
    let tmp3 = component.componentType === closure_0(selectedId[18]).MarketingComponentType.MOBILE_BOTTOM_SHEET;
    if (tmp3) {
      tmp3 = "mobileBottomSheet" === component.properties.properties.oneofKind;
    }
    if (tmp3) {
      tmp3 = null != closure_0(selectedId[19]).getMobileBottomSheetCopy(component);
      const tmpResult = closure_0(selectedId[19]);
    }
    return tmp3;
  });
  const tmp2 = _slicedToArray(reload.useState(false), 2);
  const result = require("CampaignDevToolsUtils").groupCampaignPreviewActions(found1);
  let obj2 = { contentContainerStyle: tmp.content, children: null };
  let items1 = [closure_7(require("Text/Text").Text, { variant: "body-md/normal", children: "Force campaign surfaces for this session. Purchases and rewards still use server eligibility." }), , , , , , ];
  let str2 = "Loading...";
  if (!campaignsLoading) {
    str2 = str;
  }
  const items2 = [
    closure_7(require("TableRow").TableRow, {
      label: "Campaign",
      subLabel: str2,
      disabled: campaignsLoading,
      onPress() {
        return require("ActionSheetActionCreators").openLazy(Promise.resolve({ default: CampaignPicker }), "campaign-picker");
      }
    }),

  ];
  const NITRO_OPTIONS = tmp8(selectedId[7]).NITRO_OPTIONS;
  const found2 = NITRO_OPTIONS.find((value) => value.value === _slicedToArray);
  let label;
  if (found2 != null) {
    label = found2.label;
  }
  let obj4 = { hasIcons: false, children: null };
  items2[1] = closure_7(require("TableRow").TableRow, {
    label: "Nitro status",
    subLabel: label,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(Promise.resolve({ default: NitroPicker }), "campaign-nitro-picker");
    }
  });
  obj4.children = items2;
  items1[1] = closure_8(require("TableRowGroup").TableRowGroup, obj4);
  let tmp9Result = null != error;
  if (tmp9Result) {
    const obj6 = { variant: "body-md/normal", children: error };
    tmp9Result = closure_7(tmp8(selectedId[12]).Text, obj6);
  }
  items1[2] = tmp9Result;
  let tmp11Result = componentsLoading;
  if (!componentsLoading) {
    tmp11Result = details.length > 0;
  }
  if (tmp11Result) {
    let str3 = "Show";
    if (tmp3) {
      str3 = "Hide";
    }
    const obj7 = { label: "Campaign details", arrow: false, trailing: null, accessibilityState: null, onPress: null };
    const obj8 = { variant: "body-sm/normal", children: str3 };
    obj7.trailing = closure_7(tmp8(selectedId[12]).Text, obj8);
    const obj9 = { expanded: tmp3 };
    obj7.accessibilityState = obj9;
    obj7.onPress = function onPress() {
      return importDefault((arg0) => !arg0);
    };
    const items3 = [closure_7(tmp8(selectedId[17]).TableRow, obj7), ];
    if (!tmp3) {
      const obj10 = { hasIcons: false, children: null };
      items3[1] = tmp3;
      obj10.children = items3;
      tmp11Result = closure_8(tmp8(selectedId[16]).TableRowGroup, obj10);
    } else if (componentsLoading) {
      let tmp9Result8 = closure_7(tmp8(selectedId[11]).ActivityIndicator, { size: "small", accessibilityLabel: "Loading campaign surfaces" });
    } else {
      tmp9Result8 = details.map((subLabel) => {
        const label = subLabel.label;
        return closure_1_7(closure_0(selectedId[17]).TableRow, { label, subLabel: subLabel.value }, label);
      });
    }
  }
  items1[3] = tmp11Result;
  let tmp18 = componentsLoading;
  if (!componentsLoading) {
    tmp18 = null != selectedId;
  }
  if (!tmp18) {
    items1[4] = tmp18;
    let tmp11Result3 = componentsLoading;
    if (!componentsLoading) {
      tmp11Result3 = null != selectedId;
    }
    if (tmp11Result3) {
      const items4 = [closure_7(tmp8(selectedId[12]).Heading, { variant: "heading-sm/semibold", children: "Bottom sheets" }), closure_7(tmp8(selectedId[12]).Text, { variant: "body-sm/normal", color: "text-muted", children: "Force open any bottom sheet variant from this campaign, regardless of eligibility or Nitro override." }), , ];
      let tmp9Result9 = componentsLoading;
      if (componentsLoading) {
        tmp9Result9 = closure_7(tmp8(selectedId[11]).ActivityIndicator, { size: "small", accessibilityLabel: "Loading bottom sheets" });
      }
      items4[2] = tmp9Result9;
      let tmp9Result10 = !componentsLoading;
      if (!componentsLoading) {
        tmp9Result10 = 0 === found1.length;
      }
      if (tmp9Result10) {
        tmp9Result10 = closure_7(tmp8(selectedId[12]).Text, { variant: "body-sm/normal", children: "No bottom sheets for this platform." });
      }
      const obj12 = { spacing: 8, children: null };
      items4[3] = tmp9Result10;
      obj12.children = items4;
      tmp11Result3 = closure_8(tmp8(selectedId[13]).Stack, obj12);
    }
    const obj13 = { spacing: 16, children: null };
    items1[5] = tmp11Result3;
    items1[6] = result.map((title) => {
      title = title.title;
      const variants = title.variants;
      let obj = { spacing: 8, children: null };
      items = [
        closure_1_7(title(selectedId[12]).Text, { variant: "body-sm/semibold", accessibilityRole: "header", children: title }),
        variants.map((component) => {
          component = component.component;
          ({ target, timing, variant } = component);
          const properties = component.properties.properties;
          const mobileBottomSheetCopy = MobileBottomSheetCopy.getMobileBottomSheetCopy(component);
          let tmp5Result = null;
          if ("mobileBottomSheet" === properties.oneofKind) {
            tmp5Result = null;
            if (null != mobileBottomSheetCopy) {
              const obj2 = { variant: "body-sm/normal", color: "text-muted", style: title.variantDetails, children: null };
              items = ["Targets: ", target, " \u00B7 ", timing];
              let combined = null != variant;
              if (combined) {
                const _HermesInternal = HermesInternal;
                combined = " \u00B7 Variant: " + variant;
              }
              items[4] = combined;
              obj2.children = items;
              const items1 = [React5(Text_Text.Text, obj2), ];
              let str3 = variant;
              if (variant == null) {
                str3 = "Default";
              }
              const obj3 = { direction: "horizontal", spacing: 8, align: "center", children: null };
              const obj4 = { text: "Force open", variant: "primary", size: "sm", accessibilityLabel: null, onPress: null };
              const _HermesInternal2 = HermesInternal;
              obj4.accessibilityLabel = "Force open " + title + ", Targets: " + target + ", " + str3 + ", " + timing;
              obj4.onPress = function onPress() {
                const obj = closure_2_1(paths[15]);
                obj.openLazy(title(paths[21])(paths[20], paths.paths), "campaign-sheet-" + component.id, {
                  bottomSheetData: properties.mobileBottomSheet,
                  copy: mobileBottomSheetCopy,
                  componentId: component.id,
                  componentType: component.componentType,
                  promotionId: component.promotionId,
                  markAsDismissed() {

                  }
                });
              };
              items1[1] = metroImportDefault(components_Button_Button.Button, obj4);
              obj3.children = items1;
              tmp5Result = React5(Stack_Stack.Stack, obj3, component.id);
            }
          }
          return tmp5Result;
        })
      ];
      obj.children = items;
      return closure_1_8(title(selectedId[13]).Stack, obj, title);
    });
    obj13.children = items1;
    obj2.children = closure_8(require("Stack/Stack").Stack, obj13);
    return closure_7(ScrollView, obj2);
  } else {
    const items5 = [closure_7(tmp8(selectedId[12]).Heading, { variant: "heading-sm/semibold", children: "Dismissed content" }), ];
    let tmp9Result11 = !componentsLoading;
    if (!componentsLoading) {
      tmp9Result11 = dismissals.contents.length > 0;
    }
    if (tmp9Result11) {
      ({ resetting: obj11.disabled, resetAll: obj11.onPress } = dismissals);
      tmp9Result11 = closure_7(tmp8(selectedId[14]).Button, { text: "Reset all", variant: "secondary", size: "sm", accessibilityLabel: "Reset all for this campaign", disabled: null, onPress: null });
      const obj14 = { text: "Reset all", variant: "secondary", size: "sm", accessibilityLabel: "Reset all for this campaign", disabled: null, onPress: null };
    }
    const obj15 = { direction: "horizontal", spacing: 8, align: "center", justify: "space-between", children: null };
    items5[1] = tmp9Result11;
    obj15.children = items5;
    const items6 = [closure_8(tmp8(selectedId[13]).Stack, obj15), closure_7(tmp8(selectedId[12]).Text, { variant: "body-sm/normal", color: "text-muted", children: "Reset your dismissals. Keys are shared by campaigns using these surfaces." }), ];
    if (componentsLoading) {
      let tmp9Result12 = closure_7(tmp8(selectedId[11]).ActivityIndicator, { size: "small", accessibilityLabel: "Loading dismissed content" });
    } else {
      let tmp9Result13 = 0 === dismissals.contents.length;
      if (tmp9Result13) {
        tmp9Result13 = closure_7(tmp8(selectedId[12]).Text, { variant: "body-sm/normal", children: "No resettable dismissible content for these surfaces." });
      }
      const items7 = [tmp9Result13, , ];
      const contents = dismissals.contents;
      items7[1] = contents.map((content) => {
        content = content.content;
        const label = content.label;
        const obj = { direction: "horizontal", spacing: 8, align: "center", children: null };
        const obj2 = { spacing: 0, style: content.dismissalDetails, children: null };
        const obj3 = { variant: "body-sm/normal", children: null };
        items = [label, " \u00B7 ", content.status];
        obj3.children = items;
        obj2.children = closure_1_8(closure_0(selectedId[12]).Text, obj3);
        const items1 = [
          closure_1_7(closure_0(selectedId[13]).Stack, obj2),
          closure_1_7(closure_0(selectedId[14]).Button, {
            text: "Reset",
            variant: "secondary",
            size: "sm",
            accessibilityLabel: "Reset " + label,
            disabled: dismissals.resetting,
            onPress() {
              return dismissals.resetOne(content);
            }
          })
        ];
        obj.children = items1;
        return closure_1_8(closure_0(selectedId[13]).Stack, obj, content);
      });
      let tmp9Result14 = null != dismissals.error;
      if (tmp9Result14) {
        const obj16 = { variant: "body-sm/normal", children: dismissals.error };
        tmp9Result14 = closure_7(tmp8(selectedId[12]).Text, obj16);
      }
      const obj17 = { children: null };
      items7[2] = tmp9Result14;
      obj17.children = items7;
      tmp9Result12 = closure_8(closure_9, obj17);
    }
    const obj33 = { spacing: 8, children: null };
    items6[2] = tmp9Result12;
    obj33.children = items6;
    closure_8(tmp8(selectedId[13]).Stack, obj33);
  }
  let obj = require("CampaignDevToolsUtils");
  let obj3 = {
    label: "Campaign",
    subLabel: str2,
    disabled: campaignsLoading,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(Promise.resolve({ default: CampaignPicker }), "campaign-picker");
    }
  };
  const obj5 = {
    label: "Nitro status",
    subLabel: label,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(Promise.resolve({ default: NitroPicker }), "campaign-nitro-picker");
    }
  };
};