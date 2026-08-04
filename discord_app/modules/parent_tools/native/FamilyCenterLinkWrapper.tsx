// discord_app/modules/parent_tools/native/FamilyCenterLinkWrapper.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default function FamilyCenterLinkRowWrapper(userId) {
  userId = userId.userId;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(5519)().analyticsLocations;
  let tmp3 = null;
  if (undefined !== userId) {
    const obj = { style: null, onPress: null, children: null };
    obj[0] = tmp.container;
    obj[1] = function onPress() {
      analyticsLocations(outer1_2[6])({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
    };
    obj[2] = userId.children;
    tmp3 = jsx(userId(4721).PressableOpacity, { style: null, onPress: null, children: null });
  }
  return tmp3;
};