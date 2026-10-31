// === Module 12530: TagGraphic ===

// Module 12530 (TagGraphic)
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5717 */;
import TagGroupTypes from "TagGroupTypes" /* 12527 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_5 = createStyles.createStyles((width, backgroundColor) => {
  const obj = { image: { width, height: width }, avatar: null, roleDot: null };
  const size = { width, height: width, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  obj.avatar = size;
  const size1 = { width, height: width, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_STRONG, backgroundColor };
  obj.roleDot = size1;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGraphic.native.tsx");

export function TagGraphic(arg0) {
  ({ graphic, size } = arg0);
  let color;
  if ("type" in graphic) {
    if ("role" === graphic.type) {
      color = graphic.color;
    }
  }
  const tmp4 = closure_5(TagGroupTypes.getTagGraphicDimension(size), color);
  if ("type" in graphic) {
    const type = graphic.type;
    if ("role" === type) {
      const obj2 = { style: tmp4.roleDot, accessible: false };
      return <View style={tmp4.roleDot} accessible={false} />;
    } else if ("avatar" === type) {
      const obj3 = { source: graphic.source, style: tmp4.avatar, resizeMode: "cover", accessible: false };
      return jsx(FastImageDefault, { source: graphic.source, style: tmp4.avatar, resizeMode: "cover", accessible: false });
    } else if ("image" === type) {
      const obj4 = { source: graphic.source, style: tmp4.image, resizeMode: "contain", accessible: false };
      return jsx(FastImageDefault, { source: graphic.source, style: tmp4.image, resizeMode: "contain", accessible: false });
    }
  }
  const obj5 = { size: null, color: null, accessible: false };
  obj5.size = TagGroupTypes.getTagIconSize(size);
  obj5.color = nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  return <graphic size={null} color={null} accessible={false} />;
}