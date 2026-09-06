// discord_app/modules/channel_list_v2/native/components/NewBadge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useIsUsingClientThemeDefault from "../../../client_themes/native/useIsUsingClientTheme.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles((arg0, arg1) => {
  let obj = PlatformUtils;
  let num = 0;
  if (obj.isIOS()) {
    num = 1;
  }
  obj = { text: { textAlign: "center", textTransform: "uppercase", marginTop: num }, base: null };
  obj = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: null,
  };
  if (tmpResult.isThemeLight(arg1)) {
    if (!arg0) {
      let MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(576).colors.BACKGROUND_BRAND;
    }
    obj.backgroundColor = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj.base = obj;
    return obj;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(576).colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default function NewBadge() {
  const tmp2 = useIsUsingClientThemeDefault();
  const tmp3 = useThemeDefault();
  const tmp4 = closure_5(tmp2, tmp3);
  let obj = { style: tmp4.base, children: null };
  obj = { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null };
  if (obj3.isThemeLight(tmp3)) {
    let str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  obj.color = str;
  const intl = tmp7(1114).intl;
  obj.children = intl.string(util.t.y2b7CA);
  obj.children = jsx(Text_Text.Text, { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null });
  return (
    <View variant="text-xxs/bold" style={tmp4.text} color={null}>
      {null}
    </View>
  );
}
