// === Module 14256: TagGraphic ===

// Module 14256 (TagGraphic)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import TagGroupTypes from "TagGroupTypes" /* 14253 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
({ Image: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((width, backgroundColor) => {
  let size1;
  const obj = { image: { width, height: width }, avatar: size, roleDot: size1 };
  size = { width, height: width, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  size1 = { width, height: width, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_STRONG, backgroundColor };
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let graphic;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(15);
  ({ graphic, size } = arg0);
  let color;
  if ("type" in graphic) {
    if ("role" === graphic.type) {
      color = graphic.color;
    }
  }
  if (cResult[0] !== size) {
    const tmpResult = TagGroupTypes;
    const tagGraphicDimension = tmpResult.getTagGraphicDimension(size);
    cResult[0] = size;
    cResult[1] = tagGraphicDimension;
    tmp5 = tagGraphicDimension;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_6(tmp5, color);
  if ("type" in graphic) {
    const type = graphic.type;
    if ("role" === type) {
      let tmp20;
      if (cResult[2] !== tmp7.roleDot) {
        const tmp23 = <React3 style={tmp7.roleDot} accessible={false} />;
        cResult[2] = tmp7.roleDot;
        cResult[3] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[3];
      }
      return tmp20;
    } else if ("avatar" === type) {
      if (cResult[4] === graphic.source) {
        let tmp16;
        if (cResult[5] === tmp7.avatar) {
          tmp16 = cResult[6];
        }
        return tmp16;
      }
      const tmp19 = <_false source={graphic.source} style={tmp7.avatar} resizeMode="cover" accessible={false} />;
      cResult[4] = graphic.source;
      cResult[5] = tmp7.avatar;
      cResult[6] = tmp19;
      tmp16 = tmp19;
    } else if ("image" === type) {
      if (cResult[7] === graphic.source) {
        let tmp12;
        if (cResult[8] === tmp7.image) {
          tmp12 = cResult[9];
        }
        return tmp12;
      }
      const tmp15 = <_false source={graphic.source} style={tmp7.image} resizeMode="contain" accessible={false} />;
      cResult[7] = graphic.source;
      cResult[8] = tmp7.image;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
  }
  if (cResult[10] !== size) {
    const tmpResult2 = TagGroupTypes;
    const tagIconSize = tmpResult2.getTagIconSize(size);
    cResult[10] = size;
    cResult[11] = tagIconSize;
    tmp8 = tagIconSize;
  } else {
    tmp8 = cResult[11];
  }
  if (cResult[12] === graphic) {
    let tmp10;
    if (cResult[13] === tmp8) {
      tmp10 = cResult[14];
    }
    return tmp10;
  }
  const tmp11 = <graphic size={tmp8} color={nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT} accessible={false} />;
  cResult[12] = graphic;
  cResult[13] = tmp8;
  cResult[14] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
  let graphic;
  ({ graphic, size } = arg0);
  let color;
  if ("type" in graphic) {
    if ("role" === graphic.type) {
      color = graphic.color;
    }
  }
  const obj = TagGroupTypes;
  const tmp4 = closure_6(obj.getTagGraphicDimension(size), color);
  if ("type" in graphic) {
    const type = graphic.type;
    if ("role" === type) {
      return <React3 style={tmp4.roleDot} accessible={false} />;
    } else if ("avatar" === type) {
      return <_false source={graphic.source} style={tmp4.avatar} resizeMode="cover" accessible={false} />;
    } else if ("image" === type) {
      return <_false source={graphic.source} style={tmp4.image} resizeMode="contain" accessible={false} />;
    }
  }
  const tmp2Result = TagGroupTypes;
  return <graphic size={tmp2Result.getTagIconSize(size)} color={nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT} accessible={false} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGraphic.native.tsx");

export const TagGraphic = tmp4;