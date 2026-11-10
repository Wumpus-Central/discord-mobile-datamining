// discord_app/modules/conjure/projects/native/ConjureProjectGroupList.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import _modDef4028 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import getTimestampStringDefault from "../../../notification_center/getTimestampString.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ChevronSmallRightIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import conjureServerProject from "../../server_workspace/conjureServerProject.tsx";
import native from "../../../../design/components/experimental/native.tsx";
import openConjureHomeScreenDefault from "../../home/native/openConjureHomeScreen.tsx";
import ChevronSmallDownIcon2 from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import ConjureProjectIconDefault from "ConjureProjectIcon.tsx";
import useConjureProjectGroupsDefault from "../../project_groups/useConjureProjectGroups.tsx";
import openConjureProject from "../openConjureProject.tsx";
import useConjureProjectGroupState from "../../project_groups/useConjureProjectGroupState.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ConjurePublishStatusStore from "../../publish/ConjurePublishStatusStore.tsx";
import ConjureProjectStore from "../ConjureProjectStore.tsx";

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
function ActivityIndicatorBadge(activity) {
  const tmp = closure_11();
  const obj = { style: tmp.trailingIndicator, children: null };
  if ("unread" === activity.activity) {
    const obj2 = { style: tmp.unreadDot };
    let tmp2Result = React5(View, obj2);
  } else {
    tmp2Result = React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "small" });
  }
  obj.children = tmp2Result;
  return React5(View, obj);
}
function SubLabelText(arg0) {
  ({ children, style } = arg0);
  return React5(Text_Text.Text, {
    variant: "body-xs/medium",
    color: "text-subtle",
    lineClamp: 1,
    includeFontPadding: true,
    style,
    children,
  });
}
function ProjectRows(arg0) {
  ({ projects, hideServer: require } = arg0);
  return closure_8(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: projects.map((project) => React5(closure_15, { project, hideServer }, project.id)),
  });
}
function ProjectGroup(arg0) {
  ({ title, guild, onOpen, projects, hideServer } = arg0);
  ({ groupKey, forceExpanded } = arg0);
  if (hideServer === undefined) {
    hideServer = false;
  }
  const tmp = closure_11();
  const conjureProjectGroupCollapsed = useConjureProjectGroupState.useConjureProjectGroupCollapsed(
    groupKey,
    forceExpanded,
  );
  ({ collapsed, toggle } = conjureProjectGroupCollapsed);
  const conjureProjectGroupActivity = useConjureProjectGroupState.useConjureProjectGroupActivity(projects);
  if (collapsed) {
    let ChevronSmallDownIcon = ChevronSmallRightIcon.ChevronSmallRightIcon;
  } else {
    ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
  }
  let tmp8 = null;
  if (null != guild) {
    const obj3 = { guild, size: GuildIcon.GuildIconSizes.XSMALL_20, selected: false, style: tmp.groupIcon };
    tmp8 = React5(GuildIconDefault, obj3);
  }
  const obj4 = { children: null };
  items = [
    tmp8,
    React5(Text_Text.Text, {
      variant: "body-md/medium",
      color: "text-subtle",
      lineClamp: 1,
      style: tmp.groupName,
      children: title,
    }),
  ];
  obj4.children = items;
  const tmp6Result = React6(closure_1_10, obj4);
  const obj6 = { style: tmp.group, children: null };
  const obj7 = { style: tmp.groupHeader, children: null };
  if (null != onOpen) {
    const obj8 = {
      scaleAmountInPx: 4,
      style: tmp.groupTitle,
      accessibilityRole: "button",
      accessibilityLabel: title,
      onPress: onOpen,
      children: tmp6Result,
    };
    let tmp12Result = React5(native.PressableScale, obj8);
  } else {
    const obj9 = { style: tmp.groupTitle, accessibilityRole: "header", children: tmp6Result };
    tmp12Result = React5(View, obj9);
  }
  const items1 = [tmp12Result, ,];
  let tmp12Result3 = null;
  if (collapsed) {
    tmp12Result3 = null;
    if (null != conjureProjectGroupActivity) {
      const obj10 = { activity: conjureProjectGroupActivity };
      tmp12Result3 = React5(ActivityIndicatorBadge, obj10);
    }
  }
  items1[1] = tmp12Result3;
  const obj11 = {
    scaleAmountInPx: 4,
    hitSlop: PX_8,
    accessibilityRole: "button",
    accessibilityState: { expanded: !collapsed },
    accessibilityLabel: null,
    onPress: null,
    children: null,
  };
  const intl = util.intl;
  const tmp19 = _modDef4028;
  if (collapsed) {
    let bEFqlW = tmp19.bEFqlW;
    let tmp21 = importDefault;
  } else {
    bEFqlW = tmp19["+0dHt6"];
    tmp21 = importDefault;
  }
  obj11.accessibilityLabel = intl.formatToPlainString(bEFqlW, { name: title });
  obj11.onPress = toggle;
  const obj5 = { variant: "body-md/medium", color: "text-subtle", lineClamp: 1, style: tmp.groupName, children: title };
  obj11.children = React5(ChevronSmallDownIcon, { size: "xs", color: tmp21(575).colors.ICON_MUTED });
  items1[2] = React5(native.PressableScale, obj11);
  obj7.children = items1;
  const items2 = [React6(View, obj7)];
  let tmp12Result4 = null;
  if (!collapsed) {
    const obj13 = { projects, hideServer };
    tmp12Result4 = React5(ProjectRows, obj13);
  }
  items2[1] = tmp12Result4;
  obj6.children = items2;
  return React6(View, obj6);
}
function ServerProjectGroup(guildId) {
  guildId = guildId.guildId;
  ({ projects, forceExpanded } = guildId);
  items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const items2 = [guildId];
  let obj2 = {
    groupKey: guildId,
    title: null,
    guild: null,
    onOpen: null,
    projects: null,
    forceExpanded: null,
    hideServer: true,
  };
  let name;
  const callback = noop.useCallback(() => {
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    openConjureProject.openConjureProject(guildId);
  }, items2);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (name == null) {
    const intl = guildId(1113).intl;
    name = intl.string(_modDef4028["6bhivN"]);
  }
  obj2.title = name;
  obj2.guild = stateFromStores;
  let tmp9;
  if (null != stateFromStores) {
    tmp9 = callback;
  }
  obj2.onOpen = tmp9;
  obj2.projects = projects;
  obj2.forceExpanded = forceExpanded;
  return closure_8(ProjectGroup, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
const createStyles = fn(5142);
let obj = {
  state: { alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 },
  trailingIndicator: null,
  subLabel: null,
  shareTargetIcon: null,
  userIconWrapper: null,
  shareTargetLabel: null,
  unreadDot: null,
  group: null,
  groupHeader: null,
  groupTitle: null,
  groupIcon: null,
  groupName: null,
};
let size = {
  width: nativeDefault.space.PX_20,
  height: nativeDefault.space.PX_20,
  alignItems: "center",
  justifyContent: "center",
};
obj.trailingIndicator = size;
let obj3 = { alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
obj.subLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.shareTargetIcon = { borderRadius: nativeDefault.radii.xs };
const size1 = {
  width: nativeDefault.space.PX_16,
  height: nativeDefault.space.PX_16,
  alignItems: "center",
  justifyContent: "center",
};
obj.userIconWrapper = size1;
obj.shareTargetLabel = { flexShrink: 1 };
const size2 = {
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj.unreadDot = size2;
let obj5 = { borderRadius: nativeDefault.radii.xs };
obj.group = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj.groupHeader = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32,
};
let obj7 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32,
};
obj.groupTitle = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj8 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.groupIcon = { borderRadius: nativeDefault.radii.xs };
obj.groupName = { flexShrink: 1 };
let closure_11 = createStyles.createStyles(obj);
const PX_8 = nativeDefault.space.PX_8;
let closure_15 = noop.memo(function ProjectRow(project) {
  project = project.project;
  let flag = project.hideServer;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_11();
  const conjureHomeProjectState = project(13244).useConjureHomeProjectState(project.id);
  let obj = project(13244);
  items = [ConjurePublishStatusStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(
    items,
    () => {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
      let publishState;
      if (publishStatus != null) {
        publishState = publishStatus.publishState;
      }
      if (publishState == null) {
        publishState = null;
      }
      return publishState;
    },
    items1,
  );
  const obj2 = project(504);
  let result = project(13244).conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  let obj3 = project(13244);
  let result1 = project(13244).conjureProjectLastActivityTime(project);
  const obj4 = project(13244);
  const conjureProjectShareTargetDetails = project(13245).useConjureProjectShareTargetDetails(project);
  if (!flag) {
    let tmp11 = conjureProjectShareTargetDetails;
  } else {
    let kind;
    if (conjureProjectShareTargetDetails != null) {
      kind = conjureProjectShareTargetDetails.kind;
    }
    tmp11 = null;
  }
  let tmp14Result = null;
  if (null != result1) {
    const obj6 = { since: result1, getFormatter: tmp2(6211).getAbbreviatedFormatter, includeWeeks: true };
    tmp14Result = getTimestampStringDefault(obj6);
  }
  let stringResult = null;
  if (result) {
    const intl = tmp2(1113).intl;
    stringResult = intl.string(_modDef4028.CSAaT0);
  }
  if ("deleting" === conjureHomeProjectState) {
    const intl4 = tmp2(1113).intl;
    let stringResult1 = intl4.string(_modDef4028.Yh5pAc);
  } else if ("in_progress" === conjureHomeProjectState) {
    const intl3 = tmp2(1113).intl;
    stringResult1 = intl3.string(_modDef4028["Y8pS+n"]);
  } else {
    const items2 = [tmp14Result, ,];
    let label;
    if (tmp11 != null) {
      label = tmp11.label;
    }
    if (label == null) {
      let stringResult2 = null;
      if (tmp2Result.isConjureProjectWithoutServer(project)) {
        const intl2 = tmp2(1113).intl;
        stringResult2 = intl2.string(_modDef4028.poYQxw);
      }
      label = stringResult2;
      tmp2Result = tmp2(13245);
    }
    items2[1] = label;
    items2[2] = stringResult;
    const found = items2.filter((item) => null != item);
    stringResult1 = found.join(" \u00B7 ");
  }
  const items3 = [project.name, stringResult1];
  let stringResult3 = null;
  if ("unread" === conjureHomeProjectState) {
    const intl5 = tmp2(1113).intl;
    stringResult3 = intl5.string(_modDef4028["N+3Pzk"]);
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
  const obj7 = {
    label: project.name,
    subLabel: null,
    accessibilityLabel: null,
    icon: null,
    trailing: null,
    disabled: null,
    onPress: null,
  };
  if ("deleting" !== conjureHomeProjectState) {
    if ("in_progress" !== conjureHomeProjectState) {
      if (null != tmp11) {
        const obj8 = { style: tmp.subLabel, children: null };
        let tmp28Result = null;
        if (null != tmp14Result) {
          const obj9 = { children: null };
          const _HermesInternal = HermesInternal;
          obj9.children = "" + tmp14Result + " \u00B7";
          tmp28Result = closure_8(SubLabelText, obj9);
        }
        const items4 = [tmp28Result, , ,];
        if ("guild" === tmp11.kind) {
          const obj10 = {
            guild: tmp11.guild,
            size: tmp2(7023).GuildIconSizes.XXSMALL,
            selected: false,
            style: tmp.shareTargetIcon,
          };
          let tmp28Result4 = closure_8(GuildIconDefault, obj10);
        } else {
          const obj11 = { style: tmp.userIconWrapper, children: null };
          const obj12 = { size: "xxs", color: nativeDefault.colors.TEXT_SUBTLE };
          obj11.children = closure_8(tmp2(12295).UserIcon, obj12);
          tmp28Result4 = closure_8(View, obj11);
        }
        items4[1] = tmp28Result4;
        const obj13 = { style: tmp.shareTargetLabel, children: tmp11.label };
        items4[2] = closure_8(SubLabelText, obj13);
        let tmp28Result5 = null;
        if (null != stringResult) {
          const obj14 = { children: null };
          const _HermesInternal2 = HermesInternal;
          obj14.children = "\u00B7 " + stringResult;
          tmp28Result5 = closure_8(SubLabelText, obj14);
        }
        items4[3] = tmp28Result5;
        obj8.children = items4;
        let tmp45Result = closure_9(View, obj8);
      }
      obj7.subLabel = tmp45Result;
      obj7.accessibilityLabel = joined;
      const obj15 = { project, size: "list" };
      obj7.icon = closure_8(ConjureProjectIconDefault, obj15);
      if (!tmp17) {
        obj7.trailing = tmp28Result6;
        obj7.disabled = tmp17;
        obj7.onPress = function onPress() {
          const result = conjureServerProject.conjureServerProjectGuildId(project);
          if (null != result) {
            if (null != GuildStore.getGuild(result)) {
              const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
              const tmp2Result = KeyboardManagerUtils;
              ActionSheetActionCreatorsDefault.hideAllActionSheets();
              openConjureProject.openConjureProject(result, project.id);
              const tmp2Result2 = openConjureProject;
            }
          }
          openConjureHomeScreenDefault(project.id, { entryPoint: "project_list" });
        };
        return closure_8(tmp29, obj7);
      }
      let str10 = "working";
      if (tmp24) {
        str10 = "unread";
      }
      const obj16 = { activity: str10 };
      tmp28Result6 = closure_8(ActivityIndicatorBadge, obj16);
    }
  }
  let tmp41;
  if ("" !== stringResult1) {
    tmp41 = stringResult1;
  }
  tmp45Result = tmp41;
  const obj5 = project(13245);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectGroupList.tsx");

export default function ConjureProjectGroupList(query) {
  _require = undefined;
  const tmp = closure_11();
  const tmp4 = useConjureProjectGroupsDefault(query.query);
  ({ personal, collaborating, servers } = tmp4);
  items = [ConjureProjectStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    ownedProjectsFetchState.getOwnedProjectsFetchState(),
  );
  const tmp7 = "" !== query.query.trim();
  _require = tmp7;
  if (personal.length <= 0) {
    if (collaborating.length <= 0) {
      if (servers.length <= 0) {
        if (tmp4.hasProjects) {
          const obj2 = { style: tmp.state, children: null };
          const obj3 = { variant: "body-sm/normal", color: "text-subtle", children: null };
          const intl4 = tmp5(1113).intl;
          obj3.children = intl4.string(_modDef4028.X37fkR);
          obj2.children = closure_8(tmp5(5753).Text, obj3);
          let tmp14Result1 = closure_8(View, obj2);
        } else if ("error" === stateFromStores) {
          const obj4 = { style: tmp.state, children: null };
          const obj5 = { variant: "body-sm/normal", color: "text-muted", children: null };
          const intl2 = tmp5(1113).intl;
          obj5.children = intl2.string(_modDef4028.DJAPMO);
          const items1 = [closure_8(tmp5(5753).Text, obj5)];
          const obj6 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl3 = tmp5(1113).intl;
          obj6.text = intl3.string(_modDef4028["WFJ/vb"]);
          obj6.onPress = function onPress() {
            return forceExpanded(dependencyMap[33]).listProjects();
          };
          items1[1] = closure_8(tmp5(5760).Button, obj6);
          obj4.children = items1;
          tmp14Result1 = closure_9(View, obj4);
        } else {
          if ("success" !== stateFromStores) {
            const obj7 = { style: tmp.state, children: closure_8(tmp5(7018).ActivityIndicator, {}) };
            let obj8 = obj7;
          } else {
            obj8 = { style: tmp.state, children: null };
            const obj9 = { variant: "body-sm/normal", color: "text-subtle", children: null };
            const intl = tmp5(1113).intl;
            obj9.children = intl.string(_modDef4028["9/5sLV"]);
            obj8.children = closure_8(tmp5(5753).Text, obj9);
          }
          tmp14Result1 = closure_8(View, obj8);
        }
      }
      return tmp14Result1;
    }
  }
  if (personal.length > 0) {
    const obj10 = { style: tmp.group, children: null };
    const obj11 = { title: null, hasIcons: true, children: null };
    const intl5 = tmp5(1113).intl;
    obj11.title = intl5.string(_modDef4028.w9wAEy);
    obj11.children = personal.map((project) => closure_1_8(closure_1_15, { project }, project.id));
    const items2 = [closure_8(tmp5(7129).TableRowGroup, obj11)];
    let tmp18Result = null;
    if (collaborating.length > 0) {
      const obj12 = {
        groupKey: tmp5(13248).CONJURE_COLLABORATING_GROUP_KEY,
        title: null,
        projects: null,
        forceExpanded: null,
      };
      const intl6 = tmp5(1113).intl;
      obj12.title = intl6.string(_modDef4028.dOfCq0);
      obj12.projects = collaborating;
      obj12.forceExpanded = tmp7;
      tmp18Result = closure_8(ProjectGroup, obj12);
    }
    items2[1] = tmp18Result;
    obj10.children = items2;
    let tmp14Result = closure_9(View, obj10);
  } else {
    tmp14Result = null;
  }
  const obj13 = { children: null };
  const items3 = [
    tmp14Result,
    servers.map((guildId) =>
      React5(
        ServerProjectGroup,
        { guildId: guildId.guildId, projects: guildId.projects, forceExpanded },
        guildId.guildId,
      ),
    ),
  ];
  obj13.children = items3;
  tmp14Result1 = closure_9(closure_10, obj13);
  const obj = require("initialize");
}
