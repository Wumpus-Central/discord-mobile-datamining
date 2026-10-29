// === Module 19869: SelectEmojiRolesActionSheet ===

// Module 19869 (SelectEmojiRolesActionSheet)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4911 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { list: { flex: 1 }, row: { paddingHorizontal: nativeDefault.space.PX_16 }, label: null, roleName: null, saveButtonDisabled: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.label = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.roleName = { flexShrink: 1 };
obj2.saveButtonDisabled = { opacity: 0.3 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SelectEmojiRolesActionSheet(guildId) {
  const cResult = guildId(emoji[8]).c(47);
  guildId = guildId.guildId;
  const onSave = guildId.onSave;
  emoji = guildId.emoji;
  const onCancel = guildId.onCancel;
  const tmp4 = closure_9();
  _slicedToArray = tmp4;
  const bottom = onSave(emoji[9])().bottom;
  const tmp6 = onSave(emoji[10])();
  let roles;
  if (emoji != null) {
    roles = emoji.roles;
  }
  if (cResult[0] !== roles) {
    let roles1;
    if (emoji != null) {
      roles1 = emoji.roles;
    }
    const fn = function b() {
      let roles;
      if (emoji != null) {
        roles = emoji.roles;
      }
      if (roles == null) {
        roles = [];
      }
      return new Set(roles);
    };
    cResult[0] = roles1;
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  [first, closure_5] = first.useState(tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeSoftDeleted: true, sortDeletedListingsLast: true };
    cResult[2] = obj2;
    let tmp14 = obj2;
  } else {
    tmp14 = cResult[2];
  }
  let obj = guildId(emoji[8]);
  const tmp5 = onSave;
  const subscriptionListingsForGuild = guildId(emoji[11]).useSubscriptionListingsForGuild(guildId, tmp14);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [subscriptionListingsForGuild];
    cResult[3] = items;
    let tmp15 = items;
  } else {
    tmp15 = cResult[3];
  }
  if (cResult[4] === guildId) {
    if (cResult[5] === subscriptionListingsForGuild) {
      let tmp17 = cResult[6];
      let tmp18 = cResult[7];
    }
    const stateFromStoresArray = tmp(tmp2[12]).useStateFromStoresArray(tmp15, tmp17, tmp18);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      function toggleRole(arg0) {
        closure_0 = arg0;
        return closure_5((has) => {
          const set = new Set(has);
          if (has.has(closure_0)) {
            set.delete(closure_0);
          } else {
            set.add(closure_0);
          }
          return set;
        });
      }
      cResult[8] = toggleRole;
      let tmp20 = toggleRole;
    } else {
      tmp20 = cResult[8];
    }
    closure_8 = tmp20;
    if (cResult[9] === onSave) {
      if (cResult[10] === first) {
        let tmp21 = cResult[11];
      }
      if (cResult[12] === stateFromStoresArray) {
        if (cResult[13] === first) {
          if (cResult[14] === tmp4.label) {
            if (cResult[15] === tmp4.roleName) {
              if (cResult[16] === tmp4.row) {
                if (cResult[17] === subscriptionListingsForGuild) {
                  let tmp22 = cResult[18];
                }
                if (cResult[19] !== !tmp13) {
                  let obj3 = { disabled: tmp23 };
                  cResult[19] = tmp23;
                  cResult[20] = obj3;
                  let tmp24 = obj3;
                } else {
                  tmp24 = cResult[20];
                }
                if (!tmp13) {
                  const saveButtonDisabled = tmp4.saveButtonDisabled;
                }
                if (cResult[21] !== tmp7) {
                  let intl = tmp(tmp2[13]).intl;
                  const string = intl.string;
                  let t = tmp(tmp2[13]).t;
                  if (tmp7) {
                    t = t["3UB9ad"];
                    let stringResult = string(t);
                  } else {
                    stringResult = string(t["R3BPH+"]);
                  }
                  cResult[21] = tmp7;
                  cResult[22] = stringResult;
                } else {
                  if (cResult[23] !== cResult[22]) {
                    let obj4 = { variant: "text-md/semibold", color: "text-brand", children: tmp25 };
                    const tmp31 = stateFromStoresArray(tmp(tmp2[16]).Text, obj4);
                    cResult[23] = tmp25;
                    cResult[24] = tmp31;
                    let tmp29 = tmp31;
                  } else {
                    tmp29 = cResult[24];
                  }
                  if (cResult[25] === tmp21) {
                    if (cResult[26] === tmp24) {
                      if (cResult[27] === saveButtonDisabled) {
                        if (cResult[28] === tmp29) {
                          if (cResult[29] === tmp23) {
                            let tmp32 = cResult[30];
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl2 = tmp(tmp2[13]).intl;
                            const stringResult1 = intl2.string(tmp(tmp2[13]).t.JPU0EF);
                            const intl3 = tmp(tmp2[13]).intl;
                            const stringResult2 = intl3.string(tmp(tmp2[13]).t.MZusPv);
                            cResult[31] = stringResult1;
                            cResult[32] = stringResult2;
                            let tmp36 = stringResult2;
                            let tmp35 = stringResult1;
                          } else {
                            tmp35 = cResult[31];
                            tmp36 = cResult[32];
                          }
                          if (cResult[33] !== tmp32) {
                            let obj5 = { title: tmp35, subtitle: tmp36, trailing: tmp32 };
                            const tmp41 = stateFromStoresArray(tmp(tmp2[19]).BottomSheetTitleHeader, obj5);
                            cResult[33] = tmp32;
                            cResult[34] = tmp41;
                            let tmp39 = tmp41;
                          } else {
                            tmp39 = cResult[34];
                          }
                          if (cResult[35] !== subscriptionListingsForGuild.length) {
                            const items1 = [subscriptionListingsForGuild.length];
                            cResult[35] = subscriptionListingsForGuild.length;
                            cResult[36] = items1;
                            let tmp42 = items1;
                          } else {
                            tmp42 = cResult[36];
                          }
                          if (cResult[37] === tmp22) {
                            if (cResult[38] === tmp6) {
                              if (cResult[39] === bottom) {
                                if (cResult[40] === tmp4.list) {
                                  if (cResult[41] === tmp42) {
                                    let tmp43 = cResult[42];
                                  }
                                  if (cResult[43] === tmp39) {
                                    if (cResult[44] === onCancel) {
                                      if (cResult[45] === tmp43) {
                                        let tmp46 = cResult[46];
                                      }
                                      return tmp46;
                                    }
                                  }
                                  let obj6 = { scrollable: true, header: tmp39, startExpanded: true, onDismiss: onCancel, children: tmp43 };
                                  const tmp48 = stateFromStoresArray(tmp(tmp2[21]).BottomSheet, obj6);
                                  cResult[43] = tmp39;
                                  cResult[44] = onCancel;
                                  cResult[45] = tmp43;
                                  cResult[46] = tmp48;
                                  tmp46 = tmp48;
                                }
                              }
                            }
                          }
                          let obj7 = { inActionSheet: true, style: tmp4.list, estimatedListSize: "windowSize", itemSize: tmp6, insetEnd: bottom, sections: tmp42, renderItem: tmp22 };
                          const tmp45 = stateFromStoresArray(tmp5(tmp2[20]), obj7);
                          cResult[37] = tmp22;
                          cResult[38] = tmp6;
                          cResult[39] = bottom;
                          cResult[40] = tmp4.list;
                          cResult[41] = tmp42;
                          cResult[42] = tmp45;
                          tmp43 = tmp45;
                        }
                      }
                    }
                  }
                  let obj8 = { onPress: tmp21, disabled: tmp23, accessibilityRole: "button", accessibilityState: tmp24, style: saveButtonDisabled, children: tmp29 };
                  const tmp34 = stateFromStoresArray(tmp(tmp2[18]).PressableOpacity, obj8);
                  cResult[25] = tmp21;
                  cResult[26] = tmp24;
                  cResult[27] = saveButtonDisabled;
                  cResult[28] = tmp29;
                  cResult[29] = tmp23;
                  cResult[30] = tmp34;
                  tmp32 = tmp34;
                }
              }
            }
          }
        }
      }
      function renderRow(arg0, arg1) {
        const role_id = tmp;
        const diff = subscriptionListingsForGuild.length - 1;
        const intl = guildId(emoji[13]).intl;
        const stringResult = intl.string(guildId(emoji[13]).t.HRtfn9);
        const obj = { style: closure_3.row, children: null };
        const obj2 = { start: 0 === arg1, end: arg1 === diff, label: null, accessibilityHint: null, checked: null, onPress: null };
        const obj3 = { style: closure_3.label, children: null };
        if (null != stateFromStoresArray[arg1]) {
          const obj4 = { style: closure_3.roleName, children: null };
          const obj5 = { role: tmp2, children: tmp.name };
          obj4.children = stateFromStoresArray(onSave(emoji[15]), obj5);
          let tmp7Result = stateFromStoresArray(closure_5, obj4);
        } else {
          const obj6 = { style: closure_3.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: tmp.name };
          tmp7Result = stateFromStoresArray(guildId(emoji[16]).Text, obj6);
        }
        const items = [tmp7Result, ];
        let archived = tmp.archived;
        if (archived) {
          const obj7 = { type: null, variant: "critical" };
          const obj8 = { text: stringResult };
          obj7.type = obj8;
          archived = stateFromStoresArray(guildId(emoji[17]).Badge, obj7);
        }
        items[1] = archived;
        obj3.children = items;
        obj2.label = closure_8(closure_5, obj3);
        let tmp13;
        if (subscriptionListingsForGuild[arg1].archived) {
          tmp13 = stringResult;
        }
        obj2.accessibilityHint = tmp13;
        obj2.checked = first.has(subscriptionListingsForGuild[arg1].role_id);
        obj2.onPress = function onPress() {
          return closure_8(role_id.role_id);
        };
        obj.children = stateFromStoresArray(guildId(emoji[14]).TableCheckboxRow, obj2);
        return stateFromStoresArray(closure_5, obj);
      }
      cResult[12] = stateFromStoresArray;
      cResult[13] = first;
      cResult[14] = tmp4.label;
      cResult[15] = tmp4.roleName;
      cResult[16] = tmp4.row;
      cResult[17] = subscriptionListingsForGuild;
      cResult[18] = renderRow;
      tmp22 = renderRow;
    }
    function handleSave() {
      onSave(Array.from(first));
    }
    cResult[9] = onSave;
    cResult[10] = first;
    cResult[11] = handleSave;
    tmp21 = handleSave;
    const tmpResult2 = tmp(tmp2[12]);
  }
  class H {
    constructor() {
      return closure_6.map((role_id) => subscriptionListingsForGuild.getRole(guildId, role_id.role_id));
    }
  }
  const items2 = [guildId, subscriptionListingsForGuild];
  cResult[4] = guildId;
  cResult[5] = subscriptionListingsForGuild;
  cResult[6] = H;
  cResult[7] = items2;
  tmp18 = items2;
  tmp17 = H;
}) : (function SelectEmojiRolesActionSheet(guildId) {
  guildId = guildId.guildId;
  ({ onSave: importDefault, emoji } = guildId);
  first = undefined;
  closure_5 = undefined;
  const tmp = closure_9();
  _slicedToArray = tmp;
  [first, closure_5] = first.useState(() => {
    let roles;
    if (emoji != null) {
      roles = emoji.roles;
    }
    if (roles == null) {
      roles = [];
    }
    return new Set(roles);
  });
  const tmp4 = require("useScaledRowHeight")();
  const subscriptionListingsForGuild = guildId(emoji[11]).useSubscriptionListingsForGuild(guildId, { includeSoftDeleted: true, sortDeletedListingsLast: true });
  let obj = guildId(emoji[11]);
  let items = [subscriptionListingsForGuild];
  const items1 = [guildId, subscriptionListingsForGuild];
  dependencyMap = guildId(emoji[12]).useStateFromStoresArray(items, () => subscriptionListingsForGuild.map((role_id) => subscriptionListingsForGuild.getRole(guildId, role_id.role_id)), items1);
  let obj3 = {
    onPress: function handleSave() {
      importDefault(Array.from(first));
    },
    disabled: first.size <= 0,
    accessibilityRole: "button",
    accessibilityState: { disabled: first.size <= 0 },
    style: null,
    children: null
  };
  let saveButtonDisabled;
  if (first.size <= 0) {
    saveButtonDisabled = tmp.saveButtonDisabled;
  }
  obj3.style = saveButtonDisabled;
  if (null == emoji) {
    const intl2 = tmp8(emoji[13]).intl;
    let stringResult = intl2.string(tmp8(emoji[13]).t["3UB9ad"]);
  } else {
    let intl = tmp8(emoji[13]).intl;
    stringResult = intl.string(tmp8(emoji[13]).t["R3BPH+"]);
  }
  obj3.children = dependencyMap(guildId(emoji[16]).Text, { variant: "text-md/semibold", color: "text-brand", children: stringResult });
  let obj2 = guildId(emoji[12]);
  let obj4 = { title: null, subtitle: null, trailing: null };
  const intl3 = tmp8(emoji[13]).intl;
  obj4.title = intl3.string(guildId(emoji[13]).t.JPU0EF);
  const intl4 = tmp8(emoji[13]).intl;
  obj4.subtitle = intl4.string(guildId(emoji[13]).t.MZusPv);
  obj4.trailing = dependencyMap(guildId(emoji[18]).PressableOpacity, obj3);
  const tmp9Result = dependencyMap(guildId(emoji[18]).PressableOpacity, obj3);
  let obj5 = { scrollable: true, header: dependencyMap(guildId(emoji[19]).BottomSheetTitleHeader, obj4), startExpanded: true, onDismiss: guildId.onCancel, children: null };
  let obj6 = {
    inActionSheet: true,
    style: tmp.list,
    estimatedListSize: "windowSize",
    itemSize: tmp4,
    insetEnd: require("useSafeAreaInsets")().bottom,
    sections: null,
    renderItem: function renderRow(arg0, arg1) {
      let role_id = tmp;
      const diff = subscriptionListingsForGuild.length - 1;
      const intl = guildId(emoji[13]).intl;
      const stringResult = intl.string(guildId(emoji[13]).t.HRtfn9);
      const obj = { style: closure_3.row, children: null };
      const obj2 = { start: 0 === arg1, end: arg1 === diff, label: null, accessibilityHint: null, checked: null, onPress: null };
      const obj3 = { style: closure_3.label, children: null };
      if (null != dependencyMap[arg1]) {
        const obj4 = { style: closure_3.roleName, children: null };
        const obj5 = { role: tmp2, children: tmp.name };
        obj4.children = dependencyMap(require("RoleName"), obj5);
        let tmp7Result = dependencyMap(closure_5, obj4);
      } else {
        const obj6 = { style: closure_3.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: tmp.name };
        tmp7Result = dependencyMap(guildId(emoji[16]).Text, obj6);
      }
      const items = [tmp7Result, ];
      let archived = tmp.archived;
      if (archived) {
        const obj7 = { type: null, variant: "critical" };
        const obj8 = { text: stringResult };
        obj7.type = obj8;
        archived = dependencyMap(guildId(emoji[17]).Badge, obj7);
      }
      items[1] = archived;
      obj3.children = items;
      obj2.label = closure_1_8(closure_5, obj3);
      let tmp13;
      if (subscriptionListingsForGuild[arg1].archived) {
        tmp13 = stringResult;
      }
      obj2.accessibilityHint = tmp13;
      obj2.checked = first.has(subscriptionListingsForGuild[arg1].role_id);
      obj2.onPress = function onPress() {
        role_id = role_id.role_id;
        return closure_5((has) => {
          const set = new Set(has);
          if (has.has(role_id)) {
            set.delete(role_id);
          } else {
            set.add(role_id);
          }
          return set;
        });
      };
      obj.children = dependencyMap(guildId(emoji[14]).TableCheckboxRow, obj2);
      return dependencyMap(closure_5, obj);
    }
  };
  const items2 = [subscriptionListingsForGuild.length];
  obj6.sections = items2;
  obj5.children = dependencyMap(require("FastestList"), obj6);
  return dependencyMap(guildId(emoji[21]).BottomSheet, obj5);
});