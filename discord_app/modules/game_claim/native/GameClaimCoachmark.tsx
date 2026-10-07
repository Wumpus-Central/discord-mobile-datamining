// discord_app/modules/game_claim/native/GameClaimCoachmark.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ButtonConstants from "../../../design/components/Button/native/ButtonConstants.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import LinkExternalSmallIcon from "../../../design/components/Icon/native/redesign/generated/LinkExternalSmallIcon.tsx";
import useGameNameAndCoverImageDefault from "../../games/hooks/useGameNameAndCoverImage.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import GameClaimCardStack from "GameClaimCardStack.tsx";
import UnclaimedGamesActionCreators from "../UnclaimedGamesActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const GameClaimCardStackDefault = GameClaimCardStack;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ GuildFeatures: hasOwnProperty, RelativeMarketingURLs: metroRequire } = Constants);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_82 = nativeDefault.space.PX_8;
let closure_12 = 2 * nativeDefault.space.PX_12;
const createStyles = fn(4896);
let obj = {
  card: { padding: nativeDefault.space.PX_12 },
  closeButton: null,
  centeredText: null,
  body: null,
  cta: null,
};
let size = {
  position: "absolute",
  top: nativeDefault.space.PX_12,
  right: nativeDefault.space.PX_12,
  width: 24,
  height: 24,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
};
obj.closeButton = size;
obj.centeredText = { textAlign: "center" };
let obj3 = { padding: nativeDefault.space.PX_12 };
obj.body = { marginTop: nativeDefault.space.PX_4 };
let obj4 = { marginTop: nativeDefault.space.PX_4 };
obj.cta = { marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_claim/native/GameClaimCoachmark.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = markAsDismissed(576).c(36);
        ({ guild, markAsDismissed } = arg0);
        const tmp4 = closure_13();
        let obj = markAsDismissed(576);
        let first = markAsDismissed(16156).useUnclaimedGameIdsForGuild(guild.id)[0];
        if (first == null) {
          first = null;
        }
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = markAsDismissed(1126).intl;
          const stringResult = intl.string(markAsDismissed(1126).t.VQq92a);
          cResult[0] = stringResult;
          let first1 = stringResult;
        } else {
          first1 = cResult[0];
        }
        const obj2 = markAsDismissed(16156);
        ({ coverImageUrl, gameName } = useGameNameAndCoverImageDefault(first, first1));
        if (null == coverImageUrl) {
          return null;
        } else if (cResult[1] !== guild.features) {
          const features = guild.features;
          const hasItem = features.has(constants.VERIFIED);
          const intl2 = markAsDismissed(1126).intl;
          const string = intl2.string;
          let uUARXe = markAsDismissed(1126).t;
          if (hasItem) {
            uUARXe = uUARXe.uUARXe;
            let stringResult1 = string(uUARXe);
          } else {
            stringResult1 = string(uUARXe["0Dx29f"]);
          }
          guild = guild.features;
          cResult[1] = guild;
          cResult[2] = stringResult1;
        } else {
          if (cResult[3] !== markAsDismissed) {
            const fn = function p() {
              return markAsDismissed(ContentDismissActionType.USER_DISMISS);
            };
            cResult[3] = markAsDismissed;
            cResult[4] = fn;
            let tmp15 = fn;
          } else {
            tmp15 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp18 = closure_8(markAsDismissed(6024).XSmallIcon, { size: "sm", color: "text-default" });
            cResult[5] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[5];
          }
          if (cResult[6] === tmp4.closeButton) {
            if (cResult[7] === tmp15) {
              let tmp19 = cResult[8];
            }
            if (cResult[9] !== coverImageUrl) {
              let obj3 = { imageSrc: coverImageUrl };
              const tmp24 = closure_8(GameClaimCardStackDefault, obj3);
              cResult[9] = coverImageUrl;
              cResult[10] = tmp24;
              let tmp22 = tmp24;
            } else {
              tmp22 = cResult[10];
            }
            if (cResult[11] !== gameName) {
              const intl3 = markAsDismissed(1126).intl;
              let obj4 = { gameName };
              const formatResult = intl3.format(markAsDismissed(1126).t.Q11WTQ, obj4);
              cResult[11] = gameName;
              cResult[12] = formatResult;
              let tmp25 = formatResult;
            } else {
              tmp25 = cResult[12];
            }
            if (cResult[13] === tmp4.centeredText) {
              if (cResult[14] === tmp25) {
                let tmp27 = cResult[15];
              }
              if (cResult[16] === tmp4.body) {
                if (cResult[17] === tmp4.centeredText) {
                  let tmp30 = cResult[18];
                }
                if (cResult[19] === tmp10) {
                  if (cResult[20] === tmp30) {
                    let tmp31 = cResult[21];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = markAsDismissed(1126).intl;
                    const stringResult2 = intl4.string(markAsDismissed(1126).t["2u6ZlY"]);
                    const tmp38 = closure_8(markAsDismissed(8296).LinkExternalSmallIcon, {
                      size: "xs",
                      color: "white",
                    });
                    cResult[22] = stringResult2;
                    cResult[23] = tmp38;
                    let tmp35 = tmp38;
                    let tmp34 = stringResult2;
                  } else {
                    tmp34 = cResult[22];
                    tmp35 = cResult[23];
                  }
                  if (cResult[24] !== markAsDismissed) {
                    let obj5 = {
                      variant: "primary",
                      size: "sm",
                      text: tmp34,
                      icon: tmp35,
                      iconPosition: "end",
                      onPress: asyncGeneratorStep(async () => {
                        if (v3 === 2) {
                          v3 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp3 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            return { value: "IconComponent", done: null };
                          }
                        } else {
                          try {
                            v3 = 2;
                            if (0 === v1) {
                              if (arg0 === 1) {
                                v3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                v3 = 3;
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                markAsDismissed(constants2.TAKE_ACTION);
                                v1 = 1;
                                v3 = 1;
                                const obj5 = {
                                  value: v1(6830).redirectDeveloperPortalWithHandoffToken(
                                    constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY,
                                    v3(6834).LoginHandoffSource.GAME_CLAIM,
                                  ),
                                  done: false,
                                };
                                return obj5;
                              }
                            } else if (arg0 === 1) {
                              v3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v3 = 3;
                              const obj = { value, done: true };
                              return obj;
                            } else {
                              v3 = 3;
                              return { value: "IconComponent", done: null };
                            }
                          } catch (tmp12) {
                            v3 = tmp;
                            throw tmp12;
                          }
                        }
                      }),
                    };
                    const tmp42 = closure_8(markAsDismissed(5601).Button, obj5);
                    cResult[24] = markAsDismissed;
                    cResult[25] = tmp42;
                    let tmp39 = tmp42;
                  } else {
                    tmp39 = cResult[25];
                  }
                  if (cResult[26] === tmp4.cta) {
                    if (cResult[27] === tmp39) {
                      let tmp43 = cResult[28];
                    }
                    if (cResult[29] === tmp4.card) {
                      if (cResult[30] === tmp27) {
                        if (cResult[31] === tmp31) {
                          if (cResult[32] === tmp43) {
                            if (cResult[33] === tmp19) {
                              if (cResult[34] === tmp22) {
                                let tmp47 = cResult[35];
                              }
                              return tmp47;
                            }
                          }
                        }
                      }
                    }
                    const obj6 = { variant: "secondary", style: tmp4.card, children: null };
                    const items = [tmp19, tmp22, tmp27, tmp31, tmp43];
                    obj6.children = items;
                    const tmp49 = closure_9(markAsDismissed(6002).Card, obj6);
                    cResult[29] = tmp4.card;
                    cResult[30] = tmp27;
                    cResult[31] = tmp31;
                    cResult[32] = tmp43;
                    cResult[33] = tmp19;
                    cResult[34] = tmp22;
                    cResult[35] = tmp49;
                    tmp47 = tmp49;
                  }
                  const obj7 = { style: tmp4.cta, children: tmp39 };
                  const tmp46 = closure_8(View, obj7);
                  cResult[26] = tmp4.cta;
                  cResult[27] = tmp39;
                  cResult[28] = tmp46;
                  tmp43 = tmp46;
                }
                const obj8 = { variant: "text-sm/normal", color: "text-overlay-light", style: tmp30, children: tmp10 };
                const tmp33 = closure_8(markAsDismissed(4892).Text, obj8);
                cResult[19] = tmp10;
                cResult[20] = tmp30;
                cResult[21] = tmp33;
                tmp31 = tmp33;
              }
              const items1 = [,];
              ({ body: arr[0], centeredText: arr[1] } = tmp4);
              cResult[16] = tmp4.body;
              cResult[17] = tmp4.centeredText;
              cResult[18] = items1;
              tmp30 = items1;
            }
            const obj9 = {
              variant: "text-md/medium",
              color: "text-overlay-light",
              style: tmp4.centeredText,
              children: tmp25,
            };
            const tmp29 = closure_8(markAsDismissed(4892).Text, obj9);
            cResult[13] = tmp4.centeredText;
            cResult[14] = tmp25;
            cResult[15] = tmp29;
            tmp27 = tmp29;
          }
          const obj10 = { accessibilityRole: "button", onPress: tmp15, style: tmp4.closeButton, children: tmp16 };
          const tmp21 = closure_8(markAsDismissed(5916).PressableOpacity, obj10);
          cResult[6] = tmp4.closeButton;
          cResult[7] = tmp15;
          cResult[8] = tmp21;
          tmp19 = tmp21;
        }
        const tmp9 = useGameNameAndCoverImageDefault(first, first1);
      }
    : (arg0) => {
        ({ guild, markAsDismissed: require } = arg0);
        const tmp = closure_13();
        let first = UnclaimedGamesActionCreators.useUnclaimedGameIdsForGuild(guild.id)[0];
        if (first == null) {
          first = null;
        }
        const intl = util.intl;
        const coverImageUrl = useGameNameAndCoverImageDefault(first, intl.string(util.t.VQq92a)).coverImageUrl;
        if (null == coverImageUrl) {
          return null;
        } else {
          const features = guild.features;
          const hasItem = features.has(constants.VERIFIED);
          const intl4 = util.intl;
          const string = intl4.string;
          const t = util.t;
          if (hasItem) {
            let stringResult = string(t.uUARXe);
          } else {
            stringResult = string(t["0Dx29f"]);
          }
          const obj2 = { variant: "secondary", style: tmp.card, children: null };
          let obj3 = {
            accessibilityRole: "button",
            onPress() {
              return require(ContentDismissActionType.USER_DISMISS);
            },
            style: tmp.closeButton,
            children: closure_8(XSmallIcon.XSmallIcon, { size: "sm", color: "text-default" }),
          };
          const items = [closure_8(Pressables.PressableOpacity, obj3), , , ,];
          let obj4 = { imageSrc: coverImageUrl };
          items[1] = closure_8(GameClaimCardStackDefault, obj4);
          let obj5 = {
            variant: "text-md/medium",
            color: "text-overlay-light",
            style: tmp.centeredText,
            children: null,
          };
          const intl2 = util.intl;
          const obj6 = { gameName: tmp8 };
          obj5.children = intl2.format(util.t.Q11WTQ, obj6);
          items[2] = closure_8(Text_Text.Text, obj5);
          const obj7 = { variant: "text-sm/normal", color: "text-overlay-light", style: null, children: null };
          const items1 = [,];
          ({ body: arr2[0], centeredText: arr2[1] } = tmp);
          obj7.style = items1;
          obj7.children = stringResult;
          items[3] = closure_8(Text_Text.Text, obj7);
          const obj8 = { style: tmp.cta, children: null };
          const obj9 = { variant: "primary", size: "sm", text: null, icon: null, iconPosition: "end", onPress: null };
          const intl3 = util.intl;
          obj9.text = intl3.string(util.t["2u6ZlY"]);
          obj9.icon = closure_8(LinkExternalSmallIcon.LinkExternalSmallIcon, { size: "xs", color: "white" });
          obj9.onPress = asyncGeneratorStep(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                v3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    require(constants2.TAKE_ACTION);
                    v1 = 1;
                    v3 = 1;
                    const obj5 = {
                      value: v1(6830).redirectDeveloperPortalWithHandoffToken(
                        constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY,
                        v3(6834).LoginHandoffSource.GAME_CLAIM,
                      ),
                      done: false,
                    };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp12) {
                v3 = tmp;
                throw tmp12;
              }
            }
          });
          obj8.children = closure_8(components_Button_Button.Button, obj9);
          items[4] = closure_8(View, obj8);
          obj2.children = items;
          return closure_9(Card.Card, obj2);
        }
        const tmp6Result = useGameNameAndCoverImageDefault(first, intl.string(util.t.VQq92a));
      },
);
export const GAME_CLAIM_NOTICE_MARGIN_TOP = PX_8;
export const GAME_CLAIM_NOTICE_MARGIN_BOTTOM = PX_82;
export const getScaledGameClaimNoticeHeight = function getScaledGameClaimNoticeHeight(fontScale) {
  const sum = PX_8 + closure_12;
  const sum1 = sum + GameClaimCardStack.CARD_STACK_HEIGHT;
  const sum2 = sum1 + useScaledTextLineHeight.scaleTextLineHeight("text-md/medium", fontScale);
  const sum3 = sum2 + nativeDefault.space.PX_4;
  const result = 2 * useScaledTextLineHeight.scaleTextLineHeight("text-sm/normal", fontScale);
  const sum4 = sum3 + result + nativeDefault.space.PX_8;
  return sum4 + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_82;
};
