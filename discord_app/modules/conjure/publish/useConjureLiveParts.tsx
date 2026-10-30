// discord_app/modules/conjure/publish/useConjureLiveParts.tsx
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_4 = fn(4939).GUILD_SELECTABLE_CHANNELS_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureLiveParts.tsx");

export default function useConjureLiveParts(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let project = ConjureProjectStore.getProject(closure_0);
      if (project == null) {
        project = null;
      }
      return project;
    },
    items1,
  );
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const obj = require("initialize");
  const items2 = [application_id];
  const items3 = [application_id];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => {
      let tmp2 = null;
      if (null != application_id) {
        let application = ApplicationStore.getApplication(tmp);
        if (application == null) {
          application = null;
        }
        tmp2 = application;
      }
      return tmp2;
    },
    items3,
  );
  const tmpResult = require("initialize");
  const items4 = [GuildStore];
  const items5 = [arg1];
  const stateFromStores2 = require("initialize").useStateFromStores(
    items4,
    () => {
      let tmp2 = null;
      if (null != closure_1) {
        let guild = GuildStore.getGuild(tmp);
        if (guild == null) {
          guild = null;
        }
        tmp2 = guild;
      }
      return tmp2;
    },
    items5,
  );
  const tmpResult4 = require("initialize");
  const items6 = [GuildMemberCountStore];
  const items7 = [arg1];
  const stateFromStores3 = require("initialize").useStateFromStores(
    items6,
    () => {
      let tmp2 = null;
      if (null != closure_1) {
        let memberCount = GuildMemberCountStore.getMemberCount(tmp);
        if (memberCount == null) {
          memberCount = null;
        }
        tmp2 = memberCount;
      }
      return tmp2;
    },
    items7,
  );
  const tmpResult5 = require("initialize");
  const items8 = [GuildChannelStore];
  const items9 = [arg1, application_id];
  const obj2 = {
    project: stateFromStores,
    liveName: null,
    liveDescription: null,
    channels: null,
    guild: null,
    memberCount: null,
  };
  let str;
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items8,
    () => {
      if (null != closure_1) {
        if (null != application_id) {
          const found = GuildChannelStore.getChannels(tmp)[closure_4].filter(
            (channel) => closure_0(closure_1[6]).conjureChannelAppId(channel.channel) === application_id,
          );
          const mapped = found.map((channel) => channel.channel);
          const arr = GuildChannelStore.getChannels(tmp)[closure_4];
        }
        return [];
      }
    },
    items9,
  );
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    let name;
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    str = name;
  }
  if (str == null) {
    str = "";
  }
  obj2.liveName = str;
  let str2;
  if (stateFromStores1 != null) {
    if (stateFromStores1.description != null) {
      str2 = str3.trim();
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  obj2.liveDescription = str2;
  obj2.channels = stateFromStoresArray;
  obj2.guild = stateFromStores2;
  obj2.memberCount = stateFromStores3;
  return obj2;
}
