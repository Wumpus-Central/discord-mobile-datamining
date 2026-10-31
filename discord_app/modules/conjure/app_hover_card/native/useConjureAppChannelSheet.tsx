// === Module 14401: useConjureAppChannelSheet ===

// Module 14401 (useConjureAppChannelSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import _modDef3868 from "module_3868" /* 3868 */;
import UserUtils from "UserUtils" /* 5068 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ConjureAppIconTileDefault from "ConjureAppIconTile" /* 11340 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;

require = fn;
function ConjureAppSheetIcon(application) {
  application = application.application;
  const tmp = closure_7();
  if (null == application.icon) {
    const obj4 = { style: tmp.icon, children: null };
    ({ id: obj5.applicationId, name: obj5.name } = application);
    obj4.children = jsx(ConjureAppIconTileDefault, { applicationId: null, name: null, size: 48 });
    let tmp6 = <View style={tmp.icon}>{null}</View>;
    const obj8 = { applicationId: null, name: null, size: 48 };
  } else {
    const obj = { source: null, style: null };
    ({ id: obj3.id, icon: obj3.icon } = application);
    obj.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null, size: 48 });
    obj.style = tmp.icon;
    tmp6 = <tmp5 source={null} style={null} />;
    const obj9 = { id: null, icon: null, size: 48 };
  }
  return tmp6;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { icon: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj2.icon = size;
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/useConjureAppChannelSheet.tsx");

export default function useConjureAppChannelSheet(guild_id, arg1) {
  guild_id = guild_id.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  let tmp4 = null;
  if (arg1) {
    tmp4 = guild_id;
  }
  let appChannelApplication = guild_id(creator[9]).useAppChannelApplication(tmp4);
  let tmp6 = null;
  if (arg1) {
    let conjureProjectId;
    if (appChannelApplication != null) {
      conjureProjectId = appChannelApplication.conjureProjectId;
    }
    tmp6 = null;
    if (null != conjureProjectId) {
      tmp6 = appChannelApplication;
    }
  }
  appChannelApplication = tmp6;
  let obj = guild_id(creator[9]);
  const items = [ConjureProjectStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(creator[10]).useStateFromStores(items, () => {
    let guildProjectsFetchState = null;
    if (null != guild_id) {
      guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
    }
    let tmp4 = "success" === guildProjectsFetchState;
    if (!tmp4) {
      tmp4 = "error" === guildProjectsFetchState;
    }
    return tmp4;
  }, items1);
  let tmp10 = null != tmp6;
  const tmp2Result = guild_id(creator[10]);
  if (tmp10) {
    tmp10 = stateFromStores;
  }
  const tmp9Result = appChannelApplication(creator[11])(tmp6, guild_id, tmp10);
  creator = tmp9Result.creator;
  const remixProject = tmp9Result.remixProject;
  const items2 = [tmp6, creator, remixProject];
  return remixProject.useMemo(() => {
    let tmp2 = null;
    if (null != appChannelApplication) {
      const obj = { icon: null, title: null, subtitle: null };
      const obj2 = { application: appChannelApplication };
      obj.icon = <ConjureAppSheetIcon application={appChannelApplication} />;
      obj.title = appChannelApplication.name;
      let formatToPlainStringResult;
      if (null != creator) {
        const intl = util.intl;
        const obj3 = { name: UserUtils.getName(tmp5) };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3868["6/x9LD"], obj3);
      }
      obj.subtitle = formatToPlainStringResult;
      tmp2 = obj;
    }
    const obj5 = { header: tmp2, remixProject: null };
    let tmp10 = null;
    if (null != appChannelApplication) {
      tmp10 = remixProject;
    }
    obj5.remixProject = tmp10;
    return obj5;
  }, items2);
};