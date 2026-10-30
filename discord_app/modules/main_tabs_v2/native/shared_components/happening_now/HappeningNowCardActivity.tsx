// === Module 18077: HappeningNowCardActivity ===

// Module 18077 (HappeningNowCardActivity)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ColorUtils from "ColorUtils" /* 5006 */;
import ActivityTypes from "ActivityTypes" /* 5757 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 12003 */;
import useLiveStageData from "useLiveStageData" /* 18075 */;
import _modDef18078 from "module_18078" /* 18078 */;
import _modDef18079 from "module_18079" /* 18079 */;
import HappeningNowAvatarStack from "HappeningNowAvatarStack" /* 18086 */;
import noop from "module_19" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 4863 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
function IconOrPreview(arg0) {
  ({ userId, activity, stream, game } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = closure_15();
  _require = tmp;
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
  let tmp9 = null == assetImage;
  if (tmp9) {
    let large_image;
    if (activity != null) {
      const assets = activity.assets;
      if (assets != null) {
        large_image = assets.large_image;
      }
    }
    tmp9 = null != large_image;
  }
  if (tmp9) {
    let application_id;
    if (activity != null) {
      application_id = activity.application_id;
    }
    let large_image1;
    if (activity != null) {
      large_image1 = activity.assets.large_image;
    }
    items = [closure_13, closure_13];
    assetImage = require("ApplicationAssetUtils").getAssetImage(application_id, large_image1, items);
    const obj = require("ApplicationAssetUtils");
  }
  if (null == assetImage) {
    let iconURL;
    if (game != null) {
      iconURL = game.getIconURL(closure_13);
    }
    assetImage = iconURL;
  }
  let tmp17 = null == assetImage;
  if (tmp17) {
    let small_image;
    if (activity != null) {
      const assets2 = activity.assets;
      if (assets2 != null) {
        small_image = assets2.small_image;
      }
    }
    tmp17 = null != small_image;
  }
  if (tmp17) {
    let application_id1;
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    let small_image1;
    if (activity != null) {
      small_image1 = activity.assets.small_image;
    }
    let items1 = [closure_13, closure_13];
    assetImage = require("ApplicationAssetUtils").getAssetImage(application_id1, small_image1, items1);
    let obj2 = require("ApplicationAssetUtils");
  }
  if (null != assetImage) {
    const memoizedImageSourceResult = require("VideoBackground").memoizedImageSource(assetImage);
    let obj4 = require("VideoBackground");
    const dominantRGBFromImage = require("VideoBackground").useDominantRGBFromImage(assetImage, memoizedImageSourceResult);
    ({ r, g, b } = dominantRGBFromImage);
    const obj5 = require("VideoBackground");
    const rgbToHexResult = require("ColorUtils").rgbToHex(r, g, b);
    importDefault = rgbToHexResult;
    const obj6 = require("ColorUtils");
    const hexWithOpacityResult = require("ColorUtils").hexWithOpacity(rgbToHexResult, 0.2);
    dependencyMap = hexWithOpacityResult;
    const items2 = [rgbToHexResult, tmp.cardImageAssetContainer];
    const memo = noop.useMemo(() => {
      items = [closure_0.cardImageAssetContainer, ];
      if (obj.isAndroid()) {
        const obj2 = { boxShadow: null };
        const obj3 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: ColorUtils.hexWithOpacity(shadowColor, 0.32) };
        const items1 = [obj3];
        obj2.boxShadow = items1;
        let obj4 = obj2;
        const tmpResult = ColorUtils;
      } else {
        obj4 = { shadowColor };
      }
      items[1] = obj4;
      return items;
    }, items2);
    const items3 = [hexWithOpacityResult, tmp.cardImageAssetBackground];
    if (null != stream) {
      let obj3 = { style: memo, children: null };
      const obj8 = { stream, children: null, style: null, ctaText: null, disabled: true };
      ({ cardImageStreamLive: obj13.style, stageStreamLiveText: obj13.textStyle } = tmp);
      obj8.children = closure_10(tmp28(1188).LiveTag, { style: null, textStyle: null, allowFontScaling: false });
      obj8.style = tmp.cardImageStreamPreview;
      const intl5 = tmp28(1114).intl;
      obj8.ctaText = intl5.string(tmp28(1114).t["7Xq/nV"]);
      obj3.children = closure_10(tmp2(12000), obj8);
      return closure_10(closure_4, obj3);
    } else {
      if (tmp2(10742)(activity)) {
        const intl4 = tmp28(1114).intl;
        let stringResult = intl4.string(tmp28(1114).t.rmnkz4);
      } else {
        let type;
        if (activity != null) {
          type = activity.type;
        }
        if (type === tmp28(5757).ActivityTypes.LISTENING) {
          const intl3 = tmp28(1114).intl;
          stringResult = intl3.string(tmp28(1114).t.kUEnxN);
        } else if (tmp2(14810)(activity)) {
          const intl2 = tmp28(1114).intl;
          stringResult = intl2.string(tmp28(1114).t.T0uYK9);
        } else {
          let type1;
          if (activity != null) {
            type1 = activity.type;
          }
          if (type1 !== tmp28(5757).ActivityTypes.CUSTOM_STATUS) {
            const intl = tmp28(1114).intl;
            stringResult = intl.string(tmp28(1114).t["2TbM/G"]);
          }
        }
      }
      const obj10 = { style: memo, accessibilityLabel: stringResult, children: null };
      const obj11 = { style: tmp35, children: null };
      const obj12 = { style: tmp.cardImageAsset, source: memoizedImageSourceResult };
      obj11.children = closure_10(tmp2(5712), obj12);
      obj10.children = closure_10(closure_4, obj11);
      return closure_10(closure_4, obj10);
    }
    const obj7 = require("ColorUtils");
  } else {
    let type2;
    if (activity != null) {
      type2 = activity.type;
    }
    if (type2 === require("ActivityTypes").ActivityTypes.PLAYING) {
      const substr = userId.slice(-1);
      userId = substr.charCodeAt(0);
      let tmp2Result4 = items[userId % items.length];
    } else {
      tmp2Result4 = tmp2(18088);
    }
  }
}
function StageStreamAvatars(stage) {
  stage = stage.stage;
  const tmp = closure_15();
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
  obj2.children = closure_1_10(HappeningNowAvatarStack.HappeningNowAvatarStack, obj3);
  return closure_1_10(React4, obj2);
}
get_ActivityIndicator = fn(17);
({ PixelRatio, View: closure_4 } = get_ActivityIndicator);
const HappeningNowConstants = fn(17217);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: closure_7, STATUS_CUTOUT_SMALL: closure_8, HAPPENING_NOW_STAGE_PREVIEW_HEIGHT } = HappeningNowConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(HAPPENING_NOW_CONTENT_HEIGHT);
let items = [_modDef18078, _modDef18079];
const createStyles = fn(5009);
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
obj.stageStreamLiveText = { fontSize: 10, lineHeight: 13, fontFamily: fn(1083).Fonts.PRIMARY_BOLD };
obj.stagePreviewWrapper = { marginRight: 12, flexDirection: "column", height: "100%" };
let closure_15 = createStyles.createStyles(obj);
let obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx");

export default noop.memo(function ActivityCard(userId) {
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
  const tmp = closure_15();
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
  if (guildId(index[27])(activity)) {
    let GameControllerIcon = tmp4(tmp3[28]).SpotifyNeutralIcon;
  } else {
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === tmp4(tmp3[15]).ActivityTypes.LISTENING) {
      GameControllerIcon = tmp4(tmp3[29]).MusicIcon;
    } else if (tmp2(tmp3[30])(activity)) {
      GameControllerIcon = tmp4(tmp3[31]).XboxNeutralIcon;
    } else {
      let type1;
      if (activity != null) {
        type1 = activity.type;
      }
      if (type1 !== tmp4(tmp3[15]).ActivityTypes.CUSTOM_STATUS) {
        if (null != stateFromStores1) {
          GameControllerIcon = tmp4(tmp3[32]).StageIcon;
        } else {
          GameControllerIcon = tmp4(tmp3[33]).GameControllerIcon;
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
        if (activity.type !== ActivityTypes.ActivityTypes.CUSTOM_STATUS) {
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
    AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj2);
    if (null != stream) {
      asyncRequireImpl(13134, dependencyMap.paths).then((result) => result.default(channelId.channelId, true));
      const promise2 = asyncRequireImpl(13134, dependencyMap.paths);
    } else {
      asyncRequireImpl(8742, dependencyMap.paths).then((result) => result.default({ userId, localUser, sourceAnalyticsLocations }));
      const promise = asyncRequireImpl(8742, dependencyMap.paths);
    }
  }, items2);
  if (null == stateFromStores) {
    const obj3 = { panelVariant };
    return closure_10(tmp4(tmp3[20]).HappeningNowCardPlaceholder, obj3);
  } else {
    let str2 = "full";
    if (!fullwidth) {
      let str = "medium";
      if (null != stream) {
        str = "large";
      }
      str2 = str;
    }
    const name = tmp2(tmp3[21]).getName(guildId, null, stateFromStores);
    let type2;
    if (activity != null) {
      type2 = activity.type;
    }
    if (type2 === tmp4(tmp3[15]).ActivityTypes.CUSTOM_STATUS) {
      const obj4 = { fullwidth, user: stateFromStores, guildId, activity, userTitle: name, onPress: callback, panelVariant };
      let tmp21Result2 = closure_10(tmp4(tmp3[22]).CustomStatusActivityCard, obj4);
    } else {
      const obj5 = { onPress: callback, width: str2, IconComponent: GameControllerIcon, panelVariant, children: null };
      if (null != stateFromStores1) {
        const obj6 = { style: tmp.stagePreviewWrapper, children: null };
        const obj7 = { style: tmp.cardImageStream, children: null };
        const obj8 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        obj7.children = closure_10(IconOrPreview, obj8);
        const items3 = [closure_10(stream, obj7), ];
        let tmp21Result = null;
        if (null != stateFromStores1) {
          const obj9 = { user: stateFromStores, stage: stateFromStores1 };
          tmp21Result = closure_10(StageStreamAvatars, obj9);
        }
        const obj10 = { children: null };
        items3[1] = tmp21Result;
        obj6.children = items3;
        const items4 = [closure_11(stream, obj6), ];
        const obj11 = { stage: stateFromStores1, renderingContext, guildId, streamingUser: stateFromStores };
        items4[1] = closure_10(tmp4(tmp3[24]).HappeningNowLiveStageContent, obj11);
        obj10.children = items4;
        let obj12 = obj10;
      } else {
        obj12 = { children: null };
        const obj13 = { style: tmp.cardImage, children: null };
        const obj14 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        obj13.children = closure_10(IconOrPreview, obj14);
        const items5 = [closure_10(stream, obj13), ];
        const obj15 = { style: tmp.content, children: null };
        const obj16 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, size: tmp4(tmp3[25]).AvatarSizes.XSMALL, guildId, status, style: tmp.cardAvatar, autoStatusCutout };
        const items6 = [closure_10(tmp4(tmp3[25]).Avatar, obj16), , ];
        const obj17 = { noMargin: true, children: name };
        items6[1] = closure_10(tmp4(tmp3[23]).HappeningNowCardHeader, obj17);
        const obj18 = { activity, stream };
        items6[2] = closure_10(tmp4(tmp3[26]).HappeningNowActivityCardSubtitle, obj18);
        obj15.children = items6;
        items5[1] = closure_11(stream, obj15);
        obj12.children = items5;
      }
      obj5.children = closure_11(closure_12, obj12);
      tmp21Result2 = closure_10(tmp2(tmp3[23]), obj5);
      const tmp2Result2 = tmp2(tmp3[23]);
    }
    return tmp21Result2;
  }
  const tmp4Result = userId(index[13]);
});