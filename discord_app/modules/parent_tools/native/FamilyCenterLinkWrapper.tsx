// discord_app/modules/parent_tools/native/FamilyCenterLinkWrapper.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
createCacheKey = { container: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default function FamilyCenterLinkRowWrapper(userId) {
  userId = userId.userId;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7177)().analyticsLocations;
  let tmp3 = null;
  if (undefined !== userId) {
    const obj = { style: null, onPress: null, children: null };
    obj[0] = tmp.container;
    obj[1] = function onPress() {
      analyticsLocations(closure_1_2[6])({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
    };
    obj[2] = userId.children;
    tmp3 = jsx(userId(5438).PressableOpacity, { style: null, onPress: null, children: null });
  }
  return tmp3;
};