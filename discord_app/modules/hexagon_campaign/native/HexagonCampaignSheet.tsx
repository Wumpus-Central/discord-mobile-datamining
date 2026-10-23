// discord_app/modules/hexagon_campaign/native/HexagonCampaignSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectivelySyncedUserSettingsStore from "../../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import HexagonCampaignPersistedStore from "../HexagonCampaignPersistedStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const HexagonCampaignConstants = fn(4994);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = fn(5264).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const isHexagonCampaignAppIcon = fn(9864).isHexagonCampaignAppIcon;
const HEXAGON_GRADIENT_PRESET = fn(1255).HEXAGON_GRADIENT_PRESET;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
const HexagonCampaignSheet = "HexagonCampaignSheet";
let c20 = 143.48;
let obj = { fontId: fn(1412).DisplayNameFont.DEFAULT, effectId: fn(1411).DisplayNameEffect.SOLID, colors: [] };
let PRIMARY_SEMIBOLD = fn(9220).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
if (PRIMARY_SEMIBOLD == null) {
  PRIMARY_SEMIBOLD = fn(1098).Fonts.PRIMARY_SEMIBOLD;
}
const createStyles = fn(4969);
let obj3 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, card: null, cardShade: null, previewArea: null, scaledPreviewContainer: null, scaledPreview: null, rows: null, rowIcon: null, fontRowIcon: null, fontRowIconText: null, badgeRow: null, footer: null, legal: null };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj3.card = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj6 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.backgroundColor = nativeDefault.unsafe_rawColors.OPACITY_BLACK_52;
obj3.cardShade = obj6;
let obj5 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj3.previewArea = { height: 274, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center" };
obj3.scaledPreviewContainer = { width: 288 };
const rect = { position: "absolute", top: 0, left: 0, width: 360, transform: null, transformOrigin: "top left" };
let items = [{ scale: 0.8 }];
rect.transform = items;
obj3.scaledPreview = rect;
let obj7 = { height: 274, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center" };
obj3.rows = { paddingTop: nativeDefault.space.PX_16 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 0 };
obj3.rowIcon = size;
let obj8 = { paddingTop: nativeDefault.space.PX_16 };
obj3.fontRowIcon = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3.fontRowIconText = { fontFamily: PRIMARY_SEMIBOLD };
let obj9 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3.badgeRow = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
let obj10 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj3.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj11 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj3.legal = { paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_16 };
let closure_22 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScaledPreview(children) {
  const cResult = c.c(12);
  children = children.children;
  const tmp3 = closure_22();
  [tmp5, require] = noop.useState(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(nativeEvent) {
      _require(nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (null != tmp5) {
    const _Math = Math;
    let PX_12 = Math.max((274 - 0.8 * tmp5) / 2, 0);
  } else {
    PX_12 = nativeDefault.space.PX_12;
  }
  if (cResult[1] !== PX_12) {
    const obj2 = { marginTop: PX_12 };
    cResult[1] = PX_12;
    cResult[2] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp3.scaledPreviewContainer) {
    if (cResult[4] === tmp8) {
      let tmp9 = cResult[5];
    }
    if (cResult[6] === children) {
      if (cResult[7] === tmp3.scaledPreview) {
        let tmp10 = cResult[8];
      }
      if (cResult[9] === tmp9) {
        if (cResult[10] === tmp10) {
          let tmp14 = cResult[11];
        }
        return tmp14;
      }
      const obj3 = { style: tmp9, children: tmp10 };
      const tmp17 = value3(timestampProducer, obj3);
      cResult[9] = tmp9;
      cResult[10] = tmp10;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { style: tmp3.scaledPreview, onLayout: first, children };
    const tmp13 = value3(timestampProducer, obj4);
    cResult[6] = children;
    cResult[7] = tmp3.scaledPreview;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  const items = [tmp3.scaledPreviewContainer, tmp8];
  cResult[3] = tmp3.scaledPreviewContainer;
  cResult[4] = tmp8;
  cResult[5] = items;
  tmp9 = items;
  const tmp4 = _slicedToArray(noop.useState(null), 2);
}) : (function ScaledPreview(children) {
  c0 = undefined;
  const tmp = closure_22();
  [tmp3, c0] = noop.useState(null);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != tmp3) {
    const _Math = Math;
    let PX_12 = Math.max((274 - 0.8 * tmp3) / 2, 0);
  } else {
    PX_12 = nativeDefault.space.PX_12;
  }
  obj = { style: null, children: value3(timestampProducer, { style: tmp.scaledPreview, onLayout: callback, children: children.children }) };
  const items = [tmp.scaledPreviewContainer, { marginTop: PX_12 }];
  obj.style = items;
  return value3(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function usePerkSelectable(arg0) {

}
ReactCompilerGating = fn(558);
let obj12 = { paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_16 };
size = fn(2);
let result1 = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignSheet() {
  obj = require("c");
  const cResult = obj.c(115);
  const tmp4 = closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [currentUser];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  _require = stateFromStores;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [closure_7];
    const fn2 = function v() {
      return closure_7.shouldSync("appearance");
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp10);
  const tmpResult10 = require("initialize");
  analyticsLocations = stateFromStores1(analyticsLocations[22])(stateFromStores1(tmp2[23]).QUEST_HOME_PAGE).analyticsLocations;
  const tmp14 = stateFromStores1(analyticsLocations[22]);
  let HEXAGON = require("AppIconUtils").useCurrentAppIcon();
  if (typeof usePerkSelectable === "function") {
    tmp(tmp2[20]);
    if (typeof usePerkSelectable === "function") {
      tmp(tmp2[20]);
      if (typeof usePerkSelectable === "function") {
        const tmp28 = tmp(tmp2[20]).useHexagonCampaignPerkAvailability(tmp25, HexagonCampaignSheet) === constants2.SELECTABLE;
        if (cResult[4] === tmp19 === tmp21) {
          if (cResult[5] === tmp27) {
            if (cResult[6] === tmp28) {
              let tmp29 = cResult[7];
            }
            asyncGeneratorStep = tmp29;
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [HexagonCampaignPersistedStore];
              class X {
                constructor() {
                  return closure_9.hasAppliedPerk;
                }
              }
              cResult[8] = items2;
              cResult[9] = X;
              let tmp31 = X;
              let tmp30 = items2;
            } else {
              tmp30 = cResult[8];
              tmp31 = cResult[9];
            }
            const _Symbol2 = Symbol;
            const stateFromStores2 = tmp(tmp2[21]).useStateFromStores(tmp30, tmp31);
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const items3 = [HexagonCampaignPersistedStore];
              class K {
                constructor() {
                  return closure_9.previousPerkValues;
                }
              }
              cResult[10] = items3;
              cResult[11] = K;
              let tmp35 = K;
              let tmp34 = items3;
            } else {
              tmp34 = cResult[10];
              tmp35 = cResult[11];
            }
            const tmpResult15 = tmp(tmp2[21]);
            const stateFromStores3 = tmp(tmp2[21]).useStateFromStores(tmp34, tmp35);
            let displayNameStyles;
            if (stateFromStores != null) {
              displayNameStyles = stateFromStores.displayNameStyles;
            }
            if (cResult[12] !== displayNameStyles) {
              const result = tmp(tmp2[25]).hasHexagonCampaignDisplayNameFont(displayNameStyles);
              class K {
                constructor() {
                  return closure_9.previousPerkValues;
                }
              }
              cResult[13] = result;
              let tmp40 = result;
              const tmpResult17 = tmp(tmp2[25]);
            } else {
              tmp40 = cResult[13];
            }
            isHexagonCampaignAppIcon(HEXAGON);
            const first = _slicedToArray(noop.useState(stateFromStores2), 1)[0];
            const _Symbol3 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              cResult[14] = {};
              class K {
                constructor() {
                  return closure_9.previousPerkValues;
                }
              }
              let obj2 = {};
            } else {
              const tmp46 = cResult[14];
            }
            const tmpResult16 = tmp(tmp2[21]);
            [tmp48, _slicedToArray] = noop.useState(tmp46);
            if (cResult[15] === tmp29) {
              if (cResult[16] === tmp48) {
                let tmp49 = cResult[17];
              }
              noop = tmp49;
              class K {
                constructor() {
                  return closure_9.previousPerkValues;
                }
              }
              const first1 = tmp56[0];
              closure_7 = tmp56[1];
              currentUser = obj10.useRef(false);
              [tmp59, HexagonCampaignPersistedStore] = obj10.useState(0);
              const _Math = Math;
              const _Symbol4 = Symbol;
              const bound = Math.max(tmp13(tmp2[26])().bottom, closure_13);
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                cResult[18] = 4;
                class K {
                  constructor() {
                    return closure_9.previousPerkValues;
                  }
                }
              } else {
                const tmp62 = cResult[18];
              }
              const sum = bound + tmp62;
              let displayNameStyles1;
              if (stateFromStores != null) {
                displayNameStyles1 = stateFromStores.displayNameStyles;
              }
              if (displayNameStyles1 == null) {
                displayNameStyles1 = obj;
              }
              if (cResult[19] === displayNameStyles1) {
                if (cResult[20] === tmp40) {
                  if (cResult[21] === stateFromStores3) {
                    if (cResult[22] === stateFromStores) {
                      let tmp65 = cResult[23];
                      let tmp66 = cResult[24];
                    }
                    if (cResult[25] === tmp65) {
                      if (cResult[26] === displayNameStyles1) {
                        closure_10 = tmp71;
                        if (tmp49[constants.DISPLAY_NAME_STYLE]) {
                          tmp66 = tmp71;
                        }
                        class K {
                          constructor() {
                            return closure_9.previousPerkValues;
                          }
                        }
                        if (tmp49[constants.APP_ICON]) {
                          HEXAGON = tmp(tmp2[28]).LimitedTimeAppIconIds.HEXAGON;
                        }
                        if (cResult[28] === analyticsLocations) {
                          if (cResult[29] === tmp71) {
                            if (cResult[30] === stateFromStores1) {
                              if (cResult[31] === tmp49) {
                                if (cResult[32] === stateFromStores) {
                                  let tmp74 = cResult[33];
                                }
                                const _Symbol5 = Symbol;
                                class K {
                                  constructor() {
                                    return closure_9.previousPerkValues;
                                  }
                                }
                                if (null == stateFromStores) {
                                  return null;
                                } else {
                                  const _Symbol10 = Symbol;
                                  if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                                    let intl = tmp(tmp2[31]).intl;
                                    let stringResult = intl.string(tmp(tmp2[31]).t.TTUKuI);
                                    class K {
                                      constructor() {
                                        return closure_9.previousPerkValues;
                                      }
                                    }
                                    cResult[35] = stringResult;
                                    let tmp78 = stringResult;
                                  } else {
                                    tmp78 = cResult[35];
                                  }
                                  class K {
                                    constructor() {
                                      return closure_9.previousPerkValues;
                                    }
                                  }
                                  if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                                    class K {
                                      constructor() {
                                        return closure_9.previousPerkValues;
                                      }
                                    }
                                    const tmp83 = closure_16(tmp(tmp2[34]).Gradient, { gradient: null, absolute: true });
                                    cResult[36] = tmp83;
                                    let tmp80 = tmp83;
                                    let obj3 = { gradient: null, absolute: true };
                                  } else {
                                    tmp80 = cResult[36];
                                  }
                                  if (cResult[37] !== tmp4.rowIcon) {
                                    let obj4 = { perk: constants.CLIENT_THEME, label: tmp78, icon: null };
                                    class K {
                                      constructor() {
                                        return closure_9.previousPerkValues;
                                      }
                                    }
                                    let obj5 = { style: tmp4.rowIcon, children: tmp80 };
                                    obj4.icon = closure_16(first1, obj5);
                                    cResult[37] = tmp4.rowIcon;
                                    cResult[38] = obj4;
                                    let tmp84 = obj4;
                                  } else {
                                    tmp84 = cResult[38];
                                  }
                                  const _Symbol6 = Symbol;
                                  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                                    let intl2 = tmp(tmp2[31]).intl;
                                    const stringResult1 = intl2.string(tmp(tmp2[31]).t.fobter);
                                    class K {
                                      constructor() {
                                        return closure_9.previousPerkValues;
                                      }
                                    }
                                    cResult[39] = stringResult1;
                                    let tmp86 = stringResult1;
                                  } else {
                                    tmp86 = cResult[39];
                                  }
                                  if (cResult[40] === tmp4.fontRowIcon) {
                                    if (cResult[41] === tmp4.rowIcon) {
                                      let tmp88 = cResult[42];
                                    }
                                    if (cResult[43] !== tmp4.fontRowIconText) {
                                      { variant: "text-sm/semibold", color: "text-overlay-light", style: null, children: "Gg" }.style = tmp4.fontRowIconText;
                                      class K {
                                        constructor() {
                                          return closure_9.previousPerkValues;
                                        }
                                      }
                                      cResult[43] = tmp4.fontRowIconText;
                                      cResult[44] = tmp91;
                                      let tmp89 = tmp91;
                                      let obj6 = { variant: "text-sm/semibold", color: "text-overlay-light", style: null, children: "Gg" };
                                    } else {
                                      tmp89 = cResult[44];
                                    }
                                    if (cResult[45] === tmp88) {
                                      if (cResult[46] === tmp89) {
                                        let tmp92 = cResult[47];
                                      }
                                      const _Symbol7 = Symbol;
                                      class K {
                                        constructor() {
                                          return closure_9.previousPerkValues;
                                        }
                                      }
                                      if (cResult[49] !== tmp4.rowIcon) {
                                        const obj7 = { perk: constants.APP_ICON, label: tmp97, icon: null };
                                        class K {
                                          constructor() {
                                            return closure_9.previousPerkValues;
                                          }
                                        }
                                        let obj8 = { id: tmp(tmp2[28]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp4.rowIcon };
                                        obj7.icon = closure_16(tmp13(tmp2[36]), obj8);
                                        cResult[49] = tmp4.rowIcon;
                                        cResult[50] = obj7;
                                        let tmp98 = obj7;
                                        const tmp13Result = tmp13(tmp2[36]);
                                      } else {
                                        tmp98 = cResult[50];
                                      }
                                      if (cResult[51] === tmp84) {
                                        if (cResult[52] === tmp92) {
                                          const _Symbol8 = Symbol;
                                          class K {
                                            constructor() {
                                              return closure_9.previousPerkValues;
                                            }
                                          }
                                          const _Symbol9 = Symbol;
                                          if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                                            class K {
                                              constructor() {
                                                return closure_9.previousPerkValues;
                                              }
                                            }
                                            let tmp103 = closure_16(tmp13(tmp2[38]), {});
                                            const tmp105 = closure_16(tmp13(tmp2[38]), {});
                                          } else {
                                            tmp103 = cResult[56];
                                          }
                                          if (cResult[57] !== tmp4.badgeRow) {
                                            const obj9 = { children: null };
                                            class K {
                                              constructor() {
                                                return closure_9.previousPerkValues;
                                              }
                                            }
                                            tmp109[0] = tmp102;
                                            const obj11 = { style: tmp4.badgeRow, children: tmp103 };
                                            tmp109[1] = closure_16(first1, obj11);
                                            obj9.children = tmp109;
                                            const tmp111 = closure_17(first1, obj9);
                                            cResult[57] = tmp4.badgeRow;
                                            cResult[58] = tmp111;
                                          }
                                          if (cResult[59] !== sum) {
                                            const obj12 = { paddingBottom: sum };
                                            class K {
                                              constructor() {
                                                return closure_9.previousPerkValues;
                                              }
                                            }
                                            cResult[60] = obj12;
                                            let tmp112 = obj12;
                                          } else {
                                            tmp112 = cResult[60];
                                          }
                                          if (cResult[61] === tmp4.footer) {
                                            if (cResult[62] === tmp112) {
                                              let tmp113 = cResult[63];
                                            }
                                            if (cResult[64] !== first) {
                                              const string = tmp(tmp2[31]).intl.string;
                                              const t = tmp(tmp2[31]).t;
                                              class K {
                                                constructor() {
                                                  return closure_9.previousPerkValues;
                                                }
                                              }
                                              cResult[64] = first;
                                              cResult[65] = tmp115;
                                            } else {
                                              if (cResult[66] === tmp74) {
                                                if (cResult[67] === first1) {
                                                  if (cResult[68] === tmp114) {
                                                    let tmp117 = cResult[69];
                                                  }
                                                  if (cResult[70] === tmp113) {
                                                    const _Math2 = Math;
                                                    const bound1 = Math.max(tmp59 - sum, 0);
                                                    class K {
                                                      constructor() {
                                                        return closure_9.previousPerkValues;
                                                      }
                                                    }
                                                    if (cResult[75] === tmp49) {
                                                      let username = stateFromStores.globalName;
                                                      if (username == null) {
                                                        username = stateFromStores.username;
                                                      }
                                                      class K {
                                                        constructor() {
                                                          return closure_9.previousPerkValues;
                                                        }
                                                      }
                                                      const obj13 = { children: null };
                                                      const obj14 = { user: stateFromStores, displayName: username, selectedFontId: null, selectedEffectId: null, selectedColors: null, appIconId: null, appIconScale: 0.8125, hideNameplate: true, hideBadges: true, hidePronouns: true, hideGuildTag: true, tilted: true };
                                                      ({ fontId: obj32.selectedFontId, effectId: obj32.selectedEffectId, colors: obj32.selectedColors } = tmp66);
                                                      obj14.appIconId = HEXAGON;
                                                      obj13.children = closure_16(tmp13(tmp2[40]), obj14);
                                                      const tmp135 = closure_16(closure_23, obj13);
                                                      cResult[78] = HEXAGON;
                                                      cResult[79] = tmp66.colors;
                                                      cResult[80] = tmp66.effectId;
                                                      cResult[81] = tmp66.fontId;
                                                      cResult[82] = username;
                                                      cResult[83] = stateFromStores;
                                                      cResult[84] = tmp135;
                                                    }
                                                    let tmp126 = tmp49[constants.CLIENT_THEME];
                                                    if (tmp126) {
                                                      const obj15 = { children: null };
                                                      class K {
                                                        constructor() {
                                                          return closure_9.previousPerkValues;
                                                        }
                                                      }
                                                      const obj16 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true, angleOverride };
                                                      const items4 = [closure_16(tmp(tmp2[34]).Gradient, obj16), ];
                                                      const obj17 = { style: tmp4.cardShade };
                                                      items4[1] = closure_16(first1, obj17);
                                                      obj15.children = items4;
                                                      tmp126 = closure_17(closure_18, obj15);
                                                    }
                                                    cResult[75] = tmp49;
                                                    cResult[76] = tmp4.cardShade;
                                                    cResult[77] = tmp126;
                                                  }
                                                  class K {
                                                    constructor() {
                                                      return closure_9.previousPerkValues;
                                                    }
                                                  }
                                                  const obj18 = { style: tmp113, onLayout: tmp77, children: tmp117 };
                                                  const tmp123 = closure_16(first1, obj18);
                                                  cResult[70] = tmp113;
                                                  cResult[71] = tmp117;
                                                  cResult[72] = tmp123;
                                                }
                                              }
                                              class K {
                                                constructor() {
                                                  return closure_9.previousPerkValues;
                                                }
                                              }
                                              tmp119[2] = cResult[65];
                                              tmp119[3] = tmp74;
                                              tmp119[4] = first1;
                                              tmp119[5] = first1;
                                              const tmp120 = closure_16(tmp(tmp2[39]).Button, tmp119);
                                              cResult[66] = tmp74;
                                              cResult[67] = first1;
                                              cResult[68] = cResult[65];
                                              cResult[69] = tmp120;
                                              tmp117 = tmp120;
                                            }
                                          }
                                          const items5 = [tmp4.footer, tmp112];
                                          cResult[61] = tmp4.footer;
                                          cResult[62] = tmp112;
                                          cResult[63] = items5;
                                          tmp113 = items5;
                                        }
                                      }
                                      const items6 = [tmp84, tmp92, tmp98];
                                      cResult[51] = tmp84;
                                      cResult[52] = tmp92;
                                      cResult[53] = tmp98;
                                      cResult[54] = items6;
                                    }
                                    class K {
                                      constructor() {
                                        return closure_9.previousPerkValues;
                                      }
                                    }
                                    tmp93[0] = constants.DISPLAY_NAME_STYLE;
                                    tmp93[1] = tmp86;
                                    const obj19 = { style: tmp88, children: tmp89 };
                                    tmp93[2] = closure_16(first1, obj19);
                                    cResult[45] = tmp88;
                                    cResult[46] = tmp89;
                                    cResult[47] = tmp93;
                                    tmp92 = tmp93;
                                  }
                                  const items7 = [, ];
                                  ({ rowIcon: arr5[0], fontRowIcon: arr5[1] } = tmp4);
                                  cResult[40] = tmp4.fontRowIcon;
                                  cResult[41] = tmp4.rowIcon;
                                  cResult[42] = items7;
                                  tmp88 = items7;
                                }
                              }
                            }
                          }
                        }
                        _require = asyncGeneratorStep(async () => {
                          if (c4 === 2) {
                            c4 = 3;
                            throw new TypeError("Generator functions may not be called on executing generators");
                          } else if (tmp6 === 3) {
                            if (arg0 === 1) {
                              throw value;
                            } else if (arg0 === 2) {
                              const obj2 = { value, done: true };
                              return obj2;
                            } else {
                              return { value: "IconComponent", done: null };
                            }
                          } else {
                            try {
                              c4 = 2;
                              if (0 === c3) {
                                if (arg0 === 1) {
                                  c4 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c4 = 3;
                                  const obj3 = { value, done: true };
                                  return obj3;
                                } else {
                                  const isThemeSynced = tmp3;
                                  closure_0 = tmp7;
                                  closure_128_0 = undefined;
                                  let stringResult = closure_0;
                                  if (null != closure_0) {
                                    if (!ref.current) {
                                      ref.current = true;
                                      closure_1_7(true);
                                      analyticsLocations = 1;
                                      const obj4 = { selection, displayNameStyles, premiumType: stringResult.premiumType, isThemeSynced, analyticsLocations };
                                      c3 = 2;
                                      c4 = 1;
                                      const obj5 = { value: closure_0(analyticsLocations[29]).applyHexagonCampaignPerks(obj4), done: false };
                                      return obj5;
                                    }
                                  }
                                  c4 = 3;
                                }
                              } else {
                                if (1 === tmp7) {
                                  analyticsLocations = 0;
                                  closure_128_0 = false;
                                } else if (arg0 === 1) {
                                  c4 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  analyticsLocations = 0;
                                  c4 = 3;
                                  obj = { value, done: true };
                                  return obj;
                                } else {
                                  closure_128_0 = value;
                                  analyticsLocations = 0;
                                }
                                ref.current = false;
                                closure_1_7(false);
                                stringResult = stateFromStores1;
                                let values = analyticsLocations;
                                if (!closure_128_0) {
                                  const obj6 = { text: null };
                                  const intl = closure_0(analyticsLocations[31]).intl;
                                  obj6.text = intl.string(closure_0(analyticsLocations[31]).t.F8FvUy);
                                  stringResult(values[30]).open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj6);
                                  const stringResultResult = stringResult(values[30]);
                                }
                              }
                              stringResult = stringResult(values[32]);
                              stringResult.hideActionSheet(closure_0(analyticsLocations[33]).HEXAGON_CAMPAIGN_SHEET_KEY);
                              const _Object = Object;
                              values = Object.values(selection);
                              const _Boolean = Boolean;
                              if (values.some(Boolean)) {
                                values = stateFromStores1(analyticsLocations[30]);
                                const obj8 = { text: null, variant: "success" };
                                const intl2 = closure_0(analyticsLocations[31]).intl;
                                stringResult = intl2.string(closure_0(analyticsLocations[31]).t.fX2UkH);
                                obj8.text = stringResult;
                                values.open("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj8);
                              }
                            } catch (tmp43) {
                              if (tmp4 === analyticsLocations) {
                                c4 = tmp2;
                                throw tmp43;
                              } else {
                                c3 = tmp;
                              }
                            }
                          }
                        });
                        function handleSave() {
                          const self = this;
                          const apply = closure_0.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        }
                        cResult[28] = analyticsLocations;
                        cResult[29] = cResult[27];
                        cResult[30] = stateFromStores1;
                        cResult[31] = tmp49;
                        cResult[32] = stateFromStores;
                        cResult[33] = handleSave;
                        tmp74 = handleSave;
                      }
                    }
                    class K {
                      constructor() {
                        return closure_9.previousPerkValues;
                      }
                    }
                    cResult[25] = tmp65;
                    cResult[26] = displayNameStyles1;
                    cResult[27] = tmp72;
                  }
                }
              }
              const tmp44Result2 = _slicedToArray(obj10.useState(0), 2);
              const result1 = tmp13(tmp2[27]).canUsePremiumProfileCustomization(stateFromStores);
              let tmp68 = displayNameStyles1;
              if (tmp40) {
                class K {
                  constructor() {
                    return closure_9.previousPerkValues;
                  }
                }
                const obj21 = { currentDisplayNameStyles: undefined, previousDisplayNameStyles: stateFromStores3.displayNameStyles, canUsePremiumProfileCustomization: result1 };
                let hexagonCampaignRestoredDisplayNameStyles = tmp(tmp2[25]).getHexagonCampaignRestoredDisplayNameStyles(obj21);
                if (hexagonCampaignRestoredDisplayNameStyles == null) {
                  hexagonCampaignRestoredDisplayNameStyles = obj;
                }
                tmp68 = hexagonCampaignRestoredDisplayNameStyles;
                const tmpResult18 = tmp(tmp2[25]);
              }
              cResult[19] = displayNameStyles1;
              cResult[20] = tmp40;
              cResult[21] = stateFromStores3;
              cResult[22] = stateFromStores;
              cResult[23] = result1;
              cResult[24] = tmp68;
              tmp66 = tmp68;
              tmp65 = result1;
              const tmp13Result2 = tmp13(tmp2[27]);
            }
            const obj22 = {};
            let merged = Object.assign(tmp29);
            const merged1 = Object.assign(tmp48);
            cResult[15] = tmp29;
            cResult[16] = tmp48;
            cResult[17] = obj22;
            tmp49 = obj22;
            const tmp44Result = _slicedToArray(noop.useState(tmp46), 2);
          }
        }
        const obj23 = {};
        obj23[constants.CLIENT_THEME] = tmp19 === tmp21;
        obj23[constants.DISPLAY_NAME_STYLE] = tmp23 === tmp24;
        obj23[constants.APP_ICON] = tmp28;
        cResult[4] = tmp19 === tmp21;
        cResult[5] = tmp23 === tmp24;
        cResult[6] = tmp28;
        cResult[7] = obj23;
        tmp29 = obj23;
        const tmpResult14 = tmp(tmp2[20]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const tmpResult11 = require("AppIconUtils");
}) : (function HexagonCampaignSheet() {
  closure_13 = async function _handleSave2() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            stateFromStores = tmp7;
            closure_128_0 = undefined;
            let stringResult = stateFromStores;
            if (null != stateFromStores) {
              if (!ref.current) {
                ref.current = true;
                SelectivelySyncedUserSettingsStore(true);
                closure_128_0 = false;
                dependencyMap = 1;
                obj4 = { selection, displayNameStyles, premiumType: stringResult.premiumType, isThemeSynced, analyticsLocations };
                c3 = 2;
                c4 = 1;
                obj5 = { value: stateFromStores(16356).applyHexagonCampaignPerks(obj4), done: false };
                return obj5;
              }
            }
            c4 = 3;
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_0 = false;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            dependencyMap = 0;
          }
          closure_129_8.current = false;
          closure_129_7(false);
          stringResult = tmp3;
          let values = dependencyMap;
          if (!closure_128_0) {
            const obj6 = { text: null };
            const intl = stateFromStores(1128).intl;
            obj6.text = intl.string(stateFromStores(1128).t.F8FvUy);
            stringResult(5661).open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj6);
            const stringResultResult = stringResult(5661);
          }
        }
        stringResult = stringResult(5208);
        stringResult.hideActionSheet(stateFromStores(16354).HEXAGON_CAMPAIGN_SHEET_KEY);
        const _Object = Object;
        values = Object.values(closure_129_5);
        const _Boolean = Boolean;
        if (values.some(Boolean)) {
          values = tmp3(5661);
          const obj8 = { text: null, variant: "success" };
          const intl2 = stateFromStores(1128).intl;
          stringResult = intl2.string(stateFromStores(1128).t.fX2UkH);
          obj8.text = stringResult;
          values.open("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj8);
        }
      } catch (tmp43) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp43;
        } else {
          c3 = tmp;
        }
      }
    }
  };
  const tmp = closure_22();
  obj = stateFromStores(analyticsLocations[21]);
  const items = [currentUser];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_7];
  importDefault = stateFromStores(analyticsLocations[21]).useStateFromStores(items1, () => closure_7.shouldSync("appearance"));
  let obj2 = stateFromStores(analyticsLocations[21]);
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").QUEST_HOME_PAGE).analyticsLocations;
  const tmp6 = require("useAnalyticsLocations");
  const currentAppIcon = stateFromStores(analyticsLocations[24]).useCurrentAppIcon();
  if (typeof usePerkSelectable === "function") {
    let obj4 = {};
    obj4[tmp9] = tmp2(tmp3[20]).useHexagonCampaignPerkAvailability(tmp11, HexagonCampaignSheet) === memo.SELECTABLE;
    if (typeof usePerkSelectable === "function") {
      obj4[tmp14] = tmp2(tmp3[20]).useHexagonCampaignPerkAvailability(tmp15, HexagonCampaignSheet) === tmp13.SELECTABLE;
      if (typeof usePerkSelectable === "function") {
        obj4[tmp16] = tmp2(tmp3[20]).useHexagonCampaignPerkAvailability(tmp17, HexagonCampaignSheet) === tmp13.SELECTABLE;
        const tmp2Result8 = tmp2(tmp3[20]);
        const items2 = [HexagonCampaignPersistedStore];
        const stateFromStores1 = tmp2(tmp3[21]).useStateFromStores(items2, () => HexagonCampaignPersistedStore.hasAppliedPerk);
        const tmp2Result9 = tmp2(tmp3[21]);
        const items3 = [HexagonCampaignPersistedStore];
        const stateFromStores2 = tmp2(tmp3[21]).useStateFromStores(items3, () => HexagonCampaignPersistedStore.previousPerkValues);
        const tmp2Result10 = tmp2(tmp3[21]);
        let displayNameStyles;
        if (stateFromStores != null) {
          displayNameStyles = stateFromStores.displayNameStyles;
        }
        const result = tmp2(tmp3[25]).hasHexagonCampaignDisplayNameFont(displayNameStyles);
        const obj11 = obj5;
        const tmp2Result11 = tmp2(tmp3[25]);
        const tmp25 = isHexagonCampaignAppIcon(currentAppIcon);
        [tmp28, _slicedToArray] = obj5.useState({});
        obj5 = {};
        let merged = Object.assign(obj4);
        let merged1 = Object.assign(tmp28);
        [disabled, closure_7] = obj5.useState(false);
        currentUser = obj5.useRef(false);
        const tmp27 = _slicedToArray(obj5.useState({}), 2);
        [tmp38, HexagonCampaignPersistedStore] = obj5.useState(0);
        const _Math = Math;
        const sum = Math.max(tmp5(tmp3[26])().bottom, closure_13) + 4;
        let displayNameStyles1;
        if (stateFromStores != null) {
          displayNameStyles1 = stateFromStores.displayNameStyles;
        }
        if (displayNameStyles1 == null) {
          displayNameStyles1 = obj;
        }
        const tmp37 = _slicedToArray(obj5.useState(0), 2);
        const result1 = tmp5(tmp3[27]).canUsePremiumProfileCustomization(stateFromStores);
        let tmp44 = displayNameStyles1;
        if (result) {
          let displayNameStyles2;
          if (stateFromStores != null) {
            displayNameStyles2 = stateFromStores.displayNameStyles;
          }
          let obj6 = { currentDisplayNameStyles: displayNameStyles2, previousDisplayNameStyles: stateFromStores2.displayNameStyles, canUsePremiumProfileCustomization: result1 };
          let hexagonCampaignRestoredDisplayNameStyles = tmp2(tmp3[25]).getHexagonCampaignRestoredDisplayNameStyles(obj6);
          if (hexagonCampaignRestoredDisplayNameStyles == null) {
            hexagonCampaignRestoredDisplayNameStyles = obj;
          }
          tmp44 = hexagonCampaignRestoredDisplayNameStyles;
          const tmp2Result12 = tmp2(tmp3[25]);
        }
        const items4 = [result1, displayNameStyles1];
        memo = obj11.useMemo(() => {
          obj = {};
          if (result1) {
            const merged = Object.assign(displayNameStyles1);
            obj.fontId = HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
            let tmp5 = obj;
          } else {
            const merged1 = Object.assign(obj);
            obj.fontId = HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
            tmp5 = obj;
          }
          return tmp5;
        }, items4);
        if (obj5[tmp8.DISPLAY_NAME_STYLE]) {
          tmp44 = memo;
        }
        let HEXAGON = currentAppIcon;
        if (tmp25) {
          let DEFAULT = stateFromStores2.appIconId;
          if (DEFAULT == null) {
            DEFAULT = tmp2(tmp3[28]).FreemiumAppIconIds.DEFAULT;
          }
          HEXAGON = DEFAULT;
        }
        if (obj5[tmp8.APP_ICON]) {
          HEXAGON = tmp2(tmp3[28]).LimitedTimeAppIconIds.HEXAGON;
        }
        if (null == stateFromStores) {
          return null;
        } else {
          const obj7 = { perk: tmp8.CLIENT_THEME, label: null, icon: null };
          let intl = tmp2(tmp3[31]).intl;
          obj7.label = intl.string(tmp2(tmp3[31]).t.TTUKuI);
          let obj8 = { style: tmp.rowIcon, children: null };
          const obj9 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true };
          obj8.children = closure_16(tmp2(tmp3[34]).Gradient, obj9);
          obj7.icon = closure_16(disabled, obj8);
          const items5 = [obj7, , ];
          const obj10 = { perk: tmp8.DISPLAY_NAME_STYLE, label: null, icon: null };
          let intl2 = tmp2(tmp3[31]).intl;
          obj10.label = intl2.string(tmp2(tmp3[31]).t.fobter);
          const obj12 = { style: null, children: null };
          const items6 = [, ];
          ({ rowIcon: arr11[0], fontRowIcon: arr11[1] } = tmp);
          obj12.style = items6;
          const obj13 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.fontRowIconText, children: "Gg" };
          obj12.children = closure_16(tmp2(tmp3[35]).Text, obj13);
          obj10.icon = closure_16(disabled, obj12);
          items5[1] = obj10;
          const obj14 = { perk: tmp8.APP_ICON, label: null, icon: null };
          const intl3 = tmp2(tmp3[31]).intl;
          obj14.label = intl3.string(tmp2(tmp3[31]).t.DTv8Yq);
          const obj15 = { id: tmp2(tmp3[28]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp.rowIcon };
          obj14.icon = closure_16(tmp5(tmp3[36]), obj15);
          items5[2] = obj14;
          const obj16 = { header: null, footer: null, startExpanded: true, children: null };
          const obj17 = { children: null };
          const obj18 = { title: null };
          const intl4 = tmp2(tmp3[31]).intl;
          obj18.title = intl4.string(tmp2(tmp3[31]).t.rZmLDm);
          const items7 = [closure_16(tmp2(tmp3[37]).BottomSheetTitleHeader, obj18), ];
          const obj19 = { style: tmp.badgeRow, children: closure_16(tmp5(tmp3[38]), {}) };
          items7[1] = closure_16(disabled, obj19);
          obj17.children = items7;
          obj16.header = closure_17(disabled, obj17);
          const obj20 = { style: null, onLayout: null, children: null };
          const items8 = [tmp.footer, ];
          const obj21 = { paddingBottom: sum };
          items8[1] = obj21;
          obj20.style = items8;
          obj20.onLayout = tmp48;
          const intl5 = tmp2(tmp3[31]).intl;
          const t = tmp2(tmp3[31]).t;
          const obj22 = {
            size: "lg",
            grow: true,
            text: intl5.string(_slicedToArray(obj5.useState(stateFromStores1), 1)[0] ? t["R3BPH+"] : t["1Qm822"]),
            onPress: function handleSave() {
                      const self = this;
                      const apply = closure_13.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    },
            loading: disabled,
            disabled
          };
          obj20.children = closure_16(tmp2(tmp3[39]).Button, obj22);
          obj16.footer = closure_16(disabled, obj20);
          const obj23 = { style: null, children: null };
          const obj24 = { paddingBottom: null };
          const _Math2 = Math;
          obj24.paddingBottom = Math.max(tmp38 - sum, 0);
          obj23.style = obj24;
          const obj26 = { style: tmp.content, children: null };
          const obj27 = { style: tmp.card, children: null };
          let tmp58Result = obj5[tmp8.CLIENT_THEME];
          if (tmp58Result) {
            const obj28 = { children: null };
            const obj29 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true, angleOverride };
            const items9 = [closure_16(tmp2(tmp3[34]).Gradient, obj29), ];
            const obj30 = { style: tmp.cardShade };
            items9[1] = closure_16(tmp55, obj30);
            obj28.children = items9;
            tmp58Result = closure_17(closure_18, obj28);
          }
          const items10 = [tmp58Result, ];
          const obj31 = { style: tmp.previewArea, children: null };
          const obj32 = { user: stateFromStores, displayName: null, selectedFontId: null, selectedEffectId: null, selectedColors: null, appIconId: null, appIconScale: 0.8125, hideNameplate: true, hideBadges: true, hidePronouns: true, hideGuildTag: true, tilted: true };
          let username = stateFromStores.globalName;
          const tmp5Result3 = tmp5(tmp3[36]);
          if (username == null) {
            username = stateFromStores.username;
          }
          const obj33 = { children: null };
          obj32.displayName = username;
          ({ fontId: obj25.selectedFontId, effectId: obj25.selectedEffectId, colors: obj25.selectedColors } = tmp44);
          obj32.appIconId = HEXAGON;
          obj33.children = closure_16(tmp5(tmp3[40]), obj32);
          obj31.children = closure_16(closure_23, obj33);
          items10[1] = closure_16(disabled, obj31);
          obj27.children = items10;
          const items11 = [closure_17(disabled, obj27), ];
          const obj34 = { style: tmp.rows, children: null };
          const obj35 = {
            hasIcons: true,
            children: items5.map((perk) => {
                      perk = perk.perk;
                      ({ label, icon } = perk);
                      obj = { icon, label, value: obj5[perk], disabled: null, onValueChange: null };
                      let tmp2 = first;
                      if (!first) {
                        tmp2 = !obj4[perk];
                      }
                      obj.disabled = tmp2;
                      obj.onValueChange = function onValueChange(arg0) {
                        closure_0 = arg0;
                        return closure_1_4((arg0) => {
                          obj = {};
                          const merged = Object.assign(arg0);
                          obj[perk] = closure_0;
                          return obj;
                        });
                      };
                      return closure_1_16(stateFromStores(analyticsLocations[42]).TableSwitchRow, obj, perk);
                    })
          };
          obj34.children = closure_16(tmp2(tmp3[41]).TableRowGroup, obj35);
          items11[1] = closure_16(disabled, obj34);
          obj26.children = items11;
          const items12 = [closure_17(disabled, obj26), ];
          const obj36 = { style: tmp.legal, children: closure_16(tmp5(tmp3[43]), { showLogo: true }) };
          items12[1] = closure_16(disabled, obj36);
          obj23.children = items12;
          obj16.children = closure_17(disabled, obj23);
          return closure_16(tmp2(tmp3[44]).BottomSheet, obj16);
        }
        const tmp5Result = tmp5(tmp3[27]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const tmp2Result7 = tmp2(tmp3[20]);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const tmp2Result = tmp2(tmp3[20]);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  let obj3 = stateFromStores(analyticsLocations[24]);
});