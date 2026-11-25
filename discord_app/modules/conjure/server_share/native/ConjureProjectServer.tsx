// === Module 18444: ConjureProjectServer ===

// Module 18444 (ConjureProjectServer)
import showConjureProjectServerSheetDefault from "showConjureProjectServerSheet" /* 18450 */;
import openConjureMakePersonalAlertDefault from "openConjureMakePersonalAlert" /* 18452 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 18454 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4883 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;

const require = fn;
const isProjectOwner = fn(6903).isProjectOwner;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_share/native/ConjureProjectServer.tsx");

export default function ConjureProjectServer(projectId) {
  projectId = projectId.projectId;
  items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  const obj = projectId(504);
  const result = projectId(7544).conjureServerProjectGuildId(stateFromStores);
  dependencyMap = result;
  const obj2 = projectId(7544);
  const items2 = [GuildStore];
  const items3 = [result];
  const stateFromStores1 = projectId(504).useStateFromStores(items2, () => {
    guild = GuildStore.getGuild(c2);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  }, items3);
  const obj3 = projectId(504);
  const tmp6 = projectId(18445).useConjureProjectServerCandidates(projectId).length > 0;
  if (null != stateFromStores) {
    if (isProjectOwner(stateFromStores)) {
      let stringResult;
      if (!tmp6) {
        const intl = tmp(1112).intl;
        stringResult = intl.string(stateFromStores(4244).NXvmoQ);
      }
      const obj5 = { title: null, description: null, hasIcons: false, children: null };
      const intl2 = tmp(1112).intl;
      obj5.title = intl2.string(stateFromStores(4244).n431L5);
      const intl3 = tmp(1112).intl;
      if ("guild" === stateFromStores.install_scope) {
        let stringResult1 = stateFromStores1;
        if (stateFromStores1 == null) {
          const intl4 = tmp(1112).intl;
          stringResult1 = intl4.string(tmp11(4244)["6bhivN"]);
        }
        const obj6 = { server: stringResult1 };
        let formatToPlainStringResult = intl3.formatToPlainString(tmp11(4244)["KWBh/Q"], obj6);
      } else {
        formatToPlainStringResult = intl3.string(tmp11(4244)["JQ/7HT"]);
      }
      obj5.description = formatToPlainStringResult;
      const intl5 = tmp(1112).intl;
      const tmp11Result = stateFromStores(4244);
      const obj7 = {
        label: intl5.string("guild" === stateFromStores.install_scope ? tmp11Result["1E5/ay"] : tmp11Result["7SD3ul"]),
        subLabel: stringResult,
        arrow: true,
        disabled: !tmp6,
        onPress() {
              return showConjureProjectServerSheetDefault({ projectId });
            }
      };
      const items4 = [closure_6(tmp(6113).TableRow, obj7), , ];
      let tmp14Result = null;
      if ("guild" === stateFromStores.install_scope) {
        const obj8 = { label: null, onPress: null };
        const intl6 = tmp(1112).intl;
        obj8.label = intl6.string(tmp11(4244).ErhKil);
        obj8.onPress = function onPress() {
          return openConjureMakePersonalAlertDefault({ project: stateFromStores });
        };
        tmp14Result = closure_6(tmp(6113).TableRow, obj8);
      }
      items4[1] = tmp14Result;
      let tmp14Result2 = null;
      if ("guild" === stateFromStores.install_scope) {
        const obj9 = { label: null, variant: "danger", onPress: null };
        const intl7 = tmp(1112).intl;
        obj9.label = intl7.string(tmp11(4244).mS61Dm);
        obj9.onPress = function onPress() {
          return openConjureUnpublishUserAppAlertDefault(stateFromStores);
        };
        tmp14Result2 = closure_6(tmp(6113).TableRow, obj9);
      }
      items4[2] = tmp14Result2;
      obj5.children = items4;
      return closure_7(tmp(6109).TableRowGroup, obj5);
    }
  }
  return null;
};