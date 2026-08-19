// === Module 15336: IconOrPreview ===

// Module 15336 (IconOrPreview)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 12138 */;
import useLiveStageData from "useLiveStageData" /* 15334 */;
import registerAssetDefault from "registerAsset" /* 15337 */;
import registerAssetDefault2 from "registerAsset" /* 15338 */;
import HappeningNowAvatarStack from "HappeningNowAvatarStack" /* 15345 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 14640 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function IconOrPreview(arg0) {
  ({ userId, activity, stream, game } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = callback2();
  const _require = tmp;
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
    let obj = _require(7247);
    let application_id;
    if (activity != null) {
      application_id = activity.application_id;
    }
    let large_image1;
    if (activity != null) {
      large_image1 = activity.assets.large_image;
    }
    items = [closure_14, closure_14];
    assetImage = obj.getAssetImage(application_id, large_image1, items);
  }
  if (null == assetImage) {
    let iconURL;
    if (game != null) {
      iconURL = game.getIconURL(closure_14);
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
    obj1 = _require(7247);
    let application_id1;
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    let small_image1;
    if (activity != null) {
      small_image1 = activity.assets.small_image;
    }
    const items1 = [closure_14, closure_14];
    assetImage = obj1.getAssetImage(application_id1, small_image1, items1);
  }
  if (null != assetImage) {
    let obj3 = _require(8413);
    const memoizedImageSourceResult = obj3.memoizedImageSource(assetImage);
    let obj4 = _require(8413);
    const dominantRGBFromImage = obj4.useDominantRGBFromImage(assetImage, memoizedImageSourceResult);
    ({ r, g, b } = dominantRGBFromImage);
    const rgbToHexResult = _require(4223).rgbToHex(r, g, b);
    importDefault = rgbToHexResult;
    const obj6 = _require(4223);
    const hexWithOpacityResult = _require(4223).hexWithOpacity(rgbToHexResult, 0.2);
    dependencyMap = hexWithOpacityResult;
    const items2 = [rgbToHexResult, tmp.cardImageAssetContainer];
    const memo = importAllResult.useMemo(() => {
      items = [closure_0.cardImageAssetContainer, { shadowColor: c1 }];
      return items;
    }, items2);
    const items3 = [hexWithOpacityResult, tmp.cardImageAssetBackground];
    if (null != stream) {
      obj = { style: null, children: null };
      obj[0] = memo;
      obj = { stream: null, children: null, style: null, ctaText: null, disabled: true };
      obj[0] = stream;
      let tmp2Result = tmp2(12616);
      obj1 = { style: null, textStyle: null, allowFontScaling: false };
      ({ cardImageStreamLive: obj13[0], stageStreamLiveText: obj13[1] } = tmp);
      obj[1] = callback(tmp28(1297).LiveTag, obj1);
      obj[2] = tmp.cardImageStreamPreview;
      const intl5 = tmp28(1236).intl;
      obj[3] = intl5.string(tmp28(1236).t["7Xq/nV"]);
      obj[1] = callback(tmp2Result, obj);
      return callback(closure_4, obj);
    } else {
      if (tmp2(7261)(activity)) {
        const intl4 = tmp28(1236).intl;
        let stringResult = intl4.string(tmp28(1236).t.rmnkz4);
      } else {
        let type;
        if (activity != null) {
          type = activity.type;
        }
        if (type === constants.LISTENING) {
          const intl3 = tmp28(1236).intl;
          stringResult = intl3.string(tmp28(1236).t.kUEnxN);
        } else if (tmp2(12099)(activity)) {
          const intl2 = tmp28(1236).intl;
          stringResult = intl2.string(tmp28(1236).t.T0uYK9);
        } else {
          let type1;
          if (activity != null) {
            type1 = activity.type;
          }
          if (type1 !== tmp37.CUSTOM_STATUS) {
            const intl = tmp28(1236).intl;
            stringResult = intl.string(tmp28(1236).t["2TbM/G"]);
          }
        }
      }
      const obj2 = { style: null, accessibilityLabel: null, children: null };
      obj2[0] = memo;
      obj2[1] = stringResult;
      obj3 = { style: null, children: null };
      obj3[0] = tmp35;
      obj4 = { style: null, source: null };
      obj4[0] = tmp.cardImageAsset;
      obj4[1] = memoizedImageSourceResult;
      obj3[1] = callback(tmp2(5449), obj4);
      obj2[2] = callback(closure_4, obj3);
      return callback(closure_4, obj2);
    }
    const obj7 = _require(4223);
  } else {
    let type2;
    if (activity != null) {
      type2 = activity.type;
    }
    if (type2 === constants.PLAYING) {
      const substr = userId.slice(-1);
      userId = substr.charCodeAt(0);
      tmp2Result = items[userId % items.length];
    } else {
      tmp2Result = tmp2(15347);
    }
  }
}
function StageStreamAvatars(stage) {
  stage = stage.stage;
  let obj = useLiveStageData;
  const liveStageData = obj.useLiveStageData(stage);
  { style: callback2().avatarStackContainer, children: null };
  ({ audienceCount, audienceFriends } = liveStageData);
  obj = { users: null, guildId: null, userCount: null, isStage: true, avatarSize: null };
  items = [stage.user];
  HermesBuiltin.arraySpread(audienceFriends, 1);
  obj[0] = items;
  obj[1] = stage.guild_id;
  obj[2] = audienceCount + 1;
  obj[4] = Button.AvatarSizes.SIZE_16;
  obj[1] = callback(HappeningNowAvatarStack.HappeningNowAvatarStack, obj);
  return callback(closure_4, obj);
}
let c3 = importAllResult;
({ PixelRatio, View: c4 } = get_ActivityIndicator);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: error, STATUS_CUTOUT_SMALL: closure_8, HAPPENING_NOW_STAGE_PREVIEW_HEIGHT } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ ActivityTypes: c9, AnalyticEvents: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(HAPPENING_NOW_CONTENT_HEIGHT);
let items = [registerAssetDefault, registerAssetDefault2];
let obj = { backgroundColor: ThemesDefault.colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: ThemesDefault.radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
obj[1] = obj;
obj[2] = { marginBottom: 2 };
obj[3] = { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12, position: "relative" };
obj[4] = { height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, position: "relative" };
const createCacheKey = { flex: 1, borderRadius: ThemesDefault.radii.sm - 1 };
obj[5] = createCacheKey;
obj[6] = { height: "100%", backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BG, borderRadius: ThemesDefault.radii.sm, shadowOffset: { width: 0, height: 0 }, shadowRadius: 5, shadowOpacity: 0.32, elevation: 10 };
obj[7] = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[8] = { borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
obj[9] = { top: 4, left: 4, position: "absolute" };
obj[10] = { fontSize: 10, lineHeight: 13, fontFamily: require("sum").Fonts.PRIMARY_BOLD };
obj[11] = { marginRight: 12, flexDirection: "column", height: "100%" };
let closure_16 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((userId) => {
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
  const tmp = callback2();
  const analyticsLocations = guildId(index[12])().analyticsLocations;
  let obj = userId(index[13]);
  items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getUser(userId));
  obj1 = userId(index[14]);
  let application_id;
  if (activity != null) {
    application_id = activity.application_id;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(application_id);
  const items1 = [analyticsLocations];
  const stateFromStores1 = userId(index[13]).useStateFromStores(items1, () => {
    let channelId;
    if (stream != null) {
      channelId = stream.channelId;
    }
    return analyticsLocations.getStageInstanceByChannel(channelId);
  });
  if (guildId(index[26])(activity)) {
    let GameControllerIcon = tmp4(tmp3[27]).SpotifyNeutralIcon;
  } else {
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === constants.LISTENING) {
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
      let STATUS_CARD = closure_1_7.STREAM_CARD;
    } else {
      if (null != activity) {
        if (activity.type !== closure_1_9.CUSTOM_STATUS) {
          STATUS_CARD = closure_1_7.ACTIVITY_CARD;
        }
      }
      STATUS_CARD = closure_1_7.STATUS_CARD;
    }
    guildId(index[15]);
    const obj = { type: STATUS_CARD, order: index, guild_id: guildId, highlighted_user_ids: items, destination_channel_id: null };
    items = [userId];
    let channelId;
    if (stream != null) {
      channelId = stream.channelId;
    }
    obj[4] = channelId;
    obj.track(closure_1_10.ACTIVITY_CARD_CLICKED, obj);
    if (null != stream) {
      userId(index[17])(index[16], index.paths).then((result) => result.default(channelId.channelId, true));
      const promise2 = userId(index[17])(index[16], index.paths);
    } else {
      userId(index[17])(index[18], index.paths).then((result) => result.default({ userId: closure_0, localUser: closure_6, sourceAnalyticsLocations: closure_5 }));
      const promise = userId(index[17])(index[18], index.paths);
    }
  }, items2);
  if (null == stateFromStores) {
    obj = { panelVariant: null };
    obj[0] = panelVariant;
    return callback(tmp4(tmp3[19]).HappeningNowCardPlaceholder, obj);
  } else {
    let str2 = "full";
    if (!fullwidth) {
      let str = "medium";
      if (null != stream) {
        str = "large";
      }
      str2 = str;
    }
    let tmp2Result = tmp2(tmp3[20]);
    const name = tmp2Result.getName(guildId, null, stateFromStores);
    let type2;
    if (activity != null) {
      type2 = activity.type;
    }
    if (type2 === constants.CUSTOM_STATUS) {
      obj = { fullwidth: null, user: null, guildId: null, activity: null, userTitle: null, onPress: null, panelVariant: null };
      obj[0] = fullwidth;
      obj[1] = stateFromStores;
      obj[2] = guildId;
      obj[3] = activity;
      obj[4] = name;
      obj[5] = callback;
      obj[6] = panelVariant;
      let tmp23Result = callback(tmp4(tmp3[21]).CustomStatusActivityCard, obj);
    } else {
      obj1 = { onPress: null, width: null, IconComponent: null, panelVariant: null, children: null };
      obj1[0] = callback;
      obj1[1] = str2;
      obj1[2] = GameControllerIcon;
      obj1[3] = panelVariant;
      tmp2Result = tmp2(tmp3[22]);
      if (null != stateFromStores1) {
        const obj2 = { style: null, children: null };
        obj2[0] = tmp.stagePreviewWrapper;
        const obj3 = { style: null, children: null };
        obj3[0] = tmp.cardImageStream;
        const obj4 = { userId: null, activity: null, game: null, stream: null };
        obj4[0] = stateFromStores.id;
        obj4[1] = activity;
        obj4[2] = getOrFetchApplication;
        obj4[3] = stream;
        obj3[1] = tmp23(IconOrPreview, obj4);
        const items3 = [tmp23(stream, obj3), ];
        tmp23Result = null;
        if (null != stateFromStores1) {
          const obj5 = { user: null, stage: null };
          obj5[0] = stateFromStores;
          obj5[1] = stateFromStores1;
          tmp23Result = tmp23(StageStreamAvatars, obj5);
        }
        const obj6 = { children: null };
        items3[1] = tmp23Result;
        obj2[1] = items3;
        const items4 = [callback(stream, obj2), ];
        const obj7 = { stage: null, renderingContext: null, guildId: null, streamingUser: null };
        obj7[0] = stateFromStores1;
        obj7[1] = renderingContext;
        obj7[2] = guildId;
        obj7[3] = stateFromStores;
        items4[1] = tmp23(tmp4(tmp3[23]).HappeningNowLiveStageContent, obj7);
        obj6[0] = items4;
        let obj8 = obj6;
      } else {
        obj8 = { children: null };
        const obj9 = { style: null, children: null };
        obj9[0] = tmp.cardImage;
        const obj10 = { userId: null, activity: null, game: null, stream: null };
        obj10[0] = stateFromStores.id;
        obj10[1] = activity;
        obj10[2] = getOrFetchApplication;
        obj10[3] = stream;
        obj9[1] = tmp23(IconOrPreview, obj10);
        const items5 = [tmp23(stream, obj9), ];
        const obj11 = { style: null, children: null };
        obj11[0] = tmp.content;
        const obj12 = { user: null, avatarDecoration: null, size: null, guildId: null, status: null, style: null, autoStatusCutout: null };
        obj12[0] = stateFromStores;
        obj12[1] = stateFromStores.avatarDecoration;
        obj12[2] = tmp4(tmp3[24]).AvatarSizes.XSMALL;
        obj12[3] = guildId;
        obj12[4] = status;
        obj12[5] = tmp.cardAvatar;
        obj12[6] = closure_8;
        const items6 = [tmp23(tmp4(tmp3[24]).Avatar, obj12), , ];
        const obj13 = { noMargin: true, children: null };
        obj13[1] = name;
        items6[1] = tmp23(tmp4(tmp3[22]).HappeningNowCardHeader, obj13);
        const obj14 = { activity: null, stream: null };
        obj14[0] = activity;
        obj14[1] = stream;
        items6[2] = tmp23(tmp4(tmp3[25]).HappeningNowActivityCardSubtitle, obj14);
        obj11[1] = items6;
        items5[1] = callback(stream, obj11);
        obj8[0] = items5;
      }
      obj1[4] = callback(closure_13, obj8);
      tmp23Result = tmp23(tmp2Result, obj1);
    }
    return tmp23Result;
  }
  const tmp4Result = userId(index[13]);
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx");

export default memoResult;