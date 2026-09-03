// discord_app/modules/mfa/native/components/KeyImage.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AccountAgeTier10LargeBadge from "../../../../design/assets/native.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { container: null };
obj = { marginBottom: ThemesDefault.space.PX_8 };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  return (
    <View style={callback().container}>
      {jsx(AccountAgeTier10LargeBadge.SecurityKeySpotIllustration, { scale: 0.6 })}
    </View>
  );
};
