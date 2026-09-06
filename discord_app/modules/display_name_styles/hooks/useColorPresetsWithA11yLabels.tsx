// discord_app/modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const getColorPresetsForEffect = fn(1389).getColorPresetsForEffect;
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default function useColorPresetsWithA11yLabels(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(
    () =>
      getColorPresetsForEffect(closure_0).map((colors, index) => {
        let obj = { colors, a11yLabel: null };
        const intl = closure_1_0(1114).intl;
        obj = { number: index + 1, hexList: null };
        const mapped = colors.map(closure_1_0(1091).int2hex);
        obj.hexList = mapped.join(", ");
        obj.a11yLabel = intl.formatToPlainString(closure_1_1(2786).FHfTsV, obj);
        return obj;
      }),
    items,
  );
}
