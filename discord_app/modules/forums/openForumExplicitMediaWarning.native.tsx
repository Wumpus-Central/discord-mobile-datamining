// discord_app/modules/forums/openForumExplicitMediaWarning.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import _modDef4656 from "../../actions/native/AlertActionCreators.tsx";

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/forums/openForumExplicitMediaWarning.native.tsx");

export default function openForumExplicitMediaWarning(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  let obj = {
    importer() {
      return callback(dependencyMap[3])(dependencyMap[2], dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.channelId = closure_0;
          obj.messageId = closure_1_1;
          return closure_2_3(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};