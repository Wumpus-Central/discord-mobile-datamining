// discord_app/modules/media_keyboard/native/useUploadDisabled.tsx
import FakePlaceholderPrivateChannel from "../../channel/FakePlaceholderPrivateChannel.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const DraftType = DraftStore.DraftType;
({ MAX_UPLOAD_COUNT: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore, UploadAttachmentStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          let tmp = UploadAttachmentStore.getUploads(id.id, DraftType.ChannelMessage).length >= hasOwnProperty;
          if (!tmp) {
            let tmp4 = id.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if (!tmp4) {
              let isPrivateResult = id.isPrivate();
              if (!isPrivateResult) {
                isPrivateResult = PermissionStore.can(constants.ATTACH_FILES, id);
              }
              tmp4 = !isPrivateResult;
            }
            tmp = tmp4;
          }
          return tmp;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp7);
    }
  : (arg0) => {
      _require = arg0;
      const items = [PermissionStore, UploadAttachmentStore];
      return require("initialize").useStateFromStores(items, () => {
        let tmp = UploadAttachmentStore.getUploads(id.id, DraftType.ChannelMessage).length >= hasOwnProperty;
        if (!tmp) {
          let tmp4 = id.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
          if (!tmp4) {
            let isPrivateResult = id.isPrivate();
            if (!isPrivateResult) {
              isPrivateResult = PermissionStore.can(constants.ATTACH_FILES, id);
            }
            tmp4 = !isPrivateResult;
          }
          tmp = tmp4;
        }
        return tmp;
      });
    };
