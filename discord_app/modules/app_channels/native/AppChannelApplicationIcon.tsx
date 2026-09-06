// discord_app/modules/app_channels/native/AppChannelApplicationIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
fn(4560);
const createStyles = { icon: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.md };
createStyles.icon = size;
let closure_3 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationIcon.tsx");

export default function AppChannelApplicationIcon(application) {
  application = application.application;
  let obj = { source: null, style: null };
  const tmp = closure_3();
  obj = { id: application.id, icon: application.icon, size: 32 };
  obj.source = AvatarUtilsDefault.getApplicationIconSource(obj);
  obj.style = tmp.icon;
  return <tmp2 id={application.id} icon={application.icon} size={32} />;
}
