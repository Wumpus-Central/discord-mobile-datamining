// === Module 14333: images ===

// Module 14333 (images)
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ImageUtils from "ImageUtils" /* 1481 */;
import Constants2 from "Constants" /* 5323 */;
import RPCErrorDefault from "RPCError" /* 9059 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9062 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const RPC_LOCAL_SCOPE = Constants2.RPC_LOCAL_SCOPE;
const RPCErrors = Constants.RPCErrors;
let obj = {
  scope: RPC_LOCAL_SCOPE,
  validation(string) {
    let requiredResult1;
    let requiredResult2;
    let requiredResult3;
    let stringResult1;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { type: requiredResult1.valid(["user"]), id: stringResult1.required(), format: requiredResult2.valid(["png", "webp", "jpg"]), size: requiredResult3.valid([16, 32, 64, 128, 256, 512, 1024]) };
    const keys = obj.required().keys;
    obj.required();
    const stringResult = string.string();
    requiredResult1 = stringResult.required();
    stringResult1 = string.string();
    const stringResult2 = string.string();
    requiredResult2 = stringResult2.required();
    const numberResult = string.number();
    requiredResult3 = numberResult.required();
    return keys(obj2);
  },
  handler(args) {
    let format;
    let id;
    args = args.args;
    ({ id, format } = args);
    const type = args.type;
    if (format === undefined) {
      format = "png";
    }
    let num = args.size;
    if (num === undefined) {
      num = 128;
    }
    let text;
    if ("user" === type) {
      const user = UserStore.getUser(id);
      if (null == user) {
        const _HermesInternal = HermesInternal;
        const self3 = this;
        const self4 = this;
        const obj2 = { errorCode: RPCErrors.INVALID_USER };
        const tmp12 = RPCErrorDefault;
        const tmp122 = new tmp12(obj2, "Invalid user id: " + id);
        throw tmp122;
      } else {
        const obj3 = AvatarUtilsDefault;
        const userAvatarURL = obj3.getUserAvatarURL(user, false, num, format);
        const _window = window;
        text = userAvatarURL;
        const tmp2 = null != CDN_HOST && -1 !== userAvatarURL.indexOf(CDN_HOST);
        if (tmp2) {
          text = `${arr}&_=`;
        }
      }
    }
    if (null == text) {
      let obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const self = this;
      const self2 = this;
      const tmp8 = new RPCErrorDefault(obj, "No valid type.");
      throw tmp8;
    } else {
      const _fetch = fetch;
      const response = fetch(text);
      const nextPromise = response.then((blob) => blob.blob());
      const nextPromise1 = nextPromise.then((result) => {
        const obj = ImageUtils;
        return obj.readFileAsBase64(result);
      });
      return nextPromise1.then((data_url) => ({ data_url }));
    }
  }
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/images.tsx");

export default { [Constants.RPCCommands.GET_IMAGE]: obj };