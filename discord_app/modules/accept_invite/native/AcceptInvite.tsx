// discord_app/modules/accept_invite/native/AcceptInvite.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../../image_upload/ImageLoaderUtils.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import DeprecatedLayoutAnimation from "../../animations/native/DeprecatedLayoutAnimation.tsx";
import _modDef12488 from "../../../../_runtime/metro/12488__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getInviteState(invite) {
  let state1;
  if (invite != null) {
    state1 = invite.state;
  }
  let tmp2 = null == state1;
  if (tmp2) {
    let channel;
    if (invite != null) {
      channel = invite.channel;
    }
    tmp2 = null == channel;
  }
  if (null != invite) {
    if (null != invite.state) {
      if (!tmp2) {
        const state = invite.state;
        if (InviteStates.RESOLVED !== state) {
          if (InviteStates.ACCEPTED !== state) {
            if (InviteStates.EXPIRED !== state) {
              if (InviteStates.BANNED !== state) {
                if (InviteStates.ERROR !== state) {
                  if (InviteStates.RESOLVING !== state) {
                    if (InviteStates.APP_NOT_OPENED !== state) {
                      if (InviteStates.APP_OPENED !== state) {
                        if (InviteStates.APP_OPENING !== state) {
                          if (InviteStates.ACCEPTING !== state) {
                            GlobalUtils.assertNever(state);
                          }
                        }
                      }
                    }
                  }
                  return constants.LOADING;
                }
              }
            }
            return constants.ERROR;
          }
        }
        return constants.DETAILS;
      }
    }
  }
  return constants.LOADING;
}
let closure_3 = ["invite"];
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_7, View: closure_8, StyleSheet } = get_ActivityIndicator);
const InviteStates = fn(1085).InviteStates;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  parentContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: null,
  cardContainer: null,
  cardContent: null,
  resolvingContainer: null,
};
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.marginVertical = 0;
obj4.resizeMode = "cover";
obj2.imageStyle = obj4;
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  justifyContent: "center",
};
obj2.cardContainer = {
  position: "absolute",
  flex: 1,
  width: "90%",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.cardContent = { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" };
obj2.resolvingContainer = { padding: 64 };
let closure_12 = createStyles.createStyles(obj2);
const constants = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function InviteResolving() {
      const cResult = c.c(5);
      const tmp2 = closure_12();
      const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
      if (cResult[0] !== token) {
        const obj3 = { color: token, size: "large" };
        const tmp7 = collapsed(React5, obj3);
        cResult[0] = token;
        cResult[1] = tmp7;
        let tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp2.resolvingContainer) {
        if (cResult[3] === tmp4) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = collapsed(closure_1_8, { style: tmp2.resolvingContainer, children: tmp4 });
      cResult[2] = tmp2.resolvingContainer;
      cResult[3] = tmp4;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj4 = { style: tmp2.resolvingContainer, children: tmp4 };
    }
  : function InviteResolving() {
      const tmp = closure_12();
      const obj2 = { style: tmp.resolvingContainer, children: null };
      obj2.children = collapsed(React5, {
        color: useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT),
        size: "large",
      });
      return collapsed(closure_1_8, obj2);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AcceptInviteCardComponent(invite) {
      const cResult = invite(576).c(14);
      invite = invite.invite;
      if (cResult[0] !== invite) {
        const tmp5 = getInviteState(invite);
        cResult[0] = invite;
        cResult[1] = tmp5;
        let tmp3 = tmp5;
      } else {
        tmp3 = cResult[1];
      }
      [first, dependencyMap] = noop.useState(tmp3);
      if (cResult[2] === first) {
        if (cResult[3] === invite) {
          let tmp8 = cResult[4];
          let tmp9 = cResult[5];
        }
        const effect = noop.useEffect(tmp8, tmp9);
        if (null == invite) {
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp37 = closure_10(closure_15, {});
            cResult[6] = tmp37;
            let tmp34 = tmp37;
          } else {
            tmp34 = cResult[6];
          }
          return tmp34;
        } else if (constants.DETAILS === first) {
          if (cResult[7] === invite) {
            if (cResult[8] === invite) {
              let tmp25 = cResult[9];
            }
            return tmp25;
          }
          const obj3 = {};
          const merged = Object.assign(invite);
          obj3.invite = invite;
          const tmp32 = closure_10(first(12479), obj3);
          cResult[7] = invite;
          cResult[8] = invite;
          cResult[9] = tmp32;
          tmp25 = tmp32;
          const tmp28 = first(12479);
        } else if (tmp38.ERROR === first) {
          if (cResult[10] === invite) {
            if (cResult[11] === invite) {
              let tmp17 = cResult[12];
            }
            return tmp17;
          }
          const obj4 = {};
          const merged1 = Object.assign(invite);
          obj4.invite = invite;
          const tmp24 = closure_10(first(12483), obj4);
          cResult[10] = invite;
          cResult[11] = invite;
          cResult[12] = tmp24;
          tmp17 = tmp24;
          const tmp20 = first(12483);
        } else {
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp16 = closure_10(closure_15, {});
            cResult[13] = tmp16;
            let tmp13 = tmp16;
          } else {
            tmp13 = cResult[13];
          }
          return tmp13;
        }
      }
      const fn = function u() {
        const tmp = getInviteState(invite);
        if (tmp !== first) {
          const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
          closure_2(tmp);
        }
      };
      const items = [invite, first];
      cResult[2] = first;
      cResult[3] = invite;
      cResult[4] = fn;
      cResult[5] = items;
      tmp9 = items;
      tmp8 = fn;
      let obj = invite(576);
    }
  : function AcceptInviteCardComponent(invite) {
      invite = invite.invite;
      [first, dependencyMap] = noop.useState(getInviteState(invite));
      const items = [invite, first];
      const effect = noop.useEffect(() => {
        const tmp = getInviteState(invite);
        if (tmp !== first) {
          const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
          closure_2(tmp);
        }
      }, items);
      if (null == invite) {
        return closure_10(closure_15, {});
      } else if (constants.DETAILS === first) {
        const obj2 = {};
        const merged = Object.assign(invite);
        obj2.invite = invite;
        return closure_10(first(12479), obj2);
      } else if (tmp22.ERROR === first) {
        let obj = {};
        const merged1 = Object.assign(invite);
        obj.invite = invite;
        return closure_10(first(12483), obj);
      } else {
        return closure_10(closure_15, {});
      }
    };
ReactCompilerGating = fn(558);
let obj5 = {
  position: "absolute",
  flex: 1,
  width: "90%",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AcceptInvite(invite) {
      const cResult = c.c(42);
      if (cResult[0] !== invite) {
        invite = invite.invite;
        const tmp8 = _objectWithoutProperties(invite, closure_3);
        cResult[0] = invite;
        cResult[1] = invite;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = invite;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_12();
      ({ height, width } = useWindowDimensionsDefault());
      if (cResult[3] !== tmp4) {
        let obj2 = tmp4;
        if (tmp4 == null) {
          obj2 = {};
        }
        cResult[3] = tmp4;
        cResult[4] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[4];
      }
      guild = tmp12.guild;
      if (cResult[5] === guild) {
        if (cResult[6] === width) {
          let tmp14 = cResult[7];
        }
        if (cResult[8] === height) {
          if (cResult[9] === width) {
            let tmp17 = cResult[10];
          }
          if (cResult[11] === tmp9.parentContainer) {
            if (cResult[12] === tmp17) {
              let tmp18 = cResult[13];
            }
            if (cResult[14] === height) {
              if (cResult[15] === width) {
                let tmp19 = cResult[16];
              }
              if (cResult[17] === height) {
                if (cResult[18] === width) {
                  let tmp20 = cResult[19];
                }
                if (cResult[20] === tmp9.imageStyle) {
                  if (cResult[21] === tmp20) {
                    let tmp21 = cResult[22];
                  }
                  if (cResult[23] === tmp14) {
                    if (cResult[24] === tmp21) {
                      let tmp22 = cResult[25];
                    }
                    if (cResult[26] === tmp19) {
                      if (cResult[27] === tmp22) {
                        let tmp25 = cResult[28];
                      }
                      if (cResult[29] === tmp4) {
                        if (cResult[30] === tmp5) {
                          let tmp29 = cResult[31];
                        }
                        if (cResult[32] === tmp9.cardContent) {
                          if (cResult[33] === tmp29) {
                            let tmp36 = cResult[34];
                          }
                          if (cResult[35] === tmp9.cardContainer) {
                            if (cResult[36] === tmp36) {
                              let tmp40 = cResult[37];
                            }
                            if (cResult[38] === tmp40) {
                              if (cResult[39] === tmp18) {
                                if (cResult[40] === tmp25) {
                                  let tmp43 = cResult[41];
                                }
                                return tmp43;
                              }
                            }
                            const obj3 = { style: tmp18, children: null };
                            const items = [tmp25, tmp40];
                            obj3.children = items;
                            const tmp46 = closure_1_11(closure_1_8, obj3);
                            cResult[38] = tmp40;
                            cResult[39] = tmp18;
                            cResult[40] = tmp25;
                            cResult[41] = tmp46;
                            tmp43 = tmp46;
                          }
                          const obj5 = { style: tmp9.cardContainer, children: tmp36 };
                          const tmp42 = collapsed(Card.Card, obj5);
                          cResult[35] = tmp9.cardContainer;
                          cResult[36] = tmp36;
                          cResult[37] = tmp42;
                          tmp40 = tmp42;
                        }
                        const obj6 = { style: tmp9.cardContent, children: tmp29 };
                        const tmp39 = collapsed(closure_1_8, obj6);
                        cResult[32] = tmp9.cardContent;
                        cResult[33] = tmp29;
                        cResult[34] = tmp39;
                        tmp36 = tmp39;
                      }
                      const obj7 = { invite: tmp4 };
                      const merged = Object.assign(tmp5);
                      const tmp35 = collapsed(closure_16, obj7);
                      cResult[29] = tmp4;
                      cResult[30] = tmp5;
                      cResult[31] = tmp35;
                      tmp29 = tmp35;
                    }
                    const obj8 = { style: tmp19, children: tmp22 };
                    const tmp28 = collapsed(closure_1_8, obj8);
                    cResult[26] = tmp19;
                    cResult[27] = tmp22;
                    cResult[28] = tmp28;
                    tmp25 = tmp28;
                  }
                  const obj9 = { source: tmp14, style: tmp21 };
                  const tmp24 = collapsed(FastImageDefault, obj9);
                  cResult[23] = tmp14;
                  cResult[24] = tmp21;
                  cResult[25] = tmp24;
                  tmp22 = tmp24;
                }
                const items1 = [tmp9.imageStyle, tmp20];
                cResult[20] = tmp9.imageStyle;
                cResult[21] = tmp20;
                cResult[22] = items1;
                tmp21 = items1;
              }
              const size = { height, width };
              cResult[17] = height;
              cResult[18] = width;
              cResult[19] = size;
              tmp20 = size;
            }
            const size1 = { height, width };
            cResult[14] = height;
            cResult[15] = width;
            cResult[16] = size1;
            tmp19 = size1;
          }
          const items2 = [tmp9.parentContainer, tmp17];
          cResult[11] = tmp9.parentContainer;
          cResult[12] = tmp17;
          cResult[13] = items2;
          tmp18 = items2;
        }
        const size2 = { height, width };
        cResult[8] = height;
        cResult[9] = width;
        cResult[10] = size2;
        tmp17 = size2;
      }
      let splash;
      if (guild != null) {
        splash = guild.splash;
      }
      if (null == splash) {
        let guildSplashSource = _modDef12488;
      } else {
        const obj10 = { id: null, splash: null, size: null };
        ({ id: obj4.id, splash: obj4.splash } = guild);
        const tmp10Result2 = AvatarUtilsDefault;
        obj10.size = width * ImageLoaderUtils.getDevicePixelRatio();
        guildSplashSource = tmp10Result2.getGuildSplashSource(obj10);
        const tmpResult = ImageLoaderUtils;
      }
      cResult[5] = guild;
      cResult[6] = width;
      cResult[7] = guildSplashSource;
      tmp14 = guildSplashSource;
      const tmp11 = useWindowDimensionsDefault();
    }
  : function AcceptInvite(invite) {
      invite = invite.invite;
      const merged = Object.assign(invite, Object.assign({ invite: 0 }));
      const tmp2 = closure_12();
      ({ height, width } = useWindowDimensionsDefault());
      let obj = invite;
      if (invite == null) {
        obj = {};
      }
      guild = obj.guild;
      let splash;
      if (guild != null) {
        splash = guild.splash;
      }
      if (null == splash) {
        let guildSplashSource = _modDef12488;
      } else {
        const obj2 = { id: null, splash: null, size: null };
        ({ id: obj3.id, splash: obj3.splash } = guild);
        const tmp3Result2 = AvatarUtilsDefault;
        obj2.size = width * ImageLoaderUtils.getDevicePixelRatio();
        guildSplashSource = tmp3Result2.getGuildSplashSource(obj2);
      }
      const obj5 = { style: null, children: null };
      const items = [tmp2.parentContainer, { height, width }];
      obj5.style = items;
      const obj6 = { style: { height, width }, children: null };
      const obj7 = { source: guildSplashSource, style: null };
      const items1 = [tmp2.imageStyle, { height, width }];
      obj7.style = items1;
      obj6.children = collapsed(FastImageDefault, obj7);
      const items2 = [collapsed(closure_1_8, obj6)];
      const obj8 = { style: tmp2.cardContainer, children: null };
      const obj9 = { style: tmp2.cardContent, children: null };
      const merged1 = Object.assign(merged);
      obj9.children = collapsed(closure_16, { invite });
      obj8.children = collapsed(closure_1_8, obj9);
      items2[1] = collapsed(Card.Card, obj8);
      obj5.children = items2;
      return closure_1_11(closure_1_8, obj5);
    };
