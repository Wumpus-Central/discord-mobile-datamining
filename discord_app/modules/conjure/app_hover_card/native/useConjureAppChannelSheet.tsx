// discord_app/modules/conjure/app_hover_card/native/useConjureAppChannelSheet.tsx
import ConjureAppChannelSheetHeaderDefault from "ConjureAppChannelSheetHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const require = fn;
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
  const items2 = [tmp6, creator, guild_id, remixProject];
  return remixProject.useMemo(() => {
    let tmp2 = null;
    if (null != appChannelApplication) {
      const obj = { application: appChannelApplication, creator, guildId: guild_id };
      tmp2 = jsx(ConjureAppChannelSheetHeaderDefault, {
        application: appChannelApplication,
        creator,
        guildId: guild_id,
      });
    }
    const obj2 = { header: tmp2, remixProject: null };
    let tmp8 = null;
    if (null != appChannelApplication) {
      tmp8 = remixProject;
    }
    obj2.remixProject = tmp8;
    return obj2;
  }, items2);
}
