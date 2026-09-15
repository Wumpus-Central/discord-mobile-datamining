// === Module 9526: openForumExplicitMediaWarning ===

// Module 9526 (openForumExplicitMediaWarning)
import jsxProd from "jsxProd" /* 21 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4984 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/openForumExplicitMediaWarning.native.tsx");

export default function openForumExplicitMediaWarning(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(9527, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.channelId = channelId;
          obj.messageId = messageId;
          return <closure_0 />;
        };
      });
    }
  });
};