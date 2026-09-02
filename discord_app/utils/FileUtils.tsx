// === Module 5086: getUploadFileSizeSum ===

// Module 5086 (getUploadFileSizeSum)
import applyDefault from "apply" /* 12 */;
import noConflictDefault from "noConflict" /* 5087 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;

const require = arg1;
function getUploadFileSizeSum(arg0) {
  let num = 0;
  while (tmp !== undefined) {
    let tmp3 = num;
    num = num + tmp2.size;
    continue;
  }
  return num;
}
let GuildFeatures = ME.GuildFeatures;
const MAX_ATTACHMENT_SIZE = ME.MAX_ATTACHMENT_SIZE;
let closure_7 = GuildFeatures.MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE;
let items = [{ reType: /^image\/vnd.adobe.photoshop/, klass: "photoshop" }, { reType: /^image\/svg\+xml/, klass: "webcode" }, { reType: /^image\//, klass: "image" }, { reType: /^video\//, klass: "video" }, { reName: /\.pdf$/, klass: "acrobat" }, { reName: /\.ae/, klass: "ae" }, { reName: /\.sketch$/, klass: "sketch" }, { reName: /\.ai$/, klass: "ai" }, { reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/, klass: "archive" }, { reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|ts|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/, klass: "code" }, { reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/, klass: "document" }, { reName: /\.(?:xls|xlsx|numbers|csv)$/, klass: "spreadsheet" }, { reName: /\.(?:html|xhtml|htm|xml|xsd|css|styl)$/, klass: "webcode" }, { reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/, klass: "audio" }];
const items1 = [GuildFeatures.MAX_FILE_SIZE_250_MB, GuildFeatures.MAX_GUILD_FILE_SIZE_250_MB];
const items2 = [items1, , ];
const items3 = [GuildFeatures.MAX_FILE_SIZE_100_MB, GuildFeatures.MAX_GUILD_FILE_SIZE_100_MB];
items2[1] = items3;
const items4 = [GuildFeatures.MAX_FILE_SIZE_50_MB, GuildFeatures.MAX_GUILD_FILE_SIZE_50_MB];
items2[2] = items4;
const result = require("set").fileFinishedImporting("utils/FileUtils.tsx");

export const transformNativeFile = function transformNativeFile(filename) {
  let file = filename;
  if (!(filename instanceof File)) {
    let str = arg1;
    filename = filename.filename;
    if (arg1 == null) {
      str = "text/plain";
    }
    const _File = File;
    items = [filename.data.buffer];
    const obj = { type: null };
    obj[0] = str;
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
  let str2 = str;
  const type = file.type;
  str2 = undefined;
  if (file.name != null) {
    str2 = str.toLowerCase();
  }
  if (str2 == null) {
    str2 = "";
  }
  const found = type(12).find(items, (reType) => {
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
export const classifyFileName = function classifyFileName(str) {
  importDefault = arg1;
  str = undefined;
  if (str != null) {
    str = str.toLowerCase();
  }
  if (str == null) {
    str = "";
  }
  const found = applyDefault.find(items, (reType) => {
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
export const sizeString = function sizeString(closure_3) {
  return noConflictDefault.filesize(closure_3);
};
export const maxFileSize = function maxFileSize(guildId) {
  const currentUser = authStore.getCurrentUser();
  const userMaxFileSize = enabled(4139).getUserMaxFileSize(currentUser);
  if (null == guildId) {
    return userMaxFileSize;
  } else {
    const guild = store.getGuild(guildId);
    if (null != guild) {
      const FileUploadPowerupHoldoutExperiment = guild(4404).FileUploadPowerupHoldoutExperiment;
      enabled = FileUploadPowerupHoldoutExperiment.getConfig({ location: "getGuildMaxFileSize" }).enabled;
      let reduced = items2.reduce((arg0, arg1) => {
        [tmp, tmp2] = arg1;
        if (!enabled) {
          const features = _Math.features;
          let tmp6 = arg0;
          if (features.has(tmp)) {
            tmp6 = arg0;
            if (tmp2 > arg0) {
              tmp6 = tmp2;
            }
          }
          let tmp4 = tmp6;
        } else {
          tmp4 = arg0;
        }
        return tmp4;
      }, MAX_ATTACHMENT_SIZE);
    } else {
      reduced = MAX_ATTACHMENT_SIZE;
    }
    const _Math = Math;
    return Math.max(reduced, userMaxFileSize);
  }
  const obj = enabled(4139);
};
export const anyFileTooLarge = function anyFileTooLarge(arg0, arg1) {
  let reduce = dependencyMap;
  const currentUser = authStore.getCurrentUser();
  const userMaxFileSize = enabled(4139).getUserMaxFileSize(currentUser);
  if (null == arg1) {
    let guild = userMaxFileSize;
    const _Array = Array;
    return Array.from(arg0).some((size) => size.size > guild);
  } else {
    guild = store.getGuild(arg1);
    if (null != guild) {
      const FileUploadPowerupHoldoutExperiment = guild(4404).FileUploadPowerupHoldoutExperiment;
      enabled = FileUploadPowerupHoldoutExperiment.getConfig({ location: "getGuildMaxFileSize" }).enabled;
      guild = items2;
      reduce = items2.reduce;
      let reduced = reduce((arg0, arg1) => {
        [tmp, tmp2] = arg1;
        if (!enabled) {
          const features = _Math.features;
          let tmp6 = arg0;
          if (features.has(tmp)) {
            tmp6 = arg0;
            if (tmp2 > arg0) {
              tmp6 = tmp2;
            }
          }
          let tmp4 = tmp6;
        } else {
          tmp4 = arg0;
        }
        return tmp4;
      }, MAX_ATTACHMENT_SIZE);
    } else {
      reduced = MAX_ATTACHMENT_SIZE;
    }
    const _Math = Math;
    const bound = Math.max(reduced, userMaxFileSize);
  }
};
export { getUploadFileSizeSum };
export const uploadSumTooLarge = function uploadSumTooLarge(arg0) {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    currentUser.isStaff();
  }
  return getUploadFileSizeSum(arg0) > 524288000;
};
export const getMaxRequestSize = function getMaxRequestSize() {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    currentUser.isStaff();
  }
  return 524288000;
};
export const fileUploadLimitRoadblockDescription = function fileUploadLimitRoadblockDescription(arg0) {
  ({ guildId, maxSize } = arg0);
  ({ onClick, hideLearnMore } = arg0);
  let obj = _Math(4372);
  if (maxSize == null) {
    const currentUser = authStore.getCurrentUser();
    const userMaxFileSize = enabled(4139).getUserMaxFileSize(currentUser);
    if (null == guildId) {
      maxSize = userMaxFileSize;
    } else {
      _Math = store.getGuild(guildId);
      if (null != _Math) {
        const FileUploadPowerupHoldoutExperiment = tmp(4404).FileUploadPowerupHoldoutExperiment;
        enabled = FileUploadPowerupHoldoutExperiment.getConfig({ location: "getGuildMaxFileSize" }).enabled;
        let reduced = items2.reduce((arg0, arg1) => {
          [tmp, tmp2] = arg1;
          if (!enabled) {
            const features = _Math.features;
            let tmp6 = arg0;
            if (features.has(tmp)) {
              tmp6 = arg0;
              if (tmp2 > arg0) {
                tmp6 = tmp2;
              }
            }
            let tmp4 = tmp6;
          } else {
            tmp4 = arg0;
          }
          return tmp4;
        }, MAX_ATTACHMENT_SIZE);
      } else {
        reduced = MAX_ATTACHMENT_SIZE;
      }
      _Math = Math;
      const bound = Math.max(reduced, userMaxFileSize);
    }
    const obj5 = enabled(4139);
  }
  const formatSizeResult = obj.formatSize(maxSize / 1024, { useKibibytes: true });
  const formatSizeResult1 = _Math(4372).formatSize(closure_7 / 1024, { useKibibytes: true });
  if (true === hideLearnMore) {
    const intl2 = tmp(1233).intl;
    obj = { maxSize: null, premiumMaxSize: null };
    obj[0] = formatSizeResult;
    obj[1] = formatSizeResult1;
    let formatResult = intl2.format(tmp(1233).t["+R2TzS"], obj);
  } else {
    const intl = tmp(1233).intl;
    obj = { maxSize: null, premiumMaxSize: null, onClick: null };
    obj[0] = formatSizeResult;
    obj[1] = formatSizeResult1;
    obj[2] = onClick;
    formatResult = intl.format(tmp(1233).t.tRuxk9, obj);
  }
  return formatResult;
};