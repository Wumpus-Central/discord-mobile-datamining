// discord_app/modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx
import intl4 from "../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ObscuredMediaUtils from "../ObscuredMediaUtils.tsx";
import ExplicitMediaRedactionModels from "../ExplicitMediaRedactionModels.tsx";
import ExplicitMediaRedactionUtils from "../ExplicitMediaRedactionUtils.tsx";
import ExplicitMediaRedactionConstants from "../ExplicitMediaRedactionConstants.tsx";
import SearchConstants from "../../search/SearchConstants.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_4 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY;
const SearchMediaTypes = SearchConstants.SearchMediaTypes;
let result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx",
);

export const handleSensitiveMediaFilterPress = function handleSensitiveMediaFilterPress(arg0) {
  let currentValue;
  let excluded;
  let intl;
  let intl2;
  let intl3;
  let subtitle;
  let title;
  ({ handlePress: require, excluded } = arg0);
  ({ title, subtitle, currentValue } = arg0);
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  let hasItem;
  if (excluded != null) {
    hasItem = excluded.includes(preloaded_user_settings.ExplicitContentRedaction.SHOW);
  }
  const tmp6 = !hasItem && nsfwAllowed;
  const items = [];
  if (tmp6) {
    let obj = {
      value: preloaded_user_settings.ExplicitContentRedaction.SHOW,
      label: intl.string(intl4.t["5k5OFp"]),
      onPress() {
        const obj = ExplicitMediaRedactionUtils;
        if (obj.shouldAgeVerifyForExplicitMedia()) {
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.OBSCURED_MEDIA };
          const showAgeVerificationGetStartedModal =
            AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
          AgeVerificationActionCreatorsDefault;
          const result = showAgeVerificationGetStartedModal(obj2);
        } else {
          require(preloaded_user_settings.ExplicitContentRedaction.SHOW);
        }
      },
    };
    const push = items.push;
    intl = intl4.intl;
    push(obj);
  }
  let hasItem1;
  if (excluded != null) {
    hasItem1 = excluded.includes(preloaded_user_settings.ExplicitContentRedaction.BLUR);
  }
  if (!hasItem1) {
    let obj2 = {
      value: preloaded_user_settings.ExplicitContentRedaction.BLUR,
      label: intl2.string(intl4.t.S49Uad),
      onPress() {
        require(preloaded_user_settings.ExplicitContentRedaction.BLUR);
      },
    };
    const push2 = items.push;
    intl2 = intl4.intl;
    push2(obj2);
  }
  let hasItem2;
  if (excluded != null) {
    hasItem2 = excluded.includes(preloaded_user_settings.ExplicitContentRedaction.BLOCK);
  }
  if (!hasItem2) {
    const push3 = items.push;
    const obj3 = {
      value: preloaded_user_settings.ExplicitContentRedaction.BLOCK,
      label: intl3.string(intl4.t["D/157Y"]),
      onPress() {
        require(preloaded_user_settings.ExplicitContentRedaction.BLOCK);
      },
    };
    intl3 = intl4.intl;
    push3(obj3);
  }
  const obj4 = ActionSheetActionCreatorsDefault;
  obj4.openLazy(asyncRequire(14651, dependencyMap.paths), closure_4, { title, subtitle, options: items, currentValue });
};
export const shouldAgeVerifyForSearchMedia = function shouldAgeVerifyForSearchMedia(media, found) {
  if (null == found) {
    return false;
  } else {
    const obj5 = ObscuredMediaUtils;
    const enabledHarmTypesForMessage = obj5.getEnabledHarmTypesForMessage(found);
    if (0 === enabledHarmTypesForMessage) {
      return false;
    } else {
      let tmp;
      if (media.type === SearchMediaTypes.ATTACHMENT) {
        tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: media.attachment };
        const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: media.attachment };
      } else if (media.type === SearchMediaTypes.EMBED) {
        tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: media.embed };
        const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: media.embed };
      } else {
        tmp = null;
        if (media.type === SearchMediaTypes.COMPONENT) {
          tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: media.unfurledMediaItem };
          const obj3 = {
            type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia,
            media: media.unfurledMediaItem,
          };
        }
      }
      let tmp2 = null != tmp;
      if (tmp2) {
        const tmp4Result = ObscuredMediaUtils;
        let result = tmp4Result.isMediaObscuredForHarmTypes(tmp, enabledHarmTypesForMessage);
        if (result) {
          const tmp4Result2 = ExplicitMediaRedactionUtils;
          result = tmp4Result2.shouldAgeVerifyForExplicitMedia();
        }
        tmp2 = result;
      }
      return tmp2;
    }
  }
};
