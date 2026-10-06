// === Module 16154: GameClaimCoachmark ===

// Module 16154 (GameClaimCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import ButtonConstants from "ButtonConstants" /* 5607 */;
import Pressables from "Pressables" /* 5916 */;
import Card_Card from "Card/Card" /* 6002 */;
import XSmallIcon from "XSmallIcon" /* 6024 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8296 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 8619 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10736 */;
import GameClaimCardStack from "GameClaimCardStack" /* 16155 */;
import UnclaimedGamesActionCreators from "UnclaimedGamesActionCreators" /* 16156 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GameClaimCardStackDefault = GameClaimCardStack;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ GuildFeatures: hasOwnProperty, RelativeMarketingURLs: metroRequire } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_82 = nativeDefault.space.PX_8;
let closure_12 = 2 * nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { card: obj2, closeButton: size, centeredText: { textAlign: "center" }, body: obj3, cta: obj4 };
obj2 = { padding: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj3 = { marginTop: nativeDefault.space.PX_4 };
obj4 = { marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let coverImageUrl;
  let first1;
  let gameName;
  let guild;
  let items;
  let markAsDismissed;
  let obj = markAsDismissed(576);
  const cResult = obj.c(36);
  ({ guild, markAsDismissed } = arg0);
  const tmp4 = closure_13();
  let obj2 = markAsDismissed(16156);
  let first = obj2.useUnclaimedGameIdsForGuild(guild.id)[0];
  if (first == null) {
    first = null;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = markAsDismissed(1126).intl;
    const stringResult = intl.string(markAsDismissed(1126).t.VQq92a);
    cResult[0] = stringResult;
    first1 = stringResult;
  } else {
    first1 = cResult[0];
  }
  ({ coverImageUrl, gameName } = useGameNameAndCoverImageDefault(first, first1));
  useGameNameAndCoverImageDefault(first, first1);
  if (null == coverImageUrl) {
    return null;
  } else {
    let tmp10;
    let tmp14;
    let tmp15;
    if (cResult[1] !== guild.features) {
      let stringResult1;
      const features = guild.features;
      const hasItem = features.has(constants.VERIFIED);
      const intl2 = markAsDismissed(1126).intl;
      const string = intl2.string;
      const t = markAsDismissed(1126).t;
      if (hasItem) {
        stringResult1 = string(t.uUARXe);
      } else {
        stringResult1 = string(t["0Dx29f"]);
      }
      cResult[1] = guild.features;
      cResult[2] = stringResult1;
      tmp10 = stringResult1;
    } else {
      tmp10 = cResult[2];
    }
    const card = tmp4.card;
    if (cResult[3] !== markAsDismissed) {
      const fn = function p() {
        return markAsDismissed(ContentDismissActionType.USER_DISMISS);
      };
      cResult[3] = markAsDismissed;
      cResult[4] = fn;
      tmp14 = fn;
    } else {
      tmp14 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = closure_8(markAsDismissed(6024).XSmallIcon, { size: "sm", color: "text-default" });
      cResult[5] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[5];
    }
    if (cResult[6] === tmp4.closeButton) {
      let tmp18;
      let tmp21;
      let tmp24;
      if (cResult[7] === tmp14) {
        tmp18 = cResult[8];
      }
      if (cResult[9] !== coverImageUrl) {
        let obj3 = { imageSrc: coverImageUrl };
        const tmp23 = closure_8(GameClaimCardStackDefault, obj3);
        cResult[9] = coverImageUrl;
        cResult[10] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[10];
      }
      const centeredText = tmp4.centeredText;
      if (cResult[11] !== gameName) {
        const intl3 = markAsDismissed(1126).intl;
        let obj4 = { gameName };
        const formatResult = intl3.format(markAsDismissed(1126).t.Q11WTQ, obj4);
        cResult[11] = gameName;
        cResult[12] = formatResult;
        tmp24 = formatResult;
      } else {
        tmp24 = cResult[12];
      }
      if (cResult[13] === tmp4.centeredText) {
        let tmp26;
        if (cResult[14] === tmp24) {
          tmp26 = cResult[15];
        }
        if (cResult[16] === tmp4.body) {
          let tmp29;
          if (cResult[17] === tmp4.centeredText) {
            tmp29 = cResult[18];
          }
          if (cResult[19] === tmp10) {
            let tmp30;
            let tmp34;
            let tmp33;
            let tmp38;
            if (cResult[20] === tmp29) {
              tmp30 = cResult[21];
            }
            const _Symbol2 = Symbol;
            const cta = tmp4.cta;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = markAsDismissed(1126).intl;
              const stringResult2 = intl4.string(markAsDismissed(1126).t["2u6ZlY"]);
              const tmp37 = closure_8(markAsDismissed(8296).LinkExternalSmallIcon, { size: "xs", color: "white" });
              cResult[22] = stringResult2;
              cResult[23] = tmp37;
              tmp34 = tmp37;
              tmp33 = stringResult2;
            } else {
              tmp33 = cResult[22];
              tmp34 = cResult[23];
            }
            if (cResult[24] !== markAsDismissed) {
              let obj5 = {
                variant: "primary",
                size: "sm",
                text: tmp33,
                icon: tmp34,
                iconPosition: "end",
                onPress: _asyncToGenerator(async () => {
                              let v1;
                              let v3;
                              if (v3 === 2) {
                                v3 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp2 === 3) {
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
                                      const obj2 = v1(dependencyMap[21]);
                                      v1 = 1;
                                      v3 = 1;
                                      const obj5 = { value: obj2.redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY, v3(dependencyMap[22]).LoginHandoffSource.GAME_CLAIM), done: false };
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
                                } catch (tmp11) {
                                  v3 = 3;
                                  throw tmp11;
                                }
                              }
                            })
              };
              const Button = markAsDismissed(5601).Button;
              const tmp41 = closure_8(Button, obj5);
              cResult[24] = markAsDismissed;
              cResult[25] = tmp41;
              tmp38 = tmp41;
            } else {
              tmp38 = cResult[25];
            }
            if (cResult[26] === tmp4.cta) {
              let tmp42;
              if (cResult[27] === tmp38) {
                tmp42 = cResult[28];
              }
              if (cResult[29] === tmp4.card) {
                if (cResult[30] === tmp26) {
                  if (cResult[31] === tmp30) {
                    if (cResult[32] === tmp42) {
                      if (cResult[33] === tmp18) {
                        let tmp46;
                        if (cResult[34] === tmp21) {
                          tmp46 = cResult[35];
                        }
                        return tmp46;
                      }
                    }
                  }
                }
              }
              const obj6 = { variant: "secondary", style: card, children: items };
              items = [tmp18, tmp21, tmp26, tmp30, tmp42];
              const tmp48 = closure_9(markAsDismissed(6002).Card, obj6);
              cResult[29] = tmp4.card;
              cResult[30] = tmp26;
              cResult[31] = tmp30;
              cResult[32] = tmp42;
              cResult[33] = tmp18;
              cResult[34] = tmp21;
              cResult[35] = tmp48;
              tmp46 = tmp48;
            }
            const obj7 = { style: cta, children: tmp38 };
            const tmp45 = closure_8(View, obj7);
            cResult[26] = tmp4.cta;
            cResult[27] = tmp38;
            cResult[28] = tmp45;
            tmp42 = tmp45;
          }
          const obj8 = { variant: "text-sm/normal", color: "text-overlay-light", style: tmp29, children: tmp10 };
          const tmp32 = closure_8(markAsDismissed(4892).Text, obj8);
          cResult[19] = tmp10;
          cResult[20] = tmp29;
          cResult[21] = tmp32;
          tmp30 = tmp32;
        }
        const items1 = [, ];
        ({ body: arr[0], centeredText: arr[1] } = tmp4);
        cResult[16] = tmp4.body;
        cResult[17] = tmp4.centeredText;
        cResult[18] = items1;
        tmp29 = items1;
      }
      const obj9 = { variant: "text-md/medium", color: "text-overlay-light", style: centeredText, children: tmp24 };
      const tmp28 = closure_8(markAsDismissed(4892).Text, obj9);
      cResult[13] = tmp4.centeredText;
      cResult[14] = tmp24;
      cResult[15] = tmp28;
      tmp26 = tmp28;
    }
    const obj10 = { accessibilityRole: "button", onPress: tmp14, style: tmp4.closeButton, children: tmp15 };
    const tmp20 = closure_8(markAsDismissed(5916).PressableOpacity, obj10);
    cResult[6] = tmp4.closeButton;
    cResult[7] = tmp14;
    cResult[8] = tmp20;
    tmp18 = tmp20;
  }
}) : ((arg0) => {
  let Button;
  let guild;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj6;
  let obj9;
  ({ guild, markAsDismissed: require } = arg0);
  const tmp = closure_13();
  let obj = UnclaimedGamesActionCreators;
  let first = obj.useUnclaimedGameIdsForGuild(guild.id)[0];
  if (first == null) {
    first = null;
  }
  const tmp6 = useGameNameAndCoverImageDefault;
  const intl = intl5.intl;
  const coverImageUrl = tmp6(first, intl.string(intl5.t.VQq92a)).coverImageUrl;
  tmp6(first, intl.string(intl5.t.VQq92a));
  if (null == coverImageUrl) {
    return null;
  } else {
    let stringResult;
    const features = guild.features;
    const hasItem = features.has(constants.VERIFIED);
    const intl4 = intl5.intl;
    const string = intl4.string;
    const t = intl5.t;
    if (hasItem) {
      stringResult = string(t.uUARXe);
    } else {
      stringResult = string(t["0Dx29f"]);
    }
    let obj2 = { variant: "secondary", style: tmp.card, children: items };
    const Card = Card_Card.Card;
    let obj3 = {
      accessibilityRole: "button",
      onPress() {
          return require(ContentDismissActionType.USER_DISMISS);
        },
      style: tmp.closeButton,
      children: closure_8(XSmallIcon.XSmallIcon, { size: "sm", color: "text-default" })
    };
    const PressableOpacity = Pressables.PressableOpacity;
    items = [closure_8(PressableOpacity, obj3), , , , ];
    let obj4 = { imageSrc: coverImageUrl };
    items[1] = closure_8(GameClaimCardStackDefault, obj4);
    let obj5 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp.centeredText, children: intl2.format(intl5.t.Q11WTQ, obj6) };
    const Text = Text_Text.Text;
    intl2 = intl5.intl;
    obj6 = { gameName: tmp8 };
    items[2] = closure_8(Text, obj5);
    const obj7 = { variant: "text-sm/normal", color: "text-overlay-light", style: items1, children: stringResult };
    items1 = [, ];
    ({ body: arr2[0], centeredText: arr2[1] } = tmp);
    items[3] = closure_8(Text_Text.Text, obj7);
    const obj8 = { style: tmp.cta, children: closure_8(Button, obj9) };
    obj9 = {
      variant: "primary",
      size: "sm",
      text: intl3.string(intl5.t["2u6ZlY"]),
      icon: closure_8(LinkExternalSmallIcon.LinkExternalSmallIcon, { size: "xs", color: "white" }),
      iconPosition: "end",
      onPress: _asyncToGenerator(async () => {
          let v1;
          let v3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
                  const obj2 = v1(dependencyMap[21]);
                  v1 = 1;
                  v3 = 1;
                  const obj5 = { value: obj2.redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY, v3(dependencyMap[22]).LoginHandoffSource.GAME_CLAIM), done: false };
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
            } catch (tmp11) {
              v3 = 3;
              throw tmp11;
            }
          }
        })
    };
    Button = components_Button_Button.Button;
    intl3 = intl5.intl;
    items[4] = closure_8(View, obj8);
    return closure_9(Card, obj2);
  }
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/game_claim/native/GameClaimCoachmark.tsx");

export default memoResult;
export const GAME_CLAIM_NOTICE_MARGIN_TOP = PX_8;
export const GAME_CLAIM_NOTICE_MARGIN_BOTTOM = PX_82;
export const getScaledGameClaimNoticeHeight = function getScaledGameClaimNoticeHeight(fontScale) {
  const sum = PX_8 + closure_12;
  const sum1 = sum + GameClaimCardStack.CARD_STACK_HEIGHT;
  const obj = useScaledTextLineHeight;
  const sum2 = sum1 + obj.scaleTextLineHeight("text-md/medium", fontScale);
  const sum3 = sum2 + nativeDefault.space.PX_4;
  const obj2 = useScaledTextLineHeight;
  const result = 2 * obj2.scaleTextLineHeight("text-sm/normal", fontScale);
  const sum4 = sum3 + result + nativeDefault.space.PX_8;
  return sum4 + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_82;
};