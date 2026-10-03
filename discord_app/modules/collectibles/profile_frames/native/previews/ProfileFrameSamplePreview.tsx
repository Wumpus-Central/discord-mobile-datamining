// discord_app/modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef6052 from "../../../../../../_runtime/metro/06052__.js";
import ProfileFrameLayerOrder from "../../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerOrder.tsx";
import ProfileFrameDefault from "../ProfileFrame.tsx";
import scaleProfileFrameDefault from "../../scaleProfileFrame.tsx";
import _modDef8479 from "../../../../../../discord_assets/assets/collectibles/previews/sample_profile_small-2x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const UserProfileThemeTypes = fn(6707).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  profileFrameContainer: { flex: 1 },
  profileContainer: {
    flex: 1,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_NORMAL,
    borderRadius: nativeDefault.radii.xs,
  },
  sampleProfile: { width: "100%", aspectRatio: fn(8454).SAMPLE_PROFILE_ASPECT_RATIO },
};
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flex: 1,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  borderRadius: nativeDefault.radii.xs,
};
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (previewWidth) => {
      const cResult = c.c(84);
      ({ profileFrame, previewHeight, profileBackgroundColor } = previewWidth);
      const tmp4 = closure_9();
      const innerWidth = profileFrame.innerWidth;
      const result = (previewWidth.previewWidth * innerWidth) / (innerWidth + 2 * profileFrame.overflowHorizontal);
      if (cResult[0] === profileFrame) {
        if (cResult[1] === result) {
          let tmp6 = cResult[2];
        }
        ({ overflowTop, overflowBottom, overflowHorizontal } = tmp6);
        const diff = previewHeight - overflowTop - overflowBottom;
        const token = useToken.useToken(profileBackgroundColor);
        if (cResult[3] === previewHeight) {
          if (cResult[4] === profileFrame) {
            if (cResult[5] === result) {
              let tmp10 = cResult[6];
            }
            const xs = nativeDefault.radii.xs;
            if (cResult[7] === -overflowTop) {
              if (cResult[8] === tmp19) {
                if (cResult[9] === tmp20) {
                  if (cResult[10] === tmp21) {
                    let tmp22 = cResult[11];
                  }
                  if (cResult[12] !== overflowTop) {
                    const obj2 = { style: null };
                    const rect = {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: overflowTop,
                      backgroundColor: "black",
                    };
                    obj2.style = rect;
                    const tmp26 = timestampProducer(React4, obj2);
                    cResult[12] = overflowTop;
                    cResult[13] = tmp26;
                    let tmp23 = tmp26;
                  } else {
                    tmp23 = cResult[13];
                  }
                  if (cResult[14] !== overflowBottom) {
                    const obj3 = { style: null };
                    const rect1 = {
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: overflowBottom,
                      backgroundColor: "black",
                    };
                    obj3.style = rect1;
                    const tmp30 = timestampProducer(React4, obj3);
                    cResult[14] = overflowBottom;
                    cResult[15] = tmp30;
                    let tmp27 = tmp30;
                  } else {
                    tmp27 = cResult[15];
                  }
                  if (cResult[16] === overflowBottom) {
                    if (cResult[17] === overflowHorizontal) {
                      if (cResult[18] === overflowTop) {
                        let tmp31 = cResult[19];
                      }
                      if (cResult[20] === overflowBottom) {
                        if (cResult[21] === overflowHorizontal) {
                          if (cResult[22] === overflowTop) {
                            let tmp35 = cResult[23];
                          }
                          const diff1 = overflowTop - xs;
                          const diff2 = overflowHorizontal - xs;
                          if (cResult[24] === diff1) {
                            if (cResult[25] === diff2) {
                              let tmp41 = cResult[26];
                            }
                            const diff3 = overflowTop - xs;
                            const diff4 = overflowHorizontal - xs;
                            if (cResult[27] === diff3) {
                              if (cResult[28] === diff4) {
                                let tmp47 = cResult[29];
                              }
                              const diff5 = overflowBottom - xs;
                              const diff6 = overflowHorizontal - xs;
                              if (cResult[30] === diff5) {
                                if (cResult[31] === diff6) {
                                  let tmp53 = cResult[32];
                                }
                                const diff7 = overflowBottom - xs;
                                const diff8 = overflowHorizontal - xs;
                                if (cResult[33] === diff7) {
                                  if (cResult[34] === diff8) {
                                    let tmp59 = cResult[35];
                                  }
                                  if (cResult[36] === tmp31) {
                                    if (cResult[37] === tmp35) {
                                      if (cResult[38] === tmp41) {
                                        if (cResult[39] === tmp47) {
                                          if (cResult[40] === tmp53) {
                                            if (cResult[41] === tmp59) {
                                              if (cResult[42] === tmp23) {
                                                if (cResult[43] === tmp27) {
                                                  let tmp63 = cResult[44];
                                                }
                                                if (cResult[45] === overflowBottom) {
                                                  if (cResult[46] === overflowHorizontal) {
                                                    if (cResult[47] === overflowTop) {
                                                      let tmp68 = cResult[48];
                                                    }
                                                    if (cResult[49] === tmp10) {
                                                      if (cResult[50] === tmp68) {
                                                        let tmp69 = cResult[51];
                                                      }
                                                      if (cResult[52] === tmp63) {
                                                        if (cResult[53] === tmp69) {
                                                          if (cResult[54] === tmp22) {
                                                            let tmp73 = cResult[55];
                                                          }
                                                          if (cResult[56] === overflowBottom) {
                                                            if (cResult[57] === overflowHorizontal) {
                                                              if (cResult[58] === overflowTop) {
                                                                if (cResult[59] === result) {
                                                                  let tmp76 = cResult[60];
                                                                }
                                                                if (cResult[61] === tmp4.profileFrameContainer) {
                                                                  if (cResult[62] === tmp76) {
                                                                    let tmp77 = cResult[63];
                                                                  }
                                                                  if (null == profileBackgroundColor) {
                                                                    tmp10 = tmp73;
                                                                  }
                                                                  if (cResult[64] !== token) {
                                                                    let tmp80 = null != token;
                                                                    if (tmp80) {
                                                                      const obj4 = { backgroundColor: token };
                                                                      tmp80 = obj4;
                                                                    }
                                                                    cResult[64] = token;
                                                                    cResult[65] = tmp80;
                                                                    let tmp79 = tmp80;
                                                                  } else {
                                                                    tmp79 = cResult[65];
                                                                  }
                                                                  if (cResult[66] === tmp4.profileContainer) {
                                                                    if (cResult[67] === tmp79) {
                                                                      let tmp81 = cResult[68];
                                                                    }
                                                                    const _Symbol = Symbol;
                                                                    if (
                                                                      cResult[69] ===
                                                                      Symbol.for("react.memo_cache_sentinel")
                                                                    ) {
                                                                      const obj5 = { uri: _modDef8479 };
                                                                      cResult[69] = obj5;
                                                                      let tmp83 = obj5;
                                                                    } else {
                                                                      tmp83 = cResult[69];
                                                                    }
                                                                    if (cResult[70] !== tmp4.sampleProfile) {
                                                                      const obj6 = {
                                                                        source: tmp83,
                                                                        style: tmp4.sampleProfile,
                                                                        resizeMode: "cover",
                                                                      };
                                                                      const tmp86 = timestampProducer(
                                                                        FastImageDefault,
                                                                        obj6,
                                                                      );
                                                                      cResult[70] = tmp4.sampleProfile;
                                                                      cResult[71] = tmp86;
                                                                      let tmp84 = tmp86;
                                                                    } else {
                                                                      tmp84 = cResult[71];
                                                                    }
                                                                    if (cResult[72] === tmp81) {
                                                                      if (cResult[73] === tmp84) {
                                                                        let tmp87 = cResult[74];
                                                                      }
                                                                      if (cResult[75] === profileFrame) {
                                                                        if (cResult[76] === diff) {
                                                                          if (cResult[77] === result) {
                                                                            let tmp91 = cResult[78];
                                                                          }
                                                                          if (cResult[79] === tmp77) {
                                                                            if (cResult[80] === tmp10) {
                                                                              if (cResult[81] === tmp87) {
                                                                                if (cResult[82] === tmp91) {
                                                                                  let tmp97 = cResult[83];
                                                                                }
                                                                                return tmp97;
                                                                              }
                                                                            }
                                                                          }
                                                                          const obj7 = { style: tmp77, children: null };
                                                                          const items = [tmp10, tmp87, tmp91];
                                                                          obj7.children = items;
                                                                          const tmp100 = React5(React4, obj7);
                                                                          cResult[79] = tmp77;
                                                                          cResult[80] = tmp10;
                                                                          cResult[81] = tmp87;
                                                                          cResult[82] = tmp91;
                                                                          cResult[83] = tmp100;
                                                                          tmp97 = tmp100;
                                                                        }
                                                                      }
                                                                      const obj8 = {
                                                                        frame: profileFrame,
                                                                        filterLayer,
                                                                        profileThemeType: UserProfileThemeTypes.PREVIEW,
                                                                        frameOrder:
                                                                          ProfileFrameLayerOrder.ProfileFrameLayerOrder
                                                                            .FRONT,
                                                                        containerWidth: result,
                                                                        containerHeight: diff,
                                                                      };
                                                                      const tmp96 = timestampProducer(
                                                                        ProfileFrameDefault,
                                                                        obj8,
                                                                      );
                                                                      cResult[75] = profileFrame;
                                                                      cResult[76] = diff;
                                                                      cResult[77] = result;
                                                                      cResult[78] = tmp96;
                                                                      tmp91 = tmp96;
                                                                      const tmp17Result = ProfileFrameDefault;
                                                                    }
                                                                    const obj9 = { style: tmp81, children: tmp84 };
                                                                    const tmp90 = timestampProducer(React4, obj9);
                                                                    cResult[72] = tmp81;
                                                                    cResult[73] = tmp84;
                                                                    cResult[74] = tmp90;
                                                                    tmp87 = tmp90;
                                                                  }
                                                                  const items1 = [tmp4.profileContainer, tmp79];
                                                                  cResult[66] = tmp4.profileContainer;
                                                                  cResult[67] = tmp79;
                                                                  cResult[68] = items1;
                                                                  tmp81 = items1;
                                                                }
                                                                const items2 = [tmp4.profileFrameContainer, tmp76];
                                                                cResult[61] = tmp4.profileFrameContainer;
                                                                cResult[62] = tmp76;
                                                                cResult[63] = items2;
                                                                tmp77 = items2;
                                                              }
                                                            }
                                                          }
                                                          const obj10 = {
                                                            width: result,
                                                            marginTop: overflowTop,
                                                            marginBottom: overflowBottom,
                                                            marginHorizontal: overflowHorizontal,
                                                          };
                                                          cResult[56] = overflowBottom;
                                                          cResult[57] = overflowHorizontal;
                                                          cResult[58] = overflowTop;
                                                          cResult[59] = result;
                                                          cResult[60] = obj10;
                                                          tmp76 = obj10;
                                                        }
                                                      }
                                                      const obj11 = {
                                                        style: tmp22,
                                                        maskElement: tmp63,
                                                        children: tmp69,
                                                      };
                                                      const tmp75 = timestampProducer(_modDef6052, obj11);
                                                      cResult[52] = tmp63;
                                                      cResult[53] = tmp69;
                                                      cResult[54] = tmp22;
                                                      cResult[55] = tmp75;
                                                      tmp73 = tmp75;
                                                    }
                                                    const obj12 = { style: tmp68, children: tmp10 };
                                                    const tmp72 = timestampProducer(React4, obj12);
                                                    cResult[49] = tmp10;
                                                    cResult[50] = tmp68;
                                                    cResult[51] = tmp72;
                                                    tmp69 = tmp72;
                                                  }
                                                }
                                                const obj13 = {
                                                  marginTop: overflowTop,
                                                  marginBottom: overflowBottom,
                                                  marginHorizontal: overflowHorizontal,
                                                  flex: 1,
                                                };
                                                cResult[45] = overflowBottom;
                                                cResult[46] = overflowHorizontal;
                                                cResult[47] = overflowTop;
                                                cResult[48] = obj13;
                                                tmp68 = obj13;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj14 = { style: React3.absoluteFill, children: null };
                                  const items3 = [tmp23, tmp27, tmp31, tmp35, tmp41, tmp47, tmp53, tmp59];
                                  obj14.children = items3;
                                  const tmp67 = React5(React4, obj14);
                                  cResult[36] = tmp31;
                                  cResult[37] = tmp35;
                                  cResult[38] = tmp41;
                                  cResult[39] = tmp47;
                                  cResult[40] = tmp53;
                                  cResult[41] = tmp59;
                                  cResult[42] = tmp23;
                                  cResult[43] = tmp27;
                                  cResult[44] = tmp67;
                                  tmp63 = tmp67;
                                }
                                const obj15 = { style: null };
                                const size = {
                                  position: "absolute",
                                  bottom: diff7,
                                  right: diff8,
                                  width: 2 * xs,
                                  height: 2 * xs,
                                  borderRadius: xs,
                                  backgroundColor: "black",
                                };
                                obj15.style = size;
                                const tmp62 = timestampProducer(React4, obj15);
                                cResult[33] = diff7;
                                cResult[34] = diff8;
                                cResult[35] = tmp62;
                                tmp59 = tmp62;
                              }
                              const obj16 = { style: null };
                              const size1 = {
                                position: "absolute",
                                bottom: diff5,
                                left: diff6,
                                width: 2 * xs,
                                height: 2 * xs,
                                borderRadius: xs,
                                backgroundColor: "black",
                              };
                              obj16.style = size1;
                              const tmp56 = timestampProducer(React4, obj16);
                              cResult[30] = diff5;
                              cResult[31] = diff6;
                              cResult[32] = tmp56;
                              tmp53 = tmp56;
                            }
                            const obj17 = { style: null };
                            const size2 = {
                              position: "absolute",
                              top: diff3,
                              right: diff4,
                              width: 2 * xs,
                              height: 2 * xs,
                              borderRadius: xs,
                              backgroundColor: "black",
                            };
                            obj17.style = size2;
                            const tmp50 = timestampProducer(React4, obj17);
                            cResult[27] = diff3;
                            cResult[28] = diff4;
                            cResult[29] = tmp50;
                            tmp47 = tmp50;
                          }
                          const obj18 = { style: null };
                          const size3 = {
                            position: "absolute",
                            top: diff1,
                            left: diff2,
                            width: 2 * xs,
                            height: 2 * xs,
                            borderRadius: xs,
                            backgroundColor: "black",
                          };
                          obj18.style = size3;
                          const tmp44 = timestampProducer(React4, obj18);
                          cResult[24] = diff1;
                          cResult[25] = diff2;
                          cResult[26] = tmp44;
                          tmp41 = tmp44;
                        }
                      }
                      const obj19 = { style: null };
                      const rect2 = {
                        position: "absolute",
                        top: overflowTop,
                        bottom: overflowBottom,
                        right: 0,
                        width: overflowHorizontal,
                        backgroundColor: "black",
                      };
                      obj19.style = rect2;
                      const tmp38 = timestampProducer(React4, obj19);
                      cResult[20] = overflowBottom;
                      cResult[21] = overflowHorizontal;
                      cResult[22] = overflowTop;
                      cResult[23] = tmp38;
                      tmp35 = tmp38;
                    }
                  }
                  const obj20 = { style: null };
                  const rect3 = {
                    position: "absolute",
                    top: overflowTop,
                    bottom: overflowBottom,
                    left: 0,
                    width: overflowHorizontal,
                    backgroundColor: "black",
                  };
                  obj20.style = rect3;
                  const tmp34 = timestampProducer(React4, obj20);
                  cResult[16] = overflowBottom;
                  cResult[17] = overflowHorizontal;
                  cResult[18] = overflowTop;
                  cResult[19] = tmp34;
                  tmp31 = tmp34;
                }
              }
            }
            const rect4 = {
              position: "absolute",
              top: -overflowTop,
              bottom: -overflowBottom,
              left: -overflowHorizontal,
              right: -overflowHorizontal,
            };
            cResult[7] = -overflowTop;
            cResult[8] = -overflowBottom;
            cResult[9] = -overflowHorizontal;
            cResult[10] = -overflowHorizontal;
            cResult[11] = rect4;
            tmp22 = rect4;
          }
        }
        const obj21 = {
          frame: profileFrame,
          filterLayer,
          profileThemeType: UserProfileThemeTypes.PREVIEW,
          frameOrder: null,
          containerWidth: null,
          containerHeight: null,
        };
        const tmpResult = useToken;
        obj21.frameOrder = ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK;
        obj21.containerWidth = result;
        obj21.containerHeight = previewHeight;
        const tmp16 = timestampProducer(ProfileFrameDefault, obj21);
        cResult[3] = previewHeight;
        cResult[4] = profileFrame;
        cResult[5] = result;
        cResult[6] = tmp16;
        tmp10 = tmp16;
      }
      const tmp7 = scaleProfileFrameDefault(profileFrame, result);
      cResult[0] = profileFrame;
      cResult[1] = result;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (previewWidth) => {
      ({ profileFrame, previewHeight, profileBackgroundColor } = previewWidth);
      const tmp = closure_9();
      const innerWidth = profileFrame.innerWidth;
      const result = (previewWidth.previewWidth * innerWidth) / (innerWidth + 2 * profileFrame.overflowHorizontal);
      ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(profileFrame, result));
      const tmp5 = scaleProfileFrameDefault(profileFrame, result);
      const token = useToken.useToken(profileBackgroundColor);
      const obj2 = {
        frame: profileFrame,
        filterLayer,
        profileThemeType: UserProfileThemeTypes.PREVIEW,
        frameOrder: null,
        containerWidth: null,
        containerHeight: null,
      };
      obj2.frameOrder = ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK;
      obj2.containerWidth = result;
      obj2.containerHeight = previewHeight;
      let tmp12 = timestampProducer(ProfileFrameDefault, obj2);
      const xs = nativeDefault.radii.xs;
      const obj3 = {
        style: {
          position: "absolute",
          top: -overflowTop,
          bottom: -overflowBottom,
          left: -overflowHorizontal,
          right: -overflowHorizontal,
        },
        maskElement: null,
        children: null,
      };
      const obj4 = { style: React3.absoluteFill, children: null };
      const obj5 = {
        style: { position: "absolute", top: 0, left: 0, right: 0, height: overflowTop, backgroundColor: "black" },
      };
      const items = [
        timestampProducer(React4, obj5),
        timestampProducer(React4, {
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: overflowBottom,
            backgroundColor: "black",
          },
        }),
        timestampProducer(React4, {
          style: {
            position: "absolute",
            top: overflowTop,
            bottom: overflowBottom,
            left: 0,
            width: overflowHorizontal,
            backgroundColor: "black",
          },
        }),
        timestampProducer(React4, {
          style: {
            position: "absolute",
            top: overflowTop,
            bottom: overflowBottom,
            right: 0,
            width: overflowHorizontal,
            backgroundColor: "black",
          },
        }),
        timestampProducer(React4, {
          style: {
            position: "absolute",
            top: overflowTop - xs,
            left: overflowHorizontal - xs,
            width: 2 * xs,
            height: 2 * xs,
            borderRadius: xs,
            backgroundColor: "black",
          },
        }),
        timestampProducer(React4, {
          style: {
            position: "absolute",
            top: overflowTop - xs,
            right: overflowHorizontal - xs,
            width: 2 * xs,
            height: 2 * xs,
            borderRadius: xs,
            backgroundColor: "black",
          },
        }),
        timestampProducer(React4, {
          style: {
            position: "absolute",
            bottom: overflowBottom - xs,
            left: overflowHorizontal - xs,
            width: 2 * xs,
            height: 2 * xs,
            borderRadius: xs,
            backgroundColor: "black",
          },
        }),
        timestampProducer(React4, {
          style: {
            position: "absolute",
            bottom: overflowBottom - xs,
            right: overflowHorizontal - xs,
            width: 2 * xs,
            height: 2 * xs,
            borderRadius: xs,
            backgroundColor: "black",
          },
        }),
      ];
      obj4.children = items;
      obj3.maskElement = React5(React4, obj4);
      obj3.children = timestampProducer(React4, {
        style: { marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal, flex: 1 },
        children: tmp12,
      });
      const obj14 = { style: null, children: null };
      const items1 = [
        tmp.profileFrameContainer,
        { width: result, marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal },
      ];
      obj14.style = items1;
      if (null == profileBackgroundColor) {
        tmp12 = timestampProducer(tmp13, obj3);
      }
      const items2 = [tmp12, ,];
      const items3 = [tmp.profileContainer];
      let tmp16 = null != token;
      if (tmp16) {
        const obj15 = { backgroundColor: token };
        tmp16 = obj15;
      }
      const obj16 = { style: items3, children: null };
      items3[1] = tmp16;
      const obj17 = { source: null, style: null, resizeMode: "cover" };
      const obj18 = { uri: null };
      const obj10 = {
        style: {
          position: "absolute",
          top: overflowTop - xs,
          right: overflowHorizontal - xs,
          width: 2 * xs,
          height: 2 * xs,
          borderRadius: xs,
          backgroundColor: "black",
        },
      };
      const obj11 = {
        style: {
          position: "absolute",
          bottom: overflowBottom - xs,
          left: overflowHorizontal - xs,
          width: 2 * xs,
          height: 2 * xs,
          borderRadius: xs,
          backgroundColor: "black",
        },
      };
      const obj12 = {
        style: {
          position: "absolute",
          bottom: overflowBottom - xs,
          right: overflowHorizontal - xs,
          width: 2 * xs,
          height: 2 * xs,
          borderRadius: xs,
          backgroundColor: "black",
        },
      };
      const obj13 = {
        style: { marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal, flex: 1 },
        children: tmp12,
      };
      const obj6 = {
        style: { position: "absolute", bottom: 0, left: 0, right: 0, height: overflowBottom, backgroundColor: "black" },
      };
      const obj7 = {
        style: {
          position: "absolute",
          top: overflowTop,
          bottom: overflowBottom,
          left: 0,
          width: overflowHorizontal,
          backgroundColor: "black",
        },
      };
      const obj8 = {
        style: {
          position: "absolute",
          top: overflowTop,
          bottom: overflowBottom,
          right: 0,
          width: overflowHorizontal,
          backgroundColor: "black",
        },
      };
      const obj9 = {
        style: {
          position: "absolute",
          top: overflowTop - xs,
          left: overflowHorizontal - xs,
          width: 2 * xs,
          height: 2 * xs,
          borderRadius: xs,
          backgroundColor: "black",
        },
      };
      tmp13 = _modDef6052;
      obj18.uri = _modDef8479;
      obj17.source = obj18;
      obj17.style = tmp.sampleProfile;
      obj16.children = timestampProducer(FastImageDefault, obj17);
      items2[1] = timestampProducer(React4, obj16);
      const obj19 = {
        frame: profileFrame,
        filterLayer,
        profileThemeType: UserProfileThemeTypes.PREVIEW,
        frameOrder: null,
        containerWidth: null,
        containerHeight: null,
      };
      const tmp3Result = FastImageDefault;
      obj19.frameOrder = ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT;
      obj19.containerWidth = result;
      obj19.containerHeight = previewHeight - overflowTop - overflowBottom;
      items2[2] = timestampProducer(ProfileFrameDefault, obj19);
      obj14.children = items2;
      return React5(React4, obj14);
    };
