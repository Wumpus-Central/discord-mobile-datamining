// === Module 13983: TagGraphic ===

// Module 13983 (TagGraphic)
import nativeDefault from "native" /* 576 */;
import TagGroupTypes from "TagGroupTypes" /* 13980 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_6 = createStyles.createStyles((width, backgroundColor) => {
  const obj = { image: { width, height: width }, avatar: null, roleDot: null };
  const size = { width, height: width, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  obj.avatar = size;
  const size1 = { width, height: width, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_STRONG, backgroundColor };
  obj.roleDot = size1;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGraphic.native.tsx");

export const TagGraphic = function TagGraphic(arg0) {
  ({ graphic, size } = arg0);
  let color;
  if ("type" in graphic) {
    if ("role" === graphic.type) {
      color = graphic.color;
    }
  }
  const tmp4 = closure_6(TagGroupTypes.getTagGraphicDimension(size), color);
  if ("type" in graphic) {
    const type = graphic.type;
    if ("role" === type) {
      const obj2 = { style: tmp4.roleDot, accessible: false };
      return <React4 style={tmp4.roleDot} accessible={false} />;
    } else if ("avatar" === type) {
      const obj3 = { source: graphic.source, style: tmp4.avatar, resizeMode: "cover", accessible: false };
      return <React3 source={graphic.source} style={tmp4.avatar} resizeMode="cover" accessible={false} />;
    } else if ("image" === type) {
      const obj4 = { source: graphic.source, style: tmp4.image, resizeMode: "contain", accessible: false };
      return <React3 source={graphic.source} style={tmp4.image} resizeMode="contain" accessible={false} />;
    }
  }
  const obj5 = { size: null, color: null, accessible: false };
  obj5.size = TagGroupTypes.getTagIconSize(size);
  obj5.color = nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  return <graphic size={null} color={null} accessible={false} />;
};