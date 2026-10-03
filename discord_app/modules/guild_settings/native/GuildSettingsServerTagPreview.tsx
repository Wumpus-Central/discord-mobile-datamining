// === Module 13724: GuildSettingsServerTagPreview ===

// Module 13724 (GuildSettingsServerTagPreview)
import nativeDefault from "native" /* 587 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const GuildTagBadgeSize = fn(7603).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { card: { padding: nativeDefault.space.PX_16 }, notice: null, message: null, unfocused: null, avatar: null, messageBody: null, usernameRow: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.notice = { marginBottom: nativeDefault.space.PX_12 };
let obj4 = { marginBottom: nativeDefault.space.PX_12 };
obj2.message = { flexDirection: "row", columnGap: nativeDefault.space.PX_12, alignItems: "flex-start" };
obj2.unfocused = { opacity: 0.5 };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.round };
obj2.avatar = size;
obj2.messageBody = { flex: 1 };
let obj5 = { flexDirection: "row", columnGap: nativeDefault.space.PX_12, alignItems: "flex-start" };
obj2.usernameRow = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_4 };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_4 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let Card = _require;
  let tmp = dependencyMap;
  const cResult = require("c").c(77);
  guildId = guildId.guildId;
  _require = guildId;
  ({ tag, badge, primaryColor, secondaryColor, variant, onAdopted } = guildId);
  let str = "card";
  if (undefined !== variant) {
    str = variant;
  }
  let card = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function b() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  let obj = require("c");
  const stateFromStores = Card(504).useStateFromStores(tmp3, tmp4);
  const CardResult = Card(504);
  const name = onAdopted(5042).useName(guildId, null, stateFromStores);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === guildId) {
      let tmp8 = cResult[4];
    }
    let identityGuildId;
    if (stateFromStores != null) {
      const primaryGuild = stateFromStores.primaryGuild;
      if (primaryGuild != null) {
        identityGuildId = primaryGuild.identityGuildId;
      }
    }
    let isDirty = identityGuildId === guildId;
    if (isDirty) {
      let identityEnabled;
      if (stateFromStores != null) {
        const primaryGuild2 = stateFromStores.primaryGuild;
        if (primaryGuild2 != null) {
          identityEnabled = primaryGuild2.identityEnabled;
        }
      }
      isDirty = true === identityEnabled;
    }
    [tmp16, dependencyMap] = noop.useState(false);
    if (cResult[5] === guildId) {
      if (cResult[6] === onAdopted) {
        let tmp17 = cResult[7];
      }
      if (cResult[8] !== isDirty) {
        const intl = Card(1126).intl;
        const string = intl.string;
        let hRsJ7T = Card(1126).t;
        if (isDirty) {
          hRsJ7T = hRsJ7T.hRsJ7T;
          let stringResult = string(hRsJ7T);
        } else {
          stringResult = string(hRsJ7T.OVvzY0);
        }
        cResult[8] = isDirty;
        cResult[9] = stringResult;
      } else {
        if (cResult[10] === card.notice) {
          if (cResult[11] === tmp19) {
            let tmp22 = cResult[12];
          }
          if (cResult[13] === card.message) {
            if (cResult[14] === card.unfocused) {
              let tmp25 = cResult[15];
            }
            if (cResult[16] !== card.avatar) {
              const obj2 = { source: onAdopted(12506), style: card.avatar, importantForAccessibility: "no" };
              const tmp29 = closure_10(closure_6, obj2);
              cResult[16] = card.avatar;
              cResult[17] = tmp29;
              let tmp26 = tmp29;
            } else {
              tmp26 = cResult[17];
            }
            const _Symbol = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp32 = closure_10(Card(4886).Text, { variant: "text-md/semibold", color: "text-default", children: "Locke" });
              cResult[18] = tmp32;
              let tmp30 = tmp32;
            } else {
              tmp30 = cResult[18];
            }
            const _Symbol2 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              let obj3 = { variant: "text-md/normal", color: "text-default", children: null };
              const intl2 = Card(1126).intl;
              obj3.children = intl2.string(Card(1126).t.KZQ4mF);
              const tmp35 = closure_10(Card(4886).Text, obj3);
              cResult[19] = tmp35;
              let tmp33 = tmp35;
            } else {
              tmp33 = cResult[19];
            }
            if (cResult[20] !== card.messageBody) {
              let obj5 = { style: card.messageBody, children: null };
              const items1 = [tmp30, tmp33];
              obj5.children = items1;
              const tmp39 = closure_11(closure_7, obj5);
              cResult[20] = card.messageBody;
              cResult[21] = tmp39;
              let tmp36 = tmp39;
            } else {
              tmp36 = cResult[21];
            }
            if (cResult[22] === tmp36) {
              if (cResult[23] === tmp25) {
                if (cResult[24] === tmp26) {
                  let tmp40 = cResult[25];
                }
                if (cResult[26] === tmp8) {
                  if (cResult[27] === card.avatar) {
                    let tmp44 = cResult[28];
                  }
                  if (cResult[29] !== name) {
                    const obj6 = { variant: "text-md/semibold", color: "text-default", children: name };
                    const tmp50 = closure_10(Card(4886).Text, obj6);
                    cResult[29] = name;
                    cResult[30] = tmp50;
                    let tmp48 = tmp50;
                  } else {
                    tmp48 = cResult[30];
                  }
                  if (cResult[31] === badge) {
                    if (cResult[32] === primaryColor) {
                      if (cResult[33] === secondaryColor) {
                        if (cResult[34] === tag) {
                          let tmp51 = cResult[35];
                        }
                        if (cResult[36] === card.usernameRow) {
                          if (cResult[37] === tmp48) {
                            if (cResult[38] === tmp51) {
                              let tmp58 = cResult[39];
                            }
                            const _Symbol3 = Symbol;
                            if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj7 = { variant: "text-md/normal", color: "text-default", children: null };
                              const intl3 = Card(1126).intl;
                              obj7.children = intl3.string(Card(1126).t.LKsPRe);
                              const tmp64 = closure_10(Card(4886).Text, obj7);
                              cResult[40] = tmp64;
                              let tmp62 = tmp64;
                            } else {
                              tmp62 = cResult[40];
                            }
                            if (cResult[41] === card.messageBody) {
                              if (cResult[42] === tmp58) {
                                let tmp65 = cResult[43];
                              }
                              if (cResult[44] === card.message) {
                                if (cResult[45] === tmp44) {
                                  if (cResult[46] === tmp65) {
                                    let tmp69 = cResult[47];
                                  }
                                  if (cResult[48] === card.message) {
                                    if (cResult[49] === card.unfocused) {
                                      let tmp73 = cResult[50];
                                    }
                                    if (cResult[51] !== card.avatar) {
                                      const obj8 = { source: onAdopted(13770), style: card.avatar, importantForAccessibility: "no" };
                                      const tmp77 = closure_10(closure_6, obj8);
                                      cResult[51] = card.avatar;
                                      cResult[52] = tmp77;
                                      let tmp74 = tmp77;
                                    } else {
                                      tmp74 = cResult[52];
                                    }
                                    const _Symbol4 = Symbol;
                                    if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                      const tmp80 = closure_10(Card(4886).Text, { variant: "text-md/semibold", color: "text-default", children: "Phibi" });
                                      cResult[53] = tmp80;
                                      let tmp78 = tmp80;
                                    } else {
                                      tmp78 = cResult[53];
                                    }
                                    const _Symbol5 = Symbol;
                                    if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
                                      const obj9 = { variant: "text-md/normal", color: "text-default", children: null };
                                      const intl4 = Card(1126).intl;
                                      obj9.children = intl4.string(Card(1126).t.vtCg11);
                                      const tmp83 = closure_10(Card(4886).Text, obj9);
                                      cResult[54] = tmp83;
                                      let tmp81 = tmp83;
                                    } else {
                                      tmp81 = cResult[54];
                                    }
                                    if (cResult[55] !== card.messageBody) {
                                      const obj10 = { style: card.messageBody, children: null };
                                      const items2 = [tmp78, tmp81];
                                      obj10.children = items2;
                                      const tmp87 = closure_11(closure_7, obj10);
                                      cResult[55] = card.messageBody;
                                      cResult[56] = tmp87;
                                      let tmp84 = tmp87;
                                    } else {
                                      tmp84 = cResult[56];
                                    }
                                    if (cResult[57] === tmp73) {
                                      if (cResult[58] === tmp74) {
                                        if (cResult[59] === tmp84) {
                                          let tmp88 = cResult[60];
                                        }
                                        const _Symbol6 = Symbol;
                                        if (cResult[61] === Symbol.for("react.memo_cache_sentinel")) {
                                          const intl5 = Card(1126).intl;
                                          const stringResult1 = intl5.string(Card(1126).t.cQDYRu);
                                          cResult[61] = stringResult1;
                                          let tmp92 = stringResult1;
                                        } else {
                                          tmp92 = cResult[61];
                                        }
                                        if (!isDirty) {
                                          isDirty = tmp16;
                                        }
                                        if (!isDirty) {
                                          isDirty = guildId.isDirty;
                                        }
                                        if (!isDirty) {
                                          isDirty = null == tag;
                                        }
                                        if (!isDirty) {
                                          isDirty = "" === tag;
                                        }
                                        if (cResult[62] === tmp16) {
                                          if (cResult[63] === tmp17) {
                                            if (cResult[64] === isDirty) {
                                              let tmp94 = cResult[65];
                                            }
                                            if (cResult[66] === tmp40) {
                                              if (cResult[67] === tmp69) {
                                                if (cResult[68] === tmp88) {
                                                  if (cResult[69] === tmp94) {
                                                    let tmp97 = cResult[70];
                                                  }
                                                  if (cResult[71] === tmp97) {
                                                    if (cResult[72] === tmp22) {
                                                      let tmp100 = cResult[73];
                                                    }
                                                    if ("plain" === str) {
                                                      return tmp100;
                                                    } else {
                                                      if (cResult[74] === tmp100) {
                                                      }
                                                      Card = Card(5995).Card;
                                                      const obj11 = { variant: "secondary", radius: 16, style: card.card, children: tmp100 };
                                                      tmp = closure_10(Card, obj11);
                                                      cResult[74] = tmp100;
                                                      card = card.card;
                                                      cResult[75] = card;
                                                      cResult[76] = tmp;
                                                    }
                                                  }
                                                  const obj12 = { children: null };
                                                  const items3 = [tmp22, tmp97];
                                                  obj12.children = items3;
                                                  const tmp103 = closure_11(closure_12, obj12);
                                                  cResult[71] = tmp97;
                                                  cResult[72] = tmp22;
                                                  cResult[73] = tmp103;
                                                  tmp100 = tmp103;
                                                }
                                              }
                                            }
                                            const obj13 = { spacing: onAdopted(587).space.PX_12, children: null };
                                            const items4 = [tmp40, tmp69, tmp88, tmp94];
                                            obj13.children = items4;
                                            const tmp99 = closure_11(Card(5593).Stack, obj13);
                                            cResult[66] = tmp40;
                                            cResult[67] = tmp69;
                                            cResult[68] = tmp88;
                                            cResult[69] = tmp94;
                                            cResult[70] = tmp99;
                                            tmp97 = tmp99;
                                          }
                                        }
                                        const obj15 = { variant: "primary", text: tmp92, loading: tmp16, disabled: isDirty, onPress: tmp17 };
                                        const tmp96 = closure_10(Card(5594).Button, obj15);
                                        cResult[62] = tmp16;
                                        cResult[63] = tmp17;
                                        cResult[64] = isDirty;
                                        cResult[65] = tmp96;
                                        tmp94 = tmp96;
                                      }
                                    }
                                    const obj16 = { style: tmp73, children: null };
                                    const items5 = [tmp74, tmp84];
                                    obj16.children = items5;
                                    const tmp91 = closure_11(closure_7, obj16);
                                    cResult[57] = tmp73;
                                    cResult[58] = tmp74;
                                    cResult[59] = tmp84;
                                    cResult[60] = tmp91;
                                    tmp88 = tmp91;
                                  }
                                  const items6 = [, ];
                                  ({ message: arr8[0], unfocused: arr8[1] } = card);
                                  cResult[48] = card.message;
                                  cResult[49] = card.unfocused;
                                  cResult[50] = items6;
                                  tmp73 = items6;
                                }
                              }
                              const obj17 = { style: card.message, children: null };
                              const items7 = [tmp44, tmp65];
                              obj17.children = items7;
                              const tmp72 = closure_11(closure_7, obj17);
                              cResult[44] = card.message;
                              cResult[45] = tmp44;
                              cResult[46] = tmp65;
                              cResult[47] = tmp72;
                              tmp69 = tmp72;
                            }
                            const obj18 = { style: card.messageBody, children: null };
                            const items8 = [tmp58, tmp62];
                            obj18.children = items8;
                            const tmp68 = closure_11(closure_7, obj18);
                            cResult[41] = card.messageBody;
                            cResult[42] = tmp58;
                            cResult[43] = tmp68;
                            tmp65 = tmp68;
                          }
                        }
                        const obj19 = { style: card.usernameRow, children: null };
                        const items9 = [tmp48, tmp51];
                        obj19.children = items9;
                        const tmp61 = closure_11(closure_7, obj19);
                        cResult[36] = card.usernameRow;
                        cResult[37] = tmp48;
                        cResult[38] = tmp51;
                        cResult[39] = tmp61;
                        tmp58 = tmp61;
                      }
                    }
                  }
                  let tmp53Result2 = null != tag;
                  if (tmp53Result2) {
                    tmp53Result2 = "" !== tag;
                  }
                  if (tmp53Result2) {
                    const obj20 = { guildTag: tag, guildBadge: null };
                    let tmp53Result;
                    if (null != badge) {
                      const size = { badge, primaryTintColor: primaryColor, secondaryTintColor: secondaryColor, width: null, height: null };
                      ({ SIZE_12: obj14.width, SIZE_12: obj14.height } = GuildTagBadgeSize);
                      tmp53Result = closure_10(Card(13726).GuildBadge, size);
                    }
                    obj20.guildBadge = tmp53Result;
                    tmp53Result2 = closure_10(Card(9395).BaseGuildTagChiplet, obj20);
                  }
                  cResult[31] = badge;
                  cResult[32] = primaryColor;
                  cResult[33] = secondaryColor;
                  cResult[34] = tag;
                  cResult[35] = tmp53Result2;
                  tmp51 = tmp53Result2;
                }
                const obj21 = { source: tmp8, style: card.avatar, importantForAccessibility: "no" };
                const tmp47 = closure_10(closure_6, obj21);
                cResult[26] = tmp8;
                cResult[27] = card.avatar;
                cResult[28] = tmp47;
                tmp44 = tmp47;
              }
            }
            const obj22 = { style: tmp25, children: null };
            const items10 = [tmp26, tmp36];
            obj22.children = items10;
            const tmp43 = closure_11(closure_7, obj22);
            cResult[22] = tmp36;
            cResult[23] = tmp25;
            cResult[24] = tmp26;
            cResult[25] = tmp43;
            tmp40 = tmp43;
          }
          const items11 = [, ];
          ({ message: arr2[0], unfocused: arr2[1] } = card);
          cResult[13] = card.message;
          cResult[14] = card.unfocused;
          cResult[15] = items11;
          tmp25 = items11;
        }
        const obj23 = { variant: "text-sm/medium", color: "text-muted", style: card.notice, children: cResult[9] };
        const tmp24 = closure_10(Card(4886).Text, obj23);
        cResult[10] = card.notice;
        cResult[11] = cResult[9];
        cResult[12] = tmp24;
        tmp22 = tmp24;
      }
    }
    _require = asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
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
              closure_128_0 = undefined;
              v1(true);
              v1 = 1;
              c3 = 1;
              const obj5 = { value: tmp5(dependencyMap[14]).adoptGuildIdentity(tmp5, true), done: false };
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
            closure_128_0 = value;
            v1(false);
            if (closure_128_0.ok) {
              if (tmp2 != null) {
                tmp2();
              }
            }
            c3 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    });
    const fn2 = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[5] = guildId;
    cResult[6] = onAdopted;
    cResult[7] = fn2;
    tmp17 = fn2;
    const tmp15 = _slicedToArray(noop.useState(false), 2);
  }
  let obj4 = onAdopted(5042);
  let avatarURL;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(guildId, 40);
  }
  const source = onAdopted(1402).makeSource(avatarURL);
  cResult[2] = stateFromStores;
  cResult[3] = guildId;
  cResult[4] = source;
  tmp8 = source;
  const tmp6Result = onAdopted(1402);
}) : ((guildId) => {
  guildId = guildId.guildId;
  ({ tag, badge, primaryColor, secondaryColor, variant } = guildId);
  if (variant === undefined) {
    variant = "card";
  }
  const onAdopted = guildId.onAdopted;
  dependencyMap = undefined;
  const tmp = closure_13();
  const items = [UserStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = guildId(504);
  const name = onAdopted(5042).useName(guildId, null, stateFromStores);
  let obj3 = onAdopted(5042);
  let avatarURL;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(guildId, 40);
  }
  let identityGuildId;
  const source = onAdopted(1402).makeSource(avatarURL);
  if (stateFromStores != null) {
    const primaryGuild = stateFromStores.primaryGuild;
    if (primaryGuild != null) {
      identityGuildId = primaryGuild.identityGuildId;
    }
  }
  let isDirty = identityGuildId === guildId;
  if (isDirty) {
    let identityEnabled;
    if (stateFromStores != null) {
      const primaryGuild2 = stateFromStores.primaryGuild;
      if (primaryGuild2 != null) {
        identityEnabled = primaryGuild2.identityEnabled;
      }
    }
    isDirty = true === identityEnabled;
  }
  let obj4 = onAdopted(1402);
  [tmp11, c2] = noop.useState(false);
  const items1 = [guildId, onAdopted];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            dependencyMap(true);
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: tmp2(13725).adoptGuildIdentity(guildId, true), done: false };
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
          closure_128_0 = value;
          closure_129_2(false);
          if (closure_128_0.ok) {
            if (closure_129_1 != null) {
              closure_129_1();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
  }), items1);
  const obj2 = { variant: "text-sm/medium", color: "text-muted", style: tmp.notice, children: null };
  const intl = tmp2(1126).intl;
  const string = intl.string;
  const t = tmp2(1126).t;
  if (isDirty) {
    let stringResult = string(t.hRsJ7T);
  } else {
    stringResult = string(t.OVvzY0);
  }
  obj2.children = stringResult;
  const items2 = [closure_10(guildId(4886).Text, obj2), ];
  let obj5 = { spacing: onAdopted(587).space.PX_12, children: null };
  const obj6 = { style: null, children: null };
  const items3 = [, ];
  ({ message: arr4[0], unfocused: arr4[1] } = tmp);
  obj6.style = items3;
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  const items4 = [closure_10(closure_6, { source: onAdopted(12506), style: tmp.avatar, importantForAccessibility: "no" }), ];
  const obj8 = { style: tmp.messageBody, children: null };
  const items5 = [closure_10(guildId(4886).Text, { variant: "text-md/semibold", color: "text-default", children: "Locke" }), ];
  const obj9 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = tmp2(1126).intl;
  obj9.children = intl2.string(guildId(1126).t.KZQ4mF);
  items5[1] = closure_10(guildId(4886).Text, obj9);
  obj8.children = items5;
  items4[1] = closure_11(closure_7, obj8);
  obj6.children = items4;
  const items6 = [closure_11(closure_7, obj6), , , ];
  const obj10 = { style: tmp.message, children: null };
  const items7 = [closure_10(closure_6, { source, style: tmp.avatar, importantForAccessibility: "no" }), ];
  const obj12 = { style: tmp.messageBody, children: null };
  const obj13 = { style: tmp.usernameRow, children: null };
  const items8 = [closure_10(guildId(4886).Text, { variant: "text-md/semibold", color: "text-default", children: name }), ];
  let tmp15Result3 = null != tag;
  if (tmp15Result3) {
    tmp15Result3 = "" !== tag;
  }
  if (tmp15Result3) {
    const obj14 = { guildTag: tag, guildBadge: null };
    let tmp15Result;
    if (null != badge) {
      const size = { badge, primaryTintColor: primaryColor, secondaryTintColor: secondaryColor, width: null, height: null };
      ({ SIZE_12: obj16.width, SIZE_12: obj16.height } = GuildTagBadgeSize);
      tmp15Result = closure_10(tmp2(13726).GuildBadge, size);
    }
    obj14.guildBadge = tmp15Result;
    tmp15Result3 = closure_10(tmp2(9395).BaseGuildTagChiplet, obj14);
  }
  items8[1] = tmp15Result3;
  obj13.children = items8;
  const items9 = [closure_11(closure_7, obj13), ];
  const obj15 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl3 = tmp2(1126).intl;
  obj15.children = intl3.string(guildId(1126).t.LKsPRe);
  items9[1] = closure_10(guildId(4886).Text, obj15);
  obj12.children = items9;
  items7[1] = closure_11(closure_7, obj12);
  obj10.children = items7;
  items6[1] = closure_11(closure_7, obj10);
  const obj17 = { style: null, children: null };
  const items10 = [, ];
  ({ message: arr11[0], unfocused: arr11[1] } = tmp);
  obj17.style = items10;
  const obj11 = { source, style: tmp.avatar, importantForAccessibility: "no" };
  const obj7 = { source: onAdopted(12506), style: tmp.avatar, importantForAccessibility: "no" };
  const items11 = [closure_10(closure_6, { source: onAdopted(13770), style: tmp.avatar, importantForAccessibility: "no" }), ];
  const obj19 = { style: tmp.messageBody, children: null };
  const items12 = [closure_10(guildId(4886).Text, { variant: "text-md/semibold", color: "text-default", children: "Phibi" }), ];
  const obj20 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl4 = tmp2(1126).intl;
  obj20.children = intl4.string(guildId(1126).t.vtCg11);
  items12[1] = closure_10(guildId(4886).Text, obj20);
  obj19.children = items12;
  items11[1] = closure_11(closure_7, obj19);
  obj17.children = items11;
  items6[2] = closure_11(closure_7, obj17);
  const obj21 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const intl5 = tmp2(1126).intl;
  obj21.text = intl5.string(guildId(1126).t.cQDYRu);
  obj21.loading = tmp11;
  if (!isDirty) {
    isDirty = tmp11;
  }
  if (!isDirty) {
    isDirty = guildId.isDirty;
  }
  if (!isDirty) {
    isDirty = null == tag;
  }
  if (!isDirty) {
    isDirty = "" === tag;
  }
  const obj22 = { children: null };
  obj21.disabled = isDirty;
  obj21.onPress = callback;
  items6[3] = closure_10(guildId(5594).Button, obj21);
  obj5.children = items6;
  items2[1] = closure_11(guildId(5593).Stack, obj5);
  obj22.children = items2;
  const tmp13Result = closure_11(closure_12, obj22);
  let tmp15Result4 = tmp13Result;
  if ("plain" !== variant) {
    const obj23 = { variant: "secondary", radius: 16, style: tmp.card, children: tmp13Result };
    tmp15Result4 = closure_10(tmp2(5995).Card, obj23);
  }
  return tmp15Result4;
});