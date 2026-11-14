// discord_app/modules/conjure/server_share/native/ConjureProjectServers.tsx
import _modDef4131 from "../../intl/ConjureUntranslated.messages.js";
import openConjureRemoveAppAlertDefault from "../../projects/native/openConjureRemoveAppAlert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/ConjureProjectServers.tsx");

export default function ConjureProjectServers(projectId) {
  projectId = projectId.projectId;
  const conjureProjectServers = projectId(13206).useConjureProjectServers(projectId);
  let tmp3 = null;
  if (0 !== conjureProjectServers.length) {
    let obj2 = { title: null, description: null, hasIcons: false, children: null };
    let intl = tmp(1113).intl;
    obj2.title = intl.string(_modDef4131.yAZWTm);
    let intl2 = tmp(1113).intl;
    obj2.description = intl2.string(_modDef4131.HlSg2P);
    obj2.children = conjureProjectServers.map((item) => {
      ({ guildName, removeTarget } = item);
      ({ guildId, isTestServer } = item);
      let obj = { label: guildName, subLabel: null, trailing: null };
      let stringResult;
      if (isTestServer) {
        const intl = projectId(dependencyMap[5]).intl;
        stringResult = intl.string(_modDef4131.QyYJ4O);
      }
      obj.subLabel = stringResult;
      let tmpResult;
      if (null != removeTarget) {
        const obj2 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, onPress: null };
        const intl2 = projectId(dependencyMap[5]).intl;
        obj2.text = intl2.string(_modDef4131.BGF8VT);
        const intl3 = projectId(dependencyMap[5]).intl;
        const obj3 = { server: guildName };
        obj2.accessibilityLabel = intl3.formatToPlainString(_modDef4131["3gKG2j"], obj3);
        obj2.onPress = function onPress() {
          const project = ConjureProjectStore.getProject(projectId);
          if (null != project) {
            const obj = { project, target: removeTarget, action: "remove" };
            openConjureRemoveAppAlertDefault(obj);
          }
        };
        tmpResult = jsx(projectId(dependencyMap[8]).Button, {
          variant: "secondary",
          size: "sm",
          text: null,
          accessibilityLabel: null,
          onPress: null,
        });
      }
      obj.trailing = tmpResult;
      return jsx(projectId(dependencyMap[7]).TableRow, { label: guildName, subLabel: null, trailing: null }, guildId);
    });
    tmp3 = jsx(tmp(7746).TableRowGroup, { title: null, description: null, hasIcons: false, children: null });
  }
  return tmp3;
}
