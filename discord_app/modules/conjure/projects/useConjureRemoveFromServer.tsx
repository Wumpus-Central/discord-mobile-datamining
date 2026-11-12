// discord_app/modules/conjure/projects/useConjureRemoveFromServer.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4079 from "../intl/ConjureUntranslated.messages.js";
import conjureRemoveApp from "conjureRemoveApp.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/useConjureRemoveFromServer.tsx");

export default function useConjureRemoveFromServer(arg0) {
  _require = arg0;
  [checked, dependencyMap] = noop.useState(true);
  [tmp4, asyncGeneratorStep] = noop.useState(false);
  [obj2.pending, _slicedToArray] = noop.useState(false);
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  [tmp7, noop] = _slicedToArray(noop.useState(null), 2);
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  [tmp9, closure_6] = _slicedToArray(noop.useState(null), 2);
  const projectId = tmp9.projectId;
  const guildId = tmp9.guildId;
  const appName = tmp9.appName;
  const guildName = tmp9.guildName;
  const channelNames = tmp9.channelNames;
  const keptChannelNames = tmp9.keptChannelNames;
  const previewApp = tmp9.previewApp;
  const botStays = tmp9.botStays;
  let tmp10 = !tmp4;
  if (!tmp4) {
    let canRemove;
    if (previewApp != null) {
      canRemove = previewApp.canRemove;
    }
    tmp10 = false !== canRemove;
  }
  checked = tmp10;
  items = [tmp10, channelNames, checked, previewApp];
  const memo = noop.useMemo(() => {
    items = [];
    if (channelNames.length > 0) {
      const obj2 = { item: null, checked: null, onChange: null, disabled: false };
      const obj3 = { key: "channels", kind: "channel", label: null };
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(util.intl.currentLocale, { type: "conjunction" });
      obj3.label = listFormat.format(channelNames.map((item) => "#" + item));
      obj2.item = obj3;
      obj2.checked = checked;
      obj2.onChange = onChange;
      items.push(obj2);
    }
    if (null != previewApp) {
      const obj = { item: null, checked: null, onChange: null, disabled: null };
      const obj4 = { key: "preview-app", kind: "app", label: previewApp.name };
      obj.item = obj4;
      obj.checked = checked;
      obj.onChange = function onChange(arg0) {
        return closure_1_3(!arg0);
      };
      obj.disabled = !previewApp.canRemove;
      items.push(obj);
    }
    return items;
  }, items);
  let items1 = [tmp10, appName, channelNames.length, checked, guildId, guildName, projectId, arg0];
  let items2 = [botStays, guildName, keptChannelNames];
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp7;
              let ok;
              v3(true);
              noop(null);
              timestampProducer(closure_0);
              ok = false;
              dependencyMap = 1;
              const obj4 = { guildId, deleteChannels: null, alsoRemovePreviewBot: null };
              let tmp32 = channelNames.length > 0;
              if (tmp32) {
                tmp32 = first;
              }
              obj4.deleteChannels = tmp32;
              obj4.alsoRemovePreviewBot = alsoRemovePreviewBot;
              c3 = 2;
              c4 = 1;
              const obj5 = { value: closure_0(13063).unpublishProject(projectId, obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp7) {
              dependencyMap = 0;
              ok = false;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              ok = value.ok;
              dependencyMap = 0;
            }
            closure_129_4(false);
            if (ok) {
              const intl2 = closure_0(1113).intl;
              const obj7 = { app: closure_129_9, server: closure_129_10 };
              intl2.formatToPlainString(tmp3(4079).SNFGxP, obj7);
            } else {
              const intl = closure_0(1113).intl;
              closure_129_5(intl.string(tmp3(4079).PJ2Fkn));
              closure_129_6(null);
            }
            c4 = 3;
          }
        } catch (tmp34) {
          if (tmp4 === dependencyMap) {
            c4 = tmp2;
            throw tmp34;
          } else {
            c3 = tmp;
          }
        }
      }
    }),
    items1,
  );
  let obj2 = { optionalItems: memo, body: null, notes: null, pending: null, error: null, submit: null };
  const memo1 = noop.useMemo(() => {
    const result = conjureRemoveApp.conjureRemoveAppKeptChannels({ keptChannelNames });
    if (botStays) {
      const intl = util.intl;
      const obj3 = { server: guildName };
      items = [intl.formatToPlainString(_modDef4079["0a7JdI"], obj3)];
      let items1 = items;
    } else {
      items1 = [];
    }
    const items2 = [...items1];
    if (null != result) {
      const items3 = [result];
      let items4 = items3;
    } else {
      items4 = [];
    }
    HermesBuiltin.arraySpread(items4, tmp6);
    return items2;
  }, items2);
  let intl = require("util").intl;
  obj2.body = intl.formatToPlainString(checked(4079)["8OKM1N"], { server: guildName });
  obj2.notes = memo1;
  obj2.error = tmp7;
  obj2.submit = callback;
  return obj2;
}
export function conjureRemoveTargetFromProject(project, target) {
  let tmp = null;
  if (null != project.guild_id) {
    const obj = {
      projectId: null,
      guildId: null,
      appName: null,
      guildName: null,
      channelNames: null,
      keptChannelNames: null,
      previewApp: null,
      botStays: null,
    };
    ({ id: obj.projectId, guild_id: obj.guildId } = project);
    ({
      appName: obj.appName,
      guildName: obj.guildName,
      channelNames: obj.channelNames,
      keptChannelNames: obj.keptChannelNames,
    } = target);
    let tmp3 = null;
    if (null != target.previewAppName) {
      ({ previewAppName: obj2.name, canRemovePreviewBot: obj2.canRemove } = target);
      tmp3 = { name: null, canRemove: null };
      const obj3 = { name: null, canRemove: null };
    }
    obj.previewApp = tmp3;
    obj.botStays = !target.canRemoveBot;
    tmp = obj;
  }
  return tmp;
}
export function conjureRemoveTargetFromServerApp(conjureServerApp) {
  return {
    projectId: conjureServerApp.projectId,
    guildId: conjureServerApp.guildId,
    appName: conjureServerApp.targetAppName,
    guildName: conjureServerApp.guildName,
    channelNames: conjureServerApp.deletableChannelNames,
    keptChannelNames: conjureServerApp.keptChannelNames,
    previewApp: conjureServerApp.previewApp,
    botStays: false,
  };
}
