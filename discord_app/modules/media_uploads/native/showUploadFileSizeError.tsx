// discord_app/modules/media_uploads/native/showUploadFileSizeError.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import util from "../../../intl/index.native.tsx";
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import FileSizeUtils from "../../../utils/FileSizeUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import UploadUtils from "../../../utils/UploadUtils.tsx";
import NitroFileUploadExperiments from "../../premium/experiments/NitroFileUploadExperiments.tsx";
import utils_UploadUtils from "../../../utils/native/UploadUtils.tsx";
import KestrelExperiment from "../experiments/KestrelExperiment.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import logMessageSendFailure from "../../messages/logMessageSendFailure.tsx";
import buildFileSizeLimitEventProperties from "../buildFileSizeLimitEventProperties.tsx";
import getUploaderFileSizeMetrics from "../getUploaderFileSizeMetrics.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import UnsyncedUserSettingsStore from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const FileUploadErrorTypes = fn(4632).FileUploadErrorTypes;
const PremiumConstants = fn(1374);
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
  const isPremiumExactlyResult = PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2.TIER_2);
  if (null != file.items) {
    let attachmentMimeTypes = logMessageSendFailure.getAttachmentMimeTypes(file.items);
    const tmp2Result = logMessageSendFailure;
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
  const kestrelConfig = KestrelExperiment.getKestrelConfig({ location: "native.showUploadFileSizeError" });
  const tmp2Result11 = KestrelExperiment;
  const tmp2Result12 = AppAnalyticsUtils;
  const obj2 = {
    guildId,
    channelId: null,
    userIndividualFileSizeLimit: null,
    numAttachments: null,
    preCompressionFileSizes: null,
    preCompressionAggregateSize: null,
    postCompressionFileSizes: null,
    postCompressionAggregateSize: null,
    attachmentMimeTypes: null,
    errorType: null,
    kestrelVariant: null,
  };
  const tmp2Result13 = buildFileSizeLimitEventProperties;
  obj2.channelId = getUploaderFileSizeMetrics.getUploaderChannelId(file);
  obj2.userIndividualFileSizeLimit = baseMaxSize;
  obj2.numAttachments = file.attachmentsCount;
  obj2.preCompressionFileSizes = items1;
  obj2.preCompressionAggregateSize = file.totalPreCompressionSize;
  obj2.postCompressionFileSizes = items;
  obj2.postCompressionAggregateSize = file.totalPostCompressionSize;
  obj2.attachmentMimeTypes = attachmentMimeTypes;
  let ERROR_SOURCE_UNKNOWN = errorReason;
  if (errorReason == null) {
    ERROR_SOURCE_UNKNOWN = FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  obj2.errorType = ERROR_SOURCE_UNKNOWN;
  const tmp2Result14 = getUploaderFileSizeMetrics;
  obj2.kestrelVariant = KestrelExperiment.getKestrelVariantName(kestrelConfig);
  tmp2Result12.trackWithMetadata(
    constants.FILE_SIZE_LIMIT_EXCEEDED,
    tmp2Result13.buildFileSizeLimitEventProperties(obj2),
  );
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
        HermesBuiltin.arraySpread(items1, 0);
        applyResult = HermesBuiltin.apply(items3, _Math);
      }
    }
    num = applyResult;
  }
  let tmp21 = isPremiumExactlyResult;
  if (!isPremiumExactlyResult) {
    tmp21 =
      num > NitroFileUploadExperiments.getNitroFileUploadLimitBytes({ location: "native.showUploadFileSizeError" });
    const tmp2Result16 = NitroFileUploadExperiments;
  }
  if (!tmp21) {
    tmp21 = tmp20;
  }
  if (!tmp21) {
    tmp21 = errorReason === FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  const tmp2Result15 = KestrelExperiment;
  const obj3 = {
    alert_type: tmp21 ? constants.OVER_MAX_SIZE : constants.NITRO_UPSELL,
    num_attachments: file.attachmentsCount,
    total_attachment_size: file.currentSize,
    has_image: file.hasImage,
    has_video: file.hasVideo,
    is_premium: isPremiumExactlyResult,
    image_compression_quality: null,
    image_compression_setting_enabled: null,
  };
  const tmp2Result17 = AppAnalyticsUtils;
  obj3.image_compression_quality = utils_UploadUtils.getImageCompressionQuality();
  obj3.image_compression_setting_enabled = UnsyncedUserSettingsStore.dataSavingMode;
  tmp2Result17.trackWithMetadata(constants.FILE_UPLOAD_ALERT_VIEWED, obj3);
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
          const obj4 = {
            maxSize: FileSizeUtils.formatSize(UploadUtils.MAX_TOTAL_ATTACHMENT_SIZE / FileSizeUtils.BYTE_IN_KB, {
              useKibibytes: true,
            }),
          };
          stringResult1 = formatToPlainString(t.tUOJdH, obj4);
          const tmp2Result19 = FileSizeUtils;
        } else {
          const obj5 = {
            maxSize: FileSizeUtils.formatSize(maxSize / FileSizeUtils.BYTE_IN_KB, { useKibibytes: true }),
          };
          stringResult1 = formatToPlainString(t.fxEKdS, obj5);
          const tmp2Result20 = FileSizeUtils;
        }
      }
      const intl2 = util.intl;
      stringResult = intl2.string(util.t["/tGlcj"]);
    }
    const obj6 = { title: stringResult, body: stringResult1 };
    AlertActionCreatorsDefault.show(obj6);
  } else {
    const obj7 = {
      initialUpsellKey: ConstantsIOS.UpsellTypes.UPLOAD,
      analyticsLocation: null,
      analyticsLocations: null,
      analyticsProperties: null,
      largestFileSize: null,
    };
    const obj8 = { section: constants2.FILE_UPLOAD_POPOUT };
    obj7.analyticsLocation = obj8;
    const items4 = [];
    const obj13 = PremiumUpsellUtilsDefault;
    items4[HermesBuiltin.arraySpread(analyticsLocations, 0)] = AnalyticsLocationDefault.FILE_UPLOAD_POPOUT;
    obj7.analyticsLocations = items4;
    const obj9 = { type: constants3.UPLOAD_ERROR_UPSELL };
    obj7.analyticsProperties = obj9;
    obj7.largestFileSize = num;
    const result = obj13.handleShowUpsellAlert(obj7);
    const arraySpreadResult2 = HermesBuiltin.arraySpread(analyticsLocations, 0);
  }
  const tmp2Result18 = utils_UploadUtils;
}
