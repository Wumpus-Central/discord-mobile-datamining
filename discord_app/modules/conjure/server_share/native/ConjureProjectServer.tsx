// discord_app/modules/conjure/server_share/native/ConjureProjectServer.tsx
import showConjureProjectServerSheetDefault from "showConjureProjectServerSheet.tsx";
import openConjureMakePersonalAlertDefault from "openConjureMakePersonalAlert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const require = fn;
const isProjectOwner = fn(6500).isProjectOwner;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_share/native/ConjureProjectServer.tsx");

export default function ConjureProjectServer(projectId) {
  projectId = projectId.projectId;
  items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(
    items,
    () => ConjureProjectStore.getProject(projectId),
    items1,
  );
  const obj = projectId(504);
  const result = projectId(6719).conjureServerProjectGuildId(stateFromStores);
  dependencyMap = result;
  const obj2 = projectId(6719);
  const items2 = [GuildStore];
  const items3 = [result];
  const stateFromStores1 = projectId(504).useStateFromStores(
    items2,
    () => {
      guild = GuildStore.getGuild(c2);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      return name;
    },
    items3,
  );
  const obj3 = projectId(504);
  const tmp6 = projectId(18334).useConjureProjectServerCandidates(projectId).length > 0;
  if (null != stateFromStores) {
    if (isProjectOwner(stateFromStores)) {
      let stringResult;
      if (!tmp6) {
        const intl = tmp(1113).intl;
        stringResult = intl.string(stateFromStores(4089).NXvmoQ);
      }
      const obj5 = { title: null, description: null, hasIcons: false, children: null };
      const intl2 = tmp(1113).intl;
      obj5.title = intl2.string(stateFromStores(4089).n431L5);
      const intl3 = tmp(1113).intl;
      if ("guild" === stateFromStores.install_scope) {
        let stringResult1 = stateFromStores1;
        if (stateFromStores1 == null) {
          const intl4 = tmp(1113).intl;
          stringResult1 = intl4.string(tmp11(4089)["6bhivN"]);
        }
        const obj6 = { server: stringResult1 };
        let formatToPlainStringResult = intl3.formatToPlainString(tmp11(4089)["KWBh/Q"], obj6);
      } else {
        formatToPlainStringResult = intl3.string(tmp11(4089)["JQ/7HT"]);
      }
      obj5.description = formatToPlainStringResult;
      const intl5 = tmp(1113).intl;
      const tmp11Result = stateFromStores(4089);
      const obj7 = {
        label: intl5.string("guild" === stateFromStores.install_scope ? tmp11Result["1E5/ay"] : tmp11Result["7SD3ul"]),
        subLabel: stringResult,
        arrow: true,
        disabled: !tmp6,
        onPress() {
          return showConjureProjectServerSheetDefault({ projectId });
        },
      };
      const items4 = [closure_6(tmp(6926).TableRow, obj7)];
      let tmp14Result = null;
      if ("guild" === stateFromStores.install_scope) {
        const obj8 = { label: null, variant: "danger", onPress: null };
        const intl6 = tmp(1113).intl;
        obj8.label = intl6.string(tmp11(4089).j1NMdG);
        obj8.onPress = function onPress() {
          return openConjureMakePersonalAlertDefault({ project: stateFromStores });
        };
        tmp14Result = closure_6(tmp(6926).TableRow, obj8);
      }
      items4[1] = tmp14Result;
      obj5.children = items4;
      return closure_7(tmp(7229).TableRowGroup, obj5);
    }
  }
  return null;
}
