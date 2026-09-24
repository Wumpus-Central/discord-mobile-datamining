// discord_app/modules/content_inventory/ContentInventoryActivityImageUtils.tsx
import _mod19 from "../../../_runtime/metro/00019__.js";
import util from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import Constants2 from "../activities/Constants.tsx";
import PlatformsDefault from "../../lib/Platforms.tsx";
import useGetOrFetchApplications from "../applications/useGetOrFetchApplications.tsx";
import useGame from "../games/hooks/useGame.tsx";
import ApplicationAssetUtils from "../../utils/ApplicationAssetUtils.tsx";
import ContentInventoryTypes from "ContentInventoryTypes.tsx";
import isCrunchyrollActivityDefault from "../activities/utils/isCrunchyrollActivity.tsx";
import StageChannelRichPresenceUtils from "../stage_channels/StageChannelRichPresenceUtils.tsx";
import useEntryActivityAndApplicationDefault from "useEntryActivityAndApplication.tsx";
import isOnXboxDefault from "../activities/utils/isOnXbox.tsx";
import isOnPlayStationDefault from "../activities/utils/isOnPlayStation.tsx";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function useComputedImagesForActivity(activity, activityApplication) {
  ({ largeImage, smallImage } = useRichImageForActivity(activity, activityApplication));
  if (null != largeImage) {
    const obj2 = { largeImage, smallImage };
    let obj11 = obj2;
  } else {
    if (obj17.isStageActivity(activity)) {
      const result = StageChannelRichPresenceUtils.unpackStageChannelParty(activity);
      let guildIconURL;
      if (null != result) {
        const obj3 = { id: result.guildId, icon: null, size: null };
        let small_image;
        if (activity != null) {
          const assets = activity.assets;
          if (assets != null) {
            small_image = assets.small_image;
          }
        }
        obj3.icon = small_image;
        obj3.size = ImageSizes.SMALL;
        guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj3);
      }
      let tmp14;
      if (null != guildIconURL) {
        const obj4 = { src: guildIconURL };
        tmp14 = obj4;
      }
      const obj5 = { largeImage: tmp14, smallImage: "Array" };
      obj11 = obj5;
      const tmp15Result = StageChannelRichPresenceUtils;
    } else if (isOnXboxDefault(activity)) {
      const obj6 = { largeImage: null, smallImage: "Array" };
      const obj7 = { src: PlatformsDefault.get(constants2.XBOX).icon.customPNG, alt: null };
      const intl4 = util.intl;
      obj7.alt = intl4.string(util.t.Nfvo72);
      obj6.largeImage = obj7;
      obj11 = obj6;
      const tmp2Result = PlatformsDefault;
    } else {
      if (null == smallImage) {
        if (isOnPlayStationDefault(activity)) {
          const obj8 = { largeImage: null, smallImage: "Array" };
          const obj9 = { src: PlatformsDefault.get(constants2.PLAYSTATION).icon.lightPNG, alt: null };
          const intl3 = util.intl;
          obj9.alt = intl3.string(util.t.fFl4jo);
          obj8.largeImage = obj9;
          obj11 = obj8;
          const tmp2Result2 = PlatformsDefault;
        }
      }
      let iconURL;
      if (activityApplication != null) {
        iconURL = activityApplication.getIconURL(ImageSizes.LARGE);
      }
      if (activityApplication != null) {
        const name = activityApplication.name;
      }
      if (null == iconURL) {
        if (null != undefined) {
          const obj10 = { largeImage: undefined, smallImage };
          obj11 = obj10;
        } else {
          obj11 = { largeImage: smallImage, smallImage: "Array" };
        }
      } else {
        const obj = { src: iconURL, alt: null };
        if (null == name) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t["2B/phM"]);
        } else {
          const intl = util.intl;
          const obj13 = { applicationName: name };
          stringResult = intl.formatToPlainString(util.t.tiKyYg, obj13);
        }
        obj.alt = stringResult;
      }
    }
    obj17 = StageChannelRichPresenceUtils;
  }
  return obj11;
}
function useTrackActivityDefaultIcon(arg0) {
  ({ activity, trackingSource } = arg0);
  let stateFromStores;
  useEffect = undefined;
  closure_4 = undefined;
  let name;
  let type;
  let session_id;
  let has_rich_assets;
  closure_9 = undefined;
  let application_id;
  ({ application, largeImageSrc } = arg0);
  if (activity != null) {
    application_id = activity.application_id;
  }
  const getOrFetchApplication = trackingSource(stateFromStores[14]).useGetOrFetchApplication(application_id);
  let obj = trackingSource(stateFromStores[14]);
  const items = [closure_4];
  let tmp4 = null == application_id;
  stateFromStores = trackingSource(stateFromStores[15]).useStateFromStores(items, () => {
    let result = null != application_id;
    if (result) {
      result = ApplicationStore.didFetchingApplicationFail(tmp);
    }
    return result;
  });
  if (!tmp4) {
    tmp4 = null != getOrFetchApplication;
  }
  if (!tmp4) {
    tmp4 = stateFromStores;
  }
  stateFromStores = tmp4;
  useEffect = tmp5;
  closure_4 = tmp6;
  name = undefined;
  if (activity != null) {
    name = activity.name;
  }
  type = undefined;
  if (activity != null) {
    type = activity.type;
  }
  session_id = undefined;
  if (activity != null) {
    session_id = activity.session_id;
  }
  let large_image;
  if (activity != null) {
    const assets = activity.assets;
    if (assets != null) {
      large_image = assets.large_image;
    }
  }
  let tmp11 = null != large_image;
  if (!tmp11) {
    let small_image;
    if (activity != null) {
      const assets2 = activity.assets;
      if (assets2 != null) {
        small_image = assets2.small_image;
      }
    }
    tmp11 = null != small_image;
  }
  has_rich_assets = tmp11;
  closure_9 = tmp13;
  const items1 = [
    trackingSource,
    null != activity,
    tmp4,
    null == largeImageSrc,
    application_id,
    name,
    type,
    session_id,
    null != getOrFetchApplication || null != application,
    tmp11,
  ];
  useEffect(() => {
    let tmp = closure_9;
    if (closure_9) {
      tmp = stateFromStores;
    }
    if (tmp) {
      tmp = closure_4;
    }
    if (tmp) {
      const obj2 = {
        source: trackingSource,
        application_id,
        activity_name: name,
        activity_type: type,
        activity_session_id: session_id,
        application_found,
        has_rich_assets,
      };
      AnalyticsUtilsDefault.track(constants.ACTIVITY_DEFAULT_ICON_SHOWN, obj2);
    }
  }, items1);
}
function useRichImageForActivity(activity, activityApplication) {
  let prop = dependencyMap;
  useGetOrFetchApplications;
  if (activity != null) {
    const application_id = activity.application_id;
  }
  if (null == activity) {
    return { largeImage: "channel", smallImage: "channelId" };
  } else {
    let large_image;
    if (activity != null) {
      const assets = activity.assets;
      if (assets != null) {
        large_image = assets.large_image;
      }
    }
    let tmp6;
    if (null != large_image) {
      const obj = { src: null, text: null, url: null };
      const items = [,];
      ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
      obj.src = ApplicationAssetUtils.getAssetImage(activity.application_id, large_image, items);
      const assets2 = activity.assets;
      let trimmed;
      if (assets2 != null) {
        if (assets2.large_text != null) {
          trimmed = str.trim();
        }
      }
      obj.text = trimmed;
      const assets3 = activity.assets;
      let large_url;
      if (assets3 != null) {
        large_url = assets3.large_url;
      }
      obj.url = large_url;
      tmp6 = obj;
      const tmpResult = ApplicationAssetUtils;
    }
    let tmp11;
    if (!isCrunchyrollActivityDefault(activity)) {
      let small_image;
      if (activity != null) {
        const assets4 = activity.assets;
        if (assets4 != null) {
          small_image = assets4.small_image;
        }
      }
      tmp11 = small_image;
    }
    let tmp13;
    if (null != tmp11) {
      const obj2 = { src: null, text: null, url: null };
      const items1 = [,];
      ({ LARGE: arr2[0], LARGE: arr2[1] } = ImageSizes);
      obj2.src = ApplicationAssetUtils.getAssetImage(activity.application_id, tmp11, items1);
      const assets5 = activity.assets;
      let trimmed1;
      if (assets5 != null) {
        if (assets5.small_text != null) {
          trimmed1 = str2.trim();
        }
      }
      obj2.text = trimmed1;
      const assets6 = activity.assets;
      let small_url;
      if (assets6 != null) {
        small_url = assets6.small_url;
      }
      obj2.url = small_url;
      tmp13 = obj2;
      const tmpResult2 = ApplicationAssetUtils;
    }
    if (tmp6 == null) {
      let obj5 = activityApplication;
      if (activityApplication == null) {
        obj5 = tmp4;
      }
      let iconURL;
      if (obj5 != null) {
        iconURL = obj5.getIconURL(ImageSizes.LARGE);
      }
      if (obj5 != null) {
        const name = obj5.name;
      }
      if (null != iconURL) {
        const obj3 = { src: iconURL, alt: null };
        if (null == name) {
          const intl2 = util.intl;
          prop = util.t["2B/phM"];
          let stringResult = intl2.string(prop);
        } else {
          const intl = util.intl;
          const obj4 = { applicationName: name };
          stringResult = intl.formatToPlainString(util.t.tiKyYg, obj4);
        }
        obj3.alt = stringResult;
      }
    }
    const obj6 = { largeImage: tmp6, smallImage: tmp13 };
    return obj6;
  }
}
let useEffect = _mod19.useEffect;
({ AnalyticEvents: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const ImageSizes = Constants2.ImageSizes;
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityImageUtils.tsx");

export const getApplicationImage = function getApplicationImage(getIconURL) {
  let iconURL;
  if (getIconURL != null) {
    iconURL = getIconURL.getIconURL(ImageSizes.LARGE);
  }
  if (getIconURL != null) {
    const name = getIconURL.name;
  }
  if (null != iconURL) {
    const obj = { src: iconURL, alt: null };
    if (null == name) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["2B/phM"]);
    } else {
      const intl = util.intl;
      const obj2 = { applicationName: name };
      stringResult = intl.formatToPlainString(util.t.tiKyYg, obj2);
    }
    obj.alt = stringResult;
    return obj;
  }
};
export const useImageForContentEntry = function useImageForContentEntry(trackingSource) {
  ({ entry, showCoverImage } = trackingSource);
  if (showCoverImage === undefined) {
    showCoverImage = true;
  }
  ({ activity, activityApplication, fallbackApplication } = useEntryActivityAndApplicationDefault(entry));
  let obj = fallbackApplication;
  if (fallbackApplication == null) {
    obj = activityApplication;
  }
  const tmp3 = useRichImageForActivity(activity, activityApplication);
  const largeImage = tmp3.largeImage;
  let canonicalGameId;
  if (obj != null) {
    canonicalGameId = obj.getCanonicalGameId();
  }
  const tmp2 = useEntryActivityAndApplicationDefault(entry);
  const data = useGame.useGame(canonicalGameId).data;
  if (data != null) {
    const coverURL = data.getCoverURL();
  }
  if (tmp5Result.isListenedSessionEntry(entry)) {
    if (entry.extra.entries.length > 0) {
      const obj3 = { src: entry.extra.entries[0].media.image_url };
      let tmp7 = obj3;
    }
    if (null != largeImage) {
      const obj4 = { largeImage, smallImage: tmp3.smallImage };
      let obj8 = obj4;
    } else if (null != tmp7) {
      const obj5 = { largeImage: tmp7, smallImage: "Array" };
      obj8 = obj5;
    } else {
      if (null != coverURL) {
        if (showCoverImage) {
          const obj6 = { largeImage: null, smallImage: "Array" };
          const obj7 = { src: coverURL };
          obj6.largeImage = obj7;
          obj8 = obj6;
        }
      }
      obj8 = { largeImage: useComputedImagesForActivity(activity, obj).largeImage, smallImage: "Array" };
    }
    const obj9 = { activity, application: null, largeImageSrc: null, trackingSource: null };
    if (fallbackApplication == null) {
      fallbackApplication = activityApplication;
    }
    obj9.application = fallbackApplication;
    const largeImage2 = obj8.largeImage;
    let src;
    if (largeImage2 != null) {
      src = largeImage2.src;
    }
    obj9.largeImageSrc = src;
    obj9.trackingSource = trackingSource.trackingSource;
    useTrackActivityDefaultIcon(obj9);
    return obj8;
  }
  tmp5Result = ContentInventoryTypes;
  if (tmp5Result4.isWatchedMediaEntry(entry)) {
    const obj10 = {
      src: ApplicationAssetUtils.getAssetImage(
        entry.extra.application_id,
        entry.extra.media_assets_large_image,
        ImageSizes.LARGE,
      ),
      alt: entry.extra.media_title,
    };
    tmp7 = obj10;
    const tmp5Result5 = ApplicationAssetUtils;
  } else {
    if (tmp5Result6.isTopArtistEntry(entry)) {
      const obj11 = { src: entry.extra.media.image_url };
      tmp7 = obj11;
    }
    tmp5Result6 = ContentInventoryTypes;
  }
  tmp5Result4 = ContentInventoryTypes;
};
export const useImageForActivity = function useImageForActivity(activity, application, user_profile_activity_native) {
  const tmp = useComputedImagesForActivity(activity, application);
  const obj = { activity, application, largeImageSrc: null, trackingSource: null };
  const largeImage = tmp.largeImage;
  let src;
  if (largeImage != null) {
    src = largeImage.src;
  }
  obj.largeImageSrc = src;
  obj.trackingSource = user_profile_activity_native;
  useTrackActivityDefaultIcon(obj);
  return tmp;
};
export { useRichImageForActivity };
