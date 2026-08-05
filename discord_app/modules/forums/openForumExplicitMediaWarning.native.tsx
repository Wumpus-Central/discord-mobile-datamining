// discord_app/modules/forums/openForumExplicitMediaWarning.native.tsx
import { jsx } from "jsxProd";

const result = require("ForumExplicitMediaAlert").fileFinishedImporting("modules/forums/openForumExplicitMediaWarning.native.tsx");

export default function openForumExplicitMediaWarning(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  let obj = require("../../actions/native/AlertActionCreators.tsx");
  obj = {
    importer() {
      return callback(outer1_2[3])(outer1_2[2], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.channelId = closure_0;
          obj.messageId = outer1_1;
          return outer2_3(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};