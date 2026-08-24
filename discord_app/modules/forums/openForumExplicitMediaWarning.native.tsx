// === Module 12792: openForumExplicitMediaWarning ===

// Module 12792 (openForumExplicitMediaWarning)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import _modDef4662 from "module_4662" /* 4662 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/forums/openForumExplicitMediaWarning.native.tsx");

export default function openForumExplicitMediaWarning(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  let obj = _modDef4662;
  obj = {
    importer() {
      return callback(closure_1_2[3])(closure_1_2[2], closure_1_2.paths).then((arg0) => {
        closure_0 = arg0.default;
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