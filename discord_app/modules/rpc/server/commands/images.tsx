// === Module 14749: images ===

// Module 14749 (images)
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ImageUtils from "ImageUtils" /* 1475 */;
import RPCErrorDefault from "RPCError" /* 9580 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9583 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Constants = fn(1074);
const RPCErrors = Constants.RPCErrors;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/images.tsx");

export default {
  [Constants.RPCCommands.GET_IMAGE]: {
    scope: fn(4660).RPC_LOCAL_SCOPE,
    validation(string) {
      const obj = createRpcJoiSchemaObjectDefault(string);
      const obj2 = { type: null, id: null, format: null, size: null };
      const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
      const stringResult = string.string();
      obj2.type = string.string().required().valid(["user"]);
      const requiredResult1 = string.string().required();
      obj2.id = string.string().required();
      const stringResult1 = string.string();
      const stringResult2 = string.string();
      obj2.format = string.string().required().valid(["png", "webp", "jpg"]);
      const requiredResult2 = string.string().required();
      const numberResult = string.number();
      obj2.size = string.number().required().valid([16, 32, 64, 128, 256, 512, 1024]);
      return requiredResult.keys(obj2);
    },
    handler(args) {
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
        const user = UserStore.getUser(id);
        if (null == user) {
          const obj2 = { errorCode: RPCErrors.INVALID_USER };
          const _HermesInternal = HermesInternal;
          const tmp142 = new RPCErrorDefault(obj2, "Invalid user id: " + id);
          throw tmp142;
        } else {
          const obj3 = AvatarUtilsDefault;
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
        const obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const tmp10 = new RPCErrorDefault(obj, "No valid type.");
        throw tmp10;
      } else {
        const _fetch = fetch;
        const response = fetch(text);
        const nextPromise = response.then((blob) => blob.blob());
        return response.then((blob) => blob.blob()).then((result) => ImageUtils.readFileAsBase64(result)).then((data_url) => ({ data_url }));
      }
    }
  }
};