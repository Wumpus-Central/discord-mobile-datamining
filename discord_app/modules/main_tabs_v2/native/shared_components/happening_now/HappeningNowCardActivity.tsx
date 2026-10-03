// === Module 15994: HappeningNowCardActivity ===

// Module 15994 (HappeningNowCardActivity)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import FastImageDefault from "FastImage" /* 5974 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 7821 */;
import VideoBackground from "VideoBackground" /* 7920 */;
import StreamPreviewDefault from "StreamPreview" /* 9743 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 9746 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10625 */;
import isOnXboxDefault from "isOnXbox" /* 12825 */;
import useLiveStageData from "useLiveStageData" /* 15992 */;
import _modDef15995 from "module_15995" /* 15995 */;
import _modDef15996 from "module_15996" /* 15996 */;
import HappeningNowAvatarStack from "HappeningNowAvatarStack" /* 16003 */;
import noop from "module_19" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import UserStore from "UserStore" /* 1377 */;

const _modDef16005 = tmp4(16005);
require = fn;
function getActivityA11yLabel(activity) {
  if (isListeningOnSpotifyDefault(activity)) {
    const intl4 = util.intl;
    let stringResult = intl4.string(util.t.rmnkz4);
  } else {
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === constants2.LISTENING) {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t.kUEnxN);
    } else if (isOnXboxDefault(activity)) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.T0uYK9);
    } else {
      let type1;
      if (activity != null) {
        type1 = activity.type;
      }
      if (type1 !== tmp5.CUSTOM_STATUS) {
        const intl = util.intl;
        stringResult = intl.string(util.t["2TbM/G"]);
      }
    }
  }
  return stringResult;
}
get_ActivityIndicator = fn(17);
({ PixelRatio, View: closure_4 } = get_ActivityIndicator);
const HappeningNowConstants = fn(15110);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: closure_7, STATUS_CUTOUT_SMALL: closure_8, HAPPENING_NOW_STAGE_PREVIEW_HEIGHT } = HappeningNowConstants);
const Constants = fn(1085);
({ ActivityTypes: closure_9, AnalyticEvents: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(HAPPENING_NOW_CONTENT_HEIGHT);
let items = [_modDef15995, _modDef15996];
let c16 = 0.32;
const createStyles = fn(4890);
let obj = { content: { flexShrink: 1, gap: 2 }, avatarStackContainer: { backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: nativeDefault.radii.xl, position: "absolute", alignSelf: "center", bottom: 0 }, cardAvatar: { marginBottom: 2 }, cardImage: { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12, position: "relative" }, cardImageStream: { height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, position: "relative" }, cardImageAsset: null, cardImageAssetContainer: null, cardImageAssetBackground: null, cardImageStreamPreview: null, cardImageStreamLive: null, stageStreamLiveText: null, stagePreviewWrapper: null };
let obj3 = { backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: nativeDefault.radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
obj.cardImageAsset = { flex: 1, width: "100%", borderRadius: nativeDefault.radii.sm - 1 };
let obj4 = { flex: 1, width: "100%", borderRadius: nativeDefault.radii.sm - 1 };
obj.cardImageAssetContainer = { height: "100%", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG, borderRadius: nativeDefault.radii.sm, shadowOffset: { width: 0, height: 0 }, shadowRadius: 5, shadowOpacity: 0.32 };
let size = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.cardImageAssetBackground = size;
let obj5 = { height: "100%", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG, borderRadius: nativeDefault.radii.sm, shadowOffset: { width: 0, height: 0 }, shadowRadius: 5, shadowOpacity: 0.32 };
obj.cardImageStreamPreview = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.cardImageStreamLive = { top: 4, left: 4, position: "absolute" };
obj.stageStreamLiveText = { fontSize: 10, lineHeight: 13, fontFamily: fn(1096).Fonts.PRIMARY_BOLD };
obj.stagePreviewWrapper = { marginRight: 12, flexDirection: "column", height: "100%" };
let closure_17 = createStyles.createStyles(obj);
let obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(43);
  ({ userId, activity, stream, game } = arg0);
  const tmp4 = closure_17();
  if (cResult[0] === activity) {
    if (cResult[1] === game) {
      if (cResult[2] === stream) {
        if (cResult[3] === userId) {
          let tmp5 = cResult[4];
        }
        ({ source, accentColor } = closure_21(tmp5));
        ({ r, g, b } = accentColor);
        if (cResult[5] === b) {
          if (cResult[6] === g) {
            if (cResult[7] === r) {
              let tmp8 = cResult[8];
              let tmp9 = cResult[9];
            }
            if (cResult[10] !== tmp8) {
              if (tmpResult.isAndroid()) {
                const obj2 = { boxShadow: null };
                const obj3 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: ColorUtils.hexWithOpacity(tmp8, c16) };
                items = [obj3];
                obj2.boxShadow = items;
                let obj4 = obj2;
                const tmpResult4 = ColorUtils;
              } else {
                obj4 = { shadowColor: tmp8 };
              }
              cResult[10] = tmp8;
              cResult[11] = obj4;
              tmpResult = PlatformUtils;
            } else {
              if (cResult[12] === tmp4.cardImageAssetContainer) {
                if (cResult[13] === tmp12) {
                  let tmp15 = cResult[14];
                }
                if (cResult[15] !== tmp9) {
                  const obj5 = { backgroundColor: tmp9 };
                  cResult[15] = tmp9;
                  cResult[16] = obj5;
                  let tmp16 = obj5;
                } else {
                  tmp16 = cResult[16];
                }
                if (cResult[17] === tmp4.cardImageAssetBackground) {
                  if (cResult[18] === tmp16) {
                    let tmp17 = cResult[19];
                  }
                  if (null != stream) {
                    if (cResult[20] === tmp4.cardImageStreamLive) {
                      if (cResult[21] === tmp4.stageStreamLiveText) {
                        let tmp34 = cResult[22];
                      }
                      const _Symbol = Symbol;
                      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl = util.intl;
                        const stringResult = intl.string(util.t["7Xq/nV"]);
                        cResult[23] = stringResult;
                        let tmp38 = stringResult;
                      } else {
                        tmp38 = cResult[23];
                      }
                      if (cResult[24] === stream) {
                        if (cResult[25] === tmp4.cardImageStreamPreview) {
                          if (cResult[26] === tmp34) {
                            let tmp40 = cResult[27];
                          }
                          if (cResult[28] === tmp15) {
                            if (cResult[29] === tmp40) {
                              let tmp44 = cResult[30];
                            }
                            return tmp44;
                          }
                          const obj6 = { style: tmp15, children: tmp40 };
                          const tmp47 = closure_1_11(React4, obj6);
                          cResult[28] = tmp15;
                          cResult[29] = tmp40;
                          cResult[30] = tmp47;
                          tmp44 = tmp47;
                        }
                      }
                      const obj7 = { stream, children: tmp34, style: tmp4.cardImageStreamPreview, ctaText: tmp38, disabled: true };
                      const tmp43 = closure_1_11(StreamPreviewDefault, obj7);
                      cResult[24] = stream;
                      cResult[25] = tmp4.cardImageStreamPreview;
                      cResult[26] = tmp34;
                      cResult[27] = tmp43;
                      tmp40 = tmp43;
                    }
                    ({ cardImageStreamLive: obj14.style, stageStreamLiveText: obj14.textStyle } = tmp4);
                    const tmp36 = closure_1_11(native.LiveTag, { style: null, textStyle: null, allowFontScaling: false });
                    cResult[20] = tmp4.cardImageStreamLive;
                    cResult[21] = tmp4.stageStreamLiveText;
                    cResult[22] = tmp36;
                    tmp34 = tmp36;
                    const obj8 = { style: null, textStyle: null, allowFontScaling: false };
                  } else {
                    if (cResult[31] !== activity) {
                      const tmp21 = getActivityA11yLabel(activity);
                      cResult[31] = activity;
                      cResult[32] = tmp21;
                      let tmp19 = tmp21;
                    } else {
                      tmp19 = cResult[32];
                    }
                    if (cResult[33] === tmp4.cardImageAsset) {
                      if (cResult[34] === source) {
                        let tmp22 = cResult[35];
                      }
                      if (cResult[36] === tmp17) {
                        if (cResult[37] === tmp22) {
                          let tmp26 = cResult[38];
                        }
                        if (cResult[39] === tmp19) {
                          if (cResult[40] === tmp15) {
                            if (cResult[41] === tmp26) {
                              let tmp30 = cResult[42];
                            }
                            return tmp30;
                          }
                        }
                        const obj9 = { style: tmp15, accessibilityLabel: tmp19, children: tmp26 };
                        const tmp33 = closure_1_11(React4, obj9);
                        cResult[39] = tmp19;
                        cResult[40] = tmp15;
                        cResult[41] = tmp26;
                        cResult[42] = tmp33;
                        tmp30 = tmp33;
                      }
                      const obj10 = { style: tmp17, children: tmp22 };
                      const tmp29 = closure_1_11(React4, obj10);
                      cResult[36] = tmp17;
                      cResult[37] = tmp22;
                      cResult[38] = tmp29;
                      tmp26 = tmp29;
                    }
                    const obj11 = { style: tmp4.cardImageAsset, source };
                    const tmp25 = closure_1_11(FastImageDefault, obj11);
                    cResult[33] = tmp4.cardImageAsset;
                    cResult[34] = source;
                    cResult[35] = tmp25;
                    tmp22 = tmp25;
                  }
                }
                const items1 = [tmp4.cardImageAssetBackground, tmp16];
                cResult[17] = tmp4.cardImageAssetBackground;
                cResult[18] = tmp16;
                cResult[19] = items1;
                tmp17 = items1;
              }
              const items2 = [tmp4.cardImageAssetContainer, cResult[11]];
              cResult[12] = tmp4.cardImageAssetContainer;
              cResult[13] = cResult[11];
              cResult[14] = items2;
              tmp15 = items2;
            }
          }
        }
        const tmp7 = closure_21(tmp5);
        const rgbToHexResult = ColorUtils.rgbToHex(r, g, b);
        const tmpResult5 = ColorUtils;
        const hexWithOpacityResult = ColorUtils.hexWithOpacity(rgbToHexResult, 0.2);
        cResult[5] = b;
        cResult[6] = g;
        cResult[7] = r;
        cResult[8] = rgbToHexResult;
        cResult[9] = hexWithOpacityResult;
        tmp9 = hexWithOpacityResult;
        tmp8 = rgbToHexResult;
        const tmpResult6 = ColorUtils;
      }
    }
  }
  const obj12 = { userId, activity, game, stream };
  cResult[0] = activity;
  cResult[1] = game;
  cResult[2] = stream;
  cResult[3] = userId;
  cResult[4] = obj12;
  tmp5 = obj12;
}) : ((arg0) => {
  ({ activity, stream } = arg0);
  ({ userId, game } = arg0);
  const tmp = closure_17();
  _require = tmp;
  ({ source, accentColor } = closure_21({ userId, activity, game, stream }));
  ({ r, g, b } = accentColor);
  const tmp2 = closure_21({ userId, activity, game, stream });
  const rgbToHexResult = require("ColorUtils").rgbToHex(r, g, b);
  importDefault = rgbToHexResult;
  const obj = require("ColorUtils");
  const hexWithOpacityResult = require("ColorUtils").hexWithOpacity(rgbToHexResult, 0.2);
  dependencyMap = hexWithOpacityResult;
  items = [rgbToHexResult, tmp.cardImageAssetContainer];
  const memo = noop.useMemo(() => {
    items = [closure_0.cardImageAssetContainer, ];
    if (obj.isAndroid()) {
      const obj2 = { boxShadow: null };
      const obj3 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: ColorUtils.hexWithOpacity(shadowColor, c16) };
      const items1 = [obj3];
      obj2.boxShadow = items1;
      let obj4 = obj2;
      const tmpResult = ColorUtils;
    } else {
      obj4 = { shadowColor };
    }
    items[1] = obj4;
    return items;
  }, items);
  let items1 = [hexWithOpacityResult, tmp.cardImageAssetBackground];
  if (null != stream) {
    let obj3 = { style: memo, children: null };
    let obj4 = { stream, children: null, style: null, ctaText: null, disabled: true };
    ({ cardImageStreamLive: obj5.style, stageStreamLiveText: obj5.textStyle } = tmp);
    obj4.children = closure_11(tmp3(1188).LiveTag, { style: null, textStyle: null, allowFontScaling: false });
    obj4.style = tmp.cardImageStreamPreview;
    const intl = tmp3(1126).intl;
    obj4.ctaText = intl.string(tmp3(1126).t["7Xq/nV"]);
    obj3.children = closure_11(StreamPreviewDefault, obj4);
    return closure_11(closure_4, obj3);
  } else {
    const obj7 = { style: memo, accessibilityLabel: getActivityA11yLabel(activity), children: null };
    const obj8 = { style: tmp8, children: null };
    const obj14 = { style: tmp.cardImageAsset, source };
    obj8.children = closure_11(FastImageDefault, obj14);
    obj7.children = closure_11(closure_4, obj8);
    return closure_11(closure_4, obj7);
  }
  let obj2 = require("ColorUtils");
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ user, stage } = arg0);
  const tmp4 = closure_17();
  const liveStageData = useLiveStageData.useLiveStageData(stage);
  const audienceFriends = liveStageData.audienceFriends;
  if (cResult[0] === audienceFriends) {
    if (cResult[1] === user) {
      let tmp7 = cResult[2];
    }
    const sum = tmp6 + 1;
    if (cResult[3] === stage.guild_id) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === sum) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === tmp4.avatarStackContainer) {
          if (cResult[8] === tmp9) {
            let tmp12 = cResult[9];
          }
          return tmp12;
        }
        const obj3 = { style: tmp4.avatarStackContainer, children: tmp9 };
        const tmp15 = closure_1_11(React4, obj3);
        cResult[7] = tmp4.avatarStackContainer;
        cResult[8] = tmp9;
        cResult[9] = tmp15;
        tmp12 = tmp15;
      }
    }
    const obj4 = { users: tmp7, guildId: stage.guild_id, userCount: sum, isStage: true, avatarSize: native.AvatarSizes.SIZE_16 };
    const tmp11 = closure_1_11(HappeningNowAvatarStack.HappeningNowAvatarStack, obj4);
    cResult[3] = stage.guild_id;
    cResult[4] = tmp7;
    cResult[5] = sum;
    cResult[6] = tmp11;
    tmp9 = tmp11;
  }
  items = [user, ...audienceFriends];
  cResult[0] = audienceFriends;
  cResult[1] = user;
  cResult[2] = items;
  tmp7 = items;
}) : ((stage) => {
  stage = stage.stage;
  const tmp = closure_17();
  const liveStageData = useLiveStageData.useLiveStageData(stage);
  const obj2 = { style: tmp.avatarStackContainer, children: null };
  ({ audienceCount, audienceFriends } = liveStageData);
  const obj3 = { users: null, guildId: null, userCount: null, isStage: true, avatarSize: null };
  items = [stage.user];
  HermesBuiltin.arraySpread(audienceFriends, 1);
  obj3.users = items;
  obj3.guildId = stage.guild_id;
  obj3.userCount = audienceCount + 1;
  obj3.avatarSize = native.AvatarSizes.SIZE_16;
  obj2.children = closure_1_11(HappeningNowAvatarStack.HappeningNowAvatarStack, obj3);
  return closure_1_11(React4, obj2);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ userId, activity, game, stream } = arg0);
  let tmp6 = null;
  let guildId;
  if (stream != null) {
    guildId = stream.guildId;
  }
  let channelId;
  if (stream != tmp6) {
    channelId = stream.channelId;
  }
  let ownerId;
  if (stream != tmp6) {
    ownerId = stream.ownerId;
  }
  const previewUrl = useFetchStreamPreviewDefault(guildId, channelId, ownerId).previewUrl;
  let tmp10;
  if (tmp6 != previewUrl) {
    tmp10 = previewUrl;
  }
  let tmp11 = tmp10;
  if (tmp6 == tmp10) {
    let large_image;
    if (activity != tmp6) {
      const assets = activity.assets;
      if (assets != tmp6) {
        large_image = assets.large_image;
      }
    }
    tmp11 = tmp10;
    if (tmp6 != large_image) {
      let application_id;
      if (activity != tmp6) {
        application_id = activity.application_id;
      }
      let large_image1;
      if (activity != tmp6) {
        large_image1 = activity.assets.large_image;
      }
      if (cResult[0] === application_id) {
      }
      items = [closure_14, closure_14];
      const assetImage = ApplicationAssetUtils.getAssetImage(application_id, large_image1, items);
      cResult[0] = application_id;
      cResult[1] = large_image1;
      cResult[2] = assetImage;
      const tmpResult = ApplicationAssetUtils;
    }
  }
  if (tmp6 != tmp11) {
    let tmp23 = tmp11;
    if (tmp6 == tmp11) {
      let small_image;
      if (activity != tmp6) {
        const assets2 = activity.assets;
        if (assets2 != tmp6) {
          small_image = assets2.small_image;
        }
      }
      tmp23 = tmp11;
      if (tmp6 != small_image) {
        let application_id1;
        if (activity != tmp6) {
          application_id1 = activity.application_id;
        }
        let small_image1;
        if (activity != tmp6) {
          small_image1 = activity.assets.small_image;
        }
        if (cResult[5] === application_id1) {
        }
        const items1 = [closure_14, closure_14];
        const assetImage1 = ApplicationAssetUtils.getAssetImage(application_id1, small_image1, items1);
        cResult[5] = application_id1;
        cResult[6] = small_image1;
        cResult[7] = assetImage1;
        const tmpResult4 = ApplicationAssetUtils;
      }
    }
    if (tmp6 != tmp23) {
      if (cResult[11] !== tmp23) {
        const memoizedImageSourceResult = VideoBackground.memoizedImageSource(tmp23);
        cResult[11] = tmp23;
        cResult[12] = memoizedImageSourceResult;
        let tmp38 = memoizedImageSourceResult;
        const tmpResult5 = VideoBackground;
      } else {
        tmp38 = cResult[12];
      }
      const dominantRGBFromImage = VideoBackground.useDominantRGBFromImage(tmp23, tmp38);
      if (cResult[13] === dominantRGBFromImage) {
        if (cResult[14] === tmp38) {
          let tmp42 = cResult[15];
        }
        return tmp42;
      }
      const obj2 = { source: tmp38, accentColor: dominantRGBFromImage };
      cResult[13] = dominantRGBFromImage;
      cResult[14] = tmp38;
      cResult[15] = obj2;
      tmp42 = obj2;
      const tmpResult6 = VideoBackground;
    } else {
      let type;
      if (activity != tmp6) {
        type = activity.type;
      }
      if (cResult[8] === type) {
      }
      let type1;
      if (activity != tmp6) {
        type1 = activity.type;
      }
      if (type1 === constants2.PLAYING) {
        const substr = userId.slice(-1);
        let tmp4Result = items[substr.charCodeAt(substr, 0) % items.length];
      } else {
        tmp4Result = _modDef16005;
      }
      tmp6 = activity == tmp6;
      let type2;
      if (!tmp6) {
        type2 = activity.type;
      }
      cResult[8] = type2;
      cResult[9] = userId;
      cResult[10] = tmp4Result;
    }
  } else if (cResult[3] !== game) {
    let iconURL;
    if (game != tmp6) {
      iconURL = game.getIconURL(closure_14);
    }
    cResult[3] = game;
    cResult[4] = iconURL;
  }
}) : ((arg0) => {
  ({ userId, activity, game, stream } = arg0);
  let guildId;
  if (stream != null) {
    guildId = stream.guildId;
  }
  let channelId;
  if (stream != null) {
    channelId = stream.channelId;
  }
  let ownerId;
  if (stream != null) {
    ownerId = stream.ownerId;
  }
  const previewUrl = useFetchStreamPreviewDefault(guildId, channelId, ownerId).previewUrl;
  let assetImage;
  if (null != previewUrl) {
    assetImage = previewUrl;
  }
  let tmp8 = null == assetImage;
  if (tmp8) {
    let large_image;
    if (activity != null) {
      const assets = activity.assets;
      if (assets != null) {
        large_image = assets.large_image;
      }
    }
    tmp8 = null != large_image;
  }
  if (tmp8) {
    let application_id;
    if (activity != null) {
      application_id = activity.application_id;
    }
    let large_image1;
    if (activity != null) {
      large_image1 = activity.assets.large_image;
    }
    items = [closure_14, closure_14];
    assetImage = ApplicationAssetUtils.getAssetImage(application_id, large_image1, items);
  }
  if (null == assetImage) {
    let iconURL;
    if (game != null) {
      iconURL = game.getIconURL(closure_14);
    }
    assetImage = iconURL;
  }
  let tmp16 = null == assetImage;
  if (tmp16) {
    let small_image;
    if (activity != null) {
      const assets2 = activity.assets;
      if (assets2 != null) {
        small_image = assets2.small_image;
      }
    }
    tmp16 = null != small_image;
  }
  if (tmp16) {
    let application_id1;
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    let small_image1;
    if (activity != null) {
      small_image1 = activity.assets.small_image;
    }
    const items1 = [closure_14, closure_14];
    assetImage = ApplicationAssetUtils.getAssetImage(application_id1, small_image1, items1);
  }
  if (null != assetImage) {
    const memoizedImageSourceResult = VideoBackground.memoizedImageSource(assetImage);
    const obj3 = { source: memoizedImageSourceResult, accentColor: null };
    obj3.accentColor = VideoBackground.useDominantRGBFromImage(assetImage, memoizedImageSourceResult);
    return obj3;
  } else {
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === constants2.PLAYING) {
      const substr = userId.slice(-1);
      userId = substr.charCodeAt(0);
      let tmpResult = items[userId % items.length];
    } else {
      tmpResult = _modDef16005;
    }
  }
});
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx");

export default noop.memo((userId) => {
  userId = userId.userId;
  const guildId = userId.guildId;
  const index = userId.index;
  const activity = userId.activity;
  const stream = userId.stream;
  ({ fullwidth, panelVariant } = userId);
  ({ status, renderingContext } = userId);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let stateFromStores;
  const tmp = closure_17();
  const analyticsLocations = guildId(index[12])().analyticsLocations;
  items = [stateFromStores];
  stateFromStores = userId(index[13]).useStateFromStores(items, () => UserStore.getUser(userId));
  let obj = userId(index[13]);
  let application_id;
  if (activity != null) {
    application_id = activity.application_id;
  }
  const getOrFetchApplication = userId(index[14]).useGetOrFetchApplication(application_id);
  let obj2 = userId(index[14]);
  const items1 = [analyticsLocations];
  const stateFromStores1 = userId(index[13]).useStateFromStores(items1, () => {
    let channelId;
    if (stream != null) {
      channelId = stream.channelId;
    }
    return StageInstanceStore.getStageInstanceByChannel(channelId);
  });
  if (guildId(index[26])(activity)) {
    let GameControllerIcon = tmp4(tmp3[27]).SpotifyNeutralIcon;
  } else {
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === constants2.LISTENING) {
      GameControllerIcon = tmp4(tmp3[28]).MusicIcon;
    } else if (tmp2(tmp3[29])(activity)) {
      GameControllerIcon = tmp4(tmp3[30]).XboxNeutralIcon;
    } else {
      let type1;
      if (activity != null) {
        type1 = activity.type;
      }
      if (type1 !== tmp10.CUSTOM_STATUS) {
        if (null != stateFromStores1) {
          GameControllerIcon = tmp4(tmp3[31]).StageIcon;
        } else {
          GameControllerIcon = tmp4(tmp3[32]).GameControllerIcon;
        }
      }
    }
  }
  const items2 = [userId, stateFromStores, stream, guildId, activity, index, analyticsLocations];
  const callback = activity.useCallback(() => {
    if (null != stream) {
      let STATUS_CARD = constants.STREAM_CARD;
    } else {
      if (null != activity) {
        if (activity.type !== constants2.CUSTOM_STATUS) {
          STATUS_CARD = constants.ACTIVITY_CARD;
        }
      }
      STATUS_CARD = constants.STATUS_CARD;
    }
    const obj2 = { type: STATUS_CARD, order: index, guild_id: guildId, highlighted_user_ids: null, destination_channel_id: null };
    items = [userId];
    obj2.highlighted_user_ids = items;
    let channelId;
    if (stream != null) {
      channelId = stream.channelId;
    }
    obj2.destination_channel_id = channelId;
    AnalyticsUtilsDefault.track(constants3.ACTIVITY_CARD_CLICKED, obj2);
    if (null != stream) {
      asyncRequireImpl(12695, dependencyMap.paths).then((result) => result.default(channelId.channelId, true));
      const promise2 = asyncRequireImpl(12695, dependencyMap.paths);
    } else {
      asyncRequireImpl(7850, dependencyMap.paths).then((result) => result.default({ userId, localUser, sourceAnalyticsLocations }));
      const promise = asyncRequireImpl(7850, dependencyMap.paths);
    }
  }, items2);
  if (null == stateFromStores) {
    const obj3 = { panelVariant };
    return closure_11(tmp4(tmp3[19]).HappeningNowCardPlaceholder, obj3);
  } else {
    let str2 = "full";
    if (!fullwidth) {
      let str = "medium";
      if (null != stream) {
        str = "large";
      }
      str2 = str;
    }
    const name = tmp2(tmp3[20]).getName(guildId, null, stateFromStores);
    let type2;
    if (activity != null) {
      type2 = activity.type;
    }
    if (type2 === constants2.CUSTOM_STATUS) {
      const obj4 = { fullwidth, user: stateFromStores, guildId, activity, userTitle: name, onPress: callback, panelVariant };
      let tmp23Result2 = closure_11(tmp4(tmp3[21]).CustomStatusActivityCard, obj4);
    } else {
      const obj5 = { onPress: callback, width: str2, IconComponent: GameControllerIcon, panelVariant, children: null };
      if (null != stateFromStores1) {
        const obj6 = { style: tmp.stagePreviewWrapper, children: null };
        const obj7 = { style: tmp.cardImageStream, children: null };
        const obj8 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        obj7.children = closure_11(closure_19, obj8);
        const items3 = [closure_11(stream, obj7), ];
        let tmp23Result = null;
        if (null != stateFromStores1) {
          const obj9 = { user: stateFromStores, stage: stateFromStores1 };
          tmp23Result = closure_11(closure_20, obj9);
        }
        const obj10 = { children: null };
        items3[1] = tmp23Result;
        obj6.children = items3;
        const items4 = [closure_12(stream, obj6), ];
        const obj11 = { stage: stateFromStores1, renderingContext, guildId, streamingUser: stateFromStores };
        items4[1] = closure_11(tmp4(tmp3[23]).HappeningNowLiveStageContent, obj11);
        obj10.children = items4;
        let obj12 = obj10;
      } else {
        obj12 = { children: null };
        const obj13 = { style: tmp.cardImage, children: null };
        const obj14 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        obj13.children = closure_11(closure_19, obj14);
        const items5 = [closure_11(stream, obj13), ];
        const obj15 = { style: tmp.content, children: null };
        const obj16 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, size: tmp4(tmp3[24]).AvatarSizes.XSMALL, guildId, status, style: tmp.cardAvatar, autoStatusCutout };
        const items6 = [closure_11(tmp4(tmp3[24]).Avatar, obj16), , ];
        const obj17 = { noMargin: true, children: name };
        items6[1] = closure_11(tmp4(tmp3[22]).HappeningNowCardHeader, obj17);
        const obj18 = { activity, stream };
        items6[2] = closure_11(tmp4(tmp3[25]).HappeningNowActivityCardSubtitle, obj18);
        obj15.children = items6;
        items5[1] = closure_12(stream, obj15);
        obj12.children = items5;
      }
      obj5.children = closure_12(closure_13, obj12);
      tmp23Result2 = closure_11(tmp2(tmp3[22]), obj5);
      const tmp2Result2 = tmp2(tmp3[22]);
    }
    return tmp23Result2;
  }
  const tmp4Result = userId(index[13]);
});