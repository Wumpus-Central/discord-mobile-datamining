// discord_app/modules/accept_invite/native/AcceptInvite.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../../image_upload/ImageLoaderUtils.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import DeprecatedLayoutAnimation from "../../animations/native/DeprecatedLayoutAnimation.tsx";
import _modDef12393 from "../../../../_runtime/metro/12393__.js";
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
        state = invite.state;
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
({ ActivityIndicator: closure_7, ImageBackground: closure_8, View: closure_9 } = get_ActivityIndicator);
const InviteStates = fn(1085).InviteStates;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  parentContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: { marginVertical: 0, resizeMode: "cover" },
  cardContainer: null,
  cardContent: null,
  resolvingContainer: null,
};
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
let closure_13 = createStyles.createStyles(obj2);
const constants = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(5);
      const tmp2 = closure_13();
      const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
      if (cResult[0] !== token) {
        const obj3 = { color: token, size: "large" };
        const tmp7 = closure_1_11(React5, obj3);
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
      const tmp9 = closure_1_11(options, { style: tmp2.resolvingContainer, children: tmp4 });
      cResult[2] = tmp2.resolvingContainer;
      cResult[3] = tmp4;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj4 = { style: tmp2.resolvingContainer, children: tmp4 };
    }
  : () => {
      const tmp = closure_13();
      const obj2 = { style: tmp.resolvingContainer, children: null };
      obj2.children = closure_1_11(React5, {
        color: useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT),
        size: "large",
      });
      return closure_1_11(options, obj2);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (invite) => {
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
            const tmp37 = closure_11(closure_16, {});
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
          const tmp32 = closure_11(first(12384), obj3);
          cResult[7] = invite;
          cResult[8] = invite;
          cResult[9] = tmp32;
          tmp25 = tmp32;
          const tmp28 = first(12384);
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
          const tmp24 = closure_11(first(12388), obj4);
          cResult[10] = invite;
          cResult[11] = invite;
          cResult[12] = tmp24;
          tmp17 = tmp24;
          const tmp20 = first(12388);
        } else {
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp16 = closure_11(closure_16, {});
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
  : (invite) => {
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
        return closure_11(closure_16, {});
      } else if (constants.DETAILS === first) {
        const obj2 = {};
        const merged = Object.assign(invite);
        obj2.invite = invite;
        return closure_11(first(12384), obj2);
      } else if (tmp22.ERROR === first) {
        let obj = {};
        const merged1 = Object.assign(invite);
        obj.invite = invite;
        return closure_11(first(12388), obj);
      } else {
        return closure_11(closure_16, {});
      }
    };
ReactCompilerGating = fn(558);
let obj4 = {
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
  ? (invite) => {
      const cResult = c.c(34);
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
      const tmp9 = closure_13();
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
              if (cResult[17] === tmp14) {
                if (cResult[18] === tmp9.imageStyle) {
                  if (cResult[19] === tmp19) {
                    let tmp20 = cResult[20];
                  }
                  if (cResult[21] === tmp4) {
                    if (cResult[22] === tmp5) {
                      let tmp24 = cResult[23];
                    }
                    if (cResult[24] === tmp9.cardContent) {
                      if (cResult[25] === tmp24) {
                        let tmp31 = cResult[26];
                      }
                      if (cResult[27] === tmp9.cardContainer) {
                        if (cResult[28] === tmp31) {
                          let tmp35 = cResult[29];
                        }
                        if (cResult[30] === tmp18) {
                          if (cResult[31] === tmp20) {
                            if (cResult[32] === tmp35) {
                              let tmp38 = cResult[33];
                            }
                            return tmp38;
                          }
                        }
                        const obj3 = { style: tmp18, children: null };
                        const items = [tmp20, tmp35];
                        obj3.children = items;
                        const tmp41 = __initData(options, obj3);
                        cResult[30] = tmp18;
                        cResult[31] = tmp20;
                        cResult[32] = tmp35;
                        cResult[33] = tmp41;
                        tmp38 = tmp41;
                      }
                      const obj5 = { style: tmp9.cardContainer, children: tmp31 };
                      const tmp37 = closure_1_11(Card.Card, obj5);
                      cResult[27] = tmp9.cardContainer;
                      cResult[28] = tmp31;
                      cResult[29] = tmp37;
                      tmp35 = tmp37;
                    }
                    const obj6 = { style: tmp9.cardContent, children: tmp24 };
                    const tmp34 = closure_1_11(options, obj6);
                    cResult[24] = tmp9.cardContent;
                    cResult[25] = tmp24;
                    cResult[26] = tmp34;
                    tmp31 = tmp34;
                  }
                  const obj7 = { invite: tmp4 };
                  const merged = Object.assign(tmp5);
                  const tmp30 = closure_1_11(closure_17, obj7);
                  cResult[21] = tmp4;
                  cResult[22] = tmp5;
                  cResult[23] = tmp30;
                  tmp24 = tmp30;
                }
              }
              const obj8 = { source: tmp14, imageStyle: tmp9.imageStyle, style: tmp19 };
              const tmp23 = closure_1_11(closure_1_8, obj8);
              cResult[17] = tmp14;
              cResult[18] = tmp9.imageStyle;
              cResult[19] = tmp19;
              cResult[20] = tmp23;
              tmp20 = tmp23;
            }
            const size = { height, width };
            cResult[14] = height;
            cResult[15] = width;
            cResult[16] = size;
            tmp19 = size;
          }
          const items1 = [tmp9.parentContainer, tmp17];
          cResult[11] = tmp9.parentContainer;
          cResult[12] = tmp17;
          cResult[13] = items1;
          tmp18 = items1;
        }
        const size1 = { height, width };
        cResult[8] = height;
        cResult[9] = width;
        cResult[10] = size1;
        tmp17 = size1;
      }
      let splash;
      if (guild != null) {
        splash = guild.splash;
      }
      if (null == splash) {
        let guildSplashSource = _modDef12393;
      } else {
        const obj9 = { id: null, splash: null, size: null };
        ({ id: obj4.id, splash: obj4.splash } = guild);
        const tmp10Result2 = AvatarUtilsDefault;
        obj9.size = width * ImageLoaderUtils.getDevicePixelRatio();
        guildSplashSource = tmp10Result2.getGuildSplashSource(obj9);
        const tmpResult = ImageLoaderUtils;
      }
      cResult[5] = guild;
      cResult[6] = width;
      cResult[7] = guildSplashSource;
      tmp14 = guildSplashSource;
      const tmp11 = useWindowDimensionsDefault();
    }
  : (invite) => {
      invite = invite.invite;
      const merged = Object.assign(invite, Object.assign({ invite: 0 }));
      const tmp2 = closure_13();
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
        let guildSplashSource = _modDef12393;
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
      const items1 = [
        closure_1_11(closure_1_8, { source: guildSplashSource, imageStyle: tmp2.imageStyle, style: { height, width } }),
      ];
      const obj7 = { style: tmp2.cardContainer, children: null };
      const obj8 = { style: tmp2.cardContent, children: null };
      const merged1 = Object.assign(merged);
      obj8.children = closure_1_11(closure_17, { invite });
      obj7.children = closure_1_11(options, obj8);
      items1[1] = closure_1_11(Card.Card, obj7);
      obj5.children = items1;
      return __initData(options, obj5);
    };
