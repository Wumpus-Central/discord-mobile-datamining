// discord_app/modules/content_inventory/ContentInventoryActivityImageUtils.tsx
import _mod19 from "../../../_runtime/metro/00019__.js";
import util from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import Constants2 from "../activities/Constants.tsx";
import useGetOrFetchApplications from "../applications/useGetOrFetchApplications.tsx";
import useGame from "../games/hooks/useGame.tsx";
import isCrunchyrollActivityDefault from "../activities/utils/isCrunchyrollActivity.tsx";
import StageChannelRichPresenceUtils from "../stage_channels/StageChannelRichPresenceUtils.tsx";
import useEntryActivityAndApplicationDefault from "useEntryActivityAndApplication.tsx";
import isOnXboxDefault from "../activities/utils/isOnXbox.tsx";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function useComputedImagesForActivity(activity, getIconURL) {
  ({ largeImage, smallImage } = useRichImageForActivity(activity, getIconURL));
  if (null != largeImage) {
    let obj = { largeImage, smallImage };
    let obj8 = obj;
  } else {
    if (obj17.isStageActivity(activity)) {
      const result = tmp15(10892).unpackStageChannelParty(activity);
      let guildIconURL;
      if (null != result) {
        obj = { id: result.guildId, icon: null, size: null };
        let small_image;
        if (activity != null) {
          const assets = activity.assets;
          if (assets != null) {
            small_image = assets.small_image;
          }
        }
        obj.icon = small_image;
        obj.size = ImageSizes.SMALL;
        guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj);
      }
      let tmp14;
      if (null != guildIconURL) {
        const obj1 = { src: guildIconURL };
        tmp14 = obj1;
      }
      const obj2 = { largeImage: tmp14, smallImage: "a" };
      obj8 = obj2;
      const tmp15Result = tmp15(10892);
    } else if (isOnXboxDefault(activity)) {
      const obj3 = { largeImage: null, smallImage: "a" };
      const obj4 = { src: null, alt: null };
      let tmp2Result = tmp2(5283);
      obj4.src = tmp2Result.get(constants2.XBOX).icon.customPNG;
      const intl4 = tmp15(1114).intl;
      obj4.alt = intl4.string(tmp15(1114).t.Nfvo72);
      obj3.largeImage = obj4;
      obj8 = obj3;
    } else {
      if (null == smallImage) {
        if (tmp2(13003)(activity)) {
          const obj5 = { largeImage: null, smallImage: "a" };
          const obj6 = { src: null, alt: null };
          tmp2Result = tmp2(5283);
          obj6.src = tmp2Result.get(constants2.PLAYSTATION).icon.lightPNG;
          const intl3 = tmp15(1114).intl;
          obj6.alt = intl3.string(tmp15(1114).t.fFl4jo);
          obj5.largeImage = obj6;
          obj8 = obj5;
        }
      }
      let iconURL;
      if (getIconURL != null) {
        iconURL = getIconURL.getIconURL(ImageSizes.LARGE);
      }
      if (getIconURL != null) {
        const name = getIconURL.name;
      }
      if (null == iconURL) {
        if (null != undefined) {
          const obj7 = { largeImage: undefined, smallImage };
          obj8 = obj7;
        } else {
          obj8 = { largeImage: smallImage, smallImage: "a" };
        }
      } else {
        obj = { src: iconURL, alt: null };
        if (null == name) {
          const intl2 = tmp15(1114).intl;
          let stringResult = intl2.string(tmp15(1114).t["2B/phM"]);
        } else {
          const intl = tmp15(1114).intl;
          const obj9 = { applicationName: name };
          stringResult = intl.formatToPlainString(tmp15(1114).t.tiKyYg, obj9);
        }
        obj.alt = stringResult;
      }
    }
    obj17 = StageChannelRichPresenceUtils;
  }
  return obj8;
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
      const obj = {
        source: trackingSource,
        application_id,
        activity_name: name,
        activity_type: type,
        activity_session_id: session_id,
        application_found,
        has_rich_assets,
      };
      obj.track(constants.ACTIVITY_DEFAULT_ICON_SHOWN, obj);
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
    return { largeImage: "hash", smallImage: "call" };
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
      let obj = { src: null, text: null, url: null };
      let tmpResult = tmp(8139);
      const items = [,];
      ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
      obj.src = tmpResult.getAssetImage(activity.application_id, large_image, items);
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
      obj = { src: null, text: null, url: null };
      tmpResult = tmp(8139);
      const items1 = [,];
      ({ LARGE: arr2[0], LARGE: arr2[1] } = ImageSizes);
      obj.src = tmpResult.getAssetImage(activity.application_id, tmp11, items1);
      const assets5 = activity.assets;
      let trimmed1;
      if (assets5 != null) {
        if (assets5.small_text != null) {
          trimmed1 = str2.trim();
        }
      }
      obj.text = trimmed1;
      const assets6 = activity.assets;
      let small_url;
      if (assets6 != null) {
        small_url = assets6.small_url;
      }
      obj.url = small_url;
      tmp13 = obj;
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
        obj = { src: iconURL, alt: null };
        if (null == name) {
          const intl2 = tmp(1114).intl;
          prop = tmp(1114).t["2B/phM"];
          let stringResult = intl2.string(prop);
        } else {
          const intl = tmp(1114).intl;
          const obj1 = { applicationName: name };
          stringResult = intl.formatToPlainString(tmp(1114).t.tiKyYg, obj1);
        }
        obj.alt = stringResult;
      }
    }
    const obj2 = { largeImage: tmp6, smallImage: tmp13 };
    return obj2;
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
    let obj = { src: iconURL, alt: null };
    if (null == name) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["2B/phM"]);
    } else {
      const intl = util.intl;
      obj = { applicationName: name };
      stringResult = intl.formatToPlainString(util.t.tiKyYg, obj);
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
  let obj1 = useGame;
  const data = obj1.useGame(canonicalGameId).data;
  if (data != null) {
    const coverURL = data.getCoverURL();
  }
  let tmp5Result = tmp5(8341);
  if (tmp5Result.isListenedSessionEntry(entry)) {
    if (entry.extra.entries.length > 0) {
      obj = { src: entry.extra.entries[0].media.image_url };
      let tmp7 = obj;
    }
    if (null != largeImage) {
      obj = { largeImage, smallImage: tmp3.smallImage };
      let obj4 = obj;
    } else if (null != tmp7) {
      obj1 = { largeImage: tmp7, smallImage: "a" };
      obj4 = obj1;
    } else {
      if (null != coverURL) {
        if (showCoverImage) {
          const obj2 = { largeImage: null, smallImage: "a" };
          const obj3 = { src: coverURL };
          obj2.largeImage = obj3;
          obj4 = obj2;
        }
      }
      obj4 = { largeImage: useComputedImagesForActivity(activity, obj).largeImage, smallImage: "a" };
    }
    const obj5 = { activity, application: null, largeImageSrc: null, trackingSource: null };
    if (fallbackApplication == null) {
      fallbackApplication = activityApplication;
    }
    obj5.application = fallbackApplication;
    const largeImage2 = obj4.largeImage;
    let src;
    if (largeImage2 != null) {
      src = largeImage2.src;
    }
    obj5.largeImageSrc = src;
    obj5.trackingSource = trackingSource.trackingSource;
    useTrackActivityDefaultIcon(obj5);
    return obj4;
  }
  tmp5Result = tmp5(8341);
  if (tmp5Result.isWatchedMediaEntry(entry)) {
    const obj6 = {
      src: tmp5(8139).getAssetImage(entry.extra.application_id, entry.extra.media_assets_large_image, ImageSizes.LARGE),
      alt: entry.extra.media_title,
    };
    tmp7 = obj6;
    const tmp5Result1 = tmp5(8139);
  } else {
    if (tmp5Result2.isTopArtistEntry(entry)) {
      const obj7 = { src: entry.extra.media.image_url };
      tmp7 = obj7;
    }
    tmp5Result2 = tmp5(8341);
  }
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
