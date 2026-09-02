// discord_app/modules/app_channels/native/AppChannelApplicationIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

noopAll;
createCacheKey = { icon: null };
createCacheKey = { width: 32, height: 32, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_channels/native/AppChannelApplicationIcon.tsx");

export default function AppChannelApplicationIcon(application) {
  application = application.application;
  let obj = { source: null, style: null };
  const tmp = callback();
  const tmp2 = preloadDefault;
  obj = { id: application.id, icon: application.icon, size: 32 };
  obj[0] = getAvatarURLDefault.getApplicationIconSource(obj);
  obj[1] = tmp.icon;
  return <tmp2 id={application.id} icon={application.icon} size={32} />;
}
