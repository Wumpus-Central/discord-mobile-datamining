// === Module 18894: VoiceChannelAppIcon ===

// Module 18894 (VoiceChannelAppIcon)
import nativeDefault from "native" /* 575 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9041 */;
import ConjureAppIconTileDefault from "ConjureAppIconTile" /* 11340 */;
import noop from "module_19" /* 19 */;

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
};