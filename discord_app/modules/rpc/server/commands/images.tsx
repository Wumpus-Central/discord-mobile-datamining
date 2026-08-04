// discord_app/modules/rpc/server/commands/images.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

const require = arg1;
const RPCErrors = ME.RPCErrors;
let obj = {
  scope: require("RPC_SCOPE_CONFIG").RPC_LOCAL_SCOPE,
  validation(string) {
    let obj = importDefault(10643)(string);
    obj = { type: null, id: null, format: null, size: null };
    const requiredResult = obj.required();
    const stringResult = string.string();
    obj[0] = string.string().required().valid(["user"]);
    const requiredResult1 = string.string().required();
    obj[1] = string.string().required();
    const stringResult1 = string.string();
    const stringResult2 = string.string();
    obj[2] = string.string().required().valid(["png", "webp", "jpg"]);
    const requiredResult2 = string.string().required();
    const numberResult = string.number();
    obj[3] = string.number().required().valid([16, 32, 64, 128, 256, 512, 1024]);
    return requiredResult.keys(obj);
  },
  handler(args) {
    let format;
    let id;
    args = args.args;
    ({ id, format } = args);
    if (format === undefined) {
      format = "png";
    }
    let num = args.size;
    if (num === undefined) {
      num = 128;
    }
    let text;
    if ("user" === args.type) {
      user = user.getUser(id);
      if (null == user) {
        let obj = { errorCode: null };
        obj[0] = RPCErrors.INVALID_USER;
        const _HermesInternal = HermesInternal;
        let tmp14 = importDefault(10640);
        tmp14 = new tmp14(obj, "Invalid user id: " + id);
        throw tmp14;
      } else {
        const obj3 = importDefault(1416);
        const userAvatarURL = obj3.getUserAvatarURL(user, false, num, format);
        const _window = window;
        let tmp2 = null != CDN_HOST;
        if (tmp2) {
          tmp2 = -1 !== userAvatarURL.indexOf(CDN_HOST);
        }
        text = userAvatarURL;
        if (tmp2) {
          text = `${arr}&_=`;
        }
      }
    }
    if (null == text) {
      obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp10 = new importDefault(10640)(obj, "No valid type.");
      throw tmp10;
    } else {
      const _fetch = fetch;
      const response = fetch(text);
      const nextPromise = response.then((blob) => blob.blob());
      return response.then((blob) => blob.blob()).then((arg0) => callback(table[6]).readFileAsBase64(arg0)).then((data_url) => ({ data_url }));
    }
  }
};
const result = require("ME").fileFinishedImporting("modules/rpc/server/commands/images.tsx");

export default { [ME.RPCCommands.GET_IMAGE]: obj };