// === Module 9585: openIgnoreThermalStateAlert ===

// Module 9585 (openIgnoreThermalStateAlert)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  closure_0 = arg0;
  let obj = {
    importer() {
      return asyncRequireImpl(9586, dependencyMap.paths).then((IgnoreThermalStateAlert) => {
        IgnoreThermalStateAlert = IgnoreThermalStateAlert.IgnoreThermalStateAlert;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onConfirm = onConfirm;
          return <IgnoreThermalStateAlert />;
        };
      });
    }
  };
  obj.openLazy(obj);
};