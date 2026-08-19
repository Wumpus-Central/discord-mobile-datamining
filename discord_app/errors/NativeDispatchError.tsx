// === Module 4276: displayMessage ===

// Module 4276 (displayMessage)
import obj132 from "obj132" /* 2 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4277 */;

const DispatchErrorCodes = RPC_SCOPE_CONFIG.DispatchErrorCodes;
const result = obj132.fileFinishedImporting("errors/NativeDispatchError.tsx");
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
      const intl14 = require(1236) /* getSystemLocale */.intl;
      return intl14.string(require(1236) /* getSystemLocale */.t["5NMPSS"]);
    } else {
      const path = self.context.path;
      const code = self.code;
      if (DispatchErrorCodes.DISK_LOW === code) {
        ({ available, required } = self.context);
        const obj5 = require(4269) /* formatSize */;
        const formatSizeResult = require(4269) /* formatSize */.formatSize(available, { useKibibytes: true });
        const obj6 = require(4269) /* formatSize */;
        const intl13 = require(1236) /* getSystemLocale */.intl;
        let obj = { required: null, available: null };
        obj[0] = require(4269) /* formatSize */.formatSize(required, { useKibibytes: true });
        obj[1] = formatSizeResult;
        return intl13.formatToPlainString(require(1236) /* getSystemLocale */.t["2DR5dl"], obj);
      } else if (DispatchErrorCodes.POST_INSTALL_FAILED === code) {
        const intl12 = require(1236) /* getSystemLocale */.intl;
        obj = { name: null };
        obj[0] = self.context.name;
        return intl12.formatToPlainString(require(1236) /* getSystemLocale */.t.hP0B3A, obj);
      } else if (DispatchErrorCodes.FILE_NAME_TOO_LONG === code) {
        const intl11 = require(1236) /* getSystemLocale */.intl;
        return intl11.string(require(1236) /* getSystemLocale */.t["FWht5+"]);
      } else if (DispatchErrorCodes.POST_INSTALL_CANCELLED === code) {
        const intl10 = require(1236) /* getSystemLocale */.intl;
        return intl10.string(require(1236) /* getSystemLocale */.t["9CNxFJ"]);
      } else if (DispatchErrorCodes.IO_PERMISSION_DENIED === code) {
        const intl9 = require(1236) /* getSystemLocale */.intl;
        return intl9.string(require(1236) /* getSystemLocale */.t["PJx5+Z"]);
      } else if (DispatchErrorCodes.NO_MANIFESTS === code) {
        const intl8 = require(1236) /* getSystemLocale */.intl;
        return intl8.string(require(1236) /* getSystemLocale */.t.gLM395);
      } else if (DispatchErrorCodes.NOT_ENTITLED === code) {
        const intl7 = require(1236) /* getSystemLocale */.intl;
        return intl7.string(require(1236) /* getSystemLocale */.t.TLCR43);
      } else {
        if (DispatchErrorCodes.NOT_DIRECTORY !== code) {
          if (DispatchErrorCodes.DISK_PERMISSION_DENIED !== code) {
            if (DispatchErrorCodes.INVALID_DRIVE === code) {
              const intl5 = require(1236) /* getSystemLocale */.intl;
              obj1 = { path: null };
              obj1[0] = path;
              return intl5.formatToPlainString(require(1236) /* getSystemLocale */.t["08L2TG"], obj1);
            } else if (DispatchErrorCodes.APPLICATION_LOCK_FAILED === code) {
              const intl4 = require(1236) /* getSystemLocale */.intl;
              return intl4.string(require(1236) /* getSystemLocale */.t.RDYCUV);
            } else if (DispatchErrorCodes.DISK_FULL === code) {
              const intl3 = require(1236) /* getSystemLocale */.intl;
              return intl3.string(require(1236) /* getSystemLocale */.t.mojtDJ);
            } else {
              if (DispatchErrorCodes.API_ERROR !== code) {
                if (DispatchErrorCodes.MAX_REQUEST_RETRIES_EXCEEDED !== code) {
                  const intl = require(1236) /* getSystemLocale */.intl;
                  obj = { code: null };
                  const _HermesInternal = HermesInternal;
                  obj[0] = "" + self.code;
                  return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.r477WB, obj);
                }
              }
              const intl2 = require(1236) /* getSystemLocale */.intl;
              return intl2.string(require(1236) /* getSystemLocale */.t.OXD41D);
            }
          }
        }
        const intl6 = require(1236) /* getSystemLocale */.intl;
        const obj2 = { path: null };
        obj2[0] = path;
        return intl6.formatToPlainString(require(1236) /* getSystemLocale */.t.EjWbO6, obj2);
      }
    }
  },
  set: undefined
});

export default NativeDispatchError;