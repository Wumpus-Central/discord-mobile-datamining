// === Module 16458: GuildsBarGeoRestrictedBadge ===

// Module 16458 (GuildsBarGeoRestrictedBadge)
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5672 */;
import _modDef12398 from "module_12398" /* 12398 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj = { badgeImageContainer: null, badgeImage: null };
let size = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.STATUS_WARNING_BACKGROUND, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj.badgeImageContainer = size;
const size1 = { height: 16, width: 16, opacity: fn(5526).DARK_1_LIGHT_08, tintColor: nativeDefault.colors.BLACK };
obj.badgeImage = size1;
let closure_4 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx");

export default noop.memo(function GuildsBarGeoRestrictedBadge(style) {
  const tmp = closure_4();
  const obj = { style: null, pointerEvents: "none", children: null };
  const items = [tmp.badgeImageContainer, style.style];
  obj.style = items;
  const obj2 = { source: _modDef12398, style: tmp.badgeImage };
  obj.children = jsx(FastImageDefault, { source: _modDef12398, style: tmp.badgeImage });
  return <View style={null} pointerEvents="none">{null}</View>;
});