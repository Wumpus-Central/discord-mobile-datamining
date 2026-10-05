// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants2 from "../../../../../../discord_common/js/shared/Constants.tsx";
import intl5 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import ApplicationAssetUtils from "../../../../../utils/ApplicationAssetUtils.tsx";
import VideoBackground from "../../../../calls/native/VideoBackground.tsx";
import StreamPreviewDefault from "../../../../../components_native/StreamPreview.tsx";
import useFetchStreamPreviewDefault from "../../../../go_live/useFetchStreamPreview.tsx";
import isListeningOnSpotifyDefault from "../../../../activities/utils/isListeningOnSpotify.tsx";
import isOnXboxDefault from "../../../../activities/utils/isOnXbox.tsx";
import useLiveStageData from "useLiveStageData.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/15999_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../_runtime/16000_AssetRegistry.js";
import HappeningNowAvatarStack2 from "HappeningNowAvatarStack.tsx";
import AssetRegistryDefault3 from "../../../../../../_runtime/16009_AssetRegistry.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import StageInstanceStore from "../../../../stage_channels/StageInstanceStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import HappeningNowConstants from "HappeningNowConstants.tsx";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let HAPPENING_NOW_CONTENT_HEIGHT;
let HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
let PixelRatio;
let c10;
let c9;
let closure_12;
let closure_4;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let unpackModuleId;
function getActivityA11yLabel(activity) {
  let stringResult;
  if (isListeningOnSpotifyDefault(activity)) {
    const intl4 = intl5.intl;
    stringResult = intl4.string(intl5.t.rmnkz4);
  } else {
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === constants2.LISTENING) {
      const intl3 = intl5.intl;
      stringResult = intl3.string(intl5.t.kUEnxN);
    } else if (isOnXboxDefault(activity)) {
      const intl2 = intl5.intl;
      stringResult = intl2.string(intl5.t.T0uYK9);
    } else {
      let type1;
      if (activity != null) {
        type1 = activity.type;
      }
      if (type1 !== tmp5.CUSTOM_STATUS) {
        const intl = intl5.intl;
        stringResult = intl.string(intl5.t["2TbM/G"]);
      }
    }
  }
  return stringResult;
}
({ PixelRatio, View: closure_4 } = react_native);
({
  HAPPENING_NOW_CONTENT_HEIGHT,
  HappeningNowCardTrackingType: metroImportDefault,
  STATUS_CUTOUT_SMALL: metroImportAll,
  HAPPENING_NOW_STAGE_PREVIEW_HEIGHT,
} = HappeningNowConstants);
({ ActivityTypes: c9, AnalyticEvents: c10 } = Constants);
const Fonts = Constants2.Fonts;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(HAPPENING_NOW_CONTENT_HEIGHT);
let items = [AssetRegistryDefault, AssetRegistryDefault2];
let c16 = 0.32;
let createStyles = createStyles_mod;
let obj = {
  content: { flexShrink: 1, gap: 2 },
  avatarStackContainer: obj2,
  cardAvatar: { marginBottom: 2 },
  cardImage: {
    height: HAPPENING_NOW_CONTENT_HEIGHT,
    minWidth: HAPPENING_NOW_CONTENT_HEIGHT,
    marginRight: 12,
    position: "relative",
  },
  cardImageStream: {
    height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT,
    minWidth: HAPPENING_NOW_CONTENT_HEIGHT,
    position: "relative",
  },
  cardImageAsset: obj3,
  cardImageAssetContainer: obj4,
  cardImageAssetBackground: size,
  cardImageStreamPreview: obj5,
  cardImageStreamLive: { top: 4, left: 4, position: "absolute" },
  stageStreamLiveText: { fontSize: 10, lineHeight: 13, fontFamily: Fonts.PRIMARY_BOLD },
  stagePreviewWrapper: { marginRight: 12, flexDirection: "column", height: "100%" },
};
obj2 = {
  backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG,
  padding: 2,
  borderRadius: nativeDefault.radii.xl,
  position: "absolute",
  alignSelf: "center",
  bottom: 0,
};
createStyles = createStyles.createStyles;
obj3 = { flex: 1, width: "100%", borderRadius: nativeDefault.radii.sm - 1 };
obj4 = {
  height: "100%",
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG,
  borderRadius: nativeDefault.radii.sm,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 5,
  shadowOpacity: 0.32,
};
size = {
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_17 = createStyles(obj);
const memoResult = react.memo((userId) => {
  let GameControllerIcon;
  let fullwidth;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj13;
  let obj7;
  let panelVariant;
  let renderingContext;
  let status;
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
  let obj = userId(index[13]);
  items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let application_id;
  const useGetOrFetchApplication = userId(index[14]).useGetOrFetchApplication;
  userId(index[14]);
  if (activity != null) {
    application_id = activity.application_id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(application_id);
  const items1 = [analyticsLocations];
  const tmp4Result = userId(index[13]);
  const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => {
    let channelId;
    const getStageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel;
    if (stream != null) {
      channelId = stream.channelId;
    }
    return getStageInstanceByChannel(channelId);
  });
  if (guildId(index[26])(activity)) {
    GameControllerIcon = tmp4(tmp3[27]).SpotifyNeutralIcon;
  } else {
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === constants2.LISTENING) {
      GameControllerIcon = tmp4(tmp3[28]).MusicIcon;
    } else if (guildId(index[29])(activity)) {
      GameControllerIcon = tmp4(tmp3[30]).XboxNeutralIcon;
    } else {
      let type1;
      if (activity != null) {
        type1 = activity.type;
      }
      if (type1 !== tmp11.CUSTOM_STATUS) {
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
    let STATUS_CARD;
    let channelId;
    let localUser;
    let sourceAnalyticsLocations;
    if (null != stream) {
      STATUS_CARD = metroImportDefault.STREAM_CARD;
    } else {
      if (null != activity) {
        if (activity.type !== constants.CUSTOM_STATUS) {
          STATUS_CARD = metroImportDefault.ACTIVITY_CARD;
        }
      }
      STATUS_CARD = metroImportDefault.STATUS_CARD;
    }
    let obj = {
      type: STATUS_CARD,
      order: index,
      guild_id: guildId,
      highlighted_user_ids: items,
      destination_channel_id: channelId,
    };
    items = [userId];
    channelId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const ACTIVITY_CARD_CLICKED = constants2.ACTIVITY_CARD_CLICKED;
    AnalyticsUtilsDefault;
    if (stream != null) {
      channelId = stream.channelId;
    }
    track(ACTIVITY_CARD_CLICKED, obj);
    if (null != stream) {
      const promise2 = asyncRequire(12695, dependencyMap.paths);
      promise2.then((result) => result.default(channelId.channelId, true));
    } else {
      const promise = asyncRequire(7850, dependencyMap.paths);
      promise.then((result) => {
        const obj = { userId, localUser, sourceAnalyticsLocations };
        return result.default(obj);
      });
    }
  }, items2);
  if (null == stateFromStores) {
    const obj2 = { panelVariant };
    return closure_11(userId(index[19]).HappeningNowCardPlaceholder, obj2);
  } else {
    let tmp24Result2;
    let str2 = "full";
    if (!fullwidth) {
      let str = "medium";
      if (null != stream) {
        str = "large";
      }
      str2 = str;
    }
    const tmp2Result = guildId(index[20]);
    const name = tmp2Result.getName(guildId, null, stateFromStores);
    let type2;
    if (activity != null) {
      type2 = activity.type;
    }
    if (type2 === constants2.CUSTOM_STATUS) {
      const obj3 = {
        fullwidth,
        user: stateFromStores,
        guildId,
        activity,
        userTitle: name,
        onPress: callback,
        panelVariant,
      };
      tmp24Result2 = closure_11(tmp4(tmp3[21]).CustomStatusActivityCard, obj3);
    } else {
      const obj4 = {
        onPress: callback,
        width: str2,
        IconComponent: GameControllerIcon,
        panelVariant,
        children: closure_12(closure_13, obj11),
      };
      const tmp2Result2 = guildId(index[22]);
      if (null != stateFromStores1) {
        const obj5 = { style: tmp.stagePreviewWrapper, children: items3 };
        const obj6 = { style: tmp.cardImageStream, children: closure_11(closure_19, obj7) };
        obj7 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        items3 = [closure_11(stream, obj6)];
        let tmp24Result = null;
        const tmp17 = stream;
        if (null != stateFromStores1) {
          const obj8 = { user: stateFromStores, stage: stateFromStores1 };
          tmp24Result = closure_11(closure_20, obj8);
        }
        const obj9 = { children: items4 };
        items3[1] = tmp24Result;
        items4 = [closure_12(tmp17, obj5)];
        const obj10 = { stage: stateFromStores1, renderingContext, guildId, streamingUser: stateFromStores };
        items4[1] = closure_11(userId(index[23]).HappeningNowLiveStageContent, obj10);
        obj11 = obj9;
      } else {
        obj11 = { children: items5 };
        const obj12 = { style: tmp.cardImage, children: closure_11(closure_19, obj13) };
        obj13 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        items5 = [closure_11(stream, obj12)];
        const obj14 = { style: tmp.content, children: items6 };
        const obj15 = {
          user: stateFromStores,
          avatarDecoration: stateFromStores.avatarDecoration,
          size: userId(index[24]).AvatarSizes.XSMALL,
          guildId,
          status,
          style: tmp.cardAvatar,
          autoStatusCutout,
        };
        const Avatar = tmp4(tmp3[24]).Avatar;
        items6 = [closure_11(Avatar, obj15), ,];
        const obj16 = { noMargin: true, children: name };
        items6[1] = closure_11(userId(index[22]).HappeningNowCardHeader, obj16);
        const obj17 = { activity, stream };
        items6[2] = closure_11(userId(index[25]).HappeningNowActivityCardSubtitle, obj17);
        items5[1] = closure_12(stream, obj14);
      }
      tmp24Result2 = closure_11(tmp2Result2, obj4);
    }
    return tmp24Result2;
  }
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accentColor;
      let activity;
      let b;
      let g;
      let game;
      let r;
      let source;
      let stream;
      let tmpResult4;
      let userId;
      const obj = react2;
      const cResult = obj.c(43);
      ({ userId, activity, stream, game } = arg0);
      const tmp4 = closure_17();
      if (cResult[0] === activity) {
        if (cResult[1] === game) {
          if (cResult[2] === stream) {
            let tmp5;
            if (cResult[3] === userId) {
              tmp5 = cResult[4];
            }
            ({ source, accentColor } = closure_21(tmp5));
            ({ r, g, b } = accentColor);
            closure_21(tmp5);
            if (cResult[5] === b) {
              if (cResult[6] === g) {
                let tmp8;
                let tmp9;
                let tmp12;
                if (cResult[7] === r) {
                  tmp8 = cResult[8];
                  tmp9 = cResult[9];
                }
                if (cResult[10] !== tmp8) {
                  let obj4;
                  const tmpResult = PlatformUtils;
                  if (tmpResult.isAndroid()) {
                    const obj2 = { boxShadow: items };
                    const obj3 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: tmpResult4.hexWithOpacity(tmp8, c16) };
                    items = [obj3];
                    obj4 = obj2;
                    tmpResult4 = ColorUtils;
                  } else {
                    obj4 = { shadowColor: tmp8 };
                  }
                  cResult[10] = tmp8;
                  cResult[11] = obj4;
                  tmp12 = obj4;
                } else {
                  tmp12 = cResult[11];
                }
                if (cResult[12] === tmp4.cardImageAssetContainer) {
                  let tmp14;
                  let tmp15;
                  if (cResult[13] === tmp12) {
                    tmp14 = cResult[14];
                  }
                  if (cResult[15] !== tmp9) {
                    const obj5 = { backgroundColor: tmp9 };
                    cResult[15] = tmp9;
                    cResult[16] = obj5;
                    tmp15 = obj5;
                  } else {
                    tmp15 = cResult[16];
                  }
                  if (cResult[17] === tmp4.cardImageAssetBackground) {
                    let tmp16;
                    if (cResult[18] === tmp15) {
                      tmp16 = cResult[19];
                    }
                    if (null != stream) {
                      if (cResult[20] === tmp4.cardImageStreamLive) {
                        let tmp33;
                        let tmp37;
                        if (cResult[21] === tmp4.stageStreamLiveText) {
                          tmp33 = cResult[22];
                        }
                        const _Symbol = Symbol;
                        const cardImageStreamPreview = tmp4.cardImageStreamPreview;
                        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = intl5.intl;
                          const stringResult = intl.string(intl5.t["7Xq/nV"]);
                          cResult[23] = stringResult;
                          tmp37 = stringResult;
                        } else {
                          tmp37 = cResult[23];
                        }
                        if (cResult[24] === stream) {
                          if (cResult[25] === tmp4.cardImageStreamPreview) {
                            let tmp39;
                            if (cResult[26] === tmp33) {
                              tmp39 = cResult[27];
                            }
                            if (cResult[28] === tmp14) {
                              let tmp43;
                              if (cResult[29] === tmp39) {
                                tmp43 = cResult[30];
                              }
                              return tmp43;
                            }
                            const obj6 = { style: tmp14, children: tmp39 };
                            const tmp46 = unpackModuleId(React3, obj6);
                            cResult[28] = tmp14;
                            cResult[29] = tmp39;
                            cResult[30] = tmp46;
                            tmp43 = tmp46;
                          }
                        }
                        const obj7 = {
                          stream,
                          children: tmp33,
                          style: cardImageStreamPreview,
                          ctaText: tmp37,
                          disabled: true,
                        };
                        const tmp42 = unpackModuleId(StreamPreviewDefault, obj7);
                        cResult[24] = stream;
                        cResult[25] = tmp4.cardImageStreamPreview;
                        cResult[26] = tmp33;
                        cResult[27] = tmp42;
                        tmp39 = tmp42;
                      }
                      const obj8 = { style: null, textStyle: null, allowFontScaling: false };
                      ({ cardImageStreamLive: obj14.style, stageStreamLiveText: obj14.textStyle } = tmp4);
                      const tmp35 = unpackModuleId(native.LiveTag, obj8);
                      cResult[20] = tmp4.cardImageStreamLive;
                      cResult[21] = tmp4.stageStreamLiveText;
                      cResult[22] = tmp35;
                      tmp33 = tmp35;
                    } else {
                      let tmp18;
                      if (cResult[31] !== activity) {
                        const tmp20 = getActivityA11yLabel(activity);
                        cResult[31] = activity;
                        cResult[32] = tmp20;
                        tmp18 = tmp20;
                      } else {
                        tmp18 = cResult[32];
                      }
                      if (cResult[33] === tmp4.cardImageAsset) {
                        let tmp21;
                        if (cResult[34] === source) {
                          tmp21 = cResult[35];
                        }
                        if (cResult[36] === tmp16) {
                          let tmp25;
                          if (cResult[37] === tmp21) {
                            tmp25 = cResult[38];
                          }
                          if (cResult[39] === tmp18) {
                            if (cResult[40] === tmp14) {
                              let tmp29;
                              if (cResult[41] === tmp25) {
                                tmp29 = cResult[42];
                              }
                              return tmp29;
                            }
                          }
                          const obj9 = { style: tmp14, accessibilityLabel: tmp18, children: tmp25 };
                          const tmp32 = unpackModuleId(React3, obj9);
                          cResult[39] = tmp18;
                          cResult[40] = tmp14;
                          cResult[41] = tmp25;
                          cResult[42] = tmp32;
                          tmp29 = tmp32;
                        }
                        const obj10 = { style: tmp16, children: tmp21 };
                        const tmp28 = unpackModuleId(React3, obj10);
                        cResult[36] = tmp16;
                        cResult[37] = tmp21;
                        cResult[38] = tmp28;
                        tmp25 = tmp28;
                      }
                      const obj11 = { style: tmp4.cardImageAsset, source };
                      const tmp24 = unpackModuleId(FastImageDefault, obj11);
                      cResult[33] = tmp4.cardImageAsset;
                      cResult[34] = source;
                      cResult[35] = tmp24;
                      tmp21 = tmp24;
                    }
                  }
                  const items1 = [tmp4.cardImageAssetBackground, tmp15];
                  cResult[17] = tmp4.cardImageAssetBackground;
                  cResult[18] = tmp15;
                  cResult[19] = items1;
                  tmp16 = items1;
                }
                const items2 = [tmp4.cardImageAssetContainer, tmp12];
                cResult[12] = tmp4.cardImageAssetContainer;
                cResult[13] = tmp12;
                cResult[14] = items2;
                tmp14 = items2;
              }
            }
            const tmpResult5 = ColorUtils;
            const rgbToHexResult = tmpResult5.rgbToHex(r, g, b);
            const tmpResult6 = ColorUtils;
            const hexWithOpacityResult = tmpResult6.hexWithOpacity(rgbToHexResult, 0.2);
            cResult[5] = b;
            cResult[6] = g;
            cResult[7] = r;
            cResult[8] = rgbToHexResult;
            cResult[9] = hexWithOpacityResult;
            tmp9 = hexWithOpacityResult;
            tmp8 = rgbToHexResult;
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
    }
  : (arg0) => {
      let accentColor;
      let activity;
      let b;
      let backgroundColor;
      let closure_0;
      let g;
      let game;
      let intl;
      let obj14;
      let obj4;
      let obj6;
      let obj8;
      let r;
      let shadowColor;
      let source;
      let stream;
      let tmp12;
      let tmp17;
      let userId;
      ({ activity, stream } = arg0);
      ({ userId, game } = arg0);
      const tmp = closure_17();
      _require = tmp;
      ({ source, accentColor } = closure_21({ userId, activity, game, stream }));
      ({ r, g, b } = accentColor);
      closure_21({ userId, activity, game, stream });
      let obj = require("ColorUtils");
      const rgbToHexResult = obj.rgbToHex(r, g, b);
      importDefault = rgbToHexResult;
      let obj2 = require("ColorUtils");
      const hexWithOpacityResult = obj2.hexWithOpacity(rgbToHexResult, 0.2);
      dependencyMap = hexWithOpacityResult;
      items = [rgbToHexResult, tmp.cardImageAssetContainer];
      const memo = react.useMemo(() => {
        let items1;
        let obj4;
        let tmpResult;
        items = [closure_0.cardImageAssetContainer];
        const obj = PlatformUtils;
        if (obj.isAndroid()) {
          const obj2 = { boxShadow: items1 };
          const obj3 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: tmpResult.hexWithOpacity(shadowColor, c16) };
          items1 = [obj3];
          obj4 = obj2;
          tmpResult = ColorUtils;
        } else {
          obj4 = { shadowColor };
        }
        items[1] = obj4;
        return items;
      }, items);
      let items1 = [hexWithOpacityResult, tmp.cardImageAssetBackground];
      if (null != stream) {
        let obj3 = { style: memo, children: closure_11(tmp12, obj4) };
        obj4 = {
          stream,
          children: closure_11(require("native").LiveTag, obj6),
          style: tmp.cardImageStreamPreview,
          ctaText: intl.string(require("intl").t["7Xq/nV"]),
          disabled: true,
        };
        obj6 = { style: null, textStyle: null, allowFontScaling: false };
        ({ cardImageStreamLive: obj5.style, stageStreamLiveText: obj5.textStyle } = tmp);
        tmp12 = StreamPreviewDefault;
        intl = tmp3(1126).intl;
        return closure_11(closure_4, obj3);
      } else {
        const obj7 = {
          style: memo,
          accessibilityLabel: getActivityA11yLabel(activity),
          children: closure_11(closure_4, obj8),
        };
        obj8 = { style: tmp8, children: closure_11(tmp17, obj14) };
        obj14 = { style: tmp.cardImageAsset, source };
        tmp17 = FastImageDefault;
        return closure_11(closure_4, obj7);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let stage;
      let user;
      const obj = react2;
      const cResult = obj.c(10);
      ({ user, stage } = arg0);
      const tmp4 = closure_17();
      const obj2 = useLiveStageData;
      const liveStageData = obj2.useLiveStageData(stage);
      const audienceFriends = liveStageData.audienceFriends;
      if (cResult[0] === audienceFriends) {
        let tmp7;
        if (cResult[1] === user) {
          tmp7 = cResult[2];
        }
        const sum = tmp6 + 1;
        if (cResult[3] === stage.guild_id) {
          if (cResult[4] === tmp7) {
            let tmp9;
            if (cResult[5] === sum) {
              tmp9 = cResult[6];
            }
            if (cResult[7] === tmp4.avatarStackContainer) {
              let tmp12;
              if (cResult[8] === tmp9) {
                tmp12 = cResult[9];
              }
              return tmp12;
            }
            const obj3 = { style: tmp4.avatarStackContainer, children: tmp9 };
            const tmp15 = unpackModuleId(React3, obj3);
            cResult[7] = tmp4.avatarStackContainer;
            cResult[8] = tmp9;
            cResult[9] = tmp15;
            tmp12 = tmp15;
          }
        }
        const obj4 = {
          users: tmp7,
          guildId: stage.guild_id,
          userCount: sum,
          isStage: true,
          avatarSize: native.AvatarSizes.SIZE_16,
        };
        const HappeningNowAvatarStack = HappeningNowAvatarStack2.HappeningNowAvatarStack;
        const tmp11 = unpackModuleId(HappeningNowAvatarStack, obj4);
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
    }
  : (stage) => {
      let HappeningNowAvatarStack;
      let audienceCount;
      let audienceFriends;
      let obj3;
      stage = stage.stage;
      const user = stage.user;
      const tmp2 = closure_17();
      const obj = useLiveStageData;
      const liveStageData = obj.useLiveStageData(stage);
      ({ audienceCount, audienceFriends } = liveStageData);
      const obj2 = { style: tmp2.avatarStackContainer, children: unpackModuleId(HappeningNowAvatarStack, obj3) };
      obj3 = {
        users: items,
        guildId: stage.guild_id,
        userCount: audienceCount + 1,
        isStage: true,
        avatarSize: native.AvatarSizes.SIZE_16,
      };
      items = [user];
      HappeningNowAvatarStack = HappeningNowAvatarStack2.HappeningNowAvatarStack;
      HermesBuiltin.arraySpread(items, audienceFriends, 1);
      return unpackModuleId(React3, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activity;
      let game;
      let stream;
      let tmp34;
      let userId;
      const obj = react2;
      const cResult = obj.c(16);
      ({ userId, activity, game, stream } = arg0);
      let guildId;
      const tmp5 = useFetchStreamPreviewDefault;
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
      const previewUrl = tmp5(guildId, channelId, ownerId).previewUrl;
      let tmp9;
      if (null != previewUrl) {
        tmp9 = previewUrl;
      }
      let tmp10 = tmp9;
      if (null == tmp9) {
        let large_image;
        if (activity != null) {
          const assets = activity.assets;
          if (assets != null) {
            large_image = assets.large_image;
          }
        }
        tmp10 = tmp9;
        if (null != large_image) {
          let application_id;
          if (activity != null) {
            application_id = activity.application_id;
          }
          let large_image1;
          if (activity != null) {
            large_image1 = activity.assets.large_image;
          }
          if (cResult[0] === application_id) {
            let tmp14;
            if (cResult[1] === large_image1) {
              tmp14 = cResult[2];
            }
            tmp10 = tmp14;
          }
          items = [closure_14, closure_14];
          const tmpResult = ApplicationAssetUtils;
          const assetImage = tmpResult.getAssetImage(application_id, large_image1, items);
          cResult[0] = application_id;
          cResult[1] = large_image1;
          cResult[2] = assetImage;
          tmp14 = assetImage;
        }
      }
      if (null == tmp10) {
        let tmp17;
        if (cResult[3] !== game) {
          let iconURL;
          if (game != null) {
            iconURL = game.getIconURL(closure_14);
          }
          cResult[3] = game;
          cResult[4] = iconURL;
          tmp17 = iconURL;
        } else {
          tmp17 = cResult[4];
        }
        tmp10 = tmp17;
      }
      let tmp20 = tmp10;
      if (null == tmp10) {
        let small_image;
        if (activity != null) {
          const assets2 = activity.assets;
          if (assets2 != null) {
            small_image = assets2.small_image;
          }
        }
        tmp20 = tmp10;
        if (null != small_image) {
          let application_id1;
          if (activity != null) {
            application_id1 = activity.application_id;
          }
          let small_image1;
          if (activity != null) {
            small_image1 = activity.assets.small_image;
          }
          if (cResult[5] === application_id1) {
            let tmp24;
            if (cResult[6] === small_image1) {
              tmp24 = cResult[7];
            }
            tmp20 = tmp24;
          }
          const items1 = [closure_14, closure_14];
          const tmpResult4 = ApplicationAssetUtils;
          const assetImage1 = tmpResult4.getAssetImage(application_id1, small_image1, items1);
          cResult[5] = application_id1;
          cResult[6] = small_image1;
          cResult[7] = assetImage1;
          tmp24 = assetImage1;
        }
      }
      if (null == tmp20) {
        let tmp4Result;
        let type;
        const tmp38 = cResult[8];
        if (activity != null) {
          type = activity.type;
        }
        if (tmp38 === type) {
          let tmp28;
          if (cResult[9] === userId) {
            tmp28 = cResult[10];
          }
          tmp20 = tmp28;
        }
        let type1;
        if (activity != null) {
          type1 = activity.type;
        }
        if (type1 === constants2.PLAYING) {
          const substr = userId.slice(-1);
          tmp4Result = items[substr.charCodeAt(substr, 0) % items.length];
        } else {
          tmp4Result = AssetRegistryDefault3;
        }
        let type2;
        if (activity != null) {
          type2 = activity.type;
        }
        cResult[8] = type2;
        cResult[9] = userId;
        cResult[10] = tmp4Result;
        tmp28 = tmp4Result;
      }
      if (cResult[11] !== tmp20) {
        const tmpResult5 = VideoBackground;
        const memoizedImageSourceResult = tmpResult5.memoizedImageSource(tmp20);
        cResult[11] = tmp20;
        cResult[12] = memoizedImageSourceResult;
        tmp34 = memoizedImageSourceResult;
      } else {
        tmp34 = cResult[12];
      }
      const tmpResult6 = VideoBackground;
      const dominantRGBFromImage = tmpResult6.useDominantRGBFromImage(tmp20, tmp34);
      if (cResult[13] === dominantRGBFromImage) {
        let tmp37;
        if (cResult[14] === tmp34) {
          tmp37 = cResult[15];
        }
        return tmp37;
      }
      const obj2 = { source: tmp34, accentColor: dominantRGBFromImage };
      cResult[13] = dominantRGBFromImage;
      cResult[14] = tmp34;
      cResult[15] = obj2;
      tmp37 = obj2;
    }
  : (arg0) => {
      let activity;
      let game;
      let obj4;
      let stream;
      let userId;
      ({ userId, activity, game, stream } = arg0);
      let guildId;
      const tmp3 = useFetchStreamPreviewDefault;
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
      const previewUrl = tmp3(guildId, channelId, ownerId).previewUrl;
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
        const getAssetImage = ApplicationAssetUtils.getAssetImage;
        ApplicationAssetUtils;
        if (activity != null) {
          application_id = activity.application_id;
        }
        let large_image1;
        if (activity != null) {
          large_image1 = activity.assets.large_image;
        }
        items = [closure_14, closure_14];
        assetImage = getAssetImage(application_id, large_image1, items);
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
        let application_id1;
        const getAssetImage2 = ApplicationAssetUtils.getAssetImage;
        ApplicationAssetUtils;
        if (activity != null) {
          application_id1 = activity.application_id;
        }
        let small_image1;
        if (activity != null) {
          small_image1 = activity.assets.small_image;
        }
        const items1 = [closure_14, closure_14];
        assetImage = getAssetImage2(application_id1, small_image1, items1);
      }
      if (null == assetImage) {
        let tmpResult;
        let type;
        if (activity != null) {
          type = activity.type;
        }
        if (type === constants2.PLAYING) {
          const substr = userId.slice(-1);
          tmpResult = items[substr.charCodeAt(substr, 0) % items.length];
        } else {
          tmpResult = AssetRegistryDefault3;
        }
        assetImage = tmpResult;
      }
      const obj2 = VideoBackground;
      const memoizedImageSourceResult = obj2.memoizedImageSource(assetImage);
      const obj = {
        source: memoizedImageSourceResult,
        accentColor: obj4.useDominantRGBFromImage(assetImage, memoizedImageSourceResult),
      };
      obj4 = VideoBackground;
      return obj;
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx",
);

export default memoResult;
