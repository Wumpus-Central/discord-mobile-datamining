// discord_app/design/void/Avatar/native/Avatar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4819 from "../../../../../_runtime/metro/04819__.js";
import IconDefault from "../../Icon/native/Icon.tsx";
import avatar_decorations_AvatarDecorationUtils from "../../../../modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx";
import CutoutableAvatarDecorationDefault from "../../../../modules/collectibles/native/components/CutoutableAvatarDecoration.tsx";
import ClipView from "../../../components/Icon/native/ClipView.tsx";
import _modDef9126 from "../../../../../_runtime/metro/09126__.js";
import CutoutableAvatarImage from "../../CutoutableAvatarImage/native/CutoutableAvatarImage.tsx";
import Status_StatusUtils from "../../Status/native/StatusUtils.tsx";
import getStatusContainerStyleDefault from "../../Status/native/getStatusContainerStyle.tsx";
import Status from "../../Status/native/Status.tsx";
import SpeakerPulseDefault from "../../../../modules/stage_channels/native/components/SpeakerPulse.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const CutoutableAvatarImageDefault = CutoutableAvatarImage;

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
function getAvatarStatusCutout(arg0) {
  ({ avatarSize, userStatus, isMobileOnline, isVROnline, statusSizeOverride } = arg0);
  if (null != userStatus) {
    if (userStatus !== StatusTypes.UNKNOWN) {
      const tmp6 = CutoutableAvatarImage.AVATAR_SIZE_MAP[avatarSize];
      if (statusSizeOverride == null) {
        statusSizeOverride = getStatusSize(avatarSize);
      }
      if (statusSizeOverride == null) {
        statusSizeOverride = 0;
      }
      const result = statusSizeOverride / 4;
      if (tmp2) {
        const statusTypingDimensions = Status_StatusUtils.getStatusTypingDimensions(statusSizeOverride);
        ({ width: width3, height: height3 } = statusTypingDimensions);
        const tmp4Result = Status_StatusUtils;
        if (isMobileOnline == null) {
          isMobileOnline = false;
        }
        if (isVROnline == null) {
          isVROnline = false;
        }
        const sum = height3 + 2 * timestampProducer;
        const obj2 = { nativeCutouts: null };
        const size = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
        size.shape = ClipView.CutoutShape.RoundedRect;
        const diff = tmp6 - width3 - timestampProducer;
        const tmp15Result = getStatusContainerStyleDefault(statusSizeOverride, isMobileOnline, isVROnline);
        size.x = diff + Status_StatusUtils.getAnimatedTypingTranslateX(tmp15Result.width);
        size.y = tmp6 - height3 - timestampProducer;
        size.width = width3 + 2 * timestampProducer;
        size.height = sum;
        size.cornerRadius = sum / 2;
        const items = [size];
        obj2.nativeCutouts = items;
        return obj2;
      } else if (isVROnline) {
        const vRStatusContainerRect = Status_StatusUtils.getVRStatusContainerRect(statusSizeOverride);
        ({ width: width2, height: height2 } = vRStatusContainerRect);
        const obj3 = { nativeCutouts: null };
        const size1 = {
          shape: ClipView.CutoutShape.RoundedRect,
          x: tmp6 - width2 + result,
          y: tmp6 - height2 + result,
          width: width2,
          height: height2,
          cornerRadius: vRStatusContainerRect.cornerRadius,
        };
        const items1 = [size1];
        obj3.nativeCutouts = items1;
        return obj3;
      } else if (isMobileOnline) {
        const mobileStatusContainerRect = Status_StatusUtils.getMobileStatusContainerRect(statusSizeOverride);
        ({ width, height } = mobileStatusContainerRect);
        const obj4 = { nativeCutouts: null };
        const size2 = {
          shape: ClipView.CutoutShape.RoundedRect,
          x: tmp6 - width + result,
          y: tmp6 - height + result,
          width,
          height,
          cornerRadius: mobileStatusContainerRect.cornerRadius,
        };
        const items2 = [size2];
        obj4.nativeCutouts = items2;
        return obj4;
      } else {
        const sum1 = statusSizeOverride / 2 + tmp;
        const diff1 = tmp6 - sum1 - 2 * result;
        const obj = { nativeCutouts: null };
        const point = { shape: ClipView.CutoutShape.Circle, x: diff1, y: diff1, size: 2 * sum1 };
        const items3 = [point];
        obj.nativeCutouts = items3;
        return obj;
      }
    }
  }
}
const View = fn(17).View;
const StatusTypes = fn(1085).StatusTypes;
const StatusConstants = fn(1189);
({ STATUS_PADDING: metroRequire, StatusSizes: closure_7 } = StatusConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
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
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("design/void/Avatar/native/Avatar.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = channel(speakingColor[13]).c(78);
        channel = channel.channel;
        ({ streaming, isMobileOnline, isVROnline, status } = channel);
        ({ size, animate, speaking, speakingColor } = channel);
        const avatarDecoration = channel.avatarDecoration;
        const mute = channel.mute;
        const deaf = channel.deaf;
        const statusStyle = channel.statusStyle;
        const avatarStyle = channel.avatarStyle;
        ({ style, cutout, autoStatusCutout, isStageCall, source } = channel);
        const user = channel.user;
        const guildId = channel.guildId;
        const disablePlaceholder = channel.disablePlaceholder;
        ({ needsOffscreenAlphaCompositing, accessible, accessibilityLabel, typing, statusSizeOverride } = channel);
        streaming = tmp4;
        isMobileOnline = tmp5;
        isVROnline = tmp6;
        if (undefined === size) {
          size = tmp(tmp2[7]).AvatarSizes.NORMAL;
        }
        animate = tmp7;
        closure_18 = tmp8;
        closure_19 = tmp9;
        typing = tmp10;
        let tmp11 = guildId(size);
        closure_21 = tmp11;
        if (cResult[0] === cutout) {
          if (cResult[1] === autoStatusCutout) {
            if (cResult[2] === tmp5) {
              if (cResult[3] === tmp6) {
                if (cResult[4] === size) {
                  if (cResult[5] === status) {
                    if (cResult[6] === statusSizeOverride) {
                      if (cResult[7] === tmp10) {
                        let tmp12 = cResult[8];
                      }
                      if (cResult[9] === tmp12) {
                        if (cResult[10] === tmp14) {
                          let tmp15 = cResult[11];
                        }
                        if (cResult[12] === tmp15) {
                          if (cResult[13] === tmp12) {
                            let tmp17 = cResult[14];
                          }
                          const cutout2 = tmp17.cutout;
                          const decorationCutout = tmp17.decorationCutout;
                          if (cResult[15] === tmp7) {
                            if (cResult[16] === avatarStyle) {
                              if (cResult[17] === channel) {
                                if (cResult[18] === cutout2) {
                                  if (cResult[19] === disablePlaceholder) {
                                    if (cResult[20] === guildId) {
                                      if (cResult[21] === size) {
                                        if (cResult[22] === source) {
                                          if (cResult[25] === tmp7) {
                                            if (cResult[26] === avatarDecoration) {
                                              if (cResult[27] === decorationCutout) {
                                                if (cResult[28] === size) {
                                                  if (cResult[31] === tmp5) {
                                                    if (cResult[32] === tmp6) {
                                                      if (cResult[33] === size) {
                                                        if (cResult[34] === status) {
                                                          if (cResult[35] === statusSizeOverride) {
                                                            if (cResult[36] === statusStyle) {
                                                              if (cResult[37] === tmp4) {
                                                                if (cResult[38] === tmp11.status) {
                                                                  if (cResult[39] === tmp10) {
                                                                    if (cResult[42] === deaf) {
                                                                      if (cResult[43] === mute) {
                                                                        if (cResult[44] === tmp11.status) {
                                                                          if (cResult[47] === tmp9) {
                                                                            if (cResult[48] === size) {
                                                                              if (cResult[49] === tmp8) {
                                                                                if (cResult[50] === speakingColor) {
                                                                                  if (cResult[51] === tmp11.speaking) {
                                                                                    const tmp27 = tmp(tmp2[7]).styles[
                                                                                      size
                                                                                    ];
                                                                                    class St {
                                                                                      constructor() {
                                                                                        if (deaf) {
                                                                                          tmp16 = jsx;
                                                                                          tmp17 = View;
                                                                                          obj1 = {
                                                                                            style: null,
                                                                                            children: null,
                                                                                          };
                                                                                          tmp18 = closure_21;
                                                                                          items = [,];
                                                                                          ({
                                                                                            status: arr2[0],
                                                                                            voiceStatus: arr2[1],
                                                                                          } = closure_21);
                                                                                          obj1.style = items;
                                                                                          tmp19 = jsx;
                                                                                          tmp20 = closure_1;
                                                                                          tmp21 = closure_2;
                                                                                          obj5 = {
                                                                                            size: null,
                                                                                            source: null,
                                                                                            color: null,
                                                                                          };
                                                                                          tmp23 = closure_1;
                                                                                          tmp24 = closure_2;
                                                                                          tmp22 = closure_1(
                                                                                            closure_2[16],
                                                                                          );
                                                                                          obj5.size = closure_1(
                                                                                            closure_2[16],
                                                                                          ).Sizes.REFRESH_SMALL_16;
                                                                                          tmp25 = closure_1;
                                                                                          tmp26 = closure_2;
                                                                                          obj5.source = closure_1(
                                                                                            closure_2[17],
                                                                                          );
                                                                                          tmp27 = closure_1;
                                                                                          tmp28 = closure_2;
                                                                                          obj5.color = closure_1(
                                                                                            closure_2[6],
                                                                                          ).unsafe_rawColors.WHITE;
                                                                                          obj1.children = jsx(
                                                                                            tmp22,
                                                                                            obj5,
                                                                                          );
                                                                                          tmp2 = jsx(View, obj1);
                                                                                        } else {
                                                                                          tmp = mute;
                                                                                          if (mute) {
                                                                                            tmp3 = jsx;
                                                                                            tmp4 = View;
                                                                                            obj = {
                                                                                              style: null,
                                                                                              children: null,
                                                                                            };
                                                                                            tmp5 = closure_21;
                                                                                            items1 = [,];
                                                                                            ({
                                                                                              status: arr[0],
                                                                                              voiceStatus: arr[1],
                                                                                            } = closure_21);
                                                                                            obj.style = items1;
                                                                                            tmp6 = jsx;
                                                                                            tmp7 = closure_1;
                                                                                            tmp8 = closure_2;
                                                                                            obj6 = {
                                                                                              size: null,
                                                                                              source: null,
                                                                                              color: null,
                                                                                            };
                                                                                            tmp10 = closure_1;
                                                                                            tmp11 = closure_2;
                                                                                            tmp9 = closure_1(
                                                                                              closure_2[16],
                                                                                            );
                                                                                            obj6.size = closure_1(
                                                                                              closure_2[16],
                                                                                            ).Sizes.REFRESH_SMALL_16;
                                                                                            tmp12 = closure_1;
                                                                                            tmp13 = closure_2;
                                                                                            obj6.source = closure_1(
                                                                                              closure_2[18],
                                                                                            );
                                                                                            tmp14 = closure_1;
                                                                                            tmp15 = closure_2;
                                                                                            obj6.color = closure_1(
                                                                                              closure_2[6],
                                                                                            ).unsafe_rawColors.WHITE;
                                                                                            obj.children = jsx(
                                                                                              tmp9,
                                                                                              obj6,
                                                                                            );
                                                                                            tmp2 = jsx(View, obj);
                                                                                          }
                                                                                        }
                                                                                        return tmp2;
                                                                                      }
                                                                                    }
                                                                                    let items = [
                                                                                      tmp27,
                                                                                      tmp11.container,
                                                                                      style,
                                                                                    ];
                                                                                    cResult[54] = style;
                                                                                    cResult[55] = tmp11.container;
                                                                                    cResult[56] = tmp27;
                                                                                    cResult[57] = items;
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                          class St {
                                                                            constructor() {
                                                                              if (deaf) {
                                                                                tmp16 = jsx;
                                                                                tmp17 = View;
                                                                                obj1 = { style: null, children: null };
                                                                                tmp18 = closure_21;
                                                                                items = [,];
                                                                                ({
                                                                                  status: arr2[0],
                                                                                  voiceStatus: arr2[1],
                                                                                } = closure_21);
                                                                                obj1.style = items;
                                                                                tmp19 = jsx;
                                                                                tmp20 = closure_1;
                                                                                tmp21 = closure_2;
                                                                                obj5 = {
                                                                                  size: null,
                                                                                  source: null,
                                                                                  color: null,
                                                                                };
                                                                                tmp23 = closure_1;
                                                                                tmp24 = closure_2;
                                                                                tmp22 = closure_1(closure_2[16]);
                                                                                obj5.size = closure_1(
                                                                                  closure_2[16],
                                                                                ).Sizes.REFRESH_SMALL_16;
                                                                                tmp25 = closure_1;
                                                                                tmp26 = closure_2;
                                                                                obj5.source = closure_1(closure_2[17]);
                                                                                tmp27 = closure_1;
                                                                                tmp28 = closure_2;
                                                                                obj5.color = closure_1(
                                                                                  closure_2[6],
                                                                                ).unsafe_rawColors.WHITE;
                                                                                obj1.children = jsx(tmp22, obj5);
                                                                                tmp2 = jsx(View, obj1);
                                                                              } else {
                                                                                tmp = mute;
                                                                                if (mute) {
                                                                                  tmp3 = jsx;
                                                                                  tmp4 = View;
                                                                                  obj = { style: null, children: null };
                                                                                  tmp5 = closure_21;
                                                                                  items1 = [,];
                                                                                  ({
                                                                                    status: arr[0],
                                                                                    voiceStatus: arr[1],
                                                                                  } = closure_21);
                                                                                  obj.style = items1;
                                                                                  tmp6 = jsx;
                                                                                  tmp7 = closure_1;
                                                                                  tmp8 = closure_2;
                                                                                  obj6 = {
                                                                                    size: null,
                                                                                    source: null,
                                                                                    color: null,
                                                                                  };
                                                                                  tmp10 = closure_1;
                                                                                  tmp11 = closure_2;
                                                                                  tmp9 = closure_1(closure_2[16]);
                                                                                  obj6.size = closure_1(
                                                                                    closure_2[16],
                                                                                  ).Sizes.REFRESH_SMALL_16;
                                                                                  tmp12 = closure_1;
                                                                                  tmp13 = closure_2;
                                                                                  obj6.source = closure_1(
                                                                                    closure_2[18],
                                                                                  );
                                                                                  tmp14 = closure_1;
                                                                                  tmp15 = closure_2;
                                                                                  obj6.color = closure_1(
                                                                                    closure_2[6],
                                                                                  ).unsafe_rawColors.WHITE;
                                                                                  obj.children = jsx(tmp9, obj6);
                                                                                  tmp2 = jsx(View, obj);
                                                                                }
                                                                              }
                                                                              return tmp2;
                                                                            }
                                                                          }
                                                                          cResult[47] = tmp9;
                                                                          cResult[48] = size;
                                                                          cResult[49] = tmp8;
                                                                          cResult[50] = speakingColor;
                                                                          cResult[51] = tmp11.speaking;
                                                                          cResult[52] = tmp11.stageSpeaking;
                                                                          cResult[53] = tmp26;
                                                                        }
                                                                      }
                                                                    }
                                                                    class St {
                                                                      constructor() {
                                                                        if (deaf) {
                                                                          tmp16 = jsx;
                                                                          tmp17 = View;
                                                                          obj1 = { style: null, children: null };
                                                                          tmp18 = closure_21;
                                                                          items = [,];
                                                                          ({ status: arr2[0], voiceStatus: arr2[1] } =
                                                                            closure_21);
                                                                          obj1.style = items;
                                                                          tmp19 = jsx;
                                                                          tmp20 = closure_1;
                                                                          tmp21 = closure_2;
                                                                          obj5 = {
                                                                            size: null,
                                                                            source: null,
                                                                            color: null,
                                                                          };
                                                                          tmp23 = closure_1;
                                                                          tmp24 = closure_2;
                                                                          tmp22 = closure_1(closure_2[16]);
                                                                          obj5.size = closure_1(
                                                                            closure_2[16],
                                                                          ).Sizes.REFRESH_SMALL_16;
                                                                          tmp25 = closure_1;
                                                                          tmp26 = closure_2;
                                                                          obj5.source = closure_1(closure_2[17]);
                                                                          tmp27 = closure_1;
                                                                          tmp28 = closure_2;
                                                                          obj5.color = closure_1(
                                                                            closure_2[6],
                                                                          ).unsafe_rawColors.WHITE;
                                                                          obj1.children = jsx(tmp22, obj5);
                                                                          tmp2 = jsx(View, obj1);
                                                                        } else {
                                                                          tmp = mute;
                                                                          if (mute) {
                                                                            tmp3 = jsx;
                                                                            tmp4 = View;
                                                                            obj = { style: null, children: null };
                                                                            tmp5 = closure_21;
                                                                            items1 = [,];
                                                                            ({ status: arr[0], voiceStatus: arr[1] } =
                                                                              closure_21);
                                                                            obj.style = items1;
                                                                            tmp6 = jsx;
                                                                            tmp7 = closure_1;
                                                                            tmp8 = closure_2;
                                                                            obj6 = {
                                                                              size: null,
                                                                              source: null,
                                                                              color: null,
                                                                            };
                                                                            tmp10 = closure_1;
                                                                            tmp11 = closure_2;
                                                                            tmp9 = closure_1(closure_2[16]);
                                                                            obj6.size = closure_1(
                                                                              closure_2[16],
                                                                            ).Sizes.REFRESH_SMALL_16;
                                                                            tmp12 = closure_1;
                                                                            tmp13 = closure_2;
                                                                            obj6.source = closure_1(closure_2[18]);
                                                                            tmp14 = closure_1;
                                                                            tmp15 = closure_2;
                                                                            obj6.color = closure_1(
                                                                              closure_2[6],
                                                                            ).unsafe_rawColors.WHITE;
                                                                            obj.children = jsx(tmp9, obj6);
                                                                            tmp2 = jsx(View, obj);
                                                                          }
                                                                        }
                                                                        return tmp2;
                                                                      }
                                                                    }
                                                                    cResult[42] = deaf;
                                                                    cResult[43] = mute;
                                                                    cResult[44] = tmp11.status;
                                                                    cResult[45] = tmp11.voiceStatus;
                                                                    cResult[46] = St;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  cResult[31] = tmp5;
                                                  cResult[32] = tmp6;
                                                  cResult[33] = size;
                                                  cResult[34] = status;
                                                  cResult[35] = statusSizeOverride;
                                                  cResult[36] = statusStyle;
                                                  cResult[37] = tmp4;
                                                  cResult[38] = tmp11.status;
                                                  cResult[39] = tmp10;
                                                  cResult[40] = user;
                                                  cResult[41] = tmp23;
                                                }
                                              }
                                            }
                                          }
                                          cResult[25] = tmp7;
                                          cResult[26] = avatarDecoration;
                                          cResult[27] = decorationCutout;
                                          cResult[28] = size;
                                          cResult[29] = tmp11.decoration;
                                          cResult[30] = tmp21;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          function st() {
                            let merged = { disablePlaceholder, style: avatarStyle, cutout: cutout2 };
                            let tmp = source;
                            if (null == source) {
                              if (null == user) {
                                if (null == channel) {
                                  return null;
                                }
                              }
                            }
                            if (null != tmp) {
                              const obj = { source: tmp, size: null, animate: null };
                              tmp = size;
                              obj.size = size;
                              obj.animate = animate;
                              merged = Object.assign(merged);
                              closure_2_8(CutoutableAvatarImageDefault, obj);
                            } else if (null != user) {
                              const obj2 = { user: tmp33, guildId, size, animate };
                              const merged1 = Object.assign(merged);
                              closure_2_8(CutoutableAvatarImageDefault, obj2);
                            } else if (null != channel) {
                              const obj3 = { channel: tmp5, size, animate };
                              const merged2 = Object.assign(merged);
                              closure_2_8(CutoutableAvatarImageDefault, obj3);
                            }
                          }
                          cResult[15] = tmp7;
                          cResult[16] = avatarStyle;
                          cResult[17] = channel;
                          cResult[18] = cutout2;
                          cResult[19] = disablePlaceholder;
                          cResult[20] = guildId;
                          cResult[21] = size;
                          cResult[22] = source;
                          cResult[23] = user;
                          cResult[24] = st;
                        }
                        tmp18[0] = tmp12;
                        tmp18[1] = tmp15;
                        cResult[12] = tmp15;
                        cResult[13] = tmp12;
                        cResult[14] = tmp18;
                        tmp17 = tmp18;
                      }
                      const decorationCutoutForAvatarCutout = tmp(tmp2[11]).getDecorationCutoutForAvatarCutout(
                        tmp12,
                        tmp14,
                      );
                      cResult[9] = tmp12;
                      cResult[10] = -tmp11.decoration.top;
                      cResult[11] = decorationCutoutForAvatarCutout;
                      tmp15 = decorationCutoutForAvatarCutout;
                      const tmpResult = tmp(tmp2[11]);
                    }
                  }
                }
              }
            }
          }
        }
        if (null == autoStatusCutout) {
          cResult[0] = cutout;
          class St {
            constructor() {
              if (deaf) {
                tmp16 = jsx;
                tmp17 = View;
                obj1 = { style: null, children: null };
                tmp18 = closure_21;
                items = [,];
                ({ status: arr2[0], voiceStatus: arr2[1] } = closure_21);
                obj1.style = items;
                tmp19 = jsx;
                tmp20 = closure_1;
                tmp21 = closure_2;
                obj5 = { size: null, source: null, color: null };
                tmp23 = closure_1;
                tmp24 = closure_2;
                tmp22 = closure_1(closure_2[16]);
                obj5.size = closure_1(closure_2[16]).Sizes.REFRESH_SMALL_16;
                tmp25 = closure_1;
                tmp26 = closure_2;
                obj5.source = closure_1(closure_2[17]);
                tmp27 = closure_1;
                tmp28 = closure_2;
                obj5.color = closure_1(closure_2[6]).unsafe_rawColors.WHITE;
                obj1.children = jsx(tmp22, obj5);
                tmp2 = jsx(View, obj1);
              } else {
                tmp = mute;
                if (mute) {
                  tmp3 = jsx;
                  tmp4 = View;
                  obj = { style: null, children: null };
                  tmp5 = closure_21;
                  items1 = [,];
                  ({ status: arr[0], voiceStatus: arr[1] } = closure_21);
                  obj.style = items1;
                  tmp6 = jsx;
                  tmp7 = closure_1;
                  tmp8 = closure_2;
                  obj6 = { size: null, source: null, color: null };
                  tmp10 = closure_1;
                  tmp11 = closure_2;
                  tmp9 = closure_1(closure_2[16]);
                  obj6.size = closure_1(closure_2[16]).Sizes.REFRESH_SMALL_16;
                  tmp12 = closure_1;
                  tmp13 = closure_2;
                  obj6.source = closure_1(closure_2[18]);
                  tmp14 = closure_1;
                  tmp15 = closure_2;
                  obj6.color = closure_1(closure_2[6]).unsafe_rawColors.WHITE;
                  obj.children = jsx(tmp9, obj6);
                  tmp2 = jsx(View, obj);
                }
              }
              return tmp2;
            }
          }
          cResult[1] = autoStatusCutout;
          cResult[2] = tmp5;
          cResult[3] = tmp6;
          cResult[4] = size;
          cResult[5] = status;
          cResult[6] = statusSizeOverride;
          cResult[7] = tmp10;
          cResult[8] = cutout;
          tmp12 = cutout;
        } else {
          let obj2 = {
            avatarSize: size,
            userStatus: null,
            isMobileOnline: null,
            isVROnline: null,
            padding: null,
            typing: null,
            statusSizeOverride: null,
          };
          class St {
            constructor() {
              if (deaf) {
                tmp16 = jsx;
                tmp17 = View;
                obj1 = { style: null, children: null };
                tmp18 = closure_21;
                items = [,];
                ({ status: arr2[0], voiceStatus: arr2[1] } = closure_21);
                obj1.style = items;
                tmp19 = jsx;
                tmp20 = closure_1;
                tmp21 = closure_2;
                obj5 = { size: null, source: null, color: null };
                tmp23 = closure_1;
                tmp24 = closure_2;
                tmp22 = closure_1(closure_2[16]);
                obj5.size = closure_1(closure_2[16]).Sizes.REFRESH_SMALL_16;
                tmp25 = closure_1;
                tmp26 = closure_2;
                obj5.source = closure_1(closure_2[17]);
                tmp27 = closure_1;
                tmp28 = closure_2;
                obj5.color = closure_1(closure_2[6]).unsafe_rawColors.WHITE;
                obj1.children = jsx(tmp22, obj5);
                tmp2 = jsx(View, obj1);
              } else {
                tmp = mute;
                if (mute) {
                  tmp3 = jsx;
                  tmp4 = View;
                  obj = { style: null, children: null };
                  tmp5 = closure_21;
                  items1 = [,];
                  ({ status: arr[0], voiceStatus: arr[1] } = closure_21);
                  obj.style = items1;
                  tmp6 = jsx;
                  tmp7 = closure_1;
                  tmp8 = closure_2;
                  obj6 = { size: null, source: null, color: null };
                  tmp10 = closure_1;
                  tmp11 = closure_2;
                  tmp9 = closure_1(closure_2[16]);
                  obj6.size = closure_1(closure_2[16]).Sizes.REFRESH_SMALL_16;
                  tmp12 = closure_1;
                  tmp13 = closure_2;
                  obj6.source = closure_1(closure_2[18]);
                  tmp14 = closure_1;
                  tmp15 = closure_2;
                  obj6.color = closure_1(closure_2[6]).unsafe_rawColors.WHITE;
                  obj.children = jsx(tmp9, obj6);
                  tmp2 = jsx(View, obj);
                }
              }
              return tmp2;
            }
          }
          obj2.isMobileOnline = tmp5;
          obj2.isVROnline = tmp6;
          obj2.padding = true === autoStatusCutout ? statusStyle : autoStatusCutout.padding;
          obj2.typing = tmp10;
          obj2.statusSizeOverride = statusSizeOverride;
          statusSizeOverride(obj2);
        }
      }
    : (isMobileOnline) => {
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
        ({ speakingColor, avatarDecoration, cutout } = isMobileOnline);
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
        const items = [cutout, autoStatusCutout, flag, flag2, NORMAL, status, typing, statusSizeOverride, tmp3];
        const memo = NORMAL.useMemo(() => {
          if (null != autoStatusCutout) {
            const obj = {
              avatarSize: NORMAL,
              userStatus: status,
              isMobileOnline: flag,
              isVROnline: flag2,
              padding: true === autoStatusCutout ? timestampProducer : autoStatusCutout.padding,
              typing,
              statusSizeOverride,
            };
            getAvatarStatusCutout(obj);
          } else {
            const obj2 = {
              cutout,
              decorationCutout: avatar_decorations_AvatarDecorationUtils.getDecorationCutoutForAvatarCutout(
                cutout,
                -decoration.decoration.top,
              ),
            };
            return obj2;
          }
        }, items);
        let obj = {
          style: null,
          needsOffscreenAlphaCompositing: null,
          accessible: null,
          accessibilityLabel: null,
          children: null,
        };
        let StatusWithTyping = flag;
        ({ cutout: cutout2, decorationCutout } = memo);
        const items1 = [flag(status[7]).styles[NORMAL], tmp3.container, style];
        obj.style = items1;
        obj.needsOffscreenAlphaCompositing = needsOffscreenAlphaCompositing;
        obj.accessible = accessible;
        obj.accessibilityLabel = accessibilityLabel;
        if (!flag4) {
          const items2 = [null, , , ,];
          let obj2 = { disablePlaceholder, style: avatarStyle, cutout: cutout2 };
          if (null == source) {
            if (null == user) {
              if (null == channel) {
                items2[1] = null;
                let tmp34 = null;
                if (null != avatarDecoration) {
                  const obj3 = {
                    size: null,
                    avatarDecoration: null,
                    decorationStyle: null,
                    animate: null,
                    cutout: null,
                  };
                  const tmp37 = flag2(tmp7[14]);
                  obj3.size = StatusWithTyping(tmp7[11]).getDecorationSizeForAvatarSize(NORMAL);
                  obj3.avatarDecoration = avatarDecoration;
                  obj3.decorationStyle = tmp3.decoration;
                  obj3.animate = flag3;
                  obj3.cutout = decorationCutout;
                  tmp34 = decoration(tmp37, obj3, avatarDecoration.asset);
                  const StatusWithTypingResult = StatusWithTyping(tmp7[11]);
                }
                items2[2] = tmp34;
                let tmp38 = null;
                if (null != status) {
                  tmp38 = null;
                  if (status !== autoStatusCutout.UNKNOWN) {
                    if (statusSizeOverride == null) {
                      statusSizeOverride = getStatusSize(NORMAL);
                    }
                    let merged1 = null;
                    if (null != statusSizeOverride) {
                      const obj4 = {
                        size: statusSizeOverride,
                        isMobileOnline: flag,
                        isVROnline: flag2,
                        status,
                        streaming,
                        style: null,
                      };
                      const items3 = [tmp3.status, statusStyle];
                      obj4.style = items3;
                      merged1 = obj4;
                    }
                    if (null == merged1) {
                      tmp38 = null;
                    } else {
                      if (!typing) {
                        const obj5 = {};
                        const merged = Object.assign(merged1);
                        let tmp49 = decoration(flag2(tmp7[15]), obj5);
                        const tmp45 = flag2(tmp7[15]);
                      }
                      StatusWithTyping = StatusWithTyping(tmp7[15]).StatusWithTyping;
                      const obj6 = {};
                      merged1 = Object.assign(merged1);
                      obj6.typing = typing;
                      user = user.id;
                      obj6.userId = user;
                      tmp49 = decoration(StatusWithTyping, obj6);
                    }
                  }
                }
                items2[3] = tmp38;
                if (deaf) {
                  const obj7 = { style: null, children: null };
                  const items4 = [,];
                  ({ status: arr7[0], voiceStatus: arr7[1] } = tmp3);
                  obj7.style = items4;
                  const obj8 = {
                    size: flag2(tmp7[16]).Sizes.REFRESH_SMALL_16,
                    source: flag2(tmp7[17]),
                    color: flag2(tmp7[6]).unsafe_rawColors.WHITE,
                  };
                  obj7.children = decoration(flag2(tmp7[16]), obj8);
                  let tmp54 = decoration(cutout, obj7);
                  const tmp60 = flag2(tmp7[16]);
                } else if (mute) {
                  const obj9 = { style: null, children: null };
                  const items5 = [,];
                  ({ status: arr6[0], voiceStatus: arr6[1] } = tmp3);
                  obj9.style = items5;
                  const obj10 = {
                    size: flag2(tmp7[16]).Sizes.REFRESH_SMALL_16,
                    source: flag2(tmp7[18]),
                    color: flag2(tmp7[6]).unsafe_rawColors.WHITE,
                  };
                  obj9.children = decoration(flag2(tmp7[16]), obj10);
                  tmp54 = decoration(cutout, obj9);
                  const tmp57 = flag2(tmp7[16]);
                }
                items2[4] = tmp54;
                obj.children = items2;
                return closure_9(cutout, obj);
              }
            }
          }
          if (null != source) {
            const obj11 = { source, size: NORMAL, animate: flag3 };
            obj2 = Object.assign(obj2);
            let tmp15 = decoration(flag2(tmp7[7]), obj11);
            const tmp30 = flag2(tmp7[7]);
          } else if (null != user) {
            const obj12 = { user, guildId, size: NORMAL, animate: flag3 };
            const merged2 = Object.assign(obj2);
            tmp15 = decoration(flag2(tmp7[7]), obj12);
            const tmp24 = flag2(tmp7[7]);
          } else if (null != channel) {
            const obj13 = { channel, size: NORMAL, animate: flag3 };
            const merged3 = Object.assign(obj2);
            tmp15 = decoration(flag2(tmp7[7]), obj13);
            const tmp18 = flag2(tmp7[7]);
          }
        } else {
          const sum = StatusWithTyping(tmp7[7]).AVATAR_SIZE_MAP[NORMAL] + 4;
          if (isStageCall) {
            const obj14 = { color: speakingColor, style: null };
            speakingColor = [tmp3.stageSpeaking];
            const size = { width: sum, height: sum, borderRadius: sum / 2 };
            speakingColor[1] = size;
            obj14.style = speakingColor;
            let tmp9Result = tmp9(flag2(tmp7[19]), obj14);
          } else {
            const items6 = [tmp3.speaking, ,];
            const size1 = { width: sum, height: sum, borderRadius: sum / 2 };
            items6[1] = size1;
            let tmp10 = null;
            if (null != speakingColor) {
              const obj15 = { borderColor: speakingColor };
              tmp10 = obj15;
            }
            const obj16 = { style: null };
            items6[2] = tmp10;
            obj16.style = items6;
            tmp9Result = tmp9(cutout, obj16);
          }
        }
      },
);
export const AvatarSizes = fn(12851).AvatarSizes;
export { getStatusSize };
