// === Module 8815: showUploadFileSizeError ===

// Module 8815 (showUploadFileSizeError)
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl5 from "intl" /* 1126 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import MessageConstants from "MessageConstants" /* 4883 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import FileSizeUtils from "FileSizeUtils" /* 5317 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import UploadUtils from "UploadUtils" /* 7243 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 7244 */;
import utils_UploadUtils from "utils/UploadUtils" /* 7274 */;
import logMessageSendFailure from "logMessageSendFailure" /* 7473 */;
import buildFileSizeLimitEventProperties2 from "buildFileSizeLimitEventProperties" /* 8816 */;
import getUploaderFileSizeMetrics from "getUploaderFileSizeMetrics" /* 8817 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8818 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const FileUploadErrorTypes = MessageConstants.FileUploadErrorTypes;
({ PremiumTypes: metroImportAll, PremiumUpsellTypes: c9 } = PremiumConstants);
const constants = { NITRO_UPSELL: "Nitro Upsell", OVER_MAX_SIZE: "Over Max Size" };
let result = size.fileFinishedImporting("modules/media_uploads/native/showUploadFileSizeError.tsx");

export default function showUploadFileSizeError(arg0) {
  let ERROR_SOURCE_UNKNOWN;
  let analyticsLocations;
  let appEntryKey;
  let attachmentMimeTypes;
  let baseMaxSize;
  let errorReason;
  let file;
  let formatSize;
  let guildId;
  let items4;
  let maxSize;
  let obj8;
  let obj9;
  let tmp3Result11;
  let tmp3Result14;
  let tmp3Result16;
  ({ file, maxSize, analyticsLocations, errorReason } = arg0);
  let items;
  let items1;
  ({ baseMaxSize, guildId, appEntryKey } = arg0);
  const currentUser = UserStore.getCurrentUser();
  const obj = PremiumTypeUtils;
  const isPremiumExactlyResult = obj.isPremiumExactly(currentUser, metroImportAll.TIER_2);
  if (null != file.items) {
    const tmp3Result = logMessageSendFailure;
    attachmentMimeTypes = tmp3Result.getAttachmentMimeTypes(file.items);
  } else {
    attachmentMimeTypes = [];
  }
  items = [];
  items1 = [];
  if (null != file.items) {
    const items2 = file.items;
    const item = items2.forEach((postCompressionSize) => {
      let num = postCompressionSize.postCompressionSize;
      const push = items.push;
      if (num == null) {
        num = 0;
      }
      push(num);
      items1.push(postCompressionSize.preCompressionSize);
    });
  }
  const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
  const FILE_SIZE_LIMIT_EXCEEDED = hasOwnProperty.FILE_SIZE_LIMIT_EXCEEDED;
  AppAnalyticsUtils;
  const obj2 = { guildId, channelId: tmp3Result11.getUploaderChannelId(file), userIndividualFileSizeLimit: baseMaxSize, numAttachments: file.attachmentsCount, preCompressionFileSizes: items1, preCompressionAggregateSize: file.totalPreCompressionSize, postCompressionFileSizes: items, postCompressionAggregateSize: file.totalPostCompressionSize, attachmentMimeTypes, errorType: ERROR_SOURCE_UNKNOWN };
  const buildFileSizeLimitEventProperties = buildFileSizeLimitEventProperties2.buildFileSizeLimitEventProperties;
  buildFileSizeLimitEventProperties2;
  ERROR_SOURCE_UNKNOWN = errorReason;
  tmp3Result11 = getUploaderFileSizeMetrics;
  if (errorReason == null) {
    ERROR_SOURCE_UNKNOWN = FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  trackWithMetadata(FILE_SIZE_LIMIT_EXCEEDED, buildFileSizeLimitEventProperties(obj2));
  let num = 0;
  if (!isPremiumExactlyResult) {
    let applyResult = maxSize;
    if (null != file.items) {
      applyResult = maxSize;
      if (errorReason !== FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN) {
        const _Math = Math;
        if (errorReason === tmp13.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE) {
          items1 = items;
        }
        const items3 = [];
        HermesBuiltin.arraySpread(items3, items1, 0);
        applyResult = HermesBuiltin.apply(max, items3, _Math);
      }
    }
    num = applyResult;
  }
  let tmp23 = isPremiumExactlyResult;
  if (!tmp23) {
    const tmp3Result12 = NitroFileUploadExperiments;
    tmp23 = num > tmp3Result12.getNitroFileUploadLimitBytes({ location: "native.showUploadFileSizeError" });
  }
  if (!tmp23) {
    tmp23 = tmp22;
  }
  if (!tmp23) {
    tmp23 = errorReason === FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  const obj3 = { alert_type: tmp23 ? constants.OVER_MAX_SIZE : constants.NITRO_UPSELL, num_attachments: file.attachmentsCount, total_attachment_size: file.currentSize, has_image: file.hasImage, has_video: file.hasVideo, is_premium: isPremiumExactlyResult, image_compression_quality: tmp3Result14.getImageCompressionQuality(), image_compression_setting_enabled: UnsyncedUserSettingsStore.dataSavingMode };
  const trackWithMetadata2 = AppAnalyticsUtils.trackWithMetadata;
  const FILE_UPLOAD_ALERT_VIEWED = hasOwnProperty.FILE_UPLOAD_ALERT_VIEWED;
  AppAnalyticsUtils;
  tmp3Result14 = utils_UploadUtils;
  trackWithMetadata2(FILE_UPLOAD_ALERT_VIEWED, obj3);
  if (tmp23) {
    let stringResult;
    let stringResult1;
    if (errorReason === FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN) {
      const intl = intl5.intl;
      stringResult = intl.string(intl5.t.B3vFdU);
      const intl2 = intl5.intl;
      stringResult1 = intl2.string(intl5.t.zMEjJg);
    } else {
      const intl3 = intl5.intl;
      const stringResult2 = intl3.string(intl5.t["/tGlcj"]);
      const intl4 = intl5.intl;
      const formatToPlainString = intl4.formatToPlainString;
      const t = intl5.t;
      if (errorReason === FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE || errorReason === FileUploadErrorTypes.PRECOMPRESSION_SUM_TOO_LARGE) {
        const tUOJdH = t.tUOJdH;
        const obj4 = { maxSize: formatSize(UploadUtils.MAX_TOTAL_ATTACHMENT_SIZE / FileSizeUtils.BYTE_IN_KB, { useKibibytes: true }) };
        formatSize = FileSizeUtils.formatSize;
        FileSizeUtils;
        stringResult1 = formatToPlainString(tUOJdH, obj4);
      } else {
        const fxEKdS = t.fxEKdS;
        const obj5 = { maxSize: tmp3Result16.formatSize(maxSize / FileSizeUtils.BYTE_IN_KB, { useKibibytes: true }) };
        tmp3Result16 = FileSizeUtils;
        stringResult1 = formatToPlainString(fxEKdS, obj5);
      }
      stringResult = stringResult2;
    }
    const obj6 = { title: stringResult, body: stringResult1 };
    const obj14 = AlertActionCreatorsDefault;
    obj14.show(obj6);
  } else {
    const obj7 = { initialUpsellKey: ConstantsIOS.UpsellTypes.UPLOAD, analyticsLocation: obj8, analyticsLocations: items4, analyticsProperties: obj9, largestFileSize: num, appEntryKey };
    const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
    PremiumUpsellUtilsDefault;
    items4 = [];
    obj8 = { section: metroRequire.FILE_UPLOAD_POPOUT };
    const arraySpreadResult2 = HermesBuiltin.arraySpread(items4, analyticsLocations, 0);
    items4[arraySpreadResult2] = AnalyticsLocationDefault.FILE_UPLOAD_POPOUT;
    obj9 = { type: constants3.UPLOAD_ERROR_UPSELL };
    const result = handleShowUpsellAlert(obj7);
  }
};