// === Module 13769: useConjureAppChannelSheet ===

// Module 13769 (useConjureAppChannelSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import _modDef3830 from "module_3830" /* 3830 */;
import UserUtils from "UserUtils" /* 5015 */;
import FastImageDefault from "FastImage" /* 5651 */;
import useConjureAppCreatorDefault from "useConjureAppCreator" /* 13770 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6752 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4966);
let obj2 = { icon: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.lg };
obj2.icon = size;
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppSheetIcon(application) {
  const cResult = c.c(6);
  application = application.application;
  const tmp3 = closure_6();
  if (cResult[0] === application.icon) {
    if (cResult[1] === application.id) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === tmp3.icon) {
      if (cResult[4] === tmp4) {
        let tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj3 = { source: tmp4, style: tmp3.icon };
    const tmp9 = jsx(FastImageDefault, { source: tmp4, style: tmp3.icon });
    cResult[3] = tmp3.icon;
    cResult[4] = tmp4;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon, size: 48 });
  cResult[0] = application.icon;
  cResult[1] = application.id;
  cResult[2] = applicationIconSource;
  tmp4 = applicationIconSource;
  const obj4 = { id: application.id, icon: application.icon, size: 48 };
}) : (function ConjureAppSheetIcon(application) {
  application = application.application;
  const obj = { source: null, style: null };
  const tmp = closure_6();
  obj.source = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon, size: 48 });
  obj.style = tmp.icon;
  return <tmp2 source={null} style={null} />;
});
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/useConjureAppChannelSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppChannelSheet(guild_id, arg1) {
  const cResult = guild_id(576).c(10);
  guild_id = guild_id.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  const obj = guild_id(576);
  let tmp5 = null;
  if (arg1) {
    tmp5 = guild_id;
  }
  const appChannelApplication = guild_id(7323).useAppChannelApplication(tmp5);
  let tmp7 = null;
  if (arg1) {
    let conjureProjectId;
    if (appChannelApplication != null) {
      conjureProjectId = appChannelApplication.conjureProjectId;
    }
    tmp7 = null;
    if (null != conjureProjectId) {
      tmp7 = appChannelApplication;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function s() {
      let guildProjectsFetchState = null;
      if (null != guild_id) {
        guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
      }
      let tmp4 = "success" === guildProjectsFetchState;
      if (!tmp4) {
        tmp4 = "error" === guildProjectsFetchState;
      }
      return tmp4;
    };
    const items1 = [guild_id];
    cResult[1] = guild_id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp12 = items1;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult = guild_id(7323);
  const stateFromStores = guild_id(504).useStateFromStores(first, tmp11, tmp12);
  let tmp16 = null != tmp7;
  const tmpResult3 = guild_id(504);
  if (tmp16) {
    tmp16 = stateFromStores;
  }
  const creator = useConjureAppCreatorDefault(tmp7, guild_id, tmp16).creator;
  if (cResult[4] === tmp7) {
    if (cResult[5] === creator) {
      let tmp19 = cResult[6];
    }
    let tmp24 = null;
    if (null != tmp7) {
      tmp24 = tmp18;
    }
    if (cResult[7] === tmp19) {
      if (cResult[8] === tmp24) {
        let tmp25 = cResult[9];
      }
      return tmp25;
    }
    const obj2 = { header: tmp19, remixProject: tmp24 };
    cResult[7] = tmp19;
    cResult[8] = tmp24;
    cResult[9] = obj2;
    tmp25 = obj2;
  }
  let tmp20 = null;
  if (null != tmp7) {
    const obj3 = { icon: null, title: null, subtitle: null };
    const obj4 = { application: tmp7 };
    obj3.icon = <closure_7 application={tmp7} />;
    obj3.title = tmp7.name;
    let formatToPlainStringResult;
    if (null != creator) {
      const intl = tmp(1128).intl;
      const obj5 = { name: tmp(5015).getName(creator) };
      formatToPlainStringResult = intl.formatToPlainString(_modDef3830["6/x9LD"], obj5);
      const tmpResult4 = tmp(5015);
    }
    obj3.subtitle = formatToPlainStringResult;
    tmp20 = obj3;
  }
  cResult[4] = tmp7;
  cResult[5] = creator;
  cResult[6] = tmp20;
  tmp19 = tmp20;
  const tmp15Result = useConjureAppCreatorDefault(tmp7, guild_id, tmp16);
}) : (function useConjureAppChannelSheet(guild_id, arg1) {
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
      obj.icon = <closure_7 application={appChannelApplication} />;
      obj.title = appChannelApplication.name;
      let formatToPlainStringResult;
      if (null != creator) {
        const intl = util.intl;
        const obj3 = { name: UserUtils.getName(tmp5) };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3830["6/x9LD"], obj3);
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
});