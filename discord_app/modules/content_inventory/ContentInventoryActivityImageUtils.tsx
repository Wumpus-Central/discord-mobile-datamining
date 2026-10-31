// === Module 14841: ContentInventoryActivityImageUtils ===

// Module 14841 (ContentInventoryActivityImageUtils)
import _mod19 from "module_19" /* 19 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import Constants2 from "Constants" /* 2018 */;
import PlatformsDefault from "Platforms" /* 6574 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7330 */;
import useGame from "useGame" /* 7480 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8721 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8912 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 8915 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10757 */;
import StageChannelRichPresenceUtils from "StageChannelRichPresenceUtils" /* 10763 */;
import useEntryActivityAndApplicationDefault from "useEntryActivityAndApplication" /* 14842 */;
import isOnXboxDefault from "isOnXbox" /* 14848 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14849 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

function useComputedImagesForActivity(activity, activityApplication) {
  ({ largeImage, smallImage } = useRichImageForActivity(activity, activityApplication));
  if (null != largeImage) {
    const obj = { largeImage, smallImage };
    let obj12 = obj;
  } else {
    if (obj20.isStageActivity(activity)) {
      const result = StageChannelRichPresenceUtils.unpackStageChannelParty(activity);
      let guildIconURL;
      if (null != result) {
        const obj2 = { id: result.guildId, icon: null, size: null };
        let small_image;
        if (activity != null) {
          const assets = activity.assets;
          if (assets != null) {
            small_image = assets.small_image;
          }
        }
        obj2.icon = small_image;
        obj2.size = ImageSizes.SMALL;
        guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj2);
        const tmp2Result = AvatarUtilsDefault;
      }
      let tmp16;
      if (null != guildIconURL) {
        const obj3 = { src: guildIconURL };
        tmp16 = obj3;
      }
      const obj4 = { largeImage: tmp16, smallImage: "a" };
      obj12 = obj4;
      const tmp17Result = StageChannelRichPresenceUtils;
    } else if (isOnXboxDefault(activity)) {
      const obj5 = { largeImage: null, smallImage: "a" };
      const obj6 = { src: PlatformsDefault.get(constants2.XBOX).icon.customPNG, alt: null };
      const intl4 = util.intl;
      obj6.alt = intl4.string(util.t.Nfvo72);
      obj5.largeImage = obj6;
      obj12 = obj5;
      const tmp2Result3 = PlatformsDefault;
    } else {
      if (null == smallImage) {
        if (isOnPlayStationDefault(activity)) {
          const obj7 = { largeImage: null, smallImage: "a" };
          const obj8 = { src: PlatformsDefault.get(constants2.PLAYSTATION).icon.lightPNG, alt: null };
          const intl3 = util.intl;
          obj8.alt = intl3.string(util.t.fFl4jo);
          obj7.largeImage = obj8;
          obj12 = obj7;
          const tmp2Result4 = PlatformsDefault;
        }
      }
      if (tmp17Result2.isConjurePresenceActivity(activity)) {
        const obj9 = { src: tmp4, alt: null };
        let name1;
        if (activity != null) {
          name1 = activity.name;
        }
        const obj10 = { largeImage: null, smallImage: "a" };
        obj9.alt = name1;
        obj10.largeImage = obj9;
        obj12 = obj10;
      } else {
        let iconURL;
        if (activityApplication != null) {
          iconURL = activityApplication.getIconURL(ImageSizes.LARGE);
        }
        if (activityApplication != null) {
          const name = activityApplication.name;
        }
        if (null == iconURL) {
          if (null != undefined) {
            const obj11 = { largeImage: undefined, smallImage };
            obj12 = obj11;
          } else {
            obj12 = { largeImage: smallImage, smallImage: "a" };
          }
        } else {
          const obj13 = { src: iconURL, alt: null };
          if (null == name) {
            const intl2 = util.intl;
            let stringResult = intl2.string(util.t["2B/phM"]);
          } else {
            const intl = util.intl;
            const obj14 = { applicationName: name };
            stringResult = intl.formatToPlainString(util.t.tiKyYg, obj14);
          }
          obj13.alt = stringResult;
        }
      }
      tmp17Result2 = conjurePresenceActivity;
    }
    obj20 = StageChannelRichPresenceUtils;
  }
  return obj12;
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
  const getOrFetchApplication = trackingSource(stateFromStores[16]).useGetOrFetchApplication(application_id);
  let obj = trackingSource(stateFromStores[16]);
  const items = [closure_4];
  let tmp4 = null == application_id;
  stateFromStores = trackingSource(stateFromStores[17]).useStateFromStores(items, () => {
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
      const obj2 = { source: trackingSource, application_id, activity_name: name, activity_type: type, activity_session_id: session_id, application_found, has_rich_assets };
      AnalyticsUtilsDefault.track(constants.ACTIVITY_DEFAULT_ICON_SHOWN, obj2);
    }
  }, items1);
}
function useRichImageForActivity(activity, activityApplication) {
  let prop = dependencyMap;
  if (activity != null) {
    const application_id = activity.application_id;
  }
  let getOrFetchApplication = activityApplication;
  if (activityApplication == null) {
    getOrFetchApplication = obj.useGetOrFetchApplication(application_id);
  }
  obj = useGetOrFetchApplications;
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = useGame.useGame(canonicalGameId).data;
  if (null == activity) {
    return { largeImage: "Array", smallImage: "flexDirection" };
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
      const obj2 = { src: null, text: null, url: null };
      const items = [, ];
      ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
      obj2.src = ApplicationAssetUtils.getAssetImage(activity.application_id, large_image, items);
      const assets2 = activity.assets;
      let trimmed;
      if (assets2 != null) {
        if (assets2.large_text != null) {
          trimmed = str.trim();
        }
      }
      obj2.text = trimmed;
      const assets3 = activity.assets;
      let large_url;
      if (assets3 != null) {
        large_url = assets3.large_url;
      }
      obj2.url = large_url;
      tmp5 = obj2;
      const tmpResult3 = ApplicationAssetUtils;
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
      const obj3 = { src: null, text: null, url: null };
      const items1 = [, ];
      ({ LARGE: arr2[0], LARGE: arr2[1] } = ImageSizes);
      obj3.src = ApplicationAssetUtils.getAssetImage(activity.application_id, tmp10, items1);
      const assets5 = activity.assets;
      let trimmed1;
      if (assets5 != null) {
        if (assets5.small_text != null) {
          trimmed1 = str2.trim();
        }
      }
      obj3.text = trimmed1;
      const assets6 = activity.assets;
      let small_url;
      if (assets6 != null) {
        small_url = assets6.small_url;
      }
      obj3.url = small_url;
      tmp12 = obj3;
      const tmpResult4 = ApplicationAssetUtils;
    }
    if (tmp5 == null) {
      if (data != null) {
        const iconURL = data.getIconURL(ImageSizes.LARGE);
      }
      let tmp18;
      if (null != data) {
        if (null != iconURL) {
          const obj4 = { src: iconURL, alt: null };
          const intl = util.intl;
          const obj5 = { applicationName: data.name };
          obj4.alt = intl.formatToPlainString(util.t.tiKyYg, obj5);
          tmp18 = obj4;
        }
      }
      tmp5 = tmp18;
    }
    if (tmp5 == null) {
      let iconURL1;
      if (getOrFetchApplication != null) {
        iconURL1 = getOrFetchApplication.getIconURL(ImageSizes.LARGE);
      }
      if (getOrFetchApplication != null) {
        const name = getOrFetchApplication.name;
      }
      if (null != iconURL1) {
        const obj6 = { src: iconURL1, alt: null };
        if (null == name) {
          const intl3 = util.intl;
          prop = util.t["2B/phM"];
          let stringResult = intl3.string(prop);
        } else {
          const intl2 = util.intl;
          const obj7 = { applicationName: name };
          stringResult = intl2.formatToPlainString(util.t.tiKyYg, obj7);
        }
        obj6.alt = stringResult;
      }
    }
    const obj8 = { largeImage: tmp5, smallImage: tmp12 };
    return obj8;
  }
  const tmpResult = useGame;
}
let useEffect = _mod19.useEffect;
({ AnalyticEvents: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const ImageSizes = Constants2.ImageSizes;
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityImageUtils.tsx");

export function getApplicationImage(getIconURL) {
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
}
export function useImageForContentEntry(trackingSource) {
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
      const obj5 = { largeImage: tmp7, smallImage: "a" };
      obj8 = obj5;
    } else {
      if (null != coverURL) {
        if (showCoverImage) {
          const obj6 = { largeImage: null, smallImage: "a" };
          const obj7 = { src: coverURL };
          obj6.largeImage = obj7;
          obj8 = obj6;
        }
      }
      obj8 = { largeImage: useComputedImagesForActivity(activity, obj).largeImage, smallImage: "a" };
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
    const obj10 = { src: ApplicationAssetUtils.getAssetImage(entry.extra.application_id, entry.extra.media_assets_large_image, ImageSizes.LARGE), alt: entry.extra.media_title };
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
}
export function useImageForActivity(activity, application, user_profile_activity_native) {
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
}
export { useRichImageForActivity };