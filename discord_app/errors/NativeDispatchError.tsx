// discord_app/errors/NativeDispatchError.tsx
import { DispatchErrorCodes } from "RPC_SCOPE_CONFIG";
import { getSystemLocale } from "../intl/index.native.tsx";
import { formatSize } from "../utils/FileSizeUtils.tsx";

const result = require("formatSize").fileFinishedImporting("errors/NativeDispatchError.tsx");
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
    let available;
    let required;
    const self = this;
    if (null == this.code) {
      const intl14 = getSystemLocale /* getSystemLocale */.intl;
      return intl14.string(getSystemLocale /* getSystemLocale */.t["5NMPSS"]);
    } else {
      const path = self.context.path;
      const code = self.code;
      if (DispatchErrorCodes.DISK_LOW === code) {
        ({ available, required } = self.context);
        const obj5 = formatSize /* formatSize */;
        const formatSizeResult = formatSize /* formatSize */.formatSize(available, { useKibibytes: true });
        const obj6 = formatSize /* formatSize */;
        const intl13 = getSystemLocale /* getSystemLocale */.intl;
        let obj = { required: null, available: null };
        obj[0] = formatSize /* formatSize */.formatSize(required, { useKibibytes: true });
        obj[1] = formatSizeResult;
        return intl13.formatToPlainString(getSystemLocale /* getSystemLocale */.t["2DR5dl"], obj);
      } else if (tmp32.POST_INSTALL_FAILED === code) {
        const intl12 = getSystemLocale /* getSystemLocale */.intl;
        obj = { name: null };
        obj[0] = self.context.name;
        return intl12.formatToPlainString(getSystemLocale /* getSystemLocale */.t.hP0B3A, obj);
      } else if (tmp32.FILE_NAME_TOO_LONG === code) {
        const intl11 = getSystemLocale /* getSystemLocale */.intl;
        return intl11.string(getSystemLocale /* getSystemLocale */.t["FWht5+"]);
      } else if (tmp32.POST_INSTALL_CANCELLED === code) {
        const intl10 = getSystemLocale /* getSystemLocale */.intl;
        return intl10.string(getSystemLocale /* getSystemLocale */.t["9CNxFJ"]);
      } else if (tmp32.IO_PERMISSION_DENIED === code) {
        const intl9 = getSystemLocale /* getSystemLocale */.intl;
        return intl9.string(getSystemLocale /* getSystemLocale */.t["PJx5+Z"]);
      } else if (tmp32.NO_MANIFESTS === code) {
        const intl8 = getSystemLocale /* getSystemLocale */.intl;
        return intl8.string(getSystemLocale /* getSystemLocale */.t.gLM395);
      } else if (tmp32.NOT_ENTITLED === code) {
        const intl7 = getSystemLocale /* getSystemLocale */.intl;
        return intl7.string(getSystemLocale /* getSystemLocale */.t.TLCR43);
      } else {
        if (tmp32.NOT_DIRECTORY !== code) {
          if (tmp32.DISK_PERMISSION_DENIED !== code) {
            if (tmp32.INVALID_DRIVE === code) {
              const intl5 = getSystemLocale /* getSystemLocale */.intl;
              const obj1 = { path: null };
              obj1[0] = path;
              return intl5.formatToPlainString(getSystemLocale /* getSystemLocale */.t["08L2TG"], obj1);
            } else if (tmp32.APPLICATION_LOCK_FAILED === code) {
              const intl4 = getSystemLocale /* getSystemLocale */.intl;
              return intl4.string(getSystemLocale /* getSystemLocale */.t.RDYCUV);
            } else if (tmp32.DISK_FULL === code) {
              const intl3 = getSystemLocale /* getSystemLocale */.intl;
              return intl3.string(getSystemLocale /* getSystemLocale */.t.mojtDJ);
            } else {
              if (tmp32.API_ERROR !== code) {
                if (tmp32.MAX_REQUEST_RETRIES_EXCEEDED !== code) {
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