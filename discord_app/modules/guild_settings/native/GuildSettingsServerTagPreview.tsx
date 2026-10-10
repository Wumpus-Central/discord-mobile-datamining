// discord_app/modules/guild_settings/native/GuildSettingsServerTagPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const GuildTagBadgeSize = fn(7887).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  card: { padding: nativeDefault.space.PX_16 },
  notice: null,
  message: null,
  unfocused: null,
  avatar: null,
  messageBody: null,
  usernameRow: null,
};
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
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_4 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsServerTagPreview(guildId) {
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
      let card = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function p() {
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
      const name = onAdopted(5409).useName(guildId, null, stateFromStores);
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
                  const obj2 = { source: onAdopted(12604), style: card.avatar, importantForAccessibility: "no" };
                  const tmp29 = closure_9(onAdopted(6156), obj2);
                  cResult[16] = card.avatar;
                  cResult[17] = tmp29;
                  let tmp26 = tmp29;
                  const tmp6Result = onAdopted(6156);
                } else {
                  tmp26 = cResult[17];
                }
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp32 = closure_9(Card(5088).Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: "Locke",
                  });
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
                  const tmp35 = closure_9(Card(5088).Text, obj3);
                  cResult[19] = tmp35;
                  let tmp33 = tmp35;
                } else {
                  tmp33 = cResult[19];
                }
                if (cResult[20] !== card.messageBody) {
                  let obj5 = { style: card.messageBody, children: null };
                  const items1 = [tmp30, tmp33];
                  obj5.children = items1;
                  const tmp39 = closure_10(View, obj5);
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
                        const tmp49 = closure_9(Card(5088).Text, obj6);
                        cResult[29] = name;
                        cResult[30] = tmp49;
                        let tmp47 = tmp49;
                      } else {
                        tmp47 = cResult[30];
                      }
                      if (cResult[31] === badge) {
                        if (cResult[32] === primaryColor) {
                          if (cResult[33] === secondaryColor) {
                            if (cResult[34] === tag) {
                              let tmp50 = cResult[35];
                            }
                            if (cResult[36] === card.usernameRow) {
                              if (cResult[37] === tmp47) {
                                if (cResult[38] === tmp50) {
                                  let tmp57 = cResult[39];
                                }
                                const _Symbol3 = Symbol;
                                if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj7 = { variant: "text-md/normal", color: "text-default", children: null };
                                  const intl3 = Card(1126).intl;
                                  obj7.children = intl3.string(Card(1126).t.LKsPRe);
                                  const tmp63 = closure_9(Card(5088).Text, obj7);
                                  cResult[40] = tmp63;
                                  let tmp61 = tmp63;
                                } else {
                                  tmp61 = cResult[40];
                                }
                                if (cResult[41] === card.messageBody) {
                                  if (cResult[42] === tmp57) {
                                    let tmp64 = cResult[43];
                                  }
                                  if (cResult[44] === card.message) {
                                    if (cResult[45] === tmp44) {
                                      if (cResult[46] === tmp64) {
                                        let tmp68 = cResult[47];
                                      }
                                      if (cResult[48] === card.message) {
                                        if (cResult[49] === card.unfocused) {
                                          let tmp72 = cResult[50];
                                        }
                                        if (cResult[51] !== card.avatar) {
                                          const obj8 = {
                                            source: onAdopted(14164),
                                            style: card.avatar,
                                            importantForAccessibility: "no",
                                          };
                                          const tmp76 = closure_9(onAdopted(6156), obj8);
                                          cResult[51] = card.avatar;
                                          cResult[52] = tmp76;
                                          let tmp73 = tmp76;
                                          const tmp6Result3 = onAdopted(6156);
                                        } else {
                                          tmp73 = cResult[52];
                                        }
                                        const _Symbol4 = Symbol;
                                        if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                          const tmp79 = closure_9(Card(5088).Text, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: "Phibi",
                                          });
                                          cResult[53] = tmp79;
                                          let tmp77 = tmp79;
                                        } else {
                                          tmp77 = cResult[53];
                                        }
                                        const _Symbol5 = Symbol;
                                        if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
                                          const obj9 = {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: null,
                                          };
                                          const intl4 = Card(1126).intl;
                                          obj9.children = intl4.string(Card(1126).t.vtCg11);
                                          const tmp82 = closure_9(Card(5088).Text, obj9);
                                          cResult[54] = tmp82;
                                          let tmp80 = tmp82;
                                        } else {
                                          tmp80 = cResult[54];
                                        }
                                        if (cResult[55] !== card.messageBody) {
                                          const obj10 = { style: card.messageBody, children: null };
                                          const items2 = [tmp77, tmp80];
                                          obj10.children = items2;
                                          const tmp86 = closure_10(View, obj10);
                                          cResult[55] = card.messageBody;
                                          cResult[56] = tmp86;
                                          let tmp83 = tmp86;
                                        } else {
                                          tmp83 = cResult[56];
                                        }
                                        if (cResult[57] === tmp72) {
                                          if (cResult[58] === tmp73) {
                                            if (cResult[59] === tmp83) {
                                              let tmp87 = cResult[60];
                                            }
                                            const _Symbol6 = Symbol;
                                            if (cResult[61] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl5 = Card(1126).intl;
                                              const stringResult1 = intl5.string(Card(1126).t.cQDYRu);
                                              cResult[61] = stringResult1;
                                              let tmp91 = stringResult1;
                                            } else {
                                              tmp91 = cResult[61];
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
                                                  let tmp93 = cResult[65];
                                                }
                                                if (cResult[66] === tmp40) {
                                                  if (cResult[67] === tmp68) {
                                                    if (cResult[68] === tmp87) {
                                                      if (cResult[69] === tmp93) {
                                                        let tmp96 = cResult[70];
                                                      }
                                                      if (cResult[71] === tmp96) {
                                                        if (cResult[72] === tmp22) {
                                                          let tmp99 = cResult[73];
                                                        }
                                                        if ("plain" === str) {
                                                          return tmp99;
                                                        } else {
                                                          if (cResult[74] === tmp99) {
                                                          }
                                                          Card = Card(6181).Card;
                                                          const obj11 = {
                                                            variant: "secondary",
                                                            radius: 16,
                                                            style: card.card,
                                                            children: tmp99,
                                                          };
                                                          tmp = closure_9(Card, obj11);
                                                          cResult[74] = tmp99;
                                                          card = card.card;
                                                          cResult[75] = card;
                                                          cResult[76] = tmp;
                                                        }
                                                      }
                                                      const obj12 = { children: null };
                                                      const items3 = [tmp22, tmp96];
                                                      obj12.children = items3;
                                                      const tmp102 = closure_10(closure_11, obj12);
                                                      cResult[71] = tmp96;
                                                      cResult[72] = tmp22;
                                                      cResult[73] = tmp102;
                                                      tmp99 = tmp102;
                                                    }
                                                  }
                                                }
                                                const obj13 = { spacing: onAdopted(587).space.PX_12, children: null };
                                                const items4 = [tmp40, tmp68, tmp87, tmp93];
                                                obj13.children = items4;
                                                const tmp98 = closure_10(Card(5377).Stack, obj13);
                                                cResult[66] = tmp40;
                                                cResult[67] = tmp68;
                                                cResult[68] = tmp87;
                                                cResult[69] = tmp93;
                                                cResult[70] = tmp98;
                                                tmp96 = tmp98;
                                              }
                                            }
                                            const obj15 = {
                                              variant: "primary",
                                              text: tmp91,
                                              loading: tmp16,
                                              disabled: isDirty,
                                              onPress: tmp17,
                                            };
                                            const tmp95 = closure_9(Card(5379).Button, obj15);
                                            cResult[62] = tmp16;
                                            cResult[63] = tmp17;
                                            cResult[64] = isDirty;
                                            cResult[65] = tmp95;
                                            tmp93 = tmp95;
                                          }
                                        }
                                        const obj16 = { style: tmp72, children: null };
                                        const items5 = [tmp73, tmp83];
                                        obj16.children = items5;
                                        const tmp90 = closure_10(View, obj16);
                                        cResult[57] = tmp72;
                                        cResult[58] = tmp73;
                                        cResult[59] = tmp83;
                                        cResult[60] = tmp90;
                                        tmp87 = tmp90;
                                      }
                                      const items6 = [,];
                                      ({ message: arr8[0], unfocused: arr8[1] } = card);
                                      cResult[48] = card.message;
                                      cResult[49] = card.unfocused;
                                      cResult[50] = items6;
                                      tmp72 = items6;
                                    }
                                  }
                                  const obj17 = { style: card.message, children: null };
                                  const items7 = [tmp44, tmp64];
                                  obj17.children = items7;
                                  const tmp71 = closure_10(View, obj17);
                                  cResult[44] = card.message;
                                  cResult[45] = tmp44;
                                  cResult[46] = tmp64;
                                  cResult[47] = tmp71;
                                  tmp68 = tmp71;
                                }
                                const obj18 = { style: card.messageBody, children: null };
                                const items8 = [tmp57, tmp61];
                                obj18.children = items8;
                                const tmp67 = closure_10(View, obj18);
                                cResult[41] = card.messageBody;
                                cResult[42] = tmp57;
                                cResult[43] = tmp67;
                                tmp64 = tmp67;
                              }
                            }
                            const obj19 = { style: card.usernameRow, children: null };
                            const items9 = [tmp47, tmp50];
                            obj19.children = items9;
                            const tmp60 = closure_10(View, obj19);
                            cResult[36] = card.usernameRow;
                            cResult[37] = tmp47;
                            cResult[38] = tmp50;
                            cResult[39] = tmp60;
                            tmp57 = tmp60;
                          }
                        }
                      }
                      let tmp52Result2 = null != tag;
                      if (tmp52Result2) {
                        tmp52Result2 = "" !== tag;
                      }
                      if (tmp52Result2) {
                        const obj20 = { guildTag: tag, guildBadge: null };
                        let tmp52Result;
                        if (null != badge) {
                          const size = {
                            badge,
                            primaryTintColor: primaryColor,
                            secondaryTintColor: secondaryColor,
                            width: null,
                            height: null,
                          };
                          ({ SIZE_12: obj14.width, SIZE_12: obj14.height } = GuildTagBadgeSize);
                          tmp52Result = closure_9(Card(14120).GuildBadge, size);
                        }
                        obj20.guildBadge = tmp52Result;
                        tmp52Result2 = closure_9(Card(8858).BaseGuildTagChiplet, obj20);
                      }
                      cResult[31] = badge;
                      cResult[32] = primaryColor;
                      cResult[33] = secondaryColor;
                      cResult[34] = tag;
                      cResult[35] = tmp52Result2;
                      tmp50 = tmp52Result2;
                    }
                    const obj21 = { source: tmp8, style: card.avatar, importantForAccessibility: "no" };
                    const tmp46 = closure_9(onAdopted(6156), obj21);
                    cResult[26] = tmp8;
                    cResult[27] = card.avatar;
                    cResult[28] = tmp46;
                    tmp44 = tmp46;
                  }
                }
                const obj22 = { style: tmp25, children: null };
                const items10 = [tmp26, tmp36];
                obj22.children = items10;
                const tmp43 = closure_10(View, obj22);
                cResult[22] = tmp36;
                cResult[23] = tmp25;
                cResult[24] = tmp26;
                cResult[25] = tmp43;
                tmp40 = tmp43;
              }
              const items11 = [,];
              ({ message: arr2[0], unfocused: arr2[1] } = card);
              cResult[13] = card.message;
              cResult[14] = card.unfocused;
              cResult[15] = items11;
              tmp25 = items11;
            }
            const obj23 = { variant: "text-sm/medium", color: "text-muted", style: card.notice, children: cResult[9] };
            const tmp24 = closure_9(Card(5088).Text, obj23);
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
              return { value: "IconComponent", done: "+51" };
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
                return { value: "IconComponent", done: "+51" };
              }
            } catch (tmp19) {
              c3 = tmp;
              throw tmp19;
            }
          }
        });
        function t5() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[5] = guildId;
        cResult[6] = onAdopted;
        cResult[7] = t5;
        tmp17 = t5;
        const tmp15 = _slicedToArray(noop.useState(false), 2);
      }
      let obj4 = onAdopted(5409);
      let avatarURL;
      if (stateFromStores != null) {
        avatarURL = stateFromStores.getAvatarURL(guildId, 40);
      }
      const source = onAdopted(1415).makeSource(avatarURL);
      cResult[2] = stateFromStores;
      cResult[3] = guildId;
      cResult[4] = source;
      tmp8 = source;
      const tmp6Result4 = onAdopted(1415);
    }
  : function GuildSettingsServerTagPreview(guildId) {
      guildId = guildId.guildId;
      ({ tag, badge, primaryColor, secondaryColor, variant } = guildId);
      if (variant === undefined) {
        variant = "card";
      }
      const onAdopted = guildId.onAdopted;
      dependencyMap = undefined;
      const tmp = closure_12();
      const items = [UserStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj = guildId(504);
      const name = onAdopted(5409).useName(guildId, null, stateFromStores);
      let obj3 = onAdopted(5409);
      let avatarURL;
      if (stateFromStores != null) {
        avatarURL = stateFromStores.getAvatarURL(guildId, 40);
      }
      let identityGuildId;
      const source = onAdopted(1415).makeSource(avatarURL);
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
      let obj4 = onAdopted(1415);
      [tmp11, c2] = noop.useState(false);
      const items1 = [guildId, onAdopted];
      const callback = noop.useCallback(
        asyncGeneratorStep(async () => {
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
              return { value: "IconComponent", done: "+51" };
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
                  const obj5 = { value: tmp2(14119).adoptGuildIdentity(guildId, true), done: false };
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
                return { value: "IconComponent", done: "+51" };
              }
            } catch (tmp19) {
              c3 = tmp;
              throw tmp19;
            }
          }
        }),
        items1,
      );
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
      const items2 = [closure_9(guildId(5088).Text, obj2)];
      let obj5 = { spacing: onAdopted(587).space.PX_12, children: null };
      const obj6 = { style: null, children: null };
      const items3 = [,];
      ({ message: arr4[0], unfocused: arr4[1] } = tmp);
      obj6.style = items3;
      const obj7 = { source: null, style: null, importantForAccessibility: "no" };
      const tmp10 = _slicedToArray(noop.useState(false), 2);
      obj7.source = onAdopted(12604);
      obj7.style = tmp.avatar;
      const items4 = [closure_9(onAdopted(6156), obj7)];
      const obj8 = { style: tmp.messageBody, children: null };
      const items5 = [
        closure_9(guildId(5088).Text, { variant: "text-md/semibold", color: "text-default", children: "Locke" }),
      ];
      const obj9 = { variant: "text-md/normal", color: "text-default", children: null };
      const intl2 = tmp2(1126).intl;
      obj9.children = intl2.string(guildId(1126).t.KZQ4mF);
      items5[1] = closure_9(guildId(5088).Text, obj9);
      obj8.children = items5;
      items4[1] = closure_10(View, obj8);
      obj6.children = items4;
      const items6 = [closure_10(View, obj6), , ,];
      const obj10 = { style: tmp.message, children: null };
      const items7 = [closure_9(onAdopted(6156), { source, style: tmp.avatar, importantForAccessibility: "no" })];
      const obj12 = { style: tmp.messageBody, children: null };
      const obj13 = { style: tmp.usernameRow, children: null };
      const items8 = [
        closure_9(guildId(5088).Text, { variant: "text-md/semibold", color: "text-default", children: name }),
      ];
      let tmp15Result3 = null != tag;
      if (tmp15Result3) {
        tmp15Result3 = "" !== tag;
      }
      if (tmp15Result3) {
        const obj14 = { guildTag: tag, guildBadge: null };
        let tmp15Result;
        if (null != badge) {
          const size = {
            badge,
            primaryTintColor: primaryColor,
            secondaryTintColor: secondaryColor,
            width: null,
            height: null,
          };
          ({ SIZE_12: obj16.width, SIZE_12: obj16.height } = GuildTagBadgeSize);
          tmp15Result = closure_9(tmp2(14120).GuildBadge, size);
        }
        obj14.guildBadge = tmp15Result;
        tmp15Result3 = closure_9(tmp2(8858).BaseGuildTagChiplet, obj14);
      }
      items8[1] = tmp15Result3;
      obj13.children = items8;
      const items9 = [closure_10(View, obj13)];
      const obj15 = { variant: "text-md/normal", color: "text-default", children: null };
      const intl3 = tmp2(1126).intl;
      obj15.children = intl3.string(guildId(1126).t.LKsPRe);
      items9[1] = closure_9(guildId(5088).Text, obj15);
      obj12.children = items9;
      items7[1] = closure_10(View, obj12);
      obj10.children = items7;
      items6[1] = closure_10(View, obj10);
      const obj17 = { style: null, children: null };
      const items10 = [,];
      ({ message: arr11[0], unfocused: arr11[1] } = tmp);
      obj17.style = items10;
      const obj18 = { source: null, style: null, importantForAccessibility: "no" };
      const obj11 = { source, style: tmp.avatar, importantForAccessibility: "no" };
      const tmp4Result = onAdopted(6156);
      obj18.source = onAdopted(14164);
      obj18.style = tmp.avatar;
      const items11 = [closure_9(onAdopted(6156), obj18)];
      const obj19 = { style: tmp.messageBody, children: null };
      const items12 = [
        closure_9(guildId(5088).Text, { variant: "text-md/semibold", color: "text-default", children: "Phibi" }),
      ];
      const obj20 = { variant: "text-md/normal", color: "text-default", children: null };
      const intl4 = tmp2(1126).intl;
      obj20.children = intl4.string(guildId(1126).t.vtCg11);
      items12[1] = closure_9(guildId(5088).Text, obj20);
      obj19.children = items12;
      items11[1] = closure_10(View, obj19);
      obj17.children = items11;
      items6[2] = closure_10(View, obj17);
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
      items6[3] = closure_9(guildId(5379).Button, obj21);
      obj5.children = items6;
      items2[1] = closure_10(guildId(5377).Stack, obj5);
      obj22.children = items2;
      const tmp13Result = closure_10(closure_11, obj22);
      let tmp15Result4 = tmp13Result;
      if ("plain" !== variant) {
        const obj23 = { variant: "secondary", radius: 16, style: tmp.card, children: tmp13Result };
        tmp15Result4 = closure_9(tmp2(6181).Card, obj23);
      }
      return tmp15Result4;
    };
