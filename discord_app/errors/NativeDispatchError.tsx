// === Module 4464: NativeDispatchError ===

// Module 4464 (NativeDispatchError)
import Constants from "Constants" /* 4465 */;
import size from "module_2" /* 2 */;

const DispatchErrorCodes = Constants.DispatchErrorCodes;
const result = size.fileFinishedImporting("errors/NativeDispatchError.tsx");
class NativeDispatchError {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.raw = global;
    if (null != global.code) {
      obj.code = global.code;
    }
    if (null != global.uuid) {
      obj.uuid = global.uuid;
    }
    if (null != global.application_id) {
      obj.applicationId = global.application_id;
    }
    if (null != global.branch_id) {
      obj.branchId = global.branch_id;
    }
    if (null != global.context) {
      obj.context = global.context;
    } else {
      obj.context = {};
    }
    return obj;
  }
}
Object.defineProperty(NativeDispatchError.prototype, "displayMessage", {
  get: function displayMessage() {
    const self = this;
    if (null == this.code) {
      const intl14 = require("util").intl;
      return intl14.string(require("util").t["5NMPSS"]);
    } else {
      const path = self.context.path;
      const code = self.code;
      if (DispatchErrorCodes.DISK_LOW === code) {
        ({ available, required } = self.context);
        const obj5 = require("FileSizeUtils");
        const formatSizeResult = require("FileSizeUtils").formatSize(available, { useKibibytes: true });
        const obj6 = require("FileSizeUtils");
        const intl13 = require("util").intl;
        let obj = { required: require("FileSizeUtils").formatSize(required, { useKibibytes: true }), available: formatSizeResult };
        return intl13.formatToPlainString(require("util").t["2DR5dl"], obj);
      } else if (DispatchErrorCodes.POST_INSTALL_FAILED === code) {
        const intl12 = require("util").intl;
        obj = { name: self.context.name };
        return intl12.formatToPlainString(require("util").t.hP0B3A, obj);
      } else if (DispatchErrorCodes.FILE_NAME_TOO_LONG === code) {
        const intl11 = require("util").intl;
        return intl11.string(require("util").t["FWht5+"]);
      } else if (DispatchErrorCodes.POST_INSTALL_CANCELLED === code) {
        const intl10 = require("util").intl;
        return intl10.string(require("util").t["9CNxFJ"]);
      } else if (DispatchErrorCodes.IO_PERMISSION_DENIED === code) {
        const intl9 = require("util").intl;
        return intl9.string(require("util").t["PJx5+Z"]);
      } else if (DispatchErrorCodes.NO_MANIFESTS === code) {
        const intl8 = require("util").intl;
        return intl8.string(require("util").t.gLM395);
      } else if (DispatchErrorCodes.NOT_ENTITLED === code) {
        const intl7 = require("util").intl;
        return intl7.string(require("util").t.TLCR43);
      } else {
        if (DispatchErrorCodes.NOT_DIRECTORY !== code) {
          if (DispatchErrorCodes.DISK_PERMISSION_DENIED !== code) {
            if (DispatchErrorCodes.INVALID_DRIVE === code) {
              const intl5 = require("util").intl;
              const obj1 = { path };
              return intl5.formatToPlainString(require("util").t["08L2TG"], obj1);
            } else if (DispatchErrorCodes.APPLICATION_LOCK_FAILED === code) {
              const intl4 = require("util").intl;
              return intl4.string(require("util").t.RDYCUV);
            } else if (DispatchErrorCodes.DISK_FULL === code) {
              const intl3 = require("util").intl;
              return intl3.string(require("util").t.mojtDJ);
            } else {
              if (DispatchErrorCodes.API_ERROR !== code) {
                if (DispatchErrorCodes.MAX_REQUEST_RETRIES_EXCEEDED !== code) {
                  const intl = require("util").intl;
                  obj = { code: null };
                  const _HermesInternal = HermesInternal;
                  obj.code = "" + self.code;
                  return intl.formatToPlainString(require("util").t.r477WB, obj);
                }
              }
              const intl2 = require("util").intl;
              return intl2.string(require("util").t.OXD41D);
            }
          }
        }
        const intl6 = require("util").intl;
        const obj2 = { path };
        return intl6.formatToPlainString(require("util").t.EjWbO6, obj2);
      }
    }
  },
  set: undefined
});

export default NativeDispatchError;