// discord_app/modules/forums/native/posts/ForumPostPinIcon.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import _modDef11696 from "../../../../../_runtime/metro/11696__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { pin: null, pinIcon: null };
let size = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
  width: 23,
  height: 23,
  marginEnd: 4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.pin = size;
const size1 = { height: 14, width: 14, tintColor: nativeDefault.colors.WHITE };
obj2.pinIcon = size1;
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostPinIcon(containerStyle) {
      const cResult = c.c(8);
      containerStyle = containerStyle.containerStyle;
      const tmp4 = closure_5();
      if (cResult[0] === containerStyle) {
        if (cResult[1] === tmp4.pin) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] !== tmp4.pinIcon) {
          const obj2 = { source: _modDef11696, style: tmp4.pinIcon };
          const tmp9 = jsx(native.Icon, { source: _modDef11696, style: tmp4.pinIcon });
          cResult[3] = tmp4.pinIcon;
          cResult[4] = tmp9;
          let tmp6 = tmp9;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp6) {
            let tmp10 = cResult[7];
          }
          return tmp10;
        }
        const obj3 = { style: tmp5, children: tmp6 };
        const tmp13 = <View style={tmp5}>{tmp6}</View>;
        cResult[5] = tmp5;
        cResult[6] = tmp6;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      const items = [tmp4.pin, containerStyle];
      cResult[0] = containerStyle;
      cResult[1] = tmp4.pin;
      cResult[2] = items;
      tmp5 = items;
    }
  : function ForumPostPinIcon(containerStyle) {
      const tmp = closure_5();
      const obj = { style: null, children: jsx(native.Icon, { source: _modDef11696, style: tmp.pinIcon }) };
      const items = [tmp.pin, containerStyle.containerStyle];
      obj.style = items;
      return <View style={null}>{jsx(native.Icon, { source: _modDef11696, style: tmp.pinIcon })}</View>;
    };
