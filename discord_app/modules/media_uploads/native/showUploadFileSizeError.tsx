// discord_app/modules/media_uploads/native/showUploadFileSizeError.tsx
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import utils_UploadUtils from "../../../utils/native/UploadUtils.tsx";
import KestrelExperiment from "../experiments/KestrelExperiment.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import buildFileSizeLimitEventProperties from "../buildFileSizeLimitEventProperties.tsx";
import getUploaderFileSizeMetrics from "../getUploaderFileSizeMetrics.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import UnsyncedUserSettingsStore from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const FileUploadErrorTypes = fn(4553).FileUploadErrorTypes;
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_8, PremiumUpsellTypes: closure_9 } = PremiumConstants);
let closure_10 = { NITRO_UPSELL: "Nitro Upsell", OVER_MAX_SIZE: "Over Max Size" };
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
  const tmp2Result1 = AppAnalyticsUtils;
  const tmp7 = constants;
  obj = {
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
    tmp21 = num > tmp2(5130).getNitroFileUploadLimitBytes({ location: "native.showUploadFileSizeError" });
    const tmp2Result5 = tmp2(5130);
  }
  if (!tmp21) {
    tmp21 = tmp20;
  }
  if (!tmp21) {
    tmp21 = errorReason === tmp19.ERROR_SOURCE_UNKNOWN;
  }
  const tmp2Result4 = KestrelExperiment;
  obj = {
    alert_type: tmp21 ? tmp22.OVER_MAX_SIZE : tmp22.NITRO_UPSELL,
    num_attachments: file.attachmentsCount,
    total_attachment_size: file.currentSize,
    has_image: file.hasImage,
    has_video: file.hasVideo,
    is_premium: isPremiumExactlyResult,
    image_compression_quality: null,
    image_compression_setting_enabled: null,
  };
  const tmp2Result6 = AppAnalyticsUtils;
  obj.image_compression_quality = utils_UploadUtils.getImageCompressionQuality();
  obj.image_compression_setting_enabled = UnsyncedUserSettingsStore.dataSavingMode;
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
          const obj1 = {
            maxSize: tmp2(4457).formatSize(tmp2(5129).MAX_TOTAL_ATTACHMENT_SIZE / tmp2(4457).BYTE_IN_KB, {
              useKibibytes: true,
            }),
          };
          stringResult1 = formatToPlainString(t.tUOJdH, obj1);
          const tmp2Result8 = tmp2(4457);
        } else {
          const obj2 = { maxSize: tmp2(4457).formatSize(maxSize / tmp2(4457).BYTE_IN_KB, { useKibibytes: true }) };
          stringResult1 = formatToPlainString(t.fxEKdS, obj2);
          const tmp2Result9 = tmp2(4457);
        }
      }
      const intl2 = tmp2(1114).intl;
      stringResult = intl2.string(tmp2(1114).t["/tGlcj"]);
    }
    const obj3 = { title: stringResult, body: stringResult1 };
    AlertActionCreatorsDefault.show(obj3);
  } else {
    const obj4 = {
      initialUpsellKey: tmp2(1093).UpsellTypes.UPLOAD,
      analyticsLocation: null,
      analyticsLocations: null,
      analyticsProperties: null,
      largestFileSize: null,
    };
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
}
