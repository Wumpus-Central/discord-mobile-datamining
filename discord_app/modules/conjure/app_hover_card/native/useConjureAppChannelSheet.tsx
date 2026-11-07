// discord_app/modules/conjure/app_hover_card/native/useConjureAppChannelSheet.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef4026 from "../../intl/ConjureUntranslated.messages.js";
import UserUtils from "../../../../utils/UserUtils.tsx";
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
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
  let appChannelApplication = guild_id(creator[3]).useAppChannelApplication(tmp4);
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
  let obj = guild_id(creator[3]);
  items = [ConjureProjectStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(creator[4]).useStateFromStores(
    items,
    () => {
      let guildProjectsFetchState = null;
      if (null != guild_id) {
        guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
      }
      let tmp4 = "success" === guildProjectsFetchState;
      if (!tmp4) {
        tmp4 = "error" === guildProjectsFetchState;
      }
      return tmp4;
    },
    items1,
  );
  let tmp10 = null != tmp6;
  const tmp2Result = guild_id(creator[4]);
  if (tmp10) {
    tmp10 = stateFromStores;
  }
  const tmp9Result = appChannelApplication(creator[5])(tmp6, guild_id, tmp10);
  creator = tmp9Result.creator;
  const remixProject = tmp9Result.remixProject;
  const items2 = [tmp6, creator, remixProject];
  return remixProject.useMemo(() => {
    let tmp2 = null;
    if (null != appChannelApplication) {
      const obj = { icon: null, title: null, subtitle: null };
      const obj2 = { application: appChannelApplication };
      obj.icon = jsx(ConjureAppSheetIconDefault, { application: appChannelApplication });
      obj.title = appChannelApplication.name;
      let formatToPlainStringResult;
      if (null != creator) {
        const intl = util.intl;
        const obj3 = { name: UserUtils.getName(tmp6) };
        formatToPlainStringResult = intl.formatToPlainString(_modDef4026["6/x9LD"], obj3);
      }
      obj.subtitle = formatToPlainStringResult;
      tmp2 = obj;
    }
    const obj5 = { header: tmp2, remixProject: null };
    let tmp9 = null;
    if (null != appChannelApplication) {
      tmp9 = remixProject;
    }
    obj5.remixProject = tmp9;
    return obj5;
  }, items2);
}
