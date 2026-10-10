// discord_app/modules/conjure/projects/native/ConjureProjectIcon.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useConjureProjectIconDefault from "../useConjureProjectIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const AvatarUtils = obj(1415);
const FastImageDefault = tmp3(6156);
const AppsIcon = obj(8233);
require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const dependencyMap = { header: 20, list: 32 };
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles((width, borderRadius, width2) => {
  const obj = {
    frame: { width, height: width, borderRadius, overflow: "hidden", alignItems: "center", justifyContent: "center" },
    placeholder: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG },
    image: { width, height: width },
    border: null,
    glyph: null,
  };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.borderRadius = borderRadius;
  obj3.borderWidth = 1;
  obj3.borderColor = nativeDefault.colors.BORDER_SUBTLE;
  obj.border = obj3;
  obj.glyph = { width: width2, height: width2 };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureProjectIcon(project) {
      let obj = require;
      let image = dependencyMap;
      const cResult = c.c(13);
      let tmp3 = importDefault;
      const tmp4 = useConjureProjectIconDefault(project.project, dependencyMap[project.size]);
      const url = tmp4.url;
      const tmp5 = closure_8(dependencyMap[project.size], tmp4.radius, tmp4.glyphSize);
      if (cResult[0] === tmp5.frame) {
        if (cResult[1] === tmp6) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === tmp5.glyph) {
          if (cResult[4] === tmp5.image) {
            if (cResult[5] === url) {
              if (cResult[7] !== tmp5.border) {
                const obj3 = { style: tmp5.border, pointerEvents: "none" };
                const tmp16 = hasOwnProperty(React4, obj3);
                cResult[7] = tmp5.border;
                cResult[8] = tmp16;
                let tmp13 = tmp16;
              } else {
                tmp13 = cResult[8];
              }
              if (cResult[9] === tmp7) {
                if (cResult[10] === tmp8) {
                  if (cResult[11] === tmp13) {
                    let tmp17 = cResult[12];
                  }
                  return tmp17;
                }
              }
              const obj4 = { style: tmp7, children: null };
              const items = [cResult[6], tmp13];
              obj4.children = items;
              const tmp20 = timestampProducer(React4, obj4);
              cResult[9] = tmp7;
              cResult[10] = cResult[6];
              cResult[11] = tmp13;
              cResult[12] = tmp20;
              tmp17 = tmp20;
            }
          }
        }
        if (null != url) {
          tmp3 = FastImageDefault;
          const obj5 = { source: null, style: null };
          obj = AvatarUtils;
          obj5.source = obj.makeSource(url);
          image = tmp5.image;
          obj5.style = image;
          let tmp10 = hasOwnProperty(tmp3, obj5);
        } else {
          const obj6 = { size: "custom", style: tmp5.glyph, color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
          tmp10 = hasOwnProperty(AppsIcon.AppsIcon, obj6);
        }
        cResult[3] = tmp5.glyph;
        cResult[4] = tmp5.image;
        cResult[5] = url;
        cResult[6] = tmp10;
      }
      const items1 = [tmp5.frame, null == url && tmp5.placeholder];
      cResult[0] = tmp5.frame;
      cResult[1] = null == url && tmp5.placeholder;
      cResult[2] = items1;
      tmp7 = items1;
    }
  : function ConjureProjectIcon(project) {
      const tmp4 = useConjureProjectIconDefault(project.project, dependencyMap[project.size]);
      const url = tmp4.url;
      const tmp5 = closure_8(dependencyMap[project.size], tmp4.radius, tmp4.glyphSize);
      const items = [tmp5.frame];
      let placeholder = null == url;
      if (placeholder) {
        placeholder = tmp5.placeholder;
      }
      const obj = { style: items, children: null };
      items[1] = placeholder;
      if (null != url) {
        const obj2 = { source: null, style: null };
        const tmp2Result = FastImageDefault;
        obj2.source = AvatarUtils.makeSource(url);
        obj2.style = tmp5.image;
        let tmp11 = hasOwnProperty(tmp2Result, obj2);
        let tmp10 = hasOwnProperty;
      } else {
        const obj3 = { size: "custom", style: tmp5.glyph, color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
        tmp10 = hasOwnProperty;
        tmp11 = hasOwnProperty(AppsIcon.AppsIcon, obj3);
      }
      const items1 = [tmp11, tmp10(React4, { style: tmp5.border, pointerEvents: "none" })];
      obj.children = items1;
      return timestampProducer(React4, obj);
    };
