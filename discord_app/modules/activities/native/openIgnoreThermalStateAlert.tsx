// discord_app/modules/activities/native/openIgnoreThermalStateAlert.tsx
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export function openIgnoreThermalStateAlert(arg0) {
  closure_0 = arg0;
  const obj2 = { importer: null, isDismissable: false };
  importDefault = asyncGeneratorStep(async () => {
    await tmp2(paths[5])(paths[4], paths.paths);
    closure_128_0 = value.IgnoreThermalStateAlert;
    return (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onConfirm = onConfirm;
      return <closure_1_0 />;
    };
  });
  obj2.importer = function importer() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  actions_AlertActionCreatorsDefault.openLazy(obj2);
}
