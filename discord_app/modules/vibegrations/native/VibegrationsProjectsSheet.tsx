// === Module 16793: VibegrationsProjectsSheet ===

// Module 16793 (VibegrationsProjectsSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import _modDef3715 from "module_3715" /* 3715 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import useMountEffectDefault from "useMountEffect" /* 5464 */;
import TableRowGroup from "TableRowGroup" /* 6165 */;
import BottomSheetModal from "BottomSheetModal" /* 6211 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6736 */;
import ActionSheet from "ActionSheet" /* 6784 */;
import openVibegrationsProject from "openVibegrationsProject" /* 16794 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8660 */;

const require = globalThis.__r;

require = fn;
function ProjectRow(entry) {
  entry = entry.entry;
  let fallbackGuildId = entry.guildId;
  if (fallbackGuildId == null) {
    fallbackGuildId = entry.fallbackGuildId;
  }
  let application_id = entry.project.preview_application_id;
  if (application_id == null) {
    application_id = entry.project.application_id;
  }
  const data = entry(6750).useApplication(application_id).data;
  let guildName = entry.guildName;
  if (guildName == null) {
    const intl = tmp(1115).intl;
    guildName = intl.string(fallbackGuildId(3715)["qqH+iN"]);
  }
  if (null == entry.guildName) {
    const intl3 = tmp(1115).intl;
    let obj3 = { name: entry.name };
    let formatToPlainStringResult = intl3.formatToPlainString(fallbackGuildId(3715).aj4bR0, obj3);
    let tmp6 = fallbackGuildId;
  } else {
    const intl2 = tmp(1115).intl;
    ({ name: obj2.name, guildName: obj2.server } = entry);
    formatToPlainStringResult = intl2.formatToPlainString(fallbackGuildId(3715)["+Lq5Ha"], { name: null, server: null });
    tmp6 = fallbackGuildId;
    const obj4 = { name: null, server: null };
  }
  const obj5 = { label: entry.name, subLabel: guildName, accessibilityLabel: formatToPlainStringResult, icon: null, trailing: null, disabled: null, onPress: null };
  const obj9 = { id: application_id, icon: null };
  let icon;
  let obj = entry(6750);
  if (data != null) {
    icon = data.icon;
  }
  obj9.icon = icon;
  obj5.icon = closure_6(tmp6(9188), { application: obj9 });
  let tmp8Result;
  if ("building" === entry.activity) {
    tmp8Result = closure_6(ActivityIndicator, {});
  }
  obj5.trailing = tmp8Result;
  obj5.disabled = null == fallbackGuildId;
  obj5.onPress = function onPress() {
    if (null != fallbackGuildId) {
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const state = rootNavigationRef.getState();
          let num;
          if (state != null) {
            const routes = state.routes;
            if (routes != null) {
              num = routes.length;
            }
          }
          if (num == null) {
            num = 0;
          }
          if (num > 1) {
            do {
              let goBackResult = rootNavigationRef.goBack();
              num = num - 1;
            } while (num > 1);
          }
        }
      }
      const result = openVibegrationsProject.openVibegrationsProject(tmp, entry.projectId);
    }
  };
  return closure_6(entry(6083).TableRow, obj5);
}
function ProjectGroup(arg0) {
  ({ entries, fallbackGuildId: require } = arg0);
  let tmp2 = null;
  if (0 !== entries.length) {
    const obj = { title: tmp, hasIcons: true, children: entries.map((entry) => timestampProducer(ProjectRow, { entry, fallbackGuildId }, entry.projectId)) };
    tmp2 = closure_6(TableRowGroup.TableRowGroup, obj);
  }
  return tmp2;
}
function GuildGroup(guilds) {
  guilds = guilds.guilds;
  let tmp3 = null;
  if (0 !== guilds.length) {
    let obj = {
      title: tmp,
      description: tmp2,
      hasIcons: true,
      children: guilds.map((guild) => {
          let obj = { label: guild.name, icon: null, arrow: true, onPress: null };
          let obj2 = { guild, size: guild(6062).GuildIconSizes.SMALL_32 };
          obj.icon = closure_6(closure_1(6062), obj2);
          obj.onPress = function onPress() {
            ActionSheetActionCreatorsDefault.hideAllActionSheets();
            const rootNavigationRef = require("RootNavigationRef").getRootNavigationRef();
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const state = rootNavigationRef.getState();
                let num;
                if (state != null) {
                  const routes = state.routes;
                  if (routes != null) {
                    num = routes.length;
                  }
                }
                if (num == null) {
                  num = 0;
                }
                if (num > 1) {
                  do {
                    let goBackResult = rootNavigationRef.goBack();
                    num = num - 1;
                  } while (num > 1);
                }
              }
            }
            const obj2 = require("RootNavigationRef");
            const result = require("openVibegrationsProject").openVibegrationsProject(guild.id, undefined);
          };
          return closure_6(guild(6083).TableRow, obj, guild.id);
        })
    };
    tmp3 = timestampProducer(TableRowGroup.TableRowGroup, obj);
  }
  return tmp3;
}
function SheetBody() {
  const tmp = closure_9(0);
  const vibegrationsProjects = require("useVibegrationsProjects").useVibegrationsProjects(VibegrationsProjectsSheet);
  const obj = require("useVibegrationsProjects");
  const vibegrationsEligibleGuilds = require("useVibegrationsProjects").useVibegrationsEligibleGuilds(VibegrationsProjectsSheet);
  const obj2 = require("useVibegrationsProjects");
  const items = [VibegrationsProjectStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => projectsFetchState.getProjectsFetchState());
  const obj3 = require("initialize");
  const items1 = [SelectedGuildStore];
  _require = require("initialize").useStateFromStores(items1, () => lastSelectedGuildId.getLastSelectedGuildId());
  if (0 === vibegrationsProjects.length) {
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj5 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_12, children: null };
          const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl6 = tmp2(1115).intl;
          obj6.children = intl6.string(_modDef3715["IN/HRP"]);
          const items2 = [closure_6(tmp2(4832).Text, obj6), ];
          const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl7 = tmp2(1115).intl;
          obj7.text = intl7.string(_modDef3715["42EdIV"]);
          obj7.onPress = function onPress() {
            return closure_0(dependencyMap[23]).listProjects();
          };
          items2[1] = closure_6(tmp2(5447).Button, obj7);
          obj5.children = items2;
          let tmp28Result = closure_7(tmp2(5445).Stack, obj5);
        } else {
          const obj8 = { spacing: nativeDefault.space.PX_16, children: null };
          const obj9 = { spacing: nativeDefault.space.PX_4, children: null };
          const obj10 = { variant: "text-md/semibold", color: "text-strong", children: null };
          const intl9 = tmp2(1115).intl;
          obj10.children = intl9.string(_modDef3715.qSQH7H);
          const items3 = [closure_6(tmp2(4832).Text, obj10), ];
          if (0 === vibegrationsEligibleGuilds.length) {
            const intl5 = tmp2(1115).intl;
            let stringResult = intl5.string(_modDef3715.I92Gjf);
          } else {
            const intl4 = tmp2(1115).intl;
            const obj11 = { count: vibegrationsEligibleGuilds.length };
            stringResult = intl4.formatToPlainString(_modDef3715["8NmOZ5"], obj11);
          }
          const obj12 = { variant: "text-sm/normal", color: "text-muted", children: stringResult };
          items3[1] = closure_6(tmp2(4832).Text, obj12);
          obj9.children = items3;
          const items4 = [closure_7(tmp2(5445).Stack, obj9), ];
          const obj13 = { guilds: vibegrationsEligibleGuilds };
          items4[1] = closure_6(GuildGroup, obj13);
          obj8.children = items4;
          tmp28Result = closure_7(tmp2(5445).Stack, obj8);
        }
      }
      return tmp28Result;
    }
    const obj14 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_8, children: null };
    const items5 = [closure_6(ActivityIndicator, {}), ];
    const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl8 = tmp2(1115).intl;
    obj15.children = intl8.string(_modDef3715["/aUeR9"]);
    items5[1] = closure_6(tmp2(4832).Text, obj15);
    obj14.children = items5;
    tmp28Result = closure_7(tmp2(5445).Stack, obj14);
  } else {
    const found = vibegrationsEligibleGuilds.find((id) => id.id === closure_0);
    let id;
    if (found != null) {
      id = found.id;
    }
    if (id == null) {
      const first = vibegrationsEligibleGuilds[0];
      let id1;
      if (first != null) {
        id1 = first.id;
      }
      id = id1;
    }
    if (id == null) {
      id = null;
    }
    const found1 = vibegrationsProjects.filter((activity) => "idle" !== activity.activity);
    const found2 = vibegrationsProjects.filter((activity) => "idle" === activity.activity);
    const obj16 = { spacing: nativeDefault.space.PX_24, children: null };
    const obj17 = { title: null, entries: null, fallbackGuildId: null };
    const intl = tmp2(1115).intl;
    obj17.title = intl.string(_modDef3715["1SDxuI"]);
    obj17.entries = found1;
    obj17.fallbackGuildId = id;
    const items6 = [closure_6(ProjectGroup, obj17), , ];
    const obj18 = { title: null, entries: null, fallbackGuildId: null };
    const intl2 = tmp2(1115).intl;
    obj18.title = intl2.string(_modDef3715.r9EdXu);
    obj18.entries = found2;
    obj18.fallbackGuildId = id;
    items6[1] = closure_6(ProjectGroup, obj18);
    const obj19 = { title: null, guilds: null };
    const intl3 = tmp2(1115).intl;
    obj19.title = intl3.string(_modDef3715.qbAREO);
    obj19.guilds = vibegrationsEligibleGuilds;
    items6[2] = closure_6(GuildGroup, obj19);
    obj16.children = items6;
    return closure_7(tmp2(5445).Stack, obj16);
  }
  const obj4 = require("initialize");
}
const ActivityIndicator = fn(17).ActivityIndicator;
const VibegrationsBuilderRouteStore = fn(16415);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const VibegrationsProjectsSheet = "VibegrationsProjectsSheet";
const createStyles = fn(4836);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 }, state: null };
  const obj2 = { paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.state = { paddingVertical: nativeDefault.space.PX_24 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsProjectsSheet.tsx");

export default function VibegrationsProjectsSheet() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  useMountEffectDefault(() => {
    require("VibegrationsActionCreators").listProjects();
  });
  const obj = { scrollable: true, header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3715.ZnvpQR);
  obj.header = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const tmp = closure_9(bottom);
  obj.children = timestampProducer(BottomSheetModal.BottomSheetScrollView, { contentContainerStyle: closure_9(bottom).scrollContent, scrollIndicatorInsets: { bottom }, children: timestampProducer(SheetBody, {}) });
  return timestampProducer(ActionSheet.ActionSheet, obj);
};