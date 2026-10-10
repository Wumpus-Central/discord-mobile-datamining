// === Module 18360: GuildSettingsRoleItem ===

// Module 18360 (GuildSettingsRoleItem)
import nativeDefault from "native" /* 587 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const DEFAULT_ROLE_COLOR_HEX = fn(1085).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "text-md/semibold";
const createStyles = fn(5092);
let obj = { row: { flexDirection: "row", gap: 4, alignItems: "center" }, everyone: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 }, label: null, sparkleIcon: null, dragHandlePressable: null, container: null, gradient: null, image: null };
let prop = fn(5088).TextStyleSheet["text-md/semibold"];
let num;
if (prop != null) {
  num = prop.lineHeight;
}
if (num == null) {
  num = 20;
}
obj.label = { lineHeight: num + 1 };
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 };
let obj4 = { lineHeight: num + 1 };
obj.sparkleIcon = { tintColor: nativeDefault.colors.ICON_MUTED };
obj.dragHandlePressable = { alignSelf: "stretch", justifyContent: "center" };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
obj.container = size;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.gradient = {};
obj.image = { tintColor: "white" };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj5 = { tintColor: nativeDefault.colors.ICON_MUTED };
let obj6 = {};
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleItem(guildId) {
  const cResult = role(onMoveUp[9]).c(82);
  image = onPress(onMoveUp[10])(guildId.guildId, null);
  const tmp5 = closure_10();
  role = guildId.role;
  ({ sorting, locked, onPress } = guildId);
  ({ onLongPress, onMoveUp } = guildId);
  const onMoveDown = guildId.onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ numMembers, isLastRole, isFirstRole } = guildId);
  if (cResult[0] === guildId) {
    if (cResult[1] === role.id) {
      let tmp6 = cResult[2];
    }
    const roleIconProps = tmp(onMoveUp[11]).useRoleIconProps(tmp6);
    const tags = role.tags;
    let guild_connections;
    if (tags != null) {
      guild_connections = tags.guild_connections;
    }
    closure_5 = tmp9;
    if (cResult[3] === guildId) {
      if (cResult[4] === tmp9) {
        if (cResult[5] === role.id) {
          if (cResult[6] === role.name) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] === onPress) {
            if (cResult[11] === onMoveDown) {
              if (cResult[12] === onMoveUp) {
                let tmp13 = cResult[13];
              }
              if (cResult[16] === onMoveDown) {
                if (cResult[17] === onMoveUp) {
                  let tmp22 = cResult[18];
                }
                if (sorting) {
                  if (!locked) {
                    if (cResult[19] !== role.name) {
                      let intl = tmp(onMoveUp[13]).intl;
                      class D {
                        constructor(arg0) {
                          actionName = guildId.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            tmp5 = null;
                            if (onMoveUp != null) {
                              tmp4Result = tmp4();
                            }
                          } else {
                            str = "movedown";
                            if ("movedown" === actionName) {
                              tmp2 = null;
                              if (onMoveDown != null) {
                                tmpResult = tmp();
                              }
                            }
                          }
                          return;
                        }
                      }
                      tmp24[0] = role.name;
                      const formatToPlainStringResult = intl.formatToPlainString(tmp(onMoveUp[13]).t.Zazao2, tmp24);
                      cResult[19] = role.name;
                      cResult[20] = formatToPlainStringResult;
                      let tmp23 = formatToPlainStringResult;
                    } else {
                      tmp23 = cResult[20];
                    }
                    class D {
                      constructor(arg0) {
                        actionName = guildId.nativeEvent.actionName;
                        if ("moveup" === actionName) {
                          tmp5 = null;
                          if (onMoveUp != null) {
                            tmp4Result = tmp4();
                          }
                        } else {
                          str = "movedown";
                          if ("movedown" === actionName) {
                            tmp2 = null;
                            if (onMoveDown != null) {
                              tmpResult = tmp();
                            }
                          }
                        }
                        return;
                      }
                    }
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      const string = tmp(onMoveUp[13]).intl.string;
                      class D {
                        constructor(arg0) {
                          actionName = guildId.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            tmp5 = null;
                            if (onMoveUp != null) {
                              tmp4Result = tmp4();
                            }
                          } else {
                            str = "movedown";
                            if ("movedown" === actionName) {
                              tmp2 = null;
                              if (onMoveDown != null) {
                                tmpResult = tmp();
                              }
                            }
                          }
                          return;
                        }
                      }
                      cResult[21] = tmp28;
                      let tmp27 = tmp28;
                    } else {
                      tmp27 = cResult[21];
                    }
                    let style;
                    if (sortHandlers != null) {
                      style = sortHandlers.style;
                    }
                    if (cResult[22] === tmp5.dragHandlePressable) {
                      if (cResult[23] === style) {
                        let tmp30 = cResult[24];
                      }
                      if (cResult[25] === tmp13) {
                        if (cResult[26] === tmp22) {
                          if (cResult[27] === sortHandlers) {
                            if (cResult[28] === tmp23) {
                              if (!role.managed) {
                                const _Symbol3 = Symbol;
                                class D {
                                  constructor(arg0) {
                                    actionName = guildId.nativeEvent.actionName;
                                    if ("moveup" === actionName) {
                                      tmp5 = null;
                                      if (onMoveUp != null) {
                                        tmp4Result = tmp4();
                                      }
                                    } else {
                                      str = "movedown";
                                      if ("movedown" === actionName) {
                                        tmp2 = null;
                                        if (onMoveDown != null) {
                                          tmpResult = tmp();
                                        }
                                      }
                                    }
                                    return;
                                  }
                                }
                                if (cResult[32] !== role.name) {
                                  let intl2 = tmp(onMoveUp[13]).intl;
                                  class D {
                                    constructor(arg0) {
                                      actionName = guildId.nativeEvent.actionName;
                                      if ("moveup" === actionName) {
                                        tmp5 = null;
                                        if (onMoveUp != null) {
                                          tmp4Result = tmp4();
                                        }
                                      } else {
                                        str = "movedown";
                                        if ("movedown" === actionName) {
                                          tmp2 = null;
                                          if (onMoveDown != null) {
                                            tmpResult = tmp();
                                          }
                                        }
                                      }
                                      return;
                                    }
                                  }
                                  tmp41[0] = role.name;
                                  const formatToPlainStringResult1 = intl2.formatToPlainString(tmp(onMoveUp[13]).t.FiMFTZ, tmp41);
                                  cResult[32] = role.name;
                                  cResult[33] = formatToPlainStringResult1;
                                  let tmp40 = formatToPlainStringResult1;
                                } else {
                                  tmp40 = cResult[33];
                                }
                                if (cResult[34] === tmp10) {
                                  class D {
                                    constructor(arg0) {
                                      actionName = guildId.nativeEvent.actionName;
                                      if ("moveup" === actionName) {
                                        tmp5 = null;
                                        if (onMoveUp != null) {
                                          tmp4Result = tmp4();
                                        }
                                      } else {
                                        str = "movedown";
                                        if ("movedown" === actionName) {
                                          tmp2 = null;
                                          if (onMoveDown != null) {
                                            tmpResult = tmp();
                                          }
                                        }
                                      }
                                      return;
                                    }
                                  }
                                }
                                let obj2 = { icon: tmp39, accessibilityLabel: tmp40, size: "sm", variant: "destructive", onPress: tmp10 };
                                const tmp45 = closure_7(tmp(onMoveUp[18]).IconButton, obj2);
                                cResult[34] = tmp10;
                                cResult[35] = tmp40;
                                cResult[36] = tmp45;
                              } else {
                                let flag2 = true;
                                class D {
                                  constructor(arg0) {
                                    actionName = guildId.nativeEvent.actionName;
                                    if ("moveup" === actionName) {
                                      tmp5 = null;
                                      if (onMoveUp != null) {
                                        tmp4Result = tmp4();
                                      }
                                    } else {
                                      str = "movedown";
                                      if ("movedown" === actionName) {
                                        tmp2 = null;
                                        if (onMoveDown != null) {
                                          tmpResult = tmp();
                                        }
                                      }
                                    }
                                    return;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      class D {
                        constructor(arg0) {
                          actionName = guildId.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            tmp5 = null;
                            if (onMoveUp != null) {
                              tmp4Result = tmp4();
                            }
                          } else {
                            str = "movedown";
                            if ("movedown" === actionName) {
                              tmp2 = null;
                              if (onMoveDown != null) {
                                tmpResult = tmp();
                              }
                            }
                          }
                          return;
                        }
                      }
                      tmp32[1] = tmp23;
                      tmp32[2] = tmp27;
                      tmp32[3] = tmp13;
                      tmp32[4] = tmp22;
                      tmp32[7] = onPress(onMoveUp[6]).space.PX_4;
                      const merged = Object.assign(sortHandlers);
                      tmp32.style = tmp30;
                      cResult[25] = tmp13;
                      cResult[26] = tmp22;
                      cResult[27] = sortHandlers;
                      cResult[28] = tmp23;
                      cResult[29] = tmp30;
                      cResult[30] = tmp32;
                    }
                    const items = [tmp5.dragHandlePressable, style];
                    cResult[22] = tmp5.dragHandlePressable;
                    cResult[23] = style;
                    cResult[24] = items;
                    tmp30 = items;
                  }
                  if (null != roleIconProps) {
                    if (cResult[37] !== roleIconProps) {
                      class D {
                        constructor(arg0) {
                          actionName = guildId.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            tmp5 = null;
                            if (onMoveUp != null) {
                              tmp4Result = tmp4();
                            }
                          } else {
                            str = "movedown";
                            if ("movedown" === actionName) {
                              tmp2 = null;
                              if (onMoveDown != null) {
                                tmpResult = tmp();
                              }
                            }
                          }
                          return;
                        }
                      }
                      const merged1 = Object.assign(roleIconProps);
                      const tmp63 = closure_7(onPress(onMoveUp[19]), {});
                      cResult[37] = roleIconProps;
                      cResult[38] = tmp63;
                      const obj3 = {};
                      const tmp4Result = onPress(onMoveUp[19]);
                    }
                  } else {
                    const tags5 = role.tags;
                    class D {
                      constructor(arg0) {
                        actionName = guildId.nativeEvent.actionName;
                        if ("moveup" === actionName) {
                          tmp5 = null;
                          if (onMoveUp != null) {
                            tmp4Result = tmp4();
                          }
                        } else {
                          str = "movedown";
                          if ("movedown" === actionName) {
                            tmp2 = null;
                            if (onMoveDown != null) {
                              tmpResult = tmp();
                            }
                          }
                        }
                        return;
                      }
                    }
                    if (null === undefined) {
                      if (cResult[39] === guildId) {
                        if (cResult[40] === role) {
                          let tmp54 = cResult[41];
                        }
                        let everyone = tmp54;
                      }
                      class D {
                        constructor(arg0) {
                          actionName = guildId.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            tmp5 = null;
                            if (onMoveUp != null) {
                              tmp4Result = tmp4();
                            }
                          } else {
                            str = "movedown";
                            if ("movedown" === actionName) {
                              tmp2 = null;
                              if (onMoveDown != null) {
                                tmpResult = tmp();
                              }
                            }
                          }
                          return;
                        }
                      }
                      tmp56[1] = guildId;
                      tmp56[2] = role;
                      const tmp57 = closure_7(onPress(onMoveUp[20]), tmp56);
                      cResult[39] = guildId;
                      cResult[40] = role;
                      cResult[41] = tmp57;
                      tmp54 = tmp57;
                    } else {
                      if (cResult[42] === image) {
                        if (cResult[43] === role.colorString) {
                          if (cResult[44] === role.colors) {
                            if (cResult[45] === tmp5.container) {
                              if (cResult[46] === tmp5.gradient) {
                                if (cResult[47] === tmp5.image) {
                                  everyone = cResult[48];
                                }
                              }
                            }
                          }
                        }
                      }
                      if (image) {
                        if (null != role.colors) {
                          class D {
                            constructor(arg0) {
                              actionName = guildId.nativeEvent.actionName;
                              if ("moveup" === actionName) {
                                tmp5 = null;
                                if (onMoveUp != null) {
                                  tmp4Result = tmp4();
                                }
                              } else {
                                str = "movedown";
                                if ("movedown" === actionName) {
                                  tmp2 = null;
                                  if (onMoveDown != null) {
                                    tmpResult = tmp();
                                  }
                                }
                              }
                              return;
                            }
                          }
                          cResult[43] = role.colorString;
                          cResult[44] = role.colors;
                          cResult[45] = tmp5.container;
                          ({ gradient: tmp3[46], image } = tmp5);
                          cResult[47] = image;
                          cResult[48] = tmp47Result;
                        }
                        class D {
                          constructor(arg0) {
                            actionName = guildId.nativeEvent.actionName;
                            if ("moveup" === actionName) {
                              tmp5 = null;
                              if (onMoveUp != null) {
                                tmp4Result = tmp4();
                              }
                            } else {
                              str = "movedown";
                              if ("movedown" === actionName) {
                                tmp2 = null;
                                if (onMoveDown != null) {
                                  tmpResult = tmp();
                                }
                              }
                            }
                            return;
                          }
                        }
                        let obj4 = { style: tmp5.container, children: null };
                        let obj5 = { colors: null, start: null, end: null, style: null };
                        const items1 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
                        const found = items1.filter(tmp(onMoveUp[22]).isNotNullish);
                        obj5.colors = found.map((item) => role(onMoveUp[23]).int2hex(item));
                        obj5.start = { x: 0, y: 0 };
                        obj5.end = { x: 1, y: 0 };
                        obj5.style = tmp5.gradient;
                        const items2 = [closure_7(onPress(onMoveUp[21]), obj5), ];
                        let obj6 = { size: "md", style: tmp5.image };
                        items2[1] = closure_7(tmp(onMoveUp[24]).ShieldUserIcon, obj6);
                        obj4.children = items2;
                        tmp47Result = closure_8(closure_5, obj4);
                        const tmp4Result2 = onPress(onMoveUp[21]);
                      }
                      class D {
                        constructor(arg0) {
                          actionName = guildId.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            tmp5 = null;
                            if (onMoveUp != null) {
                              tmp4Result = tmp4();
                            }
                          } else {
                            str = "movedown";
                            if ("movedown" === actionName) {
                              tmp2 = null;
                              if (onMoveDown != null) {
                                tmpResult = tmp();
                              }
                            }
                          }
                          return;
                        }
                      }
                      const items3 = [tmp5.container, ];
                      const obj7 = { style: null, children: null };
                      const obj8 = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
                      items3[1] = obj8;
                      obj7.style = items3;
                      const obj9 = { size: "md", style: tmp5.image };
                      obj7.children = tmp47(tmp(onMoveUp[24]).ShieldUserIcon, obj9);
                      tmp47Result = tmp47(closure_5, obj7);
                    }
                    if (sorting) {
                      sorting = !flag2;
                    }
                    if (cResult[49] === isEveryoneRole) {
                      if (cResult[50] === everyone) {
                        if (cResult[51] === tmp5.everyone) {
                          if (cResult[53] === role.name) {
                            if (cResult[54] === tmp5.label) {
                              let tmp71 = cResult[55];
                            }
                            const tags2 = role.tags;
                            class D {
                              constructor(arg0) {
                                actionName = guildId.nativeEvent.actionName;
                                if ("moveup" === actionName) {
                                  tmp5 = null;
                                  if (onMoveUp != null) {
                                    tmp4Result = tmp4();
                                  }
                                } else {
                                  str = "movedown";
                                  if ("movedown" === actionName) {
                                    tmp2 = null;
                                    if (onMoveDown != null) {
                                      tmpResult = tmp();
                                    }
                                  }
                                }
                                return;
                              }
                            }
                            if (tags2 != null) {
                              const subscription_listing_id = tags2.subscription_listing_id;
                            }
                            if (cResult[56] === subscription_listing_id) {
                              if (cResult[57] === tmp5.sparkleIcon) {
                                let tmp74 = cResult[58];
                              }
                              if (cResult[59] !== locked) {
                                let tmp81 = null;
                                if (locked) {
                                  tmp81 = closure_7(tmp(onMoveUp[28]).LockIcon, { size: "xxs", color: "icon-subtle" });
                                }
                                class D {
                                  constructor(arg0) {
                                    actionName = guildId.nativeEvent.actionName;
                                    if ("moveup" === actionName) {
                                      tmp5 = null;
                                      if (onMoveUp != null) {
                                        tmp4Result = tmp4();
                                      }
                                    } else {
                                      str = "movedown";
                                      if ("movedown" === actionName) {
                                        tmp2 = null;
                                        if (onMoveDown != null) {
                                          tmpResult = tmp();
                                        }
                                      }
                                    }
                                    return;
                                  }
                                }
                                cResult[59] = locked;
                                cResult[60] = tmp81;
                                let tmp80 = tmp81;
                              } else {
                                tmp80 = cResult[60];
                              }
                              class D {
                                constructor(arg0) {
                                  actionName = guildId.nativeEvent.actionName;
                                  if ("moveup" === actionName) {
                                    tmp5 = null;
                                    if (onMoveUp != null) {
                                      tmp4Result = tmp4();
                                    }
                                  } else {
                                    str = "movedown";
                                    if ("movedown" === actionName) {
                                      tmp2 = null;
                                      if (onMoveDown != null) {
                                        tmpResult = tmp();
                                      }
                                    }
                                  }
                                  return;
                                }
                              }
                              const obj10 = { style: tmp5.row, children: null };
                              const items4 = [tmp71, tmp74, tmp80];
                              obj10.children = items4;
                              const tmp86 = closure_8(closure_5, obj10);
                              cResult[61] = tmp5.row;
                              cResult[62] = tmp71;
                              cResult[63] = tmp74;
                              cResult[64] = tmp80;
                              cResult[65] = tmp86;
                            }
                            const tags3 = role.tags;
                            let prop;
                            if (tags3 != null) {
                              prop = tags3.subscription_listing_id;
                            }
                            let tmp76 = null;
                            if (null != prop) {
                              const obj11 = { size: null, source: null, "aria-label": null, style: null };
                              class D {
                                constructor(arg0) {
                                  actionName = guildId.nativeEvent.actionName;
                                  if ("moveup" === actionName) {
                                    tmp5 = null;
                                    if (onMoveUp != null) {
                                      tmp4Result = tmp4();
                                    }
                                  } else {
                                    str = "movedown";
                                    if ("movedown" === actionName) {
                                      tmp2 = null;
                                      if (onMoveDown != null) {
                                        tmpResult = tmp();
                                      }
                                    }
                                  }
                                  return;
                                }
                              }
                              obj11.size = tmp(onMoveUp[26]).Icon.Sizes.REFRESH_SMALL_16;
                              obj11.source = onPress(onMoveUp[27]);
                              let intl3 = tmp(onMoveUp[13]).intl;
                              obj11["aria-label"] = intl3.string(tmp(onMoveUp[13]).t.a2Ak8b);
                              obj11.style = tmp5.sparkleIcon;
                              tmp76 = closure_7(tmp78, obj11);
                            }
                            const tags4 = role.tags;
                            let prop1;
                            if (tags4 != null) {
                              prop1 = tags4.subscription_listing_id;
                            }
                            cResult[56] = prop1;
                            cResult[57] = tmp5.sparkleIcon;
                            cResult[58] = tmp76;
                            tmp74 = tmp76;
                          }
                          class D {
                            constructor(arg0) {
                              actionName = guildId.nativeEvent.actionName;
                              if ("moveup" === actionName) {
                                tmp5 = null;
                                if (onMoveUp != null) {
                                  tmp4Result = tmp4();
                                }
                              } else {
                                str = "movedown";
                                if ("movedown" === actionName) {
                                  tmp2 = null;
                                  if (onMoveDown != null) {
                                    tmpResult = tmp();
                                  }
                                }
                              }
                              return;
                            }
                          }
                          const obj12 = { lineClamp: 1, style: tmp5.label, variant, color: "interactive-text-active", children: role.name };
                          const tmp73 = closure_7(tmp(onMoveUp[7]).Text, obj12);
                          cResult[53] = role.name;
                          cResult[54] = tmp5.label;
                          cResult[55] = tmp73;
                          tmp71 = tmp73;
                        }
                      }
                    }
                    if (isEveryoneRole) {
                      const obj13 = { style: tmp5.everyone, children: null };
                      class D {
                        constructor(arg0) {
                          actionName = guildId.nativeEvent.actionName;
                          if ("moveup" === actionName) {
                            tmp5 = null;
                            if (onMoveUp != null) {
                              tmp4Result = tmp4();
                            }
                          } else {
                            str = "movedown";
                            if ("movedown" === actionName) {
                              tmp2 = null;
                              if (onMoveDown != null) {
                                tmpResult = tmp();
                              }
                            }
                          }
                          return;
                        }
                      }
                      let obj14 = obj13;
                    } else {
                      obj14 = { children: everyone };
                    }
                    const tmp67Result = closure_7(closure_5, obj14);
                    cResult[49] = isEveryoneRole;
                    cResult[50] = everyone;
                    everyone = tmp5.everyone;
                    cResult[51] = everyone;
                    cResult[52] = tmp67Result;
                  }
                }
                class D {
                  constructor(arg0) {
                    actionName = guildId.nativeEvent.actionName;
                    if ("moveup" === actionName) {
                      tmp5 = null;
                      if (onMoveUp != null) {
                        tmp4Result = tmp4();
                      }
                    } else {
                      str = "movedown";
                      if ("movedown" === actionName) {
                        tmp2 = null;
                        if (onMoveDown != null) {
                          tmpResult = tmp();
                        }
                      }
                    }
                    return;
                  }
                }
                flag2 = false;
                if (!sorting) {
                  flag2 = false;
                  class D {
                    constructor(arg0) {
                      actionName = guildId.nativeEvent.actionName;
                      if ("moveup" === actionName) {
                        tmp5 = null;
                        if (onMoveUp != null) {
                          tmp4Result = tmp4();
                        }
                      } else {
                        str = "movedown";
                        if ("movedown" === actionName) {
                          tmp2 = null;
                          if (onMoveDown != null) {
                            tmpResult = tmp();
                          }
                        }
                      }
                      return;
                    }
                  }
                }
              }
              class D {
                constructor(arg0) {
                  actionName = guildId.nativeEvent.actionName;
                  if ("moveup" === actionName) {
                    tmp5 = null;
                    if (onMoveUp != null) {
                      tmp4Result = tmp4();
                    }
                  } else {
                    str = "movedown";
                    if ("movedown" === actionName) {
                      tmp2 = null;
                      if (onMoveDown != null) {
                        tmpResult = tmp();
                      }
                    }
                  }
                  return;
                }
              }
              cResult[16] = onMoveDown;
              cResult[17] = onMoveUp;
              cResult[18] = D;
              tmp22 = D;
            }
            if (null == onMoveUp) {
              if (null == onMoveDown) {
                cResult[11] = onMoveDown;
                class D {
                  constructor(arg0) {
                    actionName = guildId.nativeEvent.actionName;
                    if ("moveup" === actionName) {
                      tmp5 = null;
                      if (onMoveUp != null) {
                        tmp4Result = tmp4();
                      }
                    } else {
                      str = "movedown";
                      if ("movedown" === actionName) {
                        tmp2 = null;
                        if (onMoveDown != null) {
                          tmpResult = tmp();
                        }
                      }
                    }
                    return;
                  }
                }
                cResult[12] = onMoveUp;
                cResult[13] = arr;
                tmp13 = arr;
              } else {
                const _Symbol2 = Symbol;
                class D {
                  constructor(arg0) {
                    actionName = guildId.nativeEvent.actionName;
                    if ("moveup" === actionName) {
                      tmp5 = null;
                      if (onMoveUp != null) {
                        tmp4Result = tmp4();
                      }
                    } else {
                      str = "movedown";
                      if ("movedown" === actionName) {
                        tmp2 = null;
                        if (onMoveDown != null) {
                          tmpResult = tmp();
                        }
                      }
                    }
                    return;
                  }
                }
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj15 = { name: "movedown", label: null };
                  class D {
                    constructor(arg0) {
                      actionName = guildId.nativeEvent.actionName;
                      if ("moveup" === actionName) {
                        tmp5 = null;
                        if (onMoveUp != null) {
                          tmp4Result = tmp4();
                        }
                      } else {
                        str = "movedown";
                        if ("movedown" === actionName) {
                          tmp2 = null;
                          if (onMoveDown != null) {
                            tmpResult = tmp();
                          }
                        }
                      }
                      return;
                    }
                  }
                  obj15.label = tmp20(tmp(onMoveUp[13]).t["5PbXSy"]);
                  cResult[15] = obj15;
                  let tmp19 = obj15;
                } else {
                  tmp19 = cResult[15];
                }
                arr.push(tmp19);
              }
            } else {
              const _Symbol = Symbol;
              class D {
                constructor(arg0) {
                  actionName = guildId.nativeEvent.actionName;
                  if ("moveup" === actionName) {
                    tmp5 = null;
                    if (onMoveUp != null) {
                      tmp4Result = tmp4();
                    }
                  } else {
                    str = "movedown";
                    if ("movedown" === actionName) {
                      tmp2 = null;
                      if (onMoveDown != null) {
                        tmpResult = tmp();
                      }
                    }
                  }
                  return;
                }
              }
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const obj16 = { name: "moveup", label: null };
                class D {
                  constructor(arg0) {
                    actionName = guildId.nativeEvent.actionName;
                    if ("moveup" === actionName) {
                      tmp5 = null;
                      if (onMoveUp != null) {
                        tmp4Result = tmp4();
                      }
                    } else {
                      str = "movedown";
                      if ("movedown" === actionName) {
                        tmp2 = null;
                        if (onMoveDown != null) {
                          tmpResult = tmp();
                        }
                      }
                    }
                    return;
                  }
                }
                obj16.label = tmp16(tmp(onMoveUp[13]).t.Yl8E4h);
                cResult[14] = obj16;
                let tmp15 = obj16;
              } else {
                tmp15 = cResult[14];
              }
              arr.push(tmp15);
            }
          }
          cResult[8] = onPress;
          cResult[9] = role;
          cResult[10] = tmp12;
        }
      }
    }
    function handleDeleteRow() {
      const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl = role(onMoveUp[13]).intl;
      obj2.title = intl.formatToPlainString(role(onMoveUp[13]).t.FiMFTZ, { name: name.name });
      const intl2 = role(onMoveUp[13]).intl;
      obj2.body = intl2.string(role(onMoveUp[13]).t.qALKny);
      const intl3 = role(onMoveUp[13]).intl;
      obj2.cancelText = intl3.string(role(onMoveUp[13]).t.gm1Vej);
      const intl4 = role(onMoveUp[13]).intl;
      obj2.confirmText = intl4.string(role(onMoveUp[13]).t.p89ACt);
      name = onMoveDown(function*() {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "IconComponent", done: "+51" };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else if (closure_1_5) {
                c1 = 1;
                c2 = 1;
                const obj6 = { value: tmp2(10728).putRoleConnectionsConfigurations(guildId, tmp2.id, []), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            }
            onPress(6097).deleteRole(guildId, tmp2.id);
            c2 = 3;
            return { value: "IconComponent", done: "+51" };
          } catch (tmp16) {
            c2 = tmp;
            throw tmp16;
          }
        }
      });
      obj2.onConfirm = function onConfirm() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj2.confirmColor = onPress(onMoveUp[16]).Colors.RED;
      onPress(onMoveUp[12]).show(obj2);
    }
    cResult[3] = guildId;
    cResult[4] = null === guild_connections;
    cResult[5] = role.id;
    cResult[6] = role.name;
    cResult[7] = handleDeleteRow;
    tmp10 = handleDeleteRow;
    const tmpResult = tmp(onMoveUp[11]);
  }
  const obj17 = { guildId, roleId: role.id, size: 32 };
  cResult[0] = guildId;
  cResult[1] = role.id;
  cResult[2] = obj17;
  tmp6 = obj17;
  let obj = role(onMoveUp[9]);
}) : (function GuildSettingsRoleItem(guildId) {
  const tmp4 = closure_10();
  const role = guildId.role;
  ({ sorting, locked, onPress: importDefault, onMoveUp } = guildId);
  const onMoveDown = guildId.onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ onLongPress, numMembers, isLastRole, isFirstRole } = guildId);
  const tmp3 = require("useHasEnhancedRoleColors")(guildId.guildId, null);
  const roleIconProps = role(onMoveUp[11]).useRoleIconProps({ guildId, roleId: role.id, size: 32 });
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  closure_5 = tmp8;
  const items = [];
  if (null != onMoveUp) {
    const obj3 = { name: "moveup", label: null };
    let intl = tmp5(onMoveUp[13]).intl;
    obj3.label = intl.string(tmp5(onMoveUp[13]).t.Yl8E4h);
    items.push(obj3);
  }
  if (null != onMoveDown) {
    let obj4 = { name: "movedown", label: null };
    let intl2 = tmp5(onMoveUp[13]).intl;
    obj4.label = intl2.string(tmp5(onMoveUp[13]).t["5PbXSy"]);
    items.push(obj4);
  }
  const items1 = [onMoveUp, onMoveDown];
  if (sorting) {
    if (!locked) {
      let obj5 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, delayLongPress: 100, activeOpacity: 0.8, hitSlop: null };
      let intl3 = tmp5(onMoveUp[13]).intl;
      let obj6 = { name: role.name };
      obj5.accessibilityLabel = intl3.formatToPlainString(tmp5(onMoveUp[13]).t.Zazao2, obj6);
      let intl4 = tmp5(onMoveUp[13]).intl;
      obj5.accessibilityHint = intl4.string(tmp5(onMoveUp[13]).t.BGMUFB);
      obj5.accessibilityActions = items;
      obj5.onAccessibilityAction = tmp11;
      obj5.hitSlop = require("native").space.PX_4;
      const merged = Object.assign(sortHandlers);
      const items2 = [tmp4.dragHandlePressable, ];
      let style;
      if (sortHandlers != null) {
        style = sortHandlers.style;
      }
      items2[1] = style;
      obj5.style = items2;
      let flag = false;
      let flag2 = true;
      let tmp17 = obj5;
      if (!tmp16) {
        const obj7 = { icon: null, accessibilityLabel: null, size: "sm", variant: "destructive", onPress: null };
        const obj8 = { size: "xs", color: require("native").colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT };
        obj7.icon = closure_7(tmp5(onMoveUp[17]).TrashIcon, obj8);
        const intl5 = tmp5(onMoveUp[13]).intl;
        const obj9 = { name: role.name };
        obj7.accessibilityLabel = intl5.formatToPlainString(tmp5(onMoveUp[13]).t.FiMFTZ, obj9);
        obj7.onPress = function handleDeleteRow() {
          const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
          const intl = role(onMoveUp[13]).intl;
          obj2.title = intl.formatToPlainString(role(onMoveUp[13]).t.FiMFTZ, { name: name.name });
          const intl2 = role(onMoveUp[13]).intl;
          obj2.body = intl2.string(role(onMoveUp[13]).t.qALKny);
          const intl3 = role(onMoveUp[13]).intl;
          obj2.cancelText = intl3.string(role(onMoveUp[13]).t.gm1Vej);
          const intl4 = role(onMoveUp[13]).intl;
          obj2.confirmText = intl4.string(role(onMoveUp[13]).t.p89ACt);
          name = onMoveDown(function*() {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj4 = { value, done: true };
                return obj4;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else if (closure_1_5) {
                    c1 = 1;
                    c2 = 1;
                    const obj6 = { value: tmp2(10728).putRoleConnectionsConfigurations(guildId, tmp2.id, []), done: false };
                    return obj6;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                GuildActionCreatorsDefault.deleteRole(guildId, tmp2.id);
                c2 = 3;
                return { value: "IconComponent", done: "+51" };
              } catch (tmp16) {
                c2 = tmp;
                throw tmp16;
              }
            }
          });
          obj2.onConfirm = function onConfirm() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          obj2.confirmColor = require("common/Alert").Colors.RED;
          require("actions/AlertActionCreators").show(obj2);
        };
        flag = false;
        flag2 = true;
        tmp17 = obj5;
        const tmp18 = closure_7(tmp5(onMoveUp[18]).IconButton, obj7);
      }
      tmp16 = role.managed && !tmp8;
    }
    if (null != roleIconProps) {
      const obj10 = {};
      const merged1 = Object.assign(roleIconProps);
      let tmp21Result = closure_7(require("RoleIcon"), obj10);
      let tmp24 = closure_7;
      const tmpResult = require("RoleIcon");
    } else {
      const tags3 = role.tags;
      let guild_connections1;
      if (tags3 != null) {
        guild_connections1 = tags3.guild_connections;
      }
      if (null === guild_connections1) {
        const obj11 = { size: 32, guildId, role };
        tmp21Result = closure_7(require("VerifiedRoleIcon"), obj11);
        tmp24 = closure_7;
      } else {
        if (tmp3) {
          if (null != role.colors) {
            if (null != role.colors.secondary_color) {
              const obj12 = { style: tmp4.container, children: null };
              const obj13 = { colors: null, start: null, end: null, style: null };
              const items3 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
              const found = items3.filter(tmp5(onMoveUp[22]).isNotNullish);
              obj13.colors = found.map((item) => role(onMoveUp[23]).int2hex(item));
              obj13.start = { x: 0, y: 0 };
              obj13.end = { x: 1, y: 0 };
              obj13.style = tmp4.gradient;
              const items4 = [closure_7(require("LinearGradient"), obj13), ];
              const obj14 = { size: "md", style: tmp4.image };
              items4[1] = closure_7(tmp5(onMoveUp[24]).ShieldUserIcon, obj14);
              obj12.children = items4;
              tmp21Result = closure_8(closure_5, obj12);
              tmp24 = closure_7;
              const tmpResult2 = require("LinearGradient");
            }
          }
        }
        const items5 = [tmp4.container, ];
        const obj15 = { style: null, children: null };
        const obj16 = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
        items5[1] = obj16;
        obj15.style = items5;
        const obj17 = { size: "md", style: tmp4.image };
        obj15.children = closure_7(tmp5(onMoveUp[24]).ShieldUserIcon, obj17);
        tmp21Result = closure_7(closure_5, obj15);
        tmp24 = closure_7;
      }
    }
    const obj18 = { onLongPress, onPress: null, disabled: null, draggable: null, dragHandlePressableProps: null, trailing: null, arrow: null, icon: null, label: null, subLabel: null, start: null, end: null };
    let handlePress;
    if (!sorting) {
      handlePress = function handlePress() {
        if (importDefault != null) {
          tmp(role);
        }
      };
    }
    obj18.onPress = handlePress;
    if (sorting) {
      sorting = !flag2;
    }
    obj18.disabled = sorting;
    obj18.draggable = flag2;
    obj18.dragHandlePressableProps = tmp17;
    obj18.trailing = tmp18;
    obj18.arrow = flag;
    if (isEveryoneRole) {
      const obj19 = { style: tmp4.everyone, children: tmp24(tmp5(onMoveUp[25]).GroupIcon, {}) };
      let obj20 = obj19;
    } else {
      obj20 = { children: tmp21Result };
    }
    obj18.icon = tmp24(closure_5, obj20);
    const obj21 = { style: tmp4.row, children: null };
    const obj22 = { lineClamp: 1, style: tmp4.label, variant, color: "interactive-text-active", children: role.name };
    const items6 = [tmp24(tmp5(onMoveUp[7]).Text, obj22), , ];
    const tags2 = role.tags;
    let prop;
    if (tags2 != null) {
      prop = tags2.subscription_listing_id;
    }
    let tmp24Result = null;
    if (null != prop) {
      const obj23 = { size: tmp5(onMoveUp[26]).Icon.Sizes.REFRESH_SMALL_16, source: require("module_9466"), "aria-label": null, style: null };
      const intl6 = tmp5(onMoveUp[13]).intl;
      obj23["aria-label"] = intl6.string(tmp5(onMoveUp[13]).t.a2Ak8b);
      obj23.style = tmp4.sparkleIcon;
      tmp24Result = tmp24(tmp5(onMoveUp[26]).Icon, obj23);
    }
    items6[1] = tmp24Result;
    let tmp24Result2 = null;
    if (locked) {
      tmp24Result2 = tmp24(tmp5(onMoveUp[28]).LockIcon, { size: "xxs", color: "icon-subtle" });
    }
    items6[2] = tmp24Result2;
    obj21.children = items6;
    obj18.label = closure_8(closure_5, obj21);
    const intl7 = tmp5(onMoveUp[13]).intl;
    if (isEveryoneRole) {
      let stringResult = intl7.string(tmp5(onMoveUp[13]).t["72gF3G"]);
    } else {
      const obj24 = { count: null };
      const _HermesInternal = HermesInternal;
      obj24.count = "" + numMembers;
      stringResult = intl7.formatToPlainString(tmp5(onMoveUp[13]).t.AWmdd9, obj24);
    }
    obj18.subLabel = stringResult;
    obj18.start = isFirstRole;
    obj18.end = isLastRole;
    return tmp24(tmp5(onMoveUp[29]).TableRow, obj18);
  }
  flag = false;
  flag2 = false;
  if (!sorting) {
    flag = true;
    flag2 = false;
  }
  let obj = role(onMoveUp[11]);
  let obj2 = { guildId, roleId: role.id, size: 32 };
}));