// discord_app/modules/activity_status/native/ActivityStatusIcon.tsx
import c from "../../../../_runtime/00576_c.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["icon", "style"];
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({ icon: { flexShrink: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatusIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityStatusIcon(arg0) {
      const cResult = c.c(11);
      if (cResult[0] !== arg0) {
        ({ icon, style } = arg0);
        const tmp7 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = icon;
        cResult[2] = tmp7;
        cResult[3] = style;
        let tmp4 = style;
        let tmp3 = tmp7;
        let tmp2 = icon;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
        tmp4 = cResult[3];
      }
      const tmp8 = closure_5();
      if (cResult[4] === tmp4) {
        if (cResult[5] === tmp8.icon) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === tmp2) {
          if (cResult[8] === tmp3) {
            if (cResult[9] === tmp9) {
              let tmp10 = cResult[10];
            }
            return tmp10;
          }
        }
        const obj2 = { size: "xxs", style: tmp9, color: "status-positive" };
        const merged = Object.assign(tmp3);
        const tmp15 = <tmp2 size="xxs" style={tmp9} color="status-positive" />;
        cResult[7] = tmp2;
        cResult[8] = tmp3;
        cResult[9] = tmp9;
        cResult[10] = tmp15;
        tmp10 = tmp15;
      }
      const items = [tmp8.icon, tmp4];
      cResult[4] = tmp4;
      cResult[5] = tmp8.icon;
      cResult[6] = items;
      tmp9 = items;
    }
  : function ActivityStatusIcon(arg0) {
      ({ icon, style } = arg0);
      const merged = Object.assign(arg0, Object.assign({ icon: 0, style: 0 }));
      const obj = { size: "xxs", style: null, color: "status-positive" };
      const items = [closure_5().icon, style];
      obj.style = items;
      const merged1 = Object.assign(merged);
      return <icon size="xxs" style={null} color="status-positive" />;
    };
