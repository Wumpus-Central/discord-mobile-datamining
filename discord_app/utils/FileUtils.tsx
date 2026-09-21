// === Module 5350: FileUtils ===

// Module 5350 (FileUtils)
import _modDef12 from "module_12" /* 12 */;
import UploadUtils from "UploadUtils" /* 5345 */;
import noConflictDefault from "noConflict" /* 5351 */;
import GuildStore from "GuildStore" /* 2063 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function getUploadFileSizeSum(arg0) {
  let num = 0;
  while (tmp !== undefined) {
    num = num + tmp2.size;
    continue;
  }
  return num;
}
const Constants = fn(1074);
const GuildFeatures = Constants.GuildFeatures;
const MAX_ATTACHMENT_SIZE = Constants.MAX_ATTACHMENT_SIZE;
const PremiumConstants = fn(1374);
const PremiumTypes = PremiumConstants.PremiumTypes;
let items = [{ reType: /^image\/vnd.adobe.photoshop/, klass: "photoshop" }, { reType: /^image\/svg\+xml/, klass: "webcode" }, { reType: /^image\//, klass: "image" }, { reType: /^video\//, klass: "video" }, { reName: /\.pdf$/, klass: "acrobat" }, { reName: /\.ae/, klass: "ae" }, { reName: /\.sketch$/, klass: "sketch" }, { reName: /\.ai$/, klass: "ai" }, { reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/, klass: "archive" }, { reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|ts|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/, klass: "code" }, { reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/, klass: "document" }, { reName: /\.(?:xls|xlsx|numbers|csv)$/, klass: "spreadsheet" }, { reName: /\.(?:html|xhtml|htm|xml|xsd|css|styl)$/, klass: "webcode" }, { reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/, klass: "audio" }];
const items1 = [GuildFeatures.MAX_FILE_SIZE_250_MB, PremiumConstants.MAX_GUILD_FILE_SIZE_250_MB];
const items2 = [items1, , ];
const items3 = [GuildFeatures.MAX_FILE_SIZE_100_MB, PremiumConstants.MAX_GUILD_FILE_SIZE_100_MB];
items2[1] = items3;
const items4 = [GuildFeatures.MAX_FILE_SIZE_50_MB, PremiumConstants.MAX_GUILD_FILE_SIZE_50_MB];
items2[2] = items4;
const size = fn(2);
const result = size.fileFinishedImporting("utils/FileUtils.tsx");

export const transformNativeFile = function transformNativeFile(filename, arg1) {
  let file = filename;
  if (!(filename instanceof File)) {
    let str = arg1;
    filename = filename.filename;
    if (arg1 == null) {
      str = "text/plain";
    }
    const _File = File;
    items = [filename.data.buffer];
    const obj = { type: str };
    file = new File(items, filename, obj);
  }
  return file;
};
export const makeFile = function makeFile(arg0, arg1, type) {
  items = [arg0];
  const file = new File(items, arg1, { type });
  return file;
};
export const classifyFile = function classifyFile(file) {
  const type = file.type;
  let str2;
  if (file.name != null) {
    str2 = str.toLowerCase();
  }
  if (str2 == null) {
    str2 = "";
  }
  const found = _modDef12.find(items, (reType) => {
    if (null != reType.reType) {
      if (null != type) {
        reType = reType.reType;
        let isMatch = reType.test(tmp);
      }
      return isMatch;
    }
    isMatch = null != reType.reName;
    if (isMatch) {
      isMatch = "" !== str2;
    }
    if (isMatch) {
      const reName = reType.reName;
      isMatch = reName.test(str2);
    }
  });
  let str3 = "unknown";
  if (null != found) {
    str3 = found.klass;
  }
  return str3;
};
export const classifyFileName = function classifyFileName(str, arg1) {
  closure_1 = arg1;
  str = undefined;
  if (str != null) {
    str = str.toLowerCase();
  }
  if (str == null) {
    str = "";
  }
  const found = _modDef12.find(items, (reType) => {
    if (null != reType.reType) {
      if (null != type) {
        reType = reType.reType;
        let isMatch = reType.test(tmp);
      }
      return isMatch;
    }
    isMatch = null != reType.reName;
    if (isMatch) {
      isMatch = "" !== str2;
    }
    if (isMatch) {
      const reName = reType.reName;
      isMatch = reName.test(str2);
    }
  });
  let str2 = "unknown";
  if (null != found) {
    str2 = found.klass;
  }
  return str2;
};
export const sizeString = function sizeString(currentSize) {
  return noConflictDefault.filesize(currentSize);
};
export const maxFileSize = function maxFileSize(guildId) {
  const currentUser = UserStore.getCurrentUser();
  const userMaxFileSize = enabled(4414).getUserMaxFileSize(currentUser);
  if (null == guildId) {
    return userMaxFileSize;
  } else {
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      const FileUploadPowerupHoldoutExperiment = guild(4681).FileUploadPowerupHoldoutExperiment;
      enabled = FileUploadPowerupHoldoutExperiment.getConfig({ location: "getGuildMaxFileSize" }).enabled;
      let reduced = items2.reduce((acc, item) => {
        [tmp, tmp2] = item;
        if (!enabled) {
          const features = _Math.features;
          let tmp6 = acc;
          if (features.has(tmp)) {
            tmp6 = acc;
            if (tmp2 > acc) {
              tmp6 = tmp2;
            }
          }
          let tmp4 = tmp6;
        } else {
          tmp4 = acc;
        }
        return tmp4;
      }, MAX_ATTACHMENT_SIZE);
    } else {
      reduced = MAX_ATTACHMENT_SIZE;
    }
    const _Math = Math;
    return Math.max(reduced, userMaxFileSize);
  }
  const obj = enabled(4414);
};
export { getUploadFileSizeSum };
export const uploadSumTooLarge = function uploadSumTooLarge(arg0) {
  const tmp = getUploadFileSizeSum(arg0);
  return tmp > UploadUtils.getMaxTotalAttachmentSize({ location: "uploadSumTooLarge" });
};
export const fileUploadLimitRoadblockDescription = function fileUploadLimitRoadblockDescription(arg0) {
  ({ guildId, maxSize } = arg0);
  if (maxSize == null) {
    const currentUser = UserStore.getCurrentUser();
    const userMaxFileSize = enabled(4414).getUserMaxFileSize(currentUser);
    if (null == guildId) {
      maxSize = userMaxFileSize;
    } else {
      let _Math = GuildStore.getGuild(guildId);
      if (null != _Math) {
        const FileUploadPowerupHoldoutExperiment = tmp(4681).FileUploadPowerupHoldoutExperiment;
        enabled = FileUploadPowerupHoldoutExperiment.getConfig({ location: "getGuildMaxFileSize" }).enabled;
        let reduced = items2.reduce((acc, item) => {
          [tmp, tmp2] = item;
          if (!enabled) {
            const features = _Math.features;
            let tmp6 = acc;
            if (features.has(tmp)) {
              tmp6 = acc;
              if (tmp2 > acc) {
                tmp6 = tmp2;
              }
            }
            let tmp4 = tmp6;
          } else {
            tmp4 = acc;
          }
          return tmp4;
        }, MAX_ATTACHMENT_SIZE);
      } else {
        reduced = MAX_ATTACHMENT_SIZE;
      }
      _Math = Math;
      const bound = Math.max(reduced, userMaxFileSize);
    }
    const obj3 = enabled(4414);
  }
  const maxSize1 = _Math(4652).formatSize(maxSize / 1024, { useKibibytes: true });
  const obj = _Math(4652);
  const premiumMaxSize = _Math(4414).getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false });
  const intl = tmp(1115).intl;
  return intl.format(_Math(1115).t["+R2TzS"], { maxSize: maxSize1, premiumMaxSize });
};