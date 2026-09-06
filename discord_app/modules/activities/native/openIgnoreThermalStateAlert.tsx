// discord_app/modules/activities/native/openIgnoreThermalStateAlert.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
    },
  };
  obj.openLazy(obj);
};
