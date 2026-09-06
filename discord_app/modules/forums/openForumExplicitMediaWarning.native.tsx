// discord_app/modules/forums/openForumExplicitMediaWarning.native.tsx
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/openForumExplicitMediaWarning.native.tsx");

export default function openForumExplicitMediaWarning(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  let obj = {
    importer() {
      return asyncRequireImpl(9395, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.channelId = channelId;
          obj.messageId = messageId;
          return <closure_0 />;
        };
      });
    },
  };
  obj.openLazy(obj);
}
