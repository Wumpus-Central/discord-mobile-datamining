// === Module 12737: openForumExplicitMediaWarning ===

// Module 12737 (openForumExplicitMediaWarning)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import _modDef4656 from "module_4656" /* 4656 */;

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