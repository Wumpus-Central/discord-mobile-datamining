// discord_app/utils/FileUtils.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import intl2 from "../intl/index.native.tsx";
import PremiumUtils from "PremiumUtils.tsx";
import FileSizeUtils from "FileSizeUtils.tsx";
import UploadUtils from "UploadUtils.tsx";
import _modDef7284 from "../../_runtime/metro/07284__.js";
import GuildStore from "../stores/GuildStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import Constants from "../Constants.tsx";
import PremiumConstants from "../modules/premium/PremiumConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

const PremiumUtilsDefault = PremiumUtils;
let reType;

let GuildFeatures;
let hasOwnProperty;
function getUploadFileSizeSum(arg0) {
  let num = 0;
  const tmp = arg0[Symbol.iterator]();
  while (tmp !== undefined) {
    num = num + tmp2.size;
    continue;
  }
  return num;
}
({ GuildFeatures, MAX_ATTACHMENT_SIZE: hasOwnProperty } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
let obj = { reType: /^image\/vnd.adobe.photoshop/, klass: "photoshop" };
let items = [
  obj,
  { reType: /^image\/svg\+xml/, klass: "webcode" },
  { reType: /^image\//, klass: "image" },
  { reType: /^video\//, klass: "video" },
  { reName: /\.pdf$/, klass: "acrobat" },
  { reName: /\.ae/, klass: "ae" },
  { reName: /\.sketch$/, klass: "sketch" },
  { reName: /\.ai$/, klass: "ai" },
  { reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/, klass: "archive" },
  {
    reName:
      /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|ts|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
    klass: "code",
  },
  { reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/, klass: "document" },
  { reName: /\.(?:xls|xlsx|numbers|csv)$/, klass: "spreadsheet" },
  { reName: /\.(?:html|xhtml|htm|xml|xsd|css|styl)$/, klass: "webcode" },
  { reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/, klass: "audio" },
];
const items1 = [GuildFeatures.MAX_FILE_SIZE_100_MB, PremiumConstants.MAX_GUILD_FILE_SIZE_100_MB];
const items2 = [items1];
const items3 = [GuildFeatures.MAX_FILE_SIZE_50_MB, PremiumConstants.MAX_GUILD_FILE_SIZE_50_MB];
items2[1] = items3;
const result = size.fileFinishedImporting("utils/FileUtils.tsx");

export const transformNativeFile = function transformNativeFile(filename, arg1) {
  let file = filename;
  if (!(filename instanceof File)) {
    let str = arg1;
    filename = filename.filename;
    const buffer = filename.data.buffer;
    if (arg1 == null) {
      str = "text/plain";
    }
    const _File = File;
    items = [buffer];
    const self = this;
    const self2 = this;
    const obj = { type: str };
    file = new File(items, filename, obj);
  }
  return file;
};
export const makeFile = function makeFile(arg0, filename, type) {
  items = [arg0];
  const obj = { type };
  const file = new File(items, filename, obj);
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
  const arr = _modDef12;
  const found = arr.find(items, (reType) => {
    let isMatch;
    if (null != reType.reType) {
      if (null != type) {
        reType = reType.reType;
        isMatch = reType.test(tmp);
      }
      return isMatch;
    }
    isMatch = null != reType.reName && "" !== str2;
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
export const classifyFileName = function classifyFileName(fileName, arg1) {
  let closure_1 = arg1;
  let str;
  if (fileName != null) {
    str = fileName.toLowerCase();
  }
  if (str == null) {
    str = "";
  }
  const arr = _modDef12;
  const found = arr.find(items, (reType) => {
    let isMatch;
    if (null != reType.reType) {
      if (null != type) {
        reType = reType.reType;
        isMatch = reType.test(tmp);
      }
      return isMatch;
    }
    isMatch = null != reType.reName && "" !== str2;
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
export const sizeString = function sizeString(size) {
  const obj = _modDef7284;
  return obj.filesize(size);
};
export const maxFileSize = function maxFileSize(guildId) {
  const currentUser = UserStore.getCurrentUser();
  const obj = PremiumUtilsDefault;
  const userMaxFileSize = obj.getUserMaxFileSize(currentUser);
  if (null == guildId) {
    return userMaxFileSize;
  } else {
    let reduced;
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      reduced = items2.reduce((acc, item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        const features = guild.features;
        let tmp3 = acc;
        if (features.has(tmp)) {
          tmp3 = acc;
          if (tmp2 > acc) {
            tmp3 = tmp2;
          }
        }
        return tmp3;
      }, hasOwnProperty);
    } else {
      reduced = hasOwnProperty;
    }
    const _Math = Math;
    return Math.max(reduced, userMaxFileSize);
  }
};
export { getUploadFileSizeSum };
export const uploadSumTooLarge = function uploadSumTooLarge(arg0) {
  const tmp = getUploadFileSizeSum(arg0);
  const obj = UploadUtils;
  return tmp > obj.getMaxTotalAttachmentSize({ location: "uploadSumTooLarge" });
};
export const fileUploadLimitRoadblockDescription = function fileUploadLimitRoadblockDescription(arg0) {
  let guildId;
  let maxSize;
  ({ guildId, maxSize } = arg0);
  let tmp3 = FileSizeUtils;
  const formatSize = tmp3.formatSize;
  if (maxSize == null) {
    const currentUser = UserStore.getCurrentUser();
    const obj2 = PremiumUtilsDefault;
    const userMaxFileSize = obj2.getUserMaxFileSize(currentUser);
    let bound = userMaxFileSize;
    if (null != guildId) {
      let reduced;
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        reduced = items2.reduce((acc, item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const features = guild.features;
          let tmp3 = acc;
          if (features.has(tmp)) {
            tmp3 = acc;
            if (tmp2 > acc) {
              tmp3 = tmp2;
            }
          }
          return tmp3;
        }, hasOwnProperty);
      } else {
        reduced = hasOwnProperty;
      }
      const _Math = Math;
      bound = Math.max(reduced, userMaxFileSize);
    }
    maxSize = bound;
  }
  const maxSize1 = formatSize(maxSize / 1024, { useKibibytes: true });
  const tmpResult = PremiumUtils;
  const premiumMaxSize = tmpResult.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false });
  const intl = intl2.intl;
  return intl.format(intl2.t["+R2TzS"], { maxSize: maxSize1, premiumMaxSize });
};
