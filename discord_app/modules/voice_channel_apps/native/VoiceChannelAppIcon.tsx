// discord_app/modules/voice_channel_apps/native/VoiceChannelAppIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import TableRowApplicationIconDefault from "../../applications/native/TableRowApplicationIcon.tsx";
import ConjureAppIconTileDefault from "../../conjure/projects/native/ConjureAppIconTile.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { tile: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.tile = size;
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppIcon.tsx");

export default function VoiceChannelAppIcon(iconApplication) {
  iconApplication = iconApplication.iconApplication;
  ({ applicationId, name } = iconApplication);
  if (null != iconApplication.icon) {
    const obj2 = { application: iconApplication };
    let tmp6 = jsx(TableRowApplicationIconDefault, { application: iconApplication });
  } else {
    const obj = { style: tmp.tile, children: null };
    const obj3 = { applicationId, name, size: 32 };
    obj.children = jsx(ConjureAppIconTileDefault, { applicationId, name, size: 32 });
    tmp6 = <View style={tmp.tile}>{null}</View>;
  }
  return tmp6;
}
