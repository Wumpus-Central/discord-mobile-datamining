// === Module 14363: useConjureAppChannelSheet ===

// Module 14363 (useConjureAppChannelSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import _modDef3865 from "module_3865" /* 3865 */;
import UserUtils from "UserUtils" /* 5063 */;
import FastImageDefault from "FastImage" /* 5712 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

require = fn;
function ConjureAppSheetIcon(application) {
  application = application.application;
  const obj = { source: null, style: null };
  const tmp = closure_6();
  obj.source = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon, size: 48 });
  obj.style = tmp.icon;
  return <tmp2 source={null} style={null} />;
}
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { icon: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.lg };
obj2.icon = size;
let closure_6 = createStyles.createStyles(obj2);
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
  let appChannelApplication = guild_id(creator[7]).useAppChannelApplication(tmp4);
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
  let obj = guild_id(creator[7]);
  const items = [ConjureProjectStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(creator[8]).useStateFromStores(items, () => {
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
  const tmp2Result = guild_id(creator[8]);
  if (tmp10) {
    tmp10 = stateFromStores;
  }
  const tmp9Result = appChannelApplication(creator[9])(tmp6, guild_id, tmp10);
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
        formatToPlainStringResult = intl.formatToPlainString(_modDef3865["6/x9LD"], obj3);
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