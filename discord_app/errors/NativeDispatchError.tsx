// discord_app/errors/NativeDispatchError.tsx
import Constants from "../modules/rpc/Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const DispatchErrorCodes = Constants.DispatchErrorCodes;
const result = size.fileFinishedImporting("errors/NativeDispatchError.tsx");
class NativeDispatchError {
  constructor(raw) {
    const obj = Object.create(new.target.prototype);
    obj.raw = raw;
    if (null != raw.code) {
      obj.code = raw.code;
    }
    if (null != raw.uuid) {
      obj.uuid = raw.uuid;
    }
    if (null != raw.application_id) {
      obj.applicationId = raw.application_id;
    }
    if (null != raw.branch_id) {
      obj.branchId = raw.branch_id;
    }
    if (null != raw.context) {
      obj.context = raw.context;
    } else {
      obj.context = {};
    }
    return obj;
  }
}
Object.defineProperty(NativeDispatchError.prototype, "displayMessage", {
  get: function displayMessage() {
    let available;
    let required;
    const self = this;
    if (null == this.code) {
      const intl14 = require("intl").intl;
      return intl14.string(require("intl").t["5NMPSS"]);
    } else {
      const path = self.context.path;
      const code = self.code;
      if (DispatchErrorCodes.DISK_LOW === code) {
        ({ available, required } = self.context);
        const obj5 = require("FileSizeUtils");
        const formatSizeResult = obj5.formatSize(available, { useKibibytes: true });
        const obj6 = require("FileSizeUtils");
        const formatSizeResult1 = obj6.formatSize(required, { useKibibytes: true });
        const intl13 = require("intl").intl;
        const obj2 = { required: formatSizeResult1, available: formatSizeResult };
        return intl13.formatToPlainString(require("intl").t["2DR5dl"], obj2);
      } else if (DispatchErrorCodes.POST_INSTALL_FAILED === code) {
        const name = self.context.name;
        const intl12 = require("intl").intl;
        const obj3 = { name };
        return intl12.formatToPlainString(require("intl").t.hP0B3A, obj3);
      } else if (DispatchErrorCodes.FILE_NAME_TOO_LONG === code) {
        const intl11 = require("intl").intl;
        return intl11.string(require("intl").t["FWht5+"]);
      } else if (DispatchErrorCodes.POST_INSTALL_CANCELLED === code) {
        const intl10 = require("intl").intl;
        return intl10.string(require("intl").t["9CNxFJ"]);
      } else if (DispatchErrorCodes.IO_PERMISSION_DENIED === code) {
        const intl9 = require("intl").intl;
        return intl9.string(require("intl").t["PJx5+Z"]);
      } else if (DispatchErrorCodes.NO_MANIFESTS === code) {
        const intl8 = require("intl").intl;
        return intl8.string(require("intl").t.gLM395);
      } else if (DispatchErrorCodes.NOT_ENTITLED === code) {
        const intl7 = require("intl").intl;
        return intl7.string(require("intl").t.TLCR43);
      } else {
        if (DispatchErrorCodes.NOT_DIRECTORY !== code) {
          if (DispatchErrorCodes.DISK_PERMISSION_DENIED !== code) {
            if (DispatchErrorCodes.INVALID_DRIVE === code) {
              const intl5 = require("intl").intl;
              const obj4 = { path };
              return intl5.formatToPlainString(require("intl").t["08L2TG"], obj4);
            } else if (DispatchErrorCodes.APPLICATION_LOCK_FAILED === code) {
              const intl4 = require("intl").intl;
              return intl4.string(require("intl").t.RDYCUV);
            } else if (DispatchErrorCodes.DISK_FULL === code) {
              const intl3 = require("intl").intl;
              return intl3.string(require("intl").t.mojtDJ);
            } else {
              if (DispatchErrorCodes.API_ERROR !== code) {
                if (DispatchErrorCodes.MAX_REQUEST_RETRIES_EXCEEDED !== code) {
                  const intl = require("intl").intl;
                  const formatToPlainString = intl.formatToPlainString;
                  const _HermesInternal = HermesInternal;
                  const obj = { code: "" + self.code };
                  const r477WB = require("intl").t.r477WB;
                  return formatToPlainString(r477WB, obj);
                }
              }
              const intl2 = require("intl").intl;
              return intl2.string(require("intl").t.OXD41D);
            }
          }
        }
        const intl6 = require("intl").intl;
        const obj7 = { path };
        return intl6.formatToPlainString(require("intl").t.EjWbO6, obj7);
      }
    }
  },
  set: undefined,
});

export default NativeDispatchError;
