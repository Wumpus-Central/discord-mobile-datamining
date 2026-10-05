// === Module 13726: GuildSettingsServerTagPreview ===

// Module 13726 (GuildSettingsServerTagPreview)
import nativeDefault from "native" /* 587 */;
import GuildTagConstants from "GuildTagConstants" /* 7603 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let _undefined, c3, dependencyMap, guildId;

let c10;
let closure_12;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let unpackModuleId;
({ Image: metroRequire, View: metroImportDefault } = react_native);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, notice: obj3, message: obj4, unfocused: { opacity: 0.5 }, avatar: size, messageBody: { flex: 1 }, usernameRow: obj5 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_12 };
obj4 = { flexDirection: "row", columnGap: nativeDefault.space.PX_12, alignItems: "flex-start" };
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.round };
obj5 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_4 };
let closure_13 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let badge;
  let currentUser;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items10;
  let items2;
  let items3;
  let items4;
  let items5;
  let items7;
  let items8;
  let items9;
  let onAdopted;
  let primaryColor;
  let secondaryColor;
  let tag;
  let tmp20;
  let tmp5;
  let tmp56Result;
  let tmp6;
  let variant;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(77);
  guildId = guildId.guildId;
  ({ tag, badge, primaryColor, secondaryColor, variant, onAdopted } = guildId);
  let str = "card";
  const isDirty = guildId.isDirty;
  if (undefined !== variant) {
    str = variant;
  }
  let tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function b() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let obj4 = onAdopted(5042);
  const name = obj4.useName(guildId, null, stateFromStores);
  if (cResult[2] === stateFromStores) {
    let tmp10;
    if (cResult[3] === guildId) {
      tmp10 = cResult[4];
    }
    let identityGuildId;
    if (stateFromStores != null) {
      const primaryGuild = stateFromStores.primaryGuild;
      if (primaryGuild != null) {
        identityGuildId = primaryGuild.identityGuildId;
      }
    }
    let tmp15 = identityGuildId === guildId;
    if (tmp15) {
      let identityEnabled;
      if (stateFromStores != null) {
        const primaryGuild2 = stateFromStores.primaryGuild;
        if (primaryGuild2 != null) {
          identityEnabled = primaryGuild2.identityEnabled;
        }
      }
      tmp15 = true === identityEnabled;
    }
    [tmp20, dependencyMap] = _slicedToArray(react.useState(false), 2);
    const tmp19 = _slicedToArray(react.useState(false), 2);
    if (cResult[5] === guildId) {
      let tmp21;
      let tmp23;
      if (cResult[6] === onAdopted) {
        tmp21 = cResult[7];
      }
      if (cResult[8] !== tmp15) {
        let stringResult;
        const intl = tmp(1126).intl;
        const string = intl.string;
        const t = tmp(1126).t;
        if (tmp15) {
          stringResult = string(t.hRsJ7T);
        } else {
          stringResult = string(t.OVvzY0);
        }
        cResult[8] = tmp15;
        cResult[9] = stringResult;
        tmp23 = stringResult;
      } else {
        tmp23 = cResult[9];
      }
      if (cResult[10] === tmp4.notice) {
        let tmp25;
        if (cResult[11] === tmp23) {
          tmp25 = cResult[12];
        }
        if (cResult[13] === tmp4.message) {
          let tmp28;
          let tmp29;
          let tmp33;
          let tmp36;
          let tmp39;
          if (cResult[14] === tmp4.unfocused) {
            tmp28 = cResult[15];
          }
          if (cResult[16] !== tmp4.avatar) {
            let obj2 = { source: onAdopted(12506), style: tmp4.avatar, importantForAccessibility: "no" };
            const tmp32 = closure_10(closure_6, obj2);
            cResult[16] = tmp4.avatar;
            cResult[17] = tmp32;
            tmp29 = tmp32;
          } else {
            tmp29 = cResult[17];
          }
          const _Symbol = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp35 = closure_10(tmp(4886).Text, { variant: "text-md/semibold", color: "text-default", children: "Locke" });
            cResult[18] = tmp35;
            tmp33 = tmp35;
          } else {
            tmp33 = cResult[18];
          }
          const _Symbol2 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            let obj3 = { variant: "text-md/normal", color: "text-default", children: intl2.string(tmp(1126).t.KZQ4mF) };
            const Text = tmp(4886).Text;
            intl2 = tmp(1126).intl;
            const tmp38 = closure_10(Text, obj3);
            cResult[19] = tmp38;
            tmp36 = tmp38;
          } else {
            tmp36 = cResult[19];
          }
          if (cResult[20] !== tmp4.messageBody) {
            let obj5 = { style: tmp4.messageBody, children: items1 };
            items1 = [tmp33, tmp36];
            const tmp42 = closure_11(closure_7, obj5);
            cResult[20] = tmp4.messageBody;
            cResult[21] = tmp42;
            tmp39 = tmp42;
          } else {
            tmp39 = cResult[21];
          }
          if (cResult[22] === tmp39) {
            if (cResult[23] === tmp28) {
              let tmp43;
              if (cResult[24] === tmp29) {
                tmp43 = cResult[25];
              }
              if (cResult[26] === tmp10) {
                let tmp47;
                let tmp51;
                if (cResult[27] === tmp4.avatar) {
                  tmp47 = cResult[28];
                }
                if (cResult[29] !== name) {
                  const obj6 = { variant: "text-md/semibold", color: "text-default", children: name };
                  const tmp53 = closure_10(tmp(4886).Text, obj6);
                  cResult[29] = name;
                  cResult[30] = tmp53;
                  tmp51 = tmp53;
                } else {
                  tmp51 = cResult[30];
                }
                if (cResult[31] === badge) {
                  if (cResult[32] === primaryColor) {
                    if (cResult[33] === secondaryColor) {
                      let tmp54;
                      if (cResult[34] === tag) {
                        tmp54 = cResult[35];
                      }
                      if (cResult[36] === tmp4.usernameRow) {
                        if (cResult[37] === tmp51) {
                          let tmp61;
                          let tmp65;
                          if (cResult[38] === tmp54) {
                            tmp61 = cResult[39];
                          }
                          const _Symbol3 = Symbol;
                          if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                            const obj7 = { variant: "text-md/normal", color: "text-default", children: intl3.string(tmp(1126).t.LKsPRe) };
                            const Text2 = tmp(4886).Text;
                            intl3 = tmp(1126).intl;
                            const tmp67 = closure_10(Text2, obj7);
                            cResult[40] = tmp67;
                            tmp65 = tmp67;
                          } else {
                            tmp65 = cResult[40];
                          }
                          if (cResult[41] === tmp4.messageBody) {
                            let tmp68;
                            if (cResult[42] === tmp61) {
                              tmp68 = cResult[43];
                            }
                            if (cResult[44] === tmp4.message) {
                              if (cResult[45] === tmp47) {
                                let tmp72;
                                if (cResult[46] === tmp68) {
                                  tmp72 = cResult[47];
                                }
                                if (cResult[48] === tmp4.message) {
                                  let tmp76;
                                  let tmp77;
                                  let tmp81;
                                  let tmp84;
                                  let tmp87;
                                  if (cResult[49] === tmp4.unfocused) {
                                    tmp76 = cResult[50];
                                  }
                                  if (cResult[51] !== tmp4.avatar) {
                                    const obj8 = { source: onAdopted(13772), style: tmp4.avatar, importantForAccessibility: "no" };
                                    const tmp80 = closure_10(closure_6, obj8);
                                    cResult[51] = tmp4.avatar;
                                    cResult[52] = tmp80;
                                    tmp77 = tmp80;
                                  } else {
                                    tmp77 = cResult[52];
                                  }
                                  const _Symbol4 = Symbol;
                                  if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                    const tmp83 = closure_10(tmp(4886).Text, { variant: "text-md/semibold", color: "text-default", children: "Phibi" });
                                    cResult[53] = tmp83;
                                    tmp81 = tmp83;
                                  } else {
                                    tmp81 = cResult[53];
                                  }
                                  const _Symbol5 = Symbol;
                                  if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
                                    const obj9 = { variant: "text-md/normal", color: "text-default", children: intl4.string(tmp(1126).t.vtCg11) };
                                    const Text3 = tmp(4886).Text;
                                    intl4 = tmp(1126).intl;
                                    const tmp86 = closure_10(Text3, obj9);
                                    cResult[54] = tmp86;
                                    tmp84 = tmp86;
                                  } else {
                                    tmp84 = cResult[54];
                                  }
                                  if (cResult[55] !== tmp4.messageBody) {
                                    const obj10 = { style: tmp4.messageBody, children: items2 };
                                    items2 = [tmp81, tmp84];
                                    const tmp90 = closure_11(closure_7, obj10);
                                    cResult[55] = tmp4.messageBody;
                                    cResult[56] = tmp90;
                                    tmp87 = tmp90;
                                  } else {
                                    tmp87 = cResult[56];
                                  }
                                  if (cResult[57] === tmp76) {
                                    if (cResult[58] === tmp77) {
                                      let tmp91;
                                      let tmp95;
                                      if (cResult[59] === tmp87) {
                                        tmp91 = cResult[60];
                                      }
                                      const _Symbol6 = Symbol;
                                      if (cResult[61] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl5 = tmp(1126).intl;
                                        const stringResult1 = intl5.string(tmp(1126).t.cQDYRu);
                                        cResult[61] = stringResult1;
                                        tmp95 = stringResult1;
                                      } else {
                                        tmp95 = cResult[61];
                                      }
                                      if (!tmp15) {
                                        tmp15 = tmp20;
                                      }
                                      if (!tmp15) {
                                        tmp15 = isDirty;
                                      }
                                      if (!tmp15) {
                                        tmp15 = null == tag;
                                      }
                                      if (!tmp15) {
                                        tmp15 = "" === tag;
                                      }
                                      if (cResult[62] === tmp20) {
                                        if (cResult[63] === tmp21) {
                                          let tmp97;
                                          if (cResult[64] === tmp15) {
                                            tmp97 = cResult[65];
                                          }
                                          if (cResult[66] === tmp43) {
                                            if (cResult[67] === tmp72) {
                                              if (cResult[68] === tmp91) {
                                                let tmp100;
                                                if (cResult[69] === tmp97) {
                                                  tmp100 = cResult[70];
                                                }
                                                if (cResult[71] === tmp100) {
                                                  let tmp103;
                                                  if (cResult[72] === tmp25) {
                                                    tmp103 = cResult[73];
                                                  }
                                                  let tmp107 = tmp103;
                                                  if ("plain" !== str) {
                                                    if (cResult[74] === tmp103) {
                                                      let tmp108;
                                                      if (cResult[75] === tmp4.card) {
                                                        tmp108 = cResult[76];
                                                      }
                                                      tmp107 = tmp108;
                                                    }
                                                    const obj11 = { variant: "secondary", radius: 16, style: tmp4.card, children: tmp103 };
                                                    const tmp110 = closure_10(tmp(5995).Card, obj11);
                                                    cResult[74] = tmp103;
                                                    cResult[75] = tmp4.card;
                                                    cResult[76] = tmp110;
                                                    tmp108 = tmp110;
                                                  }
                                                  return tmp107;
                                                }
                                                const obj12 = { children: items3 };
                                                items3 = [tmp25, tmp100];
                                                const tmp106 = closure_11(closure_12, obj12);
                                                cResult[71] = tmp100;
                                                cResult[72] = tmp25;
                                                cResult[73] = tmp106;
                                                tmp103 = tmp106;
                                              }
                                            }
                                          }
                                          const obj14 = { spacing: onAdopted(587).space.PX_12, children: items4 };
                                          const Stack = tmp(5593).Stack;
                                          items4 = [tmp43, tmp72, tmp91, tmp97];
                                          const tmp102 = closure_11(Stack, obj14);
                                          cResult[66] = tmp43;
                                          cResult[67] = tmp72;
                                          cResult[68] = tmp91;
                                          cResult[69] = tmp97;
                                          cResult[70] = tmp102;
                                          tmp100 = tmp102;
                                        }
                                      }
                                      const obj15 = { variant: "primary", text: tmp95, loading: tmp20, disabled: tmp15, onPress: tmp21 };
                                      const tmp99 = closure_10(tmp(5594).Button, obj15);
                                      cResult[62] = tmp20;
                                      cResult[63] = tmp21;
                                      cResult[64] = tmp15;
                                      cResult[65] = tmp99;
                                      tmp97 = tmp99;
                                    }
                                  }
                                  const obj16 = { style: tmp76, children: items5 };
                                  items5 = [tmp77, tmp87];
                                  const tmp94 = closure_11(closure_7, obj16);
                                  cResult[57] = tmp76;
                                  cResult[58] = tmp77;
                                  cResult[59] = tmp87;
                                  cResult[60] = tmp94;
                                  tmp91 = tmp94;
                                }
                                const items6 = [, ];
                                ({ message: arr8[0], unfocused: arr8[1] } = tmp4);
                                cResult[48] = tmp4.message;
                                cResult[49] = tmp4.unfocused;
                                cResult[50] = items6;
                                tmp76 = items6;
                              }
                            }
                            const obj17 = { style: tmp4.message, children: items7 };
                            items7 = [tmp47, tmp68];
                            const tmp75 = closure_11(closure_7, obj17);
                            cResult[44] = tmp4.message;
                            cResult[45] = tmp47;
                            cResult[46] = tmp68;
                            cResult[47] = tmp75;
                            tmp72 = tmp75;
                          }
                          const obj18 = { style: tmp4.messageBody, children: items8 };
                          items8 = [tmp61, tmp65];
                          const tmp71 = closure_11(closure_7, obj18);
                          cResult[41] = tmp4.messageBody;
                          cResult[42] = tmp61;
                          cResult[43] = tmp71;
                          tmp68 = tmp71;
                        }
                      }
                      const obj19 = { style: tmp4.usernameRow, children: items9 };
                      items9 = [tmp51, tmp54];
                      const tmp64 = closure_11(closure_7, obj19);
                      cResult[36] = tmp4.usernameRow;
                      cResult[37] = tmp51;
                      cResult[38] = tmp54;
                      cResult[39] = tmp64;
                      tmp61 = tmp64;
                    }
                  }
                }
                let tmp56Result2 = null != tag && "" !== tag;
                if (tmp56Result2) {
                  const obj20 = { guildTag: tag, guildBadge: tmp56Result };
                  tmp56Result = undefined;
                  const BaseGuildTagChiplet = tmp(9395).BaseGuildTagChiplet;
                  if (null != badge) {
                    size = { badge, primaryTintColor: primaryColor, secondaryTintColor: secondaryColor, width: null, height: null };
                    const GuildBadge = tmp(13728).GuildBadge;
                    ({ SIZE_12: obj13.width, SIZE_12: obj13.height } = GuildTagBadgeSize);
                    tmp56Result = closure_10(GuildBadge, size);
                  }
                  tmp56Result2 = closure_10(BaseGuildTagChiplet, obj20);
                }
                cResult[31] = badge;
                cResult[32] = primaryColor;
                cResult[33] = secondaryColor;
                cResult[34] = tag;
                cResult[35] = tmp56Result2;
                tmp54 = tmp56Result2;
              }
              const obj21 = { source: tmp10, style: tmp4.avatar, importantForAccessibility: "no" };
              const tmp50 = closure_10(closure_6, obj21);
              cResult[26] = tmp10;
              cResult[27] = tmp4.avatar;
              cResult[28] = tmp50;
              tmp47 = tmp50;
            }
          }
          const obj22 = { style: tmp28, children: items10 };
          items10 = [tmp29, tmp39];
          const tmp46 = closure_11(closure_7, obj22);
          cResult[22] = tmp39;
          cResult[23] = tmp28;
          cResult[24] = tmp29;
          cResult[25] = tmp46;
          tmp43 = tmp46;
        }
        const items11 = [, ];
        ({ message: arr2[0], unfocused: arr2[1] } = tmp4);
        cResult[13] = tmp4.message;
        cResult[14] = tmp4.unfocused;
        cResult[15] = items11;
        tmp28 = items11;
      }
      const obj23 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.notice, children: tmp23 };
      const tmp27 = closure_10(tmp(4886).Text, obj23);
      cResult[10] = tmp4.notice;
      cResult[11] = tmp23;
      cResult[12] = tmp27;
      tmp25 = tmp27;
    }
    let closure_0 = _asyncToGenerator(async () => {
      let closure_1;
      let obj2;
      let v1;
      if (c3 === 2) {
        c3 = 3;
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
          let tmp4;
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp4 = undefined;
              v1(true);
              v1 = 1;
              c3 = 1;
              const obj5 = { value: obj2.adoptGuildIdentity(tmp4, true), done: false };
              obj2 = tmp4(dependencyMap[14]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp4 = value;
            v1(false);
            if (tmp4.ok) {
              if (tmp != null) {
                tmp();
              }
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp18) {
          c3 = 3;
          throw tmp18;
        }
      }
    });
    const fn2 = function() {
      return closure_0(...arguments);
    };
    cResult[5] = guildId;
    cResult[6] = onAdopted;
    cResult[7] = fn2;
    tmp21 = fn2;
  }
  let avatarURL;
  const makeSource = onAdopted(1402).makeSource;
  onAdopted(1402);
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(guildId, 40);
  }
  const source = makeSource(avatarURL);
  cResult[2] = stateFromStores;
  cResult[3] = guildId;
  cResult[4] = source;
  tmp10 = source;
}) : ((guildId) => {
  let badge;
  let c2;
  let currentUser;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items12;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let primaryColor;
  let secondaryColor;
  let stringResult;
  let tag;
  let tmp13;
  let tmp17Result;
  let variant;
  guildId = guildId.guildId;
  ({ tag, badge, primaryColor, secondaryColor, variant } = guildId);
  const isDirty = guildId.isDirty;
  if (variant === undefined) {
    variant = "card";
  }
  const onAdopted = guildId.onAdopted;
  dependencyMap = undefined;
  let tmp = closure_13();
  const tmp3 = dependencyMap;
  let obj = guildId(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = onAdopted;
  let obj3 = onAdopted(5042);
  const name = obj3.useName(guildId, null, stateFromStores);
  let avatarURL;
  const makeSource = onAdopted(1402).makeSource;
  const tmp6 = onAdopted(1402);
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(guildId, 40);
  }
  let identityGuildId;
  const source = makeSource(avatarURL);
  if (stateFromStores != null) {
    const primaryGuild = stateFromStores.primaryGuild;
    if (primaryGuild != null) {
      identityGuildId = primaryGuild.identityGuildId;
    }
  }
  let tmp10 = identityGuildId === guildId;
  if (tmp10) {
    let identityEnabled;
    if (stateFromStores != null) {
      const primaryGuild2 = stateFromStores.primaryGuild;
      if (primaryGuild2 != null) {
        identityEnabled = primaryGuild2.identityEnabled;
      }
    }
    tmp10 = true === identityEnabled;
  }
  [tmp13, c2] = _slicedToArray(react.useState(false), 2);
  const items1 = [guildId, onAdopted];
  const tmp12 = _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(_asyncToGenerator(async () => {
    let c2;
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
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
        let tmp;
        c3 = 2;
        if (0 === _undefined) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp4;
            tmp = undefined;
            _undefined(true);
            const obj2 = tmp(_undefined[14]);
            _undefined = 1;
            c3 = 1;
            const obj5 = { value: obj2.adoptGuildIdentity(guildId, true), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          closure_129_2(false);
          if (tmp.ok) {
            if (closure_129_1 != null) {
              closure_129_1();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp18) {
        c3 = 3;
        throw tmp18;
      }
    }
  }), items1);
  let obj2 = { variant: "text-sm/medium", color: "text-muted", style: tmp.notice, children: stringResult };
  const Text = tmp2(4886).Text;
  const intl = tmp2(1126).intl;
  const string = intl.string;
  const t = tmp2(1126).t;
  if (tmp10) {
    stringResult = string(t.hRsJ7T);
  } else {
    stringResult = string(t.OVvzY0);
  }
  const items2 = [closure_10(Text, obj2), ];
  let obj4 = { spacing: tmp4(587).space.PX_12, children: items6 };
  const Stack = tmp2(5593).Stack;
  let obj5 = { style: items3, children: items4 };
  items3 = [, ];
  ({ message: arr4[0], unfocused: arr4[1] } = tmp);
  items4 = [, ];
  const obj6 = { source: tmp4(12506), style: tmp.avatar, importantForAccessibility: "no" };
  items4[0] = closure_10(closure_6, obj6);
  const obj7 = { style: tmp.messageBody, children: items5 };
  items5 = [closure_10(guildId(4886).Text, { variant: "text-md/semibold", color: "text-default", children: "Locke" }), ];
  const obj8 = { variant: "text-md/normal", color: "text-default", children: intl2.string(guildId(1126).t.KZQ4mF) };
  const Text2 = tmp2(4886).Text;
  intl2 = tmp2(1126).intl;
  items5[1] = closure_10(Text2, obj8);
  items4[1] = closure_11(closure_7, obj7);
  items6 = [closure_11(closure_7, obj5), , , ];
  const obj9 = { style: tmp.message, children: items7 };
  items7 = [, ];
  const obj10 = { source, style: tmp.avatar, importantForAccessibility: "no" };
  items7[0] = closure_10(closure_6, obj10);
  const obj11 = { style: tmp.messageBody, children: items9 };
  const obj12 = { style: tmp.usernameRow, children: items8 };
  items8 = [closure_10(guildId(4886).Text, { variant: "text-md/semibold", color: "text-default", children: name }), ];
  let tmp17Result3 = null != tag;
  if (tmp17Result3) {
    tmp17Result3 = "" !== tag;
  }
  if (tmp17Result3) {
    const obj13 = { guildTag: tag, guildBadge: tmp17Result };
    tmp17Result = undefined;
    const BaseGuildTagChiplet = tmp2(9395).BaseGuildTagChiplet;
    if (null != badge) {
      size = { badge, primaryTintColor: primaryColor, secondaryTintColor: secondaryColor, width: null, height: null };
      const GuildBadge = tmp2(13728).GuildBadge;
      ({ SIZE_12: obj15.width, SIZE_12: obj15.height } = GuildTagBadgeSize);
      tmp17Result = closure_10(GuildBadge, size);
    }
    tmp17Result3 = closure_10(BaseGuildTagChiplet, obj13);
  }
  items8[1] = tmp17Result3;
  items9 = [closure_11(closure_7, obj12), ];
  const obj14 = { variant: "text-md/normal", color: "text-default", children: intl3.string(guildId(1126).t.LKsPRe) };
  const Text3 = tmp2(4886).Text;
  intl3 = tmp2(1126).intl;
  items9[1] = closure_10(Text3, obj14);
  items7[1] = closure_11(closure_7, obj11);
  items6[1] = closure_11(closure_7, obj9);
  const obj16 = { style: items10, children: items11 };
  items10 = [, ];
  ({ message: arr11[0], unfocused: arr11[1] } = tmp);
  items11 = [, ];
  const obj17 = { source: tmp4(13772), style: tmp.avatar, importantForAccessibility: "no" };
  items11[0] = closure_10(closure_6, obj17);
  const obj18 = { style: tmp.messageBody, children: items12 };
  items12 = [closure_10(guildId(4886).Text, { variant: "text-md/semibold", color: "text-default", children: "Phibi" }), ];
  const obj19 = { variant: "text-md/normal", color: "text-default", children: intl4.string(guildId(1126).t.vtCg11) };
  const Text4 = tmp2(4886).Text;
  intl4 = tmp2(1126).intl;
  items12[1] = closure_10(Text4, obj19);
  items11[1] = closure_11(closure_7, obj18);
  items6[2] = closure_11(closure_7, obj16);
  const obj20 = { variant: "primary", text: intl5.string(guildId(1126).t.cQDYRu), loading: tmp13, disabled: tmp10, onPress: callback };
  const Button = tmp2(5594).Button;
  intl5 = tmp2(1126).intl;
  if (!tmp10) {
    tmp10 = tmp13;
  }
  if (!tmp10) {
    tmp10 = isDirty;
  }
  if (!tmp10) {
    tmp10 = null == tag;
  }
  if (!tmp10) {
    tmp10 = "" === tag;
  }
  const obj21 = { children: items2 };
  items6[3] = closure_10(Button, obj20);
  items2[1] = closure_11(Stack, obj4);
  const tmp15Result = closure_11(closure_12, obj21);
  let tmp17Result4 = tmp15Result;
  if ("plain" !== variant) {
    const obj22 = { variant: "secondary", radius: 16, style: tmp.card, children: tmp15Result };
    tmp17Result4 = closure_10(tmp2(5995).Card, obj22);
  }
  return tmp17Result4;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPreview.tsx");

export default tmp5;