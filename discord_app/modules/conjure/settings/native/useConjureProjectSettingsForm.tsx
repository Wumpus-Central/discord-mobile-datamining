// discord_app/modules/conjure/settings/native/useConjureProjectSettingsForm.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureProjectTypes from "../../projects/ConjureProjectTypes.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
const DEFAULT_ROLE_COLOR_HEX = fn(1084).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const ConjureCollaboratorRolesSheet = "ConjureCollaboratorRolesSheet";
let createStyles = fn(5005);
let obj2 = {
  content: { gap: nativeDefault.space.PX_16 },
  roleLabel: null,
  roleListContent: null,
  roleListEmpty: null,
  roleListFooter: null,
};
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.roleLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.roleListContent = { paddingBottom: nativeDefault.space.PX_64 };
let obj5 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.roleListEmpty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let obj6 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.roleListFooter = {
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_48,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let closure_12 = createStyles.createStyles(obj2);
createStyles = fn(5005);
let closure_13 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: null };
  const size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  obj.circle = size;
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RoleColorCircle(color) {
      const cResult = c.c(2);
      const tmp2 = closure_13(color.color);
      if (cResult[0] !== tmp2.circle) {
        const obj2 = { style: tmp2.circle };
        const tmp6 = React6(View, obj2);
        cResult[0] = tmp2.circle;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function RoleColorCircle(color) {
      return React6(View, { style: closure_13(color.color).circle });
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureCollaboratorRolesSheet(guildId) {
      const cResult = guildId(onSave[10]).c(40);
      guildId = guildId.guildId;
      const initialSelectedRoleIds = guildId.initialSelectedRoleIds;
      onSave = guildId.onSave;
      const tmp4 = closure_12();
      const roleLabel = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildRoleStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class R {
          constructor() {
            return closure_7.getSortedRoles(guildId);
          }
        }
        const items1 = [guildId];
        cResult[1] = guildId;
        cResult[2] = R;
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        class R {
          constructor() {
            return closure_7.getSortedRoles(guildId);
          }
        }
        tmp8 = cResult[3];
      }
      let obj = guildId(onSave[10]);
      const stateFromStoresArray = guildId(onSave[11]).useStateFromStoresArray(first, R, tmp8);
      if (cResult[4] !== initialSelectedRoleIds) {
        class R {
          constructor() {
            return closure_7.getSortedRoles(guildId);
          }
        }
        cResult[4] = initialSelectedRoleIds;
        cResult[5] = tmp11;
      } else {
        class R {
          constructor() {
            return closure_7.getSortedRoles(guildId);
          }
        }
      }
      const tmp12 = roleListEmpty(noop.useState(tmp11), 2);
      roleListEmpty = tmp12[0];
      noop = tmp12[1];
      const tmpResult = guildId(onSave[11]);
      [tmp14, tmp15] = roleListEmpty(noop.useState(""), 2);
      if (cResult[6] !== tmp14) {
        class R {
          constructor() {
            return closure_7.getSortedRoles(guildId);
          }
        }
        let toLocaleLowerCaseResult = obj3.toLocaleLowerCase();
        cResult[6] = tmp14;
        cResult[7] = toLocaleLowerCaseResult;
      } else {
        class R {
          constructor() {
            return closure_7.getSortedRoles(guildId);
          }
        }
      }
      View = tmp16;
      if (cResult[8] === tmp16) {
        class R {
          constructor() {
            return closure_7.getSortedRoles(guildId);
          }
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
          cResult[11] = V;
        } else {
          class V {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
        }
        GuildRoleStore = V;
        if (cResult[12] === onSave) {
          class V {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
          if (cResult[15] !== roleListEmpty.size) {
            class V {
              constructor(arg0, arg1) {
                closure_0 = guildId;
                closure_1 = arg1;
                tmp = closure_5((size) => {
                  if (closure_1) {
                    if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                      return size;
                    }
                  }
                  const set = new Set(size);
                  if (closure_1) {
                    set.add(closure_0);
                  } else {
                    set.delete(closure_0);
                  }
                  return set;
                });
                return;
              }
            }
            let obj2 = { count: roleListEmpty.size, max: tmp(tmp2[12]).MAX_PROJECT_COLLABORATOR_ROLES };
            let formatToPlainStringResult = obj4.formatToPlainString(initialSelectedRoleIds(tmp2[15]).g5I05P, obj2);
            cResult[15] = roleListEmpty.size;
            cResult[16] = formatToPlainStringResult;
          } else {
            class V {
              constructor(arg0, arg1) {
                closure_0 = guildId;
                closure_1 = arg1;
                tmp = closure_5((size) => {
                  if (closure_1) {
                    if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                      return size;
                    }
                  }
                  const set = new Set(size);
                  if (closure_1) {
                    set.add(closure_0);
                  } else {
                    set.delete(closure_0);
                  }
                  return set;
                });
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class V {
              constructor(arg0, arg1) {
                closure_0 = guildId;
                closure_1 = arg1;
                tmp = closure_5((size) => {
                  if (closure_1) {
                    if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                      return size;
                    }
                  }
                  const set = new Set(size);
                  if (closure_1) {
                    set.add(closure_0);
                  } else {
                    set.delete(closure_0);
                  }
                  return set;
                });
                return;
              }
            }
            const stringResult = obj6.string(initialSelectedRoleIds(tmp2[15]).un99lK);
            cResult[17] = stringResult;
          } else {
            class V {
              constructor(arg0, arg1) {
                closure_0 = guildId;
                closure_1 = arg1;
                tmp = closure_5((size) => {
                  if (closure_1) {
                    if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                      return size;
                    }
                  }
                  const set = new Set(size);
                  if (closure_1) {
                    set.add(closure_0);
                  } else {
                    set.delete(closure_0);
                  }
                  return set;
                });
                return;
              }
            }
          }
          if (cResult[18] !== tmp21) {
            class V {
              constructor(arg0, arg1) {
                closure_0 = guildId;
                closure_1 = arg1;
                tmp = closure_5((size) => {
                  if (closure_1) {
                    if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                      return size;
                    }
                  }
                  const set = new Set(size);
                  if (closure_1) {
                    set.add(closure_0);
                  } else {
                    set.delete(closure_0);
                  }
                  return set;
                });
                return;
              }
            }
            const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp21 };
            const tmp28 = closure_9(tmp(tmp2[16]).Text, obj5);
            cResult[18] = tmp21;
            cResult[19] = tmp28;
          } else {
            class V {
              constructor(arg0, arg1) {
                closure_0 = guildId;
                closure_1 = arg1;
                tmp = closure_5((size) => {
                  if (closure_1) {
                    if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                      return size;
                    }
                  }
                  const set = new Set(size);
                  if (closure_1) {
                    set.add(closure_0);
                  } else {
                    set.delete(closure_0);
                  }
                  return set;
                });
                return;
              }
            }
          }
          if (cResult[20] === tmp4.roleListFooter) {
            class V {
              constructor(arg0, arg1) {
                closure_0 = guildId;
                closure_1 = arg1;
                tmp = closure_5((size) => {
                  if (closure_1) {
                    if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                      return size;
                    }
                  }
                  const set = new Set(size);
                  if (closure_1) {
                    set.add(closure_0);
                  } else {
                    set.delete(closure_0);
                  }
                  return set;
                });
                return;
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
              const stringResult1 = obj9.string(initialSelectedRoleIds(tmp2[15])["pO3+p5"]);
              cResult[23] = stringResult1;
              const tmp33 = stringResult1;
            } else {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
            }
            const _Symbol4 = Symbol;
            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
              const stringResult2 = obj10.string(tmp(tmp2[14]).t.i4jeWR);
              cResult[24] = stringResult2;
              const tmp36 = stringResult2;
            } else {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
            }
            if (cResult[25] !== tmp20) {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
              const obj7 = { title: tmp33, trailing: null };
              const obj8 = { label: tmp36, onPress: tmp20 };
              obj7.trailing = closure_9(tmp(tmp2[18]).ActionSheetHeaderPressableText, obj8);
              const tmp39 = closure_9(tmp(tmp2[17]).BottomSheetTitleHeader, obj7);
              cResult[25] = tmp20;
              cResult[26] = tmp39;
            } else {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
            }
            const _Symbol5 = Symbol;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
              const obj11 = {
                size: "md",
                round: true,
                grow: false,
                accessibilityLabel: null,
                placeholder: null,
                onChange: null,
              };
              let intl = tmp(tmp2[14]).intl;
              obj11.accessibilityLabel = intl.string(tmp(tmp2[14]).t.Sojqsr);
              const intl2 = tmp(tmp2[14]).intl;
              obj11.placeholder = intl2.string(tmp(tmp2[14]).t.Sojqsr);
              obj11.onChange = tmp15;
              const tmp41 = closure_9(tmp(tmp2[19]).SearchBar, obj11);
              cResult[27] = tmp41;
            } else {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
            }
            if (cResult[28] === arr3) {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
            }
            if (0 === arr3.length) {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
              const obj12 = { style: tmp4.roleListEmpty, children: null };
              const obj13 = { variant: "text-md/normal", color: "text-muted", children: null };
              const intl3 = tmp(tmp2[14]).intl;
              obj13.children = intl3.string(tmp(tmp2[14]).t.V6nAfF);
              obj12.children = closure_9(tmp(tmp2[16]).Text, obj13);
              let tmp42 = closure_9(View, obj12);
            } else {
              class V {
                constructor(arg0, arg1) {
                  closure_0 = guildId;
                  closure_1 = arg1;
                  tmp = closure_5((size) => {
                    if (closure_1) {
                      if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                        return size;
                      }
                    }
                    const set = new Set(size);
                    if (closure_1) {
                      set.add(closure_0);
                    } else {
                      set.delete(closure_0);
                    }
                    return set;
                  });
                  return;
                }
              }
              const obj14 = {
                hasIcons: false,
                children: arr3.map((children) => {
                  const id = children;
                  const hasItem = roleListEmpty.has(children.id);
                  let tmp3 = !hasItem;
                  if (!hasItem) {
                    tmp3 = roleListEmpty.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES;
                  }
                  const obj = { style: roleLabel.roleLabel, children: null };
                  const colorStrings = children.colorStrings;
                  let primaryColor;
                  if (colorStrings != null) {
                    primaryColor = colorStrings.primaryColor;
                  }
                  if (primaryColor == null) {
                    primaryColor = children.colorString;
                  }
                  if (primaryColor == null) {
                    primaryColor = DEFAULT_ROLE_COLOR_HEX;
                  }
                  const obj2 = { label: null, checked: null, disabled: null, accessibilityHint: null, onPress: null };
                  const items = [
                    closure_1_9(closure_1_14, { color: primaryColor }),
                    closure_1_9(guildId(onSave[16]).Text, { variant: "text-md/medium", children: children.name }),
                  ];
                  obj.children = items;
                  obj2.label = closure_1_10(toLocaleLowerCaseResult, obj);
                  obj2.checked = hasItem;
                  obj2.disabled = tmp3;
                  let formatToPlainStringResult;
                  if (tmp3) {
                    const intl = guildId(onSave[14]).intl;
                    const obj4 = { max: guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES };
                    formatToPlainStringResult = intl.formatToPlainString(
                      initialSelectedRoleIds(onSave[15])["dH7+/Z"],
                      obj4,
                    );
                  }
                  obj2.accessibilityHint = formatToPlainStringResult;
                  obj2.onPress = function onPress(arg0) {
                    return closure_7(id.id, arg0);
                  };
                  return closure_1_9(guildId(onSave[21]).TableCheckboxRow, obj2, children.id);
                }),
              };
              tmp42 = closure_9(tmp(tmp2[20]).TableRowGroup, obj14);
            }
            cResult[28] = arr3;
            cResult[29] = roleListEmpty;
            ({ roleLabel: tmp3[30], roleListEmpty } = tmp4);
            cResult[31] = roleListEmpty;
            cResult[32] = tmp42;
          }
          const obj15 = { style: tmp4.roleListFooter, children: tmp27 };
          const tmp32 = closure_9(View, obj15);
          cResult[20] = tmp4.roleListFooter;
          cResult[21] = tmp27;
          cResult[22] = tmp32;
        }
        const fn = function z() {
          onSave(new Set(roleListEmpty));
          const set = new Set(roleListEmpty);
          ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCollaboratorRolesSheet);
        };
        cResult[12] = onSave;
        cResult[13] = roleListEmpty;
        cResult[14] = fn;
      }
      if ("" !== tmp16) {
        class V {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              const set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
            return;
          }
        }
      }
      cResult[8] = tmp16;
      cResult[9] = stateFromStoresArray;
      cResult[10] = stateFromStoresArray;
      const tmp13 = roleListEmpty(noop.useState(""), 2);
    }
  : function ConjureCollaboratorRolesSheet(guildId) {
      guildId = guildId.guildId;
      ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
      let first;
      c7 = undefined;
      const tmp = closure_12();
      const roleLabel = tmp;
      let items = [c7];
      const items1 = [guildId];
      const stateFromStoresArray = guildId(onSave[11]).useStateFromStoresArray(
        items,
        () => GuildRoleStore.getSortedRoles(guildId),
        items1,
      );
      const tmp5 = stateFromStoresArray(
        first.useState(() => new Set(importDefault)),
        2,
      );
      first = tmp5[0];
      closure_6 = tmp5[1];
      let obj = guildId(onSave[11]);
      [str, tmp8] = stateFromStoresArray(first.useState(""), 2);
      const trimmed = str.trim();
      let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
      c7 = toLocaleLowerCaseResult;
      const items2 = [toLocaleLowerCaseResult, stateFromStoresArray];
      const memo = first.useMemo(() => {
        if ("" === c7) {
          let found = stateFromStoresArray;
        } else {
          found = stateFromStoresArray.filter((id) => {
            let hasItem = id.id === closure_1_7;
            if (!hasItem) {
              const name = id.name;
              hasItem = name.toLocaleLowerCase().includes(tmp);
              const toLocaleLowerCaseResult = name.toLocaleLowerCase();
            }
            return hasItem;
          });
        }
        return found;
      }, items2);
      closure_8 = first.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_6((size) => {
          if (closure_1) {
            if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
              return size;
            }
          }
          const set = new Set(size);
          if (closure_1) {
            set.add(closure_0);
          } else {
            set.delete(closure_0);
          }
          return set;
        });
      }, []);
      const items3 = [onSave, first];
      const callback = first.useCallback(() => {
        onSave(new Set(first));
        const set = new Set(first);
        ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCollaboratorRolesSheet);
      }, items3);
      let intl = guildId(onSave[14]).intl;
      const tmp7 = stateFromStoresArray(first.useState(""), 2);
      let obj2 = { count: first.size, max: guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES };
      const obj3 = {
        startExpanded: true,
        keyboardShouldPersistTaps: "handled",
        dismissAccessibilityLabel: null,
        footer: null,
        header: null,
        children: null,
      };
      const intl2 = guildId(onSave[14]).intl;
      obj3.dismissAccessibilityLabel = intl2.string(require("../../intl/ConjureUntranslated.messages.js").un99lK);
      let formatToPlainStringResult = intl.formatToPlainString(
        require("../../intl/ConjureUntranslated.messages.js").g5I05P,
        { count: first.size, max: guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES },
      );
      obj3.footer = closure_9(closure_6, {
        style: tmp.roleListFooter,
        children: closure_9(guildId(onSave[16]).Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: intl.formatToPlainString(require("../../intl/ConjureUntranslated.messages.js").g5I05P, {
            count: first.size,
            max: guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES,
          }),
        }),
      });
      const obj5 = { title: null, trailing: null };
      const intl3 = guildId(onSave[14]).intl;
      obj5.title = intl3.string(require("../../intl/ConjureUntranslated.messages.js")["pO3+p5"]);
      const obj6 = { label: null, onPress: null };
      const intl4 = guildId(onSave[14]).intl;
      obj6.label = intl4.string(guildId(onSave[14]).t.i4jeWR);
      obj6.onPress = callback;
      obj5.trailing = closure_9(guildId(onSave[18]).ActionSheetHeaderPressableText, obj6);
      obj3.header = closure_9(guildId(onSave[17]).BottomSheetTitleHeader, obj5);
      const obj7 = {
        size: "md",
        round: true,
        grow: false,
        accessibilityLabel: null,
        placeholder: null,
        onChange: null,
      };
      const intl5 = guildId(onSave[14]).intl;
      obj7.accessibilityLabel = intl5.string(guildId(onSave[14]).t.Sojqsr);
      const intl6 = guildId(onSave[14]).intl;
      obj7.placeholder = intl6.string(guildId(onSave[14]).t.Sojqsr);
      obj7.onChange = tmp8;
      const items4 = [closure_9(guildId(onSave[19]).SearchBar, obj7)];
      const obj8 = { style: tmp.roleListContent, children: null };
      if (0 === memo.length) {
        const obj9 = { style: tmp.roleListEmpty, children: null };
        const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
        const intl7 = tmp2(onSave[14]).intl;
        obj10.children = intl7.string(tmp2(onSave[14]).t.V6nAfF);
        obj9.children = closure_9(tmp2(onSave[16]).Text, obj10);
        let tmp13Result = closure_9(tmp14, obj9);
      } else {
        const obj11 = {
          hasIcons: false,
          children: memo.map((children) => {
            const id = children;
            const hasItem = first.has(children.id);
            let tmp3 = !hasItem;
            if (!hasItem) {
              tmp3 = first.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES;
            }
            const obj = { style: roleLabel.roleLabel, children: null };
            const colorStrings = children.colorStrings;
            let primaryColor;
            if (colorStrings != null) {
              primaryColor = colorStrings.primaryColor;
            }
            if (primaryColor == null) {
              primaryColor = children.colorString;
            }
            if (primaryColor == null) {
              primaryColor = closure_8;
            }
            const obj2 = { label: null, checked: null, disabled: null, accessibilityHint: null, onPress: null };
            const items = [
              closure_1_9(closure_1_14, { color: primaryColor }),
              closure_1_9(guildId(onSave[16]).Text, { variant: "text-md/medium", children: children.name }),
            ];
            obj.children = items;
            obj2.label = closure_1_10(closure_6, obj);
            obj2.checked = hasItem;
            obj2.disabled = tmp3;
            let formatToPlainStringResult;
            if (tmp3) {
              const intl = guildId(onSave[14]).intl;
              const obj4 = { max: guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES };
              formatToPlainStringResult = intl.formatToPlainString(
                require("../../intl/ConjureUntranslated.messages.js")["dH7+/Z"],
                obj4,
              );
            }
            obj2.accessibilityHint = formatToPlainStringResult;
            obj2.onPress = function onPress(arg0) {
              return closure_8(id.id, arg0);
            };
            return closure_1_9(guildId(onSave[21]).TableCheckboxRow, obj2, children.id);
          }),
        };
        tmp13Result = closure_9(tmp2(onSave[20]).TableRowGroup, obj11);
      }
      obj8.children = tmp13Result;
      items4[1] = closure_9(closure_6, obj8);
      obj3.children = items4;
      return closure_10(guildId(onSave[22]).ActionSheet, obj3);
    };
ReactCompilerGating = fn(558);
let obj7 = {
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_48,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureProjectSettingsForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureProjectSettingsForm(projectId, arg1, arg2) {
      _require = arg1;
      const cResult = require("c").c(83);
      if (cResult[0] !== arg2) {
        let obj2 = arg2;
        if (undefined === arg2) {
          obj2 = {};
        }
        cResult[0] = arg2;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const readOnly = tmp4.readOnly;
      const tmp6 = closure_12();
      const tmp8 = selectedRoleIds(handleFlagChange[23])(projectId, arg1);
      ({
        iconURL,
        description,
        liveReload,
        smartContext,
        hostApproval,
        name,
        nameError,
        nameChanged,
        isPublic,
        isGuildCollaboration,
        selectedRoleIds,
      } = tmp8);
      ({
        supportsVisibility,
        supportsCollaboration,
        supportsCollaboratorRoles,
        checkingAppInGuild,
        saving,
        saveError,
        experimentalError,
        canSave,
        handleIconChange,
        handleNameChange,
        handleDescriptionChange,
        handleFlagChange,
      } = tmp8);
      ({ handleLiveReloadChange, handleRoleSelectionChange } = tmp8);
      const ensureAppInGuild = tmp8.ensureAppInGuild;
      ({ handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp8);
      let tmp9 = saving;
      if (!saving) {
        tmp9 = tmp5;
      }
      if (cResult[2] === ensureAppInGuild) {
        if (cResult[3] === arg1) {
          if (cResult[4] === handleRoleSelectionChange) {
            if (cResult[5] === selectedRoleIds) {
              let tmp10 = cResult[6];
            }
            if (cResult[7] !== tmp5) {
              let tmp12 = null;
              if (tmp5) {
                let obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
                const intl = tmp(handleFlagChange[14]).intl;
                obj3.children = intl.string(selectedRoleIds(handleFlagChange[15]).s7VnVF);
                tmp12 = closure_9(tmp(handleFlagChange[16]).Text, obj3);
              }
              cResult[7] = tmp5;
              cResult[8] = tmp12;
              let tmp11 = tmp12;
            } else {
              tmp11 = cResult[8];
            }
            if (cResult[9] === description) {
              if (cResult[10] === tmp9) {
                if (cResult[11] === handleDescriptionChange) {
                  if (cResult[12] === handleIconChange) {
                    if (cResult[13] === handleNameChange) {
                      if (cResult[14] === iconURL) {
                        if (cResult[15] === name) {
                          if (cResult[16] === nameError) {
                            let tmp14 = cResult[17];
                          }
                          if (cResult[18] === tmp9) {
                            if (cResult[19] === handleFlagChange) {
                              if (cResult[20] === isPublic) {
                                if (cResult[21] === supportsVisibility) {
                                  let tmp17 = cResult[22];
                                }
                                if (cResult[23] === tmp9) {
                                  if (cResult[24] === handleFlagChange) {
                                    if (cResult[25] === isGuildCollaboration) {
                                      if (cResult[26] === supportsCollaboration) {
                                        if (cResult[27] === supportsVisibility) {
                                          let tmp20 = cResult[28];
                                        }
                                        if (cResult[29] === tmp9) {
                                          if (cResult[30] === handleLiveReloadChange) {
                                            if (cResult[31] === liveReload.available) {
                                              if (cResult[32] === liveReload.checked) {
                                                if (cResult[33] === liveReload.description) {
                                                  let tmp23 = cResult[34];
                                                }
                                                if (cResult[35] === checkingAppInGuild) {
                                                  if (cResult[36] === tmp9) {
                                                    if (cResult[37] === tmp10) {
                                                      if (cResult[38] === isGuildCollaboration) {
                                                        if (cResult[39] === supportsCollaboratorRoles) {
                                                          let tmp26 = cResult[40];
                                                        }
                                                        if (cResult[41] !== saveError) {
                                                          let tmp32 = null;
                                                          if (null != saveError) {
                                                            let obj4 = { accessibilityRole: "alert", children: null };
                                                            let obj5 = {
                                                              variant: "text-xs/normal",
                                                              color: "text-feedback-critical",
                                                              children: saveError,
                                                            };
                                                            obj4.children = closure_9(
                                                              tmp(handleFlagChange[16]).Text,
                                                              obj5,
                                                            );
                                                            tmp32 = closure_9(View, obj4);
                                                          }
                                                          cResult[41] = saveError;
                                                          cResult[42] = tmp32;
                                                          let tmp31 = tmp32;
                                                        } else {
                                                          tmp31 = cResult[42];
                                                        }
                                                        if (cResult[43] === tmp6.content) {
                                                          if (cResult[44] === tmp31) {
                                                            if (cResult[45] === tmp11) {
                                                              if (cResult[46] === tmp14) {
                                                                if (cResult[47] === tmp17) {
                                                                  if (cResult[48] === tmp20) {
                                                                    if (cResult[49] === tmp23) {
                                                                      if (cResult[50] === tmp26) {
                                                                        let tmp35 = cResult[51];
                                                                      }
                                                                      const _Symbol = Symbol;
                                                                      if (
                                                                        cResult[52] ===
                                                                        Symbol.for("react.memo_cache_sentinel")
                                                                      ) {
                                                                        const intl10 = tmp(handleFlagChange[14]).intl;
                                                                        const stringResult = intl10.string(
                                                                          selectedRoleIds(handleFlagChange[15])[
                                                                            "4liZ45"
                                                                          ],
                                                                        );
                                                                        const intl11 = tmp(handleFlagChange[14]).intl;
                                                                        const stringResult1 = intl11.string(
                                                                          selectedRoleIds(handleFlagChange[15]).I5cl7p,
                                                                        );
                                                                        cResult[52] = stringResult;
                                                                        cResult[53] = stringResult1;
                                                                        let tmp41 = stringResult1;
                                                                        let tmp40 = stringResult;
                                                                      } else {
                                                                        tmp40 = cResult[52];
                                                                        tmp41 = cResult[53];
                                                                      }
                                                                      if (cResult[54] === handleSmartContextChange) {
                                                                        if (cResult[55] === saving) {
                                                                          if (cResult[56] === smartContext.checked) {
                                                                            let tmp44 = cResult[57];
                                                                          }
                                                                          const _Symbol2 = Symbol;
                                                                          if (
                                                                            cResult[58] ===
                                                                            Symbol.for("react.memo_cache_sentinel")
                                                                          ) {
                                                                            const intl12 = tmp(
                                                                              handleFlagChange[14],
                                                                            ).intl;
                                                                            const stringResult2 = intl12.string(
                                                                              selectedRoleIds(handleFlagChange[15])
                                                                                .mpjaVm,
                                                                            );
                                                                            const intl13 = tmp(
                                                                              handleFlagChange[14],
                                                                            ).intl;
                                                                            const stringResult3 = intl13.string(
                                                                              selectedRoleIds(handleFlagChange[15])[
                                                                                "2PxChh"
                                                                              ],
                                                                            );
                                                                            cResult[58] = stringResult2;
                                                                            cResult[59] = stringResult3;
                                                                            let tmp48 = stringResult3;
                                                                            let tmp47 = stringResult2;
                                                                          } else {
                                                                            tmp47 = cResult[58];
                                                                            tmp48 = cResult[59];
                                                                          }
                                                                          if (
                                                                            cResult[60] ===
                                                                            handleRequireHostApprovalChange
                                                                          ) {
                                                                            if (cResult[61] === hostApproval.checked) {
                                                                              if (cResult[62] === saving) {
                                                                                let tmp51 = cResult[63];
                                                                              }
                                                                              if (cResult[64] === tmp44) {
                                                                                if (cResult[65] === tmp51) {
                                                                                  let tmp54 = cResult[66];
                                                                                }
                                                                                if (cResult[67] !== projectId) {
                                                                                  let obj6 = { projectId };
                                                                                  const tmp59 = closure_9(
                                                                                    tmp(handleFlagChange[26])
                                                                                      .ConjureAllowedHostsSetting,
                                                                                    obj6,
                                                                                  );
                                                                                  cResult[67] = projectId;
                                                                                  cResult[68] = tmp59;
                                                                                  let tmp57 = tmp59;
                                                                                } else {
                                                                                  tmp57 = cResult[68];
                                                                                }
                                                                                if (cResult[69] !== experimentalError) {
                                                                                  let tmp61 = null;
                                                                                  if (null != experimentalError) {
                                                                                    let obj7 = {
                                                                                      accessibilityRole: "alert",
                                                                                      children: null,
                                                                                    };
                                                                                    const obj8 = {
                                                                                      variant: "text-xs/normal",
                                                                                      color: "text-feedback-critical",
                                                                                      children: experimentalError,
                                                                                    };
                                                                                    obj7.children = closure_9(
                                                                                      tmp(handleFlagChange[16]).Text,
                                                                                      obj8,
                                                                                    );
                                                                                    tmp61 = closure_9(View, obj7);
                                                                                  }
                                                                                  cResult[69] = experimentalError;
                                                                                  cResult[70] = tmp61;
                                                                                  let tmp60 = tmp61;
                                                                                } else {
                                                                                  tmp60 = cResult[70];
                                                                                }
                                                                                if (cResult[71] === tmp6.content) {
                                                                                  if (cResult[72] === tmp54) {
                                                                                    if (cResult[73] === tmp57) {
                                                                                      if (cResult[74] === tmp60) {
                                                                                        let tmp64 = cResult[75];
                                                                                      }
                                                                                      if (cResult[76] === canSave) {
                                                                                        if (cResult[77] === tmp64) {
                                                                                          if (cResult[78] === tmp35) {
                                                                                            if (
                                                                                              cResult[79] ===
                                                                                              nameChanged
                                                                                            ) {
                                                                                              if (
                                                                                                cResult[80] === saving
                                                                                              ) {
                                                                                                if (
                                                                                                  cResult[81] === submit
                                                                                                ) {
                                                                                                  let tmp68 =
                                                                                                    cResult[82];
                                                                                                }
                                                                                                return tmp68;
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      const obj9 = {
                                                                                        fields: tmp35,
                                                                                        experimentalFields: tmp64,
                                                                                        canSave,
                                                                                        saving,
                                                                                        nameChanged,
                                                                                        submit,
                                                                                      };
                                                                                      cResult[76] = canSave;
                                                                                      cResult[77] = tmp64;
                                                                                      cResult[78] = tmp35;
                                                                                      cResult[79] = nameChanged;
                                                                                      cResult[80] = saving;
                                                                                      cResult[81] = submit;
                                                                                      cResult[82] = obj9;
                                                                                      tmp68 = obj9;
                                                                                    }
                                                                                  }
                                                                                }
                                                                                const obj11 = {
                                                                                  style: tmp6.content,
                                                                                  children: null,
                                                                                };
                                                                                let items = [tmp54, tmp57, tmp60];
                                                                                obj11.children = items;
                                                                                const tmp67 = closure_10(View, obj11);
                                                                                cResult[71] = tmp6.content;
                                                                                cResult[72] = tmp54;
                                                                                cResult[73] = tmp57;
                                                                                cResult[74] = tmp60;
                                                                                cResult[75] = tmp67;
                                                                                tmp64 = tmp67;
                                                                              }
                                                                              const obj12 = {
                                                                                hasIcons: false,
                                                                                children: null,
                                                                              };
                                                                              const items1 = [tmp44, tmp51];
                                                                              obj12.children = items1;
                                                                              const tmp56 = closure_10(
                                                                                tmp(handleFlagChange[20]).TableRowGroup,
                                                                                obj12,
                                                                              );
                                                                              cResult[64] = tmp44;
                                                                              cResult[65] = tmp51;
                                                                              cResult[66] = tmp56;
                                                                              tmp54 = tmp56;
                                                                            }
                                                                          }
                                                                          const obj13 = {
                                                                            label: tmp47,
                                                                            subLabel: tmp48,
                                                                            checked: hostApproval.checked,
                                                                            disabled: saving,
                                                                            onPress: handleRequireHostApprovalChange,
                                                                          };
                                                                          const tmp53 = closure_9(
                                                                            tmp(handleFlagChange[21]).TableCheckboxRow,
                                                                            obj13,
                                                                          );
                                                                          cResult[60] = handleRequireHostApprovalChange;
                                                                          cResult[61] = hostApproval.checked;
                                                                          cResult[62] = saving;
                                                                          cResult[63] = tmp53;
                                                                          tmp51 = tmp53;
                                                                        }
                                                                      }
                                                                      const obj14 = {
                                                                        label: tmp40,
                                                                        subLabel: tmp41,
                                                                        checked: smartContext.checked,
                                                                        disabled: saving,
                                                                        onPress: handleSmartContextChange,
                                                                      };
                                                                      const tmp46 = closure_9(
                                                                        tmp(handleFlagChange[21]).TableCheckboxRow,
                                                                        obj14,
                                                                      );
                                                                      cResult[54] = handleSmartContextChange;
                                                                      cResult[55] = saving;
                                                                      cResult[56] = smartContext.checked;
                                                                      cResult[57] = tmp46;
                                                                      tmp44 = tmp46;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj15 = { style: tmp6.content, children: null };
                                                        const items2 = [
                                                          tmp11,
                                                          tmp14,
                                                          tmp17,
                                                          tmp20,
                                                          tmp23,
                                                          tmp26,
                                                          tmp31,
                                                        ];
                                                        obj15.children = items2;
                                                        const tmp38 = closure_10(View, obj15);
                                                        cResult[43] = tmp6.content;
                                                        cResult[44] = tmp31;
                                                        cResult[45] = tmp11;
                                                        cResult[46] = tmp14;
                                                        cResult[47] = tmp17;
                                                        cResult[48] = tmp20;
                                                        cResult[49] = tmp23;
                                                        cResult[50] = tmp26;
                                                        cResult[51] = tmp38;
                                                        tmp35 = tmp38;
                                                      }
                                                    }
                                                  }
                                                }
                                                let tmp28Result = null;
                                                if (supportsCollaboratorRoles) {
                                                  const obj16 = {
                                                    label: null,
                                                    subLabel: null,
                                                    arrow: true,
                                                    disabled: null,
                                                    accessibilityHint: null,
                                                    onPress: null,
                                                  };
                                                  const intl7 = tmp(handleFlagChange[14]).intl;
                                                  obj16.label = intl7.string(
                                                    selectedRoleIds(handleFlagChange[15])["pO3+p5"],
                                                  );
                                                  const intl8 = tmp(handleFlagChange[14]).intl;
                                                  obj16.subLabel = intl8.string(
                                                    selectedRoleIds(handleFlagChange[15])["9MdtK9"],
                                                  );
                                                  let tmp29 = tmp9;
                                                  if (!tmp9) {
                                                    tmp29 = !isGuildCollaboration;
                                                  }
                                                  if (!tmp29) {
                                                    tmp29 = checkingAppInGuild;
                                                  }
                                                  obj16.disabled = tmp29;
                                                  let stringResult4;
                                                  if (!isGuildCollaboration) {
                                                    const intl9 = tmp(handleFlagChange[14]).intl;
                                                    stringResult4 = intl9.string(
                                                      selectedRoleIds(handleFlagChange[15]).nZw5r9,
                                                    );
                                                  }
                                                  const obj17 = { hasIcons: false, children: null };
                                                  obj16.accessibilityHint = stringResult4;
                                                  obj16.onPress = tmp10;
                                                  obj17.children = closure_9(tmp(handleFlagChange[25]).TableRow, obj16);
                                                  tmp28Result = closure_9(
                                                    tmp(handleFlagChange[20]).TableRowGroup,
                                                    obj17,
                                                  );
                                                }
                                                cResult[35] = checkingAppInGuild;
                                                cResult[36] = tmp9;
                                                cResult[37] = tmp10;
                                                cResult[38] = isGuildCollaboration;
                                                cResult[39] = supportsCollaboratorRoles;
                                                cResult[40] = tmp28Result;
                                                tmp26 = tmp28Result;
                                              }
                                            }
                                          }
                                        }
                                        let tmp24 = null;
                                        if (liveReload.available) {
                                          const obj18 = { hasIcons: false, children: null };
                                          const obj19 = {
                                            label: null,
                                            subLabel: null,
                                            checked: null,
                                            disabled: null,
                                            onPress: null,
                                          };
                                          const intl6 = tmp(handleFlagChange[14]).intl;
                                          obj19.label = intl6.string(selectedRoleIds(handleFlagChange[15]).eEo0ye);
                                          ({ description: obj10.subLabel, checked: obj10.checked } = liveReload);
                                          obj19.disabled = tmp9;
                                          obj19.onPress = handleLiveReloadChange;
                                          obj18.children = closure_9(tmp(handleFlagChange[21]).TableCheckboxRow, obj19);
                                          tmp24 = closure_9(tmp(handleFlagChange[20]).TableRowGroup, obj18);
                                        }
                                        cResult[29] = tmp9;
                                        cResult[30] = handleLiveReloadChange;
                                        cResult[31] = liveReload.available;
                                        cResult[32] = liveReload.checked;
                                        cResult[33] = liveReload.description;
                                        cResult[34] = tmp24;
                                        tmp23 = tmp24;
                                      }
                                    }
                                  }
                                }
                                let tmp21 = null;
                                if (supportsVisibility) {
                                  tmp21 = null;
                                  if (supportsCollaboration) {
                                    const obj20 = { hasIcons: false, children: null };
                                    const obj21 = {
                                      label: null,
                                      subLabel: null,
                                      checked: null,
                                      disabled: null,
                                      onPress: null,
                                    };
                                    const intl4 = tmp(handleFlagChange[14]).intl;
                                    obj21.label = intl4.string(selectedRoleIds(handleFlagChange[15]).lVvR4E);
                                    const intl5 = tmp(handleFlagChange[14]).intl;
                                    obj21.subLabel = intl5.string(selectedRoleIds(handleFlagChange[15]).SQZGoV);
                                    obj21.checked = isGuildCollaboration;
                                    obj21.disabled = tmp9;
                                    obj21.onPress = function onPress(arg0) {
                                      return handleFlagChange(
                                        ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION,
                                        arg0,
                                      );
                                    };
                                    obj20.children = closure_9(tmp(handleFlagChange[21]).TableCheckboxRow, obj21);
                                    tmp21 = closure_9(tmp(handleFlagChange[20]).TableRowGroup, obj20);
                                  }
                                }
                                cResult[23] = tmp9;
                                cResult[24] = handleFlagChange;
                                cResult[25] = isGuildCollaboration;
                                cResult[26] = supportsCollaboration;
                                cResult[27] = supportsVisibility;
                                cResult[28] = tmp21;
                                tmp20 = tmp21;
                              }
                            }
                          }
                          let tmp18 = null;
                          if (supportsVisibility) {
                            const obj22 = { hasIcons: false, children: null };
                            const obj23 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
                            const intl2 = tmp(handleFlagChange[14]).intl;
                            obj23.label = intl2.string(selectedRoleIds(handleFlagChange[15]).ujIxRm);
                            const intl3 = tmp(handleFlagChange[14]).intl;
                            obj23.subLabel = intl3.string(selectedRoleIds(handleFlagChange[15]).gT8zk1);
                            obj23.checked = isPublic;
                            obj23.disabled = tmp9;
                            obj23.onPress = function onPress(arg0) {
                              return handleFlagChange(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
                            };
                            obj22.children = closure_9(tmp(handleFlagChange[21]).TableCheckboxRow, obj23);
                            tmp18 = closure_9(tmp(handleFlagChange[20]).TableRowGroup, obj22);
                          }
                          cResult[18] = tmp9;
                          cResult[19] = handleFlagChange;
                          cResult[20] = isPublic;
                          cResult[21] = supportsVisibility;
                          cResult[22] = tmp18;
                          tmp17 = tmp18;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj45 = {
              iconURL,
              onIconChange: handleIconChange,
              name,
              nameError,
              onNameChange: handleNameChange,
              description,
              onDescriptionChange: handleDescriptionChange,
              disabled: tmp9,
            };
            const tmp16 = closure_9(tmp(handleFlagChange[24]).ConjureAppIdentitySection, obj45);
            cResult[9] = description;
            cResult[10] = tmp9;
            cResult[11] = handleDescriptionChange;
            cResult[12] = handleIconChange;
            cResult[13] = handleNameChange;
            cResult[14] = iconURL;
            cResult[15] = name;
            cResult[16] = nameError;
            cResult[17] = tmp16;
            tmp14 = tmp16;
          }
        }
      }
      _require = handleRoleSelectionChange(function* () {
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
            v3 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp3;
                const guildId = tmp3;
                if (null != guildId) {
                  c2 = 1;
                  c3 = 2;
                  v3 = 1;
                  const obj4 = { value: v3(), done: false };
                  return obj4;
                } else {
                  v3 = 3;
                }
              }
            } else if (1 === tmp7) {
              c2 = 0;
              v3 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c2 = 0;
              if (value) {
                const obj5 = { content: null, key: null, stackingBehavior: "stack" };
                const obj6 = { guildId, initialSelectedRoleIds: null, onSave: null };
                const _Set = Set;
                const set = new Set(closure_1);
                obj6.initialSelectedRoleIds = set;
                obj6.onSave = function onSave(arg0) {
                  const items = [...arg0];
                  return closure_1_3(items);
                };
                obj5.content = React6(closure_2_15, obj6);
                obj5.key = key;
                guildId(handleFlagChange[13]).showActionSheet(obj5);
                const obj = guildId(handleFlagChange[13]);
              } else {
                v3 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              }
            }
            c2 = 0;
            v3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } catch (tmp24) {
            if (tmp4 === c2) {
              v3 = tmp2;
              throw tmp24;
            } else {
              c3 = tmp;
            }
          }
        }
      });
      function t3() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[2] = ensureAppInGuild;
      cResult[3] = arg1;
      cResult[4] = handleRoleSelectionChange;
      cResult[5] = selectedRoleIds;
      cResult[6] = t3;
      tmp10 = t3;
      let obj = require("c");
    }
  : function useConjureProjectSettingsForm(projectId, arg1) {
      _require = arg1;
      let obj = arg2;
      if (arg2 === undefined) {
        obj = {};
      }
      let flag = obj.readOnly;
      if (flag === undefined) {
        flag = false;
      }
      selectedRoleIds = undefined;
      dependencyMap = undefined;
      handleRoleSelectionChange = undefined;
      const tmp = closure_12();
      const tmp4 = selectedRoleIds(12272)(projectId, arg1);
      ({ liveReload, isGuildCollaboration, selectedRoleIds } = tmp4);
      ({
        supportsVisibility,
        saving,
        saveError,
        experimentalError,
        handleFlagChange: c2,
        handleRoleSelectionChange,
      } = tmp4);
      const ensureAppInGuild = tmp4.ensureAppInGuild;
      let tmp5 = saving;
      ({
        iconURL,
        description,
        smartContext,
        hostApproval,
        name,
        nameError,
        nameChanged,
        isPublic,
        supportsCollaboration,
        supportsCollaboratorRoles,
        checkingAppInGuild,
        canSave,
        handleIconChange,
        handleNameChange,
        handleDescriptionChange,
        handleLiveReloadChange,
        handleSmartContextChange,
        handleRequireHostApprovalChange,
        submit,
      } = tmp4);
      if (!saving) {
        tmp5 = flag;
      }
      let items = [ensureAppInGuild, arg1, handleRoleSelectionChange, selectedRoleIds];
      let obj2 = { style: tmp.content, children: null };
      let tmp9 = null;
      const callback = noop.useCallback(
        handleRoleSelectionChange(function* () {
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
              return { value: "IconComponent", done: "IconComponent" };
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
                  closure_1 = tmp3;
                  if (null != tmp3) {
                    dependencyMap = 1;
                    c3 = 2;
                    c4 = 1;
                    const obj4 = { value: ensureAppInGuild(), done: false };
                    return obj4;
                  } else {
                    c4 = 3;
                  }
                }
              } else if (1 === tmp7) {
                dependencyMap = 0;
                c4 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 !== 2) {
                dependencyMap = 0;
                if (value) {
                  const obj5 = { content: null, key: null, stackingBehavior: "stack" };
                  const obj6 = { guildId: closure_129_0, initialSelectedRoleIds: null, onSave: null };
                  const _Set = Set;
                  const set = new Set(closure_129_1);
                  obj6.initialSelectedRoleIds = set;
                  obj6.onSave = function onSave(arg0) {
                    const items = [...arg0];
                    return closure_1_3(items);
                  };
                  obj5.content = closure_1_9(closure_1_15, obj6);
                  obj5.key = key;
                  tmp3(dependencyMap[13]).showActionSheet(obj5);
                  const obj = tmp3(dependencyMap[13]);
                } else {
                  c4 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              }
              dependencyMap = 0;
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } catch (tmp24) {
              if (tmp4 === dependencyMap) {
                c4 = tmp2;
                throw tmp24;
              } else {
                c3 = tmp;
              }
            }
          }
        }),
        items,
      );
      if (flag) {
        let obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl = require("util").intl;
        obj3.children = intl.string(tmp2(3864).s7VnVF);
        tmp9 = closure_9(require("Text/Text").Text, obj3);
      }
      const items1 = [
        tmp9,
        closure_9(require("ConjureAppIdentity").ConjureAppIdentitySection, {
          iconURL,
          onIconChange: handleIconChange,
          name,
          nameError,
          onNameChange: handleNameChange,
          description,
          onDescriptionChange: handleDescriptionChange,
          disabled: tmp5,
        }),
        ,
        ,
        ,
        ,
      ];
      let tmp12Result = null;
      if (supportsVisibility) {
        let obj4 = { hasIcons: false, children: null };
        let obj5 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
        const intl2 = tmp13(1125).intl;
        obj5.label = intl2.string(tmp2(3864).ujIxRm);
        const intl3 = tmp13(1125).intl;
        obj5.subLabel = intl3.string(tmp2(3864).gT8zk1);
        obj5.checked = isPublic;
        obj5.disabled = tmp5;
        obj5.onPress = function onPress(arg0) {
          return _undefined(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
        };
        obj4.children = closure_9(tmp13(6960).TableCheckboxRow, obj5);
        tmp12Result = closure_9(tmp13(7047).TableRowGroup, obj4);
      }
      items1[2] = tmp12Result;
      let tmp12Result6 = null;
      if (supportsVisibility) {
        tmp12Result6 = null;
        if (supportsCollaboration) {
          let obj6 = { hasIcons: false, children: null };
          let obj7 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
          const intl4 = tmp13(1125).intl;
          obj7.label = intl4.string(tmp2(3864).lVvR4E);
          const intl5 = tmp13(1125).intl;
          obj7.subLabel = intl5.string(tmp2(3864).SQZGoV);
          obj7.checked = isGuildCollaboration;
          obj7.disabled = tmp5;
          obj7.onPress = function onPress(arg0) {
            return _undefined(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
          };
          obj6.children = closure_9(tmp13(6960).TableCheckboxRow, obj7);
          tmp12Result6 = closure_9(tmp13(7047).TableRowGroup, obj6);
        }
      }
      items1[3] = tmp12Result6;
      let tmp12Result7 = null;
      if (liveReload.available) {
        const obj8 = { hasIcons: false, children: null };
        const obj10 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
        const intl6 = tmp13(1125).intl;
        obj10.label = intl6.string(tmp2(3864).eEo0ye);
        ({ description: obj9.subLabel, checked: obj9.checked } = liveReload);
        obj10.disabled = tmp5;
        obj10.onPress = handleLiveReloadChange;
        obj8.children = closure_9(tmp13(6960).TableCheckboxRow, obj10);
        tmp12Result7 = closure_9(tmp13(7047).TableRowGroup, obj8);
      }
      items1[4] = tmp12Result7;
      let tmp12Result8 = null;
      if (supportsCollaboratorRoles) {
        const obj11 = {
          label: null,
          subLabel: null,
          arrow: true,
          disabled: null,
          accessibilityHint: null,
          onPress: null,
        };
        const intl7 = tmp13(1125).intl;
        obj11.label = intl7.string(tmp2(3864)["pO3+p5"]);
        const intl8 = tmp13(1125).intl;
        obj11.subLabel = intl8.string(tmp2(3864)["9MdtK9"]);
        if (!tmp5) {
          tmp5 = !isGuildCollaboration;
        }
        if (!tmp5) {
          tmp5 = checkingAppInGuild;
        }
        obj11.disabled = tmp5;
        let stringResult;
        if (!isGuildCollaboration) {
          const intl9 = tmp13(1125).intl;
          stringResult = intl9.string(tmp2(3864).nZw5r9);
        }
        const obj12 = { hasIcons: false, children: null };
        obj11.accessibilityHint = stringResult;
        obj11.onPress = callback;
        obj12.children = closure_9(tmp13(6963).TableRow, obj11);
        tmp12Result8 = closure_9(tmp13(7047).TableRowGroup, obj12);
      }
      items1[5] = tmp12Result8;
      let tmp12Result9 = null;
      if (null != saveError) {
        const obj13 = { accessibilityRole: "alert", children: null };
        const obj14 = { variant: "text-xs/normal", color: "text-feedback-critical", children: saveError };
        obj13.children = closure_9(tmp13(5271).Text, obj14);
        tmp12Result9 = closure_9(View, obj13);
      }
      const obj15 = {
        fields: closure_10(View, obj2),
        experimentalFields: null,
        canSave: null,
        saving: null,
        nameChanged: null,
        submit: null,
      };
      items1[6] = tmp12Result9;
      obj2.children = items1;
      const obj16 = { style: tmp.content, children: null };
      const obj17 = { hasIcons: false, children: null };
      const obj18 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      const intl10 = tmp13(1125).intl;
      obj18.label = intl10.string(selectedRoleIds(3864)["4liZ45"]);
      const intl11 = tmp13(1125).intl;
      obj18.subLabel = intl11.string(selectedRoleIds(3864).I5cl7p);
      obj18.checked = smartContext.checked;
      obj18.disabled = saving;
      obj18.onPress = handleSmartContextChange;
      const items2 = [closure_9(require("TableCheckboxRow").TableCheckboxRow, obj18)];
      const obj19 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      const intl12 = tmp13(1125).intl;
      obj19.label = intl12.string(selectedRoleIds(3864).mpjaVm);
      const intl13 = tmp13(1125).intl;
      obj19.subLabel = intl13.string(selectedRoleIds(3864)["2PxChh"]);
      obj19.checked = hostApproval.checked;
      obj19.disabled = saving;
      obj19.onPress = handleRequireHostApprovalChange;
      items2[1] = closure_9(require("TableCheckboxRow").TableCheckboxRow, obj19);
      obj17.children = items2;
      const items3 = [
        closure_10(require("TableRowGroup").TableRowGroup, obj17),
        closure_9(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, { projectId }),
      ];
      let tmp12Result10 = null;
      if (null != experimentalError) {
        const obj21 = { accessibilityRole: "alert", children: null };
        const obj41 = { variant: "text-xs/normal", color: "text-feedback-critical", children: experimentalError };
        obj21.children = closure_9(tmp13(5271).Text, obj41);
        tmp12Result10 = closure_9(View, obj21);
      }
      items3[2] = tmp12Result10;
      obj16.children = items3;
      obj15.experimentalFields = closure_10(View, obj16);
      obj15.canSave = canSave;
      obj15.saving = saving;
      obj15.nameChanged = nameChanged;
      obj15.submit = submit;
      return obj15;
    };
