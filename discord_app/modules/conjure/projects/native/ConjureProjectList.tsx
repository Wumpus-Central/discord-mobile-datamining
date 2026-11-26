// === Module 18863: ConjureProjectList ===

// Module 18863 (ConjureProjectList)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import RootNavigationRef from "RootNavigationRef" /* 5220 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5257 */;
import Text_Text from "Text/Text" /* 5634 */;
import TableRowGroup from "TableRowGroup" /* 6140 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7667 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 11450 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 14287 */;
import ConjureNumberBadgeDefault from "ConjureNumberBadge" /* 17940 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18452 */;
import ConjureHeaderIconButtonDefault from "ConjureHeaderIconButton" /* 18610 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 18867 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;

require = fn;
function ProjectRow(project) {
  project = project.project;
  const onMore = project.onMore;
  const tmp = closure_13(0);
  const conjureProjectBadge = project(7669).useConjureProjectBadge(project.id);
  const obj = project(7669);
  items = [ConjureProjectStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(items, () => ConjureProjectStore.isProjectDeleting(project.id), items1);
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1112).intl;
    const obj3 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj3.time = tmp2(6950).getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef4245.AXydi3, obj3);
    const tmp2Result = tmp2(6950);
  }
  const obj4 = { label: project.name, subLabel: null, accessibilityHint: null, disabled: null, icon: null, trailing: null, onPress: null, onLongPress: null };
  if (stateFromStores) {
    const intl2 = tmp2(1112).intl;
    formatToPlainStringResult = intl2.string(_modDef4245.Yh5pAc);
  }
  obj4.subLabel = formatToPlainStringResult;
  let stringResult;
  if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
    const intl3 = tmp2(1112).intl;
    stringResult = intl3.string(_modDef4245.hfIuc7);
  }
  obj4.accessibilityHint = stringResult;
  obj4.disabled = stateFromStores;
  obj4.icon = closure_11(ConjureProjectIconDefault, { project, size: "list" });
  if (stateFromStores) {
    let tmp13Result = closure_11(closure_6, {});
  } else {
    const obj5 = { style: tmp.projectRowTrailing, children: null };
    let tmp15Result3 = null;
    if (tmp6) {
      const obj6 = { value: conjureProjectBadge };
      tmp15Result3 = closure_11(ConjureNumberBadgeDefault, obj6);
    }
    const items2 = [tmp15Result3, ];
    const obj7 = { IconComponent: tmp2(7745).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
    const intl4 = tmp2(1112).intl;
    obj7.accessibilityLabel = intl4.string(tmp2(1112).t["UKOtz+"]);
    items2[1] = closure_11(ConjureHeaderIconButtonDefault, obj7);
    obj5.children = items2;
    tmp13Result = closure_12(closure_8, obj5);
    const tmp19Result = ConjureHeaderIconButtonDefault;
  }
  obj4.trailing = tmp13Result;
  obj4.onPress = project.onPress;
  obj4.onLongPress = onMore;
  const children = [closure_11(project(6144).TableRow, obj4), ];
  let tmp15Result4 = null;
  if (null != conjureProjectBadge) {
    tmp15Result4 = null;
    if (!stateFromStores) {
      const obj8 = { style: tmp.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
      tmp15Result4 = closure_11(closure_8, obj8);
    }
  }
  children[1] = tmp15Result4;
  return closure_12(closure_8, { children });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_6, ScrollView: metroImportDefault, View: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5043);
let closure_13 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, centered: null, listContent: null, section: null, projectRowTrailing: null, unreadPill: null, listError: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  const obj4 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj5 = { gap: nativeDefault.space.PX_8 };
  obj.projectRowTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const size = { position: "absolute", left: 0, top: "50%", width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_4, borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  obj.unreadPill = size;
  const obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectList.tsx");

export default function ConjureProjectList(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  importDefault = undefined;
  let navigation;
  let memo1;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_13(0);
  importDefault = tmp3;
  navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  ({ participating, shared, fetchState } = require("useConjureServerProjects")(guildId));
  const arr = require("useConjureOtherOwnProjects")(guildId);
  items = [guildId];
  const callback = memo1.useCallback((arg0) => {
    let str = project_list;
    if (project_list === undefined) {
      str = "project_list";
    }
    const result = conjureStandaloneScenes.pushServerProjectScreen(closure_0, arg0, str);
  }, items);
  const items1 = [guildId, callback];
  const memo = memo1.useMemo(() => conjureStandaloneScenes.projectOpener(closure_0, (arg0) => callback(arg0, "create")), items1);
  const items2 = [guildId, callback];
  memo1 = memo1.useMemo(() => conjureStandaloneScenes.projectOpener(closure_0, (arg0) => callback(arg0, "remix")), items2);
  const tmp10 = memo(memo1.useState(false), 2);
  const disabled = tmp10[0];
  const onSubmittingChange = tmp10[1];
  const tmp6 = require("useConjureServerProjects")(guildId);
  let obj2 = require("conjureCreateForm");
  let result = obj2.isConjureEligibleGuild(require("useConjureProjects").useConjureEligibleGuilds("ConjureProjectList"), guildId);
  c8 = result;
  const items3 = [guildId, memo];
  const callback1 = memo1.useCallback(() => {
    const obj2 = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: closure_2_11(ConjureCreateSheetDefault, { guildId, onCreated: memo, onSubmittingChange }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items3);
  const items4 = [guildId, memo1];
  const callback2 = memo1.useCallback((project) => {
    const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: closure_2_11(ConjureRemixSheetDefault, { project, currentGuildId, onRemixed: memo1 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items4);
  let obj4 = { latest: null, route: "Array", loading: false };
  let obj3 = require("useConjureProjects");
  obj4.loading = new Set();
  const ref = memo1.useRef(obj4);
  const effect = memo1.useEffect(() => {
    function forgetIfLeft() {
      let key;
      if (rootNavigationRef != null) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        if (currentRoute != null) {
          key = currentRoute.key;
        }
      }
      if (key !== current.route) {
        current.latest = null;
      }
    }
    const current = ref.current;
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.addListener("state", forgetIfLeft);
    }
    return () => {
      if (rootNavigationRef != null) {
        rootNavigationRef.removeListener("state", forgetIfLeft);
      }
      current.latest = null;
    };
  }, []);
  _require = callback((guildId) => {
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "+95" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_129_0 = guildId;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              const current = ref.current;
              closure_129_1 = current;
              current.latest = guildId.id;
              const rootNavigationRef = guildId(navigation[19]).getRootNavigationRef();
              let key;
              if (rootNavigationRef != null) {
                const currentRoute = rootNavigationRef.getCurrentRoute();
                if (currentRoute != null) {
                  key = currentRoute.key;
                }
              }
              current.route = key;
              const loading3 = current.loading;
              if (loading3.has(guildId.id)) {
                c6 = 3;
              } else {
                const loading4 = current.loading;
                loading4.add(guildId.id);
                c4 = 1;
                const obj4 = { project: guildId, guildId, muted: null, openChat: null, onRemix: null, onOpenSettings: null };
                const obj5 = guildId(navigation[20]);
                obj4.muted = guildId(navigation[21]).isConjureProjectMuted(callback1.settings, guildId.id);
                obj4.openChat = function openChat() {
                  return closure_3(guildId.id);
                };
                obj4.onRemix = function onRemix() {
                  return callback2(guildId);
                };
                obj4.onOpenSettings = function onOpenSettings() {
                  const obj2 = { key: closure_0(navigation[22]).CONJURE_SETTINGS_SHEET_KEY, content: null };
                  const obj3 = { projectId: guildId.id, guildId: null, initialTab: "project", isPreview: true };
                  let guild_id = guildId.guild_id;
                  const obj = closure_0(navigation[16]);
                  if (guild_id == null) {
                    guild_id = closure_0;
                  }
                  obj3.guildId = guild_id;
                  obj2.content = closure_11(closure_1(navigation[22]), obj3);
                  return obj.showActionSheet(obj2);
                };
                c5 = 2;
                c6 = 1;
                const obj6 = { value: obj5.loadConjureProjectActions(obj4), done: false };
                return obj6;
              }
              const obj11 = guildId(navigation[19]);
            }
          } else if (1 === tmp8) {
            c4 = 0;
            const loading2 = closure_129_1.loading;
            loading2.delete(closure_129_0.id);
            throw closure_3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_2 = value;
            c4 = 0;
            const loading5 = closure_129_1.loading;
            loading5.delete(closure_129_0.id);
            let isFocusedResult = closure_129_1.latest === closure_129_0.id;
            if (isFocusedResult) {
              isFocusedResult = tmp3.isFocused();
            }
            if (isFocusedResult) {
              const obj8 = { key: "ConjureProjectActions", header: null, hasIcons: true, options: null };
              const obj9 = { title: closure_129_0.name };
              obj8.header = obj9;
              obj8.options = closure_129_2.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action }));
              const result = guildId(navigation[23]).showSimpleActionSheet(obj8);
              let obj = guildId(navigation[23]);
            }
          }
          c4 = 0;
          const loading = closure_129_1.loading;
          loading.delete(closure_129_0.id);
          c6 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } catch (tmp38) {
          closure_3 = tmp38;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp38;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items5 = [guildId, navigation, callback, callback2];
  closure_12 = memo1.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items5);
  const items6 = [disabled, navigation, callback1, result];
  const effect1 = memo1.useEffect(() => {
    if (first) {
      let fn = () => ref(closure_1_0(navigation[24]).HeaderSubmittingIndicator, {});
    } else if (c8) {
      fn = (arg0) => {
        ({ tintColor, pressColor, pressOpacity } = arg0);
        const obj = {
          tintColor,
          pressColor,
          pressOpacity,
          onPress,
          displayMode: "minimal",
          backImage(color) {
            return closure_1_11(closure_1_0(closure_1_2[26]).PlusMediumIcon, { size: "md", color: color.tintColor });
          },
          accessibilityLabel: null
        };
        const intl = closure_0(navigation[27]).intl;
        obj.accessibilityLabel = intl.string(closure_0(navigation[27]).t.CumH4u);
        return closure_11(closure_0(navigation[25]).HeaderBackButton, obj);
      };
    }
    navigation.setOptions({ headerRight: fn });
  }, items6);
  if (tmp18) {
    let obj5 = { style: tmp3.content, children: null };
    let obj6 = { contentContainerStyle: null, scrollIndicatorInsets: null, keyboardShouldPersistTaps: "handled", children: null };
    const items7 = [tmp3.listContent, ];
    const obj7 = { paddingBottom: tmp(tmp2[8]).space.PX_8 + bottom };
    items7[1] = obj7;
    obj6.contentContainerStyle = items7;
    let obj8 = { bottom };
    obj6.scrollIndicatorInsets = obj8;
    const items8 = [ref(tmp(tmp2[32]), {}), , , ];
    let obj9 = { key: "participating", title: null, projects: participating };
    const items9 = [obj9, ];
    let obj10 = { key: "shared", title: tmp(tmp2[29]).YHDMK6, projects: shared };
    items9[1] = obj10;
    items8[1] = items9.map((projects) => {
      let tmp = null;
      if (projects.projects.length > 0) {
        const obj = { style: section.section, children: null };
        let tmp5 = null;
        if (null != projects.title) {
          const obj2 = { variant: "heading-sm/semibold", color: "text-default", accessibilityRole: "header", children: null };
          const intl = util.intl;
          obj2.children = intl.string(projects.title);
          tmp5 = closure_2_11(Text_Text.Text, obj2);
        }
        items = [tmp5, ];
        const obj3 = { hasIcons: true, children: null };
        projects = projects.projects;
        obj3.children = projects.map((project) => ref(closure_1_14, {
          project,
          onPress() {
            return callback(project.id);
          },
          onMore() {
            return closure_2_12(closure_0);
          }
        }, project.id));
        items[1] = closure_2_11(TableRowGroup.TableRowGroup, obj3);
        obj.children = items;
        tmp = application_id(React5, obj, projects.key);
      }
      return tmp;
    });
    items8[2] = null;
    let tmp27Result = null;
    if (arr.length > 0) {
      let obj11 = { hasIcons: false, children: null };
      const obj12 = { label: null, arrow: true, onPress: null };
      const intl4 = tmp4(tmp2[27]).intl;
      const obj13 = { count: arr.length };
      obj12.label = intl4.formatToPlainString(tmp(tmp2[29]).vnoMFE, obj13);
      obj12.onPress = tmp4(tmp2[35]).showConjureProjectsSheet;
      obj11.children = tmp27(tmp4(tmp2[34]).TableRow, obj12);
      tmp27Result = tmp27(tmp4(tmp2[33]).TableRowGroup, obj11);
    }
    items8[3] = tmp27Result;
    obj6.children = items8;
    obj5.children = closure_12(onSubmittingChange, obj6);
    return ref(c8, obj5);
  } else {
    const obj14 = { style: tmp3.centered, children: null };
    if ("error" === fetchState) {
      const obj15 = { style: tmp3.listError, children: null };
      const obj16 = { variant: "body-md/normal", color: "text-muted", children: null };
      const intl2 = tmp4(tmp2[27]).intl;
      obj16.children = intl2.string(tmp(tmp2[29]).DJAPMO);
      const items10 = [tmp19(tmp4(tmp2[28]).Text, obj16), ];
      const obj17 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp4(tmp2[27]).intl;
      obj17.text = intl3.string(tmp(tmp2[29])["WFJ/vb"]);
      obj17.onPress = function onPress() {
        return ConjureActionCreators.listProjects(closure_0);
      };
      items10[1] = tmp19(tmp4(tmp2[30]).Button, obj17);
      obj15.children = items10;
      let tmp32Result = closure_12(tmp20, obj15);
    } else if ("success" !== fetchState) {
      tmp32Result = tmp19(disabled, {});
    } else {
      const obj18 = { style: tmp3.listError, children: null };
      const intl5 = tmp4(tmp2[27]).intl;
      if (arr.length > 0) {
        let prop = tmp(tmp2[29])["/I2lbz"];
      } else {
        prop = tmp(tmp2[29])["9/5sLV"];
      }
      const obj19 = { variant: "body-md/normal", color: "text-muted", children: intl5.string(prop) };
      const items11 = [tmp19(tmp4(tmp2[28]).Text, obj19), ];
      let tmp19Result3 = null;
      if (result) {
        const obj20 = { variant: "primary", size: "sm", text: null, loading: null, disabled: null, onPress: null };
        let intl = tmp4(tmp2[27]).intl;
        obj20.text = intl.string(tmp4(tmp2[27]).t.CumH4u);
        obj20.loading = disabled;
        obj20.disabled = disabled;
        obj20.onPress = callback1;
        tmp19Result3 = tmp19(tmp4(tmp2[30]).Button, obj20);
      }
      items11[1] = tmp19Result3;
      obj18.children = items11;
      tmp32Result = closure_12(tmp20, obj18);
    }
    obj14.children = tmp32Result;
    ref(c8, obj14);
  }
};