// discord_app/modules/content_inventory/ContentInventoryActivityImageUtils.tsx
import set from "../../../_runtime/00002_set.js";
import noop from "../../../_runtime/00019_noop.js";
import getSystemLocale from "../../intl/index.native.tsx";
import getAvatarURLDefault from "../../utils/AvatarUtils.tsx";
import items3 from "../activities/Constants.tsx";
import useGetOrFetchApplications from "../applications/useGetOrFetchApplications.tsx";
import importDefaultResult1 from "../games/hooks/useGame.tsx";
import isCrunchyrollActivityDefault from "../activities/utils/isCrunchyrollActivity.tsx";
import unpackStageChannelParty from "../stage_channels/StageChannelRichPresenceUtils.tsx";
import useEntryActivityAndApplicationDefault from "useEntryActivityAndApplication.tsx";
import isOnXboxDefault from "../activities/utils/isOnXbox.tsx";
import closure_4 from "../applications/ApplicationStore.tsx";
import ME from "../../Constants.tsx";

function useComputedImagesForActivity(activity, getIconURL) {
  ({ largeImage, smallImage } = useRichImageForActivity(activity, getIconURL));
  if (null != largeImage) {
    let obj = { largeImage: null, smallImage: null };
    obj[0] = largeImage;
    obj[1] = smallImage;
    let obj8 = obj;
  } else {
    if (obj17.isStageActivity(activity)) {
      const result = tmp15(9872).unpackStageChannelParty(activity);
      let guildIconURL;
      if (null != result) {
        obj = { id: null, icon: null, size: null };
        obj[0] = result.guildId;
        let small_image;
        if (activity != null) {
          const assets = activity.assets;
          if (assets != null) {
            small_image = assets.small_image;
          }
        }
        obj[1] = small_image;
        obj[2] = ImageSizes.SMALL;
        guildIconURL = getAvatarURLDefault.getGuildIconURL(obj);
        const obj12 = getAvatarURLDefault;
      }
      let tmp14;
      if (null != guildIconURL) {
        obj1 = { src: null };
        obj1[0] = guildIconURL;
        tmp14 = obj1;
      }
      const obj2 = { largeImage: null, smallImage: "a" };
      obj2[0] = tmp14;
      obj8 = obj2;
      const tmp15Result = tmp15(9872);
    } else if (isOnXboxDefault(activity)) {
      const obj3 = { largeImage: null, smallImage: "a" };
      const obj4 = { src: null, alt: null };
      let tmp2Result = tmp2(5174);
      obj4[0] = tmp2Result.get(constants.XBOX).icon.customPNG;
      const intl4 = tmp15(1236).intl;
      obj4[1] = intl4.string(tmp15(1236).t.Nfvo72);
      obj3[0] = obj4;
      obj8 = obj3;
    } else {
      if (null == smallImage) {
        if (tmp2(12556)(activity)) {
          const obj5 = { largeImage: null, smallImage: "a" };
          const obj6 = { src: null, alt: null };
          tmp2Result = tmp2(5174);
          obj6[0] = tmp2Result.get(constants.PLAYSTATION).icon.lightPNG;
          const intl3 = tmp15(1236).intl;
          obj6[1] = intl3.string(tmp15(1236).t.fFl4jo);
          obj5[0] = obj6;
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
          const obj7 = { largeImage: null, smallImage: null };
          obj7[0] = undefined;
          obj7[1] = smallImage;
          obj8 = obj7;
        } else {
          obj8 = { largeImage: null, smallImage: "a" };
          obj8[0] = smallImage;
        }
      } else {
        obj = { src: null, alt: null };
        obj[0] = iconURL;
        if (null == name) {
          const intl2 = tmp15(1236).intl;
          let stringResult = intl2.string(tmp15(1236).t["2B/phM"]);
        } else {
          const intl = tmp15(1236).intl;
          const obj9 = { applicationName: null };
          obj9[0] = name;
          stringResult = intl.formatToPlainString(tmp15(1236).t.tiKyYg, obj9);
        }
        obj[1] = stringResult;
      }
    }
    obj17 = unpackStageChannelParty;
  }
  return obj8;
}
function useTrackActivityDefaultIcon(arg0) {
  ({ activity, trackingSource } = arg0);
  let application_id;
  let stateFromStores;
  useEffect = undefined;
  closure_4 = undefined;
  let name;
  let type;
  let session_id;
  closure_8 = undefined;
  closure_9 = undefined;
  application_id = undefined;
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
      result = closure_4.didFetchingApplicationFail(tmp);
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
  closure_8 = tmp11;
  closure_9 = tmp13;
  const items1 = [trackingSource, null != activity, tmp4, null == largeImageSrc, application_id, name, type, session_id, null != getOrFetchApplication || null != application, tmp11];
  useEffect(() => {
    let tmp = closure_9;
    if (closure_9) {
      tmp = stateFromStores;
    }
    if (tmp) {
      tmp = closure_4;
    }
    if (tmp) {
      let obj = application_id(stateFromStores[16]);
      obj = { source: null, application_id: null, activity_name: null, activity_type: null, activity_session_id: null, application_found: null, has_rich_assets: null };
      obj[0] = trackingSource;
      obj[1] = application_id;
      obj[2] = name;
      obj[3] = type;
      obj[4] = session_id;
      obj[5] = closure_3;
      obj[6] = closure_8;
      obj.track(name.ACTIVITY_DEFAULT_ICON_SHOWN, obj);
    }
  }, items1);
}
function useRichImageForActivity(activity, activityApplication) {
  useGetOrFetchApplications;
  if (activity != null) {
    const application_id = activity.application_id;
  }
  if (null == activity) {
    return { largeImage: "isArray", smallImage: "accessibilityRole" };
  } else {
    let large_image;
    if (activity != null) {
      const assets = activity.assets;
      if (assets != null) {
        large_image = assets.large_image;
      }
    }
    let tmp5;
    if (null != large_image) {
      let obj = { src: null, text: null, url: null };
      let tmpResult = tmp(8463);
      const items = [, ];
      ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
      obj[0] = tmpResult.getAssetImage(activity.application_id, large_image, items);
      const assets2 = activity.assets;
      let trimmed;
      if (assets2 != null) {
        if (assets2.large_text != null) {
          trimmed = str.trim();
        }
      }
      obj[1] = trimmed;
      const assets3 = activity.assets;
      let large_url;
      if (assets3 != null) {
        large_url = assets3.large_url;
      }
      obj[2] = large_url;
      tmp5 = obj;
    }
    let tmp10;
    if (!isCrunchyrollActivityDefault(activity)) {
      let small_image;
      if (activity != null) {
        const assets4 = activity.assets;
        if (assets4 != null) {
          small_image = assets4.small_image;
        }
      }
      tmp10 = small_image;
    }
    let tmp12;
    if (null != tmp10) {
      obj = { src: null, text: null, url: null };
      tmpResult = tmp(8463);
      const items1 = [, ];
      ({ LARGE: arr2[0], LARGE: arr2[1] } = ImageSizes);
      obj[0] = tmpResult.getAssetImage(activity.application_id, tmp10, items1);
      const assets5 = activity.assets;
      let trimmed1;
      if (assets5 != null) {
        if (assets5.small_text != null) {
          trimmed1 = str2.trim();
        }
      }
      obj[1] = trimmed1;
      const assets6 = activity.assets;
      let small_url;
      if (assets6 != null) {
        small_url = assets6.small_url;
      }
      obj[2] = small_url;
      tmp12 = obj;
    }
    if (tmp5 == null) {
      let obj5 = activityApplication;
      if (activityApplication == null) {
        obj5 = tmp3;
      }
      let iconURL;
      if (obj5 != null) {
        iconURL = obj5.getIconURL(ImageSizes.LARGE);
      }
      if (obj5 != null) {
        const name = obj5.name;
      }
      if (null != iconURL) {
        obj = { src: null, alt: null };
        obj[0] = iconURL;
        if (null == name) {
          const intl2 = tmp(1236).intl;
          let stringResult = intl2.string(_2B_phM);
        } else {
          const intl = tmp(1236).intl;
          obj1 = { applicationName: null };
          obj1[0] = name;
          stringResult = intl.formatToPlainString(tmp(1236).t.tiKyYg, obj1);
        }
        obj[1] = stringResult;
      }
    }
    const obj2 = { largeImage: null, smallImage: null };
    obj2[0] = tmp5;
    obj2[1] = tmp12;
    return obj2;
  }
}
let useEffect = noop.useEffect;
({ AnalyticEvents: c5, PlatformTypes: closure_6 } = ME);
const ImageSizes = items3.ImageSizes;
let result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityImageUtils.tsx");

export const getApplicationImage = function getApplicationImage(getIconURL) {
  let iconURL;
  if (getIconURL != null) {
    iconURL = getIconURL.getIconURL(ImageSizes.LARGE);
  }
  if (getIconURL != null) {
    const name = getIconURL.name;
  }
  if (null != iconURL) {
    let obj = { src: null, alt: null };
    obj[0] = iconURL;
    if (null == name) {
      const intl2 = getSystemLocale.intl;
      let stringResult = intl2.string(getSystemLocale.t["2B/phM"]);
    } else {
      const intl = getSystemLocale.intl;
      obj = { applicationName: null };
      obj[0] = name;
      stringResult = intl.formatToPlainString(getSystemLocale.t.tiKyYg, obj);
    }
    obj[1] = stringResult;
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
  obj1 = importDefaultResult1;
  const data = obj1.useGame(canonicalGameId).data;
  if (data != null) {
    const coverURL = data.getCoverURL();
  }
  let tmp5Result = tmp5(9119);
  if (tmp5Result.isListenedSessionEntry(entry)) {
    if (entry.extra.entries.length > 0) {
      obj = { src: null };
      obj[0] = entry.extra.entries[0].media.image_url;
      let tmp7 = obj;
    }
    if (null != largeImage) {
      obj = { largeImage: null, smallImage: null };
      obj[0] = largeImage;
      obj[1] = tmp3.smallImage;
      let obj4 = obj;
    } else if (null != tmp7) {
      obj1 = { largeImage: null, smallImage: "a" };
      obj1[0] = tmp7;
      obj4 = obj1;
    } else {
      if (null != coverURL) {
        if (showCoverImage) {
          const obj2 = { largeImage: null, smallImage: "a" };
          const obj3 = { src: null };
          obj3[0] = coverURL;
          obj2[0] = obj3;
          obj4 = obj2;
        }
      }
      obj4 = { largeImage: null, smallImage: "a" };
      obj4[0] = useComputedImagesForActivity(activity, obj).largeImage;
    }
    const obj5 = { activity: null, application: null, largeImageSrc: null, trackingSource: null };
    obj5[0] = activity;
    if (fallbackApplication == null) {
      fallbackApplication = activityApplication;
    }
    obj5[1] = fallbackApplication;
    const largeImage2 = obj4.largeImage;
    let src;
    if (largeImage2 != null) {
      src = largeImage2.src;
    }
    obj5[2] = src;
    obj5[3] = trackingSource.trackingSource;
    useTrackActivityDefaultIcon(obj5);
    return obj4;
  }
  tmp5Result = tmp5(9119);
  if (tmp5Result.isWatchedMediaEntry(entry)) {
    const obj6 = { src: null, alt: null };
    obj6[0] = tmp5(8463).getAssetImage(entry.extra.application_id, entry.extra.media_assets_large_image, ImageSizes.LARGE);
    obj6[1] = entry.extra.media_title;
    tmp7 = obj6;
    const tmp5Result1 = tmp5(8463);
  } else {
    if (tmp5Result2.isTopArtistEntry(entry)) {
      const obj7 = { src: null };
      obj7[0] = entry.extra.media.image_url;
      tmp7 = obj7;
    }
    tmp5Result2 = tmp5(9119);
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
  obj[2] = src;
  obj[3] = user_profile_activity_native;
  useTrackActivityDefaultIcon(obj);
  return tmp;
};
export { useRichImageForActivity };