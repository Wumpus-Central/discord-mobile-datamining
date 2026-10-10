// === Module 10627: NameplatePreview ===

// Module 10627 (NameplatePreview)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 8373 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles((arg0) => {
  let num = 0;
  if (arg0) {
    num = nativeDefault.radii.sm;
  }
  const obj = { container: { borderRadius: num, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, nameplate: null, avatar: null, content: null };
  let num2 = 0;
  if (arg0) {
    num2 = nativeDefault.radii.sm;
  }
  obj.nameplate = { borderRadius: num2 };
  const obj2 = { borderRadius: num, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.avatar = { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 };
  const obj3 = { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 };
  obj.content = { flex: 1, paddingRight: nativeDefault.space.PX_40 };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplatePreview.tsx");

export const NameplatePreview = ReactCompilerGating.isReactCompilerEnabled() ? (function NameplatePreview(arg0) {
  const cResult = user(576).c(57);
  ({ nameplate, nameplateData, user } = arg0);
  ({ hasRoundedCorners, animate, guildId } = arg0);
  ({ pendingAvatarSrc, pendingDisplayNameStyles, pendingGlobalName, aria-hidden: tmp4 } = arg0);
  let tmp7 = undefined === hasRoundedCorners;
  if (!tmp7) {
    tmp7 = hasRoundedCorners;
  }
  const tmp6Result = closure_9(tmp7);
  if (cResult[0] === nameplate) {
    if (cResult[1] === nameplateData) {
      let tmp9 = cResult[2];
    }
    const avatarDecoration = user(6053).useAvatarDecoration(user, guildId);
    if (cResult[3] !== guildId) {
      const obj2 = { guildId };
      cResult[3] = guildId;
      cResult[4] = obj2;
      let tmp12 = obj2;
    } else {
      tmp12 = cResult[4];
    }
    const pendingAvatarDecoration = guildId(8283)(tmp12).pendingAvatarDecoration;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function w() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[5] = items;
      cResult[6] = fn;
      let tmp16 = fn;
      let tmp15 = items;
    } else {
      tmp15 = cResult[5];
      tmp16 = cResult[6];
    }
    const tmpResult = user(6053);
    const stateFromStores = user(504).useStateFromStores(tmp15, tmp16);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GuildMemberStore];
      cResult[7] = items1;
      let tmp19 = items1;
    } else {
      tmp19 = cResult[7];
    }
    if (cResult[8] === guildId) {
      if (cResult[9] === user) {
        let tmp21 = cResult[10];
      }
      const stateFromStores1 = user(504).useStateFromStores(tmp19, tmp21);
      const tmpResult6 = user(504);
      const name = guildId(4962).useName(user);
      if (pendingGlobalName == null) {
        let tmp25 = name;
        if (null != guildId) {
          let nick;
          if (stateFromStores1 != null) {
            nick = stateFromStores1.nick;
          }
          tmp25 = name;
          if (null != nick) {
            let nick1;
            if (stateFromStores1 != null) {
              nick1 = stateFromStores1.nick;
            }
            tmp25 = nick1;
          }
        }
        pendingGlobalName = tmp25;
      }
      let tmp28 = avatarDecoration;
      if (undefined !== pendingAvatarDecoration) {
        tmp28 = pendingAvatarDecoration;
      }
      if (cResult[11] === guildId) {
        if (cResult[12] === pendingDisplayNameStyles) {
          if (cResult[13] === user.id) {
            let tmp29 = cResult[14];
          }
          const tmp30 = guildId(5628)(tmp29);
          if (cResult[15] === tmp28) {
            if (cResult[16] === tmp6Result.avatar) {
              let tmp31 = cResult[17];
            }
            if (undefined === pendingAvatarSrc) {
              if (cResult[26] === guildId) {
                if (cResult[27] === tmp31) {
                  if (cResult[28] === tmp45) {
                  }
                }
              }
              const obj3 = {};
              const merged = Object.assign(tmp31);
              obj3.user = user;
              obj3.guildId = guildId;
              obj3.animate = !stateFromStores;
              const tmp51 = closure_7(user(1200).Avatar, obj3);
              cResult[26] = guildId;
              cResult[27] = tmp31;
              class E {
                constructor() {
                  member = null;
                  if (null != guildId) {
                    member = null;
                    if (null != user) {
                      tmp4 = closure_6;
                      member = closure_6.getMember(tmp, tmp3.id);
                    }
                  }
                  return member;
                }
              }
              cResult[29] = user;
              cResult[30] = tmp51;
            } else {
              if (cResult[18] === guildId) {
                if (cResult[19] === pendingAvatarSrc) {
                  if (cResult[20] === stateFromStores) {
                    if (cResult[21] === user) {
                      let tmp32 = cResult[22];
                    }
                    if (cResult[23] === tmp31) {
                      if (cResult[24] === tmp32) {
                        let tmp39 = cResult[25];
                      }
                      if (cResult[31] === tmp5) {
                        if (cResult[32] === tmp9) {
                          if (cResult[33] === tmp6Result.nameplate) {
                            let tmp53 = cResult[34];
                          }
                          if (cResult[35] === tmp39) {
                            if (cResult[36] === tmp6Result.avatar) {
                              let tmp56 = cResult[37];
                            }
                            if (cResult[38] === tmp30) {
                              if (cResult[39] === guildId) {
                                if (cResult[40] === pendingGlobalName) {
                                  if (cResult[41] === pendingDisplayNameStyles) {
                                    if (cResult[42] === user.id) {
                                      let tmp60 = cResult[43];
                                    }
                                    if (cResult[44] === tmp30) {
                                      if (cResult[45] === pendingGlobalName) {
                                        let tmp64 = cResult[46];
                                      }
                                      if (cResult[47] === tmp6Result.content) {
                                        if (cResult[48] === tmp60) {
                                          if (cResult[49] === tmp64) {
                                            let tmp67 = cResult[50];
                                          }
                                          if (cResult[51] === tmp4) {
                                            if (cResult[52] === tmp6Result.container) {
                                              if (cResult[53] === tmp53) {
                                                if (cResult[54] === tmp56) {
                                                  if (cResult[55] === tmp67) {
                                                    let tmp71 = cResult[56];
                                                  }
                                                  return tmp71;
                                                }
                                              }
                                            }
                                          }
                                          const obj4 = { style: tmp6Result.container, "aria-hidden": tmp4, children: null };
                                          const items2 = [tmp53, tmp56, tmp67];
                                          obj4.children = items2;
                                          const tmp74 = closure_8(View, obj4);
                                          cResult[51] = tmp4;
                                          cResult[52] = tmp6Result.container;
                                          class E {
                                            constructor() {
                                              member = null;
                                              if (null != guildId) {
                                                member = null;
                                                if (null != user) {
                                                  tmp4 = closure_6;
                                                  member = closure_6.getMember(tmp, tmp3.id);
                                                }
                                              }
                                              return member;
                                            }
                                          }
                                          cResult[53] = tmp53;
                                          cResult[54] = tmp56;
                                          cResult[55] = tmp67;
                                          cResult[56] = tmp74;
                                          tmp71 = tmp74;
                                        }
                                      }
                                      const obj5 = { style: tmp6Result.content, children: null };
                                      const items3 = [tmp60, tmp64];
                                      obj5.children = items3;
                                      const tmp70 = closure_8(View, obj5);
                                      cResult[47] = tmp6Result.content;
                                      cResult[48] = tmp60;
                                      cResult[49] = tmp64;
                                      class E {
                                        constructor() {
                                          member = null;
                                          if (null != guildId) {
                                            member = null;
                                            if (null != user) {
                                              tmp4 = closure_6;
                                              member = closure_6.getMember(tmp, tmp3.id);
                                            }
                                          }
                                          return member;
                                        }
                                      }
                                      cResult[50] = tmp70;
                                      tmp67 = tmp70;
                                    }
                                    let tmp65 = null == tmp30;
                                    if (tmp65) {
                                      const obj6 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: pendingGlobalName };
                                      tmp65 = closure_7(user(5088).Text, obj6);
                                    }
                                    cResult[44] = tmp30;
                                    cResult[45] = pendingGlobalName;
                                    cResult[46] = tmp65;
                                    tmp64 = tmp65;
                                  }
                                }
                              }
                            }
                            let tmp61 = null != tmp30;
                            if (tmp61) {
                              const obj7 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: user(10263).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
                              tmp61 = closure_7(guildId(10262), obj7);
                              const tmp13Result2 = guildId(10262);
                            }
                            cResult[38] = tmp30;
                            cResult[39] = guildId;
                            cResult[40] = pendingGlobalName;
                            cResult[41] = pendingDisplayNameStyles;
                            cResult[42] = user.id;
                            cResult[43] = tmp61;
                            tmp60 = tmp61;
                          }
                          const obj8 = { style: tmp6Result.avatar, children: tmp39 };
                          const tmp59 = closure_7(View, obj8);
                          cResult[35] = tmp39;
                          cResult[36] = tmp6Result.avatar;
                          cResult[37] = tmp59;
                          tmp56 = tmp59;
                        }
                      }
                      const obj9 = { nameplate: tmp9, style: tmp6Result.nameplate, fullOpacity: true, animate: tmp5 };
                      const tmp55 = closure_7(guildId(9021), obj9);
                      cResult[31] = tmp5;
                      cResult[32] = tmp9;
                      cResult[33] = tmp6Result.nameplate;
                      cResult[34] = tmp55;
                      tmp53 = tmp55;
                    }
                    const obj10 = {};
                    const merged1 = Object.assign(tmp31);
                    obj10.source = tmp32;
                    const tmp44 = closure_7(user(1200).Avatar, obj10);
                    cResult[23] = tmp31;
                    cResult[24] = tmp32;
                    cResult[25] = tmp44;
                    tmp39 = tmp44;
                  }
                }
              }
              const tmpResult7 = user(8373);
              const avatarSource = tmpResult7.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
              cResult[18] = guildId;
              cResult[19] = pendingAvatarSrc;
              cResult[20] = stateFromStores;
              cResult[21] = user;
              class E {
                constructor() {
                  member = null;
                  if (null != guildId) {
                    member = null;
                    if (null != user) {
                      tmp4 = closure_6;
                      member = closure_6.getMember(tmp, tmp3.id);
                    }
                  }
                  return member;
                }
              }
              tmp32 = avatarSource;
            }
          }
          const obj11 = { style: tmp6Result.avatar, size: user(1200).AvatarSizes.NORMAL, avatarDecoration: tmp28, autoStatusCutout: true };
          cResult[15] = tmp28;
          cResult[16] = tmp6Result.avatar;
          cResult[17] = obj11;
          tmp31 = obj11;
        }
      }
      const obj12 = { userId: user.id, guildId, pendingDisplayNameStyles };
      cResult[11] = guildId;
      class E {
        constructor() {
          member = null;
          if (null != guildId) {
            member = null;
            if (null != user) {
              tmp4 = closure_6;
              member = closure_6.getMember(tmp, tmp3.id);
            }
          }
          return member;
        }
      }
      cResult[13] = user.id;
      cResult[14] = obj12;
      tmp29 = obj12;
      const tmp13Result = guildId(4962);
    }
    class E {
      constructor() {
        member = null;
        if (null != guildId) {
          member = null;
          if (null != user) {
            tmp4 = closure_6;
            member = closure_6.getMember(tmp, tmp3.id);
          }
        }
        return member;
      }
    }
    cResult[8] = guildId;
    cResult[9] = user;
    cResult[10] = E;
    tmp21 = E;
    const tmpResult5 = user(504);
  }
  let nameplateData1 = nameplateData;
  if (null != nameplate) {
    nameplateData1 = user(1990).getNameplateData(nameplate);
    const tmpResult8 = user(1990);
  }
  cResult[0] = nameplate;
  cResult[1] = nameplateData;
  cResult[2] = nameplateData1;
  tmp9 = nameplateData1;
  const obj = user(576);
}) : (function NameplatePreview(aria_hidden) {
  ({ nameplate, nameplateData, user } = aria_hidden);
  let flag = aria_hidden.hasRoundedCorners;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = aria_hidden.animate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const guildId = aria_hidden.guildId;
  const pendingAvatarSrc = aria_hidden.pendingAvatarSrc;
  ({ pendingDisplayNameStyles, pendingGlobalName } = aria_hidden);
  let stateFromStores;
  let pendingAvatarDecoration;
  const tmp = closure_9(flag);
  noop = tmp;
  if (null != nameplate) {
    nameplateData = user(pendingAvatarSrc[9]).getNameplateData(nameplate);
    let obj = user(pendingAvatarSrc[9]);
  }
  const avatarDecoration = user(pendingAvatarSrc[10]).useAvatarDecoration(user, guildId);
  pendingAvatarDecoration = guildId(pendingAvatarSrc[11])({ guildId }).pendingAvatarDecoration;
  let obj2 = user(pendingAvatarSrc[10]);
  const items = [pendingAvatarDecoration];
  stateFromStores = user(pendingAvatarSrc[12]).useStateFromStores(items, () => pendingAvatarDecoration.useReducedMotion);
  let obj3 = user(pendingAvatarSrc[12]);
  const items1 = [GuildMemberStore];
  const stateFromStores1 = user(pendingAvatarSrc[12]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const obj4 = user(pendingAvatarSrc[12]);
  const name = guildId(pendingAvatarSrc[13]).useName(user);
  if (pendingGlobalName == null) {
    let tmp11 = name;
    if (null != guildId) {
      let nick;
      if (stateFromStores1 != null) {
        nick = stateFromStores1.nick;
      }
      tmp11 = name;
      if (null != nick) {
        let nick1;
        if (stateFromStores1 != null) {
          nick1 = stateFromStores1.nick;
        }
        tmp11 = nick1;
      }
    }
    pendingGlobalName = tmp11;
  }
  let tmp14 = avatarDecoration;
  if (undefined !== pendingAvatarDecoration) {
    tmp14 = pendingAvatarDecoration;
  }
  pendingAvatarDecoration = tmp14;
  const tmp15 = guildId(pendingAvatarSrc[14])({ userId: user.id, guildId, pendingDisplayNameStyles });
  const items2 = [tmp.avatar, user, guildId, pendingAvatarSrc, tmp14, stateFromStores];
  const obj7 = { style: tmp.container, "aria-hidden": aria_hidden["aria-hidden"], children: null };
  const memo = noop.useMemo(() => {
    const obj = { style: user.avatar, size: native.AvatarSizes.NORMAL, avatarDecoration: pendingAvatarDecoration, autoStatusCutout: true };
    if (undefined !== pendingAvatarSrc) {
      const obj2 = {};
      const merged = Object.assign(obj);
      const tmpResult = profile_customization_ProfileCustomizationUtils;
      obj2.source = tmpResult.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores);
      let obj3 = obj2;
    } else {
      obj3 = {};
      const merged1 = Object.assign(obj);
      obj3.user = user;
      obj3.guildId = guildId;
      obj3.animate = !stateFromStores;
    }
    return React5(native.Avatar, obj3);
  }, items2);
  const items3 = [closure_7(guildId(pendingAvatarSrc[17]), { nameplate: nameplateData, style: tmp.nameplate, fullOpacity: true, animate: flag2 }), closure_7(stateFromStores, { style: tmp.avatar, children: memo }), ];
  const obj10 = { style: tmp.content, children: null };
  let tmp19Result = null != tmp15;
  if (tmp19Result) {
    const obj11 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: user(tmp5[19]).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
    tmp19Result = closure_7(tmp7(tmp5[18]), obj11);
    const tmp7Result = tmp7(tmp5[18]);
  }
  const items4 = [tmp19Result, ];
  let tmp19Result2 = null == tmp15;
  if (tmp19Result2) {
    const obj12 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: pendingGlobalName };
    tmp19Result2 = closure_7(user(tmp5[20]).Text, obj12);
  }
  items4[1] = tmp19Result2;
  obj10.children = items4;
  items3[2] = closure_8(stateFromStores, obj10);
  obj7.children = items3;
  return closure_8(stateFromStores, obj7);
});