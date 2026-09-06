// === Module 9310: showUploadFileSizeError ===

// Module 9310 (showUploadFileSizeError)
import closure_3 from "CHANNEL_SIDEBAR_WIDTH" /* 1185 */;
import closure_4 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;
import { FileUploadErrorTypes } from "MESSAGE_GROUP_SPACING" /* 4553 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;

const require = arg1;
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
({ PremiumTypes: closure_8, PremiumUpsellTypes: c9 } = GuildFeatures);
let closure_10 = { NITRO_UPSELL: "Nitro Upsell", OVER_MAX_SIZE: "Over Max Size" };
let result = require("set").fileFinishedImporting("modules/media_uploads/native/showUploadFileSizeError.tsx");

export default function showUploadFileSizeError(arg0) {
  ({ file, maxSize, analyticsLocations, errorReason } = arg0);
  let items;
  let items1;
  ({ baseMaxSize, guildId } = arg0);
  currentUser = currentUser.getCurrentUser();
  let obj = items(1885);
  const isPremiumExactlyResult = obj.isPremiumExactly(currentUser, TIER_2.TIER_2);
  if (null != file.items) {
    let tmp2Result = tmp2(7843);
    let attachmentMimeTypes = tmp2Result.getAttachmentMimeTypes(file.items);
  } else {
    attachmentMimeTypes = [];
  }
  items = [];
  items1 = [];
  if (null != file.items) {
    const items2 = file.items;
    const item = items2.forEach((postCompressionSize) => {
      let num = postCompressionSize.postCompressionSize;
      if (num == null) {
        num = 0;
      }
      items.push(num);
      items1.push(postCompressionSize.preCompressionSize);
    });
  }
  tmp2Result = tmp2(5179);
  const kestrelConfig = tmp2Result.getKestrelConfig({ location: "native.showUploadFileSizeError" });
  const tmp2Result1 = items(4740);
  const tmp7 = constants;
  obj = { guildId, channelId: null, userIndividualFileSizeLimit: null, numAttachments: null, preCompressionFileSizes: null, preCompressionAggregateSize: null, postCompressionFileSizes: null, postCompressionAggregateSize: null, attachmentMimeTypes: null, errorType: null, kestrelVariant: null };
  const tmp2Result2 = items(9311);
  obj[1] = items(9312).getUploaderChannelId(file);
  obj[2] = baseMaxSize;
  obj[3] = file.attachmentsCount;
  obj[4] = items1;
  obj[5] = file.totalPreCompressionSize;
  obj[6] = items;
  obj[7] = file.totalPostCompressionSize;
  obj[8] = attachmentMimeTypes;
  let ERROR_SOURCE_UNKNOWN = errorReason;
  if (errorReason == null) {
    ERROR_SOURCE_UNKNOWN = FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  obj[9] = ERROR_SOURCE_UNKNOWN;
  const tmp2Result3 = items(9312);
  obj[10] = items(5179).getKestrelVariantName(kestrelConfig);
  tmp2Result1.trackWithMetadata(constants.FILE_SIZE_LIMIT_EXCEEDED, tmp2Result2.buildFileSizeLimitEventProperties(obj));
  let num = 0;
  if (!isPremiumExactlyResult) {
    let applyResult = maxSize;
    if (null != file.items) {
      applyResult = maxSize;
      if (errorReason !== FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN) {
        const _Math = Math;
        if (errorReason === tmp11.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE) {
          items1 = items;
        }
        const items3 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
        applyResult = HermesBuiltin.apply(items3, _Math);
      }
    }
    num = applyResult;
  }
  let tmp21 = isPremiumExactlyResult;
  if (!isPremiumExactlyResult) {
    tmp21 = num > tmp2(5130).getNitroFileUploadLimitBytes({ location: "native.showUploadFileSizeError" });
    const tmp2Result5 = tmp2(5130);
  }
  if (!tmp21) {
    tmp21 = tmp20;
  }
  if (!tmp21) {
    tmp21 = errorReason === tmp19.ERROR_SOURCE_UNKNOWN;
  }
  const tmp2Result4 = items(5179);
  obj = { alert_type: tmp21 ? tmp22.OVER_MAX_SIZE : tmp22.NITRO_UPSELL, num_attachments: file.attachmentsCount, total_attachment_size: file.currentSize, has_image: file.hasImage, has_video: file.hasVideo, is_premium: isPremiumExactlyResult, image_compression_quality: null, image_compression_setting_enabled: null };
  const tmp2Result6 = items(4740);
  obj[6] = items(5138).getImageCompressionQuality();
  obj[7] = dataSavingMode.dataSavingMode;
  tmp2Result6.trackWithMetadata(tmp7.FILE_UPLOAD_ALERT_VIEWED, obj);
  if (tmp21) {
    if (errorReason === tmp19.ERROR_SOURCE_UNKNOWN) {
      const intl4 = tmp2(1114).intl;
      let stringResult = intl4.string(tmp2(1114).t.B3vFdU);
      const intl5 = tmp2(1114).intl;
      let stringResult1 = intl5.string(tmp2(1114).t.zMEjJg);
    } else {
      if (kestrelConfig.enabled) {
        if (!kestrelConfig.isGA) {
          const intl = tmp2(1114).intl;
          stringResult = intl.string(tmp2(1114).t.bRYgjH);
        }
        const intl3 = tmp2(1114).intl;
        const formatToPlainString = intl3.formatToPlainString;
        const t = tmp2(1114).t;
        if (tmp20) {
          obj1 = { maxSize: null };
          obj1[0] = tmp2(4457).formatSize(tmp2(5129).MAX_TOTAL_ATTACHMENT_SIZE / tmp2(4457).BYTE_IN_KB, { useKibibytes: true });
          stringResult1 = formatToPlainString(t.tUOJdH, obj1);
          const tmp2Result8 = tmp2(4457);
        } else {
          const obj2 = { maxSize: null };
          obj2[0] = tmp2(4457).formatSize(maxSize / tmp2(4457).BYTE_IN_KB, { useKibibytes: true });
          stringResult1 = formatToPlainString(t.fxEKdS, obj2);
          const tmp2Result9 = tmp2(4457);
        }
      }
      const intl2 = tmp2(1114).intl;
      stringResult = intl2.string(tmp2(1114).t["/tGlcj"]);
    }
    const obj3 = { title: null, body: null };
    obj3[0] = stringResult;
    obj3[1] = stringResult1;
    items1(4904).show(obj3);
    const obj21 = items1(4904);
  } else {
    const obj4 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null, largestFileSize: null };
    obj4[0] = tmp2(1093).UpsellTypes.UPLOAD;
    const obj5 = { section: null };
    obj5[0] = constants2.FILE_UPLOAD_POPOUT;
    obj4[1] = obj5;
    const items4 = [];
    arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
    items4[arraySpreadResult] = items1(7182).FILE_UPLOAD_POPOUT;
    obj4[2] = items4;
    const obj6 = { type: null };
    obj6[0] = constants3.UPLOAD_ERROR_UPSELL;
    obj4[3] = obj6;
    obj4[4] = num;
    const result = items1(9313).handleShowUpsellAlert(obj4);
  }
};