// discord_app/modules/safety_hub/native/SafetyHubErrorActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import CircleXIcon from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import useSafetyHubLoadingDefault from "../hooks/useSafetyHubLoading.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { errorContainer: null, redesignErrorIconContainer: null, redesignErrorIcon: null };
createStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_16,
  minHeight: 120,
};
createStyles.errorContainer = createStyles;
let size = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 40,
  width: 40,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.WHITE,
};
createStyles.redesignErrorIconContainer = size;
createStyles.redesignErrorIcon = { height: 50, width: 50 };
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default function SafetyHubErrorActionSheet(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const tmp2 = closure_7();
    const tmp5 = useSafetyHubLoadingDefault();
    let obj = { children: null };
    obj = { style: null, children: null };
    const items = [tmp2.errorContainer];
    obj.style = items;
    obj = { style: null, children: null };
    const items1 = [tmp2.redesignErrorIconContainer];
    obj.style = items1;
    const obj1 = {
      size: "custom",
      color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT,
      style: null,
    };
    const items2 = [tmp2.redesignErrorIcon];
    obj1.style = items2;
    obj.children = hasOwnProperty(CircleXIcon.CircleXIcon, obj1);
    const items3 = [hasOwnProperty(View, obj)];
    const obj2 = { variant: "heading-lg/normal", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.TDRvqs);
    items3[1] = hasOwnProperty(Text_Text.Text, obj2);
    obj.children = items3;
    const items4 = [timestampProducer(View, obj)];
    const obj3 = {
      onPress() {
        return SafetyHubActionCreatorsAll.getSafetyHubData();
      },
      text: null,
      loading: null,
      disabled: null,
    };
    const intl2 = util.intl;
    obj3.text = intl2.string(util.t.R1AN4F);
    obj3.loading = tmp5;
    obj3.disabled = tmp5;
    items4[1] = hasOwnProperty(components_Button_Button.Button, obj3);
    obj.children = items4;
    return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
  }
}
