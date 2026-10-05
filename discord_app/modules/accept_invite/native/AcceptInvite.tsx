// === Module 12383: AcceptInvite ===

// Module 12383 (AcceptInvite)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1437 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useToken from "useToken" /* 4580 */;
import Card_Card from "Card/Card" /* 5995 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6473 */;
import AssetRegistryDefault from "AssetRegistry" /* 12393 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
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
                            const obj = GlobalUtils;
                            obj.assertNever(state);
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
({ ActivityIndicator: metroImportDefault, ImageBackground: metroImportAll, View: c9 } = react_native);
const InviteStates = Constants.InviteStates;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { parentContainer: obj2, imageStyle: { marginVertical: 0, resizeMode: "cover" }, cardContainer: obj3, cardContent: { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }, resolvingContainer: { padding: 64 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_13 = createStyles(obj);
const constants = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp2 = closure_13();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  if (cResult[0] !== token) {
    const obj3 = { color: token, size: "large" };
    const tmp7 = unpackModuleId(metroImportDefault, obj3);
    cResult[0] = token;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp2.resolvingContainer) {
    let tmp8;
    if (cResult[3] === tmp4) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj4 = { style: tmp2.resolvingContainer, children: tmp4 };
  const tmp9 = unpackModuleId(React4, obj4);
  cResult[2] = tmp2.resolvingContainer;
  cResult[3] = tmp4;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (() => {
  let obj3;
  const tmp = closure_13();
  const obj2 = { style: tmp.resolvingContainer, children: unpackModuleId(metroImportDefault, obj3) };
  const obj = useToken;
  obj3 = { color: obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT), size: "large" };
  return unpackModuleId(React4, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((invite) => {
  let closure_2;
  let first;
  let tmp3;
  let tmp = dependencyMap;
  let obj = invite(576);
  const cResult = obj.c(14);
  invite = invite.invite;
  if (cResult[0] !== invite) {
    const tmp5 = getInviteState(invite);
    cResult[0] = invite;
    cResult[1] = tmp5;
    tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  [first, dependencyMap] = react.useState(tmp3);
  if (cResult[2] === first) {
    let tmp8;
    let tmp9;
    if (cResult[3] === invite) {
      tmp8 = cResult[4];
      tmp9 = cResult[5];
    }
    const effect = react.useEffect(tmp8, tmp9);
    if (null == invite) {
      let tmp34;
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp37 = closure_11(closure_16, {});
        cResult[6] = tmp37;
        tmp34 = tmp37;
      } else {
        tmp34 = cResult[6];
      }
      return tmp34;
    } else if (constants.DETAILS === first) {
      if (cResult[7] === invite) {
        let tmp25;
        if (cResult[8] === invite) {
          tmp25 = cResult[9];
        }
        return tmp25;
      }
      const obj3 = { invite };
      const tmp28 = first(12384);
      const merged = Object.assign(invite);
      const tmp32 = closure_11(tmp28, obj3);
      cResult[7] = invite;
      cResult[8] = invite;
      cResult[9] = tmp32;
      tmp25 = tmp32;
    } else if (tmp38.ERROR === first) {
      if (cResult[10] === invite) {
        let tmp17;
        if (cResult[11] === invite) {
          tmp17 = cResult[12];
        }
        return tmp17;
      }
      const obj4 = { invite };
      const tmp20 = first(12388);
      const merged1 = Object.assign(invite);
      const tmp24 = closure_11(tmp20, obj4);
      cResult[10] = invite;
      cResult[11] = invite;
      cResult[12] = tmp24;
      tmp17 = tmp24;
    } else {
      let tmp13;
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = closure_11(closure_16, {});
        cResult[13] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[13];
      }
      return tmp13;
    }
  }
  const fn = function u() {
    const tmp = getInviteState(invite);
    if (tmp !== first) {
      const obj = DeprecatedLayoutAnimation;
      const result = obj.DeprecatedLayoutAnimation();
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
}) : ((invite) => {
  let closure_2;
  let first;
  invite = invite.invite;
  [first, dependencyMap] = react.useState(getInviteState(invite));
  const items = [invite, first];
  const effect = react.useEffect(() => {
    const tmp = getInviteState(invite);
    if (tmp !== first) {
      const obj = DeprecatedLayoutAnimation;
      const result = obj.DeprecatedLayoutAnimation();
      closure_2(tmp);
    }
  }, items);
  if (null == invite) {
    return closure_11(closure_16, {});
  } else if (constants.DETAILS === first) {
    const obj2 = { invite };
    const tmp16 = first(12384);
    const merged = Object.assign(invite);
    return closure_11(tmp16, obj2);
  } else if (tmp22.ERROR === first) {
    let obj = { invite };
    const tmp9 = first(12388);
    const merged1 = Object.assign(invite);
    return closure_11(tmp9, obj);
  } else {
    return closure_11(closure_16, {});
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((invite) => {
  let guildSplashSource;
  let height;
  let items;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmpResult;
  let width;
  const obj = react2;
  const cResult = obj.c(34);
  if (cResult[0] !== invite) {
    invite = invite.invite;
    const tmp8 = _objectWithoutProperties(invite, closure_3);
    cResult[0] = invite;
    cResult[1] = invite;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = invite;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_13();
  ({ height, width } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  if (cResult[3] !== tmp4) {
    let obj2 = tmp4;
    if (tmp4 == null) {
      obj2 = {};
    }
    cResult[3] = tmp4;
    cResult[4] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[4];
  }
  const guild = tmp12.guild;
  if (cResult[5] === guild) {
    let tmp14;
    if (cResult[6] === width) {
      tmp14 = cResult[7];
    }
    if (cResult[8] === height) {
      let tmp18;
      if (cResult[9] === width) {
        tmp18 = cResult[10];
      }
      if (cResult[11] === tmp9.parentContainer) {
        let tmp19;
        if (cResult[12] === tmp18) {
          tmp19 = cResult[13];
        }
        if (cResult[14] === height) {
          let tmp20;
          if (cResult[15] === width) {
            tmp20 = cResult[16];
          }
          if (cResult[17] === tmp14) {
            if (cResult[18] === tmp9.imageStyle) {
              let tmp21;
              if (cResult[19] === tmp20) {
                tmp21 = cResult[20];
              }
              if (cResult[21] === tmp4) {
                let tmp25;
                if (cResult[22] === tmp5) {
                  tmp25 = cResult[23];
                }
                if (cResult[24] === tmp9.cardContent) {
                  let tmp32;
                  if (cResult[25] === tmp25) {
                    tmp32 = cResult[26];
                  }
                  if (cResult[27] === tmp9.cardContainer) {
                    let tmp36;
                    if (cResult[28] === tmp32) {
                      tmp36 = cResult[29];
                    }
                    if (cResult[30] === tmp19) {
                      if (cResult[31] === tmp21) {
                        let tmp39;
                        if (cResult[32] === tmp36) {
                          tmp39 = cResult[33];
                        }
                        return tmp39;
                      }
                    }
                    const obj4 = { style: tmp19, children: items };
                    items = [tmp21, tmp36];
                    const tmp42 = closure_12(React4, obj4);
                    cResult[30] = tmp19;
                    cResult[31] = tmp21;
                    cResult[32] = tmp36;
                    cResult[33] = tmp42;
                    tmp39 = tmp42;
                  }
                  const obj5 = { style: tmp9.cardContainer, children: tmp32 };
                  const tmp38 = unpackModuleId(Card_Card.Card, obj5);
                  cResult[27] = tmp9.cardContainer;
                  cResult[28] = tmp32;
                  cResult[29] = tmp38;
                  tmp36 = tmp38;
                }
                const obj6 = { style: tmp9.cardContent, children: tmp25 };
                const tmp35 = unpackModuleId(React4, obj6);
                cResult[24] = tmp9.cardContent;
                cResult[25] = tmp25;
                cResult[26] = tmp35;
                tmp32 = tmp35;
              }
              const obj7 = { invite: tmp4 };
              const merged = Object.assign(tmp5);
              const tmp31 = unpackModuleId(closure_17, obj7);
              cResult[21] = tmp4;
              cResult[22] = tmp5;
              cResult[23] = tmp31;
              tmp25 = tmp31;
            }
          }
          const obj8 = { source: tmp14, imageStyle: tmp9.imageStyle, style: tmp20 };
          const tmp24 = unpackModuleId(metroImportAll, obj8);
          cResult[17] = tmp14;
          cResult[18] = tmp9.imageStyle;
          cResult[19] = tmp20;
          cResult[20] = tmp24;
          tmp21 = tmp24;
        }
        size = { height, width };
        cResult[14] = height;
        cResult[15] = width;
        cResult[16] = size;
        tmp20 = size;
      }
      const items1 = [tmp9.parentContainer, tmp18];
      cResult[11] = tmp9.parentContainer;
      cResult[12] = tmp18;
      cResult[13] = items1;
      tmp19 = items1;
    }
    const size1 = { height, width };
    cResult[8] = height;
    cResult[9] = width;
    cResult[10] = size1;
    tmp18 = size1;
  }
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null == splash) {
    guildSplashSource = AssetRegistryDefault;
  } else {
    ({ id: obj3.id, splash: obj3.splash } = guild);
    const obj9 = { id: null, splash: null, size: width * tmpResult.getDevicePixelRatio() };
    const getGuildSplashSource = AvatarUtilsDefault.getGuildSplashSource;
    AvatarUtilsDefault;
    tmpResult = ImageLoaderUtils;
    guildSplashSource = getGuildSplashSource(obj9);
  }
  cResult[5] = guild;
  cResult[6] = width;
  cResult[7] = guildSplashSource;
  tmp14 = guildSplashSource;
}) : ((invite) => {
  let guildSplashSource;
  let height;
  let items;
  let items1;
  let obj14;
  let obj3;
  let obj8;
  let width;
  invite = invite.invite;
  const merged = Object.assign(invite, Object.assign({ invite: 0 }));
  const tmp2 = closure_13();
  ({ height, width } = useWindowDimensionsDefault());
  let obj = invite;
  useWindowDimensionsDefault();
  if (invite == null) {
    obj = {};
  }
  const guild = obj.guild;
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null == splash) {
    guildSplashSource = AssetRegistryDefault;
  } else {
    ({ id: obj2.id, splash: obj2.splash } = guild);
    const obj4 = { id: null, splash: null, size: width * obj3.getDevicePixelRatio() };
    const getGuildSplashSource = AvatarUtilsDefault.getGuildSplashSource;
    AvatarUtilsDefault;
    obj3 = ImageLoaderUtils;
    guildSplashSource = getGuildSplashSource(obj4);
  }
  const obj5 = { style: items, children: items1 };
  items = [tmp2.parentContainer, { height, width }];
  items1 = [, ];
  const obj6 = { source: guildSplashSource, imageStyle: tmp2.imageStyle, style: { height, width } };
  items1[0] = unpackModuleId(metroImportAll, obj6);
  const obj7 = { style: tmp2.cardContainer, children: unpackModuleId(React4, obj8) };
  obj8 = { style: tmp2.cardContent, children: unpackModuleId(closure_17, obj14) };
  obj14 = { invite };
  const Card = Card_Card.Card;
  const merged1 = Object.assign(merged);
  items1[1] = unpackModuleId(Card, obj7);
  return closure_12(React4, obj5);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default tmp5;