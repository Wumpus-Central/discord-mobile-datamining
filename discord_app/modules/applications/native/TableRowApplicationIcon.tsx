// discord_app/modules/applications/native/TableRowApplicationIcon.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { icon: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.icon = size;
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/applications/native/TableRowApplicationIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function TableRowApplicationIcon(application) {
      const cResult = c.c(6);
      application = application.application;
      const tmp3 = closure_4();
      if (cResult[0] === application.icon) {
        if (cResult[1] === application.id) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === tmp3.icon) {
          if (cResult[4] === tmp4) {
            let tmp6 = cResult[5];
          }
          return tmp6;
        }
        const obj3 = { source: tmp4, style: tmp3.icon };
        const tmp9 = jsx(FastImageDefault, { source: tmp4, style: tmp3.icon });
        cResult[3] = tmp3.icon;
        cResult[4] = tmp4;
        cResult[5] = tmp9;
        tmp6 = tmp9;
      }
      const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({
        id: application.id,
        icon: application.icon,
        size: 32,
      });
      cResult[0] = application.icon;
      cResult[1] = application.id;
      cResult[2] = applicationIconSource;
      tmp4 = applicationIconSource;
      const obj4 = { id: application.id, icon: application.icon, size: 32 };
    }
  : function TableRowApplicationIcon(application) {
      application = application.application;
      const obj = { source: null, style: null };
      const tmp = closure_4();
      obj.source = AvatarUtilsDefault.getApplicationIconSource({
        id: application.id,
        icon: application.icon,
        size: 32,
      });
      obj.style = tmp.icon;
      return <tmp2 source={null} style={null} />;
    };
