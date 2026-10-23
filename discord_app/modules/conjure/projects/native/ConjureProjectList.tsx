// discord_app/modules/conjure/projects/native/ConjureProjectList.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureUtils from "../../shared/ConjureUtils.tsx";
import ConjureRemixSheet from "../../remix/native/ConjureRemixSheet.tsx";
import ConjureActionCreators from "../ConjureActionCreators.tsx";
import conjureStandaloneScenes from "../../builder/native/conjureStandaloneScenes.tsx";
import ConjureActivity from "../ConjureActivity.tsx";
import ConjureCreateSheet from "../../create/native/ConjureCreateSheet.tsx";
import ConjureSettingsSheet from "../../settings/native/ConjureSettingsSheet.tsx";
import ConjureProjectIconDefault from "ConjureProjectIcon.tsx";
import MentionsBadgeDefault from "../../../guild_sidebar/native/MentionsBadge.tsx";
import ConjureHeaderIconButtonDefault from "../../shared/native/ConjureHeaderIconButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../../../user_settings/UserSettingsProtoStore.tsx";
import ConjureProjectStore from "../ConjureProjectStore.tsx";

const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4969);
let closure_11 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom },
    centered: null,
    listContent: null,
    section: null,
    projectRowTrailing: null,
    unreadPill: null,
    sectionHeading: null,
    listError: null,
  };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = {
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_24,
  };
  const obj4 = {
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_24,
  };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj5 = { gap: nativeDefault.space.PX_8 };
  obj.projectRowTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const size = {
    position: "absolute",
    left: 0,
    top: "50%",
    width: nativeDefault.space.PX_4,
    height: nativeDefault.space.PX_8,
    marginTop: -nativeDefault.space.PX_4,
    borderTopRightRadius: nativeDefault.radii.xs,
    borderBottomRightRadius: nativeDefault.radii.xs,
    backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  };
  obj.unreadPill = size;
  const obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.sectionHeading = { gap: nativeDefault.space.PX_4 };
  const obj7 = { gap: nativeDefault.space.PX_4 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProjectRow(project) {
      const cResult = project(576).c(35);
      project = project.project;
      ({ onPress, onMore } = project);
      const tmp4 = closure_11(0);
      const obj = project(576);
      const conjureProjectBadge = project(10721).useConjureProjectBadge(project.id);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== project.id) {
        const fn = function s() {
          return ConjureProjectStore.isProjectDeleting(project.id);
        };
        const items1 = [project.id];
        cResult[1] = project.id;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const obj2 = project(10721);
      const stateFromStores = project(504).useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] !== project.updated_at) {
        let formatToPlainStringResult;
        if (null != project.updated_at) {
          const intl = tmp(1128).intl;
          const obj3 = { time: null };
          const _Date = Date;
          const date = new Date(project.updated_at);
          obj3.time = tmp(6787).getRelativeTimestamp(date.getTime());
          formatToPlainStringResult = intl.formatToPlainString(_modDef3830.AXydi3, obj3);
          const tmpResult2 = tmp(6787);
        }
        cResult[4] = project.updated_at;
        cResult[5] = formatToPlainStringResult;
        let tmp12 = formatToPlainStringResult;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === tmp12) {
          let tmp18 = cResult[8];
        }
        if (cResult[9] !== tmp11) {
          let stringResult;
          if (tmp11) {
            const intl3 = tmp(1128).intl;
            stringResult = intl3.string(_modDef3830.hfIuc7);
          }
          cResult[9] = tmp11;
          cResult[10] = stringResult;
          let tmp21 = stringResult;
        } else {
          tmp21 = cResult[10];
        }
        if (cResult[11] !== project) {
          const obj4 = { project, size: "list" };
          const tmp27 = closure_9(ConjureProjectIconDefault, obj4);
          cResult[11] = project;
          cResult[12] = tmp27;
          let tmp24 = tmp27;
        } else {
          tmp24 = cResult[12];
        }
        if (cResult[13] === conjureProjectBadge) {
          if (cResult[14] === stateFromStores) {
            if (cResult[15] === onMore) {
              if (cResult[16] === tmp11) {
                if (cResult[17] === tmp4) {
                  if (cResult[19] === stateFromStores) {
                    if (cResult[20] === onMore) {
                      if (cResult[21] === onPress) {
                        if (cResult[22] === project.name) {
                          if (cResult[23] === tmp18) {
                            if (cResult[24] === tmp21) {
                              if (cResult[25] === tmp24) {
                                if (cResult[26] === tmp28) {
                                  let tmp41 = cResult[27];
                                }
                                if (cResult[28] === conjureProjectBadge) {
                                  if (cResult[29] === stateFromStores) {
                                    if (cResult[30] === tmp4) {
                                      let tmp44 = cResult[31];
                                    }
                                    if (cResult[32] === tmp44) {
                                      if (cResult[33] === tmp41) {
                                        let tmp48 = cResult[34];
                                      }
                                      return tmp48;
                                    }
                                    const obj5 = { children: null };
                                    const items2 = [tmp41, tmp44];
                                    obj5.children = items2;
                                    const tmp51 = closure_10(closure_6, obj5);
                                    cResult[32] = tmp44;
                                    cResult[33] = tmp41;
                                    cResult[34] = tmp51;
                                    tmp48 = tmp51;
                                  }
                                }
                                let tmp45 = null;
                                if (null != conjureProjectBadge) {
                                  tmp45 = null;
                                  if (!stateFromStores) {
                                    const obj6 = {
                                      style: tmp4.unreadPill,
                                      pointerEvents: "none",
                                      accessibilityElementsHidden: true,
                                      importantForAccessibility: "no",
                                    };
                                    tmp45 = closure_9(closure_6, obj6);
                                  }
                                }
                                cResult[28] = conjureProjectBadge;
                                cResult[29] = stateFromStores;
                                cResult[30] = tmp4;
                                cResult[31] = tmp45;
                                tmp44 = tmp45;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj7 = {
                    label: project.name,
                    subLabel: tmp18,
                    accessibilityHint: tmp21,
                    disabled: stateFromStores,
                    icon: tmp24,
                    trailing: cResult[18],
                    onPress,
                    onLongPress: onMore,
                  };
                  const tmp43 = closure_9(tmp(6901).TableRow, obj7);
                  cResult[19] = stateFromStores;
                  cResult[20] = onMore;
                  cResult[21] = onPress;
                  cResult[22] = project.name;
                  cResult[23] = tmp18;
                  cResult[24] = tmp21;
                  cResult[25] = tmp24;
                  cResult[26] = cResult[18];
                  cResult[27] = tmp43;
                  tmp41 = tmp43;
                }
              }
            }
          }
        }
        if (stateFromStores) {
          let tmp29Result = closure_9(closure_4, {});
        } else {
          const obj8 = { style: tmp4.projectRowTrailing, children: null };
          let tmp31 = null;
          if (tmp11) {
            const obj9 = { mentionsCount: conjureProjectBadge };
            tmp31 = closure_9(MentionsBadgeDefault, obj9);
          }
          const items3 = [tmp31];
          const obj10 = { IconComponent: tmp(9643).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
          const intl4 = tmp(1128).intl;
          obj10.accessibilityLabel = intl4.string(tmp(1128).t["UKOtz+"]);
          items3[1] = closure_9(ConjureHeaderIconButtonDefault, obj10);
          obj8.children = items3;
          tmp29Result = closure_10(closure_6, obj8);
        }
        cResult[13] = conjureProjectBadge;
        cResult[14] = stateFromStores;
        cResult[15] = onMore;
        cResult[16] = tmp11;
        cResult[17] = tmp4;
        cResult[18] = tmp29Result;
      }
      let stringResult1 = tmp12;
      if (stateFromStores) {
        const intl2 = tmp(1128).intl;
        stringResult1 = intl2.string(_modDef3830.Yh5pAc);
      }
      cResult[6] = stateFromStores;
      cResult[7] = tmp12;
      cResult[8] = stringResult1;
      tmp18 = stringResult1;
      const tmpResult = project(504);
    }
  : function ProjectRow(project) {
      project = project.project;
      const onMore = project.onMore;
      const tmp = closure_11(0);
      const conjureProjectBadge = project(10721).useConjureProjectBadge(project.id);
      const obj = project(10721);
      const items = [ConjureProjectStore];
      const items1 = [project.id];
      const stateFromStores = project(504).useStateFromStores(
        items,
        () => ConjureProjectStore.isProjectDeleting(project.id),
        items1,
      );
      let formatToPlainStringResult;
      if (null != project.updated_at) {
        const intl = tmp2(1128).intl;
        const obj3 = { time: null };
        const _Date = Date;
        const date = new Date(project.updated_at);
        obj3.time = tmp2(6787).getRelativeTimestamp(date.getTime());
        formatToPlainStringResult = intl.formatToPlainString(_modDef3830.AXydi3, obj3);
        const tmp2Result = tmp2(6787);
      }
      const obj4 = {
        label: project.name,
        subLabel: null,
        accessibilityHint: null,
        disabled: null,
        icon: null,
        trailing: null,
        onPress: null,
        onLongPress: null,
      };
      if (stateFromStores) {
        const intl2 = tmp2(1128).intl;
        formatToPlainStringResult = intl2.string(_modDef3830.Yh5pAc);
      }
      obj4.subLabel = formatToPlainStringResult;
      let stringResult;
      if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
        const intl3 = tmp2(1128).intl;
        stringResult = intl3.string(_modDef3830.hfIuc7);
      }
      obj4.accessibilityHint = stringResult;
      obj4.disabled = stateFromStores;
      obj4.icon = closure_9(ConjureProjectIconDefault, { project, size: "list" });
      if (stateFromStores) {
        let tmp13Result = closure_9(closure_4, {});
      } else {
        const obj5 = { style: tmp.projectRowTrailing, children: null };
        let tmp15Result3 = null;
        if (tmp6) {
          const obj6 = { mentionsCount: conjureProjectBadge };
          tmp15Result3 = closure_9(MentionsBadgeDefault, obj6);
        }
        const items2 = [tmp15Result3];
        const obj7 = { IconComponent: tmp2(9643).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
        const intl4 = tmp2(1128).intl;
        obj7.accessibilityLabel = intl4.string(tmp2(1128).t["UKOtz+"]);
        items2[1] = closure_9(ConjureHeaderIconButtonDefault, obj7);
        obj5.children = items2;
        tmp13Result = closure_10(closure_6, obj5);
        const tmp19Result = ConjureHeaderIconButtonDefault;
      }
      obj4.trailing = tmp13Result;
      obj4.onPress = project.onPress;
      obj4.onLongPress = onMore;
      const children = [closure_9(project(6901).TableRow, obj4)];
      let tmp15Result4 = null;
      if (null != conjureProjectBadge) {
        tmp15Result4 = null;
        if (!stateFromStores) {
          const obj8 = {
            style: tmp.unreadPill,
            pointerEvents: "none",
            accessibilityElementsHidden: true,
            importantForAccessibility: "no",
          };
          tmp15Result4 = closure_9(closure_6, obj8);
        }
      }
      children[1] = tmp15Result4;
      return closure_10(closure_6, { children });
    };
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureProjectList(guildId) {
      const cResult = guildId(576).c(73);
      guildId = guildId.guildId;
      const bottom = navigation(1633)().bottom;
      closure_11(0);
      let obj = guildId(576);
      navigation = guildId(1505).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        const fn = function y() {
          return ConjureProjectStore.getOwnedProjects();
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp6 = items;
        tmp7 = fn;
        tmp8 = items1;
      } else {
        [tmp6, tmp7, tmp8] = cResult;
      }
      let obj2 = guildId(1505);
      const stateFromStoresArray = guildId(504).useStateFromStoresArray(tmp6, tmp7, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureProjectStore];
        cResult[3] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        const fn2 = function x() {
          return ConjureProjectStore.getSharedProjects(guildId);
        };
        const items3 = [guildId];
        cResult[4] = guildId;
        cResult[5] = fn2;
        cResult[6] = items3;
        let tmp13 = items3;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const tmpResult = guildId(504);
      const stateFromStoresArray1 = guildId(504).useStateFromStoresArray(tmp10, tmp12, tmp13);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [ConjureProjectStore];
        const fn3 = function w() {
          return ConjureProjectStore.getProjectsFetchState();
        };
        const items5 = [];
        cResult[7] = items4;
        cResult[8] = fn3;
        cResult[9] = items5;
        let tmp16 = items5;
        let tmp15 = fn3;
        let tmp14 = items4;
      } else {
        tmp14 = cResult[7];
        tmp15 = cResult[8];
        tmp16 = cResult[9];
      }
      const tmpResult4 = guildId(504);
      const stateFromStores = guildId(504).useStateFromStores(tmp14, tmp15, tmp16);
      if (cResult[10] === stateFromStoresArray) {
        if (cResult[11] === guildId) {
          if (cResult[15] !== stateFromStoresArray1) {
            const substr = stateFromStoresArray1.slice();
            const sorted = substr.sort(tmp(11724).compareConjureProjectsByUpdatedAt);
            cResult[15] = stateFromStoresArray1;
            cResult[16] = sorted;
          }
          if (cResult[17] !== navigation) {
            class U {
              constructor(arg0) {
                obj = { projectId: guildId };
                return closure_1.push(closure_0(closure_2[14]).ConjureScreenScenes.CHAT, obj);
              }
            }
            cResult[17] = navigation;
            cResult[18] = U;
          } else {
            class U {
              constructor(arg0) {
                obj = { projectId: guildId };
                return closure_1.push(closure_0(closure_2[14]).ConjureScreenScenes.CHAT, obj);
              }
            }
          }
          dependencyMap = U;
          if (cResult[19] === guildId) {
            class U {
              constructor(arg0) {
                obj = { projectId: guildId };
                return closure_1.push(closure_0(closure_2[14]).ConjureScreenScenes.CHAT, obj);
              }
            }
            const noop = tmp25;
            if (cResult[22] === guildId) {
              class U {
                constructor(arg0) {
                  obj = { projectId: guildId };
                  return closure_1.push(closure_0(closure_2[14]).ConjureScreenScenes.CHAT, obj);
                }
              }
              closure_4 = tmp28;
              if (cResult[25] === guildId) {
                class U {
                  constructor(arg0) {
                    obj = { projectId: guildId };
                    return closure_1.push(closure_0(closure_2[14]).ConjureScreenScenes.CHAT, obj);
                  }
                }
                closure_5 = D;
                if (cResult[28] === guildId) {
                  class U {
                    constructor(arg0) {
                      obj = { projectId: guildId };
                      return closure_1.push(closure_0(closure_2[14]).ConjureScreenScenes.CHAT, obj);
                    }
                  }
                }
                class Y {
                  constructor(arg0) {
                    closure_0 = guildId;
                    obj = guildId(closure_2[18]);
                    obj1 = {
                      project: guildId,
                      guildId: closure_0,
                      muted: null,
                      removeTarget: null,
                      openChat: null,
                      onRemix: null,
                      onOpenSettings: null,
                    };
                    obj3 = guildId(closure_2[19]);
                    obj1.muted = obj3.isConjureProjectMuted(closure_1_7.settings, guildId.id);
                    obj4 = guildId(closure_2[20]);
                    obj1.removeTarget = obj4.readConjureRemoveTarget(guildId);
                    obj1.openChat = function openChat() {
                      return closure_2(project.id);
                    };
                    obj1.onRemix = function onRemix() {
                      return closure_5(closure_0);
                    };
                    obj1.onOpenSettings = function onOpenSettings() {
                      const obj2 = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: null };
                      const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
                      let guild_id = project.guild_id;
                      const obj = ActionSheetActionCreators;
                      if (guild_id == null) {
                        guild_id = guildId;
                      }
                      obj3.guildId = guild_id;
                      obj2.content = React6(ConjureSettingsSheetDefault, obj3);
                      return obj.showActionSheet(obj2);
                    };
                    result = obj.conjureProjectActions(obj1);
                    obj5 = guildId(closure_2[22]);
                    obj7 = {
                      key: "ConjureProjectActions",
                      header: { title: guildId.name },
                      hasIcons: true,
                      options: result.map((label) => ({
                        label: label.label,
                        IconComponent: label.IconComponent,
                        isDestructive: label.destructive,
                        onPress: label.action,
                      })),
                    };
                    result1 = obj5.showSimpleActionSheet(obj7);
                    return;
                  }
                }
                cResult[28] = guildId;
                cResult[29] = U;
                cResult[30] = D;
                cResult[31] = Y;
              }
              class D {
                constructor(arg0) {
                  obj = closure_0(closure_2[15]);
                  obj1 = { key: closure_0(closure_2[17]).CONJURE_REMIX_SHEET_KEY, content: null };
                  obj4 = { project: guildId, currentGuildId: guildId, onRemixed: closure_3 };
                  obj1.content = jsx(closure_1(closure_2[17]), obj4);
                  showActionSheetResult = obj.showActionSheet(obj1);
                  return;
                }
              }
              cResult[25] = guildId;
              cResult[26] = tmp25;
              cResult[27] = D;
            }
            cResult[22] = guildId;
            cResult[23] = tmp25;
            cResult[24] = tmp28;
          }
          const projectOpenerResult = tmp(11722).projectOpener(guildId, U);
          cResult[19] = guildId;
          cResult[20] = U;
          cResult[21] = projectOpenerResult;
          const tmpResult6 = tmp(11722);
        }
      }
      if (cResult[13] !== guildId) {
        class U {
          constructor(arg0) {
            obj = { projectId: guildId };
            return closure_1.push(closure_0(closure_2[14]).ConjureScreenScenes.CHAT, obj);
          }
        }
        cResult[13] = guildId;
        class Y {
          constructor(arg0) {
            closure_0 = guildId;
            obj = guildId(closure_2[18]);
            obj1 = {
              project: guildId,
              guildId: closure_0,
              muted: null,
              removeTarget: null,
              openChat: null,
              onRemix: null,
              onOpenSettings: null,
            };
            obj3 = guildId(closure_2[19]);
            obj1.muted = obj3.isConjureProjectMuted(closure_1_7.settings, guildId.id);
            obj4 = guildId(closure_2[20]);
            obj1.removeTarget = obj4.readConjureRemoveTarget(guildId);
            obj1.openChat = function openChat() {
              return closure_2(project.id);
            };
            obj1.onRemix = function onRemix() {
              return closure_5(closure_0);
            };
            obj1.onOpenSettings = function onOpenSettings() {
              const obj2 = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: null };
              const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
              let guild_id = project.guild_id;
              const obj = ActionSheetActionCreators;
              if (guild_id == null) {
                guild_id = guildId;
              }
              obj3.guildId = guild_id;
              obj2.content = React6(ConjureSettingsSheetDefault, obj3);
              return obj.showActionSheet(obj2);
            };
            result = obj.conjureProjectActions(obj1);
            obj5 = guildId(closure_2[22]);
            obj7 = {
              key: "ConjureProjectActions",
              header: { title: guildId.name },
              hasIcons: true,
              options: result.map((label) => ({
                label: label.label,
                IconComponent: label.IconComponent,
                isDestructive: label.destructive,
                onPress: label.action,
              })),
            };
            result1 = obj5.showSimpleActionSheet(obj7);
            return;
          }
        }
        cResult[14] = M;
      } else {
        class U {
          constructor(arg0) {
            obj = { projectId: guildId };
            return closure_1.push(closure_0(closure_2[14]).ConjureScreenScenes.CHAT, obj);
          }
        }
      }
      const found = stateFromStoresArray.filter(M);
      const sorted1 = found.sort(tmp(11724).compareConjureProjectsByUpdatedAt);
      cResult[10] = stateFromStoresArray;
      cResult[11] = guildId;
      cResult[12] = sorted1;
      const tmpResult5 = guildId(504);
    }
  : function ConjureProjectList(guildId) {
      guildId = guildId.guildId;
      let navigation;
      let stateFromStoresArray;
      closure_8 = undefined;
      const bottom = navigation(stateFromStoresArray[9])().bottom;
      const tmp3 = closure_11(0);
      navigation = guildId(stateFromStoresArray[10]).useNavigation();
      let obj = guildId(stateFromStoresArray[10]);
      const items = [closure_8];
      stateFromStoresArray = guildId(stateFromStoresArray[11]).useStateFromStoresArray(
        items,
        () => closure_8.getOwnedProjects(),
        [],
      );
      let obj2 = guildId(stateFromStoresArray[11]);
      const items1 = [closure_8];
      const items2 = [guildId];
      const stateFromStoresArray1 = guildId(stateFromStoresArray[11]).useStateFromStoresArray(
        items1,
        () => ConjureProjectStore.getSharedProjects(guildId),
        items2,
      );
      let obj3 = guildId(stateFromStoresArray[11]);
      const items3 = [closure_8];
      const stateFromStores = guildId(stateFromStoresArray[11]).useStateFromStores(
        items3,
        () => closure_8.getProjectsFetchState(),
        [],
      );
      const items4 = [stateFromStoresArray, guildId];
      const memo = stateFromStoresArray1.useMemo(() => {
        const found = stateFromStoresArray.filter((item) =>
          guildId(stateFromStoresArray[12]).isConjureProjectInGuild(item, closure_1_0),
        );
        return found.sort(ConjureActivity.compareConjureProjectsByUpdatedAt);
      }, items4);
      const items5 = [stateFromStoresArray1];
      const memo1 = stateFromStoresArray1.useMemo(() => {
        const substr = stateFromStoresArray1.slice();
        return substr.sort(ConjureActivity.compareConjureProjectsByUpdatedAt);
      }, items5);
      const items6 = [navigation];
      const callback = stateFromStoresArray1.useCallback(
        (projectId) => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, { projectId }),
        items6,
      );
      const items7 = [guildId, callback];
      const memo2 = stateFromStoresArray1.useMemo(
        () => conjureStandaloneScenes.projectOpener(guildId, callback),
        items7,
      );
      const items8 = [guildId, memo2];
      const callback1 = stateFromStoresArray1.useCallback(() => {
        const obj2 = {
          key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY,
          content: React6(ConjureCreateSheetDefault, { guildId, onCreated: memo2 }),
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      }, items8);
      const items9 = [guildId, memo2];
      const callback2 = stateFromStoresArray1.useCallback((project) => {
        const obj2 = {
          key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY,
          content: React6(ConjureRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }),
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      }, items9);
      const items10 = [guildId, callback, callback2];
      closure_8 = stateFromStoresArray1.useCallback((project) => {
        guildId = project;
        let obj2 = {
          project,
          guildId,
          muted: null,
          removeTarget: null,
          openChat: null,
          onRemix: null,
          onOpenSettings: null,
        };
        let obj = guildId(stateFromStoresArray[18]);
        obj2.muted = guildId(stateFromStoresArray[19]).isConjureProjectMuted(callback2.settings, project.id);
        let obj3 = guildId(stateFromStoresArray[19]);
        obj2.removeTarget = guildId(stateFromStoresArray[20]).readConjureRemoveTarget(project);
        obj2.openChat = function openChat() {
          return callback(project.id);
        };
        obj2.onRemix = function onRemix() {
          return callback2(closure_0);
        };
        obj2.onOpenSettings = function onOpenSettings() {
          const obj2 = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: null };
          const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
          let guild_id = project.guild_id;
          const obj = ActionSheetActionCreators;
          if (guild_id == null) {
            guild_id = guildId;
          }
          obj3.guildId = guild_id;
          obj2.content = React6(ConjureSettingsSheetDefault, obj3);
          return obj.showActionSheet(obj2);
        };
        const result = obj.conjureProjectActions(obj2);
        const obj4 = guildId(stateFromStoresArray[20]);
        const obj5 = guildId(stateFromStoresArray[22]);
        const result1 = obj5.showSimpleActionSheet({
          key: "ConjureProjectActions",
          header: { title: project.name },
          hasIcons: true,
          options: result.map((label) => ({
            label: label.label,
            IconComponent: label.IconComponent,
            isDestructive: label.destructive,
            onPress: label.action,
          })),
        });
      }, items10);
      const items11 = [navigation, callback1];
      const effect = stateFromStoresArray1.useEffect(() => {
        navigation.setOptions({
          headerRight(arg0) {
            ({ tintColor, pressColor, pressOpacity } = arg0);
            const obj = {
              tintColor,
              pressColor,
              pressOpacity,
              onPress,
              displayMode: "minimal",
              backImage(color) {
                return closure_1_9(closure_1_0(closure_1_2[24]).PlusMediumIcon, { size: "md", color: color.tintColor });
              },
              accessibilityLabel: null,
            };
            const intl = guildId(stateFromStoresArray[25]).intl;
            obj.accessibilityLabel = intl.string(guildId(stateFromStoresArray[25]).t.CumH4u);
            return closure_2_9(guildId(stateFromStoresArray[23]).HeaderBackButton, obj);
          },
        });
      }, items11);
      if (tmp14) {
        let obj5 = { style: tmp3.content, children: null };
        const obj6 = {
          contentContainerStyle: null,
          scrollIndicatorInsets: null,
          keyboardShouldPersistTaps: "handled",
          children: null,
        };
        const items12 = [tmp3.listContent];
        const obj7 = { paddingBottom: tmp(tmp2[6]).space.PX_8 + bottom };
        items12[1] = obj7;
        obj6.contentContainerStyle = items12;
        const obj8 = { bottom };
        obj6.scrollIndicatorInsets = obj8;
        const items13 = [closure_9(tmp(tmp2[30]), {}), , ,];
        let tmp23Result = null;
        if (memo.length > 0) {
          const obj9 = { style: tmp3.section, children: null };
          const obj10 = { style: tmp3.sectionHeading, children: null };
          const obj11 = { variant: "heading-md/bold", color: "text-default", children: null };
          const intl3 = tmp4(tmp2[25]).intl;
          obj11.children = intl3.string(tmp(tmp2[27]).dWgSAa);
          const items14 = [closure_9(tmp4(tmp2[26]).Text, obj11)];
          const obj12 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl4 = tmp4(tmp2[25]).intl;
          obj12.children = intl4.string(tmp(tmp2[27]).JQpNkh);
          items14[1] = closure_9(tmp4(tmp2[26]).Text, obj12);
          obj10.children = items14;
          const items15 = [closure_10(tmp22, obj10)];
          const obj13 = {
            hasIcons: true,
            children: memo.map((project) =>
              closure_1_9(
                closure_1_12,
                {
                  project,
                  onPress() {
                    return callback(project.id);
                  },
                  onMore() {
                    return closure_8(closure_0);
                  },
                },
                project.id,
              ),
            ),
          };
          items15[1] = closure_9(tmp4(tmp2[31]).TableRowGroup, obj13);
          obj9.children = items15;
          tmp23Result = closure_10(tmp22, obj9);
        }
        items13[1] = tmp23Result;
        let tmp23Result2 = null;
        if (memo1.length > 0) {
          const obj14 = { style: tmp3.section, children: null };
          const obj15 = { style: tmp3.sectionHeading, children: null };
          const obj16 = { variant: "heading-md/bold", color: "text-default", children: null };
          const intl5 = tmp4(tmp2[25]).intl;
          obj16.children = intl5.string(tmp(tmp2[27])["wFi8+o"]);
          const items16 = [closure_9(tmp4(tmp2[26]).Text, obj16)];
          const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl6 = tmp4(tmp2[25]).intl;
          obj17.children = intl6.string(tmp(tmp2[27]).dQ3U1J);
          items16[1] = closure_9(tmp4(tmp2[26]).Text, obj17);
          obj15.children = items16;
          const items17 = [closure_10(tmp22, obj15)];
          const obj18 = {
            hasIcons: true,
            children: memo1.map((project) =>
              closure_1_9(
                closure_1_12,
                {
                  project,
                  onPress() {
                    return callback(project.id);
                  },
                  onMore() {
                    return closure_8(closure_0);
                  },
                },
                project.id,
              ),
            ),
          };
          items17[1] = closure_9(tmp4(tmp2[31]).TableRowGroup, obj18);
          obj14.children = items17;
          tmp23Result2 = closure_10(tmp22, obj14);
        }
        items13[2] = tmp23Result2;
        items13[3] = null;
        obj6.children = items13;
        obj5.children = closure_10(memo2, obj6);
        return closure_9(callback1, obj5);
      } else {
        const obj19 = { style: tmp3.centered, children: null };
        if (null != stateFromStores) {
          if ("loading" !== stateFromStores.type) {
            if ("error" === stateFromStores.type) {
              const obj20 = { style: tmp3.listError, children: null };
              const obj21 = { variant: "text-md/normal", color: "text-muted", children: null };
              let intl = tmp4(tmp2[25]).intl;
              obj21.children = intl.string(tmp(tmp2[27]).DJAPMO);
              const items18 = [closure_9(tmp4(tmp2[26]).Text, obj21)];
              const obj22 = { variant: "secondary", size: "sm", text: null, onPress: null };
              const intl2 = tmp4(tmp2[25]).intl;
              obj22.text = intl2.string(tmp(tmp2[27])["WFJ/vb"]);
              obj22.onPress = function onPress() {
                return ConjureActionCreators.listProjects(guildId);
              };
              items18[1] = closure_9(tmp4(tmp2[28]).Button, obj22);
              obj20.children = items18;
              let tmp15Result2 = closure_10(tmp16, obj20);
            } else {
              const obj23 = { style: tmp3.listError, children: null };
              const obj24 = { variant: "text-md/normal", color: "text-muted", children: null };
              const intl7 = tmp4(tmp2[25]).intl;
              obj24.children = intl7.string(tmp(tmp2[27])["9/5sLV"]);
              const items19 = [closure_9(tmp4(tmp2[26]).Text, obj24)];
              const obj25 = { variant: "primary", size: "sm", text: null, onPress: null };
              const intl8 = tmp4(tmp2[25]).intl;
              obj25.text = intl8.string(tmp4(tmp2[25]).t.CumH4u);
              obj25.onPress = callback1;
              items19[1] = closure_9(tmp4(tmp2[28]).Button, obj25);
              obj23.children = items19;
              tmp15Result2 = closure_10(tmp16, obj23);
            }
          }
          obj19.children = tmp15Result2;
          closure_9(tmp16, obj19);
        }
        tmp15Result2 = closure_9(callback, {});
      }
      let obj4 = guildId(stateFromStoresArray[11]);
      tmp14 = memo.length > 0 || memo1.length > 0;
    };
