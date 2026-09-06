// === Module 9310: showUploadFileSizeError ===

// Module 9310 (showUploadFileSizeError)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1885 */;
import FileSizeUtils from "FileSizeUtils" /* 4457 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import UploadUtils from "UploadUtils" /* 5129 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5130 */;
import utils_UploadUtils from "utils/UploadUtils" /* 5138 */;
import KestrelExperiment from "KestrelExperiment" /* 5179 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import logMessageSendFailure from "logMessageSendFailure" /* 7843 */;
import buildFileSizeLimitEventProperties from "buildFileSizeLimitEventProperties" /* 9311 */;
import getUploaderFileSizeMetrics from "getUploaderFileSizeMetrics" /* 9312 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9313 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const FileUploadErrorTypes = fn(4553).FileUploadErrorTypes;
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_8, PremiumUpsellTypes: closure_9 } = PremiumConstants);
const constants = { NITRO_UPSELL: "Nitro Upsell", OVER_MAX_SIZE: "Over Max Size" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_uploads/native/showUploadFileSizeError.tsx");

export default function showUploadFileSizeError(arg0) {
  ({ file, maxSize, analyticsLocations, errorReason } = arg0);
  let items;
  let items1;
  ({ baseMaxSize, guildId } = arg0);
  const currentUser = UserStore.getCurrentUser();
  let obj = PremiumTypeUtils;
  const isPremiumExactlyResult = obj.isPremiumExactly(currentUser, TIER_2.TIER_2);
  if (null != file.items) {
    let tmp2Result = logMessageSendFailure;
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
  tmp2Result = KestrelExperiment;
  const kestrelConfig = tmp2Result.getKestrelConfig({ location: "native.showUploadFileSizeError" });
  const tmp2Result1 = AppAnalyticsUtils;
  obj = { guildId, channelId: null, userIndividualFileSizeLimit: null, numAttachments: null, preCompressionFileSizes: null, preCompressionAggregateSize: null, postCompressionFileSizes: null, postCompressionAggregateSize: null, attachmentMimeTypes: null, errorType: null, kestrelVariant: null };
  const tmp2Result2 = buildFileSizeLimitEventProperties;
  obj.channelId = getUploaderFileSizeMetrics.getUploaderChannelId(file);
  obj.userIndividualFileSizeLimit = baseMaxSize;
  obj.numAttachments = file.attachmentsCount;
  obj.preCompressionFileSizes = items1;
  obj.preCompressionAggregateSize = file.totalPreCompressionSize;
  obj.postCompressionFileSizes = items;
  obj.postCompressionAggregateSize = file.totalPostCompressionSize;
  obj.attachmentMimeTypes = attachmentMimeTypes;
  let ERROR_SOURCE_UNKNOWN = errorReason;
  if (errorReason == null) {
    ERROR_SOURCE_UNKNOWN = FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  obj.errorType = ERROR_SOURCE_UNKNOWN;
  const tmp2Result3 = getUploaderFileSizeMetrics;
  obj.kestrelVariant = KestrelExperiment.getKestrelVariantName(kestrelConfig);
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
    tmp21 = num > NitroFileUploadExperiments.getNitroFileUploadLimitBytes({ location: "native.showUploadFileSizeError" });
    const tmp2Result5 = NitroFileUploadExperiments;
  }
  if (!tmp21) {
    tmp21 = tmp20;
  }
  if (!tmp21) {
    tmp21 = errorReason === FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  const tmp2Result4 = KestrelExperiment;
  obj = { alert_type: tmp21 ? constants.OVER_MAX_SIZE : constants.NITRO_UPSELL, num_attachments: file.attachmentsCount, total_attachment_size: file.currentSize, has_image: file.hasImage, has_video: file.hasVideo, is_premium: isPremiumExactlyResult, image_compression_quality: null, image_compression_setting_enabled: null };
  const tmp2Result6 = AppAnalyticsUtils;
  obj.image_compression_quality = utils_UploadUtils.getImageCompressionQuality();
  obj.image_compression_setting_enabled = UnsyncedUserSettingsStore.dataSavingMode;
  tmp2Result6.trackWithMetadata(constants.FILE_UPLOAD_ALERT_VIEWED, obj);
  if (tmp21) {
    if (errorReason === FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.B3vFdU);
      const intl5 = util.intl;
      let stringResult1 = intl5.string(util.t.zMEjJg);
    } else {
      if (kestrelConfig.enabled) {
        if (!kestrelConfig.isGA) {
          const intl = util.intl;
          stringResult = intl.string(util.t.bRYgjH);
        }
        const intl3 = util.intl;
        const formatToPlainString = intl3.formatToPlainString;
        const t = util.t;
        if (tmp20) {
          const obj1 = { maxSize: FileSizeUtils.formatSize(UploadUtils.MAX_TOTAL_ATTACHMENT_SIZE / FileSizeUtils.BYTE_IN_KB, { useKibibytes: true }) };
          stringResult1 = formatToPlainString(t.tUOJdH, obj1);
          const tmp2Result8 = FileSizeUtils;
        } else {
          const obj2 = { maxSize: FileSizeUtils.formatSize(maxSize / FileSizeUtils.BYTE_IN_KB, { useKibibytes: true }) };
          stringResult1 = formatToPlainString(t.fxEKdS, obj2);
          const tmp2Result9 = FileSizeUtils;
        }
      }
      const intl2 = util.intl;
      stringResult = intl2.string(util.t["/tGlcj"]);
    }
    const obj3 = { title: stringResult, body: stringResult1 };
    AlertActionCreatorsDefault.show(obj3);
  } else {
    const obj4 = { initialUpsellKey: ConstantsIOS.UpsellTypes.UPLOAD, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null, largestFileSize: null };
    const obj5 = { section: constants2.FILE_UPLOAD_POPOUT };
    obj4.analyticsLocation = obj5;
    const items4 = [];
    arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
    items4[arraySpreadResult] = AnalyticsLocationDefault.FILE_UPLOAD_POPOUT;
    obj4.analyticsLocations = items4;
    const obj6 = { type: constants3.UPLOAD_ERROR_UPSELL };
    obj4.analyticsProperties = obj6;
    obj4.largestFileSize = num;
    const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj4);
  }
  const tmp2Result7 = utils_UploadUtils;
};