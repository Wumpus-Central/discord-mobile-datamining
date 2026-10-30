// discord_app/modules/safety_hub/native/SafetyHubErrorActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import CircleXIcon from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import useSafetyHubLoadingDefault from "../hooks/useSafetyHubLoading.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  errorContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: nativeDefault.space.PX_8,
    paddingBottom: nativeDefault.space.PX_24,
    gap: nativeDefault.space.PX_16,
    minHeight: 120,
  },
  redesignErrorIconContainer: null,
  redesignErrorIcon: null,
};
let size = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 40,
  width: 40,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.WHITE,
};
obj2.redesignErrorIconContainer = size;
obj2.redesignErrorIcon = { height: 50, width: 50 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default function SafetyHubErrorActionSheet(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const tmp2 = closure_7();
    const tmp5 = useSafetyHubLoadingDefault();
    const obj = { children: null };
    const obj2 = { style: tmp2.errorContainer, children: null };
    const obj3 = { style: tmp2.redesignErrorIconContainer, children: null };
    const obj4 = {
      size: "custom",
      color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT,
      style: tmp2.redesignErrorIcon,
    };
    obj3.children = hasOwnProperty(CircleXIcon.CircleXIcon, obj4);
    const items = [hasOwnProperty(View, obj3)];
    const obj5 = { variant: "heading-lg/normal", children: null };
    const intl = util.intl;
    obj5.children = intl.string(util.t.TDRvqs);
    items[1] = hasOwnProperty(Text_Text.Text, obj5);
    obj2.children = items;
    const items1 = [timestampProducer(View, obj2)];
    const obj6 = {
      onPress() {
        return SafetyHubActionCreatorsAll.getSafetyHubData();
      },
      text: null,
      loading: null,
      disabled: null,
    };
    const intl2 = util.intl;
    obj6.text = intl2.string(util.t.R1AN4F);
    obj6.loading = tmp5;
    obj6.disabled = tmp5;
    items1[1] = hasOwnProperty(components_Button_Button.Button, obj6);
    obj.children = items1;
    return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
  }
}
