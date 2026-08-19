// discord_app/errors/NativeDispatchError.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import RPC_SCOPE_CONFIG from "../modules/rpc/Constants.tsx";
import { getSystemLocale } from "../intl/index.native.tsx";
import { formatSize } from "../utils/FileSizeUtils.tsx";

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
      const intl14 = getSystemLocale /* getSystemLocale */.intl;
      return intl14.string(getSystemLocale /* getSystemLocale */.t["5NMPSS"]);
    } else {
      const path = self.context.path;
      const code = self.code;
      if (DispatchErrorCodes.DISK_LOW === code) {
        ({ available, required } = self.context);
        const obj5 = formatSize;
        const formatSizeResult = formatSize /* formatSize */.formatSize(available, { useKibibytes: true });
        const obj6 = formatSize;
        const intl13 = getSystemLocale /* getSystemLocale */.intl;
        let obj = { required: null, available: null };
        obj[0] = formatSize /* formatSize */.formatSize(required, { useKibibytes: true });
        obj[1] = formatSizeResult;
        return intl13.formatToPlainString(getSystemLocale /* getSystemLocale */.t["2DR5dl"], obj);
      } else if (DispatchErrorCodes.POST_INSTALL_FAILED === code) {
        const intl12 = getSystemLocale /* getSystemLocale */.intl;
        obj = { name: null };
        obj[0] = self.context.name;
        return intl12.formatToPlainString(getSystemLocale /* getSystemLocale */.t.hP0B3A, obj);
      } else if (DispatchErrorCodes.FILE_NAME_TOO_LONG === code) {
        const intl11 = getSystemLocale /* getSystemLocale */.intl;
        return intl11.string(getSystemLocale /* getSystemLocale */.t["FWht5+"]);
      } else if (DispatchErrorCodes.POST_INSTALL_CANCELLED === code) {
        const intl10 = getSystemLocale /* getSystemLocale */.intl;
        return intl10.string(getSystemLocale /* getSystemLocale */.t["9CNxFJ"]);
      } else if (DispatchErrorCodes.IO_PERMISSION_DENIED === code) {
        const intl9 = getSystemLocale /* getSystemLocale */.intl;
        return intl9.string(getSystemLocale /* getSystemLocale */.t["PJx5+Z"]);
      } else if (DispatchErrorCodes.NO_MANIFESTS === code) {
        const intl8 = getSystemLocale /* getSystemLocale */.intl;
        return intl8.string(getSystemLocale /* getSystemLocale */.t.gLM395);
      } else if (DispatchErrorCodes.NOT_ENTITLED === code) {
        const intl7 = getSystemLocale /* getSystemLocale */.intl;
        return intl7.string(getSystemLocale /* getSystemLocale */.t.TLCR43);
      } else {
        if (DispatchErrorCodes.NOT_DIRECTORY !== code) {
          if (DispatchErrorCodes.DISK_PERMISSION_DENIED !== code) {
            if (DispatchErrorCodes.INVALID_DRIVE === code) {
              const intl5 = getSystemLocale /* getSystemLocale */.intl;
              obj1 = { path: null };
              obj1[0] = path;
              return intl5.formatToPlainString(getSystemLocale /* getSystemLocale */.t["08L2TG"], obj1);
            } else if (DispatchErrorCodes.APPLICATION_LOCK_FAILED === code) {
              const intl4 = getSystemLocale /* getSystemLocale */.intl;
              return intl4.string(getSystemLocale /* getSystemLocale */.t.RDYCUV);
            } else if (DispatchErrorCodes.DISK_FULL === code) {
              const intl3 = getSystemLocale /* getSystemLocale */.intl;
              return intl3.string(getSystemLocale /* getSystemLocale */.t.mojtDJ);
            } else {
              if (DispatchErrorCodes.API_ERROR !== code) {
                if (DispatchErrorCodes.MAX_REQUEST_RETRIES_EXCEEDED !== code) {
                  const intl = getSystemLocale /* getSystemLocale */.intl;
                  obj = { code: null };
                  const _HermesInternal = HermesInternal;
                  obj[0] = "" + self.code;
                  return intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.r477WB, obj);
                }
              }
              const intl2 = getSystemLocale /* getSystemLocale */.intl;
              return intl2.string(getSystemLocale /* getSystemLocale */.t.OXD41D);
            }
          }
        }
        const intl6 = getSystemLocale /* getSystemLocale */.intl;
        const obj2 = { path: null };
        obj2[0] = path;
        return intl6.formatToPlainString(getSystemLocale /* getSystemLocale */.t.EjWbO6, obj2);
      }
    }
  },
  set: undefined
});

export default NativeDispatchError;