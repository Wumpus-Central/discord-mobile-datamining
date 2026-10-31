// === Module 12545: useConjurePreviewMenu ===

// Module 12545 (useConjurePreviewMenu)
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import conjureExternalConnections from "conjureExternalConnections" /* 12517 */;
import conjureProjectMenuItems from "conjureProjectMenuItems" /* 12547 */;
import noop from "module_19" /* 19 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10869 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/native/useConjurePreviewMenu.tsx");

export default function useConjurePreviewMenu(projectId) {
  projectId = projectId.projectId;
  const refreshApplicationId = projectId.refreshApplicationId;
  let pending;
  const tmp = refreshApplicationId(pending[2])(refreshApplicationId);
  pending = tmp.pending;
  const refresh = tmp.refresh;
  const conjureConnectActions = projectId(pending[3]).useConjureConnectActions(projectId, projectId(pending[4]).presentError);
  const pending2 = conjureConnectActions.pending;
  const connect = conjureConnectActions.connect;
  let obj = projectId(pending[3]);
  const items = [pending2];
  const items1 = [projectId];
  const stateFromStores = projectId(pending[5]).useStateFromStores(items, () => ConjureSettingsStore.getDeclaredConnections(projectId), items1);
  const items2 = [stateFromStores];
  const memo = refresh.useMemo(() => conjureExternalConnections.externalConnectionOffers(stateFromStores), items2);
  const items3 = [pending2, memo, refreshApplicationId, pending];
  const memo1 = refresh.useMemo(() => conjureProjectMenuItems.previewMenuItems({ canRefresh: null != refreshApplicationId, refreshPending: pending, offers: memo, connectPending: pending2 }), items3);
  const items4 = [connect, stateFromStores, refresh];
  const onPress = refresh.useCallback((kind) => {
    if ("refresh" !== kind.kind) {
      const found = stateFromStores.find((type) => type.type === kind.connectionType);
      if (null != found) {
        if (found.configured) {
          connect(found);
        } else {
          const intl = util.intl;
          ToastUtils.presentError(intl.string(_modDef3868["jCQ/1B"]));
        }
      }
    } else {
      refresh();
    }
  }, items4);
  const items5 = [memo1, onPress];
  return refresh.useMemo(() => ({ items: memo1, onPress }), items5);
};