// discord_app/design/void/Avatar/native/Avatar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import avatar_decorations_AvatarDecorationUtils from "../../../../modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx";
import ClipView from "../../../components/Icon/native/ClipView.tsx";
import CutoutableAvatarImage from "../../CutoutableAvatarImage/native/CutoutableAvatarImage.tsx";
import Status_StatusUtils from "../../Status/native/StatusUtils.tsx";
import getStatusContainerStyleDefault from "../../Status/native/getStatusContainerStyle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function getStatusSize(arg0) {
  if (CutoutableAvatarImage.AvatarSizes.XXSMALL !== arg0) {
    if (CutoutableAvatarImage.AvatarSizes.XSMALL !== arg0) {
      if (CutoutableAvatarImage.AvatarSizes.XSMALL_20 !== arg0) {
        if (CutoutableAvatarImage.AvatarSizes.SMALL !== arg0) {
          if (CutoutableAvatarImage.AvatarSizes.REFRESH_MEDIUM_32 === arg0) {
            return React5.REFRESH_MEDIUM_10;
          } else {
            if (CutoutableAvatarImage.AvatarSizes.NORMAL !== arg0) {
              if (CutoutableAvatarImage.AvatarSizes.TABS_22 !== arg0) {
                if (CutoutableAvatarImage.AvatarSizes.LARGE !== arg0) {
                  if (CutoutableAvatarImage.AvatarSizes.LARGE_48 !== arg0) {
                    if (CutoutableAvatarImage.AvatarSizes.XLARGE !== arg0) {
                      if (CutoutableAvatarImage.AvatarSizes.XLARGE_72 !== arg0) {
                        if (CutoutableAvatarImage.AvatarSizes.XXLARGE !== arg0) {
                          if (CutoutableAvatarImage.AvatarSizes.PROFILE !== arg0) {
                            if (CutoutableAvatarImage.AvatarSizes.YOUBAR_60 !== arg0) {
                              return null;
                            }
                          }
                        }
                      }
                    }
                    return React5.LARGE;
                  }
                }
              }
            }
            return React5.MEDIUM;
          }
        }
      }
    }
  }
  return React5.SMALL;
}
const View = fn(17).View;
const StatusTypes = fn(1074).StatusTypes;
const StatusConstants = fn(1179);
({ STATUS_PADDING: metroRequire, StatusSizes: closure_7 } = StatusConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles((NORMAL) => {
  const obj = {
    status: { position: "absolute", right: -3, bottom: -3 },
    speaking: null,
    stageSpeaking: null,
    voiceStatus: null,
    decoration: null,
    container: null,
  };
  const rect = {
    position: "absolute",
    right: -2,
    bottom: -2,
    backgroundColor: "transparent",
    borderWidth: 4,
    borderColor: nativeDefault.colors.STATUS_SPEAKING,
  };
  obj.speaking = rect;
  obj.stageSpeaking = { position: "absolute", right: -2, bottom: -2 };
  const size = {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
    borderRadius: nativeDefault.radii.md,
    right: 0,
    bottom: 0,
  };
  obj.voiceStatus = size;
  const rect1 = { position: "absolute", top: null, left: null };
  const decorationSizeForAvatarSize = avatar_decorations_AvatarDecorationUtils.getDecorationSizeForAvatarSize(NORMAL);
  rect1.top = -(decorationSizeForAvatarSize - CutoutableAvatarImage.styles[NORMAL].width) / 2;
  const decorationSizeForAvatarSize1 = avatar_decorations_AvatarDecorationUtils.getDecorationSizeForAvatarSize(NORMAL);
  rect1.left = -(decorationSizeForAvatarSize1 - CutoutableAvatarImage.styles[NORMAL].width) / 2;
  obj.decoration = rect1;
  obj.container = { position: "relative" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("design/void/Avatar/native/Avatar.tsx");

export default noop.memo((isMobileOnline) => {
  ({ channel, streaming } = isMobileOnline);
  if (streaming === undefined) {
    streaming = false;
  }
  let flag = isMobileOnline.isMobileOnline;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isMobileOnline.isVROnline;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const status = isMobileOnline.status;
  let NORMAL = isMobileOnline.size;
  if (NORMAL === undefined) {
    NORMAL = flag(status[7]).AvatarSizes.NORMAL;
  }
  let flag3 = isMobileOnline.animate;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = isMobileOnline.speaking;
  if (flag4 === undefined) {
    flag4 = false;
  }
  ({ avatarDecoration, cutout } = isMobileOnline);
  const autoStatusCutout = isMobileOnline.autoStatusCutout;
  ({ isStageCall, mute, deaf, statusStyle, avatarStyle, style } = isMobileOnline);
  if (isStageCall === undefined) {
    isStageCall = false;
  }
  ({ source, user, needsOffscreenAlphaCompositing, guildId, disablePlaceholder } = isMobileOnline);
  if (needsOffscreenAlphaCompositing === undefined) {
    needsOffscreenAlphaCompositing = false;
  }
  ({ typing, accessible, accessibilityLabel } = isMobileOnline);
  if (typing === undefined) {
    typing = false;
  }
  let statusSizeOverride = isMobileOnline.statusSizeOverride;
  const tmp3 = closure_10(NORMAL);
  const decoration = tmp3;
  let items = [cutout, autoStatusCutout, flag, flag2, NORMAL, status, typing, statusSizeOverride, tmp3];
  const memo = NORMAL.useMemo(() => {
    if (null != autoStatusCutout) {
      let diff1 = status;
      let items = statusSizeOverride;
      if (null != diff1) {
        if (diff1 !== StatusTypes.UNKNOWN) {
          diff1 = CutoutableAvatarImage.AVATAR_SIZE_MAP[NORMAL];
          if (items == null) {
            items = getStatusSize(NORMAL);
          }
          if (items == null) {
            items = 0;
          }
          let result = items / 4;
          if (tmp5) {
            const statusTypingDimensions = Status_StatusUtils.getStatusTypingDimensions(items);
            ({ width: width3, height: height3 } = statusTypingDimensions);
            const sum = height3 + 2 * timestampProducer;
            let obj = { nativeCutouts: null };
            const size = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
            size.shape = ClipView.CutoutShape.RoundedRect;
            const diff = diff1 - width3 - timestampProducer;
            const tmp29Result = getStatusContainerStyleDefault(items, flag, flag2);
            size.x = diff + Status_StatusUtils.getAnimatedTypingTranslateX(tmp29Result.width);
            diff1 = diff1 - height3;
            size.y = diff1 - timestampProducer;
            size.width = width3 + 2 * timestampProducer;
            size.height = sum;
            result = sum / 2;
            size.cornerRadius = result;
            items = [size];
            obj.nativeCutouts = items;
          } else {
            if (flag2) {
              const vRStatusContainerRect = Status_StatusUtils.getVRStatusContainerRect(items);
              ({ width: width2, height: height2 } = vRStatusContainerRect);
              obj = { nativeCutouts: null };
              const size1 = {
                shape: ClipView.CutoutShape.RoundedRect,
                x: diff1 - width2 + result,
                y: null,
                width: null,
                height: null,
                cornerRadius: null,
              };
              result = diff1 - height2 + result;
              size1.y = result;
              size1.width = width2;
              size1.height = height2;
              size1.cornerRadius = vRStatusContainerRect.cornerRadius;
              const items1 = [size1];
              obj.nativeCutouts = items1;
            } else if (!flag) {
              const sum1 = items / 2 + tmp4;
              const diff2 = diff1 - sum1 - 2 * result;
              obj = { nativeCutouts: null };
              const point = { shape: ClipView.CutoutShape.Circle, x: diff2, y: diff2, size: 2 * sum1 };
              const items2 = [point];
              obj.nativeCutouts = items2;
            }
            let obj2 = Status_StatusUtils;
            const mobileStatusContainerRect = obj2.getMobileStatusContainerRect(items);
            ({ width, height } = mobileStatusContainerRect);
            const obj1 = { nativeCutouts: null };
            const size2 = {
              shape: ClipView.CutoutShape.RoundedRect,
              x: diff1 - width + result,
              y: diff1 - height + result,
              width,
              height,
              cornerRadius: mobileStatusContainerRect.cornerRadius,
            };
            const items3 = [size2];
            obj1.nativeCutouts = items3;
          }
        }
      }
    } else {
      obj2 = {
        cutout,
        decorationCutout: avatar_decorations_AvatarDecorationUtils.getDecorationCutoutForAvatarCutout(
          cutout,
          -decoration.decoration.top,
        ),
      };
      return obj2;
    }
  }, items);
  let merged = {
    style: null,
    needsOffscreenAlphaCompositing: null,
    accessible: null,
    accessibilityLabel: null,
    children: null,
  };
  let StatusWithTyping = flag;
  ({ cutout: cutout2, decorationCutout } = memo);
  let items1 = [flag(status[7]).styles[NORMAL], tmp3.container, style];
  merged.style = items1;
  merged.needsOffscreenAlphaCompositing = needsOffscreenAlphaCompositing;
  merged.accessible = accessible;
  merged.accessibilityLabel = accessibilityLabel;
  if (!flag4) {
    let items2 = [null, , , ,];
    merged = { disablePlaceholder, style: avatarStyle, cutout: cutout2 };
    if (null == source) {
      if (null == user) {
        if (null == channel) {
          items2[1] = null;
          let tmp33 = null;
          if (null != avatarDecoration) {
            let obj = { size: null, avatarDecoration: null, decorationStyle: null, animate: null, cutout: null };
            const tmp36 = flag2(tmp7[13]);
            obj.size = StatusWithTyping(tmp7[11]).getDecorationSizeForAvatarSize(NORMAL);
            obj.avatarDecoration = avatarDecoration;
            obj.decorationStyle = tmp3.decoration;
            obj.animate = flag3;
            obj.cutout = decorationCutout;
            tmp33 = decoration(tmp36, obj, avatarDecoration.asset);
            const StatusWithTypingResult = StatusWithTyping(tmp7[11]);
          }
          items2[2] = tmp33;
          let tmp37 = null;
          if (null != status) {
            tmp37 = null;
            if (status !== autoStatusCutout.UNKNOWN) {
              if (statusSizeOverride == null) {
                statusSizeOverride = getStatusSize(NORMAL);
              }
              let merged1 = null;
              if (null != statusSizeOverride) {
                let obj1 = {
                  size: statusSizeOverride,
                  isMobileOnline: flag,
                  isVROnline: flag2,
                  status,
                  streaming,
                  style: null,
                };
                let items3 = [tmp3.status, statusStyle];
                obj1.style = items3;
                merged1 = obj1;
              }
              if (null == merged1) {
                tmp37 = null;
              } else {
                if (!typing) {
                  let obj2 = {};
                  merged = Object.assign(merged1);
                  let tmp48 = decoration(flag2(tmp7[14]), obj2);
                  const tmp44 = flag2(tmp7[14]);
                }
                StatusWithTyping = StatusWithTyping(tmp7[14]).StatusWithTyping;
                const obj3 = {};
                merged1 = Object.assign(merged1);
                obj3.typing = typing;
                user = user.id;
                obj3.userId = user;
                tmp48 = decoration(StatusWithTyping, obj3);
              }
            }
          }
          items2[3] = tmp37;
          if (deaf) {
            const obj4 = { style: null, children: null };
            const items4 = [,];
            ({ status: arr8[0], voiceStatus: arr8[1] } = tmp3);
            obj4.style = items4;
            const obj5 = {
              size: flag2(tmp7[15]).Sizes.REFRESH_SMALL_16,
              source: flag2(tmp7[16]),
              color: flag2(tmp7[6]).unsafe_rawColors.WHITE,
            };
            obj4.children = decoration(flag2(tmp7[15]), obj5);
            let tmp53 = decoration(cutout, obj4);
            const tmp59 = flag2(tmp7[15]);
          } else if (mute) {
            let obj6 = { style: null, children: null };
            const items5 = [,];
            ({ status: arr7[0], voiceStatus: arr7[1] } = tmp3);
            obj6.style = items5;
            const obj7 = {
              size: flag2(tmp7[15]).Sizes.REFRESH_SMALL_16,
              source: flag2(tmp7[17]),
              color: flag2(tmp7[6]).unsafe_rawColors.WHITE,
            };
            obj6.children = decoration(flag2(tmp7[15]), obj7);
            tmp53 = decoration(cutout, obj6);
            const tmp56 = flag2(tmp7[15]);
          }
          items2[4] = tmp53;
          merged.children = items2;
          return closure_9(cutout, merged);
        }
      }
    }
    if (null != source) {
      const obj8 = { source, size: NORMAL, animate: flag3 };
      merged = Object.assign(merged);
      let tmp14 = decoration(flag2(tmp7[7]), obj8);
      let tmp29 = flag2(tmp7[7]);
    } else if (null != user) {
      let obj9 = { user, guildId, size: NORMAL, animate: flag3 };
      const merged2 = Object.assign(merged);
      tmp14 = decoration(flag2(tmp7[7]), obj9);
      const tmp23 = flag2(tmp7[7]);
    } else if (null != channel) {
      const obj10 = { channel, size: NORMAL, animate: flag3 };
      const merged3 = Object.assign(merged);
      tmp14 = decoration(flag2(tmp7[7]), obj10);
      const tmp17 = flag2(tmp7[7]);
    }
  } else {
    let sum = StatusWithTyping(tmp7[7]).AVATAR_SIZE_MAP[NORMAL] + 4;
    const obj11 = { style: null };
    if (isStageCall) {
      const items6 = [tmp3.stageSpeaking];
      let size = { width: sum, height: sum, borderRadius: sum / 2 };
      items6[1] = size;
      obj11.style = items6;
      let tmp9Result = tmp9(flag2(tmp7[12]), obj11);
    } else {
      const items7 = [tmp3.speaking];
      let size1 = { width: sum, height: sum, borderRadius: sum / 2 };
      items7[1] = size1;
      obj11.style = items7;
      tmp9Result = tmp9(cutout, obj11);
    }
  }
});
export const AvatarSizes = fn(13028).AvatarSizes;
export { getStatusSize };
