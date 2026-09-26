// discord_app/modules/vibegrations/native/useVibegrationsPreviewMenu.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import vibegrationsExternalConnections from "../vibegrationsExternalConnections.tsx";
import vibegrationsProjectMenuItems from "../lib/vibegrationsProjectMenuItems.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import VibegrationsConnectionStore from "../stores/VibegrationsConnectionStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/useVibegrationsPreviewMenu.tsx");

export default function useVibegrationsPreviewMenu(projectId) {
  projectId = projectId.projectId;
  const refreshApplicationId = projectId.refreshApplicationId;
  let pending;
  const tmp = refreshApplicationId(pending[2])(refreshApplicationId);
  pending = tmp.pending;
  const refresh = tmp.refresh;
  const vibegrationsConnectActions = projectId(pending[3]).useVibegrationsConnectActions(
    projectId,
    projectId(pending[4]).presentError,
  );
  const pending2 = vibegrationsConnectActions.pending;
  const connect = vibegrationsConnectActions.connect;
  let obj = projectId(pending[3]);
  const items = [pending2];
  const items1 = [projectId];
  const stateFromStores = projectId(pending[5]).useStateFromStores(
    items,
    () => VibegrationsConnectionStore.getDeclaredConnections(projectId),
    items1,
  );
  const items2 = [stateFromStores];
  const memo = refresh.useMemo(() => vibegrationsExternalConnections.externalConnectionOffers(stateFromStores), items2);
  const items3 = [pending2, memo, refreshApplicationId, pending];
  const memo1 = refresh.useMemo(
    () =>
      vibegrationsProjectMenuItems.previewMenuItems({
        canRefresh: null != refreshApplicationId,
        refreshPending: pending,
        offers: memo,
        connectPending: pending2,
      }),
    items3,
  );
  const items4 = [connect, stateFromStores, refresh];
  const onPress = refresh.useCallback((kind) => {
    if ("refresh" !== kind.kind) {
      const found = stateFromStores.find((type) => type.type === kind.connectionType);
      if (null != found) {
        if (found.configured) {
          connect(found);
        } else {
          const intl = util.intl;
          ToastUtils.presentError(intl.string(_modDef3715.avu1u4));
        }
      }
    } else {
      refresh();
    }
  }, items4);
  const items5 = [memo1, onPress];
  return refresh.useMemo(() => ({ items: memo1, onPress }), items5);
}
