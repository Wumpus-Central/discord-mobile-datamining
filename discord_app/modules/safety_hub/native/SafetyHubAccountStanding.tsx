// === Module 14556: SafetyHubAccountStanding ===

// Module 14556 (SafetyHubAccountStanding)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4792 */;
import CircleXIcon from "CircleXIcon" /* 4797 */;
import CircleErrorIcon from "CircleErrorIcon" /* 4800 */;
import _modDef4808 from "module_4808" /* 4808 */;
import Text_Text from "Text/Text" /* 4886 */;
import _modDef6427 from "module_6427" /* 6427 */;
import SafetyHubModels from "SafetyHubModels" /* 8094 */;
import SafetyHubAccountStandingLabels from "SafetyHubAccountStandingLabels" /* 14549 */;
import SafetyHubAccountStandingSubwayMarkerDefault from "SafetyHubAccountStandingSubwayMarker" /* 14557 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import SafetyHubStore from "SafetyHubStore" /* 8106 */;

require = fn;
const View = fn(17).View;
const SafetyHubLinks = fn(8093).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = 20;
let obj = { [fn(8094).AccountStandingState.ALL_GOOD]: { left: "0%" } };
let obj2 = { left: "25%", transform: null };
let items = [{ translateX: -0.5 * fn(14557).SUBWAY_MARKER_WIDTH }];
obj2.transform = items;
obj[fn(8094).AccountStandingState.LIMITED] = obj2;
let obj4 = { left: "50%", transform: null };
let obj3 = { translateX: -0.5 * fn(14557).SUBWAY_MARKER_WIDTH };
let items1 = [{ translateX: -0.5 * fn(14557).SUBWAY_MARKER_WIDTH }];
obj4.transform = items1;
obj[fn(8094).AccountStandingState.VERY_LIMITED] = obj4;
let obj6 = { left: "75%", transform: null };
let obj5 = { translateX: -0.5 * fn(14557).SUBWAY_MARKER_WIDTH };
let items2 = [{ translateX: -0.5 * fn(14557).SUBWAY_MARKER_WIDTH }];
obj6.transform = items2;
obj[fn(8094).AccountStandingState.AT_RISK] = obj6;
let obj8 = { left: "100%", transform: null };
let obj7 = { translateX: -0.5 * fn(14557).SUBWAY_MARKER_WIDTH };
let items3 = [{ translateX: -fn(14557).SUBWAY_MARKER_WIDTH }];
obj8.transform = items3;
obj[fn(8094).AccountStandingState.SUSPENDED] = obj8;
const createStyles = fn(4890);
let obj11 = { container: null, avatarBackground: null, good: null, limited: null, veryLimited: null, atRisk: null, suspended: null, body: null, bodyText: null, health: null, line: null, subwayMarker: null, icon: null };
let obj9 = { translateX: -fn(14557).SUBWAY_MARKER_WIDTH };
obj11.container = { display: "flex", flexDirection: "column", rowGap: 12, padding: 24, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md };
let obj12 = { display: "flex", flexDirection: "column", rowGap: 12, padding: 24, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md };
obj11.avatarBackground = { position: "relative", justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round };
let obj13 = { position: "relative", justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round };
obj11.good = { color: nativeDefault.colors.STATUS_POSITIVE };
let obj14 = { color: nativeDefault.colors.STATUS_POSITIVE };
obj11.limited = { color: nativeDefault.colors.STATUS_WARNING };
obj11.veryLimited = { color: "#FF7A00" };
let obj15 = { color: nativeDefault.colors.STATUS_WARNING };
obj11.atRisk = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
let obj16 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj11.suspended = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj11.body = { display: "flex", rowGap: 40, width: "100%" };
let obj17 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj11.bodyText = { rowGap: nativeDefault.space.PX_8 };
obj11.health = { position: "relative", left: 0, right: 0, marginBottom: 18 };
let size = { height: 3, width: "100%", position: "absolute", top: 8.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj11.line = size;
obj11.subwayMarker = { position: "absolute" };
let obj18 = { rowGap: nativeDefault.space.PX_8 };
obj11.icon = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_13 = createStyles.createStyles(obj11);
const ReactCompilerGating = fn(558);
let obj19 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStanding.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first(576).c(76);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const accountStanding = SafetyHubStore.getAccountStanding();
    cResult[0] = accountStanding;
    first = accountStanding;
  } else {
    first = cResult[0];
  }
  [first1, dependencyMap] = noop.useState(0);
  const tmp9 = closure_13();
  _slicedToArray = tmp9;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    ({ TOS_LINK: obj2.termsOfService, COMMUNITY_GUIDELINES: obj2.communityGuidelines } = SafetyHubLinks);
    const formatResult = intl.format(tmp(1126).t.pEdBD4, { termsOfService: null, communityGuidelines: null });
    cResult[1] = formatResult;
    let tmp10 = formatResult;
    let obj3 = { termsOfService: null, communityGuidelines: null };
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== tmp9.good) {
    let obj4 = { title: tmp(1126).t.uaKrRi, description: tmp10, status: tmp(14549).ACCOUNT_STANDING_SHORT_STATUS[tmp(undefined, 8094).AccountStandingState.ALL_GOOD], style: tmp9.good, CustomIcon: tmp(4792).CircleCheckIcon };
    cResult[2] = tmp9.good;
    cResult[3] = obj4;
    let tmp13 = obj4;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(tmp(1126).t["774juc"]);
    cResult[4] = stringResult;
    let tmp14 = stringResult;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== tmp9.limited) {
    const obj5 = { title: tmp(1126).t.epkcmS, description: tmp14, status: tmp(14549).ACCOUNT_STANDING_SHORT_STATUS[tmp(undefined, 8094).AccountStandingState.LIMITED], style: tmp9.limited, CustomIcon: tmp(4800).CircleErrorIcon, iconSource: first1(4808) };
    cResult[5] = tmp9.limited;
    cResult[6] = obj5;
    let tmp16 = obj5;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(tmp(1126).t["T/Ufh9"]);
    cResult[7] = stringResult1;
    let tmp18 = stringResult1;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp9.veryLimited) {
    const obj6 = { title: tmp(1126).t.crzE2X, description: tmp18, status: tmp(14549).ACCOUNT_STANDING_SHORT_STATUS[tmp(undefined, 8094).AccountStandingState.VERY_LIMITED], style: tmp9.veryLimited, CustomIcon: tmp(4800).CircleErrorIcon, iconSource: first1(4808) };
    cResult[8] = tmp9.veryLimited;
    cResult[9] = obj6;
    let tmp20 = obj6;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult2 = intl4.string(tmp(1126).t["hbH+9S"]);
    cResult[10] = stringResult2;
    let tmp22 = stringResult2;
  } else {
    tmp22 = cResult[10];
  }
  if (cResult[11] !== tmp9.atRisk) {
    let obj7 = { title: tmp(1126).t.XRNVzO, description: tmp22, status: tmp(14549).ACCOUNT_STANDING_SHORT_STATUS[tmp(undefined, 8094).AccountStandingState.AT_RISK], style: tmp9.atRisk, CustomIcon: tmp(4800).CircleErrorIcon, iconSource: first1(4808) };
    cResult[11] = tmp9.atRisk;
    cResult[12] = obj7;
    let tmp24 = obj7;
  } else {
    tmp24 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1126).intl;
    const stringResult3 = intl5.string(tmp(1126).t["2liUvt"]);
    cResult[13] = stringResult3;
    let tmp26 = stringResult3;
  } else {
    tmp26 = cResult[13];
  }
  if (cResult[14] !== tmp9.suspended) {
    const obj8 = { title: tmp(1126).t.MExFkz, description: tmp26, status: tmp(14549).ACCOUNT_STANDING_SHORT_STATUS[tmp(undefined, 8094).AccountStandingState.SUSPENDED], style: tmp9.suspended, CustomIcon: tmp(4797).CircleXIcon, iconSource: first1(6427) };
    cResult[14] = tmp9.suspended;
    cResult[15] = obj8;
    let tmp28 = obj8;
  } else {
    tmp28 = cResult[15];
  }
  if (cResult[16] === tmp28) {
    if (cResult[17] === tmp13) {
      if (cResult[18] === tmp16) {
        if (cResult[19] === tmp20) {
          if (cResult[20] === tmp24) {
            let tmp30 = cResult[21];
          }
          noop = tmp30;
          if (cResult[22] !== tmp30) {
            const _Object = Object;
            const entries = Object.entries(tmp30);
            cResult[22] = tmp30;
            cResult[23] = entries;
            let arr = entries;
          } else {
            arr = cResult[23];
          }
          if (cResult[24] === tmp30) {
            if (cResult[25] === first1) {
              if (cResult[26] === tmp9.icon) {
                if (cResult[27] === tmp9.subwayMarker) {
                  if (cResult[28] === arr) {
                    let tmp32 = cResult[29];
                  }
                  const _Symbol = Symbol;
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    let items = [UserStore];
                    const fn = function w() {
                      return currentUser.getCurrentUser();
                    };
                    cResult[30] = items;
                    cResult[31] = fn;
                    let tmp35 = fn;
                    let tmp34 = items;
                  } else {
                    tmp34 = cResult[30];
                    tmp35 = cResult[31];
                  }
                  const stateFromStores = tmp(504).useStateFromStores(tmp34, tmp35);
                  if (cResult[32] !== stateFromStores) {
                    if (null != stateFromStores) {
                      let userAvatarSource = first1(1402).getUserAvatarSource(stateFromStores);
                      const obj10 = first1(1402);
                    } else {
                      userAvatarSource = first1(8467);
                    }
                    cResult[32] = stateFromStores;
                    cResult[33] = userAvatarSource;
                  } else {
                    ({ title, description, style } = tmp30[first.state]);
                    if (cResult[34] !== tmp9.container) {
                      const items1 = [tmp9.container];
                      cResult[34] = tmp9.container;
                      cResult[35] = items1;
                      let tmp44 = items1;
                    } else {
                      tmp44 = cResult[35];
                    }
                    let str;
                    if (stateFromStores != null) {
                      str = stateFromStores.username;
                    }
                    if (str == null) {
                      str = "";
                    }
                    if (cResult[36] === cResult[33]) {
                      if (cResult[37] === str) {
                        let tmp46 = cResult[38];
                      }
                      if (cResult[39] === tmp9.avatarBackground) {
                        if (cResult[40] === tmp46) {
                          let tmp49 = cResult[41];
                        }
                        const _Symbol2 = Symbol;
                        ({ body, bodyText } = tmp9);
                        if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                          const obj9 = { textAlign: "center" };
                          cResult[42] = obj9;
                          let tmp53 = obj9;
                        } else {
                          tmp53 = cResult[42];
                        }
                        if (cResult[43] === style) {
                          if (cResult[44] === title) {
                            if (cResult[48] !== cResult[45]) {
                              const obj11 = { variant: "heading-lg/medium", color: "text-default", style: tmp53, children: tmp54 };
                              const tmp60 = closure_9(tmp(4886).Text, obj11);
                              cResult[48] = tmp54;
                              cResult[49] = tmp60;
                              let tmp58 = tmp60;
                            } else {
                              tmp58 = cResult[49];
                            }
                            const _Symbol3 = Symbol;
                            if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj12 = { textAlign: "center" };
                              cResult[50] = obj12;
                              let tmp61 = obj12;
                            } else {
                              tmp61 = cResult[50];
                            }
                            if (cResult[51] !== description) {
                              const obj13 = { variant: "text-sm/medium", color: "text-muted", style: tmp61, children: description };
                              const tmp64 = closure_9(tmp(4886).Text, obj13);
                              cResult[51] = description;
                              cResult[52] = tmp64;
                              let tmp62 = tmp64;
                            } else {
                              tmp62 = cResult[52];
                            }
                            if (cResult[53] === tmp9.bodyText) {
                              if (cResult[54] === tmp58) {
                                if (cResult[55] === tmp62) {
                                  let tmp65 = cResult[56];
                                }
                                if (cResult[57] !== first1) {
                                  const obj14 = { height: first1 };
                                  cResult[57] = first1;
                                  cResult[58] = obj14;
                                  let tmp69 = obj14;
                                } else {
                                  tmp69 = cResult[58];
                                }
                                if (cResult[59] === tmp9.health) {
                                  if (cResult[60] === tmp69) {
                                    let tmp70 = cResult[61];
                                  }
                                  if (cResult[62] !== tmp9.line) {
                                    const obj15 = { style: tmp9.line };
                                    const tmp74 = closure_9(style, obj15);
                                    cResult[62] = tmp9.line;
                                    cResult[63] = tmp74;
                                    let tmp71 = tmp74;
                                  } else {
                                    tmp71 = cResult[63];
                                  }
                                  if (cResult[64] === tmp32) {
                                    if (cResult[65] === tmp70) {
                                      if (cResult[66] === tmp71) {
                                        let tmp75 = cResult[67];
                                      }
                                      if (cResult[68] === tmp9.body) {
                                        if (cResult[69] === tmp65) {
                                          if (cResult[70] === tmp75) {
                                            let tmp79 = cResult[71];
                                          }
                                          if (cResult[72] === tmp44) {
                                            if (cResult[73] === tmp49) {
                                              if (cResult[74] === tmp79) {
                                                let tmp83 = cResult[75];
                                              }
                                              return tmp83;
                                            }
                                          }
                                          const obj16 = { style: tmp44, children: null };
                                          const items2 = [tmp49, tmp79];
                                          obj16.children = items2;
                                          const tmp86 = closure_10(style, obj16);
                                          cResult[72] = tmp44;
                                          cResult[73] = tmp49;
                                          cResult[74] = tmp79;
                                          cResult[75] = tmp86;
                                          tmp83 = tmp86;
                                        }
                                      }
                                      const obj17 = { style: body, children: null };
                                      const items3 = [tmp65, tmp75];
                                      obj17.children = items3;
                                      const tmp82 = closure_10(style, obj17);
                                      cResult[68] = tmp9.body;
                                      cResult[69] = tmp65;
                                      cResult[70] = tmp75;
                                      cResult[71] = tmp82;
                                      tmp79 = tmp82;
                                    }
                                  }
                                  const obj18 = { style: tmp70, children: null };
                                  const items4 = [tmp71, tmp32];
                                  obj18.children = items4;
                                  const tmp78 = closure_10(style, obj18);
                                  cResult[64] = tmp32;
                                  cResult[65] = tmp70;
                                  cResult[66] = tmp71;
                                  cResult[67] = tmp78;
                                  tmp75 = tmp78;
                                }
                                const items5 = [tmp9.health, tmp69];
                                cResult[59] = tmp9.health;
                                cResult[60] = tmp69;
                                cResult[61] = items5;
                                tmp70 = items5;
                              }
                            }
                            const obj19 = { style: bodyText, children: null };
                            const items6 = [tmp58, tmp62];
                            obj19.children = items6;
                            const tmp68 = closure_10(style, obj19);
                            cResult[53] = tmp9.bodyText;
                            cResult[54] = tmp58;
                            cResult[55] = tmp62;
                            cResult[56] = tmp68;
                            tmp65 = tmp68;
                          }
                        }
                        if (cResult[46] !== style) {
                          function nt(children, arg1) {
                            return options(Text_Text.Text, { style, variant: "heading-lg/bold", children }, arg1);
                          }
                          cResult[46] = style;
                          cResult[47] = nt;
                          let tmp55 = nt;
                        } else {
                          tmp55 = cResult[47];
                        }
                        const intl6 = tmp(1126).intl;
                        const obj20 = { hook: tmp55 };
                        const formatResult1 = intl6.format(title, obj20);
                        cResult[43] = style;
                        cResult[44] = title;
                        cResult[45] = formatResult1;
                      }
                      const obj21 = { style: tmp9.avatarBackground, children: tmp46 };
                      const tmp52 = closure_9(style, obj21);
                      cResult[39] = tmp9.avatarBackground;
                      cResult[40] = tmp46;
                      cResult[41] = tmp52;
                      tmp49 = tmp52;
                    }
                    const obj22 = { source: cResult[33], size: tmp(1188).AvatarSizes.XXLARGE, "aria-label": str };
                    const tmp48 = closure_9(tmp(1188).Avatar, obj22);
                    cResult[36] = cResult[33];
                    cResult[37] = str;
                    cResult[38] = tmp48;
                    tmp46 = tmp48;
                  }
                  const tmpResult = tmp(504);
                }
              }
            }
          }
          const mapped = arr.map((item, index) => {
            const tmp = _slicedToArray(item, 2);
            const parsed = parseInt(tmp[0]);
            obj = { style: null, children: null };
            const items = [closure_3.subwayMarker, obj[parsed]];
            obj.style = items;
            const obj3 = { selectedIcon: null, style: null, status: null, isSelected: null, index: null, onLayout: null, size: null, numOptions: null };
            const obj4 = { style: null, color: null };
            const obj7 = {};
            const merged = Object.assign(closure_3.icon);
            obj7.width = size;
            obj7.height = size;
            obj4.style = obj7;
            obj4.color = tmp[1].style.color;
            obj3.selectedIcon = options(tmp[1].CustomIcon, obj4);
            ({ style: obj2.style, status: obj2.status } = tmp[1]);
            obj3.isSelected = parsed === first.state;
            obj3.index = index;
            obj3.onLayout = function onLayout(nativeEvent) {
              if (nativeEvent.nativeEvent.layout.height > first1) {
                closure_1_2(nativeEvent.nativeEvent.layout.height);
              }
            };
            obj3.size = size;
            obj3.numOptions = Object.keys(closure_4).length;
            obj.children = options(SafetyHubAccountStandingSubwayMarkerDefault, obj3, index);
            return options(View, obj, index);
          });
          cResult[24] = tmp30;
          cResult[25] = first1;
          cResult[26] = tmp9.icon;
          cResult[27] = tmp9.subwayMarker;
          cResult[28] = arr;
          cResult[29] = mapped;
          tmp32 = mapped;
        }
      }
    }
  }
  const obj23 = {};
  obj23[first(8094).AccountStandingState.ALL_GOOD] = tmp13;
  obj23[first(8094).AccountStandingState.LIMITED] = tmp16;
  obj23[first(8094).AccountStandingState.VERY_LIMITED] = tmp20;
  obj23[first(8094).AccountStandingState.AT_RISK] = tmp24;
  obj23[first(8094).AccountStandingState.SUSPENDED] = tmp28;
  cResult[16] = tmp28;
  cResult[17] = tmp13;
  cResult[18] = tmp16;
  cResult[19] = tmp20;
  cResult[20] = tmp24;
  cResult[21] = obj23;
  tmp30 = obj23;
  obj = first(576);
}) : (() => {
  const accountStanding = SafetyHubStore.getAccountStanding();
  [height, dependencyMap] = memo.useState(0);
  const tmp4 = closure_13();
  _slicedToArray = tmp4;
  let items = [tmp4];
  memo = memo.useMemo(() => {
    obj = {};
    const obj2 = { title: util.t.uaKrRi, description: null, status: null, style: null, CustomIcon: null };
    const intl = util.intl;
    obj2.description = intl.format(util.t.pEdBD4, { termsOfService: SafetyHubLinks.TOS_LINK, communityGuidelines: SafetyHubLinks.COMMUNITY_GUIDELINES });
    obj2.status = SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.ALL_GOOD];
    obj2.style = closure_3.good;
    obj2.CustomIcon = CircleCheckIcon.CircleCheckIcon;
    obj[SafetyHubModels.AccountStandingState.ALL_GOOD] = obj2;
    const obj4 = { title: util.t.epkcmS, description: null, status: null, style: null, CustomIcon: null, iconSource: null };
    const intl2 = util.intl;
    obj4.description = intl2.string(util.t["774juc"]);
    obj4.status = SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.LIMITED];
    obj4.style = closure_3.limited;
    obj4.CustomIcon = CircleErrorIcon.CircleErrorIcon;
    obj4.iconSource = _modDef4808;
    obj[SafetyHubModels.AccountStandingState.LIMITED] = obj4;
    const obj5 = { title: util.t.crzE2X, description: null, status: null, style: null, CustomIcon: null, iconSource: null };
    const intl3 = util.intl;
    obj5.description = intl3.string(util.t["T/Ufh9"]);
    obj5.status = SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.VERY_LIMITED];
    obj5.style = closure_3.veryLimited;
    obj5.CustomIcon = CircleErrorIcon.CircleErrorIcon;
    obj5.iconSource = _modDef4808;
    obj[SafetyHubModels.AccountStandingState.VERY_LIMITED] = obj5;
    const obj6 = { title: util.t.XRNVzO, description: null, status: null, style: null, CustomIcon: null, iconSource: null };
    const intl4 = util.intl;
    obj6.description = intl4.string(util.t["hbH+9S"]);
    obj6.status = SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.AT_RISK];
    obj6.style = closure_3.atRisk;
    obj6.CustomIcon = CircleErrorIcon.CircleErrorIcon;
    obj6.iconSource = _modDef4808;
    obj[SafetyHubModels.AccountStandingState.AT_RISK] = obj6;
    const obj7 = { title: util.t.MExFkz, description: null, status: null, style: null, CustomIcon: null, iconSource: null };
    const intl5 = util.intl;
    obj7.description = intl5.string(util.t["2liUvt"]);
    obj7.status = SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.SUSPENDED];
    obj7.style = closure_3.suspended;
    obj7.CustomIcon = CircleXIcon.CircleXIcon;
    obj7.iconSource = _modDef6427;
    obj[SafetyHubModels.AccountStandingState.SUSPENDED] = obj7;
    return obj;
  }, items);
  const items1 = [accountStanding, memo, height, tmp4];
  const memo1 = memo.useMemo(() => {
    const entries = Object.entries(memo);
    return entries.map((item, index) => {
      [tmp, tmp2] = item;
      const parsed = parseInt(tmp);
      obj = { style: null, children: null };
      const items = [closure_1_3.subwayMarker, closure_2_12[parsed]];
      obj.style = items;
      const obj3 = { selectedIcon: null, style: null, status: null, isSelected: null, index: null, onLayout: null, size: null, numOptions: null };
      const obj4 = { style: null, color: null };
      const obj7 = {};
      const merged = Object.assign(closure_1_3.icon);
      obj7.width = size;
      obj7.height = size;
      obj4.style = obj7;
      obj4.color = tmp2.style.color;
      obj3.selectedIcon = closure_2_9(tmp2.CustomIcon, obj4);
      ({ style: obj2.style, status: obj2.status } = tmp2);
      obj3.isSelected = parsed === state.state;
      obj3.index = index;
      obj3.onLayout = function onLayout(nativeEvent) {
        if (nativeEvent.nativeEvent.layout.height > closure_1_1) {
          closure_1_2(nativeEvent.nativeEvent.layout.height);
        }
      };
      obj3.size = size;
      obj3.numOptions = Object.keys(memo).length;
      obj.children = closure_2_9(first(closure_2[8]), obj3, index);
      return closure_2_9(style, obj, index);
    });
  }, items1);
  const items2 = [UserStore];
  const stateFromStores = accountStanding(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores) {
    let userAvatarSource = height(1402).getUserAvatarSource(stateFromStores);
    let obj2 = height(1402);
  } else {
    userAvatarSource = height(8467);
  }
  const style = tmp13.style;
  let obj3 = { style: null, children: null };
  const items3 = [tmp4.container];
  obj3.style = items3;
  let obj4 = { style: tmp4.avatarBackground, children: null };
  ({ title, description } = memo[accountStanding.state]);
  let obj5 = { source: userAvatarSource, size: accountStanding(1188).AvatarSizes.XXLARGE, "aria-label": null };
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  obj5["aria-label"] = str;
  obj4.children = closure_9(accountStanding(1188).Avatar, obj5);
  const items4 = [closure_9(style, obj4), ];
  let obj6 = { style: tmp4.body, children: null };
  let obj7 = { style: tmp4.bodyText, children: null };
  const obj8 = { variant: "heading-lg/medium", color: "text-default", style: { textAlign: "center" }, children: null };
  let intl = tmp7(1126).intl;
  obj8.children = intl.format(title, {
    hook(children, arg1) {
      return options(Text_Text.Text, { style, variant: "heading-lg/bold", children }, arg1);
    }
  });
  const items5 = [closure_9(accountStanding(4886).Text, obj8), closure_9(accountStanding(4886).Text, { variant: "text-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: description })];
  obj7.children = items5;
  const items6 = [closure_10(style, obj7), ];
  const obj10 = { style: null, children: null };
  const items7 = [tmp4.health, { height }];
  obj10.style = items7;
  const items8 = [closure_9(style, { style: tmp4.line }), memo1];
  obj10.children = items8;
  items6[1] = closure_10(style, obj10);
  obj6.children = items6;
  items4[1] = closure_10(style, obj6);
  obj3.children = items4;
  return closure_10(style, obj3);
});