// discord_app/modules/forums/openForumExplicitMediaWarning.native.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

let importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/openForumExplicitMediaWarning.native.tsx");

export default function openForumExplicitMediaWarning(arg0, arg1) {
  let closure_1;
  let closure_0 = arg0;
  importDefault = arg1;
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      let channelId;
      let messageId;
      const promise = asyncRequire(8917, dependencyMap.paths);
      return promise.then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <closure_0 channelId={channelId} messageId={messageId} />;
        };
      });
    },
    isDismissable: false,
  };
  obj.openLazy(obj2);
}
