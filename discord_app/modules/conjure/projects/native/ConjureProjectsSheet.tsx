// === Module 13226: ConjureProjectsSheet ===

// Module 13226 (ConjureProjectsSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef3995 from "module_3995" /* 3995 */;
import BottomSheetModal from "BottomSheetModal" /* 5400 */;
import useMountEffectDefault from "useMountEffect" /* 5729 */;
import Text_Text from "Text/Text" /* 5761 */;
import getTimestampStringDefault from "getTimestampString" /* 6211 */;
import GuildIconDefault from "GuildIcon" /* 7098 */;
import TableRow from "TableRow" /* 7116 */;
import TableRowGroup from "TableRowGroup" /* 7201 */;
import Search_SearchBar from "Search/SearchBar" /* 7355 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7457 */;
import ActionSheet from "ActionSheet" /* 7502 */;
import IconButton from "IconButton" /* 8168 */;
import useConjureEntryPointPlacementDefault from "useConjureEntryPointPlacement" /* 9824 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11054 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11157 */;
import _modDef11161 from "module_11161" /* 11161 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 12320 */;
import useConjureServerProjects from "useConjureServerProjects" /* 13204 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 13229 */;
import useConjureOwnProjectListStateDefault from "useConjureOwnProjectListState" /* 13232 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5012 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11045 */;

const ConjureProjectIconDefault = ConjureProjectIcon;

require = fn;
function SubLabelText(arg0) {
  ({ children, style } = arg0);
  return React5(Text_Text.Text, { variant: "body-xs/medium", color: "text-subtle", lineClamp: 1, includeFontPadding: true, style, children });
}
function confirmPin() {
  confirmConjureYouBarPinDefault(true);
}
function ProjectSection(projects) {
  projects = projects.projects;
  let tmp2 = null;
  if (0 !== projects.length) {
    const obj = { title: tmp, hasIcons: true, children: projects.map((project) => closure_1_8(closure_1_13, { project }, project.id)) };
    tmp2 = React5(TableRowGroup.TableRowGroup, obj);
  }
  return tmp2;
}
function ServerGroupedSections(arg0) {
  ({ projects, guildId } = arg0);
  items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    guild = GuildStore.getGuild(guildId);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      name = null;
    }
    return name;
  }, items1);
  const found = projects.filter((item) => useConjureServerProjects.conjureProjectPointsAtGuild(item, guildId));
  const found1 = projects.filter((item) => !useConjureServerProjects.conjureProjectPointsAtGuild(item, guildId));
  const found2 = found1.filter((guild_id) => null == guild_id.guild_id && null == guild_id.preview_guild_id);
  const obj2 = { title: null, projects: null };
  const found3 = found1.filter((item) => !found2.includes(item));
  const intl = guildId(1113).intl;
  obj2.title = intl.string(found2(3995).QOFD3F);
  obj2.projects = found3;
  const items2 = [closure_8(ProjectSection, obj2), , ];
  const obj3 = { title: null, projects: null };
  const intl2 = guildId(1113).intl;
  obj3.title = intl2.string(found2(3995).poYQxw);
  obj3.projects = found2;
  items2[1] = closure_8(ProjectSection, obj3);
  let formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl3 = guildId(1113).intl;
    const obj4 = { guildName: stateFromStores };
    formatToPlainStringResult = intl3.formatToPlainString(found2(3995).dxv7PD, obj4);
  }
  const obj5 = { children: null };
  items2[2] = closure_8(ProjectSection, { title: formatToPlainStringResult, projects: found });
  obj5.children = items2;
  return closure_9(closure_10, obj5);
}
function ProjectList(arg0) {
  ({ query, guildId } = arg0);
  let conjureSharedWithMeProjects;
  let tmp = closure_11(0);
  let projects = useConjureOwnProjectListStateDefault(query);
  conjureSharedWithMeProjects = conjureSharedWithMeProjects(13205).useConjureSharedWithMeProjects();
  const trimmed = query.trim();
  const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  importDefault = toLocaleLowerCaseResult;
  items = [conjureSharedWithMeProjects, toLocaleLowerCaseResult];
  const memo = noop.useMemo(() => conjureSharedWithMeProjects.filter((name) => {
    name = name.name;
    return name.toLocaleLowerCase().includes(closure_1_1);
  }), items);
  const obj2 = { title: null, projects: null };
  const intl = conjureSharedWithMeProjects(1113).intl;
  obj2.title = intl.string(_modDef3995.ygVWuJ);
  obj2.projects = memo;
  const tmp9 = closure_8(ProjectSection, obj2);
  if ("projects" === projects.kind) {
    if (null != guildId) {
      const obj3 = { projects: null, guildId: null };
      projects = projects.projects;
      obj3.projects = projects;
      obj3.guildId = guildId;
      let tmp7Result = closure_8(ServerGroupedSections, obj3);
    } else {
      let stringResult;
      if (memo.length > 0) {
        const intl6 = tmp4(1113).intl;
        stringResult = intl6.string(tmp2(3995).lqroiy);
      }
      const obj4 = { title: stringResult, projects: projects.projects };
      tmp7Result = closure_8(ProjectSection, obj4);
    }
    const obj5 = { children: null };
    const items1 = [tmp7Result, tmp9];
    obj5.children = items1;
    closure_9(closure_10, obj5);
  } else {
    if (memo.length > 0) {
      let tmp10 = tmp9;
      if ("no_match" !== projects.kind) {
        tmp10 = tmp9;
      }
      return tmp10;
    }
    if ("no_match" === projects.kind) {
      const obj6 = { style: tmp.state, children: null };
      const obj7 = { variant: "body-sm/normal", color: "text-subtle", children: null };
      const intl5 = tmp4(1113).intl;
      obj7.children = intl5.string(tmp2(3995).X37fkR);
      tmp = closure_8(tmp4(5761).Text, obj7);
      obj6.children = tmp;
      let tmp7Result2 = closure_8(View, obj6);
    } else if ("error" === projects.kind) {
      const obj8 = { style: tmp.state, children: null };
      const obj9 = { variant: "body-sm/normal", color: "text-muted", children: null };
      const intl3 = tmp4(1113).intl;
      obj9.children = intl3.string(tmp2(3995).DJAPMO);
      const items2 = [closure_8(tmp4(5761).Text, obj9), ];
      const obj10 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl4 = tmp4(1113).intl;
      obj10.text = intl4.string(tmp2(3995)["WFJ/vb"]);
      obj10.onPress = function onPress() {
        return conjureSharedWithMeProjects(dependencyMap[27]).listProjects();
      };
      items2[1] = closure_8(tmp4(5768).Button, obj10);
      obj8.children = items2;
      tmp7Result2 = closure_9(View, obj8);
    } else if ("loading" === projects.kind) {
      const obj11 = { style: tmp.state, children: closure_8(tmp4(7095).ActivityIndicator, {}) };
      tmp7Result2 = closure_8(View, obj11);
    } else {
      const obj12 = { style: tmp.state, children: null };
      const obj13 = { variant: "body-sm/normal", color: "text-subtle", children: null };
      const intl2 = tmp4(1113).intl;
      obj13.children = intl2.string(tmp2(3995)["9/5sLV"]);
      obj12.children = closure_8(tmp4(5761).Text, obj13);
      tmp7Result2 = closure_8(View, obj12);
    }
  }
  const obj = conjureSharedWithMeProjects(13205);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
const createStyles = fn(5141);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 }, state: null, trailingIndicator: null, subLabel: null, shareTargetIcon: null, userIconWrapper: null, shareTargetLabel: null, unreadDot: null };
  const obj2 = { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.state = { alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
  const size = { width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20, alignItems: "center", justifyContent: "center" };
  obj.trailingIndicator = size;
  const obj3 = { alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
  obj.subLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  const obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.shareTargetIcon = { borderRadius: nativeDefault.radii.xs };
  const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
  obj.userIconWrapper = size1;
  obj.shareTargetLabel = { flexShrink: 1 };
  const size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.unreadDot = size2;
  return obj;
});
let closure_13 = noop.memo(function ProjectRow(project) {
  project = project.project;
  let unreadDot = closure_11(0);
  const conjureHomeProjectState = project(13227).useConjureHomeProjectState(project.id);
  const obj = project(13227);
  items = [ConjurePublishStatusStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
    let publishState;
    if (publishStatus != null) {
      publishState = publishStatus.publishState;
    }
    if (publishState == null) {
      publishState = null;
    }
    return publishState;
  }, items1);
  const obj2 = project(504);
  const result = project(13227).conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  const obj3 = project(13227);
  const result1 = project(13227).conjureProjectLastActivityTime(project);
  const obj4 = project(13227);
  const conjureProjectShareTargetDetails = project(13228).useConjureProjectShareTargetDetails(project);
  let tmp10Result = null;
  if (null != result1) {
    const obj6 = { since: result1, getFormatter: tmp(6211).getAbbreviatedFormatter, includeWeeks: true };
    tmp10Result = getTimestampStringDefault(obj6);
  }
  let stringResult = null;
  if (result) {
    const intl = tmp(1113).intl;
    stringResult = intl.string(_modDef3995.CSAaT0);
  }
  if ("deleting" === conjureHomeProjectState) {
    const intl4 = tmp(1113).intl;
    let stringResult1 = intl4.string(_modDef3995.Yh5pAc);
  } else if ("in_progress" === conjureHomeProjectState) {
    const intl3 = tmp(1113).intl;
    stringResult1 = intl3.string(_modDef3995["Y8pS+n"]);
  } else {
    const items2 = [tmp10Result, , ];
    let label;
    if (conjureProjectShareTargetDetails != null) {
      label = conjureProjectShareTargetDetails.label;
    }
    if (label == null) {
      let stringResult2 = null;
      if (tmpResult.isConjureProjectWithoutServer(project)) {
        const intl2 = tmp(1113).intl;
        stringResult2 = intl2.string(_modDef3995.poYQxw);
      }
      label = stringResult2;
      tmpResult = tmp(13228);
    }
    items2[1] = label;
    items2[2] = stringResult;
    const found = items2.filter((item) => null != item);
    stringResult1 = found.join(" \u00B7 ");
  }
  const items3 = [project.name, stringResult1, ];
  let stringResult3 = null;
  if ("unread" === conjureHomeProjectState) {
    const intl5 = tmp(1113).intl;
    stringResult3 = intl5.string(_modDef3995["N+3Pzk"]);
  }
  items3[2] = stringResult3;
  const found1 = items3.filter((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = "" !== item;
    }
    return tmp;
  });
  const joined = found1.join(", ");
  const obj7 = { label: project.name, subLabel: null, accessibilityLabel: null, icon: null, trailing: null, disabled: null, onPress: null };
  if ("deleting" !== conjureHomeProjectState) {
    if ("in_progress" !== conjureHomeProjectState) {
      if (null != conjureProjectShareTargetDetails) {
        const obj8 = { style: unreadDot.subLabel, children: null };
        let tmp24Result = null;
        if (null != tmp10Result) {
          const obj9 = { children: null };
          const _HermesInternal = HermesInternal;
          obj9.children = "" + tmp10Result + " \u00B7";
          tmp24Result = closure_8(SubLabelText, obj9);
        }
        const items4 = [tmp24Result, , , ];
        if ("guild" === conjureProjectShareTargetDetails.kind) {
          const obj10 = { guild: conjureProjectShareTargetDetails.guild, size: tmp(7098).GuildIconSizes.XXSMALL, selected: false, style: unreadDot.shareTargetIcon };
          let tmp24Result5 = closure_8(GuildIconDefault, obj10);
        } else {
          const obj11 = { style: unreadDot.userIconWrapper, children: null };
          const obj12 = { size: "xxs", color: nativeDefault.colors.TEXT_SUBTLE };
          obj11.children = closure_8(tmp(12323).UserIcon, obj12);
          tmp24Result5 = closure_8(View, obj11);
        }
        items4[1] = tmp24Result5;
        const obj13 = { style: unreadDot.shareTargetLabel, children: conjureProjectShareTargetDetails.label };
        items4[2] = closure_8(SubLabelText, obj13);
        let tmp24Result6 = null;
        if (null != stringResult) {
          const obj14 = { children: null };
          const _HermesInternal2 = HermesInternal;
          obj14.children = "\u00B7 " + stringResult;
          tmp24Result6 = closure_8(SubLabelText, obj14);
        }
        items4[3] = tmp24Result6;
        obj8.children = items4;
        let tmp42Result = closure_9(View, obj8);
      }
      obj7.subLabel = tmp42Result;
      obj7.accessibilityLabel = joined;
      const obj15 = { project, size: "list" };
      obj7.icon = closure_8(ConjureProjectIconDefault, obj15);
      if (!tmp13) {
        if ("in_progress" !== conjureHomeProjectState) {
          if (!tmp20) {
            obj7.trailing = undefined;
            obj7.disabled = tmp13;
            obj7.onPress = function onPress() {
              return openConjureHomeScreenDefault(project.id, { entryPoint: "project_list" });
            };
            return closure_8(tmp25, obj7);
          }
        }
      }
      const obj16 = { style: unreadDot.trailingIndicator, children: null };
      if (tmp20) {
        const obj17 = { style: null };
        unreadDot = unreadDot.unreadDot;
        obj17.style = unreadDot;
        let tmp24Result7 = closure_8(View, obj17);
      } else {
        tmp24Result7 = closure_8(tmp(7095).ActivityIndicator, { size: "small" });
      }
      obj16.children = tmp24Result7;
      closure_8(View, obj16);
    }
  }
  let tmp37;
  if ("" !== stringResult1) {
    tmp37 = stringResult1;
  }
  tmp42Result = tmp37;
  const obj5 = project(13228);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default function ConjureProjectsSheet(guildId) {
  guildId = guildId.guildId;
  if (guildId === undefined) {
    guildId = null;
  }
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp4 = closure_11(bottom);
  [tmp6, tmp7] = noop.useState("");
  const tmp8 = useConjureEntryPointPlacementDefault("ConjureProjectsSheet");
  let placement;
  if (tmp8 != null) {
    placement = tmp8.placement;
  }
  useMountEffectDefault(() => {
    ConjureActionCreators.listProjects();
  });
  const obj = { title: null, trailing: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3995.uk6jhJ);
  let tmp11Result;
  if ("you_screen" === placement) {
    const obj2 = { icon: _modDef11161, variant: "tertiary", size: "sm", accessibilityLabel: null, onPress: null };
    const intl2 = util.intl;
    obj2.accessibilityLabel = intl2.string(_modDef3995.qCBh6V);
    obj2.onPress = confirmPin;
    tmp11Result = React5(IconButton.IconButton, obj2);
  }
  const obj3 = { scrollable: true, startExpanded: true, header: React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), children: null };
  obj.trailing = tmp11Result;
  const obj4 = { contentContainerStyle: tmp4.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: null };
  const obj5 = { size: "md", onChange: tmp7, placeholder: null, accessibilityLabel: null };
  const intl3 = util.intl;
  obj5.placeholder = intl3.string(_modDef3995["2y8sUh"]);
  const intl4 = util.intl;
  obj5.accessibilityLabel = intl4.string(_modDef3995.u0kEN9);
  items = [React5(Search_SearchBar.SearchBar, obj5), , ];
  const obj6 = { hasIcons: true, children: null };
  const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
  const intl5 = util.intl;
  obj7.label = intl5.string(_modDef3995.bnVYYC);
  const intl6 = util.intl;
  obj7.subLabel = intl6.string(_modDef3995.gnzLwZ);
  obj7.icon = React5(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" });
  obj7.onPress = function onPress() {
    return openConjureHomeScreenDefault(undefined, { focusComposer: true });
  };
  obj6.children = React5(TableRow.TableRow, obj7);
  items[1] = React5(TableRowGroup.TableRowGroup, obj6);
  items[2] = React5(ProjectList, { query: tmp6, guildId });
  obj4.children = items;
  obj3.children = React6(BottomSheetModal.BottomSheetScrollView, obj4);
  return React5(ActionSheet.ActionSheet, obj3);
};