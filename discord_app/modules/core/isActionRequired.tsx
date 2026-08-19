// discord_app/modules/core/isActionRequired.tsx
import handleUpdateUser from "../auth/LoginRequiredActionStore.tsx";
import handleRequiredAction from "../../stores/UserRequiredActionStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/core/isActionRequired.tsx");

export default function isActionRequired() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_0;
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = closure_1;
  }
  let tmp = null != obj2.getAction();
  if (!tmp) {
    const _Object = Object;
    tmp = Object.keys(obj.getState()).length > 0;
  }
  return tmp;
};