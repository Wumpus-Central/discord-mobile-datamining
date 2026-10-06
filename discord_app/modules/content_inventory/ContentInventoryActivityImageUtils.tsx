// discord_app/modules/content_inventory/ContentInventoryActivityImageUtils.tsx
import react from "../../../_runtime/00019_react.js";
import react2 from "../../../_runtime/00576_react.js";
import intl5 from "../../intl/index.native.tsx";
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
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
function getMediaImage(entry) {
  let tmp3;
  let tmpResult3;
  const obj = ContentInventoryTypes;
  if (obj.isListenedSessionEntry(entry)) {
    if (entry.extra.entries.length > 0) {
      tmp3 = { src: entry.extra.entries[0].media.image_url };
      const obj2 = { src: entry.extra.entries[0].media.image_url };
    }
    return tmp3;
  }
  const tmpResult = ContentInventoryTypes;
  if (tmpResult.isWatchedMediaEntry(entry)) {
    const obj3 = {
      src: tmpResult3.getAssetImage(entry.extra.application_id, entry.extra.media_assets_large_image, ImageSizes.LARGE),
      alt: entry.extra.media_title,
    };
    tmp3 = obj3;
    tmpResult3 = ApplicationAssetUtils;
  } else {
    const tmpResult4 = ContentInventoryTypes;
    if (tmpResult4.isTopArtistEntry(entry)) {
      tmp3 = { src: entry.extra.media.image_url };
      const obj4 = { src: entry.extra.media.image_url };
    }
  }
}
function computeImageForActivity(arg0) {
  let activity;
  let application;
  let intl3;
  let intl4;
  let largeImage;
  let name1;
  let obj6;
  let obj8;
  let smallImage;
  let small_image;
  let stringResult;
  let tmp2Result;
  let tmp2Result2;
  ({ activity, application, largeImage, smallImage } = arg0);
  if (null != largeImage) {
    return { largeImage, smallImage };
  } else {
    const obj19 = StageChannelRichPresenceUtils;
    if (obj19.isStageActivity(activity)) {
      const tmp17Result = StageChannelRichPresenceUtils;
      const result = tmp17Result.unpackStageChannelParty(activity);
      let guildIconURL;
      if (null != result) {
        const obj2 = { id: result.guildId, icon: small_image, size: ImageSizes.SMALL };
        small_image = undefined;
        const getGuildIconURL = AvatarUtilsDefault.getGuildIconURL;
        AvatarUtilsDefault;
        if (activity != null) {
          const assets = activity.assets;
          if (assets != null) {
            small_image = assets.small_image;
          }
        }
        guildIconURL = getGuildIconURL(obj2);
      }
      let tmp16;
      if (null != guildIconURL) {
        tmp16 = { src: guildIconURL };
        const obj3 = { src: guildIconURL };
      }
      return { largeImage: tmp16, smallImage: "Array" };
    } else if (isOnXboxDefault(activity)) {
      const obj5 = { largeImage: obj6, smallImage: "Array" };
      obj6 = { src: tmp2Result.get(metroRequire.XBOX).icon.customPNG, alt: intl4.string(intl5.t.Nfvo72) };
      tmp2Result = PlatformsDefault;
      intl4 = intl5.intl;
      return obj5;
    } else {
      if (null == smallImage) {
        if (isOnPlayStationDefault(activity)) {
          const obj7 = { largeImage: obj8, smallImage: "Array" };
          obj8 = { src: tmp2Result2.get(metroRequire.PLAYSTATION).icon.lightPNG, alt: intl3.string(intl5.t.fFl4jo) };
          tmp2Result2 = PlatformsDefault;
          intl3 = intl5.intl;
          return obj7;
        }
      }
      const tmp17Result2 = conjurePresenceActivity;
      if (tmp17Result2.isConjurePresenceActivity(activity)) {
        const obj9 = { src: tmp, alt: name1 };
        name1 = undefined;
        if (activity != null) {
          name1 = activity.name;
        }
        return { largeImage: obj9, smallImage: "Array" };
      } else {
        let name;
        let obj14;
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(ImageSizes.LARGE);
        }
        if (application != null) {
          name = application.name;
        }
        let tmp5;
        if (null != iconURL) {
          const obj11 = { src: iconURL, alt: stringResult };
          if (null == name) {
            const intl2 = intl5.intl;
            stringResult = intl2.string(intl5.t["2B/phM"]);
          } else {
            const intl = intl5.intl;
            const obj12 = { applicationName: name };
            stringResult = intl.formatToPlainString(intl5.t.tiKyYg, obj12);
          }
          tmp5 = obj11;
        }
        if (null != tmp5) {
          obj14 = { largeImage: tmp5, smallImage };
          const obj13 = { largeImage: tmp5, smallImage };
        } else {
          obj14 = { largeImage: smallImage, smallImage: "Array" };
        }
        return obj14;
      }
    }
  }
}
let useEffect = react.useEffect;
({ AnalyticEvents: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const ImageSizes = Constants2.ImageSizes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activity;
      let activityApplication;
      let entry;
      let fallbackApplication;
      let largeImage;
      let obj6;
      let showCoverImage;
      let smallImage;
      let tmp11;
      let tmp14;
      let tmp7;
      let tmp9;
      let trackingSource;
      const obj = react2;
      const cResult = obj.c(20);
      ({ entry, showCoverImage, trackingSource } = arg0);
      const tmp4 = undefined === showCoverImage || showCoverImage;
      ({ activity, activityApplication, fallbackApplication } = useEntryActivityAndApplicationDefault(entry));
      let obj2 = fallbackApplication;
      useEntryActivityAndApplicationDefault(entry);
      if (fallbackApplication == null) {
        obj2 = activityApplication;
      }
      ({ largeImage, smallImage } = closure_12(activity, activityApplication));
      closure_12(activity, activityApplication);
      const largeImage2 = closure_9(activity, obj2).largeImage;
      if (cResult[0] !== obj2) {
        let canonicalGameId;
        if (obj2 != null) {
          canonicalGameId = obj2.getCanonicalGameId();
        }
        cResult[0] = obj2;
        cResult[1] = canonicalGameId;
        tmp7 = canonicalGameId;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult = useGame;
      const data = tmpResult.useGame(tmp7).data;
      if (cResult[2] !== data) {
        let coverURL;
        if (data != null) {
          coverURL = data.getCoverURL();
        }
        cResult[2] = data;
        cResult[3] = coverURL;
        tmp9 = coverURL;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== entry) {
        const tmp13 = getMediaImage(entry);
        cResult[4] = entry;
        cResult[5] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[5];
      }
      if (null != largeImage) {
        if (cResult[6] === largeImage) {
          let tmp17;
          if (cResult[7] === smallImage) {
            tmp17 = cResult[8];
          }
          tmp14 = tmp17;
        }
        const obj3 = { largeImage, smallImage };
        cResult[6] = largeImage;
        cResult[7] = smallImage;
        cResult[8] = obj3;
        tmp17 = obj3;
      } else if (null != tmp11) {
        let tmp16;
        if (cResult[9] !== tmp11) {
          const obj4 = { largeImage: tmp11, smallImage: "Array" };
          cResult[9] = tmp11;
          cResult[10] = obj4;
          tmp16 = obj4;
        } else {
          tmp16 = cResult[10];
        }
        tmp14 = tmp16;
      } else {
        if (null != tmp9) {
          if (tmp4) {
            let tmp15;
            if (cResult[11] !== tmp9) {
              const obj5 = { largeImage: obj6, smallImage: "Array" };
              obj6 = { src: tmp9 };
              cResult[11] = tmp9;
              cResult[12] = obj5;
              tmp15 = obj5;
            } else {
              tmp15 = cResult[12];
            }
            tmp14 = tmp15;
          }
        }
        if (cResult[13] !== largeImage2) {
          const obj7 = { largeImage: largeImage2, smallImage: "Array" };
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
            let tmp19;
            if (cResult[18] === trackingSource) {
              tmp19 = cResult[19];
            }
            closure_11(tmp19);
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
      tmp19 = obj8;
    }
  : (trackingSource) => {
      let activity;
      let activityApplication;
      let coverURL;
      let entry;
      let fallbackApplication;
      let obj6;
      let obj7;
      let showCoverImage;
      let src;
      ({ entry, showCoverImage } = trackingSource);
      if (showCoverImage === undefined) {
        showCoverImage = true;
      }
      trackingSource = trackingSource.trackingSource;
      ({ activity, activityApplication, fallbackApplication } = useEntryActivityAndApplicationDefault(entry));
      let obj = fallbackApplication;
      useEntryActivityAndApplicationDefault(entry);
      if (fallbackApplication == null) {
        obj = activityApplication;
      }
      const tmp3 = closure_12(activity, activityApplication);
      const largeImage = tmp3.largeImage;
      const smallImage = tmp3.smallImage;
      let canonicalGameId;
      const largeImage2 = closure_9(activity, obj).largeImage;
      if (obj != null) {
        canonicalGameId = obj.getCanonicalGameId();
      }
      const obj2 = useGame;
      const data = obj2.useGame(canonicalGameId).data;
      if (data != null) {
        coverURL = data.getCoverURL();
      }
      const tmp6 = getMediaImage(entry);
      if (null != largeImage) {
        obj7 = { largeImage, smallImage };
        const obj3 = { largeImage, smallImage };
      } else if (null != tmp6) {
        obj7 = { largeImage: tmp6, smallImage: "Array" };
        const obj4 = { largeImage: tmp6, smallImage: "Array" };
      } else {
        if (null != coverURL) {
          if (showCoverImage) {
            const obj5 = { largeImage: obj6, smallImage: "Array" };
            obj7 = obj5;
            obj6 = { src: coverURL };
          }
        }
        obj7 = { largeImage: largeImage2, smallImage: "Array" };
      }
      const obj8 = { activity, application: fallbackApplication, largeImageSrc: src, trackingSource };
      if (fallbackApplication == null) {
        fallbackApplication = activityApplication;
      }
      const largeImage3 = obj7.largeImage;
      src = undefined;
      if (largeImage3 != null) {
        src = largeImage3.src;
      }
      closure_11(obj8);
      return obj7;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (activity, application) => {
      let largeImage;
      let smallImage;
      const obj = react2;
      const cResult = obj.c(6);
      ({ largeImage, smallImage } = closure_12(activity, application));
      closure_12(activity, application);
      const tmp3 = useConjurePresenceActivityImageDefault();
      if (cResult[0] === activity) {
        if (cResult[1] === application) {
          if (cResult[2] === tmp3) {
            if (cResult[3] === largeImage) {
              let tmp4;
              if (cResult[4] === smallImage) {
                tmp4 = cResult[5];
              }
              return tmp4;
            }
          }
        }
      }
      const obj2 = { activity, application, largeImage, smallImage, conjureImage: tmp3 };
      const tmp5 = computeImageForActivity(obj2);
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
      const obj = {
        activity,
        application,
        largeImage: tmp.largeImage,
        smallImage: tmp.smallImage,
        conjureImage: useConjurePresenceActivityImageDefault(),
      };
      return computeImageForActivity(obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (activity, application, trackingSource) => {
      const obj = react2;
      const cResult = obj.c(5);
      const tmp2 = closure_9(activity, application);
      const largeImage = tmp2.largeImage;
      let src;
      if (largeImage != null) {
        src = largeImage.src;
      }
      if (cResult[0] === activity) {
        if (cResult[1] === application) {
          if (cResult[2] === src) {
            let tmp4;
            if (cResult[3] === trackingSource) {
              tmp4 = cResult[4];
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
      let src;
      const tmp = closure_9(activity, application);
      const largeImage = tmp.largeImage;
      const obj = { activity, application, largeImageSrc: src, trackingSource };
      src = undefined;
      if (largeImage != null) {
        src = largeImage.src;
      }
      closure_11(obj);
      return tmp;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activity;
      let application;
      let application_found;
      let first;
      let largeImageSrc;
      let stateFromStores;
      let tmp8;
      let trackingSource;
      let tmp = trackingSource;
      let obj = trackingSource(stateFromStores[8]);
      const cResult = obj.c(15);
      ({ activity, trackingSource } = arg0);
      let application_id;
      ({ application, largeImageSrc } = arg0);
      if (activity != null) {
        application_id = activity.application_id;
      }
      const tmpResult = tmp(stateFromStores[18]);
      const getOrFetchApplication = tmpResult.useGetOrFetchApplication(application_id);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_4];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== application_id) {
        const fn = function o() {
          const result = null != application_id && ApplicationStore.didFetchingApplicationFail(tmp);
          return result;
        };
        cResult[1] = application_id;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      let tmp10 = null == application_id;
      const tmpResult2 = tmp(stateFromStores[19]);
      stateFromStores = tmpResult2.useStateFromStores(first, tmp8);
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
          if (cResult[5] === (null != getOrFetchApplication || null != application)) {
            if (cResult[6] === application_id) {
              if ((cResult[7] === null) != activity) {
                if (cResult[8] === tmp17) {
                  if (cResult[9] === tmp10) {
                    if (cResult[10] === session_id) {
                      if ((cResult[11] === null) == largeImageSrc) {
                        let tmp20;
                        let tmp21;
                        if (cResult[12] === trackingSource) {
                          tmp20 = cResult[13];
                          tmp21 = cResult[14];
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
        const tmp = closure_9 && stateFromStores && closure_4;
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
          const obj = AnalyticsUtilsDefault;
          obj.track(hasOwnProperty.ACTIVITY_DEFAULT_ICON_SHOWN, obj2);
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
      let activity;
      let application;
      let application_found;
      let largeImageSrc;
      let trackingSource;
      ({ activity, trackingSource } = arg0);
      let stateFromStores;
      useEffect = undefined;
      let closure_4;
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
      let obj = trackingSource(stateFromStores[18]);
      const getOrFetchApplication = obj.useGetOrFetchApplication(application_id);
      let obj2 = trackingSource(stateFromStores[19]);
      const items = [closure_4];
      let tmp4 = null == application_id;
      stateFromStores = obj2.useStateFromStores(items, () => {
        const result = null != application_id && ApplicationStore.didFetchingApplicationFail(tmp);
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
        const tmp = closure_9 && stateFromStores && closure_4;
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
          const obj = AnalyticsUtilsDefault;
          obj.track(hasOwnProperty.ACTIVITY_DEFAULT_ICON_SHOWN, obj2);
        }
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (application_id, arg1) => {
      let items;
      let items1;
      let large_url;
      let small_url;
      let stringResult;
      let tmpResult;
      let tmpResult2;
      let trimmed;
      let trimmed1;
      const obj = react2;
      const cResult = obj.c(14);
      application_id = undefined;
      const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
      useGetOrFetchApplications;
      if (application_id != null) {
        application_id = application_id.application_id;
      }
      const getOrFetchApplication = useGetOrFetchApplication(application_id);
      if (null == application_id) {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { largeImage: "start", smallImage: "unicodeVersion" };
          cResult[0] = obj2;
          first = obj2;
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
          let tmp8;
          if (cResult[2] === large_image) {
            tmp8 = cResult[3];
          }
          let tmp14;
          if (!isCrunchyrollActivityDefault(application_id)) {
            let small_image;
            if (application_id != null) {
              const assets4 = application_id.assets;
              if (assets4 != null) {
                small_image = assets4.small_image;
              }
            }
            tmp14 = small_image;
          }
          if (cResult[4] === application_id) {
            let tmp16;
            if (cResult[5] === tmp14) {
              tmp16 = cResult[6];
            }
            if (cResult[7] === getOrFetchApplication) {
              if (cResult[8] === arg1) {
                let tmp22;
                if (cResult[9] === tmp8) {
                  tmp22 = cResult[10];
                }
                if (cResult[11] === tmp16) {
                  let tmp28;
                  if (cResult[12] === tmp22) {
                    tmp28 = cResult[13];
                  }
                  return tmp28;
                }
                const obj3 = { largeImage: tmp22, smallImage: tmp16 };
                cResult[11] = tmp16;
                cResult[12] = tmp22;
                cResult[13] = obj3;
                tmp28 = obj3;
              }
            }
            let tmp23 = tmp8;
            if (tmp8 == null) {
              let name;
              let obj6 = arg1;
              if (arg1 == null) {
                obj6 = getOrFetchApplication;
              }
              let iconURL;
              if (obj6 != null) {
                iconURL = obj6.getIconURL(ImageSizes.LARGE);
              }
              if (obj6 != null) {
                name = obj6.name;
              }
              let tmp26;
              if (null != iconURL) {
                const obj4 = { src: iconURL, alt: stringResult };
                if (null == name) {
                  const intl2 = intl5.intl;
                  stringResult = intl2.string(intl5.t["2B/phM"]);
                } else {
                  const intl = intl5.intl;
                  const obj5 = { applicationName: name };
                  stringResult = intl.formatToPlainString(intl5.t.tiKyYg, obj5);
                }
                tmp26 = obj4;
              }
              tmp23 = tmp26;
            }
            cResult[7] = getOrFetchApplication;
            cResult[8] = arg1;
            cResult[9] = tmp8;
            cResult[10] = tmp23;
            tmp22 = tmp23;
          }
          let tmp17;
          if (null != tmp14) {
            const obj7 = {
              src: tmpResult.getAssetImage(application_id.application_id, tmp14, items),
              text: trimmed,
              url: small_url,
            };
            items = [,];
            ({ LARGE: arr2[0], LARGE: arr2[1] } = ImageSizes);
            const assets5 = application_id.assets;
            trimmed = undefined;
            tmpResult = ApplicationAssetUtils;
            if (assets5 != null) {
              if (assets5.small_text != null) {
                trimmed = str2.trim();
              }
            }
            const assets6 = application_id.assets;
            small_url = undefined;
            if (assets6 != null) {
              small_url = assets6.small_url;
            }
            tmp17 = obj7;
          }
          cResult[4] = application_id;
          cResult[5] = tmp14;
          cResult[6] = tmp17;
          tmp16 = tmp17;
        }
        let tmp9;
        if (null != large_image) {
          const obj8 = {
            src: tmpResult2.getAssetImage(application_id.application_id, large_image, items1),
            text: trimmed1,
            url: large_url,
          };
          items1 = [,];
          ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
          const assets2 = application_id.assets;
          trimmed1 = undefined;
          tmpResult2 = ApplicationAssetUtils;
          if (assets2 != null) {
            if (assets2.large_text != null) {
              trimmed1 = str.trim();
            }
          }
          const assets3 = application_id.assets;
          large_url = undefined;
          if (assets3 != null) {
            large_url = assets3.large_url;
          }
          tmp9 = obj8;
        }
        cResult[1] = application_id;
        cResult[2] = large_image;
        cResult[3] = tmp9;
        tmp8 = tmp9;
      }
    }
  : (application_id, arg1) => {
      let items;
      let items1;
      let large_url;
      let small_url;
      let stringResult;
      let tmpResult;
      let tmpResult2;
      let trimmed;
      let trimmed1;
      useGetOrFetchApplications;
      if (application_id != null) {
        application_id = application_id.application_id;
      }
      if (null == application_id) {
        return { largeImage: "start", smallImage: "unicodeVersion" };
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
          const obj = {
            src: tmpResult.getAssetImage(application_id.application_id, large_image, items),
            text: trimmed,
            url: large_url,
          };
          items = [,];
          ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
          const assets2 = application_id.assets;
          trimmed = undefined;
          tmpResult = ApplicationAssetUtils;
          if (assets2 != null) {
            if (assets2.large_text != null) {
              trimmed = str.trim();
            }
          }
          const assets3 = application_id.assets;
          large_url = undefined;
          if (assets3 != null) {
            large_url = assets3.large_url;
          }
          tmp6 = obj;
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
          const obj2 = {
            src: tmpResult2.getAssetImage(application_id.application_id, tmp11, items1),
            text: trimmed1,
            url: small_url,
          };
          items1 = [,];
          ({ LARGE: arr2[0], LARGE: arr2[1] } = ImageSizes);
          const assets5 = application_id.assets;
          trimmed1 = undefined;
          tmpResult2 = ApplicationAssetUtils;
          if (assets5 != null) {
            if (assets5.small_text != null) {
              trimmed1 = str2.trim();
            }
          }
          const assets6 = application_id.assets;
          small_url = undefined;
          if (assets6 != null) {
            small_url = assets6.small_url;
          }
          tmp13 = obj2;
        }
        if (tmp6 == null) {
          let name;
          let obj5 = arg1;
          if (arg1 == null) {
            obj5 = tmp4;
          }
          let iconURL;
          if (obj5 != null) {
            iconURL = obj5.getIconURL(ImageSizes.LARGE);
          }
          if (obj5 != null) {
            name = obj5.name;
          }
          let tmp19;
          if (null != iconURL) {
            const obj3 = { src: iconURL, alt: stringResult };
            if (null == name) {
              const intl2 = intl5.intl;
              stringResult = intl2.string(intl5.t["2B/phM"]);
            } else {
              const intl = intl5.intl;
              const obj4 = { applicationName: name };
              stringResult = intl.formatToPlainString(intl5.t.tiKyYg, obj4);
            }
            tmp19 = obj3;
          }
          tmp6 = tmp19;
        }
        return { largeImage: tmp6, smallImage: tmp13 };
      }
    };
let closure_12 = tmp5;
function getApplicationImage(getIconURL) {
  let name;
  let stringResult;
  let iconURL;
  if (getIconURL != null) {
    iconURL = getIconURL.getIconURL(ImageSizes.LARGE);
  }
  if (getIconURL != null) {
    name = getIconURL.name;
  }
  if (null != iconURL) {
    const obj = { src: iconURL, alt: stringResult };
    if (null == name) {
      const intl2 = intl5.intl;
      stringResult = intl2.string(intl5.t["2B/phM"]);
    } else {
      const intl = intl5.intl;
      const obj2 = { applicationName: name };
      stringResult = intl.formatToPlainString(intl5.t.tiKyYg, obj2);
    }
    return obj;
  }
}
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityImageUtils.tsx");

export { getApplicationImage };
export const useImageForContentEntry = tmp3;
export const useImageForActivity = tmp4;
export const useRichImageForActivity = tmp5;
