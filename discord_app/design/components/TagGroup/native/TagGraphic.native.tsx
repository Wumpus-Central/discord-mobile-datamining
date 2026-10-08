// === Module 14098: TagGraphic ===

// Module 14098 (TagGraphic)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import TagGroupTypes from "TagGroupTypes" /* 14095 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles((width, backgroundColor) => {
  const obj = { image: { width, height: width }, avatar: null, roleDot: null };
  const size = { width, height: width, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  obj.avatar = size;
  const size1 = { width, height: width, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_STRONG, backgroundColor };
  obj.roleDot = size1;
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGraphic.native.tsx");

export const TagGraphic = ReactCompilerGating.isReactCompilerEnabled() ? (function TagGraphic(arg0) {
  const cResult = c.c(15);
  ({ graphic, size } = arg0);
  let color;
  if ("type" in graphic) {
    if ("role" === graphic.type) {
      color = graphic.color;
    }
  }
  if (cResult[0] !== size) {
    const tagGraphicDimension = TagGroupTypes.getTagGraphicDimension(size);
    cResult[0] = size;
    cResult[1] = tagGraphicDimension;
    let tmp5 = tagGraphicDimension;
    const tmpResult = TagGroupTypes;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_6(tmp5, color);
  if ("type" in graphic) {
    const type = graphic.type;
    if ("role" === type) {
      if (cResult[2] !== tmp7.roleDot) {
        const obj2 = { style: tmp7.roleDot, accessible: false };
        const tmp23 = <React4 style={tmp7.roleDot} accessible={false} />;
        cResult[2] = tmp7.roleDot;
        cResult[3] = tmp23;
        let tmp20 = tmp23;
      } else {
        tmp20 = cResult[3];
      }
      return tmp20;
    } else if ("avatar" === type) {
      if (cResult[4] === graphic.source) {
        if (cResult[5] === tmp7.avatar) {
          let tmp16 = cResult[6];
        }
        return tmp16;
      }
      const obj3 = { source: graphic.source, style: tmp7.avatar, resizeMode: "cover", accessible: false };
      const tmp19 = <React3 source={graphic.source} style={tmp7.avatar} resizeMode="cover" accessible={false} />;
      cResult[4] = graphic.source;
      cResult[5] = tmp7.avatar;
      cResult[6] = tmp19;
      tmp16 = tmp19;
    } else if ("image" === type) {
      if (cResult[7] === graphic.source) {
        if (cResult[8] === tmp7.image) {
          let tmp12 = cResult[9];
        }
        return tmp12;
      }
      const obj4 = { source: graphic.source, style: tmp7.image, resizeMode: "contain", accessible: false };
      const tmp15 = <React3 source={graphic.source} style={tmp7.image} resizeMode="contain" accessible={false} />;
      cResult[7] = graphic.source;
      cResult[8] = tmp7.image;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
  }
  if (cResult[10] !== size) {
    const tagIconSize = TagGroupTypes.getTagIconSize(size);
    cResult[10] = size;
    cResult[11] = tagIconSize;
    let tmp8 = tagIconSize;
    const tmpResult2 = TagGroupTypes;
  } else {
    tmp8 = cResult[11];
  }
  if (cResult[12] === graphic) {
    if (cResult[13] === tmp8) {
      let tmp10 = cResult[14];
    }
    return tmp10;
  }
  const tmp11 = <graphic size={tmp8} color={nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT} accessible={false} />;
  cResult[12] = graphic;
  cResult[13] = tmp8;
  cResult[14] = tmp11;
  tmp10 = tmp11;
  const obj5 = { size: tmp8, color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, accessible: false };
}) : (function TagGraphic(arg0) {
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
});