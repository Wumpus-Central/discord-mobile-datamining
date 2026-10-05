// discord_app/modules/content_inventory/ContentInventoryActivityImageUtils.tsx
import _mod19 from "../../../_runtime/metro/00019__.js";
import c from "../../../_runtime/00576_c.js";
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
import conjurePresenceActivity from "../conjure/presence/conjurePresenceActivity.tsx";
import StageChannelRichPresenceUtils from "../stage_channels/StageChannelRichPresenceUtils.tsx";
import useEntryActivityAndApplicationDefault from "useEntryActivityAndApplication.tsx";
import useConjurePresenceActivityImageDefault from "../conjure/presence/useConjurePresenceActivityImage.tsx";
import isOnXboxDefault from "../activities/utils/isOnXbox.tsx";
import isOnPlayStationDefault from "../activities/utils/isOnPlayStation.tsx";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import Constants from "../../Constants.tsx";
import "ReactCompilerGating";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getMediaImage(entry) {
  if (obj.isListenedSessionEntry(entry)) {
    if (entry.extra.entries.length > 0) {
      const obj2 = { src: entry.extra.entries[0].media.image_url };
      let tmp3 = obj2;
    }
    return tmp3;
  }
  obj = ContentInventoryTypes;
  if (tmpResult.isWatchedMediaEntry(entry)) {
    const obj3 = {
      src: ApplicationAssetUtils.getAssetImage(
        entry.extra.application_id,
        entry.extra.media_assets_large_image,
        ImageSizes.LARGE,
      ),
      alt: entry.extra.media_title,
    };
    tmp3 = obj3;
    const tmpResult3 = ApplicationAssetUtils;
  } else {
    if (tmpResult4.isTopArtistEntry(entry)) {
      const obj4 = { src: entry.extra.media.image_url };
      tmp3 = obj4;
    }
    tmpResult4 = ContentInventoryTypes;
  }
  tmpResult = ContentInventoryTypes;
}
function computeImageForActivity(arg0) {
  ({ activity, application, largeImage, smallImage } = arg0);
  if (null != largeImage) {
    const obj = { largeImage, smallImage };
    return obj;
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
      }
      let tmp15;
      if (null != guildIconURL) {
        const obj3 = { src: guildIconURL };
        tmp15 = obj3;
      }
      const obj4 = { largeImage: tmp15, smallImage: "r" };
      return obj4;
    } else if (isOnXboxDefault(activity)) {
      const obj5 = { largeImage: null, smallImage: "r" };
      const obj6 = { src: PlatformsDefault.get(constants2.XBOX).icon.customPNG, alt: null };
      const intl4 = util.intl;
      obj6.alt = intl4.string(util.t.Nfvo72);
      obj5.largeImage = obj6;
      return obj5;
    } else {
      if (null == smallImage) {
        if (isOnPlayStationDefault(activity)) {
          const obj7 = { largeImage: null, smallImage: "r" };
          const obj8 = { src: PlatformsDefault.get(constants2.PLAYSTATION).icon.lightPNG, alt: null };
          const intl3 = util.intl;
          obj8.alt = intl3.string(util.t.fFl4jo);
          obj7.largeImage = obj8;
          return obj7;
        }
      }
      if (tmp16Result2.isConjurePresenceActivity(activity)) {
        const obj9 = { src: tmp, alt: null };
        let name1;
        if (activity != null) {
          name1 = activity.name;
        }
        const obj10 = { largeImage: null, smallImage: "r" };
        obj9.alt = name1;
        obj10.largeImage = obj9;
        return obj10;
      } else {
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(ImageSizes.LARGE);
        }
        if (application != null) {
          const name = application.name;
        }
        if (null == iconURL) {
          if (null != undefined) {
            const obj11 = { largeImage: undefined, smallImage };
            let obj12 = obj11;
          } else {
            obj12 = { largeImage: smallImage, smallImage: "r" };
          }
          return obj12;
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
      tmp16Result2 = conjurePresenceActivity;
    }
    obj20 = StageChannelRichPresenceUtils;
  }
}
let useEffect = _mod19.useEffect;
({ AnalyticEvents: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const ImageSizes = Constants2.ImageSizes;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (activity, application) => {
      const cResult = c.c(6);
      ({ largeImage, smallImage } = closure_12(activity, application));
      const tmp3 = useConjurePresenceActivityImageDefault();
      if (cResult[0] === activity) {
        if (cResult[1] === application) {
          if (cResult[2] === tmp3) {
            if (cResult[3] === largeImage) {
              if (cResult[4] === smallImage) {
                let tmp4 = cResult[5];
              }
              return tmp4;
            }
          }
        }
      }
      const tmp5 = computeImageForActivity({ activity, application, largeImage, smallImage, conjureImage: tmp3 });
      cResult[0] = activity;
      cResult[1] = application;
      cResult[2] = tmp3;
      cResult[3] = largeImage;
      cResult[4] = smallImage;
      cResult[5] = tmp5;
      tmp4 = tmp5;
    }
  : (activity, application) => {
      const tmp = closure_12(activity, application);
      return computeImageForActivity({
        activity,
        application,
        largeImage: tmp.largeImage,
        smallImage: tmp.smallImage,
        conjureImage: useConjurePresenceActivityImageDefault(),
      });
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(20);
      ({ entry, showCoverImage, trackingSource } = arg0);
      const tmp4 = undefined === showCoverImage || showCoverImage;
      ({ activity, activityApplication, fallbackApplication } = useEntryActivityAndApplicationDefault(entry));
      let obj2 = fallbackApplication;
      if (fallbackApplication == null) {
        obj2 = activityApplication;
      }
      const tmp5 = useEntryActivityAndApplicationDefault(entry);
      ({ largeImage, smallImage } = closure_12(activity, activityApplication));
      const largeImage2 = closure_9(activity, obj2).largeImage;
      if (cResult[0] !== obj2) {
        let canonicalGameId;
        if (obj2 != null) {
          canonicalGameId = obj2.getCanonicalGameId();
        }
        cResult[0] = obj2;
        cResult[1] = canonicalGameId;
        let tmp7 = canonicalGameId;
      } else {
        tmp7 = cResult[1];
      }
      const tmp6 = closure_12(activity, activityApplication);
      const data = useGame.useGame(tmp7).data;
      if (cResult[2] !== data) {
        let coverURL;
        if (data != null) {
          coverURL = data.getCoverURL();
        }
        cResult[2] = data;
        cResult[3] = coverURL;
        let tmp9 = coverURL;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== entry) {
        const tmp13 = getMediaImage(entry);
        cResult[4] = entry;
        cResult[5] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[5];
      }
      if (null != largeImage) {
        if (cResult[6] === largeImage) {
        }
        const obj3 = { largeImage, smallImage };
        cResult[6] = largeImage;
        cResult[7] = smallImage;
        cResult[8] = obj3;
      } else {
        if (null != tmp11) {
          if (cResult[9] !== tmp11) {
            const obj4 = { largeImage: tmp11, smallImage: "r" };
            cResult[9] = tmp11;
            cResult[10] = obj4;
            let tmp16 = obj4;
          } else {
            tmp16 = cResult[10];
          }
          let tmp14 = tmp16;
        } else {
          if (null != tmp9) {
            if (tmp4) {
              if (cResult[11] !== tmp9) {
                const obj5 = { largeImage: null, smallImage: "r" };
                const obj6 = { src: tmp9 };
                obj5.largeImage = obj6;
                cResult[11] = tmp9;
                cResult[12] = obj5;
                let tmp15 = obj5;
              } else {
                tmp15 = cResult[12];
              }
              tmp14 = tmp15;
            }
          }
          if (cResult[13] !== largeImage2) {
            const obj7 = { largeImage: largeImage2, smallImage: "r" };
            cResult[13] = largeImage2;
            cResult[14] = obj7;
            tmp14 = obj7;
          } else {
            tmp14 = cResult[14];
          }
        }
        if (fallbackApplication == null) {
          fallbackApplication = activityApplication;
        }
        const largeImage3 = tmp14.largeImage;
        let src;
        if (largeImage3 != null) {
          src = largeImage3.src;
        }
        if (cResult[15] === activity) {
          if (cResult[16] === fallbackApplication) {
            if (cResult[17] === src) {
              if (cResult[18] === trackingSource) {
                let tmp20 = cResult[19];
              }
              closure_11(tmp20);
              return tmp14;
            }
          }
        }
        const obj8 = { activity, application: fallbackApplication, largeImageSrc: src, trackingSource };
        cResult[15] = activity;
        cResult[16] = fallbackApplication;
        cResult[17] = src;
        cResult[18] = trackingSource;
        cResult[19] = obj8;
        tmp20 = obj8;
      }
      const tmpResult = useGame;
    }
  : (trackingSource) => {
      ({ entry, showCoverImage } = trackingSource);
      if (showCoverImage === undefined) {
        showCoverImage = true;
      }
      ({ activity, activityApplication, fallbackApplication } = useEntryActivityAndApplicationDefault(entry));
      let obj = fallbackApplication;
      if (fallbackApplication == null) {
        obj = activityApplication;
      }
      const tmp3 = closure_12(activity, activityApplication);
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
      const tmp6 = getMediaImage(entry);
      if (null != largeImage) {
        const obj3 = { largeImage, smallImage: tmp3.smallImage };
        let obj7 = obj3;
      } else if (null != tmp6) {
        const obj4 = { largeImage: tmp6, smallImage: "r" };
        obj7 = obj4;
      } else {
        if (null != coverURL) {
          if (showCoverImage) {
            const obj5 = { largeImage: null, smallImage: "r" };
            const obj6 = { src: coverURL };
            obj5.largeImage = obj6;
            obj7 = obj5;
          }
        }
        obj7 = { largeImage: closure_9(activity, obj).largeImage, smallImage: "r" };
      }
      const obj8 = { activity, application: null, largeImageSrc: null, trackingSource: null };
      if (fallbackApplication == null) {
        fallbackApplication = activityApplication;
      }
      obj8.application = fallbackApplication;
      const largeImage2 = obj7.largeImage;
      let src;
      if (largeImage2 != null) {
        src = largeImage2.src;
      }
      obj8.largeImageSrc = src;
      obj8.trackingSource = trackingSource.trackingSource;
      closure_11(obj8);
      return obj7;
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = trackingSource(stateFromStores[8]).c(15);
      ({ activity, trackingSource } = arg0);
      let application_id;
      ({ application, largeImageSrc } = arg0);
      if (activity != null) {
        application_id = activity.application_id;
      }
      let obj = trackingSource(stateFromStores[8]);
      const getOrFetchApplication = trackingSource(stateFromStores[18]).useGetOrFetchApplication(application_id);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_4];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== application_id) {
        const fn = function o() {
          let result = null != application_id;
          if (result) {
            result = ApplicationStore.didFetchingApplicationFail(tmp);
          }
          return result;
        };
        cResult[1] = application_id;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = trackingSource(stateFromStores[18]);
      let tmp10 = null == application_id;
      stateFromStores = trackingSource(stateFromStores[19]).useStateFromStores(first, tmp8);
      if (!tmp10) {
        tmp10 = null != getOrFetchApplication;
      }
      if (!tmp10) {
        tmp10 = stateFromStores;
      }
      stateFromStores = tmp10;
      useEffect = tmp11;
      closure_4 = tmp12;
      let name;
      if (activity != null) {
        name = activity.name;
      }
      let type;
      if (activity != null) {
        type = activity.type;
      }
      let session_id;
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
      let tmp17 = null != large_image;
      if (!tmp17) {
        let small_image;
        if (activity != null) {
          const assets2 = activity.assets;
          if (assets2 != null) {
            small_image = assets2.small_image;
          }
        }
        tmp17 = null != small_image;
      }
      const has_rich_assets = tmp17;
      closure_9 = tmp19;
      if (cResult[3] === name) {
        if (cResult[4] === type) {
          if (cResult[5] === tmp11) {
            if (cResult[6] === application_id) {
              if (cResult[7] === tmp19) {
                if (cResult[8] === tmp17) {
                  if (cResult[9] === tmp10) {
                    if (cResult[10] === session_id) {
                      if (cResult[11] === tmp12) {
                        if (cResult[12] === trackingSource) {
                          let tmp20 = cResult[13];
                          let tmp21 = cResult[14];
                        }
                        useEffect(tmp20, tmp21);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const fn2 = function f() {
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
      };
      const items1 = [
        trackingSource,
        null != activity,
        tmp10,
        null == largeImageSrc,
        application_id,
        name,
        type,
        session_id,
        null != getOrFetchApplication || null != application,
        tmp17,
      ];
      cResult[3] = name;
      cResult[4] = type;
      cResult[5] = null != getOrFetchApplication || null != application;
      cResult[6] = application_id;
      cResult[7] = null != activity;
      cResult[8] = tmp17;
      cResult[9] = tmp10;
      cResult[10] = session_id;
      cResult[11] = null == largeImageSrc;
      cResult[12] = trackingSource;
      cResult[13] = fn2;
      cResult[14] = items1;
      tmp21 = items1;
      tmp20 = fn2;
    }
  : (arg0) => {
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
      const getOrFetchApplication = trackingSource(stateFromStores[18]).useGetOrFetchApplication(application_id);
      let obj = trackingSource(stateFromStores[18]);
      const items = [closure_4];
      let tmp4 = null == application_id;
      stateFromStores = trackingSource(stateFromStores[19]).useStateFromStores(items, () => {
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
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (application_id, arg1) => {
      let prop = dependencyMap;
      const cResult = c.c(14);
      application_id = undefined;
      if (application_id != null) {
        application_id = application_id.application_id;
      }
      const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(application_id);
      if (null == application_id) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { largeImage: "Array", smallImage: "Set" };
          cResult[0] = obj3;
          let first = obj3;
        } else {
          first = cResult[0];
        }
        return first;
      } else {
        let large_image;
        if (application_id != null) {
          const assets = application_id.assets;
          if (assets != null) {
            large_image = assets.large_image;
          }
        }
        if (cResult[1] === application_id) {
          if (cResult[2] === large_image) {
            let tmp7 = cResult[3];
          }
          let tmp13;
          if (!isCrunchyrollActivityDefault(application_id)) {
            let small_image;
            if (application_id != null) {
              const assets4 = application_id.assets;
              if (assets4 != null) {
                small_image = assets4.small_image;
              }
            }
            tmp13 = small_image;
          }
          if (cResult[4] === application_id) {
            if (cResult[5] === tmp13) {
              let tmp15 = cResult[6];
            }
            if (cResult[7] === getOrFetchApplication) {
              if (cResult[8] === arg1) {
                if (cResult[9] === tmp7) {
                  let tmp21 = cResult[10];
                }
                if (cResult[11] === tmp15) {
                  if (cResult[12] === tmp21) {
                    let tmp27 = cResult[13];
                  }
                  return tmp27;
                }
                const obj4 = { largeImage: tmp21, smallImage: tmp15 };
                cResult[11] = tmp15;
                cResult[12] = tmp21;
                cResult[13] = obj4;
                tmp27 = obj4;
              }
            }
            if (tmp7 == null) {
              let obj7 = arg1;
              if (arg1 == null) {
                obj7 = getOrFetchApplication;
              }
              let iconURL;
              if (obj7 != null) {
                iconURL = obj7.getIconURL(ImageSizes.LARGE);
              }
              if (obj7 != null) {
                const name = obj7.name;
              }
              if (null != iconURL) {
                const obj5 = { src: iconURL, alt: null };
                if (null == name) {
                  const intl2 = util.intl;
                  prop = util.t["2B/phM"];
                  let stringResult = intl2.string(prop);
                } else {
                  const intl = util.intl;
                  const obj6 = { applicationName: name };
                  stringResult = intl.formatToPlainString(util.t.tiKyYg, obj6);
                }
                obj5.alt = stringResult;
              }
            }
            cResult[7] = getOrFetchApplication;
            cResult[8] = arg1;
            cResult[9] = tmp7;
            cResult[10] = tmp7;
            tmp21 = tmp22;
          }
          let tmp16;
          if (null != tmp13) {
            const obj8 = { src: null, text: null, url: null };
            const items = [,];
            ({ LARGE: arr2[0], LARGE: arr2[1] } = ImageSizes);
            obj8.src = ApplicationAssetUtils.getAssetImage(application_id.application_id, tmp13, items);
            const assets5 = application_id.assets;
            let trimmed;
            if (assets5 != null) {
              if (assets5.small_text != null) {
                trimmed = str2.trim();
              }
            }
            obj8.text = trimmed;
            const assets6 = application_id.assets;
            let small_url;
            if (assets6 != null) {
              small_url = assets6.small_url;
            }
            obj8.url = small_url;
            tmp16 = obj8;
            const tmpResult = ApplicationAssetUtils;
          }
          cResult[4] = application_id;
          cResult[5] = tmp13;
          cResult[6] = tmp16;
          tmp15 = tmp16;
        }
        let tmp8;
        if (null != large_image) {
          const obj9 = { src: null, text: null, url: null };
          const items1 = [,];
          ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
          obj9.src = ApplicationAssetUtils.getAssetImage(application_id.application_id, large_image, items1);
          const assets2 = application_id.assets;
          let trimmed1;
          if (assets2 != null) {
            if (assets2.large_text != null) {
              trimmed1 = str.trim();
            }
          }
          obj9.text = trimmed1;
          const assets3 = application_id.assets;
          let large_url;
          if (assets3 != null) {
            large_url = assets3.large_url;
          }
          obj9.url = large_url;
          tmp8 = obj9;
          const tmpResult2 = ApplicationAssetUtils;
        }
        cResult[1] = application_id;
        cResult[2] = large_image;
        cResult[3] = tmp8;
        tmp7 = tmp8;
      }
    }
  : (application_id, arg1) => {
      let prop = dependencyMap;
      useGetOrFetchApplications;
      if (application_id != null) {
        application_id = application_id.application_id;
      }
      if (null == application_id) {
        return { largeImage: "Array", smallImage: "Set" };
      } else {
        let large_image;
        if (application_id != null) {
          const assets = application_id.assets;
          if (assets != null) {
            large_image = assets.large_image;
          }
        }
        let tmp6;
        if (null != large_image) {
          const obj = { src: null, text: null, url: null };
          const items = [,];
          ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
          obj.src = ApplicationAssetUtils.getAssetImage(application_id.application_id, large_image, items);
          const assets2 = application_id.assets;
          let trimmed;
          if (assets2 != null) {
            if (assets2.large_text != null) {
              trimmed = str.trim();
            }
          }
          obj.text = trimmed;
          const assets3 = application_id.assets;
          let large_url;
          if (assets3 != null) {
            large_url = assets3.large_url;
          }
          obj.url = large_url;
          tmp6 = obj;
          const tmpResult = ApplicationAssetUtils;
        }
        let tmp11;
        if (!isCrunchyrollActivityDefault(application_id)) {
          let small_image;
          if (application_id != null) {
            const assets4 = application_id.assets;
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
          obj2.src = ApplicationAssetUtils.getAssetImage(application_id.application_id, tmp11, items1);
          const assets5 = application_id.assets;
          let trimmed1;
          if (assets5 != null) {
            if (assets5.small_text != null) {
              trimmed1 = str2.trim();
            }
          }
          obj2.text = trimmed1;
          const assets6 = application_id.assets;
          let small_url;
          if (assets6 != null) {
            small_url = assets6.small_url;
          }
          obj2.url = small_url;
          tmp13 = obj2;
          const tmpResult2 = ApplicationAssetUtils;
        }
        if (tmp6 == null) {
          let obj5 = arg1;
          if (arg1 == null) {
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
    };
let closure_12 = tmp5;
function getApplicationImage(getIconURL) {
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
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityImageUtils.tsx");

export { getApplicationImage };
export const useImageForContentEntry = tmp3;
export const useImageForActivity = ReactCompilerGating.isReactCompilerEnabled()
  ? (activity, application, trackingSource) => {
      const cResult = c.c(5);
      const tmp2 = closure_9(activity, application);
      const largeImage = tmp2.largeImage;
      let src;
      if (largeImage != null) {
        src = largeImage.src;
      }
      if (cResult[0] === activity) {
        if (cResult[1] === application) {
          if (cResult[2] === src) {
            if (cResult[3] === trackingSource) {
              let tmp4 = cResult[4];
            }
            closure_11(tmp4);
            return tmp2;
          }
        }
      }
      const obj2 = { activity, application, largeImageSrc: src, trackingSource };
      cResult[0] = activity;
      cResult[1] = application;
      cResult[2] = src;
      cResult[3] = trackingSource;
      cResult[4] = obj2;
      tmp4 = obj2;
    }
  : (activity, application, trackingSource) => {
      const tmp = closure_9(activity, application);
      const obj = { activity, application, largeImageSrc: null, trackingSource: null };
      const largeImage = tmp.largeImage;
      let src;
      if (largeImage != null) {
        src = largeImage.src;
      }
      obj.largeImageSrc = src;
      obj.trackingSource = trackingSource;
      closure_11(obj);
      return tmp;
    };
export const useRichImageForActivity = tmp5;
