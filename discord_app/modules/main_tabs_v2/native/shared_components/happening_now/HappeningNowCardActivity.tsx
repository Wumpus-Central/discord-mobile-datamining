// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import ApplicationAssetUtils from "../../../../../utils/ApplicationAssetUtils.tsx";
import VideoBackground from "../../../../calls/native/VideoBackground.tsx";
import useFetchStreamPreviewDefault from "../../../../go_live/useFetchStreamPreview.tsx";
import useLiveStageData from "useLiveStageData.tsx";
import _modDef16074 from "../../../../../../_runtime/metro/16074__.js";
import _modDef16075 from "../../../../../../_runtime/metro/16075__.js";
import HappeningNowAvatarStack from "HappeningNowAvatarStack.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import StageInstanceStore from "../../../../stage_channels/StageInstanceStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function IconOrPreview(arg0) {
  ({ userId, activity, stream, game } = arg0);
  c1 = undefined;
  c2 = undefined;
  const tmp = closure_16();
  closure_0 = tmp;
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
    let obj = ApplicationAssetUtils;
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
    let obj1 = ApplicationAssetUtils;
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
    let obj3 = VideoBackground;
    const memoizedImageSourceResult = obj3.memoizedImageSource(assetImage);
    let obj4 = VideoBackground;
    const dominantRGBFromImage = obj4.useDominantRGBFromImage(assetImage, memoizedImageSourceResult);
    ({ r, g, b } = dominantRGBFromImage);
    const rgbToHexResult = ColorUtils.rgbToHex(r, g, b);
    c1 = rgbToHexResult;
    const hexWithOpacityResult = ColorUtils.hexWithOpacity(rgbToHexResult, 0.2);
    c2 = hexWithOpacityResult;
    const items2 = [rgbToHexResult, tmp.cardImageAssetContainer];
    const memo = noop.useMemo(() => {
      items = [closure_0.cardImageAssetContainer, { shadowColor }];
      return items;
    }, items2);
    const items3 = [hexWithOpacityResult, tmp.cardImageAssetBackground];
    if (null != stream) {
      obj = { style: memo, children: null };
      obj = { stream, children: null, style: null, ctaText: null, disabled: true };
      let tmp2Result = tmp2(10059);
      obj1 = { style: null, textStyle: null, allowFontScaling: false };
      ({ cardImageStreamLive: obj13.style, stageStreamLiveText: obj13.textStyle } = tmp);
      obj.children = closure_1_11(tmp28(1178).LiveTag, obj1);
      obj.style = tmp.cardImageStreamPreview;
      const intl5 = tmp28(1114).intl;
      obj.ctaText = intl5.string(tmp28(1114).t["7Xq/nV"]);
      obj.children = closure_1_11(tmp2Result, obj);
      return closure_1_11(React4, obj);
    } else {
      if (tmp2(10891)(activity)) {
        const intl4 = tmp28(1114).intl;
        let stringResult = intl4.string(tmp28(1114).t.rmnkz4);
      } else {
        let type;
        if (activity != null) {
          type = activity.type;
        }
        if (type === constants2.LISTENING) {
          const intl3 = tmp28(1114).intl;
          stringResult = intl3.string(tmp28(1114).t.kUEnxN);
        } else if (tmp2(13002)(activity)) {
          const intl2 = tmp28(1114).intl;
          stringResult = intl2.string(tmp28(1114).t.T0uYK9);
        } else {
          let type1;
          if (activity != null) {
            type1 = activity.type;
          }
          if (type1 !== tmp37.CUSTOM_STATUS) {
            const intl = tmp28(1114).intl;
            stringResult = intl.string(tmp28(1114).t["2TbM/G"]);
          }
        }
      }
      const obj2 = { style: memo, accessibilityLabel: stringResult, children: null };
      obj3 = { style: tmp35, children: null };
      obj4 = { style: tmp.cardImageAsset, source: memoizedImageSourceResult };
      obj3.children = closure_1_11(tmp2(5587), obj4);
      obj2.children = closure_1_11(React4, obj3);
      return closure_1_11(React4, obj2);
    }
  } else {
    let type2;
    if (activity != null) {
      type2 = activity.type;
    }
    if (type2 === constants2.PLAYING) {
      const substr = userId.slice(-1);
      userId = substr.charCodeAt(0);
      tmp2Result = items[userId % items.length];
    } else {
      tmp2Result = tmp2(16084);
    }
  }
}
function StageStreamAvatars(stage) {
  stage = stage.stage;
  let obj = useLiveStageData;
  const liveStageData = obj.useLiveStageData(stage);
  obj = { style: closure_16().avatarStackContainer, children: null };
  ({ audienceCount, audienceFriends } = liveStageData);
  obj = { users: null, guildId: null, userCount: null, isStage: true, avatarSize: null };
  items = [stage.user];
  HermesBuiltin.arraySpread(audienceFriends, 1);
  obj.users = items;
  obj.guildId = stage.guild_id;
  obj.userCount = audienceCount + 1;
  obj.avatarSize = native.AvatarSizes.SIZE_16;
  obj.children = closure_1_11(HappeningNowAvatarStack.HappeningNowAvatarStack, obj);
  return closure_1_11(React4, obj);
}
get_ActivityIndicator = fn(17);
({ PixelRatio, View: closure_4 } = get_ActivityIndicator);
const HappeningNowConstants = fn(15294);
({
  HAPPENING_NOW_CONTENT_HEIGHT,
  HappeningNowCardTrackingType: closure_7,
  STATUS_CUTOUT_SMALL: closure_8,
  HAPPENING_NOW_STAGE_PREVIEW_HEIGHT,
} = HappeningNowConstants);
const Constants = fn(1074);
({ ActivityTypes: closure_9, AnalyticEvents: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(HAPPENING_NOW_CONTENT_HEIGHT);
let items = [_modDef16074, _modDef16075];
fn(4560);
let obj = {
  content: { flexShrink: 1, gap: 2 },
  avatarStackContainer: null,
  cardAvatar: null,
  cardImage: null,
  cardImageStream: null,
  cardImageAsset: null,
  cardImageAssetContainer: null,
  cardImageAssetBackground: null,
  cardImageStreamPreview: null,
  cardImageStreamLive: null,
  stageStreamLiveText: null,
  stagePreviewWrapper: null,
};
obj = {
  backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG,
  padding: 2,
  borderRadius: nativeDefault.radii.xl,
  position: "absolute",
  alignSelf: "center",
  bottom: 0,
};
obj.avatarStackContainer = obj;
obj.cardAvatar = { marginBottom: 2 };
obj.cardImage = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  minWidth: HAPPENING_NOW_CONTENT_HEIGHT,
  marginRight: 12,
  position: "relative",
};
obj.cardImageStream = {
  height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT,
  minWidth: HAPPENING_NOW_CONTENT_HEIGHT,
  position: "relative",
};
const createStyles = { flex: 1, width: "100%", borderRadius: nativeDefault.radii.sm - 1 };
obj.cardImageAsset = createStyles;
obj.cardImageAssetContainer = {
  height: "100%",
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG,
  borderRadius: nativeDefault.radii.sm,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 5,
  shadowOpacity: 0.32,
  elevation: 10,
};
let size = {
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.cardImageAssetBackground = size;
let obj2 = {
  height: "100%",
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG,
  borderRadius: nativeDefault.radii.sm,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 5,
  shadowOpacity: 0.32,
  elevation: 10,
};
obj.cardImageStreamPreview = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.cardImageStreamLive = { top: 4, left: 4, position: "absolute" };
obj.stageStreamLiveText = { fontSize: 10, lineHeight: 13, fontFamily: fn(1085).Fonts.PRIMARY_BOLD };
obj.stagePreviewWrapper = { marginRight: 12, flexDirection: "column", height: "100%" };
let closure_16 = createStyles.createStyles(obj);
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx",
);

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
  const tmp = closure_16();
  const analyticsLocations = guildId(index[12])().analyticsLocations;
  let obj = userId(index[13]);
  items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj1 = userId(index[14]);
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
    const obj = {
      type: STATUS_CARD,
      order: index,
      guild_id: guildId,
      highlighted_user_ids: null,
      destination_channel_id: null,
    };
    items = [userId];
    obj.highlighted_user_ids = items;
    let channelId;
    if (stream != null) {
      channelId = tmp.channelId;
    }
    obj.destination_channel_id = channelId;
    obj.track(constants3.ACTIVITY_CARD_CLICKED, obj);
    if (null != stream) {
      asyncRequireImpl(9536, tmp6.paths).then((result) => result.default(channelId.channelId, true));
      const promise2 = asyncRequireImpl(9536, tmp6.paths);
    } else {
      asyncRequireImpl(8179, tmp6.paths).then((result) =>
        result.default({ userId, localUser, sourceAnalyticsLocations }),
      );
      const promise = asyncRequireImpl(8179, tmp6.paths);
    }
  }, items2);
  if (null == stateFromStores) {
    obj = { panelVariant };
    return closure_11(tmp4(tmp3[19]).HappeningNowCardPlaceholder, obj);
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
    if (type2 === constants2.CUSTOM_STATUS) {
      obj = { fullwidth, user: stateFromStores, guildId, activity, userTitle: name, onPress: callback, panelVariant };
      let tmp23Result = closure_11(tmp4(tmp3[21]).CustomStatusActivityCard, obj);
    } else {
      obj1 = { onPress: callback, width: str2, IconComponent: GameControllerIcon, panelVariant, children: null };
      tmp2Result = tmp2(tmp3[22]);
      if (null != stateFromStores1) {
        const obj2 = { style: tmp.stagePreviewWrapper, children: null };
        const obj3 = { style: tmp.cardImageStream, children: null };
        const obj4 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        obj3.children = tmp23(IconOrPreview, obj4);
        const items3 = [tmp23(stream, obj3)];
        tmp23Result = null;
        if (null != stateFromStores1) {
          const obj5 = { user: stateFromStores, stage: stateFromStores1 };
          tmp23Result = tmp23(StageStreamAvatars, obj5);
        }
        const obj6 = { children: null };
        items3[1] = tmp23Result;
        obj2.children = items3;
        const items4 = [tmp25(stream, obj2)];
        const obj7 = { stage: stateFromStores1, renderingContext, guildId, streamingUser: stateFromStores };
        items4[1] = tmp23(tmp4(tmp3[23]).HappeningNowLiveStageContent, obj7);
        obj6.children = items4;
        let obj8 = obj6;
      } else {
        obj8 = { children: null };
        const obj9 = { style: tmp.cardImage, children: null };
        const obj10 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        obj9.children = tmp23(IconOrPreview, obj10);
        const items5 = [tmp23(stream, obj9)];
        const obj11 = { style: tmp.content, children: null };
        const obj12 = {
          user: stateFromStores,
          avatarDecoration: stateFromStores.avatarDecoration,
          size: tmp4(tmp3[24]).AvatarSizes.XSMALL,
          guildId,
          status,
          style: tmp.cardAvatar,
          autoStatusCutout,
        };
        const items6 = [tmp23(tmp4(tmp3[24]).Avatar, obj12), ,];
        const obj13 = { noMargin: true, children: name };
        items6[1] = tmp23(tmp4(tmp3[22]).HappeningNowCardHeader, obj13);
        const obj14 = { activity, stream };
        items6[2] = tmp23(tmp4(tmp3[25]).HappeningNowActivityCardSubtitle, obj14);
        obj11.children = items6;
        items5[1] = tmp25(stream, obj11);
        obj8.children = items5;
      }
      obj1.children = closure_12(closure_13, obj8);
      tmp23Result = tmp23(tmp2Result, obj1);
    }
    return tmp23Result;
  }
  const tmp4Result = userId(index[13]);
});
